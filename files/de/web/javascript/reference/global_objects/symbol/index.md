---
title: Symbol
slug: Web/JavaScript/Reference/Global_Objects/Symbol
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{JSRef}}

**`Symbol`** ist ein eingebautes Objekt, dessen Konstruktor einen `symbol` {{Glossary("Primitive", "primitive")}} zurückgibt – auch als **Symbolwert** oder einfach nur **Symbol** bezeichnet –, das garantiert einzigartig ist. Symbole werden häufig verwendet, um einzigartigen Eigenschaftsschlüsseln zu einem Objekt hinzuzufügen, die nicht mit Schlüsseln kollidieren, die anderer Code möglicherweise dem Objekt hinzufügt, und die vor jeglichen Mechanismen versteckt sind, die anderer Code typischerweise verwendet, um auf das Objekt zuzugreifen. Dies ermöglicht eine Form der schwachen {{Glossary("encapsulation", "Kapselung")}} oder eine schwache Form der [Informationsverbergung](https://en.wikipedia.org/wiki/Information_hiding).

Jeder Aufruf von `Symbol()` garantiert die Rückgabe eines einzigartigen Symbols. Jeder Aufruf von `Symbol.for("key")` wird immer das gleiche Symbol für einen gegebenen Wert von `"key"` zurückgeben. Wenn `Symbol.for("key")` aufgerufen wird und ein Symbol mit dem gegebenen Schlüssel im globalen Symbolregister gefunden werden kann, wird dieses Symbol zurückgegeben. Andernfalls wird ein neues Symbol erstellt, im globalen Symbolregister unter dem gegebenen Schlüssel hinzugefügt und zurückgegeben.

## Beschreibung

Um ein neues primitives Symbol zu erstellen, schreibt man `Symbol()` mit einem optionalen String als Beschreibung:

```js
const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");
```

Der obige Code erstellt drei neue Symbole. Beachten Sie, dass `Symbol("foo")` den String `"foo"` nicht in ein Symbol umwandelt. Es erstellt jedes Mal ein neues Symbol:

```js
Symbol("foo") === Symbol("foo"); // false
```

Die folgende Syntax mit dem {{jsxref("Operators/new", "new")}}-Operator wirft einen {{jsxref("TypeError")}}:

```js example-bad
const sym = new Symbol(); // TypeError
```

Dies verhindert, dass Autoren ein explizites `Symbol`-Wrapper-Objekt statt eines neuen Symbolwerts erstellen, was überraschen könnte, da das Erstellen expliziter Wrapper-Objekte um primitive Datentypen allgemein möglich ist (zum Beispiel `new Boolean`, `new String` und `new Number`).

Wenn Sie wirklich ein `Symbol`-Wrapper-Objekt erstellen möchten, können Sie die `Object()`-Funktion verwenden:

```js
const sym = Symbol("foo");
typeof sym; // "symbol"
const symObj = Object(sym);
typeof symObj; // "object"
```

Da Symbole der einzige primitive Datentyp sind, der eine Referenzidentität hat (das heißt, Sie können das gleiche Symbol nicht zweimal erstellen), verhalten sie sich in gewisser Weise wie Objekte. Zum Beispiel sind sie speicherbereinigt und können daher in {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}, {{jsxref("WeakRef")}} und {{jsxref("FinalizationRegistry")}}-Objekten gespeichert werden.

### Geteilte Symbole im globalen Symbolregister

Die obige Syntax unter Verwendung der `Symbol()`-Funktion erstellt ein Symbol, dessen Wert während der gesamten Lebensdauer des Programms einzigartig bleibt. Um Symbole zu erstellen, die über Dateien hinweg und sogar über verschiedene Bereiche (von denen jeder seinen eigenen globalen Gültigkeitsbereich hat) verfügbar sind, verwenden Sie die Methoden {{jsxref("Symbol.for()")}} und {{jsxref("Symbol.keyFor()")}}, um Symbole im globalen Symbolregister zu setzen und abzurufen.

Beachten Sie, dass das "globale Symbolregister" nur ein fiktives Konzept ist und nicht mit irgendeiner internen Datenstruktur in der JavaScript-Engine übereinstimmen muss – und selbst wenn ein solches Register existiert, ist sein Inhalt JavaScript-Code nicht zugänglich, außer durch die `for()`- und `keyFor()`-Methoden.

Die Methode `Symbol.for(tokenString)` nimmt einen String-Schlüssel und gibt einen Symbolwert aus dem Register zurück, während `Symbol.keyFor(symbolValue)` einen Symbolwert nimmt und den entsprechenden String-Schlüssel zurückgibt. Jede Methode ist das Inverse der anderen, sodass Folgendes `true` ist:

```js
Symbol.keyFor(Symbol.for("tokenString")) === "tokenString"; // true
```

Da registrierte Symbole an beliebiger Stelle beliebig erstellt werden können, verhalten sie sich fast genau wie die Strings, die sie umschließen. Daher sind sie nicht garantiert einzigartig und nicht speicherbereinigt. Daher sind registrierte Symbole in {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}, {{jsxref("WeakRef")}} und {{jsxref("FinalizationRegistry")}}-Objekten nicht erlaubt.

### Bekannte Symbole

Alle statischen Eigenschaften des `Symbol`-Konstruktors sind selbst Symbole, deren Werte über Bereiche hinweg konstant sind. Sie sind als _bekannte Symbole_ bekannt und sollen als "Protokolle" für bestimmte eingebaute JavaScript-Operationen dienen, die es Benutzern ermöglichen, das Verhalten der Sprache anzupassen. Wenn zum Beispiel eine Konstruktorfunktion eine Methode mit {{jsxref("Symbol.hasInstance")}} als Name hat, kodiert diese Methode ihr Verhalten mit dem {{jsxref("Operators/instanceof", "instanceof")}}-Operator.

Vor der Einführung bekannter Symbole verwendete JavaScript normale Eigenschaften, um bestimmte eingebaute Operationen zu implementieren. Zum Beispiel wird die Funktion [`JSON.stringify`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) versuchen, die `toJSON()`-Methode jedes Objekts aufzurufen, und die [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/String)-Funktion wird die `toString()`- und `valueOf()`-Methoden des Objekts aufrufen. Da jedoch immer mehr Operationen zur Sprache hinzugefügt werden, könnte die Zuweisung jeder Operation eine "magische Eigenschaft" darstellen, sodass die Rückwärtskompatibilität bricht und das Verhalten der Sprache schwieriger nachvollziehbar wird. Bekannte Symbole ermöglichen es, dass die Anpassungen für normalen Code "unsichtbar" sind, der typischerweise nur String-Eigenschaften liest.

> [!NOTE]
> Die Spezifikation verwendete früher die Notation `@@<symbol-name>`, um bekannte Symbole zu kennzeichnen. Beispielsweise wurde {{jsxref("Symbol.hasInstance")}} als `@@hasInstance` geschrieben und die `Array.prototype[Symbol.iterator]()`-Methode würde als `Array.prototype[@@iterator]()` bezeichnet werden. Diese Notation wird in der Spezifikation nicht mehr verwendet, aber Sie können sie dennoch in älterer Dokumentation oder Diskussionen sehen.

Bekannte Symbole haben kein Konzept der Speicherbereinigbarkeit, da sie in einer festen Menge vorkommen und während der gesamten Lebensdauer des Programms einzigartig sind, ähnlich wie intrinsische Objekte wie `Array.prototype`, sodass sie auch in {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}, {{jsxref("WeakRef")}} und {{jsxref("FinalizationRegistry")}}-Objekten erlaubt sind.

### Finden von Symboleigenschaften auf Objekten

Die Methode {{jsxref("Object.getOwnPropertySymbols()")}} gibt ein Array von Symbolen zurück und ermöglicht es Ihnen, Symboleigenschaften auf einem gegebenen Objekt zu finden. Beachten Sie, dass jedes Objekt mit keinen eigenen Symboleigenschaften initialisiert wird, sodass dieses Array leer sein wird, es sei denn, Sie haben Symboleigenschaften auf dem Objekt gesetzt.

## Konstruktor

- {{jsxref("Symbol/Symbol", "Symbol()")}}
  - : Gibt primitive Werte des Typs Symbol zurück. Wirft einen Fehler, wenn mit `new` aufgerufen.

## Statische Eigenschaften

Die statischen Eigenschaften sind allesamt bekannte Symbole. In den Beschreibungen dieser Symbole werden wir Formulierungen wie „`Symbol.hasInstance` ist eine Methode, die bestimmt...“ verwenden, aber bedenken Sie, dass damit die Semantik einer Objektmethode gemeint ist, die dieses Symbol als Methodennamen hat (weil bekannte Symbole als „Protokolle“ fungieren), nicht der Wert des Symbols selbst.

- {{jsxref("Symbol.asyncIterator")}}
  - : Eine Methode, die den standardmäßigen AsyncIterator für ein Objekt zurückgibt. Wird von [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of) verwendet.
- {{jsxref("Symbol.hasInstance")}}
  - : Eine Methode, die bestimmt, ob ein Konstruktorobjekt ein Objekt als seine Instanz erkennt. Wird von {{jsxref("Operators/instanceof", "instanceof")}} verwendet.
- {{jsxref("Symbol.isConcatSpreadable")}}
  - : Ein Boolescher Wert, der angibt, ob ein Objekt auf seine Array-Elemente abgeflacht werden soll. Wird von {{jsxref("Array.prototype.concat()")}} verwendet.
- {{jsxref("Symbol.iterator")}}
  - : Eine Methode, die den standardmäßigen Iterator für ein Objekt zurückgibt. Wird von [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) verwendet.
- {{jsxref("Symbol.match")}}
  - : Eine Methode, die gegen einen String abgleicht und auch verwendet wird, um zu bestimmen, ob ein Objekt als regulärer Ausdruck verwendet werden kann. Wird von {{jsxref("String.prototype.match()")}} verwendet.
- {{jsxref("Symbol.matchAll")}}
  - : Eine Methode, die einen Iterator zurückgibt, der Übereinstimmungen des regulären Ausdrucks gegen einen String liefert. Wird von {{jsxref("String.prototype.matchAll()")}} verwendet.
- {{jsxref("Symbol.replace")}}
  - : Eine Methode, die übereinstimmende Teilstrings eines Strings ersetzt. Wird von {{jsxref("String.prototype.replace()")}} verwendet.
- {{jsxref("Symbol.search")}}
  - : Eine Methode, die den Index innerhalb eines Strings zurückgibt, der dem regulären Ausdruck entspricht. Wird von {{jsxref("String.prototype.search()")}} verwendet.
- {{jsxref("Symbol.species")}}
  - : Eine Konstruktorfunktion, die verwendet wird, um abgeleitete Objekte zu erstellen.
- {{jsxref("Symbol.split")}}
  - : Eine Methode, die einen String an den Indizes trennt, die einem regulären Ausdruck entsprechen. Wird von {{jsxref("String.prototype.split()")}} verwendet.
- {{jsxref("Symbol.toPrimitive")}}
  - : Eine Methode, die ein Objekt in einen primitiven Wert umwandelt.
- {{jsxref("Symbol.toStringTag")}}
  - : Ein String-Wert, der für die Standardbeschreibung eines Objekts verwendet wird. Wird von {{jsxref("Object.prototype.toString()")}} verwendet.
- {{jsxref("Symbol.unscopables")}}
  - : Ein Objektwert, dessen eigene und geerbte Eigenschaftsnamen von den [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Umgebungsbindungen des zugehörigen Objekts ausgeschlossen sind.

## Statische Methoden

- {{jsxref("Symbol.for()")}}
  - : Sucht nach vorhandenen registrierten Symbolen im globalen Symbolregister mit dem gegebenen `key` und gibt es zurück, wenn es gefunden wird. Andernfalls wird ein neues Symbol erstellt und mit `key` registriert.
- {{jsxref("Symbol.keyFor()")}}
  - : Ruft einen gemeinsamen Symbolschlüssel aus dem globalen Symbolregister für das gegebene Symbol ab.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Symbol.prototype` definiert und werden von allen `Symbol`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Symbol.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Symbol`-Instanzen ist der Anfangswert der {{jsxref("Symbol/Symbol", "Symbol")}}-Konstruktor.
- {{jsxref("Symbol.prototype.description")}}
  - : Ein schreibgeschützter String, der die Beschreibung des Symbols enthält.
- `Symbol.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Symbol"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet. Da `Symbol` jedoch auch über seine eigene [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toString)-Methode verfügt, wird diese Eigenschaft nicht verwendet, es sei denn, Sie rufen [`Object.prototype.toString.call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) mit einem Symbol als `thisArg` auf.

## Instanz-Methoden

- {{jsxref("Symbol.prototype.toString()")}}
  - : Gibt einen String zurück, der die Beschreibung des Symbols enthält. Überschreibt die {{jsxref("Object.prototype.toString()")}}-Methode.
- {{jsxref("Symbol.prototype.valueOf()")}}
  - : Gibt das Symbol zurück. Überschreibt die {{jsxref("Object.prototype.valueOf()")}}-Methode.
- [`Symbol.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive)
  - : Gibt das Symbol zurück.

## Beispiele

### Verwendung des typeof-Operators mit Symbolen

Der {{jsxref("Operators/typeof", "typeof")}}-Operator kann Ihnen helfen, Symbole zu identifizieren.

```js
typeof Symbol() === "symbol";
typeof Symbol("foo") === "symbol";
typeof Symbol.iterator === "symbol";
```

### Symbol-Typ-Konvertierungen

Einige Punkte, die beim Arbeiten mit der Typkonvertierung von Symbolen zu beachten sind.

- Beim Versuch, ein Symbol in eine Zahl zu konvertieren, wird ein {{jsxref("TypeError")}} geworfen
  (z.B. `+sym` oder `sym | 0`).
- Beim Verwenden von losem Gleichnis ergibt `Object(sym) == sym` `true`.
- `Symbol("foo") + "bar"` wirft ein {{jsxref("TypeError")}} (kann Symbol nicht in String konvertieren). Dies verhindert, dass Sie stillschweigend einen neuen Eigenschaftsnamen für einen String aus einem Symbol erstellen, zum Beispiel.
- Die ["sichere" `String(sym)`-Konvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_conversion) funktioniert wie ein Aufruf von {{jsxref("Symbol.prototype.toString()")}} bei Symbolen, aber beachten Sie, dass `new String(sym)` einen Fehler werfen wird.

### Symbole und for...in-Iterationen

Symbole sind in [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Iterationen nicht aufzählbar. Darüber hinaus wird {{jsxref("Object.getOwnPropertyNames()")}} keine Symbol-Objekteigenschaften zurückgeben, aber Sie können {{jsxref("Object.getOwnPropertySymbols()")}} verwenden, um diese zu erhalten.

```js
const obj = {};

obj[Symbol("a")] = "a";
obj[Symbol.for("b")] = "b";
obj["c"] = "c";
obj.d = "d";

for (const i in obj) {
  console.log(i);
}
// "c" "d"
```

### Symbole und JSON.stringify()

Symbol-schlüsselwerte Eigenschaften werden bei der Verwendung von `JSON.stringify()` vollständig ignoriert:

```js
JSON.stringify({ [Symbol("foo")]: "foo" });
// '{}'
```

Für weitere Einzelheiten siehe {{jsxref("JSON.stringify()")}}.

### Symbol-Wrapper-Objekte als Eigenschaftsschlüssel

Wenn ein Symbol-Wrapper-Objekt als Eigenschaftsschlüssel verwendet wird, wird dieses Objekt auf sein enthaltenes Symbol geleitet:

```js
const sym = Symbol("foo");
const obj = { [sym]: 1 };
obj[sym]; // 1
obj[Object(sym)]; // still 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Symbol` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Operators/typeof", "typeof")}}
- [JavaScript-Datentypen und Datenstrukturen](/de/docs/Web/JavaScript/Guide/Data_structures)
- [ES6 In Depth: Symbols](https://hacks.mozilla.org/2015/06/es6-in-depth-symbols/) auf hacks.mozilla.org (2015)
