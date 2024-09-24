---
title: "RTCIceTransport: Zustandseigenschaft"
short-title: Zustand
slug: Web/API/RTCIceTransport/state
l10n:
  sourceCommit: 8f3daa06271fa91d351d40ee59c2f07377025108
---

{{APIRef("WebRTC")}}

Die **`state`**-Eigenschaft im Nur-Lesen-Modus des {{domxref("RTCIceTransport")}}-Interfaces gibt den aktuellen Zustand des ICE-Transports zurück, sodass Sie den Zustand des ICE-Sammelns ermitteln können, in dem der ICE-Agent momentan arbeitet.

Dies unterscheidet sich von {{domxref("RTCIceTransport.gatheringState", "gatheringState")}}, welches nur anzeigt, ob das ICE-Sammeln derzeit im Gange ist oder nicht. Es unterscheidet sich auch von {{domxref("RTCPeerConnection.connectionState")}}, das die Zustände über jeden {{domxref("RTCIceTransport")}}, der von jedem {{domxref("RTCRtpSender")}} und jedem {{domxref("RTCRtpReceiver")}} in der gesamten Verbindung verwendet wird, aggregiert.

## Wert

Ein String, dessen Wert einer der folgenden ist:

- `"new"`
  - : Der {{domxref("RTCIceTransport")}} sammelt derzeit lokale Kandidaten oder wartet darauf, dass das entfernte Gerät beginnt, die entfernten Kandidaten zu übertragen, oder beides. In diesem Zustand hat die Überprüfung der Kandidaten, um nach akzeptablen zu suchen, noch nicht begonnen.
- `"checking"`
  - : Mindestens ein entfernter Kandidat wurde empfangen, und der `RTCIceTransport` hat begonnen, Paarungen von entfernten und lokalen Kandidaten zu untersuchen, um zu versuchen, brauchbare Paare zu identifizieren, die zur Herstellung einer Verbindung verwendet werden könnten. Bedenken Sie, dass das Sammeln lokaler Kandidaten noch im Gange sein kann und ebenso das entfernte Gerät möglicherweise noch eigene Kandidaten sammelt.
- `"connected"`

  - : Es wurde ein brauchbares Kandidatenpaar gefunden und ausgewählt, und der `RTCIceTransport` hat die beiden Peers mit diesem Paar verbunden. Es gibt jedoch noch Kandidatenpaare zu berücksichtigen, und es kann auf einem oder beiden Geräten noch Sammeln im Gange sein.

    Der Transport kann vom Zustand `"connected"` in den Zustand `"checking"` zurückgesetzt werden, wenn eine der beiden Peers die Zustimmung zur Verwendung des ausgewählten Kandidatenpaars widerruft, und es kann in `"disconnected"` zurückfallen, wenn keine Kandidaten mehr zu überprüfen sind, aber ein oder beide Clients noch Kandidaten sammeln.

- `"completed"`
  - : Der Transport hat das Sammeln lokaler Kandidaten abgeschlossen und eine Benachrichtigung vom entfernten Peer erhalten, dass keine weiteren Kandidaten gesendet werden. Darüber hinaus wurden alle Kandidatenpaare geprüft, und ein Paar wurde zur Verwendung ausgewählt. Wenn die Zustimmungstests bei allen erfolgreichen Kandidatenpaaren fehlschlagen, ändert sich der Transportzustand in `"failed"`.
- `"disconnected"`
  - : Der ICE-Agent hat festgestellt, dass die Konnektivität für diesen {{domxref("RTCIceTransport")}} verloren gegangen ist. Dies ist kein Fehlerzustand (das wäre `"failed"`). Ein Wert von `"disconnected"` bedeutet, dass ein vorübergehendes Problem aufgetreten ist, das die Verbindung unterbrochen hat, sich jedoch automatisch ohne Einwirkung Ihres Codes beheben sollte. Siehe [Der Zustand disconnected](#der_zustand_disconnected) für weitere Details.
- `"failed"`
  - : Der `RTCIceTransport` hat den Sammelprozess abgeschlossen, die Benachrichtigung "keine weiteren Kandidaten" vom entfernten Peer erhalten und das Überprüfen der Kandidatenpaare ohne Erfolg abgeschlossen, ein Paar zu finden, das sowohl gültig ist als auch für das die Zustimmung erlangt werden kann. _Dies ist ein Endzustand, was bedeutet, dass die Verbindung weder hergestellt noch aufrechterhalten werden kann._
- `"closed"`
  - : Der Transport wurde heruntergefahren und reagiert nicht mehr auf STUN-Anfragen.

## Gebrauchshinweise

Wenn ein ICE-Neustart erfolgt, wird der Prozess des Sammelns von Kandidaten und der Konnektivitätsprüfung erneut gestartet; dies führt zu einem Übergang vom Zustand `"connected"`, wenn der Neustart erfolgte, während der Zustand `"completed"` war. Falls der Neustart während eines vorübergehenden Zustands `"disconnected"` stattfand, wechselt der Zustand zu `"checking"`.

### Der Zustand disconnected

`"disconnected"` ist ein vorübergehender Zustand, der auftritt, wenn die Verbindung zwischen den beiden Peers in einer Weise fehlschlägt, die die WebRTC-Infrastruktur automatisch korrigieren kann, sobald die Verbindung wieder verfügbar ist. Es ist _kein_ Fehlerzustand. Stattdessen können Sie sich `"disconnected"` als ähnlich zum Zustand `"checking"` vorstellen, aber mit der zusätzlichen Information, dass die Verbindung funktioniert hat, aber momentan nicht mehr funktioniert.

Jeder {{Glossary("user agent")}} und jede Plattform kann ihre eigenen Szenarien haben, die den Zustand `"disconnected"` auslösen können. Mögliche Ursachen sind:

- Die Netzwerkschnittstelle, die von der Verbindung verwendet wird, ist offline gegangen.
- {{Glossary("STUN")}}-Anfragen, die an das entfernte Gerät gesendet werden, sind wiederholt unbeantwortet geblieben.

Der Zustand `"disconnected"` kann auch auftreten, wenn der Transport das Überprüfen aller vorhandenen Kandidatenpaare abgeschlossen hat und kein Paar gefunden wurde, das funktioniert – oder ein gültiges Paar gefunden wurde, das jedoch aufgrund von verweigerter Zustimmung zur Nutzung abgelehnt wurde. In diesem Szenario setzt der Transport das Sammeln von Kandidaten und/oder das Warten auf vom entfernten Peer gesendete Kandidaten fort.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
