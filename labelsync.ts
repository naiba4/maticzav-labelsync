import { labelsync } from 'label-sync'

/* Repository */
import { graphqlshield } from './repos/graphqlshield'
import { labelSync } from './repos/labelsync'
import { nookies } from './repos/nookies'
import { resk } from './repos/resk'

/* Config */
labelsync({
  repos: {
    resk,
    'label-sync': labelSync,
    'graphql-shield': graphqlshield,
    'graphql-middleware': graphqlshield,
    nookies: nookies,
  },
})
