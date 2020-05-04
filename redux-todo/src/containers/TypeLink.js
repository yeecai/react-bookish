import { connect } from 'react-redux'
import { setShowFilter } from '../store/actions'
import Link from '../components/link'

const mapStateToProps = ( state, ownProps ) => ({
    active: ownProps.filter === state.getTodosFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setShowFilter(ownProps.filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)
// export default Link