---
title: with
slug: Web/JavaScript/Reference/Statements/with
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{Deprecated_Header}}

> [!NOTE]
> Die Verwendung des `with`-Statements wird nicht empfohlen, da es die Quelle verwirrender Fehler und Kompatibilitätsprobleme sein kann, Optimierung unmöglich macht und im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) verboten ist. Die empfohlene Alternative ist, das Objekt, dessen Eigenschaften Sie zugreifen möchten, einer temporären Variablen zuzuweisen.

Das **`with`**-Statement erweitert die Scope-Kette für ein Statement.

## Syntax

```js-nolint
with (expression)
  statement
```

- `expression`
  - : Fügt der Scope-Kette, die bei der Auswertung des Statements verwendet wird, den angegebenen Ausdruck hinzu. Die Klammern um den Ausdruck sind erforderlich.
- `statement`
  - : Jedes beliebige Statement. Um mehrere Statements auszuführen, verwenden Sie ein [Block](/de/docs/Web/JavaScript/Reference/Statements/block)-Statement (`{ ... }`), um diese Statements zu gruppieren.

## Beschreibung

Es gibt zwei Arten von Bezeichnern: einen _qualifizierten_ Bezeichner und einen _nicht qualifizierten_ Bezeichner. Ein nicht qualifizierter Bezeichner ist einer, der nicht anzeigt, woher er stammt.

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

Eine Ausnahme hiervon ist das {{Glossary("Global_object", "globale Objekt")}}, das an der Spitze der Scope-Kette steht und dessen Eigenschaften automatisch zu globalen Variablen werden, die ohne Qualifikatoren referenziert werden können.

```js
console.log(globalThis.Math === Math); // true
```

Das `with`-Statement fügt das angegebene Objekt während der Auswertung seines Statement-Bodys an den Anfang dieser Scope-Kette hinzu. Jedes nicht qualifizierte Namensreferenz wird zuerst innerhalb des Objekts (durch eine [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)-Prüfung) durchsucht, bevor in der höheren Scope-Kette gesucht wird.

Beachten Sie, dass wenn sich die nicht qualifizierte Referenz auf eine Methode des Objekts bezieht, die Methode mit dem Objekt als `this`-Wert aufgerufen wird.

```js
with ([1, 2, 3]) {
  console.log(toString()); // 1,2,3
}
```

Das Objekt kann eine [`[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables)-Eigenschaft haben, die eine Liste von Eigenschaften definiert, die nicht zur Scope-Kette hinzugefügt werden sollen (zur Abwärtskompatibilität). Siehe die Dokumentation zu [`Symbol.unscopables`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables) für weitere Informationen.

Die Gründe für die Verwendung eines `with`-Statements beinhalten das Sparen einer temporären Variablen und die Verringerung der Dateigröße, indem ein langer Objektverweis nicht wiederholt werden muss. Es gibt jedoch weit mehr Gründe, warum `with`-Statements nicht wünschenswert sind:

- Leistung: Das `with`-Statement erzwingt, dass das angegebene Objekt zuerst für alle Namensauflösungen durchsucht wird. Daher werden alle Bezeichner, die keine Mitglieder des angegebenen Objekts sind, in einem `with`-Block langsamer gefunden. Außerdem kann der Optimierer keine Annahmen darüber machen, auf was sich jeder nicht qualifizierte Bezeichner bezieht, sodass er bei jeder Verwendung des Bezeichners das gleiche Property-Lookup wiederholen muss.
- Lesbarkeit: Das `with`-Statement erschwert es einem menschlichen Leser oder dem JavaScript-Compiler zu entscheiden, ob ein nicht qualifizierter Name in der Scope-Kette gefunden wird und wenn ja, in welchem Objekt. Zum Beispiel:

  ```js
  function f(x, o) {
    with (o) {
      console.log(x);
    }
  }
  ```

  Wenn Sie nur die Definition von `f` betrachten, ist es unmöglich zu sagen, auf was sich das `x` im `with`-Body bezieht. Erst wenn `f` aufgerufen wird, kann `x` als `o.x` oder als erster formaler Parameter von `f` bestimmt werden. Wenn Sie vergessen, `x` im Objekt zu definieren, das Sie als zweiten Parameter übergeben, erhalten Sie keinen Fehler – stattdessen erhalten Sie nur unerwartete Ergebnisse. Es ist auch unklar, was die tatsächliche Absicht eines solchen Codes wäre.

- Zukunftskompatibilität: Code, der `with` verwendet, ist möglicherweise nicht zukunftskompatibel, insbesondere wenn er mit etwas anderem als einem einfachen Objekt verwendet wird, das in Zukunft mehr Eigenschaften erhalten könnte. Betrachten Sie dieses Beispiel:

  ```js
  function f(foo, values) {
    with (foo) {
      console.log(values);
    }
  }
  ```

  Wenn Sie `f([1, 2, 3], obj)` in einer ECMAScript 5-Umgebung aufrufen, wird der `values`-Verweis innerhalb des `with`-Statements zu `obj` aufgelöst. ECMAScript 2015 führt jedoch eine [`values`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/values)-Eigenschaft auf `Array.prototype` ein (sodass sie in jedem Array verfügbar sein wird). Nach dem Upgrade der Umgebung wird der `values`-Verweis im `with`-Statement stattdessen in `[1, 2, 3].values` aufgelöst und wird wahrscheinlich Fehler verursachen.

  In diesem speziellen Beispiel wird `values` als nicht unscopable durch [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables) definiert, sodass es immer noch korrekt auf den `values`-Parameter aufgelöst wird. Wenn es nicht als nicht unscopable definiert wäre, kann man sehen, wie dies ein schwer zu debuggendes Problem wäre.

## Beispiele

### Verwendung des with-Statements

Das folgende `with`-Statement legt fest, dass das {{jsxref("Math")}}-Objekt das Standardobjekt ist. Die Statements, die dem `with`-Statement folgen, beziehen sich auf die {{jsxref("Math/PI", "PI")}}-Eigenschaft und die {{jsxref("Math/cos", "cos")}}- und {{jsxref("Math/sin", "sin")}}-Methoden, ohne ein Objekt anzugeben. JavaScript nimmt das `Math`-Objekt für diese Referenzen an.

```js
let a, x, y;
const r = 10;

with (Math) {
  a = PI * r * r;
  x = r * cos(PI);
  y = r * sin(PI / 2);
}
```

### Vermeidung des with-Statements durch Destructuring von Eigenschaften in den aktuellen Scope

Sie können die Verwendung von `with` meistens durch [Property Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) vermeiden. Hier erstellen wir einen zusätzlichen Block, um das Verhalten von `with` zu imitieren, ein zusätzliches Scope zu erstellen – aber in der tatsächlichen Verwendung kann dieser Block in der Regel weggelassen werden.

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

Wenn Sie einen Ausdruck produzieren, der einen langen Namensverweis mehrfach verwenden muss, und Ihr Ziel ist es, diesen langen Namen innerhalb Ihres Ausdrucks zu eliminieren, können Sie den Ausdruck in eine {{Glossary("IIFE", "IIFE")}} einwickeln und den langen Namen als Argument angeben.

```js
const objectHavingAnEspeciallyLengthyName = { foo: true, bar: false };

if (((o) => o.foo && !o.bar)(objectHavingAnEspeciallyLengthyName)) {
  // This branch runs.
}
```

### Erstellen dynamischer Namespaces mit dem with-Statement und einem Proxy

`with` wird jede Variablensuche in eine Eigenschaftssuche umwandeln, während [Proxies](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy) das Abfangen jeder Eigenschaftssuchanfrage ermöglichen. Sie können einen dynamischen Namespace erstellen, indem Sie beide kombinieren.

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
