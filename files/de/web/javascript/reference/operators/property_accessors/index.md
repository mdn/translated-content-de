---
title: Property accessors
slug: Web/JavaScript/Reference/Operators/Property_accessors
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{jsSidebar("Operators")}}

**Property Accessors** ermöglichen den Zugriff auf die Eigenschaften eines Objekts durch die Punktnotation oder die Klammernotation.

{{InteractiveExample("JavaScript Demo: Property accessors", "taller")}}

```js interactive-example
const person1 = {};
person1["firstName"] = "Mario";
person1["lastName"] = "Rossi";

console.log(person1.firstName);
// Expected output: "Mario"

const person2 = {
  firstName: "John",
  lastName: "Doe",
};

console.log(person2["lastName"]);
// Expected output: "Doe"
```

## Syntax

```js-nolint
object.propertyName
object[expression]
object.#privateProperty
```

## Beschreibung

Man kann sich ein Objekt als ein _assoziatives Array_ (auch bekannt als _Map_, _Dictionary_, _Hash_, _Nachschlagetabelle_) vorstellen. Die _Schlüssel_ in diesem Array sind die Namen der {{Glossary("Property/JavaScript", "Eigenschaften")}} des Objekts.

Es gibt zwei Möglichkeiten, auf Eigenschaften zuzugreifen: _Punktnotation_ und _Klammernotation_.

### Punktnotation

Im `object.propertyName`-Syntax muss `propertyName` ein gültiger JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) sein, der auch ein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) sein kann. Zum Beispiel ist `object.$1` gültig, während `object.1` es nicht ist.

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

Hier wird die Methode mit dem Namen `createElement` aus `document` abgerufen und aufgerufen.

```js
document.createElement("pre");
```

Wenn Sie eine Methode für ein numerisches Literal verwenden, und das numerische Literal keinen Exponenten und keinen Dezimalpunkt hat, sollten Sie {{Glossary("Whitespace", "Leerzeichen")}} vor dem Punkt lassen, der dem Methodenaufruf vorangeht, damit der Punkt nicht als Dezimalpunkt interpretiert wird.

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

Darüber hinaus können [private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) nur mit der Punktnotation innerhalb der Klasse, die sie definiert, zugegriffen werden.

### Klammernotation

Im `object[expression]`-Syntax sollte `expression` zu einem String oder [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) auswerten, der den Namen der Eigenschaft repräsentiert. Daher kann es sich beispielsweise um jeden beliebigen String-Literal handeln, einschließlich `'1foo'`, `'!bar!'` oder sogar `' '` (ein Leerzeichen).

```js
const variable = object[propertyName];
object[propertyName] = value;
```

Dies tut genau dasselbe wie das vorherige Beispiel.

```js
document["createElement"]("pre");
```

Ein Leerzeichen vor der Klammernotation ist zulässig.

```js-nolint
document ["createElement"]("pre");
```

Das Übergeben von Ausdrücken, die sich zum Eigenschaftsnamen auswerten, erzielt dasselbe Ergebnis wie das direkte Übergeben des Eigenschaftsnamens.

```js
const key = "name";
const getKey = () => "name";
const Obj = { name: "Michel" };

Obj["name"]; // returns "Michel"
Obj[key]; // evaluates to Obj["name"], and returns "Michel"
Obj[getKey()]; // evaluates to Obj["name"], and returns "Michel"
```

Achten Sie jedoch darauf, beim Zugriff auf Eigenschaften, deren Namen durch externe Eingaben bestimmt werden, eckige Klammern zu verwenden. Dies kann Ihren Code anfällig für [Objektinjektionsangriffe](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md) machen.

### Eigenschaftsnamen

Jeder Eigenschaftsname ist ein String oder ein [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol). Jeder andere Wert, einschließlich einer Zahl, wird in einen String umgewandelt. Dies gibt `'value'` aus, da `1` in `'1'` umgewandelt wird.

```js
const object = {};
object["1"] = "value";
console.log(object[1]);
```

Dies gibt ebenfalls `'value'` aus, da sowohl `foo` als auch `bar` in denselben String (`"[object Object]"`) umgewandelt werden.

```js
const foo = { uniqueProp: 1 };
const bar = { uniqueProp: 2 };
const object = {};
object[foo] = "value";
console.log(object[bar]);
```

### Methodenbindung

Es ist typisch, bei der Diskussion von Objekteigenschaften zwischen Eigenschaften und Methoden zu unterscheiden. Diese Unterscheidung ist jedoch kaum mehr als eine Konvention. Eine Methode ist eine Eigenschaft, die aufgerufen werden kann (zum Beispiel, wenn sie einen Verweis auf eine {{jsxref("Function")}}-Instanz als Wert hat).

Eine Methode ist nicht an das Objekt gebunden, dem sie als Eigenschaft gehört. Speziell ist `this` in einer Methode nicht festgelegt und bezieht sich nicht notwendigerweise auf das Objekt, das die Methode enthält. Stattdessen wird `this` durch den Funktionsaufruf "übergeben". Siehe [die Referenz für `this`](/de/docs/Web/JavaScript/Reference/Operators/this).

## Beispiele

### Klammernotation vs. eval()

JavaScript-Anfänger machen oft den Fehler, {{jsxref("Global_Objects/eval", "eval()")}} zu verwenden, wo stattdessen die Klammernotation verwendet werden kann.

Zum Beispiel wird die folgende Syntax oft in vielen Skripten gesehen.

```js
const x = eval(`document.forms.form_name.elements.${strFormControl}.value`);
```

`eval()` ist langsam und sollte, wenn möglich, vermieden werden. Auch `strFormControl` müsste einen Bezeichner enthalten, was für Namen und `id`s von Formularelementen nicht erforderlich ist. Es ist besser, stattdessen die Klammernotation zu verwenden:

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
