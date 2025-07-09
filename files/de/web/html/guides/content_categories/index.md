---
title: Inhaltskategorien
slug: Web/HTML/Guides/Content_categories
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Die meisten [HTML](/de/docs/Web/HTML)-Elemente gehören zu einer oder mehreren **Inhaltskategorien** – diese Kategorien gruppieren Elemente, die gemeinsame Merkmale aufweisen. Dabei handelt es sich um eine lose Gruppierung (sie schafft tatsächlich keine Beziehung zwischen den Elementen dieser Kategorien), aber sie helfen, das gemeinsame Verhalten der Kategorien und deren zugehörige Regeln zu definieren und zu beschreiben. Es ist möglich, dass Elemente (wie {{HTMLElement("track")}}) nicht Mitglied _irgendeiner_ dieser Kategorien sind.

Die Inhaltskategorien werden verwendet, um das _Inhaltsmodell_ von Elementen zu definieren, mit anderen Worten, was jedes Element als Nachkommen enthalten kann. Beispielsweise kann ein `<p>`-Element nur _Phrasierungsinhalte_ enthalten, während ein `<div>`-Element _Flussinhalte_ enthalten kann.

Es gibt sieben Haupt-Inhaltskategorien, die durch das folgende Venn-Diagramm zusammengefasst werden können:

![Ein Venn-Diagramm, das zeigt, wie die verschiedenen Inhaltskategorien interagieren. Die folgenden Abschnitte erklären diese Beziehungen im Text.](content_categories_venn.png)

> [!NOTE]
> Eine ausführlichere Diskussion dieser Inhaltskategorien und ihrer vergleichenden Funktionen geht über den Rahmen dieses Artikels hinaus; möglicherweise möchten Sie die [relevanten Teile der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/dom.html#kinds-of-content) lesen.

## Metadaten-Inhalt

Elemente, die zur Kategorie _Metadaten-Inhalt_ gehören, ändern die Darstellung oder das Verhalten des restlichen Dokuments, richten Links zu anderen Dokumenten ein oder vermitteln andere _Out-of-Band_-Informationen. Alles im {{htmlelement("head")}}, einschließlich `<title>`, `<link>`, `<script>`, `<style>` und der weniger gebräuchlichen `<base>`, ist Metadaten-Inhalt. Es gibt ein `<meta>`-Element für Metadaten, die nicht durch diese anderen Elemente dargestellt werden können.

Die Metadaten-Elemente sind:

- {{HTMLElement("base")}}
- {{HTMLElement("link")}}
- {{HTMLElement("meta")}}
- {{HTMLElement("noscript")}}
- {{HTMLElement("script")}}
- {{HTMLElement("style")}}
- {{HTMLElement("template")}}
- {{HTMLElement("title")}}

Einige dieser Elemente gehören zu mehr als einer Inhaltskategorie. Zum Beispiel ist `<script>` Mitglied der Metadaten-, Fluss- und Phrasierungskategorien und ist ein skriptunterstützendes Element; `<script>` kann dort verwendet werden, wo Metadaten-Inhalte, Phrasierungsinhalte oder skriptunterstützende Elemente erwartet werden.

## Flussinhalt

Flussinhalt ist eine breite Kategorie, die die meisten Elemente umfasst, die innerhalb des {{HTMLElement("body")}}-Elements gehen können, einschließlich Überschriftselemente, Abschnittselemente, Phrasierungselemente, Einbettungselemente, interaktive Elemente und formularbezogene Elemente. Es umfasst auch Textknoten (aber nicht solche, die nur aus Leerzeichen bestehen).

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
- Reiner Text

Einige andere Elemente gehören zu dieser Kategorie, aber nur, wenn eine bestimmte Bedingung erfüllt ist:

- {{HTMLElement("area")}}, wenn es ein Nachkomme eines {{HTMLElement("map")}}-Elements ist
- {{HTMLElement("link")}}, wenn das [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)-Attribut vorhanden ist
- {{HTMLElement("meta")}}, wenn das [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)-Attribut vorhanden ist

## Abschnittsinhalt

Abschnittsinhalt, eine Untergruppe von Flussinhalt, erstellt einen [Abschnitt in der aktuellen Gliederung](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), der den Umfang der {{HTMLElement("header")}}- und {{HTMLElement("footer")}}-Elemente definiert.

Die Abschnittselemente sind:

- {{HTMLElement("article")}}
- {{HTMLElement("aside")}}
- {{HTMLElement("nav")}}
- {{HTMLElement("section")}}

## Überschrifteninhalt

Überschrifteninhalt, eine Untergruppe von Flussinhalt, definiert den Titel eines Abschnitts. Diese Definition gilt sowohl für Abschnitte, die durch explizite [Abschnittsinhalt](#abschnittsinhalt)-Elemente markiert sind, als auch für die, die implizit durch den Überschrifteninhalt selbst definiert sind.

Die Überschriftenelemente sind:

- {{HTMLElement("Heading_Elements", "<code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>")}}
- {{HTMLElement("hgroup")}}

> [!NOTE]
> Obwohl sie wahrscheinlich Überschrifteninhalt enthalten, sind {{HTMLElement("header")}} selbst kein Überschrifteninhalt.

## Phrasierungsinhalt

Phrasierungsinhalt, eine Untergruppe von Flussinhalt, bezieht sich auf den Text und die Auszeichnung innerhalb eines Dokuments. Sequenzen von Phrasierungsinhalten bilden Absätze.

Die Phrasierungselemente sind:

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
- Reiner Text

Einige andere Elemente gehören zu dieser Kategorie, aber nur, wenn eine bestimmte Bedingung erfüllt ist:

- {{HTMLElement("a")}}, wenn es nur Phrasierungsinhalte enthält
- {{HTMLElement("area")}}, wenn es ein Nachkomme eines {{HTMLElement("map")}}-Elements ist
- {{HTMLElement("del")}}, wenn es nur Phrasierungsinhalte enthält
- {{HTMLElement("ins")}}, wenn es nur Phrasierungsinhalte enthält
- {{HTMLElement("link")}}, wenn das [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)-Attribut vorhanden ist
- {{HTMLElement("map")}}, wenn es nur Phrasierungsinhalte enthält
- {{HTMLElement("meta")}}, wenn das [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)-Attribut vorhanden ist

## Eingebetteter Inhalt

Eingebetteter Inhalt, eine Untergruppe von Flussinhalt, importiert eine andere Ressource oder fügt Inhalte aus einer anderen Auszeichnungssprache oder einem anderen Namensraum in das Dokument ein.

Die eingebetteten Inhalts-Elemente sind:

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

Interaktiver Inhalt, eine Untergruppe von Flussinhalt, umfasst Elemente, die speziell für die Benutzerinteraktion entwickelt wurden.

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

## Spürbarer Inhalt

**Spürbarer Inhalt** ist Inhalt, der weder leer noch verborgen ist; es ist Inhalt, der angezeigt und substanziell ist. Spürbarer Inhalt wird nicht zur Definition von Inhaltsmodellen verwendet, sondern um eine allgemeine Regel zu definieren: Elemente, deren Inhaltsmodell jeden Flussinhalt oder Phrasierungsinhalt ermöglicht, sollten mindestens einen Knoten in ihrem Inhalt haben, der spürbarer Inhalt ist und nicht das `hidden`-Attribut spezifiziert hat.

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
- Reiner Text, der nicht zwischen Elemente {{Glossary("Whitespace", "Leerzeichen")}} ist

Einige Elemente gehören zu dieser Kategorie nur unter bestimmten Bedingungen:

- {{HTMLElement("audio")}}, wenn das [`controls`](/de/docs/Web/HTML/Reference/Elements/audio#controls)-Attribut vorhanden ist
- {{HTMLElement("dl")}}, wenn die Kinder des Elements mindestens eine Namens-Wert-Gruppe enthalten
- {{HTMLElement("input")}}, wenn das [type](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut nicht im versteckten Zustand ist
- {{HTMLElement("ol")}}, wenn es Kinder enthält, die mindestens ein {{HTMLElement("li")}}-Element umfassen
- {{HTMLElement("ul")}}, wenn es Kinder enthält, die mindestens ein {{HTMLElement("li")}}-Element umfassen

## Skriptunterstützende Elemente

**Skriptunterstützende Elemente** sind Elemente, die nicht direkt zu einer gerenderten Ausgabe des Dokuments beitragen. Stattdessen unterstützen sie Skripte, indem sie entweder Skriptcode direkt oder durch Skripte verwendete Daten enthalten oder spezifizieren. Fast alle Elemente, einschließlich derjenigen, die nur bestimmte Elemente aufnehmen (wie {{HTMLElement("ul")}}, das {{HTMLElement("li")}}-Elemente aufnimmt), können skriptunterstützende Elemente enthalten.

Die skriptunterstützenden Elemente sind:

- {{HTMLElement("script")}}
- {{HTMLElement("template")}}

## Formularassoziierte Inhalte

Formularassoziierte Inhalte sind eine Untergruppe von Flussinhalten, die aus Elementen besteht, die einen Formularbesitzer haben und überall dort verwendet werden können, wo Flussinhalte erwartet werden. Ein Formularbesitzer ist entweder das enthaltende {{HTMLElement("form")}}-Element oder das `<form>`, dessen `id` im `form`-Attribut des Elements angegeben ist.

Die formularassoziierten Elemente sind:

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}}
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}
- {{HTMLElement("img")}}

Diese Kategorie enthält mehrere Unterkategorien:

- gelistet
  - : Elemente, die in den Sammlungen [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements) und [`HTMLFieldSetElement.elements`](/de/docs/Web/API/HTMLFieldSetElement/elements) aufgeführt sind. Enthält {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}} und {{HTMLElement("textarea")}}.
- submitfähig
  - : Elemente, die zur Erstellung des Formulardatensatzes verwendet werden können, wenn das Formular gesendet wird. Enthält {{HTMLElement("button")}}, {{HTMLElement("input")}}, {{HTMLElement("select")}} und {{HTMLElement("textarea")}}.
- rücksetzbar
  - : Elemente, die betroffen sein können, wenn ein Formular zurückgesetzt wird. Enthält {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}} und {{HTMLElement("textarea")}}.
- autocapitalize-und-autocorrect-vererbend
  - : Elemente, die die Attribute [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize) und [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) von ihrem Formularbesitzer erben. Enthält {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}} und {{HTMLElement("textarea")}}.
- Label-zuweisbar
  - : Elemente, die mit {{HTMLElement("label")}}-Elementen verknüpft werden können. Enthält {{HTMLElement("button")}}, {{HTMLElement("input")}} (alle Typen außer `hidden`), {{HTMLElement("meter")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}} und {{HTMLElement("textarea")}}.

## Transparentes Inhaltsmodell

Wenn ein Element ein transparentes Inhaltsmodell hat, müssen seine Inhalte so strukturiert sein, dass sie gültiges HTML wären, selbst wenn das transparente Element entfernt und durch die Kindelemente ersetzt würde.

Zum Beispiel sind die {{HTMLElement("del")}} und {{HTMLElement("ins")}} Elemente transparent:

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
