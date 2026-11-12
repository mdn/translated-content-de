---
title: d
slug: Web/SVG/Reference/Attribute/d
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

Das Attribut **`d`** definiert einen zu zeichnenden Pfad.

Eine Pfaddefinition ist eine Liste von [Pfadbefehlen](#pfadbefehle). Jeder Befehl besteht aus einem Befehlsbuchstaben und Zahlen, die seine Parameter darstellen.
Die Befehle werden [weiter unten ausführlich beschrieben](#pfadbefehle).

Dieses Attribut wird mit dem SVG-Element [`<path>`](#path) verwendet.

`d` ist ein Präsentationsattribut und kann daher auch [als CSS-Eigenschaft verwendet werden](#d_als_css-eigenschaft_verwenden).

## path

Für {{SVGElement('path')}} ist `d` eine Zeichenfolge mit einer Reihe von Pfadbefehlen, die den zu zeichnenden Pfad definieren.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <strong><a href="/de/docs/Web/CSS/Reference/Values/string">&#x3C;string></a></strong>
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

## d als CSS-Eigenschaft verwenden

`d` ist ein Präsentationsattribut und kann daher auch mit CSS geändert werden.
Die Eigenschaft akzeptiert entweder {{cssxref("basic-shape/path")}} oder `none`.

Das folgende Beispiel zeigt, wie Sie beim Bewegen des Mauszeigers über ein Element einen neuen Pfad anwenden können.
Der neue Pfad entspricht dem alten, fügt aber eine Linie quer durch das Herz hinzu.

```css
html,
body,
svg {
  height: 100%;
}

/* This path is displayed on hover */
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

Ein Beispiel für die Animation eines `<path>` finden Sie auf der Referenzseite zur CSS-Eigenschaft {{cssxref("d")}}.

## Pfadbefehle

Pfadbefehle sind Anweisungen, die einen zu zeichnenden Pfad definieren. Jeder Befehl besteht aus einem Befehlsbuchstaben und Zahlen, die seine Parameter darstellen.

SVG definiert 6 Arten von Pfadbefehlen mit insgesamt 20 Befehlen:

- [MoveTo](#moveto-pfadbefehle): `M`, `m`
- [LineTo](#lineto-pfadbefehle): `L`, `l`, `H`, `h`, `V`, `v`
- [Kubische Bézierkurve](#kubische_bézierkurve): `C`, `c`, `S`, `s`
- [Quadratische Bézierkurve](#quadratische_bézierkurve): `Q`, `q`, `T`, `t`
- [Elliptischer Bogen](#elliptischer_bogen): `A`, `a`
- [ClosePath](#closepath): `Z`, `z`

> [!NOTE]
> Bei Befehlen wird zwischen Groß- und Kleinschreibung unterschieden. Ein Großbuchstabe gibt absolute Koordinaten an, ein Kleinbuchstabe dagegen Koordinaten relativ zur aktuellen Position.

Als Argument für einen Befehl kann immer ein negativer Wert angegeben werden:

- Negative Winkel verlaufen gegen den Uhrzeigersinn.
- Negative _absolute_ _x_- und _y_-Werte werden als negative Koordinaten interpretiert.
- Negative _relative_ _x_-Werte verschieben die Position nach links, negative relative _y_-Werte nach oben.

### MoveTo-Pfadbefehle

_MoveTo_-Anweisungen lassen sich so verstehen, als würde man das Zeichenwerkzeug anheben und an einer anderen Stelle wieder absetzen. Mit anderen Worten: Sie verschieben den _aktuellen Punkt_ (_P<sub>o</sub>_; {_x<sub>o</sub>_, _y<sub>o</sub>_}). Zwischen _P<sub>o</sub>_ und dem neuen _aktuellen Punkt_ (_P<sub>n</sub>_; {_x<sub>n</sub>_, _y<sub>n</sub>_}) wird keine Linie gezeichnet.

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">Befehl</th>
      <th scope="col">Parameter</th>
      <th scope="col">Hinweise</th>
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
          Verschiebt den <em>aktuellen Punkt</em> zur Koordinate
          <code><var>x</var></code
          >,<code><var>y</var></code
          >. Jedes nachfolgende Koordinatenpaar wird als Parameter eines
          impliziten absoluten LineTo-Befehls (<code>L</code>) interpretiert
          (<em>siehe unten</em>).
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
          Verschiebt den <em>aktuellen Punkt</em>, indem die letzte bekannte
          Position des Pfads um <code><var>dx</var></code> entlang der x-Achse
          und um <code><var>dy</var></code> entlang der y-Achse verschoben wird.
          Jedes nachfolgende Koordinatenpaar wird als Parameter eines impliziten
          relativen LineTo-Befehls (<code>l</code>) interpretiert
          (<em>siehe unten</em>).
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

_LineTo_-Anweisungen zeichnen anhand der angegebenen Parameter eine gerade Linie vom _aktuellen Punkt_ (_P<sub>o</sub>_; {_x<sub>o</sub>_, _y<sub>o</sub>_}) zum _Endpunkt_ (_P<sub>n</sub>_; {_x<sub>n</sub>_, _y<sub>n</sub>_}). Der _Endpunkt_ (_P<sub>n</sub>_) wird anschließend zum _aktuellen Punkt_ für den nächsten Befehl (_P<sub>o</sub>′_).

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">Befehl</th>
      <th scope="col">Parameter</th>
      <th scope="col">Hinweise</th>
    </tr>
    <tr>
      <th scope="row">L</th>
      <td>(<code>x</code>, <code>y</code>)+</td>
      <td>
        <p>
          Zeichnet eine Linie vom <em>aktuellen Punkt</em> zum
          <em>Endpunkt</em>, der durch <code><var>x</var></code
          >,<code><var>y</var></code
          > angegeben wird. Jedes nachfolgende Koordinatenpaar wird als Parameter
          eines impliziten absoluten LineTo-Befehls (<code>L</code>) interpretiert.
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
          <em>Endpunkt</em>. Dieser ergibt sich, indem der <em>aktuelle Punkt</em>
          um <code><var>dx</var></code> entlang der x-Achse und um
          <code><var>dy</var></code> entlang der y-Achse verschoben wird. Jedes
          nachfolgende Koordinatenpaar wird als Parameter eines impliziten
          relativen LineTo-Befehls (<code>l</code>) interpretiert
          (<em>siehe unten</em>).
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
          <em>Endpunkt</em>. Dieser wird durch den Parameter
          <code><var>x</var></code> und die <code>y</code>-Koordinate des
          <em>aktuellen Punkts</em> bestimmt. Jeder nachfolgende Wert wird als
          Parameter eines impliziten absoluten horizontalen LineTo-Befehls
          (<code>H</code>) interpretiert.
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
          <em>Endpunkt</em>. Dessen x-Koordinate ergibt sich, indem der
          <em>aktuelle Punkt</em> um <code><var>dx</var></code> entlang der
          x-Achse verschoben wird; seine <code>y</code>-Koordinate entspricht
          der des <em>aktuellen Punkts</em>. Jeder nachfolgende Wert wird als
          Parameter eines impliziten relativen horizontalen LineTo-Befehls
          (<code>h</code>) interpretiert.
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
          <em>Endpunkt</em>. Dieser wird durch den Parameter
          <code><var>y</var></code> und die <code>x</code>-Koordinate des
          <em>aktuellen Punkts</em> bestimmt. Jeder nachfolgende Wert wird als
          Parameter eines impliziten absoluten vertikalen LineTo-Befehls
          (<code>V</code>) interpretiert.
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
          <em>Endpunkt</em>. Dessen y-Koordinate ergibt sich, indem der
          <em>aktuelle Punkt</em> um <code><var>dy</var></code> entlang der
          y-Achse verschoben wird; seine <code>x</code>-Koordinate entspricht
          der des <em>aktuellen Punkts</em>. Jeder nachfolgende Wert wird als
          Parameter eines impliziten relativen vertikalen LineTo-Befehls
          (<code>v</code>) interpretiert.
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

### Kubische Bézierkurve

_Kubische {{Glossary("Bezier_curve", "Bézierkurven")}}_ sind glatte Kurven, die durch vier Punkte definiert werden:

- Startpunkt (aktueller Punkt)
  - : (_P<sub>o</sub>_ = {_x<sub>o</sub>_, _y<sub>o</sub>_})
- Endpunkt
  - : (_P<sub>n</sub>_ = {_x<sub>n</sub>_, _y<sub>n</sub>_})
- Anfangskontrollpunkt
  - : (_P<sub>cs</sub>_ = {_x<sub>cs</sub>_, _y<sub>cs</sub>_})
    (steuert die Krümmung nahe dem Anfang der Kurve)
- Endkontrollpunkt
  - : (_P<sub>ce</sub>_ = {_x<sub>ce</sub>_, _y<sub>ce</sub>_})
    (steuert die Krümmung nahe dem Ende der Kurve)

Nach dem Zeichnen wird der _Endpunkt_ (_P<sub>n</sub>_) zum _aktuellen Punkt_ für den nächsten Befehl (_P<sub>o</sub>′_).

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">Befehl</th>
      <th scope="col">Parameter</th>
      <th scope="col">Hinweise</th>
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
          Zeichnet eine kubische Bézierkurve vom <em>aktuellen Punkt</em> zum
          <em>Endpunkt</em>, der durch <code><var>x</var></code
          >,<code><var>y</var></code
          > angegeben wird. Der <em>Anfangskontrollpunkt</em> wird durch
          <code><var>x1</var></code
          >,<code><var>y1</var></code> und der <em>Endkontrollpunkt</em> durch
          <code><var>x2</var></code
          >,<code><var>y2</var></code
          > angegeben. Jedes nachfolgende Tripel von Koordinatenpaaren wird als
          Parameter eines impliziten absoluten Befehls für eine kubische
          Bézierkurve (<code>C</code>) interpretiert.
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
          Zeichnet eine kubische Bézierkurve vom <em>aktuellen Punkt</em> zum
          <em>Endpunkt</em>. Dieser ergibt sich, indem der <em>aktuelle Punkt</em>
          um <code><var>dx</var></code> entlang der x-Achse und um
          <code><var>dy</var></code> entlang der y-Achse verschoben wird. Der
          <em>Anfangskontrollpunkt</em> ergibt sich, indem der
          <em>aktuelle Punkt</em> (der Startpunkt der Kurve) um
          <code><var>dx1</var></code> entlang der x-Achse und um
          <code><var>dy1</var></code> entlang der y-Achse verschoben wird. Der
          <em>Endkontrollpunkt</em> ergibt sich, indem der
          <em>aktuelle Punkt</em> (der Startpunkt der Kurve) um
          <code><var>dx2</var></code> entlang der x-Achse und um
          <code><var>dy2</var></code> entlang der y-Achse verschoben wird. Jedes
          nachfolgende Tripel von Koordinatenpaaren wird als Parameter eines
          impliziten relativen Befehls für eine kubische Bézierkurve
          (<code>c</code>) interpretiert.
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
        Zeichnet eine glatte kubische Bézierkurve vom <em>aktuellen Punkt</em>
        zum <em>Endpunkt</em>, der durch <code><var>x</var></code
        >,<code><var>y</var></code
        > angegeben wird. Der <em>Endkontrollpunkt</em> wird durch
        <code><var>x2</var></code
        >,<code><var>y2</var></code
        > angegeben. Der <em>Anfangskontrollpunkt</em> ist die Spiegelung des
        <em>Endkontrollpunkts</em> des vorherigen Kurvenbefehls am
        <em>aktuellen Punkt</em>. War der vorherige Befehl kein Befehl für eine
        kubische Bézierkurve, stimmt der <em>Anfangskontrollpunkt</em> mit dem
        Startpunkt der Kurve (<em>aktueller Punkt</em>) überein. Jedes
        nachfolgende Paar von Koordinatenpaaren wird als Parameter eines
        impliziten absoluten Befehls für eine glatte kubische Bézierkurve
        (<code>S</code>) interpretiert.
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
        Zeichnet eine glatte kubische Bézierkurve vom <em>aktuellen Punkt</em>
        zum <em>Endpunkt</em>. Dieser ergibt sich, indem der
        <em>aktuelle Punkt</em> um <code><var>dx</var></code> entlang der
        x-Achse und um <code><var>dy</var></code> entlang der y-Achse
        verschoben wird. Der <em>Endkontrollpunkt</em> ergibt sich, indem der
        <em>aktuelle Punkt</em> (der Startpunkt der Kurve) um
        <code><var>dx2</var></code> entlang der x-Achse und um
        <code><var>dy2</var></code> entlang der y-Achse verschoben wird. Der
        <em>Anfangskontrollpunkt</em> ist die Spiegelung des
        <em>Endkontrollpunkts</em> des vorherigen Kurvenbefehls am
        <em>aktuellen Punkt</em>. War der vorherige Befehl kein Befehl für eine
        kubische Bézierkurve, stimmt der <em>Anfangskontrollpunkt</em> mit dem
        Startpunkt der Kurve (<em>aktueller Punkt</em>) überein. Jedes
        nachfolgende Paar von Koordinatenpaaren wird als Parameter eines
        impliziten relativen Befehls für eine glatte kubische Bézierkurve
        (<code>s</code>) interpretiert.
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

### Quadratische Bézierkurve

_Quadratische {{Glossary("Bezier_curve", "Bézierkurven")}}_ sind glatte Kurven, die durch drei Punkte definiert werden:

- Startpunkt (aktueller Punkt)
  - : _P<sub>o</sub>_ = {_x<sub>o</sub>_, _y<sub>o</sub>_}
- Endpunkt
  - : _P<sub>n</sub>_ = {_x<sub>n</sub>_, _y<sub>n</sub>_}
- Kontrollpunkt
  - : _P<sub>c</sub>_ = {_x<sub>c</sub>_, _y<sub>c</sub>_}
    (steuert die Krümmung)

Nach dem Zeichnen wird der _Endpunkt_ (_P<sub>n</sub>_) zum _aktuellen Punkt_ für den nächsten Befehl (_P<sub>o</sub>′_).

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">Befehl</th>
      <th scope="col">Parameter</th>
      <th scope="col">Hinweise</th>
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
          Zeichnet eine quadratische Bézierkurve vom <em>aktuellen Punkt</em>
          zum <em>Endpunkt</em>, der durch <code><var>x</var></code
          >,<code><var>y</var></code
          > angegeben wird. Der <em>Kontrollpunkt</em> wird durch
          <code><var>x1</var></code
          >,<code><var>y1</var></code
          > angegeben. Jedes nachfolgende Paar von Koordinatenpaaren wird als
          Parameter eines impliziten absoluten Befehls für eine quadratische
          Bézierkurve (<code>Q</code>) interpretiert.
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
          Zeichnet eine quadratische Bézierkurve vom <em>aktuellen Punkt</em>
          zum <em>Endpunkt</em>. Dieser ergibt sich, indem der
          <em>aktuelle Punkt</em> um <code><var>dx</var></code> entlang der
          x-Achse und um <code><var>dy</var></code> entlang der y-Achse
          verschoben wird. Der <em>Kontrollpunkt</em> ergibt sich, indem der
          <em>aktuelle Punkt</em> (der Startpunkt der Kurve) um
          <code><var>dx1</var></code> entlang der x-Achse und um
          <code><var>dy1</var></code> entlang der y-Achse verschoben wird. Jedes
          nachfolgende Paar von Koordinatenpaaren wird als Parameter eines
          impliziten relativen Befehls für eine quadratische Bézierkurve
          (<code>q</code>) interpretiert.
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
          Zeichnet eine glatte quadratische Bézierkurve vom
          <em>aktuellen Punkt</em> zum <em>Endpunkt</em>, der durch
          <code><var>x</var></code
          >,<code><var>y</var></code
          > angegeben wird. Der <em>Kontrollpunkt</em> ist die Spiegelung des
          <em>Kontrollpunkts</em> des vorherigen Kurvenbefehls am
          <em>aktuellen Punkt</em>. War der vorherige Befehl kein Befehl für
          eine quadratische Bézierkurve, stimmt der <em>Kontrollpunkt</em> mit
          dem Startpunkt der Kurve (<em>aktueller Punkt</em>) überein. Jedes
          nachfolgende Koordinatenpaar wird als Parameter eines impliziten
          absoluten Befehls für eine glatte quadratische Bézierkurve
          (<code>T</code>) interpretiert.
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
          Zeichnet eine glatte quadratische Bézierkurve vom
          <em>aktuellen Punkt</em> zum <em>Endpunkt</em>. Dieser ergibt sich,
          indem der <em>aktuelle Punkt</em> um <code><var>dx</var></code>
          entlang der x-Achse und um <code><var>dy</var></code> entlang der
          y-Achse verschoben wird. Der <em>Kontrollpunkt</em> ist die Spiegelung
          des <em>Kontrollpunkts</em> des vorherigen Kurvenbefehls am
          <em>aktuellen Punkt</em>. War der vorherige Befehl kein Befehl für
          eine quadratische Bézierkurve, stimmt der <em>Kontrollpunkt</em> mit
          dem Startpunkt der Kurve (<em>aktueller Punkt</em>) überein. Jedes
          nachfolgende Koordinatenpaar wird als Parameter eines impliziten
          relativen Befehls für eine glatte quadratische Bézierkurve
          (<code>t</code>) interpretiert.
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

### Elliptischer Bogen

_Elliptische Bögen_ sind Kurven, die als Teil einer Ellipse definiert werden. Stark regelmäßige Kurven lassen sich mit einem elliptischen Bogen mitunter leichter zeichnen als mit einer Bézierkurve.

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">Befehl</th>
      <th scope="col">Parameter</th>
      <th scope="col">Hinweise</th>
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
          Zeichnet einen Bogen vom aktuellen Punkt zur Koordinate
          <code><var>x</var></code
          >,<code><var>y</var></code
          >. Der Mittelpunkt der Ellipse, mit der der Bogen gezeichnet wird,
          wird anhand der übrigen Befehlsparameter automatisch bestimmt:
        </p>
        <ul>
          <li>
            <code><var>rx</var></code> und <code><var>ry</var></code> sind die
            beiden Radien der Ellipse.
          </li>
          <li>
            <code><var>angle</var></code> gibt die Drehung der Ellipse relativ
            zur x-Achse in Grad an.
          </li>
          <li>
            Mit <code><var>large-arc-flag</var></code> und
            <code><var>sweep-flag</var></code> können Sie auswählen, welcher
            Bogen gezeichnet wird. Mit den übrigen Parametern sind vier
            mögliche Bögen definiert.
            <ul>
              <li>
                Mit <code><var>large-arc-flag</var></code> wählen Sie zwischen
                einem großen Bogen (<code>1</code>) und einem kleinen Bogen
                (<code>0</code>).
              </li>
              <li>
                Mit <code><var>sweep-flag</var></code> wählen Sie zwischen
                einem im Uhrzeigersinn verlaufenden Bogen (<code>1</code>) und
                einem gegen den Uhrzeigersinn verlaufenden Bogen (<code>0</code>).
              </li>
            </ul>
          </li>
        </ul>
        Die Koordinate <code><var>x</var></code
        >,<code><var>y</var></code> wird zum neuen aktuellen Punkt für den
        nächsten Befehl. Jeder nachfolgende Parametersatz gilt als impliziter
        absoluter Bogenbefehl (<code>A</code>).
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
          Zeichnet einen Bogen vom aktuellen Punkt zu einem Punkt, dessen
          Koordinaten sich ergeben, indem der aktuelle Punkt um
          <code><var>dx</var></code> entlang der x-Achse und um
          <code><var>dy</var></code> entlang der y-Achse verschoben wird. Der
          Mittelpunkt der Ellipse, mit der der Bogen gezeichnet wird, wird
          anhand der übrigen Befehlsparameter automatisch bestimmt:
        </p>
        <ul>
          <li>
            <code><var>rx</var></code> und <code><var>ry</var></code> sind die
            beiden Radien der Ellipse.
          </li>
          <li>
            <code><var>angle</var></code> gibt die Drehung der Ellipse relativ
            zur x-Achse in Grad an.
          </li>
          <li>
            Mit <code><var>large-arc-flag</var></code> und
            <code><var>sweep-flag</var></code> können Sie auswählen, welcher
            Bogen gezeichnet wird. Mit den übrigen Parametern sind vier
            mögliche Bögen definiert.
            <ul>
              <li>
                Mit <code><var>large-arc-flag</var></code> wählen Sie zwischen
                einem großen Bogen (<code>1</code>) und einem kleinen Bogen
                (<code>0</code>).
              </li>
              <li>
                Mit <code><var>sweep-flag</var></code> wählen Sie zwischen
                einem im Uhrzeigersinn verlaufenden Bogen (<code>1</code>) und
                einem gegen den Uhrzeigersinn verlaufenden Bogen (<code>0</code>).
              </li>
            </ul>
          </li>
        </ul>
        Für den nächsten Befehl werden die X- und Y-Koordinaten des aktuellen
        Punkts um <code><var>dx</var></code> beziehungsweise
        <code><var>dy</var></code> verschoben. Jeder nachfolgende Parametersatz
        gilt als impliziter relativer Bogenbefehl (<code>a</code>).
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

_ClosePath_-Anweisungen zeichnen eine gerade Linie von der _aktuellen Position_ zum ersten Punkt des Pfads.

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">Befehl</th>
      <th scope="col">Parameter</th>
      <th scope="col">Hinweise</th>
    </tr>
    <tr>
      <th scope="row">Z, z</th>
      <td></td>
      <td>
        Schließt den aktuellen Teilpfad, indem der letzte Punkt des Pfads mit
        seinem Anfangspunkt verbunden wird. Liegen die beiden Punkte an
        unterschiedlichen Koordinaten, wird eine gerade Linie zwischen ihnen
        gezeichnet.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Eine mit _ClosePath_ geschlossene Form kann anders aussehen als eine Form, die mit einem der anderen Befehle durch eine Linie zum Anfangspunkt geschlossen wird. Bei _ClosePath_ werden die Linienenden gemäß der Einstellung {{SVGAttr('stroke-linejoin')}} miteinander verbunden, statt lediglich an denselben Koordinaten zu liegen.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- SVG-Element {{SVGElement("path")}}
- CSS-Eigenschaft {{cssxref("d")}}
