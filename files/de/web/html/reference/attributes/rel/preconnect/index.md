---
title: '`rel="preconnect"` HTML-Attributwert'
short-title: preconnect
slug: Web/HTML/Reference/Attributes/rel/preconnect
l10n:
  sourceCommit: bf5017c389132af39b50106cf1763fa7106e87b4
---

Das **`preconnect`**-Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel) Attribut des {{HTMLElement("link")}} Elements ist ein Hinweis für Browser, dass der Benutzer wahrscheinlich Ressourcen vom Ursprung der Zielressource benötigt. Daher kann der Browser die Benutzererfahrung voraussichtlich verbessern, indem er vorab eine Verbindung zu diesem Ursprung herstellt. Das Vorabverbinden beschleunigt zukünftige Ladevorgänge von einem gegebenen Ursprung, indem es proaktiv einen Teil oder den gesamten Handshake (DNS+TCP für HTTP und DNS+TCP+TLS für HTTPS-Ursprünge) durchführt.

`<link rel="preconnect">` bietet Vorteile für jede zukünftige Cross-Origin-HTTP-Anfrage, Navigation oder Unterressource. Es hat keinen Nutzen für Same-Origin-Anfragen, da die Verbindung bereits geöffnet ist.

Falls eine Seite Verbindungen zu vielen Drittanbieter-Domänen herstellen muss, kann das Vorabverbinden von allen kontraproduktiv sein. Der `<link rel="preconnect">`-Hinweis wird am besten nur für die kritischsten Verbindungen verwendet. Für die anderen verwenden Sie einfach [`<link rel="dns-prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch), um Zeit beim ersten Schritt zu sparen — beim DNS-Lookup.

## Beispiele

```html
<link rel="preconnect" href="https://example.com" />
```

Sie können Vorabverbinden auch als HTTP- [`Link`](/de/docs/Web/HTTP/Reference/Headers/Link) Header implementieren, zum Beispiel:

```http
Link: <https://example.com>; rel="preconnect"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von `<link rel="preconnect">` und anderen ähnlichen Leistungsverbesserungsfunktionen.
