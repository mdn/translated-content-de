---
title: "ARIA: rolle banner"
slug: Web/Accessibility/ARIA/Reference/Roles/banner_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die `banner`-Rolle dient zur Definition einer globalen Seitenüberschrift, die normalerweise ein Logo, den Firmennamen, eine Suchfunktion und möglicherweise die globale Navigation oder einen Slogan umfasst. Sie befindet sich in der Regel oben auf der Seite.

Standardmäßig hat das {{htmlelement("header")}}-Element von HTML dieselbe Bedeutung wie das `banner`-Markierungselement, es sei denn, es ist ein Nachkomme von {{htmlelement("aside")}}, {{htmlelement("article")}}, {{htmlelement("main")}}, {{htmlelement("nav")}} oder {{htmlelement("section")}}. In diesem Fall weist das {{htmlelement("header")}}-Element eine [`generic`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role)-Rolle auf und entspricht nicht dem siteweiten Banner.

## Beschreibung

Eine `banner`-Markierung überschreibt die implizite ARIA-Rolle des Container-Elements, auf das sie angewendet wird. Sie sollte für global wiederholende, siteweite Inhalte reserviert sein, die sich in der Regel oben auf jeder Seite befinden.

Das Banner umfasst typischerweise Dinge wie ein Logo oder die Unternehmensidentität oder möglicherweise ein sitespezifisches Suchwerkzeug und entspricht im Allgemeinen dem, was Ihr Marketing-Team als "Header" oder "Top-Banner" der Site bezeichnen würde. Wenn die [`header`-Element]-Technik](/de/docs/Web/HTML/Element/header) nicht für dieses Banner verwendet wird, sollte eine Deklaration von `role="banner"` verwendet werden, um assistierenden Technologien ein Banner-Markierungselement zu definieren.

Assistive Technologien können das `header`-Element einer Seite als `banner` identifizieren, wenn es ein Nachkomme des [`body`-Elements](/de/docs/Web/HTML/Element/body) ist und nicht in einem `article`, `aside`, `main`, `nav` oder `section`-Unterabschnitt verschachtelt ist.

Jede Seite kann eine `banner`-Markierung aufweisen, aber generell sollte jede Seite auf ein einziges Element mit der Rolle des Banners beschränkt sein. Im Fall einer Seite, die verschachtelte `document`- und/oder `application`-Rollen enthält, kann jede verschachtelte `document`- oder `application`-Rolle ebenfalls ein `banner`-Markierungselement aufweisen. Wenn eine Seite mehr als eine `banner`-Markierung enthält, sollte jede einen eindeutigen zugänglichen Namen haben.

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

Keine

### Tastaturinteraktionen

Keine

### Erforderliche JavaScript-Funktionen

Keine

## Beispiele

Hier ist ein einfaches, fiktives Banner mit einem Link zum Überspringen der Navigation, einem Logo, einem Titel und einem Untertitel. Da dies der Hauptheader für die Seite ist, haben wir die `banner`-Markierung zur Container-Element hinzugefügt.

```html
<div role="banner">
  <a href="#main" id="skipToMain" class="skiptocontent">Skip To main content</a>
  <img src="images/w3c.png" alt="W3C Logo" />
  <h1>ARIA Landmarks</h1>
  <p>Identifying page subsections for easy navigation</p>
  <nav>…</nav>
</div>
```

Wir könnten das oben Genannte auch mit dem HTML-`header`-Element schreiben:

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

Obwohl es am besten ist, das `header`-Element zu verwenden und sicherzustellen, dass es kein Nachkomme eines Unterabschnitts der Seite ist, haben Sie manchmal keinen Zugriff auf das zugrunde liegende HTML. In diesem Fall können Sie die Rolle `banner` dem Element der Seite hinzufügen, das als `banner` mit JavaScript ausgesetzt werden soll. Durch die Identifizierung des Banners der Seite auf diese Weise wird die Barrierefreiheit der Site verbessert.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML `header` Element](/de/docs/Web/HTML/Element/header)
- [WC3 Landmarks Beispiel](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/banner.html)
