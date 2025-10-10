---
title: <system-color>
slug: Web/CSS/system-color
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Der **`<system-color>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types) spiegelt in der Regel die Standardfarbauswahl wider, die für die verschiedenen Teile einer Webseite verwendet wird.

Benutzeragenten können jedoch ein Barrierefreiheitsfeature namens _erzwungener Farbenmodus_ bereitstellen, bei dem Farben auf eine von Benutzer und Benutzeragenten definierte Palette beschränkt werden, wodurch die vom Autor gewählten Farben in bestimmten Eigenschaften überschrieben werden. Im erzwungenen Farbenmodus gibt `<system-color>` die gewählten Farben an, sodass der Rest der Seite mit diesen integriert werden kann. Ein Beispiel für den erzwungenen Farbenmodus ist der [hohe Kontrastmodus unter Windows](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/).

Im erzwungenen Farbenmodus sollten Autoren Farben aus dem `<system-color>` Typ für alle Eigenschaften verwenden, die _nicht_ zu der Menge von Eigenschaften gehören, deren Farben überschrieben werden. Dies stellt sicher, dass die Seite durchgängig die gleiche Farbpalette für alle Eigenschaften verwendet.

Autoren können den erzwungenen Farbenmodus mithilfe der [`forced-colors`](/de/docs/Web/CSS/@media/forced-colors) Medienfunktion erkennen.

Ein `<system-color>` Wert kann überall verwendet werden, wo ein [`<color>`](/de/docs/Web/CSS/color_value) verwendet werden kann.

## Syntax

Beachten Sie, dass diese Schlüsselwörter _nicht zwischen Groß- und Kleinschreibung unterscheiden_, aber hier aus Gründen der Lesbarkeit in gemischter Schreibweise aufgeführt sind.

Je nach Ihren Einstellungen können sich die in der Tabelle angezeigten Beispielfarben ändern. Sie können diese Seite auch mit verschiedenen Browsern, Betriebssystemen und Systemeinstellungen anzeigen, um die Unterschiede zu überprüfen.

<table>
  <thead>
    <tr>
      <th>Schlüsselwort</th>
      <th>Beschreibung</th>
      <th>Beispiel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>AccentColor</code></td>
      <td>Hintergrund von hervorgehobenen Benutzeroberflächensteuerungen.</td>
      <td style="background-color: AccentColor;"></td>
    </tr>
    <tr>
      <td><code>AccentColorText</code></td>
      <td>Text von hervorgehobenen Benutzeroberflächensteuerungen.</td>
      <td style="background-color: AccentColorText;"></td>
    </tr>
    <tr>
      <td><code>ActiveText</code></td>
      <td>Text von aktiven Links.</td>
      <td style="background-color: ActiveText;"></td>
    </tr>
    <tr>
      <td><code>ButtonBorder</code></td>
      <td>Grundfarbe des Rahmens von Steuerungen.</td>
      <td style="background-color: ButtonBorder;"></td>
    </tr>
    <tr>
      <td><code>ButtonFace</code></td>
      <td>Hintergrundfarbe von Steuerungen.</td>
      <td style="background-color: ButtonFace;"></td>
    </tr>
    <tr>
      <td><code>ButtonText</code></td>
      <td>Textfarbe von Steuerungen.</td>
      <td style="background-color: ButtonText;"></td>
    </tr>
    <tr>
      <td><code>Canvas</code></td>
      <td>Hintergrund von Anwendungsinhalten oder Dokumenten.</td>
      <td style="background-color: Canvas;"></td>
    </tr>
    <tr>
      <td><code>CanvasText</code></td>
      <td>Textfarbe in Anwendungsinhalten oder Dokumenten.</td>
      <td style="background-color: CanvasText;"></td>
    </tr>
    <tr>
      <td><code>Field</code></td>
      <td>Hintergrund von Eingabefeldern.</td>
      <td style="background-color: Field;"></td>
    </tr>
    <tr>
      <td><code>FieldText</code></td>
      <td>Text in Eingabefeldern.</td>
      <td style="background-color: FieldText;"></td>
    </tr>
    <tr>
      <td><code>GrayText</code></td>
      <td>Textfarbe für deaktivierte Elemente (zum Beispiel ein deaktiviertes Steuerelement).</td>
      <td style="background-color: GrayText;"></td>
    </tr>
    <tr>
      <td><code>Highlight</code></td>
      <td>Hintergrund von ausgewählten Elementen.</td>
      <td style="background-color: Highlight;"></td>
    </tr>
    <tr>
      <td><code>HighlightText</code></td>
      <td>Textfarbe von ausgewählten Elementen.</td>
      <td style="background-color: HighlightText;"></td>
    </tr>
    <tr>
      <td><code>LinkText</code></td>
      <td>Text von nicht-aktiven, nicht-besuchten Links.</td>
      <td style="background-color: LinkText;"></td>
    </tr>
    <tr>
      <td><code>Mark</code></td>
      <td>Hintergrund von speziell markiertem Text (wie zum Beispiel durch das HTML-<code>mark</code>-Element).</td>
      <td style="background-color: Mark;"></td>
    </tr>
    <tr>
      <td><code>MarkText</code></td>
      <td>Speziell markierter Text (wie zum Beispiel durch das HTML-<code>mark</code>-Element).</td>
      <td style="background-color: MarkText;"></td>
    </tr>
    <tr>
      <td><code>SelectedItem</code></td>
      <td>Hintergrund von ausgewählten Elementen, zum Beispiel ein ausgewähltes Kontrollkästchen.</td>
      <td style="background-color: SelectedItem;"></td>
    </tr>
    <tr>
      <td><code>SelectedItemText</code></td>
      <td>Text von ausgewählten Elementen.</td>
      <td style="background-color: SelectedItemText;"></td>
    </tr>
    <tr>
      <td><code>VisitedText</code></td>
      <td>Text von besuchten Links.</td>
      <td style="background-color: VisitedText;"></td>
    </tr>
  </tbody>
</table>

### Veraltete Systemfarbenschlüsselwörter

Die folgenden Schlüsselwörter wurden in früheren Versionen des CSS-Farbmoduls definiert. Sie sind nun für die Verwendung auf öffentlichen Webseiten veraltet.

<table>
  <thead>
    <tr>
      <th>Schlüsselwort</th>
      <th>Beschreibung</th>
      <th>Ersatz</th>
      <th>Beispiel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>ActiveBorder</code></td>
      <td>Rahmen des aktiven Fensters</td>
      <td><code>ButtonBorder</code></td>
      <td style="background-color: ActiveBorder;"></td>
    </tr>
    <tr>
      <td><code>ActiveCaption</code></td>
      <td>Aktive Fensterbeschriftung. Sollte mit <code>CaptionText</code> als Vordergrundfarbe verwendet werden.</td>
      <td><code>Canvas</code></td>
      <td style="background-color: ActiveCaption;"></td>
    </tr>
    <tr>
      <td><code>AppWorkspace</code></td>
      <td>Hintergrundfarbe der Mehrfachdokumentenschnittstelle.</td>
      <td><code>Canvas</code></td>
      <td style="background-color: AppWorkspace;"></td>
    </tr>
    <tr>
      <td><code>Background</code></td>
      <td>Hintergrund des Desktops.</td>
      <td><code>Canvas</code></td>
      <td style="background-color: Background;"></td>
    </tr>
    <tr>
      <td><code>ButtonHighlight</code></td>
      <td>Farbe des Rahmens, der zur Lichtquelle zeigt, für 3-D-Elemente, die durch diese Schicht des umgebenden Rahmens dreidimensional erscheinen.</td>
      <td><code>ButtonFace</code></td>
      <td style="background-color: ButtonHighlight;"></td>
    </tr>
    <tr>
      <td><code>ButtonShadow</code></td>
      <td>Farbe des Rahmens, der von der Lichtquelle weg zeigt, für 3-D-Elemente, die durch diese Schicht des umgebenden Rahmens dreidimensional erscheinen.</td>
      <td><code>ButtonFace</code></td>
      <td style="background-color: ButtonShadow;"></td>
    </tr>
    <tr>
      <td><code>CaptionText</code></td>
      <td>Text in Beschriftungen, Größenfeldern und Scrollbalken-Pfeilfeldern. Sollte mit der <code>ActiveCaption</code> Hintergrundfarbe verwendet werden.</td>
      <td><code>CanvasText</code></td>
      <td style="background-color: CaptionText;"></td>
    </tr>
    <tr>
      <td><code>InactiveBorder</code></td>
      <td>Rahmen des inaktiven Fensters.</td>
      <td><code>ButtonBorder</code></td>
      <td style="background-color: InactiveBorder;"></td>
    </tr>
    <tr>
      <td><code>InactiveCaption</code></td>
      <td>Inaktive Fensterbeschriftung. Sollte mit der <code>InactiveCaptionText</code> Vordergrundfarbe verwendet werden.</td>
      <td><code>Canvas</code></td>
      <td style="background-color: InactiveCaption;"></td>
    </tr>
    <tr>
      <td><code>InactiveCaptionText</code></td>
      <td>Farbe des Textes in einer inaktiven Beschriftung. Sollte mit der <code>InactiveCaption</code> Hintergrundfarbe verwendet werden.</td>
      <td><code>GrayText</code></td>
      <td style="background-color: InactiveCaptionText;"></td>
    </tr>
    <tr>
      <td><code>InfoBackground</code></td>
      <td>Hintergrundfarbe für Tooltip-Steuerelemente. Sollte mit der <code>InfoText</code> Vordergrundfarbe verwendet werden.</td>
      <td><code>Canvas</code></td>
      <td style="background-color: InfoBackground;"></td>
    </tr>
    <tr>
      <td><code>InfoText</code></td>
      <td>Textfarbe für Tooltip-Steuerelemente. Sollte mit der <code>InfoBackground</code> Hintergrundfarbe verwendet werden.</td>
      <td><code>CanvasText</code></td>
      <td style="background-color: InfoText;"></td>
    </tr>
    <tr>
      <td><code>Menu</code></td>
      <td>Hintergrund des Menüs. Sollte mit der <code>MenuText</code> oder <code>-moz-MenuBarText</code> Vordergrundfarbe verwendet werden.</td>
      <td><code>Canvas</code></td>
      <td style="background-color: Menu;"></td>
    </tr>
    <tr>
      <td><code>MenuText</code></td>
      <td>Text in Menüs. Sollte mit der <code>Menu</code> Hintergrundfarbe verwendet werden.</td>
      <td><code>CanvasText</code></td>
      <td style="background-color: MenuText;"></td>
    </tr>
    <tr>
      <td><code>Scrollbar</code></td>
      <td>Hintergrundfarbe von Scrollleisten.</td>
      <td><code>Canvas</code></td>
      <td style="background-color: Scrollbar;"></td>
    </tr>
    <tr>
      <td><code>ThreeDDarkShadow</code></td>
      <td>Die Farbe des dunkleren (im Allgemeinen äußeren) von zwei Rändern, die von der Lichtquelle weg zeigen, für 3-D-Elemente, die durch zwei konzentrische Schichten des umgebenden Rahmens dreidimensional erscheinen.</td>
      <td><code>ButtonBorder</code></td>
      <td style="background-color: ThreeDDarkShadow;"></td>
    </tr>
    <tr>
      <td><code>ThreeDFace</code></td>
      <td>Die Flächenhintergrundfarbe für 3-D-Elemente, die durch zwei konzentrische Schichten des umgebenden Rahmens dreidimensional erscheinen. Sollte mit der <code>ButtonText</code> Vordergrundfarbe verwendet werden.</td>
      <td><code>ButtonFace</code></td>
      <td style="background-color: ThreeDFace;"></td>
    </tr>
    <tr>
      <td><code>ThreeDHighlight</code></td>
      <td>Die Farbe des helleren (im Allgemeinen äußeren) von zwei Rändern, die zur Lichtquelle zeigen, für 3-D-Elemente, die durch zwei konzentrische Schichten des umgebenden Rahmens dreidimensional erscheinen.</td>
      <td><code>ButtonBorder</code></td>
      <td style="background-color: ThreeDHighlight;"></td>
    </tr>
    <tr>
      <td><code>ThreeDLightShadow</code></td>
      <td>Die Farbe des dunkleren (im Allgemeinen inneren) von zwei Rändern, die zur Lichtquelle zeigen, für 3-D-Elemente, die durch zwei konzentrische Schichten des umgebenden Rahmens dreidimensional erscheinen.</td>
      <td><code>ButtonBorder</code></td>
      <td style="background-color: ThreeDLightShadow;"></td>
    </tr>
    <tr>
      <td><code>ThreeDShadow</code></td>
      <td>Die Farbe des helleren (im Allgemeinen inneren) von zwei Rändern, die von der Lichtquelle weg zeigen, für 3-D-Elemente, die durch zwei konzentrische Schichten des umgebenden Rahmens dreidimensional erscheinen.</td>
      <td><code>ButtonBorder</code></td>
      <td style="background-color: ThreeDShadow;"></td>
    </tr>
    <tr>
      <td><code>Window</code></td>
      <td>Hintergrund des Fensters. Sollte mit der <code>WindowText</code> Vordergrundfarbe verwendet werden.</td>
      <td><code>Canvas</code></td>
      <td style="background-color: Window;"></td>
    </tr>
    <tr>
      <td><code>WindowFrame</code></td>
      <td>Fensterrahmen.</td>
      <td><code>ButtonBorder</code></td>
      <td style="background-color: WindowFrame;"></td>
    </tr>
    <tr>
      <td><code>WindowText</code></td>
      <td>Text in Fenstern. Sollte mit der <code>Window</code> Hintergrundfarbe verwendet werden.</td>
      <td><code>CanvasText</code></td>
      <td style="background-color: WindowText;"></td>
    </tr>
  </tbody>
</table>

## Beispiele

### Verwendung von Systemfarben

In diesem Beispiel haben wir einen Button, der normalerweise seinen Kontrast durch die {{cssxref("box-shadow")}}-Eigenschaft erhält. Im erzwungenen Farbenmodus wird `box-shadow` auf `none` gesetzt, sodass das Beispiel die `forced-colors` Medienfunktion verwendet, um sicherzustellen, dass ein Rahmen der entsprechenden Farbe (`ButtonBorder` in diesem Fall) vorhanden ist.

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
