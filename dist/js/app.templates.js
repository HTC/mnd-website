(function(module) {
try {
  module = angular.module('mnd-web.templates');
} catch (e) {
  module = angular.module('mnd-web.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('root.html',
    '<div mnd-sidebar ng-controller="SidebarController">\n' +
    '	<div name="before">\n' +
    '		<div id="mnd-sidebar-user">\n' +
    '			<div ng-if="user">\n' +
    '				<img class="img-circle" ng-src="{{user.twitterProfile.pictureUrl}}" />\n' +
    '				<span>{{user.twitterProfile.name}}</span>\n' +
    '				<span ng-click="logout()" class="logout"><i class="fa fa-times-circle"></i></span>\n' +
    '			</div>\n' +
    '			<div ng-if="!user" ng-click="login()" class="login">\n' +
    '				<i class="fa fa-twitter"></i> Sign in with twitter\n' +
    '			</div>\n' +
    '		</div>	\n' +
    '	</div>\n' +
    '	<div name="after">\n' +
    '		<div id="mnd-sidebar-footer">\n' +
    '			<span>\n' +
    '				MONDORA Srl\n' +
    '			</span>\n' +
    '			<br />\n' +
    '			<span class="mnd-sidebar-footer-address">\n' +
    '				Milano, Morbegno, Novara, St. Moritz (CH)<br />\n' +
    '				Via Cornalia 7 - 20154, Milano <br />\n' +
    '			</span>\n' +
    '		</div>	\n' +
    '	</div>	\n' +
    '</div>\n' +
    '<div mnd-toggle-sidebar>\n' +
    '	<div name="center">\n' +
    '		<div id="mnd-sidebar-logo">\n' +
    '			<div class="mnd-mondora-logo">\n' +
    '				<img src="http://mnd-website.s3.amazonaws.com/img/mondora-logo.png" />\n' +
    '			</div>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '</div>\n' +
    '<div mnd-content>\n' +
    '	<div ui-view class="mnd-content"></div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('mnd-web.templates');
} catch (e) {
  module = angular.module('mnd-web.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/mindmap/mindmap-orig.html',
    '\n' +
    '<!--<div class="mm-wrapper">\n' +
    '	<div class="mm-children">\n' +
    '		<div ng-repeat="child in map.children" ng-style="getStyle(map)" mnd-mind-map map="child" edit="edit" child="true" level="level + 1"></div>\n' +
    '	</div>\n' +
    '	<div class="mm-parent">\n' +
    '		<a href="{{map.href}}">{{map.text}}</a>\n' +
    '		<input ng-if="edit" type="text" ng-model="map.text" placeholder="Text" />\n' +
    '		<input ng-if="edit" type="text" ng-model="map.href" placeholder="Url" />\n' +
    '		<i ng-if="edit && child" class="fa fa-times mnd-clickable" ng-click="autodestroy()"></i>\n' +
    '		<i ng-if="edit" class="fa fa-plus mnd-clickable" ng-click="addChild()"></i>\n' +
    '	</div>\n' +
    '</div>-->\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('mnd-web.templates');
} catch (e) {
  module = angular.module('mnd-web.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/mindmap/mindmap.html',
    '<div class="tree">\n' +
    '	<ul>\n' +
    '		<div mnd-mind-map-recursive map="map" edit="edit" child="true"></div>\n' +
    '	</ul>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('mnd-web.templates');
} catch (e) {
  module = angular.module('mnd-web.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/mindmap/mindmaprecursive.html',
    '<li>\n' +
    '	<a ng-if="!edit" href="{{map.href}}">{{map.text}}</a>\n' +
    '	<input ng-if="edit" type="text" ng-model="map.text" placeholder="Text" />\n' +
    '	<input ng-if="edit" type="text" ng-model="map.href" placeholder="Url" />\n' +
    '	<i ng-if="edit && child" class="fa fa-times mnd-clickable" ng-click="autodestroy()"></i>\n' +
    '	<i ng-if="edit" class="fa fa-plus mnd-clickable" ng-click="addChild()"></i>\n' +
    '	<ul ng-show="map.children.length">\n' +
    '		<div ng-repeat="child in map.children" mnd-mind-map-recursive map="child" edit="edit" child="true"></div>\n' +
    '	</ul>\n' +
    '</li>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('mnd-web.templates');
} catch (e) {
  module = angular.module('mnd-web.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('pages/home/home.html',
    '<div id="mnd-home-container">\n' +
    '	<div id="mnd-sign-in">\n' +
    '		<span ng-if="!signedIn" ng-click="login()"><i class="fa fa-twitter"></i> Sign In</span>\n' +
    '		<span ng-if="signedIn" ng-click="logout()"><i class="fa fa-twitter"></i> Sign Out</span>\n' +
    '	</div>\n' +
    '\n' +
    '	<div id="mnd-hidden-payoff">\n' +
    '		ONE STEP AHEAD<br />THE FUTURE\n' +
    '	</div>\n' +
    '\n' +
    '	<div id="mnd-sprinkle-container">\n' +
    '		<div mnd-sprinkle autoplay="true" autoplay-delay="3" text="{{sprinkleText}}"></div>\n' +
    '	</div>\n' +
    '\n' +
    '	<div id="mnd-home-bottom">\n' +
    '		<div id="mnd-home-logo">\n' +
    '			<div class="mnd-mondora-logo">\n' +
    '				<img src="http://mnd-website.s3.amazonaws.com/img/mondora-logo.png" alt="logo" />\n' +
    '			</div>\n' +
    '		</div>\n' +
    '		<div id="mnd-home-banner">\n' +
    '			<div id="mnd-home-banner-content">\n' +
    '				<h1>{{banner.title}}</h1>\n' +
    '				<h2>{{banner.date}}</h2>\n' +
    '				{{banner.text}}\n' +
    '			</div>\n' +
    '			<div id="mnd-home-banner-arrow"></div>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '</div>\n' +
    '\n' +
    '<div id="mnd-video-background">\n' +
    '	<div class="mnd-video-overlay"></div>\n' +
    '	<video muted autoplay="1" loop="1" ng-src="{{videoSource}}" ng-attr-poster="{{videoPoster}}"> \n' +
    '	</video>\n' +
    '	<img ng-src="{{videoPoster}}" />\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('mnd-web.templates');
} catch (e) {
  module = angular.module('mnd-web.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('pages/notFound/notFound.html',
    '<div>\n' +
    '	La pagina che cerchi non è disponibile.\n' +
    '	<a ui-sref="home()">Torna alla home</a>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('mnd-web.templates');
} catch (e) {
  module = angular.module('mnd-web.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('pages/profile/profile.html',
    '<div class="col-sm-8 col-sm-offset-2">\n' +
    '\n' +
    '	<br />\n' +
    '	<br />\n' +
    '	<div class="row">\n' +
    '		<div class="col-sm-4">\n' +
    '			<img ng-src="{{user.profile.pictureUrl || user.twitterProfile.pictureUrl}}" class="img-circle mnd-clickable" width="200" height="200" ng-click="clickFileInput()" />\n' +
    '			<input id="profilePictureFileInput" type="file" ng-file-select="onFileSelect($files)" class="hidden" />\n' +
    '			<span ng-show="isUploading">\n' +
    '				<progressbar value="uploadProgress"></progressbar>\n' +
    '			</span>\n' +
    '		</div>\n' +
    '		<div class="col-sm-8">\n' +
    '			<h2>{{user.twitterProfile.name}}</h2>\n' +
    '			<h3><i>@{{user.twitterProfile.screenName}}</i></h3>\n' +
    '\n' +
    '			<input type="email" class="form-control" ng-model="profile.email" placeholder="Email address" />\n' +
    '		</div>\n' +
    '	</div>\n' +
    '\n' +
    '	<br />\n' +
    '	<br />\n' +
    '	<div class="row">\n' +
    '		<div class="col-sm-6 form-horizontal">\n' +
    '			<div class="form-group">\n' +
    '				<label class="col-sm-2 control-label">Facebook</label>\n' +
    '				<div class="col-sm-10">\n' +
    '					<input type="text" class="form-control" ng-model="profile.facebookUrl" placeholder="Facebook url">\n' +
    '				</div>\n' +
    '			</div>\n' +
    '			<div class="form-group">\n' +
    '				<label class="col-sm-2 control-label">Twitter</label>\n' +
    '				<div class="col-sm-10">\n' +
    '					<input type="text" class="form-control" ng-model="profile.twitterUrl" placeholder="Twitter url">\n' +
    '				</div>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '		<div class="col-sm-6 form-horizontal">\n' +
    '			<div class="form-group">\n' +
    '				<label class="col-sm-2 control-label">LinkedIn</label>\n' +
    '				<div class="col-sm-10">\n' +
    '					<input type="text" class="form-control" ng-model="profile.linkedInUrl" placeholder="LinkedIn url">\n' +
    '				</div>\n' +
    '			</div>\n' +
    '			<div class="form-group">\n' +
    '				<label class="col-sm-2 control-label">Github</label>\n' +
    '				<div class="col-sm-10">\n' +
    '					<input type="text" class="form-control" ng-model="profile.githubUrl" placeholder="Github url">\n' +
    '				</div>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '\n' +
    '	<br />\n' +
    '	<br />\n' +
    '	<div class="row">\n' +
    '		<h3>Short bio</h3>\n' +
    '		<div class="simplebox" id="profileBioEditor"></div>\n' +
    '	</div>\n' +
    '\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('mnd-web.templates');
} catch (e) {
  module = angular.module('mnd-web.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('pages/serverProblems/serverProblems.html',
    '<div>\n' +
    '	Il server ha problemi\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('mnd-web.templates');
} catch (e) {
  module = angular.module('mnd-web.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('pages/user/user.html',
    '<div class="col-sm-8 col-sm-offset-2">\n' +
    '\n' +
    '	<br />\n' +
    '	<br />\n' +
    '	<div class="row">\n' +
    '		<div class="col-sm-4">\n' +
    '			<img ng-src="{{user.profile.pictureUrl || user.twitterProfile.pictureUrl}}" class="img-circle mnd-clickable" width="200" height="200" />\n' +
    '		</div>\n' +
    '		<div class="col-sm-8">\n' +
    '			<h2>{{user.twitterProfile.name}}</h2>\n' +
    '			<h3><i>@{{user.twitterProfile.screenName}}</i></h3>\n' +
    '\n' +
    '			<a href="mailto:{{user.profile.email}}">{{user.profile.email}}</a>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '\n' +
    '	<br />\n' +
    '	<br />\n' +
    '	<div class="row">\n' +
    '		<h3>\n' +
    '			<a ng-if="user.profile.facebookUrl" ng-href="{{user.profile.facebookUrl}}"><i class="fa fa-facebook"></i></a>\n' +
    '			<a ng-if="user.profile.twitterUrl" ng-href="{{user.profile.twitterUrl}}"><i class="fa fa-twitter"></i></a>\n' +
    '			<a ng-if="user.profile.githubUrl" ng-href="{{user.profile.githubUrl}}"><i class="fa fa-github"></i></a>\n' +
    '			<a ng-if="user.profile.linkedInUrl" ng-href="{{user.profile.linkedInUrl}}"><i class="fa fa-linkedin"></i></a>\n' +
    '		</h3>\n' +
    '	</div>\n' +
    '\n' +
    '	<br />\n' +
    '	<br />\n' +
    '	<div class="row">\n' +
    '		<h3>Short bio</h3>\n' +
    '		<div ng-bind-html="user.profile.bio"></div>\n' +
    '	</div>\n' +
    '\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('mnd-web.templates');
} catch (e) {
  module = angular.module('mnd-web.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('pages/post/edit/postEdit.html',
    '<div class="post-cant-edit" ng-show="isMobile"> Contenuto non accessibile da dispositivi mobile.</div> \n' +
    '<div class="post-title-image" ng-show="!isMobile">\n' +
    '	<img ng-src="{{post.titleImageUrl}}" ng-if="titleImageIsDisplayed" alt="Immagine principale" />\n' +
    '	<!--<img class="blur" ng-src="http://s3.amazonaws.com/mnd-website/img/blur.jpg" ng-if="titleImageIsDisplayed"  />-->\n' +
    '</div>\n' +
    '\n' +
    '<div class="post-top-buttons" ng-if="isOwner()" ng-show="!isMobile">\n' +
    '	<span ng-if="showDelete">\n' +
    '		Sei sicuro di voler eliminare il post?\n' +
    '		<button type="button" class="btn btn-default" ng-click="deletePost()">\n' +
    '			Sì\n' +
    '		</button>\n' +
    '		<button type="button" class="btn btn-default" ng-click="toggleDelete()">\n' +
    '			No\n' +
    '		</button>\n' +
    '	</span>\n' +
    '	<button type="button" class="btn btn-default" ng-click="toggleDelete()" ng-if="!showDelete">\n' +
    '		Elimina\n' +
    '	</button>\n' +
    '	<button type="button" class="btn btn-default" ng-click="publishPost()" ng-if="!post.published">\n' +
    '		Pubblica\n' +
    '	</button>\n' +
    '	<button type="button" class="btn btn-default" ng-click="unpublishPost()" ng-if="post.published">\n' +
    '		Rendi privato\n' +
    '	</button>\n' +
    '	<a ui-sref="postView({postId: post._id})" class="btn btn-default">\n' +
    '		Anteprima\n' +
    '	</a>\n' +
    '</div>\n' +
    '\n' +
    '<div class="mnd-mind-container grey-border" ng-class="{\'black-connections\': !titleImageIsDisplayed}" ng-show="!isMobile">\n' +
    '		<div mnd-mind-map map="post.map" edit="true"></div>\n' +
    '</div>\n' +
    '\n' +
    '<div class="post-header" ng-show="!isMobile">\n' +
    '	<div class="col-sm-2 col-sm-offset-2" id="post-edit-image-upload">\n' +
    '		<input type="file" ng-file-select="onFileSelect($files)" class="hidden" />\n' +
    '		<i ng-if="!titleImageIsDisplayed" class="fa fa-picture-o" ng-click="clickFileInput()"></i>\n' +
    '	</div>\n' +
    '	<div class="col-sm-5" id="post-edit-image-upload-progressbar">\n' +
    '		<br />\n' +
    '		<br />\n' +
    '		<span ng-show="isUploading">\n' +
    '			<progressbar value="uploadProgress"></progressbar>\n' +
    '		</span>\n' +
    '	</div>\n' +
    '	<div class="col-sm-1" id="post-edit-image-upload-abort">\n' +
    '		<br />\n' +
    '		<br />\n' +
    '		<i class="fa fa-times" ng-show="isUploading" ng-click="abortUpload()"></i>\n' +
    '	</div>\n' +
    '	<div class="col-sm-8 col-sm-offset-2">\n' +
    '		<h1 class="simplebox post-title" ng-class="{\'color-me-white\': titleImageIsDisplayed}" id="postTitleEditor"></h1>\n' +
    '		<h2 class="simplebox post-subtitle" ng-class="{\'color-me-white\': titleImageIsDisplayed}" id="postSubtitleEditor"></h2>\n' +
    '	</div>\n' +
    '</div>\n' +
    '\n' +
    '<div class="post-body" ng-show="!isMobile">\n' +
    '	<div class="col-sm-8 col-sm-offset-2">\n' +
    '		<div class="simplebox" id="postBodyEditor"></div>\n' +
    '		<div class="post-body-bottom-spacer"></div>\n' +
    '	</div>\n' +
    '</div>\n' +
    '\n' +
    '<div class="post-end-spacer" ng-show="!isMobile"></div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('mnd-web.templates');
} catch (e) {
  module = angular.module('mnd-web.templates', []);
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
  module = angular.module('mnd-web.templates');
} catch (e) {
  module = angular.module('mnd-web.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('pages/post/view/postView.html',
    '<div class="post-title-image">\n' +
    '	<img ng-src="{{post.titleImageUrl}}" ng-if="titleImageIsDisplayed()" alt="Immagine principale" />\n' +
    '	<div class="post-overlay" ng-if="titleImageIsDisplayed()"/></div>\n' +
    '</div>\n' +
    '\n' +
    '<div ng-if="isAuthor()" class="post-top-buttons">\n' +
    '	<a ui-sref="postEdit({postId: post._id})" class="btn btn-default">Modifica</a>\n' +
    '</div>\n' +
    '\n' +
    '<div id="mnd-post-sprinkle-container">\n' +
    '	<div mnd-sprinkle text="{{sprinklePostText()}}"></div>\n' +
    '	<div class="pull-right read-time">Reading time {{estimateReadingTime()}} min</div>\n' +
    '</div>\n' +
    '\n' +
    '<div class="mnd-mind-container">\n' +
    '	<div mnd-mind-map map="post.map" mnd-center></div>\n' +
    '</div>\n' +
    '\n' +
    '<div class="post-header">\n' +
    '	<div class="col-sm-8 col-sm-offset-2">\n' +
    '		<h1 ng-bind-html="post.title" class="post-title" ng-class="{\'color-me-white\': titleImageIsDisplayed()}"></h1>\n' +
    '		<h2 ng-bind-html="post.subtitle" class="post-subtitle" ng-class="{\'color-me-white\': titleImageIsDisplayed()}"></h2>\n' +
    '		<div class="post-author" ng-repeat="author in post.authors">\n' +
    '			<img class="img-circle" ng-src="{{author.imageUrl}}" />\n' +
    '			&nbsp;&nbsp;Author {{author.screenName}}\n' +
    '		</div>\n' +
    '	</div>\n' +
    '</div>\n' +
    '\n' +
    '<div class="post-scroll-to-content" ng-show="isMobile"><i class="fa fa-chevron-down"></i></div>\n' +
    '\n' +
    '<div class="post-body">\n' +
    '	<div class="first-level-html-container" ng-repeat="child in bodyChildren() track by $index">\n' +
    '		<div class="col-sm-8" ng-class="{\'col-sm-offset-2\': !commentBarIsOpen, \'col-sm-offset-1\': commentBarIsOpen}">\n' +
    '			<div class="simplebox" readonly-editor data-disable-editing></div>\n' +
    '		</div>\n' +
    '		<div class="col-sm-2" ng-class="{hidden: commentBarIsOpen}">\n' +
    '			<i class="fa fa-comment comment-bubble" ng-if="!paragraphHasComments($index)" ng-click="openCommentBarAt($index)"></i>\n' +
    '			<span class="badge comment-badge" ng-if="paragraphHasComments($index)" ng-click="openCommentBarAt($index)">{{paragraphCommentsLength($index)}}</span>\n' +
    '		</div>\n' +
    '		<div class="col-sm-3" ng-class="{hidden: !commentBarIsOpen}">\n' +
    '			<div class="side-comment-container" ng-class="{hidden: !commentBarIsOpenAt($index)}">\n' +
    '				<div class="col-sm-12">\n' +
    '					<i class="fa fa-comment comment-bubble-always-visible" ng-click="closeCommentBar()"></i>\n' +
    '				</div>\n' +
    '\n' +
    '				<div class="col-sm-2" ng-if="isAuthor()" ng-repeat-start="comment in post.comments | filterCommentsByParagraph:$index">\n' +
    '					<img class="img-circle" ng-src="{{comment.userPictureUrl}}" width="32" />\n' +
    '				</div>\n' +
    '				<div class="col-sm-10" ng-if="isAuthor()" ng-repeat-end>\n' +
    '                    <p>\n' +
    '                        <b>{{comment.userScreenName}}</b>\n' +
    '                        {{comment.text}}\n' +
    '                    </p>\n' +
    '                    <a class="mnd-clickable" ng-if="ownsComment(comment)" ng-click="deleteComment(comment)">Elimina</a>\n' +
    '                    <a class="mnd-clickable" ng-if="!comment.approved" ng-click="publishComment(comment)">Rendi pubblico</a>\n' +
    '					<hr />\n' +
    '				</div>\n' +
    '\n' +
    '				<div class="col-sm-2" ng-if="!isAuthor()" ng-repeat-start="comment in post.comments | filterCommentsByParagraph:$index | filterCommentsByApprovalStatus:user._id">\n' +
    '					<img class="img-circle" ng-src="{{comment.userPictureUrl}}" width="32" />\n' +
    '				</div>\n' +
    '				<div class="col-sm-10" ng-if="!isAuthor()" ng-repeat-end>\n' +
    '                    <p>\n' +
    '                        <b>{{comment.userScreenName}}</b>\n' +
    '                        {{comment.text}}\n' +
    '                    </p>\n' +
    '                    <a class="mnd-clickable" ng-if="ownsComment(comment)" ng-click="deleteComment(comment)">Elimina</a>\n' +
    '					<hr />\n' +
    '				</div>\n' +
    '\n' +
    '				<div class="col-sm-2">\n' +
    '					<img class="img-circle" ng-src="{{user.twitterProfile.pictureUrl}}" width="32" />\n' +
    '				</div>\n' +
    '				<div class="col-sm-10">\n' +
    '					<p><b>{{user.twitterProfile.screenName}}</b></p>\n' +
    '					<textarea ng-model="comment.text" class="form-control" placeholder="Lascia un commento" rows="1"></textarea>\n' +
    '                    <a class="mnd-clickable" ng-click="saveCommentAt($index)">Salva</a>\n' +
    '					<hr />\n' +
    '					<p>\n' +
    '						Questo commento è solo visibile da te e dall\'autore,\n' +
    '						a meno che l\'autore decida di renderlo pubblico\n' +
    '					</p>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '	<div class="post-body-bottom-spacer"></div>\n' +
    '</div>\n' +
    '');
}]);
})();
