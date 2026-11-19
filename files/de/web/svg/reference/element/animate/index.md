---
title: <animate>
slug: Web/SVG/Reference/Element/animate
l10n:
  sourceCommit: 5d20ba73fde9de229a91dbdabe3be20966e95a65
---

Das **`<animate>`**-[SVG](/de/docs/Web/SVG)-Element ermöglicht es, ein Attribut eines Elements im Laufe der Zeit zu animieren.

## Verwendungskontext

{{svginfo}}

## Attribute

Dieses Element verfügt nur über globale Attribute.

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

## Barrierefreiheit

Blinkende und aufleuchtende Animationen können für Menschen mit kognitiven Beeinträchtigungen wie der Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung (ADHS) problematisch sein. Darüber hinaus können bestimmte Arten von Bewegung Symptome bei vestibulären Störungen, Epilepsie, Migräne und skotopischer Überempfindlichkeit auslösen.

Erwägen Sie, eine Möglichkeit zum Pausieren oder Deaktivieren von Animationen bereitzustellen. Verwenden Sie außerdem die [Media Query für reduzierte Bewegung](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) oder den entsprechenden [User-Agent-Client-Hint](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}, um Nutzerinnen und Nutzern, die weniger Animationen bevorzugen, eine passende Alternative anzubieten.

- [Sicherere Webanimationen für Menschen mit Bewegungsempfindlichkeit gestalten · Ein Artikel von A List Apart](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [Einführung in die Media Query für reduzierte Bewegung | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsives Design für Bewegung | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN: WCAG verstehen – Erläuterungen zu Richtlinie 2.2](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Erfolgskriterium 2.2.2 verstehen | W3C: WCAG 2.0 verstehen](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
