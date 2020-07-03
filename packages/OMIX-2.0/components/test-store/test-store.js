import create from '../../utils/create'

// debugger
create.Component({
  use: ['logs'],
  computed: {
    logsLength() {
      return this.logs.length
    }
  }
})
