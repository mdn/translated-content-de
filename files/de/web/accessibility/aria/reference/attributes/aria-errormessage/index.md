---
title: "ARIA: aria-errormessage Attribut"
short-title: aria-errormessage
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Das `aria-errormessage` Attribut an einem Objekt identifiziert das bzw. die Elemente, die eine Fehlermeldung für dieses Objekt bereitstellen.

## Beschreibung

Wenn ein benutzerdefinierter Fehler auftritt, möchten Sie dem Nutzer mitteilen, dass ein Fehler existiert, und ihm sagen, wie er diesen beheben kann. Dazu müssen Sie zwei Attribute verwenden: Setzen Sie [`aria-invalid="true"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid), um das Objekt als fehlerhaft zu definieren, und fügen Sie dann das `aria-errormessage` Attribut hinzu, wobei der Wert die `id` des Elements (oder der Elemente) ist, die den Text der Fehlermeldung für dieses Objekt enthalten.

Das `aria-errormessage` Attribut sollte nur verwendet werden, wenn der Wert eines Objekts ungültig ist; wenn [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid) auf `true` gesetzt ist. Wenn das Objekt gültig ist und Sie das `aria-errormessage` Attribut einfügen, stellen Sie sicher, dass das referenzierte Element ausgeblendet ist, da die darin enthaltene Nachricht nicht relevant ist.

Wenn `aria-errormessage` relevant ist, müssen das bzw. die referenzierten Elemente sichtbar sein, damit Nutzer die Fehlermeldung sehen oder hören können.

Oftmals wollen Sie, dass das Element mit der Fehlermeldung eine [ARIA-Live-Region](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) ist, beispielsweise wenn eine Fehlermeldung den Nutzern angezeigt wird, nachdem sie einen ungültigen Wert eingegeben haben. Die Fehlermeldung sollte beschreiben, was falsch ist, und den Nutzer darüber informieren, was erforderlich ist, um das Objekt gültig zu machen. Das Hinzufügen der Fehlermeldung als ARIA-Live-Region informiert unterstützende Technologien darüber, dass der Nutzer von dem Inhalt der Fehlermeldung profitieren könnte, selbst wenn die Fehlermeldung dem Nutzer sonst nicht angezeigt würde.

Fügen Sie eine sichtbare Fehlermeldung ein und verknüpfen Sie das ungültige Objekt mit dem `aria-errormessage` Attribut, wenn der Fehler optisch erkennbar ist und eine ausdrückliche Beschreibung des Fehlers erforderlich ist.

## Beispiel

Wir erstellen einige Stile, um:

1. Alle Fehlermeldungen auszublenden,
2. Ungültige Objekte als ungültig erscheinen zu lassen und
3. Fehlermeldungen anzuzeigen, die Geschwister sind und nach einem ungültigen Objekt kommen.

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

Als wir von gültig zu ungültig wechselten, bestand die einzige Änderung im JavaScript-Beispiel darin, dass `aria-invalid` im E-Mail-Eingabeobjekt aktualisiert wurde. Da die Fehlermeldung der Eingabe folgt und im Accessibility-Tree sichtbar und verfügbar wird, konnten wir unser Beispiel einfach halten. Wir hätten auch eine [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) Eigenschaft anwenden oder Rollen von Live-Regionen wie [`alert`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) verwenden können.

## Werte

- ID-Referenzliste
  - : Die `id` oder eine durch Leerzeichen getrennte Liste von Element-`id`s, die die Fehlermeldung für das aktuelle Element enthalten.

## Zugehörige Schnittstellen

- [`Element.ariaErrorMessageElements`](/de/docs/Web/API/Element/ariaErrorMessageElements)
  - : Die `ariaErrorMessageElements` Eigenschaft ist Teil der Schnittstelle jedes Elements.
    Ihr Wert ist ein Array von Unterklassen von [`Element`](/de/docs/Web/API/Element), das die `id` Referenzen im `aria-errormessage` Attribut widerspiegelt ([mit einigen Einschränkungen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).
- [`ElementInternals.ariaErrorMessageElements`](/de/docs/Web/API/ElementInternals/ariaErrorMessageElements)
  - : Die `ariaErrorMessageElements` Eigenschaft ist Teil der Schnittstelle jedes benutzerdefinierten Elements.
    Ihr Wert ist ein Array von Unterklassen von [`Element`](/de/docs/Web/API/Element), das die `id` Referenzen im `aria-errormessage` Attribut widerspiegelt ([mit einigen Einschränkungen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).

## Zugehörige Rollen

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
