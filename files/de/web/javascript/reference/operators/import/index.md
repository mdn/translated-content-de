---
title: import()
slug: Web/JavaScript/Reference/Operators/import
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die **`import()`**-Syntax, oft als _dynamischer Import_ bezeichnet, ist ein funktionsähnlicher Ausdruck, der es ermöglicht, ein ECMAScript-Modul asynchron und dynamisch in eine potenziell Nicht-Modulumgebung zu laden.

Im Gegensatz zum [deklarativen Pendant](/de/docs/Web/JavaScript/Reference/Statements/import) werden dynamische Importe nur bei Bedarf ausgewertet und erlauben eine größere syntaktische Flexibilität.

## Syntax

```js-nolint
import(moduleName)
import(moduleName, options)
```

Der `import()`-Aufruf ist eine Syntax, die einem Funktionsaufruf ähnelt, jedoch ist `import` selbst ein Schlüsselwort und keine Funktion. Sie können es nicht wie `const myImport = import` aliasieren, da dies einen {{jsxref("SyntaxError")}} werfen wird.

[Abschließende Kommata](/de/docs/Web/JavaScript/Reference/Trailing_commas) sind nur erlaubt, wenn die Laufzeit auch `options` unterstützt. Überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität).

### Parameter

- `moduleName`
  - : Das Modul, von dem importiert werden soll. Die Bewertung des Bezeichners ist host-spezifisch, folgt jedoch immer dem gleichen Algorithmus wie bei statischen [Import-Deklarationen](/de/docs/Web/JavaScript/Reference/Statements/import).
- `options`
  - : Ein Objekt, das Import-Optionen enthält. Der folgende Schlüssel wird erkannt:
    - `with`
      - : Die [Import-Attribute](/de/docs/Web/JavaScript/Reference/Statements/import/with).

### Rückgabewert

Gibt ein Promise zurück, das:

- Wenn das referenzierte Modul geladen und erfolgreich ausgewertet wird, zu einem [Modul-Namensraum-Objekt](#modul-namensraum-objekt) erfüllt wird: ein Objekt, das alle Exporte von `moduleName` enthält.
- Wenn die [Konvertierung zu String](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) von `moduleName` einen Fehler wirft, mit diesem Fehler abgelehnt wird.
- Wenn das Abrufen und Laden des Moduls aus irgendeinem Grund fehlschlägt, mit einem implementationsspezifischen Fehler abgelehnt wird (Node verwendet einen generischen `Error`, während alle Browser `TypeError` verwenden). Häufige Ursachen können sein:
  - In einem dateibasierten Modulsystem (zum Beispiel Node.js), wenn der Zugriff auf das Dateisystem fehlschlägt (Zugriff verweigert, Datei nicht gefunden usw.).
  - In einem webbasierten Modulsystem (zum Beispiel Browser), wenn die Netzwerkanforderung fehlschlägt (keine Internetverbindung, CORS-Problem usw.) oder ein HTTP-Fehler auftritt (404, 500 usw.).
- Wenn die Auswertung des referenzierten Moduls einen Fehler wirft, mit diesem Fehler abgelehnt wird.

> [!NOTE]
> `import()` wirft niemals synchron einen Fehler.

## Beschreibung

Die Import-Deklarationssyntax (`import something from "somewhere"`) ist statisch und das importierte Modul wird immer zur Ladezeit ausgewertet. Dynamische Importe ermöglichen es, die syntaktische Starrheit von Import-Deklarationen zu umgehen und ein Modul bedingt oder auf Abruf zu laden. Hier sind einige Gründe, warum Sie einen dynamischen Import verwenden könnten:

- Wenn das statische Importieren das Laden Ihres Codes erheblich verlangsamt oder den Speicherverbrauch Ihres Programms erhöht, und die Wahrscheinlichkeit gering ist, dass Sie den importierten Code benötigen, oder Sie ihn erst zu einem späteren Zeitpunkt benötigen.
- Wenn das Modul, das Sie importieren möchten, zur Ladezeit nicht existiert.
- Wenn der Import-Bezeichner-String dynamisch erstellt werden muss. (Statische Importe unterstützen nur statische Bezeichner.)
- Wenn das importierte Modul Nebenwirkungen hat und Sie diese Nebenwirkungen nur dann haben möchten, wenn eine bestimmte Bedingung erfüllt ist. (Es wird empfohlen, keine Nebenwirkungen in einem Modul zu haben, aber manchmal können Sie dies in Ihren Moduldatenabhängigkeiten nicht kontrollieren.)
- Wenn Sie sich in einer Nicht-Modulumgebung befinden (zum Beispiel `eval` oder eine Skript-Datei).

Verwenden Sie dynamische Importe nur, wenn es notwendig ist. Die statische Form ist vorzuziehen, um initiale Abhängigkeiten zu laden, und kann besser von statischen Analysetools und {{Glossary("Tree_shaking", "Tree Shaking")}} profitieren.

Wenn Ihre Datei nicht als Modul ausgeführt wird (wenn sie in einer HTML-Datei referenziert wird, muss das Skripttag `type="module"` haben), können Sie keine statischen Import-Deklarationen verwenden. Andererseits ist die asynchrone dynamische Import-Syntax immer verfügbar, sodass Sie Module in Nicht-Modulumgebungen importieren können.

Der `options`-Parameter ermöglicht verschiedene Arten von Importoptionen. Zum Beispiel [Import-Attribute](/de/docs/Web/JavaScript/Reference/Statements/import/with):

```js
import("./data.json", { with: { type: "json" } });
```

Dynamischer Modulimport ist nicht in allen Ausführungskontexten erlaubt. Zum Beispiel kann `import()` im Haupt-Thread, einem geteilten Worker oder einem dedizierten Worker verwendet werden, wird jedoch einen Fehler werfen, wenn er innerhalb eines [Service Worker](/de/docs/Web/API/Service_Worker_API) oder eines [Worklet](/de/docs/Web/API/Worklet) aufgerufen wird.

### Modul-Namensraum-Objekt

Ein _Modul-Namensraum-Objekt_ ist ein Objekt, das alle Exporte aus einem Modul beschreibt. Es ist ein statisches Objekt, das erstellt wird, wenn das Modul ausgewertet wird. Es gibt zwei Möglichkeiten, auf das Modul-Namensraum-Objekt eines Moduls zuzugreifen: durch einen [Namensraum-Import](/de/docs/Web/JavaScript/Reference/Statements/import#namespace_import) (`import * as name from moduleName`) oder durch den Erfüllungswert eines dynamischen Imports.

Das Modul-Namensraum-Objekt ist ein [versiegeltes](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed) Objekt mit [`null`-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects). Das bedeutet, alle String-Schlüssel des Objekts entsprechen den Exporten des Moduls und es gibt niemals zusätzliche Schlüssel. Alle Schlüssel sind [durchlässig](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) in lexikografischer Reihenfolge (d.h. das Standardverhalten von [`Array.prototype.sort()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description)), wobei der Standardexport als Schlüssel `default` verfügbar ist. Zusätzlich hat das Modul-Namensraum-Objekt eine [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft mit dem Wert `"Module"`, die in {{jsxref("Object.prototype.toString()")}} verwendet wird.

Die String-Eigenschaften sind nicht konfigurierbar und beschreibbar, wenn Sie {{jsxref("Object.getOwnPropertyDescriptors()")}} verwenden, um ihre Deskriptoren zu erhalten. Sie sind jedoch effektiv schreibgeschützt, da Sie einer Eigenschaft keinen neuen Wert zuweisen können. Dieses Verhalten spiegelt die Tatsache wider, dass statische Importe "[Live-Bindungen](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter)" erstellen — die Werte können vom Modul, das sie exportiert, neu zugewiesen werden, aber nicht von dem Modul, das sie importiert. Die Beschreibbarkeit der Eigenschaften spiegelt die Möglichkeit wider, dass sich die Werte ändern, da nicht konfigurierbare und nicht schreibbare Eigenschaften konstant sein müssen. Zum Beispiel können Sie den exportierten Wert einer Variablen neu zuweisen, und der neue Wert kann im Modul-Namensraum-Objekt beobachtet werden.

Jeder (normalisierte) Modulbezeichner entspricht einem einzigartigen Modul-Namensraum-Objekt, daher ist Folgendes im Allgemeinen wahr:

```js
import * as mod from "/my-module.js";

import("/my-module.js").then((mod2) => {
  console.log(mod === mod2); // true
});
```

Außer in einem kuriosen Fall: Da ein Promise nie zu einem [Thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) erfüllt, wird die Funktion `then()`, die aus dem Modul `my-module.js` exportiert wird, automatisch aufgerufen, wenn das Promise des dynamischen Imports erfüllt ist, als Teil des [Promise-Auflösungs](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#the_resolve_function)prozesses.

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
> Exportieren Sie keine Funktion namens `then()` aus einem Modul. Dies wird dazu führen, dass das Modul unterschiedlich verhält, wenn es dynamisch importiert wird, im Vergleich zu einem statischen Import.

Dieses aggressive Caching stellt sicher, dass ein Stück JavaScript-Code nie mehr als einmal ausgeführt wird, selbst wenn es mehrfach importiert wird. Zukünftige Importe führen nicht einmal zu HTTP-Anfragen oder Festplattenzugriffen. Wenn Sie ein Modul neu importieren und neu auswerten müssen, ohne die gesamte JavaScript-Umgebung neu zu starten, könnten Sie einen einzigartigen Query-Parameter im Modulbezeichner verwenden. Dies funktioniert auch in Nicht-Browser-Laufzeitumgebungen, die URL-Bezeichner unterstützen.

```js
import(`/my-module.js?t=${Date.now()}`);
```

Beachten Sie, dass dies in einer lang laufenden Anwendung zu Speicherlecks führen kann, da die Engine keine Modul-Namensraum-Objekte sicher garbage-colleten kann. Derzeit gibt es keine Möglichkeit, den Cache von Modul-Namensraum-Objekten manuell zu leeren.

Das Caching von Modul-Namensraum-Objekten gilt nur für Module, die _erfolgreich_ geladen und verbunden sind. Ein Modul wird in drei Schritten importiert: Laden (Abrufen des Moduls), Verbinden (meistens Parsen des Moduls) und Auswerten (Ausführen des geparsten Codes). Nur Auswertungsfehler werden zwischengespeichert; wenn ein Modul nicht geladen oder verbunden werden kann, kann der nächste Import versuchen, das Modul erneut zu laden und zu verbinden. Der Browser kann das Ergebnis der Abrufoperation zwischenspeichern oder nicht, sollte aber den typischen HTTP-Semantiken folgen, sodass das Handling solcher Netzwerkausfälle sich nicht vom Handling von [`fetch()`](/de/docs/Web/API/Window/fetch)-Ausfällen unterscheiden sollte.

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

Wenn Ihr Projekt Pakete verwendet, die ESM exportieren, können Sie diese auch nur für Nebeneffekte importieren. Dies wird den Code in der Package-Entry-Point-Datei (und allen von ihm importierten Dateien) nur ausführen.

### Standardimporte

Wenn Sie das importierte Modul-Namensraum-Objekt destrukturieren, müssen Sie den `default`-Schlüssel umbenennen, da `default` ein reserviertes Wort ist.

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

### Import bei Bedarf als Reaktion auf Benutzeraktionen

In diesem Beispiel wird gezeigt, wie Funktionalität basierend auf einer Benutzeraktion, in diesem Fall einem Button-Klick, auf einer Seite geladen und eine Funktion innerhalb dieses Moduls aufgerufen wird. Dies ist nicht die einzige Möglichkeit, diese Funktionalität zu implementieren. Die `import()`-Funktion unterstützt auch `await`.

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

### Module basierend auf der Umgebung importieren

Bei Prozessen wie der serverseitigen Darstellung müssen Sie möglicherweise unterschiedliche Logik auf dem Server oder im Browser laden, weil sie mit verschiedenen globalen Objekten oder Modulen interagieren (zum Beispiel hat Browser-Code Zugriff auf Web-APIs wie `document` und `navigator`, während Server-Code Zugriff auf das Dateisystem des Servers hat). Dies kann mit einem bedingten dynamischen Import erreicht werden.

```js
let myModule;

if (typeof window === "undefined") {
  myModule = await import("module-used-on-server");
} else {
  myModule = await import("module-used-in-browser");
}
```

### Module mit einem nicht literalen Bezeichner importieren

Dynamische Importe ermöglichen jeden Ausdruck als Modulbezeichner, nicht notwendigerweise String-Literale.

Hier laden wir 10 Module, `/modules/module-0.js`, `/modules/module-1.js` usw. gleichzeitig, und rufen die `load`-Funktionen auf, die jedes von ihnen exportiert.

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
