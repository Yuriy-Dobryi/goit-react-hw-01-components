import css from './MainWrapper.module.css'

export const MainWrapper = ({children}) => (
  <div className={css.wrapper}>{children}</div>
);