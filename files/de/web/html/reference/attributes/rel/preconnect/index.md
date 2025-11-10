---
title: rel="preconnect"
slug: Web/HTML/Reference/Attributes/rel/preconnect
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`preconnect`** Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel) Attribut des {{HTMLElement("link")}} Elements ist ein Hinweis an Browser, dass der Benutzer wahrscheinlich Ressourcen vom Ursprung der Zielressource benötigt. Daher kann der Browser die Benutzererfahrung wahrscheinlich verbessern, indem er vorab eine Verbindung zu diesem Ursprung initiiert. Durch Vorverbindungen wird das Laden von einer bestimmten Quelle beschleunigt, indem ein Teil oder der gesamte Handshake (DNS+TCP für HTTP und DNS+TCP+TLS für HTTPS-Quellen) vorzeitig durchgeführt wird.

`<link rel="preconnect">` wird bei zukünftigen Cross-Origin HTTP-Anfragen, Navigationen oder Subressourcen von Vorteil sein. Bei gleich-originen Anfragen hat es keinen Vorteil, da die Verbindung bereits offen ist.

Wenn eine Seite Verbindungen zu vielen Drittanbieter-Domains herstellen muss, kann es kontraproduktiv sein, alle vorzubereiten. Der Hinweis `<link rel="preconnect">` sollte nur für die kritischsten Verbindungen verwendet werden. Für die anderen sollten Sie einfach `<link rel="dns-prefetch">` verwenden, um beim ersten Schritt – der DNS-Abfrage – Zeit zu sparen.

## Beispiele

```html
<link rel="preconnect" href="https://example.com" />
```

Sie können Preconnect auch als HTTP [`Link`](/de/docs/Web/HTTP/Reference/Headers/Link) Header implementieren, zum Beispiel:

```http
Link: <https://example.com>; rel="preconnect"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Speculative Loading](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von `<link rel="preconnect">` und anderen ähnlichen Leistungsverbesserungsmerkmalen.
