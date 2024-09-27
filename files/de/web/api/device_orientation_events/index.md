---
title: Device orientation events
slug: Web/API/Device_orientation_events
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{DefaultAPISidebar("Device Orientation Events")}}{{securecontext_header}}

Geräteorientierungsereignisse sind Ereignisse, die es Ihnen ermöglichen, [die physische Ausrichtung eines Geräts zu erkennen](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation#processing_orientation_events). Sie ermöglichen auch die [Erkennung der Bewegung des Geräts](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation#processing_motion_events).

## Konzepte und Nutzung

Mobile Geräte verfügen häufig über Sensoren wie Gyroskope, Kompasse und Beschleunigungsmesser, die Anwendungen auf dem Gerät ermöglichen, die Ausrichtung und Bewegung des Geräts zu erkennen.

Die Geräteorientierungsereignisse ermöglichen es Ihnen, Webanwendungen zu schreiben, die ihr Verhalten basierend auf der Ausrichtung des Geräts des Benutzers ändern können und die reagieren, wenn der Benutzer das Gerät bewegt.

Einige typische Funktionen, für die Sie die Geräteorientierungsereignisse verwenden könnten, umfassen:

- in webbasierten Spielen, um dem Benutzer zu ermöglichen, die Bewegung von Charakteren oder Objekten im Spiel durch Kippen und Bewegen des Geräts zu steuern

- in Kartenanwendungen, um eine Karte basierend auf der Position des Geräts neu auszurichten oder um Schritt-für-Schritt-Anweisungen bereitzustellen, die sich mit den Bewegungen des Benutzers aktualisieren

- für Gestenerkennung — zum Beispiel, um eine "Schüttel"-Geste zu erkennen und diese zu verwenden, um eine Aktion wie das Löschen eines Eingabebereichs auszuführen, wenn der Benutzer das Gerät schüttelt

> [!NOTE]
> Diese API wird von mobilen Browsern weitgehend unterstützt. Während einige ausschließlich auf Desktops genutzte Browser aufgrund von Hardwareunterschieden Einschränkungen aufweisen können, sind diese Einschränkungen selten signifikant, da die API hauptsächlich auf Sensor-equipped Geräten verwendet wird.

## Schnittstellen

- [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent)
  - : Stellt Änderungen in der Beschleunigung eines Geräts sowie die Rotationsgeschwindigkeit dar.
- [`DeviceMotionEventAcceleration`](/de/docs/Web/API/DeviceMotionEventAcceleration)
  - : Gibt die Menge der Beschleunigung an, die das Gerät entlang aller drei Achsen erfährt.
- [`DeviceMotionEventRotationRate`](/de/docs/Web/API/DeviceMotionEventRotationRate)
  - : Stellt die Rate dar, mit der sich das Gerät um alle drei Achsen dreht.
- [`DeviceOrientationEvent`](/de/docs/Web/API/DeviceOrientationEvent)
  - : Stellt Änderungen in der physischen Ausrichtung eines Geräts dar.

### Erweiterungen zu anderen Schnittstellen

- [`devicemotion`](/de/docs/Web/API/Window/devicemotion_event) Ereignis
  - : Wird in regelmäßigen Abständen ausgelöst, um die Menge der physikalischen Beschleunigungsstärke anzugeben, die das Gerät zu diesem Zeitpunkt erhält, und die Rotationsrate des Geräts.
- [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event) Ereignis
  - : Wird ausgelöst, wenn neue Daten über die aktuelle Ausrichtung des Geräts im Vergleich zum Erdkoordinatensystem verfügbar sind.
- [`deviceorientationabsolute`](/de/docs/Web/API/Window/deviceorientationabsolute_event) Ereignis
  - : Wird ausgelöst, wenn sich die absolute Geräteausrichtung ändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Device Orientation & Motion](https://web.dev/articles/device-orientation) bei web.dev
