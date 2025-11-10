---
title: "ARIA: aria-braillelabel Attribut"
short-title: aria-braillelabel
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Das globale `aria-braillelabel` Attribut definiert einen Zeichenfolgenwert, der das aktuelle Element kennzeichnet und in Braille umgewandelt werden soll.

## Beschreibung

Das globale `aria-braillelabel` Attribut ist dem globalen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) ähnlich, da es einen Zeichenfolgenwert definiert, der das aktuelle Element kennzeichnet. Während `aria-label` vom Screenreader vorgelesen wird, werden die Inhalte des `aria-braillelabel` Attributs in Braille umgewandelt und bieten dem Nutzer einen erkennbaren Namen des Objekts in Braille.

Der Zweck des `aria-braillelabel` Attributs ist es, zu überschreiben, wie unterstützende Technologien den zugänglichen Namen eines Elements in Braille lokalisieren und ausdrücken. Es sollte nur verwendet werden, wenn ohne dieses Attribut der zugängliche Name nicht das gewünschte Nutzererlebnis wäre, wenn er in Braille umgewandelt wird.

Beim Verwenden von `aria-braillelabel` sollten Sie sicherstellen, dass:

- Das Element, auf das `aria-braillelabel` angewendet wird, einen gültigen zugänglichen Namen hat.
- Der Wert von `aria-braillelabel` tatsächlichen Inhalt hat und nicht leer ist oder nur Leerzeichen in Unicode oder Unicode-Braille enthält.
- Der Wert NICHT mit dem zugänglichen Namen identisch ist.
- Die `aria-braillelabel` Werte entsprechend der Dokumentsprache lokalisiert sind.
- Kommunizieren Sie mit dem Nutzer, dass dieses Attribut verfügbar ist, besonders wenn der Inhalt Unicode-Braille-Muster enthält, damit der Nutzer weiß, dass die Einstellungen auf benutzerspezifische Braille-Übersetzungen angewendet werden sollen.

> [!NOTE]
> Unterstützende Technologien mit Braille-Unterstützung können die zugänglichen Namen in Braille umwandeln.
> Verwenden Sie daher `aria-braillelabel` nur, wenn der zugängliche Name nicht das gewünschte Nutzererlebnis bietet.

Nur den zugänglichen Namen zu verwenden, z.B. aus dem Inhalt oder über `aria-label`, ist fast immer das bessere Nutzererlebnis, also verwenden Sie `aria-braillelabel` nicht, um `aria-label` zu replizieren. Verwenden Sie `aria-braillelabel` nur, wenn der zugängliche Name keine angemessene Braille-Darstellung bieten kann.

```html
<button aria-braillelabel="***">
  <img alt="3 out of 5 stars" src="three_stars.png" />
</button>
```

Eine Braille-Anzeige könnte "btn \*\*\*" in Braille anzeigen, anstatt das ausführlichere "btn gra 3 von 5 Sterne".

## Werte

- `<string>`
  - : Der Wert ist eine Zeichenfolge, ein unbeschränkter Werttyp, der in Braille umgewandelt werden soll.

## Zugehörige Rollen

Wird in **ALLEN** Rollen verwendet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`Element.ariaBrailleLabel`](/de/docs/Web/API/Element/ariaBrailleLabel)
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
- [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription)
