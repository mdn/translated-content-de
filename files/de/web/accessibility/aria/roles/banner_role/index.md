---
title: "ARIA: banner-Rolle"
slug: Web/Accessibility/ARIA/Roles/banner_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `banner`-Rolle dient zur Definition eines globalen Website-Headers, der in der Regel ein Logo, den Firmennamen, eine Suchfunktion und möglicherweise die globale Navigation oder einen Slogan enthält. Sie befindet sich allgemein oben auf der Seite.

Standardmäßig hat das {{htmlelement("header")}}-Element in HTML die gleiche Bedeutung wie die `banner`-Landmarke, es sei denn, es ist ein Nachfahre von {{htmlelement("aside")}}, {{htmlelement("article")}}, {{htmlelement("main")}}, {{htmlelement("nav")}} oder {{htmlelement("section")}}, in diesem Fall hat das {{htmlelement("header")}}-Element eine [`generic`](/de/docs/Web/Accessibility/ARIA/Roles/generic_role)-Rolle und nicht die Entsprechung eines siteweiten Banners.

## Beschreibung

Eine `banner`-Landmarke überschreibt die implizite ARIA-Rolle des Containerelements, auf das sie angewendet wird. Sie sollte für global wiederkehrende, siteweite Inhalte reserviert werden, die sich normalerweise oben auf jeder Seite befinden.

Das Banner enthält typischerweise Dinge wie ein Logo oder eine Unternehmensidentität oder möglicherweise ein auf die Website zugeschnittenes Suchwerkzeug und ist im Allgemeinen das, was Ihr Marketingteam als "Header" oder "Top-Banner" der Website bezeichnen würde. Wenn die Technik des [`header`-Elements](/de/docs/Web/HTML/Element/header) nicht für dieses Banner verwendet wird, sollte eine Deklaration von `role="banner"` verwendet werden, um eine Banner-Landmarke für unterstützende Technologien zu definieren.

Unterstützende Technologien können das `header`-Element einer Seite als `banner` identifizieren, wenn es ein Nachfahre des [`body`-Elements](/de/docs/Web/HTML/Element/body) ist und nicht innerhalb eines `article`, `aside`, `main`, `nav` oder `section` Unterabschnitts verschachtelt ist.

Jede Seite kann eine `banner`-Landmarke haben, jedoch sollte jede Seite im Allgemeinen auf ein einziges Element mit der Rolle eines Banners beschränkt sein. Im Fall einer Seite, die verschachtelte `document`- und/oder `application`-Rollen enthält, kann jede verschachtelte `document`- oder `application`-Rolle ebenfalls eine `banner`-Landmarke haben. Wenn eine Seite mehr als eine `banner`-Landmarke enthält, sollte jede einen eindeutigen zugänglichen Namen haben.

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

Keine

### Tastatur-Interaktionen

Keine

### Erforderliche JavaScript-Funktionen

Keine

## Beispiele

Hier ist ein einfaches fiktives Banner mit einem Link zum Überspringen der Navigation, einem Logo, einem Titel und einem Untertitel. Da dies der Haupt-Header der Seite ist, haben wir die `banner`-Landmarke zur Container-Element hinzugefügt.

```html
<div role="banner">
  <a href="#main" id="skipToMain" class="skiptocontent">Skip To main content</a>
  <img src="images/w3c.png" alt="W3C Logo" />
  <h1>ARIA Landmarks</h1>
  <p>Identifying page subsections for easy navigation</p>
  <nav>…</nav>
</div>
```

Wir hätten das obige auch mit dem HTML `header`-Element schreiben können:

```html
<header>
  <a href="#main" id="skipToMain" class="skiptocontent">Skip To main content</a>
  <img src="images/w3c.png" alt="W3C Logo" />
  <h1>ARIA Landmarks</h1>
  <p>Identifying page subsections for easy navigation</p>
  <nav>…</nav>
</header>
```

## Beste Praktiken

Es ist zwar am besten, das `header`-Element zu verwenden und sicherzustellen, dass es kein Nachfahre eines Unterabschnitts der Seite ist, jedoch haben Sie manchmal keinen Zugriff auf das zugrunde liegende HTML. In diesem Fall können Sie die Rolle `banner` dem Element der Seite hinzufügen, das als `banner` mit JavaScript angezeigt werden soll. Das Identifizieren des Banners der Seite auf diese Weise wird dazu beitragen, die Zugänglichkeit der Website zu verbessern.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML `header`-Element](/de/docs/Web/HTML/Element/header)
- [WC3 Landmark-Beispiel](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/banner.html)
