---
title: "RTCIceCandidate: usernameFragment-Eigenschaft"
short-title: usernameFragment
slug: Web/API/RTCIceCandidate/usernameFragment
l10n:
  sourceCommit: 63297dea804061944e7430acd2c057d773770a4f
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`usernameFragment`**-Eigenschaft der [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Schnittstelle ist ein String, der das Benutzername-Fragment ("ufrag") angibt, das eine einzelne ICE-Interaktionssitzung eindeutig identifiziert.

Dieser Wert wird mithilfe der `usernameFragment`-Eigenschaft im `candidateInfo`-Optionsobjekt angegeben, das an den [`RTCIceCandidate()`](/de/docs/Web/API/RTCIceCandidate/RTCIceCandidate)-Konstruktor übergeben wird. Wenn Sie den Konstruktor mit einem m-line-String statt mit dem Optionsobjekt aufrufen, wird der Wert von `usernameFragment` aus dem angegebenen Kandidaten-m-line-String extrahiert.

Beachten Sie, dass 24 Bits des Benutzernamen-Fragments vom Browser randomisiert sein müssen. Siehe [Randomisierung](#randomisierung) weiter unten für Details.

## Wert

Ein String, der das Benutzername-Fragment enthält (in der Kurzform normalerweise als "ufrag" oder "ice-ufrag" bezeichnet), das zusammen mit dem ICE-Passwort ("ice-pwd") eine einzelne laufende ICE-Interaktion eindeutig identifiziert, einschließlich jeglicher Kommunikation mit dem [STUN](/de/docs/Glossary/STUN)-Server. Der String kann bis zu 256 Zeichen lang sein und hat keinen Standardwert.

### Randomisierung

Mindestens 24 Bits des Textes im `ufrag` müssen zu Beginn der ICE-Sitzung zufällig von der ICE-Schicht ausgewählt werden. Die genauen Bits, die zufällig sind, und was der Rest des `ufrag`-Textes betrifft, sind der Entscheidung der Browser-Implementierung überlassen. Zum Beispiel könnte ein Browser immer ein 24-Zeichen `ufrag` verwenden, bei dem Bit 4 jedes Zeichens zufällig zwischen 0 und 1 gewählt wird. Ein anderes Beispiel: Es könnte ein benutzerdefinierten String nehmen und drei 8-Bit zufällige Bytes am Ende anhängen. Oder vielleicht ist jedes Zeichen vollständig zufällig.

## Verwendungshinweise

ICE verwendet das `usernameFragment` und das Passwort, um die Integrität der Nachrichten sicherzustellen. Dies vermeidet Übersprechen zwischen mehreren laufenden ICE-Sitzungen und trägt wichtiger noch dazu bei, ICE-Transaktionen (und alle WebRTC im weiteren Sinne) gegen Angriffe zu schützen, die versuchen könnten, sich in einen ICE-Austausch einzuschleichen.

> [!NOTE]
> Es gibt keine API, um das ICE-Passwort zu erhalten, aus offensichtlich recht guten Sicherheitsgründen.

Das `usernameFragment` und das Passwort ändern sich jedes Mal, wenn ein [ICE-Neustart](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart) erfolgt.

## Beispiele

Obwohl die WebRTC-Infrastruktur veraltete Kandidaten nach einem ICE-Neustart für Sie herausfiltert, können Sie es selbst tun, wenn Sie die Anzahl der hin und her gesendeten Nachrichten absolut minimieren möchten.

Um dies zu tun, können Sie den Wert von `usernameFragment` mit dem aktuellen `usernameFragment` vergleichen, das für die Verbindung verwendet wird, nachdem Sie den Kandidaten vom Signalisierungsserver erhalten haben und bevor Sie [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) aufrufen, um ihn zu den möglichen Kandidaten hinzuzufügen.

Wenn die Web-App eine Nachricht vom Signalisierungsserver erhält, die einen Kandidaten enthält, der zur [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) hinzugefügt werden soll, können (und sollten) Sie `addIceCandidate()` aufrufen. Normalerweise gibt es keinen Bedarf, sich manuell um das Filtern der Kandidaten zu kümmern.

Angenommen, wir müssen den Datenverkehr minimieren. Die folgende Funktion, `ssNewCandidate()`, wird aufgerufen, wenn eine Nachricht, `signalMsg`, vom Signalisierungsserver eintrifft, die einen ICE-Kandidaten enthält, der zur `RTCPeerConnection` hinzugefügt werden soll. Um das Einbeziehen von Kandidaten zu vermeiden, die durch einen ICE-Neustart veraltet sind, können wir einen Code wie diesen verwenden:

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

  pc.addIceCandidate(candidate).catch(window.reportError);
};
```

Dies geht die Liste der [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekte durch, die zum Empfangen von ICE-Daten verwendet werden, und überprüft, ob das im Kandidaten angegebene `usernameFragment` zu einem von ihnen passt. Wenn ja, bricht `ssNewCandidate()` ab. Andernfalls fügt es nach Überprüfung jedes Empfängers den neuen Kandidaten zur Verbindung hinzu.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
