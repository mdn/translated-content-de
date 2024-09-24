---
title: aria-multiline
slug: Web/Accessibility/ARIA/Attributes/aria-multiline
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das Attribut `aria-multiline` gibt an, ob ein `textbox` mehrere Zeilen Eingaben akzeptiert oder nur eine einzelne Zeile.

## Beschreibung

Das Standardverhalten der <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Taste unterscheidet sich zwischen einzeiligen und mehrzeiligen Textfeldern. Wenn der Benutzerfokus in einem einzeiligen `{{htmlelement("input/text", '&lt;input type="text"&gt;')}}` liegt, wird durch einen <kbd>Enter</kbd>- oder <kbd>Return</kbd>-Tastendruck normalerweise das Formular abgeschickt.

Wenn der Benutzerfokus in einem mehrzeiligen {{HTMLElement('textarea')}} liegt, fügt der Tastendruck einen Zeilenumbruch ein. Nur relevant für Elemente mit der Rolle [`textbox`](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role), zeigt das Attribut `aria-multiline` den unterstützenden Technologien an, ob dieses Textfeld mehrere Zeilen Eingaben oder nur eine einzelne Zeile akzeptiert, und legt Erwartungen fest, welche Art von Daten eingegeben werden soll und was diese Tastendrücke bewirken.

> [!NOTE]
> Verwenden Sie nach Möglichkeit das HTML {{HTMLElement('input')}} oder das {{HTMLElement('textarea')}}, da diese eingebaute Semantik und Verhaltensweisen haben, keine ARIA-Attribute oder Skripting erfordern und über eingebaute Tastaturunterstützung verfügen.

Wenn `aria-multiline="true"` gesetzt ist, bedeutet dies, dass das Textbox-Widget Zeilenumbrüche innerhalb der Eingabe akzeptiert, ähnlich dem HTML {{HTMLElement('textarea')}}. Elemente mit der Rolle `textbox`, die entweder das Attribut nicht haben oder deren Wert auf `false` gesetzt ist, sind einfache Textfelder.

Seien Sie sich des Fokus und der Tasteneingaben beim Entwerfen von Textfeldern bewusst. ARIA ändert nur den Accessibility-Baum und damit, wie unterstützende Technologien die Textbox den Benutzern präsentieren. ARIA ändert nichts an der Standardfunktion oder dem Standardverhalten eines Elements. Wenn Sie keine semantischen HTML-Elemente für ihren beabsichtigten Zweck und ihre Standardfunktionalität verwenden, müssen Sie JavaScript verwenden, um Verhalten und Funktionalität zu verwalten, einschließlich der Reaktion auf Tasteneingabeereignisse.

## Werte

- `true`

  - : Das Textfeld akzeptiert mehrere Zeilen Eingaben.

- `false`
  - : Das Textfeld akzeptiert nur eine einzelne Zeile Eingaben.

## Zugehörige Schnittstellen

- {{domxref("Element.ariaMultiLine")}}
  - : Die [`ariaMultiLine`](/de/docs/Web/API/Element/ariaMultiLine)-Eigenschaft, Teil der {{domxref("Element")}}-Schnittstelle, spiegelt den Wert des `aria-multiline`-Attributs wider.
- {{domxref("ElementInternals.ariaMultiLine")}}
  - : Die [`ariaMultiLine`](/de/docs/Web/API/ElementInternals/ariaMultiLine)-Eigenschaft, Teil der {{domxref("ElementInternals")}}-Schnittstelle, spiegelt den Wert des `aria-multiline`-Attributs wider.

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
