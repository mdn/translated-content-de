---
title: "RTCRemoteOutboundRtpStreamStats: Eigenschaft localId"
short-title: localId
slug: Web/API/RTCRemoteOutboundRtpStreamStats/localId
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{APIRef("WebRTC")}}

Die **`localId`**-Eigenschaft des {{domxref("RTCRemoteOutboundRtpStreamStats")}}-Wörterbuchs ist ein String, der verwendet werden kann, um das {{domxref("RTCInboundRtpStreamStats")}}-Objekt zu identifizieren, dessen {{domxref("RTCInboundRtpStreamStats.remoteId", "remoteId")}} mit diesem Wert übereinstimmt.

Zusammen bieten diese zwei Objekte Statistiken über die Eingangs- und Ausgangsseite derselben Synchronisationsquelle (SSRC).

## Wert

Ein String, der mit dem Wert der {{domxref("RTCInboundRtpStreamStats")}}-Eigenschaft {{domxref("RTCInboundRtpStreamStats.remoteId", "remoteId")}} verglichen werden kann, um zu überprüfen, ob die beiden Statistiken für jede der beiden Seiten desselben Datensatzes repräsentieren, der vom lokalen Peer empfangen wird.

## Nutzungshinweise

Sie können sich die lokalen und entfernten Ansichten desselben RTP-Streams als Paare vorstellen, von denen jedes eine Referenz auf das andere zurück besitzt. Wenn ein {{domxref("RTCStatsReport")}} ein Statistikobjekt des Typs `remote-outbound-rtp` (vom Typ `RTCRemoteOutboundRtpStreamStats`) enthält, sollte es auch ein entsprechendes `inbound-rtp`-Objekt haben. Beide bieten Informationen über denselben Satz von Paketen, die vom entfernten Peer an das lokale Gerät übertragen werden.

Der Unterschied besteht darin, dass `remote-outbound-rtp` Statistiken über Daten beschreibt, die vom entfernten Peer aus der Sicht des entfernten Peers gesendet wurden, während `inbound-rtp` Statistiken über die eingehenden Daten aus der Perspektive des lokalen Peers bietet.

Sie können dieses Beispiel auf Glitch [prüfen, ausprobieren und experimentieren](#probieren_sie_es_aus_und_verzweigen_sie_es).

## Beispiele

In diesem Beispiel haben wir ein Paar von Funktionen: die erste, `networkTestStart()`, erfasst einen Anfangsbericht, und die zweite, `networkTestStop()`, erfasst einen zweiten Bericht. Die zweite Funktion verwendet die zwei Berichte, um einige Informationen über die Netzwerkbedingungen auszugeben.

### networkTestStart()

Diese Funktion ruft die {{domxref("RTCPeerConnection")}}-Methode {{domxref("RTCPeerConnection.getStats", "getStats()")}} auf, um ein {{domxref("RTCStatsReport")}} anzufordern und speichert es in der Variablen `startReport`.

```js
let startReport;

async function networkTestStart(pc) {
  if (pc) {
    startReport = await pc.getStats();
  }
}
```

Gegeben eine {{domxref("RTCPeerConnection")}}, `pc`, ruft diese deren {{domxref("RTCPeerConnection.getStats", "getStats()")}}-Methode auf, um ein Statistikreport-Objekt zu erhalten, das in `startReport` gespeichert wird, um es zu verwenden, sobald die Endtest-Daten von `networkTestStop()` gesammelt wurden.

### networkTestStop()

Die `networkTestStop()`-Funktion erhält einen zweiten Bericht, `endReport`, und berechnet und gibt dann die Ergebnisse aus.

#### Finden von gepaarten Statistiken

Jeder Statistikdatensatz von {{domxref("RTCRemoteOutboundRtpStreamStats.type", "type")}} `remote-outbound-rtp` (der die Statistiken eines entfernten Peers über das Senden von Daten an den lokalen Peer beschreibt) hat einen entsprechenden Datensatz des Typs `inbound-rtp`, der die Perspektive des lokalen Peers auf dieselben zwischen den beiden Peers übertragenen Daten beschreibt. Lassen Sie uns eine Dienstprogrammfunktion erstellen, um den Wert eines Schlüssels im gepaarten Statistikobjekt nachzuschlagen.

Die unten gezeigte `findReportEntry()`-Funktion untersucht einen {{domxref("RTCStatsReport")}} und gibt den auf {{domxref("RTCStatsReport")}} basierenden Statistikdatensatz zurück, der den angegebenen `key` enthält – _und_ für den der Schlüssel den angegebenen `value` hat. Wenn keine Übereinstimmung gefunden wird oder der Statistikbericht keinen Datensatz enthält, der der durch `key` angegebenen Statistik-Kategorie entspricht.

```js
function findReportEntry(report, key, value) {
  for (const stats of report.values()) {
    if (stats[key] === value) {
      return stats;
    }
  }
  return null;
}
```

Da das `RTCStatsReport` ein JavaScript-[`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) ist, können wir über die [`values()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/values) der Map iterieren, um jeden der auf `RTCStats` basierenden Statistikdatensätze im Bericht zu untersuchen, bis wir einen finden, der die `key`-Eigenschaft mit dem angegebenen `value` hat. Wenn eine Übereinstimmung gefunden wird, wird das Statistikobjekt zurückgegeben.

Wenn keine Übereinstimmung gefunden wird, gibt die Funktion `null` zurück.

#### Die Hauptfunktion networkTestStop()

Betrachten wir nun die `networkTestStop()`-Funktion selbst. Sie nimmt die getestete {{domxref("RTCPeerConnection")}} als Eingabe, ruft `getStats()` auf, um einen neuen `RTCStatsReport` mit aktuellen Statistiken zu erhalten, und berechnet dann die gesuchten Ergebnisse, indem sie diese dem Benutzer durch Anhängen von geeignetem HTML an die Inhalte des {{HTMLElement("div")}}-Elements mit der Klasse `stats-box` ausgibt.

```js
async function networkTestStop(pc) {
  if (pc) {
    const statsBox = document.querySelector(".stats-box");
    const endReport = await pc.getStats();

    for (const endRemoteOutbound of endReport.values()) {
      if (endRemoteOutbound.type === "remote-outbound-rtp") {
        const startRemoteOutbound = startReport.get(endRemoteOutbound.id);

        if (startRemoteOutbound) {
          const startInboundStats = findReportEntry(
            startReport,
            "remoteId",
            startRemoteOutbound.id,
          );
          const endInboundStats = findReportEntry(
            endReport,
            "remoteId",
            endRemoteOutbound.id,
          );
          // Verstrichene Zeit in Sekunden
          const elapsedTime =
            (endRemoteOutbound.timestamp - startRemoteOutbound.timestamp) /
            1000;
          const packetsSent =
            endRemoteOutbound.packetsSent - startRemoteOutbound.packetsSent;
          const bytesSent =
            endRemoteOutbound.bytesSent - startRemoteOutbound.bytesSent;
          const framesDecoded =
            endInboundStats.framesDecoded - startInboundStats.framesDecoded;
          const frameRate = framesDecoded / elapsedTime;

          let timeString = "";
          if (!isNaN(elapsedTime)) {
            timeString = ` repräsentiert ${elapsedTime}s`;
          }

          let frameString = "";
          if (!isNaN(framesDecoded)) {
            frameString = `Decoded ${framesDecoded} frames for a frame rate of ${frameRate.toFixed(
              2,
            )} FPS.<br>`;
          }

          const logEntry =
            `<div class="stats-entry"><h2>Report ID: ${endRemoteOutbound.id}</h2>` +
            `Remote peer sent ${packetsSent} packets ${timeString}.<br>` +
            `${frameString}` +
            `Data size: ${bytesSent} bytes.</div>`;
          statsBox.innerHTML += logEntry;
        } else {
          statsBox.innerHTML += `<div class="stats-error">Unable to find initial statistics for ID ${endRemoteOutbound.id}.</div>`;
        }
      }

      statsBox.scrollTo(0, statsBox.scrollHeight);
    }
  }
}
```

Hier ist, was in der `networkTestStop()`-Funktion passiert: Nachdem die {{domxref("RTCPeerConnection")}}-Methode {{domxref("RTCPeerConnection.getStats", "getStats()")}} aufgerufen wurde, um den neuesten Statistikbericht für die Verbindung zu erhalten und in `endReport` zu speichern. Dies ist ein {{domxref("RTCStatsReport")}}-Objekt, das Strings zu Objekten des entsprechenden auf {{domxref("RTCStatsReport")}} basierenden Typs zuordnet.

Nun können wir beginnen, die Ergebnisse zu verarbeiten, beginnend mit den Endstatistiken, die in `endReport` gefunden wurden. In diesem Fall suchen wir nach Statistikdatensätzen, deren `type` `remote-outbound-rtp` ist, so dass wir über die Einträge im Statistikbericht iterieren, bis wir einen Eintrag dieses Typs finden. Dieses Objekt ist spezifisch vom Typ {{domxref("RTCRemoteOutboundRtpStreamStats")}} und liefert Statistiken, die Details über den Zustand der Dinge _aus der Perspektive des entfernten Peers_ geben. Dieser Statistikdatensatz wird in `endRemoteOutbound` gespeichert.

Sobald der endende `remote-outbound-rtp`-Datensatz gefunden ist, verwenden wir dessen {{domxref("RTCRemoteOutboundRtpStreamStats.id", "id")}}-Eigenschaft, um dessen ID abzurufen. Damit in der Hand können wir den `remote-outbound-rtp`-Datensatz im Startstatistikdatensatz (`startReport`) nachschlagen, den wir in `startRemoteOutbound` speichern.

Jetzt erhalten wir die `inbound-rtp`-Statistiken, die diesen beiden `remote-outbound-rtp`-Datensätzen entsprechen, indem wir die `remoteId`-Eigenschaft innerhalb von ihnen finden, deren Wert die ID des `remote-outbound-rtp`-Datensatzes ist. Wir verwenden die oben beschriebene `findReportEntry()`-Funktion dafür und speichern die gefundenen `inbound-rtp`-Datensätze in `startInboundStats` und `endInboundStats`.

Jetzt haben wir alle Rohdaten, die erforderlich sind, um die Informationen zu berechnen, die wir anzeigen möchten. Daher tun wir dies:

- Wir berechnen die verstrichene Zeit—`elapsedTime`—zwischen den beiden Berichten, indem wir den {{domxref("RTCRemoteOutboundRtpStreamStats.timestamp", "timestamp")}} des `startReport` von dem des `endReport` abziehen. Dann teilen wir das Ergebnis durch 1000, um es von Millisekunden in Sekunden zu konvertieren.
- Wir berechnen die Anzahl der in diesem Zeitraum gesendeten Pakete—`packetsSent`—indem wir die beiden Werte der Eigenschaft {{domxref("RTCSentRtpStreamStats.packetsSent", "packetsSent")}} der Berichte voneinander abziehen.
- Ähnlich wird die Anzahl der in diesem Zeitraum gesendeten Bytes—`bytesSent`—berechnet, indem die Eigenschaft {{domxref("RTCSentRtpStreamStats.bytesSent", "bytesSent")}} des startenden Statistikobjekts von der der endenden Statistik abgezogen wird.
- Die Anzahl der in diesem Zeitraum dekodierten Frames—`framesDecoded`—wird bestimmt, indem die {{domxref("RTCInboundRtpStreamStats.framesDecoded", "framesDecoded")}} von `startRecord` von `endRecord.framesDecoded` abgezogen wird.
- Schließlich wird die Bildrate über den Zeitverlauf der verstrichenen Zeitspanne berechnet, indem `framesDecoded` durch `elapsedTime` geteilt wird.

Der Rest der `networkTestStop()`-Funktion konstruiert das HTML, das verwendet wird, um die Ausgabe der gesammelten und berechneten Ergebnisse dem Benutzer anzuzeigen und hängt es dann an das `statsBox`-Element an, das wir verwenden, um die Statusaktualisierungen dem Benutzer anzuzeigen.

Das Ausgabelog, unter Berücksichtigung der vom Beispiel verwendeten Stile, sieht wie folgt aus:

![Ein Screenshot des Beispiels, der geloggte Statistiken aus gepaarten remote-outbound-rtp und inbound-rtp Statistikdatensätzen zeigt](rtc-log-screenshot.png)

Im Screenshot sehen wir eine Überschrift gefolgt von dem scrollbaren {{HTMLElement("div")}}, auf das wir als `statsBox` referenzieren. Die Box enthält eine Anzahl von Logeinträgen, von denen die letzten paar sichtbar sind. Jeder repräsentiert ungefähr eine Sekunde an Zeit (da wir so viel Zeit zwischen dem Aufrufen von `networkTestStart()` und `networkTestStop()` warten).

### Probieren Sie es aus und verzweigen Sie es

Dieses Beispiel ist [auf Glitch verfügbar, damit Sie es ausprobieren](https://websocket-webrtc-chat-with-stats.glitch.me/), untersuchen oder remixieren.

[Remix It](https://glitch.com/edit/?utm_content=project_websocket-webrtc-chat-with-stats&utm_source=remix_this&utm_medium=button&utm_campaign=glitchButton#!/remix/websocket-webrtc-chat-with-stats)

[View Source](https://glitch.com/edit/?utm_content=project_websocket-webrtc-chat-with-stats&utm_source=view_source&utm_medium=button&utm_campaign=glitchButton#!/websocket-webrtc-chat-with-stats)

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
