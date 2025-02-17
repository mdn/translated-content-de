---
title: <system-color>
slug: Web/CSS/system-color
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Der **`<system-color>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) spiegelt normalerweise die Standardfarbwahl wider, die für die verschiedenen Teile einer Webseite verwendet wird.

Allerdings können Benutzeragenten eine Barrierefreiheitsfunktion namens _Zwangsfarbenmodus_ bereitstellen, bei der die Farben auf eine vom Benutzer und Benutzeragenten definierte Palette eingeschränkt werden. Diese überschreibt die Farbauswahl des Autors in bestimmten Eigenschaften. Im Zwangsfarbenmodus gibt `<system-color>` die gewählten Farben an, sodass der Rest der Seite sich daran anpassen kann. Ein Beispiel für den Zwangsfarbenmodus ist der [Hoher-Kontrast-Modus in Windows](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/).

Im Zwangsfarbenmodus sollten Autoren Farben des `<system-color>`-Typs für alle Eigenschaften verwenden, die _nicht_ zu den überschriebenen Eigenschaften gehören. Dies stellt sicher, dass die Seite durchgehend dieselbe Farbpalette in allen Eigenschaften verwendet.

Autoren können den Zwangsfarbenmodus mithilfe der [`forced-colors`](/de/docs/Web/CSS/@media/forced-colors)-Media-Feature erkennen.

Ein `<system-color>`-Wert kann überall verwendet werden, wo ein [`<color>`](/de/docs/Web/CSS/color_value) verwendet werden kann.

## Syntax

Beachten Sie, dass diese Schlüsselwörter _nicht groß-/kleinbuchstabenabhängig_ sind, hier aber zur besseren Lesbarkeit gemischt geschrieben werden.

- `AccentColor`
  - : Hintergrund von akzentuierten Benutzeroberflächen-Steuerelementen.
- `AccentColorText`
  - : Text von akzentuierten Benutzeroberflächen-Steuerelementen.
- `ActiveText`
  - : Text aktiver Links.
- `ButtonBorder`
  - : Standardrahmenfarbe von Steuerelementen.
- `ButtonFace`
  - : Hintergrundfarbe von Steuerelementen.
- `ButtonText`
  - : Textfarbe von Steuerelementen.
- `Canvas`
  - : Hintergrund von Anwendungsinhalten oder Dokumenten.
- `CanvasText`
  - : Textfarbe in Anwendungsinhalten oder Dokumenten.
- `Field`
  - : Hintergrund von Eingabefeldern.
- `FieldText`
  - : Text in Eingabefeldern.
- `GrayText`
  - : Textfarbe für deaktivierte Elemente (zum Beispiel ein deaktiviertes Steuerelement).
- `Highlight`
  - : Hintergrund ausgewählter Elemente.
- `HighlightText`
  - : Textfarbe ausgewählter Elemente.
- `LinkText`
  - : Text nicht aktiver, nicht besuchter Links.
- `Mark`
  - : Hintergrund von speziell markiertem Text (z. B. durch das HTML-Element `mark`).
- `MarkText`
  - : Text, der speziell markiert wurde (z. B. durch das HTML-Element `mark`).
- `SelectedItem`
  - : Hintergrund ausgewählter Elemente, z. B. eines ausgewählten Kontrollkästchens.
- `SelectedItemText`
  - : Text ausgewählter Elemente.
- `VisitedText`
  - : Text von besuchten Links.

### Veraltete Schlüsselwörter für Systemfarben

Die folgenden Schlüsselwörter wurden in früheren Versionen des CSS Color Moduls definiert. Sie sind jetzt für die Verwendung auf öffentlichen Webseiten veraltet.

- `ActiveBorder` {{Deprecated_Inline}}
  - : Aktiver Fensterrahmen. Entspricht `ButtonBorder`.
- `ActiveCaption` {{Deprecated_Inline}}
  - : Aktive Fensterüberschrift. Sollte mit `CaptionText` als Vordergrundfarbe verwendet werden. Entspricht `Canvas`.
- `AppWorkspace` {{Deprecated_Inline}}
  - : Hintergrundfarbe der Mehrfachdokumentenschnittstelle. Entspricht `Canvas`.
- `Background` {{Deprecated_Inline}}
  - : Desktop-Hintergrund. Entspricht `Canvas`.
- `ButtonHighlight` {{Deprecated_Inline}}
  - : Farbe des dem Licht zugewandten Rahmens für 3D-Elemente, die durch eine umgebende Rahmenebene dreidimensional erscheinen. Entspricht `ButtonFace`.
- `ButtonShadow` {{Deprecated_Inline}}
  - : Farbe des vom Licht abgewandten Rahmens für 3D-Elemente, die durch eine umgebende Rahmenebene dreidimensional erscheinen. Entspricht `ButtonFace`.
- `CaptionText` {{Deprecated_Inline}}
  - : Text in Überschriften, Größenbox und Scrollpfeilbox. Sollte mit der Hintergrundfarbe `ActiveCaption` verwendet werden. Entspricht `CanvasText`.
- `InactiveBorder` {{Deprecated_Inline}}
  - : Rahmen eines inaktiven Fensters. Entspricht `ButtonBorder`.
- `InactiveCaption` {{Deprecated_Inline}}
  - : Inaktive Fensterüberschrift. Sollte mit der Vordergrundfarbe `InactiveCaptionText` verwendet werden. Entspricht `Canvas`.
- `InactiveCaptionText` {{Deprecated_Inline}}
  - : Farbe des Textes in einer inaktiven Überschrift. Sollte mit der Hintergrundfarbe `InactiveCaption` verwendet werden. Entspricht `GrayText`.
- `InfoBackground` {{Deprecated_Inline}}
  - : Hintergrundfarbe für Tooltip-Steuerelemente. Sollte mit der Vordergrundfarbe `InfoText` verwendet werden. Entspricht `Canvas`.
- `InfoText` {{Deprecated_Inline}}
  - : Textfarbe für Tooltip-Steuerelemente. Sollte mit der Hintergrundfarbe `InfoBackground` verwendet werden. Entspricht `CanvasText`.
- `Menu` {{Deprecated_Inline}}
  - : Menühintergrund. Sollte mit der Vordergrundfarbe `MenuText` oder `-moz-MenuBarText` verwendet werden. Entspricht `Canvas`.
- `MenuText` {{Deprecated_Inline}}
  - : Text in Menüs. Sollte mit der Hintergrundfarbe `Menu` verwendet werden. Entspricht `CanvasText`.
- `Scrollbar` {{Deprecated_Inline}}
  - : Hintergrundfarbe von Bildlaufleisten. Entspricht `Canvas`.
- `ThreeDDarkShadow` {{Deprecated_Inline}}
  - : Die Farbe des dunkleren (normalerweise äußeren) der beiden Rahmen, die vom Licht abgewandt sind, für 3D-Elemente, die durch zwei konzentrische Umgebungsschichten dreidimensional erscheinen. Entspricht `ButtonBorder`.
- `ThreeDFace` {{Deprecated_Inline}}
  - : Die Hintergrundfarbe der Fläche für 3D-Elemente, die durch zwei konzentrische Umgebungsschichten dreidimensional erscheinen. Sollte mit der Vordergrundfarbe `ButtonText` verwendet werden. Entspricht `ButtonFace`.
- `ThreeDHighlight` {{Deprecated_Inline}}
  - : Die Farbe des helleren (normalerweise äußeren) der beiden Rahmen, die dem Licht zugewandt sind, für 3D-Elemente, die durch zwei konzentrische Umgebungsschichten dreidimensional erscheinen. Entspricht `ButtonBorder`.
- `ThreeDLightShadow` {{Deprecated_Inline}}
  - : Die Farbe des dunkleren (normalerweise inneren) der beiden Rahmen, die dem Licht zugewandt sind, für 3D-Elemente, die durch zwei konzentrische Umgebungsschichten dreidimensional erscheinen. Entspricht `ButtonBorder`.
- `ThreeDShadow` {{Deprecated_Inline}}
  - : Die Farbe des helleren (normalerweise inneren) der beiden Rahmen, die vom Licht abgewandt sind, für 3D-Elemente, die durch zwei konzentrische Umgebungsschichten dreidimensional erscheinen. Entspricht `ButtonBorder`.
- `Window` {{Deprecated_Inline}}
  - : Fensterhintergrund. Sollte mit der Vordergrundfarbe `WindowText` verwendet werden. Entspricht `Canvas`.
- `WindowFrame` {{Deprecated_Inline}}
  - : Fensterrahmen. Entspricht `ButtonBorder`.
- `WindowText` {{Deprecated_Inline}}
  - : Text in Fenstern. Sollte mit der Hintergrundfarbe `Window` verwendet werden. Entspricht `CanvasText`.

## Beispiele

### Verwendung von Systemfarben

In diesem Beispiel haben wir eine Schaltfläche, die normalerweise ihren Kontrast über die {{cssxref("box-shadow")}}-Eigenschaft erhält. Im Zwangsfarbenmodus wird `box-shadow` erzwungen auf `none` gesetzt, sodass das Beispiel die Media-Feature `forced-colors` verwendet, um sicherzustellen, dass es einen Rahmen der entsprechenden Farbe gibt (in diesem Fall `ButtonBorder`).

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

- [`<color>`](/de/docs/Web/CSS/color_value): der Datentyp, zu dem diese Schlüsselwörter gehören
