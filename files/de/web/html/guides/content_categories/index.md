---
title: Inhaltskategorien
slug: Web/HTML/Guides/Content_categories
l10n:
  sourceCommit: a2742d6f0d7c26e98a6ce8066d2f87519d8df474
---

Die meisten [HTML](/de/docs/Web/HTML)-Elemente sind Mitglied einer oder mehrerer **Inhaltskategorien** — diese Kategorien gruppieren Elemente, die gemeinsame Merkmale teilen. Dies ist eine lose Gruppierung (es wird keine tatsächliche Beziehung zwischen den Elementen dieser Kategorien geschaffen), aber sie helfen, das gemeinsame Verhalten der Kategorien und deren zugehörige Regeln zu definieren und zu beschreiben. Es ist möglich, dass [Elemente nicht Mitglied _irgendeiner_ dieser Kategorien sind](#elemente_ohne_kategorie).

Die Inhaltskategorien werden verwendet, um das _Inhaltsmodell_ von Elementen zu definieren, mit anderen Worten, welche Nachkommen jedes Element haben kann. Zum Beispiel kann das `<p>`-Element nur _phrasing content_ enthalten, während das `<div>`-Element _flow content_ enthalten kann. Einige Elemente, wie `<ins>`, haben ein [_transparentes_ Inhaltsmodell](#transparente_inhaltsmodelle).

Es gibt sieben Haupt-Inhaltskategorien, die mit dem folgenden Venn-Diagramm zusammengefasst werden können:

![Ein Venn-Diagramm zeigt, wie die verschiedenen Inhaltskategorien miteinander interagieren. Die nachfolgenden Abschnitte erklären diese Beziehungen im Text.](content_categories_venn.png)

> [!NOTE]
> Eine detailliertere Diskussion über diese Inhaltskategorien und ihre vergleichbare Funktionalität überschreitet den Rahmen dieses Artikels; dafür könnten Sie die [relevanten Teile der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/dom.html#kinds-of-content) lesen.

## Metadaten-Inhalte

Elemente, die zur Kategorie der _Metadaten-Inhalte_ gehören, ändern die Darstellung oder das Verhalten des restlichen Dokuments, stellen Verknüpfungen zu anderen Dokumenten her oder vermitteln andere _außerbandmäßige_ Informationen. Alles im {{htmlelement("head")}}, einschließlich `<title>`, `<link>`, `<script>`, `<style>` und dem weniger häufig verwendeten `<base>`, ist Metadaten-Inhalt. Es gibt ein `<meta>`-Element für Metadaten, die mit diesen anderen Elementen nicht dargestellt werden können.

Die Metadaten-Elemente sind:

- {{HTMLElement("base")}}
- {{HTMLElement("link")}}
- {{HTMLElement("meta")}}
- {{HTMLElement("noscript")}}
- {{HTMLElement("script")}}
- {{HTMLElement("style")}}
- {{HTMLElement("template")}}
- {{HTMLElement("title")}}

Einige dieser Elemente gehören zu mehr als einer Inhaltskategorie. Zum Beispiel ist `<script>` Mitglied der Kategorien Metadaten, Flow und Phrasing Content und ist ein Skript-unterstützendes Element; `<script>` kann verwendet werden, wo Metadaten-Inhalte, Phrasing-Inhalte oder Skript-unterstützende Elemente erwartet werden.

## Flow-Inhalte

Flow-Inhalt ist eine breite Kategorie, die die meisten Elemente umfasst, die innerhalb des {{HTMLElement("body")}} Elements stehen können, einschließlich Überschriftenelemente, Gliederungselemente, Phrasing-Elemente, Einbettungselemente, interaktive Elemente und formularbezogene Elemente. Es umfasst auch Textknoten (aber keine, die nur aus Leerzeichen bestehen).

Die Flow-Elemente sind:

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
- Klartext

Einige andere Elemente gehören zu dieser Kategorie, jedoch nur, wenn eine spezifische Bedingung erfüllt ist:

- {{HTMLElement("area")}}, wenn es ein Nachkomme eines {{HTMLElement("map")}}-Elements ist
- {{HTMLElement("link")}}, wenn das [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)-Attribut vorhanden ist
- {{HTMLElement("meta")}}, wenn das [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)-Attribut vorhanden ist

## Gliederungsinhalte

Gliederungsinhalte, eine Teilmenge von Flow-Inhalten, schaffen einen [Abschnitt in der aktuellen Gliederung](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), der den Geltungsbereich der {{HTMLElement("header")}} und {{HTMLElement("footer")}}-Elemente definiert.

Die Gliederungselemente sind:

- {{HTMLElement("article")}}
- {{HTMLElement("aside")}}
- {{HTMLElement("nav")}}
- {{HTMLElement("section")}}

## Überschrifteninhalte

Überschrifteninhalte, eine Teilmenge von Flow-Inhalten, definiert den Titel eines Abschnitts. Diese Definition gilt sowohl für Abschnitte, die durch explizite [Gliederungsinhalte](#gliederungsinhalte)-Elemente gekennzeichnet sind, als auch für solche, die implizit durch den Überschrifteninhalt selbst definiert sind.

Die Überschriftenelemente sind:

- {{HTMLElement("Heading_Elements", "<code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>")}}
- {{HTMLElement("hgroup")}}

> [!NOTE]
> Obwohl wahrscheinlich Überschrifteninhalte enthalten, ist das {{HTMLElement("header")}} selbst kein Überschrifteninhalt.

## Phrasing-Inhalte

Phrasing-Inhalte, eine Teilmenge von Flow-Inhalten, bezieht sich auf den Text und das Markup innerhalb eines Dokuments. Sequenzen von Phrasing-Inhalten bilden Absätze.

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
- [Autonome benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements)
- Klartext

Einige andere Elemente gehören zu dieser Kategorie, jedoch nur, wenn eine spezifische Bedingung erfüllt ist:

- {{HTMLElement("a")}}, wenn es nur Phrasing-Inhalte enthält
- {{HTMLElement("area")}}, wenn es ein Nachkomme eines {{HTMLElement("map")}}-Elements ist
- {{HTMLElement("del")}}, wenn es nur Phrasing-Inhalte enthält
- {{HTMLElement("ins")}}, wenn es nur Phrasing-Inhalte enthält
- {{HTMLElement("link")}}, wenn das [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)-Attribut vorhanden ist
- {{HTMLElement("map")}}, wenn es nur Phrasing-Inhalte enthält
- {{HTMLElement("meta")}}, wenn das [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)-Attribut vorhanden ist

## Eingebettete Inhalte

Eingebettete Inhalte, eine Teilmenge von Flow-Inhalten, importiert eine andere Ressource oder fügt Inhalte aus einer anderen Markup-Sprache oder einem anderen Namensraum in das Dokument ein.

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

## Interaktive Inhalte

Interaktive Inhalte, eine Teilmenge von Flow-Inhalten, beinhalten Elemente, die speziell für Benutzerinteraktion entworfen wurden.

Die interaktiven Inhaltselemente sind:

- {{HTMLElement("button")}}
- {{HTMLElement("details")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("iframe")}}
- {{HTMLElement("label")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}

Einige Elemente gehören zu dieser Kategorie nur unter bestimmten Bedingungen:

- {{HTMLElement("a")}}, wenn das [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut vorhanden ist
- {{HTMLElement("audio")}}, wenn das [`controls`](/de/docs/Web/HTML/Reference/Elements/audio#controls)-Attribut vorhanden ist
- {{HTMLElement("img")}}, wenn das [`usemap`](/de/docs/Web/HTML/Reference/Elements/img#usemap)-Attribut vorhanden ist
- {{HTMLElement("input")}}, wenn das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut nicht im versteckten Zustand ist
- {{HTMLElement("object")}}, wenn das [`usemap`](/de/docs/Web/HTML/Reference/Elements/object#usemap)-Attribut vorhanden ist
- {{HTMLElement("video")}}, wenn das [`controls`](/de/docs/Web/HTML/Reference/Elements/video#controls)-Attribut vorhanden ist

## Fassbare Inhalte

**Fassbare Inhalte** sind Inhalte, die weder leer noch versteckt sind; sie sind Inhalte, die gerendert werden und substanziell sind. Fassbare Inhalte werden nicht zur Definition von Inhaltsmodellen verwendet, sondern um eine allgemeine Regel zu definieren: Elemente, deren Inhaltsmodell eine beliebige Flow-Inhalte oder Phrasing-Inhalte zulässt, sollten mindestens einen Knoten in ihren Inhalten haben, der fassbarer Inhalt ist und nicht das `hidden`-Attribut spezifiziert hat.

Die fassbaren Elemente sind:

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
- Klartext, der keine zwischen Elementen befindlichen {{Glossary("Whitespace", "Leerzeichen")}} ist

Einige Elemente gehören zu dieser Kategorie nur unter bestimmten Bedingungen:

- {{HTMLElement("audio")}}, wenn das [`controls`](/de/docs/Web/HTML/Reference/Elements/audio#controls)-Attribut vorhanden ist
- {{HTMLElement("dl")}}, wenn die Kinder des Elements mindestens eine Name-Wert-Gruppe enthalten
- {{HTMLElement("input")}}, wenn das [type](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut nicht im versteckten Zustand ist
- {{HTMLElement("ol")}}, wenn die Kinder mindestens ein {{HTMLElement("li")}}-Element enthalten
- {{HTMLElement("ul")}}, wenn die Kinder mindestens ein {{HTMLElement("li")}}-Element enthalten

## Elemente ohne Kategorie

Einige Elemente sind nicht Mitglied _irgendeiner_ Inhaltskategorie. Diese umfassen:

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

## Skript-unterstützende Elemente

**Skript-unterstützende Elemente** sind Elemente, die nicht direkt zur gerenderten Ausgabe eines Dokuments beitragen. Stattdessen dienen sie dazu, Skripte zu unterstützen, entweder indem sie direkt Skriptcode enthalten oder spezifizieren oder indem sie Daten angeben, die von Skripten verwendet werden. Nahezu alle Elemente, einschließlich derjenigen, die nur spezifische Elemente zulassen (wie {{HTMLElement("ul")}}, das {{HTMLElement("li")}}-Elemente aufnimmt), können Skript-unterstützende Elemente enthalten.

Die skript-unterstützenden Elemente sind:

- {{HTMLElement("script")}}
- {{HTMLElement("template")}}

## Formular-assoziierte Inhalte

Formular-assoziierte Inhalte sind eine Teilmenge von Flow-Inhalten, die Elemente umfassen, die einen Formular-Eigentümer haben und überall dort verwendet werden können, wo Flow-Inhalte erwartet werden. Ein Formular-Eigentümer ist entweder das enthaltende {{HTMLElement("form")}}-Element oder das `<form>`, dessen `id` im `form`-Attribut des Elements angegeben ist.

Die formular-assoziierten Elemente sind:

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}}
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}
- {{HTMLElement("img")}}

Diese Kategorie enthält mehrere Unterkategorien:

- aufgeführt
  - : Elemente, die in den Sammlungen [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements) und [`HTMLFieldSetElement.elements`](/de/docs/Web/API/HTMLFieldSetElement/elements) aufgelistet sind. Beinhaltet {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}} und {{HTMLElement("textarea")}}.
- übermittelbar
  - : Elemente, die zur Konstruierung des Formulardatensatzes beim Absenden des Formulars verwendet werden können. Beinhaltet {{HTMLElement("button")}}, {{HTMLElement("input")}}, {{HTMLElement("select")}} und {{HTMLElement("textarea")}}.
- zurücksetzbar
  - : Elemente, die beim Zurücksetzen eines Formulars betroffen sein können. Beinhaltet {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}} und {{HTMLElement("textarea")}}.
- autocapitalize-und-autocorrect-vererbend
  - : Elemente, die die [autocapitalize](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize) und [autocorrect](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) Attribute von ihrem Formular-Eigentümer erben. Beinhaltet {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}} und {{HTMLElement("textarea")}}.
- label-fähig
  - : Elemente, die mit {{HTMLElement("label")}}-Elementen assoziiert werden können. Beinhaltet {{HTMLElement("button")}}, {{HTMLElement("input")}} (alle Typen außer `hidden`), {{HTMLElement("meter")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}} und {{HTMLElement("textarea")}}.

## Transparente Inhaltsmodelle

Zusätzlich zu den aufgelisteten Inhaltskategorien kann das Inhaltsmodell eines Elements auch als "transparent" definiert sein. Wenn der erlaubte Inhalt eines Elements X "transparent" ist, betrachten wir das übergeordnete Element von X. Wir schneiden den erlaubten Inhalt des übergeordneten Elements von X mit den Inhaltskategorien von X, und das Ergebnis ist, was "transparent" in diesem Kontext bedeutet. Hat das übergeordnete Element von X ebenfalls ein transparentes Inhaltsmodell, gehen wir im Baum weiter nach oben, bis wir ein nicht-transparentes Inhaltsmodell finden. Gibt es keinen solchen übergeordneten Knoten, bedeutet "transparent" "Flow-Inhalt".

Zum Beispiel akzeptiert ein {{HTMLElement("ruby")}}-Element Phrasing-Inhalte. Das {{HTMLElement("ins")}}-Element gehört der Kategorie Phrasing-Inhalte an, wenn es nur Phrasing-Inhalte enthält. Daher kann ein {{HTMLElement("ins")}}-Element innerhalb eines {{HTMLElement("ruby")}}-Elements platziert werden. Der erlaubte Inhalt des `<ins>`-Elements ist "transparent", was beim Verschachteln in `<ruby>` "Phrasing-Inhalte" bedeutet. Allerdings sind {{HTMLElement("rt")}}-Elemente keine Phrasing-Inhalte. Daher kann ein {{HTMLElement("rt")}}-Element nicht innerhalb dieses `<ins>`-Elements verschachtelt werden, auch wenn sowohl `<rt>` als auch `<ins>` innerhalb von `<ruby>` stehen können und `<ins>` "transparent" ist.

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

Transparent ist ein _Inhaltsmodell_, keine _Inhaltskategorie_, daher definiert es nur, was ein Element enthalten kann, nicht, wo das Element platziert werden kann. Das heißt, bei der Bestimmung der Erlaubtheit von Kind-Elementen kann man nicht "durch" transparente Kinder sehen. Zum Beispiel akzeptiert ein {{HTMLElement("ul")}}-Element nur {{HTMLElement("li")}}-Elemente und skript-unterstützende Elemente und erlaubt weder `<del>` noch `<ins>`, selbst wenn `<del>` nur `<li>`-Elemente enthält.

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
