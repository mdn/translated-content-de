---
title: NodeList
slug: Web/API/NodeList
l10n:
  sourceCommit: cfa628aedb53a83b315943ef19fa6c73298fb7d5
---

{{APIRef("DOM")}}

**`NodeList`** Objekte sind Sammlungen von [Knoten](/de/docs/Web/API/Node), die normalerweise von Eigenschaften wie [`Node.childNodes`](/de/docs/Web/API/Node/childNodes) und Methoden wie [`document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) zurückgegeben werden.

Dieses Interface war ein [Versuch, eine unveränderbare Liste zu erstellen](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156) und wird nur weiterhin unterstützt, um existierenden Code nicht zu brechen, der es bereits verwendet. Moderne APIs repräsentieren Listenstrukturen mithilfe von Typen, die auf JavaScript [Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) basieren, wodurch viele Array-Methoden verfügbar werden und gleichzeitig zusätzliche Semantiken für deren Nutzung auferlegt werden (wie beispielsweise, dass ihre Elemente schreibgeschützt sind).

Diese historischen Gründe bedeuten nicht, dass Sie als Entwickler `NodeList` vermeiden sollten. Sie erstellen `NodeList` Objekte nicht selbst, sondern erhalten sie von APIs wie [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll), und diese APIs sind nicht veraltet. Seien Sie jedoch vorsichtig mit den semantischen Unterschieden zu einem echten Array.

Obwohl `NodeList` kein `Array` ist, ist es möglich, sie mit `forEach()` zu durchlaufen. Sie kann auch mithilfe von {{jsxref("Array.from()")}} in ein echtes `Array` umgewandelt werden.

## Live vs. Statische NodeLists

Obwohl sie beide als `NodeList` Objekte betrachtet werden, gibt es 2 Arten von NodeLists: _live_ und _statisch_.

### Live NodeLists

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

Es ist gut, sich diesen Unterschied bewusst zu sein, wenn Sie entscheiden, wie Sie über die Elemente in der `NodeList` iterieren und ob Sie die `length` der Liste zwischenspeichern sollten.

## Instanz-Eigenschaften

- [`NodeList.length`](/de/docs/Web/API/NodeList/length) {{ReadOnlyInline}}
  - : Die Anzahl der Knoten in der `NodeList`.

## Instanz-Methoden

- [`NodeList.item()`](/de/docs/Web/API/NodeList/item)

  - : Gibt ein Element aus der Liste anhand seines Indexes zurück oder `null`, wenn der Index außerhalb des Bereichs liegt.

    Eine Alternative zum Zugriff auf `nodeList[i]` (das stattdessen `undefined` zurückgibt, wenn `i` außerhalb des Bereichs liegt). Dies ist hauptsächlich nützlich für nicht-JavaScript DOM-Implementierungen.

- [`NodeList.entries()`](/de/docs/Web/API/NodeList/entries)
  - : Gibt ein {{jsxref("Iteration_protocols","iterator")}} zurück, das es ermöglicht, durch alle Schlüssel/Wert-Paare in der Sammlung zu gehen. (In diesem Fall starten die Schlüssel mit `0` und die Werte sind Knoten.)
- [`NodeList.forEach()`](/de/docs/Web/API/NodeList/forEach)
  - : Führt eine bereitgestellte Funktion einmal pro `NodeList`-Element aus und übergibt das Element als Argument an die Funktion.
- [`NodeList.keys()`](/de/docs/Web/API/NodeList/keys)
  - : Gibt ein {{jsxref("Iteration_protocols", "iterator")}} zurück, das es ermöglicht, durch alle Schlüssel der in der Sammlung enthaltenen Schlüssel/Wert-Paare zu gehen. (In diesem Fall sind die Schlüssel ganze Zahlen, beginnend mit `0`.)
- [`NodeList.values()`](/de/docs/Web/API/NodeList/values)
  - : Gibt ein {{jsxref("Iteration_protocols", "iterator")}} zurück, das es ermöglicht, durch alle Werte (Knoten) der in der Sammlung enthaltenen Schlüssel/Wert-Paare zu gehen.

## Beispiel

Es ist möglich, über die Elemente in einer `NodeList` mit einer [for](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife zu iterieren:

```js
for (let i = 0; i < myNodeList.length; i++) {
  let item = myNodeList[i];
}
```

**Verwenden Sie nicht [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in), um die Elemente in `NodeList`s aufzulisten**, da sie _auch_ ihre `length`- und `item`-Eigenschaften auflisten und Fehler verursachen, wenn Ihr Skript annimmt, dass es nur mit [`Element`]-Objekten (/de/docs/Web/API/Element) arbeiten muss. Außerdem garantiert `for...in` nicht, die Eigenschaften in einer bestimmten Reihenfolge zu durchlaufen.

[`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleifen durchlaufen `NodeList`-Objekte korrekt:

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
