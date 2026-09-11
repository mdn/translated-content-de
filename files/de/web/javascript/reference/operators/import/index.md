---
title: import()
slug: Web/JavaScript/Reference/Operators/import
l10n:
  sourceCommit: 31bad7cd99cccf47f6332b81bbff4371e2bc551f
---

Die Syntax **`import()`**, üblicherweise als _dynamischer Import_ bezeichnet, ist ein funktionsähnlicher Ausdruck, der das asynchrone und dynamische Laden eines ECMAScript-Moduls in eine potenziell nicht modulare Umgebung ermöglicht.

Anders als das [Gegenstück im Deklarationsstil](/de/docs/Web/JavaScript/Reference/Statements/import) werden dynamische Importe nur bei Bedarf ausgewertet und erlauben eine größere syntaktische Flexibilität.

## Syntax

```js-nolint
import(moduleName)
import(moduleName, options)
```

Der Aufruf `import()` ist eine Syntax, die einem Funktionsaufruf sehr ähnelt, aber `import` selbst ist ein Schlüsselwort und keine Funktion. Sie können es nicht wie mit `const myImport = import` aliasieren; dies löst einen {{jsxref("SyntaxError")}} aus.

[Nachgestellte Kommas](/de/docs/Web/JavaScript/Reference/Trailing_commas) sind nur zulässig, wenn die Laufzeitumgebung auch `options` unterstützt. Prüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität).

### Parameter

- `moduleName`
  - : Das Modul, aus dem importiert werden soll. Die Auswertung des Spezifizierers ist host-spezifiziert, folgt jedoch immer demselben Algorithmus wie statische [Importdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/import).
- `options`
  - : Ein Objekt, das Importoptionen enthält. Der folgende Schlüssel wird erkannt:
    - `with`
      - : Die [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with).

### Rückgabewert

Gibt ein Promise zurück, das:

- Wenn das referenzierte Modul erfolgreich geladen und ausgewertet wurde, mit einem [Modul-Namensraumobjekt](#modul-namensraumobjekt) erfüllt wird: einem Objekt, das alle Exporte aus `moduleName` enthält.
- Wenn die [String-Koersion](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) von `moduleName` einen Fehler auslöst, mit dem ausgelösten Fehler abgelehnt wird.
- Wenn das Abrufen und Laden des Moduls aus irgendeinem Grund fehlschlägt, mit einem implementierungsdefinierten Fehler abgelehnt wird (Node verwendet ein generisches `Error`, während alle Browser `TypeError` verwenden). Häufige Ursachen können sein:
  - In einem dateisystembasierten Modulsystem (z. B. Node.js), wenn der Zugriff auf das Dateisystem fehlschlägt (Berechtigung verweigert, Datei nicht gefunden usw.).
  - In einem webbasierten Modulsystem (z. B. Browser), wenn die Netzwerkanfrage fehlschlägt (keine Internetverbindung, CORS-Problem usw.) oder ein HTTP-Fehler auftritt (404, 500 usw.).
- Wenn die Auswertung des referenzierten Moduls einen Fehler auslöst, mit dem ausgelösten Fehler abgelehnt wird.

> [!NOTE]
> `import()` löst niemals synchron einen Fehler aus.

## Beschreibung

Die Syntax für Importdeklarationen (`import something from "somewhere"`) ist statisch und führt immer dazu, dass das importierte Modul zur Ladezeit ausgewertet wird. Dynamische Importe ermöglichen es, die syntaktische Starrheit von Importdeklarationen zu umgehen und ein Modul bedingt oder bei Bedarf zu laden. Im Folgenden finden Sie einige Gründe, warum Sie möglicherweise dynamischen Import verwenden müssen:

- Wenn statisches Importieren das Laden Ihres Codes erheblich verlangsamt oder den Speicherverbrauch Ihres Programms erhöht und die Wahrscheinlichkeit gering ist, dass Sie den importierten Code benötigen, oder Sie ihn erst zu einem späteren Zeitpunkt benötigen werden.
- Wenn das zu importierende Modul zur Ladezeit nicht existiert.
- Wenn die Zeichenfolge des Importspezifizierers dynamisch konstruiert werden muss. (Statischer Import unterstützt nur statische Spezifizierer.)
- Wenn das importierte Modul Seiteneffekte hat und Sie diese Seiteneffekte nicht möchten, sofern nicht eine Bedingung erfüllt ist. (Es wird empfohlen, keine Seiteneffekte in einem Modul zu haben, aber manchmal haben Sie darauf in Ihren Modulabhängigkeiten keinen Einfluss.)
- Wenn Sie sich in einer nicht modularen Umgebung befinden (beispielsweise `eval` oder eine Skriptdatei).

Verwenden Sie dynamischen Import nur, wenn dies erforderlich ist. Die statische Form ist zum Laden anfänglicher Abhängigkeiten vorzuziehen und kann leichter von Werkzeugen für statische Analyse und {{Glossary("Tree_shaking", "Tree Shaking")}} profitieren.

Wenn Ihre Datei nicht als Modul ausgeführt wird (wenn sie in einer HTML-Datei referenziert wird, muss das Skript-Tag `type="module"` haben), können Sie keine statischen Importdeklarationen verwenden. Andererseits ist die asynchrone Syntax für dynamischen Import immer verfügbar, sodass Sie Module in nicht modulare Umgebungen importieren können.

Der Parameter `options` ermöglicht verschiedene Arten von Importoptionen. Zum Beispiel [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with):

```js
import("./data.json", { with: { type: "json" } });
```

Dynamischer Modulimport ist nicht in allen Ausführungskontexten zulässig.
Beispielsweise kann `import()` im Hauptthread, in einem Shared Worker oder in einem Dedicated Worker verwendet werden, löst jedoch einen Fehler aus, wenn es innerhalb eines [Service Workers](/de/docs/Web/API/Service_Worker_API) oder eines [Worklets](/de/docs/Web/API/Worklet) aufgerufen wird.

„Phasenmodifikatoren“ für `import`-Anweisungen können auch mit dynamischen Importen verwendet werden:

- [`import.defer()`](/de/docs/Web/JavaScript/Reference/Operators/import/defer)
- [`import.source()`](/de/docs/Web/JavaScript/Reference/Operators/import/source)

Jede dieser Syntaxformen wird als eigenständiger Ausdruckstyp betrachtet.

### Modul-Namensraumobjekt

Ein _Modul-Namensraumobjekt_ ist ein Objekt, das alle Exporte eines Moduls beschreibt. Es ist ein statisches Objekt, das erstellt wird, wenn das Modul ausgewertet wird. Es gibt zwei Möglichkeiten, auf das Modul-Namensraumobjekt eines Moduls zuzugreifen: über einen [Namensraumimport](/de/docs/Web/JavaScript/Reference/Statements/import#namespace_import) (`import * as name from moduleName`) oder über den Erfüllungswert eines dynamischen Imports.

Das Modul-Namensraumobjekt ist ein [versiegeltes](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed) Objekt mit [`null`-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects). Das bedeutet, dass alle String-Schlüssel des Objekts den Exporten des Moduls entsprechen und es niemals zusätzliche Schlüssel gibt. Alle Schlüssel sind in lexikografischer Reihenfolge [aufzählbar](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) (d.h. das Standardverhalten von [`Array.prototype.sort()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description)), wobei der Standardexport als Schlüssel mit dem Namen `default` verfügbar ist. Außerdem besitzt das Modul-Namensraumobjekt eine Eigenschaft [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) mit dem Wert `"Module"`, die in {{jsxref("Object.prototype.toString()")}} verwendet wird.

Die String-Eigenschaften sind nicht konfigurierbar und schreibbar, wenn Sie {{jsxref("Object.getOwnPropertyDescriptors()")}} verwenden, um ihre Deskriptoren abzurufen. Sie sind jedoch faktisch schreibgeschützt, weil Sie eine Eigenschaft keinem neuen Wert erneut zuweisen können. Dieses Verhalten entspricht der Tatsache, dass statische Importe „[Live-Bindings](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter)“ erzeugen — die Werte können durch das sie exportierende Modul erneut zugewiesen werden, aber nicht durch das sie importierende Modul. Die Schreibbarkeit der Eigenschaften spiegelt die Möglichkeit wider, dass sich die Werte ändern, da nicht konfigurierbare und nicht schreibbare Eigenschaften konstant sein müssen. Sie können beispielsweise den exportierten Wert einer Variablen erneut zuweisen, und der neue Wert kann im Modul-Namensraumobjekt beobachtet werden.

Jeder (normalisierte) Modulspezifizierer entspricht einem eindeutigen Modul-Namensraumobjekt. Daher gilt im Allgemeinen Folgendes:

```js
import * as mod from "/my-module.js";

import("/my-module.js").then((mod2) => {
  console.log(mod === mod2); // true
});
```

Mit einer kuriosen Ausnahme: Da ein Promise niemals mit einem [Thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) erfüllt wird, wird diese Funktion automatisch aufgerufen, wenn das Modul `my-module.js` eine Funktion namens `then()` exportiert und das Promise des dynamischen Imports erfüllt wird. Dies geschieht als Teil des Prozesses der [Promise-Auflösung](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#the_resolve_function).

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
> Exportieren Sie keine Funktion namens `then()` aus einem Modul. Dadurch verhält sich das Modul bei dynamischem Import anders als bei statischem Import.

Dieses aggressive Caching stellt sicher, dass ein JavaScript-Codeabschnitt niemals mehr als einmal ausgeführt wird, selbst wenn er mehrfach importiert wird. Zukünftige Importe führen nicht einmal zu HTTP-Anfragen oder Festplattenzugriffen. Wenn Sie ein Modul ohne Neustart der gesamten JavaScript-Umgebung erneut importieren und auswerten müssen, besteht ein möglicher Trick darin, einen eindeutigen Abfrageparameter im Modulspezifizierer zu verwenden. Dies funktioniert auch in Nicht-Browser-Laufzeitumgebungen, die URL-Spezifizierer unterstützen.

```js
import(`/my-module.js?t=${Date.now()}`);
```

Beachten Sie, dass dies in einer lang laufenden Anwendung zu Speicherlecks führen kann, da die Engine keine Modul-Namensraumobjekte sicher durch Garbage Collection entfernen kann. Derzeit gibt es keine Möglichkeit, den Cache von Modul-Namensraumobjekten manuell zu leeren.

Sie können auch die [Fetch API](/de/docs/Web/API/Fetch_API) verwenden, um den Modulquellcode als Text abzurufen und das Modul anschließend abhängig vom Modultyp manuell auszuwerten:

- Für JavaScript-Module können Sie den Quellcode in Browsern dynamisch als [`blob:`-URL](/de/docs/Web/API/URL/createObjectURL_static) importieren oder [`vm.Module`](https://nodejs.org/docs/latest/api/vm.html#class-vmmodule) verwenden, um ihn in Node.js auszuwerten.
- Für JSON-Module können Sie den Quellcode mit {{jsxref("JSON.parse()")}} parsen.
- Für CSS-Module können Sie ein neues [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt erstellen und dessen Methode [`replace()`](/de/docs/Web/API/CSSStyleSheet/replace) verwenden, um es mit dem Quellcode zu füllen.

Dies ist jedoch semantisch nicht dasselbe wie dynamischer Import, da User-Agent-Einstellungen wie [Fetch-Ziel](/de/docs/Web/API/Request/destination), [CSP](/de/docs/Web/HTTP/Guides/CSP) oder [Modulauflösung](/de/docs/Web/JavaScript/Reference/Operators/import.meta/resolve) möglicherweise nicht korrekt angewendet werden.

Das Caching von Modul-Namensraumobjekten gilt nur für Module, die _erfolgreich_ geladen und verknüpft wurden. Ein Modul wird in drei Schritten importiert: Laden (Abrufen des Moduls), Verknüpfen (hauptsächlich das Parsen des Moduls) und Auswerten (Ausführen des geparsten Codes). Nur Auswertungsfehler werden gecacht; wenn ein Modul nicht geladen oder verknüpft werden kann, kann der nächste Import versuchen, das Modul erneut zu laden und zu verknüpfen. Der Browser kann das Ergebnis der Abrufoperation cachen oder nicht, sollte jedoch der üblichen HTTP-Semantik folgen. Daher sollte sich die Behandlung solcher Netzwerkfehler nicht von der Behandlung von Fehlern bei [`fetch()`](/de/docs/Web/API/Window/fetch) unterscheiden.

## Beispiele

### Ein Modul nur aufgrund seiner Seiteneffekte importieren

```js
(async () => {
  if (somethingIsTrue) {
    // import module for side effects
    await import("/modules/my-module.js");
  }
})();
```

Wenn Ihr Projekt Pakete verwendet, die ESM exportieren, können Sie diese ebenfalls nur aufgrund ihrer Seiteneffekte importieren. Dadurch wird der Code in der Einstiegspunktdatei des Pakets (und in allen Dateien, die sie importiert) ausgeführt.

### Standardexporte importieren

Wenn Sie das importierte Modul-Namensraumobjekt destrukturieren, müssen Sie den Schlüssel `default` umbenennen, da `default` ein reserviertes Wort ist.

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

### Bedarfsgesteuert als Reaktion auf eine Benutzeraktion importieren

Dieses Beispiel zeigt, wie Funktionalität basierend auf einer Benutzeraktion – in diesem Fall einem Klick auf eine Schaltfläche – auf eine Seite geladen und anschließend eine Funktion innerhalb dieses Moduls aufgerufen wird. Dies ist nicht die einzige Möglichkeit, diese Funktionalität zu implementieren. Die Funktion `import()` unterstützt auch `await`.

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

### Unterschiedliche Module abhängig von der Umgebung importieren

Bei Prozessen wie Server-Side Rendering müssen Sie möglicherweise unterschiedliche Logik auf dem Server oder im Browser laden, weil diese mit unterschiedlichen Globals oder Modulen interagieren (beispielsweise hat Browsercode Zugriff auf Web-APIs wie `document` und `navigator`, während Servercode Zugriff auf das Serverdateisystem hat). Dies können Sie mit einem bedingten dynamischen Import tun.

```js
let myModule;

if (typeof window === "undefined") {
  myModule = await import("module-used-on-server");
} else {
  myModule = await import("module-used-in-browser");
}
```

### Module mit einem nicht literalen Spezifizierer importieren

Dynamische Importe erlauben jeden Ausdruck als Modulspezifizierer, nicht nur String-Literale.

Hier laden wir gleichzeitig 10 Module, `/modules/module-0.js`, `/modules/module-1.js` usw., und rufen die Funktionen `load` auf, die jedes davon exportiert.

```js
Promise.all(
  Array.from({ length: 10 }).map(
    (_, index) => import(`/modules/module-${index}.js`),
  ),
).then((modules) => modules.forEach((module) => module.load()));
```

### Importattribute mit dynamischem Import verwenden

[Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with) werden als zweiter Parameter der Syntax `import()` akzeptiert.

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
