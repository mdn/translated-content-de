---
title: "ARIA: Präsentationsrolle"
slug: Web/Accessibility/ARIA/Roles/presentation_role
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{AccessibilitySidebar}}

Die Rolle `presentation` und ihr Synonym `none` entfernen die impliziten ARIA-Semantiken eines Elements aus dem Zugänglichkeitsbaum.

Der Inhalt des Elements wird für unterstützende Technologien weiterhin verfügbar sein; es sind nur die Semantiken des Containers – und in einigen Fällen erforderliche verwandte Nachkommen – die ihre Zuordnungen zur Zugänglichkeits-API nicht mehr offenlegen.

## Beschreibung

Obwohl ARIA hauptsächlich verwendet wird, um Semantiken auszudrücken, gibt es einige Situationen, in denen das Verbergen der Semantiken eines Elements vor unterstützenden Technologien hilfreich ist. Dies wird mit der Rolle `presentation` oder deren Synonymrolle `none` erreicht, die erklären, dass ein Element nur zur Präsentation verwendet wird und daher keine Zugänglichkeitssemantiken aufweist.

Wenn Sie `<h2 role="presentation">Democracy Dies in Darkness</h2>` schreiben, entfernen Sie die Überschriftensemantik des {{HTMLElement("Heading_Elements", "h2")}} Elements, wodurch es dem Äquivalent von `<div>Democracy Dies in Darkness</div>` entspricht. Die Überschriftenrollen-Semantik wird entfernt, aber der Inhalt selbst bleibt verfügbar.

Wenn ein Element erforderliche Nachkommen hat, wie die verschiedenen {{HTMLElement('table')}} Elemente und {{HTMLElement('li')}} als Kinder eines {{HTMLElement('ul')}} oder {{HTMLElement('ol')}}, entfernt die Rolle `presentation` oder `none` auf dem Tisch oder der Liste die Standardsemantiken des Elements, auf das es angewendet wurde, und deren erforderliche Nachkommenelemente.

Wenn `presentation` oder `none` auf ein {{HTMLElement('table')}} Element angewendet wird, dann erben die Nachkommen {{HTMLElement('caption')}}, {{HTMLElement('thead')}}, {{HTMLElement('tbody')}}, {{HTMLElement('tfoot')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}}, und {{HTMLElement('td')}} Elemente die Rolle und werden daher nicht für unterstützende Technologien offengelegt. Aber, Elemente innerhalb der {{HTMLElement('th')}} und {{HTMLElement('td')}} Elemente, einschließlich verschachtelter Tabellen, werden für unterstützende Technologien offengelegt.

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

Da die Rolle `presentation` auf das {{HTMLElement('ul')}} Element angewendet wurde, erbt jedes Kind {{HTMLElement('li')}} Element die Rolle `presentation`. Dies liegt daran, dass ARIA erfordert, dass die `listitem` Elemente ein übergeordnetes `list` Element haben. Während die {{HTMLElement('li')}} Elemente in diesem Fall nicht für unterstützende Technologien offengelegt werden, werden Nachkommen dieser erforderlichen Elemente offengelegt. Wenn wir eine Liste innerhalb eines dieser {{HTMLElement('li')}}'s verschachtelt hätten, wären diese für unterstützende Technologien sichtbar. Für Elemente ohne erforderliche Kinder behalten alle im Element mit `role="presentation"` oder `role="none"` verschachtelten Elemente ihre Semantiken bei. In diesem Fall sind die {{HTMLElement('a')}} Elemente, die in diesen {{HTMLElement('li')}} Elementen enthalten sind, offengelegt.

Das {{HTMLElement('a')}} ist ein Sonderfall. Seine Rolle wäre offengelegt worden, selbst wenn es direkt die Rolle `presentation` oder `none` angewendet bekommen hätte. Browser ignorieren `role="presentation"` und `role="none"` bei fokussierbaren Elementen, einschließlich Links und Eingabeelementen, oder allem mit einem [tabindex](/de/docs/Web/HTML/Global_attributes/tabindex) Attribut. Browser ignorieren auch die Einbeziehung der Rolle, wenn eines der Elemente globale ARIA-Zustände und -Eigenschaften enthält, wie [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby).

> [!NOTE]
> Das Element mit `role="presentation"` ist nicht Teil des Zugänglichkeitsbaums und sollte keinen zugänglichen Namen haben. Verwenden Sie **nicht** [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label).

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

Keine. Wenn ein globaler ARIA-Zustand und eine Eigenschaft eingestellt sind, werden `presentation` oder `none` ignoriert und die implizite Rolle des Elements wird verwendet.

## Beispiele

```html
<hr role="none" />
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden) versus [`role="presentation/none"`](https://www.scottohara.me/blog/2018/05/05/hidden-vs-none.html) - von Scott O'Hara
