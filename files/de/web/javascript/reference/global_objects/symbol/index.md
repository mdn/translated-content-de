---
title: Symbol
slug: Web/JavaScript/Reference/Global_Objects/Symbol
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

**`Symbol`** ist ein eingebautes Objekt, dessen Konstruktor ein `symbol` [primitive](/de/docs/Glossary/Primitive) zurückgibt – auch **Symbolwert** oder einfach **Symbol** genannt –, das garantiert einzigartig ist. Symbole werden häufig verwendet, um einem Objekt eindeutige Eigenschaftsschlüssel hinzuzufügen, die nicht mit Schlüsseln kollidieren, die anderer Code dem Objekt möglicherweise hinzufügt, und die von anderen von Code typischerweise verwendeten Mechanismen zum Zugriff auf das Objekt verborgen sind. Dies ermöglicht eine Form der schwachen [Kapselung](/de/docs/Glossary/encapsulation) oder einer schwachen Form der [Informationsverbergung](https://en.wikipedia.org/wiki/Information_hiding).

Jeder Aufruf von `Symbol()` gibt garantiert ein eindeutiges Symbol zurück. Jeder Aufruf von `Symbol.for("key")` gibt immer dasselbe Symbol für einen bestimmten Wert von `"key"` zurück. Wenn `Symbol.for("key")` aufgerufen wird und ein Symbol mit dem angegebenen Schlüssel im globalen Symbol-Register gefunden wird, wird dieses Symbol zurückgegeben. Andernfalls wird ein neues Symbol erstellt, dem globalen Symbol-Register unter dem angegebenen Schlüssel hinzugefügt und zurückgegeben.

## Beschreibung

Um ein neues primitives Symbol zu erstellen, schreiben Sie `Symbol()` mit einem optionalen String als Beschreibung:

```js
const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");
```

Der obige Code erstellt drei neue Symbole. Beachten Sie, dass `Symbol("foo")` den String `"foo"` nicht in ein Symbol umwandelt. Es erstellt jedes Mal ein neues Symbol:

```js
Symbol("foo") === Symbol("foo"); // false
```

Die folgende Syntax mit dem {{jsxref("Operators/new", "new")}} Operator wird einen {{jsxref("TypeError")}} auslösen:

```js example-bad
const sym = new Symbol(); // TypeError
```

Dies verhindert, dass Autoren ein explizites `Symbol`-Wrapper-Objekt anstelle eines neuen Symbolwerts erstellen, und könnte überraschen, da das Erstellen expliziter Wrapper-Objekte um primitive Datentypen im Allgemeinen möglich ist (zum Beispiel `new Boolean`, `new String` und `new Number`).

Wenn Sie wirklich ein `Symbol`-Wrapper-Objekt erstellen möchten, können Sie die `Object()`-Funktion verwenden:

```js
const sym = Symbol("foo");
typeof sym; // "symbol"
const symObj = Object(sym);
typeof symObj; // "object"
```

Da Symbole der einzige primitive Datentyp sind, der Identität durch Referenz aufweist (d. h., Sie können dasselbe Symbol nicht zweimal erstellen), verhalten sie sich teilweise wie Objekte. Zum Beispiel sind sie speicherfreigebbar und können daher in {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}, {{jsxref("WeakRef")}}, und {{jsxref("FinalizationRegistry")}} Objekten gespeichert werden.

### Geteilte Symbole im globalen Symbol-Register

Die obige Syntax mit der `Symbol()`-Funktion erstellt ein Symbol, dessen Wert während der gesamten Lebensdauer des Programms eindeutig bleibt. Um Symbole zu erstellen, die über Dateien hinweg und sogar über verschiedene Bereiche (von denen jeder seinen eigenen globalen Scope hat) verfügbar sind, verwenden Sie die Methoden {{jsxref("Symbol.for()")}} und {{jsxref("Symbol.keyFor()")}} zum Festlegen und Abrufen von Symbolen aus dem globalen Symbol-Register.

Beachten Sie, dass das "globale Symbol-Register" nur ein fiktives Konzept ist und möglicherweise keiner internen Datenstruktur in der JavaScript-Engine entspricht – und selbst wenn ein solches Register existiert, sind seine Inhalte für den JavaScript-Code nur über die `for()` und `keyFor()` Methoden zugänglich.

Die Methode `Symbol.for(tokenString)` nimmt einen String-Schlüssel und gibt einen Symbolwert aus dem Register zurück, während `Symbol.keyFor(symbolValue)` einen Symbolwert annimmt und den entsprechenden String-Schlüssel zurückgibt. Jede ist das Inverse der anderen, daher ist das Folgende `true`:

```js
Symbol.keyFor(Symbol.for("tokenString")) === "tokenString"; // true
```

Da registrierte Symbole überall beliebig erstellt werden können, verhalten sie sich fast genau wie die Strings, die sie ummanteln. Daher sind sie nicht garantiert einzigartig und können nicht speicherfreigegeben werden. Registrierte Symbole sind daher in {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}, {{jsxref("WeakRef")}}, und {{jsxref("FinalizationRegistry")}} Objekten nicht zulässig.

### Wohlbekannte Symbole

Alle statischen Eigenschaften des `Symbol`-Konstruktors sind selbst Symbole, deren Werte über Bereiche hinweg konstant sind. Sie sind als _wohlbekannte Symbole_ bekannt, und ihr Zweck besteht darin, als "Protokolle" für bestimmte eingebaute JavaScript-Operationen zu dienen, sodass Benutzer das Verhalten der Sprache anpassen können. Zum Beispiel, wenn eine Konstruktorfunktion eine Methode mit {{jsxref("Symbol.hasInstance")}} als Namen hat, wird dieses Verhalten mit dem {{jsxref("Operators/instanceof", "instanceof")}} Operator kodiert.

Vor den wohbekannten Symbolen verwendete JavaScript normale Eigenschaften, um bestimmte eingebaute Operationen zu implementieren. Beispielsweise versucht die [`JSON.stringify`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) Funktion, die `toJSON()` Methode jedes Objekts aufzurufen, und die [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/String) Funktion ruft die `toString()` und `valueOf()` Methoden des Objekts auf. Da jedoch mehr Operationen zur Sprache hinzugefügt werden, kann die Zuweisung jeder Operation einer "magischen Eigenschaft" die Abwärtskompatibilität beeinträchtigen und das Verhalten der Sprache schwerer nachvollziehbar machen. Wohlbekannte Symbole ermöglichen es, dass Anpassungen für normalen Code "unsichtbar" sind, der normalerweise nur String-Eigenschaften liest.

> [!NOTE]
> Die Spezifikation verwendete früher die Notation `@@<symbol-name>`, um wohbekannte Symbole zu kennzeichnen. Zum Beispiel wurde {{jsxref("Symbol.hasInstance")}} als `@@hasInstance` geschrieben, und die `Array.prototype[Symbol.iterator]()` Methode würde `Array.prototype[@@iterator]()` genannt. Diese Notation wird in der Spezifikation nicht mehr verwendet, kann jedoch noch in älterer Dokumentation oder Diskussionen vorkommen.

Wohlbekannte Symbole haben kein Konzept der Speicherfreigebarkeit, da sie in einem festen Satz vorkommen und während der gesamten Lebensdauer des Programms einzigartig sind, ähnlich wie intrinsische Objekte wie `Array.prototype`, sodass sie auch in {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}, {{jsxref("WeakRef")}}, und {{jsxref("FinalizationRegistry")}} Objekten zugelassen sind.

### Auffinden von Symboleigenschaften auf Objekten

Die Methode {{jsxref("Object.getOwnPropertySymbols()")}} gibt ein Array von Symbolen zurück und ermöglicht es Ihnen, Symboleigenschaften auf einem gegebenen Objekt zu finden. Beachten Sie, dass jedes Objekt mit keinen eigenen Symboleigenschaften initialisiert wird, sodass dieses Array leer ist, es sei denn, Sie haben dem Objekt Symboleigenschaften hinzugefügt.

## Konstruktor

- {{jsxref("Symbol/Symbol", "Symbol()")}}
  - : Gibt primitive Werte vom Typ Symbol zurück. Löst einen Fehler aus, wenn es mit `new` aufgerufen wird.

## Statische Eigenschaften

Die statischen Eigenschaften sind alle wohlbekannten Symbole. In den Beschreibungen dieser Symbole werden wir Sprache wie "`Symbol.hasInstance` ist eine Methode, die bestimmt,..." verwenden, aber beachten Sie, dass dies auf die Semantik einer Objektmethode verweist, die dieses Symbol als Methodennamen hat (weil wohlbekannte Symbole als "Protokolle" fungieren), nicht auf den Wert des Symbols selbst.

- {{jsxref("Symbol.asyncIterator")}}
  - : Eine Methode, die den Standard-AsyncIterator für ein Objekt zurückgibt. Wird von [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of) verwendet.
- {{jsxref("Symbol.hasInstance")}}
  - : Eine Methode, die bestimmt, ob ein Konstruktorobjekt ein Objekt als seine Instanz erkennt. Wird von {{jsxref("Operators/instanceof", "instanceof")}} verwendet.
- {{jsxref("Symbol.isConcatSpreadable")}}
  - : Ein Boolescher Wert, der angibt, ob ein Objekt auf seine Array-Elemente flachgestrichen werden soll. Wird von {{jsxref("Array.prototype.concat()")}} verwendet.
- {{jsxref("Symbol.iterator")}}
  - : Eine Methode, die den Standard-Iterator für ein Objekt zurückgibt. Wird von [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) verwendet.
- {{jsxref("Symbol.match")}}
  - : Eine Methode, die mit einem String abgleicht, auch um zu bestimmen, ob ein Objekt als regulärer Ausdruck verwendet werden kann. Wird von {{jsxref("String.prototype.match()")}} verwendet.
- {{jsxref("Symbol.matchAll")}}
  - : Eine Methode, die einen Iterator zurückgibt, der Übereinstimmungen des regulären Ausdrucks gegen einen String liefert. Wird von {{jsxref("String.prototype.matchAll()")}} verwendet.
- {{jsxref("Symbol.replace")}}
  - : Eine Methode, die übereinstimmende Teilstrings eines Strings ersetzt. Wird von {{jsxref("String.prototype.replace()")}} verwendet.
- {{jsxref("Symbol.search")}}
  - : Eine Methode, die den Index innerhalb eines Strings zurückgibt, der dem regulären Ausdruck entspricht. Wird von {{jsxref("String.prototype.search()")}} verwendet.
- {{jsxref("Symbol.species")}}
  - : Eine Konstruktorfunktion, die verwendet wird, um abgeleitete Objekte zu erstellen.
- {{jsxref("Symbol.split")}}
  - : Eine Methode, die einen String an den Indices teilt, die einem regulären Ausdruck entsprechen. Wird von {{jsxref("String.prototype.split()")}} verwendet.
- {{jsxref("Symbol.toPrimitive")}}
  - : Eine Methode, die ein Objekt in einen primitiven Wert umwandelt.
- {{jsxref("Symbol.toStringTag")}}
  - : Ein String-Wert, der für die Standardbeschreibung eines Objekts verwendet wird. Wird von {{jsxref("Object.prototype.toString()")}} verwendet.
- {{jsxref("Symbol.unscopables")}}
  - : Ein Objektwert, dessen eigene und geerbte Eigenschaftsnamen von den [`with`](/de/docs/Web/JavaScript/Reference/Statements/with) Umgebungsbindungen des zugehörigen Objekts ausgeschlossen sind.

## Statische Methoden

- {{jsxref("Symbol.for()")}}
  - : Sucht nach bestehenden registrierten Symbolen im globalen Symbol-Register mit dem angegebenen `key` und gibt es zurück, wenn es gefunden wird. Andernfalls wird ein neues Symbol erstellt und mit `key` registriert.
- {{jsxref("Symbol.keyFor()")}}
  - : Ruft einen gemeinsamen Symbol-Schlüssel aus dem globalen Symbol-Register für das gegebene Symbol ab.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Symbol.prototype` definiert und werden von allen `Symbol`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Symbol.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Symbol`-Instanzen ist der Anfangswert der {{jsxref("Symbol/Symbol", "Symbol")}} Konstruktor.
- {{jsxref("Symbol.prototype.description")}}
  - : Ein schreibgeschützter String, der die Beschreibung des Symbols enthält.
- `Symbol.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"Symbol"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet. Da jedoch `Symbol` auch seine eigene [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toString) Methode hat, wird diese Eigenschaft nicht verwendet, es sei denn, Sie rufen [`Object.prototype.toString.call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) mit einem Symbol als `thisArg` auf.

## Instanzmethoden

- {{jsxref("Symbol.prototype.toString()")}}
  - : Gibt einen String zurück, der die Beschreibung des Symbols enthält. Überschreibt die {{jsxref("Object.prototype.toString()")}} Methode.
- {{jsxref("Symbol.prototype.valueOf()")}}
  - : Gibt das Symbol zurück. Überschreibt die {{jsxref("Object.prototype.valueOf()")}} Methode.
- [`Symbol.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive)
  - : Gibt das Symbol zurück.

## Beispiele

### Verwendung des typeof Operators mit Symbolen

Der {{jsxref("Operators/typeof", "typeof")}} Operator kann Ihnen helfen, Symbole zu identifizieren.

```js
typeof Symbol() === "symbol";
typeof Symbol("foo") === "symbol";
typeof Symbol.iterator === "symbol";
```

### Symboltypkonvertierungen

Einige Dinge zu beachten bei der Arbeit mit Typkonvertierungen von Symbolen.

- Beim Versuch, ein Symbol in eine Zahl umzuwandeln, wird ein {{jsxref("TypeError")}} ausgelöst
  (z.B. `+sym` oder `sym | 0`).
- Bei Verwendung von lockerer Gleichheit gibt `Object(sym) == sym` `true` zurück.
- `Symbol("foo") + "bar"` löst einen {{jsxref("TypeError")}} aus (Symbol kann nicht in einen String konvertiert werden). Dies verhindert, dass Sie stillschweigend einen neuen String-Eigenschaftsnamen aus einem Symbol erstellen, zum Beispiel.
- Die ["sicherere" `String(sym)`-Konvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_conversion) funktioniert wie ein Aufruf von {{jsxref("Symbol.prototype.toString()")}} bei Symbolen, jedoch wird `new String(sym)` einen Fehler auslösen.

### Symbole und for...in Iterationen

Symbole sind in [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Iterationen nicht aufzählbar. Darüber hinaus wird {{jsxref("Object.getOwnPropertyNames()")}} keine Symbol-Objekteigenschaften zurückgeben, jedoch können Sie {{jsxref("Object.getOwnPropertySymbols()")}} verwenden, um diese zu erhalten.

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

Symboleigenschaftsschlüssel werden beim Verwenden von `JSON.stringify()` vollständig ignoriert:

```js
JSON.stringify({ [Symbol("foo")]: "foo" });
// '{}'
```

Für weitere Details siehe {{jsxref("JSON.stringify()")}}.

### Symbol-Wrapper-Objekte als Eigenschaftsschlüssel

Wenn ein Symbol-Wrapper-Objekt als Eigenschaftsschlüssel verwendet wird, wird dieses Objekt in sein ummanteltes Symbol umgewandelt:

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
- [JavaScript-Datentypen und Datenstrukturen](/de/docs/Web/JavaScript/Data_structures)
- [ES6 In Depth: Symbols](https://hacks.mozilla.org/2015/06/es6-in-depth-symbols/) auf hacks.mozilla.org (2015)
