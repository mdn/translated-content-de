---
title: aria-braillelabel
slug: Web/Accessibility/ARIA/Attributes/aria-braillelabel
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die globale Eigenschaft `aria-braillelabel` definiert einen Zeichenfolgenwert, der das aktuelle Element kennzeichnet und in Braille umgewandelt werden soll.

## Beschreibung

Das globale Attribut `aria-braillelabel` ähnelt dem globalen Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label), da es einen Zeichenfolgenwert definiert, der das aktuelle Element kennzeichnet. Während `aria-label` vom Screenreader vorgelesen wird, werden die Inhalte des Attributs `aria-braillelabel` in Braille umgewandelt, um dem Benutzer einen erkennbaren Namen des Objekts in Braille zu bieten.

Der Zweck der Eigenschaft `aria-braillelabel` besteht darin, zu überschreiben, wie assistive Technologien den zugänglichen Namen eines Elements in Braille lokalisieren und ausdrücken. Sie sollte nur verwendet werden, wenn ohne dieses Attribut der zugängliche Name bei der Umwandlung in Braille nicht der gewünschten Benutzererfahrung entspricht.

Beim Verwenden von `aria-braillelabel` stellen Sie sicher, dass:

- Das Element, auf das `aria-braillelabel` angewendet wird, einen gültigen zugänglichen Namen hat.
- Der Wert von `aria-braillelabel` tatsächliche Inhalte hat und nicht leer oder nur Unicode- oder Unicode-Brailleschrift-Leerzeichen ist.
- Der Wert NICHT identisch mit dem zugänglichen Namen ist.
- Die `aria-braillelabel`-Werte an die Sprache des Dokuments angepasst sind.
- Dem Benutzer mitgeteilt wird, dass dieses Attribut verfügbar ist, besonders wenn der Inhalt Unicode-Braille-Muster enthält, sodass der Benutzer die Einstellungen zur Anwendung eigener Brailleschrift-Übersetzungen setzen kann.

> [!NOTE]
> Assistive Technologien mit Brailleunterstützung können die zugänglichen Namen in Braille umwandeln.
> Verwenden Sie daher `aria-braillelabel` nur, wenn der zugängliche Name nicht die gewünschte Benutzererfahrung bietet.

Allein die Verwendung des zugänglichen Namens, z.B. aus dem Inhalt oder über `aria-label`, bietet fast immer die bessere Benutzererfahrung, daher verwenden Sie aria-braillelabel nicht, um aria-label zu duplizieren. Verwenden Sie `aria-braillelabel` nur, wenn der zugängliche Name keine angemessene Brailleschrift-Repräsentation liefern kann.

```html
<button aria-braillelabel="***">
  <img alt="3 out of 5 stars" src="three_stars.png" />
</button>
```

Eine Brailleanzeige kann "btn \*\*\*" in Braille anzeigen, anstatt die ausführlichere "btn gra 3 out of 5 stars".

## Werte

- `<string>`
  - : Der Wert ist eine Zeichenfolge, ein unbeschränkter Werttyp, der in Braille umgewandelt werden soll.

## Zugehörige Rollen

Verwendet in **ALLEN** Rollen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`Element.ariaBrailleLabel`](/de/docs/Web/API/Element/ariaBrailleLabel)
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
- [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-brailleroledescription)
