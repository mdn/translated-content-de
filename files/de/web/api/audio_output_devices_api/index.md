---
title: Audio-Ausgabegeräte-API
slug: Web/API/Audio_Output_Devices_API
l10n:
  sourceCommit: 3df177b401e00e3a855c40fc074b5ef2469b700d
---

{{DefaultAPISidebar("Audio Output Devices API")}}{{securecontext_header}}{{SeeCompatTable}}

Die **Audio-Ausgabegeräte-API** ermöglicht es Webanwendungen, Benutzer zu fragen, welches Ausgabegerät für die Audiowiedergabe verwendet werden soll.

## Konzepte und Verwendung

Betriebssysteme ermöglichen es Benutzern häufig, festzulegen, dass Audio über Lautsprecher, ein Bluetooth-Headset oder ein anderes Audio-Ausgabegerät wiedergegeben werden soll. Diese API ermöglicht es Anwendungen, diese Funktionalität direkt in einer Webseite bereitzustellen.

Selbst wenn dies durch eine Berechtigungsrichtlinie erlaubt ist, erfordert der Zugriff auf ein bestimmtes Audio-Ausgabegerät dennoch eine explizite Benutzererlaubnis, da sich der Benutzer an einem Ort befinden könnte, an dem die Wiedergabe über bestimmte Ausgabegeräte nicht geeignet ist.

Die API bietet die Methode {{domxref("MediaDevices.selectAudioOutput()")}}, die es Benutzern ermöglicht, ihr bevorzugtes Audioausgabegerät aus denjenigen auszuwählen, die durch die Direktive [`speaker-selection`](/de/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) des HTTP-Headers {{httpheader("Permissions-Policy")}} für das Dokument erlaubt sind. Das ausgewählte Gerät hat dann Benutzererlaubnis und kann mit {{domxref("MediaDevices.enumerateDevices()")}} aufgelistet und als Audio-Ausgabegerät mit {{domxref("HTMLMediaElement.setSinkId()")}} festgelegt werden.

Audiogeräte können willkürlich verbunden und getrennt werden. Anwendungen, die auf solche Änderungen reagieren möchten, können das {{domxref("MediaDevices/devicechange_event", "devicechange")}}-Ereignis abhören und {{domxref("MediaDevices.enumerateDevices", "enumerateDevices()")}} verwenden, um festzustellen, ob `sinkId` bei den zurückgegebenen Geräten vorhanden ist. Dies könnte beispielsweise das Pausieren oder Fortsetzen der Wiedergabe auslösen.

## Schnittstellen

### Erweiterungen anderer Schnittstellen

Die Audio-Ausgabegeräte-API erweitert die folgenden APIs und fügt die aufgelisteten Funktionen hinzu:

#### MediaDevices

- {{domxref("MediaDevices.selectAudioOutput()")}}
  - : Diese Methode fordert den Benutzer auf, ein bestimmtes Audio-Ausgabegerät auszuwählen, zum Beispiel einen Lautsprecher oder ein Headset. Die Auswahl eines Geräts gewährt Benutzererlaubnis zur Nutzung dieses Geräts und gibt Informationen über das Gerät zurück, einschließlich seiner ID.

#### HTMLMediaElement

- {{domxref("HTMLMediaElement.setSinkId()")}}
  - : Diese Methode setzt die ID des Audiogeräts, das für die Ausgabe verwendet werden soll, vorausgesetzt, dies ist erlaubt.
- {{domxref("HTMLMediaElement.sinkId")}}
  - : Diese Eigenschaft gibt die eindeutige ID des für die Ausgabe verwendeten Audiogeräts zurück oder einen leeren String, wenn das Standardgerät des Benutzeragenten verwendet wird.

## Sicherheitsanforderungen

Der Zugriff auf die API unterliegt den folgenden Einschränkungen:

- Alle Methoden und Eigenschaften dürfen nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) aufgerufen werden.

- {{domxref("MediaDevices.selectAudioOutput()")}} gewährt Benutzererlaubnis für ein ausgewähltes Gerät zur Nutzung als Audio-Ausgang:

  - Der Zugriff kann durch die HTTP [Permission Policy](/de/docs/Web/HTTP/Permissions_Policy) [`speaker-selection`](/de/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) eingeschränkt sein.
  - [Vorübergehende Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit die Methode aufgerufen werden kann.

- {{domxref("HTMLMediaElement.setSinkId()")}} setzt eine erlaubte ID als Audioausgang:

  - Der Zugriff kann durch die HTTP [Permission Policy](/de/docs/Web/HTTP/Permissions_Policy) [`speaker-selection`](/de/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) eingeschränkt sein.
  - Benutzererlaubnis ist erforderlich, um eine nicht standardmäßige Geräte-ID festzulegen.
    - Diese kann aus der Auswahl im von `MediaDevices.selectAudioOutput()` gestarteten Prompt stammen
    - Benutzererlaubnis zum Festlegen des Ausgabegeräts gilt auch implizit, wenn der Benutzer bereits die Erlaubnis erteilt hat, ein Medieneingabegerät in derselben Gruppe mit {{domxref("MediaDevices.getUserMedia()")}} zu verwenden.

<!-- Die folgende Zeile ist "wahr", aber dies ist in keinem Browser implementiert -->
<!-- Der Berechtigungsstatus kann mit der [Permissions API](/de/docs/Web/API/Permissions_API) Methode [`navigator.permissions.query()`](/de/docs/Web/API/Permissions/query) abgefragt werden, indem ein Berechtigungsdeskriptor mit der Berechtigung `speaker-selection` übergeben wird. -->

## Beispiele

Hier ist ein Beispiel für die Verwendung von `selectAudioOutput()`, innerhalb einer Funktion, die durch einen Button-Klick ausgelöst wird und dann das ausgewählte Gerät als Audioausgabe festlegt.

Der Code prüft zunächst, ob `selectAudioOutput()` unterstützt wird, und wenn ja, verwendet er es, um eine Ausgabe zu wählen und eine [Geräte-ID](/de/docs/Web/API/MediaDeviceInfo/deviceId) zurückzugeben. Wir spielen dann etwas Audio auf der Standardausgabe ab und rufen dann `setSinkId()` auf, um auf das ausgewählte Ausgabegerät umzuschalten.

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

Beachten Sie, dass, wenn Sie die Ausgabendetails protokollieren, sie etwa so aussehen könnten:

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
