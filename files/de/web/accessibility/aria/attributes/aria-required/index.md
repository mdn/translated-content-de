---
title: aria-required
slug: Web/Accessibility/ARIA/Attributes/aria-required
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das `aria-required` Attribut gibt an, dass die Benutzereingabe bei dem Element erforderlich ist, bevor ein Formular abgeschickt werden kann.

## Beschreibung

Wenn ein semantisches HTML {{htmlelement("input")}}, {{htmlelement("select")}} oder {{htmlelement("textarea")}} einen Wert haben muss, sollte das [`required`](/de/docs/Web/HTML/Element/input#required) Attribut darauf angewandt werden. Das HTML `required` Attribut verhindert das Absenden des Formulars, sofern die erforderlichen Formularelemente keine gültigen Werte haben, und stellt sicher, dass Personen, die auf unterstützende Technologien angewiesen sind, nachvollziehen können, welche semantischen Formularelemente gültige Inhalte benötigen.

Wenn Formularelemente mit nicht-semantischen Elementen erstellt werden, wie z. B. ein {{HTMLElement('div')}} mit einer [Role](/de/docs/Web/Accessibility/ARIA/Roles) von [`checkbox`](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role), sollte das `aria-required` Attribut mit dem Wert `true` hinzugefügt werden, um assistiven Technologien mitzuteilen, dass bei diesem Element eine Benutzereingabe erforderlich ist, damit das Formular abgeschickt werden kann. Das `aria-required` Attribut kann mit HTML Formularelementen verwendet werden und ist nicht auf Elemente beschränkt, denen eine ARIA-Rolle zugewiesen wurde.

Ähnlich dem HTML `required` Attribut, das bei semantischen HTML Formularelementen gesetzt ist, vermittelt das `aria-required` Attribut explizit assistiven Technologien, dass das Element erforderlich ist, bevor ein Formular abgeschickt werden kann. Das `required` Attribut eines semantischen HTML Formularelements verhindert, dass das Formularelement abgeschickt wird, wenn kein Wert vorhanden ist — es liefert in einigen Browsern eine native Fehlermeldung, falls ein erforderlicher Wert ungültig ist, wenn der Nutzer versucht, das Formular abzuschicken. Das `aria-required` Attribut, wie alle ARIA-Zustände und Eigenschaften, hat keinen Einfluss auf die Funktionalität des Elements. Funktionalität und Verhalten müssen mit JavaScript hinzugefügt werden.

> [!NOTE]
> ARIA verändert nur den Accessibility-Tree, indem es beeinflusst, wie unterstützende Technologie Inhalte den Nutzern präsentiert. ARIA ändert nichts an der Funktion oder dem Verhalten eines Elements. Wenn Sie keine semantischen HTML Elemente für ihren vorgesehenen Zweck und ihre Standardfunktionalität verwenden, müssen Sie JavaScript zur Verwaltung von Verhalten, Fokus und ARIA-Zuständen nutzen.

Die CSS {{CSSXRef(':required')}} und {{CSSXRef(':optional')}} Pseudoklassen stimmen mit {{htmlelement("input")}}, {{htmlelement("select")}} und {{htmlelement("textarea")}} Elementen überein, je nachdem, ob sie erforderlich oder optional sind. Wenn nicht-semantische Elemente als Formularelemente verwendet werden, erhalten Sie diesen Vorteil des CSS Pseudoklassen-Selectors nicht. Sie können jedoch Attributselektoren verwenden, wenn das Attribut vorhanden ist: `[aria-required="true"]` oder `[aria-required="false"]`.

Wenn ein Formular sowohl erforderliche als auch optionale Formularelemente enthält, sollten die erforderlichen Elemente visuell durch eine Markierung angezeigt werden, die nicht ausschließlich auf Farbe beruht, um Bedeutung zu vermitteln. Typischerweise werden beschreibender Text und/oder ein Symbol verwendet.

> [!NOTE]
> Welche Elemente erforderlich sind, sollte für alle Nutzer ersichtlich sein. Stellen Sie sicher, dass die visuelle Darstellung konsistent und sichtbar angibt, dass das Formularelement erforderlich ist, dabei ist zu beachten, dass Farbe alleine nicht ausreicht, um Informationen zu vermitteln.

## Beispiele

Das Attribut sollte der Rolle des Formularelements hinzugefügt werden. Wenn der Nutzer z. B. eine E-Mail-Adresse in ein [`textbox`](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role) eintragen muss, fügen Sie `aria-required="true"` auf der Textbox hinzu.

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
> Wenn das Label des Feldes bereits das Wort "erforderlich" enthält, wird empfohlen, das `aria-required` Attribut wegzulassen. Dies verhindert, dass Sprachausgaben den Begriff "erforderlich" doppelt vorlesen.

In diesem Beispiel muss JavaScript verwendet werden, um zu verhindern, dass das enthaltene Formular abgeschickt wird, wenn die Textbox keinen Inhalt hat.

Dies könnte ohne die Notwendigkeit von JavaScript semantisch geschrieben werden:

```html
<label for="email1">Email Address (required)</label>
<input type="email" id="email1" required />
```

## Werte

- `true`
  - : Das Element erfordert einen Wert oder muss ausgewählt werden, damit das Formular abgeschickt werden kann.
- `false`
  - : Das Element ist nicht erforderlich.

## Zugehörige Schnittstellen

- [`Element.ariaRequired`](/de/docs/Web/API/Element/ariaRequired)
  - : Die [`ariaRequired`](/de/docs/Web/API/Element/ariaRequired) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-required` Attributs wider.
- [`ElementInternals.ariaRequired`](/de/docs/Web/API/ElementInternals/ariaRequired)
  - : Die [`ariaRequired`](/de/docs/Web/API/ElementInternals/ariaRequired) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-required` Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`checkbox`](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
- [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role)
- [`gridcell`](/de/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
- [`listbox`](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role)
- [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Roles/radiogroup_role)
- [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)
- [`textbox`](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role)
- [`tree`](/de/docs/Web/Accessibility/ARIA/Roles/tree_role)

Vererbt in Rollen:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role)
- [`searchbox`](/de/docs/Web/Accessibility/ARIA/Roles/searchbox_role)
- [`switch`](/de/docs/Web/Accessibility/ARIA/Roles/switch_role)
- [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML [`required`](/de/docs/Web/HTML/Element/input#required) Attribut
- [`:optional` Pseudoklasse](/de/docs/Web/CSS/:optional)
- [`:required` Pseudoklasse](/de/docs/Web/CSS/:required)
- [`aria-invalid` Attribut](/de/docs/Web/Accessibility/ARIA/Attributes/aria-invalid)
- [MDN Erklärung der WCAG, Leitfaden 3.3](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.3_%e2%80%94_input_assistance_help_users_avoid_and_correct_mistakes)
- [Erklärung des Erfolgskriteriums 3.3.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)
