---
title: "ARIA: aria-multiline Attribut"
short-title: aria-multiline
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-multiline
l10n:
  sourceCommit: ce12c10364f35c64184dec44be85537b7e10d91f
---

Das `aria-multiline` Attribut gibt an, ob ein `textbox` mehrere Zeilen Eingabe akzeptiert oder nur eine einzelne Zeile.

## Beschreibung

Das Standardverhalten der <kbd>Eingabe</kbd>- oder <kbd>Return</kbd>-Taste unterscheidet sich zwischen einzeiligen und mehrzeiligen Textfeldern. Wenn der Benutzerfokus in einem einzeiligen `{{htmlelement("input/text", '&lt;input type="text"&gt;')}}` liegt, wird ein <kbd>Eingabe</kbd>- oder <kbd>Return</kbd>-Tastendruck üblicherweise das Formular abschicken.

Wenn der Benutzerfokus in einem mehrzeiligen {{HTMLElement('textarea')}} liegt, fügt der Tastendruck einen Zeilenumbruch ein. Nur relevant für Elemente mit der Rolle [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role), zeigt das `aria-multiline` Attribut unterstützenden Technologien an, ob das Textfeld mehrere Zeilen Eingabe oder nur eine einzelne Zeile akzeptiert. Es setzt Erwartungen, welche Art von Daten eingegeben werden sollen und was diese Tastendrucke bewirken.

> [!NOTE]
> Wenn möglich, verwenden Sie das HTML {{HTMLElement('input')}} oder das {{HTMLElement('textarea')}}, da diese eingebaute Semantik und Verhaltensweisen haben, keine ARIA-Attribute oder Skripte benötigen und integrierte Tastaturunterstützung bieten.

Wenn `aria-multiline="true"` gesetzt ist, bedeutet dies, dass das Textbox-Widget Zeilenumbrüche innerhalb der Eingabe akzeptiert, ähnlich dem HTML {{HTMLElement('textarea')}}. Elemente mit der Rolle `textbox`, die das Attribut nicht haben oder bei denen der Wert auf `false` gesetzt ist, sind einfache Textboxen.

Achten Sie bei der Gestaltung von Textfeldern auf Fokus und Tastendrucke. ARIA ändert nur den Barrierefreiheitsbaum und somit, wie unterstützende Technologien die Textbox Ihren Benutzern präsentieren. ARIA ändert nichts an der Standardfunktion oder dem Verhalten eines Elements. Wenn semantische HTML-Elemente nicht für ihren vorgesehenen Zweck und ihre Standardeigenschaften verwendet werden, müssen Sie JavaScript verwenden, um Verhalten und Funktionalität, einschließlich der Reaktion auf Tastendruckereignisse, zu verwalten.

## Werte

- `true`
  - : Die Textbox akzeptiert mehrere Zeilen Eingabe.

- `false`
  - : Die Textbox akzeptiert nur eine einzelne Zeile Eingabe.

## Zugehörige Schnittstellen

- [`Element.ariaMultiLine`](/de/docs/Web/API/Element/ariaMultiLine)
  - : Die [`ariaMultiLine`](/de/docs/Web/API/Element/ariaMultiLine) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-multiline` Attributs wider.
- [`ElementInternals.ariaMultiLine`](/de/docs/Web/API/ElementInternals/ariaMultiLine)
  - : Die [`ariaMultiLine`](/de/docs/Web/API/ElementInternals/ariaMultiLine) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-multiline` Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)

Wird vererbt in Rollen:

- [`searchbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- ARIA [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role) Rolle
- ARIA [`searchbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role) Rolle
