---
title: GeolocationCoordinates
slug: Web/API/GeolocationCoordinates
l10n:
  sourceCommit: 68c5b12ed1e9a55b86cd32e242216f1b88a8ccc7
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

Die **`GeolocationCoordinates`**-Schnittstelle repräsentiert die Position und Höhe des Geräts auf der Erde sowie die Genauigkeit, mit der diese Eigenschaften berechnet werden. Die geografischen Positionsinformationen werden in Form von World Geodetic System-Koordinaten (WGS84) bereitgestellt.

## Instanzeigenschaften

_Die `GeolocationCoordinates`-Schnittstelle erbt keine Eigenschaften._

- {{domxref("GeolocationCoordinates.latitude")}} {{ReadOnlyInline}}
  - : Gibt einen `double`-Wert zurück, der die Breitenlage der Position in Dezimalgrad darstellt.
- {{domxref("GeolocationCoordinates.longitude")}} {{ReadOnlyInline}}
  - : Gibt einen `double`-Wert zurück, der die Längenlage der Position in Dezimalgrad darstellt.
- {{domxref("GeolocationCoordinates.altitude")}} {{ReadOnlyInline}}
  - : Gibt einen `double`-Wert zurück, der die Höhe der Position in Metern relativ zum nominalen Meeresspiegel darstellt. Dieser Wert kann `null` sein, wenn die Implementierung die Daten nicht bereitstellen kann.
- {{domxref("GeolocationCoordinates.accuracy")}} {{ReadOnlyInline}}
  - : Gibt einen `double`-Wert zurück, der die Genauigkeit der Eigenschaften `latitude` und `longitude` in Metern angibt.
- {{domxref("GeolocationCoordinates.altitudeAccuracy")}} {{ReadOnlyInline}}
  - : Gibt einen `double`-Wert zurück, der die Genauigkeit der `altitude` in Metern angibt. Dieser Wert kann `null` sein, wenn die Implementierung die Daten nicht bereitstellen kann.
- {{domxref("GeolocationCoordinates.heading")}} {{ReadOnlyInline}}
  - : Gibt einen `double`-Wert zurück, der die Richtung angibt, in die das Gerät zeigt. Dieser Wert, der in Grad angegeben ist, gibt an, wie weit das Gerät vom wahren Norden abweicht. `0` Grad entspricht dem wahren Norden, und die Richtung wird im Uhrzeigersinn bestimmt (das heißt, Osten ist `90` Grad und Westen ist `270` Grad). Wenn die `speed` `0` ist oder das Gerät keine `heading`-Informationen bereitstellen kann, ist `heading` `null`.
- {{domxref("GeolocationCoordinates.speed")}} {{ReadOnlyInline}}
  - : Gibt einen `double`-Wert zurück, der die Geschwindigkeit des Geräts in Metern pro Sekunde angibt. Dieser Wert kann `null` sein.

## Instanzmethoden

_Die `GeolocationCoordinates`-Schnittstelle erbt keine Methoden._

- {{domxref("GeolocationCoordinates.toJSON()")}}
  - : Gibt eine JSON-Darstellung des `GeolocationCoordinates`-Objekts zurück und ermöglicht die Serialisierung mit {{jsxref("JSON.stringify()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Geolocation API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("Geolocation")}}
