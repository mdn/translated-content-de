---
title: Device Posture API
slug: Web/API/Device_Posture_API
l10n:
  sourceCommit: a3d19af7e3eeb1c40748c80cd6b5143cfa201c54
---

{{DefaultAPISidebar("Device Posture API")}}{{seecompattable}}

Die **Device Posture API** ermöglicht es Entwicklern, Benutzeroberflächen zu erstellen, die sich an die Haltung eines faltbaren Geräts anpassen und auf Änderungen der Haltung reagieren.

## Konzepte und Verwendung

Faltbare Geräte stellen Entwickler vor besondere Designherausforderungen — sie können wie ein gewöhnlicher flacher Bildschirm oder wie ein Buch benutzt werden. Einige verfügen über einen einzelnen gefalteten Bildschirm, andere haben zwei Bildschirme mit einem Scharnier in der Mitte. Es ist darauf zu achten, dass Inhalte nicht durch das physische Scharnier verdeckt oder aufgrund der Nähe zur zentralen Falte schwer lesbar gemacht werden.

Die Device Posture API definiert **Haltungen**, die den aktuellen physischen Klappzustand eines Geräts angeben. Die derzeit verfügbaren Haltungen sind:

- `continuous`
  - : Zeigt einen flachen Bildschirmzustand an. Faltbare Geräte sind `continuous`, wenn sie flach sind; entweder vollständig geöffnet oder vollständig geschlossen. Nicht faltbare Geräte werden als flach betrachtet und sind daher immer `continuous` — das schließt nahtlose gekrümmte Displays sowie Standard-Desktop-, Laptop-, Tablet- und Mobilbildschirme ein.
    ![Eine Auswahl flacher Bildschirme, darunter Mobiltelefone und Tablets sowie ein nahtloses gekrümmtes Display](continuous-screens.png)
- `folded`
  - : Zeigt einen gefalteten Bildschirmzustand an. Faltbare Geräte sind `folded`, wenn sie in Buch- oder Laptop-Haltung verwendet werden.
    ![Eine Auswahl gefalteter Bildschirme, darunter faltbare Mobiltelefone und Tablets in Buch- und Laptop-Haltungen](folded-screens.png)

Die Device Posture API enthält Funktionen, die es ermöglichen, Skripte auszuführen und Layouts abhängig von der aktuellen Gerätehaltung und -änderungen zu variieren.

## CSS-Funktionen

- {{cssxref("@media/device-posture", "device-posture")}} `@media`-Funktion
  - : Erkennt die aktuelle Haltung des Geräts.

## Schnittstellen

- [`DevicePosture`](/de/docs/Web/API/DevicePosture)
  - : Repräsentiert die Haltung des Geräts und bietet Zugriff auf den aktuellen Haltungstyp `type` sowie ein `change`-Ereignis, das bei Änderung der Haltung ausgelöst wird.

### Erweiterungen für andere Schnittstellen

- [`Navigator.devicePosture`](/de/docs/Web/API/Navigator/devicePosture)
  - : Der Einstiegspunkt für die Device Posture API — gibt das `DevicePosture`-Objekt des Browsers zurück.

## Beispiele

Ein vollständiges Beispiel, das alle Funktionen in Aktion zeigt, finden Sie in der [Device Posture API-Demo](https://mdn.github.io/dom-examples/device-posture-api/).

Wenn möglich, sollte diese Demo auf einem faltbaren Gerät angezeigt werden. Die aktuellen Entwicklerwerkzeuge der Browser ermöglichen die Emulation faltbarer Geräte, aber sie schließen die Emulation von teilweise gefalteten Geräten aus — sie zeigen nur vollständig offene oder geschlossene Zustände an und geben daher immer `continuous` zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Herkunfts-Test für Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) auf developer.chrome.com (2024)
