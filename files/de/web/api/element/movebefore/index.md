---
title: "Element: Methode moveBefore()"
short-title: moveBefore()
slug: Web/API/Element/moveBefore
l10n:
  sourceCommit: a61be259435257328a25c462cb0f42bc91981a6f
---

{{APIRef("DOM")}}{{SeeCompatTable}}

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
    - Der angegebene `movedNode` ist nicht Teil des DOM und Sie versuchen, ihn in einen Knoten zu verschieben, der Teil des DOM ist, oder umgekehrt.
    - Der angegebene `movedNode` ist ein Vorfahre des Elements, auf dem `moveBefore()` aufgerufen wird.
    - Sie versuchen, `movedNode` zwischen zwei verschiedenen Dokumenten zu verschieben.
    - Der angegebene `movedNode` ist weder ein [`Element`](/de/docs/Web/API/Element)- noch ein [`CharacterData`](/de/docs/Web/API/CharacterData)-Knoten.
- `NotFoundError` {{jsxref("TypeError")}}
  - : Der angegebene `referenceNode` ist kein Kind des Knotens, auf dem Sie `moveBefore()` aufrufen, d.h. des Knotens, in den Sie `movedNode` verschieben möchten.
- `TypeError` {{jsxref("TypeError")}}
  - : Das zweite Argument wurde nicht angegeben.

## Beschreibung

Die `moveBefore()`-Methode verschiebt einen angegebenen Knoten an eine neue Stelle im DOM. Sie bietet ähnliche Funktionalität wie die Methode [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore), entfernt und fügt den Knoten jedoch nicht erneut ein. Dies bedeutet, dass der Zustand des Knotens (der zurückgesetzt würde, wenn er mit `insertBefore()` und ähnlichen Mechanismen verschoben wird) nach dem Verschieben erhalten bleibt. Dies umfasst:

- [Animation](/de/docs/Web/CSS/CSS_animations)- und [Übergang](/de/docs/Web/CSS/CSS_transitions)-Zustand.
- Ladezustand des {{htmlelement("iframe")}}.
- Interaktivitätszustände (zum Beispiel {{cssxref(":focus")}} und {{cssxref(":active")}}).
- [Vollbild](/de/docs/Web/API/Fullscreen_API)-Elementzustand.
- Offen/geschlossen Zustand von [Popovern](/de/docs/Web/API/Popover_API).
- Modaler Zustand von {{htmlelement("dialog")}}-Elementen (modale Dialoge werden nicht geschlossen).

Der Wiedergabezustand von {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elementen ist in der obigen Liste nicht enthalten, da diese Elemente ihren Zustand beim Entfernen und Wiedereinfügen beibehalten, unabhängig vom verwendeten Mechanismus.

Beim Beobachten von Änderungen am DOM mithilfe eines [`MutationObserver`](/de/docs/Web/API/MutationObserver) werden Knoten, die mit `moveBefore()` verschoben wurden, mit einem [entfernten Knoten](/de/docs/Web/API/MutationRecord/removedNodes) und einem [hinzugefügten Knoten](/de/docs/Web/API/MutationRecord/addedNodes) aufgezeichnet.

### Einschränkungen von `moveBefore()`

Es gibt einige Einschränkungen, die beim Verwenden von `moveBefore()` zu beachten sind:

- Es funktioniert nur, wenn ein Knoten innerhalb desselben Dokuments verschoben wird.
- Es funktioniert nicht, wenn Sie versuchen, einen nicht mit dem DOM verbundenen Knoten zu einem bereits verbundenen Elternteil zu verschieben oder umgekehrt.

In solchen Fällen schlägt `moveBefore()` mit einer `HierarchyRequestError`-Ausnahme fehl. Wenn die oben genannten Einschränkungen Anforderungen für Ihren speziellen Anwendungsfall darstellen, sollten Sie stattdessen [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) verwenden oder [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) verwenden, um die Fehler zu behandeln, die in solchen Fällen auftreten.

### Verschieben von benutzerdefinierten Elementen bei gleichzeitigem Erhalt des Zustands

Jedes Mal, wenn die Position eines [benutzerdefinierten Elements](/de/docs/Web/API/Web_components/Using_custom_elements) im DOM über `Element.moveBefore()` oder ähnliche Methoden wie [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) aktualisiert wird, werden seine `disconnectedCallback()`- und `connectedCallback()`-Lebenszyklus-Rückrufe ausgeführt. Da diese Rückrufe normalerweise verwendet werden, um erforderlichen Initialisierungs- oder Bereinigungscode zu implementieren, der zu Beginn oder am Ende des Lebenszyklus des Elements ausgeführt werden soll, kann ihre Ausführung beim Verschieben des Elements (anstatt beim Entfernen oder Einfügen) Probleme mit seinem Zustand verursachen.

Sie können den `connectedMoveCallback()`-Rückruf verwenden, um den Zustand eines benutzerdefinierten Elements zu erhalten. Beim Verwenden von `moveBefore()`, um ein benutzerdefiniertes Element zu verschieben, wird `connectedMoveCallback()` anstelle von `connectedCallback()` und `disconnectedCallback()` ausgeführt.

Weitere Informationen finden Sie unter [Verschieben von benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements#lifecycle_callbacks_and_state-preserving_moves).

## Beispiele

### Grundlegende Verwendung von `moveBefore()`

In diesem Demo veranschaulichen wir die grundlegende Verwendung von `moveBefore()`.

#### HTML

Das HTML umfasst ein {{htmlelement("article")}}-Element, das ein {{htmlelement("div")}}-Element und zwei {{htmlelement("section")}}-Elemente enthält. Das `<div>` enthält ein {{htmlelement("button")}}, das wir später verwenden, um es zu verschieben.

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

Wir stellen einige rudimentäre Stile für das Aussehen und die Abstände der Boxen bereit und verwenden [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), um deren Inhalt zu zentrieren.

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

In unserem Skript fügen wir dem `<button>` über [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) einen Klick-Event-Listener hinzu. Wenn der Button geklickt wird, prüfen wir, ob das [`nextElementSibling`](/de/docs/Web/API/Element/nextElementSibling) unseres `mover`-`<div>` das erste `<section>`-Element ist. Wenn ja, rufen wir `moveBefore()` auf dem `wrapper`-`<article>` auf und geben an, das `<div>` vor dem zweiten `<section>` zu verschieben. Wenn nicht, verwenden wir `moveBefore()`, um das `<div>` vor das erste `<section>` zu verschieben.

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

Versuchen Sie, einige Male auf das `<button>` zu klicken und beachten Sie, wie es zwischen den beiden Positionen wechselt.

### Demonstration der Zustandserhaltung

In diesem Demo bieten wir mehrere Mechanismen, um ein `<div>`-Element mit einem YouTube-Embed zwischen zwei verschiedenen Containern zu verschieben. Dabei wird gezeigt, wie `moveBefore()` den Wiedergabezustand des Embed erhält, während die anderen Mechanismen dies nicht tun.

#### HTML

Das HTML umfasst ein {{htmlelement("article")}}-Element, das zwei {{htmlelement("section")}}-Elemente enthält. Das erste `<section>`-Element enthält ein {{htmlelement("div")}}-Element mit dem YouTube-Embed-Code. Darüber hinaus haben wir ein {{htmlelement("div")}}-Element mit drei {{htmlelement("button")}}-Elementen, denen wir später über JavaScript Funktionalität hinzufügen, um das Embed-`<div>` zwischen den Sektionen zu verschieben.

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

Wir verwenden [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) für die Anordnung, um die beiden `<section>`-Elemente nebeneinander zu platzieren und die Buttons gleichmäßig im `controls`-`<div>` zu verteilen.

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

In unserem Skript fügen wir jedem `<button>` über [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) `click`-Event-Listener hinzu. Wenn die Buttons geklickt werden, prüfen wir, welches `<section>`-Element das [`parentElement`](/de/docs/Web/API/Node/parentElement) unseres Embed-`<div>` ist, und verwenden dann die entsprechende Funktion (`moveBefore()`, [`insertBefore()`](/de/docs/Web/API/Node/insertBefore) oder [`prepend()`](/de/docs/Web/API/Element/prepend)), um es in das _andere_ `<section>`-Element zu verschieben.

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

Versuchen Sie, das YouTube-Embed abzuspielen und dann ein paar Mal auf jeden `<button>` zu klicken, um die Bildschirmposition des `<div>`-Elements von links nach rechts zu wechseln. Beachten Sie, wie der Embed-Zustand im Fall von `insertBefore()` und `prepend()` nach jedem Verschieben zurückgesetzt wird, sodass er neu gestartet werden muss. Im Fall von `moveBefore()` bleibt der Zustand nach jedem Verschieben erhalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.moveBefore()`](/de/docs/Web/API/Document/moveBefore)
- [`DocumentFragment.moveBefore()`](/de/docs/Web/API/DocumentFragment/moveBefore)
- [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)
