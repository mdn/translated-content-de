---
title: GeolocationCoordinates
slug: Web/API/GeolocationCoordinates
l10n:
  sourceCommit: 68c5b12ed1e9a55b86cd32e242216f1b88a8ccc7
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

Die **`GeolocationCoordinates`**-Schnittstelle repräsentiert die Position und Höhe des Geräts auf der Erde sowie die Genauigkeit, mit der diese Eigenschaften berechnet werden.
Die geografische Positionsinformation wird in Form von World Geodetic System-Koordinaten (WGS84) bereitgestellt.

## Instanz-Eigenschaften

_Die `GeolocationCoordinates`-Schnittstelle erbt keine Eigenschaften._

- [`GeolocationCoordinates.latitude`](/de/docs/Web/API/GeolocationCoordinates/latitude) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die Breite der Position in Dezimalgraden darstellt.
- [`GeolocationCoordinates.longitude`](/de/docs/Web/API/GeolocationCoordinates/longitude) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die Länge der Position in Dezimalgraden darstellt.
- [`GeolocationCoordinates.altitude`](/de/docs/Web/API/GeolocationCoordinates/altitude) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die Höhe der Position in Metern darstellt, relativ zum nominalen Meeresspiegel. Dieser Wert kann `null` sein, wenn die Implementierung die Daten nicht bereitstellen kann.
- [`GeolocationCoordinates.accuracy`](/de/docs/Web/API/GeolocationCoordinates/accuracy) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die Genauigkeit der `latitude`- und `longitude`-Eigenschaften angibt, ausgedrückt in Metern.
- [`GeolocationCoordinates.altitudeAccuracy`](/de/docs/Web/API/GeolocationCoordinates/altitudeAccuracy) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die Genauigkeit der `altitude` in Metern ausdrückt. Dieser Wert kann `null` sein, wenn die Implementierung die Daten nicht bereitstellen kann.
- [`GeolocationCoordinates.heading`](/de/docs/Web/API/GeolocationCoordinates/heading) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die Richtung darstellt, in die das Gerät zeigt. Dieser Wert, der in Grad angegeben wird, zeigt, wie weit das Gerät von wahrer Nordrichtung abweicht. `0` Grad stellt den wahren Norden dar, und die Richtung wird im Uhrzeigersinn bestimmt (was bedeutet, dass Osten `90` Grad und Westen `270` Grad beträgt). Wenn `speed` `0` ist oder das Gerät keine `heading`-Informationen liefern kann, ist `heading` `null`.
- [`GeolocationCoordinates.speed`](/de/docs/Web/API/GeolocationCoordinates/speed) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die Geschwindigkeit des Geräts in Metern pro Sekunde darstellt. Dieser Wert kann `null` sein.

## Instanz-Methoden

_Die `GeolocationCoordinates`-Schnittstelle erbt keine Methoden._

- [`GeolocationCoordinates.toJSON()`](/de/docs/Web/API/GeolocationCoordinates/toJSON)
  - : Gibt eine JSON-Darstellung des `GeolocationCoordinates`-Objekts zurück und ermöglicht die Serialisierung mit {{jsxref("JSON.stringify()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Geolocation API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- [`Geolocation`](/de/docs/Web/API/Geolocation)
