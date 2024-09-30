---
title: Geolocation
slug: Web/API/Geolocation
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

Die **`Geolocation`** Schnittstelle repräsentiert ein Objekt, das in der Lage ist, die Position des Geräts programmgesteuert zu ermitteln. Sie gibt Web-Inhalten Zugriff auf den Standort des Geräts. Dies ermöglicht es einer Website oder App, angepasste Ergebnisse basierend auf dem Standort des Benutzers anzubieten.

Ein Objekt mit dieser Schnittstelle wird über die [`navigator.geolocation`](/de/docs/Web/API/Navigator/geolocation) Eigenschaft des [`Navigator`](/de/docs/Web/API/Navigator) Objekts abgerufen.

> [!NOTE]
> Aus Sicherheitsgründen wird der Benutzer benachrichtigt und um Erlaubnis gebeten, wenn eine Webseite versucht, auf Standortinformationen zuzugreifen. Beachten Sie, dass jeder Browser seine eigenen Richtlinien und Methoden zur Anforderung dieser Erlaubnis hat.

## Instanz-Eigenschaften

_Die `Geolocation` Schnittstelle implementiert oder erbt keine Eigenschaften._

## Instanz-Methoden

_Die `Geolocation` Schnittstelle erbt keine Methoden._

- [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition)
  - : Bestimmt den aktuellen Standort des Geräts und gibt ein [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition) Objekt mit den Daten zurück.
- [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition)
  - : Gibt einen `long` Wert zurück, der die neu eingerichtete Callback-Funktion darstellt, die jedes Mal aufgerufen wird, wenn sich der Gerätestandort ändert.
- [`Geolocation.clearWatch()`](/de/docs/Web/API/Geolocation/clearWatch)
  - : Entfernt den zuvor mit `watchPosition()` installierten spezifischen Handler.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Geolocation](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
