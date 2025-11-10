---
title: Flache Kopie
slug: Glossary/Shallow_copy
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Eine **flache Kopie** eines Objekts ist eine Kopie, deren Eigenschaften dieselben {{Glossary("object_reference", "Referenzen")}} (zeigen auf dieselben zugrundeliegenden Werte) wie die des Quellobjekts haben, von dem die Kopie erstellt wurde. Dadurch kann es sein, dass bei Änderungen entweder am Quellobjekt oder an der Kopie, das andere Objekt ebenfalls geändert wird. Dieses Verhalten steht im Gegensatz zu dem einer {{Glossary("deep_copy", "tiefen Kopie")}}, bei der Quelle und Kopie vollständig unabhängig sind.

Formeller ausgedrückt, zwei Objekte `o1` und `o2` sind flache Kopien, wenn:

1. Sie sind nicht dasselbe Objekt (`o1 !== o2`).
2. Die Eigenschaften von `o1` und `o2` haben dieselben Namen in derselben Reihenfolge.
3. Die Werte ihrer Eigenschaften sind gleich.
4. Ihre Prototyp-Ketten sind gleich.

Siehe auch die Definition von _{{Glossary("deep_copy", "struktureller Äquivalenz")}}_.

Die Kopie eines Objekts, dessen Eigenschaften alle primitive Werte haben, entspricht sowohl der Definition einer {{Glossary("deep_copy", "tiefen Kopie")}} als auch einer flachen Kopie. Es ist jedoch eher sinnlos, bei einer solchen Kopie über die Tiefe zu sprechen, da es keine verschachtelten Eigenschaften gibt und wir normalerweise im Zusammenhang mit der Mutation verschachtelter Eigenschaften über tiefe Kopien sprechen.

Bei flachen Kopien werden nur die Eigenschaften der obersten Ebene kopiert, nicht die Werte verschachtelter Objekte. Daher:

- Das Neu-Zuweisen von Eigenschaften der obersten Ebene der Kopie beeinflusst das Quellobjekt nicht.
- Das Neu-Zuweisen von Eigenschaften verschachtelter Objekte der Kopie beeinflusst das Quellobjekt.

In JavaScript erzeugen alle standardmäßigen eingebaute Objektkopieroperationen ([Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`Array.prototype.concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/concat), [`Array.prototype.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), [`Array.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from) und [`Object.assign()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)) flache Kopien anstelle von tiefen Kopien.

Betrachten Sie das folgende Beispiel, in dem ein `ingredientsList`-Arrayobjekt erstellt wird und dann ein `ingredientsListCopy`-Objekt durch Kopieren dieses `ingredientsList`-Objekts erstellt wird.

```js
const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];

const ingredientsListCopy = Array.from(ingredientsList);
console.log(ingredientsListCopy);
// ["noodles",{"list":["eggs","flour","water"]}]
```

Das Neu-Zuweisen des Wertes einer verschachtelten Eigenschaft wird in beiden Objekten sichtbar sein.

```js
ingredientsListCopy[1].list = ["rice flour", "water"];
console.log(ingredientsList[1].list);
// Array [ "rice flour", "water" ]
```

Das Neu-Zuweisen des Wertes einer Eigenschaft der obersten Ebene (in diesem Fall der `0`-Index) wird nur im geänderten Objekt sichtbar sein.

```js
ingredientsListCopy[0] = "rice noodles";
console.log(ingredientsList[0]); // noodles
console.log(JSON.stringify(ingredientsListCopy));
// ["rice noodles",{"list":["rice flour","water"]}]
console.log(JSON.stringify(ingredientsList));
// ["noodles",{"list":["rice flour","water"]}]
```

## Siehe auch

- Verwandte Glossareinträge:
  - {{Glossary("Deep_copy", "Tiefe Kopie")}}
