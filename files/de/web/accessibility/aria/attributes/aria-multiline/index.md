---
title: aria-multiline
slug: Web/Accessibility/ARIA/Attributes/aria-multiline
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das Attribut `aria-multiline` gibt an, ob ein `textbox` mehrere Zeilen Eingaben akzeptiert oder nur eine einzelne Zeile.

## Beschreibung

Das Standardverhalten der <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste unterscheidet sich zwischen einzeiligen und mehrzeiligen Textfeldern. Wenn der Benutzerfokus auf einem einzeiligen `{{htmlelement("input/text", '&lt;input type="text"&gt;')}}` liegt, führt ein <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Tastendruck normalerweise dazu, dass das Formular gesendet wird.

Wenn der Benutzerfokus auf einem mehrzeiligen {{HTMLElement('textarea')}} liegt, fügt der Tastendruck einen Zeilenumbruch ein. Nur relevant für Elemente mit der Rolle [`textbox`](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role), zeigt das Attribut `aria-multiline` unterstützenden Technologien an, ob dieses Textfeld mehrere Zeilen Eingaben akzeptiert oder nur eine einzelne Zeile und legt damit Erwartungen fest, welche Art von Daten eingegeben werden sollten und was diese Tastendrücke bewirken.

> [!NOTE]
> Verwenden Sie, wo immer möglich, das HTML-Element {{HTMLElement('input')}} oder {{HTMLElement('textarea')}}, da diese eingebaute Semantik und Verhaltensweisen haben, keine ARIA-Attribute oder Skripte erfordern und über integrierte Tastaturunterstützung verfügen.

Wenn `aria-multiline="true"` gesetzt ist, bedeutet dies, dass das Textfeld-Widget Zeilenumbrüche innerhalb der Eingabe akzeptiert, ähnlich wie das HTML-Element {{HTMLElement('textarea')}}. Elemente mit der Rolle `textbox`, die das Attribut nicht haben oder auf `false` gesetzt sind, sind einfache Textfelder.

Achten Sie auf Fokus und Tastendrücke, wenn Sie Textfelder gestalten. ARIA ändert nur den Accessibility-Tree und somit, wie unterstützende Technologien das Textfeld Ihren Benutzern präsentieren. ARIA ändert nichts an der Standardfunktion oder dem Standardverhalten eines Elements. Wenn Sie keine semantischen HTML-Elemente für ihren beabsichtigten Zweck und ihre Standardfunktionalität verwenden, müssen Sie JavaScript verwenden, um Verhalten und Funktionalität, einschließlich der Beantwortung von Tastendruckereignissen, zu verwalten.

## Werte

- `true`

  - : Das Textfeld akzeptiert mehrere Zeilen Eingaben.

- `false`
  - : Das Textfeld akzeptiert nur eine einzelne Zeile Eingaben.

## Zugehörige Schnittstellen

- [`Element.ariaMultiLine`](/de/docs/Web/API/Element/ariaMultiLine)
  - : Die [`ariaMultiLine`](/de/docs/Web/API/Element/ariaMultiLine)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-multiline`-Attributs wider.
- [`ElementInternals.ariaMultiLine`](/de/docs/Web/API/ElementInternals/ariaMultiLine)
  - : Die [`ariaMultiLine`](/de/docs/Web/API/ElementInternals/ariaMultiLine)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-multiline`-Attributs wider.

## Zugehörige Rollen

Genutzt in Rollen:

- [`textbox`](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role)

Erbt in Rollen:

- [`searchbox`](/de/docs/Web/Accessibility/ARIA/Roles/searchbox_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- ARIA [`textbox`](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role) Rolle
- ARIA [`searchbox`](/de/docs/Web/Accessibility/ARIA/Roles/searchbox_role) Rolle
