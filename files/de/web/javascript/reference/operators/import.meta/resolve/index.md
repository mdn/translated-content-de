---
title: import.meta.resolve()
slug: Web/JavaScript/Reference/Operators/import.meta/resolve
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{jsSidebar("Operators")}}

**`import.meta.resolve()`** ist eine eingebaute Funktion, die im [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)-Objekt eines JavaScript-Moduls definiert ist. Sie löst einen Modulspezifizierer zu einer URL auf, wobei die URL des aktuellen Moduls als Basis verwendet wird.

## Syntax

```js-nolint
import.meta.resolve(moduleName)
```

### Parameter

- `moduleName`
  - : Ein String, der ein potenziell importierbares Modul spezifiziert. Dies kann ein relativer Pfad (z.B. `"./lib/helper.js"`), ein nackter Name (z.B. `"my-module"`) oder eine absolute URL (z.B. `"https://example.com/lib/helper.js"`) sein.

### Rückgabewert

Gibt einen String zurück, der dem Pfad entspricht, der importiert würde, wenn das Argument an [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) übergeben wird.

## Beschreibung

`import.meta.resolve()` ermöglicht einem Skript den Zugriff auf den _Modulspezifiziererauflösungs-Algorithmus_ für einen Namen, wie folgt:

```js
// Script at https://example.com/main.js

const helperPath = import.meta.resolve("./lib/helper.js");
console.log(helperPath); // "https://example.com/lib/helper.js"
```

Beachten Sie, dass `import.meta.resolve()` nur die Auflösung durchführt und nicht versucht, den resultierenden Pfad zu laden oder zu importieren. Daher ist sein Rückgabewert derselbe, _unabhängig davon, ob der zurückgegebene Pfad einer existierenden Datei entspricht und unabhängig davon, ob diese Datei gültigen Code für ein Modul enthält_. Das ermöglicht es, dass `import.meta.resolve()` eine _synchrone_ Operation ist.

Es unterscheidet sich vom [dynamischen Import](/de/docs/Web/JavaScript/Reference/Operators/import), denn obwohl beide einen Modulspezifizierer als erstes Argument akzeptieren, gibt `import.meta.resolve()` den Pfad zurück, der _importiert würde_, ohne zu versuchen, auf diesen Pfad zuzugreifen. Daher sind die folgenden beiden effektiv derselbe Code:

```js
// Approach 1
console.log(await import("./lib/helper.js"));

// Approach 2
const helperPath = import.meta.resolve("./lib/helper.js");
console.log(await import(helperPath));
```

Allerdings trifft der zweite Schnipsel, auch wenn `"./lib/helper.js"` nicht erfolgreich importiert werden kann, nicht auf einen Fehler, bis er versucht, den Import in Zeile 2 auszuführen.

### Nackte Modulnamen

Sie können `import.meta.resolve()` einen nackten Modulnamen (auch bekannt als nackter Modulspezifizierer) übergeben, solange eine Modulauflösung für den Namen definiert ist. Dies kann z.B. mit einer [import map](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) innerhalb eines Browsers definiert werden:

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

Da dieses Snippet wiederum nicht versucht, `moduleEntryPath` zu importieren — genauso wenig wie die import map — wird die aufgelöste URL ausgegeben, unabhängig davon, ob `./modules/my-module/index.js` tatsächlich existiert.

### Vergleich mit dem neuen URL()

Der [`URL()`](/de/docs/Web/API/URL/URL)-Konstruktor akzeptiert ein zweites Argument für die _Basis-URL_. Wenn das erste Argument ein relativer Pfad und die Basis-URL [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta#value) ist, ist der Effekt ähnlich wie bei `import.meta.resolve()`.

```js
const helperPath = new URL("./lib/helper.js", import.meta.url).href;
console.log(helperPath);
```

Dies ist auch eine nützliche Ersetzungssyntax, wenn ältere Browser unterstützt werden sollen. Es gibt jedoch einige Unterschiede:

- `import.meta.resolve()` gibt einen String zurück, während `new URL()` ein `URL`-Objekt zurückgibt. Es ist möglich, [`href`](/de/docs/Web/API/URL/href) oder [`toString()`](/de/docs/Web/API/URL/toString) auf die konstruierte `URL` anzuwenden, aber dies könnte in einigen JavaScript-Umgebungen oder bei der Verwendung von Tools wie Bundlern nicht das exakt gleiche Ergebnis liefern.
- `import.meta.resolve()` ist sich zusätzlicher Auflösungskonfigurationen bewusst, wie etwa dem Auflösen nackter Modulnamen mithilfe von import maps, wie oben beschrieben. `new URL()` ist sich import maps nicht bewusst und behandelt nackte Modulnamen als relative Pfade (d.h. `new URL("my-module", import.meta.url)` bedeutet `new URL("./my-module", import.meta.url)`).

Einige Tools erkennen `new URL("./lib/helper.js", import.meta.url).href` als Abhängigkeit von `"./lib/helper.js"` (ähnlich wie ein Import) und berücksichtigen dies für Funktionen wie Bundling, Umformen von Importen für verschobene Dateien, "Gehe zur Quelle"-Funktionalität usw. Da `import.meta.resolve()` jedoch weniger zweideutig und speziell für die Anzeige einer Modulpfadauflösungsabhängigkeit konzipiert ist, sollten Sie `import.meta.resolve(moduleName)` anstelle von `new URL(moduleName, import.meta.url)` für diese Anwendungsfälle verwenden, wo immer möglich.

### Kein ECMAScript-Feature

`import.meta.resolve()` ist nicht als Teil der [ECMAScript-Spezifikation](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview#javascript_the_core_language_ecmascript) für JavaScript-Module spezifiziert oder dokumentiert. Stattdessen definiert die Spezifikation [das `import.meta`-Objekt](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#prod-ImportMeta), lässt aber [alle seine Eigenschaften als "hostdefiniert"](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-hostgetimportmetaproperties). Der WHATWG HTML-Standard greift auf, wo die ECMAScript-Spezifikation endet, und [definiert `import.meta.resolve`](https://html.spec.whatwg.org/multipage/webappapis.html#hostgetimportmetaproperties) unter Verwendung seiner [Modulspezifiziererauflösung](https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier).

Das bedeutet, dass `import.meta.resolve()` nicht von allen konformen JavaScript-Implementierungen implementiert werden muss. `import.meta.resolve()` kann jedoch auch in Nicht-Browser-Umgebungen verfügbar sein:

- Deno implementiert [Kompatibilität mit dem Browserverhalten](https://docs.deno.com/runtime/reference/deno_namespace_apis/#import.meta).
- Node.js implementiert ebenfalls [die `import.meta.resolve()`-Funktion](https://nodejs.org/docs/latest/api/esm.html#importmetaresolvespecifier), fügt jedoch einen zusätzlichen `parent`-Parameter hinzu, wenn Sie das `--experimental-import-meta-resolve`-Flag verwenden.

## Beispiele

### Auflösen eines Pfads für den Worker()-Konstruktor

`import.meta.resolve()` ist besonders wertvoll für APIs, die einen Pfad zu einer Skriptdatei als Argument nehmen, wie z.B. den [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktor:

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

Dies ist auch nützlich, um Pfade für andere Worker zu berechnen, wie z.B. [Service-Worker](/de/docs/Web/API/ServiceWorker) und [Shared-Worker](/de/docs/Web/API/SharedWorker). Beachten Sie jedoch, dass, wenn Sie einen relativen Pfad verwenden, um die URL eines Service-Workers zu berechnen, das Verzeichnis des aufgelösten Pfads standardmäßig seinen [Registrierungsbereich](/de/docs/Web/API/ServiceWorkerRegistration/scope) bestimmt (obwohl ein anderer Bereich [während der Registrierung](/de/docs/Web/API/ServiceWorkerContainer/register) spezifiziert werden kann).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)
- [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import)
- [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)
