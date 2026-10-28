---
title: Inhaltskategorien
slug: Web/HTML/Guides/Content_categories
l10n:
  sourceCommit: b58d84c261b9cfa66d46a070ba205c53e18ee3e0
---

Die meisten [HTML-Elemente](/de/docs/Web/HTML) gehören zu einer oder mehreren **Inhaltskategorien**. Diese Kategorien gruppieren Elemente mit gemeinsamen Merkmalen. Die Gruppierung ist lose – sie stellt keine tatsächliche Beziehung zwischen den Elementen einer Kategorie her –, hilft aber dabei, ihr gemeinsames Verhalten und die zugehörigen Regeln zu definieren und zu beschreiben. Manche [Elemente gehören zu _keiner_ dieser Kategorien](#elemente_ohne_kategorie).

Die Inhaltskategorien dienen dazu, das _Inhaltsmodell_ von Elementen zu definieren, also festzulegen, welche Nachkommen ein Element enthalten darf. Beispielsweise darf das Element `<p>` nur _Phrasierungsinhalt_ enthalten, während `<div>` _Flussinhalt_ enthalten darf. Einige Elemente, etwa `<ins>`, haben ein [_transparentes_ Inhaltsmodell](#transparentes_inhaltsmodell).

Es gibt sieben Hauptkategorien für Inhalte, deren Beziehungen das folgende Venn-Diagramm zusammenfasst:

![Ein Venn-Diagramm, das die Beziehungen zwischen den verschiedenen Inhaltskategorien zeigt. Die folgenden Abschnitte erläutern diese Beziehungen im Text.](content_categories_venn.png)

> [!NOTE]
> Eine ausführlichere Erörterung dieser Inhaltskategorien und ihrer jeweiligen Funktionen würde den Rahmen dieses Artikels sprengen. Weitere Informationen finden Sie in den [entsprechenden Abschnitten der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/dom.html#kinds-of-content).

## Metadateninhalt

Elemente der Kategorie _Metadateninhalt_ ändern die Darstellung oder das Verhalten des übrigen Dokuments, stellen Verknüpfungen zu anderen Dokumenten her oder vermitteln andere Informationen, die nicht zum eigentlichen Dokumentinhalt gehören. Alles innerhalb von {{htmlelement("head")}} ist Metadateninhalt, darunter `<title>`, `<link>`, `<script>`, `<style>` und das seltener verwendete `<base>`. Für Metadaten, die sich nicht durch diese anderen Elemente darstellen lassen, gibt es das Element `<meta>`.

Die Metadatenelemente sind:

- {{HTMLElement("base")}}
- {{HTMLElement("link")}}
- {{HTMLElement("meta")}}
- {{HTMLElement("noscript")}}
- {{HTMLElement("script")}}
- {{HTMLElement("style")}}
- {{HTMLElement("template")}}
- {{HTMLElement("title")}}

Einige dieser Elemente gehören zu mehr als einer Inhaltskategorie. Beispielsweise gehört `<script>` zu den Kategorien Metadateninhalt, Flussinhalt und Phrasierungsinhalt und ist außerdem ein skriptunterstützendes Element. `<script>` kann dort verwendet werden, wo Metadateninhalt, Phrasierungsinhalt oder skriptunterstützende Elemente erwartet werden.

## Flussinhalt

Flussinhalt ist eine breite Kategorie, die die meisten Elemente umfasst, die innerhalb des Elements {{HTMLElement("body")}} stehen können. Dazu gehören Überschriftenelemente, gliedernde Elemente, Phrasierungselemente, eingebettete Elemente, interaktive Elemente und formularbezogene Elemente. Auch Textknoten gehören dazu, sofern sie nicht ausschließlich aus Leerraumzeichen bestehen.

Die Elemente mit Flussinhalt sind:

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
- {{HTMLElement("style")}}
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

Einige weitere Elemente gehören nur dann zu dieser Kategorie, wenn eine bestimmte Bedingung erfüllt ist:

- {{HTMLElement("area")}}, wenn es ein Nachkomme eines {{HTMLElement("map")}}-Elements ist
- {{HTMLElement("link")}}, wenn das Attribut [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop) vorhanden ist
- {{HTMLElement("meta")}}, wenn das Attribut [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop) vorhanden ist

## Gliederungsinhalt

Gliederungsinhalt ist eine Untergruppe des Flussinhalts. Er erzeugt einen [Abschnitt in der aktuellen Dokumentgliederung](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und legt damit den Geltungsbereich von {{HTMLElement("header")}}- und {{HTMLElement("footer")}}-Elementen fest.

Die gliedernden Elemente sind:

- {{HTMLElement("article")}}
- {{HTMLElement("aside")}}
- {{HTMLElement("nav")}}
- {{HTMLElement("section")}}

## Überschrifteninhalt

Überschrifteninhalt ist eine Untergruppe des Flussinhalts und definiert den Titel eines Abschnitts. Das gilt sowohl für Abschnitte, die durch ein explizites Element mit [Gliederungsinhalt](#gliederungsinhalt) gekennzeichnet sind, als auch für Abschnitte, die durch den Überschrifteninhalt selbst implizit definiert werden.

Die Überschriftenelemente sind:

- {{HTMLElement("Heading_Elements", "<code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>")}}
- {{HTMLElement("hgroup")}}

> [!NOTE]
> Das Element {{HTMLElement("header")}} enthält zwar wahrscheinlich Überschrifteninhalt, ist selbst aber kein Überschrifteninhalt.

## Phrasierungsinhalt

Phrasierungsinhalt ist eine Untergruppe des Flussinhalts und umfasst den Text sowie die Auszeichnung innerhalb eines Dokuments. Folgen von Phrasierungsinhalt bilden Absätze.

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

Einige weitere Elemente gehören nur dann zu dieser Kategorie, wenn eine bestimmte Bedingung erfüllt ist:

- {{HTMLElement("a")}}, wenn es ausschließlich Phrasierungsinhalt enthält
- {{HTMLElement("area")}}, wenn es ein Nachkomme eines {{HTMLElement("map")}}-Elements ist
- {{HTMLElement("del")}}, wenn es ausschließlich Phrasierungsinhalt enthält
- {{HTMLElement("ins")}}, wenn es ausschließlich Phrasierungsinhalt enthält
- {{HTMLElement("link")}}, wenn das Attribut [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop) vorhanden ist
- {{HTMLElement("map")}}, wenn es ausschließlich Phrasierungsinhalt enthält
- {{HTMLElement("meta")}}, wenn das Attribut [`itemprop`](/de/docs/Web/HTML/Reference/Global_attributes/itemprop) vorhanden ist

## Eingebetteter Inhalt

Eingebetteter Inhalt ist eine Untergruppe des Flussinhalts. Er importiert eine andere Ressource oder fügt Inhalte aus einer anderen Auszeichnungssprache oder einem anderen Namensraum in das Dokument ein.

Die Elemente für eingebettete Inhalte sind:

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

Interaktiver Inhalt ist eine Untergruppe des Flussinhalts und umfasst Elemente, die speziell für die Interaktion mit Benutzern vorgesehen sind.

Die Elemente mit interaktivem Inhalt sind:

- {{HTMLElement("button")}}
- {{HTMLElement("details")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("iframe")}}
- {{HTMLElement("label")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}

Einige Elemente gehören nur unter bestimmten Bedingungen zu dieser Kategorie:

- {{HTMLElement("a")}}, wenn das Attribut [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) vorhanden ist
- {{HTMLElement("audio")}}, wenn das Attribut [`controls`](/de/docs/Web/HTML/Reference/Elements/audio#controls) vorhanden ist
- {{HTMLElement("img")}}, wenn das Attribut [`usemap`](/de/docs/Web/HTML/Reference/Elements/img#usemap) vorhanden ist
- {{HTMLElement("input")}}, wenn das Attribut [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) nicht den Zustand `hidden` hat
- {{HTMLElement("object")}}, wenn das Attribut [`usemap`](/de/docs/Web/HTML/Reference/Elements/object#usemap) vorhanden ist
- {{HTMLElement("video")}}, wenn das Attribut [`controls`](/de/docs/Web/HTML/Reference/Elements/video#controls) vorhanden ist

## Wahrnehmbarer Inhalt

**Wahrnehmbarer Inhalt** ist Inhalt, der weder leer noch verborgen ist: Er wird dargestellt und ist inhaltlich relevant. Wahrnehmbarer Inhalt dient nicht zur Definition von Inhaltsmodellen, sondern einer allgemeinen Regel: Elemente, deren Inhaltsmodell beliebigen Flussinhalt oder Phrasierungsinhalt zulässt, sollten mindestens einen Knoten enthalten, der wahrnehmbarer Inhalt ist und für den das Attribut `hidden` nicht angegeben ist.

Die Elemente mit wahrnehmbarem Inhalt sind:

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
- Reiner Text, der kein {{Glossary("Whitespace", "Leerraum")}} zwischen Elementen ist

Einige Elemente gehören nur unter bestimmten Bedingungen zu dieser Kategorie:

- {{HTMLElement("audio")}}, wenn das Attribut [`controls`](/de/docs/Web/HTML/Reference/Elements/audio#controls) vorhanden ist
- {{HTMLElement("dl")}}, wenn die Kindelemente des Elements mindestens eine Name-Wert-Gruppe umfassen
- {{HTMLElement("input")}}, wenn das Attribut [type](/de/docs/Web/HTML/Reference/Elements/input#type) nicht den Zustand `hidden` hat
- {{HTMLElement("ol")}}, wenn seine Kindelemente mindestens ein {{HTMLElement("li")}}-Element umfassen
- {{HTMLElement("ul")}}, wenn seine Kindelemente mindestens ein {{HTMLElement("li")}}-Element umfassen

## Elemente ohne Kategorie

Mehrere Elemente gehören zu _keiner_ Inhaltskategorie. Dazu zählen:

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

**Skriptunterstützende Elemente** tragen nicht direkt zur dargestellten Ausgabe eines Dokuments bei. Stattdessen unterstützen sie Skripte, indem sie entweder Skriptcode direkt enthalten oder angeben oder Daten bereitstellen, die von Skripten verwendet werden. Fast alle Elemente können skriptunterstützende Elemente enthalten – auch solche, die ansonsten nur bestimmte Elemente zulassen, etwa {{HTMLElement("ul")}} mit {{HTMLElement("li")}}-Elementen.

Die skriptunterstützenden Elemente sind:

- {{HTMLElement("script")}}
- {{HTMLElement("template")}}

## Formularbezogener Inhalt

Formularbezogener Inhalt ist eine Untergruppe des Flussinhalts. Sie umfasst Elemente, die einem Formular zugeordnet sind und überall verwendet werden können, wo Flussinhalt erwartet wird. Das zugeordnete Formular ist entweder das umschließende {{HTMLElement("form")}}-Element oder das `<form>`-Element, dessen `id` im Attribut `form` des Elements angegeben ist.

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

- listed
  - : Elemente, die in den Sammlungen [`HTMLFormElement.elements`](/de/docs/Web/API/HTMLFormElement/elements) und [`HTMLFieldSetElement.elements`](/de/docs/Web/API/HTMLFieldSetElement/elements) aufgeführt sind. Dazu gehören {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}} und {{HTMLElement("textarea")}}.
- submittable
  - : Elemente, die beim Absenden des Formulars zur Erstellung des Formulardatensatzes verwendet werden können. Dazu gehören {{HTMLElement("button")}}, {{HTMLElement("input")}}, {{HTMLElement("select")}} und {{HTMLElement("textarea")}}.
- resettable
  - : Elemente, die beim Zurücksetzen eines Formulars beeinflusst werden können. Dazu gehören {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}} und {{HTMLElement("textarea")}}.
- autocapitalize-and-autocorrect-inheriting
  - : Elemente, die die Attribute [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize) und [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) von ihrem zugeordneten Formular erben. Dazu gehören {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}} und {{HTMLElement("textarea")}}.
- labelable
  - : Elemente, die mit {{HTMLElement("label")}}-Elementen verknüpft werden können. Dazu gehören {{HTMLElement("button")}}, {{HTMLElement("input")}} (alle Typen außer `hidden`), {{HTMLElement("meter")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}} und {{HTMLElement("textarea")}}.

## Transparentes Inhaltsmodell

Neben den aufgeführten Inhaltskategorien kann das Inhaltsmodell eines Elements auch als „transparent“ definiert sein. Wenn der zulässige Inhalt eines Elements X „transparent“ ist, betrachten wir das Elternelement von X. Wir bilden die Schnittmenge aus dem zulässigen Inhalt des Elternelements von X und den Inhaltskategorien von X. Das Ergebnis bestimmt, was „transparent“ in diesem Zusammenhang bedeutet. Hat das Elternelement von X ebenfalls ein transparentes Inhaltsmodell, gehen wir im Baum weiter nach oben, bis wir ein nicht transparentes Inhaltsmodell finden. Gibt es kein solches Elternelement, bedeutet „transparent“ „Flussinhalt“.

Beispielsweise erlaubt ein {{HTMLElement("ruby")}}-Element Phrasierungsinhalt. Das Element {{HTMLElement("ins")}} gehört zur Kategorie Phrasierungsinhalt, wenn es ausschließlich Phrasierungsinhalt enthält. Daher kann ein {{HTMLElement("ins")}}-Element innerhalb eines {{HTMLElement("ruby")}}-Elements stehen. Der zulässige Inhalt des Elements `<ins>` ist „transparent“, was innerhalb von `<ruby>` „Phrasierungsinhalt“ bedeutet. {{HTMLElement("rt")}}-Elemente sind jedoch kein Phrasierungsinhalt. Deshalb kann ein {{HTMLElement("rt")}}-Element nicht innerhalb dieses `<ins>`-Elements stehen, obwohl sowohl `<rt>` als auch `<ins>` innerhalb von `<ruby>` stehen können und `<ins>` „transparent“ ist.

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

„Transparent“ ist ein _Inhaltsmodell_, keine _Inhaltskategorie_. Es definiert also nur, was ein Element enthalten darf, nicht aber, wo das Element stehen darf. Bei der Prüfung, ob die Kindelemente eines Elements zulässig sind, kann man daher nicht durch transparente Kindelemente „hindurchsehen“. Beispielsweise erlaubt ein {{HTMLElement("ul")}}-Element nur {{HTMLElement("li")}}-Elemente und skriptunterstützende Elemente, aber weder `<del>` noch `<ins>` – selbst dann nicht, wenn `<del>` ausschließlich `<li>`-Elemente enthält.

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
