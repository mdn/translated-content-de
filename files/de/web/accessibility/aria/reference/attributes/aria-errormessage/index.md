---
title: "ARIA: Attribut aria-errormessage"
short-title: aria-errormessage
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage
l10n:
  sourceCommit: d9e522ed63f204df4b9ab3ed6c8208ce089fa868
---

Das Attribut `aria-errormessage` eines Objekts gibt das Element oder die Elemente an, die eine Fehlermeldung für dieses Objekt bereitstellen.

## Beschreibung

Wenn durch eine Benutzereingabe ein Fehler entsteht, sollten Sie die Benutzer darüber informieren und ihnen erklären, wie sie ihn beheben können. Dafür benötigen Sie zwei Attribute: Setzen Sie [`aria-invalid="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid), um das Objekt als fehlerhaft zu kennzeichnen. Fügen Sie anschließend das Attribut `aria-errormessage` hinzu und setzen Sie dessen Wert auf die `id` des Elements oder der Elemente, die den Fehlermeldungstext für dieses Objekt enthalten.

Das Attribut `aria-errormessage` sollte nur verwendet werden, wenn der Wert eines Objekts ungültig ist, also wenn [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid) auf `true` gesetzt ist. Wenn das Objekt gültig ist und Sie das Attribut `aria-errormessage` dennoch angeben, stellen Sie sicher, dass das referenzierte Element ausgeblendet ist, da seine Meldung dann nicht relevant ist.

Wenn `aria-errormessage` relevant ist, müssen die referenzierten Elemente sichtbar sein, damit Benutzer die Fehlermeldung sehen oder hören können.

Häufig empfiehlt es sich, das Element mit der Fehlermeldung als [ARIA-Live-Region](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) einzurichten, etwa wenn eine Fehlermeldung angezeigt wird, nachdem Benutzer einen ungültigen Wert eingegeben haben. Die Fehlermeldung sollte beschreiben, was falsch ist, und erklären, was erforderlich ist, damit das Objekt gültig wird. Wenn Sie die Fehlermeldung als ARIA-Live-Region hinzufügen, werden unterstützende Technologien darüber informiert, dass der Inhalt der Fehlermeldung für Benutzer hilfreich sein kann, selbst wenn er ihnen andernfalls nicht übermittelt würde.

Fügen Sie eine sichtbare Fehlermeldung hinzu und verknüpfen Sie das ungültige Objekt über das Attribut `aria-errormessage` mit ihr, wenn der Fehler visuell erkennbar ist und eine ausdrückliche Beschreibung erforderlich ist.

## Werte

- Liste von ID-Referenzen
  - : Die `id` oder eine durch Leerzeichen getrennte Liste von `id`-Werten der Elemente, die die Fehlermeldung für das aktuelle Element enthalten.

## Zugehörige Schnittstellen

- [`Element.ariaErrorMessageElements`](/de/docs/Web/API/Element/ariaErrorMessageElements)
  - : Die Eigenschaft `ariaErrorMessageElements` ist Teil der Schnittstelle jedes Elements.
    Ihr Wert ist ein Array von Unterklassen von [`Element`](/de/docs/Web/API/Element), die den `id`-Referenzen im Attribut `aria-errormessage` entsprechen ([mit einigen Einschränkungen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).
- [`ElementInternals.ariaErrorMessageElements`](/de/docs/Web/API/ElementInternals/ariaErrorMessageElements)
  - : Die Eigenschaft `ariaErrorMessageElements` ist Teil der Schnittstelle jedes benutzerdefinierten Elements.
    Ihr Wert ist ein Array von Unterklassen von [`Element`](/de/docs/Web/API/Element), die den `id`-Referenzen im Attribut `aria-errormessage` entsprechen ([mit einigen Einschränkungen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).

## Zugehörige Rollen

Wird in folgenden Rollen verwendet:

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

Von folgenden Rollen geerbt:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [`searchbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)
- [`switch`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)

## Beispiel

Wir erstellen einige CSS-Regeln, um:

1. alle Fehlermeldungen auszublenden,
2. ungültige Objekte als ungültig darzustellen und
3. Fehlermeldungen anzuzeigen, die als Geschwisterelemente auf ein ungültiges Objekt folgen.

Mit `aria-invalid="true"` kennzeichnen wir ungültige Objekte:

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

Wenn ein Objekt ungültig ist, fügen wir mit JavaScript `aria-invalid="true"` hinzu. Durch das obige CSS wird das auf ein ungültiges Objekt folgende Element `.errormessage` sichtbar.

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

Beim Wechsel von gültig zu ungültig wurde in diesem Beispiel mit JavaScript lediglich `aria-invalid` am E-Mail-Eingabeelement aktualisiert. Da die Fehlermeldung auf das Eingabeelement folgt, sichtbar wird und im Barrierefreiheitsbaum verfügbar ist, können wir das Beispiel einfach halten. Wir hätten auch die Eigenschaft [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) verwenden oder der Live-Region eine Rolle wie [`alert`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) zuweisen können.

## Spezifikationen

{{Specifications}}

## Siehe auch

- CSS-Pseudoklasse {{CSSxref(':invalid')}}
- [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
