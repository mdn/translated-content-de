---
title: title
slug: Web/HTML/Global_attributes/title
l10n:
  sourceCommit: e04d8d2766c468f149445c0bf438d09f9b2d188c
---

{{HTMLSidebar("Global_attributes")}}

Das **`title`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) enthält Text, der beratende Informationen über das zugehörige Element darstellt.

{{EmbedInteractiveExample("pages/tabbed/attribute-title.html","tabbed-shorter")}}

Die Hauptverwendung des `title`-Attributs besteht darin, {{HTMLElement("iframe")}}-Elemente für unterstützende Technologie zu kennzeichnen.

Das `title`-Attribut kann auch verwendet werden, um Steuerelemente in [Datentabellen](/de/docs/Web/HTML/Element/table) zu kennzeichnen.

Das `title`-Attribut erstellt, wenn es zu [`<link rel="stylesheet">`](/de/docs/Web/HTML/Element/link) hinzugefügt wird, ein alternatives Stylesheet. Beim Definieren eines alternativen Stylesheets mit `<link rel="alternate">` ist das Attribut erforderlich und muss auf eine nicht leere Zeichenfolge gesetzt werden.

Wenn es im {{htmlelement('abbr')}}-Öffnungstag enthalten ist, muss das `title` eine vollständige Erweiterung der Abkürzung oder des Akronyms sein. Statt `title` zu verwenden, geben Sie nach Möglichkeit eine Erweiterung der Abkürzung oder des Akronyms beim ersten Gebrauch im Klartext an und markieren Sie die Abkürzung mit `<abbr>`. Dies ermöglicht es allen Benutzern zu wissen, welchen Namen oder Begriff die Abkürzung oder das Akronym verkürzt, und gibt den Benutzeragenten einen Hinweis darauf, wie der Inhalt angesagt werden soll.

Auch wenn `title` verwendet werden kann, um ein programmatisch zugeordnetes Label für ein {{HTMLElement("input")}}-Element bereitzustellen, ist dies keine gute Praxis. Verwenden Sie stattdessen ein {{HTMLElement("label")}}.

## Mehrzeilige Titel

Das `title`-Attribut kann mehrere Zeilen enthalten. Jedes `U+000A LINE FEED` (`LF`)-Zeichen stellt einen Zeilenumbruch dar. Es muss Vorsicht walten lassen, da dies bedeutet, dass das Folgende über zwei Zeilen gerendert wird:

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

Wenn ein Element kein `title`-Attribut hat, erbt es dieses von seinem übergeordneten Knoten, der es wiederum von seinem übergeordneten Element erben kann, und so weiter.

Wenn dieses Attribut auf die leere Zeichenfolge gesetzt ist, bedeutet dies, dass die `title`s der Vorfahren irrelevant sind und nicht im Tooltip für dieses Element verwendet werden sollten.

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

Die Verwendung des `title`-Attributs ist hochproblematisch für:

- Personen, die nur Touch-Geräte verwenden
- Personen, die mit Tastaturen navigieren
- Personen, die mit unterstützender Technologie wie Bildschirmlesegeräten oder Vergrößerungsprogrammen navigieren
- Personen mit eingeschränkter Feinmotorik
- Personen mit kognitiven Anliegen

Dies liegt an der inkonsistenten Browserunterstützung, die durch das zusätzliche Parsen der vom Browser gerenderten Seite durch unterstützende Technologie noch verstärkt wird. Wenn ein Tooltip-Effekt gewünscht wird, ist es besser, [eine barrierefreiere Technik zu verwenden](https://inclusive-components.design/tooltips-toggletips/), die mit den oben genannten Navigationsmethoden zugänglich ist.

- [3.2.5.1. Das title-Attribut | W3C HTML 5.2: 3. Semantik, Struktur und APIs von HTML-Dokumenten](https://html.spec.whatwg.org/multipage/dom.html#the-title-attribute)
- [Verwendung des HTML title-Attributs – aktualisiert | The Paciello Group](https://www.tpgi.com/using-the-html-title-attribute-updated/)
- [Tooltips & Toggletips - Inclusive Components](https://inclusive-components.design/tooltips-toggletips/)
- [Die Prüfungen und Widrigkeiten des title-Attributs - 24 Accessibility](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
- {{domxref("HTMLElement.title")}}, das dieses Attribut widerspiegelt.
