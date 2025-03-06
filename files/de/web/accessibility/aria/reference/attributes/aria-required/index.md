---
title: aria-required
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-required
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Das `aria-required` Attribut gibt an, dass eine Benutzereingabe für das Element erforderlich ist, bevor ein Formular abgeschickt werden kann.

## Beschreibung

Wenn ein semantisches HTML {{htmlelement("input")}}, {{htmlelement("select")}} oder {{htmlelement("textarea")}} einen Wert haben muss, sollte es das [`required`](/de/docs/Web/HTML/Element/input#required) Attribut haben. Das HTML `required` Attribut verhindert das Absenden des Formulars, es sei denn, die erforderlichen Formularfelder haben gültige Werte, während sichergestellt wird, dass Nutzer von assistiven Technologien verstehen, welche semantischen Formularelemente gültigen Inhalt benötigen.

Wenn Formularelemente mit nicht-semantischen Elementen erstellt werden, wie etwa ein {{HTMLElement('div')}} mit einer [role](/de/docs/Web/Accessibility/ARIA/Reference/Roles) von [`checkbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role), sollte das `aria-required` Attribut mit einem Wert von `true` eingefügt werden, um assistiven Technologien anzuzeigen, dass eine Benutzereingabe erforderlich ist, damit das Formular abgeschickt werden kann. Das `aria-required` Attribut kann mit HTML-Formularelementen verwendet werden; es ist nicht auf Elemente beschränkt, denen eine ARIA-Rolle zugewiesen ist.

Ähnlich dem HTML `required` Attribut, das auf semantischen HTML-Formularsteuerelementen gesetzt ist, zeigt das `aria-required` Attribut assistiven Technologien ausdrücklich an, dass das Element vor dem Absenden eines Formulars erforderlich ist. Das `required` Attribut auf einem semantischen HTML-Formularelement verhindert das Absenden des Formularsteuerelements, wenn kein Wert vorhanden ist — und bietet native Fehlermeldungen in einigen Browsern, wenn ein erforderlicher Wert ungültig ist, wenn der Benutzer versucht, das Formular abzusenden. Das `aria-required` Attribut hat, wie alle ARIA-Zustände und -Eigenschaften, keinen Einfluss auf die Funktionalität des Elements. Funktionalität und Verhalten müssen mit JavaScript hinzugefügt werden.

> [!NOTE]
> ARIA modifiziert nur den Accessibility-Tree und ändert, wie assistive Technologien Inhalte für Benutzer präsentieren. ARIA ändert nichts an der Funktion oder dem Verhalten eines Elements. Wenn Sie semantische HTML-Elemente nicht für ihren beabsichtigten Zweck und die Standardfunktionalität verwenden, müssen Sie JavaScript benutzen, um Verhalten, Fokus und ARIA-Zustände zu verwalten.

Die CSS {{CSSXRef(':required')}} und {{CSSXRef(':optional')}} Pseudoklassen passen auf {{htmlelement("input")}}, {{htmlelement("select")}} und {{htmlelement("textarea")}} Elemente basierend darauf, ob sie erforderlich oder optional sind. Wenn Sie nicht-semantische Elemente als Formularelemente verwenden, erhalten Sie diesen Vorteil des CSS-Pseudoklassen-Selektors nicht. Sie können jedoch Attributselektoren verwenden, wenn das Attribut vorhanden ist: `[aria-required="true"]` oder `[aria-required="false"]`.

Wenn ein Formular sowohl erforderliche als auch optionale Formularelemente enthält, sollten die erforderlichen Elemente visuell durch eine Gestaltung gekennzeichnet werden, die nicht nur auf Farbe angewiesen ist, um Bedeutung zu vermitteln. Typischerweise werden beschreibender Text und/oder ein Icon verwendet.

> [!NOTE]
> Welche Elemente erforderlich sind, sollte für alle Benutzer erkennbar sein. Stellen Sie sicher, dass die visuelle Darstellung das Formularelement in einer konsistenten, sichtbaren Weise als erforderlich kennzeichnet, wobei zu beachten ist, dass Farbe allein nicht ausreicht, um Informationen zu vermitteln.

## Beispiele

Das Attribut sollte der Form-Control-Rolle hinzugefügt werden. Wenn der Benutzer eine E-Mail-Adresse im [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role) Feld eingeben muss, fügen Sie `aria-required="true"` im Textfeld hinzu.

```html
<div id="tbLabel">Email Address *</div>
<div
  role="textbox"
  contenteditable
  aria-labelledby="tblabel"
  aria-required="true"
  id="email1"></div>
```

> [!NOTE]
> Wenn die Bezeichnung des Feldes bereits das Wort "erforderlich" enthält, wird empfohlen, das `aria-required` Attribut wegzulassen. Dadurch wird vermieden, dass Bildschirmleser das Wort "erforderlich" doppelt aussprechen.

In diesem Beispiel muss JavaScript verwendet werden, um zu verhindern, dass das übergeordnete Formular gesendet wird, wenn das Textfeld keinen Inhalt hat.

Dies könnte semantisch geschrieben werden, ohne dass JavaScript benötigt wird:

```html
<label for="email1">Email Address (required)</label>
<input type="email" id="email1" required />
```

## Werte

- `true`
  - : Das Element benötigt einen Wert oder muss ausgewählt sein, damit das Formular abschickbar ist.
- `false`
  - : Das Element ist nicht erforderlich.

## Zugehörige Schnittstellen

- [`Element.ariaRequired`](/de/docs/Web/API/Element/ariaRequired)
  - : Die [`ariaRequired`](/de/docs/Web/API/Element/ariaRequired) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-required` Attributs wider.
- [`ElementInternals.ariaRequired`](/de/docs/Web/API/ElementInternals/ariaRequired)
  - : Die [`ariaRequired`](/de/docs/Web/API/ElementInternals/ariaRequired) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-required` Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`checkbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
- [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role)
- [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
- [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)

Erbt in Rollen:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [`searchbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)
- [`switch`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML [`required`](/de/docs/Web/HTML/Element/input#required) Attribut
- [`:optional` Pseudoklasse](/de/docs/Web/CSS/:optional)
- [`:required` Pseudoklasse](/de/docs/Web/CSS/:required)
- [`aria-invalid` Attribut](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)
- [MDN Verständnis von WCAG, Richtlinie 3.3 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.3_%e2%80%94_input_assistance_help_users_avoid_and_correct_mistakes)
- [Understanding Success Criterion 3.3.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)
