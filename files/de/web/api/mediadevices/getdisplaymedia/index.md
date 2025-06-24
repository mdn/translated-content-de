---
title: "MediaDevices: Methode getDisplayMedia()"
short-title: getDisplayMedia()
slug: Web/API/MediaDevices/getDisplayMedia
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Screen Capture API")}}{{SecureContext_Header}}

Die **`getDisplayMedia()`**-Methode der [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Schnittstelle fordert den Benutzer auf, auszuwählen und die Erlaubnis zu erteilen, den Inhalt eines Bildschirms oder eines Teils davon (wie ein Fenster) als [`MediaStream`](/de/docs/Web/API/MediaStream) zu erfassen.

Der resultierende Stream kann dann mit der [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) aufgezeichnet oder als Teil einer [WebRTC](/de/docs/Web/API/WebRTC_API)-Sitzung übertragen werden.

Siehe [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture) für weitere Details und ein Beispiel.

## Syntax

```js-nolint
getDisplayMedia()
getDisplayMedia(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein optionales Objekt, das Anforderungen für den zurückgegebenen [`MediaStream`](/de/docs/Web/API/MediaStream) spezifiziert. Die Optionen für `getDisplayMedia()` funktionieren ähnlich wie die [Einschränkungen](/de/docs/Web/API/MediaDevices/getUserMedia#parameters) für die Methode [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), obwohl in diesem Fall nur `audio` und `video` angegeben werden können. Die Liste der möglichen Optionseigenschaften für `getDisplayMedia()` ist wie folgt:

    - `video` {{optional_inline}}
      - : Ein Boolescher Wert oder eine Instanz von [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints); der Standardwert ist `true`. Wird diese Option ausgelassen oder auf `true` gesetzt, enthält der Stream eine Videospur. Ein Wert von `true` gibt an, dass der zurückgegebene [`MediaStream`](/de/docs/Web/API/MediaStream) eine Videospur enthält. Da `getDisplayMedia()` eine Videospur erfordert, wird das Versprechen abgelehnt, wenn diese Option auf `false` gesetzt ist, mit einem `TypeError`.
    - `audio` {{optional_inline}}
      - : Ein Boolescher Wert oder eine Instanz von [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints); der Standardwert ist `false`. Ein Wert von `true` gibt an, dass der zurückgegebene [`MediaStream`](/de/docs/Web/API/MediaStream) eine Audiospur enthält, sofern Audio unterstützt wird und für die vom Benutzer gewählte Bildschirmoberfläche verfügbar ist.
    - `controller` {{Experimental_Inline}} {{optional_inline}}
      - : Eine [`CaptureController`](/de/docs/Web/API/CaptureController)-Objektinstanz, die Methoden enthält, mit denen die Aufnahme weiter manipuliert werden kann, wenn sie enthalten ist.
    - `monitorTypeSurfaces` {{Experimental_Inline}} {{optional_inline}}

      - : Ein enumerierter Wert, der angibt, ob der Browser in den dem Benutzer präsentierten Bildschirmaufnahmeoptionen vollständige Bildschirme neben Registerkarten- und Fensteroptionen anbieten soll. Diese Option soll verhindern, dass Unternehmen durch Benutzerfehler beim Einsatz von Videokonferenz-Apps private Informationen leaken. Mögliche Werte sind `include`, was darauf hinweist, dass der Browser Bildschirmoptionen einschließen soll, und `exclude`, was darauf hinweist, dass sie ausgeschlossen werden sollen. Ein Standardwert wird von der Spezifikation nicht vorgeschrieben; siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browserspezifische Standardeinstellungen.

        > [!NOTE]
        > Sie können nicht `monitorTypeSurfaces: "exclude"` gleichzeitig mit [`displaySurface: "monitor"`](/de/docs/Web/API/MediaTrackConstraints/displaySurface) einstellen, da die beiden Einstellungen widersprüchlich sind. Der Versuch, dies zu tun, führt dazu, dass der Aufruf von `getDisplayMedia()` mit einem `TypeError` fehlschlägt.

    - `preferCurrentTab` {{non-standard_inline}} {{Experimental_Inline}} {{optional_inline}}
      - : Ein Boolescher Wert; ein Wert von `true` gibt dem Browser an, die aktuelle Registerkarte als wichtigste Aufnahmequelle anzubieten, d.h. als separate "Diese Registerkarte"-Option in den dem Benutzer präsentierten "Wählen Sie, was Sie teilen möchten"-Optionen. Dies ist nützlich, da viele App-Typen im Allgemeinen nur die aktuelle Registerkarte teilen möchten. Beispielsweise könnte eine Präsentationsfolien-App dem Benutzer erlauben, die aktuelle Registerkarte mit der Präsentation an eine virtuelle Konferenz zu streamen. Ein Standardwert wird von der Spezifikation nicht vorgeschrieben; siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browserspezifische Standardeinstellungen.
    - `selfBrowserSurface` {{Experimental_Inline}} {{optional_inline}}
      - : Ein enumerierter Wert, der angibt, ob der Browser dem Benutzer erlauben sollte, die aktuelle Registerkarte für die Aufnahme auszuwählen. Dies hilft, den "unendlichen Spiegelkabinett"-Effekt zu vermeiden, der entsteht, wenn eine Videokonferenz-App versehentlich ihren eigenen Bildschirm teilt. Mögliche Werte sind `include`, was darauf hinweist, dass der Browser die aktuelle Registerkarte in die zur Aufnahme angebotenen Optionen aufnehmen soll, und `exclude`, was darauf hinweist, dass sie ausgeschlossen werden soll. Ein Standardwert wird von der Spezifikation nicht vorgeschrieben; siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browserspezifische Standardeinstellungen.
    - `surfaceSwitching` {{Experimental_Inline}} {{optional_inline}}
      - : Ein enumerierter Wert, der angibt, ob der Browser ein Steuerelement anzeigen soll, das dem Benutzer ermöglicht, die geteilte Registerkarte während des Bildschirmtrennens dynamisch zu wechseln. Dies ist viel bequemer, als jedes Mal den gesamten Freigabeprozess erneut durchlaufen zu müssen, wenn ein Benutzer die geteilte Registerkarte wechseln möchte. Mögliche Werte sind `include`, was darauf hinweist, dass der Browser das Steuerelement einschließen soll, und `exclude`, was darauf hinweist, dass es nicht gezeigt werden soll. Ein Standardwert wird von der Spezifikation nicht vorgeschrieben; siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browserspezifische Standardeinstellungen.
    - `systemAudio` {{Experimental_Inline}} {{optional_inline}}
      - : Ein enumerierter Wert, der angibt, ob der Browser das Systemaudio unter den dem Benutzer angebotenen möglichen Audioquellen einschließen soll. Mögliche Werte sind `include`, was darauf hinweist, dass der Browser das Systemaudio in die Liste der Optionen aufnehmen soll, und `exclude`, was darauf hinweist, dass es ausgeschlossen werden soll. Ein Standardwert wird in der Spezifikation nicht vorgegeben; siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browserspezifische Standards.

> [!NOTE]
> Sehen Sie sich den Artikel [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) an, um viele weitere Details über die Funktionsweise dieser Optionen zu erfahren.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem [`MediaStream`](/de/docs/Web/API/MediaStream) aufgelöst wird, der eine Videospur enthält, deren Inhalt von einem vom Benutzer ausgewählten Bildschirmbereich stammt, sowie optional eine Audiospur.

> [!NOTE]
> Die Unterstützung von Audiospuren durch Browser variiert, sowohl in Bezug darauf, ob sie überhaupt von dem Media Recorder unterstützt werden, als auch in Bezug auf die unterstützten Audioquellen. Überprüfen Sie die [Kompatibilitätstabelle](#browser-kompatibilität) für Details zu jedem Browser.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Fehler oder Ausfall keiner anderen hier aufgelisteten Ausnahme entspricht.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf von `getDisplayMedia()` nicht aus Code stammt, der aufgrund einer {{Glossary("transient_activation", "transient activation")}}, wie einem Ereignis-Handler, ausgeführt wird. Oder wenn der Browser-Kontext nicht vollständig aktiv oder nicht fokussiert ist. Oder wenn die `controller`-Option bereits verwendet wurde, um einen anderen [`MediaStream`](/de/docs/Web/API/MediaStream) zu erstellen.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Berechtigung zum Zugriff auf einen Bildschirmbereich vom Benutzer verweigert wurde oder die aktuelle Browsing-Instanz keinen Zugriff auf das Bildschirmteilen hat (z. B. durch eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)).
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn keine Quellen für Bildschirmvideo zur Aufnahme verfügbar sind.
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzer einen Bildschirm, ein Fenster, eine Registerkarte oder eine andere Quelle von Bildschirmdaten ausgewählt hat, aber ein Hardware- oder Betriebssystemfehler oder eine Sperre aufgetreten ist, die die Freigabe der ausgewählten Quelle verhindert.
- `OverconstrainedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn nach der Erstellung des Streams die Anwendung der angegebenen Einschränkungen fehlschlägt, weil kein kompatibler Stream generiert werden konnte.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die angegebenen `options` Werte enthalten, die beim Aufruf von `getDisplayMedia()` nicht erlaubt sind, z. B. eine `video`-Eigenschaft, die auf false gesetzt ist, oder wenn bestimmte [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) nicht zulässig sind. `min` und `exact` Werte sind in Einschränkungen, die in `getDisplayMedia()`-Aufrufen verwendet werden, nicht erlaubt.

## Sicherheit

Da `getDisplayMedia()` in böswilliger Weise verwendet werden könnte, kann es eine Quelle erheblicher Datenschutz- und Sicherheitsbedenken sein. Aus diesem Grund beschreibt die Spezifikation die Maßnahmen, die Browser ergreifen müssen, um `getDisplayMedia()` vollständig zu unterstützen.

- Die angegebenen Optionen können nicht verwendet werden, um die dem Benutzer verfügbaren Auswahlmöglichkeiten zu beschränken. Stattdessen müssen sie angewendet werden, nachdem der Benutzer eine Quelle ausgewählt hat, um einen Output zu erzeugen, der den Optionen entspricht.
- Die Erlaubnis, `getDisplayMedia()` zu verwenden, kann nicht für eine spätere Verwendung gespeichert werden. Der Benutzer muss jedes Mal um eine Erlaubnis gebeten werden.
- [Transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.
- Browser werden ermutigt, den Benutzern eine Warnung über das Teilen von Bildschirmen oder Fenstern, die Browser enthalten, zu geben und genau darauf zu achten, welche anderen Inhalte möglicherweise erfasst und anderen Benutzern gezeigt werden könnten.

## Beispiele

Im folgenden Beispiel wird eine `startCapture()`-Methode erstellt, die die Bildschirmaufnahme mit einer Reihe von durch den Parameter `displayMediaOptions` spezifizierten Optionen initiiert.

```js
const displayMediaOptions = {
  video: {
    displaySurface: "browser",
  },
  audio: {
    suppressLocalAudioPlayback: false,
  },
  preferCurrentTab: false,
  selfBrowserSurface: "exclude",
  systemAudio: "include",
  surfaceSwitching: "include",
  monitorTypeSurfaces: "include",
};

async function startCapture(displayMediaOptions) {
  let captureStream;

  try {
    captureStream =
      await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
  } catch (err) {
    console.error(`Error: ${err}`);
  }
  return captureStream;
}
```

Dies verwendet {{jsxref("Operators/await", "await")}}, um asynchron auf die Auflösung von `getDisplayMedia()` mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) zu warten, der den Displayinhalt enthält, wie durch die angegebenen Optionen angefordert. Der Stream wird dann an den Aufrufenden zurückgegeben, vielleicht zur Verwendung in einem WebRTC-Anruf, indem die Videospur des Streams mit [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) hinzugefügt wird.

> [!NOTE]
> Die [Bildschirmfreigabesteuerungen](https://screen-sharing-controls.glitch.me/)-Demo bietet eine vollständige Implementierung, mit der Sie eine Bildschirmaufnahme mit Ihrer Wahl von `getDisplayMedia()`-Einschränkungen und -Optionen erstellen können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia): Erfassung von Medien von einer
  Kamera und/oder einem Mikrofon
