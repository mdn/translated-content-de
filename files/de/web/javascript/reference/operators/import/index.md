---
title: import()
slug: Web/JavaScript/Reference/Operators/import
l10n:
  sourceCommit: eb7cf694c19b31ee8826f22eaac6c12e808b1e50
---

{{jsSidebar("Operators")}}

Die **`import()`** Syntax, allgemein bekannt als _dynamischer Import_, ist ein ausdrucksähnlicher Befehl, der das asynchrone und dynamische Laden eines ECMAScript-Moduls in Nicht-Modul-Umgebungen ermöglicht.

Im Gegensatz zum [deklarativen Gegenstück](/de/docs/Web/JavaScript/Reference/Statements/import) werden dynamische Importe nur dann ausgewertet, wenn sie benötigt werden, und bieten eine größere syntaktische Flexibilität.

## Syntax

```js-nolint
import(moduleName)
import(moduleName, options)
```

Der `import()`-Aufruf ähnelt syntaktisch einem Funktionsaufruf, aber `import` selbst ist ein Schlüsselwort und keine Funktion. Sie können es nicht wie `const myImport = import` aliasieren, da dies einen {{jsxref("SyntaxError")}} auslöst.

[Abschließende Kommata](/de/docs/Web/JavaScript/Reference/Trailing_commas) sind nur zulässig, wenn die Laufzeitumgebung auch `options` unterstützt. Überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität).

### Parameter

- `moduleName`
  - : Das Modul, aus dem importiert werden soll. Die Auswertung des Bezeichners ist host-spezifisch, folgt jedoch immer demselben Algorithmus wie die statischen [Import-Erklärungen](/de/docs/Web/JavaScript/Reference/Statements/import).
- `options`
  - : Ein Objekt mit Import-Optionen. Die folgende Schlüssel wird erkannt:
    - `with`
      - : Die [Import-Attribute](/de/docs/Web/JavaScript/Reference/Statements/import/with).

### Rückgabewert

Gibt ein Promise zurück, das:

- Falls das referenzierte Modul erfolgreich geladen und ausgewertet wird, zu einem [Modul-Namensraum-Objekt](#modul-namensraum-objekt) erfüllt ist: ein Objekt, das alle Exporte von `moduleName` enthält.
- Falls die [Konvertierung zu String](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) von `moduleName` fehlschlägt, mit dem ausgelösten Fehler ablehnt.
- Falls `moduleName` auf ein nicht vorhandenes Modul verweist, mit einem implementationsspezifischen Fehler ablehnt (Node verwendet einen generischen `Error`, während alle Browser `TypeError` verwenden).
- Falls die Auswertung des referenzierten Moduls fehlschlägt, mit dem ausgelösten Fehler ablehnt.

> **Note:** `import()` löst niemals synchron einen Fehler aus.

## Beschreibung

Die Importdeklarationssyntax (`import something from "somewhere"`) ist statisch und führt immer dazu, dass das importierte Modul zur Ladezeit ausgewertet wird. Dynamische Importe ermöglichen es, die syntaktische Starrheit von Importdeklarationen zu umgehen und ein Modul bedingt oder auf Abruf zu laden. Hier sind einige Gründe, warum Sie dynamische Importe verwenden könnten:

- Wenn das statische Importieren das Laden Ihres Codes erheblich verlangsamt oder den Speicherverbrauch Ihres Programms erhöht, und die Wahrscheinlichkeit gering ist, dass Sie den importierten Code benötigen, oder erst zu einem späteren Zeitpunkt.
- Wenn das zu importierende Modul zur Ladezeit nicht existiert.
- Wenn der Import-Bezeichner-String dynamisch konstruiert werden muss. (Statische Importe unterstützen nur statische Bezeichner.)
- Wenn das importierte Modul Nebeneffekte hat, die Sie nur dann haben möchten, wenn eine bestimmte Bedingung erfüllt ist. (Es wird empfohlen, in einem Modul keine Nebeneffekte zu haben, aber manchmal können Sie dies in Ihren Modulabhängigkeiten nicht beeinflussen.)
- Wenn Sie sich in einer Nicht-Modul-Umgebung befinden (zum Beispiel `eval` oder eine Skriptdatei).

Verwenden Sie dynamische Importe nur bei Bedarf. Die statische Form ist vorzuziehen, um anfängliche Abhängigkeiten zu laden, und kann von statischen Analysetools und [Tree Shaking](/de/docs/Glossary/Tree_shaking) leichter profitieren.

Wenn Ihre Datei nicht als Modul ausgeführt wird (wenn sie in einer HTML-Datei referenziert wird, muss das Skript-Tag `type="module"` haben), können Sie keine statischen Importdeklarationen verwenden. Im Gegensatz dazu ist die asynchrone dynamische Importsyntax immer verfügbar und ermöglicht das Importieren von Modulen in Nicht-Modul-Umgebungen.

Der Parameter `options` erlaubt verschiedene Arten von Importoptionen. Zum Beispiel [Import-Attribute](/de/docs/Web/JavaScript/Reference/Statements/import/with):

```js
import("./data.json", { with: { type: "json" } });
```

Der dynamische Modulimport ist nicht in allen Ausführungskontexten zulässig.
Zum Beispiel kann `import()` im Hauptthread, einem gemeinsamen Worker oder einem dedizierten Worker verwendet werden, führt jedoch zu einem Fehler, wenn es innerhalb eines [Service Workers](/de/docs/Web/API/Service_Worker_API) oder einer [Worklet](/de/docs/Web/API/Worklet) aufgerufen wird.

### Modul-Namensraum-Objekt

Ein _Modul-Namensraum-Objekt_ beschreibt alle Exporte eines Moduls. Es ist ein statisches Objekt, das erstellt wird, wenn das Modul ausgewertet wird. Es gibt zwei Möglichkeiten, auf das Modul-Namensraum-Objekt eines Moduls zuzugreifen: durch einen [Namensraum-Import](/de/docs/Web/JavaScript/Reference/Statements/import#namespace_import) (`import * as name from moduleName`) oder durch den Erfüllungswert eines dynamischen Imports.

Das Modul-Namensraum-Objekt ist ein [versiegeltes](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed) Objekt mit [`null` Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects). Dies bedeutet, dass alle String-Schlüssel des Objekts den Exporten des Moduls entsprechen und es niemals zusätzliche Schlüssel gibt. Alle Schlüssel sind in lexikographischer Reihenfolge [enumerierbar](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) (d.h. das Standardverhalten von [`Array.prototype.sort()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description)), mit dem Standardexport als Schlüssel namens `default`. Zusätzlich hat das Modul-Namensraum-Objekt eine [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft mit dem Wert `"Module"`, die in {{jsxref("Object.prototype.toString()")}} verwendet wird.

Die String-Eigenschaften sind nicht konfigurierbar und beschreibbar, wenn Sie {{jsxref("Object.getOwnPropertyDescriptors()")}} verwenden, um ihre Deskriptoren zu erhalten. Sie sind jedoch effektiv schreibgeschützt, da Sie einer Eigenschaft keinen neuen Wert zuweisen können. Dieses Verhalten spiegelt wider, dass statische Importe "[Live-Bindings](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter)" erstellen — die Werte können vom Modul, das sie exportiert, neu zugewiesen werden, aber nicht vom Modul, das sie importiert. Die Beschreibbarkeit der Eigenschaften spiegelt die Möglichkeit wider, dass sich die Werte ändern, da nicht konfigurierbare und nicht schreibbare Eigenschaften konstant sein müssen. Zum Beispiel können Sie den exportierten Wert einer Variablen neu zuweisen, und der neue Wert kann im Modul-Namensraum-Objekt beobachtet werden.

Jeder Modulbezeichner entspricht einem einzigartigen Modul-Namensraum-Objekt, sodass Folgendes im Allgemeinen zutrifft:

```js
import * as mod from "/my-module.js";

import("/my-module.js").then((mod2) => {
  console.log(mod === mod2); // true
});
```

Außer in einem kuriosen Fall: Da ein Promise sich niemals zu einem [Thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) erfüllt, wird eine Funktion namens `then()`, die vom `my-module.js` Modul exportiert wird, automatisch aufgerufen, wenn das Promise des dynamischen Imports erfüllt wird, als Teil des [Promise-Auflösungsprozesses](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#the_resolve_function).

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
> Exportieren Sie keine Funktion namens `then()` aus einem Modul. Dies führt dazu, dass das Modul sich unterschiedlich verhält, wenn es dynamisch oder statisch importiert wird.

## Beispiele

### Ein Modul nur für seine Nebeneffekte importieren

```js
(async () => {
  if (somethingIsTrue) {
    // import module for side effects
    await import("/modules/my-module.js");
  }
})();
```

Wenn Ihr Projekt Pakete verwendet, die ESM exportieren, können Sie diese auch nur aufgrund von Nebeneffekten importieren. Dadurch wird der Code in der Datei des Paketeinstiegspunkts (und allen Dateien, die sie importiert) nur ausgeführt.

### Standardimporte importieren

Wenn Sie das importierte Modul-Namensraum-Objekt destrukturieren, müssen Sie den `default` Schlüssel umbenennen, da `default` ein reserviertes Wort ist.

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

Dieses Beispiel zeigt, wie Funktionalität basierend auf einer Benutzeraktion, in diesem Fall ein Tastendruck, auf eine Seite geladen und dann eine Funktion innerhalb dieses Moduls aufgerufen wird. Dies ist nicht die einzige Möglichkeit, diese Funktionalität zu implementieren. Die `import()` Funktion unterstützt auch `await`.

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

In Prozessen wie serverseitigem Rendering müssen Sie möglicherweise unterschiedliche Logik auf dem Server oder im Browser laden, da sie unterschiedliche globale Objekte oder Module verwenden (zum Beispiel hat der Browsercode Zugriff auf Web-APIs wie `document` und `navigator`, während der Servercode Zugriff auf das Server-Dateisystem hat). Sie können dies durch einen bedingten dynamischen Import tun.

```js
let myModule;

if (typeof window === "undefined") {
  myModule = await import("module-used-on-server");
} else {
  myModule = await import("module-used-in-browser");
}
```

### Module mit einem Nicht-String-Literal-Bezeichner importieren

Dynamische Importe erlauben jeden Ausdruck als Modulbezeichner, nicht unbedingt String-Literale.

Hier laden wir 10 Module, `/modules/module-0.js`, `/modules/module-1.js`, usw., gleichzeitig und rufen die `load` Funktionen auf, die sie jeweils exportieren.

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
