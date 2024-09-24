---
title: rel=prerender
slug: Web/HTML/Attributes/rel/prerender
l10n:
  sourceCommit: 922c2b0f37e2f13887c50efe47e62bc23d94c3aa
---

{{HTMLSidebar}}{{Deprecated_Header}}{{Non-standard_header}}

Das **`prerender`** Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Element/link#rel) Attribut des {{HTMLElement("link")}} Elements ist ein Hinweis an Browser, dass der Benutzer möglicherweise die Zielressource für die nächste Navigation benötigt. Daher kann der Browser die Benutzererfahrung vermutlich verbessern, indem er die Ressource vorab abruft und verarbeitet – beispielsweise durch das Abrufen ihrer Unterressourcen oder das Durchführen von Renderings im Hintergrund außerhalb des sichtbaren Bereichs.

Dieses Feature wird durch die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) ersetzt.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Speculative_loading) für einen Vergleich von `<link rel="prerender">` und anderen ähnlichen Leistungsverbesserungsmerkmalen.
