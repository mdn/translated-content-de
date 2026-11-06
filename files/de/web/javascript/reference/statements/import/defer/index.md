---
title: import defer
slug: Web/JavaScript/Reference/Statements/import/defer
l10n:
  sourceCommit: 696a0436bb4dd20eb4d30ac3f1d4fc5140d1eee9
---

{{SeeCompatTable}}

Die **`import defer`**-Deklaration verhält sich wie eine reguläre [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklaration, erzeugt jedoch ein [verzögertes Modul-Namespace-Objekt](#verzögertes_modul-namespace-objekt). Das Modul und seine Abhängigkeiten werden vorab [abgerufen](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#loading_the_graph) und [verknüpft](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#linking_modules). Ihre synchrone [Auswertung](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#evaluating_modules) wird jedoch aufgeschoben, bis auf Eigenschaften des Namespace zugegriffen wird. Module, die [Top-Level-`await`](#top-level-await) verwenden, werden sofort ausgewertet.

## Syntax

```js-nolint
import defer * as name from "module-name";
```

- `name`
  - : Name, der auf das verzögerte Modul-Namespace-Objekt verweist. Muss ein gültiger JavaScript-Bezeichner sein.
- `module-name`
  - : Das Modul, aus dem importiert werden soll. Wird genauso behandelt wie [`module-name`](/de/docs/Web/JavaScript/Reference/Statements/import#module-name) in regulären `import`-Deklarationen.

[Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with) werden ebenfalls unterstützt. Dazu wird nach dem Modulbezeichner eine `with`-Klausel verwendet.

`defer` ist kein reserviertes Wort. Beispielsweise ist `import defer from "./module.js"` weiterhin ein regulärer Default-Import, dessen lokale Bindung `defer` heißt.

## Beschreibung

Standardmäßig führt die `import`-Deklaration viele Aufgaben auf einmal aus: Sie löst den Modulbezeichner auf, ruft den Quellcode des Moduls ab, parst ihn (wobei möglicherweise transitive Abhängigkeiten entdeckt werden), verknüpft das Modul und wertet es aus. Diese Form der sofortigen Auswertung ist nicht immer erwünscht: Sie kann den Start verlangsamen, die Umgebung für die Auswertung ist möglicherweise noch nicht vollständig vorbereitet, oder das Modul muss womöglich überhaupt nicht ausgewertet werden.

Der _Importphasenmodifikator_ ermöglicht es, den Modulimportprozess in einer bestimmten Phase anzuhalten. Wird `defer` nach `import` eingefügt, wird der Quellcode verknüpft, bleibt aber unausgewertet, sofern er synchron ausgewertet werden kann (also kein Top-Level-`await` verwendet). Beim Zugriff auf einen Export über den verzögerten Namespace werden das Modul und alle zuvor auszuwertenden Abhängigkeiten synchron ausgewertet. Nach Abschluss der Auswertung gibt der Zugriff den Wert des Exports zurück. Dabei wird der gesamte Top-Level-Code des Moduls ausgeführt, nicht nur der Code, der zur Initialisierung des angeforderten Exports erforderlich ist. Transitive Abhängigkeiten, die mit eigenen `import defer`-Deklarationen importiert werden, können weiterhin zurückgestellt bleiben.

Da sichergestellt ist, dass der angehaltene Teil des Abhängigkeitsgraphen synchron ausgewertet werden kann, lässt sich `import defer` mit nahezu keinen Codeänderungen an den Stellen einsetzen, die das Modul verwenden:

```js
// Before:
import * as ts from "typescript";
// The full typescript module graph evaluates here

function compileFile(path) {
  const program = ts.createProgram([path], {});
}
```

```js
// After:
import defer * as ts from "typescript";
// No code is evaluated; potentially faster startup

function compileFile(path) {
  // The typescript module graph evaluates when `ts.createProgram`
  // is accessed, i.e., when `compileFile` is called.
  // If `compileFile` is never called, then the module graph
  // is never evaluated.
  const program = ts.createProgram([path], {});
}
```

> [!WARNING]
> Wenn Sie einen Import zurückstellen, ändern Sie den Zeitpunkt, zu dem seine Nebeneffekte auftreten. Stellen Sie Module nicht zurück, deren Nebeneffekte benötigt werden, bevor der übrige Code ausgeführt wird – etwa Module, die Polyfills installieren.

Anders als bei [`import source`](/de/docs/Web/JavaScript/Reference/Statements/import/source) werden die Abhängigkeiten eines verzögerten Moduls vorab [geladen](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#loading_the_graph) und das Modul wird verknüpft. So werden fehlende Abhängigkeiten oder ungültige Importe erkannt, bevor das Modul verwendet wird. Importe in der Quellphase laden dagegen keine Abhängigkeiten und geben Ihnen die Kontrolle darüber, wie das Modul instanziiert wird.

Anders als bei [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) wird das verzögerte Modul weiterhin vorab abgerufen, geparst und verknüpft. Dadurch wird eine unnötige [Ausbreitung von Asynchronität](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function/) vermieden, bei der eine gesamte Kette von Funktionsaufrufen asynchron werden muss. `import defer` bietet außerdem die meisten Vorteile einer statischen Deklaration, etwa eine bessere statische Analyse.

Beachten Sie, dass nur die Syntax für Namespace-Importe unterstützt wird. Sie können beispielsweise `import defer { property } from "./my-module.js"` nicht verwenden, da die Ausführung durch den Zugriff auf eine Eigenschaft des Namespace-Objekts ausgelöst wird.

### Caching-Semantik

Der Modifikator gilt für einen Import, nicht für das Modul selbst. Wenn ein anderer Teil der Anwendung dasselbe Modul ohne `defer` importiert, wird das Modul wie üblich ausgewertet. Beide Formen verwenden denselben Modulzustand, und der Code des Moduls wird höchstens einmal ausgeführt. Eine Änderung der Importphase erzeugt kein separates Modul im Cache:

```js
import defer * as ts from "typescript";
// No code is evaluated
import * as ts2 from "typescript";
// The full typescript module graph evaluates here

function compileFile(path) {
  // Accessing `ts.createProgram` no longer evaluates the subgraph
  // because it's already evaluated.
  const program = ts.createProgram([path], {});
}
```

Im Gegensatz dazu können [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with) die Modulidentität beeinflussen. Beispielsweise fordern diese beiden Deklarationen in einer Host-Umgebung, die Textmodule unterstützt, unterschiedliche Modultypen an:

```js
import * as mod from "./module.js";
import text from "./module.js" with { type: "text" };
```

Die beiden Importe gelten als Importe aus unterschiedlichen Modulen, die zufällig denselben String als Modulbezeichner verwenden (im Web werden sie mit unterschiedlichen HTTP-Headern angefordert). Welche Attribute unterstützt werden und wie sie sich auf das Laden und die Modulidentität auswirken, legt die Host-Umgebung fest.

### Verzögertes Modul-Namespace-Objekt

Ein verzögertes Modul-Namespace-Objekt verhält sich weitgehend wie ein reguläres [Modul-Namespace-Objekt](/de/docs/Web/JavaScript/Reference/Operators/import#module_namespace_object): Es hat `null` als Prototyp, ist nicht erweiterbar und versiegelt und stellt schreibgeschützte Live-Bindungen zu den Exporten des Moduls bereit. Seine String-Schlüssel sind aufzählbar und lexikografisch sortiert. Der Default-Export ist über die Eigenschaft `default` verfügbar.

Es gibt drei Unterschiede zu einem regulären Namespace:

- Operationen, die Exporte untersuchen, können die Auswertung auslösen und Auswertungsfehler auslösen, wie unten beschrieben.
- Seine Eigenschaft [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) hat den Wert `"Deferred Module"` statt `"Module"`. Das bleibt auch nach der Auswertung so.
- Er stellt auch nach der Auswertung keinen Export namens `then` bereit. Das Lesen von `namespace.then` gibt immer `undefined` zurück. Dadurch wird verhindert, dass die Auflösung eines Promise den Namespace als [Thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) behandelt und die Auswertung auslöst. Um auf einen solchen Export zuzugreifen, verwenden Sie einen regulären Import oder ein Zwischenmodul, das `then` unter einem anderen Namen erneut exportiert.

Der verzögerte und der reguläre Namespace desselben Moduls sind unterschiedliche Objekte, auch nach der Auswertung. Wiederholte verzögerte Importe desselben Moduls – ob statisch oder dynamisch – verwenden dasselbe verzögerte Namespace-Objekt.

Um das Verhalten „Modulauswertung beim Zugriff auf Schlüssel auslösen“ zu implementieren, ist der verzögerte Modul-Namespace im Wesentlichen ein {{jsxref("Proxy")}}, der die folgenden Aktionen abfängt und dadurch die Modulauswertung auslöst:

- [`defineProperty()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty) für jeden String-Schlüssel außer `then`: beispielsweise `Object.defineProperty(namespace, "value", {})`.

  > [!NOTE]
  > Da das Modul-Namespace-Objekt nicht erweiterbar und versiegelt ist, können Sie keine Eigenschaftsdeskriptoren sinnvoll hinzufügen oder ändern, auch nicht ihren Wert. Dennoch wird die Auswertung selbst dann ausgelöst, wenn die Operation fehlschlägt.
  >
  > Der Proxy fängt [`set()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set) nicht ab. Das Setzen von Eigenschaften wie `namespace.value = 1;` schlägt immer fehl.

- [`deleteProperty()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty) für jeden String-Schlüssel außer `then`: beispielsweise `delete namespace.value`.

  > [!NOTE]
  > Sie können keine Eigenschaft des Namespace tatsächlich löschen. Dennoch wird die Auswertung selbst dann ausgelöst, wenn die Operation fehlschlägt.

- [`get()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get) und [`getOwnPropertyDescriptor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor) für jeden String-Schlüssel außer `then`: beispielsweise `namespace.value`, `namespace["missing"]`, `const { default: value } = namespace`, `Object.getOwnPropertyDescriptor(namespace, "value")`.

  > [!NOTE]
  > Wenn Sie einen Export auf oberster Ebene destrukturieren, wird die Zurückstellung dieses Moduls daher aufgehoben.

- [`has()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/has) für jeden String-Schlüssel außer `then`: beispielsweise `"value" in namespace`, `Object.hasOwn(namespace, "missing")`.
- [`ownKeys()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys): beispielsweise `Object.keys(namespace)`, `Object.getOwnPropertySymbols(namespace)`, `for (const key in namespace) {}`. Selbst wenn nur Symbol-Schlüssel aufgezählt werden, wird die Auswertung ausgelöst.

Lediglich auf den Namespace zu verweisen, ihn einer anderen Variablen zuzuweisen, seine Identität zu vergleichen oder ihn an eine Funktion zu übergeben, löst keine Auswertung aus. Auch das Lesen von `then` oder einer Eigenschaft mit Symbol-Schlüssel wie `namespace[Symbol.toStringTag]` löst sie nicht aus. Ebenso wenig lösen Aufrufe von {{jsxref("Object.getPrototypeOf()")}} oder {{jsxref("Object.isExtensible()")}} eine Auswertung aus. {{jsxref("Object.isSealed()")}} und {{jsxref("Object.isFrozen()")}} zählen jedoch Schlüssel auf und lösen daher die Auswertung aus.

### Top-Level-await

Das Lesen einer Namespace-Eigenschaft erfolgt synchron und kann daher nicht auf eine asynchrone Modulauswertung warten. Module, die [Top-Level-`await`](/de/docs/Web/JavaScript/Guide/Modules#top-level_await) enthalten, werden sofort ausgewertet, zusammen mit den für ihre Auswertung erforderlichen Abhängigkeiten. Dazu gehören auch Module, die über weitere verzögerte Importe erreicht werden. Das importierende Modul wartet auf den Abschluss dieser asynchronen Auswertung, bevor sein eigener Code ausgeführt wird.

Wenn das direkt importierte Modul Top-Level-`await` enthält, wird seine Auswertung nicht zurückgestellt. Wenn nur einige seiner Abhängigkeiten Top-Level-`await` enthalten, werden diese Abhängigkeiten sofort ausgewertet. Die synchronen Teile des Abhängigkeitsgraphen, die für deren Auswertung nicht benötigt werden, können jedoch zurückgestellt bleiben. Siehe [Ein Modul mit einer asynchronen Abhängigkeit zurückstellen](#ein_modul_mit_einer_asynchronen_abhängigkeit_zurückstellen).

### Fehler

Fehler beim Laden, Parsen und Verknüpfen werden nicht zurückgestellt. Beispielsweise verhindern ein fehlendes Modul, ein Syntaxfehler in einer Abhängigkeit oder ein nicht auflösbarer benannter Import die Ausführung des importierenden Moduls, selbst wenn nie auf den verzögerten Namespace zugegriffen wird. Auch Fehler aus sofort ausgewerteten asynchronen Abhängigkeiten verhindern die Ausführung des importierenden Moduls.

Fehler, die während der verzögerten Auswertung auftreten, werden synchron von der Operation ausgelöst, die die Auswertung anstößt. Sie können sie mit [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) um diese Operation herum abfangen. Der Fehler wird zwischengespeichert: Nachfolgende Operationen, die eine Auswertung auslösen, lösen denselben Fehler aus, statt die Ausführung des Modulcodes erneut zu versuchen. Das gilt auch, wenn ein anderer Import zuvor dazu geführt hat, dass die Auswertung des Moduls fehlgeschlagen ist.

Eine Operation, die eine Auswertung auslöst, löst einen {{jsxref("TypeError")}} aus, wenn das Modul oder seine Abhängigkeiten noch nicht für eine synchrone Auswertung bereit sind. Das kann bei [zyklischen Importen](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#cyclic_imports) geschehen, wenn ein Zugriff ein Modul erfordern würde, das noch ausgewertet wird. Eine `import defer`-Deklaration macht nicht jede zyklische Abhängigkeit während der Initialisierung sicher zugänglich. Eine fehlende Bereitschaft führt für sich genommen nicht dazu, dass die Auswertung des angeforderten Moduls als fehlgeschlagen gilt: Ein späterer Zugriff kann erfolgreich sein, sobald seine Abhängigkeiten bereit sind.

## Beispiele

### Ein Modul bei der ersten Verwendung auswerten

Das folgende Modul initialisiert eine Nachschlagetabelle, wenn sein Top-Level-Code ausgeführt wird:

```js
// -- squares.js --
console.log("Initializing squares");
const squares = Array.from({ length: 10000 }, (_, index) => index ** 2);

export function getSquare(index) {
  return squares[index];
}
```

Das importierende Modul kann eine synchrone Funktion bereitstellen, ohne die Tabelle zu initialisieren, bevor sie benötigt wird:

```js
// -- main.js --
import defer * as squares from "./squares.js";

console.log("Ready");

export function showSquare(index) {
  console.log(squares.getSquare(index));
}

showSquare(3); // Logs "Initializing squares", then 9
showSquare(4); // Logs 16; initialization is not repeated
```

`"Ready"` wird vor `"Initializing squares"` protokolliert. Wenn `showSquare()` nie aufgerufen wird und kein anderer Import die Auswertung von `squares.js` auslöst, wird die Nachschlagetabelle nie initialisiert.

### Ein Modul mit einer asynchronen Abhängigkeit zurückstellen

In diesem Beispiel hängt `report.js` (das selbst synchron ist) sowohl von einem asynchronen Konfigurationsmodul als auch von einem synchronen Formatierungsmodul ab.

```js
// -- config.js --
export const locale = await Promise.resolve("en-US");
console.log("Configuration ready");
```

```js
// -- format.js --
console.log("Formatting module evaluated");

export function format(value, locale) {
  return new Intl.NumberFormat(locale).format(value);
}
```

```js
// -- report.js --
import { locale } from "./config.js";
import { format } from "./format.js";

console.log("Report module evaluated");

export function createReport(value) {
  return format(value, locale);
}
```

```js
// -- main.js --
import defer * as report from "./report.js";

console.log("Main module evaluated");
console.log(report.createReport(1000));
```

Die Ausgabe lautet:

```plain
Configuration ready
Main module evaluated
Formatting module evaluated
Report module evaluated
1,000
```

`config.js` wird vor `main.js` ausgewertet, weil es Top-Level-`await` enthält. Weder `format.js` noch `report.js` muss ausgeführt werden, um `config.js` auszuwerten. Ihre Auswertung wird daher zurückgestellt, bis auf `report.createReport` zugegriffen wird.

### Auswertungsfehler abfangen

```js
// -- broken.js --
export const value = 1;
throw new Error("Initialization failed");
```

```js
// -- main.js --
import defer * as broken from "./broken.js";

for (let attempt = 0; attempt < 2; attempt++) {
  try {
    console.log(broken.value);
  } catch (error) {
    console.log(error.message); // "Initialization failed" on both attempts
  }
}
```

Obwohl `value` initialisiert wurde, bevor die Ausnahme ausgelöst wurde, löst der Zugriff darauf über den verzögerten Namespace den zwischengespeicherten Auswertungsfehler aus.

### Einen verzögerten Namespace exportieren

Es gibt keine `export defer`-Syntax (weitere Informationen finden Sie unter [`export`](/de/docs/Web/JavaScript/Reference/Statements/export#re-exporting_aggregating)). Sie können einen verzögerten Namespace importieren und anschließend seine Bindung exportieren, ohne eine Auswertung auszulösen:

```js
// -- features.js --
import defer * as report from "./report.js";

export { report };
```

```js
// -- main.js --
import { report } from "./features.js";

// Accessing an export through report triggers its deferred evaluation.
console.log(report.createReport(1000));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules)
- {{jsxref("Statements/import", "import")}}
- {{jsxref("Operators/import/defer", "import.defer()")}}
