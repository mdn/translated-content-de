---
title: "ARIA: Hauptrolle"
slug: Web/Accessibility/ARIA/Reference/Roles/main_role
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Die `main` Landmark-Rolle wird verwendet, um den Hauptinhalt eines Dokuments anzuzeigen. Der Hauptinhaltsbereich besteht aus Inhalten, die direkt mit dem zentralen Thema eines Dokuments oder der Hauptfunktion einer Anwendung zusammenhängen oder diese erweitern.

```html
<div id="main" role="main">
  <h1>Avocados</h1>
  <!-- main section content -->
</div>
```

Dies ist der Hauptabschnitt eines Dokuments, das sich mit Avocados beschäftigt. Unterabschnitte dieses Dokuments könnten ihre Geschichte, die verschiedenen Typen, die Regionen, in denen sie wachsen, usw. behandeln.

## Beschreibung

Die `main`-Rolle ist eine navigierbare [Landmarkenrolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles), die den Hauptinhalt eines Dokuments identifiziert. Landmarken können von unterstützenden Technologien wie Screenreadern verwendet werden, um schnell große Bereiche des Dokuments zu identifizieren und zu navigieren.

Durch die Klassifizierung und Kennzeichnung von Abschnitten einer Seite kann die strukturelle Information, die visuell durch das Layout vermittelt wird, programmatisch dargestellt werden. Screenreader verwenden Landmarkenrollen, um die Tastaturnavigation zu wichtigen Abschnitten einer Seite bereitzustellen. Für diejenigen, die über Landmarkenrollen navigieren, ist die Hauptrolle eine Alternative zu "Zum Hauptinhalt springen"-Links.

Es sollte pro Dokument nur eine `main` Landmarke geben.

Das {{HTMLElement('main')}} Element hat eine Rolle von `main`. Entwickler sollten semantisches HTML — in diesem Fall {{HTMLElement('main')}} — gegenüber der Verwendung von ARIA vorziehen.

### Zugehörige ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)

  - : Das `aria-owns` Attribut stellt Beziehungen in der Barrierefreiheitsschicht her, die im DOM nicht vorhanden sind. Dokumente und Anwendungen können im DOM verschachtelt sein, was dazu führen kann, dass mehr als ein Hauptelement als DOM-Nachfahren existiert. In diesem Fall sollte `aria-owns` eingeschlossen werden, um die Beziehung des Hauptteils zu seinem Dokument- oder Anwendungs-Vorfahren zu identifizieren.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder `aria-labelledby`

  - : Identifizieren Sie den zugänglichen Namen mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn eine sichtbare Kopfzeile vorhanden ist. Andernfalls kann das Einschließen eines [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) für die Orientierung von Nutzern von unterstützender Technologie hilfreich sein, insbesondere in Einzelseitenanwendungen, in denen Hauptinhaltsänderungen ohne das Laden eines Seitenereignisses erfolgen.

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

## Zugänglichkeitsbedenken

### Verwenden Sie nur eine `main` Rolle pro Dokument

Die `main` [Landmark-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sollte nur einmal pro Dokument verwendet werden.

Wenn ein Dokument zwei `main` Rollen enthält, zum Beispiel wenn der Seiteninhalt durch JavaScript aktualisiert wird, sollte die Präsenz der inaktiven `main` Rolle mithilfe von Techniken wie dem Umschalten des [`hidden` Attributs](/de/docs/Web/HTML/Reference/Global_attributes/hidden) aus unterstützender Technologie entfernt werden.

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

Es ist auch hilfreich, einen zugänglichen Namen einzuschließen, um Nutzern von unterstützender Technologie die Orientierung zu erleichtern, insbesondere in Einzelseitenanwendungen, in denen Hauptinhaltsänderungen ohne das Laden eines Seitenereignisses erfolgen. Dies kann mit `aria-labelledby` hinzugefügt werden, wenn ein passender Name im Inhalt vorhanden ist, oder mit `aria-label`, wenn nicht.

## Beste Praktiken

### Bevorzugen Sie HTML

Die Verwendung des {{HTMLElement('main')}} Elements kommuniziert automatisch, dass ein Abschnitt eine Rolle von `main` hat. Wenn möglich, ziehen Sie es vor, dieses zu verwenden.

### Navigation überspringen

Navigation überspringen, auch bekannt als "skipnav", ist eine Technik, die es Nutzern von unterstützender Technologie ermöglicht, große Abschnitte von wiederholtem Inhalt (Hauptnavigation, Informationsbanner usw.) schnell zu überspringen. Dies ermöglicht es dem Nutzer, schneller auf den Hauptinhalt der Seite zuzugreifen.

Das Hinzufügen eines [`id` Attributs](/de/docs/Web/HTML/Reference/Global_attributes/id) zu dem Element mit einer Deklaration von `role="main"` ermöglicht es, dass es das Ziel eines Links zur Überspringen-Navigation für Nutzer wird.

```html
<body>
  <a href="#main-content">Skip to main content</a>

  <!-- navigation and header content -->

  <div id="main-content" role="main">
    <!-- main page content -->
  </div>
</body>
```

Was gleichbedeutend ist mit:

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
- [Verwendung von HTML-Abschnitten und -Gliederungen](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [Verwendung von WAI-ARIA Landmarken – 2013 | The Paciello Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Zugängliche Landmarken | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Das Hauptelement | HTML5 Doctor](https://html5doctor.com/the-main-element/)
