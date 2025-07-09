---
title: rel=prerender
slug: Web/HTML/Reference/Attributes/rel/prerender
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{Deprecated_Header}}{{Non-standard_header}}

Das **`prerender`** Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel) Attribut des {{HTMLElement("link")}} Elements ist ein Hinweis an Browser, dass der Benutzer die Zielressource für die nächste Navigation benötigen könnte. Daher kann der Browser wahrscheinlich die Benutzererfahrung verbessern, indem er die Ressource vorsorglich holt und verarbeitet — zum Beispiel, indem er ihre Unterressourcen abruft oder einige Renderings im Hintergrund außerhalb des Bildschirms durchführt.

Diese Funktion wird durch die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) ersetzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von `<link rel="prerender">` und anderen ähnlichen Leistungsverbesserungsfunktionen.
