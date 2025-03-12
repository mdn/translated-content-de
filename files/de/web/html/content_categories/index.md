---
title: Inhaltskategorien
slug: Web/HTML/Content_categories
l10n:
  sourceCommit: 25b7b2849be6f9bc821001073eb4803b72a66fe3
---

{{HTMLSidebar}}

Die meisten [HTML](/de/docs/Web/HTML)-Elemente gehören zu einer oder mehreren **Inhaltskategorien** — diese Kategorien gruppieren Elemente, die gemeinsame Merkmale teilen. Dies ist eine lose Gruppierung (sie schafft tatsächlich keine Beziehung zwischen Elementen dieser Kategorien), aber sie helfen dabei, das gemeinsame Verhalten der Kategorien und ihre zugehörigen Regeln zu definieren und zu beschreiben. Es ist möglich, dass Elemente (wie zum Beispiel {{HTMLElement("track")}}) Mitglied _keiner_ dieser Kategorien sind.

Die Inhaltskategorien werden verwendet, um das _Inhaltsmodell_ von Elementen zu definieren, also was jedes Element als Nachfahren haben kann. Zum Beispiel kann ein `<p>`-Element nur _Phraseninhalt_ enthalten, während ein `<div>`-Element _Flussinhalt_ enthalten kann.

Es gibt sieben Hauptinhaltskategorien, die mit dem folgenden Venn-Diagramm zusammengefasst werden können:

![Ein Venn-Diagramm, das zeigt, wie die verschiedenen Inhaltskategorien miteinander in Beziehung stehen. Die folgenden Abschnitte erklären diese Beziehungen im Text.](content_categories_venn.png)

> [!NOTE]
> Eine detailliertere Diskussion dieser Inhaltskategorien und ihrer vergleichbaren Funktionen liegt außerhalb des Rahmens dieses Artikels; dafür möchten Sie vielleicht die [relevanten Teile der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/dom.html#kinds-of-content) lesen.

## Metadaten-Inhalt

Elemente, die zur Kategorie _Metadaten-Inhalt_ gehören, ändern die Präsentation oder das Verhalten des restlichen Dokuments, richten Links zu anderen Dokumenten ein oder vermitteln andere _übergeordnete_ Informationen. Alles im {{htmlelement("head")}}, einschließlich des `<title>`, `<link>`, `<script>`, `<style>` und des weniger verwendeten `<base>`, ist Metadaten-Inhalt. Es gibt ein `<meta>`-Element für Metadaten, die nicht durch diese anderen Elemente dargestellt werden können.

Die Metadaten-Elemente sind:

- {{HTMLElement("base")}}
- {{HTMLElement("link")}}
- {{HTMLElement("meta")}}
- {{HTMLElement("noscript")}}
- {{HTMLElement("script")}}
- {{HTMLElement("style")}}
- {{HTMLElement("template")}}
- {{HTMLElement("title")}}

Einige dieser Elemente gehören zu mehr als einer Inhaltskategorie. Zum Beispiel ist `<script>` ein Mitglied der Metadaten-, Fluss- und Phraseninhaltskategorien und ist ein skriptunterstützendes Element; `<script>` kann dort verwendet werden, wo Metadaten-Inhalte, Phrasen-Inhalte oder skriptunterstützende Elemente erwartet werden.

## Flussinhalt

Flussinhalt ist eine breite Kategorie, die die meisten Elemente umfasst, die innerhalb des {{HTMLElement("body")}}-Elements platziert werden können, einschließlich Überschriftselemente, Abschnittselemente, Phrasenelemente, Einbettungselemente, interaktive Elemente und formularbezogene Elemente. Sie umfasst auch Textknoten (aber nicht diejenigen, die nur aus Leerzeichen bestehen).

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
- Klartext

Einige andere Elemente gehören zu dieser Kategorie, aber nur, wenn eine bestimmte Bedingung erfüllt ist:

- {{HTMLElement("area")}}, wenn es ein Nachkomme eines {{HTMLElement("map")}}-Elements ist
- {{HTMLElement("link")}}, wenn das [`itemprop`](/de/docs/Web/HTML/Global_attributes/itemprop)-Attribut vorhanden ist
- {{HTMLElement("meta")}}, wenn das [`itemprop`](/de/docs/Web/HTML/Global_attributes/itemprop)-Attribut vorhanden ist

## Abschnittsinhalte

Abschnittsinhalte, eine Unterkategorie von Flussinhalten, erstellen einen [Abschnitt im aktuellen Outline](/de/docs/Web/HTML/Element/Heading_Elements), der den Geltungsbereich von {{HTMLElement("header")}}- und {{HTMLElement("footer")}}-Elementen definiert.

Die Abschnittselemente sind:

- {{HTMLElement("article")}}
- {{HTMLElement("aside")}}
- {{HTMLElement("nav")}}
- {{HTMLElement("section")}}

## Überschrifteninhalt

Überschrifteninhalt, eine Unterkategorie von Flussinhalten, definiert den Titel eines Abschnitts. Diese Definition gilt sowohl für Abschnitte, die durch ein explizites [Abschnittsinhaltelement](#abschnittsinhalte) markiert sind, als auch für diejenigen, die implizit durch den Überschrifteninhalt selbst definiert sind.

Die Überschriftenelemente sind:

- {{HTMLElement("Heading_Elements", "<code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>")}}
- {{HTMLElement("hgroup")}}

> [!NOTE]
> Obwohl wahrscheinlich Überschrifteninhalt enthalten ist, ist das {{HTMLElement("header")}} nicht selbst ein Überschrifteninhalt.

## Phraseninhalt

Phraseninhalt, eine Unterkategorie von Flussinhalten, bezieht sich auf den Text und das Markup innerhalb eines Dokuments. Sequenzen von Phraseninhalt bilden Absätze.

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
- [Autonome benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements)
- Klartext

Einige andere Elemente gehören zu dieser Kategorie, aber nur, wenn eine bestimmte Bedingung erfüllt ist:

- {{HTMLElement("a")}}, wenn es nur Phraseninhalt enthält
- {{HTMLElement("area")}}, wenn es ein Nachkomme eines {{HTMLElement("map")}}-Elements ist
- {{HTMLElement("del")}}, wenn es nur Phraseninhalt enthält
- {{HTMLElement("ins")}}, wenn es nur Phraseninhalt enthält
- {{HTMLElement("link")}}, wenn das [`itemprop`](/de/docs/Web/HTML/Global_attributes/itemprop)-Attribut vorhanden ist
- {{HTMLElement("map")}}, wenn es nur Phraseninhalt enthält
- {{HTMLElement("meta")}}, wenn das [`itemprop`](/de/docs/Web/HTML/Global_attributes/itemprop)-Attribut vorhanden ist

## Eingebetteter Inhalt

Eingebetteter Inhalt, eine Unterkategorie von Flussinhalten, importiert eine andere Ressource oder fügt Inhalt aus einer anderen Markup-Sprache oder einem anderen Namensraum in das Dokument ein.

Die eingebetteten Inhaltelemente sind:

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

Interaktiver Inhalt, eine Unterkategorie von Flussinhalten, umfasst Elemente, die speziell für die Benutzerinteraktion entwickelt wurden.

Die interaktiven Inhaltelemente sind:

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
- {{HTMLElement("input")}}, wenn das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut nicht im versteckten Zustand ist
- {{HTMLElement("object")}}, wenn das [`usemap`](/de/docs/Web/HTML/Element/object#usemap)-Attribut vorhanden ist
- {{HTMLElement("video")}}, wenn das [`controls`](/de/docs/Web/HTML/Element/video#controls)-Attribut vorhanden ist

## Greifbarer Inhalt

**Greifbarer Inhalt** ist Inhalt, der weder leer noch verborgen ist; es ist Inhalt, der gerendert und substanziell ist. Greifbarer Inhalt wird nicht zur Definition von Inhaltsmodellen verwendet, sondern zur Definition einer allgemeinen Regel: Elemente, deren Inhaltsmodell beliebige Fluss- oder Phraseninhalte erlaubt, sollten mindestens einen Knoten in ihrem Inhalt haben, der greifbarer Inhalt ist und nicht das `hidden`-Attribut spezifiziert hat.

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
- Klartext, der keine {{Glossary("Whitespace", "Leerzeichen zwischen den Elementen")}} ist

Einige Elemente gehören zu dieser Kategorie nur unter bestimmten Bedingungen:

- {{HTMLElement("audio")}}, wenn das [`controls`](/de/docs/Web/HTML/Element/audio#controls)-Attribut vorhanden ist
- {{HTMLElement("dl")}}, wenn die Kinder des Elements mindestens eine Name-Wert-Gruppe enthalten
- {{HTMLElement("input")}}, wenn das [type](/de/docs/Web/HTML/Element/input#type)-Attribut nicht im versteckten Zustand ist
- {{HTMLElement("ol")}}, wenn seine Kinder mindestens ein {{HTMLElement("li")}}-Element enthalten
- {{HTMLElement("ul")}}, wenn seine Kinder mindestens ein {{HTMLElement("li")}}-Element enthalten

## Skriptunterstützende Elemente

**Skriptunterstützende Elemente** sind Elemente, die nicht direkt zum gerenderten Output eines Dokuments beitragen. Stattdessen dienen sie zur Unterstützung von Skripten, entweder indem sie Skriptcode direkt enthalten oder spezifizieren oder indem sie Daten angeben, die von Skripten genutzt werden. Fast alle Elemente, einschließlich solcher, die nur spezifische Elemente aufnehmen (wie {{HTMLElement("ul")}}, das {{HTMLElement("li")}}-Elemente aufnimmt), können skriptunterstützende Elemente enthalten.

Die skriptunterstützenden Elemente sind:

- {{HTMLElement("script")}}
- {{HTMLElement("template")}}

## Formularassoziierter Inhalt

Formularassoziierte Inhalte sind eine Unterkategorie von Flussinhalten, die Elemente umfassen, die einen Formular-Besitzer haben und überall dort verwendet werden können, wo Flussinhalt erwartet wird. Ein Formular-Besitzer ist entweder das beinhaltende {{HTMLElement("form")}}-Element oder das `<form>`, dessen `id` im `form`-Attribut des Elements angegeben ist.

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
  - : Elemente, die in den [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements) und [`HTMLFieldSetElement.elements`](/de/docs/Web/API/HTMLFieldSetElement/elements)-Sammlungen aufgeführt sind. Dazu gehören {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}} und {{HTMLElement("textarea")}}.
- submitbar
  - : Elemente, die zur Erstellung des Formulardatensatzes verwendet werden können, wenn das Formular abgeschickt wird. Dazu gehören {{HTMLElement("button")}}, {{HTMLElement("input")}}, {{HTMLElement("select")}} und {{HTMLElement("textarea")}}.
- rücksetzbar
  - : Elemente, die betroffen sind, wenn ein Formular zurückgesetzt wird. Dazu gehören {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}} und {{HTMLElement("textarea")}}.
- Autokapitalisierungs- und Autokorrektur-vererbende
  - : Elemente, die die [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize)- und [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect)-Attribute von ihrem Formulareigner erben. Dazu gehören {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}} und {{HTMLElement("textarea")}}.
- beschriftungsfähig
  - : Elemente, die mit {{HTMLElement("label")}}-Elementen assoziiert werden können. Dazu gehören {{HTMLElement("button")}}, {{HTMLElement("input")}} (alle Typen außer `hidden`), {{HTMLElement("meter")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}} und {{HTMLElement("textarea")}}.

## Transparentes Inhaltsmodell

Wenn ein Element ein transparentes Inhaltsmodell hat, dann müssen seine Inhalte so strukturiert sein, dass sie gültiges HTML wären, selbst wenn das transparente Element entfernt und durch die Kindelemente ersetzt würde.

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

Wenn diese Elemente entfernt würden, wäre dieses Fragment weiterhin gültiges HTML (wenn auch nicht korrektes Englisch).

```html
<p>Shopping Returns list</p>
<ul>
  <li>Oranges</li>
  <li>Toilet paper</li>
  <li>Toothpaste</li>
</ul>
```
