---
title: OpenType-Schriftmerkmale
short-title: OpenType features
slug: Web/CSS/Guides/Fonts/OpenType_fonts
l10n:
  sourceCommit: 3143a6094e7b87cf1a96b61f9551fb4d95049777
---

Schriftmerkmale oder Varianten beziehen sich auf verschiedene Glyphen oder Zeichenstile, die in einer OpenType-Schriftart enthalten sind. Dazu gehören Dinge wie Ligaturen (spezielle Glyphen, die Zeichen wie 'fi' oder 'ffl' kombinieren), Kerning (Anpassungen an den Abständen zwischen bestimmten Zeichnungsformpaarungen), Brüche, Zahlstile und mehrere andere. Diese werden alle als OpenType-Merkmale bezeichnet und können über spezifische Eigenschaften und Low-Level-Steuerungseigenschaften wie {{cssxref("font-feature-settings")}} im Web verwendet werden. Dieser Artikel stellt Ihnen alles zur Verfügung, was Sie über die Verwendung von OpenType-Schriftmerkmalen in CSS wissen müssen.

Einige Schriftarten haben eines oder mehrere dieser Merkmale standardmäßig aktiviert (Beispiele dafür sind Kerning und Standardligaturen), während andere dem Designer oder Entwickler überlassen werden, um sie in spezifischen Szenarien zu aktivieren.

Neben breiten Merkmalssätzen wie Ligaturen oder abgestimmten Zahlen (Zahlen, die im Gegensatz zu 'oldstyle', die mehr wie Kleinbuchstaben aussehen, gleichmäßig ausgerichtet sind), gibt es auch sehr spezifische wie stilistische Sätze (die mehrere spezifische Varianten von Glyphen enthalten können, die zusammen verwendet werden sollen), Alternativen (die eine oder mehrere Varianten des Buchstabens 'a' sein können) oder sogar sprachspezifische Anpassungen für ostasiatische Sprachen. Im letzteren Fall sind diese Anpassungen tatsächlich notwendig, um die Sprache richtig auszudrücken, und gehen daher über die stilistische Präferenz der meisten anderen OpenType-Merkmale hinaus.

> [!WARNING]
> Es gibt viele CSS-Attribute, die dafür definiert sind, Schriftmerkmale zu nutzen, aber leider sind viele nicht vollständig implementiert. Sie sind alle hier definiert und gezeigt, aber viele werden nur mit der Low-Level-Eigenschaft {{cssxref("font-feature-settings")}} funktionieren. Es ist möglich, CSS so zu schreiben, dass beide Wege funktionieren, aber das kann umständlich werden. Das Problem bei der Verwendung von `font-feature-settings` für alles ist, dass jedes Mal, wenn Sie eines der individuellen Merkmale ändern möchten, Sie die gesamte Zeichenkette neu definieren müssen (ähnlich wie bei der Manipulation von variablen Schriften mit {{cssxref("font-variation-settings")}}).

## Verfügbarkeit von Merkmalen in Schriftarten entdecken

Dies ist manchmal das Schwierigste herauszufinden, wenn Sie keine Dokumentation zu den Schriftarten haben (viele Typdesigner und Schriftgießereien stellen Musterseiten und CSS aus genau diesem Grund zur Verfügung). Aber es gibt einige Seiten, die es einfacher machen, dies herauszufinden. Sie können [wakamaifondue.com](https://wakamaifondue.com/) besuchen, Ihre Schriftartdatei dort auf den Kreis ziehen, wo dies angezeigt wird, und nach ein paar Momenten erhalten Sie einen vollständigen Bericht über alle Fähigkeiten und Merkmale Ihrer Schriftart. [Axis-praxis.org](https://www.axis-praxis.org/) bietet ebenfalls eine ähnliche Möglichkeit, mit der Sie die Merkmale in einem bestimmten Textblock ein- oder ausschalten können.

## Warum sollten Sie sie nutzen?

Angesichts der Tatsache, dass es ein wenig Arbeit erfordert, diese Merkmale zu entdecken und zu nutzen, mag es gerechtfertigt erscheinen, die Frage zu stellen, warum man sich die Mühe machen sollte, sie zu nutzen. Die Antwort liegt in den spezifischen Merkmalen, die eine Website nützlicher, lesbarer und herausgearbeiteter machen:

- **Ligaturen** wie 'ff' oder 'fi' machen den Buchstabenabstand und das Lesen gleichmäßiger und flüssiger.
- **Brüche** können Heimwerker- und Rezeptseiten viel leichter lesbar und verständlich machen.
- **Zahlen** innerhalb von Textabsätzen, die als 'oldstyle' gesetzt sind, fügen sich harmonischer zwischen Kleinbuchstaben ein, und das Setzen als 'tabular numbers' sorgt dafür, dass sie besser ausgerichtet werden, wenn man zum Beispiel eine Liste von Kosten in einer Tabelle erstellt. 'lining'-Zahlen hingegen stehen gleichmäßiger für sich alleine oder vor großgeschriebenen Wörtern.

Obwohl keines dieser Merkmale allein eine Website aufgrund ihrer Abwesenheit nutzlos macht, kann jedes von ihnen der Reihe nach eine Website benutzerfreundlicher und durch Liebe zum Detail einprägsamer machen.

> OpenType-Merkmale sind wie geheime Kompartimente in Schriften. Wenn Sie sie freischalten, finden Sie Wege, um Schriften subtil und dramatisch unterschiedlich aussehen und sich verhalten zu lassen. Nicht alle OpenType-Merkmale sind jederzeit angemessen zu verwenden, aber einige Merkmale sind entscheidend für großartige Typografie. _-- Tim Brown, Head of Typography bei Adobe_.

### Manchmal geht es um Substanz, nicht nur um Stil

Es gibt einige Fälle — wie bei {{cssxref("font-variant-east-asian")}} — in denen OpenType-Merkmale direkt mit der Verwendung verschiedener Formen bestimmter Glyphen verbunden sind, was die Bedeutung und Lesbarkeit beeinflussen kann. In solchen Fällen handelt es sich um mehr als nur eine Nettigkeit, sondern eher um einen integralen Bestandteil des Inhaltes selbst.

## Die Schriftmerkmale

Es gibt eine Reihe von verschiedenen Merkmalen, die berücksichtigt werden müssen. Sie sind hier gruppiert und erklärt gemäß den Hauptattributen und Optionen, die in den W3C-Spezifikationen behandelt werden.

> [!NOTE]
> Die Beispiele unten zeigen die Eigenschaften und einige Beispielkombinationen zusammen mit ihren Low-Level-Syntaxäquivalenten. Sie stimmen möglicherweise nicht genau überein, aufgrund von Inkonsistenzen in der Browserimplementierung, aber in vielen Fällen wird das erste Beispiel dem zweiten entsprechen. Die gezeigten Schriftarten sind Playfair Display, Source Serif Pro, IBM Plex Serif, Dancing Script und Kokoro (alle verfügbar und kostenlos zu verwenden, die meisten sind auf Google Fonts und anderen Diensten erhältlich).

### Kerning

Zugeordnete CSS-Eigenschaft: {{cssxref("font-kerning")}}

Dies bezieht sich auf die Abstände zwischen bestimmten Glyphenpaarungen. Dies ist generell standardmäßig aktiviert (wie von der OpenType-Spezifikation empfohlen). Es sollte beachtet werden, dass, wenn {{cssxref("letter-spacing")}} auch auf Ihren Text angewendet wird, dies nach dem Kerning angewendet wird.
Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

```html hidden live-sample___font-kerning-example
<fieldset>
  <legend>Using <code>font-kerning</code> property</legend>
  <div class="container container1">
    <p>Puffy Pangolins</p>
  </div>
  <input type="checkbox" name="checkbox1" id="checkbox1" value="on" checked />
  <label for="checkbox1">Kerning active</label>
</fieldset>

<fieldset>
  <legend>Using <code>font-feature-settings</code> property</legend>
  <div class="container container2">
    <p>Puffy Pangolins</p>
  </div>
  <input type="checkbox" name="checkbox2" id="checkbox2" value="on" checked />
  <label for="checkbox2">Kerning active</label>
</fieldset>
```

```css hidden live-sample___font-kerning-example
@font-face {
  font-family: "Plex Serif";
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  src:
    url("https://mdn.github.io/shared-assets/fonts/plex/IBMPlexSerif-Regular.woff")
      format("woff"),
    url("https://mdn.github.io/shared-assets/fonts/plex/IBMPlexSerif-Regular.woff2")
      format("woff2");
}

body {
  font:
    1.2em "Plex Serif",
    "Times New Roman",
    serif;
  margin: 1rem;
}

fieldset {
  margin-bottom: 1rem;
}

label {
  user-select: none;
}

.container > p {
  font-size: 4rem;
  margin: 1.5rem 0;
}
```

```css live-sample___font-kerning-example
/* kerning: auto|normal|none */
.container1 * {
  font-kerning: normal;
}
.inactive.container1 * {
  font-kerning: none;
}

/* 'kern' 1|0 (on or off) */
.container2 * {
  font-feature-settings: "kern" 1;
}
.inactive.container2 * {
  font-feature-settings: "kern" 0;
}
```

```js hidden live-sample___font-kerning-example
const checkBox1 = document.getElementById("checkbox1");
const checkBox2 = document.getElementById("checkbox2");
const container1 = document.querySelector(".container1");
const container2 = document.querySelector(".container2");

const toggleInactive = (checkBox, container) => {
  if (checkBox.checked) {
    container.classList.remove("inactive");
  } else {
    container.classList.add("inactive");
  }
};

checkBox1.addEventListener("change", () => {
  toggleInactive(checkBox1, container1);
});

checkBox2.addEventListener("change", () => {
  toggleInactive(checkBox2, container2);
});
```

{{EmbedLiveSample("font-kerning-example", "", "450px")}}

### Alternates

Zugeordnete CSS-Eigenschaft: {{cssxref("font-variant-alternates")}}

Schriften können eine Reihe verschiedener Alternativen für verschiedene Glyphen bereitstellen, wie zum Beispiel unterschiedliche Stile des Kleinbuchstabens 'a' oder mehr oder weniger aufwendige Schwünge in einer Schriftschrift. Diese Eigenschaft kann einen gesamten Satz von Alternativen aktivieren oder nur eine spezifische, abhängig von den angegebenen Werten. Das Beispiel unten zeigt mehrere verschiedene Aspekte der Arbeit mit alternativen Zeichen. Schriften mit alternativen Glyphen können diese allen zur Verfügung stellen oder individuell in separaten stilistischen Sätzen oder sogar einzelnen Zeichen. In diesem Beispiel sehen Sie zwei verschiedene Schriftarten und die Einführung der {{cssxref("@font-feature-values")}}-Regel. Diese wird verwendet, um Abkürzungen oder benannte Optionen zu definieren, die pro Schriftfamilie definiert werden können. Auf diese Weise können Sie eine benannte Option erstellen, die nur auf eine einzelne Schriftart angewendet wird, oder eine, die geteilt wird und allgemeiner angewendet werden kann. Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

```html hidden live-sample___font-variant-alternates-example
<fieldset>
  <legend>Using <code>font-variant-alternates</code> property</legend>
  <div class="container container1">
    <p><span class="script">My</span> Perfidious pangram</p>
  </div>
  <input type="checkbox" name="checkbox1" id="checkbox1" value="on" checked />
  <label for="checkbox1">Alternates active</label>
</fieldset>

<fieldset>
  <legend>Using <code>font-feature-settings</code> property</legend>
  <div class="container container2">
    <p><span class="script">My</span> Perfidious pangram</p>
  </div>
  <input type="checkbox" name="checkbox2" id="checkbox2" value="on" checked />
  <label for="checkbox2">Alternates active</label>
</fieldset>
```

```css hidden live-sample___font-variant-alternates-example
@font-face {
  font-family: "Plex Serif";
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  src:
    url("https://mdn.github.io/shared-assets/fonts/plex/IBMPlexSerif-Regular.woff")
      format("woff"),
    url("https://mdn.github.io/shared-assets/fonts/plex/IBMPlexSerif-Regular.woff2")
      format("woff2");
}

@font-face {
  font-family: "Dancing Script";
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  src:
    url("https://mdn.github.io/shared-assets/fonts/dancing-script/dancing-script-regular.woff")
      format("woff"),
    url("https://mdn.github.io/shared-assets/fonts/dancing-script/dancing-script-regular.woff2")
      format("woff2");
}

body {
  font:
    1.2em "Plex Serif",
    "Times New Roman",
    serif;
  margin: 1rem;
}

.script {
  font-family: "Dancing Script", serif;
}

fieldset {
  margin-bottom: 1rem;
}

label {
  user-select: none;
}

.container > * {
  font-size: 4rem;
  margin: 1.5rem 0;
}
```

```css live-sample___font-variant-alternates-example
@font-feature-values "Plex Serif" {
  @styleset {
    alt-a: 1;
    alt-g: 2;
  }
  @stylistic {
    alternates: 1;
  }
}

@font-feature-values "Dancing Script" {
  @stylistic {
    alternates: 1;
  }
}

.container1 * {
  font-variant-alternates: styleset(alt-a);
}
.container1 .script {
  font-variant-alternates: stylistic(alternates);
}
.inactive.container1 * {
  font-variant-alternates: normal;
}

.container2 * {
  font-feature-settings: "ss01";
}
.container2 .script {
  font-feature-settings: "salt";
}
.inactive.container2 * {
  font-feature-settings:
    "ss01" 0,
    "salt" 0;
}
```

```js hidden live-sample___font-variant-alternates-example
const checkBox1 = document.getElementById("checkbox1");
const checkBox2 = document.getElementById("checkbox2");
const container1 = document.querySelector(".container1");
const container2 = document.querySelector(".container2");

const toggleInactive = (checkBox, container) => {
  if (checkBox.checked) {
    container.classList.remove("inactive");
  } else {
    container.classList.add("inactive");
  }
};

checkBox1.addEventListener("change", () => {
  toggleInactive(checkBox1, container1);
});

checkBox2.addEventListener("change", () => {
  toggleInactive(checkBox2, container2);
});
```

{{EmbedLiveSample("font-variant-alternates-example", "", "600px")}}

In diesem Fall zeigt `@stylistic(alternates)` alle alternativen Zeichen für die jeweilige Schriftart. Die Anwendung auf das Wort 'My' ändert die Darstellung des 'M', und die Anwendung von `@styleset(alt-a)` ändert nur den Kleinbuchstaben 'a'.

Versuchen Sie, die Zeile

```css
font-variant-alternates: styleset(alt-a);
```

in

```css
font-variant-alternates: styleset(alt-g);
```

zu ändern und bemerken Sie, dass der Kleinbuchstabe 'a' wieder in seine reguläre Form zurückkehrt und der Kleinbuchstabe 'g' sich stattdessen ändert.

### Ligaturen

Zugeordnete CSS-Eigenschaft: {{cssxref("font-variant-ligatures")}}

Ligaturen sind Glyphen, die zwei oder mehr separate Glyphen ersetzen, um sie aus einem Abstands- oder ästhetischen Blickwinkel flüssiger darzustellen. Einige der häufigsten sind Buchstaben wie 'fi', 'fl' oder 'ffl' — aber es gibt viele andere Möglichkeiten. Die häufigsten (als gebräuchliche Ligaturen bezeichnet) und es gibt auch spezialisiertere Kategorien wie 'discretionary ligatures', 'historical ligatures' und 'contextual alternates'. Während diese letzten technisch gesehen keine Ligaturen sind, sind sie im Allgemeinen ähnlich, da sie spezifische Buchstabenkombinationen ersetzen, wenn sie zusammen vorkommen.

Obwohl sie häufiger in Schriftschriften vorkommen, werden sie im untenstehenden Beispiel verwendet, um Pfeile zu erstellen. Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

```html hidden live-sample___font-variant-ligatures-example
<fieldset>
  <legend>Using <code>font-variant-ligatures</code> property</legend>
  <div class="container container1">
    <p>Puffy Perfect -^ &lt;-&gt;</p>
  </div>
  <input type="checkbox" name="checkbox1" id="checkbox1" value="on" checked />
  <label for="checkbox1">Ligatures active</label>
</fieldset>

<fieldset>
  <legend>Using <code>font-feature-settings</code> property</legend>
  <div class="container container2">
    <p>Puffy Perfect -^ &lt;-&gt;</p>
  </div>
  <input type="checkbox" name="checkbox2" id="checkbox2" value="on" checked />
  <label for="checkbox2">Ligatures active</label>
</fieldset>
```

```css hidden live-sample___font-variant-ligatures-example
@font-face {
  font-family: "Playfair Display";
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  src:
    url("https://mdn.github.io/shared-assets/fonts/playfair-display/playfair-display-regular.woff")
      format("woff"),
    url("https://mdn.github.io/shared-assets/fonts/playfair-display/playfair-display-regular.woff2")
      format("woff2");
}

body {
  font:
    1.2em "Playfair Display",
    "Times New Roman",
    serif;
  margin: 1rem;
}

fieldset {
  margin-bottom: 1rem;
}

label {
  user-select: none;
}

.container > p {
  font-size: 4rem;
  margin: 1.5rem 0;
}
```

```css live-sample___font-variant-ligatures-example
.container1 * {
  font-variant-ligatures: common-ligatures discretionary-ligatures contextual;
}
.inactive.container1 * {
  font-variant-ligatures: none;
}

/* 'liga', 'dlig', 'hlig', 'calt' */
.container2 * {
  font-feature-settings: "dlig", "liga", "calt";
}
.inactive.container2 * {
  font-feature-settings:
    "dlig" 0,
    "liga" 0,
    "calt" 0;
}
```

```js hidden live-sample___font-variant-ligatures-example
const checkBox1 = document.getElementById("checkbox1");
const checkBox2 = document.getElementById("checkbox2");
const container1 = document.querySelector(".container1");
const container2 = document.querySelector(".container2");

const toggleInactive = (checkBox, container) => {
  if (checkBox.checked) {
    container.classList.remove("inactive");
  } else {
    container.classList.add("inactive");
  }
};

checkBox1.addEventListener("change", () => {
  toggleInactive(checkBox1, container1);
});

checkBox2.addEventListener("change", () => {
  toggleInactive(checkBox2, container2);
});
```

{{EmbedLiveSample("font-variant-ligatures-example", "", "550px")}}

### Position

Zugeordnete CSS-Eigenschaft: {{cssxref("font-variant-position")}}

Positionsvarianten werden verwendet, um typografische hochgestellte und tiefgestellte Glyphen zu aktivieren. Diese sind darauf ausgelegt, mit dem umgebenden Text zu arbeiten, ohne die Grundlinie oder den Zeilenabstand zu verändern. Dies ist besonders nützlich mit den {{htmlelement("sub")}}- oder {{htmlelement("sup")}}-Elementen. Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

```html hidden live-sample___font-variant-position-example
<fieldset>
  <legend>Using <code>font-variant-position</code> property</legend>
  <div class="container container1">
    <p>Ups<span class="super">1</span> and downs<span class="sub">2</span></p>
  </div>
  <input type="checkbox" name="checkbox1" id="checkbox1" value="on" checked />
  <label for="checkbox1">Position active</label>
</fieldset>

<fieldset>
  <legend>Using <code>font-feature-settings</code> property</legend>
  <div class="container container2">
    <p>Ups<span class="super">1</span> and downs<span class="sub">2</span></p>
  </div>
  <input type="checkbox" name="checkbox2" id="checkbox2" value="on" checked />
  <label for="checkbox2">Position active</label>
</fieldset>
```

```css hidden live-sample___font-variant-position-example
@font-face {
  font-family: "Playfair Display";
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  src:
    url("https://mdn.github.io/shared-assets/fonts/playfair-display/playfair-display-regular.woff")
      format("woff"),
    url("https://mdn.github.io/shared-assets/fonts/playfair-display/playfair-display-regular.woff2")
      format("woff2");
}

body {
  font:
    1.2em "Playfair Display",
    "Times New Roman",
    serif;
  margin: 1rem;
}

fieldset {
  margin-bottom: 1rem;
}

label {
  user-select: none;
}

.container > p {
  font-size: 4rem;
  margin: 1.5rem 0;
}
```

```css live-sample___font-variant-position-example
/* position: normal|sub|super */
.container1 .super {
  font-variant-position: super;
}
.container1 .sub {
  font-variant-position: sub;
}
.inactive.container1 * {
  font-variant-position: normal;
}

/* 'subs', 'sups' */
.container2 .super {
  font-feature-settings: "sups";
}
.container2 .sub {
  font-feature-settings: "subs";
}
.inactive.container2 * {
  font-feature-settings:
    "sups" 0,
    "subs" 0;
}
```

```js hidden live-sample___font-variant-position-example
const checkBox1 = document.getElementById("checkbox1");
const checkBox2 = document.getElementById("checkbox2");
const container1 = document.querySelector(".container1");
const container2 = document.querySelector(".container2");

const toggleInactive = (checkBox, container) => {
  if (checkBox.checked) {
    container.classList.remove("inactive");
  } else {
    container.classList.add("inactive");
  }
};

checkBox1.addEventListener("change", () => {
  toggleInactive(checkBox1, container1);
});

checkBox2.addEventListener("change", () => {
  toggleInactive(checkBox2, container2);
});
```

{{EmbedLiveSample("font-variant-position-example", "", "550px")}}

### Kapitale

Zugeordnete CSS-Eigenschaft: {{cssxref("font-variant-caps")}}

Einer der häufigeren Anwendungsfälle für OpenType-Merkmale sind korrekte Small Caps. Diese sind Buchstaben in der Größe von Großbuchstaben, die besser zwischen Kleinbuchstaben passen sollen, und werden im Allgemeinen für Akronyme und Abkürzungen verwendet. Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

```html hidden live-sample___font-variant-caps-example
<fieldset>
  <legend>Using <code>font-variant-caps</code> property</legend>
  <div class="container container1">
    <p>
      <span class="small-caps">Small Caps</span> and
      <span class="all-small-caps">All Small Caps</span>
    </p>
  </div>
  <input type="checkbox" name="checkbox1" id="checkbox1" value="on" checked />
  <label for="checkbox1">Caps active</label>
</fieldset>

<fieldset>
  <legend>Using <code>font-feature-settings</code> property</legend>
  <div class="container container2">
    <p>
      <span class="small-caps">Small Caps</span> and
      <span class="all-small-caps">All Small Caps</span>
    </p>
  </div>
  <input type="checkbox" name="checkbox2" id="checkbox2" value="on" checked />
  <label for="checkbox2">Caps active</label>
</fieldset>
```

```css hidden live-sample___font-variant-caps-example
@font-face {
  font-family: "Playfair Display";
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  src:
    url("https://mdn.github.io/shared-assets/fonts/playfair-display/playfair-display-regular.woff")
      format("woff"),
    url("https://mdn.github.io/shared-assets/fonts/playfair-display/playfair-display-regular.woff2")
      format("woff2");
}

body {
  font:
    1.2em "Playfair Display",
    "Times New Roman",
    serif;
  margin: 1rem;
}

fieldset {
  margin-bottom: 1rem;
}

label {
  user-select: none;
}

.container > p {
  font-size: 4rem;
  margin: 1.5rem 0;
}
```

```css live-sample___font-variant-caps-example
/* position: normal | small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps */
.container1 .small-caps {
  font-variant-caps: small-caps;
}
.container1 .all-small-caps {
  font-variant-caps: all-small-caps;
}
.inactive.container1 * {
  font-variant-caps: normal;
}

/* 'smcp', 'c2sc' */
.container2 .small-caps {
  font-feature-settings: "smcp" 1;
}
.container2 .all-small-caps {
  font-feature-settings:
    "c2sc" 1,
    "smcp" 1;
}
.inactive.container2 * {
  font-feature-settings:
    "smcp" 0,
    "c2sc" 0;
}
```

```js hidden live-sample___font-variant-caps-example
const checkBox1 = document.getElementById("checkbox1");
const checkBox2 = document.getElementById("checkbox2");
const container1 = document.querySelector(".container1");
const container2 = document.querySelector(".container2");

const toggleInactive = (checkBox, container) => {
  if (checkBox.checked) {
    container.classList.remove("inactive");
  } else {
    container.classList.add("inactive");
  }
};

checkBox1.addEventListener("change", () => {
  toggleInactive(checkBox1, container1);
});

checkBox2.addEventListener("change", () => {
  toggleInactive(checkBox2, container2);
});
```

{{EmbedLiveSample("font-variant-caps-example", "", "700px")}}

### Zahlen

Zugeordnete CSS-Eigenschaft: {{cssxref("font-variant-numeric")}}

Es gibt mehrere verschiedene Stile von Zahlen, die gemeinhin in Schriftarten enthalten sind:

- 'Lining'-Zahlen sind alle gleich hoch und auf derselben Grundlinie.
- 'Oldstyle'-Zahlen sind gemischte Höhen und so gestaltet, dass sie wie Aufschwünge und Unterschwünge anderer Kleinbuchstaben aussehen. Diese sind darauf ausgelegt, inline mit Text verwendet zu werden, sodass die Zahlen sich optisch mit den umgebenden Glyphen ähnlich wie Small Caps mischen.

Es gibt auch das Konzept der Abstände. Proportionaler Abstand ist die normale Einstellung, während tabellarischer Abstand die Zahlen gleichmäßig unabhängig von der Zeichenbreite ausrichtet, was es geeigneter macht, um Tabellen von Zahlen in Finanztabellen auszurichten.

Es gibt zwei Arten von Brüchen, die durch diese Eigenschaft unterstützt werden:

- Diagonal gestrichene Brüche.
- Vertikal gestapelte Brüche.

Ordinalzahlen werden ebenfalls unterstützt (wie '1st' oder '3rd'), ebenso eine durchgestrichene Null, falls in der Schrift vorhanden.

#### Lining- und Old-Style-Zahlen

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

```html hidden live-sample___font-variant-numeric-example
<fieldset>
  <legend>Using <code>font-variant-numeric</code> property</legend>
  <div class="container container1">
    <p>
      <span class="lining">6,142</span> or <span class="oldstyle">6,142</span>
    </p>
  </div>
  <input type="checkbox" name="checkbox1" id="checkbox1" value="on" checked />
  <label for="checkbox1">Numeric active</label>
</fieldset>

<fieldset>
  <legend>Using <code>font-feature-settings</code> property</legend>
  <div class="container container2">
    <p>
      <span class="lining">6,142</span> or <span class="oldstyle">6,142</span>
    </p>
  </div>
  <input type="checkbox" name="checkbox2" id="checkbox2" value="on" checked />
  <label for="checkbox2">Numeric active</label>
</fieldset>
```

```css hidden live-sample___font-variant-numeric-example
@font-face {
  font-family: "Source Serif";
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  src:
    url("https://mdn.github.io/shared-assets/fonts/source-serif/SourceSerifPro-Regular.ttf.woff")
      format("woff"),
    url("https://mdn.github.io/shared-assets/fonts/source-serif/SourceSerifPro-Regular.ttf.woff2")
      format("woff2");
}

body {
  font:
    1.2em "Source Serif",
    "Times New Roman",
    serif;
  margin: 20px;
  padding: 0;
}

fieldset {
  margin-bottom: 1rem;
}

label {
  user-select: none;
}

.container > p {
  font-size: 4rem;
  margin: 1.5rem 0;
}
```

```css live-sample___font-variant-numeric-example
.container1 .lining {
  font-variant-numeric: lining-nums;
}
.container1 .oldstyle {
  font-variant-numeric: oldstyle-nums;
}
.inactive.container1 * {
  font-variant-numeric: normal;
}

.container2 .lining {
  font-feature-settings: "lnum" 1;
}
.container2 .oldstyle {
  font-feature-settings: "onum" 1;
}
.inactive.container2 * {
  font-feature-settings:
    "lnum" 0,
    "onum" 0;
}
```

```js hidden live-sample___font-variant-numeric-example
const checkBox1 = document.getElementById("checkbox1");
const checkBox2 = document.getElementById("checkbox2");
const container1 = document.querySelector(".container1");
const container2 = document.querySelector(".container2");

const toggleInactive = (checkBox, container) => {
  if (checkBox.checked) {
    container.classList.remove("inactive");
  } else {
    container.classList.add("inactive");
  }
};

checkBox1.addEventListener("change", () => {
  toggleInactive(checkBox1, container1);
});

checkBox2.addEventListener("change", () => {
  toggleInactive(checkBox2, container2);
});
```

{{EmbedLiveSample("font-variant-numeric-example", "", "550px")}}

#### Brüche, Ordinals und durchgestrichene Null

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

```html hidden live-sample___font-variant-numeric-frac-example
<fieldset>
  <legend>Using <code>font-variant-numeric</code> property</legend>
  <div class="container container1">
    <p>
      <span class="diagonal-fractions">3/16</span>, or
      <span class="ordinal">1st</span> of <span class="zero">0</span>
    </p>
  </div>
  <input type="checkbox" name="checkbox1" id="checkbox1" value="on" checked />
  <label for="checkbox1">Numeric active</label>
</fieldset>

<fieldset>
  <legend>Using <code>font-feature-settings</code> property</legend>
  <div class="container container2">
    <p>
      <span class="diagonal-fractions">3/16</span>, or
      <span class="ordinal">1st</span> of <span class="zero">0</span>
    </p>
  </div>
  <input type="checkbox" name="checkbox2" id="checkbox2" value="on" checked />
  <label for="checkbox2">Numeric active</label>
</fieldset>
```

```css hidden live-sample___font-variant-numeric-frac-example
@font-face {
  font-family: "Source Serif";
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  src:
    url("https://mdn.github.io/shared-assets/fonts/source-serif/SourceSerifPro-Regular.ttf.woff")
      format("woff"),
    url("https://mdn.github.io/shared-assets/fonts/source-serif/SourceSerifPro-Regular.ttf.woff2")
      format("woff2");
}

body {
  font:
    1.2em "Source Serif",
    "Times New Roman",
    serif;
  margin: 20px;
  padding: 0;
}

fieldset {
  margin-bottom: 1rem;
}

label {
  user-select: none;
}

.container > p {
  font-size: 4rem;
  margin: 1.5rem 0;
}
```

```css live-sample___font-variant-numeric-frac-example
.container1 .diagonal-fractions {
  font-variant-numeric: diagonal-fractions;
}
.container1 .ordinal {
  font-variant-numeric: ordinal;
}
.container1 .zero {
  font-variant-numeric: slashed-zero;
}
.inactive.container1 * {
  font-variant-numeric: normal;
}

.container2 .diagonal-fractions {
  font-feature-settings: "frac" 1;
}
.container2 .ordinal {
  font-feature-settings: "ordn" 1;
}
.container2 .zero {
  font-feature-settings: "zero" 1;
}
.inactive.container2 * {
  font-feature-settings:
    "frac" 0,
    "ordn" 0,
    "zero" 0;
}
```

```js hidden live-sample___font-variant-numeric-frac-example
const checkBox1 = document.getElementById("checkbox1");
const checkBox2 = document.getElementById("checkbox2");
const container1 = document.querySelector(".container1");
const container2 = document.querySelector(".container2");

const toggleInactive = (checkBox, container) => {
  if (checkBox.checked) {
    container.classList.remove("inactive");
  } else {
    container.classList.add("inactive");
  }
};

checkBox1.addEventListener("change", () => {
  toggleInactive(checkBox1, container1);
});

checkBox2.addEventListener("change", () => {
  toggleInactive(checkBox2, container2);
});
```

{{EmbedLiveSample("font-variant-numeric-frac-example", "", "550px")}}

### Ostasiatisch

Zugeordnete CSS-Eigenschaft: {{cssxref("font-variant-east-asian")}}

Dies ermöglicht den Zugriff auf verschiedene alternative Formen von Glyphen innerhalb einer Schrift. Das untenstehende Beispiel zeigt eine Zeichenfolge normaler Glyphen. Deaktivieren Sie das Häkchen unten und Sie werden Zeichen nur mit den `jis78`-Glyphen sehen. Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

```html hidden live-sample___font-variant-east-asian-example
<fieldset>
  <legend>Using <code>font-variant-numeric</code> property</legend>
  <div class="container container1">
    <p>唖 芦 溢 茨 鰯 嘘 欝 厩 噂</p>
  </div>
  <input type="checkbox" name="checkbox1" id="checkbox1" value="on" checked />
  <label for="checkbox1">Features disabled</label>
</fieldset>

<fieldset>
  <legend>Using <code>font-feature-settings</code> property</legend>
  <div class="container container2">
    <p>唖 芦 溢 茨 鰯 嘘 欝 厩 噂</p>
  </div>
  <input type="checkbox" name="checkbox2" id="checkbox2" value="on" checked />
  <label for="checkbox2">Features disabled</label>
</fieldset>
```

```css hidden live-sample___font-variant-east-asian-example
@font-face {
  font-family: "Kokoro";
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  src: url("https://mdn.github.io/shared-assets/fonts/kokoro/Kokoro.woff2")
    format("woff2");
}

body {
  font:
    1.2em "Kokoro",
    "Times New Roman",
    serif;
  margin: 20px;
  padding: 0;
}

fieldset {
  margin-bottom: 1rem;
}

label {
  user-select: none;
}

.container > p {
  font-size: 4rem;
  margin: 1.5rem 0;
}
```

```css live-sample___font-variant-east-asian-example
.container1 * {
  font-variant-east-asian: normal;
}
.inactive.container1 * {
  font-variant-east-asian: jis78;
}

.container2 * {
  font-feature-settings: "jp78" 0;
}
.inactive.container2 * {
  font-feature-settings: "jp78";
}
```

```js hidden live-sample___font-variant-east-asian-example
const checkBox1 = document.getElementById("checkbox1");
const checkBox2 = document.getElementById("checkbox2");
const container1 = document.querySelector(".container1");
const container2 = document.querySelector(".container2");

const toggleInactive = (checkBox, container) => {
  if (checkBox.checked) {
    container.classList.remove("inactive");
  } else {
    container.classList.add("inactive");
  }
};

checkBox1.addEventListener("change", () => {
  toggleInactive(checkBox1, container1);
});

checkBox2.addEventListener("change", () => {
  toggleInactive(checkBox2, container2);
});
```

{{EmbedLiveSample("font-variant-east-asian-example", "", "750px")}}

> [!NOTE]
> Diese Glyphen wurden aus einem Schriftsatzbeispiel kopiert und sind nicht als Prosa gedacht.

### Font-Variant Kurzschreibweise

Die {{Cssxref("font-variant")}}-Eigenschaft ist die Kurzschreibweise für die Definition aller oben genannten Eigenschaften. Das Festlegen eines Wertes von `normal` setzt alle Eigenschaften auf ihren Anfangswert zurück. Das Festlegen eines Wertes von `none` setzt `font-variant-ligatures` auf none und alle anderen Eigenschaften auf ihren Anfangswert. Das bedeutet, dass, wenn Kerning standardmäßig aktiviert ist, es auch dann aktiv bleibt, wenn hier ein Wert von `none` angegeben wird. Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

```html hidden live-sample___font-variant-example
<fieldset>
  <legend>Using <code>font-variant</code> property</legend>
  <div class="container container1">
    <p>Spiffy Plastic -> 3/4 time</p>
  </div>
  <input type="checkbox" name="checkbox1" id="checkbox1" value="on" checked />
  <label for="checkbox1">Features active</label>
</fieldset>

<fieldset>
  <legend>Using <code>font-feature-settings</code> property</legend>
  <div class="container container2">
    <p>Spiffy Plastic -> 3/4 time</p>
  </div>
  <input type="checkbox" name="checkbox2" id="checkbox2" value="on" checked />
  <label for="checkbox2">Features active</label>
</fieldset>
```

```css hidden live-sample___font-variant-example
@font-face {
  font-family: "Playfair Display";
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  src:
    url("https://mdn.github.io/shared-assets/fonts/playfair-display/playfair-display-regular.woff")
      format("woff"),
    url("https://mdn.github.io/shared-assets/fonts/playfair-display/playfair-display-regular.woff2")
      format("woff2");
}

body {
  font:
    1.2em "Playfair Display",
    "Times New Roman",
    serif;
  margin: 20px;
  padding: 0;
}

fieldset {
  margin-bottom: 1rem;
}

label {
  user-select: none;
}

.container > p {
  font-size: 4rem;
  margin: 1.5rem 0;
}
```

```css live-sample___font-variant-example
.container1 * {
  font-variant: common-ligatures discretionary-ligatures contextual
    diagonal-fractions;
}
.inactive.container1 * {
  font-variant: none;
}

.container2 * {
  font-feature-settings: "dlig", "liga", "calt", "frac";
}
.inactive.container2 * {
  font-feature-settings:
    "dlig" 0,
    "liga" 0,
    "calt" 0,
    "frac" 0;
}
```

```js hidden live-sample___font-variant-example
const checkBox1 = document.getElementById("checkbox1");
const checkBox2 = document.getElementById("checkbox2");
const container1 = document.querySelector(".container1");
const container2 = document.querySelector(".container2");

const toggleInactive = (checkBox, container) => {
  if (checkBox.checked) {
    container.classList.remove("inactive");
  } else {
    container.classList.add("inactive");
  }
};

checkBox1.addEventListener("change", () => {
  toggleInactive(checkBox1, container1);
});

checkBox2.addEventListener("change", () => {
  toggleInactive(checkBox2, container2);
});
```

{{EmbedLiveSample("font-variant-example", "", "700px")}}

## Font-Feature-Einstellungen

{{cssxref("font-feature-settings")}} ist die 'Low-Level-Syntax', die expliziten Zugriff auf jedes benannte verfügbare OpenType-Merkmal ermöglicht. Dies gibt viel Kontrolle, hat aber einige Nachteile in Bezug darauf, wie es die Vererbung beeinflusst und — wie oben erwähnt —, wenn Sie eine Einstellung ändern möchten, müssen Sie die gesamte Zeichenkette neu deklarieren (es sei denn, Sie verwenden [CSS-Custom Properties](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties), um die Werte festzulegen). Aus diesem Grund ist es am besten, die oben gezeigten Standardeigenschaften so weit wie möglich zu verwenden.

Es gibt eine Vielzahl von möglichen Merkmalen. Oben sehen Sie Beispiele für einige davon und es gibt mehrere Ressourcen, um mehr davon zu finden.

Die allgemeine Syntax sieht folgendermaßen aus:

```css
.small-caps {
  font-feature-settings: "smcp", "c2sc";
}
```

Entsprechend der Spezifikation können Sie entweder nur den 4-Zeichen-Merkmalscode angeben oder eine 1 nach dem Code angeben (um das Merkmal zu aktivieren) oder eine 0 (Null), um es zu deaktivieren. Das ist hilfreich, wenn Sie ein Merkmal wie Ligaturen standardmäßig aktiviert haben, aber Sie möchten sie ausschalten, wie folgt:

```css
.no-ligatures {
  font-feature-settings:
    "liga" 0,
    "dlig" 0;
}
```

### Mehr über font-feature-settings Codes

- ['The Complete CSS Demo for OpenType Features'](https://sparanoid.com/lab/opentype-features/) (kann nicht für die Richtigkeit des Namens bürgen, aber es ist recht umfangreich)
- [Eine Liste von OpenType-Merkmalen auf Wikipedia](https://en.wikipedia.org/wiki/List_of_typographic_features)

## Verwendung der CSS-Feature-Erkennung für die Implementierung

Da nicht alle Eigenschaften gleichmäßig implementiert sind, ist es gute Praxis, Ihr CSS so einzurichten, dass Feature-Erkennung verwendet wird, um die korrekten Eigenschaften zu nutzen, wobei {{cssxref("font-feature-settings")}} als Fallback dient.

Zum Beispiel können Small Caps auf verschiedene Weise gesetzt werden, aber wenn Sie sicherstellen möchten, dass unabhängig von der zugrunde liegenden Groß-/Kleinschreibung alles in Small Caps endet, erfordert dies 2 Einstellungen mit `font-feature-settings` statt eines einzigen Eigenschaftswerts mit {{cssxref("font-variant-caps")}}.

```css
.small-caps {
  font-feature-settings: "smcp", "c2sc";
}

@supports (font-variant-caps: all-small-caps) {
  .small-caps {
    font-feature-settings: normal;
    font-variant-caps: all-small-caps;
  }
}
```

## Siehe auch

### Demos zu CSS OpenType-Merkmalen in CSS

- [The Complete CSS Demo for OpenType Features](https://sparanoid.com/lab/opentype-features/)

### Werkzeuge zur Analyse von Webfonts

- [Wakamai Fondue](https://wakamaifondue.com/)
- [Axis Praxis](https://www.axis-praxis.org/)

### W3C-Spezifikationen

- [Font Feature Properties in CSS Fonts Module Level 3](https://drafts.csswg.org/css-fonts-3/#font-rend-props)
- [font-variant-alternatives in CSS Fonts Module Level 4](https://drafts.csswg.org/css-fonts-4/#propdef-font-variant-alternates)

### Andere Ressourcen

- [Using OpenType features](https://helpx.adobe.com/fonts/web/language-support-and-opentype-features/use-open-type-features.html) von Tim Brown, Head of Typography, Adobe
- [Adobe's Syntax for OpenType features in CSS](https://helpx.adobe.com/fonts/web/language-support-and-opentype-features/open-type-syntax.html)
