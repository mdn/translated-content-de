---
title: "ARIA: search Rolle"
slug: Web/Accessibility/ARIA/Roles/search_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `search` Rolle wird verwendet, um die Suchfunktionalität zu identifizieren; den Abschnitt der Seite, der zum Durchsuchen der Seite, der Website oder einer Sammlung von Websites genutzt wird.

```html
<form role="search">
  <!-- search input -->
</form>
```

## Beschreibung

Die `search` Rolle ist eine [Landmark](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) Rolle, die dem Container-Element hinzugefügt werden kann, das alle Elemente umfasst, die zusammen die Suchfunktion des Dokuments oder der Anwendung bilden, einschließlich eines Nachfahren [`(<input type="search">`)](/de/docs/Web/HTML/Element/input/search). Wenn ein Dokument mehr als eine Suche enthält, sollte jede Suche ein eindeutiges Label haben, es sei denn, es handelt sich um die gleiche, wiederholte Suche, dann verwenden Sie denselben Namen. Es gibt ein [`input` vom Typ `search`)](/de/docs/Web/HTML/Element/input/search), obwohl dies nicht allein als Such-Landmark definiert. Die Verwendung von {{HTMLElement('search')}} ist eine alternative Möglichkeit, eine Such-Landmark zu definieren.

## Beispiele

Wenn ein {{HTMLElement('form')}} ein Suchformular ist, verwenden Sie die `search` Rolle anstelle der [`form`](/de/docs/Web/Accessibility/ARIA/Roles/form_role) Rolle.

```HTML
<form id="search" role="search">
  <label for="search-input">Search this site</label>
  <input type="search" id="search-input" name="search" spellcheck="false">
  <input value="Submit" type="submit">
</form>
```

## Barrierefreiheitsbedenken

[Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) sollen sparsam verwendet werden, um größere übergeordnete Abschnitte des Dokuments zu identifizieren. Die Verwendung zu vieler Landmark-Rollen kann zu "Geräuschen" in Bildschirmleseprogrammen führen, wodurch es schwierig wird, das gesamte Layout der Seite zu verstehen.

## Beste Praktiken

### Bevorzugen Sie HTML

Die Verwendung des {{HTMLElement('form')}}-Elements in Verbindung mit einer Deklaration von `role="search"` sorgt für die größte Unterstützung.

### Beschriftung von Landmarken

#### Mehrere Landmarken

Wenn es in einem Dokument mehr als eine `search` Landmark-Rolle gibt, geben Sie ein Label für jede Landmarke an. Dieses Label ermöglicht es einem Benutzer von unterstützender Technologie, schnell den Zweck jeder Landmarke zu verstehen.

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

Wenn eine `search` Landmark-Rolle in einem Dokument wiederholt wird und beide Landmarken identischen Inhalt haben, verwenden Sie dasselbe Label für jede Landmarke. Ein Beispiel hierfür wäre die wiederholte standortweite Suche am oberen und unteren Rand der Seite.

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

Bildschirmleseprogramme kündigen die Art der Rolle der Landmarke an. Aus diesem Grund müssen Sie in ihrem Label nicht beschreiben, was die Landmarke ist. Zum Beispiel könnte eine Deklaration von `role="search"` mit einem [`aria-label="Sitewide search"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) redundant angekündigt werden als, "sitewide search search".

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('form')}} Element
- Das {{HTMLElement('input')}} Element
- Das {{HTMLElement('search')}} Element
- [`<input type="search">`](/de/docs/Web/HTML/Element/input/search)
- [Verwendung von HTML-Abschnitten und Gliederungen](/de/docs/Web/HTML/Element/Heading_Elements)
