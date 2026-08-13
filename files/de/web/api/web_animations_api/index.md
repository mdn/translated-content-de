---
title: Web Animations API
slug: Web/API/Web_Animations_API
l10n:
  sourceCommit: 8a10694edf44bde124fa8f18af65651855f632dc
---

{{DefaultAPISidebar("Web Animations")}}

Die **Web Animations API** ermöglicht das Synchronisieren und Timing-Änderungen der Darstellung einer Webseite, d.h. die Animation von DOM-Elementen. Sie tut dies, indem sie zwei Modelle kombiniert: das Timing-Modell und das Animationsmodell.

## Konzepte und Nutzung

Die Web Animations API bietet eine gemeinsame Sprache für Browser und Entwickler, um Animationen auf DOM-Elementen zu beschreiben. Um mehr Informationen über die zugrundeliegenden Konzepte der API und deren Verwendung zu erhalten, lesen Sie [Using the Web Animations API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API).

### Barrierefreiheit

Blinkende und flackernde Animationen können problematisch für Menschen mit kognitiven Bedenken wie Aufmerksamkeitsdefizit-Hyperaktivitätsstörung (ADHS) sein. Zusätzlich können bestimmte Arten von Bewegungen Auslöser für vestibuläre Störungen, Epilepsie und Migräne sowie skotopische Empfindlichkeit sein.

Überlegen Sie, eine Möglichkeit bereitzustellen, Animationen zu pausieren oder zu deaktivieren, sowie die [Reduced Motion Media Query](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) (oder ein entsprechender [user agent client hint](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}) einzusetzen, um ein ergänzendes Erlebnis für Benutzer zu schaffen, die keine animierten Erfahrungen bevorzugen.

- [Designing Safer Web Animation For Motion Sensitivity · Ein Artikel von A List Apart](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [Eine Einführung in die Reduced Motion Media Query | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsive Design für Bewegung | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN Understanding WCAG, Richtlinie 2.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Verständnis des Erfolgsrichtlinien 2.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## Web Animations Schnittstellen

- [`Animation`](/de/docs/Web/API/Animation)
  - : Bietet Wiedergabesteuerungen und eine Zeitleiste für einen Animationsknoten oder -quelle. Kann ein mit dem [`KeyframeEffect()`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect) Konstruktor erstelltes Objekt übernehmen.
- [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect)
  - : Beschreibt Sätze von animierbaren Eigenschaften und Werten, sogenannte **Keyframes**, und deren Timing-Optionen. Diese können dann mithilfe des [`Animation()`](/de/docs/Web/API/Animation/Animation) Konstruktors abgespielt werden.
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline)
  - : Repräsentiert die Zeitachse der Animation. Diese Schnittstelle existiert, um Zeitleistenmerkmale (geerbt von [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) und zukünftigen Zeitleistenobjekten) zu definieren, und wird nicht direkt von Entwicklern verwendet.
- [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
  - : Teil des [CSS Animations](/de/docs/Web/CSS/Guides/Animations) Moduls, das den Animationsnamen und die verstrichene Zeit erfasst.
- [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline)
  - : Repräsentiert Animationszeitleisten, einschließlich der Standard-Dokumentenzeitleiste (zugänglich über die [`Document.timeline`](/de/docs/Web/API/Document/timeline) Eigenschaft).

## Erweiterungen zu anderen Schnittstellen

Die Web Animations API fügt [`document`](/de/docs/Web/API/Document) und [`element`](/de/docs/Web/API/Element) neue Funktionen hinzu.

### Erweiterungen der `Document` Schnittstelle

- [`document.timeline`](/de/docs/Web/API/Document/timeline)
  - : Das `DocumentTimeline` Objekt, das die Standard-Dokumentenzeitleiste darstellt.
- [`document.getAnimations()`](/de/docs/Web/API/Document/getAnimations)
  - : Gibt ein Array von [`Animation`](/de/docs/Web/API/Animation) Objekten zurück, die derzeit auf Elemente im `document` wirken.

### Erweiterungen der `Element` Schnittstelle

- [`Element.animate()`](/de/docs/Web/API/Element/animate)
  - : Eine Abkürzungsmethode zum Erstellen und Abspielen einer Animation auf einem Element. Sie gibt die erstellte [`Animation`](/de/docs/Web/API/Animation) Objektinstanz zurück.
- [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations)
  - : Gibt ein Array von [`Animation`](/de/docs/Web/API/Animation) Objekten zurück, die ein Element derzeit beeinflussen oder dies in Zukunft tun werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- CSS {{cssxref("animation")}} Kurzformats-Eigenschaft
- CSS {{cssxref("animation-timeline")}} Eigenschaft
- [Using the Web Animations API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
- [Using CSS animations](/de/docs/Web/CSS/Guides/Animations/Using)
- [CSS animations](/de/docs/Web/CSS/Guides/Animations) Modul
- [CSS scroll-driven animations](/de/docs/Web/CSS/Guides/Scroll-driven_animations) Modul
