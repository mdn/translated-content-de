---
title: <system-color>
slug: Web/CSS/system-color
l10n:
  sourceCommit: 8d4fb1e2934111a13989d2796152dc601468e7b5
---

{{CSSRef}}

Der **`<system-color>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) spiegelt normalerweise die Standardfarbwahl wider, die für die verschiedenen Teile einer Webseite verwendet wird.

Allerdings können Benutzeragenten ein Barrierefreiheitsmerkmal namens _erzwungener Farbmodus_ bereitstellen, in dem Farben auf eine vom Benutzer und Benutzeragenten definierte Palette beschränkt werden, wodurch die vom Autor ausgewählte Farbwahl in bestimmten Eigenschaften überschrieben wird. Im erzwungenen Farbmodus gibt `<system-color>` die ausgewählten Farben an, sodass der Rest der Seite mit ihnen integriert werden kann. Ein Beispiel für den erzwungenen Farbmodus ist der [Modus mit hohem Kontrast in Windows](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/).

Im erzwungenen Farbmodus sollten Autoren Farben aus dem `<system-color>`-Typ für alle Eigenschaften verwenden, die _nicht_ zu der Menge von Eigenschaften gehören, deren Farben überschrieben werden. Dies stellt sicher, dass die Seite konsistent die gleiche Farbpalette über alle Eigenschaften hinweg verwendet.

Autoren können den erzwungenen Farbmodus mithilfe der [`forced-colors`](/de/docs/Web/CSS/@media/forced-colors) Medienfunktion erkennen.

Ein `<system-color>`-Wert kann überall dort verwendet werden, wo ein [`<color>`](/de/docs/Web/CSS/color_value) verwendet werden kann.

## Syntax

Beachten Sie, dass diese Schlüsselwörter _nicht_ zwischen Groß- und Kleinschreibung unterscheiden, sie werden hier jedoch zur besseren Lesbarkeit in gemischter Schreibweise aufgeführt.

- `AccentColor`
  - : Hintergrund von akzentuierten Benutzeroberflächenelementen
- `AccentColorText`
  - : Text von akzentuierten Benutzeroberflächenelementen
- `ActiveText`
  - : Text von aktiven Links
- `ButtonBorder`
  - : Basisrahmenfarbe von Bedienelementen
- `ButtonFace`
  - : Hintergrundfarbe von Bedienelementen
- `ButtonText`
  - : Textfarbe von Bedienelementen
- `Canvas`
  - : Hintergrund von Anwendungsinhalten oder Dokumenten
- `CanvasText`
  - : Textfarbe in Anwendungsinhalten oder Dokumenten
- `Field`
  - : Hintergrund von Eingabefeldern
- `FieldText`
  - : Text in Eingabefeldern
- `GrayText`
  - : Textfarbe für deaktivierte Elemente (z.B. ein deaktiviertes Steuerelement)
- `Highlight`
  - : Hintergrund von ausgewählten Elementen
- `HighlightText`
  - : Textfarbe von ausgewählten Elementen
- `LinkText`
  - : Text von nicht-aktiven, nicht-besuchten Links
- `Mark`
  - : Hintergrund von Text, der speziell markiert wurde (zum Beispiel durch das HTML-`mark`-Element)
- `MarkText`
  - : Text, der speziell markiert wurde (zum Beispiel durch das HTML-`mark`-Element)
- `SelectedItem`
  - : Hintergrund von ausgewählten Elementen, zum Beispiel ein ausgewähltes Kontrollkästchen
- `SelectedItemText`
  - : Text von ausgewählten Elementen
- `VisitedText`
  - : Text von besuchten Links

### Veraltete Systemfarb-Schlüsselwörter

Die folgenden Schlüsselwörter wurden in früheren Versionen des CSS Color Modules definiert. Sie sind jetzt für die Verwendung auf öffentlichen Webseiten veraltet.

- `ActiveBorder`
  - : Aktiver Fensterrahmen.
- `ActiveCaption`
  - : Aktive Fensterbeschriftung. Sollte mit `CaptionText` als Vordergrundfarbe verwendet werden.
- `AppWorkspace`
  - : Hintergrundfarbe der Mehrfachdokument-Oberfläche.
- `Background`
  - : Desktop-Hintergrund.
- `ButtonHighlight`
  - : Die Farbe des dem Licht zugewandten Randes für 3-D-Elemente, die aufgrund dieser umgebenden Grenze 3-D erscheinen.
- `ButtonShadow`
  - : Die Farbe des vom Licht abgewandten Randes für 3-D-Elemente, die aufgrund dieser umgebenden Grenze 3-D erscheinen.
- `CaptionText`
  - : Text in Beschriftungen, Größenfeldern und Bildlaufpfeilfeldern. Sollte mit der `ActiveCaption`-Hintergrundfarbe verwendet werden.
- `InactiveBorder`
  - : Inaktiver Fensterrahmen.
- `InactiveCaption`
  - : Inaktive Fensterbeschriftung. Sollte mit der `InactiveCaptionText`-Vordergrundfarbe verwendet werden.
- `InactiveCaptionText`
  - : Farbe des Textes in einer inaktiven Beschriftung. Sollte mit der `InactiveCaption`-Hintergrundfarbe verwendet werden.
- `InfoBackground`
  - : Hintergrundfarbe für Tooltip-Steuerelemente. Sollte mit der `InfoText`-Vordergrundfarbe verwendet werden.
- `InfoText`
  - : Textfarbe für Tooltip-Steuerelemente. Sollte mit der `InfoBackground`-Hintergrundfarbe verwendet werden.
- `Menu`
  - : Menü-Hintergrund. Sollte mit der `MenuText` oder `-moz-MenuBarText`-Vordergrundfarbe verwendet werden.
- `MenuText`
  - : Text in Menüs. Sollte mit der `Menu`-Hintergrundfarbe verwendet werden.
- `Scrollbar`
  - : Hintergrundfarbe von Bildlaufleisten.
- `ThreeDDarkShadow`
  - : Die Farbe des dunkleren (im Allgemeinen äußeren) der beiden Ränder, die vom Licht weg zeigen, für 3-D-Elemente, die aufgrund von zwei konzentrischen Schichten der umgebenden Grenze 3-D erscheinen.
- `ThreeDFace`
  - : Die Flächenhintergrundfarbe für 3-D-Elemente, die aufgrund von zwei konzentrischen Schichten der umgebenden Grenze 3-D erscheinen. Sollte mit der `ButtonText`-Vordergrundfarbe verwendet werden.
- `ThreeDHighlight`
  - : Die Farbe des helleren (im Allgemeinen äußeren) der beiden Ränder, die zum Licht zeigen, für 3-D-Elemente, die aufgrund von zwei konzentrischen Schichten der umgebenden Grenze 3-D erscheinen.
- `ThreeDLightShadow`
  - : Die Farbe des dunkleren (im Allgemeinen inneren) der beiden Ränder, die zum Licht zeigen, für 3-D-Elemente, die aufgrund von zwei konzentrischen Schichten der umgebenden Grenze 3-D erscheinen.
- `ThreeDShadow`
  - : Die Farbe des helleren (im Allgemeinen inneren) der beiden Ränder, die vom Licht weg zeigen, für 3-D-Elemente, die aufgrund von zwei konzentrischen Schichten der umgebenden Grenze 3-D erscheinen.
- `Window`
  - : Fensterhintergrund. Sollte mit der `WindowText`-Vordergrundfarbe verwendet werden.
- `WindowFrame`
  - : Fensterrahmen.
- `WindowText`
  - : Text in Fenstern. Sollte mit der `Window`-Hintergrundfarbe verwendet werden.

## Beispiele

### Verwendung von Systemfarben

In diesem Beispiel haben wir eine Schaltfläche, die normalerweise ihren Kontrast durch die {{cssxref("box-shadow")}}-Eigenschaft erhält. Im erzwungenen Farbmodus wird `box-shadow` auf `none` erzwungen, sodass das Beispiel die `forced-colors`-Medienfunktion verwendet, um sicherzustellen, dass es einen Rahmen der entsprechenden Farbe gibt (in diesem Fall `ButtonBorder`).

#### HTML

```html
<button class="button">Press me!</button>
```

#### CSS

```css
.button {
  border: 0;
  padding: 10px;
  box-shadow:
    -2px -2px 5px gray,
    2px 2px 5px gray;
}

@media (forced-colors: active) {
  .button {
    /* Use a border instead, since box-shadow
    is forced to 'none' in forced-colors mode */
    border: 2px ButtonBorder solid;
  }
}
```

#### Ergebnis

{{EmbedLiveSample("Using system colors")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`<color>`](/de/docs/Web/CSS/color_value): Der Datentyp, zu dem diese Schlüsselwörter gehören
