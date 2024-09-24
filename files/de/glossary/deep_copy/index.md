---
title: Tiefe Kopie
slug: Glossary/Deep_copy
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Eine **tiefe Kopie** eines Objekts ist eine Kopie, deren Eigenschaften nicht die gleichen Referenzen (zeigen auf die gleichen zugrunde liegenden Werte) wie die des Quellobjekts teilen, von dem die Kopie gemacht wurde. Das bedeutet, wenn Sie entweder das Quellobjekt oder die Kopie verändern, können Sie sicher sein, dass das andere Objekt nicht ebenfalls verändert wird. Dieses Verhalten steht im Gegensatz zum Verhalten einer {{Glossary("shallow copy")}}, bei der Änderungen an verschachtelten Eigenschaften im Quellobjekt oder der Kopie dazu führen können, dass das andere Objekt ebenfalls verändert wird.

Zwei Objekte `o1` und `o2` sind _strukturell äquivalent_, wenn ihr beobachtbares Verhalten gleich ist. Dieses Verhalten umfasst:

1. Die Eigenschaften von `o1` und `o2` haben die gleichen Namen in der gleichen Reihenfolge.
2. Die Werte ihrer Eigenschaften sind strukturell äquivalent.
3. Ihre Prototypenketten sind strukturell äquivalent (obwohl, wenn wir uns mit struktureller Äquivalenz befassen, diese Objekte normalerweise einfache Objekte sind, was bedeutet, dass sie beide von `Object.prototype` erben).

Strukturell äquivalente Objekte können entweder das gleiche Objekt sein (`o1 === o2`) oder _Kopien_ (`o1 !== o2`). Da äquivalente primitive Werte immer gleich verglichen werden, können Sie davon keine Kopien erstellen.

Wir können jetzt tiefe Kopien formaler definieren als:

1. Sie sind nicht dasselbe Objekt (`o1 !== o2`).
2. Die Eigenschaften von `o1` und `o2` haben die gleichen Namen in der gleichen Reihenfolge.
3. Die Werte ihrer Eigenschaften sind tiefe Kopien voneinander.
4. Ihre Prototypenketten sind strukturell äquivalent.

Tiefe Kopien können ihre Prototypenketten kopiert haben, müssen es aber nicht (oftmals werden sie nicht kopiert). Aber zwei Objekte mit strukturell nicht äquivalenten Prototypenketten (zum Beispiel: Eins ist ein Array, das andere ein einfaches Objekt) sind niemals Kopien voneinander.

Die Kopie eines Objekts, dessen Eigenschaften alle primitive Werte haben, entspricht der Definition sowohl einer tiefen Kopie als auch einer {{Glossary("shallow copy")}}. Es ist jedoch relativ nutzlos, über die Tiefe einer solchen Kopie zu sprechen, da sie keine verschachtelten Eigenschaften hat und wir normalerweise im Kontext der Veränderung verschachtelter Eigenschaften über tiefe Kopien sprechen.

In JavaScript erstellen standardmäßige Built-in-Objektkopieroperationen ([Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`Array.prototype.concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/concat), [`Array.prototype.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), [`Array.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from), und [`Object.assign()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)) keine tiefen Kopien (stattdessen erstellen sie flache Kopien).

Ein Weg, eine tiefe Kopie eines JavaScript-Objekts zu erstellen, wenn es {{Glossary("serialization", "serialisierbar")}} ist, besteht darin, {{jsxref("JSON.stringify()")}} zu nutzen, um das Objekt in einen JSON-String umzuwandeln, und dann {{jsxref("JSON.parse()")}}, um den String wieder in ein (komplett neues) JavaScript-Objekt umzuwandeln:

```js
const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];
const ingredientsListDeepCopy = JSON.parse(JSON.stringify(ingredientsList));
```

Da eine tiefe Kopie keine Referenzen mit ihrem Quellobjekt teilt, wirken sich Änderungen an der tiefen Kopie nicht auf das Quellobjekt aus.

```js
// Ändern Sie den Wert der 'list'-Eigenschaft in ingredientsListDeepCopy.
ingredientsListDeepCopy[1].list = ["rice flour", "water"];
// Die 'list'-Eigenschaft ändert sich nicht in ingredients_list.
console.log(ingredientsList[1].list);
// Array(3) [ "eggs", "flour", "water" ]
```

Allerdings, während das Objekt im obigen Code einfach genug ist, um {{Glossary("serialization", "serialisierbar")}} zu sein, sind viele JavaScript-Objekte überhaupt nicht serialisierbar — zum Beispiel [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) (mit Closures), [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), Objekte, die HTML-Elemente in der [HTML DOM API](/de/docs/Web/API/HTML_DOM_API) repräsentieren, rekursive Daten und viele andere Fälle. Der Aufruf von `JSON.stringify()`, um die Objekte in diesen Fällen zu serialisieren, wird fehlschlagen. Es gibt also keinen Weg, um tiefe Kopien dieser Objekte zu machen.

Die Web-API [`structuredClone()`](/de/docs/Web/API/structuredClone) erstellt ebenfalls tiefe Kopien und hat den Vorteil, dass sie [übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) in der Quelle auf die neue Kopie _übertragen_ kann, anstatt nur zu klonen. Sie behandelt auch mehr Datentypen, wie `Error`. Beachten Sie jedoch, dass `structuredClone()` keine Funktion der JavaScript-Sprache selbst ist — sondern eine Funktion von Browsern und anderen JavaScript-Hosts, die Web-APIs implementieren. Und der Aufruf von `structuredClone()`, um ein nicht serialisierbares Objekt zu klonen, wird auf die gleiche Weise fehlschlagen, wie der Aufruf von `JSON.stringify()`, um es zu serialisieren, fehlschlagen wird.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{glossary("Shallow copy")}}
- [`window.structuredClone()`](/de/docs/Web/API/structuredClone)
