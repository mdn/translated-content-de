---
title: aria-braillelabel
slug: Web/Accessibility/ARIA/Attributes/aria-braillelabel
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die globale `aria-braillelabel`-Eigenschaft definiert einen Zeichenfolgenwert, der das aktuelle Element bezeichnet und in Braille umgewandelt werden soll.

## Beschreibung

Das globale Attribut `aria-braillelabel` ähnelt dem globalen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label), da es einen Zeichenfolgenwert definiert, der das aktuelle Element bezeichnet. Während `aria-label` vom Bildschirmleser gelesen wird, werden die Inhalte des `aria-braillelabel`-Attributs in Braille umgewandelt, um dem Benutzer einen erkennbaren Namen des Objekts in Braille bereitzustellen.

Der Zweck der `aria-braillelabel`-Eigenschaft besteht darin, die Lokalisierung und Darstellung des zugänglichen Namens eines Elements in Braille durch unterstützende Technologien zu überschreiben. Sie sollte nur verwendet werden, wenn ohne dieses Attribut der zugängliche Name nicht das gewünschte Benutzererlebnis darstellen würde, wenn er in Braille umgewandelt wird.

Bei der Verwendung von `aria-braillelabel` stellen Sie sicher, dass:

- Das Element, auf das `aria-braillelabel` angewendet wird, einen gültigen zugänglichen Namen hat.
- Der Wert von `aria-braillelabel` tatsächlichen Inhalt hat und nicht leer oder nur Leerzeichen in Unicode oder Unicode-Braille enthält.
- Der Wert NICHT mit dem zugänglichen Namen identisch ist.
- Die `aria-braillelabel`-Werte lokalisiert sind und mit der Dokumentensprache übereinstimmen.
- Es den Benutzer darüber informiert wird, dass dieses Attribut verfügbar ist, insbesondere wenn der Inhalt Unicode-Braille-Muster enthält, damit der Benutzer seine Einstellungen auf benutzerspezifische Braille-Übersetzungen anpassen kann.

> [!NOTE]
> Unterstützende Technologien mit Brailleunterstützung können die zugänglichen Namen in Braille umwandeln.
> Daher sollten Sie `aria-braillelabel` nur verwenden, wenn der zugängliche Name nicht das gewünschte Benutzererlebnis darstellt.

Nur den zugänglichen Namen zu verwenden, z. B. aus dem Inhalt oder über `aria-label`, bietet fast immer das bessere Benutzererlebnis. Verwenden Sie `aria-braillelabel` nicht, um `aria-label` zu replizieren. Verwenden Sie `aria-braillelabel` nur, wenn der zugängliche Name keine angemessene Braille-Darstellung bieten kann.

```html
<button aria-braillelabel="***">
  <img alt="3 out of 5 stars" src="three_stars.png" />
</button>
```

Ein Braille-Display könnte "btn \*\*\*" in Braille anzeigen, anstatt der ausführlicheren "btn gra 3 out of 5 stars".

## Werte

- `<string>`
  - : Der Wert ist eine Zeichenfolge, ein uneingeschränkter Werttyp, der in Braille umgewandelt werden soll.

## Zugehörige Rollen

Wird in **ALLEN** Rollen verwendet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{domxref("Element.ariaBrailleLabel")}}
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
- [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-brailleroledescription)
