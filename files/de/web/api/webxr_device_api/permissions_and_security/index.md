---
title: WebXR-Berechtigungen und -Sicherheit
slug: Web/API/WebXR_Device_API/Permissions_and_security
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebXR Device API")}}

Die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) hat verschiedene Sicherheitsaspekte zu berücksichtigen, von der Festlegung der [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) bis hin zur Gewährleistung, dass der Benutzer die Nutzung der Mixed-Reality-Präsentation beabsichtigt, bevor diese aktiviert wird. Unter anderem müssen Sie den Zugriff auf Gerätefunktionen wie Mikrofon und/oder Kamera bestätigen, die Erlaubnis zur Nutzung des immersiven VR-Modus einholen (falls zutreffend) und so weiter. Die Vielfalt der in XR involvierten Hardware und Software bringt mehrere APIs und Technologien ins Spiel. In diesem Leitfaden werden wir erörtern, wie Sie sicherstellen können, dass Ihre App die Berechtigungen hat, die sie benötigt, um ein sicheres und privates XR-Erlebnis zu bieten.

Die WebXR Device API unterliegt einer Reihe von Berechtigungs- und Sicherheitskontrollen. Obwohl sie nicht belastend sind, sollten sie beachtet werden. Diese drehen sich hauptsächlich um den vollständig immersiven `immersive-vr` Sitzungsmodus, aber es gibt auch Dinge, die beim Einrichten einer AR-Sitzung zu beachten sind.

## Immersive Präsentation von VR

Zunächst werden alle Anfragen zur Aktivierung des `immersive-vr` Modus abgelehnt, wenn die Domain, die die Anfrage stellt, nicht die Erlaubnis hat, eine immersive Sitzung zu aktivieren. Diese Berechtigung stammt aus der `xr-spatial-tracking` [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy).

Sobald diese Überprüfung bestanden ist, wird die Anfrage, den `immersive-vr` Modus zu betreten, erlaubt, wenn alle der folgenden Bedingungen erfüllt sind:

- Der `requestSession()`-Aufruf wurde von einem Code ausgeführt, der innerhalb des Handlers für ein Benutzerereignis ausgeführt wird, oder von dem Startcode für eine vom Benutzer gestartete [Webanwendung](/de/docs/Web/Progressive_web_apps).
- Das Dokument wird als vertrauenswürdig angesehen, indem es verantwortlich und sowohl aktuell aktiv als auch fokussiert ist.
- Die Absicht des Benutzers, den immersiven VR-Modus zu betreten, ist gut verstanden; siehe [Benutzerabsicht](#benutzerabsicht) unten für Details.

Wenn all das zutrifft, wird das von `requestSession()` zurückgegebene Versprechen erfüllt und das neue {{domxref("XRSession")}}-Objekt wird dem Erfüllungshandler übergeben. Andernfalls wird eine entsprechende Ausnahme ausgelöst, wie `SecurityError`, wenn das Dokument keine Erlaubnis hat, in den immersiven Modus zu wechseln.

## Inline-Präsentation

Wenn Sie eine {{domxref("XRSession")}} mit dem Modus `inline` anfordern und Funktionen erforderlich oder angefordert werden, erlaubt der Browser die Erstellung der Sitzung nur, wenn der Aufruf von {{domxref("XRSystem/requestSession", "requestSession()")}} von Code ausgeführt wird, der ausdrücklich aufgrund der **Benutzerabsicht** ausgeführt wird.

Konkret:

- Wenn der `requestSession()`-Aufruf nicht innerhalb des Handlers erfolgt, der als Reaktion auf ein Benutzerereignis ausgeführt wird, und nicht beim Starten einer Webanwendung ausgeführt wird, wird die Anfrage abgelehnt und `false` an den Erfüllungshandler des Versprechens übergeben.
- Wenn das Dokument, das die Anfrage stellt, nicht dasjenige ist, das für das Skript verantwortlich ist, wird die Anfrage abgelehnt.
- Wenn das Dokument, das die Anfrage stellt, nicht vertrauenswürdig ist, wird die Anfrage abgelehnt und `false` wird über die Erfüllungsroutine des Versprechens zurückgegeben. Ein vertrauenswürdiges Dokument ist eines, das sowohl verantwortlich als auch aktiv ist und das derzeit fokussiert ist.
- Wenn die Absicht des Benutzers, eine Inline-XR-Präsentation zu öffnen, nicht gut verstanden wird, wird die Anfrage abgelehnt. Das Verständnis der [Benutzerabsicht](#benutzerabsicht) kann entweder implizit oder explizit sein.

> [!NOTE]
> Zusätzliche Anforderungen können aufgrund der spezifischen Funktionen, die durch das Optionsobjekt beim Aufruf von `requestSession()` angefordert werden, wirksam werden.

## Benutzerabsicht

**Benutzerabsicht** ist das Konzept, ob eine von Code durchgeführte Aktion von etwas herrührt, das der Benutzer beabsichtigt zu tun oder nicht. Es gibt zwei Arten von Benutzerabsicht: **implizit** und **explizit**.

**Explizite Benutzerabsicht** (explizite Benutzererlaubnis) wird erteilt, wenn der Benutzer spezifisch und ausdrücklich um Erlaubnis gebeten wurde, eine Aktion auszuführen.

**Implizite Benutzerabsicht** (implizite Benutzererlaubnis) wird angenommen, wenn eine der folgenden Szenarien zutrifft:

- Der Benutzer hat in irgendeiner Weise mit dem Dokument interagiert, was wiederum Ihre Anfrage verursacht hat. Zum Beispiel, wenn Sie einen "XR-Modus betreten" Button haben und der Benutzer ihn klickt, wird der Aufruf von `requestSession()` aus dem {{domxref("Element.click_event", "click")}}-Ereignishandler des Buttons erlaubt.
- Wenn Ihr Code während des Starts einer Webanwendung ausgeführt wird, kann das Laufzeitsystem die Aktion des Startens Ihrer Webanwendung als Benutzerabsicht betrachten.
