---
title: HTML-Globale Attribut `title`
short-title: title
slug: Web/HTML/Reference/Global_attributes/title
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Das **`title`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) enthält Text, der beratende Informationen im Zusammenhang mit dem Element, zu dem es gehört, darstellt.

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

Das `title`-Attribut erstellt, wenn es zu [`<link rel="stylesheet">`](/de/docs/Web/HTML/Reference/Elements/link) hinzugefügt wird, ein alternatives Stylesheet. Bei der Definition eines alternativen Stylesheets mit `<link rel="alternate">` ist das Attribut erforderlich und muss auf eine nicht leere Zeichenkette gesetzt werden.

Wenn es im öffnenden {{htmlelement('abbr')}}-Tag enthalten ist, muss das `title` eine vollständige Erweiterung der Abkürzung oder des Akronyms sein. Anstatt `title` zu verwenden, ist es, wenn möglich, besser, bei der ersten Verwendung eine Erweiterung der Abkürzung oder des Akronyms im Klartext anzugeben und das `<abbr>` zum Markieren der Abkürzung zu verwenden. Dies ermöglicht es allen Benutzern, zu wissen, welchen Namen oder Begriff die Abkürzung oder das Akronym verkürzt, während es den Benutzeragenten einen Hinweis gibt, wie der Inhalt angekündigt werden soll.

Obwohl `title` verwendet werden kann, um ein programmgesteuert zugeordnetes Label für ein {{HTMLElement("input")}}-Element bereitzustellen, ist dies keine gute Praxis. Verwenden Sie stattdessen ein {{HTMLElement("label")}}.

## Mehrzeilige Titel

Das `title`-Attribut kann mehrere Zeilen enthalten. Jedes `U+000A LINE FEED` (`LF`)-Zeichen stellt einen Zeilenumbruch dar. Es ist Vorsicht geboten, da dies bedeutet, dass das Folgende über zwei Zeilen gerendert wird:

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

Wir können das `title`-Attribut abfragen und es im leeren `<pre>`-Element wie folgt anzeigen:

```js
const span = document.querySelector("span");
const output = document.querySelector("#output");
output.textContent = span.title;
```

### Ergebnis

{{EmbedLiveSample('Multiline_titles')}}

## Vererbung des Title-Attributs

Wenn ein Element kein `title`-Attribut hat, erbt es dieses von seinem Elternelement, das es wiederum von seinem Elternelement erben kann, und so weiter.

Wenn dieses Attribut auf die leere Zeichenkette gesetzt ist, bedeutet das, dass die `title`s seiner Vorfahren irrelevant sind und nicht im Tooltip für dieses Element verwendet werden sollten.

### HTML

```html
<div title="CoolTip">
  <p>Hovering here will show "CoolTip".</p>
  <p title="">Hovering here will show nothing.</p>
</div>
```

### Ergebnis

{{EmbedLiveSample('Title_attribute_inheritance')}}

## Barrierefreiheitsbedenken

Der Gebrauch des `title`-Attributs ist äußerst problematisch für:

- Personen, die nur Touch-Geräte verwenden
- Personen, die mit Tastaturen navigieren
- Personen, die mit unterstützenden Technologien wie Bildschirmlesegeräten oder Vergrößerungen navigieren
- Personen mit Beeinträchtigungen der Feinmotorik
- Personen mit kognitiven Beeinträchtigungen

Dies liegt an der inkonsistenten Browserunterstützung, die durch die zusätzliche Analyse der durch den Browser gerenderten Seite durch unterstützende Technologien noch verstärkt wird. Wenn ein Tooltip-Effekt gewünscht ist, ist es besser, [eine zugänglichere Technik zu verwenden](https://inclusive-components.design/tooltips-toggletips/), die mit den oben genannten Navigationsmethoden zugänglich ist.

- [3.2.5.1. Das title-Attribut | W3C HTML 5.2: 3. Semantik, Struktur und APIs von HTML-Dokumenten](https://html.spec.whatwg.org/multipage/dom.html#the-title-attribute)
- [Verwendung des HTML-title-Attributs – aktualisiert | The Paciello Group](https://www.tpgi.com/using-the-html-title-attribute-updated/)
- [Tooltips & Toggletips - Inclusive Components](https://inclusive-components.design/tooltips-toggletips/)
- [The Trials and Tribulations of the Title Attribute - 24 Accessibility](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`HTMLElement.title`](/de/docs/Web/API/HTMLElement/title) das dieses Attribut widerspiegelt.
