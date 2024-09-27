---
title: with
slug: Web/JavaScript/Reference/Statements/with
l10n:
  sourceCommit: 3f91fdcc678991410f4f5adcbff44d1b3b1ede88
---

{{jsSidebar("Statements")}}{{Deprecated_Header}}

> [!NOTE]
> Die Verwendung der `with`-Anweisung wird nicht empfohlen, da sie verwirrende Fehler und Kompatibilitätsprobleme verursachen kann, Optimierungen unmöglich macht und im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) verboten ist. Die empfohlene Alternative besteht darin, das Objekt, dessen Eigenschaften Sie zugreifen möchten, einer temporären Variablen zuzuweisen.

Die **`with`**-Anweisung erweitert die Scope-Kette für eine Anweisung.

## Syntax

```js-nolint
with (expression)
  statement
```

- `expression`
  - : Fügt die angegebene Ausdruck der Scope-Kette hinzu, die bei der Auswertung der Anweisung verwendet wird. Die Klammern um den Ausdruck sind erforderlich.
- `statement`
  - : Jede Anweisung. Um mehrere Anweisungen auszuführen, verwenden Sie eine [Block](/de/docs/Web/JavaScript/Reference/Statements/block)-Anweisung (`{ ... }`), um diese Anweisungen zu gruppieren.

## Beschreibung

Es gibt zwei Arten von Bezeichnern: einen _qualifizierten_ Bezeichner und einen _nicht qualifizierten_ Bezeichner. Ein nicht qualifizierter Bezeichner ist einer, der nicht angibt, woher er stammt.

```js
foo; // unqualified identifier
foo.bar; // bar is a qualified identifier
```

Normalerweise wird ein nicht qualifizierter Bezeichner aufgelöst, indem in der Scope-Kette nach einer Variablen mit diesem Namen gesucht wird, während ein qualifizierter Bezeichner aufgelöst wird, indem in der Prototyp-Kette eines Objekts nach einer Eigenschaft mit diesem Namen gesucht wird.

```js
const foo = { bar: 1 };
console.log(foo.bar);
// foo is found in the scope chain as a variable;
// bar is found in foo as a property
```

Eine Ausnahme bildet das [Globalobjekt](/de/docs/Glossary/Global_object), das an der Spitze der Scope-Kette steht und dessen Eigenschaften automatisch globale Variablen werden, auf die ohne Qualifikatoren verwiesen werden kann.

```js
console.log(globalThis.Math === Math); // true
```

Die `with`-Anweisung fügt das angegebene Objekt während der Auswertung ihres Anweisungskörpers an den Anfang dieser Scope-Kette hinzu. Jeder nicht qualifizierte Name wird zunächst innerhalb des Objekts (durch eine [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)-Überprüfung) gesucht, bevor in der oberen Scope-Kette gesucht wird.

Beachten Sie, dass, wenn sich der nicht qualifizierte Verweis auf eine Methode des Objekts bezieht, die Methode mit dem Objekt als seinem `this`-Wert aufgerufen wird.

```js
with ([1, 2, 3]) {
  console.log(toString()); // 1,2,3
}
```

Das Objekt kann eine [`[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables)-Eigenschaft haben, die eine Liste von Eigenschaften definiert, die nicht zur Scope-Kette hinzugefügt werden sollen (zur Rückwärtskompatibilität). Weitere Informationen finden Sie in der Dokumentation zu [`Symbol.unscopables`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables).

Die Gründe für die Verwendung einer `with`-Anweisung umfassen das Einsparen einer temporären Variablen und die Reduzierung der Dateigröße, indem eine wiederholte lange Objektreferenz vermieden wird. Es gibt jedoch mehr Gründe, warum `with`-Anweisungen nicht wünschenswert sind:

- Leistung: Die `with`-Anweisung erzwingt, dass das angegebene Objekt zuerst bei allen Namensauflösungen durchsucht wird. Daher werden alle Bezeichner, die keine Mitglieder des angegebenen Objekts sind, in einem `with`-Block langsamer gefunden. Darüber hinaus kann der Optimierer keine Annahmen darüber treffen, auf welchen Bezeichner sich jeder nicht qualifizierte Bezeichner bezieht, sodass er dieselbe Eigenschaftsauflösung jedes Mal wiederholen muss, wenn der Bezeichner verwendet wird.
- Lesbarkeit: Die `with`-Anweisung erschwert es einem menschlichen Leser oder JavaScript-Compiler zu entscheiden, ob ein nicht qualifizierter Name entlang der Scope-Kette gefunden wird und, wenn ja, in welchem Objekt. Zum Beispiel:

  ```js
  function f(x, o) {
    with (o) {
      console.log(x);
    }
  }
  ```

  Wenn Sie sich nur die Definition von `f` ansehen, ist es unmöglich zu sagen, worauf sich das `x` im `with`-Körper bezieht. Erst wenn `f` aufgerufen wird, kann `x` als `o.x` oder als erster formaler Parameter von `f` bestimmt werden. Wenn Sie vergessen, `x` im Objekt zu definieren, das Sie als zweiten Parameter übergeben, erhalten Sie keinen Fehler – stattdessen erhalten Sie nur unerwartete Ergebnisse. Es ist auch unklar, was die eigentliche Absicht eines solchen Codes wäre.

- Zukunftskompatibilität: Code, der `with` verwendet, ist möglicherweise nicht zukunftskompatibel, insbesondere wenn er mit etwas anderem als einem einfachen Objekt verwendet wird, das in Zukunft mehr Eigenschaften erhalten könnte. Betrachten Sie dieses Beispiel:

  ```js
  function f(foo, values) {
    with (foo) {
      console.log(values);
    }
  }
  ```

  Wenn Sie `f([1, 2, 3], obj)` in einer ECMAScript 5-Umgebung aufrufen, wird der `values`-Bezug innerhalb der `with`-Anweisung auf `obj` aufgelöst. Allerdings führt ECMAScript 2015 eine [`values`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/values)-Eigenschaft auf dem `Array.prototype` ein (sodass sie in jedem Array verfügbar ist). Nach einem Upgrade der Umgebung wird der `values`-Bezug innerhalb der `with`-Anweisung daher als `[1, 2, 3].values` aufgelöst, was wahrscheinlich zu Fehlern führt.

  In diesem speziellen Beispiel ist `values` als nicht durchsuchbar über [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables) definiert, sodass es weiterhin korrekt auf den `values`-Parameter aufgelöst wird. Wenn es nicht als nicht durchsuchbar definiert wäre, kann man sehen, wie dies ein schwierig zu debuggendes Problem wäre.

## Beispiele

### Die Verwendung der with-Anweisung

Die folgende `with`-Anweisung gibt an, dass das {{jsxref("Math")}}-Objekt das Standardobjekt ist. Die Anweisungen nach der `with`-Anweisung beziehen sich auf die {{jsxref("Math/PI", "PI")}}-Eigenschaft und die {{jsxref("Math/cos", "cos")}}- und {{jsxref("Math/sin", "sin")}}-Methoden, ohne ein Objekt anzugeben. JavaScript nimmt für diese Verweise das `Math`-Objekt an.

```js
let a, x, y;
const r = 10;

with (Math) {
  a = PI * r * r;
  x = r * cos(PI);
  y = r * sin(PI / 2);
}
```

### Vermeidung der with-Anweisung durch Destrukturierung von Eigenschaften in den aktuellen Scope

Sie können die Verwendung von `with` in der Regel durch [Eigenschaftsdestrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) vermeiden. Hier erstellen wir einen zusätzlichen Block, um das Verhalten von `with` nachzuahmen, indem ein zusätzlicher Scope erstellt wird - aber in der tatsächlichen Nutzung kann dieser Block normalerweise weggelassen werden.

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

### Vermeidung der with-Anweisung durch Verwendung eines IIFE

Wenn Sie einen Ausdruck erzeugen, der einen lang benannten Verweis mehrfach wiederverwenden muss, und Ihr Ziel darin besteht, diesen langen Namen innerhalb Ihres Ausdrucks zu eliminieren, können Sie den Ausdruck in einer [IIFE](/de/docs/Glossary/IIFE) umschließen und den langen Namen als Argument übergeben.

```js
const objectHavingAnEspeciallyLengthyName = { foo: true, bar: false };

if (((o) => o.foo && !o.bar)(objectHavingAnEspeciallyLengthyName)) {
  // This branch runs.
}
```

### Erstellen dynamischer Namensräume mit der with-Anweisung und einem Proxy

`with` verwandelt jede Variablenauflösung in eine Eigenschaftsauflösung, während [Proxies](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy) das Abfangen jedes Eigenschaftsaufrufs ermöglichen. Sie können einen dynamischen Namensraum erstellen, indem Sie sie kombinieren.

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

- {{jsxref("Statements/block", "Block", "", 1)}}
- [Strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode)
- {{jsxref("Symbol.unscopables")}}
- [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables)
