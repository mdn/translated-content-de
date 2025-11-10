---
title: Ursprung des Mehrbildschirms
slug: Web/API/Window_Management_API/Multi-screen_origin
l10n:
  sourceCommit: f5fd4776d1c0cd6e4cffc9649f7c4f44badb7ae2
---

{{DefaultAPISidebar("Window Management API")}}

Die [Window Management API](/de/docs/Web/API/Window_Management_API) führt das Konzept des **Mehrbildschirm-Ursprungs** ein — dies ist die (0,0)-Koordinate des virtuellen Bildschirm-Arrangements des Host-Betriebssystems (OS), um die herum alle verfügbaren Bildschirme und Fenster positioniert sind. Der Mehrbildschirm-Ursprung ist konventionell die obere linke Ecke des primären OS-Bildschirms, obwohl die Spezifikation festlegt, dass es sich um einen beliebigen Punkt innerhalb des virtuellen Bildschirm-Arrangements handeln könnte.

Der primäre Bildschirm kann normalerweise vom Benutzer über die OS-Einstellungen festgelegt werden und enthält im Allgemeinen OS-Benutzeroberflächenfunktionen wie die Taskleiste bzw. das Symbol-Dock.

> [!NOTE]
> Positive Koordinatenwerte befinden sich rechts und nach unten im Bildschirm-Arrangement, während negative Werte links und nach oben liegen.

## Auswirkungen auf bestehende Webplattform-Funktionen

Der Mehrbildschirm-Ursprung ist für die folgenden APIs relevant:

- Die Werte von [`ScreenDetailed.left`](/de/docs/Web/API/ScreenDetailed/left), [`ScreenDetailed.top`](/de/docs/Web/API/ScreenDetailed/top), [`ScreenDetailed.availLeft`](/de/docs/Web/API/ScreenDetailed/availLeft) und [`ScreenDetailed.availTop`](/de/docs/Web/API/ScreenDetailed/availTop) für jeden verfügbaren Bildschirm werden relativ zum Mehrbildschirm-Ursprung angegeben.
- Die Werte von [`Window.screenLeft`](/de/docs/Web/API/Window/screenLeft), [`Window.screenTop`](/de/docs/Web/API/Window/screenTop), [`Window.screenX`](/de/docs/Web/API/Window/screenX), [`Window.screenY`](/de/docs/Web/API/Window/screenY) für jedes Fenster werden relativ zum Mehrbildschirm-Ursprung angegeben.
- Bei Verwendung von [`Window.moveTo()`](/de/docs/Web/API/Window/moveTo) und [`Window.open()`](/de/docs/Web/API/Window/open) werden Fenster relativ zum Mehrbildschirm-Ursprung positioniert.

> [!NOTE]
> Nicht alle Browser unterstützen offiziell den Mehrbildschirm-Ursprung, aber einige haben ihre eigenen nicht standardisierten Implementierungen. Es wird empfohlen, die Browser-Kompatibilitätsinformationen der oben genannten Funktionen für das Verhalten in jedem Browser zu überprüfen.

## Visuelle Beispiele

Nehmen wir an, wir haben einen externen Monitor mit einer Auflösung von 1920 x 1080, der als primärer Monitor eingestellt ist, und ein internes Laptop-Display mit einer Auflösung von 1440 x 900, das als sekundärer Monitor eingestellt ist. Nehmen wir außerdem an, dass die OS-Benutzeroberfläche 25px am oberen Bildschirmrand einnimmt und nur auf dem primären Bildschirm gezeichnet wird.

Wenn der sekundäre Bildschirm direkt rechts vom primären Bildschirm positioniert wäre, mit den oberen Bildschirmkanten in einer Linie:

- Die `left`/`top`-Werte des primären Bildschirms wären (0,0), während die `availLeft`/`availTop`-Werte (0,25) wären — die Dicke der OS-Benutzeroberfläche wird hinzugefügt.
- Die `left`/`top`-Werte des sekundären Bildschirms wären (1920,0), während die `availLeft`/`availTop`-Werte auch (1920,0) wären — die OS-Benutzeroberfläche wird nicht auf dem sekundären Bildschirm gezeichnet.

![Zwei Rechtecke, die den primären Bildschirm mit dem sekundären Bildschirm dargestellt auf der rechten Seite, wie oben beschrieben](/shared-assets/images/diagrams/api/window-management/primary-screen-left.svg)

Wenn jedoch der sekundäre Bildschirm direkt links vom primären Bildschirm positioniert wäre, mit den oberen Bildschirmkanten in einer Linie:

- Die `left`/`top`-Werte des primären Bildschirms wären immer noch (0,0), während die `availLeft`/`availTop`-Werte (0,25) wären.
- Die `left`/`top`-Werte des sekundären Bildschirms wären (-1440,0), während die `availLeft`/`availTop`-Werte ebenfalls (-1440,0) wären.

![Zwei Rechtecke, die den primären Bildschirm mit dem sekundären Bildschirm dargestellt auf der linken Seite, wie oben beschrieben](/shared-assets/images/diagrams/api/window-management/primary-screen-right.svg)
