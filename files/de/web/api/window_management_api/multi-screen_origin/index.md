---
title: Multi-screen origin
slug: Web/API/Window_Management_API/Multi-screen_origin
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{DefaultAPISidebar("Window Management API")}}

Die [Window Management API](/de/docs/Web/API/Window_Management_API) führt das Konzept des **Multi-Screen-Ursprungs** ein — dies ist die (0,0)-Koordinate des virtuellen Bildschirm-Arrangements des Host-Betriebssystems (OS), um welche alle verfügbaren Bildschirme und Fenster positioniert sind. Der Multi-Screen-Ursprung ist konventionell die obere linke Ecke des primären OS-Bildschirms, obwohl die Spezifikation festlegt, dass es sich um einen beliebigen Punkt innerhalb des virtuellen Bildschirm-Arrangements handeln könnte.

Der primäre Bildschirm kann vom Benutzer in der Regel über die OS-Einstellungen festgelegt werden und enthält im Allgemeinen OS-Benutzeroberflächenmerkmale wie die Taskleiste/das Icon-Dock.

> [!NOTE]
> Positive Koordinatenwerte befinden sich rechts und nach unten im Bildschirm-Arrangement, während negative Werte nach links und oben liegen.

## Auswirkungen auf bestehende Webplattform-Funktionen

Der Multi-Screen-Ursprung ist für die folgenden APIs relevant:

- Die Werte von [`ScreenDetailed.left`](/de/docs/Web/API/ScreenDetailed/left), [`ScreenDetailed.top`](/de/docs/Web/API/ScreenDetailed/top), [`ScreenDetailed.availLeft`](/de/docs/Web/API/ScreenDetailed/availLeft) und [`ScreenDetailed.availTop`](/de/docs/Web/API/ScreenDetailed/availTop) für jeden verfügbaren Bildschirm werden relativ zum Multi-Screen-Ursprung gemeldet.
- Die Werte von [`Window.screenLeft`](/de/docs/Web/API/Window/screenLeft), [`Window.screenTop`](/de/docs/Web/API/Window/screenTop), [`Window.screenX`](/de/docs/Web/API/Window/screenX), [`Window.screenY`](/de/docs/Web/API/Window/screenY) für jedes Fenster werden relativ zum Multi-Screen-Ursprung gemeldet.
- Beim Verwenden von [`Window.moveTo()`](/de/docs/Web/API/Window/moveTo) und [`Window.open()`](/de/docs/Web/API/Window/open) werden Fenster relativ zum Multi-Screen-Ursprung positioniert.

> [!NOTE]
> Nicht alle Browser unterstützen offiziell den Multi-Screen-Ursprung, aber einige haben ihre eigenen nicht standardmäßigen Implementierungen. Es wird empfohlen, die Browser-Kompatibilitätsinformationen der oben genannten Funktionen zu überprüfen, um das Verhalten in jedem Browser zu ermitteln.

## Visuelle Beispiele

Angenommen, wir haben einen externen Monitor mit einer Auflösung von 1920 x 1080 als primären Monitor eingestellt und ein internes Laptop-Display mit einer Auflösung von 1440 x 900 als sekundären Monitor. Angenommen, die OS-Benutzeroberfläche nimmt oben am Bildschirm 25px ein und ist nur auf dem primären Bildschirm gezeichnet.

Wenn der sekundäre Bildschirm direkt rechts neben dem primären Bildschirm positioniert wurde, wobei die oberen Bildschirmkanten übereinstimmen:

- Die `left`/`top`-Werte des primären Bildschirms wären (0,0), während seine `availLeft`/`availTop`-Werte (0,25) wären — die Dicke der OS-Benutzeroberfläche wird hinzugefügt.
- Die `left`/`top`-Werte des sekundären Bildschirms wären (1920,0), während seine `availLeft`/`availTop`-Werte ebenfalls (1920,0) wären — die OS-Benutzeroberfläche wird nicht auf dem sekundären Bildschirm gezeichnet.

![Zwei Rechtecke, die den primären Bildschirm mit dem sekundären Bildschirm darstellen, der rechts positioniert ist, wie oben beschrieben](primary-screen-left.png)

Wenn jedoch der sekundäre Bildschirm direkt links vom primären Bildschirm positioniert wurde, wobei die oberen Bildschirmkanten übereinstimmten:

- Die `left`/`top`-Werte des primären Bildschirms wären weiterhin (0,0), während seine `availLeft`/`availTop`-Werte (0,25) wären.
- Die `left`/`top`-Werte des sekundären Bildschirms wären (-1440,0), während seine `availLeft`/`availTop`-Werte ebenfalls (-1440,0) wären.

![Zwei Rechtecke, die den primären Bildschirm mit dem sekundären Bildschirm darstellen, der links positioniert ist, wie oben beschrieben](primary-screen-right.png)
