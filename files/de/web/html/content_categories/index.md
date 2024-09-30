---
title: Content-Kategorien
slug: Web/HTML/Content_categories
l10n:
  sourceCommit: 5227bb6898c08fb80c05c88961ebc419f93e6ae7
---

{{HTMLSidebar}}

Die meisten [HTML](/de/docs/Web/HTML)-Elemente sind Mitglied einer oder mehrerer **Content-Kategorien** — diese Kategorien gruppieren Elemente, die gemeinsame Merkmale aufweisen. Dies ist eine lose Gruppierung (sie schafft tatsächlich keine Beziehung zwischen Elementen dieser Kategorien), aber sie hilft, das gemeinsame Verhalten der Kategorien und ihre zugehörigen Regeln zu definieren und zu beschreiben, insbesondere wenn man auf deren komplexe Details stößt. Es ist auch möglich, dass Elemente nicht Mitglied _einer_ dieser Kategorien sind.

Es gibt drei Arten von Content-Kategorien:

- Haupt-Content-Kategorien, die gemeinsame Regeln beschreiben, die von vielen Elementen geteilt werden.
- Formularbezogene Content-Kategorien, die Regeln beschreiben, die für formularbezogene Elemente typisch sind.
- Spezifische Content-Kategorien, die seltene Kategorien beschreiben, die nur von wenigen Elementen, manchmal nur in einem bestimmten Kontext, geteilt werden.

> [!NOTE]
> Eine ausführlichere Diskussion dieser Content-Kategorien und ihrer vergleichenden Funktionen ist nicht Gegenstand dieses Artikels; für weitere Informationen lesen Sie bitte die [relevanten Abschnitte der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/dom.html#kinds-of-content).

![Ein Venn-Diagramm zeigt, wie die verschiedenen Content-Kategorien miteinander in Beziehung stehen. Die folgenden Abschnitte erklären diese Beziehungen im Text.](content_categories_venn.png)

## Haupt-Content-Kategorien

### Metadaten-Content

Elemente, die zur Kategorie _Metadaten-Content_ gehören, ändern die Darstellung oder das Verhalten des restlichen Dokuments, stellen Verknüpfungen zu anderen Dokumenten her oder vermitteln andere _Out-of-Band_-Informationen. Alles im {{htmlelement("head")}}, einschließlich des `<title>`, `<link>`, `<script>`, `<style>` und des weniger genutzten `<base>`, ist Metadaten-Content. Es gibt ein `<meta>`-Element für Metadaten, die nicht durch diese anderen Elemente dargestellt werden können.

Die Metadaten-Elemente sind:

- {{HTMLElement("base")}}
- {{HTMLElement("link")}}
- {{HTMLElement("meta")}}
- {{HTMLElement("noscript")}}
- {{HTMLElement("script")}}
- {{HTMLElement("style")}}
- {{HTMLElement("title")}}

Einige dieser Elemente gehören zu mehr als einer Content-Kategorie. Zum Beispiel ist `<script>` ein Mitglied der Metadaten-, Fluss-, und Phrasen-Content-Kategorien und ist ein scriptsunterstützendes Element; `<script>` kann verwendet werden, wo Metadaten-Content, Phrasen-Content oder scriptsunterstützende Elemente erwartet werden.

### Fluss-Content

Fluss-Content ist eine breite Kategorie, die die meisten Elemente umfasst, die innerhalb des {{HTMLElement("body")}}-Elements erlaubt sind, einschließlich Überschriftselemente, Abschnittselemente, Phraseelemente, Einbettungselemente, interaktive Elemente und formularbezogene Elemente. Es umfasst auch Textknoten (aber nicht die, die nur aus Leerzeichen bestehen).

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
- einfacher Text

Einige andere Elemente gehören zu dieser Kategorie, aber nur, wenn eine bestimmte Bedingung erfüllt ist:

- {{HTMLElement("area")}}, wenn es ein Nachkomme eines {{HTMLElement("map")}}-Elements ist
- {{HTMLElement("link")}}, wenn das [itemprop](/de/docs/Web/HTML/Global_attributes/itemprop)-Attribut vorhanden ist
- {{HTMLElement("meta")}}, wenn das [itemprop](/de/docs/Web/HTML/Global_attributes/itemprop)-Attribut vorhanden ist

### Abschnitts-Content

Abschnitts-Content, eine Untergruppe des Fluss-Contents, erstellt einen [Abschnitt im aktuellen Umriss](/de/docs/Web/HTML/Element/Heading_Elements), der den Umfang von {{HTMLElement("header")}}- und {{HTMLElement("footer")}}-Elementen definiert.

Die Abschnittselemente sind:

- {{HTMLElement("article")}}
- {{HTMLElement("aside")}}
- {{HTMLElement("nav")}}
- {{HTMLElement("section")}}

### Überschrifts-Content

Überschrifts-Content, eine Untergruppe des Fluss-Contents, definiert den Titel eines Abschnitts. Diese Definition gilt sowohl für Abschnitte, die durch explizite [Abschnitts-Content](#abschnitts-content)-Elemente markiert sind, als auch für diejenigen, die implizit durch den Überschrifts-Content selbst definiert werden.

Die Überschriftselemente sind:

- {{HTMLElement("Heading_Elements", "<code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>")}}
- {{HTMLElement("hgroup")}}

> [!NOTE]
> Obwohl {{HTMLElement("header")}} wahrscheinlich Überschrifts-Content enthält, ist es selbst kein Überschrifts-Content.

### Phrase-Content

Phrase-Content, eine Untergruppe des Fluss-Contents, bezieht sich auf den Text und das Markup in einem Dokument. Sequenzen von Phrase-Content bilden Absätze.

Die Phrase-Elemente sind:

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
- einfacher Text (einschließlich mehr als nur Leerzeichen)

Einige andere Elemente gehören zu dieser Kategorie, aber nur, wenn eine bestimmte Bedingung erfüllt ist:

- {{HTMLElement("a")}}, wenn es nur Phrase-Content enthält
- {{HTMLElement("area")}}, wenn es ein Nachkomme eines {{HTMLElement("map")}}-Elements ist
- {{HTMLElement("del")}}, wenn es nur Phrase-Content enthält
- {{HTMLElement("ins")}}, wenn es nur Phrase-Content enthält
- {{HTMLElement("link")}}, wenn das [itemprop](/de/docs/Web/HTML/Global_attributes/itemprop)-Attribut vorhanden ist
- {{HTMLElement("map")}}, wenn es nur Phrase-Content enthält
- {{HTMLElement("meta")}}, wenn das [itemprop](/de/docs/Web/HTML/Global_attributes/itemprop)-Attribut vorhanden ist

### Eingebetteter Content

Eingebetteter Content, eine Untergruppe des Fluss-Contents, importiert eine andere Ressource oder fügt Content aus einer anderen Markup-Sprache oder einem anderen Namensraum in das Dokument ein.

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

### Interaktiver Content

Interaktiver Content, eine Untergruppe des Fluss-Contents, umfasst Elemente, die speziell für die Interaktion mit dem Benutzer entworfen wurden.

Die interaktiven Inhaltselemente sind:

- {{HTMLElement("button")}}
- {{HTMLElement("details")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("iframe")}}
- {{HTMLElement("label")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}

Einige Elemente gehören nur unter bestimmten Bedingungen zu dieser Kategorie:

- {{HTMLElement("a")}}, wenn das [`href`](/de/docs/Web/HTML/Element/a#href)-Attribut vorhanden ist
- {{HTMLElement("audio")}}, wenn das [`controls`](/de/docs/Web/HTML/Element/audio#controls)-Attribut vorhanden ist
- {{HTMLElement("img")}}, wenn das [`usemap`](/de/docs/Web/HTML/Element/img#usemap)-Attribut vorhanden ist
- {{HTMLElement("input")}}, wenn das [type](/de/docs/Web/HTML/Element/input#type)-Attribut nicht im Zustand "hidden" ist
- {{HTMLElement("object")}}, wenn das [`usemap`](/de/docs/Web/HTML/Element/object#usemap)-Attribut vorhanden ist
- {{HTMLElement("video")}}, wenn das [`controls`](/de/docs/Web/HTML/Element/video#controls)-Attribut vorhanden ist

### Greifbarer Content

Content ist greifbar, wenn er weder leer noch versteckt ist; er ist ein Content, der dargestellt wird und substanziell ist. Elemente, deren Modell Fluss-Content ist, sollten mindestens einen Knoten haben, der greifbar ist.

Die greifbaren Elemente sind:

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
- Text, der nicht zwischen Elementen [Leerraum](/de/docs/Glossary/Whitespace) ist

Einige Elemente gehören nur unter bestimmten Bedingungen zu dieser Kategorie:

- {{HTMLElement("audio")}}, wenn das [`controls`](/de/docs/Web/HTML/Element/audio#controls)-Attribut vorhanden ist
- {{HTMLElement("dl")}}, wenn die Kinder des Elements mindestens eine Namens-Werte-Gruppe enthalten
- {{HTMLElement("input")}}, wenn das [type](/de/docs/Web/HTML/Element/input#type)-Attribut nicht im Zustand "hidden" ist
- {{HTMLElement("ol")}}, wenn seine Kinder mindestens ein {{HTMLElement("li")}}-Element enthalten
- {{HTMLElement("ul")}}, wenn seine Kinder mindestens ein {{HTMLElement("li")}}-Element enthalten

### Formularassoziierter Content

Formularassoziierter Content ist eine Untergruppe des Fluss-Contents und umfasst Elemente, die einen Formularbesitzer haben, der durch ein **form**-Attribut angegeben wird und die überall dort verwendet werden können, wo Fluss-Content erwartet wird. Ein Formularbesitzer ist entweder das enthaltene {{HTMLElement("form")}}-Element oder das Element, dessen ID im **form**-Attribut angegeben ist.

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
  - : Elemente, die in den Sammlungen [`form.elements`](/de/docs/Web/API/HTMLFormElement/elements) und `fieldset.elements` aufgelistet sind. Beinhaltet {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}} und {{HTMLElement("textarea")}}.
- beschriftbar
  - : Elemente, die mit {{HTMLElement("label")}}-Elementen assoziiert werden können. Beinhaltet {{HTMLElement("button")}}, {{HTMLElement("input")}}, {{HTMLElement("meter")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}} und {{HTMLElement("textarea")}}.
- übermittelbar
  - : Elemente, die zum Erstellen des Formulardatensatzes verwendet werden können, wenn das Formular übermittelt wird. Beinhaltet {{HTMLElement("button")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("select")}} und {{HTMLElement("textarea")}}.
- rücksetzbar
  - : Elemente, die betroffen sein können, wenn ein Formular zurückgesetzt wird. Beinhaltet {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}} und {{HTMLElement("textarea")}}.

## Sekundäre Content-Kategorien

Es gibt einige sekundäre Klassifizierungen von Elementen, die ebenfalls nützlich sein können.

### Scriptsunterstützende Elemente

**Scriptsunterstützende Elemente** sind Elemente, die nicht direkt zum gerenderten Output eines Dokuments beitragen. Sie dienen stattdessen dazu, Skripte zu unterstützen, entweder indem sie Skriptcode direkt enthalten oder spezifizieren oder indem sie Daten bereitstellen, die von Skripten verwendet werden.

Die scriptsunterstützenden Elemente sind:

- {{HTMLElement("script")}}
- {{HTMLElement("template")}}

## Transparentes Content-Modell

Wenn ein Element über ein transparentes Content-Modell verfügt, dann müssen seine Inhalte so strukturiert sein, dass sie auch dann gültiges HTML wären, wenn das transparente Element entfernt und durch die Kindelemente ersetzt würde.

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

Wenn diese Elemente entfernt würden, wäre dieses Fragment immer noch gültiges HTML (wenn auch nicht korrektes Englisch).

```html
<p>Shopping Returns list</p>
<ul>
  <li>Oranges</li>
  <li>Toilet paper</li>
  <li>Toothpaste</li>
</ul>
```
