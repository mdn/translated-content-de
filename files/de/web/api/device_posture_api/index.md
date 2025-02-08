---
title: Device Posture API
slug: Web/API/Device_Posture_API
l10n:
  sourceCommit: 01e8b5077df6d79e52f2521dfbe734e0923d1fc4
---

{{DefaultAPISidebar("Device Posture API")}}{{seecompattable}}

Die **Device Posture API** ermöglicht es Entwicklern, Benutzeroberflächen zu erstellen, die sich an die Haltung eines faltbaren Geräts anpassen und auf Haltungsänderungen reagieren.

## Konzepte und Verwendung

Faltbare Geräte stellen Entwickler vor einzigartige Designherausforderungen – sie können wie ein herkömmlicher flacher Bildschirm oder wie ein Buch verwendet werden. Darüber hinaus verfügen einige Geräte über einen einzigen faltbaren Bildschirm, während andere zwei Bildschirme mit einem Scharnier in der Mitte haben. Es ist darauf zu achten, dass der physische Übergang keine Inhalte verdeckt oder diese wegen der Nähe zur zentralen Falte schwer lesbar sind.

Die Device Posture API definiert **Posturen**, die den aktuellen physischen Faltzustand eines Geräts anzeigen. Die derzeit verfügbaren Posturen sind:

- `continuous`
  - : Gibt einen flachen Bildschirmzustand an. Faltbare Geräte sind `continuous`, wenn sie flach sind; entweder vollständig geöffnet oder vollständig geschlossen. Geräte, die nicht faltbar sind, gelten als flach und sind daher immer `continuous` — dies schließt nahtlose gebogene Displays sowie Standard-Desktop-, Laptop-, Tablet- und Mobilbildschirme ein.
    ![Eine Auswahl flacher Bildschirme, einschließlich Mobilgeräte, Tablets und einem nahtlos gebogenen Display](continuous-screens.png)
- `folded`
  - : Gibt einen gefalteten Bildschirmzustand an. Faltbare Geräte sind `folded`, wenn sie in einer Buch- oder Laptop-Haltung verwendet werden.
    ![Eine Auswahl gefalteter Bildschirme, einschließlich faltbarer Mobilgeräte und Tablets in Buch- und Laptop-Posturen](folded-screens.png)

Die Device Posture API umfasst Funktionen, mit denen Sie Skripte ausführen und Layouts abhängig von der aktuellen Haltung des Geräts und deren Änderungen variieren können.

## CSS-Funktionen

- {{cssxref("@media/device-posture", "device-posture")}} `@media`-Funktion
  - : Erkennt die aktuelle Haltung des Geräts.

## Schnittstellen

- [`DevicePosture`](/de/docs/Web/API/DevicePosture)
  - : Repräsentiert die Haltung des Geräts und bietet Zugriff auf den aktuellen `type` der Haltung sowie ein `change`-Ereignis, das bei einer Haltungsänderung ausgelöst wird.

### Erweiterungen anderer Schnittstellen

- [`Navigator.devicePosture`](/de/docs/Web/API/Navigator/devicePosture)
  - : Der Einstiegspunkt für die Device Posture API — gibt das `DevicePosture`-Objekt des Browsers zurück.

## Beispiele

Ein vollständiges Beispiel, das alle Funktionen in Aktion zeigt, finden Sie in der [Device Posture API-Demo](https://mdn.github.io/dom-examples/device-posture-api/).

Wenn möglich, sollten Sie diese auf einem faltbaren Gerät betrachten. Aktuelle Entwicklertools für Browser ermöglichen die Emulation faltbarer Geräte, jedoch nicht von teilweise gefalteten Geräten – nur vollständig geöffnet oder geschlossen – sodass diese immer `continuous` zurückgeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Origin trial for Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) auf developer.chrome.com (2024)
