---
title: <animate>
slug: Web/SVG/Reference/Element/animate
l10n:
  sourceCommit: d8fbe1ea30dcc8fd707048a804f5070a729b57a7
---

Das **`<animate>`** [SVG](/de/docs/Web/SVG)-Element bietet eine Möglichkeit, ein Attribut eines Elements im Laufe der Zeit zu animieren.

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

## Nutzungshinweise

Dieses Element implementiert die [`SVGAnimateElement`](/de/docs/Web/API/SVGAnimateElement)-Schnittstelle.

## Zugänglichkeitsbedenken

Blinkende und flackernde Animationen können für Menschen mit kognitiven Beeinträchtigungen, wie dem Aufmerksamkeitsdefizit-Hyperaktivitätsstörung (ADHS), problematisch sein. Zudem kann eine bestimmte Art von Bewegung Auslöser für Vestibuläre Störungen, Epilepsie, Migräne und Skiotopische Empfindlichkeit sein.

Es sollte in Betracht gezogen werden, eine Möglichkeit zum Pausieren oder Deaktivieren der Animation bereitzustellen, sowie die [Reduced Motion Media Query](/de/docs/Web/CSS/@media/prefers-reduced-motion) oder die entsprechenden [User Agent Client Hint](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} zu verwenden, um eine ergänzende Erfahrung für Benutzer zu schaffen, die eine Präferenz für nicht animierte Erlebnisse angegeben haben.

- [Designing Safer Web Animation For Motion Sensitivity · Ein A List Apart Artikel](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [Einführung in die Reduced Motion Media Query | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsive Design für Bewegung | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN Verständnis von WCAG, Erklärung zur Richtlinie 2.2](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Verständnis des Erfolgskriteriums 2.2.2 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
