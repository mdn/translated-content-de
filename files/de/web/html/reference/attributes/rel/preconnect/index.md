---
title: rel="preconnect"
slug: Web/HTML/Reference/Attributes/rel/preconnect
l10n:
  sourceCommit: 0389dd29e0827791ad9d2f6b8cda217c121f9c19
---

{{HTMLSidebar}}

Das **`preconnect`** Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel)-Attribut des {{HTMLElement("link")}}-Elements ist ein Hinweis für Browser, dass Benutzer wahrscheinlich Ressourcen vom Zielursprung benötigen, und daher der Browser die Benutzererfahrung verbessern kann, indem er eine Verbindung zu diesem Ursprung vorzeitig initiiert. Durch Preconnect wird das Laden von einem bestimmten Ursprung beschleunigt, indem präventiv Teile oder der gesamte Handshake (DNS+TCP für HTTP und DNS+TCP+TLS für HTTPS-Ursprünge) durchgeführt werden.

`<link rel="preconnect">` wird jedem zukünftigen Cross-Origin-HTTP-Request, jeder Navigation oder Subressource einen Vorteil bieten. Es hat keinen Vorteil bei gleichen Ursprungs-Anfragen, da die Verbindung bereits offen ist.

Wenn eine Seite Verbindungen zu vielen Drittanbieter-Domains herstellen muss, kann das Vorherverbinden aller kontraproduktiv sein. Der `<link rel="preconnect">`-Hinweis ist am besten nur für die kritischsten Verbindungen zu verwenden. Für die anderen verwenden Sie einfach [`<link rel="dns-prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch), um Zeit beim ersten Schritt — der DNS-Abfrage — zu sparen.

## Beispiele

```html
<link rel="preconnect" href="https://example.com" />
```

Sie können Preconnect auch als HTTP-[Link](/de/docs/Web/HTTP/Reference/Headers/Link)-Header implementieren, zum Beispiel:

```http
Link: <https://example.com>; rel="preconnect"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Weitere Informationen

- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von `<link rel="preconnect">` und anderen ähnlichen Leistungsverbesserungsfunktionen.
