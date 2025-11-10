---
title: Symbol
slug: Web/JavaScript/Reference/Global_Objects/Symbol
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

**`Symbol`** ist ein eingebautes Objekt, dessen Konstruktor einen `symbol` {{Glossary("Primitive", "primitiven Wert")}} zurückgibt – auch als **Symbolwert** oder einfach **Symbol** bezeichnet –, der garantiert einzigartig ist. Symbole werden oft verwendet, um eindeutige Eigenschaftsschlüssel zu einem Objekt hinzuzufügen, die nicht mit Schlüsseln kollidieren, die anderer Code möglicherweise zu dem Objekt hinzufügt und die vor allen Mechanismen versteckt sind, die anderer Code typischerweise verwendet, um auf das Objekt zuzugreifen. Das ermöglicht eine Form der schwachen {{Glossary("encapsulation", "Kapselung")}} oder eine schwache Form von [Informationsverbergung](https://en.wikipedia.org/wiki/Information_hiding).

Jeder Aufruf von `Symbol()` garantiert die Rückgabe eines eindeutigen Symbols. Jeder Aufruf von `Symbol.for("key")` gibt immer das gleiche Symbol für einen bestimmten Wert von `"key"` zurück. Wenn `Symbol.for("key")` aufgerufen wird und ein Symbol mit dem angegebenen Schlüssel im globalen Symbolregister gefunden werden kann, wird dieses Symbol zurückgegeben. Andernfalls wird ein neues Symbol erstellt, unter dem angegebenen Schlüssel zum globalen Symbolregister hinzugefügt und zurückgegeben.

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

Die folgende Syntax mit dem {{jsxref("Operators/new", "new")}} Operator wirft einen {{jsxref("TypeError")}}:

```js example-bad
const sym = new Symbol(); // TypeError
```

Dies verhindert, dass Autoren ein explizites `Symbol` Wrapper-Objekt anstelle eines neuen Symbolwerts erstellen, was überraschend sein kann, da das Erstellen von expliziten Wrapper-Objekten um primitive Datentypen in der Regel möglich ist (zum Beispiel `new Boolean`, `new String` und `new Number`).

Wenn Sie wirklich ein `Symbol` Wrapper-Objekt erstellen möchten, können Sie die `Object()` Funktion verwenden:

```js
const sym = Symbol("foo");
typeof sym; // "symbol"
const symObj = Object(sym);
typeof symObj; // "object"
```

Da Symbole der einzige primitive Datentyp sind, der eine Referenzidentität hat (das heißt, Sie können nicht zweimal dasselbe Symbol erstellen), verhalten sie sich in gewisser Weise wie Objekte. Zum Beispiel sind sie Garbage-Collectable und können daher in {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}, {{jsxref("WeakRef")}}, und {{jsxref("FinalizationRegistry")}} Objekten gespeichert werden.

### Geteilte Symbole im globalen Symbolregister

Die obige Syntax mit der `Symbol()` Funktion erstellt ein Symbol, dessen Wert während der gesamten Laufzeit des Programms einzigartig bleibt. Um Symbole zu erstellen, die über Dateien hinweg und sogar über Realms hinweg verfügbar sind (von denen jeder seinen eigenen globalen Gültigkeitsbereich hat), verwenden Sie die Methoden {{jsxref("Symbol.for()")}} und {{jsxref("Symbol.keyFor()")}}, um Symbole aus dem globalen Symbolregister zu setzen und abzurufen.

Beachten Sie, dass das "globale Symbolregister" nur ein fiktives Konzept ist und möglicherweise keiner internen Datenstruktur in der JavaScript-Engine entspricht – und selbst wenn ein solches Register existiert, steht dessen Inhalt dem JavaScript-Code nicht zur Verfügung, außer durch die `for()` und `keyFor()` Methoden.

Die Methode `Symbol.for(tokenString)` nimmt einen String-Schlüssel und gibt einen Symbolwert aus dem Register zurück, während `Symbol.keyFor(symbolValue)` einen Symbolwert nimmt und den entsprechenden String-Schlüssel zurückgibt. Jeder von ihnen ist das Inverse des anderen, sodass das Folgende `true` ist:

```js
Symbol.keyFor(Symbol.for("tokenString")) === "tokenString"; // true
```

Da registrierte Symbole beliebig überall erstellt werden können, verhalten sie sich fast genau wie die Strings, die sie umhüllen. Daher sind sie nicht garantiert einzigartig und nicht Garbage-Collectable. Daher sind registrierte Symbole in {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}, {{jsxref("WeakRef")}}, und {{jsxref("FinalizationRegistry")}} Objekten nicht erlaubt.

### Bekannte Symbole

Alle statischen Eigenschaften des `Symbol` Konstruktors sind selbst Symbole, deren Werte in allen Realms konstant sind. Sie sind als _bekannte Symbole_ bekannt und dienen als "Protokolle" für bestimmte eingebaute JavaScript-Operationen, die es Benutzern ermöglichen, das Verhalten der Sprache anzupassen. Zum Beispiel, wenn eine Konstruktorfunktion eine Methode mit {{jsxref("Symbol.hasInstance")}} als Namen hat, kodiert diese Methode ihr Verhalten mit dem {{jsxref("Operators/instanceof", "instanceof")}} Operator.

Vor bekannten Symbolen verwendete JavaScript normale Eigenschaften, um bestimmte eingebaute Operationen zu implementieren. Zum Beispiel wird die [`JSON.stringify`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) Funktion versuchen, die `toJSON()` Methode jedes Objekts aufzurufen, und die [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/String) Funktion wird die `toString()` und `valueOf()` Methoden des Objekts aufrufen. Wenn jedoch mehr Operationen zur Sprache hinzugefügt werden, könnte das Zuweisen jeder Operation einer "magischen Eigenschaft" die Rückwärtskompatibilität gefährden und das Verhalten der Sprache schwerer nachvollziehbar machen. Bekannte Symbole ermöglichen es, dass die Anpassungen im normalen Code "unsichtbar" bleiben, der typischerweise nur String-Eigenschaften liest.

> [!NOTE]
> Die Spezifikation verwendete früher die Notation `@@<symbol-name>`, um bekannte Symbole zu bezeichnen. Beispielsweise wurde {{jsxref("Symbol.hasInstance")}} als `@@hasInstance` geschrieben, und die `Array.prototype[Symbol.iterator]()` Methode würde `Array.prototype[@@iterator]()` genannt werden. Diese Notation wird in der Spezifikation nicht mehr verwendet, aber Sie könnten sie immer noch in älteren Dokumentationen oder Diskussionen sehen.

Bekannte Symbole haben nicht das Konzept der Garbage-Collectability, weil sie in einem festen Satz vorkommen und einzigartig während der gesamten Lebensdauer des Programms sind, ähnlich wie intrinsische Objekte wie `Array.prototype`, daher sind sie auch in {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}, {{jsxref("WeakRef")}}, und {{jsxref("FinalizationRegistry")}} Objekten erlaubt.

### Finden von Symboleigenschaften auf Objekten

Die Methode {{jsxref("Object.getOwnPropertySymbols()")}} gibt ein Array von Symbolen zurück und lässt Sie Symboleigenschaften auf einem gegebenen Objekt finden. Beachten Sie, dass jedes Objekt ohne eigene Symboleigenschaften initialisiert wird, sodass dieses Array leer bleibt, es sei denn, Sie haben Symboleigenschaften auf dem Objekt gesetzt.

## Konstruktor

- {{jsxref("Symbol/Symbol", "Symbol()")}}
  - : Gibt primitive Werte vom Typ Symbol zurück. Wirft einen Fehler, wenn mit `new` aufgerufen.

## Statische Eigenschaften

Die statischen Eigenschaften sind alles bekannte Symbole. In den Beschreibungen dieser Symbole verwenden wir Formulierungen wie "`Symbol.hasInstance` ist eine Methode, die…", aber beachten Sie, dass dies sich auf die Semantik der Methode eines Objekts bezieht, das dieses Symbol als Namen der Methode hat (weil bekannte Symbole als "Protokolle" fungieren), und nicht den Wert des Symbols selbst beschreibt.

- {{jsxref("Symbol.asyncDispose")}}
  - : Eine Methode, die Ressourcen des Objekts asynchron freigibt, wenn das Objekt aus dem Gültigkeitsbereich entfernt wird. Wird von der [`await using`](/de/docs/Web/JavaScript/Reference/Statements/await_using) Deklaration verwendet.
- {{jsxref("Symbol.asyncIterator")}}
  - : Eine Methode, die den Standard-AsyncIterator für ein Objekt zurückgibt. Wird von [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of) verwendet.
- {{jsxref("Symbol.dispose")}}
  - : Eine Methode, die Ressourcen des Objekts freigibt, wenn das Objekt aus dem Gültigkeitsbereich entfernt wird. Wird von der [`using`](/de/docs/Web/JavaScript/Reference/Statements/using) Deklaration verwendet.
- {{jsxref("Symbol.hasInstance")}}
  - : Eine Methode, die bestimmt, ob ein Konstruktorobjekt ein Objekt als seine Instanz erkennt. Wird von {{jsxref("Operators/instanceof", "instanceof")}} verwendet.
- {{jsxref("Symbol.isConcatSpreadable")}}
  - : Ein Boolean-Wert, der angibt, ob ein Objekt auf seine Array-Elemente abgeflacht werden soll. Wird von {{jsxref("Array.prototype.concat()")}} verwendet.
- {{jsxref("Symbol.iterator")}}
  - : Eine Methode, die den Standard-Iterator für ein Objekt zurückgibt. Wird von [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) verwendet.
- {{jsxref("Symbol.match")}}
  - : Eine Methode, die gegen einen String abgleicht, auch um festzustellen, ob ein Objekt als regulärer Ausdruck verwendet werden kann. Wird von {{jsxref("String.prototype.match()")}} verwendet.
- {{jsxref("Symbol.matchAll")}}
  - : Eine Methode, die einen Iterator zurückgibt, der Übereinstimmungen des regulären Ausdrucks gegen einen String liefert. Wird von {{jsxref("String.prototype.matchAll()")}} verwendet.
- {{jsxref("Symbol.replace")}}
  - : Eine Methode, die übereinstimmende Teilstrings eines Strings ersetzt. Wird von {{jsxref("String.prototype.replace()")}} verwendet.
- {{jsxref("Symbol.search")}}
  - : Eine Methode, die den Index innerhalb eines Strings zurückgibt, der dem regulären Ausdruck entspricht. Wird von {{jsxref("String.prototype.search()")}} verwendet.
- {{jsxref("Symbol.species")}}
  - : Eine Konstruktorfunktion, die verwendet wird, um abgeleitete Objekte zu erstellen.
- {{jsxref("Symbol.split")}}
  - : Eine Methode, die einen String an den Indizes aufteilt, die einem regulären Ausdruck entsprechen. Wird von {{jsxref("String.prototype.split()")}} verwendet.
- {{jsxref("Symbol.toPrimitive")}}
  - : Eine Methode, die ein Objekt in einen primitiven Wert umwandelt.
- {{jsxref("Symbol.toStringTag")}}
  - : Ein String-Wert, der für die Standardbeschreibung eines Objekts verwendet wird. Wird von {{jsxref("Object.prototype.toString()")}} verwendet.
- {{jsxref("Symbol.unscopables")}}
  - : Ein Objektwert, dessen eigene und geerbte Eigenschaftsnamen von den [`with`](/de/docs/Web/JavaScript/Reference/Statements/with) Umgebungsbindungen des zugehörigen Objekts ausgeschlossen sind.

## Statische Methoden

- {{jsxref("Symbol.for()")}}
  - : Sucht nach bestehenden registrierten Symbolen im globalen Symbolregister mit dem gegebenen `key` und gibt es zurück, wenn gefunden. Andernfalls wird ein neues Symbol erstellt und mit `key` registriert.
- {{jsxref("Symbol.keyFor()")}}
  - : Ruft einen gemeinsamen Symbolschlüssel aus dem globalen Symbolregister für das gegebene Symbol ab.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Symbol.prototype` definiert und werden von allen `Symbol` Instanzen geteilt.

- {{jsxref("Object/constructor", "Symbol.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Symbol` Instanzen ist der Anfangswert der {{jsxref("Symbol/Symbol", "Symbol")}} Konstruktor.
- {{jsxref("Symbol.prototype.description")}}
  - : Ein schreibgeschützter String, der die Beschreibung des Symbols enthält.
- `Symbol.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"Symbol"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet. Da `Symbol` jedoch auch seine eigene [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toString) Methode hat, wird diese Eigenschaft nicht verwendet, es sei denn, Sie rufen [`Object.prototype.toString.call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) mit einem Symbol als `thisArg` auf.

## Instanz-Methoden

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

### Typumwandlungen mit Symbolen

Einige Dinge, die bei der Arbeit mit Typumwandlungen von Symbolen zu beachten sind.

- Wenn versucht wird, ein Symbol in eine Zahl umzuwandeln, wird ein {{jsxref("TypeError")}} ausgelöst
  (z.B. `+sym` oder `sym | 0`).
- Bei Verwendung der losen Gleichheit gibt `Object(sym) == sym` `true` zurück.
- `Symbol("foo") + "bar"` wirft einen {{jsxref("TypeError")}} (kann Symbol nicht in String umwandeln). Dies verhindert, dass Sie stillschweigend einen neuen String-Eigenschaftsnamen aus einem Symbol erstellen, zum Beispiel.
- Die ["sichere" `String(sym)` Umwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_conversion) funktioniert wie ein Aufruf von {{jsxref("Symbol.prototype.toString()")}} mit Symbolen, aber beachten Sie, dass `new String(sym)` einen Fehler auslöst.

### Symbole und for...in Iteration

Symbole sind in [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Iterationen nicht auflistbar. Darüber hinaus gibt {{jsxref("Object.getOwnPropertyNames()")}} keine Symbol-Objekteigenschaften zurück, jedoch können Sie {{jsxref("Object.getOwnPropertySymbols()")}} verwenden, um diese zu erhalten.

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

Symbol-gekennzeichnete Eigenschaften werden bei der Verwendung von `JSON.stringify()` vollständig ignoriert:

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
