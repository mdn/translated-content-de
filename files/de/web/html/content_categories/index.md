---
title: Inhaltskategorien
slug: Web/HTML/Content_categories
l10n:
  sourceCommit: 5227bb6898c08fb80c05c88961ebc419f93e6ae7
---

{{HTMLSidebar}}

Die meisten [HTML](/de/docs/Web/HTML)-Elemente gehören zu einer oder mehreren **Inhaltskategorien** — diese Kategorien gruppieren Elemente mit gemeinsamen Merkmalen. Dies ist eine lose Gruppierung (sie schafft tatsächlich keine Beziehung zwischen den Elementen dieser Kategorien), aber sie hilft, das gemeinsame Verhalten der Kategorien und die damit verbundenen Regeln zu definieren und zu beschreiben, besonders wenn man auf deren komplizierte Details stößt. Es ist auch möglich, dass Elemente _keiner_ dieser Kategorien angehören.

Es gibt drei Arten von Inhaltskategorien:

- Hauptinhaltskategorien, die gemeinsame Regeln beschreiben, die von vielen Elementen geteilt werden.
- Formularbezogene Inhaltskategorien, die Regeln beschreiben, die für formularbezogene Elemente gemeinsam sind.
- Spezifische Inhaltskategorien, die seltene Kategorien beschreiben, die nur von wenigen Elementen, manchmal nur in einem bestimmten Kontext, geteilt werden.

> [!NOTE]
> Eine detailliertere Diskussion dieser Inhaltskategorien und ihrer vergleichenden Funktionen liegt außerhalb des Umfangs dieses Artikels; hierfür möchten Sie vielleicht die [relevanten Teile der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/dom.html#kinds-of-content) lesen.

![Ein Venn-Diagramm zeigt, wie sich die verschiedenen Inhaltskategorien zueinander verhalten. Die folgenden Abschnitte erklären diese Beziehungen im Text.](content_categories_venn.png)

## Hauptinhaltskategorien

### Metadaten-Inhalt

Elemente, die zur Kategorie des _Metadaten-Inhalts_ gehören, ändern die Darstellung oder das Verhalten des restlichen Dokuments, stellen Verbindungen zu anderen Dokumenten her oder übermitteln andere _out-of-band_ Informationen. Alles im {{htmlelement("head")}}, einschließlich `<title>`, `<link>`, `<script>`, `<style>` und das weniger benutzte `<base>`, ist Metadaten-Inhalt. Es gibt ein `<meta>`-Element für Metadaten, die durch diese anderen Elemente nicht dargestellt werden können.

Die Metadaten-Elemente sind:

- {{HTMLElement("base")}}
- {{HTMLElement("link")}}
- {{HTMLElement("meta")}}
- {{HTMLElement("noscript")}}
- {{HTMLElement("script")}}
- {{HTMLElement("style")}}
- {{HTMLElement("title")}}

Einige dieser Elemente gehören zu mehr als einer Inhaltskategorie. Zum Beispiel ist `<script>` ein Mitglied der Metadaten-, Fluss- und Phrasen-Inhaltskategorien und ein skript-unterstützendes Element; `<script>` kann dort verwendet werden, wo Metadaten-Inhalt, Phrasen-Inhalt oder skript-unterstützende Elemente erwartet werden.

### Flussinhalt

Flussinhalt ist eine breite Kategorie, die die meisten Elemente umfasst, die innerhalb des {{HTMLElement("body")}}-Elements platziert werden können, einschließlich Überschriftenelemente, Abschnittselemente, Phrasenelemente, Eingebettete Elemente, interaktive Elemente und formularbezogene Elemente. Sie enthält auch Textknoten (aber nicht solche, die nur aus Leerzeichen bestehen).

Die Fluss-Elemente sind:

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
- Plaintext

Einige andere Elemente gehören zu dieser Kategorie, aber nur, wenn ein bestimmter Zustand erfüllt ist:

- {{HTMLElement("area")}}, wenn es ein Nachkomme eines {{HTMLElement("map")}}-Elements ist
- {{HTMLElement("link")}}, wenn das [itemprop](/de/docs/Web/HTML/Global_attributes/itemprop)-Attribut vorhanden ist
- {{HTMLElement("meta")}}, wenn das [itemprop](/de/docs/Web/HTML/Global_attributes/itemprop)-Attribut vorhanden ist

### Abschnittsinhalte

Abschnittsinhalte, ein Teil der Flussinhalte, erstellen einen [Abschnitt in der aktuellen Gliederung](/de/docs/Web/HTML/Element/Heading_Elements), der den Umfang von {{HTMLElement("header")}} und {{HTMLElement("footer")}}-Elementen definiert.

Die Abschnittselemente sind:

- {{HTMLElement("article")}}
- {{HTMLElement("aside")}}
- {{HTMLElement("nav")}}
- {{HTMLElement("section")}}

### Überschrifteninhalt

Überschrifteninhalt, ein Teil der Flussinhalte, definiert den Titel eines Abschnitts. Diese Definition gilt sowohl für Abschnitte, die durch explizite [Abschnittsinhalts](#abschnittsinhalte)-Elemente markiert sind, als auch für diejenigen, die implizit durch den Überschrifteninhalt selbst definiert sind.

Die Überschriftenelemente sind:

- {{HTMLElement("Heading_Elements", "<code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>")}}
- {{HTMLElement("hgroup")}}

> [!NOTE]
> Obwohl es wahrscheinlich ist, dass der {{HTMLElement("header")}} Überschrifteninhalt enthält, ist er selbst kein Überschrifteninhalt.

### Phraseninhalt

Phraseninhalt, ein Teil der Flussinhalte, bezieht sich auf den Text und das Markup innerhalb eines Dokuments. Sequenzen von Phraseninhalt bilden Absätze.

Die Phrasenelemente sind:

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
- Plaintext (einschließlich mehr als nur Leerzeichen)

Einige andere Elemente gehören zu dieser Kategorie, aber nur, wenn ein bestimmter Zustand erfüllt ist:

- {{HTMLElement("a")}}, wenn es nur Phraseninhalt enthält
- {{HTMLElement("area")}}, wenn es ein Nachkomme eines {{HTMLElement("map")}}-Elements ist
- {{HTMLElement("del")}}, wenn es nur Phraseninhalt enthält
- {{HTMLElement("ins")}}, wenn es nur Phraseninhalt enthält
- {{HTMLElement("link")}}, wenn das [itemprop](/de/docs/Web/HTML/Global_attributes/itemprop)-Attribut vorhanden ist
- {{HTMLElement("map")}}, wenn es nur Phraseninhalt enthält
- {{HTMLElement("meta")}}, wenn das [itemprop](/de/docs/Web/HTML/Global_attributes/itemprop)-Attribut vorhanden ist

### Eingebetteter Inhalt

Eingebetteter Inhalt, ein Teil des Flussinhalts, importiert eine andere Ressource oder fügt Inhalt aus einer anderen Markupsprache oder einem anderen Namespace in das Dokument ein.

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

Interaktiver Inhalt, ein Teil der Flussinhalte, umfasst Elemente, die speziell für die Benutzerinteraktion ausgelegt sind.

Die interaktiven Inhaltselemente sind:

- {{HTMLElement("button")}}
- {{HTMLElement("details")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("iframe")}}
- {{HTMLElement("label")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}

Einige Elemente gehören zu dieser Kategorie nur unter bestimmten Bedingungen:

- {{HTMLElement("a")}}, wenn das [`href`](/de/docs/Web/HTML/Element/a#href)-Attribut vorhanden ist
- {{HTMLElement("audio")}}, wenn das [`controls`](/de/docs/Web/HTML/Element/audio#controls)-Attribut vorhanden ist
- {{HTMLElement("img")}}, wenn das [`usemap`](/de/docs/Web/HTML/Element/img#usemap)-Attribut vorhanden ist
- {{HTMLElement("input")}}, wenn das [type](/de/docs/Web/HTML/Element/input#type)-Attribut nicht im versteckten Zustand ist
- {{HTMLElement("object")}}, wenn das [`usemap`](/de/docs/Web/HTML/Element/object#usemap)-Attribut vorhanden ist
- {{HTMLElement("video")}}, wenn das [`controls`](/de/docs/Web/HTML/Element/video#controls)-Attribut vorhanden ist

### Spürbarer Inhalt

Der Inhalt ist spürbar, wenn er weder leer noch versteckt ist; es ist Inhalt, der gerendert wird und substanziell ist. Elemente, deren Modell ein Flussinhalt ist, sollten mindestens einen Knoten haben, der spürbar ist.

Die spürbaren Elemente sind:

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
- Text, der nicht zwischen-element [Whitespaces](/de/docs/Glossary/Whitespace) ist

Einige Elemente gehören zu dieser Kategorie nur unter bestimmten Bedingungen:

- {{HTMLElement("audio")}}, wenn das [`controls`](/de/docs/Web/HTML/Element/audio#controls)-Attribut vorhanden ist
- {{HTMLElement("dl")}}, wenn die Kinder des Elements mindestens eine Name-Wert-Gruppe enthalten
- {{HTMLElement("input")}}, wenn das [type](/de/docs/Web/HTML/Element/input#type)-Attribut nicht im versteckten Zustand ist
- {{HTMLElement("ol")}}, wenn dessen Kinder mindestens ein {{HTMLElement("li")}}-Element enthalten
- {{HTMLElement("ul")}}, wenn dessen Kinder mindestens ein {{HTMLElement("li")}}-Element enthalten

### Formular-assoziierter Inhalt

Formular-assoziierter Inhalt ist ein Teil des Flussinhalts, der Elemente umfasst, die einen Formular-Eigentümer haben, der durch ein **form**-Attribut offengelegt wird, und überall verwendet werden können, wo Flussinhalt erwartet wird. Ein Formulareigentümer ist entweder das enthaltene {{HTMLElement("form")}}-Element oder das Element, dessen ID im **form**-Attribut angegeben ist.

Die formular-assoziierten Elemente sind:

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

- listet auf
  - : Elemente, die in den Sammlungen {{domxref("HTMLFormElement.elements", "form.elements")}} und `fieldset.elements` aufgelistet sind. Enthält {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}} und {{HTMLElement("textarea")}}.
- beschriftbar
  - : Elemente, die mit {{HTMLElement("label")}}-Elementen verbunden werden können. Enthält {{HTMLElement("button")}}, {{HTMLElement("input")}}, {{HTMLElement("meter")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}} und {{HTMLElement("textarea")}}.
- einreichbar
  - : Elemente, die zum Erstellen des Formulardatensatzes verwendet werden können, wenn das Formular übermittelt wird. Enthält {{HTMLElement("button")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("select")}} und {{HTMLElement("textarea")}}.
- rücksetzbar
  - : Elemente, die betroffen sein können, wenn ein Formular zurückgesetzt wird. Enthält {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}} und {{HTMLElement("textarea")}}.

## Sekundäre Inhaltskategorien

Es gibt einige sekundäre Klassifizierungen von Elementen, die nützlich sein können, auch zu kennen.

### Skript-unterstützende Elemente

**Skript-unterstützende Elemente** sind Elemente, die nicht direkt zur gerenderten Ausgabe eines Dokuments beitragen. Stattdessen dienen sie zur Unterstützung von Skripten, entweder indem sie Skriptcode direkt enthalten oder angeben oder indem sie Daten spezifizieren, die von Skripten verwendet werden.

Die skript-unterstützenden Elemente sind:

- {{HTMLElement("script")}}
- {{HTMLElement("template")}}

## Transparentes Inhaltsmodell

Wenn ein Element ein transparentes Inhaltsmodell hat, müssen seine Inhalte so strukturiert sein, dass sie gültiges HTML wären, selbst wenn das transparente Element entfernt und durch die Kindelemente ersetzt würde.

Zum Beispiel sind die Elemente {{HTMLElement("del")}} und {{HTMLElement("ins")}} transparent:

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

Wenn diese Elemente entfernt würden, wäre dieses Fragment immer noch gültiges HTML (wenn auch nicht korrektes Englisch).

```html
<p>Shopping Returns list</p>
<ul>
  <li>Oranges</li>
  <li>Toilet paper</li>
  <li>Toothpaste</li>
</ul>
```
