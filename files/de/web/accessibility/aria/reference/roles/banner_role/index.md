---
title: "ARIA: Rolle banner"
slug: Web/Accessibility/ARIA/Reference/Roles/banner_role
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Die Rolle `banner` dient zur Definition eines globalen Seitenheaders, der normalerweise ein Logo, den Firmennamen, eine Suchfunktion und möglicherweise die globale Navigation oder einen Slogan umfasst. Er befindet sich in der Regel oben auf der Seite.

Standardmäßig hat das {{htmlelement("header")}}-Element in HTML die gleiche Bedeutung wie das `banner`-Gebiet, es sei denn, es ist ein Nachfahre von {{htmlelement("aside")}}, {{htmlelement("article")}}, {{htmlelement("main")}}, {{htmlelement("nav")}} oder {{htmlelement("section")}}. In diesem Fall erhält das {{htmlelement("header")}}-Element eine [`generic`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role)-Rolle und nicht das Äquivalent eines globalen Banners.

## Beschreibung

Eine `banner`-Gebietsrolle überschreibt die implizite ARIA-Rolle des Containerelements, auf das sie angewendet wird. Sie sollte für global wiederkehrende, seitenweite Inhalte reserviert sein, die sich normalerweise oben auf jeder Seite befinden.

Das Banner umfasst typischerweise Dinge wie ein Logo oder die Unternehmensidentität oder möglicherweise ein spezifikationsbasiertes Suchwerkzeug der Website und ist im Allgemeinen das, was Ihr Marketingteam als den "Header" oder "oberen Banner" der Website bezeichnen würde. Wird die [`header`-Element](/de/docs/Web/HTML/Reference/Elements/header)-Technik nicht für dieses Banner verwendet, sollte eine Deklaration von `role="banner"` genutzt werden, um ein Banner-Gebiet für unterstützende Technologien zu definieren.

Unterstützende Technologien können das `header`-Element einer Seite als `banner` identifizieren, wenn es ein Nachfahre des [`body`-Elements](/de/docs/Web/HTML/Reference/Elements/body) ist und nicht innerhalb eines `article`, `aside`, `main`, `nav` oder `section`-Abschnitts verschachtelt ist.

Jede Seite kann ein `banner`-Gebiet haben, aber jede Seite sollte im Allgemeinen auf ein einzelnes Element mit der Rolle des Banners beschränkt sein. Im Falle einer Seite, die verschachtelte `document` und/oder `application`-Rollen enthält, kann jede verschachtelte `document`- oder `application`-Rolle auch ein `banner`-Gebiet haben. Wenn eine Seite mehr als ein `banner`-Gebiet enthält, sollte jedes einen eindeutigen zugänglichen Namen haben.

### Zugehörige ARIA-Rollen, Zustände und Eigenschaften

Keine.

### Tastaturinteraktionen

Keine.

### Erforderliche JavaScript-Funktionen

Keine.

## Beispiele

Hier ist ein fiktives Banner mit einem Link zum Überspringen der Navigation, einem Logo, einem Titel und einem Untertitel. Da dies das Hauptheader der Website ist, haben wir die `banner`-Gebietsrolle dem Containerelement hinzugefügt.

```html
<div role="banner">
  <a href="#main" id="skipToMain" class="skiptocontent">Skip To main content</a>
  <img src="images/w3c.png" alt="W3C Logo" />
  <h1>ARIA Landmarks</h1>
  <p>Identifying page subsections for easy navigation</p>
  <nav>…</nav>
</div>
```

Wir könnten das obige auch mit dem HTML `header`-Element schreiben:

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

Auch wenn es am besten ist, das `header`-Element zu verwenden und sicherzustellen, dass es kein Nachfahre eines Unterabschnitts der Seite ist, haben Sie manchmal keinen Zugriff auf das zugrunde liegende HTML. In diesem Fall können Sie die Rolle `banner` mit JavaScript dem Element der Seite hinzufügen, das als `banner` angezeigt werden soll. Die Identifizierung des Banners der Seite auf diese Weise hilft, die Barrierefreiheit der Seite zu verbessern.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML `header` element](/de/docs/Web/HTML/Reference/Elements/header)
- [WC3 Landmarks Example](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/banner.html)
