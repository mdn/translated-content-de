---
title: "ARIA: search role"
slug: Web/Accessibility/ARIA/Reference/Roles/search_role
l10n:
  sourceCommit: 3ffcab3614f7e76c82890e51994c4c26eafadc29
---

Die `search` Rolle wird verwendet, um die Suchfunktionalität zu identifizieren; den Abschnitt der Seite, der verwendet wird, um die Seite, Website oder Sammlung von Websites zu durchsuchen.

```html
<form role="search">
  <!-- search input -->
</form>
```

## Beschreibung

Die `search` Rolle ist [eine Landmarke](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles), die zu dem Containerelement hinzugefügt werden kann, welches alle Elemente umfasst, die zusammen das Suchfeature des Dokuments oder der Anwendung bilden, einschließlich eines Nachfahren [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search). Wenn ein Dokument mehr als eine Suche enthält, sollte jede Suche eine eindeutige Bezeichnung haben, es sei denn, es handelt sich um dieselbe Suche, die wiederholt wird, dann verwenden Sie denselben Namen. Es gibt ein [`input` vom Typ `search`](/de/docs/Web/HTML/Reference/Elements/input/search), aber dieses definiert nicht alleine eine Suchlandmarke. Die Verwendung von {{HTMLElement('search')}} ist eine alternative Möglichkeit, eine Suchlandmarke zu definieren.

## Beispiele

Wenn ein {{HTMLElement('form')}} ein Suchformular ist, verwenden Sie die `search` Rolle anstelle der [`form`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/form_role) Rolle.

```html
<form id="search" role="search">
  <label for="search-input">Search this site</label>
  <input type="search" id="search-input" name="search" spellcheck="false" />
  <input value="Submit" type="submit" />
</form>
```

## Barrierefreiheit

[Landmarkenrollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sollen sparsam eingesetzt werden, um größere übergeordnete Abschnitte des Dokuments zu identifizieren. Die Verwendung von zu vielen Landmarkenrollen kann "Rauschen" in Screenreadern erzeugen und es schwierig machen, das allgemeine Layout der Seite zu verstehen.

## Beste Praktiken

### Bevorzugen Sie HTML

Die Verwendung des {{HTMLElement('form')}} Elements in Verbindung mit einer Deklaration von `role="search"` bietet die größte Unterstützung.

### Beschriftung von Landmarken

#### Mehrere Landmarken

Wenn es mehr als eine `search` Landmarke in einem Dokument gibt, geben Sie eine Bezeichnung für jede Landmarke an. Diese Bezeichnung ermöglicht es einem Nutzer von assistiver Technologie, schnell den Zweck jeder Landmarke zu verstehen.

```html
<form id="site-search" role="search" aria-label="Sitewide">
  <!-- search input -->
</form>

…

<form id="page-search" role="search" aria-label="On this page">
  <!-- search input -->
</form>
```

#### Wiederholte Landmarken

Wenn eine `search` Landmarke in einem Dokument wiederholt wird und beide Landmarken identischen Inhalt haben, verwenden Sie für jede Landmarke dieselbe Bezeichnung. Ein Beispiel hierfür wäre die Wiederholung der sitenweiten Suche am oberen und unteren Rand der Seite.

```html
<header>
  <form id="site-search-top" role="search" aria-label="Sitewide">
    <!-- search input -->
  </form>
</header>

…

<footer>
  <form id="site-search-bottom" role="search" aria-label="Sitewide">
    <!-- search input -->
  </form>
</footer>
```

#### Überflüssige Beschreibungen

Screenreader geben an, um welche Art von Rolle es sich bei der Landmarke handelt. Aus diesem Grund müssen Sie in ihrer Bezeichnung nicht beschreiben, was die Landmarke ist. Eine Deklaration von `role="search"` mit einem [`aria-label="Sitewide search"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) könnte beispielsweise redundant als "sitenweite Suche Suche" angekündigt werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('form')}} Element
- Das {{HTMLElement('input')}} Element
- Das {{HTMLElement('search')}} Element
- [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)
- [Verwendung von HTML-Sektionen und Umrissen](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
