---
title: Audio Output Devices API
slug: Web/API/Audio_Output_Devices_API
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{DefaultAPISidebar("Audio Output Devices API")}}{{securecontext_header}}{{SeeCompatTable}}

Die **Audio Output Devices API** ermöglicht es Webanwendungen, Benutzern eine Auswahl zu ermöglichen, welches Ausgabegerät für die Audiowiedergabe verwendet werden soll.

## Konzepte und Nutzung

Betriebssysteme erlauben es Benutzern häufig, festzulegen, dass Audio von Lautsprechern, einem Bluetooth-Headset oder einem anderen Audioausgabegerät abgespielt werden soll. Diese API erlaubt es Anwendungen, diese Funktion auch innerhalb einer Webseite bereitzustellen.

Auch wenn es durch eine Berechtigungsrichtlinie erlaubt ist, erfordert der Zugriff auf ein bestimmtes Audioausgabegerät dennoch eine explizite Benutzererlaubnis, da sich der Benutzer an einem Ort befinden kann, an dem das Abspielen von Audio über bestimmte Ausgabegeräte nicht angemessen ist.

Die API bietet die Methode [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput), die es Benutzern ermöglicht, ihre gewünschte Audioausgabe aus den durch die [`speaker-selection`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection)-Direktive des {{httpheader("Permissions-Policy")}} HTTP-Headers für das Dokument erlaubten Möglichkeiten zu wählen. Das ausgewählte Gerät hat dann die Benutzererlaubnis, was es ermöglicht, es mit [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) aufzulisten und als Audioausgabegerät mit [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId) festzulegen.

Audiogeräte können zufällig verbunden und getrennt werden. Anwendungen, die auf solche Änderungen reagieren möchten, können das [`devicechange`](/de/docs/Web/API/MediaDevices/devicechange_event)-Ereignis abhören und [`enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) verwenden, um festzustellen, ob `sinkId` in den zurückgegebenen Geräten vorhanden ist. Dies könnte beispielsweise dazu führen, dass die Wiedergabe pausiert oder fortgesetzt wird.

## Schnittstellen

### Erweiterungen anderer Schnittstellen

Die Audio Output Devices API erweitert die folgenden APIs und fügt die aufgelisteten Funktionen hinzu:

#### MediaDevices

- [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput)
  - : Diese Methode fordert den Benutzer auf, ein bestimmtes Audioausgabegerät auszuwählen, beispielsweise einen Lautsprecher oder ein Headset. Das Auswählen eines Geräts erteilt die Benutzererlaubnis zur Verwendung dieses Geräts und gibt Informationen über das Gerät zurück, einschließlich seiner ID.

#### HTMLMediaElement

- [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId)
  - : Diese Methode legt die ID des zu verwendenden Audiogeräts für die Ausgabe fest, sofern dies erlaubt ist.
- [`HTMLMediaElement.sinkId`](/de/docs/Web/API/HTMLMediaElement/sinkId)
  - : Diese Eigenschaft gibt die eindeutige ID des für die Ausgabe verwendeten Audiogeräts zurück oder einen leeren String, wenn das standardmäßige Benutzeragentengerät verwendet wird.

## Sicherheitsanforderungen

Der Zugriff auf die API unterliegt den folgenden Einschränkungen:

- Alle Methoden und Eigenschaften dürfen nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) aufgerufen werden.

- [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput) erteilt die Benutzererlaubnis, dass ein ausgewähltes Gerät als Audioausgabesenke verwendet werden darf:

  - Der Zugriff kann durch die [`speaker-selection`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection) HTTP-[Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) beschränkt werden.
  - Eine [transient user activation](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit die Methode aufgerufen wird.

- [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId) setzt eine erlaubte ID als Audioausgabe:

  - Der Zugriff kann durch die [`speaker-selection`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection) HTTP-[Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) beschränkt werden.
  - Es ist eine Benutzererlaubnis erforderlich, um eine nicht standardmäßige Geräte-ID festzulegen.
    - Diese erfolgt möglicherweise durch die Auswahl in der von `MediaDevices.selectAudioOutput()` ausgelösten Aufforderung.
    - Die Benutzererlaubnis zur Festlegung des Ausgabegeräts wird auch implizit erteilt, wenn der Benutzer bereits die Erlaubnis erteilt hat, ein Medieneingabegerät in derselben Gruppe mit [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zu verwenden.

<!-- Die folgende Zeile ist "wahr", aber dies ist in keinem Browser implementiert -->
<!-- Der Berechtigungsstatus kann mit der [Permissions API](/de/docs/Web/API/Permissions_API) Methode [`navigator.permissions.query()`](/de/docs/Web/API/Permissions/query) abgefragt werden, wobei ein Berechtigungsdeskriptor mit der `speaker-selection` Berechtigung übergeben wird. -->

## Beispiele

Hier ist ein Beispiel zur Nutzung von `selectAudioOutput()`, innerhalb einer Funktion, die durch einen Buttonklick ausgelöst wird, und dann das ausgewählte Gerät als Audioausgabe festlegt.

Der Code prüft zuerst, ob `selectAudioOutput()` unterstützt wird und nutzt es, um eine Ausgabe auszuwählen und eine [device ID](/de/docs/Web/API/MediaDeviceInfo/deviceId) zurückzugeben. Wir spielen dann etwas Audio mit der standardmäßigen Ausgabe ab und rufen dann `setSinkId()` auf, um zum ausgewählten Ausgabegerät zu wechseln.

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

Beachten Sie, dass beim Protokollieren der Ausgabedetails diese möglicherweise folgendermaßen aussehen:

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
