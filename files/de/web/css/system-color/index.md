---
title: <system-color>
slug: Web/CSS/system-color
l10n:
  sourceCommit: 8d4fb1e2934111a13989d2796152dc601468e7b5
---

{{CSSRef}}

Der **`<system-color>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) spiegelt normalerweise die Standardfarbwahl wider, die für die verschiedenen Teile einer Webseite verwendet wird.

Allerdings können Benutzeragenten eine Barrierefreiheitseinstellung namens _Erzwungener Farbenmodus_ bereitstellen, bei der Farben auf eine vom Benutzer und Benutzeragenten definierte Farbpalette beschränkt werden, die die vom Autor gewählten Farben in bestimmten Eigenschaften überschreibt. Im erzwungenen Farbenmodus gibt `<system-color>` die ausgewählten Farben frei, sodass der Rest der Seite mit ihnen integriert werden kann. Ein Beispiel für den erzwungenen Farbenmodus ist der [Hoher Kontrast Modus in Windows](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/).

Im erzwungenen Farbenmodus sollten Autoren Farben aus dem `<system-color>`-Typ für alle Eigenschaften verwenden, die _nicht_ in dem Satz von Eigenschaften enthalten sind, deren Farben überschrieben werden. Dies stellt sicher, dass die Seite konsistent die gleiche Farbpalette über alle Eigenschaften hinweg verwendet.

Autoren können den erzwungenen Farbenmodus mit dem [`forced-colors`](/de/docs/Web/CSS/@media/forced-colors) Media-Feature erkennen.

Ein `<system-color>`-Wert kann überall verwendet werden, wo ein [`<color>`](/de/docs/Web/CSS/color_value) verwendet werden kann.

## Syntax

Beachten Sie, dass diese Schlüsselwörter _nicht_ auf die Groß- und Kleinschreibung achten, aber hier zur besseren Lesbarkeit in gemischter Schreibung aufgeführt sind.

- `AccentColor`
  - : Hintergrund von akzentuierten Benutzeroberflächensteuerungen
- `AccentColorText`
  - : Text von akzentuierten Benutzeroberflächensteuerungen
- `ActiveText`
  - : Text von aktiven Links
- `ButtonBorder`
  - : Basisrandfarbe von Steuerungen
- `ButtonFace`
  - : Hintergrundfarbe von Steuerungen
- `ButtonText`
  - : Textfarbe von Steuerungen
- `Canvas`
  - : Hintergrund von Anwendungsinhalt oder Dokumenten
- `CanvasText`
  - : Textfarbe in Anwendungsinhalt oder Dokumenten
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
  - : Hintergrund von speziell markiertem Text (z.B. durch das HTML `mark` Element)
- `MarkText`
  - : Speziell markierter Text (z.B. durch das HTML `mark` Element)
- `SelectedItem`
  - : Hintergrund von ausgewählten Elementen, z.B. ein ausgewähltes Kontrollkästchen
- `SelectedItemText`
  - : Text von ausgewählten Elementen
- `VisitedText`
  - : Text von besuchten Links

### Veraltete Systemfarbenschlüsselwörter

Die folgenden Schlüsselwörter wurden in früheren Versionen des CSS-Farbmoduls definiert. Sie sind jetzt für die Verwendung auf öffentlichen Webseiten veraltet.

- `ActiveBorder`
  - : Rand eines aktiven Fensters.
- `ActiveCaption`
  - : Titel eines aktiven Fensters. Sollte mit `CaptionText` als Vordergrundfarbe verwendet werden.
- `AppWorkspace`
  - : Hintergrundfarbe einer Mehrfachdokumentenschnittstelle.
- `Background`
  - : Desktop-Hintergrund.
- `ButtonHighlight`
  - : Die Farbe des zur Lichtquelle zeigenden Rands bei 3D-Elementen, die aufgrund dieser Randebene dreidimensional erscheinen.
- `ButtonShadow`
  - : Die Farbe des von der Lichtquelle wegzeigenden Rands bei 3D-Elementen, die aufgrund dieser Randebene dreidimensional erscheinen.
- `CaptionText`
  - : Text in Titel, Größenfeld und Scrollbar-Pfeilfeld. Sollte mit der `ActiveCaption` Hintergrundfarbe verwendet werden.
- `InactiveBorder`
  - : Rand eines inaktiven Fensters.
- `InactiveCaption`
  - : Titel eines inaktiven Fensters. Sollte mit der `InactiveCaptionText` Vordergrundfarbe verwendet werden.
- `InactiveCaptionText`
  - : Farbe des Textes in einem inaktiven Titel. Sollte mit der `InactiveCaption` Hintergrundfarbe verwendet werden.
- `InfoBackground`
  - : Hintergrundfarbe für Tooltip-Steuerelemente. Sollte mit der `InfoText` Vordergrundfarbe verwendet werden.
- `InfoText`
  - : Textfarbe für Tooltip-Steuerelemente. Sollte mit der `InfoBackground` Hintergrundfarbe verwendet werden.
- `Menu`
  - : Menühintergrund. Sollte mit der `MenuText` oder `-moz-MenuBarText` Vordergrundfarbe verwendet werden.
- `MenuText`
  - : Text in Menüs. Sollte mit der `Menu` Hintergrundfarbe verwendet werden.
- `Scrollbar`
  - : Hintergrundfarbe der Scrollleisten.
- `ThreeDDarkShadow`
  - : Die Farbe des dunkleren (in der Regel äußeren) von zwei Rändern, die von der Lichtquelle wegzeigen, bei 3D-Elementen, die aufgrund von zwei konzentrischen Randebenen dreidimensional erscheinen.
- `ThreeDFace`
  - : Die Hintergrundfarbe der Fläche für 3D-Elemente, die aufgrund von zwei konzentrischen Randebenen dreidimensional erscheinen. Sollte mit der `ButtonText` Vordergrundfarbe verwendet werden.
- `ThreeDHighlight`
  - : Die Farbe des helleren (in der Regel äußeren) von zwei Rändern, die zur Lichtquelle zeigen, bei 3D-Elementen, die aufgrund von zwei konzentrischen Randebenen dreidimensional erscheinen.
- `ThreeDLightShadow`
  - : Die Farbe des dunkleren (in der Regel inneren) von zwei Rändern, die zur Lichtquelle zeigen, bei 3D-Elementen, die aufgrund von zwei konzentrischen Randebenen dreidimensional erscheinen.
- `ThreeDShadow`
  - : Die Farbe des helleren (in der Regel inneren) von zwei Rändern, die von der Lichtquelle wegzeigen, bei 3D-Elementen, die aufgrund von zwei konzentrischen Randebenen dreidimensional erscheinen.
- `Window`
  - : Fensterhintergrund. Sollte mit der `WindowText` Vordergrundfarbe verwendet werden.
- `WindowFrame`
  - : Fensterrahmen.
- `WindowText`
  - : Text in Fenstern. Sollte mit der `Window` Hintergrundfarbe verwendet werden.

## Beispiele

### Verwendung von Systemfarben

In diesem Beispiel haben wir eine Schaltfläche, die normalerweise ihren Kontrast mithilfe der {{cssxref("box-shadow")}}-Eigenschaft erhält. Im erzwungenen Farbenmodus wird `box-shadow` auf `none` gesetzt, daher verwendet das Beispiel das `forced-colors` Media-Feature, um sicherzustellen, dass es einen Rand der entsprechenden Farbe gibt (in diesem Fall `ButtonBorder`).

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
