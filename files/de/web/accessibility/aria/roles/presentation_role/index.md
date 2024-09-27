---
title: "ARIA: Präsentationsrolle"
slug: Web/Accessibility/ARIA/Roles/presentation_role
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{AccessibilitySidebar}}

Die `presentation`-Rolle und ihr Synonym `none` entfernen die impliziten ARIA-Semantiken eines Elements von der Freigabe im Zugänglichkeitsbaum.

Der Inhalt des Elements bleibt für unterstützende Technologien verfügbar; es sind nur die Semantiken des Containers – und in einigen Fällen erforderliche zugehörige Nachkommen –, die nicht mehr ihre Zuordnungen zur Zugänglichkeits-API freigeben.

## Beschreibung

Während ARIA hauptsächlich zur Darstellung von Semantiken verwendet wird, gibt es einige Situationen, in denen das Verbergen der Semantiken eines Elements vor unterstützenden Technologien hilfreich ist. Dies geschieht durch die `presentation`-Rolle oder ihre Synonymrolle `none`, die erklären, dass ein Element nur zur Präsentation verwendet wird und daher keine Zugänglichkeitssemantiken besitzt.

Das Schreiben von `<h2 role="presentation">Democracy Dies in Darkness</h2>` entfernt die Überschriftensemantik des {{HTMLElement("Heading_Elements", "h2")}}-Elements, was es zum Äquivalent von `<div>Democracy Dies in Darkness</div>` macht. Die Überschriften-Semantik wird entfernt, aber der Inhalt selbst bleibt verfügbar.

Wenn ein Element erforderliche Nachkommen hat, wie die verschiedenen {{HTMLElement('table')}}-Elemente und {{HTMLElement('li')}}s, die Kinder eines {{HTMLElement('ul')}} oder {{HTMLElement('ol')}} sind, entfernt die `presentation`- oder `none`-Rolle auf der Tabelle oder Liste die Standardsemantik des Elements, auf das sie angewandt wurde, und deren erforderliche Nachkommenelemente.

Wenn `presentation` oder `none` auf ein {{HTMLElement('table')}}-Element angewandt wird, erben die Nachkommen {{HTMLElement('caption')}}, {{HTMLElement('thead')}}, {{HTMLElement('tbody')}}, {{HTMLElement('tfoot')}}, {{HTMLElement('tr')}}, {{HTMLElement('th')}} und {{HTMLElement('td')}} die Rolle und sind daher für unterstützende Technologien nicht sichtbar. Aber, Elemente innerhalb der {{HTMLElement('th')}} und {{HTMLElement('td')}}-Elemente, einschließlich verschachtelter Tabellen, sind für unterstützende Technologien sichtbar.

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

Da die `presentation`-Rolle auf das {{HTMLElement('ul')}}-Element angewandt wurde, erbt jedes Kind-{{HTMLElement('li')}}-Element die `presentation`-Rolle. Dies liegt daran, dass ARIA erfordert, dass die `listitem`-Elemente ein übergeordnetes `list`-Element haben. Während die {{HTMLElement('li')}}-Elemente in diesem Fall nicht für unterstützende Technologien sichtbar sind, sind Nachkommen dieser erforderlichen Elemente sichtbar. Wenn wir eine Liste innerhalb eines dieser {{HTMLElement('li')}}-Elemente verschachtelt hätten, wären sie für unterstützende Technologien sichtbar. Bei Elementen ohne erforderliche Kinder behalten alle innerhalb des Elements mit `role="presentation"` oder `role="none"` verschachtelten Elemente ihre Semantik. In diesem Fall sind die innerhalb dieser {{HTMLElement('li')}}-Elemente enthaltenen {{HTMLElement('a')}}-Elemente sichtbar.

Das {{HTMLElement('a')}}-Element ist ein Sonderfall. Seine Rolle wäre sichtbar gewesen, selbst wenn es direkt mit der `presentation`- oder `none`-Rolle versehen wäre. Browser ignorieren `role="presentation"` und `role="none"` auf fokussierbaren Elementen, einschließlich Links und Eingaben, oder auf allem, was ein [tabindex](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut gesetzt hat. Browser ignorieren auch die Aufnahme der Rolle, wenn eines der Elemente globale ARIA-Zustände und -Eigenschaften enthält, wie z.B. [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby).

> [!NOTE]
> Das Element mit `role="presentation"` ist nicht Bestandteil des Zugänglichkeitsbaumes und sollte keinen zugänglichen Namen haben. Verwenden Sie **nicht** [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label).

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

Keine. Wenn ein globaler ARIA-Zustand und eine Eigenschaft gesetzt sind, werden `presentation` oder `none` ignoriert, und die implizite Rolle des Elements wird verwendet.

## Beispiele

```html
<hr role="none" />
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden) versus [`role="presentation/none"`](https://www.scottohara.me/blog/2018/05/05/hidden-vs-none.html) - von Scott O'Hara
