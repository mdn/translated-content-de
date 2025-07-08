---
title: import.meta.resolve()
slug: Web/JavaScript/Reference/Operators/import.meta/resolve
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`import.meta.resolve()`** ist eine eingebaute Funktion, die auf dem [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta) Objekt eines JavaScript-Moduls definiert ist und einen Modulspezifizierer in eine URL auflöst, indem die URL des aktuellen Moduls als Basis verwendet wird.

## Syntax

```js-nolint
import.meta.resolve(moduleName)
```

### Parameter

- `moduleName`
  - : Ein String, der ein möglicherweise importierbares Modul spezifiziert. Dies kann ein relativer Pfad (wie `"./lib/helper.js"`), ein einfacher Name (wie `"my-module"`) oder eine absolute URL (wie `"https://example.com/lib/helper.js"`) sein.

### Rückgabewert

Gibt einen String zurück, der dem Pfad entspricht, der importiert werden würde, wenn das Argument an [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) übergeben würde.

## Beschreibung

`import.meta.resolve()` ermöglicht es einem Skript, auf den Algorithmus zur _Modulspezifizierer-Auflösung_ für einen Namen zuzugreifen, wie folgt:

```js
// Script at https://example.com/main.js

const helperPath = import.meta.resolve("./lib/helper.js");
console.log(helperPath); // "https://example.com/lib/helper.js"
```

Beachten Sie, dass `import.meta.resolve()` nur die Auflösung durchführt und keinen Versuch unternimmt, den resultierenden Pfad zu laden oder zu importieren. Daher ist der Rückgabewert derselbe, _unabhängig davon, ob der zurückgegebene Pfad einer existierenden Datei entspricht und unabhängig davon, ob diese Datei gültigen Code für ein Modul enthält_. Dies erlaubt es, dass `import.meta.resolve()` eine _synchrone_ Operation ist.

Sie unterscheidet sich vom [dynamischen Import](/de/docs/Web/JavaScript/Reference/Operators/import), da beide zwar einen Modulspezifizierer als erstes Argument akzeptieren, `import.meta.resolve()` jedoch den Pfad zurückgibt, der _importiert werden würde_, ohne zu versuchen, auf diesen Pfad zuzugreifen. Daher ist der folgende Code im Wesentlichen derselbe:

```js
// Approach 1
console.log(await import("./lib/helper.js"));

// Approach 2
const helperPath = import.meta.resolve("./lib/helper.js");
console.log(await import(helperPath));
```

Jedoch wird der zweite Snippet keinen Fehler erzeugen, selbst wenn `"./lib/helper.js"` nicht erfolgreich importiert werden kann, bis er versucht, den Import in Zeile 2 durchzuführen.

### Einfache Modulnamen

Sie können einen einfachen Modulnamen (auch als einfacher Modulspezifizierer bekannt) an `import.meta.resolve()` übergeben, solange die Modulauflösung für den Namen definiert ist. Zum Beispiel können Sie dies mit einer [Importkarte](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) in einem Browser definieren:

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

Da dieses Snippet nicht versucht, `moduleEntryPath` zu importieren — noch die Importkarte — druckt es die aufgelöste URL, unabhängig davon, ob `./modules/my-module/index.js` tatsächlich existiert.

### Vergleich mit new URL()

Der [`URL()`](/de/docs/Web/API/URL/URL) Konstruktor akzeptiert ein zweites Argument als _Basis-URL_. Wenn das erste Argument ein relativer Pfad ist und die Basis-URL [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta#value) ist, ähnelt der Effekt dem von `import.meta.resolve()`.

```js
const helperPath = new URL("./lib/helper.js", import.meta.url).href;
console.log(helperPath);
```

Dies ist auch eine nützliche Ersatzsyntax beim Targeting älterer Browser. Es gibt jedoch einige Unterschiede:

- `import.meta.resolve()` gibt einen String zurück, während `new URL()` ein `URL` Objekt zurückgibt. Es ist möglich, [`href`](/de/docs/Web/API/URL/href) oder [`toString()`](/de/docs/Web/API/URL/toString) auf die konstruierte `URL` zu verwenden, aber dies produziert möglicherweise nicht immer dasselbe Ergebnis in einigen JavaScript-Umgebungen oder bei Verwendung von Tools wie Bundlern zur statischen Analyse des Codes.
- `import.meta.resolve()` ist sich zusätzlicher Auflösungskonfigurationen bewusst, wie z.B. der Auflösung von einfachen Modulnamen mittels Importkarten, wie oben beschrieben. `new URL()` kennt keine Importkarten und behandelt einfache Modulnamen als relative Pfade (d.h. `new URL("my-module", import.meta.url)` bedeutet `new URL("./my-module", import.meta.url)`).

Einige Tools erkennen `new URL("./lib/helper.js", import.meta.url).href` als Abhängigkeit von `"./lib/helper.js"` (ähnlich wie ein Import) und berücksichtigen dies für Funktionen wie Bündelung, Umschreiben von Importen für verschobene Dateien, "Gehe zu Quelle" Funktionalitäten usw. Da `import.meta.resolve()` jedoch weniger mehrdeutig ist und speziell entwickelt wurde, um eine Abhängigkeit von der Modulpfadauflösung anzuzeigen, sollten Sie `import.meta.resolve(moduleName)` anstelle von `new URL(moduleName, import.meta.url)` für diese Anwendungsfälle verwenden, wo immer möglich.

### Kein ECMAScript-Feature

`import.meta.resolve()` ist nicht als Teil der [ECMAScript-Spezifikation](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview#javascript_the_core_language_ecmascript) für JavaScript-Module spezifiziert oder dokumentiert. Stattdessen definiert die Spezifikation das [`import.meta` Objekt](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#prod-ImportMeta), aber [überlässt alle seine Eigenschaften als "host-definiert"](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-hostgetimportmetaproperties). Der WHATWG-HTML-Standard setzt dort an, wo der ECMAScript-Standard aufhört und [definiert `import.meta.resolve`](https://html.spec.whatwg.org/multipage/webappapis.html#hostgetimportmetaproperties) unter Verwendung seiner [Modulspezifizierer-Auflösung](https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier).

Dies bedeutet, dass `import.meta.resolve()` nicht zwingend von allen konformen JavaScript-Implementierungen implementiert werden muss. `import.meta.resolve()` kann jedoch auch in Nicht-Browser-Umgebungen verfügbar sein:

- Deno implementiert [Kompatibilität mit dem Browser-Verhalten](https://docs.deno.com/runtime/reference/deno_namespace_apis/#import.meta).
- Node.js implementiert ebenfalls [die `import.meta.resolve()` Funktion](https://nodejs.org/docs/latest/api/esm.html#importmetaresolvespecifier), fügt jedoch einen zusätzlichen `parent` Parameter hinzu, wenn Sie das `--experimental-import-meta-resolve` Flag verwenden.

## Beispiele

### Auflösen eines Pfades für den Worker()-Konstruktor

`import.meta.resolve()` ist besonders wertvoll für APIs, die einen Pfad zu einer Skriptdatei als Argument benötigen, wie der [`Worker()`](/de/docs/Web/API/Worker/Worker) Konstruktor:

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

Dies ist auch nützlich, um Pfade für andere Worker wie [Service Workers](/de/docs/Web/API/ServiceWorker) und [Shared Workers](/de/docs/Web/API/SharedWorker) zu berechnen. Wenn Sie jedoch einen relativen Pfad verwenden, um die URL eines Service Workers zu berechnen, bedenken Sie, dass das Verzeichnis des aufgelösten Pfades standardmäßig seinen [Registrierungsbereich](/de/docs/Web/API/ServiceWorkerRegistration/scope) bestimmt (obwohl ein anderer Bereich [während der Registrierung](/de/docs/Web/API/ServiceWorkerContainer/register) angegeben werden kann).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)
- [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import)
- [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)
