---
title: aria-placeholder
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-placeholder
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Das `aria-placeholder`-Attribut definiert einen kurzen Hinweis (ein Wort oder eine kurze Phrase), der dem Benutzer bei der Dateneingabe helfen soll, wenn ein Formularelement keinen Wert hat. Der Hinweis kann ein Beispielwert oder eine kurze Beschreibung des erwarteten Formats sein.

## Beschreibung

Ein Platzhalter ist Text, der im Formularelement erscheint, wenn kein Wert festgelegt ist. Das HTML-Attribut [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder) ermöglicht das Bereitstellen eines Beispielwerts oder einer kurzen Beschreibung des erwarteten Formats für mehrere HTML-{{HTMLElement('input')}}-Typen und {{HTMLElement('textarea')}}.

Wenn Sie ein `textbox` mit einem anderen Element erstellen, wird `placeholder` nicht unterstützt. Hier kommt `aria-placeholder` ins Spiel. Das `aria-placeholder`-Attribut kann verwendet werden, um einen kurzen Hinweis zu definieren, der dem Benutzer hilft zu verstehen, welche Art von Daten erwartet wird, wenn ein nicht-semantisches Formularelement keinen Wert hat.

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

Der Platzhalterhinweis sollte dem Benutzer angezeigt werden, wann immer der Wert des Elements leer ist, einschließlich wenn ein Wert gelöscht wird.

> [!NOTE]
> ARIA verändert nur den Accessibility-Baum eines Elements und damit, wie unterstützende Technologien die Inhalte Ihren Benutzern präsentieren. ARIA ändert nichts an der Funktion oder dem Verhalten eines Elements. Wenn Sie semantische HTML-Elemente nicht für ihren vorgesehenen Zweck und ihre Standardfunktionalität verwenden, müssen Sie JavaScript verwenden, um das Verhalten zu steuern.

Das `aria-placeholder` wird zusätzlich zu einem Label und nicht anstelle eines Labels verwendet. Sie haben verschiedene Zwecke und unterschiedliche Funktionalitäten. Ein Label erklärt, welche Art von Informationen erwartet wird. Platzhaltertext gibt einen Hinweis auf den erwarteten Wert.

> [!WARNING]
> Die Verwendung eines Platzhalters anstelle eines sichtbaren Labels beeinträchtigt die Barrierefreiheit und Benutzerfreundlichkeit für viele Benutzer, einschließlich älterer Benutzer und Benutzer mit kognitiven, Mobilitäts-, Feinmotorik- und Sehbeeinträchtigungen. Labels sind besser: Sie sind immer sichtbar und bieten eine größere Trefferfläche, um das Element zu fokussieren. Platzhalter haben mehrere Nachteile: Sie verschwinden, wenn das Element einen Wert hat, einschließlich nur Leerraum, sie können Benutzer verwirren, indem sie denken, dass der Wert vorausgefüllt ist, und die Standardfarbe hat nicht genügend Kontrast.

> [!NOTE]
> Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art der Daten zu zeigen, die in ein Formular eingegeben werden sollen; sie ersetzen kein richtiges Label.

## Werte

- `<string>`
  - : Das Wort oder die kurze Phrase, die in einem Steuerelement angezeigt werden soll, wenn das Steuerelement keinen Wert hat.

## Zugehörige Schnittstellen

- [`Element.ariaPlaceholder`](/de/docs/Web/API/Element/ariaPlaceholder)
  - : Die [`ariaPlaceholder`](/de/docs/Web/API/Element/ariaPlaceholder)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-placeholder`-Attributs wider.
- [`ElementInternals.ariaPlaceholder`](/de/docs/Web/API/ElementInternals/ariaPlaceholder)
  - : Die [`ariaPlaceholder`](/de/docs/Web/API/ElementInternals/ariaPlaceholder)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-placeholder`-Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)

Vererbt in Rollen:

- [`searchbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML `placeholder`-Attribut](/de/docs/Web/HTML/Element/input#placeholder)
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
