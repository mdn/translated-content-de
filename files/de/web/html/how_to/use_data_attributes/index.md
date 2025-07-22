---
title: Verwendung von Datenattributen
slug: Web/HTML/How_to/Use_data_attributes
l10n:
  sourceCommit: 73021b277185437b5d8194dc5c12f4fa2d9b0ea9
---

HTML ist mit Blick auf die Erweiterbarkeit für Daten konzipiert, die mit einem bestimmten Element verknüpft sein sollen, jedoch keine definierte Bedeutung haben müssen. [`data-*` Attribute](/de/docs/Web/HTML/Reference/Global_attributes/data-*) ermöglichen es uns, zusätzliche Informationen in standardisierten, semantischen HTML-Elementen zu speichern, ohne andere Tricks wie nicht standardisierte Attribute oder zusätzliche Eigenschaften im DOM zu verwenden.

## HTML-Syntax

Die Syntax ist einfach. Jedes Attribut auf einem beliebigen Element, dessen Attributname mit `data-` beginnt, ist ein Datenattribut. Angenommen, Sie haben einige Artikel und möchten einige zusätzliche Informationen speichern, die keine visuelle Darstellung haben. Verwenden Sie dafür einfach `data` Attribute:

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

Das Auslesen der Werte dieser Attribute in [JavaScript](/de/docs/Web/JavaScript) ist ebenfalls sehr einfach. Sie könnten [`getAttribute()`](/de/docs/Web/API/Element/getAttribute) mit ihrem vollständigen HTML-Namen verwenden, um sie auszulesen, aber der Standard definiert einen einfacheren Weg: eine [`DOMStringMap`](/de/docs/Web/API/DOMStringMap), die Sie über eine [`dataset`](/de/docs/Web/API/HTMLElement/dataset) Eigenschaft auslesen können.

Um ein `data` Attribut über das `dataset` Objekt zu erhalten, greifen Sie auf die Eigenschaft nach dem Teil des Attributnamens zu, der auf `data-` folgt (beachten Sie, dass Bindestriche in {{Glossary("camel_case", "camel case")}} umgewandelt werden).

```js
const article = document.querySelector("#electric-cars");
// The following would also work:
// const article = document.getElementById("electric-cars")

article.dataset.columns; // "3"
article.dataset.indexNumber; // "12314"
article.dataset.parent; // "cars"
```

Jede Eigenschaft ist ein String und kann gelesen und geschrieben werden. Im obigen Fall würde das Setzen von `article.dataset.columns = 5` dieses Attribut in `"5"` ändern.

Sie können auch [`document.querySelector()`](/de/docs/Web/API/Document/querySelector) oder [`document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) mit Datenattribut-Selektoren verwenden, um ein Element oder alle Elemente zu finden, die übereinstimmen:

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

Beachten Sie, dass Sie, da Datenattribute einfache HTML-Attribute sind, sogar aus [CSS](/de/docs/Web/CSS) darauf zugreifen können. Um zum Beispiel die Eltern-Daten im Artikel anzuzeigen, können Sie in CSS mit der [erzeugten Inhalt](/de/docs/Web/CSS/content)-Funktion und der [`attr()`](/de/docs/Web/CSS/attr)-Funktion arbeiten:

```css
article::before {
  content: attr(data-parent);
}
```

Sie können auch die [Attribut-Selektoren](/de/docs/Web/CSS/Attribute_selectors) in CSS verwenden, um Stile entsprechend den Daten zu ändern:

```css
article[data-columns="3"] {
  width: 400px;
}
article[data-columns="4"] {
  width: 600px;
}
```

Datenwerte sind Strings. Zahlenwerte müssen im Selektor zitiert werden, damit die Stiländerung wirksam wird.

## Beispiele

### Stilvarianten

Stellen Sie sich vor, Sie haben eine `callout` Klasse. Jetzt möchten Sie verschiedene Varianten implementieren, wie "Notiz" und "Warnung". Traditionell verwenden Menschen einfach unterschiedliche Klassennamen.

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

Mit Datenattributen gibt es eine alternative Möglichkeit:

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

- Es eliminiert viele ungültige Zustände, wie z.B. das Anwenden von `callout--note` ohne `callout` hinzuzufügen oder mehrere Varianten gleichzeitig anzuwenden.
- Ein separates `data-variant` Attribut ermöglicht statische Analysen für gültige Werte durch Linting oder Typüberprüfung.
- Das Umschalten der Variante ist intuitiver: Sie können `div.dataset.variant = "warning";` verwenden, anstatt die [`classList`](/de/docs/Web/API/Element/classList) zu manipulieren, was mehrere Schritte erfordert.

### Verknüpfung beliebiger Daten mit DOM-Elementen

Viele Webanwendungen haben JavaScript-Daten als Quelle der Wahrheit für ihren UI-Zustand. In diesen Fällen fügen Sie nur die für das Rendering notwendigen HTML-Attribute hinzu. Datenattribute sind nützlich in Fällen, in denen alles im Markup vorhanden ist und JavaScript nur für die Ereignisbehandlung, Synchronisierung des Zustands usw. benötigt wird.

Zum Beispiel in unserem [Karussell mit Scroll-Margin-](/de/docs/Web/API/IntersectionObserver/scrollMargin#carousel_with_scroll_margin) Beispiel haben wir eine HTML-Seite, die bereits mit vielen `<img>` Elementen gefüllt ist. Die Bildquelle wird zunächst in `data-src` gespeichert, um zu verhindern, dass Anfragen ausgelöst werden, und die echte `src` wird erst hinzugefügt, wenn das `<img>` in den Viewport scrollt. Die Daten (Bildquelle) sind beim Element angesiedelt, und JavaScript ist nur dafür verantwortlich, das Verhalten zu definieren.

## Probleme

Speichern Sie in Datenattributen keine Inhalte, die sichtbar und zugänglich sein sollten, da assistive Technologien möglicherweise keinen Zugriff darauf haben. Darüber hinaus können Suchmaschinen die Werte von Datenattributen möglicherweise nicht indexieren. Wenn Sie beabsichtigen, dass das Datenattribut nur angezeigt wird, können Sie direkt [`textContent`](/de/docs/Web/API/Node/textContent) manipulieren.

## Siehe auch

- Dieser Artikel ist adaptiert von [Using data attributes in JavaScript and CSS on hacks.mozilla.org](https://hacks.mozilla.org/2012/10/using-data-attributes-in-javascript-and-css/).
- Benutzerdefinierte Attribute werden auch in SVG 2 unterstützt; siehe [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) und {{SVGAttr("data-*")}} für weitere Informationen.
- [How to use HTML data attributes](https://www.sitepoint.com/how-why-use-html5-custom-data-attributes/) (Sitepoint)
