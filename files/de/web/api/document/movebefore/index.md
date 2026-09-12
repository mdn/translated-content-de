---
title: "Document: Methode moveBefore()"
short-title: moveBefore()
slug: Web/API/Document/moveBefore
l10n:
  sourceCommit: 725b7287559af48539da6e570fb85cae8c29041e
---

{{APIRef("DOM")}}

Die Methode **`moveBefore()`** des Interfaces [`Document`](/de/docs/Web/API/Document) verschiebt einen gegebenen [`Node`](/de/docs/Web/API/Node) innerhalb des DOM-Knotens `Document` als direktes Kind vor einen gegebenen Referenzknoten.

## Syntax

```js-nolint
moveBefore(movedNode, referenceNode)
```

### Parameter

- `movedNode`
  - : Ein [`Node`](/de/docs/Web/API/Node), der den zu verschiebenden Knoten repräsentiert. Beachten Sie, dass dies ein [`Element`](/de/docs/Web/API/Element)- oder [`CharacterData`](/de/docs/Web/API/CharacterData)-Knoten sein muss.
- `referenceNode`
  - : Ein [`Node`](/de/docs/Web/API/Node), vor den `movedNode` verschoben wird, oder `null`. Wenn der Wert `null` ist, wird `movedNode` am Ende der Kindknoten des `Document` eingefügt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird in einer der folgenden Situationen ausgelöst:
    - Der angegebene `movedNode` ist nicht Teil dieses Dokuments.
    - Der angegebene `movedNode` ist kein [`Element`](/de/docs/Web/API/Element)- oder [`CharacterData`](/de/docs/Web/API/CharacterData)-Knoten.
    - Sie versuchen, `movedNode` vor den {{Glossary("doctype", "doctype")}} des Dokuments zu verschieben (repräsentiert durch ein [`DocumentType`](/de/docs/Web/API/DocumentType)-Objekt).
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der angegebene `referenceNode` ist kein Kind des Knotens, auf dem Sie `moveBefore()` aufrufen, also des Knotens, innerhalb dessen Sie `movedNode` zu verschieben versuchen.
- {{jsxref("TypeError")}}
  - : Das zweite Argument wurde nicht bereitgestellt.

## Beschreibung

Die Methode `moveBefore()` verschiebt einen gegebenen Knoten an eine neue Stelle im DOM. Sie bietet ähnliche Funktionalität wie die Methode [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore), entfernt und fügt den Knoten jedoch nicht erneut ein. Das bedeutet, dass der Zustand des Knotens (der beim Verschieben mit `insertBefore()` und ähnlichen Mechanismen zurückgesetzt würde) nach dem Verschieben erhalten bleibt. Dies umfasst:

- Den Zustand von [Animationen](/de/docs/Web/CSS/Guides/Animations) und [Transitions](/de/docs/Web/CSS/Guides/Transitions).
- Den Ladezustand von {{htmlelement("iframe")}}.
- Interaktivitätszustände (zum Beispiel {{cssxref(":focus")}} und {{cssxref(":active")}}).
- Den Zustand des [Vollbild-](/de/docs/Web/API/Fullscreen_API)Elements.
- Den Offen-/Geschlossenzustand von [Popovers](/de/docs/Web/API/Popover_API).
- Den modalen Zustand von {{htmlelement("dialog")}}-Elementen (modale Dialoge werden nicht geschlossen).

Der Wiedergabezustand von {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elementen ist nicht in der obigen Liste enthalten, da diese Elemente ihren Zustand beim Entfernen und erneuten Einfügen unabhängig vom verwendeten Mechanismus beibehalten.

Beim Beobachten von Änderungen am DOM mit einem [`MutationObserver`](/de/docs/Web/API/MutationObserver) werden mit `moveBefore()` verschobene Knoten mit einem [entfernten Knoten](/de/docs/Web/API/MutationRecord/removedNodes) und einem [hinzugefügten Knoten](/de/docs/Web/API/MutationRecord/addedNodes) aufgezeichnet.

Die Methode `moveBefore()` ist beim Aufruf auf dem Knoten `Document` nicht besonders nützlich. Es gibt einige Nicht-Element-Anwendungsfälle dafür; Sie könnten beispielsweise `moveBefore()` verwenden, um Kommentarknoten im Stamm des `Document` zu verschieben. Es ist jedoch wesentlich wahrscheinlicher, dass Sie einen Anwendungsfall für den Aufruf auf einem einzelnen `DocumentFragment` oder `Element` finden — siehe [`DocumentFragment.moveBefore()`](/de/docs/Web/API/DocumentFragment/moveBefore) und [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore).

### Einschränkungen von `moveBefore()`

Bei der Verwendung von `moveBefore()` gibt es einige Einschränkungen zu beachten:

- Es kann nur funktionieren, wenn ein Knoten innerhalb desselben Dokuments verschoben wird.
- Es funktioniert nicht, wenn Sie versuchen, einen Knoten, der nicht mit dem DOM verbunden ist, in ein bereits verbundenes übergeordnetes Element zu verschieben oder umgekehrt.

In solchen Fällen schlägt `moveBefore()` mit einer `HierarchyRequestError`-Ausnahme fehl. Wenn die oben genannten Einschränkungen Anforderungen für Ihren speziellen Anwendungsfall sind, sollten Sie stattdessen [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) verwenden oder [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) einsetzen, um die Fehler zu behandeln, die aus solchen Fällen entstehen.

## Beispiele

### Verschieben eines Kommentarknotens mit `moveBefore()`

In dieser Demo zeigen wir, wie Sie `document.moveBefore()` verwenden, um einen Kommentarknoten innerhalb des DOM zu verschieben.

#### HTML

Das HTML ist eine minimale Vorlage mit einem Kommentar innerhalb von {{htmlelement("body")}}.

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

In unserem Skript durchlaufen wir alle [`childNodes`](/de/docs/Web/API/Node/childNodes) des `<body>`-Elements. Wenn wir einen Knoten mit einem [`nodeType`](/de/docs/Web/API/Node/nodeType)-Wert von `8` finden (was auf einen Kommentarknoten hinweist), speichern wir eine Referenz darauf in einer Variablen namens `commentNode`. Anschließend rufen wir `document.moveBefore()` auf, geben an, dass wir den Kommentarknoten verschieben möchten, und geben als zweites Argument `null` an, um unseren Kommentar am Ende der Kindknoten des `Document` einzufügen.

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

Wenn Sie das Beispiel mit den Entwicklerwerkzeugen Ihres Browsers untersuchen, werden Sie feststellen, dass der Kommentar an das Ende des Dokuments nach dem schließenden Tag `</html>` verschoben wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DocumentFragment.moveBefore()`](/de/docs/Web/API/DocumentFragment/moveBefore)
- [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore)
- [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)
