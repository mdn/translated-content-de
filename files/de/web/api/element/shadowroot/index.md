---
title: "Element: shadowRoot-Eigenschaft"
short-title: shadowRoot
slug: Web/API/Element/shadowRoot
l10n:
  sourceCommit: 1099567e480ad28fa86729e02a9fa8fa4cea9331
---

{{APIRef("Shadow DOM")}}

Die schreibgeschützte Eigenschaft `Element.shadowRoot` 
repräsentiert den Shadow-Root, der vom Element gehostet wird.

Verwenden Sie [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow), um einem vorhandenen Element einen Shadow-Root hinzuzufügen.

## Wert

Eine Instanz des [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekts oder `null`, wenn der zugehörige
Shadow-Root mit seinem [`mode`](/de/docs/Web/API/ShadowRoot/mode) auf `closed` festgelegt wurde. (Details hierzu finden Sie unter [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow)).

Einige eingebaute Elemente, wie z. B. {{HTMLElement("input")}} und {{HTMLElement("img")}}, haben benutzeragentenbasierte Shadow-Roots, die für Skripte geschlossen sind. Folglich ist ihre `shadowRoot`-Eigenschaft immer `null`.

## Beispiele

Die folgenden Codeausschnitte stammen aus unserem [life-cycle-callbacks](https://github.com/mdn/web-components-examples/tree/main/life-cycle-callbacks)-Beispiel ([sehen Sie es auch live](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)), das ein Element erstellt, das ein Quadrat anzeigt, dessen Größe und Farbe in den Attributen des Elements angegeben sind.

Innerhalb der Klassen-Definition des `<custom-square>`-Elements fügen wir einige Lebenszyklus-Callbacks hinzu, die eine externe Funktion,
`updateStyle()`, aufrufen. Diese Funktion wendet tatsächlich die Größe und die Farbe auf das Element an. Sie werden sehen, dass wir `this` (das benutzerdefinierte Element selbst) als Parameter übergeben.

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

In der `updateStyle()`-Funktion selbst erhalten wir eine Referenz auf das Shadow-DOM mit `Element.shadowRoot`. Hier verwenden wir Standard-DOM-Durchsuchungstechniken, um das {{htmlelement("style")}}-Element im Shadow-DOM zu finden und die darin enthaltene CSS-Deklaration zu aktualisieren:

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
