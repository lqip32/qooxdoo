/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2013 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Fabian Jakobs (fjakobs)

************************************************************************ */

/**
 * The test loader is the base class of a native application, which can be used
 * to run tests from a non-GUI application or from within JSUnit.
 */
qx.Bootstrap.define("qx.dev.unit.TestLoaderMobile",
{
  extend : qx.application.Mobile,

  include : [qx.dev.unit.MTestLoader],


  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    // overridden
    main : function()
    {
      this.base(qx.application.Mobile, "main");

      // Dependencies to loggers
      qx.log.appender.Console;

      var url = this._getClassNameFromUrl();
      if (url !== "__unknown_class__") {
        this.testNamespace = this._getClassNameFromUrl();
      }

      if (window.top.jsUnitTestSuite)
      {
        this.runJsUnit();
        return;
      }

      if (window == window.top)
      {
        this.runStandAlone();
        return;
      }
    }
  }
});
