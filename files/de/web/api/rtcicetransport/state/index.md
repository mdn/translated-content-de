---
title: "RTCIceTransport: state-Eigenschaft"
short-title: state
slug: Web/API/RTCIceTransport/state
l10n:
  sourceCommit: 8f3daa06271fa91d351d40ee59c2f07377025108
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`state`**-Eigenschaft des [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) Interfaces gibt den aktuellen Zustand des ICE-Transports zurück, sodass Sie den Stand der ICE-Gewinnung feststellen können, in dem sich der ICE-Agent derzeit befindet.

Dies unterscheidet sich vom [`gatheringState`](/de/docs/Web/API/RTCIceTransport/gatheringState), der nur angibt, ob die ICE-Gewinnung derzeit im Gange ist oder nicht. Es unterscheidet sich auch von [`RTCPeerConnection.connectionState`](/de/docs/Web/API/RTCPeerConnection/connectionState), der die Zustände aller [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) zusammenfasst, die von jedem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) und jedem [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) in der gesamten Verbindung verwendet werden.

## Wert

Ein String, dessen Wert einer der folgenden ist:

- `"new"`
  - : Die [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) ist derzeit damit beschäftigt, lokale Kandidaten zu sammeln oder wartet darauf, dass das entfernte Gerät beginnt, die Remote-Kandidaten zu übertragen, oder beides. In diesem Zustand hat das Überprüfen von Kandidaten, um festzustellen, welche möglicherweise akzeptabel sind, noch nicht begonnen.
- `"checking"`
  - : Mindestens ein Remote-Kandidat wurde empfangen, und die `RTCIceTransport` hat damit begonnen, Paarungen von Remote- und lokalen Kandidaten zu prüfen, um zu versuchen, geeignete Paare zu identifizieren, die zur Herstellung einer Verbindung verwendet werden könnten. Beachten Sie, dass die Sammlung lokaler Kandidaten möglicherweise noch im Gange ist und dass das entfernte Gerät möglicherweise ebenfalls noch eigene Kandidaten sammelt.
- `"connected"`

  - : Ein geeignetes Kandidatenpaar wurde gefunden und ausgewählt, und die `RTCIceTransport` hat die beiden Peers mit diesem Paar verbunden. Es gibt jedoch immer noch Kandidatenpaarungen zu berücksichtigen, und es kann immer noch eine Sammlung auf einem oder beiden Geräten im Gange sein.

    Der Transport kann vom `"connected"`-Zustand zum `"checking"`-Zustand zurückkehren, wenn einer der Peers beschließt, die Zustimmung zur Verwendung des ausgewählten Kandidatenpaares zu widerrufen, und kann zu `"disconnected"` zurückkehren, wenn keine Kandidaten mehr zu überprüfen sind, aber einer oder beide Clients immer noch Kandidaten sammeln.

- `"completed"`
  - : Der Transport hat die Sammlung lokaler Kandidaten abgeschlossen und eine Benachrichtigung vom Remote-Peer erhalten, dass keine weiteren Kandidaten gesendet werden. Darüber hinaus wurden alle Kandidatenpaare in Betracht gezogen und ein Paar zur Verwendung ausgewählt. Wenn die Zustimmungsprüfungen bei allen erfolgreichen Kandidatenpaaren fehlschlagen, ändert sich der Transportzustand auf `"failed"`.
- `"disconnected"`
  - : Der ICE-Agent hat festgestellt, dass die Konnektivität für dieses [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) verloren gegangen ist. Dies ist kein Fehlzustand (das wäre `"failed"`). Ein Wert von `"disconnected"` bedeutet, dass ein vorübergehendes Problem aufgetreten ist, das die Verbindung unterbrochen hat, sich jedoch automatisch beheben sollte, ohne dass Ihr Code etwas unternehmen muss. Siehe [Der getrennte Zustand](#der_getrennte_zustand) für weitere Details.
- `"failed"`
  - : Die `RTCIceTransport` hat den Erfassungsprozess abgeschlossen, hat die Benachrichtigung "keine weiteren Kandidaten" vom entfernten Peer erhalten und hat Paarungen von Kandidaten abgeschlossen, ohne ein Paar erfolgreich zu finden, das sowohl gültig ist als auch für das Zustimmung erlangt werden kann. _Dies ist ein Endzustand, der anzeigt, dass die Verbindung nicht hergestellt oder aufrechterhalten werden kann._
- `"closed"`
  - : Der Transport wurde heruntergefahren und reagiert nicht mehr auf STUN-Anfragen.

## Verwendungshinweise

Wenn ein ICE-Neustart erfolgt, wird der Prozess der Kandidatensammlung und Konnektivitätsprüfung erneut gestartet; dies führt zu einem Übergang vom `"connected"`-Zustand, wenn der Neustart im Zustand `"completed"` erfolgte. Wenn der Neustart während eines vorübergehenden `"disconnected"`-Zustands erfolgte, ändert sich der Zustand zu `"checking"`.

### Der getrennte Zustand

`"disconnected"` ist ein vorübergehender Zustand, der auftritt, wenn die Verbindung zwischen den beiden Peers auf eine Weise fehlschlägt, die die WebRTC-Infrastruktur automatisch korrigieren kann, sobald die Verbindung wieder verfügbar ist. Es ist _kein_ Fehlzustand. Stattdessen können Sie `"disconnected"` als ähnlich wie `"checking"` betrachten, jedoch mit der zusätzlichen Information, dass die Verbindung funktionierte, im Moment jedoch nicht funktioniert.

Jeder [Benutzeragent](/de/docs/Glossary/user_agent) und jede Plattform kann eigene Szenarien haben, die den `"disconnected"`-Zustand auslösen können. Mögliche Ursachen sind:

- Die Netzwerkschnittstelle, die von der Verbindung verwendet wird, ist offline gegangen.
- [STUN](/de/docs/Glossary/STUN)-Anfragen, die an das Remote-Gerät gesendet werden, wurden wiederholt nicht beantwortet.

Der `"disconnected"`-Zustand kann auch auftreten, wenn der Transport das Prüfen aller bestehenden Kandidatenpaare abgeschlossen hat und kein funktionierendes Paar gefunden wurde - oder ein gültiges Paar gefunden wurde, jedoch die Zustimmung zur Verwendung des Paares verweigert wurde. In diesem Szenario setzt der Transport die Sammlung von Kandidaten fort und/oder wartet darauf, dass Kandidaten vom entfernten Peer gesendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
