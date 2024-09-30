---
title: rel=prerender
slug: Web/HTML/Attributes/rel/prerender
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{HTMLSidebar}}{{Deprecated_Header}}{{Non-standard_header}}

Das **`prerender`** Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Element/link#rel)-Attribut des {{HTMLElement("link")}} Elements ist ein Hinweis an Browser, dass der Benutzer die Zielressource für die nächste Navigation benötigen könnte. Daher kann der Browser möglicherweise die Benutzererfahrung verbessern, indem er die Ressource vorab abruft und verarbeitet — zum Beispiel, indem er deren Unterressourcen lädt oder einige Renderprozesse im Hintergrund ausführt.

Dieses Feature wird durch die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) ersetzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Speculative_loading) für einen Vergleich von `<link rel="prerender">` und anderen ähnlichen Leistungsverbesserungsfunktionen.
