---
title: WebXR-Berechtigungen und -Sicherheit
slug: Web/API/WebXR_Device_API/Permissions_and_security
l10n:
  sourceCommit: db443a6062d0e858a62af2f9a3a7558335ffd2dd
---

{{DefaultAPISidebar("WebXR Device API")}}

Die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) hat mehrere Sicherheitsaspekte, die berücksichtigt werden müssen, von der Etablierung einer [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) bis hin zur Sicherstellung, dass der Benutzer die Verwendung der Mixed-Reality-Präsentation beabsichtigt, bevor sie aktiviert wird. Unter anderem müssen Sie den Zugriff auf Gerätefunktionen wie Mikrofon und/oder Kamera bestätigen, die Erlaubnis zur Nutzung des immersiven VR-Modus einholen (falls zutreffend) und so weiter. Die Vielfalt der in XR involvierten Hardware und Software bringt mehrere APIs und Technologien ins Spiel. In diesem Leitfaden wird erklärt, wie Sie sicherstellen können, dass Ihre App die nötigen Berechtigungen hat, um eine sichere und private XR-Erfahrung zu bieten.

Die WebXR Device API unterliegt einer Reihe von Berechtigungs- und Sicherheitskontrollen. Auch wenn sie nicht belastend sind, sollten sie dennoch beachtet werden. Diese beziehen sich hauptsächlich auf den vollständig immersiven `immersive-vr`-Sitzungsmodus, allerdings gibt es auch Dinge zu beachten, wenn Sie eine AR-Sitzung einrichten.

## Immersive Präsentation von VR

Zunächst werden alle Anfragen zur Aktivierung des `immersive-vr`-Modus abgelehnt, wenn die Domain, die die Anfrage stellt, keine Berechtigung zur Aktivierung einer immersiven Sitzung hat. Diese Berechtigung kommt von der `xr-spatial-tracking` [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy).

Sobald diese Prüfung bestanden ist, wird die Anfrage zum Eintritt in den `immersive-vr`-Modus gestattet, wenn alle folgenden Bedingungen erfüllt sind:

- Der `requestSession()`-Aufruf wurde durch Code ausgeführt, der innerhalb des Handlers für ein Benutzerereignis oder aus dem Startcode einer vom Benutzer gestarteten [Webanwendung](/de/docs/Web/Progressive_web_apps) stammt.
- Das Dokument wird als vertrauenswürdig angesehen, indem es verantwortlich ist und sowohl aktuell aktiv ist als auch den Fokus hat.
- Die Absicht des Benutzers, den immersiven VR-Modus zu betreten, ist gut verstanden; siehe unten [Benutzerabsicht](#benutzerabsicht) für Details.

Wenn dies alles zutrifft, wird das von `requestSession()` zurückgegebene Versprechen erfüllt, und das neue [`XRSession`](/de/docs/Web/API/XRSession)-Objekt wird in den Erfüllungshandler übergeben. Andernfalls wird eine entsprechende Ausnahme ausgelöst, wie etwa `SecurityError`, wenn das Dokument keine Berechtigung hat, den immersiven Modus zu betreten.

## Inline-Präsentation

Wenn Sie eine [`XRSession`](/de/docs/Web/API/XRSession) mit dem Modus `inline` anfordern und irgendwelche Funktionen erforderlich oder angefordert sind, erlaubt der Browser die Erstellung der Sitzung nur, wenn der Aufruf von [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) von Code ausgeführt wird, der ausdrücklich auf **Benutzerabsicht** zurückzuführen ist.

Konkret:

- Wenn der `requestSession()`-Aufruf nicht aus dem innerhalb eines Handlers ausgeführten Code stammt, der als Reaktion auf ein Benutzerereignis ausgeführt wird, und nicht während des Starts einer Webanwendung erteilt wird, wird die Anfrage abgelehnt und `false` an den Erfüllungshandler des Versprechens geliefert.
- Wenn das Dokument, das die Anfrage stellt, nicht für das Skript verantwortlich ist, wird die Anfrage abgelehnt.
- Wenn das Dokument, das die Anfrage stellt, nicht vertrauenswürdig ist, wird die Anfrage abgelehnt und `false` durch die Erfüllungsroutine des Versprechens zurückgegeben. Ein vertrauenswürdiges Dokument ist eines, das sowohl verantwortlich als auch aktiv ist und derzeit den Fokus hat.
- Wenn die Absicht des Benutzers, eine Inline-XR-Präsentation zu öffnen, nicht gut verstanden wird, wird die Anfrage abgelehnt. Das Verständnis der [Benutzerabsicht](#benutzerabsicht) kann entweder implizit oder explizit sein.

> [!NOTE]
> Zusätzliche Anforderungen können aufgrund der spezifischen Funktionen, die durch das Optionsobjekt beim Aufruf von `requestSession()` angefordert werden, in Kraft gesetzt werden.

## Benutzerabsicht

**Benutzerabsicht** ist das Konzept, ob eine Aktion, die von Code ausgeführt wird, aufgrund von etwas erfolgt, das der Benutzer zu tun beabsichtigt oder nicht. Es gibt zwei Arten von Benutzerabsicht: **implizit** und **explizit**.

**Explizite Benutzerabsicht** (explizites Einverständnis des Benutzers) wird gewährt, wenn der Benutzer spezifisch und ausdrücklich um Erlaubnis gebeten wurde, eine Aktion auszuführen.

**Implizite Benutzerabsicht** (implizites Einverständnis des Benutzers) wird angenommen, wenn eines der folgenden Szenarien zutrifft:

- Der Benutzer hat in irgendeiner Weise mit dem Dokument interagiert, was wiederum Ihre Anfrage ausgelöst hat. Wenn Sie zum Beispiel eine Schaltfläche "XR-Modus betreten" haben und der Benutzer darauf klickt, wird der Aufruf von `requestSession()` aus dem [`click`](/de/docs/Web/API/Element/click_event)-Ereignishandler der Schaltfläche zugelassen.
- Wenn Ihr Code während des Starts einer Webanwendung ausgeführt wird, kann die Laufzeit den Akt des Startens Ihrer Webanwendung als Benutzerabsicht anerkennen.
