---
title: <Systemfarbe>
slug: Web/CSS/system-color
l10n:
  sourceCommit: 8d4fb1e2934111a13989d2796152dc601468e7b5
---

{{CSSRef}}

Der **`<system-color>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) spiegelt normalerweise die Standardfarbauswahlen wider, die für die verschiedenen Teile einer Webseite verwendet werden.

Benutzeragenten können jedoch eine Zugänglichkeitsfunktion namens _Forced Colors Mode_ bereitstellen, bei der Farben in eine vom Benutzer und Benutzeragenten definierte Palette beschränkt werden, wodurch die Farbauswahl des Autors in bestimmten Eigenschaften überschrieben wird. Im Forced Colors Mode gibt `<system-color>` die ausgewählten Farben an, sodass der Rest der Seite mit ihnen integriert werden kann. Ein Beispiel für den Forced Colors Mode ist der [hohe Kontrastmodus in Windows](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/).

Im Forced Colors Mode sollten Autoren Farben aus dem `<system-color>`-Typ für alle Eigenschaften verwenden, die _nicht_ zu den Eigenschaften gehören, deren Farben überschrieben werden. Dies stellt sicher, dass die Seite konsistent dieselbe Farbpalette über alle Eigenschaften hinweg verwendet.

Autoren können den Forced Colors Mode mit dem [`forced-colors`](/de/docs/Web/CSS/@media/forced-colors) Media-Feature erkennen.

Ein `<system-color>`-Wert kann überall dort verwendet werden, wo ein [`<color>`](/de/docs/Web/CSS/color_value) verwendet werden kann.

## Syntax

Beachten Sie, dass diese Stichwörter _nicht case-sensitiv_ sind, aber hier zur besseren Lesbarkeit in gemischter Schreibung aufgeführt werden.

- `AccentColor`
  - : Hintergrund von hervorgehobenen Benutzeroberflächensteuerungen
- `AccentColorText`
  - : Text von hervorgehobenen Benutzeroberflächensteuerungen
- `ActiveText`
  - : Text von aktiven Links
- `ButtonBorder`
  - : Basis-Randfarbe von Steuerungen
- `ButtonFace`
  - : Hintergrundfarbe von Steuerungen
- `ButtonText`
  - : Textfarbe von Steuerungen
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
  - : Hintergrund von speziell markiertem Text (wie durch das HTML `mark` Element)
- `MarkText`
  - : Speziell markierter Text (wie durch das HTML `mark` Element)
- `SelectedItem`
  - : Hintergrund von ausgewählten Elementen, z.B. ein ausgewähltes Kontrollkästchen
- `SelectedItemText`
  - : Text von ausgewählten Elementen
- `VisitedText`
  - : Text von besuchten Links

### Veraltete Systemfarbstichwörter

Die folgenden Stichwörter wurden in früheren Versionen des CSS-Farbmoduls definiert. Sie sind jetzt für die Verwendung auf öffentlichen Webseiten veraltet.

- `ActiveBorder`
  - : Aktiver Fensterrahmen.
- `ActiveCaption`
  - : Aktive Fensterüberschrift. Sollte mit `CaptionText` als Vordergrundfarbe verwendet werden.
- `AppWorkspace`
  - : Hintergrundfarbe der Mehrfachdokument-Oberfläche.
- `Background`
  - : Desktop-Hintergrund.
- `ButtonHighlight`
  - : Die Farbe der zum Licht hin gerichteten Rand für 3D-Elemente, die aufgrund dieser Randebene 3D erscheinen.
- `ButtonShadow`
  - : Die Farbe der vom Licht abgewandten Rand für 3D-Elemente, die aufgrund dieser Randebene 3D erscheinen.
- `CaptionText`
  - : Text in Überschriften, Größenfeld und Scrollpfeilfeld. Sollte mit der `ActiveCaption` Hintergrundfarbe verwendet werden.
- `InactiveBorder`
  - : Inaktiver Fensterrahmen.
- `InactiveCaption`
  - : Inaktive Fensterüberschrift. Sollte mit der `InactiveCaptionText` Vordergrundfarbe verwendet werden.
- `InactiveCaptionText`
  - : Farbe des Textes in einer inaktiven Überschrift. Sollte mit der `InactiveCaption` Hintergrundfarbe verwendet werden.
- `InfoBackground`
  - : Hintergrundfarbe für Tooltip-Steuerelemente. Sollte mit der `InfoText` Vordergrundfarbe verwendet werden.
- `InfoText`
  - : Textfarbe für Tooltip-Steuerelemente. Sollte mit der `InfoBackground` Hintergrundfarbe verwendet werden.
- `Menu`
  - : Menühintergrund. Sollte mit der `MenuText` oder `-moz-MenuBarText` Vordergrundfarbe verwendet werden.
- `MenuText`
  - : Text in Menüs. Sollte mit der `Menu` Hintergrundfarbe verwendet werden.
- `Scrollbar`
  - : Hintergrundfarbe der Scrollbalken.
- `ThreeDDarkShadow`
  - : Die Farbe der dunkleren (im Allgemeinen äußeren) der beiden Ränder, die vom Licht abgewandt sind, für 3D-Elemente, die aufgrund von zwei konzentrischen Randschichten 3D erscheinen.
- `ThreeDFace`
  - : Die Vordergrund-Hintergrundfarbe für 3D-Elemente, die aufgrund von zwei konzentrischen Randschichten 3D erscheinen. Sollte mit der `ButtonText` Vordergrundfarbe verwendet werden.
- `ThreeDHighlight`
  - : Die Farbe der helleren (im Allgemeinen äußeren) der beiden Ränder, die zum Licht hin gerichtet sind, für 3D-Elemente, die aufgrund von zwei konzentrischen Randschichten 3D erscheinen.
- `ThreeDLightShadow`
  - : Die Farbe der dunkleren (im Allgemeinen inneren) der beiden Ränder, die zum Licht hin gerichtet sind, für 3D-Elemente, die aufgrund von zwei konzentrischen Randschichten 3D erscheinen.
- `ThreeDShadow`
  - : Die Farbe der helleren (im Allgemeinen inneren) der beiden Ränder, die vom Licht abgewandt sind, für 3D-Elemente, die aufgrund von zwei konzentrischen Randschichten 3D erscheinen.
- `Window`
  - : Fensterhintergrund. Sollte mit der `WindowText` Vordergrundfarbe verwendet werden.
- `WindowFrame`
  - : Fensterrahmen.
- `WindowText`
  - : Text in Fenstern. Sollte mit der `Window` Hintergrundfarbe verwendet werden.

## Beispiele

### Verwendung von Systemfarben

In diesem Beispiel haben wir eine Schaltfläche, die normalerweise durch die {{cssxref("box-shadow")}} Eigenschaft ihren Kontrast erhält. Im Forced Colors Mode wird `box-shadow` auf `none` gesetzt, sodass das Beispiel die Media-Feature `forced-colors` verwendet, um sicherzustellen, dass es einen Rand der entsprechenden Farbe (`ButtonBorder` in diesem Fall) gibt.

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
    /* Verwenden Sie stattdessen einen Rand, da
    box-shadow im Forced Colors Mode auf 'none' gesetzt ist */
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

- [`<color>`](/de/docs/Web/CSS/color_value): der Datentyp, zu dem diese Stichwörter gehören
