---
title: FeaturePolicy
slug: Web/API/FeaturePolicy
l10n:
  sourceCommit: c88a329069328522a5c20c054f9dbced9967dbd4
---

{{APIRef("Feature Policy")}}{{SeeCompatTable}}

Das `FeaturePolicy`-Interface repräsentiert die Menge an [Berechtigungsrichtlinien](/de/docs/Web/HTTP/Permissions_Policy), die auf den aktuellen Ausführungskontext angewendet werden.

## Instanzmethoden

- [`FeaturePolicy.allowsFeature`](/de/docs/Web/API/FeaturePolicy/allowsFeature) {{Experimental_Inline}}
  - : Gibt ein Boolean zurück, das anzeigt, ob ein bestimmtes Merkmal im angegebenen Kontext aktiviert ist oder nicht.
- [`FeaturePolicy.features`](/de/docs/Web/API/FeaturePolicy/features) {{Experimental_Inline}}
  - : Gibt eine Liste mit den Namen aller Merkmale zurück, die vom User Agent unterstützt werden. Merkmale, deren Namen in der Liste erscheinen, sind möglicherweise durch die Berechtigungsrichtlinie des aktuellen Ausführungskontexts oder durch benutzerbezogene Berechtigungen eingeschränkt.
- [`FeaturePolicy.allowedFeatures`](/de/docs/Web/API/FeaturePolicy/allowedFeatures) {{Experimental_Inline}}
  - : Gibt eine Liste mit den Namen aller Merkmale zurück, die vom User Agent unterstützt und durch die Berechtigungsrichtlinie erlaubt sind. Beachten Sie, dass die auf dieser Liste aufgeführten Merkmale dennoch hinter einer Benutzerberechtigung stehen können.
- [`FeaturePolicy.getAllowlistForFeature`](/de/docs/Web/API/FeaturePolicy/getAllowlistForFeature) {{Experimental_Inline}}
  - : Gibt die Erlaubnisliste für das angegebene Merkmal zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}
- [Datenschutz, Berechtigungen und Informationssicherheit](/de/docs/Web/Privacy)
