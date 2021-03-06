/**
 * Copyright 2017 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License'); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

import discoEvents from '../server/disco-events';

beforeEach(() => {
  discoEvents.setCollectionId('collection');
  discoEvents.setProjectId('project');
});

describe('Disco Events builder returns params for discovery create event service', () => {
  test('when opts are NOT passed', () => {
    expect(discoEvents.createEvent()).toEqual({
      type: 'click',
      data: {
        project_id: 'project',
        collection_id: 'collection',
        document_id: undefined,
        session_token: undefined
      }
    });
  });

  test('when opts are passed', () => {
    expect(discoEvents.createEvent(
      '1111111111111',
      '222222222222'
    )).toEqual({
      type: 'click',
      data: {
        project_id: 'project',
        collection_id: 'collection',
        document_id: '1111111111111',
        session_token: '222222222222'
      }
    });
  });
});
