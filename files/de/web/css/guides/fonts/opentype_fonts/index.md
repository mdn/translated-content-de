---
title: OpenType-Schriftmerkmale
short-title: OpenType features
slug: Web/CSS/Guides/Fonts/OpenType_fonts
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

Schriftmerkmale oder Varianten beziehen sich auf verschiedene Glyphen oder Zeichenstile, die in einer OpenType-Schriftart enthalten sind. Dazu gehören Dinge wie Ligaturen (besondere Glyphen, die Zeichen wie 'fi' oder 'ffl' kombinieren), Kerning (Anpassungen des Abstands zwischen bestimmten Buchstabenpaarungen), Brüche, Zahlenstile und mehrere andere. Diese werden als OpenType-Funktionen bezeichnet und sind im Web über spezifische Eigenschaften und Low-Level-Steuerungseigenschaften verfügbar — {{cssxref("font-feature-settings")}}. Dieser Artikel bietet Ihnen alles Wissenswerte zur Verwendung von OpenType-Schriftmerkmalen in CSS.

Einige Schriftarten haben eines oder mehrere dieser Merkmale standardmäßig aktiviert (Kerning und Standardligaturen sind häufige Beispiele), während andere dem Designer oder Entwickler überlassen bleiben, um sie in bestimmten Szenarien zu aktivieren.

Neben allgemeinen Merkmalsgruppen wie Ligaturen oder Zeichen in Linienfigur-Stil (Zahlen, die gleichmäßig ausgerichtet sind, im Gegensatz zu 'Oldstyle', die eher wie Kleinbuchstaben aussehen), gibt es auch sehr spezifische wie stilistische Sätze (die mehrere spezifische Varianten von Glyphen enthalten können, die zusammen verwendet werden sollen), Alternativen (die eine oder mehrere Varianten des Buchstabens 'a' enthalten können) oder sogar sprachspezifische Änderungen für ostasiatische Sprachen. Im letzteren Fall sind diese Änderungen tatsächlich notwendig, um die Sprache richtig auszudrücken, sodass sie über die eher stilistische Vorliebe der meisten anderen OpenType-Funktionen hinausgehen.

> [!WARNING]
> Es gibt viele definierte CSS-Eigenschaften, um Schriftmerkmale zu nutzen, aber leider sind viele nicht vollständig implementiert. Sie sind alle hier definiert und gezeigt, aber viele funktionieren nur mit der Low-Level-Eigenschaft {{cssxref("font-feature-settings")}}. Es ist möglich, CSS so zu schreiben, dass es auf beide Arten funktioniert, aber das kann mühsam werden. Das Problem bei der Verwendung von `font-feature-settings` für alles ist, dass man jedes Mal, wenn man eines der einzelnen Merkmale ändern möchte, den gesamten String neu definieren muss (ähnlich wie bei der Manipulation von variablen Schriften mit {{cssxref("font-variation-settings")}}).

## Verfügbarkeit von Merkmalen in Schriftarten entdecken

Dies ist manchmal das kniffligste herauszufinden, wenn Sie keine Dokumentation haben, die mit den Schriftarten geliefert wurde (viele Schriftgestalter und Gießereien stellen aus diesem Grund Musterseiten und CSS zur Verfügung). Aber es gibt einige Websites, die es einfacher machen, dies herauszufinden. Sie können [wakamaifondue.com](https://wakamaifondue.com/) besuchen, Ihre Schriftdatei auf den Kreis ziehen, wo es angegeben ist, und in wenigen Momenten erhalten Sie einen vollständigen Bericht über alle Fähigkeiten und Merkmale Ihrer Schrift. [Axis-praxis.org](https://www.axis-praxis.org/) bietet ebenfalls eine ähnliche Fähigkeit, mit der Möglichkeit, auf die Merkmale zu klicken, um sie in einem bestimmten Textblock ein- oder auszuschalten.

## Warum sollten Sie sie verwenden?

Da diese Merkmale einige Arbeit erfordern, um sie zu entdecken und zu nutzen, mag es eine berechtigte Frage sein, warum man sich die Mühe machen sollte, sie zu verwenden. Die Antwort liegt in den spezifischen Merkmalen, die eine Website nützlicher, lesbarer und gepflegter machen:

- **Ligaturen** wie 'ff' oder 'fi' machen den Buchstabenabstand und das Lesen gleichmäßiger und fließender.
- **Brüche** können Heimwerker- und Rezeptseiten viel einfacher lesbar und verständlicher machen.
- **Zahlen** innerhalb einzeiligen Textes, die als 'Oldstyle' gesetzt sind, passen besser zwischen Kleinbuchstaben, und ebenso lassen sich Zahlen als 'Tabellenzahlen' gesetzt besser ausrichten, wenn man beispielsweise eine Liste von Kosten in einer Tabelle aufstellt. 'Lining'-Zahlen hingegen stehen isoliert oder vor großgeschriebenen Wörtern gleichmäßiger.

Während keines dieser Merkmale einzeln eine Website aufgrund ihrer Abwesenheit unbrauchbar macht, so kann doch jedes davon eine Website benutzerfreundlicher und aufgrund ihrer Detailgenauigkeit einprägsamer machen.

> OpenType-Funktionen sind wie geheime Fächer in Schriften. Schalten Sie sie frei, und Sie entdecken Möglichkeiten, wie Schriften subtile und dramatische Unterschiede im Aussehen und Verhalten zeigen können. Nicht alle OpenType-Merkmale sind für jederzeit geeignet, aber einige Merkmale sind entscheidend für großartige Typografie. _-- Tim Brown, Leiter der Typografie bei Adobe_.

### Manchmal geht es um Inhalt, nicht nur um Stil

Es gibt einige Fälle — wie bei {{cssxref("font-variant-east-asian")}} — bei denen OpenType-Funktionen direkt mit der Verwendung unterschiedlicher Formen bestimmter Glyphen verbunden sind, was Bedeutung und Lesbarkeit beeinflussen kann. In solchen Fällen ist es mehr als nur eine Nettigkeit, sondern ein integraler Bestandteil des Inhalts selbst.

## Die Schriftmerkmale

Es gibt eine Reihe verschiedener Merkmale zu berücksichtigen. Sie sind hier nach den Haupteigenschaften und Optionen gruppiert und erklärt, die in den W3C-Spezifikationen behandelt werden.

> [!NOTE]
> Die folgenden Beispiele zeigen die Eigenschaften und einige Beispielkombinationen, zusammen mit den jeweils niedrigeren Syntexäquivalenten. Diese können aufgrund von Browser-Implementierungsinkonsistenzen nicht genau übereinstimmen, aber in vielen Fällen wird das erste Beispiel dem zweiten entsprechen. Die gezeigten Schriftarten sind Playfair Display, Source Serif Pro, IBM Plex Serif, Dancing Script und Kokoro (alle verfügbar und kostenlos nutzbar, die meisten sind bei Google Fonts und anderen Diensten erhältlich).

### Kerning

Zugehörige CSS-Eigenschaft: {{cssxref("font-kerning")}}

Dies bezieht sich auf den Abstand zwischen bestimmten Glyphenpaaren. Dies ist im Allgemeinen standardmäßig aktiviert (wie von der OpenType-Spezifikation empfohlen). Es sollte beachtet werden, dass, wenn {{cssxref("letter-spacing")}} ebenfalls auf Ihrem Text gesetzt ist, dies nach dem Kerning angewendet wird.
Klicken Sie auf "Play" in den folgenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

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

Zugehörige CSS-Eigenschaft: {{cssxref("font-variant-alternates")}}

Schriftarten können eine Anzahl verschiedener Alternativen für verschiedene Glyphen bereitstellen, wie verschiedene Stile des Kleinbuchstabens 'a' oder mehr oder weniger aufwändige Schnörkel in einer Skriptschriftart. Diese Eigenschaft kann einen gesamten Satz von Alternativen oder nur eine bestimmte aktivieren, je nach den angegebenen Werten. Das untenstehende Beispiel zeigt verschiedene Aspekte der Arbeit mit alternierenden Zeichen. Schriftarten mit alternierenden Glyphen können diese durchgehend oder individuell in getrennten stilistischen Sätzen oder sogar einzelnen Zeichen verfügbar machen. In diesem Beispiel sehen Sie zwei verschiedene Schriftarten und die Einführung der {{cssxref("@font-feature-values")}} Regel. Diese wird verwendet, um Abkürzungen oder benannte Optionen zu definieren, die pro Schriftfamilie definiert werden können. Auf diese Weise können Sie eine benannte Option erstellen, die nur für eine einzelne Schrift gilt, oder eine, die gemeinsam genutzt wird und allgemeiner angewendet werden kann. Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

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

In diesem Fall zeigt `@stylistic(alternates)` alle alternierenden Zeichen für jede der beiden Schriftarten. Die Anwendung auf nur das Wort 'My' ändert die Darstellung des 'M', und die Anwendung von `@styleset(alt-a)` ändert nur das kleine 'a'.

Versuchen Sie, die Zeile

```css
font-variant-alternates: styleset(alt-a);
```

in

```css
font-variant-alternates: styleset(alt-g);
```

zu ändern und beachten Sie, dass das kleine 'a' zu seiner regulären Form zurückkehrt und sich die kleinen 'g's stattdessen ändern.

### Ligaturen

Zugehörige CSS-Eigenschaft: {{cssxref("font-variant-ligatures")}}

Ligaturen sind Glyphen, die zwei oder mehr separate Glyphen ersetzen, um sie sanfter darzustellen (aus einer Platzierungs- oder ästhetischen Perspektive). Einige der häufigsten sind Buchstaben wie 'fi', 'fl' oder 'ffl' — aber es gibt viele andere Möglichkeiten. Es gibt die häufigsten (als einfache Ligaturen bezeichnet) und es gibt auch spezialisiertere Kategorien wie 'diskretionäre Ligaturen', 'historische Ligaturen' und 'kontextuelle Alternativen'. Obwohl diese letzten nicht technisch als Ligaturen gelten, sind sie im Allgemeinen ähnlich, da sie bestimmte Kombinationen von Buchstaben ersetzen, wenn sie zusammen erscheinen.

Während sie häufiger in Skriptschriften auftauchen, werden sie im nachstehenden Beispiel verwendet, um Pfeile zu erstellen. Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

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

Positionsvarianten werden verwendet, um typografische Hoch- und Tiefstellungsglyphen zu aktivieren. Diese sind so gestaltet, dass sie mit dem umgebenden Text arbeiten, ohne die Grundlinie oder den Zeilenabstand zu verändern. Dies ist besonders nützlich mit den {{htmlelement("sub")}} oder {{htmlelement("sup")}} Elementen. Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

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

### Kapitälchen

Zugehörige CSS-Eigenschaft: {{cssxref("font-variant-caps")}}

Eine der häufigeren Anwendungsfälle für OpenType-Funktionen sind richtige Kapitälchen. Diese sind Großbuchstaben, die so dimensioniert sind, dass sie besser mit den Kleinbuchstaben harmonieren und werden im Allgemeinen für Akronyme und Abkürzungen verwendet. Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

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

- 'Lining' Zahlen sind alle gleich hoch und auf derselben Grundlinie.
- 'Oldstyle' Zahlen haben gemischte Höhen und sind so gestaltet, dass sie das Erscheinungsbild von Ober- und Unterlängen wie andere Kleinbuchstaben haben. Diese sind dafür ausgelegt, inline mit dem Text verwendet zu werden, sodass die Zahlen optisch mit den umgebenden Glyphen in ähnlicher Weise wie kleine Großbuchstaben verschmelzen.

Es gibt auch das Konzept der Abstände. Proportionale Abstände sind die normale Einstellung, während Tabellensätze Zahlen unabhängig von der Zeichenbreite gleichermaßen ausrichten und sich somit besser zum Ausrichten von Tabellen mit Zahlen in Finanztabellen eignen.

Es gibt zwei Arten von Brüchen, die durch diese Eigenschaft unterstützt werden:

- Diagonal gestrichene Brüche.
- Vertikal gestapelte Brüche.

Ordinalzahlen werden ebenfalls unterstützt (z. B. '1st' oder '3rd'), ebenso wie eine durchgestrichene Null, sofern in der Schrift vorhanden.

#### Lining- und Oldstyle-Figuren

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

#### Brüche, Ordnungszahlen und durchgestrichene Null

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

Dies ermöglicht den Zugriff auf verschiedene alternative Formen von Glyphen innerhalb einer Schriftart. Das untenstehende Beispiel zeigt eine Zeichenfolge normaler Glyphen. Deaktivieren Sie das Kontrollkästchen unten und Sie werden Zeichen mit nur den `jis78` Glyphen sehen. Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

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
> Diese Glyphen wurden aus einem Schriftenmuster kopiert und sind nicht als Prosa gedacht.

### Kurzschrift für Schriftvarianten

Die {{Cssxref("font-variant")}} Eigenschaft ist die Kurzschrift für die Definition aller oben genannten Merkmale. Die Einstellung eines Wertes von `normal` setzt alle Eigenschaften auf ihren Anfangswert zurück. Die Einstellung eines Wertes von `none` setzt `font-variant-ligatures` auf none und alle anderen Eigenschaften auf ihren Anfangswert zurück. Das bedeutet, dass, wenn Kerning standardmäßig aktiviert ist, es auch dann aktiviert bleibt, wenn hier ein Wert von `none` angegeben wird. Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

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

## Schriftmerkmal-Einstellungen

{{cssxref("font-feature-settings")}} ist die 'Low-Level-Syntax', die expliziten Zugriff auf jede benannte verfügbare OpenType-Funktion ermöglicht. Dies gibt viel Kontrolle, hat jedoch einige Nachteile, was die Vererbung betrifft und – wie oben erwähnt – wenn Sie eine Einstellung ändern möchten, müssen Sie den gesamten String erneut deklarieren (es sei denn, Sie verwenden [CSS-Benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties), um die Werte festzulegen). Deshalb ist es am besten, die oben gezeigten Standard-Eigenschaften zu verwenden, wo immer möglich.

Es gibt eine große Anzahl möglicher Merkmale. Sie können Beispiele von einigen oben sehen, und es gibt mehrere Ressourcen, um weitere zu finden.

Die allgemeine Syntax sieht so aus:

```css
.small-caps {
  font-feature-settings: "smcp", "c2sc";
}
```

Laut Spezifikation können Sie entweder nur den 4-Zeichen-Merkmal-Code angeben oder eine 1 nach dem Code (um dieses Merkmal zu aktivieren) oder eine 0 (Null) zum Deaktivieren bereitstellen. Dies ist hilfreich, wenn Sie ein Merkmals wie Ligaturen standardmäßig aktiviert haben, aber diese deaktivieren möchten, etwa so:

```css
.no-ligatures {
  font-feature-settings:
    "liga" 0,
    "dlig" 0;
}
```

### Mehr über font-feature-settings Codes

- ['The Complete CSS Demo for OpenType Features'](https://sparanoid.com/lab/opentype-features/) (kann nicht die Richtigkeit des Namens garantieren, aber es ist ziemlich groß)
- [Eine Liste von OpenType-Merkmalen auf Wikipedia](https://en.wikipedia.org/wiki/List_of_typographic_features)

## Verwendung der CSS-Feature-Erkennung für die Implementierung

Da nicht alle Eigenschaften gleichmäßig implementiert sind, ist es eine gute Praxis, Ihr CSS unter Verwendung der Feature-Erkennung einzurichten, um die richtigen Eigenschaften zu nutzen, wobei {{cssxref("font-feature-settings")}} als Rückfalloption dient.

Zum Beispiel können Kapitälchen auf verschiedene Weise gesetzt werden, aber wenn Sie sicherstellen möchten, dass unabhängig von der zugrunde liegenden Großschreibung alles in Kapitälchen endet, erfordert dies 2 Einstellungen mit `font-feature-settings` im Vergleich zu einem einzigen Eigenschaftswert mit {{cssxref("font-variant-caps")}}.

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

### Demos von OpenType-Funktionen in CSS

- [The Complete CSS Demo for OpenType Features](https://sparanoid.com/lab/opentype-features/)

### Webschriftanalyse-Tools

- [Wakamai Fondue](https://wakamaifondue.com/)
- [Axis Praxis](https://www.axis-praxis.org/)

### W3C-Spezifikationen

- [Schriftmerkmaleigenschaften im CSS Fonts Module Level 3](https://drafts.csswg.org/css-fonts-3/#font-rend-props)
- [font-variant-alternatives im CSS Fonts Module Level 4](https://drafts.csswg.org/css-fonts-4/#propdef-font-variant-alternates)

### Andere Ressourcen

- [Verwendung von OpenType-Funktionen](https://helpx.adobe.com/fonts/web/language-support-and-opentype-features/use-open-type-features.html) von Tim Brown, Leiter der Typografie, Adobe
- [Adobes Syntax für OpenType-Funktionen in CSS](https://helpx.adobe.com/fonts/web/language-support-and-opentype-features/open-type-syntax.html)
