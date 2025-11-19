---
title: "ARIA: banner-Rolle"
short-title: banner
slug: Web/Accessibility/ARIA/Reference/Roles/banner_role
l10n:
  sourceCommit: 6193c69cb71e80e45e7dff97188253ed15d58321
---

Die `banner`-Rolle dient zur Definition einer globalen Website-Kopfzeile, die üblicherweise ein Logo, den Firmennamen, eine Suchfunktion und möglicherweise die globale Navigation oder einen Slogan umfasst. Sie befindet sich in der Regel am oberen Rand der Seite.

Standardmäßig hat das HTML-{{htmlelement("header")}}-Element die gleiche Bedeutung wie das `banner`-Leitmerkmal, es sei denn, es ist ein Nachfahre von {{htmlelement("aside")}}, {{htmlelement("article")}}, {{htmlelement("main")}}, {{htmlelement("nav")}} oder {{htmlelement("section")}}. In diesem Fall zeigt {{htmlelement("header")}} eine [`generic`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role)-Rolle und nicht das Äquivalent eines seitenweiten Banners an.

## Beschreibung

Eine `banner`-Leitmerkmal-Rolle überschreibt die implizite ARIA-Rolle des Containerelements, auf das sie angewendet wird. Sie sollte für global wiederkehrende, seitenweite Inhalte reserviert werden, die sich normalerweise oben auf jeder Seite befinden.

Das Banner umfasst typischerweise Dinge wie ein Logo oder eine Unternehmensidentität oder möglicherweise ein sitespezifisches Suchwerkzeug und entspricht im Allgemeinen dem, was Ihr Marketingteam als "Header" oder "Topbanner" der Website bezeichnen würde. Wenn die Technik des [`header`-Elements](/de/docs/Web/HTML/Reference/Elements/header) für dieses Banner nicht verwendet wird, sollte eine Deklaration von `role="banner"` verwendet werden, um assistiven Technologien ein Banner-Leitmerkmal zu definieren.

Assistive Technologien können das `header`-Element einer Seite als `banner` identifizieren, wenn es ein Nachfahre des [`body`-Elements](/de/docs/Web/HTML/Reference/Elements/body) ist und nicht in einem `article`, `aside`, `main`, `nav` oder `section` Unterabschnitt verschachtelt ist.

Jede Seite kann ein `banner`-Leitmerkmal haben, aber jede Seite sollte im Allgemeinen auf ein einzelnes Element mit der Rolle `banner` beschränkt sein. Im Falle einer Seite, die verschachtelte `document`- und/oder `application`-Rollen enthält, kann jede verschachtelte `document`- oder `application`-Rolle auch ein `banner`-Leitmerkmal haben. Wenn eine Seite mehr als ein `banner`-Leitmerkmal enthält, sollte jedes einen eindeutigen zugänglichen Namen haben.

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

Keine.

### Tastaturinteraktionen

Keine.

### Erforderliche JavaScript-Funktionen

Keine.

## Beispiele

Hier ist ein gefälschtes Banner mit einem Link zum Überspringen der Navigation, einem Logo, einem Titel und einem Untertitel. Da dies die Hauptkopfzeile für die Seite ist, haben wir das `banner`-Leitmerkmal zur Container-Element hinzugefügt.

```html
<div role="banner">
  <a href="#main" id="skipToMain" class="skiptocontent">Skip To main content</a>
  <img src="images/w3c.png" alt="W3C Logo" />
  <h1>ARIA Landmarks</h1>
  <p>Identifying page subsections for easy navigation</p>
  <nav>…</nav>
</div>
```

Wir könnten das oben Genannte auch mit dem HTML-`header`-Element geschrieben haben:

```html
<header>
  <a href="#main" id="skipToMain" class="skiptocontent">Skip To main content</a>
  <img src="images/w3c.png" alt="W3C Logo" />
  <h1>ARIA Landmarks</h1>
  <p>Identifying page subsections for easy navigation</p>
  <nav>…</nav>
</header>
```

## Best Practices

Die Verwendung des {{HTMLElement('header')}}-Elements kommuniziert automatisch, dass das Element eine Rolle des `banner` hat. Wenn möglich, ziehen Sie die Verwendung des semantischen `<header>`-Elements der `banner`-Rolle vor.

Während es am besten ist, das `header`-Element zu verwenden und sicherzustellen, dass es kein Nachfahre eines Unterabschnitts der Seite ist, haben Sie manchmal keinen Zugriff auf das zugrunde liegende HTML. In diesem Fall können Sie die Rolle `banner` dem Seitenelement, das als `banner` sichtbar gemacht werden soll, mit JavaScript hinzufügen. Die Identifizierung des Banners der Seite auf diese Weise wird dazu beitragen, die Zugänglichkeit der Website zu verbessern.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML `header`-Element](/de/docs/Web/HTML/Reference/Elements/header)
- [WC3 Landmarks Beispiel](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/banner.html)
