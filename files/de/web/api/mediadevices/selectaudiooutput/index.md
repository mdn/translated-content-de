---
title: "MediaDevices: Methode selectAudioOutput()"
short-title: selectAudioOutput()
slug: Web/API/MediaDevices/selectAudioOutput
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Audio Output Devices API")}}{{securecontext_header}}{{SeeCompatTable}}

Die **`selectAudioOutput()`**-Methode des [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Interfaces fordert den Benutzer auf, ein Audioausgabegerät auszuwählen, wie z.B. einen Lautsprecher oder ein Headset. Wenn der Benutzer ein Gerät auswählt, erteilt die Methode die Berechtigung, das ausgewählte Gerät als Audioausgabeseite zu verwenden.

Nach der Auswahl kann, wenn das Gerät verfügbar ist, es mit [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) aufgelistet und als Audioausgabe festgelegt werden, indem [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId) verwendet wird.

Bei Erfolg wird das zurückgegebene {{jsxref("Promise")}} mit einem [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo) gelöst, das das ausgewählte Gerät beschreibt.

## Syntax

```js-nolint
selectAudioOutput()
selectAudioOutput(options)
```

### Parameter

- `options` {{Optional_Inline}}

  - : Ein Objekt, das konfiguriert, welche Geräte im Benutzerdialog angeboten werden dürfen.

    - `deviceId` {{Optional_Inline}}

      - : Eine Zeichenkette, die die ID eines einzelnen zuvor freigegebenen/erlaubten Geräts darstellt.
        Wenn nicht gesetzt, wird ein Dialog mit allen verfügbaren Audioausgabegeräten angezeigt.

        Diese Option ist für Anwendungen gedacht, die eine Geräte-ID speichern möchten, damit dasselbe Gerät standardmäßig in zukünftigen Sitzungen verwendet werden kann. Beachten Sie, dass die Methode möglicherweise eine neue ID für dasselbe Gerät zurückgibt, und dass persistente IDs _durch_ `selectAudioOutput()` erfolgreich durchlaufen _müssen_, bevor sie mit [`setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId) funktionieren.

        > [!NOTE]
        > Ein Benutzeragent kann wählen, den Benutzer nicht um Erlaubnis zu fragen, wenn eine spezifische nicht-null ID zuvor dem Benutzer durch `selectAudioOutput()` in einer früheren Sitzung präsentiert wurde.
        > In diesem Fall kann der Benutzeragent einfach diese Geräte-ID zurückgeben oder eine neue ID für dasselbe Gerät, wenn sie sich geändert hat.
        > Wenn die Erlaubnis für das angegebene Gerät zuvor gewährt wurde, aber seitdem widerrufen wurde, könnte der Benutzeragent alle erlaubten Geräte anzeigen und das mit der angegebenen ID hervorheben.

### Rückgabewert

Ein {{ jsxref("Promise") }} das mit einem [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo) Objekt erfüllt wird, das das vom Benutzer ausgewählte Audioausgabegerät beschreibt.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn eine [`speaker-selection`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection) [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) verwendet wird, um die Nutzung von Audioausgaben zu blockieren (zusätzlich wird das Auswahl-Popup für Audioausgaben nicht angezeigt), oder der Benutzer das Auswahlfenster ohne Auswahl eines Geräts geschlossen hat.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn keine verfügbaren Audioausgabegeräte vorhanden sind.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn keine {{Glossary("transient_activation", "transiente Aktivierung")}} stattgefunden hat (Sie müssen sie von einem UI-Ereignis auslösen).

## Sicherheitsanforderungen

Der Zugriff auf die API unterliegt den folgenden Einschränkungen:

- Die Methode muss in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) aufgerufen werden.
- [Transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.
- Der Zugriff kann durch die [`speaker-selection`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection) HTTP [Permission Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert werden.

Der Berechtigungsstatus kann mithilfe der [Permissions API](/de/docs/Web/API/Permissions_API)-Methode [`navigator.permissions.query()`](/de/docs/Web/API/Permissions/query) abgefragt werden, wobei ein Berechtigungsdeskriptor mit der Berechtigung `speaker-selection` übergeben wird.

## Beispiele

Hier ist ein Beispiel für die Nutzung von `selectAudioOutput()`, innerhalb einer Funktion, die durch einen Klick auf einen Button ausgelöst wird. Es gibt die ausgewählten [Geräte-IDs](/de/docs/Web/API/MediaDeviceInfo/deviceId) und Bezeichnungen (wenn verfügbar) oder eine Fehlermeldung aus.

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

Bei der Auswahl einer Ausgabe könnte dies produzieren:

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
