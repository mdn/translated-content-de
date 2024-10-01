---
title: "MediaDevices: selectAudioOutput()-Methode"
short-title: selectAudioOutput()
slug: Web/API/MediaDevices/selectAudioOutput
l10n:
  sourceCommit: 3eb1e3a117628789e16ea361bcccbc645f1cada5
---

{{APIRef("Audio Output Devices API")}}{{securecontext_header}}{{SeeCompatTable}}

Die **`selectAudioOutput()`**-Methode der [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Schnittstelle fordert den Benutzer auf, ein Audioausgabegerät wie einen Lautsprecher oder ein Headset auszuwählen. Wenn der Benutzer ein Gerät auswählt, erteilt die Methode die Benutzererlaubnis, das ausgewählte Gerät als Audioausgabemedium zu verwenden.

Nach der Auswahl kann das Gerät, wenn es verfügbar ist, mit [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) aufgelistet und als Audioausgabemedium mit [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId) festgelegt werden.

Bei Erfolg wird das zurückgegebene {{jsxref("Promise")}} mit einem [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo) aufgelöst, das das ausgewählte Gerät beschreibt.

## Syntax

```js-nolint
selectAudioOutput()
selectAudioOutput(options)
```

### Parameter

- `options` {{Optional_Inline}}

  - : Ein Objekt, das konfiguriert, welche Geräte im Benutzerprompt angeboten werden dürfen.

    - `deviceId` {{Optional_Inline}}

      - : Eine Zeichenfolge, die die ID eines einzelnen zuvor bekannten/berechtigten Geräts darstellt.
        Wenn nicht festgelegt, wird ein Prompt mit allen verfügbaren Audioausgabegeräten angezeigt.

        Die Option ist für Anwendungen gedacht, die eine Geräte-ID speichern möchten, damit dasselbe Gerät in zukünftigen Sitzungen standardmäßig verwendet werden kann.
        Beachten Sie, dass die Methode möglicherweise eine neue ID für dasselbe Gerät zurückgibt und dass gespeicherte IDs _erfolgreich durch `selectAudioOutput()`_ übergeben werden müssen, bevor sie mit [`setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId) funktionieren.

        > [!NOTE]
        > Ein Benutzeragent kann sich entscheiden, den Benutzer nicht aufzufordern, wenn eine nicht null-spezifizierte ID zuvor in einer früheren Sitzung durch `selectAudioOutput()` dem Benutzer angezeigt wurde.
        > In diesem Fall kann der Benutzeragent einfach mit dieser Geräte-ID oder einer neuen ID für dasselbe Gerät auflösen, wenn sie sich geändert hat.
        > Wenn die Berechtigung für das angegebene Gerät zuvor erteilt, aber inzwischen widerrufen wurde, kann der Benutzeragent alle erlaubten Geräte anzeigen, wobei das mit der angegebenen ID hervorgehoben wird.

### Rückgabewert

Ein {{ jsxref("Promise") }}, der mit einem [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo)-Objekt erfüllt wird, das das vom Benutzer ausgewählte Audioausgabegerät beschreibt.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn eine [`speaker-selection`](/de/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) verwendet wird, um die Nutzung von Audioausgaben zu blockieren (außerdem wird das Popup zur Auswahl eines Audioausgabegeräts nicht angezeigt) oder der Benutzer das Auswahlfenster geschlossen hat, ohne ein Gerät auszuwählen.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn keine verfügbaren Audioausgabegeräte vorhanden sind.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn keine {{Glossary("transient_activation", "transiente Aktivierung")}} erfolgt ist (Sie müssen sie aus einer Art von UI-Ereignis auslösen).

## Sicherheitsanforderungen

Der Zugriff auf die API unterliegt den folgenden Einschränkungen:

- Die Methode muss in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) aufgerufen werden.
- [Transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.
- Der Zugriff kann durch die [`speaker-selection`](/de/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) HTTP [Permission Policy](/de/docs/Web/HTTP/Permissions_Policy) begrenzt sein.

Der Berechtigungsstatus kann mit der Methode [Permissions API](/de/docs/Web/API/Permissions_API) [`navigator.permissions.query()`](/de/docs/Web/API/Permissions/query) abgefragt werden, wobei ein Berechtigungsdeskriptor mit der Berechtigung `speaker-selection` übergeben wird.

## Beispiele

Hier ist ein Beispiel für die Verwendung von `selectAudioOutput()`, innerhalb einer Funktion, die durch einen Button-Klick ausgelöst wird.
Es gibt die ausgewählten [Geräte-IDs](/de/docs/Web/API/MediaDeviceInfo/deviceId) und Bezeichnungen (falls verfügbar) oder eine Fehlermeldung aus.

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

Bei der Auswahl einer Ausgabe könnte dies erzeugen:

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
