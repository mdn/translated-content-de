---
title: RTCIceTransport
slug: Web/API/RTCIceTransport
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("WebRTC")}}

Die **`RTCIceTransport`**-Schnittstelle bietet Zugriff auf Informationen über die {{Glossary("ICE")}}-Transportschicht, über die die Daten gesendet und empfangen werden. Dies ist besonders nützlich, wenn Sie auf Statusinformationen über die Verbindung zugreifen müssen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Die `RTCIceTransport`-Schnittstelle erbt Eigenschaften von ihrem Elternteil, {{domxref("EventTarget")}}. Sie bietet außerdem die folgenden Eigenschaften:_

- {{domxref("RTCIceTransport.component", "component")}} {{ReadOnlyInline}}
  - : Die durch den Transport verwendete ICE-Komponente. Der Wert ist einer der Strings aus dem `RTCIceTransport`-Aufzählungstyp: `{{Glossary("RTP", '"RTP"')}}` oder `"RTSP"`.
- {{domxref("RTCIceTransport.gatheringState", "gatheringState")}} {{ReadOnlyInline}}
  - : Ein String, der angibt, welcher aktuelle Sammelstatus des ICE-Agenten vorliegt: `"new"`, `"gathering"` oder `"complete"`.
- {{domxref("RTCIceTransport.role", "role")}} {{ReadOnlyInline}}
  - : Gibt einen String zurück, dessen Wert entweder `"controlling"` oder `"controlled"` ist; dies zeigt an, ob der ICE-Agent derjenige ist, der die endgültige Entscheidung über das zu verwendende Kandidatenpaar trifft oder nicht.
- {{domxref("RTCIceTransport.state", "state")}} {{ReadOnlyInline}}
  - : Ein String, der den aktuellen Status des ICE-Agenten angibt. Der Wert von `state` kann verwendet werden, um festzustellen, ob der ICE-Agent eine anfängliche Verbindung mit einem geeigneten Kandidatenpaar hergestellt hat (`"connected"`), seine endgültige Auswahl der Kandidatenpaare getroffen hat (`"completed"`) oder sich in einem Fehlerzustand befindet (`"failed"`) unter anderen Zuständen.

## Instanz-Methoden

_Bietet auch Methoden von {{domxref("EventTarget")}}, der übergeordneten Schnittstelle._

- {{domxref("RTCIceTransport.getLocalCandidates", "getLocalCandidates()")}}
  - : Gibt ein Array von {{domxref("RTCIceCandidate")}}-Objekten zurück, die jeweils einen der ICE-Kandidaten beschreiben, die bisher für das lokale Gerät gesammelt wurden. Dies sind dieselben Kandidaten, die bereits an den Remote-Peer gesendet wurden, indem ein {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}}-Ereignis an das {{domxref("RTCPeerConnection")}} zur Übertragung gesendet wurde.
- {{domxref("RTCIceTransport.getLocalParameters", "getLocalParameters()")}}
  - : Gibt ein {{domxref("RTCIceParameters")}}-Objekt zurück, das die ICE-Parameter beschreibt, die durch einen Aufruf der Methode {{domxref("RTCPeerConnection.setLocalDescription()")}} festgelegt wurden. Gibt `null` zurück, wenn die Parameter noch nicht empfangen wurden.
- {{domxref("RTCIceTransport.getRemoteCandidates", "getRemoteCandidates()")}}
  - : Gibt ein Array von {{domxref("RTCIceCandidate")}}-Objekten zurück, eines für jeden der ICE-Kandidaten des Remote-Geräts, die vom lokalen Ende des {{domxref("RTCPeerConnection")}} empfangen und durch Aufrufen von {{domxref("RTCPeerConnection.addIceCandidate()", "addIceCandidate()")}} an ICE übergeben wurden.
- {{domxref("RTCIceTransport.getRemoteParameters", "getRemoteParameters()")}}
  - : Gibt ein {{domxref("RTCIceParameters")}}-Objekt zurück, das die ICE-Parameter für das Remote-Gerät enthält, wie sie durch einen Aufruf von {{domxref("RTCPeerConnection.setRemoteDescription()")}} festgelegt wurden. Wenn `setRemoteDescription()` noch nicht aufgerufen wurde, ist der Rückgabewert `null`.
- {{domxref("RTCIceTransport.getSelectedCandidatePair", "getSelectedCandidatePair()")}}
  - : Gibt ein {{domxref("RTCIceCandidatePair")}}-Objekt zurück, das die zwei Kandidaten identifiziert—einen für jedes Ende der Verbindung—die bisher ausgewählt wurden. Es ist möglich, dass später ein besseres Paar gefunden und ausgewählt wird; wenn Sie dies verfolgen müssen, achten Sie auf das {{domxref("RTCIceTransport.selectedcandidatepairchange_event", "selectedcandidatepairchange")}}-Ereignis. Wenn noch kein Kandidatenpaar ausgewählt wurde, ist der Rückgabewert `null`.

## Ereignisse

Hören Sie diese Ereignisse mit {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder durch Zuweisen eines Ereignis-Listeners zur `oneventname`-Eigenschaft dieser Schnittstelle ab.

- {{domxref("RTCIceTransport.gatheringstatechange_event", "gatheringstatechange")}}
  - : Wird an das `RTCIceTransport`-Objekt gesendet, um anzuzeigen, dass sich der Wert der {{domxref("RTCIceTransport.gatheringState", "gatheringState")}}-Eigenschaft geändert hat, was eine Änderung im ICE-Kandidatenaushandlungsprozess dieses Transports anzeigt.
    Auch über die {{domxref("RTCIceTransport.gatheringstatechange_event", "ongatheringstatechange")}}-Ereignishandler-Eigenschaft verfügbar.
- {{domxref("RTCIceTransport.selectedcandidatepairchange_event", "selectedcandidatepairchange")}}
  - : Wird an das `RTCIceTransport` gesendet, wenn ein neues, besseres Paar von Kandidaten ausgewählt wurde, um die Konnektivität zwischen den beiden Peers zu beschreiben. Dies tritt während der Verhandlung oder Neuaushandlung auf, auch nach einem ICE-Neustart, der die vorhandenen `RTCIceTransport`-Objekte wiederverwendet. Das aktuelle Kandidatenpaar kann mit {{domxref("RTCIceTransport.getSelectedCandidatePair", "getSelectedCandidatePair()")}} abgerufen werden.
    Auch über die {{domxref("RTCIceTransport.selectedcandidatepairchange_event", "onselectedcandidatepairchange")}}-Ereignishandler-Eigenschaft verfügbar.
- {{domxref("RTCIceTransport.statechange_event", "statechange")}}
  - : Wird an die `RTCIceTransport`-Instanz gesendet, wenn sich der Wert der {{domxref("RTCIceTransport.state", "state")}}-Eigenschaft geändert hat, was anzeigt, dass sich der ICE-Sammelprozess im Zustand geändert hat.
    Auch über die {{domxref("RTCIceTransport.statechange_event", "onstatechange")}}-Ereignishandler-Eigenschaft verfügbar.

## Beispiele

tbd

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
