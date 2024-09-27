---
title: Deep copy
slug: Glossary/Deep_copy
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{GlossarySidebar}}

Eine **Deep Copy** (tiefe Kopie) eines Objekts ist eine Kopie, deren Eigenschaften nicht dieselben Referenzen teilen (auf dieselben zugrunde liegenden Werte verweisen) wie das Ausgangsobjekt, von dem die Kopie erstellt wurde. Infolgedessen kann, wenn Sie entweder das Original oder die Kopie ändern, sichergestellt werden, dass sich das andere Objekt nicht ebenfalls ändert. Dieses Verhalten steht im Gegensatz zum Verhalten einer [Shallow Copy](/de/docs/Glossary/shallow_copy), bei der Änderungen an verschachtelten Eigenschaften im Original oder in der Kopie dazu führen können, dass sich das andere Objekt ebenfalls ändert.

Zwei Objekte `o1` und `o2` sind _strukturell äquivalent_, wenn ihr beobachtbares Verhalten dasselbe ist. Diese Verhaltensweisen umfassen:

1. Die Eigenschaften von `o1` und `o2` haben dieselben Namen in derselben Reihenfolge.
2. Die Werte ihrer Eigenschaften sind strukturell äquivalent.
3. Ihre Prototypketten sind strukturell äquivalent (obwohl wir es bei der strukturellen Äquivalenz meistens mit einfachen Objekten zu tun haben, die beide von `Object.prototype` erben).

Strukturell äquivalente Objekte können entweder dasselbe Objekt sein (`o1 === o2`) oder _Kopien_ (`o1 !== o2`). Da äquivalente primitive Werte immer gleich verglichen werden, können Sie keine Kopien von ihnen erstellen.

Wir können nun tiefe Kopien formeller definieren als:

1. Sie sind nicht dasselbe Objekt (`o1 !== o2`).
2. Die Eigenschaften von `o1` und `o2` haben dieselben Namen in derselben Reihenfolge.
3. Die Werte ihrer Eigenschaften sind tiefe Kopien voneinander.
4. Ihre Prototypketten sind strukturell äquivalent.

Tiefe Kopien können Prototypketten kopiert haben oder auch nicht (und oft werden sie nicht kopiert). Zwei Objekte mit strukturell nicht äquivalenten Prototypketten (zum Beispiel eines ist ein Array und das andere ist ein einfaches Objekt) sind niemals Kopien voneinander.

Die Kopie eines Objekts, dessen Eigenschaften alle primitive Werte haben, entspricht sowohl der Definition einer Deep Copy als auch einer [Shallow Copy](/de/docs/Glossary/shallow_copy). Es ist jedoch etwas sinnlos, über die Tiefe einer solchen Kopie zu sprechen, da sie keine verschachtelten Eigenschaften hat und wir in der Regel über tiefe Kopien im Kontext von Änderungen verschachtelter Eigenschaften sprechen.

In JavaScript erstellen standardmäßige, eingebaute Objektkopier-Operationen ([Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`Array.prototype.concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/concat), [`Array.prototype.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), [`Array.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from) und [`Object.assign()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)) keine tiefen Kopien (sie erstellen stattdessen flache Kopien).

Eine Möglichkeit, eine tiefe Kopie eines JavaScript-Objekts zu erstellen, sofern es [serialisierbar](/de/docs/Glossary/serialization) ist, besteht darin, `JSON.stringify()` zu verwenden, um das Objekt in eine JSON-Zeichenkette umzuwandeln und dann `JSON.parse()` zu verwenden, um die Zeichenkette wieder in ein (vollständig neues) JavaScript-Objekt umzuwandeln:

```js
const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];
const ingredientsListDeepCopy = JSON.parse(JSON.stringify(ingredientsList));
```

Da eine tiefe Kopie keine Referenzen mit ihrem Ausgangsobjekt teilt, wirken sich Änderungen an der tiefen Kopie nicht auf das Ausgangsobjekt aus.

```js
// Change the value of the 'list' property in ingredientsListDeepCopy.
ingredientsListDeepCopy[1].list = ["rice flour", "water"];
// The 'list' property does not change in ingredients_list.
console.log(ingredientsList[1].list);
// Array(3) [ "eggs", "flour", "water" ]
```

Obwohl das Objekt im obigen Code einfach genug ist, um [serialisierbar](/de/docs/Glossary/serialization) zu sein, sind viele JavaScript-Objekte überhaupt nicht serialisierbar — zum Beispiel [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) (mit Closures), [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), Objekte, die HTML-Elemente in der [HTML DOM API](/de/docs/Web/API/HTML_DOM_API) darstellen, rekursive Datenstrukturen und viele andere Fälle. Der Aufruf von `JSON.stringify()`, um die Objekte in diesen Fällen zu serialisieren, wird fehlschlagen. Es gibt also keine Möglichkeit, tiefe Kopien solcher Objekte zu erstellen.

Die Web-API [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) erstellt ebenfalls tiefe Kopien und hat den Vorteil, dass sie [transferierbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) im Original an die neue Kopie _übertragen_ kann, anstatt sie nur zu klonen. Sie behandelt auch mehr Datentypen, wie z.B. `Error`. Aber beachten Sie, dass `structuredClone()` keine Funktion der JavaScript-Sprache selbst ist — sondern eine Funktion von Browsern und anderen JavaScript-Hosts, die Web-APIs implementieren. Und der Aufruf von `structuredClone()`, um ein nicht serialisierbares Objekt zu klonen, wird auf die gleiche Weise fehlschlagen wie der Aufruf von `JSON.stringify()` zur Serialisierung.

## Siehe auch

- Verwandte Glossarbegriffe:
  - [Shallow copy](/de/docs/Glossary/Shallow_copy)
- [`Window.structuredClone()`](/de/docs/Web/API/Window/structuredClone)
- [`WorkerGlobalScope.structuredClone()`](/de/docs/Web/API/WorkerGlobalScope/structuredClone)
