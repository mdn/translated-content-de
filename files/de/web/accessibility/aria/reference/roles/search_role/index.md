---
title: "ARIA: search-Rolle"
short-title: search
slug: Web/Accessibility/ARIA/Reference/Roles/search_role
l10n:
  sourceCommit: 6193c69cb71e80e45e7dff97188253ed15d58321
---

Die `search`-Rolle wird verwendet, um die Suchfunktionalität zu identifizieren; den Bereich der Seite, der zur Durchsuchung der Seite, der Website oder einer Sammlung von Websites genutzt wird.

```html
<form role="search">
  <!-- search input -->
</form>
```

## Beschreibung

Die `search`-Rolle ist eine [Landmarke](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles), die dem Containerelement hinzugefügt werden kann, das alle Elemente umfasst, die zusammen die Suchfunktionalität des Dokuments oder der Anwendung bilden, einschließlich eines nachgeordneten [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search). Wenn ein Dokument mehr als eine Suche enthält, sollte jede eine eindeutige Bezeichnung haben, es sei denn, es handelt sich um dieselbe Suche, die wiederholt wird, dann verwenden Sie denselben Namen. Es gibt ein [`input` vom Typ `search`](/de/docs/Web/HTML/Reference/Elements/input/search), obwohl dies nicht von sich aus eine Suchlandmarke definiert. Die Verwendung von {{HTMLElement('search')}} ist eine alternative Möglichkeit, eine Suchlandmarke zu definieren.

## Beispiele

Wenn ein {{HTMLElement('form')}} ein Suchformular ist, sollte die `search`-Rolle anstelle der [`form`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/form_role)-Rolle verwendet werden.

```html
<form id="search" role="search">
  <label for="search-input">Search this site</label>
  <input type="search" id="search-input" name="search" spellcheck="false" />
  <input value="Submit" type="submit" />
</form>
```

## Barrierefreiheitsbedenken

[Landmarkenrollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sollen sparsam eingesetzt werden, um größere Gesamtabschnitte des Dokuments zu identifizieren. Die Verwendung von zu vielen Landmarkenrollen kann "Geräusche" in Screenreadern erzeugen, was es schwierig macht, das Gesamtlayout der Seite zu verstehen.

## Beste Praktiken

### Bevorzugen Sie HTML

Die Verwendung des {{HTMLElement('search')}}-Elements teilt automatisch mit, dass das Element die Rolle `search` hat. Wenn möglich, bevorzugen Sie die Verwendung des semantischen `<search>`-Elements anstelle der `search`-Rolle.

Wenn Ihr `<input>` vom Typ `search` bereits in einem {{HTMLElement("form")}} enthalten ist, dann könnte das Einbetten des Formulars in ein weiteres `<search>`-Element überflüssiges Markup sein. In diesem Fall ist die Verwendung von `role="search"` direkt am `<form>` selbst akzeptabel.

### Beschriftung von Landmarken

#### Mehrere Landmarken

Wenn es mehr als eine `search`-Landmarkenrolle in einem Dokument gibt, versehen Sie jede Landmarke mit einer Beschriftung. Diese Beschriftung ermöglicht es Benutzern von unterstützenden Technologien, schnell den Zweck jeder Landmarke zu verstehen.

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

Wenn eine `search`-Landmarkenrolle in einem Dokument wiederholt wird und beide Landmarken identischen Inhalt haben, verwenden Sie denselben Namen für jede Landmarke. Ein Beispiel hierfür wäre die wiederholte siteweite Suche am oberen und unteren Ende der Seite.

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

Screenreader werden die Art der Rolle der Landmarke ankündigen. Aufgrund dessen müssen Sie in der Beschriftung nicht beschreiben, was die Landmarke ist. Beispielsweise könnte eine Deklaration von `role="search"` mit einem [`aria-label="Sitewide search"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) redundant als "sitewide search search" angekündigt werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('form')}}-Element
- Das {{HTMLElement('input')}}-Element
- Das {{HTMLElement('search')}}-Element
- [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)
- [Verwendung von HTML-Abschnitten und Gliederungen](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
