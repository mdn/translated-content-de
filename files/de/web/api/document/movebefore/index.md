---
title: "Dokument: moveBefore()-Methode"
short-title: moveBefore()
slug: Web/API/Document/moveBefore
l10n:
  sourceCommit: a61be259435257328a25c462cb0f42bc91981a6f
---

{{APIRef("DOM")}}{{SeeCompatTable}}

Die **`moveBefore()`**-Methode der [`Document`](/de/docs/Web/API/Document)-Schnittstelle verschiebt einen gegebenen [`Node`](/de/docs/Web/API/Node) als direktes Kind an eine neue Position innerhalb des `Document`-DOM-Knotens, vor einen angegebenen Referenzknoten.

## Syntax

```js-nolint
moveBefore(movedNode, referenceNode)
```

### Parameter

- `movedNode`
  - : Ein [`Node`](/de/docs/Web/API/Node), der den zu verschiebenden Knoten darstellt. Beachten Sie, dass dies ein [`Element`](/de/docs/Web/API/Element) oder ein [`CharacterData`](/de/docs/Web/API/CharacterData)-Knoten sein muss.
- `referenceNode`
  - : Ein [`Node`](/de/docs/Web/API/Node), vor dem `movedNode` verschoben wird, oder `null`. Wenn der Wert `null` ist, wird `movedNode` am Ende der Kindknoten des `Document` eingefügt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` {{jsxref("TypeError")}}
  - : Wird in einer der folgenden Situationen ausgelöst:
    - Der angegebene `movedNode` gehört nicht zu diesem Dokument.
    - Der angegebene `movedNode` ist kein [`Element`](/de/docs/Web/API/Element) oder [`CharacterData`](/de/docs/Web/API/CharacterData)-Knoten.
    - Sie versuchen, `movedNode` vor das {{Glossary("doctype", "doctype")}} des Dokuments zu verschieben (dargestellt durch ein [`DocumentType`](/de/docs/Web/API/DocumentType)-Objekt).
- `NotFoundError` {{jsxref("TypeError")}}
  - : Der angegebene `referenceNode` ist kein Kind des Knotens, auf dem `moveBefore()` aufgerufen wird, d.h. des Knotens, in den Sie `movedNode` verschieben möchten.
- `TypeError` {{jsxref("TypeError")}}
  - : Das zweite Argument wurde nicht angegeben.

## Beschreibung

Die `moveBefore()`-Methode verschiebt einen gegebenen Knoten an eine neue Position im DOM. Sie bietet ähnliche Funktionalität wie die [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)-Methode, entfernt und fügt den Knoten jedoch nicht erneut ein. Dies bedeutet, dass der Zustand des Knotens (der zurückgesetzt würde, wenn er mit `insertBefore()` und ähnlichen Mechanismen verschoben wird) nach der Verschiebung erhalten bleibt. Dies umfasst:

- [Animation](/de/docs/Web/CSS/CSS_animations) und [Übergangs](/de/docs/Web/CSS/CSS_transitions)-Zustand.
- Ladezustand von {{htmlelement("iframe")}}.
- Interaktivitätszustände (z. B. {{cssxref(":focus")}} und {{cssxref(":active")}}).
- [Vollbild](/de/docs/Web/API/Fullscreen_API)-Zustand des Elements.
- Offen/geschlossen-Zustand von [Popovers](/de/docs/Web/API/Popover_API).
- Modalzustand von {{htmlelement("dialog")}}-Elementen (modale Dialoge werden nicht geschlossen).

Der Wiedergabestatus von {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elementen ist in der obigen Liste nicht enthalten, da diese Elemente ihren Zustand behalten, wenn sie entfernt und wieder eingefügt werden, unabhängig von dem verwendeten Mechanismus.

Beim Beobachten von Änderungen im DOM mit einem [`MutationObserver`](/de/docs/Web/API/MutationObserver), werden Knoten, die mit `moveBefore()` verschoben wurden, als [entfernte Knoten](/de/docs/Web/API/MutationRecord/removedNodes) und [hinzugefügte Knoten](/de/docs/Web/API/MutationRecord/addedNodes) aufgezeichnet.

Die `moveBefore()`-Methode ist nicht besonders nützlich, wenn sie auf den `Document`-Knoten angewendet wird. Es gibt einige nicht elementare Anwendungen, z. B. könnten Sie `moveBefore()` verwenden, um Kommentar-Knoten um die Wurzel des `Document` zu verschieben. Sie werden jedoch viel eher eine Verwendung finden, wenn es auf ein individuelles `DocumentFragment` oder `Element` aufgerufen wird — siehe [`DocumentFragment.moveBefore()`](/de/docs/Web/API/DocumentFragment/moveBefore) und [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore).

### Einschränkungen von `moveBefore()`

Es gibt einige Einschränkungen, die bei der Verwendung von `moveBefore()` zu beachten sind:

- Sie kann nur zum Verschieben eines Knotens innerhalb des gleichen Dokuments verwendet werden.
- Sie funktioniert nicht, wenn Sie versuchen, einen Knoten, der nicht mit dem DOM verbunden ist, zu einem bereits verbundenen Elternknoten zu verschieben, oder umgekehrt.

In solchen Fällen wird `moveBefore()` mit einer `HierarchyRequestError`-Ausnahme fehlschlagen. Wenn die oben genannten Einschränkungen Anforderungen für Ihren speziellen Anwendungsfall sind, sollten Sie stattdessen [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) verwenden oder [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) verwenden, um die entstehenden Fehler zu behandeln.

## Beispiele

### Verschieben eines Kommentarknotens mit `moveBefore()`

In diesem Demo zeigen wir, wie man `document.moveBefore()` verwendet, um einen Kommentarknoten innerhalb des DOM zu verschieben.

#### HTML

Das HTML ist eine minimale Vorlage, die einen Kommentar im {{htmlelement("body")}} enthält.

```html live-sample___movebefore-comment
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>document.moveBefore() example</title>
  </head>
  <body>
    <!-- This comment should be at the end of the document -->
    <p>Some content</p>
  </body>
</html>
```

#### JavaScript

In unserem Skript durchlaufen wir alle [`childNodes`](/de/docs/Web/API/Node/childNodes) des `<body>`-Elements. Wenn wir einen Knoten mit einem [`nodeType`](/de/docs/Web/API/Node/nodeType)-Wert von `8` (was einen Kommentarknoten anzeigt) finden, speichern wir eine Referenz darauf in einer Variablen namens `commentNode`. Dann rufen wir `document.moveBefore()` auf und geben an, dass wir den Kommentarknoten verschieben möchten, und geben ein zweites Argument von `null` an, um unseren Kommentar am Ende der Kindknoten des `Document` einzufügen.

```js live-sample___movebefore-comment
let commentNode;

for (node of document.querySelector("body").childNodes) {
  if (node.nodeType === 8) {
    commentNode = node;
  }
}

document.moveBefore(commentNode, null);
```

#### Ergebnis

Das gerenderte Beispiel sieht so aus:

{{EmbedLiveSample("movebefore-comment", "100%", "60px")}}

Wenn Sie das Beispiel mit den Entwickler-Tools Ihres Browsers untersuchen, werden Sie feststellen, dass der Kommentar ans Ende des Dokuments, nach dem abschließenden `</html>`-Tag verschoben wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DocumentFragment.moveBefore()`](/de/docs/Web/API/DocumentFragment/moveBefore)
- [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore)
- [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)
