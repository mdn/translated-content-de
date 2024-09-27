---
title: NodeList
slug: Web/API/NodeList
l10n:
  sourceCommit: cfa628aedb53a83b315943ef19fa6c73298fb7d5
---

{{APIRef("DOM")}}

**`NodeList`**-Objekte sind Sammlungen von [Nodes](/de/docs/Web/API/Node), die in der Regel von Eigenschaften wie [`Node.childNodes`](/de/docs/Web/API/Node/childNodes) und Methoden wie [`document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) zurückgegeben werden.

Dieses Interface war ein [Versuch, eine nicht änderbare Liste zu erstellen](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156) und wird nur weiterhin unterstützt, um bestehenden Code, der es verwendet, nicht zu brechen. Moderne APIs repräsentieren Listenstrukturen mit Typen, die auf JavaScript-[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) basieren, wodurch viele Array-Methoden verfügbar werden und gleichzeitig zusätzliche Semantiken bei ihrer Nutzung auferlegt werden (wie z.B. dass ihre Elemente schreibgeschützt sind).

Diese historischen Gründe bedeuten nicht, dass Sie als Entwickler `NodeList` vermeiden sollten. Sie erstellen `NodeList`-Objekte nicht selbst, sondern erhalten sie von APIs wie [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll), und diese APIs sind nicht veraltet. Seien Sie jedoch vorsichtig mit den semantischen Unterschieden zu einem echten Array.

Obwohl `NodeList` kein `Array` ist, ist es möglich, mit `forEach()` darüber zu iterieren. Es kann auch mit {{jsxref("Array.from()")}} in ein echtes `Array` konvertiert werden.

## Live- vs. statische NodeLists

Obwohl beide als `NodeList`-Objekte betrachtet werden, gibt es 2 Varianten von NodeList: _live_ und _statisch_.

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

Es ist gut, diesen Unterschied im Kopf zu behalten, wenn Sie entscheiden, wie Sie über die Elemente in der `NodeList` iterieren und ob Sie die `length` der Liste zwischenspeichern sollten.

## Instanz-Eigenschaften

- [`NodeList.length`](/de/docs/Web/API/NodeList/length) {{ReadOnlyInline}}
  - : Die Anzahl der Nodes in der `NodeList`.

## Instanz-Methoden

- [`NodeList.item()`](/de/docs/Web/API/NodeList/item)

  - : Gibt ein Element in der Liste nach seinem Index zurück oder `null`, wenn der Index außerhalb des Bereichs liegt.

    Eine Alternative zum Zugriff mit `nodeList[i]` (was hingegen `undefined` zurückgibt, wenn `i` außerhalb des Bereichs liegt). Dies ist hauptsächlich nützlich für Nicht-JavaScript-DOM-Implementierungen.

- [`NodeList.entries()`](/de/docs/Web/API/NodeList/entries)
  - : Gibt einen {{jsxref("Iteration_protocols","iterator")}} zurück, der es ermöglicht, durch alle in der Sammlung enthaltenen Schlüssel/Wert-Paare zu gehen. (In diesem Fall sind die Schlüssel Ganzzahlen, die bei `0` beginnen und die Werte sind Nodes.)
- [`NodeList.forEach()`](/de/docs/Web/API/NodeList/forEach)
  - : Führt eine bereitgestellte Funktion einmal pro `NodeList`-Element aus und übergibt das Element als Argument an die Funktion.
- [`NodeList.keys()`](/de/docs/Web/API/NodeList/keys)
  - : Gibt einen {{jsxref("Iteration_protocols", "iterator")}} zurück, der es ermöglicht, durch alle Schlüssel der in der Sammlung enthaltenen Schlüssel/Wert-Paare zu gehen. (In diesem Fall sind die Schlüssel Ganzzahlen, die bei `0` beginnen.)
- [`NodeList.values()`](/de/docs/Web/API/NodeList/values)
  - : Gibt einen {{jsxref("Iteration_protocols", "iterator")}} zurück, der es ermöglicht, durch alle Werte (Nodes) der in der Sammlung enthaltenen Schlüssel/Wert-Paare zu gehen.

## Beispiel

Es ist möglich, mit einer [for](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife über die Elemente einer `NodeList` zu iterieren:

```js
for (let i = 0; i < myNodeList.length; i++) {
  let item = myNodeList[i];
}
```

**Verwenden Sie nicht [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in), um die Elemente in `NodeList`s zu enumerieren**, da sie _auch_ ihre `length`- und `item`-Eigenschaften enumerieren und Fehler verursachen können, wenn Ihr Skript davon ausgeht, dass es nur mit [`element`](/de/docs/Web/API/Element)-Objekten umgehen muss. Auch ist `for...in` nicht garantiert, die Eigenschaften in einer bestimmten Reihenfolge zu besuchen.

`for...of`-Schleifen durchlaufen `NodeList`-Objekte korrekt:

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
