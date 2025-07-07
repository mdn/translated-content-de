---
title: "MediaDevices: getDisplayMedia() Methode"
short-title: getDisplayMedia()
slug: Web/API/MediaDevices/getDisplayMedia
l10n:
  sourceCommit: 90eafc463fe122c86a64836f4f3953a0bee85be9
---

{{APIRef("Screen Capture API")}}{{SecureContext_Header}}

Die **`getDisplayMedia()`**-Methode des [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Interfaces fordert den Benutzer auf, die Auswahl und Genehmigung zur Aufnahme des Inhalts eines Anzeigegeräts oder eines Teils davon (wie ein Fenster) als [`MediaStream`](/de/docs/Web/API/MediaStream) zu erteilen.

Der resultierende Stream kann dann mit der [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) aufgenommen oder als Teil einer [WebRTC](/de/docs/Web/API/WebRTC_API)-Sitzung übertragen werden.

Weitere Details und ein Beispiel finden Sie unter [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture).

## Syntax

```js-nolint
getDisplayMedia()
getDisplayMedia(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein optionales Objekt, das Anforderungen an den zurückgegebenen [`MediaStream`](/de/docs/Web/API/MediaStream) angibt. Die Optionen für `getDisplayMedia()` funktionieren auf die gleiche Weise wie die [Einschränkungen](/de/docs/Web/API/MediaDevices/getUserMedia#parameters) für die [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)-Methode, obwohl in diesem Fall nur `audio` und `video` angegeben werden können. Die Liste der möglichen Optionen für `getDisplayMedia()` ist wie folgt:
    - `video` {{optional_inline}}
      - : Ein Boolescher Wert oder eine Instanz von [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints); der Standardwert ist `true`. Wenn diese Option weggelassen wird oder auf `true` gesetzt ist, enthält der Stream eine Videospur. Ein Wert von `true` gibt an, dass der zurückgegebene [`MediaStream`](/de/docs/Web/API/MediaStream) eine Videospur enthält. Da `getDisplayMedia()` eine Videospur erfordert, wird das Versprechen, wenn diese Option auf `false` gesetzt ist, mit einem `TypeError` abgelehnt.
    - `audio` {{optional_inline}}
      - : Ein Boolescher Wert oder eine Instanz von [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints); der Standardwert ist `false`. Ein Wert von `true` gibt an, dass der zurückgegebene [`MediaStream`](/de/docs/Web/API/MediaStream) eine Audiospur enthalten wird, wenn Audio unterstützt und für die vom Benutzer gewählte Anzeigefläche verfügbar ist.
    - `controller` {{Experimental_Inline}} {{optional_inline}}
      - : Eine Instanz eines [`CaptureController`](/de/docs/Web/API/CaptureController)-Objekts mit Methoden, die verwendet werden können, um die Aufnahmesitzung weiter zu manipulieren, falls inklusive.
    - `monitorTypeSurfaces` {{Experimental_Inline}} {{optional_inline}}
      - : Ein enumerierter Wert, der angibt, ob der Browser gesamte Bildschirme neben Tab- und Fensteroptionen in den Bildschirmaufnahmeoptionen, die dem Benutzer präsentiert werden, anbieten soll. Diese Option ist dazu gedacht, Unternehmen vor der Preisgabe privater Informationen durch Mitarbeiterfehler bei der Verwendung von Videokonferenz-Apps zu schützen. Mögliche Werte sind `include`, was andeutet, dass der Browser Bildschirmoptionen einbeziehen soll, und `exclude`, was andeutet, dass sie ausgeschlossen werden sollen. Ein Standardwert wird von der Spezifikation nicht vorgeschrieben; siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browserspezifische Standardwerte.

        > [!NOTE]
        > Sie können nicht `monitorTypeSurfaces: "exclude"` gleichzeitig mit [`displaySurface: "monitor"`](/de/docs/Web/API/MediaTrackConstraints/displaySurface) setzen, da die beiden Einstellungen widersprüchlich sind. Ein Versuch, dies zu tun, wird dazu führen, dass der Aufruf von `getDisplayMedia()` mit einem `TypeError` fehlschlägt.

    - `preferCurrentTab` {{non-standard_inline}} {{Experimental_Inline}} {{optional_inline}}
      - : Ein boolescher Wert; ein Wert von `true` weist den Browser an, den aktuellen Tab als wichtigste Quelle für die Aufnahme anzubieten, d.h. als separate "Dieser Tab"-Option in den "Teilen, was Sie teilen möchten"-Optionen, die dem Benutzer präsentiert werden. Dies ist nützlich, da viele App-Typen im Allgemeinen nur den aktuellen Tab teilen möchten. Zum Beispiel könnte eine Präsentations-App es dem Benutzer ermöglichen wollen, den aktuellen Tab, der die Präsentation enthält, zu einem virtuellen Konferenzraum zu streamen. Ein Standardwert wird von der Spezifikation nicht vorgeschrieben; siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browserspezifische Standardwerte.
    - `selfBrowserSurface` {{Experimental_Inline}} {{optional_inline}}
      - : Ein enumerierter Wert, der angibt, ob der Browser dem Benutzer erlauben soll, den aktuellen Tab zur Aufnahme auszuwählen. Dies hilft, den "unendlichen Spiegelungeffekt" zu vermeiden, der auftritt, wenn eine Videokonferenz-App versehentlich das eigene Display teilt. Mögliche Werte sind `include`, was andeutet, dass der Browser den aktuellen Tab in die Auswahlmöglichkeiten für die Aufnahme einbeziehen soll, und `exclude`, was andeutet, dass er ausgeschlossen werden soll. Ein Standardwert wird von der Spezifikation nicht vorgeschrieben; siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browserspezifische Standardwerte.
    - `surfaceSwitching` {{Experimental_Inline}} {{optional_inline}}
      - : Ein enumerierter Wert, der angibt, ob der Browser eine Steuerung anzeigen soll, um dem Benutzer das dynamische Wechseln des geteilten Tabs während des Bildschirmteilens zu ermöglichen. Dies ist viel bequemer als jedes Mal den ganzen Teilungsprozess erneut durchlaufen zu müssen, wenn ein Benutzer den geteilten Tab wechseln möchte. Mögliche Werte sind `include`, was andeutet, dass der Browser die Steuerung einbeziehen soll, und `exclude`, was andeutet, dass sie nicht angezeigt werden soll. Ein Standardwert wird von der Spezifikation nicht vorgeschrieben; siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browserspezifische Standardwerte.
    - `systemAudio` {{Experimental_Inline}} {{optional_inline}}
      - : Ein enumerierter Wert, der angibt, ob der Browser das Systemaudio zu den möglichen Audiowiedergabequellen für den Benutzer hinzufügen soll. Mögliche Werte sind `include`, was andeutet, dass der Browser das Systemaudio in die Listenauswahl aufnehmen soll, und `exclude`, was andeutet, dass es ausgeschlossen werden soll. Ein Standardwert wird von der Spezifikation nicht vorgeschrieben; siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browserspezifische Standardwerte.

> [!NOTE]
> Siehe den Artikel [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) für detaillierte Informationen über die Funktionsweise dieser Optionen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf einen [`MediaStream`](/de/docs/Web/API/MediaStream) auflöst, der eine Videospur enthält, deren Inhalte aus einem vom Benutzer ausgewählten Bildschirmbereich stammen, sowie eine optionale Audiospur.

> [!NOTE]
> Die Browser-Unterstützung für Audiospuren variiert, sowohl in Bezug darauf, ob sie überhaupt von der Medienrecorder unterstützt werden, als auch in Bezug auf die unterstützten Audioquellen. Überprüfen Sie die [Kompatibilitätstabelle](#browser-kompatibilität) für Details zu jedem Browser.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Fehler oder Versagen keiner der anderen hier aufgeführten Ausnahmen entspricht.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf von `getDisplayMedia()` nicht von Code ausgeführt wurde, der aufgrund einer {{Glossary("transient_activation", "transienten Aktivierung")}} läuft, wie ein Event-Handler. Oder wenn der Browser-Kontext nicht vollständig aktiv oder nicht fokussiert ist. Oder wenn die `controller`-Option bereits zur Erstellung eines anderen [`MediaStream`](/de/docs/Web/API/MediaStream) verwendet wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Erlaubnis zum Zugriff auf einen Bildschirmbereich vom Benutzer verweigert wurde oder die aktuelle Browserinstanz keinen Zugriff auf das Bildschirmteilen hat (zum Beispiel durch eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)).
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn keine Quellenvideos für die Bildschirmaufnahme verfügbar sind.
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzer einen Bildschirm, ein Fenster, einen Tab oder eine andere Quelle von Bildschirmdaten ausgewählt hat, aber ein Hardware- oder Betriebssystemfehler oder eine Sperre aufgetreten ist, die das Teilen der ausgewählten Quelle verhindert.
- `OverconstrainedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn nach der Erstellung des Streams das Anwenden der angegebenen Einschränkungen fehlschlägt, weil kein kompatibler Stream generiert werden konnte.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die angegebenen `options` Werte enthalten, die beim Aufruf von `getDisplayMedia()` nicht erlaubt sind, z.B. eine `video`-Eigenschaft auf false setzen oder wenn angegebene [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) nicht erlaubt sind. `min` und `exact` Werte sind in den Beschränkungen, die in `getDisplayMedia()`-Aufrufen verwendet werden, nicht erlaubt.

## Sicherheit

Da `getDisplayMedia()` auf bösartige Weise verwendet werden könnte, kann es eine Quelle signifikanter Datenschutz- und Sicherheitsbedenken sein. Aus diesem Grund beschreibt die Spezifikation Maßnahmen, die Browser ergreifen müssen, um `getDisplayMedia()` vollständig zu unterstützen.

- Die angegebenen Optionen können nicht verwendet werden, um die dem Benutzer verfügbaren Auswahlmöglichkeiten einzuschränken. Stattdessen müssen sie nach der Auswahl einer Quelle durch den Benutzer angewendet werden, um eine Ausgabe zu erstellen, die den Optionen entspricht.
- Die Erlaubnis zur Verwendung von `getDisplayMedia()` kann nicht zur Wiederverwendung gespeichert werden. Der Benutzer muss jedes Mal um Erlaubnis gebeten werden.
- Eine [transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit dieses Feature funktioniert.
- Browser werden ermutigt, den Benutzern eine Warnung darüber zu geben, dass sie Displays oder Fenster teilen, die Browser enthalten, und genau darauf zu achten, welche anderen Inhalte möglicherweise erfasst und anderen Benutzern angezeigt werden könnten.

## Beispiele

Im folgenden Beispiel wird eine `startCapture()`-Methode erstellt, die die Bildschirmaufnahme mit einem Satz von Optionen startet, die durch den Parameter `displayMediaOptions` angegeben werden.

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

Dies verwendet {{jsxref("Operators/await", "await")}}, um asynchron auf die Auflösung von `getDisplayMedia()` zu einem [`MediaStream`](/de/docs/Web/API/MediaStream) zu warten, der die angeforderten Display-Inhalte enthält, die durch die angegebenen Optionen spezifiziert wurden. Der Stream wird dann an den Anrufer zur Verwendung zurückgegeben, möglicherweise um einem WebRTC-Anruf mit [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) die Videospur des Streams hinzuzufügen.

> [!NOTE]
> Die [Screen sharing controls](https://chrome.dev/screen-sharing-controls/)-Demo bietet eine vollständige Implementierung, die es Ihnen ermöglicht, eine Bildschirmaufnahme mit Ihrer Wahl von `getDisplayMedia()`-Einschränkungen und Optionen zu erstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia): Medienaufnahme mit einer Kamera und/oder einem Mikrofon
