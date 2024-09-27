---
title: "ARIA: Rolle banner"
slug: Web/Accessibility/ARIA/Roles/banner_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `banner`-Rolle dient zur Definition eines globalen Seitenkopfes, der in der Regel ein Logo, den Firmennamen, eine Suchfunktion und möglicherweise die globale Navigation oder einen Slogan enthält. Sie befindet sich normalerweise am oberen Rand der Seite.

Standardmäßig hat das {{htmlelement("header")}}-Element von HTML die gleiche Bedeutung wie das `banner`-Landmark, es sei denn, es ist ein Nachkomme von {{htmlelement("aside")}}, {{htmlelement("article")}}, {{htmlelement("main")}}, {{htmlelement("nav")}} oder {{htmlelement("section")}}, woraufhin {{htmlelement("header")}} eine [`generic`](/de/docs/Web/Accessibility/ARIA/Roles/generic_role)-Rolle darstellt und nicht das Äquivalent des seitenweiten Banners.

## Beschreibung

Eine `banner`-Landmark-Rolle überschreibt die implizite ARIA-Rolle des Container-Elements, auf das sie angewendet wird. Sie sollte für global wiederkehrende, seitenweite Inhalte reserviert sein, die sich in der Regel oben auf jeder Seite befinden.

Das Banner enthält typischerweise Elemente wie ein Logo oder Unternehmensidentität oder möglicherweise ein sitespezifisches Suchwerkzeug und ist im Allgemeinen das, was Ihr Marketingteam als den "Header" oder "Top-Banner" der Seite bezeichnen würde. Wenn die [`header`-Element](/de/docs/Web/HTML/Element/header)-Technik für dieses Banner nicht verwendet wird, sollte eine Deklaration von `role="banner"` verwendet werden, um eine Banner-Landmark für unterstützende Technologien zu definieren.

Unterstützende Technologien können das `header`-Element einer Seite als das `banner` identifizieren, wenn es ein Nachkomme des [`body`-Elements](/de/docs/Web/HTML/Element/body) ist und nicht innerhalb eines `article`, `aside`, `main`, `nav` oder `section`-Unterabschnitts geschachtelt ist.

Jede Seite kann eine `banner`-Landmark haben, aber jede Seite sollte im Allgemeinen auf ein einzelnes Element mit der Rolle `banner` beschränkt sein. Im Falle einer Seite, die verschachtelte `document`- und/oder `application`-Rollen enthält, kann jede verschachtelte `document`- oder `application`-Rolle auch ein `banner`-Landmark haben. Wenn eine Seite mehr als eine `banner`-Landmark enthält, sollte jede einen eindeutigen zugänglichen Namen haben.

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

Keine

### Tastaturinteraktionen

Keine

### Erforderliche JavaScript-Funktionen

Keine

## Beispiele

Hier ist ein einfaches fiktives Banner mit einem Link zum Überspringen der Navigation, einem Logo, einem Titel und einem Untertitel. Da dies der Hauptkopf der Seite ist, haben wir der Container-Komponente die `banner`-Landmark-Rolle hinzugefügt.

```html
<div role="banner">
  <a href="#main" id="skipToMain" class="skiptocontent">Skip To main content</a>
  <img src="images/w3c.png" alt="W3C Logo" />
  <h1>ARIA Landmarks</h1>
  <p>Identifying page subsections for easy navigation</p>
  <nav>…</nav>
</div>
```

Wir hätten das obige Beispiel auch mit dem HTML-`header`-Element schreiben können:

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

Obwohl es am besten ist, das `header`-Element zu verwenden und sicherzustellen, dass es kein Nachkomme eines Unterabschnitts der Seite ist, haben Sie manchmal keinen Zugriff auf das zugrunde liegende HTML. In diesem Fall können Sie die Rolle `banner` dem Element der Seite hinzufügen, das als `banner` exponiert werden soll, mit JavaScript. Die Identifizierung des Banners der Seite auf diese Weise wird die Zugänglichkeit der Seite verbessern.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML `header`-Element](/de/docs/Web/HTML/Element/header)
- [WC3 Landmarks Beispiel](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/banner.html)
