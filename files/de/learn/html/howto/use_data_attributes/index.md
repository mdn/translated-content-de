---
title: Verwendung von Datenattributen
slug: Learn/HTML/Howto/Use_data_attributes
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{QuickLinksWithSubpages("/de/docs/Learn/HTML/Howto")}}

HTML ist darauf ausgelegt, erweiterbar zu sein für Daten, die mit einem bestimmten Element verknüpft werden sollen, jedoch keine definierte Bedeutung haben müssen. [`data-*` Attribute](/de/docs/Web/HTML/Global_attributes/data-*) ermöglichen es uns, zusätzliche Informationen auf standardmäßigen, semantischen HTML-Elementen zu speichern, ohne andere Techniken wie nicht standardmäßige Attribute oder zusätzliche Eigenschaften im DOM anzuwenden.

## HTML-Syntax

Die Syntax ist einfach. Jedes Attribut an jedem Element, dessen Attributname mit `data-` beginnt, ist ein Datenattribut. Angenommen, Sie haben einen Artikel und möchten einige zusätzliche Informationen speichern, die keine visuelle Darstellung haben. Verwenden Sie einfach `data` Attribute dafür:

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

Auch das Auslesen der Werte dieser Attribute in [JavaScript](/de/docs/Web/JavaScript) ist sehr einfach. Sie könnten [`getAttribute()`](/de/docs/Web/API/Element/getAttribute) mit ihrem vollständigen HTML-Namen verwenden, um sie zu lesen, aber der Standard definiert eine einfachere Methode: ein [`DOMStringMap`](/de/docs/Web/API/DOMStringMap), das Sie über eine [`dataset`](/de/docs/Web/API/HTMLElement/dataset) Eigenschaft auslesen können.

Um ein `data` Attribut über das `dataset` Objekt zu erhalten, greifen Sie auf die Eigenschaft mit dem Teil des Attributnamens nach `data-` zu (beachten Sie, dass Bindestriche in {{Glossary("camel_case", "camel case")}} umgewandelt werden).

```js
const article = document.querySelector("#electric-cars");
// The following would also work:
// const article = document.getElementById("electric-cars")

article.dataset.columns; // "3"
article.dataset.indexNumber; // "12314"
article.dataset.parent; // "cars"
```

Jede Eigenschaft ist eine Zeichenkette und kann gelesen und geschrieben werden. Im obigen Fall würde das Setzen von `article.dataset.columns = 5` dieses Attribut auf `"5"` ändern.

## CSS-Zugriff

Da Datenattribute einfache HTML-Attribute sind, können Sie sogar von [CSS](/de/docs/Web/CSS) aus auf sie zugreifen. Um zum Beispiel die übergeordnete Dateninformation im Artikel anzuzeigen, können Sie in CSS generierten Inhalt mit der [`attr()`](/de/docs/Web/CSS/attr) Funktion verwenden:

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

Sie können all dies zusammen funktionieren sehen [in diesem JS Bin Beispiel](https://jsbin.com/ujiday/2/edit).

Datenattribute können auch verwendet werden, um Informationen zu speichern, die sich ständig ändern, wie Punktestände in einem Spiel. Durch die Verwendung der CSS-Selektoren und des JavaScript-Zugriffs hier können Sie einige raffinierte Effekte erstellen, ohne Ihre eigenen Anzeigeroutinen schreiben zu müssen. Sehen Sie sich [dieses Video](https://www.youtube.com/watch?v=On_WyUB1gOk) für ein Beispiel unter Verwendung von generiertem Inhalt und CSS-Übergängen an ([JS Bin Beispiel](https://jsbin.com/atawaz/3/edit)).

Datenwerte sind Zeichenketten. Zahlenwerte müssen im Selektor in Anführungszeichen gesetzt werden, damit die Stiländerung wirksam wird.

## Probleme

Speichern Sie keine Inhalte, die sichtbar und zugänglich sein sollten, in Datenattributen, da unterstützende Technologien möglicherweise nicht darauf zugreifen können. Außerdem können Suchmaschinen Crawler die Werte von Datenattributen möglicherweise nicht indexieren.

## Siehe auch

- Dieser Artikel ist angelehnt an [Using data attributes in JavaScript and CSS on hacks.mozilla.org](https://hacks.mozilla.org/2012/10/using-data-attributes-in-javascript-and-css/).
- Benutzerdefinierte Attribute werden auch in SVG 2 unterstützt; siehe [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) und {{SVGAttr("data-*")}} für weitere Informationen.
- [Wie man HTML-Datenattribute verwendet](https://www.sitepoint.com/how-why-use-html5-custom-data-attributes/) (Sitepoint)
