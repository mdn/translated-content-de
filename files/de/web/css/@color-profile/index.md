---
title: "@color-profile"
slug: Web/CSS/@color-profile
l10n:
  sourceCommit: bc761c19c07b875eb889d4aad87b18d8443da339
---

Die **`@color-profile`** [CSS](/de/docs/Web/CSS) [at-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) definiert und benennt ein Farbprofil, das später in der {{cssxref("color_value/color", "color()")}}-Funktion verwendet werden kann, um eine Farbe festzulegen.

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
  - : Gibt die URL an, von der die Farbprofilinformationen abgerufen werden können.
- `rendering-intent`
  - : Wenn das Farbprofil mehr als eine Rendering-Absicht enthält, erlaubt dieser Deskriptor die Auswahl einer, die verwendet werden soll, um zu definieren, wie die Farbe auf kleinere {{Glossary("gamut", "Gamuts")}} als dieses Profil definiert ist, abgebildet werden soll.

    Wenn verwendet, muss es eines der folgenden Schlüsselwörter sein:
    - `relative-colorimetric`
      - : Medien-relative kolorimetrische Methode erfordert, dass Quellfarben, die innerhalb des Zielmedium-{{Glossary("gamut", "Gamuts")}} liegen, relativ zu den jeweiligen Medienweißpunkten unverändert bleiben. Quellfarben, die außerhalb des Zielmedium-Gamuts sind, werden mit einer Vielzahl unterschiedlicher Methoden zu Farben an der Gamut-Grenze abgebildet.
    - `absolute-colorimetric`
      - : ICC-absolute kolorimetrische Methode erfordert, dass Quellfarben, die innerhalb des Zielmedium-{{Glossary("gamut", "Gamuts")}} liegen, relativ zum angenommenen Weiß (eine perfekte reflektierende Streuscheibe) unverändert bleiben. Quellfarben, die außerhalb des Zielmedium-Gamuts sind, werden mit einer Vielzahl unterschiedlicher Methoden zu Farben an der Gamut-Grenze abgebildet.
    - `perceptual`
      - : Diese Methode ist oft die bevorzugte Wahl für Bilder, insbesondere wenn es erhebliche Unterschiede zwischen Quelle und Ziel gibt (z. B. ein Bild auf dem Bildschirm, das auf einem Reflexionsdruck reproduziert wird). Sie nimmt die Farben des Quellbildes und optimiert das Erscheinungsbild für das Zielmedium mit proprietären Methoden neu.
    - `saturation`
      - : Diese Option wurde erstellt, um die relative Sättigung (Chroma) des Originals zu erhalten und um kräftige Farben rein zu halten. Sie hatte jedoch wie die perzeptuelle Absicht Interoperabilitätsprobleme.

## Formale Syntax

{{csssyntax}}

## Beispiele

Dieses Beispiel demonstriert den Offsetdruck nach ISO 12647-2:2004 unter Verwendung der CGATS/SWOP TR005 2007 Charakterisierungsdaten auf Papier der Klasse 5 mit einer Farbabdeckungsgrenze von 300% Total Area Coverage und mittlerem Grauanteilersatz (GCR). Dieses Beispiel stammt aus der Spezifikation.

Der `src`-Deskriptor gibt die URL an, von der die Farbprofilinformationen abgerufen werden können.

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

- [CSS-Farben](/de/docs/Web/CSS/CSS_colors)-Modul
