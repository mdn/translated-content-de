---
title: "ARIA: main Rolle"
slug: Web/Accessibility/ARIA/Roles/main_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `main` Landmarkenrolle wird verwendet, um den Hauptinhalt eines Dokuments anzuzeigen. Der Hauptinhaltsbereich besteht aus Inhalten, die direkt mit dem zentralen Thema eines Dokuments zusammenhängen oder dieses erweitern, oder mit der Hauptfunktion einer Anwendung.

```html
<div id="main" role="main">
  <h1>Avocados</h1>
  <!-- Inhalte des Hauptabschnitts -->
</div>
```

Dies ist der Hauptabschnitt eines Dokuments, das Avocados behandelt. Unterabschnitte dieses Dokuments könnten deren Geschichte, die verschiedenen Typen, die Regionen, in denen sie wachsen, usw. behandeln.

## Beschreibung

Die `main` Rolle ist eine navigationsbezogene [Landmarkenrolle](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles), die den Hauptinhalt eines Dokuments identifiziert. Landmarken können von unterstützenden Technologien wie Screenreadern genutzt werden, um schnell große Abschnitte eines Dokuments zu identifizieren und zu navigieren.

Durch die Klassifizierung und Beschriftung von Abschnitten einer Seite kann die visuell durch Layout vermittelte Strukturinformation programmatisch dargestellt werden. Screenreader verwenden Landmarkenrollen, um eine Tastaturnavigation zu wichtigen Abschnitten einer Seite bereitzustellen. Für diejenigen, die über Landmarkenrollen navigieren, ist die `main` Rolle eine Alternative zu „direkt zum Hauptinhalt“-Links.

Es sollte pro Dokument nur eine `main` Landmarkenrolle geben.

Das {{HTMLElement('main')}} Element hat eine Rolle von `main`. Entwickler sollten semantisches HTML verwenden — in diesem Fall {{HTMLElement('main')}} — anstatt ARIA zu verwenden.

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns)

  - : Das `aria-owns` Attribut stellt Beziehungen auf der Zugänglichkeitsebene her, die im DOM nicht vorhanden sind. Dokumente und Anwendungen können im DOM verschachtelt sein, was dazu führen kann, dass mehr als ein Hauptelement als DOM-Nachfolger vorhanden ist. In diesem Fall fügen Sie `aria-owns` hinzu, um die Beziehung des Hauptteils zu seinem Dokument- oder Anwendungsvorfahren zu identifizieren.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder `aria-labelledby`

  - : Identifizieren Sie den zugänglichen Namen mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), wenn ein sichtbarer Header vorhanden ist. Andernfalls kann das Hinzufügen eines [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) hilfreich sein, um Benutzern von unterstützenden Technologien, insbesondere in Single-Page-Anwendungen, wo Änderungen des Hauptinhalts ohne das Erzeugen eines Seitenladeereignisses auftreten, die Orientierung zu erleichtern.

## Beispiel

```html
<body>
  <!-- primäre Navigation -->

  <div role="main">
    <h1>Der Erste Indochinakrieg</h1>
    <!-- Artikelinhalt -->
  </div>

  <!-- Sidebar und Footer -->
</body>
```

## Barrierefreiheit

### Verwenden Sie nur eine `main` Rolle pro Dokument

Die `main` [Landmarkenrolle](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) sollte pro Dokument nur einmal verwendet werden.

Wenn ein Dokument zwei `main` Rollen enthält, z.B. bei Aktualisierung von Seiteninhalten durch JavaScript, sollte das Vorhandensein der inaktiven `main` Rolle durch Techniken wie das Umschalten des [`hidden` Attributs](/de/docs/Web/HTML/Global_attributes/hidden) aus unterstützender Technologie entfernt werden.

```html
<main>
  <h1>Aktives `main` Element</h1>
  <!-- Inhalt -->
</main>

<main hidden>
  <h1>Verstecktes `main` Element</h1>
  <!-- Inhalt -->
</main>
```

Es ist auch hilfreich, einen zugänglichen Namen einzufügen, um Benutzern von unterstützenden Technologien, insbesondere in Single-Page-Anwendungen, wo Änderungen des Hauptinhalts ohne das Erzeugen eines Seitenladeereignisses auftreten, die Orientierung zu erleichtern. Dies kann hinzugefügt werden mit `aria-labelledby`, wenn ein geeigneter Name im Inhalt vorhanden ist, oder `aria-label`, wenn nicht.

## Beste Praktiken

### Bevorzugen Sie HTML

Die Verwendung des {{HTMLElement('main')}} Elements wird automatisch kommunizieren, dass ein Abschnitt die Rolle `main` hat. Wenn möglich, ziehen Sie es vor, dies zu verwenden.

### Navigation überspringen

Navigation überspringen, auch als „skipnav“ bekannt, ist eine Technik, die einem Benutzer von unterstützenden Technologien ermöglicht, schnell große Abschnitte von wiederholten Inhalten (Hauptnavigation, Informationsbannern usw.) zu überspringen. Dies ermöglicht dem Benutzer, schneller auf den Hauptinhalt der Seite zuzugreifen.

Das Hinzufügen eines [`id` Attributs](/de/docs/Web/HTML/Global_attributes/id) zu dem Element mit einer Erklärung von `role="main"` ermöglicht es, ein Ziel eines Skip-Navigations-Links für Benutzer zu sein.

```html
<body>
  <a href="#main-content">Zum Hauptinhalt springen</a>

  <!-- Navigations- und Headerinhalte -->

  <div id="main-content" role="main">
    <!-- Hauptseiteninhalt -->
  </div>
</body>
```

Was dem entspricht:

```html
<body>
  <a href="#main-content">Zum Hauptinhalt springen</a>

  <!-- Navigations- und Headerinhalte -->

  <main id="main-content">
    <!-- Hauptseiteninhalt -->
  </main>
</body>
```

- [WebAIM: "Skip Navigation" Links](https://webaim.org/techniques/skipnav/)

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('main')}} Element
- [Verwendung von HTML-Abschnitten und Gliederungen](/de/docs/Web/HTML/Element/Heading_Elements)
- [Verwendung von WAI-ARIA-Landmarken – 2013 | The Paciello Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Barrierefreie Landmarken | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Das main Element | HTML5 Doctor](https://html5doctor.com/the-main-element/)
