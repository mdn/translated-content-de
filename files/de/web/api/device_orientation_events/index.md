---
title: Device orientation events
slug: Web/API/Device_orientation_events
l10n:
  sourceCommit: bcfc05aac40b47aecad69d44c54e33bf5f9b4e41
---

{{DefaultAPISidebar("Device Orientation Events")}}{{securecontext_header}}

Geräteorientierungsereignisse sind Ereignisse, die es ermöglichen, [die physikalische Ausrichtung eines Geräts zu erkennen](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation#processing_orientation_events) sowie die [Bewegung des Geräts zu detektieren](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation#processing_motion_events).

## Konzepte und Verwendung

Mobile Geräte verfügen häufig über Sensoren wie Gyroskope, Kompasse und Beschleunigungsmesser, die es Anwendungen auf dem Gerät ermöglichen, die Ausrichtung und Bewegung des Geräts zu erkennen.

Die Geräteorientierungsereignisse ermöglichen es Ihnen, Webanwendungen zu schreiben, die ihr Verhalten basierend auf der Ausrichtung des Benutzergeräts ändern und reagieren können, wenn der Benutzer das Gerät bewegt.

Einige typische Funktionen, für die Sie die Geräteorientierungsereignisse nutzen möchten, umfassen:

- in webbasierten Spielen, um dem Benutzer zu ermöglichen, die Bewegung von Charakteren oder Objekten im Spiel durch Kippen und Bewegen des Geräts zu steuern

- in Kartierungsanwendungen, um eine Karte basierend auf der Position des Geräts neu zu orientieren oder Schritt-für-Schritt-Anweisungen bereitzustellen, die sich mit den Bewegungen des Benutzers aktualisieren

- für Gestenerkennung — beispielsweise das Erkennen einer "Shake"-Geste und deren Verwendung, um eine Aktion wie das Löschen eines Eingabebereichs auszuführen, wenn der Benutzer das Gerät schüttelt

Einige Benutzeragenten erfordern eine ausdrückliche Erlaubnis, bevor sie den Zugriff auf Sensordaten gestatten. In diesen Umgebungen können [`DeviceMotionEvent.requestPermission()`](/de/docs/Web/API/DeviceMotionEvent/requestPermission_static) und [`DeviceOrientationEvent.requestPermission()`](/de/docs/Web/API/DeviceOrientationEvent/requestPermission_static) verwendet werden, um diese Erlaubnis über eine {{Glossary("transient_activation", "flüchtige Benutzeraktivierung")}} wie einen Tastendruck anzufordern. Weitere Details finden Sie unter [Erlaubnis anfordern](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation#requesting_permission).

> [!NOTE]
> Diese API wird in mobilen Browsern weitgehend unterstützt. Während einige nur für Desktops konzipierte Browser aufgrund von Hardwareunterschieden Einschränkungen aufweisen können, sind diese Einschränkungen selten bedeutsam, da die API hauptsächlich auf sensorausgestatteten Geräten verwendet wird.

## Schnittstellen

- [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent)
  - : Repräsentiert Änderungen in der Beschleunigung eines Geräts sowie die Rotationsrate.
- [`DeviceMotionEventAcceleration`](/de/docs/Web/API/DeviceMotionEventAcceleration)
  - : Repräsentiert die Menge an Beschleunigung, die das Gerät entlang aller drei Achsen erfährt.
- [`DeviceMotionEventRotationRate`](/de/docs/Web/API/DeviceMotionEventRotationRate)
  - : Repräsentiert die Geschwindigkeit, mit der das Gerät um alle drei Achsen rotiert.
- [`DeviceOrientationEvent`](/de/docs/Web/API/DeviceOrientationEvent)
  - : Repräsentiert Änderungen in der physikalischen Ausrichtung eines Geräts.

### Erweiterungen zu anderen Schnittstellen

- [`devicemotion`](/de/docs/Web/API/Window/devicemotion_event) Ereignis
  - : Wird in regelmäßigen Abständen ausgelöst, um die Menge an physikalischer Beschleunigungskraft anzuzeigen, die das Gerät zu diesem Zeitpunkt erfährt, und die Rotationsgeschwindigkeit des Geräts.
- [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event) Ereignis
  - : Wird ausgelöst, wenn frische Daten vom Gerät über die aktuelle Ausrichtung des Geräts im Vergleich zum Koordinatensystem der Erde verfügbar sind.
- [`deviceorientationabsolute`](/de/docs/Web/API/Window/deviceorientationabsolute_event) Ereignis
  - : Wird ausgelöst, wenn sich die absolute Geräteausrichtung ändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Device Orientation & Motion](https://web.dev/articles/device-orientation) bei web.dev
