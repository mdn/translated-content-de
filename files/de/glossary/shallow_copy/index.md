---
title: Shallow copy
slug: Glossary/Shallow_copy
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Eine **shallow copy** eines Objekts ist eine Kopie, deren Eigenschaften dieselben [Referenzen](/de/docs/Glossary/object_reference) (zeigen auf dieselben zugrunde liegenden Werte) wie die des Quellobjekts teilen, von dem die Kopie erstellt wurde. Infolgedessen kann es sein, dass Sie, wenn Sie entweder das Quell- oder das Kopierobjekt ändern, auch das andere Objekt ändern. Dieses Verhalten steht im Gegensatz zu dem einer [deep copy](/de/docs/Glossary/deep_copy), bei der Quell- und Kopierobjekt vollständig unabhängig sind.

Formeller ausgedrückt, zwei Objekte `o1` und `o2` sind shallow copies, wenn:

1. Sie nicht dasselbe Objekt sind (`o1 !== o2`).
2. Die Eigenschaften von `o1` und `o2` denselben Namen in derselben Reihenfolge haben.
3. Die Werte ihrer Eigenschaften gleich sind.
4. Ihre Prototyp-Ketten gleich sind.

Siehe auch die Definition von _[struktureller Äquivalenz](/de/docs/Glossary/deep_copy)_.

Die Kopie eines Objekts, dessen Eigenschaften alle Primitive Werte haben, entspricht sowohl der Definition einer [deep copy](/de/docs/Glossary/deep_copy) als auch einer shallow copy. Es ist jedoch wenig sinnvoll, über die Tiefe einer solchen Kopie zu sprechen, da sie keine geschachtelten Eigenschaften hat und wir normalerweise über tiefes Kopieren im Zusammenhang mit der Veränderung geschachtelter Eigenschaften sprechen.

Bei flachen Kopien werden nur die obersten Eigenschaften kopiert, nicht die Werte geschachtelter Objekte. Daher gilt:

- Das Neu-Zuweisen von obersten Eigenschaften der Kopie wirkt sich nicht auf das Quellobjekt aus.
- Das Neu-Zuweisen von Eigenschaften geschachtelter Objekte der Kopie wirkt sich auf das Quellobjekt aus.

In JavaScript erzeugen alle standardmäßigen eingebauten Objektkopiervorgänge ([Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`Array.prototype.concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/concat), [`Array.prototype.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), [`Array.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from) und [`Object.assign()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)) flache Kopien anstelle von tiefen Kopien.

Betrachten Sie das folgende Beispiel, in dem ein `ingredientsList` Array-Objekt erstellt und dann ein `ingredientsListCopy` Objekt durch Kopieren dieses `ingredientsList` Objekts erstellt wird.

```js
const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];

const ingredientsListCopy = Array.from(ingredientsList);
console.log(ingredientsListCopy);
// ["noodles",{"list":["eggs","flour","water"]}]
```

Das Neu-Zuweisen des Wertes einer geschachtelten Eigenschaft wird in beiden Objekten sichtbar sein.

```js
ingredientsListCopy[1].list = ["rice flour", "water"];
console.log(ingredientsList[1].list);
// Array [ "rice flour", "water" ]
```

Das Neu-Zuweisen des Wertes einer obersten Eigenschaft (in diesem Fall der `0` Index) wird nur im geänderten Objekt sichtbar sein.

```js
ingredientsListCopy[0] = "rice noodles";
console.log(ingredientsList[0]); // noodles
console.log(JSON.stringify(ingredientsListCopy));
// ["rice noodles",{"list":["rice flour","water"]}]
console.log(JSON.stringify(ingredientsList));
// ["noodles",{"list":["rice flour","water"]}]
```

## Siehe auch

- Verwandte Glossarbegriffe:
  - [Deep copy](/de/docs/Glossary/Deep_copy)
