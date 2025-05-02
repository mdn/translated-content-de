---
title: "Element: ariaLabelledByElements-Eigenschaft"
short-title: ariaLabelledByElements
slug: Web/API/Element/ariaLabelledByElements
l10n:
  sourceCommit: 85d5b8d224843c37974318ff04fbcc1ab69ef95d
---

{{APIRef("DOM")}}

Die **`ariaLabelledByElements`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle ist ein Array, das das oder die Elemente enthält, die einen zugänglichen Namen für das Element bereitstellen, auf das sie angewendet wird.

Die Eigenschaft ist hauptsächlich dafür gedacht, ein Label für Elemente bereitzustellen, die keine standardmäßige Methode zur Definition ihres zugänglichen Namens haben.
Zum Beispiel könnte sie verwendet werden, um ein generisches Container-Element wie ein {{htmlelement("div")}} oder {{htmlelement("span")}} oder eine Gruppe von Elementen, wie ein Bild mit einem Schieberegler zur Anpassung der Transparenz, zu benennen.
Die Eigenschaft hat Vorrang vor anderen Mechanismen zur Bereitstellung eines zugänglichen Namens für Elemente und kann daher auch verwendet werden, um einen Namen für Elemente bereitzustellen, die üblicherweise ihren Namen aus dem inneren Inhalt oder von einem zugehörigen Element wie einem Label erhalten würden.

Das Thema [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) enthält zusätzliche Informationen darüber, wie das Attribut und die Eigenschaft verwendet werden sollten.

## Wert

Ein Array von Elementen.
Der innere Text dieser Elemente kann durch Leerzeichen verbunden werden, um den zugänglichen Namen zu erhalten.

Beim Lesen ist das zurückgegebene Array statisch und schreibgeschützt.
Beim Schreiben wird das zugewiesene Array kopiert: nachfolgende Änderungen am Array beeinflussen den Wert der Eigenschaft nicht.

## Beschreibung

Die Eigenschaft ist eine flexible Alternative zur Verwendung des [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attributs, um den zugänglichen Namen festzulegen.
Im Gegensatz zu `aria-labelledby` müssen die dieser Eigenschaft zugewiesenen Elemente kein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut haben.

Die Eigenschaft spiegelt das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attribut des Elements wider, wenn es definiert ist, jedoch nur für aufgeführte Referenz-`id`-Werte, die gültigen Elementen im Gültigkeitsbereich entsprechen.
Wenn die Eigenschaft gesetzt wird, wird das entsprechende Attribut geleert.
Weitere Informationen zu reflektierten Elementreferenzen und Gültigkeitsbereich finden Sie unter [Reflected element references](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Reflected attributes_-Leitfaden.

## Beispiele

### Den zugänglichen Namen abrufen

Dieses Beispiel zeigt, wie `ariaLabelledByElements` verwendet werden kann, um ein durch `aria-labelledby` definiertes ARIA-Label zu erhalten.

#### HTML

Das HTML definiert zwei {{htmlelement("span")}}-Elemente und verweist auf deren IDs im `aria-labelledby`-Attribut eines {{htmlelement("input")}}.
Der zugängliche Name des `<input>` ist die Verkettung des inneren Textes der beiden referenzierten Elemente, getrennt durch ein Leerzeichen.

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

Der untenstehende Code gibt zunächst den Wert des `aria-labelledby`-Attributs von [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute) aus (ein String, der die `id`-Werte der referenzierten Elemente auflistet).
Er prüft dann, ob die `ariaLabelledByElements`-Eigenschaft unterstützt wird, und falls ja, gibt er deren Wert aus.
Schließlich wird der zugängliche String zurückgegeben, der durch das Iterieren durch die Elemente und das Verketten ihres inneren Textes berechnet wird.

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

Das untenstehende Protokoll zeigt die ursprünglichen Elemente-Referenzen, die zugeordneten/zurückgegebenen Elemente und den zugänglichen Namen.
Beachten Sie, dass das Beispiel nichts mit dem in das Straßenname-`<input>` eingegebenen Text macht.

{{EmbedLiveSample("Get the accessible name","100%","150px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attribut
- [`ElementInternals.ariaLabelledByElements`](/de/docs/Web/API/ElementInternals/ariaLabelledByElements)
- [Reflected element references](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Attribute reflection_-Leitfaden.
