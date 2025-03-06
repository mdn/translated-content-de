---
title: aria-multiline
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-multiline
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Das Attribut `aria-multiline` gibt an, ob ein `textbox` mehrere Zeilen Eingaben akzeptiert oder nur eine einzelne Zeile.

## Beschreibung

Das Standardverhalten der <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste unterscheidet sich zwischen einzeiligen und mehrzeiligen Textfeldern. Wenn der Benutzerfokus auf einem einzeiligen `{{htmlelement("input/text", '&lt;input type="text"&gt;')}}` liegt, führt ein <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Tastendruck normalerweise dazu, dass das Formular übermittelt wird.

Wenn der Benutzerfokus auf einem mehrzeiligen {{HTMLElement('textarea')}} liegt, fügt der Tastendruck einen Zeilenumbruch ein. Nur relevant für Elemente, die die Rolle [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role) gesetzt haben, gibt das Attribut `aria-multiline` assistiven Technologien an, ob das Textfeld mehrere Zeilen Eingaben akzeptiert oder nur eine einzelne Zeile, wodurch Erwartungen darüber gesetzt werden, welche Art von Daten einzugeben sind und was diese Tastenanschläge bewirken.

> [!NOTE]
> Wo möglich, verwenden Sie das HTML {{HTMLElement('input')}} oder die {{HTMLElement('textarea')}}, da diese eingebaute Semantik und Verhaltensweisen haben, keine ARIA-Attribute oder Skripte erfordern und über eine eingebaute Tastaturunterstützung verfügen.

Wenn `aria-multiline="true"` gesetzt ist, bedeutet dies, dass das Textfeld-Widget Zeilenumbrüche innerhalb der Eingabe akzeptiert, ähnlich wie das HTML {{HTMLElement('textarea')}}. Elemente mit der Rolle `textbox`, die das Attribut nicht haben oder deren Wert auf `false` gesetzt ist, sind einfache Textfelder.

Seien Sie sich über Fokus und Tastenanschläge beim Entwerfen von Textfeldern bewusst. ARIA modifiziert nur den Accessibility-Baum und damit, wie assistive Technologie das Textfeld den Benutzern präsentiert. ARIA ändert nichts an der Standardfunktion oder dem Verhalten eines Elements. Wenn Sie keine semantischen HTML-Elemente für deren vorgesehenen Zweck und Standardfunktionalität verwenden, müssen Sie JavaScript verwenden, um das Verhalten und die Funktionalität zu verwalten, einschließlich der Reaktion auf Tastenanschlagsereignisse.

## Werte

- `true`

  - : Das Textfeld akzeptiert mehrere Zeilen Eingaben.

- `false`
  - : Das Textfeld akzeptiert nur eine einzelne Zeile Eingaben.

## Zugehörige Schnittstellen

- [`Element.ariaMultiLine`](/de/docs/Web/API/Element/ariaMultiLine)
  - : Die [`ariaMultiLine`](/de/docs/Web/API/Element/ariaMultiLine)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des Attributs `aria-multiline` wider.
- [`ElementInternals.ariaMultiLine`](/de/docs/Web/API/ElementInternals/ariaMultiLine)
  - : Die [`ariaMultiLine`](/de/docs/Web/API/ElementInternals/ariaMultiLine)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des Attributs `aria-multiline` wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)

Erbt in Rollen:

- [`searchbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- ARIA [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)-Rolle
- ARIA [`searchbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)-Rolle
