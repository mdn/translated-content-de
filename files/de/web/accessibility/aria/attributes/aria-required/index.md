---
title: aria-required
slug: Web/Accessibility/ARIA/Attributes/aria-required
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das `aria-required`-Attribut zeigt an, dass Benutzereingaben für das Element erforderlich sind, bevor ein Formular gesendet werden kann.

## Beschreibung

Wenn ein semantisches HTML-{{htmlelement("input")}}, {{htmlelement("select")}} oder {{htmlelement("textarea")}} einen Wert haben muss, sollte das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut angewendet werden. Das HTML-`required`-Attribut verhindert das Absenden des Formulars, es sei denn, die erforderlichen Formularelemente haben gültige Werte, und stellt sicher, dass diejenigen, die mit Unterstützungstechnologien navigieren, verstehen, welche semantischen Formularelemente gültigen Inhalt benötigen.

Wenn Formularelemente mit nicht-semantischen Elementen erstellt werden, wie z.B. einem {{HTMLElement('div')}} mit einer [Rolle](/de/docs/Web/Accessibility/ARIA/Roles) von [`checkbox`](/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role), sollte das `aria-required`-Attribut mit einem Wert von `true` hinzugefügt werden, um Unterstützungstechnologien anzuzeigen, dass Benutzereingaben auf dem Element erforderlich sind, damit das Formular übermittelt werden kann. Das `aria-required`-Attribut kann mit HTML-Formularelementen verwendet werden; es ist nicht auf Elemente beschränkt, die eine ARIA-Rolle zugewiesen haben.

Ähnlich dem HTML-`required`-Attribut, das auf semantischen HTML-Formularelementen gesetzt ist, vermittelt das `aria-required`-Attribut eindeutig an Unterstützungstechnologien, dass das Element erforderlich ist, bevor ein Formular gesendet werden kann. Das `required`-Attribut auf einem semantischen HTML-Formularelement verhindert, dass das Formularelement gesendet wird, wenn kein Wert vorhanden ist — es wird in einigen Browsern eine native Fehlermeldung angezeigt, wenn ein erforderlicher Wert ungültig ist, sobald der Benutzer versucht, das Formular zu senden. Das `aria-required`-Attribut, wie alle ARIA-Zustände und -Eigenschaften, hat keine Auswirkungen auf die Funktionalität eines Elements. Funktionalität und Verhalten müssen mit JavaScript hinzugefügt werden.

> [!NOTE]
> ARIA ändert nur den Zugänglichkeitsbaum und beeinflusst, wie Unterstützungstechnologien Inhalte den Benutzern präsentieren. ARIA ändert nichts an der Funktion oder dem Verhalten eines Elements. Wenn semantische HTML-Elemente nicht für ihren vorgesehenen Zweck und mit ihrer Standardfunktionalität verwendet werden, müssen Sie JavaScript verwenden, um Verhalten, Fokus und ARIA-Zustände zu verwalten.

Die CSS-{{CSSXRef(':required')}}- und {{CSSXRef(':optional')}}-Pseudoklassen passen zu {{htmlelement("input")}}, {{htmlelement("select")}} und {{htmlelement("textarea")}}-Elementen, abhängig davon, ob sie erforderlich oder optional sind. Bei der Verwendung von nicht-semantischen Elementen als Formularelemente erhalten Sie diesen CSS-Pseudoklassenselektor-Vorteil nicht. Sie können jedoch Attributselektoren verwenden, wenn das Attribut vorhanden ist: `[aria-required="true"]` oder `[aria-required="false"]`.

Wenn ein Formular sowohl erforderliche als auch optionale Formularelemente enthält, sollten die erforderlichen Elemente visuell durch eine Darstellung angezeigt werden, die sich nicht ausschließlich auf Farbe zur Bedeutungsvermittlung verlässt. Typischerweise werden beschreibender Text und/oder ein Symbol verwendet.

> [!NOTE]
> Welche Elemente erforderlich sind, sollte für alle Benutzer deutlich sein. Stellen Sie sicher, dass die visuelle Präsentation das Formularelement in konsistenter, sichtbarer Weise als erforderlich anzeigt, und denken Sie daran, dass Farbe allein nicht ausreicht, um Informationen zu vermitteln.

## Beispiele

Das Attribut sollte der Rolle der Formularelemente hinzugefügt werden. Wenn der Benutzer eine E-Mail-Adresse in ein [`textbox`](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role)-Element eingeben muss, fügen Sie `aria-required="true"` zur Textbox hinzu.

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
> Wenn das Label des Feldes bereits das Wort "erforderlich" enthält, wird empfohlen, das `aria-required`-Attribut wegzulassen. Dadurch wird vermieden, dass Bildschirmlesegeräte den Begriff "erforderlich" zweimal vorlesen.

In diesem Beispiel muss JavaScript verwendet werden, um zu verhindern, dass das umgebende Formular gesendet wird, wenn die Textbox keinen Inhalt enthält.

Dies könnte semantisch geschrieben werden, ohne dass JavaScript erforderlich ist:

```html
<label for="email1">Email Address (required)</label>
<input type="email" id="email1" required />
```

## Werte

- `true`
  - : Das Element erfordert einen Wert oder muss überprüft werden, damit das Formular gesendet werden kann.
- `false`
  - : Das Element ist nicht erforderlich.

## Zugehörige Schnittstellen

- [`Element.ariaRequired`](/de/docs/Web/API/Element/ariaRequired)
  - : Die [`ariaRequired`](/de/docs/Web/API/Element/ariaRequired)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, widerspiegelt den Wert des `aria-required`-Attributs.
- [`ElementInternals.ariaRequired`](/de/docs/Web/API/ElementInternals/ariaRequired)
  - : Die [`ariaRequired`](/de/docs/Web/API/ElementInternals/ariaRequired)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, widerspiegelt den Wert des `aria-required`-Attributs.

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

- HTML-Attribut [`required`](/de/docs/Web/HTML/Element/input#required)
- [`:optional` Pseudoklasse](/de/docs/Web/CSS/:optional)
- [`:required` Pseudoklasse](/de/docs/Web/CSS/:required)
- [`aria-invalid` Attribut](/de/docs/Web/Accessibility/ARIA/Attributes/aria-invalid)
- [MDN Verständnis von WCAG, Erläuterungen zu Leitfaden 3.3](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.3_%e2%80%94_input_assistance_help_users_avoid_and_correct_mistakes)
- [Verständnis des Erfolgskriterium 3.3.2 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)
