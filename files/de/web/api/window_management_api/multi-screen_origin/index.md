---
title: Multi-Screen-Ursprung
slug: Web/API/Window_Management_API/Multi-screen_origin
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{DefaultAPISidebar("Window Management API")}}

Die [Window Management API](/de/docs/Web/API/Window_Management_API) führt das Konzept des **Multi-Screen-Ursprungs** ein — dies ist die (0,0)-Koordinate des virtuellen Bildschirmaufbaus des Host-Betriebssystems, um den alle verfügbaren Bildschirme und Fenster positioniert sind. Der Multi-Screen-Ursprung ist konventionell die obere linke Ecke des primären Bildschirms des Betriebssystems, obwohl die Spezifikation festlegt, dass es sich um einen beliebigen Punkt innerhalb des virtuellen Bildschirmaufbaus handeln könnte.

Der primäre Bildschirm kann normalerweise vom Benutzer über die Betriebssystemeinstellungen festgelegt werden und enthält in der Regel Betriebssystem-Benutzeroberflächelemente wie die Taskleiste/das Icon-Dock.

> [!NOTE]
> Positive Koordinatenwerte sind in der Bildschirm-Anordnung nach rechts und unten, während negative nach links und oben sind.

## Auswirkungen auf bestehende Webplattformfunktionen

Der Multi-Screen-Ursprung ist für die folgenden APIs relevant:

- Die Werte von {{domxref("ScreenDetailed.left")}}, {{domxref("ScreenDetailed.top")}}, {{domxref("ScreenDetailed.availLeft")}}, und {{domxref("ScreenDetailed.availTop")}} für jeden verfügbaren Bildschirm werden relativ zum Multi-Screen-Ursprung angegeben.
- Die Werte von {{domxref("Window.screenLeft")}}, {{domxref("Window.screenTop")}}, {{domxref("Window.screenX")}}, {{domxref("Window.screenY")}} für jedes Fenster werden relativ zum Multi-Screen-Ursprung angegeben.
- Bei der Nutzung von {{domxref("Window.moveTo()")}} und {{domxref("Window.open()")}} werden Fenster relativ zum Multi-Screen-Ursprung positioniert.

> [!NOTE]
> Nicht alle Browser unterstützen den Multi-Screen-Ursprung offiziell, aber einige haben ihre eigenen nicht-standardisierten Implementierungen. Es wird empfohlen, die Browserkompatibilitätsinformationen der oben genannten Funktionen für das Verhalten in jedem Browser zu prüfen.

## Visuelle Beispiele

Angenommen, wir haben einen externen Monitor mit einer Auflösung von 1920 x 1080 als primären Monitor eingestellt und ein internes Laptop-Display mit einer Auflösung von 1440 x 900 als sekundären Monitor festgelegt. Nehmen wir auch an, dass die Betriebssystem-Benutzeroberfläche 25px oben auf dem Bildschirm einnimmt und nur auf dem primären Bildschirm gezeichnet wird.

Wenn der sekundäre Bildschirm direkt rechts vom primären Bildschirm positioniert wäre, die oberen Bildschirmkanten auf einer Linie:

- Die `left`/`top`-Werte des primären Bildschirms wären (0,0), während seine `availLeft`/`availTop`-Werte (0,25) wären — die Dicke der Betriebssystem-Benutzeroberfläche wird hinzugefügt.
- Die `left`/`top`-Werte des sekundären Bildschirms wären (1920,0), während seine `availLeft`/`availTop`-Werte ebenfalls (1920,0) wären — die Betriebssystem-Benutzeroberfläche wird nicht auf dem sekundären Bildschirm gezeichnet.

![Zwei Rechtecke, die den primären Bildschirm mit dem sekundären Bildschirm darstellen, der rechts positioniert ist, wie oben beschrieben](primary-screen-left.png)

Wenn der sekundäre Bildschirm jedoch direkt links vom primären Bildschirm positioniert wäre, die oberen Bildschirmkanten auf einer Linie:

- Die `left`/`top`-Werte des primären Bildschirms wären immer noch (0,0), während seine `availLeft`/`availTop`-Werte (0,25) wären.
- Die `left`/`top`-Werte des sekundären Bildschirms wären (-1440,0), während seine `availLeft`/`availTop`-Werte ebenfalls (-1440,0) wären.

![Zwei Rechtecke, die den primären Bildschirm mit dem sekundären Bildschirm darstellen, der links positioniert ist, wie oben beschrieben](primary-screen-right.png)
