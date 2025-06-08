import './Button.css'

const Button = ({
    children,
    variant = 'primary',
    size = 'medium',
    onClick,
    disabled = false,
    type = 'button',
    className = '',
    icon,
    fullWidth = false,
    ...props
}) => {
    const classNames = [
        'btn',
        `btn--${variant}`,
        `btn--${size}`,
        fullWidth && 'btn--full-width',
        className
    ].filter(Boolean).join(' ')

    return (
        <button
            type={type}
            className={classNames}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {icon && <span className="btn__icon">{icon}</span>}
            {children}
        </button>
    )
}

export default Button