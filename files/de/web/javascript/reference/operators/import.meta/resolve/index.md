---
title: import.meta.resolve()
slug: Web/JavaScript/Reference/Operators/import.meta/resolve
l10n:
  sourceCommit: 940b352725f7e803b194af619702071630f3d6a6
---

{{jsSidebar("Operators")}}

**`import.meta.resolve()`** ist eine eingebaute Funktion, die auf dem [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)-Objekt eines JavaScript-Moduls definiert ist und einen Modulspezifizierer zu einer URL auflöst, wobei die URL des aktuellen Moduls als Grundlage dient.

## Syntax

```js-nolint
import.meta.resolve(moduleName)
```

### Parameter

- `moduleName`
  - : Ein String, der ein potenziell importierbares Modul angibt. Dies kann ein relativer Pfad (wie `"./lib/helper.js"`), ein einfacher Name (wie `"my-module"`) oder eine absolute URL (wie `"https://example.com/lib/helper.js"`) sein.

### Rückgabewert

Gibt einen String zurück, der dem Pfad entspricht, der importiert werden würde, wenn das Argument an [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) übergeben wird.

## Beschreibung

`import.meta.resolve()` ermöglicht es einem Skript, auf den _Modulspezifizierer-Auflösungsalgorithmus_ für einen Namen zuzugreifen, wie folgt:

```js
// Script at https://example.com/main.js

const helperPath = import.meta.resolve("./lib/helper.js");
console.log(helperPath); // "https://example.com/lib/helper.js"
```

Beachten Sie, dass `import.meta.resolve()` nur die Auflösung durchführt und nicht versucht, den resultierenden Pfad zu laden oder zu importieren. Daher ist der Rückgabewert derselbe, _unabhängig davon, ob der zurückgegebene Pfad einer existierenden Datei entspricht und unabhängig davon, ob diese Datei gültigen Code für ein Modul enthält_. Dies ermöglicht, dass `import.meta.resolve()` eine _synchron_ ablaufende Operation ist.

Es unterscheidet sich vom [dynamischen Import](/de/docs/Web/JavaScript/Reference/Operators/import), da, obwohl beide einen Modulspezifizierer als erstes Argument akzeptieren, `import.meta.resolve()` den Pfad zurückgibt, der _importiert werden würde_, ohne irgendeinen Versuch zu unternehmen, auf diesen Pfad zuzugreifen. Daher sind die folgenden beiden effektiv derselbe Code:

```js
// Approach 1
console.log(await import("./lib/helper.js"));

// Approach 2
const helperPath = import.meta.resolve("./lib/helper.js");
console.log(await import(helperPath));
```

Auch wenn `"./lib/helper.js"` nicht erfolgreich importiert werden kann, wird das zweite Beispiel keinen Fehler verursachen, bis es versucht, den Import in Zeile 2 durchzuführen.

### Einfache Modulnamen

Sie können einen einfachen Modulnamen (auch als einfacher Modulspezifizierer bekannt) an `import.meta.resolve()` übergeben, solange die Modulauflösung für den Namen definiert ist. Beispielsweise können Sie dies mit einer [Import Map](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) innerhalb eines Browsers definieren:

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

Da dieses Beispiel jedoch nicht versucht, `moduleEntryPath` zu importieren — das tut auch die Import Map nicht — wird die aufgelöste URL ausgegeben, unabhängig davon, ob `./modules/my-module/index.js` tatsächlich existiert.

### Vergleich mit neuem URL()

Der [`URL()`](/de/docs/Web/API/URL/URL)-Konstruktor akzeptiert ein zweites Argument als _Basis-URL_. Wenn das erste Argument ein relativer Pfad ist und die Basis-URL [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta#value) ist, ist der Effekt ähnlich wie bei `import.meta.resolve()`.

```js
const helperPath = new URL("./lib/helper.js", import.meta.url).href;
console.log(helperPath);
```

Dies ist auch eine nützliche Ersatzsyntax beim Anvisieren älterer Browser. Es gibt jedoch einige Unterschiede:

- `import.meta.resolve()` gibt einen String zurück, während `new URL()` ein `URL`-Objekt zurückgibt. Es ist möglich, [`href`](/de/docs/Web/API/URL/href) oder [`toString()`](/de/docs/Web/API/URL/toString) auf der konstruierten `URL` zu verwenden, aber dies kann in einigen JavaScript-Umgebungen oder beim Einsatz von Tools wie Bundlern zur statischen Analyse des Codes möglicherweise nicht das genau gleiche Ergebnis liefern.
- `import.meta.resolve()` ist sich zusätzlichen Auflösungskonfigurationen bewusst, wie zum Beispiel dem Auflösen einfacher Modulnamen mit Import Maps, wie oben beschrieben. `new URL()` ist sich Import Maps nicht bewusst und behandelt einfache Modulnamen als relative Pfade (d.h. `new URL("my-module", import.meta.url)` bedeutet `new URL("./my-module", import.meta.url)`).

Einige Tools erkennen `new URL("./lib/helper.js", import.meta.url).href` als Abhängigkeit von `"./lib/helper.js"` (ähnlich wie ein Import) und berücksichtigen dies bei Funktionen wie Bündelung, Umschreiben von Importen bei verschobenen Dateien, "Gehe zur Quelle"-Funktionalität usw. Da `import.meta.resolve()` jedoch weniger mehrdeutig ist und speziell zur Anzeige einer Modulpfadauflösungsabhängigkeit entwickelt wurde, sollten Sie `import.meta.resolve(moduleName)` anstelle von `new URL(moduleName, import.meta.url)` für diese Anwendungsfälle nach Möglichkeit verwenden.

### Kein ECMAScript-Feature

`import.meta.resolve()` ist nicht als Teil der [ECMAScript-Spezifikation](/de/docs/Web/JavaScript/JavaScript_technologies_overview#javascript_the_core_language_ecmascript) für JavaScript-Module spezifiziert oder dokumentiert. Stattdessen definiert die Spezifikation [das `import.meta`-Objekt](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#prod-ImportMeta), lässt jedoch [alle seine Eigenschaften als "hostdefiniert"](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-hostgetimportmetaproperties). Der WHATWG HTML-Standard nimmt den Faden dort auf, wo die ECMAScript-Spezifikation aufhört, und [definiert `import.meta.resolve`](https://html.spec.whatwg.org/multipage/webappapis.html#hostgetimportmetaproperties) mit seinem [Modulspezifizierer-Auflösungsalgorithmus](https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier).

Das bedeutet, dass `import.meta.resolve()` nicht von allen konformen JavaScript-Implementierungen implementiert werden muss. `import.meta.resolve()` könnte jedoch auch in Nicht-Browser-Umgebungen verfügbar sein:

- Deno implementiert [Kompatibilität mit dem Verhalten des Browsers](https://docs.deno.com/runtime/reference/deno_namespace_apis/#import.meta).
- Node.js implementiert auch [die `import.meta.resolve()`-Funktion](https://nodejs.org/docs/latest/api/esm.html#importmetaresolvespecifier), fügt jedoch einen zusätzlichen `parent`-Parameter hinzu, wenn Sie das `--experimental-import-meta-resolve`-Flag verwenden.

## Beispiele

### Einen Pfad für den Worker()-Konstruktor auflösen

`import.meta.resolve()` ist besonders wertvoll für APIs, die einen Pfad zu einer Skriptdatei als Argument verwenden, wie den [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktor:

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

Dies ist auch nützlich, um Pfade für andere Worker zu berechnen, wie [Service Workers](/de/docs/Web/API/ServiceWorker) und [Shared Workers](/de/docs/Web/API/SharedWorker). Beachten Sie jedoch, dass, wenn Sie einen relativen Pfad verwenden, um die URL eines Service Workers zu berechnen, das Verzeichnis des aufgelösten Pfades standardmäßig seinen [Registrierungsbereich](/de/docs/Web/API/ServiceWorkerRegistration/scope) bestimmt (obwohl während der Registrierung ein anderer Bereich angegeben werden kann [während der Registrierung](/de/docs/Web/API/ServiceWorkerContainer/register)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)
- [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import)
- [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)
