---
title: FeaturePolicy
slug: Web/API/FeaturePolicy
l10n:
  sourceCommit: c88a329069328522a5c20c054f9dbced9967dbd4
---

{{APIRef("Feature Policy")}}{{SeeCompatTable}}

Das `FeaturePolicy`-Interface repräsentiert die Menge der [Berechtigungsrichtlinien](/de/docs/Web/HTTP/Permissions_Policy), die auf den aktuellen Ausführungskontext angewendet werden.

## Instanzmethoden

- {{DOMxRef("FeaturePolicy.allowsFeature")}} {{Experimental_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob eine bestimmte Funktion im angegebenen Kontext aktiviert ist.
- {{DOMxRef("FeaturePolicy.features")}} {{Experimental_Inline}}
  - : Gibt eine Liste der Namen aller vom User Agent unterstützten Funktionen zurück. Funktionen, deren Namen auf der Liste erscheinen, könnten durch die Berechtigungsrichtlinien des aktuellen Ausführungskontexts und/oder durch benutzerberechtigte Einschränkungen nicht erlaubt sein.
- {{DOMxRef("FeaturePolicy.allowedFeatures")}} {{Experimental_Inline}}
  - : Gibt eine Liste der Namen aller vom User Agent unterstützten und durch die Berechtigungsrichtlinien erlaubten Funktionen zurück. Beachten Sie, dass Funktionen, die auf dieser Liste erscheinen, möglicherweise dennoch hinter einer Benutzerberechtigung stehen.
- {{DOMxRef("FeaturePolicy.getAllowlistForFeature")}} {{Experimental_Inline}}
  - : Gibt die Erlaubnisliste für die angegebene Funktion zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}
- [Datenschutz, Berechtigungen und Informationssicherheit](/de/docs/Web/Privacy)
