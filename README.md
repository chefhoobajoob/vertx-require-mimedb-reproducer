# vertx-require-urijs-reproducer
Reproduces require implementation error for the urijs npm package

## To Reproduce:

1. On Windows: edit `runverticle.bat` to set VERTX_HOME to the path to a vert.x distribution on your local system (I've tested with versions 3.2.1, 3.4.1, and 3.5.3)
2. cd into the project root directory and execute `runverticle.bat`
3. Expected result: verticle launches without error, with the following console output:
```
>>> requiring urijs...
>>> parsing uri (sandwich://ham-and-cheese?mayo=heavy)
>>> parse results {...}
```
4. Actual result: verticle fails to deploy on all tested vert.x versions with the following console output:
```
>>> requiring urijs...
ERROR: <project-root>\node_modules\urijs\src\URI.js#88:17<eval>:160:108 Expected } but found eof
//# sourceURL=<project-root>\node_modules\urijs\src\URI.js

                            ^ in file <project-root>\node_modules\urijs\src\URI.js at line 160
<eval>:111:6 SyntaxError: <eval>#88:17<eval>:160:108 Expected } but found eof
//# sourceURL=<project-root>\node_modules\urijs\src\URI.js

                            ^
```
