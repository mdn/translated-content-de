---
title: "MediaDevices: selectAudioOutput()-Methode"
short-title: selectAudioOutput()
slug: Web/API/MediaDevices/selectAudioOutput
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Audio Output Devices API")}}{{securecontext_header}}{{SeeCompatTable}}

Die **`selectAudioOutput()`**-Methode der [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Schnittstelle fordert den Benutzer auf, ein Audioausgabegerät wie Lautsprecher oder Headset auszuwählen. Wenn der Benutzer ein Gerät auswählt, erteilt die Methode die Erlaubnis, das ausgewählte Gerät als Audioausgangssink zu verwenden.

Nach der Auswahl kann das Gerät, sofern verfügbar, mit [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) aufgelistet und als Audioausgangssink mit [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId) festgelegt werden.

Bei Erfolg wird das zurückgegebene {{jsxref("Promise")}} mit einem [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo) aufgelöst, das das ausgewählte Gerät beschreibt.

## Syntax

```js-nolint
selectAudioOutput()
selectAudioOutput(options)
```

### Parameter

- `options` {{Optional_Inline}}
  - : Ein Objekt, das konfiguriert, welches Gerät(e) im Benutzerabfragefenster angeboten werden können.
    - `deviceId` {{Optional_Inline}}
      - : Ein String, der die ID eines einzelnen, zuvor offenbarten/erlaubten Geräts darstellt.
        Wenn nicht festgelegt, wird eine Eingabeaufforderung mit allen verfügbaren Audioausgabegeräten angezeigt.

        Diese Option ist für Anwendungen gedacht, die eine Geräte-ID speichern möchten, sodass dasselbe Gerät in zukünftigen Sitzungen standardmäßig verwendet werden kann.
        Beachten Sie, dass die Methode möglicherweise eine neue ID für dasselbe Gerät zurückgibt und dass gespeicherte IDs _erfolgreich durch `selectAudioOutput()` geleitet_ werden müssen, bevor sie mit [`setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId) funktionieren.

        > [!NOTE]
        > Ein Benutzeragent kann sich entscheiden, die Benutzerabfrage zu überspringen, wenn eine angegebene, nicht null Id zuvor vom Benutzer durch `selectAudioOutput()` in einer früheren Sitzung offenbart wurde.
        > In diesem Fall kann der Benutzeragent einfach mit dieser Geräte-ID auflösen oder mit einer neuen ID für dasselbe Gerät, wenn sie geändert wurde.
        > Wenn die Berechtigung für das angegebene Gerät zuvor erteilt, aber später widerrufen wurde, könnte der Benutzeragent alle erlaubten Geräte anzeigen und dasjenige mit der angegebenen ID hervorheben.

### Rückgabewert

Ein {{ jsxref("Promise") }}, das mit einem [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo)-Objekt erfüllt wird, das das vom Benutzer ausgewählte Audioausgabegerät beschreibt.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn eine [`speaker-selection`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection) [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) verwendet wird, um die Verwendung von Audioausgängen zu blockieren (zusätzlich wird das Popup zur Auswahl eines Audioausgangs nicht angezeigt), oder der Benutzer das Auswahlfenster schloss, ohne ein Gerät auszuwählen.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn keine verfügbaren Audioausgabegeräte vorhanden sind.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn keine {{Glossary("transient_activation", "transiente Aktivierung")}} erfolgt ist (Sie müssen diese von einer Art UI-Ereignis auslösen).

## Sicherheitsanforderungen

Der Zugriff auf die API unterliegt den folgenden Einschränkungen:

- Die Methode muss in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) aufgerufen werden.
- [Transiente Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich.
  Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.
- Der Zugriff kann durch die [`speaker-selection`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection) HTTP [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert werden.

Der Berechtigungsstatus kann mit der [Permissions API](/de/docs/Web/API/Permissions_API)-Methode [`navigator.permissions.query()`](/de/docs/Web/API/Permissions/query) abgefragt werden, indem ein Berechtigungsdeskriptor mit der `speaker-selection`-Berechtigung übergeben wird.

## Beispiele

Hier ist ein Beispiel für die Verwendung von `selectAudioOutput()`, innerhalb einer Funktion, die durch einen Button-Klick ausgelöst wird. Es gibt die ausgewählten [Geräte-IDs](/de/docs/Web/API/MediaDeviceInfo/deviceId) und Bezeichnungen (falls verfügbar) oder eine Fehlermeldung aus.

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

Bei Auswahl einer Ausgabe könnte dies produzieren:

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
- [WebRTC](/de/docs/Web/API/WebRTC_API) - die Einführung zur API
