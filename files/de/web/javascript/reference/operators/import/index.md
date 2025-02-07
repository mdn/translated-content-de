---
title: import()
slug: Web/JavaScript/Reference/Operators/import
l10n:
  sourceCommit: fcae9d0fa0a1133b2ac7026d364ec9265d769e73
---

{{jsSidebar("Operators")}}

Die **`import()`**-Syntax, häufig als _dynamic import_ bezeichnet, ist ein ausdrucksähnlicher Mechanismus, der es ermöglicht, ein ECMAScript-Modul asynchron und dynamisch in eine potenziell nicht modulfähige Umgebung zu laden.

Im Gegensatz zu ihrem [deklarativen Pendant](/de/docs/Web/JavaScript/Reference/Statements/import) werden dynamische Importe nur bei Bedarf ausgewertet und ermöglichen eine größere syntaktische Flexibilität.

## Syntax

```js-nolint
import(moduleName)
import(moduleName, options)
```

Der `import()`-Aufruf ähnelt syntaktisch einem Funktionsaufruf, aber `import` selbst ist ein Schlüsselwort und keine Funktion. Es kann nicht umbenannt werden, wie `const myImport = import`, da dies einen {{jsxref("SyntaxError")}} verursachen würde.

[Abschließende Kommata](/de/docs/Web/JavaScript/Reference/Trailing_commas) sind nur zulässig, wenn die Laufzeit auch `options` unterstützt. Siehe [Browser-Kompatibilität](#browser-kompatibilität).

### Parameter

- `moduleName`
  - : Das Modul, aus dem importiert wird. Die Bewertung des Bezeichners ist systemspezifisch, folgt jedoch immer demselben Algorithmus wie bei statischen [Import-Deklarationen](/de/docs/Web/JavaScript/Reference/Statements/import).
- `options`
  - : Ein Objekt, das Importoptionen enthält. Der folgende Schlüssel wird erkannt:
    - `with`
      - : Die [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with).

### Rückgabewert

Gibt ein Promise zurück, das:

- Wenn das referenzierte Modul erfolgreich geladen und ausgewertet wird, wird es auf ein [Modul-Namespace-Objekt](#modul-namespace-objekt) aufgelöst: ein Objekt, das alle Exporte von `moduleName` enthält.
- Wenn die [Umwandlung in einen String](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) von `moduleName` fehlschlägt, wird es mit dem ausgelösten Fehler abgelehnt.
- Wenn das Laden und Abrufen des Moduls aus irgendeinem Grund fehlschlägt, wird es mit einem implementationsspezifischen Fehler abgelehnt (Node verwendet einen generischen `Error`, während alle Browser einen `TypeError` verwenden). Häufige Ursachen können sein:
  - In einem dateisystembasierten Modulsystem (z.B. Node.js), wenn der Zugriff auf das Dateisystem fehlschlägt (Berechtigungen verweigert, Datei nicht gefunden etc.).
  - In einem webbasierten Modulsystem (z.B. Browser), wenn die Netzwerkabfrage fehlschlägt (keine Internetverbindung, CORS-Problem usw.) oder ein HTTP-Fehler auftritt (404, 500, usw.).
- Wenn die Auswertung des referenzierten Moduls einen Fehler auslöst, wird es mit dem ausgelösten Fehler abgelehnt.

> **Hinweis:** `import()` löst niemals synchron einen Fehler aus.

## Beschreibung

Die Import-Deklarationssyntax (`import something from "somewhere"`) ist statisch und führt stets dazu, dass das importierte Modul zur Ladezeit ausgewertet wird. Dynamische Importe ermöglichen es, die syntaktische Strenge von Import-Deklarationen zu umgehen und ein Modul bedingt oder bei Bedarf zu laden. Folgende Gründe können für die Nutzung von dynamischem Import sprechen:

- Wenn statisches Importieren das Laden Ihres Codes erheblich verlangsamt oder den Speicherverbrauch Ihres Programms erhöht und es unwahrscheinlich ist, dass der importierte Code benötigt wird, oder dieser erst zu einem späteren Zeitpunkt benötigt wird.
- Wenn das Modul, das Sie laden möchten, zur Ladezeit nicht existiert.
- Wenn der Importbezeichner dynamisch zusammengesetzt werden muss. (Statischer Import unterstützt nur statische Bezeichner.)
- Wenn das importierte Modul Nebeneffekte hat, die Sie nur unter bestimmten Bedingungen auslösen möchten. (Es wird empfohlen, möglichst keine Nebeneffekte in einem Modul zu haben, aber dies lässt sich nicht immer in Ihren Moduldepenzen kontrollieren.)
- Wenn Sie sich in einer Nicht-Modul-Umgebung befinden (z.B. `eval` oder eine Script-Datei).

Nutzen Sie dynamischen Import nur, wenn nötig. Die statische Form ist vorzuziehen, um anfängliche Abhängigkeiten zu laden, und profitiert stärker von statischen Analysetools und {{Glossary("Tree_shaking", "Tree Shaking")}}.

Wenn Ihre Datei nicht als Modul ausgeführt wird (wenn sie in einer HTML-Datei referenziert wird, muss das `script`-Tag `type="module"` enthalten), können Sie keine statischen Import-Deklarationen verwenden. Andererseits ist die asynchrone dynamische Import-Syntax immer verfügbar, wodurch Sie Module in Nicht-Modul-Umgebungen importieren können.

Der Parameter `options` ermöglicht verschiedene Arten von Importoptionen. Beispielsweise [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with):

```js
import("./data.json", { with: { type: "json" } });
```

Dynamisches Modulimportieren ist nicht in allen Ausführungskontexten zulässig.
Beispielsweise kann `import()` im Haupt-Thread, in einem gemeinsam genutzten Worker oder einem dedizierten Worker verwendet werden, löst jedoch einen Fehler aus, wenn es innerhalb eines [Service Workers](/de/docs/Web/API/Service_Worker_API) oder eines [Worklets](/de/docs/Web/API/Worklet) aufgerufen wird.

### Modul-Namespace-Objekt

Ein _Modul-Namespace-Objekt_ ist ein Objekt, das alle Exporte eines Moduls beschreibt. Es ist ein statisches Objekt, das erstellt wird, wenn das Modul ausgewertet wird. Es gibt zwei Möglichkeiten, auf das Modul-Namespace-Objekt eines Moduls zuzugreifen: durch einen [Namespace-Import](/de/docs/Web/JavaScript/Reference/Statements/import#namespace_import) (`import * as name from moduleName`) oder durch den Fulfillment-Wert eines dynamischen Imports.

Das Modul-Namespace-Objekt ist ein [versiegeltes](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed) Objekt mit [`null`-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects). Dies bedeutet, dass alle String-Schlüssel des Objekts den Exporten des Moduls entsprechen und es niemals zusätzliche Schlüssel gibt. Alle Schlüssel sind in lexikografischer Reihenfolge [durchlauforientierbar/enumerable](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) (d.h. das Standardverhalten von [`Array.prototype.sort()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description)), wobei der Standard-Export als ein Schlüssel namens `default` verfügbar ist. Zusätzlich hat das Modul-Namespace-Objekt eine [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft mit dem Wert `"Module"`, welche in {{jsxref("Object.prototype.toString()")}} verwendet wird.

Die String-Eigenschaften sind nicht konfigurierbar und schreibbar, wenn Sie {{jsxref("Object.getOwnPropertyDescriptors()")}} verwenden, um ihre Deskriptoren zu erhalten. Sie sind jedoch effektiv schreibgeschützt, da Sie einer Eigenschaft keinen neuen Wert zuweisen können. Dieses Verhalten spiegelt wider, dass statische Importe "[lebendige Bindungen](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter)" erzeugen — die Werte können von dem Modul, das sie exportiert, erneut zugewiesen werden, jedoch nicht von dem Modul, das sie importiert. Die Schreibbarkeit der Eigenschaften spiegelt die Möglichkeit wider, dass sich die Werte ändern können, da nicht konfigurierbare und nicht schreibbare Eigenschaften konstant sein müssen. Sie können beispielsweise den exportierten Wert einer Variablen erneut zuweisen, und der neue Wert kann im Modul-Namespace-Objekt beobachtet werden.

Jeder (normalisierte) Modul-Bezeichner entspricht einem einzigartigen Modul-Namespace-Objekt, sodass Folgendes im Allgemeinen gilt:

```js
import * as mod from "/my-module.js";

import("/my-module.js").then((mod2) => {
  console.log(mod === mod2); // true
});
```

Mit einer Ausnahme: Da ein Promise niemals auf ein [thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) aufgelöst wird, wenn das `my-module.js`-Modul eine Funktion namens `then()` exportiert, wird diese Funktion automatisch aufgerufen, wenn das Promise des dynamischen Imports erfüllt wird, im Rahmen des [Promise-Auflösungsprozesses](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#the_resolve_function).

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
> Exportieren Sie keine Funktion mit dem Namen `then()` aus einem Modul. Dies führt dazu, dass sich das Modul anders verhält, wenn es dynamisch importiert wird, als wenn es statisch importiert wird.

Diese aggressive Zwischenablage (Caching) stellt sicher, dass ein JavaScript-Code niemals mehr als einmal ausgeführt wird, selbst wenn er mehrfach importiert wird. Zukünftige Importe führen nicht einmal zu HTTP-Anfragen oder Festplattenzugriff. Wenn Sie ein Modul ohne Neustart der gesamten JavaScript-Umgebung erneut importieren und neu auswerten möchten, besteht ein möglicher Trick darin, einen einzigartigen Abfrageparameter im Modulbezeichner zu verwenden. Dies funktioniert auch in Nicht-Browser-Laufzeitumgebungen, die URL-Bezeichner unterstützen.

```js
import("/my-module.js?t=" + Date.now());
```

Beachten Sie, dass dies in einer lang laufenden Anwendung zu Speicherlecks führen kann, da die Engine keine Modul-Namespace-Objekte sicher garbage-sammeln kann. Derzeit gibt es keine Möglichkeit, den Cache von Modul-Namespace-Objekten manuell zu löschen.

Das Cachen von Modul-Namespace-Objekten gilt nur für Module, die _erfolgreich_ geladen und verknüpft werden. Ein Modul wird in drei Schritten importiert: Laden (Abrufen des Moduls), Verknüpfen (meistens Parsen des Moduls) und Auswerten (Ausführen des geparsten Codes). Nur Auswertungsfehler werden zwischengespeichert; wenn ein Modul nicht geladen oder verknüpft werden kann, kann der nächste Import versuchen, das Modul erneut zu laden und zu verknüpfen. Der Browser kann das Ergebnis des Abrufvorgangs zwischenspeichern oder auch nicht, sollte jedoch typische HTTP-Semantiken befolgen, sodass der Umgang mit solchen Netzwerkfehlern nicht anders ist als beim Umgang mit [`fetch()`](/de/docs/Web/API/Window/fetch)-Fehlern.

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

Wenn Ihr Projekt Pakete verwendet, die ESM exportieren, können Sie diese auch nur für Nebeneffekte importieren. Dies führt lediglich dazu, dass der Code in der Einstiegsdatei des Pakets (und allen darin importierten Dateien) ausgeführt wird.

### Standardexporte importieren

Wenn Sie das importierte Modul-Namespace-Objekt dekonstruieren, müssen Sie den Schlüssel `default` umbenennen, da `default` ein reserviertes Wort ist.

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

### Importieren bei Bedarf basierend auf Benutzeraktionen

Dieses Beispiel zeigt, wie Funktionalitäten basierend auf einer Benutzeraktion in eine Seite geladen werden können, in diesem Fall ein Buttonklick, und anschließend eine Funktion innerhalb dieses Moduls aufgerufen wird. Dies ist nicht die einzige Möglichkeit, diese Funktionalität zu implementieren. Die `import()`-Funktion unterstützt auch `await`.

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

### Importieren unterschiedlicher Module basierend auf der Umgebung

Bei Prozessen wie serverseitigem Rendering müssen Sie möglicherweise unterschiedliche Logiken auf dem Server oder im Browser laden, weil sie mit unterschiedlichen globalen Objekten oder Modulen interagieren (z.B. hat der Browercode Zugriff auf Web-APIs wie `document` und `navigator`, während der Servercode Zugriff auf das Dateisystem des Servers hat). Sie können dies durch einen bedingten dynamischen Import tun.

```js
let myModule;

if (typeof window === "undefined") {
  myModule = await import("module-used-on-server");
} else {
  myModule = await import("module-used-in-browser");
}
```

### Importieren von Modulen mit einem nicht-wörtlichen Bezeichner

Dynamische Importe erlauben jeden Ausdruck als Modul-Bezeichner, nicht nur String-Literale.

Hier laden wir 10 Module, `/modules/module-0.js`, `/modules/module-1.js`, usw., gleichzeitig und rufen die `load`-Funktionen auf, die jedes Modul exportiert.

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
