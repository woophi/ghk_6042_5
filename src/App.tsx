import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { Collapse } from '@alfalab/core-components/collapse';
import { Gap } from '@alfalab/core-components/gap';
import { PureCell } from '@alfalab/core-components/pure-cell';
import { Typography } from '@alfalab/core-components/typography';
import { BanknotesLineMIcon } from '@alfalab/icons-glyph/BanknotesLineMIcon';
import { BellMIcon } from '@alfalab/icons-glyph/BellMIcon';
import { BulbMIcon } from '@alfalab/icons-glyph/BulbMIcon';
import { ChevronDownMIcon } from '@alfalab/icons-glyph/ChevronDownMIcon';
import { ChevronUpMIcon } from '@alfalab/icons-glyph/ChevronUpMIcon';
import { CrownMIcon } from '@alfalab/icons-glyph/CrownMIcon';
import { LightningMIcon } from '@alfalab/icons-glyph/LightningMIcon';
import { useEffect, useState } from 'react';
import hb from './assets/hb.png';
import heart from './assets/heart.png';
import house from './assets/house.png';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';

const items = [
  {
    title: 'Будьте первыми',
    text: 'Ранний доступ к новым функциям приложения Альфа Ивестиции',
    IconComp: LightningMIcon,
  },
  {
    title: 'Приоритетная поддержка',
    text: 'Любой вопрос в чате Альфа-Инвестиций решится быстрее',
    IconComp: CrownMIcon,
  },
  {
    title: 'Мгновенный вывод до 100 000 ₽ в месяц',
    text: 'Без подписки — до 3 рабочих дней',
    IconComp: BanknotesLineMIcon,
  },
  {
    title: 'Минимум уведомлений',
    text: 'Возможность отключить маркетинговые пуши в Альфа Инвестициях',
    IconComp: BellMIcon,
  },
  {
    title: 'Уведомления по портфелю',
    text: 'Получайте мгновенно информацию по аномалиям с вашим портфелем',
    IconComp: BulbMIcon,
  },
];

const faqs = [
  {
    question: 'Как активировать подписку и когда она начнет действовать?',
    answer:
      'Подписка активируется автоматически сразу после оформления. Преимущества, включая уведомления по портфелю, становятся доступны в течение 1 рабочего дня',
  },
  {
    question: 'Покупка каких акций и облигаций доступна без комиссии',
    answer: 'Лимит распространяется на покупку акций и облигаций. Покупка других классов активов не учитывается',
  },
  {
    question: 'Как происходит розыгрыш денежных призов?',
    answer:
      'Каждый месяц мы случайным образом выбираем 1 000 победителей среди активных подписчиков. Призы варьируются от 500 ₽ до 100 000 ₽. Выплаты осуществляются до конца следующего месяца на ваш брокерский счет',
  },
];

const LINK = 'alfabank://longread?endpoint=v1/adviser/longreads/60715';

if (LS.getItem(LSKeys.ShowThx, false)) {
  window.location.replace(LINK);
}

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [collapsedItems, setCollapsedItem] = useState<string[]>([]);

  useEffect(() => {
    if (!LS.getItem(LSKeys.UserId, null)) {
      LS.setItem(LSKeys.UserId, Date.now());
    }
  }, []);

  const submit = () => {
    window.gtag('event', '6042_add_var5');
    setLoading(true);

    LS.setItem(LSKeys.ShowThx, true);
    setLoading(false);
    window.location.replace(LINK);
  };

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.box}>
          <img src={hb} width={120} height={120} />
          <Typography.TitleResponsive color="primary-inverted" tag="h1" view="medium" font="system" weight="semibold">
            Смарт Инвестиции
          </Typography.TitleResponsive>
          <Typography.Text view="primary-medium" color="primary-inverted">
            30 дней бесплатно, далее — 199 ₽ в месяц
          </Typography.Text>
        </div>

        <Typography.TitleResponsive
          color="primary-inverted"
          style={{ marginTop: '1rem' }}
          tag="h2"
          view="small"
          font="system"
          weight="semibold"
        >
          Что вы получите
        </Typography.TitleResponsive>

        <PureCell className={appSt.cell}>
          <PureCell.Graphics verticalAlign="center">
            <img src={house} width={48} height={48} alt="house" />
          </PureCell.Graphics>
          <PureCell.Content>
            <PureCell.Main>
              <Typography.TitleResponsive color="primary-inverted" tag="h3" view="xsmall" font="system" weight="semibold">
                Покупка акций и облигаций без комиссии
              </Typography.TitleResponsive>

              <Typography.Text view="primary-small" color="secondary-inverted">
                на сумму до 100 000 ₽
              </Typography.Text>
            </PureCell.Main>
          </PureCell.Content>
        </PureCell>

        <PureCell className={appSt.cell}>
          <PureCell.Graphics verticalAlign="center">
            <img src={heart} width={48} height={48} alt="heart" />
          </PureCell.Graphics>
          <PureCell.Content>
            <PureCell.Main>
              <Typography.TitleResponsive color="primary-inverted" tag="h3" view="xsmall" font="system" weight="semibold">
                Участие в розыгрыше 1 млн ₽
              </Typography.TitleResponsive>

              <Typography.Text view="primary-small" color="secondary-inverted">
                Каждый месяц 1000 победителей. Призы от 500 до 100 000 ₽
              </Typography.Text>
            </PureCell.Main>
          </PureCell.Content>
        </PureCell>

        <Typography.TitleResponsive
          color="primary-inverted"
          style={{ marginTop: '1rem' }}
          tag="h2"
          view="small"
          font="system"
          weight="semibold"
        >
          Подписка бесплатно всегда
        </Typography.TitleResponsive>
        <Typography.Text view="primary-medium" color="secondary-inverted">
          если пополнить любой брокерский счет на сумму от 10 000 ₽ и удерживать её в течение 30 дней - подписка бесплатна до
          момента снижения остатков
        </Typography.Text>

        <Typography.TitleResponsive
          color="primary-inverted"
          style={{ marginTop: '1rem' }}
          tag="h2"
          view="small"
          font="system"
          weight="semibold"
        >
          Больше преимуществ
        </Typography.TitleResponsive>

        {items.map(item => (
          <PureCell className={appSt.cell} key={item.title}>
            <PureCell.Graphics>
              <item.IconComp color="#FFFFFF" />
            </PureCell.Graphics>
            <PureCell.Content>
              <PureCell.Main>
                <Typography.Text color="primary-inverted" view="primary-small" weight="bold">
                  {item.title}
                </Typography.Text>

                <Typography.Text view="primary-small" color="secondary-inverted">
                  {item.text}
                </Typography.Text>
              </PureCell.Main>
            </PureCell.Content>
          </PureCell>
        ))}

        <Typography.TitleResponsive
          color="primary-inverted"
          style={{ marginTop: '1rem' }}
          tag="h2"
          view="small"
          font="system"
          weight="semibold"
        >
          Частые вопросы
        </Typography.TitleResponsive>

        {faqs.map((faq, index) => (
          <div style={{ marginTop: '1rem' }} key={index}>
            <div
              onClick={() => {
                window.gtag('event', `6042_FAQ${index + 1}_var5`);

                setCollapsedItem(items =>
                  items.includes(String(index + 1))
                    ? items.filter(item => item !== String(index + 1))
                    : [...items, String(index + 1)],
                );
              }}
              className={appSt.row}
            >
              <Typography.Text view="primary-medium" weight="medium" color="primary-inverted">
                {faq.question}
              </Typography.Text>
              {collapsedItems.includes(String(index + 1)) ? (
                <div style={{ flexShrink: 0 }}>
                  <ChevronUpMIcon color="#FFFFFF" />
                </div>
              ) : (
                <div style={{ flexShrink: 0 }}>
                  <ChevronDownMIcon color="#FFFFFF" />
                </div>
              )}
            </div>
            <Collapse expanded={collapsedItems.includes(String(index + 1))}>
              <Typography.Text view="primary-medium" color="secondary-inverted">
                {faq.answer}
              </Typography.Text>
            </Collapse>
          </div>
        ))}
      </div>
      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile
          loading={loading}
          block
          view="primary"
          onClick={submit}
          style={{ backgroundColor: '#FFFFFF', color: '#030306E0' }}
        >
          Попробовать бесплатно
        </ButtonMobile>
      </div>
    </>
  );
};
