---
title: with
slug: Web/JavaScript/Reference/Statements/with
l10n:
  sourceCommit: 3f91fdcc678991410f4f5adcbff44d1b3b1ede88
---

{{jsSidebar("Statements")}}{{Deprecated_Header}}

> [!NOTE]
> Die Verwendung der `with`-Anweisung wird nicht empfohlen, da sie die Quelle für verwirrende Fehler und Kompatibilitätsprobleme sein kann, Optimierungen unmöglich macht und im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) verboten ist. Die empfohlene Alternative ist, das Objekt, auf dessen Eigenschaften Sie zugreifen möchten, einer temporären Variablen zuzuweisen.

Die **`with`**-Anweisung erweitert die Scope-Kette für eine Anweisung.

## Syntax

```js-nolint
with (expression)
  statement
```

- `expression`
  - : Fügt den gegebenen Ausdruck der Scope-Kette hinzu, die bei der Auswertung der Anweisung verwendet wird. Die Klammern um den Ausdruck sind erforderlich.
- `statement`
  - : Jede beliebige Anweisung. Um mehrere Anweisungen auszuführen, verwenden Sie eine [block](/de/docs/Web/JavaScript/Reference/Statements/block)-Anweisung (`{ ... }`), um diese Anweisungen zu gruppieren.

## Beschreibung

Es gibt zwei Arten von Bezeichnern: einen _qualifizierten_ Bezeichner und einen _nicht qualifizierten_ Bezeichner. Ein nicht qualifizierter Bezeichner ist einer, der nicht angibt, woher er stammt.

```js
foo; // unqualified identifier
foo.bar; // bar is a qualified identifier
```

Normalerweise wird ein nicht qualifizierter Bezeichner aufgelöst, indem die Scope-Kette nach einer Variablen mit diesem Namen durchsucht wird, während ein qualifizierter Bezeichner aufgelöst wird, indem die Prototyp-Kette eines Objekts nach einer Eigenschaft mit diesem Namen durchsucht wird.

```js
const foo = { bar: 1 };
console.log(foo.bar);
// foo is found in the scope chain as a variable;
// bar is found in foo as a property
```

Eine Ausnahme ist das {{Glossary("Global_object", "global object")}}, das sich an der Spitze der Scope-Kette befindet und dessen Eigenschaften automatisch zu globalen Variablen werden, die ohne Qualifikatoren referenziert werden können.

```js
console.log(globalThis.Math === Math); // true
```

Die `with`-Anweisung fügt das gegebene Objekt dem Kopf dieser Scope-Kette während der Auswertung ihres Anweisungskörpers hinzu. Jeder nicht qualifizierte Name wird zuerst innerhalb des Objekts (durch einen [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)-Check) gesucht, bevor er in der oberen Scope-Kette gesucht wird.

Beachten Sie, dass, wenn sich die nicht qualifizierte Referenz auf eine Methode des Objekts bezieht, die Methode mit dem Objekt als ihrem `this`-Wert aufgerufen wird.

```js
with ([1, 2, 3]) {
  console.log(toString()); // 1,2,3
}
```

Das Objekt kann eine [`[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables)-Eigenschaft haben, die eine Liste von Eigenschaften definiert, die nicht zur Scope-Kette hinzugefügt werden sollten (zur Abwärtskompatibilität). Weitere Informationen finden Sie in der Dokumentation zu [`Symbol.unscopables`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables).

Die Gründe, eine `with`-Anweisung zu verwenden, umfassen das Sparen einer temporären Variablen und die Reduzierung der Dateigröße, indem ein langer Objektreferenz nicht wiederholt werden muss. Es gibt jedoch weit mehr Gründe, warum `with`-Anweisungen nicht wünschenswert sind:

- Leistung: Die `with`-Anweisung erzwingt, dass das angegebene Objekt zuerst bei allen Namenssuchvorgängen durchsucht wird. Daher werden alle Bezeichner, die keine Mitglieder des angegebenen Objekts sind, innerhalb eines `with`-Blocks langsamer gefunden. Darüber hinaus kann der Optimierer keine Annahmen darüber treffen, worauf sich jeder nicht qualifizierte Bezeichner bezieht, so dass er bei jeder Verwendung des Bezeichners denselben Eigenschaftslookup wiederholen muss.
- Lesbarkeit: Die `with`-Anweisung macht es schwer für einen menschlichen Leser oder JavaScript-Compiler zu entscheiden, ob ein nicht qualifizierter Name entlang der Scope-Kette gefunden wird und, falls ja, in welchem Objekt. Zum Beispiel:

  ```js
  function f(x, o) {
    with (o) {
      console.log(x);
    }
  }
  ```

  Betrachten Sie nur die Definition von `f`, ist es unmöglich zu sagen, worauf sich das `x` im `with`-Körper bezieht. Erst wenn `f` aufgerufen wird, kann bestimmt werden, ob `x` `o.x` oder der erste formale Parameter von `f` ist. Wenn Sie vergessen, `x` im Objekt zu definieren, das Sie als zweiten Parameter übergeben, erhalten Sie keinen Fehler — stattdessen erhalten Sie einfach unerwartete Ergebnisse. Es ist auch unklar, was die tatsächliche Absicht eines solchen Codes wäre.

- Zukunftskompatibilität: Code mit `with` ist möglicherweise nicht zukunftskompatibel, insbesondere wenn er mit etwas anderem als einem einfachen Objekt verwendet wird, das in Zukunft möglicherweise mehr Eigenschaften erhält. Betrachten Sie dieses Beispiel:

  ```js
  function f(foo, values) {
    with (foo) {
      console.log(values);
    }
  }
  ```

  Wenn Sie `f([1, 2, 3], obj)` in einer ECMAScript 5-Umgebung aufrufen, wird die `values`-Referenz innerhalb der `with`-Anweisung zu `obj` aufgelöst. ECMAScript 2015 führt jedoch eine [`values`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/values)-Eigenschaft auf `Array.prototype` ein (sie wird also in jedem Array verfügbar sein). Nach einem Update der Umgebung wird die `values`-Referenz innerhalb der `with`-Anweisung stattdessen zu `[1, 2, 3].values` aufgelöst und wird wahrscheinlich Fehler verursachen.

  In diesem speziellen Beispiel ist `values` durch [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables) als unscopable definiert, sodass es immer noch korrekt auf den `values`-Parameter aufgelöst wird. Wäre es nicht als unscopable definiert, können Sie sehen, wie dies ein schwer zu beheben Problem wäre.

## Beispiele

### Verwendung der with-Anweisung

Die folgende `with`-Anweisung legt fest, dass das {{jsxref("Math")}}-Objekt das Standardobjekt ist. Die Anweisungen nach der `with`-Anweisung beziehen sich auf die {{jsxref("Math/PI", "PI")}}-Eigenschaft und die {{jsxref("Math/cos", "cos")}}- und {{jsxref("Math/sin", "sin")}}-Methoden, ohne ein Objekt anzugeben. JavaScript nimmt an, dass es sich bei diesen Referenzen um das `Math`-Objekt handelt.

```js
let a, x, y;
const r = 10;

with (Math) {
  a = PI * r * r;
  x = r * cos(PI);
  y = r * sin(PI / 2);
}
```

### Vermeiden der with-Anweisung durch Destrukturierung von Eigenschaften in den aktuellen Scope

Sie können die Verwendung von `with` normalerweise durch [property destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) vermeiden. Hier erstellen wir einen zusätzlichen Block, um das Verhalten von `with` nachzuahmen, das einen zusätzlichen Scope erstellt — aber in der tatsächlichen Verwendung kann dieser Block normalerweise weggelassen werden.

```js
let a, x, y;
const r = 10;

{
  const { PI, cos, sin } = Math;
  a = PI * r * r;
  x = r * cos(PI);
  y = r * sin(PI / 2);
}
```

### Vermeiden der with-Anweisung durch Verwendung einer IIFE

Wenn Sie einen Ausdruck erzeugen, der einen langen Namen mehrmals wiederverwenden muss, und Ihr Ziel darin besteht, diesen langen Namen innerhalb Ihres Ausdrucks zu eliminieren, können Sie den Ausdruck in einer {{Glossary("IIFE", "IIFE")}} umschließen und den langen Namen als Argument übergeben.

```js
const objectHavingAnEspeciallyLengthyName = { foo: true, bar: false };

if (((o) => o.foo && !o.bar)(objectHavingAnEspeciallyLengthyName)) {
  // This branch runs.
}
```

### Erstellen dynamischer Namespaces mit der with-Anweisung und einem Proxy

`with` wandelt jede Variablenabfrage in eine Eigenschaftsabfrage um, während [Proxies](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy) das Abfangen jeder Eigenschaftsabfrage ermöglichen. Sie können einen dynamischen Namespace erstellen, indem Sie sie kombinieren.

```js
const namespace = new Proxy(
  {},
  {
    has(target, key) {
      // Avoid trapping global properties like `console`
      if (key in globalThis) {
        return false;
      }
      // Trap all property lookups
      return true;
    },
    get(target, key) {
      return key;
    },
  },
);

with (namespace) {
  console.log(a, b, c); // "a" "b" "c"
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/block", "block", "", 1)}}
- [Strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode)
- {{jsxref("Symbol.unscopables")}}
- [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables)
