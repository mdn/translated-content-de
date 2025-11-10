---
title: Lebenszyklus einer WebXR-Anwendung
slug: Web/API/WebXR_Device_API/Lifecycle
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{DefaultAPISidebar("WebXR Device API")}}

In diesem Leitfaden erhalten Sie einen Überblick darüber, was bei der Erstellung und Steuerung einer WebXR-Anwendung zu beachten ist, ohne auf detaillierten Code einzugehen. Dies dient als Vorbereitung für die nächsten Artikel in diesen WebXR-Leitfäden, die das [Starten und Beenden](/de/docs/Web/API/WebXR_Device_API/Startup_and_shutdown) einer WebXR-Sitzung, [Geometrie](/de/docs/Web/API/WebXR_Device_API/Geometry), [Simulation von Kameras](/de/docs/Web/API/WebXR_Device_API/Cameras), [räumliches Tracking](/de/docs/Web/API/WebXR_Device_API/Spatial_tracking) und mehr abdecken.

## Übersicht des Lebenszyklus

Die meisten Anwendungen, die WebXR verwenden, folgen einem ähnlichen Gesamtentwurfsmuster:

1. Überprüfen Sie, ob das Gerät und der Browser des Benutzers in der Lage sind, das von Ihnen geplante XR-Erlebnis zu präsentieren.

   1. Stellen Sie sicher, dass die WebXR-API verfügbar ist; wenn [`navigator.xr`](/de/docs/Web/API/Navigator/xr) undefiniert ist, können Sie davon ausgehen, dass der Browser und/oder das Gerät des Benutzers WebXR nicht unterstützt. Wenn es nicht unterstützt wird, deaktivieren Sie jegliche Benutzeroberfläche, die verwendet wird, um XR-Funktionen zu aktivieren, und verzichten Sie auf jegliche Versuche, den XR-Modus zu betreten.
   2. Rufen Sie [`navigator.xr.isSessionSupported()`](/de/docs/Web/API/XRSystem/isSessionSupported) auf und spezifizieren Sie den WebXR-Erfahrungsmodus, den Sie bereitstellen möchten: `inline`, `immersive-vr` oder `immersive-ar`, um festzustellen, ob die Art der Sitzung, die Sie anbieten möchten, verfügbar ist.
   3. Wenn der gewünschte Sitzungsmodus verfügbar ist, stellen Sie dem Benutzer die geeignete Schnittstelle zur Verfügung, um ihm die Aktivierung zu ermöglichen.

2. Wenn der Benutzer die Aktivierung der WebXR-Funktionalität anfordert, indem er mit der oben aktivierten Benutzeroberfläche interagiert, fordern Sie eine [`XRSession`](/de/docs/Web/API/XRSession) im gewünschten Modus an. Dies erfolgt durch den Aufruf von [`navigator.xr.requestSession()`](/de/docs/Web/API/XRSystem/requestSession), wobei Sie erneut die Zeichenfolge angeben, die den Modus kennzeichnet, den Sie aktivieren möchten: `inline`, `immersive-vr` oder `immersive-ar`.
3. Wenn das von `requestSession()` zurückgegebene Versprechen aufgelöst wird, verwenden Sie die neue [`XRSession`](/de/docs/Web/API/XRSession), um die WebXR-Sitzung für die Dauer der WebXR-Erfahrung zu verwalten. Dies beinhaltet die Verwaltung von Eingaben, Animationen und Rendering.

   1. Rufen Sie die Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) von [`XRSession`](/de/docs/Web/API/XRSession) auf, um das Rendern des ersten Frames für das XR-Gerät zu planen.
   2. Wenn Ihre Szene komplex ist, sollten Sie in Erwägung ziehen, einen [`Worker`](/de/docs/Web/API/Worker) zu erstellen — oder einen zu verwenden, den Sie zuvor für diesen Zweck erstellt haben —, um die Berechnungen durchzuführen, die für jeden zu rendernden Frame erforderlich sind. Dies verringert die Wahrscheinlichkeit, dass der Rendering-Prozess die App merklich zum Stocken bringt.
   3. Jeder `requestAnimationFrame()`-Callback sollte die bereitgestellten Informationen über die im 3D-Raum positionierten Objekte verwenden, um den Frame mit WebGL zu rendern.
   4. Jedes Mal, wenn der Callback aufgerufen wird, sollte er erneut [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) aufrufen, um den Browser darüber zu informieren, dass der Callback erneut ausgeführt werden muss, wenn es Zeit ist, den nächsten Frame zu rendern.

4. Wenn die Zeit gekommen ist (z. B. wenn der Benutzer Ihre App verlässt oder Ihre Seite verlässt), beenden Sie die XR-Sitzung; andernfalls setzen Sie die Schleife fort, bis der Benutzer sich entscheidet, den XR-Modus zu beenden.
   1. Um die XR-Sitzung selbst zu beenden, rufen Sie [`XRSession.end()`](/de/docs/Web/API/XRSession/end) auf.
   2. Integrieren Sie einen Handler für das [`XRSession`](/de/docs/Web/API/XRSession) Ereignis [`end`](/de/docs/Web/API/XRSession/end_event), um darüber informiert zu werden, wann die Sitzung endet, unabhängig davon, ob Ihr Code, der Benutzer oder der Browser die Beendigung der Sitzung initiiert hat.
