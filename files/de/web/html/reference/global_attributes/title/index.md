---
title: Globales HTML-Attribut `title`
short-title: title
slug: Web/HTML/Reference/Global_attributes/title
l10n:
  sourceCommit: bcb7d4dde9f0a43664c64587d9d70b8835286eb7
---

Das **`title`**-[globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) enthält einen Text mit ergänzenden Informationen zu dem Element, zu dem es gehört.

{{InteractiveExample("HTML Demo: title", "tabbed-shorter")}}

```html interactive-example
<p>
  Use the <code>title</code> attribute on an <code>iframe</code> to clearly
  identify the content of the <code>iframe</code> to screen readers.
</p>

<iframe
  title="Wikipedia page for the HTML language"
  src="https://en.m.wikipedia.org/wiki/HTML"></iframe>
<iframe
  title="Wikipedia page for the CSS language"
  src="https://en.m.wikipedia.org/wiki/CSS"></iframe>
```

```css interactive-example
iframe {
  height: 200px;
  margin-bottom: 24px;
  width: 100%;
}
```

## Beschreibung

Das `title`-Attribut wird hauptsächlich verwendet, um {{HTMLElement("iframe")}}-Elemente für assistive Technologien zu beschriften.

Das `title`-Attribut kann auch verwendet werden, um Steuerelemente in [Datentabellen](/de/docs/Web/HTML/Reference/Elements/table) zu beschriften.

Wenn das `title`-Attribut zu [`<link rel="stylesheet">`](/de/docs/Web/HTML/Reference/Elements/link) hinzugefügt wird, entsteht ein alternatives Stylesheet. Wird ein alternatives Stylesheet mit `<link rel="alternate">` definiert, ist das Attribut erforderlich und muss auf eine nicht leere Zeichenfolge gesetzt werden.

Wenn `title` im öffnenden Tag von {{htmlelement('abbr')}} angegeben wird, muss es die Abkürzung oder das Akronym vollständig ausschreiben. Statt `title` zu verwenden, sollten Sie die Abkürzung oder das Akronym nach Möglichkeit bei der ersten Verwendung im Fließtext ausschreiben und die Abkürzung mit `<abbr>` auszeichnen. So erfahren alle Benutzer, für welchen Namen oder Begriff die Abkürzung beziehungsweise das Akronym steht. Gleichzeitig erhalten User Agents einen Hinweis darauf, wie sie den Inhalt wiedergeben sollen.

`title` kann zwar verwendet werden, um einem {{HTMLElement("input")}}-Element eine programmatisch zugeordnete Beschriftung zu geben, dies ist jedoch keine gute Praxis. Verwenden Sie stattdessen ein {{HTMLElement("label")}}.

## Mehrzeilige Titel

Das `title`-Attribut kann mehrere Zeilen enthalten. Jedes Zeichen `U+000A LINE FEED` (`LF`) steht für einen Zeilenumbruch. Beachten Sie, dass das folgende Beispiel deshalb über zwei Zeilen dargestellt wird:

### HTML

```html
<p>
  Newlines in <code>title</code> should be taken into account. This
  <span
    title="This is a
multiline title">
    example span
  </span>
  has a title attribute with a newline.
</p>
<hr />
<pre id="output"></pre>
```

### JavaScript

Sie können das `title`-Attribut abfragen und wie folgt im leeren `<pre>`-Element anzeigen:

```js
const span = document.querySelector("span");
const output = document.querySelector("#output");
output.textContent = span.title;
```

### Ergebnis

{{EmbedLiveSample('Multiline_titles')}}

## Vererbung des title-Attributs

Wenn ein Element kein `title`-Attribut hat, erbt es dessen Wert vom übergeordneten Knoten. Dieser kann den Wert wiederum von seinem übergeordneten Knoten geerbt haben und so weiter.

Wenn das Attribut auf eine leere Zeichenfolge gesetzt ist, sind die `title`-Werte der Vorfahren irrelevant und sollten nicht im Tooltip für dieses Element verwendet werden.

### HTML

```html
<div title="CoolTip">
  <p>Hovering here will show "CoolTip".</p>
  <p title="">Hovering here will show nothing.</p>
</div>
```

### Ergebnis

{{EmbedLiveSample('Title_attribute_inheritance')}}

## Barrierefreiheit

Die Verwendung des `title`-Attributs ist insbesondere für folgende Personen problematisch:

- Personen, die ausschließlich Geräte mit Touchscreen verwenden
- Personen, die mit der Tastatur navigieren
- Personen, die mit assistiven Technologien wie Screenreadern oder Bildschirmlupen navigieren
- Personen mit Einschränkungen der Feinmotorik
- Personen mit kognitiven Einschränkungen

Der Grund dafür ist die uneinheitliche Unterstützung durch Browser, die durch die zusätzliche Verarbeitung der vom Browser dargestellten Seite durch assistive Technologien weiter erschwert wird. Wenn Sie einen Tooltip-Effekt erzielen möchten, sollten Sie [eine besser zugängliche Technik verwenden](https://inclusive-components.design/tooltips-toggletips/), die sich mit den oben genannten Methoden bedienen lässt.

- [3.2.5.1. Das title-Attribut | W3C HTML 5.2: 3. Semantik, Struktur und APIs von HTML-Dokumenten](https://html.spec.whatwg.org/multipage/dom.html#the-title-attribute)
- [Verwendung des HTML-title-Attributs – aktualisiert | Vispero](https://vispero.com/resources/using-the-html-title-attribute-updated/)
- [Tooltips und Toggletips – Inclusive Components](https://inclusive-components.design/tooltips-toggletips/)
- [Die Schwierigkeiten des title-Attributs – 24 Accessibility](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`HTMLElement.title`](/de/docs/Web/API/HTMLElement/title), das dieses Attribut widerspiegelt.
