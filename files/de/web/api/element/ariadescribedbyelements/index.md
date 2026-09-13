---
title: "Element: ariaDescribedByElements-Eigenschaft"
short-title: ariaDescribedByElements
slug: Web/API/Element/ariaDescribedByElements
l10n:
  sourceCommit: 3b4a7a32fc2fe8cb6bd9a1e62f4ca52e002599ef
---

{{APIRef("DOM")}}

Die **`ariaDescribedByElements`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle ist ein Array, das das Element (oder die Elemente) enthält, das eine barrierefreie Beschreibung für das Element bereitstellt, auf das es angewendet wird. Die barrierefreie Beschreibung ist ähnlich wie das barrierefreie Label (siehe [`ariaLabelledByElements`](/de/docs/Web/API/Element/ariaLabelledByElements)), bietet jedoch ausführlichere Informationen.

Das Thema [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) enthält zusätzliche Informationen darüber, wie das Attribut und die Eigenschaft verwendet werden sollten.

## Wert

Ein Array von Unterklassen von [`HTMLElement`](/de/docs/Web/API/HTMLElement). Der innere Text dieser Elemente kann mit Leerzeichen verbunden werden, um die barrierefreie Beschreibung zu erhalten.

Beim Lesen ist das zurückgegebene Array statisch und schreibgeschützt. Beim Schreiben wird das zugewiesene Array kopiert: nachfolgende Änderungen am Array beeinflussen den Wert der Eigenschaft nicht.

## Beschreibung

Die Eigenschaft ist eine flexible Alternative zur Verwendung des [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Attributs, um die barrierefreie Beschreibung festzulegen. Im Gegensatz zu `aria-describedby` müssen die Elemente, die dieser Eigenschaft zugewiesen werden, kein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut haben.

Die Eigenschaft spiegelt das [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Attribut des Elements wider, wenn es definiert ist, jedoch nur für aufgeführte Referenz-`id`-Werte, die mit gültigen, im Geltungsbereich befindlichen Elementen übereinstimmen. Wenn die Eigenschaft gesetzt ist, wird das entsprechende Attribut gelöscht. Für weitere Informationen über reflektierte Elementreferenzen und den Geltungsbereich siehe [Reflektierte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Reflektierte Attribute_-Leitfaden.

## Beispiele

### Die barrierefreie Beschreibung abrufen

Dieses Beispiel zeigt, wie `ariaDescribedByElements` verwendet werden kann, um die mit `aria-describedby` definierte barrierefreie Beschreibung abzurufen.

#### HTML

Das HTML definiert zwei {{htmlelement("span")}}-Elemente und verweist in der `aria-describedby`-Eigenschaft eines {{htmlelement("button")}} darauf.

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

Hier werden wir einfach die `<span>`-Elemente, die unseren barrierefreien Text enthalten, ausblenden.

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

Der untenstehende Code protokolliert zuerst den Wert des `aria-describedby`-Attributs von [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute) (ein String, der die `id`-Werte der referenzierten Elemente auflistet). Anschließend wird überprüft, ob `ariaDescribedByElements` unterstützt wird, und falls ja, wird dessen Wert protokolliert. Schließlich wird die barrierefreie Zeichenkette zurückgegeben, die durch Iterieren durch die zurückgegebenen Elemente und das Verbinden ihres inneren Textes berechnet wird.

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

Das untenstehende Protokoll zeigt die ursprünglichen Elementreferenzen, die zugewiesenen/zurückgegebenen Elemente und die barrierefreie Beschreibung.

{{EmbedLiveSample("Get the accessible description","100%","150px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Attribut
- [`ElementInternals.ariaDescribedByElements`](/de/docs/Web/API/ElementInternals/ariaDescribedByElements)
- [Reflektierte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Attributreflexion_-Leitfaden
