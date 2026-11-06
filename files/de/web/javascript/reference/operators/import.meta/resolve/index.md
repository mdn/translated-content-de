---
title: import.meta.resolve()
slug: Web/JavaScript/Reference/Operators/import.meta/resolve
l10n:
  sourceCommit: 696a0436bb4dd20eb4d30ac3f1d4fc5140d1eee9
---

**`import.meta.resolve()`** ist eine integrierte Funktion des [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)-Objekts eines JavaScript-Moduls. Sie löst einen Modulbezeichner unter Verwendung der URL des aktuellen Moduls als Basis zu einer URL auf.

## Syntax

```js-nolint
import.meta.resolve(moduleName)
```

### Parameter

- `moduleName`
  - : Eine Zeichenfolge, die ein potenziell importierbares Modul angibt. Dies kann ein relativer Pfad (z. B. `"./lib/helper.js"`), ein einfacher Modulname (z. B. `"my-module"`) oder eine absolute URL (z. B. `"https://example.com/lib/helper.js"`) sein.

### Rückgabewert

Gibt eine Zeichenfolge zurück, die dem Pfad entspricht, der importiert würde, wenn das Argument an [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) übergeben würde.

## Beschreibung

Mit `import.meta.resolve()` kann ein Skript auf den Algorithmus zur _Auflösung von Modulbezeichnern_ für einen Namen zugreifen, beispielsweise so:

```js
// -- https://example.com/main.js --

const helperPath = import.meta.resolve("./lib/helper.js");
console.log(helperPath); // "https://example.com/lib/helper.js"
```

Beachten Sie, dass `import.meta.resolve()` lediglich die Auflösung durchführt und nicht versucht, das resultierende Modul zu [laden](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#loading_the_graph) oder zu importieren. In Browsern ist der Rückgabewert derselbe, _unabhängig davon, ob die zurückgegebene URL auf eine vorhandene Datei verweist und ob diese Datei gültigen Modulcode enthält_. Der Vorgang erfolgt _synchron_. Andere Laufzeitumgebungen als Browser können bei der Auflösung das Dateisystem prüfen; Node.js kann beispielsweise Paketmetadaten lesen und Pfade überprüfen.

Die Funktion unterscheidet sich vom [dynamischen Import](/de/docs/Web/JavaScript/Reference/Operators/import): Beide akzeptieren zwar einen Modulbezeichner als erstes Argument, aber `import.meta.resolve()` gibt den Pfad zurück, der _importiert würde_, ohne zu versuchen, auf diesen Pfad zuzugreifen. Daher sind die folgenden beiden Codebeispiele praktisch gleichwertig:

```js
// Approach 1
console.log(await import("./lib/helper.js"));

// Approach 2
const helperPath = import.meta.resolve("./lib/helper.js");
console.log(await import(helperPath));
```

Selbst wenn `"./lib/helper.js"` nicht erfolgreich importiert werden kann, tritt beim zweiten Codebeispiel erst dann ein Fehler auf, wenn in Zeile 2 versucht wird, den Import durchzuführen.

### Einfache Modulnamen

Sie können einen einfachen Modulnamen (auch als einfacher Modulbezeichner bezeichnet) an `import.meta.resolve()` übergeben, sofern für diesen Namen eine Modulauflösung definiert ist. Beispielsweise können Sie dies im Browser mit einer [Import Map](/de/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web#importing_modules_using_import_maps) festlegen:

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

Da dieses Codebeispiel nicht versucht, `moduleEntryPath` zu importieren – und die Import Map ebenfalls nicht –, gibt es die aufgelöste URL aus, unabhängig davon, ob `./modules/my-module/index.js` tatsächlich existiert.

### Vergleich mit new URL()

Der [`URL()`](/de/docs/Web/API/URL/URL)-Konstruktor akzeptiert als zweites Argument eine _Basis-URL_. Wenn das erste Argument ein relativer Pfad und die Basis-URL [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta#value) ist, ähnelt das Ergebnis dem von `import.meta.resolve()`.

```js
const helperPath = new URL("./lib/helper.js", import.meta.url).href;
console.log(helperPath);
```

Diese Syntax ist auch eine nützliche Alternative, wenn ältere Browser unterstützt werden sollen. Es gibt jedoch einige Unterschiede:

- `import.meta.resolve()` gibt eine Zeichenfolge zurück, während `new URL()` ein `URL`-Objekt zurückgibt. Sie können [`href`](/de/docs/Web/API/URL/href) oder [`toString()`](/de/docs/Web/API/URL/toString) auf dem erzeugten `URL`-Objekt verwenden; in manchen JavaScript-Umgebungen oder bei der Verwendung von Tools wie Bundlern zur statischen Codeanalyse ergibt sich dadurch jedoch möglicherweise nicht exakt dasselbe Ergebnis.
- `import.meta.resolve()` berücksichtigt zusätzliche Konfigurationen für die Auflösung, etwa die Auflösung einfacher Modulnamen mithilfe von Import Maps, wie oben beschrieben. `new URL()` berücksichtigt Import Maps nicht und behandelt einfache Modulnamen als relative Pfade (d.h. `new URL("my-module", import.meta.url)` bedeutet `new URL("./my-module", import.meta.url)`).

Einige Tools erkennen `new URL("./lib/helper.js", import.meta.url).href` als Abhängigkeit von `"./lib/helper.js"` (ähnlich einem Import) und berücksichtigen dies bei Funktionen wie dem Bundling, dem Umschreiben von Importen für verschobene Dateien oder der Navigation zum Quellcode. Da `import.meta.resolve()` jedoch weniger mehrdeutig ist und ausdrücklich eine Abhängigkeit von der Auflösung eines Modulpfads kennzeichnet, sollten Sie für solche Anwendungsfälle nach Möglichkeit `import.meta.resolve(moduleName)` statt `new URL(moduleName, import.meta.url)` verwenden.

### Kein ECMAScript-Feature

`import.meta.resolve()` ist nicht als Teil der [ECMAScript-Spezifikation](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview#javascript_the_core_language_ecmascript) für JavaScript-Module spezifiziert oder dokumentiert. Die Spezifikation definiert stattdessen [das `import.meta`-Objekt](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#prod-ImportMeta), überlässt aber [sämtliche seiner Eigenschaften der jeweiligen Laufzeitumgebung](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-hostgetimportmetaproperties). Der WHATWG-HTML-Standard setzt dort an, wo die ECMAScript-Spezifikation aufhört, und [definiert `import.meta.resolve`](https://html.spec.whatwg.org/multipage/webappapis.html#hostgetimportmetaproperties) mithilfe seiner [Auflösung von Modulbezeichnern](https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier).

Das bedeutet, dass nicht alle konformen JavaScript-Implementierungen `import.meta.resolve()` bereitstellen müssen. `import.meta.resolve()` kann jedoch auch in Umgebungen außerhalb des Browsers verfügbar sein:

- Deno implementiert [Kompatibilität mit dem Browserverhalten](https://docs.deno.com/api/node/module/#ImportMeta.methods).
- Node.js implementiert ebenfalls [die Funktion `import.meta.resolve()`](https://nodejs.org/docs/latest/api/esm.html#importmetaresolvespecifier), ergänzt aber einen zusätzlichen Parameter `parent`, wenn Sie das Flag `--experimental-import-meta-resolve` verwenden.

## Beispiele

### Einen Pfad für den Worker()-Konstruktor auflösen

`import.meta.resolve()` ist besonders nützlich für APIs, die einen Pfad zu einer Skriptdatei als Argument erwarten, beispielsweise den [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktor:

```js
// -- main.js --
const workerPath = import.meta.resolve("./worker.js");
const worker = new Worker(workerPath, { type: "module" });
worker.addEventListener("message", console.log);
```

```js
// -- worker.js --
self.postMessage("hello!");
```

Dies ist auch hilfreich, um Pfade für andere Worker zu berechnen, beispielsweise für [Service Worker](/de/docs/Web/API/ServiceWorker) und [Shared Worker](/de/docs/Web/API/SharedWorker). Wenn Sie jedoch einen relativen Pfad verwenden, um die URL eines Service Workers zu berechnen, beachten Sie, dass das Verzeichnis des aufgelösten Pfads standardmäßig seinen [Registrierungsbereich](/de/docs/Web/API/ServiceWorkerRegistration/scope) bestimmt (auch wenn [bei der Registrierung](/de/docs/Web/API/ServiceWorkerContainer/register) ein anderer Bereich angegeben werden kann).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)
- [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import)
- [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)
