---
title: "ARIA: banner-Rolle"
short-title: banner
slug: Web/Accessibility/ARIA/Reference/Roles/banner_role
l10n:
  sourceCommit: 5af4f6e12c119ea0d809b35b3fa3266a0fbe4ef4
---

Die Rolle `banner` kennzeichnet einen globalen Website-Header. Dieser enthält üblicherweise ein Logo, den Unternehmensnamen, eine Suchfunktion und möglicherweise die globale Navigation oder einen Slogan. Er befindet sich in der Regel am oberen Rand der Seite.

Standardmäßig hat das HTML-Element {{htmlelement("header")}} dieselbe Bedeutung wie der `banner`-Landmark. Ist es jedoch ein Nachfahre von {{htmlelement("aside")}}, {{htmlelement("article")}}, {{htmlelement("main")}}, {{htmlelement("nav")}} oder {{htmlelement("section")}}, stellt {{htmlelement("header")}} stattdessen die Rolle [`generic`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role) dar und entspricht nicht mehr dem websiteweiten Banner.

## Beschreibung

Die Landmark-Rolle `banner` überschreibt die implizite ARIA-Rolle des Elements, dem sie zugewiesen wird. Sie sollte websiteweiten Inhalten vorbehalten sein, die auf jeder Seite wiederkehren und sich in der Regel am oberen Seitenrand befinden.

Das Banner enthält typischerweise ein Logo oder die visuelle Unternehmensidentität und möglicherweise eine websitespezifische Suchfunktion. Es entspricht im Allgemeinen dem, was ein Marketingteam als „Header“ oder „oberes Banner“ der Website bezeichnen würde. Wenn für dieses Banner nicht das [`header`-Element](/de/docs/Web/HTML/Reference/Elements/header) verwendet wird, sollte `role="banner"` deklariert werden, um das Banner für unterstützende Technologien als Landmark zu kennzeichnen.

Unterstützende Technologien können das `header`-Element einer Seite als `banner` identifizieren, wenn es ein Nachfahre des [`body`-Elements](/de/docs/Web/HTML/Reference/Elements/body) ist und nicht innerhalb eines Unterbereichs vom Typ `article`, `aside`, `main`, `nav` oder `section` verschachtelt ist.

Jede Seite kann einen `banner`-Landmark haben, sollte aber im Allgemeinen nur ein Element mit der Rolle `banner` enthalten. Wenn eine Seite verschachtelte `document`- und/oder `application`-Rollen enthält, kann jede dieser Rollen ebenfalls einen `banner`-Landmark haben. Enthält eine Seite mehr als einen `banner`-Landmark, sollte jeder einen eindeutigen zugänglichen Namen haben.

### Zugehörige ARIA-Rollen, -Zustände und -Eigenschaften

Keine.

### Tastaturinteraktionen

Keine.

### Erforderliche JavaScript-Funktionen

Keine.

## Bewährte Verfahren

Das Element {{HTMLElement('header')}} vermittelt automatisch, dass es die Rolle `banner` hat. Verwenden Sie nach Möglichkeit das semantische Element `<header>` statt der Rolle `banner`.

Am besten verwenden Sie das Element `header` und stellen sicher, dass es kein Nachfahre eines Unterbereichs der Seite ist. Manchmal haben Sie jedoch keinen Zugriff auf das zugrunde liegende HTML. In diesem Fall können Sie dem Element, das als `banner` dargestellt werden soll, die Rolle `banner` mit JavaScript zuweisen. Eine solche Kennzeichnung des Seitenbanners trägt dazu bei, die Barrierefreiheit der Website zu verbessern.

## Beispiele

Hier sehen Sie ein Beispielbanner mit einem Link zum Überspringen zur Navigation, einem Logo, einem Titel und einem Untertitel. Da es sich um den Haupt-Header der Website handelt, haben wir dem umschließenden Element die Landmark-Rolle `banner` zugewiesen.

```html
<div role="banner">
  <a href="#main" id="skipToMain" class="skiptocontent">Skip To main content</a>
  <img src="images/w3c.png" alt="W3C Logo" />
  <h1>ARIA Landmarks</h1>
  <p>Identifying page subsections for easy navigation</p>
  <nav>…</nav>
</div>
```

Wir hätten das obige Beispiel auch mit dem HTML-Element `header` schreiben können:

```html
<header>
  <a href="#main" id="skipToMain" class="skiptocontent">Skip To main content</a>
  <img src="images/w3c.png" alt="W3C Logo" />
  <h1>ARIA Landmarks</h1>
  <p>Identifying page subsections for easy navigation</p>
  <nav>…</nav>
</header>
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML-Element `header`](/de/docs/Web/HTML/Reference/Elements/header)
- [W3C-Beispiel für Landmarks](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/banner.html)
