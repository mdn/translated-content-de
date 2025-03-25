---
title: "ARIA: banner-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/banner_role
l10n:
  sourceCommit: ec98716dfe71c78db3f82ee3b1b9e7f68997fa19
---

Die `banner`-Rolle dient zur Definition einer globalen Seitenkopfzeile, die normalerweise ein Logo, den Firmennamen, eine Suchfunktion und möglicherweise die globale Navigation oder einen Slogan enthält. Sie befindet sich in der Regel am oberen Rand der Seite.

Standardmäßig hat das HTML-{{htmlelement("header")}}-Element die gleiche Bedeutung wie das `banner`-Landmark, es sei denn, es ist ein Nachkomme von {{htmlelement("aside")}}, {{htmlelement("article")}}, {{htmlelement("main")}}, {{htmlelement("nav")}} oder {{htmlelement("section")}}. In diesem Fall weist {{htmlelement("header")}} eine [`generic`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role)-Rolle auf und nicht das Äquivalent des seitenweiten Banners.

## Beschreibung

Eine `banner`-Landmark-Rolle überschreibt die implizite ARIA-Rolle des Containerelements, auf das sie angewendet wird. Sie sollte für global wiederkehrende, seitenweite Inhalte reserviert werden, die sich in der Regel oben auf jeder Seite befinden.

Das Banner umfasst typischerweise Dinge wie ein Logo oder eine Unternehmensidentität oder möglicherweise ein seitenbezogenes Suchwerkzeug und ist im Allgemeinen das, was Ihr Marketingteam als "Header" oder "Top-Banner" der Seite bezeichnen würde. Wenn die Technik des [`header`-Elements](/de/docs/Web/HTML/Element/header) nicht für dieses Banner verwendet wird, sollte eine Deklaration von `role="banner"` verwendet werden, um eine Banner-Landmark für unterstützende Technologien zu definieren.

Unterstützende Technologien können das `header`-Element einer Seite als `banner` identifizieren, wenn es ein Nachkomme des [`body`-Elements](/de/docs/Web/HTML/Element/body) ist und nicht innerhalb eines `article`, `aside`, `main`, `nav`, oder `section`-Abschnitts verschachtelt ist.

Jede Seite kann eine `banner`-Landmark haben, aber jede Seite sollte im Allgemeinen auf ein einzelnes Element mit der Rolle des Banners beschränkt sein. Im Fall einer Seite, die geschachtelte `document`- und/oder `application`-Rollen enthält, kann jede geschachtelte `document`- oder `application`-Rolle auch eine `banner`-Landmark haben. Wenn eine Seite mehr als eine `banner`-Landmark enthält, sollte jede einen einzigartigen zugänglichen Namen haben.

### Zugeordnete ARIA-Rollen, Zustände und Eigenschaften

Keine.

### Tastaturinteraktionen

Keine.

### Erforderliche JavaScript-Funktionen

Keine.

## Beispiele

Hier ist ein fiktives Banner mit einem Link zum Überspringen der Navigation, einem Logo, einem Titel und einem Untertitel. Da dies die Hauptkopfzeile der Seite ist, haben wir die `banner`-Landmark-Rolle dem Container-Element hinzugefügt.

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

## Beste Praktiken

Obwohl es am besten ist, das `header`-Element zu verwenden und sicherzustellen, dass es kein Nachkomme eines Unterabschnitts der Seite ist, haben Sie manchmal keinen Zugriff auf das zugrunde liegende HTML. In diesem Fall können Sie die Rolle des `banner` dem Element der Seite hinzufügen, das als `banner` mit JavaScript angezeigt werden soll. Die Identifizierung des Banners der Seite auf diese Weise wird dazu beitragen, die Zugänglichkeit der Website zu verbessern.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML `header`-Element](/de/docs/Web/HTML/Element/header)
- [WC3 Landmarks Beispiel](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/banner.html)
