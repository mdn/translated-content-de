---
title: "Element: moveBefore() Methode"
short-title: moveBefore()
slug: Web/API/Element/moveBefore
l10n:
  sourceCommit: fd1081dbbecd338a3ea55b03c187b6a60500408f
---

{{APIRef("DOM")}}

Die **`moveBefore()`** Methode des [`Element`](/de/docs/Web/API/Element) Interfaces verschiebt einen gegebenen [`Node`](/de/docs/Web/API/Node) innerhalb des aufrufenden Knotens als direktes Kind, vor einem angegebenen Referenzknoten.

## Syntax

```js-nolint
moveBefore(movedNode, referenceNode)
```

### Parameter

- `movedNode`
  - : Ein [`Node`](/de/docs/Web/API/Node), der den zu verschiebenden Knoten darstellt. Beachten Sie, dass dies ein [`Element`](/de/docs/Web/API/Element) oder ein [`CharacterData`](/de/docs/Web/API/CharacterData) Knoten sein muss.
- `referenceNode`
  - : Ein [`Node`](/de/docs/Web/API/Node), vor dem `movedNode` verschoben wird, oder `null`. Wenn der Wert `null` ist, wird `movedNode` am Ende der Kindknoten des aufrufenden Knotens eingefügt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` {{jsxref("TypeError")}}
  - : Wird in einer der folgenden Situationen ausgelöst:
    - Der angegebene `movedNode` ist nicht Teil des DOM, und Sie versuchen, ihn innerhalb eines Knotens zu verschieben, der Teil des DOM ist, oder umgekehrt.
    - Der angegebene `movedNode` ist ein Vorfahre des Elements, auf dem `moveBefore()` aufgerufen wird.
    - Sie versuchen, `movedNode` zwischen zwei verschiedenen Dokumenten zu verschieben.
    - Der angegebene `movedNode` ist kein [`Element`](/de/docs/Web/API/Element) oder [`CharacterData`](/de/docs/Web/API/CharacterData) Knoten.
- `NotFoundError` {{jsxref("TypeError")}}
  - : Der angegebene `referenceNode` ist kein Kind des Knotens, auf dem Sie `moveBefore()` aufrufen, also des Knotens, in den Sie `movedNode` verschieben möchten.
- `TypeError` {{jsxref("TypeError")}}
  - : Das zweite Argument wurde nicht angegeben.

## Beschreibung

Die `moveBefore()` Methode verschiebt einen gegebenen Knoten an eine neue Stelle im DOM. Sie bietet ähnliche Funktionalität wie die [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) Methode, mit dem Unterschied, dass der Knoten nicht entfernt und dann wieder eingefügt wird. Dies bedeutet, dass der Zustand des Knotens (der zurückgesetzt würde, wenn er mit `insertBefore()` und ähnlichen Mechanismen verschoben würde) nach der Verschiebung erhalten bleibt. Dies betrifft:

- [Animation](/de/docs/Web/CSS/CSS_animations) und [Transition](/de/docs/Web/CSS/CSS_transitions) Zustand.
- Ladezustand von {{htmlelement("iframe")}}.
- Interaktivitätszustände (zum Beispiel {{cssxref(":focus")}} und {{cssxref(":active")}}).
- [Fullscreen](/de/docs/Web/API/Fullscreen_API) Elementzustand.
- Offen/geschlossen Zustand von [Popovers](/de/docs/Web/API/Popover_API).
- Modalzustand von {{htmlelement("dialog")}} Elementen (modale Dialoge werden nicht geschlossen).

Der Wiedergabestatus von {{htmlelement("video")}} und {{htmlelement("audio")}} Elementen ist nicht in der obigen Liste enthalten, da diese Elemente ihren Zustand behalten, wenn sie entfernt und wieder eingefügt werden, unabhängig von dem verwendeten Mechanismus.

Beim Beobachten von Änderungen im DOM mittels eines [`MutationObserver`](/de/docs/Web/API/MutationObserver), werden Knoten, die mit `moveBefore()` verschoben wurden, mit einem [entfernten Knoten](/de/docs/Web/API/MutationRecord/removedNodes) und einem [hinzugefügten Knoten](/de/docs/Web/API/MutationRecord/addedNodes) aufgezeichnet.

### `moveBefore()` Einschränkungen

Es gibt einige Einschränkungen, die bei der Verwendung von `moveBefore()` zu beachten sind:

- Es kann nur verwendet werden, um einen Knoten innerhalb desselben Dokuments zu verschieben.
- Es wird nicht funktionieren, wenn Sie versuchen, einen Knoten, der nicht mit dem DOM verbunden ist, zu einem bereits verbundenen Elternteil zu verschieben oder umgekehrt.

In solchen Fällen schlägt `moveBefore()` mit einer `HierarchyRequestError` Ausnahme fehl. Wenn die obigen Einschränkungen für Ihren speziellen Anwendungsfall Anforderungen sind, sollten Sie stattdessen [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) verwenden oder [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) verwenden, um die Fehler zu behandeln, die in solchen Fällen auftreten.

### Verschieben von benutzerdefinierten Elementen mit Zustandserhaltung

Jedes Mal, wenn die Position eines [benutzerdefinierten Elements](/de/docs/Web/API/Web_components/Using_custom_elements) im DOM mit `Element.moveBefore()`, oder ähnlichen Methoden wie [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore), aktualisiert wird, werden seine `disconnectedCallback()` und `connectedCallback()` Lebenszyklus-Rückrufe ausgelöst. Da diese Rückrufe typischerweise verwendet werden, um den erforderlichen Initialisierungs- oder Bereinigungscode zu implementieren, der zu Beginn oder am Ende des Lebenszyklus des Elements ausgeführt werden soll, kann deren Ausführung beim Verschieben des Elements (anstatt beim Entfernen oder Einfügen) Probleme mit seinem Zustand verursachen.

Sie können den `connectedMoveCallback()` Rückruf verwenden, um den Zustand eines benutzerdefinierten Elements zu erhalten. Wenn Sie `moveBefore()` verwenden, um ein benutzerdefiniertes Element zu verschieben, wird `connectedMoveCallback()` anstelle von `connectedCallback()` und `disconnectedCallback()` ausgeführt.

Siehe [Verschieben von benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements#lifecycle_callbacks_and_state-preserving_moves) für weitere Informationen.

## Beispiele

### Grundlegende `moveBefore()` Nutzung

In diesem Beispiel veranschaulichen wir die grundlegende Nutzung von `moveBefore()`.

#### HTML

Das HTML enthält ein {{htmlelement("article")}} Element, das ein {{htmlelement("div")}} Element und zwei {{htmlelement("section")}} Elemente enthält. Das `<div>` enthält einen {{htmlelement("button")}}, den wir später verwenden, um es zu verschieben.

```html live-sample___movebefore-basic
<article id="wrapper">
  <div id="mover">
    <button>Move me!</button>
  </div>
  <section id="section1">
    <h2>Section 1</h2>
  </section>
  <section id="section2">
    <h2>Section 2</h2>
  </section>
</article>
```

#### CSS

Wir bieten einige grundlegende Styles für das Aussehen und den Abstand der Boxen und verwenden [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), um ihren Inhalt zu zentrieren.

```css live-sample___movebefore-basic
#section1,
#section2,
#mover {
  width: 200px;
  height: 80px;
  border: 5px solid rgb(0 0 0 / 0.25);
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
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

In unserem Skript fügen wir dem `<button>` einen Klick-Event-Listener über [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzu. Wenn der Button geklickt wird, überprüfen wir, ob das [`nextElementSibling`](/de/docs/Web/API/Element/nextElementSibling) unseres `mover` `<div>` das erste `<section>` Element ist. Wenn ja, rufen wir `moveBefore()` auf dem `wrapper` `<article>` auf und geben an, dass das `<div>` vor dem zweiten `<section>` verschoben werden soll. Andernfalls verwenden wir `moveBefore()`, um das `<div>` vor dem ersten `<section>` zu verschieben.

```js live-sample___movebefore-basic
const wrapper = document.getElementById("wrapper");
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const mover = document.getElementById("mover");
const moveBtn = document.querySelector("button");

moveBtn.addEventListener("click", () => {
  if (mover.nextElementSibling === section1) {
    wrapper.moveBefore(mover, section2);
  } else {
    wrapper.moveBefore(mover, section1);
  }
});
```

#### Ergebnis

Das gerenderte Beispiel sieht folgendermaßen aus:

{{EmbedLiveSample("movebefore-basic", "100%", "300px")}}

Versuchen Sie, den `<button>` ein paar Mal zu klicken und beobachten Sie, wie er zwischen den beiden Positionen wechselt.

### Demonstration der Zustandserhaltung

In diesem Beispiel bieten wir mehrere Mechanismen, um ein `<div>` Element, das ein YouTube-Embed enthält, zwischen zwei verschiedenen Containern zu verschieben und dabei zu demonstrieren, wie `moveBefore()` den Wiedergabestatus des Embeds erhält, während die anderen Mechanismen dies nicht tun.

#### HTML

Das HTML enthält ein {{htmlelement("article")}} Element, das zwei {{htmlelement("section")}} Elemente enthält. Das erste `<section>` Element enthält ein {{htmlelement("div")}} Element, das den YouTube-Embed-Code enthält. Wir haben auch ein {{htmlelement("div")}} Element, das drei {{htmlelement("button")}} Elemente enthält, denen wir später mit JavaScript Funktionalitäten hinzufügen, um das Embed-`<div>` zwischen den Abschnitten zu verschieben.

```html live-sample___movebefore-state
<article id="wrapper">
  <section id="section1">
    <div id="mover">
      <iframe
        width="300"
        height="200"
        src="https://www.youtube.com/embed/XvoENpR9cCQ?si=o2i6MvxugD-O5yyv"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen></iframe>
    </div>
  </section>
  <section id="section2"></section>
</article>
<div id="controls">
  <button id="movebefore">move with <code>moveBefore()</code></button>
  <button id="insertbefore">move with <code>insertBefore()</code></button>
  <button id="prepend">move with <code>prepend()</code></button>
</div>
```

#### CSS

Wir verwenden [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) für das Layout, um die beiden `<section>` Elemente nebeneinander zu platzieren, und platzieren die Buttons gleichmäßig im `controls` `<div>`.

```css live-sample___movebefore-state
#wrapper,
#controls {
  width: 100%;
  display: flex;
}

#wrapper {
  margin-bottom: 10px;
}

section {
  flex: 1;
  padding: 10px;
}

#controls {
  display: flex;
  justify-content: space-around;
}

#section1 {
  background-color: hotpink;
}

#section2 {
  background-color: orange;
}

#mover {
  max-width: 100%;
  background-color: black;
}
```

#### JavaScript

In unserem Skript fügen wir jedem `<button>` über [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) `click` Event-Listener hinzu. Wenn die Schaltflächen geklickt werden, prüfen wir, welches `<section>` Element das [`parentElement`](/de/docs/Web/API/Node/parentElement) unseres Embed-`<div>` ist, und verwenden dann die relevante Funktion (`moveBefore()`, [`insertBefore()`](/de/docs/Web/API/Node/insertBefore) oder [`prepend()`](/de/docs/Web/API/Element/prepend)), um es in das _andere_ `<section>` Element zu verschieben.

```js live-sample___movebefore-state
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const mover = document.getElementById("mover");
const movebeforeBtn = document.getElementById("movebefore");
const insertbeforeBtn = document.getElementById("insertbefore");
const prependBtn = document.getElementById("prepend");

movebeforeBtn.addEventListener("click", () => {
  if (mover.parentElement === section1) {
    section2.moveBefore(mover, null);
  } else {
    section1.moveBefore(mover, null);
  }
});

insertbeforeBtn.addEventListener("click", () => {
  if (mover.parentElement === section1) {
    section2.insertBefore(mover, null);
  } else {
    section1.insertBefore(mover, null);
  }
});

prependBtn.addEventListener("click", () => {
  if (mover.parentElement === section1) {
    section2.prepend(mover);
  } else {
    section1.prepend(mover);
  }
});
```

#### Ergebnis

Das gerenderte Beispiel sieht folgendermaßen aus:

{{EmbedLiveSample("movebefore-state", "100%", "260px")}}

Versuchen Sie, das YouTube-Embed zu starten und dann einige Male auf jeden `<button>` zu klicken, um die Bildschirmposition des `<div>` Elements von links nach rechts zu wechseln. Beachten Sie, wie im Fall von `insertBefore()` und `prepend()` der Embed-Zustand nach jeder Verschiebung zurückgesetzt wird und neu gestartet werden muss. Im Fall von `moveBefore()` bleibt der Zustand jedoch nach jeder Verschiebung erhalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.moveBefore()`](/de/docs/Web/API/Document/moveBefore)
- [`DocumentFragment.moveBefore()`](/de/docs/Web/API/DocumentFragment/moveBefore)
- [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)
