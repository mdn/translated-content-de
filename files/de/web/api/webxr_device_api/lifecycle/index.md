---
title: WebXR Anwendungslebenszyklus
slug: Web/API/WebXR_Device_API/Lifecycle
l10n:
  sourceCommit: 4f0f7386262363103a3e9cf482bb348d8570b331
---

{{DefaultAPISidebar("WebXR Device API")}}

In diesem Leitfaden erhalten wir einen Überblick darüber, was bei der Erstellung und Steuerung einer WebXR-Anwendung beteiligt ist, ohne dabei auf die Codeebene im Detail einzugehen. Dies dient als Vorbereitung für die nächsten Artikel in diesen WebXR-Leitfäden, die das [Starten und Beenden](/de/docs/Web/API/WebXR_Device_API/Startup_and_shutdown) einer WebXR-Sitzung, [Geometrie](/de/docs/Web/API/WebXR_Device_API/Geometry), [Kamerasimulationen](/de/docs/Web/API/WebXR_Device_API/Cameras), [räumliches Tracking](/de/docs/Web/API/WebXR_Device_API/Spatial_tracking) und mehr abdecken.

## Überblick über den Lebenszyklus

Die meisten Anwendungen, die WebXR verwenden, folgen einem ähnlichen Gesamtentwurfsmuster:

1. Überprüfen Sie, ob das Gerät und der Browser des Benutzers in der Lage sind, die von Ihnen bereitgestellte XR-Erfahrung darzustellen.

   1. Stellen Sie sicher, dass die WebXR API verfügbar ist; wenn [`navigator.xr`](/de/docs/Web/API/Navigator/xr) undefiniert ist, können Sie davon ausgehen, dass der Browser und/oder das Gerät des Benutzers WebXR nicht unterstützt. Wenn es nicht unterstützt wird, deaktivieren Sie jede Benutzeroberfläche, die zum Aktivieren von XR-Funktionen verwendet wird, und brechen Sie alle Versuche ab, den XR-Modus zu betreten.
   2. Rufen Sie [`navigator.xr.isSessionSupported()`](/de/docs/Web/API/XRSystem/isSessionSupported) auf und spezifizieren Sie den WebXR-Erfahrungsmodus, den Sie bereitstellen möchten: `inline`, `immersive-vr` oder `immersive-ar`, um festzustellen, ob der Sitzungsmodus, den Sie bereitstellen möchten, verfügbar ist.
   3. Wenn der gewünschte Sitzungsmodus verfügbar ist, stellen Sie die geeignete Schnittstelle für den Benutzer bereit, um diesen zu aktivieren.

2. Wenn der Benutzer die Aktivierung der WebXR-Funktionalität durch Interaktion mit der oben aktivierten Benutzeroberfläche anfordert, beantragen Sie eine [`XRSession`](/de/docs/Web/API/XRSession) im gewünschten Modus. Dies geschieht durch Aufruf von [`navigator.xr.requestSession()`](/de/docs/Web/API/XRSystem/requestSession), wobei erneut die Zeichenkette angegeben wird, die den zu aktivierenden Modus kennzeichnet: `inline`, `immersive-vr` oder `immersive-ar`.
3. Wenn das von `requestSession()` zurückgegebene Versprechen erfüllt wird, verwenden Sie die neue [`XRSession`](/de/docs/Web/API/XRSession), um die WebXR-Sitzung während der gesamten WebXR-Erfahrung zu verwalten. Dies umfasst die Verwaltung von Eingaben, Animationen und Rendering.

   1. Rufen Sie die Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) von [`XRSession`](/de/docs/Web/API/XRSession) auf, um das Rendern des ersten Frames für das XR-Gerät zu planen.
   2. Wenn Ihre Szene komplex ist, sollten Sie in Betracht ziehen, einen [`Worker`](/de/docs/Web/API/Worker) zu erstellen—oder einen zu verwenden, den Sie zuvor zu diesem Zweck erstellt haben—, um die für das Rendern jedes Frames erforderlichen Berechnungen durchzuführen. Dies verringert die Wahrscheinlichkeit, dass der Renderprozess die App spürbar verzögert.
   3. Jeder `requestAnimationFrame()`-Rückruf sollte die Informationen zu den Objekten im 3D-Raum verwenden, um den Frame mit WebGL zu rendern.
   4. Jedes Mal, wenn der Rückruf aufgerufen wird, sollte er [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) erneut aufrufen, um den Browser darüber zu informieren, dass der Rückruf erneut ausgeführt werden muss, wenn es Zeit ist, den nächsten Frame zu rendern.

4. Wenn die Zeit gekommen ist (zum Beispiel wenn der Benutzer Ihre App verlässt oder von Ihrer Seite weg navigiert), beenden Sie die XR-Sitzung; andernfalls setzen Sie die Schleife fort, bis der Benutzer sich entscheidet, den XR-Modus zu beenden.

   1. Um die XR-Sitzung selbst zu beenden, rufen Sie [`XRSession.end()`](/de/docs/Web/API/XRSession/end) auf.
   2. Fügen Sie einen Handler für das [`end`](/de/docs/Web/API/XRSession/end_event) Ereignis von [`XRSession`](/de/docs/Web/API/XRSession) hinzu, um informiert zu werden, wenn die Sitzung beendet wird, unabhängig davon, ob Ihr Code, der Benutzer oder der Browser die Beendigung der Sitzung initiiert hat.
