---
title: rel=preconnect
slug: Web/HTML/Attributes/rel/preconnect
l10n:
  sourceCommit: 922c2b0f37e2f13887c50efe47e62bc23d94c3aa
---

{{HTMLSidebar}}

Das Schlüsselwort **`preconnect`** für das [`rel`](/de/docs/Web/HTML/Element/link#rel)-Attribut des {{HTMLElement("link")}}-Elements ist ein Hinweis für Browser, dass der Benutzer wahrscheinlich Ressourcen vom Ursprung der Zielressource benötigt. Daher kann der Browser die Benutzererfahrung wahrscheinlich verbessern, indem er proaktiv eine Verbindung zu diesem Ursprung herstellt. Vorabverbindungen beschleunigen zukünftige Ladevorgänge von einem bestimmten Ursprung, indem sie teilweise oder vollständig den Handshake (DNS+TCP für HTTP und DNS+TCP+TLS für HTTPS-Ursprünge) vorab ausführen.

Ein `<link rel="preconnect">` bietet einen Vorteil für jede zukünftige Cross-Origin-HTTP-Anfrage, Navigation oder Unterressource. Es hat keinen Nutzen für same-origin-Anfragen, da die Verbindung bereits geöffnet ist.

Wenn eine Seite Verbindungen zu vielen Drittanbietern herstellen muss, kann es kontraproduktiv sein, sie alle vorab zu verbinden. Der `<link rel="preconnect">`-Hinweis ist am besten für nur die kritischsten Verbindungen geeignet. Für die anderen verwenden Sie einfach [`<link rel="dns-prefetch">`](/de/docs/Web/HTML/Attributes/rel/dns-prefetch), um Zeit bei dem ersten Schritt zu sparen – dem DNS-Lookup.

## Beispiele

```html
<link rel="preconnect" href="https://example.com" />
```

Sie können Preconnect auch als HTTP-[Link](/de/docs/Web/HTTP/Headers/Link)-Header implementieren, zum Beispiel:

```http
Link: <https://example.com>; rel="preconnect"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Speculative_loading) für einen Vergleich von `<link rel="preconnect">` und anderen ähnlichen Leistungsverbesserungsfunktionen.
