---
title: "ARIA: aria-required Attribut"
short-title: aria-required
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-required
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

Das `aria-required` Attribut gibt an, dass eine Benutzereingabe auf dem Element erforderlich ist, bevor ein Formular gesendet werden kann.

## Beschreibung

Wenn ein semantisches HTML-{{htmlelement("input")}}, {{htmlelement("select")}} oder {{htmlelement("textarea")}} einen Wert haben muss, sollte ihm das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) Attribut zugewiesen werden. Das HTML-Attribut `required` verhindert das Senden des Formulars, wenn die erforderlichen Formularelemente keine gültigen Werte haben. Gleichzeitig wird sichergestellt, dass diejenigen, die mit Hilfe von unterstützenden Technologien navigieren, verstehen, welche semantischen Formularelemente gültige Inhalte benötigen.

Wenn Formularelemente mit nicht-semantischen Elementen erstellt werden, wie z.B. einem {{HTMLElement('div')}} mit einer [Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) von [`checkbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role), sollte das `aria-required` Attribut mit einem Wert von `true` hinzugefügt werden, um unterstützenden Technologien anzuzeigen, dass Benutzereingaben auf dem Element erforderlich sind, damit das Formular übermittelt werden kann. Das `aria-required` Attribut kann mit HTML-Formularelementen verwendet werden; es ist nicht auf Elemente beschränkt, die eine ARIA-Rolle zugewiesen haben.

Ähnlich wie das HTML-Attribut `required`, das auf semantische HTML-Formularelemente gesetzt wird, vermittelt das `aria-required` Attribut explizit unterstützenden Technologien, dass das Element erforderlich ist, bevor ein Formular übermittelt werden kann. Das `required` Attribut auf einem semantischen HTML-Formularelement verhindert, dass das Formularelement gesendet wird, wenn kein Wert vorhanden ist — in einigen Browsern wird eine native Fehlermeldung angezeigt, wenn ein erforderlicher Wert ungültig ist, wenn der Benutzer versucht, das Formular zu senden. Das `aria-required` Attribut, wie alle ARIA-Zustände und -Eigenschaften, hat keine Auswirkung auf die Funktionalität des Elements. Funktionalität und Verhalten müssen mit JavaScript hinzugefügt werden.

> [!NOTE]
> ARIA verändert nur den Accessibility-Baum und ändert, wie unterstützende Technologien Inhalte präsentieren. ARIA verändert die Funktion oder das Verhalten eines Elements nicht. Wenn Sie keine semantischen HTML-Elemente für ihren beabsichtigten Zweck und deren Standardfunktionalität verwenden, müssen Sie JavaScript nutzen, um das Verhalten, den Fokus und die ARIA-Zustände zu verwalten.

Die CSS-Pseudoklassen {{CSSXRef(':required')}} und {{CSSXRef(':optional')}} passen zu {{htmlelement("input")}}, {{htmlelement("select")}}, und {{htmlelement("textarea")}} Elementen basierend darauf, ob sie erforderlich oder optional sind. Wenn man nicht-semantische Elemente als Formularelemente verwendet, erhält man nicht diesen Vorteil der CSS-Pseudoklassenselektoren. Man kann jedoch Attributselektoren verwenden, wenn das Attribut vorhanden ist: `[aria-required="true"]` oder `[aria-required="false"]`.

Wenn ein Formular sowohl erforderliche als auch optionale Formularelemente enthält, sollten die erforderlichen Elemente visuell durch eine Darstellung angezeigt werden, die nicht nur auf Farben beruht, um Bedeutung zu vermitteln. In der Regel werden beschreibender Text und/oder ein Symbol verwendet.

> [!NOTE]
> Welche Elemente erforderlich sind, sollte für alle Benutzer offensichtlich sein. Stellen Sie sicher, dass die visuelle Darstellung des Formularelements in einer konsistenten, sichtbaren Weise angezeigt wird, wobei zu beachten ist, dass Farbe allein nicht ausreicht, um Informationen zu vermitteln.

## Beispiele

Das Attribut sollte der Formularsteuerungsrolle hinzugefügt werden. Wenn der Benutzer eine E-Mail-Adresse [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role) ausfüllen muss, fügen Sie `aria-required="true"` zur Textbox hinzu.

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
> Wenn das Label des Felds bereits das Wort "erforderlich" enthält, ist es ratsam, das `aria-required` Attribut wegzulassen. Dadurch wird vermieden, dass Screenreader das Wort "erforderlich" doppelt vorlesen.

In diesem Beispiel muss JavaScript verwendet werden, um zu verhindern, dass das enthaltene Formular gesendet wird, wenn die Textbox keinen Inhalt hat.

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
  - : Die [`ariaRequired`](/de/docs/Web/API/Element/ariaRequired) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, reflektiert den Wert des `aria-required` Attributs.
- [`ElementInternals.ariaRequired`](/de/docs/Web/API/ElementInternals/ariaRequired)
  - : Die [`ariaRequired`](/de/docs/Web/API/ElementInternals/ariaRequired) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, reflektiert den Wert des `aria-required` Attributs.

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
- [`:optional` Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/:optional)
- [`:required` Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/:required)
- [`aria-invalid` Attribut](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)
- [MDN Verständnis von WCAG, Leitfaden 3.3 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.3_%e2%80%94_input_assistance_help_users_avoid_and_correct_mistakes)
- [Verständnis von Erfolgskriterium 3.3.2 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)
