---
title: "ARIA: search-Rolle"
short-title: search
slug: Web/Accessibility/ARIA/Reference/Roles/search_role
l10n:
  sourceCommit: 5af4f6e12c119ea0d809b35b3fa3266a0fbe4ef4
---

Die `search`-Rolle kennzeichnet die Suchfunktionalität, also den Bereich einer Seite, mit dem die Seite, die Website oder eine Sammlung von Websites durchsucht werden kann.

```html
<form role="search">
  <!-- search input -->
</form>
```

## Beschreibung

Die `search`-Rolle ist eine [Landmark-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles). Sie kann dem Container-Element zugewiesen werden, das alle Elemente der Suchfunktion eines Dokuments oder einer Anwendung umfasst, einschließlich eines untergeordneten [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search). Wenn ein Dokument mehrere Suchfunktionen enthält, sollte jede eine eindeutige Beschriftung haben. Wird dieselbe Suchfunktion mehrfach angezeigt, verwenden Sie hingegen jeweils denselben Namen. Ein [`input` vom Typ `search`](/de/docs/Web/HTML/Reference/Elements/input/search) definiert für sich genommen keine Search-Landmark. Die Verwendung von {{HTMLElement('search')}} ist eine weitere Möglichkeit, eine Search-Landmark zu definieren.

## Barrierefreiheit

[Landmark-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sollten sparsam verwendet werden, um größere Bereiche eines Dokuments zu kennzeichnen. Zu viele Landmark-Rollen können in Screenreadern für „Rauschen“ sorgen und es erschweren, den Gesamtaufbau der Seite zu verstehen.

## Bewährte Verfahren

### HTML bevorzugen

Das Element {{HTMLElement('search')}} vermittelt automatisch, dass es die Rolle `search` hat. Verwenden Sie nach Möglichkeit das semantische Element `<search>` anstelle der `search`-Rolle.

Wenn sich Ihr `<input>` vom Typ `search` bereits innerhalb eines {{HTMLElement("form")}} befindet, kann es unnötiges Markup sein, das Formular zusätzlich in ein `<search>`-Element einzuschließen. In diesem Fall können Sie `role="search"` direkt auf dem `<form>` verwenden.

### Landmarks beschriften

#### Mehrere Landmarks

Wenn ein Dokument mehr als eine Landmark mit der Rolle `search` enthält, versehen Sie jede mit einer Beschriftung. So können Nutzer assistiver Technologien den Zweck jeder Landmark schnell erkennen.

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

Wenn eine Landmark mit der Rolle `search` in einem Dokument mehrfach vorkommt und die Landmarks denselben Inhalt haben, verwenden Sie für alle dieselbe Beschriftung. Ein Beispiel dafür ist eine websiteweite Suche, die sowohl oben als auch unten auf der Seite angezeigt wird.

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

Screenreader geben den Rollentyp einer Landmark bekannt. Daher müssen Sie die Art der Landmark in ihrer Beschriftung nicht erneut beschreiben. Beispielsweise kann `role="search"` mit einem [`aria-label="Sitewide search"`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) redundant als „sitewide search search“ ausgegeben werden.

## Beispiele

Wenn ein {{HTMLElement('form')}} ein Suchformular ist, verwenden Sie die `search`-Rolle anstelle der [`form`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/form_role)-Rolle.

```html
<form id="search" role="search">
  <label for="search-input">Search this site</label>
  <input type="search" id="search-input" name="search" spellcheck="false" />
  <input value="Submit" type="submit" />
</form>
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das Element {{HTMLElement('form')}}
- Das Element {{HTMLElement('input')}}
- Das Element {{HTMLElement('search')}}
- [`<input type="search">`](/de/docs/Web/HTML/Reference/Elements/input/search)
- [HTML-Abschnitte und Gliederungen verwenden](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
