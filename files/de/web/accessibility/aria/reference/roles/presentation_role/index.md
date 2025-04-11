---
title: "ARIA: Präsentationsrolle"
slug: Web/Accessibility/ARIA/Reference/Roles/presentation_role
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Die `presentation`- und ihre Synonymrolle `none` entfernen die implizite ARIA-Semantik eines Elements, damit diese nicht im Zugänglichkeitsbaum sichtbar ist.

Der Inhalt des Elements bleibt für unterstützende Technologien verfügbar; es sind nur die Semantiken des Containers — und in einigen Fällen erforderliche zugeordnete Nachfahren —, die ihre Zuordnungen zur Zugänglichkeits-API nicht mehr offenlegen.

## Beschreibung

Während ARIA hauptsächlich dazu verwendet wird, Semantik auszudrücken, gibt es einige Situationen, in denen es hilfreich ist, die Semantik eines Elements vor unterstützenden Technologien zu verbergen. Dies wird mit der `presentation`-Rolle oder ihrer Synonymrolle `none` erreicht, die angeben, dass ein Element nur zur Darstellung verwendet wird und daher keine Zugänglichkeitssemantiken besitzt.

Das Schreiben von `<h2 role="presentation">Democracy Dies in Darkness</h2>` entfernt die Überschriftensemantik des {{HTMLElement("Heading_Elements", "h2")}}-Elements, wodurch es dem Äquivalent von `<div>Democracy Dies in Darkness</div>` entspricht. Die Überschriftenrollensemantik wird entfernt, aber der Inhalt selbst bleibt verfügbar.

Wenn ein Element erforderliche Nachfahren hat, wie zum Beispiel die verschiedenen {{HTMLElement('table')}}-Elemente und {{HTMLElement('li')}}-Kinder eines {{HTMLElement('ul')}} oder {{HTMLElement('ol')}}, wird durch die `presentation`- oder `none`-Rolle auf der Tabelle oder Liste die Standardsemantik des Elements, auf das sie angewendet wurde, sowie deren erforderliche Nachfahrelemente entfernt.

Wird `presentation` oder `none` auf ein {{HTMLElement('table')}}-Element angewendet, erben die Nachfahren {{HTMLElement('caption')}}, {{HTMLElement('thead')}}, {{HTMLElement('tbody')}}, {{HTMLElement('tfoot')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, und {{HTMLElement('td')}} die Rolle und sind somit nicht für unterstützende Technologien sichtbar. Aber Elemente innerhalb der {{HTMLElement('th')}} und {{HTMLElement('td')}}-Elemente, einschließlich verschachtelter Tabellen, sind für unterstützende Technologien sichtbar.

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

Da die `presentation`-Rolle auf das {{HTMLElement('ul')}}-Element angewendet wurde, erbt jedes Kind-{{HTMLElement('li')}}-Element die `presentation`-Rolle. Dies liegt daran, dass ARIA verlangt, dass `listitem`-Elemente ein übergeordnetes `list`-Element haben. Während die {{HTMLElement('li')}}-Elemente in diesem Fall nicht für unterstützende Technologien sichtbar sind, sind Nachfahren dieser erforderlichen Elemente sichtbar. Wenn wir innerhalb eines dieser {{HTMLElement('li')}}-Elemente eine Liste verschachtelt hätten, wären sie für unterstützende Technologien sichtbar. Bei Elementen ohne erforderliche Kinder behalten alle innerhalb des Elements mit `role="presentation"` oder `role="none"` verschachtelten Elemente ihre Semantik. In diesem Fall sind die innerhalb dieser {{HTMLElement('li')}}-Elemente enthaltenen {{HTMLElement('a')}}-Elemente sichtbar.

Das {{HTMLElement('a')}} ist ein besonderer Fall. Seine Rolle wäre sichtbar gewesen, selbst wenn es direkt mit der `presentation`- oder `none`-Rolle belegt worden wäre. Browser ignorieren `role="presentation"` und `role="none"` bei fokussierbaren Elementen, einschließlich Links und Eingaben, oder bei allem, was ein [tabindex](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut gesetzt hat. Browser ignorieren auch die Einbeziehung der Rolle, wenn eines der Elemente globale ARIA-Zustände und -Eigenschaften enthält, wie beispielsweise [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby).

> [!NOTE]
> Das Element mit `role="presentation"` ist kein Teil des Zugänglichkeitsbaums und sollte keinen zugänglichen Namen haben. Verwenden Sie **nicht** [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label).

### Zugeordnete WAI-ARIA-Rollen, -Zustände und -Eigenschaften

Keine. Wenn ein globaler ARIA-Zustand und eine -Eigenschaft gesetzt sind, werden `presentation` oder `none` ignoriert und die implizite Rolle des Elements wird verwendet.

## Beispiele

```html
<hr role="none" />
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) versus [`role="presentation/none"`](https://www.scottohara.me/blog/2018/05/05/hidden-vs-none.html) - von Scott O'Hara
