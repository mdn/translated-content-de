---
title: aria-checked
slug: Web/Accessibility/ARIA/Attributes/aria-checked
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das `aria-checked` Attribut gibt den aktuellen "ausgewählten" Zustand von Kontrollkästchen, Optionsfeldern und anderen Widgets an.

> [!NOTE]
> Wo möglich, verwenden Sie ein HTML {{htmlelement("input")}} Element mit `type="checkbox"` und `type="radio"`, da diese eingebaute Semantik haben und keine ARIA-Attribute erfordern.

## Beschreibung

Das `aria-checked` Attribut zeigt an, ob das Element ausgewählt (`true`), nicht ausgewählt (`false`) ist, oder ob der ausgewählte Status unbestimmt ist (`mixed`), was bedeutet, dass es weder ausgewählt noch nicht ausgewählt ist. Der `mixed` Wert wird von den Tri-State-Eingaberollen [`checkbox`](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role) und [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role) unterstützt.

Der `mixed` Wert wird bei [`radio`](/de/docs/Web/Accessibility/ARIA/Roles/radio_role), [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role) oder [`switch`](/de/docs/Web/Accessibility/ARIA/Roles/switch_role) und den von diesen abgeleiteten Elementen nicht unterstützt. Der Wert wird `false` sein, wenn `mixed` gesetzt wird, obwohl er nicht unterstützt wird.

```html
<span
  role="checkbox"
  id="checkBoxInput"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="chk15-label"></span>
<label id="chk15-label">Abonnieren Sie den Newsletter</label>
```

Das `tabindex` Attribut ist erforderlich, um den Fokus zu ermöglichen. JavaScript wird benötigt, um den `aria-checked` Zustand zu wechseln. Und wenn dieses Kontrollkästchen Teil eines absendbaren Formulars ist, ist mehr JavaScript erforderlich, um einen Namen und einen Wert festzulegen.

Das oben genannte hätte so geschrieben werden können:

```html
<input type="checkbox" id="chk15-label" name="Subscribe" />
<label for="chk15-label">Abonnieren Sie den Newsletter</label>
```

Durch die Verwendung des {{htmlelement("input")}} Elements mit `type="checkbox"` anstelle von ARIA ist kein JavaScript erforderlich.

## Werte

- false
  - : Das Element unterstützt das Auswählen, ist aber derzeit nicht ausgewählt.
- true
  - : Das Element ist ausgewählt.
- mixed
  - : Nur für [`checkbox`](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role) und [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role), entspricht `indeterminate` und zeigt einen gemischten Moduswert an, der weder ausgewählt noch nicht ausgewählt ist.
- undefined (Standard)
  - : Das Element unterstützt das Auswählen nicht.

## Zugehörige Rollen

Verwendet in Rollen:

- [`checkbox`](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [`option`](/de/docs/Web/Accessibility/ARIA/Roles/option_role)
- [`radio`](/de/docs/Web/Accessibility/ARIA/Roles/radio_role)
- [`switch`](/de/docs/Web/Accessibility/ARIA/Roles/switch_role)

## Zugehörige Schnittstellen

- {{domxref("Element.ariaChecked")}}
  - : Die [`ariaChecked`](/de/docs/Web/API/Element/ariaChecked) Eigenschaft, Teil der {{domxref("Element")}} Schnittstelle, spiegelt den Wert des `aria-checked` Attributs wider.
- {{domxref("ElementInternals.ariaChecked")}}
  - : Die [`ariaChecked`](/de/docs/Web/API/ElementInternals/ariaChecked) Eigenschaft, Teil der {{domxref("ElementInternals")}} Schnittstelle, spiegelt den Wert des `aria-checked` Attributs wider.

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
- [Zwei-Zustands-Kontrollkästchen-Beispiel](https://www.w3.org/WAI/ARIA/apg/example-index/checkbox/checkbox.html) - w3.org
- [Mischzustand-Kontrollkästchen-Beispiel](https://www.w3.org/WAI/ARIA/apg/example-index/checkbox/checkbox-mixed.html) - w3.org
