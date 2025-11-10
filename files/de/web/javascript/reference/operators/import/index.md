---
title: import()
slug: Web/JavaScript/Reference/Operators/import
l10n:
  sourceCommit: 2ab902d9eec2f5a93d1f666234371ca77e93c470
---

Die **`import()`**-Syntax, allgemein als _dynamischer Import_ bezeichnet, ist eine funktionsähnliche Ausdrucksweise, die es ermöglicht, ein ECMAScript-Modul asynchron und dynamisch in eine potenziell nicht-modulare Umgebung zu laden.

Im Unterschied zur [Deklarationsstil-Variante](/de/docs/Web/JavaScript/Reference/Statements/import) werden dynamische Importe nur bei Bedarf ausgewertet und bieten größere syntaktische Flexibilität.

## Syntax

```js-nolint
import(moduleName)
import(moduleName, options)
```

Der `import()`-Aufruf ist eine Syntax, die einem Funktionsaufruf ähnelt, jedoch ist `import` ein Schlüsselwort und keine Funktion. Sie können es nicht umbenennen, wie `const myImport = import`, da dies einen {{jsxref("SyntaxError")}} auslösen würde.

[Nachgestellte Kommata](/de/docs/Web/JavaScript/Reference/Trailing_commas) sind nur erlaubt, wenn die Laufzeit auch `options` unterstützt. Überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität).

### Parameter

- `moduleName`
  - : Das Modul, von dem importiert werden soll. Die Auswertung des Bezeichners wird hostspezifisch festgelegt, folgt jedoch immer demselben Algorithmus wie bei statischen [Import-Deklarationen](/de/docs/Web/JavaScript/Reference/Statements/import).
- `options`
  - : Ein Objekt, das Importoptionen enthält. Der folgende Schlüssel wird erkannt:
    - `with`
      - : Die [Importeigenschaften](/de/docs/Web/JavaScript/Reference/Statements/import/with).

### Rückgabewert

Gibt ein Promise zurück, das:

- Wenn das referenzierte Modul erfolgreich geladen und ausgewertet wird, wird es zu einem [Modul-Namensraum-Objekt](#modul-namensraum-objekt) erfüllt: einem Objekt, das alle Exporte von `moduleName` enthält.
- Wenn die [Typumwandlung zu String](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) von `moduleName` einen Fehler wirft, lehnt es mit dem geworfenen Fehler ab.
- Wenn das Abrufen und Laden des Moduls aus irgendeinem Grund fehlschlägt, lehnt es mit einem implementierungsdefinierten Fehler ab (Node verwendet einen generischen `Error`, während alle Browser `TypeError` verwenden). Häufige Ursachen können sein:
  - In einem dateisystembasierten Modulsystem (z. B. Node.js), wenn der Zugriff auf das Dateisystem fehlschlägt (Berechtigung verweigert, Datei nicht gefunden usw.).
  - In einem webbasierten Modulsystem (z. B. Browser), wenn die Netzwerkabfrage fehlschlägt (keine Verbindung zum Internet, CORS-Problem usw.) oder ein HTTP-Fehler auftritt (404, 500 usw.).
- Wenn die Auswertung des referenzierten Moduls fehlschlägt, lehnt es mit dem geworfenen Fehler ab.

> [!NOTE]
> `import()` wirft niemals synchron einen Fehler.

## Beschreibung

Die Import-Deklarationssyntax (`import something from "somewhere"`) ist statisch und führt immer dazu, dass das importierte Modul zur Ladezeit ausgewertet wird. Dynamische Importe ermöglichen es, die syntaktische Starrheit von Importdeklarationen zu umgehen und ein Modul bedingt oder auf Abruf zu laden. Die folgenden Gründe könnten zu einer Verwendung des dynamischen Imports führen:

- Wenn das statische Importieren das Laden Ihres Codes erheblich verlangsamt oder den Speicherbedarf Ihres Programms erhöht und die Wahrscheinlichkeit gering ist, dass Sie den Code, den Sie importieren, benötigen oder diesen erst zu einem späteren Zeitpunkt benötigen.
- Wenn das Modul, das Sie importieren möchten, zur Ladezeit nicht existiert.
- Wenn der Import-Bezeichner-String dynamisch konstruiert werden muss. (Statischer Import unterstützt nur statische Bezeichner.)
- Wenn das importierte Modul Nebeneffekte hat und Sie diese Nebeneffekte nur möchten, wenn eine gewisse Bedingung wahr ist. (Es wird empfohlen, keine Nebeneffekte in einem Modul zu haben, aber manchmal können Sie dies in Ihren Modulabhängigkeiten nicht kontrollieren.)
- Wenn Sie sich in einer nicht-modularen Umgebung befinden (zum Beispiel `eval` oder eine Skriptdatei).

Verwenden Sie den dynamischen Import nur, wenn es erforderlich ist. Die statische Form ist vorzuziehen, um anfängliche Abhängigkeiten zu laden, und kann mehr von statischen Analysetools und {{Glossary("Tree_shaking", "Tree Shaking")}} profitieren.

Wenn Ihre Datei nicht als Modul ausgeführt wird (wenn sie in einer HTML-Datei referenziert wird, muss das Skript-Tag `type="module"` haben), können Sie statische Import-Deklarationen nicht verwenden. Andererseits ist die asynchrone dynamische Import-Syntax immer verfügbar, sodass Sie Module in Nicht-Modulumgebungen importieren können.

Der `options`-Parameter erlaubt verschiedene Arten von Importoptionen. Zum Beispiel [Importeigenschaften](/de/docs/Web/JavaScript/Reference/Statements/import/with):

```js
import("./data.json", { with: { type: "json" } });
```

Dynamischer Modulimport ist nicht in allen Ausführungskontexten erlaubt.
Zum Beispiel kann `import()` im Hauptthread, einem Shared Worker oder einem dedizierten Worker verwendet werden, löst jedoch einen Fehler aus, wenn es in einem [Service Worker](/de/docs/Web/API/Service_Worker_API) oder einem [Worklet](/de/docs/Web/API/Worklet) aufgerufen wird.

### Modul-Namensraum-Objekt

Ein _Modul-Namensraum-Objekt_ ist ein Objekt, das alle Exporte eines Moduls beschreibt. Es ist ein statisches Objekt, das erstellt wird, wenn das Modul ausgewertet wird. Es gibt zwei Möglichkeiten, auf das Modul-Namensraum-Objekt eines Moduls zuzugreifen: über einen [Namensraum-Import](/de/docs/Web/JavaScript/Reference/Statements/import#namespace_import) (`import * as name from moduleName`), oder über den Erfüllungswert eines dynamischen Imports.

Das Modul-Namensraum-Objekt ist ein [versiegeltes](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed) Objekt mit [`null`-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects). Das bedeutet, dass alle String-Schlüssel des Objekts den Exporten des Moduls entsprechen und es niemals zusätzliche Schlüssel gibt. Alle Schlüssel sind [enumerierbar](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) in lexikografischer Reihenfolge (d.h. das Standardverhalten von [`Array.prototype.sort()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description)), wobei der Standardexport als Schlüssel `default` verfügbar ist. Zusätzlich hat das Modul-Namensraum-Objekt eine [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft mit dem Wert `"Module"`, die in {{jsxref("Object.prototype.toString()")}} verwendet wird.

Die String-Eigenschaften sind nicht konfigurierbar und schreibbar, wenn Sie {{jsxref("Object.getOwnPropertyDescriptors()")}} verwenden, um deren Deskriptoren zu erhalten. Sie sind jedoch faktisch schreibgeschützt, da Sie einer Eigenschaft keinen neuen Wert zuweisen können. Dieses Verhalten spiegelt wider, dass statische Importe "[dynamische Bindungen](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter)" erstellen — die Werte können vom Modul, das sie exportiert, neu zugewiesen werden, aber nicht vom Modul, das sie importiert. Die Schreibbarkeit der Eigenschaften spiegelt die Möglichkeit wider, dass sich die Werte ändern, weil nicht konfigurierbare und nicht schreibbare Eigenschaften konstant sein müssen. Zum Beispiel können Sie den exportierten Wert einer Variablen neu zuweisen, und der neue Wert kann im Modul-Namensraum-Objekt beobachtet werden.

Jeder (normalisierte) Modulbezeichner entspricht einem einzigartigen Modul-Namensraum-Objekt, sodass das Folgende im Allgemeinen zutrifft:

```js
import * as mod from "/my-module.js";

import("/my-module.js").then((mod2) => {
  console.log(mod === mod2); // true
});
```

Außer in einem kuriosen Fall: Weil ein Promise niemals zu einem [thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) führt, wird die Funktion, die `then()` heißt und von `my-module.js` exportiert wird, automatisch aufgerufen, wenn das Promise des dynamischen Imports erfüllt wird, als Teil des [Auflösungsprozesses von Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#the_resolve_function).

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
> Exportieren Sie keine Funktion, die `then()` heißt, aus einem Modul. Dies wird dazu führen, dass das Modul bei dynamischem Import anders funktioniert als bei statischem Import.

Dieses aggressive Caching stellt sicher, dass ein Stück JavaScript-Code niemals mehr als einmal ausgeführt wird, selbst wenn es mehrfach importiert wird. Zukünftige Importe lösen nicht einmal HTTP-Anfragen oder Dateizugriffe aus. Wenn Sie ein Modul erneut importieren und auswerten müssen, ohne die gesamte JavaScript-Umgebung neu zu starten, ist ein möglicher Trick, einen einzigartigen Query-Parameter im Modul-Bezeichner zu verwenden. Dies funktioniert auch in Nicht-Browser-Laufzeiten, die URL-Bezeichner unterstützen.

```js
import(`/my-module.js?t=${Date.now()}`);
```

Beachten Sie, dass dies in einer lang laufenden Anwendung zu Speicherlecks führen kann, da die Engine keine Modul-Namensraum-Objekte sicher als Müll abführen kann. Derzeit gibt es keine Möglichkeit, den Cache von Modul-Namensraum-Objekten manuell zu leeren.

Sie können auch die [Fetch API](/de/docs/Web/API/Fetch_API) verwenden, um den Modulquellcode als Text abzurufen und das Modul dann abhängig vom Modultyp manuell auszuwerten:

- Für JavaScript-Module können Sie den Quellcode dynamisch als [`blob:` URL](/de/docs/Web/API/URL/createObjectURL_static) in Browsern importieren oder [`vm.Module`](https://nodejs.org/docs/latest/api/vm.html#class-vmmodule) verwenden, um es in Node.js auszuwerten.
- Für JSON-Module können Sie den Quellcode mit {{jsxref("JSON.parse()")}} parsen.
- Für CSS-Module können Sie ein neues [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt erstellen und dessen [`replace()`](/de/docs/Web/API/CSSStyleSheet/replace)-Methode verwenden, um es mit dem Quellcode zu befüllen.

Dies ist jedoch semantisch nicht dasselbe wie der dynamische Import, da Einstellungen des Benutzeragenten wie [fetch destination](/de/docs/Web/API/Request/destination), [CSP](/de/docs/Web/HTTP/Guides/CSP) oder [Modulauflösung](/de/docs/Web/JavaScript/Reference/Operators/import.meta/resolve) möglicherweise nicht korrekt angewendet werden.

Das Caching von Modul-Namensraum-Objekten gilt nur für Module, die _erfolgreich_ geladen und verlinkt sind. Ein Modul wird in drei Schritten importiert: Laden (Abrufen des Moduls), Verlinken (hauptsächlich, Parsen des Moduls) und Auswerten (Ausführen des geparsten Codes). Nur Auswertungsfehler werden zwischengespeichert; wenn das Laden oder Verlinken eines Moduls fehlschlägt, kann der nächste Import versuchen, das Modul erneut zu laden und zu verlinken. Der Browser kann das Ergebnis der Abrufoperation möglicherweise zwischenspeichern oder auch nicht, aber er sollte den typischen HTTP-Semantiken folgen, sodass die Behandlung solcher Netzwerkfehler sich nicht von der Behandlung von [`fetch()`](/de/docs/Web/API/Window/fetch)-Fehlern unterscheiden sollte.

## Beispiele

### Importieren eines Moduls nur für seine Nebeneffekte

```js
(async () => {
  if (somethingIsTrue) {
    // import module for side effects
    await import("/modules/my-module.js");
  }
})();
```

Wenn Ihr Projekt Pakete verwendet, die ESM exportieren, können Sie diese auch nur für Nebeneffekte importieren. Dies wird den Code in der Einstiegspunkt-Datei des Pakets (und allen Dateien, die es importiert) nur ausführen.

### Import von Standards

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

### Importieren auf Abruf als Reaktion auf eine Benutzeraktion

Dieses Beispiel zeigt, wie man Funktionalität auf eine Seite je nach Benutzeraktion, in diesem Fall einem Knopfdruck, lädt und dann eine Funktion innerhalb dieses Moduls aufruft. Dies ist nicht die einzige Möglichkeit, diese Funktionalität zu implementieren. Die `import()`-Funktion unterstützt auch `await`.

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

In Prozessen wie serverseitigem Rendering müssen Sie möglicherweise verschiedene Logik auf dem Server oder im Browser laden, da sie mit unterschiedlichen globalen Objekten oder Modulen interagieren (zum Beispiel hat Browsercode Zugriff auf Web-APIs wie `document` und `navigator`, während Servercode Zugriff auf das Dateisystem des Servers hat). Dies können Sie über einen bedingten dynamischen Import tun.

```js
let myModule;

if (typeof window === "undefined") {
  myModule = await import("module-used-on-server");
} else {
  myModule = await import("module-used-in-browser");
}
```

### Importieren von Modulen mit einem nicht-literalen Bezeichner

Dynamische Importe erlauben jeden Ausdruck als Modulbezeichner, nicht notwendigerweise String-Literale.

Hier laden wir 10 Module, `/modules/module-0.js`, `/modules/module-1.js` usw., gleichzeitig und rufen die `load`-Funktionen auf, die jedes davon exportiert.

```js
Promise.all(
  Array.from({ length: 10 }).map(
    (_, index) => import(`/modules/module-${index}.js`),
  ),
).then((modules) => modules.forEach((module) => module.load()));
```

### Verwenden von Importeigenschaften mit dynamischem Import

[Importeigenschaften](/de/docs/Web/JavaScript/Reference/Statements/import/with) werden als zweiter Parameter der `import()`-Syntax akzeptiert.

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
