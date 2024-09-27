---
title: Multi-Screen-Ursprung
slug: Web/API/Window_Management_API/Multi-screen_origin
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{DefaultAPISidebar("Window Management API")}}

Die [Window Management API](/de/docs/Web/API/Window_Management_API) führt das Konzept des **Multi-Screen-Ursprungs** ein – dies ist die (0,0) Koordinate der virtuellen Bildschirm-Anordnung des Host-Betriebssystems (OS), um die alle verfügbaren Bildschirme und Fenster positioniert sind. Der Multi-Screen-Ursprung ist konventionell die obere linke Ecke des primären Bildschirms des OS, obwohl die Spezifikation festlegt, dass es jeder beliebige Punkt innerhalb der virtuellen Bildschirm-Anordnung sein könnte.

Der primäre Bildschirm kann normalerweise vom Benutzer über die Betriebssystemeinstellungen festgelegt werden und enthält im Allgemeinen OS-UI-Funktionen wie die Taskleiste/das Icon-Dock.

> [!NOTE]
> Positive Koordinatenwerte liegen rechts und nach unten in der Bildschirm-Anordnung, während negative Werte links und nach oben liegen.

## Auswirkungen auf bestehende Webplattform-Funktionen

Der Multi-Screen-Ursprung ist für die folgenden APIs relevant:

- Die Werte von [`ScreenDetailed.left`](/de/docs/Web/API/ScreenDetailed/left), [`ScreenDetailed.top`](/de/docs/Web/API/ScreenDetailed/top), [`ScreenDetailed.availLeft`](/de/docs/Web/API/ScreenDetailed/availLeft) und [`ScreenDetailed.availTop`](/de/docs/Web/API/ScreenDetailed/availTop) für jeden verfügbaren Bildschirm werden relativ zum Multi-Screen-Ursprung angegeben.
- Die Werte von [`Window.screenLeft`](/de/docs/Web/API/Window/screenLeft), [`Window.screenTop`](/de/docs/Web/API/Window/screenTop), [`Window.screenX`](/de/docs/Web/API/Window/screenX), [`Window.screenY`](/de/docs/Web/API/Window/screenY) für jedes Fenster werden relativ zum Multi-Screen-Ursprung angegeben.
- Bei der Verwendung von [`Window.moveTo()`](/de/docs/Web/API/Window/moveTo) und [`Window.open()`](/de/docs/Web/API/Window/open) werden Fenster relativ zum Multi-Screen-Ursprung positioniert.

> [!NOTE]
> Nicht alle Browser unterstützen den Multi-Screen-Ursprung offiziell, aber einige haben ihre eigenen nicht standardisierten Implementierungen. Es wird empfohlen, die Browser-Kompatibilitätsinformationen der oben genannten Funktionen zu überprüfen, um das Verhalten in jedem Browser zu verstehen.

## Visuelle Beispiele

Nehmen wir an, wir haben einen externen Monitor mit einer Auflösung von 1920 x 1080 als primären Monitor eingerichtet und ein internes Laptop-Display mit einer Auflösung von 1440 x 900 als sekundären Monitor. Angenommen, die OS-UI nimmt 25px an der Oberseite des Bildschirms ein und wird nur auf dem primären Bildschirm angezeigt.

Wenn der sekundäre Bildschirm direkt rechts vom primären Bildschirm positioniert ist, wobei die oberen Bildschirmränder in einer Linie sind:

- Die `left`/`top` Werte des primären Bildschirms wären (0,0), während seine `availLeft`/`availTop` Werte (0,25) wären – die Dicke der OS-UI wird hinzugefügt.
- Die `left`/`top` Werte des sekundären Bildschirms wären (1920,0), während seine `availLeft`/`availTop` Werte ebenfalls (1920,0) wären – die OS-UI wird nicht auf dem sekundären Bildschirm angezeigt.

![Zwei Rechtecke, die den primären Bildschirm mit dem sekundären Bildschirm rechts darstellen, wie oben beschrieben](primary-screen-left.png)

Wenn jedoch der sekundäre Bildschirm direkt links vom primären Bildschirm mit den oberen Bildschirmrändern in einer Linie positioniert ist:

- Die `left`/`top` Werte des primären Bildschirms wären immer noch (0,0), während seine `availLeft`/`availTop` Werte (0,25) wären.
- Die `left`/`top` Werte des sekundären Bildschirms wären (-1440,0), während seine `availLeft`/`availTop` Werte ebenfalls (-1440,0) wären.

![Zwei Rechtecke, die den primären Bildschirm mit dem sekundären Bildschirm links darstellen, wie oben beschrieben](primary-screen-right.png)
