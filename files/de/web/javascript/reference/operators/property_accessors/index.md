---
title: Eigenschaftszugriffe
slug: Web/JavaScript/Reference/Operators/Property_accessors
l10n:
  sourceCommit: 5d53607e3645a456fce6564424823169157b74b1
---

**Eigenschaftszugriffe** ermöglichen den Zugriff auf die Eigenschaften eines Objekts mithilfe der Punktnotation oder der Klammernotation.

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

Ein Objekt kann als _assoziatives Array_ (auch _Map_, _Dictionary_, _Hash_ oder _Lookup-Tabelle_ genannt) betrachtet werden. Die _Schlüssel_ in diesem Array sind die Namen der {{Glossary("Property/JavaScript", "Eigenschaften")}} des Objekts.

Es gibt zwei Möglichkeiten, auf Eigenschaften zuzugreifen: die _Punktnotation_ und die _Klammernotation_.

### Punktnotation

In der Syntax `object.propertyName` muss `propertyName` ein gültiger JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) sein. Es darf auch ein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) sein. Beispielsweise ist `object.$1` gültig, `object.1` dagegen nicht.

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

Hier wird die Methode namens `createElement` aus `document` abgerufen und aufgerufen.

```js
document.createElement("pre");
```

Wenn Sie eine Methode für ein Zahlenliteral verwenden und das Zahlenliteral weder einen Exponenten noch einen Dezimalpunkt hat, sollten Sie vor dem Punkt, der dem Methodenaufruf vorangeht, ein {{Glossary("Whitespace", "Leerzeichen")}} einfügen. So wird der Punkt nicht als Dezimalpunkt interpretiert.

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

Außerdem kann auf [private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) nur innerhalb der Klasse, die sie definiert, und nur mit der Punktnotation zugegriffen werden.

### Klammernotation

In der Syntax `object[expression]` sollte `expression` zu einem String oder [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) ausgewertet werden, das den Namen der Eigenschaft darstellt. Es kann also ein beliebiges String-Literal sein, beispielsweise auch `'1foo'`, `'!bar!'` oder sogar `' '` (ein Leerzeichen).

```js
const variable = object[propertyName];
object[propertyName] = value;
```

Dies bewirkt genau dasselbe wie das vorherige Beispiel.

```js
document["createElement"]("pre");
```

Vor der Klammernotation ist ein Leerzeichen zulässig.

```js-nolint
document ["createElement"]("pre");
```

Auch wenn Sie Ausdrücke übergeben, die zu einem Eigenschaftsnamen ausgewertet werden, hat dies denselben Effekt wie die direkte Übergabe des Eigenschaftsnamens.

```js
const key = "name";
const getKey = () => "name";
const Obj = { name: "Michel" };

Obj["name"]; // returns "Michel"
Obj[key]; // evaluates to Obj["name"], and returns "Michel"
Obj[getKey()]; // evaluates to Obj["name"], and returns "Michel"
```

Seien Sie jedoch vorsichtig, wenn Sie mit eckigen Klammern auf Eigenschaften zugreifen, deren Namen aus externen Eingaben stammen. Dadurch kann Ihr Code anfällig für [Object-Injection-Angriffe](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md) werden.

### Eigenschaftsnamen

Jeder Eigenschaftsname ist ein String oder ein [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol). Jeder andere Wert, einschließlich einer Zahl, wird in einen String umgewandelt. Die Ausgabe hier ist `'value'`, da `1` in `'1'` umgewandelt wird.

```js
const object = {};
object["1"] = "value";
console.log(object[1]);
```

Auch hier ist die Ausgabe `'value'`, da sowohl `foo` als auch `bar` in denselben String (`"[object Object]"`) umgewandelt werden.

```js
const foo = { uniqueProp: 1 };
const bar = { uniqueProp: 2 };
const object = {};
object[foo] = "value";
console.log(object[bar]);
```

### Bindung von Methoden

Wenn von den Eigenschaften eines Objekts die Rede ist, wird üblicherweise zwischen Eigenschaften und Methoden unterschieden. Diese Unterscheidung ist jedoch kaum mehr als eine Konvention. Eine Methode ist eine Eigenschaft, die aufgerufen werden kann (beispielsweise weil ihr Wert eine Referenz auf eine {{jsxref("Function")}}-Instanz ist).

Eine Methode ist nicht an das Objekt gebunden, dessen Eigenschaft sie ist. Insbesondere ist `this` in einer Methode nicht festgelegt und verweist nicht zwangsläufig auf das Objekt, das die Methode enthält. Stattdessen wird `this` beim Funktionsaufruf „übergeben“. Weitere Informationen finden Sie in der [Referenz zu `this`](/de/docs/Web/JavaScript/Reference/Operators/this).

## Beispiele

### Klammernotation im Vergleich zu eval()

JavaScript-Einsteiger machen häufig den Fehler, {{jsxref("Global_Objects/eval", "eval()")}} zu verwenden, obwohl stattdessen die Klammernotation verwendet werden kann.

Beispielsweise findet sich in vielen Skripten häufig die folgende Syntax.

```js
const x = eval(`document.forms.form_name.elements.${strFormControl}.value`);
```

`eval()` ist langsam und sollte nach Möglichkeit vermieden werden. Außerdem müsste `strFormControl` einen Bezeichner enthalten, obwohl Namen und `id`s von Formularsteuerelementen keine gültigen Bezeichner sein müssen. Verwenden Sie stattdessen besser die Klammernotation:

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
- [Optionale Verkettung (`?.`)](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
