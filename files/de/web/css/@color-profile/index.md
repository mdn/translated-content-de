---
title: "@color-profile"
slug: Web/CSS/@color-profile
l10n:
  sourceCommit: a4ae225903c2784a3d74b43f311e05f208e42c91
---

{{CSSRef}}

Die **`@color-profile`** [CSS](/de/docs/Web/CSS)-[At-Regel](/de/docs/Web/CSS/At-rule) definiert und benennt ein Farbprofil, das später in der {{cssxref("color_value/color", "color()")}}-Funktion verwendet werden kann, um eine Farbe anzugeben.

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

  - : Wenn das Farbprofil mehr als eine Rendering-Absicht enthält, ermöglicht dieser Deskriptor, eine auszuwählen, die genutzt werden soll, um zu definieren, wie die Farbe auf kleinere [Gamut](/de/docs/Glossary/gamut)s abgebildet werden soll, als dieses Profil definiert ist.

    Wenn verwendet, muss es eines der folgenden Schlüsselwörter sein:

    - `relative-colorimetric`
      - : Medien-relatives kolorimetrisches Rendering ist erforderlich, um Quellfarben, die innerhalb des Zielmedium-[Gamut](/de/docs/Glossary/gamut) liegen, unverändert relativ zu den jeweiligen Medienweißpunkten zu lassen. Quellfarben, die außerhalb des Zielmedium-Gamuts liegen, werden mit einer Vielzahl unterschiedlicher Methoden auf Farben auf der Gamut-Grenze abgebildet.
    - `absolute-colorimetric`
      - : ICC-absolutes kolorimetrisches Rendering ist erforderlich, um Quellfarben, die innerhalb des Zielmedium-[Gamut](/de/docs/Glossary/gamut) liegen, unverändert relativ zum angenommenen Weiß (einem perfekten reflektierenden Diffusor) zu lassen. Quellfarben, die außerhalb des Zielmedium-Gamuts liegen, werden mit einer Vielzahl unterschiedlicher Methoden auf Farben auf der Gamut-Grenze abgebildet.
    - `perceptual`
      - : Diese Methode ist oft die bevorzugte Wahl für Bilder, insbesondere wenn es erhebliche Unterschiede zwischen Quelle und Ziel gibt (z.B. ein Bildschirmbild, das auf einem reflektierenden Druck reproduziert wird). Sie nimmt die Farben des Quellbildes und optimiert das Erscheinungsbild für das Zielmedium mithilfe proprietärer Methoden neu.
    - `saturation`
      - : Diese Option wurde entwickelt, um die relative Sättigung (Chroma) des Originals zu bewahren und um Volltonfarben rein zu halten. Allerdings erlebte sie Interoperabilitätsprobleme ähnlich der perceptual Absicht.

## Beispiele

Dieses Beispiel stammt aus der Spezifikation und demonstriert die Verwendung von Offsetdruck nach ISO 12647-2:2004 mithilfe der CGATS/SWOP TR005 2007 Charakterisierungsdaten auf Papier der Klasse 5 mit einer Farbabdeckung von 300% Gesamtabdeckungsfläche und mittlerem Graukomponentenersatz (GCR).

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
