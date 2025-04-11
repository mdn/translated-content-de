---
title: aria-required
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-required
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Das `aria-required` Attribut zeigt an, dass eine Benutzereingabe auf dem Element erforderlich ist, bevor ein Formular abgeschickt werden kann.

## Beschreibung

Wenn ein semantisches HTML {{htmlelement("input")}}, {{htmlelement("select")}} oder {{htmlelement("textarea")}} einen Wert haben muss, sollte das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) Attribut darauf angewendet werden. Das HTML `required` Attribut verhindert das Abschicken des Formulars, es sei denn, die erforderlichen Formularelemente haben gültige Werte, und stellt sicher, dass Benutzer, die mit Hilfstechnologien navigieren, verstehen, welche semantischen Formularelemente gültigen Inhalt benötigen.

Wenn Formularelemente mit nicht-semantischen Elementen erstellt werden, wie einem {{HTMLElement('div')}} mit einer [role](/de/docs/Web/Accessibility/ARIA/Reference/Roles) von [`checkbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role), sollte das `aria-required` Attribut mit einem Wert von `true` hinzugefügt werden, um Hilfstechnologien zu zeigen, dass eine Benutzereingabe auf dem Element erforderlich ist, damit das Formular abgeschickt werden kann. Das `aria-required` Attribut kann mit HTML-Formularelementen verwendet werden; es ist nicht auf Elemente beschränkt, die eine ARIA-Rolle zugewiesen haben.

Ähnlich dem HTML `required` Attribut, das auf semantische HTML-Formularelemente gesetzt ist, vermittelt das `aria-required` Attribut Hilfstechnologien explizit, dass das Element erforderlich ist, bevor ein Formular abgeschickt werden kann. Das `required` Attribut auf einem semantischen HTML-Formularfeld verhindert das Abschicken des Formulars, wenn kein Wert vorhanden ist — und bietet in einigen Browsern native Fehlermeldungen, wenn ein erforderlicher Wert ungültig ist, wenn der Benutzer versucht, das Formular abzuschicken. Das `aria-required` Attribut hat, wie alle ARIA-Zustände und -Eigenschaften, keine Auswirkung auf die Funktionalität eines Elements. Funktionalität und Verhalten müssen mit JavaScript hinzugefügt werden.

> [!NOTE]
> ARIA verändert nur den Accessibility Tree und beeinflusst, wie Hilfstechnologie Inhalte den Nutzern präsentiert. ARIA ändert nichts an der Funktion oder dem Verhalten eines Elements. Wenn semantische HTML-Elemente nicht für ihren vorgesehenen Zweck und die standardmäßige Funktionalität verwendet werden, müssen Sie JavaScript einsetzen, um Verhalten, Fokus und ARIA-Zustände zu verwalten.

Die CSS {{CSSXRef(':required')}} und {{CSSXRef(':optional')}} Pseudoklassen stimmen mit {{htmlelement("input")}}, {{htmlelement("select")}}, und {{htmlelement("textarea")}} Elementen überein, je nachdem, ob sie erforderlich oder optional sind. Wenn nicht-semantische Elemente als Formularelemente verwendet werden, erhalten Sie diesen CSS-Pseudoklassen-Selektorvorteil nicht. Sie können jedoch Attributselektoren verwenden, wenn das Attribut vorhanden ist: `[aria-required="true"]` oder `[aria-required="false"]`.

Wenn ein Formular sowohl erforderliche als auch optionale Formularelemente enthält, sollten die erforderlichen Elemente visuell durch eine Behandlung angezeigt werden, die nicht nur auf Farbe beruht, um Bedeutung zu vermitteln. Typischerweise werden erklärender Text und/oder ein Symbol verwendet.

> [!NOTE]
> Welche Elemente erforderlich sind, sollte für alle Benutzer offensichtlich sein. Stellen Sie sicher, dass die visuelle Darstellung anzeigt, dass das Formularelement erforderlich ist, auf eine konsistente, sichtbare Weise, wobei zu beachten ist, dass Farbe allein nicht ausreicht, um Information zu übermitteln.

## Beispiele

Das Attribut sollte zur Rolle des Formularelements hinzugefügt werden. Wenn der Benutzer eine E-Mail-Adresse in ein [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role) eintragen muss, fügen Sie `aria-required="true"` zur Textbox hinzu.

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
> Wenn das Label des Feldes bereits das Wort "erforderlich" enthält, wird empfohlen, das `aria-required` Attribut wegzulassen. Dies vermeidet, dass Screenreader den Begriff "erforderlich" zweimal vorlesen.

In diesem Beispiel muss JavaScript verwendet werden, um zu verhindern, dass das Formular gesendet wird, wenn die Textbox keinen Inhalt hat.

Dies könnte semantisch geschrieben werden, ohne JavaScript zu benötigen:

```html
<label for="email1">Email Address (required)</label>
<input type="email" id="email1" required />
```

## Werte

- `true`
  - : Das Element benötigt einen Wert oder muss überprüft werden, damit das Formular abgeschickt werden kann.
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

Geerbt in Rollen:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [`searchbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)
- [`switch`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) Attribut
- [`:optional` Pseudoklasse](/de/docs/Web/CSS/:optional)
- [`:required` Pseudoklasse](/de/docs/Web/CSS/:required)
- [`aria-invalid` Attribut](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)
- [MDN Verständnis WCAG, Leitfaden 3.3 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.3_%e2%80%94_input_assistance_help_users_avoid_and_correct_mistakes)
- [Verständnis des Erfolgs-Kriteriums 3.3.2 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)
