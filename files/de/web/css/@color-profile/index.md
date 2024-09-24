---
title: "@color-profile"
slug: Web/CSS/@color-profile
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{CSSRef}}

Die **`@color-profile`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) definiert und benennt ein Farbprofil, das später in der {{cssxref("color_value/color", "color()")}}-Funktion verwendet werden kann, um eine Farbe zu spezifizieren.

## Syntax

```css
@color-profile --swop5c {
  src: url("https://example.org/SWOP2006_Coated5v2.icc");
}
```

### Deskriptoren

- `src`
  - : Gibt die URL an, von der die Farbprofilinformationen abgerufen werden sollen.
- `rendering-intent`

  - : Wenn das Farbprofil mehr als eine Rendering-Intention enthält, erlaubt dieser Deskriptor, eine auszuwählen, um festzulegen, wie Farben auf kleinere {{glossary("gamut", "Farbräume")}} abgebildet werden sollen, als dieses Profil definiert ist.

    Wenn verwendet, muss es eines der folgenden Schlüsselwörter sein:

    - `relative-colorimetric`
      - : Medienbezogene kolorimetrische Abbildung ist erforderlich, um Quellfarben, die innerhalb des Zielfarbraums {{glossary("gamut", "Farbumfangs")}} liegen, unverändert relativ zu den jeweiligen Medienweißpunkten zu belassen. Quellfarben, die außerhalb des Zielfarbraums liegen, werden mit verschiedenen Methoden auf Farben an der Farbraumgrenze abgebildet.
    - `absolute-colorimetric`
      - : ICC-absolute kolorimetrische Abbildung ist erforderlich, um Quellfarben, die innerhalb des Zielfarbraums {{glossary("gamut", "Farbumfangs")}} liegen, unverändert relativ zum angenommenen Weiß (einem perfekten Reflektionsdiffusor) zu belassen. Quellfarben, die außerhalb des Zielfarbraums liegen, werden mit verschiedenen Methoden auf Farben an der Farbraumgrenze abgebildet.
    - `perceptual`
      - : Diese Methode wird häufig für Bilder bevorzugt, insbesondere wenn es erhebliche Unterschiede zwischen Quelle und Ziel gibt (zum Beispiel ein Bildschirmbild, das auf einem reflektierenden Druck reproduziert wird). Sie nimmt die Farben des Quellbildes und optimiert das Erscheinungsbild für das Zielmedium unter Verwendung proprietärer Methoden neu.
    - `saturation`
      - : Diese Option wurde entwickelt, um die relative Sättigung (Chroma) des Originals zu erhalten und reine Farben rein zu halten. Sie erlebte jedoch Interoperabilitätsprobleme ähnlich wie das wahrnehmungsbezogene Intent.

## Beispiele

Dieses Beispiel stammt aus der Spezifikation und demonstriert die Verwendung des Offsetdrucks nach ISO 12647-2:2004 unter Verwendung der CGATS/SWOP TR005 2007 Charakterisierungsdaten auf Papier der Sorte 5 mit einer Tintenbegrenzung von 300% Gesamtabdeckungsfläche und mittlerem Grau-Komponentenersatz (GCR).

Der `src`-Deskriptor gibt die URL an, von der die Farbprofilinformationen abgerufen werden sollen.

```css
@color-profile --swop5c {
  src: url("https://example.org/SWOP2006_Coated5v2.icc");
}
.header {
  background-color: color(--swop5c 0% 70% 20% 0%);
}
```

## Formale Syntax

{{csssyntax}}

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

Es gibt keinen Browser, der diese Funktion implementiert.
