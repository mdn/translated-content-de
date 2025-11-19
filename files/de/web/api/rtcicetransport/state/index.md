---
title: "RTCIceTransport: state-Eigenschaft"
short-title: state
slug: Web/API/RTCIceTransport/state
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebRTC")}}

Die **`state`** schreibgeschützte Eigenschaft der [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)-Schnittstelle gibt den aktuellen Status des ICE-Transports zurück, sodass Sie den Zustand der ICE-Sammlung feststellen können, in dem sich der ICE-Agent derzeit befindet.

Dies unterscheidet sich von der [`gatheringState`](/de/docs/Web/API/RTCIceTransport/gatheringState), die nur anzeigt, ob die ICE-Sammlung derzeit im Gange ist oder nicht. Es unterscheidet sich auch von [`RTCPeerConnection.connectionState`](/de/docs/Web/API/RTCPeerConnection/connectionState), die die Zustände über jeden [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) aggregiert, der von jedem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) und jedem [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) über die gesamte Verbindung verwendet wird.

## Wert

Ein String, dessen Wert einer der folgenden ist:

- `"new"`
  - : Der [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) sammelt derzeit lokale Kandidaten oder wartet darauf, dass das Remote-Gerät beginnt, die Remote-Kandidaten zu übertragen, oder beides. In diesem Zustand hat das Prüfen von Kandidaten auf solche, die möglicherweise akzeptabel sind, noch nicht begonnen.
- `"checking"`
  - : Es wurde mindestens ein Remote-Kandidat empfangen und der `RTCIceTransport` hat begonnen, Paarungen von Remote- und lokalen Kandidaten zu untersuchen, um zu versuchen, geeignete Paare zu identifizieren, die zur Herstellung einer Verbindung verwendet werden könnten. Beachten Sie, dass das Sammeln von lokalen Kandidaten noch im Gange sein kann und das Remote-Gerät möglicherweise auch noch eigene Kandidaten sammelt.
- `"connected"`
  - : Ein geeignetes Kandidatenpaar wurde gefunden und ausgewählt, und der `RTCIceTransport` hat die beiden Peers mit diesem Paar verbunden. Es gibt jedoch noch Kandidatenpaarungen zu berücksichtigen, und es kann weiterhin auf einem oder beiden Geräten gesammelt werden.

    Der Transport kann vom Zustand `"connected"` in den Zustand `"checking"` zurückfallen, wenn ein Peer beschließt, die Zustimmung zur Verwendung des ausgewählten Kandidatenpaares zu widerrufen, und kann in `"disconnected"` zurückfallen, wenn keine Kandidaten mehr zu überprüfen sind, aber einer oder beide Clients noch Kandidaten sammeln.

- `"completed"`
  - : Der Transport hat das Sammeln lokaler Kandidaten abgeschlossen und hat eine Benachrichtigung vom Remote-Peer erhalten, dass keine weiteren Kandidaten gesendet werden. Außerdem wurden alle Kandidatenpaare betrachtet und ein Paar zur Verwendung ausgewählt. Wenn Zustimmungsüberprüfungen bei allen erfolgreichen Kandidatenpaaren fehlschlagen, ändert sich der Transportzustand in `"failed"`.
- `"disconnected"`
  - : Der ICE-Agent hat festgestellt, dass die Konnektivität für diesen [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) verloren gegangen ist. Dies ist kein Fehlerzustand (das ist `"failed"`). Ein Wert von `"disconnected"` bedeutet, dass ein flüchtiges Problem aufgetreten ist, das die Verbindung unterbrochen hat, sich jedoch automatisch lösen sollte, ohne dass Ihr Code irgendwelche Maßnahmen ergreifen muss. Siehe [Der getrennte Zustand](#der_getrennte_zustand) für weitere Details.
- `"failed"`
  - : Der `RTCIceTransport` hat den Sammelprozess abgeschlossen, die Benachrichtigung "keine weiteren Kandidaten" vom Remote-Peer erhalten und das Prüfen von Kandidatenpaaren abgeschlossen, ohne erfolgreich ein Paar zu finden, das sowohl gültig ist als auch für das Zustimmung erteilt werden kann. _Dies ist ein endgültiger Zustand, der anzeigt, dass die Verbindung nicht erreicht oder aufrechterhalten werden kann._
- `"closed"`
  - : Der Transport hat heruntergefahren und reagiert nicht mehr auf STUN-Anfragen.

## Nutzungshinweise

Wenn ein ICE-Neustart erfolgt, wird der Prozess des Kandidatensammelns und der Konnektivitätsprüfung von vorne begonnen; dies wird einen Übergang vom Zustand `"connected"` verursachen, wenn der Neustart erfolgte, während der Zustand `"completed"` war. Wenn der Neustart während eines flüchtigen Zustands `"disconnected"` erfolgte, wechselt der Zustand zu `"checking"`.

### Der getrennte Zustand

`"disconnected"` ist ein flüchtiger Zustand, der auftritt, wenn die Verbindung zwischen den beiden Peers auf eine Weise scheitert, die die WebRTC-Infrastruktur automatisch korrigieren kann, sobald die Verbindung wieder verfügbar ist. Es ist _kein_ Fehlerzustand. Stattdessen kann man `"disconnected"` als ähnlich `"checking"` betrachten, jedoch mit der zusätzlichen Information, dass die Verbindung funktionierte, aber im Moment nicht funktioniert.

Jeder {{Glossary("user_agent", "Benutzeragent")}} und jede Plattform kann eigene Szenarien haben, die den `"disconnected"`-Zustand auslösen können. Mögliche Ursachen sind:

- Die Netzwerkschnittstelle, die von der Verbindung verwendet wird, ist offline gegangen.
- {{Glossary("STUN", "STUN")}}-Anfragen, die an das Remote-Gerät gesendet werden, bleiben wiederholt unbeantwortet.

Der `"disconnected"`-Zustand kann auch auftreten, wenn der Transport das Prüfen aller vorhandenen Kandidatenpaare abgeschlossen hat und kein funktionierendes Paar gefunden wurde - oder ein gültiges Paar gefunden wurde, aber aufgrund verweigerter Zustimmung, das Paar zu verwenden, abgelehnt wurde. In diesem Szenario fährt der Transport fort, Kandidaten zu sammeln und/oder auf Kandidaten zu warten, die vom Remote-Peer gesendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
