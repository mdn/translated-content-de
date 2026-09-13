---
title: OpenType-Schriftfunktionen
short-title: OpenType features
slug: Web/CSS/Guides/Fonts/OpenType_fonts
l10n:
  sourceCommit: 6f5921b2634db4bd565e5e0cd38eafdadb4bb383
---

Schriftfunktionen oder -varianten beziehen sich auf unterschiedliche Glyphen oder Zeichenstile, die in einer OpenType-Schrift enthalten sind. Dazu gehören beispielsweise Ligaturen (spezielle Glyphen, die Zeichen wie „fi“ oder „ffl“ kombinieren), Kerning (Anpassungen des Abstands zwischen bestimmten Buchstabenpaaren), Brüche, Ziffernstile und weitere. All diese werden als OpenType-Funktionen bezeichnet und können im Web über spezifische Eigenschaften und Eigenschaften zur Steuerung auf niedriger Ebene verwendet werden – {{cssxref("font-feature-settings")}}. Dieser Artikel vermittelt Ihnen alles, was Sie über die Verwendung von OpenType-Schriftfunktionen in CSS wissen müssen.

Bei einigen Schriftarten sind eine oder mehrere dieser Funktionen standardmäßig aktiviert (Kerning und Standardligaturen sind häufige Beispiele), während bei anderen die Entscheidung bei Designern oder Entwicklern liegt, sie in bestimmten Szenarien zu aktivieren.

Neben allgemeinen Funktionsgruppen wie Ligaturen oder Versalziffern (Ziffern, die auf einer einheitlichen Linie ausgerichtet sind, im Gegensatz zu „Mediävalziffern“, die eher wie Kleinbuchstaben aussehen) gibt es auch sehr spezifische Funktionen wie stilistische Sätze (die mehrere spezifische Glyphenvarianten enthalten können, die zusammen verwendet werden sollen), Alternativen (die eine oder mehrere Varianten des Buchstabens „a“ sein können) oder sogar sprachspezifische Änderungen für ostasiatische Sprachen. Im letztgenannten Fall sind diese Änderungen tatsächlich notwendig, um die Sprache korrekt darzustellen, und gehen daher über die eher stilistische Präferenz der meisten anderen OpenType-Funktionen hinaus.

> [!WARNING]
> Es gibt viele CSS-Eigenschaften, die für die Nutzung von Schriftfunktionen definiert sind, aber leider sind viele nicht vollständig implementiert. Sie werden hier alle definiert und gezeigt, aber viele funktionieren nur mit der Eigenschaft {{cssxref("font-feature-settings")}} auf niedriger Ebene. Es ist möglich, CSS zu schreiben, das auf beide Arten funktioniert, dies kann jedoch umständlich werden. Das Problem bei der Verwendung von `font-feature-settings` für alles besteht darin, dass Sie jedes Mal, wenn Sie eine der einzelnen Funktionen ändern möchten, die gesamte Zeichenfolge neu definieren müssen (ähnlich wie bei der Bearbeitung variabler Schriftarten mit {{cssxref("font-variation-settings")}}).

## Verfügbarkeit von Funktionen in Schriftarten ermitteln

Dies ist manchmal am schwierigsten herauszufinden, wenn Ihnen keine mit den Schriftarten gelieferte Dokumentation vorliegt (viele Schriftdesigner und Schriftgießereien stellen genau aus diesem Grund Beispielseiten und CSS bereit). Es gibt jedoch einige Websites, die dies erleichtern. Sie können [wakamaifondue.com](https://wakamaifondue.com/) besuchen, Ihre Schriftdatei wie angegeben auf den Kreis ziehen und erhalten nach wenigen Augenblicken einen vollständigen Bericht über alle Fähigkeiten und Funktionen Ihrer Schriftart. [Axis-praxis.org](https://www.axis-praxis.org/) bietet ebenfalls eine ähnliche Möglichkeit, bei der Sie auf Funktionen klicken können, um sie in einem bestimmten Textblock ein- oder auszuschalten.

## Warum sollten Sie sie verwenden?

Da diese Funktionen einige Arbeit erfordern, um sie zu entdecken und zu verwenden, erscheint die Frage berechtigt, warum man sich überhaupt damit beschäftigen sollte. Die Antwort liegt in den spezifischen Funktionen, die eine Website nützlicher, lesbarer und ausgefeilter machen:

- **Ligaturen** wie „ff“ oder „fi“ sorgen für gleichmäßigere und flüssigere Buchstabenabstände und Lesbarkeit.
- **Brüche** können Websites zu Heimwerkerarbeiten und Rezepten deutlich leichter lesbar und verständlich machen.
- **Ziffern**, die innerhalb von Textabsätzen als „Mediävalziffern“ gesetzt werden, fügen sich angenehmer zwischen Kleinbuchstaben ein. Werden sie als „tabellarische Ziffern“ gesetzt, sind sie besser ausgerichtet, wenn beispielsweise eine Kostenliste in einer Tabelle dargestellt wird. „Versalziffern“ hingegen stehen für sich allein oder vor großgeschriebenen Wörtern gleichmäßiger.

Auch wenn keine dieser Funktionen eine Website durch ihr Fehlen einzeln unbrauchbar macht, kann jede von ihnen eine Website einfacher nutzbar und durch ihre Liebe zum Detail einprägsamer machen.

> OpenType-Funktionen sind wie geheime Fächer in Schriftarten. Öffnen Sie sie, und Sie finden Möglichkeiten, Schriftarten auf subtile und dramatische Weise anders aussehen und funktionieren zu lassen. Nicht alle OpenType-Funktionen eignen sich jederzeit, aber einige Funktionen sind entscheidend für hervorragende Typografie. _-- Tim Brown, Head of Typography bei Adobe_.

### Manchmal geht es um Inhalt, nicht nur um Stil

Es gibt Fälle – etwa bei {{cssxref("font-variant-east-asian")}} –, in denen OpenType-Funktionen direkt mit der Verwendung unterschiedlicher Formen bestimmter Glyphen verbunden sind, was Bedeutung und Lesbarkeit beeinflussen kann. In solchen Fällen handelt es sich nicht nur um eine angenehme Ergänzung, sondern um einen integralen Bestandteil des Inhalts selbst.

## Die Schriftfunktionen

Es gibt eine Reihe verschiedener Funktionen, die berücksichtigt werden sollten. Sie werden hier entsprechend den wichtigsten Attributen und Optionen gruppiert und erklärt, die in den W3C-Spezifikationen behandelt werden.

> [!NOTE]
> Die folgenden Beispiele zeigen die Eigenschaften und einige Beispielkombinationen zusammen mit den entsprechenden Syntaxvarianten auf niedriger Ebene. Aufgrund unterschiedlicher Browserimplementierungen stimmen sie möglicherweise nicht exakt überein, aber in vielen Fällen entspricht das erste Beispiel dem zweiten. Die dargestellten Schriftarten sind Playfair Display, Source Serif Pro, IBM Plex Serif, Dancing Script und Kokoro (alle verfügbar und kostenlos nutzbar; die meisten sind bei Google Fonts und anderen Diensten verfügbar).

### Kerning

Zugehörige CSS-Eigenschaft: {{cssxref("font-kerning")}}

Dies bezieht sich auf den Abstand zwischen bestimmten Glyphenpaaren. Im Allgemeinen ist dies standardmäßig aktiviert (wie von der OpenType-Spezifikation empfohlen). Beachten Sie, dass, wenn {{cssxref("letter-spacing")}} ebenfalls für Ihren Text festgelegt ist, diese Eigenschaft nach dem Kerning angewendet wird.
Klicken Sie in den folgenden Codeblöcken auf „Play“, um das Beispiel im MDN Playground zu bearbeiten:

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

Schriftarten können verschiedene Alternativen für unterschiedliche Glyphen bereitstellen, etwa unterschiedliche Stile für das kleine „a“ oder mehr oder weniger aufwendige Schwünge in einer Schreibschrift. Diese Eigenschaft kann abhängig von den angegebenen Werten einen ganzen Satz von Alternativen oder nur eine bestimmte aktivieren. Das folgende Beispiel zeigt mehrere Aspekte der Arbeit mit alternativen Zeichen. Schriftarten mit alternativen Glyphen können diese allgemein oder einzeln in separaten stilistischen Sätzen oder sogar als einzelne Zeichen bereitstellen. In diesem Beispiel sehen Sie zwei unterschiedliche Schriftarten sowie die Einführung der At-Regel {{cssxref("@font-feature-values")}}. Diese wird verwendet, um Kurzformen oder benannte Optionen zu definieren, die pro Schriftfamilie festgelegt werden können. Auf diese Weise können Sie eine benannte Option erstellen, die nur auf eine einzelne Schriftart angewendet wird, oder eine, die gemeinsam genutzt und allgemeiner angewendet werden kann. Klicken Sie in den folgenden Codeblöcken auf „Play“, um das Beispiel im MDN Playground zu bearbeiten:

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

In diesem Fall zeigt `@stylistic(alternates)` alle alternativen Zeichen für beide Schriftarten. Wenn Sie dies nur auf das Wort „My“ anwenden, ändert sich die Darstellung des „M“. Die Anwendung von `@styleset(alt-a)` ändert nur das kleine „a“.

Versuchen Sie, die Zeile

```css
font-variant-alternates: styleset(alt-a);
```

in

```css
font-variant-alternates: styleset(alt-g);
```

zu ändern, und beachten Sie, dass das kleine „a“ wieder zu seiner regulären Form zurückkehrt und sich stattdessen die kleinen „g“ ändern.

### Ligaturen

Zugehörige CSS-Eigenschaft: {{cssxref("font-variant-ligatures")}}

Ligaturen sind Glyphen, die zwei oder mehr separate Glyphen ersetzen, um sie flüssiger darzustellen (hinsichtlich Abständen oder Ästhetik). Zu den häufigsten gehören Buchstabenkombinationen wie „fi“, „fl“ oder „ffl“ – es gibt jedoch viele weitere Möglichkeiten. Es gibt die häufigsten davon (als Standardligaturen bezeichnet) sowie spezialisiertere Kategorien wie „fakultative Ligaturen“, „historische Ligaturen“ und „kontextabhängige Alternativen“. Obwohl Letztere technisch gesehen keine Ligaturen sind, ähneln sie diesen im Allgemeinen insofern, als sie bestimmte Buchstabenkombinationen ersetzen, wenn diese zusammen auftreten.

Obwohl sie in Schreibschriften häufiger vorkommen, werden sie im folgenden Beispiel zur Erstellung von Pfeilen verwendet. Klicken Sie in den folgenden Codeblöcken auf „Play“, um das Beispiel im MDN Playground zu bearbeiten:

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

Positionsvarianten werden verwendet, um typografische Glyphen für Hoch- und Tiefstellung zu aktivieren. Diese sind so gestaltet, dass sie mit dem umgebenden Text funktionieren, ohne die Grundlinie oder den Zeilenabstand zu verändern. Dies ist insbesondere mit den Elementen {{htmlelement("sub")}} oder {{htmlelement("sup")}} nützlich. Klicken Sie in den folgenden Codeblöcken auf „Play“, um das Beispiel im MDN Playground zu bearbeiten:

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

Einer der häufigeren Anwendungsfälle für OpenType-Funktionen sind korrekt gestaltete Kapitälchen. Dabei handelt es sich um Großbuchstaben, deren Größe besser zu Kleinbuchstaben passt und die im Allgemeinen für Akronyme und Abkürzungen verwendet werden. Klicken Sie in den folgenden Codeblöcken auf „Play“, um das Beispiel im MDN Playground zu bearbeiten:

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

Es gibt mehrere unterschiedliche Ziffernstile, die häufig in Schriftarten enthalten sind:

- „Versalziffern“ haben alle die gleiche Höhe und stehen auf derselben Grundlinie.
- „Mediävalziffern“ haben unterschiedliche Höhen und sind so gestaltet, dass sie wie Ober- und Unterlängen anderer Kleinbuchstaben wirken. Sie sind für die Verwendung innerhalb von Fließtext vorgesehen, damit sich die Ziffern visuell ähnlich wie Kapitälchen in die umgebenden Glyphen einfügen.

Außerdem gibt es unterschiedliche Laufweiten. Proportionale Laufweite ist die normale Einstellung, während tabellarische Laufweite Ziffern unabhängig von der Zeichenbreite gleichmäßig ausrichtet. Dadurch eignet sie sich besser zum Ausrichten von Zahlenreihen in Finanztabellen.

Über diese Eigenschaft werden zwei Arten von Brüchen unterstützt:

- Diagonale Brüche mit Schrägstrich.
- Vertikal gestapelte Brüche.

Auch Ordinalzahlen werden unterstützt (etwa „1st“ oder „3rd“) sowie eine durchgestrichene Null, wenn diese in der Schriftart vorhanden ist.

#### Versalziffern und Mediävalziffern

Klicken Sie in den folgenden Codeblöcken auf „Play“, um das Beispiel im MDN Playground zu bearbeiten:

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

#### Brüche, Ordinalzahlen und durchgestrichene Null

Klicken Sie in den folgenden Codeblöcken auf „Play“, um das Beispiel im MDN Playground zu bearbeiten:

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

Dies ermöglicht den Zugriff auf verschiedene alternative Glyphenformen innerhalb einer Schriftart. Das folgende Beispiel zeigt eine Zeichenfolge normaler Glyphen. Deaktivieren Sie das Kontrollkästchen unten, um Zeichen zu sehen, die nur die `jis78`-Glyphen verwenden. Klicken Sie in den folgenden Codeblöcken auf „Play“, um das Beispiel im MDN Playground zu bearbeiten:

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
> Diese Glyphen wurden aus einem Schriftmuster kopiert und sind nicht als Fließtext gedacht.

### Kurzform für Schriftvarianten

Die Eigenschaft {{Cssxref("font-variant")}} ist die Kurzformsyntax zum Definieren aller oben genannten Eigenschaften. Das Festlegen des Werts `normal` setzt alle Eigenschaften auf ihren Anfangswert zurück. Das Festlegen des Werts `none` setzt `font-variant-ligatures` auf none und alle anderen Eigenschaften auf ihren Anfangswert. Das bedeutet: Wenn Kerning standardmäßig aktiviert ist, bleibt es auch bei einem hier angegebenen Wert von `none` aktiviert. Klicken Sie in den folgenden Codeblöcken auf „Play“, um das Beispiel im MDN Playground zu bearbeiten:

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

## Einstellungen für Schriftfunktionen

{{cssxref("font-feature-settings")}} ist die „Syntax auf niedriger Ebene“, die expliziten Zugriff auf jede benannte verfügbare OpenType-Funktion ermöglicht. Dies bietet viel Kontrolle, hat jedoch einige Nachteile hinsichtlich der Auswirkungen auf die Vererbung und – wie oben erwähnt – müssen Sie, wenn Sie eine Einstellung ändern möchten, die gesamte Zeichenfolge erneut deklarieren (es sei denn, Sie verwenden [benutzerdefinierte CSS-Eigenschaften](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties), um die Werte festzulegen). Daher sollten Sie nach Möglichkeit die oben gezeigten Standardeigenschaften verwenden.

Es gibt eine sehr große Anzahl möglicher Funktionen. Beispiele für einige davon sehen Sie oben, und es stehen mehrere Ressourcen zur Verfügung, um weitere zu finden.

Die allgemeine Syntax sieht folgendermaßen aus:

```css
.small-caps {
  font-feature-settings: "smcp", "c2sc";
}
```

Laut Spezifikation können Sie entweder nur den vierstelligen Funktionscode angeben oder nach dem Code eine 1 (zum Aktivieren dieser Funktion) beziehungsweise eine 0 (Null) zum Deaktivieren angeben. Dies ist hilfreich, wenn Sie eine Funktion wie Ligaturen standardmäßig aktiviert haben, sie aber wie folgt deaktivieren möchten:

```css
.no-ligatures {
  font-feature-settings:
    "liga" 0,
    "dlig" 0;
}
```

### Mehr zu `font-feature-settings`-Codes

- [„The Complete CSS Demo for OpenType Features“](https://sparanoid.com/lab/opentype-features/) (ob der Name zutrifft, lässt sich nicht bestätigen, aber sie ist ziemlich umfangreich)
- [Eine Liste von OpenType-Funktionen bei Wikipedia](https://en.wikipedia.org/wiki/List_of_typographic_features)

## CSS-Feature-Erkennung für die Implementierung verwenden

Da nicht alle Eigenschaften gleichermaßen implementiert sind, empfiehlt es sich, Ihr CSS mithilfe von Feature-Erkennung einzurichten, um die richtigen Eigenschaften zu verwenden, mit {{cssxref("font-feature-settings")}} als Fallback.

Kapitälchen können beispielsweise auf verschiedene Arten festgelegt werden. Wenn Sie jedoch sicherstellen möchten, dass unabhängig von der zugrunde liegenden Groß- und Kleinschreibung alles in Kapitälchen dargestellt wird, sind dafür mit `font-feature-settings` zwei Einstellungen erforderlich, gegenüber einem einzelnen Eigenschaftswert mit {{cssxref("font-variant-caps")}}.

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

### Demos von CSS-OpenType-Funktionen

- [The Complete CSS Demo for OpenType Features](https://sparanoid.com/lab/opentype-features/)

### Analysewerkzeuge für Web-Schriftarten

- [Wakamai Fondue](https://wakamaifondue.com/)
- [Axis Praxis](https://www.axis-praxis.org/)

### W3C-Spezifikationen

- [Schriftfunktionseigenschaften in CSS Fonts Module Level 3](https://drafts.csswg.org/css-fonts-3/#font-rend-props)
- [font-variant-alternatives in CSS Fonts Module Level 4](https://drafts.csswg.org/css-fonts-4/#propdef-font-variant-alternates)

### Weitere Ressourcen

- [OpenType-Funktionen verwenden](https://helpx.adobe.com/fonts/web/language-support-and-opentype-features/use-open-type-features.html) von Tim Brown, Head of Typography, Adobe
- [Adobes Syntax für OpenType-Funktionen in CSS](https://helpx.adobe.com/fonts/web/language-support-and-opentype-features/open-type-syntax.html)
