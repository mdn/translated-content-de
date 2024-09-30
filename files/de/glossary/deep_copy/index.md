---
title: Deep copy
slug: Glossary/Deep_copy
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{GlossarySidebar}}

Eine **deep copy** eines Objekts ist eine Kopie, deren Eigenschaften nicht dieselben Referenzen teilen (nicht auf dieselben zugrunde liegenden Werte verweisen) wie die des Quellobjekts, von dem die Kopie erstellt wurde. Daher können Sie sicher sein, dass weder das Quellobjekt noch die Kopie das jeweils andere Objekt beeinflusst, wenn Sie Änderungen vornehmen. Dieses Verhalten steht im Gegensatz zum Verhalten einer [shallow copy](/de/docs/Glossary/shallow_copy), bei der Änderungen an verschachtelten Eigenschaften im Quellobjekt oder in der Kopie dazu führen können, dass sich auch das andere Objekt ändert.

Zwei Objekte `o1` und `o2` sind _strukturell äquivalent_, wenn ihr beobachtbares Verhalten identisch ist. Zu diesen Verhaltensweisen gehören:

1. Die Eigenschaften von `o1` und `o2` haben dieselben Namen in derselben Reihenfolge.
2. Die Werte ihrer Eigenschaften sind strukturell äquivalent.
3. Ihre Prototypketten sind strukturell äquivalent (obwohl, wenn wir von struktureller Äquivalenz sprechen, diese Objekte normalerweise plain objects sind, das heißt, sie erben beide von `Object.prototype`).

Strukturell äquivalente Objekte können entweder dasselbe Objekt sein (`o1 === o2`) oder _Kopien_ (`o1 !== o2`). Da äquivalente primitive Werte immer gleich verglichen werden, können Sie keine Kopien von ihnen erstellen.

Wir können tiefe Kopien nun formaler definieren als:

1. Sie sind nicht dasselbe Objekt (`o1 !== o2`).
2. Die Eigenschaften von `o1` und `o2` haben dieselben Namen in derselben Reihenfolge.
3. Die Werte ihrer Eigenschaften sind tiefe Kopien voneinander.
4. Ihre Prototypketten sind strukturell äquivalent.

Tiefe Kopien können unter Umständen ihre Prototypketten kopiert haben (und oft tun sie das nicht). Aber zwei Objekte mit strukturell nicht äquivalenten Prototypketten (zum Beispiel, eins ist ein Array und das andere ein plain object) sind niemals Kopien voneinander.

Die Kopie eines Objekts, dessen Eigenschaften alle primitive Werte haben, entspricht sowohl der Definition einer deep copy als auch einer [shallow copy](/de/docs/Glossary/shallow_copy). Es ist jedoch etwas sinnlos, über die Tiefe einer solchen Kopie zu sprechen, da sie keine verschachtelten Eigenschaften hat und wir normalerweise im Kontext der Veränderung verschachtelter Eigenschaften über Kopiertiefe sprechen.

In JavaScript erstellen Standard-Built-in-Objektkopieroperationen ([Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`Array.prototype.concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/concat), [`Array.prototype.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), [`Array.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from) und [`Object.assign()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)) keine tiefen Kopien (sie erstellen stattdessen flache Kopien).

Eine Möglichkeit, eine tiefe Kopie eines JavaScript-Objekts zu erstellen, sofern es [serialisierbar](/de/docs/Glossary/serialization) ist, besteht darin, {{jsxref("JSON.stringify()")}} zu verwenden, um das Objekt in einen JSON-String zu konvertieren, und dann {{jsxref("JSON.parse()")}}, um den String zurück in ein (vollständig neues) JavaScript-Objekt zu konvertieren:

```js
const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];
const ingredientsListDeepCopy = JSON.parse(JSON.stringify(ingredientsList));
```

Da eine tiefe Kopie keine Referenzen mit ihrem Quellobjekt teilt, wirken sich Änderungen an der tiefen Kopie nicht auf das Quellobjekt aus.

```js
// Change the value of the 'list' property in ingredientsListDeepCopy.
ingredientsListDeepCopy[1].list = ["rice flour", "water"];
// The 'list' property does not change in ingredients_list.
console.log(ingredientsList[1].list);
// Array(3) [ "eggs", "flour", "water" ]
```

Allerdings, während das Objekt im obigen Code einfach genug ist, um [serialisierbar](/de/docs/Glossary/serialization) zu sein, sind viele JavaScript-Objekte überhaupt nicht serialisierbar — zum Beispiel [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) (mit Closures), [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), Objekte, die HTML-Elemente in der [HTML DOM API](/de/docs/Web/API/HTML_DOM_API) darstellen, rekursive Daten und viele andere Fälle. Der Aufruf von `JSON.stringify()`, um die Objekte in diesen Fällen zu serialisieren, wird fehlschlagen. Es gibt also keine Möglichkeit, tiefe Kopien solcher Objekte zu erstellen.

Die Web-API [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) erstellt ebenfalls tiefe Kopien und hat den Vorteil, dass [übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) in der Quelle in die neue Kopie _übertragen_ werden können, anstatt nur geklont zu werden. Sie verarbeitet auch mehr Datentypen, wie zum Beispiel `Error`. Beachten Sie aber, dass `structuredClone()` kein Feature der JavaScript-Sprache selbst ist, sondern ein Feature von Browsern und anderen JavaScript-Hosts, die Web-APIs implementieren. Und der Aufruf von `structuredClone()`, um ein nicht serialisierbares Objekt zu klonen, wird auf die gleiche Weise fehlschlagen wie der Aufruf von `JSON.stringify()`, um es zu serialisieren.

## Siehe auch

- Verwandte Glossarbegriffe:
  - [Shallow copy](/de/docs/Glossary/Shallow_copy)
- [`Window.structuredClone()`](/de/docs/Web/API/Window/structuredClone)
- [`WorkerGlobalScope.structuredClone()`](/de/docs/Web/API/WorkerGlobalScope/structuredClone)
