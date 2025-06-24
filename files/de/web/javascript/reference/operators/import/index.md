---
title: import()
slug: Web/JavaScript/Reference/Operators/import
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{jsSidebar("Operators")}}

Die **`import()`**-Syntax, die allgemein als _dynamischer Import_ bezeichnet wird, ist ein ausdrucksähnlicher Befehl, der es ermöglicht, ein ECMAScript-Modul asynchron und dynamisch in eine möglicherweise nicht-modulare Umgebung zu laden.

Im Gegensatz zum [deklarativen Gegenstück](/de/docs/Web/JavaScript/Reference/Statements/import) werden dynamische Importe nur bei Bedarf ausgewertet und ermöglichen eine größere syntaktische Flexibilität.

## Syntax

```js-nolint
import(moduleName)
import(moduleName, options)
```

Der Aufruf von `import()` ist eine Syntax, die einem Funktionsaufruf ähnelt, aber `import` selbst ist ein Schlüsselwort, keine Funktion. Sie können es nicht mit `const myImport = import` umbenennen, was einen {{jsxref("SyntaxError")}} auslöst.

[Kommas am Ende](/de/docs/Web/JavaScript/Reference/Trailing_commas) sind nur erlaubt, wenn die Laufzeit auch `options` unterstützt. Prüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität).

### Parameter

- `moduleName`
  - : Das Modul, aus dem importiert werden soll. Die Auswertung des Bezeichners ist host-spezifisch, folgt aber immer demselben Algorithmus wie statische [Importdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/import).
- `options`
  - : Ein Objekt, das Importoptionen enthält. Der folgende Schlüssel wird erkannt:
    - `with`
      - : Die [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with).

### Rückgabewert

Gibt ein Promise zurück, das:

- Falls das referenzierte Modul erfolgreich geladen und ausgewertet wird, erfüllt es sich zu einem [Module-Namespace-Objekt](#modul-namensraum-objekt): ein Objekt, das alle Exporte von `moduleName` enthält.
- Falls die [Umwandlung in einen String](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) von `moduleName` einen Fehler auslöst, wird es mit dem ausgelösten Fehler abgelehnt.
- Falls das Abrufen und Laden des Moduls aus irgendeinem Grund fehlschlägt, wird es mit einem implementationsspezifischen Fehler (Node verwendet einen generischen `Error`, während alle Browser `TypeError` verwenden) abgelehnt. Häufige Ursachen können sein:
  - In einem Dateisystem-basierten Modulsystem (zum Beispiel Node.js), wenn der Zugriff auf das Dateisystem fehlschlägt (Berechtigung abgelehnt, Datei nicht gefunden, usw.).
  - In einem webbasierten Modulsystem (zum Beispiel Browser), wenn die Netzwerkanfrage fehlschlägt (nicht mit dem Internet verbunden, CORS-Problem, usw.) oder ein HTTP-Fehler auftritt (404, 500, usw.).
- Wenn die Auswertung des referenzierten Moduls einen Fehler auslöst, wird es mit dem ausgelösten Fehler abgelehnt.

> [!NOTE] > `import()` wirft niemals synchron einen Fehler.

## Beschreibung

Die Importdeklarationssyntax (`import something from "somewhere"`) ist statisch und wird immer dazu führen, dass das importierte Modul zur Ladezeit ausgewertet wird. Dynamische Importe ermöglichen es, die syntaktische Strenge von Importdeklarationen zu umgehen und ein Modul bedingt oder nach Bedarf zu laden. Folgende Gründe könnten für die Nutzung des dynamischen Imports sprechen:

- Wenn ein statischer Import das Laden Ihres Codes erheblich verlangsamt oder den Speicherverbrauch Ihres Programms erhöht, und es ist unwahrscheinlich, dass Sie den importierten Code benötigen, oder Sie benötigen ihn erst zu einem späteren Zeitpunkt.
- Wenn das Modul, das Sie importieren, zur Ladezeit nicht existiert.
- Wenn der Importbezeichner-String dynamisch konstruiert werden muss. (Statische Importe unterstützen nur statische Bezeichner.)
- Wenn das zu importierende Modul Nebenwirkungen hat und Sie diese nur unter bestimmten Bedingungen wünschen. (Es wird empfohlen, keine Nebenwirkungen in einem Modul zu haben, aber manchmal lässt sich dies in Ihren Modulabhängigkeiten nicht kontrollieren.)
- Wenn Sie sich in einer nicht-modularen Umgebung befinden (zum Beispiel `eval` oder eine Skriptdatei).

Verwenden Sie dynamische Importe nur bei Bedarf. Die statische Form ist vorzuziehen, um anfängliche Abhängigkeiten zu laden, und kann besser von statischen Analysetools und {{Glossary("Tree_shaking", "Tree Shaking")}} profitieren.

Wenn Ihre Datei nicht als Modul ausgeführt wird (wenn sie in einer HTML-Datei referenziert wird, muss das Skript-Tag `type="module"` haben), können Sie keine statischen Importdeklarationen verwenden. Andererseits ist die asynchrone dynamische Import-Syntax immer verfügbar, sodass Sie Module in nicht-modularen Umgebungen importieren können.

Der `options`-Parameter ermöglicht verschiedene Arten von Importoptionen. Zum Beispiel [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with):

```js
import("./data.json", { with: { type: "json" } });
```

Der dynamische Modulimport ist nicht in allen Ausführungskontexten erlaubt.
Zum Beispiel kann `import()` im Hauptthread, einem geteilten Worker oder einem dedizierten Worker verwendet werden, wird jedoch ausgelöst, wenn es innerhalb eines [Service Workers](/de/docs/Web/API/Service_Worker_API) oder eines [Worklets](/de/docs/Web/API/Worklet) aufgerufen wird.

### Modul-Namensraum-Objekt

Ein _Modul-Namensraum-Objekt_ ist ein Objekt, das alle Exporte eines Moduls beschreibt. Es ist ein statisches Objekt, das bei der Auswertung des Moduls erstellt wird. Es gibt zwei Möglichkeiten, auf das Modul-Namensraum-Objekt eines Moduls zuzugreifen: durch einen [Namensraum-Import](/de/docs/Web/JavaScript/Reference/Statements/import#namespace_import) (`import * as name from moduleName`) oder durch den Erfüllungswert eines dynamischen Imports.

Das Modul-Namensraum-Objekt ist ein [versiegeltes](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed) Objekt mit [`null`-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects). Das bedeutet, dass alle String-Schlüssel des Objekts den Exporten des Moduls entsprechen und es niemals zusätzliche Schlüssel gibt. Alle Schlüssel sind [zählbar](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) in lexikografischer Reihenfolge (d.h. das Standardverhalten von [`Array.prototype.sort()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description)), wobei der Standardexport als Schlüssel `default` verfügbar ist. Zusätzlich hat das Modul-Namensraum-Objekt eine [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft mit dem Wert `"Module"`, der in {{jsxref("Object.prototype.toString()")}} verwendet wird.

Die String-Eigenschaften sind nicht konfigurierbar und schreibbar, wenn Sie {{jsxref("Object.getOwnPropertyDescriptors()")}} verwenden, um ihre Deskriptoren zu erhalten. Sie sind jedoch effektiv schreibgeschützt, da Sie einer Eigenschaft keinen neuen Wert zuweisen können. Dieses Verhalten spiegelt die Tatsache wider, dass statische Importe "[Live-Bindungen](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter)" erstellen — die Werte können vom Modul, das sie exportiert, neu zugewiesen werden, jedoch nicht vom Modul, das sie importiert. Die Schreibbarkeit der Eigenschaften spiegelt die Möglichkeit wider, dass sich die Werte ändern können, da nicht konfigurierbare und nicht schreibbare Eigenschaften konstant sein müssen. Zum Beispiel können Sie den exportierten Wert einer Variablen neu zuweisen, und der neue Wert kann im Modul-Namensraum-Objekt beobachtet werden.

Jeder (normalisierte) Modulspezifizierer entspricht einem eindeutigen Modul-Namensraum-Objekt, sodass Folgendes im Allgemeinen zutrifft:

```js
import * as mod from "/my-module.js";

import("/my-module.js").then((mod2) => {
  console.log(mod === mod2); // true
});
```

Außer in einem kuriosen Fall: Da ein Promise niemals auf ein [thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) gestellt wird, wird die Funktion `then()`, wenn das `my-module.js`-Modul eine solche exportiert, automatisch aufgerufen, wenn das Promise des dynamischen Imports erfüllt wird, als Teil des [Promise-Resolution](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#the_resolve_function)-Prozesses.

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
> Exportieren Sie keine Funktion namens `then()` aus einem Modul. Dies führt dazu, dass sich das Modul bei dynamischem Import anders verhält als bei statischem Import.

Dieses aggressive Caching stellt sicher, dass ein Stück JavaScript-Code niemals mehr als einmal ausgeführt wird, selbst wenn er mehrfach importiert wird. Zukünftige Importe führen nicht einmal zu HTTP-Anfragen oder Festplattenzugriff. Wenn Sie ein Modul neu importieren und neu auswerten müssen, ohne die gesamte JavaScript-Umgebung neu zu starten, besteht ein möglicher Trick darin, einen eindeutigen Abfrageparameter im Modulspezifizierer zu verwenden. Dies funktioniert auch in Nicht-Browser-Laufzeiten, die URL-Spezifizierer unterstützen.

```js
import(`/my-module.js?t=${Date.now()}`);
```

Beachten Sie, dass dies in einer lang laufenden Anwendung zu Speicherlecks führen kann, da die Engine keine Modul-Namensraum-Objekte sicher abfangen kann. Derzeit gibt es keine Möglichkeit, den Cache von Modul-Namensraum-Objekten manuell zu löschen.

Das Caching von Modul-Namensraum-Objekten gilt nur für Module, die _erfolgreich_ geladen und verknüpft sind. Ein Modul wird in drei Schritten importiert: Laden (Abrufen des Moduls), Verknüpfen (hauptsächlich Parsen des Moduls) und Auswerten (Ausführen des geparsten Codes). Nur Auswertungsfehler werden zwischengespeichert; wenn ein Modul nicht geladen oder verknüpft werden kann, wird beim nächsten Import möglicherweise versucht, das Modul erneut zu laden und zu verknüpfen. Der Browser kann das Ergebnis des Abrufvorgangs zwischenspeichern oder nicht, sollte jedoch typischen HTTP-Semantiken folgen, sodass die Behandlung solcher Netzwerkfehler nicht anders sein sollte als die Behandlung von [`fetch()`](/de/docs/Web/API/Window/fetch)-Fehlern.

## Beispiele

### Import eines Moduls nur für seine Nebeneffekte

```js
(async () => {
  if (somethingIsTrue) {
    // import module for side effects
    await import("/modules/my-module.js");
  }
})();
```

Wenn Ihr Projekt Pakete verwendet, die ESM exportieren, können Sie diese auch nur für Nebeneffekte importieren. Dies führt dazu, dass der Code in der Einstiegspunktsdatei des Pakets (und in allen Dateien, die es importiert) nur ausgeführt wird.

### Standardimports

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

Dieses Beispiel zeigt, wie Funktionalität auf eine Seite basierend auf einer Benutzeraktion geladen wird, in diesem Fall ein Button-Klick, und dann eine Funktion innerhalb dieses Moduls aufgerufen wird. Dies ist nicht der einzige Weg, um diese Funktionalität zu implementieren. Die `import()`-Funktion unterstützt auch `await`.

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

In Prozessen wie dem serverseitigen Rendering müssen Sie möglicherweise unterschiedliche Logik auf dem Server oder im Browser laden, da sie mit unterschiedlichen Globals oder Modulen interagieren (zum Beispiel hat Browser-Code Zugriff auf Web-APIs wie `document` und `navigator`, während Server-Code Zugriff auf das Server-Dateisystem hat). Sie können dies durch einen bedingten dynamischen Import tun.

```js
let myModule;

if (typeof window === "undefined") {
  myModule = await import("module-used-on-server");
} else {
  myModule = await import("module-used-in-browser");
}
```

### Import von Modulen mit einem nicht-literalen Bezeichner

Dynamische Importe ermöglichen jeden Ausdruck als Modulspezifizierer, nicht unbedingt String-Literale.

Hier laden wir 10 Module, `/modules/module-0.js`, `/modules/module-1.js`, usw., gleichzeitig und rufen die `load`-Funktionen auf, die jedes einzelne exportiert.

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
