---
title: "DocumentFragment: moveBefore() Methode"
short-title: moveBefore()
slug: Web/API/DocumentFragment/moveBefore
l10n:
  sourceCommit: a61be259435257328a25c462cb0f42bc91981a6f
---

{{APIRef("DOM")}}{{SeeCompatTable}}

Die **`moveBefore()`**-Methode des [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Interfaces bewegt einen gegebenen [`Node`](/de/docs/Web/API/Node) innerhalb des aufrufenden `DocumentFragment` als direktes Kind, vor einem angegebenen Referenzknoten.

## Syntax

```js-nolint
moveBefore(movedNode, referenceNode)
```

### Parameter

- `movedNode`
  - : Ein [`Node`](/de/docs/Web/API/Node), der den zu bewegenden Knoten darstellt. Beachten Sie, dass dies ein [`Element`](/de/docs/Web/API/Element) oder ein [`CharacterData`](/de/docs/Web/API/CharacterData)-Knoten sein muss.
- `referenceNode`
  - : Ein [`Node`](/de/docs/Web/API/Node), vor dem `movedNode` verschoben wird, oder `null`. Ist der Wert `null`, wird `movedNode` am Ende der Kindknoten des aufrufenden `DocumentFragment` eingefügt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` {{jsxref("TypeError")}}
  - : Wird in einer der folgenden Situationen ausgelöst:
    - Der angegebene `movedNode` ist bereits zum DOM hinzugefügt und Sie versuchen, ihn innerhalb eines `DocumentFragment` zu verschieben.
    - Sie versuchen, `movedNode` zwischen zwei verschiedenen Dokumentfragmenten zu verschieben.
    - Der angegebene `movedNode` ist kein [`Element`](/de/docs/Web/API/Element)- oder [`CharacterData`](/de/docs/Web/API/CharacterData)-Knoten.
- `NotFoundError` {{jsxref("TypeError")}}
  - : Der angegebene `referenceNode` ist kein Kind des `DocumentFragment`, auf dem Sie `moveBefore()` aufrufen, also des Fragments, in dem Sie `movedNode` verschieben möchten.
- `TypeError` {{jsxref("TypeError")}}
  - : Das zweite Argument wurde nicht bereitgestellt.

## Beschreibung

Die `moveBefore()`-Methode verschiebt einen gegebenen Knoten an eine neue Stelle im `DocumentFragment`. Sie bietet eine ähnliche Funktionalität wie die [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)-Methode, mit dem Unterschied, dass sie den Knoten nicht entfernt und dann erneut einfügt. Das bedeutet, dass der Zustand des Knotens (der zurückgesetzt würde, wenn er mit `insertBefore()` und ähnlichen Mechanismen verschoben wird) nach der Verschiebung erhalten bleibt. Dazu gehören:

- [Animations-](/de/docs/Web/CSS/CSS_animations) und [Übergangs-](/de/docs/Web/CSS/CSS_transitions)-Zustände.
- Ladezustand des {{htmlelement("iframe")}}.
- Interaktivitätszustände (zum Beispiel {{cssxref(":focus")}} und {{cssxref(":active")}}).
- [Vollbild-](/de/docs/Web/API/Fullscreen_API)-Zustand von Elementen.
- Offen/Geschlossen-Zustand von [Popovers](/de/docs/Web/API/Popover_API).
- Modaler Zustand von {{htmlelement("dialog")}}-Elementen (modale Dialoge werden nicht geschlossen).

Der Abspielzustand von {{htmlelement("video")}} und {{htmlelement("audio")}}-Elementen ist nicht in der obigen Liste enthalten, da diese Elemente ihren Zustand behalten, wenn sie entfernt und wieder eingefügt werden, unabhängig vom verwendeten Mechanismus.

Beim Beobachten von Änderungen im DOM mit einem [`MutationObserver`](/de/docs/Web/API/MutationObserver) werden Knoten, die mit `moveBefore()` verschoben wurden, als [entfernter Knoten](/de/docs/Web/API/MutationRecord/removedNodes) und als [hinzugefügter Knoten](/de/docs/Web/API/MutationRecord/addedNodes) aufgezeichnet.

### Einschränkungen von `moveBefore()`

Es gibt einige Einschränkungen, die beim Verwenden von `moveBefore()` zu beachten sind:

- Es funktioniert nur, wenn ein Knoten innerhalb desselben Dokumentfragments verschoben wird.
- Es funktioniert nicht, wenn Sie versuchen, einen Knoten, der bereits zum DOM hinzugefügt wurde, in einem `DocumentFragment` zu verschieben.

In solchen Fällen schlägt `moveBefore()` mit einer `HierarchyRequestError`-Ausnahme fehl. Wenn die oben genannten Einschränkungen für Ihren speziellen Anwendungsfall Anforderungen sind, sollten Sie stattdessen [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) verwenden oder [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) verwenden, um die Fehler zu behandeln, die in solchen Fällen auftreten.

## Beispiele

### Grundlegende Verwendung von `moveBefore()`

In diesem Demo zeigen wir die grundlegende Verwendung von `moveBefore()`.

#### HTML

Das HTML enthält drei {{htmlelement("button")}}-Elemente und ein {{htmlelement("article")}}-Element. Wir werden die Schaltflächen verwenden, um `DocumentFragment`-Instanzen in das `<article>` einzufügen und es zu leeren.

```html live-sample___movebefore-basic
<button id="insert1">Insert fragment</button>
<button id="insert2">Insert modified fragment</button>
<button id="clear">Clear</button>
<article id="wrapper"></article>
```

#### CSS

Wir bieten einige rudimentäre Stile für das Aussehen und den Abstand der Elemente, die später als Kinder von JavaScript-generierten `DocumentFragment`s auf der Seite eingefügt werden, an.

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

Wir fügen dann jedem `<button>` über [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) einen Klick-Eventlistener hinzu:

- Der erste Button fügt das `DocumentFragment` unverändert dem `<article>`-Element mit der ID `#wrapper` hinzu.
- Der zweite Button fügt das `DocumentFragment` dem `<article>`-Element mit der ID `#wrapper` hinzu, benutzt jedoch zuerst `moveBefore()`, um das `<div>` an die zweite Stelle des `DocumentFragment` zu verschieben, anstatt an die erste.
- Der dritte Button leert das `<article>`-Element mit der ID `#wrapper`, indem er [`innerHTML`](/de/docs/Web/API/Element/innerHTML) verwendet.

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

Versuchen Sie, die ersten beiden Schaltflächen ein paar Mal zu klicken und beachten Sie, wie die `DocumentFragment`-Struktur durch die zweite Schaltfläche geändert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.moveBefore()`](/de/docs/Web/API/Document/moveBefore)
- [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore)
- [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)
