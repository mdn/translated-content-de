---
title: Shallow copy
slug: Glossary/Shallow_copy
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Eine **Shallow Copy** (flache Kopie) eines Objekts ist eine Kopie, deren Eigenschaften dieselben {{Glossary("object_reference", "Referenzen")}} (weisen auf dieselben zugrunde liegenden Werte) wie die des Quellobjekts haben, von dem die Kopie erstellt wurde. Daher kann es beim Ändern entweder des Quellobjekts oder der Kopie passieren, dass sich das andere Objekt ebenfalls ändert. Dieses Verhalten steht im Gegensatz zu dem einer {{Glossary("deep_copy", "Deep Copy")}}, bei der Quelle und Kopie vollständig unabhängig voneinander sind.

Formeller ausgedrückt sind zwei Objekte `o1` und `o2` flache Kopien, wenn:

1. Sie nicht dasselbe Objekt sind (`o1 !== o2`).
2. Die Eigenschaften von `o1` und `o2` dieselben Namen in derselben Reihenfolge haben.
3. Die Werte ihrer Eigenschaften gleich sind.
4. Ihre Prototypketten gleich sind.

Siehe auch die Definition von _{{Glossary("deep_copy", "struktureller Äquivalenz")}}_.

Die Kopie eines Objekts, dessen Eigenschaften alle primitive Werte haben, passt sowohl zur Definition einer {{Glossary("deep_copy", "Deep Copy")}} als auch einer flachen Kopie. Es ist jedoch etwas sinnlos, über die Tiefe einer solchen Kopie zu sprechen, da keine verschachtelten Eigenschaften vorhanden sind und wir normalerweise im Kontext der Änderung verschachtelter Eigenschaften über Deep Copy sprechen.

Bei flachen Kopien werden nur die Eigenschaften der obersten Ebene kopiert, nicht die Werte verschachtelter Objekte. Daher:

- Das Neuzuweisen von Eigenschaften der obersten Ebene der Kopie beeinflusst das Quellobjekt nicht.
- Das Neuzuweisen von verschachtelten Objekteigenschaften der Kopie beeinflusst jedoch das Quellobjekt.

In JavaScript erzeugen alle standardmäßigen eingebauten Objektkopier-Operationen ([Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`Array.prototype.concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/concat), [`Array.prototype.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), [`Array.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from) und [`Object.assign()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)) flache Kopien statt tiefer Kopien.

Betrachten Sie das folgende Beispiel, in dem ein `ingredientsList`-Array-Objekt erstellt wird und dann ein `ingredientsListCopy`-Objekt durch das Kopieren dieses `ingredientsList`-Objekts erstellt wird.

```js
const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];

const ingredientsListCopy = Array.from(ingredientsList);
console.log(ingredientsListCopy);
// ["noodles",{"list":["eggs","flour","water"]}]
```

Das Neuzuweisen des Werts einer verschachtelten Eigenschaft wird in beiden Objekten sichtbar sein.

```js
ingredientsListCopy[1].list = ["rice flour", "water"];
console.log(ingredientsList[1].list);
// Array [ "rice flour", "water" ]
```

Das Neuzuweisen des Werts einer Eigenschaft der obersten Ebene (in diesem Fall der `0`-Index) wird nur im geänderten Objekt sichtbar sein.

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
  - {{Glossary("Deep_copy", "Deep copy")}}
