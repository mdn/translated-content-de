---
title: Property Accessors
slug: Web/JavaScript/Reference/Operators/Property_accessors
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

**Property Accessors** ermöglichen den Zugriff auf die Eigenschaften eines Objekts, indem entweder die Punktnotation oder die eckige Klammernotation verwendet wird.

{{InteractiveExample("JavaScript Demo: Expressions - Property accessors", "taller")}}

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

Man kann sich ein Objekt als ein _assoziatives Array_ (auch bekannt als _Map_, _Dictionary_, _Hash_, _Lookup-Tabelle_) vorstellen. Die _Schlüssel_ in diesem Array sind die Namen der {{Glossary("Property/JavaScript", "Eigenschaften")}} des Objekts.

Es gibt zwei Möglichkeiten, auf Eigenschaften zuzugreifen: _Punktnotation_ und _eckige Klammernotation_.

### Punktnotation

Im Syntax `object.propertyName` muss `propertyName` ein gültiges JavaScript-[Identifier](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) sein, der auch ein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) sein kann. Zum Beispiel ist `object.$1` gültig, während `object.1` ungültig ist.

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
object.1 = 'bar'; // SyntaxError
console.log(object.1); // SyntaxError
```

Hier wird die Methode namens `createElement` aus `document` abgerufen und aufgerufen.

```js
document.createElement("pre");
```

Falls Sie eine Methode an einem numerischen Literal verwenden und dieses weder einen Exponenten noch einen Dezimalpunkt enthält, sollten Sie {{Glossary("Whitespace", "Leerzeichen")}} vor dem Punkt vorsehen, der dem Methodenaufruf vorangeht, damit der Punkt nicht als Dezimalpunkt interpretiert wird.

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

Zusätzlich können [private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) nur mit der Punktnotation innerhalb der Klasse, die sie definiert, abgerufen werden.

### Eckige Klammernotation

In der Syntax `object[expression]` sollte die `expression` einen String oder ein [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) ergeben, das den Namen der Eigenschaft darstellt. Es kann also jeder Stringliteral sein, zum Beispiel `'1foo'`, `'!bar!'` oder sogar `' '` (ein Leerzeichen).

```js
const variable = object[propertyName];
object[propertyName] = value;
```

Dieser Code tut genau das Gleiche wie das vorherige Beispiel.

```js
document["createElement"]("pre");
```

Ein Leerzeichen vor der eckigen Klammernotation ist erlaubt.

```js-nolint
document ["createElement"]("pre");
```

Das Übergeben von Ausdrücken, die sich zu Eigenschaftsnamen auswerten, hat die gleiche Wirkung wie direkt die Eigenschaftsnamen zu übergeben.

```js
const key = "name";
const getKey = () => "name";
const Obj = { name: "Michel" };

Obj["name"]; // returns "Michel"
Obj[key]; // evaluates to Obj["name"], and returns "Michel"
Obj[getKey()]; // evaluates to Obj["name"], and returns "Michel"
```

Man sollte jedoch vorsichtig sein, wenn man eckige Klammern verwendet, um auf Eigenschaften zuzugreifen, deren Namen durch externe Eingaben vorgegeben werden. Dies kann den Code anfällig für [Objekt-Injektionsangriffe](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md) machen.

### Eigenschaftsnamen

Jeder Eigenschaftenname ist ein String oder ein [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol). Jeder andere Wert, einschließlich einer Zahl, wird zu einem String konvertiert. Dies ergibt `'value'`, da `1` in `'1'` konvertiert wird.

```js
const object = {};
object["1"] = "value";
console.log(object[1]);
```

Auch dieser Code gibt `'value'` aus, da sowohl `foo` als auch `bar` in denselben String (`"[object Object]"`) konvertiert werden.

```js
const foo = { uniqueProp: 1 };
const bar = { uniqueProp: 2 };
const object = {};
object[foo] = "value";
console.log(object[bar]);
```

### Methodenbindung

Es ist typisch, bei der Beschreibung der Eigenschaften eines Objekts zwischen Eigenschaften und Methoden zu unterscheiden. Allerdings ist diese Unterscheidung eher konventionell. Eine Methode ist eine Eigenschaft, die aufgerufen werden kann (zum Beispiel, wenn sie einen Verweis auf eine {{jsxref("Function")}}-Instanz als Wert enthält).

Eine Methode ist nicht an das Objekt gebunden, zu dem sie gehört. Insbesondere ist `this` in einer Methode nicht fixiert und verweist nicht notwendigerweise auf das Objekt, das die Methode enthält. Stattdessen wird `this` durch den Funktionsaufruf „übergeben“. Siehe [Referenz zu `this`](/de/docs/Web/JavaScript/Reference/Operators/this).

## Beispiele

### Eckige Klammernotation vs. eval()

JavaScript-Anfänger machen häufig den Fehler, {{jsxref("Global_Objects/eval", "eval()")}} zu verwenden, wo die eckige Klammernotation verwendet werden könnte.

Zum Beispiel wird folgende Syntax oft in vielen Skripten gesehen:

```js
const x = eval(`document.forms.form_name.elements.${strFormControl}.value`);
```

`eval()` ist langsam und sollte, wann immer möglich, vermieden werden. Außerdem müsste `strFormControl` einen Identifier halten, was für Namen und `id`-Attribute von Formularsteuerelementen nicht erforderlich ist. Es ist besser, die eckige Klammernotation zu verwenden:

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
- [Optional Chaining (`?.`)](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
