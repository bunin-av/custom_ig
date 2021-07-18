import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
  {
      options, value,
      onChange, onChangeOption,
      ...restProps
  }
) => {
    const mappedOptions: any[] = options ? options.map((o, i) => (
      <option key={o + i} value={o} title={o} label={o}/>
    )) : [] // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChangeOption) {
            onChangeOption(e.currentTarget.value)
        }
    }
// onChange, onChangeOption
    return (
      <select onChange={onChangeCallback} {...restProps} value={value}>
          {mappedOptions}
      </select>
    )
}

export default SuperSelect
