---
title: "ElementInternals: ariaLabelledByElements-Eigenschaft"
short-title: ariaLabelledByElements
slug: Web/API/ElementInternals/ariaLabelledByElements
l10n:
  sourceCommit: 6bed868c7b75c4c3ca3721fa8ed6c6ad2f41262b
---

{{APIRef("DOM")}}

Die **`ariaLabelledByElements`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces ist ein Array, das das Element (oder die Elemente) enthält, die einen zugänglichen Namen für das Element bereitstellen, auf das sie angewendet wird.

Die Eigenschaft ist hauptsächlich dazu gedacht, einem Element ein Label zuzuweisen, das keine standardmäßige Methode zur Definition seines zugänglichen Namens hat.
Zum Beispiel könnte dies verwendet werden, um ein generisches Containerelement zu benennen, wie ein {{htmlelement("div")}} oder {{htmlelement("span")}}, oder eine Gruppierung von Elementen, wie ein Bild mit einem Schieberegler, der verwendet werden kann, um dessen Deckkraft zu ändern.
Die Eigenschaft hat Vorrang vor anderen Mechanismen zur Bereitstellung eines zugänglichen Namens für Elemente und kann daher auch verwendet werden, um einem Element einen Namen zu geben, das ihn normalerweise aus seinem inneren Inhalt oder von einem zugehörigen Element wie einem Label erhält.

Das Thema [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) enthält zusätzliche Informationen darüber, wie das Attribut und die Eigenschaft verwendet werden sollten.

## Wert

Ein Array von Elementen.
Der innere Text dieser Elemente kann durch Leerzeichen verbunden werden, um den zugänglichen Namen zu erhalten.

Beim Lesen ist das zurückgegebene Array statisch und schreibgeschützt.
Beim Schreiben wird das zugewiesene Array kopiert: Nachfolgende Änderungen am Array beeinflussen den Wert der Eigenschaft nicht.

## Beschreibung

Die Eigenschaft ist eine flexible Alternative zur Verwendung des [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attributs, um den zugänglichen Namen festzulegen.
Im Gegensatz zu `aria-labelledby` müssen die dieser Eigenschaft zugewiesenen Elemente kein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut haben.

Die Eigenschaft spiegelt das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attribut des Elements wider, wenn es definiert ist, jedoch nur für aufgelistete Referenz-`id`-Werte, die mit gültigen in-Scope-Elementen übereinstimmen.
Wenn die Eigenschaft gesetzt ist, wird das entsprechende Attribut gelöscht.
Für weitere Informationen zu reflektierten Elementreferenzen und Scope siehe [Reflected element references](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Reflected attributes_-Leitfaden.

## Beispiele

### Den zugänglichen Namen abrufen

Dieses Beispiel zeigt, wie `ariaLabelledByElements` verwendet werden kann, um programmgesteuert ein Label zu erhalten, das mit `aria-labelledby` innerhalb des Shadow-Roots definiert wurde.

#### HTML

Das HTML definiert zwei {{htmlelement("span")}}-Elemente und verweist auf deren IDs im `aria-labelledby`-Attribut eines {{htmlelement("input")}}.
Der zugängliche Name des `<input>` ist daher die Verkettung des inneren Textes der beiden referenzierten Elemente.

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

Der Code unten prüft zuerst, ob `ariaLabelledByElements` unterstützt wird, und wenn nicht, wird das Ergebnis protokolliert und der Vorgang beendet.
Wenn die Eigenschaft unterstützt wird, wird zunächst der Wert der Eigenschaft protokolliert.
Dann iteriert er durch die zurückgegebenen Elemente, verkettet deren inneren Text und protokolliert den resultierenden zugänglichen Namen des Elements.

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

Das unten stehende Protokoll zeigt die Ausgabe des obigen Codes.
Es zeigt das Array der referenzierten [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement)-Elemente und den resultierenden zugänglichen Namen aus ihrem inneren Text.

{{EmbedLiveSample("Den zugänglichen Namen abrufen", "100%", "150px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attribut
- [`Element.ariaLabelledByElements`](/de/docs/Web/API/Element/ariaLabelledByElements)
- [Reflected element references](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Attribute reflection_-Leitfaden.
