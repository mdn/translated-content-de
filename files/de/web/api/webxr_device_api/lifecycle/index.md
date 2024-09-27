---
title: Lebenszyklus einer WebXR-Anwendung
slug: Web/API/WebXR_Device_API/Lifecycle
l10n:
  sourceCommit: 4f0f7386262363103a3e9cf482bb348d8570b331
---

{{DefaultAPISidebar("WebXR Device API")}}

In diesem Leitfaden geben wir einen Überblick darüber, was bei der Erstellung und Steuerung einer WebXR-Anwendung erforderlich ist, ohne auf Codeebene ins Detail zu gehen. Dies dient als Vorbereitung für die nächsten Artikel in diesen WebXR-Leitfäden, die das [Hoch- und Herunterfahren](/de/docs/Web/API/WebXR_Device_API/Startup_and_shutdown) einer WebXR-Sitzung, [Geometrie](/de/docs/Web/API/WebXR_Device_API/Geometry), [Simulation von Kameras](/de/docs/Web/API/WebXR_Device_API/Cameras), [räumliches Tracking](/de/docs/Web/API/WebXR_Device_API/Spatial_tracking) und mehr behandeln.

## Übersicht des Lebenszyklus

Die meisten Anwendungen, die WebXR verwenden, folgen einem ähnlichen Gesamtdesignmuster:

1. Überprüfen Sie, ob das Gerät und der Browser des Benutzers in der Lage sind, die XR-Erfahrung bereitzustellen, die Sie anbieten möchten.

   1. Stellen Sie sicher, dass die WebXR-API verfügbar ist; wenn [`navigator.xr`](/de/docs/Web/API/Navigator/xr) undefiniert ist, können Sie davon ausgehen, dass der Browser und/oder das Gerät des Benutzers WebXR nicht unterstützt. Wenn es nicht unterstützt wird, deaktivieren Sie alle Benutzeroberflächen, die zur Aktivierung von XR-Funktionen verwendet werden, und brechen Sie alle Versuche ab, den XR-Modus zu betreten.
   2. Rufen Sie [`navigator.xr.isSessionSupported()`](/de/docs/Web/API/XRSystem/isSessionSupported) auf und geben Sie den WebXR-Erfahrungsmodus an, den Sie bereitstellen möchten: `inline`, `immersive-vr` oder `immersive-ar`, um festzustellen, ob der von Ihnen gewünschte Sitzungstyp verfügbar ist.
   3. Wenn der Sitzungstyp, den Sie verwenden möchten, verfügbar ist, bieten Sie dem Benutzer die entsprechende Schnittstelle, um es ihm zu ermöglichen, sie zu aktivieren.

2. Wenn der Benutzer die Aktivierung der WebXR-Funktionalität durch Interaktion mit der oben aktivierten Benutzeroberfläche anfordert, fordern Sie eine [`XRSession`](/de/docs/Web/API/XRSession) im gewünschten Modus an. Dies geschieht durch den Aufruf von [`navigator.xr.requestSession()`](/de/docs/Web/API/XRSystem/requestSession) und der erneuten Angabe der Zeichenkette, die den Modus angibt, den Sie aktivieren möchten: `inline`, `immersive-vr` oder `immersive-ar`.
3. Wenn das von `requestSession()` zurückgegebene Versprechen erfüllt wird, verwenden Sie die neue [`XRSession`](/de/docs/Web/API/XRSession), um die WebXR-Sitzung für die Dauer der WebXR-Erfahrung zu verwalten. Dies beinhaltet das Verwalten von Eingaben, Animationen und Rendering.

   1. Rufen Sie die [`XRSession`](/de/docs/Web/API/XRSession)-Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) auf, um das Rendern des ersten Frames für das XR-Gerät zu planen.
   2. Wenn Ihre Szene komplex ist, sollten Sie erwägen, einen [`Worker`](/de/docs/Web/API/Worker) zu erstellen—oder einen zu verwenden, den Sie zuvor zu diesem Zweck erstellt haben—um die Berechnungen durchzuführen, die für jeden zu rendernden Frame erforderlich sind. Dadurch wird die Wahrscheinlichkeit verringert, dass der Rendering-Prozess die App spürbar zum Stillstand bringt.
   3. Jeder `requestAnimationFrame()`-Callback sollte die bereitgestellten Informationen über die im 3D-Raum befindlichen Objekte verwenden, um den Frame mit WebGL zu rendern.
   4. Jedes Mal, wenn der Callback aufgerufen wird, sollte er erneut [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) aufrufen, um den Browser darüber zu informieren, dass der Callback erneut ausgeführt werden muss, wenn es Zeit ist, den nächsten Frame zu rendern.

4. Wenn die Zeit gekommen ist (z. B. wenn der Benutzer Ihre App verlässt oder sich von Ihrer Site entfernt), beenden Sie die XR-Sitzung; andernfalls fahren Sie mit der Schleife fort, bis der Benutzer den XR-Modus verlassen möchte.

   1. Um die XR-Sitzung selbst zu beenden, rufen Sie [`XRSession.end()`](/de/docs/Web/API/XRSession/end) auf.
   2. Fügen Sie einen Handler für das [`XRSession`](/de/docs/Web/API/XRSession)-Ereignis [`end`](/de/docs/Web/API/XRSession/end_event) hinzu, um informiert zu werden, wenn die Sitzung endet, unabhängig davon, ob Ihre Software, der Benutzer oder der Browser die Beendigung der Sitzung initiiert hat.
