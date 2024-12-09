---
title: <system-color>
slug: Web/CSS/system-color
l10n:
  sourceCommit: 4db32ac1814749885a7692f684ae671f0b1449d4
---

{{CSSRef}}

Der **`<system-color>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) spiegelt normalerweise die Standardfarbwahl wider, die für die verschiedenen Teile einer Webseite verwendet wird.

Jedoch können Benutzeragenten eine Barrierefreiheitseinstellung namens _erzwungener Farbmodus_ bereitstellen, bei dem Farben auf eine vom Benutzer und Benutzeragenten definierte Palette beschränkt werden und die vom Autor gewählten Farben in bestimmten Eigenschaften überschrieben werden. Im erzwungenen Farbmodus gibt `<system-color>` die gewählten Farben an, sodass der Rest der Seite sich anpassen kann. Ein Beispiel für einen erzwungenen Farbmodus ist der [hochkontrastige Modus auf Windows](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/).

Im erzwungenen Farbmodus sollten Autoren Farben aus dem `<system-color>` Typ für alle Eigenschaften verwenden, die _nicht_ zu den Eigenschaften gehören, deren Farben überschrieben werden. Dies stellt sicher, dass die Seite konsistent dieselbe Farbpalette über alle Eigenschaften hinweg verwendet.

Autoren können den erzwungenen Farbmodus mithilfe des [`forced-colors`](/de/docs/Web/CSS/@media/forced-colors) Media-Features erkennen.

Ein `<system-color>` Wert kann überall verwendet werden, wo ein [`<color>`](/de/docs/Web/CSS/color_value) verwendet werden kann.

## Syntax

Beachten Sie, dass diese Schlüsselwörter _nicht auf die Groß- und Kleinschreibung achten_, hier jedoch zur besseren Lesbarkeit in gemischter Schreibweise aufgeführt sind.

- `AccentColor`
  - : Hintergrund von hervorgehobenen Benutzeroberflächenelementen.
- `AccentColorText`
  - : Text von hervorgehobenen Benutzeroberflächenelementen.
- `ActiveText`
  - : Text aktiver Links.
- `ButtonBorder`
  - : Grundfarbe der Rahmen von Steuerelementen.
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
  - : Hintergrund von ausgewählten Elementen.
- `HighlightText`
  - : Textfarbe von ausgewählten Elementen.
- `LinkText`
  - : Text von nicht-aktiven, nicht-besuchten Links.
- `Mark`
  - : Hintergrund von speziell markiertem Text (zum Beispiel durch das HTML-`mark` Element).
- `MarkText`
  - : Text, der speziell markiert wurde (zum Beispiel durch das HTML-`mark` Element).
- `SelectedItem`
  - : Hintergrund von ausgewählten Elementen, zum Beispiel eines ausgewählten Kontrollkästchens.
- `SelectedItemText`
  - : Text von ausgewählten Elementen.
- `VisitedText`
  - : Text besuchter Links.

### Veraltete Systemfarbenschlüsselwörter

Die folgenden Schlüsselwörter wurden in früheren Versionen des CSS Farbmoduls definiert. Sie sind nun für die Verwendung auf öffentlichen Webseiten veraltet.

- `ActiveBorder` {{Deprecated_Inline}}
  - : Aktiver Fensterrahmen. Dasselbe wie `ButtonBorder`.
- `ActiveCaption` {{Deprecated_Inline}}
  - : Aktive Fensterbeschriftung. Sollte mit `CaptionText` als Vordergrundfarbe verwendet werden. Dasselbe wie `Canvas`.
- `AppWorkspace` {{Deprecated_Inline}}
  - : Hintergrundfarbe einer Mehrdokumentenschnittstelle. Dasselbe wie `Canvas`.
- `Background` {{Deprecated_Inline}}
  - : Desktop-Hintergrund. Dasselbe wie `Canvas`.
- `ButtonHighlight` {{Deprecated_Inline}}
  - : Die Farbe des Rahmen, der zur Lichtquelle gerichtet ist, für 3D-Elemente, die aufgrund dieser Rahmenschicht in 3D erscheinen. Dasselbe wie `ButtonFace`.
- `ButtonShadow` {{Deprecated_Inline}}
  - : Die Farbe des Rahmens, der von der Lichtquelle abgewandt ist, für 3D-Elemente, die aufgrund dieser Rahmenschicht in 3D erscheinen. Dasselbe wie `ButtonFace`.
- `CaptionText` {{Deprecated_Inline}}
  - : Text in Beschriftungen, Größenfeldern und Scrollleistenpfeilen. Sollte mit der `ActiveCaption` Hintergrundfarbe verwendet werden. Dasselbe wie `CanvasText`.
- `InactiveBorder` {{Deprecated_Inline}}
  - : Inaktiver Fensterrahmen. Dasselbe wie `ButtonBorder`.
- `InactiveCaption` {{Deprecated_Inline}}
  - : Inaktive Fensterbeschriftung. Sollte mit der `InactiveCaptionText` Vordergrundfarbe verwendet werden. Dasselbe wie `Canvas`.
- `InactiveCaptionText` {{Deprecated_Inline}}
  - : Farbe des Textes in einer inaktiven Beschriftung. Sollte mit der `InactiveCaption` Hintergrundfarbe verwendet werden. Dasselbe wie `GrayText`.
- `InfoBackground` {{Deprecated_Inline}}
  - : Hintergrundfarbe für Tooltip-Steuerelemente. Sollte mit der `InfoText` Vordergrundfarbe verwendet werden. Dasselbe wie `Canvas`.
- `InfoText` {{Deprecated_Inline}}
  - : Textfarbe für Tooltip-Steuerelemente. Sollte mit der `InfoBackground` Hintergrundfarbe verwendet werden. Dasselbe wie `CanvasText`.
- `Menu` {{Deprecated_Inline}}
  - : Menü-Hintergrund. Sollte mit der `MenuText` oder `-moz-MenuBarText` Vordergrundfarbe verwendet werden. Dasselbe wie `Canvas`.
- `MenuText` {{Deprecated_Inline}}
  - : Text in Menüs. Sollte mit der `Menu` Hintergrundfarbe verwendet werden. Dasselbe wie `CanvasText`.
- `Scrollbar` {{Deprecated_Inline}}
  - : Hintergrundfarbe von Scrollleisten. Dasselbe wie `Canvas`.
- `ThreeDDarkShadow` {{Deprecated_Inline}}
  - : Die Farbe des dunkleren (in der Regel äußeren) der beiden Rahmen von der Lichtquelle weg für 3D-Elemente, die aufgrund zweier konzentrischer Rahmenschichten in 3D erscheinen. Dasselbe wie `ButtonBorder`.
- `ThreeDFace` {{Deprecated_Inline}}
  - : Die Gesichts-Hintergrundfarbe für 3D-Elemente, die aufgrund zweier konzentrischer Rahmenschichten in 3D erscheinen. Sollte mit der `ButtonText` Vordergrundfarbe verwendet werden. Dasselbe wie `ButtonFace`.
- `ThreeDHighlight` {{Deprecated_Inline}}
  - : Die Farbe des helleren (in der Regel äußeren) der beiden Rahmen zur Lichtquelle hin für 3D-Elemente, die aufgrund zweier konzentrischer Rahmenschichten in 3D erscheinen. Dasselbe wie `ButtonBorder`.
- `ThreeDLightShadow` {{Deprecated_Inline}}
  - : Die Farbe des dunkleren (in der Regel inneren) der beiden Rahmen zur Lichtquelle hin für 3D-Elemente, die aufgrund zweier konzentrischer Rahmenschichten in 3D erscheinen. Dasselbe wie `ButtonBorder`.
- `ThreeDShadow` {{Deprecated_Inline}}
  - : Die Farbe des helleren (in der Regel inneren) der beiden Rahmen von der Lichtquelle weg für 3D-Elemente, die aufgrund zweier konzentrischer Rahmenschichten in 3D erscheinen. Dasselbe wie `ButtonBorder`.
- `Window` {{Deprecated_Inline}}
  - : Fensterhintergrund. Sollte mit der `WindowText` Vordergrundfarbe verwendet werden. Dasselbe wie `Canvas`.
- `WindowFrame` {{Deprecated_Inline}}
  - : Fensterrahmen. Dasselbe wie `ButtonBorder`.
- `WindowText` {{Deprecated_Inline}}
  - : Text in Fenstern. Sollte mit der `Window` Hintergrundfarbe verwendet werden. Dasselbe wie `CanvasText`.

## Beispiele

### Verwendung von Systemfarben

In diesem Beispiel haben wir eine Schaltfläche, die normalerweise durch die Eigenschaft {{cssxref("box-shadow")}} ihren Kontrast erhält. Im erzwungenen Farbmodus wird `box-shadow` auf `none` gesetzt, sodass das Beispiel das `forced-colors` Media-Feature verwendet, um sicherzustellen, dass es einen Rahmen der entsprechenden Farbe (`ButtonBorder` in diesem Fall) gibt.

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
