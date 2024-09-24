---
title: "RTCPeerConnection: getStats()-Methode"
short-title: getStats()
slug: Web/API/RTCPeerConnection/getStats
l10n:
  sourceCommit: b795bc99fc5c5d8a96c1b202a12750404085c28a
---

{{APIRef("WebRTC")}}

Die **`getStats()`**-Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle gibt ein Promise zurück, das mit Daten aufgelöst wird, die Statistiken über entweder die Gesamtverbindung oder über den angegebenen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) bieten.

## Syntax

```js-nolint
getStats()
getStats(selector)

getStats(selector, successCallback, failureCallback) // deprecated
```

### Parameter

- `selector` {{optional_inline}}
  - : Ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), für den Statistiken gesammelt werden sollen.
    Wenn dies `null` (der Standardwert) ist, werden Statistiken für die gesamte [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesammelt.

### Veraltete Parameter

In älterem Code und Dokumentationen könnte eine rückrufbasierte Version dieser Funktion zu sehen sein.
Diese ist veraltet und ihre Verwendung wird **dringend** abgeraten.
Sie sollten bestehenden Code aktualisieren, um die auf {{jsxref("Promise")}} basierende Version von `getStats()` zu verwenden.
Die Parameter der älteren Form von `getStats()` sind unten beschrieben, um bei der Aktualisierung vorhandenen Codes zu helfen.

- `successCallback` {{deprecated_inline}}
  - : Eine {{Glossary("Callback_function", "Callback-Funktion")}}, die aufgerufen wird, sobald der Bericht erfolgreich erstellt wurde.
- `failureCallback` {{deprecated_inline}}
  - : Eine {{Glossary("Callback_function", "Callback-Funktion")}}, die aufgerufen wird, wenn die Erstellung des Berichts fehlgeschlagen ist.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Objekt aufgelöst wird, das Verbindungsstatistiken bereitstellt.
Der Inhalt des Berichts hängt vom `selector` und anderen Details der Verbindung ab.

### Ausnahmen

Diese Methode wirft keine Ausnahmen; stattdessen lehnt sie das zurückgegebene Promise mit einem der folgenden Fehler ab:

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn kein [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) oder [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) vorhanden ist, dessen `track` dem angegebenen `selector` entspricht, oder
    `selector` mehr als einem Sender oder Empfänger entspricht.

## Beispiele

Dieses Beispiel erstellt eine periodische Funktion unter Verwendung von
[`setInterval()`](/de/docs/Web/API/Window/setInterval), die alle Sekunde
Statistiken für eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) sammelt, einen HTML-formatierten Bericht erstellt und ihn in ein bestimmtes Element im DOM einfügt.

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

Dies funktioniert, indem `getStats()` aufgerufen wird; wenn das Promise aufgelöst wird, iteriert es über die [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Objekte im zurückgegebenen [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport).
Ein Abschnitt wird für jeden Bericht mit einem Header und allen darunter liegenden Statistiken erstellt, wobei Typ, ID und Zeitstempel speziell behandelt werden, um sie am Anfang der Liste zu platzieren.

Sobald das [HTML](/de/docs/Web/HTML) für den Bericht generiert ist, wird es in das Element mit der Klasse `"stats-box"` eingefügt, indem seine [`innerHTML`](/de/docs/Web/API/Element/innerHTML)-Eigenschaft gesetzt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
