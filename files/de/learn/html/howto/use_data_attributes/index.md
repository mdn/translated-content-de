---
title: Verwendung von Datenattributen
slug: Learn/HTML/Howto/Use_data_attributes
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{QuickLinksWithSubpages("/de/docs/Learn/HTML/Howto")}}

HTML ist mit Blick auf Erweiterbarkeit für Daten entwickelt, die mit einem bestimmten Element verbunden sein sollten, aber keine definierte Bedeutung haben müssen. [`data-*` Attribute](/de/docs/Web/HTML/Global_attributes/data-*) ermöglichen es uns, zusätzliche Informationen auf standardmäßigen, semantischen HTML-Elementen zu speichern, ohne auf andere Tricks wie nicht-standardmäßige Attribute oder zusätzliche DOM-Eigenschaften zurückzugreifen.

## HTML-Syntax

Die Syntax ist einfach. Jedes Attribut auf einem beliebigen Element, dessen Attributname mit `data-` beginnt, ist ein Datenattribut. Angenommen, Sie haben einen Artikel und möchten einige zusätzliche Informationen speichern, die keine visuelle Darstellung haben. Verwenden Sie einfach `data`-Attribute dafür:

```html
<article
  id="electric-cars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars">
  …
</article>
```

## Zugriff mit JavaScript

Das Auslesen dieser Attributwerte mit [JavaScript](/de/docs/Web/JavaScript) ist ebenfalls sehr einfach. Sie könnten {{domxref("Element.getAttribute", "getAttribute()")}} mit ihrem vollständigen HTML-Namen verwenden, um sie zu lesen, aber der Standard definiert einen einfacheren Weg: ein {{domxref("DOMStringMap")}}, das Sie über eine {{domxref("HTMLElement/dataset", "dataset")}}-Eigenschaft auslesen können.

Um ein `data`-Attribut über das `dataset`-Objekt zu erhalten, rufen Sie die Eigenschaft über den Teil des Attributnamens nach `data-` ab (beachten Sie, dass Bindestriche in {{Glossary("camel_case", "Camel-Case")}} umgewandelt werden).

```js
const article = document.querySelector("#electric-cars");
// The following would also work:
// const article = document.getElementById("electric-cars")

article.dataset.columns; // "3"
article.dataset.indexNumber; // "12314"
article.dataset.parent; // "cars"
```

Jede Eigenschaft ist ein String und kann gelesen und geschrieben werden. Im obigen Fall würde das Setzen von `article.dataset.columns = 5` dieses Attribut in `"5"` ändern.

## Zugriff mit CSS

Beachten Sie, dass, da Datenattribute einfache HTML-Attribute sind, Sie sogar von [CSS](/de/docs/Web/CSS) auf sie zugreifen können. Beispielsweise, um das Eltern-Datum im Artikel anzuzeigen, können Sie [generierten Inhalt](/de/docs/Web/CSS/content) in CSS mit der [`attr()`](/de/docs/Web/CSS/attr)-Funktion verwenden:

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

Sie können all dies zusammen [in diesem JSBin-Beispiel](https://jsbin.com/ujiday/2/edit) sehen.

Datenattribute können auch gespeichert werden, um Informationen zu enthalten, die sich ständig ändern, wie Punktzahlen in einem Spiel. Mithilfe der hier beschriebenen CSS-Selektoren und des JavaScript-Zugriffs können Sie einige beeindruckende Effekte erzeugen, ohne eigene Anzeigeroutinen schreiben zu müssen. Sehen Sie sich [dieses Screencast](https://www.youtube.com/watch?v=On_WyUB1gOk) für ein Beispiel an, das generierten Inhalt und CSS-Übergänge verwendet ([JSBin-Beispiel](https://jsbin.com/atawaz/3/edit)).

Datenwerte sind Strings. Zahlenwerte müssen im Selektor in Anführungszeichen gesetzt werden, damit das Styling wirksam wird.

## Probleme

Speichern Sie keine Inhalte, die sichtbar und zugänglich sein sollten, in Datenattributen, da unterstützende Technologien möglicherweise nicht auf sie zugreifen können. Außerdem können Suchmaschinen die Werte von Datenattributen möglicherweise nicht indexieren.

## Siehe auch

- Dieser Artikel wurde von [Using data attributes in JavaScript and CSS on hacks.mozilla.org](https://hacks.mozilla.org/2012/10/using-data-attributes-in-javascript-and-css/) adaptiert.
- Benutzerdefinierte Attribute werden auch in SVG 2 unterstützt; siehe {{domxref("HTMLElement.dataset")}} und {{SVGAttr("data-*")}} für weitere Informationen.
- [How to use HTML data attributes](https://www.sitepoint.com/how-why-use-html5-custom-data-attributes/) (Sitepoint)
