---
title: Flache Kopie
slug: Glossary/Shallow_copy
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Eine **flache Kopie** eines Objekts ist eine Kopie, deren Eigenschaften denselben {{Glossary("object reference", "Referenzen")}} (verweisen auf dieselben zugrundeliegenden Werte) wie die des Quellobjekts teilen, von dem die Kopie erstellt wurde. Infolgedessen kann es sein, dass beim Ändern entweder des Quellobjekts oder der Kopie auch das andere Objekt geändert wird. Dieses Verhalten steht im Gegensatz zum Verhalten einer {{Glossary("deep copy", "tiefen Kopie")}}, bei der Quelle und Kopie vollständig unabhängig sind.

Formal sind zwei Objekte `o1` und `o2` flache Kopien, wenn:

1. Sie nicht dasselbe Objekt sind (`o1 !== o2`).
2. Die Eigenschaften von `o1` und `o2` denselben Namen in derselben Reihenfolge haben.
3. Die Werte ihrer Eigenschaften gleich sind.
4. Ihre Prototypketten gleich sind.

Siehe auch die Definition von _{{Glossary("deep copy", "strukturelle Äquivalenz")}}_.

Die Kopie eines Objekts, dessen Eigenschaften alle primitive Werte haben, passt zur Definition sowohl einer {{Glossary("deep copy")}} als auch einer flachen Kopie. Es ist allerdings eher unnütz, über die Tiefe einer solchen Kopie zu sprechen, da sie keine verschachtelten Eigenschaften hat und wir normalerweise in Bezug auf die Änderung verschachtelter Eigenschaften über tiefes Kopieren sprechen.

Bei flachen Kopien werden nur die obersten Eigenschaften kopiert, nicht die Werte verschachtelter Objekte. Daher gilt:

- Das Neuzuordnen von obersten Eigenschaften der Kopie beeinflusst das Quellobjekt nicht.
- Das Neuzuordnen von Eigenschaften verschachtelter Objekte der Kopie beeinflusst das Quellobjekt.

In JavaScript erzeugen alle standardmäßigen eingebauten Objektkopieroperationen ([Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`Array.prototype.concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/concat), [`Array.prototype.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), [`Array.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from) und [`Object.assign()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)) flache Kopien anstelle von tiefen Kopien.

Betrachten Sie folgendes Beispiel, in dem ein `ingredientsList`-Array-Objekt erstellt wird und dann ein `ingredientsListCopy`-Objekt durch Kopieren dieses `ingredientsList`-Objekts erstellt wird.

```js
const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];

const ingredientsListCopy = Array.from(ingredientsList);
console.log(ingredientsListCopy);
// ["noodles",{"list":["eggs","flour","water"]}]
```

Das Neuzuordnen des Wertes einer verschachtelten Eigenschaft wird in beiden Objekten sichtbar sein.

```js
ingredientsListCopy[1].list = ["rice flour", "water"];
console.log(ingredientsList[1].list);
// Array [ "rice flour", "water" ]
```

Das Neuzuordnen des Wertes einer obersten Eigenschaft (in diesem Fall der Index `0`) wird nur im geänderten Objekt sichtbar sein.

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
  - {{Glossary("Deep copy")}}
