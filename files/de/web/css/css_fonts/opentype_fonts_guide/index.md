---
title: OpenType-Schriftart-Features Leitfaden
slug: Web/CSS/CSS_fonts/OpenType_fonts_guide
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

{{CSSRef}}

Schriftart-Features oder -Varianten beziehen sich auf verschiedene Glyphen oder Zeichenstile, die in einer OpenType-Schriftart enthalten sind. Dazu gehören Ligaturen (spezielle Glyphen, die Zeichen wie 'fi' oder 'ffl' kombinieren), Kerning (Anpassungen des Abstands zwischen bestimmten Buchstabenpaaren), Brüche, Zahlenstile und mehrere andere. Diese werden alle als OpenType-Features bezeichnet und können im Web über spezifische Eigenschaften und Steuerungseigenschaften auf niedrigem Niveau verwendet werden — {{cssxref("font-feature-settings")}}. Dieser Artikel bietet Ihnen alles, was Sie über die Verwendung von OpenType-Schriftart-Features in CSS wissen müssen.

Einige Schriftarten haben standardmäßig eines oder mehrere dieser Features aktiviert (Kerning und Standard-Ligaturen sind häufige Beispiele), während andere dem Designer oder Entwickler überlassen sind, um sie in spezifischen Szenarien zu aktivieren.

Zusätzlich zu umfassenden Featuresets wie Ligaturen oder ausgerichteten Zahlen (Ziffern, die gleichmäßig ausgerichtet sind im Gegensatz zu 'Oldstyle', die eher wie Kleinbuchstaben aussehen), gibt es auch sehr spezifische wie stilistische Sets (die mehrere spezifische Varianten von Glyphen enthalten können, die zusammen verwendet werden sollen), Alternativen (die eine oder mehrere Varianten des Buchstabens 'a' sein können) oder sogar sprachspezifische Änderungen für ostasiatische Sprachen. In letzterem Fall sind diese Änderungen tatsächlich notwendig, um die Sprache richtig auszudrücken, sodass sie über die rein stilistische Präferenz der meisten anderen OpenType-Features hinausgehen.

> [!WARNING]
> Es gibt viele CSS-Attribute, die definiert sind, um Schriftart-Features zu nutzen, aber leider sind viele nicht vollständig implementiert. Sie sind hier alle definiert und gezeigt, aber viele werden nur mit der niedriger angelegten Eigenschaft {{cssxref("font-feature-settings")}} funktionieren. Es ist möglich, CSS zu schreiben, das in beide Richtungen funktioniert, aber das kann mühsam werden. Das Problem bei der Verwendung von `font-feature-settings` für alles ist, dass jedes Mal, wenn Sie eines der einzelnen Features ändern möchten, Sie die gesamte Zeichenfolge neu definieren müssen (ähnlich wie bei der Manipulation variabler Schriftarten mit {{cssxref("font-variation-settings")}}).

## Verfügbarkeit von Features in Schriftarten entdecken

Dies ist manchmal das Schwierigste herauszufinden, wenn Sie keine Dokumentation haben, die mit den Schriftarten geliefert wurde (viele Schriftdesigner und -verlage stellen Musterseiten und CSS gerade aus diesem Grund zur Verfügung). Aber es gibt einige Websites, die es einfacher machen, dies herauszufinden. Sie können [wakamaifondue.com](https://wakamaifondue.com/) besuchen, Ihre Schriftartdatei auf den angegebenen Kreis ziehen, und in wenigen Augenblicken erhalten Sie einen vollständigen Bericht über alle Fähigkeiten und Features Ihrer Schriftart. [Axis-praxis.org](https://www.axis-praxis.org/) bietet auch eine ähnliche Möglichkeit, mit der Fähigkeit, auf die Features zu klicken, um sie in einem gegebenen Textblock ein- oder auszuschalten.

## Warum sollten Sie sie verwenden?

Angesichts der Tatsache, dass diese Features ein bisschen Arbeit erfordern, um sie zu entdecken und zu verwenden, mag es berechtigt erscheinen, zu fragen, warum man sich die Mühe machen sollte, sie zu verwenden. Die Antwort liegt in den spezifischen Features, die eine Website nützlicher, lesbarer und besser gestaltet machen:

- **Ligaturen** wie 'ff' oder 'fi' machen den Buchstabenabstand und das Lesen gleichmäßiger und flüssiger.
- **Brüche** können Heimwerker- und Rezeptseiten wesentlich lesbarer und verständlicher machen.
- **Ziffern** innerhalb von Textabsätzen, die als 'Oldstyle' gesetzt sind, fügen sich nahtloser zwischen den Kleinbuchstaben ein, und das Setzen als 'Tabellenziffern' wird sie besser ausrichten, wenn Sie beispielsweise eine Liste von Kosten in einer Tabelle setzen. 'Lining'-Ziffern hingegen sitzen gleichmäßiger für sich oder vor großgeschriebenen Wörtern.

Zwar wird keine dieser Features eine Website unbrauchbar machen aufgrund ihrer Abwesenheit, aber jedes von ihnen kann abwechselnd eine Website benutzerfreundlicher und für ihre Detailgenauigkeit einprägsamer machen.

> OpenType-Features sind wie geheime Fächer in Schriftarten. Schließen Sie sie auf, und Sie finden Wege, Schriftarten auf subtile und drastische Weise anders aussehen und sich anders verhalten zu lassen. Nicht alle OpenType-Features sind immer angemessen zu verwenden, aber einige Features sind entscheidend für großartige Typografie. _-- Tim Brown, Leiter der Typografie bei Adobe_.

### Manchmal ist es Substanz, nicht nur Stil

Es gibt einige Fälle — wie mit {{cssxref("font-variant-east-asian")}} — bei denen OpenType-Features direkt mit der Verwendung unterschiedlicher Formen bestimmter Glyphen verknüpft sind, was Bedeutung und Lesbarkeit beeinflussen kann. In solchen Fällen geht es über eine Nettigkeit hinaus und ist eher ein integraler Bestandteil des Inhalts selbst.

## Die Schriftart-Features

Es gibt eine Reihe von verschiedenen Features, die zu berücksichtigen sind. Sie sind hier gruppiert und gemäß den Hauptattributen und Optionen erläutert, die in den W3C-Spezifikationen behandelt werden.

> [!NOTE]
> Die folgenden Beispiele zeigen die Eigenschaften und einige beispielhafte Kombinationen sowie die Äquivalente in niedrigem Niveau Syntax. Aufgrund von Implementierungsinkonsistenzen in Browsern passen sie möglicherweise nicht genau zusammen, aber in vielen Fällen entspricht das erste Beispiel dem zweiten. Die gezeigten Schriftarten sind Playfair Display, Source Serif Pro, IBM Plex Serif, Dancing Script und Kokoro (alle verfügbar und kostenlos zu verwenden, die meisten sind bei Google Fonts und anderen Diensten zu finden).

### Kerning

Zugehöriges CSS-Attribut: {{cssxref("font-kerning")}}

Dies bezieht sich auf den Abstand zwischen spezifischen Glyphenpaaren. Dies ist in der Regel standardmäßig eingeschaltet (wie in der OpenType-Spezifikation empfohlen). Es sollte beachtet werden, dass, wenn {{cssxref("letter-spacing")}} auch auf Ihrem Text festgelegt ist, dies nach dem Kerning angewendet wird.
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

Zugehöriges CSS-Attribut: {{cssxref("font-variant-alternates")}}

Schriftarten können eine Reihe von verschiedenen Alternativen für verschiedene Glyphen bereitstellen, wie zum Beispiel verschiedene Stile eines kleinen 'a' oder mehr oder weniger ausgefeilte Schwünge in einer Schreibschrift. Diese Eigenschaft kann einen gesamten Satz von Alternativen oder nur eine spezielle aktivieren, abhängig von den angegebenen Werten. Das untenstehende Beispiel zeigt mehrere verschiedene Aspekte der Arbeit mit alternativen Zeichen. Schriftarten mit alternativen Glyphen können sie global verfügbar machen oder individuell in separaten stilistischen Sets oder sogar für einzelne Zeichen bereitstellen. In diesem Beispiel können Sie zwei verschiedene Schriftarten sehen und die Einführung der {{cssxref("@font-feature-values")}}-At-Regel. Diese wird verwendet, um Verknüpfungen oder benannte Optionen zu definieren, die pro Schriftfamilie definiert werden können. Auf diese Weise können Sie eine benannte Option erstellen, die nur auf eine einzelne Schriftart anwendbar ist, oder eine, die geteilt und allgemeiner angewendet werden kann. Klicken Sie auf "Play" in den untenstehenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

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

In diesem Fall zeigt `@stylistic(alternates)` alle alternativen Zeichen für beide Schriftarten. Diese auf nur das Wort 'My' anzuwenden, ändert die Art und Weise, wie das 'M' dargestellt wird, und `@styleset(alt-a)` zu verwenden, ändert nur das kleine 'a'.

Versuchen Sie, die Zeile

```css
font-variant-alternates: styleset(alt-a);
```

in

```css
font-variant-alternates: styleset(alt-g);
```

zu ändern und bemerken Sie, dass das kleine 'a' in seine reguläre Form zurückkehrt und das kleine 'g' sich stattdessen ändert.

### Ligaturen

Zugehöriges CSS-Attribut: {{cssxref("font-variant-ligatures")}}

Ligaturen sind Glyphen, die zwei oder mehr separate Glyphen ersetzen, um sie glatter darzustellen (aus einer Abstandsperspektive oder ästhetisch). Einige der häufigsten sind Buchstaben wie 'fi', 'fl' oder 'ffl' — aber es gibt viele andere Möglichkeiten. Es gibt die häufigsten (bekannt als häufige Ligaturen) und es gibt auch spezialisiertere Kategorien wie 'discretionary ligatures', 'historical ligatures' und 'contextual alternates'. Obwohl diese letzten nicht technisch Ligaturen sind, sind sie allgemein ähnlich, da sie spezifische Zeichenkombinationen ersetzen, wenn sie zusammen erscheinen.

Während sie häufiger in Schreibschrift zu finden sind, werden sie im untenstehenden Beispiel verwendet, um Pfeile zu erstellen. Klicken Sie auf "Play" in den untenstehenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

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

Zugehöriges CSS-Attribut: {{cssxref("font-variant-position")}}

Positionsvarianten werden verwendet, um typografische Hoch- und Tiefstellungen zu aktivieren. Diese sind so gestaltet, dass sie mit dem umgebenden Text arbeiten, ohne dass die Grundlinie oder der Zeilenabstand verändert wird. Dies ist besonders nützlich mit den {{htmlelement("sub")}}- oder {{htmlelement("sup")}}-Elementen. Klicken Sie auf "Play" in den untenstehenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

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

### Capitals

Zugehöriges CSS-Attribut: {{cssxref("font-variant-caps")}}

Einer der häufigeren Anwendungsfälle für OpenType-Features sind ordnungsgemäße Kapitälchen. Dies sind Großbuchstaben, die so dimensioniert sind, dass sie besser zu Kleinbuchstaben passen, und werden allgemein für Akronyme und Abkürzungen verwendet. Klicken Sie auf "Play" in den untenstehenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

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

### Numerals

Zugehöriges CSS-Attribut: {{cssxref("font-variant-numeric")}}

Es gibt verschiedene Stile von Ziffern, die häufig in Schriftarten enthalten sind:

- 'Lining'-Ziffern sind alle gleich hoch und auf der gleichen Grundlinie.
- 'Oldstyle'-Ziffern sind gemischte Höhen und so gestaltet, dass sie den Anschein von Auf- und Abstrichen wie andere Kleinbuchstaben haben. Diese sind so konzipiert, dass sie inline mit einer Kopie verwendet werden, sodass die Ziffern visuell mit den umgebenden Glyphen in ähnlicher Manier wie Kapitälchen verschmelzen.

Es gibt auch die Vorstellung von Abständen. Proportionale Abstände sind die normale Einstellung, während tabellarische Abstände Ziffern gleichmäßig unabhängig von der Zeichenbreite ausrichten, was es geeigneter macht, um Tabellen von Zahlen in finanziellen Tabellen auszurichten.

Es gibt zwei Arten von Brüchen, die durch diese Eigenschaft unterstützt werden:

- Diagonal geschnittene Brüche.
- Vertikal gestapelte Brüche.

Ordnungszahlen werden ebenfalls unterstützt (wie '1st' oder '3rd') sowie eine geschlitzte Null, falls in der Schrift vorhanden.

#### 'Lining' und 'Old-Style'-Ziffern

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

#### Brüche, Ordnungszahlen und geschlitzte Null

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

Zugehöriges CSS-Attribut: {{cssxref("font-variant-east-asian")}}

Damit wird der Zugriff auf verschiedene alternative Formen von Glyphen innerhalb einer Schriftart ermöglicht. Das untenstehende Beispiel zeigt eine Zeichenfolge normaler Glyphen. Deaktivieren Sie das Häkchen unten, und Sie werden die Zeichen sehen, die nur die 'jis78' Glyphen enthalten. Klicken Sie auf "Play" in den untenstehenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

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
> Diese Glyphen wurden aus einem Schriftartanalysebericht kopiert und sind nicht als Prosa gedacht.

### Schriftartvariante-Kurzschrift

Die {{Cssxref("font-variant")}} Eigenschaft ist die Kurzschriftsyntax zur Definition all dieser oben genannten Eigenschaften. Setzt man einen Wert von `normal`, setzt dies alle Eigenschaften auf ihren Ausgangswert zurück. Setzt man einen Wert von `none`, setzt dies `font-variant-ligatures` auf none und alle anderen Eigenschaften auf ihren Ausgangswert. Das bedeutet, dass wenn Kerning standardmäßig aktiviert ist, es weiterhin aktiv bleibt, auch wenn hier ein Wert von `none` angegeben ist. Klicken Sie auf "Play" in den untenstehenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

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

## Schriftart-Feature-Einstellungen

{{cssxref("font-feature-settings")}} ist die "Low-Level-Syntax", die expliziten Zugriff auf jede benannte verfügbare OpenType-Funktion ermöglicht. Dies bietet viel Kontrolle, hat aber einige Nachteile in Bezug auf Vererbung und — wie oben erwähnt — wenn Sie eine Einstellung ändern möchten, müssen Sie die gesamte Zeichenfolge erneut deklarieren (es sei denn, Sie verwenden [CSS-Custom-Properties](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties), um die Werte zu setzen). Aus diesem Grund ist es am besten, die oben gezeigten Standardeigenschaften nach Möglichkeit zu verwenden.

Es gibt eine große Anzahl möglicher Features. Sie können oben Beispiele für eine Reihe von ihnen sehen, und es gibt mehrere Ressourcen, um mehr von ihnen zu finden.

Die allgemeine Syntax sieht wie folgt aus:

```css
.small-caps {
  font-feature-settings: "smcp", "c2sc";
}
```

Laut der Spezifikation können Sie entweder nur den 4-stelligen Feature-Code angeben oder eine 1 nach dem Code (zum Aktivieren des Features) oder eine 0 (Null), um es zu deaktivieren. Dies ist hilfreich, wenn Sie ein Feature wie Ligaturen standardmäßig aktiviert haben, aber es deaktivieren möchten, wie folgt:

```css
.no-ligatures {
  font-feature-settings:
    "liga" 0,
    "dlig" 0;
}
```

### Mehr zu 'font-feature-settings'-Codes

- ['The Complete CSS Demo for OpenType Features'](https://sparanoid.com/lab/opentype-features/) (kann nicht für die Wahrheit des Namens bürgen, aber es ist ziemlich umfangreich)
- [Eine Liste von OpenType-Features auf Wikipedia](https://en.wikipedia.org/wiki/List_of_typographic_features)

## Verwendung von CSS-Feature-Erkennung für die Implementierung

Da nicht alle Eigenschaften gleichmäßig implementiert sind, ist es eine gute Praxis, Ihr CSS mithilfe der Feature-Erkennung so einzurichten, dass die korrekten Eigenschaften verwendet werden, wobei {{cssxref("font-feature-settings")}} als Fallback dient.

Beispielsweise können Kapitälchen auf verschiedene Weise gesetzt werden, aber wenn Sie sicherstellen möchten, dass unabhängig von der zugrunde liegenden Großschreibung alles in Kapitälchen endet, erfordert es 2 Einstellungen mit `font-feature-settings` im Vergleich zu einer einzigen Eigenschaftswertverwendung von {{cssxref("font-variant-caps")}}.

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

### Demos von CSS OpenType-Features in CSS

- [The Complete CSS Demo for OpenType Features](https://sparanoid.com/lab/opentype-features/)

### Web-Font-Analyse-Tools

- [Wakamai Fondue](https://wakamaifondue.com/)
- [Axis Praxis](https://www.axis-praxis.org/)

### W3C-Spezifikationen

- [Schriftarten-Feature-Eigenschaften im CSS Fonts Module Level 3](https://drafts.csswg.org/css-fonts-3/#font-rend-props)
- [font-variant-alternatives im CSS Fonts Module Level 4](https://drafts.csswg.org/css-fonts-4/#propdef-font-variant-alternates)

### Weitere Ressourcen

- [Using OpenType features](https://helpx.adobe.com/fonts/using/use-open-type-features.html) von Tim Brown, Leiter der Typografie, Adobe
- [Adobes Syntax für OpenType-Features in CSS](https://helpx.adobe.com/fonts/using/open-type-syntax.html)
