---
title: Lebenszyklus einer WebXR-Anwendung
slug: Web/API/WebXR_Device_API/Lifecycle
l10n:
  sourceCommit: 4f0f7386262363103a3e9cf482bb348d8570b331
---

{{DefaultAPISidebar("WebXR Device API")}}

In diesem Leitfaden erhalten Sie einen Überblick darüber, was bei der Erstellung und Steuerung einer WebXR-Anwendung erforderlich ist, ohne dabei detailliert auf den Code einzugehen. Dies dient als Vorbereitung für die nächsten Artikel in diesen WebXR-Leitfäden, die das [Starten und Beenden](/de/docs/Web/API/WebXR_Device_API/Startup_and_shutdown) einer WebXR-Sitzung, [Geometrie](/de/docs/Web/API/WebXR_Device_API/Geometry), [Simulation von Kameras](/de/docs/Web/API/WebXR_Device_API/Cameras), [räumliches Tracking](/de/docs/Web/API/WebXR_Device_API/Spatial_tracking) und mehr abdecken.

## Überblick über den Lebenszyklus

Die meisten Anwendungen, die WebXR verwenden, folgen einem ähnlichen Designmuster:

1. Prüfen Sie, ob das Gerät und der Browser des Benutzers in der Lage sind, das XR-Erlebnis bereitzustellen, das Sie anbieten möchten.

   1. Stellen Sie sicher, dass die WebXR-API verfügbar ist; wenn {{domxref("navigator.xr")}} undefiniert ist, können Sie davon ausgehen, dass der Browser und/oder das Gerät des Benutzers WebXR nicht unterstützt. Wenn es nicht unterstützt wird, deaktivieren Sie jede Benutzeroberfläche, die zur Aktivierung von XR-Funktionen genutzt wird, und brechen Sie alle Versuche ab, den XR-Modus zu betreten.
   2. Rufen Sie {{DOMxRef("XRSystem/isSessionSupported","navigator.xr.isSessionSupported()")}} auf und geben Sie den WebXR-Erfahrungsmodus an, den Sie bereitstellen möchten: `inline`, `immersive-vr` oder `immersive-ar`, um zu bestimmen, ob der von Ihnen gewünschte Sitzungsmodus verfügbar ist.
   3. Wenn der von Ihnen gewünschte Sitzungsmodus verfügbar ist, stellen Sie die entsprechende Schnittstelle zur Verfügung, damit der Benutzer diese aktivieren kann.

2. Wenn der Benutzer die Aktivierung der WebXR-Funktionalität durch Interaktion mit der oben aktivierten Benutzeroberfläche anfordert, fordern Sie eine {{DOMxRef("XRSession")}} im gewünschten Modus an. Dies wird durch Aufruf von {{DOMxRef("XRSystem/requestSession","navigator.xr.requestSession()")}} durchgeführt, wobei erneut der String angegeben wird, der den zu aktivierenden Modus angibt: `inline`, `immersive-vr` oder `immersive-ar`.
3. Wenn das von `requestSession()` zurückgegebene Versprechen erfüllt wird, verwenden Sie die neue {{domxref("XRSession")}}, um die WebXR-Sitzung für die Dauer des WebXR-Erlebnisses zu verwalten. Dies umfasst die Verwaltung von Eingaben, Animationen und Rendering.

   1. Rufen Sie die Methode {{domxref("XRSession")}} {{DOMxRef("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} auf, um das Rendering des ersten Frames für das XR-Gerät zu planen.
   2. Wenn Ihre Szene komplex ist, sollten Sie in Betracht ziehen, einen {{domxref("Worker")}} zu erstellen – oder einen zuvor zu diesem Zweck erstellten zu verwenden –, um die für jedes zu rendernde Frame benötigten Berechnungen durchzuführen. Dies verringert die Wahrscheinlichkeit, dass der Rendering-Prozess die App merklich ins Stocken bringt.
   3. Jeder `requestAnimationFrame()` Rückruf sollte die bereitgestellten Informationen über die im 3D-Raum befindlichen Objekte nutzen, um das Frame mit WebGL zu rendern.
   4. Jedes Mal, wenn der Rückruf aufgerufen wird, sollte er {{DOMxRef("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} erneut aufrufen, um dem Browser mitzuteilen, dass der Rückruf erneut ausgeführt werden muss, wenn es Zeit ist, das nächste Frame zu rendern.

4. Wenn es an der Zeit ist (z. B. wenn der Benutzer Ihre App verlässt oder von Ihrer Seite weg navigiert), beenden Sie die XR-Sitzung; andernfalls setzen Sie die Schleife fort, bis der Benutzer den XR-Modus beendet.

   1. Um die XR-Sitzung selbst zu beenden, rufen Sie {{DOMxRef("XRSession.end", "XRSession.end()")}} auf.
   2. Binden Sie einen Handler für das {{domxref("XRSession")}} Ereignis {{domxref("XRSession.end_event", "end")}} ein, um informiert zu werden, wenn die Sitzung endet, unabhängig davon, ob Ihr Code, der Benutzer oder der Browser die Beendigung der Sitzung initiiert hat.
