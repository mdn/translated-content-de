---
title: Lokalisieren von DOM-Elementen mit Selektoren
slug: Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{DefaultAPISidebar("DOM")}}

Die Selectors-API bietet Methoden, die es schnell und einfach machen, {{domxref("Element")}}-Knoten aus dem DOM abzurufen, indem sie mit einer Reihe von [Selektoren](/de/docs/Web/CSS/CSS_selectors) übereinstimmen. Dies ist viel schneller als frühere Techniken, bei denen es beispielsweise notwendig war, eine Schleife im JavaScript-Code zu verwenden, um die spezifischen Elemente zu finden, die Sie benötigen.

## Das NodeSelector-Interface

Diese Spezifikation fügt zwei neue Methoden zu allen Objekten hinzu, die die {{domxref("Document")}}, {{domxref("DocumentFragment")}} oder {{domxref("Element")}} Schnittstellen implementieren:

- {{domxref("Element.querySelector", "querySelector()")}}
  - : Gibt den ersten übereinstimmenden {{domxref("Element")}}-Knoten im Unterbaum des Knotens zurück. Wenn kein übereinstimmender Knoten gefunden wird, wird `null` zurückgegeben.
- {{domxref("Element.querySelectorAll", "querySelectorAll()")}}
  - : Gibt eine {{domxref("NodeList")}} zurück, die alle übereinstimmenden `Element`-Knoten im Unterbaum des Knotens enthält, oder eine leere `NodeList`, wenn keine Übereinstimmungen gefunden werden.

> [!NOTE]
> Die von {{domxref("Element.querySelectorAll()", "querySelectorAll()")}} zurückgegebene {{domxref("NodeList")}} ist nicht live, was bedeutet, dass Änderungen im DOM nicht in der Sammlung reflektiert werden. Dies unterscheidet sich von anderen DOM-Abfragemethoden, die lebende Knotenlisten zurückgeben.

Sie finden Beispiele und Details in der Dokumentation zu den {{domxref("Element.querySelector()")}} und {{domxref("Element.querySelectorAll()")}} Methoden.

## Selektoren

Die Selektormethoden akzeptieren [Selektoren](/de/docs/Web/CSS/CSS_selectors), um zu bestimmen, welches Element oder welche Elemente zurückgegeben werden sollen. Dies schließt [Selektorlisten](/de/docs/Web/CSS/Selector_list) ein, sodass Sie mehrere Selektoren in einer einzigen Abfrage gruppieren können.

Um die Privatsphäre des Benutzers zu schützen, werden einige [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) nicht unterstützt oder verhalten sich anders. Beispielsweise wird {{cssxref(":visited")}} keine Übereinstimmungen zurückgeben und {{cssxref(":link")}} wird als {{cssxref(":any-link")}} behandelt.

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

- [Selectors-Spezifikation](https://drafts.csswg.org/selectors/)
- [CSS Selektoren](/de/docs/Web/CSS/CSS_selectors)
- {{domxref("Element.querySelector()")}}
- {{domxref("Element.querySelectorAll()")}}
- {{domxref("Document.querySelector()")}}
- {{domxref("Document.querySelectorAll()")}}
