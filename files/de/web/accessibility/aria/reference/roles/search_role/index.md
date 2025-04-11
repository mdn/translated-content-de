---
title: "ARIA: search Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/search_role
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Die `search` Rolle wird verwendet, um die Suchfunktionalität zu identifizieren; der Abschnitt der Seite, der zum Durchsuchen der Seite, der Website oder einer Sammlung von Websites genutzt wird.

```html
<form role="search">
  <!-- search input -->
</form>
```

## Beschreibung

Die `search` Rolle ist [eine Landmarke](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles), die dem Container-Element hinzugefügt werden kann, das alle Elemente umschließt, die zusammen die Suchfunktion des Dokuments oder der Anwendung bilden, einschließlich eines Nachfahren [(`<input type="search">`)](/de/docs/Web/HTML/Reference/Elements/input/search). Wenn ein Dokument mehr als eine Suche enthält, sollte jede eine eindeutige Bezeichnung haben, es sei denn, es handelt sich um dieselbe wiederholte Suche, dann verwenden Sie denselben Namen. Es gibt einen [`input` vom Typ `search`)](/de/docs/Web/HTML/Reference/Elements/input/search), allerdings definiert dieser allein keine Such-Landmarke. Die Verwendung von {{HTMLElement('search')}} ist eine alternative Möglichkeit, um eine Such-Landmarke zu definieren.

## Beispiele

Wenn ein {{HTMLElement('form')}} ein Suchformular ist, verwenden Sie die `search` Rolle anstelle der [`form`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/form_role) Rolle.

```html
<form id="search" role="search">
  <label for="search-input">Search this site</label>
  <input type="search" id="search-input" name="search" spellcheck="false" />
  <input value="Submit" type="submit" />
</form>
```

## Barrierefreiheitsbedenken

[Landmarkenrollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sind dazu gedacht, sparsam eingesetzt zu werden, um größere, übergreifende Abschnitte des Dokuments zu identifizieren. Die Verwendung zu vieler Landmarkenrollen kann in Screenreadern "Geräusche" erzeugen, was es schwierig macht, das gesamte Layout der Seite zu verstehen.

## Beste Praktiken

### Bevorzugen Sie HTML

Die Verwendung des {{HTMLElement('form')}} Elements in Verbindung mit einer Deklaration von `role="search"` bietet den größten Support.

### Bezeichnung von Landmarken

#### Mehrfache Landmarken

Wenn es mehr als eine `search` Landmarke in einem Dokument gibt, versehen Sie jede Landmarke mit einer Beschriftung. Diese Beschriftung ermöglicht es einem Nutzer von unterstützender Technologie, schnell den Zweck jeder Landmarke zu verstehen.

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

Wenn eine `search` Landmarke in einem Dokument wiederholt wird und beide Landmarken identischen Inhalt haben, verwenden Sie für jede Landmarke die gleiche Beschriftung. Ein Beispiel hierfür wäre die Wiederholung der standortweiten Suche oben und unten auf der Seite.

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

Screenreader geben die Art der Rolle der Landmarke bekannt. Aus diesem Grund müssen Sie in der Beschriftung nicht beschreiben, was die Landmarke ist. Zum Beispiel könnte eine Deklaration von `role="search"` mit einem [`aria-label="Sitewide search"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) redundant als „standortweite Suche Suche“ angekündigt werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('form')}} Element
- Das {{HTMLElement('input')}} Element
- Das {{HTMLElement('search')}} Element
- [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)
- [Verwendung von HTML-Sektionen und -Umrissen](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
