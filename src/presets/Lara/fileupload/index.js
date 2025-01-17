export default {
  input: {
    class: 'hidden'
  },
  buttonbar: {
    class: [
      'flex',
      'flex-wrap',
      'bg-surface-50',
      'dark:bg-surface-800',
      'text-surface-700',
      'dark:text-white/80',
      'p-5',
      'gap-2',
      'border',
      'border-solid',
      'border-surface-200',
      'dark:border-surface-700',
      'border-b-0',
      'rounded-tr-lg',
      'rounded-tl-lg'
    ]
  },
  chooseButton: {
    class: [
      'relative',
      'items-center inline-flex text-center align-bottom justify-center',
      'px-4 py-3',
      'rounded-md',
      'leading-[normal]',
      'font-bold',
      'text-white dark:text-surface-900',
      'bg-primary-500 dark:bg-primary-400',
      'border-primary-500 dark:border-primary-400',
      'hover:bg-primary-600 dark:hover:bg-primary-300',
      'overflow-hidden',
      'cursor-pointer'
    ]
  },
  chooseIcon: {
    class: ['mr-2', 'inline-block']
  },
  chooseButtonLabel: {
    class: ['flex-1', 'font-bold']
  },
  uploadbutton: {
    icon: {
      class: 'mr-2'
    }
  },
  cancelbutton: {
    icon: {
      class: 'mr-2'
    }
  },
  content: {
    class: [
      'relative',
      'bg-surface-0',
      'dark:bg-surface-900',
      'text-surface-700',
      'dark:text-white/80',
      'p-8',
      'border',
      'border-surface-200',
      'dark:border-surface-700',
      'rounded-b-lg'
    ]
  },
  file: {
    class: [
      'flex',
      'items-center',
      'flex-wrap',
      'p-4',
      'mb-2',
      'last:mb-0',
      'border',
      'border-surface-200',
      'dark:border-surface-700',
      'gap-2',
      'rounded'
    ]
  },
  thumbnail: {
    class: 'shrink-0'
  },
  fileName: {
    class: 'mb-2 break-all'
  },
  fileSize: {
    class: 'mr-2'
  },
  uploadicon: {
    class: 'mr-2'
  },
  progressbar: {
    root: {
      class: [
        'overflow-hidden',
        'absolute top-0 left-0',
        'border-0',
        'h-2',
        'rounded-md',
        'w-full',
        'bg-surface-100 dark:bg-surface-700'
      ]
    },
    value: {
      class: [
        'absolute flex items-center justify-center overflow-hidden',
        'bg-primary-500 dark:bg-primary-400',
        'm-0',
        'h-full w-0',
        'border-0',
        'transition-width duration-1000 ease-in-out'
      ]
    }
  }
}
