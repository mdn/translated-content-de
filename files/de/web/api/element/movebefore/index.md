---
title: "Element: Methode moveBefore()"
short-title: moveBefore()
slug: Web/API/Element/moveBefore
l10n:
  sourceCommit: 725b7287559af48539da6e570fb85cae8c29041e
---

{{APIRef("DOM")}}

Die Methode **`moveBefore()`** des Interfaces [`Element`](/de/docs/Web/API/Element) verschiebt einen angegebenen [`Node`](/de/docs/Web/API/Node) innerhalb des aufrufenden Knotens als direktes Kindelement vor einen angegebenen Referenzknoten.

## Syntax

```js-nolint
moveBefore(movedNode, referenceNode)
```

### Parameter

- `movedNode`
  - : Ein [`Node`](/de/docs/Web/API/Node), der den zu verschiebenden Knoten darstellt. Beachten Sie, dass dies ein [`Element`](/de/docs/Web/API/Element)- oder [`CharacterData`](/de/docs/Web/API/CharacterData)-Knoten sein muss.
- `referenceNode`
  - : Ein [`Node`](/de/docs/Web/API/Node), vor den `movedNode` verschoben wird, oder `null`. Wenn der Wert `null` ist, wird `movedNode` am Ende der Kindknoten des aufrufenden Knotens eingefügt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird in einer der folgenden Situationen ausgelöst:
    - Der angegebene `movedNode` ist nicht Teil des DOM und Sie versuchen, ihn in einen Knoten zu verschieben, der Teil des DOM ist, oder umgekehrt.
    - Der angegebene `movedNode` ist ein Vorgänger des `Element`, auf dem `moveBefore()` aufgerufen wird.
    - Sie versuchen, `movedNode` zwischen zwei verschiedenen Dokumenten zu verschieben.
    - Der angegebene `movedNode` ist kein [`Element`](/de/docs/Web/API/Element)- oder [`CharacterData`](/de/docs/Web/API/CharacterData)-Knoten.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der angegebene `referenceNode` ist kein Kindknoten des Knotens, auf dem Sie `moveBefore()` aufrufen, also des Knotens, in den Sie `movedNode` zu verschieben versuchen.
- {{jsxref("TypeError")}}
  - : Das zweite Argument wurde nicht angegeben.

## Beschreibung

Die Methode `moveBefore()` verschiebt einen angegebenen Knoten an eine neue Position im DOM. Sie bietet eine ähnliche Funktionalität wie die Methode [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore), entfernt den Knoten jedoch nicht und fügt ihn anschließend wieder ein. Das bedeutet, dass der Zustand des Knotens (der beim Verschieben mit `insertBefore()` und ähnlichen Mechanismen zurückgesetzt würde) nach dem Verschieben erhalten bleibt. Dazu gehören:

- Der Zustand von [Animationen](/de/docs/Web/CSS/Guides/Animations) und [Transitions](/de/docs/Web/CSS/Guides/Transitions).
- Der Ladezustand von {{htmlelement("iframe")}}.
- Interaktivitätszustände (zum Beispiel {{cssxref(":focus")}} und {{cssxref(":active")}}).
- Der Zustand eines [Vollbild](/de/docs/Web/API/Fullscreen_API)-Elements.
- Der Offen-/Geschlossen-Zustand von [Popovers](/de/docs/Web/API/Popover_API).
- Der modale Zustand von {{htmlelement("dialog")}}-Elementen (modale Dialoge werden nicht geschlossen).

Der Wiedergabezustand von {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elementen ist nicht in der obigen Liste enthalten, da diese Elemente ihren Zustand beim Entfernen und erneuten Einfügen unabhängig vom verwendeten Mechanismus beibehalten.

Wenn Sie Änderungen am DOM mithilfe eines [`MutationObserver`](/de/docs/Web/API/MutationObserver) beobachten, werden mit `moveBefore()` verschobene Knoten mit einem [entfernten Knoten](/de/docs/Web/API/MutationRecord/removedNodes) und einem [hinzugefügten Knoten](/de/docs/Web/API/MutationRecord/addedNodes) erfasst.

### Einschränkungen von `moveBefore()`

Bei der Verwendung von `moveBefore()` sind einige Einschränkungen zu beachten:

- Es funktioniert nur beim Verschieben eines Knotens innerhalb desselben Dokuments.
- Es funktioniert nicht, wenn Sie versuchen, einen Knoten, der nicht mit dem DOM verbunden ist, in ein bereits verbundenes Elternelement zu verschieben, oder umgekehrt.

In solchen Fällen schlägt `moveBefore()` mit einer `HierarchyRequestError`-Ausnahme fehl. Wenn die oben genannten Einschränkungen Anforderungen für Ihren speziellen Anwendungsfall sind, sollten Sie stattdessen [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) verwenden oder [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) einsetzen, um die Fehler zu behandeln, die in solchen Fällen auftreten.

### Verschieben benutzerdefinierter Elemente unter Beibehaltung des Zustands

Jedes Mal, wenn die Position eines [benutzerdefinierten Elements](/de/docs/Web/API/Web_components/Using_custom_elements) im DOM über `Element.moveBefore()` oder ähnliche Methoden wie [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) aktualisiert wird, werden seine Lebenszyklus-Callbacks `disconnectedCallback()` und `connectedCallback()` ausgelöst. Da diese Callbacks typischerweise verwendet werden, um erforderlichen Initialisierungs- oder Bereinigungscode auszuführen, der am Anfang oder Ende des Lebenszyklus des Elements ausgeführt werden soll, kann ihre Ausführung beim Verschieben des Elements (statt beim Entfernen oder Einfügen) Probleme mit seinem Zustand verursachen.

Sie können den Callback `connectedMoveCallback()` verwenden, um den Zustand eines benutzerdefinierten Elements beizubehalten. Wenn Sie `moveBefore()` verwenden, um ein benutzerdefiniertes Element zu verschieben, wird `connectedMoveCallback()` anstelle von `connectedCallback()` und `disconnectedCallback()` ausgeführt.

Weitere Informationen finden Sie unter [Verschieben benutzerdefinierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements#lifecycle_callbacks_and_state-preserving_moves).

## Beispiele

### Grundlegende Verwendung von `moveBefore()`

In dieser Demo veranschaulichen wir die grundlegende Verwendung von `moveBefore()`.

#### HTML

Das HTML enthält ein {{htmlelement("article")}}-Element mit einem {{htmlelement("div")}}-Element und zwei {{htmlelement("section")}}-Elementen. Das `<div>` enthält ein {{htmlelement("button")}}, das wir später verwenden, um es zu verschieben.

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

Wir stellen einige einfache Stilregeln für das Erscheinungsbild und die Abstände der Kästen bereit und verwenden [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout), um deren Inhalt zu zentrieren.

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

In unserem Skript fügen wir dem `<button>` über [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) einen `click`-Event-Listener hinzu. Wenn auf die Schaltfläche geklickt wird, überprüfen wir, ob der [`nextElementSibling`](/de/docs/Web/API/Element/nextElementSibling) unseres `mover`-`<div>` das erste `<section>`-Element ist. Falls ja, rufen wir `moveBefore()` auf dem `wrapper`-`<article>` auf und geben an, dass das `<div>` vor das zweite `<section>` verschoben werden soll. Andernfalls verwenden wir `moveBefore()`, um das `<div>` vor das erste `<section>` zu verschieben.

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

Klicken Sie einige Male auf den `<button>` und beachten Sie, wie er zwischen den beiden Positionen wechselt.

### Demonstration der Zustandserhaltung

In dieser Demo stellen wir mehrere Mechanismen bereit, um ein `<div>`-Element mit einer eingebetteten YouTube-Anwendung zwischen zwei verschiedenen Containern zu verschieben. Dabei wird gezeigt, wie `moveBefore()` den Wiedergabezustand der Einbettung beibehält, die anderen Mechanismen jedoch nicht.

#### HTML

Das HTML enthält ein {{htmlelement("article")}}-Element mit zwei {{htmlelement("section")}}-Elementen. Das erste `<section>`-Element enthält ein {{htmlelement("div")}}-Element, das den YouTube-Einbettungscode enthält. Außerdem haben wir ein {{htmlelement("div")}}-Element mit drei {{htmlelement("button")}}-Elementen, denen wir später per JavaScript Funktionalität hinzufügen werden, um das eingebettete `<div>` zwischen den Abschnitten zu verschieben.

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

Für das Layout verwenden wir [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout), damit die beiden `<section>`-Elemente nebeneinander stehen, und verteilen die Schaltflächen gleichmäßig innerhalb des `controls`-`<div>`.

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

In unserem Skript fügen wir über [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) jedem `<button>` `click`-Event-Listener hinzu. Wenn auf die Schaltflächen geklickt wird, überprüfen wir, welches `<section>`-Element das [`parentElement`](/de/docs/Web/API/Node/parentElement) unseres eingebetteten `<div>` ist, und verwenden dann die entsprechende Funktion (`moveBefore()`, [`insertBefore()`](/de/docs/Web/API/Node/insertBefore) oder [`prepend()`](/de/docs/Web/API/Element/prepend)), um es innerhalb des _anderen_ `<section>`-Elements zu verschieben.

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

Starten Sie die Wiedergabe der YouTube-Einbettung und klicken Sie dann einige Male auf jeden `<button>`, um die Bildschirmposition des `<div>`-Elements von links nach rechts umzuschalten. Beachten Sie, dass bei `insertBefore()` und `prepend()` der Zustand der Einbettung nach jeder Verschiebung zurückgesetzt wird und sie daher neu gestartet werden muss. Bei `moveBefore()` bleibt der Zustand nach jeder Verschiebung jedoch erhalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.moveBefore()`](/de/docs/Web/API/Document/moveBefore)
- [`DocumentFragment.moveBefore()`](/de/docs/Web/API/DocumentFragment/moveBefore)
- [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)
