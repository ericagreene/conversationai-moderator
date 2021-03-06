/*
Copyright 2017 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { registerTask } from './util';

import { heartbeatTask } from './tasks/heartbeat';
import {
  IProcessMachineScoreData,
  processMachineScoreTask,
} from './tasks/process_machine_score';

import {
  ISendCommentForScoringTaskData,
  sendCommentForScoringTask,
} from './tasks/send_comment_for_scoring';

import {
  acceptCommentsTask,
  addTagTask,
  confirmCommentSummaryScoreTask,
  confirmTagTask,
  deferCommentsTask,
  highlightCommentsTask,
  IAcceptCommentsData,
  IAddTagData,
  IConfirmSummaryScoreData,
  IConfirmTagData,
  IDeferCommentsData,
  IHighlightCommentsData,
  IRejectCommentsData,
  IRejectSummaryScoreData,
  IRejectTagData,
  IRemoveTagData,
  IResetCommentsData,
  IResetTagData,
  ITagCommentsData,
  rejectCommentsTask,
  rejectCommentSummaryScoreTask,
  rejectTagTask,
  removeTagTask,
  resetCommentsTask,
  resetTagTask,
  tagCommentsTask,
  tagCommentSummaryScoresTask,
} from './tasks/comment_actions';

import {
  IProcessTagAdditionData,
  IProcessTagRevocationData,
  processTagAdditionTask,
  processTagRevocationTask,
} from './tasks/process_tagging';

registerTask<void>('heartbeat', heartbeatTask);
registerTask<IProcessMachineScoreData>('processMachineScore', processMachineScoreTask);
registerTask<IProcessTagAdditionData>('processTagAddition', processTagAdditionTask);
registerTask<IProcessTagRevocationData>('processTagRevocation', processTagRevocationTask);
registerTask<ISendCommentForScoringTaskData>('sendCommentForScoring', sendCommentForScoringTask);
registerTask<IDeferCommentsData>('deferComments', deferCommentsTask);
registerTask<IHighlightCommentsData>('highlightComments', highlightCommentsTask);
registerTask<ITagCommentsData>('tagComments', tagCommentsTask);
registerTask<ITagCommentsData>('tagCommentSummaryScores', tagCommentSummaryScoresTask);
registerTask<IAcceptCommentsData>('acceptComments', acceptCommentsTask);
registerTask<IRejectCommentsData>('rejectComments', rejectCommentsTask);
registerTask<IResetCommentsData>('resetComments', resetCommentsTask);
registerTask<IResetTagData>('resetTag', resetTagTask);
registerTask<IConfirmTagData>('confirmTag', confirmTagTask);
registerTask<IConfirmSummaryScoreData>('confirmCommentSummaryScore', confirmCommentSummaryScoreTask);
registerTask<IRejectSummaryScoreData>('rejectCommentSummaryScore', rejectCommentSummaryScoreTask);
registerTask<IRejectTagData>('rejectTag', rejectTagTask);
registerTask<IAddTagData>('addTag', addTagTask);
registerTask<IRemoveTagData>('removeTag', removeTagTask);

export * from './tasks';
export * from './util';
export * from './dashboard';
export * from './api';
