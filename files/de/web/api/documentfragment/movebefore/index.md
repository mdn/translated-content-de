---
title: "DocumentFragment: moveBefore() Methode"
short-title: moveBefore()
slug: Web/API/DocumentFragment/moveBefore
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("DOM")}}

Die **`moveBefore()`** Methode der [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Schnittstelle bewegt einen angegebenen [`Node`](/de/docs/Web/API/Node) innerhalb des aufrufenden `DocumentFragment` als direktes Kind vor einen angegebenen Referenzknoten.

## Syntax

```js-nolint
moveBefore(movedNode, referenceNode)
```

### Parameter

- `movedNode`
  - : Ein [`Node`](/de/docs/Web/API/Node), der den zu verschiebenden Knoten darstellt. Beachten Sie, dass dies ein [`Element`](/de/docs/Web/API/Element) oder ein [`CharacterData`](/de/docs/Web/API/CharacterData) Knoten sein muss.
- `referenceNode`
  - : Ein [`Node`](/de/docs/Web/API/Node), vor dem `movedNode` verschoben wird, oder `null`. Wenn der Wert `null` ist, wird `movedNode` am Ende der Kindknoten des aufrufenden `DocumentFragment` eingefügt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` {{jsxref("TypeError")}}
  - : In den folgenden Situationen ausgelöst:
    - Der angegebene `movedNode` ist bereits zum DOM hinzugefügt, und Sie versuchen, ihn innerhalb eines `DocumentFragment` zu verschieben.
    - Sie versuchen, `movedNode` zwischen zwei verschiedenen Dokumentfragmenten zu verschieben.
    - Der angegebene `movedNode` ist kein [`Element`](/de/docs/Web/API/Element) oder [`CharacterData`](/de/docs/Web/API/CharacterData) Knoten.
- `NotFoundError` {{jsxref("TypeError")}}
  - : Der angegebene `referenceNode` ist kein Kind des `DocumentFragment`, für das Sie `moveBefore()` aufrufen, das heißt, das Fragment, in das Sie `movedNode` verschieben wollen.
- `TypeError` {{jsxref("TypeError")}}
  - : Das zweite Argument wurde nicht angegeben.

## Beschreibung

Die `moveBefore()` Methode bewegt einen angegebenen Knoten an eine neue Stelle im `DocumentFragment`. Sie bietet eine ähnliche Funktionalität wie die [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) Methode, außer dass sie den Knoten nicht entfernt und dann wieder einfügt. Das bedeutet, dass der Zustand des Knotens (der beim Verschieben mit `insertBefore()` und ähnlichen Mechanismen zurückgesetzt würde) nach dem Verschieben beibehalten wird. Dies schließt ein:

- [Animation](/de/docs/Web/CSS/Guides/Animations) und [Übergangs](/de/docs/Web/CSS/Guides/Transitions) Zustände.
- Ladezustand von {{htmlelement("iframe")}}.
- Interaktivitätszustände (zum Beispiel {{cssxref(":focus")}} und {{cssxref(":active")}}).
- Zustand von [Fullscreen](/de/docs/Web/API/Fullscreen_API) Elementen.
- Offen/Geschlossen-Zustand von [Popovers](/de/docs/Web/API/Popover_API).
- Modalzustand von {{htmlelement("dialog")}} Elementen (modale Dialoge werden nicht geschlossen).

Der Wiedergabezustand von {{htmlelement("video")}} und {{htmlelement("audio")}} Elementen ist nicht in der obigen Liste enthalten, da diese Elemente ihren Zustand beibehalten, wenn sie entfernt und wieder eingefügt werden, unabhängig von dem verwendeten Mechanismus.

Wenn Sie Änderungen am DOM mit einem [`MutationObserver`](/de/docs/Web/API/MutationObserver) beobachten, werden Knoten, die mit `moveBefore()` verschoben wurden, als [entfernter Knoten](/de/docs/Web/API/MutationRecord/removedNodes) und [hinzugefügter Knoten](/de/docs/Web/API/MutationRecord/addedNodes) aufgezeichnet.

### `moveBefore()` Einschränkungen

Es gibt einige Einschränkungen, die Sie beachten müssen, wenn Sie `moveBefore()` verwenden:

- Es funktioniert nur, wenn Sie einen Knoten innerhalb desselben Dokumentfragments verschieben.
- Es wird nicht funktionieren, wenn Sie versuchen, einen Knoten, der bereits dem DOM hinzugefügt wurde, innerhalb eines `DocumentFragment` zu verschieben.

In solchen Fällen wird `moveBefore()` mit einer `HierarchyRequestError` Ausnahme fehlschlagen. Wenn die obigen Einschränkungen Anforderungen für Ihren speziellen Anwendungsfall sind, sollten Sie stattdessen [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) verwenden oder [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) nutzen, um die Fehler zu behandeln, die in solchen Fällen auftreten.

## Beispiele

### Grundlegende `moveBefore()` Nutzung

In diesem Demo illustrieren wir die grundlegende Nutzung von `moveBefore()`.

#### HTML

Das HTML enthält drei {{htmlelement("button")}} Elemente und ein {{htmlelement("article")}} Element. Wir werden die Buttons verwenden, um `DocumentFragment` Instanzen in das `<article>` einzufügen und es zu leeren.

```html live-sample___movebefore-basic
<button id="insert1">Insert fragment</button>
<button id="insert2">Insert modified fragment</button>
<button id="clear">Clear</button>
<article id="wrapper"></article>
```

#### CSS

Wir stellen ein grundlegendes Styling für das Aussehen und den Abstand von Elementen bereit, die später als Kinder von mit JavaScript generierten `DocumentFragment`s in die Seite eingefügt werden.

```css live-sample___movebefore-basic
#section1,
#section2,
#mover {
  display: inline-block;
  width: 200px;
  height: 30px;
  border: 5px solid rgb(0 0 0 / 0.25);
  margin-top: 10px;
}

#section1,
#section2 {
  background-color: hotpink;
}

#mover {
  background-color: orange;
}
```

#### JavaScript

In unserem Skript definieren wir eine Funktion, `createFragment()`, die ein `DocumentFragment` erstellt, das ein {{htmlelement("div")}} Element und zwei {{htmlelement("section")}} Elemente als unmittelbare Kinder enthält.

Wir hängen dann einen Klick-Ereignislistener an jedes `<button>` mittels [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) an:

- Der erste Button fügt das `DocumentFragment` unverändert dem `<article>` Element `#wrapper` hinzu.
- Der zweite Button fügt das `DocumentFragment` dem `<article>` Element `#wrapper` hinzu, verwendet aber zuerst `moveBefore()`, um das `<div>` zum zweiten Kind des `DocumentFragment` statt zum ersten zu machen.
- Der dritte Button leert das `<article>` Element `#wrapper` mittels [`innerHTML`](/de/docs/Web/API/Element/innerHTML).

```js live-sample___movebefore-basic
const wrapper = document.getElementById("wrapper");
const insertBtn1 = document.getElementById("insert1");
const insertBtn2 = document.getElementById("insert2");
const clearBtn = document.getElementById("clear");

function createFragment() {
  const fragment = new DocumentFragment();
  const divElem = document.createElement("div");
  const section1 = document.createElement("section");
  const section2 = document.createElement("section");
  divElem.id = "mover";
  section1.id = "section1";
  section2.id = "section2";
  fragment.appendChild(divElem);
  fragment.appendChild(section1);
  fragment.appendChild(section2);

  return fragment;
}

insertBtn1.addEventListener("click", () => {
  const fragment = createFragment();
  wrapper.appendChild(fragment);
});

insertBtn2.addEventListener("click", () => {
  const fragment = createFragment();
  fragment.moveBefore(
    fragment.querySelector("#mover"),
    fragment.querySelector("#section2"),
  );

  wrapper.appendChild(fragment);
});

clearBtn.addEventListener("click", () => {
  wrapper.innerHTML = "";
});
```

#### Ergebnis

Das gerenderte Beispiel sieht wie folgt aus:

{{EmbedLiveSample("movebefore-basic", "100%", "300px")}}

Versuchen Sie, die ersten beiden Buttons einige Male zu klicken und bemerken Sie, wie die `DocumentFragment` Struktur vom zweiten Button modifiziert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.moveBefore()`](/de/docs/Web/API/Document/moveBefore)
- [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore)
- [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)
