/* eslint-disable */
import embed from './configure';
import connect from './connect';

async function run() {
  const app = await connect({
    url: 'https://websyio.eu.qlikcloud.com',
    webIntegrationId: '5aiSMsgWsQoofijp1ci_XN726c9mSxPj',
    appId: 'd8d5a3f6-7a5c-47ab-9e7d-57e321c07f0b',
  });

  const n = embed(app);

  (await n.selections()).mount(document.querySelector('.toolbar'));

  n.render(
    {
    element: document.querySelector('.bar-chart'),
    type: 'barchart',
    fields: ['Year', '=Sum(1)' ],
    properties: {
      color: { mode: 'byDimension' },
    },
  }
  );
  n.render(
    {
      element: document.querySelector('.line-chart'),
      id: 'hqmR',
      }

  )
  n.render(
    {
      element: document.querySelector('.pie-chart'),
      id: 'BQwfHvX'
      }
  )
  n.render(
    {
      // element: document.querySelector('.table'),
      // id: 'pPBP',
      type: 'table',
      element: document.querySelector('.table'),
      fields: ['Route', '=Sum(Count)'],
      properties: {
        components: [
          {
            key: 'theme',
            content: {
              fontSize: 14,
              fontColor: {
                index: -1,
                color: '#276e27',
              },
              hoverEffect: true,
              hoverColor: {
                index: -1,
                color: '#7db8da',
              },
              hoverFontColor: {
                index: -1,
                color: '#4477aa',
              },
            },
            header: {
              fontSize: 15,
              fontColor: {
                index: -1,
                color: '#ffffff',
              },
            },
          },
        ],
      },
    }

  )
}

run();
