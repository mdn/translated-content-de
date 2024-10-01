---
title: "@color-profile"
slug: Web/CSS/@color-profile
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{CSSRef}}

Die **`@color-profile`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) definiert und benennt ein Farbprofil, das später in der {{cssxref("color_value/color", "color()")}}-Funktion verwendet werden kann, um eine Farbe anzugeben.

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

  - : Wenn das Farbprofil mehr als eine Rendering-Absicht enthält, ermöglicht dieser Deskriptor, eine auszuwählen, die verwendet werden soll, um zu bestimmen, wie die Farbe auf kleinere {{Glossary("gamut", "Farbumfang")}}se abgebildet werden soll, als dieses Profil definiert ist.

    Wenn verwendet, muss es eines der folgenden Schlüsselwörter sein:

    - `relative-colorimetric`
      - : Medien-relative kolorimetrische Abstimmung erfordert, dass Quellfarben, die innerhalb des Zielfarbumfangs liegen, relativ zu den jeweiligen Mediapunkten unverändert bleiben. Quellfarben, die außerhalb des Zielfarbumfangs liegen, werden mit verschiedenen Methoden auf Farben an der Farbumfangsgrenze abgebildet.
    - `absolute-colorimetric`
      - : ICC-absolut kolorimetrische Abstimmung erfordert, dass Quellfarben, die innerhalb des Zielfarbumfangs liegen, relativ zum angenommenen Weißpunkt (ein perfekter reflektierender Diffusor) unverändert bleiben. Quellfarben, die außerhalb des Zielfarbumfangs liegen, werden mit verschiedenen Methoden auf Farben an der Farbumfangsgrenze abgebildet.
    - `perceptual`
      - : Diese Methode ist oft die bevorzugte Wahl für Bilder, insbesondere wenn es erhebliche Unterschiede zwischen Quelle und Ziel gibt (z. B. ein Bildschirmbild, das als reflektierender Druck wiedergegeben wird). Sie nimmt die Farben des Quellbildes und optimiert das Erscheinungsbild für das Zielmedium mithilfe proprietärer Methoden neu.
    - `saturation`
      - : Diese Option wurde entwickelt, um die relative Sättigung (Chroma) des Originals zu erhalten und Volltonfarben rein zu halten. Allerdings hatte sie wie der bewusste Rendering-Wunsch Interoperabilitätsprobleme.

## Beispiele

Dieses Beispiel stammt aus der Spezifikation und demonstriert die Verwendung von Offsetdruck zu ISO 12647-2:2004 unter Verwendung der CGATS/SWOP TR005 2007 Charakterisierungsdaten auf Grad-5-Papier mit einer Tintenbegrenzung von 300 % Gesamtflächenabdeckung und mittlerem Komponentenersatz für Grau (GCR).

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

## Browser-Kompatibilität

Es gibt keinen Browser, der dieses Feature implementiert.
