---
title: "Dokument: moveBefore() Methode"
short-title: moveBefore()
slug: Web/API/Document/moveBefore
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("DOM")}}

Die **`moveBefore()`**-Methode der [`Document`](/de/docs/Web/API/Document)-Schnittstelle verschiebt einen gegebenen [`Node`](/de/docs/Web/API/Node) innerhalb des `Document` DOM-Knotens als direktes Kind vor einem angegebenen Referenzknoten.

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
    - Der angegebene `movedNode` ist nicht Teil dieses Dokuments.
    - Der angegebene `movedNode` ist kein [`Element`](/de/docs/Web/API/Element) oder [`CharacterData`](/de/docs/Web/API/CharacterData)-Knoten.
    - Sie versuchen, `movedNode` vor dem Doctype des Dokuments (repräsentiert durch ein [`DocumentType`](/de/docs/Web/API/DocumentType)-Objekt) zu verschieben.
- `NotFoundError` {{jsxref("TypeError")}}
  - : Der angegebene `referenceNode` ist kein Kind des Knotens, auf dem `moveBefore()` aufgerufen wird, also des Knotens, in den Sie `movedNode` verschieben möchten.
- `TypeError` {{jsxref("TypeError")}}
  - : Das zweite Argument wurde nicht angegeben.

## Beschreibung

Die `moveBefore()`-Methode verschiebt einen gegebenen Knoten an eine neue Stelle im DOM. Sie bietet eine ähnliche Funktionalität wie die [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)-Methode, außer dass sie den Knoten nicht entfernt und dann wieder einfügt. Dies bedeutet, dass der Zustand des Knotens (der zurückgesetzt würde, wenn er mit `insertBefore()` und ähnlichen Mechanismen verschoben würde) nach der Verschiebung erhalten bleibt. Dies umfasst:

- [Animations-](/de/docs/Web/CSS/Guides/Animations) und [Transitions-](/de/docs/Web/CSS/Guides/Transitions) Zustand.
- Ladezustand von {{htmlelement("iframe")}}.
- Interaktivitätszustände (zum Beispiel {{cssxref(":focus")}} und {{cssxref(":active")}}).
- Zustand des [Vollbild](/de/docs/Web/API/Fullscreen_API)-Elements.
- Offen/Geschlossen-Zustand von [Popovers](/de/docs/Web/API/Popover_API).
- Modaler Zustand von {{htmlelement("dialog")}}-Elementen (modale Dialoge werden nicht geschlossen).

Der Wiedergabestatus von {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elementen ist nicht in der obigen Liste enthalten, da diese Elemente ihren Zustand behalten, wenn sie entfernt und wieder eingefügt werden, unabhängig vom verwendeten Mechanismus.

Beim Beobachten von Änderungen im DOM mittels eines [`MutationObserver`](/de/docs/Web/API/MutationObserver) werden Knoten, die mit `moveBefore()` verschoben wurden, als [entfernter Knoten](/de/docs/Web/API/MutationRecord/removedNodes) und als [hinzugefügter Knoten](/de/docs/Web/API/MutationRecord/addedNodes) aufgezeichnet.

Die `moveBefore()`-Methode ist nicht besonders nützlich, wenn sie auf dem `Document`-Knoten aufgerufen wird. Es gibt einige Nicht-Element-Anwendungen dafür, zum Beispiel könnten Sie `moveBefore()` verwenden, um Kommentarknoten um die Wurzel des `Document` zu verschieben. Es ist jedoch viel wahrscheinlicher, dass Sie es nützlich finden, es auf einem individuellen `DocumentFragment` oder `Element` zu verwenden — siehe [`DocumentFragment.moveBefore()`](/de/docs/Web/API/DocumentFragment/moveBefore) und [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore).

### `moveBefore()`-Einschränkungen

Es gibt einige Einschränkungen, die beim Verwenden von `moveBefore()` zu beachten sind:

- Es funktioniert nur, wenn ein Knoten innerhalb des gleichen Dokuments verschoben wird.
- Es funktioniert nicht, wenn Sie versuchen, einen Knoten, der nicht mit dem DOM verbunden ist, zu einem bereits verbundenen Elternteil zu verschieben oder umgekehrt.

In solchen Fällen schlägt `moveBefore()` mit einer `HierarchyRequestError`-Ausnahme fehl. Wenn die oben genannten Einschränkungen Anforderungen für Ihren speziellen Anwendungsfall sind, sollten Sie stattdessen [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) verwenden oder [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) verwenden, um die in solchen Fällen auftretenden Fehler zu behandeln.

## Beispiele

### Verschieben eines Kommentarknotens mit `moveBefore()`

In diesem Beispiel zeigen wir, wie `document.moveBefore()` verwendet wird, um einen Kommentarknoten innerhalb des DOM zu verschieben.

#### HTML

Das HTML ist eine minimale Vorlage, die einen Kommentar innerhalb des {{htmlelement("body")}} enthält.

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

In unserem Skript durchlaufen wir alle [`childNodes`](/de/docs/Web/API/Node/childNodes) des `<body>`-Elements. Wenn wir einen Knoten mit einem [`nodeType`](/de/docs/Web/API/Node/nodeType)-Wert von `8` finden (was auf einen Kommentarknoten hinweist), speichern wir eine Referenz darauf in einer Variablen namens `commentNode`. Dann rufen wir `document.moveBefore()` auf und geben an, dass wir den Kommentarknoten verschieben möchten, und geben als zweites Argument `null` an, um unseren Kommentar am Ende der Kindknoten des `Document` einzufügen.

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

Wenn Sie das Beispiel mit den Entwicklerwerkzeugen Ihres Browsers inspizieren, werden Sie feststellen, dass der Kommentar an das Ende des Dokuments verschoben wurde, hinter das abschließende `</html>`-Tag.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DocumentFragment.moveBefore()`](/de/docs/Web/API/DocumentFragment/moveBefore)
- [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore)
- [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)
