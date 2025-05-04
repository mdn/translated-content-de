---
title: "Element: ariaActiveDescendantElement Eigenschaft"
short-title: ariaActiveDescendantElement
slug: Web/API/Element/ariaActiveDescendantElement
l10n:
  sourceCommit: 6bed868c7b75c4c3ca3721fa8ed6c6ad2f41262b
---

{{APIRef("DOM")}}

Die **`ariaActiveDescendantElement`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle repräsentiert das aktuell aktive Element, wenn der Fokus auf einem [`composite`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role)-Widget, [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role), [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) oder einer [`application`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) liegt.

Das Thema [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) enthält zusätzliche Informationen darüber, wie das Attribut und die Eigenschaft verwendet werden sollten.

## Wert

Eine Unterklasse von [`HTMLElement`](/de/docs/Web/API/HTMLElement), die den aktiven Nachfahren repräsentiert, oder `null`, wenn kein aktiver Nachfahre existiert.

## Beschreibung

Die Eigenschaft ist eine flexible Alternative zur Verwendung des [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)-Attributs.
Im Gegensatz zu `aria-activedescendant` muss das einem Element zugewiesene Objekt kein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut haben.

Die Eigenschaft spiegelt das [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)-Attribut eines Elements wider, wenn es definiert ist, jedoch nur für Referenz-`id`-Werte, die gültigen im Geltungsbereich befindlichen Elementen entsprechen.
Wenn die Eigenschaft gesetzt wird, wird das entsprechende Attribut gelöscht.
Weitere Informationen zu referenzierten Elementeigenschaften und Geltungsbereichen finden Sie unter [Reflektierte Elemente-Referenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Reflektierte Attribute_-Leitfaden.

## Beispiele

### Den aktiven Nachfahren abrufen

Dieses Beispiel zeigt, wie `ariaActiveDescendantElement` verwendet werden kann, um den aktuellen aktiven Nachfahren zu bekommen.

#### HTML

Das HTML definiert eine Listbox zur Auswahl verschiedener Straßenarten, bestehend aus einem {{htmlelement("div")}}-Element mit der [`listbox`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role) und verschachtelten `<div>`-Elementen für jede der Optionen.
Der aktive Nachfahre wird zunächst auf das Element mit `id` `avenue` unter Verwendung von `aria-activedescendant` gesetzt.

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

Der unten stehende Code überprüft zuerst, ob `ariaActiveDescendantElement` unterstützt wird.
Wenn die Eigenschaft unterstützt wird, gibt der Code dann den Wert von `aria-activedescendant` (die `id` des referenzierten Elements) unter Verwendung von [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute), das Eigenschaftselement und den Textinhalt des Elements aus.

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
Der von der Eigenschaft `aria-activedescendant` zurückgegebene Wert sollte `"avenue"` sein, das zugeordnete Element sollte ein `HTMLDivElement`-Element sein, und der Text in diesem Element sollte `Avenue` lauten.

{{EmbedLiveSample("Get the active descendant","100%","190px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)-Attribut
- [`ElementInternals.ariaActiveDescendantElement`](/de/docs/Web/API/ElementInternals/ariaActiveDescendantElement)
- [Reflektierte Elemente-Referenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Attribute reflection_-Leitfaden.
