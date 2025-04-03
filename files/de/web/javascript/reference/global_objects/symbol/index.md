---
title: Symbol
slug: Web/JavaScript/Reference/Global_Objects/Symbol
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{JSRef}}

**`Symbol`** ist ein eingebautes Objekt, dessen Konstruktor ein `symbol` {{Glossary("Primitive", "primitives")}} zurückgibt – auch bekannt als **Symbolwert** oder einfach **Symbol** –, das garantiert einzigartig ist. Symbole werden häufig verwendet, um einem Objekt eindeutige Eigenschaftsschlüssel hinzuzufügen, die nicht mit Schlüsseln kollidieren, die jeder andere Code dem Objekt hinzufügen könnte, und die für jegliche Mechanismen, die anderer Code normalerweise zur Zugriff auf das Objekt verwenden würde, verborgen sind. Dies ermöglicht eine Form von schwacher {{Glossary("encapsulation", "Kapselung")}} oder eine schwache Form der [Informationsverbergung](https://de.wikipedia.org/wiki/Information_Hiding).

Jeder `Symbol()`-Aufruf garantiert die Rückgabe eines eindeutigen Symbols. Jeder `Symbol.for("key")`-Aufruf gibt immer dasselbe Symbol für einen bestimmten Wert des `"key"` zurück. Wenn `Symbol.for("key")` aufgerufen wird und ein Symbol mit dem angegebenen Schlüssel im globalen Symbolregister gefunden werden kann, wird dieses Symbol zurückgegeben. Andernfalls wird ein neues Symbol erstellt, unter dem angegebenen Schlüssel im globalen Symbolregister hinzugefügt und zurückgegeben.

## Beschreibung

Um ein neues primitives Symbol zu erstellen, schreiben Sie `Symbol()` mit einem optionalen String als Beschreibung:

```js
const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");
```

Der obige Code erstellt drei neue Symbole. Beachten Sie, dass `Symbol("foo")` den String `"foo"` nicht in ein Symbol umwandelt. Es wird jedes Mal ein neues Symbol erstellt:

```js
Symbol("foo") === Symbol("foo"); // false
```

Die folgende Syntax mit dem {{jsxref("Operators/new", "new")}} Operator wird einen {{jsxref("TypeError")}} auslösen:

```js example-bad
const sym = new Symbol(); // TypeError
```

Dies verhindert, dass Autoren ein explizites `Symbol`-Wrapper-Objekt statt eines neuen Symbolwerts erstellen. Dies könnte überraschend sein, da das Erstellen expliziter Wrapper-Objekte um primitive Datentypen normalerweise möglich ist (zum Beispiel `new Boolean`, `new String` und `new Number`).

Wenn Sie wirklich ein `Symbol`-Wrapper-Objekt erstellen möchten, können Sie die `Object()`-Funktion verwenden:

```js
const sym = Symbol("foo");
typeof sym; // "symbol"
const symObj = Object(sym);
typeof symObj; // "object"
```

Da Symbole der einzige primitive Datentyp sind, der eine Referenzidentität hat (das heißt, Sie können dasselbe Symbol nicht zweimal erstellen), verhalten sie sich in gewisser Weise wie Objekte. Zum Beispiel sind sie speicherbereinigbar und können daher in {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}, {{jsxref("WeakRef")}} und {{jsxref("FinalizationRegistry")}} Objekten gespeichert werden.

### Geteilte Symbole im globalen Symbol-Register

Die oben gezeigte Syntax mit der `Symbol()`-Funktion erstellt ein Symbol, dessen Wert während der Lebensdauer des Programms einzigartig bleibt. Um Symbole zu erstellen, die über Dateien hinweg und sogar über Realms hinweg (jedes mit eigenem globalen Scope) zugänglich sind, verwenden Sie die Methoden {{jsxref("Symbol.for()")}} und {{jsxref("Symbol.keyFor()")}}, um Symbole aus dem globalen Symbolregister zu setzen und abzurufen.

Beachten Sie, dass das "globale Symbolregister" nur ein fiktives Konzept ist und möglicherweise keiner internen Datenstruktur in der JavaScript-Engine entspricht – und selbst wenn ein solches Register existiert, ist sein Inhalt für den JavaScript-Code nicht verfügbar, außer über die `for()`- und `keyFor()`-Methoden.

Die Methode `Symbol.for(tokenString)` nimmt einen String-Schlüssel und gibt einen Symbolwert aus dem Register zurück, während `Symbol.keyFor(symbolValue)` einen Symbolwert nimmt und den korrespondierenden String-Schlüssel zurückgibt. Beide Methoden sind invers zueinander, sodass das folgende `true` ergibt:

```js
Symbol.keyFor(Symbol.for("tokenString")) === "tokenString"; // true
```

Da registrierte Symbole beliebig überall erstellt werden können, verhalten sie sich fast genau wie die Strings, die sie umhüllen. Daher sind sie nicht garantiert einzigartig und nicht speicherbereinigbar. Daher sind registrierte Symbole in {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}, {{jsxref("WeakRef")}} und {{jsxref("FinalizationRegistry")}} Objekten nicht erlaubt.

### Bekannte Symbole

Alle statischen Eigenschaften des `Symbol`-Konstruktors sind selbst Symbole, deren Werte realmübergreifend konstant sind. Sie sind als _bekannte Symbole_ bekannt, und ihr Zweck ist es, als "Protokolle" für bestimmte eingebaute JavaScript-Operationen zu dienen, wodurch Benutzer das Verhalten der Sprache anpassen können. Wenn eine Konstruktorfunktion beispielsweise eine Methode mit {{jsxref("Symbol.hasInstance")}} als Namen hat, kodiert diese Methode ihr Verhalten mit dem {{jsxref("Operators/instanceof", "instanceof")}} Operator.

Vor bekannten Symbolen verwendete JavaScript normale Eigenschaften, um bestimmte eingebaute Operationen zu implementieren. Zum Beispiel versucht die Funktion [`JSON.stringify`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) die `toJSON()`-Methode jedes Objekts aufzurufen, und die [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/String) Funktion ruft die `toString()`- und `valueOf()`-Methoden des Objekts auf. Allerdings kann es, wenn mehr Operationen zur Sprache hinzugefügt werden, die Bezeichnung jeder Operation als „Magische Eigenschaft“ die Rückwärtskompatibilität brechen und es schwieriger machen, das Verhalten der Sprache vernünftig zu durchdenken. Bekannte Symbole ermöglichen es, die Anpassungen für normalen Code „unsichtbar“ zu machen, der typischerweise nur stringbasierte Eigenschaften liest.

> [!NOTE]
> Der Standard verwendete früher die Notation `@@<symbol-name>`, um bekannte Symbole zu kennzeichnen. Beispielsweise wurde {{jsxref("Symbol.hasInstance")}} als `@@hasInstance` geschrieben, und die Methode `Array.prototype[Symbol.iterator]()` wurde `Array.prototype[@@iterator]()` genannt. Diese Notation wird im Standard nicht mehr verwendet, aber Sie könnten sie noch in älterer Dokumentation oder Diskussionen sehen.

Bekannte Symbole haben nicht das Konzept der Speicherbereinigung, da sie in einem festen Satz vorkommen und über die Lebensdauer des Programms hinweg einzigartig sind, ähnlich wie intrinsische Objekte wie `Array.prototype`. Daher sind sie auch in {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}, {{jsxref("WeakRef")}} und {{jsxref("FinalizationRegistry")}} Objekten erlaubt.

### Finden von Symboleigenschaften auf Objekten

Die Methode {{jsxref("Object.getOwnPropertySymbols()")}} gibt ein Array von Symbolen zurück und ermöglicht es Ihnen, Symboleigenschaften auf einem bestimmten Objekt zu finden. Beachten Sie, dass jedes Objekt mit keinen eigenen Symboleigenschaften initialisiert wird, sodass dieses Array leer sein wird, es sei denn, Sie haben Symboleigenschaften auf dem Objekt gesetzt.

## Konstruktor

- {{jsxref("Symbol/Symbol", "Symbol()")}}
  - : Gibt primitive Werte vom Typ Symbol zurück. Löst einen Fehler aus, wenn es mit `new` aufgerufen wird.

## Statische Eigenschaften

Die statischen Eigenschaften sind allesamt bekannte Symbole. In den Beschreibungen dieser Symbole verwenden wir Sprache wie "`Symbol.hasInstance` ist eine Methode, die bestimmt…", aber beachten Sie, dass sich dies auf die Semantik einer Methode eines Objekts mit diesem Symbol als Methodennamen bezieht (da bekannte Symbole als "Protokolle" fungieren) und nicht den Wert des Symbols selbst beschreibt.

- {{jsxref("Symbol.asyncIterator")}}
  - : Eine Methode, die den Standard-AsyncIterator für ein Objekt zurückgibt. Wird verwendet von [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of).
- {{jsxref("Symbol.hasInstance")}}
  - : Eine Methode, die bestimmt, ob ein Konstruktorobjekt ein Objekt als seine Instanz erkennt. Wird verwendet von {{jsxref("Operators/instanceof", "instanceof")}}.
- {{jsxref("Symbol.isConcatSpreadable")}}
  - : Ein Boolean-Wert, der angibt, ob ein Objekt in seine Array-Elemente abgeflacht werden soll. Wird verwendet von {{jsxref("Array.prototype.concat()")}}.
- {{jsxref("Symbol.iterator")}}
  - : Eine Methode, die den Standard-Iterator für ein Objekt zurückgibt. Wird verwendet von [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of).
- {{jsxref("Symbol.match")}}
  - : Eine Methode, die mit einem String abgeglichen wird, auch verwendet, um zu bestimmen, ob ein Objekt als regulärer Ausdruck verwendet werden kann. Wird verwendet von {{jsxref("String.prototype.match()")}}.
- {{jsxref("Symbol.matchAll")}}
  - : Eine Methode, die einen Iterator zurückgibt, der Übereinstimmungen des regulären Ausdrucks mit einem String liefert. Wird verwendet von {{jsxref("String.prototype.matchAll()")}}.
- {{jsxref("Symbol.replace")}}
  - : Eine Methode, die übereinstimmende Teilstrings eines Strings ersetzt. Wird verwendet von {{jsxref("String.prototype.replace()")}}.
- {{jsxref("Symbol.search")}}
  - : Eine Methode, die den Index innerhalb eines Strings zurückgibt, der dem regulären Ausdruck entspricht. Wird verwendet von {{jsxref("String.prototype.search()")}}.
- {{jsxref("Symbol.species")}}
  - : Eine Konstruktionsfunktion, die verwendet wird, um abgeleitete Objekte zu erstellen.
- {{jsxref("Symbol.split")}}
  - : Eine Methode, die einen String an den Indizes aufteilt, die mit einem regulären Ausdruck übereinstimmen. Wird verwendet von {{jsxref("String.prototype.split()")}}.
- {{jsxref("Symbol.toPrimitive")}}
  - : Eine Methode, die ein Objekt in einen primitiven Wert umwandelt.
- {{jsxref("Symbol.toStringTag")}}
  - : Ein String-Wert, der für die Standardbeschreibung eines Objekts verwendet wird. Wird verwendet von {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("Symbol.unscopables")}}
  - : Ein Objektwert, dessen eigene und geerbte Eigenschaftsnamen von den [`with`](/de/docs/Web/JavaScript/Reference/Statements/with) Umgebungseinbindungen des zugeordneten Objekts ausgeschlossen sind.

## Statische Methoden

- {{jsxref("Symbol.for()")}}
  - : Sucht nach bestehenden registrierten Symbolen im globalen Symbolregister mit dem angegebenen `key` und gibt es zurück, wenn es gefunden wird. Andernfalls wird ein neues Symbol erstellt und mit `key` registriert.
- {{jsxref("Symbol.keyFor()")}}
  - : Ruft einen gemeinsamen Symbolschlüssel aus dem globalen Symbolregister für das angegebene Symbol ab.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Symbol.prototype` definiert und werden von allen `Symbol`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Symbol.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanzobjekt erstellt hat. Für `Symbol`-Instanzen ist der Initialwert der {{jsxref("Symbol/Symbol", "Symbol")}} Konstruktor.
- {{jsxref("Symbol.prototype.description")}}
  - : Ein schreibgeschützter String, der die Beschreibung des Symbols enthält.
- `Symbol.prototype[Symbol.toStringTag]`
  - : Der Initialwert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"Symbol"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet. Da `Symbol` jedoch auch seine eigene [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toString) Methode hat, wird diese Eigenschaft nicht verwendet, es sei denn, Sie rufen [`Object.prototype.toString.call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) mit einem Symbol als `thisArg` auf.

## Instanz-Methoden

- {{jsxref("Symbol.prototype.toString()")}}
  - : Gibt einen String zurück, der die Beschreibung des Symbols enthält. Überschreibt die {{jsxref("Object.prototype.toString()")}} Methode.
- {{jsxref("Symbol.prototype.valueOf()")}}
  - : Gibt das Symbol zurück. Überschreibt die {{jsxref("Object.prototype.valueOf()")}} Methode.
- [`Symbol.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive)
  - : Gibt das Symbol zurück.

## Beispiele

### Verwendung des typeof-Operators mit Symbolen

Der {{jsxref("Operators/typeof", "typeof")}} Operator kann Ihnen helfen, Symbole zu identifizieren.

```js
typeof Symbol() === "symbol";
typeof Symbol("foo") === "symbol";
typeof Symbol.iterator === "symbol";
```

### Symboltypkonvertierungen

Einige Dinge, die bei der Arbeit mit Typkonvertierungen von Symbolen zu beachten sind.

- Wenn Sie versuchen, ein Symbol in eine Zahl umzuwandeln, wird ein {{jsxref("TypeError")}} ausgelöst
  (z.B. `+sym` oder `sym | 0`).
- Bei Verwendung von losem Gleichheit ergibt `Object(sym) == sym` `true`.
- `Symbol("foo") + "bar"` löst einen {{jsxref("TypeError")}} aus (kann Symbol nicht in String umwandeln). Dies verhindert, dass Sie auf leise Weise einen neuen String-Eigenschaftsnamen aus einem Symbol erstellen, beispielsweise.
- Die ["sichere" `String(sym)` Konvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_conversion) funktioniert wie ein Aufruf von {{jsxref("Symbol.prototype.toString()")}} mit Symbolen, aber beachten Sie, dass `new String(sym)` einen Fehler auslösen wird.

### Symbole und for...in Iteration

Symbole sind in [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Iterationen nicht aufzählbar. Darüber hinaus wird {{jsxref("Object.getOwnPropertyNames()")}} keine Symbol-Objekteigenschaften zurückgeben. Sie können jedoch {{jsxref("Object.getOwnPropertySymbols()")}} verwenden, um diese zu erhalten.

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

Symboleigenschaften werden bei der Verwendung von `JSON.stringify()` vollständig ignoriert:

```js
JSON.stringify({ [Symbol("foo")]: "foo" });
// '{}'
```

Für weitere Details siehe {{jsxref("JSON.stringify()")}}.

### Symbol-Wrapper-Objekte als Eigenschaftsschlüssel

Wenn ein Symbol-Wrapper-Objekt als Eigenschaftsschlüssel verwendet wird, wird dieses Objekt in sein eingeschlossenes Symbol umgewandelt:

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
- [ES6 In Depth: Symbole](https://hacks.mozilla.org/2015/06/es6-in-depth-symbols/) auf hacks.mozilla.org (2015)
