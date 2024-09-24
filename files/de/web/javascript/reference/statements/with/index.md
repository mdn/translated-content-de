---
title: with
slug: Web/JavaScript/Reference/Statements/with
l10n:
  sourceCommit: 3f91fdcc678991410f4f5adcbff44d1b3b1ede88
---

{{jsSidebar("Statements")}}{{Deprecated_Header}}

> [!NOTE]
> Die Verwendung des `with`-Statements wird nicht empfohlen, da es die Quelle verwirrender Fehler und Kompatibilitätsprobleme sein kann, eine Optimierung unmöglich macht und im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) verboten ist. Die empfohlene Alternative besteht darin, das Objekt, auf dessen Eigenschaften Sie zugreifen möchten, einer temporären Variablen zuzuweisen.

Das **`with`**-Statement erweitert die Scope-Kette für ein Statement.

## Syntax

```js-nolint
with (expression)
  statement
```

- `expression`
  - : Fügt der Scope-Kette, die bei der Auswertung des Statements verwendet wird, den angegebenen Ausdruck hinzu. Die Klammern um den Ausdruck sind erforderlich.
- `statement`
  - : Beliebiges Statement. Um mehrere Statements auszuführen, verwenden Sie ein [Block](/de/docs/Web/JavaScript/Reference/Statements/block)-Statement (`{ ... }`), um diese Statements zu gruppieren.

## Beschreibung

Es gibt zwei Arten von Identifikatoren: einen _qualifizierten_ Identifier und einen _nicht qualifizierten_ Identifier. Ein nicht qualifizierter Identifier ist einer, der nicht angibt, woher er stammt.

```js
foo; // nicht qualifizierter Identifier
foo.bar; // bar ist ein qualifizierter Identifier
```

Normalerweise wird ein nicht qualifizierter Identifier aufgelöst, indem die Scope-Kette nach einer Variablen mit diesem Namen durchsucht wird, während ein qualifizierter Identifier durch die Suche in der Prototyp-Kette eines Objekts nach einer Eigenschaft mit diesem Namen aufgelöst wird.

```js
const foo = { bar: 1 };
console.log(foo.bar);
// foo wird in der Scope-Kette als Variable gefunden;
// bar wird in foo als Eigenschaft gefunden
```

Eine Ausnahme hiervon ist das [globale Objekt](/de/docs/Glossary/Global_object), das sich oben in der Scope-Kette befindet und dessen Eigenschaften automatisch zu globalen Variablen werden, auf die ohne Qualifikatoren verwiesen werden kann.

```js
console.log(globalThis.Math === Math); // true
```

Das `with`-Statement fügt das angegebene Objekt an den Anfang dieser Scope-Kette während der Auswertung des Körper-Statements hinzu. Jeder nicht qualifizierte Name wird zuerst innerhalb des Objekts (durch eine [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)-Überprüfung) gesucht, bevor in der oberen Scope-Kette gesucht wird.

Beachten Sie, dass wenn die nicht qualifizierte Referenz auf eine Methode des Objekts verweist, die Methode mit dem Objekt als ihrem `this`-Wert aufgerufen wird.

```js
with ([1, 2, 3]) {
  console.log(toString()); // 1,2,3
}
```

Das Objekt kann eine [`[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables)-Eigenschaft haben, die eine Liste von Eigenschaften definiert, die nicht der Scope-Kette hinzugefügt werden sollen (für Rückwärtskompatibilität). Siehe die [`Symbol.unscopables`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables)-Dokumentation für weitere Informationen.

Die Gründe für die Verwendung eines `with`-Statements umfassen das Einsparen einer temporären Variablen und die Reduzierung der Dateigröße, indem ein langer Objektverweis vermieden wird. Es gibt jedoch weit mehr Gründe, warum `with`-Statements nicht erwünscht sind:

- Leistung: Das `with`-Statement zwingt das angegebene Objekt dazu, zuerst nach allen Namensauflösungen durchsucht zu werden. Daher werden alle Identifier, die keine Mitglieder des angegebenen Objekts sind, in einem `with`-Block langsamer gefunden. Zudem kann der Optimierer keine Annahmen darüber treffen, auf was sich jeder nicht qualifizierte Identifier bezieht, sodass er bei jedem Gebrauch des Identifiers erneut die gleiche Eigenschaftssuche durchführen muss.
- Lesbarkeit: Das `with`-Statement macht es schwierig für einen menschlichen Leser oder einen JavaScript-Compiler zu entscheiden, ob ein nicht qualifizierter Name entlang der Scope-Kette gefunden wird und, wenn ja, in welchem Objekt. Zum Beispiel:

  ```js
  function f(x, o) {
    with (o) {
      console.log(x);
    }
  }
  ```

  Wenn Sie nur die Definition von `f` betrachten, ist es unmöglich zu sagen, auf was sich das `x` im `with`-Körper bezieht. Erst bei einem Aufruf von `f` kann `x` als `o.x` oder als erster formaler Parameter von `f` bestimmt werden. Wenn Sie vergessen, `x` im Objekt zu definieren, das Sie als zweiten Parameter übergeben, erhalten Sie keinen Fehler - stattdessen erhalten Sie unerwartete Ergebnisse. Es ist auch unklar, was die tatsächliche Absicht eines solchen Codes wäre.

- Vorwärtskompatibilität: Code, der `with` verwendet, ist möglicherweise nicht vorwärtskompatibel, insbesondere wenn er mit etwas anderem als einem einfachen Objekt verwendet wird, das in Zukunft mehr Eigenschaften erhalten könnte. Betrachten Sie dieses Beispiel:

  ```js
  function f(foo, values) {
    with (foo) {
      console.log(values);
    }
  }
  ```

  Wenn Sie `f([1, 2, 3], obj)` in einer ECMAScript 5-Umgebung aufrufen, wird die `values`-Referenz innerhalb des `with`-Statements zu `obj` aufgelöst. ECMAScript 2015 führt jedoch eine [`values`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/values)-Eigenschaft auf `Array.prototype` ein (sie wird also auf jedem Array verfügbar sein). Nach einem Update der Umgebung wird die `values`-Referenz innerhalb des `with`-Statements zu `[1, 2, 3].values` aufgelöst, was wahrscheinlich Bugs verursacht.

  In diesem speziellen Beispiel wird `values` als unscopable durch [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables) definiert, sodass es immer noch korrekt auf den `values`-Parameter aufgelöst wird. Wäre es nicht als unscopable definiert, wäre dies ein schwieriges Problem zur Behebung.

## Beispiele

### Verwendung des with-Statements

Das folgende `with`-Statement legt fest, dass das {{jsxref("Math")}}-Objekt das Standardobjekt ist. Die Statements nach dem `with`-Statement beziehen sich auf die {{jsxref("Math/PI", "PI")}}-Eigenschaft und die {{jsxref("Math/cos", "cos")}}- und {{jsxref("Math/sin", "sin")}}-Methoden, ohne ein Objekt anzugeben. JavaScript nimmt das `Math`-Objekt für diese Referenzen an.

```js
let a, x, y;
const r = 10;

with (Math) {
  a = PI * r * r;
  x = r * cos(PI);
  y = r * sin(PI / 2);
}
```

### Vermeiden des with-Statements durch Dekonstruktion von Eigenschaften in den aktuellen Scope

Sie können die Verwendung von `with` normalerweise durch [Eigenschaftsdekonstruktion](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) vermeiden. Hier erstellen wir einen zusätzlichen Block, um das Verhalten von `with`, das einen zusätzlichen Scope erstellt, nachzuahmen – aber in der tatsächlichen Verwendung kann dieser Block normalerweise weggelassen werden.

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

### Vermeiden des with-Statements durch Verwendung eines IIFE

Wenn Sie einen Ausdruck erstellen, der eine lange namensgebende Referenz mehrmals wiederverwenden muss, und Ihr Ziel ist es, diesen langen Namen innerhalb Ihres Ausdrucks zu eliminieren, können Sie den Ausdruck in ein [IIFE](/de/docs/Glossary/IIFE) einwickeln und den langen Namen als Argument bereitstellen.

```js
const objectHavingAnEspeciallyLengthyName = { foo: true, bar: false };

if (((o) => o.foo && !o.bar)(objectHavingAnEspeciallyLengthyName)) {
  // Dieser Zweig wird ausgeführt.
}
```

### Erstellen dynamischer Namespaces mithilfe des with-Statements und eines Proxys

`with` wird jede Variablenauflösung in eine Eigenschaftsauflösung umwandeln, während [Proxies](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy) jede Eigenschaftsauflösungsabfrage abfangen können. Sie können einen dynamischen Namespace erstellen, indem Sie sie kombinieren.

```js
const namespace = new Proxy(
  {},
  {
    has(target, key) {
      // Vermeiden Sie das Abfangen globaler Eigenschaften wie `console`
      if (key in globalThis) {
        return false;
      }
      // Fangen Sie alle Eigenschaftsauflösungen ab
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
