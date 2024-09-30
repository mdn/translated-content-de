---
title: Device orientation events
slug: Web/API/Device_orientation_events
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{DefaultAPISidebar("Device Orientation Events")}}{{securecontext_header}}

Geräteorientierungsereignisse sind Ereignisse, die es Ihnen ermöglichen, [die physische Ausrichtung eines Geräts zu erkennen](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation#processing_orientation_events), sowie die [Bewegung des Geräts zu erkennen](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation#processing_motion_events).

## Konzepte und Verwendung

Mobile Geräte verfügen häufig über Sensoren wie Gyroskope, Kompasse und Beschleunigungsmesser, die es den auf dem Gerät ausgeführten Anwendungen ermöglichen, die Ausrichtung und Bewegung des Geräts zu erkennen.

Die Geräteorientierungsereignisse ermöglichen es Ihnen, Webanwendungen zu schreiben, die ihr Verhalten basierend auf der Ausrichtung des Benutzergeräts ändern können und die reagieren können, wenn der Benutzer sein Gerät bewegt.

Einige typische Features, für die Sie die Geräteorientierungsereignisse verwenden möchten, sind:

- In webbasierten Spielen, um dem Benutzer zu ermöglichen, die Bewegung von Charakteren oder Objekten im Spiel durch Kippen und Bewegen des Geräts zu steuern.

- In Kartenanwendungen, um eine Karte basierend auf der Position des Geräts neu auszurichten oder um Schritt-für-Schritt-Anweisungen bereitzustellen, die sich mit den Bewegungen des Benutzers aktualisieren.

- Für Gestenerkennung – beispielsweise das Erkennen einer "Schüttel"-Geste und die Verwendung dieser, um eine Aktion wie das Löschen eines Eingabebereichs durchzuführen, wenn der Benutzer das Gerät schüttelt.

> [!NOTE]
> Diese API wird von mobilen Browsern weitgehend unterstützt. Während einige nur für Desktops verfügbare Browser aufgrund von Hardwareunterschieden Einschränkungen haben können, sind diese Einschränkungen selten von Bedeutung, da die API hauptsächlich auf mit Sensoren ausgestatteten Geräten genutzt wird.

## Schnittstellen

- [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent)
  - : Repräsentiert Änderungen in der Beschleunigung eines Geräts sowie die Rotationsrate.
- [`DeviceMotionEventAcceleration`](/de/docs/Web/API/DeviceMotionEventAcceleration)
  - : Stellt die Menge der Beschleunigung dar, die das Gerät entlang aller drei Achsen erfährt.
- [`DeviceMotionEventRotationRate`](/de/docs/Web/API/DeviceMotionEventRotationRate)
  - : Stellt die Rate dar, mit der sich das Gerät um alle drei Achsen dreht.
- [`DeviceOrientationEvent`](/de/docs/Web/API/DeviceOrientationEvent)
  - : Repräsentiert Änderungen in der physischen Ausrichtung eines Geräts.

### Erweiterungen zu anderen Schnittstellen

- [`devicemotion`](/de/docs/Web/API/Window/devicemotion_event) Ereignis
  - : Wird in regelmäßigen Abständen ausgelöst, um die Menge der physischen Beschleunigungskraft anzuzeigen, die das Gerät zu diesem Zeitpunkt erfährt, sowie die Rotationsrate des Geräts.
- [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event) Ereignis
  - : Wird ausgelöst, wenn frische Daten vom Gerät über die aktuelle Ausrichtung des Geräts im Vergleich zum Erdkoordinatenrahmen vorhanden sind.
- [`deviceorientationabsolute`](/de/docs/Web/API/Window/deviceorientationabsolute_event) Ereignis
  - : Wird ausgelöst, wenn sich die absolute Geräteausrichtung ändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Device Orientation & Motion](https://web.dev/articles/device-orientation) bei web.dev
