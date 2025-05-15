---
title: "ARIA: `banner`-Rolle"
short-title: banner
slug: Web/Accessibility/ARIA/Reference/Roles/banner_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die `banner`-Rolle wird verwendet, um einen globalen Seitenkopf zu definieren, der normalerweise ein Logo, den Firmennamen, eine Suchfunktion und möglicherweise die globale Navigation oder einen Slogan enthält. Sie befindet sich in der Regel am oberen Rand der Seite.

Standardmäßig hat das HTML-{{htmlelement("header")}}-Element die gleiche Bedeutung wie das `banner`-Landmark, es sei denn, es ist ein Nachfahre von {{htmlelement("aside")}}, {{htmlelement("article")}}, {{htmlelement("main")}}, {{htmlelement("nav")}} oder {{htmlelement("section")}}. In diesem Fall hat das {{htmlelement("header")}}-Element eine [`generic`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role)-Rolle und nicht die eines seitenweiten Banners.

## Beschreibung

Eine `banner`-Landmark-Rolle überschreibt die implizite ARIA-Rolle des Containerelements, auf das sie angewendet wird. Sie sollte für global wiederkehrende site-weite Inhalte reserviert werden, die sich generell am oberen Rand jeder Seite befinden.

Das Banner enthält typischerweise Dinge wie ein Logo oder eine Unternehmensidentität oder möglicherweise ein site-spezifisches Suchtool und wird allgemein von Ihrem Marketing-Team als "Header" oder "Top-Banner" der Seite bezeichnet. Wenn die Technik des [`header`-Elements](/de/docs/Web/HTML/Reference/Elements/header) nicht für dieses Banner verwendet wird, sollte eine Deklaration von `role="banner"` verwendet werden, um eine Banner-Landmark für unterstützende Technologien zu definieren.

Unterstützende Technologien können das `header`-Element einer Seite als `banner` identifizieren, wenn es ein Nachfahre des [`body`-Elements](/de/docs/Web/HTML/Reference/Elements/body) ist und nicht innerhalb eines `article`, `aside`, `main`, `nav` oder `section`-Unterabschnitts verschachtelt ist.

Jede Seite darf eine `banner`-Landmark haben, aber jede Seite sollte im Allgemeinen auf ein einzelnes Element mit der Rolle eines Banners beschränkt sein. Im Fall einer Seite, die verschachtelte `document`- und/oder `application`-Rollen enthält, kann jede verschachtelte `document`- oder `application`-Rolle auch eine `banner`-Landmark haben. Wenn eine Seite mehr als eine `banner`-Landmark enthält, sollte jede einen eindeutigen zugänglichen Namen haben.

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

Keine.

### Tastaturinteraktionen

Keine.

### Erforderliche JavaScript-Funktionen

Keine.

## Beispiele

Hier ist ein fiktives Banner mit einem Link zum Überspringen zur Navigation, einem Logo, einem Titel und einem Untertitel. Da dies der Hauptheader der Seite ist, haben wir dem Containerelement die `banner`-Landmark-Rolle hinzugefügt.

```html
<div role="banner">
  <a href="#main" id="skipToMain" class="skiptocontent">Skip To main content</a>
  <img src="images/w3c.png" alt="W3C Logo" />
  <h1>ARIA Landmarks</h1>
  <p>Identifying page subsections for easy navigation</p>
  <nav>…</nav>
</div>
```

Wir könnten das obige Beispiel auch mit dem HTML-`header`-Element schreiben:

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

Obwohl es am besten ist, das `header`-Element zu verwenden und sicherzustellen, dass es kein Nachfahre eines Unterabschnitts der Seite ist, haben Sie manchmal keinen Zugriff auf das zugrunde liegende HTML. In diesem Fall können Sie die Rolle `banner` zu dem Element der Seite hinzufügen, das als `banner` mit JavaScript exponiert werden soll. Auf diese Weise das Banner der Seite zu identifizieren, trägt zur Verbesserung der Zugänglichkeit der Site bei.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML-`header`-Element](/de/docs/Web/HTML/Reference/Elements/header)
- [WC3-Landmarks-Beispiel](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/banner.html)
