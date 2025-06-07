---
title: HTML `title` Globales Attribut
short-title: title
slug: Web/HTML/Reference/Global_attributes/title
l10n:
  sourceCommit: 7885271e36e9d2744296c01f400653f63caa6f75
---

{{HTMLSidebar("Global_attributes")}}

Das **`title`** [globales Attribut](/de/docs/Web/HTML/Reference/Global_attributes) enthält Text, der beratende Informationen in Bezug auf das Element darstellt, zu dem es gehört.

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

Die Hauptnutzung des `title`-Attributs besteht darin, {{HTMLElement("iframe")}}-Elemente für unterstützende Technologien zu kennzeichnen.

Das `title`-Attribut kann auch verwendet werden, um Bedienelemente in [Datentabellen](/de/docs/Web/HTML/Reference/Elements/table) zu kennzeichnen.

Das `title`-Attribut, wenn es zu [`<link rel="stylesheet">`](/de/docs/Web/HTML/Reference/Elements/link) hinzugefügt wird, erstellt ein alternatives Stylesheet. Beim Definieren eines alternativen Stylesheets mit `<link rel="alternate">` ist das Attribut erforderlich und muss auf eine nicht leere Zeichenfolge gesetzt werden.

Wenn es am Eröffnungstag von {{htmlelement('abbr')}} enthalten ist, muss der `title` eine vollständige Entfaltung der Abkürzung oder des Akronyms sein. Anstatt `title` zu verwenden, geben Sie nach Möglichkeit eine Entfaltung der Abkürzung oder des Akronyms im Klartext bei der ersten Verwendung an und markieren Sie die Abkürzung mit `<abbr>`. Dies ermöglicht es allen Benutzern, zu wissen, welchen Namen oder Begriff die Abkürzung oder das Akronym verkürzt, und liefert einen Hinweis an Benutzeragenten, wie der Inhalt angekündigt werden soll.

Obwohl `title` verwendet werden kann, um ein programmatisch zugeordnetes Label für ein {{HTMLElement("input")}}-Element bereitzustellen, ist dies keine gute Praxis. Verwenden Sie stattdessen ein {{HTMLElement("label")}}.

## Mehrzeilige Titel

Das `title`-Attribut kann mehrere Zeilen enthalten. Jedes `U+000A LINE FEED` (`LF`)-Zeichen stellt einen Zeilenumbruch dar. Dabei ist etwas Vorsicht geboten, da das Folgende über zwei Zeilen dargestellt wird:

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

Hat ein Element kein `title`-Attribut, dann erbt es dieses von seinem übergeordneten Knoten, der wiederum von seinem übergeordneten Knoten erben kann, und so weiter.

Wenn dieses Attribut auf eine leere Zeichenfolge gesetzt ist, bedeutet dies, dass die `title`s seiner Vorfahren nicht relevant sind und nicht im Tooltip für dieses Element verwendet werden sollten.

### HTML

```html
<div title="CoolTip">
  <p>Hovering here will show "CoolTip".</p>
  <p title="">Hovering here will show nothing.</p>
</div>
```

### Ergebnis

{{EmbedLiveSample('Title_attribute_inheritance')}}

## Zugänglichkeitsprobleme

Die Verwendung des `title`-Attributs ist hochproblematisch für:

- Personen, die ausschließlich Touch-Geräte verwenden
- Personen, die mit Tastaturen navigieren
- Personen, die mit unterstützenden Technologien wie Bildschirmlesegeräten oder Vergrößerungsmitteln navigieren
- Personen mit eingeschränkter Feinmotorik
- Personen mit kognitiven Bedenken

Dies liegt an der inkonsistenten Browserunterstützung, verstärkt durch das zusätzliche Parsing der vom Browser gerenderten Seite durch assistive Technologien. Wenn ein Tooltip-Effekt gewünscht wird, ist es besser, [eine zugänglichere Technik zu verwenden](https://inclusive-components.design/tooltips-toggletips/), die mit den oben genannten Browsing-Methoden zugänglich ist.

- [3.2.5.1. Das title-Attribut | W3C HTML 5.2: 3. Semantik, Struktur und APIs von HTML-Dokumenten](https://html.spec.whatwg.org/multipage/dom.html#the-title-attribute)
- [Verwendung des HTML-title-Attributs – aktualisiert | Die Paciello Group](https://www.tpgi.com/using-the-html-title-attribute-updated/)
- [Tooltips & Toggletips - Inclusive Components](https://inclusive-components.design/tooltips-toggletips/)
- [Die Herausforderungen des Title-Attributs - 24 Accessibility](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`HTMLElement.title`](/de/docs/Web/API/HTMLElement/title), das dieses Attribut widerspiegelt.
