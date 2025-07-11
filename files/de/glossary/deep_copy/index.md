---
title: Tiefkopie
slug: Glossary/Deep_copy
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Eine **Tiefkopie** eines Objekts ist eine Kopie, deren Eigenschaften nicht dieselben Referenzen teilen (auf dieselben zugrunde liegenden Werte verweisen) wie die des Ausgangsobjekts, aus dem die Kopie erstellt wurde. Dadurch können Sie sicher sein, dass weder eine Änderung der Quelle noch der Kopie dazu führt, dass sich das andere Objekt ebenfalls ändert. Dieses Verhalten steht im Gegensatz zum Verhalten einer {{Glossary("shallow_copy", "Flachkopie")}}, bei der Änderungen an verschachtelten Eigenschaften in der Quelle oder der Kopie dazu führen können, dass sich das andere Objekt ebenfalls ändert.

Zwei Objekte `o1` und `o2` sind _strukturell äquivalent_, wenn ihr beobachtbares Verhalten dasselbe ist. Dieses Verhalten umfasst:

1. Die Eigenschaften von `o1` und `o2` haben dieselben Namen in derselben Reihenfolge.
2. Die Werte ihrer Eigenschaften sind strukturell äquivalent.
3. Ihre Prototypenketten sind strukturell äquivalent (obwohl es sich bei der Betrachtung der strukturellen Äquivalenz normalerweise um einfache Objekte handelt, die beide von `Object.prototype` erben).

Strukturell äquivalente Objekte können entweder dasselbe Objekt sein (`o1 === o2`) oder _Kopien_ (`o1 !== o2`). Da äquivalente primitive Werte immer als gleich verglichen werden, können Sie keine Kopien davon erstellen.

Wir können Tiefkopien nun formeller definieren als:

1. Sie sind nicht dasselbe Objekt (`o1 !== o2`).
2. Die Eigenschaften von `o1` und `o2` haben dieselben Namen in derselben Reihenfolge.
3. Die Werte ihrer Eigenschaften sind Tiefkopien voneinander.
4. Ihre Prototypenketten sind strukturell äquivalent.

Tiefkopien können entweder ihre Prototypenketten kopiert haben oder nicht (häufig sind sie es nicht). Aber zwei Objekte mit strukturell nicht äquivalenten Prototypenketten (zum Beispiel eines ist ein Array und das andere ein einfaches Objekt) sind niemals Kopien voneinander.

Die Kopie eines Objekts, dessen Eigenschaften alle primitive Werte haben, entspricht sowohl der Definition einer Tiefkopie als auch einer {{Glossary("shallow_copy", "Flachkopie")}}. Es ist jedoch wenig sinnvoll, in einem solchen Fall von der Tiefe einer Kopie zu sprechen, da das Objekt keine verschachtelten Eigenschaften hat und wir in der Regel über Tiefkopieren im Kontext der Veränderung verschachtelter Eigenschaften sprechen.

In JavaScript erzeugen Standardmethoden zum Kopieren von Objekten ([Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`Array.prototype.concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/concat), [`Array.prototype.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), [`Array.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from) und [`Object.assign()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)) keine Tiefkopien (stattdessen erstellen sie Flachkopien).

Eine Möglichkeit, eine Tiefkopie eines JavaScript-Objekts zu erstellen, wenn es {{Glossary("serialization", "serialisiert")}} werden kann, ist die Verwendung von {{jsxref("JSON.stringify()")}}, um das Objekt in einen JSON-String zu konvertieren, und dann {{jsxref("JSON.parse()")}}, um den String zurück in ein (vollständig neues) JavaScript-Objekt zu konvertieren:

```js
const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];
const ingredientsListDeepCopy = JSON.parse(JSON.stringify(ingredientsList));
```

Da eine Tiefkopie keine Referenzen zu ihrem Quellobjekt teilt, wirken sich Änderungen an der Tiefkopie nicht auf das Quellobjekt aus.

```js
// Change the value of the 'list' property in ingredientsListDeepCopy.
ingredientsListDeepCopy[1].list = ["rice flour", "water"];
// The 'list' property does not change in ingredients_list.
console.log(ingredientsList[1].list);
// Array(3) [ "eggs", "flour", "water" ]
```

Das im obigen Code gezeigte Objekt ist jedoch einfach genug, um {{Glossary("serialization", "serialisierbar")}} zu sein. Viele JavaScript-Objekte sind jedoch nicht serialisierbar — zum Beispiel [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) (mit Closures), [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), Objekte, die HTML-Elemente in der [HTML DOM API](/de/docs/Web/API/HTML_DOM_API) darstellen, rekursive Daten und viele andere Fälle. Der Aufruf von `JSON.stringify()`, um die Objekte in diesen Fällen zu serialisieren, wird fehlschlagen. Es gibt daher keine Möglichkeit, Tiefkopien solcher Objekte zu erstellen.

Die Web-API [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) erstellt ebenfalls Tiefkopien und bietet den Vorteil, dass [übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) in der Quelle an die neue Kopie _übertragen_ werden können, anstatt nur kopiert zu werden. Sie unterstützt auch mehr Datentypen, wie z.B. `Error`. Beachten Sie jedoch, dass `structuredClone()` keine Funktion der JavaScript-Sprache selbst ist — es ist eine Funktion von Browsern und anderen JavaScript-Hosts, die Web-APIs implementieren. Und der Aufruf von `structuredClone()`, um ein nicht serialisierbares Objekt zu klonen, wird auf die gleiche Weise fehlschlagen wie der Aufruf von `JSON.stringify()` zur Serialisierung.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Shallow_copy", "Flache Kopie")}}
- [`Window.structuredClone()`](/de/docs/Web/API/Window/structuredClone)
- [`WorkerGlobalScope.structuredClone()`](/de/docs/Web/API/WorkerGlobalScope/structuredClone)
