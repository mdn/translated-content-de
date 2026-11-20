---
title: "ARIA: main-Rolle"
short-title: main
slug: Web/Accessibility/ARIA/Reference/Roles/main_role
l10n:
  sourceCommit: 5af4f6e12c119ea0d809b35b3fa3266a0fbe4ef4
---

Die Landmark-Rolle `main` kennzeichnet den primären Inhalt eines Dokuments. Der Hauptinhaltsbereich besteht aus Inhalten, die sich direkt auf das zentrale Thema eines Dokuments oder die Hauptfunktion einer Anwendung beziehen oder diese näher erläutern.

```html
<div id="main" role="main">
  <h1>Avocados</h1>
  <!-- main section content -->
</div>
```

Dies ist der Hauptabschnitt eines Dokuments über Avocados. Unterabschnitte dieses Dokuments könnten ihre Geschichte, die verschiedenen Sorten, ihre Anbaugebiete und weitere Themen behandeln.

## Beschreibung

Die Rolle `main` ist eine [Landmark-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles), die den Hauptinhalt eines Dokuments kennzeichnet. Unterstützende Technologien wie Screenreader können Landmarks verwenden, um größere Abschnitte eines Dokuments schnell zu erkennen und zu ihnen zu navigieren.

Durch die Einteilung und Beschriftung von Seitenabschnitten lassen sich strukturelle Informationen, die visuell durch das Layout vermittelt werden, auch programmatisch abbilden. Screenreader nutzen Landmark-Rollen, um die Navigation per Tastatur zu wichtigen Seitenabschnitten zu ermöglichen. Für Personen, die mithilfe von Landmark-Rollen navigieren, ist die Rolle `main` eine Alternative zu Links zum Überspringen direkt zum Hauptinhalt.

Pro Dokument sollte es nur eine Landmark-Rolle `main` geben.

Das Element {{HTMLElement('main')}} hat die Rolle `main`. Entwickler sollten semantisches HTML – in diesem Fall {{HTMLElement('main')}} – gegenüber ARIA bevorzugen.

### Zugehörige ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
  - : Das Attribut `aria-owns` stellt Beziehungen auf der Barrierefreiheitsebene her, die im DOM nicht vorhanden sind. Dokumente und Anwendungen können im DOM ineinander verschachtelt sein, wodurch unter den DOM-Nachfahren mehr als ein Hauptelement vorhanden sein kann. Verwenden Sie in diesem Fall `aria-owns`, um die Beziehung zwischen dem Hauptelement und dem übergeordneten Dokument oder der übergeordneten Anwendung anzugeben.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder `aria-labelledby`
  - : Wenn eine sichtbare Überschrift vorhanden ist, legen Sie den zugänglichen Namen mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) fest. Andernfalls kann ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) Nutzern unterstützender Technologien die Orientierung erleichtern, insbesondere in Single-Page-Anwendungen, in denen sich der Hauptinhalt ändert, ohne dass ein Ereignis zum Laden einer Seite ausgelöst wird.

## Hinweise zur Barrierefreiheit

### Verwenden Sie nur eine `main`-Rolle pro Dokument

Die [Landmark-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) `main` sollte pro Dokument nur einmal verwendet werden.

Wenn ein Dokument zwei `main`-Rollen enthält, etwa weil JavaScript den Seiteninhalt aktualisiert, sollte die inaktive `main`-Rolle für unterstützende Technologien ausgeblendet werden, beispielsweise durch Umschalten des [Attributs `hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden).

```html
<main>
  <h1>Active `main` element</h1>
  <!-- content -->
</main>

<main hidden>
  <h1>Hidden `main` element</h1>
  <!-- content -->
</main>
```

Ein zugänglicher Name erleichtert Nutzern unterstützender Technologien ebenfalls die Orientierung, insbesondere in Single-Page-Anwendungen, in denen sich der Hauptinhalt ändert, ohne dass ein Ereignis zum Laden einer Seite ausgelöst wird. Er kann mit `aria-labelledby` hinzugefügt werden, wenn im Inhalt eine geeignete Bezeichnung vorhanden ist, andernfalls mit `aria-label`.

## Bewährte Verfahren

### HTML bevorzugen

Das Element {{HTMLElement('main')}} vermittelt automatisch, dass es die Rolle `main` hat. Verwenden Sie nach Möglichkeit das semantische Element `<main>` anstelle der Rolle `main`.

### Navigation überspringen

Das Überspringen der Navigation, auch „Skipnav“ genannt, ist eine Technik, mit der Nutzer unterstützender Technologien umfangreiche Abschnitte mit wiederkehrenden Inhalten wie die Hauptnavigation oder Informationsbanner schnell umgehen können. So erreichen sie den Hauptinhalt der Seite schneller.

Wenn Sie dem Element mit `role="main"` ein [Attribut `id`](/de/docs/Web/HTML/Reference/Global_attributes/id) hinzufügen, kann es als Ziel eines Links zum Überspringen der Navigation dienen.

```html
<body>
  <a href="#main-content">Skip to main content</a>

  <!-- navigation and header content -->

  <div id="main-content" role="main">
    <!-- main page content -->
  </div>
</body>
```

Das entspricht:

```html
<body>
  <a href="#main-content">Skip to main content</a>

  <!-- navigation and header content -->

  <main id="main-content">
    <!-- main page content -->
  </main>
</body>
```

- [WebAIM: Links zum Überspringen der Navigation](https://webaim.org/techniques/skipnav/)

## Beispiel

```html
<body>
  <!-- primary navigation -->

  <div role="main">
    <h1>The First Indochina War</h1>
    <!-- article content -->
  </div>

  <!-- sidebar and footer -->
</body>
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das Element {{HTMLElement('main')}}
- [HTML-Abschnitte und Gliederungen verwenden](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [Barrierefrei zugängliche Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Das main-Element | HTML5 Doctor](https://html5doctor.com/the-main-element/)
