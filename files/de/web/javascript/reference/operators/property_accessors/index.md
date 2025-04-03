---
title: Property accessors
slug: Web/JavaScript/Reference/Operators/Property_accessors
l10n:
  sourceCommit: 3fcc43c9a6dd8e2eac385da0496586105256a468
---

{{jsSidebar("Operators")}}

**Property accessors** bieten Zugriff auf die Eigenschaften eines Objekts, indem entweder die Punktnotation oder die Klammernotation verwendet wird.

{{InteractiveExample("JavaScript Demo: Property accessors", "taller")}}

```js interactive-example
const person1 = {};
person1["firstname"] = "Mario";
person1["lastname"] = "Rossi";

console.log(person1.firstname);
// Expected output: "Mario"

const person2 = {
  firstname: "John",
  lastname: "Doe",
};

console.log(person2["lastname"]);
// Expected output: "Doe"
```

## Syntax

```js-nolint
object.propertyName
object[expression]
object.#privateProperty
```

## Beschreibung

Ein Objekt kann man sich als ein _assoziatives Array_ (auch bekannt als _Map_, _Dictionary_, _Hash_, _Lookup-Tabelle_) vorstellen. Die _Schlüssel_ in diesem Array sind die Namen der {{Glossary("Property/JavaScript", "Eigenschaften")}} des Objekts.

Es gibt zwei Möglichkeiten, auf Eigenschaften zuzugreifen: _Punktnotation_ und _Klammernotation_.

### Punktnotation

Im `object.propertyName`-Syntax muss `propertyName` ein gültiger JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) sein, der auch ein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) sein kann. Zum Beispiel ist `object.$1` gültig, während `object.1` nicht gültig ist.

```js
const variable = object.propertyName;
object.propertyName = value;
```

```js
const object = {};
object.$1 = "foo";
console.log(object.$1); // 'foo'
```

```js-nolint example-bad
const object = {};
object.1 = "bar"; // SyntaxError
console.log(object.1); // SyntaxError
```

Hier wird die Methode namens `createElement` von `document` abgerufen und aufgerufen.

```js
document.createElement("pre");
```

Wenn Sie eine Methode für eine numerische Literal verwenden und das numerische Literal keinen Exponenten und keinen Dezimalpunkt hat, sollten Sie {{Glossary("Whitespace", "Leerzeichen")}} vor dem Punkt lassen, der dem Methodenaufruf vorausgeht, damit der Punkt nicht als Dezimalpunkt interpretiert wird.

```js-nolint
77 .toExponential();
// or
77
.toExponential();
// or
(77).toExponential();
// or
77..toExponential();
// or
77.0.toExponential();
// because 77. === 77.0, no ambiguity
```

Darüber hinaus können [private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) nur über die Punktnotation innerhalb der Klasse, die sie definiert, aufgerufen werden.

### Klammernotation

Im `object[expression]`-Syntax sollte `expression` zu einem String oder [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) ausgewertet werden, das den Eigenschaftsnamen darstellt. Es kann also jeder String, zum Beispiel, einschließlich `'1foo'`, `'!bar!'` oder sogar `' '` (ein Leerzeichen) sein.

```js
const variable = object[propertyName];
object[propertyName] = value;
```

Das tut genau dasselbe wie das vorherige Beispiel.

```js
document["createElement"]("pre");
```

Ein Leerzeichen vor der Klammernotation ist erlaubt.

```js-nolint
document ["createElement"]("pre");
```

Ausdrücke, die sich auf den Eigenschaftsnamen auswerten, führen dasselbe aus wie das direkte Übergeben des Eigenschaftsnamens.

```js
const key = "name";
const getKey = () => "name";
const Obj = { name: "Michel" };

Obj["name"]; // returns "Michel"
Obj[key]; // evaluates to Obj["name"], and returns "Michel"
Obj[getKey()]; // evaluates to Obj["name"], and returns "Michel"
```

Seien Sie jedoch vorsichtig beim Verwenden von eckigen Klammern, um auf Eigenschaften zuzugreifen, deren Namen von externen Eingaben gegeben werden. Dies kann Ihren Code anfällig für [Objekt-Injektionsangriffe](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md) machen.

### Eigenschaftsnamen

Jeder Eigenschaftsname ist ein String oder ein [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol). Jeder andere Wert, einschließlich einer Zahl, wird in einen String umgewandelt. Dies ergibt `'value'`, da `1` in `'1'` umgewandelt wird.

```js
const object = {};
object["1"] = "value";
console.log(object[1]);
```

Dies ergibt ebenfalls `'value'`, da sowohl `foo` als auch `bar` in dasselbe Zeichenfolgenobjekt (`"[object Object]"`) umgewandelt werden.

```js
const foo = { uniqueProp: 1 };
const bar = { uniqueProp: 2 };
const object = {};
object[foo] = "value";
console.log(object[bar]);
```

### Method Binding

Es ist typisch, beim Sprechen über die Eigenschaften eines Objekts zwischen Eigenschaften und Methoden zu unterscheiden. Jedoch ist die Unterscheidung zwischen Eigenschaft/Methode kaum mehr als eine Konvention. Eine Methode ist eine Eigenschaft, die aufgerufen werden kann (zum Beispiel, wenn sie eine Referenz auf eine {{jsxref("Function")}}-Instanz als ihren Wert hat).

Eine Methode ist nicht an das Objekt gebunden, dessen Eigenschaft sie ist. Insbesondere ist `this` in einer Methode nicht festgelegt und bezieht sich nicht unbedingt auf das Objekt, das die Methode enthält. Stattdessen wird `this` durch den Funktionsaufruf "übergeben". Siehe [die Referenz für `this`](/de/docs/Web/JavaScript/Reference/Operators/this).

## Beispiele

### Klammernotation vs. eval()

JavaScript-Anfänger machen oft den Fehler, {{jsxref("Global_Objects/eval", "eval()")}} zu verwenden, wo die Klammernotation stattdessen verwendet werden kann.

Zum Beispiel wird folgende Syntax oft in vielen Skripten gesehen.

```js
const x = eval(`document.forms.form_name.elements.${strFormControl}.value`);
```

`eval()` ist langsam und sollte wann immer möglich vermieden werden. Außerdem müsste `strFormControl` einen Bezeichner enthalten, was für Namen und `id`s von Formularelementen nicht erforderlich ist. Es ist besser, stattdessen die Klammernotation zu verwenden:

```js
const x = document.forms.form_name.elements[strFormControl].value;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Object")}}
- {{jsxref("Object.defineProperty()")}}
- [Optional chaining (`?.`)](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
