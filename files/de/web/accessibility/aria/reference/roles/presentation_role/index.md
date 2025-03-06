---
title: "ARIA: Präsentationsrolle"
slug: Web/Accessibility/ARIA/Reference/Roles/presentation_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die `presentation`-Rolle und ihr Synonym `none` entfernen implizite ARIA-Semantik eines Elements, sodass diese nicht im Barrierefreiheitsbaum sichtbar wird.

Der Inhalt des Elements wird nach wie vor für unterstützende Technologien verfügbar sein; lediglich die Semantik des Containers – und in manchen Fällen erforderliche zugehörige Nachfahren – wird ihre Zuordnungen zur Zugänglichkeits-API nicht mehr offenlegen.

## Beschreibung

Während ARIA hauptsächlich verwendet wird, um Semantik auszudrücken, gibt es einige Situationen, in denen es hilfreich ist, die Semantik eines Elements vor assistiven Technologien zu verbergen. Dies wird mit der `presentation`-Rolle oder ihrer synonymen Rolle `none` erreicht, die erklären, dass ein Element nur zur Präsentation verwendet wird und daher keine Zugänglichkeits-Semantik hat.

Das Schreiben von `<h2 role="presentation">Democracy Dies in Darkness</h2>` entfernt die Überschrift-Semantik des {{HTMLElement("Heading_Elements", "h2")}}-Elements, was es dem Äquivalent von `<div>Democracy Dies in Darkness</div>` gleichstellt. Die Semantik der Überschriftenrolle wird entfernt, aber der Inhalt selbst bleibt verfügbar.

Wenn ein Element erforderliche Nachfahren hat, wie die verschiedenen {{HTMLElement('table')}}-Elemente und {{HTMLElement('li')}}-Kinder eines {{HTMLElement('ul')}} oder {{HTMLElement('ol')}}, entfernt die `presentation`- oder `none`-Rolle bei der Tabelle oder Liste die Standardsemantik des Elements, auf das sie angewendet wird, sowie deren erforderliche Nachfahrenelemente.

Wird die `presentation`- oder `none`-Rolle auf ein {{HTMLElement('table')}}-Element angewendet, erben die Nachfahren {{HTMLElement('caption')}}, {{HTMLElement('thead')}}, {{HTMLElement('tbody')}}, {{HTMLElement('tfoot')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}} und {{HTMLElement('td')}} die Rolle und werden somit nicht an assistive Technologien weitergegeben. Aber Elemente innerhalb der {{HTMLElement('th')}}- und {{HTMLElement('td')}}-Elemente, einschließlich verschachtelter Tabellen, werden assistiven Technologien zugänglich gemacht.

```html
<ul role="presentation">
  <li>
    <a href="#">Link 1</a>
  </li>
  <li>
    <a href="#">Link 2</a>
  </li>
  <li>
    <a href="#">Link 3</a>
  </li>
</ul>
```

Da die `presentation`-Rolle auf das {{HTMLElement('ul')}}-Element angewendet wurde, erbt jedes Kind-{{HTMLElement('li')}}-Element die `presentation`-Rolle. Dies liegt daran, dass ARIA erfordert, dass die `listitem`-Elemente ein übergeordnetes `list`-Element haben. Während die {{HTMLElement('li')}}-Elemente in diesem Fall nicht für assistive Technologien sichtbar sind, sind Nachfahren dieser erforderlichen Elemente sichtbar. Hätten wir eine Liste innerhalb eines dieser {{HTMLElement('li')}}s verschachtelt, wäre diese für assistive Technologien sichtbar. Bei Elementen ohne erforderliche Kinder behalten alle Elemente, die innerhalb des Elements mit `role="presentation"` oder `role="none"` verschachtelt sind, ihre Semantik. In diesem Fall sind die {{HTMLElement('a')}}-Elemente, die innerhalb dieser {{HTMLElement('li')}}-Elemente enthalten sind, sichtbar.

Das {{HTMLElement('a')}}-Element ist ein Sonderfall. Seine Rolle wäre auch dann sichtbar, wenn direkt die `presentation`- oder `none`-Rolle darauf angewendet worden wäre. Browser ignorieren `role="presentation"` und `role="none"` bei fokussierbaren Elementen, einschließlich Links und Eingaben, oder allem mit einem [tabindex](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut. Browser ignorieren auch die einbezogene Rolle, wenn eines der Elemente globale ARIA-Zustände und Eigenschaften enthält, wie z.B. [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby).

> [!NOTE]
> Das Element mit `role="presentation"` ist kein Teil des Barrierefreiheitsbaums und sollte keinen zugänglichen Namen haben. Verwenden Sie **nicht** [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label).

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

Keine. Wenn ein globaler ARIA-Zustand und eine Eigenschaft festgelegt sind, werden `presentation` oder `none` ignoriert und die implizite Rolle des Elements wird verwendet.

## Beispiele

```html
<hr role="none" />
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) versus [`role="presentation/none"`](https://www.scottohara.me/blog/2018/05/05/hidden-vs-none.html) - von Scott O'Hara
