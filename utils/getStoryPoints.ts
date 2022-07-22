import { SCORE_MAP } from '~/constants'

interface Props {
    uncertainty: number;
    complexity: number;
    effort: number;
}

export const getStoryPoints = (props: Props) => {
  const key = `${props.uncertainty}${props.complexity}${props.effort}`

  return SCORE_MAP[key]
}
