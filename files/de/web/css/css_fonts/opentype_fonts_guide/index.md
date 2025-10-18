---
title: OpenType-Schriftmerkmale
short-title: OpenType features
slug: Web/CSS/CSS_fonts/OpenType_fonts_guide
l10n:
  sourceCommit: 6ed02a2b0e0d891f7d3b4c2a6b1d9cc05c90ed9c
---

Schriftmerkmale oder Varianten beziehen sich auf verschiedene Glyphen oder Zeichenstile, die in einer OpenType-Schriftart enthalten sind. Dazu gehören Dinge wie Ligaturen (spezielle Glyphen, die Zeichen wie 'fi' oder 'ffl' verbinden), Kerning (Anpassungen des Abstands zwischen bestimmten Buchstabenpaaren), Brüche, Ziffernstile und viele andere. Diese werden alle als OpenType-Merkmale bezeichnet und stehen im Web über spezifische Eigenschaften und Low-Level-Steuereigenschaften zur Verfügung — {{cssxref("font-feature-settings")}}. Dieser Artikel bietet Ihnen alles, was Sie über die Verwendung von OpenType-Schriftmerkmalen in CSS wissen müssen.

Einige Schriftarten haben eines oder mehrere dieser Merkmale standardmäßig aktiviert (Kerning und Standardligaturen sind häufige Beispiele), während andere dem Designer oder Entwickler überlassen sind, sie in spezifischen Szenarien zu aktivieren.

Neben breiten Merkmalsätzen wie Ligaturen oder lining figures (Ziffern, die gleichmäßig ausgerichtet sind, im Gegensatz zu 'oldstyle', die mehr wie Kleinbuchstaben aussehen), gibt es auch sehr spezifische, wie stilistische Sets (die mehrere spezifische Varianten von Glyphen enthalten könnten, die zusammen verwendet werden sollen), Alternativen (die eine oder mehrere Varianten des Buchstabens 'a' sein könnten) oder sogar sprachspezifische Änderungen für ostasiatische Sprachen. Im letzteren Fall sind diese Änderungen tatsächlich notwendig, um die Sprache korrekt auszudrücken, sodass sie über die eher stilistischen Vorlieben der meisten anderen OpenType-Merkmale hinausgehen.

> [!WARNING]
> Es gibt viele CSS-Attribute, die definiert sind, um Schriftmerkmale zu nutzen, aber leider sind viele nicht vollständig implementiert. Sie sind alle definiert und hier gezeigt, aber viele funktionieren nur mit der Low-Level-Eigenschaft {{cssxref("font-feature-settings")}}. Es ist möglich, CSS so zu schreiben, dass es auf beide Arten funktioniert, aber das kann umständlich werden. Das Problem mit der Verwendung von `font-feature-settings` für alles ist, dass man jedes Mal, wenn man eines der individuellen Merkmale ändern möchte, die gesamte Zeichenfolge neu definieren muss (ähnlich wie bei der Manipulation von variablen Schriften mit {{cssxref("font-variation-settings")}}).

## Verfügbarkeit von Merkmalen in Schriftarten herausfinden

Das ist manchmal das Schwierigste zu herauszufinden, wenn Sie keine Dokumentation haben, die mit den Schriftarten geliefert wurde (viele Schriftgestalter und Gießereien bieten aus genau diesem Grund Musterseiten und CSS an). Aber es gibt einige Websites, die es einfacher machen, dies herauszufinden. Sie können [wakamaifondue.com](https://wakamaifondue.com/) besuchen, Ihre Schriftdatei auf den Kreis ziehen, wo es angewiesen wird, und in wenigen Augenblicken erhalten Sie einen vollständigen Bericht über alle Möglichkeiten und Merkmale Ihrer Schrift. [Axis-praxis.org](https://www.axis-praxis.org/) bietet ebenfalls eine ähnliche Funktionalität, mit der Möglichkeit, auf die Merkmale zu klicken, um sie in einem bestimmten Textblock ein- oder auszuschalten.

## Warum Sie sie verwenden sollten

Angesichts der Tatsache, dass diese Merkmale etwas Arbeit erfordern, um entdeckt und verwendet zu werden, mag es eine berechtigte Frage sein, warum man sich mit ihnen befassen sollte. Die Antwort liegt in den spezifischen Merkmalen, die eine Website nützlicher, leserlicher und sauberer machen:

- **Ligaturen** wie 'ff' oder 'fi' machen den Buchstabenabstand und das Lesen gleichmäßiger und flüssiger.
- **Brüche** können Heimwerker- und Rezeptseiten viel leichter lesbar und verständlich machen.
- **Ziffern** innerhalb von Fließtext als 'oldstyle' gesetzt, passen besser zwischen Kleinbuchstaben, und ebenso machen sie, als 'tabular numbers' gesetzt, besser ausgerichtet, wenn sie eine Liste von Kosten in einer Tabelle aufstellen, sagen wir. 'lining'-Zahlen sitzen hingegen gleichmäßiger für sich alleine oder vor großgeschriebenen Wörtern.

Während keines dieser Merkmale einzeln eine Website unbrauchbar macht, ist jedes von ihnen an sich dazu in der Lage, eine Website benutzerfreundlicher zu machen und sie aufgrund ihres Aufmerksamkeit für Details einprägsamer zu machen.

> OpenType-Merkmale sind wie geheime Fächer in Schriften. Wenn Sie sie freischalten, finden Sie Wege, um Schriften anders aussehen und sich anders verhalten zu lassen, in subtilen und dramatischen Weisen. Nicht alle OpenType-Merkmale sind immer zur Verwendung geeignet, aber einige Merkmale sind entscheidend für großartige Typografie. _-- Tim Brown, Typografie-Leiter bei Adobe_.

### Manchmal ist es der Inhalt, nicht nur der Stil

Es gibt einige Fälle — wie bei {{cssxref("font-variant-east-asian")}} — in denen OpenType-Merkmale direkt an die Verwendung verschiedener Formen bestimmter Glyphen gebunden sind, was Bedeutung und Lesbarkeit beeinflussen kann. In solchen Fällen ist es mehr als nur ein angenehmes Detail, sondern eher ein integraler Bestandteil des Inhalts selbst.

## Die Schriftmerkmale

Es gibt eine Reihe verschiedener Merkmale zu berücksichtigen. Sie sind hier gruppiert und gemäß den Hauptattributen und -optionen erklärt, die in den Spezifikationen des W3C behandelt werden.

> [!NOTE]
> Die unten gezeigten Beispiele zeigen die Eigenschaften und einige Beispielkombinationen, zusammen mit den Low-Level-Syntax-Äquivalenten. Sie passen nicht genau aufgrund von Inkonsistenzen in der Browser-Implementierung zusammen, aber in vielen Fällen wird das erste Beispiel dem zweiten entsprechen. Die gezeigten Schriftarten sind Playfair Display, Source Serif Pro, IBM Plex Serif, Dancing Script und Kokoro (alle verfügbar und kostenfrei zu verwenden, die meisten sind auf Google Fonts und anderen Diensten verfügbar).

### Kerning

Zugehörige CSS-Eigenschaft: {{cssxref("font-kerning")}}

Dies bezieht sich auf den Abstand zwischen spezifischen Glyphenpaaren. Dies ist normalerweise standardmäßig aktiviert (wie von der OpenType-Spezifikation empfohlen). Es sollte beachtet werden, dass wenn {{cssxref("letter-spacing")}} auch auf Ihren Text angewendet wird, dies nach dem Kerning angewendet wird.
Klicken Sie in den untenstehenden Codeblöcken auf "Play", um das Beispiel im MDN Playground zu bearbeiten:

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

Schriften können eine Reihe verschiedener Alternativen für verschiedene Glyphen bereitstellen, wie z. B. unterschiedliche Stile von Kleinbuchstaben 'a' oder mehr oder weniger aufwendige Schwünge in einer Skriptschriftart. Diese Eigenschaft kann ein ganzes Set von Alternativen oder nur ein spezifisches aktivieren, abhängig von den angegebenen Werten. Das untenstehende Beispiel zeigt verschiedene Aspekte der Arbeit mit alternativen Zeichen. Schriften mit alternativen Glyphen können diese allgemein oder individuell in separaten stilistischen Sets oder sogar individuellen Zeichen anbieten. In diesem Beispiel können Sie zwei verschiedene Schriftarten und die Einführung der {{cssxref("@font-feature-values")}}-Regel sehen. Diese wird verwendet, um Abkürzungen oder benannte Optionen zu definieren, die pro Schriftfamilie festgelegt werden können. Auf diese Weise können Sie eine benannte Option erstellen, die nur für eine einzelne Schrift gilt, oder eine, die geteilt werden kann und allgemein anwendbar ist. Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

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

In diesem Fall zeigt `@stylistic(alternates)` alle alternativen Zeichen für beide Schriften. Wenn Sie dies nur auf das Wort 'My' anwenden, ändert sich die Darstellung des 'M', und wenn `@styleset(alt-a)` angewendet wird, ändert sich nur das Kleinbuchstabe 'a'.

Versuchen Sie, die Zeile

```css
font-variant-alternates: styleset(alt-a);
```

zu ändern in

```css
font-variant-alternates: styleset(alt-g);
```

und beachten Sie, dass das Kleinbuchstabe 'a' zu seiner regulären Form zurückkehrt und sich das Kleinbuchstabe 'g' stattdessen ändert.

### Ligaturen

Zugehörige CSS-Eigenschaft: {{cssxref("font-variant-ligatures")}}

Ligaturen sind Glyphen, die zwei oder mehr separate Glyphen ersetzen, um sie glatter darzustellen (aus einer Abstandsperspektive oder ästhetischen Perspektive). Einige der häufigsten sind Buchstaben wie 'fi', 'fl' oder 'ffl' — aber es gibt viele andere Möglichkeiten. Es gibt die häufigsten (als allgemeine Ligaturen bezeichnet), und es gibt auch spezialisiertere Kategorien wie 'aufwendige Ligaturen', 'historische Ligaturen' und 'kontextuelle Alternativen'. Während diese letzten technisch gesehen keine Ligaturen sind, sind sie im Allgemeinen ähnlich, da sie spezifische Buchstabenkombinationen ersetzen, wenn sie zusammen erscheinen.

Während sie häufiger in geschwungenen Schriftarten vorkommen, werden sie im untenstehenden Beispiel verwendet, um Pfeile zu erstellen. Klicken Sie in den Codeblöcken unten auf "Play", um das Beispiel im MDN Playground zu bearbeiten:

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

Positionsvarianten werden verwendet, um typografische Hoch- und Tiefstellungsglyphen zu aktivieren. Diese sind so gestaltet, dass sie mit dem umgebenden Text funktionieren, ohne die Grundlinie oder den Zeilenabstand zu verändern. Dies ist besonders nützlich mit den {{htmlelement("sub")}}- oder {{htmlelement("sup")}}-Elementen. Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

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

Einer der häufigeren Anwendungsfälle für OpenType-Merkmale ist die Verwendung von echten Kapitälchen. Diese sind Großbuchstaben in der Größe angepasst, um besser zwischen Kleinbuchstaben zu passen und werden allgemein für Akronyme und Abkürzungen verwendet. Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

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

### Ziffern

Zugehörige CSS-Eigenschaft: {{cssxref("font-variant-numeric")}}

Es gibt verschiedene Ziffernstile, die in Schriften häufig enthalten sind:

- 'Lining'-Ziffern sind alle von gleicher Höhe und auf der gleichen Grundlinie.
- 'Oldstyle'-Ziffern haben gemischte Höhen und sind so gestaltet, dass sie wie Auf- und Abstriche von Kleinbuchstaben wirken. Diese sind so gestaltet, dass sie in den Text eingefügt werden, sodass die Ziffern visuell mit den umgebenden Glyphen verschmelzen, ähnlich wie bei echten Kapitälchen.

Es gibt auch das Konzept der Abstandseinstellungen. Proportionale Abstände sind die normale Einstellung, während tabellarische Abstände Ziffern gleichmäßig ausrichten, unabhängig von der Zeichenbreite, wodurch sie besser geeignet sind, um Tabellen von Zahlen in finanziellen Tabellen auszurichten.

Über diese Eigenschaft werden zwei Arten von Brüchen unterstützt:

- Diagonal geschlitzte Brüche.
- Vertikal gestapelte Brüche.

Auch Ordnungszahlen werden unterstützt (wie '1st' oder '3rd'), ebenso wie eine durchgestrichene Null, wenn sie in der Schrift vorhanden ist.

#### Lining- und Old-Style-Ziffern

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

Damit können Sie auf verschiedene alternative Formen von Glyphen innerhalb einer Schriftart zugreifen. Das untenstehende Beispiel zeigt eine Zeichenfolge normaler Glyphen. Deaktivieren Sie das Kästchen unten, und Sie werden Zeichen nur mit den `jis78`-Glyphen sehen. Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

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

### Schriftvariante-Kurzform

Die {{Cssxref("font-variant")}}-Eigenschaft ist die Kurzformsyntax zur Definition aller oben genannten. Die Einstellung eines Wertes von `normal` setzt alle Eigenschaften auf ihren Anfangswert zurück. Die Einstellung eines Wertes von `none` setzt `font-variant-ligatures` auf none und alle anderen Eigenschaften auf ihren Anfangswert. Das bedeutet, dass wenn das Kerning standardmäßig aktiviert ist, es auch dann noch aktiviert ist, wenn hier ein Wert von `none` angegeben wird. Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

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

{{cssxref("font-feature-settings")}} ist die 'Low Level Syntax', die expliziten Zugriff auf jedes benannte verfügbare OpenType-Merkmal gewährt. Dies gibt viel Kontrolle, hat aber einige Nachteile in Bezug auf die Vererbung und — wie oben erwähnt — wenn Sie eine Einstellung ändern möchten, müssen Sie die gesamte Zeichenfolge (es sei denn, Sie verwenden [CSS custom properties](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties), um die Werte festzulegen) neu deklarieren. Aufgrund dessen ist es am besten, die oben gezeigten Standard-Eigenschaften wann immer möglich zu verwenden.

Es gibt eine riesige Anzahl möglicher Merkmale. Sie können Beispiele für einige von ihnen oben sehen, und es gibt mehrere Ressourcen, um weitere davon zu finden.

Die allgemeine Syntax sieht so aus:

```css
.small-caps {
  font-feature-settings: "smcp", "c2sc";
}
```

Gemäß der Spezifikation können Sie entweder nur den 4-Zeichen-Merkmalkode angeben oder eine 1 nach dem Code (zum Aktivieren dieses Merkmals) oder eine 0 (null) zum Deaktivieren angeben. Dies ist hilfreich, wenn Sie ein Merkmal wie Ligaturen standardmäßig aktiviert haben, es aber ausschalten möchten, so:

```css
.no-ligatures {
  font-feature-settings:
    "liga" 0,
    "dlig" 0;
}
```

### Mehr über Schriftmerkmale-Codes

- ['Das vollständige CSS-Demo für OpenType-Merkmale'](https://sparanoid.com/lab/opentype-features/) (kann nicht für die Wahrhaftigkeit des Namens bürgen, aber es ist ziemlich umfangreich)
- [Eine Liste von OpenType-Merkmalen auf Wikipedia](https://en.wikipedia.org/wiki/List_of_typographic_features)

## Verwendung von CSS-Feature-Erkennung für die Implementierung

Da nicht alle Eigenschaften einheitlich implementiert sind, ist es eine gute Praxis, Ihr CSS so einzurichten, dass es die richtige Eigenschaften unter Nutzung von Feature-Detection verwendet, mit {{cssxref("font-feature-settings")}} als Fallback.

Zum Beispiel können Kapitälchen auf mehrere Weisen eingestellt werden, aber wenn Sie sicherstellen möchten, dass unabhängig von der zugrunde liegenden Großschreibung alles in Kapitälchen endet, erfordert es 2 Einstellungen mit `font-feature-settings` im Vergleich zu einer einzelnen Eigenschaft mit {{cssxref("font-variant-caps")}}.

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

### Demos von CSS-OpenType-Merkmalen in CSS

- [Das vollständige CSS-Demo für OpenType-Merkmale](https://sparanoid.com/lab/opentype-features/)

### Webfont-Analysetools

- [Wakamai Fondue](https://wakamaifondue.com/)
- [Axis Praxis](https://www.axis-praxis.org/)

### W3C-Spezifikationen

- [Schriftmerkmal-Eigenschaften im CSS Fonts Module Level 3](https://drafts.csswg.org/css-fonts-3/#font-rend-props)
- [font-variant-alternatives im CSS Fonts Module Level 4](https://drafts.csswg.org/css-fonts-4/#propdef-font-variant-alternates)

### Andere Ressourcen

- [Verwendung von OpenType-Merkmalen](https://helpx.adobe.com/fonts/using/use-open-type-features.html) von Tim Brown, Head of Typography, Adobe
- [Adobes Syntax für OpenType-Merkmale in CSS](https://helpx.adobe.com/fonts/using/open-type-syntax.html)
