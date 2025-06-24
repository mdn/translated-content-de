---
title: "ARIA: Rolle main"
short-title: main
slug: Web/Accessibility/ARIA/Reference/Roles/main_role
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Die `main` Landmark-Rolle wird verwendet, um den Hauptinhalt eines Dokuments zu kennzeichnen. Der Hauptinhalt besteht aus Inhalten, die direkt mit dem zentralen Thema eines Dokuments verbunden sind oder dieses erweitern, oder mit der Hauptfunktion einer Anwendung.

```html
<div id="main" role="main">
  <h1>Avocados</h1>
  <!-- main section content -->
</div>
```

Dies ist der Hauptteil eines Dokuments, das über Avocados spricht. Unterabschnitte dieses Dokuments könnten ihre Geschichte, die verschiedenen Arten, Regionen, in denen sie wachsen, usw. behandeln.

## Beschreibung

Die `main` Rolle ist eine navigative [Landmark-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles), die den Hauptinhalt eines Dokuments identifiziert. Landmarken können von unterstützenden Technologien wie Bildschirmlesesoftware genutzt werden, um große Abschnitte des Dokuments schnell zu identifizieren und zu navigieren.

Indem Abschnitte einer Seite klassifiziert und beschriftet werden, kann die strukturelle Information, die visuell durch das Layout vermittelt wird, auch programmatisch dargestellt werden. Bildschirmlesegeräte verwenden Landmark-Rollen, um Tastaturnavigation zu wichtigen Abschnitten einer Seite bereitzustellen. Für diejenigen, die über Landmark-Rollen navigieren, ist die `main` Rolle eine Alternative zu Links wie "zum Hauptinhalt springen".

Es sollte nur eine `main` Landmark-Rolle pro Dokument geben.

Das {{HTMLElement('main')}} Element hat die Rolle `main`. Entwickler sollten semantisches HTML verwenden — in diesem Fall {{HTMLElement('main')}} — anstatt ARIA zu nutzen.

### Zugehörige ARIA Rollen, Zustände und Eigenschaften

- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)

  - : Das `aria-owns` Attribut stellt Beziehungen in der Barrierefreiheitsschicht her, die im DOM nicht vorhanden sind. Dokumente und Anwendungen können im DOM verschachtelt werden, was dazu führen kann, dass es mehr als ein `main` Element als DOM-Nachkommen gibt. In diesem Fall sollte `aria-owns` verwendet werden, um die Beziehung des Main-Elements zu seinem übergeordneten Dokument oder der Anwendung zu kennzeichnen.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder `aria-labelledby`
  - : Identifizieren Sie den zugänglichen Namen mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn ein sichtbarer Kopfbereich vorhanden ist. Andernfalls kann ein [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) hilfreich sein, um Nutzern von unterstützender Technologie die Orientierung zu erleichtern, insbesondere in einseitigen Anwendungen, in denen Änderungen am Hauptinhalt ohne ein Seitenladeereignis stattfinden.

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

## Barrierefreiheit

### Verwenden Sie nur eine `main` Rolle pro Dokument

Die `main` [Landmark-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sollte nur einmal pro Dokument verwendet werden.

Wenn ein Dokument zwei `main` Rollen enthält, zum Beispiel wenn der Seiteninhalt durch JavaScript aktualisiert wird, sollte das Vorhandensein der inaktiven `main` Rolle über unterstützende Technologien entfernt werden, indem Techniken wie das Umschalten des [`hidden` Attributs](/de/docs/Web/HTML/Reference/Global_attributes/hidden) eingesetzt werden.

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

Es ist ebenfalls hilfreich, einen zugänglichen Namen zu enthalten, um Nutzern von unterstützender Technologie die Orientierung zu erleichtern, insbesondere in einseitigen Anwendungen, in denen Änderungen des Hauptinhalts ohne ein Seitenladeereignis stattfinden. Dieser kann mit `aria-labelledby` hinzugefügt werden, wenn ein geeigneter Name im Inhalt vorhanden ist, oder `aria-label`, wenn nicht.

## Beste Praktiken

### Bevorzugen Sie HTML

Die Verwendung des {{HTMLElement('main')}} Elements kommuniziert automatisch, dass ein Abschnitt die Rolle `main` hat. Wenn möglich, sollten Sie es bevorzugt verwenden.

### Navigation überspringen

Das Überspringen der Navigation, auch bekannt als "skipnav", ist eine Technik, die es Nutzern von unterstützender Technologie ermöglicht, schnell große Abschnitte sich wiederholender Inhalte (Hauptnavigation, Informationsbanner usw.) zu überspringen. Dies ermöglicht es dem Nutzer, schneller auf den Hauptinhalt der Seite zuzugreifen.

Das Hinzufügen eines [`id` Attributs](/de/docs/Web/HTML/Reference/Global_attributes/id) zu dem Element mit der Deklaration `role="main"` ermöglicht es, dass es ein Ziel eines Links zum Überspringen der Navigation ist.

```html
<body>
  <a href="#main-content">Skip to main content</a>

  <!-- navigation and header content -->

  <div id="main-content" role="main">
    <!-- main page content -->
  </div>
</body>
```

Was dem entspricht:

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
- [Verwendung von HTML-Abteilungen und -Gliederungen](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [Verwendung von WAI-ARIA Landmarks – 2013 | The Paciello Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Accessible Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Das main-Element | HTML5 Doctor](https://html5doctor.com/the-main-element/)
