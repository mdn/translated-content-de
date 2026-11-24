---
title: import()
slug: Web/JavaScript/Reference/Operators/import
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Die **`import()`**-Syntax, häufig als _dynamischer Import_ bezeichnet, ist ein funktionsähnlicher Ausdruck, mit dem sich ein ECMAScript-Modul asynchron und dynamisch in eine Umgebung [laden](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#loading_the_graph) lässt, die nicht unbedingt eine Modulumgebung ist.

Anders als das [deklarationsbasierte Gegenstück](/de/docs/Web/JavaScript/Reference/Statements/import) werden dynamische Importe nur bei Bedarf ausgewertet und bieten mehr syntaktische Flexibilität.

## Syntax

```js-nolint
import(moduleName)
import(moduleName, options)
```

Der `import()`-Aufruf ist eine Syntax, die einem Funktionsaufruf stark ähnelt. `import` selbst ist jedoch ein Schlüsselwort und keine Funktion. Sie können ihm daher keinen Alias wie `const myImport = import` zuweisen; dies löst einen {{jsxref("SyntaxError")}} aus.

[Abschließende Kommas](/de/docs/Web/JavaScript/Reference/Trailing_commas) sind nur zulässig, wenn die Laufzeitumgebung auch `options` unterstützt. Prüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität).

### Parameter

- `moduleName`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von mindestens 2 (Zuweisung). Sein Wert wird in einen [String](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) umgewandelt, der das zu importierende Modul angibt. Wie der Bezeichner aufgelöst wird, legt die Host-Umgebung fest; dabei wird jedoch immer derselbe Algorithmus wie bei statischen [Importdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/import) verwendet.
- `options` {{optional_inline}}
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von mindestens 2 (Zuweisung). Er wird zu `undefined` oder zu einem Objekt mit Importoptionen ausgewertet. Der folgende Schlüssel wird erkannt:
    - `with`
      - : Die [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with).

### Rückgabewert

Gibt ein Promise zurück, das:

- mit einem [Modul-Namespace-Objekt](#modul-namespace-objekt) erfüllt wird, wenn das referenzierte Modul erfolgreich geladen und [ausgewertet](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#evaluating_modules) wurde. Dieses Objekt enthält alle Exporte aus `moduleName`.
- mit dem ausgelösten Fehler zurückgewiesen wird, wenn die [Umwandlung von `moduleName` in einen String](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) einen Fehler auslöst.
- mit einem von der Host-Umgebung festgelegten Fehler zurückgewiesen wird, wenn das [Abrufen](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#loading_the_graph) des Moduls fehlschlägt (Node verwendet typischerweise `Error`, Browser hingegen `TypeError`). Häufige Ursachen sind:
  - In einem dateisystembasierten Modulsystem (beispielsweise Node.js): Der Zugriff auf das Dateisystem schlägt fehl (Zugriff verweigert, Datei nicht gefunden usw.).
  - In einem webbasierten Modulsystem (beispielsweise Browser): Die Netzwerkanfrage schlägt fehl (keine Internetverbindung, CORS-Problem usw.) oder es tritt ein HTTP-Fehler auf (404, 500 usw.).
- mit dem entsprechenden Fehler, typischerweise einem {{jsxref("SyntaxError")}}, zurückgewiesen wird, wenn das Parsen oder [Verknüpfen](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#linking_modules) fehlschlägt.
- mit dem ausgelösten Fehler zurückgewiesen wird, wenn die Auswertung des referenzierten Moduls oder einer seiner Abhängigkeiten einen Fehler auslöst.

> [!NOTE]
> `import()` löst niemals synchron einen Fehler aus.

## Beschreibung

Die Syntax der Importdeklaration (`import something from "somewhere"`) ist statisch und macht das importierte Modul zu einer Abhängigkeit, die beim Laden des importierenden Moduls unmittelbar geladen wird. Dynamische Importe umgehen die syntaktischen Einschränkungen von Importdeklarationen und ermöglichen es, ein Modul bedingt oder bei Bedarf zu laden. In folgenden Fällen kann ein dynamischer Import sinnvoll sein:

- Wenn ein statischer Import das Laden Ihres Codes erheblich verlangsamt oder den Speicherverbrauch Ihres Programms erhöht und es unwahrscheinlich ist, dass Sie den importierten Code benötigen, oder Sie ihn erst später benötigen.
- Wenn das zu importierende Modul zum Ladezeitpunkt noch nicht existiert.
- Wenn der String des Importbezeichners dynamisch zusammengesetzt werden muss. (Statische Importe unterstützen nur statische Bezeichner.)
- Wenn das importierte Modul Seiteneffekte hat, die nur unter bestimmten Bedingungen auftreten sollen. (Es wird empfohlen, Seiteneffekte in Modulen zu vermeiden, aber bei Modulabhängigkeiten haben Sie darauf nicht immer Einfluss.)
- Wenn Sie sich in einer Umgebung befinden, die keine Modulumgebung ist (beispielsweise `eval` oder eine Skriptdatei).

Verwenden Sie dynamische Importe nur, wenn sie erforderlich sind. Für das Laden anfänglicher Abhängigkeiten ist die statische Form vorzuziehen; außerdem kann sie besser von Werkzeugen zur statischen Analyse und von {{Glossary("Tree_shaking", "Tree Shaking")}} profitieren. Wenn Sie lediglich die Ausführung des geladenen Codes bis zu seiner Verwendung aufschieben möchten, sollten Sie [`import defer`](/de/docs/Web/JavaScript/Reference/Statements/import/defer) in Betracht ziehen.

Wenn Ihre Datei nicht als Modul ausgeführt wird (bei Einbindung in eine HTML-Datei muss das Script-Tag `type="module"` haben), können Sie keine statischen Importdeklarationen verwenden. Die asynchrone Syntax für dynamische Importe steht dagegen sowohl in Skripten als auch in Modulen zur Verfügung. Damit können Sie Module auch in Umgebungen importieren, die keine Modulumgebungen sind, sofern die nachstehenden Einschränkungen für den Ausführungskontext beachtet werden.

Der Parameter `options` ermöglicht verschiedene Arten von Importoptionen, beispielsweise [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with):

```js
import("./data.json", { with: { type: "json" } });
```

Der dynamische Modulimport ist nicht in allen Ausführungskontexten erlaubt.
Beispielsweise kann `import()` im Hauptthread, in einem Shared Worker oder in einem Dedicated Worker verwendet werden. Wird es jedoch innerhalb eines [Service Workers](/de/docs/Web/API/Service_Worker_API) oder eines [Worklets](/de/docs/Web/API/Worklet) aufgerufen, wird sein Promise zurückgewiesen.

„Phasenmodifikatoren“ für `import`-Anweisungen können auch mit dynamischen Importen verwendet werden:

- [`import.defer()`](/de/docs/Web/JavaScript/Reference/Operators/import/defer)
- [`import.source()`](/de/docs/Web/JavaScript/Reference/Operators/import/source)

Jede dieser Syntaxformen gilt als eigener Ausdruckstyp.

### Modul-Namespace-Objekt

Ein _Modul-Namespace-Objekt_ ist ein Objekt, das alle eindeutig zuordenbaren Exporte eines Moduls beschreibt. Die Namen seiner Exporte sind festgelegt, ihre Werte spiegeln jedoch Live-Bindings wider. Es wird bei Bedarf erstellt, möglicherweise bereits während der Verknüpfung, bevor das Modul ausgewertet wird. Es gibt zwei Möglichkeiten, auf das Modul-Namespace-Objekt eines Moduls zuzugreifen: über einen [Namespace-Import](/de/docs/Web/JavaScript/Reference/Statements/import#namespace_import) (`import * as name from moduleName`) oder über den Erfüllungswert eines dynamischen Imports.

Das Modul-Namespace-Objekt ist ein [versiegeltes](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed) Objekt mit einem [`null`-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects). Das bedeutet, dass alle String-Schlüssel des Objekts den Exporten des Moduls entsprechen und es niemals zusätzliche Schlüssel gibt. Alle Schlüssel sind in lexikografischer Reihenfolge [aufzählbar](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) (entsprechend dem Standardverhalten von [`Array.prototype.sort()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description)); der Standardexport ist unter dem Schlüssel `default` verfügbar. Außerdem hat das Modul-Namespace-Objekt eine [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft mit dem Wert `"Module"`, die von {{jsxref("Object.prototype.toString()")}} verwendet wird.

Wenn Sie mit {{jsxref("Object.getOwnPropertyDescriptors()")}} die Deskriptoren der String-Eigenschaften abrufen, sind diese als nicht konfigurierbar und beschreibbar ausgewiesen. Tatsächlich sind sie jedoch schreibgeschützt, da Sie einer Eigenschaft keinen neuen Wert zuweisen können. Dieses Verhalten entspricht der Tatsache, dass statische Importe „[Live-Bindings](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter)“ erzeugen: Das exportierende Modul kann die Werte neu zuweisen, das importierende Modul hingegen nicht. Die Beschreibbarkeit der Eigenschaften spiegelt wider, dass sich die Werte ändern können, denn nicht konfigurierbare und nicht beschreibbare Eigenschaften müssen konstant sein. Beispielsweise können Sie den exportierten Wert einer Variablen neu zuweisen; der neue Wert ist dann im Modul-Namespace-Objekt sichtbar.

Jeder (normalisierte) Modulbezeichner entspricht genau einem Modul-Namespace-Objekt. Daher gilt im Allgemeinen Folgendes:

```js
import * as mod from "/my-module.js";

import("/my-module.js").then((mod2) => {
  console.log(mod === mod2); // true
});
```

Es gibt allerdings einen Sonderfall: Da ein Promise niemals mit einem [Thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) erfüllt wird, wird eine vom Modul `my-module.js` exportierte Funktion namens `then()` beim Erfüllen des Promise des dynamischen Imports automatisch aufgerufen – als Teil des Prozesses zur [Auflösung des Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#the_resolve_function).

```js
// -- my-module.js --
export function then(resolve) {
  console.log("then() called");
  resolve(1);
}
```

```js
// -- main.js --
import * as mod from "/my-module.js";

import("/my-module.js").then((mod2) => {
  // Logs "then() called"
  console.log(mod === mod2); // false
});
```

> [!WARNING]
> Exportieren Sie keine Funktion namens `then()` aus einem Modul. Andernfalls verhält sich das Modul bei einem dynamischen Import anders als bei einem statischen Import.

Dieses konsequente Caching stellt sicher, dass ein JavaScript-Codeabschnitt niemals mehr als einmal ausgeführt wird, selbst wenn er mehrfach importiert wird. Spätere Importe führen – sofern ein früherer Import in derselben Umgebung erfolgreich war – nicht einmal zu HTTP-Anfragen oder Festplattenzugriffen. Wenn Sie ein Modul erneut importieren und auswerten müssen, ohne die gesamte JavaScript-Umgebung neu zu starten, können Sie beispielsweise einen eindeutigen Query-Parameter im Modulbezeichner verwenden. Dies funktioniert auch in Nicht-Browser-Laufzeitumgebungen, die URL-Bezeichner unterstützen.

```js
import(`/my-module.js?t=${Date.now()}`);
```

Beachten Sie, dass dies in einer langlebigen Anwendung zu Speicherlecks führen kann, weil die Engine Modul-Namespace-Objekte nicht sicher durch die Garbage Collection freigeben kann. Derzeit gibt es keine Möglichkeit, den Cache der Modul-Namespace-Objekte manuell zu leeren.

Sie können auch die [Fetch API](/de/docs/Web/API/Fetch_API) verwenden, um den Quellcode eines Moduls als Text abzurufen und das Modul anschließend je nach Modultyp manuell auszuwerten:

- Bei JavaScript-Modulen können Sie den Quellcode in Browsern dynamisch über eine [`blob:`-URL](/de/docs/Web/API/URL/createObjectURL_static) importieren oder ihn in Node.js mit [`vm.Module`](https://nodejs.org/docs/latest/api/vm.html#class-vmmodule) auswerten.
- Bei JSON-Modulen können Sie den Quellcode mit {{jsxref("JSON.parse()")}} parsen.
- Bei CSS-Modulen können Sie ein neues [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt erstellen und es mit dessen [`replace()`](/de/docs/Web/API/CSSStyleSheet/replace)-Methode mit dem Quellcode befüllen.

Semantisch ist dies jedoch nicht dasselbe wie ein dynamischer Import, da Einstellungen des User-Agents wie [Fetch-Destination](/de/docs/Web/API/Request/destination), [CSP](/de/docs/Web/HTTP/Guides/CSP) oder [Modulauflösung](/de/docs/Web/JavaScript/Reference/Operators/import.meta/resolve) möglicherweise nicht korrekt angewendet werden.

Ein Modul wird in drei Schritten importiert: Laden (Abrufen und Parsen des Moduls und seiner Abhängigkeiten), Verknüpfen (Auflösen der Importe und Vorbereiten der Bindings) und Auswerten (Ausführen des geparsten Codes). Fehler bei der Auswertung werden zwischengespeichert. Spätere Importe desselben Moduls geben den Fehler daher weiter, ohne das Modul erneut auszuführen. Die Verknüpfung kann erneut versucht werden; derselbe Graph von JavaScript-Moduldatensätzen führt jedoch zum selben Verknüpfungsfehler.

Ob Fehler beim Laden zwischengespeichert werden, hängt von der Host-Umgebung und der Art des Fehlers ab. In Browsern ist die Modulzuordnung vom HTTP-Cache getrennt. Die [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-a-single-module-script) verlangt, dass fehlgeschlagene Abrufe, einschließlich HTTP-Fehlerantworten, aus der Modulzuordnung entfernt werden, damit ein späterer Import es erneut versuchen kann. Der HTTP-Cache kann dabei weiterhin eine zwischengespeicherte Fehlerantwort liefern. Parsefehler bleiben dagegen in der Modulzuordnung erhalten. Wird dasselbe Modul erneut importiert, wird deshalb kein korrigierter Quellcode abgerufen.

## Beispiele

### Ein Modul nur wegen seiner Seiteneffekte importieren

```js
(async () => {
  if (somethingIsTrue) {
    // import module for side effects
    await import("/modules/my-module.js");
  }
})();
```

Wenn Ihr Projekt Pakete verwendet, die ESM exportieren, können Sie diese auch ausschließlich wegen ihrer Seiteneffekte importieren. Dadurch wird nur der Code in der Einstiegspunktdatei des Pakets (und in allen Dateien, die sie importiert) ausgeführt.

### Standardexporte importieren

Wenn Sie das importierte Modul-Namespace-Objekt destrukturieren, müssen Sie den Schlüssel `default` umbenennen, da `default` ein reserviertes Wort ist.

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

### Bei Bedarf als Reaktion auf eine Benutzeraktion importieren

Dieses Beispiel zeigt, wie Sie abhängig von einer Benutzeraktion – hier einem Klick auf eine Schaltfläche – Funktionalität auf eine Seite laden und anschließend eine Funktion aus dem Modul aufrufen. Dies ist nicht die einzige Möglichkeit, diese Funktionalität umzusetzen. Die `import()`-Funktion unterstützt auch `await`.

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

### Je nach Umgebung unterschiedliche Module importieren

Bei Prozessen wie serverseitigem Rendering müssen Sie möglicherweise auf dem Server und im Browser unterschiedliche Logik laden, weil diese mit unterschiedlichen globalen Objekten oder Modulen interagiert. Beispielsweise hat Browsercode Zugriff auf Web-APIs wie `document` und `navigator`, während serverseitiger Code auf das Dateisystem des Servers zugreifen kann. Dies lässt sich mit einem bedingten dynamischen Import umsetzen.

```js
let myModule;

if (typeof window === "undefined") {
  myModule = await import("module-used-on-server");
} else {
  myModule = await import("module-used-in-browser");
}
```

### Module mit einem Bezeichner importieren, der kein Literal ist

Dynamische Importe erlauben als Modulbezeichner einen beliebigen Ausdruck, nicht nur String-Literale.

Hier laden wir 10 Module – `/modules/module-0.js`, `/modules/module-1.js` usw. – gleichzeitig und rufen die jeweils exportierte `load`-Funktion auf.

```js
Promise.all(
  Array.from({ length: 10 }).map(
    (_, index) => import(`/modules/module-${index}.js`),
  ),
).then((modules) => modules.forEach((module) => module.load()));
```

### Importattribute mit dynamischen Importen verwenden

[Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with) werden als zweiter Parameter der `import()`-Syntax akzeptiert.

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
