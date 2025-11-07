---
title: "@color-profile"
slug: Web/CSS/Reference/At-rules/@color-profile
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Die **`@color-profile`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rules) definiert und benennt ein Farbprofil, das später in der {{cssxref("color_value/color", "color()")}}-Funktion verwendet werden kann, um eine Farbe anzugeben.

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
  - : Wenn das Farbprofil mehr als eine Rendering-Absicht enthält, ermöglicht dieser Deskriptor die Auswahl einer, die verwendet werden soll, um zu definieren, wie die Farbe auf kleinere {{Glossary("gamut", "Gamut")}}s abgebildet werden soll, als dieses Profil definiert ist.

    Wenn verwendet, muss es eines der folgenden Schlüsselwörter sein:
    - `relative-colorimetric`
      - : Relative Colorimetrik bezogen auf das Medium muss Quellfarben, die innerhalb des Zielmediums {{Glossary("gamut", "Gamut")}} liegen, relativ zu den jeweiligen Medienweißpunkten unverändert lassen. Quellfarben, die außerhalb des Zielmedium-Gamuts liegen, werden mittels verschiedener Methoden auf Farben an der Gamut-Grenze abgebildet.
    - `absolute-colorimetric`
      - : ICC-absolute Colorimetrik muss Quellfarben, die innerhalb des Zielmediums {{Glossary("gamut", "Gamut")}} liegen, unverändert relativ zur angewandten Weißfarbe (ein perfekter reflektierender Diffusor) lassen. Quellfarben, die außerhalb des Zielmedium-Gamuts liegen, werden mittels verschiedener Methoden auf Farben an der Gamut-Grenze abgebildet.
    - `perceptual`
      - : Diese Methode ist häufig die bevorzugte Wahl für Bilder, besonders wenn es wesentliche Unterschiede zwischen der Quelle und dem Ziel gibt (wie ein Bild auf einem Bildschirm, das auf einem reflektierenden Druck wiedergegeben wird). Sie nimmt die Farben des Quellbildes und optimiert die Darstellung für das Zielmedium mittels proprietärer Methoden neu.
    - `saturation`
      - : Diese Option wurde erstellt, um die relative Sättigung (Chroma) des Originals zu bewahren und Vollfarben rein zu halten. Allerdings traten Interoperabilitätsprobleme ähnlich dem perceptuellen Intent auf.

## Formale Syntax

{{csssyntax}}

## Beispiele

Dieses Beispiel demonstriert den Offsetdruck nach ISO 12647-2:2004 unter Verwendung der CGATS/SWOP TR005 2007 Charakterisierungsdaten auf Papier der Klasse 5 mit einem Tintenlimit von 300% Total Area Coverage und mittlerem Grau-Komponentenersatz (GCR). Dieses Beispiel stammt aus der Spezifikation.

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

Derzeit unterstützen keine Browser diese Funktion.

## Siehe auch

- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
