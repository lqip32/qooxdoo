"use strict";
/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2011 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Tino Butz (tbtz)

************************************************************************ */

/**
 * This mixin exposes all basic methods to manage widget children as public methods.
 * It can only be included into instances of {@link Widget}.
 *
 * To optimize the method calls the including widget should call the method
 * {@link #remap} in its classDefined function. This will map the protected
 * methods to the public ones and save one method call for each function.
 */
qx.Mixin.define("qx.ui.mobile.core.MChildrenHandling",
{
  members :
  {
    /**
     * Returns the index position of the given widget if it is
     * a child widget. Otherwise it returns <code>-1</code>.
     *
     * @param child {Widget} the widget to query for
     * @return {Integer} The index position or <code>-1</code> when
     *   the given widget is no child of this layout.
     */
    indexOf : function(child) {
      return this._indexOf(child);
    },


    /**
     * Remove the widget at the specified index.
     *
     * @param index {Integer} Index of the widget to remove.
     */
    removeAt : function(index) {
      this._removeAt(index);
    },


    /**
     * Remove all children.
     */
    removeAll : function() {
      this._removeAll();
    }
  },





  statics :
  {
    /**
     * Mapping of protected methods to public.
     * This omits an additional function call when using these methods. Call
     * this methods in the classDefined block of the including class.
     *
     * @param members {Map} The including classes members map
     */
    remap : function(members)
    {
      members.indexOf = members._indexOf;

      members.removeAt = members._removeAt;
      members.removeAll = members._removeAll;
    }
  }
});
