---
title: "ARIA: aria-placeholder-Attribut"
short-title: aria-placeholder
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-placeholder
l10n:
  sourceCommit: 76824348ac7be05f30c32f29e9495e7b29f71876
---

Das `aria-placeholder`-Attribut definiert einen kurzen Hinweis (ein Wort oder eine kurze Phrase), der dem Benutzer bei der Dateneingabe helfen soll, wenn ein Formularelement keinen Wert hat. Der Hinweis kann ein Beispielwert oder eine kurze Beschreibung des erwarteten Formats sein.

## Beschreibung

Ein Platzhalter ist ein Text, der im Formularelement erscheint, wenn kein Wert festgelegt ist. Das HTML-Attribut [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) ermöglicht es, einen Beispielwert oder eine kurze Beschreibung des erwarteten Formats für verschiedene HTML {{HTMLElement('input')}}-Typen und {{HTMLElement('textarea')}} bereitzustellen.

Wenn Sie ein `textbox` mit einem anderen Element erstellen, wird `placeholder` nicht unterstützt. Hier kommt `aria-placeholder` ins Spiel. Das `aria-placeholder`-Attribut kann verwendet werden, um einen kurzen Hinweis zu definieren, der dem Benutzer verständlich macht, welche Art von Daten erwartet wird, wenn ein nicht-semantisches Formularelement keinen Wert hat.

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
> ARIA verändert nur die Zugänglichkeitshierarchie eines Elements und damit, wie unterstützende Technologien den Inhalt Ihren Benutzern präsentieren. ARIA ändert nichts an der Funktion oder dem Verhalten eines Elements. Wenn Sie keine semantischen HTML-Elemente für ihren vorgesehenen Zweck und ihre Standardfunktionalität verwenden, müssen Sie JavaScript zur Verwaltung des Verhaltens einsetzen.

Das `aria-placeholder` wird zusätzlich zu einem Label verwendet, nicht anstatt eines Labels. Sie haben unterschiedliche Zwecke und unterschiedliche Funktionen. Ein Label erklärt, welche Art von Informationen erwartet wird. Platzhaltertext gibt einen Hinweis auf den erwarteten Wert.

> [!WARNING]
> Die Verwendung eines Platzhalters anstelle eines sichtbaren Labels beeinträchtigt die Barrierefreiheit und Benutzerfreundlichkeit für viele Nutzer, einschließlich älterer Nutzer und Nutzer mit kognitiven, motorischen, feinmotorischen und Sehbeeinträchtigungen. Labels sind besser: Sie sind immer sichtbar und bieten eine größere Trefferfläche, um das Steuerelement zu fokussieren. Platzhalter haben mehrere Nachteile: Sie verschwinden, wenn das Steuerelement einen Wert enthält, auch wenn es nur Leerzeichen sind, sie können Nutzer verwirren und sie glauben lassen, dass der Wert vorausgefüllt ist, und die Standardfarbe hat einen unzureichenden Kontrast.

> [!NOTE]
> Platzhalter sollten nur verwendet werden, um ein Beispiel für die Art der Daten zu zeigen, die in ein Formular eingegeben werden sollten; sie ersetzen kein ordentliches Label.

## Werte

- `<string>`
  - : Das Wort oder die kurze Phrase, die in einem Steuerelement angezeigt wird, wenn das Steuerelement keinen Wert hat.

## Zugehörige Schnittstellen

- [`Element.ariaPlaceholder`](/de/docs/Web/API/Element/ariaPlaceholder)
  - : Die [`ariaPlaceholder`](/de/docs/Web/API/Element/ariaPlaceholder)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-placeholder`-Attributs wider.
- [`ElementInternals.ariaPlaceholder`](/de/docs/Web/API/ElementInternals/ariaPlaceholder)
  - : Die [`ariaPlaceholder`](/de/docs/Web/API/ElementInternals/ariaPlaceholder)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-placeholder`-Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)

Geerbt in Rollen:

- [`searchbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML `placeholder`-Attribut](/de/docs/Web/HTML/Reference/Elements/input#placeholder)
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
