---
title: "MediaDevices: getDisplayMedia()-Methode"
short-title: getDisplayMedia()
slug: Web/API/MediaDevices/getDisplayMedia
l10n:
  sourceCommit: b20a4643a0777bcb6bdc431b76ebf13eb2f31301
---

{{APIRef("Screen Capture API")}}{{SecureContext_Header}}

Die **`getDisplayMedia()`**-Methode der [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Schnittstelle fordert den Benutzer auf, die Berechtigung zur Aufnahme der Inhalte eines Bildschirms oder eines Teils davon (wie ein Fenster) als [`MediaStream`](/de/docs/Web/API/MediaStream) zu erteilen.

Der resultierende Stream kann dann unter Verwendung der [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) aufgezeichnet oder als Teil einer [WebRTC](/de/docs/Web/API/WebRTC_API) Sitzung übertragen werden.

Siehe [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture) für weitere Details und ein Beispiel.

## Syntax

```js-nolint
getDisplayMedia()
getDisplayMedia(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein optionales Objekt, das Anforderungen an den zurückgegebenen [`MediaStream`](/de/docs/Web/API/MediaStream) spezifiziert.
    Die Optionen für `getDisplayMedia()` funktionieren ähnlich wie die [Einschränkungen](/de/docs/Web/API/MediaDevices/getUserMedia#parameters) für die [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)-Methode, obwohl in diesem Fall nur `audio` und `video` angegeben werden können.
    Die Liste der möglichen Options-Eigenschaften für `getDisplayMedia()` lautet wie folgt:
    - `video` {{optional_inline}}
      - : Ein Boolean oder eine [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Instanz; der Standardwert ist `true`.
        Wenn diese Option weggelassen oder auf `true` gesetzt wird, enthält der zurückgegebene [`MediaStream`](/de/docs/Web/API/MediaStream) einen Videotrack.
        Da `getDisplayMedia()` einen Videotrack erfordert, wird die Promise abgelehnt und führt zu einem `TypeError`, wenn diese Option auf `false` gesetzt ist.
    - `audio` {{optional_inline}}
      - : Ein Boolean oder eine [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Instanz; der Standardwert ist `false`.
        Ein Wert von `true` gibt an, dass der zurückgegebene [`MediaStream`](/de/docs/Web/API/MediaStream) einen Audiotrack enthält, wenn Audio für die vom Benutzer gewählte Bildschirmfläche unterstützt wird und verfügbar ist.
    - `controller` {{Experimental_Inline}} {{optional_inline}}
      - : Ein [`CaptureController`](/de/docs/Web/API/CaptureController)-Objekt, das Methoden enthält, mit denen die Aufnahmesitzung weiter manipuliert werden kann, falls enthalten.
    - `monitorTypeSurfaces` {{Experimental_Inline}} {{optional_inline}}
      - : Ein enumerierter Wert, der festlegt, ob der Browser ganze Bildschirme in den dem Benutzer angebotenen Bildschirmaufnahmeoptionen neben Tab- und Fensteroptionen aufnehmen sollte.
        Diese Option soll Unternehmen vor der Weitergabe privater Informationen durch Mitarbeiterfehler beim Einsatz von Videokonferenz-Apps schützen.
        Mögliche Werte sind `include`, was andeutet, dass der Browser Bildschirmoptionen einschließen soll, und `exclude`, was andeutet, dass sie ausgeschlossen werden sollen.
        Ein Standardwert ist von der Spezifikation nicht vorgeschrieben; siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browser-spezifische Standardwerte.

        > [!NOTE]
        > Sie können `monitorTypeSurfaces: "exclude"` nicht gleichzeitig mit [`displaySurface: "monitor"`](/de/docs/Web/API/MediaTrackConstraints/displaySurface) festlegen, da die beiden Einstellungen widersprüchlich sind.
        > Ein Versuch, dies zu tun, resultiert in einem `TypeError` bei dem Aufruf von `getDisplayMedia()`.

    - `preferCurrentTab` {{non-standard_inline}} {{Experimental_Inline}} {{optional_inline}}
      - : Ein Boolean; ein Wert von `true` weist den Browser an, den aktuellen Tab als prominenteste Aufnahmequelle anzubieten, d.h. als separate "Dieser Tab" Option in den dem Benutzer präsentierten "Wählen Sie, was Sie freigeben möchten" Auswahlmöglichkeiten.
        Dies ist nützlich, da viele App-Typen im Allgemeinen nur den aktuellen Tab freigeben möchten.
        Beispielsweise möchte eine Präsentations-App dem Benutzer ermöglichen, den aktuellen Tab, der die Präsentation enthält, an eine virtuelle Konferenz zu streamen.
        Ein Standardwert ist von der Spezifikation nicht vorgeschrieben; siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browser-spezifische Standardwerte.
    - `selfBrowserSurface` {{Experimental_Inline}} {{optional_inline}}
      - : Ein enumerierter Wert, der festlegt, ob der Browser dem Benutzer erlauben sollte, den aktuellen Tab zur Aufnahme auszuwählen.
        Dies hilft, den "unendlichen Spiegel"-Effekt zu vermeiden, der auftritt, wenn eine Videokonferenz-App versehentlich ihr eigenes Display teilt.
        Mögliche Werte sind `include`, was andeutet, dass der Browser den aktuellen Tab in den für die Aufnahme angebotenen Auswahlmöglichkeiten einschließen soll, und `exclude`, was andeutet, dass er ausgeschlossen werden soll.
        Ein Standardwert ist von der Spezifikation nicht vorgeschrieben; siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browser-spezifische Standardwerte.
    - `surfaceSwitching` {{Experimental_Inline}} {{optional_inline}}
      - : Ein enumerierter Wert, der festlegt, ob der Browser ein Steuerelement anzeigen sollte, mit dem der Benutzer während des Bildschirm-Freigebens den geteilten Tab dynamisch wechseln kann.
        Dies ist viel bequemer, als den gesamten Freigabeprozess jedes Mal erneut durchlaufen zu müssen, wenn ein Benutzer den geteilten Tab wechseln möchte.
        Mögliche Werte sind `include`, was andeutet, dass der Browser das Steuerelement einschließen sollte, und `exclude`, was andeutet, dass es nicht angezeigt werden sollte.
        Ein Standardwert ist von der Spezifikation nicht vorgeschrieben; siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browser-spezifische Standardwerte.
    - `systemAudio` {{Experimental_Inline}} {{optional_inline}}
      - : Ein enumerierter Wert, der festlegt, ob der Browser das Systemaudio zu den dem Benutzer angebotenen möglichen Audioquellen hinzufügen sollte.
        Mögliche Werte sind `include`, was andeutet, dass der Browser das Systemaudio in die Liste der Optionen aufnehmen sollte, und `exclude`, was andeutet, dass es ausgeschlossen werden sollte.
        Ein Standardwert ist von der Spezifikation nicht vorgeschrieben; siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browser-spezifische Standardwerte.

> [!NOTE]
> Siehe den Artikel [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) für sehr viel detailliertere Informationen darüber, wie diese Optionen funktionieren.

### Rückgabewert

Eine {{jsxref("Promise")}}, die sich zu einem [`MediaStream`](/de/docs/Web/API/MediaStream) auflöst, der einen Videotrack enthält, dessen Inhalte von einem vom Benutzer ausgewählten Bildschirmbereich stammen, sowie optional einen Audiotrack.

> [!NOTE]
> Die Unterstützung von Audiotracks durch Browser variiert, sowohl in Bezug darauf, ob sie überhaupt vom Medienrecorder unterstützt werden, als auch hinsichtlich der unterstützten Audioquellen.
> Überprüfen Sie die [Kompatibilitätstabelle](#browser-kompatibilität) für Details für jeden Browser.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Fehler oder Misserfolg vorliegt, der keiner der anderen hier aufgeführten Ausnahmen entspricht.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf von `getDisplayMedia()` nicht von Code ausgeführt wird, der aufgrund einer {{Glossary("transient_activation", "vorübergehenden Aktivierung")}} ausgeführt wurde, wie beispielsweise einem Ereignishandler.
    Oder wenn der Browserkontext nicht vollständig aktiv oder nicht fokussiert ist.
    Oder wenn die `controller`-Option bereits in der Erstellung eines anderen [`MediaStream`](/de/docs/Web/API/MediaStream) verwendet wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Berechtigung zur Zugriff auf einen Bildschirmbereich vom Benutzer verweigert wurde oder die aktuelle Browsersitzung keinen Zugriff auf die Bildschirmfreigabe hat (zum Beispiel durch eine [Permission-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)).
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn keine Bildschirmvideoquellen zur Aufnahme verfügbar sind.
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzer einen Bildschirm, ein Fenster, einen Tab oder eine andere Quelle von Bildschirminformationen ausgewählt hat, jedoch ein Hardware- oder Betriebssystemebene-Fehler oder eine Sperrung aufgetreten ist, die das Teilen der ausgewählten Quelle verhindert.
- `OverconstrainedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn nach der Erstellung des Streams das Anwenden einer festen Beschränkung fehlschlägt, weil kein kompatibler Stream erzeugt werden konnte.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die angegebenen `options` Werte enthalten, die bei Aufrufen von `getDisplayMedia()` nicht erlaubt sind, zum Beispiel eine `video`-Eigenschaft auf false gesetzt ist, oder wenn angegebene [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) nicht erlaubt sind.
    `min` und `exact` Werte sind in Einschränkungen, die in `getDisplayMedia()`-Aufrufen verwendet werden, nicht erlaubt.

## Sicherheit

Da `getDisplayMedia()` auf negative Weise verwendet werden könnte, kann es eine Quelle erheblicher Datenschutz- und Sicherheitsbedenken sein.
Aus diesem Grund legt die Spezifikation Maßnahmen fest, die Browser ergreifen müssen, um `getDisplayMedia()` vollständig zu unterstützen.

- Die angegebenen Optionen können nicht verwendet werden, um die dem Benutzer zur Verfügung stehenden Auswahlmöglichkeiten einzuschränken.
  Stattdessen müssen sie nach der Wahl einer Quelle durch den Benutzer angewendet werden, um ein Ergebnis zu erzeugen, das den Optionen entspricht.
- Die Genehmigung zur Verwendung von `getDisplayMedia()` kann nicht gespeichert werden, um sie erneut zu verwenden.
  Der Benutzer muss jedes Mal um Erlaubnis gebeten werden.
- [Vorübergehende Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich.
  Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.
- Browser werden ermutigt, den Benutzern das Teilen von Displays oder Fenstern, die Browser enthalten, zu warnen, und genau darauf zu achten, welche weiteren Inhalte möglicherweise erfasst und anderen Benutzern angezeigt werden.

## Beispiele

Im folgenden Beispiel wird eine `startCapture()`-Methode erstellt, die die Bildschirmaufnahme basierend auf einem Satz von Optionen initiiert, die durch den `displayMediaOptions`-Parameter spezifiziert werden.

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

Dies verwendet {{jsxref("Operators/await", "await")}}, um asynchron auf die Auflösung von `getDisplayMedia()` mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) zu warten, der die Displayinhalte wie durch die angegebenen Optionen angefordert enthält.
Der Stream wird dann zum Aufrufer zurückgegeben, möglicherweise zum Hinzufügen zu einem WebRTC-Anruf unter Verwendung von [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack), um den Videotrack aus dem Stream hinzuzufügen.

> [!NOTE]
> Die [Screen-Sharing-Steuerelemente](https://chrome.dev/screen-sharing-controls/)-Demo bietet eine vollständige Implementierung, die es ermöglicht, eine Bildschirmaufnahme mit Ihrer Wahl von `getDisplayMedia()`-Beschränkungen und -Optionen zu erstellen.

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
  Kamera und/oder Mikrofon
