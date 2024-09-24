---
title: NodeList
slug: Web/API/NodeList
l10n:
  sourceCommit: cfa628aedb53a83b315943ef19fa6c73298fb7d5
---

{{APIRef("DOM")}}

**`NodeList`**-Objekte sind Sammlungen von [Nodes](/de/docs/Web/API/Node), die normalerweise von Eigenschaften wie {{domxref("Node.childNodes")}} und Methoden wie {{domxref("document.querySelectorAll()")}} zurückgegeben werden.

Diese Schnittstelle war ein [Versuch, eine unveränderbare Liste zu erstellen](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156) und wird nur weiterhin unterstützt, um bestehenden Code nicht zu unterbrechen, der sie bereits verwendet. Moderne APIs repräsentieren Listenstrukturen mithilfe von Typen, die auf JavaScript-[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) basieren, wodurch viele Array-Methoden verfügbar werden, während gleichzeitig zusätzliche Semantiken für deren Nutzung auferlegt werden (wie z.B. das Festlegen, dass deren Elemente schreibgeschützt sind).

Diese historischen Gründe bedeuten nicht, dass Sie als Entwickler `NodeList` vermeiden sollten. Sie erstellen `NodeList`-Objekte nicht selbst, sondern erhalten sie von APIs wie {{domxref("Document.querySelectorAll()")}}, und diese APIs sind nicht veraltet. Seien Sie jedoch vorsichtig hinsichtlich der semantischen Unterschiede zu einem echten Array.

Obwohl `NodeList` kein `Array` ist, ist es möglich, darüber mit `forEach()` zu iterieren. Es kann auch mit {{jsxref("Array.from()")}} in ein echtes `Array` umgewandelt werden.

## Live vs. Statische NodeLists

Obwohl beide als `NodeList`-Objekte betrachtet werden, gibt es zwei Arten von NodeLists: _live_ und _statisch_.

### Live NodeLists

In einigen Fällen ist die `NodeList` _live_, was bedeutet, dass Änderungen im DOM die Sammlung automatisch aktualisieren.

Zum Beispiel ist {{domxref("Node.childNodes")}} live:

```js
const parent = document.getElementById("parent");
let childNodes = parent.childNodes;
console.log(childNodes.length); // angenommen "2"
parent.appendChild(document.createElement("div"));
console.log(childNodes.length); // gibt "3" aus
```

### Statische NodeLists

In anderen Fällen ist die `NodeList` _statisch_, wobei Änderungen im DOM den Inhalt der Sammlung nicht beeinflussen. Die allgegenwärtige Methode {{domxref("document.querySelectorAll()")}} gibt eine _statische_ `NodeList` zurück.

Es ist gut, sich diesen Unterschied bewusst zu machen, wenn man entscheidet, wie man über die Elemente in der `NodeList` iteriert und ob man die `length` der Liste zwischenspeichern sollte.

## Instanz-Eigenschaften

- {{domxref("NodeList.length")}} {{ReadOnlyInline}}
  - : Die Anzahl der Nodes in der `NodeList`.

## Instanz-Methoden

- {{domxref("NodeList.item()")}}

  - : Gibt ein Element in der Liste durch seinen Index zurück oder `null`, wenn der Index außerhalb der Grenzen liegt.

    Eine Alternative zum Zugriff auf `nodeList[i]` (was stattdessen `undefined` zurückgibt, wenn `i` außerhalb der Grenzen liegt). Dies ist hauptsächlich nützlich für nicht-JavaScript-DOM-Implementierungen.

- {{domxref("NodeList.entries()")}}
  - : Gibt einen {{jsxref("Iteration_protocols", "Iterator")}} zurück, der es ermöglicht, alle Schlüssel/Wert-Paare in der Sammlung durchzugehen. (In diesem Fall sind die Schlüssel Ganzzahlen, die bei `0` beginnen, und die Werte sind Nodes.)
- {{domxref("NodeList.forEach()")}}
  - : Führt eine bereitgestellte Funktion einmal pro `NodeList`-Element aus und übergibt das Element als Argument an die Funktion.
- {{domxref("NodeList.keys()")}}
  - : Gibt einen {{jsxref("Iteration_protocols", "Iterator")}} zurück, der es ermöglicht, alle Schlüssel der Schlüssel/Wert-Paare in der Sammlung durchzugehen. (In diesem Fall sind die Schlüssel Ganzzahlen, die bei `0` starten.)
- {{domxref("NodeList.values()")}}
  - : Gibt einen {{jsxref("Iteration_protocols", "Iterator")}} zurück, der es ermöglicht, alle Werte (Nodes) der Schlüssel/Wert-Paare in der Sammlung durchzugehen.

## Beispiel

Es ist möglich, über die Elemente in einer `NodeList` mithilfe einer [for](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife zu iterieren:

```js
for (let i = 0; i < myNodeList.length; i++) {
  let item = myNodeList[i];
}
```

**Verwenden Sie nicht [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in), um die Elemente in `NodeList`s aufzuzählen**, da sie auch deren `length`- und `item`-Eigenschaften aufzählen und Fehler verursachen, wenn Ihr Skript davon ausgeht, dass es nur mit {{domxref("element")}}-Objekten zu tun hat. Außerdem ist bei `for...in` nicht garantiert, dass die Eigenschaften in einer bestimmten Reihenfolge besucht werden.

[`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleifen durchlaufen `NodeList`-Objekte korrekt:

```js
const list = document.querySelectorAll("input[type=checkbox]");
for (const checkbox of list) {
  checkbox.checked = true;
}
```

Browser unterstützen auch die Iterator-Methode ({{domxref("NodeList.forEach()", "forEach()")}}) sowie {{domxref("NodeList.entries()", "entries()")}}, {{domxref("NodeList.values()", "values()")}} und {{domxref("NodeList.keys()", "keys()")}}.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
