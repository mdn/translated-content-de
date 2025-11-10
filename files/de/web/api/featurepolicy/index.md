---
title: FeaturePolicy
slug: Web/API/FeaturePolicy
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Feature Policy")}}{{SeeCompatTable}}

Das `FeaturePolicy`-Interface repräsentiert die festgelegten [Berechtigungsrichtlinien](/de/docs/Web/HTTP/Guides/Permissions_Policy), die auf den aktuellen Ausführungskontext angewendet werden.

## Instanzmethoden

- [`FeaturePolicy.allowsFeature`](/de/docs/Web/API/FeaturePolicy/allowsFeature) {{Experimental_Inline}}
  - : Gibt einen Boolean zurück, der angibt, ob ein bestimmtes Feature im angegebenen Kontext aktiviert ist oder nicht.
- [`FeaturePolicy.features`](/de/docs/Web/API/FeaturePolicy/features) {{Experimental_Inline}}
  - : Gibt eine Liste von Namen aller vom User Agent unterstützten Features zurück. Features, deren Namen in der Liste erscheinen, könnten durch die Berechtigungsrichtlinie des aktuellen Ausführungskontexts und/oder durch Benutzergenehmigungen eingeschränkt sein.
- [`FeaturePolicy.allowedFeatures`](/de/docs/Web/API/FeaturePolicy/allowedFeatures) {{Experimental_Inline}}
  - : Gibt eine Liste von Namen aller vom User Agent unterstützten und von der Berechtigungsrichtlinie erlaubten Features zurück. Beachten Sie, dass Features, die auf dieser Liste erscheinen, dennoch eine Benutzerberechtigung erfordern könnten.
- [`FeaturePolicy.getAllowlistForFeature`](/de/docs/Web/API/FeaturePolicy/getAllowlistForFeature) {{Experimental_Inline}}
  - : Gibt die Erlaubnisliste für das angegebene Feature zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}
- [Datenschutz, Berechtigungen und Informationssicherheit](/de/docs/Web/Privacy)
