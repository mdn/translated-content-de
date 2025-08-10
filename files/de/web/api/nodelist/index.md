---
title: NodeList
slug: Web/API/NodeList
l10n:
  sourceCommit: 4df1c84eb714ea19f7e5ebaa740d0f00c73d8cb4
---

{{APIRef("DOM")}}

**`NodeList`** Objekte sind Sammlungen von [Nodes](/de/docs/Web/API/Node), die üblicherweise von Eigenschaften wie [`Node.childNodes`](/de/docs/Web/API/Node/childNodes) und Methoden wie [`document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) zurückgegeben werden.

Diese Schnittstelle war ein [Versuch, eine unveränderbare Liste zu erstellen](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156) und wird nur weiterhin unterstützt, um vorhandenen Code, der sie nutzt, nicht zu beschädigen. Moderne APIs repräsentieren Listenkonstrukte mit Typen, die auf JavaScript-[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) basieren, wodurch viele Array-Methoden verfügbar werden und gleichzeitig zusätzliche Semantiken für ihre Nutzung auferlegt werden (z. B. werden ihre Elemente schreibgeschützt).

Diese historischen Gründe bedeuten nicht, dass Sie als Entwickler `NodeList` vermeiden sollten. Sie erstellen `NodeList` Objekte nicht selbst, sondern erhalten sie von APIs wie [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll), und diese APIs sind nicht veraltet. Achten Sie jedoch auf die semantischen Unterschiede zu einem echten Array.

Obwohl `NodeList` kein `Array` ist, ist es möglich, mit `forEach()` darüber zu iterieren. Es kann auch mit {{jsxref("Array.from()")}} in ein echtes `Array` umgewandelt werden.

## Live vs. Statische NodeLists

Obwohl sie beide als `NodeList` Objekte betrachtet werden, gibt es zwei Arten von NodeLists: _live_ und _statisch_.

In den meisten Fällen ist die `NodeList` _live_, was bedeutet, dass Änderungen im DOM automatisch die Sammlung aktualisieren.

Zum Beispiel ist [`Node.childNodes`](/de/docs/Web/API/Node/childNodes) live:

```js
const parent = document.getElementById("parent");
let childNodes = parent.childNodes;
console.log(childNodes.length); // let's assume "2"
parent.appendChild(document.createElement("div"));
console.log(childNodes.length); // outputs "3"
```

In anderen Fällen ist die `NodeList` _statisch_, sodass Änderungen im DOM den Inhalt der Sammlung nicht beeinflussen. Die allgegenwärtige Methode [`document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) ist die einzige API, die eine _statische_ `NodeList` zurückgibt.

Es ist gut, diesen Unterschied im Kopf zu behalten, wenn Sie entscheiden, wie Sie über die Elemente in der `NodeList` iterieren und ob Sie die `length` der Liste zwischenspeichern sollten.

## Instanz-Eigenschaften

- [`NodeList.length`](/de/docs/Web/API/NodeList/length) {{ReadOnlyInline}}
  - : Die Anzahl der Knoten in der `NodeList`.

## Instanz-Methoden

- [`NodeList.item()`](/de/docs/Web/API/NodeList/item)
  - : Gibt ein Element in der Liste nach seinem Index zurück oder `null`, wenn der Index außerhalb des Bereichs liegt.

    Eine Alternative zum Zugriff auf `nodeList[i]` (dieses gibt stattdessen `undefined` zurück, wenn `i` außerhalb des Bereichs liegt). Dies ist hauptsächlich für nicht-JavaScript DOM-Implementierungen nützlich.

- [`NodeList.entries()`](/de/docs/Web/API/NodeList/entries)
  - : Gibt einen {{jsxref("Iteration_protocols","Iterator")}} zurück, der es ermöglicht, dass der Code durch alle Schlüssel/Wert-Paare in der Sammlung iterieren kann. (In diesem Fall sind die Schlüssel Ganzzahlen ab `0` und die Werte sind Nodes.)
- [`NodeList.forEach()`](/de/docs/Web/API/NodeList/forEach)
  - : Führt eine bereitgestellte Funktion einmal pro `NodeList`-Element aus und übergibt das Element als Argument an die Funktion.
- [`NodeList.keys()`](/de/docs/Web/API/NodeList/keys)
  - : Gibt einen {{jsxref("Iteration_protocols", "Iterator")}} zurück, der es ermöglicht, dass der Code durch alle Schlüssel der Schlüssel/Wert-Paare in der Sammlung iterieren kann. (In diesem Fall sind die Schlüssel Ganzzahlen ab `0`.)
- [`NodeList.values()`](/de/docs/Web/API/NodeList/values)
  - : Gibt einen {{jsxref("Iteration_protocols", "Iterator")}} zurück, der es ermöglicht, dass der Code durch alle Werte (Nodes) der Schlüssel/Wert-Paare in der Sammlung iterieren kann.

## Beispiel

Es ist möglich, über die Elemente in einer `NodeList` mit einer [for](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife zu iterieren:

```js
for (let i = 0; i < myNodeList.length; i++) {
  let item = myNodeList[i];
}
```

**Verwenden Sie nicht [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in), um die Elemente in `NodeList`s aufzulisten**, da sie _auch_ ihre `length`- und `item`-Eigenschaften auflisten und Fehler verursachen können, wenn Ihr Skript davon ausgeht, dass es nur mit [`element`](/de/docs/Web/API/Element) Objekten umgehen muss. Außerdem ist `for...in` nicht garantiert, die Eigenschaften in einer bestimmten Reihenfolge zu besuchen.

[`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) schleifen über `NodeList` Objekte korrekt:

```js
const list = document.querySelectorAll("input[type=checkbox]");
for (const checkbox of list) {
  checkbox.checked = true;
}
```

Browser unterstützen auch die Iterator-Methode ([`forEach()`](/de/docs/Web/API/NodeList/forEach)) sowie [`entries()`](/de/docs/Web/API/NodeList/entries), [`values()`](/de/docs/Web/API/NodeList/values) und [`keys()`](/de/docs/Web/API/NodeList/keys).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
