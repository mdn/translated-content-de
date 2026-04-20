---
title: "`@color-profile` CSS at-rule"
short-title: "@color-profile"
slug: Web/CSS/Reference/At-rules/@color-profile
l10n:
  sourceCommit: e328268bb418551ab451881845881b5837c9da83
---

Die **`@color-profile`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) definiert und benennt ein Farbprofil, das später in der {{cssxref("color_value/color", "color()")}}-Funktion verwendet werden kann, um eine Farbe anzugeben.

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
  - : Gibt die URL an, von der die Farbprofilinformationen abgerufen werden sollen.
- `rendering-intent`
  - : Wenn das Farbprofil mehr als eine Rendering-Intention enthält, ermöglicht es dieser Deskriptor, eine auszuwählen, die verwendet werden soll, um festzulegen, wie die Farbe auf kleinere {{Glossary("gamut", "Farbräume")}} abgebildet werden soll, als dieses Profil definiert ist.

    Wenn verwendet, muss es eines der folgenden Schlüsselwörter sein:
    - `relative-colorimetric`
      - : Medienrelativ kolorimetrisch soll Quellfarben, die innerhalb des Zielfarbmediums {{Glossary("gamut", "Farbraums")}} fallen, relativ zu den jeweiligen Medienweißpunkten unverändert lassen. Quellfarben, die außerhalb des Zielfarbmedium-Farbraums liegen, werden mit einer Vielzahl verschiedener Methoden auf die Farben an der Farbraumgrenze abgebildet.
    - `absolute-colorimetric`
      - : ICC-absolut kolorimetrisch soll Quellfarben, die innerhalb des Zielfarbmediums {{Glossary("gamut", "Farbraums")}} fallen, relativ zum angenommenen Weiß (ein perfekter reflektierender Diffusor) unverändert lassen. Quellfarben, die außerhalb des Zielfarbmedium-Farbraums liegen, werden mit einer Vielzahl verschiedener Methoden auf die Farben an der Farbraumgrenze abgebildet.
    - `perceptual`
      - : Diese Methode ist oft die bevorzugte Wahl für Bilder, insbesondere wenn es erhebliche Unterschiede zwischen Quelle und Ziel gibt (wie ein Bildschirmbild, das auf einem Reflexionsdruck reproduziert wird). Es nimmt die Farben des Quellbildes und optimiert das Erscheinungsbild für das Zielfarbmedium neu mithilfe proprietärer Methoden.
    - `saturation`
      - : Diese Option wurde entwickelt, um die relative Sättigung (Chroma) des Originals zu bewahren und reine Vollfarben zu erhalten. Es stellte jedoch Interoperabilitätsprobleme ähnlich der wahrgenommenen Intention fest.

## Formale Syntax

{{csssyntax}}

## Beispiele

Dieses Beispiel demonstriert die Verwendung von Offsetdruck nach ISO 12647-2:2004 unter Verwendung der CGATS/SWOP TR005 2007-Charakterisierungsdaten auf Papier der Güteklasse 5 mit einem Farbtintenlimit von 300 % Total Area Coverage und mittlerem Grauanteil-Ersatz (GCR). Dieses Beispiel stammt aus der Spezifikation.

Der `src`-Deskriptor gibt die URL an, von der die Farbprofilinformationen abgerufen werden sollen.

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

Derzeit unterstützen keine Browser dieses Feature.

## Siehe auch

- [CSS-Farben](/de/docs/Web/CSS/Guides/Colors) Modul
