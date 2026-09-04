---
title: "Element: ariaLabelledByElements-Eigenschaft"
short-title: ariaLabelledByElements
slug: Web/API/Element/ariaLabelledByElements
l10n:
  sourceCommit: 3b4a7a32fc2fe8cb6bd9a1e62f4ca52e002599ef
---

{{APIRef("DOM")}}

Die **`ariaLabelledByElements`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces ist ein Array, das das oder die Elemente enthält, die einen zugänglichen Namen für das Element bereitstellen, auf das sie angewendet wird.

Die Eigenschaft spiegelt [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) (unter bestimmten Umständen) wider und soll ähnlich dazu dienen, ein Label für Elemente bereitzustellen, die keine standardisierte Methode zur Definition ihres zugänglichen Namens haben. Der Hauptunterschied besteht darin, dass die Eigenschaft verwendet werden kann, um Beschriftungstext aus Elementen ohne `id` bereitzustellen, und dass sie Vorrang vor allen anderen Methoden der Festlegung des ARIA-Labels hat.

## Wert

Ein Array von Elementen.
Der innere Text dieser Elemente kann mit Leerzeichen verbunden werden, um den zugänglichen Namen zu erhalten.

Beim Lesen ist das zurückgegebene Array statisch und schreibgeschützt.
Beim Schreiben wird das zugewiesene Array kopiert: nachfolgende Änderungen am Array beeinflussen den Wert der Eigenschaft nicht.

## Beschreibung

Die Eigenschaft ist eine flexible Alternative zur Verwendung des [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attributs, um den zugänglichen Namen festzulegen. Im Gegensatz zu `aria-labelledby` müssen die den Elements zugewiesenen Elemente kein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut haben.

Beispielsweise könnte dies verwendet werden, um ein Container-Element wie ein {{htmlelement("div")}} oder {{htmlelement("span")}} zu beschriften (vorausgesetzt, es wurde mit einer [geeigneten ARIA-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby#associated_roles) versehen). Die Eigenschaft hat Vorrang vor anderen Mechanismen zur Bereitstellung eines zugänglichen Namens für Elemente und kann daher auch verwendet werden, um einem Element, das normalerweise seinen Namen aus seinem inneren Inhalt oder einem zugehörigen Element wie einem Label erhalten würde, einen Namen zu geben.

Die Eigenschaft spiegelt das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attribut des Elements wider, wenn es definiert ist, jedoch nur für aufgelistete Referenz-`id`-Werte, die mit gültigen Elementen im Anwendungsbereich übereinstimmen. Wenn die Eigenschaft gesetzt ist, wird das entsprechende Attribut gelöscht. Weitere Informationen über reflektierte Elementreferenzen und Gültigkeitsbereich finden Sie unter [Reflected element references](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Reflected attributes_-Leitfaden.

Sehen Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) für zusätzliche Informationen darüber, wie das Attribut und die Eigenschaft verwendet werden sollten.

## Beispiele

### Den zugänglichen Namen erhalten

Dieses Beispiel zeigt, wie `ariaLabelledByElements` verwendet werden kann, um ein ARIA-Label zu erhalten, das mit `aria-labelledby` definiert wurde.

#### HTML

Das HTML definiert zwei {{htmlelement("span")}}-Elemente und referenziert deren `id`s im `aria-labelledby`-Attribut eines {{htmlelement("input")}}. Der zugängliche Name des `<input>` ist die Verkettung des inneren Textes der beiden referenzierten Elemente, getrennt durch ein Leerzeichen.

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

Der folgende Code protokolliert zuerst den Wert des `aria-labelledby`-Attributs von [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute) (einen String, der die `id`-Werte der referenzierten Elemente auflistet). Es wird dann überprüft, ob `ariaLabelledByElements` unterstützt wird, und falls ja, wird deren Wert protokolliert. Schließlich gibt es den zugänglichen String zurück, indem die Elemente durchlaufen und deren innerer Text verkettet wird.

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

Das untenstehende Log zeigt die ursprünglichen Elementreferenzen, die zugeordneten/zurückgegebenen Elemente und den zugänglichen Namen. Beachten Sie, dass das Beispiel nichts mit dem Text tut, der in den Straßennamen-`<input>` eingegeben wird.

{{EmbedLiveSample("Get the accessible name","100%","150px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attribut
- [`ElementInternals.ariaLabelledByElements`](/de/docs/Web/API/ElementInternals/ariaLabelledByElements)
- [Reflected element references](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Attribute reflection_-Leitfaden.
