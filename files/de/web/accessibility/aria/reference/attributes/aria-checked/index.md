---
title: "ARIA: aria-checked-Attribut"
short-title: aria-checked
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-checked
l10n:
  sourceCommit: d9e522ed63f204df4b9ab3ed6c8208ce089fa868
---

Das Attribut `aria-checked` gibt den aktuellen Zustand „aktiviert“ von Kontrollkästchen, Optionsfeldern und anderen Widgets an.

> [!NOTE]
> Verwenden Sie nach Möglichkeit ein HTML-{{htmlelement("input")}}-Element mit `type="checkbox"` oder `type="radio"`. Diese Elemente verfügen über eine integrierte Semantik und benötigen keine ARIA-Attribute.

## Beschreibung

Das Attribut `aria-checked` gibt an, ob das Element aktiviert (`true`) oder nicht aktiviert (`false`) ist oder ob sein Zustand unbestimmt (`mixed`) ist – es also weder aktiviert noch nicht aktiviert ist. Der Wert `mixed` wird von den Rollen [`checkbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role) und [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role) unterstützt, die drei Zustände zulassen.

Der Wert `mixed` wird von [`radio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role), [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role) und [`switch`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role) sowie von Elementen, die von diesen Rollen erben, nicht unterstützt. Wird `mixed` gesetzt, obwohl es nicht unterstützt wird, gilt der Wert als `false`.

```html
<span
  role="checkbox"
  id="checkBoxInput"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="chk15-label"></span>
<label id="chk15-label">Subscribe to the newsletter</label>
```

Das Attribut `tabindex` ist erforderlich, damit das Element fokussiert werden kann. Um den Zustand von `aria-checked` umzuschalten, ist JavaScript erforderlich. Wenn dieses Kontrollkästchen Teil eines absendbaren Formulars ist, wird außerdem JavaScript benötigt, um einen Namen und einen Wert festzulegen.

Das obige Beispiel hätte auch so geschrieben werden können:

```html
<input type="checkbox" id="chk15-label" name="Subscribe" />
<label for="chk15-label">Subscribe to the newsletter</label>
```

Wenn Sie statt ARIA ein {{htmlelement("input")}}-Element mit `type="checkbox"` verwenden, ist kein JavaScript erforderlich.

## Werte

- false
  - : Das Element kann aktiviert werden, ist derzeit aber nicht aktiviert.
- true
  - : Das Element ist aktiviert.
- mixed
  - : Nur für [`checkbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role) und [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role): Entspricht `indeterminate` und gibt einen gemischten Zustand an, der weder aktiviert noch nicht aktiviert ist.
- undefined (Standardwert)
  - : Das Element kann nicht aktiviert werden.

## Zugehörige Schnittstellen

- [`Element.ariaChecked`](/de/docs/Web/API/Element/ariaChecked)
  - : Die Eigenschaft [`ariaChecked`](/de/docs/Web/API/Element/ariaChecked) der Schnittstelle [`Element`](/de/docs/Web/API/Element) spiegelt den Wert des Attributs `aria-checked` wider.
- [`ElementInternals.ariaChecked`](/de/docs/Web/API/ElementInternals/ariaChecked)
  - : Die Eigenschaft [`ariaChecked`](/de/docs/Web/API/ElementInternals/ariaChecked) der Schnittstelle [`ElementInternals`](/de/docs/Web/API/ElementInternals) spiegelt den Wert des Attributs `aria-checked` wider.

```js
myHTMLElement.ariaChecked = true;
```

## Zugehörige Rollen

Wird in folgenden Rollen verwendet:

- [`checkbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`option`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
- [`radio`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`switch`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)
- [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)
- [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
- [Beispiel für ein Kontrollkästchen mit zwei Zuständen](https://www.w3.org/WAI/ARIA/apg/example-index/checkbox/checkbox.html) – w3.org
- [Beispiel für ein Kontrollkästchen mit gemischtem Zustand](https://www.w3.org/WAI/ARIA/apg/example-index/checkbox/checkbox-mixed.html) – w3.org
