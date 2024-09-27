---
title: rel=preconnect
slug: Web/HTML/Attributes/rel/preconnect
l10n:
  sourceCommit: 922c2b0f37e2f13887c50efe47e62bc23d94c3aa
---

{{HTMLSidebar}}

Das **`preconnect`** Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Element/link#rel)-Attribut des {{HTMLElement("link")}}-Elements ist ein Hinweis für Browser, dass der Benutzer wahrscheinlich Ressourcen vom Ursprung der Zielressource benötigt. Daher kann der Browser die Benutzererfahrung wahrscheinlich verbessern, indem er proaktiv eine Verbindung zu diesem Ursprung herstellt. Preconnect beschleunigt zukünftige Ladungen von einem gegebenen Ursprung, indem es einen Teil oder das gesamte Handshake-Verfahren (DNS+TCP für HTTP und DNS+TCP+TLS für HTTPS-Ursprünge) vorzeitig durchführt.

`<link rel="preconnect">` bietet einen Vorteil für alle zukünftigen Cross-Origin HTTP-Anfragen, Navigationen oder Unterressourcen. Es bringt keinen Vorteil bei gleichen Ursprunganfragen, da die Verbindung bereits geöffnet ist.

Wenn eine Seite Verbindungen zu vielen Drittanbieter-Domains herstellen muss, kann das Preconnecten aller Verbindungen kontraproduktiv sein. Der `<link rel="preconnect">`-Hinweis ist am besten nur für die kritischsten Verbindungen zu verwenden. Für die anderen nutzen Sie einfach [`<link rel="dns-prefetch">`](/de/docs/Web/HTML/Attributes/rel/dns-prefetch), um Zeit beim ersten Schritt — dem DNS-Lookup — zu sparen.

## Beispiele

```html
<link rel="preconnect" href="https://example.com" />
```

Sie können Preconnect auch als HTTP [Link](/de/docs/Web/HTTP/Headers/Link)-Header implementieren, zum Beispiel:

```http
Link: <https://example.com>; rel="preconnect"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Speculative_loading) für einen Vergleich von `<link rel="preconnect">` und anderen ähnlichen Leistungsverbesserungsmerkmalen.
