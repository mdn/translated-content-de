---
title: "MediaDevices: Methode selectAudioOutput()"
short-title: selectAudioOutput()
slug: Web/API/MediaDevices/selectAudioOutput
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Audio Output Devices API")}}{{securecontext_header}}{{SeeCompatTable}}

Die **`selectAudioOutput()`**-Methode der [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Schnittstelle fordert den Benutzer auf, ein Audioausgabegerät wie einen Lautsprecher oder ein Headset auszuwählen. Wenn der Benutzer ein Gerät auswählt, erteilt die Methode die Benutzerberechtigung, das ausgewählte Gerät als Audioausgabesink zu verwenden.

Nach der Auswahl kann das Gerät, falls verfügbar, mit [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) aufgelistet und als Audioausgabesink mit [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId) festgelegt werden.

Bei Erfolg wird das zurückgegebene {{jsxref("Promise")}} mit einem [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo) aufgelöst, das das ausgewählte Gerät beschreibt.

## Syntax

```js-nolint
selectAudioOutput()
selectAudioOutput(options)
```

### Parameter

- `options` {{Optional_Inline}}
  - : Ein Objekt, das konfiguriert, welche Geräte dem Benutzer angezeigt werden dürfen.
    - `deviceId` {{Optional_Inline}}
      - : Ein String, der die ID eines zuvor freigegebenen/erlaubten Geräts darstellt.
        Wenn nicht gesetzt, wird ein Prompt mit allen verfügbaren Audioausgabegeräten angezeigt.

        Diese Option ist für Anwendungen gedacht, die eine Geräte-ID speichern möchten, damit das gleiche Gerät standardmäßig in zukünftigen Sitzungen verwendet werden kann.
        Beachten Sie, dass die Methode möglicherweise eine neue ID für dasselbe Gerät zurückgibt und dass gespeicherte IDs _müssen erfolgreich durch_ `selectAudioOutput()` übergeben werden, bevor sie mit [`setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId) funktionieren.

        > [!NOTE]
        > Ein Benutzeragent kann entscheiden, den Benutzer nicht zu befragen, wenn eine angegebene, nicht-null ID dem Benutzer zuvor durch `selectAudioOutput()` in einer früheren Sitzung angezeigt wurde.
        > In diesem Fall kann der Benutzeragent einfach mit dieser Geräte-ID oder einer neuen ID für dasselbe Gerät auflösen, wenn sich diese geändert hat.
        > Wenn die Berechtigung für das angegebene Gerät zuvor erteilt wurde, aber inzwischen widerrufen wurde, könnte der Benutzeragent alle erlaubten Geräte anzeigen und das mit der angegebenen ID hervorheben.

### Rückgabewert

Ein {{ jsxref("Promise") }}, das mit einem [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo)-Objekt erfüllt wird, das das von dem Benutzer ausgewählte Audioausgabegerät beschreibt.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn eine [`speaker-selection`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection) [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) verwendet wird, um die Nutzung von Audioausgaben zu blockieren (zusätzlich wird das Popup zur Auswahl einer Audioausgabe nicht angezeigt), oder der Benutzer das Auswahldialogfeld ohne Geräteauswahl schließt.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn keine verfügbaren Audioausgabegeräte vorhanden sind.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn keine {{Glossary("transient_activation", "transiente Aktivierung")}} stattgefunden hat (Sie müssen sie durch eine Art von UI-Ereignis auslösen).

## Sicherheitsanforderungen

Der Zugriff auf die API unterliegt den folgenden Einschränkungen:

- Die Methode muss in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) aufgerufen werden.
- Eine [transiente Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich.
  Der Benutzer muss für diese Funktion mit der Seite oder einem UI-Element interagieren.
- Der Zugriff kann durch die [`speaker-selection`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection) HTTP-[Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) eingeschränkt sein.

Der Berechtigungsstatus kann mit der [Permissions API](/de/docs/Web/API/Permissions_API)-Methode [`navigator.permissions.query()`](/de/docs/Web/API/Permissions/query) abgefragt werden, wobei ein Berechtigungs-Deskriptor mit der `speaker-selection`-Berechtigung übergeben wird.

## Beispiele

Hier ist ein Beispiel für die Verwendung von `selectAudioOutput()`, innerhalb einer Funktion, die durch einen Button-Klick ausgelöst wird.
Es gibt die ausgewählten [Geräte-IDs](/de/docs/Web/API/MediaDeviceInfo/deviceId) und Labels (falls verfügbar) oder eine Fehlermeldung aus.

```js
document.querySelector("#myButton").addEventListener("click", () => {
  if (!navigator.mediaDevices.selectAudioOutput) {
    console.log("selectAudioOutput() not supported.");
    return;
  }

  // Display prompt and log selected device or error
  navigator.mediaDevices
    .selectAudioOutput()
    .then((device) => {
      console.log(`${device.kind}: ${device.label} id = ${device.deviceId}`);
    })
    .catch((err) => {
      console.error(`${err.name}: ${err.message}`);
    });
});
```

Bei Auswahl einer Ausgabe könnte dies folgendes erzeugen:

```bash
audiooutput: Realtek Digital Output (Realtek(R) Audio) id = 0wE6fURSZ20H0N2NbxqgowQJLWbwo+5ablCVVJwRM3k=
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId)
- [`HTMLMediaElement.sinkId`](/de/docs/Web/API/HTMLMediaElement/sinkId)
- [WebRTC](/de/docs/Web/API/WebRTC_API) - die Einführungsseite zur API
