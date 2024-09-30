---
title: aria-checked
slug: Web/Accessibility/ARIA/Attributes/aria-checked
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das `aria-checked` Attribut zeigt den aktuellen "gecheckten" Zustand von Kontrollkästchen, Optionsfeldern und anderen Widgets an.

> [!NOTE]
> Wo möglich, verwenden Sie ein HTML {{htmlelement("input")}} Element mit `type="checkbox"` und `type="radio"`, da diese eingebaute Semantik haben und keine ARIA-Attribute erfordern.

## Beschreibung

Das `aria-checked` Attribut gibt an, ob das Element gecheckt (`true`), ungecheckt (`false`) oder ob der Status unbestimmt (`mixed`) ist, was bedeutet, dass es weder gecheckt noch ungecheckt ist. Der `mixed` Wert wird von den dreistufigen Input-Rollen [`checkbox`](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role) und [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role) unterstützt.

Der `mixed` Wert wird nicht von [`radio`](/de/docs/Web/Accessibility/ARIA/Roles/radio_role), [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role) oder [`switch`](/de/docs/Web/Accessibility/ARIA/Roles/switch_role) und den von diesen ererbten Elementen unterstützt. Der Wert wird `false` sein, wenn `mixed` gesetzt ist, wenn dies nicht unterstützt wird.

```html
<span
  role="checkbox"
  id="checkBoxInput"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="chk15-label"></span>
<label id="chk15-label">Subscribe to the newsletter</label>
```

Das `tabindex` Attribut ist erforderlich, um den Fokus zu aktivieren. JavaScript ist erforderlich, um den `aria-checked` Zustand zu umschalten. Wenn dieses Kontrollkästchen Teil eines absendbaren Formulars ist, ist mehr JavaScript erforderlich, um einen Namen und einen Wert festzulegen.

Das obige Beispiel könnte so geschrieben werden:

```html
<input type="checkbox" id="chk15-label" name="Subscribe" />
<label for="chk15-label">Subscribe to the newsletter</label>
```

Durch die Verwendung des {{htmlelement("input")}} Elements mit `type="checkbox"` anstelle von ARIA ist kein JavaScript erforderlich.

## Werte

- false
  - : Das Element unterstützt das Gechecktsein, ist jedoch momentan nicht gecheckt.
- true
  - : Das Element ist gecheckt.
- mixed
  - : nur für [`checkbox`](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role) und [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role), entspricht `indeterminate`, was einen gemischten Moduswert von weder gecheckt noch ungecheckt anzeigt.
- undefined (Standard)
  - : Das Element unterstützt das Gechecktsein nicht.

## Zugehörige Rollen

Genutzt in Rollen:

- [`checkbox`](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [`option`](/de/docs/Web/Accessibility/ARIA/Roles/option_role)
- [`radio`](/de/docs/Web/Accessibility/ARIA/Roles/radio_role)
- [`switch`](/de/docs/Web/Accessibility/ARIA/Roles/switch_role)

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

- [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox)
- [`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio)
- [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed)
- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)
- [Zwei Zustand Kontrollkästchen Beispiel](https://www.w3.org/WAI/ARIA/apg/example-index/checkbox/checkbox.html) - w3.org
- [Gemischter Zustand Kontrollkästchen Beispiel](https://www.w3.org/WAI/ARIA/apg/example-index/checkbox/checkbox-mixed.html) - w3.org
