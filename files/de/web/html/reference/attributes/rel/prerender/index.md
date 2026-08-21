---
title: '`rel="prerender"` HTML-Attributwert'
short-title: prerender
slug: Web/HTML/Reference/Attributes/rel/prerender
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{Non-standard_header}}

Das **`prerender`** Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel) Attribut des {{HTMLElement("link")}} Elements gibt Browsern einen Hinweis darauf, dass der Benutzer die Zielressource für die nächste Navigation benötigen könnte. Daher kann der Browser die Benutzererfahrung vermutlich verbessern, indem er die Ressource im Voraus abruft und verarbeitet — zum Beispiel durch das Abrufen ihrer Unterressourcen oder durch Rendering im Hintergrund außerhalb des sichtbaren Bereichs.

Diese Funktion wird durch die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) ersetzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Speculative loading](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von `<link rel="prerender">` und anderen ähnlichen Leistungsverbesserungsfunktionen.
