---
title: Geolocation
slug: Web/API/Geolocation
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

Das **`Geolocation`**-Interface repräsentiert ein Objekt, das in der Lage ist, die Position des Geräts programmgesteuert zu ermitteln. Es gibt Webinhalten Zugriff auf den Standort des Geräts. Dies ermöglicht es einer Website oder App, angepasste Ergebnisse basierend auf dem Standort des Benutzers anzubieten.

Ein Objekt mit diesem Interface wird durch die [`navigator.geolocation`](/de/docs/Web/API/Navigator/geolocation) Eigenschaft erlangt, die vom [`Navigator`](/de/docs/Web/API/Navigator) Objekt implementiert wird.

> [!NOTE]
> Aus Sicherheitsgründen wird der Benutzer benachrichtigt und um Erlaubnis gebeten, wenn eine Webseite versucht, auf Standortinformationen zuzugreifen. Beachten Sie, dass jeder Browser seine eigenen Richtlinien und Methoden zur Anforderung dieser Erlaubnis hat.

## Instanz-Eigenschaften

_Das `Geolocation`-Interface implementiert oder erbt keine Eigenschaft._

## Instanz-Methoden

_Das `Geolocation`-Interface erbt keine Methode._

- [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition)
  - : Bestimmt den aktuellen Standort des Geräts und gibt ein [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition) Objekt mit den Daten zurück.
- [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition)
  - : Gibt einen `long` Wert zurück, der die neu eingerichtete Callback-Funktion darstellt, die aufgerufen wird, wenn sich der Gerätestandort ändert.
- [`Geolocation.clearWatch()`](/de/docs/Web/API/Geolocation/clearWatch)
  - : Entfernt den bestimmten zuvor installierten Handler mit `watchPosition()`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Geolokalisierung](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
