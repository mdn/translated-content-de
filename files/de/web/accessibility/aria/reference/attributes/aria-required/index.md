---
title: "ARIA: aria-required-Attribut"
short-title: aria-required
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-required
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Das `aria-required`-Attribut gibt an, dass Benutzereingaben im Element erforderlich sind, bevor ein Formular abgesendet werden kann.

## Beschreibung

Wenn ein semantisches HTML-{{htmlelement("input")}}, {{htmlelement("select")}} oder {{htmlelement("textarea")}} einen Wert haben muss, sollte das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut darauf angewendet werden. Das HTML-`required`-Attribut verhindert das Absenden des Formulars, solange die erforderlichen Formularelemente keine gültigen Werte haben, und stellt sicher, dass Benutzer, die mit Hilfe von unterstützenden Technologien navigieren, verstehen, welche semantischen Formularelemente gültige Inhalte benötigen.

Wenn Formularelemente mit nicht-semantischen Elementen erstellt werden, wie z.B. einem {{HTMLElement('div')}} mit einer [role](/de/docs/Web/Accessibility/ARIA/Reference/Roles) von [`checkbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role), sollte das `aria-required`-Attribut mit einem Wert von `true` hinzugefügt werden, um unterstützenden Technologien mitzuteilen, dass Benutzereingaben im Element erforderlich sind, damit das Formular abgesendet werden kann. Das `aria-required`-Attribut kann mit HTML-Formularelementen verwendet werden und ist nicht auf Elemente beschränkt, denen eine ARIA-Rolle zugewiesen wurde.

Ähnlich dem auf semantische HTML-Formularelemente angewendeten HTML-`required`-Attribut vermittelt das `aria-required`-Attribut ausdrücklich unterstützenden Technologien, dass das Element erforderlich ist, bevor ein Formular abgesendet werden kann. Das `required`-Attribut auf einem semantischen HTML-Formularsteuerungselement verhindert, dass das Formularelement abgesendet wird, wenn kein Wert vorhanden ist — und bietet in einigen Browsern native Fehlermeldungen, wenn ein erforderlicher Wert ungültig ist, wenn der Benutzer versucht, das Formular abzusenden. Das `aria-required`-Attribut hat, wie alle ARIA-Zustände und -Eigenschaften, keinen Einfluss auf die Funktionalität des Elements. Funktionalität und Verhalten müssen mit JavaScript hinzugefügt werden.

> [!NOTE]
> ARIA modifiziert nur den Accessibility Tree und ändert, wie unterstützende Technologie Inhalte Benutzern präsentiert. ARIA ändert nichts am Funktionsumfang oder Verhalten eines Elements. Wenn keine semantischen HTML-Elemente für ihren vorgesehenen Zweck und ihre Standardfunktionalität verwendet werden, müssen Sie JavaScript verwenden, um Verhalten, Fokus und ARIA-Zustände zu verwalten.

Die CSS-Pseudoklassen {{CSSXRef(':required')}} und {{CSSXRef(':optional')}} stimmen überein mit {{htmlelement("input")}}, {{htmlelement("select")}}, und {{htmlelement("textarea")}}-Elementen, basierend darauf, ob sie erforderlich oder optional sind. Wenn nicht-semantische Elemente als Formularelemente verwendet werden, erhalten Sie diesen CSS-Pseudoklassen-Selektorvorteil nicht. Sie können jedoch Attributselektoren verwenden, wenn das Attribut vorhanden ist: `[aria-required="true"]` oder `[aria-required="false"]`.

Wenn ein Formular sowohl erforderliche als auch optionale Formularelemente enthält, sollten die erforderlichen Elemente visuell kenntlich gemacht werden, indem eine Gestaltung erfolgt, die nicht ausschließlich auf Farbe angewiesen ist, um Bedeutung zu vermitteln. Typischerweise werden beschreibender Text und/oder ein Symbol verwendet.

> [!NOTE]
> Welche Elemente erforderlich sind, sollte für alle Benutzer offensichtlich sein. Stellen Sie sicher, dass die visuelle Darstellung in einer konsistenten, sichtbaren Weise anzeigt, dass das Formularelement erforderlich ist, und denken Sie daran, dass Farbe allein nicht ausreicht, um Informationen zu vermitteln.

## Beispiele

Das Attribut sollte der Rolle der Formularsteuerung hinzugefügt werden. Wenn der Benutzer eine E-Mail-Adresse im [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role) eingeben muss, fügen Sie `aria-required="true"` zum Textfeld hinzu.

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
> Wenn das Label des Feldes bereits das Wort "erforderlich" enthält, wird empfohlen, das `aria-required`-Attribut auszulassen. Dadurch wird vermieden, dass Screenreader das Wort "erforderlich" doppelt ausgeben.

In diesem Beispiel muss JavaScript verwendet werden, um zu verhindern, dass das enthaltene Formular abgesendet wird, wenn das Textfeld keinen Inhalt hat.

Dies könnte semantisch geschrieben werden, ohne die Notwendigkeit von JavaScript:

```html
<label for="email1">Email Address (required)</label>
<input type="email" id="email1" required />
```

## Werte

- `true`
  - : Das Element erfordert einen Wert oder muss für die Absendung des Formulars überprüft werden.
- `false`
  - : Das Element ist nicht erforderlich.

## Zugehörige Schnittstellen

- [`Element.ariaRequired`](/de/docs/Web/API/Element/ariaRequired)
  - : Die [`ariaRequired`](/de/docs/Web/API/Element/ariaRequired)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-required`-Attributs wider.
- [`ElementInternals.ariaRequired`](/de/docs/Web/API/ElementInternals/ariaRequired)
  - : Die [`ariaRequired`](/de/docs/Web/API/ElementInternals/ariaRequired)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-required`-Attributs wider.

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

Vererbt in Rollen:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [`searchbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)
- [`switch`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut
- [`:optional`-Pseudoklasse](/de/docs/Web/CSS/:optional)
- [`:required`-Pseudoklasse](/de/docs/Web/CSS/:required)
- [`aria-invalid`-Attribut](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)
- [MDN Verständnis für WCAG, Leitfaden 3.3 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.3_%e2%80%94_input_assistance_help_users_avoid_and_correct_mistakes)
- [Verständnis des Erfolgskriteriums 3.3.2 | W3C Verständnis für WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)
