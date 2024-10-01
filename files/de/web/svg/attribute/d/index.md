---
title: d
slug: Web/SVG/Attribute/d
l10n:
  sourceCommit: 055a1e91d6fc009abf2abe516057f47c861163d0
---

{{SVGRef}}

Das **`d`** Attribut definiert einen zu zeichnenden Pfad.

Eine Pfaddefinition ist eine Liste von [Pfadbefehlen](#pfadbefehle), wobei jeder Befehl aus einem Befehlsbuchstaben und Zahlen besteht, die die Parameter des Befehls darstellen.
Die Befehle werden [unten näher erläutert](#pfadbefehle).

Dieses Attribut wird mit dem SVG-Element [`<path>`](#pfad) verwendet.

`d` ist ein Präsentationsattribut und kann daher auch [als CSS-Eigenschaft verwendet werden](#verwendung_von_d_als_css-eigenschaft).

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    fill="none"
    stroke="red"
    d="M 10,30
       A 20,20 0,0,1 50,30
       A 20,20 0,0,1 90,30
       Q 90,60 50,90
       Q 10,60 10,30 z" />
</svg>
```

{{EmbedLiveSample('Example', '100%', 200)}}

## Pfad

Für {{SVGElement('path')}} ist `d` ein String, der eine Reihe von Pfadbefehlen enthält, die den zu zeichnenden Pfad definieren.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong><a href="/de/docs/Web/CSS/string">&#x3C;string></a></strong>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><em>none</em></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Verwendung von d als CSS-Eigenschaft

`d` ist ein Präsentationsattribut und kann daher auch mit CSS modifiziert werden. Die Eigenschaft akzeptiert entweder [`path()`](/de/docs/Web/CSS/basic-shape/path) oder `none`.

Das untenstehende Beispiel zeigt, wie Sie beim Überfahren eines Elements mit der Maus einen neuen Pfad anwenden könnten. Der neue Pfad ist der gleiche wie der alte, fügt jedoch eine Linie quer über das Herz hinzu.

```css
html,
body,
svg {
  height: 100%;
}

/* This path is displayed on hover*/
#svg_css_ex1:hover path {
  d: path(
    "M10,30 A20,20 0,0,1 50,30 A20,20 0,0,1 90,30 Q90,60 50,90 Q10,60 10,30 z M5,5 L90,90"
  );
}
```

```html
<svg id="svg_css_ex1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    fill="none"
    stroke="red"
    d="M 10,30
       A 20,20 0,0,1 50,30
       A 20,20 0,0,1 90,30
       Q 90,60 50,90
       Q 10,60 10,30 z
       " />
</svg>
```

{{EmbedLiveSample('Using d as a CSS Property', '100%', 200)}}

Für ein Animationsbeispiel eines `<path>`, siehe die CSS {{cssxref("d")}} Eigenschafts-Referenzseite.

## Pfadbefehle

Pfadbefehle sind Anweisungen, die einen zu zeichnenden Pfad definieren. Jeder Befehl besteht aus einem Befehlsbuchstaben und Zahlen, die die Parameter des Befehls darstellen.

SVG definiert 6 Arten von Pfadbefehlen, insgesamt 20 Befehle:

- [MoveTo](#moveto-pfadbefehle): `M`, `m`
- [LineTo](#lineto-pfadbefehle): `L`, `l`, `H`, `h`, `V`, `v`
- [Kubische Bézier-Kurve](#kubische_bézier-kurve): `C`, `c`, `S`, `s`
- [Quadratische Bézier-Kurve](#quadratische_bézier-kurve): `Q`, `q`, `T`, `t`
- [Elliptische Bogenkurve](#elliptische_bogenkurve): `A`, `a`
- [ClosePath](#closepath): `Z`, `z`

> [!NOTE]
> Befehle sind _groß-/kleinschreibungsempfindlich_. Ein Großbuchstabe gibt absolute Koordinaten an, während ein Kleinbuchstabe Koordinaten relativ zur aktuellen Position angibt.

Es ist immer möglich, einen negativen Wert als Argument für einen Befehl anzugeben:

- negative Winkel sind gegen den Uhrzeigersinn;
- _absolute_ negative _x_- und _y_-Werte werden als negative Koordinaten interpretiert;
- _relative_ negative _x_-Werte bewegen sich nach links, und relative negative _y_-Werte bewegen sich nach oben.

### MoveTo-Pfadbefehle

_MoveTo_-Anweisungen können als das Aufheben des Zeicheninstruments und das Absetzen an einer anderen Stelle betrachtet werden, also das Bewegen des _aktuellen Punktes_ (_P<sub>o</sub>_; {_x<sub>o</sub>_, _y<sub>o</sub>_}). Es wird keine Linie zwischen _P<sub>o</sub>_ und dem neuen _aktuellen Punkt_ (_P<sub>n</sub>_; {_x<sub>n</sub>_, _y<sub>n</sub>_}) gezeichnet.

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">Befehl</th>
      <th scope="col">Parameter</th>
      <th scope="col">Notizen</th>
    </tr>
    <tr>
      <th scope="row">M</th>
      <td>
        (<code><var>x</var></code
        >, <code><var>y</var></code
        >)+
      </td>
      <td>
        <p>
          Verschiebt den <em>aktuellen Punkt</em> zu der Koordinate
          <code><var>x</var></code
          >,<code><var>y</var></code
          >. Jedes nachfolgende Koordinatenpaar wird als Parameter für implizite absolute LineTo (<code>L</code>)-Befehle interpretiert (<em>siehe unten</em>).
        </p>
        <p>
          <strong>Formel:</strong> <var>P<sub>n</sub></var> = {<code
            ><var>x</var></code
          >, <code><var>y</var></code
          >}
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">m</th>
      <td>
        (<code><var>dx</var></code
        >, <code><var>dy</var></code
        >)+
      </td>
      <td>
        <p>
          Verschiebt den <em>aktuellen Punkt</em> durch Verschieben der letzten bekannten Position des Pfades um <code><var>dx</var></code> entlang der x-Achse und um
          <code><var>dy</var></code> entlang der y-Achse. Jedes nachfolgende Koordinatenpaar wird als Parameter für implizite relative LineTo (<code>l</code>)-Befehle interpretiert (<em>siehe unten</em>).
        </p>
        <p>
          <strong>Formel:</strong> <var>P<sub>n</sub></var> = {<var
            >x<sub>o</sub></var
          >
          + <code><var>dx</var></code
          >, <var>y<sub>o</sub></var> + <code><var>dy</var></code
          >}
        </p>
      </td>
    </tr>
  </tbody>
</table>

#### Beispiele

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    fill="none"
    stroke="red"
    d="M 10,10 h 10
       m  0,10 h 10
       m  0,10 h 10
       M 40,20 h 10
       m  0,10 h 10
       m  0,10 h 10
       m  0,10 h 10
       M 50,50 h 10
       m-20,10 h 10
       m-20,10 h 10
       m-20,10 h 10" />
</svg>
```

{{EmbedLiveSample('MoveTo_path_commands', '100%', 200)}}

### LineTo-Pfadbefehle

_LineTo_-Anweisungen zeichnen eine gerade Linie vom _aktuellen Punkt_ (_P<sub>o</sub>_; {_x<sub>o</sub>_, _y<sub>o</sub>_}) zum _Endpunkt_ (_P<sub>n</sub>_; {_x<sub>n</sub>_, _y<sub>n</sub>_}), basierend auf den angegebenen Parametern. Der _Endpunkt_ (_P<sub>n</sub>_) wird dann der _aktuelle Punkt_ für den nächsten Befehl (_P<sub>o</sub>′_).

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">Befehl</th>
      <th scope="col">Parameter</th>
      <th scope="col">Notizen</th>
    </tr>
    <tr>
      <th scope="row">L</th>
      <td>(<code>x</code>, <code>y</code>)+</td>
      <td>
        <p>
          Zeichnet eine Linie vom <em>aktuellen Punkt</em> zum
          <em>Endpunkt</em>, der durch <code><var>x</var></code
          >,<code><var>y</var></code
          > angegeben wird. Jedes nachfolgende Koordinatenpaar wird als Parameter für implizite absolute LineTo (<code>L</code>)-Befehle interpretiert.
        </p>
        <p>
          <strong>Formel:</strong> <var>P<sub>o</sub>′</var> =
          <var>P<sub>n</sub></var> = {<code><var>x</var></code
          >, <code><var>y</var></code
          >}
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">l</th>
      <td>
        (<code><var>dx</var></code
        >, <code><var>dy</var></code
        >)+
      </td>
      <td>
        <p>
          Zeichnet eine Linie vom <em>aktuellen Punkt</em> zum
          <em>Endpunkt</em>, der durch den <em>aktuellen Punkt</em> verschoben mit
          <code><var>dx</var></code> entlang der x-Achse und <code><var>dy</var></code> entlang der y-Achse. Jedes nachfolgende Koordinatenpaar wird als Parameter für implizite relative LineTo (<code>l</code>)-Befehle interpretiert (<em>siehe unten</em>).
        </p>
        <p>
          <strong>Formel:</strong> <var>P<sub>o</sub>′</var> =
          <var>P<sub>n</sub></var> = {<var>x<sub>o</sub></var> +
          <code><var>dx</var></code
          >, <var>y<sub>o</sub></var> + <code><var>dy</var></code
          >}
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">H</th>
      <td>
        <code><var>x</var></code
        >+
      </td>
      <td>
        <p>
          Zeichnet eine horizontale Linie vom <em>aktuellen Punkt</em> zum
          <em>Endpunkt</em>, der durch den <code><var>x</var></code>-Parameter und die <em>y</em>-Koordinate des <em>aktuellen Punktes</em> spezifiziert ist. Jedes nachfolgende Wert wird als Parameter für implizite absolute horizontale LineTo (<code>H</code>)-Befehle interpretiert.
        </p>
        <p>
          <strong>Formel:</strong> <var>P<sub>o</sub>′</var> =
          <var>P<sub>n</sub></var> = {<code><var>x</var></code
          >, <var>y<sub>o</sub></var
          >}
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">h</th>
      <td>
        <code><var>dx</var></code
        >+
      </td>
      <td>
        <p>
          Zeichnet eine horizontale Linie vom <em>aktuellen Punkt</em> zum
          <em>Endpunkt</em>, der durch den <em>aktuellen Punkt</em> verschoben mit
          <code><var>dx</var></code> entlang der
          x-Achse und der <em>y</em>-Koordinate des <em>aktuellen Punktes</em> spezifiziert ist. Jedes nachfolgende Wert wird als Parameter für implizite relative horizontale LineTo (<code>h</code>)-Befehle interpretiert.
        </p>
        <p>
          <strong>Formel:</strong> <var>P<sub>o</sub>′</var> =
          <var>P<sub>n</sub></var> = {<var>x<sub>o</sub></var> +
          <code><var>dx</var></code
          >, <var>y<sub>o</sub></var
          >}
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">V</th>
      <td>
        <code><var>y</var></code
        >+
      </td>
      <td>
        <p>
          Zeichnet eine vertikale Linie vom <em>aktuellen Punkt</em> zum
          <em>Endpunkt,</em> der durch den <code><var>y</var></code>-Parameter und die <em>x</em>-Koordinate des <em>aktuellen Punktes</em> spezifiziert ist. Jedes nachfolgende Wert wird als Parameter für implizite absolute vertikale LineTo (<code>V</code>)-Befehle interpretiert.
        </p>
        <p>
          <strong>Formel:</strong> <var>P<sub>o</sub>′</var> =
          <var>P<sub>n</sub></var> = {<var>x<sub>o</sub></var
          >, <code><var>y</var></code
          >}
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">v</th>
      <td>
        <code><var>dy</var></code
        >+
      </td>
      <td>
        <p>
          Zeichnet eine vertikale Linie vom <em>aktuellen Punkt</em> zum
          <em>Endpunkt</em>, der durch den <em>aktuellen Punkt</em> verschoben mit
          <code><var>dy</var></code> entlang der y-Achse und der <em>x</em>-Koordinate des <em>aktuellen Punktes</em> spezifiziert ist. Jedes nachfolgende Wert wird als Parameter für implizite relative vertikale LineTo (<code>v</code>)-Befehle interpretiert.
        </p>
        <p>
          <strong>Formel:</strong> <var>P<sub>o</sub>′</var> =
          <var>P<sub>n</sub></var> = {<var>x<sub>o</sub></var
          >, <var>y<sub>o</sub></var> + <code><var>dy</var></code
          >}
        </p>
      </td>
    </tr>
  </tbody>
</table>

#### Beispiele

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <!-- LineTo commands with absolute coordinates -->
  <path
    fill="none"
    stroke="red"
    d="M 10,10
           L 90,90
           V 10
           H 50" />

  <!-- LineTo commands with relative coordinates -->
  <path
    fill="none"
    stroke="red"
    d="M 110,10
           l 80,80
           v -80
           h -40" />
</svg>
```

{{EmbedLiveSample('LineTo_path_commands', '100%', 200)}}

### Kubische Bézier-Kurve

_Kubische {{Glossary("Bezier_curve", "Bézier-Kurven")}}_ sind glatte Kurvendefinitionen unter Verwendung von vier Punkten:

- Startpunkt (aktueller Punkt)
  - : (_P<sub>o</sub>_ = {_x<sub>o</sub>_, _y<sub>o</sub>_})
- Endpunkt
  - : (_P<sub>n</sub>_ = {_x<sub>n</sub>_, _y<sub>n</sub>_})
- Start-Kontrollpunkt
  - : (_P<sub>cs</sub>_ = {_x<sub>cs</sub>_, _y<sub>cs</sub>_})
    (steuert die Krümmung nahe dem Start der Kurve)
- End-Kontrollpunkt
  - : (_P<sub>ce</sub>_ = {_x<sub>ce</sub>_, _y<sub>ce</sub>_})
    (steuert die Krümmung nahe dem Ende der Kurve)

Nach dem Zeichnen wird der _Endpunkt_ (_P<sub>n</sub>_) der _aktuelle Punkt_ für den nächsten Befehl (_P<sub>o</sub>′_).

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">Befehl</th>
      <th scope="col">Parameter</th>
      <th scope="col">Notizen</th>
    </tr>
    <tr>
      <th scope="row">C</th>
      <td>
        (<code><var>x1</var></code
        >,<code><var>y1</var></code
        >, <code><var>x2</var></code
        >,<code><var>y2</var></code
        >, <code><var>x</var></code
        >,<code><var>y</var></code
        >)+
      </td>
      <td>
        <p>
          Zeichnet eine kubische Bézier-Kurve vom <em>aktuellen Punkt</em> zum
          <em>Endpunkt</em>, der durch <code><var>x</var></code
          >,<code><var>y</var></code
          > spezifiziert ist. Der <em>Start-Kontrollpunkt</em> ist durch
          <code><var>x1</var></code
          >,<code><var>y1</var></code> und der <em>End-Kontrollpunkt</em> ist durch <code><var>x2</var></code
          >,<code><var>y2</var></code
          > spezifiziert. Jedes nachfolgende Tripel von Koordinatenpaaren wird als Parameter für implizite absolute kubische Bézier-Kurven (<code>C</code>)-Befehle interpretiert.
        </p>
        <dl>
          <dt>Formeln:</dt>
          <dd>
            <var>P<sub>o</sub>′</var> = <var>P<sub>n</sub></var> = {<code
              ><var>x</var></code
            >, <code><var>y</var></code
            >} ;<br /><var>P<sub>cs</sub></var> = {<code><var>x1</var></code
            >, <code><var>y1</var></code
            >} ;<br /><var>P<sub>ce</sub></var> = {<code><var>x2</var></code
            >, <code><var>y2</var></code
            >}
          </dd>
        </dl>
      </td>
    </tr>
    <tr>
      <th scope="row">c</th>
      <td>
        (<code><var>dx1</var></code
        >,<code><var>dy1</var></code
        >, <code><var>dx2</var></code
        >,<code><var>dy2</var></code
        >, <code><var>dx</var></code
        >,<code><var>dy</var></code
        >)+
      </td>
      <td>
        <p>
          Zeichnet eine kubische Bézier-Kurve vom <em>aktuellen Punkt</em> zum
          <em>Endpunkt</em>, der um <code><var>dx</var></code> entlang der x-Achse und
          <code><var>dy</var></code> entlang der y-Achse vom <em>aktuellen Punkt</em> verschoben ist. Der <em>Start-Kontrollpunkt</em> ist der <em>aktuelle Punkt</em> (Startpunkt der Kurve), verschoben um <code><var>dx1</var></code> entlang der x-Achse und <code><var>dy1</var></code> entlang der y-Achse. Der <em>End-Kontrollpunkt</em> ist der <em>aktuelle Punkt</em> (Startpunkt der Kurve), verschoben um <code><var>dx2</var></code> entlang der x-Achse und <code><var>dy2</var></code> entlang der y-Achse. Jedes nachfolgende Tripel von Koordinatenpaaren wird als Parameter für implizite relative kubische Bézier-Kurven (<code>c</code>)-Befehle interpretiert.
        </p>
        <dl>
          <dt>Formeln:</dt>
          <dd>
            <var>P<sub>o</sub>′</var> = <var>P<sub>n</sub></var> = {<var
              >x<sub>o</sub></var
            >
            + <code><var>dx</var></code
            >, <var>y<sub>o</sub></var> + <code><var>dy</var></code
            >} ;<br /><var>P<sub>cs</sub></var> = {<var>x<sub>o</sub></var> +
            <code><var>dx1</var></code
            >, <var>y<sub>o</sub></var> + <code><var>dy1</var></code
            >} ;<br /><var>P<sub>ce</sub></var> = {<var>x<sub>o</sub></var> +
            <code><var>dx2</var></code
            >, <var>y<sub>o</sub></var> + <code><var>dy2</var></code
            >}
          </dd>
        </dl>
      </td>
    </tr>
    <tr>
      <th scope="row">S</th>
      <td>
        (<code><var>x2</var></code
        >,<code><var>y2</var></code
        >, <code><var>x</var></code
        >,<code><var>y</var></code
        >)+
      </td>
      <td>
        Zeichnet eine glatte kubische Bézier-Kurve vom <em>aktuellen Punkt</em> zum
        <em>Endpunkt</em>, der durch <code><var>x</var></code
        >,<code><var>y</var></code
        > spezifiziert ist. Der <em>End-Kontrollpunkt</em> ist durch
        <code><var>x2</var></code
        >,<code><var>y2</var></code
        > spezifiziert. Der <em>Start-Kontrollpunkt</em> ist die Spiegelung des
        <em>End-Kontrollpunktes</em> des vorherigen Kurvenbefehls um den <em>aktuellen Punkt</em>. Wenn der
        vorherige Befehl keine kubische Bézier-Kurve war, ist der
        <em>Start-Kontrollpunkt</em> der gleiche wie der Startpunkt der Kurve
        (<em>aktueller Punkt</em>). Jedes nachfolgende Paar von Koordinatenpaaren wird als Parameter für implizite absolute glatte kubische Bézier-Kurven (<code>S</code>)-Befehle interpretiert.
      </td>
    </tr>
    <tr>
      <th scope="row">s</th>
      <td>
        (<code><var>dx2</var></code
        >,<code><var>dy2</var></code
        >, <code><var>dx</var></code
        >,<code><var>dy</var></code
        >)+
      </td>
      <td>
        Zeichnet eine glatte kubische Bézier-Kurve vom <em>aktuellen Punkt</em> zum
        <em>Endpunkt,</em> der um <code><var>dx</var></code> entlang der x-Achse und
        <code><var>dy</var></code> entlang der y-Achse vom <em>aktuellen Punkt</em> verschoben ist. Der
        <em>End-Kontrollpunkt</em> ist der <em>aktuelle Punkt</em> (Startpunkt der Kurve), verschoben um <code><var>dx2</var></code> entlang der x-Achse und <code><var>dy2</var></code> entlang der y-Achse. Der
        <em>Start-Kontrollpunkt</em> ist die Spiegelung des
        <em>End-Kontrollpunktes</em> des vorherigen Kurvenbefehls um den <em>aktuellen Punkt</em>. Wenn der
        vorherige Befehl keine kubische Bézier-Kurve war, ist der
        <em>Start-Kontrollpunkt</em> der gleiche wie der Startpunkt der Kurve
        (<em>aktueller Punkt</em>). Jedes nachfolgende Paar von Koordinatenpaaren wird als Parameter für implizite relative glatte kubische Bézier-Kurven (<code>s</code>)-Befehle interpretiert.
      </td>
    </tr>
  </tbody>
</table>

#### Beispiele

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg
  viewBox="0 0 200 100"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- Cubic Bézier curve with absolute coordinates -->
  <path
    fill="none"
    stroke="red"
    d="M 10,90
           C 30,90 25,10 50,10
           S 70,90 90,90" />

  <!-- Cubic Bézier curve with relative coordinates -->
  <path
    fill="none"
    stroke="red"
    d="M 110,90
           c 20,0 15,-80 40,-80
           s 20,80 40,80" />

  <!-- Highlight the curve vertex and control points -->
  <g id="ControlPoints">
    <!-- First cubic command control points -->
    <line x1="10" y1="90" x2="30" y2="90" stroke="lightgrey" />
    <circle cx="30" cy="90" r="1.5" />

    <line x1="50" y1="10" x2="25" y2="10" stroke="lightgrey" />
    <circle cx="25" cy="10" r="1.5" />

    <!-- Second smooth command control points (the first one is implicit) -->
    <line
      x1="50"
      y1="10"
      x2="75"
      y2="10"
      stroke="lightgrey"
      stroke-dasharray="2" />
    <circle cx="75" cy="10" r="1.5" fill="lightgrey" />

    <line x1="90" y1="90" x2="70" y2="90" stroke="lightgrey" />
    <circle cx="70" cy="90" r="1.5" />

    <!-- curve vertex points -->
    <circle cx="10" cy="90" r="1.5" />
    <circle cx="50" cy="10" r="1.5" />
    <circle cx="90" cy="90" r="1.5" />
  </g>
  <use href="#ControlPoints" x="100" />
</svg>
```

{{EmbedLiveSample('Cubic_Bézier_Curve', '100%', 200)}}

### Quadratische Bézier-Kurve

_Quadratische {{Glossary("Bezier_curve", "Bézier-Kurven")}}_ sind glatte Kurvendefinitionen unter Verwendung von drei Punkten:

- Startpunkt (aktueller Punkt)
  - : _P<sub>o</sub>_ = {_x<sub>o</sub>_, _y<sub>o</sub>_}
- Endpunkt
  - : _P<sub>n</sub>_ = {_x<sub>n</sub>_, _y<sub>n</sub>_}
- Kontrollpunkt
  - : _P<sub>c</sub>_ = {_x<sub>c</sub>_, _y<sub>c</sub>_}
    (steuert die Krümmung)

Nach dem Zeichnen wird der _Endpunkt_ (_P<sub>n</sub>_) der _aktuelle Punkt_ für den nächsten Befehl (_P<sub>o</sub>′_).

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">Befehl</th>
      <th scope="col">Parameter</th>
      <th scope="col">Notizen</th>
    </tr>
    <tr>
      <th scope="row">Q</th>
      <td>
        (<code><var>x1</var></code
        >,<code><var>y1</var></code
        >, <code><var>x</var></code
        >,<code><var>y</var></code
        >)+
      </td>
      <td>
        <p>
          Zeichnet eine quadratische Bézier-Kurve vom <em>aktuellen Punkt</em> zum
          <em>Endpunkt</em>, der durch <code><var>x</var></code
          >,<code><var>y</var></code
          > spezifiziert ist. Der <em>Kontrollpunkt</em> ist durch
          <code><var>x1</var></code
          >,<code><var>y1</var></code> spezifiziert. Jedes nachfolgende Paar von Koordinatenpaaren wird als Parameter für implizite absolute quadratische Bézier-Kurven (<code>Q</code>)-Befehle interpretiert.
        </p>
        <dl>
          <dt><strong>Formeln:</strong></dt>
          <dd>
            <var>P<sub>o</sub>′</var> = <var>P<sub>n</sub></var> = {<code
              ><var>x</var></code
            >, <code><var>y</var></code
            >} ;<br /><var>P<sub>c</sub></var> = {<code><var>x1</var></code
            >, <code><var>y1</var></code
            >}
          </dd>
        </dl>
      </td>
    </tr>
    <tr>
      <th scope="row">q</th>
      <td>
        (<code><var>dx1</var></code
        >,<code><var>dy1</var></code
        >, <code><var>dx</var></code
        >,<code><var>dy</var></code
        >)+
      </td>
      <td>
        <p>
          Zeichnet eine quadratische Bézier-Kurve vom <em>aktuellen Punkt</em> zum
          <em>Endpunkt</em>, der um <code><var>dx</var></code> entlang der x-Achse und
          <code><var>dy</var></code> entlang der y-Achse vom <em>aktuellen Punkt</em> verschoben ist. Der
          <em>Kontrollpunkt</em> ist der <em>aktuelle Punkt</em> (Startpunkt der Kurve), verschoben um <code><var>dx1</var></code> entlang der x-Achse und <code><var>dy1</var></code> entlang der y-Achse. Jedes nachfolgende Paar von Koordinatenpaaren wird als Parameter für implizite relative quadratische Bézier-Kurven (<code>q</code>)-Befehle interpretiert.
        </p>
        <dl>
          <dt>Formeln:</dt>
          <dd>
            <var>P<sub>o</sub>′</var> = <var>P<sub>n</sub></var> = {<var
              >x<sub>o</sub></var
            >
            + <code><var>dx</var></code
            >, <var>y<sub>o</sub></var> + <code><var>dy</var></code
            >} ;<br /><var>P<sub>c</sub></var> = {<var>x<sub>o</sub></var> +
            <code><var>dx1</var></code
            >, <var>y<sub>o</sub></var> + <code><var>dy1</var></code
            >}
          </dd>
        </dl>
      </td>
    </tr>
    <tr>
      <th scope="row">T</th>
      <td>
        (<code><var>x</var></code
        >,<code><var>y</var></code
        >)+
      </td>
      <td>
        <p>
          Zeichnet eine glatte quadratische Bézier-Kurve vom
          <em>aktuellen Punkt</em> zum <em>Endpunkt</em>, der durch <code><var>x</var></code
          >,<code><var>y</var></code
          > spezifiziert ist. Der <em>Kontrollpunkt</em> ist die Spiegelung des
          <em>Kontrollpunktes</em> des vorherigen Kurvenbefehls um den <em>aktuellen Punkt</em>. Wenn der vorherige
          Befehl keine quadratische Bézier-Kurve war, ist der <em>Kontrollpunkt</em> der gleiche wie der Startpunkt der Kurve (<em>aktueller Punkt</em>). Jedes nachfolgende Koordinatenpaar wird als Parameter für implizite absolute glatte quadratische Bézier-Kurven (<code>T</code>)-Befehle interpretiert.
        </p>
        <dl>
          <dt>Formel:</dt>
          <dd>
            <var>P<sub>o</sub>′</var> = <var>P<sub>n</sub></var> = {<code
              ><var>x</var></code
            >, <code><var>y</var></code
            >}
          </dd>
        </dl>
      </td>
    </tr>
    <tr>
      <th scope="row">t</th>
      <td>
        (<code><var>dx</var></code
        >,<code><var>dy</var></code
        >)+
      </td>
      <td>
        <p>
          Zeichnet eine glatte quadratische Bézier-Kurve vom
          <em>aktuellen Punkt</em> zum <em>Endpunkt</em>, der um <code><var>dx</var></code> entlang der
          x-Achse und <code><var>dy</var></code> entlang der y-Achse vom <em>aktuellen Punkt</em> verschoben ist. Der
          <em>Kontrollpunkt</em> ist die Spiegelung des
          <em>Kontrollpunktes</em> des vorherigen Kurvenbefehls um den <em>aktuellen Punkt</em>. Wenn der vorherige
          Befehl keine quadratische Bézier-Kurve war, ist der <em>Kontrollpunkt</em> der gleiche wie der Startpunkt der Kurve (<em>aktueller Punkt</em>). Jedes nachfolgende Koordinatenpaar wird als Parameter für implizite relative glatte quadratische Bézier-Kurven (<code>t</code>)-Befehle interpretiert.
        </p>
        <dl>
          <dt>Formeln:</dt>
          <dd>
            <var>P<sub>o</sub>′</var> = <var>P<sub>n</sub></var> = {<var
              >x<sub>o</sub></var
            >
            + <code><var>dx</var></code
            >, <var>y<sub>o</sub></var> + <code><var>dy</var></code
            >}
          </dd>
        </dl>
      </td>
    </tr>
  </tbody>
</table>

#### Beispiele

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg
  viewBox="0 0 200 100"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- Quadratic Bézier curve with implicit repetition -->
  <path
    fill="none"
    stroke="red"
    d="M 10,50
           Q 25,25 40,50
           t 30,0 30,0 30,0 30,0 30,0" />

  <!-- Highlight the curve vertex and control points -->
  <g>
    <polyline
      points="10,50 25,25 40,50"
      stroke="rgb(0 0 0 / 20%)"
      fill="none" />
    <circle cx="25" cy="25" r="1.5" />

    <!-- Curve vertex points -->
    <circle cx="10" cy="50" r="1.5" />
    <circle cx="40" cy="50" r="1.5" />

    <g id="SmoothQuadraticDown">
      <polyline
        points="40,50 55,75 70,50"
        stroke="rgb(0 0 0 / 20%)"
        stroke-dasharray="2"
        fill="none" />
      <circle cx="55" cy="75" r="1.5" fill="lightgrey" />
      <circle cx="70" cy="50" r="1.5" />
    </g>

    <g id="SmoothQuadraticUp">
      <polyline
        points="70,50 85,25 100,50"
        stroke="rgb(0 0 0 / 20%)"
        stroke-dasharray="2"
        fill="none" />
      <circle cx="85" cy="25" r="1.5" fill="lightgrey" />
      <circle cx="100" cy="50" r="1.5" />
    </g>

    <use href="#SmoothQuadraticDown" x="60" />
    <use href="#SmoothQuadraticUp" x="60" />
    <use href="#SmoothQuadraticDown" x="120" />
  </g>
</svg>
```

{{EmbedLiveSample('Quadratic_Bézier_Curve', '100%', 200)}}

### Elliptische Bogenkurve

_Elliptische Bogenkurven_ sind Kurven, die als Teil einer Ellipse definiert sind. Es ist manchmal einfacher, hochgradig regelmäßige Kurven mit einem elliptischen Bogen als mit einer Bézier-Kurve zu zeichnen.

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">Befehl</th>
      <th scope="col">Parameter</th>
      <th scope="col">Notizen</th>
    </tr>
    <tr>
      <th scope="row">A</th>
      <td>
        (<code><var>rx</var></code> <code><var>ry</var></code>
        <code><var>angle</var></code> <code><var>large-arc-flag</var></code>
        <code><var>sweep-flag</var></code> <code><var>x</var></code>
        <code><var>y</var></code
        >)+
      </td>
      <td>
        <p>
          Zeichnet eine Bogenkurve vom aktuellen Punkt zur Koordinate
          <code><var>x</var></code
          >,<code><var>y</var></code
          >. Der Mittelpunkt der Ellipse, die zur Zeichnung des Bogens verwendet wird, wird automatisch auf Basis der anderen Parameter des Befehls bestimmt:
        </p>
        <ul>
          <li>
            <code><var>rx</var></code> und <code><var>ry</var></code> sind die
            beiden Radien der Ellipse;
          </li>
          <li>
            <code><var>angle</var></code> stellt eine Drehung (in Grad) der
            Ellipse relativ zur x-Achse dar;
          </li>
          <li>
            <code><var>large-arc-flag</var></code> und
            <code><var>sweep-flag</var></code> erlauben es, auszuwählen, welcher Bogen gezeichnet werden soll, da 4 mögliche Bögen aus den anderen Parametern gezeichnet werden können.
            <ul>
              <li>
                <code><var>large-arc-flag</var></code> erlaubt es, einen der großen Bögen (<code>1</code>) oder kleinen Bögen (<code>0</code>) auszuwählen,
              </li>
              <li>
                <code><var>sweep-flag</var></code> erlaubt es, einen der im Uhrzeigersinn drehenden Bögen (<code>1</code>) oder gegen den Uhrzeigersinn drehenden Bögen (<code>0</code>) auszuwählen
              </li>
            </ul>
          </li>
        </ul>
        Die Koordinate <code><var>x</var></code
        >,<code><var>y</var></code> wird zum neuen aktuellen Punkt für den nächsten Befehl. Alle nachfolgenden Parameter werden als implizite absolute Bogenkurve (<code>A</code>)-Befehle betrachtet.
      </td>
    </tr>
    <tr>
      <th scope="row">a</th>
      <td>
        (<code><var>rx</var></code> <code><var>ry</var></code>
        <code><var>angle</var></code> <code><var>large-arc-flag</var></code>
        <code><var>sweep-flag</var></code> <code><var>dx</var></code>
        <code><var>dy</var></code
        >)+
      </td>
      <td>
        <p>
          Zeichnet eine Bogenkurve vom aktuellen Punkt zu einem Punkt, dessen Koordinaten die des aktuellen Punktes sind, verschoben um
          <code><var>dx</var></code> entlang der x-Achse und
          <code><var>dy</var></code> entlang der y-Achse. Der Mittelpunkt der Ellipse, die zur Zeichnung des Bogens verwendet wird, wird automatisch auf Basis der anderen Parameter des Befehls bestimmt:
        </p>
        <ul>
          <li>
            <code><var>rx</var></code> und <code><var>ry</var></code> sind die
            beiden Radien der Ellipse;
          </li>
          <li>
            <code><var>angle</var></code> stellt eine Drehung (in Grad) der
            Ellipse relativ zur x-Achse dar;
          </li>
          <li>
            <code><var>large-arc-flag</var></code> und
            <code><var>sweep-flag</var></code> erlauben es, auszuwählen, welcher Bogen gezeichnet werden soll, da 4 mögliche Bögen aus den anderen Parametern gezeichnet werden können.
            <ul>
              <li>
                <code><var>large-arc-flag</var></code> erlaubt die Wahl eines großen
                Bogens (<code>1</code>) oder eines kleinen Bogens (<code>0</code>),
              </li>
              <li>
                <code><var>sweep-flag</var></code> erlaubt die Wahl eines im Uhrzeigersinn Bogens (<code>1</code>) oder gegen den Uhrzeigersinn Bogens
                (<code>0</code>)
              </li>
            </ul>
          </li>
        </ul>
        Der aktuelle Punkt erhält seine X- und Y-Koordinaten verschoben um
        <code><var>dx</var></code> und <code><var>dy</var></code> für den nächsten Befehl. Alle nachfolgenden Parameter werden als implizite relative Bogenkurve (<code>a</code>)-Befehle betrachtet.
      </td>
    </tr>
  </tbody>
</table>

#### Beispiele

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <!-- The influence of the arc flags with which the arc is drawn -->
  <path
    fill="none"
    stroke="red"
    d="M 6,10
           A 6 4 10 1 0 14,10" />

  <path
    fill="none"
    stroke="lime"
    d="M 6,10
           A 6 4 10 1 1 14,10" />

  <path
    fill="none"
    stroke="purple"
    d="M 6,10
           A 6 4 10 0 1 14,10" />

  <path
    fill="none"
    stroke="pink"
    d="M 6,10
           A 6 4 10 0 0 14,10" />
</svg>
```

{{EmbedLiveSample('Elliptical_Arc_Curve', '100%', 200)}}

### ClosePath

_ClosePath_-Anweisungen zeichnen eine gerade Linie von der _aktuellen Position_ zum ersten Punkt im Pfad.

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">Befehl</th>
      <th scope="col">Parameter</th>
      <th scope="col">Notizen</th>
    </tr>
    <tr>
      <th scope="row">Z, z</th>
      <td></td>
      <td>
        Schließt den aktuellen Unterpfad, indem der letzte Punkt des Pfades mit seinem Anfangspunkt verbunden wird. Wenn die beiden Punkte unterschiedliche Koordinaten haben, wird eine gerade Linie zwischen diesen beiden Punkten gezeichnet.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Das Aussehen einer mit _ClosePath_ geschlossenen Form kann sich von einer Form unterscheiden, die durch Zeichnen einer Linie zum Ursprung mit einem der anderen Befehle geschlossen wird, da die Linienenden zusammengefügt werden (gemäß der {{SVGAttr('stroke-linejoin')}}-Einstellung), anstatt einfach auf dieselben Koordinaten gesetzt zu werden.

#### Beispiele

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 -1 30 11" xmlns="http://www.w3.org/2000/svg">
  <!--
  An open shape with the last point of
  the path different to the first one
  -->
  <path
    stroke="red"
    d="M 5,1
           l -4,8 8,0" />

  <!--
  An open shape with the last point of
  the path matching the first one
  -->
  <path
    stroke="red"
    d="M 15,1
           l -4,8 8,0 -4,-8" />

  <!--
  A closed shape with the last point of
  the path different to the first one
  -->
  <path
    stroke="red"
    d="M 25,1
           l -4,8 8,0
           z" />
</svg>
```

{{EmbedLiveSample('ClosePath', '100%', 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG {{SVGElement("path")}} Element
- CSS {{cssxref("d")}} Eigenschaft
