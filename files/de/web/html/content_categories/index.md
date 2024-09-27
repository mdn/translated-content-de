---
title: Inhaltskategorien
slug: Web/HTML/Content_categories
l10n:
  sourceCommit: 5227bb6898c08fb80c05c88961ebc419f93e6ae7
---

{{HTMLSidebar}}

Die meisten [HTML](/de/docs/Web/HTML)-Elemente gehören zu einer oder mehreren **Inhaltskategorien** — diese Kategorien gruppieren Elemente, die gemeinsame Merkmale aufweisen. Dies ist eine lose Gruppierung (sie schafft tatsächlich keine Beziehung zwischen den Elementen dieser Kategorien), aber sie helfen, das gemeinsame Verhalten der Kategorien und ihre zugehörigen Regeln zu definieren und zu beschreiben, insbesondere wenn Sie auf deren komplexe Details stoßen. Es ist auch möglich, dass Elemente keinem dieser Kategorien angehören.

Es gibt drei Arten von Inhaltskategorien:

- Hauptinhaltskategorien, die gemeinsame Regeln beschreiben, die von vielen Elementen geteilt werden.
- Formularbezogene Inhaltskategorien, die Regeln beschreiben, die für formularbezogene Elemente gelten.
- Spezifische Inhaltskategorien, die seltene Kategorien beschreiben, die nur von wenigen Elementen, manchmal nur in einem bestimmten Kontext, geteilt werden.

> [!NOTE]
> Eine ausführlichere Diskussion dieser Inhaltskategorien und ihrer vergleichenden Funktionen liegt außerhalb des Umfangs dieses Artikels; hierfür können Sie die [relevanten Teile der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/dom.html#kinds-of-content) lesen.

![Ein Venn-Diagramm, das zeigt, wie die verschiedenen Inhaltskategorien miteinander in Beziehung stehen. Die folgenden Abschnitte erklären diese Beziehungen im Text.](content_categories_venn.png)

## Hauptinhaltskategorien

### Metadaten-Inhalte

Elemente, die zur _Metadaten-Inhalt_-Kategorie gehören, verändern die Präsentation oder das Verhalten des restlichen Dokuments, richten Verbindungen zu anderen Dokumenten ein oder übermitteln andere _außerbandmäßige_ Informationen. Alles im {{htmlelement("head")}}, einschließlich des `<title>`, `<link>`, `<script>`, `<style>` und des seltener verwendeten `<base>`, ist Metadaten-Inhalt. Es gibt ein `<meta>`-Element für Metadaten, die nicht durch diese anderen Elemente dargestellt werden können.

Die Metadaten-Elemente sind:

- {{HTMLElement("base")}}
- {{HTMLElement("link")}}
- {{HTMLElement("meta")}}
- {{HTMLElement("noscript")}}
- {{HTMLElement("script")}}
- {{HTMLElement("style")}}
- {{HTMLElement("title")}}

Einige dieser Elemente gehören zu mehr als einer Inhaltskategorie. Zum Beispiel ist `<script>` Mitglied der Metadaten-, Fluss- und Phrasing-Inhaltskategorien und ist ein skriptunterstützendes Element; `<script>` kann dort verwendet werden, wo Metadaten-Inhalte, Phrasing-Inhalte oder skriptunterstützende Elemente erwartet werden.

### Fluss-Inhalt

Fluss-Inhalt ist eine breite Kategorie, die die meisten Elemente umfasst, die im {{HTMLElement("body")}}-Element enthalten sein können, einschließlich Überschriftselemente, Gliederungselemente, Phrasing-Elemente, Einbettungselemente, interaktive Elemente und formularbezogene Elemente. Es umfasst auch Textknoten (aber nicht solche, die nur aus Leerzeichen bestehen).

Die Flusselemente sind:

- {{HTMLElement("a")}}
- {{HTMLElement("abbr")}}
- {{HTMLElement("address")}}
- {{HTMLElement("article")}}
- {{HTMLElement("aside")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("b")}}
- {{HTMLElement("bdo")}}
- {{HTMLElement("bdi")}}
- {{HTMLElement("blockquote")}}
- {{HTMLElement("br")}}
- {{HTMLElement("button")}}
- {{HTMLElement("canvas")}}
- {{HTMLElement("cite")}}
- {{HTMLElement("code")}}
- {{HTMLElement("data")}}
- {{HTMLElement("datalist")}}
- {{HTMLElement("del")}}
- {{HTMLElement("details")}}
- {{HTMLElement("dfn")}}
- {{HTMLElement("dialog")}}
- {{HTMLElement("div")}}
- {{HTMLElement("dl")}}
- {{HTMLElement("em")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("figure")}}
- {{HTMLElement("footer")}}
- {{HTMLElement("form")}}
- {{HTMLElement("Heading_Elements", "<code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>")}}
- {{HTMLElement("header")}}
- {{HTMLElement("hgroup")}}
- {{HTMLElement("hr")}}
- {{HTMLElement("i")}}
- {{HTMLElement("iframe")}}
- {{HTMLElement("img")}}
- {{HTMLElement("input")}}
- {{HTMLElement("ins")}}
- {{HTMLElement("kbd")}}
- {{HTMLElement("label")}}
- {{HTMLElement("main")}}
- {{HTMLElement("map")}}
- {{HTMLElement("mark")}}
- {{MathMLElement("math")}}
- {{HTMLElement("menu")}}
- {{HTMLElement("meter")}}
- {{HTMLElement("nav")}}
- {{HTMLElement("noscript")}}
- {{HTMLElement("object")}}
- {{HTMLElement("ol")}}
- {{HTMLElement("output")}}
- {{HTMLElement("p")}}
- {{HTMLElement("picture")}}
- {{HTMLElement("pre")}}
- {{HTMLElement("progress")}}
- {{HTMLElement("q")}}
- {{HTMLElement("ruby")}}
- {{HTMLElement("s")}}
- {{HTMLElement("samp")}}
- {{HTMLElement("search")}}
- {{HTMLElement("script")}}
- {{HTMLElement("section")}}
- {{HTMLElement("select")}}
- {{HTMLElement("slot")}}
- {{HTMLElement("small")}}
- {{HTMLElement("span")}}
- {{HTMLElement("strong")}}
- {{HTMLElement("sub")}}
- {{HTMLElement("sup")}}
- {{SVGElement("svg")}}
- {{HTMLElement("table")}}
- {{HTMLElement("template")}}
- {{HTMLElement("textarea")}}
- {{HTMLElement("time")}}
- {{HTMLElement("u")}}
- {{HTMLElement("ul")}}
- {{HTMLElement("var")}}
- {{HTMLElement("video")}}
- {{HTMLElement("wbr")}}
- Klartext

Einige andere Elemente gehören zu dieser Kategorie, jedoch nur, wenn eine spezifische Bedingung erfüllt ist:

- {{HTMLElement("area")}}, wenn es ein Nachfolger eines {{HTMLElement("map")}}-Elements ist
- {{HTMLElement("link")}}, wenn das [itemprop](/de/docs/Web/HTML/Global_attributes/itemprop)-Attribut vorhanden ist
- {{HTMLElement("meta")}}, wenn das [itemprop](/de/docs/Web/HTML/Global_attributes/itemprop)-Attribut vorhanden ist

### Gliederungs-Inhalt

Gliederungs-Inhalt, eine Untergruppe des Fluss-Inhalts, erstellt einen [Abschnitt in der aktuellen Gliederung](/de/docs/Web/HTML/Element/Heading_Elements), der den Gültigkeitsbereich der {{HTMLElement("header")}}- und {{HTMLElement("footer")}}-Elemente definiert.

Die Gliederungselemente sind:

- {{HTMLElement("article")}}
- {{HTMLElement("aside")}}
- {{HTMLElement("nav")}}
- {{HTMLElement("section")}}

### Überschrift-Inhalt

Überschrift-Inhalt, eine Untergruppe des Fluss-Inhalts, definiert den Titel eines Abschnitts. Diese Definition gilt sowohl für Abschnitte, die durch ein explizites [Gliederungs-Inhalt](#gliederungs-inhalt)-Element markiert sind, als auch für solche, die implizit durch den Überschrift-Inhalt selbst definiert sind.

Die Überschriftselemente sind:

- {{HTMLElement("Heading_Elements", "<code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>")}}
- {{HTMLElement("hgroup")}}

> [!NOTE]
> Obwohl wahrscheinlich Überschrift-Inhalt enthalten sein wird, ist das {{HTMLElement("header")}} selbst kein Überschrift-Inhalt.

### Phrasing-Inhalt

Phrasing-Inhalt, eine Untergruppe des Fluss-Inhalts, bezieht sich auf den Text und die Markierungen innerhalb eines Dokuments. Sequenzen von Phrasing-Inhalt bilden Absätze.

Die Phrasing-Elemente sind:

- {{HTMLElement("abbr")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("b")}}
- {{HTMLElement("bdi")}}
- {{HTMLElement("bdo")}}
- {{HTMLElement("br")}}
- {{HTMLElement("button")}}
- {{HTMLElement("canvas")}}
- {{HTMLElement("cite")}}
- {{HTMLElement("code")}}
- {{HTMLElement("data")}}
- {{HTMLElement("datalist")}}
- {{HTMLElement("dfn")}}
- {{HTMLElement("em")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("i")}}
- {{HTMLElement("iframe")}}
- {{HTMLElement("img")}}
- {{HTMLElement("input")}}
- {{HTMLElement("kbd")}}
- {{HTMLElement("label")}}
- {{HTMLElement("mark")}}
- {{MathMLElement("math")}}
- {{HTMLElement("meter")}}
- {{HTMLElement("noscript")}}
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("picture")}}
- {{HTMLElement("progress")}}
- {{HTMLElement("q")}}
- {{HTMLElement("ruby")}}
- {{HTMLElement("s")}}
- {{HTMLElement("samp")}}
- {{HTMLElement("script")}}
- {{HTMLElement("select")}}
- {{HTMLElement("slot")}}
- {{HTMLElement("small")}}
- {{HTMLElement("span")}}
- {{HTMLElement("strong")}}
- {{HTMLElement("sub")}}
- {{HTMLElement("sup")}}
- {{SVGElement("svg")}}
- {{HTMLElement("template")}}
- {{HTMLElement("textarea")}}
- {{HTMLElement("time")}}
- {{HTMLElement("u")}}
- {{HTMLElement("var")}}
- {{HTMLElement("video")}}
- {{HTMLElement("wbr")}}
- Klartext (mehr als nur Leerzeichen-Zeichen enthalten)

Einige andere Elemente gehören zu dieser Kategorie, jedoch nur, wenn eine spezifische Bedingung erfüllt ist:

- {{HTMLElement("a")}}, wenn es nur Phrasing-Inhalt enthält
- {{HTMLElement("area")}}, wenn es ein Nachfolger eines {{HTMLElement("map")}}-Elements ist
- {{HTMLElement("del")}}, wenn es nur Phrasing-Inhalt enthält
- {{HTMLElement("ins")}}, wenn es nur Phrasing-Inhalt enthält
- {{HTMLElement("link")}}, wenn das [itemprop](/de/docs/Web/HTML/Global_attributes/itemprop)-Attribut vorhanden ist
- {{HTMLElement("map")}}, wenn es nur Phrasing-Inhalt enthält
- {{HTMLElement("meta")}}, wenn das [itemprop](/de/docs/Web/HTML/Global_attributes/itemprop)-Attribut vorhanden ist

### Eingebetteter Inhalt

Eingebetteter Inhalt, eine Untergruppe des Fluss-Inhalts, importiert eine andere Ressource oder fügt Inhalt aus einer anderen Markup-Sprache oder einem anderen Namensraum in das Dokument ein.

Die eingebetteten Inhaltselemente sind:

- {{HTMLElement("audio")}}
- {{HTMLElement("canvas")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("iframe")}}
- {{HTMLElement("img")}}
- {{MathMLElement("math")}}
- {{HTMLElement("object")}}
- {{HTMLElement("picture")}}
- {{SVGElement("svg")}}
- {{HTMLElement("video")}}

### Interaktiver Inhalt

Interaktiver Inhalt, eine Untergruppe des Fluss-Inhalts, umfasst Elemente, die speziell für die Benutzerinteraktion entwickelt wurden.

Die interaktiven Inhaltselemente sind:

- {{HTMLElement("button")}}
- {{HTMLElement("details")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("iframe")}}
- {{HTMLElement("label")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}

Einige Elemente gehören zu dieser Kategorie nur unter spezifischen Bedingungen:

- {{HTMLElement("a")}}, wenn das [`href`](/de/docs/Web/HTML/Element/a#href)-Attribut vorhanden ist
- {{HTMLElement("audio")}}, wenn das [`controls`](/de/docs/Web/HTML/Element/audio#controls)-Attribut vorhanden ist
- {{HTMLElement("img")}}, wenn das [`usemap`](/de/docs/Web/HTML/Element/img#usemap)-Attribut vorhanden ist
- {{HTMLElement("input")}}, wenn das [type](/de/docs/Web/HTML/Element/input#type)-Attribut nicht im versteckten Zustand ist
- {{HTMLElement("object")}}, wenn das [`usemap`](/de/docs/Web/HTML/Element/object#usemap)-Attribut vorhanden ist
- {{HTMLElement("video")}}, wenn das [`controls`](/de/docs/Web/HTML/Element/video#controls)-Attribut vorhanden ist

### Relevanter Inhalt

Inhalt ist relevant, wenn er weder leer noch versteckt ist; er ist Inhalt, der dargestellt wird und substanziell ist. Elemente, deren Modell Fluss-Inhalt ist, sollten mindestens einen Knoten haben, der relevant ist.

Die relevanten Elemente sind:

- {{HTMLElement("a")}}
- {{HTMLElement("abbr")}}
- {{HTMLElement("address")}}
- {{HTMLElement("article")}}
- {{HTMLElement("aside")}}
- {{HTMLElement("b")}}
- {{HTMLElement("bdi")}}
- {{HTMLElement("bdo")}}
- {{HTMLElement("blockquote")}}
- {{HTMLElement("button")}}
- {{HTMLElement("canvas")}}
- {{HTMLElement("cite")}}
- {{HTMLElement("code")}}
- {{HTMLElement("data")}}
- {{HTMLElement("del")}}
- {{HTMLElement("details")}}
- {{HTMLElement("dfn")}}
- {{HTMLElement("div")}}
- {{HTMLElement("em")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("footer")}}
- {{HTMLElement("figure")}}
- {{HTMLElement("form")}}
- {{HtmlElement("iframe")}}
- {{HtmlElement("img")}}
- {{HtmlElement("ins")}}
- {{HtmlElement("kbd")}}
- {{HtmlElement("label")}}
- {{HtmlElement("main")}}
- {{HtmlElement("map")}}
- {{HtmlElement("mark")}}
- {{MathMLElement("math")}} aus [MathML](/de/docs/Web/MathML)
- {{HtmlElement("meter")}}
- {{HtmlElement("nav")}}
- {{HtmlElement("object")}}
- {{HtmlElement("p")}}
- {{HtmlElement("picture")}}
- {{HtmlElement("pre")}}
- {{HtmlElement("progress")}}
- {{HtmlElement("q")}}
- {{HtmlElement("ruby")}}
- {{HtmlElement("s")}}
- {{HtmlElement("samp")}}
- {{HtmlElement("search")}}
- {{HtmlElement("section")}}
- {{HtmlElement("select")}}
- {{HtmlElement("small")}}
- {{HtmlElement("span")}}
- {{HtmlElement("strong")}}
- {{HtmlElement("sub")}}
- {{HtmlElement("sup")}}
- {{SVGElement("svg")}} aus [SVG](/de/docs/Web/SVG)
- {{HtmlElement("table")}}
- {{HtmlElement("textarea")}}
- {{HtmlElement("time")}}
- {{HtmlElement("u")}}
- {{HtmlElement("var")}}
- {{HtmlElement("video")}}
- [Autonome benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements)
- Text, der kein zwischen-element [Leerraum](/de/docs/Glossary/Whitespace) ist

Einige Elemente gehören zu dieser Kategorie nur unter spezifischen Bedingungen:

- {{HTMLElement("audio")}}, wenn das [`controls`](/de/docs/Web/HTML/Element/audio#controls)-Attribut vorhanden ist
- {{HTMLElement("dl")}}, wenn die Kinder des Elements mindestens eine Name-Wert-Gruppe enthalten
- {{HTMLElement("input")}}, wenn das [type](/de/docs/Web/HTML/Element/input#type)-Attribut nicht im versteckten Zustand ist
- {{HTMLElement("ol")}}, wenn es Kinder enthält, die mindestens ein {{HTMLElement("li")}}-Element enthalten
- {{HTMLElement("ul")}}, wenn es Kinder enthält, die mindestens ein {{HTMLElement("li")}}-Element enthalten

### Formularassoziierte Inhalte

Formularassoziierte Inhalte sind eine Untergruppe des Fluss-Inhalts, die Elemente umfassen, die einen Formularbesitzer haben, dargestellt durch ein **form**-Attribut, und überall dort verwendet werden können, wo Fluss-Inhalt erwartet wird. Ein Formularbesitzer ist entweder das enthaltene {{HTMLElement("form")}}-Element oder das Element, dessen ID im **form**-Attribut angegeben ist.

Die formularassoziierten Elemente sind:

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}}
- {{HTMLElement("label")}}
- {{HTMLElement("meter")}}
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("progress")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}

Diese Kategorie enthält mehrere Unterkategorien:

- gelistet
  - : Elemente, die in den [`form.elements`](/de/docs/Web/API/HTMLFormElement/elements)- und `fieldset.elements`-Sammlungen aufgeführt sind. Beinhaltet {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}}, und {{HTMLElement("textarea")}}.
- beschriftbar
  - : Elemente, die mit {{HTMLElement("label")}}-Elementen verknüpft werden können. Beinhaltet {{HTMLElement("button")}}, {{HTMLElement("input")}}, {{HTMLElement("meter")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}}, und {{HTMLElement("textarea")}}.
- übermittelbar
  - : Elemente, die zur Erstellung des Formular-Datensatzes verwendet werden können, wenn das Formular übermittelt wird. Beinhaltet {{HTMLElement("button")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("select")}}, und {{HTMLElement("textarea")}}.
- zurücksetzbar
  - : Elemente, die betroffen sein können, wenn ein Formular zurückgesetzt wird. Beinhaltet {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}}, und {{HTMLElement("textarea")}}.

## Sekundäre Inhaltskategorien

Es gibt auch einige sekundäre Klassifikationen von Elementen, die nützlich zu wissen sind.

### Skriptunterstützende Elemente

**Skriptunterstützende Elemente** sind Elemente, die nicht direkt zum gerenderten Inhalt eines Dokuments beitragen. Stattdessen dienen sie der Unterstützung von Skripten, entweder durch das Beibehalten oder das direkte Festlegen von Skriptcode oder durch die Festlegung von Daten, die von Skripten verwendet werden.

Die skriptunterstützenden Elemente sind:

- {{HTMLElement("script")}}
- {{HTMLElement("template")}}

## Transparentes Inhaltsmodell

Wenn ein Element ein transparentes Inhaltsmodell hat, dann müssen seine Inhalte so strukturiert sein, dass sie gültiges HTML darstellen würden, selbst wenn das transparente Element entfernt und durch die Kindelemente ersetzt würde.

Zum Beispiel sind die {{HTMLElement("del")}}- und {{HTMLElement("ins")}}-Elemente transparent:

```html
<p><del>Shopping</del> <ins>Returns</ins> list</p>
<ul>
  <del>
    <li>Oranges</li>
    <li>Toilet paper</li>
  </del>
  <li>Toothpaste</li>
</ul>
```

Wenn diese Elemente entfernt würden, wäre dieses Fragment immer noch gültiges HTML (wenn auch kein korrektes Englisch).

```html
<p>Shopping Returns list</p>
<ul>
  <li>Oranges</li>
  <li>Toilet paper</li>
  <li>Toothpaste</li>
</ul>
```
