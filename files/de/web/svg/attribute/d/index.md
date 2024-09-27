---
title: d
slug: Web/SVG/Attribute/d
l10n:
  sourceCommit: 055a1e91d6fc009abf2abe516057f47c861163d0
---

{{SVGRef}}

Das **`d`**-Attribut definiert einen nachzuzeichnenden Pfad.

Eine Pfaddefinition ist eine Liste von [Pfadbefehlen](#pfadbefehle), bei der jeder Befehl aus einem Befehlsbuchstaben und Zahlen besteht, die die Befehlsparameter repräsentieren. Die Befehle werden [nachfolgend im Detail](#pfadbefehle) beschrieben.

Dieses Attribut wird mit dem SVG-Element [`<path>`](#path) verwendet.

`d` ist ein Präsentationsattribut und kann daher auch als [CSS-Eigenschaft](#verwendung_von_d_als_css-eigenschaft) verwendet werden.

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

## path

Für {{SVGElement('path')}} ist `d` eine Zeichenkette, die eine Serie von Pfadbefehlen enthält, die den zu zeichnenden Pfad definieren.

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

`d` ist ein Präsentationsattribut und kann daher auch mithilfe von CSS geändert werden. Die Eigenschaft nimmt entweder [`path()`](/de/docs/Web/CSS/basic-shape/path) oder `none` an.

Das nachfolgende Beispiel zeigt, wie Sie möglicherweise einen neuen Pfad anwenden, wenn Sie über ein Element fahren. Der neue Pfad ist der gleiche wie der alte, fügt jedoch eine Linie über das Herz hinzu.

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

Für ein Beispiel zur Animation eines `<path>`, siehe das CSS-Eigenschaftsreferenzbeispiel {{cssxref("d")}}.

## Pfadbefehle

Pfadbefehle sind Anweisungen, die einen Pfad definieren, der gezeichnet werden soll. Jeder Befehl besteht aus einem Befehlsbuchstaben und Zahlen, die die Befehlsparameter repräsentieren.

SVG definiert 6 Arten von Pfadbefehlen, für insgesamt 20 Befehle:

- [MoveTo](#moveto-pfadbefehle): `M`, `m`
- [LineTo](#lineto-pfadbefehle): `L`, `l`, `H`, `h`, `V`, `v`
- [Kubische Bézierkurve](#kubische_bézierkurve): `C`, `c`, `S`, `s`
- [Quadratische Bézierkurve](#quadratische_bézierkurve): `Q`, `q`, `T`, `t`
- [Elliptischer Bogen](#elliptischer_bogen): `A`, `a`
- [ClosePath](#closepath): `Z`, `z`

> [!NOTE]
> Befehle sind _groß-/kleinschreibungssensitiv_. Ein Großbuchstabenbefehl spezifiziert absolute Koordinaten, während ein Kleinbuchstabenbefehl Koordinaten relativ zur aktuellen Position angibt.

Es ist immer möglich, einen negativen Wert als Argument für einen Befehl anzugeben:

- negative Winkel sind gegen den Uhrzeigersinn;
- _absolute_ negative _x_- und _y_-Werte werden als negative Koordinaten interpretiert;
- _relative_ negative _x_-Werte bewegen sich nach links, und relative negative _y_-Werte nach oben.

### MoveTo-Pfadbefehle

_MoveTo_-Anweisungen können sich wie das Anheben des Zeichengeräts denken lassen und es an einer anderen Stelle ablegen — mit anderen Worten, das Verschieben des _aktuellen Punkts_ (_P<sub>o</sub>_; {_x<sub>o</sub>_, _y<sub>o</sub>_}) Es wird keine Linie zwischen _P<sub>o</sub>_ und dem neuen _aktuellen Punkt_ (_P<sub>n</sub>_; {_x<sub>n</sub>_, _y<sub>n</sub>_}) gezeichnet.

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
          Bewegen Sie den <em>aktuellen Punkt</em> zu der Koordinate
          <code><var>x</var></code
          >,<code><var>y</var></code
          >. Alle nachfolgenden Koordinatenpaare werden als Parameter für implizite absolute LineTo-Befehle (<code>L</code>) interpretiert (siehe unten).
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
          Bewegen Sie den <em>aktuellen Punkt</em>, indem Sie die zuletzt bekannte Position des Pfades um <code><var>dx</var></code> entlang der x-Achse und um <code><var>dy</var></code> entlang der y-Achse verschieben. Alle nachfolgenden Koordinatenpaare werden als Parameter für implizite relative LineTo-Befehle (<code>l</code>) interpretiert (siehe unten).
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

_LineTo_-Anweisungen zeichnen eine gerade Linie vom _aktuellen Punkt_ (_P<sub>o</sub>_; {_x<sub>o</sub>_, _y<sub>o</sub>_}) zum _Endpunkt_ (_P<sub>n</sub>_; {_x<sub>n</sub>_, _y<sub>n</sub>_}), basierend auf den angegebenen Parametern. Der _Endpunkt_ (_P<sub>n</sub>_) wird dann zum _aktuellen Punkt_ für den nächsten Befehl (_P<sub>o</sub>′_).

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
          Ziehen Sie eine Linie vom <em>aktuellen Punkt</em> zum
          <em>Endpunkt</em>, der durch <code><var>x</var></code
          >,<code><var>y</var></code
          > spezifiziert wird. Alle nachfolgenden Koordinatenpaare werden als Parameter für implizite absolute LineTo-Befehle (<code>L</code>) interpretiert.
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
          Ziehen Sie eine Linie vom <em>aktuellen Punkt</em> zum
          <em>Endpunkt</em>, der der <em>aktuelle Punkt</em> verschoben um <code><var>dx</var></code> entlang der x-Achse und <code><var>dy</var></code> entlang der y-Achse ist. Alle nachfolgenden Koordinatenpaare werden als Parameter für implizite relative LineTo-Befehle (<code>l</code>) interpretiert (siehe unten).
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
          Ziehen Sie eine horizontale Linie vom <em>aktuellen Punkt</em> zum
          <em>Endpunkt</em>, der durch den Parameter
          <code><var>x</var></code> und die <code>y</code>-Koordinate des
          <em>aktuellen Punktes</em> spezifiziert wird. Alle nachfolgenden Werte werden als Parameter für implizite absolute horizontale LineTo-Befehle (<code>H</code>) interpretiert.
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
          Zeichnen Sie eine horizontale Linie vom <em>aktuellen Punkt</em> zum
          <em>Endpunkt</em>, der durch den <em>aktuellen Punkt</em> angegeben wird, verschoben um <code><var>dx</var></code> entlang der x-Achse und die <code>y</code>-Koordinate des <em>aktuellen Punktes</em>. Alle nachfolgenden Werte werden als Parameter für implizite relative horizontale LineTo-Befehle (<code>h</code>) interpretiert.
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
          Zeichnen Sie eine vertikale Linie vom <em>aktuellen Punkt</em> zum
          <em>Endpunkt</em>, der durch den Parameter <code><var>y</var></code>
          und die <code>x</code>-Koordinate des <em>aktuellen Punktes</em>
          spezifiziert wird. Alle nachfolgenden Werte werden als Parameter für
          implizite absolute vertikale LineTo-Befehle (<code>V</code>)
          interpretiert.
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
          Zeichnen Sie eine vertikale Linie vom <em>aktuellen Punkt</em> zum
          <em>Endpunkt</em>, der durch den <em>aktuellen Punkt</em> verschoben
          um <code><var>dy</var></code> entlang der y-Achse und die
          <code>x</code>-Koordinate des <em>aktuellen Punktes</em> angegeben
          wird. Alle nachfolgenden Werte werden als Parameter für implizite
          relative vertikale LineTo-Befehle (<code>v</code>) interpretiert.
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

_Kubische [Bézierkurven](/de/docs/Glossary/Bezier_curve)_ sind glatte Kurvendefinitionen mit vier Punkten:

- Startpunkt (aktueller Punkt)
  - : (_P<sub>o</sub>_ = {_x<sub>o</sub>_, _y<sub>o</sub>_})
- Endpunkt
  - : (_P<sub>n</sub>_ = {_x<sub>n</sub>_, _y<sub>n</sub>_})
- Startsteuerpunkt
  - : (_P<sub>cs</sub>_ = {_x<sub>cs</sub>_, _y<sub>cs</sub>_})
    (steuert die Krümmung nahe dem Beginn der Kurve)
- Endsteuerpunkt
  - : (_P<sub>ce</sub>_ = {_x<sub>ce</sub>_, _y<sub>ce</sub>_})
    (steuert die Krümmung nahe dem Ende der Kurve)

Nach dem Zeichnen wird der _Endpunkt_ (_P<sub>n</sub>_) zum _aktuellen Punkt_ für den nächsten Befehl (_P<sub>o</sub>′_).

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
          Zeichnen Sie eine kubische Bézierkurve vom <em>aktuellen Punkt</em>
          zum <em>Endpunkt</em>, der durch <code><var>x</var></code
          >,<code><var>y</var></code> angegeben ist. Der
          <em>Startsteuerpunkt</em> wird durch <code><var>x1</var></code
          >,<code><var>y1</var></code> und der <em>Endsteuerpunkt</em> durch
          <code><var>x2</var></code
          >,<code><var>y2</var></code> spezifiziert. Alle nachfolgenden
          Dreiergruppen von Koordinatenpaaren werden als Parameter für implizite
          absolute kubische Bézierkurvenbefehle (<code>C</code>) interpretiert.
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
          Zeichnen Sie eine kubische Bézierkurve vom <em>aktuellen Punkt</em>
          zum <em>Endpunkt</em>, der der <em>aktuelle Punkt</em> verschoben um
          <code><var>dx</var></code> entlang der x-Achse und
          <code><var>dy</var></code> entlang der y-Achse ist. Der
          <em>Startsteuerpunkt</em> ist der <em>aktuelle Punkt</em>
          (Startpunkt der Kurve) verschoben um <code><var>dx1</var></code>
          entlang der x-Achse und <code><var>dy1</var></code> entlang der
          y-Achse. Der <em>Endsteuerpunkt</em> ist der <em>aktuelle Punkt</em>
          (Startpunkt der Kurve) verschoben um <code><var>dx2</var></code>
          entlang der x-Achse und <code><var>dy2</var></code> entlang der
          y-Achse. Alle nachfolgenden Dreiergruppen von Koordinatenpaaren werden
          als Parameter für implizite relative kubische Bézierkurvenbefehle
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
        Zeichnen Sie eine glatte kubische Bézierkurve vom <em>aktuellen Punkt</em>
        zum <em>Endpunkt</em>, der durch <code><var>x</var></code
        >,<code><var>y</var></code
        > angegeben ist. Der <em>Endsteuerpunkt</em> wird durch
        <code><var>x2</var></code
        >,<code><var>y2</var></code
        > spezifiziert. Der <em>Startsteuerpunkt</em> ist das Spiegelbild des
        <em>Endsteuerpunktes</em> des vorhergehenden Kurvenbefehls um den <em>aktuellen Punkt</em>.
        Wenn der vorherige Befehl keine kubische Bézierkurve war, ist der <em>Startsteuerpunkt</em>
        der gleiche wie der Startpunkt der Kurve (<em>aktueller Punkt</em>). Alle nachfolgenden
        Paare von Koordinatenpaaren werden als Parameter für implizite absolute glatte kubische
        Bézierkurvenbefehle (<code>S</code>) interpretiert.
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
        Zeichnen Sie eine glatte kubische Bézierkurve vom <em>aktuellen Punkt</em>
        zum <em>Endpunkt</em>, der der <em>aktuelle Punkt</em> verschoben um
        <code><var>dx</var></code> entlang der x-Achse und
        <code><var>dy</var></code> entlang der y-Achse ist. Der
        <em>Endsteuerpunkt</em> ist der <em>aktuelle Punkt</em> (Startpunkt der
        Kurve) verschoben um <code><var>dx2</var></code> entlang der x-Achse und
        <code><var>dy2</var></code> entlang der y-Achse. Der
        <em>Startsteuerpunkt</em> ist das Spiegelbild des
        <em>Endsteuerpunktes</em> des vorhergehenden Kurvenbefehls um den <em>aktuellen Punkt</em>.
        Wenn der vorherige Befehl keine kubische Bézierkurve war, ist der
        <em>Startsteuerpunkt</em> der gleiche wie der Startpunkt der Kurve
        (<em>aktueller Punkt</em>). Alle nachfolgenden Paare von Koordinatenpaaren
        werden als Parameter für implizite relative glatte kubische
        Bézierkurvenbefehle (<code>s</code>) interpretiert.
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

_Quadratische [Bézierkurven](/de/docs/Glossary/Bezier_curve)_ sind glatte Kurvendefinitionen mit drei Punkten:

- Startpunkt (aktueller Punkt)
  - : _P<sub>o</sub>_ = {_x<sub>o</sub>_, _y<sub>o</sub>_}
- Endpunkt
  - : _P<sub>n</sub>_ = {_x<sub>n</sub>_, _y<sub>n</sub>_}
- Steuerpunkt
  - : _P<sub>c</sub>_ = {_x<sub>c</sub>_, _y<sub>c</sub>_}
    (steuert die Krümmung)

Nach dem Zeichnen wird der _Endpunkt_ (_P<sub>n</sub>_) zum _aktuellen Punkt_ für den nächsten Befehl (_P<sub>o</sub>′_).

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
          Zeichnen Sie eine quadratische Bézierkurve vom <em>aktuellen Punkt</em> zum
          <em>Endpunkt</em>, der durch <code><var>x</var></code
          >,<code><var>y</var></code> angegeben ist. Der <em>Steuerpunkt</em> ist durch
          <code><var>x1</var></code>,<code><var>y1</var></code> spezifiziert. Alle nachfolgenden
          Paare von Koordinatenpaaren werden als Parameter für implizite absolute
          quadratische Bézierkurvenbefehle (<code>Q</code>) interpretiert.
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
          Zeichnen Sie eine quadratische Bézierkurve vom <em>aktuellen Punkt</em> zum
          <em>Endpunkt</em>, der der <em>aktuelle Punkt</em> verschoben um <code><var>dx</var></code>
          entlang der x-Achse und <code><var>dy</var></code> entlang der y-Achse ist. Der
          <em>Steuerpunkt</em> ist der <em>aktuelle Punkt</em> (Startpunkt der Kurve) verschoben
          um <code><var>dx1</var></code> entlang der x-Achse und <code><var>dy1</var></code>
          entlang der y-Achse. Alle nachfolgenden Paare von Koordinatenpaaren werden als
          Parameter für implizite relative quadratische Bézierkurvenbefehle (<code>q</code>)
          interpretiert.
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
          Zeichnen Sie eine glatte quadratische Bézierkurve vom
          <em>aktuellen Punkt</em> zum <em>Endpunkt</em>, der durch
          <code><var>x</var></code>,<code><var>y</var></code> angegeben ist.
          Der <em>Steuerpunkt</em> ist das Spiegelbild des <em>Steuerpunktes</em>
          des vorhergehenden Kurvenbefehls um den <em>aktuellen Punkt</em>. Wenn
          der vorherige Befehl keine quadratische Bézierkurve war, ist der
          <em>Steuerpunkt</em> der gleiche wie der Startpunkt der Kurve
          (<em>aktueller Punkt</em>). Alle nachfolgenden Koordinatenpaare werden
          als Parameter für implizite absolute glatte quadratische Bézierkurvenbefehle
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
          Zeichnen Sie eine glatte quadratische Bézierkurve vom
          <em>aktuellen Punkt</em> zum <em>Endpunkt</em>, der der <em>aktuelle
          Punkt</em> verschoben um <code><var>dx</var></code> entlang der
          x-Achse und <code><var>dy</var></code> entlang der y-Achse ist. Der
          <em>Steuerpunkt</em> ist das Spiegelbild des
          <em>Steuerpunktes</em> des vorhergehenden Kurvenbefehls um den
          <em>aktuellen Punkt</em>. Wenn der vorherige Befehl keine
          quadratische Bézierkurve war, ist der <em>Steuerpunkt</em> der
          gleiche wie der Startpunkt der Kurve (<em>aktueller Punkt</em>).
          Alle nachfolgenden Koordinatenpaare werden als Parameter für
          implizite relative glatte quadratische Bézierkurvenbefehle
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

_Elliptische Bogenkurven_ sind Kurven, die als Teil einer Ellipse definiert sind. Es ist manchmal einfacher, hochregelmäßige Kurven mit einem elliptischen Bogen als mit einer Bézierkurve zu zeichnen.

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
          Zeichnen Sie einen Bogen von dem aktuellen Punkt zu der Koordinate
          <code><var>x</var></code
          >,<code><var>y</var></code>. Der Mittelpunkt der Ellipse, die zum Zeichnen des Bogens verwendet wird, wird automatisch basierend auf den anderen Parametern des Befehls berechnet:
        </p>
        <ul>
          <li>
            <code><var>rx</var></code> und <code><var>ry</var></code> sind die
            beiden Radien der Ellipse;
          </li>
          <li>
            <code><var>angle</var></code> stellt eine Rotation (in Grad) der
            Ellipse relativ zur x-Achse dar;
          </li>
          <li>
            <code><var>large-arc-flag</var></code> und
            <code><var>sweep-flag</var></code> erlauben die Auswahl, welcher Bogen
            gezeichnet werden soll, da aus den anderen Parametern 4 mögliche Bögen
            gezeichnet werden können.
            <ul>
              <li>
                <code><var>large-arc-flag</var></code> erlaubt die Auswahl eines
                großen Bogens (<code>1</code>) oder eines kleinen Bogens (<code>0</code>),
              </li>
              <li>
                <code><var>sweep-flag</var></code> erlaubt die Auswahl eines
                im Uhrzeigersinn verlaufenden Bogens (<code>1</code>) oder eines
                gegen den Uhrzeigersinn verlaufenden Bogens (<code>0</code>)
              </li>
            </ul>
          </li>
        </ul>
        Die Koordinate <code><var>x</var></code
        >,<code><var>y</var></code> wird zum neuen aktuellen Punkt für den
        nächsten Befehl. Alle nachfolgenden Parametersätze werden als implizite
        absolute Bogenkurvenbefehle (<code>A</code>) interpretiert.
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
          Zeichnen Sie einen Bogen von dem aktuellen Punkt zu einem Punkt, dessen
          Koordinaten durch den aktuellen Punkt verschoben um
          <code><var>dx</var></code> entlang der x-Achse und
          <code><var>dy</var></code> entlang der y-Achse festgelegt sind. Der
          Mittelpunkt der Ellipse, die zum Zeichnen des Bogens verwendet wird, wird
          automatisch basierend auf den anderen Parametern des Befehls berechnet:
        </p>
        <ul>
          <li>
            <code><var>rx</var></code> und <code><var>ry</var></code> sind die
            beiden Radien der Ellipse;
          </li>
          <li>
            <code><var>angle</var></code> stellt eine Rotation (in Grad) der
            Ellipse relativ zur x-Achse dar;
          </li>
          <li>
            <code><var>large-arc-flag</var></code> und
            <code><var>sweep-flag</var></code> erlauben die Auswahl, welcher Bogen
            gezeichnet werden soll, da aus den anderen Parametern 4 mögliche Bögen
            gezeichnet werden können.
            <ul>
              <li>
                <code><var>large-arc-flag</var></code> erlaubt die Auswahl eines
                großen Bogens (<code>1</code>) oder eines kleinen Bogens (<code>0</code>),
              </li>
              <li>
                <code><var>sweep-flag</var></code> erlaubt die Auswahl eines
                im Uhrzeigersinn verlaufenden Bogens (<code>1</code>) oder eines
                gegen den Uhrzeigersinn verlaufenden Bogens (<code>0</code>)
              </li>
            </ul>
          </li>
        </ul>
        Der aktuelle Punkt erhält seine X- und Y-Koordinaten verschoben um
        <code><var>dx</var></code> und <code><var>dy</var></code> für den nächsten
        Befehl. Alle nachfolgenden Parametersätze werden als implizite
        relative Bogenkurvenbefehle (<code>a</code>) interpretiert.
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
        Schließen Sie den aktuellen Teilpfad, indem Sie den letzten Punkt des
        Pfades mit seinem Anfangspunkt verbinden. Wenn die beiden Punkte an
        verschiedenen Koordinaten sind, wird eine gerade Linie zwischen diesen
        beiden Punkten gezogen.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Das Aussehen einer Form, die mit _ClosePath_ geschlossen wird, kann anders sein als das einer Form, die durch das Zeichnen einer Linie zum Ursprung geschlossen wird, indem einer der anderen Befehle verwendet wird, weil die Linienenden miteinander verbunden werden (entsprechend der Einstellung {{SVGAttr('stroke-linejoin')}}), anstatt nur an den gleichen Koordinaten platziert zu werden.

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

- SVG-Element {{SVGElement("path")}}
- CSS-Eigenschaft {{cssxref("d")}}
