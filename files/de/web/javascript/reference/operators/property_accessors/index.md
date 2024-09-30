---
title: Property accessors
slug: Web/JavaScript/Reference/Operators/Property_accessors
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{jsSidebar("Operators")}}

**Property accessors** bieten Zugriff auf die Eigenschaften eines Objekts durch Punktnotation oder Klammernotation.

{{EmbedInteractiveExample("pages/js/expressions-propertyaccessors.html", "taller")}}

## Syntax

```js-nolint
object.propertyName
object[expression]
object.#privateProperty
```

## Beschreibung

Man kann sich ein Objekt als ein _assoziatives Array_ (auch bekannt als _Karte_, _Wörterbuch_, _Hash_, _Nachschlagetabelle_) vorstellen. Die _Schlüssel_ in diesem Array sind die Namen der [Eigenschaften](/de/docs/Glossary/Property/JavaScript) des Objekts.

Es gibt zwei Möglichkeiten, auf Eigenschaften zuzugreifen: _Punktnotation_ und _Klammernotation_.

### Punktnotation

Bei der `object.propertyName`-Syntax muss der `propertyName` ein gültiger JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) sein, der auch ein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) sein kann. Zum Beispiel ist `object.$1` gültig, während `object.1` es nicht ist.

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

Hier wird die Methode namens `createElement` von `document` abgerufen und aufgerufen.

```js
document.createElement("pre");
```

Wenn Sie eine Methode für ein numerisches Literal verwenden und das numerische Literal keinen Exponenten und keinen Dezimalpunkt hat, sollten Sie [Leerzeichen](/de/docs/Glossary/Whitespace) vor dem Punkt vor dem Methodenaufruf lassen, damit der Punkt nicht als Dezimalpunkt interpretiert wird.

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

Darüber hinaus können [private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) nur innerhalb der Klasse, die sie definiert, mit Punktnotation zugegriffen werden.

### Klammernotation

Bei der `object[expression]`-Syntax sollte der `expression`-Ausdruck in einen String oder [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) ausgewertet werden, der den Namen der Eigenschaft darstellt. Es kann daher ein beliebiges String-Literal sein, beispielsweise einschließlich `'1foo'`, `'!bar!'` oder sogar `' '` (ein Leerzeichen).

```js
const variable = object[propertyName];
object[propertyName] = value;
```

Dies bewirkt genau dasselbe wie das vorherige Beispiel.

```js
document["createElement"]("pre");
```

Ein Leerzeichen vor Klammernotation ist erlaubt.

```js-nolint
document ["createElement"]("pre");
```

Das Übergeben von Ausdrücken, die den Eigenschaftsnamen auswerten, bewirkt dasselbe wie das direkte Übergeben des Eigenschaftsnamen.

```js
const key = "name";
const getKey = () => "name";
const Obj = { name: "Michel" };

Obj["name"]; // returns "Michel"
Obj[key]; // evaluates to Obj["name"], and returns "Michel"
Obj[getKey()]; // evaluates to Obj["name"], and returns "Michel"
```

Seien Sie jedoch vorsichtig, wenn Sie eckige Klammern verwenden, um auf Eigenschaften zuzugreifen, deren Namen durch externe Eingaben angegeben werden. Dies kann Ihren Code anfällig für [Objekt-Injektionsangriffe](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md) machen.

### Eigenschaftsnamen

Jeder Eigenschaftsname ist entweder ein String oder ein [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol). Jeder andere Wert, einschließlich einer Zahl, wird in einen String umgewandelt. Dies gibt `'value'` aus, da `1` in `'1'` umgewandelt wird.

```js
const object = {};
object["1"] = "value";
console.log(object[1]);
```

Dies gibt auch `'value'` aus, da sowohl `foo` als auch `bar` zu demselben String (`"[object Object]"`) konvertiert werden.

```js
const foo = { uniqueProp: 1 };
const bar = { uniqueProp: 2 };
const object = {};
object[foo] = "value";
console.log(object[bar]);
```

### Methodenbindung

Es ist typisch, beim Sprechen von Objekteigenschaften zwischen Eigenschaften und Methoden zu unterscheiden. Die Unterscheidung zwischen Eigenschaft und Methode ist jedoch kaum mehr als eine Konvention. Eine Methode ist eine Eigenschaft, die aufgerufen werden kann (zum Beispiel, wenn sie eine Referenz zu einer {{jsxref("Function")}} Instanz als Wert hat).

Eine Methode ist nicht an das Objekt gebunden, dessen Eigenschaft sie ist. Speziell ist `this` in einer Methode nicht festgelegt und bezieht sich nicht notwendigerweise auf das Objekt, das die Methode enthält. Stattdessen wird `this` durch den Funktionsaufruf „übergeben“. Siehe [die Referenz für `this`](/de/docs/Web/JavaScript/Reference/Operators/this).

## Beispiele

### Klammernotation vs. eval()

JavaScript-Anfänger machen oft den Fehler, {{jsxref("Global_Objects/eval", "eval()")}} zu verwenden, wo die Klammernotation verwendet werden kann.

Zum Beispiel wird die folgende Syntax oft in vielen Skripten gesehen.

```js
const x = eval(`document.forms.form_name.elements.${strFormControl}.value`);
```

`eval()` ist langsam und sollte wann immer möglich vermieden werden. Außerdem müsste `strFormControl` einen Bezeichner enthalten, was für Namen und `id`s von Formularsteuerelementen nicht erforderlich ist. Es ist besser, stattdessen die Klammernotation zu verwenden:

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
- [Optionales Verkettung (?.)](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
