---
title: "Element: ariaLabelledByElements-Eigenschaft"
short-title: ariaLabelledByElements
slug: Web/API/Element/ariaLabelledByElements
l10n:
  sourceCommit: 2f20bc484496536ba975dc33d9af4e4fb6b9413b
---

{{APIRef("DOM")}}

Die **`ariaLabelledByElements`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element) Schnittstelle ist ein Array, das das Element (oder die Elemente) enthält, das einen zugänglichen Namen für das Element bereitstellt, auf das es angewendet wird.

Die Eigenschaft spiegelt [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) (in einigen Fällen) wider und dient ähnlich dazu, ein Label für Elemente bereitzustellen, die keine Standardmethode zur Definition ihres zugänglichen Namens haben. Der Hauptunterschied besteht darin, dass die Eigenschaft zum Bereitstellen von Labeltexten aus Elementen verwendet werden kann, die keine `id` haben, und sie hat Vorrang vor allen anderen Methoden zum Setzen des ARIA-Labels.

## Wert

Ein Array von Elementen. Der innere Text dieser Elemente kann mit Leerzeichen verbunden werden, um den zugänglichen Namen zu erhalten.

Beim Lesen ist das zurückgegebene Array statisch und schreibgeschützt. Beim Schreiben wird das zugewiesene Array kopiert: nachfolgende Änderungen am Array beeinflussen den Wert der Eigenschaft nicht.

## Beschreibung

Die Eigenschaft ist eine flexible Alternative zur Verwendung des [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attributs, um den zugänglichen Namen festzulegen. Anders als `aria-labelledby` müssen die dieser Eigenschaft zugewiesenen Elemente kein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut haben.

Zum Beispiel könnte dies verwendet werden, um ein Container-Element, wie ein {{htmlelement("div")}} oder {{htmlelement("span")}}, zu beschriften (vorausgesetzt, es wurde mit einer [geeigneten ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby#associated_roles) versehen). Die Eigenschaft hat Vorrang vor anderen Mechanismen zur Bereitstellung eines zugänglichen Namens für Elemente und kann daher auch verwendet werden, um einen Namen für Elemente bereitzustellen, die ihn normalerweise aus ihrem inneren Inhalt oder von einem zugehörigen Element wie einem Label erhalten.

Die Eigenschaft spiegelt das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attribut des Elements wider, wenn es definiert ist, jedoch nur für aufgelistete Referenz-`id`-Werte, die mit gültigen In-Scope-Elementen übereinstimmen. Wenn die Eigenschaft gesetzt ist, wird das entsprechende Attribut gelöscht. Weitere Informationen zu gespiegeltetn Elementreferenzen und Bereich finden Sie unter [Gespiegelte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Gespiegelte Attribute_ Leitfaden.

Siehe [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) für zusätzliche Informationen darüber, wie das Attribut und die Eigenschaft verwendet werden sollten.

## Beispiele

### Den zugänglichen Namen erhalten

Dieses Beispiel zeigt, wie `ariaLabelledByElements` verwendet werden kann, um ein ARIA-Label zu erhalten, das mit `aria-labelledby` definiert ist.

#### HTML

Das HTML definiert zwei {{htmlelement("span")}}-Elemente und referenziert deren IDs im `aria-labelledby`-Attribut eines {{htmlelement("input")}}. Der zugängliche Name des `<input>` ist die Verkettung des inneren Texts der beiden referenzierten Elemente, getrennt durch ein Leerzeichen.

```html
<span id="label_1">Street name</span>
<input aria-labelledby="label_1 label_2" />
<span id="label_2">(just the name, no "Street" or "Road" or "Place")</span>
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

Der untenstehende Code protokolliert zunächst den Wert des `aria-labelledby`-Attributs aus [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute) (ein String, der die `id`-Werte der referenzierten Elemente auflistet). Es wird dann geprüft, ob `ariaLabelledByElements` unterstützt wird, und falls ja, wird dessen Wert protokolliert. Schließlich gibt es die zugängliche Zeichenfolge zurück, die durch Iterieren über die Elemente und Verkettung ihres inneren Textes berechnet wird.

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const inputElement = document.querySelector("input");
log(`aria-labelledby: ${inputElement.getAttribute("aria-labelledby")}`);
// Feature test for ariaLabelledByElements
if ("ariaLabelledByElements" in Element.prototype) {
  // Get ariaLabelledByElements
  const labelElements = inputElement.ariaLabelledByElements;
  log(`ariaLabelledByElements: ${labelElements}`);

  // Log inner text of elements to get accessible name
  const text = labelElements.map((e) => e.textContent.trim()).join(" ");
  log(`Accessible name: ${text.trim()}`);
} else {
  log("element.ariaLabelledByElements: not supported by browser");
}
```

#### Ergebnis

Das untenstehende Protokoll zeigt die ursprünglichen Elementreferenzen, die zugehörigen/zurückgegebenen Elemente und den zugänglichen Namen. Beachten Sie, dass das Beispiel nichts mit dem im Straßenname `<input>` eingegebenen Text macht.

{{EmbedLiveSample("Get the accessible name","100%","150px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) Attribut
- [`ElementInternals.ariaLabelledByElements`](/de/docs/Web/API/ElementInternals/ariaLabelledByElements)
- [Gespiegelte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Attributspiegelung_ Leitfaden.
