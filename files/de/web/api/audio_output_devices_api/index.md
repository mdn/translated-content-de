---
title: Audio Output Devices API
slug: Web/API/Audio_Output_Devices_API
l10n:
  sourceCommit: 3df177b401e00e3a855c40fc074b5ef2469b700d
---

{{DefaultAPISidebar("Audio Output Devices API")}}{{securecontext_header}}{{SeeCompatTable}}

Die **Audio Output Devices API** ermöglicht es Webanwendungen, Nutzer darüber zu befragen, welches Ausgabegerät für die Audio-Wiedergabe verwendet werden soll.

## Konzepte und Nutzung

Betriebssysteme erlauben es üblicherweise Benutzern, festzulegen, dass Audio über Lautsprecher, ein Bluetooth-Headset oder ein anderes Audioausgabegerät abgespielt werden soll. Diese API ermöglicht Anwendungen, diese Funktionalität innerhalb einer Webseite bereitzustellen.

Selbst wenn es durch eine Berechtigungspolitik erlaubt ist, erfordert der Zugriff auf ein bestimmtes Audioausgabegerät dennoch die ausdrückliche Zustimmung des Benutzers, da dieser sich an einem Ort befinden könnte, an dem das Abspielen von Audio über einige Ausgabegeräte unangebracht ist.

Die API stellt die Methode [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput) bereit, die es Nutzern ermöglicht, das gewünschte Audioausgabegerät aus denen, die durch die [`speaker-selection`](/de/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) Direktive des {{httpheader("Permissions-Policy")}} HTTP-Headers für das Dokument zugelassen sind, auszuwählen. Das ausgewählte Gerät hat dann die Nutzerberechtigung, sodass es mit [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) aufgelistet und als Audioausgabegerät mit [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId) festgelegt werden kann.

Audiogeräte können beliebig verbunden und getrennt werden. Anwendungen, die auf diese Art von Änderungen reagieren möchten, können das [`devicechange`](/de/docs/Web/API/MediaDevices/devicechange_event) Ereignis abhören und [`enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) verwenden, um festzustellen, ob `sinkId` in den zurückgegebenen Geräten vorhanden ist. Dies könnte zum Beispiel das Anhalten oder Fortsetzen der Wiedergabe auslösen.

## Schnittstellen

### Erweiterungen zu anderen Schnittstellen

Die Audio Output Devices API erweitert die folgenden APIs, indem sie die aufgelisteten Funktionen hinzufügt:

#### MediaDevices

- [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput)
  - : Diese Methode fordert den Benutzer auf, ein spezifisches Audioausgabegerät auszuwählen, zum Beispiel einen Lautsprecher oder ein Headset. Die Auswahl eines Geräts gewährt die Benutzerberechtigung zur Nutzung dieses Geräts und liefert Informationen über das Gerät, einschließlich seiner ID.

#### HTMLMediaElement

- [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId)
  - : Diese Methode setzt die ID des Audiogeräts, das für die Ausgabe verwendet werden soll, sofern dies erlaubt ist.
- [`HTMLMediaElement.sinkId`](/de/docs/Web/API/HTMLMediaElement/sinkId)
  - : Diese Eigenschaft gibt die eindeutige ID des Audiogeräts zurück, das für die Ausgabe verwendet wird, oder einen leeren String, wenn das Standard-User-Agent-Gerät verwendet wird.

## Sicherheitsanforderungen

Der Zugriff auf die API unterliegt den folgenden Einschränkungen:

- Alle Methoden und Eigenschaften dürfen nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) aufgerufen werden.

- [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput) gewährt die Benutzerberechtigung für ein ausgewähltes Gerät als Audioausgabesenke:

  - Der Zugriff kann durch die [`speaker-selection`](/de/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) HTTP [Berechtigungspolitik](/de/docs/Web/HTTP/Permissions_Policy) geregelt sein.
  - [Transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit die Methode aufgerufen werden kann.

- [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId) setzt eine erlaubte ID als Audioausgang:

  - Der Zugriff kann durch die [`speaker-selection`](/de/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) HTTP [Berechtigungspolitik](/de/docs/Web/HTTP/Permissions_Policy) geregelt sein.
  - Benutzerberechtigung ist erforderlich, um eine nicht-standardmäßige Geräte-ID festzulegen.
    - Diese kann aus der Auswahl in der durch `MediaDevices.selectAudioOutput()` gestarteten Eingabeaufforderung stammen
    - Die Benutzerberechtigung zur Festlegung des Ausgabegeräts wird auch implizit erteilt, wenn der Benutzer bereits die Berechtigung zur Verwendung eines Medieneingabegeräts in derselben Gruppe mit [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erteilt hat.

<!-- Die folgende Zeile ist "wahr", aber dies ist in keinem Browser implementiert -->
<!-- Der Berechtigungsstatus kann mithilfe der [Permissions API](/de/docs/Web/API/Permissions_API) Methode [`navigator.permissions.query()`](/de/docs/Web/API/Permissions/query) abgefragt werden, indem ein Berechtigungsdeskriptor mit der `speaker-selection` Berechtigung übergeben wird. -->

## Beispiele

Hier ist ein Beispiel für die Verwendung von `selectAudioOutput()`, innerhalb einer Funktion, die durch einen Klick auf eine Schaltfläche ausgelöst wird, und dann das ausgewählte Gerät als Audioausgang festlegt.

Der Code überprüft zuerst, ob `selectAudioOutput()` unterstützt wird, und verwendet es, um eine Ausgabe auszuwählen und eine [Geräte-ID](/de/docs/Web/API/MediaDeviceInfo/deviceId) zurückzugeben. Wir spielen dann etwas Audio mit der Standardausgabe ab und rufen anschließend `setSinkId()` auf, um zum ausgewählten Ausgabegerät zu wechseln.

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

Beachten Sie, dass, wenn Sie die Ausgabendetails protokollieren, diese möglicherweise wie folgt aussehen:

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
