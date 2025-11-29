---
title: Audio Output Devices API
slug: Web/API/Audio_Output_Devices_API
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{DefaultAPISidebar("Audio Output Devices API")}}{{securecontext_header}}{{SeeCompatTable}}

Die **Audio Output Devices API** ermöglicht es Webanwendungen, Nutzer darüber zu informieren, welches Ausgabegerät für die Audiowiedergabe verwendet werden soll.

## Konzepte und Verwendung

Betriebssysteme ermöglichen es den Nutzern häufig, festzulegen, dass Audio über Lautsprecher, ein Bluetooth-Headset oder ein anderes Audio-Ausgabegerät abgespielt werden soll. Diese API erlaubt es Anwendungen, diese Funktionalität direkt aus einer Webseite heraus anzubieten.

Selbst wenn eine Erlaubnisrichtlinie dies zulässt, erfordert der Zugriff auf ein bestimmtes Audio-Ausgabegerät dennoch explizite Zustimmung durch den Nutzer, da sich dieser möglicherweise an einem Ort befindet, an dem die Wiedergabe über bestimmte Ausgabegeräte nicht angemessen ist.

Die API stellt die Methode [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput) bereit, die es Nutzern ermöglicht, ihr gewünschtes Audio-Ausgabegerät aus denen auszuwählen, die durch die Richtlinie [`speaker-selection`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection) des {{httpheader("Permissions-Policy")}} HTTP-Headers für das Dokument erlaubt sind. Das ausgewählte Gerät erhält dann die Erlaubnis des Nutzers, wodurch es mit [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) aufgelistet und als Audio-Ausgabegerät mit [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId) festgelegt werden kann.

Audio-Geräte können beliebig verbunden und getrennt werden. Anwendungen, die auf solche Änderungen reagieren möchten, können das [`devicechange`](/de/docs/Web/API/MediaDevices/devicechange_event) Ereignis überwachen und [`enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) verwenden, um festzustellen, ob `sinkId` in den zurückgegebenen Geräten vorhanden ist. Dies könnte beispielsweise das Pausieren oder Fortsetzen der Wiedergabe auslösen.

## Schnittstellen

### Erweiterungen zu anderen Schnittstellen

Die Audio Output Devices API erweitert die folgenden APIs und fügt die aufgeführten Funktionen hinzu:

#### MediaDevices

- [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput)
  - : Diese Methode fordert den Nutzer auf, ein spezifisches Audio-Ausgabegerät auszuwählen, beispielsweise einen Lautsprecher oder ein Headset. Die Auswahl eines Geräts gewährt die Nutzererlaubnis zur Nutzung dieses Geräts und gibt Informationen über das Gerät, einschließlich seiner ID, zurück.

#### HTMLMediaElement

- [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId)
  - : Diese Methode legt die ID des zur Ausgabe zu verwendenden Audiogeräts fest, das verwendet wird, sofern dies erlaubt ist.
- [`HTMLMediaElement.sinkId`](/de/docs/Web/API/HTMLMediaElement/sinkId)
  - : Diese Eigenschaft gibt die eindeutige ID des für die Ausgabe verwendeten Audiogeräts zurück oder einen leeren String, wenn das Standardgerät des Benutzeragenten verwendet wird.

## Sicherheitsanforderungen

Der Zugriff auf die API unterliegt den folgenden Einschränkungen:

- Alle Methoden und Eigenschaften dürfen nur in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) aufgerufen werden.

- [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput) gewährt eine Erlaubnis des Nutzers für ein ausgewähltes Gerät als Audio-Ausgang:
  - Der Zugang kann durch die [`speaker-selection`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection) HTTP [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) beschränkt sein.
  - [Transiente Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich. Der Nutzer muss mit der Seite oder einem UI-Element interagieren, damit die Methode aufgerufen werden kann.

- [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId) setzt eine erlaubte ID als Audio-Ausgabe:
  - Der Zugang kann durch die [`speaker-selection`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection) HTTP [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) beschränkt sein.
  - Eine Erlaubnis des Nutzers ist erforderlich, um eine nicht standardmäßige Geräte-ID zu setzen.
    - Diese Erlaubnis kann durch die Auswahl im von `MediaDevices.selectAudioOutput()` gestarteten Dialog gewährt werden.
    - Die Nutzererlaubnis, das Ausgabegerät zu setzen, wird implizit gewährt, wenn der Nutzer bereits die Erlaubnis für die Verwendung eines Medien-Eingabegeräts in derselben Gruppe mit [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erteilt hat.

<!-- Die folgende Zeile ist "wahr", aber in keinem Browser implementiert -->
<!-- Der Berechtigungsstatus kann mit der [Permissions API](/de/docs/Web/API/Permissions_API) Methode [`navigator.permissions.query()`](/de/docs/Web/API/Permissions/query) abgefragt werden, indem ein Berechtigungsdeskriptor mit der `speaker-selection` Berechtigung übergeben wird. -->

## Beispiele

Hier ist ein Beispiel für die Verwendung von `selectAudioOutput()`, innerhalb einer Funktion, die durch einen Button-Klick ausgelöst wird, und anschließendem Setzen des ausgewählten Geräts als Audio-Ausgabe.

Der Code überprüft zunächst, ob `selectAudioOutput()` unterstützt wird, und nutzt es dann, um ein Ausgabegerät auszuwählen und eine [Geräte-ID](/de/docs/Web/API/MediaDeviceInfo/deviceId) zurückzugeben. Dann spielen wir Audio über das Standardausgabegerät ab und rufen `setSinkId()` auf, um auf das ausgewählte Ausgabegerät umzuschalten.

```js
document.querySelector("#myButton").addEventListener("click", async () => {
  if (!navigator.mediaDevices.selectAudioOutput) {
    console.log("selectAudioOutput() not supported or not in secure context.");
    return;
  }

  // Display prompt to select device
  const audioDevice = await navigator.mediaDevices.selectAudioOutput();

  // Create an audio element and start playing audio on the default device
  const audio = document.createElement("audio");
  audio.src = "https://example.com/audio.mp3";
  audio.play();

  // Change the sink to the selected audio output device.
  audio.setSinkId(audioDevice.deviceId);
});
```

Beachten Sie, dass bei der Ausgabe-Details protokolliert werden könnten, die ähnlich wie folgt aussehen:

```js
console.log(
  `${audioDevice.kind}: ${audioDevice.label} id = ${audioDevice.deviceId}`,
);
// audiooutput: Realtek Digital Output (Realtek(R) Audio) id = 0wE6fURSZ20H0N2NbxqgowQJLWbwo+5ablCVVJwRM3k=
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
