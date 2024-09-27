---
title: "Element: shadowRoot-Eigenschaft"
short-title: shadowRoot
slug: Web/API/Element/shadowRoot
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Shadow DOM")}}

Die `Element.shadowRoot`-Eigenschaft ist eine schreibgeschützte Eigenschaft, die die Shadow-Root des durch das Element gehosteten Schattendoms darstellt.

Verwenden Sie [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow), um einer bestehenden Element einen Shadow-Root hinzuzufügen.

## Wert

Ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objektinstanz oder `null`, wenn der zugehörige Shadow-Root mit seinem [`mode`](/de/docs/Web/API/ShadowRoot/mode) auf `closed` gesetzt angehängt wurde. (Siehe [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) für weitere Details).

## Beispiele

Die folgenden Codeausschnitte stammen aus unserem [life-cycle-callbacks](https://github.com/mdn/web-components-examples/tree/main/life-cycle-callbacks)-Beispiel ([siehe es auch live](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)), welches ein Element erstellt, das ein Quadrat mit einer Größe und Farbe anzeigt, die in den Attributen des Elements angegeben sind.

Innerhalb der Klasse des `<custom-square>`-Elements fügen wir einige Lebenszyklus-Callbacks hinzu, die einen Aufruf an eine externe Funktion, `updateStyle()`, machen, die tatsächlich die Größe und Farbe auf das Element anwendet. Sie werden sehen, dass wir `this` (das benutzerdefinierte Element selbst) als Parameter übergeben.

```js
class Square extends HTMLElement {
  connectedCallback() {
    console.log("Custom square element added to page.");
    updateStyle(this);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log("Custom square element attributes changed.");
    updateStyle(this);
  }
}
```

In der eigentlichen `updateStyle()`-Funktion erhalten wir eine Referenz zum Shadow-DOM, indem wir `Element.shadowRoot` verwenden. Von hier aus nutzen wir Standard-DOM-Durchlauftechniken, um das {{htmlelement("style")}}-Element innerhalb des Shadow-DOMs zu finden und dann das darin enthaltene CSS zu aktualisieren:

```js
function updateStyle(elem) {
  const shadow = elem.shadowRoot;
  const childNodes = Array.from(shadow.childNodes);

  childNodes.forEach((childNode) => {
    if (childNode.nodeName === "STYLE") {
      childNode.textContent = `
        div {
          width: ${elem.getAttribute("l")}px;
          height: ${elem.getAttribute("l")}px;
          background-color: ${elem.getAttribute("c")};
        }
      `;
    }
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
