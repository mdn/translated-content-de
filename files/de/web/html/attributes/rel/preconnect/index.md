---
title: rel=preconnect
slug: Web/HTML/Attributes/rel/preconnect
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

{{HTMLSidebar}}

Das **`preconnect`** Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Element/link#rel) Attribut des {{HTMLElement("link")}} Elements ist ein Hinweis für Browser, dass der Benutzer wahrscheinlich Ressourcen von der Herkunft der Zielressource benötigt. Daher kann der Browser die Benutzererfahrung voraussichtlich verbessern, indem er proaktiv eine Verbindung zu dieser Herkunft initiiert. Preconnecting beschleunigt zukünftige Ladevorgänge von einer bestimmten Herkunft, indem es vorab einen Teil oder den gesamten Handshake (DNS+TCP für HTTP und DNS+TCP+TLS für HTTPS-Herkünfte) durchführt.

`<link rel="preconnect">` bietet einen Vorteil für zukünftige Cross-Origin HTTP-Anfragen, Navigationen oder Subressourcen. Es hat keinen Vorteil bei Anfragen derselben Herkunft, da die Verbindung bereits geöffnet ist.

Wenn eine Seite Verbindungen zu vielen Drittanbieter-Domänen herstellen muss, kann das Preconnect zu all diesen kontraproduktiv sein. Der `<link rel="preconnect">` Hinweis sollte am besten nur für die wichtigsten Verbindungen verwendet werden. Für die anderen verwenden Sie einfach [`<link rel="dns-prefetch">`](/de/docs/Web/HTML/Attributes/rel/dns-prefetch), um Zeit beim ersten Schritt — der DNS-Auflösung — zu sparen.

## Beispiele

```html
<link rel="preconnect" href="https://example.com" />
```

Sie können Preconnect auch als HTTP [Link](/de/docs/Web/HTTP/Headers/Link) Header implementieren, zum Beispiel:

```http
Link: <https://example.com>; rel="preconnect"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von `<link rel="preconnect">` und anderen ähnlichen Performance-Verbesserungsfunktionen.
