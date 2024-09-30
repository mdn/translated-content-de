---
title: "RTCPeerConnection: Methode getStats()"
short-title: getStats()
slug: Web/API/RTCPeerConnection/getStats
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die **`getStats()`** Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle gibt ein Promise zurück, das mit Daten aufgelöst wird, die Statistiken entweder über die gesamte Verbindung oder über das angegebene [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) bereitstellen.

## Syntax

```js-nolint
getStats()
getStats(selector)

getStats(selector, successCallback, failureCallback) // deprecated
```

### Parameter

- `selector` {{optional_inline}}
  - : Ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), für das Statistiken gesammelt werden sollen. Wenn dies `null` (der Standardwert) ist, werden Statistiken für die gesamte [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesammelt.

### Veraltete Parameter

In älterem Code und Dokumentationen könnte eine rückrufbasierte Version dieser Funktion zu sehen sein. Diese ist veraltet und ihre Verwendung wird **stark** abgeraten. Sie sollten bestehenden Code aktualisieren, um die auf {{jsxref("Promise")}} basierende Version von `getStats()` zu verwenden. Die Parameter für die ältere Form von `getStats()` sind unten beschrieben, um bei der Aktualisierung bestehenden Codes zu helfen.

- `successCallback` {{deprecated_inline}}
  - : Eine [Callback-Funktion](/de/docs/Glossary/Callback_function), die aufgerufen wird, sobald der Bericht erfolgreich erstellt wurde.
- `failureCallback` {{deprecated_inline}}
  - : Eine [Callback-Funktion](/de/docs/Glossary/Callback_function), die aufgerufen wird, wenn der Bericht nicht erstellt werden konnte.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Objekt aufgelöst wird, das Verbindungsstatistiken bereitstellt. Der Inhalt des Berichts hängt vom `selector` und anderen Details der Verbindung ab.

### Ausnahmen

Diese Methode wirft keine Ausnahmen; stattdessen lehnt sie das zurückgegebene Promise mit einem der folgenden Fehler ab:

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn es keinen [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) oder [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) gibt, dessen `track` dem angegebenen `selector` entspricht, oder wenn `selector` mit mehr als einem Sender oder Empfänger übereinstimmt.

## Beispiele

Dieses Beispiel erstellt eine periodische Funktion mit [`setInterval()`](/de/docs/Web/API/SetInterval), die jede Sekunde Statistiken für eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) sammelt, einen HTML-formatierten Bericht erstellt und ihn in ein bestimmtes Element im DOM einfügt.

```js
setInterval(() => {
  myPeerConnection.getStats(null).then((stats) => {
    let statsOutput = "";

    stats.forEach((report) => {
      statsOutput +=
        `<h2>Report: ${report.type}</h2>\n<strong>ID:</strong> ${report.id}<br>\n` +
        `<strong>Timestamp:</strong> ${report.timestamp}<br>\n`;

      // Now the statistics for this report; we intentionally drop the ones we
      // sorted to the top above

      Object.keys(report).forEach((statName) => {
        if (
          statName !== "id" &&
          statName !== "timestamp" &&
          statName !== "type"
        ) {
          statsOutput += `<strong>${statName}:</strong> ${report[statName]}<br>\n`;
        }
      });
    });

    document.querySelector(".stats-box").innerHTML = statsOutput;
  });
}, 1000);
```

Dies funktioniert, indem `getStats()` aufgerufen wird und nach der Auflösung des Promises über die [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Objekte auf dem zurückgegebenen [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) iteriert wird. Für jeden Bericht wird ein Abschnitt mit einer Überschrift und allen darunter liegenden Statistiken erstellt, wobei Typ, ID und Zeitstempel speziell behandelt werden, um sie an den Anfang der Liste zu setzen.

Sobald das [HTML](/de/docs/Web/HTML) für den Bericht erstellt ist, wird es in das Element mit der Klasse `"stats-box"` injiziert, indem dessen [`innerHTML`](/de/docs/Web/API/Element/innerHTML)-Eigenschaft gesetzt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
