---
title: Symbol
slug: Web/JavaScript/Reference/Global_Objects/Symbol
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

**`Symbol`** ist ein eingebautes Objekt, dessen Konstruktor ein `symbol` [primitive](/de/docs/Glossary/Primitive) zurückgibt — auch als **Symbolwert** oder einfach nur **Symbol** bezeichnet — der garantiert einzigartig ist. Symbole werden häufig verwendet, um einem Objekt einzigartige Schlüsseleigenschaften hinzuzufügen, die nicht mit Schlüsseln kollidieren, die anderer Code möglicherweise dem Objekt hinzufügt, und die vor Mechanismen verborgen sind, die anderer Code typischerweise verwendet, um auf das Objekt zuzugreifen. Dies ermöglicht eine Form der schwachen {{Glossary("Kapselung")}} oder eine schwache Form der [Informationsverbergung](https://en.wikipedia.org/wiki/Information_hiding).

Jeder `Symbol()`-Aufruf garantiert die Rückgabe eines einzigartigen Symbols. Jeder `Symbol.for("key")`-Aufruf gibt immer dasselbe Symbol für einen gegebenen Wert von `"key"` zurück. Wenn `Symbol.for("key")` aufgerufen wird, wird, falls ein Symbol mit dem gegebenen Schlüssel im globalen Symbol-Register gefunden werden kann, dieses Symbol zurückgegeben. Andernfalls wird ein neues Symbol erstellt, unter dem gegebenen Schlüssel dem globalen Symbol-Register hinzugefügt und zurückgegeben.

## Beschreibung

Um ein neues primitives Symbol zu erstellen, schreiben Sie `Symbol()` mit einem optionalen String als Beschreibung:

```js
const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");
```

Der obige Code erzeugt drei neue Symbole. Beachten Sie, dass `Symbol("foo")` den String `"foo"` nicht in ein Symbol umwandelt. Jedes Mal wird ein neues Symbol erstellt:

```js
Symbol("foo") === Symbol("foo"); // false
```

Die folgende Syntax mit dem {{jsxref("Operators/new", "new")}}-Operator wird einen {{jsxref("TypeError")}} werfen:

```js example-bad
const sym = new Symbol(); // TypeError
```

Dies verhindert, dass Autoren ein explizites `Symbol`-Wrapper-Objekt anstelle eines neuen Symbolwerts erstellen, und könnte überraschend sein, da das Erstellen expliziter Wrapper-Objekte um primitive Datentypen im Allgemeinen möglich ist (z.B. `new Boolean`, `new String` und `new Number`).

Wenn Sie wirklich ein `Symbol`-Wrapper-Objekt erstellen möchten, können Sie die `Object()`-Funktion verwenden:

```js
const sym = Symbol("foo");
typeof sym; // "symbol"
const symObj = Object(sym);
typeof symObj; // "object"
```

Da Symbole der einzige primitive Datentyp mit Referenzidentität sind (das heißt, dass Sie dasselbe Symbol nicht zweimal erstellen können), verhalten sie sich in gewisser Weise wie Objekte. Beispielsweise sind sie speicherbereinigbar und können daher in {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}, {{jsxref("WeakRef")}} und {{jsxref("FinalizationRegistry")}}-Objekten gespeichert werden.

### Gemeinsame Symbole im globalen Symbol-Register

Die obige Syntax, die die `Symbol()`-Funktion verwendet, erstellt ein Symbol, dessen Wert während der gesamten Lebensdauer des Programms einzigartig bleibt. Um Symbole zu erstellen, die in mehreren Dateien und sogar in mehreren Realms (von denen jedes seinen eigenen globalen Gültigkeitsbereich hat) verfügbar sind, verwenden Sie die Methoden {{jsxref("Symbol.for()")}} und {{jsxref("Symbol.keyFor()")}}, um Symbole im globalen Symbol-Register festzulegen und abzurufen.

Beachten Sie, dass das "globale Symbol-Register" nur ein fiktives Konzept ist und möglicherweise keiner internen Datenstruktur in der JavaScript-Engine entspricht — und selbst wenn ein solches Register existiert, ist dessen Inhalt für JavaScript-Code nicht verfügbar, außer durch die `for()`- und `keyFor()`-Methoden.

Die Methode `Symbol.for(tokenString)` nimmt einen String-Schlüssel und gibt einen Symbolwert aus dem Register zurück, während `Symbol.keyFor(symbolValue)` einen Symbolwert nimmt und den entsprechenden String-Schlüssel zurückgibt. Jeder ist das Inverse des anderen, sodass das Folgende `true` ist:

```js
Symbol.keyFor(Symbol.for("tokenString")) === "tokenString"; // true
```

Da registrierte Symbole beliebig überall erstellt werden können, verhalten sie sich fast genauso wie die Strings, die sie umhüllen. Daher sind sie nicht garantiert einzigartig und nicht speicherbereinigbar. Daher sind registrierte Symbole in {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}, {{jsxref("WeakRef")}} und {{jsxref("FinalizationRegistry")}}-Objekten unzulässig.

### Wohlbekannte Symbole

Alle statischen Eigenschaften des `Symbol`-Konstruktors sind selbst Symbole, deren Werte über Realms hinweg konstant sind. Sie sind als _wohlbekannte Symbole_ bekannt, und ihr Zweck ist es, als "Protokolle" für bestimmte eingebaute JavaScript-Operationen zu dienen, sodass Benutzer das Verhalten der Sprache anpassen können. Wenn beispielsweise eine Konstruktorfunktion eine Methode mit {{jsxref("Symbol.hasInstance")}} als Namen hat, wird dieses Verhalten mit dem {{jsxref("Operators/instanceof", "instanceof")}}-Operator verschlüsselt.

Vor den wohlbekannten Symbolen verwendete JavaScript normale Eigenschaften, um bestimmte eingebaute Operationen zu implementieren. Beispielsweise versucht die Funktion [`JSON.stringify`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify), die `toJSON()`-Methode jedes Objekts aufzurufen, und die [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/String)-Funktion ruft die `toString()`- und `valueOf()`-Methoden des Objekts auf. Da jedoch mehr Operationen zur Sprache hinzugefügt werden, kann die Zuweisung jeder Operation einer "magischen Eigenschaft" die Rückwärtskompatibilität brechen und das Verhalten der Sprache schwerer nachvollziehbar machen. Wohlbekannte Symbole ermöglichen es, die Anpassungen im normalen Code "unsichtbar" zu machen, der typischerweise nur String-Eigenschaften liest.

> [!NOTE]
> Die Spezifikation verwendete früher die Notation `@@<symbol-name>`, um wohlbekannte Symbole zu bezeichnen. Beispielsweise wurde {{jsxref("Symbol.hasInstance")}} als `@@hasInstance` geschrieben, und die `Array.prototype[Symbol.iterator]()`-Methode würde als `Array.prototype[@@iterator]()` bezeichnet. Diese Notation wird in der Spezifikation nicht mehr verwendet, möglicherweise sehen Sie sie jedoch noch in älterer Dokumentation oder Diskussionen.

Wohlbekannte Symbole haben nicht das Konzept der Speicherbereinigung, da sie in einer festen Menge vorkommen und während der Lebensdauer des Programms einzigartig sind, ähnlich wie intrinsische Objekte wie `Array.prototype`. Daher sind sie auch in {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}, {{jsxref("WeakRef")}} und {{jsxref("FinalizationRegistry")}}-Objekten zulässig.

### Finden von Symboleigenschaften auf Objekten

Die Methode {{jsxref("Object.getOwnPropertySymbols()")}} gibt ein Array von Symbolen zurück und ermöglicht es Ihnen, Symboleigenschaften auf einem gegebenen Objekt zu finden. Beachten Sie, dass jedes Objekt mit keinen eigenen Symboleigenschaften initialisiert wird, sodass dieses Array leer ist, es sei denn, Sie haben Symboleigenschaften am Objekt gesetzt.

## Konstruktor

- {{jsxref("Symbol/Symbol", "Symbol()")}}
  - : Gibt primitive Werte vom Typ Symbol zurück. Wirft einen Fehler, wenn mit `new` aufgerufen.

## Statische Eigenschaften

Die statischen Eigenschaften sind alle wohlbekannten Symbole. In den Beschreibungen dieser Symbole werden wir Ausdrücke verwenden wie "`Symbol.hasInstance` ist eine Methode, die bestimmt...", beachten Sie jedoch, dass dies sich auf die Semantik einer Objektsmethode bezieht, die dieses Symbol als Methodennamen hat (da wohlbekannte Symbole als "Protokolle" dienen), nicht auf den Symbolwert selbst.

- {{jsxref("Symbol.asyncIterator")}}
  - : Eine Methode, die den Standard-AsyncIterator für ein Objekt zurückgibt. Wird von [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of) verwendet.
- {{jsxref("Symbol.hasInstance")}}
  - : Eine Methode, die bestimmt, ob ein Konstruktorobjekt ein Objekt als seine Instanz erkennt. Wird von {{jsxref("Operators/instanceof", "instanceof")}} verwendet.
- {{jsxref("Symbol.isConcatSpreadable")}}
  - : Ein Boolescher Wert, der angibt, ob ein Objekt auf seine Array-Elemente abgeflacht werden sollte. Wird von {{jsxref("Array.prototype.concat()")}} verwendet.
- {{jsxref("Symbol.iterator")}}
  - : Eine Methode, die den Standard-Iterator für ein Objekt zurückgibt. Wird von [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) verwendet.
- {{jsxref("Symbol.match")}}
  - : Eine Methode, die auf einen String passt, auch verwendet, um festzustellen, ob ein Objekt als regulärer Ausdruck verwendet werden kann. Wird von {{jsxref("String.prototype.match()")}} verwendet.
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
  - : Eine Methode, die ein Objekt in einen primitiven Wert konvertiert.
- {{jsxref("Symbol.toStringTag")}}
  - : Ein Stringwert, der für die Standardbeschreibung eines Objekts verwendet wird. Wird von {{jsxref("Object.prototype.toString()")}} verwendet.
- {{jsxref("Symbol.unscopables")}}
  - : Ein Objektwert, dessen eigene und geerbte Eigenschaftsnamen von den [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Umgebungsbindungen des zugehörigen Objekts ausgeschlossen sind.

## Statische Methoden

- {{jsxref("Symbol.for()")}}
  - : Sucht nach existierenden registrierten Symbolen im globalen Symbol-Register mit dem gegebenen `key` und gibt es zurück, wenn es gefunden wird. Andernfalls wird ein neues Symbol erstellt und mit `key` registriert.
- {{jsxref("Symbol.keyFor()")}}
  - : Ruft einen gemeinsamen Symbolschlüssel aus dem globalen Symbol-Register für das gegebene Symbol ab.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Symbol.prototype` definiert und werden von allen `Symbol`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Symbol.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Bei `Symbol`-Instanzen ist der Anfangswert der {{jsxref("Symbol/Symbol", "Symbol")}}-Konstruktor.
- {{jsxref("Symbol.prototype.description")}}
  - : Ein schreibgeschützter String, der die Beschreibung des Symbols enthält.
- `Symbol.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Symbol"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet. Da `Symbol` jedoch auch seine eigene [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toString)-Methode hat, wird diese Eigenschaft nicht verwendet, es sei denn, Sie rufen [`Object.prototype.toString.call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) mit einem Symbol als `thisArg` auf.

## Instanz-Methoden

- {{jsxref("Symbol.prototype.toString()")}}
  - : Gibt einen String zurück, der die Beschreibung des Symbols enthält. Überschreibt die {{jsxref("Object.prototype.toString()")}}-Methode.
- {{jsxref("Symbol.prototype.valueOf()")}}
  - : Gibt das Symbol zurück. Überschreibt die {{jsxref("Object.prototype.valueOf()")}}-Methode.
- [`Symbol.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive)
  - : Gibt das Symbol zurück.

## Beispiele

### Verwenden des typeof-Operators mit Symbolen

Der {{jsxref("Operators/typeof", "typeof")}}-Operator kann Ihnen helfen, Symbole zu identifizieren.

```js
typeof Symbol() === "symbol";
typeof Symbol("foo") === "symbol";
typeof Symbol.iterator === "symbol";
```

### Symbol-Typkonvertierungen

Einige Dinge zu beachten bei der Arbeit mit Symbole-Typkonvertierungen.

- Wenn Sie versuchen, ein Symbol in eine Zahl zu konvertieren, wird ein {{jsxref("TypeError")}} ausgelöst
  (z.B. `+sym` oder `sym | 0`).
- Bei der Verwendung von losem Gleichheitsoperator wird `Object(sym) == sym` `true` zurückgeben.
- `Symbol("foo") + "bar"` wirft einen {{jsxref("TypeError")}} (Symbol kann nicht in String konvertiert werden). Dies verhindert, dass Sie heimlich einen neuen String-Eigenschaftsnamen aus einem Symbol erstellen, beispielsweise.
- Die ["sichere" `String(sym)`-Konvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_conversion) funktioniert ähnlich einem Aufruf von {{jsxref("Symbol.prototype.toString()")}} mit Symbolen, aber beachten Sie, dass `new String(sym)` einen Fehler werfen wird.

### Symbole und for...in-Iteration

Symbole sind bei [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Iterationen nicht aufzählbar. Außerdem wird {{jsxref("Object.getOwnPropertyNames()")}} keine Symbol-Objekteigenschaften zurückgeben. Sie können jedoch {{jsxref("Object.getOwnPropertySymbols()")}} verwenden, um diese zu erhalten.

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

Symbol-schlüsselbasierte Eigenschaften werden bei der Verwendung von `JSON.stringify()` vollständig ignoriert:

```js
JSON.stringify({ [Symbol("foo")]: "foo" });
// '{}'
```

Für weitere Details siehe {{jsxref("JSON.stringify()")}}.

### Symbol-Wrapper-Objekte als Eigenschaftsschlüssel

Wenn ein Symbol-Wrapper-Objekt als Eigenschaftsschlüssel verwendet wird, wird dieses Objekt in sein umschlossenes Symbol umgewandelt:

```js
const sym = Symbol("foo");
const obj = { [sym]: 1 };
obj[sym]; // 1
obj[Object(sym)]; // immer noch 1
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
