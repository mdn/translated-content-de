---
title: Verwendung von Datenattributen
slug: Web/HTML/How_to/Use_data_attributes
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

HTML ist mit dem Gedanken der Erweiterbarkeit für Daten konzipiert, die mit einem bestimmten Element verknüpft sein sollten, aber keine definierte Bedeutung haben müssen. [`data-*` Attribute](/de/docs/Web/HTML/Reference/Global_attributes/data-*) ermöglichen es uns, zusätzliche Informationen auf standardmäßigen, semantischen HTML-Elementen zu speichern, ohne auf andere Tricks wie nicht-standardisierte Attribute oder zusätzliche Eigenschaften auf dem DOM zurückgreifen zu müssen.

## HTML-Syntax

Die Syntax ist einfach. Jedes Attribut an einem Element, dessen Attributname mit `data-` beginnt, ist ein Datenattribut. Angenommen, Sie haben einige Artikel und möchten zusätzliche Informationen speichern, die keine visuelle Darstellung haben. Verwenden Sie hierfür einfach `data` Attribute:

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

Das Auslesen der Werte dieser Attribute in [JavaScript](/de/docs/Web/JavaScript) ist ebenfalls sehr einfach. Sie könnten [`getAttribute()`](/de/docs/Web/API/Element/getAttribute) mit ihrem vollständigen HTML-Namen verwenden, um sie auszulesen, doch der Standard definiert einen einfacheren Weg: Ein [`DOMStringMap`](/de/docs/Web/API/DOMStringMap), den Sie über eine [`dataset`](/de/docs/Web/API/HTMLElement/dataset) Eigenschaft auslesen können.

Um ein `data` Attribut über das `dataset` Objekt zu erhalten, greifen Sie auf die Eigenschaft mit dem Teil des Attributnamens nach `data-` zu (beachten Sie, dass Bindestriche in {{Glossary("camel_case", "Camel Case")}} umgewandelt werden).

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

Beachten Sie, dass aufgrund der Tatsache, dass Datenattribute normale HTML-Attribute sind, Sie auch von [CSS](/de/docs/Web/CSS) darauf zugreifen können. Um zum Beispiel die übergeordneten Daten beim Artikel anzuzeigen, können Sie mit der [generierten Inhalt](/de/docs/Web/CSS/Reference/Properties/content) in CSS die [`attr()`](/de/docs/Web/CSS/Reference/Values/attr) Funktion verwenden:

```css
article::before {
  content: attr(data-parent);
}
```

Sie können auch die [Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) in CSS nutzen, um Stile gemäß den Daten zu ändern:

```css
article[data-columns="3"] {
  width: 400px;
}
article[data-columns="4"] {
  width: 600px;
}
```

Datenwerte sind Strings. Zahlenwerte müssen im Selektor in Anführungszeichen gesetzt werden, damit die Stiländerung wirksam wird.

## Beispiele

### Stilvarianten

Stellen Sie sich vor, Sie haben eine `callout` Klasse. Nun möchten Sie verschiedene Varianten wie "note" und "warning" implementieren. Traditionell verwenden die Leute einfach unterschiedliche Klassennamen.

```html
<div class="callout callout--note">...</div>
<div class="callout callout--warning">...</div>
```

```css
.callout {
  margin: 0.5em 0;
  padding: 0.5em;
  border-radius: 4px;
  border-width: 2px;
  border-style: solid;
}

.callout--note {
  border-color: rgb(15 15 235);
  background-color: rgb(15 15 235 / 0.2);
}
.callout--warning {
  border-color: rgb(235 15 15);
  background-color: rgb(235 15 15 / 0.2);
}
```

Mit Datenattributen gibt es eine Alternative, die Sie erwägen können:

```html live-sample___callout-data-attr
<div class="callout">...</div>
<div class="callout" data-variant="note">...</div>
<div class="callout" data-variant="warning">...</div>
```

```css live-sample___callout-data-attr
.callout {
  margin: 0.5em 0;
  padding: 0.5em;
  border-radius: 4px;
  border-width: 2px;
  border-style: solid;
}

/* Default style */
.callout:not([data-variant]) {
  border-color: rgb(15 15 15);
  background-color: rgb(15 15 15 / 0.2);
}
.callout[data-variant="note"] {
  border-color: rgb(15 15 235);
  background-color: rgb(15 15 235 / 0.2);
}
.callout[data-variant="warning"] {
  border-color: rgb(235 15 15);
  background-color: rgb(235 15 15 / 0.2);
}
```

{{EmbedLiveSample("callout-data-attr", "", "200")}}

Dies bietet mehrere Vorteile:

- Es eliminiert viele ungültige Zustände, wie das Anwenden von `callout--note` ohne gleichzeitiges Hinzufügen von `callout` oder das gleichzeitige Anwenden mehrerer Varianten.
- Ein separates `data-variant` Attribut ermöglicht die statische Analyse auf gültige Werte durch Linting oder Typprüfung.
- Das Umschalten der Variante ist intuitiver: Sie können `div.dataset.variant = "warning";` verwenden, anstatt die [`classList`](/de/docs/Web/API/Element/classList) zu manipulieren, was mehrere Schritte erfordert.

### Beliebige Daten mit DOM-Elementen verknüpfen

Viele Web-Apps haben JavaScript-Daten als maßgebliche Quelle für ihren UI-Status. In diesen Fällen fügen Sie nur die für das Rendering erforderlichen HTML-Attribute hinzu. Datenattribute sind nützlich in Fällen, in denen alles im Markup vorhanden ist und JavaScript nur zum Eventhandling, für die Synchronisierung des Zustands usw. benötigt wird.

Zum Beispiel, in unserem [Karussell mit Scroll-Margin](/de/docs/Web/API/IntersectionObserver/scrollMargin#carousel_with_scroll_margin) Beispiel haben wir eine HTML-Seite, die bereits mit vielen `<img>` Elementen gefüllt ist. Die Bildquelle wird zunächst in `data-src` gespeichert, um zu verhindern, dass Anforderungen ausgelöst werden, und der eigentliche `src` wird nur hinzugefügt, wenn das `<img>` ins Blickfeld scrollt. Die Daten (Bildquelle) sind dabei mit dem Element zusammengeführt, und das JavaScript ist nur dafür zuständig, das Verhalten zu definieren.

## Probleme

Speichern Sie keinen Inhalt, der sichtbar und zugänglich sein sollte, in Datenattributen, da unterstützende Technologien möglicherweise nicht darauf zugreifen können. Außerdem werden die Werte von Datenattributen möglicherweise nicht von Suchmaschinen-Crawlern indexiert. Wenn Sie nur möchten, dass das Datenattribut angezeigt wird, können Sie in vielen Fällen direkt [`textContent`](/de/docs/Web/API/Node/textContent) manipulieren.

## Siehe auch

- Dieser Artikel ist adaptiert von [Using data attributes in JavaScript and CSS on hacks.mozilla.org](https://hacks.mozilla.org/2012/10/using-data-attributes-in-javascript-and-css/).
- Benutzerdefinierte Attribute werden auch in SVG 2 unterstützt; siehe [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) und {{SVGAttr("data-*")}} für weitere Informationen.
- [How to use HTML data attributes](https://www.sitepoint.com/how-why-use-html5-custom-data-attributes/) (Sitepoint)
