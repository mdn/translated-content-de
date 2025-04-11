---
title: aria-placeholder
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-placeholder
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Das `aria-placeholder` Attribut definiert einen kurzen Hinweis (ein Wort oder eine kurze Phrase), der dem Benutzer bei der Dateneingabe helfen soll, wenn ein Formularelement keinen Wert hat. Der Hinweis kann ein Beispielwert oder eine kurze Beschreibung des erwarteten Formats sein.

## Beschreibung

Ein Platzhalter ist ein Text, der im Formularelement erscheint, wenn kein Wert gesetzt ist. Das HTML-Attribut [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) ermöglicht das Bereitstellen eines Beispielwerts oder einer kurzen Beschreibung des erwarteten Formats für verschiedene HTML {{HTMLElement('input')}} Typen und {{HTMLElement('textarea')}}.

Wenn Sie ein `textbox` mit einem anderen Element erstellen, wird `placeholder` nicht unterstützt. Hier kommt `aria-placeholder` ins Spiel. Mit dem `aria-placeholder` Attribut kann ein kurzer Hinweis definiert werden, um dem Benutzer zu helfen, zu verstehen, welcher Datentyp erwartet wird, wenn ein nicht-semantisches Formularelement keinen Wert hat.

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

Der Platzhalterhinweis sollte dem Benutzer angezeigt werden, wann immer der Wert des Elements leer ist, auch wenn ein Wert gelöscht wird.

> [!NOTE]
> ARIA modifiziert nur den Zugänglichkeitsbaum eines Elements und beeinflusst daher, wie Unterstützende Technologien den Inhalt Ihren Benutzern präsentieren. ARIA ändert nichts an der Funktion oder dem Verhalten eines Elements. Wenn semantische HTML-Elemente nicht für ihren vorgesehenen Zweck und die Standardfunktionalität genutzt werden, müssen Sie JavaScript verwenden, um das Verhalten zu steuern.

Das `aria-placeholder` wird zusätzlich zu einem Label verwendet, nicht anstatt eines Labels. Sie haben unterschiedliche Zwecke und unterschiedliche Funktionen. Ein Label erklärt, welche Art von Information erwartet wird. Platzhaltertext gibt einen Hinweis auf den erwarteten Wert.

> [!WARNING]
> Einen Platzhalter anstelle eines sichtbaren Labels zu verwenden, beeinträchtigt die Zugänglichkeit und Benutzerfreundlichkeit für viele Nutzer, einschließlich älterer Nutzer und Nutzer mit kognitiven, Mobilitäts-, Feinmotorik- und Sehbeeinträchtigungen. Labels sind besser: Sie sind immer sichtbar und bieten eine größere Trefferfläche, um den Fokus auf das Steuerelement zu legen. Platzhalter haben mehrere Nachteile: Sie verschwinden, wenn das Steuerelement einen Wert enthält, auch wenn dieser nur aus Leerzeichen besteht, sie können Benutzer dazu verleiten, zu denken, dass der Wert vorab ausgefüllt ist, und die Standardfarbe hat einen unzureichenden Kontrast.

> [!NOTE]
> Platzhalter sollten nur verwendet werden, um ein Beispiel für den Datentyp zu zeigen, der in ein Formular eingegeben werden soll; sie ersetzen kein richtiges Label.

## Werte

- `<string>`
  - : Das Wort oder die kurze Phrase, die in einem Steuerelement angezeigt werden soll, wenn das Steuerelement keinen Wert hat.

## Zugehörige Schnittstellen

- [`Element.ariaPlaceholder`](/de/docs/Web/API/Element/ariaPlaceholder)
  - : Die [`ariaPlaceholder`](/de/docs/Web/API/Element/ariaPlaceholder) Eigenschaft, die Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle ist, spiegelt den Wert des `aria-placeholder` Attributs wider.
- [`ElementInternals.ariaPlaceholder`](/de/docs/Web/API/ElementInternals/ariaPlaceholder)
  - : Die [`ariaPlaceholder`](/de/docs/Web/API/ElementInternals/ariaPlaceholder) Eigenschaft, die Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle ist, spiegelt den Wert des `aria-placeholder` Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)

Vererbt in Rollen:

- [`searchbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML `placeholder` Attribut](/de/docs/Web/HTML/Reference/Elements/input#placeholder)
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
