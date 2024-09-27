---
title: Reflect.construct()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/construct
l10n:
  sourceCommit: d1f39a31fe0813962f22c27648192ccd79026a31
---

{{JSRef}}

Die statische Methode **`Reflect.construct()`** ist wie der {{jsxref("Operators/new", "new")}} Operator, aber als Funktion. Es ist gleichbedeutend mit dem Aufruf von `new target(...args)`. Zusätzlich ermöglicht es, einen anderen Wert für [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) anzugeben.

{{EmbedInteractiveExample("pages/js/reflect-construct.html", "taller")}}

## Syntax

```js-nolint
Reflect.construct(target, argumentsList)
Reflect.construct(target, argumentsList, newTarget)
```

### Parameter

- `target`
  - : Die Ziel-Funktion, die aufgerufen werden soll.
- `argumentsList`
  - : Ein [array-ähnliches Objekt](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects), das die Argumente angibt, mit denen `target` aufgerufen werden soll.
- `newTarget` {{optional_inline}}
  - : Der Wert des [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) Operators, der normalerweise das Prototyp des zurückgegebenen Objekts spezifiziert. Wenn `newTarget` nicht vorhanden ist, wird dessen Wert standardmäßig auf `target` gesetzt.

### Rückgabewert

Eine neue Instanz von `target` (oder `newTarget`, falls vorhanden), initialisiert durch `target` als Konstruktor mit der angegebenen `argumentsList`.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` oder `newTarget` kein Konstruktor ist oder wenn `argumentsList` kein Objekt ist.

## Beschreibung

`Reflect.construct()` bietet die reflektierende Semantik eines Konstruktoraufrufs. Das heißt, `Reflect.construct(target, argumentsList, newTarget)` ist semantisch äquivalent zu:

```js
new target(...argumentsList);
```

Beachten Sie, dass beim Verwenden des `new` Operators `target` und `newTarget` immer derselbe Konstruktor sind - jedoch erlaubt `Reflect.construct()`, einen anderen Wert für [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) zu übergeben. Konzeptionell ist `newTarget` die Funktion, für die `new` aufgerufen wurde, und `newTarget.prototype` wird zum Prototyp des konstruierten Objekts, während `target` der Konstruktor ist, der tatsächlich ausgeführt wird, um das Objekt zu initialisieren. Zum Beispiel kann `new.target` bei Klassenvererbung auch von dem aktuell ausgeführten Konstruktor abweichen.

```js
class A {
  constructor() {
    console.log(new.target.name);
  }
}
class B extends A {}

new B(); // "B"
```

`Reflect.construct()` ermöglicht es Ihnen, einen Konstruktor mit einer variablen Anzahl von Argumenten aufzurufen. (Dies ist auch mit der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) in einem normalen Konstruktoraufruf möglich.)

```js
const obj = new Foo(...args);
const obj = Reflect.construct(Foo, args);
```

`Reflect.construct()` ruft die `[[Construct]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) von `target` auf.

## Beispiele

### Verwendung von Reflect.construct()

```js
const d = Reflect.construct(Date, [1776, 6, 4]);
d instanceof Date; // true
d.getFullYear(); // 1776
```

### Reflect.construct() vs. Object.create()

Vor der Einführung von `Reflect` konnten Objekte mit einer beliebigen Kombination von Konstruktoren und Prototypen unter Verwendung von {{jsxref("Object.create()")}} konstruiert werden.

```js
function OneClass() {
  this.name = "one";
}

function OtherClass() {
  this.name = "other";
}

const args = [];
const obj1 = Reflect.construct(OneClass, args, OtherClass);
const obj2 = Object.create(OtherClass.prototype);
OneClass.apply(obj2, args);

console.log(obj1.name); // 'one'
console.log(obj2.name); // 'one'

console.log(obj1 instanceof OneClass); // false
console.log(obj2 instanceof OneClass); // false

console.log(obj1 instanceof OtherClass); // true
console.log(obj2 instanceof OtherClass); // true
```

Obwohl das Endergebnis dasselbe ist, gibt es einen wichtigen Unterschied im Prozess. Beim Verwenden von `Object.create()` und {{jsxref("Function.prototype.apply()")}} zeigt der `new.target` Operator innerhalb der Funktion, die als Konstruktor verwendet wird, auf `undefined`, da das `new` Schlüsselwort nicht verwendet wird, um das Objekt zu erstellen. (Tatsächlich wird die [`apply`](/de/docs/Web/JavaScript/Reference/Global_Objects/Reflect/apply) Semantik verwendet, nicht `construct`, obwohl normale Funktionen nahezu gleich funktionieren.)

Beim Aufruf von `Reflect.construct()` zeigt der `new.target` Operator hingegen auf den `newTarget` Parameter, falls angegeben, oder auf `target`, falls nicht.

```js
function OneClass() {
  console.log("OneClass");
  console.log(new.target);
}
function OtherClass() {
  console.log("OtherClass");
  console.log(new.target);
}

const obj1 = Reflect.construct(OneClass, args);
// Logs:
// OneClass
// function OneClass { ... }

const obj2 = Reflect.construct(OneClass, args, OtherClass);
// Logs:
// OneClass
// function OtherClass { ... }

const obj3 = Object.create(OtherClass.prototype);
OneClass.apply(obj3, args);
// Output:
//     OneClass
//     undefined
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Reflect.construct` in `core-js`](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- {{jsxref("Operators/new", "new")}}
- [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target)
- [`handler.construct()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/construct)
