---
title: FeaturePolicy
slug: Web/API/FeaturePolicy
l10n:
  sourceCommit: c88a329069328522a5c20c054f9dbced9967dbd4
---

{{APIRef("Feature Policy")}}{{SeeCompatTable}}

Das `FeaturePolicy`-Interface repräsentiert die Menge an [Permissions Policies](/de/docs/Web/HTTP/Permissions_Policy), die auf den aktuellen Ausführungskontext angewendet werden.

## Instanzmethoden

- [`FeaturePolicy.allowsFeature`](/de/docs/Web/API/FeaturePolicy/allowsFeature) {{Experimental_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob eine bestimmte Funktion im angegebenen Kontext aktiviert ist oder nicht.
- [`FeaturePolicy.features`](/de/docs/Web/API/FeaturePolicy/features) {{Experimental_Inline}}
  - : Gibt eine Liste von Namen aller Funktionen zurück, die vom User-Agent unterstützt werden. Funktionen, deren Namen in der Liste erscheinen, dürfen möglicherweise nicht durch die Permissions Policy des aktuellen Ausführungskontexts erlaubt oder könnten durch benutzergegebene Berechtigungen eingeschränkt sein.
- [`FeaturePolicy.allowedFeatures`](/de/docs/Web/API/FeaturePolicy/allowedFeatures) {{Experimental_Inline}}
  - : Gibt eine Liste von Namen aller Funktionen zurück, die vom User-Agent unterstützt werden und durch die Permissions Policy erlaubt sind. Beachten Sie, dass Funktionen, die in dieser Liste erscheinen, dennoch hinter einer Benutzerberechtigung stehen könnten.
- [`FeaturePolicy.getAllowlistForFeature`](/de/docs/Web/API/FeaturePolicy/getAllowlistForFeature) {{Experimental_Inline}}
  - : Gibt die Erlaubnisliste für die angegebene Funktion zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}
- [Datenschutz, Berechtigungen und Informationssicherheit](/de/docs/Web/Privacy)
