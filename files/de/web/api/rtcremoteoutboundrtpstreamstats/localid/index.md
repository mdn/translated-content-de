---
title: "RTCRemoteOutboundRtpStreamStats: localId-Eigenschaft"
short-title: localId
slug: Web/API/RTCRemoteOutboundRtpStreamStats/localId
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{APIRef("WebRTC")}}

Die **`localId`**-Eigenschaft des [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats)-Wörterbuchs ist ein String, der verwendet werden kann, um das [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Objekt zu identifizieren, dessen [`remoteId`](/de/docs/Web/API/RTCInboundRtpStreamStats/remoteId) diesen Wert hat.

Zusammen bieten diese beiden Objekte Statistiken über die eingehenden und ausgehenden Seiten derselben Synchronisationsquelle (SSRC).

## Wert

Ein String, der mit dem Wert der [`remoteId`](/de/docs/Web/API/RTCInboundRtpStreamStats/remoteId)-Eigenschaft eines [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Objekts verglichen werden kann, um zu sehen, ob die beiden Statistiken für jede der beiden Seiten desselben Satzes von Daten darstellen, der vom lokalen Teilnehmer empfangen wird.

## Verwendungshinweise

Sie können sich die lokalen und entfernten Ansichten desselben RTP-Streams als Paare vorstellen, von denen jedes einen Verweis auf das andere besitzt. Daher sollte ein [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport), das ein `remote-outbound-rtp`-Statistikobjekt (vom Typ `RTCRemoteOutboundRtpStreamStats`) enthält, auch ein entsprechendes `inbound-rtp`-Objekt haben. Beide liefern Informationen über denselben Satz von Paketen, der vom entfernten Teilnehmer zum lokalen Gerät übertragen wird.

Der Unterschied besteht darin, dass `remote-outbound-rtp` Statistiken über Daten beschreibt, die vom entfernten Teilnehmer aus dessen Perspektive gesendet werden, während `inbound-rtp` Statistiken über die eingehenden Daten aus der Perspektive des lokalen Teilnehmers bietet.

Sie können [dieses Beispiel auf Glitch](#probieren_sie_es_aus_und_verzweigen_sie_es) untersuchen, ausprobieren und experimentieren.

## Beispiele

In diesem Beispiel haben wir ein Paar von Funktionen: Die erste, `networkTestStart()`, erfasst einen initialen Bericht, und die zweite, `networkTestStop()`, erfasst einen zweiten Bericht. Die zweite Funktion verwendet die beiden Berichte, um einige Informationen über die Netzwerkbedingungen auszugeben.

### networkTestStart()

Diese Funktion ruft die Methode [`getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) auf, um ein [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) anzufordern und es in der Variable `startReport` zu speichern.

```js
let startReport;

async function networkTestStart(pc) {
  if (pc) {
    startReport = await pc.getStats();
  }
}
```

Unter der Annahme einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), `pc`, ruft diese Methode ihre [`getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats)-Methode auf, um ein Statistikbericht-Objekt zu erhalten, das in `startReport` für den weiteren Gebrauch gespeichert wird, sobald die Endtest-Daten durch `networkTestStop()` erfasst wurden.

### networkTestStop()

Die Funktion `networkTestStop()` holt einen zweiten Bericht, `endReport`, und berechnet und gibt dann die Ergebnisse aus.

#### Zuordnen gepaarter Statistiken

Jeder Statistikdatensatz des Typs [`type`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/type) `remote-outbound-rtp` (der Statistiken eines entfernten Teilnehmers über das Senden von Daten an den lokalen Teilnehmer beschreibt) hat einen entsprechenden Datensatz des Typs `inbound-rtp`, der die Perspektive des lokalen Teilnehmers auf dieselben Daten beschreibt, die zwischen den beiden Teilnehmern bewegt werden. Lassen Sie uns eine Dienstprogrammfunktion erstellen, die uns hilft, den Wert eines Schlüssels im zugeordneten Statistikobjekt nachzuschlagen.

Die unten gezeigte Funktion `findReportEntry()` untersucht ein [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) und gibt den Statistikdatensatz basierend auf [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) zurück, der den angegebenen `key` enthält — _und_ für den der Schlüssel den angegebenen `value` hat. Wenn kein Treffer gefunden wird oder der Statistikbericht keinen Datensatz entsprechend der durch `key` angegebenen Statistik-Kategorie enthält.

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

Da das `RTCStatsReport` ein JavaScript-[`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) ist, können wir über die [`values()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/values) der Map iterieren, um jeden der auf `RTCStats` basierenden Statistikdatensätze im Bericht zu untersuchen, bis wir einen finden, der die Eigenschaft `key` mit dem angegebenen `value` hat. Wenn ein Treffer gefunden wird, wird das Statistikobjekt zurückgegeben.

Wenn kein Treffer gefunden wird, gibt die Funktion `null` zurück.

#### Die Hauptfunktion networkTestStop()

Schauen wir uns nun die `networkTestStop()`-Funktion selbst an. Sie nimmt die getestete [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) als Eingabe, ruft `getStats()` auf, um einen neuen `RTCStatsReport` mit aktuellen Statistiken zu erhalten, berechnet dann die gesuchten Ergebnisse und gibt diese wie angemessen an den Benutzer aus, indem der entsprechende HTML-Code zu den Inhalten des {{HTMLElement("div")}}-Elements hinzugefügt wird, dessen Klasse `stats-box` ist.

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

Das passiert in der `networkTestStop()`-Funktion: Nachdem die Methode [`getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) aufgerufen wurde, um den neuesten Statistikbericht für die Verbindung zu erhalten und in `endReport` zu speichern. Dies ist ein [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Objekt, das Strings zu Objekten des entsprechenden auf [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) basierenden Typs zuordnet.

Nun können wir mit der Verarbeitung der Ergebnisse beginnen, beginnend mit den abschließenden Statistiken in `endReport`. In diesem Fall suchen wir nach Statistikdatensätzen, deren `type` `remote-outbound-rtp` ist, daher iterieren wir über die Einträge im Statistikbericht, bis wir einen Eintrag dieses Typs finden. Dieses Objekt ist konkret vom Typ [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats) und bietet Statistiken, die Details über den Zustand der Dinge _aus der Perspektive des entfernten Teilnehmers_ liefern. Dieser Statistikdatensatz wird in `endRemoteOutbound` gespeichert.

Sobald der abschließende `remote-outbound-rtp`-Datensatz gefunden ist, verwenden wir seine [`id`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/id)-Eigenschaft, um seine ID zu erhalten. Damit in der Hand können wir den `remote-outbound-rtp`-Datensatz im Anfangsstatistikdatensatz (`startReport`) nachschlagen, den wir in `startRemoteOutbound` speichern.

Jetzt sichern wir die `inbound-rtp`-Statistiken, die diesen beiden `remote-outbound-rtp`-Datensätzen entsprechen, indem wir die `remoteId`-Eigenschaft innerhalb von ihnen finden, deren Wert die ID des `remote-outbound-rtp`-Datensatzes ist. Wir verwenden die in der vorherigen Sektion beschriebene Funktion `findReportEntry()`, um die gefundenen `inbound-rtp`-Datensätze in `startInboundStats` und `endInboundStats` zu speichern.

Jetzt haben wir alle rohen Statistiken, die erforderlich sind, um die Informationen zu berechnen, die wir anzeigen möchten, also tun wir das:

- Wir berechnen die Zeit—`elapsedTime`—die zwischen den beiden Berichten verstrichen ist, indem wir die [`timestamp`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/timestamp) von `startReport` von derjenigen von `endReport` subtrahieren. Dann teilen wir durch 1000, um das Ergebnis von Millisekunden in Sekunden umzurechnen.
- Wir berechnen die Anzahl der während dieses Zeitraums gesendeten Pakete—`packetsSent`—indem wir die Werte der beiden Berichte für die Eigenschaft [`packetsSent`](/de/docs/Web/API/RTCSentRtpStreamStats/packetsSent) voneinander abziehen.
- Ebenso wird die Anzahl der in diesem Intervall gesendeten Bytes—`bytesSent`—berechnet, indem die [`bytesSent`](/de/docs/Web/API/RTCSentRtpStreamStats/bytesSent)-Eigenschaft des Anfangsstatistikobjekts von derjenigen der Endstatistik abgezogen wird.
- Die Anzahl der während dieses Intervalls dekodierten Frames—`framesDecoded`—wird ermittelt, indem `startRecord`s [`framesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesDecoded) von `endRecord.framesDecoded` subtrahiert wird.
- Schließlich wird die Bildfrequenz über den verstrichenen Zeitraum berechnet, indem `framesDecoded` durch `elapsedTime` geteilt wird.

Der Rest der `networkTestStop()`-Funktion erstellt das HTML, das verwendet wird, um die Ausgabe der gesammelten und berechneten Ergebnisse für den Benutzer anzuzeigen, und fügt es dann dem Element `statsBox` hinzu, das wir verwenden, um die Statusaktualisierungen dem Benutzer anzuzeigen.

Das Ausgabelog sieht, angesichts der in diesem Beispiel verwendeten Stile, wie folgt aus:

![Ein Screenshot des Beispiels, das aufgezeichnete Statistiken zeigt, die aus gepaarten remote-outbound-rtp- und inbound-rtp-Statistikdatensätzen stammen](rtc-log-screenshot.png)

Auf dem Screenshot sehen wir eine Überschrift, gefolgt von dem scrollbar {{HTMLElement("div")}}, das wir als `statsBox` bezeichnen. Die Box enthält eine Reihe von Logeinträgen, von denen die letzten sichtbar sind. Jeder Eintrag repräsentiert ungefähr eine Sekunde Zeit (da wir so lange warten, zwischen dem Aufruf von `networkTestStart()` und `networkTestStop()`).

### Probieren Sie es aus und verzweigen Sie es

Dieses Beispiel ist [auf Glitch verfügbar, um es auszuprobieren](https://websocket-webrtc-chat-with-stats.glitch.me/), zu untersuchen oder zu remixen.

[Remixe es](https://glitch.com/edit/?utm_content=project_websocket-webrtc-chat-with-stats&utm_source=remix_this&utm_medium=button&utm_campaign=glitchButton#!/remix/websocket-webrtc-chat-with-stats)

[Quellcode ansehen](https://glitch.com/edit/?utm_content=project_websocket-webrtc-chat-with-stats&utm_source=view_source&utm_medium=button&utm_campaign=glitchButton#!/websocket-webrtc-chat-with-stats)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
