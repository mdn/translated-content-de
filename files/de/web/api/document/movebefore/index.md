---
title: "Dokument: moveBefore()-Methode"
short-title: moveBefore()
slug: Web/API/Document/moveBefore
l10n:
  sourceCommit: fd1081dbbecd338a3ea55b03c187b6a60500408f
---

{{APIRef("DOM")}}

Die **`moveBefore()`**-Methode der [`Document`](/de/docs/Web/API/Document)-Schnittstelle verschiebt einen gegebenen [`Node`](/de/docs/Web/API/Node) innerhalb des `Document`-DOM-Knotens als direktes Kind vor einen gegebenen Referenzknoten.

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
    - Sie versuchen, `movedNode` vor dem {{Glossary("doctype", "doctype")}} des Dokuments zu verschieben (dargestellt durch ein [`DocumentType`](/de/docs/Web/API/DocumentType)-Objekt).
- `NotFoundError` {{jsxref("TypeError")}}
  - : Der angegebene `referenceNode` ist kein Kind des Knotens, auf dem Sie `moveBefore()` aufrufen, das heißt, des Knotens, in den Sie `movedNode` verschieben möchten.
- `TypeError` {{jsxref("TypeError")}}
  - : Das zweite Argument wurde nicht angegeben.

## Beschreibung

Die `moveBefore()`-Methode verschiebt einen gegebenen Knoten an einen neuen Ort im DOM. Sie bietet eine ähnliche Funktionalität wie die [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)-Methode, außer dass sie den Knoten nicht entfernt und dann neu einfügt. Dies bedeutet, dass der Zustand des Knotens (der zurückgesetzt würde, wenn er mit `insertBefore()` und ähnlichen Mechanismen verschoben würde) nach der Verschiebung erhalten bleibt. Dies umfasst:

- [Animation](/de/docs/Web/CSS/CSS_animations) und [Übergang](/de/docs/Web/CSS/CSS_transitions)-Zustand.
- Ladezustand von {{htmlelement("iframe")}}.
- Interaktivitätszustände (zum Beispiel {{cssxref(":focus")}} und {{cssxref(":active")}}).
- [Vollbild](/de/docs/Web/API/Fullscreen_API)-Elementzustand.
- Offen/geschlossen-Zustand von [Popovern](/de/docs/Web/API/Popover_API).
- Modalzustand von {{htmlelement("dialog")}}-Elementen (modale Dialoge werden nicht geschlossen).

Der Abspielzustand von {{htmlelement("video")}} und {{htmlelement("audio")}}-Elementen ist in der obigen Liste nicht enthalten, da diese Elemente ihren Zustand beibehalten, wenn sie entfernt und wieder eingefügt werden, unabhängig vom verwendeten Mechanismus.

Beim Beobachten von Änderungen am DOM mit einem [`MutationObserver`](/de/docs/Web/API/MutationObserver) werden Knoten, die mit `moveBefore()` verschoben wurden, mit einem [entfernten Knoten](/de/docs/Web/API/MutationRecord/removedNodes) und einem [hinzugefügten Knoten](/de/docs/Web/API/MutationRecord/addedNodes) erfasst.

Die `moveBefore()`-Methode ist nicht besonders nützlich, wenn sie auf dem `Document`-Knoten aufgerufen wird. Es gibt einige nicht-elementbezogene Verwendungen dafür, zum Beispiel könnten Sie `moveBefore()` verwenden, um Kommentarknoten um die Wurzel des `Document` zu verschieben. Sie werden jedoch viel wahrscheinlicher eine Verwendung dafür finden, sie auf einem individuellen `DocumentFragment` oder `Element` aufzurufen — siehe [`DocumentFragment.moveBefore()`](/de/docs/Web/API/DocumentFragment/moveBefore) und [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore).

### Einschränkungen von `moveBefore()`

Es gibt einige Einschränkungen, die bei der Verwendung von `moveBefore()` zu beachten sind:

- Es funktioniert nur, wenn ein Knoten innerhalb desselben Dokuments verschoben wird.
- Es funktioniert nicht, wenn Sie versuchen, einen Knoten, der nicht mit dem DOM verbunden ist, in einen bereits verbundenen Elternknoten zu verschieben oder umgekehrt.

In solchen Fällen wird `moveBefore()` mit einer `HierarchyRequestError`-Ausnahme fehlschlagen. Wenn die obigen Einschränkungen Anforderungen für Ihren speziellen Anwendungsfall sind, sollten Sie stattdessen [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) verwenden oder [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) verwenden, um die Fehler, die in solchen Fällen auftreten, zu behandeln.

## Beispiele

### Kommentarknoten mit `moveBefore()` verschieben

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

In unserem Skript durchlaufen wir alle [`childNodes`](/de/docs/Web/API/Node/childNodes) des `<body>`-Elements. Wenn wir einen Knoten mit einem [`nodeType`](/de/docs/Web/API/Node/nodeType) Wert von `8` finden (der einen Kommentarknoten anzeigt), speichern wir eine Referenz darauf in einer Variablen namens `commentNode`. Dann rufen wir `document.moveBefore()` auf, wobei wir angeben, dass wir den Kommentarknoten verschieben möchten, und ein zweites Argument von `null` angeben, um unseren Kommentar am Ende der Kindknoten des `Document` einzufügen.

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

Das gerenderte Beispiel sieht folgendermaßen aus:

{{EmbedLiveSample("movebefore-comment", "100%", "60px")}}

Wenn Sie das Beispiel mit den Entwicklertools Ihres Browsers inspizieren, werden Sie bemerken, dass der Kommentar an das Ende des Dokuments verschoben wurde, nach dem schließenden `</html>`-Tag.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DocumentFragment.moveBefore()`](/de/docs/Web/API/DocumentFragment/moveBefore)
- [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore)
- [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)
