---
title: <animate>
slug: Web/SVG/Reference/Element/animate
l10n:
  sourceCommit: 3064cbe8212ea919874fb21120a89657afccba25
---

Das [SVG](/de/docs/Web/SVG)-Element **`<animate>`** bietet eine Möglichkeit, ein Attribut eines Elements im Laufe der Zeit zu animieren.

## Verwendungskontext

{{svginfo}}

## Attribute

Dieses Element enthält nur globale Attribute.

## DOM-Schnittstelle

Dieses Element implementiert die Schnittstelle [`SVGAnimateElement`](/de/docs/Web/API/SVGAnimateElement).

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
  margin: 0;
  padding: 0;
}
```

```html
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10">
    <animate
      attributeName="rx"
      values="0;5;0"
      dur="10s"
      repeatCount="indefinite" />
  </rect>
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## Hinweise zur Barrierefreiheit

Blinkende und flackernde Animationen können für Menschen mit kognitiven Beeinträchtigungen wie einer Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung (ADHS) problematisch sein. Außerdem können bestimmte Bewegungsarten vestibuläre Störungen, Epilepsie, Migräne und skotopische Sensibilität auslösen.

Ziehen Sie in Betracht, einen Mechanismus zum Anhalten oder Deaktivieren von Animationen bereitzustellen. Verwenden Sie außerdem die [Reduced Motion Media Query](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) oder den entsprechenden [User-Agent-Client-Hint](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}, um eine ergänzende Erfahrung für Nutzer zu schaffen, die eine Präferenz für nicht animierte Erfahrungen angegeben haben.

- [Sicherere Webanimationen für Bewegungsempfindlichkeit gestalten · Ein Artikel von A List Apart](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [Eine Einführung in die Reduced Motion Media Query | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsives Design für Bewegung | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN: Erläuterungen zu WCAG verstehen, Richtlinie 2.2](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Erfolgskriterium 2.2.2 verstehen | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
