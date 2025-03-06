---
title: import.meta.resolve()
slug: Web/JavaScript/Reference/Operators/import.meta/resolve
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("Operators")}}

**`import.meta.resolve()`** ist eine eingebaute Funktion, die auf dem [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)-Objekt eines JavaScript-Moduls definiert ist und einen Modul-Spezifizierer zu einer URL auflöst, wobei die URL des aktuellen Moduls als Basis verwendet wird.

## Syntax

```js-nolint
import.meta.resolve(moduleName)
```

### Parameter

- `moduleName`
  - : Ein String, der ein potenziell importierbares Modul spezifiziert. Dies kann ein relativer Pfad sein (wie `"./lib/helper.js"`), ein einfacher Name (wie `"my-module"`) oder eine absolute URL (wie `"https://example.com/lib/helper.js"`).

### Rückgabewert

Gibt einen String zurück, der dem Pfad entspricht, der importiert würde, wenn das Argument an [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) übergeben würde.

## Beschreibung

`import.meta.resolve()` ermöglicht einem Skript den Zugriff auf den _Modul-Spezifizierer-Auflösungsalgorithmus_ für einen Namen, beispielsweise so:

```js
// Script at https://example.com/main.js

const helperPath = import.meta.resolve("./lib/helper.js");
console.log(helperPath); // "https://example.com/lib/helper.js"
```

Beachten Sie, dass `import.meta.resolve()` nur die Auflösung durchführt und nicht versucht, den resultierenden Pfad zu laden oder zu importieren. Daher ist der Rückgabewert immer gleich, unabhängig davon, ob der zurückgegebene Pfad zu einer Datei gehört, die existiert, und unabhängig davon, ob diese Datei gültigen Code für ein Modul enthält. Dies erlaubt `import.meta.resolve()` eine _synchronisierte_ Operation zu sein.

Es unterscheidet sich vom [dynamischen Import](/de/docs/Web/JavaScript/Reference/Operators/import), denn obwohl beide einen Modul-Spezifizierer als erstes Argument akzeptieren, gibt `import.meta.resolve()` den Pfad zurück, der _importiert würde_, ohne einen Versuch zu unternehmen, auf diesen Pfad zuzugreifen. Daher sind die folgenden beiden im Wesentlichen derselbe Code:

```js
// Approach 1
console.log(await import("./lib/helper.js"));

// Approach 2
const helperPath = import.meta.resolve("./lib/helper.js");
console.log(await import(helperPath));
```

Auch wenn `"./lib/helper.js"` nicht erfolgreich importiert werden kann, wird das zweite Code-Stück erst dann auf einen Fehler stoßen, wenn es versucht, den Import in Zeile 2 durchzuführen.

### Bare Modulnamen

Sie können einen Bare Modulnamen (auch bekannt als Bare Modul-Spezifizierer) an `import.meta.resolve()` übergeben, solange die Modulauflösung für den Namen definiert ist. Zum Beispiel können Sie dies mit einer [Importkarte](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) innerhalb eines Browsers definieren:

```html
<!-- index.html -->
<script type="importmap">
  {
    "imports": {
      "my-module": "./modules/my-module/index.js"
    }
  }
</script>

<script type="module">
  const moduleEntryPath = import.meta.resolve("my-module");
  console.log(moduleEntryPath);
</script>
```

Da in diesem Code-Stück nicht versucht wird, `moduleEntryPath` zu importieren — ebenso wenig wie die Importkarte — wird die aufgelöste URL ausgegeben, unabhängig davon, ob `./modules/my-module/index.js` tatsächlich existiert.

### Vergleich mit neuem URL()

Der [`URL()`](/de/docs/Web/API/URL/URL)-Konstruktor akzeptiert ein zweites Argument als Basis-URL. Wenn das erste Argument ein relativer Pfad und die Basis-URL [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta#value) ist, ähnelt die Wirkung der von `import.meta.resolve()`.

```js
const helperPath = new URL("./lib/helper.js", import.meta.url).href;
console.log(helperPath);
```

Dies ist auch eine nützliche Ersetzungssyntax, wenn ältere Browser unterstützt werden sollen. Es gibt jedoch einige Unterschiede:

- `import.meta.resolve()` gibt einen String zurück, während `new URL()` ein `URL`-Objekt zurückgibt. Es ist möglich, [`href`](/de/docs/Web/API/URL/href) oder [`toString()`](/de/docs/Web/API/URL/toString) auf die konstruierte `URL` anzuwenden, aber das kann in einigen JavaScript-Umgebungen oder beim Einsatz von Tools wie Bundlern zur statischen Code-Analyse trotzdem nicht dasselbe Resultat produzieren.
- `import.meta.resolve()` kennt zusätzliche Auflösungskonfigurationen, wie z.B. das Auflösen von Bare Modulnamen mithilfe von Importkarten, wie oben beschrieben. `new URL()` kennt Importkarten nicht und behandelt Bare Modulnamen als relative Pfade (d.h. `new URL("my-module", import.meta.url)` bedeutet `new URL("./my-module", import.meta.url)`).

Einige Tools erkennen `new URL("./lib/helper.js", import.meta.url).href` als Abhängigkeit von `"./lib/helper.js"` (ähnlich wie ein Import) und berücksichtigen dies für Funktionen wie Bündelung, Umschreiben von Importen bei verschobenen Dateien, Funktionalität wie "Zur Quelle gehen" usw. Da `import.meta.resolve()` jedoch weniger Mehrdeutigkeiten aufweist und speziell entwickelt wurde, um eine Abhängigkeit von der Modulpfadauflösung anzuzeigen, sollten Sie `import.meta.resolve(moduleName)` anstelle von `new URL(moduleName, import.meta.url)` für diese Anwendungsfälle wann immer möglich verwenden.

### Kein ECMAScript-Feature

`import.meta.resolve()` wird nicht als Teil der [ECMAScript-Spezifikation](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview#javascript_the_core_language_ecmascript) für JavaScript-Module spezifiziert oder dokumentiert. Stattdessen definiert die Spezifikation [das `import.meta`-Objekt](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#prod-ImportMeta), lässt aber [alle seine Eigenschaften als "host-definiert"](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-hostgetimportmetaproperties). Der WHATWG HTML-Standard setzt da an, wo der ECMAScript-Standard aufhört, und [definiert `import.meta.resolve`](https://html.spec.whatwg.org/multipage/webappapis.html#hostgetimportmetaproperties) unter Verwendung seiner [Modul-Spezifizierer-Auflösung](https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier).

Das bedeutet, dass `import.meta.resolve()` nicht von allen konformen JavaScript-Implementierungen implementiert werden muss. Dennoch kann `import.meta.resolve()` auch in Nicht-Browser-Umgebungen verfügbar sein:

- Deno implementiert [Kompatibilität mit dem Verhalten von Browsern](https://docs.deno.com/runtime/reference/deno_namespace_apis/#import.meta).
- Node.js implementiert auch die [Funktion `import.meta.resolve()`](https://nodejs.org/docs/latest/api/esm.html#importmetaresolvespecifier), fügt aber einen zusätzlichen `parent`-Parameter hinzu, wenn Sie das Flag `--experimental-import-meta-resolve` verwenden.

## Beispiele

### Auflösung eines Pfades für den Worker()-Konstruktor

`import.meta.resolve()` ist besonders wertvoll für APIs, die einen Pfad zu einer Skriptdatei als Argument benötigen, wie der [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktor:

```js
// main.js
const workerPath = import.meta.resolve("./worker.js");
const worker = new Worker(workerPath, { type: "module" });
worker.addEventListener("message", console.log);
```

```js
// worker.js
self.postMessage("hello!");
```

Dies ist auch nützlich, um Pfade für andere Worker zu berechnen, wie [Service-Worker](/de/docs/Web/API/ServiceWorker) und [Shared-Worker](/de/docs/Web/API/SharedWorker). Wenn Sie jedoch einen relativen Pfad verwenden, um die URL eines Service-Workers zu berechnen, bedenken Sie, dass das Verzeichnis des aufgelösten Pfads standardmäßig dessen [Registrierungsscope](/de/docs/Web/API/ServiceWorkerRegistration/scope) bestimmt (obwohl ein anderer Scope[während der Registrierung](/de/docs/Web/API/ServiceWorkerContainer/register) angegeben werden kann).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)
- [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import)
- [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)
