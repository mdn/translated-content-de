---
title: Geräteorientierungsereignisse
slug: Web/API/Device_orientation_events
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{DefaultAPISidebar("Device Orientation Events")}}{{securecontext_header}}

Geräteorientierungsereignisse sind Ereignisse, die es Ihnen ermöglichen, [die physische Ausrichtung eines Geräts zu erkennen](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation#processing_orientation_events), sowie die Bewegung des Geräts [zu erkennen](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation#processing_motion_events).

## Konzepte und Nutzung

Mobile Geräte verfügen häufig über Sensoren wie Gyroskope, Kompasse und Beschleunigungsmesser, die es Anwendungen auf dem Gerät ermöglichen, die Ausrichtung und Bewegung des Geräts zu erkennen.

Die Geräteorientierungsereignisse ermöglichen es Ihnen, Webanwendungen zu schreiben, die ihr Verhalten basierend auf der Ausrichtung des Geräts des Benutzers ändern können und die reagieren können, wenn der Benutzer sein Gerät bewegt.

Einige typische Funktionen, für die Sie die Geräteorientierungsereignisse verwenden möchten, umfassen:

- in webbasierten Spielen, um es dem Benutzer zu ermöglichen, die Bewegung von Charakteren oder Objekten im Spiel durch Neigen und Bewegen des Geräts zu steuern

- in Kartenanwendungen, um eine Karte basierend auf der Position des Geräts neu auszurichten oder um Schritt-für-Schritt-Navigation bereitzustellen, die sich mit den Bewegungen des Benutzers aktualisiert

- für Gestenerkennung – zum Beispiel, um eine „Schüttel“-Geste zu erkennen und sie zu nutzen, um eine Aktion wie das Löschen eines Eingabebereichs auszuführen, wenn der Benutzer das Gerät schüttelt

> [!NOTE]
> Diese API wird in mobilen Browsern weitgehend unterstützt. Während einige Browser, die ausschließlich für Desktops sind, aufgrund von Hardwareunterschieden Einschränkungen haben können, sind diese Einschränkungen selten signifikant, da die API hauptsächlich auf sensorbestückten Geräten verwendet wird.

## Schnittstellen

- {{domxref("DeviceMotionEvent")}}
  - : Stellt Änderungen in der Beschleunigung eines Geräts sowie die Rotationsrate dar.
- {{domxref("DeviceMotionEventAcceleration")}}
  - : Stellt die Menge der Beschleunigung dar, die das Gerät entlang aller drei Achsen erfährt.
- {{domxref("DeviceMotionEventRotationRate")}}
  - : Stellt die Geschwindigkeit dar, mit der sich das Gerät um alle drei Achsen dreht.
- {{domxref("DeviceOrientationEvent")}}
  - : Stellt Änderungen in der physischen Ausrichtung eines Geräts dar.

### Erweiterungen zu anderen Schnittstellen

- {{domxref("Window.devicemotion_event", "devicemotion")}} Ereignis
  - : Wird in regelmäßigen Abständen ausgelöst, um die physische Kraft der Beschleunigung anzuzeigen, die das Gerät zu diesem Zeitpunkt erhält, sowie die Rotationsgeschwindigkeit des Geräts.
- {{domxref("Window.deviceorientation_event", "deviceorientation")}} Ereignis
  - : Wird ausgelöst, wenn frische Daten vom Gerät über die aktuelle Ausrichtung des Geräts im Vergleich zum Erdkoordinatenrahmen verfügbar sind.
- {{domxref("Window.deviceorientationabsolute_event", "deviceorientationabsolute")}} Ereignis
  - : Wird ausgelöst, wenn sich die absolute Geräteorientierung ändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Device Orientation & Motion](https://web.dev/articles/device-orientation) bei web.dev
