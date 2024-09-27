---
title: Audio Output Devices API
slug: Web/API/Audio_Output_Devices_API
l10n:
  sourceCommit: 3df177b401e00e3a855c40fc074b5ef2469b700d
---

{{DefaultAPISidebar("Audio Output Devices API")}}{{securecontext_header}}{{SeeCompatTable}}

Die **Audio Output Devices API** ermöglicht es Webanwendungen, Nutzer darüber zu informieren, welches Ausgabegerät für die Audiowiedergabe verwendet werden soll.

## Konzepte und Nutzung

Betriebssysteme erlauben es den Benutzern allgemein, festzulegen, dass Audio über Lautsprecher, ein Bluetooth-Headset oder ein anderes Audiowiedergabegerät ausgegeben werden soll. Diese API ermöglicht es Anwendungen, diese Funktionalität innerhalb einer Webseite bereitzustellen.

Selbst wenn eine Erlaubnisrichtlinie dies gestattet, erfordert der Zugriff auf ein bestimmtes Audiowiedergabegerät dennoch die ausdrückliche Zustimmung des Benutzers, da der Benutzer sich möglicherweise an einem Ort befindet, an dem die Wiedergabe über einige Ausgabegeräte nicht geeignet ist.

Die API stellt die Methode [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput) zur Verfügung, mit der Benutzer ihr gewünschtes Audiowiedergabegerät aus denen auswählen können, die durch die Direktive [`speaker-selection`](/de/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) des {{httpheader("Permissions-Policy")}} HTTP-Headers für das Dokument erlaubt sind. Das ausgewählte Gerät erhält dann die Benutzererlaubnis, wodurch es mit [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) aufgezählt und als Audiowiedergabegerät mit [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId) festgelegt werden kann.

Audiogeräte können willkürlich verbunden und getrennt werden. Anwendungen, die auf diese Art von Änderungen reagieren möchten, können das Ereignis [`devicechange`](/de/docs/Web/API/MediaDevices/devicechange_event) abhören und [`enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) verwenden, um festzustellen, ob `sinkId` in den zurückgegebenen Geräten vorhanden ist. Dies könnte beispielsweise das Anhalten oder Fortsetzen der Wiedergabe auslösen.

## Schnittstellen

### Erweiterungen anderer Schnittstellen

Die Audio Output Devices API erweitert die folgenden APIs und fügt die aufgeführten Funktionen hinzu:

#### MediaDevices

- [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput)
  - : Diese Methode fordert den Benutzer auf, ein bestimmtes Audiowiedergabegerät auszuwählen, beispielsweise einen Lautsprecher oder ein Headset. Durch die Auswahl eines Geräts wird die Erlaubnis zur Nutzung dieses Geräts erteilt und Informationen über das Gerät, einschließlich seiner ID, zurückgegeben.

#### HTMLMediaElement

- [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId)
  - : Diese Methode setzt die ID des Audiogeräts für die Ausgabe, die verwendet wird, sofern sie erlaubt ist.
- [`HTMLMediaElement.sinkId`](/de/docs/Web/API/HTMLMediaElement/sinkId)
  - : Diese Eigenschaft gibt die eindeutige ID des Geräts zurück, das für die Ausgabe verwendet wird, oder einen leeren String, wenn das Standardgerät des Benutzeragents verwendet wird.

## Sicherheitsanforderungen

Der Zugriff auf die API unterliegt den folgenden Einschränkungen:

- Alle Methoden und Eigenschaften dürfen nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) aufgerufen werden.

- [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput) erteilt die Benutzererlaubnis für ein ausgewähltes Gerät zur Verwendung als Audioausgabesink:

  - Der Zugriff kann durch die HTTP-Erlaubnisrichtlinie [`speaker-selection`](/de/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) eingeschränkt sein.
  - [Kurzzeitige Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit die Methode aufgerufen werden kann.

- [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId) legt eine erlaubte ID als Audioausgabe fest:

  - Der Zugriff kann durch die HTTP-Erlaubnisrichtlinie [`speaker-selection`](/de/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) eingeschränkt sein.
  - Es wird die Benutzererlaubnis benötigt, um eine nicht standardmäßige Geräte-ID festzulegen.
    - Diese kann aus der Auswahl im durch `MediaDevices.selectAudioOutput()` gestarteten Dialog stammen.
    - Die Benutzererlaubnis, das Ausgabegerät festzulegen, wird auch implizit erteilt, wenn der Benutzer bereits die Erlaubnis erteilt hat, ein Medienaufnahmegerät in derselben Gruppe mit [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zu verwenden.

<!-- Die folgende Zeile ist "wahr", aber in keinem Browser implementiert -->
<!-- Der Berechtigungsstatus kann mit der [Permissions API](/de/docs/Web/API/Permissions_API) Methode [`navigator.permissions.query()`](/de/docs/Web/API/Permissions/query) abgefragt werden, indem ein Berechtigungsdeskriptor mit der Berechtigung `speaker-selection` übergeben wird. -->

## Beispiele

Hier ist ein Beispiel für die Verwendung von `selectAudioOutput()` innerhalb einer Funktion, die durch einen Klick auf einen Button ausgelöst wird, und anschließend das ausgewählte Gerät als Audiowiedergabe festlegt.

Der Code prüft zuerst, ob `selectAudioOutput()` unterstützt wird, und benutzt es, um ein Ausgabegerät auszuwählen und eine [Geräte-ID](/de/docs/Web/API/MediaDeviceInfo/deviceId) zurückzugeben. Wir spielen dann etwas Audio über die Standardausgabe ab und rufen dann `setSinkId()` auf, um zum ausgewählten Ausgabegerät zu wechseln.

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

Beachten Sie, dass wenn Sie die Ausgabedetails protokollieren, sie möglicherweise so aussehen:

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
