---
title: "`<system-color>` CSS-Typ"
short-title: <system-color>
slug: Web/CSS/Reference/Values/system-color
l10n:
  sourceCommit: 4d49c28381a2b736e205215b75388945e44a028c
---

Der **`<system-color>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) spiegelt normalerweise die Standardfarbenauswahl wider, die für die verschiedenen Teile einer Webseite verwendet wird.

Benutzeragenten können jedoch eine Barrierefreiheitsfunktion namens _erzwungener Farbmodus_ bereitstellen, in welchem die Farben auf eine vom Benutzer und Benutzeragenten definierte Palette beschränkt werden und die Farbauswahl des Autors bei bestimmten Eigenschaften überschreiben. Im erzwungenen Farbmodus gibt `<system-color>` die ausgewählten Farben an, damit der Rest der Seite sich anpassen kann. Ein Beispiel für den erzwungenen Farbmodus ist der [hohe Kontrastmodus in Windows](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/).

Im erzwungenen Farbmodus sollten Autoren Farben vom Typ `<system-color>` für alle Eigenschaften verwenden, die _nicht_ zu den Eigenschaften gehören, deren Farben überschrieben werden. Dies stellt sicher, dass die Seite konsistent die gleiche Farbpalette über alle Eigenschaften hinweg verwendet.

Autoren können den erzwungenen Farbmodus mit dem [`forced-colors`](/de/docs/Web/CSS/Reference/At-rules/@media/forced-colors) Medienmerkmal erkennen.

Ein `<system-color>` Wert kann überall verwendet werden, wo ein {{cssxref("&lt;color&gt;")}} verwendet werden kann.

## Syntax

Beachten Sie, dass diese Schlüsselwörter _nicht_ zwischen Groß- und Kleinschreibung unterscheiden, hier jedoch zur besseren Lesbarkeit in gemischter Schreibweise aufgeführt sind.

Je nach Ihren Einstellungen können sich die in der Tabelle angezeigten Beispiel- farben ändern. Sie können diese Seite auch in verschiedenen Browsern, Betriebssystemen und Systemeinstellungen anzeigen, um die Unterschiede zu überprüfen.

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
      <td>Hintergrund von hervorgehobenen Benutzeroberflächen-Steuerelementen.</td>
      <td style="background-color: AccentColor;"></td>
    </tr>
    <tr>
      <td><code>AccentColorText</code></td>
      <td>Text von hervorgehobenen Benutzeroberflächen-Steuerelementen.</td>
      <td style="background-color: AccentColorText;"></td>
    </tr>
    <tr>
      <td><code>ActiveText</code></td>
      <td>Text von aktiven Links.</td>
      <td style="background-color: ActiveText;"></td>
    </tr>
    <tr>
      <td><code>ButtonBorder</code></td>
      <td>Grundfarbe der Rahmen von Steuerelementen.</td>
      <td style="background-color: ButtonBorder;"></td>
    </tr>
    <tr>
      <td><code>ButtonFace</code></td>
      <td>Hintergrundfarbe der Steuerelemente.</td>
      <td style="background-color: ButtonFace;"></td>
    </tr>
    <tr>
      <td><code>ButtonText</code></td>
      <td>Textfarbe der Steuerelemente.</td>
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
      <td>Hintergrund von speziell markiertem Text (wie durch das HTML-Element <code>mark</code>).</td>
      <td style="background-color: Mark;"></td>
    </tr>
    <tr>
      <td><code>MarkText</code></td>
      <td>Speziell markierter Text (wie durch das HTML-Element <code>mark</code>).</td>
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

> [!NOTE]
> Um das Risiko von {{Glossary("fingerprinting", "Fingerprinting")}} zu reduzieren, geben einige Browser einen festen Wert für `AccentColor` und `AccentColorText` zurück, es sei denn, sie werden in bestimmten eingeschränkten Umständen verwendet. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Details.

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
      <td>Aktiver Fensterrahmen</td>
      <td><code>ButtonBorder</code></td>
      <td style="background-color: ActiveBorder;"></td>
    </tr>
    <tr>
      <td><code>ActiveCaption</code></td>
      <td>Aktive Fensterüberschrift. Sollte mit <code>CaptionText</code> als Vordergrundfarbe verwendet werden.</td>
      <td><code>Canvas</code></td>
      <td style="background-color: ActiveCaption;"></td>
    </tr>
    <tr>
      <td><code>AppWorkspace</code></td>
      <td>Hintergrundfarbe der Mehrdokumenten-Oberfläche.</td>
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
      <td>Die Farbe des Randes, der zur Lichtquelle ausgerichtet ist, bei 3D-Elementen, die durch diese Umrandschicht 3D erscheinen.</td>
      <td><code>ButtonFace</code></td>
      <td style="background-color: ButtonHighlight;"></td>
    </tr>
    <tr>
      <td><code>ButtonShadow</code></td>
      <td>Die Farbe des Randes, der von der Lichtquelle weg ausgerichtet ist, bei 3D-Elementen, die durch diese Umrandschicht 3D erscheinen.</td>
      <td><code>ButtonFace</code></td>
      <td style="background-color: ButtonShadow;"></td>
    </tr>
    <tr>
      <td><code>CaptionText</code></td>
      <td>Text in der Überschrift, Größenbox und Pfeilbox der Bildlaufleiste. Sollte mit der <code>ActiveCaption</code> Hintergrundfarbe verwendet werden.</td>
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
      <td>Inaktive Fensterüberschrift. Sollte mit der <code>InactiveCaptionText</code> Vordergrundfarbe verwendet werden.</td>
      <td><code>Canvas</code></td>
      <td style="background-color: InactiveCaption;"></td>
    </tr>
    <tr>
      <td><code>InactiveCaptionText</code></td>
      <td>Farbe des Textes in einer inaktiven Überschrift. Sollte mit der <code>InactiveCaption</code> Hintergrundfarbe verwendet werden.</td>
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
      <td>Menühintergrund. Sollte mit der <code>MenuText</code> oder <code>-moz-MenuBarText</code> Vordergrundfarbe verwendet werden.</td>
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
      <td>Hintergrundfarbe der Bildlaufleisten.</td>
      <td><code>Canvas</code></td>
      <td style="background-color: Scrollbar;"></td>
    </tr>
    <tr>
      <td><code>ThreeDDarkShadow</code></td>
      <td>Die Farbe des dunkleren (allgemein äußeren) der zwei Ränder, die von der Lichtquelle weggerichtet sind, bei 3D-Elementen, die durch zwei konzentrische Umrandschichten 3D erscheinen.</td>
      <td><code>ButtonBorder</code></td>
      <td style="background-color: ThreeDDarkShadow;"></td>
    </tr>
    <tr>
      <td><code>ThreeDFace</code></td>
      <td>Die Vordergrund-Farbe für 3D-Elemente, die durch zwei konzentrische Umrandschichten 3D erscheinen. Sollte mit der <code>ButtonText</code> Vordergrundfarbe verwendet werden.</td>
      <td><code>ButtonFace</code></td>
      <td style="background-color: ThreeDFace;"></td>
    </tr>
    <tr>
      <td><code>ThreeDHighlight</code></td>
      <td>Die Farbe des helleren (allgemein äußeren) der zwei Ränder, die zur Lichtquelle ausgerichtet sind, bei 3D-Elementen, die durch zwei konzentrische Umrandschichten 3D erscheinen.</td>
      <td><code>ButtonBorder</code></td>
      <td style="background-color: ThreeDHighlight;"></td>
    </tr>
    <tr>
      <td><code>ThreeDLightShadow</code></td>
      <td>Die Farbe des dunkleren (allgemein inneren) der zwei Ränder, die zur Lichtquelle ausgerichtet sind, bei 3D-Elementen, die durch zwei konzentrische Umrandschichten 3D erscheinen.</td>
      <td><code>ButtonBorder</code></td>
      <td style="background-color: ThreeDLightShadow;"></td>
    </tr>
    <tr>
      <td><code>ThreeDShadow</code></td>
      <td>Die Farbe des helleren (allgemein inneren) der zwei Ränder, die von der Lichtquelle weggerichtet sind, bei 3D-Elementen, die durch zwei konzentrische Umrandschichten 3D erscheinen.</td>
      <td><code>ButtonBorder</code></td>
      <td style="background-color: ThreeDShadow;"></td>
    </tr>
    <tr>
      <td><code>Window</code></td>
      <td>Fensterhintergrund. Sollte mit der <code>WindowText</code> Vordergrundfarbe verwendet werden.</td>
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

In diesem Beispiel haben wir einen Button, der normalerweise seinen Kontrast mithilfe der {{cssxref("box-shadow")}} Eigenschaft erhält. Im erzwungenen Farbmodus wird `box-shadow` erzwungenermaßen auf `none` gesetzt, daher verwendet das Beispiel das `forced-colors` Medienmerkmal, um sicherzustellen, dass es eine Umrandung der entsprechenden Farbe gibt (in diesem Fall `ButtonBorder`).

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
