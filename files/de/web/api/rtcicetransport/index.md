---
title: RTCIceTransport
slug: Web/API/RTCIceTransport
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("WebRTC")}}

Die **`RTCIceTransport`** Schnittstelle bietet Zugriff auf Informationen über die {{Glossary("ICE", "ICE")}}-Transportschicht, über die Daten gesendet und empfangen werden. Dies ist besonders nützlich, wenn Sie Zustandsinformationen über die Verbindung abrufen müssen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Die `RTCIceTransport`-Schnittstelle erbt Eigenschaften von ihrem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget). Sie bietet auch die folgenden Eigenschaften:_

- [`component`](/de/docs/Web/API/RTCIceTransport/component) {{ReadOnlyInline}}
  - : Die von der Transportverbindung verwendete ICE-Komponente. Der Wert ist einer der Strings aus dem `RTCIceTransport`-Enumerationstyp: `{{Glossary("RTP", "RTP")}}` oder `"RTSP"`.
- [`gatheringState`](/de/docs/Web/API/RTCIceTransport/gatheringState) {{ReadOnlyInline}}
  - : Ein String, der den aktuellen Sammelzustand des ICE-Agenten angibt: `"new"`, `"gathering"` oder `"complete"`.
- [`role`](/de/docs/Web/API/RTCIceTransport/role) {{ReadOnlyInline}}
  - : Gibt einen String zurück, dessen Wert entweder `"controlling"` oder `"controlled"` ist; dies zeigt an, ob der ICE-Agent derjenige ist, der die endgültige Entscheidung über das zu verwendende Kandidatenpaar trifft oder nicht.
- [`state`](/de/docs/Web/API/RTCIceTransport/state) {{ReadOnlyInline}}
  - : Ein String, der angibt, in welchem Zustand sich der ICE-Agent derzeit befindet. Der Wert von `state` kann verwendet werden, um festzustellen, ob der ICE-Agent eine erste Verbindung mit einem geeigneten Kandidatenpaar hergestellt hat (`"connected"`), seine endgültige Auswahl von Kandidatenpaaren getroffen hat (`"completed"`) oder sich in einem Fehlerzustand befindet (`"failed"`), unter anderen Zuständen.

## Instanz-Methoden

_Beinhaltet auch Methoden von [`EventTarget`](/de/docs/Web/API/EventTarget), der Elternschnittstelle._

- [`getLocalCandidates()`](/de/docs/Web/API/RTCIceTransport/getLocalCandidates)
  - : Gibt ein Array von [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Objekten zurück, von denen jedes einen der ICE-Kandidaten beschreibt, die bisher für das lokale Gerät gesammelt wurden. Dies sind dieselben Kandidaten, die bereits an den entfernten Partner gesendet wurden, indem ein [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zur Übertragung gesendet wurde.
- [`getLocalParameters()`](/de/docs/Web/API/RTCIceTransport/getLocalParameters)
  - : Gibt ein [`RTCIceParameters`](/de/docs/Web/API/RTCIceParameters)-Objekt zurück, das die ICE-Parameter beschreibt, die durch einen Aufruf der Methode [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) festgelegt wurden. Gibt `null` zurück, wenn bisher keine Parameter empfangen wurden.
- [`getRemoteCandidates()`](/de/docs/Web/API/RTCIceTransport/getRemoteCandidates)
  - : Gibt ein Array von [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Objekten zurück, jeweils eines für jeden ICE-Kandidaten des entfernten Geräts, der vom lokalen Ende der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) empfangen und an ICE übermittelt wurde, indem [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) aufgerufen wird.
- [`getRemoteParameters()`](/de/docs/Web/API/RTCIceTransport/getRemoteParameters)
  - : Gibt ein [`RTCIceParameters`](/de/docs/Web/API/RTCIceParameters)-Objekt zurück, das die ICE-Parameter für das entfernte Gerät enthält, wie sie durch einen Aufruf von [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) festgelegt wurden. Wenn `setRemoteDescription()` noch nicht aufgerufen wurde, ist der Rückgabewert `null`.
- [`getSelectedCandidatePair()`](/de/docs/Web/API/RTCIceTransport/getSelectedCandidatePair)
  - : Gibt ein [`RTCIceCandidatePair`](/de/docs/Web/API/RTCIceCandidatePair)-Objekt zurück, das die beiden Kandidaten identifiziert - einen für jedes Ende der Verbindung -, die bisher ausgewählt wurden. Es ist möglich, dass später ein besseres Paar gefunden und ausgewählt wird; wenn Sie dies im Auge behalten möchten, beobachten Sie das [`selectedcandidatepairchange`](/de/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event)-Ereignis. Wenn noch kein Kandidatenpaar ausgewählt wurde, ist der Rückgabewert `null`.

## Ereignisse

Diese Ereignisse können mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) überwacht werden oder indem ein Ereignislistener auf die `oneventname`-Eigenschaft dieser Schnittstelle gesetzt wird.

- [`gatheringstatechange`](/de/docs/Web/API/RTCIceTransport/gatheringstatechange_event)
  - : Wird an das `RTCIceTransport`-Objekt gesendet, um anzuzeigen, dass sich der Wert der [`gatheringState`](/de/docs/Web/API/RTCIceTransport/gatheringState)-Eigenschaft geändert hat, was auf eine Änderung im ICE-Kandidaten-Aushandlungsprozess dieses Transports hinweist. Auch über die [`ongatheringstatechange`](/de/docs/Web/API/RTCIceTransport/gatheringstatechange_event)-Ereignislistener-Eigenschaft verfügbar.
- [`selectedcandidatepairchange`](/de/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event)
  - : Wird an das `RTCIceTransport` gesendet, wenn ein neues, besseres Paar von Kandidaten ausgewählt wurde, um die Konnektivität zwischen den beiden Partnern zu beschreiben. Dies geschieht während der Aushandlung oder Neuaushandlung, auch nach einem ICE-Neustart, bei dem die bestehenden `RTCIceTransport`-Objekte wiederverwendet werden. Das aktuelle Kandidatenpaar kann mit [`getSelectedCandidatePair()`](/de/docs/Web/API/RTCIceTransport/getSelectedCandidatePair) abgerufen werden. Auch über die [`onselectedcandidatepairchange`](/de/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event)-Ereignislistener-Eigenschaft verfügbar.
- [`statechange`](/de/docs/Web/API/RTCIceTransport/statechange_event)
  - : Wird an die `RTCIceTransport`-Instanz gesendet, wenn sich der Wert der [`state`](/de/docs/Web/API/RTCIceTransport/state)-Eigenschaft geändert hat, was darauf hinweist, dass sich der Zustand des ICE-Sammelprozesses geändert hat. Auch über die [`onstatechange`](/de/docs/Web/API/RTCIceTransport/statechange_event)-Ereignislistener-Eigenschaft verfügbar.

## Beispiele

tbd

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
