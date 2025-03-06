---
title: "ARIA: search role"
slug: Web/Accessibility/ARIA/Reference/Roles/search_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die `search`-Rolle wird verwendet, um die Suchfunktionalität zu identifizieren; den Abschnitt der Seite, der zum Durchsuchen der Seite, der Website oder einer Sammlung von Websites verwendet wird.

```html
<form role="search">
  <!-- search input -->
</form>
```

## Beschreibung

Die `search`-Rolle ist [eine Landmarke](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles), die dem Container-Element hinzugefügt werden kann, das alle Elemente umfasst, die zusammen die Suchfunktion des Dokuments oder der Anwendung bilden, einschließlich eines Nachkommen [(`<input type="search">`)](/de/docs/Web/HTML/Element/input/search). Wenn ein Dokument mehr als eine Suche enthält, sollte jede einen eindeutigen Namen haben, es sei denn, es handelt sich um dieselbe Suche, die wiederholt wird, dann verwenden Sie denselben Namen. Es gibt einen [`input` of type `search`)](/de/docs/Web/HTML/Element/input/search), obwohl dies allein keine Suchlandmarke definiert. Die Verwendung von {{HTMLElement('search')}} ist eine alternative Möglichkeit, eine Suchlandmarke zu definieren.

## Beispiele

Wenn ein {{HTMLElement('form')}} ein Suchformular ist, verwenden Sie die `search`-Rolle anstelle der [`form`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/form_role)-Rolle.

```html
<form id="search" role="search">
  <label for="search-input">Search this site</label>
  <input type="search" id="search-input" name="search" spellcheck="false" />
  <input value="Submit" type="submit" />
</form>
```

## Barrierefreiheit

[Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sollten sparsam verwendet werden, um größere allgemeine Abschnitte des Dokuments zu identifizieren. Die Verwendung von zu vielen Landmark-Rollen kann "Rauschen" bei Screenreadern erzeugen und es schwierig machen, das gesamte Layout der Seite zu verstehen.

## Best Practices

### Bevorzugen Sie HTML

Die Verwendung des {{HTMLElement('form')}}-Elements in Verbindung mit einer Deklaration von `role="search"` bietet die größtmögliche Unterstützung.

### Beschriftung von Landmarken

#### Mehrere Landmarken

Wenn es in einem Dokument mehr als eine `search`-Landmarkenrolle gibt, geben Sie jeder Landmarke eine Beschriftung. Diese Beschriftung ermöglicht es einem Nutzer von unterstützender Technologie, schnell den Zweck jeder Landmarke zu verstehen.

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

Wenn eine `search`-Landmarkenrolle in einem Dokument wiederholt wird und beide Landmarken identischen Inhalt haben, verwenden Sie für jede Landmarke dieselbe Beschriftung. Ein Beispiel dafür wäre die Wiederholung der Seitenweiten-Suche am oberen und unteren Rand der Seite.

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

#### Redundante Beschreibungen

Screenreader werden die Art der Rolle ankündigen, die die Landmarke ist. Aus diesem Grund müssen Sie in der Beschriftung nicht beschreiben, was die Landmarke ist. Zum Beispiel könnte eine Deklaration von `role="search"` mit einem [`aria-label="Sitewide search"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) redundant als "sitewide search search" angekündigt werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('form')}}-Element
- Das {{HTMLElement('input')}}-Element
- Das {{HTMLElement('search')}}-Element
- [`<input type="search">`](/de/docs/Web/HTML/Element/input/search)
- [Verwendung von HTML-Abschnitten und Gliederungen](/de/docs/Web/HTML/Element/Heading_Elements)
