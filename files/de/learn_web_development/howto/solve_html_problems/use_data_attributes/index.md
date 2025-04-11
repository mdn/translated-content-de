---
title: Verwendung von Datenattributen
slug: Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes
l10n:
  sourceCommit: 960a94a198ca60fb04fe63857ea61d7306465791
---

{{QuickLinksWithSubpages("/de/docs/Learn_web_development/Howto/Solve_HTML_problems")}}

HTML ist mit Extensibilität im Hinterkopf gestaltet, um Daten zu verknüpfen, die sich auf ein bestimmtes Element beziehen, aber keine definierte Bedeutung haben müssen. [`data-*` Attribute](/de/docs/Web/HTML/Reference/Global_attributes/data-*) ermöglichen es uns, zusätzliche Informationen in standardmäßigen, semantischen HTML-Elementen zu speichern, ohne auf andere Tricks wie nicht-standardmäßige Attribute oder zusätzliche Eigenschaften im DOM zurückzugreifen.

## HTML-Syntax

Die Syntax ist einfach. Jedes Attribut an jedem Element, dessen Attributname mit `data-` beginnt, ist ein Datenattribut. Angenommen, Sie haben einige Artikel und möchten zusätzliche Informationen speichern, die keine visuelle Darstellung haben. Verwenden Sie dafür einfach `data`-Attribute:

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

## JavaScript-Zugriff

Das Auslesen dieser Attributwerte in [JavaScript](/de/docs/Web/JavaScript) ist ebenfalls sehr einfach. Sie könnten [`getAttribute()`](/de/docs/Web/API/Element/getAttribute) mit ihrem vollständigen HTML-Namen verwenden, um sie auszulesen, aber der Standard definiert einen einfacheren Weg: ein [`DOMStringMap`](/de/docs/Web/API/DOMStringMap), das Sie über eine [`dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft auslesen können.

Um ein `data`-Attribut über das `dataset`-Objekt zu erhalten, erhalten Sie die Eigenschaft durch den Teil des Attributnamens nach `data-` (beachten Sie, dass Bindestriche in {{Glossary("camel_case", "Camel Case")}} umgewandelt werden).

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

## CSS-Zugriff

Beachten Sie, dass Sie, da Datenattribute einfache HTML-Attribute sind, sogar von [CSS](/de/docs/Web/CSS) aus auf sie zugreifen können. Zum Beispiel, um die übergeordneten Daten im Artikel anzuzeigen, können Sie [generierten Inhalt](/de/docs/Web/CSS/content) in CSS mit der [`attr()`](/de/docs/Web/CSS/attr)-Funktion verwenden:

```css
article::before {
  content: attr(data-parent);
}
```

Sie können auch die [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) in CSS verwenden, um Stile nach den Daten zu ändern:

```css
article[data-columns="3"] {
  width: 400px;
}
article[data-columns="4"] {
  width: 600px;
}
```

Sie können all dies [in diesem JS Bin Beispiel](https://jsbin.com/ujiday/2/edit) zusammenarbeiten sehen.

Datenattribute können auch gespeichert werden, um Informationen zu enthalten, die sich ständig ändern, wie zum Beispiel Punktestände in einem Spiel. Mithilfe der hier beschriebenen CSS-Selektoren und JavaScript-Zugriffe können Sie einige interessante Effekte erstellen, ohne eigene Anzeigeprozeduren schreiben zu müssen. Sehen Sie [dieses Screencast](https://www.youtube.com/watch?v=On_WyUB1gOk) für ein Beispiel mit generiertem Inhalt und CSS-Übergängen ([JS Bin Beispiel](https://jsbin.com/atawaz/3/edit)).

Datenwerte sind Zeichenfolgen. Zahlenwerte müssen im Selektor in Anführungszeichen gesetzt werden, damit die Stilgebung wirksam wird.

## Probleme

Speichern Sie keine Inhalte, die sichtbar und zugänglich sein sollten, in Datenattributen, da unterstützende Technologien möglicherweise keinen Zugriff darauf haben. Darüber hinaus können Suchcrawler die Werte von Datenattributen möglicherweise nicht indexieren.

## Siehe auch

- Dieser Artikel ist adaptiert von [Using data attributes in JavaScript and CSS on hacks.mozilla.org](https://hacks.mozilla.org/2012/10/using-data-attributes-in-javascript-and-css/).
- Benutzerdefinierte Attribute werden auch in SVG 2 unterstützt; siehe [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) und {{SVGAttr("data-*")}} für weitere Informationen.
- [Anleitung zur Verwendung von HTML-Datenattributen](https://www.sitepoint.com/how-why-use-html5-custom-data-attributes/) (Sitepoint)
