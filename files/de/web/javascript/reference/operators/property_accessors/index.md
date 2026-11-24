---
title: Zugriff auf Eigenschaften
slug: Web/JavaScript/Reference/Operators/Property_accessors
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

**Property Accessors** ermöglichen den Zugriff auf die Eigenschaften eines Objekts mithilfe der Punktnotation oder der Klammernotation.

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

### Parameter

- `object`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von mindestens 17 (Zugriff und Aufruf), auf dessen Eigenschaft zugegriffen wird.
- `propertyName`
  - : Der [Bezeichnername](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) der Eigenschaft, auf die zugegriffen werden soll.
- `expression`
  - : Ein Ausdruck mit beliebiger [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table). Sein Wert wird in einen Eigenschaftsschlüssel umgewandelt (einen [String](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) oder ein Symbol).
- `#privateProperty`
  - : Ein [Bezeichner für ein privates Element](/de/docs/Web/JavaScript/Reference/Classes/Private_elements), das in einer umschließenden Klasse deklariert wurde.

### Rückgabewert

Eine Referenz auf die angegebene Eigenschaft oder das private Element. Beim Lesen der Referenz erhält man deren Wert.

## Beschreibung

Ein Objekt kann als _assoziatives Array_ (auch _Map_, _Dictionary_, _Hash_ oder _Lookup-Tabelle_ genannt) betrachtet werden. Die _Schlüssel_ in diesem Array sind die Namen der {{Glossary("Property/JavaScript", "Eigenschaften")}} des Objekts.

Es gibt zwei Möglichkeiten, auf Eigenschaften zuzugreifen: die _Punktnotation_ und die _Klammernotation_.

### Punktnotation

Bei der Syntax `object.propertyName` muss `propertyName` ein gültiger JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) sein. Auch ein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) ist zulässig. Beispielsweise ist `object.$1` gültig, `object.1` dagegen nicht.

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

Wenn Sie eine Methode für ein numerisches Literal verwenden und das Literal weder einen Exponenten noch einen Dezimalpunkt enthält, sollten Sie vor dem Punkt, der dem Methodenaufruf vorangeht, ein {{Glossary("Whitespace", "Leerzeichen")}} setzen. So wird der Punkt nicht als Dezimalpunkt interpretiert.

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

Außerdem kann auf [private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) nur innerhalb der Klasse, die sie definiert, und nur mit Punktnotation zugegriffen werden.

### Klammernotation

Bei der Syntax `object[expression]` sollte `expression` einen String oder ein [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) ergeben, der beziehungsweise das den Namen der Eigenschaft darstellt. Daher kann ein beliebiges String-Literal verwendet werden, beispielsweise `'1foo'`, `'!bar!'` oder sogar `' '` (ein Leerzeichen).

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

Ausdrücke, die einen Eigenschaftsnamen ergeben, haben denselben Effekt wie die direkte Angabe des Eigenschaftsnamens.

```js
const key = "name";
const getKey = () => "name";
const Obj = { name: "Michel" };

Obj["name"]; // returns "Michel"
Obj[key]; // evaluates to Obj["name"], and returns "Michel"
Obj[getKey()]; // evaluates to Obj["name"], and returns "Michel"
```

Seien Sie jedoch vorsichtig, wenn Sie mit eckigen Klammern auf Eigenschaften zugreifen, deren Namen aus externen Eingaben stammen. Dadurch könnte Ihr Code für [Object-Injection-Angriffe](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md) anfällig werden.

### Eigenschaftsnamen

Jeder Eigenschaftsname ist ein String oder ein [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol). Jeder andere Wert, auch eine Zahl, wird in einen String umgewandelt. Im folgenden Beispiel wird `'value'` ausgegeben, da `1` in `'1'` umgewandelt wird.

```js
const object = {};
object["1"] = "value";
console.log(object[1]);
```

Auch hier wird `'value'` ausgegeben, da sowohl `foo` als auch `bar` in denselben String (`"[object Object]"`) umgewandelt werden.

```js
const foo = { uniqueProp: 1 };
const bar = { uniqueProp: 2 };
const object = {};
object[foo] = "value";
console.log(object[bar]);
```

### Bindung von Methoden

Wenn von den Eigenschaften eines Objekts die Rede ist, wird üblicherweise zwischen Eigenschaften und Methoden unterschieden. Diese Unterscheidung ist jedoch kaum mehr als eine Konvention. Eine Methode ist eine Eigenschaft, die aufgerufen werden kann (beispielsweise, wenn ihr Wert eine Referenz auf eine {{jsxref("Function")}}-Instanz ist).

Eine Methode ist nicht an das Objekt gebunden, dessen Eigenschaft sie ist. Insbesondere ist `this` in einer Methode nicht festgelegt und verweist nicht zwangsläufig auf das Objekt, das die Methode enthält. Stattdessen wird `this` durch den Funktionsaufruf „übergeben“. Siehe die [Referenz zu `this`](/de/docs/Web/JavaScript/Reference/Operators/this).

## Beispiele

### Klammernotation im Vergleich zu eval()

JavaScript-Anfänger verwenden häufig fälschlicherweise {{jsxref("Global_Objects/eval", "eval()")}}, obwohl sie stattdessen die Klammernotation verwenden könnten.

Beispielsweise ist die folgende Syntax häufig in Skripten zu finden.

```js
const x = eval(`document.forms.form_name.elements.${strFormControl}.value`);
```

`eval()` ist langsam und sollte nach Möglichkeit vermieden werden. Außerdem müsste `strFormControl` einen Bezeichner enthalten, was für Namen und `id`-Werte von Formularelementen nicht erforderlich ist. Verwenden Sie stattdessen besser die Klammernotation:

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
