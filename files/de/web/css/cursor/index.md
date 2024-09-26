---
title: Cursor
slug: Web/CSS/cursor
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

Die **`cursor`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt den Mauszeiger fest, der angezeigt werden soll, wenn sich der Mauszeiger über einem Element befindet.

Die Cursor-Einstellung sollte Benutzer über die Mausoperationen informieren, die an der aktuellen Position ausgeführt werden können, einschließlich: Textauswahl, Aktivierung von Hilfe- oder Kontextmenüs, Kopieren von Inhalten, Ändern der Größe von Tabellen usw. Sie können entweder den _Typ_ des Cursors mithilfe eines Schlüsselworts angeben oder ein spezifisches Symbol laden (mit optionalen Fallback-Bildern und einem obligatorischen Schlüsselwort als endgültigem Fallback).

{{EmbedInteractiveExample("pages/css/cursor.html")}}

## Syntax

```css
/* Keyword-Wert */
cursor: auto;
cursor: pointer;
/* … */
cursor: zoom-out;

/* URL mit obligatorischem Keyword-Fallback */
cursor: url(hand.cur), pointer;

/* URL und Koordinaten, mit obligatorischem Keyword-Fallback */
cursor:
  url(cursor_1.png) 4 12,
  auto;
cursor:
  url(cursor_2.png) 2 2,
  pointer;

/* URLs und Fallback-URLs (einige mit Koordinaten), mit obligatorischem Keyword-Fallback */
cursor:
  url(cursor_1.svg) 4 5,
  url(cursor_2.svg),
  /* …, */ url(cursor_n.cur) 5 5,
  progress;

/* Globale Werte */
cursor: inherit;
cursor: initial;
cursor: revert;
cursor: revert-layer;
cursor: unset;
```

Die `cursor`-Eigenschaft wird als null oder mehr `<url>`-Werte angegeben, die durch Kommata getrennt sind, gefolgt von einem einzelnen obligatorischen Schlüsselwort. Jedes `<url>` sollte auf eine Bilddatei verweisen. Der Browser wird versuchen, das erste angegebene Bild zu laden, und auf das nächste zurückgreifen, wenn dieses nicht geladen werden kann, sowie auf den Schlüsselwortwert zurückgreifen, wenn keine Bilder geladen werden konnten (oder wenn keine angegeben wurden).

Jedes `<url>` kann optional von einem Paar aus Leerzeichen getrennten Zahlen gefolgt werden, die die `<x>`- und `<y>`-Koordinaten des Hotspots des Cursors relativ zur oberen linken Ecke des Bildes festlegen.

### Werte

- `<url>` {{optional_inline}}
  - : Ein `url()` oder eine kommaseparierte Liste `url(), url(), …`, die auf eine Bilddatei verweist. Mehr als ein {{cssxref("url_value", "&lt;url&gt;")}} kann als Fallbacks angegeben werden, falls einige Cursor-Bildtypen nicht unterstützt werden. Ein Nicht-URL-Fallback (einer oder mehrere der Schlüsselwortwerte) _muss_ am Ende der Fallback-Liste stehen.
- `<x>`, `<y>` {{optional_inline}}

  - : Optionale x- und y-Koordinaten, die den Hotspot des Cursors angeben; die genaue Position innerhalb des Cursors, auf die gezeigt wird.

    Die Zahlen sind in Einheiten von Bildpunkten. Sie sind relativ zur oberen linken Ecke des Bildes, was "`0 0`" entspricht, und werden innerhalb der Grenzen des Cursorbildes eingegrenzt. Wenn diese Werte nicht angegeben sind, können sie aus der Datei selbst gelesen werden und andernfalls standardmäßig auf die obere linke Ecke des Bildes festgelegt werden.

- `keyword`

  - : Ein Schlüsselwortwert _muss_ angegeben werden, um entweder den zu verwendenden Kurstyp oder den Fallback-Cursor anzugeben, wenn alle angegebenen Symbole nicht geladen werden.

    Die verfügbaren Schlüsselwörter sind in der Tabelle unten aufgeführt. Abgesehen von `none`, was bedeutet, dass kein Cursor angezeigt wird, gibt es ein Bild, das zeigt, wie die Cursor früher gerendert wurden. Sie können mit der Maus über die Tabellenzeilen fahren, um die Wirkung der verschiedenen Schlüsselwort-Cursor-Werte in Ihrem Browser heute zu sehen.

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
          <td>
            Der UA bestimmt den anzuzeigenden Cursor basierend auf dem aktuellen Kontext. Z. B. entspricht <code>text</code> beim Überfahren von Text.
          </td>
        </tr>
        <tr style="cursor: default">
          <td><code>default</code></td>
          <td><img src="default.gif" alt="breiter Pfeil, der nach oben und links zeigt" /></td>
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
          <td><img alt="breiter Pfeil, der nach oben und links zeigt und ein Menüsymbol leicht verdeckt" src="context-menu.png" /></td>
          <td>Ein Kontextmenü ist verfügbar.</td>
        </tr>
        <tr style="cursor: help">
          <td><code>help</code></td>
          <td><img src="help.gif" alt="breiter Pfeil, der nach oben und links zeigt neben einem Fragezeichen" /></td>
          <td>Hilfsinformationen sind verfügbar.</td>
        </tr>
        <tr style="cursor: pointer">
          <td><code>pointer</code></td>
          <td><img src="pointer.gif" alt="rechte Hand mit einem nach oben zeigenden Zeigefinger" /></td>
          <td>
            Der Cursor ist ein Zeiger, der auf einen Link hinweist. Typischerweise ein Bild einer zeigenden Hand.
          </td>
        </tr>
        <tr style="cursor: progress">
          <td><code>progress</code></td>
          <td><img src="progress.gif" alt="breiter Pfeil und Sanduhr" /></td>
          <td>
            Das Programm ist im Hintergrund beschäftigt, aber der Benutzer kann weiterhin mit der Oberfläche interagieren (im Gegensatz zu <code>wait</code>).
          </td>
        </tr>
        <tr style="cursor: wait">
          <td><code>wait</code></td>
          <td><img src="wait.gif" alt="Sanduhr" /></td>
          <td>
            Das Programm ist beschäftigt und der Benutzer kann nicht mit der Oberfläche interagieren (im Gegensatz zu <code>progress</code>).
            Manchmal ein Bild einer Sanduhr oder einer Uhr.
          </td>
        </tr>
        <tr style="cursor: cell">
          <th rowspan="4" scope="row" style="cursor: auto">Auswahl</th>
          <td><code>cell</code></td>
          <td><img src="cell.gif" alt="breites Plus-Symbol" /></td>
          <td>Die Tabellenzelle oder der Satz von Zellen kann ausgewählt werden.</td>
        </tr>
        <tr style="cursor: crosshair">
          <td><code>crosshair</code></td>
          <td><img src="crosshair.gif" alt="Plus-Symbol bestehend aus zwei dünnen Linien." /></td>
          <td>Kreuzcursor, häufig verwendet, um eine Auswahl in einem Bitmap anzuzeigen.</td>
        </tr>
        <tr style="cursor: text">
          <td><code>text</code></td>
          <td><img class="default" src="text.gif" alt="vertikaler I-Balken" /></td>
          <td>Der Text kann ausgewählt werden. Typischerweise die Form eines I-Balkens.</td>
        </tr>
        <tr style="cursor: vertical-text">
          <td><code>vertical-text</code></td>
          <td><img alt="horizontaler I-Balken" src="vertical-text.gif" /></td>
          <td>
            Der vertikale Text kann ausgewählt werden. Typischerweise die Form eines seitlichen I-Balkens.
          </td>
        </tr>
        <tr style="cursor: alias">
          <th rowspan="7" scope="row" style="cursor: auto">Ziehen &amp; Ablegen</th>
          <td><code>alias</code></td>
          <td><img src="alias.gif" alt="breiter Pfeil, der nach oben und links zeigt, einen kleineren Ordnersymbol mit einem nach oben und rechts zeigenden gebogenen Pfeil teilweise verdeckend"/></td>
          <td>Ein Alias oder eine Verknüpfung soll erstellt werden.</td>
        </tr>
        <tr style="cursor: copy">
          <td><code>copy</code></td>
          <td><img class="default" src="copy.gif" alt="breiter Pfeil, der nach oben und links zeigt, einen kleineren Ordnersymbol mit einem Pluszeichen teilweise verdeckend" /></td>
          <td>Etwas soll kopiert werden.</td>
        </tr>
        <tr style="cursor: move">
          <td><code>move</code></td>
          <td><img src="move.gif" alt="Pluszeichen aus zwei dünnen Linien. Die vier Punkte sind kleine Pfeile, die nach außen zeigen" /></td>
          <td>Etwas soll verschoben werden.</td>
        </tr>
        <tr style="cursor: no-drop">
          <td><code>no-drop</code></td>
          <td>
            <img src="no-drop.gif" alt="Zeigersymbol und ein Verbotssymbol" />
          </td>
          <td>
            Ein Element darf an der aktuellen Position nicht abgelegt werden.<br /><a href="https://bugzil.la/275173">Firefox Bug 275173</a>:
            Unter Windows und macOS ist <code>no-drop</code> dasselbe wie <code>not-allowed</code>.
          </td>
        </tr>
        <tr style="cursor: not-allowed">
          <td><code>not-allowed</code></td>
          <td><img alt="Verbotssymbol, das ist ein Kreis mit einem Strich dadurch" src="not-allowed.gif" /></td>
          <td>Die angeforderte Aktion wird nicht durchgeführt.</td>
        </tr>
        <tr style="cursor: grab">
          <td><code>grab</code></td>
          <td><img class="default" src="grab.gif" alt="vollständig geöffnetes Handsymbol" /></td>
          <td>Etwas kann ergriffen werden (zum Verschieben gezogen werden).</td>
        </tr>
        <tr style="cursor: grabbing">
          <td><code>grabbing</code></td>
          <td><img class="default" src="grabbing.gif" alt="geschlossenes Handsymbol, Rückseite der Hand"/></td>
          <td>Etwas wird ergriffen (zum Verschieben gezogen).</td>
        </tr>
        <tr style="cursor: all-scroll">
          <th rowspan="15" scope="row" style="cursor: auto">
            Resize &amp; Scrollen
          </th>
          <td><code>all-scroll</code></td>
          <td><img alt="Symbol eines mittelgroßen Punktes mit vier Dreiecken herum." src="all-scroll.gif" /></td>
          <td>
            Etwas kann in jede Richtung gescrollt (verschoben) werden.<br /><a href="https://bugzil.la/275174">Firefox Bug 275174</a>:
            Unter Windows ist <code>all-scroll</code> dasselbe wie <code>move</code>.
          </td>
        </tr>
        <tr style="cursor: col-resize">
          <td><code>col-resize</code></td>
          <td><img alt="col-resize.gif" src="col-resize.gif" alt="zwei schmale parallele vertikale Linien mit einem kleinen nach links zeigenden Pfeil und einem nach rechts" /></td>
          <td>
            Das Element/Spalte kann horizontal größer gemacht werden.
            Oft als Pfeile dargestellt, die nach links und rechts zeigen, mit einem vertikalen Balken, der sie trennt.
          </td>
        </tr>
        <tr style="cursor: row-resize">
          <td><code>row-resize</code></td>
          <td><img src="row-resize.gif" alt="zwei schmale parallele horizontale Linien mit einem kleinen nach oben zeigenden Pfeil und einem nach unten" /></td>
          <td>
            Das Element/Zeile kann vertikal größer gemacht werden.
            Oft als Pfeile dargestellt, die nach oben und unten zeigen, mit einem horizontalen Balken, der sie trennt.
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
            Eine Kante soll bewegt werden. Zum Beispiel wird der <code>se-resize</code> Cursor verwendet, wenn die Bewegung von der <em>südöstlichen</em> Ecke des Kastens ausgeht.<br />
            In einigen Umgebungen wird ein gleichwertiger bidirektionaler Resize-Cursor angezeigt.
            Zum Beispiel sind <code>n-resize</code> und <code>s-resize</code> dasselbe wie <code>ns-resize</code>.
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
          <td rowspan="4" style="cursor: auto">Bidirektionaler Resize-Cursor.</td>
        </tr>
        <tr style="cursor: ns-resize">
          <td><code>ns-resize</code></td>
          <td><img alt="dünner langer Pfeil, der nach oben und unten zeigt" class="default" src="6-resize.gif" /></td>
        </tr>
        <tr style="cursor: nesw-resize">
          <td><code>nesw-resize</code></td>
          <td><img alt="dünner langer Pfeil, der sowohl nach oben-rechts als auch nach unten-links zeigt" class="default" src="1-resize.gif" /></td>
        </tr>
        <tr style="cursor: nwse-resize">
          <td><code>nwse-resize</code></td>
          <td><img alt="dünner langer Pfeil, der sowohl nach oben-links als auch nach unten-rechts zeigt" class="default" src="4-resize.gif" /></td>
        </tr>
        <tr style="cursor: zoom-in">
          <th rowspan="2" scope="row" style="cursor: auto">Zoomen</th>
          <td><code>zoom-in</code></td>
          <td><img alt="Lupe mit einem Pluszeichen" class="default" src="zoom-in.gif" /></td>
          <td rowspan="2" style="cursor: auto">
            <p>Etwas kann hinein- oder herausgezoomt (vergrößert) werden.</p>
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

### Begrenzungen der Symbolgröße

Obwohl die Spezifikation die `cursor`-Bildgröße nicht begrenzt, beschränken {{Glossary("user agent", "User Agents")}} sie in der Regel, um Missbrauch zu verhindern. Zum Beispiel sind in Firefox und Chromium Cursorsymbole standardmäßig auf 128x128 Pixel begrenzt, es wird jedoch empfohlen, die Cursorbildgröße auf 32x32 Pixel zu begrenzen. Cursor-Änderungen mit Bildern, die größer sind als die maximal unterstützte Größe des Benutzeragents, werden im Allgemeinen einfach ignoriert.

### Unterstützte Bilddateiformate

Benutzeragenten sind in der Spezifikation verpflichtet, PNG-Dateien, SVG v1.1-Dateien im sicheren statischen Modus, die eine natürliche Größe enthalten, und alle anderen nicht animierten Bilddateiformate zu unterstützen, die sie für Bilder in anderen Eigenschaften unterstützen. Desktop-Browser unterstützen auch weitgehend das `.cur`-Dateiformat.

Die Spezifikation gibt weiter an, dass User Agents _sollen_ auch SVG v1.1-Dateien im sicheren Animationsmodus unterstützen, die eine natürliche Größe enthalten, sowie alle anderen animierten Bildformate, die sie für Bilder in anderen Eigenschaften unterstützen. User Agents _können_ sowohl statische als auch animierte SVG-Bilder unterstützen, die keine natürliche Größe enthalten.

### iPadOS

iPadOS unterstützt Zeigegeräte wie Trackpads und Mäuse. Standardmäßig wird der iPad-Cursor als Kreis angezeigt, und der einzige unterstützte Wert, der das Erscheinungsbild des Zeigers ändert, ist `text`.

### Weitere Hinweise

Cursor-Änderungen, die mit den Werkzeugleistenbereichen überlappen, werden häufig blockiert, um Spoofing zu vermeiden.

## Beispiele

### Festlegen von Cursor-Typen

```css
.foo {
  cursor: crosshair;
}

.bar {
  cursor: zoom-in;
}

/* Ein Fallback-Schlüsselwortwert ist erforderlich, wenn eine URL verwendet wird */
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
- {{cssxref("url_value", "&lt;url&gt;")}} type