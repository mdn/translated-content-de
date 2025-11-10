---
title: "ARIA: aria-checked Attribut"
short-title: aria-checked
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-checked
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Das `aria-checked` Attribut gibt den aktuellen "checked"-Zustand von Kontrollkästchen, Optionsfeldern und anderen Widgets an.

> [!NOTE]
> Verwenden Sie nach Möglichkeit ein HTML {{htmlelement("input")}} Element mit `type="checkbox"` und `type="radio"`, da diese eingebaute Semantik haben und keine ARIA-Attribute erfordern.

## Beschreibung

Das `aria-checked` Attribut gibt an, ob das Element ausgewählt (`true`), nicht ausgewählt (`false`) oder ob der ausgewählte Status unbestimmt (`mixed`) ist, was bedeutet, dass es weder ausgewählt noch nicht ausgewählt ist. Der `mixed` Wert wird von den drei Zustands-Eingaberollen [`checkbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role) und [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) unterstützt.

Der `mixed` Wert wird nicht von [`radio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role), [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role) oder [`switch`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role) und Elementen, die davon erben, unterstützt. Der Wert wird `false` sein, wenn `mixed` gesetzt ist, wenn es nicht unterstützt wird.

```html
<span
  role="checkbox"
  id="checkBoxInput"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="chk15-label"></span>
<label id="chk15-label">Subscribe to the newsletter</label>
```

Das `tabindex` Attribut ist erforderlich, um den Fokus zu ermöglichen. JavaScript ist erforderlich, um den `aria-checked` Status umzuschalten. Und, wenn dieses Kontrollkästchen Teil eines einreichbaren Formulars ist, ist weiteres JavaScript erforderlich, um einen Namen und einen Wert festzulegen.

Das Obige könnte wie folgt geschrieben werden:

```html
<input type="checkbox" id="chk15-label" name="Subscribe" />
<label for="chk15-label">Subscribe to the newsletter</label>
```

Durch die Verwendung des {{htmlelement("input")}} Elements mit `type="checkbox"` anstelle von ARIA ist kein JavaScript erforderlich.

## Werte

- false
  - : Das Element unterstützt das Ausgewähltsein, ist aber derzeit nicht ausgewählt.
- true
  - : Das Element ist ausgewählt.
- mixed
  - : Nur für [`checkbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role) und [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role), entspricht `indeterminate`, was einen gemischten Moduswert angibt, der weder ausgewählt noch nicht ausgewählt ist.
- undefined (Standard)
  - : Das Element unterstützt das Ausgewähltsein nicht.

## Zugehörige Rollen

Verwendet in Rollen:

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
- [Zwei-Zustand-Kontrollkästchen Beispiel](https://www.w3.org/WAI/ARIA/apg/example-index/checkbox/checkbox.html) - w3.org
- [Misch-Zustand-Kontrollkästchen Beispiel](https://www.w3.org/WAI/ARIA/apg/example-index/checkbox/checkbox-mixed.html) - w3.org
