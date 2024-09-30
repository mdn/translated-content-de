---
title: "ARIA: Präsentationsrolle"
slug: Web/Accessibility/ARIA/Roles/presentation_role
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{AccessibilitySidebar}}

Die `presentation` Rolle und ihr Synonym `none` entfernen die impliziten ARIA-Semantiken eines Elements, sodass sie nicht im Barrierefreiheit-Baum dargestellt werden.

Der Inhalt des Elements bleibt jedoch weiterhin für unterstützende Technologien zugänglich; es sind nur die Semantiken des Containers — und in einigen Fällen die erforderlichen zugehörigen Nachfahren —, die ihre Zuordnungen zur Barrierefreiheit-API nicht mehr offenlegen.

## Beschreibung

Während ARIA hauptsächlich verwendet wird, um Semantiken auszudrücken, gibt es Situationen, in denen es hilfreich ist, die Semantiken eines Elements vor unterstützenden Technologien zu verbergen. Dies geschieht mit der `presentation` Rolle oder ihrer synonymen Rolle `none`, die erklärt, dass ein Element nur zur Präsentation verwendet wird und daher keine Zugänglichkeit-Semantiken besitzt.

Das Schreiben von `<h2 role="presentation">Democracy Dies in Darkness</h2>` entfernt die Überschriften-Semantik des {{HTMLElement("Heading_Elements", "h2")}} Elements und macht es äquivalent zu `<div>Democracy Dies in Darkness</div>`. Die Überschriftsrollen-Semantik wird entfernt, aber der Inhalt selbst ist weiterhin verfügbar.

Wenn ein Element erforderliche Nachkommen hat, wie die verschiedenen {{HTMLElement('table')}}, Elemente und {{HTMLElement('li')}}s als Kinder eines {{HTMLElement('ul')}} oder {{HTMLElement('ol')}}, entfernt die `presentation` oder `none` Rolle auf der Tabelle oder Liste die Standardsemantiken des Elements, auf das sie angewendet wurde, und ihrer erforderlichen Nachkommenelemente.

Wenn die `presentation` oder `none` Rolle auf ein {{HTMLElement('table')}} Element angewendet wird, erben die Nachkommen {{HTMLElement('caption')}}, {{HTMLElement('thead')}}, {{HTMLElement('tbody')}}, {{HTMLElement('tfoot')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, und {{HTMLElement('td')}} Elemente die Rolle und werden somit nicht an unterstützende Technologien übergeben. Aber, Elemente innerhalb der {{HTMLElement('th')}} und {{HTMLElement('td')}} Elemente, einschließlich verschachtelten Tabellen, werden an unterstützende Technologien übergeben.

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

Weil die `presentation` Rolle auf das {{HTMLElement('ul')}} Element angewendet wurde, erbt jedes Kind-{{HTMLElement('li')}}-Element die `presentation` Rolle. Dies liegt daran, dass ARIA verlangt, dass `listitem` Elemente ein übergeordnetes `list` Element haben. Während die {{HTMLElement('li')}} Elemente in diesem Fall nicht an unterstützende Technologien übergeben werden, sind Nachkommen dieser erforderlichen Elemente sichtbar. Wäre eine Liste innerhalb eines dieser {{HTMLElement('li')}}‘s verschachtelt, wären sie für unterstützende Technologien sichtbar. Für Elemente ohne erforderliche Kinder bewahren alle innerhalb des Elements mit `role="presentation"` oder `role="none"` verschachtelten Elemente ihre Semantiken. In diesem Fall werden die {{HTMLElement('a')}} Elemente innerhalb dieser {{HTMLElement('li')}} Elemente offengelegt.

Das {{HTMLElement('a')}} ist ein besonderer Fall. Seine Rolle wäre offengelegt worden, selbst wenn es die `presentation` oder `none` Rolle direkt angewendet hätte. Browser ignorieren `role="presentation"` und `role="none"` bei fokussierbaren Elementen, einschließlich Links und Eingaben, oder bei allem, was ein [tabindex](/de/docs/Web/HTML/Global_attributes/tabindex) Attribut gesetzt hat. Browser ignorieren auch die Einbeziehung der Rolle, wenn eines der Elemente globale ARIA-Zustände und Eigenschaften enthält, wie etwa [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby).

> [!NOTE]
> Das Element mit `role="presentation"` ist nicht Teil des Barrierefreiheit-Baums und sollte keinen zugänglichen Namen haben. Verwenden Sie **nicht** [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label).

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

Keine. Wenn ein globaler ARIA-Zustand und eine Eigenschaft gesetzt sind, wird `presentation` oder `none` ignoriert, und die implizite Rolle des Elements wird verwendet.

## Beispiele

```html
<hr role="none" />
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden) versus [`role="presentation/none"`](https://www.scottohara.me/blog/2018/05/05/hidden-vs-none.html) - von Scott O'Hara
