---
title: rel=preconnect
slug: Web/HTML/Attributes/rel/preconnect
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTMLSidebar}}

Das **`preconnect`** Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Element/link#rel)-Attribut des {{HTMLElement("link")}} Elements ist ein Hinweis für Browser, dass die Nutzerin oder der Nutzer wahrscheinlich Ressourcen von der Herkunftsquelle des Ziels benötigt. Daher kann der Browser die Benutzererfahrung wahrscheinlich durch das vorzeitige Initiieren einer Verbindung zu dieser Quelle verbessern. Vorabverbinden beschleunigt zukünftige Ladeprozesse von einem bestimmten Ursprung, indem es Teile oder alle des Handshakes (DNS+TCP für HTTP, und DNS+TCP+TLS für HTTPS Ursprünge) vorab durchführt.

`<link rel="preconnect">` bietet einen Vorteil für jede zukünftige Cross-Origin HTTP-Anfrage, Navigation oder Unterressource. Es hat keinen Vorteil bei gleichen Ursprungsanfragen, da die Verbindung bereits geöffnet ist.

Wenn eine Seite Verbindungen zu vielen Drittanbieter-Domains herstellen muss, kann das Vorabverbinden aller Domains kontraproduktiv sein. Der `<link rel="preconnect">` Hinweis eignet sich am besten nur für die kritischsten Verbindungen. Für die anderen verwenden Sie einfach [`<link rel="dns-prefetch">`](/de/docs/Web/HTML/Attributes/rel/dns-prefetch), um Zeit beim ersten Schritt — der DNS-Abfrage — zu sparen.

## Beispiele

```html
<link rel="preconnect" href="https://example.com" />
```

Sie können Preconnect auch als HTTP [Link](/de/docs/Web/HTTP/Reference/Headers/Link) Header implementieren, zum Beispiel:

```http
Link: <https://example.com>; rel="preconnect"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von `<link rel="preconnect">` und anderen ähnlichen Leistungsverbesserungsmerkmalen.
