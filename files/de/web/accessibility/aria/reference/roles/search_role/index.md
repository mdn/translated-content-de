---
title: "ARIA: search Rolle"
short-title: search
slug: Web/Accessibility/ARIA/Reference/Roles/search_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die `search`-Rolle wird verwendet, um die Suchfunktionalität zu identifizieren; den Abschnitt der Seite, der verwendet wird, um die Seite, die Website oder eine Sammlung von Websites zu durchsuchen.

```html
<form role="search">
  <!-- search input -->
</form>
```

## Beschreibung

Die `search`-Rolle ist eine [Orientierungsrolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles), die dem Container-Element hinzugefügt werden kann, das alle Elemente umfasst, die zusammen die Suchfunktion des Dokuments oder der Anwendung bilden, einschließlich eines nachgeordneten [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search). Wenn ein Dokument mehr als eine Suche enthält, sollte jede einen eindeutigen Namen haben, es sei denn, es handelt sich um die gleiche wiederholte Suche, dann verwenden Sie den gleichen Namen. Es gibt ein [`input` vom Typ `search`](/de/docs/Web/HTML/Reference/Elements/input/search), obwohl dies allein keine Suchorientierung definiert. Die Verwendung von {{HTMLElement('search')}} ist eine alternative Möglichkeit, um eine Suchorientierung zu definieren.

## Beispiele

Wenn ein {{HTMLElement('form')}} ein Suchformular ist, verwenden Sie die `search`-Rolle anstelle der [`form`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/form_role)-Rolle.

```html
<form id="search" role="search">
  <label for="search-input">Search this site</label>
  <input type="search" id="search-input" name="search" spellcheck="false" />
  <input value="Submit" type="submit" />
</form>
```

## Barrierefreiheitsbedenken

[Orientierungsrollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sollen sparsam verwendet werden, um größere übergreifende Abschnitte des Dokuments zu identifizieren. Die Verwendung von zu vielen Orientierungsrollen kann in Screenreadern "Geräusche" erzeugen, die es schwierig machen, das gesamte Layout der Seite zu verstehen.

## Best Practices

### Bevorzugen Sie HTML

Die Verwendung des {{HTMLElement('form')}}-Elements in Verbindung mit einer Deklaration von `role="search"` bietet die größte Unterstützung.

### Beschriftung von Orientierungen

#### Mehrere Orientierungen

Wenn es in einem Dokument mehr als eine `search`-Orientierungsrolle gibt, geben Sie eine Beschriftung für jede Orientierung an. Diese Beschriftung ermöglicht es einem Benutzer von unterstützender Technologie, den Zweck jeder Orientierung schnell zu verstehen.

```html
<form id="site-search" role="search" aria-label="Sitewide">
  <!-- search input -->
</form>

…

<form id="page-search" role="search" aria-label="On this page">
  <!-- search input -->
</form>
```

#### Wiederholte Orientierungen

Wenn eine `search`-Orientierungsrolle in einem Dokument wiederholt wird und beide Orientierungen identischen Inhalt haben, verwenden Sie für jede Orientierung die gleiche Beschriftung. Ein Beispiel hierfür wäre das Wiederholen der seitenweiten Suche am oberen und unteren Rand der Seite.

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

Screenreader kündigen den Rollentyp der Orientierung an. Aus diesem Grund müssen Sie nicht in seiner Beschriftung beschreiben, was die Orientierung ist. Beispielsweise kann eine Deklaration von `role="search"` mit einem [`aria-label="Sitewide search"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) redundant als "sitewide search search" angekündigt werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('form')}}-Element
- Das {{HTMLElement('input')}}-Element
- Das {{HTMLElement('search')}}-Element
- [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)
- [Verwendung von HTML-Abschnitten und Übersichtsstrukturen](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
