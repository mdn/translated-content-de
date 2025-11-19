---
title: "ARIA: aria-multiline Attribut"
short-title: aria-multiline
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-multiline
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Das `aria-multiline` Attribut zeigt an, ob ein `textbox` mehrere Zeilen Eingabe akzeptiert oder nur eine einzelne Zeile.

## Beschreibung

Das Standardverhalten der <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste unterscheidet sich zwischen einzeiligen und mehrzeiligen Textfeldern. Wenn der Benutzerfokus in einem einzeiligen `{{htmlelement("input/text", '&lt;input type="text"&gt;')}}` ist, sendet ein <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Tastendruck normalerweise das Formular ab.

Wenn der Benutzerfokus in einem mehrzeiligen {{HTMLElement('textarea')}} ist, fügt der Tastendruck einen Zeilenumbruch ein. Nur relevant für Elemente mit der [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role) Rollenfestlegung zeigt das `aria-multiline` Attribut unterstützenden Technologien an, ob dieses Textfeld mehrere Zeilen Eingabe oder nur eine einzelne Zeile akzeptiert, und setzt Erwartungen darüber, welche Art von Daten eingegeben werden sollen und was diese Tastendrücke bewirken.

> [!NOTE]
> Wenn möglich, nutzen Sie das HTML {{HTMLElement('input')}} oder das {{HTMLElement('textarea')}}, da diese eingebaute Semantik und Verhaltensweisen haben, keine ARIA-Attribute oder Skripte erfordern und über integrierte Tastaturunterstützung verfügen.

Wenn `aria-multiline="true"` gesetzt ist, bedeutet dies, dass das Textbox-Widget Zeilenumbrüche innerhalb der Eingabe akzeptiert, ähnlich dem HTML {{HTMLElement('textarea')}}. Elemente mit einer Rolle von `textbox`, die das Attribut nicht haben oder deren Wert auf `false` gesetzt ist, sind einfache Textboxen.

Achten Sie auf den Fokus und die Tastendrücke beim Entwerfen von Textboxen. ARIA modifiziert nur den Zugänglichkeitsbaum und damit, wie unterstützende Technologien die Textbox Ihren Benutzern präsentieren. ARIA ändert nichts an der Standardfunktion oder dem Verhalten eines Elements. Wenn Sie semantische HTML-Elemente nicht für ihren vorgesehenen Zweck und ihre Standardfunktionalität verwenden, müssen Sie JavaScript einsetzen, um das Verhalten und die Funktionalität zu verwalten, einschließlich der Reaktion auf Tastendruckereignisse.

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

Vererbt in Rollen:

- [`searchbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- ARIA [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role) Rolle
- ARIA [`searchbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role) Rolle
