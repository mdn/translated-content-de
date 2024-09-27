---
title: Eigenschaftszugriffe
slug: Web/JavaScript/Reference/Operators/Property_accessors
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{jsSidebar("Operators")}}

**Eigenschaftszugriffe** ermöglichen den Zugriff auf die Eigenschaften eines Objekts durch die Punktnotation oder die Klammernotation.

{{EmbedInteractiveExample("pages/js/expressions-propertyaccessors.html", "taller")}}

## Syntax

```js-nolint
object.propertyName
object[expression]
object.#privateProperty
```

## Beschreibung

Man kann sich ein Objekt als ein _assoziatives Array_ (auch _Map_, _Wörterbuch_, _Hash_, _Nachschlagetabelle_) vorstellen. Die _Schlüssel_ in diesem Array sind die Namen der [Eigenschaften](/de/docs/Glossary/Property/JavaScript) des Objekts.

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
object.1 = 'bar'; // SyntaxError
console.log(object.1); // SyntaxError
```

Hier wird die Methode `createElement` aus `document` abgerufen und aufgerufen.

```js
document.createElement("pre");
```

Wenn Sie eine Methode für ein numerisches Literal verwenden und das numerische Literal keinen Exponenten und keinen Dezimalpunkt hat, sollten Sie [Leerzeichen](/de/docs/Glossary/Whitespace) vor dem Punkt lassen, der dem Methodenaufruf vorausgeht, damit der Punkt nicht als Dezimalpunkt interpretiert wird.

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

Zusätzlich können [private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) nur mit Punktnotation innerhalb der Klasse, die sie definiert, zugegriffen werden.

### Klammernotation

Im `object[expression]`-Syntax sollte der `expression` zu einem String oder [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) ausgewertet werden, der den Eigenschaftsnamen darstellt. Es kann also jeder Stringliteral sein, beispielsweise einschließlich `'1foo'`, `'!bar!'` oder sogar `' '` (ein Leerzeichen).

```js
const variable = object[propertyName];
object[propertyName] = value;
```

Dies macht exakt dasselbe wie das vorherige Beispiel.

```js
document["createElement"]("pre");
```

Ein Leerzeichen vor der Klammernotation ist erlaubt.

```js-nolint
document ["createElement"]("pre");
```

Ausdrücke, die ausgewertet werden, um den Eigenschaftsnamen zu erhalten, bewirken dasselbe wie das direkte Übergeben des Eigenschaftsnamens.

```js
const key = "name";
const getKey = () => "name";
const Obj = { name: "Michel" };

Obj["name"]; // returns "Michel"
Obj[key]; // evaluates to Obj["name"], and returns "Michel"
Obj[getKey()]; // evaluates to Obj["name"], and returns "Michel"
```

Vorsicht ist jedoch geboten, wenn eckige Klammern verwendet werden, um auf Eigenschaften zuzugreifen, deren Namen durch externe Eingaben vorgegeben werden. Dies kann Ihren Code anfällig für [Objektinjektionsangriffe](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md) machen.

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

Es ist typisch, wenn man von den Eigenschaften eines Objekts spricht, zwischen Eigenschaften und Methoden zu unterscheiden. Diese Unterscheidung ist jedoch kaum mehr als eine Konvention. Eine Methode ist eine Eigenschaft, die aufgerufen werden kann (zum Beispiel, wenn sie eine Referenz zu einer {{jsxref("Function")}}-Instanz als Wert hat).

Eine Methode ist nicht an das Objekt gebunden, dessen Eigenschaft sie ist. Speziell ist `this` in einer Methode nicht fixiert und bezieht sich nicht notwendigerweise auf das Objekt, das die Methode enthält. Stattdessen wird `this` "durch den Funktionsaufruf übergeben". Weitere Informationen finden Sie im [Referenzdokument zu `this`](/de/docs/Web/JavaScript/Reference/Operators/this).

## Beispiele

### Klammernotation vs. eval()

JavaScript-Anfänger machen oft den Fehler, {{jsxref("Global_Objects/eval", "eval()")}} zu verwenden, obwohl die Klammernotation stattdessen verwendet werden kann.

Zum Beispiel sieht man häufig den folgenden Syntax in vielen Skripten.

```js
const x = eval(`document.forms.form_name.elements.${strFormControl}.value`);
```

`eval()` ist langsam und sollte wann immer möglich vermieden werden. Außerdem müsste `strFormControl` einen Bezeichner enthalten, was für Namen und `id`s von Formularelementen nicht erforderlich ist. Es ist besser, die Klammernotation zu verwenden:

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
- [Optionales Chaining (`?.`)](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
