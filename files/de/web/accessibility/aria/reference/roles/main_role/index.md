---
title: "ARIA: main-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/main_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die `main`-Landmark-Rolle wird verwendet, um den primären Inhalt eines Dokuments zu kennzeichnen. Der Hauptinhaltsbereich besteht aus Inhalten, die direkt mit dem zentralen Thema eines Dokuments oder der Hauptfunktion einer Anwendung in Verbindung stehen oder diese erweitern.

```html
<div id="main" role="main">
  <h1>Avocados</h1>
  <!-- main section content -->
</div>
```

Dies ist der Hauptabschnitt eines Dokuments, das über Avocados diskutiert. Unterabschnitte dieses Dokuments könnten ihre Geschichte, die verschiedenen Sorten, Regionen, in denen sie wachsen, usw. behandeln.

## Beschreibung

Die `main`-Rolle ist eine navigierende [Landmark](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles)-Rolle, die den Hauptinhalt eines Dokuments identifiziert. Landmarken können von unterstützenden Technologien wie Bildschirmlesern verwendet werden, um schnell große Abschnitte eines Dokuments zu identifizieren und zu navigieren.

Durch die Klassifizierung und Kennzeichnung von Seitensektionen kann die strukturelle Information, die visuell durch Layout vermittelt wird, programmatisch dargestellt werden. Bildschirmleser verwenden Landmark-Rollen, um eine Tastaturnavigation zu wichtigen Abschnitten einer Seite bereitzustellen. Für diejenigen, die über Landmark-Rollen navigieren, ist die `main`-Rolle eine Alternative zu "Zum Hauptinhalt springen"-Links.

Es sollte nur eine `main`-Landmark-Rolle pro Dokument geben.

Das {{HTMLElement('main')}}-Element hat die Rolle `main`. Entwickler sollten semantisches HTML – in diesem Fall {{HTMLElement('main')}} – gegenüber der Verwendung von ARIA vorziehen.

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)

  - : Das `aria-owns`-Attribut stellt Beziehungen in der Zugriffsebene her, die im DOM nicht vorhanden sind. Dokumente und Anwendungen können im DOM verschachtelt sein, was dazu führen kann, dass mehr als ein Hauptelement als DOM-Nachfolger vorhanden ist. In diesem Fall sollte `aria-owns` einbezogen werden, um die Beziehung des Hauptteils zu seinem Dokument- oder Anwendungsvorfahren zu identifizieren.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder `aria-labelledby`

  - : Identifizieren Sie den zugänglichen Namen mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) wenn eine sichtbare Überschrift vorhanden ist. Ansonsten kann das Einfügen eines [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) hilfreich sein, um Benutzer von unterstützender Technologie zu orientieren, insbesondere in einseitigen Anwendungen, bei denen Hauptinhaltsänderungen ohne ein Seitennachladeereignis stattfinden.

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

### Verwenden Sie nur eine `main`-Rolle pro Dokument

Die `main`- [Landmark-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sollte nur einmal pro Dokument verwendet werden.

Wenn ein Dokument zwei `main`-Rollen enthält, zum Beispiel beim Aktualisieren von Seiteninhalten durch JavaScript ausgelöst, sollte die Präsenz der inaktiven `main`-Rolle durch Techniken wie das Umschalten des [`hidden`-Attributs](/de/docs/Web/HTML/Global_attributes/hidden) aus der assistiven Technologie entfernt werden.

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

Es ist auch hilfreich, einen zugänglichen Namen zu verwenden, um Benutzer von unterstützender Technologie zu orientieren, insbesondere in einseitigen Anwendungen, bei denen Hauptinhaltsänderungen ohne ein Seitennachladeereignis stattfinden. Dies kann mit `aria-labelledby` hinzugefügt werden, wenn ein geeigneter Name im Inhalt vorhanden ist, oder `aria-label`, wenn nicht.

## Beste Praktiken

### HTML bevorzugen

Die Verwendung des {{HTMLElement('main')}}-Elements kommuniziert automatisch, dass ein Abschnitt die Rolle `main` hat. Wenn möglich, bevorzugen Sie dessen Verwendung.

### Navigation überspringen

Die Navigation überspringen, auch als "skipnav" bekannt, ist eine Technik, die es einem Benutzer von unterstützender Technologie ermöglicht, schnell große Abschnitte von wiederholten Inhalten (Hauptnavigation, Infobanner usw.) zu überspringen. Dies ermöglicht dem Benutzer einen schnelleren Zugriff auf den Hauptinhalt der Seite.

Das Hinzufügen eines [`id`-Attributs](/de/docs/Web/HTML/Global_attributes/id) zu dem Element mit einer Deklaration von `role="main"` ermöglicht es, ein Ziel eines Links zum Überspringen der Navigation zu sein.

```html
<body>
  <a href="#main-content">Skip to main content</a>

  <!-- navigation and header content -->

  <div id="main-content" role="main">
    <!-- main page content -->
  </div>
</body>
```

Das ist das Äquivalent von:

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

- Das {{HTMLElement('main')}}-Element
- [Verwenden von HTML-Abschnitten und -Strukturen](/de/docs/Web/HTML/Element/Heading_Elements)
- [Verwendung von WAI-ARIA-Landmarks – 2013 | The Paciello Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Accessible Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Das main-Element | HTML5 Doctor](https://html5doctor.com/the-main-element/)
