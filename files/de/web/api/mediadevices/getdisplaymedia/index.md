---
title: "MediaDevices: getDisplayMedia()-Methode"
short-title: getDisplayMedia()
slug: Web/API/MediaDevices/getDisplayMedia
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Screen Capture API")}}{{SecureContext_Header}}

Die **`getDisplayMedia()`**-Methode der [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Schnittstelle fordert den Benutzer auf, die Erlaubnis zu erteilen, den Inhalt eines Displays oder eines Teils davon (wie z.B. ein Fenster) als einen [`MediaStream`](/de/docs/Web/API/MediaStream) zu erfassen.

Der resultierende Stream kann dann mit der [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) aufgezeichnet oder als Teil einer [WebRTC](/de/docs/Web/API/WebRTC_API)-Sitzung übertragen werden.

Weitere Details und ein Beispiel finden Sie unter [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture).

## Syntax

```js-nolint
getDisplayMedia()
getDisplayMedia(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein optionales Objekt, das Anforderungen für den zurückgegebenen [`MediaStream`](/de/docs/Web/API/MediaStream) spezifiziert. Die Optionen für `getDisplayMedia()` funktionieren ähnlich wie die [Einschränkungen](/de/docs/Web/API/MediaDevices/getUserMedia#parameters) für die [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)-Methode, obwohl in diesem Fall nur `audio` und `video` angegeben werden können. Die Liste der möglichen Optionseigenschaften für `getDisplayMedia()` ist wie folgt:

    - `video` {{optional_inline}}
      - : Ein boolescher Wert oder eine Instanz von [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints); der Standardwert ist `true`. Wenn diese Option weggelassen oder auf `true` gesetzt wird, enthält der Stream einen Videospur. Ein Wert von `true` gibt an, dass der zurückgegebene [`MediaStream`](/de/docs/Web/API/MediaStream) eine Videospur enthält. Da `getDisplayMedia()` eine Videospur erfordert, wird der Promise abgelehnt mit einem `TypeError`, wenn diese Option auf `false` gesetzt wird.
    - `audio` {{optional_inline}}
      - : Ein boolescher Wert oder eine Instanz von [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints); der Standardwert ist `false`. Ein Wert von `true` gibt an, dass der zurückgegebene [`MediaStream`](/de/docs/Web/API/MediaStream) eine Audiospur enthält, wenn Audio für die vom Benutzer gewählte Anzeigeoberfläche unterstützt und verfügbar ist.
    - `controller` {{Experimental_Inline}} {{optional_inline}}
      - : Ein [`CaptureController`](/de/docs/Web/API/CaptureController)-Objektinstanz, die Methoden enthält, mit denen die Aufnahmesitzung weiter manipuliert werden kann, falls eingeschlossen.
    - `monitorTypeSurfaces` {{Experimental_Inline}} {{optional_inline}}

      - : Ein enumerierter Wert, der angibt, ob der Browser ganze Bildschirme in den dem Benutzer präsentierten Bildschirmaufnahmeoptionen zusammen mit Tab- und Fensteroptionen anbieten soll. Diese Option soll Unternehmen davor schützen, dass private Informationen durch Benutzerfehler bei der Verwendung von Videokonferenz-Apps durchsickern. Mögliche Werte sind `include`, was darauf hinweist, dass der Browser Bildschirmloptions einbeziehen soll, und `exclude`, was darauf hinweist, dass sie ausgeschlossen werden sollen. Ein Standardwert wird von der Spezifikation nicht vorgeschrieben; siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browserspezifische Standardeinstellungen.

        > [!NOTE]
        > Sie können nicht gleichzeitig `monitorTypeSurfaces: "exclude"` und [`displaySurface: "monitor"`](/de/docs/Web/API/MediaTrackConstraints/displaySurface) setzen, da die beiden Einstellungen im Widerspruch stehen. Ein solcher Versuch führt dazu, dass der `getDisplayMedia()`-Aufruf mit einem `TypeError` fehlschlägt.

    - `preferCurrentTab` {{non-standard_inline}} {{Experimental_Inline}} {{optional_inline}}
      - : Ein boolescher Wert; ein Wert von `true` weist den Browser an, den aktuellen Tab als die herausragendste Aufnahmequelle anzubieten, d.h. als separate "Dieser Tab"-Option in den dem Benutzer präsentierten "Wählen Sie aus, was Sie teilen möchten"-Optionen. Dies ist nützlich, da viele Apptypen im Allgemeinen nur den aktuellen Tab teilen möchten. Zum Beispiel könnte eine Folienpräsentations-App dem Benutzer ermöglichen wollen, den aktuellen Tab mit der Präsentation zu einem virtuellen Konferenz weiterzustreamen. Ein Standardwert wird von der Spezifikation nicht vorgeschrieben; siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browserspezifische Standardeinstellungen.
    - `selfBrowserSurface` {{Experimental_Inline}} {{optional_inline}}
      - : Ein enumerierter Wert, der angibt, ob der Browser dem Benutzer erlauben soll, den aktuellen Tab zur Aufnahme auszuwählen. Dies hilft, den "endlosen Spiegelhalleneffekt" zu vermeiden, der auftritt, wenn eine Videokonferenz-App versehentlich ihr eigenes Display teilt. Mögliche Werte sind `include`, was darauf hinweist, dass der Browser den aktuellen Tab in den für die Aufnahme angebotenen Auswahlmöglichkeiten einbeziehen soll, und `exclude`, was darauf hinweist, dass er ausgeschlossen werden soll. Ein Standardwert wird von der Spezifikation nicht vorgeschrieben; siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browserspezifische Standardeinstellungen.
    - `surfaceSwitching` {{Experimental_Inline}} {{optional_inline}}
      - : Ein enumerierter Wert, der angibt, ob der Browser eine Steuerung anzeigen soll, die dem Benutzer erlaubt, während des Bildschirmteilens dynamisch den geteilten Tab zu wechseln. Dies ist viel praktischer, als jedes Mal, wenn ein Benutzer den geteilten Tab wechseln möchte, den gesamten Teilungsvorgang erneut durchlaufen zu müssen. Mögliche Werte sind `include`, was darauf hinweist, dass der Browser die Steuerung einbeziehen soll, und `exclude`, was darauf hinweist, dass sie nicht angezeigt werden soll. Ein Standardwert wird von der Spezifikation nicht vorgeschrieben; siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browserspezifische Standardeinstellungen.
    - `systemAudio` {{Experimental_Inline}} {{optional_inline}}
      - : Ein enumerierter Wert, der angibt, ob der Browser das Systemaudio unter den dem Benutzer angebotenen möglichen Audioquellen einbeziehen soll. Mögliche Werte sind `include`, was darauf hinweist, dass der Browser das Systemaudio in die Auswahlliste einbeziehen soll, und `exclude`, was darauf hinweist, dass es ausgeschlossen werden soll. Ein Standardwert wird von der Spezifikation nicht vorgeschrieben; siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browserspezifische Standardeinstellungen.

> [!NOTE]
> Siehe den Artikel [Fähigkeiten, Zwänge und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) für ausführlichere Informationen darüber, wie diese Optionen funktionieren.

### Rückgabewert

Ein {{jsxref("Promise")}}, der auf einen [`MediaStream`](/de/docs/Web/API/MediaStream) auflöst, der eine Videospur enthält, deren Inhalte aus einem vom Benutzer ausgewählten Bildschirmbereich stammen, sowie optional eine Audiospur enthält.

> [!NOTE]
> Die Browserunterstützung für Audiospuren variiert, sowohl im Hinblick darauf, ob sie überhaupt vom Medienrecorder unterstützt werden, als auch im Hinblick auf die unterstützten Audioquellen. Überprüfen Sie die [Kompatibilitätstabelle](#browser-kompatibilität) für Details zu jedem Browser.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Fehler oder ein Misserfolg keine der anderen hier aufgeführten Ausnahmen entspricht.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf von `getDisplayMedia()` nicht aus einem Code heraus gemacht wurde, der aufgrund einer {{Glossary("transient_activation", "vorübergehenden Aktivierung")}} ausgeführt wird, wie z.B. einem Ereignishandler. Oder wenn der Browserkontext nicht vollständig aktiv oder nicht fokussiert ist. Oder wenn die `controller`-Option bereits zur Erstellung eines anderen [`MediaStream`](/de/docs/Web/API/MediaStream) verwendet wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Erlaubnis zum Zugriff auf einen Bildschirmbereich vom Benutzer verweigert wurde oder die aktuelle Browsersitzung keinen Zugriff auf Bildschirmfreigabe hat (z.B. durch eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)).
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn keine Quellen für Bildschirmvideo zur Erfassung verfügbar sind.
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzer einen Bildschirm, ein Fenster, einen Tab oder eine andere Quelle für Bildschirmdaten ausgewählt hat, aber ein Hardware- oder Betriebssystemfehler oder -sperre aufgetreten ist, die das Teilen der ausgewählten Quelle verhindert.
- `OverconstrainedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn nach der Erstellung des Streams das Anwenden von spezifizierten Einschränkungen fehlschlägt, da kein kompatibler Stream generiert werden konnte.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die angegebenen `options` Werte enthalten, die beim Aufruf von `getDisplayMedia()` nicht erlaubt sind, z.B. eine `video`-Eigenschaft, die auf false gesetzt ist, oder wenn spezifizierte [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) nicht erlaubt sind. `min`- und `exact`-Werte sind in Einschränkungen, die in `getDisplayMedia()`-Aufrufen verwendet werden, nicht erlaubt.

## Sicherheit

Da `getDisplayMedia()` auf bösartige Weise verwendet werden könnte, kann es eine Quelle erheblicher Datenschutz- und Sicherheitsbedenken sein. Aus diesem Grund enthält die Spezifikation Maßnahmen, die die Browser ergreifen müssen, um `getDisplayMedia()` zu unterstützen.

- Die angegebenen Optionen können nicht verwendet werden, um die dem Benutzer zur Verfügung stehenden Auswahlmöglichkeiten einzuschränken. Stattdessen müssen sie angewendet werden, nachdem der Benutzer eine Quelle ausgewählt hat, um eine Ausgabe zu erzeugen, die den Optionen entspricht.
- Die Erlaubnis `getDisplayMedia()` zu verwenden, kann nicht gespeichert werden, um sie wiederzuverwenden. Der Benutzer muss jedes Mal um Erlaubnis gefragt werden.
- [Vorübergehende Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.
- Browser werden ermutigt, den Benutzern eine Warnung darüber zu geben, Bildschirmbereiche oder Fenster zu teilen, die Browser enthalten, und auch darauf zu achten, welche anderen Inhalte erfasst und anderen Benutzern angezeigt werden könnten.

## Beispiele

Im folgenden Beispiel wird eine `startCapture()`-Methode erstellt, die die Bildschirmaufnahme mit einem Satz von durch den Parameter `displayMediaOptions` spezifizierten Optionen startet.

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

Dies verwendet {{jsxref("Operators/await", "await")}}, um asynchron auf `getDisplayMedia()` zu warten, damit es mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) aufgelöst wird, der die angeforderten Anzeigeinhalte gemäß den angegebenen Optionen enthält. Der Stream wird dann an den Aufrufer zurückgegeben, um verwendet zu werden, vielleicht um ihn zu einem WebRTC-Anruf hinzuzufügen, indem [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) verwendet wird, um die Videospur aus dem Stream hinzuzufügen.

> [!NOTE]
> Die [Demonstration der Bildschirmfreigabesteuerungen](https://screen-sharing-controls.glitch.me/) bietet eine vollständige Implementierung, die es Ihnen ermöglicht, eine Bildschirmaufnahme mit Ihrer Auswahl an `getDisplayMedia()`-Einschränkungen und -Optionen zu erstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia): Aufnahme von Medien von einer
  Kamera und/oder einem Mikrofon
