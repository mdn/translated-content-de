---
title: "`cursor` CSS property"
short-title: cursor
slug: Web/CSS/Reference/Properties/cursor
l10n:
  sourceCommit: 880c2c4b113c6fe127ca3ae3603a56ef7a2eb9a6
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`cursor`** legt den Mauszeiger fest, der gegebenenfalls angezeigt wird, wenn sich der Mauszeiger über einem Element befindet.

Die Einstellung des Mauszeigers sollte Benutzer über die Mausaktionen informieren, die an der aktuellen Position ausgeführt werden können, einschließlich: Text auswählen, Hilfe oder Kontextmenüs aktivieren, Inhalte kopieren, Tabellen in der Größe ändern usw.
Sie können entweder den _Typ_ des Mauszeigers mit einem Schlüsselwort angeben oder ein bestimmtes Symbol zur Verwendung laden (mit optionalen Fallback-Bildern und einem obligatorischen Schlüsselwort als abschließendem Fallback).

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

Die Eigenschaft `cursor` wird als null oder mehr durch Kommas getrennte `<url>`-Werte angegeben, gefolgt von einem einzelnen obligatorischen Schlüsselwortwert.
Jede `<url>` sollte auf eine Bilddatei verweisen.
Der Browser versucht, das erste angegebene Bild zu laden, verwendet bei einem Fehlschlag das nächste und greift auf den Schlüsselwortwert zurück, wenn keine Bilder geladen werden konnten (oder keine angegeben wurden).

Auf jede `<url>` kann optional ein durch Leerzeichen getrenntes Zahlenpaar folgen, das die Koordinaten `<x>` und `<y>` des Hotspots des Mauszeigers relativ zur oberen linken Ecke des Bildes festlegt.

### Werte

- `<url>` {{optional_inline}}
  - : Eine `url()` oder eine durch Kommas getrennte Liste `url(), url(), …`, die auf eine Bilddatei verweist.
    Es können mehrere {{cssxref("url_value", "&lt;url&gt;")}} als Fallbacks angegeben werden, falls einige Arten von Mauszeigerbildern nicht unterstützt werden.
    Ein Fallback ohne URL (einer oder mehrere der Schlüsselwortwerte) _muss_ am Ende der Fallback-Liste stehen.
- `<x>`, `<y>` {{optional_inline}}
  - : Optionale x- und y-Koordinaten, die den Hotspot des Mauszeigers angeben; die genaue Position innerhalb des Mauszeigers, auf die gezeigt wird.

    Die Zahlen werden in Einheiten von Bildpixeln angegeben.
    Sie beziehen sich auf die obere linke Ecke des Bildes, die `0 0` entspricht, und werden innerhalb der Grenzen des Mauszeigerbildes begrenzt.
    Wenn diese Werte nicht angegeben sind, können sie aus der Datei selbst gelesen werden; andernfalls wird standardmäßig die obere linke Ecke des Bildes verwendet.

- `keyword`
  - : Ein Schlüsselwortwert _muss_ angegeben werden. Er gibt entweder den zu verwendenden Typ des Mauszeigers oder den Fallback-Mauszeiger an, der verwendet wird, wenn alle angegebenen Symbole nicht geladen werden können.

    Die verfügbaren Schlüsselwörter sind in der folgenden Tabelle aufgeführt. Mit Ausnahme von `none`, was bedeutet, dass kein Mauszeiger angezeigt wird, zeigt ein Bild, wie die Mauszeiger früher dargestellt wurden. Sie können mit der Maus über die Tabellenzeilen fahren, um die Wirkung der verschiedenen Mauszeiger-Schlüsselwortwerte in Ihrem heutigen Browser zu sehen.

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
            Der UA bestimmt anhand des aktuellen Kontexts, welcher Mauszeiger angezeigt wird. Beispielsweise entspricht er beim Überfahren von Text <code>text</code>.
          </td>
        </tr>
        <tr style="cursor: default">
          <td><code>default</code></td>
          <td><img src="default.gif" alt="breiter Pfeil, der nach oben links zeigt" /></td>
          <td>Der plattformabhängige Standardmauszeiger. Typischerweise ein Pfeil.</td>
        </tr>
        <tr style="cursor: none">
          <td><code>none</code></td>
          <td></td>
          <td>Es wird kein Mauszeiger dargestellt.</td>
        </tr>
        <tr style="cursor: context-menu">
          <th rowspan="5" scope="row" style="cursor: auto">Links &#x26; Status</th>
          <td><code>context-menu</code></td>
          <td><img alt="breiter Pfeil, der nach oben links zeigt und ein Menüsymbol leicht verdeckt" src="context-menu.png" /></td>
          <td>Ein Kontextmenü ist verfügbar.</td>
        </tr>
        <tr style="cursor: help">
          <td><code>help</code></td>
          <td><img src="help.gif" alt="breiter Pfeil, der nach oben links zeigt, neben einem Fragezeichen" /></td>
          <td>Hilfeinformationen sind verfügbar.</td>
        </tr>
        <tr style="cursor: pointer">
          <td><code>pointer</code></td>
          <td><img src="pointer.gif" alt="rechte Hand mit nach oben zeigendem Zeigefinger" /></td>
          <td>
            Der Mauszeiger ist ein Zeiger, der einen Link kennzeichnet. Typischerweise ein Bild einer zeigenden Hand.
          </td>
        </tr>
        <tr style="cursor: progress">
          <td><code>progress</code></td>
          <td><img src="progress.gif" alt="breiter Pfeil und Sanduhr" /></td>
          <td>
            Das Programm ist im Hintergrund beschäftigt, aber der Benutzer kann weiterhin mit
            der Benutzeroberfläche interagieren (im Gegensatz zu <code>wait</code>).
          </td>
        </tr>
        <tr style="cursor: wait">
          <td><code>wait</code></td>
          <td><img src="wait.gif" alt="Sanduhr" /></td>
          <td>
            Das Programm ist beschäftigt und der Benutzer kann nicht mit der Benutzeroberfläche interagieren (im Gegensatz zu <code>progress</code>).
            Manchmal wird ein Bild einer Sanduhr oder einer Uhr angezeigt.
          </td>
        </tr>
        <tr style="cursor: cell">
          <th rowspan="4" scope="row" style="cursor: auto">Auswahl</th>
          <td><code>cell</code></td>
          <td><img src="cell.gif" alt="breites Pluszeichen" /></td>
          <td>Die Tabellenzelle oder der Satz von Zellen kann ausgewählt werden.</td>
        </tr>
        <tr style="cursor: crosshair">
          <td><code>crosshair</code></td>
          <td><img src="crosshair.gif" alt="Pluszeichen aus zwei dünnen Linien." /></td>
          <td>Fadenkreuz-Mauszeiger, oft zur Kennzeichnung einer Auswahl in einer Bitmap verwendet.</td>
        </tr>
        <tr style="cursor: text">
          <td><code>text</code></td>
          <td><img class="default" src="text.gif" alt="vertikaler I-Balken" /></td>
          <td>Der Text kann ausgewählt werden. Typischerweise in Form eines I-Balkens.</td>
        </tr>
        <tr style="cursor: vertical-text">
          <td><code>vertical-text</code></td>
          <td><img alt="horizontaler I-Balken" src="vertical-text.gif" /></td>
          <td>
            Der vertikale Text kann ausgewählt werden. Typischerweise in Form eines seitlich liegenden I-Balkens.
          </td>
        </tr>
        <tr style="cursor: alias">
          <th rowspan="7" scope="row" style="cursor: auto">Ziehen &#x26; Ablegen</th>
          <td><code>alias</code></td>
          <td><img src="alias.gif" alt="breiter Pfeil, der nach oben links zeigt und ein kleineres Ordnersymbol mit einem gekrümmten Pfeil nach oben rechts teilweise verdeckt"/></td>
          <td>Ein Alias oder eine Verknüpfung soll erstellt werden.</td>
        </tr>
        <tr style="cursor: copy">
          <td><code>copy</code></td>
          <td><img class="default" src="copy.gif" alt="breiter Pfeil, der nach oben links zeigt und ein kleineres Ordnersymbol mit einem Pluszeichen teilweise verdeckt" /></td>
          <td>Etwas soll kopiert werden.</td>
        </tr>
        <tr style="cursor: move">
          <td><code>move</code></td>
          <td><img src="move.gif" alt="Pluszeichen aus zwei dünnen Linien. Die vier Spitzen sind kleine, nach außen gerichtete Pfeile" /></td>
          <td>Etwas soll verschoben werden.</td>
        </tr>
        <tr style="cursor: no-drop">
          <td><code>no-drop</code></td>
          <td>
            <img src="no-drop.gif" alt="Zeigersymbol und Symbol für nicht zulässig" />
          </td>
          <td>
            Ein Element darf an der aktuellen Position nicht abgelegt werden.<br /><a href="https://bugzil.la/275173">Firefox-Bug 275173</a>:
            Unter Windows und macOS ist <code>no-drop</code> gleich <code>not-allowed</code>.
          </td>
        </tr>
        <tr style="cursor: not-allowed">
          <td><code>not-allowed</code></td>
          <td><img alt="Symbol für nicht zulässig, ein Kreis mit einem Strich hindurch" src="not-allowed.gif" /></td>
          <td>Die angeforderte Aktion wird nicht ausgeführt.</td>
        </tr>
        <tr style="cursor: grab">
          <td><code>grab</code></td>
          <td><img class="default" src="grab.gif" alt="Symbol einer vollständig geöffneten Hand" /></td>
          <td>Etwas kann gegriffen werden (zum Verschieben ziehen).</td>
        </tr>
        <tr style="cursor: grabbing">
          <td><code>grabbing</code></td>
          <td><img class="default" src="grabbing.gif" alt="Symbol einer geschlossenen Hand, Handrücken"/></td>
          <td>Etwas wird gegriffen (zum Verschieben ziehen).</td>
        </tr>
        <tr style="cursor: all-scroll">
          <th rowspan="15" scope="row" style="cursor: auto">
            Größenänderung &#x26; Scrollen
          </th>
          <td><code>all-scroll</code></td>
          <td><img alt="Symbol eines mittelgroßen Punkts mit vier Dreiecken darum." src="all-scroll.gif" /></td>
          <td>
            Etwas kann in jede Richtung gescrollt werden (verschoben).<br /><a href="https://bugzil.la/275174">Firefox-Bug 275174</a>:
            Unter Windows ist <code>all-scroll</code> gleich <code>move</code>.
          </td>
        </tr>
        <tr style="cursor: col-resize">
          <td><code>col-resize</code></td>
          <td><img alt="col-resize.gif" src="col-resize.gif" alt="zwei schmale parallele vertikale Linien mit einem kleinen nach links zeigenden und einem weiteren nach rechts zeigenden Pfeil" /></td>
          <td>
            Die Größe des Elements/der Spalte kann horizontal geändert werden.
            Häufig als nach links und rechts zeigende Pfeile mit einem sie trennenden vertikalen Balken dargestellt.
          </td>
        </tr>
        <tr style="cursor: row-resize">
          <td><code>row-resize</code></td>
          <td><img src="row-resize.gif" alt="zwei schmale parallele horizontale Linien mit einem kleinen nach oben zeigenden und einem weiteren nach unten zeigenden Pfeil" /></td>
          <td>
            Die Größe des Elements/der Zeile kann vertikal geändert werden.
            Häufig als nach oben und unten zeigende Pfeile mit einem sie trennenden horizontalen Balken dargestellt.
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
            Eine Kante soll verschoben werden. Beispielsweise wird der Mauszeiger <code>se-resize</code> verwendet, wenn die Bewegung an der <em>südöstlichen</em> Ecke des Felds beginnt.<br />
            In einigen Umgebungen wird ein gleichwertiger bidirektionaler Mauszeiger zur Größenänderung angezeigt.
            Beispielsweise sind <code>n-resize</code> und <code>s-resize</code> gleich <code>ns-resize</code>.
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
              alt="dünner langer Pfeil, der nach oben rechts zeigt"
              src="ne-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: nw-resize">
          <td><code>nw-resize</code></td>
          <td>
            <img
              alt="dünner langer Pfeil, der nach oben links zeigt"
              src="nw-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: se-resize">
          <td><code>se-resize</code></td>
          <td>
            <img
              alt="dünner langer Pfeil, der nach unten rechts zeigt"
              src="se-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: sw-resize">
          <td><code>sw-resize</code></td>
          <td>
            <img
              alt="dünner langer Pfeil, der nach unten links zeigt"
              src="sw-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: ew-resize">
          <td><code>ew-resize</code></td>
          <td><img alt="dünner langer Pfeil, der nach links und rechts zeigt" class="default" src="3-resize.gif" /></td>
          <td rowspan="4" style="cursor: auto">Bidirektionaler Mauszeiger zur Größenänderung.</td>
        </tr>
        <tr style="cursor: ns-resize">
          <td><code>ns-resize</code></td>
          <td><img alt="dünner langer Pfeil, der nach oben und unten zeigt" class="default" src="6-resize.gif" /></td>
        </tr>
        <tr style="cursor: nesw-resize">
          <td><code>nesw-resize</code></td>
          <td><img alt="dünner langer Pfeil, der sowohl nach oben rechts als auch nach unten links zeigt" class="default" src="1-resize.gif" /></td>
        </tr>
        <tr style="cursor: nwse-resize">
          <td><code>nwse-resize</code></td>
          <td><img alt="dünner langer Pfeil, der sowohl nach oben links als auch nach unten rechts zeigt" class="default" src="4-resize.gif" /></td>
        </tr>
        <tr style="cursor: zoom-in">
          <th rowspan="2" scope="row" style="cursor: auto">Zoomen</th>
          <td><code>zoom-in</code></td>
          <td><img alt="Lupe mit Pluszeichen" class="default" src="zoom-in.gif" /></td>
          <td rowspan="2" style="cursor: auto">
            <p>Etwas kann vergrößert oder verkleinert werden.</p>
          </td>
        </tr>
        <tr style="cursor: zoom-out">
          <td><code>zoom-out</code></td>
          <td><img alt="Lupe mit Minuszeichen" class="default" src="zoom-out.gif" /></td>
        </tr>
      </tbody>
    </table>

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Hinweise zur Verwendung

### Begrenzungen der Symbolgröße

Obwohl die Spezifikation die Bildgröße für `cursor` nicht begrenzt, beschränken {{Glossary("user_agent", "User Agents")}} diese üblicherweise, um potenziellen Missbrauch zu vermeiden.
Beispielsweise sind Mauszeigerbilder in Firefox und Chromium standardmäßig auf 128x128 Pixel begrenzt, es wird jedoch empfohlen, die Mauszeigerbildgröße auf 32x32 Pixel zu begrenzen. Änderungen des Mauszeigers mithilfe von Bildern, die größer als die vom User Agent maximal unterstützte Größe sind, werden im Allgemeinen einfach ignoriert.

### Unterstützte Bilddateiformate

User Agents müssen laut Spezifikation PNG-Dateien, SVG-v1.1-Dateien im sicheren statischen Modus mit einer natürlichen Größe sowie alle anderen nicht animierten Bilddateiformate unterstützen, die sie für Bilder in anderen Eigenschaften unterstützen.
Desktop-Browser unterstützen außerdem weitgehend das Dateiformat `.cur`.

Die Spezifikation weist außerdem darauf hin, dass User Agents auch SVG-v1.1-Dateien im sicheren animierten Modus mit einer natürlichen Größe sowie alle anderen animierten Bilddateiformate unterstützen _sollten_, die sie für Bilder in anderen Eigenschaften unterstützen.
User Agents _können_ sowohl statische als auch animierte SVG-Bilder unterstützen, die keine natürliche Größe enthalten.

### iPadOS

iPadOS unterstützt Zeigegeräte wie Trackpads und Mäuse. Standardmäßig wird der iPad-Mauszeiger als Kreis angezeigt, und der einzige unterstützte Wert, der das Erscheinungsbild des Zeigers ändert, ist `text`.

### Weitere Hinweise

Änderungen des Mauszeigers, die sich mit Bereichen der Symbolleiste überschneiden, werden üblicherweise blockiert, um Spoofing zu vermeiden.

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
