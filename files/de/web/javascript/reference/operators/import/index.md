---
title: import()
slug: Web/JavaScript/Reference/Operators/import
l10n:
  sourceCommit: 3d3046d13482ca979db8b98b6eb55927b9b3a51f
---

Die **`import()`**-Syntax, oft _dynamischer Import_ genannt, ist ein ausdrucksähnlicher Aufruf, der es erlaubt, ein ECMAScript-Modul asynchron und dynamisch in eine potenziell nicht-modulare Umgebung zu laden.

Im Gegensatz zum [deklarativen Gegenstück](/de/docs/Web/JavaScript/Reference/Statements/import) werden dynamische Importe nur bei Bedarf ausgewertet und ermöglichen eine größere syntaktische Flexibilität.

## Syntax

```js-nolint
import(moduleName)
import(moduleName, options)
```

Der `import()`-Aufruf sieht einem Funktionsaufruf ähnlich, aber `import` selbst ist ein Schlüsselwort, keine Funktion. Sie können es nicht wie `const myImport = import` aliasieren, da dies einen {{jsxref("SyntaxError")}} auslösen würde.

[Abschließende Kommas](/de/docs/Web/JavaScript/Reference/Trailing_commas) sind nur erlaubt, wenn die Laufzeit auch `options` unterstützt. Prüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität).

### Parameter

- `moduleName`
  - : Das Modul, aus dem importiert werden soll. Die Auswertung des Spezifikators ist host-spezifiziert, folgt jedoch immer demselben Algorithmus wie bei statischen [Import-Erklärungen](/de/docs/Web/JavaScript/Reference/Statements/import).
- `options`
  - : Ein Objekt, das Importoptionen enthält. Der folgende Schlüssel wird erkannt:
    - `with`
      - : Die [import attributes](/de/docs/Web/JavaScript/Reference/Statements/import/with).

### Rückgabewert

Gibt ein Promise zurück, das:

- Falls das referenzierte Modul erfolgreich geladen und ausgewertet wird, zu einem [Modul-Namensraum-Objekt](#modul-namensraum-objekt) erfüllt: ein Objekt, das alle Exporte von `moduleName` enthält.
- Wenn die [Umwandlung in einen String](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) von `moduleName` fehlschlägt, das Promise mit dem geworfenen Fehler ablehnt.
- Wenn das Laden des Moduls aus irgendeinem Grund fehlschlägt, mit einem implementationsdefinierten Fehler ablehnt (Node verwendet einen generischen `Error`, während alle Browser `TypeError` verwenden). Häufige Ursachen können sein:
  - In einem dateibasierten Modulsystem (zum Beispiel Node.js), wenn der Zugriff auf das Dateisystem fehlschlägt (Zugriff verweigert, Datei nicht gefunden, usw.).
  - In einem web-basierten Modulsystem (zum Beispiel Browser), wenn die Netzwerkanfrage fehlschlägt (nicht mit dem Internet verbunden, CORS-Problem usw.) oder ein HTTP-Fehler auftritt (404, 500, usw.).
- Wenn die Auswertung des referenzierten Moduls fehlschlägt, mit dem geworfenen Fehler ablehnt.

> [!NOTE]
> `import()` wirft nie synchron einen Fehler.

## Beschreibung

Die Importdeklaration-Syntax (`import something from "somewhere"`) ist statisch und führt immer dazu, dass das importierte Modul zur Ladezeit ausgewertet wird. Dynamische Importe erlauben es, die syntaktische Starrheit von Importerklärungen zu umgehen und ein Modul bedingt oder auf Abruf zu laden. Folgendes sind einige Gründe, warum Sie möglicherweise dynamische Importe verwenden müssen:

- Wenn das statische Importieren das Laden Ihres Codes signifikant verlangsamt oder den Speicherverbrauch Ihres Programms erhöht und die Wahrscheinlichkeit gering ist, dass Sie den importierten Code benötigen oder erst zu einem späteren Zeitpunkt benötigen.
- Wenn das Modul, das Sie importieren möchten, zur Ladezeit nicht existiert.
- Wenn der Import-Spezifikator-String dynamisch konstruiert werden muss. (Statischer Import unterstützt nur statische Spezifikatoren.)
- Wenn das importierte Modul Nebeneffekte hat, die Sie nur dann haben möchten, wenn eine bestimmte Bedingung erfüllt ist. (Es wird empfohlen, keine Nebeneffekte in einem Modul zu haben, aber manchmal kann man dies in seinen Modulabhängigkeiten nicht kontrollieren.)
- Wenn Sie sich in einer nicht modularen Umgebung befinden (zum Beispiel `eval` oder eine Scriptdatei).

Verwenden Sie den dynamischen Import nur, wenn es notwendig ist. Die statische Form ist vorzuziehen, um anfängliche Abhängigkeiten zu laden, und kann mehr von statischen Analysetools und {{Glossary("Tree_shaking", "tree shaking")}} profitieren.

Wenn Ihre Datei nicht als Modul ausgeführt wird (wenn sie in einer HTML-Datei referenziert ist, muss das Skript-Tag `type="module"` haben), können Sie keine statischen Importerklärungen verwenden. Andererseits ist die asynchrone dynamische Import-Syntax immer verfügbar, sodass Sie Module in nicht modulare Umgebungen importieren können.

Der Parameter `options` ermöglicht verschiedene Arten von Importoptionen. Zum Beispiel [Import Attribute](/de/docs/Web/JavaScript/Reference/Statements/import/with):

```js
import("./data.json", { with: { type: "json" } });
```

Dynamischer Modulimport ist nicht in allen Ausführungskontexten erlaubt. Zum Beispiel kann `import()` im Haupt-Thread, einem Shared Worker oder einem dedizierten Worker verwendet werden, aber es wird einen Fehler werfen, wenn es innerhalb eines [Service-Workers](/de/docs/Web/API/Service_Worker_API) oder eines [Worklets](/de/docs/Web/API/Worklet) aufgerufen wird.

### Modul-Namensraum-Objekt

Ein _Modul-Namensraum-Objekt_ ist ein Objekt, das alle Exporte aus einem Modul beschreibt. Es ist ein statisches Objekt, das erstellt wird, wenn das Modul ausgewertet wird. Es gibt zwei Möglichkeiten, auf das Modul-Namensraum-Objekt eines Moduls zuzugreifen: durch einen [Namespace-Import](/de/docs/Web/JavaScript/Reference/Statements/import#namespace_import) (`import * as name from moduleName`), oder durch den Erfüllungswert eines dynamischen Imports.

Das Modul-Namensraum-Objekt ist ein [versiegeltes](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed) Objekt mit einem [null-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects). Dies bedeutet, dass alle String-Schlüssel des Objekts den Exporten des Moduls entsprechen und es nie zusätzliche Schlüssel gibt. Alle Schlüssel sind [enumerierbar](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) in lexikografischer Reihenfolge (d.h. das Standardverhalten von [`Array.prototype.sort()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description)), wobei der Standardexport als ein Schlüssel namens `default` verfügbar ist. Zusätzlich hat das Modul-Namensraum-Objekt eine [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft mit dem Wert `"Module"`, verwendet in {{jsxref("Object.prototype.toString()")}}.

Die String-Eigenschaften sind nicht konfigurierbar und schreibbar, wenn Sie {{jsxref("Object.getOwnPropertyDescriptors()")}} verwenden, um ihre Deskriptoren abzurufen. Sie sind jedoch effektiv schreibgeschützt, da Sie eine Eigenschaft nicht auf einen neuen Wert zuweisen können. Dieses Verhalten spiegelt die Tatsache wider, dass statische Importe "[lebendige Bindungen](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter)" erstellen — die Werte können vom Modul, das sie exportiert, neu zugewiesen werden, aber nicht von dem Modul, das sie importiert. Die Schreibbarkeit der Eigenschaften spiegelt die Möglichkeit wider, dass sich die Werte ändern, da nicht konfigurierbare und nicht schreibbare Eigenschaften konstant sein müssen. Zum Beispiel können Sie den exportierten Wert einer Variablen neu zuweisen, und der neue Wert kann im Modul-Namensraum-Objekt beobachtet werden.

Jeder (normierte) Modulspezifikator entspricht einem einzigartigen Modul-Namensraum-Objekt, sodass Folgendes allgemein zutrifft:

```js
import * as mod from "/my-module.js";

import("/my-module.js").then((mod2) => {
  console.log(mod === mod2); // true
});
```

Mit Ausnahme eines kuriosen Falls: Da ein Promise sich niemals in eine [thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) auflöst, wird, wenn das Modul `my-module.js` eine Funktion namens `then()` exportiert, diese Funktion automatisch aufgerufen, wenn das Promise des dynamischen Imports erfüllt wird, als Teil des [Promise-Auflösungsprozesses](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#the_resolve_function).

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
> Exportieren Sie keine Funktion namens `then()` aus einem Modul. Dies wird dazu führen, dass sich das Modul beim dynamischen Import anders verhält als beim statischen Import.

Diese aggressive Zwischenspeicherung stellt sicher, dass ein Stück JavaScript-Code nie mehr als einmal ausgeführt wird, selbst wenn es mehrfach importiert wird. Zukünftige Importe führen nicht einmal zu HTTP-Anfragen oder Dateizugriffen. Wenn Sie ein Modul erneut importieren und auswerten müssen, ohne die gesamte JavaScript-Umgebung neu zu starten, ist ein möglicher Trick, einen einzigartigen Abfrageparameter im Modulspezifikator zu verwenden. Dies funktioniert auch in nicht-browserbasierten Laufzeiten, die URL-Spezifikatoren unterstützen.

```js
import(`/my-module.js?t=${Date.now()}`);
```

Beachten Sie, dass dies in einer langfristig laufenden Anwendung zu Speicherlecks führen kann, da die Engine keine Modul-Namensraum-Objekte sicher entfernt. Derzeit gibt es keine Möglichkeit, den Cache von Modul-Namensraum-Objekten manuell zu leeren.

Sie können auch die [Fetch API](/de/docs/Web/API/Fetch_API) verwenden, um den Modulquellcode als Text abzurufen, und dann das Modul manuell entsprechend dem Modultyp auszuwerten:

- Für JavaScript-Module können Sie den Quellcode dynamisch als [`blob:` URL](/de/docs/Web/API/URL/createObjectURL_static) in Browsern importieren oder [`vm.Module`](/de/docs/Web/Node.js/vm/Module) verwenden, um ihn in Node.js auszuwerten.
- Für JSON-Module können Sie den Quellcode mit {{jsxref("JSON.parse()")}} analysieren.
- Für CSS-Module können Sie ein neues [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt erstellen und seine [`replace()`](/de/docs/Web/API/CSSStyleSheet/replace)-Methode verwenden, um es mit dem Quellcode zu füllen.

Dies ist jedoch semantisch nicht dasselbe wie ein dynamischer Import, da benutzerspezifische Einstellungen wie [fetch-Ziel](/de/docs/Web/API/Request/destination), [CSP](/de/docs/Web/HTTP/Guides/CSP) oder [Modulauflösung](/de/docs/Web/JavaScript/Reference/Operators/import.meta/resolve) möglicherweise nicht korrekt angewendet werden.

Die Zwischenspeicherung von Modul-Namensraum-Objekten gilt nur für Module, die erfolgreich geladen und verlinkt werden. Ein Modul wird in drei Schritten importiert: Laden (holen des Moduls), Verlinken (größtenteils, parsen des Moduls) und Auswerten (ausführen des geparsten Codes). Nur Auswertungsfehler werden zwischengespeichert; wenn ein Modul nicht geladen oder verlinkt werden kann, kann der nächste Import versuchen, das Modul erneut zu laden und zu verlinken. Browser können das Ergebnis der Fetch-Operation zwischenspeichern oder auch nicht, aber sie sollten den typischen HTTP-Semantiken folgen, sodass die Handhabung solcher Netzwerkfehler nicht anders sein sollte als die Handhabung von [`fetch()`](/de/docs/Web/API/Window/fetch) Fehlern.

## Beispiele

### Modul nur wegen seiner Nebeneffekte importieren

```js
(async () => {
  if (somethingIsTrue) {
    // import module for side effects
    await import("/modules/my-module.js");
  }
})();
```

Wenn Ihr Projekt Pakete verwendet, die ESM exportieren, können Sie diese auch nur aufgrund ihrer Nebeneffekte importieren. Dies führt dazu, dass der Code in der Einstiegspunktdatei des Pakets (und alle Dateien, die es importiert) nur ausgeführt wird.

### Standard-Exporte importieren

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

### On-Demand-Import in Reaktion auf Benutzeraktionen

Dieses Beispiel zeigt, wie man Funktionalität basierend auf einer Benutzeraktion, in diesem Fall einem Buttonklick, auf eine Seite lädt und dann eine Funktion innerhalb dieses Moduls aufruft. Dies ist nicht der einzige Weg, um diese Funktionalität zu implementieren. Die `import()`-Funktion unterstützt auch `await`.

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

In Prozessen wie dem serverseitigen Rendering müssen Sie möglicherweise unterschiedliche Logik auf dem Server oder im Browser laden, da sie mit verschiedenen Globalen oder Modulen interagieren (zum Beispiel hat Browser-Code Zugriff auf Web-APIs wie `document` und `navigator`, während Server-Code Zugriff auf das Dateisystem des Servers hat). Sie können dies durch einen bedingten dynamischen Import tun.

```js
let myModule;

if (typeof window === "undefined") {
  myModule = await import("module-used-on-server");
} else {
  myModule = await import("module-used-in-browser");
}
```

### Import von Modulen mit einem nicht-literalen Spezifikator

Dynamische Importe erlauben jeden Ausdruck als Modulspezifikator, nicht notwendigerweise String-Literale.

Hier laden wir 10 Module, `/modules/module-0.js`, `/modules/module-1.js` usw., gleichzeitig und rufen die `load`-Funktionen auf, die jedes Modul exportiert.

```js
Promise.all(
  Array.from({ length: 10 }).map(
    (_, index) => import(`/modules/module-${index}.js`),
  ),
).then((modules) => modules.forEach((module) => module.load()));
```

### Verwendung von Import-Attributen mit dynamischem Import

[Import-Attribute](/de/docs/Web/JavaScript/Reference/Statements/import/with) werden als zweiter Parameter der `import()`-Syntax akzeptiert.

```js
const data = await import("./data.json", {
  with: { type: "json" },
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)
