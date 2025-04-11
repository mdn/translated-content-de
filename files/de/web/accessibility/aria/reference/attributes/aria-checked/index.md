---
title: aria-checked
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-checked
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Das `aria-checked` Attribut zeigt den aktuellen "ausgewählten" Zustand von Kontrollkästchen, Optionsfeldern und anderen Widgets an.

> [!NOTE]
> Verwenden Sie nach Möglichkeit ein HTML {{htmlelement("input")}} Element mit `type="checkbox"` und `type="radio"`, da diese eingebaute Semantik haben und keine ARIA-Attribute erfordern.

## Beschreibung

Das `aria-checked` Attribut gibt an, ob das Element ausgewählt (`true`), nicht ausgewählt (`false`) oder ob der ausgewählte Status unbestimmt (`mixed`) ist, was bedeutet, dass es weder ausgewählt noch nicht ausgewählt ist. Der `mixed` Wert wird von den Tri-State-Eingaberollen [`checkbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role) und [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) unterstützt.

Der `mixed` Wert wird nicht auf [`radio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role), [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role) oder [`switch`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role) und Elemente, die von diesen erben, unterstützt. Der Wert wird `false`, wenn `mixed` gesetzt wird, wenn er nicht unterstützt wird.

```html
<span
  role="checkbox"
  id="checkBoxInput"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="chk15-label"></span>
<label id="chk15-label">Subscribe to the newsletter</label>
```

Das `tabindex` Attribut ist erforderlich, um den Fokus zu aktivieren. JavaScript ist erforderlich, um den `aria-checked` Zustand zu wechseln. Und falls dieses Kontrollkästchen Teil eines absendbaren Formulars ist, ist mehr JavaScript erforderlich, um einen Namen und einen Wert festzulegen.

Das Obige hätte so geschrieben werden können:

```html
<input type="checkbox" id="chk15-label" name="Subscribe" />
<label for="chk15-label">Subscribe to the newsletter</label>
```

Durch die Verwendung des {{htmlelement("input")}} Elements mit `type="checkbox"` anstelle von ARIA ist kein JavaScript erforderlich.

## Werte

- false
  - : Das Element unterstützt das Auswählen, ist aber derzeit nicht ausgewählt.
- true
  - : Das Element ist ausgewählt.
- mixed
  - : Nur für [`checkbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role) und [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role), entspricht `indeterminate`, was einen gemischten Moduswert angibt, der weder ausgewählt noch nicht ausgewählt ist.
- undefined (Standard)
  - : Das Element unterstützt das Auswählen nicht.

## Zugehörige Rollen

Wird in Rollen verwendet:

- [`checkbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
- [`radio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`switch`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)

## Zugehörige Schnittstellen

- [`Element.ariaChecked`](/de/docs/Web/API/Element/ariaChecked)
  - : Die [`ariaChecked`](/de/docs/Web/API/Element/ariaChecked) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-checked` Attributs wider.
- [`ElementInternals.ariaChecked`](/de/docs/Web/API/ElementInternals/ariaChecked)
  - : Die [`ariaChecked`](/de/docs/Web/API/ElementInternals/ariaChecked) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-checked` Attributs wider.

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
- [Beispiel für ein zweistufiges Kontrollkästchen](https://www.w3.org/WAI/ARIA/apg/example-index/checkbox/checkbox.html) - w3.org
- [Beispiel für ein Kontrollkästchen im gemischten Zustand](https://www.w3.org/WAI/ARIA/apg/example-index/checkbox/checkbox-mixed.html) - w3.org
