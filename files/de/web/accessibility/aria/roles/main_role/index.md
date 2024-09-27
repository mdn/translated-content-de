---
title: "ARIA: main Role"
slug: Web/Accessibility/ARIA/Roles/main_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die Landmarken-Rolle `main` wird verwendet, um den Hauptinhalt eines Dokuments anzuzeigen. Der Hauptinhaltsbereich besteht aus Inhalten, die direkt mit dem zentralen Thema eines Dokuments zusammenhängen oder dieses erweitern, oder der Hauptfunktion einer Anwendung.

```html
<div id="main" role="main">
  <h1>Avocados</h1>
  <!-- main section content -->
</div>
```

Dies ist der Hauptteil eines Dokuments, das Avocados behandelt. Unterabschnitte dieses Dokuments könnten deren Geschichte, die verschiedenen Arten, Regionen, in denen sie wachsen, usw. behandeln.

## Beschreibung

Die Rolle `main` ist eine navigierbare [Landmarken](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles)-Rolle, die den Hauptinhalt eines Dokuments kennzeichnet. Landmarken können von unterstützenden Technologien wie Bildschirmlesegeräten verwendet werden, um große Abschnitte des Dokuments schnell zu identifizieren und zu navigieren.

Durch die Klassifizierung und Kennzeichnung von Teilen einer Seite kann strukturelle Information, die visuell durch das Layout vermittelt wird, programmatisch dargestellt werden. Bildschirmlesegeräte verwenden Landmarken-Rollen, um Tastaturnavigation zu wichtigen Teilen einer Seite zu ermöglichen. Für diejenigen, die über Landmarken-Rollen navigieren, stellt die Rolle `main` eine Alternative zu Links wie "Zum Hauptinhalt springen" dar.

Es sollte nur eine `main`-Landmarken-Rolle pro Dokument geben.

Das {{HTMLElement('main')}}-Element hat die Rolle `main`. Entwickler sollten semantisches HTML verwenden — in diesem Fall {{HTMLElement('main')}} — anstatt ARIA zu verwenden.

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

- [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-owns)

  - : Das Attribut `aria-owns` stellt Beziehungen in der Zugänglichkeitsebene her, die im DOM nicht vorhanden sind. Dokumente und Anwendungen können im DOM verschachtelt werden, was dazu führen kann, dass es mehr als ein Hauptelement als DOM-Nachfahren gibt. In diesem Fall sollte `aria-owns` verwendet werden, um das Verhältnis des Hauptteils zu seinem dokumentarischen oder anwendungsbezogenen Vorfahren zu identifizieren.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder `aria-labelledby`

  - : Identifizieren Sie den zugänglichen Namen mit [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), wenn ein sichtbarer Header vorhanden ist. Andernfalls kann das Hinzufügen eines [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) nützlich sein, um Nutzern unterstützender Technologien Orientierung zu bieten, insbesondere in Einzelseitenanwendungen, bei denen Änderungen des Hauptinhalts ohne Generierung eines Seitenladeereignisses erfolgen.

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

Die `main`-[Landmarken-Rolle](/de/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) sollte nur einmal pro Dokument verwendet werden.

Wenn ein Dokument zwei `main`-Rollen enthält, zum Beispiel beim Aktualisieren des Seiteninhalts durch JavaScript, sollte das Vorhandensein der inaktiven `main`-Rolle über Techniken wie das Umschalten des [`hidden`-Attributs](/de/docs/Web/HTML/Global_attributes/hidden) aus unterstützenden Technologien entfernt werden.

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

Es ist auch hilfreich, einen zugänglichen Namen hinzuzufügen, um Nutzern von unterstützenden Technologien Orientierung zu bieten, insbesondere in Einzelseitenanwendungen, bei denen Änderungen des Hauptinhalts ohne Generierung eines Seitenladeereignisses stattfinden. Dies kann mit `aria-labelledby` hinzugefügt werden, wenn ein geeigneter Name im Inhalt vorhanden ist, oder mit `aria-label`, wenn nicht.

## Beste Vorgehensweisen

### Bevorzugen Sie HTML

Durch die Verwendung des {{HTMLElement('main')}}-Elements wird automatisch kommuniziert, dass ein Abschnitt die Rolle `main` hat. Verwenden Sie dies nach Möglichkeit bevorzugt.

### Navigation überspringen

Die Navigation zu überspringen, auch bekannt als "skipnav", ist eine Technik, die einem Nutzer unterstützender Technologien erlaubt, große Abschnitte wiederholter Inhalte (Hauptnavigation, Informationsbanner usw.) schnell zu überspringen. Dies ermöglicht es dem Nutzer, schneller auf den Hauptinhalt der Seite zuzugreifen.

Das Hinzufügen eines [`id`-Attributs](/de/docs/Web/HTML/Global_attributes/id) zu dem Element mit der Deklaration `role="main"` erlaubt es, Ziel eines Skip-Navigation-Links von Nutzern zu sein.

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
- [Verwendung von HTML-Abschnitten und -Gliederungen](/de/docs/Web/HTML/Element/Heading_Elements)
- [Verwendung von WAI-ARIA-Landmarken – 2013 | Die Paciello-Gruppe](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Zugängliche Landmarken | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Das Hauptelement | HTML5 Doctor](https://html5doctor.com/the-main-element/)
