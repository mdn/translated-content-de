---
title: Verwendung von Datenattributen
slug: Learn/HTML/Howto/Use_data_attributes
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{QuickLinksWithSubpages("/de/docs/Learn/HTML/Howto")}}

HTML ist so konzipiert, dass es erweiterbar ist für Daten, die mit einem bestimmten Element verknüpft werden sollen, aber keine definierte Bedeutung haben müssen. [`data-*` Attribute](/de/docs/Web/HTML/Global_attributes/data-*) ermöglichen es uns, zusätzliche Informationen in normalen, semantischen HTML-Elementen zu speichern, ohne andere Tricks wie nicht standardisierte Attribute oder zusätzliche Eigenschaften im DOM.

## HTML-Syntax

Die Syntax ist einfach. Jedes Attribut an einem beliebigen Element, dessen Attributname mit `data-` beginnt, ist ein Datenattribut. Angenommen, Sie haben einen Artikel und möchten einige zusätzliche Informationen speichern, die keine visuelle Darstellung haben. Verwenden Sie dafür einfach `data` Attribute:

```html
<article
  id="electric-cars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars">
  …
</article>
```

## Zugriff über JavaScript

Das Auslesen der Werte dieser Attribute in [JavaScript](/de/docs/Web/JavaScript) ist ebenfalls sehr einfach. Sie könnten [`getAttribute()`](/de/docs/Web/API/Element/getAttribute) mit ihrem vollständigen HTML-Namen verwenden, um sie auszulesen, aber der Standard definiert einen einfacheren Weg: eine [`DOMStringMap`](/de/docs/Web/API/DOMStringMap), die Sie über eine [`dataset`](/de/docs/Web/API/HTMLElement/dataset) Eigenschaft auslesen können.

Um ein `data` Attribut über das `dataset` Objekt zu erhalten, holen Sie die Eigenschaft des Attributnamens nach `data-` (beachten Sie, dass Bindestriche in {{Glossary("camel_case", "Camel Case")}} umgewandelt werden).

```js
const article = document.querySelector("#electric-cars");
// The following would also work:
// const article = document.getElementById("electric-cars")

article.dataset.columns; // "3"
article.dataset.indexNumber; // "12314"
article.dataset.parent; // "cars"
```

Jede Eigenschaft ist ein String und kann gelesen und geschrieben werden. Im obigen Fall würde das Setzen von `article.dataset.columns = 5` dieses Attribut in `"5"` ändern.

## Zugriff über CSS

Beachten Sie, dass, da Datenattribute einfache HTML-Attribute sind, Sie sogar von [CSS](/de/docs/Web/CSS) darauf zugreifen können. Um zum Beispiel die übergeordneten Daten im Artikel anzuzeigen, können Sie in CSS mit der [`attr()`](/de/docs/Web/CSS/attr) Funktion [generierten Inhalt](/de/docs/Web/CSS/content) verwenden:

```css
article::before {
  content: attr(data-parent);
}
```

Sie können auch die [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) in CSS verwenden, um Stile entsprechend den Daten zu ändern:

```css
article[data-columns="3"] {
  width: 400px;
}
article[data-columns="4"] {
  width: 600px;
}
```

Sie können all dies in Arbeit sehen [in diesem JSBin-Beispiel](https://jsbin.com/ujiday/2/edit).

Datenattribute können auch verwendet werden, um Informationen zu speichern, die sich ständig ändern, wie Punktzahlen in einem Spiel. Mithilfe der hier gezeigten CSS-Selektoren und des JavaScript-Zugriffs können Sie einige clevere Effekte erstellen, ohne eigene Anzeigeroutinen schreiben zu müssen. Sehen Sie [dieses Screencast](https://www.youtube.com/watch?v=On_WyUB1gOk) für ein Beispiel, das generierten Inhalt und CSS-Übergänge verwendet ([JSBin-Beispiel](https://jsbin.com/atawaz/3/edit)).

Datenwerte sind Zeichenketten. Zahlenwerte müssen in den Selektoren in Anführungszeichen gesetzt werden, damit das Styling wirksam wird.

## Probleme

Speichern Sie keine Inhalte, die sichtbar und zugänglich sein sollten, in Datenattributen, da unterstützende Technologien möglicherweise nicht auf sie zugreifen können. Darüber hinaus können Suchmaschinen möglicherweise die Werte von Datenattributen nicht indexieren.

## Siehe auch

- Dieser Artikel wurde von [Using data attributes in JavaScript and CSS auf hacks.mozilla.org](https://hacks.mozilla.org/2012/10/using-data-attributes-in-javascript-and-css/) adaptiert.
- Benutzerdefinierte Attribute werden auch in SVG 2 unterstützt; sehen Sie [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) und {{SVGAttr("data-*")}} für weitere Informationen.
- [How to use HTML data attributes](https://www.sitepoint.com/how-why-use-html5-custom-data-attributes/) (Sitepoint)
