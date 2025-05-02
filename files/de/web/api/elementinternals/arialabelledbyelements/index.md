---
title: "ElementInternals: ariaLabelledByElements Eigenschaft"
short-title: ariaLabelledByElements
slug: Web/API/ElementInternals/ariaLabelledByElements
l10n:
  sourceCommit: 85d5b8d224843c37974318ff04fbcc1ab69ef95d
---

{{APIRef("DOM")}}

Die **`ariaLabelledByElements`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces ist ein Array, das das oder die Elemente enthält, die einen zugänglichen Namen für das Element bereitstellen, auf das es angewendet wird.

Die Eigenschaft ist in erster Linie dazu gedacht, ein Label für Elemente bereitzustellen, die keine standardisierte Methode zur Definition ihres zugänglichen Namens haben. Zum Beispiel könnte dies verwendet werden, um ein generisches Container-Element wie ein {{htmlelement("div")}} oder {{htmlelement("span")}} zu benennen, oder eine Gruppierung von Elementen, wie ein Bild mit einem Schieberegler, der verwendet werden kann, um die Opazität zu ändern. Die Eigenschaft hat Vorrang vor anderen Mechanismen zur Bereitstellung eines zugänglichen Namens für Elemente und kann daher auch dazu verwendet werden, einen Namen für Elemente bereitzustellen, die ihn normalerweise von ihrem inneren Inhalt oder von einem zugeordneten Element wie einem Label erhalten würden.

Das Thema [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) enthält zusätzliche Informationen darüber, wie das Attribut und die Eigenschaft verwendet werden sollten.

## Wert

Ein Array von Elementen. Der innere Text dieser Elemente kann mit Leerzeichen verbunden werden, um den zugänglichen Namen zu erhalten.

Beim Lesen ist das zurückgegebene Array statisch und schreibgeschützt. Beim Schreiben wird das zugewiesene Array kopiert: nachfolgende Änderungen am Array beeinflussen den Wert der Eigenschaft nicht.

## Beschreibung

Die Eigenschaft ist eine flexible Alternative zur Verwendung des [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attributs zur Festlegung des zugänglichen Namens. Im Gegensatz zu `aria-labelledby` müssen die dieser Eigenschaft zugewiesenen Elemente kein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut haben.

Die Eigenschaft spiegelt das `aria-labelledby`-Attribut des Elements wider, wenn es definiert ist, jedoch nur für aufgeführte `id`-Referenzwerte, die mit gültigen innerhalb des Geltungsbereichs befindlichen Elementen übereinstimmen. Wenn die Eigenschaft gesetzt ist, wird das entsprechende Attribut gelöscht. Weitere Informationen zu reflektierten Elementreferenzen und Geltungsbereichen finden Sie unter [Reflektierte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Reflected attributes_-Leitfaden.

## Beispiele

### Den zugänglichen Namen abrufen

Dieses Beispiel zeigt, wie `ariaLabelledByElements` verwendet werden kann, um programmgesteuert ein mit `aria-labelledby` innerhalb des Shadow-Roots definiertes Label abzurufen.

#### HTML

Das HTML definiert zwei {{htmlelement("span")}}-Elemente und referenziert deren IDs im `aria-labelledby`-Attribut eines {{htmlelement("input")}}. Der zugängliche Name des `<input>` ist daher die Verkettung des inneren Textes der beiden referenzierten Elemente.

```html
<div id="host">
  <template shadowrootmode="open">
    <span id="label_1">Street name</span>
    <input aria-labelledby="label_1 label_2" />
    <span id="label_2">(just the name, no "Street" or "Road" or "Place")</span>
  </template>
</div>
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

Der untenstehende Code prüft zuerst, ob `ariaLabelledByElements` unterstützt wird, und falls nicht, wird das Ergebnis protokolliert und beendet. Wenn die Eigenschaft unterstützt wird, protokolliert sie zunächst den Wert der Eigenschaft. Anschließend wird durch die zurückgegebenen Elemente iteriert, deren innerer Text verkettet und der resultierende zugängliche Name des Elements protokolliert.

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
// Get access to the input within shadowRoot
const hostElement = document.getElementById("host");
const shadowRoot = hostElement.shadowRoot;
const inputElement = shadowRoot.querySelector("input");

// Feature test for ariaLabelledByElements
if ("ariaLabelledByElements" in ElementInternals.prototype) {
  // Get and log attribute that provides the accessible name
  log(`aria-labelledby: ${inputElement.getAttribute("aria-labelledby")}`);

  // Get and log elements that provide the accessible name
  const labelElements = inputElement.ariaLabelledByElements;
  log(`ariaLabelledByElements: ${labelElements}`);

  // Log inner text of elements to get accessible name
  const text = labelElements.map((e) => e.textContent.trim()).join(" ");
  log(`Accessible name: ${text.trim()}`);
} else {
  log("ariaLabelledByElements not supported by browser");
}
```

#### Ergebnis

Das untenstehende Protokoll zeigt die Ausgabe des obigen Codes. Es sollte das Array der referenzierten [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement)-Elemente und den resultierenden zugänglichen Namen aus ihrem inneren Text anzeigen.

{{EmbedLiveSample("Get the accessible name","100%","150px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) Attribut
- [`Element.ariaLabelledByElements`](/de/docs/Web/API/Element/ariaLabelledByElements)
- [Reflektierte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Attribute reflection_-Leitfaden.
