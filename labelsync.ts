import { labelsync, repo, label, colors } from 'label-sync'

/* Repository */
import { resk } from './repos/resk'
import { labelSync } from './repos/labelsync'

/* Config */
labelsync({
  repos: {
    resk,
    'label-sync': labelSync,
  },
})
