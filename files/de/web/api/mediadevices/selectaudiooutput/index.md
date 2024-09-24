---
title: "MediaDevices: selectAudioOutput() Methode"
short-title: selectAudioOutput()
slug: Web/API/MediaDevices/selectAudioOutput
l10n:
  sourceCommit: 3eb1e3a117628789e16ea361bcccbc645f1cada5
---

{{APIRef("Audio Output Devices API")}}{{securecontext_header}}{{SeeCompatTable}}

Die **`selectAudioOutput()`** Methode der {{domxref("MediaDevices")}}-Schnittstelle fordert den Benutzer auf, ein Audioausgabegerät auszuwählen, wie z.B. einen Lautsprecher oder ein Headset. Wenn der Benutzer ein Gerät auswählt, erteilt die Methode die Benutzererlaubnis, das ausgewählte Gerät als Audioausgabesenke zu verwenden.

Nach der Auswahl, wenn das Gerät verfügbar ist, kann es mit {{domxref("MediaDevices.enumerateDevices()")}} aufgelistet und mit {{domxref("HTMLMediaElement.setSinkId()")}} als Audioausgabesenke gesetzt werden.

Bei Erfolg wird das zurückgegebene {{jsxref("Promise")}} mit einem {{domxref("MediaDeviceInfo")}} erfüllt, das das ausgewählte Gerät beschreibt.

## Syntax

```js-nolint
selectAudioOutput()
selectAudioOutput(options)
```

### Parameter

- `options` {{Optional_Inline}}

  - : Ein Objekt, das konfiguriert, welche Geräte im Benutzer-Prompt angeboten werden dürfen.

    - `deviceId` {{Optional_Inline}}

      - : Ein String, der die ID eines einzelnen, zuvor offenbarten/erlaubten Geräts darstellt.
        Wenn nicht gesetzt, wird ein Prompt mit allen verfügbaren Audioausgabegeräten angezeigt.

        Die Option ist für Anwendungen gedacht, die eine Geräte-ID speichern möchten, sodass dasselbe Gerät in zukünftigen Sitzungen standardmäßig verwendet werden kann.
        Beachten Sie, dass die Methode möglicherweise eine neue ID für dasselbe Gerät zurückgibt und dass gespeicherte IDs _durch_ `selectAudioOutput()` erfolgreich übergeben werden müssen, bevor sie mit {{domxref("HTMLMediaElement.setSinkId","setSinkId()")}} funktionieren.

        > [!NOTE]
        > Ein Nutzeragent kann sich entscheiden, darauf zu verzichten, den Benutzer zu befragen, wenn eine bestimmte nicht-leere ID zuvor dem Benutzer durch `selectAudioOutput()` in einer früheren Sitzung offengelegt wurde.
        > In diesem Fall kann der Nutzeragent einfach mit dieser Geräte-ID auflösen oder eine neue ID für dasselbe Gerät bereitstellen, falls sie sich geändert hat.
        > Wenn die Erlaubnis für das angegebene Gerät zuvor erteilt, aber seitdem widerrufen wurde, könnte der Nutzeragent alle erlaubten Geräte anzeigen und das mit der angegebenen ID hervorheben.

### Rückgabewert

Ein {{ jsxref("Promise") }}, das mit einem {{domxref("MediaDeviceInfo")}}-Objekt erfüllt wird, das das vom Benutzer gewählte Audioausgabegerät beschreibt.

### Ausnahmen

- `NotAllowedError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn eine [`speaker-selection`](/de/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) verwendet wird, um die Nutzung von Audioausgaben zu blockieren (zudem wird das Popup zur Auswahl eines Audioausgabegeräts nicht angezeigt), oder der Benutzer den Auswahldialog schließt, ohne ein Gerät zu wählen.
- `NotFoundError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn keine verfügbaren Audioausgabegeräte vorhanden sind.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn keine {{Glossary("transient activation")}} stattgefunden hat (es muss durch irgendein UI-Event ausgelöst werden).

## Sicherheitsanforderungen

Der Zugriff auf die API unterliegt den folgenden Einschränkungen:

- Die Methode muss in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) aufgerufen werden.
- [Transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich.
  Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.
- Der Zugriff kann durch die [`speaker-selection`](/de/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) HTTP [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) eingeschränkt werden.

Der Berechtigungsstatus kann mit der Methode [Permissions API](/de/docs/Web/API/Permissions_API) {{domxref("Permissions.query", "navigator.permissions.query()")}} abgefragt werden, indem ein Berechtigungsdeskriptor mit der `speaker-selection`-Berechtigung übergeben wird.

## Beispiele

Hier ist ein Beispiel für die Verwendung von `selectAudioOutput()`, innerhalb einer Funktion, die durch einen Button-Klick ausgelöst wird. Es gibt die ausgewählten {{domxref("MediaDeviceInfo.deviceId", "Geräte-IDs", "", "nocode")}} und Beschriftungen (falls verfügbar) oder eine Fehlermeldung aus.

```js
document.querySelector("#myButton").addEventListener("click", () => {
  if (!navigator.mediaDevices.selectAudioOutput) {
    console.log("selectAudioOutput() nicht unterstützt.");
    return;
  }

  // Anzeige der Eingabeaufforderung und Protokollierung des ausgewählten Geräts oder Fehlers
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

Bei Auswahl einer Ausgabe könnte dies folgendes ergeben:

```bash
audiooutput: Realtek Digital Output (Realtek(R) Audio) id = 0wE6fURSZ20H0N2NbxqgowQJLWbwo+5ablCVVJwRM3k=
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLMediaElement.setSinkId()")}}
- {{domxref("HTMLMediaElement.sinkId")}}
- [WebRTC](/de/docs/Web/API/WebRTC_API) - die einführende Seite zur API
