---
title: "`<system-color>` CSS-Typ"
short-title: <system-color>
slug: Web/CSS/Reference/Values/system-color
l10n:
  sourceCommit: c88e03530319b73272fd4f9a9f6ebe878f026004
---

Der **`<system-color>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) spiegelt in der Regel die Standardfarbwahl wider, die für die verschiedenen Teile einer Webseite verwendet wird.

Browser können jedoch eine Barrierefreiheitsfunktion namens _gedrängter Farbenmodus_ bereitstellen, bei dem Farben in eine vom Benutzer und Browser definierte Palette eingeschränkt werden, um die Farbwahl des Autors in bestimmten Eigenschaften zu überschreiben. Im gedrängten Farbenmodus legt `<system-color>` die gewählten Farben offen, sodass der Rest der Seite sich damit integrieren kann. Ein Beispiel für den gedrängten Farbenmodus ist der [Hoher Kontrast-Modus in Windows](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/).

Im gedrängten Farbenmodus sollten Autoren Farben aus dem `<system-color>`-Typ für alle Eigenschaften verwenden, die _nicht_ zu der Gruppe von Eigenschaften gehören, deren Farben überschrieben werden. Dies stellt sicher, dass die Seite durchgängig dieselbe Farbpalette für alle Eigenschaften verwendet.

Autoren können den gedrängten Farbenmodus mit dem [`forced-colors`](/de/docs/Web/CSS/Reference/At-rules/@media/forced-colors) Media-Feature erfassen.

Ein `<system-color>`-Wert kann überall verwendet werden, wo ein {{cssxref("&lt;color&gt;")}} verwendet werden kann.

## Syntax

Beachten Sie, dass diese Schlüsselwörter _nicht_ zwischen Groß- und Kleinschreibung unterscheiden, aber der Lesbarkeit halber hier in gemischter Schreibweise aufgelistet sind.

Je nach Ihren Einstellungen können sich die in der Tabelle angezeigten Beispiel-Farben ändern. Sie können diese Seite auch mit verschiedenen Browsern, Betriebssystemen und Systemeinstellungen anzeigen, um die Unterschiede zu überprüfen.

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
      <td>Text von aktiven Links.</td>
      <td style="background-color: ActiveText;"></td>
    </tr>
    <tr>
      <td><code>ButtonBorder</code></td>
      <td>Standardgrenzenfarbe von Steuerelementen.</td>
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
      <td>Textfarbe für inaktive Elemente (z. B. ein inaktives Steuerelement).</td>
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
      <td>Hintergrund von speziell markiertem Text (z. B. mit dem HTML-<code>mark</code>-Element).</td>
      <td style="background-color: Mark;"></td>
    </tr>
    <tr>
      <td><code>MarkText</code></td>
      <td>Text, der speziell markiert wurde (z. B. mit dem HTML-<code>mark</code>-Element).</td>
      <td style="background-color: MarkText;"></td>
    </tr>
    <tr>
      <td><code>SelectedItem</code></td>
      <td>Hintergrund von ausgewählten Elementen, z. B. ein ausgewähltes Kontrollkästchen.</td>
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

Die folgenden Schlüsselwörter wurden in früheren Versionen des CSS Color Moduls definiert. Sie sind nun für die Verwendung auf öffentlichen Webseiten veraltet.

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
      <td>Aktive Fensterbeschriftung. Sollte mit <code>CaptionText</code> als Vordergrundfarbe verwendet werden.</td>
      <td><code>Canvas</code></td>
      <td style="background-color: ActiveCaption;"></td>
    </tr>
    <tr>
      <td><code>AppWorkspace</code></td>
      <td>Hintergrundfarbe der mehreren Dokumenten-Oberfläche.</td>
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
      <td>Die Farbe der Begrenzung, die der Lichtquelle zugewandt ist, für 3D-Elemente, die durch diese Umrandungsschicht dreidimensional erscheinen.</td>
      <td><code>ButtonFace</code></td>
      <td style="background-color: ButtonHighlight;"></td>
    </tr>
    <tr>
      <td><code>ButtonShadow</code></td>
      <td>Die Farbe der Begrenzung, die von der Lichtquelle abgewandt ist, für 3D-Elemente, die durch diese Umrandungsschicht dreidimensional erscheinen.</td>
      <td><code>ButtonFace</code></td>
      <td style="background-color: ButtonShadow;"></td>
    </tr>
    <tr>
      <td><code>CaptionText</code></td>
      <td>Text in Beschriftung, Größenbox und Rollbalken-Pfeilbox. Sollte mit der <code>ActiveCaption</code>-Hintergrundfarbe verwendet werden.</td>
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
      <td>Inaktive Fensterbeschriftung. Sollte mit der <code>InactiveCaptionText</code>-Vordergrundfarbe verwendet werden.</td>
      <td><code>Canvas</code></td>
      <td style="background-color: InactiveCaption;"></td>
    </tr>
    <tr>
      <td><code>InactiveCaptionText</code></td>
      <td>Farbe des Textes in einer inaktiven Beschriftung. Sollte mit der <code>InactiveCaption</code>-Hintergrundfarbe verwendet werden.</td>
      <td><code>GrayText</code></td>
      <td style="background-color: InactiveCaptionText;"></td>
    </tr>
    <tr>
      <td><code>InfoBackground</code></td>
      <td>Hintergrundfarbe für Tooltip-Steuerelemente. Sollte mit der <code>InfoText</code>-Vordergrundfarbe verwendet werden.</td>
      <td><code>Canvas</code></td>
      <td style="background-color: InfoBackground;"></td>
    </tr>
    <tr>
      <td><code>InfoText</code></td>
      <td>Textfarbe für Tooltip-Steuerelemente. Sollte mit der <code>InfoBackground</code>-Hintergrundfarbe verwendet werden.</td>
      <td><code>CanvasText</code></td>
      <td style="background-color: InfoText;"></td>
    </tr>
    <tr>
      <td><code>Menu</code></td>
      <td>Menühintergrund. Sollte mit der <code>MenuText</code> oder <code>-moz-MenuBarText</code>-Vordergrundfarbe verwendet werden.</td>
      <td><code>Canvas</code></td>
      <td style="background-color: Menu;"></td>
    </tr>
    <tr>
      <td><code>MenuText</code></td>
      <td>Text in Menüs. Sollte mit der <code>Menu</code>-Hintergrundfarbe verwendet werden.</td>
      <td><code>CanvasText</code></td>
      <td style="background-color: MenuText;"></td>
    </tr>
    <tr>
      <td><code>Scrollbar</code></td>
      <td>Hintergrundfarbe von Rollbalken.</td>
      <td><code>Canvas</code></td>
      <td style="background-color: Scrollbar;"></td>
    </tr>
    <tr>
      <td><code>ThreeDDarkShadow</code></td>
      <td>Die Farbe der dunkleren (meist äußeren) der zwei Begrenzungen, die von der Lichtquelle für 3-D-Elemente abgewandt sind, die durch zwei konzentrische Schichten von Umrandungen dreidimensional erscheinen.</td>
      <td><code>ButtonBorder</code></td>
      <td style="background-color: ThreeDDarkShadow;"></td>
    </tr>
    <tr>
      <td><code>ThreeDFace</code></td>
      <td>Die Vordergrund-Hintergrundfarbe für 3-D-Elemente, die durch zwei konzentrische Schichten von Umrandungen dreidimensional erscheinen. Sollte mit der <code>ButtonText</code> Vordergrundfarbe verwendet werden.</td>
      <td><code>ButtonFace</code></td>
      <td style="background-color: ThreeDFace;"></td>
    </tr>
    <tr>
      <td><code>ThreeDHighlight</code></td>
      <td>Die Farbe der helleren (meist äußeren) der zwei Begrenzungen, die der Lichtquelle zugewandt sind, für 3-D-Elemente, die durch zwei konzentrische Schichten von Umrandungen dreidimensional erscheinen.</td>
      <td><code>ButtonBorder</code></td>
      <td style="background-color: ThreeDHighlight;"></td>
    </tr>
    <tr>
      <td><code>ThreeDLightShadow</code></td>
      <td>Die Farbe der dunkleren (meist inneren) der zwei Begrenzungen, die der Lichtquelle zugewandt sind, für 3-D-Elemente, die durch zwei konzentrische Schichten von Umrandungen dreidimensional erscheinen.</td>
      <td><code>ButtonBorder</code></td>
      <td style="background-color: ThreeDLightShadow;"></td>
    </tr>
    <tr>
      <td><code>ThreeDShadow</code></td>
      <td>Die Farbe der helleren (meist inneren) der zwei Begrenzungen, die von der Lichtquelle für 3-D-Elemente abgewandt sind, die durch zwei konzentrische Schichten von Umrandungen dreidimensional erscheinen.</td>
      <td><code>ButtonBorder</code></td>
      <td style="background-color: ThreeDShadow;"></td>
    </tr>
    <tr>
      <td><code>Window</code></td>
      <td>Fensterhintergrund. Sollte mit der <code>WindowText</code>-Vordergrundfarbe verwendet werden.</td>
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
      <td>Text in Fenstern. Sollte mit der <code>Window</code>-Hintergrundfarbe verwendet werden.</td>
      <td><code>CanvasText</code></td>
      <td style="background-color: WindowText;"></td>
    </tr>
  </tbody>
</table>

## Beispiele

### Verwendung von Systemfarben

In diesem Beispiel haben wir einen Button, der normalerweise seinen Kontrast mithilfe der {{cssxref("box-shadow")}}-Eigenschaft erhält. Im gedrängten Farbenmodus wird `box-shadow` auf `none` gesetzt, daher wird das `forced-colors`-Media-Feature verwendet, um sicherzustellen, dass es einen Rand der entsprechenden Farbe gibt (in diesem Fall `ButtonBorder`).

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

- {{cssxref("&lt;color&gt;")}}: der Datentyp, zu dem diese Schlüsselwörter gehören
