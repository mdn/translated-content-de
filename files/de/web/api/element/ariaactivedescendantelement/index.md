---
title: "Element: ariaActiveDescendantElement-Eigenschaft"
short-title: ariaActiveDescendantElement
slug: Web/API/Element/ariaActiveDescendantElement
l10n:
  sourceCommit: 85d5b8d224843c37974318ff04fbcc1ab69ef95d
---

{{APIRef("DOM")}}

Die **`ariaActiveDescendantElement`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces repräsentiert das aktuell aktive Element, wenn der Fokus auf einem [`composite`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role)-Widget, [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role), [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) oder einer [`application`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) liegt.

Das Thema [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) enthält zusätzliche Informationen darüber, wie das Attribut und die Eigenschaft verwendet werden sollten.

## Wert

Eine Unterklasse von [`HTMLElement`](/de/docs/Web/API/HTMLElement), die den aktiven Nachfolger darstellt, oder `null`, wenn es keinen aktiven Nachfolger gibt.

## Beschreibung

Die Eigenschaft ist eine flexible Alternative zur Verwendung des [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)-Attributs.
Im Gegensatz zu `aria-activedescendant` muss das dieser Eigenschaft zugewiesene Element kein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut haben.

Die Eigenschaft spiegelt das [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)-Attribut des Elements wider, wenn es definiert ist, allerdings nur für Referenz-`id`-Werte, die mit gültigen in-Scope-Elementen übereinstimmen.
Wird die Eigenschaft gesetzt, so wird das entsprechende Attribut geleert.
Für weitere Informationen zu reflektierten Elementreferenzen und Scope siehe [Reflektierte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Reflektierte Attribute_-Leitfaden.

## Beispiele

### Den aktiven Nachfolger abrufen

Dieses Beispiel zeigt, wie `ariaActiveDescendantElement` verwendet werden kann, um den aktuellen aktiven Nachfolger zu erhalten.

#### HTML

Das HTML definiert eine Listbox zur Auswahl verschiedener Straßentypen, bestehend aus einem {{htmlelement("div")}}-Element mit der [`listbox` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role) und verschachtelten `<div>`-Elementen für jede Option.
Der aktive Nachfolger ist zunächst auf das Element mit der `id` `avenue` mittels `aria-activedescendant` gesetzt.

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

Der untenstehende Code überprüft zunächst, ob `ariaActiveDescendantElement` unterstützt wird.
Wenn die Eigenschaft unterstützt wird, protokolliert der Code den Wert von `aria-activedescendant` (die `id` des referenzierten Elements) mittels [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute), dem Eigenschaftselement und dem Textinhalt des Elements.

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

Das folgende Protokoll zeigt die Ausgabe des obigen Codes.
Der aus der `aria-activedescendant`-Eigenschaft zurückgegebene Wert sollte `"avenue"` sein, das zugehörige Element sollte ein `HTMLDivElement`-Element sein und der Text in diesem Element sollte `Avenue` sein.

{{EmbedLiveSample("Get the active descendant","100%","190px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)-Attribut
- [`ElementInternals.ariaActiveDescendantElement`](/de/docs/Web/API/ElementInternals/ariaActiveDescendantElement)
- [Reflektierte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Attributreflexions_-Leitfaden.
