---
title: cursor
slug: Web/CSS/cursor
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{CSSRef}}

Die **`cursor`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt den Mauscursor fest, der angezeigt werden soll, wenn der Mauszeiger über ein Element fährt.

Die Cursor-Einstellung sollte die Benutzer über die Mausaktionen informieren, die an der aktuellen Position durchgeführt werden können, einschließlich: Textauswahl, Aktivierung von Hilfe- oder Kontextmenüs, Kopieren von Inhalten, Anpassen der Größe von Tabellen und so weiter. Sie können entweder den _Typ_ des Cursors mit einem Schlüsselwort angeben oder ein spezifisches Symbol laden, das verwendet werden soll (mit optionalen Fallback-Bildern und einem obligatorischen Schlüsselwort als endgültigem Fallback).

{{EmbedInteractiveExample("pages/css/cursor.html")}}

## Syntax

```css
/* Keyword value */
cursor: auto;
cursor: pointer;
/* … */
cursor: zoom-out;

/* URL with mandatory keyword fallback */
cursor: url(hand.cur), pointer;

/* URL and coordinates, with mandatory keyword fallback */
cursor:
  url(cursor_1.png) 4 12,
  auto;
cursor:
  url(cursor_2.png) 2 2,
  pointer;

/* URLs and fallback URLs (some with coordinates), with mandatory keyword fallback */
cursor:
  url(cursor_1.svg) 4 5,
  url(cursor_2.svg),
  /* …, */ url(cursor_n.cur) 5 5,
  progress;

/* Global values */
cursor: inherit;
cursor: initial;
cursor: revert;
cursor: revert-layer;
cursor: unset;
```

Die `cursor`-Eigenschaft wird als null oder mehr `<url>`-Werte angegeben, getrennt durch Kommas, gefolgt von einem einzelnen obligatorischen Schlüsselwortwert. Jede `<url>` sollte auf eine Bilddatei verweisen. Der Browser versucht, das erste angegebene Bild zu laden, fällt zurück auf das nächste, wenn dies nicht möglich ist, und verwendet den Schlüsselwortwert als Fallback, wenn keine Bilder geladen werden konnten (oder keine angegeben wurden).

Jede `<url>` kann optional von einem Paar durch Leerzeichen getrennten Zahlen gefolgt werden, die die `<x>`- und `<y>`-Koordinaten des Cursors-Hotspots relativ zur oberen linken Ecke des Bildes festlegen.

### Werte

- `<url>` {{optional_inline}}
  - : Ein `url()` oder eine durch Kommas getrennte Liste `url(), url(), …`, die auf eine Bilddatei verweist. Mehr als ein {{cssxref("url_value", "&lt;url&gt;")}} kann als Fallback angegeben werden, falls einige Cursorbildtypen nicht unterstützt werden. Ein nicht-URL-Fallback (einer oder mehrere der Schlüsselwortwerte) _muss_ am Ende der Fallback-Liste stehen.
- `<x>`, `<y>` {{optional_inline}}

  - : Optionale x- und y-Koordinaten, die den Cursor-Hotspot angeben; die genaue Position innerhalb des Cursors, auf die gezeigt wird.

    Die Zahlen sind in Einheiten von Bildpixeln. Sie sind relativ zur oberen linken Ecke des Bildes, die `0 0` entspricht, und sind innerhalb der Grenzen des Cursors-Bildes eingeschränkt. Wenn diese Werte nicht angegeben sind, können sie aus der Datei selbst gelesen werden und sind andernfalls standardmäßig in der oberen linken Ecke des Bildes.

- `keyword`

  - : Ein Schlüsselwert _muss_ angegeben werden, der entweder den zu verwendenden Cursor-Typ oder den Fallback-Cursor angibt, falls alle angegebenen Symbole nicht geladen werden können.

    Die verfügbaren Schlüsselwörter sind in der folgenden Tabelle aufgeführt. Andere als `none`, was keinen Cursor bedeutet, gibt es ein Bild, das zeigt, wie die Cursor früher gerendert wurden. Sie können mit Ihrer Maus über die Tabellenreihen fahren, um den Effekt der verschiedenen Cursor-Schlüsselwortwerte in Ihrem Browser heute zu sehen.

    <table class="standard-table">
      <thead>
        <tr>
          <th scope="col">Kategorie</th>
          <th scope="col">Schlüsselwort</th>
          <th scope="col">Beispiel</th>
          <th scope="col">Beschreibung</th>
        </tr>
      </thead>
      <tbody>
        <tr style="cursor: auto">
          <th rowspan="3" scope="row">Allgemein</th>
          <td><code>auto</code></td>
          <td></td>
          <td>Das UA bestimmt den anzuzeigenden Cursor basierend auf dem aktuellen Kontext. Z. B. äquivalent zu <code>text</code>, wenn über Text gefahren wird.</td>
        </tr>
        <tr style="cursor: default">
          <td><code>default</code></td>
          <td><img src="default.gif" alt="breiter Pfeil, der nach oben und nach links zeigt" /></td>
          <td>Der plattformabhängige Standard-Cursor. Typischerweise ein Pfeil.</td>
        </tr>
        <tr style="cursor: none">
          <td><code>none</code></td>
          <td></td>
          <td>Es wird kein Cursor angezeigt.</td>
        </tr>
        <tr style="cursor: context-menu">
          <th rowspan="5" scope="row" style="cursor: auto">Links &amp; Status</th>
          <td><code>context-menu</code></td>
          <td><img alt="breiter Pfeil, der nach oben und nach links zeigt und ein Menü-Symbol leicht verdeckt" src="context-menu.png" /></td>
          <td>Ein Kontextmenü ist verfügbar.</td>
        </tr>
        <tr style="cursor: help">
          <td><code>help</code></td>
          <td><img src="help.gif" alt="breiter Pfeil, der nach oben und nach links zeigt, neben einem Fragezeichen" /></td>
          <td>Hilfeinformationen sind verfügbar.</td>
        </tr>
        <tr style="cursor: pointer">
          <td><code>pointer</code></td>
          <td><img src="pointer.gif" alt="rechte Hand mit einem nach oben zeigenden Zeigefinger" /></td>
          <td>Der Cursor ist ein Zeiger, der einen Link anzeigt. Typischerweise ein Bild einer zeigenden Hand.</td>
        </tr>
        <tr style="cursor: progress">
          <td><code>progress</code></td>
          <td><img src="progress.gif" alt="breiter Pfeil und Sanduhr" /></td>
          <td>Das Programm ist im Hintergrund beschäftigt, aber der Benutzer kann noch mit der Benutzeroberfläche interagieren (im Gegensatz zu <code>wait</code>).</td>
        </tr>
        <tr style="cursor: wait">
          <td><code>wait</code></td>
          <td><img src="wait.gif" alt="Sanduhr" /></td>
          <td>Das Programm ist beschäftigt, und der Benutzer kann nicht mit der Benutzeroberfläche interagieren (im Gegensatz zu <code>progress</code>). Manchmal ein Bild einer Sanduhr oder einer Uhr.</td>
        </tr>
        <tr style="cursor: cell">
          <th rowspan="4" scope="row" style="cursor: auto">Auswahl</th>
          <td><code>cell</code></td>
          <td><img src="cell.gif" alt="breites Pluszeichen" /></td>
          <td>Die Tabellenzelle oder der Satz von Zellen kann ausgewählt werden.</td>
        </tr>
        <tr style="cursor: crosshair">
          <td><code>crosshair</code></td>
          <td><img src="crosshair.gif" alt="Pluszeichen, bestehend aus zwei dünnen Linien." /></td>
          <td>Kreuz-Cursor, häufig verwendet, um die Auswahl in einem Bitmap anzuzeigen.</td>
        </tr>
        <tr style="cursor: text">
          <td><code>text</code></td>
          <td><img class="default" src="text.gif" alt="vertikaler I-Balken" /></td>
          <td>Der Text kann ausgewählt werden. Typischerweise die Form eines I-Balkens.</td>
        </tr>
        <tr style="cursor: vertical-text">
          <td><code>vertical-text</code></td>
          <td><img alt="horizontaler I-Balken" src="vertical-text.gif" /></td>
          <td>Der vertikale Text kann ausgewählt werden. Typischerweise die Form eines seitwärts liegenden I-Balkens.</td>
        </tr>
        <tr style="cursor: alias">
          <th rowspan="7" scope="row" style="cursor: auto">Ziehen &amp; Ablegen</th>
          <td><code>alias</code></td>
          <td><img src="alias.gif" alt="breiter Pfeil, der nach oben und nach links zeigt und teilweise ein kleineres Ordnersymbol mit einem nach oben und nach rechts zeigenden gebogenen Pfeil verdeckt"/></td>
          <td>Ein Alias oder Verknüpfung soll erstellt werden.</td>
        </tr>
        <tr style="cursor: copy">
          <td><code>copy</code></td>
          <td><img class="default" src="copy.gif" alt="breiter Pfeil, der nach oben und nach links zeigt und teilweise ein kleineres Ordnersymbol mit einem Pluszeichen verdeckt" /></td>
          <td>Etwas soll kopiert werden.</td>
        </tr>
        <tr style="cursor: move">
          <td><code>move</code></td>
          <td><img src="move.gif" alt="Pluszeichen bestehend aus zwei dünnen Linien. Die vier Punkte sind kleine Pfeile, die nach außen zeigen" /></td>
          <td>Etwas soll verschoben werden.</td>
        </tr>
        <tr style="cursor: no-drop">
          <td><code>no-drop</code></td>
          <td>
            <img src="no-drop.gif" alt="Zeiger-Icon und ein Nicht erlaubt-Icon" />
          </td>
          <td>
            Ein Element darf an der aktuellen Position nicht abgelegt werden.<br /><a href="https://bugzil.la/275173">Firefox-Bug 275173</a>: Unter Windows und macOS ist <code>no-drop</code> dasselbe wie <code>not-allowed</code>.
          </td>
        </tr>
        <tr style="cursor: not-allowed">
          <td><code>not-allowed</code></td>
          <td><img alt="Nicht erlaubtes Symbol, ein Kreis mit einem durchgezogenen Strich" src="not-allowed.gif" /></td>
          <td>Die angeforderte Aktion wird nicht durchgeführt.</td>
        </tr>
        <tr style="cursor: grab">
          <td><code>grab</code></td>
          <td><img class="default" src="grab.gif" alt="vollständig geöffnetes Hand-Icon" /></td>
          <td>Etwas kann erfasst (zum Verschieben gezogen) werden.</td>
        </tr>
        <tr style="cursor: grabbing">
          <td><code>grabbing</code></td>
          <td><img class="default" src="grabbing.gif" alt="geschlossenes Hand-Icon, von der Rückseite der Hand"/></td>
          <td>Etwas wird erfasst (zum Verschieben gezogen).</td>
        </tr>
        <tr style="cursor: all-scroll">
          <th rowspan="15" scope="row" style="cursor: auto">
            Größenänderung &amp; Scrollen
          </th>
          <td><code>all-scroll</code></td>
          <td><img alt="Icon eines mittelgroßen Punkts mit vier Dreiecken darum." src="all-scroll.gif" /></td>
          <td>
            Etwas kann in jeder Richtung gescrollt werden (schwenken).<br /><a href="https://bugzil.la/275174">Firefox-Bug 275174</a>: Unter Windows ist <code>all-scroll</code> dasselbe wie <code>move</code>.
          </td>
        </tr>
        <tr style="cursor: col-resize">
          <td><code>col-resize</code></td>
          <td><img alt="col-resize.gif" src="col-resize.gif" alt="zwei schmale parallele vertikale Linien mit einem kleinen Pfeil, der nach links zeigt und ein weiterer, der nach rechts zeigt" /></td>
          <td>
            Das Element/Spalte kann horizontal geändert werden. Oft dargestellt als Pfeile, die nach links und rechts zeigen, mit einer vertikalen Trennleiste dazwischen.
          </td>
        </tr>
        <tr style="cursor: row-resize">
          <td><code>row-resize</code></td>
          <td><img src="row-resize.gif" alt="zwei schmale parallele horizontale Linien mit einem kleinen Pfeil, der nach oben zeigt, und ein weiterer, der nach unten zeigt" /></td>
          <td>
            Das Element/Reihe kann vertikal geändert werden. Oft dargestellt als Pfeile, die nach oben und unten zeigen, mit einer horizontalen Trennleiste dazwischen.
          </td>
        </tr>
        <tr style="cursor: n-resize">
          <td><code>n-resize</code></td>
          <td>
            <img
              alt="dünner langer Pfeil, der nach oben zeigt"
              src="n-resize.gif"
              style="border-style: solid; border-width: 0px"
            />
          </td>
          <td rowspan="8" style="cursor: auto">
            Ein Rand soll verschoben werden. Zum Beispiel wird der <code>se-resize</code>-Cursor verwendet, wenn die Bewegung von der <em>süd-östlichen</em> Ecke des Kastens ausgeht.<br />
            In einigen Umgebungen wird ein äquivalenter bidirektionaler Größenänderungs-Cursor angezeigt. Zum Beispiel sind <code>n-resize</code> und <code>s-resize</code> dasselbe wie <code>ns-resize</code>.
          </td>
        </tr>
        <tr style="cursor: e-resize">
          <td><code>e-resize</code></td>
          <td>
            <img
              alt="dünner langer Pfeil, der nach rechts zeigt"
              src="e-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: s-resize">
          <td><code>s-resize</code></td>
          <td>
            <img
              alt="dünner langer Pfeil, der nach unten zeigt"
              src="s-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: w-resize">
          <td><code>w-resize</code></td>
          <td>
            <img
              alt="dünner langer Pfeil, der nach links zeigt"
              src="w-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: ne-resize">
          <td><code>ne-resize</code></td>
          <td>
            <img
              alt="dünner langer Pfeil, der nach oben-rechts zeigt"
              src="ne-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: nw-resize">
          <td><code>nw-resize</code></td>
          <td>
            <img
              alt="dünner langer Pfeil, der nach oben-links zeigt"
              src="nw-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: se-resize">
          <td><code>se-resize</code></td>
          <td>
            <img
              alt="dünner langer Pfeil, der nach unten-rechts zeigt"
              src="se-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: sw-resize">
          <td><code>sw-resize</code></td>
          <td>
            <img
              alt="dünner langer Pfeil, der nach unten-links zeigt"
              src="sw-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: ew-resize">
          <td><code>ew-resize</code></td>
          <td><img alt="dünner langer Pfeil, der nach links und rechts zeigt" class="default" src="3-resize.gif" /></td>
          <td rowspan="4" style="cursor: auto">Bidirektionale Größenänderungs-Cursor.</td>
        </tr>
        <tr style="cursor: ns-resize">
          <td><code>ns-resize</code></td>
          <td><img alt="dünner langer Pfeil, der nach oben und unten zeigt" class="default" src="6-resize.gif" /></td>
        </tr>
        <tr style="cursor: nesw-resize">
          <td><code>nesw-resize</code></td>
          <td><img alt="dünner langer Pfeil, der sowohl nach oben-rechts als auch unten-links zeigt" class="default" src="1-resize.gif" /></td>
        </tr>
        <tr style="cursor: nwse-resize">
          <td><code>nwse-resize</code></td>
          <td><img alt="dünner langer Pfeil, der sowohl nach oben-links als auch unten-rechts zeigt" class="default" src="4-resize.gif" /></td>
        </tr>
        <tr style="cursor: zoom-in">
          <th rowspan="2" scope="row" style="cursor: auto">Zoomen</th>
          <td><code>zoom-in</code></td>
          <td><img alt="Lupe mit einem Pluszeichen" class="default" src="zoom-in.gif" /></td>
          <td rowspan="2" style="cursor: auto">
            <p>Etwas kann vergrößert oder verkleinert werden.</p>
          </td>
        </tr>
        <tr style="cursor: zoom-out">
          <td><code>zoom-out</code></td>
          <td><img alt="Lupe mit einem Minuszeichen" class="default" src="zoom-out.gif" /></td>
        </tr>
      </tbody>
    </table>

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Anwendungsnotizen

### Symbolgrößenbeschränkungen

Obwohl die Spezifikation die Größe des `cursor`-Bildes nicht begrenzt, beschränken {{Glossary("user_agent", "User Agents")}} diese häufig, um potenziellen Missbrauch zu vermeiden. Zum Beispiel sind in Firefox und Chromium-Cursorbilder standardmäßig auf 128x128 Pixel beschränkt, aber es wird empfohlen, die Cursorbildgröße auf 32x32 Pixel zu beschränken. Cursoränderungen mit Bildern, die größer sind als die von den User Agents maximal unterstützte Größe, werden in der Regel einfach ignoriert.

### Unterstützte Bilddateiformate

Laut Spezifikation müssen User Agents PNG-Dateien, SVG v1.1-Dateien im sicheren statischen Modus, die eine natürliche Größe enthalten, und alle anderen nicht animierten Bilddateiformate unterstützen, die sie auch für Bilder in anderen Eigenschaften unterstützen. Desktop-Browser unterstützen auch generell das `.cur`-Dateiformat.

Die Spezifikation gibt ferner an, dass User Agents _auch_ SVG v1.1-Dateien im sicheren animierten Modus unterstützen _sollten_, die eine natürliche Größe enthalten, zusammen mit allen anderen animierten Bilddateiformaten, die sie für Bilder in anderen Eigenschaften unterstützen. User Agents _könnten_ sowohl statische als auch animierte SVG-Bilder unterstützen, die keine natürliche Größe enthalten.

### iPadOS

iPadOS unterstützt Zeigegeräte wie Trackpads und Mäuse. Standardmäßig wird der iPad-Cursor als Kreis angezeigt, und der einzige unterstützte Wert, der das Erscheinungsbild des Zeigers ändert, ist `text`.

### Weitere Hinweise

Cursoränderungen, die mit Symbolleistenbereichen überschneiden, werden häufig blockiert, um Phishing zu vermeiden.

## Beispiele

### Einstellen von Cursortypen

```css
.foo {
  cursor: crosshair;
}

.bar {
  cursor: zoom-in;
}

/* A fallback keyword value is required when using a URL */
.baz {
  cursor: url("hyper.cur"), auto;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("pointer-events")}}
- {{cssxref("url_value", "&lt;url&gt;")}} Typ
