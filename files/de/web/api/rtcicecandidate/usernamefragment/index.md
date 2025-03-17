---
title: "RTCIceCandidate: usernameFragment-Eigenschaft"
short-title: usernameFragment
slug: Web/API/RTCIceCandidate/usernameFragment
l10n:
  sourceCommit: cb736d8b5c6b3976fd3e8d3f215fbef25d61ad7a
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`usernameFragment`**-Eigenschaft im [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Interface ist ein String, der den Benutzerfragment ("ufrag") angibt, der eine einzelne ICE-Interaktionssitzung eindeutig identifiziert.

Dieser Wert wird mit der `usernameFragment`-Eigenschaft im `candidateInfo`-Optionsobjekt angegeben, das an den [`RTCIceCandidate()`](/de/docs/Web/API/RTCIceCandidate/RTCIceCandidate)-Konstruktor übergeben wird. Wenn Sie den Konstruktor mit einem m-line-String anstelle des Optionsobjekts aufrufen, wird der Wert von `usernameFragment` aus dem angegebenen Kandidaten-m-line-String extrahiert.

Beachten Sie, dass 24 Bits des Benutzerfragments vom Browser zufällig sein müssen. Siehe [Randomisierung](#randomisierung) unten für Details.

## Wert

Ein String, der das Benutzerfragment enthält (im Allgemeinen in Kurzform als "ufrag" oder "ice-ufrag" bezeichnet), das zusammen mit dem ICE-Passwort ("ice-pwd") eine einzelne laufende ICE-Interaktion eindeutig identifiziert, einschließlich der Kommunikation mit dem {{Glossary("STUN", "STUN")}}-Server. Der String darf bis zu 256 Zeichen lang sein und hat keinen Standardwert.

### Randomisierung

Mindestens 24 Bits des Textes im `ufrag` müssen zu Beginn der ICE-Sitzung vom ICE-Layer zufällig ausgewählt werden. Die Details, welche Bits zufällig sind und was der Rest des `ufrag`-Textes ist, bleiben der Entscheidung der Browser-Implementierung überlassen. Zum Beispiel könnte ein Browser sich entscheiden, immer ein 24-Zeichen langes `ufrag` zu verwenden, bei dem Bit 4 jedes Zeichens zufällig zwischen 0 und 1 ausgewählt wird. Ein weiteres Beispiel: Er könnte einen benutzerdefinierten String nehmen und drei 8-Bit-Zufallsbytes anhängen. Oder vielleicht ist jedes Zeichen vollständig zufällig.

## Nutzungshinweise

ICE verwendet das `usernameFragment` und das Passwort, um die Integrität der Nachrichten sicherzustellen. Dies vermeidet Übersprechen zwischen mehreren laufenden ICE-Sitzungen, aber vor allem hilft es, ICE-Transaktionen (und alles in WebRTC im Allgemeinen) gegen Angriffe abzusichern, die versuchen könnten, sich in einen ICE-Austausch einzufügen.

> [!NOTE]
> Es gibt keine API, um das ICE-Passwort zu erhalten, aus offensichtlich recht plausiblen Sicherheitsgründen.

Das `usernameFragment` und das Passwort ändern sich jedes Mal, wenn ein [ICE-Neustart](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart) erfolgt.

## Beispiele

Obwohl die WebRTC-Infrastruktur veraltete Kandidaten für Sie nach einem ICE-Neustart herausfiltert, können Sie dies selbst tun, wenn Sie versuchen möchten, die Anzahl der Nachrichten, die hin und her gesendet werden, absolut zu minimieren.

Zu diesem Zweck können Sie den Wert des `usernameFragment` mit dem aktuellen `usernameFragment` vergleichen, das für die Verbindung verwendet wird, nachdem Sie den Kandidaten vom Signalisierungsserver erhalten haben und bevor Sie [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) aufrufen, um ihn zum Satz möglicher Kandidaten hinzuzufügen.

Wenn die Webanwendung eine Nachricht vom Signalisierungsserver erhält, die einen Kandidaten enthält, der der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) hinzugefügt werden soll, können Sie (und sollten im Allgemeinen _sollten_) `addIceCandidate()` aufrufen. Es gibt normalerweise keinen Bedarf, sich manuell über die Filterung der Kandidaten Gedanken zu machen.

Stellen wir uns jedoch vor, dass wir den Datenverkehr minimieren müssen. Die folgende Funktion, `ssNewCandidate()`, wird aufgerufen, wenn eine Nachricht, `signalMsg`, vom Signalisierungsserver eintrifft, die einen ICE-Kandidaten enthält, der der `RTCPeerConnection` hinzugefügt werden soll. Um zu vermeiden, dass Kandidaten aufgenommen werden, die durch einen ICE-Neustart obsolet geworden sind, können wir Code wie diesen verwenden:

```js
const ssNewCandidate = (signalMsg) => {
  const candidate = new RTCIceCandidate(signalMsg.candidate);
  const receivers = pc.getReceivers();

  for (const receiver of receivers) {
    const parameters = receiver.transport.iceTransport.getRemoteParameters();

    if (parameters.usernameFragment === candidate.usernameFragment) {
      return;
    }
  }

  pc.addIceCandidate(candidate).catch(window.reportError);
};
```

Dies durchläuft die Liste der [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekte, die verwendet werden, um ICE-Daten zu empfangen, und prüft, ob das im Kandidaten angegebene `usernameFragment` mit einem von ihnen übereinstimmt. Wenn dies der Fall ist, bricht `ssNewCandidate()` ab. Andernfalls fügt es den neuen Kandidaten der Verbindung hinzu, nachdem es jeden Empfänger überprüft hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
