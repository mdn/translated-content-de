---
title: "Element: shadowRoot-Eigenschaft"
short-title: shadowRoot
slug: Web/API/Element/shadowRoot
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Shadow DOM")}}

Die schreibgeschützte Eigenschaft `Element.shadowRoot` repräsentiert die von dem Element gehostete Shadow-Root.

Verwenden Sie {{DOMxRef("Element.attachShadow()")}}, um einem vorhandenen Element einen Shadow-Root hinzuzufügen.

## Wert

Eine Instanz des {{DOMxRef("ShadowRoot")}}-Objekts oder `null`, wenn die zugehörige Shadow-Root mit auf `closed` gesetztem {{DOMxRef("ShadowRoot.mode", "mode")}} angehängt wurde. (Siehe {{DOMxRef("Element.attachShadow()")}} für weitere Details).

## Beispiele

Die folgenden Codeausschnitte stammen aus unserem [life-cycle-callbacks](https://github.com/mdn/web-components-examples/tree/main/life-cycle-callbacks)-Beispiel ([sehen Sie es sich auch live an](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)), das ein Element erstellt, das ein Quadrat mit einer im Attribut des Elements angegebenen Größe und Farbe anzeigt.

Innerhalb der Klassendefinition des `<custom-square>` Elements fügen wir einige Lebenszyklus-Callbacks ein, die einen Aufruf an eine externe Funktion, `updateStyle()`, machen, welche die Größe und Farbe tatsächlich auf das Element anwendet. Sie werden sehen, dass wir `this` (das benutzerdefinierte Element selbst) als Parameter übergeben.

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

In der Funktion `updateStyle()` selbst erhalten wir eine Referenz auf das Shadow-DOM, indem wir `Element.shadowRoot` verwenden. Von hier aus verwenden wir Standard-DOM-Durchlauftechniken, um das {{htmlelement("style")}}-Element innerhalb des Shadow-DOM zu finden und das darin enthaltene CSS zu aktualisieren:

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
