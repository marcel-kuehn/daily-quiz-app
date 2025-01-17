export default {
  root: ({ props, state }) => ({
    class: [
      // Display and Position
      'inline-flex',
      'relative',
      // Shape
      'rounded-md',
      // Color and Background
      'bg-surface-0 dark:bg-surface-900',
      'border',
      { 'border-surface-300 dark:border-surface-600': !props.invalid },
      // Invalid State
      { 'border-red-500 dark:border-red-400': props.invalid },
      // Transitions
      'transition-all',
      'duration-200',
      // States
      { 'hover:border-primary-500 dark:hover:border-primary-300': !props.invalid },
      {
        'outline-none outline-offset-0 ring ring-primary-400/50 dark:ring-primary-300/50':
          state.focused
      },
      // Misc
      'cursor-pointer',
      'select-none',
      {
        'opacity-60': props.disabled,
        'pointer-events-none': props.disabled,
        'cursor-default': props.disabled
      }
    ]
  }),
  input: ({ props }) => ({
    class: [
      //Font
      'font-sans',
      'leading-none',
      // Display
      'block',
      'flex-auto',
      // Color and Background
      'bg-transparent',
      'border-0',
      {
        'text-surface-800 dark:text-white/80': props.modelValue != null,
        'text-surface-400 dark:text-surface-500': props.modelValue == null
      },
      'placeholder:text-surface-400 dark:placeholder:text-surface-500',
      // Sizing and Spacing
      'w-[1%]',
      'p-3',
      { 'pr-7': props.showClear },
      //Shape
      'rounded-none',
      // Transitions
      'transition',
      'duration-200',
      // States
      'focus:outline-none focus:shadow-none',
      // Misc
      'relative',
      'cursor-pointer',
      'overflow-hidden overflow-ellipsis',
      'whitespace-nowrap',
      'appearance-none'
    ]
  }),
  trigger: {
    class: [
      'flex items-center justify-center',
      'shrink-0',
      'bg-transparent',
      'text-surface-500',
      'w-12',
      'rounded-tr-md',
      'rounded-br-md'
    ]
  },
  panel: {
    class: [
      'absolute top-0 left-0',
      'border-0 dark:border',
      'rounded-md',
      'shadow-md',
      'bg-surface-0 dark:bg-surface-800',
      'text-surface-800 dark:text-white/80',
      'dark:border-surface-700'
    ]
  },
  wrapper: {
    class: ['max-h-[200px]', 'overflow-auto']
  },
  list: {
    class: 'py-3 list-none m-0'
  },
  item: ({ context }) => ({
    class: [
      // Font
      'font-normal',
      'leading-none',
      // Position
      'relative',
      // Shape
      'border-0',
      'rounded-none',
      // Spacing
      'm-0',
      'py-3 px-5',
      // Color
      {
        'text-surface-700 dark:text-white/80':
          !context.focused && !context.selected && !context.disabled
      },
      {
        'text-surface-600 dark:text-white/70':
          !context.focused && !context.selected && context.disabled
      },
      {
        'bg-surface-200 dark:bg-surface-600/60 text-surface-700 dark:text-white/80':
          context.focused && !context.selected
      },
      {
        'bg-primary-100 dark:bg-primary-400/40 text-primary-700 dark:text-white/80':
          context.focused && context.selected
      },
      {
        'bg-primary-50 dark:bg-primary-400/40 text-primary-700 dark:text-white/80':
          !context.focused && context.selected
      },
      //States
      {
        'hover:bg-surface-100 dark:hover:bg-surface-600/80': !context.focused && !context.selected
      },
      {
        'hover:text-surface-700 hover:bg-surface-100 dark:hover:text-white dark:hover:bg-surface-600/80':
          context.focused && !context.selected
      },
      'focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring focus-visible:ring-inset focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50',
      // Transitions
      'transition-shadow',
      'duration-200',
      // Misc
      { 'pointer-events-none cursor-default': context.disabled },
      { 'cursor-pointer': !context.disabled },
      'overflow-hidden',
      'whitespace-nowrap'
    ]
  }),
  itemgroup: {
    class: [
      'font-bold',
      'm-0',
      'py-3 px-5',
      'text-surface-800 dark:text-white/80',
      'bg-surface-0 dark:bg-surface-600/80',
      'cursor-auto'
    ]
  },
  emptymessage: {
    class: ['leading-none', 'py-3 px-5', 'text-surface-800 dark:text-white/80', 'bg-transparent']
  },
  header: {
    class: [
      'py-3 px-5',
      'm-0',
      'border-b',
      'rounded-tl-md',
      'rounded-tr-md',
      'text-surface-700 dark:text-white/80',
      'bg-surface-100 dark:bg-surface-800',
      'border-surface-300 dark:border-surface-700'
    ]
  },
  filtercontainer: {
    class: 'relative'
  },
  filterinput: {
    class: [
      'font-sans',
      'leading-none',
      'pr-7 py-3 px-3',
      '-mr-7',
      'w-full',
      'text-surface-700 dark:text-white/80',
      'bg-surface-0 dark:bg-surface-900',
      'border-surface-200 dark:border-surface-700',
      'border',
      'rounded-lg',
      'appearance-none',
      'transition',
      'duration-200',
      'hover:border-primary-500 dark:hover:border-primary-300',
      'focus:ring focus:outline-none focus:outline-offset-0',
      'focus:ring-primary-400/50 dark:focus:ring-primary-300/50',
      'appearance-none'
    ]
  },
  filtericon: {
    class: ['absolute', 'top-1/2 right-3', '-mt-2']
  },
  clearicon: {
    class: ['text-surface-500', 'absolute', 'top-1/2', 'right-12', '-mt-2']
  },
  transition: {
    enterFromClass: 'opacity-0 scale-y-[0.8]',
    enterActiveClass:
      'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
    leaveActiveClass: 'transition-opacity duration-100 ease-linear',
    leaveToClass: 'opacity-0'
  }
}
