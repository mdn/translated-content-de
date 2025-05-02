---
title: aria-errormessage
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage
l10n:
  sourceCommit: 85d5b8d224843c37974318ff04fbcc1ab69ef95d
---

Das Attribut `aria-errormessage` eines Objekts identifiziert das oder die Elemente, die eine Fehlermeldung für dieses Objekt bereitstellen.

## Beschreibung

Bei einem benutzererstellten Fehler sollten Sie den Benutzer darüber informieren, dass der Fehler existiert und wie er behoben werden kann. Es gibt zwei Attribute, die Sie verwenden müssen: Setzen Sie [`aria-invalid="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid), um das Objekt als fehlerhaft zu definieren und fügen Sie dann das Attribut `aria-errormessage` hinzu, wobei der Wert die `id` des Elements (oder der Elemente) ist, die den Fehlermeldungstext für dieses Objekt enthalten.

Das Attribut `aria-errormessage` sollte nur verwendet werden, wenn der Wert eines Objekts ungültig ist; wenn [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid) auf `true` gesetzt ist. Wenn das Objekt gültig ist und Sie das Attribut `aria-errormessage` einschließen, stellen Sie sicher, dass das referenzierte Element ausgeblendet ist, da die enthaltene Nachricht nicht relevant ist.

Wenn `aria-errormessage` relevant ist, müssen die referenzierten Elemente sichtbar sein, damit Benutzer die Fehlermeldung sehen oder hören können.

Oft möchten Sie, dass das Element mit der Fehlermeldung eine [ARIA Live-Region](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) ist, beispielsweise wenn eine Fehlermeldung angezeigt wird, nachdem Benutzer einen ungültigen Wert eingegeben haben. Die Fehlermeldung sollte beschreiben, was falsch ist und dem Benutzer mitteilen, was erforderlich ist, um das Objekt gültig zu machen. Das Hinzufügen der Fehlermeldung als ARIA Live-Region informiert unterstützende Technologien darüber, dass der Benutzer von dem Inhalt der Fehlermeldung profitieren könnte, auch wenn die Fehlermeldung dem Benutzer sonst nicht mitgeteilt würde.

Fügen Sie eine sichtbare Fehlermeldung hinzu und verknüpfen Sie das ungültige Objekt mit dem Attribut `aria-errormessage`, wenn der Fehler visuell erkennbar ist und eine explizite Erklärung des Fehlers erforderlich ist.

## Beispiel

Wir erstellen einige Stile, um:

1. Alle Fehlermeldungen zu verbergen,
2. Ungültige Objekte als ungültig erscheinen zu lassen, und
3. Fehlermeldungen anzuzeigen, die nach einem ungültigen Objekt als Geschwisterelemente kommen.

Wir verwenden `aria-invalid="true"`, um ungültige Objekte zu identifizieren:

```css
.errormessage {
  visibility: hidden;
}

[aria-invalid="true"] {
  outline: 2px solid red;
}

[aria-invalid="true"] ~ .errormessage {
  visibility: visible;
}
```

Wenn ein Objekt ungültig ist, verwenden wir JavaScript, um `aria-invalid="true"` hinzuzufügen. Das obige CSS lässt die `.errormessage`, die einem ungültigen Objekt folgt, sichtbar werden.

```html
<p>
  <label for="email">Email address:</label>
  <input
    type="email"
    name="email"
    id="email"
    aria-invalid="true"
    aria-errormessage="err1" />
  <span id="err1" class="errormessage">Error: Enter a valid email address</span>
</p>
```

Als wir von gültig zu ungültig wechselten, war die einzige JavaScript-Änderung in diesem Beispiel ein Update von `aria-invalid` im E-Mail-Eingabeobjekt. Da die Fehlermeldung der Eingabe folgt und sichtbar und im Zugänglichkeitsbaum verfügbar wird, können wir unser Beispiel einfach halten. Wir hätten auch eine [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) Eigenschaft anwenden oder Rollen von Live-Regionen wie [`alert`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) verwenden können.

## Werte

- ID-Referenzliste
  - : Die `id` oder durch Leerzeichen getrennte Liste von Element-`id`s, die die Fehlermeldung für das aktuelle Element enthalten.

## Zugeordnete Schnittstellen

- [`Element.ariaErrorMessageElements`](/de/docs/Web/API/Element/ariaErrorMessageElements)
  - : Die Eigenschaft `ariaErrorMessageElements` ist Teil der Schnittstelle jedes Elements.
    Ihr Wert ist ein Array von Unterklassen von [`Element`](/de/docs/Web/API/Element), die die `id`-Referenzen im `aria-errormessage`-Attribut widerspiegeln ([mit einigen Vorbehalten](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).
- [`ElementInternals.ariaErrorMessageElements`](/de/docs/Web/API/ElementInternals/ariaErrorMessageElements)
  - : Die Eigenschaft `ariaErrorMessageElements` ist Teil der Schnittstelle jedes benutzerdefinierten Elements.
    Ihr Wert ist ein Array von Unterklassen von [`Element`](/de/docs/Web/API/Element), die die `id`-Referenzen im `aria-errormessage`-Attribut widerspiegeln ([mit einigen Vorbehalten](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).

## Zugeordnete Rollen

Verwendet in Rollen:

- [`application`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
- [`checkbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
- [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
- [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)

Erbt von Rollen:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [`searchbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)
- [`switch`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- CSS {{CSSxref(':invalid')}} Pseudoklasse
- [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
