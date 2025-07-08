---
title: with
slug: Web/JavaScript/Reference/Statements/with
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

{{Deprecated_Header}}

> [!NOTE]
> Die Verwendung der `with`-Anweisung wird nicht empfohlen, da sie Quelle für verwirrende Fehler und Kompatibilitätsprobleme sein kann, Optimierungen unmöglich macht und im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) verboten ist. Die empfohlene Alternative ist, das Objekt, dessen Eigenschaften Sie zugreifen möchten, einer temporären Variablen zuzuweisen.

Die **`with`**-Anweisung erweitert die Scope-Chain für eine Anweisung.

## Syntax

```js-nolint
with (expression)
  statement
```

- `expression`
  - : Fügt den gegebenen Ausdruck zur Scope-Chain hinzu, die beim Auswerten der Anweisung verwendet wird. Die Klammern um den Ausdruck sind erforderlich.
- `statement`
  - : Beliebige Anweisung. Um mehrere Anweisungen auszuführen, verwenden Sie eine [Block](/de/docs/Web/JavaScript/Reference/Statements/block)-Anweisung (`{ ... }`), um diese Anweisungen zu gruppieren.

## Beschreibung

Es gibt zwei Arten von Bezeichnern: einen _qualifizierten_ Bezeichner und einen _nicht qualifizierten_ Bezeichner. Ein nicht qualifizierter Bezeichner ist einer, der nicht angibt, woher er stammt.

```js
foo; // unqualified identifier
foo.bar; // bar is a qualified identifier
```

Normalerweise wird ein nicht qualifizierter Bezeichner durch die Suche in der Scope-Chain nach einer Variablen mit diesem Namen aufgelöst, während ein qualifizierter Bezeichner durch die Suche in der Prototyp-Kette eines Objekts nach einer Eigenschaft mit diesem Namen aufgelöst wird.

```js
const foo = { bar: 1 };
console.log(foo.bar);
// foo is found in the scope chain as a variable;
// bar is found in foo as a property
```

Eine Ausnahme bildet das {{Glossary("Global_object", "globale Objekt")}}, das an der Spitze der Scope-Chain steht und dessen Eigenschaften automatisch zu globalen Variablen werden, die ohne Qualifizierer referenziert werden können.

```js
console.log(globalThis.Math === Math); // true
```

Die `with`-Anweisung fügt während der Auswertung ihres Anweisungskörpers das angegebene Objekt an den Anfang dieser Scope-Chain hinzu. Jeder nicht qualifizierte Name wird zuerst innerhalb des Objekts (durch eine [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)-Prüfung) durchsucht, bevor in der höheren Scope-Chain gesucht wird.

Beachten Sie, dass, wenn die nicht qualifizierte Referenz sich auf eine Methode des Objekts bezieht, die Methode mit dem Objekt als ihrem `this`-Wert aufgerufen wird.

```js
with ([1, 2, 3]) {
  console.log(toString()); // 1,2,3
}
```

Das Objekt kann eine [`[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables)-Eigenschaft haben, die eine Liste von Eigenschaften definiert, die nicht zur Scope-Chain hinzugefügt werden sollen (aus Gründen der Rückwärtskompatibilität). Weitere Informationen finden Sie in der Dokumentation zu [`Symbol.unscopables`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables).

Die Gründe für die Verwendung einer `with`-Anweisung umfassen das Einsparen einer temporären Variablen und das Reduzieren der Dateigröße durch das Vermeiden der Wiederholung eines langen Objektverweises. Es gibt jedoch weit mehr Gründe, warum `with`-Anweisungen nicht wünschenswert sind:

- Leistung: Die `with`-Anweisung zwingt, das spezifizierte Objekt zuerst für alle Namensauflösungen zu durchsuchen. Daher werden alle Bezeichner, die keine Mitglieder des spezifizierten Objekts sind, in einem `with`-Block langsamer gefunden. Außerdem kann der Optimierer keine Annahmen darüber machen, worauf sich jeder nicht qualifizierte Bezeichner bezieht, sodass er die gleiche Eigenschaftenaufruf jedes Mal wiederholen muss, wenn der Bezeichner verwendet wird.
- Lesbarkeit: Die `with`-Anweisung macht es schwierig für einen menschlichen Leser oder einen JavaScript-Compiler zu entscheiden, ob ein nicht qualifizierter Name entlang der Scope-Chain gefunden wird, und falls ja, in welchem Objekt. Beispielsweise:

  ```js
  function f(x, o) {
    with (o) {
      console.log(x);
    }
  }
  ```

  Wenn Sie sich nur die Definition von `f` ansehen, ist es unmöglich zu bestimmen, worauf sich das `x` im `with`-Körper bezieht. Erst wenn `f` aufgerufen wird, kann `x` bestimmt werden, um entweder `o.x` oder das erste formale Argument von `f` zu sein. Wenn Sie vergessen, `x` im Objekt zu definieren, das Sie als zweiten Parameter übergeben, erhalten Sie keinen Fehler — stattdessen erhalten Sie einfach unerwartete Ergebnisse. Auch bleibt unklar, was die tatsächliche Absicht eines solchen Codes wäre.

- Zukunftskompatibilität: Code, der `with` verwendet, ist möglicherweise nicht zukunftskompatibel, insbesondere wenn er mit etwas anderem als einem einfachen Objekt verwendet wird, das in Zukunft mehr Eigenschaften erhalten könnte. Betrachten Sie dieses Beispiel:

  ```js
  function f(foo, values) {
    with (foo) {
      console.log(values);
    }
  }
  ```

  Wenn Sie `f([1, 2, 3], obj)` in einer ECMAScript 5-Umgebung aufrufen, wird die `values`-Referenz innerhalb der `with`-Anweisung zu `obj` aufgelöst. ECMAScript 2015 führt jedoch eine [`values`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/values)-Eigenschaft auf `Array.prototype` ein (sie wird also auf jedem Array verfügbar sein). Nach der Aktualisierung der Umgebung wird die `values`-Referenz innerhalb der `with`-Anweisung zu `[1, 2, 3].values` aufgelöst und verursacht wahrscheinlich Fehler.

  In diesem speziellen Beispiel ist `values` als unskopierbar über [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables) definiert, sodass es immer noch korrekt zum `values`-Parameter aufgelöst wird. Wenn es nicht als unskopierbar definiert wäre, kann man sehen, wie dies ein schwieriges Problem zum Debuggen sein könnte.

## Beispiele

### Verwendung der with-Anweisung

Die folgende `with`-Anweisung gibt an, dass das {{jsxref("Math")}}-Objekt das Standardobjekt ist. Die Anweisungen, die auf die `with`-Anweisung folgen, beziehen sich auf die {{jsxref("Math/PI", "PI")}}-Eigenschaft und die {{jsxref("Math/cos", "cos")}}- und {{jsxref("Math/sin", "sin")}}-Methoden, ohne ein Objekt zu spezifizieren. JavaScript nimmt das `Math`-Objekt für diese Referenzen an.

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

In der Regel können Sie `with` vermeiden, indem Sie [Eigenschaftsdestrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) verwenden. Hier erstellen wir einen zusätzlichen Block, um das Verhalten von `with` zu imitieren, das einen zusätzlichen Scope erstellt – aber im eigentlichen Gebrauch kann dieser Block normalerweise weggelassen werden.

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

Wenn Sie einen Ausdruck erstellen, der einen lang benannten Verweis mehrmals wiederverwenden muss, und Ihr Ziel darin besteht, diesen langen Namen innerhalb Ihres Ausdrucks zu eliminieren, können Sie den Ausdruck in ein {{Glossary("IIFE", "IIFE")}} einwickeln und den langen Namen als Argument übergeben.

```js
const objectHavingAnEspeciallyLengthyName = { foo: true, bar: false };

if (((o) => o.foo && !o.bar)(objectHavingAnEspeciallyLengthyName)) {
  // This branch runs.
}
```

### Erstellen dynamischer Namespaces mit der with-Anweisung und einem Proxy

`with` verwandelt jeden Variablenaufruf in einen Eigenschaftenaufruf, während [Proxies](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy) das Abfangen jedes Eigenschaftenaufrufs ermöglichen. Sie können einen dynamischen Namespace erstellen, indem Sie sie kombinieren.

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
- [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode)
- {{jsxref("Symbol.unscopables")}}
- [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables)
