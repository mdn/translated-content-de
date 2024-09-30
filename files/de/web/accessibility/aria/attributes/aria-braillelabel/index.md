---
title: aria-braillelabel
slug: Web/Accessibility/ARIA/Attributes/aria-braillelabel
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die globale `aria-braillelabel`-Eigenschaft definiert einen Zeichenfolgenwert, der das aktuelle Element beschriftet und in Braille umgewandelt werden soll.

## Beschreibung

Das globale `aria-braillelabel`-Attribut ähnelt dem globalen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label), da es einen Zeichenfolgenwert definiert, der das aktuelle Element beschriftet. Während `aria-label` vom Screenreader gelesen wird, werden die Inhalte des `aria-braillelabel`-Attributs in Braille umgewandelt; dem Benutzer wird dadurch ein erkennbarer Name des Objekts in Braille bereitgestellt.

Zweck der `aria-braillelabel`-Eigenschaft ist es, zu überschreiben, wie assistive Technologien den zugänglichen Namen eines Elements in Braille lokalisieren und ausdrücken. Sie sollte nur verwendet werden, wenn ohne dieses Attribut der zugängliche Name nicht das gewünschte Benutzererlebnis in Braille wäre.

Bei der Verwendung von `aria-braillelabel` ist sicherzustellen, dass:

- Das Element, auf das `aria-braillelabel` angewendet wird, einen gültigen zugänglichen Namen hat.
- Der Wert von `aria-braillelabel` tatsächlichen Inhalt hat und nicht leer oder nur Leerzeichen in Unicode oder Unicode-Braille ist.
- Der Wert NICHT derselbe ist wie der zugängliche Name.
- Die `aria-braillelabel`-Werte sind lokalisiert, um mit der Dokumentensprache übereinzustimmen.
- Kommunizieren Sie dem Benutzer, dass dieses Attribut verfügbar ist, insbesondere wenn der Inhalt Unicode-Braille-Muster enthält, damit der Benutzer weiß, dass er die Einstellungen so anpassen muss, dass benutzerspezifische Braille-Übersetzungen verwendet werden.

> [!NOTE]
> Assistive Technologien mit Braille-Unterstützung können die zugänglichen Namen in Braille umwandeln.
> Deshalb sollte `aria-braillelabel` nur verwendet werden, wenn der zugängliche Name nicht das gewünschte Benutzererlebnis bietet.

Nur den zugänglichen Namen zu verwenden, z. B. aus dem Inhalt oder über `aria-label`, ist fast immer das bessere Benutzererlebnis. Verwenden Sie `aria-braillelabel` nicht, um `aria-label` zu replizieren. Nutzen Sie `aria-braillelabel` nur, wenn der zugängliche Name keine angemessene Braille-Darstellung bieten kann.

```html
<button aria-braillelabel="***">
  <img alt="3 out of 5 stars" src="three_stars.png" />
</button>
```

Ein Braille-Display könnte "btn \*\*\*" in Braille anzeigen, anstatt das ausführlichere "btn gra 3 out of 5 stars".

## Werte

- `<string>`
  - : Der Wert ist eine Zeichenfolge, ein ungebundener Werttyp, der in Braille umgewandelt werden soll.

## Zugehörige Rollen

Verwendet in **ALLEN** Rollen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`Element.ariaBrailleLabel`](/de/docs/Web/API/Element/ariaBrailleLabel)
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
- [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-brailleroledescription)
