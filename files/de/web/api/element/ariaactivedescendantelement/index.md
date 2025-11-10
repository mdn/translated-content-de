---
title: "Element: ariaActiveDescendantElement Eigenschaft"
short-title: ariaActiveDescendantElement
slug: Web/API/Element/ariaActiveDescendantElement
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("DOM")}}

Die **`ariaActiveDescendantElement`** Eigenschaft der [`Element`](/de/docs/Web/API/Element) Schnittstelle repräsentiert das aktuell aktive Element, wenn der Fokus auf einem [`composite`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role) Widget, [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role), [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) oder [`application`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) liegt.

Das Thema [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) enthält zusätzliche Informationen darüber, wie das Attribut und die Eigenschaft verwendet werden sollten.

## Wert

Eine Unterklasse von [`HTMLElement`](/de/docs/Web/API/HTMLElement), die den aktiven Nachfolger repräsentiert, oder `null`, wenn es keinen aktiven Nachfolger gibt.

## Beschreibung

Die Eigenschaft ist eine flexible Alternative zur Verwendung des [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) Attributs.
Im Gegensatz zu `aria-activedescendant` muss das Element, das dieser Eigenschaft zugewiesen ist, nicht über ein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) Attribut verfügen.

Die Eigenschaft spiegelt das [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage) Attribut des Elements wider, wenn es definiert ist, jedoch nur für `id`-Referenzwerte, die gültigen und im Gültigkeitsbereich befindlichen Elementen zugeordnet sind.
Wenn die Eigenschaft gesetzt wird, wird das entsprechende Attribut gelöscht.
Weitere Informationen über reflektierte Elementreferenzen und den Gültigkeitsbereich finden Sie unter [Reflektierte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Reflektierte Attribute_ Leitfaden.

## Beispiele

### Den aktiven Nachfolger abrufen

Dieses Beispiel zeigt, wie `ariaActiveDescendantElement` verwendet werden kann, um den aktuell aktiven Nachfolger abzurufen.

#### HTML

Das HTML definiert eine Listbox zur Auswahl verschiedener Straßentypen, bestehend aus einem {{htmlelement("div")}} Element mit der [`listbox` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role) und verschachtelten `<div>` Elementen für jede der Optionen.
Der aktive Nachfolger ist anfänglich auf das Element mit `id` `avenue` mittels `aria-activedescendant` gesetzt.

```html
<div id="streetType" role="listbox" aria-activedescendant="avenue">
  <div>Street</div>
  <div id="avenue">Avenue</div>
  <div>Lane</div>
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

Der untenstehende Code überprüft zuerst, ob `ariaActiveDescendantElement` unterstützt wird.
Wenn die Eigenschaft unterstützt wird, protokolliert der Code den Wert von `aria-activedescendant` (die `id` des referenzierten Elements) mit [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute), dem Eigenschaftselement und dem Textinhalt des Elements.

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
// Feature test for ariaActiveDescendantElement
if ("ariaActiveDescendantElement" in Element.prototype) {
  log(`getAttribute(): ${streetType.getAttribute("aria-activedescendant")}`);
  log(`ariaActiveDescendantElement: ${streetType.ariaActiveDescendantElement}`);
  log(`text: ${streetType.ariaActiveDescendantElement?.textContent.trim()}`);
} else {
  log("ariaActiveDescendantElement not supported by browser");
}
```

#### Ergebnis

Das untenstehende Protokoll zeigt die Ausgabe des obigen Codes.
Der von der `aria-activedescendant` Eigenschaft zurückgegebene Wert sollte `"avenue"` sein, das zugehörige Element sollte ein `HTMLDivElement` Element sein, und der Text in diesem Element sollte `Avenue` sein.

{{EmbedLiveSample("Get the active descendant","100%","190px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) Attribut
- [`ElementInternals.ariaActiveDescendantElement`](/de/docs/Web/API/ElementInternals/ariaActiveDescendantElement)
- [Reflektierte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Attribut-Reflexion_ Leitfaden.
