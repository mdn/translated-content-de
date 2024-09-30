---
title: DOM-Elemente mit Selektoren finden
slug: Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{DefaultAPISidebar("DOM")}}

Die Selectors API stellt Methoden bereit, die es schnell und einfach machen, [`Element`](/de/docs/Web/API/Element)-Knoten aus dem DOM zu holen, indem sie mit einer Reihe von [Selektoren](/de/docs/Web/CSS/CSS_selectors) abgeglichen werden. Dies ist viel schneller als frühere Techniken, bei denen es zum Beispiel notwendig war, eine Schleife im JavaScript-Code zu verwenden, um die spezifischen Elemente zu finden, die Sie suchen.

## Das NodeSelector-Interface

Diese Spezifikation fügt zwei neue Methoden zu allen Objekten hinzu, die die Schnittstellen [`Document`](/de/docs/Web/API/Document), [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) oder [`Element`](/de/docs/Web/API/Element) implementieren:

- [`querySelector()`](/de/docs/Web/API/Element/querySelector)
  - : Gibt den ersten passenden [`Element`](/de/docs/Web/API/Element)-Knoten innerhalb des Unterbaums des Knotens zurück. Wenn kein passender Knoten gefunden wird, wird `null` zurückgegeben.
- [`querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) zurück, die alle passenden `Element`-Knoten innerhalb des Unterbaums des Knotens enthält, oder eine leere `NodeList`, wenn keine Übereinstimmungen gefunden werden.

> [!NOTE]
> Die von [`querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll) zurückgegebene [`NodeList`](/de/docs/Web/API/NodeList) ist nicht live, was bedeutet, dass Änderungen im DOM nicht in der Sammlung widergespiegelt werden. Dies ist anders als bei anderen DOM-Abfragemethoden, die live Node-Lists zurückgeben.

Sie finden Beispiele und Details in der Dokumentation zu den Methoden [`Element.querySelector()`](/de/docs/Web/API/Element/querySelector) und [`Element.querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll).

## Selektoren

Die Selektormethoden akzeptieren [Selektoren](/de/docs/Web/CSS/CSS_selectors), um zu bestimmen, welches Element oder welche Elemente zurückgegeben werden sollen. Dies schließt [Selektorlisten](/de/docs/Web/CSS/Selector_list) ein, sodass Sie mehrere Selektoren in einer einzigen Abfrage gruppieren können.

Um die Privatsphäre der Nutzer zu schützen, werden einige [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) nicht unterstützt oder verhalten sich anders. Zum Beispiel wird {{cssxref(":visited")}} keine Übereinstimmungen zurückgeben und {{cssxref(":link")}} wird als {{cssxref(":any-link")}} behandelt.

Es können nur Elemente ausgewählt werden, daher werden [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) nicht unterstützt.

## Beispiele

Um alle Absatz- (`p`) Elemente in einem Dokument auszuwählen, deren Klassen `warning` oder `note` enthalten, können Sie Folgendes tun:

```js
const special = document.querySelectorAll("p.warning, p.note");
```

Sie können auch nach ID abfragen. Zum Beispiel:

```js
const el = document.querySelector("#main, #basic, #exclamation");
```

Nach der Ausführung des obigen Codes enthält `el` das erste Element im Dokument, dessen ID `main`, `basic` oder `exclamation` ist.

## Siehe auch

- [Selectors specification](https://drafts.csswg.org/selectors/)
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)
- [`Element.querySelector()`](/de/docs/Web/API/Element/querySelector)
- [`Element.querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)
- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector)
- [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)
