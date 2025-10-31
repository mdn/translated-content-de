---
title: "Element: moveBefore() Methode"
short-title: moveBefore()
slug: Web/API/Element/moveBefore
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{APIRef("DOM")}}

Die **`moveBefore()`** Methode der [`Element`](/de/docs/Web/API/Element) Schnittstelle verschiebt einen gegebenen [`Node`](/de/docs/Web/API/Node) innerhalb des aufrufenden Knotens als direktes Kind vor einen angegebenen Referenzknoten.

## Syntax

```js-nolint
moveBefore(movedNode, referenceNode)
```

### Parameter

- `movedNode`
  - : Ein [`Node`](/de/docs/Web/API/Node), der den zu verschiebenden Knoten repräsentiert. Beachten Sie, dass dies ein [`Element`](/de/docs/Web/API/Element) oder ein [`CharacterData`](/de/docs/Web/API/CharacterData) Knoten sein muss.
- `referenceNode`
  - : Ein [`Node`](/de/docs/Web/API/Node), vor dem `movedNode` verschoben wird, oder `null`. Wenn der Wert `null` ist, wird `movedNode` am Ende der Kindknoten des aufrufenden Knotens eingefügt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` {{jsxref("TypeError")}}
  - : Wird in einer der folgenden Situationen ausgelöst:
    - Der angegebene `movedNode` ist nicht Teil des DOM, und Sie versuchen, ihn in einen Knoten zu verschieben, der Teil des DOM ist, oder umgekehrt.
    - Der angegebene `movedNode` ist ein Vorfahre des Elements, auf dem `moveBefore()` aufgerufen wird.
    - Sie versuchen, `movedNode` zwischen zwei verschiedenen Dokumenten zu verschieben.
    - Der angegebene `movedNode` ist kein [`Element`](/de/docs/Web/API/Element) oder [`CharacterData`](/de/docs/Web/API/CharacterData) Knoten.
- `NotFoundError` {{jsxref("TypeError")}}
  - : Der angegebene `referenceNode` ist kein Kind des Knotens, auf dem Sie `moveBefore()` aufrufen, d.h. des Knotens, in den Sie `movedNode` verschieben möchten.
- `TypeError` {{jsxref("TypeError")}}
  - : Das zweite Argument wurde nicht bereitgestellt.

## Beschreibung

Die `moveBefore()` Methode verschiebt einen gegebenen Knoten an eine neue Position im DOM. Sie bietet ähnliche Funktionalität wie die [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) Methode, außer dass der Knoten nicht entfernt und dann wieder eingefügt wird. Dies bedeutet, dass der Zustand des Knotens (der zurückgesetzt würde, wenn er mit `insertBefore()` und ähnlichen Mechanismen verschoben wird) nach der Verschiebung erhalten bleibt. Dies umfasst:

- [Animation](/de/docs/Web/CSS/CSS_animations) und [Transition](/de/docs/Web/CSS/CSS_transitions) Zustand.
- Ladezustand von {{htmlelement("iframe")}}.
- Interaktivitätszustände (zum Beispiel {{cssxref(":focus")}} und {{cssxref(":active")}}).
- [Vollbild](/de/docs/Web/API/Fullscreen_API) Element Zustand.
- Offen/Geschlossen-Zustand von [Popovers](/de/docs/Web/API/Popover_API).
- Modaler Zustand von {{htmlelement("dialog")}} Elementen (modale Dialoge werden nicht geschlossen).

Der Wiedergabestatus von {{htmlelement("video")}} und {{htmlelement("audio")}} Elementen ist in der obigen Liste nicht enthalten, da diese Elemente ihren Zustand behalten, wenn sie entfernt und wieder eingefügt werden, unabhängig von dem verwendeten Mechanismus.

Beim Beobachten von Änderungen im DOM mit einem [`MutationObserver`](/de/docs/Web/API/MutationObserver) werden Knoten, die mit `moveBefore()` verschoben wurden, als [entfernte Knoten](/de/docs/Web/API/MutationRecord/removedNodes) und [hinzugefügte Knoten](/de/docs/Web/API/MutationRecord/addedNodes) aufgezeichnet.

### `moveBefore()` Einschränkungen

Es gibt einige Einschränkungen, die beim Verwenden von `moveBefore()` beachtet werden müssen:

- Es funktioniert nur beim Verschieben eines Knotens innerhalb desselben Dokuments.
- Es funktioniert nicht, wenn Sie versuchen, einen Knoten, der nicht mit dem DOM verbunden ist, in einen bereits verbundenen Elternknoten zu verschieben, oder umgekehrt.

In solchen Fällen schlägt `moveBefore()` mit einer `HierarchyRequestError` Ausnahme fehl. Wenn die oben genannten Einschränkungen Anforderungen für Ihren speziellen Anwendungsfall sind, sollten Sie stattdessen [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) verwenden oder [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) verwenden, um die sich aus solchen Fällen ergebenden Fehler zu behandeln.

### Verschieben von benutzerdefinierten Elementen unter Beibehaltung des Zustands

Jedes Mal, wenn die Position eines [benutzerdefinierten Elements](/de/docs/Web/API/Web_components/Using_custom_elements) im DOM über `Element.moveBefore()` oder ähnliche Methoden wie [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) aktualisiert wird, werden dessen `disconnectedCallback()` und `connectedCallback()` Lebenszyklus-Callbacks ausgelöst. Da diese Callbacks typischerweise verwendet werden, um jeglichen erforderlichen Initialisierungs- oder Aufräumcode auszuführen, der zu Beginn oder am Ende des Lebenszyklus des Elements ausgeführt werden muss, kann es zu Problemen mit dessen Zustand kommen, wenn sie beim Verschieben des Elements ausgelöst werden (anstatt beim Entfernen oder Einfügen).

Sie können das `connectedMoveCallback()` Callback verwenden, um den Zustand eines benutzerdefinierten Elements zu bewahren. Beim Verwenden von `moveBefore()` um ein benutzerdefiniertes Element zu verschieben, wird `connectedMoveCallback()` anstelle von `connectedCallback()` und `disconnectedCallback()` ausgeführt.

Siehe [Verschieben von benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements#lifecycle_callbacks_and_state-preserving_moves) für weitere Informationen.

## Beispiele

### Grundlegende Verwendung von `moveBefore()`

In diesem Beispiel demonstrieren wir die grundlegende Verwendung von `moveBefore()`.

#### HTML

Das HTML enthält ein {{htmlelement("article")}} Element, das ein {{htmlelement("div")}} Element und zwei {{htmlelement("section")}} Elemente enthält. Das `<div>` enthält eine {{htmlelement("button")}}, die wir später zum Verschieben verwenden.

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

Wir bieten ein einfaches Styling für das Aussehen und das Gefühl sowie den Abstand der Boxen, und verwenden [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), um ihren Inhalt zu zentrieren.

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

In unserem Skript hängen wir ein Klick-Event-Listener an die `<button>` an über [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener). Wenn der Button angeklickt wird, überprüfen wir, ob das [`nextElementSibling`](/de/docs/Web/API/Element/nextElementSibling) unserer `mover` `<div>` das erste `<section>` Element ist. Wenn ja, rufen wir `moveBefore()` auf dem `wrapper` `<article>` auf und spezifizieren, das `<div>` vor dem zweiten `<section>` zu verschieben. Wenn nicht, verwenden wir `moveBefore()`, um das `<div>` vor das erste `<section>` zu verschieben.

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

Versuchen Sie, ein paar Mal auf das `<button>` zu klicken und beachten Sie, wie es zwischen den beiden Positionen umschaltet.

### Demonstration der Zustandserhaltung

In diesem Beispiel bieten wir mehrere Mechanismen, um ein `<div>` Element, das einen YouTube-Embed enthält, zwischen zwei verschiedenen Containern zu verschieben, um zu zeigen, wie `moveBefore()` den Wiedergabestatus des Embeds beibehält, während andere Mechanismen dies nicht tun.

#### HTML

Das HTML enthält ein {{htmlelement("article")}} Element mit zwei {{htmlelement("section")}} Elementen. Das erste `<section>` enthält ein {{htmlelement("div")}} Element, das den YouTube-Embed-Code enthält. Wir haben auch ein {{htmlelement("div")}} Element mit drei {{htmlelement("button")}} Elementen, denen wir später Funktionalität hinzufügen werden, um das Embed-`<div>` zwischen den Abschnitten über JavaScript zu verschieben.

```html live-sample___movebefore-state
<article id="wrapper">
  <section id="section1">
    <div id="mover">
      <iframe
        width="300"
        height="200"
        src="https://www.youtube.com/embed/XvoENpR9cCQ?si=o2i6MvxugD-O5yyv"
        title="YouTube video player"
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

Wir verwenden [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) für das Layout, um die beiden `<section>` Elemente nebeneinander zu platzieren, und verteilen die Buttons gleichmäßig im `controls` `<div>`.

```css live-sample___movebefore-state
#wrapper,
#controls {
  width: 100%;
  display: flex;
}

#wrapper {
  margin-bottom: 10px;
}

iframe {
  border: none;
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

In unserem Skript hängen wir `click`-Event-Listener an jeden `<button>` an über [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener). Wenn die Buttons angeklickt werden, überprüfen wir, welches `<section>` Element das [`parentElement`](/de/docs/Web/API/Node/parentElement) unseres Embed-`<div>` ist, und verwenden dann die entsprechende Funktion (`moveBefore()`, [`insertBefore()`](/de/docs/Web/API/Node/insertBefore) oder [`prepend()`](/de/docs/Web/API/Element/prepend)), um es in das _andere_ `<section>` Element zu verschieben.

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

Das gerenderte Beispiel sieht folgendermaßen aus:

{{EmbedLiveSample("movebefore-state", "100%", "260px")}}

Versuchen Sie, das YouTube-Embed abzuspielen, und klicken Sie dann ein paar Mal auf jeden `<button>`, um die Bildschirmposition des `<div>` von links nach rechts zu wechseln. Beachten Sie, wie im Fall von `insertBefore()` und `prepend()` der Embed-Status nach jeder Bewegung zurückgesetzt wird, sodass er neu gestartet werden muss. Im Fall von `moveBefore()` wird der Zustand nach jeder Bewegung beibehalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.moveBefore()`](/de/docs/Web/API/Document/moveBefore)
- [`DocumentFragment.moveBefore()`](/de/docs/Web/API/DocumentFragment/moveBefore)
- [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)
