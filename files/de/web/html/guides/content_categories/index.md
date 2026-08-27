---
title: Inhaltskategorien
slug: Web/HTML/Guides/Content_categories
l10n:
  sourceCommit: ba3c8980510073ee92674aa71cb2c8c5b71294ab
---

Die meisten [HTML](/de/docs/Web/HTML)-Elemente gehören zu einer oder mehreren **Inhaltskategorien** – diese Kategorien gruppieren Elemente, die gemeinsame Merkmale teilen. Dies ist eine lose Gruppierung (sie schafft tatsächlich keine Beziehung zwischen den Elementen dieser Kategorien), aber sie helfen, das Verhalten der Kategorien und ihre zugehörigen Regeln zu definieren und zu beschreiben. Es ist möglich, dass [Elemente zu _keiner_ dieser Kategorien gehören](#elemente_ohne_kategorie).

Die Inhaltskategorien werden verwendet, um das _Inhaltsmodell_ von Elementen zu definieren, mit anderen Worten, welche Nachkommen jedes Element haben kann. Zum Beispiel kann das `<p>`-Element nur _Textinhalt_ enthalten, während das `<div>`-Element _Flussinhalt_ enthalten kann. Einige Elemente wie `<ins>` haben ein [_transparentes_ Inhaltsmodell](#transparentes_inhaltsmodell).

Es gibt sieben Hauptinhaltskategorien, die mit dem Venn-Diagramm unten zusammengefasst werden können:

![Ein Venn-Diagramm, das zeigt, wie die verschiedenen Inhaltskategorien zusammenhängen. Die folgenden Abschnitte erklären diese Beziehungen in Textform.](content_categories_venn.png)

> [!NOTE]
> Eine detailliertere Diskussion dieser Inhaltskategorien und ihrer vergleichenden Funktionalitäten liegt außerhalb des Umfangs dieses Artikels; dafür können Sie die [relevanten Teile der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/dom.html#kinds-of-content) lesen.

## Metadateninhalt

Elemente, die zur Kategorie des _Metadateninhalts_ gehören, modifizieren die Darstellung oder das Verhalten des restlichen Dokuments, richten Links zu anderen Dokumenten ein oder vermitteln andere _außerband_ Informationen. Alles im {{htmlelement("head")}}, einschließlich `<title>`, `<link>`, `<script>`, `<style>` und dem weniger genutzten `<base>`, ist Metadateninhalt. Es gibt ein `<meta>`-Element für Metadaten, die nicht durch diese anderen Elemente dargestellt werden können.

Die Metadatenelemente sind:

- {{HTMLElement("base")}}
- {{HTMLElement("link")}}
- {{HTMLElement("meta")}}
- {{HTMLElement("noscript")}}
- {{HTMLElement("script")}}
- {{HTMLElement("style")}}
- {{HTMLElement("template")}}
- {{HTMLElement("title")}}

Einige dieser Elemente gehören zu mehr als einer Inhaltskategorie. Zum Beispiel ist `<script>` ein Mitglied der Metadaten-, Fluss- und Textinhaltskategorien und ist ein skriptunterstützendes Element; `<script>` kann verwendet werden, wo Metadateninhalt, Textinhalt oder skriptunterstützende Elemente erwartet werden.

## Flussinhalt

Flussinhalt ist eine breite Kategorie, die die meisten Elemente umfasst, die innerhalb des {{HTMLElement("body")}}-Elements stehen können, einschließlich der Überschriftselemente, Abschnittselemente, Textelelemente, Einbettungselemente, interaktiven Elemente und formularelevanten Elemente. Es schließt auch Textknoten ein (aber nicht solche, die nur aus Leerzeichen bestehen).

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
- Reiner Text

Einige andere Elemente gehören zu dieser Kategorie, aber nur, wenn eine bestimmte Bedingung erfüllt ist:

- {{HTMLElement("area")}}, wenn es ein Nachfahre eines {{HTMLElement("map")}}-Elements ist
- {{HTMLElement("link")}}, wenn das [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)-Attribut vorhanden ist
- {{HTMLElement("meta")}}, wenn das [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)-Attribut vorhanden ist

## Abschnittsinhalt

Der Abschnittsinhalt, eine Teilmenge des Flussinhalts, erzeugt einen [Abschnitt in der aktuellen Gliederung](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), der den Umfang der {{HTMLElement("header")}}- und {{HTMLElement("footer")}}-Elemente definiert.

Die Abschnittselemente sind:

- {{HTMLElement("article")}}
- {{HTMLElement("aside")}}
- {{HTMLElement("nav")}}
- {{HTMLElement("section")}}

## Überschrifteninhalt

Der Überschrifteninhalt, eine Teilmenge der Flussinhalte, definiert den Titel eines Abschnitts. Diese Definition gilt sowohl für Abschnitte, die durch ein explizites [Abschnittsinhaltelement](#abschnittsinhalt) markiert sind, als auch für solche, die implizit durch den Überschrifteninhalt selbst definiert sind.

Die Überschriftselemente sind:

- {{HTMLElement("Heading_Elements", "<code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>")}}
- {{HTMLElement("hgroup")}}

> [!NOTE]
> Obwohl es wahrscheinlich ist, dass Überschrifteninhalt enthalten ist, ist das {{HTMLElement("header")}} selbst kein Überschrifteninhalt.

## Textinhalt

Der Textinhalt, eine Teilmenge des Flussinhalts, bezieht sich auf den Text und die Markierungen innerhalb eines Dokuments. Folgen von Textinhalt bilden Absätze.

Die Textelemente sind:

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

- {{HTMLElement("a")}}, wenn es nur Textinhalt enthält
- {{HTMLElement("area")}}, wenn es ein Nachfahre eines {{HTMLElement("map")}}-Elements ist
- {{HTMLElement("del")}}, wenn es nur Textinhalt enthält
- {{HTMLElement("ins")}}, wenn es nur Textinhalt enthält
- {{HTMLElement("link")}}, wenn das [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)-Attribut vorhanden ist
- {{HTMLElement("map")}}, wenn es nur Textinhalt enthält
- {{HTMLElement("meta")}}, wenn das [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop)-Attribut vorhanden ist

## Eingebetteter Inhalt

Eingebetteter Inhalt, eine Teilmenge des Flussinhalts, importiert eine andere Ressource oder fügt Inhalt aus einer anderen Markupsprache oder einem anderen Namensraum in das Dokument ein.

Die eingebetteten Inhaltslemente sind:

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

Interaktiver Inhalt, eine Teilmenge des Flussinhalts, umfasst Elemente, die speziell für die Benutzerinteraktion entwickelt wurden.

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

## Fassbarer Inhalt

**Fassbarer Inhalt** ist Inhalt, der weder leer noch verborgen ist; er ist Inhalt, der gerendert und substanziell ist. Fassbarer Inhalt wird nicht zur Definition von Inhaltsmodellen verwendet, sondern zur Definition einer allgemeinen Regel: Elemente, deren Inhaltsmodell beliebigen Flussinhalt oder Textinhalt erlaubt, sollten mindestens einen Knoten in ihrem Inhalt haben, der fassbarer Inhalt ist und nicht das `hidden`-Attribut spezifiziert hat.

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
- Reiner Text, der nicht inter-element {{Glossary("Whitespace", "whitespace")}} ist

Einige Elemente gehören nur unter bestimmten Bedingungen zu dieser Kategorie:

- {{HTMLElement("audio")}}, wenn das [`controls`](/de/docs/Web/HTML/Reference/Elements/audio#controls)-Attribut vorhanden ist
- {{HTMLElement("dl")}}, wenn die Kinder des Elements mindestens eine Name-Wert-Gruppe enthalten
- {{HTMLElement("input")}}, wenn das [type](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut nicht im versteckten Zustand ist
- {{HTMLElement("ol")}}, wenn seine Kinder mindestens ein {{HTMLElement("li")}}-Element enthalten
- {{HTMLElement("ul")}}, wenn seine Kinder mindestens ein {{HTMLElement("li")}}-Element enthalten

## Elemente ohne Kategorie

Mehrere Elemente gehören zu _keiner_ Inhaltskategorie. Dazu gehören:

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

**Skriptunterstützende Elemente** sind Elemente, die nicht direkt zur gerenderten Ausgabe eines Dokuments beitragen. Stattdessen dienen sie dazu, Skripte zu unterstützen, entweder durch das direkte Enthalten oder Spezifizieren von Skriptcode oder durch das Spezifizieren von Daten, die von Skripten verwendet werden. Fast alle Elemente, einschließlich derjenigen, die nur spezifische Elemente aufnehmen (wie {{HTMLElement("ul")}}, das {{HTMLElement("li")}}-Elemente enthält), können skriptunterstützende Elemente enthalten.

Die skriptunterstützenden Elemente sind:

- {{HTMLElement("script")}}
- {{HTMLElement("template")}}

## Formularassoziierter Inhalt

Der formularassoziierte Inhalt ist eine Teilmenge des Flussinhalts, die aus Elementen besteht, die einen Formularbesitzer haben und überall dort verwendet werden können, wo Flussinhalte erwartet werden. Ein Formularbesitzer ist entweder das umgebende {{HTMLElement("form")}}-Element oder das `<form>`, dessen `id` im `form`-Attribut des Elements angegeben ist.

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
  - : Elemente, die in den Sammlungen [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements) und [`HTMLFieldSetElement.elements`](/de/docs/Web/API/HTMLFieldSetElement/elements) aufgeführt sind. Beinhaltet {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}}, und {{HTMLElement("textarea")}}.
- einreichbar
  - : Elemente, die zur Konstruktion des Formulardatensatzes verwendet werden können, wenn das Formular übermittelt wird. Beinhaltet {{HTMLElement("button")}}, {{HTMLElement("input")}}, {{HTMLElement("select")}}, und {{HTMLElement("textarea")}}.
- zurücksetzbar
  - : Elemente, die betroffen sein können, wenn ein Formular zurückgesetzt wird. Beinhaltet {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}}, und {{HTMLElement("textarea")}}.
- autocapitalize-and-autocorrect-erbend
  - : Elemente, die die Attribute [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize) und [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) von ihrem Formularbesitzer übernehmen. Beinhaltet {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}}, und {{HTMLElement("textarea")}}.
- beschriftbar
  - : Elemente, die mit {{HTMLElement("label")}}-Elementen assoziiert werden können. Beinhaltet {{HTMLElement("button")}}, {{HTMLElement("input")}} (alle Typen außer `hidden`), {{HTMLElement("meter")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}}, und {{HTMLElement("textarea")}}.

## Transparentes Inhaltsmodell

Zusätzlich zu den aufgelisteten Inhaltskategorien kann auch das Inhaltsmodell eines Elements als "transparent" definiert sein. Wenn der zulässige Inhalt eines Elements X "transparent" ist, schauen wir auf das Elternelement von X. Wir schneiden den zulässigen Inhalt des Elternelements von X mit den Inhaltskategorien von X, und das Ergebnis ist, was "transparent" in diesem Kontext bedeutet. Wenn das Elternelement von X ebenfalls ein transparentes Inhaltsmodell hat, gehen wir den Baum weiter hinauf, bis wir ein nicht-transparentes Inhaltsmodell finden. Wenn es kein solches Elternelement gibt, bedeutet "transparent" "Flussinhalt".

Zum Beispiel akzeptiert ein {{HTMLElement("ruby")}}-Element Textinhalt. Das {{HTMLElement("ins")}}-Element gehört zur Kategorie des Textinhalts, wenn es nur Textinhalt enthält. Daher kann ein {{HTMLElement("ins")}}-Element innerhalb eines {{HTMLElement("ruby")}}-Elements platziert werden. Der erlaubte Inhalt des `<ins>`-Elements ist "transparent", was, wenn es in `<ruby>` verschachtelt ist, "Textinhalt" bedeutet. {{HTMLElement("rt")}}-Elemente sind jedoch kein Textinhalt. Daher kann ein {{HTMLElement("rt")}}-Element nicht innerhalb dieses `<ins>`-Elements verschachtelt werden, auch wenn sowohl `<rt>` als auch `<ins>` innerhalb von `<ruby>` sein können und `<ins>` "transparent" ist.

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

Transparent ist ein _Inhaltsmodell_, keine _Inhaltskategorie_, es definiert also nur, was ein Element enthalten kann, nicht, wo das Element platziert werden kann. Das heißt, wenn man die Zulässigkeit der Kinder eines Elements bestimmt, kann man nicht "durch" transparente Kinder hindurchsehen. Zum Beispiel akzeptiert ein {{HTMLElement("ul")}}-Element nur {{HTMLElement("li")}}-Elemente und skriptunterstützende Elemente und erlaubt keine `<del>` oder `<ins>`, selbst wenn die `<del>` nur `<li>`-Elemente enthalten.

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
