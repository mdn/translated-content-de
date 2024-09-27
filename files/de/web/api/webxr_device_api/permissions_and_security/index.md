---
title: WebXR-Berechtigungen und Sicherheit
slug: Web/API/WebXR_Device_API/Permissions_and_security
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebXR Device API")}}

Die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) hat verschiedene Sicherheitsaspekte zu berücksichtigen, vom Festlegen der [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) bis hin zur Sicherstellung, dass der Benutzer die Nutzung der Mixed-Reality-Präsentation beabsichtigt, bevor sie aktiviert wird. Unter anderem müssen Sie den Zugriff auf Gerätefunktionen wie das Mikrofon und/oder die Kamera bestätigen, die Berechtigung zur Nutzung des immersiven VR-Modus einholen (falls zutreffend) und so weiter. Die Vielfalt von Hardware und Software, die in XR involviert ist, bringt mehrere APIs und Technologien ins Spiel. In diesem Leitfaden besprechen wir, wie Sie sicherstellen können, dass Ihre App die benötigten Berechtigungen hat, um ein sicheres und privates XR-Erlebnis zu bieten.

Die WebXR Device API unterliegt einer Reihe von Berechtigungs- und Sicherheitskontrollen. Obwohl sie nicht belastend sind, sollten sie beachtet werden. Diese betreffen hauptsächlich den vollständig immersiven `immersive-vr`-Sitzungsmodus, aber auch für das Einrichten einer AR-Sitzung gibt es Dinge zu beachten.

## Immersive Präsentation von VR

Zunächst werden alle Anfragen zur Aktivierung des `immersive-vr`-Modus abgelehnt, wenn die Domain, die die Anfrage stellt, keine Berechtigung zur Aktivierung einer immersiven Sitzung hat. Diese Berechtigung stammt aus der `xr-spatial-tracking` [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy).

Nachdem diese Überprüfung bestanden wurde, ist die Anfrage zum Eintritt in den `immersive-vr`-Modus erlaubt, wenn alle folgenden Bedingungen erfüllt sind:

- Der Aufruf `requestSession()` wurde von Code durchgeführt, der innerhalb des Handlers für ein Benutzerereignis ausgeführt wird, oder aus dem Startcode für eine vom Benutzer gestartete [Webanwendung](/de/docs/Web/Progressive_web_apps).
- Das Dokument wird als vertrauenswürdig betrachtet, indem es verantwortlich ist und sowohl aktuell aktiv ist als auch den Fokus hat.
- Die Absicht des Benutzers, den immersiven VR-Modus zu betreten, ist klar verständlich; siehe [Benutzerabsicht](#benutzerabsicht) unten für Details.

Wenn all das zutrifft, wird das Versprechen, das von `requestSession()` zurückgegeben wird, erfüllt, und das neue [`XRSession`](/de/docs/Web/API/XRSession)-Objekt wird in den Erfüllungshandler übergeben. Andernfalls wird eine entsprechende Ausnahme geworfen, wie `SecurityError`, wenn das Dokument keine Berechtigung hat, in den immersiven Modus zu wechseln.

## Inline-Präsentation

Wenn Sie eine [`XRSession`](/de/docs/Web/API/XRSession) mit dem Modus `inline` anfordern und Funktionen erforderlich oder gewünscht sind, lässt der Browser die Sitzung nur dann zu, wenn der Aufruf von [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) ausdrücklich aufgrund von **Benutzerabsicht** erfolgt.

Konkret:

- Wenn der Aufruf von `requestSession()` nicht aus einem innerhalb eines in Reaktion auf ein Benutzerereignis ausgeführten Handlers stammt und nicht beim Starten einer Webanwendung erfolgt, wird die Anfrage abgelehnt und `false` wird an den Erfüllungshandler des Versprechens übergeben.
- Wenn das Dokument, das die Anfrage stellt, nicht dasjenige ist, das für das Skript verantwortlich ist, wird die Anfrage abgelehnt.
- Wenn das Dokument, das die Anfrage stellt, nicht vertrauenswürdig ist, wird die Anfrage abgelehnt und `false` wird über die Erfüllungsroutine des Versprechens zurückgegeben. Ein vertrauenswürdiges Dokument ist eines, das sowohl verantwortlich als auch aktiv ist und das derzeit den Fokus hat.
- Wenn die Absicht des Benutzers, eine Inline-XR-Präsentation zu öffnen, nicht gut verstanden wird, wird die Anfrage abgelehnt. Das Verständnis der [Benutzerabsicht](#benutzerabsicht) kann entweder implizit oder explizit sein.

> [!NOTE]
> Zusätzliche Anforderungen können aufgrund der spezifischen Funktionen, die durch das Optionsobjekt beim Aufruf von `requestSession()` angefordert werden, in Kraft treten.

## Benutzerabsicht

**Benutzerabsicht** ist das Konzept, ob eine Handlung, die von Code ausgeführt wird, aufgrund dessen erfolgt, was der Benutzer beabsichtigt oder nicht. Es gibt zwei Arten von Benutzerabsicht: **implizit** und **explizit**.

**Explizite Benutzerabsicht** (explizite Benutzereinwilligung) wird erteilt, wenn der Benutzer ausdrücklich um Erlaubnis gebeten wurde, eine Handlung auszuführen.

**Implizite Benutzerabsicht** (implizite Benutzereinwilligung) wird angenommen, wenn eine der folgenden Situationen zutrifft:

- Der Benutzer hat in irgendeiner Weise mit dem Dokument interagiert, was wiederum Ihre Anfrage verursacht hat. Zum Beispiel, wenn Sie eine Schaltfläche "XR-Modus betreten" haben und der Benutzer darauf klickt, wird der Aufruf von `requestSession()` aus dem [`click`](/de/docs/Web/API/Element/click_event)-Ereignishandler der Schaltfläche erlaubt.
- Wenn Ihr Code während des Starts einer Webanwendung ausgeführt wird, kann die Laufzeit das Starten Ihrer Webanwendung als Benutzerabsicht betrachten.
