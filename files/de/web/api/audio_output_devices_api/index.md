---
title: Audio Output Devices API
slug: Web/API/Audio_Output_Devices_API
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{DefaultAPISidebar("Audio Output Devices API")}}{{securecontext_header}}{{SeeCompatTable}}

Die **Audio Output Devices API** ermöglicht es Webanwendungen, Benutzern die Auswahl des Ausgabegeräts für die Audiowiedergabe zu ermöglichen.

## Konzepte und Verwendung

Betriebssysteme ermöglichen es Benutzern häufig, anzugeben, dass Audio von Lautsprechern, einem Bluetooth-Headset oder einem anderen Audioausgabegerät abgespielt werden soll.
Diese API ermöglicht es Anwendungen, diese Funktionalität innerhalb einer Webseite bereitzustellen.

Auch wenn es durch eine Berechtigungsrichtlinie erlaubt ist, erfordert der Zugriff auf ein bestimmtes Audioausgabegerät dennoch die ausdrückliche Zustimmung des Benutzers, da der Benutzer sich möglicherweise an einem Ort befindet, an dem das Abspielen von Audio über einige Ausgabegeräte nicht angemessen ist.

Die API stellt die Methode [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput) bereit, mit der Benutzer ihr gewünschtes Audioausgabegerät aus denjenigen auswählen können, die durch die Direktive [`speaker-selection`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection) des {{httpheader("Permissions-Policy")}} HTTP-Headers für das Dokument zugelassen sind.
Das ausgewählte Gerät hat dann die Benutzererlaubnis, was es ermöglicht, mit [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) aufgelistet und mit [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId) als Audioausgabegerät festgelegt zu werden.

Audiogeräte können sich beliebig verbinden und trennen.
Anwendungen, die auf diese Art von Änderung reagieren möchten, können das [`devicechange`](/de/docs/Web/API/MediaDevices/devicechange_event)-Ereignis abhören und [`enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) verwenden, um festzustellen, ob `sinkId` in den zurückgegebenen Geräten vorhanden ist.
Dies könnte zum Beispiel das Pausieren oder Fortsetzen der Wiedergabe auslösen.

## Schnittstellen

### Erweiterungen zu anderen Schnittstellen

Die Audio Output Devices API erweitert die folgenden APIs und fügt die aufgelisteten Funktionen hinzu:

#### MediaDevices

- [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput)
  - : Diese Methode fordert den Benutzer auf, ein spezifisches Audioausgabegerät auszuwählen, zum Beispiel einen Lautsprecher oder ein Headset.
    Die Auswahl eines Geräts erteilt die Benutzererlaubnis zur Nutzung dieses Geräts und liefert Informationen über das Gerät, einschließlich seiner ID.

#### HTMLMediaElement

- [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId)
  - : Diese Methode setzt die ID des Audiogeräts, das für die Ausgabe verwendet werden soll, falls dies erlaubt ist.
- [`HTMLMediaElement.sinkId`](/de/docs/Web/API/HTMLMediaElement/sinkId)
  - : Diese Eigenschaft gibt die eindeutige ID des Audiogeräts zurück, das für die Ausgabe verwendet wird, oder einen leeren String, wenn das Standardgerät des Benutzeragents verwendet wird.

## Sicherheitsanforderungen

Der Zugriff auf die API unterliegt den folgenden Einschränkungen:

- Alle Methoden und Eigenschaften dürfen nur in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) aufgerufen werden.

- [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput) erteilt die Benutzerberechtigung für ein ausgewähltes Gerät zur Nutzung als Audioausgabesenke:
  - Der Zugriff kann durch die [`speaker-selection`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection) HTTP [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) beschränkt sein.
  - [Kurzzeitige Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich.
    Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit die Methode aufgerufen werden kann.

- [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId) setzt eine erlaubte ID als Audioausgabe:
  - Der Zugriff kann durch die [`speaker-selection`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection) HTTP [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) beschränkt sein.
  - Benutzerberechtigung ist erforderlich, um eine nicht standardmäßige Geräte-ID festzulegen.
    - Diese kann aus der Auswahl in der von `MediaDevices.selectAudioOutput()` gestarteten Aufforderung kommen.
    - Die Benutzerberechtigung zur Einstellung des Ausgabegeräts wird auch stillschweigend erteilt, wenn der Benutzer bereits die Erlaubnis zur Nutzung eines Medieneingabegeräts in derselben Gruppe mit [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erteilt hat.

<!-- Die folgende Zeile ist "wahr", aber dies wird in keinem Browser implementiert -->
<!-- Der Berechtigungsstatus kann mit der [Permissions API](/de/docs/Web/API/Permissions_API)-Methode [`navigator.permissions.query()`](/de/docs/Web/API/Permissions/query) abgefragt werden, indem ein Berechtigungsdeskriptor mit der `speaker-selection`-Berechtigung übergeben wird. -->

## Beispiele

Hier ist ein Beispiel für die Verwendung von `selectAudioOutput()` innerhalb einer Funktion, die durch einen Buttonklick ausgelöst wird, und dann das ausgewählte Gerät als Audioausgabe festlegt.

Der Code überprüft zuerst, ob `selectAudioOutput()` unterstützt wird, und verwendet es, um ein Ausgabegerät auszuwählen und eine [Geräte-ID](/de/docs/Web/API/MediaDeviceInfo/deviceId) zurückzugeben.
Wir spielen dann einige Audioinhalte über die Standardausgabe ab und rufen dann `setSinkId()` auf, um auf das ausgewählte Ausgabegerät zu wechseln.

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

Beachten Sie, dass, wenn Sie die Ausgabedetails protokollieren, diese möglicherweise wie folgt aussehen:

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
