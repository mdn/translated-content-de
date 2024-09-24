---
title: aria-required
slug: Web/Accessibility/ARIA/Attributes/aria-required
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das Attribut `aria-required` zeigt an, dass eine Benutzereingabe auf dem Element erforderlich ist, bevor ein Formular abgeschickt werden kann.

## Beschreibung

Wenn ein semantisches HTML-{{htmlelement("input")}}, {{htmlelement("select")}} oder {{htmlelement("textarea")}} einen Wert haben muss, sollte ihm das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut zugewiesen werden. Das HTML-Attribut `required` verhindert das Absenden des Formulars, solange die erforderlichen Formularelemente keine gültigen Werte haben, und sorgt dafür, dass Nutzer, die mit Unterstützungstechnologien navigieren, verstehen, welche semantischen Formularelemente gültige Inhalte benötigen.

Wenn Formularelemente mithilfe von nicht-semantischen Elementen erstellt werden, wie z. B. einem {{HTMLElement('div')}} mit einer [Role](/de/docs/Web/Accessibility/ARIA/Roles) von [`checkbox`](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role), sollte das Attribut `aria-required` mit dem Wert `true` enthalten sein, um anzuzeigen, dass Benutzereingaben erforderlich sind, damit das Formular abgeschickt werden kann. Das Attribut `aria-required` kann mit HTML-Formularelementen verwendet werden; es ist nicht auf Elemente beschränkt, die eine ARIA-Rolle zugewiesen haben.

Ähnlich wie das HTML-`required`-Attribut, das auf semantischen HTML-Formularelementen gesetzt ist, teilt das Attribut `aria-required` unterstützenden Technologien ausdrücklich mit, dass das Element erforderlich ist, bevor ein Formular abgeschickt werden kann. Das `required`-Attribut auf einem semantischen HTML-Formularelement verhindert das Abschicken des Formulars, wenn kein Wert vorhanden ist — es bietet native Fehlermeldungen in einigen Browsern an, wenn ein erforderlicher Wert ungültig ist, wenn der Nutzer versucht, das Formular abzuschicken. Das `aria-required`-Attribut hat, wie alle ARIA-Zustände und -Eigenschaften, keinen Einfluss auf die Funktionalität des Elements. Funktionalitäten und Verhalten müssen mit JavaScript hinzugefügt werden.

> [!NOTE]
> ARIA verändert nur den Accessibility-Tree und beeinflusst, wie unterstützende Technologien Inhalte den Nutzern präsentieren. ARIA ändert nichts an der Funktion oder dem Verhalten eines Elements. Wenn semantische HTML-Elemente nicht für ihren vorgesehenen Zweck und ihre Standardfunktionalität verwendet werden, muss JavaScript eingesetzt werden, um Verhalten, Fokus und ARIA-Zustände zu steuern.

Die CSS-Pseudoklassen {{CSSXRef(':required')}} und {{CSSXRef(':optional')}} passen zu {{htmlelement("input")}}, {{htmlelement("select")}} und {{htmlelement("textarea")}}-Elementen basierend darauf, ob sie erforderlich oder optional sind. Beim Einsatz nicht-semantischer Elemente als Formularelemente profitieren Sie nicht von diesem CSS-Pseudoklassen-Selektor. Sie können jedoch Attribut-Selektoren verwenden, wenn das Attribut vorhanden ist: `[aria-required="true"]` oder `[aria-required="false"]`.

Wenn ein Formular sowohl erforderliche als auch optionale Formularelemente enthält, sollten die erforderlichen Elemente visuell mit einer Gestaltung angezeigt werden, die sich nicht ausschließlich auf Farbe verlässt, um Bedeutung zu vermitteln. Üblicherweise werden beschreibender Text und/oder ein Symbol verwendet.

> [!NOTE]
> Welche Elemente erforderlich sind, sollte für alle Nutzer offensichtlich sein. Stellen Sie sicher, dass die visuelle Darstellung deutlich macht, dass das Formularelement erforderlich ist, und denken Sie daran, dass Farbe allein nicht ausreicht, um Information zu vermitteln.

## Beispiele

Das Attribut sollte der Form-Control-Rolle hinzugefügt werden. Wenn der Benutzer eine E-Mail-Adresse in das [`textbox`](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role) eingeben muss, fügen Sie `aria-required="true"` im Textfeld hinzu.

```html
<div id="tbLabel">E-Mail-Adresse *</div>
<div
  role="textbox"
  contenteditable
  aria-labelledby="tblabel"
  aria-required="true"
  id="email1"></div>
```

> [!NOTE]
> Wenn das Etikett des Feldes bereits das Wort "erforderlich" enthält, wird empfohlen, das `aria-required`-Attribut wegzulassen. Dies verhindert, dass Screenreader den Begriff "erforderlich" zweimal vorlesen.

In diesem Beispiel muss JavaScript verwendet werden, um zu verhindern, dass das enthaltene Formular abgesendet wird, wenn das Textfeld keinen Inhalt hat.

Dies könnte semantisch, ohne die Notwendigkeit von JavaScript, geschrieben werden:

```html
<label for="email1">E-Mail-Adresse (erforderlich)</label>
<input type="email" id="email1" required />
```

## Werte

- `true`
  - : Das Element benötigt einen Wert oder muss überprüft sein, damit das Formular abgeschickt werden kann.
- `false`
  - : Das Element ist nicht erforderlich.

## Zugehörige Schnittstellen

- {{domxref("Element.ariaRequired")}}
  - : Die [`ariaRequired`](/de/docs/Web/API/Element/ariaRequired)-Eigenschaft, Teil der {{domxref("Element")}}-Schnittstelle, spiegelt den Wert des `aria-required`-Attributs wider.
- {{domxref("ElementInternals.ariaRequired")}}
  - : Die [`ariaRequired`](/de/docs/Web/API/ElementInternals/ariaRequired)-Eigenschaft, Teil der {{domxref("ElementInternals")}}-Schnittstelle, spiegelt den Wert des `aria-required`-Attributs wider.

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

Erbt in Rollen:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Roles/rowheader_role)
- [`searchbox`](/de/docs/Web/Accessibility/ARIA/Roles/searchbox_role)
- [`switch`](/de/docs/Web/Accessibility/ARIA/Roles/switch_role)
- [`treegrid`](/de/docs/Web/Accessibility/ARIA/Roles/treegrid_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML-Attribut [`required`](/de/docs/Web/HTML/Element/input#required)
- [`:optional` Pseudoklasse](/de/docs/Web/CSS/:optional)
- [`:required` Pseudoklasse](/de/docs/Web/CSS/:required)
- [`aria-invalid` Attribut](/de/docs/Web/Accessibility/ARIA/Attributes/aria-invalid)
- [MDN Understanding WCAG, Richtlinien 3.3 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.3_%e2%80%94_input_assistance_help_users_avoid_and_correct_mistakes)
- [Verständnis des Erfolgskriteriums 3.3.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)
