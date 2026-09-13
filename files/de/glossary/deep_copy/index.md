---
title: Tiefenkopie
slug: Glossary/Deep_copy
l10n:
  sourceCommit: b7c5617fc1d8eb00c6884a708983da21ad61b228
---

Eine **Tiefenkopie** eines Objekts ist eine Kopie, deren Eigenschaften nicht dieselben Referenzen teilen (auf dieselben zugrunde liegenden Werte verweisen) wie die des Ursprungsobjekts, von dem die Kopie erstellt wurde. Daher können Sie sicher sein, dass bei Änderungen entweder am Quellobjekt oder an der Kopie nicht das andere Objekt ebenfalls geändert wird. Dieses Verhalten steht im Gegensatz zu dem einer {{Glossary("shallow_copy", "Flachkopie")}}, bei der Änderungen an geschachtelten Eigenschaften im Quellobjekt oder in der Kopie dazu führen können, dass sich das andere Objekt ebenfalls ändert.

Das Tiefenkopieren wird normalerweise rekursiv wie folgt implementiert:

1. Ein neues Objekt desselben Typs wird erstellt. Die Prototypenkette wird möglicherweise kopiert (meistens jedoch nicht), aber beispielsweise sollte das Tiefenkopieren eines {{jsxref("Array")}} in einem {{jsxref("Array")}} und nichts anderem resultieren.
2. Für jede eigene Eigenschaft des ursprünglichen Objekts wird eine Eigenschaft mit demselben Schlüssel und denselben Deskriptoren im neuen Objekt definiert.
3. Der Wert jeder neuen Eigenschaft wird auf eine Tiefenkopie des Werts der ursprünglichen Eigenschaft gesetzt. Wenn der Wert einer Eigenschaft ein primitiver Wert ist, wird keine Kopie angefertigt.
4. Alle Daten, die nicht als Eigenschaften verfügbar sind (wie {{jsxref("Map")}}), werden tief kopiert, vorausgesetzt, die Implementierung erkennt den Objekttyp und weiß, wie die Daten abgerufen und gesetzt werden können.
5. Normalerweise gibt es Unterstützung für zirkuläre Referenzen.

Da JavaScript keinen eingebauten Mechanismus hat, der eine echte Tiefenkopie durchführt, weichen Implementierungen in Bibliotheken häufig in technischen Details ab, zum Beispiel:

- Ob nicht-auflistbare oder Symbol-Eigenschaften kopiert werden
- Ob Zugriffseigenschaften als solche kopiert werden
- Ob Prototyp-Eigenschaften kopiert werden
- Welche Datenstrukturen das Kopieren von Daten außerhalb der Eigenschaften unterstützen

Eine Kopie eines Objekts, dessen Eigenschaften alle primitive Werte haben, entspricht sowohl der Definition einer Tiefenkopie als auch einer {{Glossary("shallow_copy", "Flachkopie")}}. Es ist jedoch wenig sinnvoll, in diesem Fall über die Tiefe einer solchen Kopie zu sprechen, da sie keine geschachtelten Eigenschaften hat und wir normalerweise im Kontext der Veränderung geschachtelter Eigenschaften über Tiefenkopien sprechen.

In JavaScript, die standardmäßigen eingebauten Objektkopieroperationen ([Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`Array.prototype.concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/concat), [`Array.prototype.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), [`Array.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from) und [`Object.assign()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)) erstellen keine Tiefenkopien (sie erstellen stattdessen Flachkopien).

Eine Möglichkeit, eine Tiefenkopie eines JavaScript-Objekts zu erstellen, sofern es {{Glossary("serialization", "serialisierbar")}} ist, besteht darin, {{jsxref("JSON.stringify()")}} zu verwenden, um das Objekt in einen JSON-String zu konvertieren, und anschließend {{jsxref("JSON.parse()")}}, um den String zurück in ein (vollständig neues) JavaScript-Objekt zu konvertieren:

```js
const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];
const ingredientsListDeepCopy = JSON.parse(JSON.stringify(ingredientsList));
```

Da eine Tiefenkopie keine Referenzen mit ihrem Ursprungsobjekt teilt, wirken sich Änderungen an der Tiefenkopie nicht auf das Ursprungsobjekt aus.

```js
// Change the value of the 'list' property in ingredientsListDeepCopy.
ingredientsListDeepCopy[1].list = ["rice flour", "water"];
// The 'list' property does not change in ingredients_list.
console.log(ingredientsList[1].list);
// Array(3) [ "eggs", "flour", "water" ]
```

Während das Objekt im obigen Code einfach genug ist, um {{Glossary("serialization", "serialisierbar")}} zu sein, sind viele JavaScript-Objekte überhaupt nicht serialisierbar — zum Beispiel [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) (mit Closures), [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), Objekte, die HTML-Elemente in der [HTML DOM API](/de/docs/Web/API/HTML_DOM_API) repräsentieren, rekursive Daten und viele andere Fälle. Das Aufrufen von `JSON.stringify()`, um die Objekte zu serialisieren, wird in solchen Fällen fehlschlagen. Das Tiefenkopieren dieser Objekte erfordert andere APIs oder Bibliotheken.

Die Web-API [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) erstellt ebenfalls Tiefenkopien und bietet den Vorteil, dass [übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) in der Quelle _übertragen_ und nicht nur kopiert werden können. Sie kann auch mehr Datentypen verarbeiten, wie `Error`. Beachten Sie jedoch, dass `structuredClone()` kein Merkmal der JavaScript-Sprache selbst ist — vielmehr handelt es sich um ein Merkmal von Browsern und anderen JavaScript-Hosts, die Web-APIs implementieren. Und das Aufrufen von `structuredClone()` zum Klonen eines nicht serialisierbaren Objekts wird auf die gleiche Weise fehlschlagen wie das Aufrufen von `JSON.stringify()` zum Serialisieren.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Deep_equality", "Tiefe Gleichheit")}}
  - {{Glossary("Shallow_copy", "Flachkopie")}}
- [`Window.structuredClone()`](/de/docs/Web/API/Window/structuredClone)
- [`WorkerGlobalScope.structuredClone()`](/de/docs/Web/API/WorkerGlobalScope/structuredClone)
