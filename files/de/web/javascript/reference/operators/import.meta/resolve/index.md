---
title: import.meta.resolve()
slug: Web/JavaScript/Reference/Operators/import.meta/resolve
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

**`import.meta.resolve()`** ist eine eingebaute Funktion, die auf dem [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)-Objekt eines JavaScript-Moduls definiert ist. Sie löst einen Modulspezifizierer zu einer URL auf, indem sie die URL des aktuellen Moduls als Basis verwendet.

## Syntax

```js-nolint
import.meta.resolve(moduleName)
```

### Parameter

- `moduleName`
  - : Ein String, der ein potenziell importierbares Modul spezifiziert. Dies kann ein relativer Pfad (wie `"./lib/helper.js"`), ein einfacher Name (wie `"my-module"`) oder eine absolute URL (wie `"https://example.com/lib/helper.js"`) sein.

### Rückgabewert

Gibt einen String zurück, der dem Pfad entspricht, der importiert würde, wenn das Argument an [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) übergeben wird.

## Beschreibung

`import.meta.resolve()` ermöglicht einem Skript den Zugriff auf den _Modulspezifizierer-Auflösungsalgorithmus_ für einen Namen, so:

```js
// Script at https://example.com/main.js

const helperPath = import.meta.resolve("./lib/helper.js");
console.log(helperPath); // "https://example.com/lib/helper.js"
```

Beachten Sie, dass `import.meta.resolve()` nur die Auflösung durchführt und nicht versucht, den resultierenden Pfad zu laden oder zu importieren. Daher ist der Rückgabewert derselbe, _unabhängig davon, ob der zurückgegebene Pfad einer Datei entspricht, die existiert, und unabhängig davon, ob diese Datei gültigen Code für ein Modul enthält_. Dies ermöglicht es `import.meta.resolve()`, eine _synchronisierte_ Operation zu sein.

Es unterscheidet sich von der [dynamsichen Importfunktion](/de/docs/Web/JavaScript/Reference/Operators/import), denn obwohl beide einen Modulspezifizierer als erstes Argument akzeptieren, gibt `import.meta.resolve()` den Pfad zurück, der _importiert würde_, ohne zu versuchen, auf diesen Pfad zuzugreifen. Daher sind die folgenden beiden im Wesentlichen derselbe Code:

```js
// Approach 1
console.log(await import("./lib/helper.js"));

// Approach 2
const helperPath = import.meta.resolve("./lib/helper.js");
console.log(await import(helperPath));
```

Allerdings, selbst wenn `"./lib/helper.js"` nicht erfolgreich importiert werden kann, wird das zweite Code-Snippet erst dann auf einen Fehler stoßen, wenn es versucht, den Import in Zeile 2 durchzuführen.

### Einfache Modulnamen

Sie können einen einfachen Modulnamen (auch als einfacher Modulspezifizierer bekannt) an `import.meta.resolve()` übergeben, solange die Modulauflösung für den Namen definiert ist. Zum Beispiel können Sie dies mithilfe einer [Import Map](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) innerhalb eines Browsers definieren:

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

Wiederum, da dieses Snippet nicht versucht, `moduleEntryPath` zu importieren — und auch die Import Map nicht — es druckt die aufgelöste URL, unabhängig davon, ob `./modules/my-module/index.js` tatsächlich existiert.

### Vergleich mit new URL()

Der [`URL()`](/de/docs/Web/API/URL/URL)-Konstruktor akzeptiert ein zweites Argument als _Basis-URL_. Wenn das erste Argument ein relativer Pfad und die Basis-URL [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta#value) ist, ist der Effekt ähnlich wie bei `import.meta.resolve()`.

```js
const helperPath = new URL("./lib/helper.js", import.meta.url).href;
console.log(helperPath);
```

Dies ist auch eine nützliche Ersatzsyntax bei der Zielsetzung älterer Browser. Allerdings gibt es einige Unterschiede:

- `import.meta.resolve()` gibt einen String zurück, während `new URL()` ein `URL`-Objekt zurückgibt. Es ist möglich, [`href`](/de/docs/Web/API/URL/href) oder [`toString()`](/de/docs/Web/API/URL/toString) auf die konstruierte `URL` anzuwenden, aber dies führt möglicherweise nicht in allen JavaScript-Umgebungen oder bei der Verwendung von Werkzeugen wie Bundlern, die den Code statisch analysieren, zum exakt gleichen Ergebnis.
- `import.meta.resolve()` ist sich zusätzlicher Auflösungskonfigurationen bewusst, wie zum Beispiel der Auflösung einfacher Modulnamen mithilfe von Import Maps, wie oben beschrieben. `new URL()` kennt keine Import Maps und behandelt einfache Modulnamen wie relative Pfade (d.h. `new URL("my-module", import.meta.url)` bedeutet `new URL("./my-module", import.meta.url)`).

Einige Tools erkennen `new URL("./lib/helper.js", import.meta.url).href` als Abhängigkeit von `"./lib/helper.js"` (ähnlich wie ein Import) und berücksichtigen dies für Funktionen wie Bundling, Importumschreiben für verschobene Dateien, "Zum Quelltext gehen" Funktionalität usw. Da jedoch `import.meta.resolve()` weniger zweideutig ist und speziell entworfen wurde, um eine Abhängigkeit für die Modulpfadauflösung anzugeben, sollten Sie `import.meta.resolve(moduleName)` anstelle von `new URL(moduleName, import.meta.url)` für diese Anwendungsfälle wann immer möglich verwenden.

### Kein ECMAScript-Feature

`import.meta.resolve()` ist nicht als Teil der [ECMAScript-Spezifikation](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview#javascript_the_core_language_ecmascript) für JavaScript-Module spezifiziert oder dokumentiert. Stattdessen definiert die Spezifikation [das `import.meta`-Objekt](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#prod-ImportMeta), lässt aber [alle seine Eigenschaften als "hostdefiniert"](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-hostgetimportmetaproperties). Der WHATWG HTML-Standard übernimmt dort, wo der ECMAScript-Standard aufhört, und [definiert `import.meta.resolve`](https://html.spec.whatwg.org/multipage/webappapis.html#hostgetimportmetaproperties) mithilfe seiner [Modulspezifizierer-Auflösung](https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier).

Das bedeutet, dass `import.meta.resolve()` nicht zwangsläufig von allen konformen JavaScript-Implementierungen umgesetzt werden muss. Allerdings kann `import.meta.resolve()` auch in Nicht-Browser-Umgebungen verfügbar sein:

- Deno implementiert [Kompatibilität mit dem Browserverhalten](https://docs.deno.com/api/node/module/#ImportMeta.methods).
- Node.js implementiert ebenfalls die [Funktion `import.meta.resolve()`](https://nodejs.org/docs/latest/api/esm.html#importmetaresolvespecifier), fügt jedoch einen zusätzlichen `parent`-Parameter hinzu, wenn Sie das `--experimental-import-meta-resolve`-Flag verwenden.

## Beispiele

### Einen Pfad für den Worker()-Konstruktor auflösen

`import.meta.resolve()` ist besonders wertvoll für APIs, die einen Pfad zu einer Skriptdatei als Argument erwarten, wie der [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktor:

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

Dies ist auch nützlich, um Pfade für andere Worker zu berechnen, wie [Service Worker](/de/docs/Web/API/ServiceWorker) und [Shared Worker](/de/docs/Web/API/SharedWorker). Wenn Sie jedoch einen relativen Pfad verwenden, um die URL eines Service Workers zu berechnen, beachten Sie, dass das Verzeichnis des aufgelösten Pfads standardmäßig seinen [Registrierungsbereich](/de/docs/Web/API/ServiceWorkerRegistration/scope) bestimmt (obwohl ein anderer Bereich [während der Registrierung](/de/docs/Web/API/ServiceWorkerContainer/register) festgelegt werden kann).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)
- [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import)
- [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)
