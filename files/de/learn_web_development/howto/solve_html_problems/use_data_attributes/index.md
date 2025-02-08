---
title: Verwendung von Datenattributen
slug: Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes
l10n:
  sourceCommit: 9325534bd211133c6e9f0c3b926907fbc3f6357d
---

{{QuickLinksWithSubpages("/de/docs/Learn_web_development/Howto/Solve_HTML_problems")}}

HTML ist darauf ausgelegt, erweiterbar zu sein, um Daten mit einem bestimmten Element zu verknüpfen, die jedoch keine definierte Bedeutung haben müssen. [`data-*`-Attribute](/de/docs/Web/HTML/Global_attributes/data-*) ermöglichen es uns, zusätzliche Informationen in standardisierten, semantischen HTML-Elementen zu speichern, ohne andere Techniken wie nicht-standardisierte Attribute oder zusätzliche Eigenschaften im DOM zu nutzen.

## HTML-Syntax

Die Syntax ist einfach. Jedes Attribut in jedem Element, dessen Attributname mit `data-` beginnt, ist ein Datenattribut. Angenommen, Sie haben einige Artikel und möchten zusätzliche Informationen speichern, die keine visuelle Darstellung haben. Verwenden Sie hierfür einfach `data`-Attribute:

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

## Zugriff mit JavaScript

Das Auslesen der Werte dieser Attribute in [JavaScript](/de/docs/Web/JavaScript) ist ebenfalls sehr einfach. Sie könnten [`getAttribute()`](/de/docs/Web/API/Element/getAttribute) mit dem vollständigen HTML-Namen verwenden, um sie auszulesen. Der Standard definiert jedoch einen einfacheren Weg: ein [`DOMStringMap`](/de/docs/Web/API/DOMStringMap), das Sie über die [`dataset`](/de/docs/Web/API/HTMLElement/dataset)-Eigenschaft auslesen können.

Um ein `data`-Attribut über das `dataset`-Objekt zu erhalten, greifen Sie auf die Eigenschaft zu, die dem Teil des Attributnamens nach `data-` entspricht (dabei werden Bindestriche in {{Glossary("camel_case", "Camel Case")}} konvertiert).

```js
const article = document.querySelector("#electric-cars");
// The following would also work:
// const article = document.getElementById("electric-cars")

article.dataset.columns; // "3"
article.dataset.indexNumber; // "12314"
article.dataset.parent; // "cars"
```

Jede Eigenschaft ist eine Zeichenkette und kann gelesen und geschrieben werden. Im obigen Beispiel würde das Setzen von `article.dataset.columns = 5` dieses Attribut auf `"5"` ändern.

Sie können auch [`document.querySelector()`](/de/docs/Web/API/Document/querySelector) oder [`document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) mit Datenattributselektoren verwenden, um ein Element oder alle passenden Elemente zu finden:

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

## Zugriff mit CSS

Da Datenattribute einfache HTML-Attribute sind, können Sie sie auch aus [CSS](/de/docs/Web/CSS) abrufen. Um beispielsweise die Eltern-Daten im Artikel anzuzeigen, können Sie [generierten Inhalt](/de/docs/Web/CSS/content) in CSS mit der Funktion [`attr()`](/de/docs/Web/CSS/attr) verwenden:

```css
article::before {
  content: attr(data-parent);
}
```

Sie können auch die [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) in CSS nutzen, um Stile je nach Datenattribut zu ändern:

```css
article[data-columns="3"] {
  width: 400px;
}
article[data-columns="4"] {
  width: 600px;
}
```

Sie können all das in Aktion sehen [in diesem JS Bin-Beispiel](https://jsbin.com/ujiday/2/edit).

Datenattribute können auch genutzt werden, um Informationen zu speichern, die sich ständig ändern, z. B. Punktestände in einem Spiel. Mit den CSS-Selektoren und dem JavaScript-Zugriff können Sie hier einige raffinierte Effekte erstellen, ohne eigene Anzeigeroutinen schreiben zu müssen. Sehen Sie sich [dieses Screencast](https://www.youtube.com/watch?v=On_WyUB1gOk) für ein Beispiel an, das generierten Inhalt und CSS-Übergänge verwendet ([JS Bin-Beispiel](https://jsbin.com/atawaz/3/edit)).

Datenwerte sind Zeichenketten. Zahlenwerte müssen im Selektor in Anführungszeichen gesetzt werden, damit die Stilregeln wirksam werden.

## Probleme

Speichern Sie keinen Inhalt, der sichtbar und zugänglich sein sollte, in Datenattributen, da assistive Technologien möglicherweise keinen Zugriff darauf haben. Darüber hinaus können Suchcrawler die Werte von Datenattributen möglicherweise nicht indexieren.

## Siehe auch

- Dieser Artikel basiert auf [Using data attributes in JavaScript and CSS auf hacks.mozilla.org](https://hacks.mozilla.org/2012/10/using-data-attributes-in-javascript-and-css/).
- Benutzerdefinierte Attribute werden auch in SVG 2 unterstützt; siehe [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) und {{SVGAttr("data-*")}} für weitere Informationen.
- [Anleitung zur Verwendung von HTML-Datenattributen](https://www.sitepoint.com/how-why-use-html5-custom-data-attributes/) (Sitepoint)
