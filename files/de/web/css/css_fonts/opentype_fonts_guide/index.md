---
title: OpenType-Schriftfunktionen
short-title: OpenType features
slug: Web/CSS/CSS_fonts/OpenType_fonts_guide
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

Schriftmerkmale oder Variationen beziehen sich auf verschiedene Glyphen oder Zeichenstile, die in einer OpenType-Schrift enthalten sind. Dazu gehören Dinge wie Ligaturen (besondere Glyphen, die Zeichen wie 'fi' oder 'ffl' kombinieren), Kerning (Anpassungen des Abstands zwischen bestimmten Buchstabenpaaren), Brüche, Zahlenstile und viele andere. Diese werden alle als OpenType-Funktionen bezeichnet und können über spezifische Eigenschaften und Low-Level-Kontrolleigenschaften im Web genutzt werden — {{cssxref("font-feature-settings")}}. Dieser Artikel bietet Ihnen alle notwendigen Informationen zur Verwendung von OpenType-Schriftmerkmalen in CSS.

Einige Schriften haben eine oder mehrere dieser Funktionen standardmäßig aktiviert (Kerning und Standardligaturen sind gängige Beispiele), während andere dem Designer oder Entwickler überlassen werden, um sie in spezifischen Szenarien manuell zu aktivieren.

Zusätzlich zu allgemeinen Funktionsgruppen wie Ligaturen oder Lined Figures (Zahlen, die gleichmäßig ausgerichtet sind, im Gegensatz zu 'Oldstyle', die mehr wie Kleinbuchstaben aussehen), gibt es auch sehr spezifische wie stilistische Sets (die mehrere spezifische Varianten von Glyphen umfassen können, die zusammen verwendet werden sollen), Alternativen (die eine oder mehrere Varianten des Buchstabens 'a' sein könnten) oder sogar sprachspezifische Anpassungen für ostasiatische Sprachen. Im letztgenannten Fall sind diese Anpassungen tatsächlich notwendig, um die Sprache korrekt auszudrücken, und gehen daher über die mehr stilistischen Vorlieben der meisten anderen OpenType-Funktionen hinaus.

> [!WARNING]
> Es gibt viele CSS-Attribute, die definiert wurden, um Schriftfunktionen zu nutzen, aber leider sind viele davon nicht vollständig implementiert. Sie sind alle hier definiert und gezeigt, aber viele funktionieren nur mit der Low-Level-Eigenschaft {{cssxref("font-feature-settings")}}. Es ist möglich, CSS so zu schreiben, dass es in beiden Fällen funktioniert, aber das kann mühsam werden. Das Problem bei der Verwendung von `font-feature-settings` für alles ist, dass jedes Mal, wenn Sie eine der einzelnen Funktionen ändern möchten, Sie den gesamten String neu definieren müssen (ähnlich wie beim Manipulieren variabler Schriften mit {{cssxref("font-variation-settings")}}).

## Ermitteln der Verfügbarkeit von Funktionen in Schriften

Das ist manchmal der schwierigste Punkt, wenn Sie keine Dokumentation haben, die mit den Schriften geliefert wurde (viele Schriftdesigner und Gießereien stellen Musterseiten und CSS genau aus diesem Grund zur Verfügung). Aber es gibt einige Websites, die es einfacher machen, dies herauszufinden. Sie können [wakamaifondue.com](https://wakamaifondue.com/) besuchen, Ihre Schriftdatei auf den Kreis ziehen, wo es angewiesen ist, und nach ein paar Augenblicken erhalten Sie einen vollständigen Bericht über alle Fähigkeiten und Merkmale Ihrer Schrift. [Axis-praxis.org](https://www.axis-praxis.org/) bietet auch eine ähnliche Fähigkeit, mit der Möglichkeit, auf die Funktionen zu klicken, um sie in einem bestimmten Textblock ein- oder auszuschalten.

## Warum sollten Sie sie verwenden?

Angesichts der Tatsache, dass diese Funktionen ein wenig Arbeit erfordern, um entdeckt und verwendet zu werden, scheint es eine berechtigte Frage, warum man sich die Mühe machen sollte, sie zu verwenden. Die Antwort liegt in den spezifischen Funktionen, die eine Website nützlicher, lesbar und gepflegt erscheinen lassen:

- **Ligaturen** wie 'ff' oder 'fi' machen den Buchstabenabstand und das Lesen gleichmäßiger und flüssiger.
- **Brüche** können Heimwerker- und Rezeptwebsites viel einfacher lesbar und verständlich machen.
- **Zahlen** innerhalb von Textabschnitten, die als 'Oldstyle' gesetzt sind, fügen sich besser zwischen Kleinbuchstaben ein, und wenn sie als 'Tabellarische Zahlen' gesetzt sind, werden sie besser ausgerichtet, wenn Sie beispielsweise eine Liste von Kosten in einer Tabelle erstellen. 'Lining'-Zahlen hingegen stehen einheitlicher für sich oder vor großgeschriebenen Wörtern.

Auch wenn keiner dieser Funktionen allein eine Website aufgrund ihrer Abwesenheit unbrauchbar machen wird, kann jede dieser Funktionen eine Website in der Nutzung erleichtern und durch ihre Liebe zum Detail einprägsamer machen.

> OpenType-Funktionen sind wie geheime Fächer in Schriften. Entsperren Sie sie und Sie werden Möglichkeiten finden, Schriften subtil und dramatisch anders aussehen und funktionieren zu lassen. Nicht alle OpenType-Funktionen sind jederzeit angemessen zu verwenden, aber einige sind entscheidend für großartige Typografie. _-- Tim Brown, Leiter der Typografie bei Adobe_.

### Manchmal ist es Substanz, nicht nur Stil

Es gibt einige Fälle — wie bei {{cssxref("font-variant-east-asian")}} — bei denen OpenType-Funktionen direkt mit der Verwendung verschiedener Formen bestimmter Glyphen verbunden sind, die die Bedeutung und Lesbarkeit beeinflussen können. In solchen Fällen ist es mehr als nur eine Nettigkeit, sondern ein wesentlicher Bestandteil des Inhalts selbst.

## Die Schriftfunktionen

Es gibt verschiedene Funktionen, die es zu berücksichtigen gilt. Sie sind hier gruppiert und erklärt gemäß den Hauptattributen und Optionen, die in den W3C-Spezifikationen behandelt werden.

> [!NOTE]
> Die Beispiele unten zeigen die Eigenschaften und einige Beispielkombinationen zusammen mit den Low-Level-Syntax-Äquivalenten. Sie stimmen möglicherweise nicht genau überein aufgrund von Inkonsistenzen in der Implementierung durch Browser, aber in vielen Fällen wird das erste Beispiel dem zweiten entsprechen. Die gezeigten Schriftarten sind Playfair Display, Source Serif Pro, IBM Plex Serif, Dancing Script und Kokoro (alle verfügbar und kostenlos zu verwenden, die meisten sind auf Google Fonts und anderen Diensten verfügbar).

### Kerning

Zugehörige CSS-Eigenschaft: {{cssxref("font-kerning")}}

Dies bezieht sich auf den Abstand zwischen spezifischen Glyphenpaaren. Dies ist im Allgemeinen standardmäßig aktiviert (wie von der OpenType-Spezifikation empfohlen). Es sollte darauf hingewiesen werden, dass wenn {{cssxref("letter-spacing")}} ebenfalls auf Ihren Text gesetzt ist, dies nach dem Kerning angewendet wird.
Klicken Sie auf "Play" in den untenstehenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

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

### Alternates

Zugehörige CSS-Eigenschaft: {{cssxref("font-variant-alternates")}}

Schriften können eine Reihe verschiedener Alternativen für verschiedene Glyphen bereitstellen, wie z.B. verschiedene Stile des Kleinbuchstabens 'a' oder mehr oder weniger aufwendige Schwünge in einer Schrifttype. Diese Eigenschaft kann einen ganzen Satz von Alternaten oder nur einen spezifischen aktivieren, abhängig von den bereitgestellten Werten. Das folgende Beispiel zeigt mehrere verschiedene Aspekte der Arbeit mit alternativen Zeichen. Schriften mit alternativen Glyphen können sie flächendeckend oder individuell in separaten stilistischen Sets oder sogar mit einzelnen Zeichen verfügbar machen. In diesem Beispiel sehen Sie zwei verschiedene Schriftarten und die Einführung des {{cssxref("@font-feature-values")}} at-rule. Dies wird verwendet, um Verknüpfungen oder benannte Optionen zu definieren, die pro Schriftfamilie definiert werden können. Auf diese Weise können Sie eine benannte Option erstellen, die nur für eine einzelne Schrift gilt, oder eine, die geteilt wird und universeller angewendet werden kann. Klicken Sie auf "Play" in den untenstehenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

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

In diesem Fall zeigt `@stylistic(alternates)` alle alternativen Zeichen für beide Schriften. Wenn Sie dies nur auf das Wort 'My' anwenden, ändert sich die Art, wie das 'M' angezeigt wird, und die Anwendung von `@styleset(alt-a)` ändert nur das Kleinbuchstaben-'a'.

Versuchen Sie, die Zeile

```css
font-variant-alternates: styleset(alt-a);
```

zu

```css
font-variant-alternates: styleset(alt-g);
```

zu ändern und bemerken Sie, dass das Kleinbuchstaben-'a' zu seiner normalen Form zurückkehrt und das Kleinbuchstaben-'g' sich ändert.

### Ligaturen

Zugehörige CSS-Eigenschaft: {{cssxref("font-variant-ligatures")}}

Ligaturen sind Glyphen, die zwei oder mehr separate Glyphen ersetzen, um sie flüssiger darzustellen (aus einer Abstandsperspektive oder ästhetischen Sichtweise). Zu den häufigsten zählen Buchstaben wie 'fi', 'fl' oder 'ffl' — aber es gibt viele andere Möglichkeiten. Es gibt die häufigsten (als allgemeine Ligaturen bezeichnet), und es gibt auch speziellere Kategorien wie 'diskretionäre Ligaturen', 'historische Ligaturen' und 'kontextuelle Alternativen'. Während diese letzten technisch gesehen keine Ligaturen sind, sind sie im Allgemeinen ähnlich, da sie bestimmte Buchstabenkombinationen ersetzen, wenn sie zusammen erscheinen.

Während sie häufiger in Skripttypen vorkommen, werden sie im untenstehenden Beispiel verwendet, um Pfeile zu erzeugen. Klicken Sie auf "Play" in den untenstehenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

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

Positionsvarianten werden verwendet, um typografische Hoch- und Tiefstellungszeichen zu ermöglichen. Diese sind so konzipiert, dass sie mit dem umgebenden Text funktionieren, ohne die Grundlinie oder den Zeilenabstand zu verändern. Dies ist besonders nützlich in Verbindung mit den {{htmlelement("sub")}}- oder {{htmlelement("sup")}}-Elementen. Klicken Sie auf "Play" in den untenstehenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

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

Eine häufige Anwendung für OpenType-Funktionen sind echte Kapitälchen. Dies sind Großbuchstaben, die so dimensioniert sind, dass sie sich besser zwischen Kleinbuchstaben einfügen und werden generell für Akronyme und Abkürzungen verwendet. Klicken Sie auf "Play" in den untenstehenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

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

### Zahlen

Zugehörige CSS-Eigenschaft: {{cssxref("font-variant-numeric")}}

Es gibt mehrere verschiedene Stile von Zahlen, die häufig in Schriften enthalten sind:

- 'Lining'-Zahlen haben alle die gleiche Höhe und stehen auf der gleichen Grundlinie.
- 'Oldstyle'-Zahlen haben gemischte Höhen und sollen das Erscheinungsbild von Ober- und Unterlängen wie andere Kleinbuchstaben haben. Diese sind so konzipiert, dass sie im Textverlauf verwendet werden, sodass sich die Zahlen visuell mit den umgebenden Glyphen in ähnlicher Weise wie Kapitälchen vermischen.

Es gibt auch das Konzept der Abstände. Proportionale Abstände sind die normale Einstellung, während tabellarische Abstände Zahlen gleichmäßig ausrichten, unabhängig von der Zeichenbreite, was sie geeigneter für die Ausrichtung von Zahlen in Tabellen macht, z.B. in Finanztabellen.

Es gibt zwei Arten von Brüchen, die durch diese Eigenschaft unterstützt werden:

- Diagonal geschlitzte Brüche.
- Vertikal gestapelte Brüche.

Ordnungszahlen werden ebenfalls unterstützt (wie '1st' oder '3rd'), ebenso wie eine Null mit Schrägstrich, falls in der Schrift vorhanden.

#### 'Lining' und 'Oldstyle' Zahlen

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

#### Brüche, Ordnungszahlen und durchgestrichene Null

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

### Ostasiatische

Zugehörige CSS-Eigenschaft: {{cssxref("font-variant-east-asian")}}

Dies ermöglicht den Zugriff auf verschiedene alternative Formen von Glyphen innerhalb einer Schrift. Das folgende Beispiel zeigt eine Zeichenfolge normaler Glyphen. Deaktivieren Sie das Kontrollkästchen unten und Sie sehen Zeichen mit nur den `jis78` Glyphen. Klicken Sie auf "Play" in den untenstehenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

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
> Diese Glyphen wurden aus einem Schriftenmuster kopiert und sind nicht zur Verwendung als Prosa gedacht.

### Schriftvarianten-Kurzform

Die Eigenschaft {{Cssxref("font-variant")}} ist die Kurzsyntax zur Definition aller oben genannten Eigenschaften. Das Festlegen eines Werts von `normal` setzt alle Eigenschaften auf ihren Anfangswert zurück. Das Festlegen eines Werts von `none` setzt `font-variant-ligatures` auf none und alle anderen Eigenschaften auf ihren Anfangswert. Das bedeutet, dass, wenn Kerning standardmäßig aktiviert ist, es auch bei der Angabe eines Werts von `none` hier aktiviert bleibt. Klicken Sie auf "Play" in den untenstehenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

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

## Schriftmerkmaleinstellungen

{{cssxref("font-feature-settings")}} ist die 'Low-Level-Syntax', die expliziten Zugriff auf jede verfügbare benannte OpenType-Funktion ermöglicht. Dies bietet viel Kontrolle, hat jedoch einige Nachteile, wie es sich auf die Vererbung auswirkt und — wie oben erwähnt — wenn Sie eine Einstellung ändern möchten, müssen Sie den gesamten String erneut deklarieren (es sei denn, Sie verwenden [CSS-Benutzervariablen](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties), um die Werte zu setzen). Aus diesem Grund ist es am besten, die oben gezeigten Standard-Eigenschaften so oft wie möglich zu verwenden.

Es gibt eine riesige Anzahl möglicher Funktionen. Sie können Beispiele für einige davon oben sehen, und es gibt mehrere Ressourcen, um mehr davon zu finden.

Die allgemeine Syntax sieht so aus:

```css
.small-caps {
  font-feature-settings: "smcp", "c2sc";
}
```

Laut der Spezifikation können Sie entweder nur den 4-Zeichen-Feature-Code angeben oder eine 1 nach dem Code (um diese Funktion zu aktivieren) oder eine 0 (Null), um sie zu deaktivieren. Dies ist hilfreich, wenn Sie eine Funktion wie Ligaturen standardmäßig aktiviert haben, diese jedoch deaktivieren möchten, wie folgt:

```css
.no-ligatures {
  font-feature-settings:
    "liga" 0,
    "dlig" 0;
}
```

### Mehr über font-feature-settings-Codes

- ['Das vollständige CSS-Demo für OpenType-Funktionen'](https://sparanoid.com/lab/opentype-features/) (Ich kann nicht für die Richtigkeit des Namens bürgen, aber es ist ziemlich umfangreich)
- [Eine Liste von OpenType-Funktionen auf Wikipedia](https://en.wikipedia.org/wiki/List_of_typographic_features)

## Verwendung der CSS-Feature-Erkennung zur Implementierung

Da nicht alle Eigenschaften gleichmäßig implementiert sind, ist es eine gute Praxis, Ihr CSS mithilfe der Feature-Erkennung zu erstellen, um die richtigen Eigenschaften zu nutzen, wobei {{cssxref("font-feature-settings")}} als Fallback verwendet wird.

Zum Beispiel können Kapitälchen auf verschiedene Weise gesetzt werden, aber wenn Sie sicherstellen wollen, dass unabhängig von der zugrunde liegenden Großschreibung alles in Kapitälchen endet, erfordert es 2 Einstellungen mit `font-feature-settings` im Gegensatz zu einem einzelnen Eigenschaftswert unter Verwendung von {{cssxref("font-variant-caps")}}.

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

### Demonstrationen von OpenType-Funktionen in CSS

- [Das vollständige CSS-Demo für OpenType-Funktionen](https://sparanoid.com/lab/opentype-features/)

### Werkzeuge zur Analyse von Webfonts

- [Wakamai Fondue](https://wakamaifondue.com/)
- [Axis Praxis](https://www.axis-praxis.org/)

### W3C-Spezifikationen

- [Schriftenmerkmaleigenschaften im CSS Fonts Module Level 3](https://drafts.csswg.org/css-fonts-3/#font-rend-props)
- [font-variant-Alternativen im CSS Fonts Module Level 4](https://drafts.csswg.org/css-fonts-4/#propdef-font-variant-alternates)

### Weitere Ressourcen

- [Verwendung von OpenType-Funktionen](https://helpx.adobe.com/fonts/using/use-open-type-features.html) von Tim Brown, Leiter der Typografie, Adobe
- [Adobes Syntax für OpenType-Funktionen in CSS](https://helpx.adobe.com/fonts/using/open-type-syntax.html)
