---
title: <system-color>
slug: Web/CSS/Reference/Values/system-color
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

Der **`<system-color>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) reflektiert üblicherweise die Standardfarbwahl, die für die verschiedenen Teile einer Webseite verwendet wird.

Jedoch können Benutzeragenten ein Barrierefreiheits-Feature namens _erzwungener Farbmodus_ bereitstellen, bei dem die Farben in eine vom Benutzer und Benutzeragenten definierte Palette eingeschränkt werden, wodurch die vom Autor gewählten Farben in bestimmten Eigenschaften überschrieben werden. Im erzwungenen Farbmodus gibt `<system-color>` die ausgewählten Farben an, damit der Rest der Seite sich mit ihnen integrieren kann. Ein Beispiel für den erzwungenen Farbmodus ist der [Hohe Kontrastmodus unter Windows](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/).

Im Modus für erzwungene Farben sollten Autoren Farben vom Typ `<system-color>` für alle Eigenschaften verwenden, die _nicht_ in der Menge der Eigenschaften enthalten sind, deren Farben überschrieben werden. Dies gewährleistet, dass die Seite konsistent die gleiche Farbpalette über alle Eigenschaften hinweg verwendet.

Autoren können den erzwungenen Farbmodus mit dem [`forced-colors`](/de/docs/Web/CSS/Reference/At-rules/@media/forced-colors) Medienmerkmal erfassen.

Ein `<system-color>` Wert kann überall verwendet werden, wo ein [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) verwendet werden kann.

## Syntax

Beachten Sie, dass diese Schlüsselwörter _nicht zwischen Groß- und Kleinschreibung unterscheiden_, sie sind jedoch hier zur besseren Lesbarkeit in gemischter Schreibweise aufgeführt.

Je nach Ihren Einstellungen können sich die in der Tabelle angezeigten Beispiel-Farben ändern. Sie können diese Seite auch mit verschiedenen Browsern, Betriebssystemen und Systemeinstellungen betrachten, um die Unterschiede zu überprüfen.

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
      <td>Hintergrund von hervorgehobenen Benutzeroberflächenelementen.</td>
      <td style="background-color: AccentColor;"></td>
    </tr>
    <tr>
      <td><code>AccentColorText</code></td>
      <td>Text von hervorgehobenen Benutzeroberflächenelementen.</td>
      <td style="background-color: AccentColorText;"></td>
    </tr>
    <tr>
      <td><code>ActiveText</code></td>
      <td>Text aktiver Links.</td>
      <td style="background-color: ActiveText;"></td>
    </tr>
    <tr>
      <td><code>ButtonBorder</code></td>
      <td>Grundfarbe der Umrandung von Steuerelementen.</td>
      <td style="background-color: ButtonBorder;"></td>
    </tr>
    <tr>
      <td><code>ButtonFace</code></td>
      <td>Hintergrundfarbe von Steuerelementen.</td>
      <td style="background-color: ButtonFace;"></td>
    </tr>
    <tr>
      <td><code>ButtonText</code></td>
      <td>Textfarbe von Steuerelementen.</td>
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
      <td>Textfarbe für deaktivierte Elemente (z.B. ein deaktiviertes Steuerelement).</td>
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
      <td>Text von nicht aktiven, nicht besuchten Links.</td>
      <td style="background-color: LinkText;"></td>
    </tr>
    <tr>
      <td><code>Mark</code></td>
      <td>Hintergrund von speziell markiertem Text (z.B. durch das HTML-Element <code>mark</code>).</td>
      <td style="background-color: Mark;"></td>
    </tr>
    <tr>
      <td><code>MarkText</code></td>
      <td>Speziell markierter Text (z.B. durch das HTML-Element <code>mark</code>).</td>
      <td style="background-color: MarkText;"></td>
    </tr>
    <tr>
      <td><code>SelectedItem</code></td>
      <td>Hintergrund von ausgewählten Elementen, z.B. einer ausgewählten Checkbox.</td>
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

### Veraltete Systemfarbschlüsselwörter

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
      <td>Aktiver Fensterrahmen</td>
      <td><code>ButtonBorder</code></td>
      <td style="background-color: ActiveBorder;"></td>
    </tr>
    <tr>
      <td><code>ActiveCaption</code></td>
      <td>Aktive Fensterlegende. Sollte mit <code>CaptionText</code> als Vordergrundfarbe verwendet werden.</td>
      <td><code>Canvas</code></td>
      <td style="background-color: ActiveCaption;"></td>
    </tr>
    <tr>
      <td><code>AppWorkspace</code></td>
      <td>Hintergrundfarbe der Mehrfenster-Schnittstelle.</td>
      <td><code>Canvas</code></td>
      <td style="background-color: AppWorkspace;"></td>
    </tr>
    <tr>
      <td><code>Background</code></td>
      <td>Desktop-Hintergrund.</td>
      <td><code>Canvas</code></td>
      <td style="background-color: Background;"></td>
    </tr>
    <tr>
      <td><code>ButtonHighlight</code></td>
      <td>Die Farbe der Umrandung, die zur Lichtquelle zeigt, für 3-D-Elemente, die aufgrund dieser umgebenden Ebene dreidimensional erscheinen.</td>
      <td><code>ButtonFace</code></td>
      <td style="background-color: ButtonHighlight;"></td>
    </tr>
    <tr>
      <td><code>ButtonShadow</code></td>
      <td>Die Farbe der Umrandung, die von der Lichtquelle wegzeigt, für 3-D-Elemente, die aufgrund dieser umgebenden Ebene dreidimensional erscheinen.</td>
      <td><code>ButtonFace</code></td>
      <td style="background-color: ButtonShadow;"></td>
    </tr>
    <tr>
      <td><code>CaptionText</code></td>
      <td>Text in Legenden, Größenboxen und Scrollbalkenpfeilboxen. Sollte mit der Hintergrundfarbe <code>ActiveCaption</code> verwendet werden.</td>
      <td><code>CanvasText</code></td>
      <td style="background-color: CaptionText;"></td>
    </tr>
    <tr>
      <td><code>InactiveBorder</code></td>
      <td>Inaktiver Fensterrahmen.</td>
      <td><code>ButtonBorder</code></td>
      <td style="background-color: InactiveBorder;"></td>
    </tr>
    <tr>
      <td><code>InactiveCaption</code></td>
      <td>Inaktive Fensterlegende. Sollte mit der Vordergrundfarbe <code>InactiveCaptionText</code> verwendet werden.</td>
      <td><code>Canvas</code></td>
      <td style="background-color: InactiveCaption;"></td>
    </tr>
    <tr>
      <td><code>InactiveCaptionText</code></td>
      <td>Farbe des Textes in einer inaktiven Legende. Sollte mit der Hintergrundfarbe <code>InactiveCaption</code> verwendet werden.</td>
      <td><code>GrayText</code></td>
      <td style="background-color: InactiveCaptionText;"></td>
    </tr>
    <tr>
      <td><code>InfoBackground</code></td>
      <td>Hintergrundfarbe für Tooltip-Steuerelemente. Sollte mit der Vordergrundfarbe <code>InfoText</code> verwendet werden.</td>
      <td><code>Canvas</code></td>
      <td style="background-color: InfoBackground;"></td>
    </tr>
    <tr>
      <td><code>InfoText</code></td>
      <td>Textfarbe für Tooltip-Steuerelemente. Sollte mit der Hintergrundfarbe <code>InfoBackground</code> verwendet werden.</td>
      <td><code>CanvasText</code></td>
      <td style="background-color: InfoText;"></td>
    </tr>
    <tr>
      <td><code>Menu</code></td>
      <td>Menühintergrund. Sollte mit der Vordergrundfarbe <code>MenuText</code> oder <code>-moz-MenuBarText</code> verwendet werden.</td>
      <td><code>Canvas</code></td>
      <td style="background-color: Menu;"></td>
    </tr>
    <tr>
      <td><code>MenuText</code></td>
      <td>Text in Menüs. Sollte mit der Hintergrundfarbe <code>Menu</code> verwendet werden.</td>
      <td><code>CanvasText</code></td>
      <td style="background-color: MenuText;"></td>
    </tr>
    <tr>
      <td><code>Scrollbar</code></td>
      <td>Hintergrundfarbe der Scrollbalken.</td>
      <td><code>Canvas</code></td>
      <td style="background-color: Scrollbar;"></td>
    </tr>
    <tr>
      <td><code>ThreeDDarkShadow</code></td>
      <td>Die Farbe der dunkleren (normalerweise äußeren) der beiden Umrandungen, die von der Lichtquelle wegzeigen, für 3-D-Elemente, die aufgrund von zwei konzentrischen Umrandungsschichten dreidimensional erscheinen.</td>
      <td><code>ButtonBorder</code></td>
      <td style="background-color: ThreeDDarkShadow;"></td>
    </tr>
    <tr>
      <td><code>ThreeDFace</code></td>
      <td>Die Flächenhintergrundfarbe für 3-D-Elemente, die aufgrund von zwei konzentrischen Umrandungsschichten dreidimensional erscheinen. Sollte mit der Vordergrundfarbe <code>ButtonText</code> verwendet werden.</td>
      <td><code>ButtonFace</code></td>
      <td style="background-color: ThreeDFace;"></td>
    </tr>
    <tr>
      <td><code>ThreeDHighlight</code></td>
      <td>Die Farbe der helleren (normalerweise äußeren) der beiden Umrandungen, die zur Lichtquelle zeigen, für 3-D-Elemente, die aufgrund von zwei konzentrischen Umrandungsschichten dreidimensional erscheinen.</td>
      <td><code>ButtonBorder</code></td>
      <td style="background-color: ThreeDHighlight;"></td>
    </tr>
    <tr>
      <td><code>ThreeDLightShadow</code></td>
      <td>Die Farbe der dunkleren (normalerweise inneren) der beiden Umrandungen, die zur Lichtquelle zeigen, für 3-D-Elemente, die aufgrund von zwei konzentrischen Umrandungsschichten dreidimensional erscheinen.</td>
      <td><code>ButtonBorder</code></td>
      <td style="background-color: ThreeDLightShadow;"></td>
    </tr>
    <tr>
      <td><code>ThreeDShadow</code></td>
      <td>Die Farbe der helleren (normalerweise inneren) der beiden Umrandungen, die von der Lichtquelle wegzeigen, für 3-D-Elemente, die aufgrund von zwei konzentrischen Umrandungsschichten dreidimensional erscheinen.</td>
      <td><code>ButtonBorder</code></td>
      <td style="background-color: ThreeDShadow;"></td>
    </tr>
    <tr>
      <td><code>Window</code></td>
      <td>Fensterhintergrund. Sollte mit der Vordergrundfarbe <code>WindowText</code> verwendet werden.</td>
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
      <td>Text in Fenstern. Sollte mit der Hintergrundfarbe <code>Window</code> verwendet werden.</td>
      <td><code>CanvasText</code></td>
      <td style="background-color: WindowText;"></td>
    </tr>
  </tbody>
</table>

## Beispiele

### Verwendung von Systemfarben

In diesem Beispiel haben wir einen Button, der normalerweise seinen Kontrast durch die Eigenschaft {{cssxref("box-shadow")}} erhält. Im Modus für erzwungene Farben wird `box-shadow` auf `none` gesetzt, daher verwendet das Beispiel die Medienfunktion `forced-colors`, um sicherzustellen, dass es einen Rand der passenden Farbe gibt (in diesem Fall `ButtonBorder`).

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

- [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value): der Datentyp, zu dem diese Schlüsselwörter gehören
