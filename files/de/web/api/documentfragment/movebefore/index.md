---
title: "DocumentFragment: moveBefore() Methode"
short-title: moveBefore()
slug: Web/API/DocumentFragment/moveBefore
l10n:
  sourceCommit: fd1081dbbecd338a3ea55b03c187b6a60500408f
---

{{APIRef("DOM")}}

Die **`moveBefore()`** Methode des [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) Schnittstelle verschiebt einen angegebenen [`Node`](/de/docs/Web/API/Node) innerhalb des aufrufenden `DocumentFragment` als direktes Kind vor einen angegebenen Referenzknoten.

## Syntax

```js-nolint
moveBefore(movedNode, referenceNode)
```

### Parameter

- `movedNode`
  - : Ein [`Node`](/de/docs/Web/API/Node), der den zu verschiebenden Knoten repräsentiert. Beachten Sie, dass dies ein [`Element`](/de/docs/Web/API/Element) oder ein [`CharacterData`](/de/docs/Web/API/CharacterData) Knoten sein muss.
- `referenceNode`
  - : Ein [`Node`](/de/docs/Web/API/Node), vor dem `movedNode` verschoben wird, oder `null`. Wenn der Wert `null` ist, wird `movedNode` am Ende der Knoten des aufrufenden `DocumentFragment` eingefügt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` {{jsxref("TypeError")}}
  - : Wird in einer der folgenden Situationen ausgelöst:
    - Der angegebene `movedNode` ist bereits zum DOM hinzugefügt, und Sie versuchen, ihn in einem `DocumentFragment` zu verschieben.
    - Sie versuchen, `movedNode` zwischen zwei verschiedenen Document Fragments zu verschieben.
    - Der angegebene `movedNode` ist weder ein [`Element`](/de/docs/Web/API/Element) noch ein [`CharacterData`](/de/docs/Web/API/CharacterData) Knoten.
- `NotFoundError` {{jsxref("TypeError")}}
  - : Der angegebene `referenceNode` ist kein Kind des `DocumentFragment`, auf dem Sie `moveBefore()` aufrufen, das heißt, des Fragments, in das Sie `movedNode` verschieben möchten.
- `TypeError` {{jsxref("TypeError")}}
  - : Das zweite Argument wurde nicht angegeben.

## Beschreibung

Die Methode `moveBefore()` verschiebt einen gegebenen Knoten an einen neuen Ort im `DocumentFragment`. Sie bietet ähnliche Funktionalität wie die Methode [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore), außer dass sie den Knoten nicht entfernt und dann wieder einfügt. Das bedeutet, dass der Zustand des Knotens (der zurückgesetzt würde, wenn er mit `insertBefore()` und ähnlichen Mechanismen verschoben wird) nach dem Verschieben erhalten bleibt. Dazu gehören:

- [Animation](/de/docs/Web/CSS/CSS_animations) und [Übergangs](/de/docs/Web/CSS/CSS_transitions) Zustand.
- Der Ladezustand von {{htmlelement("iframe")}}.
- Interaktivitätszustände (zum Beispiel {{cssxref(":focus")}} und {{cssxref(":active")}}).
- [Vollbild](/de/docs/Web/API/Fullscreen_API) Elementzustand.
- Auf-/Zuklapppzustand von [Popovers](/de/docs/Web/API/Popover_API).
- Modalzustand von {{htmlelement("dialog")}} Elementen (modale Dialoge werden nicht geschlossen).

Der Abspielzustand von {{htmlelement("video")}} und {{htmlelement("audio")}} Elementen ist nicht in der obigen Liste enthalten, da diese Elemente ihren Zustand beibehalten, wenn sie entfernt und wieder eingefügt werden, unabhängig vom verwendeten Mechanismus.

Beim Beobachten von Änderungen am DOM mit einem [`MutationObserver`](/de/docs/Web/API/MutationObserver), werden Knoten, die mit `moveBefore()` verschoben wurden, mit einem [entfernten Knoten](/de/docs/Web/API/MutationRecord/removedNodes) und einem [hinzugefügten Knoten](/de/docs/Web/API/MutationRecord/addedNodes) aufgezeichnet.

### `moveBefore()` Einschränkungen

Es gibt einige Einschränkungen, die bei der Verwendung von `moveBefore()` beachtet werden müssen:

- Es kann nur funktionieren, wenn ein Knoten innerhalb desselben Dokumentfragments verschoben wird.
- Es funktioniert nicht, wenn Sie versuchen, einen Knoten zu verschieben, der bereits zum DOM hinzugefügt wurde, in ein `DocumentFragment`.

In solchen Fällen schlägt `moveBefore()` mit einer `HierarchyRequestError` Ausnahme fehl. Wenn die oben genannten Einschränkungen Anforderungen für Ihren speziellen Anwendungsfall sind, sollten Sie stattdessen [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) verwenden oder [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) verwenden, um die beim Auftreten solcher Fehler entstehenden Ausnahmen zu behandeln.

## Beispiele

### Grundlegende Nutzung von `moveBefore()`

In diesem Demo veranschaulichen wir die grundlegende Verwendung von `moveBefore()`.

#### HTML

Das HTML enthält drei {{htmlelement("button")}} Elemente und ein {{htmlelement("article")}} Element. Wir werden die Schaltflächen verwenden, um `DocumentFragment` Instanzen in das `<article>` einzufügen und es zu leeren.

```html live-sample___movebefore-basic
<button id="insert1">Insert fragment</button>
<button id="insert2">Insert modified fragment</button>
<button id="clear">Clear</button>
<article id="wrapper"></article>
```

#### CSS

Wir bieten einige rudimentäre Stilvorlagen für das Aussehen, das Gefühl und die Abstände von Elementen, die später als Kinder von JavaScript-generierten `DocumentFragment`s in die Seite eingefügt werden, an.

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

Wir fügen dann jedem `<button>` einen Klick-Ereignis-Listener über [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzu:

- Der erste Button fügt das `DocumentFragment` dem `#wrapper` `<article>` Element unverändert hinzu.
- Der zweite Button fügt das `DocumentFragment` dem `#wrapper` `<article>` Element hinzu, verschiebt aber zuerst das `<div>` mit `moveBefore()`, damit es das zweite Kind des `DocumentFragment` statt des ersten ist.
- Der dritte Button leert das `#wrapper` `<article>` Element mit [`innerHTML`](/de/docs/Web/API/Element/innerHTML).

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

Das gerenderte Beispiel sieht folgendermaßen aus:

{{EmbedLiveSample("movebefore-basic", "100%", "300px")}}

Probieren Sie, die ersten beiden Schaltflächen mehrmals zu klicken und beachten Sie, wie die Struktur des `DocumentFragment`s durch den zweiten Button verändert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.moveBefore()`](/de/docs/Web/API/Document/moveBefore)
- [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore)
- [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)
