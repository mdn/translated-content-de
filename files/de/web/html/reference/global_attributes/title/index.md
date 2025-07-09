---
title: HTML title globales Attribut
short-title: title
slug: Web/HTML/Reference/Global_attributes/title
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`title`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) enthält Text, der beratende Informationen über das zugehörige Element darstellt.

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

Das `title`-Attribut kann auch verwendet werden, um Steuerelemente in [Datentabellen](/de/docs/Web/HTML/Reference/Elements/table) zu kennzeichnen.

Das `title`-Attribut, wenn es zu [`<link rel="stylesheet">`](/de/docs/Web/HTML/Reference/Elements/link) hinzugefügt wird, erstellt ein alternatives Stylesheet. Beim Definieren eines alternativen Stylesheets mit `<link rel="alternate">` ist das Attribut erforderlich und muss auf einen nicht-leeren String gesetzt werden.

Wenn es im Öffnungstag der {{htmlelement('abbr')}} enthalten ist, muss das `title` eine vollständige Erweiterung der Abkürzung oder des Akronyms sein. Anstatt `title` zu verwenden, geben Sie, wenn möglich, beim ersten Gebrauch die Erweiterung der Abkürzung oder des Akronyms im Klartext an und verwenden Sie `<abbr>`, um die Abkürzung zu kennzeichnen. Dies ermöglicht allen Nutzern zu wissen, welchen Namen oder Begriff die Abkürzung oder das Akronym verkürzt, und gibt den Benutzeragenten einen Hinweis, wie der Inhalt angekündigt werden soll.

Während `title` verwendet werden kann, um ein programmgesteuert zugeordnetes Label für ein {{HTMLElement("input")}}-Element bereitzustellen, ist dies keine gute Praxis. Verwenden Sie stattdessen ein {{HTMLElement("label")}}.

## Mehrzeilige Titel

Das `title`-Attribut kann mehrere Zeilen enthalten. Jedes `U+000A LINE FEED` (`LF`) Zeichen stellt einen Zeilenumbruch dar. Einige Vorsichtsmaßnahmen müssen getroffen werden, da dies bedeutet, dass das Folgende über zwei Zeilen gerendert wird:

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

## Vererbung des Title-Attributs

Wenn ein Element kein `title`-Attribut hat, erbt es dieses von seinem übergeordneten Knoten, der es wiederum von seinem übergeordneten Knoten erben kann, und so weiter.

Wenn dieses Attribut auf einen leeren String gesetzt ist, bedeutet dies, dass die `title`s der Vorfahren irrelevant sind und nicht im Tooltip für dieses Element verwendet werden sollten.

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

Die Verwendung des `title`-Attributs ist hoch problematisch für:

- Menschen, die ausschließlich Touch-Geräte verwenden
- Menschen, die mit Tastaturen navigieren
- Menschen, die mit unterstützenden Technologien wie Bildschirmlesern oder Vergrößerungen navigieren
- Menschen mit Beeinträchtigungen der Feinmotorik
- Menschen mit kognitiven Einschränkungen

Dies liegt an der inkonsistenten Unterstützung durch den Browser, die durch das zusätzliche Parsen der vom Browser gerenderten Seite durch unterstützende Technologien verschärft wird. Wenn ein Tooltip-Effekt gewünscht ist, ist es besser, [eine zugänglichere Technik](https://inclusive-components.design/tooltips-toggletips/) zu verwenden, die mit den oben genannten Navigationsmethoden zugänglich ist.

- [3.2.5.1. Das title-Attribut | W3C HTML 5.2: 3. Semantik, Struktur und APIs von HTML-Dokumenten](https://html.spec.whatwg.org/multipage/dom.html#the-title-attribute)
- [Verwendung des HTML title Attributs – aktualisiert | The Paciello Group](https://www.tpgi.com/using-the-html-title-attribute-updated/)
- [Tooltips & Toggletips - Inclusive Components](https://inclusive-components.design/tooltips-toggletips/)
- [Die Prüfungen und Probleme des Title-Attributs - 24 Accessibility](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`HTMLElement.title`](/de/docs/Web/API/HTMLElement/title), das dieses Attribut widerspiegelt.
