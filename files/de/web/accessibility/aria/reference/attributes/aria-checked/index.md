---
title: "ARIA: aria-checked Attribut"
short-title: aria-checked
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-checked
l10n:
  sourceCommit: ce12c10364f35c64184dec44be85537b7e10d91f
---

Das `aria-checked` Attribut gibt den aktuellen "gecheckten" Zustand von Kontrollkästchen, Optionsfeldern und anderen Widgets an.

> [!NOTE]
> Verwenden Sie nach Möglichkeit ein HTML {{htmlelement("input")}} Element mit `type="checkbox"` und `type="radio"`, da diese eingebettete Semantik haben und keine ARIA-Attribute erfordern.

## Beschreibung

Das `aria-checked` Attribut gibt an, ob das Element gecheckt (`true`), nicht gecheckt (`false`) oder ob der Status des Gechecktseins unbestimmt (`mixed`) ist, was bedeutet, dass es weder gecheckt noch nicht gecheckt ist. Der `mixed` Wert wird von den drei Ausgangszustandsrollen [`checkbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role) und [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) unterstützt.

Der `mixed` Wert wird bei [`radio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role), [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role) oder [`switch`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role) und Elementen, die von diesen erben, nicht unterstützt. Der Wert wird `false` sein, wenn `mixed` gesetzt wird, wo es nicht unterstützt wird.

```html
<span
  role="checkbox"
  id="checkBoxInput"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="chk15-label"></span>
<label id="chk15-label">Subscribe to the newsletter</label>
```

Das `tabindex` Attribut ist erforderlich, um den Fokus zu aktivieren. JavaScript ist erforderlich, um den `aria-checked` Status umzuschalten. Und wenn dieses Kontrollkästchen Teil eines absendbaren Formulars ist, ist mehr JavaScript erforderlich, um einen Namen und einen Wert festzulegen.

Das obige hätte geschrieben werden können als:

```html
<input type="checkbox" id="chk15-label" name="Subscribe" />
<label for="chk15-label">Subscribe to the newsletter</label>
```

Durch die Verwendung des {{htmlelement("input")}} Elements mit `type="checkbox"` anstelle von ARIA ist kein JavaScript erforderlich.

## Werte

- false
  - : Das Element unterstützt das Gechecktsein, ist jedoch derzeit nicht gecheckt.
- true
  - : Das Element ist gecheckt.
- mixed
  - : Nur für [`checkbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role) und [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role), gleichbedeutend mit `indeterminate`, was einen gemischten Moduswert anzeigt, der weder gecheckt noch nicht gecheckt ist.
- undefined (default)
  - : Das Element unterstützt das Gechecktsein nicht.

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
- [Zwei Zustand Kontrollkästchen Beispiel](https://www.w3.org/WAI/ARIA/apg/example-index/checkbox/checkbox.html) - w3.org
- [Mix-Zustand Kontrollkästchen Beispiel](https://www.w3.org/WAI/ARIA/apg/example-index/checkbox/checkbox-mixed.html) - w3.org
