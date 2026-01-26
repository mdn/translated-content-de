---
title: Device Posture API
slug: Web/API/Device_Posture_API
l10n:
  sourceCommit: 142dfee579b161c487fd438599a7d8506e2cdbed
---

{{DefaultAPISidebar("Device Posture API")}}{{seecompattable}}

Die **Device Posture API** ermöglicht es Entwicklern, Benutzeroberflächen zu erstellen, die sich an die Haltung eines faltbaren Geräts anpassen und auf Haltungsänderungen reagieren.

## Konzepte und Verwendung

Faltbare Geräte stellen Entwickler vor einzigartige Designherausforderungen – sie können wie ein normaler Flachbildschirm oder wie ein Buch verwendet werden. Darüber hinaus verfügen einige über einen einzigen gefalteten Bildschirm, während andere zwei Bildschirme mit einem Scharnier in der Mitte haben. Es muss darauf geachtet werden, dass der Inhalt nicht durch das physische Scharnier verdeckt wird oder aufgrund der Nähe zur zentralen Falte schwer lesbar ist.

Die Device Posture API definiert **Haltungen**, die den aktuellen physischen Faltzustand eines Geräts anzeigen. Die derzeit verfügbaren Haltungen sind:

- `continuous`
  - : Zeigt einen Flachbildschirmzustand an. Faltbare Geräte sind `continuous`, während sie flach sind; entweder vollständig geöffnet oder vollständig geschlossen. Nicht faltbare Geräte werden als flach betrachtet und sind daher immer `continuous` – dies schließt nahtlose gebogene Displays sowie Standard-Desktop-, Laptop-, Tablet- und Mobilbildschirme ein.
    ![Eine Auswahl an Flachbildschirmen, darunter Mobiltelefone und Tablets, sowie ein nahtlos gebogenes Display](continuous-screens.png)
- `folded`
  - : Zeigt einen gefalteten Bildschirmzustand an. Faltbare Geräte sind `folded`, während sie in einer Buch- oder Laptop-Haltung verwendet werden.
    ![Eine Auswahl an gefalteten Bildschirmen, darunter faltbare Mobiltelefone und Tablets in Buch- und Laptop-Haltungen](folded-screens.png)

Die Device Posture API enthält Funktionen, mit denen Sie Skripte ausführen und Layouts je nach aktueller Gerätehaltung und Haltungsänderungen variieren können.

## CSS-Funktionen

- {{cssxref("@media/device-posture", "device-posture")}} `@media`-Funktion
  - : Erkennt die aktuelle Haltung des Geräts.

## Schnittstellen

- [`DevicePosture`](/de/docs/Web/API/DevicePosture)
  - : Repräsentiert die Haltung des Geräts und bietet Zugriff auf den aktuellen Haltungstyp und ein `change`-Ereignis, das bei einer Haltungsänderung ausgelöst wird.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.devicePosture`](/de/docs/Web/API/Navigator/devicePosture)
  - : Der Einstiegspunkt für die Device Posture API – gibt das `DevicePosture`-Objekt des Browsers zurück.

## Beispiele

Ein vollständiges Beispiel mit allen Funktionen finden Sie im [Demo zur Device Posture API](https://mdn.github.io/dom-examples/device-posture-api/).

Wenn möglich, sollten Sie dies auf einem faltbaren Gerät ansehen. Aktuelle Entwicklertools des Browsers ermöglichen die Emulation faltbarer Geräte, beinhalten jedoch keine Emulation teilweise gefalteter Geräte – nur vollständig geöffnete oder geschlossene – daher wird immer `continuous` zurückgegeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API)
- [Origin trial für Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) auf developer.chrome.com (2024)
