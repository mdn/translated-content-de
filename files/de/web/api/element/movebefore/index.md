---
title: "Element: moveBefore() Methode"
short-title: moveBefore()
slug: Web/API/Element/moveBefore
l10n:
  sourceCommit: cf16851e73da29823438198c4f0efcb7026b7d10
---

{{APIRef("DOM")}}

Die **`moveBefore()`** Methode des [`Element`](/de/docs/Web/API/Element) Interface verschiebt einen angegebenen [`Node`](/de/docs/Web/API/Node) innerhalb des aufrufenden Knotens als direkten Kindknoten vor einem angegebenen Referenzknoten.

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
    - Der angegebene `movedNode` ist nicht Teil des DOMs, und Sie versuchen, ihn in einen Knoten zu verschieben, der Teil des DOMs ist, oder umgekehrt.
    - Der angegebene `movedNode` ist ein Vorfahre des Elements, auf dem `moveBefore()` aufgerufen wird.
    - Sie versuchen, `movedNode` zwischen zwei verschiedenen Dokumenten zu verschieben.
    - Der angegebene `movedNode` ist kein [`Element`](/de/docs/Web/API/Element) oder [`CharacterData`](/de/docs/Web/API/CharacterData) Knoten.
- `NotFoundError` {{jsxref("TypeError")}}
  - : Der angegebene `referenceNode` ist kein Kind des Knotens, auf dem Sie `moveBefore()` aufrufen, das heißt, der Knoten, in den Sie `movedNode` verschieben möchten.
- `TypeError` {{jsxref("TypeError")}}
  - : Das zweite Argument wurde nicht bereitgestellt.

## Beschreibung

Die `moveBefore()` Methode verschiebt einen angegebenen Knoten an eine neue Stelle im DOM. Sie bietet ähnliche Funktionalität wie die Methode [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore), mit dem Unterschied, dass sie den Knoten nicht entfernt und dann wieder einfügt. Das bedeutet, dass der Zustand des Knotens (der zurückgesetzt würde, wenn er mit `insertBefore()` und ähnlichen Mechanismen verschoben wird) nach dem Verschieben erhalten bleibt. Das schließt ein:

- [Animation](/de/docs/Web/CSS/CSS_animations) und [Übergangs](/de/docs/Web/CSS/CSS_transitions) Zustand.
- Ladezustand eines {{htmlelement("iframe")}}.
- Interaktivitätszustände (zum Beispiel {{cssxref(":focus")}} und {{cssxref(":active")}}).
- [Vollbild](/de/docs/Web/API/Fullscreen_API) Elementzustand.
- Offen/geschlossen Zustand von [Popovern](/de/docs/Web/API/Popover_API).
- Modaler Zustand von {{htmlelement("dialog")}} Elementen (modale Dialoge werden nicht geschlossen).

Der Wiedergabezustand von {{htmlelement("video")}} und {{htmlelement("audio")}} Elementen ist nicht in der obigen Liste enthalten, da diese Elemente ihren Zustand behalten, wenn sie entfernt und wieder eingefügt werden, unabhängig davon, welcher Mechanismus verwendet wird.

Wenn Sie Änderungen am DOM mit einem [`MutationObserver`](/de/docs/Web/API/MutationObserver) beobachten, werden Knoten, die mit `moveBefore()` bewegt werden, als [entfernter Knoten](/de/docs/Web/API/MutationRecord/removedNodes) und [hinzugefügter Knoten](/de/docs/Web/API/MutationRecord/addedNodes) aufgezeichnet.

### `moveBefore()` Einschränkungen

Es gibt einige Einschränkungen, die Sie beim Verwenden von `moveBefore()` beachten sollten:

- Es kann nur funktionieren, wenn ein Knoten innerhalb desselben Dokuments verschoben wird.
- Es funktioniert nicht, wenn Sie versuchen, einen Knoten, der nicht mit dem DOM verbunden ist, zu einem bereits verbundenen Elternknoten zu verschieben, oder umgekehrt.

In solchen Fällen wird `moveBefore()` mit einer `HierarchyRequestError` Ausnahme fehlschlagen. Wenn die oben genannten Einschränkungen Anforderungen für Ihren speziellen Anwendungsfall sind, sollten Sie stattdessen [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) verwenden oder [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) nutzen, um die auftretenden Fehler zu behandeln.

### Bewegen von benutzerdefinierten Elementen unter Erhaltung des Zustands

Jedes Mal, wenn die Position eines [benutzerdefinierten Elements](/de/docs/Web/API/Web_components/Using_custom_elements) im DOM über `Element.moveBefore()` oder ähnliche Methoden wie [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) aktualisiert wird, werden seine `disconnectedCallback()` und `connectedCallback()` Lebenszyklus-Callbacks ausgelöst. Da diese Callbacks typischerweise verwendet werden, um jegliche erforderlichen Initialisierungs- oder Aufräumarbeiten am Anfang oder Ende des Lebenszyklus des Elements auszuführen, könnte das Auslösen dieser Callbacks beim Verschieben (anstatt beim Entfernen oder Einfügen) Probleme mit ihrem Zustand verursachen.

Sie können den `connectedMoveCallback()` Callback verwenden, um den Zustand eines benutzerdefinierten Elements zu bewahren. Wenn Sie `moveBefore()` verwenden, um ein benutzerdefiniertes Element zu verschieben, wird `connectedMoveCallback()` statt `connectedCallback()` und `disconnectedCallback()` ausgeführt.

Weitere Informationen finden Sie unter [Bewegen von benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements#lifecycle_callbacks_and_state-preserving_moves).

## Beispiele

### Grundlegende Verwendung von `moveBefore()`

In diesem Demo veranschaulichen wir die grundlegende Verwendung von `moveBefore()`.

#### HTML

Das HTML enthält ein {{htmlelement("article")}} Element, das ein {{htmlelement("div")}} Element und zwei {{htmlelement("section")}} Elemente enthält. Das `<div>` enthält ein {{htmlelement("button")}}, das wir später verwenden werden, um es zu bewegen.

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

Wir stellen einige rudimentäre Stilvorlagen für das Aussehen und den Abstand der Boxen bereit und verwenden [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), um den Inhalt zu zentrieren.

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

In unserem Skript fügen wir über [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) einen Klick-Eventlistener zu dem `<button>` hinzu. Wenn der Button geklickt wird, überprüfen wir, ob das [`nextElementSibling`](/de/docs/Web/API/Element/nextElementSibling) unseres `mover` `<div>` das erste `<section>` Element ist. Wenn ja, rufen wir `moveBefore()` auf dem `wrapper` `<article>` auf und geben an, dass wir das `<div>` vor dem zweiten `<section>` verschieben sollen. Andernfalls verwenden wir `moveBefore()`, um das `<div>` vor das erste `<section>` zu verschieben.

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

Versuchen Sie, mehrmals auf den `<button>` zu klicken und beachten Sie, wie er zwischen den beiden Positionen umschaltet.

### Demonstration der Zustandserhaltung

In diesem Demo bieten wir mehrere Mechanismen an, um ein `<div>` Element mit einem YouTube-Embed-Code zwischen zwei verschiedenen Containern zu bewegen, wobei gezeigt wird, wie `moveBefore()` den Wiedergabestatus des Embeds beibehält, während die anderen Mechanismen dies nicht tun.

#### HTML

Das HTML enthält ein {{htmlelement("article")}} Element, das zwei {{htmlelement("section")}} Elemente umfasst. Das erste `<section>` Element enthält ein {{htmlelement("div")}} Element mit dem YouTube-Embed-Code. Wir haben auch ein {{htmlelement("div")}} Element mit drei {{htmlelement("button")}} Elementen, denen wir später in JavaScript Funktionen hinzufügen, um das Embed-`<div>` zwischen Abschnitten zu bewegen.

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

Wir verwenden [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) für das Layout, um die beiden `<section>` Elemente nebeneinander zu platzieren und die Buttons gleichmäßig innerhalb des `controls` `<div>` zu verteilen.

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

In unserem Skript fügen wir jedem `<button>` über [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) `click` Eventlistener hinzu. Wenn die Buttons geklickt werden, überprüfen wir, welches `<section>` Element das [`parentElement`](/de/docs/Web/API/Node/parentElement) unseres Embed-`<div>` ist, und verwenden dann die relevante Funktion (`moveBefore()`, [`insertBefore()`](/de/docs/Web/API/Node/insertBefore) oder [`prepend()`](/de/docs/Web/API/Element/prepend)), um es in das _andere_ `<section>` Element zu bewegen.

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

Versuchen Sie, das YouTube-Embed abzuspielen und dann jeden `<button>` ein paar Mal zu klicken, um die Bildschirmposition des `<div>` Elements von links nach rechts zu wechseln. Beachten Sie, dass im Falle von `insertBefore()` und `prepend()` der Embed-Zustand nach jedem Verschieben zurückgesetzt wird, sodass er neu gestartet werden muss. Im Fall von `moveBefore()` bleibt der Zustand nach jedem Verschieben erhalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.moveBefore()`](/de/docs/Web/API/Document/moveBefore)
- [`DocumentFragment.moveBefore()`](/de/docs/Web/API/DocumentFragment/moveBefore)
- [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)
