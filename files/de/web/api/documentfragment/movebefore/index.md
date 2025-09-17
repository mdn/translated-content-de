---
title: "DocumentFragment: moveBefore() Methode"
short-title: moveBefore()
slug: Web/API/DocumentFragment/moveBefore
l10n:
  sourceCommit: cf16851e73da29823438198c4f0efcb7026b7d10
---

{{APIRef("DOM")}}

Die **`moveBefore()`**-Methode der [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Schnittstelle verschiebt einen angegebenen [`Node`](/de/docs/Web/API/Node) innerhalb des aufrufenden `DocumentFragment` als direktes Kind vor einen angegebenen Referenzknoten.

## Syntax

```js-nolint
moveBefore(movedNode, referenceNode)
```

### Parameter

- `movedNode`
  - : Ein [`Node`](/de/docs/Web/API/Node), der den zu verschiebenden Knoten darstellt. Beachten Sie, dass dies ein [`Element`](/de/docs/Web/API/Element) oder ein [`CharacterData`](/de/docs/Web/API/CharacterData)-Knoten sein muss.
- `referenceNode`
  - : Ein [`Node`](/de/docs/Web/API/Node), vor dem `movedNode` verschoben wird, oder `null`. Wenn der Wert `null` ist, wird `movedNode` am Ende der Kindknoten des aufrufenden `DocumentFragment` eingefügt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` {{jsxref("TypeError")}}
  - : Wird in einer der folgenden Situationen ausgelöst:
    - Der angegebene `movedNode` ist bereits zum DOM hinzugefügt worden und Sie versuchen, ihn innerhalb eines `DocumentFragment` zu verschieben.
    - Sie versuchen, `movedNode` zwischen zwei verschiedenen Dokumentfragmenten zu verschieben.
    - Der angegebene `movedNode` ist kein [`Element`](/de/docs/Web/API/Element) oder [`CharacterData`](/de/docs/Web/API/CharacterData)-Knoten.
- `NotFoundError` {{jsxref("TypeError")}}
  - : Der angegebene `referenceNode` ist kein Kind des `DocumentFragment`, auf dem Sie `moveBefore()` aufrufen, das heißt, des Fragments, in das Sie `movedNode` verschieben möchten.
- `TypeError` {{jsxref("TypeError")}}
  - : Das zweite Argument wurde nicht angegeben.

## Beschreibung

Die `moveBefore()`-Methode verschiebt einen gegebenen Knoten an eine neue Stelle im `DocumentFragment`. Sie bietet eine ähnliche Funktionalität wie die [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)-Methode, außer dass sie den Knoten nicht entfernt und dann wieder einfügt. Das bedeutet, dass der Zustand des Knotens (der zurückgesetzt würde, wenn er mit `insertBefore()` und ähnlichen Mechanismen verschoben würde) nach der Verschiebung beibehalten wird. Dies umfasst:

- [Animation](/de/docs/Web/CSS/CSS_animations)- und [Übergangs](/de/docs/Web/CSS/CSS_transitions)-Zustand.
- Ladezustand von {{htmlelement("iframe")}}.
- Interaktivitätszustände (zum Beispiel, {{cssxref(":focus")}} und {{cssxref(":active")}}).
- [Vollbild](/de/docs/Web/API/Fullscreen_API)-Elementzustand.
- Offen/geschlossen Zustand von [Popovers](/de/docs/Web/API/Popover_API).
- Modalzustand von {{htmlelement("dialog")}}-Elementen (modale Dialoge werden nicht geschlossen).

Der Abspielzustand von {{htmlelement("video")}} und {{htmlelement("audio")}}-Elementen ist nicht in der obigen Liste enthalten, da diese Elemente ihren Zustand behalten, wenn sie entfernt und wieder eingefügt werden, unabhängig vom verwendeten Mechanismus.

Beim Beobachten von Änderungen am DOM mit einem [`MutationObserver`](/de/docs/Web/API/MutationObserver) werden Knoten, die mit `moveBefore()` verschoben werden, als [entfernte Knoten](/de/docs/Web/API/MutationRecord/removedNodes) und [hinzugefügte Knoten](/de/docs/Web/API/MutationRecord/addedNodes) dokumentiert.

### `moveBefore()`-Einschränkungen

Es gibt einige Einschränkungen, die bei der Verwendung von `moveBefore()` zu beachten sind:

- Es funktioniert nur, wenn ein Knoten innerhalb desselben Dokumentfragments verschoben wird.
- Es wird nicht funktionieren, wenn Sie versuchen, einen Knoten, der bereits zum DOM hinzugefügt wurde, innerhalb eines `DocumentFragment` zu verschieben.

In solchen Fällen wird `moveBefore()` mit einer `HierarchyRequestError`-Ausnahme fehlschlagen. Wenn die obigen Einschränkungen für Ihren speziellen Anwendungsfall Anforderungen darstellen, sollten Sie stattdessen [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) verwenden oder [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) verwenden, um die Fehler zu behandeln, die in solchen Fällen auftreten.

## Beispiele

### Grundlegende Anwendung von `moveBefore()`

In diesem Beispiel veranschaulichen wir die grundlegende Verwendung von `moveBefore()`.

#### HTML

Das HTML umfasst drei {{htmlelement("button")}}-Elemente und ein {{htmlelement("article")}}-Element. Wir werden die Schaltflächen verwenden, um `DocumentFragment`-Instanzen in das `<article>`-Element einzufügen und es zu leeren.

```html live-sample___movebefore-basic
<button id="insert1">Insert fragment</button>
<button id="insert2">Insert modified fragment</button>
<button id="clear">Clear</button>
<article id="wrapper"></article>
```

#### CSS

Wir bieten einige grundlegende Stile für das Aussehen und die Anordnung von Elementen, die später auf der Seite als Kinder von JavaScript-generierten `DocumentFragment`s eingefügt werden.

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

In unserem Skript definieren wir eine Funktion, `createFragment()`, die ein `DocumentFragment` erstellt, das ein {{htmlelement("div")}}-Element und zwei {{htmlelement("section")}}-Elemente als unmittelbare Kinder enthält.

Wir fügen dann jeden `<button>` mit einem Klick-Ereignislistener über [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) an:

- Die erste Schaltfläche fügt das `DocumentFragment` unverändert in das `#wrapper` `<article>`-Element ein.
- Die zweite Schaltfläche fügt das `DocumentFragment` in das `#wrapper` `<article>`-Element ein, verschiebt aber zuerst das `<div>` mit `moveBefore()` an die zweite Stelle als Kind des `DocumentFragment`, anstatt an die erste.
- Die dritte Schaltfläche leert das `#wrapper` `<article>`-Element mithilfe von [`innerHTML`](/de/docs/Web/API/Element/innerHTML).

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

Das gerenderte Beispiel sieht so aus:

{{EmbedLiveSample("movebefore-basic", "100%", "300px")}}

Versuchen Sie, die ersten beiden Schaltflächen ein paar Mal zu klicken und beachten Sie, wie die `DocumentFragment`-Struktur von der zweiten Schaltfläche modifiziert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.moveBefore()`](/de/docs/Web/API/Document/moveBefore)
- [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore)
- [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)
