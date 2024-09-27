---
title: import.meta.resolve()
slug: Web/JavaScript/Reference/Operators/import.meta/resolve
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{jsSidebar("Operators")}}

**`import.meta.resolve()`** ist eine eingebaute Funktion, die auf dem [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)-Objekt eines JavaScript-Moduls definiert ist und die einen Modulspezifizierer zu einer URL auflöst, indem die URL des aktuellen Moduls als Basis verwendet wird.

## Syntax

```js-nolint
import.meta.resolve(moduleName)
```

### Parameter

- `moduleName`
  - : Ein String, der ein potenziell importierbares Modul spezifiziert. Dies kann ein relativer Pfad (wie `"./lib/helper.js"`), ein Bare-Name (wie `"my-module"`) oder eine absolute URL (wie `"https://example.com/lib/helper.js"`) sein.

### Rückgabewert

Gibt einen String zurück, der dem Pfad entspricht, der importiert würde, wenn das Argument an [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) übergeben würde.

## Beschreibung

`import.meta.resolve()` ermöglicht es einem Skript, auf den _Modulspezifizierer-Auflösungsalgorithmus_ für einen Namen zuzugreifen, wie folgt:

```js
// Script at https://example.com/main.js

const helperPath = import.meta.resolve("./lib/helper.js");
console.log(helperPath); // "https://example.com/lib/helper.js"
```

Beachten Sie, dass `import.meta.resolve()` nur die Auflösung durchführt und keinen Versuch unternimmt, den resultierenden Pfad zu laden oder zu importieren. (Der [Erklärer für die Spezifikation](https://gist.github.com/domenic/f2a0a9cb62d499bcc4d12aebd1c255ab#sync-vs-async) beschreibt die Argumentation für dieses Verhalten.) Daher ist sein Rückgabewert derselbe _unabhängig davon, ob der zurückgegebene Pfad mit einer vorhandenen Datei übereinstimmt und unabhängig davon, ob diese Datei gültigen Code für ein Modul enthält_.

Es unterscheidet sich vom [dynamischen Import](/de/docs/Web/JavaScript/Reference/Operators/import), weil, obwohl beide einen Modulspezifizierer als erstes Argument akzeptieren, `import.meta.resolve()` den Pfad zurückgibt, der _importiert würde_, ohne einen Versuch zu machen, auf diesen Pfad zuzugreifen. Daher sind die folgenden beiden Codes praktisch gleich:

```js
// Approach 1
console.log(await import("./lib/helper.js"));

// Approach 2
const helperPath = import.meta.resolve("./lib/helper.js");
console.log(await import(helperPath));
```

Allerdings, selbst wenn `"./lib/helper.js"` nicht erfolgreich importiert werden kann, wird das zweite Beispiel erst auf einen Fehler stoßen, wenn es versucht, den Import in Zeile 2 durchzuführen.

### Bare Modulnamen

Sie können einen Bare-Modulnamen (auch bekannt als Bare-Modulspezifizierer) an `import.meta.resolve()` übergeben, solange die Modulauflösung für den Namen definiert ist. Zum Beispiel können Sie dies innerhalb eines Browsers mit einer [Importkarte](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) definieren:

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

Da dieses Beispiel nicht versucht, `moduleEntryPath` zu importieren — und auch nicht die Importkarte — wird die aufgelöste URL gedruckt, unabhängig davon, ob `./modules/my-module/index.js` tatsächlich existiert.

### Vergleich mit new URL()

Der [`URL()`](/de/docs/Web/API/URL/URL)-Konstruktor akzeptiert ein zweites Argument für die _Basis-URL_. Wenn das erste Argument ein relativer Pfad ist und die Basis-URL [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta#value) ist, ähnelt der Effekt `import.meta.resolve()`.

```js
const helperPath = new URL("./lib/helper.js", import.meta.url).href;
console.log(helperPath);
```

Dies ist auch eine nützliche Ersatzsyntax, wenn Sie auf ältere Browser abzielen. Allerdings gibt es einige Unterschiede:

- `import.meta.resolve()` gibt einen String zurück, während `new URL()` ein `URL`-Objekt zurückgibt. Es ist möglich, [`href`](/de/docs/Web/API/URL/href) oder [`toString()`](/de/docs/Web/API/URL/toString) auf die konstruierte `URL` zu verwenden, aber dies mag dennoch nicht in allen JavaScript-Umgebungen oder beim Einsatz von Tools wie Bundlern, um den Code statisch zu analysieren, dasselbe Ergebnis produzieren.
- `import.meta.resolve()` berücksichtigt zusätzliche Auflösungskonfigurationen, wie die Auflösung von Bare-Modulnamen mit Importkarten, wie oben beschrieben. `new URL()` ist sich Importkarten nicht bewusst und behandelt Bare-Modulnamen als relative Pfade (d.h. `new URL("my-module", import.meta.url)` bedeutet `new URL("./my-module", import.meta.url)`).

Einige Tools erkennen `new URL("./lib/helper.js", import.meta.url).href` als Abhängigkeit von `"./lib/helper.js"` (ähnlich wie ein Import) und berücksichtigen dies für Funktionen wie Bundling, Umschreiben von Importen für verschobene Dateien, "Gehe zur Quelle"-Funktionalität usw. Da `import.meta.resolve()` jedoch weniger zweideutig und speziell dafür entwickelt ist, eine Abhängigkeit zur Auflösung eines Modulpfads anzuzeigen, sollten Sie `import.meta.resolve(moduleName)` anstelle von `new URL(moduleName, import.meta.url)` für diese Anwendungsfälle wann immer möglich verwenden.

### Kein ECMAScript-Feature

`import.meta.resolve()` ist nicht als Teil der [ECMAScript-Spezifikation](/de/docs/Web/JavaScript/JavaScript_technologies_overview#javascript_the_core_language_ecmascript) für JavaScript-Module spezifiziert oder dokumentiert. Stattdessen definiert die Spezifikation [das `import.meta`-Objekt](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#prod-ImportMeta), lässt jedoch [alle seine Eigenschaften als "host-definiert"](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-hostgetimportmetaproperties). Der WHATWG-HTML-Standard übernimmt dort, wo der ECMAScript-Standard aufhört, und [definiert `import.meta.resolve`](https://html.spec.whatwg.org/multipage/webappapis.html#hostgetimportmetaproperties) unter Verwendung seiner [Modulspezifiziererauflösung](https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier).

Dies bedeutet, dass `import.meta.resolve()` nicht von allen konformen JavaScript-Implementierungen implementiert werden muss. Dennoch kann `import.meta.resolve()` auch in nicht-browserbasierten Umgebungen verfügbar sein:

- Deno implementiert [Kompatibilität mit dem Browserverhalten](https://docs.deno.com/runtime/reference/deno_namespace_apis/#import.meta).
- Node.js implementiert ebenfalls [die Funktion `import.meta.resolve()`](https://nodejs.org/docs/latest/api/esm.html#importmetaresolvespecifier), fügt jedoch einen zusätzlichen `parent`-Parameter hinzu, wenn Sie das Flag `--experimental-import-meta-resolve` verwenden.

## Beispiele

### Pfad für den Worker()-Konstruktor auflösen

`import.meta.resolve()` ist besonders wertvoll für APIs, die einen Pfad zu einer Skriptdatei als Argument nehmen, wie beispielsweise der [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktor:

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

Dies ist auch nützlich, um Pfade für andere Worker zu berechnen, wie [Service Worker](/de/docs/Web/API/ServiceWorker) und [Shared Worker](/de/docs/Web/API/SharedWorker). Wenn Sie jedoch einen relativen Pfad verwenden, um die URL eines Service Workers zu berechnen, denken Sie daran, dass das Verzeichnis des aufgelösten Pfads standardmäßig seinen [Registrierungsbereich](/de/docs/Web/API/ServiceWorkerRegistration/scope) bestimmt (obwohl bei der [Registrierung](/de/docs/Web/API/ServiceWorkerContainer/register) ein anderer Bereich angegeben werden kann).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)
- [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import)
- [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)
