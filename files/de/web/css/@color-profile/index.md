---
title: "@color-profile"
slug: Web/CSS/@color-profile
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

Die **`@color-profile`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) definiert und benennt ein Farbprofil, das später in der {{cssxref("color_value/color", "color()")}}-Funktion verwendet werden kann, um eine Farbe zu spezifizieren.

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

  - : Wenn das Farbprofil mehr als eine Rendering-Absicht enthält, ermöglicht dieser Deskriptor die Auswahl einer, die verwendet werden soll, um zu definieren, wie die Farbe auf kleinere {{Glossary("gamut", "Farbräume")}} als den im Profil definierten abgebildet wird.

    Wenn verwendet, muss ein Schlüsselwort aus den folgenden gewählt werden:

    - `relative-colorimetric`
      - : Medien-relativ kolorimetrisch ist erforderlich, um Quellfarben, die innerhalb des Zielfarbmedien-{{Glossary("gamut", "Farbraums")}} liegen, im Verhältnis zu den jeweiligen Medienweißpunkten unverändert zu lassen. Quellfarben, die außerhalb des Zielfarbmedien-Farbraums liegen, werden mit verschiedenen Methoden zu Farben an der Farbraumgrenze abgebildet.
    - `absolute-colorimetric`
      - : ICC-absolute kolorimetrisch ist erforderlich, um Quellfarben, die innerhalb des Zielfarbmedien-{{Glossary("gamut", "Farbraums")}} liegen, im Verhältnis zum angenommenen Weiß (einem perfekten reflektierenden Diffusor) unverändert zu lassen. Quellfarben außerhalb des Zielfarbmedien-Farbraums werden mit verschiedenen Methoden zu Farben an der Farbraumgrenze abgebildet.
    - `perceptual`
      - : Diese Methode ist oft die bevorzugte Wahl für Bilder, insbesondere wenn es erhebliche Unterschiede zwischen Quelle und Ziel gibt (z. B. ein Bildschirmbild, das auf einem Reflexionsdruck wiedergegeben wird). Sie nimmt die Farben des Quellbildes und optimiert das Erscheinungsbild für das Zielmedium mit proprietären Methoden neu.
    - `saturation`
      - : Diese Option wurde entwickelt, um die relative Sättigung (Chroma) des Originals zu bewahren und reine Vollfarben beizubehalten. Sie hat jedoch interoperabilitätsprobleme wie die Perzeptionsabsicht erfahren.

## Formale Syntax

{{csssyntax}}

## Beispiele

Dieses Beispiel stammt aus der Spezifikation und zeigt die Verwendung des Offsetdrucks nach ISO 12647-2:2004 unter Verwendung der CGATS/SWOP TR005 2007-Charakterisierungsdaten auf Papier der Klasse 5 mit einer Tintenbegrenzung von 300 % Total Area Coverage und mittlerem Graukomponentenersatz (GCR).

Der `src`-Deskriptor gibt die URL an, von der die Informationen zum Farbprofil abgerufen werden sollen.

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

Es gibt keinen Browser, der diese Funktion implementiert.
