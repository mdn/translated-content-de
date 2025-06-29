---
title: Property accessors
slug: Web/JavaScript/Reference/Operators/Property_accessors
l10n:
  sourceCommit: 48184c65d7e6d59e867806d9e349661c737bdc4b
---

{{jsSidebar("Operators")}}

**Property accessors** ermöglichen den Zugriff auf die Eigenschaften eines Objekts durch die Punktnotation oder die Klammernotation.

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

Man kann sich ein Objekt als ein _assoziatives Array_ (auch bekannt als _Map_, _Dictionary_, _Hash_, _Lookup-Tabelle_) vorstellen. Die _Schlüssel_ in diesem Array sind die Namen der {{Glossary("Property/JavaScript", "Eigenschaften")}} des Objekts.

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

Hier wird die Methode `createElement` vom `document` abgerufen und aufgerufen.

```js
document.createElement("pre");
```

Wenn Sie eine Methode für ein numerisches Literal verwenden und das numerische Literal keinen Exponenten und keinen Dezimalpunkt hat, sollten Sie {{Glossary("Whitespace", "Leerzeichen")}} vor dem Punkt lassen, der dem Methodaufruf vorangeht, damit der Punkt nicht als Dezimalpunkt interpretiert wird.

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

Darüber hinaus können [private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) nur mit Punktnotation innerhalb der Klasse, die sie definiert, darauf zugegriffen werden.

### Klammernotation

Im `object[expression]`-Syntax sollte die `expression` zu einem String oder [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) auswerten, der den Namen der Eigenschaft darstellt. Es kann also jede String-Schreibweise, zum Beispiel `'1foo'`, `'!bar!'` oder sogar `' '` (ein Leerzeichen) sein.

```js
const variable = object[propertyName];
object[propertyName] = value;
```

Dies tut genau dasselbe wie das vorherige Beispiel.

```js
document["createElement"]("pre");
```

Ein Leerzeichen vor der Klammernotation ist erlaubt.

```js-nolint
document ["createElement"]("pre");
```

Das Übergeben von Ausdrücken, die zum Eigenschaftsnamen ausgewertet werden, bewirkt dasselbe wie das direkte Übergeben des Eigenschaftsnamen.

```js
const key = "name";
const getKey = () => "name";
const Obj = { name: "Michel" };

Obj["name"]; // returns "Michel"
Obj[key]; // evaluates to Obj["name"], and returns "Michel"
Obj[getKey()]; // evaluates to Obj["name"], and returns "Michel"
```

Seien Sie jedoch vorsichtig bei der Verwendung von eckigen Klammern, um auf Eigenschaften zuzugreifen, deren Namen durch externe Eingaben vorgegeben werden. Dies kann Ihr Code für [Objekt-Injektionsangriffe](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md) anfällig machen.

### Eigenschaftsnamen

Jeder Eigenschaftsname ist ein String oder ein [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol). Jeder andere Wert, einschließlich einer Zahl, wird in einen String konvertiert. Dies gibt `'value'` aus, da `1` in `'1'` umgewandelt wird.

```js
const object = {};
object["1"] = "value";
console.log(object[1]);
```

Dies gibt ebenfalls `'value'` aus, da sowohl `foo` als auch `bar` in denselben String (`"[object Object]"`) konvertiert werden.

```js
const foo = { uniqueProp: 1 };
const bar = { uniqueProp: 2 };
const object = {};
object[foo] = "value";
console.log(object[bar]);
```

### Methodenbindung

Es ist typisch, wenn man von den Eigenschaften eines Objekts spricht, eine Unterscheidung zwischen Eigenschaften und Methoden zu machen. Allerdings ist die Unterscheidung zwischen Eigenschaft und Methode mehr als eine Konvention. Eine Methode ist eine Eigenschaft, die aufgerufen werden kann (zum Beispiel, wenn sie einen Verweis auf eine {{jsxref("Function")}}-Instanz als Wert hat).

Eine Methode ist nicht an das Objekt gebunden, zu dem sie gehört. Insbesondere ist `this` in einer Methode nicht festgelegt und verweist nicht notwendigerweise auf das Objekt, das die Methode enthält. Stattdessen wird `this` durch den Funktionsaufruf "übergeben". Siehe [die Referenz für `this`](/de/docs/Web/JavaScript/Reference/Operators/this).

## Beispiele

### Klammernotation vs. eval()

JavaScript-Anfänger machen oft den Fehler, {{jsxref("Global_Objects/eval", "eval()")}} zu verwenden, wo die Klammernotation stattdessen verwendet werden kann.

Zum Beispiel wird die folgende Syntax oft in vielen Skripten gesehen.

```js
const x = eval(`document.forms.form_name.elements.${strFormControl}.value`);
```

`eval()` ist langsam und sollte, wenn möglich, vermieden werden. Außerdem müsste `strFormControl` ein Bezeichner sein, was für Namen und `id`s von Formularelementen nicht erforderlich ist. Es ist besser, statt dessen die Klammernotation zu verwenden:

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
