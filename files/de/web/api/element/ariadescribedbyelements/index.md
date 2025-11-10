---
title: "Element: ariaDescribedByElements-Eigenschaft"
short-title: ariaDescribedByElements
slug: Web/API/Element/ariaDescribedByElements
l10n:
  sourceCommit: 6bed868c7b75c4c3ca3721fa8ed6c6ad2f41262b
---

{{APIRef("DOM")}}

Die **`ariaDescribedByElements`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle ist ein Array, das das bzw. die Elemente enthält, die eine zugängliche Beschreibung für das Element bereitstellen, auf das sie angewendet wird. Die zugängliche Beschreibung ist ähnlich wie das zugängliche Label (siehe [`ariaLabelledByElements`](/de/docs/Web/API/Element/ariaLabelledByElements)), bietet jedoch ausführlichere Informationen.

Das Thema [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) enthält zusätzliche Informationen darüber, wie das Attribut und die Eigenschaft verwendet werden sollten.

## Wert

Ein Array von Subklassen von [`HTMLElement`](/de/docs/Web/API/HTMLElement).
Der innere Text dieser Elemente kann mit Leerzeichen verbunden werden, um die zugängliche Beschreibung zu erhalten.

Beim Lesen ist das zurückgegebene Array statisch und schreibgeschützt.
Beim Schreiben wird das zugewiesene Array kopiert: Nachfolgende Änderungen am Array beeinflussen den Wert der Eigenschaft nicht.

## Beschreibung

Die Eigenschaft ist eine flexible Alternative zur Verwendung des [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Attributs, um die zugängliche Beschreibung festzulegen. Im Gegensatz zu `aria-describedby` müssen die dieser Eigenschaft zugewiesenen Elemente kein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut haben.

Die Eigenschaft spiegelt das `aria-describedby`-Attribut des Elements wider, wenn es definiert ist, jedoch nur für aufgeführte Referenz-`id`-Werte, die gültigen In-Scope-Elementen entsprechen. Wenn die Eigenschaft gesetzt wird, wird das entsprechende Attribut geleert. Weitere Informationen zu reflektierten Elementreferenzen und dem Scope finden Sie unter [Reflected element references](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Reflected attributes_-Leitfaden.

## Beispiele

### Abrufen der zugänglichen Beschreibung

Dieses Beispiel zeigt, wie `ariaDescribedByElements` verwendet werden kann, um die mit `aria-describedby` definierte zugängliche Beschreibung abzurufen.

#### HTML

Das HTML definiert zwei {{htmlelement("span")}}-Elemente und referenziert deren IDs im `aria-describedby`-Attribut eines {{htmlelement("button")}}.

```html
<button aria-describedby="trash-desc1 trash-desc2">Move to trash</button>
…
<span id="trash-desc1">Trash will be permanently removed after 30 days.</span>
<span id="trash-desc2">Or Else!</span>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

Hier verbergen wir einfach die `<span>`-Elemente, die unseren zugänglichen Text enthalten.

```css
span {
  display: none;
}
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

Der folgende Code protokolliert zuerst den Wert des `aria-describedby`-Attributs von [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute) (ein String, der die `id`-Werte der referenzierten Elemente auflistet). Anschließend wird überprüft, ob `ariaDescribedByElements` unterstützt wird, und falls ja, wird sein Wert protokolliert. Schließlich wird der zugängliche String zurückgegeben, der durch Iterieren über die zurückgegebenen Elemente und Verketten ihrer inneren Texte berechnet wird.

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const buttonElement = document.querySelector("button");
log(`aria-describedby: ${buttonElement.getAttribute("aria-describedby")}`);
// Feature test for ariaDescribedByElements
if ("ariaDescribedByElements" in Element.prototype) {
  // Get ariaDescribedByElements
  const buttonElements = buttonElement.ariaDescribedByElements;
  log(`ariaDescribedByElements: ${buttonElements}`);

  // Accessible description from the elements
  const text = buttonElements.map((e) => e.textContent.trim()).join(" ");
  log(`Accessible description: ${text.trim()}`);
} else {
  log("element.ariaDescribedByElements: not supported by browser");
}
```

#### Ergebnis

Das folgende Protokoll zeigt die ursprünglichen Elementreferenzen, die zugeordneten/zurückgegebenen Elemente und die zugängliche Beschreibung.

{{EmbedLiveSample("Get the accessible description","100%","150px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Attribut
- [`ElementInternals.ariaDescribedByElements`](/de/docs/Web/API/ElementInternals/ariaDescribedByElements)
- [Reflected element references](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Attribute reflection_-Leitfaden
