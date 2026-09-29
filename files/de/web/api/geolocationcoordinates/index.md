---
title: GeolocationCoordinates
slug: Web/API/GeolocationCoordinates
l10n:
  sourceCommit: 6bb81a788ff71f726e32d16757c99d5c45a7edf9
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

Die Schnittstelle **`GeolocationCoordinates`** stellt die Position und Höhe eines Geräts auf der Erde sowie die Genauigkeit dar, mit der diese Eigenschaften berechnet werden.
Die geografische Position wird in Koordinaten des World Geodetic System (WGS84) angegeben.

## Instanzeigenschaften

_Die Schnittstelle `GeolocationCoordinates` erbt keine Eigenschaften._

- [`GeolocationCoordinates.latitude`](/de/docs/Web/API/GeolocationCoordinates/latitude) {{ReadOnlyInline}}
  - : Gibt einen `double` zurück, der den Breitengrad der Position in Dezimalgrad angibt.
- [`GeolocationCoordinates.longitude`](/de/docs/Web/API/GeolocationCoordinates/longitude) {{ReadOnlyInline}}
  - : Gibt einen `double` zurück, der den Längengrad der Position in Dezimalgrad angibt.
- [`GeolocationCoordinates.altitude`](/de/docs/Web/API/GeolocationCoordinates/altitude) {{ReadOnlyInline}}
  - : Gibt einen `double` zurück, der die Höhe der Position in Metern über dem mittleren Meeresspiegel angibt. Der Wert kann `null` sein, wenn die Implementierung die Daten nicht bereitstellen kann.
- [`GeolocationCoordinates.accuracy`](/de/docs/Web/API/GeolocationCoordinates/accuracy) {{ReadOnlyInline}}
  - : Gibt einen `double` zurück, der die Genauigkeit der Eigenschaften `latitude` und `longitude` in Metern angibt.
- [`GeolocationCoordinates.altitudeAccuracy`](/de/docs/Web/API/GeolocationCoordinates/altitudeAccuracy) {{ReadOnlyInline}}
  - : Gibt einen `double` zurück, der die Genauigkeit von `altitude` in Metern angibt. Der Wert kann `null` sein, wenn die Implementierung die Daten nicht bereitstellen kann.
- [`GeolocationCoordinates.heading`](/de/docs/Web/API/GeolocationCoordinates/heading) {{ReadOnlyInline}}
  - : Gibt einen `double` zurück, der die Bewegungsrichtung des Geräts angibt. Der Wert wird in Grad angegeben und beschreibt die Abweichung von geografisch Nord im Uhrzeigersinn: `0` Grad entspricht geografisch Nord, `90` Grad Ost und `270` Grad West. Wenn `speed` den Wert `0` hat oder das Gerät keine Informationen zu `heading` bereitstellen kann, ist `heading` gleich `null`.
- [`GeolocationCoordinates.speed`](/de/docs/Web/API/GeolocationCoordinates/speed) {{ReadOnlyInline}}
  - : Gibt einen `double` zurück, der die Geschwindigkeit des Geräts in Metern pro Sekunde angibt. Der Wert kann `null` sein.

## Instanzmethoden

_Die Schnittstelle `GeolocationCoordinates` erbt keine Methoden._

- [`GeolocationCoordinates.toJSON()`](/de/docs/Web/API/GeolocationCoordinates/toJSON)
  - : Gibt ein JSON-serialisierbares einfaches Objekt zurück, das das Objekt `GeolocationCoordinates` darstellt. Die Methode wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Geolocation API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- [`Geolocation`](/de/docs/Web/API/Geolocation)
