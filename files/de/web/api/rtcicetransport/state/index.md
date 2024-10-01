---
title: "RTCIceTransport: state-Eigenschaft"
short-title: state
slug: Web/API/RTCIceTransport/state
l10n:
  sourceCommit: 8f3daa06271fa91d351d40ee59c2f07377025108
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`state`**-Eigenschaft der [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)-Schnittstelle gibt den aktuellen Zustand des ICE-Transports zurück, sodass Sie den Stand der ICE-Erfassung ermitteln können, in dem sich der ICE-Agent derzeit befindet.

Dies unterscheidet sich vom [`gatheringState`](/de/docs/Web/API/RTCIceTransport/gatheringState), der nur anzeigt, ob die ICE-Erfassung derzeit im Gange ist oder nicht. Es unterscheidet sich auch von [`RTCPeerConnection.connectionState`](/de/docs/Web/API/RTCPeerConnection/connectionState), der die Zustände aller von jedem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) und jedem [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) innerhalb der gesamten Verbindung verwendeten [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) aggregiert.

## Wert

Ein String, dessen Wert einer der folgenden ist:

- `"new"`
  - : Der [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) sammelt derzeit lokale Kandidaten oder wartet darauf, dass das Remote-Gerät beginnt, die Remote-Kandidaten zu übertragen, oder beides. In diesem Zustand hat das Prüfen von Kandidaten, um nach akzeptablen zu suchen, noch nicht begonnen.
- `"checking"`
  - : Mindestens ein Remote-Kandidat wurde empfangen, und der `RTCIceTransport` hat damit begonnen, Paarungen von Remote- und lokalen Kandidaten zu untersuchen, um zu versuchen, geeignete Paare zu identifizieren, die zur Herstellung einer Verbindung verwendet werden könnten. Beachten Sie, dass die Erfassung lokaler Kandidaten möglicherweise noch im Gange ist und dass auch das Remote-Gerät möglicherweise weiterhin eigene Kandidaten erfasst.
- `"connected"`

  - : Ein geeignetes Kandidatenpaar wurde gefunden und ausgewählt, und der `RTCIceTransport` hat die beiden Peers mithilfe dieses Paares verbunden. Allerdings gibt es noch weitere Kandidatenpaarungen zu berücksichtigen, und möglicherweise sind auf einem oder beiden Geräten noch Erfassungsprozesse im Gange.

    Der Transport kann vom Zustand `"connected"` in den Zustand `"checking"` zurückwechseln, wenn ein Peer die Zustimmung zur Verwendung des ausgewählten Kandidatenpaares widerruft, und kann in den Zustand `"disconnected"` zurückkehren, wenn keine Kandidaten mehr zum Prüfen übrig sind, während ein oder beide Clients weiterhin Kandidaten erfassen.

- `"completed"`
  - : Der Transport hat das Sammeln lokaler Kandidaten beendet und eine Benachrichtigung vom Remote-Peer erhalten, dass keine weiteren Kandidaten gesendet werden. Außerdem wurden alle Kandidatenpaare berücksichtigt und ein Paar zur Verwendung ausgewählt. Wenn bei allen erfolgreichen Kandidatenpaaren die Zustimmungsprüfungen fehlschlagen, ändert sich der Transportzustand in `"failed"`.
- `"disconnected"`
  - : Der ICE-Agent hat festgestellt, dass die Konnektivität für diesen [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) verloren gegangen ist. Dies ist kein Fehlerzustand (das wäre `"failed"`). Ein Wert von `"disconnected"` bedeutet, dass ein vorübergehendes Problem aufgetreten ist, das die Verbindung unterbrochen hat, sich jedoch automatisch beheben sollte, ohne dass Ihr Code eingreifen muss. Siehe [Der Zustands-Disconnected](#der_zustands-disconnected) für weitere Details.
- `"failed"`
  - : Der `RTCIceTransport` hat den Erfassungsprozess abgeschlossen, die "Keine weiteren Kandidaten"-Benachrichtigung vom Remote-Peer erhalten und hat die Prüfung der Kandidatenpaare abgeschlossen, ohne ein Paar zu finden, das sowohl gültig ist als auch für das eine Zustimmung erteilt werden kann. _Dies ist ein Endzustand, der anzeigt, dass die Verbindung nicht hergestellt oder aufrechterhalten werden kann._
- `"closed"`
  - : Der Transport wurde heruntergefahren und reagiert nicht mehr auf STUN-Anfragen.

## Verwendungshinweise

Wenn ein ICE-Neustart erfolgt, wird der Prozess der Kandidatenerfassung und Konnektivitätsprüfung erneut gestartet; dies führt zu einem Übergang vom Zustand `"connected"`, wenn der Neustart im Zustand `"completed"` erfolgt ist. Wenn der Neustart während eines vorübergehenden `"disconnected"`-Zustandes erfolgt ist, wechselt der Zustand zu `"checking"`.

### Der Zustands-Disconnected

`"disconnected"` ist ein vorübergehender Zustand, der auftritt, wenn die Verbindung zwischen den beiden Peers in einer Weise fehlschlägt, dass die WebRTC-Infrastruktur das Problem automatisch beheben kann, sobald die Verbindung wieder verfügbar ist. Es ist _kein_ Fehlerzustand. Stattdessen kann man `"disconnected"` als ähnlich zu `"checking"` betrachten, mit der zusätzlichen Information, dass die Verbindung zuvor funktionierte, jetzt jedoch nicht mehr.

Jeder {{Glossary("user_agent", "Benutzeragent")}} und jede Plattform kann eigene Szenarien haben, die den `"disconnected"`-Zustand auslösen können. Mögliche Ursachen sind:

- Die Netzwerkschnittstelle, die von der Verbindung verwendet wird, ist offline gegangen.
- {{Glossary("STUN", "STUN")}}-Anfragen, die an das Remote-Gerät gesendet werden, sind wiederholt unbeantwortet geblieben.

Der `"disconnected"`-Zustand kann auch auftreten, wenn der Transport alle vorhandenen Kandidatenpaare überprüft hat und kein funktionierendes Paar gefunden wurde – oder ein gültiges Paar gefunden, aber die Zustimmung zur Verwendung des Paares verweigert wurde. In diesem Szenario sammelt der Transport weiterhin Kandidaten und/oder wartet darauf, dass Kandidaten vom Remote-Peer gesendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
