---
title: rel=prerender
slug: Web/HTML/Reference/Attributes/rel/prerender
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}{{Deprecated_Header}}{{Non-standard_header}}

Das **`prerender`** Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel) Attribut des {{HTMLElement("link")}} Elements ist ein Hinweis für Browser, dass der Benutzer möglicherweise die Zielressource für die nächste Navigation benötigt. Daher kann der Browser wahrscheinlich die Benutzererfahrung verbessern, indem er die Ressource vorsorglich abruft und verarbeitet — zum Beispiel, indem er deren Unterressourcen abruft oder einige Rendering-Vorgänge im Hintergrund außerhalb des Bildschirms durchführt.

Dieses Feature wird durch die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) ersetzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von `<link rel="prerender">` und anderen ähnlichen Features zur Leistungsverbesserung.
