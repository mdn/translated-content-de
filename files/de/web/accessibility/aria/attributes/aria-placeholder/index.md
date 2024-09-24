---
title: aria-placeholder
slug: Web/Accessibility/ARIA/Attributes/aria-placeholder
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das `aria-placeholder` Attribut definiert einen kurzen Hinweis (ein Wort oder eine kurze Phrase), der Benutzerinnen und Benutzern bei der Dateneingabe helfen soll, wenn ein Formularfeld keinen Wert hat. Der Hinweis kann ein Beispielwert oder eine kurze Beschreibung des erwarteten Formats sein.

## Beschreibung

Ein Platzhalter ist ein Text, der im Formularfeld erscheint, wenn kein Wert gesetzt ist. Das HTML-Attribut [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder) ermöglicht es, für mehrere HTML {{HTMLElement('input')}}-Typen und {{HTMLElement('textarea')}} einen Beispielwert oder eine kurze Beschreibung des erwarteten Formats bereitzustellen.

Wenn Sie ein `textbox` mit einem anderen Element erstellen, wird `placeholder` nicht unterstützt. Hier kommt `aria-placeholder` ins Spiel. Das `aria-placeholder` Attribut kann verwendet werden, um einen kurzen Hinweis zu definieren, der der Benutzerin oder dem Benutzer helfen soll zu verstehen, welche Art von Daten erwartet wird, wenn ein nicht-semantisches Formularfeld keinen Wert hat.

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

Der Platzhalterhinweis sollte der Benutzerin oder dem Benutzer immer dann angezeigt werden, wenn der Wert des Steuerelements leer ist, einschließlich wenn ein Wert gelöscht wird.

> [!NOTE]
> ARIA verändert nur den Accessibility-Tree eines Elements und damit, wie unterstützende Technologien den Inhalt für Ihre Benutzerinnen und Benutzer präsentieren. ARIA verändert nichts an der Funktion oder dem Verhalten eines Elements. Wenn semantische HTML-Elemente nicht für ihren vorgesehenen Zweck und ihre Standardfunktionen verwendet werden, müssen Sie JavaScript verwenden, um das Verhalten zu steuern.

Das `aria-placeholder` wird zusätzlich zu einem Label verwendet, nicht stattdessen. Sie haben unterschiedliche Zwecke und Funktionen. Ein Label erklärt, welche Art von Informationen erwartet wird. Platzhaltertext bietet einen Hinweis auf den erwarteten Wert.

> [!WARNING]
> Die Verwendung eines Platzhalters anstelle eines sichtbaren Labels beeinträchtigt die Zugänglichkeit und Benutzerfreundlichkeit für viele Nutzende, einschließlich älterer Nutzende und Nutzende mit kognitiven, motorischen, Feinmotorik- und Seheinschränkungen. Labels sind besser: Sie sind immer sichtbar und bieten eine größere Trefferfläche, um das Steuerelement zu fokussieren. Platzhalter haben mehrere Nachteile: Sie verschwinden, wenn das Steuerelement irgendeinen Wert hat, einschließlich nur Leerzeichen. Sie können Benutzerinnen und Benutzern verwirren, indem sie denken, der Wert sei vorausgefüllt, und die Standardfarbe hat keinen ausreichenden Kontrast.

> [!NOTE]
> Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art von Daten zu zeigen, die in ein Formular eingegeben werden sollen; sie ersetzen kein richtiges Label.

## Werte

- `<string>`
  - : Das Wort oder die kurze Phrase, die in einem Steuerelement angezeigt wird, wenn das Steuerelement keinen Wert hat.

## Zugehörige Schnittstellen

- {{domxref("Element.ariaPlaceholder")}}
  - : Die [`ariaPlaceholder`](/de/docs/Web/API/Element/ariaPlaceholder) Eigenschaft, Teil der {{domxref("Element")}} Schnittstelle, spiegelt den Wert des `aria-placeholder` Attributs wider.
- {{domxref("ElementInternals.ariaPlaceholder")}}
  - : Die [`ariaPlaceholder`](/de/docs/Web/API/ElementInternals/ariaPlaceholder) Eigenschaft, Teil der {{domxref("ElementInternals")}} Schnittstelle, spiegelt den Wert des `aria-placeholder` Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`textbox`](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role)

Vererbt in Rollen:

- [`searchbox`](/de/docs/Web/Accessibility/ARIA/Roles/searchbox_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML `placeholder` Attribut](/de/docs/Web/HTML/Element/input#placeholder)
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
