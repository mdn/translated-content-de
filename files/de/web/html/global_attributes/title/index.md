---
title: title
slug: Web/HTML/Global_attributes/title
l10n:
  sourceCommit: e04d8d2766c468f149445c0bf438d09f9b2d188c
---

{{HTMLSidebar("Global_attributes")}}

Das **`title`**-[globale Attribut](/de/docs/Web/HTML/Global_attributes) enthält Text, der beratende Informationen in Bezug auf das Element darstellt, zu dem es gehört.

{{EmbedInteractiveExample("pages/tabbed/attribute-title.html","tabbed-shorter")}}

Die Hauptnutzung des `title`-Attributs besteht darin, {{HTMLElement("iframe")}}-Elemente für unterstützende Technologien zu kennzeichnen.

Das `title`-Attribut kann auch verwendet werden, um Steuerelemente in [Datentabellen](/de/docs/Web/HTML/Element/table) zu kennzeichnen.

Das `title`-Attribut, wenn es zu [`<link rel="stylesheet">`](/de/docs/Web/HTML/Element/link) hinzugefügt wird, erstellt ein alternatives Stylesheet. Beim Definieren eines alternativen Stylesheets mit `<link rel="alternate">` ist das Attribut erforderlich und muss auf eine nicht-leere Zeichenfolge gesetzt werden.

Wenn es im öffnenden {{htmlelement('abbr')}} Tag enthalten ist, muss das `title` eine vollständige Erweiterung der Abkürzung oder des Akronyms sein. Anstatt `title` zu verwenden, wenn möglich, geben Sie eine Erweiterung der Abkürzung oder des Akronyms in Klartext bei der ersten Verwendung an und verwenden das `<abbr>`, um die Abkürzung zu markieren. Dies ermöglicht es allen Benutzern, zu wissen, welchen Namen oder Begriff die Abkürzung oder das Akronym verkürzt, während es den Benutzeragenten einen Hinweis gibt, wie der Inhalt angekündigt werden soll.

Obwohl `title` verwendet werden kann, um eine programmatisch zugeordnete Kennzeichnung für ein {{HTMLElement("input")}}-Element bereitzustellen, ist dies keine gute Praxis. Verwenden Sie stattdessen ein {{HTMLElement("label")}}.

## Mehrzeilige Titel

Das `title`-Attribut kann mehrere Zeilen enthalten. Jedes `U+000A LINE FEED` (`LF`)-Zeichen stellt einen Zeilenumbruch dar. Es ist Vorsicht geboten, da dies bedeutet, dass das Folgende über zwei Zeilen hinweg dargestellt wird:

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

Wenn dieses Attribut auf den leeren String gesetzt wird, bedeutet das, dass die `title`s der Vorfahren irrelevant sind und nicht im Tooltip für dieses Element verwendet werden sollten.

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

Die Verwendung des `title`-Attributs ist hoch problematisch für:

- Personen, die ausschließlich Touch-Geräte verwenden
- Personen, die mit Tastaturen navigieren
- Personen, die mit unterstützender Technologie wie Bildschirmlesegeräten oder Vergrößerern navigieren
- Personen mit beeinträchtigter Feinmotorik
- Personen mit kognitiven Bedenken

Dies liegt an der inkonsistenten Browser-Unterstützung, die durch das zusätzliche Parsen der von Browsern gerenderten Seite durch unterstützende Technologien erschwert wird. Wenn ein Tooltip-Effekt erwünscht ist, ist es besser, [eine zugänglichere Technik zu verwenden](https://inclusive-components.design/tooltips-toggletips/), die mit den oben genannten Browsing-Methoden zugänglich ist.

- [3.2.5.1. Das Title-Attribut | W3C HTML 5.2: 3. Semantik, Struktur und APIs von HTML-Dokumenten](https://html.spec.whatwg.org/multipage/dom.html#the-title-attribute)
- [Verwendung des HTML-Title-Attributs – aktualisiert | The Paciello Group](https://www.tpgi.com/using-the-html-title-attribute-updated/)
- [Tooltips & Toggletips - Inclusive Components](https://inclusive-components.design/tooltips-toggletips/)
- [Die Schwierigkeiten und Herausforderungen des Title-Attributs - 24 Accessibility](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
- [`HTMLElement.title`](/de/docs/Web/API/HTMLElement/title), das dieses Attribut widerspiegelt.
