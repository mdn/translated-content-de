---
title: Verwendung von Datenattributen
slug: Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{QuickLinksWithSubpages("/de/docs/Learn_web_development/Howto/Solve_HTML_problems")}}

HTML ist mit Blick auf Erweiterbarkeit für Daten entwickelt worden, die einem bestimmten Element zugeordnet werden sollen, ohne dass sie eine definierte Bedeutung haben müssen. [`data-*` Attribute](/de/docs/Web/HTML/Global_attributes/data-*) ermöglichen es uns, zusätzliche Informationen auf standardmäßigen, semantischen HTML-Elementen zu speichern, ohne auf andere Umgehungslösungen wie nicht standardisierte Attribute oder zusätzliche Eigenschaften im DOM zurückzugreifen.

## HTML-Syntax

Die Syntax ist einfach. Jedes Attribut an einem beliebigen Element, dessen Attributname mit `data-` beginnt, ist ein Datenattribut. Angenommen, Sie haben einen Artikel und möchten einige zusätzliche Informationen speichern, die keine visuelle Darstellung benötigen. Verwenden Sie einfach `data` Attribute dafür:

```html
<article
  id="electric-cars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars">
  …
</article>
```

## JavaScript-Zugriff

Das Auslesen der Werte dieser Attribute in [JavaScript](/de/docs/Web/JavaScript) ist ebenfalls sehr einfach. Sie könnten [`getAttribute()`](/de/docs/Web/API/Element/getAttribute) mit ihrem vollständigen HTML-Namen verwenden, um sie zu lesen, aber der Standard definiert eine einfachere Methode: eine [`DOMStringMap`](/de/docs/Web/API/DOMStringMap), die Sie über eine [`dataset`](/de/docs/Web/API/HTMLElement/dataset) Eigenschaft auslesen können.

Um ein `data` Attribut über das `dataset` Objekt zu erhalten, rufen Sie die Eigenschaft mit dem Teil des Attributnamens nach `data-` ab (beachten Sie, dass Bindestriche in {{Glossary("camel_case", "camel case")}} umgewandelt werden).

```js
const article = document.querySelector("#electric-cars");
// The following would also work:
// const article = document.getElementById("electric-cars")

article.dataset.columns; // "3"
article.dataset.indexNumber; // "12314"
article.dataset.parent; // "cars"
```

Jede Eigenschaft ist ein String und kann gelesen und geschrieben werden. Im obigen Fall würde das Setzen von `article.dataset.columns = 5` dieses Attribut auf `"5"` ändern.

## CSS-Zugriff

Beachten Sie, dass Sie, da Datenattribute einfache HTML-Attribute sind, sogar aus [CSS](/de/docs/Web/CSS) darauf zugreifen können. Um zum Beispiel die übergeordneten Daten im Artikel anzuzeigen, können Sie [generierten Inhalt](/de/docs/Web/CSS/content) in CSS mit der [`attr()`](/de/docs/Web/CSS/attr) Funktion verwenden:

```css
article::before {
  content: attr(data-parent);
}
```

Sie können auch [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) in CSS verwenden, um Stile entsprechend den Daten zu ändern:

```css
article[data-columns="3"] {
  width: 400px;
}
article[data-columns="4"] {
  width: 600px;
}
```

Sie können alles zusammen [in diesem JS Bin Beispiel](https://jsbin.com/ujiday/2/edit) sehen.

Datenattribute können auch verwendet werden, um Informationen zu speichern, die sich ständig ändern, wie etwa Punktzahlen in einem Spiel. Mit den CSS-Selektoren und dem JavaScript-Zugriff hier können Sie einige tolle Effekte erzeugen, ohne Ihre eigenen Anzeigeroutinen schreiben zu müssen. Sehen Sie sich [dieses Video](https://www.youtube.com/watch?v=On_WyUB1gOk) an, um ein Beispiel für die Verwendung von generiertem Inhalt und CSS-Übergängen zu sehen ([JS Bin Beispiel](https://jsbin.com/atawaz/3/edit)).

Datenwerte sind Strings. Zahlenwerte müssen im Selektor eingeschlossen werden, damit das Styling wirksam wird.

## Probleme

Speichern Sie keinen Inhalt, der sichtbar und zugänglich sein sollte, in Datenattributen, da Hilfstechnologien möglicherweise nicht darauf zugreifen können. Darüber hinaus könnten Suchmaschinen-Durchläufer die Werte von Datenattributen nicht indexieren.

## Siehe auch

- Dieser Artikel ist adaptiert von [Using data attributes in JavaScript and CSS on hacks.mozilla.org](https://hacks.mozilla.org/2012/10/using-data-attributes-in-javascript-and-css/).
- Benutzerdefinierte Attribute werden auch in SVG 2 unterstützt; siehe [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) und {{SVGAttr("data-*")}} für weitere Informationen.
- [How to use HTML data attributes](https://www.sitepoint.com/how-why-use-html5-custom-data-attributes/) (Sitepoint)
