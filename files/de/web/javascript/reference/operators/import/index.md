---
title: import()
slug: Web/JavaScript/Reference/Operators/import
l10n:
  sourceCommit: eb7cf694c19b31ee8826f22eaac6c12e808b1e50
---

{{jsSidebar("Operators")}}

Die **`import()`**-Syntax, häufig als _dynamischer Import_ bezeichnet, ist ein funktionsähnlicher Ausdruck, der das asynchrone und dynamische Laden eines ECMAScript-Moduls in eine potenziell nicht-modulare Umgebung ermöglicht.

Im Gegensatz zur [deklarativen Variante](/de/docs/Web/JavaScript/Reference/Statements/import) werden dynamische Importe nur bei Bedarf ausgewertet und ermöglichen eine größere syntaktische Flexibilität.

## Syntax

```js-nolint
import(moduleName)
import(moduleName, options)
```

Der `import()`-Aufruf ist eine Syntax, die einem Funktionsaufruf sehr ähnlich sieht, aber `import` selbst ist ein Schlüsselwort, keine Funktion. Sie können es nicht wie `const myImport = import` aliasieren, was einen {{jsxref("SyntaxError")}} auslösen würde.

[Abschließende Kommata](/de/docs/Web/JavaScript/Reference/Trailing_commas) sind nur erlaubt, wenn die Laufzeit auch `options` unterstützt. Überprüfen Sie die [Browser-Kompatibilität](#browserkompatibilität).

### Parameter

- `moduleName`
  - : Das Modul, aus dem importiert werden soll. Die Bewertung des Spezifizierers ist host-spezifiziert, folgt jedoch immer demselben Algorithmus wie statische [Import-Deklarationen](/de/docs/Web/JavaScript/Reference/Statements/import).
- `options`
  - : Ein Objekt mit Importoptionen. Der folgende Schlüssel wird erkannt:
    - `with`
      - : Die [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with).

### Rückgabewert

Gibt ein Versprechen zurück, das:

- Wenn das referenzierte Modul erfolgreich geladen und ausgewertet wird, erfüllt auf ein [Modul-Namespace-Objekt](#modul-namespace-objekt): ein Objekt, das alle Exporte aus `moduleName` enthält.
- Wenn die [Umwandlung in einen String](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) von `moduleName` ein Fehler wirft, wird mit dem geworfenen Fehler abgelehnt.
- Wenn `moduleName` auf ein nicht existentes Modul verweist, wird mit einem implementationsspezifischen Fehler abgelehnt (Node verwendet einen generischen `Error`, während alle Browser `TypeError` verwenden).
- Wenn die Auswertung des referenzierten Moduls ein Fehler wirft, wird mit dem geworfenen Fehler abgelehnt.

> **Hinweis:** `import()` wirft niemals synchron einen Fehler.

## Beschreibung

Die Import-Deklarationssyntax (`import something from "somewhere"`) ist statisch und resultiert immer darin, dass das importierte Modul zur Ladezeit ausgewertet wird. Dynamische Importe erlauben es, die syntaktische Starrheit von Import-Deklarationen zu umgehen und ein Modul bedingt oder auf Anfrage zu laden. Im Folgenden sind einige Gründe aufgeführt, warum Sie dynamischen Import benötigen könnten:

- Wenn der statische Import das Laden Ihres Codes erheblich verlangsamt oder den Speicherverbrauch Ihres Programms erhöht und die Wahrscheinlichkeit, dass Sie den zu importierenden Code benötigen, gering ist oder Sie ihn erst zu einem späteren Zeitpunkt benötigen.
- Wenn das Modul, das Sie importieren, zur Ladezeit nicht existiert.
- Wenn der Import-Spezifizierer-String dynamisch konstruiert werden muss. (Statischer Import unterstützt nur statische Spezifizierer.)
- Wenn das importierte Modul Nebeneffekte hat und Sie diese Nebeneffekte nur haben möchten, wenn eine bestimmte Bedingung zutrifft. (Es wird empfohlen, keine Nebeneffekte in einem Modul zu haben, aber manchmal können Sie dies bei Ihren Modulabhängigkeiten nicht kontrollieren.)
- Wenn Sie sich in einer nicht-modularen Umgebung befinden (zum Beispiel `eval` oder einer Skriptdatei).

Verwenden Sie dynamischen Import nur bei Bedarf. Die statische Form ist vorzuziehen, um anfängliche Abhängigkeiten zu laden, und kann von statischen Analysetools und [Tree Shaking](/de/docs/Glossary/Tree_shaking) besser profitieren.

Wenn Ihre Datei nicht als Modul ausgeführt wird (wenn sie in einer HTML-Datei referenziert wird, muss das Skripttag `type="module"` haben), können Sie keine statischen Import-Deklarationen verwenden. Auf der anderen Seite ist die asynchrone dynamische Importsyntax immer verfügbar, sodass Sie Module in nicht-modulare Umgebungen importieren können.

Der `options`-Parameter erlaubt verschiedene Arten von Importoptionen. Zum Beispiel, [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with):

```js
import("./data.json", { with: { type: "json" } });
```

Dynamischer Modulimport ist nicht in allen Ausführungskontexten erlaubt.
Zum Beispiel kann `import()` im Hauptthread, einem Shared Worker oder einem Dedicated Worker verwendet werden, wird jedoch einen Fehler werfen, wenn es innerhalb eines [Service Workers](/de/docs/Web/API/Service_Worker_API) oder eines [Worklets](/de/docs/Web/API/Worklet) aufgerufen wird.

### Modul-Namespace-Objekt

Ein _Modul-Namespace-Objekt_ ist ein Objekt, das alle Exporte aus einem Modul beschreibt. Es ist ein statisches Objekt, das erstellt wird, wenn das Modul ausgewertet wird. Es gibt zwei Möglichkeiten, auf das Modul-Namespace-Objekt eines Moduls zuzugreifen: durch einen [Namespace-Import](/de/docs/Web/JavaScript/Reference/Statements/import#namespace_import) (`import * as name from moduleName`), oder durch den Erfüllungswert eines dynamischen Imports.

Das Modul-Namespace-Objekt ist ein [versiegeltes](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed) Objekt mit einem [`null` Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects). Das bedeutet, dass alle String-Schlüssel des Objekts den Exporten des Moduls entsprechen und es niemals zusätzliche Schlüssel gibt. Alle Schlüssel sind [aufzählbar](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) in lexikografischer Reihenfolge (d.h. das Standardverhalten von [`Array.prototype.sort()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description)), wobei der Standardexport als Schlüssel namens `default` verfügbar ist. Darüber hinaus verfügt das Modul-Namespace-Objekt über eine [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft mit dem Wert `"Module"`, die in {{jsxref("Object.prototype.toString()")}} verwendet wird.

Die String-Eigenschaften sind nicht konfigurierbar und schreibbar, wenn Sie {{jsxref("Object.getOwnPropertyDescriptors()")}} verwenden, um ihre Deskriptoren abzurufen. Sie sind jedoch effektiv schreibgeschützt, da Sie einer Eigenschaft keinen neuen Wert zuweisen können. Dieses Verhalten spiegelt wider, dass statische Importe "[lebende Bindungen](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter)" erstellen – die Werte können vom Modul, das sie exportiert, neu zugewiesen werden, aber nicht vom Modul, das sie importiert. Die Schreibbarkeit der Eigenschaften spiegelt die Möglichkeit wider, dass sich die Werte ändern können, weil nicht konfigurierbare und nicht schreibbare Eigenschaften konstant sein müssen. Beispielsweise können Sie den exportierten Wert einer Variablen neu zuweisen, und der neue Wert kann im Modul-Namespace-Objekt beobachtet werden.

Jeder Modulspezifizierer entspricht einem eindeutigen Modul-Namespace-Objekt, sodass Folgendes im Allgemeinen zutrifft:

```js
import * as mod from "/my-module.js";

import("/my-module.js").then((mod2) => {
  console.log(mod === mod2); // true
});
```

Außer in einem merkwürdigen Fall: Da ein Versprechen niemals zu einem [thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) erfüllt wird, wird die `then()`-Funktion automatisch aufgerufen, wenn das Modul `my-module.js` eine Funktion namens `then()` exportiert und das Versprechen des dynamischen Imports im Rahmen des [Versprechensauflösungs](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#the_resolve_function)-Prozesses erfüllt wird.

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
  // Protokolliert "then() called"
  console.log(mod === mod2); // false
});
```

> [!WARNING]
> Exportieren Sie keine Funktion namens `then()` aus einem Modul. Dies führt dazu, dass sich das Modul beim dynamischen Import anders verhält als beim statischen Import.

## Beispiele

### Ein Modul nur für seine Nebeneffekte importieren

```js
(async () => {
  if (somethingIsTrue) {
    // Modul für Nebeneffekte importieren
    await import("/modules/my-module.js");
  }
})();
```

Wenn Ihr Projekt Pakete verwendet, die ESM exportieren, können Sie diese auch nur für Nebeneffekte importieren. Dies führt dazu, dass der Code im Einstiegspunkt (und in allen importierten Dateien) ausgeführt wird.

### Standardimporte

Wenn Sie das importierte Modul-Namespace-Objekt destrukturieren, müssen Sie den `default`-Schlüssel umbenennen, da `default` ein reserviertes Wort ist.

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

### Import auf Abruf als Reaktion auf eine Benutzeraktion

Dieses Beispiel zeigt, wie Funktionalitäten auf eine Seite geladen werden, basierend auf einer Benutzeraktion, in diesem Fall ein Klick auf einen Button, und dann eine Funktion innerhalb dieses Moduls aufgerufen wird. Dies ist nicht die einzige Möglichkeit, diese Funktionalität zu implementieren. Die `import()`-Funktion unterstützt auch `await`.

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

### Import verschiedener Module basierend auf der Umgebung

In Prozessen wie dem Server-Side-Rendering müssen Sie möglicherweise unterschiedliche Logik auf dem Server oder im Browser laden, da sie mit unterschiedlichen Globals oder Modulen interagieren (zum Beispiel hat Browsercode Zugriff auf Web-APIs wie `document` und `navigator`, während Servercode Zugriff auf das Server-Dateisystem hat). Dies lässt sich durch einen bedingten dynamischen Import realisieren.

```js
let myModule;

if (typeof window === "undefined") {
  myModule = await import("module-used-on-server");
} else {
  myModule = await import("module-used-in-browser");
}
```

### Import von Modulen mit einem nicht-literalen Spezifizierer

Dynamische Importe erlauben beliebige Ausdrücke als Modulspezifizierer, nicht unbedingt Stringliterale.

Hier laden wir 10 Module, `/modules/module-0.js`, `/modules/module-1.js`, usw., gleichzeitig und rufen die `load`-Funktionen auf, die jedes einzelne exportiert.

```js
Promise.all(
  Array.from({ length: 10 }).map(
    (_, index) => import(`/modules/module-${index}.js`),
  ),
).then((modules) => modules.forEach((module) => module.load()));
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)
