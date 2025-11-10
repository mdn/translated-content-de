---
title: <animate>
slug: Web/SVG/Reference/Element/animate
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Das **`<animate>`** [SVG](/de/docs/Web/SVG) Element bietet eine Möglichkeit, ein Attribut eines Elements im Laufe der Zeit zu animieren.

## Verwendungskontext

{{svginfo}}

## Attribute

Dieses Element umfasst nur globale Attribute.

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGAnimateElement`](/de/docs/Web/API/SVGAnimateElement) Schnittstelle.

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

## Barrierefreiheitsbedenken

Blinkende und flackernde Animationen können problematisch für Personen mit kognitiven Beeinträchtigungen wie Aufmerksamkeitsdefizit-Hyperaktivitätsstörung (ADHS) sein. Darüber hinaus können bestimmte Arten von Bewegungen Auslöser für vestibuläre Störungen, Epilepsie, Migräne und skotopische Empfindlichkeit sein.

Erwägen Sie, eine Möglichkeit zum Anhalten oder Deaktivieren der Animation bereitzustellen, sowie die Verwendung der [Reduced Motion Media Query](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) oder des entsprechenden [User Agent client hint](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}, um ein entsprechendes Erlebnis für Benutzer zu schaffen, die eine Präferenz für keine animierten Erlebnisse ausgedrückt haben.

- [Designing Safer Web Animation For Motion Sensitivity · Ein Artikel von A List Apart](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [Eine Einführung in die Reduced Motion Media Query | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsive Design for Motion | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN Understanding WCAG, Erläuterungen zur Richtlinie 2.2](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Understanding Success Criterion 2.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
