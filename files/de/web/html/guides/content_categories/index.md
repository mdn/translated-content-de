---
title: Inhaltskategorien
slug: Web/HTML/Guides/Content_categories
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Die meisten [HTML](/de/docs/Web/HTML)-Elemente gehören zu einer oder mehreren **Inhaltskategorien** – diese Kategorien gruppieren Elemente, die gemeinsame Merkmale teilen. Dies ist eine lose Gruppierung (es wird tatsächlich keine Beziehung zwischen Elementen dieser Kategorien geschaffen), aber sie helfen dabei, das gemeinsame Verhalten der Kategorien und ihre zugehörigen Regeln zu definieren und zu beschreiben. Es ist möglich, dass Elemente (wie {{HTMLElement("track")}}) nicht Mitglied _irgendeiner_ dieser Kategorien sind.

Die Inhaltskategorien werden verwendet, um das _Inhaltsmodell_ von Elementen zu definieren, also was jedes Element als Nachkommen haben kann. Beispielsweise kann ein `<p>`-Element nur _Phrasierungsinhalt_ enthalten, während ein `<div>`-Element _Flussinhalt_ enthalten kann.

Es gibt sieben Hauptinhaltskategorien, die im folgenden Venn-Diagramm zusammengefasst sind:

![Ein Venn-Diagramm, das zeigt, wie die verschiedenen Inhaltskategorien miteinander in Beziehung stehen. Die folgenden Abschnitte erklären diese Beziehungen im Text.](content_categories_venn.png)

> [!NOTE]
> Eine ausführlichere Diskussion dieser Inhaltskategorien und ihrer vergleichenden Funktionalitäten geht über den Umfang dieses Artikels hinaus; falls Sie daran interessiert sind, lesen Sie bitte die [relevanten Teile der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/dom.html#kinds-of-content).

## Metadateninhalt

Elemente, die zur Kategorie _Metadateninhalt_ gehören, ändern die Darstellung oder das Verhalten des restlichen Dokuments, richten Links zu anderen Dokumenten ein oder vermitteln andere _außerhalb des Dokuments befindliche_ Informationen. Alles im {{htmlelement("head")}}, einschließlich `<title>`, `<link>`, `<script>`, `<style>` und dem weniger verwendeten `<base>`, ist Metadateninhalt. Es gibt ein `<meta>`-Element für Metadaten, die durch diese anderen Elemente nicht dargestellt werden können.

Die Metadaten-Elemente sind:

- {{HTMLElement("base")}}
- {{HTMLElement("link")}}
- {{HTMLElement("meta")}}
- {{HTMLElement("noscript")}}
- {{HTMLElement("script")}}
- {{HTMLElement("style")}}
- {{HTMLElement("template")}}
- {{HTMLElement("title")}}

Einige dieser Elemente gehören mehr als einer Inhaltskategorie an. Zum Beispiel ist `<script>` Mitglied der Kategorien Metadaten, Fluss- und Phrasierungsinhalt und ist ein skriptunterstützendes Element; `<script>` kann verwendet werden, wo Metadateninhalt, Phrasierungsinhalt oder skriptunterstützende Elemente erwartet werden.

## Flussinhalt

Flussinhalt ist eine breite Kategorie, die die meisten Elemente umfasst, die innerhalb des {{HTMLElement("body")}}-Elements platziert werden können, einschließlich überschriftenbasierter Elemente, Abschnittselemente, Phrasierungselemente, Einbettungselemente, interaktiver Elemente und formularbezogener Elemente. Es enthält auch Textknoten (aber nicht jene, die nur aus Leerzeichen bestehen).

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

- {{HTMLElement("area")}}, wenn es ein Nachfahre eines {{HTMLElement("map")}}-Elements ist
- {{HTMLElement("link")}}, wenn das [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)-Attribut vorhanden ist
- {{HTMLElement("meta")}}, wenn das [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)-Attribut vorhanden ist

## Abschnittsinhalt

Abschnittsinhalt, eine Unterkategorie des Flussinhalts, erstellt einen [Abschnitt in der aktuellen Gliederung](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), der den Geltungsbereich von {{HTMLElement("header")}}- und {{HTMLElement("footer")}}-Elementen definiert.

Die Abschnittselemente sind:

- {{HTMLElement("article")}}
- {{HTMLElement("aside")}}
- {{HTMLElement("nav")}}
- {{HTMLElement("section")}}

## Überschriftselemente

Überschriftselemente, eine Unterkategorie des Flussinhalts, definieren den Titel eines Abschnitts. Diese Definition gilt sowohl für Abschnitte, die durch explizite [Abschnittsinhalt](#abschnittsinhalt)-Elemente markiert sind, als auch für solche, die implizit durch den Überschrifteninhalt selbst definiert sind.

Die Überschriftselemente sind:

- {{HTMLElement("Heading_Elements", "<code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>")}}
- {{HTMLElement("hgroup")}}

> [!NOTE]
> Obwohl wahrscheinlich Überschrifteninhalt enthalten, ist das {{HTMLElement("header")}}-Element selbst kein Überschrifteninhalt.

## Phrasierungsinhalt

Phrasierungsinhalt, eine Unterkategorie des Flussinhalts, bezieht sich auf den Text und das Markup innerhalb eines Dokuments. Folgen von Phrasierungsinhalt ergeben Absätze.

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

- {{HTMLElement("a")}}, wenn es nur Phrasierungsinhalt enthält
- {{HTMLElement("area")}}, wenn es ein Nachfahre eines {{HTMLElement("map")}}-Elements ist
- {{HTMLElement("del")}}, wenn es nur Phrasierungsinhalt enthält
- {{HTMLElement("ins")}}, wenn es nur Phrasierungsinhalt enthält
- {{HTMLElement("link")}}, wenn das [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)-Attribut vorhanden ist
- {{HTMLElement("map")}}, wenn es nur Phrasierungsinhalt enthält
- {{HTMLElement("meta")}}, wenn das [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)-Attribut vorhanden ist

## Eingebetteter Inhalt

Eingebetteter Inhalt, eine Unterkategorie des Flussinhalts, importiert eine andere Ressource oder fügt Inhalte aus einer anderen Markup-Sprache oder einem anderen Namensraum in das Dokument ein.

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

Interaktiver Inhalt, eine Unterkategorie des Flussinhalts, umfasst Elemente, die speziell für die Interaktion mit Benutzern konzipiert sind.

Die interaktiven Inhaltselemente sind:

- {{HTMLElement("button")}}
- {{HTMLElement("details")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("iframe")}}
- {{HTMLElement("label")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}

Einige Elemente gehören zu dieser Kategorie nur unter spezifischen Bedingungen:

- {{HTMLElement("a")}}, wenn das [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut vorhanden ist
- {{HTMLElement("audio")}}, wenn das [`controls`](/de/docs/Web/HTML/Reference/Elements/audio#controls)-Attribut vorhanden ist
- {{HTMLElement("img")}}, wenn das [`usemap`](/de/docs/Web/HTML/Reference/Elements/img#usemap)-Attribut vorhanden ist
- {{HTMLElement("input")}}, wenn das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut nicht im verborgenen Zustand ist
- {{HTMLElement("object")}}, wenn das [`usemap`](/de/docs/Web/HTML/Reference/Elements/object#usemap)-Attribut vorhanden ist
- {{HTMLElement("video")}}, wenn das [`controls`](/de/docs/Web/HTML/Reference/Elements/video#controls)-Attribut vorhanden ist

## Greifbarer Inhalt

**Greifbarer Inhalt** ist Inhalt, der weder leer noch verborgen ist; es ist Inhalt, der gerendert und substanziell ist. Greifbarer Inhalt wird nicht zur Definition von Inhaltsmodellen verwendet, sondern zur Festlegung einer allgemeinen Regel: Elemente, deren Inhaltsmodell beliebigen Flussinhalt oder Phrasierungsinhalt zulässt, sollten mindestens einen Knoten in ihren Inhalten haben, der greifbarer Inhalt ist und der das `hidden`-Attribut nicht spezifiziert hat.

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
- Reiner Text, der keine inter-element {{Glossary("Whitespace", "Leerzeichen")}} ist

Einige Elemente gehören zu dieser Kategorie nur unter spezifischen Bedingungen:

- {{HTMLElement("audio")}}, wenn das [`controls`](/de/docs/Web/HTML/Reference/Elements/audio#controls)-Attribut vorhanden ist
- {{HTMLElement("dl")}}, wenn die Kinder des Elements mindestens eine Name-Wert-Gruppe enthalten
- {{HTMLElement("input")}}, wenn das [type](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut nicht im verborgenen Zustand ist
- {{HTMLElement("ol")}}, wenn es Kinder enthält, die mindestens ein {{HTMLElement("li")}}-Element einschließen
- {{HTMLElement("ul")}}, wenn es Kinder enthält, die mindestens ein {{HTMLElement("li")}}-Element einschließen

## Skriptunterstützende Elemente

**Skriptunterstützende Elemente** sind Elemente, die nicht direkt zum gerenderten Output eines Dokuments beitragen. Stattdessen dienen sie zur Unterstützung von Skripten, indem sie entweder Skriptcode direkt enthalten oder spezifizieren oder Daten bereitstellen, die von Skripten verwendet werden. Fast alle Elemente, einschließlich solcher, die nur bestimmte Elemente aufnehmen (wie {{HTMLElement("ul")}}, das {{HTMLElement("li")}}-Elemente aufnimmt), können skriptunterstützende Elemente enthalten.

Die skriptunterstützenden Elemente sind:

- {{HTMLElement("script")}}
- {{HTMLElement("template")}}

## Formularassoziierter Inhalt

Formularassoziierter Inhalt ist eine Unterkategorie des Flussinhalts, die aus Elementen besteht, die einen Formulareigentümer haben und überall dort verwendet werden können, wo Flussinhalt erwartet wird. Ein Formulareigentümer ist entweder das enthaltende {{HTMLElement("form")}}-Element oder das `<form>`, dessen `id` im `form`-Attribut des Elements angegeben ist.

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

- aufgelistet
  - : Elemente, die in den Sammlungen [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements) und [`HTMLFieldSetElement.elements`](/de/docs/Web/API/HTMLFieldSetElement/elements) aufgelistet sind. Beinhaltet {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}}, und {{HTMLElement("textarea")}}.
- submit-fähig
  - : Elemente, die zur Konstruktion des Formulardatensatzes verwendet werden können, wenn das Formular abgesendet wird. Beinhaltet {{HTMLElement("button")}}, {{HTMLElement("input")}}, {{HTMLElement("select")}}, und {{HTMLElement("textarea")}}.
- zurücksetzbar
  - : Elemente, die betroffen sein können, wenn ein Formular zurückgesetzt wird. Beinhaltet {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}}, und {{HTMLElement("textarea")}}.
- autocapitalize-und-autocorrect-vererbend
  - : Elemente, die die Attribute [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize) und [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) von ihrem Formulareigentümer erben. Beinhaltet {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}}, und {{HTMLElement("textarea")}}.
- beschriftbar
  - : Elemente, die mit {{HTMLElement("label")}}-Elementen assoziiert werden können. Beinhaltet {{HTMLElement("button")}}, {{HTMLElement("input")}} (alle Typen außer `hidden`), {{HTMLElement("meter")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}}, und {{HTMLElement("textarea")}}.

## Transparente Inhaltsmodell

Wenn ein Element ein transparentes Inhaltsmodell hat, müssen seine Inhalte so strukturiert sein, dass sie gültiges HTML wären, auch wenn das transparente Element entfernt und durch die Kindelemente ersetzt wird.

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
