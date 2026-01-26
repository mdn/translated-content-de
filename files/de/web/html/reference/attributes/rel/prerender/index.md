---
title: rel="prerender"
slug: Web/HTML/Reference/Attributes/rel/prerender
l10n:
  sourceCommit: 8799c26ef12a653ea2ab7d22a958fb46a649ca60
---

{{Deprecated_Header}}{{Non-standard_header}}

Das **`prerender`**-Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel)-Attribut des {{HTMLElement("link")}}-Elements ist ein Hinweis für Browser, dass der Benutzer die Zielressource möglicherweise für die nächste Navigation benötigt. Der Browser kann daher wahrscheinlich die Benutzererfahrung verbessern, indem er die Ressource präventiv abruft und verarbeitet – zum Beispiel durch das Abrufen ihrer Teilressourcen oder das Durchführen einiger Hintergrund-Renderingprozesse im Offscreen-Modus.

Dieses Feature wird durch die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) abgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von `<link rel="prerender">` und anderen ähnlichen Funktionen zur Leistungsverbesserung.
