---
title: import()
slug: Web/JavaScript/Reference/Operators/import
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("Operators")}}

Die **`import()`**-Syntax, oft als _dynamischer Import_ bezeichnet, ist ein funktionsähnlicher Ausdruck, der das asynchrone und dynamische Laden eines ECMAScript-Moduls in eine möglicherweise nicht-modulare Umgebung ermöglicht.

Im Gegensatz zum [deklarationsbasierten Gegenstück](/de/docs/Web/JavaScript/Reference/Statements/import) werden dynamische Importe nur bei Bedarf ausgewertet und ermöglichen größere syntaktische Flexibilität.

## Syntax

```js-nolint
import(moduleName)
import(moduleName, options)
```

Der Aufruf `import()` ist eine Syntax, die einem Funktionsaufruf ähnelt, aber `import` selbst ist ein Schlüsselwort, keine Funktion. Sie können es nicht aliasieren wie `const myImport = import`, was einen {{jsxref("SyntaxError")}} auslösen wird.

[Nachkommata](/de/docs/Web/JavaScript/Reference/Trailing_commas) sind nur erlaubt, wenn die Laufzeit auch `options` unterstützt. Überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität).

### Parameter

- `moduleName`
  - : Das Modul, aus dem importiert werden soll. Die Auswertung des Bezeichners ist vom Host festgelegt, folgt aber immer dem gleichen Algorithmus wie statische [Import-Deklarationen](/de/docs/Web/JavaScript/Reference/Statements/import).
- `options`
  - : Ein Objekt, das Importoptionen enthält. Der folgende Schlüssel wird erkannt:
    - `with`
      - : Die [Import-Attribute](/de/docs/Web/JavaScript/Reference/Statements/import/with).

### Rückgabewert

Gibt ein Promise zurück, das:

- Wenn das referenzierte Modul erfolgreich geladen und ausgewertet wird, zu einem [Modul-Namensraum-Objekt](#modul-namensraum-objekt) erfüllt wird: ein Objekt, das alle Exporte aus `moduleName` enthält.
- Wenn die [Umwandlung in einen String](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) von `moduleName` einen Fehler auslöst, mit dem ausgelösten Fehler abgelehnt wird.
- Wenn das Modulabrufen und -laden aus irgendeinem Grund fehlschlägt, mit einem implementierungsdefinierten Fehler abgelehnt wird (Node verwendet einen generischen `Error`, während alle Browser `TypeError` verwenden). Häufige Ursachen können sein:
  - In einem dateibasierten Modulsystem (z.B. Node.js), wenn der Zugriff auf das Dateisystem fehlschlägt (Berechtigung verweigert, Datei nicht gefunden usw.).
  - In einem webbasierten Modulsystem (z.B. Browser), wenn die Netzwerkabfrage fehlschlägt (keine Internetverbindung, CORS-Problem usw.) oder ein HTTP-Fehler auftritt (404, 500 usw.).
- Wenn die Auswertung des referenzierten Moduls einen Fehler auslöst, mit dem ausgelösten Fehler abgelehnt wird.

> **Note:** `import()` löst niemals synchron einen Fehler aus.

## Beschreibung

Die Import-Deklarationssyntax (`import something from "somewhere"`) ist statisch und führt immer dazu, dass das importierte Modul zur Ladezeit ausgewertet wird. Dynamische Importe ermöglichen es, die syntaktische Starre von Import-Deklarationen zu umgehen und ein Modul bedingt oder nach Bedarf zu laden. Einige Gründe, warum Sie dynamische Importe verwenden könnten:

- Wenn das statische Importieren das Laden Ihres Codes erheblich verlangsamt oder den Speicherverbrauch Ihres Programms erhöht und die Wahrscheinlichkeit gering ist, dass Sie den importierten Code benötigen oder ihn erst zu einem späteren Zeitpunkt benötigen.
- Wenn das zu importierende Modul zur Ladezeit nicht existiert.
- Wenn der Importbezeichner-String dynamisch konstruiert werden muss. (Statische Importe unterstützen nur statische Bezeichner.)
- Wenn das zu importierende Modul Seiteneffekte hat und Sie diese Seiteneffekte nur haben möchten, wenn eine bestimmte Bedingung wahr ist. (Es wird empfohlen, keine Seiteneffekte in einem Modul zu haben, aber manchmal können Sie dies in Ihren Modulabhängigkeiten nicht steuern.)
- Wenn Sie sich in einer nicht-modularen Umgebung befinden (z.B. `eval` oder eine Skriptdatei).

Verwenden Sie dynamische Importe nur, wenn nötig. Die statische Form ist vorzuziehen, um initiale Abhängigkeiten zu laden, und kann besser von statischen Analysetools und {{Glossary("Tree_shaking", "Tree Shaking")}} profitieren.

Wenn Ihre Datei nicht als Modul ausgeführt wird (wenn sie in einer HTML-Datei referenziert wird, muss das Skript-Tag `type="module"` haben), können Sie keine statischen Importdeklarationen verwenden. Andererseits ist die asynchrone dynamische Import-Syntax immer verfügbar und ermöglicht das Importieren von Modulen in Nicht-Modulumgebungen.

Der `options`-Parameter ermöglicht unterschiedliche Importoptionen. Zum Beispiel [Import-Attribute](/de/docs/Web/JavaScript/Reference/Statements/import/with):

```js
import("./data.json", { with: { type: "json" } });
```

Dynamischer Modulimport ist nicht in allen Ausführungskontexten erlaubt. Zum Beispiel kann `import()` im Hauptthread, einem Shared Worker oder einem Dedicated Worker verwendet werden, wird jedoch einen Fehler auslösen, wenn er innerhalb eines [Service Workers](/de/docs/Web/API/Service_Worker_API) oder eines [Worklets](/de/docs/Web/API/Worklet) aufgerufen wird.

### Modul-Namensraum-Objekt

Ein _Modul-Namensraum-Objekt_ ist ein Objekt, das alle Exporte eines Moduls beschreibt. Es ist ein statisches Objekt, das erstellt wird, wenn das Modul ausgewertet wird. Es gibt zwei Möglichkeiten, auf das Modul-Namensraum-Objekt eines Moduls zuzugreifen: durch einen [Namespace-Import](/de/docs/Web/JavaScript/Reference/Statements/import#namespace_import) (`import * as name from moduleName`), oder durch den Erfüllungswert eines dynamischen Imports.

Das Modul-Namensraum-Objekt ist ein [versiegeltes](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed) Objekt mit [`null` Prototype](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects). Das bedeutet, dass alle String-Schlüssel des Objekts den Exporten des Moduls entsprechen und es niemals zusätzliche Schlüssel gibt. Alle Schlüssel sind [enumerierbar](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) in lexikografischer Reihenfolge (d.h. das Standardverhalten von [`Array.prototype.sort()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description)), wobei der Standardexport als Schlüssel `default` verfügbar ist. Zusätzlich hat das Modul-Namensraum-Objekt eine [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft mit dem Wert `"Module"`, der in {{jsxref("Object.prototype.toString()")}} verwendet wird.

Die String-Eigenschaften sind nicht konfigurierbar und schreibbar, wenn Sie {{jsxref("Object.getOwnPropertyDescriptors()")}} verwenden, um ihre Deskriptoren zu erhalten. Sie sind jedoch effektiv schreibgeschützt, da Sie einer Eigenschaft keinen neuen Wert zuweisen können. Dieses Verhalten spiegelt wider, dass statische Importe "lebende Bindungen" erzeugen – die Werte können durch das Modul, das sie exportiert, neu zugewiesen werden, aber nicht durch das Modul, das sie importiert. Die Schreibbarkeit der Eigenschaften spiegelt die Möglichkeit wider, dass sich die Werte ändern, weil nicht konfigurierbare und nicht schreibbare Eigenschaften konstant sein müssen. Zum Beispiel können Sie den exportierten Wert einer Variablen neu zuweisen, und der neue Wert kann im Modul-Namensraum-Objekt beobachtet werden.

Jeder (normalisierte) Modul-Bezeichner entspricht einem eindeutigen Modul-Namensraum-Objekt, sodass Folgendes im Allgemeinen zutrifft:

```js
import * as mod from "/my-module.js";

import("/my-module.js").then((mod2) => {
  console.log(mod === mod2); // true
});
```

Bis auf einen kuriosen Fall: Da ein Promise sich niemals zu einem [thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) erfüllt, wenn das Modul `my-module.js` eine Funktion namens `then()` exportiert, wird diese Funktion automatisch aufgerufen, wenn das Promise des dynamischen Imports erfüllt wird, als Teil des [Promise-Auflösungs](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#the_resolve_function)prozesses.

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

Dieses aggressive Caching stellt sicher, dass ein Stück JavaScript-Code niemals mehr als einmal ausgeführt wird, selbst wenn es mehrmals importiert wird. Zukünftige Importe führen nicht einmal zu HTTP-Anfragen oder Festplattenzugriff. Wenn Sie ein Modul neu importieren und neu auswerten müssen, ohne die gesamte JavaScript-Umgebung neu zu starten, ist ein möglicher Trick, einen eindeutigen Abfrageparameter im Modulspezifizierer zu verwenden. Dies funktioniert auch in Nicht-Browser-Laufzeiten, die URL-Spezifizierer unterstützen.

```js
import("/my-module.js?t=" + Date.now());
```

Beachten Sie, dass dies in einer langlaufenden Anwendung zu Speicherlecks führen kann, da die Engine keine Modul-Namensraum-Objekte sicher aus dem Speicher entfernen kann. Derzeit gibt es keine Möglichkeit, den Cache von Modul-Namensraum-Objekten manuell zu leeren.

Das Caching von Modul-Namensraum-Objekten gilt nur für Module, die erfolgreich geladen und verknüpft werden. Ein Modul wird in drei Schritten importiert: Laden (das Modul abrufen), Verknüpfen (hauptsächlich das Modul parsen) und Auswerten (den geparsten Code ausführen). Nur Auswertungsfehler werden zwischengespeichert; wenn es einem Modul nicht gelingt zu laden oder zu verknüpfen, kann der nächste Import versuchen, das Modul erneut zu laden und zu verknüpfen. Der Browser kann das Ergebnis des Abrufvorgangs zwischenspeichern oder nicht, aber er sollte den typischen HTTP-Semantiken folgen, daher sollte das Behandeln solcher Netzwerkfehler sich nicht von der Behandlung von [`fetch()`](/de/docs/Web/API/Window/fetch) Fehlern unterscheiden.

## Beispiele

### Import eines Moduls nur wegen seiner Seiteneffekte

```js
(async () => {
  if (somethingIsTrue) {
    // import module for side effects
    await import("/modules/my-module.js");
  }
})();
```

Wenn Ihr Projekt Pakete verwendet, die ESM exportieren, können Sie diese auch nur wegen ihrer Seiteneffekte importieren. Dies führt dazu, dass der Code in der Paket-Einstiegspunktdatei (und jeder von dieser importierten Datei) nur ausgeführt wird.

### Import von Standardwerten

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

### Import bei Bedarf als Reaktion auf Benutzeraktionen

Dieses Beispiel zeigt, wie man Funktionalität auf eine Seite basierend auf einer Benutzeraktion lädt, in diesem Fall ein Button-Klick, und dann eine Funktion in diesem Modul aufruft. Dies ist nicht die einzige Möglichkeit, diese Funktionalität zu implementieren. Die `import()`-Funktion unterstützt auch `await`.

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

### Import unterschiedlicher Module basierend auf der Umgebung

In Prozessen wie serverseitigem Rendering müssen Sie möglicherweise unterschiedliche Logik auf Server oder im Browser laden, da sie mit unterschiedlichen globalen oder Modulen interagieren (zum Beispiel hat Browser-Code Zugriff auf Web-APIs wie `document` und `navigator`, während Server-Code Zugriff auf das Dateisystem des Servers hat). Sie können dies durch einen bedingten dynamischen Import tun.

```js
let myModule;

if (typeof window === "undefined") {
  myModule = await import("module-used-on-server");
} else {
  myModule = await import("module-used-in-browser");
}
```

### Import von Modulen mit einem nicht-literalen Bezeichner

Dynamische Importe erlauben jeden Ausdruck als Modulspezifizierer, nicht unbedingt String-Literale.

Hier laden wir 10 Module, `/modules/module-0.js`, `/modules/module-1.js` usw., gleichzeitig und rufen die `load`-Funktionen auf, die jedes exportiert.

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
