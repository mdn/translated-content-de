---
title: import()
slug: Web/JavaScript/Reference/Operators/import
l10n:
  sourceCommit: eb7cf694c19b31ee8826f22eaac6c12e808b1e50
---

{{jsSidebar("Operators")}}

Die **`import()`**-Syntax, allgemein als _dynamisches Importieren_ bezeichnet, ist ein funktionsähnlicher Ausdruck, der das asynchrone und dynamische Laden eines ECMAScript-Moduls in eine potenziell nicht-modulare Umgebung ermöglicht.

Im Gegensatz zum [deklarationsbasierten Gegenstück](/de/docs/Web/JavaScript/Reference/Statements/import) werden dynamische Importe nur bei Bedarf ausgewertet und erlauben eine größere syntaktische Flexibilität.

## Syntax

```js-nolint
import(moduleName)
import(moduleName, options)
```

Der `import()`-Aufruf ist eine Syntax, die einem Funktionsaufruf ähnelt, aber `import` selbst ist ein Schlüsselwort und keine Funktion. Sie können es nicht wie `const myImport = import` umbenennen, da dies einen {{jsxref("SyntaxError")}} auslöst.

[Abschließende Kommata](/de/docs/Web/JavaScript/Reference/Trailing_commas) sind nur erlaubt, wenn die Laufzeit auch `options` unterstützt. Überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität).

### Parameter

- `moduleName`
  - : Das Modul, aus dem importiert wird. Die Bewertung des Bezeichners ist host-spezifisch, folgt jedoch immer dem gleichen Algorithmus wie statische [Import-Deklarationen](/de/docs/Web/JavaScript/Reference/Statements/import).
- `options`
  - : Ein Objekt, das Importoptionen enthält. Der folgende Schlüssel wird erkannt:
    - `with`
      - : Die [Import-Attribute](/de/docs/Web/JavaScript/Reference/Statements/import/with).

### Rückgabewert

Gibt ein Promise zurück, das:

- Wenn das referenzierte Modul erfolgreich geladen und ausgewertet wird, zu einem [Modul-Namensraum-Objekt](#modul-namensraum-objekt) erfüllt wird: einem Objekt, das alle Exporte von `moduleName` enthält.
- Wenn die [Umwandlung in einen String](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) von `moduleName` einen Fehler auslöst, mit dem ausgelösten Fehler abgelehnt wird.
- Wenn `moduleName` sich auf ein nicht existierendes Modul bezieht, mit einem implementierungsdefinierten Fehler abgelehnt wird (Node verwendet einen generischen `Error`, während alle Browser `TypeError` verwenden).
- Wenn die Auswertung des referenzierten Moduls einen Fehler auslöst, mit dem ausgelösten Fehler abgelehnt wird.

> [!NOTE] > `import()` löst niemals synchron einen Fehler aus.

## Beschreibung

Die Import-Deklarationssyntax (`import something from "somewhere"`) ist statisch und wird immer dazu führen, dass das importierte Modul zur Ladezeit ausgewertet wird. Dynamische Importe ermöglichen es, die syntaktische Starrheit von Import-Deklarationen zu umgehen und ein Modul bedingt oder bei Bedarf zu laden. Im Folgenden sind einige Gründe aufgeführt, warum Sie möglicherweise dynamische Importe verwenden müssen:

- Wenn das statische Importieren das Laden Ihres Codes erheblich verlangsamt oder den Speicherverbrauch Ihres Programms erhöht, und die Wahrscheinlichkeit gering ist, dass der zu importierende Code benötigt wird, oder er erst zu einem späteren Zeitpunkt benötigt wird.
- Wenn das zu importierende Modul zur Ladezeit nicht existiert.
- Wenn der Import-Bezeichner-String dynamisch konstruiert werden muss. (Statische Importe unterstützen nur statische Bezeichner.)
- Wenn das importierte Modul Nebeneffekte hat und Sie diese Nebeneffekte nur wollen, wenn eine bestimmte Bedingung erfüllt ist. (Es wird empfohlen, keine Nebenwirkungen in einem Modul zu haben, aber manchmal kann man dies in den Modulabhängigkeiten nicht kontrollieren.)
- Wenn Sie sich in einer nicht-modularen Umgebung befinden (zum Beispiel `eval` oder eine Skriptdatei).

Verwenden Sie dynamische Importe nur bei Bedarf. Die statische Form ist vorzuziehen, um anfängliche Abhängigkeiten zu laden, und kann eher von statischen Analysetools und {{Glossary("Tree_shaking", "Tree Shaking")}} profitieren.

Wenn Ihre Datei nicht als Modul ausgeführt wird (wenn sie in einer HTML-Datei referenziert ist, muss das Skript-Tag `type="module"` haben), können Sie keine statischen Import-Deklarationen verwenden. Auf der anderen Seite ist die asynchrone dynamische Import-Syntax immer verfügbar und ermöglicht es Ihnen, Module in nicht-modulare Umgebungen zu importieren.

Der `options`-Parameter ermöglicht verschiedene Arten von Importoptionen. Zum Beispiel [Import-Attribute](/de/docs/Web/JavaScript/Reference/Statements/import/with):

```js
import("./data.json", { with: { type: "json" } });
```

Dynamisches Modulimportieren ist nicht in allen Ausführungskontexten erlaubt. Zum Beispiel kann `import()` im Haupt-Thread, einem Shared Worker oder einem Dedicated Worker verwendet werden, wird jedoch bei Aufruf innerhalb eines [Service Workers](/de/docs/Web/API/Service_Worker_API) oder eines [Worklets](/de/docs/Web/API/Worklet) einen Fehler auslösen.

### Modul-Namensraum-Objekt

Ein _Modul-Namensraum-Objekt_ ist ein Objekt, das alle Exporte eines Moduls beschreibt. Es ist ein statisches Objekt, das bei der Auswertung des Moduls erstellt wird. Es gibt zwei Möglichkeiten, auf das Modul-Namensraum-Objekt eines Moduls zuzugreifen: durch einen [Namensraum-Import](/de/docs/Web/JavaScript/Reference/Statements/import#namespace_import) (`import * as name from moduleName`), oder durch den Erfüllungswert eines dynamischen Imports.

Das Modul-Namensraum-Objekt ist ein [versiegeltes](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed) Objekt mit [`null`-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects). Dies bedeutet, dass alle String-Schlüssel des Objekts den Exporten des Moduls entsprechen und es niemals zusätzliche Schlüssel gibt. Alle Schlüssel sind in lexikografischer Ordnung [enumerierbar](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) (d. h. das Standardverhalten von [`Array.prototype.sort()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description)), wobei der Standardexport als Schlüssel namens `default` verfügbar ist. Zusätzlich hat das Modul-Namensraum-Objekt eine Eigenschaft [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) mit dem Wert `"Module"`, die in {{jsxref("Object.prototype.toString()")}} verwendet wird.

Die String-Eigenschaften sind nicht konfigurierbar und beschreibbar, wenn Sie {{jsxref("Object.getOwnPropertyDescriptors()")}} verwenden, um ihre Deskriptoren zu erhalten. Sie sind jedoch effektiv schreibgeschützt, weil Sie einer Eigenschaft keinen neuen Wert zuweisen können. Dieses Verhalten spiegelt wider, dass statische Importe "[live bindings](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter)" erstellen können — die Werte können vom Modul, das sie exportiert, neu zugewiesen werden, aber nicht vom Modul, das sie importiert. Die Beschreibbarkeit der Eigenschaften spiegelt die Möglichkeit wider, dass sich die Werte ändern können, da nicht konfigurierbare und nicht beschreibbare Eigenschaften konstant sein müssen. Zum Beispiel kann der exportierte Wert einer Variablen neu zugewiesen werden, und der neue Wert kann im Modul-Namensraum-Objekt beobachtet werden.

Jeder Modulspezifiker entspricht einem einzigartigen Modul-Namensraum-Objekt, sodass Folgendes im Allgemeinen zutrifft:

```js
import * as mod from "/my-module.js";

import("/my-module.js").then((mod2) => {
  console.log(mod === mod2); // true
});
```

Mit Ausnahme eines kuriosen Falls: Da ein Promise niemals zu einem [thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) führt, wird die Funktion `then()`, wenn das Modul `my-module.js` eine Funktion namens `then()` exportiert, automatisch aufgerufen, wenn das Promise des dynamischen Imports erfüllt wird, als Teil des [Promise-Resolution](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#the_resolve_function) Prozesses.

```js
// my-module.js
export function then(resolve) {
  console.log("then() called");
  resolve(1);
}
```

```js
// main.js
import * as mod from "/my-module.js";

import("/my-module.js").then((mod2) => {
  // Logs "then() called"
  console.log(mod === mod2); // false
});
```

> [!WARNING]
> Exportieren Sie keine Funktion namens `then()` aus einem Modul. Dies führt dazu, dass das Modul beim dynamischen Importieren anders reagiert als beim statischen Importieren.

## Beispiele

### Modul nur für seine Nebeneffekte importieren

```js
(async () => {
  if (somethingIsTrue) {
    // import module for side effects
    await import("/modules/my-module.js");
  }
})();
```

Wenn Ihr Projekt Pakete verwendet, die ESM exportieren, können Sie diese auch nur für Nebeneffekte importieren. Dies wird den Code im Einstiegspunkt der Paketdatei (und allen importierten Dateien) nur ausführen.

### Importieren von Standardeinstellungen

Wenn Sie das importierte Modul-Namensraum-Objekt destrukturieren, müssen Sie den Schlüssel `default` umbenennen, da `default` ein reserviertes Wort ist.

```js
(async () => {
  if (somethingIsTrue) {
    const {
      default: myDefault,
      foo,
      bar,
    } = await import("/modules/my-module.js");
  }
})();
```

### Importieren auf Abruf als Reaktion auf eine Benutzeraktion

Dieses Beispiel zeigt, wie Funktionen auf eine Seite basierend auf einer Benutzeraktion geladen werden, in diesem Fall einem Button-Klick, und dann eine Funktion innerhalb dieses Moduls aufgerufen wird. Dies ist nicht die einzige Möglichkeit, diese Funktionalität zu implementieren. Die `import()`-Funktion unterstützt auch `await`.

```js
const main = document.querySelector("main");
for (const link of document.querySelectorAll("nav > a")) {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    import("/modules/my-module.js")
      .then((module) => {
        module.loadPageInto(main);
      })
      .catch((err) => {
        main.textContent = err.message;
      });
  });
}
```

### Importieren verschiedener Module basierend auf der Umgebung

In Prozessen wie der serverseitigen Erstellung von Inhalten müssen Sie möglicherweise unterschiedliche Logik auf dem Server oder im Browser laden, da sie mit unterschiedlichen globalen Objekten oder Modulen interagieren (zum Beispiel hat Browser-Code Zugriff auf Web-APIs wie `document` und `navigator`, während Server-Code Zugriff auf das Dateisystem des Servers hat). Dies kann durch einen bedingten dynamischen Import geschehen.

```js
let myModule;

if (typeof window === "undefined") {
  myModule = await import("module-used-on-server");
} else {
  myModule = await import("module-used-in-browser");
}
```

### Importieren von Modulen mit einem nicht-literalen Bezeichner

Dynamische Importe erlauben jeden Ausdruck als Modulbezeichner, nicht unbedingt String-Literale.

Hier laden wir 10 Module gleichzeitig, `/modules/module-0.js`, `/modules/module-1.js`, usw., und rufen die `load`-Funktionen auf, die jedes davon exportiert.

```js
Promise.all(
  Array.from({ length: 10 }).map(
    (_, index) => import(`/modules/module-${index}.js`),
  ),
).then((modules) => modules.forEach((module) => module.load()));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)
