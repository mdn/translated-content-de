---
title: "ARIA: main-Rolle"
short-title: main
slug: Web/Accessibility/ARIA/Reference/Roles/main_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die `main`-Landmark-Rolle wird verwendet, um den Hauptinhalt eines Dokuments zu kennzeichnen. Der Hauptinhaltsbereich besteht aus Inhalten, die direkt mit dem zentralen Thema eines Dokuments oder der Hauptfunktion einer Anwendung in Verbindung stehen oder darauf aufbauen.

```html
<div id="main" role="main">
  <h1>Avocados</h1>
  <!-- main section content -->
</div>
```

Dies ist der Hauptabschnitt eines Dokuments, das über Avocados spricht. Unterabschnitte dieses Dokuments könnten ihre Geschichte, die verschiedenen Typen, Regionen, in denen sie wachsen, usw. behandeln.

## Beschreibung

Die `main`-Rolle ist eine Navigations-[Landmark](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles)-Rolle, die den Hauptinhalt eines Dokuments identifiziert. Landmarks können von unterstützender Technologie wie Bildschirmlesegeräten verwendet werden, um große Abschnitte des Dokuments schnell zu identifizieren und zu navigieren.

Durch die Klassifizierung und Kennzeichnung von Abschnitten einer Seite kann die visuell durch Layout vermittelte Strukturinformation programmatisch dargestellt werden. Bildschirmlesegeräte verwenden Landmark-Rollen, um Tastaturnavigation zu wichtigen Abschnitten einer Seite bereitzustellen. Für diejenigen, die über Landmark-Rollen navigieren, ist die Main-Rolle eine Alternative zu "Zum Hauptinhalt springen"-Links.

Es sollte nur eine `main`-Landmark-Rolle pro Dokument geben.

Das {{HTMLElement('main')}}-Element hat die Rolle `main`. Entwickler sollten semantisches HTML verwenden – in diesem Fall {{HTMLElement('main')}} – anstatt ARIA zu verwenden.

### Zugehörige ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)

  - : Das `aria-owns`-Attribut stellt Beziehungen in der Barrierefreiheits-Ebene her, die im DOM nicht vorhanden sind. Dokumente und Anwendungen können im DOM verschachtelt sein, was dazu führen kann, dass mehr als ein main-Element als DOM-Nachfahre vorhanden ist. Falls dies der Fall ist, verwenden Sie `aria-owns`, um die Beziehung des Main-Inhalts zu seinem Dokument- oder Anwendungs-Vorfahren zu identifizieren.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder `aria-labelledby`

  - : Identifizieren Sie den zugänglichen Namen mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn eine sichtbare Kopfzeile vorhanden ist. Andernfalls kann das Hinzufügen eines [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) hilfreich sein, um Benutzer von unterstützender Technologie zu orientieren, insbesondere in Einzelseiten-Anwendungen, in denen Änderungen des Hauptinhalts stattfinden, ohne dass ein Seitenladeereignis generiert wird.

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

Die `main`-[Landmark-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#3._landmark_roles) sollte nur einmal pro Dokument verwendet werden.

Wenn ein Dokument zwei `main`-Rollen enthält, zum Beispiel beim Aktualisieren von Seiteninhalten, wenn durch JavaScript ausgelöst, sollte das Vorhandensein der inaktiven `main`-Rolle durch Techniken wie das Umschalten des [`hidden`-Attributs](/de/docs/Web/HTML/Reference/Global_attributes/hidden) aus unterstützender Technologie entfernt werden.

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

Es ist auch hilfreich, einen zugänglichen Namen einzuschließen, um Benutzer von unterstützender Technologie zu orientieren, insbesondere in Einzelseiten-Anwendungen, in denen Änderungen des Hauptinhalts erfolgen, ohne dass ein Seitenladeereignis generiert wird. Dies kann mit `aria-labelledby` hinzugefügt werden, wenn ein geeigneter Name im Inhalt vorhanden ist, oder mit `aria-label`, wenn nicht.

## Best Practices

### Bevorzugen Sie HTML

Die Verwendung des {{HTMLElement('main')}}-Elements kommuniziert automatisch, dass ein Abschnitt die Rolle `main` hat. Wenn möglich, verwenden Sie es bevorzugt.

### Navigation überspringen

Das Überspringen der Navigation, auch bekannt als "skipnav", ist eine Technik, die es einem Benutzer unterstützender Technologie ermöglicht, große Abschnitte von sich wiederholenden Inhalten (Hauptnavigation, Info-Banner, usw.) schnell zu überspringen. Dies ermöglicht es dem Benutzer, schneller auf den Hauptinhalt der Seite zuzugreifen.

Das Hinzufügen eines [`id`-Attributs](/de/docs/Web/HTML/Reference/Global_attributes/id) zu dem Element mit einer Erklärung von `role="main"` erlaubt es, ein Ziel eines Skip-Navigations-Links zu sein.

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

- [WebAIM: "Skip Navigation" Links](https://webaim.org/techniques/skipnav/)

## Spezifikationen

{{Specifications}}

## Siehe auch

- Das {{HTMLElement('main')}}-Element
- [Verwendung von HTML-Abschnitten und -Umrissen](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [Verwendung von WAI-ARIA-Landmarks – 2013 | The Paciello Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Zugängliche Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Das main-Element | HTML5 Doctor](https://html5doctor.com/the-main-element/)
