---
title: "ARIA: Rolle main"
short-title: main
slug: Web/Accessibility/ARIA/Reference/Roles/main_role
l10n:
  sourceCommit: 6193c69cb71e80e45e7dff97188253ed15d58321
---

Die `main`-Landmark-Rolle wird verwendet, um den Hauptinhalt eines Dokuments anzuzeigen. Der Hauptinhaltsbereich besteht aus Inhalten, die direkt mit dem zentralen Thema eines Dokuments oder der Hauptfunktion einer Anwendung in Verbindung stehen oder dieses erweitern.

```html
<div id="main" role="main">
  <h1>Avocados</h1>
  <!-- main section content -->
</div>
```

Dies ist der Hauptbereich eines Dokuments, das Avocados behandelt. Unterabschnitte dieses Dokuments könnten ihre Geschichte, die verschiedenen Arten, Regionen, in denen sie wachsen, usw. behandeln.

## Beschreibung

Die `main`-Rolle ist eine navigationsbezogene [landmark](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles)-Rolle, die den Hauptinhalt eines Dokuments identifiziert. Landmarken können von unterstützenden Technologien wie Screenreadern verwendet werden, um schnell große Abschnitte des Dokuments zu identifizieren und zu navigieren.

Durch die Klassifizierung und Kennzeichnung von Seitenabschnitten kann strukturelle Information, die visuell durch das Layout vermittelt wird, programmatisch dargestellt werden. Screenreader verwenden Landmarken-Rollen, um die Tastaturnavigation zu wichtigen Abschnitten einer Seite bereitzustellen. Für diejenigen, die über Landmarken-Rollen navigieren, bietet die `main`-Rolle eine Alternative zu Links wie "zum Hauptinhalt springen".

Es sollte nur eine `main`-Landmark-Rolle pro Dokument geben.

Das {{HTMLElement('main')}}-Element hat die Rolle `main`. Entwickler sollten semantisches HTML verwenden — in diesem Fall {{HTMLElement('main')}} — anstatt ARIA zu verwenden.

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
  - : Das `aria-owns`-Attribut stellt in der Barrierefreiheits-Schicht Beziehungen her, die im DOM nicht vorhanden sind. Dokumente und Anwendungen können im DOM verschachtelt sein, was dazu führen kann, dass mehr als ein Hauptelement als DOM-Nachfahren vorhanden ist. In diesem Fall sollten Sie `aria-owns` einfügen, um die Beziehung des Hauptinhalts zu seinem Dokument- oder Anwendungs-Ahn zu identifizieren.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder `aria-labelledby`
  - : Identifizieren Sie den zugänglichen Namen mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn ein sichtbarer Header vorhanden ist. Andernfalls kann das Einfügen eines [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) hilfreich sein, um Benutzern von unterstützender Technologie, insbesondere in Einzelseiten-Anwendungen, Orientierung zu bieten, in denen Änderungen des Hauptinhalts ohne das Auslösen eines Seitenladeereignisses stattfinden.

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

### Verwenden Sie nur eine `main`-Rolle pro Dokument

Die `main` [landmark role](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sollte nur einmal pro Dokument verwendet werden.

Wenn ein Dokument zwei `main`-Rollen enthält, sagen wir beim Aktualisieren der Seiteninhalte, die durch JavaScript ausgelöst werden, sollte die Anwesenheit der inaktiven `main`-Rolle durch Techniken wie das Umschalten des [`hidden`-Attributs](/de/docs/Web/HTML/Reference/Global_attributes/hidden) von assistierenden Technologien entfernt werden.

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

Es ist auch hilfreich, einen zugänglichen Namen hinzuzufügen, um Benutzern von assistierender Technologie Orientierung zu bieten, insbesondere in Einzelseiten-Anwendungen, in denen Änderungen des Hauptinhalts ohne das Auslösen eines Seitenladeereignisses stattfinden. Dies kann mit `aria-labelledby` hinzugefügt werden, falls ein passender Name im Inhalt vorhanden ist, oder `aria-label`, wenn nicht.

## Best Practices

### Bevorzugen Sie HTML

Die Verwendung des {{HTMLElement('main')}}-Elements wird automatisch kommunizieren, dass das Element die Rolle `main` hat. Wenn möglich, ziehen Sie es vor, das semantische `<main>`-Element anstelle der `main`-Rolle zu verwenden.

### Navigation überspringen

Das Überspringen der Navigation, auch bekannt als "skipnav", ist eine Technik, die es einem Benutzer von unterstützender Technologie ermöglicht, große Abschnitte von sich wiederholendem Inhalt (Hauptnavigation, Info-Banner etc.) schnell zu umgehen. Dies ermöglicht dem Benutzer, schneller auf den Hauptinhalt der Seite zuzugreifen.

Das Hinzufügen eines [`id`-Attributs](/de/docs/Web/HTML/Reference/Global_attributes/id) zu dem Element mit der Deklaration `role="main"` ermöglicht es, Ziel eines Skip-Navigations-Links zu sein, den Nutzer verwenden können.

```html
<body>
  <a href="#main-content">Skip to main content</a>

  <!-- navigation and header content -->

  <div id="main-content" role="main">
    <!-- main page content -->
  </div>
</body>
```

Das ist gleichwertig mit:

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
- [Verwendung von HTML-Abschnitten und Gliederungen](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [Using WAI-ARIA Landmarks – 2013 | The Paciello Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Accessible Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [The main element | HTML5 Doctor](https://html5doctor.com/the-main-element/)
