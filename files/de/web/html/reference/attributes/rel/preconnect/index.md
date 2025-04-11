---
title: rel=preconnect
slug: Web/HTML/Reference/Attributes/rel/preconnect
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`preconnect`**-Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel) Attribut des {{HTMLElement("link")}} Elements ist ein Hinweis für Browser, dass der Benutzer wahrscheinlich Ressourcen von der Herkunft der Zielressource benötigt. Daher kann der Browser wahrscheinlich die Benutzererfahrung verbessern, indem er präventiv eine Verbindung zu dieser Herkunft initiiert. Preconnecting beschleunigt zukünftige Ladevorgänge von einer gegebenen Herkunft, indem es präventiv einen Teil oder den gesamten Handshake (DNS+TCP für HTTP und DNS+TCP+TLS für HTTPS-Herkünfte) durchführt.

`<link rel="preconnect">` bietet einen Vorteil für jede zukünftige Cross-Origin HTTP-Anfrage, Navigation oder Subressource. Es hat keinen Vorteil bei Same-Origin-Anfragen, da die Verbindung bereits geöffnet ist.

Wenn eine Seite Verbindungen zu vielen Drittanbieterdomänen herstellen muss, kann das Vorab-Verbinden all dieser Verbindungen kontraproduktiv sein. Der `<link rel="preconnect">`-Hinweis sollte am besten nur für die wichtigsten Verbindungen verwendet werden. Für die anderen verwenden Sie einfach [`<link rel="dns-prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch), um Zeit beim ersten Schritt, der DNS-Abfrage, zu sparen.

## Beispiele

```html
<link rel="preconnect" href="https://example.com" />
```

Sie können `preconnect` auch als HTTP-[Link](/de/docs/Web/HTTP/Reference/Headers/Link)-Header implementieren, zum Beispiel:

```http
Link: <https://example.com>; rel="preconnect"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von `<link rel="preconnect">` und anderen ähnlichen Leistungsverbesserungsfunktionen.
