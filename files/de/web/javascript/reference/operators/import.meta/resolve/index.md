---
title: import.meta.resolve()
slug: Web/JavaScript/Reference/Operators/import.meta/resolve
l10n:
  sourceCommit: 0ca040b6a9cfd931558bd1d3a402707abddc1924
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

Gibt einen String zurück, der dem Pfad entspricht, der importiert würde, wenn das Argument an [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) übergeben würde.

## Beschreibung

`import.meta.resolve()` ermöglicht es einem Skript, auf den _Modulspezifizierer-Auflösungsalgorithmus_ für einen Namen zuzugreifen, wie folgt:

```js
// Script at https://example.com/main.js

const helperPath = import.meta.resolve("./lib/helper.js");
console.log(helperPath); // "https://example.com/lib/helper.js"
```

Beachten Sie, dass `import.meta.resolve()` nur die Auflösung durchführt und nicht versucht, den resultierenden Pfad zu laden oder zu importieren. Daher ist der Rückgabewert identisch, _unabhängig davon, ob der zurückgegebene Pfad einer existierenden Datei entspricht und unabhängig davon, ob diese Datei gültigen Code für ein Modul enthält_. Dies ermöglicht es, dass `import.meta.resolve()` eine _synchron_ Operation ist.

Es unterscheidet sich vom [dynamischen Import](/de/docs/Web/JavaScript/Reference/Operators/import), denn obwohl beide ein Modulspezifizierer als erstes Argument akzeptieren, gibt `import.meta.resolve()` den Pfad zurück, der _importiert werden würde_, ohne zu versuchen, auf diesen Pfad zuzugreifen. Daher sind die beiden folgenden effektiv derselbe Code:

```js
// Approach 1
console.log(await import("./lib/helper.js"));

// Approach 2
const helperPath = import.meta.resolve("./lib/helper.js");
console.log(await import(helperPath));
```

Jedoch, selbst wenn `"./lib/helper.js"` nicht erfolgreich importiert werden kann, wird der zweite Ausschnitt keinen Fehler begegnen, bis er versucht, den Import in Zeile 2 durchzuführen.

### Bare Modulnamen

Sie können einen einfachen Modulnamen (auch bekannt als einfacher Modulspezifizierer) an `import.meta.resolve()` übergeben, solange die Modulauflösung für den Namen definiert ist. Zum Beispiel können Sie dies in einem Browser mithilfe einer [Importkarte](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) definieren:

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

Da dieser Codeausschnitt nicht versucht, `moduleEntryPath` zu importieren — ebenso wenig die Importkarte — wird die aufgelöste URL angezeigt, unabhängig davon, ob `./modules/my-module/index.js` tatsächlich existiert.

### Vergleich mit neuem URL()

Der [`URL()`](/de/docs/Web/API/URL/URL)-Konstruktor akzeptiert ein zweites Argument als _Basis-URL_. Wenn das erste Argument ein relativer Pfad ist und die Basis-URL [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta#value) ist, ist der Effekt ähnlich wie bei `import.meta.resolve()`.

```js
const helperPath = new URL("./lib/helper.js", import.meta.url).href;
console.log(helperPath);
```

Dies ist auch eine nützliche Ersetzungssyntax, wenn ältere Browser unterstützt werden sollen. Es gibt jedoch einige Unterschiede:

- `import.meta.resolve()` gibt einen String zurück, während `new URL()` ein `URL`-Objekt zurückgibt. Es ist möglich, [`href`](/de/docs/Web/API/URL/href) oder [`toString()`](/de/docs/Web/API/URL/toString) auf die konstruierte `URL` anzuwenden, aber dies könnte in einigen JavaScript-Umgebungen oder beim Einsatz von Tools wie Bundlern, um den Code statisch zu analysieren, immer noch nicht dasselbe Ergebnis liefern.
- `import.meta.resolve()` ist sich zusätzlicher Auflösungskonfigurationen bewusst, wie z.B. dem Auflösen einfacher Modulnamen unter Verwendung von Importkarten, wie oben beschrieben. `new URL()` ist sich Importkarten nicht bewusst und behandelt einfache Modulnamen als relative Pfade (d.h. `new URL("my-module", import.meta.url)` bedeutet `new URL("./my-module", import.meta.url)`).

Einige Tools erkennen `new URL("./lib/helper.js", import.meta.url).href` als Abhängigkeit von `"./lib/helper.js"` (ähnlich wie ein Import) und berücksichtigen dies bei Funktionen wie Bündelung, Import-Umschreibung für verschobene Dateien, "Gehe zu Quelle"-Funktionalität usw. Da `import.meta.resolve()` jedoch weniger mehrdeutig ist und speziell entwickelt wurde, um eine Abhängigkeitsauflösung des Modulpfads anzuzeigen, sollten Sie `import.meta.resolve(moduleName)` anstelle von `new URL(moduleName, import.meta.url)` für diese Anwendungsfälle verwenden, wann immer möglich.

### Kein ECMAScript-Feature

`import.meta.resolve()` ist nicht im [ECMAScript-Spezifikation](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview#javascript_the_core_language_ecmascript) für JavaScript-Module spezifiziert oder dokumentiert. Stattdessen definiert die Spezifikation [das `import.meta`-Objekt](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#prod-ImportMeta), lässt jedoch [alle seine Eigenschaften als "host-definiert"](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-hostgetimportmetaproperties). Der WHATWG HTML-Standard übernimmt dort, wo der ECMAScript-Standard aufhört, und [definiert `import.meta.resolve`](https://html.spec.whatwg.org/multipage/webappapis.html#hostgetimportmetaproperties) unter Verwendung der [Modulspezifizierer-Auflösung](https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier).

Das bedeutet, dass `import.meta.resolve()` nicht von allen konformen JavaScript-Implementierungen implementiert werden muss. Allerdings kann `import.meta.resolve()` auch in nicht-browserbasierten Umgebungen verfügbar sein:

- Deno implementiert [Kompatibilität mit dem Browserverhalten](https://docs.deno.com/api/node/module/~/ImportMeta.resolve).
- Node.js implementiert ebenfalls [die `import.meta.resolve()` Funktion](https://nodejs.org/docs/latest/api/esm.html#importmetaresolvespecifier), fügt jedoch einen zusätzlichen `parent`-Parameter hinzu, wenn Sie das `--experimental-import-meta-resolve` Flag verwenden.

## Beispiele

### Einen Pfad für den Worker()-Konstruktor auflösen

`import.meta.resolve()` ist besonders wertvoll für APIs, die einen Pfad zu einer Skriptdatei als Argument nehmen, wie der [`Worker()`](/de/docs/Web/API/Worker/Worker) Konstruktor:

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

Dies ist auch nützlich, um Pfade für andere Worker zu berechnen, wie [Dienstmitarbeiter](/de/docs/Web/API/ServiceWorker) und [geteilte Mitarbeiter](/de/docs/Web/API/SharedWorker). Allerdings, wenn Sie einen relativen Pfad verwenden, um die URL eines Dienstmitarbeiters zu berechnen, bedenken Sie, dass das Verzeichnis des aufgelösten Pfades standardmäßig seinen [Registrierungsbereich](/de/docs/Web/API/ServiceWorkerRegistration/scope) bestimmt (obwohl ein anderer Bereich [während der Registrierung](/de/docs/Web/API/ServiceWorkerContainer/register) angegeben werden kann).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)
- [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import)
- [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)
