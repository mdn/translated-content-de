---
title: import.meta.resolve()
slug: Web/JavaScript/Reference/Operators/import.meta/resolve
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{jsSidebar("Operators")}}

**`import.meta.resolve()`** ist eine eingebaute Funktion, die auf dem [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)-Objekt eines JavaScript-Moduls definiert ist, um einen Modul-Spezifizierer in eine URL unter Verwendung der URL des aktuellen Moduls als Basis aufzulösen.

## Syntax

```js-nolint
import.meta.resolve(moduleName)
```

### Parameter

- `moduleName`
  - : Ein Zeichenkette, die ein potenziell importierbares Modul angibt. Dies kann ein relativer Pfad (zum Beispiel `"./lib/helper.js"`), ein einfacher Name (zum Beispiel `"my-module"`) oder eine absolute URL (zum Beispiel `"https://example.com/lib/helper.js"`) sein.

### Rückgabewert

Gibt eine Zeichenkette zurück, die dem Pfad entspricht, der importiert würde, wenn das Argument an [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) übergeben würde.

## Beschreibung

`import.meta.resolve()` ermöglicht einem Skript den Zugriff auf den Algorithmus zur _Modul-Spezifizierer-Auflösung_ für einen Namen, wie folgt:

```js
// Script at https://example.com/main.js

const helperPath = import.meta.resolve("./lib/helper.js");
console.log(helperPath); // "https://example.com/lib/helper.js"
```

Beachten Sie, dass `import.meta.resolve()` nur eine Auflösung durchführt und nicht versucht, den resultierenden Pfad zu laden oder zu importieren. (Der [Erklärer zur Spezifikation](https://gist.github.com/domenic/f2a0a9cb62d499bcc4d12aebd1c255ab#sync-vs-async) beschreibt die Gründe für dieses Verhalten.) Daher ist der Rückgabewert derselbe _unabhängig davon, ob der zurückgegebene Pfad einer existierenden Datei entspricht und unabhängig davon, ob diese Datei gültigen Code für ein Modul enthält_.

Es unterscheidet sich von [dynamischem Import](/de/docs/Web/JavaScript/Reference/Operators/import), da, obwohl beide einen Modul-Spezifizierer als erstes Argument akzeptieren, `import.meta.resolve()` den Pfad zurückgibt, der _importiert würde_, ohne zu versuchen, auf diesen Pfad zuzugreifen. Daher sind die folgenden beiden im Wesentlichen derselbe Code:

```js
// Approach 1
console.log(await import("./lib/helper.js"));

// Approach 2
const helperPath = import.meta.resolve("./lib/helper.js");
console.log(await import(helperPath));
```

Allerdings, auch wenn `"./lib/helper.js"` nicht erfolgreich importiert werden kann, wird das zweite Snippet erst auf einen Fehler stoßen, wenn der Importversuch in Zeile 2 erfolgt.

### Einfache Modulnamen

Sie können einen einfachen Modulnamen (auch bekannt als einfacher Modul-Spezifizierer) an `import.meta.resolve()` übergeben, solange die Modulauflösung für den Namen definiert ist. Zum Beispiel können Sie dies mit einer [Importkarte](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) in einem Browser definieren:

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

Da dieses Snippet nicht versucht, `moduleEntryPath` zu importieren — ebenso wenig wie die Importkarte — wird unabhängig davon die aufgelöste URL ausgegeben, ob `./modules/my-module/index.js` tatsächlich existiert.

### Vergleich mit neuer URL()

Der [`URL()`](/de/docs/Web/API/URL/URL)-Konstruktor akzeptiert ein zweites _Basis-URL_-Argument. Wenn das erste Argument ein relativer Pfad ist und die Basis-URL [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta#value) lautet, ähnelt die Wirkung `import.meta.resolve()`.

```js
const helperPath = new URL("./lib/helper.js", import.meta.url).href;
console.log(helperPath);
```

Dies ist auch eine nützliche Ersetzungssyntax beim Anvisieren älterer Browser. Es gibt jedoch einige Unterschiede:

- `import.meta.resolve()` gibt eine Zeichenkette zurück, während `new URL()` ein `URL`-Objekt zurückgibt. Es ist möglich, [`href`](/de/docs/Web/API/URL/href) oder [`toString()`](/de/docs/Web/API/URL/toString) auf der konstruierten `URL` zu verwenden, aber dies kann dennoch nicht dasselbe Ergebnis in einigen JavaScript-Umgebungen oder beim Einsatz von Tools wie Bundlern zur statischen Codeanalyse produzieren.
- `import.meta.resolve()` ist sich zusätzlicher Auflösungskonfigurationen bewusst, wie das Auflösen einfacher Modulnamen mit Importkarten, wie oben beschrieben. `new URL()` kennt keine Importkarten und behandelt einfache Modulnamen als relative Pfade (d.h. `new URL("my-module", import.meta.url)` bedeutet `new URL("./my-module", import.meta.url)`).

Einige Tools erkennen `new URL("./lib/helper.js", import.meta.url).href` als Abhängigkeit von `"./lib/helper.js"` (ähnlich einem Import) und berücksichtigen dies bei Funktionen wie Bündeln, Neuschreiben von Importen für verschobene Dateien, "Gehe zur Quelle"-Funktionalität usw. Da jedoch `import.meta.resolve()` weniger mehrdeutig ist und speziell darauf ausgelegt ist, eine Modulpfad-Auflösungsabhängigkeit anzuzeigen, sollten Sie `import.meta.resolve(moduleName)` statt `new URL(moduleName, import.meta.url)` für diese Anwendungsfälle verwenden, wo immer möglich.

### Kein ECMAScript-Feature

`import.meta.resolve()` ist nicht spezifiziert oder dokumentiert als Teil der [ECMAScript-Spezifikation](/de/docs/Web/JavaScript/JavaScript_technologies_overview#javascript_the_core_language_ecmascript) für JavaScript-Module. Stattdessen definiert die Spezifikation [das `import.meta`-Objekt](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#prod-ImportMeta), lässt aber [alle seine Eigenschaften "host-definiert"](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-hostgetimportmetaproperties). Der WHATWG HTML-Standard setzt dort an, wo der ECMAScript-Standard aufhört, und [definiert `import.meta.resolve`](https://html.spec.whatwg.org/multipage/webappapis.html#hostgetimportmetaproperties) unter Verwendung seiner [Auflösung eines Modul-Spezifizierers](https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier).

Das bedeutet, dass `import.meta.resolve()` nicht obligatorisch von allen konformen JavaScript-Implementierungen implementiert werden muss. Allerdings kann `import.meta.resolve()` auch in nicht-browserbasierten Umgebungen verfügbar sein:

- Deno implementiert [Kompatibilität mit dem Browserverhalten](https://docs.deno.com/runtime/reference/deno_namespace_apis/#import.meta).
- Node.js implementiert ebenfalls [die Funktion `import.meta.resolve()`](https://nodejs.org/docs/latest/api/esm.html#importmetaresolvespecifier), fügt jedoch einen zusätzlichen `parent`-Parameter hinzu, wenn Sie das `--experimental-import-meta-resolve`-Flag verwenden.

## Beispiele

### Einen Pfad für den Worker()-Konstruktor auflösen

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

Dies ist auch nützlich, um Pfade für andere Worker zu berechnen, wie [Service Worker](/de/docs/Web/API/ServiceWorker) und [Shared Worker](/de/docs/Web/API/SharedWorker). Beachten Sie jedoch, dass, wenn Sie einen relativen Pfad zur Berechnung der URL eines Service Workers verwenden, das Verzeichnis des aufgelösten Pfades standardmäßig seinen [Registrierungsbereich](/de/docs/Web/API/ServiceWorkerRegistration/scope) bestimmt (obwohl bei der Registrierung ein anderer Bereich angegeben werden kann [während der Registrierung](/de/docs/Web/API/ServiceWorkerContainer/register)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)
- [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import)
- [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)
