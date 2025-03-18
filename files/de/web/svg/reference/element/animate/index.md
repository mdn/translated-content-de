---
title: <animate>
slug: Web/SVG/Reference/Element/animate
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`<animate>`**-[SVG](/de/docs/Web/SVG)-Element bietet eine Möglichkeit, ein Attribut eines Elements im Laufe der Zeit zu animieren.

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

## Verwendungshinweise

Dieses Element implementiert die [`SVGAnimateElement`](/de/docs/Web/API/SVGAnimateElement)-Schnittstelle.

## Zugänglichkeitsbedenken

Blinkende und blitzende Animationen können problematisch für Menschen mit kognitiven Beeinträchtigungen wie Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung (ADHS) sein. Zudem können bestimmte Arten von Bewegungen Auslöser für Vestibuläre Störungen, Epilepsie, Migräne und skotopische Empfindlichkeit sein.

Überlegen Sie, eine Möglichkeit zum Anhalten oder Deaktivieren von Animationen anzubieten, sowie die Verwendung der [Reduced Motion Media Query](/de/docs/Web/CSS/@media/prefers-reduced-motion) oder eines gleichwertigen [User Agent client hint](/de/docs/Web/HTTP/Guides/Client_hints#user-agent_client_hints) {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}, um eine ergänzende Erfahrung für Benutzer zu schaffen, die keine animierten Erlebnisse wünschen.

- [Designing Safer Web Animation For Motion Sensitivity · Ein Artikel von An A List Apart](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [Eine Einführung in die Reduced Motion Media Query | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsive Design für Bewegung | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN Verständnis von WCAG, Leitfaden 2.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Verständnis des Erfolgskriteriums 2.2.2 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
