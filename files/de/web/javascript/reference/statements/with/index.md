---
title: with
slug: Web/JavaScript/Reference/Statements/with
l10n:
  sourceCommit: 8cf6d8c10adf3ce5370f8a3f180bec11112d4d44
---

{{jsSidebar("Statements")}}{{Deprecated_Header}}

> [!NOTE]
> Die Verwendung des `with`-Statements wird nicht empfohlen, da es die Quelle verwirrender Fehler und Kompatibilitätsprobleme sein kann, Optimierung unmöglich macht und im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) verboten ist. Die empfohlene Alternative ist, das Objekt, dessen Eigenschaften Sie zugreifen möchten, einer temporären Variablen zuzuweisen.

Das **`with`**-Statement erweitert die Scope-Kette für ein Statement.

## Syntax

```js-nolint
with (expression)
  statement
```

- `expression`
  - : Fügt der Scope-Kette, die beim Auswerten des Statements verwendet wird, den angegebenen Ausdruck hinzu. Die Klammern um den Ausdruck sind erforderlich.
- `statement`
  - : Beliebiges Statement. Um mehrere Statements auszuführen, verwenden Sie ein [Block](/de/docs/Web/JavaScript/Reference/Statements/block)-Statement (`{ ... }`), um diese Statements zu gruppieren.

## Beschreibung

Es gibt zwei Arten von Bezeichnern: einen _qualifizierten_ Bezeichner und einen _unqualifizierten_ Bezeichner. Ein unqualifizierter Bezeichner ist einer, der nicht angibt, woher er stammt.

```js
foo; // unqualified identifier
foo.bar; // bar is a qualified identifier
```

Normalerweise wird ein unqualifizierter Bezeichner aufgelöst, indem die Scope-Kette nach einer Variable mit diesem Namen durchsucht wird, während ein qualifizierter Bezeichner durch die Suche in der Prototyp-Kette eines Objekts nach einer Eigenschaft mit diesem Namen aufgelöst wird.

```js
const foo = { bar: 1 };
console.log(foo.bar);
// foo is found in the scope chain as a variable;
// bar is found in foo as a property
```

Eine Ausnahme bildet das {{Glossary("Global_object", "globale Objekt")}}, das sich an der Spitze der Scope-Kette befindet und dessen Eigenschaften automatisch zu globalen Variablen werden, auf die ohne Qualifier verwiesen werden kann.

```js
console.log(globalThis.Math === Math); // true
```

Das `with`-Statement fügt das angegebene Objekt an den Anfang dieser Scope-Kette während der Auswertung seines Statement-Körpers hinzu. Jeder unqualifizierte Name wird zuerst innerhalb des Objekts (durch einen [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)-Check) durchsucht, bevor in der oberen Scope-Kette gesucht wird.

Beachten Sie, dass, wenn der unqualifizierte Verweis auf eine Methode des Objekts verweist, die Methode mit dem Objekt als `this`-Wert aufgerufen wird.

```js
with ([1, 2, 3]) {
  console.log(toString()); // 1,2,3
}
```

Das Objekt kann eine [`[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables)-Eigenschaft haben, die eine Liste von Eigenschaften definiert, die nicht zur Scope-Kette hinzugefügt werden sollen (aus Gründen der Rückwärtskompatibilität). Weitere Informationen finden Sie in der Dokumentation zu [`Symbol.unscopables`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables).

Die Gründe, ein `with`-Statement zu verwenden, sind unter anderem das Einsparen einer temporären Variable und die Reduzierung der Dateigröße, indem ein langes Objekt-Referenzieren vermieden wird. Es gibt jedoch weit mehr Gründe, warum `with`-Statements nicht wünschenswert sind:

- Leistung: Das `with`-Statement zwingt das angegebene Objekt, zuerst für alle Namensauflösungen durchsucht zu werden. Daher werden alle Bezeichner, die keine Mitglieder des angegebenen Objekts sind, langsamer in einem `with`-Block gefunden. Darüber hinaus kann der Optimierer keine Annahmen darüber treffen, worauf sich jeder unqualifizierte Bezeichner bezieht, sodass er jedes Mal, wenn der Bezeichner verwendet wird, die gleiche Eigenschaftssuche wiederholen muss.
- Lesbarkeit: Das `with`-Statement macht es für einen menschlichen Leser oder JavaScript-Compiler schwer zu entscheiden, ob ein unqualifizierter Name entlang der Scope-Kette gefunden wird und wenn ja, in welchem Objekt. Zum Beispiel:

  ```js
  function f(x, o) {
    with (o) {
      console.log(x);
    }
  }
  ```

  Wenn Sie nur die Definition von `f` betrachten, ist es unmöglich zu sagen, worauf sich das `x` im `with`-Körper bezieht. Erst wenn `f` aufgerufen wird, kann `x` als `o.x` oder das erste formale Parameter von `f` bestimmt werden. Wenn Sie vergessen, `x` im Objekt zu definieren, das Sie als zweiten Parameter übergeben, erhalten Sie keinen Fehler – stattdessen bekommen Sie einfach unerwartete Ergebnisse. Es ist auch unklar, was die tatsächliche Absicht eines solchen Codes wäre.

- Zukunftskompatibilität: Code, der `with` verwendet, ist möglicherweise nicht zukunftskompatibel, insbesondere wenn er mit etwas anderem als einem einfachen Objekt verwendet wird, das in Zukunft möglicherweise mehr Eigenschaften erhält. Betrachten Sie dieses Beispiel:

  ```js
  function f(foo, values) {
    with (foo) {
      console.log(values);
    }
  }
  ```

  Wenn Sie `f([1, 2, 3], obj)` in einer ECMAScript 5-Umgebung aufrufen, wird der `values`-Verweis innerhalb des `with`-Statements zu `obj` aufgelöst. Allerdings führt ECMAScript 2015 eine [`values`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/values)-Eigenschaft im `Array.prototype` ein (sodass diese auf jedem Array verfügbar ist). Nach dem Upgrade der Umgebung wird der `values`-Verweis innerhalb des `with`-Statements stattdessen zu `[1, 2, 3].values` aufgelöst und wird wahrscheinlich Bugs verursachen.

  In diesem speziellen Beispiel wird `values` als nicht-inklusiv durch [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables) definiert, sodass es immer noch korrekt auf den `values`-Parameter aufgelöst wird. Wäre es nicht als nicht-inklusiv definiert, könnte man sehen, wie dies ein schwieriges Problem zu debuggen wäre.

## Beispiele

### Verwendung des with-Statements

Das folgende `with`-Statement gibt an, dass das {{jsxref("Math")}}-Objekt das Standardobjekt ist. Die auf das `with`-Statement folgenden Anweisungen beziehen sich auf die {{jsxref("Math/PI", "PI")}}-Eigenschaft sowie die {{jsxref("Math/cos", "cos")}}- und {{jsxref("Math/sin", "sin")}}-Methoden, ohne ein Objekt anzugeben. JavaScript nimmt an, dass die Referenzen auf das `Math`-Objekt bezogen sind.

```js
let a, x, y;
const r = 10;

with (Math) {
  a = PI * r * r;
  x = r * cos(PI);
  y = r * sin(PI / 2);
}
```

### Vermeidung des with-Statements durch Destrukturierung von Eigenschaften in den aktuellen Scope

Sie können die Verwendung von `with` im Allgemeinen durch [Destrukturierung von Eigenschaften](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) vermeiden. Hier erstellen wir einen zusätzlichen Block, um das Verhalten von `with`, das einen zusätzlichen Scope schafft, nachzuahmen – aber in der tatsächlichen Verwendung kann dieser Block normalerweise weggelassen werden.

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

### Vermeidung des with-Statements durch Verwendung einer IIFE

Wenn Sie einen Ausdruck erstellen, der einen langen Referenznamen mehrmals wiederverwenden muss, und Ihr Ziel darin besteht, diesen langen Namen in Ihrem Ausdruck zu eliminieren, können Sie den Ausdruck in eine {{Glossary("IIFE", "IIFE")}} einwickeln und den langen Namen als Argument übergeben.

```js
const objectHavingAnEspeciallyLengthyName = { foo: true, bar: false };

if (((o) => o.foo && !o.bar)(objectHavingAnEspeciallyLengthyName)) {
  // This branch runs.
}
```

### Erstellen dynamischer Namensräume durch Verwendung des with-Statements und eines Proxys

`with` wird jede Variablen-Suche in eine Eigenschafts-Suche umwandeln, während [Proxies](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy) das Abfangen jeder Eigenschafts-Suche ermöglichen. Sie können einen dynamischen Namensraum erstellen, indem Sie sie kombinieren.

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
