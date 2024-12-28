---
title: "@color-profile"
slug: Web/CSS/@color-profile
l10n:
  sourceCommit: c37011659ce69ad4615db4c07e758f9fcf7dcb23
---

{{CSSRef}}

Die **`@color-profile`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) definiert und benennt ein Farbprofil, das später in der {{cssxref("color_value/color", "color()")}}-Funktion verwendet werden kann, um eine Farbe zu spezifizieren.

## Syntax

```css
@color-profile --swop5c {
  src: url("https://example.org/SWOP2006_Coated5v2.icc");
}
```

### Beschreibungen

- `src`
  - : Gibt die URL an, von der die Farbprofilinformationen abgerufen werden sollen.
- `rendering-intent`

  - : Wenn das Farbprofil mehr als eine Rendering-Absicht enthält, ermöglicht dieser Deskriptor die Auswahl einer, die verwendet werden soll, um festzulegen, wie die Farbe auf kleinere {{Glossary("gamut", "Gamut")}}s abgebildet werden soll, als dieses Profil definiert.

    Wenn verwendet, muss es eines der folgenden Schlüsselwörter sein:

    - `relative-colorimetric`
      - : Medienrelativ kolorimetrisch soll Quellfarben, die innerhalb des Zielmediums-{{Glossary("gamut", "Gamut")}} liegen, unverändert relativ zu den jeweiligen weißen Medienpunkten lassen. Quellfarben, die außerhalb des Zielmediums-Gamut liegen, werden mit verschiedenen Methoden auf Farben an der Gamut-Grenze abgebildet.
    - `absolute-colorimetric`
      - : ICC-absolut kolorimetrisch soll Quellfarben, die innerhalb des Zielmediums-{{Glossary("gamut", "Gamut")}} liegen, unverändert relativ zum angewandten Weiß (einem perfekten reflektierenden Diffusor) lassen. Quellfarben, die außerhalb des Zielmediums-Gamut liegen, werden mit verschiedenen Methoden auf Farben an der Gamut-Grenze abgebildet.
    - `perceptual`
      - : Diese Methode ist oft die bevorzugte Wahl für Bilder, insbesondere wenn es erhebliche Unterschiede zwischen Quelle und Ziel gibt (wie ein Bildschirmbild, das auf einem Reflexionsdruck reproduziert wird). Sie nimmt die Farben des Quellbildes und optimiert das Erscheinungsbild für das Zielmedium mit proprietären Methoden neu.
    - `saturation`
      - : Diese Option wurde erstellt, um die relative Sättigung (Chroma) des Originals zu bewahren und solide Farben rein zu halten. Allerdings erlebte sie Interoperabilitätsprobleme wie die wahrnehmungsbasierte Absicht.

## Formale Syntax

{{csssyntax}}

## Beispiele

Dieses Beispiel stammt aus der Spezifikation und demonstriert den Einsatz von Offsetdruck nach ISO 12647-2:2004 mit den CGATS/SWOP TR005 2007-Charakterisierungsdaten auf Papier der Klasse 5 mit einer Tintenbegrenzung von 300% Gesamtflächenabdeckung und mittelgrauer Komponentenersatz (GCR).

Der `src` Deskriptor gibt die URL an, von der die Farbprofilinformationen abgerufen werden sollen.

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
