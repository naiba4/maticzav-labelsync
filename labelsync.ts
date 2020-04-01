import { labelsync, repo, label, colors } from 'label-sync'

/* Repository */
import { prisma } from './repos/prisma'
import { github } from './repos/github'

/* Config */
labelsync({
  repos: {
    /* Check presets in the repos folder. */
    // prisma,
    // github,
    /* Personalized repositories */
    resk: repo({
      config: {
        removeUnconfiguredLabels: false,
      },
      labels: [
        label({
          name: 'test/jason',
          color: colors.danger,
        }),
        /* Bugs */
        label({
          name: 'bug/0-needs-info',
          color: colors.danger,
          description: 'More information is needed for reproduction.',
          siblings: ['kind/bug'],
        }),
        label({
          name: 'bug/1-repro-available',
          color: colors.danger,
          description: 'A reproduction exists and needs to be confirmed.',
          siblings: ['kind/bug'],
        }),
        label({
          name: 'bug/2-confirmed',
          color: colors.danger,
          description: 'We have confirmed that this is a bug.',
          siblings: ['kind/bug'],
        }),
        /* Kind */
        label({
          name: 'kind/bug',
          color: colors.neutral,
          description: 'A reported bug.',
          alias: ['bug'],
        }),
        label({
          name: 'kind/regression',
          color: colors.neutral,
          description: 'A reported bug in functionality that used to work before.',
        }),
        label({
          name: 'kind/feature',
          color: colors.neutral,
          description: 'A request for a new feature.',
          alias: ['enhancement'],
        }),
        label({
          name: 'kind/improvement',
          color: colors.neutral,
          description: 'An improvement to existing feature and code.',
        }),
        label({
          name: 'kind/docs',
          color: colors.neutral,
          description: 'A documentation change is required.',
          alias: ['documentation'],
        }),
        label({
          name: 'kind/discussion',
          color: colors.neutral,
          description: 'Discussion is required.',
        }),
        label({
          name: 'kind/question',
          color: colors.neutral,
          description: 'Developer asked a question. No code changes required.',
          alias: ['question'],
        }),
      ],
    }),
  },
})
