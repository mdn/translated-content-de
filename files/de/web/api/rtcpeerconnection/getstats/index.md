---
title: "RTCPeerConnection: Methode getStats()"
short-title: getStats()
slug: Web/API/RTCPeerConnection/getStats
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die **`getStats()`**-Methode des {{domxref("RTCPeerConnection")}}-Interfaces gibt ein Promise zurück, das mit Daten aufgelöst wird, die Statistiken entweder über die gesamte Verbindung oder über den angegebenen {{domxref("MediaStreamTrack")}} bereitstellen.

## Syntax

```js-nolint
getStats()
getStats(selector)

getStats(selector, successCallback, failureCallback) // veraltet
```

### Parameter

- `selector` {{optional_inline}}
  - : Ein {{domxref("MediaStreamTrack")}}, für den Statistiken gesammelt werden sollen.
    Wenn dieser Wert `null` ist (der Standardwert), werden Statistiken für das gesamte {{domxref("RTCPeerConnection")}} gesammelt.

### Veraltete Parameter

In älterem Code und Dokumentation können Sie eine rückruffähige Version dieser Funktion sehen.
Diese ist veraltet und ihre Verwendung wird **streng** abgeraten.
Sie sollten jeden bestehenden Code aktualisieren, um die auf {{jsxref("Promise")}} basierende Version von `getStats()` zu verwenden.
Die Parameter für die ältere Form von `getStats()` sind unten beschrieben, um bei der Aktualisierung von bestehendem Code zu helfen.

- `successCallback` {{deprecated_inline}}
  - : Eine [Rückruffunktion](/de/docs/Glossary/Callback_function), die aufgerufen wird, sobald der Bericht erfolgreich erstellt wurde.
- `failureCallback` {{deprecated_inline}}
  - : Eine [Rückruffunktion](/de/docs/Glossary/Callback_function), die aufgerufen wird, wenn der Bericht nicht erstellt werden konnte.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{domxref("RTCStatsReport")}}-Objekt aufgelöst wird, das Verbindungsstatistiken bereitstellt.
Der Inhalt des Berichts hängt vom `selector` und anderen Details der Verbindung ab.

### Ausnahmen

Diese Methode wirft keine Ausnahmen; stattdessen wird das zurückgegebene Promise mit einem der folgenden Fehler abgelehnt:

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn kein {{domxref("RTCRtpSender")}} oder {{domxref("RTCRtpReceiver")}} vorhanden ist, dessen `track` mit dem angegebenen `selector` übereinstimmt, oder wenn der `selector` mit mehr als einem Sender oder Empfänger übereinstimmt.

## Beispiele

Dieses Beispiel erstellt eine periodische Funktion mit
{{domxref("setInterval()")}}, die jede Sekunde Statistiken für eine {{domxref("RTCPeerConnection")}} sammelt, einen
HTML-formatierten Bericht erstellt und diesen in ein bestimmtes Element im DOM einfügt.

```js
setInterval(() => {
  myPeerConnection.getStats(null).then((stats) => {
    let statsOutput = "";

    stats.forEach((report) => {
      statsOutput +=
        `<h2>Report: ${report.type}</h2>\n<strong>ID:</strong> ${report.id}<br>\n` +
        `<strong>Timestamp:</strong> ${report.timestamp}<br>\n`;

      // Hier sind die Statistiken für diesen Bericht; die oben sortierten lassen wir absichtlich weg

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

Dies funktioniert, indem `getStats()` aufgerufen wird und dann, wenn das Promise aufgelöst wird, über die {{domxref("RTCStatsReport")}}-Objekte in dem zurückgegebenen {{domxref("RTCStatsReport")}} iteriert wird.
Für jeden Bericht wird ein Abschnitt erstellt, der eine Überschrift enthält und darunter alle Statistiken, wobei der Typ, die ID und der Zeitstempel speziell behandelt werden, um sie an den Anfang der Liste zu setzen.

Sobald das [HTML](/de/docs/Web/HTML) für den Bericht generiert ist, wird es durch Setzen der {{domxref("Element.innerHTML", "innerHTML")}}-Eigenschaft in das Element eingefügt, dessen Klasse `"stats-box"` ist.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
