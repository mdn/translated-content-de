---
title: "Element: ariaDescribedByElements-Eigenschaft"
short-title: ariaDescribedByElements
slug: Web/API/Element/ariaDescribedByElements
l10n:
  sourceCommit: 85d5b8d224843c37974318ff04fbcc1ab69ef95d
---

{{APIRef("DOM")}}

Die **`ariaDescribedByElements`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle ist ein Array, das das Element oder die Elemente enthält, die eine zugängliche Beschreibung für das Element liefern, auf das es angewendet wird. Die zugängliche Beschreibung ist ähnlich wie das zugängliche Label (siehe [`ariaLabelledByElements`](/de/docs/Web/API/Element/ariaLabelledByElements)), bietet aber ausführlichere Informationen.

Das Thema [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) enthält zusätzliche Informationen darüber, wie das Attribut und die Eigenschaft verwendet werden sollten.

## Wert

Ein Array von Unterklassen von [`HTMLElement`](/de/docs/Web/API/HTMLElement). Der innere Text dieser Elemente kann mit Leerzeichen verbunden werden, um die zugängliche Beschreibung zu erhalten.

Beim Lesen ist das zurückgegebene Array statisch und schreibgeschützt. Beim Schreiben wird das zugewiesene Array kopiert: Nachfolgende Änderungen am Array beeinflussen den Wert der Eigenschaft nicht.

## Beschreibung

Die Eigenschaft ist eine flexible Alternative zur Verwendung des [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Attributs, um die zugängliche Beschreibung festzulegen. Im Gegensatz zu `aria-describedby` müssen die zu dieser Eigenschaft zugewiesenen Elemente kein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut haben.

Die Eigenschaft spiegelt das [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Attribut des Elements wider, wenn es definiert ist, jedoch nur für aufgelistete Referenz-`id`-Werte, die mit gültigen Elementen im Geltungsbereich übereinstimmen. Wenn die Eigenschaft gesetzt wird, wird das entsprechende Attribut gelöscht. Weitere Informationen zu reflektierten Elementreferenzen und Umfang finden Sie unter [Reflektierte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im Leitfaden für _Reflektierte Attribute_.

## Beispiele

### Die zugängliche Beschreibung abrufen

Dieses Beispiel zeigt, wie `ariaDescribedByElements` verwendet werden kann, um die mit `aria-describedby` definierte zugängliche Beschreibung zu erhalten.

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

Hier werden wir einfach die `<span>`-Elemente ausblenden, die unseren zugänglichen Text enthalten.

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

Der Code unten protokolliert zunächst den Wert des `aria-describedby`-Attributs von [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute) (eine Zeichenkette, die die `id`-Werte der referenzierten Elemente auflistet). Es wird dann überprüft, ob `ariaDescribedByElements` unterstützt wird, und wenn ja, wird dessen Wert protokolliert. Schließlich wird die zugängliche Zeichenkette zurückgegeben, indem die zurückgegebenen Elemente durchlaufen und deren innerer Text verkettet wird.

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

Das untenstehende Protokoll zeigt die ursprünglichen Elementreferenzen, die zugeordneten/zurückgegebenen Elemente und die zugängliche Beschreibung.

{{EmbedLiveSample("Get the accessible description","100%","150px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Attribut
- [`ElementInternals.ariaDescribedByElements`](/de/docs/Web/API/ElementInternals/ariaDescribedByElements)
- [Reflektierte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im Leitfaden _Attributreflexion_
