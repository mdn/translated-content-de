---
title: import()
slug: Web/JavaScript/Reference/Operators/import
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{jsSidebar("Operators")}}

Die **`import()`**-Syntax, allgemein als _dynamischer Import_ bezeichnet, ist ein ausdrucksähnlicher Mechanismus, der es ermöglicht, ein ECMAScript-Modul asynchron und dynamisch in eine potenziell nicht modulares Umfeld zu laden.

Im Gegensatz zum [deklarationsstilartigen Pendant](/de/docs/Web/JavaScript/Reference/Statements/import) werden dynamische Importe nur bei Bedarf ausgewertet und erlauben eine größere syntaktische Flexibilität.

## Syntax

```js-nolint
import(moduleName)
import(moduleName, options)
```

Der Aufruf `import()` ähnelt stark einem Funktionsaufruf, jedoch ist `import` ein Schlüsselwort und keine Funktion. Sie können es nicht umbenennen wie `const myImport = import`, da dies einen {{jsxref("SyntaxError")}} auslöst.

[Abschließende Kommas](/de/docs/Web/JavaScript/Reference/Trailing_commas) sind nur erlaubt, wenn der Laufzeitumgebung auch `options` unterstützt. Überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität).

### Parameter

- `moduleName`
  - : Das Modul, aus dem importiert werden soll. Die Auswertung des Spezifizierers ist hostspezifisch, folgt aber immer dem gleichen Algorithmus wie statische [Import-Deklarationen](/de/docs/Web/JavaScript/Reference/Statements/import).
- `options`
  - : Ein Objekt, das Importoptionen enthält. Der folgende Schlüssel wird erkannt:
    - `with`
      - : Die [Import-Attribute](/de/docs/Web/JavaScript/Reference/Statements/import/with).

### Rückgabewert

Gibt ein Versprechen zurück, das:

- Erfüllt wird mit einem [Module Namespace Object](#modul-namespace-objekt), wenn das referenzierte Modul erfolgreich geladen und ausgewertet wird: ein Objekt, das alle Exporte aus `moduleName` enthält.
- Abgelehnt wird mit dem geworfenen Fehler, wenn die [Umwandlung zu String](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) von `moduleName` scheitert.
- Abgelehnt wird mit einem implementationsspezifischen Fehler (Node verwendet einen generischen `Error`, während alle Browser `TypeError` verwenden), wenn das Laden des Moduls aus irgendeinem Grund fehlschlägt. Häufige Ursachen können sein:
  - In einem dateisystembasierten Modulsystem (z. B. Node.js), wenn der Zugriff auf das Dateisystem fehlschlägt (Zugriff verweigert, Datei nicht gefunden, etc.).
  - In einem webbasierten Modulsystem (z. B. Browser), wenn die Netzwerkanfrage fehlschlägt (keine Internetverbindung, CORS-Problem, etc.) oder ein HTTP-Fehler auftritt (404, 500, etc.).
- Abgelehnt wird mit dem geworfenen Fehler, wenn die Auswertung des referenzierten Moduls fehlschlägt.

> **Note:** `import()` wirft niemals synchron einen Fehler.

## Beschreibung

Die Import-Deklarationssyntax (`import something from "somewhere"`) ist statisch und führt immer dazu, dass das importierte Modul zur Ladezeit ausgewertet wird. Dynamische Importe ermöglichen es, die syntaktische Starrheit von Import-Deklarationen zu umgehen und ein Modul bedingt oder bei Bedarf zu laden. Die folgenden Gründe könnten für den Einsatz von dynamischen Importen sprechen:

- Wenn das statische Importieren das Laden Ihres Codes erheblich verlangsamt oder den Speicherverbrauch Ihres Programms erhöht und die Wahrscheinlichkeit gering ist, dass Sie den importierten Code benötigen, oder Sie ihn erst zu einem späteren Zeitpunkt benötigen.
- Wenn das zu importierende Modul zur Ladezeit nicht existiert.
- Wenn der Importspezifizierer dynamisch konstruiert werden muss. (Statische Importe unterstützen nur statische Spezifizierer.)
- Wenn das zu importierende Modul Seiteneffekte hat und Sie diese Seiteneffekte nur dann wollen, wenn eine bestimmte Bedingung wahr ist. (Empfohlen wird, keine Seiteneffekte in einem Modul zu haben, aber manchmal können Sie dies bei Ihren Moduldabhängigkeiten nicht kontrollieren.)
- Wenn Sie sich in einer Nicht-Modul-Umgebung befinden (zum Beispiel `eval` oder eine Skriptdatei).

Verwenden Sie dynamische Importe nur, wenn es notwendig ist. Die statische Form wird bevorzugt für das Laden initialer Abhängigkeiten und kann eher von statischen Analysetools und {{Glossary("Tree_shaking", "Tree Shaking")}} profitieren.

Wenn Ihre Datei nicht als Modul ausgeführt wird (wenn sie in einer HTML-Datei referenziert wird, muss das Skript-Tag `type="module"` haben), werden Sie keine statischen Import-Deklarationen verwenden können. Andererseits ist die asynchrone dynamische Import-Syntax immer verfügbar und ermöglicht es Ihnen, Module in Nicht-Modulumgebungen zu importieren.

Der `options`-Parameter ermöglicht verschiedene Arten von Importoptionen. Zum Beispiel [Import-Attribute](/de/docs/Web/JavaScript/Reference/Statements/import/with):

```js
import("./data.json", { with: { type: "json" } });
```

Dynamischer Modulimport ist nicht in allen Ausführungskontexten erlaubt. Zum Beispiel kann `import()` im Hauptthread, einem gemeinsamen Worker oder einem dedizierten Worker verwendet werden, wird jedoch einen Fehler werfen, wenn er innerhalb eines [Service Workers](/de/docs/Web/API/Service_Worker_API) oder eines [Worklets](/de/docs/Web/API/Worklet) aufgerufen wird.

### Modul-Namespace-Objekt

Ein _Modul-Namespace-Objekt_ ist ein Objekt, das alle Exporte eines Moduls beschreibt. Es ist ein statisches Objekt, das erstellt wird, wenn das Modul ausgewertet wird. Es gibt zwei Möglichkeiten, auf das Modul-Namespace-Objekt eines Moduls zuzugreifen: über einen [Namespace-Import](/de/docs/Web/JavaScript/Reference/Statements/import#namespace_import) (`import * as name from moduleName`) oder über den Erfüllungswert eines dynamischen Imports.

Das Modul-Namespace-Objekt ist ein [versiegeltes](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed) Objekt mit [`null` Prototype](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects). Das bedeutet, dass alle Schlüssel des Objekts den Exporten des Moduls entsprechen und es keine zusätzlichen Schlüssel gibt. Alle Schlüssel sind [aufzählbar](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) in lexikografischer Reihenfolge (d.h. das Standardverhalten von [`Array.prototype.sort()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description)), wobei der Standardexport als Schlüssel mit dem Namen `default` verfügbar ist. Zudem hat das Modul-Namespace-Objekt eine [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft mit dem Wert `"Module"`, die in {{jsxref("Object.prototype.toString()")}} verwendet wird.

Die String-Eigenschaften sind nicht konfigurierbar und beschreibbar, wenn Sie {{jsxref("Object.getOwnPropertyDescriptors()")}} verwenden, um ihre Descriptoren zu erhalten. Sie sind jedoch effektiv schreibgeschützt, da Sie einer Eigenschaft keinen neuen Wert zuweisen können. Dieses Verhalten spiegelt die Tatsache wider, dass statische Importe "[live bindings](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter)" erzeugen — die Werte können vom modulexportierenden Modul neu zugewiesen werden, jedoch nicht vom modulimportierenden Modul. Die Schreibbarkeit der Eigenschaften spiegelt die Möglichkeit wider, dass sich die Werte ändern, da nicht konfigurierbare und nicht beschreibbare Eigenschaften konstant bleiben müssen. Zum Beispiel können Sie den exportierten Wert einer Variablen neu zuweisen, und der neue Wert kann im Modul-Namespace-Objekt beobachtet werden.

Jeder (normalisierte) Modulspezifizierer entspricht einem einzigartigen Modul-Namespace-Objekt, weshalb Folgendes im Allgemeinen zutrifft:

```js
import * as mod from "/my-module.js";

import("/my-module.js").then((mod2) => {
  console.log(mod === mod2); // true
});
```

Außer in einem kuriosen Fall: Da ein Versprechen niemals zu einem [thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) erfüllt wird, wird die Funktion automatisch aufgerufen, wenn das Modul `my-module.js` eine Funktion mit dem Namen `then()` exportiert, als Teil des [Versprechen-Auflösungsprozesses](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#the_resolve_function).

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
> Exportieren Sie keine Funktion mit dem Namen `then()` aus einem Modul. Dies führt dazu, dass das Modul sich bei der dynamischen Einfuhr anders verhält als bei der statischen.

Dieses aggressive Caching stellt sicher, dass ein Stück JavaScript-Code niemals mehr als einmal ausgeführt wird, selbst wenn es mehrfach importiert wird. Zukünftige Importe führen nicht einmal zu HTTP-Anfragen oder Dateizugriffen. Wenn Sie ein Modul ohne Neustart der gesamten JavaScript-Umgebung erneut importieren und bewerten müssen, ist ein möglicher Trick, in dem Modulspezifizierer einen eindeutigen Abfrageparameter zu verwenden. Dies funktioniert auch in Nicht-Browser-Laufzeitumgebungen, die URL-Spezifizierer unterstützen.

```js
import("/my-module.js?t=" + Date.now());
```

Beachten Sie, dass dies zu Speicherlecks in einer langfristig laufenden Anwendung führen kann, da die Engine keine Modul-Namespace-Objekte sicher aus dem Speicher entfernen kann. Derzeit gibt es keine Möglichkeit, den Cache von Modul-Namespace-Objekten manuell zu leeren.

Das Caching von Modul-Namespace-Objekten gilt nur für Module, die _erfolgreich_ geladen und verknüpft sind. Ein Modul wird in drei Schritten importiert: Laden (Holung des Moduls), Verknüpfen (meistens Parsen des Moduls) und Auswerten (Ausführen des geparsten Codes). Nur Auswertungsfehler werden zwischengespeichert; wenn ein Modul nicht geladen oder verknüpft werden kann, kann der nächste Import versuchen, das Modul erneut zu laden und zu verknüpfen. Der Browser kann das Ergebnis des Abrufvorgangs zwischenspeichern oder nicht, sollte jedoch den typischen HTTP-Semantiken folgen, sodass das Behandeln solcher Netzwerkausfälle sich nicht von der Handhabung von [`fetch()`](/de/docs/Web/API/Window/fetch)-Ausfällen unterscheiden sollte.

## Beispiele

### Importieren eines Moduls nur für seine Seiteneffekte

```js
(async () => {
  if (somethingIsTrue) {
    // import module for side effects
    await import("/modules/my-module.js");
  }
})();
```

Wenn Ihr Projekt Pakete verwendet, die ESM exportieren, können Sie diese auch nur für Seiteneffekte importieren. Dies führt dazu, dass der Code in der Einstiegspunktdatei des Pakets (und allen importierten Dateien) ausgeführt wird.

### Importieren von Standardwerten

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

### Importieren auf Abruf als Reaktion auf eine Benutzeraktion

Dieses Beispiel zeigt, wie Funktionalität auf eine Seite geladen wird, basierend auf einer Benutzeraktion, in diesem Fall einem Button-Klick, und dann eine Funktion in diesem Modul aufrufen. Dies ist nicht der einzige Weg, um diese Funktionalität zu implementieren. Die `import()`-Funktion unterstützt auch `await`.

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

In Prozessen wie dem serverseitigen Rendering müssen Sie möglicherweise unterschiedliche Logik auf dem Server oder im Browser laden, da sie mit unterschiedlichen globalen Objekten oder Modulen interagieren (zum Beispiel hat Browsercode Zugang zu Web-APIs wie `document` und `navigator`, während Servercode Zugang zum Serversystem-Dateisystem hat). Dies können Sie durch einen bedingten dynamischen Import erreichen.

```js
let myModule;

if (typeof window === "undefined") {
  myModule = await import("module-used-on-server");
} else {
  myModule = await import("module-used-in-browser");
}
```

### Importieren von Modulen mit einem nicht-literalen Spezifizierer

Dynamische Importe erlauben jeden Ausdruck als Modulspezifizierer, nicht notwendigerweise String-Literale.

Hier laden wir 10 Module, `/modules/module-0.js`, `/modules/module-1.js`, etc., gleichzeitig und rufen die `load`-Funktionen auf, die jedes davon exportiert.

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
