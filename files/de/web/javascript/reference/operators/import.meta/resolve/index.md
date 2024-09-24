---
title: import.meta.resolve()
slug: Web/JavaScript/Reference/Operators/import.meta/resolve
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{jsSidebar("Operators")}}

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

`import.meta.resolve()` ermöglicht einem Skript den Zugriff auf den _Modulspezifizierer-Auflösungsalgorithmus_ für einen Namen, wie folgt:

```js
// Skript unter https://example.com/main.js

const helperPath = import.meta.resolve("./lib/helper.js");
console.log(helperPath); // "https://example.com/lib/helper.js"
```

Beachten Sie, dass `import.meta.resolve()` nur die Auflösung ausführt und nicht versucht, den resultierenden Pfad zu laden oder zu importieren. (Die [Erläuterung zur Spezifikation](https://gist.github.com/domenic/f2a0a9cb62d499bcc4d12aebd1c255ab#sync-vs-async) beschreibt die Begründung für dieses Verhalten). Daher ist der Rückgabewert gleich, _unabhängig davon, ob der zurückgegebene Pfad zu einer vorhandenen Datei gehört und unabhängig davon, ob diese Datei gültigen Code für ein Modul enthält_.

Es unterscheidet sich von [dynamischem Import](/de/docs/Web/JavaScript/Reference/Operators/import), da, obwohl beide einen Modulspezifizierer als erstes Argument akzeptieren, `import.meta.resolve()` den Pfad zurückgibt, der _importiert würde_, ohne zu versuchen, auf diesen Pfad zuzugreifen. Daher sind die beiden folgenden Codebeispiele effektiv identisch:

```js
// Ansatz 1
console.log(await import("./lib/helper.js"));

// Ansatz 2
const helperPath = import.meta.resolve("./lib/helper.js");
console.log(await import(helperPath));
```

Jedoch, auch wenn `"./lib/helper.js"` nicht erfolgreich importiert werden kann, tritt im zweiten Codebeispiel kein Fehler auf, bis versucht wird, den Import in Zeile 2 auszuführen.

### Einfache Modulnamen

Sie können einen einfachen Modulnamen (auch bekannt als einfacher Modulspezifizierer) an `import.meta.resolve()` übergeben, solange die Modulauflösung für den Namen definiert ist. Zum Beispiel können Sie dies mit einer [Importkarte](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) innerhalb eines Browsers definieren:

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

Auch hier, da dieses Codebeispiel nicht versucht, `moduleEntryPath` zu importieren — und dies gilt auch für die Importkarte — wird die aufgelöste URL ausgegeben, unabhängig davon, ob `./modules/my-module/index.js` tatsächlich existiert.

### Vergleich mit URL()

Der [`URL()`](/de/docs/Web/API/URL/URL)-Konstruktor akzeptiert ein zweites Argument für die _Basis-URL_. Wenn das erste Argument ein relativer Pfad ist und die Basis-URL [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta#value) ist, ist der Effekt ähnlich wie bei `import.meta.resolve()`.

```js
const helperPath = new URL("./lib/helper.js", import.meta.url).href;
console.log(helperPath);
```

Dies ist auch eine nützliche Ersatzsyntax, wenn ältere Browser unterstützt werden sollen. Es gibt jedoch einige Unterschiede:

- `import.meta.resolve()` gibt einen String zurück, während `new URL()` ein `URL`-Objekt zurückgibt. Es ist möglich, [`href`](/de/docs/Web/API/URL/href) oder [`toString()`](/de/docs/Web/API/URL/toString) auf dem konstruierten `URL`-Objekt zu verwenden, aber dies erzeugt möglicherweise dennoch nicht dasselbe Ergebnis in einigen JavaScript-Umgebungen oder beim Einsatz von Tools wie Bundlern zur statischen Codeanalyse.
- `import.meta.resolve()` ist sich zusätzlicher Auflösungskonfigurationen bewusst, wie das Auflösen einfacher Modulnamen mit Importkarten, wie oben beschrieben. `new URL()` kennt keine Importkarten und behandelt einfache Modulnamen als relative Pfade (d.h. `new URL("my-module", import.meta.url)` bedeutet `new URL("./my-module", import.meta.url)`).

Einige Tools erkennen `new URL("./lib/helper.js", import.meta.url).href` als Abhängigkeit von `"./lib/helper.js"` (ähnlich wie ein Import) und berücksichtigen dies für Funktionen wie Bündelung, Umschreiben von Importen für verschobene Dateien, "Go to source"-Funktionalität usw. Da `import.meta.resolve()` jedoch weniger mehrdeutig und speziell entwickelt ist, um eine Abhängigkeitspfadauflösung anzuzeigen, sollten Sie `import.meta.resolve(moduleName)` anstelle von `new URL(moduleName, import.meta.url)` für diese Anwendungsfälle wann immer möglich verwenden.

### Kein ECMAScript-Feature

`import.meta.resolve()` wird nicht als Teil der [ECMAScript-Spezifikation](/de/docs/Web/JavaScript/JavaScript_technologies_overview#javascript_the_core_language_ecmascript) für JavaScript-Module spezifiziert oder dokumentiert. Stattdessen definiert die Spezifikation [das `import.meta` Objekt](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#prod-ImportMeta), lässt jedoch [alle seine Eigenschaften als "host-definiert"](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-hostgetimportmetaproperties). Der WHATWG-HTML-Standard übernimmt, wo der ECMAScript-Standard aufhört, und [definiert `import.meta.resolve`](https://html.spec.whatwg.org/multipage/webappapis.html#hostgetimportmetaproperties) unter Verwendung seiner [Modulspezifiziererauflösung](https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier).

Das bedeutet, dass `import.meta.resolve()` nicht von allen konformen JavaScript-Implementierungen implementiert werden muss. Es kann jedoch auch in nicht-browserbasierten Umgebungen verfügbar sein:

- Deno implementiert [Kompatibilität mit dem Verhalten des Browsers](https://docs.deno.com/runtime/reference/deno_namespace_apis/#import.meta).
- Node.js implementiert auch [die `import.meta.resolve()` Funktion](https://nodejs.org/docs/latest/api/esm.html#importmetaresolvespecifier), fügt jedoch einen zusätzlichen `parent`-Parameter hinzu, wenn Sie den `--experimental-import-meta-resolve`-Flag verwenden.

## Beispiele

### Auflösung eines Pfads für den Worker()-Konstruktor

`import.meta.resolve()` ist besonders wertvoll für APIs, die einen Pfad zu einer Skriptdatei als Argument erfordern, wie den [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktor:

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

Dies ist auch nützlich, um Pfade für andere Worker zu berechnen, wie [Service Worker](/de/docs/Web/API/ServiceWorker) und [Shared Worker](/de/docs/Web/API/SharedWorker). Beachten Sie jedoch, wenn Sie einen relativen Pfad verwenden, um die URL eines Service Workers zu berechnen, dass das Verzeichnis des aufgelösten Pfades standardmäßig seinen [Registrierungsbereich](/de/docs/Web/API/ServiceWorkerRegistration/scope) bestimmt (obwohl bei der [Registrierung](/de/docs/Web/API/ServiceWorkerContainer/register) ein anderer Bereich angegeben werden kann).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)
- [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import)
- [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)
