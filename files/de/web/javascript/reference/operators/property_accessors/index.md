---
title: Eigenschaftszugriffe
slug: Web/JavaScript/Reference/Operators/Property_accessors
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{jsSidebar("Operators")}}

**Eigenschaftszugriffe** bieten Zugriff auf die Eigenschaften eines Objekts durch die Punkt- oder Klammernotation.

{{EmbedInteractiveExample("pages/js/expressions-propertyaccessors.html", "taller")}}

## Syntax

```js-nolint
object.propertyName
object[expression]
object.#privateProperty
```

## Beschreibung

Man kann sich ein Objekt als ein _assoziatives Array_ (auch bekannt als _Map_, _Dictionary_, _Hash_, _Lookup-Table_) vorstellen. Die _Schlüssel_ in diesem Array sind die Namen der [Eigenschaften](/de/docs/Glossary/Property/JavaScript) des Objekts.

Es gibt zwei Möglichkeiten, auf Eigenschaften zuzugreifen: die _Punktsyntax_ und die _Klammernotation_.

### Punktnotation

Im Syntax `object.propertyName` muss `propertyName` ein gültiger JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) sein, der auch ein [Schlüsselwort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) sein kann. Zum Beispiel ist `object.$1` gültig, während `object.1` es nicht ist.

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

Hier wird die Methode namens `createElement` von `document` abgerufen und ausgeführt.

```js
document.createElement("pre");
```

Wenn Sie eine Methode für ein numerisches Literal verwenden, und das numerische Literal keinen Exponenten und keinen Dezimalpunkt hat, sollten Sie [Leerzeichen](/de/docs/Glossary/Whitespace) vor dem Punkt, der dem Methodenaufruf vorausgeht, lassen, damit der Punkt nicht als Dezimalpunkt interpretiert wird.

```js-nolint
77 .toExponential();
// oder
77
.toExponential();
// oder
(77).toExponential();
// oder
77..toExponential();
// oder
77.0.toExponential();
// da 77. === 77.0, keine Mehrdeutigkeit
```

Darüber hinaus können [private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) nur mit der Punktsyntax innerhalb der Klasse, die sie definiert, abgerufen werden.

### Klammernotation

In der Syntax `object[expression]` sollte `expression` zu einem String oder [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) auswerten, das den Namen der Eigenschaft darstellt. Es kann also jeder Stringliteral sein, beispielsweise auch `'1foo'`, `'!bar!'` oder sogar `' '` (ein Leerzeichen).

```js
const variable = object[propertyName];
object[propertyName] = value;
```

Dies macht genau dasselbe wie das vorherige Beispiel.

```js
document["createElement"]("pre");
```

Ein Leerzeichen vor der Klammernotation ist erlaubt.

```js-nolint
document ["createElement"]("pre");
```

Das Übergeben von Ausdrücken, die zum Eigenschaftsnamen auswerten, macht dasselbe wie das direkte Übergeben des Eigenschaftsnamen.

```js
const key = "name";
const getKey = () => "name";
const Obj = { name: "Michel" };

Obj["name"]; // gibt "Michel" zurück
Obj[key]; // wertet zu Obj["name"] aus und gibt "Michel" zurück
Obj[getKey()]; // wertet zu Obj["name"] aus und gibt "Michel" zurück
```

Seien Sie jedoch vorsichtig beim Verwenden von eckigen Klammern zum Zugriff auf Eigenschaften, deren Namen aus externen Eingaben stammen. Dies kann Ihren Code anfällig für [Objekt-Injektionsangriffe](https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/the-dangers-of-square-bracket-notation.md) machen.

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

Es ist typisch, wenn man von den Eigenschaften eines Objekts spricht, zwischen Eigenschaften und Methoden zu unterscheiden. Jedoch ist die Unterscheidung zwischen Eigenschaft/Methode kaum mehr als eine Konvention. Eine Methode ist eine Eigenschaft, die aufgerufen werden kann (z. B. wenn sie einen Verweis auf eine {{jsxref("Function")}}-Instanz als Wert hat).

Eine Methode ist nicht an das Objekt gebunden, dessen Eigenschaft sie ist. Insbesondere ist `this` in einer Methode nicht festgelegt und bezieht sich nicht notwendigerweise auf das Objekt, das die Methode enthält. Stattdessen wird `this` durch den Funktionsaufruf "übergeben". Siehe [die Referenz für `this`](/de/docs/Web/JavaScript/Reference/Operators/this).

## Beispiele

### Klammernotation vs. eval()

JavaScript-Anfänger machen oft den Fehler, {{jsxref("Global_Objects/eval", "eval()")}} zu verwenden, wo stattdessen die Klammernotation verwendet werden kann.

Zum Beispiel wird die folgende Syntax häufig in vielen Skripten gesehen.

```js
const x = eval(`document.forms.form_name.elements.${strFormControl}.value`);
```

`eval()` ist langsam und sollte wann immer möglich vermieden werden. Auch müsste `strFormControl` einen Bezeichner enthalten, was für Namen und `id`s von Formularelementen nicht erforderlich ist. Es ist besser, die Klammernotation zu verwenden:

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
