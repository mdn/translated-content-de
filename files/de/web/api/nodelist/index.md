---
title: NodeList
slug: Web/API/NodeList
l10n:
  sourceCommit: ab0c5944b5d4c0077691b09d6a48cbd6a101e404
---

{{APIRef("DOM")}}

**`NodeList`**-Objekte sind Sammlungen von [Nodes](/de/docs/Web/API/Node), die normalerweise durch Eigenschaften wie [`Node.childNodes`](/de/docs/Web/API/Node/childNodes) und Methoden wie [`document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) zurückgegeben werden.

Diese Schnittstelle war ein [Versuch, eine nicht modifizierbare Liste zu erstellen](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156) und wird nur weiterhin unterstützt, um existierenden Code nicht zu brechen, der sie bereits verwendet. Moderne APIs repräsentieren Listenstrukturen mit Typen, die auf JavaScript-[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) basieren, und bieten so viele Array-Methoden an, während sie gleichzeitig zusätzliche Semantiken in ihrer Nutzung auferlegen (wie z.B. das Festlegen, dass ihre Elemente schreibgeschützt sind).

Diese historischen Gründe bedeuten nicht, dass Sie als Entwickler `NodeList` vermeiden sollten. Sie erstellen `NodeList`-Objekte nicht selbst, sondern erhalten sie von APIs wie [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll), und diese APIs sind nicht veraltet. Achten Sie jedoch auf die semantischen Unterschiede im Vergleich zu einem echten Array.

Obwohl `NodeList` kein `Array` ist, ist es möglich, mit `forEach()` darüber zu iterieren. Es kann auch in ein echtes `Array` mit {{jsxref("Array.from()")}} umgewandelt werden.

## Live vs. Statische NodeLists

Obwohl beide als `NodeList`-Objekte betrachtet werden, gibt es zwei Variationen von NodeLists: _live_ und _statisch_.

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

In anderen Fällen ist die `NodeList` _statisch,_ wobei Änderungen im DOM den Inhalt der Sammlung nicht beeinflussen. Die allgegenwärtige Methode [`document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) gibt eine _statische_ `NodeList` zurück.

Es ist gut, diesen Unterschied im Hinterkopf zu behalten, wenn Sie entscheiden, wie Sie über die Elemente in der `NodeList` iterieren und ob Sie die `length` der Liste zwischenspeichern sollten.

## Instanz-Eigenschaften

- [`NodeList.length`](/de/docs/Web/API/NodeList/length) {{ReadOnlyInline}}
  - : Die Anzahl der Nodes in der `NodeList`.

## Instanz-Methoden

- [`NodeList.item()`](/de/docs/Web/API/NodeList/item)

  - : Gibt ein Element in der Liste anhand seines Indexes zurück oder `null`, wenn der Index außerhalb des gültigen Bereichs liegt.

    Eine Alternative zum Zugreifen über `nodeList[i]` (was stattdessen `undefined` zurückgibt, wenn `i` außerhalb des gültigen Bereichs liegt). Dies ist hauptsächlich nützlich für nicht-JavaScript-DOM-Implementierungen.

- [`NodeList.entries()`](/de/docs/Web/API/NodeList/entries)
  - : Gibt einen {{jsxref("Iteration_protocols","Iterator")}} zurück, der es ermöglicht, durch alle Schlüssel/Wert-Paare in der Sammlung zu gehen. (In diesem Fall sind die Schlüssel Ganzzahlen, beginnend bei `0`, und die Werte sind Nodes.)
- [`NodeList.forEach()`](/de/docs/Web/API/NodeList/forEach)
  - : Führt eine bereitgestellte Funktion einmal pro `NodeList`-Element aus und übergibt das Element als Argument an die Funktion.
- [`NodeList.keys()`](/de/docs/Web/API/NodeList/keys)
  - : Gibt einen {{jsxref("Iteration_protocols", "Iterator")}} zurück, der es ermöglicht, durch alle Schlüssel der Schlüssel/Wert-Paare in der Sammlung zu gehen. (In diesem Fall sind die Schlüssel Ganzzahlen, beginnend bei `0`.)
- [`NodeList.values()`](/de/docs/Web/API/NodeList/values)
  - : Gibt einen {{jsxref("Iteration_protocols", "Iterator")}} zurück, der es ermöglicht, durch alle Werte (Nodes) der Schlüssel/Wert-Paare in der Sammlung zu gehen.

## Beispiel

Es ist möglich, über die Elemente in einer `NodeList` mit einer [for](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife zu iterieren:

```js
for (let i = 0; i < myNodeList.length; i++) {
  let item = myNodeList[i];
}
```

Verwenden Sie **nicht [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in), um die Elemente in `NodeList`s aufzulisten**, da sie _auch_ ihre `length`- und `item`-Eigenschaften auflisten und Fehler verursachen können, wenn Ihr Skript annimmt, dass es nur mit [`element`](/de/docs/Web/API/Element)-Objekten umgehen muss. Zudem ist `for...in` nicht garantiert, die Eigenschaften in einer bestimmten Reihenfolge zu besuchen.

[`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) iteriert korrekt über `NodeList`-Objekte:

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
