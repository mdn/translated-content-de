---
title: "@color-profile"
slug: Web/CSS/@color-profile
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`@color-profile`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) definiert und benennt ein Farbprofil, das später in der {{cssxref("color_value/color", "color()")}}-Funktion verwendet werden kann, um eine Farbe anzugeben.

## Syntax

```css
@color-profile --swop5c {
  src: url("https://example.org/SWOP2006_Coated5v2.icc");
}
```

### Deskriptoren

- `src`
  - : Gibt die URL an, von der die Farbinformationen des Profils abgerufen werden sollen.
- `rendering-intent`

  - : Wenn das Farbprofil mehr als eine Rendering-Absicht enthält, ermöglicht dieser Deskriptor die Auswahl einer, die verwendet werden soll, um zu definieren, wie die Farbe auf kleinere {{Glossary("gamut", "Gamut")}}s abgebildet werden soll, als dieses Profil definiert ist.

    Wenn verwendet, muss eines der folgenden Schlüsselwörter sein:

    - `relative-colorimetric`
      - : Media-relativ kolorimetrisch erfordert, dass Quellfarben, die innerhalb des Zielmedium-{{Glossary("gamut", "Gamut")}} liegen, relativ zu den jeweiligen Medienweißpunkten unverändert bleiben. Quellfarben, die außerhalb des Zielmedium-Gamuts liegen, werden mit verschiedenen Methoden auf Farben auf der Gamut-Grenze abgebildet.
    - `absolute-colorimetric`
      - : ICC-absolute kolorimetrisch erfordert, dass Quellfarben, die innerhalb des Zielmedium-{{Glossary("gamut", "Gamut")}} liegen, relativ zum angenommenen Weiß (einem perfekt reflektierenden Diffusor) unverändert bleiben. Quellfarben, die außerhalb des Zielmedium-Gamuts liegen, werden mit verschiedenen Methoden auf Farben auf der Gamut-Grenze abgebildet.
    - `perceptual`
      - : Diese Methode wird oft für Bilder bevorzugt, insbesondere wenn es erhebliche Unterschiede zwischen Quelle und Ziel gibt (wie ein auf einem Bildschirm angezeigtes Bild, das auf einem Reflexionsdruck reproduziert wird). Es nimmt die Farben des Quellbildes und optimiert das Erscheinungsbild für das Zielmedium neu mit proprietären Methoden.
    - `saturation`
      - : Diese Option wurde geschaffen, um die relative Sättigung (Chroma) des Originals zu bewahren und vollfarbige Farben rein zu halten. Allerdings erlebte sie Interoperabilitätsprobleme wie die perzeptuelle Absicht.

## Formale Syntax

{{csssyntax}}

## Beispiele

Dieses Beispiel stammt aus der Spezifikation und demonstriert den Einsatz von Offsetdruck nach ISO 12647-2:2004 unter Verwendung der CGATS/SWOP TR005 2007-Charakterisierungsdaten auf Papier der Klasse 5 mit einer Tintenbegrenzung von 300% Total Area Coverage und einer mittleren Grauanteilsergänzung (GCR).

Der `src`-Deskriptor gibt die URL an, von der die Farbinformationen des Profils abgerufen werden sollen.

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
