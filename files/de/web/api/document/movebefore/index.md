---
title: "Dokument: moveBefore() Methode"
short-title: moveBefore()
slug: Web/API/Document/moveBefore
l10n:
  sourceCommit: cf16851e73da29823438198c4f0efcb7026b7d10
---

{{APIRef("DOM")}}

Die **`moveBefore()`** Methode der [`Document`](/de/docs/Web/API/Document) Schnittstelle bewegt einen gegebenen [`Node`](/de/docs/Web/API/Node) innerhalb des `Document` DOM-Knotens als direktes Kind vor einen angegebenen Referenzknoten.

## Syntax

```js-nolint
moveBefore(movedNode, referenceNode)
```

### Parameter

- `movedNode`
  - : Ein [`Node`](/de/docs/Web/API/Node), der den zu bewegenden Knoten darstellt. Beachten Sie, dass dies ein [`Element`](/de/docs/Web/API/Element) oder ein [`CharacterData`](/de/docs/Web/API/CharacterData) Knoten sein muss.
- `referenceNode`
  - : Ein [`Node`](/de/docs/Web/API/Node), vor dem `movedNode` bewegt wird, oder `null`. Wenn der Wert `null` ist, wird `movedNode` am Ende der Kindknoten des `Document` eingefügt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` {{jsxref("TypeError")}}
  - : Wird in einer der folgenden Situationen ausgelöst:
    - Der angegebene `movedNode` ist nicht Teil dieses Dokuments.
    - Der angegebene `movedNode` ist kein [`Element`](/de/docs/Web/API/Element) oder [`CharacterData`](/de/docs/Web/API/CharacterData) Knoten.
    - Sie versuchen, `movedNode` vor dem {{Glossary("doctype", "doctype")}} des Dokuments zu bewegen (dargestellt durch ein [`DocumentType`](/de/docs/Web/API/DocumentType) Objekt).
- `NotFoundError` {{jsxref("TypeError")}}
  - : Der angegebene `referenceNode` ist kein Kind des Knotens, auf den Sie `moveBefore()` aufrufen, das heißt, des Knotens, in den Sie `movedNode` bewegen möchten.
- `TypeError` {{jsxref("TypeError")}}
  - : Das zweite Argument wurde nicht übergeben.

## Beschreibung

Die `moveBefore()` Methode bewegt einen gegebenen Knoten an eine neue Stelle im DOM. Sie bietet eine ähnliche Funktionalität wie die [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) Methode, außer dass sie den Knoten nicht entfernt und dann neu einfügt. Das bedeutet, dass der Zustand des Knotens (der zurückgesetzt würde, wenn man ihn mit `insertBefore()` und ähnlichen Mechanismen bewegt) nach der Verschiebung erhalten bleibt. Dies umfasst:

- [Animation](/de/docs/Web/CSS/CSS_animations) und [Transition](/de/docs/Web/CSS/CSS_transitions) Zustand.
- Ladezustand des {{htmlelement("iframe")}}.
- Interaktivitätszustände (zum Beispiel, {{cssxref(":focus")}} und {{cssxref(":active")}}).
- [Fullscreen](/de/docs/Web/API/Fullscreen_API) Elementzustand.
- Offen/geschlossener Zustand von [Popovers](/de/docs/Web/API/Popover_API).
- Modalzustand von {{htmlelement("dialog")}} Elementen (Modale Dialoge werden nicht geschlossen).

Der Abspielzustand von {{htmlelement("video")}} und {{htmlelement("audio")}} Elementen ist in der obigen Liste nicht enthalten, da diese Elemente ihren Zustand behalten, wenn sie entfernt und erneut eingefügt werden, unabhängig vom verwendeten Mechanismus.

Wenn Änderungen am DOM mit einem [`MutationObserver`](/de/docs/Web/API/MutationObserver) beobachtet werden, werden Knoten, die mit `moveBefore()` bewegt wurden, mit einem [entfernten Knoten](/de/docs/Web/API/MutationRecord/removedNodes) und einem [hinzugefügten Knoten](/de/docs/Web/API/MutationRecord/addedNodes) aufgezeichnet.

Die `moveBefore()` Methode ist nicht besonders nützlich, wenn sie auf den `Document` Knoten aufgerufen wird. Es gibt einige nicht-elementare Anwendungen dafür, zum Beispiel könnten Sie `moveBefore()` verwenden, um Kommentar-Knoten um die Wurzel des `Document` zu bewegen. Sie werden jedoch viel eher einen Nutzen dafür finden, wenn Sie es auf einem individuellen `DocumentFragment` oder `Element` aufrufen — siehe [`DocumentFragment.moveBefore()`](/de/docs/Web/API/DocumentFragment/moveBefore) und [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore).

### Einschränkungen von `moveBefore()`

Es gibt einige Einschränkungen, die bei der Verwendung von `moveBefore()` zu beachten sind:

- Es kann nur verwendet werden, um einen Knoten innerhalb desselben Dokuments zu verschieben.
- Es funktioniert nicht, wenn Sie versuchen, einen Knoten, der nicht mit dem DOM verbunden ist, zu einem bereits verbundenen Elternteil zu bewegen, oder umgekehrt.

In solchen Fällen schlägt `moveBefore()` mit einer `HierarchyRequestError` Ausnahme fehl. Wenn die oben genannten Einschränkungen Anforderungen für Ihren speziellen Anwendungsfall sind, sollten Sie stattdessen [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) verwenden oder [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch), um die Fehler zu behandeln, die in solchen Fällen auftreten.

## Beispiele

### Verschieben eines Kommentarknotens mit `moveBefore()`

In dieser Demo zeigen wir, wie man `document.moveBefore()` verwendet, um einen Kommentarknoten innerhalb des DOM zu verschieben.

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

In unserem Skript durchlaufen wir alle [`childNodes`](/de/docs/Web/API/Node/childNodes) des `<body>` Elements. Wenn wir einen Knoten mit einem [`nodeType`](/de/docs/Web/API/Node/nodeType) Wert von `8` (was auf einen Kommentarknoten hinweist) finden, speichern wir eine Referenz dazu in einer Variablen namens `commentNode`. Dann rufen wir `document.moveBefore()` auf, wobei wir angeben, dass wir den Kommentarknoten verschieben möchten, und ein zweites Argument von `null`, um unseren Kommentar am Ende der Kindknoten des `Document` einzufügen.

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

Wenn Sie das Beispiel mit den Entwicklerwerkzeugen Ihres Browsers inspizieren, werden Sie bemerken, dass der Kommentar an das Ende des Dokuments, nach dem abschließenden `</html>` Tag, verschoben wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DocumentFragment.moveBefore()`](/de/docs/Web/API/DocumentFragment/moveBefore)
- [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore)
- [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)
