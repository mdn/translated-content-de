---
title: Web Animations API
slug: Web/API/Web_Animations_API
l10n:
  sourceCommit: 3064cbe8212ea919874fb21120a89657afccba25
---

{{DefaultAPISidebar("Web Animations")}}

Die **Web Animations API** ermöglicht die Synchronisierung und zeitliche Steuerung von Änderungen an der Darstellung einer Webseite, d.h. die Animation von DOM-Elementen. Dazu kombiniert sie zwei Modelle: das Timing Model und das Animation Model.

## Konzepte und Verwendung

Die Web Animations API bietet Browsern und Entwicklern eine gemeinsame Sprache zur Beschreibung von Animationen auf DOM-Elementen. Weitere Informationen zu den Konzepten hinter der API und ihrer Verwendung finden Sie unter [Verwendung der Web Animations API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API).

### Barrierefreiheit

Blinkende und flackernde Animationen können für Menschen mit kognitiven Beeinträchtigungen wie einer Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung (ADHS) problematisch sein. Darüber hinaus können bestimmte Bewegungsarten Vestibularstörungen, Epilepsie, Migräne und skotopische Empfindlichkeit auslösen.

Erwägen Sie, eine Möglichkeit zum Anhalten oder Deaktivieren von Animationen bereitzustellen, sowie die [Media Query für reduzierte Bewegung](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) (oder den entsprechenden [Client Hint des User Agents](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}) zu verwenden, um Nutzern, die eine Präferenz für nicht animierte Erlebnisse angegeben haben, eine ergänzende Erfahrung zu bieten.

- [Sicherere Webanimationen für Bewegungsempfindlichkeit entwerfen · Ein Artikel von A List Apart](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [Eine Einführung in die Media Query für reduzierte Bewegung | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsives Design für Bewegung | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN: WCAG verstehen, Erläuterungen zu Richtlinie 2.2](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Erfolgskriterium 2.2.2 verstehen | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## Web-Animations-Schnittstellen

- [`Animation`](/de/docs/Web/API/Animation)
  - : Bietet Wiedergabesteuerungen und eine Zeitleiste für einen Animationsknoten oder eine Animationsquelle. Kann ein Objekt übernehmen, das mit dem Konstruktor [`KeyframeEffect()`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect) erstellt wurde.
- [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect)
  - : Beschreibt Sätze animierbarer Eigenschaften und Werte, die **keyframes** genannt werden, sowie deren Timing-Optionen. Diese können anschließend mithilfe des Konstruktors [`Animation()`](/de/docs/Web/API/Animation/Animation) wiedergegeben werden.
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline)
  - : Repräsentiert die Zeitleiste einer Animation. Diese Schnittstelle dient zur Definition von Zeitleistenfunktionen (geerbt von [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) und zukünftigen Zeitleistenobjekten) und wird nicht direkt von Entwicklern verwendet.
- [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
  - : Teil des Moduls [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations), das den Animationsnamen und die vergangene Zeit erfasst.
- [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline)
  - : Repräsentiert Animationszeitleisten, einschließlich der standardmäßigen Dokumentzeitleiste (auf die über die Eigenschaft [`Document.timeline`](/de/docs/Web/API/Document/timeline) zugegriffen wird).

## Erweiterungen anderer Schnittstellen

Die Web Animations API fügt [`document`](/de/docs/Web/API/Document) und [`element`](/de/docs/Web/API/Element) Funktionen hinzu.

### Erweiterungen der `Document`-Schnittstelle

- [`document.timeline`](/de/docs/Web/API/Document/timeline)
  - : Das `DocumentTimeline`-Objekt, das die standardmäßige Dokumentzeitleiste repräsentiert.
- [`document.getAnimations()`](/de/docs/Web/API/Document/getAnimations)
  - : Gibt ein Array von [`Animation`](/de/docs/Web/API/Animation)-Objekten zurück, die derzeit auf Elemente im `document` wirken.

### Erweiterungen der `Element`-Schnittstelle

- [`Element.animate()`](/de/docs/Web/API/Element/animate)
  - : Eine Kurzformmethode zum Erstellen und Wiedergeben einer Animation auf einem Element. Sie gibt die erstellte Instanz des [`Animation`](/de/docs/Web/API/Animation)-Objekts zurück.
- [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations)
  - : Gibt ein Array von [`Animation`](/de/docs/Web/API/Animation)-Objekten zurück, die derzeit ein Element beeinflussen oder dies künftig geplant tun werden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- CSS-Kurzformeigenschaft {{cssxref("animation")}}
- CSS-Eigenschaft {{cssxref("animation-timeline")}}
- [Verwendung der Web Animations API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- Modul [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)
- Modul [scrollgesteuerte CSS-Animationen](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
