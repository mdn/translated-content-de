---
title: Symbol
slug: Web/JavaScript/Reference/Global_Objects/Symbol
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Symbol`** ist ein eingebautes Objekt, dessen Konstruktor ein `symbol` {{Glossary("Primitive", "Primitiv")}} zurückgibt - auch **Symbolwert** oder einfach **Symbol** genannt -, das garantiert einzigartig ist. Symbole werden häufig verwendet, um einem Objekt eindeutige Eigenschaftsschlüssel hinzuzufügen, die nicht mit Schlüsseln kollidieren, die anderer Code dem Objekt hinzufügen könnte, und die vor allen Mechanismen verborgen sind, die anderer Code typischerweise zur Zugriffssteuerung auf das Objekt verwendet. Dies ermöglicht eine schwache Form der {{Glossary("encapsulation", "Kapselung")}} oder eine schwache Form der [Informationsverbergung](https://en.wikipedia.org/wiki/Information_hiding).

Jeder Aufruf von `Symbol()` garantiert die Rückgabe eines einzigartigen Symbols. Jeder Aufruf von `Symbol.for("key")` wird immer dasselbe Symbol für einen bestimmten Wert von `"key"` zurückgeben. Wenn `Symbol.for("key")` aufgerufen wird, wird, wenn ein Symbol mit dem angegebenen Schlüssel im globalen Symbolregister gefunden werden kann, dieses Symbol zurückgegeben. Andernfalls wird ein neues Symbol erstellt, dem globalen Symbolregister unter dem angegebenen Schlüssel hinzugefügt und zurückgegeben.

## Beschreibung

Um ein neues primitives Symbol zu erzeugen, schreiben Sie `Symbol()` mit einem optionalen String als Beschreibung:

```js
const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");
```

Der obige Code erzeugt drei neue Symbole. Beachten Sie, dass `Symbol("foo")` den String `"foo"` nicht in ein Symbol umwandelt. Es erzeugt jedes Mal ein neues Symbol:

```js
Symbol("foo") === Symbol("foo"); // false
```

Die folgende Syntax mit dem {{jsxref("Operators/new", "new")}}-Operator wird einen {{jsxref("TypeError")}} auslösen:

```js example-bad
const sym = new Symbol(); // TypeError
```

Dies verhindert, dass Autoren ein explizites `Symbol`-Wrapper-Objekt anstelle eines neuen Symbolwertes erstellen, und könnte überraschend sein, da die Erstellung expliziter Wrapper-Objekte um primitive Datentypen im Allgemeinen möglich ist (zum Beispiel `new Boolean`, `new String` und `new Number`).

Wenn Sie wirklich ein `Symbol`-Wrapper-Objekt erstellen möchten, können Sie die `Object()`-Funktion verwenden:

```js
const sym = Symbol("foo");
typeof sym; // "symbol"
const symObj = Object(sym);
typeof symObj; // "object"
```

Da Symbole der einzige primitive Datentyp sind, der eine Referenzidentität besitzt (das heißt, Sie können dasselbe Symbol nicht zweimal erstellen), verhalten sie sich in gewisser Weise wie Objekte. Beispielsweise sind sie sammelbar und können daher in {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}, {{jsxref("WeakRef")}} und {{jsxref("FinalizationRegistry")}}-Objekten gespeichert werden.

### Geteilte Symbole im globalen Symbolregister

Die oben genannte Syntax unter Verwendung der `Symbol()`-Funktion wird ein Symbol erstellen, dessen Wert während der gesamten Laufzeit des Programms einzigartig bleibt. Um Symbole zu erstellen, die über Dateien und sogar über Bereiche (von denen jeder seinen eigenen globalen Geltungsbereich hat) hinweg verfügbar sind, verwenden Sie die Methoden {{jsxref("Symbol.for()")}} und {{jsxref("Symbol.keyFor()")}}, um Symbole im globalen Symbolregister zu setzen und abzurufen.

Beachten Sie, dass das "globale Symbolregister" nur ein fiktives Konzept ist und möglicherweise keiner internen Datenstruktur in der JavaScript-Engine entspricht - und selbst wenn ein solches Register existiert, ist sein Inhalt außer über die `for()`- und `keyFor()`-Methoden nicht für den JavaScript-Code verfügbar.

Die Methode `Symbol.for(tokenString)` nimmt einen String-Schlüssel und gibt einen Symbolwert aus dem Register zurück, während `Symbol.keyFor(symbolValue)` einen Symbolwert nimmt und den String-Schlüssel zurückgibt, der ihm entspricht. Jede ist die Umkehrung der anderen, sodass das folgende wahr ist:

```js
Symbol.keyFor(Symbol.for("tokenString")) === "tokenString"; // true
```

Da registrierte Symbole beliebig überall erstellt werden können, verhalten sie sich fast genau wie die Strings, die sie ummanteln. Daher sind sie nicht garantiert einzigartig und nicht sammelbar. Deshalb sind registrierte Symbole in {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}, {{jsxref("WeakRef")}}, und {{jsxref("FinalizationRegistry")}}-Objekten nicht erlaubt.

### Bekanntgemachte Symbole

Alle statischen Eigenschaften des `Symbol`-Konstruktors sind selbst Symbole, deren Werte über Bereiche hinweg konstant sind. Sie sind als _bekanntgemachte Symbole_ bekannt und dienen als "Protokolle" für bestimmte eingebaute JavaScript-Operationen, die es Benutzern ermöglichen, das Verhalten der Sprache anzupassen. Wenn zum Beispiel eine Konstruktorfunktion eine Methode mit {{jsxref("Symbol.hasInstance")}} als Namen hat, kodiert diese Methode ihr Verhalten mit dem {{jsxref("Operators/instanceof", "instanceof")}}-Operator.

Vor den bekanntgemachten Symbolen verwendete JavaScript normale Eigenschaften, um bestimmte eingebaute Operationen zu implementieren. Beispielsweise wird die Funktion [`JSON.stringify`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) versuchen, die `toJSON()`-Methode eines jeden Objekts aufzurufen, und die Funktion [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/String) ruft die Methoden `toString()` und `valueOf()` des Objekts auf. Allerdings kann die Benennung jeder Operation als "magische Eigenschaft" mit wachsendem Funktionsumfang der Sprache die Abwärtskompatibilität gefährden und das Verhalten der Sprache schwerer nachvollziehbar machen. Bekanntgemachte Symbole erlauben es, Anpassungen "unsichtbar" vom normalen Code zu halten, der typischerweise nur String-Eigenschaften liest.

> [!NOTE]
> Die Spezifikation verwendete früher die Notation `@@<symbol-name>`, um bekanntgemachte Symbole zu bezeichnen. Zum Beispiel wurde {{jsxref("Symbol.hasInstance")}} als `@@hasInstance` geschrieben, und die `Array.prototype[Symbol.iterator]()`-Methode würde als `Array.prototype[@@iterator]()` bezeichnet. Diese Notation wird in der Spezifikation nicht mehr verwendet, aber Sie könnten sie dennoch in älterer Dokumentation oder Diskussionen finden.

Bekanntgemachte Symbole haben nicht das Konzept der Sammelbarkeit, da sie in einer festen Menge vorkommen und während der gesamten Laufzeit des Programms einzigartig sind, ähnlich wie intrinsische Objekte wie `Array.prototype`, sodass sie auch in {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}, {{jsxref("WeakRef")}}, und {{jsxref("FinalizationRegistry")}}-Objekten erlaubt sind.

### Finden von Symbol-Eigenschaften auf Objekten

Die Methode {{jsxref("Object.getOwnPropertySymbols()")}} gibt ein Array von Symbolen zurück und ermöglicht es Ihnen, Symbol-Eigenschaften auf einem bestimmten Objekt zu finden. Beachten Sie, dass jedes Objekt ohne eigene Symboleigenschaften initialisiert wird, sodass dieses Array leer ist, es sei denn, Sie haben Symbol-Eigenschaften auf dem Objekt festgelegt.

## Konstruktor

- {{jsxref("Symbol/Symbol", "Symbol()")}}
  - : Gibt primitive Werte des Typs Symbol zurück. Wirft einen Fehler, wenn es mit `new` aufgerufen wird.

## Statische Eigenschaften

Die statischen Eigenschaften sind alles bekanntgemachte Symbole. In den Beschreibungen dieser Symbole verwenden wir Sprache wie "Symbol.hasInstance ist eine Methode, die bestimmt...", aber beachten Sie, dass sich dies auf die Semantik der Methode eines Objekts bezieht, die dieses Symbol als Methodennamen hat (da bekanntgemachte Symbole als "Protokolle" fungieren), und nicht den Wert des Symbols selbst beschreibt.

- {{jsxref("Symbol.asyncIterator")}}
  - : Eine Methode, die den Standard-AsyncIterator für ein Objekt zurückgibt. Verwendet von [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of).
- {{jsxref("Symbol.hasInstance")}}
  - : Eine Methode, die bestimmt, ob ein Konstruktor-Objekt ein Objekt als seine Instanz erkennt. Verwendet von {{jsxref("Operators/instanceof", "instanceof")}}.
- {{jsxref("Symbol.isConcatSpreadable")}}
  - : Ein Boolescher Wert, der angibt, ob ein Objekt auf seine Array-Elemente flachgelegt werden sollte. Verwendet von {{jsxref("Array.prototype.concat()")}}.
- {{jsxref("Symbol.iterator")}}
  - : Eine Methode, die den Standard-Iterator für ein Objekt zurückgibt. Verwendet von [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of).
- {{jsxref("Symbol.match")}}
  - : Eine Methode, die gegen einen String matched, und auch verwendet wird, um zu bestimmen, ob ein Objekt als regulärer Ausdruck verwendet werden kann. Verwendet von {{jsxref("String.prototype.match()")}}.
- {{jsxref("Symbol.matchAll")}}
  - : Eine Methode, die einen Iterator zurückgibt, der Matches des regulären Ausdrucks gegen einen String liefert. Verwendet von {{jsxref("String.prototype.matchAll()")}}.
- {{jsxref("Symbol.replace")}}
  - : Eine Methode, die übereinstimmende Unterstrings eines Strings ersetzt. Verwendet von {{jsxref("String.prototype.replace()")}}.
- {{jsxref("Symbol.search")}}
  - : Eine Methode, die den Index innerhalb eines Strings zurückgibt, der dem regulären Ausdruck entspricht. Verwendet von {{jsxref("String.prototype.search()")}}.
- {{jsxref("Symbol.species")}}
  - : Eine Konstruktorfunktion, die verwendet wird, um abgeleitete Objekte zu erstellen.
- {{jsxref("Symbol.split")}}
  - : Eine Methode, die einen String an den Indizes aufspaltet, die einem regulären Ausdruck entsprechen. Verwendet von {{jsxref("String.prototype.split()")}}.
- {{jsxref("Symbol.toPrimitive")}}
  - : Eine Methode, die ein Objekt in einen primitiven Wert umwandelt.
- {{jsxref("Symbol.toStringTag")}}
  - : Ein String-Wert, der für die Standardbeschreibung eines Objekts verwendet wird. Verwendet von {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("Symbol.unscopables")}}
  - : Ein Objektwert, dessen eigene und geerbte Eigenschaftsnamen von den [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Umgebungsbindungen des zugehörigen Objekts ausgeschlossen sind.

## Statische Methoden

- {{jsxref("Symbol.for()")}}
  - : Sucht nach vorhandenen registrierten Symbolen im globalen Symbolregister mit dem angegebenen `key` und gibt es zurück, wenn es gefunden wird. Andernfalls wird ein neues Symbol erstellt und mit `key` registriert.
- {{jsxref("Symbol.keyFor()")}}
  - : Ruft einen gemeinsamen Symbolschlüssel aus dem globalen Symbolregister für das angegebene Symbol ab.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Symbol.prototype` definiert und werden von allen `Symbol`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Symbol.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Symbol`-Instanzen ist der Anfangswert der {{jsxref("Symbol/Symbol", "Symbol")}}-Konstruktor.
- {{jsxref("Symbol.prototype.description")}}
  - : Eine schreibgeschützte Zeichenfolge, die die Beschreibung des Symbols enthält.
- `Symbol.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist die Zeichenfolge `"Symbol"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet. Da `Symbol` jedoch auch eine eigene [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toString)-Methode hat, wird diese Eigenschaft nicht verwendet, es sei denn, Sie rufen [`Object.prototype.toString.call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) mit einem Symbol als `thisArg` auf.

## Instanz-Methoden

- {{jsxref("Symbol.prototype.toString()")}}
  - : Gibt eine Zeichenfolge zurück, die die Beschreibung des Symbols enthält. Überschreibt die {{jsxref("Object.prototype.toString()")}}-Methode.
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

### Symbol-Typkonvertierungen

Einige Dinge zu beachten, wenn Sie mit der Typkonvertierung von Symbolen arbeiten.

- Wenn versucht wird, ein Symbol in eine Zahl zu konvertieren, wird ein {{jsxref("TypeError")}} ausgelöst (z.B. `+sym` oder `sym | 0`).
- Bei lockerer Gleichheit gibt `Object(sym) == sym` `true` zurück.
- `Symbol("foo") + "bar"` wirft ein {{jsxref("TypeError")}} (Symbol kann nicht in einen String konvertiert werden). Dies verhindert, dass Sie beispielsweise stillschweigend einen neuen String-Eigenschaftsnamen aus einem Symbol erstellen.
- Die ["sicherere" `String(sym)`-Konvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_conversion) funktioniert wie ein Aufruf von {{jsxref("Symbol.prototype.toString()")}} mit Symbolen, beachten Sie jedoch, dass `new String(sym)` einen Fehler auslöst.

### Symbole und for...in-Iteration

Symbole sind in [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Iterationen nicht aufgezählt. Darüber hinaus wird {{jsxref("Object.getOwnPropertyNames()")}} keine Symbolobjekteigenschaften zurückgeben, jedoch können Sie {{jsxref("Object.getOwnPropertySymbols()")}} verwenden, um diese zu erhalten.

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

Symbolverankerte Eigenschaften werden beim Verwenden von `JSON.stringify()` völlig ignoriert:

```js
JSON.stringify({ [Symbol("foo")]: "foo" });
// '{}'
```

Für weitere Details siehe {{jsxref("JSON.stringify()")}}.

### Symbol-Wrapper-Objekte als Eigenschaftsschlüssel

Wenn ein Symbol-Wrapper-Objekt als Eigenschaftsschlüssel verwendet wird, wird dieses Objekt auf sein ummanteltes Symbol umgewandelt:

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
