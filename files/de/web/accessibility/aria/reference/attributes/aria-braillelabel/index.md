---
title: aria-braillelabel
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die globale Eigenschaft `aria-braillelabel` definiert einen Zeichenfolgewert, der das aktuelle Element kennzeichnet und in Braille konvertiert werden soll.

## Beschreibung

Das globale Attribut `aria-braillelabel` ähnelt dem globalen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), da es einen Zeichenfolgewert definiert, der das aktuelle Element kennzeichnet. Während `aria-label` vom Bildschirmleser vorgelesen wird, wird der Inhalt des Attributs `aria-braillelabel` in Braille umgewandelt, sodass der Benutzer einen erkennbaren Namen des Objekts in Braille erhält.

Der Zweck der Eigenschaft `aria-braillelabel` besteht darin, zu überschreiben, wie unterstützende Technologien den zugänglichen Namen eines Elements in Braille lokalisieren und ausdrücken. Sie sollte nur verwendet werden, wenn ohne dieses Attribut der zugängliche Name nicht die gewünschte Benutzererfahrung in Braille darstellen würde.

Beim Verwenden von `aria-braillelabel` stellen Sie sicher, dass:

- Das Element, auf das `aria-braillelabel` angewendet wird, einen gültigen zugänglichen Namen hat.
- Der Wert von `aria-braillelabel` tatsächlichen Inhalt hat und nicht leer oder nur Leerzeichen in Unicode oder Unicode-Braille ist.
- Der Wert NICHT dem zugänglichen Namen entspricht.
- Die `aria-braillelabel`-Werte so lokalisiert sind, dass sie mit der Sprache des Dokuments übereinstimmen.
- Dem Benutzer mitgeteilt wird, dass dieses Attribut verfügbar ist, insbesondere wenn der Inhalt Unicode-Braille-Muster enthält, sodass der Benutzer weiß, dass er die Einstellungen darauf ausrichten muss, benutzerspezifische Braille-Übersetzungen anzuwenden.

> [!NOTE]
> Unterstützende Technologien mit Braille-Unterstützung können die zugänglichen Namen in Braille umwandeln.
> Verwenden Sie daher `aria-braillelabel` nur, wenn der zugängliche Name nicht die gewünschte Benutzererfahrung darstellt.

Die Verwendung nur des zugänglichen Namens, z.B. aus dem Inhalt oder über `aria-label`, bietet fast immer die bessere Benutzererfahrung. Verwenden Sie `aria-braillelabel` nicht, um `aria-label` zu replizieren. Verwenden Sie `aria-braillelabel` nur, wenn der zugängliche Name keine angemessene Braille-Darstellung bieten kann.

```html
<button aria-braillelabel="***">
  <img alt="3 out of 5 stars" src="three_stars.png" />
</button>
```

Eine Braille-Anzeige könnte in Braille "btn \*\*\*" anzeigen, anstatt das ausführlichere "btn gra 3 von 5 Sterne".

## Werte

- `<string>`
  - : Der Wert ist ein Zeichenfolge-Wert, ein unbeschränktes Wertetyp, der in Braille konvertiert werden soll.

## Zugehörige Rollen

Verwendet in **ALLEN** Rollen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`Element.ariaBrailleLabel`](/de/docs/Web/API/Element/ariaBrailleLabel)
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
- [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription)
