---
title: "ARIA: Attribut aria-checked"
short-title: aria-checked
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-checked
l10n:
  sourceCommit: b126460df717d910e92f311f0603800987ecebee
---

Das Attribut `aria-checked` gibt den aktuellen Auswahlzustand von Checkboxen, Radio-Buttons und anderen Widgets an.

> [!NOTE]
> Verwenden Sie nach Möglichkeit ein HTML-Element {{htmlelement("input")}} mit `type="checkbox"` oder `type="radio"`. Diese Elemente verfügen über eine integrierte Semantik und benötigen keine ARIA-Attribute.

## Beschreibung

Das Attribut `aria-checked` gibt an, ob das Element ausgewählt (`true`), nicht ausgewählt (`false`) oder sein Auswahlzustand unbestimmt (`mixed`) ist. `mixed` bedeutet, dass es weder ausgewählt noch nicht ausgewählt ist. Der Wert `mixed` wird von den Rollen [`checkbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role) und [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) unterstützt, die drei Zustände zulassen.

Der Wert `mixed` wird von [`radio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role), [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role), [`switch`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role) und Elementen, die von diesen Rollen erben, nicht unterstützt. Wird `mixed` verwendet, obwohl es nicht unterstützt wird, ist der Wert `false`.

```html
<span
  role="checkbox"
  id="checkBoxInput"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="chk15-label"></span>
<label id="chk15-label">Subscribe to the newsletter</label>
```

Das Attribut `tabindex` ist erforderlich, damit das Element den Fokus erhalten kann. Zum Umschalten des Zustands von `aria-checked` ist JavaScript erforderlich. Wenn diese Checkbox Teil eines Formulars ist, das abgesendet werden kann, ist außerdem weiteres JavaScript nötig, um einen Namen und einen Wert festzulegen.

Das obige Beispiel hätte auch so geschrieben werden können:

```html
<input type="checkbox" id="chk15-label" name="Subscribe" />
<label for="chk15-label">Subscribe to the newsletter</label>
```

Wenn Sie statt ARIA das Element {{htmlelement("input")}} mit `type="checkbox"` verwenden, ist kein JavaScript erforderlich.

## Werte

- false
  - : Das Element unterstützt einen Auswahlzustand, ist aber derzeit nicht ausgewählt.
- true
  - : Das Element ist ausgewählt.
- mixed
  - : Nur für [`checkbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role) und [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role). Entspricht `indeterminate` und bezeichnet einen gemischten Zustand, der weder ausgewählt noch nicht ausgewählt ist.
- undefined (Standardwert)
  - : Das Element unterstützt keinen Auswahlzustand.

## Zugehörige Rollen

Wird in folgenden Rollen verwendet:

- [`checkbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
- [`radio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`switch`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)

## Zugehörige Schnittstellen

- [`Element.ariaChecked`](/de/docs/Web/API/Element/ariaChecked)
  - : Die Eigenschaft [`ariaChecked`](/de/docs/Web/API/Element/ariaChecked) der Schnittstelle [`Element`](/de/docs/Web/API/Element) spiegelt den Wert des Attributs `aria-checked` wider.
- [`ElementInternals.ariaChecked`](/de/docs/Web/API/ElementInternals/ariaChecked)
  - : Die Eigenschaft [`ariaChecked`](/de/docs/Web/API/ElementInternals/ariaChecked) der Schnittstelle [`ElementInternals`](/de/docs/Web/API/ElementInternals) spiegelt den Wert des Attributs `aria-checked` wider.

```js
myHTMLElement.ariaChecked = true;
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)
- [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)
- [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
- [Beispiel für eine Checkbox mit zwei Zuständen](https://www.w3.org/WAI/ARIA/apg/example-index/checkbox/checkbox.html) – w3.org
- [Beispiel für eine Checkbox mit gemischtem Zustand](https://www.w3.org/WAI/ARIA/apg/example-index/checkbox/checkbox-mixed.html) – w3.org
