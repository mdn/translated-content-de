---
title: "RTCIceCandidate: usernameFragment-Eigenschaft"
short-title: usernameFragment
slug: Web/API/RTCIceCandidate/usernameFragment
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`usernameFragment`**-Eigenschaft in der {{domxref("RTCIceCandidate")}}-Schnittstelle ist ein String, der das Username-Fragment ("ufrag") angibt, das eine einzelne ICE-Interaktionssitzung eindeutig identifiziert.

Dieser Wert wird mit der `usernameFragment`-Eigenschaft im `candidateInfo`-Optionsobjekt festgelegt, das dem {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate()")}}-Konstruktor übergeben wird. Wenn Sie den Konstruktor mit einem m-line-String anstelle des Optionsobjekts aufrufen, wird der Wert von `usernameFragment` aus dem angegebenen Kandidaten-m-line-String extrahiert.

Beachten Sie, dass 24 Bits des Username-Fragments von dem Browser randomisiert werden müssen. Siehe [Randomisierung](#randomisierung) unten für Details.

## Wert

Ein String, der das Username-Fragment enthält (oft abgekürzt als "ufrag" oder "ice-ufrag"), das zusammen mit dem ICE-Passwort ("ice-pwd") eine einzelne laufende ICE-Interaktion eindeutig identifiziert, einschließlich jeglicher Kommunikation mit dem {{Glossary("STUN")}}-Server. Der String kann bis zu 256 Zeichen lang sein und hat keinen Standardwert.

### Randomisierung

Zumindest 24 Bits des Textes im `ufrag` müssen von der ICE-Schicht zu Beginn der ICE-Sitzung zufällig ausgewählt werden. Die Spezifikationen, welche Bits zufällig sind und was der Rest des `ufrag`-Textes ist, bleiben der Browser-Implementierung überlassen. Zum Beispiel könnte ein Browser immer ein 24-Zeichen-`ufrag` verwenden, in dem Bit 4 jedes Zeichens zufällig zwischen 0 und 1 ausgewählt wird. Ein weiteres Beispiel: Es könnte einen benutzerdefinierten String nehmen und drei 8-Bit-Zufallsbytes am Ende anhängen. Oder vielleicht ist jedes Zeichen vollständig zufällig.

## Nutzungshinweise

ICE verwendet das `usernameFragment` und das Passwort, um die Nachrichtenintegrität sicherzustellen. Dies verhindert Übersprechen zwischen mehreren laufenden ICE-Sitzungen, trägt aber vor allem dazu bei, ICE-Transaktionen (und im weiteren Sinne ganz WebRTC) gegen Angriffe zu sichern, die versuchen könnten, sich in einen ICE-Austausch einzuschleusen.

> [!NOTE]
> Es gibt keine API, um das ICE-Passwort zu erhalten, was aus ziemlich offensichtlichen Sicherheitsgründen so ist.

Das `usernameFragment` und das Passwort ändern sich jedes Mal, wenn ein [ICE-Neustart](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart) erfolgt.

## Beispiele

Obwohl die WebRTC-Infrastruktur veraltete Kandidaten nach einem ICE-Neustart für Sie herausfiltern wird, können Sie dies selbst tun, wenn Sie absolut die Anzahl der hin- und hergehenden Nachrichten minimieren möchten.

Um dies zu tun, können Sie den Wert des `usernameFragment` mit dem aktuellen `usernameFragment` vergleichen, das für die Verbindung verwendet wird, nachdem Sie den Kandidaten vom Signalisierungsserver erhalten und bevor Sie {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}} aufrufen, um ihn zum Satz der möglichen Kandidaten hinzuzufügen.

Wenn die Webanwendung eine Nachricht vom Signalisierungsserver erhält, die einen Kandidaten enthält, der zur {{domxref("RTCPeerConnection")}} hinzugefügt werden soll, können (und sollten) Sie `addIceCandidate()` aufrufen. Es ist normalerweise nicht erforderlich, sich manuell um das Filtern der Kandidaten zu kümmern.

Stellen wir uns jedoch vor, dass wir den Datenverkehr minimieren müssen. Die unten stehende Funktion `ssNewCandidate()` wird aufgerufen, wenn eine Nachricht, `signalMsg`, vom Signalisierungsserver eingeht, die einen ICE-Kandidaten enthält, der der `RTCPeerConnection` hinzugefügt werden soll. Um zu vermeiden, dass Kandidaten einbezogen werden, die durch einen ICE-Neustart obsolet geworden sind, können wir folgenden Code verwenden:

```js
const ssNewCandidate = (signalMsg) => {
  let candidate = new RTCIceCandidate(signalMsg.candidate);
  let receivers = pc.getReceivers();

  for (const receiver of receivers) {
    let parameters = receiver.transport.getParameters();

    if (parameters.usernameFragment === candidate.usernameFragment) {
      return;
    }
  }

  pc.addIceCandidate(candidate).catch(reportError);
};
```

Dies geht die Liste der {{domxref("RTCRtpReceiver")}}-Objekte durch, die verwendet werden, um ICE-Daten zu empfangen, und prüft, ob das im Kandidaten angegebene `usernameFragment` mit einem von ihnen übereinstimmt. Wenn dies der Fall ist, bricht `ssNewCandidate()` ab. Andernfalls, nachdem alle Empfänger überprüft wurden, wird der neue Kandidat der Verbindung hinzugefügt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
