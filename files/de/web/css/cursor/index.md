---
title: cursor
slug: Web/CSS/cursor
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`cursor`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt den Mauscursor fest, der angezeigt werden soll, wenn sich der Mauszeiger über einem Element befindet.

Die Cursor-Einstellung sollte die Benutzer über die Mausaktionen informieren, die an der aktuellen Position ausgeführt werden können, einschließlich: Textauswahl, Aktivierung von Hilfe- oder Kontextmenüs, Kopieren von Inhalten, Ändern der Größe von Tabellen und so weiter. Sie können entweder den _Typ_ des Cursors mit einem Schlüsselwort angeben oder ein spezifisches Symbol laden, das verwendet werden soll (mit optionalen Fallback-Bildern und einem obligatorischen Schlüsselwort als endgültigem Fallback).

{{InteractiveExample("CSS Demo: cursor")}}

```css interactive-example-choice
cursor: help;
```

```css interactive-example-choice
cursor: wait;
```

```css interactive-example-choice
cursor: crosshair;
```

```css interactive-example-choice
cursor: not-allowed;
```

```css interactive-example-choice
cursor: zoom-in;
```

```css interactive-example-choice
cursor: grab;
```

```html interactive-example
<section class="default-example container" id="default-example">
  <div id="example-element">
    Move over this element to see the cursor style.
  </div>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  background-color: #1766aa;
  color: white;
  height: 180px;
  width: 360px;
  justify-content: center;
  align-items: center;
  font-size: 14pt;
  padding: 5px;
}
```

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

Die `cursor`-Eigenschaft wird als null oder mehr `<url>`-Werte angegeben, getrennt durch Kommas, gefolgt von einem einzelnen obligatorischen Schlüsselwortwert. Jede `<url>` sollte auf eine Bilddatei verweisen. Der Browser versucht, das erste angegebene Bild zu laden und fällt auf das nächste zurück, wenn es nicht geladen werden kann, und fällt auf den Schlüsselwortwert zurück, wenn keine Bilder geladen werden konnten (oder wenn keine angegeben wurden).

Jede `<url>` kann optional von einem Paar aus einem Leerzeichen getrennten Zahlen gefolgt werden, die die `<x>`- und `<y>`-Koordinaten des Cursor-Hotspots relativ zur oberen linken Ecke des Bildes festlegen.

### Werte

- `<url>` {{optional_inline}}
  - : Ein `url()` oder eine durch Kommas getrennte Liste `url(), url(), …`, die auf eine Bilddatei verweist.
    Mehr als ein {{cssxref("url_value", "&lt;url&gt;")}} kann als Fallbacks angegeben werden, falls einige Cursor-Bildtypen nicht unterstützt werden.
    Ein Nicht-URL-Fallback (eines oder mehrere der Schlüsselwortwerte) _muss_ am Ende der Fallback-Liste stehen.
- `<x>`, `<y>` {{optional_inline}}

  - : Optionale x- und y-Koordinaten, die den Cursor-Hotspot angeben; die genaue Position innerhalb des Cursors, die angezeigt wird.

    Die Zahlen sind in Einheiten von Bildpixeln. Sie sind relativ zur oberen linken Ecke des Bildes, die `0 0` entspricht, und sind innerhalb der Grenzen des Cursor-Bildes begrenzt. Wenn diese Werte nicht angegeben sind, können sie aus der Datei selbst gelesen werden und standardmäßig an der oberen linken Ecke des Bildes liegen.

- `keyword`

  - : Ein Schlüsselwortwert _muss_ angegeben werden, das entweder den zu verwendenden Cursor-Typ oder den Fallback-Cursor angibt, der verwendet werden soll, wenn alle angegebenen Symbole nicht geladen werden können.

    Die verfügbaren Schlüsselwörter sind in der untenstehenden Tabelle aufgeführt. Abgesehen von `none`, das bedeutet, dass kein Cursor angezeigt wird, gibt es ein Bild, das zeigt, wie die Cursor früher gerendert wurden. Sie können die Maus über die Tabellenzeilen bewegen, um den Effekt der verschiedenen Cursor-Schlüsselwortwerte heute in Ihrem Browser zu sehen.

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
            Der Benutzeragent bestimmt den anzuzeigenden Cursor basierend auf dem aktuellen Kontext. Z. B. äquivalent zu <code>text</code> beim Überfahren von Text.
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
          <td>Es wird kein Cursor gerendert.</td>
        </tr>
        <tr style="cursor: context-menu">
          <th rowspan="5" scope="row" style="cursor: auto">Links &amp; Status</th>
          <td><code>context-menu</code></td>
          <td><img alt="breiter Pfeil, der nach oben und links zeigt und ein Menü-Symbol leicht verdeckt" src="context-menu.png" /></td>
          <td>Ein Kontextmenü ist verfügbar.</td>
        </tr>
        <tr style="cursor: help">
          <td><code>help</code></td>
          <td><img src="help.gif" alt="breiter Pfeil, der nach oben und links zeigt, neben einem Fragezeichen" /></td>
          <td>Hilfeinformation ist verfügbar.</td>
        </tr>
        <tr style="cursor: pointer">
          <td><code>pointer</code></td>
          <td><img src="pointer.gif" alt="rechte Hand mit einem Zeigefinger, der nach oben zeigt" /></td>
          <td>
            Der Cursor ist ein Zeiger, der auf einen Link hinweist. Typischerweise ein Bild einer zeigenden Hand.
          </td>
        </tr>
        <tr style="cursor: progress">
          <td><code>progress</code></td>
          <td><img src="progress.gif" alt="breiter Pfeil und Sanduhr" /></td>
          <td>
            Das Programm ist im Hintergrund beschäftigt, aber der Benutzer kann weiterhin mit der Benutzeroberfläche interagieren (im Gegensatz zu <code>wait</code>).
          </td>
        </tr>
        <tr style="cursor: wait">
          <td><code>wait</code></td>
          <td><img src="wait.gif" alt="Sanduhr" /></td>
          <td>
            Das Programm ist beschäftigt, und der Benutzer kann nicht mit der Benutzeroberfläche interagieren (im Gegensatz zu <code>progress</code>).
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
          <td><img src="crosshair.gif" alt="Plus-Symbol, bestehend aus zwei dünnen Linien." /></td>
          <td>Kreuz-Cursor, oft verwendet, um eine Auswahl in einem Bitmap anzuzeigen.</td>
        </tr>
        <tr style="cursor: text">
          <td><code>text</code></td>
          <td><img class="default" src="text.gif" alt="vertikaler Text-Cursor" /></td>
          <td>Der Text kann ausgewählt werden. Typischerweise die Form eines Textbalkens.</td>
        </tr>
        <tr style="cursor: vertical-text">
          <td><code>vertical-text</code></td>
          <td><img alt="horizontaler Text-Cursor" src="vertical-text.gif" /></td>
          <td>
            Der vertikale Text kann ausgewählt werden. Typischerweise die Form eines seitwärts liegenden Textbalkens.
          </td>
        </tr>
        <tr style="cursor: alias">
          <th rowspan="7" scope="row" style="cursor: auto">Ziehen &amp; Ablegen</th>
          <td><code>alias</code></td>
          <td><img src="alias.gif" alt="breiter Pfeil, der nach oben und links zeigt, der ein kleineres Ordnersymbol mit einem nach oben und rechts zeigenden Pfeil teilweise verdeckt"/></td>
          <td>Ein Alias oder eine Verknüpfung soll erstellt werden.</td>
        </tr>
        <tr style="cursor: copy">
          <td><code>copy</code></td>
          <td><img class="default" src="copy.gif" alt="breiter Pfeil, der nach oben und links zeigt, der ein kleineres Ordnersymbol mit einem Pluszeichen teilweise verdeckt" /></td>
          <td>Etwas soll kopiert werden.</td>
        </tr>
        <tr style="cursor: move">
          <td><code>move</code></td>
          <td><img src="move.gif" alt="Pluszeichen aus zwei dünnen Linien, deren vier Punkte kleine Pfeile nach außen zeigen" /></td>
          <td>Etwas soll verschoben werden.</td>
        </tr>
        <tr style="cursor: no-drop">
          <td><code>no-drop</code></td>
          <td>
            <img src="no-drop.gif" alt="Zeigersymbol und ein Nicht-erlaubt-Symbol" />
          </td>
          <td>
            Ein Element darf nicht an der aktuellen Position abgelegt werden.<br /><a href="https://bugzil.la/275173">Firefox-Fehler 275173</a>:
            Unter Windows und macOS ist <code>no-drop</code> dasselbe wie <code>not-allowed</code>.
          </td>
        </tr>
        <tr style="cursor: not-allowed">
          <td><code>not-allowed</code></td>
          <td><img alt="Nicht-erlaubt-Symbol, ein Kreis mit einer durchgehenden Linie" src="not-allowed.gif" /></td>
          <td>Die angeforderte Aktion wird nicht ausgeführt.</td>
        </tr>
        <tr style="cursor: grab">
          <td><code>grab</code></td>
          <td><img class="default" src="grab.gif" alt="vollständig geöffnete Hand" /></td>
          <td>Etwas kann ergriffen werden (zum Verschieben gezogen werden).</td>
        </tr>
        <tr style="cursor: grabbing">
          <td><code>grabbing</code></td>
          <td><img class="default" src="grabbing.gif" alt="geschlossene Hand" /></td>
          <td>Etwas wird gerade ergriffen (zum Verschieben gezogen).</td>
        </tr>
        <tr style="cursor: all-scroll">
          <th rowspan="15" scope="row" style="cursor: auto">
            Größenänderung &amp; Scrollen
          </th>
          <td><code>all-scroll</code></td>
          <td><img alt="Symbol eines mittleren Punktes mit vier Dreiecken darum herum." src="all-scroll.gif" /></td>
          <td>
            Etwas kann in jede Richtung gescrollt werden (verschoben).<br /><a href="https://bugzil.la/275174">Firefox-Fehler 275174</a>:
            Unter Windows ist <code>all-scroll</code> dasselbe wie <code>move</code>.
          </td>
        </tr>
        <tr style="cursor: col-resize">
          <td><code>col-resize</code></td>
          <td><img alt="col-resize.gif" src="col-resize.gif" alt="zwei schmale parallele vertikale Linien mit einem kleinen Pfeil, der nach links und einem anderen, der nach rechts zeigt" /></td>
          <td>
            Das Element/Spalte kann horizontal in der Größe verändert werden.
            Oft als Pfeile dargestellt, die links und rechts zeigen, mit einer vertikalen Leiste dazwischen.
          </td>
        </tr>
        <tr style="cursor: row-resize">
          <td><code>row-resize</code></td>
          <td><img src="row-resize.gif" alt="zwei schmale parallele horizontale Linien mit einem kleinen Pfeil, der nach oben und einem anderen, der nach unten zeigt" /></td>
          <td>
            Das Element/Zeile kann vertikal in der Größe verändert werden.
            Oft als Pfeile dargestellt, die nach oben und unten zeigen, mit einer horizontalen Leiste dazwischen.
          </td>
        </tr>
        <tr style="cursor: n-resize">
          <td><code>n-resize</code></td>
          <td>
            <img
              alt="schmaler langer Pfeil, der nach oben zeigt"
              src="n-resize.gif"
              style="border-style: solid; border-width: 0px"
            />
          </td>
          <td rowspan="8" style="cursor: auto">
            Eine Kante soll verschoben werden. Beispielsweise wird der <code>se-resize</code>-Cursor verwendet, wenn die Bewegung vom <em>Südost</em>-Eckpunkt des Rahmens ausgeht.<br />
            In einigen Umgebungen wird ein äquivalenter bidirektionaler Größenänderungs-Cursor angezeigt.
            Zum Beispiel sind <code>n-resize</code> und <code>s-resize</code> dasselbe wie <code>ns-resize</code>.
          </td>
        </tr>
        <tr style="cursor: e-resize">
          <td><code>e-resize</code></td>
          <td>
            <img
              alt="schmaler langer Pfeil, der nach rechts zeigt"
              src="e-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: s-resize">
          <td><code>s-resize</code></td>
          <td>
            <img
              alt="schmaler langer Pfeil, der nach unten zeigt"
              src="s-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: w-resize">
          <td><code>w-resize</code></td>
          <td>
            <img
              alt="schmaler langer Pfeil, der nach links zeigt"
              src="w-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: ne-resize">
          <td><code>ne-resize</code></td>
          <td>
            <img
              alt="schmaler langer Pfeil, der nach oben-rechts zeigt"
              src="ne-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: nw-resize">
          <td><code>nw-resize</code></td>
          <td>
            <img
              alt="schmaler langer Pfeil, der nach oben-links zeigt"
              src="nw-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: se-resize">
          <td><code>se-resize</code></td>
          <td>
            <img
              alt="schmaler langer Pfeil, der nach unten-rechts zeigt"
              src="se-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: sw-resize">
          <td><code>sw-resize</code></td>
          <td>
            <img
              alt="schmaler langer Pfeil, der nach unten-links zeigt"
              src="sw-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: ew-resize">
          <td><code>ew-resize</code></td>
          <td><img alt="schmaler langer Pfeil, der nach links und rechts zeigt" class="default" src="3-resize.gif" /></td>
          <td rowspan="4" style="cursor: auto">Bidirektionaler Größenänderungs-Cursor.</td>
        </tr>
        <tr style="cursor: ns-resize">
          <td><code>ns-resize</code></td>
          <td><img alt="schmaler langer Pfeil, der nach oben und unten zeigt" class="default" src="6-resize.gif" /></td>
        </tr>
        <tr style="cursor: nesw-resize">
          <td><code>nesw-resize</code></td>
          <td><img alt="schmaler langer Pfeil, der sowohl nach oben-rechts als auch nach unten-links zeigt" class="default" src="1-resize.gif" /></td>
        </tr>
        <tr style="cursor: nwse-resize">
          <td><code>nwse-resize</code></td>
          <td><img alt="schmaler langer Pfeil, der sowohl nach oben-links als auch nach unten-rechts zeigt" class="default" src="4-resize.gif" /></td>
        </tr>
        <tr style="cursor: zoom-in">
          <th rowspan="2" scope="row" style="cursor: auto">Zoomen</th>
          <td><code>zoom-in</code></td>
          <td><img alt="Lupe mit einem Plus-Zeichen" class="default" src="zoom-in.gif" /></td>
          <td rowspan="2" style="cursor: auto">
            <p>Etwas kann herein- oder herausgezoomt werden.</p>
          </td>
        </tr>
        <tr style="cursor: zoom-out">
          <td><code>zoom-out</code></td>
          <td><img alt="Lupe mit einem Minus-Zeichen" class="default" src="zoom-out.gif" /></td>
        </tr>
      </tbody>
    </table>

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Hinweise zur Verwendung

### Grenzwerte für Icons

Obwohl die Spezifikation die Bildgröße des `cursor` nicht limitiert, beschränken Benutzeragenten diese gewöhnlich, um möglichen Missbrauch zu vermeiden. Zum Beispiel sind in Firefox und Chromium Cursorbilder standardmäßig auf 128x128 Pixel beschränkt, aber es wird empfohlen, die Cursorbildgröße auf 32x32 Pixel zu beschränken. Cursoränderungen mit Bildern, die größer sind als die maximal unterstützte Größe des Benutzeragenten, werden im Allgemeinen einfach ignoriert.

### Unterstützte Bilddateiformate

Laut Spezifikation müssen Benutzeragenten PNG-Dateien, SVG v1.1-Dateien im sicheren statischen Modus, die eine natürliche Größe aufweisen, und alle anderen nicht animierten Bilddateiformate unterstützen, die sie für Bilder in anderen Eigenschaften unterstützen. Desktop-Browser unterstützen ebenfalls weit verbreitet das `.cur`-Dateiformat.

Die Spezifikation gibt weiterhin an, dass Benutzeragenten _sollten_ auch SVG v1.1-Dateien im sicheren animierten Modus unterstützen, die eine natürliche Größe aufweisen, zusammen mit allen anderen animierten Bilddateiformaten, die sie für Bilder in anderen Eigenschaften unterstützen. Benutzeragenten _können_ sowohl statische als auch animierte SVG-Bilder unterstützen, die keine natürliche Größe aufweisen.

### iPadOS

iPadOS unterstützt Zeigegeräte wie Trackpads und Mäuse. Standardmäßig wird der iPad-Cursor als Kreis angezeigt, und der einzige unterstützte Wert, der das Erscheinungsbild des Zeigers ändert, ist `text`.

### Weitere Hinweise

Cursor-Änderungen, die sich mit Symbolleistenbereichen überschneiden, werden häufig blockiert, um Spoofing zu vermeiden.

## Beispiele

### Cursorarten festlegen

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
- {{cssxref("url_value", "&lt;url&gt;")}}-Typ
- SVG-{{SVGAttr("cursor")}}-Attribut
