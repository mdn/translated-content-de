---
title: "Element: moveBefore()-Methode"
short-title: moveBefore()
slug: Web/API/Element/moveBefore
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("DOM")}}

Die **`moveBefore()`**-Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces verschiebt einen angegebenen [`Node`](/de/docs/Web/API/Node) innerhalb des aufrufenden Knotens als direktes Kind vor einen angegebenen Referenzknoten.

## Syntax

```js-nolint
moveBefore(movedNode, referenceNode)
```

### Parameter

- `movedNode`
  - : Ein [`Node`](/de/docs/Web/API/Node), der den zu verschiebenden Knoten darstellt. Beachten Sie, dass dies ein [`Element`](/de/docs/Web/API/Element)- oder ein [`CharacterData`](/de/docs/Web/API/CharacterData)-Knoten sein muss.
- `referenceNode`
  - : Ein [`Node`](/de/docs/Web/API/Node), vor dem `movedNode` verschoben wird, oder `null`. Wenn der Wert `null` ist, wird `movedNode` am Ende der Kindknoten des aufrufenden Knotens eingefügt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` {{jsxref("TypeError")}}
  - : Wird in einer der folgenden Situationen ausgelöst:
    - Der angegebene `movedNode` ist nicht Teil des DOMs, und Sie versuchen, ihn innerhalb eines Knotens zu verschieben, der Teil des DOMs ist, oder umgekehrt.
    - Der angegebene `movedNode` ist ein Vorfahre des Elements, auf dem `moveBefore()` aufgerufen wird.
    - Sie versuchen, `movedNode` zwischen zwei verschiedenen Dokumenten zu verschieben.
    - Der angegebene `movedNode` ist kein [`Element`](/de/docs/Web/API/Element)- oder [`CharacterData`](/de/docs/Web/API/CharacterData)-Knoten.
- `NotFoundError` {{jsxref("TypeError")}}
  - : Der angegebene `referenceNode` ist kein Kind des Knotens, auf dem Sie `moveBefore()` aufrufen, also des Knotens, in den Sie `movedNode` verschieben möchten.
- `TypeError` {{jsxref("TypeError")}}
  - : Das zweite Argument wurde nicht angegeben.

## Beschreibung

Die `moveBefore()`-Methode verschiebt einen angegebenen Knoten an eine neue Position im DOM. Sie bietet eine ähnliche Funktionalität wie die [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)-Methode, entfernt und fügt jedoch den Knoten nicht erneut ein. Dies bedeutet, dass der Status des Knotens (der zurückgesetzt würde, wenn er mit `insertBefore()` und ähnlichen Mechanismen verschoben würde) nach der Verschiebung erhalten bleibt. Dies umfasst:

- [Animation](/de/docs/Web/CSS/Guides/Animations) und [Übergang](/de/docs/Web/CSS/Guides/Transitions)-Zustand.
- Ladezustand des {{htmlelement("iframe")}}.
- Interaktivitätszustände (zum Beispiel {{cssxref(":focus")}} und {{cssxref(":active")}}).
- [Vollbild](/de/docs/Web/API/Fullscreen_API)-Elementzustand.
- Offen/geschlossen-Zustand von [Popovers](/de/docs/Web/API/Popover_API).
- Modalzustand von {{htmlelement("dialog")}}-Elementen (modale Dialoge werden nicht geschlossen).

Der Spielzustand von {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elementen ist in der obigen Liste nicht enthalten, da diese Elemente ihren Zustand beibehalten, wenn sie entfernt und erneut eingefügt werden, unabhängig vom verwendeten Mechanismus.

Beim Beobachten von Änderungen im DOM mithilfe eines [`MutationObserver`](/de/docs/Web/API/MutationObserver) werden Knoten, die mit `moveBefore()` verschoben werden, mit einem [entfernten Knoten](/de/docs/Web/API/MutationRecord/removedNodes) und einem [hinzugefügten Knoten](/de/docs/Web/API/MutationRecord/addedNodes) erfasst.

### `moveBefore()`-Einschränkungen

Es gibt einige Einschränkungen, die bei der Verwendung von `moveBefore()` zu beachten sind:

- Es funktioniert nur, wenn ein Knoten innerhalb desselben Dokuments verschoben wird.
- Es funktioniert nicht, wenn Sie versuchen, einen nicht mit dem DOM verbundenen Knoten in ein bereits verbundenes Elternteil zu verschieben oder umgekehrt.

In solchen Fällen schlägt `moveBefore()` mit einer `HierarchyRequestError`-Ausnahme fehl. Wenn die obigen Einschränkungen Anforderungen für Ihren speziellen Anwendungsfall sind, sollten Sie stattdessen [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) verwenden oder [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) verwenden, um die Fehler zu behandeln, die in solchen Fällen auftreten.

### Benutzerdefinierte Elemente verschieben und den Status beibehalten

Jedes Mal, wenn die Position eines [benutzerdefinierten Elements](/de/docs/Web/API/Web_components/Using_custom_elements) im DOM über `Element.moveBefore()` oder ähnliche Methoden wie [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) aktualisiert wird, werden dessen `disconnectedCallback()`- und `connectedCallback()`-Lebenszyklus-Rückrufmethoden ausgelöst. Da diese Rückrufe typischerweise verwendet werden, um jeglichen erforderlichen Initialisierungs- oder Bereinigungscode zu implementieren, der zu Beginn oder Ende des Lebenszyklus des Elements ausgeführt werden soll, kann ihre Ausführung beim Verschieben des Elements (anstatt entfernen oder einfügen) Probleme mit seinem Zustand verursachen.

Sie können den `connectedMoveCallback()`-Rückruf verwenden, um den Zustand eines benutzerdefinierten Elements zu bewahren. Wenn Sie `moveBefore()` verwenden, um ein benutzerdefiniertes Element zu verschieben, wird `connectedMoveCallback()` anstelle von `connectedCallback()` und `disconnectedCallback()` ausgeführt.

Weitere Informationen finden Sie unter [Benutzerdefinierte Elemente verschieben](/de/docs/Web/API/Web_components/Using_custom_elements#lifecycle_callbacks_and_state-preserving_moves).

## Beispiele

### Grundlegende `moveBefore()`-Verwendung

In diesem Demo zeigen wir die grundlegende Verwendung von `moveBefore()`.

#### HTML

Das HTML umfasst ein {{htmlelement("article")}}-Element mit einem {{htmlelement("div")}}-Element und zwei {{htmlelement("section")}}-Elementen. Das `<div>` enthält einen {{htmlelement("button")}}, den wir später nutzen, um es zu verschieben.

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

Wir bieten einige grundlegende Styles für Optik und Abstand der Boxen und verwenden [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout), um ihren Inhalt zu zentrieren.

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

In unserem Skript verbinden wir einen Klick-Event-Listener mit dem `<button>` über [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener). Wenn der Button geklickt wird, prüfen wir, ob der [`nextElementSibling`](/de/docs/Web/API/Element/nextElementSibling) unseres `mover`-`<div>` das erste `<section>`-Element ist. Wenn ja, rufen wir `moveBefore()` auf dem `wrapper`-`<article>` auf und geben an, das `<div>` vor dem zweiten `<section>` zu verschieben. Andernfalls verwenden wir `moveBefore()`, um das `<div>` vor das erste `<section>` zu verschieben.

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

Versuchen Sie, den `<button>` ein paar Mal zu klicken und sehen Sie, wie er zwischen den beiden Positionen wechselt.

### Demonstration der Statusbeibehaltung

In diesem Demo bieten wir mehrere Mechanismen an, um ein `<div>`-Element, das einen YouTube-Embed enthält, zwischen zwei verschiedenen Containern zu verschieben, und demonstrieren dabei, wie `moveBefore()` den Wiedergabestatus des Embeds beibehält, während die anderen Mechanismen dies nicht tun.

#### HTML

Das HTML umfasst ein {{htmlelement("article")}}-Element mit zwei {{htmlelement("section")}}-Elementen. Das erste `<section>`-Element enthält ein {{htmlelement("div")}}-Element mit dem YouTube-Embed-Code. Wir haben auch ein {{htmlelement("div")}}-Element, das drei {{htmlelement("button")}}-Elemente enthält, denen wir später mit JavaScript Funktionalität hinzufügen werden, um das Embed-`<div>` zwischen den Abschnitten zu verschieben.

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

Wir verwenden [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) für das Layout, um die beiden `<section>`-Elemente nebeneinander anzuordnen und die Tasten gleichmäßig innerhalb des `controls`-`<div>` zu platzieren.

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

In unserem Skript verbinden wir `click`-Event-Listener mit jedem `<button>` über [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener). Wenn die Schaltflächen geklickt werden, überprüfen wir, welches `<section>`-Element das [`parentElement`](/de/docs/Web/API/Node/parentElement) unseres Embed-`<div>` ist, und verwenden dann die entsprechende Funktion (`moveBefore()`, [`insertBefore()`](/de/docs/Web/API/Node/insertBefore) oder [`prepend()`](/de/docs/Web/API/Element/prepend)), um es in das _andere_ `<section>`-Element zu verschieben.

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

Versuchen Sie, den YouTube-Embed abzuspielen und dann jede `<button>` ein paar Mal zu klicken, um die `<div>`-Element-Bildschirmposition von links nach rechts zu wechseln. Beachten Sie, wie im Fall von `insertBefore()` und `prepend()` der Embed-Zustand nach jedem Verschieben zurückgesetzt wird, sodass er neu gestartet werden muss. Im Fall von `moveBefore()` bleibt der Zustand nach jedem Verschieben jedoch erhalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.moveBefore()`](/de/docs/Web/API/Document/moveBefore)
- [`DocumentFragment.moveBefore()`](/de/docs/Web/API/DocumentFragment/moveBefore)
- [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)
