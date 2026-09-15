---
title: import()
slug: Web/JavaScript/Reference/Operators/import
l10n:
  sourceCommit: f693fdeb65be430fdf3b7fc5cdf44a10a13f2bbf
---

Die Syntax **`import()`**, häufig als _dynamischer Import_ bezeichnet, ist ein funktionsähnlicher Ausdruck, der das asynchrone und dynamische Laden eines ECMAScript-Moduls in eine potenziell Nicht-Modul-Umgebung ermöglicht.

Im Gegensatz zum [Gegenstück im Deklarationsstil](/de/docs/Web/JavaScript/Reference/Statements/import) werden dynamische Importe nur ausgewertet, wenn sie benötigt werden, und erlauben eine größere syntaktische Flexibilität.

## Syntax

```js-nolint
import(moduleName)
import(moduleName, options)
```

Der Aufruf `import()` ist eine Syntax, die einem Funktionsaufruf stark ähnelt, aber `import` selbst ist ein Schlüsselwort und keine Funktion. Sie können es nicht wie `const myImport = import` aliassen; dies löst einen {{jsxref("SyntaxError")}} aus.

[Nachgestellte Kommata](/de/docs/Web/JavaScript/Reference/Trailing_commas) sind nur zulässig, wenn die Laufzeitumgebung auch `options` unterstützt. Prüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität).

### Parameter

- `moduleName`
  - : Das Modul, aus dem importiert werden soll. Die Auswertung des Spezifizierers ist host-spezifisch, folgt aber stets demselben Algorithmus wie statische [import-Deklarationen](/de/docs/Web/JavaScript/Reference/Statements/import).
- `options`
  - : Ein Objekt, das Importoptionen enthält. Der folgende Schlüssel wird erkannt:
    - `with`
      - : Die [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with).

### Rückgabewert

Gibt ein Promise zurück, das:

- wenn das referenzierte Modul erfolgreich geladen und ausgewertet wurde, mit einem [Modul-Namespace-Objekt](#modul-namespace-objekt) erfüllt wird: einem Objekt, das alle Exporte aus `moduleName` enthält.
- wenn die [Umwandlung in einen String](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) von `moduleName` einen Fehler auslöst, mit dem ausgelösten Fehler abgelehnt wird.
- wenn das Abrufen und Laden des Moduls aus irgendeinem Grund fehlschlägt, mit einem implementierungsdefinierten Fehler abgelehnt wird (Node verwendet ein generisches `Error`, während alle Browser `TypeError` verwenden). Häufige Ursachen können sein:
  - In einem dateisystembasierten Modulsystem (beispielsweise Node.js), wenn der Zugriff auf das Dateisystem fehlschlägt (Zugriff verweigert, Datei nicht gefunden usw.).
  - In einem webbasierten Modulsystem (beispielsweise Browser), wenn die Netzwerkanfrage fehlschlägt (keine Internetverbindung, CORS-Problem usw.) oder ein HTTP-Fehler auftritt (404, 500 usw.).
- wenn die Auswertung des referenzierten Moduls einen Fehler auslöst, mit dem ausgelösten Fehler abgelehnt wird.

> [!NOTE]
> `import()` löst niemals synchron einen Fehler aus.

## Beschreibung

Die Syntax der import-Deklaration (`import something from "somewhere"`) ist statisch und führt immer dazu, dass das importierte Modul zur Ladezeit ausgewertet wird. Dynamische Importe ermöglichen es, die syntaktische Starrheit von import-Deklarationen zu umgehen und ein Modul bedingt oder bei Bedarf zu laden. Im Folgenden sind einige Gründe aufgeführt, warum Sie möglicherweise einen dynamischen Import verwenden müssen:

- Wenn statisches Importieren das Laden Ihres Codes erheblich verlangsamt oder den Speicherverbrauch Ihres Programms erhöht und die Wahrscheinlichkeit gering ist, dass Sie den importierten Code benötigen, oder Sie ihn erst zu einem späteren Zeitpunkt benötigen.
- Wenn das Modul, das Sie importieren, zur Ladezeit nicht existiert.
- Wenn der Import-Spezifizierer-String dynamisch erstellt werden muss. (Statischer Import unterstützt nur statische Spezifizierer.)
- Wenn das importierte Modul Seiteneffekte hat und Sie diese Seiteneffekte nur möchten, wenn eine bestimmte Bedingung erfüllt ist. (Es wird empfohlen, keine Seiteneffekte in einem Modul zu haben, aber manchmal können Sie dies bei Ihren Modulabhängigkeiten nicht kontrollieren.)
- Wenn Sie sich in einer Nicht-Modul-Umgebung befinden (beispielsweise `eval` oder einer Skriptdatei).

Verwenden Sie dynamischen Import nur, wenn dies erforderlich ist. Die statische Form ist zum Laden anfänglicher Abhängigkeiten vorzuziehen und kann leichter von Werkzeugen zur statischen Analyse und {{Glossary("Tree_shaking", "Tree Shaking")}} profitieren. Wenn Ihr einziges Ziel darin besteht, die Ausführung des geladenen Codes aufzuschieben, bis er verwendet wird, sollten Sie [`import defer`](/de/docs/Web/JavaScript/Reference/Statements/import/defer) in Betracht ziehen.

Wenn Ihre Datei nicht als Modul ausgeführt wird (wenn sie in einer HTML-Datei referenziert wird, muss das Skript-Tag `type="module"` haben), können Sie keine statischen import-Deklarationen verwenden. Andererseits ist die asynchrone Syntax des dynamischen Imports immer verfügbar, sodass Sie Module in Nicht-Modul-Umgebungen importieren können.

Der Parameter `options` erlaubt verschiedene Arten von Importoptionen. Zum Beispiel [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with):

```js
import("./data.json", { with: { type: "json" } });
```

Dynamischer Modulimport ist nicht in allen Ausführungskontexten zulässig.
Beispielsweise kann `import()` im Hauptthread, einem Shared Worker oder einem Dedicated Worker verwendet werden, löst jedoch einen Fehler aus, wenn es innerhalb eines [Service Workers](/de/docs/Web/API/Service_Worker_API) oder eines [Worklets](/de/docs/Web/API/Worklet) aufgerufen wird.

„Phasenmodifikatoren“ für `import`-Anweisungen können auch mit dynamischen Importen verwendet werden:

- [`import.defer()`](/de/docs/Web/JavaScript/Reference/Operators/import/defer)
- [`import.source()`](/de/docs/Web/JavaScript/Reference/Operators/import/source)

Jede dieser Syntaxformen wird als eigener Ausdruckstyp betrachtet.

### Modul-Namespace-Objekt

Ein _Modul-Namespace-Objekt_ ist ein Objekt, das alle Exporte eines Moduls beschreibt. Es ist ein statisches Objekt, das erstellt wird, wenn das Modul ausgewertet wird. Es gibt zwei Möglichkeiten, auf das Modul-Namespace-Objekt eines Moduls zuzugreifen: über einen [Namespace-Import](/de/docs/Web/JavaScript/Reference/Statements/import#namespace_import) (`import * as name from moduleName`) oder über den Erfüllungswert eines dynamischen Imports.

Das Modul-Namespace-Objekt ist ein [versiegeltes](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed) Objekt mit einem [`null`-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects). Das bedeutet, dass alle String-Schlüssel des Objekts den Exporten des Moduls entsprechen und es niemals zusätzliche Schlüssel gibt. Alle Schlüssel sind in lexikografischer Reihenfolge [aufzählbar](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) (d.h. das Standardverhalten von [`Array.prototype.sort()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description)), wobei der Standardexport als Schlüssel namens `default` verfügbar ist. Darüber hinaus besitzt das Modul-Namespace-Objekt eine Eigenschaft [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) mit dem Wert `"Module"`, die in {{jsxref("Object.prototype.toString()")}} verwendet wird.

Die String-Eigenschaften sind nicht konfigurierbar und schreibbar, wenn Sie {{jsxref("Object.getOwnPropertyDescriptors()")}} verwenden, um ihre Deskriptoren abzurufen. Sie sind jedoch effektiv schreibgeschützt, da Sie einer Eigenschaft keinen neuen Wert erneut zuweisen können. Dieses Verhalten spiegelt die Tatsache wider, dass statische Importe „[Live Bindings](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter)“ erstellen — die Werte können durch das Modul, das sie exportiert, erneut zugewiesen werden, aber nicht durch das Modul, das sie importiert. Die Schreibbarkeit der Eigenschaften spiegelt die Möglichkeit wider, dass sich die Werte ändern, da nicht konfigurierbare und nicht schreibbare Eigenschaften konstant sein müssen. Beispielsweise können Sie den exportierten Wert einer Variablen erneut zuweisen, und der neue Wert kann im Modul-Namespace-Objekt beobachtet werden.

Jeder (normalisierte) Modul-Spezifizierer entspricht einem eindeutigen Modul-Namespace-Objekt, sodass im Allgemeinen Folgendes gilt:

```js
import * as mod from "/my-module.js";

import("/my-module.js").then((mod2) => {
  console.log(mod === mod2); // true
});
```

Mit einer merkwürdigen Ausnahme: Da ein Promise niemals mit einem [Thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) erfüllt wird, wird diese Funktion automatisch aufgerufen, wenn das Modul `my-module.js` eine Funktion namens `then()` exportiert und das Promise des dynamischen Imports erfüllt wird, als Teil des Prozesses der [Promise-Auflösung](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#the_resolve_function).

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

Dieses aggressive Caching stellt sicher, dass ein JavaScript-Codeabschnitt niemals mehr als einmal ausgeführt wird, selbst wenn er mehrfach importiert wird. Zukünftige Importe führen nicht einmal zu HTTP-Anfragen oder Datenträgerzugriffen. Wenn Sie ein Modul ohne Neustart der gesamten JavaScript-Umgebung erneut importieren und auswerten müssen, besteht ein möglicher Trick darin, einen eindeutigen Abfrageparameter im Modul-Spezifizierer zu verwenden. Dies funktioniert auch in Nicht-Browser-Laufzeitumgebungen, die URL-Spezifizierer unterstützen.

```js
import(`/my-module.js?t=${Date.now()}`);
```

Beachten Sie, dass dies in einer lang laufenden Anwendung zu Speicherlecks führen kann, da die Engine keine Modul-Namespace-Objekte sicher per Garbage Collection entfernen kann. Derzeit gibt es keine Möglichkeit, den Cache von Modul-Namespace-Objekten manuell zu leeren.

Sie können auch die [Fetch API](/de/docs/Web/API/Fetch_API) verwenden, um den Quellcode des Moduls als Text abzurufen, und das Modul dann abhängig vom Modultyp manuell auswerten:

- Für JavaScript-Module können Sie den Quellcode in Browsern dynamisch als [`blob:`-URL](/de/docs/Web/API/URL/createObjectURL_static) importieren oder [`vm.Module`](https://nodejs.org/docs/latest/api/vm.html#class-vmmodule) verwenden, um ihn in Node.js auszuwerten.
- Für JSON-Module können Sie den Quellcode mit {{jsxref("JSON.parse()")}} parsen.
- Für CSS-Module können Sie ein neues [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt erstellen und dessen Methode [`replace()`](/de/docs/Web/API/CSSStyleSheet/replace) verwenden, um es mit dem Quellcode zu füllen.

Dies ist jedoch semantisch nicht dasselbe wie dynamischer Import, weil User-Agent-Einstellungen wie [Fetch-Ziel](/de/docs/Web/API/Request/destination), [CSP](/de/docs/Web/HTTP/Guides/CSP) oder [Modulauflösung](/de/docs/Web/JavaScript/Reference/Operators/import.meta/resolve) möglicherweise nicht korrekt angewendet werden.

Das Caching von Modul-Namespace-Objekten gilt nur für Module, die _erfolgreich_ geladen und verknüpft wurden. Ein Modul wird in drei Schritten importiert: Laden (Abrufen des Moduls), Verknüpfen (größtenteils das Parsen des Moduls) und Auswerten (Ausführen des geparsten Codes). Nur Auswertungsfehler werden gecacht; wenn ein Modul nicht geladen oder verknüpft werden kann, kann der nächste Import versuchen, das Modul erneut zu laden und zu verknüpfen. Der Browser kann das Ergebnis des Abrufvorgangs cachen oder nicht, sollte jedoch der üblichen HTTP-Semantik folgen, sodass sich die Behandlung solcher Netzwerkfehler nicht von der Behandlung von Fehlern bei [`fetch()`](/de/docs/Web/API/Window/fetch) unterscheiden sollte.

## Beispiele

### Ein Modul nur für seine Seiteneffekte importieren

```js
(async () => {
  if (somethingIsTrue) {
    // import module for side effects
    await import("/modules/my-module.js");
  }
})();
```

Wenn Ihr Projekt Pakete verwendet, die ESM exportieren, können Sie sie ebenfalls nur für Seiteneffekte importieren. Dadurch wird nur der Code in der Paketeinstiegspunktdatei (und in allen von ihr importierten Dateien) ausgeführt.

### Standardwerte importieren

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

Dieses Beispiel zeigt, wie Funktionen basierend auf einer Benutzeraktion — in diesem Fall einem Klick auf eine Schaltfläche — auf eine Seite geladen und anschließend eine Funktion innerhalb dieses Moduls aufgerufen werden kann. Dies ist nicht die einzige Möglichkeit, diese Funktionalität zu implementieren. Die Funktion `import()` unterstützt auch `await`.

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

### Verschiedene Module abhängig von der Umgebung importieren

In Prozessen wie Server-seitigem Rendering müssen Sie möglicherweise unterschiedliche Logik auf dem Server oder im Browser laden, da diese mit unterschiedlichen Globals oder Modulen interagieren (beispielsweise hat Browsercode Zugriff auf Web-APIs wie `document` und `navigator`, während Servercode Zugriff auf das Server-Dateisystem hat). Sie können dies über einen bedingten dynamischen Import tun.

```js
let myModule;

if (typeof window === "undefined") {
  myModule = await import("module-used-on-server");
} else {
  myModule = await import("module-used-in-browser");
}
```

### Module mit einem nicht literalen Spezifizierer importieren

Dynamische Importe erlauben jeden Ausdruck als Modul-Spezifizierer, nicht nur String-Literale.

Hier laden wir 10 Module, `/modules/module-0.js`, `/modules/module-1.js` usw., gleichzeitig und rufen die Funktionen `load` auf, die jedes von ihnen exportiert.

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
