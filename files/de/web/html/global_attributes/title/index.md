---
title: title
slug: Web/HTML/Global_attributes/title
l10n:
  sourceCommit: e04d8d2766c468f149445c0bf438d09f9b2d188c
---

{{HTMLSidebar("Global_attributes")}}

Das **`title`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) enthält Text, der beratende Informationen zu dem Element darstellt, zu dem es gehört.

{{EmbedInteractiveExample("pages/tabbed/attribute-title.html","tabbed-shorter")}}

Die Hauptnutzung des `title`-Attributs besteht darin, {{HTMLElement("iframe")}}-Elemente für unterstützende Technologien zu beschriften.

Das `title`-Attribut kann auch verwendet werden, um Steuerelemente in [Datentabellen](/de/docs/Web/HTML/Element/table) zu beschriften.

Das `title`-Attribut, wenn es zu [`<link rel="stylesheet">`](/de/docs/Web/HTML/Element/link) hinzugefügt wird, erstellt ein alternatives Stylesheet. Beim Definieren eines alternativen Stylesheets mit `<link rel="alternate">` ist das Attribut erforderlich und muss auf eine nicht-leere Zeichenkette gesetzt werden.

Wenn es im öffnenden {{htmlelement('abbr')}}-Tag enthalten ist, muss das `title` eine vollständige Entfaltung der Abkürzung oder des Akronyms sein. Statt `title` zu verwenden, sollten Sie, wann immer möglich, die Entfaltung der Abkürzung oder des Akronyms beim ersten Gebrauch im Klartext bereitstellen und das `<abbr>` verwenden, um die Abkürzung zu markieren. Dies ermöglicht es allen Benutzern zu wissen, welche Namen oder Begriffe die Abkürzung oder das Akronym verkürzt, und bietet einen Hinweis für Benutzeragenten, wie der Inhalt angekündigt werden soll.

Während `title` verwendet werden kann, um ein programmatisch zugeordnetes Label für ein {{HTMLElement("input")}}-Element bereitzustellen, ist dies keine gute Praxis. Verwenden Sie stattdessen ein {{HTMLElement("label")}}.

## Mehrzeilige Titel

Das `title`-Attribut kann mehrere Zeilen enthalten. Jedes `U+000A LINE FEED` (`LF`)-Zeichen stellt einen Zeilenumbruch dar. Es ist etwas Vorsicht geboten, da dies bedeutet, dass das Folgende über zwei Zeilen angezeigt wird:

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

Wenn ein Element kein `title`-Attribut hat, erbt es dieses von seinem übergeordneten Knoten, der es wiederum von seinem übergeordneten Knoten erben kann, und so weiter.

Wenn dieses Attribut auf die leere Zeichenkette gesetzt ist, bedeutet dies, dass die `title`s der Vorfahren irrelevant sind und nicht im Tooltip für dieses Element verwendet werden sollten.

### HTML

```html
<div title="CoolTip">
  <p>Hovering here will show "CoolTip".</p>
  <p title="">Hovering here will show nothing.</p>
</div>
```

### Ergebnis

{{EmbedLiveSample('Title_attribute_inheritance')}}

## Barrierefreiheitsprobleme

Die Verwendung des `title`-Attributs ist höchst problematisch für:

- Personen, die nur Touch-Geräte verwenden
- Personen, die mit Tastaturen navigieren
- Personen, die mit unterstützenden Technologien wie Bildschirmlesegeräten oder Vergrößerungssoftware navigieren
- Personen mit Beeinträchtigungen der Feinmotorik
- Personen mit kognitiven Problemen

Dies liegt an der inkonsistenten Browser-Unterstützung, die durch die zusätzliche Analyse der assistiven Technologie der vom Browser gerenderten Seite noch verstärkt wird. Wenn ein Tooltip-Effekt gewünscht wird, ist es besser, [eine zugänglichere Technik zu verwenden](https://inclusive-components.design/tooltips-toggletips/), die mit den oben genannten Navigationsmethoden zugänglich ist.

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
