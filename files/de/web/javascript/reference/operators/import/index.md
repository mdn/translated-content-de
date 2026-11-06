---
title: import()
slug: Web/JavaScript/Reference/Operators/import
l10n:
  sourceCommit: 696a0436bb4dd20eb4d30ac3f1d4fc5140d1eee9
---

Die **`import()`**-Syntax, häufig als _dynamischer Import_ bezeichnet, ist ein funktionsähnlicher Ausdruck, mit dem sich ein ECMAScript-Modul asynchron und dynamisch in eine Umgebung [laden](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#loading_the_graph) lässt, die möglicherweise keine Modulumgebung ist.

Anders als das [deklarationsbasierte Gegenstück](/de/docs/Web/JavaScript/Reference/Statements/import) werden dynamische Importe nur bei Bedarf ausgewertet und bieten größere syntaktische Flexibilität.

## Syntax

```js-nolint
import(moduleName)
import(moduleName, options)
```

Der `import()`-Aufruf ist eine Syntax, die einem Funktionsaufruf stark ähnelt. `import` selbst ist jedoch ein Schlüsselwort und keine Funktion. Sie können ihm keinen Alias wie `const myImport = import` zuweisen; dies löst einen {{jsxref("SyntaxError")}} aus.

[Abschließende Kommata](/de/docs/Web/JavaScript/Reference/Trailing_commas) sind nur zulässig, wenn die Laufzeitumgebung auch `options` unterstützt. Prüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität).

### Parameter

- `moduleName`
  - : Das Modul, aus dem importiert werden soll. Wie der Modulbezeichner aufgelöst wird, legt die Host-Umgebung fest; dabei wird jedoch immer derselbe Algorithmus wie bei statischen [import-Deklarationen](/de/docs/Web/JavaScript/Reference/Statements/import) verwendet.
- `options`
  - : Ein Objekt mit Importoptionen. Der folgende Schlüssel wird erkannt:
    - `with`
      - : Die [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with).

### Rückgabewert

Gibt ein Promise zurück, das:

- mit einem [Modul-Namespace-Objekt](#modul-namespace-objekt) erfüllt wird, wenn das referenzierte Modul erfolgreich geladen und [ausgewertet](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#evaluating_modules) wurde. Dieses Objekt enthält alle Exporte aus `moduleName`.
- mit dem ausgelösten Fehler zurückgewiesen wird, wenn die [Umwandlung von `moduleName` in einen String](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) einen Fehler auslöst.
- mit einem von der Host-Umgebung festgelegten Fehler zurückgewiesen wird, wenn das [Abrufen](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#loading_the_graph) des Moduls fehlschlägt (Node verwendet üblicherweise `Error`, Browser hingegen `TypeError`). Häufige Ursachen sind:
  - In einem dateisystembasierten Modulsystem, beispielsweise Node.js, schlägt der Zugriff auf das Dateisystem fehl (Zugriff verweigert, Datei nicht gefunden usw.).
  - In einem webbasierten Modulsystem, beispielsweise einem Browser, schlägt die Netzwerkanfrage fehl (keine Internetverbindung, CORS-Problem usw.) oder es tritt ein HTTP-Fehler auf (404, 500 usw.).
- mit dem entsprechenden Fehler zurückgewiesen wird, üblicherweise einem {{jsxref("SyntaxError")}}, wenn das Parsen oder [Verknüpfen](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#linking_modules) fehlschlägt.
- mit dem ausgelösten Fehler zurückgewiesen wird, wenn die Auswertung des referenzierten Moduls oder einer seiner Abhängigkeiten einen Fehler auslöst.

> [!NOTE]
> `import()` löst niemals synchron einen Fehler aus.

## Beschreibung

Die Syntax der import-Deklaration (`import something from "somewhere"`) ist statisch und macht das importierte Modul zu einer Abhängigkeit, die beim Laden des importierenden Moduls unmittelbar geladen wird. Mit dynamischen Importen lässt sich die syntaktische Starrheit von import-Deklarationen umgehen und ein Modul bedingt oder bei Bedarf laden. Es gibt unter anderem folgende Gründe, dynamische Importe zu verwenden:

- Ein statischer Import verlangsamt das Laden Ihres Codes erheblich oder erhöht den Speicherbedarf Ihres Programms, und es ist unwahrscheinlich, dass Sie den importierten Code benötigen, oder Sie benötigen ihn erst später.
- Das Modul, das Sie importieren, existiert zum Ladezeitpunkt noch nicht.
- Der String des Modulbezeichners muss dynamisch erstellt werden. (Statische Importe unterstützen nur statische Modulbezeichner.)
- Das importierte Modul hat Seiteneffekte, die nur unter einer bestimmten Bedingung auftreten sollen. (Es wird empfohlen, Seiteneffekte in Modulen zu vermeiden; bei Modulabhängigkeiten haben Sie darauf jedoch nicht immer Einfluss.)
- Sie befinden sich in einer Umgebung, die keine Modulumgebung ist (beispielsweise `eval` oder eine Skriptdatei).

Verwenden Sie dynamische Importe nur, wenn sie erforderlich sind. Die statische Form ist zum Laden anfänglicher Abhängigkeiten vorzuziehen und lässt sich besser durch Werkzeuge zur statischen Analyse und {{Glossary("Tree_shaking", "Tree Shaking")}} optimieren. Wenn Sie lediglich die Ausführung des geladenen Codes bis zu seiner Verwendung aufschieben möchten, ziehen Sie [`import defer`](/de/docs/Web/JavaScript/Reference/Statements/import/defer) in Betracht.

Wenn Ihre Datei nicht als Modul ausgeführt wird (bei Einbindung in eine HTML-Datei muss das script-Tag `type="module"` haben), können Sie keine statischen import-Deklarationen verwenden. Die asynchrone Syntax für dynamische Importe steht dagegen sowohl in Skripten als auch in Modulen zur Verfügung. Damit können Sie Module unter Beachtung der unten beschriebenen Einschränkungen des Ausführungskontexts in Umgebungen importieren, die keine Modulumgebungen sind.

Der Parameter `options` ermöglicht verschiedene Arten von Importoptionen, beispielsweise [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with):

```js
import("./data.json", { with: { type: "json" } });
```

Dynamische Modulimporte sind nicht in allen Ausführungskontexten zulässig.
Beispielsweise kann `import()` im Hauptthread, in einem Shared Worker oder in einem Dedicated Worker verwendet werden. Wird es jedoch innerhalb eines [Service Workers](/de/docs/Web/API/Service_Worker_API) oder eines [Worklets](/de/docs/Web/API/Worklet) aufgerufen, wird sein Promise zurückgewiesen.

„Phase modifiers“ für import-Anweisungen können auch bei dynamischen Importen verwendet werden:

- [`import.defer()`](/de/docs/Web/JavaScript/Reference/Operators/import/defer)
- [`import.source()`](/de/docs/Web/JavaScript/Reference/Operators/import/source)

Jede dieser Syntaxformen gilt als eigener Ausdruckstyp.

### Modul-Namespace-Objekt

Ein _Modul-Namespace-Objekt_ beschreibt alle eindeutigen Exporte eines Moduls. Die Namen der Exporte stehen fest, ihre Werte spiegeln jedoch Live-Bindings wider. Das Objekt wird bei Bedarf erstellt, gegebenenfalls bereits während des Verknüpfens und vor der Auswertung des Moduls. Auf das Modul-Namespace-Objekt eines Moduls können Sie auf zwei Arten zugreifen: über einen [Namespace-Import](/de/docs/Web/JavaScript/Reference/Statements/import#namespace_import) (`import * as name from moduleName`) oder über den Erfüllungswert eines dynamischen Imports.

Das Modul-Namespace-Objekt ist ein [versiegeltes](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed) Objekt mit einem [`null`-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects). Das bedeutet, dass alle String-Schlüssel des Objekts Exporten des Moduls entsprechen und es keine zusätzlichen Schlüssel gibt. Alle Schlüssel sind [aufzählbar](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) und lexikografisch geordnet (entsprechend dem Standardverhalten von [`Array.prototype.sort()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description)). Der Standardexport ist unter dem Schlüssel `default` verfügbar. Außerdem hat das Modul-Namespace-Objekt eine [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft mit dem Wert `"Module"`, die von {{jsxref("Object.prototype.toString()")}} verwendet wird.

Wenn Sie mit {{jsxref("Object.getOwnPropertyDescriptors()")}} ihre Deskriptoren abrufen, werden die String-Eigenschaften als nicht konfigurierbar, aber beschreibbar ausgewiesen. Tatsächlich sind sie jedoch schreibgeschützt, da Sie einer Eigenschaft keinen neuen Wert zuweisen können. Dieses Verhalten entspricht der Tatsache, dass statische Importe „[Live-Bindings](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter)“ erstellen: Das exportierende Modul kann die Werte neu zuweisen, das importierende Modul hingegen nicht. Dass die Eigenschaften als beschreibbar ausgewiesen werden, spiegelt die Möglichkeit wider, dass sich ihre Werte ändern, denn Eigenschaften, die weder konfigurierbar noch beschreibbar sind, müssen konstant bleiben. Sie können beispielsweise dem exportierten Wert einer Variablen einen neuen Wert zuweisen, der anschließend im Modul-Namespace-Objekt sichtbar ist.

Jeder (normalisierte) Modulbezeichner entspricht einem eindeutigen Modul-Namespace-Objekt. Daher gilt im Allgemeinen Folgendes:

```js
import * as mod from "/my-module.js";

import("/my-module.js").then((mod2) => {
  console.log(mod === mod2); // true
});
```

Es gibt allerdings eine bemerkenswerte Ausnahme: Da ein Promise niemals mit einem [Thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) erfüllt wird, wird eine vom Modul `my-module.js` exportierte Funktion namens `then()` automatisch aufgerufen, wenn das Promise des dynamischen Imports erfüllt wird. Dies geschieht im Rahmen der [Promise-Auflösung](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#the_resolve_function).

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

Dieses konsequente Caching stellt sicher, dass ein JavaScript-Codeabschnitt nie mehr als einmal ausgeführt wird, selbst wenn er mehrfach importiert wird. Spätere Importe führen, sofern ein früherer Import in derselben Umgebung erfolgreich war, nicht einmal mehr zu HTTP-Anfragen oder Festplattenzugriffen. Wenn Sie ein Modul erneut importieren und auswerten müssen, ohne die gesamte JavaScript-Umgebung neu zu starten, können Sie beispielsweise einen eindeutigen Abfrageparameter im Modulbezeichner verwenden. Das funktioniert auch in Laufzeitumgebungen außerhalb des Browsers, die URL-Bezeichner unterstützen.

```js
import(`/my-module.js?t=${Date.now()}`);
```

Beachten Sie, dass dies in einer langlebigen Anwendung zu Speicherlecks führen kann, da die Engine Modul-Namespace-Objekte nicht gefahrlos per Garbage Collection freigeben kann. Derzeit gibt es keine Möglichkeit, den Cache der Modul-Namespace-Objekte manuell zu leeren.

Sie können auch die [Fetch API](/de/docs/Web/API/Fetch_API) verwenden, um den Quellcode eines Moduls als Text abzurufen und das Modul anschließend je nach Modultyp manuell auszuwerten:

- Bei JavaScript-Modulen können Sie den Quellcode in Browsern dynamisch über eine [`blob:`-URL](/de/docs/Web/API/URL/createObjectURL_static) importieren oder [`vm.Module`](https://nodejs.org/docs/latest/api/vm.html#class-vmmodule) verwenden, um ihn in Node.js auszuwerten.
- Bei JSON-Modulen können Sie den Quellcode mit {{jsxref("JSON.parse()")}} parsen.
- Bei CSS-Modulen können Sie ein neues [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt erstellen und es mit dessen [`replace()`](/de/docs/Web/API/CSSStyleSheet/replace)-Methode mit dem Quellcode befüllen.

Semantisch ist dies jedoch nicht dasselbe wie ein dynamischer Import, da Einstellungen des User Agents wie [Fetch-Destination](/de/docs/Web/API/Request/destination), [CSP](/de/docs/Web/HTTP/Guides/CSP) oder [Modulauflösung](/de/docs/Web/JavaScript/Reference/Operators/import.meta/resolve) möglicherweise nicht korrekt angewendet werden.

Ein Modul wird in drei Schritten importiert: Laden (Abrufen und Parsen des Moduls und seiner Abhängigkeiten), Verknüpfen (Auflösen der Importe und Vorbereiten der Bindings) und Auswerten (Ausführen des geparsten Codes). Fehler bei der Auswertung werden zwischengespeichert. Spätere Importe desselben Moduls geben den Fehler daher weiter, ohne das Modul erneut auszuführen. Das Verknüpfen kann erneut versucht werden, derselbe Graph aus JavaScript-Moduldatensätzen führt jedoch zum selben Verknüpfungsfehler.

Ob Fehler beim Laden zwischengespeichert werden, hängt von der Host-Umgebung und der Art des Fehlers ab. In Browsern ist die Modulzuordnung vom HTTP-Cache getrennt. Die [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/webappapis.html#fetch-a-single-module-script) verlangt, dass fehlgeschlagene Abrufe, einschließlich HTTP-Fehlerantworten, aus der Modulzuordnung entfernt werden, damit ein späterer Import es erneut versuchen kann. Der HTTP-Cache kann dennoch eine zwischengespeicherte Fehlerantwort liefern. Parsefehler bleiben hingegen in der Modulzuordnung erhalten; ein erneuter Import desselben Moduls ruft daher keinen korrigierten Quellcode ab.

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

Wenn Ihr Projekt Pakete verwendet, die ESM exportieren, können Sie diese auch ausschließlich wegen ihrer Seiteneffekte importieren. Dadurch wird lediglich der Code in der Einstiegspunktdatei des Pakets (und in allen Dateien, die sie importiert) ausgeführt.

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

Dieses Beispiel zeigt, wie Sie eine Funktionalität abhängig von einer Benutzeraktion – hier einem Klick auf eine Schaltfläche – in eine Seite laden und anschließend eine Funktion aus diesem Modul aufrufen. Dies ist nicht die einzige Möglichkeit, diese Funktionalität umzusetzen. Die `import()`-Funktion unterstützt auch `await`.

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

Bei Vorgängen wie serverseitigem Rendering müssen Sie möglicherweise auf dem Server und im Browser unterschiedliche Logik laden, da diese auf unterschiedliche globale Objekte oder Module zugreift. Beispielsweise hat Browsercode Zugriff auf Web-APIs wie `document` und `navigator`, während Servercode auf das Dateisystem des Servers zugreifen kann. Dafür können Sie einen bedingten dynamischen Import verwenden.

```js
let myModule;

if (typeof window === "undefined") {
  myModule = await import("module-used-on-server");
} else {
  myModule = await import("module-used-in-browser");
}
```

### Module mit einem Modulbezeichner importieren, der kein Literal ist

Bei dynamischen Importen kann der Modulbezeichner ein beliebiger Ausdruck sein; er muss kein String-Literal sein.

Hier laden wir zehn Module – `/modules/module-0.js`, `/modules/module-1.js` usw. – gleichzeitig und rufen die jeweils exportierte `load`-Funktion auf.

```js
Promise.all(
  Array.from({ length: 10 }).map(
    (_, index) => import(`/modules/module-${index}.js`),
  ),
).then((modules) => modules.forEach((module) => module.load()));
```

### Importattribute bei dynamischen Importen verwenden

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
