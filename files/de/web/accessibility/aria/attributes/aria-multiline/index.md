---
title: aria-multiline
slug: Web/Accessibility/ARIA/Attributes/aria-multiline
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das `aria-multiline` Attribut gibt an, ob ein `textbox` mehrere Zeilen Eingaben akzeptiert oder nur eine einzelne Zeile.

## Beschreibung

Das Standardverhalten der <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste unterscheidet sich zwischen einzeiligen und mehrzeiligen Textfeldern. Wenn sich der Benutzerfokus in einem einzeiligen `{{htmlelement("input/text", '&lt;input type="text"&gt;')}}` befindet, führt ein <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Tastendruck normalerweise zur Übermittlung des Formulars.

Befindet sich der Fokus des Nutzers in einem mehrzeiligen {{HTMLElement('textarea')}}, fügt der Tastendruck einen Zeilenumbruch ein. Nur relevant für Elemente mit der Rolle [`textbox`](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role), gibt das `aria-multiline` Attribut assistiven Technologien an, ob dieses Textfeld mehrere Zeilen Eingaben akzeptiert oder nur eine einzelne Zeile, um Erwartungen bezüglich der Eingabedaten und der Tastenaktionen zu setzen.

> [!NOTE]
> Wo möglich, verwenden Sie das HTML {{HTMLElement('input')}} oder das {{HTMLElement('textarea')}}, da diese eingebaute Semantik und Verhalten haben, keine ARIA-Attribute oder Scripting erfordern und eine eingebaute Tastaturunterstützung bieten.

Wenn `aria-multiline="true"` gesetzt ist, bedeutet dies, dass das Textfeld-Widget Zeilenumbrüche innerhalb der Eingabe akzeptiert, ähnlich dem HTML {{HTMLElement('textarea')}}. Elemente mit der Rolle `textbox`, die das Attribut nicht haben oder bei denen der Wert auf `false` gesetzt ist, sind einfache Textfelder.

Achten Sie auf den Fokus und die Tastenaktionen beim Gestalten von Textfeldern. ARIA verändert nur den Accessibility-Baum und dadurch, wie assistive Technologie das Textfeld Ihren Nutzern präsentiert. ARIA ändert nichts an der Standardfunktion oder dem Verhalten eines Elements. Wenn Sie semantische HTML-Elemente nicht für ihren vorgesehenen Zweck und ihre Standardfunktionalität verwenden, müssen Sie JavaScript verwenden, um Verhalten und Funktionalität zu verwalten, einschließlich der Reaktion auf Tastenereignisse.

## Werte

- `true`

  - : Das Textfeld akzeptiert mehrere Zeilen Eingaben.

- `false`
  - : Das Textfeld akzeptiert nur eine einzelne Zeile Eingaben.

## Zugehörige Schnittstellen

- [`Element.ariaMultiLine`](/de/docs/Web/API/Element/ariaMultiLine)
  - : Die [`ariaMultiLine`](/de/docs/Web/API/Element/ariaMultiLine) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-multiline` Attributs wider.
- [`ElementInternals.ariaMultiLine`](/de/docs/Web/API/ElementInternals/ariaMultiLine)
  - : Die [`ariaMultiLine`](/de/docs/Web/API/ElementInternals/ariaMultiLine) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-multiline` Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`textbox`](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role)

Erbt in Rollen:

- [`searchbox`](/de/docs/Web/Accessibility/ARIA/Roles/searchbox_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- ARIA [`textbox`](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role) Rolle
- ARIA [`searchbox`](/de/docs/Web/Accessibility/ARIA/Roles/searchbox_role) Rolle
