---
title: "ARIA: banner Rolle"
slug: Web/Accessibility/ARIA/Roles/banner_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `banner` Rolle dient zur Definition eines globalen Webseiten-Headers, der in der Regel ein Logo, den Firmennamen, eine Suchfunktion und möglicherweise die globale Navigation oder einen Slogan enthält. Er befindet sich normalerweise oben auf der Seite.

Standardmäßig hat das HTML-Element {{htmlelement("header")}} eine identische Bedeutung wie das `banner`-Landmark, es sei denn, es ist ein Nachkomme von {{htmlelement("aside")}}, {{htmlelement("article")}}, {{htmlelement("main")}}, {{htmlelement("nav")}} oder {{htmlelement("section")}}, in welchem Fall das {{htmlelement("header")}} Element eine [`generic`](/de/docs/Web/Accessibility/ARIA/Roles/generic_role) Rolle offenbart und nicht das Äquivalent zum seitenweiten Banner.

## Beschreibung

Eine `banner`-Landmark-Rolle überschreibt die implizite ARIA-Rolle des Container-Elements, auf das sie angewendet wird. Sie sollte für weltweit wiederkehrende Inhalte reserviert sein, die sich im Allgemeinen oben auf jeder Seite befinden.

Das Banner umfasst typischerweise Elemente wie ein Logo oder die Unternehmensidentität oder möglicherweise ein seitenbezogenes Suchwerkzeug und ist im Allgemeinen das, was Ihr Marketingteam als den "Header" oder das "Top-Banner" der Seite bezeichnen würde. Wenn die Technik des [`header` Elements](/de/docs/Web/HTML/Element/header) nicht für dieses Banner verwendet wird, sollte eine Deklaration von `role="banner"` verwendet werden, um ein Banner-Landmark für unterstützende Technologien zu definieren.

Unterstützende Technologien können das `header` Element einer Seite als `banner` identifizieren, wenn es ein Nachkomme des [`body` Elements](/de/docs/Web/HTML/Element/body) ist und nicht innerhalb eines `article`, `aside`, `main`, `nav` oder `section` Abschnittes verschachtelt ist.

Jede Seite kann ein `banner`-Landmark haben, jedoch sollte jede Seite im Allgemeinen auf ein einzelnes Element mit der Rolle eines Banners beschränkt sein. Im Falle einer Seite mit verschachtelten `document` und/oder `application` Rollen kann jede verschachtelte `document` oder `application` Rolle ebenfalls ein `banner`-Landmark haben. Wenn eine Seite mehr als ein `banner`-Landmark enthält, sollte jedes einen eindeutigen barrierefreien Namen haben.

### Zugehörige ARIA-Rollen, -Zustände und -Eigenschaften

Keine

### Tastaturinteraktionen

Keine

### Erforderliche JavaScript-Funktionen

Keine

## Beispiele

Hier ist ein einfaches Banner mit einem Link zum Überspringen zur Navigation, einem Logo, einem Titel und einem Untertitel. Da dies der Haupt-Header für die Webseite ist, haben wir die `banner`-Landmark-Rolle zum Container-Element hinzugefügt.

```html
<div role="banner">
  <a href="#main" id="skipToMain" class="skiptocontent">Skip To main content</a>
  <img src="images/w3c.png" alt="W3C Logo" />
  <h1>ARIA Landmarks</h1>
  <p>Identifying page subsections for easy navigation</p>
  <nav>…</nav>
</div>
```

Wir hätten das Obige auch mit dem HTML-`header` Element schreiben können:

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

Während es am besten ist, das `header` Element zu verwenden und sicherzustellen, dass es kein Nachkomme irgendeines Abschnitts der Seite ist, haben Sie manchmal keinen Zugriff auf das zugrunde liegende HTML. In diesem Fall können Sie die Rolle `banner` dem Element der Seite hinzufügen, das als `banner` dargestellt werden soll, mit JavaScript. Die Identifizierung des Banners der Seite auf diese Weise trägt dazu bei, die Zugänglichkeit der Website zu verbessern.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML `header` Element](/de/docs/Web/HTML/Element/header)
- [WC3 Landmarks Beispiel](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/banner.html)
