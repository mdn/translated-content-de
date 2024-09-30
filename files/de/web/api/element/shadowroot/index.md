---
title: "Element: shadowRoot Eigenschaft"
short-title: shadowRoot
slug: Web/API/Element/shadowRoot
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Shadow DOM")}}

Die schreibgeschützte Eigenschaft `Element.shadowRoot`
repräsentiert das Shadow-Root, das vom Element gehostet wird.

Verwenden Sie [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow), um einem bestehenden Element ein Shadow-Root hinzuzufügen.

## Wert

Eine Instanz des [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekts oder `null`, wenn das zugehörige
Shadow-Root mit seinem [`mode`](/de/docs/Web/API/ShadowRoot/mode) auf
`closed` gesetzt wurde. (Siehe [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) für weitere Details).

## Beispiele

Die folgenden Ausschnitte stammen aus unserem [life-cycle-callbacks](https://github.com/mdn/web-components-examples/tree/main/life-cycle-callbacks)
Beispiel ([siehe es auch live](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)), welches ein Element erstellt, das ein Quadrat mit einer Größe und Farbe anzeigt, die in den Attributen des Elements angegeben sind.

Innerhalb der Klassen-Definition des `<custom-square>`-Elements fügen wir einige Lebenszyklus-Callbacks hinzu, die eine externe Funktion, `updateStyle()`, aufrufen, welche tatsächlich die Größe und Farbe auf das Element anwendet. Sie werden sehen, dass wir diese Funktion mit `this` (das benutzerdefinierte Element selbst) als Parameter aufrufen.

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

In der `updateStyle()`-Funktion selbst erhalten wir eine Referenz zum Shadow DOM
mithilfe von `Element.shadowRoot`. Von hier aus verwenden wir standardmäßige DOM-Traversierungstechniken, um das {{htmlelement("style")}}-Element im Shadow DOM zu finden und dann das darin enthaltene CSS zu aktualisieren:

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
