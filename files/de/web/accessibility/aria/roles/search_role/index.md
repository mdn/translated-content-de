---
title: "ARIA: Rolle search"
slug: Web/Accessibility/ARIA/Roles/search_role
l10n:
  sourceCommit: d8fd9326867083bc2ce88d1128aba888ad5312fd
---

{{AccessibilitySidebar}}

Die `search`-Rolle wird verwendet, um die Suchfunktionalität zu identifizieren; der Abschnitt der Seite, der zum Durchsuchen der Seite, der Website oder einer Sammlung von Websites verwendet wird.

```html
<form role="search">
  <!-- search input -->
</form>
```

## Beschreibung

Die `search`-Rolle ist eine [landmark](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles)-Rolle, die dem Container-Element hinzugefügt werden kann, das alle Elemente umfasst, die zusammen die Suchfunktion des Dokuments oder der Anwendung bilden, einschließlich eines Nachfahren [(`<input type="search">`)](/de/docs/Web/HTML/Element/input/search). Wenn ein Dokument mehr als eine Suchfunktion enthält, sollte jede eine eindeutige Bezeichnung haben, es sei denn, sie sind dieselbe Suche, die wiederholt wurde, dann verwenden Sie denselben Namen. Es gibt einen [`input` vom Typ `search`)](/de/docs/Web/HTML/Element/input/search), obwohl dies allein kein Such-Landmark definiert. Die Verwendung von {{HTMLElement('search')}} ist eine alternative Möglichkeit, ein Such-Landmark zu definieren.

## Beispiele

Wenn ein {{HTMLElement('form')}} ein Suchformular ist, verwenden Sie statt der [`form`](/de/docs/Web/Accessibility/ARIA/Roles/form_role)-Rolle die `search`-Rolle.

```html
<form id="search" role="search">
  <label for="search-input">Search this site</label>
  <input type="search" id="search-input" name="search" spellcheck="false" />
  <input value="Submit" type="submit" />
</form>
```

## Barrierefreiheitsbedenken

[Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) sind dazu gedacht, sparsam eingesetzt zu werden, um größere Abschnitte des Dokuments zu identifizieren. Die Verwendung von zu vielen Landmark-Rollen kann "Geräusche" in Bildschirmleseprogrammen erzeugen, was es schwierig macht, das Gesamtlayout der Seite zu verstehen.

## Best Practices

### Bevorzugen Sie HTML

Die Verwendung des {{HTMLElement('form')}}-Elements in Verbindung mit einer Deklaration von `role="search"` bietet den größten Unterstützungsumfang.

### Bezeichnung von Landmarks

#### Mehrere Landmarks

Wenn es in einem Dokument mehr als eine `search`-Landmark-Rolle gibt, geben Sie jedem Landmark eine Bezeichnung. Diese Bezeichnung ermöglicht es Benutzern von Unterstützungstechnologien, schnell den Zweck jedes Landmarks zu verstehen.

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

Wenn eine `search`-Landmark-Rolle in einem Dokument wiederholt wird und beide Landmarks identischen Inhalt haben, verwenden Sie die gleiche Bezeichnung für jedes Landmark. Ein Beispiel hierfür wäre die Wiederholung der seitenübergreifenden Suche am oberen und unteren Rand der Seite.

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

Bildschirmleseprogramme geben die Art der Rolle des Landmarks bekannt. Daher müssen Sie in der Bezeichnung nicht beschreiben, was das Landmark ist. Beispielsweise kann eine Deklaration von `role="search"` mit einem [`aria-label="Sitewide search"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) redundant als "sitewide search search" angekündigt werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('form')}}-Element
- Das {{HTMLElement('input')}}-Element
- Das {{HTMLElement('search')}}-Element
- [`<input type="search">`](/de/docs/Web/HTML/Element/input/search)
- [Verwenden von HTML-Sektionen und -Umrissen](/de/docs/Web/HTML/Element/Heading_Elements)
