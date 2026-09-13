---
title: with
slug: Web/JavaScript/Reference/Statements/with
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

> [!NOTE]
> Die Verwendung des `with`-Statements wird nicht empfohlen, da es zur Quelle verwirrender Fehler und Kompatibilitätsprobleme werden kann, Optimierung unmöglich macht und im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) verboten ist. Die empfohlene Alternative ist, das Objekt, dessen Eigenschaften Sie zugreifen möchten, einer temporären Variablen zuzuweisen.

Das **`with`**-Statement erweitert die Gültigkeitsbereichskette für ein Statement.

## Syntax

```js-nolint
with (expression)
  statement
```

- `expression`
  - : Fügt den Ausdruck der Gültigkeitsbereichskette hinzu, die bei der Auswertung des Statements verwendet wird. Die Klammern um den Ausdruck sind erforderlich.
- `statement`
  - : Beliebiges Statement. Um mehrere Statements auszuführen, verwenden Sie ein [Block](/de/docs/Web/JavaScript/Reference/Statements/block)-Statement (`{ ... }`), um diese Statements zu gruppieren.

## Beschreibung

Es gibt zwei Arten von Bezeichnern: einen _qualifizierten_ Bezeichner und einen _nicht qualifizierten_ Bezeichner. Ein nicht qualifizierter Bezeichner ist einer, der nicht angibt, woher er stammt.

```js
foo; // unqualified identifier
foo.bar; // bar is a qualified identifier
```

Normalerweise wird ein nicht qualifizierter Bezeichner durch Suchen in der Gültigkeitsbereichskette nach einer Variablen mit diesem Namen aufgelöst, während ein qualifizierter Bezeichner durch Suchen in der Prototypenkette eines Objekts nach einer Eigenschaft mit diesem Namen aufgelöst wird.

```js
const foo = { bar: 1 };
console.log(foo.bar);
// foo is found in the scope chain as a variable;
// bar is found in foo as a property
```

Eine Ausnahme davon ist das {{Glossary("Global_object", "globale Objekt")}}, das an der Spitze der Gültigkeitsbereichskette sitzt und dessen Eigenschaften automatisch zu globalen Variablen werden, die ohne Qualifikatoren referenziert werden können.

```js
console.log(globalThis.Math === Math); // true
```

Das `with`-Statement fügt das angegebene Objekt während der Auswertung seines Anweisungskörpers dem Anfang dieser Gültigkeitsbereichskette hinzu. Jeder nicht qualifizierte Name wird zunächst innerhalb des Objekts (durch eine [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)-Überprüfung) gesucht, bevor die obere Gültigkeitsbereichskette durchsucht wird.

Beachten Sie, dass, wenn sich die nicht qualifizierte Referenz auf eine Methode des Objekts bezieht, die Methode mit dem Objekt als `this`-Wert aufgerufen wird.

```js
with ([1, 2, 3]) {
  console.log(toString()); // 1,2,3
}
```

Das Objekt kann eine [`[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables)-Eigenschaft haben, die eine Liste von Eigenschaften definiert, die nicht zur Gültigkeitsbereichskette hinzugefügt werden sollen (aus Gründen der Abwärtskompatibilität). Weitere Informationen finden Sie in der Dokumentation zu [`Symbol.unscopables`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables).

Die Gründe für die Verwendung eines `with`-Statements umfassen das Sparen einer temporären Variablen und das Reduzieren der Dateigröße durch das Vermeiden des wiederholten Referenzierens eines langen Objektnamens. Es gibt jedoch weit mehr Gründe, warum `with`-Statements nicht wünschenswert sind:

- Leistung: Das `with`-Statement erzwingt, dass das angegebene Objekt zuerst für alle Namensabfragen durchsucht wird. Daher werden alle Bezeichner, die keine Mitglieder des angegebenen Objekts sind, in einem `with`-Block langsamer gefunden. Darüber hinaus kann der Optimierer keine Annahmen darüber machen, worauf sich jeder nicht qualifizierte Bezeichner bezieht, sodass bei jeder Verwendung des Bezeichners dieselbe Eigenschaftssuche wiederholt werden muss.
- Lesbarkeit: Das `with`-Statement macht es einem menschlichen Leser oder JavaScript-Compiler schwer, zu entscheiden, ob ein nicht qualifizierter Name entlang der Gültigkeitsbereichskette gefunden wird und, wenn ja, in welchem Objekt. Zum Beispiel:

  ```js
  function f(x, o) {
    with (o) {
      console.log(x);
    }
  }
  ```

  Wenn Sie sich nur die Definition von `f` ansehen, ist es unmöglich festzustellen, worauf sich `x` im `with`-Körper bezieht. Erst wenn `f` aufgerufen wird, kann `x` als `o.x` oder das erste formale Parameter von `f` bestimmt werden. Wenn Sie vergessen, `x` in dem Objekt zu definieren, das Sie als zweiten Parameter übergeben, erhalten Sie keinen Fehler – stattdessen erhalten Sie unerwartete Ergebnisse. Es ist auch unklar, was die eigentliche Absicht eines solchen Codes wäre.

- Zukunftskompatibilität: Code, der `with` verwendet, ist möglicherweise nicht zukunftskompatibel, insbesondere wenn er mit etwas anderem als einem einfachen Objekt verwendet wird, das in Zukunft mehr Eigenschaften erhalten könnte. Betrachten Sie dieses Beispiel:

  ```js
  function f(foo, values) {
    with (foo) {
      console.log(values);
    }
  }
  ```

  Wenn Sie `f([1, 2, 3], obj)` in einer ECMAScript 5-Umgebung aufrufen, wird die `values`-Referenz innerhalb des `with`-Statements auf `obj` aufgelöst. ECMAScript 2015 führt jedoch eine [`values`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/values)-Eigenschaft auf `Array.prototype` ein (sie wird also auf jedem Array verfügbar sein). Wenn Sie die Umgebung nach einem Upgrade verwenden, wird die `values`-Referenz innerhalb des `with`-Statements auf `[1, 2, 3].values` aufgelöst und führt wahrscheinlich zu Fehlern.

  In diesem speziellen Beispiel ist `values` als unsichtbar durch [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables) definiert, sodass es weiterhin korrekt auf den `values`-Parameter aufgelöst wird. Wenn es nicht als unsichtbar definiert wäre, kann man sehen, wie dies ein schwieriges Problem beim Debuggen wäre.

## Beispiele

### Verwendung des with-Statements

Das folgende `with`-Statement gibt an, dass das {{jsxref("Math")}}-Objekt das Standardobjekt ist. Die Statements, die dem `with`-Statement folgen, beziehen sich auf die {{jsxref("Math/PI", "PI")}}-Eigenschaft und die {{jsxref("Math/cos", "cos")}}- und {{jsxref("Math/sin", "sin")}}-Methoden, ohne ein Objekt anzugeben. JavaScript nimmt an, dass das `Math`-Objekt für diese Referenzen verwendet wird.

```js
let a, x, y;
const r = 10;

with (Math) {
  a = PI * r * r;
  x = r * cos(PI);
  y = r * sin(PI / 2);
}
```

### Vermeidung des with-Statements durch Destructuring von Eigenschaften in den aktuellen Gültigkeitsbereich

Sie können die Verwendung von `with` in der Regel durch [Property Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) vermeiden. Hier erzeugen wir einen zusätzlichen Block, um das Verhalten von `with` zu simulieren, das einen zusätzlichen Gültigkeitsbereich erstellt – aber in der tatsächlichen Verwendung kann dieser Block normalerweise weggelassen werden.

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

### Vermeidung des with-Statements durch Nutzung einer IIFE

Wenn Sie einen Ausdruck erstellen, der mehrmals eine lange benannte Referenz wiederverwenden muss, und Ihr Ziel darin besteht, diesen langen Namen innerhalb Ihres Ausdrucks zu eliminieren, können Sie den Ausdruck in eine {{Glossary("IIFE", "IIFE")}} einwickeln und den langen Namen als Argument bereitstellen.

```js
const objectHavingAnEspeciallyLengthyName = { foo: true, bar: false };

if (((o) => o.foo && !o.bar)(objectHavingAnEspeciallyLengthyName)) {
  // This branch runs.
}
```

### Erstellen dynamischer Namespaces mit dem with-Statement und einem Proxy

`with` wird jede Variablenabfrage in eine Eigenschaftsabfrage umwandeln, während [Proxies](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy) es ermöglichen, jeden Aufruf einer Eigenschaftsabfrage abzufangen. Sie können einen dynamischen Namespace erstellen, indem Sie sie kombinieren.

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
