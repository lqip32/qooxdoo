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
     * Gabriel Munteanu (gabios)

************************************************************************ */

/**
 * A button used in toolbars.
 *
 */
qx.Bootstrap.define("qx.ui.mobile.toolbar.Button",
{
  extend : qx.ui.mobile.Button,


  properties :
  {
    // overridden
    defaultCssClass :
    {
      init : "toolbar-button"
    }
  }

});