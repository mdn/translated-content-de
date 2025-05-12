---
title: "ARIA: presentation-Rolle"
short-title: presentation
slug: Web/Accessibility/ARIA/Reference/Roles/presentation_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die `presentation`-Rolle und ihr Synonym `none` entfernen die implizite ARIA-Semantik eines Elements aus dem Zugänglichkeitsbaum.

Der Inhalt des Elements bleibt für unterstützende Technologien zugänglich; es sind nur die Semantik des Containers – und in einigen Fällen auch erforderliche zugehörige Nachkommen – die ihre Zuordnungen zur Zugänglichkeits-API nicht mehr offenlegen.

## Beschreibung

Während ARIA hauptsächlich verwendet wird, um Semantik auszudrücken, gibt es einige Situationen, in denen es hilfreich ist, die Semantik eines Elements vor unterstützenden Technologien zu verbergen. Dies wird mit der `presentation`-Rolle oder ihrer synonymen Rolle `none` erreicht, die angeben, dass ein Element nur zur Darstellung verwendet wird und daher keine zugänglichen Semantiken besitzt.

Mit `<h2 role="presentation">Democracy Dies in Darkness</h2>` werden die Überschriftensemantiken des {{HTMLElement("Heading_Elements", "h2")}} Elements entfernt, sodass es gleichbedeutend mit `<div>Democracy Dies in Darkness</div>` ist. Die Überschriftenrollen-Semantiken werden entfernt, aber der Inhalt selbst bleibt verfügbar.

Wenn ein Element erforderliche Nachkommen hat, wie die verschiedenen {{HTMLElement('table')}}-Elemente und {{HTMLElement('li')}}-Kinder eines {{HTMLElement('ul')}} oder {{HTMLElement('ol')}}, entfernt die `presentation`- oder `none`-Rolle auf der Tabelle oder Liste die Standardsemantiken des Elements, auf das sie angewendet wurde, und ihrer erforderlichen Nachkommenelemente.

Wenn `presentation` oder `none` auf ein {{HTMLElement('table')}}-Element angewendet wird, erben die Nachkommen {{HTMLElement('caption')}}, {{HTMLElement('thead')}}, {{HTMLElement('tbody')}}, {{HTMLElement('tfoot')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}} und {{HTMLElement('td')}} Elemente die Rolle und werden daher nicht für unterstützende Technologien offen gelegt. Aber Elemente innerhalb der {{HTMLElement('th')}}- und {{HTMLElement('td')}}-Elemente, einschließlich verschachtelter Tabellen, werden unterstützenden Technologien zugänglich gemacht.

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

Da die `presentation`-Rolle auf das {{HTMLElement('ul')}}-Element angewendet wurde, erbt jedes Kind-{{HTMLElement('li')}}-Element die `presentation`-Rolle. Dies liegt daran, dass ARIA erfordert, dass die `listitem`-Elemente ein übergeordnetes `list`-Element haben. Während die {{HTMLElement('li')}}-Elemente in diesem Fall nicht unterstützenden Technologien zugänglich gemacht werden, sind die Nachkommen dieser erforderlichen Elemente zugänglich. Wenn wir eine Liste innerhalb eines dieser {{HTMLElement('li')}} verschachtelt hätten, wären sie für unterstützende Technologien sichtbar. Bei Elementen ohne erforderliche Kinder behalten die innerhalb des Elements mit `role="presentation"` oder `role="none"` verschachtelten Elemente ihre Semantik. In diesem Fall werden die innerhalb dieser {{HTMLElement('li')}}-Elemente enthaltenen {{HTMLElement('a')}}-Elemente bekannt gemacht.

Das {{HTMLElement('a')}} ist ein Sonderfall. Seine Rolle wäre bekannt gemacht worden, selbst wenn direkt die `presentation`- oder `none`-Rolle darauf angewendet worden wäre. Browser ignorieren `role="presentation"` und `role="none"` auf fokussierbaren Elementen, einschließlich Links und Eingabefeldern, oder allem mit einem [tabindex](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut. Browser ignorieren auch das Hinzufügen der Rolle, wenn eines der Elemente globale ARIA-Zustände und -Eigenschaften enthält, wie [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby).

> [!NOTE]
> Das Element mit `role="presentation"` ist nicht Teil des Zugänglichkeitsbaums und sollte keinen zugänglichen Namen haben. Verwenden Sie **nicht** [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label).

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

Keine. Wenn ein globaler ARIA-Zustand und eine Eigenschaft festgelegt sind, wird `presentation` oder `none` ignoriert, und die implizite Rolle des Elements wird verwendet.

## Beispiele

```html
<hr role="none" />
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) versus [`role="presentation/none"`](https://www.scottohara.me/blog/2018/05/05/hidden-vs-none.html) - von Scott O'Hara
