---
title: '`rel="prerender"` HTML-Attributwert'
short-title: prerender
slug: Web/HTML/Reference/Attributes/rel/prerender
l10n:
  sourceCommit: bf5017c389132af39b50106cf1763fa7106e87b4
---

{{Deprecated_Header}}{{Non-standard_header}}

Das **`prerender`**-Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel)-Attribut des {{HTMLElement("link")}}-Elements ist ein Hinweis an Browser, dass der Benutzer die Zielressource für die nächste Navigation benötigen könnte. Daher kann der Browser die Benutzererfahrung wahrscheinlich verbessern, indem er die Ressource vorab abruft und verarbeitet — zum Beispiel, indem er ihre Unterressourcen abruft oder ein Rendering im Hintergrund außerhalb des Bildschirms durchführt.

Dieses Feature wird durch die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) abgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von `<link rel="prerender">` und anderen ähnlichen Funktionen zur Leistungsverbesserung.
