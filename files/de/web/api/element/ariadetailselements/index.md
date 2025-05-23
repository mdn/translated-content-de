---
title: "Element: ariaDetailsElements-Eigenschaft"
short-title: ariaDetailsElements
slug: Web/API/Element/ariaDetailsElements
l10n:
  sourceCommit: 6bed868c7b75c4c3ca3721fa8ed6c6ad2f41262b
---

{{APIRef("DOM")}}

Die **`ariaDetailsElements`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle ist ein Array, das das Element (oder die Elemente) enthält, das für das Element, auf das es angewendet wird, eine zugängliche Detailbeschreibung bereitstellt.
Die zugänglichen Details ähneln der zugänglichen Beschreibung (siehe [`ariaDescribedByElements`](/de/docs/Web/API/Element/ariaDescribedByElements)), bieten jedoch detailliertere Informationen.

Das Thema [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) enthält zusätzliche Informationen darüber, wie das Attribut und die Eigenschaft verwendet werden sollten.

## Wert

Ein Array von Unterklassen von [`HTMLElement`](/de/docs/Web/API/HTMLElement).
Der innere Text dieser Elemente kann mit Leerzeichen verbunden werden, um die zugänglichen Details zu erhalten.

Beim Lesen ist das zurückgegebene Array statisch und schreibgeschützt.
Beim Schreiben wird das zugewiesene Array kopiert: Nachträgliche Änderungen am Array beeinflussen den Wert der Eigenschaft nicht.

## Beschreibung

Die Eigenschaft ist eine flexible Alternative zur Nutzung des [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)-Attributs, um die zugänglichen Detailinformationen festzulegen.
Im Gegensatz zu `aria-details` müssen die dieser Eigenschaft zugewiesenen Elemente kein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut haben.

Die Eigenschaft spiegelt das [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)-Attribut des Elements wider, wenn es definiert ist, jedoch nur für aufgelistete Referenz-`id`-Werte, die mit gültigen Elementen im Geltungsbereich übereinstimmen.
Wenn die Eigenschaft gesetzt wird, wird das entsprechende Attribut gelöscht.
Weitere Informationen über reflektierte Elementreferenzen und deren Geltungsbereich finden Sie unter [Reflektierte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Reflektierte Attribute_-Leitfaden.

## Beispiele

### Abrufen der zugänglichen Details

Dieses Beispiel zeigt, wie `ariaDetailsElements` verwendet werden kann, um die mit dem `aria-details`-Attribut im HTML definierten Informationen abzurufen.

#### HTML

Das HTML definiert zwei {{htmlelement("span")}}-Elemente und verweist auf deren IDs im `aria-details`-Attribut eines {{htmlelement("button")}}.

```html
<button aria-details="details1 details2">Button text</button>
…
<span id="details1">Details 1 information about the element.</span>
<span id="details2">Details 2 information about the element.</span>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 70px;
  overflow-x: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

Der unten stehende Code protokolliert zunächst den Wert des `aria-details`-Attributs von [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute) (ein String, der die `id`-Werte der referenzierten Elemente auflistet).
Anschließend wird überprüft, ob `ariaDetailsElements` unterstützt wird, und falls ja, wird deren Wert protokolliert.
Schließlich wird der zugängliche String zurückgegeben, der durch Iterieren über die zurückgegebenen Elemente und Konkatenation ihres inneren Textes berechnet wird.

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const buttonElement = document.querySelector("button");
log(`aria-details: ${buttonElement.getAttribute("aria-details")}`);
// Feature test for ariaDetailsElements
if ("ariaDetailsElements" in Element.prototype) {
  // Get ariaDetailsElements
  const buttonElements = buttonElement.ariaDetailsElements;
  log(`ariaDetailsElements: ${buttonElements}`);

  // Accessible details from ariaDetailsElements
  const text = buttonElements.map((e) => e.textContent.trim()).join(" ");
  log(`Accessible details: ${text.trim()}`);
} else {
  log("element.ariaDetailsElements: not supported by browser");
}
```

#### Ergebnis

Das unten stehende Protokoll zeigt die ursprünglichen Elementreferenzen, die zugeordneten/zurückgegebenen Elemente und die zugänglichen Details.

{{EmbedLiveSample("Get the accessible details","100%","150px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)-Attribut
- [`ElementInternals.ariaDetailsElements`](/de/docs/Web/API/ElementInternals/ariaDetailsElements)
- [Reflektierte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Attributreflexion_-Leitfaden.
