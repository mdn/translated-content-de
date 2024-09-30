---
title: WebXR-Berechtigungen und Sicherheit
slug: Web/API/WebXR_Device_API/Permissions_and_security
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebXR Device API")}}

Die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) weist mehrere Sicherheitsaspekte auf, die berücksichtigt werden müssen, von der Festlegung der [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) bis hin zur Sicherstellung, dass der Benutzer die Mixed-Reality-Präsentation wirklich nutzen möchte, bevor sie aktiviert wird. Unter anderem müssen Sie den Zugriff auf Gerätefunktionen wie Mikrofon und/oder Kamera bestätigen, die Erlaubnis einholen, den immersiven VR-Modus zu verwenden (falls zutreffend), und so weiter. Die Vielfalt der in XR involvierten Hardware und Software bringt viele APIs und Technologien ins Spiel. In diesem Leitfaden werden wir behandeln, wie Sie sicherstellen können, dass Ihre App über die erforderlichen Berechtigungen verfügt, um ein sicheres und privates XR-Erlebnis zu bieten.

Die WebXR Device API unterliegt einer Reihe von Berechtigungs- und Sicherheitskontrollen. Obwohl diese nicht übermäßig belastend sind, sollten sie beachtet werden. Sie drehen sich hauptsächlich um den voll immersiven `immersive-vr`-Sitzungsmodus, es gibt jedoch auch bei der Einrichtung einer AR-Sitzung einiges zu beachten.

## Immersive Präsentation von VR

Zunächst werden alle Anfragen zur Aktivierung des `immersive-vr`-Modus abgelehnt, wenn die Domain, die die Anfrage stellt, nicht die Berechtigung hat, eine immersive Sitzung zu ermöglichen. Diese Berechtigung stammt aus der `xr-spatial-tracking` [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy).

Sobald diese Überprüfung bestanden ist, wird die Anfrage, in den `immersive-vr`-Modus zu wechseln, erlaubt, wenn alle folgenden Bedingungen erfüllt sind:

- Der `requestSession()`-Aufruf wurde von einem Code ausgeführt, der innerhalb des Handlers für ein Benutzerevent oder aus dem Startcode einer vom Benutzer gestarteten [Webanwendung](/de/docs/Web/Progressive_web_apps) heraus ausgegeben wurde.
- Das Dokument wird als vertrauenswürdig angesehen, was bedeutet, dass es verantwortlich ist und sowohl derzeit aktiv ist als auch den Fokus hat.
- Die Absicht des Benutzers, in den immersiven VR-Modus zu wechseln, ist gut verstanden; siehe [Benutzerabsicht](#benutzerabsicht) unten für Details.

Wenn all dies zutrifft, wird das von `requestSession()` zurückgegebene Versprechen erfüllt, und das neue [`XRSession`](/de/docs/Web/API/XRSession)-Objekt wird dem Erfüllungs-Handler übergeben. Andernfalls wird eine entsprechende Ausnahme geworfen, wie `SecurityError`, wenn das Dokument nicht die Berechtigung hat, den immersiven Modus zu betreten.

## Inline-Präsentation

Wenn Sie eine [`XRSession`](/de/docs/Web/API/XRSession) mit dem Modus `inline` anfordern und irgendwelche Funktionen benötigt oder angefragt werden, erlaubt der Browser die Sitzung nur dann zu erstellen, wenn der Aufruf von [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) von einem Code ausgeführt wird, der ausdrücklich aufgrund der **Benutzerabsicht** ausgeführt wird.

Konkret:

- Wenn der `requestSession()`-Aufruf nicht von einem innerhalb des Handlers ausgegeben wird, der als Reaktion auf ein Benutzerevent ausgeführt wird, und nicht während des Starts einer Webanwendung ausgegeben wird, wird die Anfrage abgelehnt und `false` wird dem Erfüllungs-Handler des Versprechens übermittelt.
- Wenn das Dokument, das die Anfrage stellt, nicht das verantwortliche für das Skript ist, wird die Anfrage abgelehnt.
- Wenn das Dokument, das die Anfrage stellt, nicht vertrauenswürdig ist, wird die Anfrage abgelehnt und `false` wird über die Erfüllungsroutine des Versprechens zurückgegeben. Ein vertrauenswürdiges Dokument ist eines, das sowohl verantwortlich als auch aktiv ist und das derzeit den Fokus hat.
- Wenn die Absicht des Benutzers, eine Inline-XR-Präsentation zu öffnen, nicht gut verstanden wird, wird die Anfrage abgelehnt. Das Verständnis der [Benutzerabsicht](#benutzerabsicht) kann entweder implizit oder explizit sein.

> [!NOTE]
> Zusätzliche Anforderungen können aufgrund der spezifischen Funktionen, die durch das Optionsobjekt beim Aufruf von `requestSession()` angefordert werden, in Kraft treten.

## Benutzerabsicht

**Benutzerabsicht** ist das Konzept, ob eine Aktion, die vom Code ausgeführt wird, aufgrund einer Absicht des Benutzers durchgeführt wird oder nicht. Es gibt zwei Arten der Benutzerabsicht: **implizit** und **explizit**.

**Explizite Benutzerabsicht** (explizite Benutzerzustimmung) wird erteilt, wenn der Benutzer ausdrücklich um Erlaubnis gebeten wurde, eine Aktion durchzuführen.

**Implizite Benutzerabsicht** (implizite Benutzerzustimmung) wird angenommen, wenn einer der folgenden Fälle zutrifft:

- Der Benutzer hat auf irgendeine Weise mit dem Dokument interagiert, was wiederum Ihre Anfrage ausgelöst hat. Wenn Sie beispielsweise einen "XR-Modus betreten"-Button haben und der Benutzer darauf klickt, wird der Aufruf von `requestSession()` aus dem [`click`](/de/docs/Web/API/Element/click_event)-Event-Handler des Buttons gestattet.
- Wenn Ihr Code während des Starts einer Webanwendung ausgeführt wird, kann die Laufzeit den Akt des Startens Ihrer Webanwendung als Benutzerabsicht einstufen.
