---
title: "RTCRemoteOutboundRtpStreamStats: localId-Eigenschaft"
short-title: localId
slug: Web/API/RTCRemoteOutboundRtpStreamStats/localId
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

{{APIRef("WebRTC")}}

Die **`localId`**-Eigenschaft des [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats)-Dictionaries ist ein String, der verwendet werden kann, um das [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Objekt zu identifizieren, dessen [`remoteId`](/de/docs/Web/API/RTCInboundRtpStreamStats/remoteId) mit diesem Wert übereinstimmt.

Diese beiden Objekte liefern zusammen Statistiken über die eingehende und ausgehende Seite derselben Synchronisationsquelle (SSRC).

## Wert

Ein String, der mit dem Wert der [`remoteId`](/de/docs/Web/API/RTCInboundRtpStreamStats/remoteId)-Eigenschaft eines [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Objekts verglichen werden kann, um zu prüfen, ob die beiden Statistiken für jede der beiden Seiten desselben Datensatzes darstellen, der vom lokalen Peer empfangen wurde.

## Nutzungshinweise

Sie können sich die lokalen und entfernten Ansichten desselben RTP-Streams als Paare vorstellen, die jeweils eine Referenz zueinander haben.
Daher sollte ein [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport), das ein Statistikobjekt vom Typ `remote-outbound-rtp` (vom Typ `RTCRemoteOutboundRtpStreamStats`) enthält, auch ein entsprechendes `inbound-rtp`-Objekt enthalten.
Beide liefern Informationen über denselben Paketstapel, der vom entfernten Peer an das lokale Gerät gesendet wird.

Der Unterschied besteht darin, dass `remote-outbound-rtp` Statistiken über die vom entfernten Peer gesendeten Daten aus der Perspektive des entfernten Peers beschreibt, während `inbound-rtp` Statistiken über die eingehenden Daten aus der Perspektive des lokalen Peers bietet.

## Beispiele

In diesem Beispiel haben wir ein Paar von Funktionen: die erste, `networkTestStart()`, erfasst einen anfänglichen Bericht, und die zweite, `networkTestStop()`, erfasst einen zweiten Bericht.
Die zweite Funktion verwendet die beiden Berichte, um einige Informationen über die Netzwerkbedingungen auszugeben.

### networkTestStart()

Diese Funktion ruft die Methode [`getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) auf, um einen [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) anzufordern und ihn in der Variable `startReport` zu speichern.

```js
let startReport;

async function networkTestStart(pc) {
  if (pc) {
    startReport = await pc.getStats();
  }
}
```

Gegeben ein [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), `pc`, ruft diese Funktion die Methode [`getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) auf, um ein Statistikberichtobjekt zu erhalten, das es in `startReport` speichert, um es zu verwenden, sobald die Endtestdaten von `networkTestStop()` gesammelt wurden.

### networkTestStop()

Die Funktion `networkTestStop()` erhält einen zweiten Bericht, `endReport`, und berechnet und gibt dann die Ergebnisse aus.

#### Paired-Statistiken finden

Jeder Statistikdatensatz vom [`type`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/type) `remote-outbound-rtp` (der Statistiken eines entfernten Peers über das Senden von Daten an den lokalen Peer beschreibt) hat einen entsprechenden Datensatz vom Typ `inbound-rtp`, der die Sicht des lokalen Peers auf dieselben Daten beschreibt, die zwischen den beiden Peers verschoben werden.
Lassen Sie uns eine Hilfsfunktion erstellen, die uns hilft, den Wert eines Schlüssels im gepaarten Statistikobjekt nachzuschlagen.

Die unten gezeigte Funktion `findReportEntry()` durchsucht ein [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) und gibt den auf [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-basierenden Statistikdatensatz zurück, der den angegebenen `Schlüssel` enthält — _und_ für den der Schlüssel den angegebenen `Wert` hat.
Wenn kein Treffer gefunden wird oder der Statistikbericht keinen Datensatz entsprechend der durch `Schlüssel` angegebenen Statistikkategorie hat.

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

Da das `RTCStatsReport` ein JavaScript-[`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) ist, können wir die [`values()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/values) dieser Map iterieren, um jeden der auf `RTCStats`-basierten Statistikdatensätze im Bericht zu untersuchen, bis wir einen finden, der die `key`-Eigenschaft mit dem angegebenen `value` hat.
Wenn ein Treffer gefunden wird, wird das Statistikobjekt zurückgegeben.

Wenn kein Treffer gefunden wird, gibt die Funktion `null` zurück.

#### Die Hauptfunktion networkTestStop()

Nun sehen wir uns die Funktion `networkTestStop()` selbst an. Sie nimmt als Eingabe die getestete [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), ruft `getStats()` auf, um einen neuen `RTCStatsReport` mit aktuellen Statistiken zu erhalten, und berechnet dann die gesuchten Ergebnisse und gibt diese entsprechend dem Benutzer aus, indem sie geeigneten HTML-Code an den Inhalt des {{HTMLElement("div")}}-Elements anhängt, dessen Klasse `stats-box` ist.

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

Hier ist, was in der `networkTestStop()`-Funktion passiert: Nachdem die Methode [`getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) aufgerufen wurde, um den neuesten Statistikbericht für die Verbindung zu erhalten, wird dieser in `endReport` gespeichert.
Dies ist ein [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Objekt, das Strings auf Objekte des entsprechenden auf [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-basierten Typs abbildet.

Jetzt können wir anfangen, die Ergebnisse zu verarbeiten, beginnend mit den Endstatistiken, die in `endReport` gefunden wurden.
In diesem Fall suchen wir nach Statistikdatensätzen, deren `type` `remote-outbound-rtp` ist, also durchlaufen wir die Einträge im Statistikbericht, bis wir einen Eintrag dieses Typs finden.
Dieses Objekt ist speziell vom Typ [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats), und es liefert Statistiken, die Details über den Zustand der Dinge _aus der Perspektive des entfernten Peers_ bieten.
Dieser Statistikdatensatz wird in `endRemoteOutbound` gespeichert.

Sobald der `remote-outbound-rtp`-Enddatensatz gefunden ist, verwenden wir seine [`id`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/id)-Eigenschaft, um seine ID zu erhalten.
Damit in der Hand können wir den `remote-outbound-rtp`-Datensatz im Startstatistikdatensatz (`startReport`) nachschlagen, den wir in `startRemoteOutbound` speichern.

Nun erhalten wir die `inbound-rtp`-Statistiken, die diesen beiden `remote-outbound-rtp`-Datensätzen entsprechen, indem wir die `remoteId`-Eigenschaft innerhalb von ihnen finden, deren Wert die ID des `remote-outbound-rtp`-Datensatzes ist.
Wir verwenden die in der vorherigen Sektion beschriebene `findReportEntry()`-Funktion dafür und speichern die gefundenen `inbound-rtp`-Datensätze in `startInboundStats` und `endInboundStats`.

Jetzt haben wir alle Rohstatistiken, die benötigt werden, um die Informationen zu berechnen, die wir anzeigen möchten, also tun wir dies:

- Wir berechnen die verstrichene Zeit—`elapsedTime`—die zwischen den beiden Berichten verstrichen ist, indem wir den [`timestamp`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/timestamp) von `startReport` von dem von `endReport` abziehen.
  Dann teilen wir durch 1000, um das Ergebnis von Millisekunden in Sekunden umzurechnen.
- Wir berechnen die Anzahl der während dieses Intervalls gesendeten Pakete—`packetsSent`—indem wir die Werte der beiden Berichte für die [`packetsSent`](/de/docs/Web/API/RTCSentRtpStreamStats/packetsSent)-Eigenschaft voneinander abziehen.
- Ebenso wird die Anzahl der während dieses Intervalls gesendeten Bytes—`bytesSent`—berechnet, indem wir die [`bytesSent`](/de/docs/Web/API/RTCSentRtpStreamStats/bytesSent)-Eigenschaft des Startstatistikobjekts von der der Endstatistiken abziehen.
- Die Anzahl der während dieses Intervalls dekodierten Frames—`framesDecoded`—wird bestimmt, indem `startRecord`'s [`framesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesDecoded) von `endRecord.framesDecoded` subtrahiert wird.
- Schließlich wird die Bildrate über den verstrichenen Zeitraum berechnet, indem `framesDecoded` durch `elapsedTime` geteilt wird.

Der Rest der `networkTestStop()`-Funktion konstruiert das HTML, das verwendet wird, um die Ausgabe der gesammelten und berechneten Ergebnisse dem Benutzer anzuzeigen, und fügt es dann dem Element `statsBox` hinzu, das wir verwenden, um die Statusaktualisierungen dem Benutzer anzuzeigen.

Das Ausgabelog, unter Berücksichtigung der im Beispiel verwendeten Stile, sieht folgendermaßen aus:

![Ein Screenshot des Beispiels, der aufgezeichnete Statistiken aus gepaarten remote-outbound-rtp und inbound-rtp Statistikatensätzen zeigt](rtc-log-screenshot.png)

Im Screenshot sehen wir eine Überschrift, gefolgt von dem scrollbaren {{HTMLElement("div")}}, den wir als `statsBox` bezeichnen.
Die Box enthält eine Reihe von Logeinträgen, von denen die letzten wenige sichtbar sind.
Jeder repräsentiert ungefähr eine Sekunde Zeit (da wir so lange warten, zwischen dem Aufruf von `networkTestStart()` und `networkTestStop()`).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
