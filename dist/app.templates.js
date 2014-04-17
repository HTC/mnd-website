(function(module) {
try {
  module = angular.module('mnd.web');
} catch (e) {
  module = angular.module('mnd.web', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('pages/home/home.html',
    '<div id="mnd-video-background">\n' +
    '	<div class="mnd-video-overlay"></div>\n' +
    '	<video muted autoplay="1" loop="1"> \n' +
    '		<source src="http://download.mondora.s3.amazonaws.com/mondora.mp4" />\n' +
    '	</video>\n' +
    '</div>\n' +
    '<div id="mnd-fixed-position">\n' +
    '	<div id="mnd-sign-in" ng-click="login()">\n' +
    '		<span ng-if="!signedIn">Sign In</span>\n' +
    '	</div>\n' +
    '	<div id="mnd-hidden-payoff">ONE STEP AHEAD<br />THE FUTURE</div>\n' +
    '	<div id="mnd-sprinkle-container">\n' +
    '		<div mnd-sprinkle autoplay="true" autoplay-delay="3" text="{{text}}"></div>\n' +
    '	</div>\n' +
    '	<div id="mnd-home-bottom">\n' +
    '		<div id="mnd-home-logo">\n' +
    '			<div class="mnd-mondora-logo">\n' +
    '				<img src="http://mnd-website.s3.amazonaws.com/img/mondora-logo.png" alt="logo" />\n' +
    '			</div>\n' +
    '		</div>\n' +
    '		<div id="mnd-home-banner">\n' +
    '			<div id="mnd-home-banner-content">\n' +
    '			</div>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('mnd.web');
} catch (e) {
  module = angular.module('mnd.web', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('pages/post/edit/postEdit.html',
    '<div class="col-sm-8 col-sm-offset-2">\n' +
    '	<div id="post-img-upload">\n' +
    '		<i class="fa fa-picture-o"></i>\n' +
    '	</div>\n' +
    '	<!--\n' +
    '	<h1 class="simplebox" ng-model="post.title" medium-editor options="{{titleEditorOptions}}"></h1>\n' +
    '	<h3 class="simplebox" ng-model="post.subtitle" medium-editor options="{{subtitleEditorOptions}}"></h3>\n' +
    '	<p class="simplebox" ng-model="post.body" medium-editor options="{{bodyEditorOptions}}"></p>\n' +
    '	-->\n' +
    '	<h1 class="simplebox" id="postTitleEditor"></h1>\n' +
    '	<h3 class="simplebox" id="postSubtitleEditor"></h3>\n' +
    '	<p class="simplebox" id="postBodyEditor"></p>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('mnd.web');
} catch (e) {
  module = angular.module('mnd.web', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('pages/post/list/postList.html',
    '<div class="col-sm-8 col-sm-offset-4">\n' +
    '	<div ng-repeat="post in posts">\n' +
    '		<a ui-sref="postEdit({postId: post._id})">\n' +
    '			<h4>Titolo: {{post.title}}</h4>\n' +
    '		</a>\n' +
    '	</div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('mnd.web');
} catch (e) {
  module = angular.module('mnd.web', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('pages/post/insert/postInsert.html',
    '<div class="col-sm-8 col-sm-offset-2">\n' +
    '</div>\n' +
    '');
}]);
})();
