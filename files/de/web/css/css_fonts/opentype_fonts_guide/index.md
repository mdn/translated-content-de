---
title: Leitfaden zu OpenType-Schriftart-Funktionen
slug: Web/CSS/CSS_fonts/OpenType_fonts_guide
l10n:
  sourceCommit: 8dac6c62fc3cee2de82960d4dd9d9be16a3a1761
---

{{CSSRef}}

Schriftartenfunktionen oder -varianten beziehen sich auf verschiedene Glyphen oder Zeichenstile, die in einer OpenType-Schriftart enthalten sind. Dazu gehören Dinge wie Ligaturen (spezielle Glyphen, die Zeichen wie 'fi' oder 'ffl' kombinieren), Kerning (Anpassungen des Abstands zwischen bestimmten Buchstabenpaaren), Brüche, Zahlenstile und vieles mehr. Diese werden als OpenType-Funktionen bezeichnet und können über spezifische Eigenschaften und Low-Level-Kontrolleigenschaften — {{cssxref("font-feature-settings")}} — im Web verwendet werden. In diesem Artikel erfahren Sie alles, was Sie über die Verwendung von OpenType-Schriftart-Funktionen in CSS wissen müssen.

Einige Schriftarten haben eine oder mehrere dieser Funktionen standardmäßig aktiviert (Kerning und Standardligaturen sind häufige Beispiele), während bei anderen die Designer oder Entwickler entscheiden, ob sie in bestimmten Szenarien aktiviert werden sollen.

Zusätzlich zu breiten Funktionssätzen wie Ligaturen oder proportionalen Zahlen (Zahlen, die gleichmäßig ausgerichtet sind, im Gegensatz zu "oldstyle", die eher wie Kleinbuchstaben aussehen), gibt es auch sehr spezifische Funktionen wie stilistische Sätze (die mehrere spezifische Varianten von Glyphen enthalten können, die zusammen verwendet werden sollen), Alternativen (eine oder mehrere Varianten des Buchstabens 'a') oder sogar sprachspezifische Anpassungen für ostasiatische Sprachen. Im letzteren Fall sind diese Anpassungen tatsächlich erforderlich, um die Sprache richtig auszudrücken, und gehen damit über die stilistische Präferenz der meisten anderen OpenType-Funktionen hinaus.

> [!WARNING]
> Es gibt viele CSS-Attribute, die definiert sind, um Schriftart-Funktionen zu nutzen, aber leider sind viele nicht vollständig implementiert. Sie sind hier alle definiert und angezeigt, aber viele funktionieren nur mit der Low-Level-Eigenschaft {{cssxref("font-feature-settings")}}. Es ist möglich, CSS so zu schreiben, dass es in beiden Varianten funktioniert, aber das kann mühsam werden. Das Problem bei der Verwendung von `font-feature-settings` für alles ist, dass jedes Mal, wenn Sie eine der einzelnen Funktionen ändern möchten, Sie die gesamte Zeichenkette neu definieren müssen (ähnlich wie beim Manipulieren von Variablen-Schriftarten mit {{cssxref("font-variation-settings")}}).

## Verfügbarkeit von Funktionen in Schriftarten entdecken

Wenn Sie keine Dokumentation zu den Schriftarten haben (viele Schriftgestalter und Schriftgießereien stellen Beispieldokumente und CSS speziell zu diesem Zweck zur Verfügung), kann es manchmal schwierig sein, die Verfügbarkeit von Funktionen herauszufinden. Es gibt jedoch einige Websites, die dies erleichtern. Sie können [wakamaifondue.com](https://wakamaifondue.com/) besuchen, Ihre Schriftartdatei auf den markierten Bereich ziehen und in wenigen Momenten erhalten Sie einen vollständigen Bericht über alle Fähigkeiten und Funktionen Ihrer Schriftart. [Axis-praxis.org](https://www.axis-praxis.org/) bietet eine ähnliche Funktionalität mit der Möglichkeit, die Funktionen auf einem bestimmten Textblock ein- oder auszuschalten.

## Warum verwenden?

Angesichts der Tatsache, dass diese Funktionen etwas Aufwand erfordern, um entdeckt und verwendet zu werden, ist es möglicherweise berechtigt zu fragen, warum man sich die Mühe machen sollte, sie zu verwenden. Die Antwort liegt in den spezifischen Funktionen, die eine Website nützlicher, lesbarer und ansprechender machen können:

- **Ligaturen** wie 'ff' oder 'fi' sorgen für gleichmäßigere Abstände und eine glattere Lesbarkeit.
- **Brüche** erleichtern das Lesen und Verstehen auf Heimwerker- und Rezeptseiten erheblich.
- **Zahlen** im Text als 'oldstyle' gesetzt, passen besser zu Kleinbuchstaben, während Zahlen im Tabellenstil ('tabular numbers') besser ausgerichtet werden, z. B. in einer Kostenübersicht. 'Lining'-Zahlen harmonieren dagegen besser allein oder in Kombination mit Großbuchstaben.

Während das Fehlen keiner dieser Funktionen eine Website unbrauchbar macht, kann jede von ihnen dazu beitragen, eine Website benutzerfreundlicher und einprägsamer durch Liebe zum Detail zu gestalten.

> OpenType-Funktionen sind wie geheime Fächer in Schriftarten. Entdecken Sie sie, und Sie werden Möglichkeiten finden, Schriftarten subtil und dramatisch unterschiedlich aussehen und sich verhalten zu lassen. Nicht alle OpenType-Funktionen sind immer angemessen, aber einige Funktionen sind entscheidend für großartige Typografie. _-- Tim Brown, Leiter Typografie bei Adobe_.

### Manchmal geht es um Bedeutung, nicht nur um Stil

In einigen Fällen — wie bei {{cssxref("font-variant-east-asian")}} — sind OpenType-Funktionen direkt mit der Nutzung unterschiedlicher Formen bestimmter Glyphen verbunden, was Auswirkungen auf die Bedeutung und Lesbarkeit haben kann. In solchen Fällen handelt es sich nicht nur um eine nette Ergänzung, sondern vielmehr um einen integralen Bestandteil des Inhalts.

## Die Schriftart-Funktionen

Es gibt eine Reihe verschiedener Funktionen, die Betrachtung verdienen. Sie sind hier nach den Hauptattributen und Optionen gruppiert und erklärt, wie sie in den W3C-Spezifikationen behandelt werden.

> [!NOTE]
> Die unten gezeigten Beispiele zeigen die Eigenschaften und einige Beispielkombinationen sowie die entsprechenden Low-Level-Syntax-Äquivalente. Sie stimmen möglicherweise nicht genau überein, da es Unterschiede in der Browserimplementierung gibt, aber in vielen Fällen entspricht das erste Beispiel dem zweiten. Die verwendeten Schriftarten sind Playfair Display, Source Serif Pro, IBM Plex Serif, Dancing Script und Kokoro (alle kostenlos verfügbar, die meisten sind auf Google Fonts und anderen Diensten zu finden).

### Kerning

Zugehörige CSS-Eigenschaft: {{cssxref("font-kerning")}}

Dies bezieht sich auf den Abstand zwischen bestimmten Buchstabenpaaren. Dies ist in der Regel standardmäßig aktiviert (wie in der OpenType-Spezifikation empfohlen). Beachten Sie, dass, wenn {{cssxref("letter-spacing")}} ebenfalls auf Ihren Text angewendet wird, dies nach dem Kerning angewendet wird.
Klicken Sie auf "Abspielen" in den Code-Beispielen unten, um das Beispiel im MDN Playground zu bearbeiten:

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

Schriftarten können eine Reihe alternativer Glyphen für verschiedene Zeichen bereitstellen, etwa unterschiedliche Stile des Kleinbuchstabens 'a' oder mehr oder weniger aufwendige Schwünge in einer Skriptschrift. Diese Eigenschaft kann einen gesamten Satz von Alternativen oder nur eine bestimmte aktivieren, abhängig von den gelieferten Werten. Das untenstehende Beispiel zeigt mehrere unterschiedliche Aspekte bei der Arbeit mit alternativen Zeichen. Schriftarten mit alternativen Glyphen können diese entweder allgemein oder individuell in separaten stilistischen Sätzen oder sogar für einzelne Zeichen verfügbar machen. In diesem Beispiel sehen Sie zwei verschiedene Schriftarten und die Einführung des {{cssxref("@font-feature-values")}}-Attributs. Damit können Abkürzungen oder benannte Optionen definiert werden, die für jede Schriftartfamilie festgelegt sind. So können Sie eine benannte Option erstellen, die nur für eine einzelne Schriftart gilt, oder eine, die geteilt wird und allgemeiner angewendet werden kann. Klicken Sie auf "Abspielen" in den Code-Beispielen unten, um das Beispiel im MDN Playground zu bearbeiten:

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

In diesem Fall zeigt `@stylistic(alternates)` alle alternativen Zeichen für jede Schriftart an. Wenn dies nur auf das Wort 'My' angewandt wird, ändert sich die Darstellung von 'M', und die Anwendung von `@styleset(alt-a)` ändert nur das Zeichen für ein Kleinbuchstaben-'a'.

Versuchen Sie, die Zeile zu ändern

```css
font-variant-alternates: styleset(alt-a);
```

zu

```css
font-variant-alternates: styleset(alt-g);
```

und bemerken Sie, dass das Kleinbuchstaben-'a' in seine reguläre Form zurückkehrt, während sich die Kleinbuchstaben-'g's ändern.

#### Mehr über Alternativen

- <https://www.w3.org/TR/css-fonts-4/#propdef-font-variant-alternates>

### Ligaturen

Zugehörige CSS-Eigenschaft: {{cssxref("font-variant-ligatures")}}

Ligaturen sind Glyphen, die zwei oder mehr separate Glyphen ersetzen, um sie aus Abstands- oder ästhetischen Gründen fließender darzustellen. Einige der häufigsten sind Buchstaben wie 'fi', 'fl' oder 'ffl' — es gibt jedoch viele weitere Möglichkeiten. Es gibt die häufigsten (als allgemeine Ligaturen bezeichnet) sowie spezialisiertere Kategorien wie 'diskretionäre Ligaturen', 'historische Ligaturen' und 'kontextuelle Alternativen'. Während letztere technisch gesehen keine Ligaturen sind, bei erscheinen sie ähnlich, da sie spezifische Kombinationen ersetzen, wenn sie zusammen auftreten.

Obwohl sie häufiger in Skriptschriftarten vorkommen, werden sie im folgenden Beispiel verwendet, um Pfeile zu erstellen. Klicken Sie auf "Abspielen" in den Code-Beispielen unten, um das Beispiel im MDN Playground zu bearbeiten:

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

Positionsvarianten werden verwendet, um typografische Hoch- und Tiefstellungen von Glyphen zu ermöglichen. Diese sind so gestaltet, dass sie mit dem umgebenden Text harmonieren, ohne die Grundlinie oder den Zeilenabstand zu ändern. Dies ist besonders nützlich in Verbindung mit den {{htmlelement("sub")}}- oder {{htmlelement("sup")}}-Elementen. Klicken Sie auf "Abspielen" in den Code-Beispielen unten, um das Beispiel im MDN Playground zu bearbeiten:

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

### Versalien

Zugehörige CSS-Eigenschaft: {{cssxref("font-variant-caps")}}

Einer der häufigsten Anwendungsfälle für OpenType-Funktionen sind richtige Kapitälchen. Diese sind Großbuchstaben, die so skaliert sind, dass sie besser zu Kleinbuchstaben passen, und werden häufig für Akronyme und Abkürzungen verwendet. Klicken Sie auf "Abspielen" in den Code-Beispielen unten, um das Beispiel im MDN Playground zu bearbeiten:

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

Es gibt mehrere verschiedene Stile von Zahlen, die in Schriftarten häufig enthalten sind:

- 'Lining'-Ziffern sind alle gleich hoch und auf derselben Grundlinie.
- 'Oldstyle'-Ziffern haben gemischte Höhen und sind darauf ausgelegt, wie Auf- und Abstriche von Kleinbuchstaben auszusehen. Sie sind dafür gestaltet, inline mit dem Text verwendet zu werden, sodass die Ziffern visuell ähnlich wie Kleinbuchstaben mit den umgebenden Glyphen verschmelzen.

Es gibt auch die Möglichkeit, den Abstand anzupassen: proportionale Abstände sind die Standardeinstellung, während tabellarische Abstände die Ziffern unabhängig von der Zeichenbreite gleichmäßig ausrichten, was sie geeigneter für Tabellen von Zahlen in finanziellen Tabellen macht.

Zwei Arten von Brüchen werden durch diese Eigenschaft unterstützt:

- Diagonal geschlitzte Brüche.
- Vertikal gestapelte Brüche.

Ebenfalls unterstützt werden Ordnungszahlen (wie '1st' oder '3rd') sowie eine durchstrichene Null, sofern in der Schriftart verfügbar.

#### Lining- und Oldstyle-Zahlen

Klicken Sie auf "Abspielen" in den Code-Beispielen unten, um das Beispiel im MDN Playground zu bearbeiten:

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

#### Brüche, Ordnungszahlen und durchstrichene Null

Klicken Sie auf "Abspielen" in den Code-Beispielen unten, um das Beispiel im MDN Playground zu bearbeiten:

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

### Ostasiatische Varianten

Zugehörige CSS-Eigenschaft: {{cssxref("font-variant-east-asian")}}

Diese erlauben den Zugriff auf verschiedene alternative Formen von Glyphen innerhalb einer Schriftart. Das Beispiel unten zeigt eine Zeichenfolge mit normalen Glyphen. Deaktivieren Sie das Kontrollkästchen unten, und Sie sehen Zeichen nur mit `jis78`-Glyphen. Klicken Sie auf "Abspielen" in den Code-Beispielen unten, um das Beispiel im MDN Playground zu bearbeiten:

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
> Diese Glyphen wurden aus einer Schriftartprobe kopiert und sind nicht als Prosa gedacht.

### Kurzform für Schriftvarianten

Die {{Cssxref("font-variant")}}-Eigenschaft ist die Kurzformsyntax zur Definition aller oben genannten Eigenschaften. Das Festlegen eines Wertes von `normal` setzt alle Eigenschaften auf ihren initialen Wert zurück. Das Festlegen eines Wertes von `none` setzt `font-variant-ligatures` auf keine und alle anderen Eigenschaften auf ihren initialen Wert zurück. Das bedeutet, dass wenn Kerning standardmäßig aktiviert ist, es auch mit einem Wert von `none` hier weiterhin aktiviert bleibt. Klicken Sie auf "Abspielen" in den Code-Beispielen unten, um das Beispiel im MDN Playground zu bearbeiten:

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

## Schriftart-Funktionseinstellungen

{{cssxref("font-feature-settings")}} ist die Low-Level-Syntax, die expliziten Zugriff auf jede benannte verfügbare OpenType-Funktion ermöglicht. Dies bietet viel Kontrolle, hat jedoch einige Nachteile in Bezug auf Vererbung und — wie oben erwähnt — wenn Sie eine Einstellung ändern möchten, müssen Sie die gesamte Zeichenkette neu deklarieren (es sei denn, Sie verwenden [CSS-Benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties), um die Werte festzulegen). Daher ist es am besten, die obigen Standard-Eigenschaften zu verwenden, wo immer möglich.

Es gibt eine große Anzahl möglicher Funktionen. Sie können Beispiele für viele davon oben sehen, und es gibt mehrere Ressourcen, um weitere zu finden.

Die allgemeine Syntax sieht so aus:

```css
.small-caps {
  font-feature-settings: "smcp", "c2sc";
}
```

Laut Spezifikation können Sie entweder nur den 4-stelligen Funktionscode angeben oder eine 1 nach dem Code hinzufügen (um diese Funktion zu aktivieren) oder eine 0 (Null), um sie zu deaktivieren. Dies ist hilfreich, wenn Sie z. B. eine Funktion wie Ligaturen standardmäßig aktiviert haben, aber diese deaktivieren möchten, wie folgt:

```css
.no-ligatures {
  font-feature-settings:
    "liga" 0,
    "dlig" 0;
}
```

### Mehr über font-feature-settings-Codes

- ['The Complete CSS Demo for OpenType Features'](https://sparanoid.com/lab/opentype-features/) (kann für die Wahrheit des Namens nicht garantieren, aber es ist ziemlich umfangreich)
- [Eine Liste von OpenType-Funktionen auf Wikipedia](https://en.wikipedia.org/wiki/List_of_typographic_features)

## Nutzung von CSS-Funktionsprüfungen zur Implementierung

Da nicht alle Eigenschaften gleichmäßig implementiert sind, ist es eine gute Praxis, Ihr CSS mithilfe von Funktionsprüfungen so einzurichten, dass die richtigen Eigenschaften genutzt werden, wobei {{cssxref("font-feature-settings")}} als Fallback dient.

Zum Beispiel können Kapitälchen auf mehrere Arten gesetzt werden, aber wenn Sie sicherstellen möchten, dass unabhängig von der Groß- oder Kleinschreibung des zugrunde liegenden Textes alles in Kapitälchen endet, erfordert dies 2 Einstellungen mit `font-feature-settings` im Gegensatz zu einer einzelnen Eigenschaft mit {{cssxref("font-variant-caps")}}.

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

### Demos zu OpenType-Funktionen in CSS

- [The Complete CSS Demo for OpenType Features](https://sparanoid.com/lab/opentype-features/)

### Werkzeuge zur Analyse von Web-Schriftarten

- [Wakamai Fondue](https://wakamaifondue.com/)
- [Axis Praxis](https://www.axis-praxis.org/)

### W3C-Spezifikationen

- [Font-Funktions-Eigenschaften im CSS Fonts Module Level 3](https://drafts.csswg.org/css-fonts-3/#font-rend-props)
- [font-variant-alternatives im CSS Fonts Module Level 4](https://www.w3.org/TR/css-fonts-4/#propdef-font-variant-alternates)

### Weitere Ressourcen

- [OpenType-Funktionen verwenden](https://helpx.adobe.com/fonts/using/use-open-type-features.html) von Tim Brown, Leiter Typografie, Adobe
- [Adobes Syntax für OpenType-Funktionen in CSS](https://helpx.adobe.com/fonts/using/open-type-syntax.html)
