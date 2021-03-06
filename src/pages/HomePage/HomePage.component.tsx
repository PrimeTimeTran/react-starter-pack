import React, { Component, ReactNode } from 'react';
import { IProps } from './HomePage.container';
import { Grid } from '@material-ui/core';
import { Buttons } from 'components/Buttons';
import { i18n } from 'utils/lib/i18n';
import { MainWrapper } from 'components/MainWrapper';
import cra from 'assets/images/cra.png';

export class HomePage extends Component<IProps> {
  public render(): ReactNode {
    const changeLanguages = (lng: string) => {
      i18n.changeLanguage(lng);
      return window.location.reload(false);
    };
    return (
      <MainWrapper>
        <div className="home">
          <img
            className="logo"
            src={cra}
            alt="ToolsForProductivity"
          />
          <p className="text-center">{i18n.t('general.description')}</p>
          <Grid container spacing={3}>
            <Grid item xs={12} className="text-center">
              <Buttons
                color="primary"
                text={i18n.t('general.language.english')}
                onClick={() => changeLanguages('en')}
              />
              <Buttons
                color="primary"
                text={i18n.t('general.language.vietnam')}
                onClick={() => changeLanguages('vn')}
              />
            </Grid>
          </Grid>
        </div>
      </MainWrapper>
    );
  }
}
