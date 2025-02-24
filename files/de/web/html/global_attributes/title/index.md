---
title: title
slug: Web/HTML/Global_attributes/title
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar("Global_attributes")}}

Das **`title`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) enthält Text, der beratende Informationen zu dem Element darstellt, zu dem es gehört.

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

Der Hauptzweck des `title`-Attributs besteht darin, {{HTMLElement("iframe")}}-Elemente für unterstützende Technologien zu kennzeichnen.

Das `title`-Attribut kann auch verwendet werden, um Steuerungen in [Datentabellen](/de/docs/Web/HTML/Element/table) zu kennzeichnen.

Das `title`-Attribut, wenn es zu [`<link rel="stylesheet">`](/de/docs/Web/HTML/Element/link) hinzugefügt wird, erstellt ein alternatives Stylesheet. Beim Definieren eines alternativen Stylesheets mit `<link rel="alternate">` ist das Attribut erforderlich und muss auf eine nicht-leere Zeichenfolge gesetzt werden.

Wenn das Attribut im Eröffnungstag des {{htmlelement('abbr')}} enthalten ist, muss der `title` eine vollständige Erweiterung der Abkürzung oder des Akronyms sein. Anstatt `title` zu verwenden, sollten Sie, wenn möglich, eine Klartext-Erweiterung der Abkürzung oder des Akronyms beim ersten Gebrauch bereitstellen und die `<abbr>` verwenden, um die Abkürzung zu kennzeichnen. Dies ermöglicht es allen Benutzern zu wissen, welchen Namen oder welchen Begriff die Abkürzung oder das Akronym verkürzt, während es den Benutzeragenten einen Hinweis gibt, wie der Inhalt angesagt werden sollte.

Obwohl `title` verwendet werden kann, um ein programmatisch verknüpftes Label für ein {{HTMLElement("input")}}-Element bereitzustellen, ist dies keine gute Praxis. Verwenden Sie stattdessen ein {{HTMLElement("label")}}.

## Mehrzeilige Titel

Das `title`-Attribut kann mehrere Zeilen enthalten. Jedes `U+000A LINE FEED` (`LF`) Zeichen stellt einen Zeilenumbruch dar. Es ist Vorsicht geboten, da das Folgende über zwei Zeilen gerendert wird:

### HTML

```html
<p>
  Newlines in <code>title</code> should be taken into account. This
  <span
    title="This is a
multiline title">
    example span
  </span>
  has a title a attribute with a newline.
</p>
<hr />
<pre id="output"></pre>
```

### JavaScript

Wir können das `title`-Attribut abfragen und es im leeren `<pre>`-Element wie folgt anzeigen:

```js
const span = document.querySelector("span");
const output = document.querySelector("#output");
output.textContent = span.title;
```

### Ergebnis

{{EmbedLiveSample('Multiline_titles')}}

## Vererbung des title-Attributs

Wenn ein Element kein `title`-Attribut hat, erbt es dieses von seinem übergeordneten Knoten, der wiederum von seinem eigenen übergeordneten Knoten erben kann, und so weiter.

Wenn dieses Attribut auf die leere Zeichenfolge gesetzt ist, bedeutet es, dass die `title`s der Vorfahren irrelevant sind und nicht im Tooltip für dieses Element verwendet werden sollten.

### HTML

```html
<div title="CoolTip">
  <p>Hovering here will show "CoolTip".</p>
  <p title="">Hovering here will show nothing.</p>
</div>
```

### Ergebnis

{{EmbedLiveSample('Title_attribute_inheritance')}}

## Zugänglichkeitsbedenken

Die Verwendung des `title`-Attributs ist höchst problematisch für:

- Menschen, die nur Touch-Geräte verwenden
- Menschen, die mit Tastaturen navigieren
- Menschen, die mit unterstützender Technologie wie Bildschirmlesern oder Vergrößerungsgeräten navigieren
- Menschen mit Beeinträchtigungen der Feinmotorik
- Menschen mit kognitiven Beeinträchtigungen

Dies liegt an der inkonsistenten Browser-Unterstützung, die durch das zusätzliche Parsen der Browser-gerenderten Seite durch unterstützende Technologie noch erschwert wird. Wenn ein Tooltip-Effekt gewünscht ist, ist es besser, [eine zugänglichere Technik zu verwenden](https://inclusive-components.design/tooltips-toggletips/), die mit den oben genannten Navigationsmethoden zugänglich ist.

- [3.2.5.1. The title attribute | W3C HTML 5.2: 3. Semantics, structure, and APIs of HTML documents](https://html.spec.whatwg.org/multipage/dom.html#the-title-attribute)
- [Using the HTML title attribute – updated | The Paciello Group](https://www.tpgi.com/using-the-html-title-attribute-updated/)
- [Tooltips & Toggletips - Inclusive Components](https://inclusive-components.design/tooltips-toggletips/)
- [The Trials and Tribulations of the Title Attribute - 24 Accessibility](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
- [`HTMLElement.title`](/de/docs/Web/API/HTMLElement/title), das dieses Attribut widerspiegelt.
