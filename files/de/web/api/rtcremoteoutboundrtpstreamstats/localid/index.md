---
title: "RTCRemoteOutboundRtpStreamStats: localId-Eigenschaft"
short-title: localId
slug: Web/API/RTCRemoteOutboundRtpStreamStats/localId
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{APIRef("WebRTC")}}

Die **`localId`**-Eigenschaft des [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats)-Wörterbuchs ist ein String, der verwendet werden kann, um das [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Objekt zu identifizieren, dessen [`remoteId`](/de/docs/Web/API/RTCInboundRtpStreamStats/remoteId) mit diesem Wert übereinstimmt.

Zusammen liefern diese beiden Objekte Statistiken über die eingehende und ausgehende Seite der gleichen Synchronisationsquelle (SSRC).

## Wert

Ein String, der mit dem Wert der [`remoteId`](/de/docs/Web/API/RTCInboundRtpStreamStats/remoteId)-Eigenschaft eines [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Objekts verglichen werden kann, um festzustellen, ob die beiden Statistiken für jede der beiden Seiten desselben Satzes von Daten darstellen, die vom lokalen Peer empfangen wurden.

## Verwendungshinweise

Sie können die lokalen und entfernten Ansichten desselben RTP-Streams als Paare betrachten, die jeweils einen Verweis auf das andere haben.
Wenn ein [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) ein `remote-outbound-rtp` Statistikobjekt (vom Typ `RTCRemoteOutboundRtpStreamStats`) enthält, sollte es auch ein entsprechendes `inbound-rtp` Objekt haben.
Beide liefern Informationen über denselben Satz von Paketen, die vom entfernten Peer zum lokalen Gerät übertragen werden.

Der Unterschied besteht darin, dass `remote-outbound-rtp` Statistiken über Daten beschreibt, die vom entfernten Peer aus der Sicht des entfernten Peers gesendet werden, während `inbound-rtp` Statistiken über die eingehenden Daten aus der Sicht des lokalen Peers bietet.

Sie können dieses Beispiel auf Glitch [untersuchen, ausprobieren und experimentieren](#probieren_sie_es_aus_und_verzweigen_sie_es).

## Beispiele

In diesem Beispiel haben wir ein Paar von Funktionen: die erste, `networkTestStart()`, erfasst einen Anfangsbericht, und die zweite, `networkTestStop()`, erfasst einen zweiten Bericht.
Die zweite Funktion verwendet die beiden Berichte, um einige Informationen über die Netzwerkbedingungen auszugeben.

### networkTestStart()

Diese Funktion ruft die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Methode [`getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) auf, um einen [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) anzufordern und in der Variablen `startReport` zu speichern.

```js
let startReport;

async function networkTestStart(pc) {
  if (pc) {
    startReport = await pc.getStats();
  }
}
```

Gegeben eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), `pc`, ruft dies deren [`getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats)-Methode auf, um ein Statistikberichtobjekt zu erhalten, das in `startReport` gespeichert wird, um es zu verwenden, sobald die Enddaten des Tests von `networkTestStop()` gesammelt wurden.

### networkTestStop()

Die `networkTestStop()`-Funktion erhält einen zweiten Bericht, `endReport`, berechnet dann die Ergebnisse und gibt sie aus.

#### Paired Statistiken finden

Jeder Statistikdatensatz vom [`type`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/type) `remote-outbound-rtp` (der die Statistiken eines entfernten Peers über das Senden von Daten an den lokalen Peer beschreibt) hat einen entsprechenden Datensatz vom Typ `inbound-rtp`, der die Sichtweise des lokalen Peers auf die gleichen Daten beschreibt, die zwischen den beiden Peers bewegt werden.
Lassen Sie uns eine Hilfsfunktion erstellen, um uns beim Suchen des Werts eines Schlüssels im gepaarten Statistikobjekt zu helfen.

Die unten gezeigte `findReportEntry()` Funktion untersucht einen [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) und gibt den darauf basierenden Statistikdatensatz zurück, der den angegebenen `key` enthält — _und_ für den der Schlüssel den angegebenen `value` hat.
Wenn keine Übereinstimmung gefunden wird oder der Statistikbericht keinen Datensatz hat, der der durch `key` angegebenen Statistikkategorie entspricht.

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

Da der `RTCStatsReport` ein JavaScript [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) ist, können wir über die [`values()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/values) der Karte iterieren, um jeden Statistikdatensatz im Bericht zu untersuchen, bis wir einen finden, der die `key`-Eigenschaft mit dem angegebenen `value` hat.
Wenn eine Übereinstimmung gefunden wird, wird das Statistikobjekt zurückgegeben.

Wenn keine Übereinstimmung gefunden wird, gibt die Funktion `null` zurück.

#### Die Hauptfunktion networkTestStop()

Schauen wir uns nun die `networkTestStop()`-Funktion selbst an. Sie nimmt als Eingabe die getestete [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), ruft `getStats()` auf, um einen neuen `RTCStatsReport` mit aktuellen Statistiken zu erhalten, dann berechnet sie die gesuchten Ergebnisse und gibt diese, wenn angebracht, dem Benutzer aus, indem sie das entsprechende HTML zu den Inhalten des {{HTMLElement("div")}}-Elements hinzufügt, dessen Klasse `stats-box` ist.

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
          // Elapsed time in seconds
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
            timeString = ` representing ${elapsedTime}s`;
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

Das passiert in der `networkTestStop()`-Funktion: nach dem Aufruf der Methode [`getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), um den neuesten Statistikbericht für die Verbindung zu erhalten und ihn in `endReport` zu speichern.
Dies ist ein [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) Objekt, das Zeichenfolgen auf Objekte des entsprechenden darauf basierenden Typs abbildet.

Jetzt können wir beginnen, die Ergebnisse zu verarbeiten, angefangen mit den Endstatistiken, die in `endReport` gefunden wurden.
In diesem Fall suchen wir nach Statistikdatensätzen, deren `type` `remote-outbound-rtp` ist, also durchlaufen wir die Einträge im Statistikbericht, bis wir einen Eintrag dieses Typs finden.
Dieses Objekt ist, speziell, vom Typ [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats), und es liefert Statistiken, die Details über den Zustand aus der _Perspektive des entfernten Peers_ liefern.
Dieser Statistikdatensatz wird in `endRemoteOutbound` gespeichert.

Sobald der endende `remote-outbound-rtp` Datensatz gefunden wird, verwenden wir seine [`id`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/id)-Eigenschaft, um seine ID zu erhalten.
Mit dieser in der Hand, können wir den `remote-outbound-rtp` Datensatz im Anfangsstatistikdatensatz (`startReport`) nachschlagen, den wir in `startRemoteOutbound` speichern.

Nun erhalten wir die `inbound-rtp` Statistiken, die diesen beiden `remote-outbound-rtp` Datensätzen entsprechen, indem wir die `remoteId` Eigenschaft innerhalb derselben finden, deren Wert die ID des `remote-outbound-rtp` Datensatzes ist.
Wir verwenden die `findReportEntry()` Funktion aus dem vorherigen Abschnitt, um die gefundenen `inbound-rtp` Datensätze in `startInboundStats` und `endInboundStats` zu speichern.

Nun haben wir alle Rohstatistiken, die wir benötigen, um die Informationen zu berechnen, die wir anzeigen möchten, also tun wir das:

- Wir berechnen die verstrichene Zeit—`elapsedTime`—die zwischen den beiden Berichten verstrichen ist, indem wir den [`timestamp`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/timestamp) von `startReport` von dem von `endReport` subtrahieren.
  Dann teilen wir durch 1000, um das Ergebnis von Millisekunden in Sekunden umzuwandeln.
- Wir berechnen die Anzahl der in diesem Intervall gesendeten Pakete—`packetsSent`—indem wir die Werte der beiden Berichte für die Eigenschaft [`packetsSent`](/de/docs/Web/API/RTCSentRtpStreamStats/packetsSent) subtrahieren.
- Ebenso wird die Anzahl der in diesem Intervall gesendeten Bytes—`bytesSent`—berechnet, indem die Eigenschaft [`bytesSent`](/de/docs/Web/API/RTCSentRtpStreamStats/bytesSent) des Anfangsstatistikobjekts von der des Endstatistikobjekts subtrahiert wird.
- Die Anzahl der in diesem Intervall dekodierten Frames—`framesDecoded`—wird bestimmt, indem der `framesDecoded` von `startRecord` von `endRecord.framesDecoded` subtrahiert wird.
- Schließlich wird die Bildrate über den verstrichenen Zeitraum ermittelt, indem `framesDecoded` durch `elapsedTime` geteilt wird.

Der Rest der `networkTestStop()`-Funktion erstellt das HTML, das verwendet wird, um die Ausgabe der gesammelten und berechneten Ergebnisse dem Benutzer anzuzeigen, und hängt es dann an das Element `statsBox` an, das wir verwenden, um den Statusaktualisierungen dem Benutzer zu zeigen.

Das Ausgabelog, unter Beachtung der in diesem Beispiel verwendeten Stile, sieht so aus:

![Ein Screenshot des Beispiels zeigt aufgezeichnete Statistiken auf Grundlage gepaarter remote-outbound-rtp und inbound-rtp Statistiken](rtc-log-screenshot.png)

Im Screenshot sehen wir eine Überschrift, gefolgt von dem scrollbaren {{HTMLElement("div")}}, den wir als `statsBox` bezeichnen.
Die Box enthält eine Reihe von Logeinträgen, von denen die letzten sichtbar sind.
Jeder Eintrag repräsentiert ungefähr eine Sekunde Zeit (da wir so lange zwischen dem Aufruf von `networkTestStart()` und `networkTestStop()` warten).

### Probieren Sie es aus und verzweigen Sie es

Dieses Beispiel steht [auf Glitch für Sie zum Ausprobieren](https://websocket-webrtc-chat-with-stats.glitch.me/) zur Verfügung, um es zu untersuchen oder zu remixen.

[Remix It](https://glitch.com/edit/?utm_content=project_websocket-webrtc-chat-with-stats&utm_source=remix_this&utm_medium=button&utm_campaign=glitchButton#!/remix/websocket-webrtc-chat-with-stats)

[View Source](https://glitch.com/edit/?utm_content=project_websocket-webrtc-chat-with-stats&utm_source=view_source&utm_medium=button&utm_campaign=glitchButton#!/websocket-webrtc-chat-with-stats)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
