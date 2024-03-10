import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.scss';
import { MailIcon } from './MailIcon.js';
import { PhoneIcon } from './PhoneIcon.js';
import { Pin3Icon } from './Pin3Icon.js';
import classes from './Profile_page_design2.module.scss';

interface Props {
  className?: string;
}
/* @figmaId 168:356 */
export const Profile_page_design2: FC<Props> = memo(function Profile_page_design2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.profile_container1}>
        <div className={classes.profile_container1__profile_details_container}>
          <div className={classes.profile_container1__profile_details_container__image}></div>
          <div className={classes.profile_container1__profile_details_container__profile_information}>
            <div className={classes.profile_container1__profile_details_container__profile_information__name}>
              Jonny Den
            </div>
            <div className={classes.profile_container1__profile_details_container__profile_information__role}>
              Software developer
            </div>
            <div className={classes.profile_container1__profile_details_container__profile_information__description}>
              Aliquip eu do est nulla consectetur sint ipsum nostrud eiusmod minim. Voluptate dolore commodo adipisicing
              exercitation irure sunt adipisicing eiusmod proident ea mollit Lorem et laborum velit. Aliquip qui ea
              nostrud ipsum quis sint magna voluptate anim laborum dolore tempor ullamco ut. Veniam qui non sint velit
              eiusmod irure do adipisicing sit.{' '}
            </div>
            <div className={classes.profile_container1__profile_details_container__profile_information__more_details}>
              <div
                className={
                  classes.profile_container1__profile_details_container__profile_information__more_details__textboxEmail
                }
              >
                <div
                  className={
                    classes.profile_container1__profile_details_container__profile_information__more_details__textboxEmail__mail
                  }
                >
                  <MailIcon
                    className={
                      classes.profile_container1__profile_details_container__profile_information__more_details__textboxEmail__mail__icon
                    }
                  />
                </div>
                <div
                  className={
                    classes.profile_container1__profile_details_container__profile_information__more_details__textboxEmail__johndoeGmailCom
                  }
                >
                  johndoe@gmail.com
                </div>
              </div>
              <div
                className={
                  classes.profile_container1__profile_details_container__profile_information__more_details__textboxLocation
                }
              >
                <div
                  className={
                    classes.profile_container1__profile_details_container__profile_information__more_details__textboxLocation__pin3
                  }
                >
                  <Pin3Icon
                    className={
                      classes.profile_container1__profile_details_container__profile_information__more_details__textboxLocation__pin3__icon2
                    }
                  />
                </div>
                <div
                  className={
                    classes.profile_container1__profile_details_container__profile_information__more_details__textboxLocation___766HoustonStreet
                  }
                >
                  76-6,Houston street
                </div>
              </div>
              <div
                className={
                  classes.profile_container1__profile_details_container__profile_information__more_details__textboxMobile
                }
              >
                <div
                  className={
                    classes.profile_container1__profile_details_container__profile_information__more_details__textboxMobile__phone
                  }
                >
                  <PhoneIcon
                    className={
                      classes.profile_container1__profile_details_container__profile_information__more_details__textboxMobile__phone__icon3
                    }
                  />
                </div>
                <div
                  className={
                    classes.profile_container1__profile_details_container__profile_information__more_details__textboxMobile__johndoeGmailCom2
                  }
                >
                  9999XXXXXX
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
