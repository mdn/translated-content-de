---
title: "ARIA: banner role"
slug: Web/Accessibility/ARIA/Reference/Roles/banner_role
l10n:
  sourceCommit: 8941e7636bfc91985ca5a486e7228b681e1aa272
---

Die `banner`-Rolle dient dazu, eine globale Kopfzeile der Website zu definieren, die in der Regel ein Logo, den Firmennamen, eine Suchfunktion und möglicherweise die globale Navigation oder einen Slogan enthält. Sie befindet sich normalerweise am oberen Rand der Seite.

Standardmäßig hat das {{htmlelement("header")}}-Element von HTML die gleiche Bedeutung wie das `banner`-Landmark, es sei denn, es ist ein Nachfahre von {{htmlelement("aside")}}, {{htmlelement("article")}}, {{htmlelement("main")}}, {{htmlelement("nav")}} oder {{htmlelement("section")}}. In diesem Fall erhält {{htmlelement("header")}} eine [`generic`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role)-Rolle und nicht das Äquivalent zum seitenweiten `banner`.

## Beschreibung

Eine `banner`-Landmark-Rolle überschreibt die implizite ARIA-Rolle des Container-Elements, auf das sie angewendet wird. Sie sollte für global wiederkehrenden site-weiten Inhalt reserviert werden, der sich in der Regel am oberen Rand jeder Seite befindet.

Das Banner enthält typischerweise Dinge wie ein Logo oder eine Unternehmensidentität oder möglicherweise ein site-spezifisches Suchwerkzeug und ist allgemein das, was Ihr Marketingteam als "Header" oder "Top-Banner" der Seite bezeichnen würde. Wenn die [`header`-Element]-Technik](/de/docs/Web/HTML/Element/header) nicht für dieses Banner verwendet wird, sollte eine Deklaration von `role="banner"` verwendet werden, um eine Banner-Landmark für unterstützende Technologien zu definieren.

Unterstützende Technologien können das `header`-Element einer Seite als `banner` identifizieren, wenn es ein Nachfahre des [`body`-Elements](/de/docs/Web/HTML/Element/body) ist und nicht innerhalb eines `article`, `aside`, `main`, `nav` oder `section`-Unterabschnitts geschachtelt ist.

Jede Seite kann eine `banner`-Landmark haben, aber jede Seite sollte im Allgemeinen auf ein einzelnes Element mit der Rolle eines Banners beschränkt sein. Im Falle einer Seite, die verschachtelte `document`- und/oder `application`-Rollen enthält, kann jede verschachtelte `document`- oder `application`-Rolle ebenfalls eine `banner`-Landmark haben. Wenn eine Seite mehr als eine `banner`-Landmark enthält, sollte jede einen eindeutigen zugänglichen Namen haben.

### Zugehörige ARIA-Rollen, -Zustände und -Eigenschaften

Keine

### Tastatur-Interaktionen

Keine

### Erforderliche JavaScript-Funktionen

Keine

## Beispiele

Hier ist ein fiktives Banner mit einem Link zum Überspringen der Navigation, einem Logo, einem Titel und einem Untertitel. Da dies der Hauptheader der Website ist, haben wir der Container-Komponente die `banner`-Landmark-Rolle hinzugefügt.

```html
<div role="banner">
  <a href="#main" id="skipToMain" class="skiptocontent">Skip To main content</a>
  <img src="images/w3c.png" alt="W3C Logo" />
  <h1>ARIA Landmarks</h1>
  <p>Identifying page subsections for easy navigation</p>
  <nav>…</nav>
</div>
```

Wir hätten das obige auch mit dem HTML-`header`-Element schreiben können:

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

Obwohl es am besten ist, das `header`-Element zu verwenden und sicherzustellen, dass es kein Nachfahre eines Unterabschnitts der Seite ist, haben Sie manchmal keinen Zugriff auf das zugrunde liegende HTML. Wenn dies der Fall ist, können Sie die Rolle `banner` dem Element der Seite hinzufügen, das als `banner` mit JavaScript exponiert werden soll. Auf diese Weise das Banner der Seite zu identifizieren, wird helfen, die Barrierefreiheit der Website zu verbessern.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTML `header`-Element](/de/docs/Web/HTML/Element/header)
- [WC3 Landmarks Example](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/banner.html)
