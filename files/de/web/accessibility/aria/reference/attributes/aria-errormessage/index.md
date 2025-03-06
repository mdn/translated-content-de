---
title: aria-errormessage
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Das Attribut `aria-errormessage` an einem Objekt identifiziert das Element, das eine Fehlermeldung für dieses Objekt bereitstellt.

## Beschreibung

Wenn es einen benutzererzeugten Fehler gibt, möchten Sie den Benutzer darüber informieren und ihm mitteilen, wie er diesen beheben kann. Es gibt zwei Attribute, die dazu verwendet werden müssen: Setzen Sie [`aria-invalid="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid), um das Objekt als fehlerhaft zu definieren, und fügen Sie dann das Attribut `aria-errormessage` mit dem Wert der `id` des Elements hinzu, das den Text der Fehlermeldung für dieses Objekt enthält.

Das Attribut `aria-errormessage` sollte nur verwendet werden, wenn der Wert eines Objekts ungültig ist; also wenn [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid) auf `true` gesetzt ist. Wenn das Objekt gültig ist und Sie dennoch das `aria-errormessage`-Attribut einfügen, stellen Sie sicher, dass das referenzierte Element ausgeblendet ist, da die enthaltene Nachricht irrelevant ist.

Wenn `aria-errormessage` relevant ist, muss das referenzierte Element sichtbar sein, damit Benutzer die Fehlermeldung sehen oder hören können.

Häufig möchten Sie, dass das Element mit der Fehlermeldung eine [ARIA Live Region](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) ist, etwa wenn eine Fehlermeldung den Benutzern angezeigt wird, nachdem sie einen ungültigen Wert eingegeben haben. Die Fehlermeldung sollte beschreiben, was falsch ist, und dem Benutzer mitteilen, was erforderlich ist, um das Objekt gültig zu machen. Wenn die Fehlermeldung als ARIA Live Region hinzugefügt wird, informiert dies unterstützende Technologien darüber, dass der Benutzer von dem Inhalt der Fehlermeldung profitieren könnte, auch wenn die Fehlermeldung dem Benutzer andernfalls nicht mitgeteilt würde.

Fügen Sie eine sichtbare Fehlermeldung hinzu und verknüpfen Sie das ungültige Objekt mit dem `aria-errormessage`-Attribut, wenn das Problem visuell erkennbar ist und eine explizite Fehlerbeschreibung erforderlich ist.

## Beispiel

Wir erstellen einige Styles, um:

1. Alle Fehlermeldungen auszublenden,
2. Ungültige Objekte als ungültig erscheinen zu lassen und
3. Fehlermeldungen anzuzeigen, die als Geschwister nach einem ungültigen Objekt folgen.

Wir nutzen `aria-invalid="true"`, um ungültige Objekte zu kennzeichnen:

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

Wenn ein Objekt ungültig ist, verwenden wir JavaScript, um `aria-invalid="true"` hinzuzufügen. Das obige CSS bewirkt, dass die `.errormessage`, die einem ungültigen Objekt folgt, sichtbar wird.

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

Als wir von gültig zu ungültig wechselten, war die einzige Änderung im JavaScript für dieses Beispiel ein Update von `aria-invalid` am E-Mail-Eingabeobjekt. Da die Fehlermeldung der Eingabe folgt und sichtbar sowie im Zugänglichkeitsbaum verfügbar wird, können wir unser Beispiel einfach halten. Wir hätten auch eine [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)-Eigenschaft anwenden oder ein Live-Region-Rollen wie [`alert`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) verwenden können.

## Werte

- `id`-Referenz
  - : Der Wert der `id` des Elements, das die Fehlermeldung für das aktuelle Element enthält.

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
