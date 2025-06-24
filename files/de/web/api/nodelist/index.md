---
title: NodeList
slug: Web/API/NodeList
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("DOM")}}

**`NodeList`**-Objekte sind Sammlungen von [Knoten](/de/docs/Web/API/Node), die üblicherweise durch Eigenschaften wie [`Node.childNodes`](/de/docs/Web/API/Node/childNodes) und Methoden wie [`document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) zurückgegeben werden.

Diese Schnittstelle war ein [Versuch, eine nicht modifizierbare Liste zu erstellen](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156) und wird weiterhin unterstützt, um den Code nicht zu brechen, der sie bereits verwendet. Moderne APIs repräsentieren Listenstrukturen unter Verwendung von Typen basierend auf JavaScript-[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array), wodurch viele Array-Methoden verfügbar werden und gleichzeitig zusätzliche Semantiken für ihre Nutzung auferlegt werden (wie das Festlegen ihrer Elemente als schreibgeschützt).

Diese historischen Gründe bedeuten nicht, dass Sie als Entwickler `NodeList` vermeiden sollten. Sie erstellen `NodeList`-Objekte nicht selbst, sondern erhalten sie von APIs wie [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll), und diese APIs sind nicht veraltet. Seien Sie jedoch vorsichtig mit den semantischen Unterschieden zu einem echten Array.

Obwohl `NodeList` kein `Array` ist, ist es möglich, mit `forEach()` darüber zu iterieren. Es kann auch in ein echtes `Array` umgewandelt werden, indem {{jsxref("Array.from()")}} verwendet wird.

## Live- vs. statische NodeLists

Obwohl sie beide als `NodeList`-Objekte betrachtet werden, gibt es zwei Varianten von NodeList: _live_ und _statisch_.

### Live-NodeLists

In einigen Fällen ist die `NodeList` _live_, was bedeutet, dass Änderungen im DOM die Sammlung automatisch aktualisieren.

Zum Beispiel ist [`Node.childNodes`](/de/docs/Web/API/Node/childNodes) live:

```js
const parent = document.getElementById("parent");
let childNodes = parent.childNodes;
console.log(childNodes.length); // let's assume "2"
parent.appendChild(document.createElement("div"));
console.log(childNodes.length); // outputs "3"
```

### Statische NodeLists

In anderen Fällen ist die `NodeList` _statisch_, wobei Änderungen im DOM den Inhalt der Sammlung nicht beeinflussen. Die allgegenwärtige Methode [`document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) gibt eine _statische_ `NodeList` zurück.

Es ist gut, diese Unterscheidung im Hinterkopf zu behalten, wenn Sie entscheiden, wie Sie über die Elemente in der `NodeList` iterieren und ob Sie die `length` der Liste zwischenspeichern sollten.

## Instanz-Eigenschaften

- [`NodeList.length`](/de/docs/Web/API/NodeList/length) {{ReadOnlyInline}}
  - : Die Anzahl der Knoten in der `NodeList`.

## Instanz-Methoden

- [`NodeList.item()`](/de/docs/Web/API/NodeList/item)

  - : Gibt ein Element in der Liste durch seinen Index zurück oder `null`, wenn der Index außerhalb der Grenzen liegt.

    Eine Alternative zum Zugriff auf `nodeList[i]` (dieses gibt stattdessen `undefined` zurück, wenn `i` außerhalb der Grenzen liegt). Dies ist hauptsächlich für nicht-JavaScript DOM-Implementierungen nützlich.

- [`NodeList.entries()`](/de/docs/Web/API/NodeList/entries)
  - : Gibt einen {{jsxref("Iteration_protocols","Iterierer")}} zurück, der es ermöglicht, durch alle Schlüssel/Wert-Paare in der Sammlung zu gehen. (In diesem Fall sind die Schlüssel ganze Zahlen, die bei `0` beginnen, und die Werte sind Knoten.)
- [`NodeList.forEach()`](/de/docs/Web/API/NodeList/forEach)
  - : Führt eine bereitgestellte Funktion einmal pro `NodeList`-Element aus und übergibt das Element als Argument an die Funktion.
- [`NodeList.keys()`](/de/docs/Web/API/NodeList/keys)
  - : Gibt einen {{jsxref("Iteration_protocols", "Iterierer")}} zurück, der es ermöglicht, durch alle Schlüssel der Schlüssel/Wert-Paare in der Sammlung zu gehen. (In diesem Fall sind die Schlüssel ganze Zahlen, die bei `0` beginnen.)
- [`NodeList.values()`](/de/docs/Web/API/NodeList/values)
  - : Gibt einen {{jsxref("Iteration_protocols", "Iterierer")}} zurück, der es ermöglicht, durch alle Werte (Knoten) der Schlüssel/Wert-Paare in der Sammlung zu gehen.

## Beispiel

Es ist möglich, über die Elemente in einer `NodeList` mit einer [for](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife zu iterieren:

```js
for (let i = 0; i < myNodeList.length; i++) {
  let item = myNodeList[i];
}
```

**Verwenden Sie nicht [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in), um die Elemente in `NodeList`s zu enumerieren**, da diese _auch_ ihre `length`- und `item`-Eigenschaften aufzählen und Fehler verursachen können, wenn Ihr Skript annimmt, dass es nur mit [`element`](/de/docs/Web/API/Element)-Objekten umgehen muss. Außerdem ist bei `for...in` nicht garantiert, dass die Eigenschaften in einer bestimmten Reihenfolge besucht werden.

[`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) iteriert korrekt über `NodeList`-Objekte:

```js
const list = document.querySelectorAll("input[type=checkbox]");
for (const checkbox of list) {
  checkbox.checked = true;
}
```

Browser unterstützen auch die Iteratormethode ([`forEach()`](/de/docs/Web/API/NodeList/forEach)) sowie [`entries()`](/de/docs/Web/API/NodeList/entries), [`values()`](/de/docs/Web/API/NodeList/values) und [`keys()`](/de/docs/Web/API/NodeList/keys).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
