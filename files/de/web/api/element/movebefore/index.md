---
title: "Element: moveBefore() Methode"
short-title: moveBefore()
slug: Web/API/Element/moveBefore
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{APIRef("DOM")}}

Die **`moveBefore()`** Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces verschiebt einen angegebenen [`Node`](/de/docs/Web/API/Node) als direktes Kind innerhalb des aufrufenden Knotens vor einen gegebenen Referenzknoten.

## Syntax

```js-nolint
moveBefore(movedNode, referenceNode)
```

### Parameter

- `movedNode`
  - : Ein [`Node`](/de/docs/Web/API/Node), der den zu verschiebenden Knoten repräsentiert. Beachten Sie, dass dies ein [`Element`](/de/docs/Web/API/Element) oder ein [`CharacterData`](/de/docs/Web/API/CharacterData)-Knoten sein muss.
- `referenceNode`
  - : Ein [`Node`](/de/docs/Web/API/Node), vor dem `movedNode` bewegt wird, oder `null`. Ist der Wert `null`, wird `movedNode` am Ende der Kindknoten des aufrufenden Knotens eingefügt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` {{jsxref("TypeError")}}
  - : Wird in einer der folgenden Situationen ausgelöst:
    - Der angegebene `movedNode` ist nicht Teil des DOM, und Sie versuchen, ihn in einen Knoten zu verschieben, der Teil des DOM ist, oder umgekehrt.
    - Der angegebene `movedNode` ist ein Vorfahre des Elements, auf dem `moveBefore()` aufgerufen wird.
    - Sie versuchen, `movedNode` zwischen zwei verschiedenen Dokumenten zu verschieben.
    - Der angegebene `movedNode` ist kein [`Element`](/de/docs/Web/API/Element) oder [`CharacterData`](/de/docs/Web/API/CharacterData)-Knoten.
- `NotFoundError` {{jsxref("TypeError")}}
  - : Der angegebene `referenceNode` ist kein Kind des Knotens, auf dem Sie `moveBefore()` aufrufen, also des Knotens, in den Sie `movedNode` verschieben wollen.
- `TypeError` {{jsxref("TypeError")}}
  - : Das zweite Argument wurde nicht angegeben.

## Beschreibung

Die `moveBefore()`-Methode verschiebt einen angegebenen Knoten an eine neue Stelle im DOM. Sie bietet ähnliche Funktionalität wie die [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)-Methode, entfernt und fügt den Knoten jedoch nicht erneut ein. Dies bedeutet, dass der Zustand des Knotens (der zurückgesetzt würde, wenn er mit `insertBefore()` und ähnlichen Mechanismen verschoben würde) nach dem Verschieben erhalten bleibt. Zu diesen Zuständen gehören:

- [Animation](/de/docs/Web/CSS/CSS_animations) und [Transition](/de/docs/Web/CSS/CSS_transitions)-Zustand.
- {{htmlelement("iframe")}}-Ladezustand.
- Interaktivitätszustände (z. B. {{cssxref(":focus")}} und {{cssxref(":active")}}).
- [Fullscreen](/de/docs/Web/API/Fullscreen_API)-Elementzustand.
- Offen-/Geschlossen-Zustand von [Popovers](/de/docs/Web/API/Popover_API).
- Modalzustand von {{htmlelement("dialog")}}-Elementen (modale Dialoge werden nicht geschlossen).

Der Wiedergabestatus von {{htmlelement("video")}} und {{htmlelement("audio")}}-Elementen ist nicht in der obigen Liste enthalten, da diese Elemente ihren Zustand behalten, wenn sie entfernt und wieder eingefügt werden, unabhängig vom verwendeten Mechanismus.

Beim Beobachten von Änderungen am DOM mit einem [`MutationObserver`](/de/docs/Web/API/MutationObserver) werden mit `moveBefore()` verschobene Knoten als [entfernter Knoten](/de/docs/Web/API/MutationRecord/removedNodes) und als [hinzugefügter Knoten](/de/docs/Web/API/MutationRecord/addedNodes) registriert.

### `moveBefore()` Einschränkungen

Es gibt einige Einschränkungen, die bei der Verwendung von `moveBefore()` zu beachten sind:

- Es funktioniert nur, wenn Sie einen Knoten innerhalb desselben Dokuments verschieben.
- Es funktioniert nicht, wenn Sie versuchen, einen Knoten zu verschieben, der nicht mit dem DOM verbunden ist, zu einem bereits verbundenen Elternknoten, oder umgekehrt.

In solchen Fällen schlägt `moveBefore()` mit einem `HierarchyRequestError`-Fehler fehl. Wenn die obigen Einschränkungen Anforderungen für Ihren speziellen Anwendungsfall darstellen, sollten Sie stattdessen [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) verwenden, oder [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) verwenden, um die Fehler zu behandeln, die aus solchen Fällen resultieren.

### Verschiebung von benutzerdefinierten Elementen unter Erhaltung des Zustands

Jedes Mal, wenn die Position eines [benutzerdefinierten Elements](/de/docs/Web/API/Web_components/Using_custom_elements) im DOM durch `Element.moveBefore()` oder ähnliche Methoden wie [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) aktualisiert wird, werden seine `disconnectedCallback()`- und `connectedCallback()`-Lebenszyklus-Callbacks ausgeführt. Da diese Callbacks typischerweise verwendet werden, um jeglichen erforderlichen Initialisierungs- oder Reinigungscode zu implementieren, der zu Beginn oder am Ende des Lebenszyklus des Elements ausgeführt wird, kann das Ausführen dieser Callbacks, wenn das Element verschoben (und nicht entfernt oder eingefügt) wird, Probleme mit seinem Zustand verursachen.

Sie können das `connectedMoveCallback()`-Callback verwenden, um den Zustand eines benutzerdefinierten Elements zu erhalten. Wenn Sie `moveBefore()` verwenden, um ein benutzerdefiniertes Element zu verschieben, wird `connectedMoveCallback()` anstelle von `connectedCallback()` und `disconnectedCallback()` ausgeführt.

Siehe [Verschieben von benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements#lifecycle_callbacks_and_state-preserving_moves) für weitere Informationen.

## Beispiele

### Grundlegende Nutzung von `moveBefore()`

In diesem Demo veranschaulichen wir die grundlegende Nutzung von `moveBefore()`.

#### HTML

Das HTML enthält ein {{htmlelement("article")}}-Element, das ein {{htmlelement("div")}}-Element und zwei {{htmlelement("section")}}-Elemente beinhaltet. Das `<div>` enthält einen {{htmlelement("button")}}, den wir später verwenden, um es zu verschieben.

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

Wir bieten einige grundlegende Stile für das Aussehen und den Abstand der Boxen und verwenden das [Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout), um deren Inhalt zu zentrieren.

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

In unserem Skript hängen wir einen Klick-Event-Listener an den `<button>` mittels [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) an. Wenn der Button geklickt wird, prüfen wir, ob das [`nextElementSibling`](/de/docs/Web/API/Element/nextElementSibling) unseres `mover`-`<div>` das erste `<section>`-Element ist. Falls ja, rufen wir `moveBefore()` im `wrapper`-`<article>` auf und geben an, dass das `<div>` vor dem zweiten `<section>` bewegt wird. Andernfalls verwenden wir `moveBefore()`, um das `<div>` vor das erste `<section>` zu verschieben.

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

Das gerenderte Beispiel sieht so aus:

{{EmbedLiveSample("movebefore-basic", "100%", "300px")}}

Versuchen Sie, den `<button>` einige Male zu klicken und beobachten Sie, wie er zwischen den beiden Positionen wechselt.

### Demonstration der Zustandserhaltung

In diesem Demo bieten wir mehrere Mechanismen, um ein `<div>`-Element mit einem YouTube-Embed zwischen zwei verschiedenen Containern zu verschieben, und demonstrieren, wie `moveBefore()` den Wiedergabestatus des Embeds bewahrt, aber die anderen Mechanismen nicht.

#### HTML

Das HTML enthält ein {{htmlelement("article")}}-Element mit zwei {{htmlelement("section")}}-Elementen. Das erste `<section>`-Element enthält ein {{htmlelement("div")}}-Element mit dem YouTube-Embed-Code. Wir haben auch ein {{htmlelement("div")}}-Element, das drei {{htmlelement("button")}}-Elemente enthält, denen wir später mit JavaScript Funktionalitäten hinzufügen, um das Embed-`<div>` zwischen den Abschnitten zu verschieben.

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
  <button id="move-before">move with <code>moveBefore()</code></button>
  <button id="insertbefore">move with <code>insertBefore()</code></button>
  <button id="prepend">move with <code>prepend()</code></button>
</div>
```

#### CSS

Wir verwenden das [Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) für das Layout, um die beiden `<section>`-Elemente nebeneinander zu platzieren und die Buttons gleichmäßig innerhalb des `controls`-`<div>` zu verteilen.

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

In unserem Skript hängen wir `click`-Event-Listener an jedem `<button>` mittels [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) an. Wenn die Buttons geklickt werden, prüfen wir, welches `<section>`-Element das [`parentElement`](/de/docs/Web/API/Node/parentElement) unseres Embed-`<div>` ist, und verwenden dann die entsprechende Funktion (`moveBefore()`, [`insertBefore()`](/de/docs/Web/API/Node/insertBefore), oder [`prepend()`](/de/docs/Web/API/Element/prepend)), um es im _anderen_ `<section>`-Element zu verschieben.

```js live-sample___movebefore-state
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const mover = document.getElementById("mover");
const moveBeforeBtn = document.getElementById("move-before");
const insertbeforeBtn = document.getElementById("insertbefore");
const prependBtn = document.getElementById("prepend");

moveBeforeBtn.addEventListener("click", () => {
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

Das gerenderte Beispiel sieht so aus:

{{EmbedLiveSample("movebefore-state", "100%", "260px")}}

Versuchen Sie, das YouTube-Embed abzuspielen und dann jeden `<button>` ein paar Mal zu klicken, um die Bildschirmposition des `<div>`-Elements von links nach rechts zu wechseln. Beachten Sie, wie im Fall von `insertBefore()` und `prepend()` der Embed-Zustand nach jedem Verschieben zurückgesetzt wird, sodass er neu gestartet werden muss. Im Fall von `moveBefore()` wird der Zustand nach jedem Verschieben jedoch beibehalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.moveBefore()`](/de/docs/Web/API/Document/moveBefore)
- [`DocumentFragment.moveBefore()`](/de/docs/Web/API/DocumentFragment/moveBefore)
- [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)
