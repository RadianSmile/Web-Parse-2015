// Generated by CoffeeScript 1.9.0
(function() {
  $(function() {
    var View;
    View = (function() {
      var $main, $table, THIS, isInit;

      THIS = void 0;

      $main = $("#main");

      $table = void 0;

      isInit = false;

      function View() {
        THIS = this;
        this.init();
        $table = $("#table");
      }

      View.prototype.init = function() {
        return $main.html("<div class=\"container\">\n  <div class=\"row\">\n    <table id=\"table\" class=\"table table-striped\">\n      <tr >\n          <td>名稱</td>\n          <td>時間</td>\n          <td>學分數</td>\n          <td class=\"favorite\">最愛</td>\n      </tr>\n    </table>\n  </div>\n</div>");
      };

      View.prototype.addRow = function(name, time, credit, courseId) {
        return $table.append("<tr data-courseid=\"" + (courseId != null ? courseId : "") + "\">\n  <td>" + name + "</td>\n  <td>" + time + "</td>\n  <td>" + credit + "</td>\n  <td class=\"favorite\"><span class=\"glyphicon glyphicon-star-empty\"></span></td>\n</tr>");
      };

      View.prototype.toggleFavorite = function($favoriteBtn, active) {
        if (active) {
          return $favoriteBtn.removeClass('glyphicon-star-empty').addClass('glyphicon-star');
        } else {
          return $favoriteBtn.removeClass('glyphicon-star').addClass('glyphicon-star-empty');
        }
      };

      View.prototype.showFavoriteBtn = function() {
        return $('.favorite').addClass('visible');
      };

      return View;

    })();
    return window.View = new View();
  });

}).call(this);