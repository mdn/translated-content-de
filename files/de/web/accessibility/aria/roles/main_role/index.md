---
title: "ARIA: main Rolle"
slug: Web/Accessibility/ARIA/Roles/main_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `main` Landmarkenrolle wird verwendet, um den Hauptinhalt eines Dokuments anzuzeigen. Der Hauptinhalt besteht aus Inhalten, die direkt mit dem zentralen Thema eines Dokuments oder der Hauptfunktion einer Anwendung zusammenhängen oder darauf aufbauen.

```html
<div id="main" role="main">
  <h1>Avocados</h1>
  <!-- main section content -->
</div>
```

Dies ist der Hauptabschnitt eines Dokuments, das Avocados behandelt. Unterabschnitte dieses Dokuments könnten deren Geschichte, die verschiedenen Arten, Regionen, in denen sie wachsen, usw. behandeln.

## Beschreibung

Die `main` Rolle ist eine navigierende [Landmarkenrolle](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles), die den Hauptinhalt eines Dokuments identifiziert. Landmarken können von unterstützenden Technologien wie Bildschirmleseprogrammen verwendet werden, um schnell große Abschnitte des Dokuments zu identifizieren und zu navigieren.

Durch das Klassifizieren und Kennzeichnen von Seitenabschnitten kann strukturelle Information, die visuell durch Layout vermittelt wird, programmatisch dargestellt werden. Bildschirmleseprogramme verwenden Landmarkenrollen, um eine Tastaturnavigation zu wichtigen Abschnitten einer Seite bereitzustellen. Für diejenigen, die per Landmarkenrollen navigieren, ist die `main` Rolle eine Alternative zu "zum Hauptinhalt springen"-Links.

Es sollte nur eine `main` Landmarkenrolle pro Dokument geben.

Das {{HTMLElement('main')}} Element hat die Rolle `main`. Entwickler sollten semantisches HTML verwenden — in diesem Fall {{HTMLElement('main')}} — anstatt ARIA zu verwenden.

### Zugehörige ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns)

  - : Das `aria-owns` Attribut stellt Beziehungen in der Barrierefreiheitsebene her, die im DOM nicht vorhanden sind. Dokumente und Anwendungen können im DOM verschachtelt sein, was dazu führen kann, dass mehr als ein main-Element als DOM-Nachfahren vorhanden ist. In diesem Fall fügen Sie `aria-owns` hinzu, um die Beziehung des `main` zu seinem Dokument- oder Anwendungs-Vorfahren zu identifizieren.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder `aria-labelledby`

  - : Identifizieren Sie den zugänglichen Namen mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), wenn ein sichtbarer Header vorhanden ist. Andernfalls kann das Hinzufügen eines [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) hilfreich sein, um Benutzern unterstützender Technologien die Orientierung zu erleichtern, besonders in Single-Page-Anwendungen, bei denen Inhaltsänderungen im Hauptbereich ohne Erzeugung eines Seitenladeereignisses auftreten.

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

## Barrierefreiheitsbedenken

### Verwenden Sie nur eine `main` Rolle pro Dokument

Die `main` [Landmarkenrolle](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) sollte nur einmal pro Dokument verwendet werden.

Wenn ein Dokument zwei `main` Rollen enthält, z.B. beim Aktualisieren von Seiteninhalt durch JavaScript ausgelöst, sollte die Präsenz der inaktiven `main` Rolle über Techniken wie das Umschalten des [`hidden` Attributs](/de/docs/Web/HTML/Global_attributes/hidden) von unterstützenden Technologien entfernt werden.

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

Es ist auch hilfreich, einen zugänglichen Namen hinzuzufügen, um Benutzern unterstützender Technologien die Orientierung zu erleichtern, besonders in Single-Page-Anwendungen, bei denen Inhaltsänderungen im Hauptbereich ohne Erzeugung eines Seitenladeereignisses auftreten. Dies kann mit `aria-labelledby` hinzugefügt werden, wenn ein geeigneter Name inhaltlich vorhanden ist, oder mit `aria-label`, falls nicht.

## Beste Praktiken

### Bevorzugen Sie HTML

Die Verwendung des {{HTMLElement('main')}} Elements kommuniziert automatisch, dass ein Abschnitt die Rolle `main` hat. Wenn möglich, sollte es bevorzugt werden.

### Navigation überspringen

Das Überspringen der Navigation, auch bekannt als "skipnav", ist eine Technik, die es einem Benutzer unterstützender Technologien ermöglicht, große Abschnitte sich wiederholender Inhalte (Hauptnavigation, Informationsbanner usw.) schnell zu überspringen. Dies ermöglicht es dem Benutzer, schneller auf den Hauptinhalt der Seite zuzugreifen.

Das Hinzufügen eines [`id` Attributs](/de/docs/Web/HTML/Global_attributes/id) zu dem Element mit einer Erklärung von `role="main"` ermöglicht es, Ziel eines Links zum Überspringen der Navigation zu sein.

```html
<body>
  <a href="#main-content">Skip to main content</a>

  <!-- navigation and header content -->

  <div id="main-content" role="main">
    <!-- main page content -->
  </div>
</body>
```

Dies entspricht:

```html
<body>
  <a href="#main-content">Skip to main content</a>

  <!-- navigation and header content -->

  <main id="main-content">
    <!-- main page content -->
  </main>
</body>
```

- [WebAIM: "Skip Navigation" Links](https://webaim.org/techniques/skipnav/)

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('main')}} Element
- [Verwendung von HTML-Abschnitten und Umrissen](/de/docs/Web/HTML/Element/Heading_Elements)
- [Verwendung von WAI-ARIA-Landmarks – 2013 | The Paciello Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Zugängliche Landmarken | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Das `main` Element | HTML5 Doctor](https://html5doctor.com/the-main-element/)
