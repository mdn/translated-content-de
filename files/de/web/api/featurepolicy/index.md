---
title: FeaturePolicy
slug: Web/API/FeaturePolicy
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("Feature Policy")}}{{SeeCompatTable}}{{non-standard_header}}

Das `FeaturePolicy`-Interface repräsentiert die Menge der [Berechtigungsrichtlinien](/de/docs/Web/HTTP/Guides/Permissions_Policy), die auf den aktuellen Ausführungskontext angewendet werden.

## Instanzmethoden

- [`FeaturePolicy.allowsFeature`](/de/docs/Web/API/FeaturePolicy/allowsFeature) {{Experimental_Inline}} {{non-standard_inline}}
  - : Gibt einen Boolean zurück, der angibt, ob eine bestimmte Funktion im angegebenen Kontext aktiviert ist oder nicht.
- [`FeaturePolicy.features`](/de/docs/Web/API/FeaturePolicy/features) {{Experimental_Inline}} {{non-standard_inline}}
  - : Gibt eine Liste der Namen aller vom User-Agent unterstützten Funktionen zurück. Funktionen, deren Namen auf der Liste erscheinen, könnten durch die Berechtigungsrichtlinie des aktuellen Ausführungskontexts nicht erlaubt und/oder durch benutzergewährte Berechtigungen eingeschränkt sein.
- [`FeaturePolicy.allowedFeatures`](/de/docs/Web/API/FeaturePolicy/allowedFeatures) {{Experimental_Inline}} {{non-standard_inline}}
  - : Gibt eine Liste der Namen aller vom User-Agent unterstützten und durch die Berechtigungsrichtlinie erlaubten Funktionen zurück. Beachten Sie, dass Funktionen auf dieser Liste dennoch hinter einer Benutzerberechtigung stehen könnten.
- [`FeaturePolicy.getAllowlistForFeature`](/de/docs/Web/API/FeaturePolicy/getAllowlistForFeature) {{Experimental_Inline}} {{non-standard_inline}}
  - : Gibt die Allowlist für die angegebene Funktion zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}
- [Datenschutz, Berechtigungen und Informationssicherheit](/de/docs/Web/Privacy)
