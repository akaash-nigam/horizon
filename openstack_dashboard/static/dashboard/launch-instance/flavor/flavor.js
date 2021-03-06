/*
 *    (c) Copyright 2015 Hewlett-Packard Development Company, L.P.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(function () {
  'use strict';

  var module = angular.module('hz.dashboard.launch-instance');

  module.controller('LaunchInstanceFlavorCtrl', [
    '$scope',
    'launchInstanceModel',
    LaunchInstanceFlavorCtrl
  ]);

  module.controller('LaunchInstanceFlavorHelpCtrl', [
    '$scope',
    LaunchInstanceFlavorHelpCtrl
  ]);

  function LaunchInstanceFlavorCtrl($scope, launchInstanceModel) {

    this.title = gettext('Flavor');
    this.subtitle = gettext("Flavors manage the sizing for the compute, memory and storage capacity of the instance.");
    this.nameLabel = gettext("Name");
    this.vcpusLabel = gettext("VCPUs");
    this.ramLabel = gettext("RAM");
    this.totalDiskLabel = gettext("Total Disk");
    this.rootDiskLabel = gettext("Root Disk");
    this.ephemeralDiskLabel = gettext("Ephemeral Disk");
    this.isPublicLabel = gettext("Public");
    this.idLabel = gettext("ID");

    this.transferTableData = {
      allocated:          launchInstanceModel.newInstanceSpec.flavor,
      displayedAllocated: [],
      available:          launchInstanceModel.flavors,
      displayedAvailable: []
    };

    this.allocationLimits = {
      maxAllocation: 1
    };
  }

  function LaunchInstanceFlavorHelpCtrl($scope) {
    $scope.title = gettext('Flavor Help');
  }

})();
