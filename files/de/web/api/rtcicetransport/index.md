---
title: RTCIceTransport
slug: Web/API/RTCIceTransport
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("WebRTC")}}

Die **`RTCIceTransport`**-Schnittstelle bietet Zugriff auf Informationen über die [ICE](/de/docs/Glossary/ICE)-Transportschicht, über die die Daten gesendet und empfangen werden. Dies ist besonders nützlich, wenn Sie Statusinformationen über die Verbindung benötigen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Die `RTCIceTransport`-Schnittstelle erbt Eigenschaften von ihrem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget). Sie bietet auch die folgenden Eigenschaften:_

- [`component`](/de/docs/Web/API/RTCIceTransport/component) {{ReadOnlyInline}}
  - : Die von dem Transport genutzte ICE-Komponente. Der Wert ist einer der Strings aus dem `RTCIceTransport`-aufgezählten Typ: `["RTP"](/de/docs/Glossary/RTP)` oder `"RTSP"`.
- [`gatheringState`](/de/docs/Web/API/RTCIceTransport/gatheringState) {{ReadOnlyInline}}
  - : Ein String, der den aktuellen Sammelstatus des ICE-Agenten angibt: `"new"`, `"gathering"` oder `"complete"`.
- [`role`](/de/docs/Web/API/RTCIceTransport/role) {{ReadOnlyInline}}
  - : Gibt einen String zurück, dessen Wert entweder `"controlling"` oder `"controlled"` ist; dies zeigt an, ob der ICE-Agent derjenige ist, der die endgültige Entscheidung über das zu verwendende Kandidatenpaar trifft oder nicht.
- [`state`](/de/docs/Web/API/RTCIceTransport/state) {{ReadOnlyInline}}
  - : Ein String, der den aktuellen Status des ICE-Agenten angibt. Der Wert von `state` kann verwendet werden, um festzustellen, ob der ICE-Agent eine anfängliche Verbindung mit einem brauchbaren Kandidatenpaar hergestellt hat (`"connected"`), seine endgültige Auswahl an Kandidatenpaaren getroffen hat (`"completed"`) oder sich in einem Fehlerzustand (`"failed"`) befindet, unter anderen Zuständen.

## Instanz-Methoden

_Ebenfalls enthalten sind Methoden von [`EventTarget`](/de/docs/Web/API/EventTarget), der übergeordneten Schnittstelle._

- [`getLocalCandidates()`](/de/docs/Web/API/RTCIceTransport/getLocalCandidates)
  - : Gibt ein Array von [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Objekten zurück, die jeweils einen der ICE-Kandidaten beschreiben, die bisher für das lokale Gerät gesammelt wurden. Dies sind die gleichen Kandidaten, die bereits durch das Senden eines [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignisses an den [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zur Übertragung an das Remote-Peer gesendet wurden.
- [`getLocalParameters()`](/de/docs/Web/API/RTCIceTransport/getLocalParameters)
  - : Gibt ein [`RTCIceParameters`](/de/docs/Web/API/RTCIceParameters)-Objekt zurück, das die ICE-Parameter beschreibt, die durch einen Aufruf der Methode [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) festgelegt wurden. Gibt `null` zurück, wenn noch keine Parameter empfangen wurden.
- [`getRemoteCandidates()`](/de/docs/Web/API/RTCIceTransport/getRemoteCandidates)
  - : Gibt ein Array von [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Objekten zurück, eines für jeden der ICE-Kandidaten des Remote-Geräts, die vom lokalen Ende der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) empfangen und dem ICE durch Aufruf von [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) geliefert wurden.
- [`getRemoteParameters()`](/de/docs/Web/API/RTCIceTransport/getRemoteParameters)
  - : Gibt ein [`RTCIceParameters`](/de/docs/Web/API/RTCIceParameters)-Objekt zurück, das die ICE-Parameter für das Remote-Gerät enthält, wie sie durch einen Aufruf von [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) festgelegt wurden. Wenn `setRemoteDescription()` noch nicht aufgerufen wurde, ist der Rückgabewert `null`.
- [`getSelectedCandidatePair()`](/de/docs/Web/API/RTCIceTransport/getSelectedCandidatePair)
  - : Gibt ein [`RTCIceCandidatePair`](/de/docs/Web/API/RTCIceCandidatePair)-Objekt zurück, das die beiden Kandidaten identifiziert - einen für jedes Ende der Verbindung -, die bisher ausgewählt wurden. Es ist möglich, dass später ein besseres Paar gefunden und ausgewählt wird; wenn Sie dies verfolgen müssen, beobachten Sie das [`selectedcandidatepairchange`](/de/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event)-Ereignis. Wenn noch kein Kandidatenpaar ausgewählt wurde, ist der Rückgabewert `null`.

## Ereignisse

Hören Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener der `oneventname`-Eigenschaft dieser Schnittstelle zuweisen.

- [`gatheringstatechange`](/de/docs/Web/API/RTCIceTransport/gatheringstatechange_event)
  - : Wird an das `RTCIceTransport`-Objekt gesendet, um anzuzeigen, dass sich der Wert der [`gatheringState`](/de/docs/Web/API/RTCIceTransport/gatheringState)-Eigenschaft geändert hat, was auf eine Änderung im Verhandlungsprozess der ICE-Kandidaten dieses Transports hinweist.
    Auch über die [`ongatheringstatechange`](/de/docs/Web/API/RTCIceTransport/gatheringstatechange_event)-Ereignishandler-Eigenschaft verfügbar.
- [`selectedcandidatepairchange`](/de/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event)
  - : Wird an das `RTCIceTransport` gesendet, wenn ein neues, besseres Paar von Kandidaten ausgewählt wurde, um die Konnektivität zwischen den beiden Peers zu beschreiben. Dies geschieht während der Aushandlung oder Neuverhandlung, auch nach einem ICE-Neustart, der die vorhandenen `RTCIceTransport`-Objekte wiederverwendet. Das aktuelle Kandidatenpaar kann mithilfe von [`getSelectedCandidatePair()`](/de/docs/Web/API/RTCIceTransport/getSelectedCandidatePair) abgerufen werden.
    Ebenfalls verfügbar über die [`onselectedcandidatepairchange`](/de/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event)-Ereignishandler-Eigenschaft.
- [`statechange`](/de/docs/Web/API/RTCIceTransport/statechange_event)
  - : Wird an die `RTCIceTransport`-Instanz gesendet, wenn sich der Wert der [`state`](/de/docs/Web/API/RTCIceTransport/state)-Eigenschaft geändert hat, was darauf hinweist, dass sich der Sammlungsvorgang von ICE geändert hat.
    Auch über die [`onstatechange`](/de/docs/Web/API/RTCIceTransport/statechange_event)-Ereignishandler-Eigenschaft verfügbar.

## Beispiele

tbd

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
