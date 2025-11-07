---
title: Inhaltskategorien
slug: Web/HTML/Guides/Content_categories
l10n:
  sourceCommit: e66301dff87e1ac68bd5e6e9dace12ead3eded6f
---

Die meisten [HTML](/de/docs/Web/HTML)-Elemente gehören zu einer oder mehreren **Inhaltskategorien** — diese Kategorien gruppieren Elemente, die gemeinsame Merkmale teilen. Dies ist eine lose Gruppierung (sie schafft tatsächlich keine Beziehung zwischen den Elementen dieser Kategorien), aber sie helfen, das gemeinsame Verhalten der Kategorien und ihre zugehörigen Regeln zu definieren und zu beschreiben. Es ist möglich, dass Elemente (wie z.B. {{HTMLElement("track")}}) _keiner_ dieser Kategorien angehören.

Die Inhaltskategorien werden verwendet, um das _Inhaltsmodell_ von Elementen zu definieren, also was jedes Element als Nachkommen aufnehmen kann. Ein `<p>`-Element kann beispielsweise nur _phrasing content_ enthalten, während ein `<div>`-Element _flow content_ enthalten kann.

Es gibt sieben Hauptinhaltskategorien, die durch das untenstehende Venn-Diagramm zusammengefasst werden können:

![Ein Venn-Diagramm, das zeigt, wie die verschiedenen Inhaltskategorien miteinander in Beziehung stehen. Die folgenden Abschnitte erklären diese Beziehungen im Text.](content_categories_venn.png)

> [!NOTE]
> Eine detailliertere Diskussion dieser Inhaltskategorien und ihrer vergleichenden Funktionalitäten ist über den Umfang dieses Artikels hinaus; dazu möchten Sie vielleicht die [relevanten Teile der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/dom.html#kinds-of-content) lesen.

## Metadateninhalt

Elemente, die zur Kategorie _Metadateninhalt_ gehören, ändern die Darstellung oder das Verhalten des restlichen Dokuments, stellen Verbindungen zu anderen Dokumenten her oder übermitteln andere _out-of-band_-Informationen. Alles, was im {{htmlelement("head")}} steht, einschließlich `<title>`, `<link>`, `<script>`, `<style>` und dem weniger verwendeten `<base>`, ist Metadateninhalt. Es gibt ein `<meta>`-Element für Metadaten, die nicht durch diese anderen Elemente dargestellt werden können.

Die Metadaten-Elemente sind:

- {{HTMLElement("base")}}
- {{HTMLElement("link")}}
- {{HTMLElement("meta")}}
- {{HTMLElement("noscript")}}
- {{HTMLElement("script")}}
- {{HTMLElement("style")}}
- {{HTMLElement("template")}}
- {{HTMLElement("title")}}

Einige dieser Elemente gehören zu mehr als einer Inhaltskategorie. Zum Beispiel ist `<script>` ein Mitglied der Kategorien Metadaten, Flow und Phrasing Content und ist ein skriptunterstützendes Element; `<script>` kann verwendet werden, wo Metadateninhalt, Phrasing Content oder skriptunterstützende Elemente erwartet werden.

## Flow-Inhalt

Flow-Inhalt ist eine breite Kategorie, die die meisten Elemente umfasst, die im {{HTMLElement("body")}}-Element enthalten sein können, einschließlich Überschriftenelementen, Abschnittselementen, Phrasing-Elementen, Einbettungselementen, interaktiven Elementen und formularbezogenen Elementen. Es enthält auch Textknoten (jedoch nicht diejenigen, die nur aus Leerzeichen bestehen).

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

Einige andere Elemente gehören zu dieser Kategorie, jedoch nur, wenn eine bestimmte Bedingung erfüllt ist:

- {{HTMLElement("area")}}, wenn es ein Nachkomme eines {{HTMLElement("map")}}-Elements ist
- {{HTMLElement("link")}}, wenn das [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)-Attribut vorhanden ist
- {{HTMLElement("meta")}}, wenn das [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)-Attribut vorhanden ist

## Abschnittinhalt

Abschnittinhalt, ein Unterkategorie von Flow-Inhalt, erstellt einen [Abschnitt in der aktuellen Gliederung](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), der den Umfang von {{HTMLElement("header")}}- und {{HTMLElement("footer")}}-Elementen definiert.

Die Abschnittselemente sind:

- {{HTMLElement("article")}}
- {{HTMLElement("aside")}}
- {{HTMLElement("nav")}}
- {{HTMLElement("section")}}

## Überschrifteninhalt

Überschrifteninhalt, eine Unterkategorie von Flow-Inhalt, definiert den Titel eines Abschnitts. Diese Definition gilt sowohl für Abschnitte, die durch ein explizites [Abschnittsinhaltelement](#abschnittinhalt) markiert sind, als auch für solche, die implizit durch den Überschrifteninhalt selbst definiert sind.

Die Überschriftenelemente sind:

- {{HTMLElement("Heading_Elements", "<code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>")}}
- {{HTMLElement("hgroup")}}

> [!NOTE]
> Obwohl sie wahrscheinlich Überschrifteninhalt enthalten, ist {{HTMLElement("header")}} selbst kein Überschrifteninhalt.

## Phrasing Content

Phrasing Content, eine Unterkategorie von Flow Content, bezieht sich auf den Text und die Auszeichnung innerhalb eines Dokuments. Sequenzen von Phrasing Content bilden Absätze.

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

Einige andere Elemente gehören zu dieser Kategorie, jedoch nur, wenn eine bestimmte Bedingung erfüllt ist:

- {{HTMLElement("a")}}, wenn es nur Phrasing Content enthält
- {{HTMLElement("area")}}, wenn es ein Nachkomme eines {{HTMLElement("map")}}-Elements ist
- {{HTMLElement("del")}}, wenn es nur Phrasing Content enthält
- {{HTMLElement("ins")}}, wenn es nur Phrasing Content enthält
- {{HTMLElement("link")}}, wenn das [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)-Attribut vorhanden ist
- {{HTMLElement("map")}}, wenn es nur Phrasing Content enthält
- {{HTMLElement("meta")}}, wenn das [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)-Attribut vorhanden ist

## Eingebetteter Inhalt

Eingebetteter Inhalt, eine Unterkategorie von Flow Content, importiert eine andere Ressource oder fügt Inhalte aus einer anderen Markup-Sprache oder einem anderen Namensraum in das Dokument ein.

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

Interaktiver Inhalt, eine Unterkategorie von Flow Content, umfasst Elemente, die speziell für die Interaktion mit dem Benutzer entwickelt wurden.

Die interaktiven Inhalts-Elemente sind:

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
- {{HTMLElement("input")}}, wenn das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut nicht im hidden-Zustand ist
- {{HTMLElement("object")}}, wenn das [`usemap`](/de/docs/Web/HTML/Reference/Elements/object#usemap)-Attribut vorhanden ist
- {{HTMLElement("video")}}, wenn das [`controls`](/de/docs/Web/HTML/Reference/Elements/video#controls)-Attribut vorhanden ist

## Spürbarer Inhalt

**Spürbarer Inhalt** ist Inhalt, der weder leer noch verborgen ist; es ist Inhalt, der gerendert und substanziell ist. Spürbarer Inhalt wird nicht zur Definition von Inhaltsmodellen verwendet, sondern zur Definition einer allgemeinen Regel: Elemente, deren Inhaltsmodell jeglichen Flow Content oder Phrasing Content zulässt, sollten mindestens einen Knoten in ihrem Inhalt haben, der spürbarer Inhalt ist und nicht das `hidden`-Attribut angegeben hat.

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
- Klartext, der kein zwischen den Elementen liegendes {{Glossary("Whitespace", "Leerraum")}} ist

Einige Elemente gehören zu dieser Kategorie nur unter bestimmten Bedingungen:

- {{HTMLElement("audio")}}, wenn das [`controls`](/de/docs/Web/HTML/Reference/Elements/audio#controls)-Attribut vorhanden ist
- {{HTMLElement("dl")}}, wenn die Kinder des Elements mindestens eine Name-Wert-Gruppe enthalten
- {{HTMLElement("input")}}, wenn das [type](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut nicht im hidden-Zustand ist
- {{HTMLElement("ol")}}, wenn seine Kinder mindestens ein {{HTMLElement("li")}}-Element enthalten
- {{HTMLElement("ul")}}, wenn seine Kinder mindestens ein {{HTMLElement("li")}}-Element enthalten

## Skriptunterstützende Elemente

**Skriptunterstützende Elemente** sind Elemente, die nicht direkt zum gerenderten Ausgabedokument beitragen. Stattdessen dienen sie zur Unterstützung von Skripten, entweder indem sie Skriptcode direkt enthalten oder spezifizieren oder Daten angeben, die von Skripten verwendet werden. Fast alle Elemente, einschließlich derer, die nur bestimmte Elemente aufnehmen (z. B. {{HTMLElement("ul")}}, das {{HTMLElement("li")}}-Elemente aufnimmt), können skriptunterstützende Elemente enthalten.

Die skriptunterstützenden Elemente sind:

- {{HTMLElement("script")}}
- {{HTMLElement("template")}}

## Formularassoziierter Inhalt

Formularassoziierter Inhalt ist eine Unterkategorie von Flow Content, die aus Elementen besteht, die einen Formularbesitzer haben und überall dort verwendet werden können, wo Flow Content erwartet wird. Ein Formularbesitzer ist entweder das enthaltende {{HTMLElement("form")}}-Element oder das `<form>`, dessen `id` im `form`-Attribut des Elements angegeben ist.

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
  - : Elemente, die in den Sammlungen [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements) und [`HTMLFieldSetElement.elements`](/de/docs/Web/API/HTMLFieldSetElement/elements) aufgeführt sind. Umfasst {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}} und {{HTMLElement("textarea")}}.
- übertragbar
  - : Elemente, die zur Konstruktion des Formulardatensatzes verwendet werden können, wenn das Formular übermittelt wird. Umfasst {{HTMLElement("button")}}, {{HTMLElement("input")}}, {{HTMLElement("select")}} und {{HTMLElement("textarea")}}.
- zurücksetzbar
  - : Elemente, die betroffen sein können, wenn ein Formular zurückgesetzt wird. Umfasst {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}} und {{HTMLElement("textarea")}}.
- autocapitalize-und-autocorrect-erbende
  - : Elemente, die die Attribute [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize) und [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) von ihrem Formularbesitzer erben. Umfasst {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}} und {{HTMLElement("textarea")}}.
- beschriftbar
  - : Elemente, die mit {{HTMLElement("label")}}-Elementen assoziiert werden können. Umfasst {{HTMLElement("button")}}, {{HTMLElement("input")}} (alle Typen außer `hidden`), {{HTMLElement("meter")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}} und {{HTMLElement("textarea")}}.

## Transparenter Inhaltsmodell

Zusätzlich zu den aufgeführten Inhaltskategorien kann das Inhaltsmodell eines Elements auch als "transparent" definiert werden. Wenn der zulässige Inhalt eines Elements X "transparent" ist, betrachten wir das Elternteil von X. Wir schneiden den zulässigen Inhalt des Elternteils von X mit den Inhaltskategorien von X, und das Ergebnis ist, was "transparent" in diesem Kontext bedeutet. Wenn das Elternteil von X auch ein transparentes Inhaltsmodell hat, fahren wir im Baum nach oben fort, bis wir ein nicht transparentes Inhaltsmodell finden. Wenn es kein solches Elternteil gibt, bedeutet "transparent" "Flow Content".

Ein Beispiel: Ein {{HTMLElement("ruby")}}-Element akzeptiert Phrasing Content. Das {{HTMLElement("ins")}} ist dann in der Kategorie Phrasing Content, wenn es nur Phrasing Content enthält. Folglich kann ein {{HTMLElement("ins")}} in ein {{HTMLElement("ruby")}}-Element eingebettet werden. Das `<ins>`-Element erlaubt "transparenten" Inhalt, was beim Einbetten in `<ruby>` "Phrasing Content" bedeutet. Allerdings sind {{HTMLElement("rt")}}-Elemente kein Phrasing Content. Folglich kann ein {{HTMLElement("rt")}} nicht in diesem `<ins>`-Element enthalten sein, obwohl sowohl `<rt>` als auch `<ins>` innerhalb `<ruby>` sein können, und `<ins>` transparent ist.

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

Transparent ist ein _Inhaltsmodell_, keine _Inhaltskategorie_, daher definiert es nur, was ein Element enthalten kann, nicht wo das Element platziert werden kann. Das heißt, beim Bestimmen der Zulässigkeit von Elementkindern können Sie nicht "durch" transparente Kinder "sehen". Zum Beispiel akzeptiert ein {{HTMLElement("ul")}}-Element nur {{HTMLElement("li")}}-Elemente und skriptunterstützende Elemente und erlaubt kein `<del>` oder `<ins>`, selbst wenn `<del>` nur `<li>`-Elemente enthält.

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
