---
title: "`cursor` CSS property"
short-title: cursor
slug: Web/CSS/Reference/Properties/cursor
l10n:
  sourceCommit: c4e64810ce10fb5cb1eebfcd8b6f526866fd0982
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`cursor`** legt fest, welcher Mauszeiger angezeigt wird, wenn sich der Mauszeiger über einem Element befindet.

Der angezeigte Mauszeiger sollte Nutzern vermitteln, welche Aktionen an der aktuellen Position möglich sind, etwa Text auszuwählen, Hilfe- oder Kontextmenüs aufzurufen, Inhalte zu kopieren oder die Größe von Tabellen zu ändern.
Sie können den _Typ_ des Mauszeigers mit einem Schlüsselwort angeben oder ein bestimmtes Symbol laden. Dabei können Sie optional Ersatzbilder und müssen als letzte Ausweichmöglichkeit ein Schlüsselwort angeben.

{{InteractiveExample("CSS Demo: cursor")}}

```css interactive-example-choice
cursor: pointer;
```

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
/* Keyword values */
cursor: auto;
cursor: pointer;
/* … */
cursor: zoom-out;

/* URL with mandatory keyword fallback */
cursor: url("hand.cur"), pointer;

/* URL and coordinates, with mandatory keyword fallback */
cursor:
  url("cursor_1.png") 4 12,
  auto;
cursor:
  url("cursor_2.png") 2 2,
  pointer;

/* URLs and fallback URLs (some with coordinates), with mandatory keyword fallback */
cursor:
  url("cursor_1.svg") 4 5,
  url("cursor_2.svg"),
  /* …, */ url("cursor_n.cur") 5 5,
  progress;

/* Global values */
cursor: inherit;
cursor: initial;
cursor: revert;
cursor: revert-layer;
cursor: unset;
```

Die Eigenschaft `cursor` wird durch null oder mehr durch Kommas getrennte `<url>`-Werte angegeben, auf die ein einzelner obligatorischer Schlüsselwortwert folgt.
Jeder `<url>`-Wert sollte auf eine Bilddatei verweisen.
Der Browser versucht, das erste angegebene Bild zu laden. Gelingt dies nicht, versucht er es mit dem nächsten Bild und verwendet schließlich den Schlüsselwortwert, wenn kein Bild geladen werden konnte oder keines angegeben wurde.

Auf jeden `<url>`-Wert kann optional ein Paar durch Leerzeichen getrennter Zahlen folgen. Diese legen die `<x>`- und `<y>`-Koordinaten des Hotspots des Mauszeigers relativ zur oberen linken Ecke des Bildes fest.

### Werte

- `<url>` {{optional_inline}}
  - : Ein `url()`-Wert oder eine durch Kommas getrennte Liste `url(), url(), …`, die auf Bilddateien verweist.
    Mehrere {{cssxref("url_value", "&lt;url&gt;")}}-Werte können als Ausweichmöglichkeiten angegeben werden, falls bestimmte Bildformate für Mauszeiger nicht unterstützt werden.
    Am Ende der Ausweichliste _muss_ ein Wert stehen, der keine URL ist: einer der Schlüsselwortwerte.
- `<x>`, `<y>` {{optional_inline}}
  - : Optionale x- und y-Koordinaten für den Hotspot des Mauszeigers, also die genaue Stelle innerhalb des Mauszeigers, auf die gezeigt wird.

    Die Zahlen werden in Bildpixeln angegeben.
    Sie beziehen sich auf die obere linke Ecke des Bildes, die `0 0` entspricht, und werden auf die Grenzen des Mauszeigerbildes beschränkt.
    Wenn diese Werte nicht angegeben werden, können sie aus der Datei selbst ausgelesen werden. Andernfalls wird standardmäßig die obere linke Ecke des Bildes verwendet.

- `keyword`
  - : Ein Schlüsselwortwert _muss_ angegeben werden. Er legt entweder den zu verwendenden Mauszeigertyp fest oder den Ersatzmauszeiger, falls alle angegebenen Symbole nicht geladen werden können.

    Die verfügbaren Schlüsselwörter sind in der folgenden Tabelle aufgeführt. Mit Ausnahme von `none`, das bedeutet, dass kein Mauszeiger angezeigt wird, zeigt jeweils ein Bild, wie die Mauszeiger früher dargestellt wurden. Wenn Sie den Mauszeiger über die Tabellenzeilen bewegen, sehen Sie, wie die verschiedenen Schlüsselwortwerte heute in Ihrem Browser wirken.

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
            Der User Agent bestimmt anhand des aktuellen Kontexts, welcher Mauszeiger angezeigt wird. Beispielsweise entspricht er über Text dem Wert <code>text</code>.
          </td>
        </tr>
        <tr style="cursor: default">
          <td><code>default</code></td>
          <td><img src="default.gif" alt="Breiter Pfeil, der nach oben links zeigt" /></td>
          <td>Der plattformabhängige Standardmauszeiger. Üblicherweise ein Pfeil.</td>
        </tr>
        <tr style="cursor: none">
          <td><code>none</code></td>
          <td></td>
          <td>Es wird kein Mauszeiger dargestellt.</td>
        </tr>
        <tr style="cursor: context-menu">
          <th rowspan="5" scope="row" style="cursor: auto">Links und Status</th>
          <td><code>context-menu</code></td>
          <td><img alt="Breiter Pfeil, der nach oben links zeigt und ein Menüsymbol teilweise verdeckt" src="context-menu.png" /></td>
          <td>Ein Kontextmenü ist verfügbar.</td>
        </tr>
        <tr style="cursor: help">
          <td><code>help</code></td>
          <td><img src="help.gif" alt="Breiter Pfeil, der neben einem Fragezeichen nach oben links zeigt" /></td>
          <td>Hilfeinformationen sind verfügbar.</td>
        </tr>
        <tr style="cursor: pointer">
          <td><code>pointer</code></td>
          <td><img src="pointer.gif" alt="Rechte Hand mit nach oben zeigendem Zeigefinger" /></td>
          <td>
            Der Mauszeiger zeigt einen Link an. Üblicherweise wird eine zeigende Hand dargestellt.
          </td>
        </tr>
        <tr style="cursor: progress">
          <td><code>progress</code></td>
          <td><img src="progress.gif" alt="Breiter Pfeil und Sanduhr" /></td>
          <td>
            Das Programm ist im Hintergrund beschäftigt, aber Nutzer können weiterhin mit der Benutzeroberfläche interagieren (im Gegensatz zu <code>wait</code>).
          </td>
        </tr>
        <tr style="cursor: wait">
          <td><code>wait</code></td>
          <td><img src="wait.gif" alt="Sanduhr" /></td>
          <td>
            Das Programm ist beschäftigt und Nutzer können nicht mit der Benutzeroberfläche interagieren (im Gegensatz zu <code>progress</code>).
            Manchmal wird eine Sanduhr oder eine Uhr dargestellt.
          </td>
        </tr>
        <tr style="cursor: cell">
          <th rowspan="4" scope="row" style="cursor: auto">Auswahl</th>
          <td><code>cell</code></td>
          <td><img src="cell.gif" alt="Breites Pluszeichen" /></td>
          <td>Die Tabellenzelle oder eine Gruppe von Zellen kann ausgewählt werden.</td>
        </tr>
        <tr style="cursor: crosshair">
          <td><code>crosshair</code></td>
          <td><img src="crosshair.gif" alt="Pluszeichen aus zwei dünnen Linien" /></td>
          <td>Fadenkreuz-Mauszeiger, der häufig eine Auswahl in einer Bitmap kennzeichnet.</td>
        </tr>
        <tr style="cursor: text">
          <td><code>text</code></td>
          <td><img class="default" src="text.gif" alt="Senkrechter I-förmiger Balken" /></td>
          <td>Der Text kann ausgewählt werden. Üblicherweise in Form eines senkrechten I-förmigen Balkens.</td>
        </tr>
        <tr style="cursor: vertical-text">
          <td><code>vertical-text</code></td>
          <td><img alt="Waagerechter I-förmiger Balken" src="vertical-text.gif" /></td>
          <td>
            Der vertikale Text kann ausgewählt werden. Üblicherweise in Form eines waagerechten I-förmigen Balkens.
          </td>
        </tr>
        <tr style="cursor: alias">
          <th rowspan="7" scope="row" style="cursor: auto">Drag-and-Drop</th>
          <td><code>alias</code></td>
          <td><img src="alias.gif" alt="Breiter Pfeil, der nach oben links zeigt und ein kleineres Ordnersymbol mit einem gebogenen, nach oben rechts zeigenden Pfeil teilweise verdeckt"/></td>
          <td>Ein Alias oder eine Verknüpfung soll erstellt werden.</td>
        </tr>
        <tr style="cursor: copy">
          <td><code>copy</code></td>
          <td><img class="default" src="copy.gif" alt="Breiter Pfeil, der nach oben links zeigt und ein kleineres Ordnersymbol mit einem Pluszeichen teilweise verdeckt" /></td>
          <td>Etwas soll kopiert werden.</td>
        </tr>
        <tr style="cursor: move">
          <td><code>move</code></td>
          <td><img src="move.gif" alt="Pluszeichen aus zwei dünnen Linien, dessen vier Enden nach außen zeigende kleine Pfeile bilden" /></td>
          <td>Etwas soll verschoben werden.</td>
        </tr>
        <tr style="cursor: no-drop">
          <td><code>no-drop</code></td>
          <td>
            <img src="no-drop.gif" alt="Mauszeigersymbol und Verbotssymbol" />
          </td>
          <td>
            Ein Element darf an der aktuellen Position nicht abgelegt werden.<br /><a href="https://bugzil.la/275173">Firefox-Bug 275173</a>:
            Unter Windows und macOS entspricht <code>no-drop</code> dem Wert <code>not-allowed</code>.
          </td>
        </tr>
        <tr style="cursor: not-allowed">
          <td><code>not-allowed</code></td>
          <td><img alt="Verbotssymbol: ein Kreis mit einem Strich hindurch" src="not-allowed.gif" /></td>
          <td>Die angeforderte Aktion wird nicht ausgeführt.</td>
        </tr>
        <tr style="cursor: grab">
          <td><code>grab</code></td>
          <td><img class="default" src="grab.gif" alt="Symbol einer vollständig geöffneten Hand" /></td>
          <td>Etwas kann gegriffen und durch Ziehen verschoben werden.</td>
        </tr>
        <tr style="cursor: grabbing">
          <td><code>grabbing</code></td>
          <td><img class="default" src="grabbing.gif" alt="Symbol einer geschlossenen Hand, vom Handrücken aus gesehen"/></td>
          <td>Etwas wird gerade gegriffen und durch Ziehen verschoben.</td>
        </tr>
        <tr style="cursor: all-scroll">
          <th rowspan="15" scope="row" style="cursor: auto">
            Größenänderung und Scrollen
          </th>
          <td><code>all-scroll</code></td>
          <td><img alt="Symbol eines mittelgroßen Punkts mit vier Dreiecken darum" src="all-scroll.gif" /></td>
          <td>
            Etwas kann in jede Richtung gescrollt oder verschoben werden.<br /><a href="https://bugzil.la/275174">Firefox-Bug 275174</a>:
            Unter Windows entspricht <code>all-scroll</code> dem Wert <code>move</code>.
          </td>
        </tr>
        <tr style="cursor: col-resize">
          <td><code>col-resize</code></td>
          <td><img alt="Zwei schmale parallele senkrechte Linien mit je einem kleinen Pfeil nach links und rechts" src="col-resize.gif" alt="Zwei schmale parallele senkrechte Linien mit je einem kleinen Pfeil nach links und rechts" /></td>
          <td>
            Die Größe des Elements oder der Spalte kann horizontal geändert werden.
            Häufig als nach links und rechts zeigende Pfeile dargestellt, die durch einen senkrechten Balken getrennt sind.
          </td>
        </tr>
        <tr style="cursor: row-resize">
          <td><code>row-resize</code></td>
          <td><img src="row-resize.gif" alt="Zwei schmale parallele waagerechte Linien mit je einem kleinen Pfeil nach oben und unten" /></td>
          <td>
            Die Größe des Elements oder der Zeile kann vertikal geändert werden.
            Häufig als nach oben und unten zeigende Pfeile dargestellt, die durch einen waagerechten Balken getrennt sind.
          </td>
        </tr>
        <tr style="cursor: n-resize">
          <td><code>n-resize</code></td>
          <td>
            <img
              alt="Dünner langer Pfeil, der nach oben zeigt"
              src="n-resize.gif"
              style="border-style: solid; border-width: 0px"
            />
          </td>
          <td rowspan="8" style="cursor: auto">
            Eine Kante soll verschoben werden. Der Mauszeiger <code>se-resize</code> wird beispielsweise verwendet, wenn die Bewegung an der <em>südöstlichen</em> Ecke des Rahmens beginnt.<br />
            In manchen Umgebungen wird stattdessen ein entsprechender bidirektionaler Mauszeiger zur Größenänderung angezeigt.
            Beispielsweise entsprechen <code>n-resize</code> und <code>s-resize</code> dem Wert <code>ns-resize</code>.
          </td>
        </tr>
        <tr style="cursor: e-resize">
          <td><code>e-resize</code></td>
          <td>
            <img
              alt="Dünner langer Pfeil, der nach rechts zeigt"
              src="e-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: s-resize">
          <td><code>s-resize</code></td>
          <td>
            <img
              alt="Dünner langer Pfeil, der nach unten zeigt"
              src="s-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: w-resize">
          <td><code>w-resize</code></td>
          <td>
            <img
              alt="Dünner langer Pfeil, der nach links zeigt"
              src="w-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: ne-resize">
          <td><code>ne-resize</code></td>
          <td>
            <img
              alt="Dünner langer Pfeil, der nach oben rechts zeigt"
              src="ne-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: nw-resize">
          <td><code>nw-resize</code></td>
          <td>
            <img
              alt="Dünner langer Pfeil, der nach oben links zeigt"
              src="nw-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: se-resize">
          <td><code>se-resize</code></td>
          <td>
            <img
              alt="Dünner langer Pfeil, der nach unten rechts zeigt"
              src="se-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: sw-resize">
          <td><code>sw-resize</code></td>
          <td>
            <img
              alt="Dünner langer Pfeil, der nach unten links zeigt"
              src="sw-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: ew-resize">
          <td><code>ew-resize</code></td>
          <td><img alt="Dünner langer Pfeil, der nach links und rechts zeigt" class="default" src="3-resize.gif" /></td>
          <td rowspan="4" style="cursor: auto">Bidirektionaler Mauszeiger zur Größenänderung.</td>
        </tr>
        <tr style="cursor: ns-resize">
          <td><code>ns-resize</code></td>
          <td><img alt="Dünner langer Pfeil, der nach oben und unten zeigt" class="default" src="6-resize.gif" /></td>
        </tr>
        <tr style="cursor: nesw-resize">
          <td><code>nesw-resize</code></td>
          <td><img alt="Dünner langer Pfeil, der nach oben rechts und unten links zeigt" class="default" src="1-resize.gif" /></td>
        </tr>
        <tr style="cursor: nwse-resize">
          <td><code>nwse-resize</code></td>
          <td><img alt="Dünner langer Pfeil, der nach oben links und unten rechts zeigt" class="default" src="4-resize.gif" /></td>
        </tr>
        <tr style="cursor: zoom-in">
          <th rowspan="2" scope="row" style="cursor: auto">Zoomen</th>
          <td><code>zoom-in</code></td>
          <td><img alt="Lupe mit Pluszeichen" class="default" src="zoom-in.gif" /></td>
          <td rowspan="2" style="cursor: auto">
            <p>Etwas kann vergrößert oder verkleinert dargestellt werden.</p>
          </td>
        </tr>
        <tr style="cursor: zoom-out">
          <td><code>zoom-out</code></td>
          <td><img alt="Lupe mit Minuszeichen" class="default" src="zoom-out.gif" /></td>
        </tr>
      </tbody>
    </table>

## Hinweise zur Verwendung

### Größenbeschränkungen für Symbole

Die Spezifikation begrenzt die Größe von `cursor`-Bildern nicht, {{Glossary("user_agent", "User Agents")}} beschränken sie jedoch üblicherweise, um möglichen Missbrauch zu verhindern.
Firefox und Chromium begrenzen Mauszeigerbilder beispielsweise standardmäßig auf 128 × 128 Pixel. Es wird jedoch empfohlen, ihre Größe auf 32 × 32 Pixel zu beschränken. Änderungen des Mauszeigers durch Bilder, die größer als die vom User Agent maximal unterstützte Größe sind, werden im Allgemeinen einfach ignoriert.

### Unterstützte Bilddateiformate

Die Spezifikation verlangt von User Agents, PNG-Dateien, SVG-v1.1-Dateien im sicheren statischen Modus mit einer natürlichen Größe sowie alle anderen nicht animierten Bilddateiformate zu unterstützen, die sie auch für Bilder in anderen Eigenschaften unterstützen.
Desktop-Browser unterstützen außerdem weitgehend das Dateiformat `.cur`.

Darüber hinaus sieht die Spezifikation vor, dass User Agents _auch_ SVG-v1.1-Dateien im sicheren animierten Modus mit einer natürlichen Größe sowie alle anderen animierten Bilddateiformate unterstützen _sollten_, die sie auch für Bilder in anderen Eigenschaften unterstützen.
User Agents _dürfen_ sowohl statische als auch animierte SVG-Bilder ohne natürliche Größe unterstützen.

### iPadOS

iPadOS unterstützt Zeigegeräte wie Trackpads und Mäuse. Standardmäßig wird der iPad-Mauszeiger als Kreis dargestellt. Der einzige unterstützte Wert, der sein Aussehen verändert, ist `text`.

### Weitere Hinweise

Änderungen des Mauszeigers, die Bereiche von Symbolleisten betreffen, werden üblicherweise blockiert, um Täuschungsversuche zu verhindern.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Mauszeigertypen festlegen

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
- Typ {{cssxref("url_value", "&lt;url&gt;")}}
- SVG-Attribut {{SVGAttr("cursor")}}
