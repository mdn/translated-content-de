---
title: Verwenden von Datenattributen
slug: Web/HTML/How_to/Use_data_attributes
l10n:
  sourceCommit: cd701f10306c8b0b9690532ff808df826818a04f
---

{{HTMLSidebar}}

HTML ist für die Erweiterbarkeit ausgelegt, um Daten zu verknüpfen, die einem bestimmten Element zugeordnet sein sollen, aber keine definierte Bedeutung haben müssen. [`data-*` Attribute](/de/docs/Web/HTML/Reference/Global_attributes/data-*) ermöglichen es uns, zusätzliche Informationen auf standardisierten, semantischen HTML-Elementen zu speichern, ohne auf andere Workarounds wie nicht standardisierte Attribute oder zusätzliche Eigenschaften im DOM zurückgreifen zu müssen.

## HTML-Syntax

Die Syntax ist einfach. Jedes Attribut in einem beliebigen Element, dessen Attributname mit `data-` beginnt, ist ein Datenattribut. Angenommen, Sie haben einige Artikel und möchten zusätzliche Informationen speichern, die keine visuelle Darstellung haben. Verwenden Sie einfach `data`-Attribute dafür:

```html
<main>
  <article
    id="electric-cars"
    data-columns="3"
    data-index-number="12314"
    data-parent="cars">
    <!-- Electric car content -->
  </article>

  <article
    id="solar-cars"
    data-columns="3"
    data-index-number="12315"
    data-parent="cars">
    <!-- Solar car content -->
  </article>

  <article
    id="flying-cars"
    data-columns="4"
    data-index-number="12316"
    data-parent="cars">
    <!-- Flying car content -->
  </article>
</main>
```

## Zugriff in JavaScript

Das Auslesen der Werte dieser Attribute in [JavaScript](/de/docs/Web/JavaScript) ist ebenfalls sehr einfach. Sie könnten [`getAttribute()`](/de/docs/Web/API/Element/getAttribute) mit ihrem vollständigen HTML-Namen verwenden, um sie auszulesen, aber der Standard definiert einen einfacheren Weg: ein [`DOMStringMap`](/de/docs/Web/API/DOMStringMap), das Sie über eine [`dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft auslesen können.

Um ein `data`-Attribut über das `dataset`-Objekt zu erhalten, greifen Sie auf die Eigenschaft zu, die dem Teil des Attributnamens nach `data-` entspricht (beachten Sie, dass Bindestriche in {{Glossary("camel_case", "camel case")}} umgewandelt werden).

```js
const article = document.querySelector("#electric-cars");
// The following would also work:
// const article = document.getElementById("electric-cars")

article.dataset.columns; // "3"
article.dataset.indexNumber; // "12314"
article.dataset.parent; // "cars"
```

Jede Eigenschaft ist ein String und kann gelesen und geschrieben werden. Im obigen Fall würde das Setzen von `article.dataset.columns = 5` dieses Attribut in `"5"` ändern.

Sie können auch [`document.querySelector()`](/de/docs/Web/API/Document/querySelector) oder [`document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) mit Datenattributselektoren verwenden, um ein Element oder alle Elemente zu finden, die übereinstimmen:

```js
// Find all elements with a data-columns attribute
const articles = document.querySelectorAll("[data-columns]");

// Find all elements with data-columns="3"
const threeColumnArticles = document.querySelectorAll('[data-columns="3"]');
// You can then iterate over the results
threeColumnArticles.forEach((article) => {
  console.log(article.dataset.indexNumber);
});
```

## Zugriff in CSS

Beachten Sie, dass Sie, da Datenattribute einfache HTML-Attribute sind, auch von [CSS](/de/docs/Web/CSS) aus darauf zugreifen können. Um beispielsweise die übergeordneten Daten im Artikel anzuzeigen, können Sie [generierten Inhalt](/de/docs/Web/CSS/content) in CSS mit der [`attr()`](/de/docs/Web/CSS/attr)-Funktion verwenden:

```css
article::before {
  content: attr(data-parent);
}
```

Sie können auch die [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) in CSS verwenden, um Stile gemäß den Daten zu ändern:

```css
article[data-columns="3"] {
  width: 400px;
}
article[data-columns="4"] {
  width: 600px;
}
```

Sie können sehen, wie all dies zusammenarbeitet, [in diesem JS Bin-Beispiel](https://jsbin.com/ujiday/2/edit).

Datenattribute können auch verwendet werden, um Informationen zu speichern, die sich ständig ändern, wie z.B. Punktestände in einem Spiel. Durch die Verwendung von CSS-Selektoren und JavaScript-Zugriff können Sie damit einige schicke Effekte erstellen, ohne eigene Anzeige-Routinen schreiben zu müssen. Sehen Sie sich [diesen Screencast](https://www.youtube.com/watch?v=On_WyUB1gOk) für ein Beispiel mit generiertem Inhalt und CSS-Übergängen an ([JS Bin-Beispiel](https://jsbin.com/atawaz/3/edit)).

Datenwerte sind Strings. Zahlenwerte müssen im Selektor zitiert werden, damit das Styling wirksam wird.

## Probleme

Speichern Sie keinen Inhalt, der sichtbar und zugänglich sein sollte, in Datenattributen, da unterstützende Technologien möglicherweise nicht darauf zugreifen. Außerdem könnten Suchcrawler die Werte von Datenattributen nicht indexieren.

## Siehe auch

- Dieser Artikel ist adaptiert von [Using data attributes in JavaScript and CSS on hacks.mozilla.org](https://hacks.mozilla.org/2012/10/using-data-attributes-in-javascript-and-css/).
- Benutzerdefinierte Attribute werden auch in SVG 2 unterstützt; siehe [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) und {{SVGAttr("data-*")}} für weitere Informationen.
- [Anleitung zur Verwendung von HTML-Datenattributen](https://www.sitepoint.com/how-why-use-html5-custom-data-attributes/) (Sitepoint)
