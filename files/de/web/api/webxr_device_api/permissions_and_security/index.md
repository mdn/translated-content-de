---
title: WebXR-Berechtigungen und Sicherheit
slug: Web/API/WebXR_Device_API/Permissions_and_security
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{DefaultAPISidebar("WebXR Device API")}}

Die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) beinhaltet mehrere sicherheitsrelevante Aspekte, von der Einrichtung der [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) bis hin zur Sicherstellung, dass der Benutzer beabsichtigt, die Mixed-Reality-Präsentation zu verwenden, bevor sie aktiviert wird. Unter anderem müssen Sie den Zugriff auf Gerätefunktionen wie Mikrofon und/oder Kamera bestätigen, die Berechtigung zur Nutzung des immersiven VR-Modus einholen (falls zutreffend) und so weiter. Die Vielfalt der in XR involvierten Hardware und Software bringt mehrere APIs und Technologien ins Spiel. In diesem Leitfaden behandeln wir, wie Sie sicherstellen können, dass Ihre Anwendung die erforderlichen Berechtigungen hat, um ein sicheres und privates XR-Erlebnis zu bieten.

Die WebXR Device API unterliegt einer Reihe von Berechtigungs- und Sicherheitskontrollen. Obwohl sie nicht schwerwiegend sind, lohnt es sich, sich ihrer bewusst zu sein. Diese drehen sich hauptsächlich um den vollimmersiven Modus `immersive-vr`, aber auch bei der Einrichtung einer AR-Sitzung gibt es Dinge zu beachten.

## Immersive Präsentation von VR

Zunächst werden alle Anfragen zur Aktivierung des `immersive-vr`-Modus abgelehnt, wenn die Domain, die die Anfrage stellt, keine Berechtigung hat, um eine immersive Sitzung zu ermöglichen. Diese Berechtigung stammt aus der `xr-spatial-tracking` [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy).

Sobald diese Überprüfung bestanden ist, ist die Anfrage, den `immersive-vr`-Modus zu betreten, erlaubt, wenn alle folgenden Bedingungen erfüllt sind:

- Der `requestSession()`-Aufruf wurde durch Code ausgelöst, der innerhalb des Handlers für ein Benutzereignis ausgeführt wird, oder stammt aus dem Startcode für eine vom Benutzer gestartete [Webanwendung](/de/docs/Web/Progressive_web_apps).
- Das Dokument gilt als vertrauenswürdig, da es verantwortlich ist und sowohl gegenwärtig aktiv als auch im Fokus ist.
- Die Absicht des Benutzers, den immersiven VR-Modus zu betreten, ist gut verstanden; siehe [Benutzerabsicht](#benutzerabsicht) unten für Details.

Wenn all dies zutrifft, wird das durch `requestSession()` zurückgegebene Versprechen aufgelöst, und das neue [`XRSession`](/de/docs/Web/API/XRSession)-Objekt wird dem Erfüllungshandler übergeben. Andernfalls wird eine entsprechende Ausnahme ausgelöst, wie z.B. `SecurityError`, wenn das Dokument keine Berechtigung hat, den immersiven Modus zu betreten.

## Inline-Präsentation

Wenn Sie eine [`XRSession`](/de/docs/Web/API/XRSession) mit dem Modus `inline` anfordern und irgendwelche Funktionen erforderlich oder gewünscht sind, erlaubt der Browser die Erstellung der Session nur, wenn der Aufruf von [`requestSession()`](/de/docs/Web/API/XRSystem/requestSession) explizit aufgrund **der Absicht des Nutzers** erfolgt.

Konkret:

- Wenn der `requestSession()`-Aufruf nicht aus einem innerhalb des Handlers ausgeführten Code stammt, der als Reaktion auf ein Benutzereignis ausgeführt wird, und nicht beim Starten einer Webanwendung ausgegeben wird, wird die Anfrage abgelehnt und `false` wird an den Erfüllungshandler des Versprechens übermittelt.
- Wenn das Dokument, das die Anfrage macht, nicht das ist, welches für das Skript verantwortlich ist, wird die Anfrage abgelehnt.
- Wenn das Dokument, das die Anfrage macht, nicht vertrauenswürdig ist, wird die Anfrage abgelehnt und `false` wird durch die Erfüllungsroutine des Versprechens zurückgegeben. Ein vertrauenswürdiges Dokument ist eines, das sowohl verantwortlich als auch aktiv ist und derzeit im Fokus steht.
- Wenn die Absicht des Benutzers, eine Inline-XR-Präsentation zu öffnen, nicht gut verstanden wird, wird die Anfrage abgelehnt. Das Verständnis der [Absicht des Benutzers](#benutzerabsicht) kann entweder implizit oder explizit sein.

> [!NOTE]
> Zusätzliche Anforderungen können aufgrund der spezifischen Funktionen, die durch das Optionsobjekt beim Aufruf von `requestSession()` angefordert wurden, in Kraft treten.

## Benutzerabsicht

**Benutzerabsicht** ist das Konzept, ob eine Aktion, die durch Code ausgeführt wird, aufgrund etwas erfolgt, das der Benutzer beabsichtigt zu tun, oder nicht. Es gibt zwei Arten von Benutzerabsicht: **implizit** und **explizit**.

**Explizite Benutzerabsicht** (explizite Benutzerzustimmung) wird erteilt, wenn der Benutzer spezifisch und ausdrücklich um Erlaubnis zur Durchführung einer Aktion gebeten wurde.

**Implizite Benutzerabsicht** (implizite Benutzerzustimmung) wird angenommen, wenn eine der folgenden Szenarien zutrifft:

- Der Benutzer hat auf irgendeine Weise mit dem Dokument interagiert, was wiederum zu Ihrer Anfrage geführt hat. Beispielsweise, wenn Sie eine "XR-Modus betreten"-Schaltfläche haben und der Benutzer darauf klickt, wird das Aufrufen von `requestSession()` aus dem [`click`](/de/docs/Web/API/Element/click_event)-Ereignishandler der Schaltfläche erlaubt.
- Wenn Ihr Code beim Start einer Webanwendung ausgeführt wird, kann die Laufzeit das Starten Ihrer Webanwendung als Benutzerabsicht werten.
