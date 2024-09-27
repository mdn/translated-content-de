---
title: "RTCPeerConnection: getStats()-Methode"
short-title: getStats()
slug: Web/API/RTCPeerConnection/getStats
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die **`getStats()`**-Methode des [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Interfaces gibt ein Promise zurück, das mit Daten aufgelöst wird, die Statistiken entweder über die gesamte Verbindung oder über das angegebene [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) bereitstellen.

## Syntax

```js-nolint
getStats()
getStats(selector)

getStats(selector, successCallback, failureCallback) // deprecated
```

### Parameter

- `selector` {{optional_inline}}
  - : Ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), für den Statistiken gesammelt werden sollen.
    Wenn dieser `null` ist (der Standardwert), werden Statistiken für die gesamte [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesammelt.

### Veraltete Parameter

In älterem Code und Dokumentation können Sie eine rückrufbasierte Version dieser Funktion sehen.
Diese wurde veraltet und ihre Nutzung wird **stark** entmutigt.
Sie sollten vorhandenen Code aktualisieren, um stattdessen die auf {{jsxref("Promise")}} basierende Version von `getStats()` zu verwenden.
Die Parameter der älteren Form von `getStats()` sind unten beschrieben, um bei der Aktualisierung von vorhandenem Code zu helfen.

- `successCallback` {{deprecated_inline}}
  - : Eine [Callback-Funktion](/de/docs/Glossary/Callback_function), die aufgerufen wird, sobald der Bericht erfolgreich erstellt wurde.
- `failureCallback` {{deprecated_inline}}
  - : Eine [Callback-Funktion](/de/docs/Glossary/Callback_function), die aufgerufen wird, sobald der Bericht nicht erstellt werden konnte.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Objekt aufgelöst wird, das Verbindungsstatistiken bereitstellt.
Der Inhalt des Berichts hängt vom `selector` und anderen Details der Verbindung ab.

### Ausnahmen

Diese Methode wirft keine Ausnahmen; stattdessen lehnt sie das zurückgegebene Promise mit einem der folgenden Fehler ab:

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn kein [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) oder [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) vorhanden ist, dessen `track` mit dem angegebenen `selector` übereinstimmt, oder wenn
    der `selector` mit mehr als einem Sender oder Empfänger übereinstimmt.

## Beispiele

Dieses Beispiel erstellt eine periodische Funktion mit
[`setInterval()`](/de/docs/Web/API/SetInterval), die jede Sekunde Statistiken für einen [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) sammelt, einen
HTML-formatierten Bericht generiert und ihn in ein bestimmtes Element im DOM einfügt.

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

Dies funktioniert, indem `getStats()` aufgerufen wird und dann, wenn das Promise aufgelöst wird, über die [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Objekte im zurückgegebenen [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) iteriert wird.
Ein Abschnitt wird für jeden Bericht mit einem Header und allen darunterliegenden Statistiken erstellt, wobei der Typ, die ID und der Zeitstempel speziell behandelt werden, um sie an den Anfang der Liste zu setzen.

Sobald das [HTML](/de/docs/Web/HTML) für den Bericht generiert ist, wird es in das Element, dessen Klasse `"stats-box"` ist, eingefügt, indem seine [`innerHTML`](/de/docs/Web/API/Element/innerHTML)-Eigenschaft gesetzt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
