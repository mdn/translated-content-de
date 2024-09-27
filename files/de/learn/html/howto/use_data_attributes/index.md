---
title: Verwenden von data-Attributen
slug: Learn/HTML/Howto/Use_data_attributes
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{QuickLinksWithSubpages("/de/docs/Learn/HTML/Howto")}}

HTML ist mit der Extensibilität im Hinterkopf entworfen worden, um Daten zu verbinden, die einem bestimmten Element zugeordnet werden sollen, ohne dass sie eine definierte Bedeutung haben müssen. [`data-*` Attribute](/de/docs/Web/HTML/Global_attributes/data-*) ermöglichen es uns, zusätzliche Informationen an standardisierten, semantischen HTML-Elementen zu speichern, ohne auf andere Tricks wie nicht-standardisierte Attribute oder zusätzliche DOM-Eigenschaften zurückzugreifen.

## HTML-Syntax

Die Syntax ist einfach. Jedes Attribut an jedem Element, dessen Attributname mit `data-` beginnt, ist ein `data`-Attribut. Angenommen, Sie haben einen Artikel und möchten einige zusätzliche Informationen speichern, die keine visuelle Darstellung haben. Verwenden Sie dafür einfach `data-` Attribute:

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

Das Auslesen der Werte dieser Attribute in [JavaScript](/de/docs/Web/JavaScript) ist ebenfalls sehr einfach. Sie könnten [`getAttribute()`](/de/docs/Web/API/Element/getAttribute) mit ihrem vollständigen HTML-Namen verwenden, um sie zu lesen, aber der Standard definiert eine einfachere Methode: ein [`DOMStringMap`](/de/docs/Web/API/DOMStringMap), das Sie über eine [`dataset`](/de/docs/Web/API/HTMLElement/dataset) Eigenschaft auslesen können.

Um ein `data`-Attribut über das `dataset`-Objekt zu erhalten, greifen Sie auf die Eigenschaft nach dem `data-` Teil des Attributnamens zu (beachten Sie, dass Bindestriche in [camel case](/de/docs/Glossary/camel_case) umgewandelt werden).

```js
const article = document.querySelector("#electric-cars");
// The following would also work:
// const article = document.getElementById("electric-cars")

article.dataset.columns; // "3"
article.dataset.indexNumber; // "12314"
article.dataset.parent; // "cars"
```

Jede Eigenschaft ist ein String und kann gelesen und geschrieben werden. Im obigen Fall würde das Setzen von `article.dataset.columns = 5` dieses Attribut in `"5"` ändern.

## CSS-Zugriff

Beachten Sie, dass Sie, da `data`-Attribute einfache HTML-Attribute sind, sogar von [CSS](/de/docs/Web/CSS) aus auf sie zugreifen können. Zum Beispiel, um die übergeordneten Daten im Artikel anzuzeigen, können Sie in CSS [generierten Inhalt](/de/docs/Web/CSS/content) mit der [`attr()`](/de/docs/Web/CSS/attr) Funktion verwenden:

```css
article::before {
  content: attr(data-parent);
}
```

Sie können auch die [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) in CSS verwenden, um Stile entsprechend der Daten zu ändern:

```css
article[data-columns="3"] {
  width: 400px;
}
article[data-columns="4"] {
  width: 600px;
}
```

Sie können sehen, wie all dies zusammen funktioniert [in diesem JSBin-Beispiel](https://jsbin.com/ujiday/2/edit).

`data`-Attribute können auch verwendet werden, um Informationen zu speichern, die sich ständig ändern, wie z.B. Punktestände in einem Spiel. Mit den hier beschriebenen CSS-Selektoren und dem JavaScript-Zugriff können Sie einige nützliche Effekte erstellen, ohne eigene Anzeigeroutinen schreiben zu müssen. Sehen Sie sich [dieses Screencast](https://www.youtube.com/watch?v=On_WyUB1gOk) für ein Beispiel mit generiertem Inhalt und CSS-Übergängen an ([JSBin-Beispiel](https://jsbin.com/atawaz/3/edit)).

Datenwerte sind Strings. Zahlenwerte müssen im Selektor in Anführungszeichen gesetzt werden, damit das Styling wirksam wird.

## Probleme

Speichern Sie keinen Inhalt, der sichtbar und zugänglich sein sollte, in `data`-Attributen, da unterstützende Technologien möglicherweise keinen Zugriff darauf haben. Zudem könnten Suchmaschinen die Werte von `data`-Attributen nicht indexieren.

## Siehe auch

- Dieser Artikel ist adaptiert von [Using data attributes in JavaScript and CSS on hacks.mozilla.org](https://hacks.mozilla.org/2012/10/using-data-attributes-in-javascript-and-css/).
- Individuelle Attribute werden auch in SVG 2 unterstützt; siehe [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) und {{SVGAttr("data-*")}} für weitere Informationen.
- [Wie man HTML data-Attribute verwendet](https://www.sitepoint.com/how-why-use-html5-custom-data-attributes/) (Sitepoint)
