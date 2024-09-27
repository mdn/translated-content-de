---
title: aria-checked
slug: Web/Accessibility/ARIA/Attributes/aria-checked
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das `aria-checked` Attribut gibt an, ob der aktuelle Zustand von Kontrollkästchen, Optionsfeldern und anderen Widgets "geprüft" ist.

> [!NOTE]
> Wann immer möglich, verwenden Sie ein HTML-{{htmlelement("input")}}-Element mit `type="checkbox"` und `type="radio"`, da diese bereits eingebaute Semantik haben und keine ARIA-Attribute benötigen.

## Beschreibung

Das `aria-checked` Attribut gibt an, ob das Element geprüft (`true`), ungeprüft (`false`) oder ob der Prüfstatus unbestimmt (`mixed`) ist, was bedeutet, dass es weder geprüft noch ungeprüft ist. Der `mixed` Wert wird von den dreistufigen Eingaberollen [`checkbox`](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role) und [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role) unterstützt.

Der `mixed` Wert wird nicht von [`radio`](/de/docs/Web/Accessibility/ARIA/Roles/radio_role), [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role) oder [`switch`](/de/docs/Web/Accessibility/ARIA/Roles/switch_role) und den von diesen abgeleiteten Elementen unterstützt. Der Wert wird auf `false` gesetzt, wenn `mixed` aktiviert ist und nicht unterstützt wird.

```html
<span
  role="checkbox"
  id="checkBoxInput"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="chk15-label"></span>
<label id="chk15-label">Subscribe to the newsletter</label>
```

Das `tabindex` Attribut ist erforderlich, um den Fokus zu aktivieren. JavaScript ist erforderlich, um den `aria-checked` Zustand umzuschalten. Und, wenn dieses Kontrollkästchen Teil eines einreichbaren Formulars ist, ist weiteres JavaScript erforderlich, um einen Namen und einen Wert festzulegen.

Das Obige hätte so geschrieben werden können:

```html
<input type="checkbox" id="chk15-label" name="Subscribe" />
<label for="chk15-label">Subscribe to the newsletter</label>
```

Durch die Verwendung des {{htmlelement("input")}}-Elements mit `type="checkbox"` anstelle von ARIA ist kein JavaScript erforderlich.

## Werte

- false
  - : Das Element unterstützt das Überprüfen, ist aber derzeit nicht überprüft.
- true
  - : Das Element ist überprüft.
- mixed
  - : Nur für [`checkbox`](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role) und [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role), entspricht `indeterminate` und zeigt einen gemischten Modus an, bei dem weder überprüft noch ungeprüft ist.
- undefined (standardmäßig)
  - : Das Element unterstützt das Überprüfen nicht.

## Zugehörige Rollen

Verwendet in Rollen:

- [`checkbox`](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
- [`menuitemcheckbox`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [`option`](/de/docs/Web/Accessibility/ARIA/Roles/option_role)
- [`radio`](/de/docs/Web/Accessibility/ARIA/Roles/radio_role)
- [`switch`](/de/docs/Web/Accessibility/ARIA/Roles/switch_role)

## Zugehörige Schnittstellen

- [`Element.ariaChecked`](/de/docs/Web/API/Element/ariaChecked)
  - : Die [`ariaChecked`](/de/docs/Web/API/Element/ariaChecked)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-checked` Attributs wider.
- [`ElementInternals.ariaChecked`](/de/docs/Web/API/ElementInternals/ariaChecked)
  - : Die [`ariaChecked`](/de/docs/Web/API/ElementInternals/ariaChecked)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-checked` Attributs wider.

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
- [Zwei-Zustand-Kontrollkästchen Beispiel](https://www.w3.org/WAI/ARIA/apg/example-index/checkbox/checkbox.html) - w3.org
- [Gemischter Zustand-Kontrollkästchen Beispiel](https://www.w3.org/WAI/ARIA/apg/example-index/checkbox/checkbox-mixed.html) - w3.org
