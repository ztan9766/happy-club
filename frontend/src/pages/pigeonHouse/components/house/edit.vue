<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="名称" required>
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="描述">
      <el-input v-model="form.description"></el-input>
    </el-form-item>
    <el-form-item label="日期" required>
      <el-input type="date" v-model="form.date"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button v-if="isNew" type="primary" @click="onSubmit">保存</el-button>
      <el-button v-else type="primary" @click="onSubmit">修改</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import api from '../../api'

export default {
  name: 'house-edit',
  created() {
    this.isNew = this.$route.params.eventId ? false : true
    if(!this.isNew) {
      api.getHouse(this.$route.params.eventId).then(res => {
        this.form = res.data.event
      })
    }
  },
  data() {
    return {
      form: {
        id: '',
        name: '',
        description: '',
        status: '',
        date: ''
      },
      options: [
        {
          label: '关闭',
          value: 'closed'
        },
        {
          label: '完成',
          value: 'compeleted'
        },
        {
          label: '进行中',
          value: 'active'
        }
      ]
    }
  },
  methods: {
    onSubmit() {
      if (this.isNew) {
        if (this.form.name === "" || this.form.date === "") {
          this.$message({
            message: "Please enter a name and select a date.",
            type: "error"
          });
        }else{
          api.createHouse(this.form).then(res => {
          if (res.success) {
            this.$emit('refresh')
            this.$emit('close-house')
            this.clear()
            this.$message({
              message: res.message,
              type: 'success'
            })
          }else{
            this.$message({
              message: res.message,
              type: 'error'
            })
          }
        }).catch(err => {
          this.$message({
            message: err.message,
            type: 'error'
          })
        })
        }
      } else {
        api.updateHouse(this.form._id, this.form).then(res => {
          if (res.success) {
            this.$message({
              message: res.message,
              type: 'success'
            })
          }else{
            this.$message({
              message: res.message,
              type: 'error'
            })
          }
        }).catch(err => {
          this.$message({
            message: err.message,
            type: 'error'
          })
        })
      }
    },
    clear() {
      this.form = {
        id: '',
        name: '',
        description: '',
        status: '',
        date: ''
      }
    }
  }
}
</script>
