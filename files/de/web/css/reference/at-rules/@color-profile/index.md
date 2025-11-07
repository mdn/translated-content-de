---
title: "@color-profile"
slug: Web/CSS/Reference/At-rules/@color-profile
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
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

  - : Wenn das Farbprofil mehr als eine Rendering-Intention enthält, ermöglicht dieser Deskriptor, eine als die zu verwendende auszuwählen, um zu definieren, wie die Farbe auf kleinere {{Glossary("gamut", "Gamut")}}s als dieses Profil abgebildet werden soll.

    Wenn verwendet, muss es eines der folgenden Schlüsselwörter sein:

    - `relative-colorimetric`
      - : Medien-relative kolorimetrische Anpassung muss Quellfarben, die innerhalb des Zielmedium-Gamuts liegen, relativ zu den jeweiligen Medienweißpunkten unverändert lassen. Quellfarben, die außerhalb des Zielmedium-Gamuts liegen, werden mithilfe verschiedener Methoden auf Farben an der Gamut-Grenze abgebildet.
    - `absolute-colorimetric`
      - : ICC-absolute kolorimetrische Anpassung muss Quellfarben, die innerhalb des Zielmedium-Gamuts liegen, relativ zum angenommenen Weiß (einem perfekten reflektierenden Diffusor) unverändert lassen. Quellfarben, die außerhalb des Zielmedium-Gamuts liegen, werden mithilfe verschiedener Methoden auf Farben an der Gamut-Grenze abgebildet.
    - `perceptual`
      - : Diese Methode wird häufig für Bilder bevorzugt, insbesondere wenn es erhebliche Unterschiede zwischen Quelle und Ziel gibt (z. B. ein Bildschirmbild, das auf einem Reflexionsdruck wiedergegeben wird). Sie nimmt die Farben des Quellbildes und optimiert das Erscheinungsbild für das Zielmedium neu unter Verwendung proprietärer Methoden.
    - `saturation`
      - : Diese Option wurde geschaffen, um die relative Sättigung (Chroma) des Originals zu bewahren und volle Farben rein zu halten. Allerdings trat sie ähnlich wie der wahrnehmungsbezogene Intent auf Interoperabilitätsprobleme.

## Formale Syntax

{{csssyntax}}

## Beispiele

Dieses Beispiel zeigt den Offsetdruck nach ISO 12647-2:2004 unter Verwendung der CGATS/SWOP TR005 2007-Charakterisierungsdaten auf Papier der Qualität 5 mit einem Tintenlimit von 300 % Total Area Coverage und mittlerem Gray Component Replacement (GCR). Dieses Beispiel stammt aus der Spezifikation.

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
