---
title: "Element: ariaControlsElements-Eigenschaft"
short-title: ariaControlsElements
slug: Web/API/Element/ariaControlsElements
l10n:
  sourceCommit: 6bed868c7b75c4c3ca3721fa8ed6c6ad2f41262b
---

{{APIRef("DOM")}}

Die **`ariaControlsElements`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle ist ein Array, das die Elemente enthält, die von dem Element, auf das sie angewendet wird, kontrolliert werden.
Beispielsweise könnte dies bei einer [Combobox](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) gesetzt werden, um das Element anzugeben, das sie öffnet, oder auf einer [`Scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role), um die ID des kontrollierten Elements anzugeben.

Das Thema [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) enthält zusätzliche Informationen darüber, wie das Attribut und die Eigenschaft verwendet werden sollten.

## Wert

Ein Array von Unterklassen von [`HTMLElement`](/de/docs/Web/API/HTMLElement), das die Elemente darstellt, die von diesem Element kontrolliert werden.

Beim Lesen ist das zurückgegebene Array statisch und schreibgeschützt.
Beim Schreiben wird das zugewiesene Array kopiert: Nachfolgende Änderungen am Array beeinflussen den Wert der Eigenschaft nicht.

## Beschreibung

Die Eigenschaft ist eine flexible Alternative zur Verwendung des [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)-Attributs, um die kontrollierten Elemente festzulegen.
Im Gegensatz zu `aria-controls` müssen die Elemente, die dieser Eigenschaft zugewiesen sind, kein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut haben.

Die Eigenschaft spiegelt das [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)-Attribut wider, wenn es definiert ist, jedoch nur für aufgelistete Referenz-`id`-Werte, die gültigen, im Geltungsbereich befindlichen Elementen entsprechen.
Wenn die Eigenschaft gesetzt wird, wird das entsprechende Attribut gelöscht.
Weitere Informationen zu reflektierten Elementreferenzen und Geltungsbereichen finden Sie unter [Reflektierte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Reflexionsattribute_-Leitfaden.

## Beispiele

### Die kontrollierten Elemente abrufen

Dieses Beispiel zeigt, wie `ariaControlsElements` verwendet werden kann, um die kontrollierten Elemente abzurufen, die mit `aria-controls` festgelegt wurden.

#### HTML

Das HTML definiert zuerst ein {{htmlelement("button")}}-Element und zwei {{htmlelement("div")}}-Elemente, `panel1` und `panel2`, die es kontrolliert.
Die Referenzen zu den kontrollierten Panels sind im `aria-controls`-Attribut des Buttons aufgelistet.

```html
<button id="toggleButton" aria-controls="panel1 panel2" aria-expanded="false">
  Show Details
</button>

<div class="panel" id="panel1" aria-hidden="true">
  <p>Panel1 opened/closed by button.</p>
</div>

<div class="panel" id="panel2" aria-hidden="true">
  <p>Panel2 opened/closed by button.</p>
</div>
```

```css
.panel {
  display: none; /* Initially hidden */
  border: 1px solid #ccc;
  padding: 5px;
  margin-top: 5px;
}
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 70px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

Der Code richtet zunächst die Panels so ein, dass sie basierend auf dem [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Attribut des Buttons ein- oder ausgeblendet werden.

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const toggleButton = document.querySelector("#toggleButton");
const panel1 = document.querySelector("#panel1");
const panel2 = document.querySelector("#panel2");

toggleButton.addEventListener("click", () => {
  const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";

  toggleButton.setAttribute("aria-expanded", !isExpanded);
  panel1.style.display = isExpanded ? "none" : "block";
  panel1.setAttribute("aria-hidden", isExpanded); //true when hidden, false when shown.

  panel2.style.display = isExpanded ? "none" : "block";
  panel2.setAttribute("aria-hidden", isExpanded); //true when hidden, false when shown.
});
```

Als Nächstes holt das Beispiel den Wert des `aria-controls`-Attributs mit [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute) (einem String, der die `id`-Werte der referenzierten Elemente auflistet).
Dann wird geprüft, ob die `ariaControlsElements`-Eigenschaft unterstützt wird, und falls ja, wird deren Wert protokolliert.
Schließlich wird der inhaltliche Text für jedes der kontrollierten Elemente zurückgegeben und protokolliert.

```js
log(`aria-controls: ${toggleButton.getAttribute("aria-controls")}`);
// Feature test for ariaControlsElements
if ("ariaControlsElements" in Element.prototype) {
  // Get ariaControlsElements
  const controlledElements = toggleButton.ariaControlsElements;
  log(`ariaControlsElements: ${controlledElements}`);

  // List innerText for each of the ariaControlsElements
  controlledElements.forEach((controlled) => {
    log(` Controlled element text: ${controlled.textContent.trim()}`);
  });
} else {
  log("element.ariaControlsElements: not supported by browser");
}
```

#### Ergebnis

Klicken Sie unten auf die Schaltfläche, um die Panels anzuzeigen und auszublenden.
Das Protokoll zeigt die ursprünglichen Elementreferenzen, die zugeordneten/zurückgegebenen Elemente und den inhaltlichen Text jedes Elements.

{{EmbedLiveSample("Get the controlled elements","100%","280px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)-Attribut
- [`ElementInternals.ariaControlsElements`](/de/docs/Web/API/ElementInternals/ariaControlsElements)
- [Reflektierte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Attributreflexion_-Leitfaden
