---
title: Inhaltskategorien
slug: Web/HTML/Guides/Content_categories
l10n:
  sourceCommit: fce59e0706ab0114d9968c23722dccfacaebf998
---

Die meisten [HTML](/de/docs/Web/HTML)-Elemente gehören zu einer oder mehreren **Inhaltskategorien** – diese Kategorien gruppieren Elemente, die gemeinsame Merkmale aufweisen. Dies ist eine lose Gruppierung (es schafft tatsächlich keine Beziehung zwischen den Elementen dieser Kategorien), aber sie helfen, das gemeinsame Verhalten und die zugehörigen Regeln der Kategorien zu definieren und zu beschreiben. Es ist möglich, dass [Elemente nicht Mitglied _einer beliebigen_ dieser Kategorien sind](#elemente_ohne_kategorie).

Die Inhaltskategorien werden verwendet, um das _Inhaltsmodell_ von Elementen zu definieren, das heißt, was jedes Element als Nachkommen haben kann. Zum Beispiel kann das `<p>`-Element nur _formatierten Text_ enthalten, während das `<div>`-Element _Flussinhalt_ enthalten kann. Einige Elemente, wie `<ins>`, haben ein [_transparentes_ Inhaltsmodell](#transparentes_inhaltsmodell).

Es gibt sieben Hauptinhaltskategorien, die im folgenden Venn-Diagramm zusammengefasst werden können:

![Ein Venn-Diagramm, das zeigt, wie die verschiedenen Inhaltskategorien miteinander zusammenhängen. Die folgenden Abschnitte erklären diese Beziehungen im Text.](content_categories_venn.png)

> [!NOTE]
> Eine detailliertere Diskussion dieser Inhaltskategorien und ihrer vergleichbaren Funktionalitäten fällt nicht in den Geltungsbereich dieses Artikels. Für weitere Informationen sollten Sie die [relevanten Abschnitte der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/dom.html#kinds-of-content) lesen.

## Metadaten-Inhalt

Elemente, die zur Kategorie des _Metadaten-Inhalts_ gehören, ändern die Präsentation oder das Verhalten des restlichen Dokuments, richten Links zu anderen Dokumenten ein oder vermitteln andere _außerhalb des Bandes_ liegende Informationen. Alles im {{htmlelement("head")}}, einschließlich `<title>`, `<link>`, `<script>`, `<style>` und dem seltener genutzten `<base>`, sind Metadaten-Inhalte. Es gibt ein `<meta>`-Element für Metadaten, die nicht von diesen anderen Elementen dargestellt werden können.

Die Metadaten-Elemente sind:

- {{HTMLElement("base")}}
- {{HTMLElement("link")}}
- {{HTMLElement("meta")}}
- {{HTMLElement("noscript")}}
- {{HTMLElement("script")}}
- {{HTMLElement("style")}}
- {{HTMLElement("template")}}
- {{HTMLElement("title")}}

Einige dieser Elemente gehören zu mehr als einer Inhaltskategorie. Zum Beispiel ist `<script>` ein Mitglied der Kategorien Metadaten, Fluss und formatierten Text und ist ein skriptunterstützendes Element; `<script>` kann verwendet werden, wo Metadaten-Inhalte, formatierten Inhalte oder skriptunterstützende Elemente erwartet werden.

## Flussinhalt

Flussinhalt ist eine breite Kategorie, die die meisten Elemente umfasst, die innerhalb des {{HTMLElement("body")}}-Elements stehen können, einschließlich Überschriftenelemente, Abschnittselemente, formatierten Elemente, einbettenden Elemente, interaktive Elemente und formularbezogene Elemente. Dazu gehören auch Textknoten (aber nicht diejenigen, die nur aus Leerzeichen bestehen).

Die Flusselemente sind:

- {{HTMLElement("a")}}
- {{HTMLElement("abbr")}}
- {{HTMLElement("address")}}
- {{HTMLElement("article")}}
- {{HTMLElement("aside")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("b")}}
- {{HTMLElement("bdi")}}
- {{HTMLElement("bdo")}}
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
- {{HTMLElement("geolocation")}}
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
- {{HTMLElement("script")}}
- {{HTMLElement("search")}}
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
- [Autonome benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements)
- Einfacher Text

Einige andere Elemente gehören nur dann zu dieser Kategorie, wenn eine bestimmte Bedingung erfüllt ist:

- {{HTMLElement("area")}}, wenn es ein Nachkomme eines {{HTMLElement("map")}}-Elements ist
- {{HTMLElement("link")}}, wenn das [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)-Attribut vorhanden ist
- {{HTMLElement("meta")}}, wenn das [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)-Attribut vorhanden ist

## Abschnittsinhalt

Abschnittsinhalt, ein Teil von Flussinhalt, erstellt einen [Abschnitt im aktuellen Umriss](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), der den Geltungsbereich von {{HTMLElement("header")}}- und {{HTMLElement("footer")}}-Elementen definiert.

Die Abschnittselemente sind:

- {{HTMLElement("article")}}
- {{HTMLElement("aside")}}
- {{HTMLElement("nav")}}
- {{HTMLElement("section")}}

## Überschrifteninhalt

Überschrifteninhalt, ein Teil des Flussinhalts, definiert den Titel eines Abschnitts. Diese Definition gilt sowohl für Abschnitte, die durch explizite [Abschnittsinhalts-](#abschnittsinhalt)Elemente markiert sind, als auch für solche, die implizit durch den Überschrifteninhalt selbst definiert sind.

Die Überschriftenelemente sind:

- {{HTMLElement("Heading_Elements", "<code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>")}}
- {{HTMLElement("hgroup")}}

> [!NOTE]
> Obwohl sie wahrscheinlich Überschrifteninhalt enthalten, ist das {{HTMLElement("header")}} selbst kein Überschrifteninhalt.

## Formatierten Inhalt

Formatierten Inhalt, ein Teil des Flussinhalts, bezieht sich auf den Text und das Markup innerhalb eines Dokuments. Sequenzen von formatierten Inhalten bilden Absätze.

Die formatierten Elemente sind:

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
- [Autonome benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements)
- Einfacher Text

Einige andere Elemente gehören nur zu dieser Kategorie, wenn eine spezifische Bedingung erfüllt ist:

- {{HTMLElement("a")}}, wenn es nur formatierten Inhalt enthält
- {{HTMLElement("area")}}, wenn es ein Nachkomme eines {{HTMLElement("map")}}-Elements ist
- {{HTMLElement("del")}}, wenn es nur formatierten Inhalt enthält
- {{HTMLElement("ins")}}, wenn es nur formatierten Inhalt enthält
- {{HTMLElement("link")}}, wenn das [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)-Attribut vorhanden ist
- {{HTMLElement("map")}}, wenn es nur formatierten Inhalt enthält
- {{HTMLElement("meta")}}, wenn das [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)-Attribut vorhanden ist

## Eingebetteter Inhalt

Eingebetteter Inhalt, ein Teil des Flussinhalts, importiert eine andere Ressource oder fügt Inhalt aus einer anderen Auszeichnungssprache oder einem anderen Namensraum in das Dokument ein.

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

## Interaktiver Inhalt

Interaktiver Inhalt, ein Teil des Flussinhalts, umfasst Elemente, die speziell für die Benutzerinteraktion konzipiert sind.

Die interaktiven Inhaltselemente sind:

- {{HTMLElement("button")}}
- {{HTMLElement("details")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("iframe")}}
- {{HTMLElement("label")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}

Einige Elemente gehören nur unter bestimmten Bedingungen zu dieser Kategorie:

- {{HTMLElement("a")}}, wenn das [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut vorhanden ist
- {{HTMLElement("audio")}}, wenn das [`controls`](/de/docs/Web/HTML/Reference/Elements/audio#controls)-Attribut vorhanden ist
- {{HTMLElement("img")}}, wenn das [`usemap`](/de/docs/Web/HTML/Reference/Elements/img#usemap)-Attribut vorhanden ist
- {{HTMLElement("input")}}, wenn das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut nicht im versteckten Zustand ist
- {{HTMLElement("object")}}, wenn das [`usemap`](/de/docs/Web/HTML/Reference/Elements/object#usemap)-Attribut vorhanden ist
- {{HTMLElement("video")}}, wenn das [`controls`](/de/docs/Web/HTML/Reference/Elements/video#controls)-Attribut vorhanden ist

## Greifbarer Inhalt

**Greifbarer Inhalt** ist Inhalt, der weder leer noch verborgen ist; es ist Inhalt, der gerendert und substanziell ist. Greifbarer Inhalt wird nicht zur Definition von Inhaltsmodellen verwendet, sondern um eine allgemeine Regel zu definieren: Elemente, deren Inhaltsmodell jeglichen Flussinhalt oder formatierten Inhalt erlaubt, sollten mindestens einen Knoten in ihren Inhalten haben, der greifbaren Inhalt darstellt und nicht das `hidden`-Attribut angegeben hat.

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
- {{MathMLElement("math")}}
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
- {{SVGElement("svg")}}
- {{HtmlElement("table")}}
- {{HtmlElement("textarea")}}
- {{HtmlElement("time")}}
- {{HtmlElement("u")}}
- {{HtmlElement("var")}}
- {{HtmlElement("video")}}
- [Autonome benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements)
- Einfacher Text, der kein Zwischenraum zwischen den Elementen ist {{Glossary("Whitespace", "weißraum")}}

Einige Elemente gehören nur unter spezifischen Bedingungen zu dieser Kategorie:

- {{HTMLElement("audio")}}, wenn das [`controls`](/de/docs/Web/HTML/Reference/Elements/audio#controls)-Attribut vorhanden ist
- {{HTMLElement("dl")}}, wenn die Kinder des Elements mindestens eine Namen-Wert-Gruppe enthalten
- {{HTMLElement("input")}}, wenn das [type](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut nicht im versteckten Zustand ist
- {{HTMLElement("ol")}}, wenn ihre Kinder mindestens ein {{HTMLElement("li")}}-Element enthalten
- {{HTMLElement("ul")}}, wenn ihre Kinder mindestens ein {{HTMLElement("li")}}-Element enthalten

## Elemente ohne Kategorie

Einige Elemente sind kein Mitglied _irgendeiner_ Inhaltskategorie. Diese schließen ein:

- {{HTMLElement("caption")}}
- {{HTMLElement("col")}}
- {{HTMLElement("colgroup")}}
- {{HTMLElement("dd")}}
- {{HTMLElement("dt")}}
- {{HTMLElement("figcaption")}}
- {{HTMLElement("head")}}
- {{HTMLElement("html")}}
- {{HTMLElement("legend")}}
- {{HTMLElement("li")}}
- {{HTMLElement("optgroup")}}
- {{HTMLElement("option")}}
- {{HTMLElement("param")}}
- {{HTMLElement("rb")}}
- {{HTMLElement("rp")}}
- {{HTMLElement("rt")}}
- {{HTMLElement("rtc")}}
- {{HTMLElement("source")}}
- {{HTMLElement("tbody")}}
- {{HTMLElement("tfoot")}}
- {{HTMLElement("th")}}
- {{HTMLElement("thead")}}
- {{HTMLElement("tr")}}
- {{HTMLElement("track")}}

## Skriptunterstützende Elemente

**Skriptunterstützende Elemente** sind Elemente, die nicht direkt zum gerenderten Output eines Dokuments beitragen. Stattdessen dienen sie der Unterstützung von Skripten, entweder durch direkte Angabe oder Spezifizierung von Skriptcode oder durch Spezifizierung von Daten, die von Skripten genutzt werden. Fast alle Elemente, einschließlich derer, die nur spezifische Elemente zulassen (wie {{HTMLElement("ul")}}, das {{HTMLElement("li")}}-Elemente akzeptiert), können skriptunterstützende Elemente enthalten.

Die skriptunterstützenden Elemente sind:

- {{HTMLElement("script")}}
- {{HTMLElement("template")}}

## Formularbezogener Inhalt

Formularbezogener Inhalt ist ein Teil des Flussinhalts und umfasst Elemente, die einen Formularbesitzer haben und überall dort verwendet werden können, wo Flussinhalt erwartet wird. Ein Formularbesitzer ist entweder das enthaltende {{HTMLElement("form")}}-Element oder das `<form>`, dessen `id` im `form`-Attribut des Elements angegeben ist.

Die formularbezogenen Elemente sind:

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}}
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}
- {{HTMLElement("img")}}

Diese Kategorie enthält mehrere Unterkategorien:

- aufgelistet
  - : Elemente, die in den [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements) und [`HTMLFieldSetElement.elements`](/de/docs/Web/API/HTMLFieldSetElement/elements)-Sammlungen aufgelistet sind. Beinhaltet {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}} und {{HTMLElement("textarea")}}.
- einreichbar
  - : Elemente, die zur Erstellung des Formulardatensatzes bei der Übermittlung des Formulars verwendet werden können. Beinhaltet {{HTMLElement("button")}}, {{HTMLElement("input")}}, {{HTMLElement("select")}} und {{HTMLElement("textarea")}}.
- zurücksetzbar
  - : Elemente, die beim Zurücksetzen eines Formulars betroffen sein können. Beinhaltet {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}} und {{HTMLElement("textarea")}}.
- Autokapitalisierungs- und Autokorrektur-vererbend
  - : Elemente, die die [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize)- und [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect)-Attribute von ihrem Formularbesitzer erben. Beinhaltet {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}} und {{HTMLElement("textarea")}}.
- etikettiert
  - : Elemente, die mit {{HTMLElement("label")}}-Elementen assoziiert werden können. Beinhaltet {{HTMLElement("button")}}, {{HTMLElement("input")}} (alle Typen außer `hidden`), {{HTMLElement("meter")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}} und {{HTMLElement("textarea")}}.

## Transparentes Inhaltsmodell

Zusätzlich zu den gelisteten Inhaltskategorien kann das Inhaltsmodell eines Elements auch als "transparent" definiert werden. Wenn der erlaubte Inhalt eines Elements X "transparent" ist, dann betrachten Sie das übergeordnete Element von X. Wir schneiden den erlaubten Inhalt des Elternteils von X mit den Inhaltskategorien von X, und das Ergebnis ist das, was "transparent" in diesem Zusammenhang bedeutet. Wenn das übergeordnete Element von X ebenfalls ein transparentes Inhaltsmodell hat, gehen wir im Baum nach oben, bis wir ein nicht-transparentes Inhaltsmodell finden. Gibt es keinen solchen Elternteil, bedeutet "transparent" "Flussinhalt".

Beispielsweise akzeptiert ein {{HTMLElement("ruby")}}-Element formatierten Inhalt. Das {{HTMLElement("ins")}}-Element gehört zu der Kategorie des formatierten Inhalts, wenn es nur formatierten Inhalt enthält. Daher kann ein {{HTMLElement("ins")}}-Element innerhalb eines {{HTMLElement("ruby")}}-Elements platziert werden. Der erlaubte Inhalt des `<ins>`-Elements ist "transparent", was, wenn es in `<ruby>` verschachtelt ist, "formatierter Inhalt" bedeutet. Allerdings sind {{HTMLElement("rt")}}-Elemente kein formatierter Inhalt. Deshalb kann ein {{HTMLElement("rt")}}-Element nicht in dieses `<ins>`-Element verschachtelt werden, auch wenn sowohl `<rt>` als auch `<ins>` in `<ruby>` enthalten sein können und `<ins>` "transparent" ist.

```html example-bad
<ruby>
  Text before
  <ins>
    <!-- Invalid: rt cannot be placed inside ins here -->
    <rt>Pronunciation</rt>
  </ins>
</ruby>
```

```html example-good
<ruby>
  Text before
  <!-- Valid: ins can be inside ruby, and rt can be inside ruby -->
  <ins>Inserted text</ins>
  <rt>Pronunciation</rt>
</ruby>
```

```html example-good
<ruby>
  Text before
  <!-- Valid: rt can be inside ruby, and ins can be inside rt -->
  <rt><ins>Pronunciation</ins></rt>
</ruby>
```

Transparent ist ein _Inhaltsmodell_, keine _Inhaltskategorie_, daher definiert es nur, was ein Element enthalten kann, nicht, wo das Element platziert werden kann. Das heißt, bei der Bestimmung der Zulässigkeit der Kinder eines Elements können Sie nicht "durch" transparente Kinder sehen. Zum Beispiel akzeptiert ein {{HTMLElement("ul")}}-Element nur {{HTMLElement("li")}}-Elemente und skriptunterstützende Elemente und erlaubt nicht `<del>` oder `<ins>`, selbst wenn das `<del>` nur `<li>`-Elemente enthält.

```html example-bad
<ul>
  <del>
    <li>Oranges</li>
    <li>Toilet paper</li>
  </del>
  <li>Toothpaste</li>
</ul>
```

```html example-good
<ul>
  <li><del>Oranges</del></li>
  <li><del>Toilet paper</del></li>
  <li>Toothpaste</li>
</ul>
```
