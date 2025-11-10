---
title: "RTCRemoteOutboundRtpStreamStats: localId-Eigenschaft"
short-title: localId
slug: Web/API/RTCRemoteOutboundRtpStreamStats/localId
l10n:
  sourceCommit: a9022d6a71668aa945c6a0c1dbe0d531a98e0816
---

{{APIRef("WebRTC")}}

Die **`localId`**-Eigenschaft des [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats)-Wörterbuchs ist ein String, der verwendet werden kann, um das [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Objekt zu identifizieren, dessen [`remoteId`](/de/docs/Web/API/RTCInboundRtpStreamStats/remoteId) mit diesem Wert übereinstimmt.

Zusammen bieten diese beiden Objekte Statistiken über die ein- und ausgehenden Seiten derselben Synchronisationsquelle (SSRC).

## Wert

Ein String, der mit dem Wert einer [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Objekteigenschaft [`remoteId`](/de/docs/Web/API/RTCInboundRtpStreamStats/remoteId) verglichen werden kann, um festzustellen, ob die beiden Statistiken für jede der beiden Seiten desselben Datensatzes repräsentieren, der vom lokalen Peer empfangen wird.

## Verwendungshinweise

Sie können sich die lokale und entfernte Ansicht desselben RTP-Streams als Paare vorstellen, von denen jedes einen Bezug zum anderen hat.
Wenn ein [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) ein `remote-outbound-rtp`-Statistikobjekt (vom Typ `RTCRemoteOutboundRtpStreamStats`) enthält, sollte es auch ein entsprechendes `inbound-rtp`-Objekt haben.
Beide bieten Informationen über denselben Satz von Paketen, die vom entfernten Peer zum lokalen Gerät übertragen werden.

Der Unterschied besteht darin, dass `remote-outbound-rtp` Statistiken über Daten beschreibt, die vom entfernten Peer aus dessen Perspektive gesendet werden, während `inbound-rtp` Statistiken über die eingehenden Daten aus der Perspektive des lokalen Peers bietet.

## Beispiele

In diesem Beispiel haben wir ein Paar von Funktionen: Die erste, `networkTestStart()`, erfasst einen anfänglichen Bericht, und die zweite, `networkTestStop()`, erfasst einen zweiten Bericht.
Die zweite Funktion verwendet die beiden Berichte, um einige Informationen über die Netzwerkbedingungen auszugeben.

### networkTestStart()

Diese Funktion ruft die Methode [`getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) auf, um einen [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) anzufordern und diesen in der Variablen `startReport` zu speichern.

```js
let startReport;

async function networkTestStart(pc) {
  if (pc) {
    startReport = await pc.getStats();
  }
}
```

Angenommen, wir haben eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), `pc`. Diese ruft die Methode [`getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) auf, um ein Statistikberichtobjekt zu erhalten, das in `startReport` gespeichert wird, um es zu verwenden, sobald die End-Daten vom `networkTestStop()` gesammelt wurden.

### networkTestStop()

Die Funktion `networkTestStop()` erhält einen zweiten Bericht, `endReport`, berechnet die Ergebnisse und gibt sie aus.

#### Finden von gekoppelten Statistiken

Jeder Statistikdatensatz vom [`type`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/type) `remote-outbound-rtp` (der Statistiken eines entfernten Peers über das Senden von Daten an den lokalen Peer beschreibt) hat einen entsprechenden Datensatz vom Typ `inbound-rtp`, der die Perspektive des lokalen Peers auf dieselben Daten beschreibt, die zwischen den beiden Peers bewegt werden.
Erstellen wir eine Hilfsfunktion, um uns beim Suchen des Werts eines Schlüssels im gekoppelten Statistikobjekt zu unterstützen.

Die unten gezeigte Funktion `findReportEntry()` untersucht einen [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) und gibt den [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-basierten Statistikdatensatz zurück, der den angegebenen `key` enthält — _und_ für den der Schlüssel den angegebenen `value` hat.
Wenn keine Übereinstimmung gefunden wird oder der Statistikbericht keinen Datensatz entsprechend der durch `key` angegebenen Statistik-Kategorie hat.

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

Da der `RTCStatsReport` eine JavaScript-[`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) ist, können wir die [`values()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/values) der Karte durchlaufen, um jeden der auf `RTCStats` basierenden Statistikdatensätze im Bericht zu prüfen, bis wir einen finden, der die `key`-Eigenschaft mit dem angegebenen `value` hat.
Wenn eine Übereinstimmung gefunden wird, wird das Statistikobjekt zurückgegeben.

Wenn keine Übereinstimmung gefunden wird, gibt die Funktion `null` zurück.

#### Die Hauptfunktion networkTestStop()

Schauen wir uns nun die `networkTestStop()`-Funktion selbst an. Sie nimmt als Eingabe die getestete [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), ruft `getStats()` auf, um einen neuen `RTCStatsReport` mit aktuellen Statistiken zu erhalten, und berechnet dann die gesuchten Ergebnisse, indem sie diese Ergebnisse dem Benutzer durch Anhängen von geeignetem HTML an den Inhalt des {{HTMLElement("div")}}-Elements ausgibt, dessen Klasse `stats-box` ist.

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

Das ist es, was in der `networkTestStop()`-Funktion passiert: Nachdem die Methode [`getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) aufgerufen wurde, um den neuesten Statistikbericht für die Verbindung zu erhalten und ihn in `endReport` zu speichern.
Dies ist ein [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Objekt, das Strings zu Objekten des entsprechenden auf [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) basierenden Typs abbildet.

Nun können wir beginnen, die Ergebnisse zu verarbeiten, ausgehend mit den Endstatistiken, die in `endReport` gefunden wurden.
In diesem Fall suchen wir nach Statistikdatensätzen, deren `type` `remote-outbound-rtp` ist, also durchlaufen wir die Einträge im Statistikbericht, bis wir einen Eintrag dieses Typs finden.
Dieses Objekt ist speziell vom Typ [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats) und liefert Statistiken, die Details über den Zustand der Dinge _aus der Perspektive des entfernten Peers_ geben.
Dieser Statistikdatensatz wird in `endRemoteOutbound` gespeichert.

Sobald der Enddatensatz `remote-outbound-rtp` gefunden ist, verwenden wir dessen [`id`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/id)-Eigenschaft, um seine ID zu erhalten.
Damit in der Hand können wir den `remote-outbound-rtp`-Datensatz im Startstatistikdatensatz (`startReport`) nachschlagen, den wir dann in `startRemoteOutbound` speichern.

Nun erhalten wir die `inbound-rtp`-Statistiken, die diesen beiden `remote-outbound-rtp`-Datensätzen entsprechen, indem wir die `remoteId`-Eigenschaft in ihnen finden, deren Wert die ID des `remote-outbound-rtp`-Datensatzes ist.
Wir verwenden dazu die in dem vorhergehenden Abschnitt beschriebene Funktion `findReportEntry()` und speichern die gefundenen `inbound-rtp`-Datensätze in `startInboundStats` und `endInboundStats`.

Nun haben wir alle Rohdaten, die benötigt werden, um die Informationen zu berechnen, die wir anzeigen wollen, also tun wir dies:

- Wir berechnen die vergangene Zeit—`elapsedTime`—zwischen den beiden gesendeten Berichten, indem wir den [`timestamp`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats/timestamp) von `startReport` von dem von `endReport` subtrahieren.
  Dann teilen wir durch 1000, um das Ergebnis von Millisekunden in Sekunden umzurechnen.
- Wir berechnen die Anzahl der gesendeten Pakete während dieses Intervalls—`packetsSent`—indem wir die Werte für die [`packetsSent`](/de/docs/Web/API/RTCSentRtpStreamStats/packetsSent)-Eigenschaft der beiden Berichte subtrahieren.
- Ähnlich wird die Anzahl der während dieses Intervalls gesendeten Bytes—`bytesSent`—berechnet, indem die [`bytesSent`](/de/docs/Web/API/RTCSentRtpStreamStats/bytesSent)-Eigenschaft des Startstatistikobjekts von der des Endstatistikobjekts subtrahiert wird.
- Die Anzahl der während dieses Intervalls dekodierten Frames—`framesDecoded`—wird ermittelt, indem die [`framesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesDecoded) von `startRecord` von `endRecord.framesDecoded` subtrahiert wird.
- Schließlich wird die Framerate über die vergangene Zeitspanne berechnet, indem `framesDecoded` durch `elapsedTime` geteilt wird.

Der Rest der `networkTestStop()`-Funktion konstruiert das HTML, das verwendet wird, um die Ausgabe der gesammelten und berechneten Ergebnisse an den Benutzer anzuzeigen und sie dann an das Element `statsBox` anzuhängen, das wir verwenden, um die Statusaktualisierungen an den Benutzer anzuzeigen.

Das Ausgabenprotokoll, gegeben durch die im Beispiel verwendeten Styles, sieht so aus:

![Ein Screenshot des Beispiels, das aufgezeichnete Statistiken aus gepaarten remote-outbound-rtp- und inbound-rtp-Statistikdatensätzen zeigt](rtc-log-screenshot.png)

Im Screenshot sehen wir eine Überschrift gefolgt von dem scrollbar {{HTMLElement("div")}}, den wir als `statsBox` bezeichnen.
Die Box enthält eine Reihe von Protokolleinträgen, die letzten Handvoll von ihnen sind sichtbar.
Jeder repräsentiert etwa eine Sekunde Zeit (da das die Zeit ist, die wir zwischen den Aufrufen von `networkTestStart()` und `networkTestStop()` warten).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
