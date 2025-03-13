---
title: aria-multiline
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-multiline
l10n:
  sourceCommit: 8941e7636bfc91985ca5a486e7228b681e1aa272
---

Das `aria-multiline` Attribut gibt an, ob ein `textbox` mehrere Zeilen Eingabe akzeptiert oder nur eine einzelne Zeile.

## Beschreibung

Das Standardverhalten der Tasten <kbd>Enter</kbd> oder <kbd>Return</kbd> unterscheidet sich zwischen einzeiligen und mehrzeiligen Textfeldern. Wenn der Benutzerfokus in einem einzeiligen `{{htmlelement("input/text", '&lt;input type="text"&gt;')}}` liegt, führt ein Tastendruck auf <kbd>Enter</kbd> oder <kbd>Return</kbd> normalerweise dazu, dass das Formular gesendet wird.

Wenn der Benutzerfokus in einem mehrzeiligen {{HTMLElement('textarea')}} liegt, fügt der Tastendruck einen Zeilenumbruch ein. Nur relevant für Elemente mit der gesetzten Rolle [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role), zeigt das `aria-multiline` Attribut unterstützenden Technologien an, ob dieses Textfeld mehrere Zeilen Eingabe akzeptiert oder nur eine einzelne Zeile. Dies setzt Erwartungen in Bezug auf die Art der einzugebenden Daten und das Verhalten bei Tastendrücken.

> [!NOTE]
> Wenn möglich, verwenden Sie das HTML {{HTMLElement('input')}} oder das {{HTMLElement('textarea')}}, da diese integrierte Semantik und Verhaltensweisen haben, keine ARIA-Attribute oder Skripte erfordern und die Tastaturunterstützung eingebaut ist.

Wenn `aria-multiline="true"` gesetzt ist, bedeutet dies, dass das Textfeld-Widget Zeilenumbrüche innerhalb der Eingabe akzeptiert, ähnlich dem HTML {{HTMLElement('textarea')}}. Elemente mit der Rolle `textbox`, die das Attribut nicht haben oder deren Wert auf `false` gesetzt ist, sind einfache Textfelder.

Beachten Sie den Fokus und die Tastenanschläge beim Entwerfen von Textfeldern. ARIA ändert nur den Barrierefreiheitsbaum und damit, wie unterstützende Technologie das Textfeld Ihren Benutzern präsentiert. ARIA ändert nichts an der Standardfunktion oder dem Standardverhalten eines Elements. Wenn Sie keine semantischen HTML-Elemente für ihren vorgesehenen Zweck und die Standardfunktionen verwenden, müssen Sie JavaScript verwenden, um Verhalten und Funktionalität zu steuern, einschließlich der Reaktion auf Tastendruck-Ereignisse.

## Werte

- `true`

  - : Das Textfeld akzeptiert mehrere Zeilen Eingabe.

- `false`
  - : Das Textfeld akzeptiert nur eine einzelne Zeile Eingabe.

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
