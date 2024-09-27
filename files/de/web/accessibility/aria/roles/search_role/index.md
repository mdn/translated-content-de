---
title: "ARIA: search Rolle"
slug: Web/Accessibility/ARIA/Roles/search_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `search` Rolle wird verwendet, um die Suchfunktion zu identifizieren; den Abschnitt der Seite, der verwendet wird, um die Seite, die Website oder eine Sammlung von Websites zu durchsuchen.

```html
<form role="search">
  <!-- search input -->
</form>
```

## Beschreibung

Die `search` Rolle ist eine [Landmark-Rolle](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles), die dem Container-Element hinzugefügt werden kann, das alle Elemente umfasst, die zusammen die Suchfunktion des Dokuments oder der Anwendung bilden, einschließlich eines Nachfahren (`<input type="search">`). Wenn ein Dokument mehr als eine Suchfunktion enthält, sollte jede eine eindeutige Bezeichnung haben, es sei denn, es handelt sich um die gleiche Suchfunktion, die wiederholt wird, dann verwenden Sie denselben Namen. Es gibt ein [`input` vom Typ `search`)](/de/docs/Web/HTML/Element/input/search), obwohl dies allein kein Such-Landmark definiert. Die Verwendung von {{HTMLElement('search')}} ist eine alternative Möglichkeit, ein Such-Landmark zu definieren.

## Beispiele

Wenn ein {{HTMLElement('form')}} ein Suchformular ist, verwenden Sie die `search` Rolle anstelle der [`form`](/de/docs/Web/Accessibility/ARIA/Roles/form_role) Rolle.

```HTML
<form id="search" role="search">
  <label for="search-input">Diese Website durchsuchen</label>
  <input type="search" id="search-input" name="search" spellcheck="false">
  <input value="Absenden" type="submit">
</form>
```

## Barrierefreiheitsbedenken

[Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) sollen sparsam eingesetzt werden, um größere Gesamtabschnitte des Dokuments zu identifizieren. Die Verwendung zu vieler Landmark-Rollen kann "Rauschen" in Screenreadern erzeugen, was es schwierig macht, das Gesamtlayout der Seite zu verstehen.

## Beste Praktiken

### HTML bevorzugen

Die Verwendung des {{HTMLElement('form')}}-Elements in Verbindung mit einer Deklaration von `role="search"` bietet den größtmöglichen Support.

### Beschriftung von Landmarks

#### Mehrere Landmarks

Wenn es in einem Dokument mehr als ein `search`-Landmark-Rolle gibt, geben Sie für jedes Landmark eine Beschriftung an. Diese Beschriftung ermöglicht es einem Benutzer von unterstützender Technologie, den Zweck jedes Landmarks schnell zu verstehen.

```html
<form id="site-search" role="search" aria-label="Sitewide">
  <!-- search input -->
</form>

…

<form id="page-search" role="search" aria-label="On this page">
  <!-- search input -->
</form>
```

#### Wiederholte Landmarks

Wenn eine `search`-Landmark-Rolle in einem Dokument wiederholt wird und beide Landmarks identischen Inhalt haben, verwenden Sie für jedes Landmark dieselbe Beschriftung. Ein Beispiel hierfür wäre das Wiederholen der siteweiten Suche oben und unten auf der Seite.

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

Screenreader kündigen den Typ der Rolle des Landmarks an. Aus diesem Grund müssen Sie nicht beschreiben, was das Landmark in seiner Beschriftung ist. Zum Beispiel kann eine Deklaration von `role="search"` mit einem [`aria-label="Sitewide search"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) redundant als „sitewide search search“ angekündigt werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('form')}} Element
- Das {{HTMLElement('input')}} Element
- Das {{HTMLElement('search')}} Element
- [`<input type="search">`](/de/docs/Web/HTML/Element/input/search)
- [Verwendung von HTML-Abschnitten und -Umrissen](/de/docs/Web/HTML/Element/Heading_Elements)
