---
title: Web Animations API
slug: Web/API/Web_Animations_API
l10n:
  sourceCommit: 5d20ba73fde9de229a91dbdabe3be20966e95a65
---

{{DefaultAPISidebar("Web Animations")}}

Die **Web Animations API** ermöglicht es, Änderungen an der Darstellung einer Webseite zu synchronisieren und zeitlich zu steuern, also DOM-Elemente zu animieren. Dazu kombiniert sie zwei Modelle: das Timing Model und das Animation Model.

## Konzepte und Verwendung

Die Web Animations API bietet Browsern und Entwicklern eine gemeinsame Grundlage, um Animationen von DOM-Elementen zu beschreiben. Weitere Informationen zu den Konzepten hinter der API und zu ihrer Verwendung finden Sie unter [Verwendung der Web Animations API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API).

### Barrierefreiheit

Blinkende und aufblitzende Animationen können für Menschen mit kognitiven Beeinträchtigungen wie einer Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung (ADHS) problematisch sein. Darüber hinaus können bestimmte Arten von Bewegung vestibuläre Störungen, Epilepsie, Migräne und skotopische Überempfindlichkeit auslösen.

Erwägen Sie, eine Möglichkeit zum Pausieren oder Deaktivieren von Animationen bereitzustellen. Verwenden Sie außerdem die [Media Query für reduzierte Bewegung](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) (oder den entsprechenden [User-Agent-Client-Hint](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}), um Nutzern, die eine Darstellung ohne Animationen bevorzugen, eine entsprechende Alternative anzubieten.

- [Sicherere Webanimationen für Menschen mit Bewegungsempfindlichkeit gestalten · Ein Artikel von A List Apart](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [Einführung in die Media Query für reduzierte Bewegung | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsives Design für Bewegung | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN: WCAG verstehen – Erläuterungen zu Richtlinie 2.2](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Erfolgskriterium 2.2.2 verstehen | W3C: WCAG 2.0 verstehen](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## Web-Animations-Schnittstellen

- [`Animation`](/de/docs/Web/API/Animation)
  - : Stellt Steuerelemente für die Wiedergabe und eine Zeitleiste für einen Animationsknoten oder eine Animationsquelle bereit. Kann ein Objekt übernehmen, das mit dem [`KeyframeEffect()`](/de/docs/Web/API/KeyframeEffect/KeyframeEffect)-Konstruktor erstellt wurde.
- [`KeyframeEffect`](/de/docs/Web/API/KeyframeEffect)
  - : Beschreibt Gruppen animierbarer Eigenschaften und Werte, die als **Keyframes** bezeichnet werden, sowie deren Optionen für die zeitliche Steuerung. Diese können anschließend mit dem [`Animation()`](/de/docs/Web/API/Animation/Animation)-Konstruktor wiedergegeben werden.
- [`AnimationTimeline`](/de/docs/Web/API/AnimationTimeline)
  - : Repräsentiert die Zeitleiste einer Animation. Diese Schnittstelle definiert Zeitleistenfunktionen, die von [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) und zukünftigen Zeitleistenobjekten geerbt werden. Entwickler greifen nicht direkt auf sie zu.
- [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
  - : Ist Teil des Moduls [CSS Animations](/de/docs/Web/CSS/Guides/Animations) und erfasst den Namen der Animation sowie die verstrichene Zeit.
- [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline)
  - : Repräsentiert Animationszeitleisten, einschließlich der standardmäßigen Dokumentzeitleiste, auf die über die Eigenschaft [`Document.timeline`](/de/docs/Web/API/Document/timeline) zugegriffen wird.

## Erweiterungen anderer Schnittstellen

Die Web Animations API erweitert [`document`](/de/docs/Web/API/Document) und [`element`](/de/docs/Web/API/Element) um zusätzliche Funktionen.

### Erweiterungen der `Document`-Schnittstelle

- [`document.timeline`](/de/docs/Web/API/Document/timeline)
  - : Das `DocumentTimeline`-Objekt, das die standardmäßige Dokumentzeitleiste repräsentiert.
- [`document.getAnimations()`](/de/docs/Web/API/Document/getAnimations)
  - : Gibt ein Array von [`Animation`](/de/docs/Web/API/Animation)-Objekten zurück, die sich derzeit auf Elemente im `document` auswirken.

### Erweiterungen der `Element`-Schnittstelle

- [`Element.animate()`](/de/docs/Web/API/Element/animate)
  - : Eine Kurzform zum Erstellen und Wiedergeben einer Animation auf einem Element. Die Methode gibt die erstellte [`Animation`](/de/docs/Web/API/Animation)-Objektinstanz zurück.
- [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations)
  - : Gibt ein Array von [`Animation`](/de/docs/Web/API/Animation)-Objekten zurück, die sich derzeit auf ein Element auswirken oder dies künftig tun sollen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- CSS-Kurzschreibweise {{cssxref("animation")}}
- CSS-Eigenschaft {{cssxref("animation-timeline")}}
- [Verwendung der Web Animations API](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
- Modul [CSS Animations](/de/docs/Web/CSS/Guides/Animations)
- Modul [CSS Scroll-driven Animations](/de/docs/Web/CSS/Guides/Scroll-driven_animations)
