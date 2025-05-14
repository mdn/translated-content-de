---
title: rel="preconnect"
slug: Web/HTML/Reference/Attributes/rel/preconnect
l10n:
  sourceCommit: e488eba036b2fee56444fd579c3759ef45ff2ca8
---

{{HTMLSidebar}}

Das Schlüsselwort **`preconnect`** für das [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel)-Attribut des {{HTMLElement("link")}}-Elements dient als Hinweis für Browser, dass der Benutzer wahrscheinlich Ressourcen von der Ursprungsressource benötigt. Daher kann der Browser die Benutzererfahrung wahrscheinlich verbessern, indem er proaktiv eine Verbindung zu diesem Ursprung initiiert. Preconnecting beschleunigt zukünftige Ladevorgänge von einem bestimmten Ursprung, indem es proaktiv einen Teil oder den gesamten Handshake (DNS+TCP für HTTP und DNS+TCP+TLS für HTTPS-Ursprünge) durchführt.

`<link rel="preconnect">` bietet einen Vorteil für zukünftige Anforderungen, Navigationen oder Unterressourcen über eine andere Herkunft hinweg. Es hat keinen Vorteil bei Anfragen zur gleichen Herkunft, da die Verbindung bereits geöffnet ist.

Wenn eine Seite Verbindungen zu vielen Drittanbieterdomänen herstellen muss, kann es kontraproduktiv sein, sie alle vorzuverbinden. Der `<link rel="preconnect">`-Hinweis sollte am besten nur für die kritischsten Verbindungen verwendet werden. Für die anderen verwenden Sie einfach [`<link rel="dns-prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch), um Zeit beim ersten Schritt — dem DNS-Lookup — zu sparen.

## Beispiele

```html
<link rel="preconnect" href="https://example.com" />
```

Sie können Preconnect auch als HTTP-`[`Link`](/de/docs/Web/HTTP/Reference/Headers/Link)`-Header implementieren, zum Beispiel:

```http
Link: <https://example.com>; rel="preconnect"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von `<link rel="preconnect">` und anderen ähnlichen Funktionen zur Leistungsverbesserung.
