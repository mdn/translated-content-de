---
title: "RTCIceCandidate: usernameFragment-Eigenschaft"
short-title: usernameFragment
slug: Web/API/RTCIceCandidate/usernameFragment
l10n:
  sourceCommit: 63297dea804061944e7430acd2c057d773770a4f
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`usernameFragment`**-Eigenschaft auf der [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Schnittstelle ist ein String, der das Benutzername-Fragment ("ufrag") angibt, das eine einzelne ICE-Interaktionssitzung eindeutig identifiziert.

Dieser Wert wird mithilfe der `usernameFragment`-Eigenschaft im `candidateInfo`-Optionsobjekt angegeben, das an den [`RTCIceCandidate()`](/de/docs/Web/API/RTCIceCandidate/RTCIceCandidate)-Konstruktor übergeben wird. Wenn Sie den Konstruktor mit einem m-line-String anstelle des Optionsobjekts aufrufen, wird der Wert von `usernameFragment` aus dem angegebenen Kandidaten-m-line-String extrahiert.

Beachten Sie, dass 24 Bits des Benutzername-Fragments vom Browser zufällig sein müssen. Siehe [Randomisierung](#randomisierung) unten für Details.

## Wert

Ein String, der das Benutzername-Fragment enthält (üblicherweise in Kurzform als "ufrag" oder "ice-ufrag" bezeichnet), das zusammen mit dem ICE-Passwort ("ice-pwd") eine einzelne laufende ICE-Interaktion eindeutig identifiziert, einschließlich aller Kommunikation mit dem [STUN](/de/docs/Glossary/STUN)-Server. Der String kann bis zu 256 Zeichen lang sein und hat keinen Standardwert.

### Randomisierung

Mindestens 24 Bits des Textes im `ufrag` müssen zufällig vom ICE-Layer zu Beginn der ICE-Sitzung ausgewählt werden. Die genauen Bits, die zufällig sind, und was der Rest des `ufrag`-Textes ist, bleibt der Entscheidung der Browser-Implementierung überlassen. Zum Beispiel könnte ein Browser immer ein 24-stelliges `ufrag` verwenden, bei dem Bit 4 jedes Zeichens zufällig zwischen 0 und 1 ausgewählt wird. Ein weiteres Beispiel: Es könnte einen benutzerdefinierten String nehmen und drei 8-Bit-Zufallsbytes an das Ende anhängen. Oder vielleicht ist jedes Zeichen vollständig zufällig.

## Verwendungshinweise

ICE verwendet das `usernameFragment` und das Passwort, um die Integrität der Nachrichten zu gewährleisten. Dies verhindert Übersprechen zwischen mehreren laufenden ICE-Sitzungen, und noch wichtiger, es hilft, ICE-Transaktionen (und im weiteren Sinne das gesamte WebRTC) gegen Angriffe zu sichern, die versuchen könnten, sich in einen ICE-Austausch einzuschleichen.

> [!NOTE]
> Es gibt keine API, um das ICE-Passwort zu erhalten, aus ziemlich offensichtlichen Sicherheitsgründen.

Das `usernameFragment` und das Passwort ändern sich jedes Mal, wenn ein [ICE-Neustart](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart) auftritt.

## Beispiele

Obwohl die WebRTC-Infrastruktur veraltete Kandidaten für Sie nach einem ICE-Neustart herausfiltert, können Sie es selbst tun, wenn Sie versuchen, die Anzahl der hin- und hergehenden Nachrichten absolut zu minimieren.

Um dies zu tun, können Sie den Wert von `usernameFragment` mit dem aktuellen `usernameFragment` vergleichen, das für die Verbindung verwendet wird, nachdem Sie den Kandidaten vom Signalisierungsserver empfangen haben und bevor Sie [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) aufrufen, um ihn zum Satz möglicher Kandidaten hinzuzufügen.

Wenn die Webanwendung eine Nachricht vom Signalisierungsserver erhält, die einen Kandidaten enthält, der zur [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) hinzugefügt werden soll, können Sie (und sollten im Allgemeinen auch) `addIceCandidate()` aufrufen. Es besteht normalerweise keine Notwendigkeit, die Kandidaten manuell zu filtern.

Stellen wir uns jedoch vor, dass wir den Datenverkehr minimieren müssen. Die unten stehende Funktion `ssNewCandidate()` wird aufgerufen, wenn eine Nachricht, `signalMsg`, vom Signalisierungsserver eintrifft, die einen ICE-Kandidaten enthält, der zur `RTCPeerConnection` hinzugefügt werden soll. Um zu vermeiden, dass Kandidaten einbezogen werden, die durch einen ICE-Neustart veraltet sind, können wir folgenden Code verwenden:

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

Dies durchläuft die Liste der [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekte, die verwendet werden, um ICE-Daten zu empfangen, und überprüft, ob das im Kandidaten angegebene `usernameFragment` mit einem von ihnen übereinstimmt. Wenn es das tut, bricht `ssNewCandidate()` ab. Andernfalls wird, nachdem jeder Empfänger überprüft wurde, der neue Kandidat zur Verbindung hinzugefügt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
