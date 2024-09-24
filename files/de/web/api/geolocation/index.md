---
title: Geolokalisierung
slug: Web/API/Geolocation
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

Das **`Geolocation`**-Interface repräsentiert ein Objekt, das in der Lage ist, die Position des Geräts programmgesteuert zu erhalten. Es ermöglicht Web-Inhalten den Zugriff auf den Standort des Geräts. Dies erlaubt es einer Website oder App, basierend auf dem Standort des Nutzers angepasste Ergebnisse anzubieten.

Ein Objekt mit diesem Interface wird über die {{domxref("navigator.geolocation")}}-Eigenschaft, die vom {{domxref("Navigator")}}-Objekt implementiert wird, bezogen.

> [!NOTE]
> Aus Sicherheitsgründen wird der Nutzer benachrichtigt und um Erlaubnis gebeten, wenn eine Webseite versucht, auf Standortinformationen zuzugreifen. Beachten Sie, dass jeder Browser eigene Richtlinien und Methoden zur Anforderung dieser Erlaubnis hat.

## Instanz-Eigenschaften

_Das `Geolocation`-Interface implementiert oder erbt keine Eigenschaft._

## Instanzmethoden

_Das `Geolocation`-Interface erbt keine Methode._

- {{domxref("Geolocation.getCurrentPosition()")}}
  - : Bestimmt die aktuelle Position des Geräts und gibt ein {{domxref("GeolocationPosition")}}-Objekt mit den Daten zurück.
- {{domxref("Geolocation.watchPosition()")}}
  - : Gibt einen `long`-Wert zurück, der die neu festgelegte Rückruffunktion repräsentiert, die jedes Mal aufgerufen wird, wenn sich die Geräteposition ändert.
- {{domxref("Geolocation.clearWatch()")}}
  - : Entfernt den bestimmten Handler, der vorher mithilfe von `watchPosition()` installiert wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Geolokalisierung](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
