---
title: "@color-profile"
slug: Web/CSS/@color-profile
l10n:
  sourceCommit: 466ca1db767535c1aa9984b4e6c0db41b3a53475
---

{{CSSRef}}

Die **`@color-profile`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) definiert und benennt ein Farbprofil, das später in der {{cssxref("color_value/color", "color()")}}-Funktion verwendet werden kann, um eine Farbe anzugeben.

## Syntax

```css
@color-profile --swop5c {
  src: url("https://example.org/SWOP2006_Coated5v2.icc");
}
```

### Parameter

- Profilname
  - : Entweder ein {{cssxref("&lt;dashed-ident&gt;")}} oder der Bezeichner `device-cmyk`.

### Deskriptoren

- `src`
  - : Gibt die URL an, von der die Farbprofilinformationen abgerufen werden.
- `rendering-intent`
  - : Falls das Farbprofil mehr als eine Rendering-Intention enthält, ermöglicht dieser Deskriptor die Auswahl einer bestimmten, die verwendet wird, um zu definieren, wie die Farbe auf kleinere {{Glossary("gamut", "Farbräume")}} abgebildet wird als dieses Profil sie definiert.

    Wenn verwendet, muss es eines der folgenden Schlüsselwörter sein:
    - `relative-colorimetric`
      - : Medienrelativer kolorimetrischer Abgleich soll Quellfarben, die innerhalb des Zielmedium-{{Glossary("gamut", "Farbraums")}} liegen, relativ zu den jeweiligen Medienweißpunkten unverändert lassen. Quellfarben, die außerhalb des Zielmedium-Farbraums liegen, werden mit verschiedenen Methoden auf Farben an der Farbraumgrenze abgebildet.
    - `absolute-colorimetric`
      - : ICC-absolute kolorimetrische Anpassung soll Quellfarben, die innerhalb des Zielmedium-{{Glossary("gamut", "Farbraums")}} liegen, unverändert relativ zum angenommenen Weiß lassen (ein perfekter reflektierender Diffusor). Quellfarben, die außerhalb des Zielmedium-Farbraums liegen, werden mit verschiedenen Methoden auf Farben an der Farbraumgrenze abgebildet.
    - `perceptual`
      - : Diese Methode wird häufig für Bilder bevorzugt, insbesondere wenn es erhebliche Unterschiede zwischen Quelle und Ziel gibt (z.B. ein auf einem Bildschirm dargestelltes Bild auf einem Druckmedium wiedergegeben). Sie nimmt die Farben des Quellbildes und optimiert das Erscheinungsbild für das Zielmedium unter Verwendung proprietärer Methoden neu.
    - `saturation`
      - : Diese Option wurde erstellt, um die relative Sättigung (Chroma) des Originals zu erhalten und Volltonfarben rein zu halten. Sie hat jedoch ähnliche Interoperabilitätsprobleme wie die perzeptuelle Intention erfahren.

## Formale Syntax

{{csssyntax}}

## Beispiele

Dieses Beispiel stammt aus der Spezifikation und demonstriert den Einsatz des Offsetdrucks nach ISO 12647-2:2004 mit den Kennungsdaten CGATS/SWOP TR005 2007 auf Grad 5 Papier mit einem Tintenlimit von 300% Total Area Coverage und mittlerem Graukomponentenersatz (GCR).

Der `src`-Deskriptor gibt die URL an, von der die Farbprofilinformationen abgerufen werden.

```css
@color-profile --swop5c {
  src: url("https://example.org/SWOP2006_Coated5v2.icc");
}
.header {
  background-color: color(--swop5c 0% 70% 20% 0%);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Es gibt keinen Browser, der dieses Feature implementiert.
