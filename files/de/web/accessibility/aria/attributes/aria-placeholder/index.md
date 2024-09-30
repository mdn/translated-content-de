---
title: aria-placeholder
slug: Web/Accessibility/ARIA/Attributes/aria-placeholder
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das `aria-placeholder` Attribut definiert einen kurzen Hinweis (ein Wort oder eine kurze Phrase), der dem Benutzer bei der Dateneingabe helfen soll, wenn ein Formularfeld keinen Wert hat. Der Hinweis kann ein Beispielwert oder eine kurze Beschreibung des erwarteten Formats sein.

## Beschreibung

Ein Platzhalter ist ein Text, der im Formularfeld erscheint, wenn kein Wert gesetzt ist. Das HTML-Attribut [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder) ermöglicht es, einen Beispielwert oder eine kurze Beschreibung des erwarteten Formats für mehrere HTML {{HTMLElement('input')}}-Typen und {{HTMLElement('textarea')}} bereitzustellen.

Wenn Sie ein `textbox` mit einem anderen Element erstellen, wird `placeholder` nicht unterstützt. Genau hier kommt `aria-placeholder` ins Spiel. Das `aria-placeholder` Attribut kann verwendet werden, um einen kurzen Hinweis zu definieren, der dem Benutzer hilft zu verstehen, welche Art von Daten erwartet wird, wenn ein nicht-semantisches Formularfeld keinen Wert hat.

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

Der Platzhalter-Hinweis sollte dem Benutzer immer dann angezeigt werden, wenn der Wert des Steuerelements leer ist, auch wenn ein Wert gelöscht wird.

> [!NOTE]
> ARIA modifiziert nur den Zugänglichkeitsbaum eines Elements und damit, wie unterstützende Technologie den Inhalt Ihren Benutzern präsentiert. ARIA ändert nichts an der Funktion oder dem Verhalten eines Elements. Wenn Sie semantische HTML-Elemente nicht für ihren vorgesehenen Zweck und ihre Standardfunktionalität verwenden, müssen Sie JavaScript verwenden, um das Verhalten zu steuern.

Das `aria-placeholder` wird zusätzlich und nicht anstelle eines Labels verwendet. Sie haben unterschiedliche Zwecke und unterschiedliche Funktionalität. Ein Label erklärt, welche Art von Informationen erwartet wird. Platzhalter-Text gibt einen Hinweis auf den erwarteten Wert.

> [!WARNING]
> Die Verwendung eines Platzhalters anstelle eines sichtbaren Labels beeinträchtigt die Zugänglichkeit und Benutzerfreundlichkeit für viele Benutzer, darunter ältere Benutzer und Benutzer mit kognitiven Einschränkungen, motorischen Einschränkungen, feinmotorischen Fähigkeiten und Sehbehinderungen. Labels sind besser: Sie sind immer sichtbar und bieten eine größere Trefferfläche, um sich auf das Steuerelement zu konzentrieren. Platzhalter haben mehrere Nachteile: Sie verschwinden, wenn das Steuerelement einen Wert hat, einschließlich nur Leerzeichen, sie können Benutzer verwirren, indem sie denken, dass der Wert vorausgefüllt ist, und die Standardfarbe hat einen unzureichenden Kontrast.

> [!NOTE]
> Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art der in ein Formular einzugebenden Daten zu zeigen; sie ersetzen kein richtiges Label.

## Werte

- `<string>`
  - : Das Wort oder die kurze Phrase, die in einem Steuerelement angezeigt wird, wenn das Steuerelement keinen Wert hat.

## Zugehörige Schnittstellen

- [`Element.ariaPlaceholder`](/de/docs/Web/API/Element/ariaPlaceholder)
  - : Die [`ariaPlaceholder`](/de/docs/Web/API/Element/ariaPlaceholder) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-placeholder` Attributs wider.
- [`ElementInternals.ariaPlaceholder`](/de/docs/Web/API/ElementInternals/ariaPlaceholder)
  - : Die [`ariaPlaceholder`](/de/docs/Web/API/ElementInternals/ariaPlaceholder) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-placeholder` Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`textbox`](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role)

Geerbt in Rollen:

- [`searchbox`](/de/docs/Web/Accessibility/ARIA/Roles/searchbox_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML `placeholder` Attribut](/de/docs/Web/HTML/Element/input#placeholder)
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
