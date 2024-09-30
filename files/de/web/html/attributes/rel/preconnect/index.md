---
title: rel=preconnect
slug: Web/HTML/Attributes/rel/preconnect
l10n:
  sourceCommit: 922c2b0f37e2f13887c50efe47e62bc23d94c3aa
---

{{HTMLSidebar}}

Das Schlüsselwort **`preconnect`** für das [`rel`](/de/docs/Web/HTML/Element/link#rel) Attribut des {{HTMLElement("link")}} Elements ist ein Hinweis für Browser, dass der Benutzer wahrscheinlich Ressourcen von der Herkunft der Zielressource benötigt. Daher kann der Browser das Benutzererlebnis wahrscheinlich verbessern, indem er präventiv eine Verbindung zu dieser Herkunft initiiert. Preconnect beschleunigt zukünftige Ladezeiten von einer bestimmten Herkunft, indem ein Teil oder das gesamte Handshake (DNS+TCP für HTTP und DNS+TCP+TLS für HTTPS Ursprünge) vorweggenommen wird.

`<link rel="preconnect">` bietet Vorteile für künftige cross-origin HTTP-Anfragen, Navigationen oder Subressourcen. Es hat keinen Nutzen für same-origin Anfragen, da die Verbindung bereits offen ist.

Wenn eine Seite Verbindungen zu vielen Drittanbieterdomains herstellen muss, kann es kontraproduktiv sein, alle vorzuverbinden. Der `<link rel="preconnect">` Hinweis ist am besten nur für die kritischsten Verbindungen zu verwenden. Für die anderen sollte stattdessen [`<link rel="dns-prefetch">`](/de/docs/Web/HTML/Attributes/rel/dns-prefetch) verwendet werden, um Zeit bei dem ersten Schritt zu sparen — der DNS-Abfrage.

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

- [Spekulatives Laden](/de/docs/Web/Performance/Speculative_loading) für einen Vergleich von `<link rel="preconnect">` und anderen ähnlichen Leistungsverbesserungsfunktionen.
