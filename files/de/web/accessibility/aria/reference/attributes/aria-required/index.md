---
title: "ARIA: aria-required-Attribut"
short-title: aria-required
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-required
l10n:
  sourceCommit: d9e522ed63f204df4b9ab3ed6c8208ce089fa868
---

Das Attribut `aria-required` gibt an, dass für ein Element eine Benutzereingabe erforderlich ist, bevor ein Formular abgeschickt werden kann.

## Beschreibung

Wenn ein semantisches HTML-Element wie {{htmlelement("input")}}, {{htmlelement("select")}} oder {{htmlelement("textarea")}} einen Wert haben muss, sollte es mit dem Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) versehen werden. Das HTML-Attribut `required` verhindert das Abschicken des Formulars, solange die erforderlichen Formularsteuerelemente keine gültigen Werte haben. Zugleich stellt es sicher, dass Personen, die unterstützende Technologien verwenden, erkennen können, welche semantischen Formularsteuerelemente gültige Inhalte benötigen.

Wenn Formularsteuerelemente mit nicht semantischen Elementen erstellt werden, etwa mit einem {{HTMLElement('div')}} mit der [Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) [`checkbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role), sollte das Attribut `aria-required` mit dem Wert `true` hinzugefügt werden. So wird unterstützenden Technologien mitgeteilt, dass für dieses Element eine Benutzereingabe erforderlich ist, damit das Formular abgeschickt werden kann. Das Attribut `aria-required` kann auch mit HTML-Formularelementen verwendet werden; es ist nicht auf Elemente beschränkt, denen eine ARIA-Rolle zugewiesen wurde.

Ähnlich wie das HTML-Attribut `required` bei semantischen HTML-Formularsteuerelementen vermittelt `aria-required` unterstützenden Technologien ausdrücklich, dass für das Element eine Eingabe erforderlich ist, bevor das Formular abgeschickt werden kann. Das Attribut `required` auf einem semantischen HTML-Formularsteuerelement verhindert das Abschicken des Formulars, wenn kein Wert vorhanden ist. In manchen Browsern wird dabei eine integrierte Fehlermeldung angezeigt, wenn beim Versuch, das Formular abzuschicken, ein erforderlicher Wert ungültig ist. Das Attribut `aria-required` hat wie alle ARIA-Zustände und -Eigenschaften keinen Einfluss auf die Funktionalität des Elements. Funktionalität und Verhalten müssen mit JavaScript hinzugefügt werden.

> [!NOTE]
> ARIA verändert nur den Barrierefreiheitsbaum und damit, wie unterstützende Technologien Inhalte für Benutzer darstellen. ARIA ändert nichts an der Funktion oder dem Verhalten eines Elements. Wenn Sie semantische HTML-Elemente nicht für ihren vorgesehenen Zweck und mit ihrer Standardfunktionalität verwenden, müssen Sie Verhalten, Fokus und ARIA-Zustände mit JavaScript verwalten.

Die CSS-Pseudoklassen {{CSSXRef(':required')}} und {{CSSXRef(':optional')}} erfassen {{htmlelement("input")}}-, {{htmlelement("select")}}- und {{htmlelement("textarea")}}-Elemente danach, ob sie erforderlich beziehungsweise optional sind. Wenn Sie nicht semantische Elemente als Formularsteuerelemente verwenden, können Sie diese CSS-Pseudoklassen nicht nutzen. Sofern das Attribut vorhanden ist, können Sie jedoch Attributselektoren verwenden: `[aria-required="true"]` oder `[aria-required="false"]`.

Wenn ein Formular sowohl erforderliche als auch optionale Formularelemente enthält, sollten die erforderlichen Elemente visuell gekennzeichnet werden, ohne dass die Bedeutung allein durch Farbe vermittelt wird. Üblicherweise werden dafür ein beschreibender Text und/oder ein Symbol verwendet.

> [!NOTE]
> Welche Elemente erforderlich sind, sollte für alle Benutzer erkennbar sein. Stellen Sie sicher, dass die visuelle Darstellung erforderliche Formularsteuerelemente einheitlich und deutlich kennzeichnet. Farbe allein reicht nicht aus, um diese Information zu vermitteln.

## Werte

- `true`
  - : Das Element benötigt einen Wert oder muss ausgewählt sein, damit das Formular abgeschickt werden kann.
- `false`
  - : Das Element ist nicht erforderlich.

## Zugehörige Schnittstellen

- [`Element.ariaRequired`](/de/docs/Web/API/Element/ariaRequired)
  - : Die Eigenschaft [`ariaRequired`](/de/docs/Web/API/Element/ariaRequired) der Schnittstelle [`Element`](/de/docs/Web/API/Element) spiegelt den Wert des Attributs `aria-required` wider.
- [`ElementInternals.ariaRequired`](/de/docs/Web/API/ElementInternals/ariaRequired)
  - : Die Eigenschaft [`ariaRequired`](/de/docs/Web/API/ElementInternals/ariaRequired) der Schnittstelle [`ElementInternals`](/de/docs/Web/API/ElementInternals) spiegelt den Wert des Attributs `aria-required` wider.

## Zugehörige Rollen

Wird in folgenden Rollen verwendet:

- [`checkbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
- [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role)
- [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
- [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)

Wird an folgende Rollen vererbt:

- [`columnheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [`searchbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)
- [`switch`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [`treegrid`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)

## Beispiele

Das Attribut sollte dem Element mit der Rolle des Formularsteuerelements hinzugefügt werden. Wenn Benutzer eine E-Mail-Adresse in ein [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)-Element eingeben müssen, fügen Sie `aria-required="true"` zu diesem Element hinzu.

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
> Wenn die Beschriftung des Felds bereits das Wort „erforderlich“ enthält, wird empfohlen, das Attribut `aria-required` wegzulassen. So wird vermieden, dass Screenreader den Begriff „erforderlich“ zweimal vorlesen.

In diesem Beispiel muss JavaScript verwendet werden, um das Abschicken des umgebenden Formulars zu verhindern, wenn das Textfeld leer ist.

Dies lässt sich auch semantisch und ohne JavaScript umsetzen:

```html
<label for="email1">Email Address (required)</label>
<input type="email" id="email1" required />
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML-Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)
- [Pseudoklasse `:optional`](/de/docs/Web/CSS/Reference/Selectors/:optional)
- [Pseudoklasse `:required`](/de/docs/Web/CSS/Reference/Selectors/:required)
- [Attribut `aria-invalid`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)
- [MDN: WCAG verstehen – Erläuterungen zu Richtlinie 3.3](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.3_%e2%80%94_input_assistance_help_users_avoid_and_correct_mistakes)
- [Erfolgskriterium 3.3.2 verstehen | W3C: WCAG 2.0 verstehen](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)
