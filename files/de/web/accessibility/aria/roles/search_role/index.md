---
title: "ARIA: Rolle search"
slug: Web/Accessibility/ARIA/Roles/search_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `search`-Rolle wird verwendet, um die Suchfunktionalität zu identifizieren; der Abschnitt der Seite, der zum Durchsuchen der Seite, der Website oder einer Sammlung von Websites verwendet wird.

```html
<form role="search">
  <!-- search input -->
</form>
```

## Beschreibung

Die `search`-Rolle ist [eine Landmarke](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles), die dem Containerelement hinzugefügt werden kann, das alle Elemente umfasst, die zusammen die Suchfunktion des Dokuments oder der Anwendung bilden, einschließlich eines Nachkommen [(`<input type="search">`)](/de/docs/Web/HTML/Element/input/search). Wenn ein Dokument mehr als eine Suche enthält, sollte jede Suche ein eindeutiges Label haben, es sei denn, es handelt sich um dieselbe Suche, die wiederholt wird; dann verwenden Sie denselben Namen. Es gibt ein [`input` vom Typ `search`)](/de/docs/Web/HTML/Element/input/search), obwohl dies allein keine Such-Landmarke definiert. Die Verwendung von {{HTMLElement('search')}} ist eine alternative Möglichkeit, eine Such-Landmarke zu definieren.

## Beispiele

Wenn ein {{HTMLElement('form')}} ein Suchformular ist, verwenden Sie die `search`-Rolle anstelle der [`form`](/de/docs/Web/Accessibility/ARIA/Roles/form_role) Rolle.

```HTML
<form id="search" role="search">
  <label for="search-input">Diese Seite durchsuchen</label>
  <input type="search" id="search-input" name="search" spellcheck="false">
  <input value="Absenden" type="submit">
</form>
```

## Barrierefreiheitsaspekte

[Landmarken-Rollen](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) sollen sparsam verwendet werden, um größere Gesamtabschnitte des Dokuments zu identifizieren. Die Verwendung von zu vielen Landmarken-Rollen kann bei Bildschirmlesegeräten "Geräusche" erzeugen, was es schwierig macht, das Gesamtlayout der Seite zu verstehen.

## Beste Praktiken

### Bevorzugen Sie HTML

Die Verwendung des {{HTMLElement('form')}}-Elements in Verbindung mit einer Deklaration von `role="search"` bietet den größten Unterstützungsumfang.

### Markieren von Landmarken

#### Mehrere Landmarken

Wenn es in einem Dokument mehr als eine `search`-Landmarkenrolle gibt, geben Sie für jede Landmarke ein Label an. Dieses Label ermöglicht es einem Benutzer von unterstützenden Technologien, schnell den Zweck jeder Landmarke zu verstehen.

```html
<form id="site-search" role="search" aria-label="Siteweit">
  <!-- search input -->
</form>

…

<form id="page-search" role="search" aria-label="Auf dieser Seite">
  <!-- search input -->
</form>
```

#### Wiederholte Landmarken

Wenn eine `search`-Landmarkenrolle in einem Dokument wiederholt wird und beide Landmarken identische Inhalte haben, verwenden Sie dasselbe Label für jede Landmarke. Ein Beispiel hierfür wäre das Wiederholen der siteweiten Suche am oberen und unteren Ende der Seite.

```html
<header>
  <form id="site-search-top" role="search" aria-label="Siteweit">
    <!-- search input -->
  </form>
</header>

…

<footer>
  <form id="site-search-bottom" role="search" aria-label="Siteweit">
    <!-- search input -->
  </form>
</footer>
```

#### Redundante Beschreibungen

Bildschirmlesegeräte kündigen die Art der Rolle der Landmarke an. Aus diesem Grund müssen Sie in ihrem Label nicht beschreiben, was die Landmarke ist. Beispielsweise könnte eine Deklaration von `role="search"` mit einem [`aria-label="Sitewide search"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) redundanterweise als "sitewide search search" angekündigt werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('form')}}-Element
- Das {{HTMLElement('input')}}-Element
- Das {{HTMLElement('search')}}-Element
- [`<input type="search">`](/de/docs/Web/HTML/Element/input/search)
- [Verwendung von HTML-Abschnitten und Umrissen](/de/docs/Web/HTML/Element/Heading_Elements)
