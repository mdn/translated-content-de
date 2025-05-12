---
title: "ARIA: aria-multiline Attribut"
short-title: aria-multiline
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-multiline
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Das `aria-multiline` Attribut gibt an, ob ein `textbox` mehrere Zeilen Eingabe akzeptiert oder nur eine einzelne Zeile.

## Beschreibung

Das Standardverhalten der <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste unterscheidet sich zwischen einzeiligen und mehrzeiligen Textfeldern. Wenn der Benutzerfokus auf einem einzeiligen `{{htmlelement("input/text", '&lt;input type="text"&gt;')}}` liegt, bewirkt ein <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Tastendruck normalerweise das Absenden des Formulars.

Befindet sich der Benutzerfokus auf einem mehrzeiligen {{HTMLElement('textarea')}}, fügt der Tastendruck einen Zeilenumbruch ein. Nur relevant für Elemente mit der festgelegten Rolle [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role), zeigt das `aria-multiline` Attribut assistiven Technologien an, ob dieses Textfeld mehrere Zeilen Eingabe akzeptiert oder nur eine einzelne Zeile und setzt Erwartungen, welche Art von Daten eingegeben werden sollen und was diese Tastendrucke bewirken.

> [!NOTE]
> Wo möglich, verwenden Sie das HTML {{HTMLElement('input')}} oder das {{HTMLElement('textarea')}}, da diese eingebaute Semantik und Verhaltensweisen haben, keine ARIA-Attribute oder Skripting erfordern und über eingebaute Tastaturunterstützung verfügen.

Wenn das `aria-multiline="true"` gesetzt ist, bedeutet dies, dass das Textfeld-Widget Zeilenumbrüche innerhalb der Eingabe akzeptiert, ähnlich wie das HTML {{HTMLElement('textarea')}}. Elemente mit einer Rolle von `textbox`, die das Attribut nicht haben oder den Wert auf `false` gesetzt haben, sind einfache Textfelder.

Achten Sie auf den Fokus und Tastendrucke beim Entwerfen von Textfeldern. ARIA modifiziert nur den Accessibility-Tree und somit, wie assistive Technologie das Textfeld Ihren Benutzern präsentiert. ARIA ändert nichts an der Standardfunktion oder dem Verhalten eines Elements. Wenn semantische HTML-Elemente nicht für ihren vorgesehenen Zweck und ihre Standardfunktionalität verwendet werden, müssen Sie JavaScript verwenden, um das Verhalten und die Funktionalität zu verwalten, einschließlich der Reaktion auf Tastendruckereignisse.

## Werte

- `true`

  - : Das Textfeld akzeptiert mehrere Zeilen Eingabe.

- `false`
  - : Das Textfeld akzeptiert nur eine einzelne Zeile Eingabe.

## Zugehörige Schnittstellen

- [`Element.ariaMultiLine`](/de/docs/Web/API/Element/ariaMultiLine)
  - : Die [`ariaMultiLine`](/de/docs/Web/API/Element/ariaMultiLine) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, reflektiert den Wert des `aria-multiline` Attributs.
- [`ElementInternals.ariaMultiLine`](/de/docs/Web/API/ElementInternals/ariaMultiLine)
  - : Die [`ariaMultiLine`](/de/docs/Web/API/ElementInternals/ariaMultiLine) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, reflektiert den Wert des `aria-multiline` Attributs.

## Zugehörige Rollen

Verwendet in Rollen:

- [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)

Geerbt in Rollen:

- [`searchbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- ARIA [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role) Rolle
- ARIA [`searchbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role) Rolle
