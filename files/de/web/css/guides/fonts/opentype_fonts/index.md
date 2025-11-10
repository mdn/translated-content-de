---
title: OpenType-Schriftmerkmale
short-title: OpenType features
slug: Web/CSS/Guides/Fonts/OpenType_fonts
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Schriftmerkmale oder -varianten beziehen sich auf verschiedene Glyphen oder Zeichenstile, die in einer OpenType-Schriftart enthalten sind. Dazu gehören Dinge wie Ligaturen (spezielle Glyphen, die Zeichen wie 'fi' oder 'ffl' kombinieren), Kerning (Anpassungen des Abstands zwischen bestimmten Buchstabenpaarungen), Brüche, Zahlenstile und viele andere. All diese werden als OpenType-Funktionen bezeichnet und sind über spezifische Eigenschaften und niedrige Steuereigenschaften im Web nutzbar — {{cssxref("font-feature-settings")}}. Dieser Artikel bietet Ihnen alles, was Sie über die Verwendung von OpenType-Schriftmerkmalen in CSS wissen müssen.

Einige Schriftarten haben eine oder mehrere dieser Funktionen standardmäßig aktiviert (Kerning und Standardligaturen sind häufige Beispiele), während andere dem Designer oder Entwickler überlassen werden, um sie in bestimmten Szenarien zu aktivieren.

Neben breiten Merkmalsgruppen wie Ligaturen oder Linienzahlen (Zahlen, die gleichmäßig ausgerichtet sind, im Gegensatz zu 'Oldstyle', die eher wie Kleinbuchstaben aussehen) gibt es auch sehr spezifische wie Stilsets (die mehrere spezifische Varianten von Glyphen enthalten können, die zusammen verwendet werden sollen), Alternativen (die eine oder mehrere Varianten des Buchstabens 'a' sein können) oder sogar sprachspezifische Anpassungen für ostasiatische Sprachen. Letztere sind tatsächlich notwendig, um die Sprache korrekt auszudrücken, und gehen somit über die stilistische Präferenz der meisten anderen OpenType-Funktionen hinaus.

> [!WARNING]
> Es gibt viele CSS-Attribute, die definiert sind, um Schriftmerkmale zu nutzen, aber leider sind viele nicht vollständig implementiert. Sie sind hier alle definiert und gezeigt, aber viele funktionieren nur mit der niedrigen Steuereigenschaft {{cssxref("font-feature-settings")}}. Es ist möglich, CSS zu schreiben, um auf beide Weisen zu arbeiten, aber das kann mühsam werden. Das Problem mit der Verwendung von `font-feature-settings` für alles ist, dass jedes Mal, wenn Sie eines der einzelnen Merkmale ändern möchten, Sie die gesamte Zeichenkette neu definieren müssen (ähnlich wie das Manipulieren variabler Schriften mit {{cssxref("font-variation-settings")}}).

## Ermittlung der Verfügbarkeit von Merkmalen in Schriften

Dies ist manchmal das Schwierigste herauszufinden, wenn Sie keine Dokumentation zu den Schriften haben (viele Schriftdesigner und Schriftgießereien bieten aus diesem Grund Beispielseiten und CSS an). Aber es gibt einige Websites, die es einfacher machen, dies herauszufinden. Sie können [wakamaifondue.com](https://wakamaifondue.com/) besuchen, Ihre Schriftdatei auf den Kreis dort ziehen, wo es angewiesen wird, und in wenigen Augenblicken erhalten Sie einen vollständigen Bericht über alle Fähigkeiten und Merkmale Ihrer Schriftart. [Axis-praxis.org](https://www.axis-praxis.org/) bietet ebenfalls eine ähnliche Funktionalität an, mit der Möglichkeit, die Merkmale für einen bestimmten Textblock ein- oder auszuschalten.

## Warum würden Sie sie verwenden?

Angesichts der Tatsache, dass diese Merkmale einige Arbeit erfordern, um entdeckt und verwendet zu werden, mag es eine berechtigte Frage sein, warum man sich die Mühe machen sollte, sie zu verwenden. Die Antwort liegt in den spezifischen Merkmalen, die eine Website nützlicher, lesbarer und gepflegter machen:

- **Ligaturen** wie 'ff' oder 'fi' machen den Buchstabenabstand und das Lesen gleichmäßiger und flüssiger.
- **Brüche** können Heimwerker- und Rezeptseiten viel leichter lesbar und verständlich machen.
- **Zahlen** innerhalb von Textabsätzen, die als 'Oldstyle' gesetzt sind, passen sich besser zwischen Kleinbuchstaben an, und das Setzen als 'Tabellenzahlen' sorgt dafür, dass sie besser ausgerichtet sind, wenn sie beispielsweise eine Liste von Kosten in einer Tabelle darstellen. 'Lining'-Figuren hingegen sitzen gleichmäßiger allein oder vor großgeschriebenen Wörtern.

Während keines dieser Merkmale einzeln eine Website durch ihre Abwesenheit unbrauchbar machen wird, kann jedes von ihnen wiederum eine Website benutzerfreundlicher und einprägsamer durch seine Liebe zum Detail machen.

> OpenType-Funktionen sind wie geheime Fächer in Schriften. Wenn Sie sie freischalten, finden Sie Möglichkeiten, Schriften subtil und dramatisch anders aussehen und sich verhalten zu lassen. Nicht alle OpenType-Funktionen sind immer angemessen zu verwenden, aber einige Merkmale sind entscheidend für hervorragende Typografie. _-- Tim Brown, Head of Typography bei Adobe_.

### Manchmal ist es Substanz, nicht nur Stil

Es gibt einige Fälle — wie bei {{cssxref("font-variant-east-asian")}} — bei denen OpenType-Funktionen direkt mit der Verwendung verschiedener Formen bestimmter Glyphen verbunden sind, was die Bedeutung und Lesbarkeit beeinflussen kann. In solchen Fällen ist es mehr als nur eine Nettigkeit, sondern ein integraler Bestandteil des Inhalts selbst.

## Die Schriftmerkmale

Es gibt eine Vielzahl von verschiedenen Merkmalen, die zu berücksichtigen sind. Sie sind hier entsprechend den Hauptattributen und Optionen aufgelistet und erklärt, die in den W3C-Spezifikationen behandelt werden.

> [!NOTE]
> Die nachfolgenden Beispiele zeigen die Eigenschaften und einige Beispielkombinationen, zusammen mit den äquivalenten Syntaxen auf niedriger Ebene. Sie stimmen möglicherweise nicht genau überein aufgrund von Implementierungsinkonsistenzen der Browser, aber in vielen Fällen wird das erste Beispiel dem zweiten entsprechen. Die gezeigten Schriften sind Playfair Display, Source Serif Pro, IBM Plex Serif, Dancing Script und Kokoro (alle verfügbar und kostenlos nutzbar, die meisten sind auf Google Fonts und anderen Diensten verfügbar).

### Kerning

Zugehörige CSS-Eigenschaft: {{cssxref("font-kerning")}}

Dies bezieht sich auf den Abstand zwischen bestimmten Glyphenpaaren. Dies ist in der Regel standardmäßig aktiviert (wie in der OpenType-Spezifikation empfohlen). Es sollte beachtet werden, dass, wenn {{cssxref("letter-spacing")}} auch auf Ihren Text angewendet wird, dies nach dem Kerning angewendet wird. Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

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

### Alternativen

Zugehörige CSS-Eigenschaft: {{cssxref("font-variant-alternates")}}

Schriften können eine Reihe von verschiedenen Alternativen für verschiedene Glyphen bereitstellen, wie z.B. verschiedene Stile eines kleinen 'a' oder mehr oder weniger aufwändige Schwünge in einer Schreibschrift. Diese Eigenschaft kann ein ganzes Set von Alternativen oder nur eine spezifische aktivieren, abhängig von den angegebenen Werten. Das untenstehende Beispiel zeigt verschiedene Aspekte der Arbeit mit alternativen Zeichen. Schriften mit alternativen Glyphen können diese entweder insgesamt oder einzeln in separaten Stilsets oder sogar einzelnen Zeichen verfügbar machen. In diesem Beispiel sehen Sie zwei verschiedene Schrifttypen und die Einführung der {{cssxref("@font-feature-values")}}-Regel. Dies wird verwendet, um Abkürzungen oder benannte Optionen zu definieren, die pro Schriftfamilie definiert werden können. Auf diese Weise können Sie eine benannte Option erstellen, die nur auf eine einzelne Schriftart angewendet wird, oder eine, die geteilt wird und allgemein anwendbar ist. Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

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

In diesem Fall wird `@stylistic(alternates)` alle alternativen Zeichen für beide Schriftarten anzeigen. Die Anwendung auf nur das Wort 'My' ändert die Darstellung des 'M', und die Anwendung von `@styleset(alt-a)` ändert nur das kleine 'a'.

Versuchen Sie, die Zeile

```css
font-variant-alternates: styleset(alt-a);
```

zu ändern in

```css
font-variant-alternates: styleset(alt-g);
```

und bemerken Sie, dass das kleine 'a' zu seiner regulären Form zurückkehrt und die kleinen 'g's stattdessen geändert werden.

### Ligaturen

Zugehörige CSS-Eigenschaft: {{cssxref("font-variant-ligatures")}}

Ligaturen sind Glyphen, die zwei oder mehr separate Glyphen ersetzen, um sie flüssiger darzustellen (aus einer Abstands- oder ästhetischen Perspektive). Einige der häufigsten sind Buchstaben wie 'fi', 'fl' oder 'ffl' — aber es gibt viele andere Möglichkeiten. Es gibt die häufigsten (als gewöhnliche Ligaturen bezeichnet) und es gibt auch spezialisierte Kategorien wie 'diskretionäre Ligaturen', 'historische Ligaturen' und 'kontextuelle Alternativen'. Obwohl letzteres technisch gesehen keine Ligaturen sind, sind sie im Allgemeinen ähnlich darin, dass sie bestimmte Buchstabenkombinationen ersetzen, wenn sie zusammen erscheinen.

Während sie häufiger in Schreibschriften zu finden sind, werden sie im folgenden Beispiel verwendet, um Pfeile zu erstellen. Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

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

Zugehörige CSS-Eigenschaft: {{cssxref("font-variant-position")}}

Positionsvarianten werden verwendet, um typografische Hoch- und Tiefstellungszeichen zu aktivieren. Diese sind so gestaltet, dass sie mit dem umgebenden Text arbeiten, ohne die Grundlinie oder den Zeilenabstand zu verändern. Dies ist besonders nützlich mit den {{htmlelement("sub")}} oder {{htmlelement("sup")}} Elementen. Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

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

### Großbuchstaben

Zugehörige CSS-Eigenschaft: {{cssxref("font-variant-caps")}}

Einer der häufigsten Anwendungsfälle für OpenType-Funktionen sind richtige Kapitälchen. Dies sind Großbuchstaben, die so dimensioniert sind, dass sie besser zu Kleinbuchstaben passen und werden generell für Akronyme und Abkürzungen verwendet. Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

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

Zugehörige CSS-Eigenschaft: {{cssxref("font-variant-numeric")}}

Es gibt mehrere verschiedene Stile von Zahlen, die üblicherweise in Schriften enthalten sind:

- 'Lining'-Zahlen sind alle gleich hoch und auf der gleichen Grundlinie.
- 'Oldstyle'-Zahlen haben gemischte Höhen und sind so gestaltet, dass sie die Erscheinung von Ober- und Unterlängen wie andere Kleinbuchstaben haben. Diese sind so gestaltet, dass sie inline mit einer Kopie verwendet werden, damit die Zahlen sich optisch mit den umgebenden Glyphen mischen, ähnlich wie bei Kapitälchen.

Es gibt auch das Konzept der Abstände. Proportionale Abstände sind die normale Einstellung, während tabellarische Abstände Zahlen unabhängig von der Zeichenbreite gleichmäßig ausrichten, was es geeigneter macht, Tabellen von Zahlen in Finanztabellen auszurichten.

Es gibt zwei Arten von Brüchen, die durch diese Eigenschaft unterstützt werden:

- Diagonal geschnittene Brüche.
- Vertikal gestapelte Brüche.

Ordinalzahlen werden ebenfalls unterstützt (z.B. '1st' oder '3rd'), ebenso wie eine gestrichene Null, wenn sie in der Schrift vorhanden ist.

#### Linien- und Oldstyle-Zahlen

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

#### Brüche, Ordinalzahlen und gestrichene Null

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

Zugehörige CSS-Eigenschaft: {{cssxref("font-variant-east-asian")}}

Diese ermöglicht den Zugriff auf verschiedene alternative Formen von Glyphen innerhalb einer Schriftart. Das folgende Beispiel zeigt eine Zeichenfolge normaler Glyphen. Deaktivieren Sie das Kontrollkästchen unten, und Sie sehen Zeichen nur mit den `jis78` Glyphen. Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

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
> Diese Glyphen wurden aus einem Schriftmuster kopiert und sind nicht als Prosa gedacht.

### Schriftvariantenshorthand

Die {{cssxref("font-variant")}}-Eigenschaft ist die Shorthand-Syntax zur Definition aller oben genannten. Das Setzen eines Werts von `normal` setzt alle Eigenschaften auf ihren Anfangswert zurück. Das Setzen eines Werts von `none` setzt `font-variant-ligatures` auf none und alle anderen Eigenschaften auf ihren Anfangswert. Das bedeutet, dass wenn Kerning standardmäßig aktiviert ist, es immer noch aktiviert sein wird, auch wenn hier ein Wert von `none` bereitgestellt wird. Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

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

## Schriftmerkmaleinstellungen

{{cssxref("font-feature-settings")}} ist die 'Low-Level-Syntax', die expliziten Zugriff auf jedes benannte verfügbare OpenType-Merkmal gewährt. Dies gibt viel Kontrolle, hat aber einige Nachteile, wie es die Vererbung beeinflusst und – wie oben erwähnt – wenn Sie eine Einstellung ändern möchten, müssen Sie die gesamte Zeichenkette erneut deklarieren (es sei denn, Sie verwenden [CSS-Custom Properties](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties), um die Werte festzulegen). Daher ist es am besten, die oben gezeigten Standardmerkmale wann immer möglich zu verwenden.

Es gibt eine enorme Anzahl möglicher Merkmale. Sie können oben Beispiele für eine Vielzahl davon sehen, und es gibt mehrere Ressourcen, um noch mehr davon zu finden.

Die allgemeine Syntax sieht so aus:

```css
.small-caps {
  font-feature-settings: "smcp", "c2sc";
}
```

Laut Spezifikation können Sie entweder nur den 4-Zeichen-Merkmalscode angeben oder eine 1 nach dem Code (um dieses Merkmal zu aktivieren) oder eine 0 (Null), um es zu deaktivieren. Dies ist hilfreich, wenn Sie ein Merkmal wie Ligaturen standardmäßig aktiviert haben, aber diese wie folgt deaktivieren möchten:

```css
.no-ligatures {
  font-feature-settings:
    "liga" 0,
    "dlig" 0;
}
```

### Mehr zu den font-feature-settings Codes

- ['The Complete CSS Demo for OpenType Features'](https://sparanoid.com/lab/opentype-features/) (kann nicht für die Wahrheit des Namens bürgen, aber es ist ziemlich umfangreich)
- [Eine Liste von OpenType-Merkmalen auf Wikipedia](https://en.wikipedia.org/wiki/List_of_typographic_features)

## Verwendung der CSS-Feature-Erkennung zur Implementierung

Da nicht alle Eigenschaften gleichmäßig implementiert sind, ist es eine gute Praxis, Ihr CSS mit Feature-Erkennung zu konfigurieren, um die richtigen Eigenschaften zu nutzen, wobei {{cssxref("font-feature-settings")}} als Fallback dient.

Zum Beispiel können Kapitälchen auf mehrere Arten festgelegt werden, aber wenn Sie sicherstellen möchten, dass unabhängig von der zugrunde liegenden Groß- und Kleinschreibung alles in Kapitälchen endet, erfordert dies 2 Einstellungen mit `font-feature-settings` im Vergleich zu einem einzigen Eigenschaftswert mit {{cssxref("font-variant-caps")}}.

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

- [Das vollständige CSS-Demo für OpenType-Funktionen](https://sparanoid.com/lab/opentype-features/)

### Web-Schriftanalyse-Tools

- [Wakamai Fondue](https://wakamaifondue.com/)
- [Axis Praxis](https://www.axis-praxis.org/)

### W3C-Spezifikationen

- [Schriftmerkmaleigenschaften im CSS Fonts Module Level 3](https://drafts.csswg.org/css-fonts-3/#font-rend-props)
- [font-variant-alternatives im CSS Fonts Module Level 4](https://drafts.csswg.org/css-fonts-4/#propdef-font-variant-alternates)

### Andere Ressourcen

- [Verwendung von OpenType-Funktionen](https://helpx.adobe.com/fonts/using/use-open-type-features.html) von Tim Brown, Head of Typography, Adobe
- [Adobes Syntax für OpenType-Funktionen in CSS](https://helpx.adobe.com/fonts/using/open-type-syntax.html)
