---
title: aria-errormessage
slug: Web/Accessibility/ARIA/Attributes/aria-errormessage
l10n:
  sourceCommit: 228e636705a4ee39da5711c434c5a88a2c4621a2
---

{{AccessibilitySidebar}}

Das `aria-errormessage`-Attribut an einem Objekt identifiziert das Element, das eine Fehlermeldung für dieses Objekt bereitstellt.

## Beschreibung

Wenn ein benutzererstellter Fehler vorliegt, möchten Sie dem Benutzer mitteilen, dass er existiert, und ihm sagen, wie er behoben werden kann. Es gibt zwei Attribute, die Sie verwenden müssen: Setzen Sie [`aria-invalid="true"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-invalid), um das Objekt als fehlerhaft zu definieren, und fügen Sie dann das `aria-errormessage`-Attribut hinzu, wobei der Wert die `id` des Elements ist, das den Fehlermeldungstext für dieses Objekt enthält.

Das `aria-errormessage`-Attribut sollte nur verwendet werden, wenn der Wert eines Objekts ungültig ist; wenn [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-invalid) auf `true` gesetzt ist. Wenn das Objekt gültig ist und Sie trotzdem das `aria-errormessage`-Attribut einfügen, stellen Sie sicher, dass das referenzierte Element verborgen ist, da die enthaltene Nachricht nicht relevant ist.

Wenn `aria-errormessage` relevant ist, muss das referenzierte Element sichtbar sein, damit Benutzer die Fehlermeldung sehen oder hören können.

Oftmals möchten Sie, dass das Element mit der Fehlermeldung eine [ARIA-Live-Region](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) ist, zum Beispiel wenn eine Fehlermeldung Benutzern angezeigt wird, nachdem sie einen ungültigen Wert eingegeben haben. Die Fehlermeldung sollte beschreiben, was falsch ist, und den Benutzer darüber informieren, was erforderlich ist, um das Objekt gültig zu machen. Das Hinzufügen der Fehlermeldung als ARIA-Live-Region informiert unterstützende Technologien, dass der Benutzer von dem Inhalt der Fehlermeldung profitieren könnte, selbst wenn die Fehlermeldung dem Benutzer sonst nicht übermittelt würde.

Fügen Sie eine sichtbare Fehlermeldung ein und verknüpfen Sie das ungültige Objekt mit dem `aria-errormessage`-Attribut, wenn der Fehler optisch auffällig ist und eine explizite Beschreibung des Fehlers erforderlich ist.

## Beispiel

Wir erstellen einige Stile, um:

1. Alle Fehlermeldungen zu verbergen,
2. Ungültige Objekte als ungültig erscheinen zu lassen und
3. Fehlermeldungen anzuzeigen, die Geschwister sind, die nach einem ungültigen Objekt folgen.

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

Wenn ein Objekt ungültig ist, verwenden wir JavaScript, um `aria-invalid="true"` hinzuzufügen. Das obige CSS sorgt dafür, dass die `.errormessage`, die einem ungültigen Objekt folgt, sichtbar wird.

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

Wenn wir von gültig zu ungültig wechselten, war die einzige Änderung in JavaScript für dieses Beispiel ein Update von `aria-invalid` beim E-Mail-Eingabeobjekt. Da die Fehlermeldung der Eingabe folgt und im Zugangsbaum sichtbar und verfügbar wird, können wir unser Beispiel einfach halten. Wir hätten auch eine [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live)-Eigenschaft anwenden oder Live-Region-Rollen wie [`alert`](/de/docs/Web/Accessibility/ARIA/Roles/alert_role) verwenden können.

## Werte

- `id`-Referenz
  - : Der Wert der `id` des Elements, das die Fehlermeldung für das aktuelle Element enthält

## Zugeordnete Rollen

Verwendet in Rollen:

- [`application`](/de/docs/Web/Accessibility/ARIA/Roles/application_role)
- [`checkbox`](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
- [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role)
- [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
- [`listbox`](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role)
- [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Roles/radiogroup_role)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Roles/slider_role)
- [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)
- [`textbox`](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role)
- [`tree`](/de/docs/Web/Accessibility/ARIA/Roles/tree_role)

Erbt von Rollen:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role)
- [`searchbox`](/de/docs/Web/Accessibility/ARIA/Roles/searchbox_role)
- [`switch`](/de/docs/Web/Accessibility/ARIA/Roles/switch_role)
- [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- CSS {{CSSxref(':invalid')}} Pseudoklasse
- [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-invalid)
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live)
