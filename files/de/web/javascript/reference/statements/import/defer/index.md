---
title: import defer
slug: Web/JavaScript/Reference/Statements/import/defer
l10n:
  sourceCommit: 2e0b9415ed31484a4830e214eff9e06e408c7261
---

{{SeeCompatTable}}

Die **`import defer`**-Deklaration verhält sich wie reguläre [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen, mit der Ausnahme, dass sie zu einem [verzögerten Modul-Namespace-Objekt](#verzögertes_modul-namespace-objekt) führt. Das Modul und seine Abhängigkeiten werden vorab abgerufen und verknüpft, aber ihre synchrone Auswertung wird verzögert, bis auf die Eigenschaften des Namespace zugegriffen wird. Module, die [top-level `await`](#top-level_await) verwenden, werden eager ausgewertet.

## Syntax

```js-nolint
import defer * as name from "module-name";
```

- `name`
  - : Name, der auf das verzögerte Modul-Namespace-Objekt verweist. Muss ein gültiger JavaScript-Bezeichner sein.
- `module-name`
  - : Das Modul, aus dem importiert werden soll. Wird auf dieselbe Weise behandelt wie der [`module-name`](/de/docs/Web/JavaScript/Reference/Statements/import#module-name) in regulären `import`-Deklarationen.

[Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with) werden ebenfalls unterstützt, indem nach dem Modulspezifizierer eine `with`-Klausel verwendet wird.

`defer` ist kein reserviertes Wort. Beispielsweise ist `import defer from "./module.js"` weiterhin ein regulärer Default-Import, dessen lokale Bindung `defer` heißt.

## Beschreibung

Standardmäßig führt die `import`-Deklaration viele Aufgaben gleichzeitig aus: Sie löst den Modulspezifizierer auf, ruft den Modulquellcode ab, parst ihn (wobei möglicherweise transitive Abhängigkeiten entdeckt werden), verknüpft und wertet ihn aus. Diese Form der eager Auswertung ist nicht immer wünschenswert: Sie kann zu einem langsameren Start führen, die Umgebung für ihre Auswertung ist möglicherweise nicht vollständig vorbereitet, oder das Modul muss möglicherweise überhaupt nicht ausgewertet werden.

Der _Importphasenmodifikator_ ermöglicht es, den Modulimportprozess in einer bestimmten Phase anzuhalten. Durch Hinzufügen von `defer` nach `import` wird der Quellcode verknüpft, bleibt jedoch unausgewertet, sofern er synchron ausgewertet werden kann (d.h. kein top-level `await` verwendet). Der Zugriff auf einen Export über den verzögerten Namespace wertet das Modul und alle Abhängigkeiten, die zuvor ausgewertet werden müssen, synchron aus. Der Zugriff gibt den Wert des Exports zurück, nachdem die Auswertung abgeschlossen ist. Dadurch wird der Code auf oberster Ebene des Moduls ausgeführt, nicht nur der Code, der zum Initialisieren des angeforderten Exports erforderlich ist. Transitive Abhängigkeiten, die mit eigenen `import defer`-Deklarationen importiert wurden, können verzögert bleiben.

Indem sichergestellt wird, dass der angehaltene Teilgraph synchron ausgewertet werden kann, lässt sich `import defer` mit nahezu keinen Codeänderungen an den Stellen einsetzen, die das Modul verwenden:

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
> Das Verzögern eines Imports ändert, wann seine Seiteneffekte auftreten. Verzögern Sie keine Module, deren Seiteneffekte benötigt werden, bevor der restliche Code ausgeführt wird, beispielsweise Module, die Polyfills installieren.

Anders als [`import source`](/de/docs/Web/JavaScript/Reference/Statements/import/source) wird ein verzögertes Modul weiterhin vorab verknüpft. Das Verknüpfen im Voraus ermöglicht es dem Modullader, Abhängigkeiten aufzulösen und fehlende Abhängigkeiten oder ungültige Importe zu erkennen, bevor das Modul verwendet wird. Das Nichtverknüpfen des Moduls vermeidet das Laden von Abhängigkeiten, die möglicherweise nicht benötigt werden, und ermöglicht es Ihnen, zu steuern, wie es instanziiert wird.

Anders als [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) wird das verzögerte Modul weiterhin vorab abgerufen, geparst und verknüpft, wodurch unnötiges [async coloring](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function/) (eine gesamte Kette von Funktionsaufrufen wird gezwungen, async zu werden) vermieden wird. `import defer` bietet außerdem die meisten Vorteile einer statischen Deklaration, beispielsweise eine bessere statische Analyse.

Beachten Sie, dass nur die Syntax für „Namespace-Importe“ unterstützt wird. Sie können nicht `import defer { property } from "./my-module.js"` usw. verwenden, da die Ausführung durch den Eigenschaftszugriff auf dem Namespace-Objekt ausgelöst wird.

### Cache-Semantik

Der Modifikator wird auf einen Import angewendet, nicht auf das Modul selbst. Wenn ein anderer Teil der Anwendung dasselbe Modul ohne `defer` importiert, wird das Modul wie üblich ausgewertet. Beide Formen teilen denselben Modulzustand, und der Code des Moduls wird höchstens einmal ausgeführt. Das Ändern der Importphase erstellt kein separates Modul im Cache:

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

Im Gegensatz dazu können [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with) die Modulidentität beeinflussen. Beispielsweise fordern diese beiden Deklarationen in einem Host, der Textmodule unterstützt, verschiedene Modultypen an:

```js
import * as mod from "./module.js";
import text from "./module.js" with { type: "text" };
```

Die beiden Importe werden als Importe aus unterschiedlichen Modulen betrachtet, die zufällig denselben Zeichenkettenspezifizierer teilen (im Web werden sie mit unterschiedlichen HTTP-Headern angefordert). Die unterstützten Attribute und ihre Auswirkungen auf das Laden und die Modulidentität werden vom Host definiert.

### Verzögertes Modul-Namespace-Objekt

Ein verzögertes Modul-Namespace-Objekt verhält sich weitgehend wie ein reguläres [Modul-Namespace-Objekt](/de/docs/Web/JavaScript/Reference/Operators/import#module_namespace_object): Es hat einen `null`-Prototyp, ist nicht erweiterbar und versiegelt und stellt schreibgeschützte Live-Bindings für die Exporte des Moduls bereit. Seine String-Schlüssel sind aufzählbar und in lexikografischer Reihenfolge sortiert. Der Default-Export ist als Eigenschaft namens `default` verfügbar.

Es gibt drei Unterschiede zu einem regulären Namespace:

- Operationen, die Exporte untersuchen, können die Auswertung auslösen und Auswertungsfehler werfen, wie unten beschrieben.
- Seine [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist `"Deferred Module"` statt `"Module"`. Dies bleibt auch nach der Auswertung so.
- Es stellt keinen Export namens `then` bereit, auch nicht nach der Auswertung. Das Lesen von `namespace.then` gibt immer `undefined` zurück. Dadurch wird verhindert, dass die Promise-Auflösung den Namespace als [thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) behandelt und die Auswertung auslöst. Um auf einen solchen Export zuzugreifen, verwenden Sie einen regulären Import oder führen Sie ein Zwischenmodul ein, das `then` unter einem anderen Namen erneut exportiert.

Die verzögerten und regulären Namespaces für dasselbe Modul sind unterschiedliche Objekte, auch nach der Auswertung. Wiederholte verzögerte Importe desselben Moduls, ob statisch oder dynamisch, teilen dasselbe verzögerte Namespace-Objekt.

Um das Verhalten „Auslösen der Modulauswertung beim Zugriff auf Schlüssel“ zu implementieren, ist der verzögerte Modul-Namespace im Wesentlichen ein {{jsxref("Proxy")}}, der die folgenden Aktionen abfängt, um die Modulauswertung auszulösen:

- [`defineProperty()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty) für jeden String-Schlüssel außer `then`: beispielsweise `Object.defineProperty(namespace, "value", {})`.

  > [!NOTE]
  > Da das Modul-Namespace-Objekt nicht erweiterbar und versiegelt ist, können Sie keinen Eigenschaftsdeskriptor, einschließlich seines Werts, sinnvoll hinzufügen oder ändern. Dennoch wird die Auswertung ausgelöst, selbst wenn die Operation fehlschlägt.
  >
  > Der Proxy fängt [`set()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set) nicht ab. Das Setzen von Eigenschaften wie `namespace.value = 1;` schlägt immer fehl.

- [`deleteProperty()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty) für jeden String-Schlüssel außer `then`: beispielsweise `delete namespace.value`.

  > [!NOTE]
  > Sie können tatsächlich keine Eigenschaft löschen, die der Namespace besitzt. Dennoch wird die Auswertung ausgelöst, selbst wenn die Operation fehlschlägt.

- [`get()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get) und [`getOwnPropertyDescriptor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor) für jeden String-Schlüssel außer `then`: beispielsweise `namespace.value`, `namespace["missing"]`, `const { default: value } = namespace`, `Object.getOwnPropertyDescriptor(namespace, "value")`.

  > [!NOTE]
  > Das Destructuring eines Exports auf oberster Ebene verhindert daher die Verzögerung dieses Moduls.

- [`has()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/has) für jeden String-Schlüssel außer `then`: beispielsweise `"value" in namespace`, `Object.hasOwn(namespace, "missing")`.
- [`ownKeys()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys): beispielsweise `Object.keys(namespace)`, `Object.getOwnPropertySymbols(namespace)`, `for (const key in namespace) {}`. Selbst das Aufzählen ausschließlich von Symbol-Schlüsseln löst die Auswertung aus.

Das bloße Referenzieren des Namespace, seine Zuweisung zu einer anderen Variablen, der Vergleich seiner Identität oder die Übergabe an eine Funktion lösen keine Auswertung aus. Auch das Lesen von `then` oder einer mit einem Symbol-Schlüssel versehenen Eigenschaft, wie `namespace[Symbol.toStringTag]`, löst keine Auswertung aus. Der Aufruf von {{jsxref("Object.getPrototypeOf()")}} oder {{jsxref("Object.isExtensible()")}} löst ebenfalls keine Auswertung aus. {{jsxref("Object.isSealed()")}} und {{jsxref("Object.isFrozen()")}} zählen jedoch Schlüssel auf und lösen daher eine Auswertung aus.

### Top-level await

Das Lesen einer Namespace-Eigenschaft ist synchron und kann daher nicht auf eine asynchrone Modulauswertung warten. Module, die [top-level `await`](/de/docs/Web/JavaScript/Guide/Modules#top_level_await) enthalten, werden zusammen mit den Abhängigkeiten, die für ihre Auswertung erforderlich sind, eager ausgewertet. Dies schließt Module ein, die über weitere verzögerte Importe erreicht werden. Das importierende Modul wartet auf diese asynchrone Auswertung, bevor es seinen eigenen Body ausführt.

Wenn das direkt importierte Modul top-level `await` enthält, wird seine Auswertung nicht verzögert. Wenn nur einige seiner Abhängigkeiten top-level `await` enthalten, werden diese Abhängigkeiten eager ausgewertet, aber die synchronen Teile des Graphen, die nicht für deren Auswertung benötigt werden, können verzögert bleiben. Siehe [Verzögern eines Moduls mit einer asynchronen Abhängigkeit](#verzögern_eines_moduls_mit_einer_asynchronen_abhängigkeit).

### Fehler

Fehler beim Laden, Parsen und Verknüpfen werden nicht verzögert. Beispielsweise verhindert ein fehlendes Modul, ein Syntaxfehler in einer Abhängigkeit oder ein nicht aufgelöster benannter Import die Ausführung des importierenden Moduls, selbst wenn nie auf den verzögerten Namespace zugegriffen wird. Fehler aus eager ausgewerteten asynchronen Abhängigkeiten verhindern ebenfalls die Ausführung des importierenden Moduls.

Fehler, die während der verzögerten Auswertung geworfen werden, werden von der Operation, die die Auswertung auslöst, synchron geworfen. Sie können sie mit [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) um diese Operation herum abfangen. Der Fehler wird im Cache gespeichert: Nachfolgende Operationen, die die Auswertung auslösen, werfen denselben Fehler, statt den Code des Moduls erneut auszuführen. Dies gilt auch, wenn ein anderer Import zuvor dazu geführt hat, dass die Auswertung des Moduls fehlgeschlagen ist.

Eine Operation, die die Auswertung auslöst, wirft einen {{jsxref("TypeError")}}, wenn das Modul oder seine Abhängigkeiten nicht für eine synchrone Auswertung bereit sind. Dies kann bei [zyklischen Importen](/de/docs/Web/JavaScript/Guide/Modules#cyclic_imports) passieren, wenn ein Zugriff ein Modul erfordern würde, das noch ausgewertet wird. Eine `import defer`-Deklaration macht nicht jede zyklische Abhängigkeit sicher für den Zugriff während der Initialisierung. Ein Bereitschaftsfehler selbst markiert das angeforderte Modul nicht als fehlgeschlagen ausgewertet: Ein späterer Zugriff kann erfolgreich sein, sobald seine Abhängigkeiten bereit sind.

## Beispiele

### Ein Modul bei der ersten Verwendung auswerten

Das folgende Modul initialisiert eine Lookup-Tabelle, wenn sein Code auf oberster Ebene ausgeführt wird:

```js
// -- squares.js --
console.log("Initializing squares");
const squares = Array.from({ length: 10000 }, (_, index) => index ** 2);

export function getSquare(index) {
  return squares[index];
}
```

Das importierende Modul kann eine synchrone Funktion bereitstellen, ohne die Tabelle zu initialisieren, bis sie benötigt wird:

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

`"Ready"` wird vor `"Initializing squares"` protokolliert. Wenn `showSquare()` niemals aufgerufen wird und kein anderer Import dazu führt, dass `squares.js` ausgewertet wird, wird die Lookup-Tabelle niemals initialisiert.

### Verzögern eines Moduls mit einer asynchronen Abhängigkeit

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

`config.js` wird vor `main.js` ausgewertet, weil es top-level `await` enthält. Weder `format.js` noch `report.js` müssen ausgeführt werden, um `config.js` auszuwerten, daher wird ihre Auswertung verzögert, bis auf `report.createReport` zugegriffen wird.

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

Obwohl `value` initialisiert wurde, bevor die Ausnahme geworfen wurde, löst der Zugriff darauf über den verzögerten Namespace den im Cache gespeicherten Auswertungsfehler aus.

### Einen verzögerten Namespace exportieren

Es gibt keine `export defer`-Syntax (weitere Informationen finden Sie unter [`export`](/de/docs/Web/JavaScript/Reference/Statements/export#re-exporting_aggregating)). Sie können einen verzögerten Namespace importieren und anschließend seine Bindung exportieren, ohne die Auswertung auszulösen:

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
