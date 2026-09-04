---
title: Shallow Copy
slug: Glossary/Shallow_copy
l10n:
  sourceCommit: b7c5617fc1d8eb00c6884a708983da21ad61b228
---

Eine **shallow copy** eines Objekts ist eine Kopie, deren Eigenschaften dieselben {{Glossary("object_reference", "Referenzen")}} (verweisen auf dieselben zugrunde liegenden Werte) wie die des Quellobjekts teilen, von dem die Kopie erstellt wurde. Daher kann eine Änderung entweder am Quellobjekt oder an der Kopie auch dazu führen, dass sich das andere Objekt ändert. Dieses Verhalten steht im Kontrast zum Verhalten einer {{Glossary("deep_copy", "deep copy")}}, bei der Quelle und Kopie vollständig unabhängig sind.

Shallow Copying wird normalerweise wie folgt implementiert:

1. Ein neues Objekt desselben Typs wird erstellt. Die Prototyp-Kette wird nahezu immer beibehalten. Beispielsweise sollte das Deep Copying einer {{jsxref("Map")}} in einer {{jsxref("Map")}} resultieren und nicht in etwas anderem.
2. Für jede eigene Eigenschaft des Originalobjekts wird eine Eigenschaft mit demselben Schlüssel im neuen Objekt definiert.
3. Der Wert jeder neuen Eigenschaft wird auf dieselbe Referenz wie der Wert der ursprünglichen Eigenschaft gesetzt. Wenn der Wert der Eigenschaft ein primitiver Wert ist, wird keine Kopie durchgeführt.
4. Alle Daten, die nicht als Eigenschaften exponiert sind (wie {{jsxref("Map")}}), werden übernommen, jedoch ohne Objekt-Referenzen innerhalb der Daten zu kopieren, vorausgesetzt, die Implementierung erkennt den Objekttyp und weiß, wie man die Daten abruft und setzt.

Beachten Sie, dass JavaScript keinen integrierten Mechanismus hat, der eine allgemeine shallow copy durchführt (die vorhandenen Mechanismen nehmen nur spezifische Objekttypen wie einfache Objekte oder Arrays an), so dass sich die Implementierungen von Bibliotheken in technischen Details oft unterscheiden, etwa:

- Ob nicht aufgezählte oder Symbol-Eigenschaften kopiert werden
- Ob Eigenschaftsbeschreiber kopiert werden
- Ob Zugriffseigenschaften als Zugriffe kopiert werden
- Welche Datenstrukturen das Kopieren von Nicht-Eigenschaftsdaten unterstützen

Die Kopie eines Objekts, dessen Eigenschaften alle primitive Werte haben, entspricht sowohl der Definition einer {{Glossary("deep_copy", "deep copy")}} als auch einer shallow copy. Es ist allerdings wenig sinnvoll, die Tiefe einer solchen Kopie zu diskutieren, da sie keine verschachtelten Eigenschaften hat und wir üblicherweise über das Deep Copying im Kontext der Änderung von verschachtelten Eigenschaften sprechen.

Bei shallow copies werden nur die Eigenschaften der obersten Ebene kopiert, nicht die Werte von verschachtelten Objekten. Daher:

- Das Neu-Zuweisen von Eigenschaften der obersten Ebene der Kopie wirkt sich nicht auf das Quellobjekt aus.
- Das Neu-Zuweisen von Eigenschaften verschachtelter Objekte der Kopie wirkt sich auf das Quellobjekt aus.

In JavaScript erstellen alle standardmäßigen integrierten Objektkopieroperationen ([Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`Array.prototype.concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/concat), [`Array.prototype.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), [`Array.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from) und [`Object.assign()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)) shallow copies anstelle von deep copies.

Betrachten Sie das folgende Beispiel, in dem ein `ingredientsList`-Array-Objekt erstellt wird, und dann ein `ingredientsListCopy`-Objekt durch das Kopieren dieses `ingredientsList`-Objekts erstellt wird.

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

Das Neu-Zuweisen des Wertes einer Eigenschaft der obersten Ebene (in diesem Fall der Index `0`) wird nur im geänderten Objekt sichtbar sein.

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
  - {{Glossary("Deep_equality", "Tiefgleichheit")}}
  - {{Glossary("Deep_copy", "Deep Copy")}}
