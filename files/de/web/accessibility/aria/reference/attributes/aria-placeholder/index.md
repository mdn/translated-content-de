---
title: "ARIA: aria-placeholder-Attribut"
short-title: aria-placeholder
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-placeholder
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Das `aria-placeholder`-Attribut definiert einen kurzen Hinweis (ein Wort oder eine kurze Phrase), der dem Benutzer bei der Dateneingabe helfen soll, wenn ein Formularelement keinen Wert hat. Der Hinweis kann ein Beispielwert oder eine kurze Beschreibung des erwarteten Formats sein.

## Beschreibung

Ein Platzhalter ist ein Text, der im Formularelement erscheint, wenn kein Wert gesetzt ist. Das HTML-Attribut [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) ermöglicht das Bereitstellen eines Beispielwerts oder einer kurzen Beschreibung des erwarteten Formats für verschiedene HTML-{{HTMLElement('input')}}-Typen und {{HTMLElement('textarea')}}.

Wenn Sie ein `textbox` mit einem anderen Element erstellen, wird `placeholder` nicht unterstützt. Hier kommt `aria-placeholder` ins Spiel. Das `aria-placeholder`-Attribut kann verwendet werden, um einen kurzen Hinweis zu definieren, der dem Benutzer hilft, zu verstehen, welche Art von Daten erwartet wird, wenn ein formulieres Formularelement keinen Wert hat.

```html
<span id="date-of-birth">Birthday</span>
<div
  contenteditable
  role="textbox"
  aria-labelledby="date-of-birth"
  aria-placeholder="MM-DD-YYYY">
  MM-DD-YYYY
</div>
```

Der Platzhalterhinweis sollte dem Benutzer immer angezeigt werden, wenn der Wert des Steuerelements leer ist, einschließlich wenn ein Wert gelöscht wird.

> [!NOTE]
> ARIA ändert nur den Barrierenfreiheitsbaum für ein Element und damit, wie unterstützende Technologien den Inhalt Ihren Benutzern präsentieren. ARIA ändert nichts an der Funktion oder dem Verhalten eines Elements. Wenn Sie semantische HTML-Elemente nicht für ihren vorgesehenen Zweck und ihre Standardfunktionalität verwenden, müssen Sie JavaScript verwenden, um das Verhalten zu steuern.

Das `aria-placeholder` wird zusätzlich zu, nicht anstelle eines Labels verwendet. Sie haben unterschiedliche Zwecke und unterschiedliche Funktionalitäten. Ein Label erklärt, welche Art von Informationen erwartet wird. Der Platzhaltertext bietet einen Hinweis auf den erwarteten Wert.

> [!WARNING]
> Die Verwendung eines Platzhalters anstelle eines sichtbaren Labels beeinträchtigt die Barrierefreiheit und Benutzerfreundlichkeit für viele Benutzer, einschließlich älterer Benutzer und Benutzer mit kognitiven, Mobilitäts-, Feinmotorik- und Sehbehinderungen. Labels sind besser: Sie sind immer sichtbar und bieten eine größere Trefferfläche, um sich auf das Steuerelement zu konzentrieren. Platzhalter haben mehrere Nachteile: Sie verschwinden, wenn das Steuerelement einen Wert hat, einschließlich Leerzeichen. Sie können Benutzer verwirren und denken lassen, dass der Wert vorab ausgefüllt ist, und die Standardfarbe hat einen unzureichenden Kontrast.

> [!NOTE]
> Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art von Daten zu zeigen, die in ein Formular eingegeben werden sollten; sie ersetzen kein richtiges Label.

## Werte

- `<string>`
  - : Das Wort oder die kurze Phrase, die in einem Steuerelement angezeigt werden soll, wenn das Steuerelement keinen Wert hat.

## Zugehörige Schnittstellen

- [`Element.ariaPlaceholder`](/de/docs/Web/API/Element/ariaPlaceholder)
  - : Die [`ariaPlaceholder`](/de/docs/Web/API/Element/ariaPlaceholder)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-placeholder`-Attributs wider.
- [`ElementInternals.ariaPlaceholder`](/de/docs/Web/API/ElementInternals/ariaPlaceholder)
  - : Die [`ariaPlaceholder`](/de/docs/Web/API/ElementInternals/ariaPlaceholder)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-placeholder`-Attributs wider.

## Zugehörige Rollen

Genutzt in Rollen:

- [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)

Vererbt in Rollen:

- [`searchbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML `placeholder`-Attribut](/de/docs/Web/HTML/Reference/Elements/input#placeholder)
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
