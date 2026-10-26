---
title: Symbol
slug: Web/JavaScript/Reference/Global_Objects/Symbol
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

**`Symbol`** ist ein integriertes Objekt, dessen Konstruktor einen {{Glossary("Primitive", "primitiven Wert")}} vom Typ `symbol` zurückgibt – auch **Symbol-Wert** oder einfach **Symbol** genannt. Dieser Wert ist garantiert eindeutig. Symbole werden häufig verwendet, um einem Objekt eindeutige Property-Keys hinzuzufügen. Diese kollidieren nicht mit Keys, die anderer Code dem Objekt hinzufügen könnte, und bleiben vor den Mechanismen verborgen, mit denen anderer Code normalerweise auf das Objekt zugreift. Das ermöglicht eine schwache Form der {{Glossary("encapsulation", "Kapselung")}} beziehungsweise des [Verbergens von Informationen](https://en.wikipedia.org/wiki/Information_hiding).

Jeder Aufruf von `Symbol()` gibt garantiert ein eindeutiges Symbol zurück. Jeder Aufruf von `Symbol.for("key")` gibt für denselben Wert von `"key"` immer dasselbe Symbol zurück. Wird `Symbol.for("key")` aufgerufen und ein Symbol mit dem angegebenen Key in der globalen Symbol-Registry gefunden, wird dieses Symbol zurückgegeben. Andernfalls wird ein neues Symbol erstellt, unter dem angegebenen Key in die globale Symbol-Registry aufgenommen und zurückgegeben.

## Beschreibung

Um einen neuen primitiven Symbol-Wert zu erstellen, schreiben Sie `Symbol()` und übergeben optional einen String als Beschreibung:

```js
const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");
```

Der obige Code erstellt drei neue Symbole. Beachten Sie, dass `Symbol("foo")` den String `"foo"` nicht in ein Symbol umwandelt. Jeder Aufruf erstellt ein neues Symbol:

```js
Symbol("foo") === Symbol("foo"); // false
```

Die folgende Syntax mit dem Operator {{jsxref("new")}} löst einen {{jsxref("TypeError")}} aus:

```js example-bad
const sym = new Symbol(); // TypeError
```

Dies verhindert, dass statt eines neuen Symbol-Werts ausdrücklich ein `Symbol`-Wrapper-Objekt erstellt wird. Das kann überraschen, da sich Wrapper-Objekte für primitive Datentypen normalerweise ausdrücklich erstellen lassen (beispielsweise mit `new Boolean`, `new String` und `new Number`).

Wenn Sie tatsächlich ein `Symbol`-Wrapper-Objekt erstellen möchten, können Sie die Funktion `Object()` verwenden:

```js
const sym = Symbol("foo");
typeof sym; // "symbol"
const symObj = Object(sym);
typeof symObj; // "object"
```

Symbole sind der einzige primitive Datentyp mit Referenzidentität (das heißt, Sie können dasselbe Symbol nicht zweimal erstellen). Daher verhalten sie sich in mancher Hinsicht wie Objekte. Beispielsweise können sie per Garbage Collection entfernt und deshalb in Objekten vom Typ {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}, {{jsxref("WeakRef")}} und {{jsxref("FinalizationRegistry")}} verwendet werden.

### Gemeinsam genutzte Symbole in der globalen Symbol-Registry

Die oben gezeigte Syntax mit der Funktion `Symbol()` erstellt ein Symbol, dessen Wert während der gesamten Laufzeit des Programms eindeutig bleibt. Um Symbole zu erstellen, die dateiübergreifend und sogar über verschiedene Realms hinweg verfügbar sind (von denen jeder seinen eigenen globalen Gültigkeitsbereich hat), verwenden Sie die Methoden {{jsxref("Symbol.for()")}} und {{jsxref("Symbol.keyFor()")}}, um Symbole in der globalen Symbol-Registry abzulegen und daraus abzurufen.

Beachten Sie, dass die „globale Symbol-Registry“ nur ein gedankliches Konzept ist und keiner internen Datenstruktur der JavaScript-Engine entsprechen muss. Selbst wenn eine solche Registry existiert, kann JavaScript-Code nur über die Methoden `for()` und `keyFor()` auf ihren Inhalt zugreifen.

Die Methode `Symbol.for(tokenString)` nimmt einen String-Key entgegen und gibt einen Symbol-Wert aus der Registry zurück. `Symbol.keyFor(symbolValue)` nimmt dagegen einen Symbol-Wert entgegen und gibt den zugehörigen String-Key zurück. Die Methoden sind zueinander invers, sodass Folgendes `true` ergibt:

```js
Symbol.keyFor(Symbol.for("tokenString")) === "tokenString"; // true
```

Da registrierte Symbole an beliebiger Stelle erstellt werden können, verhalten sie sich fast genauso wie die Strings, denen sie zugeordnet sind. Deshalb ist ihre Eindeutigkeit nicht garantiert, und sie können nicht per Garbage Collection entfernt werden. Registrierte Symbole sind daher in Objekten vom Typ {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}, {{jsxref("WeakRef")}} und {{jsxref("FinalizationRegistry")}} nicht zulässig.

### Bekannte Symbole

Alle statischen Properties des `Symbol`-Konstruktors sind selbst Symbole, deren Werte über Realms hinweg konstant sind. Sie werden als _bekannte Symbole_ bezeichnet. Sie dienen als „Protokolle“ für bestimmte integrierte JavaScript-Operationen und ermöglichen es, das Verhalten der Sprache anzupassen. Hat eine Konstruktorfunktion beispielsweise eine Methode mit {{jsxref("Symbol.hasInstance")}} als Namen, legt diese Methode ihr Verhalten beim Operator {{jsxref("instanceof")}} fest.

Bevor es bekannte Symbole gab, verwendete JavaScript normale Properties, um bestimmte integrierte Operationen zu implementieren. Beispielsweise versucht die Funktion [`JSON.stringify`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify), die Methode `toJSON()` jedes Objekts aufzurufen. Die Funktion [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/String) ruft die Methoden `toString()` und `valueOf()` des Objekts auf. Wenn der Sprache weitere Operationen hinzugefügt werden, kann jedoch die Zuweisung einer „magischen Property“ für jede Operation die Abwärtskompatibilität beeinträchtigen und das Verhalten der Sprache schwerer nachvollziehbar machen. Bekannte Symbole ermöglichen Anpassungen, die für normalen Code „unsichtbar“ sind, da dieser üblicherweise nur auf Properties mit String-Keys zugreift.

> [!NOTE]
> Die Spezifikation verwendete früher die Schreibweise `@@<symbol-name>`, um bekannte Symbole zu bezeichnen. Beispielsweise wurde {{jsxref("Symbol.hasInstance")}} als `@@hasInstance` geschrieben und die Methode `Array.prototype[Symbol.iterator]()` als `Array.prototype[@@iterator]()` bezeichnet. Diese Schreibweise wird in der Spezifikation nicht mehr verwendet, kann Ihnen aber noch in älterer Dokumentation oder in Diskussionen begegnen.

Bei bekannten Symbolen stellt sich die Frage der Entfernbarkeit per Garbage Collection nicht: Sie bilden eine feste Menge und bleiben während der gesamten Laufzeit des Programms eindeutig, ähnlich wie intrinsische Objekte wie `Array.prototype`. Daher sind sie auch in Objekten vom Typ {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}, {{jsxref("WeakRef")}} und {{jsxref("FinalizationRegistry")}} zulässig.

### Symbol-Properties auf Objekten finden

Die Methode {{jsxref("Object.getOwnPropertySymbols()")}} gibt ein Array von Symbolen zurück und ermöglicht es Ihnen, Symbol-Properties eines bestimmten Objekts zu finden. Beachten Sie, dass jedes Objekt zunächst keine eigenen Symbol-Properties besitzt. Das Array ist daher leer, solange Sie dem Objekt keine Symbol-Properties hinzugefügt haben.

## Konstruktor

- {{jsxref("Symbol/Symbol", "Symbol()")}}
  - : Gibt primitive Werte vom Typ Symbol zurück. Wird die Funktion mit `new` aufgerufen, löst sie einen Fehler aus.

## Statische Properties

Alle statischen Properties sind bekannte Symbole. In ihren Beschreibungen verwenden wir Formulierungen wie „`Symbol.hasInstance` ist eine Methode, die bestimmt …“. Gemeint ist damit das Verhalten einer Objektmethode, die dieses Symbol als Methodennamen verwendet (da bekannte Symbole als „Protokolle“ dienen), nicht der Wert des Symbols selbst.

- {{jsxref("Symbol.asyncDispose")}}
  - : Eine Methode, die Ressourcen des Objekts asynchron freigibt, wenn das Objekt seinen Gültigkeitsbereich verlässt. Wird von der Deklaration [`await using`](/de/docs/Web/JavaScript/Reference/Statements/await_using) verwendet.
- {{jsxref("Symbol.asyncIterator")}}
  - : Eine Methode, die den standardmäßigen AsyncIterator eines Objekts zurückgibt. Wird von [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of) verwendet.
- {{jsxref("Symbol.dispose")}}
  - : Eine Methode, die Ressourcen des Objekts freigibt, wenn das Objekt seinen Gültigkeitsbereich verlässt. Wird von der Deklaration [`using`](/de/docs/Web/JavaScript/Reference/Statements/using) verwendet.
- {{jsxref("Symbol.hasInstance")}}
  - : Eine Methode, die bestimmt, ob ein Konstruktorobjekt ein Objekt als seine Instanz erkennt. Wird von {{jsxref("instanceof")}} verwendet.
- {{jsxref("Symbol.isConcatSpreadable")}}
  - : Ein Boolean-Wert, der angibt, ob ein Objekt in seine Array-Elemente aufgefächert werden soll. Wird von {{jsxref("Array.prototype.concat()")}} verwendet.
- {{jsxref("Symbol.iterator")}}
  - : Eine Methode, die den standardmäßigen Iterator eines Objekts zurückgibt. Wird von [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) verwendet.
- {{jsxref("Symbol.match")}}
  - : Eine Methode, die Übereinstimmungen mit einem String ermittelt. Sie wird auch verwendet, um festzustellen, ob ein Objekt als regulärer Ausdruck verwendet werden kann. Wird von {{jsxref("String.prototype.match()")}} verwendet.
- {{jsxref("Symbol.matchAll")}}
  - : Eine Methode, die einen Iterator zurückgibt, der Übereinstimmungen eines regulären Ausdrucks mit einem String liefert. Wird von {{jsxref("String.prototype.matchAll()")}} verwendet.
- {{jsxref("Symbol.replace")}}
  - : Eine Methode, die passende Teilstrings eines Strings ersetzt. Wird von {{jsxref("String.prototype.replace()")}} verwendet.
- {{jsxref("Symbol.search")}}
  - : Eine Methode, die den Index der Stelle in einem String zurückgibt, an der eine Übereinstimmung mit dem regulären Ausdruck gefunden wird. Wird von {{jsxref("String.prototype.search()")}} verwendet.
- {{jsxref("Symbol.species")}}
  - : Eine Konstruktorfunktion, mit der abgeleitete Objekte erstellt werden.
- {{jsxref("Symbol.split")}}
  - : Eine Methode, die einen String an den Stellen aufteilt, die einem regulären Ausdruck entsprechen. Wird von {{jsxref("String.prototype.split()")}} verwendet.
- {{jsxref("Symbol.toPrimitive")}}
  - : Eine Methode, die ein Objekt in einen primitiven Wert umwandelt.
- {{jsxref("Symbol.toStringTag")}}
  - : Ein String-Wert, der für die Standardbeschreibung eines Objekts verwendet wird. Wird von {{jsxref("Object.prototype.toString()")}} verwendet.
- {{jsxref("Symbol.unscopables")}}
  - : Ein Objektwert, dessen eigene und geerbte Property-Namen aus den Umgebungsbindungen von [`with`](/de/docs/Web/JavaScript/Reference/Statements/with) für das zugehörige Objekt ausgeschlossen werden.

## Statische Methoden

- {{jsxref("Symbol.for()")}}
  - : Sucht in der globalen Symbol-Registry nach einem bereits registrierten Symbol mit dem angegebenen `key` und gibt es zurück, falls es gefunden wird. Andernfalls wird ein neues Symbol erstellt und unter `key` registriert.
- {{jsxref("Symbol.keyFor()")}}
  - : Ruft für das angegebene Symbol den Key eines gemeinsam genutzten Symbols aus der globalen Symbol-Registry ab.

## Instanz-Properties

Diese Properties sind auf `Symbol.prototype` definiert und werden von allen `Symbol`-Instanzen gemeinsam genutzt.

- {{jsxref("Object/constructor", "Symbol.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Bei `Symbol`-Instanzen ist der Anfangswert der Konstruktor {{jsxref("Symbol/Symbol", "Symbol")}}.
- {{jsxref("Symbol.prototype.description")}}
  - : Ein schreibgeschützter String, der die Beschreibung des Symbols enthält.
- `Symbol.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der Property [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) ist der String `"Symbol"`. Diese Property wird von {{jsxref("Object.prototype.toString()")}} verwendet. Da `Symbol` jedoch auch eine eigene Methode [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toString) besitzt, wird diese Property nur verwendet, wenn Sie [`Object.prototype.toString.call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) mit einem Symbol als `thisArg` aufrufen.

## Instanzmethoden

- {{jsxref("Symbol.prototype.toString()")}}
  - : Gibt einen String zurück, der die Beschreibung des Symbols enthält. Überschreibt die Methode {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("Symbol.prototype.valueOf()")}}
  - : Gibt das Symbol zurück. Überschreibt die Methode {{jsxref("Object.prototype.valueOf()")}}.
- [`Symbol.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive)
  - : Gibt das Symbol zurück.

## Beispiele

### Den Operator typeof mit Symbolen verwenden

Mit dem Operator {{jsxref("Operators/typeof", "typeof")}} können Sie Symbole erkennen.

```js
typeof Symbol() === "symbol";
typeof Symbol("foo") === "symbol";
typeof Symbol.iterator === "symbol";
```

### Typkonvertierungen von Symbolen

Bei der Typkonvertierung von Symbolen sollten Sie Folgendes beachten:

- Der Versuch, ein Symbol in eine Zahl umzuwandeln, löst einen {{jsxref("TypeError")}} aus (beispielsweise `+sym` oder `sym | 0`).
- Bei einem Vergleich mit lockerer Gleichheit gibt `Object(sym) == sym` den Wert `true` zurück.
- `Symbol("foo") + "bar"` löst einen {{jsxref("TypeError")}} aus (ein Symbol kann nicht in einen String umgewandelt werden). Das verhindert beispielsweise, dass aus einem Symbol unbemerkt ein neuer String-Property-Name entsteht.
- Die [„sicherere“ Konvertierung mit `String(sym)`](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_conversion) funktioniert bei Symbolen wie ein Aufruf von {{jsxref("Symbol.prototype.toString()")}}. Beachten Sie jedoch, dass `new String(sym)` einen Fehler auslöst.

### Symbole und for...in-Iteration

Symbole werden bei Iterationen mit [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) nicht aufgezählt. Auch {{jsxref("Object.getOwnPropertyNames()")}} gibt keine Symbol-Properties eines Objekts zurück. Mit {{jsxref("Object.getOwnPropertySymbols()")}} können Sie diese jedoch abrufen.

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

Properties mit Symbol-Keys werden bei der Verwendung von `JSON.stringify()` vollständig ignoriert:

```js
JSON.stringify({ [Symbol("foo")]: "foo" });
// '{}'
```

Weitere Einzelheiten finden Sie unter {{jsxref("JSON.stringify()")}}.

### Symbol-Wrapper-Objekte als Property-Keys

Wird ein Symbol-Wrapper-Objekt als Property-Key verwendet, wird dieses Objekt in das enthaltene Symbol umgewandelt:

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

- [Polyfill für `Symbol` in `core-js`](https://core-js.io/docs/features/ecmascript/symbol)
- {{jsxref("Operators/typeof", "typeof")}}
- [JavaScript-Datentypen und -Datenstrukturen](/de/docs/Web/JavaScript/Guide/Data_structures)
- [ES6 im Detail: Symbole](https://hacks.mozilla.org/2015/06/es6-in-depth-symbols/) auf hacks.mozilla.org (2015)
