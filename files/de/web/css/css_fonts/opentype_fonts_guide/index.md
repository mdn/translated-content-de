---
title: OpenType-Schriftartfunktionen
short-title: OpenType features
slug: Web/CSS/CSS_fonts/OpenType_fonts_guide
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Schriftartfunktionen oder Varianten beziehen sich auf verschiedene Glyphen oder Zeichenstile, die in einer OpenType-Schriftart enthalten sind. Dazu gehören Dinge wie Ligaturen (spezielle Glyphen, die Zeichen wie 'fi' oder 'ffl' kombinieren), Kerning (Anpassungen des Abstands zwischen bestimmten Buchstabenpaaren), Brüche, Ziffernstile und mehrere andere. Diese werden alle als OpenType-Funktionen bezeichnet und stehen im Web über spezifische Eigenschaften und Low-Level-Steuerungseigenschaften zur Verfügung — {{cssxref("font-feature-settings")}}. Dieser Artikel bietet Ihnen alles, was Sie über die Verwendung von OpenType-Schriftartfunktionen in CSS wissen müssen.

Einige Schriftarten haben eine oder mehrere dieser Funktionen standardmäßig aktiviert (Kerning und Standardligaturen sind häufige Beispiele), während andere dem Designer oder Entwickler überlassen bleiben, um sie in bestimmten Szenarien zu aktivieren.

Zusätzlich zu breiten Funktionssätzen wie Ligaturen oder liniertem Figuren (Ziffern, die gleichmäßig ausgerichtet sind im Gegensatz zu 'Oldstyle', die mehr wie Kleinbuchstaben aussehen), gibt es auch sehr spezifische wie stilistische Sätze (die mehrere spezifische Varianten von Glyphen enthalten könnten, die zusammen verwendet werden sollen), Alternativen (die eine oder mehrere Varianten des Buchstabens 'a' sein könnten) oder sogar sprachspezifische Änderungen für ostasiatische Sprachen. Im letztgenannten Fall sind diese Änderungen tatsächlich notwendig, um die Sprache richtig auszudrücken, sodass sie über die eher stilistischen Vorlieben der meisten anderen OpenType-Funktionen hinausgehen.

> [!WARNING]
> Es gibt viele CSS-Attribute, die definiert sind, um Schriftartfunktionen zu nutzen, aber leider sind viele nicht vollständig implementiert. Sie sind hier alle definiert und gezeigt, aber viele werden nur mit der Low-Level-Eigenschaft {{cssxref("font-feature-settings")}} funktionieren. Es ist möglich, CSS zu schreiben, das auf beide Arten funktioniert, aber das kann mühsam werden. Das Problem bei der Verwendung von `font-feature-settings` für alles ist, dass jedes Mal, wenn Sie eine der einzelnen Funktionen ändern möchten, Sie die gesamte Zeichenfolge neu definieren müssen (ähnlich wie bei der Manipulation variabler Schriftarten mit {{cssxref("font-variation-settings")}}).

## Verfügbarkeit von Funktionen in Schriftarten entdecken

Dies ist manchmal das kniffligste, wenn Sie keine Dokumentation haben, die mit den Schriftarten geliefert wurde (viele Typdesigner und Gießereien stellen Beispielseiten und CSS genau aus diesem Grund zur Verfügung). Aber es gibt einige Seiten, die es leichter machen, dies herauszufinden. Sie können [wakamaifondue.com](https://wakamaifondue.com/) besuchen, Ihre Schriftartdatei auf den angegebenen Kreis ziehen, und in wenigen Momenten erhalten Sie einen vollständigen Bericht über alle Fähigkeiten und Funktionen Ihrer Schriftart. [Axis-praxis.org](https://www.axis-praxis.org/) bietet ebenfalls eine ähnliche Funktionalität, mit der Möglichkeit, auf die Funktionen zu klicken, um sie in einem bestimmten Textblock ein- oder auszuschalten.

## Warum sollten Sie sie verwenden?

Angesichts der Tatsache, dass diese Funktionen etwas Arbeit erfordern, um entdeckt und verwendet zu werden, mag es eine berechtigte Frage sein, warum man sich überhaupt damit beschäftigen sollte, sie zu verwenden. Die Antwort liegt in den spezifischen Funktionen, die eine Website nützlicher, lesbarer und polierter machen:

- **Ligaturen** wie 'ff' oder 'fi' machen den Buchstabenabstand und das Lesen gleichmäßiger und flüssiger.
- **Brüche** können Heimwerker- und Rezeptseiten viel leichter lesbar und verständlich machen.
- **Ziffern** innerhalb von Textabsätzen, die als 'Oldstyle' gesetzt sind, passen sich besser zwischen Kleinbuchstaben ein, und ebenso macht die Einstellung als 'Tabellenzahlen', dass sie sich besser ausrichten, wenn sie eine Liste von Kosten in einer Tabelle einstellen. 'Linierte' Zahlen hingegen stehen gleichmäßiger allein oder vor großgeschriebenen Wörtern.

Während keine dieser Funktionen allein eine Website unbrauchbar machen wird, wenn sie fehlen, kann jede von ihnen die Website leichter benutzbar und durch ihre Liebe zum Detail einprägsamer machen.

> OpenType-Funktionen sind wie geheime Fächer in Schriftarten. Entsperren Sie sie und Sie werden Wege finden, wie Schriftarten subtil und dramatisch anders aussehen und sich verhalten können. Nicht alle OpenType-Funktionen sind immer angebracht, aber einige Funktionen sind entscheidend für großartige Typografie. _-- Tim Brown, Leiter der Typografie bei Adobe._

### Manchmal geht es um Substanz, nicht nur um Stil

Es gibt einige Fälle — wie mit {{cssxref("font-variant-east-asian")}} —, in denen OpenType-Funktionen direkt mit der Verwendung verschiedener Formen bestimmter Glyphen verbunden sind, was Bedeutung und Lesbarkeit beeinflussen kann. In solchen Fällen geht es um mehr als nur um eine Nettigkeit, sondern um einen integralen Bestandteil des Inhalts selbst.

## Die Schriftartfunktionen

Es gibt eine Reihe verschiedener Funktionen zu berücksichtigen. Sie sind hier gruppiert und erklärt in Übereinstimmung mit den Hauptattributen und Optionen, die in den W3C-Spezifikationen abgedeckt sind.

> [!NOTE]
> Die folgenden Beispiele zeigen die Eigenschaften und einige Beispielkombinationen, zusammen mit den Low-Level-Syntax-Äquivalenten. Sie stimmen möglicherweise nicht genau überein aufgrund von Inkonsistenzen in der Browserimplementierung, aber in vielen Fällen wird das erste Beispiel dem zweiten entsprechen. Die gezeigten Schriftarten sind Playfair Display, Source Serif Pro, IBM Plex Serif, Dancing Script und Kokoro (alle verfügbar und kostenlos nutzbar, die meisten sind auf Google Fonts und anderen Diensten verfügbar).

### Kerning

Zugehörige CSS-Eigenschaft: {{cssxref("font-kerning")}}

Dies bezieht sich auf den Abstand zwischen bestimmten Glyphpaaren. Dies ist in der Regel standardmäßig aktiviert (wie in der OpenType-Spezifikation empfohlen). Es sollte beachtet werden, dass, wenn {{cssxref("letter-spacing")}} auch für Ihren Text gesetzt ist, dieser nach dem Kerning angewendet wird. Klicken Sie auf "Play" in den untenstehenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

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
  font-weight: 400;
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

### Alternativen

Zugehörige CSS-Eigenschaft: {{cssxref("font-variant-alternates")}}

Schriften können eine Reihe verschiedener Alternativen für verschiedene Glyphen liefern, wie verschiedene Stile von Kleinbuchstaben 'a' oder mehr oder weniger aufwendige Schwünge in einer Skriptschriftart. Diese Eigenschaft kann ein ganzes Set von Alternativen oder nur eine bestimmte aktivieren, abhängig von den angegebenen Werten. Das folgende Beispiel zeigt mehrere verschiedene Aspekte der Arbeit mit alternativen Zeichen. Schriftarten mit alternativen Glyphen können diese im ganzen Bereich verfügbar machen oder individuell in separaten stilistischen Sätzen oder sogar einzelnen Zeichen. In diesem Beispiel sehen Sie zwei verschiedene Schriftarten und die Einführung der {{cssxref("@font-feature-values")}} Anweisung. Diese wird verwendet, um Abkürzungen oder benannte Optionen zu definieren, die pro Schriftfamilie definiert werden können. Auf diese Weise können Sie eine benannte Option erstellen, die nur für eine einzelne Schriftart gilt, oder eine, die geteilt wird und allgemein angewendet werden kann. Klicken Sie auf "Play" in den untenstehenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

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

In diesem Fall zeigt `@stylistic(alternates)` alle alternativen Zeichen für beide Schriftarten. Wenn dies nur auf das Wort 'My' angewendet wird, ändert sich die Darstellung des 'M', und das Anwenden von `@styleset(alt-a)` ändert nur den Kleinbuchstaben 'a'.

Versuchen Sie, die Zeile

```css
font-variant-alternates: styleset(alt-a);
```

in

```css
font-variant-alternates: styleset(alt-g);
```

zu ändern und bemerken Sie, dass der Kleinbuchstabe 'a' in seine reguläre Form zurückkehrt und der Kleinbuchstabe 'g' sich ändert.

### Ligaturen

Zugehörige CSS-Eigenschaft: {{cssxref("font-variant-ligatures")}}

Ligaturen sind Glyphen, die zwei oder mehr separate Glyphen ersetzen, um sie glatter darzustellen (aus einem Abstands- oder ästhetischen Perspektive). Einige der häufigsten sind Buchstaben wie 'fi', 'fl' oder 'ffl' — aber es gibt viele andere Möglichkeiten. Es gibt die häufigsten (als gewöhnliche Ligaturen bezeichnet) und es gibt auch spezialisiertere Kategorien wie 'diskretionäre Ligaturen', 'historische Ligaturen' und 'kontextuelle Alternativen'. Auch wenn diese letzten technisch keine Ligaturen sind, sind sie im Allgemeinen ähnlich, da sie spezifische Kombinationen von Buchstaben ersetzen, wenn sie zusammen erscheinen.

Obwohl sie in Skriptschriften häufiger vorkommen, werden sie im folgenden Beispiel verwendet, um Pfeile zu erstellen. Klicken Sie auf "Play" in den untenstehenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

```html hidden live-sample___font-variant-ligatures-example
<fieldset>
  <legend>Using <code>font-variant-ligatures</code> property</legend>
  <div class="container container1">
    <p>Puffy Perfect -^ <-></p>
  </div>
  <input type="checkbox" name="checkbox1" id="checkbox1" value="on" checked />
  <label for="checkbox1">Ligatures active</label>
</fieldset>

<fieldset>
  <legend>Using <code>font-feature-settings</code> property</legend>
  <div class="container container2">
    <p>Puffy Perfect -^ <-></p>
  </div>
  <input type="checkbox" name="checkbox2" id="checkbox2" value="on" checked />
  <label for="checkbox2">Ligatures active</label>
</fieldset>
```

```css hidden live-sample___font-variant-ligatures-example
@font-face {
  font-family: "Playfair Display";
  font-weight: 400;
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

Zugehörige CSS-Eigenschaft: {{cssxref("font-variant-position")}}

Positionsvarianten werden verwendet, um typografische Hoch- und Tiefstellungen von Glyphen zu ermöglichen. Diese sind so gestaltet, dass sie mit dem umgebenden Text arbeiten, ohne die Grundlinie oder den Zeilenabstand zu ändern. Dies ist besonders nützlich in Verbindung mit den {{htmlelement("sub")}} oder {{htmlelement("sup")}} Elementen. Klicken Sie auf "Play" in den untenstehenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

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
  font-weight: 400;
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

### Großbuchstaben

Zugehörige CSS-Eigenschaft: {{cssxref("font-variant-caps")}}

Einer der häufigeren Anwendungsfälle für OpenType-Funktionen sind ordentliche Kapitälchen. Diese sind Großbuchstaben, die so dimensioniert sind, dass sie sich besser unter Kleinbuchstaben einfügen und in der Regel für Akronyme und Abkürzungen verwendet werden. Klicken Sie auf "Play" in den untenstehenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

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
  font-weight: 400;
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

### Ziffern

Zugehörige CSS-Eigenschaft: {{cssxref("font-variant-numeric")}}

Es gibt mehrere verschiedene Ziffernstile, die häufig in Schriftarten enthalten sind:

- 'Linierende' Zahlen sind alle gleich hoch und auf derselben Grundlinie.
- 'Oldstyle'-Zahlen sind gemischter Höhe und so gestaltet, dass sie den Anschein von Auf- und Abstrichen wie andere Kleinbuchstaben haben. Diese sind dafür gedacht, mit Fließtext verwendet zu werden, sodass die Ziffern optisch mit den umgebenden Glyphen verschmelzen, ähnlich wie bei Kapitälchen.

Es gibt auch den Begriff der Abstandsarten. Proportionaler Abstand ist die normale Einstellung, während tabellarischer Abstand Ziffern gleichmäßig ausrichtet, unabhängig von der Zeichenbreite, was ihn für das Ausrichten von Tabellendaten in Finanztabellen geeigneter macht.

Es gibt zwei Arten von Brüchen, die durch diese Eigenschaft unterstützt werden:

- Diagonal geteilte Brüche.
- Vertikal gestapelte Brüche.

Ordinalzahlen werden ebenfalls unterstützt (wie '1st' oder '3rd'), ebenso wie eine durchgestrichene Null, falls diese in der Schrift vorhanden ist.

#### Linierende und Oldstyle-Zahlen

Klicken Sie auf "Play" in den untenstehenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

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
  font-weight: 400;
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

Klicken Sie auf "Play" in den untenstehenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

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
  font-weight: 400;
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

Zugehörige CSS-Eigenschaft: {{cssxref("font-variant-east-asian")}}

Dies ermöglicht den Zugriff auf verschiedene alternative Formen von Glyphen innerhalb einer Schriftart. Das untenstehende Beispiel zeigt eine Zeichenfolge von normalen Glyphen. Deaktivieren Sie das Kontrollkästchen unten und Sie sehen Zeichen mit nur den `jis78` Glyphen. Klicken Sie auf "Play" in den untenstehenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

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
> Diese Glyphen wurden aus einem Schriftartenmuster kopiert und sind nicht als Prosa gedacht.

### Abkürzung der Schriftartvarianten

Die {{Cssxref("font-variant")}} Eigenschaft ist die Abkürzungssyntax zur Definition aller oben genannten. Das Festlegen eines Wertes von `normal` setzt alle Eigenschaften auf ihren Anfangswert zurück. Das Festlegen eines Wertes von `none` setzt `font-variant-ligatures` auf none und alle anderen Eigenschaften auf ihren Anfangswert. Das bedeutet, dass, wenn Kerning standardmäßig aktiviert ist, es auch dann aktiviert bleibt, wenn hier ein Wert von `none` angegeben wird. Klicken Sie auf "Play" in den untenstehenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

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
  font-weight: 400;
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

## Schriftartfunktions-Einstellungen

{{cssxref("font-feature-settings")}} ist die 'Low-Level-Syntax', die expliziten Zugriff auf jede benannte verfügbare OpenType-Funktion ermöglicht. Dies bietet viel Kontrolle, hat jedoch einige Nachteile in der Art und Weise, wie es die Vererbung beeinflusst und — wie oben erwähnt — wenn Sie eine Einstellung ändern möchten, müssen Sie die gesamte Zeichenfolge neu deklarieren (es sei denn, Sie verwenden [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) um die Werte festzulegen). Aus diesem Grund ist es am besten, die oben gezeigten Standardeigenschaften wann immer möglich zu verwenden.

Es gibt eine riesige Anzahl möglicher Funktionen. Sie können Beispiele für eine Reihe von ihnen oben sehen und es gibt mehrere Ressourcen, um mehr von ihnen zu finden.

Die allgemeine Syntax sieht folgendermaßen aus:

```css
.small-caps {
  font-feature-settings: "smcp", "c2sc";
}
```

Gemäß der Spezifikation können Sie entweder nur den 4-Zeichen-Funktionscode angeben oder 1 nach dem Code, um diese Funktion zu aktivieren, oder 0 (Null), um sie zu deaktivieren. Dies ist hilfreich, wenn Sie eine Funktion wie Ligaturen standardmäßig aktiviert haben, aber diese wie folgt deaktivieren möchten:

```css
.no-ligatures {
  font-feature-settings:
    "liga" 0,
    "dlig" 0;
}
```

### Mehr über die Codes der Schriftartfunktions-Einstellungen

- ['The Complete CSS Demo for OpenType Features'](https://sparanoid.com/lab/opentype-features/) (kann für die Richtigkeit des Namens nicht bürgen, aber es ist ziemlich umfangreich)
- [Eine Liste von OpenType-Funktionen auf Wikipedia](https://en.wikipedia.org/wiki/List_of_typographic_features)

## Verwenden der CSS-Funktionsprüfung für Implementierung

Da nicht alle Eigenschaften gleichmäßig implementiert sind, ist es eine gute Praxis, Ihr CSS unter Verwendung von Funktionsprüfung einzurichten, um die korrekten Eigenschaften zu nutzen, mit {{cssxref("font-feature-settings")}} als Fallback.

Zum Beispiel können Kleinbuchstaben auf verschiedene Weise gesetzt werden, aber wenn Sie sicherstellen möchten, dass unabhängig von der zugrunde liegenden Großschreibung alles in Kleinbuchstaben endet, erfordert dies 2 Einstellungen mit `font-feature-settings` gegenüber einem einzigen Eigenschaftswert mit {{cssxref("font-variant-caps")}}.

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

### Demos von CSS OpenType-Funktionen in CSS

- [The Complete CSS Demo for OpenType Features](https://sparanoid.com/lab/opentype-features/)

### Tools zur Webschriftanalyse

- [Wakamai Fondue](https://wakamaifondue.com/)
- [Axis Praxis](https://www.axis-praxis.org/)

### W3C-Spezifikationen

- [Schriftartfunktionen in CSS Fonts Module Level 3](https://drafts.csswg.org/css-fonts-3/#font-rend-props)
- [font-variant-alternatives in CSS Fonts Module Level 4](https://drafts.csswg.org/css-fonts-4/#propdef-font-variant-alternates)

### Andere Ressourcen

- [Using OpenType features](https://helpx.adobe.com/fonts/using/use-open-type-features.html) von Tim Brown, Leiter der Typografie, Adobe
- [Adobe's Syntax für OpenType-Funktionen in CSS](https://helpx.adobe.com/fonts/using/open-type-syntax.html)
