---
title: Das Arguments-Objekt
slug: Web/JavaScript/Reference/Functions/arguments
l10n:
  sourceCommit: 1b2c87c20466d2a3eec9b3551c269f9aff8f5762
---

{{jsSidebar("Functions")}}

**`arguments`** ist ein array-ähnliches Objekt, das innerhalb von [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) zugänglich ist und die Werte der an diese Funktion übergebenen Argumente enthält.

{{EmbedInteractiveExample("pages/js/functions-arguments.html")}}

## Beschreibung

> [!NOTE]
> In modernem Code sollten [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) bevorzugt werden.

Das `arguments`-Objekt ist eine lokale Variable, die in allen nicht-[Arrow](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions)-Funktionen verfügbar ist. Sie können auf die Argumente einer Funktion innerhalb dieser Funktion zugreifen, indem Sie das `arguments`-Objekt verwenden. Es enthält Einträge für jedes Argument, mit dem die Funktion aufgerufen wurde, wobei der Index des ersten Eintrags `0` ist.

Zum Beispiel, wenn eine Funktion mit 3 Argumenten übergeben wird, können Sie auf sie wie folgt zugreifen:

```js
arguments[0]; // erstes Argument
arguments[1]; // zweites Argument
arguments[2]; // drittes Argument
```

Das `arguments`-Objekt ist nützlich für Funktionen, die mit mehr Argumenten aufgerufen werden, als sie formal deklariert sind zu akzeptieren, sogenannte [_variadische Funktionen_](https://en.wikipedia.org/wiki/Variadic_function), wie {{jsxref("Math.min()")}}. Diese Beispiels-Funktion akzeptiert eine beliebige Anzahl von String-Argumenten und gibt das längste zurück:

```js
function longestString() {
  let longest = "";
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i].length > longest.length) {
      longest = arguments[i];
    }
  }
  return longest;
}
```

Sie können {{jsxref("Functions/arguments/length", "arguments.length")}} verwenden, um zu zählen, mit wie vielen Argumenten die Funktion aufgerufen wurde. Wenn Sie stattdessen zählen möchten, wie viele Parameter eine Funktion deklariert akzeptiert, überprüfen Sie die {{jsxref("Function/length", "length")}}-Eigenschaft der Funktion.

### Zuweisung zu Indizes

Jedem Argument-Index kann auch ein Wert zugewiesen oder dieser neu zugewiesen werden:

```js
arguments[1] = "neuer Wert";
```

Nicht-strikte Funktionen, die nur einfache Parameter haben (das heißt, keine Rest-, Default- oder Destrukturierungs-Parameter), synchronisieren den neuen Wert von Parametern mit dem `arguments`-Objekt und umgekehrt:

```js
function func(a) {
  arguments[0] = 99; // Aktualisierung von arguments[0] aktualisiert auch a
  console.log(a);
}
func(10); // 99

function func2(a) {
  a = 99; // Aktualisierung von a aktualisiert auch arguments[0]
  console.log(arguments[0]);
}
func2(10); // 99
```

Nicht-strikte Funktionen, die mit [Rest](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)-, [Default](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)- oder [Destrukturierungs](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)-Parametern aufgerufen werden, synchronisieren neue zugewiesene Werte in der Funktionskörper mit dem `arguments`-Objekt nicht. Stattdessen spiegelt das `arguments`-Objekt in nicht-strikten Funktionen mit komplexen Parametern immer die Werte wider, die der Funktion beim Aufruf übergeben wurden.

```js
function funcWithDefault(a = 55) {
  arguments[0] = 99; // Aktualisierung von arguments[0] aktualisiert a nicht
  console.log(a);
}
funcWithDefault(10); // 10

function funcWithDefault2(a = 55) {
  a = 99; // Aktualisierung von a aktualisiert arguments[0] nicht
  console.log(arguments[0]);
}
funcWithDefault2(10); // 10

// Ein nicht verfolgter (untracked) Default-Parameter
function funcWithDefault3(a = 55) {
  console.log(arguments[0]);
  console.log(arguments.length);
}
funcWithDefault3(); // undefined; 0
```

Dies ist das gleiche Verhalten, das von allen [strict-mode Funktionen](/de/docs/Web/JavaScript/Reference/Strict_mode#making_eval_and_arguments_simpler) gezeigt wird, unabhängig von der Art der übergebenen Parameter. Das heißt, das Zuweisen neuer Werte zu Parametern im Funktionskörper beeinflusst das `arguments`-Objekt niemals, und das Zuweisen neuer Werte zu den `arguments`-Indizes beeinflusst den Wert von Parametern nicht, selbst wenn die Funktion nur einfache Parameter hat.

> [!NOTE]
> Sie können kein `"use strict";`-Direktive im Körper einer Funktionsdefinition schreiben, die Rest-, Default- oder Destrukturierungs-Parameter akzeptiert. Dadurch wird [ein Syntaxfehler](/de/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params) ausgelöst.

### arguments ist ein array-ähnliches Objekt

`arguments` ist ein array-ähnliches Objekt, was bedeutet, dass `arguments` eine {{jsxref("Functions/arguments/length", "length")}}-Eigenschaft und Eigenschaften hat, die von Null indiziert sind, aber es hat nicht die eingebauten Methoden von {{jsxref("Array")}} wie {{jsxref("Array/forEach", "forEach()")}} oder {{jsxref("Array/map", "map()")}}. Es kann jedoch in ein echtes `Array` umgewandelt werden, indem man eines von [`slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), {{jsxref("Array.from()")}}, oder [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) verwendet.

```js
const args = Array.prototype.slice.call(arguments);
// oder
const args = Array.from(arguments);
// oder
const args = [...arguments];
```

Für häufige Anwendungsfälle reicht es aus, es als array-ähnliches Objekt zu verwenden, da es sowohl [iterierbar ist](/de/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator) als auch `length` und nummerierte Indizes hat. Zum Beispiel akzeptiert [`Function.prototype.apply()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) array-ähnliche Objekte.

```js
function midpoint() {
  return (
    (Math.min.apply(null, arguments) + Math.max.apply(null, arguments)) / 2
  );
}

console.log(midpoint(3, 1, 4, 1, 5)); // 3
```

## Eigenschaften

- {{jsxref("Functions/arguments/callee", "arguments.callee")}} {{deprecated_inline}}
  - : Referenz auf die derzeit ausführende Funktion, zu der die Argumente gehören. Im Strict Mode verboten.
- {{jsxref("Functions/arguments/length", "arguments.length")}}
  - : Die Anzahl der Argumente, die der Funktion übergeben wurden.
- [`arguments[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator)
  - : Gibt ein neues [Array-Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)-Objekt zurück, das die Werte für jeden Index in `arguments` enthält.

## Beispiele

### Definieren einer Funktion, die mehrere Strings verknüpft

Dieses Beispiel definiert eine Funktion, die mehrere Strings verknüpft. Das einzige formale Argument der Funktion ist ein String, der die Zeichen enthält, die die zu verknüpfenden Elemente trennen.

```js
function myConcat(separator) {
  const args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
}
```

Sie können dieser Funktion so viele Argumente übergeben, wie Sie möchten. Sie gibt eine String-Liste zurück, wobei jedes Argument in der Liste verwendet wird:

```js
myConcat(", ", "rot", "orange", "blau");
// "rot, orange, blau"

myConcat("; ", "Elefant", "Giraffe", "Löwe", "Gepard");
// "Elefant; Giraffe; Löwe; Gepard"

myConcat(". ", "Salbei", "Basilikum", "Oregano", "Pfeffer", "Petersilie");
// "Salbei. Basilikum. Oregano. Pfeffer. Petersilie"
```

### Definieren einer Funktion, die HTML-Listen erstellt

Dieses Beispiel definiert eine Funktion, die einen String mit HTML für eine Liste erstellt. Das einzige formale Argument der Funktion ist ein String, der `"u"` ist, wenn die Liste [ungeordnet (mit Punkten)](/de/docs/Web/HTML/Element/ul) sein soll, oder `"o"`, wenn die Liste [geordnet (nummeriert)](/de/docs/Web/HTML/Element/ol) sein soll. Die Funktion wird wie folgt definiert:

```js
function list(type) {
  let html = `<${type}l><li>`;
  const args = Array.prototype.slice.call(arguments, 1);
  html += args.join("</li><li>");
  html += `</li></${type}l>`; // Liste beenden
  return html;
}
```

Sie können dieser Funktion eine beliebige Anzahl von Argumenten übergeben, und sie fügt jedes Argument als Listeneintrag in eine Liste des angegebenen Typs hinzu. Zum Beispiel:

```js
list("u", "Eins", "Zwei", "Drei");
// "<ul><li>Eins</li><li>Zwei</li><li>Drei</li></ul>"
```

### Verwendung von typeof mit arguments

Der {{jsxref("Operators/typeof", "typeof")}}-Operator gibt `'object'` zurück, wenn er mit `arguments` verwendet wird:

```js
console.log(typeof arguments); // 'object'
```

Der Typ einzelner Argumente kann ermittelt werden, indem `arguments` indiziert wird:

```js
console.log(typeof arguments[0]); // gibt den Typ des ersten Arguments zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions)-Leitfaden
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters)
