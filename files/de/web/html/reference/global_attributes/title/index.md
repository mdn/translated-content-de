---
title: title
slug: Web/HTML/Reference/Global_attributes/title
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar("Global_attributes")}}

Das **`title`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) enthält Text, der beratende Informationen darstellt, die sich auf das zugehörige Element beziehen.

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

Die Hauptverwendung des `title`-Attributs besteht darin, {{HTMLElement("iframe")}}-Elemente für unterstützende Technologien zu kennzeichnen.

Das `title`-Attribut kann auch verwendet werden, um Steuerungselemente in [Datentabellen](/de/docs/Web/HTML/Reference/Elements/table) zu beschreiben.

Das `title`-Attribut erzeugt, wenn es zu [`<link rel="stylesheet">`](/de/docs/Web/HTML/Reference/Elements/link) hinzugefügt wird, ein alternatives Stylesheet. Wenn ein alternatives Stylesheet mit `<link rel="alternate">` definiert wird, ist das Attribut erforderlich und muss auf eine nicht-leere Zeichenkette gesetzt werden.

Wenn es im öffnenden Tag von {{htmlelement('abbr')}} enthalten ist, muss das `title`-Attribut eine vollständige Darstellung der Abkürzung oder des Akronyms sein. Anstatt `title` zu verwenden, sollten Sie nach Möglichkeit beim ersten Gebrauch eine Erklärungsdarstellung der Abkürzung oder des Akronyms im Klartext bereitstellen und das `<abbr>`-Format zur Markierung der Abkürzung verwenden. Dies ermöglicht es allen Benutzern, zu erfahren, welchen Namen oder Begriff die Abkürzung oder das Akronym verkürzt, während es den Benutzeragenten einen Hinweis gibt, wie der Inhalt angekündigt werden soll.

Obwohl `title` verwendet werden kann, um ein programmgesteuertes Label für ein {{HTMLElement("input")}}-Element bereitzustellen, ist dies keine gute Praxis. Verwenden Sie stattdessen ein {{HTMLElement("label")}}.

## Mehrzeilige Titel

Das `title`-Attribut kann mehrere Zeilen enthalten. Jedes `U+000A LINE FEED` (`LF`) Zeichen repräsentiert einen Zeilenumbruch. Einige Vorsichtsmaßnahmen sind erforderlich, da dies bedeutet, dass Folgendes über zwei Zeilen hinweg angezeigt wird:

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

## Vererbung des title-Attributes

Wenn ein Element kein `title`-Attribut hat, erbt es dieses von seinem übergeordneten Knoten, der es wiederum von seinem übergeordneten Knoten erben kann, und so weiter.

Wenn dieses Attribut auf die leere Zeichenkette gesetzt wird, bedeutet dies, dass die `title`-Werte seiner Vorfahren irrelevant sind und nicht im Tooltip für dieses Element verwendet werden sollten.

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

Die Verwendung des `title`-Attributs ist hochproblematisch für:

- Menschen, die nur Touch-Geräte verwenden
- Menschen, die mit Tastaturen navigieren
- Menschen, die mit unterstützender Technologie wie Bildschirmlesegeräten oder Vergrößerung navigieren
- Menschen mit Beeinträchtigungen der Feinmotorik
- Menschen mit kognitiven Beeinträchtigungen

Dies ist aufgrund inkonsistenter Browserunterstützung schwierig, die durch das zusätzliche Parsen der durch den Browser gerenderten Seite durch unterstützende Technologie noch verschärft wird. Wenn ein Tooltip-Effekt gewünscht wird, ist es besser, [eine zugänglichere Technik](https://inclusive-components.design/tooltips-toggletips/) zu verwenden, die mit den oben genannten Navigationsmethoden zugänglich ist.

- [3.2.5.1. The title attribute | W3C HTML 5.2: 3. Semantics, structure, and APIs of HTML documents](https://html.spec.whatwg.org/multipage/dom.html#the-title-attribute)
- [Using the HTML title attribute – updated | The Paciello Group](https://www.tpgi.com/using-the-html-title-attribute-updated/)
- [Tooltips & Toggletips - Inclusive Components](https://inclusive-components.design/tooltips-toggletips/)
- [The Trials and Tribulations of the Title Attribute - 24 Accessibility](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`HTMLElement.title`](/de/docs/Web/API/HTMLElement/title), das dieses Attribut widerspiegelt.
