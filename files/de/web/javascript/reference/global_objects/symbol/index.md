---
title: Symbol
slug: Web/JavaScript/Reference/Global_Objects/Symbol
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

**`Symbol`** ist ein eingebautes Objekt, dessen Konstruktor ein `symbol` {{Glossary("Primitive", "Primitive")}} zurückgibt — auch als **Symbolwert** oder einfach **Symbol** bezeichnet — das garantiert einzigartig ist. Symbole werden oft verwendet, um einzigartige Eigenschaftsschlüssel zu einem Objekt hinzuzufügen, die nicht mit Schlüsseln kollidieren, die anderer Code möglicherweise dem Objekt hinzufügt, und die versteckt sind vor Mechanismen, die anderer Code typischerweise zum Zugriff auf das Objekt verwendet. Das ermöglicht eine Form der schwachen {{Glossary("encapsulation", "Kapselung")}} oder eine schwache Form der [Informationsverbergung](https://en.wikipedia.org/wiki/Information_hiding).

Jeder `Symbol()`-Aufruf gibt garantiert ein einzigartiges Symbol zurück. Jeder `Symbol.for("key")`-Aufruf wird immer das gleiche Symbol für einen gegebenen Wert von `"key"` zurückgeben. Wenn `Symbol.for("key")` aufgerufen wird, wird, falls ein Symbol mit dem gegebenen Schlüssel im globalen Symbolregister gefunden werden kann, dieses Symbol zurückgegeben. Andernfalls wird ein neues Symbol erstellt, zum globalen Symbolregister unter dem gegebenen Schlüssel hinzugefügt und zurückgegeben.

## Beschreibung

Um ein neues primitives Symbol zu erstellen, schreiben Sie `Symbol()` mit einer optionalen Zeichenkette als dessen Beschreibung:

```js
const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");
```

Der obige Code erstellt drei neue Symbole. Beachten Sie, dass `Symbol("foo")` die Zeichenkette `"foo"` nicht in ein Symbol umwandelt. Es erstellt jedes Mal ein neues Symbol:

```js
Symbol("foo") === Symbol("foo"); // false
```

Die folgende Syntax mit dem {{jsxref("new")}}-Operator wird einen {{jsxref("TypeError")}} werfen:

```js example-bad
const sym = new Symbol(); // TypeError
```

Dies verhindert, dass Autoren ein explizites `Symbol`-Wrapper-Objekt anstelle eines neuen Symbolwerts erstellen, und könnte überraschend sein, da das Erstellen expliziter Wrapper-Objekte für primitive Datentypen generell möglich ist (z.B. `new Boolean`, `new String` und `new Number`).

Wenn Sie wirklich ein `Symbol`-Wrapper-Objekt erstellen möchten, können Sie die Funktion `Object()` verwenden:

```js
const sym = Symbol("foo");
typeof sym; // "symbol"
const symObj = Object(sym);
typeof symObj; // "object"
```

Da Symbole der einzige primitive Datentyp sind, der Referenzidentität hat (d.h. Sie können das gleiche Symbol nicht zweimal erstellen), verhalten sie sich in gewisser Weise wie Objekte. Zum Beispiel sind sie Müll sammelbar und können daher in {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}, {{jsxref("WeakRef")}} und {{jsxref("FinalizationRegistry")}} Objekten gespeichert werden.

### Geteilte Symbole im globalen Symbolregister

Die obige Syntax mit der `Symbol()`-Funktion erzeugt ein Symbol, dessen Wert während der gesamten Programmlaufzeit einzigartig bleibt. Um Symbole zu erstellen, die über Dateien und sogar über Bereiche (von denen jeder seinen eigenen globalen Geltungsbereich hat) verfügbar sind, verwenden Sie die Methoden {{jsxref("Symbol.for()")}} und {{jsxref("Symbol.keyFor()")}}, um Symbole aus dem globalen Symbolregister zu setzen und abzurufen.

Beachten Sie, dass das "globale Symbolregister" nur ein fiktives Konzept ist und möglicherweise keiner internen Datenstruktur in der JavaScript-Engine entspricht — und selbst wenn ein solches Register existiert, ist dessen Inhalt dem JavaScript-Code nicht zugänglich, außer über die Methoden `for()` und `keyFor()`.

Die Methode `Symbol.for(tokenString)` nimmt einen Zeichenfolgeschlüssel und gibt einen Symbolwert aus dem Register zurück, während `Symbol.keyFor(symbolValue)` einen Symbolwert nimmt und den Zeichenfolgeschlüssel zurückgibt, der diesem entspricht. Jede ist das Inverse der anderen, sodass das Folgende `true` ist:

```js
Symbol.keyFor(Symbol.for("tokenString")) === "tokenString"; // true
```

Da registrierte Symbole überall arbiträr erstellt werden können, verhalten sie sich nahezu genau wie die Zeichenfolgen, die sie umhüllen. Daher sind sie nicht garantiert einzigartig und können nicht Müll gesammelt werden. Daher sind registrierte Symbole in {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}, {{jsxref("WeakRef")}} und {{jsxref("FinalizationRegistry")}} Objekten nicht erlaubt.

### Bekannt Symbole

Alle statischen Eigenschaften des `Symbol`-Konstruktors sind selbst Symbole, deren Werte im gesamten Geltungsbereichs konstant bleiben. Sie werden als _bekannt Symbole_ bezeichnet, und ihr Zweck besteht darin, als "Protokolle" für bestimmte eingebaute JavaScript-Operationen zu dienen, die es Benutzern ermöglichen, das Verhalten der Sprache zu anzupassen. Wenn z.B. eine Konstruktionsfunktion eine Methode mit {{jsxref("Symbol.hasInstance")}} als Namen hat, wird diese Methode ihr Verhalten mit dem {{jsxref("instanceof")}}-Operator kodieren.

Vor den bekannt Symbolen verwendete JavaScript normale Eigenschaften, um bestimmte eingebauten Operationen zu implementieren. Zum Beispiel wird die Funktion [`JSON.stringify`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) versuchen, die `toJSON()`-Methode jedes Objekts aufzurufen, und die [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/String) Funktion wird die `toString()`- und `valueOf()`-Methoden des Objekts aufrufen. Da jedoch immer mehr Operationen zur Sprache hinzugefügt werden, kann die Zuweisung einer "magischen Eigenschaft" für jede Operation die Abwärtskompatibilität brechen und das Verhalten der Sprache schwer nachvollziehbar machen. Bekannt Symbole ermöglichen es, dass die Anpassungen für normalen Code "unsichtbar" sind, der typischerweise nur Zeichenfolgeneigenschaften liest.

> [!NOTE]
> Die Spezifikation verwendete früher die Notation `@@<symbol-name>`, um bekannt Symbole zu kennzeichnen. Zum Beispiel wurde {{jsxref("Symbol.hasInstance")}} als `@@hasInstance` geschrieben und die Methode `Array.prototype[Symbol.iterator]()` würde `Array.prototype[@@iterator]()` genannt. Diese Notation wird in der Spezifikation nicht mehr verwendet, aber Sie könnten sie immer noch in älteren Dokumentationen oder Diskussionen sehen.

Bekannt Symbole haben nicht das Konzept der Müll sammelbarkeit, weil sie in einer festen Menge vorkommen und während der Programmlaufzeit einzigartig sind, ähnlich wie intrinsische Objekte wie `Array.prototype`, daher sind sie auch in {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}, {{jsxref("WeakRef")}} und {{jsxref("FinalizationRegistry")}} Objekten erlaubt.

### Finden von Symboleigenschaften auf Objekten

Die Methode {{jsxref("Object.getOwnPropertySymbols()")}} gibt ein Array von Symbolen zurück und lässt Sie Symboleigenschaften auf einem gegebenen Objekt finden. Beachten Sie, dass jedes Objekt mit keinen eigenen Symboleigenschaften initialisiert wird, sodass dieses Array leer ist, es sei denn, Sie haben Symboleigenschaften auf dem Objekt gesetzt.

## Konstruktor

- {{jsxref("Symbol/Symbol", "Symbol()")}}
  - : Gibt primitive Werte des Typs Symbol zurück. Wirft einen Fehler, wenn mit `new` aufgerufen.

## Statische Eigenschaften

Die statischen Eigenschaften sind alle bekannt Symbole. In diesen Beschreibungen von Symbolen verwenden wir Ausdrücke wie "`Symbol.hasInstance` is a method determining…", aber beachten Sie, dass dies auf die Semantik einer Methode eines Objekts verweist, die dieses Symbol als Methodenname hat (weil bekannt Symbole als "Protokolle" fungieren), und nicht den Wert des Symbols selbst beschreibt.

- {{jsxref("Symbol.asyncDispose")}}
  - : Eine Methode, die Ressourcen des Objekts asynchron freigibt, wenn das Objekt nicht mehr im Geltungsbereich ist. Wird bei der Deklaration [`await using`](/de/docs/Web/JavaScript/Reference/Statements/await_using) verwendet.
- {{jsxref("Symbol.asyncIterator")}}
  - : Eine Methode, die den Standard-AsyncIterator für ein Objekt zurückgibt. Wird von [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of) verwendet.
- {{jsxref("Symbol.dispose")}}
  - : Eine Methode, die Ressourcen des Objekts freigibt, wenn das Objekt nicht mehr im Geltungsbereich ist. Wird bei der Deklaration [`using`](/de/docs/Web/JavaScript/Reference/Statements/using) verwendet.
- {{jsxref("Symbol.hasInstance")}}
  - : Eine Methode, die bestimmt, ob ein Konstruktorobjekt ein Objekt als seine Instanz erkennt. Wird von {{jsxref("instanceof")}} verwendet.
- {{jsxref("Symbol.isConcatSpreadable")}}
  - : Ein boolescher Wert, der angibt, ob ein Objekt in seine Array-Elemente aufgeteilt werden sollte. Wird von {{jsxref("Array.prototype.concat()")}} verwendet.
- {{jsxref("Symbol.iterator")}}
  - : Eine Methode, die den Standard-Iterator für ein Objekt zurückgibt. Wird von [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) verwendet.
- {{jsxref("Symbol.match")}}
  - : Eine Methode, die gegen eine Zeichenkette matcht, wird auch verwendet, um festzustellen, ob ein Objekt als regulärer Ausdruck verwendet werden kann. Wird von {{jsxref("String.prototype.match()")}} verwendet.
- {{jsxref("Symbol.matchAll")}}
  - : Eine Methode, die einen Iterator zurückgibt, der die Matches des regulären Ausdrucks gegen eine Zeichenkette erzeugt. Wird von {{jsxref("String.prototype.matchAll()")}} verwendet.
- {{jsxref("Symbol.replace")}}
  - : Eine Methode, die übereinstimmende Teilzeichenfolg einer Zeichenfolge ersetzt. Wird von {{jsxref("String.prototype.replace()")}} verwendet.
- {{jsxref("Symbol.search")}}
  - : Eine Methode, die den Index in einer Zeichenfolge zurückgibt, der mit dem regulären Ausdruck übereinstimmt. Wird von {{jsxref("String.prototype.search()")}} verwendet.
- {{jsxref("Symbol.species")}}
  - : Eine Konstruktorfunktion, die verwendet wird, um abgeleitete Objekte zu erstellen.
- {{jsxref("Symbol.split")}}
  - : Eine Methode, die eine Zeichenkette an den Indizes teilt, die mit einem regulären Ausdruck übereinstimmen. Wird von {{jsxref("String.prototype.split()")}} verwendet.
- {{jsxref("Symbol.toPrimitive")}}
  - : Eine Methode, die ein Objekt in einen primitiven Wert umwandelt.
- {{jsxref("Symbol.toStringTag")}}
  - : Ein Zeichenfolgenwert, der für die Standardbeschreibung eines Objekts verwendet wird. Wird von {{jsxref("Object.prototype.toString()")}} verwendet.
- {{jsxref("Symbol.unscopables")}}
  - : Ein Objektwert, dessen eigene und geerbte Eigenschaftsnamen von den [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Umgebungsbindungen des zugehörigen Objekts ausgeschlossen sind.

## Statische Methoden

- {{jsxref("Symbol.for()")}}
  - : Sucht nach bestehenden registrierten Symbolen im globalen Symbolregister mit dem gegebenen `key` und gibt es zurück, wenn es gefunden wird. Andernfalls wird ein neues Symbol erstellt und mit `key` registriert.
- {{jsxref("Symbol.keyFor()")}}
  - : Ruft einen gemeinsamen Symbolschlüssel aus dem globalen Symbolregister für das gegebene Symbol ab.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Symbol.prototype` definiert und werden von allen `Symbol`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Symbol.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanzobjekt erstellt hat. Für `Symbol`-Instanzen ist der Anfangswert der {{jsxref("Symbol/Symbol", "Symbol")}}-Konstruktor.
- {{jsxref("Symbol.prototype.description")}}
  - : Eine schreibgeschützte Zeichenfolge, die die Beschreibung des Symbols enthält.
- `Symbol.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist die Zeichenfolge `"Symbol"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet. Da `Symbol` jedoch auch seine eigene [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toString)-Methode hat, wird diese Eigenschaft nicht verwendet, es sei denn, Sie rufen [`Object.prototype.toString.call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) mit einem Symbol als `thisArg` auf.

## Instanzmethoden

- {{jsxref("Symbol.prototype.toString()")}}
  - : Gibt eine Zeichenfolge zurück, die die Beschreibung des Symbols enthält. Überschreibt die {{jsxref("Object.prototype.toString()")}}-Methode.
- {{jsxref("Symbol.prototype.valueOf()")}}
  - : Gibt das Symbol zurück. Überschreibt die {{jsxref("Object.prototype.valueOf()")}}-Methode.
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

### Konvertierungen von Symboltypen

Einige Dinge, die Sie beachten sollten, wenn Sie mit Typkonvertierungen von Symbolen arbeiten.

- Wenn versucht wird, ein Symbol in eine Zahl zu konvertieren, wird ein {{jsxref("TypeError")}} ausgelöst
  (z.B. `+sym` oder `sym | 0`).
- Bei Verwendung loser Gleichheit gibt `Object(sym) == sym` `true` zurück.
- `Symbol("foo") + "bar"` wirft einen {{jsxref("TypeError")}} (kann Symbol nicht in Zeichenfolge konvertieren). Dies verhindert, dass Sie z.B. stillschweigend einen neuen Zeichenfolgen-Eigenschaftsnamen aus einem Symbol erstellen.
- Die ["sichere" `String(sym)`-Konvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_conversion) funktioniert wie ein Aufruf von {{jsxref("Symbol.prototype.toString()")}} mit Symbolen, aber beachten Sie, dass `new String(sym)` einen Fehler wirft.

### Symbole und for...in Iteration

Symbole sind in [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Iterationen nicht enumerable. Außerdem wird {{jsxref("Object.getOwnPropertyNames()")}} keine Symboleigenschaften von Objekten zurückgeben. Sie können jedoch {{jsxref("Object.getOwnPropertySymbols()")}} verwenden, um diese zu erhalten.

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

Durch `JSON.stringify()` werden symbolschlüssel-Eigenschaften vollständig ignoriert:

```js
JSON.stringify({ [Symbol("foo")]: "foo" });
// '{}'
```

Für weitere Details siehe {{jsxref("JSON.stringify()")}}.

### Symbol-Wrapper-Objekte als Eigenschaftenschlüssel

Wenn ein Symbol-Wrapper-Objekt als Eigenschaftenschlüssel verwendet wird, wird dieses Objekt in das umschlossene Symbol umgewandelt:

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
- [JavaScript Datentypen und Datenstrukturen](/de/docs/Web/JavaScript/Guide/Data_structures)
- [ES6 In Depth: Symbols](https://hacks.mozilla.org/2015/06/es6-in-depth-symbols/) auf hacks.mozilla.org (2015)
