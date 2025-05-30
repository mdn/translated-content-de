---
title: import()
slug: Web/JavaScript/Reference/Operators/import
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{jsSidebar("Operators")}}

Die **`import()`**-Syntax, oft als _dynamischer Import_ bezeichnet, ist ein funktionsähnlicher Ausdruck, der das asynchrone und dynamische Laden eines ECMAScript-Moduls in eine möglicherweise nicht-moderne Umgebung ermöglicht.

Im Gegensatz zum [deklarativen Pendant](/de/docs/Web/JavaScript/Reference/Statements/import) werden dynamische Importe nur bei Bedarf ausgewertet und bieten größere syntaktische Flexibilität.

## Syntax

```js-nolint
import(moduleName)
import(moduleName, options)
```

Der `import()`-Aufruf ähnelt stark einem Funktionsaufruf, aber `import` selbst ist ein Schlüsselwort, keine Funktion. Sie können es nicht wie `const myImport = import` aliasieren, was einen {{jsxref("SyntaxError")}} auslöst.

[Abschließende Kommata](/de/docs/Web/JavaScript/Reference/Trailing_commas) sind nur erlaubt, wenn die Laufzeit auch `options` unterstützt. Überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität).

### Parameter

- `moduleName`
  - : Das Modul, aus dem importiert werden soll. Die Auswertung des Modulspezifizierers ist host-spezifiziert, folgt jedoch immer demselben Algorithmus wie die statischen [Import-Deklarationen](/de/docs/Web/JavaScript/Reference/Statements/import).
- `options`
  - : Ein Objekt, das Importoptionen enthält. Der folgende Schlüssel wird erkannt:
    - `with`
      - : Die [Import-Attribute](/de/docs/Web/JavaScript/Reference/Statements/import/with).

### Rückgabewert

Gibt ein Promise zurück, das:

- Wenn das referenzierte Modul erfolgreich geladen und ausgewertet wird, wird es zu einem [Modul-Namensraum-Objekt](#modul-namensraum-objekt) erfüllt: ein Objekt, das alle Exporte von `moduleName` enthält.
- Wenn die [Umwandlung in einen String](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) von `moduleName` fehlschlägt, wird mit dem aufgetretenen Fehler abgelehnt.
- Wenn das Modul-Laden aus irgendeinem Grund fehlschlägt, wird mit einem implementationsdefinierten Fehler abgelehnt (Node verwendet einen generischen `Error`, während alle Browser `TypeError` verwenden). Häufige Ursachen können sein:
  - In einem dateibasierten Modulsystem (wie Node.js), wenn der Zugriff auf das Dateisystem fehlschlägt (Berechtigung verweigert, Datei nicht gefunden, etc.).
  - In einem webbasierten Modulsystem (wie Browser), wenn die Netzwerkanfrage fehlschlägt (nicht mit dem Internet verbunden, CORS-Problem, etc.) oder ein HTTP-Fehler auftritt (404, 500, etc.).
- Wenn die Auswertung des referenzierten Moduls fehlschlägt, wird mit dem aufgetretenen Fehler abgelehnt.

> **Note:** `import()` wirft niemals synchron einen Fehler.

## Beschreibung

Die Import-Deklarationssyntax (`import something from "somewhere"`) ist statisch und führt immer dazu, dass das importierte Modul zur Ladezeit ausgewertet wird. Dynamische Importe ermöglichen es, die syntaktische Strenge von Import-Deklarationen zu umgehen und ein Modul bedingt oder bei Bedarf zu laden. Hier sind einige Gründe, warum Sie möglicherweise einen dynamischen Import verwenden müssen:

- Wenn das statische Importieren das Laden Ihres Codes erheblich verlangsamt oder den Speicherverbrauch Ihres Programms erhöht, und es unwahrscheinlich ist, dass Sie den zu ladenden Code benötigen, oder Sie ihn erst später benötigen.
- Wenn das zu importierende Modul zur Ladezeit nicht existiert.
- Wenn der Import-Spezifizierer-String dynamisch konstruiert werden muss. (Statischer Import unterstützt nur statische Spezifizierer.)
- Wenn das zu importierende Modul Nebeneffekte hat und Sie diese Nebeneffekte nicht wünschen, es sei denn, eine Bedingung trifft zu. (Es wird empfohlen, keine Nebeneffekte in einem Modul zu haben, aber manchmal können Sie dies in Ihren Modulabhängigkeiten nicht steuern.)
- Wenn Sie sich in einer nicht-modularen Umgebung befinden (zum Beispiel `eval` oder eine Skriptdatei).

Verwenden Sie dynamische Importe nur, wenn es notwendig ist. Die statische Form ist vorzuziehen, um anfängliche Abhängigkeiten zu laden und kann mehr von statischen Analysetools und {{Glossary("Tree_shaking", "tree shaking")}} profitieren.

Wenn Ihre Datei nicht als Modul ausgeführt wird (wenn sie in einer HTML-Datei referenziert wird, muss das Skript-Tag `type="module"` haben), können Sie keine statischen Import-Deklarationen verwenden. Andererseits ist die asynchrone dynamische Import-Syntax immer verfügbar, sodass Sie Module in nicht-modulare Umgebungen importieren können.

Der `options`-Parameter ermöglicht verschiedene Arten von Importoptionen. Zum Beispiel, [Import-Attribute](/de/docs/Web/JavaScript/Reference/Statements/import/with):

```js
import("./data.json", { with: { type: "json" } });
```

Der dynamische Modulimport ist nicht in allen Ausführungskontexten erlaubt. Zum Beispiel kann `import()` im Haupt-Thread, in einem Shared Worker oder einem dedizierten Worker verwendet werden, wirft jedoch einen Fehler, wenn es innerhalb eines [Service Workers](/de/docs/Web/API/Service_Worker_API) oder eines [Worklets](/de/docs/Web/API/Worklet) aufgerufen wird.

### Modul-Namensraum-Objekt

Ein _Modul-Namensraum-Objekt_ ist ein Objekt, das alle Exporte eines Moduls beschreibt. Es ist ein statisches Objekt, das erstellt wird, wenn das Modul ausgewertet wird. Es gibt zwei Möglichkeiten, auf das Modul-Namensraum-Objekt eines Moduls zuzugreifen: durch einen [Namensraum-Import](/de/docs/Web/JavaScript/Reference/Statements/import#namespace_import) (`import * as name from moduleName`) oder durch den Erfüllungswert eines dynamischen Imports.

Das Modul-Namensraum-Objekt ist ein [versiegeltes](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed) Objekt mit [`null` prototype](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects). Das bedeutet, alle Schlüssel des Objekts entsprechen den Exporten des Moduls und es gibt keine zusätzlichen Schlüssel. Alle Schlüssel sind [enumerable](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) in lexikographischer Reihenfolge (d.h. das Standardverhalten von [`Array.prototype.sort()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description)), wobei der Standardexport als Schlüssel mit dem Namen `default` verfügbar ist. Darüber hinaus hat das Modul-Namensraum-Objekt eine [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft mit dem Wert `"Module"`, die in {{jsxref("Object.prototype.toString()")}} verwendet wird.

Die Zeichenfolgeneigenschaften sind nicht konfigurierbar und schreibbar, wenn Sie {{jsxref("Object.getOwnPropertyDescriptors()")}} verwenden, um ihre Deskriptoren zu erhalten. Sie sind jedoch effektiv schreibgeschützt, da Sie einer Eigenschaft keinen neuen Wert zuweisen können. Dieses Verhalten spiegelt die Tatsache wider, dass statische Importe "[lebendige Bindungen](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter)" erstellen — die Werte können nur vom Modul, das sie exportiert, neu zugewiesen werden, jedoch nicht vom Modul, das sie importiert. Die Schreibbarkeit der Eigenschaften spiegelt die Möglichkeit wider, dass sich die Werte ändern, da nicht konfigurierbare und nicht schreibbare Eigenschaften konstant sein müssen. Beispielsweise können Sie den exportierten Wert einer Variablen neu zuweisen, und der neue Wert kann im Modul-Namensraum-Objekt beobachtet werden.

Jeder (normalisierte) Modulspezifizierer entspricht einem eindeutigen Modul-Namensraum-Objekt, daher ist Folgendes generell wahr:

```js
import * as mod from "/my-module.js";

import("/my-module.js").then((mod2) => {
  console.log(mod === mod2); // true
});
```

Außer in einem kuriosen Fall: Da ein Promise niemals zu einem [thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) erfüllt wird, wird die Funktion `then()`, wenn das `my-module.js`-Modul diese exportiert, automatisch aufgerufen, wenn das Promise des dynamischen Imports erfüllt wird, als Teil des [Promise-Resolution](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#the_resolve_function)-Prozesses.

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
> Exportieren Sie keine Funktion mit dem Namen `then()` aus einem Modul. Dies wird dazu führen, dass das Modul sich bei dynamischem Import anders verhält als bei statischem Import.

Dieses aggressive Caching sorgt dafür, dass ein Stück JavaScript-Code niemals mehr als einmal ausgeführt wird, selbst wenn es mehrfach importiert wird. Zukünftige Importe führen nicht einmal zu HTTP-Anfragen oder Festplattenzugriffen. Wenn Sie ein Modul ohne Neustart der gesamten JavaScript-Umgebung neu importieren und neu bewerten müssen, ist ein möglicher Trick, in nicht-browserbasierten Laufzeiten, die URL-Spezifizierer unterstützen, einen eindeutigen Abfrageparameter im Modulspezifizierer zu verwenden.

```js
import(`/my-module.js?t=${Date.now()}`);
```

Beachten Sie, dass dies in einer lang laufenden Anwendung zu Speicherlecks führen kann, da die Engine keine Modul-Namensraum-Objekte sicher garbage-collecten kann. Derzeit gibt es keine Möglichkeit, den Cache von Modul-Namensraum-Objekten manuell zu leeren.

Das Modul-Namensraum-Objekt-Caching gilt nur für Module, die _erfolgreich_ geladen und verknüpft sind. Ein Modul wird in drei Schritten importiert: Laden (Abrufen des Moduls), Verknüpfen (meist das Parsen des Moduls) und Auswerten (Ausführen des geparsten Codes). Nur Auswertungsfehler werden zwischengespeichert; wenn das Laden oder Verknüpfen eines Moduls fehlschlägt, kann der nächste Import versuchen, das Modul erneut zu laden und zu verknüpfen. Der Browser kann das Ergebnis der Abrufoperation zwischenspeichern oder nicht, aber er sollte den typischen HTTP-Semantiken folgen, daher sollte die Handhabung solcher Netzwerkfehler sich nicht von der Handhabung von [`fetch()`](/de/docs/Web/API/Window/fetch)-Fehlern unterscheiden.

## Beispiele

### Ein Modul nur wegen seiner Nebeneffekte importieren

```js
(async () => {
  if (somethingIsTrue) {
    // import module for side effects
    await import("/modules/my-module.js");
  }
})();
```

Wenn Ihr Projekt Pakete verwendet, die ESM exportieren, können Sie sie auch nur für Nebeneffekte importieren. Dies führt dazu, dass der Code im Entry-Point-File des Pakets (und alle Dateien, die es importiert) ausgeführt werden.

### Standardimporte

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

### Importieren nach Bedarf als Reaktion auf Benutzeraktionen

Dieses Beispiel zeigt, wie Funktionalität auf einer Seite basierend auf einer Benutzeraktion geladen werden kann, in diesem Fall ein Button-Klick, und dann eine Funktion innerhalb dieses Moduls aufgerufen werden kann. Dies ist nicht die einzige Möglichkeit, diese Funktionalität zu implementieren. Die `import()`-Funktion unterstützt auch `await`.

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

In Prozessen wie dem serverseitigen Rendering müssen Sie möglicherweise unterschiedliche Logik auf dem Server oder im Browser laden, da sie mit unterschiedlichen Globalen oder Modulen interagieren (zum Beispiel hat Browser-Code Zugriff auf Web-APIs wie `document` und `navigator`, während Server-Code Zugriff auf das Server-Dateisystem hat). Sie können dies über einen bedingten dynamischen Import tun.

```js
let myModule;

if (typeof window === "undefined") {
  myModule = await import("module-used-on-server");
} else {
  myModule = await import("module-used-in-browser");
}
```

### Importieren von Modulen mit einem nicht-literalen Spezifizierer

Dynamische Importe ermöglichen jeden Ausdruck als Modulspezifizierer, nicht notwendigerweise Zeichenfolgenliterale.

Hier laden wir 10 Module, `/modules/module-0.js`, `/modules/module-1.js`, etc., gleichzeitig und rufen die `load`-Funktionen auf, die jedes exportiert.

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
