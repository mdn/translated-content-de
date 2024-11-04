---
title: "ARIA: `search`-Rolle"
slug: Web/Accessibility/ARIA/Roles/search_role
l10n:
  sourceCommit: 3ef83ce1d9cbe95603a2721112e8d74327d4cd3c
---

{{AccessibilitySidebar}}

Die `search`-Rolle wird verwendet, um die Suchfunktionalität zu identifizieren; den Abschnitt der Seite, der genutzt wird, um die Seite, die Website oder eine Sammlung von Websites zu durchsuchen.

```html
<form role="search">
  <!-- search input -->
</form>
```

## Beschreibung

Die `search`-Rolle ist eine [Landmark-Rolle](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles), die dem Containerelement hinzugefügt werden kann, das alle Elemente umfasst, die zusammen das Suchfeature des Dokuments oder der Anwendung bilden, einschließlich eines Nachfahren [`<input type="search">`](/de/docs/Web/HTML/Element/input/search). Wenn ein Dokument mehr als eine Suche enthält, sollte jede Suche ein einzigartiges Label haben, es sei denn, es handelt sich um dieselbe Suche, die wiederholt wird; dann sollte derselbe Name verwendet werden. Es gibt eine [`input` vom Typ `search`)](/de/docs/Web/HTML/Element/input/search), obwohl dies nicht allein eine Such-Landmark definiert. Die Verwendung von {{HTMLElement('search')}} ist eine alternative Möglichkeit, eine Such-Landmark zu definieren.

## Beispiele

Wenn ein {{HTMLElement('form')}} ein Suchformular ist, verwenden Sie die `search`-Rolle anstelle der [`form`](/de/docs/Web/Accessibility/ARIA/Roles/form_role) Rolle.

```html
<form id="search" role="search">
  <label for="search-input">Search this site</label>
  <input type="search" id="search-input" name="search" spellcheck="false" />
  <input value="Submit" type="submit" />
</form>
```

## Barrierefreiheit beachten

[Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) sind dazu gedacht, sparsam verwendet zu werden, um größere Gesamtabschnitte des Dokuments zu identifizieren. Die Verwendung von zu vielen Landmark-Rollen kann „Rauschen“ in Screenreadern erzeugen, was es schwierig macht, das Gesamtlayout der Seite zu verstehen.

## Beste Praktiken

### Bevorzugen Sie HTML

Die Verwendung des {{HTMLElement('form')}}-Elements in Verbindung mit einer Deklaration von `role="search"` bietet den größten Unterstützungsumfang.

### Kennzeichnung von Landmarks

#### Mehrere Landmarks

Wenn in einem Dokument mehr als eine `search`-Landmark-Rolle vorhanden ist, versehen Sie jede Landmark mit einem Label. Dieses Label ermöglicht es einem Nutzer mit unterstützender Technologie, schnell den Zweck jeder Landmark zu verstehen.

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

Wenn eine `search`-Landmark-Rolle in einem Dokument wiederholt wird und beide Landmarks identischen Inhalt haben, verwenden Sie dasselbe Label für jede Landmark. Ein Beispiel hierfür wäre die Wiederholung der standortweiten Suche am oberen und unteren Rand der Seite.

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

Screenreader geben den Rollentyp der Landmark an. Aus diesem Grund müssen Sie nicht beschreiben, was die Landmark in ihrem Label ist. Zum Beispiel könnte eine Deklaration von `role="search"` mit einem [`aria-label="Sitewide search"`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) überflüssig als „standortweite Suche Suchbereich“ angekündigt werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('form')}}-Element
- Das {{HTMLElement('input')}}-Element
- Das {{HTMLElement('search')}}-Element
- [`<input type="search">`](/de/docs/Web/HTML/Element/input/search)
- [Verwendung von HTML-Abschnitten und Gliederungen](/de/docs/Web/HTML/Element/Heading_Elements)
