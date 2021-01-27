/*
 * @Author: zhangjiawei
 * @Date: 2021-01-27 20:32:27
 */
const requireAll = (requireContext) => requireContext.keys().map(requireContext)
const req = require.context('@/asset/icons', false, /.svg$/)
requireAll(req)