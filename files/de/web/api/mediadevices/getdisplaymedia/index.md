---
title: "MediaDevices: getDisplayMedia() Methode"
short-title: getDisplayMedia()
slug: Web/API/MediaDevices/getDisplayMedia
l10n:
  sourceCommit: 00569492b85db926a308759a435309639664b068
---

{{APIRef("Screen Capture API")}}{{SecureContext_Header}}

Die **`getDisplayMedia()`** Methode des [`MediaDevices`](/de/docs/Web/API/MediaDevices) Interfaces fordert den Benutzer auf, die Erlaubnis zu erteilen, die Inhalte eines Bildschirms oder eines Teils davon (wie zum Beispiel eines Fensters) als [`MediaStream`](/de/docs/Web/API/MediaStream) aufzunehmen.

Der resultierende Stream kann dann mithilfe der [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) aufgezeichnet oder als Teil einer [WebRTC](/de/docs/Web/API/WebRTC_API) Sitzung übertragen werden.

Weitere Details und ein Beispiel finden Sie unter [Using the Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture).

## Syntax

```js-nolint
getDisplayMedia()
getDisplayMedia(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein optionales Objekt, das Anforderungen für den zurückgegebenen [`MediaStream`](/de/docs/Web/API/MediaStream) spezifiziert. Die Optionen für `getDisplayMedia()` funktionieren ähnlich wie die [Constraints](/de/docs/Web/API/MediaDevices/getUserMedia#parameters) für die Methode [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), obwohl in diesem Fall nur `audio` und `video` spezifiziert werden können. Die Liste der möglichen Options-Eigenschaften für `getDisplayMedia()` lautet wie folgt:

    - `video` {{optional_inline}}
      - : Ein Boolean oder eine Instanz von [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints); der Standardwert ist `true`. Wenn diese Option weggelassen oder auf `true` gesetzt wird, wird der Stream einen Videotrack enthalten. Ein Wert von `true` zeigt an, dass der zurückgegebene [`MediaStream`](/de/docs/Web/API/MediaStream) einen Videotrack enthalten wird. Da `getDisplayMedia()` einen Videotrack erfordert, wird das Versprechen mit einem `TypeError` verworfen, wenn diese Option auf `false` gesetzt wird.
    - `audio` {{optional_inline}}
      - : Ein Boolean oder eine Instanz von [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints); der Standardwert ist `false`. Ein Wert von `true` zeigt an, dass der zurückgegebene [`MediaStream`](/de/docs/Web/API/MediaStream) einen Audiotrack enthalten wird, wenn Audio unterstützt wird und für die vom Benutzer gewählte Bildschirmoberfläche verfügbar ist.
    - `controller` {{Experimental_Inline}} {{optional_inline}}
      - : Ein [`CaptureController`](/de/docs/Web/API/CaptureController) Objekt, das Methoden enthält, die zur weiteren Bearbeitung der Aufnahmesitzung verwendet werden können, wenn es enthalten ist.
    - `monitorTypeSurfaces` {{Experimental_Inline}} {{optional_inline}}

      - : Ein enumerierter Wert, der angibt, ob der Browser vollständige Bildschirme in den dem Benutzer angezeigten Bildschirmaufnahmeoptionen neben Tab- und Fensteroptionen anbieten soll. Diese Option soll Unternehmen vor der Preisgabe privater Informationen durch Mitarbeiterfehler bei der Verwendung von Videokonferenz-Apps schützen. Mögliche Werte sind `include`, was darauf hinweist, dass der Browser Bildschirmoptionen einschließen soll, und `exclude`, was darauf hinweist, dass sie ausgeschlossen werden sollen. Ein Standardwert ist von der Spezifikation nicht vorgeschrieben; siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browserspezifische Standards.

        > [!NOTE]
        > Sie können `monitorTypeSurfaces: "exclude"` nicht gleichzeitig mit [`displaySurface: "monitor"`](/de/docs/Web/API/MediaTrackConstraints/displaySurface) festlegen, da die beiden Einstellungen widersprüchlich sind. Der Versuch, dies zu tun, führt dazu, dass der `getDisplayMedia()`-Aufruf mit einem `TypeError` fehlschlägt.

    - `preferCurrentTab` {{non-standard_inline}} {{Experimental_Inline}} {{optional_inline}}
      - : Ein Boolean; ein Wert von `true` weist den Browser an, den aktuellen Tab als prominenteste Aufnahmequelle anzubieten, d. h. als separate Option "Dieser Tab" in den dem Benutzer angezeigten Optionen "Wählen Sie aus, was Sie freigeben möchten". Dies ist nützlich, da viele App-Typen im Allgemeinen nur den aktuellen Tab freigeben möchten. Zum Beispiel möchte eine Präsentations-App möglicherweise dem Benutzer ermöglichen, den aktuellen Tab, der die Präsentation enthält, an eine virtuelle Konferenz zu streamen. Ein Standardwert ist von der Spezifikation nicht vorgeschrieben; siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browserspezifische Standards.
    - `selfBrowserSurface` {{Experimental_Inline}} {{optional_inline}}
      - : Ein enumerierter Wert, der angibt, ob der Browser dem Benutzer erlauben soll, den aktuellen Tab zur Aufnahme auszuwählen. Dies hilft, den "endlosen Spiegelungseffekt" zu vermeiden, der auftritt, wenn eine Videokonferenz-App versehentlich ihr eigenes Display teilt. Mögliche Werte sind `include`, was darauf hinweist, dass der Browser den aktuellen Tab in die zur Auswahl angebotenen Optionen aufnehmen soll, und `exclude`, was darauf hinweist, dass er ausgeschlossen werden soll. Ein Standardwert ist von der Spezifikation nicht vorgeschrieben; siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browserspezifische Standards.
    - `surfaceSwitching` {{Experimental_Inline}} {{optional_inline}}
      - : Ein enumerierter Wert, der angibt, ob der Browser ein Steuerungselement anzeigen soll, das dem Benutzer ermöglicht, während der Bildschirmfreigabe dynamisch den freigegebenen Tab zu wechseln. Dies ist viel bequemer, als den gesamten Freigabeprozess jedes Mal durchlaufen zu müssen, wenn ein Benutzer den freigegebenen Tab wechseln möchte. Mögliche Werte sind `include`, was darauf hinweist, dass der Browser das Steuerungselement einschließen soll, und `exclude`, was darauf hinweist, dass es nicht angezeigt werden soll. Ein Standardwert ist von der Spezifikation nicht vorgeschrieben; siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browserspezifische Standards.
    - `systemAudio` {{Experimental_Inline}} {{optional_inline}}
      - : Ein enumerierter Wert, der angibt, ob der Browser das Systemaudio zu den dem Benutzer angebotenen möglichen Audioquellen hinzufügen soll. Mögliche Werte sind `include`, was darauf hinweist, dass der Browser das Systemaudio in die Liste der Auswahlmöglichkeiten aufnehmen soll, und `exclude`, was darauf hinweist, dass es ausgeschlossen werden soll. Ein Standardwert ist von der Spezifikation nicht vorgeschrieben; siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browserspezifische Standards.

> [!NOTE]
> Siehe den Artikel [Fähigkeiten, Constraints und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) für ausführlichere Informationen darüber, wie diese Optionen funktionieren.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem [`MediaStream`](/de/docs/Web/API/MediaStream) aufgelöst wird, der einen Videotrack enthält, dessen Inhalte aus einem vom Benutzer gewählten Bildschirmbereich stammen, sowie einen optionalen Audiotrack.

> [!NOTE]
> Die Browserunterstützung für Audiotracks variiert, sowohl in Bezug darauf, ob sie überhaupt vom Medienrekorder unterstützt werden, als auch in Bezug auf die unterstützten Audioquellen. Überprüfen Sie die [Kompatibilitätstabelle](#browser-kompatibilität) für Details zu jedem Browser.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Fehler oder Ausfall mit keiner der hier aufgeführten anderen Ausnahmen übereinstimmt.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf von `getDisplayMedia()` nicht von einem durch eine {{Glossary("transient_activation", "transiente Aktivierung")}} verursachten Code stammt, wie z. B. einem Ereignishandler. Oder wenn der Browserkontext nicht vollständig aktiv ist oder nicht fokussiert ist. Oder wenn die `controller`-Option bereits bei der Erstellung eines anderen [`MediaStream`](/de/docs/Web/API/MediaStream) verwendet wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Berechtigung zur Zugriff auf einen Bildschirmbereich vom Benutzer verweigert wurde, oder die aktuelle Browsing-Instanz keinen Zugriff auf die Bildschirmfreigabe hat (zum Beispiel durch eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)).
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn keine Quellenscreen-Videoquellen zur Aufnahme verfügbar sind.
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzer einen Bildschirm, ein Fenster, einen Tab oder eine andere Quelle für Bildschirmdaten ausgewählt hat, aber ein Hardware- oder Betriebssystemfehler oder eine Sperre aufgetreten ist, die die Freigabe der ausgewählten Quelle verhindert.
- `OverconstrainedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn, nachdem der Stream erstellt wurde, das Anwenden der angegebenen Constraints fehlschlägt, weil kein kompatibler Stream generiert werden konnte.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die angegebenen `options` Werte enthalten, die beim Aufrufen von `getDisplayMedia()` nicht zulässig sind, zum Beispiel eine auf false gesetzte `video`-Eigenschaft, oder wenn angegebene [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) nicht zulässig sind. `min` und `exact` Werte sind in Constraints, die in `getDisplayMedia()`-Aufrufen verwendet werden, nicht zulässig.

## Sicherheit

Da `getDisplayMedia()` auf bösartige Weise verwendet werden könnte, kann es eine Quelle erheblicher Datenschutz- und Sicherheitsbedenken sein. Aus diesem Grund legt die Spezifikation Maßnahmen fest, die Browser treffen müssen, um `getDisplayMedia()` vollständig zu unterstützen.

- Die angegebenen Optionen können nicht verwendet werden, um die dem Benutzer zur Verfügung stehenden Auswahlmöglichkeiten zu begrenzen. Stattdessen müssen sie angewandt werden, nachdem der Benutzer eine Quelle ausgewählt hat, um Ausgaben zu erzeugen, die den Optionen entsprechen.
- Die Erlaubnis zur Verwendung von `getDisplayMedia()` kann nicht für eine spätere Verwendung beibehalten werden. Der Benutzer muss jedes Mal um Erlaubnis gebeten werden.
- [Transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit dieses Feature funktioniert.
- Browser werden ermutigt, den Benutzern eine Warnung bezüglich der Freigabe von Displays oder Fenstern, die Browser enthalten, zu geben und genau zu beobachten, welche anderen Inhalte möglicherweise erfasst und anderen Benutzern angezeigt werden.

## Beispiele

Im folgenden Beispiel wird eine `startCapture()` Methode erstellt, die die Bildschirmaufnahme mit einer Reihe von Optionen startet, die mit dem Parameter `displayMediaOptions` angegeben werden.

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

Dies verwendet {{jsxref("Operators/await", "await")}}, um asynchron auf die Auflösung von `getDisplayMedia()` zu einem [`MediaStream`](/de/docs/Web/API/MediaStream) zu warten, der die gewünschten Anzeigeinhalte gemäß den angegebenen Optionen enthält. Der Stream wird dann an den Aufrufer zurückgegeben, möglicherweise zur Verwendung, um ihn z. B. mit [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) zu einem WebRTC-Anruf hinzuzufügen, um den Videotrack aus dem Stream hinzuzufügen.

> [!NOTE]
> Die [Screen sharing controls](https://screen-sharing-controls.glitch.me/)-Demo bietet eine vollständige Implementierung, die es Ihnen ermöglicht, eine Bildschirmaufnahme mit Ihrer Wahl der `getDisplayMedia()`-Constraints und -Optionen zu erstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Using the Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia): Erfassung von Medien von einer Kamera und/oder einem Mikrofon
