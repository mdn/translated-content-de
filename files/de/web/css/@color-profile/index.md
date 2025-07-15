---
title: "@color-profile"
slug: Web/CSS/@color-profile
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`@color-profile`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) definiert und benennt ein Farbprofil, das später in der {{cssxref("color_value/color", "color()")}} Funktion verwendet werden kann, um eine Farbe zu spezifizieren.

## Syntax

```css
@color-profile --swop5c {
  src: url("https://example.org/SWOP2006_Coated5v2.icc");
}
```

### Parameter

- profilname
  - : Entweder ein {{cssxref("&lt;dashed-ident&gt;")}} oder der Bezeichner `device-cmyk`.

### Deskriptoren

- `src`
  - : Gibt die URL an, um die Farbprofilinformationen abzurufen.
- `rendering-intent`
  - : Wenn das Farbprofil mehr als eine Rendering-Absicht enthält, erlaubt dieser Deskriptor, eine als die zu verwendende auszuwählen, um zu definieren, wie die Farbe auf kleinere {{Glossary("gamut", "Gamut")}}s, als dieses Profil definiert ist, abzubilden ist.

    Wenn verwendet, muss es eines der folgenden Schlüsselwörter sein:
    - `relative-colorimetric`
      - : Medienrelativ kolorimetrisch erfordert, dass Quellfarben, die innerhalb des Zielmediums-{{Glossary("gamut", "Gamut")}} liegen, relativ zu den jeweiligen Medienweißpunkten unverändert bleiben. Quellfarben, die außerhalb des Zielmediums Gamut liegen, werden mit verschiedenen Methoden auf Farben an der Gamut-Grenze abgebildet.
    - `absolute-colorimetric`
      - : ICC-absolut kolorimetrisch erfordert, dass Quellfarben, die innerhalb des Zielmediums-{{Glossary("gamut", "Gamut")}} liegen, relativ zum angenommenen Weiß (ein perfekter reflektierender Diffusor) unverändert bleiben. Quellfarben, die außerhalb des Zielmediums Gamut liegen, werden mit verschiedenen Methoden auf Farben an der Gamut-Grenze abgebildet.
    - `perceptual`
      - : Diese Methode ist oft die bevorzugte Wahl für Bilder, insbesondere wenn es erhebliche Unterschiede zwischen Quelle und Ziel gibt (wie bei einem auf dem Bildschirm angezeigten Bild, das auf einem reflektierenden Druck reproduziert wird). Sie nimmt die Farben des Quellbildes und optimiert das Erscheinungsbild mithilfe proprietärer Methoden für das Zielmedium neu.
    - `saturation`
      - : Diese Option wurde erstellt, um die relative Sättigung (Chroma) des Originals zu erhalten und reine Farben unverändert zu lassen. Es trat jedoch auf Interoperabilitätsprobleme wie die Perzeptionsabsicht.

## Formale Syntax

{{csssyntax}}

## Beispiele

Dieses Beispiel stammt aus der Spezifikation und demonstriert die Verwendung des Offsetdrucks nach ISO 12647-2:2004 unter Verwendung der CGATS/SWOP TR005 2007-Charakterisierungsdaten auf Grad 5 Papier mit einem Farbbegrenzungswert von 300% Total Area Coverage und mittelgrauem Komponentenersatz (GCR).

Der `src` Deskriptor spezifiziert die URL, um die Farbprofilinformationen abzurufen.

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
