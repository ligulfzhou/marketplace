import React from 'react'
import classnames from 'classnames'
import { Popup } from 'decentraland-ui'
import { t } from 'decentraland-dapps/dist/modules/translation/utils'
import { Rarity } from '@dcl/schemas'
import { Props } from './RarityBadge.types'
import styles from './RarityBadge.module.css'

const RarityBadge = ({ rarity, size, withTooltip, onClick }: Props) => {
  return (
    <Popup
      position="top center"
      content={t(`rarity_description.${rarity}`)}
      disabled={!withTooltip}
      trigger={
        <div
          className={classnames([styles.badge, styles[size]])}
          style={{
            backgroundColor: Rarity.getColor(rarity)
          }}
          title={!withTooltip ? t(`rarity_description.${rarity}`) : ''}
          onClick={onClick}
        >
          <span className={styles.text}>{t(`rarity.${rarity}`)}</span>
        </div>
      }
    />
  )
}

RarityBadge.defaultProps = {
  size: 'small',
  withTooltip: true
}

export default React.memo(RarityBadge)
