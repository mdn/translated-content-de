---
title: Symbol
slug: Web/JavaScript/Reference/Global_Objects/Symbol
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

**`Symbol`** ist ein eingebautes Objekt, dessen Konstruktor ein `symbol` [Primitiv](/de/docs/Glossary/Primitive) zurückgibt — auch als **Symbolwert** oder einfach **Symbol** bezeichnet — das garantiert eindeutig ist. Symbole werden oft verwendet, um Objekten eindeutige Eigenschaftsschlüssel hinzuzufügen, die nicht mit Schlüsseln kollidieren, die anderer Code möglicherweise zu dem Objekt hinzufügt, und die von Mechanismen verborgen sind, die anderer Code typischerweise verwendet, um auf das Objekt zuzugreifen. Dies ermöglicht eine Form der schwachen [Kapselung](/de/docs/Glossary/encapsulation) oder eine schwache Form der [Informationsverbergung](https://en.wikipedia.org/wiki/Information_hiding).

Jeder `Symbol()`-Aufruf garantiert die Rückgabe eines eindeutigen Symbols. Jeder `Symbol.for("key")`-Aufruf wird immer das gleiche Symbol für einen gegebenen Wert von `"key"` zurückgeben. Wenn `Symbol.for("key")` aufgerufen wird und ein Symbol mit dem angegebenen Schlüssel im globalen Symbolregister gefunden werden kann, wird dieses Symbol zurückgegeben. Andernfalls wird ein neues Symbol erstellt, im globalen Symbolregister unter dem angegebenen Schlüssel hinzugefügt und zurückgegeben.

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

Die folgende Syntax mit dem {{jsxref("Operators/new", "new")}}-Operator wird einen {{jsxref("TypeError")}} auslösen:

```js example-bad
const sym = new Symbol(); // TypeError
```

Dies verhindert, dass Entwickler ein explizites `Symbol`-Wrapper-Objekt anstelle eines neuen Symbolwerts erstellen können, und kann überraschend sein, da das Erstellen expliziter Wrapper-Objekte um primitive Datentypen im Allgemeinen möglich ist (zum Beispiel `new Boolean`, `new String` und `new Number`).

Wenn Sie wirklich ein `Symbol`-Wrapper-Objekt erstellen möchten, können Sie die `Object()`-Funktion verwenden:

```js
const sym = Symbol("foo");
typeof sym; // "symbol"
const symObj = Object(sym);
typeof symObj; // "object"
```

Da Symbole der einzige primitive Datentyp mit Referenzidentität sind (das heißt, Sie können dasselbe Symbol nicht zweimal erstellen), verhalten sie sich in gewisser Weise wie Objekte. Zum Beispiel sind sie speicherbereinigbar und können daher in {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}, {{jsxref("WeakRef")}}, und {{jsxref("FinalizationRegistry")}}-Objekten gespeichert werden.

### Geteilte Symbole im globalen Symbolregister

Die obige Syntax mit der `Symbol()`-Funktion erstellt ein Symbol, dessen Wert während der gesamten Programmlaufzeit einzigartig bleibt. Um Symbole zu erstellen, die über Dateien und sogar über verschiedene Reiche (von denen jedes seinen eigenen globalen Geltungsbereich hat) verfügbar sind, verwenden Sie die Methoden {{jsxref("Symbol.for()")}} und {{jsxref("Symbol.keyFor()")}}, um Symbole aus dem globalen Symbolregister festzulegen und abzurufen.

Beachten Sie, dass das "globale Symbolregister" nur ein fiktives Konzept ist und möglicherweise keiner internen Datenstruktur in der JavaScript-Engine entspricht – und selbst wenn ein solches Register existiert, ist dessen Inhalt für den JavaScript-Code nicht verfügbar, außer über die Methoden `for()` und `keyFor()`.

Die Methode `Symbol.for(tokenString)` nimmt einen String-Schlüssel und gibt einen Symbolwert aus dem Register zurück, während `Symbol.keyFor(symbolValue)` einen Symbolwert nimmt und den dem Symbolwert entsprechenden String-Schlüssel zurückgibt. Jede ist das Inverse der anderen, sodass das Folgende `true` ist:

```js
Symbol.keyFor(Symbol.for("tokenString")) === "tokenString"; // true
```

Da registrierte Symbole willkürlich überall erstellt werden können, verhalten sie sich fast genauso wie die Strings, die sie umhüllen. Daher sind sie nicht garantiert einzigartig und nicht speicherbereinigbar. Daher sind registrierte Symbole in {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}, {{jsxref("WeakRef")}}, und {{jsxref("FinalizationRegistry")}}-Objekten nicht erlaubt.

### Bekannte Symbole

Alle statischen Eigenschaften des `Symbol`-Konstruktors sind selbst Symbole, deren Werte über Reiche hinweg konstant sind. Sie sind als _bekannte Symbole_ bekannt und dienen als "Protokolle" für bestimmte eingebauten JavaScript-Operationen, sodass Benutzer das Verhalten der Sprache anpassen können. Wenn zum Beispiel eine Konstruktorfunktion eine Methode mit {{jsxref("Symbol.hasInstance")}} als Namen hat, wird mit dieser Methode das Verhalten mit dem {{jsxref("Operators/instanceof", "instanceof")}}-Operator kodiert.

Vor den bekannten Symbolen verwendete JavaScript normale Eigenschaften, um bestimmte eingebaute Operationen zu implementieren. Zum Beispiel wird die Funktion [`JSON.stringify`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) versuchen, die `toJSON()`-Methode jedes Objekts aufzurufen, und die Funktion [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/String) wird die `toString()`- und `valueOf()`-Methoden des Objekts aufrufen. Da jedoch mehr Operationen zur Sprache hinzugefügt werden, kann das Erstellen jeder Operation als "magische Eigenschaft" die Abwärtskompatibilität brechen und das Verhalten der Sprache schwerer nachvollziehbar machen. Bekannte Symbole ermöglichen es, dass die Anpassungen vom normalen Code "unsichtbar" sind, der typischerweise nur String-Eigenschaften liest.

> [!NOTE]
> Die Spezifikation verwendete früher die Notation `@@<symbol-name>`, um bekannte Symbole zu kennzeichnen. Zum Beispiel wurde {{jsxref("Symbol.hasInstance")}} als `@@hasInstance` geschrieben, und die Methode `Array.prototype[Symbol.iterator]()` würde als `Array.prototype[@@iterator]()` bezeichnet werden. Diese Notation wird in der Spezifikation nicht mehr verwendet, aber Sie könnten sie noch in älteren Dokumentationen oder Diskussionen sehen.

Bekannte Symbole haben nicht das Konzept der Speicherbereinigung, da sie in einer festen Anzahl vorkommen und während der gesamten Programmlaufzeit einzigartig sind, ähnlich wie intrinsische Objekte wie `Array.prototype`, sodass sie auch in {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}, {{jsxref("WeakRef")}}, und {{jsxref("FinalizationRegistry")}}-Objekten erlaubt sind.

### Symbol-Eigenschaften auf Objekten finden

Die Methode {{jsxref("Object.getOwnPropertySymbols()")}} gibt ein Array von Symbolen zurück und ermöglicht es Ihnen, Symbol-Eigenschaften auf einem bestimmten Objekt zu finden. Beachten Sie, dass jedes Objekt mit keinen eigenen Symbol-Eigenschaften initialisiert wird, sodass dieses Array leer bleibt, es sei denn, Sie haben dem Objekt Symbol-Eigenschaften zugewiesen.

## Konstruktor

- {{jsxref("Symbol/Symbol", "Symbol()")}}
  - : Gibt primitive Werte des Typs Symbol zurück. Löst einen Fehler aus, wenn mit `new` aufgerufen.

## Statische Eigenschaften

Die statischen Eigenschaften sind alle bekannte Symbole. In den Beschreibungen dieser Symbole werden wir Formulierungen verwenden wie "`Symbol.hasInstance` ist eine Methode, die bestimmt…", beachten Sie jedoch, dass dies sich auf die Semantik einer Methode eines Objekts bezieht, das dieses Symbol als Methodennamen hat (da bekannte Symbole als "Protokolle" fungieren), nicht auf den Wert des Symbols selbst.

- {{jsxref("Symbol.asyncIterator")}}
  - : Eine Methode, die den Standard-AsyncIterator für ein Objekt zurückgibt. Wird von [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of) verwendet.
- {{jsxref("Symbol.hasInstance")}}
  - : Eine Methode, die bestimmt, ob ein Konstruktorobjekt ein Objekt als Instanz erkennt. Wird von {{jsxref("Operators/instanceof", "instanceof")}} verwendet.
- {{jsxref("Symbol.isConcatSpreadable")}}
  - : Ein Boolean-Wert, der angibt, ob ein Objekt auf seine Array-Elemente abgeflacht werden soll. Wird von {{jsxref("Array.prototype.concat()")}} verwendet.
- {{jsxref("Symbol.iterator")}}
  - : Eine Methode, die den Standard-Iterator für ein Objekt zurückgibt. Wird von [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) verwendet.
- {{jsxref("Symbol.match")}}
  - : Eine Methode, die gegen einen String verwendet wird, auch um zu bestimmen, ob ein Objekt als regulärer Ausdruck verwendet werden kann. Wird von {{jsxref("String.prototype.match()")}} verwendet.
- {{jsxref("Symbol.matchAll")}}
  - : Eine Methode, die einen Iterator zurückgibt, der Übereinstimmungen des regulären Ausdrucks gegen einen String liefert. Wird von {{jsxref("String.prototype.matchAll()")}} verwendet.
- {{jsxref("Symbol.replace")}}
  - : Eine Methode, die übereinstimmende Teilstrings eines Strings ersetzt. Wird von {{jsxref("String.prototype.replace()")}} verwendet.
- {{jsxref("Symbol.search")}}
  - : Eine Methode, die den Index innerhalb eines Strings zurückgibt, der dem regulären Ausdruck entspricht. Wird von {{jsxref("String.prototype.search()")}} verwendet.
- {{jsxref("Symbol.species")}}
  - : Eine Konstruktionsfunktion, die verwendet wird, um abgeleitete Objekte zu erstellen.
- {{jsxref("Symbol.split")}}
  - : Eine Methode, die einen String an den Indizes aufteilt, die einem regulären Ausdruck entsprechen. Wird von {{jsxref("String.prototype.split()")}} verwendet.
- {{jsxref("Symbol.toPrimitive")}}
  - : Eine Methode, die ein Objekt in einen primitiven Wert umwandelt.
- {{jsxref("Symbol.toStringTag")}}
  - : Ein String-Wert, der für die Standardbeschreibung eines Objekts verwendet wird. Wird von {{jsxref("Object.prototype.toString()")}} verwendet.
- {{jsxref("Symbol.unscopables")}}
  - : Ein Objektwert, dessen eigene und geerbte Eigenschaftsnamen von den [`with`](/de/docs/Web/JavaScript/Reference/Statements/with)-Umgebungsbindungen des zugeordneten Objekts ausgeschlossen sind.

## Statische Methoden

- {{jsxref("Symbol.for()")}}
  - : Sucht nach vorhandenen registrierten Symbolen im globalen Symbolregister mit dem gegebenen `Schlüssel` und gibt es zurück, wenn es gefunden wird. Andernfalls wird ein neues Symbol erstellt und mit `Schlüssel` registriert.
- {{jsxref("Symbol.keyFor()")}}
  - : Ruft einen gemeinsamen Symbolschlüssel aus dem globalen Symbolregister für das gegebene Symbol ab.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Symbol.prototype` definiert und werden von allen `Symbol`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Symbol.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanzobjekt erstellt hat. Für `Symbol`-Instanzen ist der anfängliche Wert der {{jsxref("Symbol/Symbol", "Symbol")}}-Konstruktor.
- {{jsxref("Symbol.prototype.description")}}
  - : Ein schreibgeschützter String, der die Beschreibung des Symbols enthält.
- `Symbol.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Symbol"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet. Da `Symbol` jedoch auch seine eigene [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toString)-Methode hat, wird diese Eigenschaft nicht verwendet, es sei denn, Sie rufen [`Object.prototype.toString.call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) mit einem Symbol als `thisArg` auf.

## Instanzmethoden

- {{jsxref("Symbol.prototype.toString()")}}
  - : Gibt einen String zurück, der die Beschreibung des Symbols enthält. Überschreibt die {{jsxref("Object.prototype.toString()")}}-Methode.
- {{jsxref("Symbol.prototype.valueOf()")}}
  - : Gibt das Symbol zurück. Überschreibt die {{jsxref("Object.prototype.valueOf()")}}-Methode.
- [`Symbol.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive)
  - : Gibt das Symbol zurück.

## Beispiele

### Verwendung des typeof Operators mit Symbolen

Der {{jsxref("Operators/typeof", "typeof")}}-Operator kann Ihnen helfen, Symbole zu identifizieren.

```js
typeof Symbol() === "symbol";
typeof Symbol("foo") === "symbol";
typeof Symbol.iterator === "symbol";
```

### Symbol-Typumwandlungen

Einige Dinge zu beachten, wenn Sie mit der Typumwandlung von Symbolen arbeiten.

- Wenn Sie versuchen, ein Symbol in eine Zahl umzuwandeln, wird ein {{jsxref("TypeError")}} ausgelöst
  (z. B. `+sym` oder `sym | 0`).
- Bei Verwendung der losen Gleichheit gibt `Object(sym) == sym` `true` zurück.
- `Symbol("foo") + "bar"` löst einen {{jsxref("TypeError")}} aus (kann Symbol nicht in String umwandeln). Dies verhindert, dass Sie beispielsweise unbemerkt einen neuen String-Eigenschaftsnamen aus einem Symbol erstellen.
- Die ["sicherere" `String(sym)`-Umwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_conversion) funktioniert wie ein Aufruf von {{jsxref("Symbol.prototype.toString()")}} mit Symbolen, aber beachten Sie, dass `new String(sym)` einen Fehler auslöst.

### Symbole und for...in Iteration

Symbole sind in [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Iterationen nicht aufzählbar. Außerdem wird {{jsxref("Object.getOwnPropertyNames()")}} keine Symbolobjekteigenschaften zurückgeben, jedoch können Sie {{jsxref("Object.getOwnPropertySymbols()")}} verwenden, um diese zu erhalten.

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

Symbol-gekoppelte Eigenschaften werden beim Verwenden von `JSON.stringify()` vollständig ignoriert:

```js
JSON.stringify({ [Symbol("foo")]: "foo" });
// '{}'
```

Für weitere Details siehe {{jsxref("JSON.stringify()")}}.

### Symbol-Wrapper-Objekte als Eigenschaftsschlüssel

Wenn ein Symbol-Wrapper-Objekt als Eigenschaftsschlüssel verwendet wird, wird dieses Objekt zu seinem umschlossenen Symbol umgewandelt:

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
