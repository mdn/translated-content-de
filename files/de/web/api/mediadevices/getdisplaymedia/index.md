---
title: "MediaDevices: Methode getDisplayMedia()"
short-title: getDisplayMedia()
slug: Web/API/MediaDevices/getDisplayMedia
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Screen Capture API")}}{{SecureContext_Header}}

Die **`getDisplayMedia()`**-Methode des {{domxref("MediaDevices")}}-Interfaces fordert den Benutzer auf, eine Auswahl zu treffen und die Erlaubnis zur Erfassung des Inhalts eines Displays oder eines Teils davon (wie z.B. ein Fenster) als {{domxref("MediaStream")}} zu erteilen.

Der resultierende Stream kann dann mit der [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) aufgezeichnet oder als Teil einer [WebRTC](/de/docs/Web/API/WebRTC_API)-Sitzung übertragen werden.

Siehe [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture) für mehr Details und ein Beispiel.

## Syntax

```js-nolint
getDisplayMedia()
getDisplayMedia(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein optionales Objekt, das Anforderungen für den zurückgegebenen {{domxref("MediaStream")}} spezifiziert. Die Optionen für `getDisplayMedia()` funktionieren ähnlich wie die [Constraints](/de/docs/Web/API/MediaDevices/getUserMedia#parameters) für die Methode {{domxref("MediaDevices.getUserMedia()")}}, obwohl in diesem Fall nur `audio` und `video` spezifiziert werden können. Die Liste der möglichen Optionen-Eigenschaften für `getDisplayMedia()` ist wie folgt:

    - `video` {{optional_inline}}
      - : Ein Boolean oder eine {{domxref("MediaTrackConstraints")}}-Instanz; der Standardwert ist `true`. Wenn diese Option weggelassen oder auf `true` gesetzt wird, enthält der Stream einen Videotrack. Ein Wert von `true` bedeutet, dass der zurückgegebene {{domxref("MediaStream")}} einen Videotrack enthalten wird. Da `getDisplayMedia()` einen Videotrack erfordert, wird das Versprechen abgelehnt, wenn diese Option auf `false` gesetzt ist, und ein `TypeError` wird ausgelöst.
    - `audio` {{optional_inline}}
      - : Ein Boolean oder eine {{domxref("MediaTrackConstraints")}}-Instanz; der Standardwert ist `false`. Ein Wert von `true` bedeutet, dass der zurückgegebene {{domxref("MediaStream")}} einen Audiotrack enthalten wird, falls Audio unterstützt und für die vom Benutzer gewählte Anzeigefläche verfügbar ist.
    - `controller` {{Experimental_Inline}} {{optional_inline}}
      - : Eine {{domxref("CaptureController")}}-Objektinstanz, die Methoden zum weiteren Manipulieren der Aufnahmesitzung bereitstellt, falls enthalten.
    - `monitorTypeSurfaces` {{optional_inline}}

      - : Ein enumerierter Wert, der angibt, ob der Browser gesamte Bildschirme in den dem Benutzer gezeigten Bildschirmaufnahmeoptionen neben Tab- und Fensteroptionen anbieten soll. Diese Option soll Unternehmen vor der Weitergabe privater Informationen durch Mitarbeiterfehler bei der Verwendung von Videokonferenz-Apps schützen. Mögliche Werte sind `include`, was darauf hinweist, dass der Browser Bildschirmoptionen einschließen soll, und `exclude`, was darauf hinweist, dass sie ausgeschlossen werden sollen. Ein Standardwert wird nicht von der Spezifikation vorgegeben; siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browserspezifische Standards.

        > [!NOTE]
        > Sie können nicht `monitorTypeSurfaces: "exclude"` gleichzeitig mit [`displaySurface: "monitor"`](/de/docs/Web/API/MediaTrackConstraints/displaySurface) festlegen, da die beiden Einstellungen widersprüchlich sind. Der Versuch, dies zu tun, führt dazu, dass der `getDisplayMedia()`-Aufruf mit einem `TypeError` fehlschlägt.

    - `preferCurrentTab` {{non-standard_inline}} {{Experimental_Inline}} {{optional_inline}}
      - : Ein Boolean; ein Wert von `true` weist den Browser an, den aktuellen Tab als prominenteste Aufnahmequelle anzubieten, d.h. als separate "Dieser Tab"-Option in den dem Benutzer gezeigten "Wählen, was zu teilen ist"-Optionen. Dies ist nützlich, da viele App-Typen im Allgemeinen nur den aktuellen Tab teilen möchten. Zum Beispiel könnte eine Präsentations-App dem Benutzer ermöglichen, den aktuellen Tab mit der Präsentation auf eine virtuelle Konferenz zu streamen. Ein Standardwert wird nicht von der Spezifikation vorgegeben; siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browserspezifische Standards.
    - `selfBrowserSurface` {{Experimental_Inline}} {{optional_inline}}
      - : Ein enumerierter Wert, der angibt, ob der Browser dem Benutzer erlauben soll, den aktuellen Tab zur Aufnahme auszuwählen. Dies hilft, den "endlosen Spiegelungseffekt" zu vermeiden, der auftritt, wenn eine Videokonferenz-App versehentlich ihre eigene Anzeige teilt. Mögliche Werte sind `include`, was darauf hinweist, dass der Browser den aktuellen Tab in den zur Aufnahme angebotenen Auswahlmöglichkeiten einbeziehen soll, und `exclude`, was darauf hinweist, dass er ausgeschlossen werden soll. Ein Standardwert wird nicht von der Spezifikation vorgegeben; siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browserspezifische Standards.
    - `surfaceSwitching` {{Experimental_Inline}} {{optional_inline}}
      - : Ein enumerierter Wert, der angibt, ob der Browser eine Steuerung anzeigen soll, die es dem Benutzer ermöglicht, während der Bildschirmfreigabe den freigegebenen Tab dynamisch zu wechseln. Dies ist viel bequemer, als den gesamten Freigabeprozess jedes Mal erneut zu durchlaufen, wenn ein Benutzer den freigegebenen Tab wechseln möchte. Mögliche Werte sind `include`, was darauf hinweist, dass der Browser die Steuerung einschließen soll, und `exclude`, was darauf hinweist, dass sie nicht angezeigt werden soll. Ein Standardwert wird nicht von der Spezifikation vorgegeben; siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browserspezifische Standards.
    - `systemAudio` {{Experimental_Inline}} {{optional_inline}}
      - : Ein enumerierter Wert, der angibt, ob der Browser das Systemaudio unter den dem Benutzer angebotenen möglichen Audioquellen einschließen soll. Mögliche Werte sind `include`, was darauf hinweist, dass der Browser das Systemaudio in die Liste der Auswahlmöglichkeiten einschließen soll, und `exclude`, was darauf hinweist, dass es ausgeschlossen werden soll. Ein Standardwert wird nicht von der Spezifikation vorgegeben; siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browserspezifische Standards.
    - `monitorTypeSurfaces` {{Experimental_Inline}} {{optional_inline}}
      - : Ein enumerierter Wert, der angibt, ob die Anwendung möchte, dass der Benutzer-Agent dem Benutzer die Option bietet, Anzeigeflächen auszuwählen, deren Typ Monitor ist. Mögliche Werte sind `include`, was darauf hinweist, dass der Browser die Anzeigeflächen, deren Typ Monitor ist, einschließen soll, und `exclude`, was darauf hinweist, dass sie ausgeschlossen werden sollen. Ein Standardwert wird nicht von der Spezifikation vorgegeben; siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browserspezifische Standards.

> [!NOTE]
> Siehe den Artikel [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) für weitere Details darüber, wie diese Optionen funktionieren.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf einen {{domxref("MediaStream")}} aufgelöst wird, der einen Videotrack enthält, dessen Inhalt von einem vom Benutzer ausgewählten Bildschirmbereich stammt, sowie einen optionalen Audiotrack.

> [!NOTE]
> Die Unterstützung von Audiotracks durch Browser variiert, sowohl in Bezug darauf, ob sie überhaupt vom Media-Recorder unterstützt werden, als auch in Bezug auf die unterstützten Audioquellen. Überprüfen Sie die [Kompatibilitätstabelle](#browser-kompatibilität) für Details zu jedem Browser.

### Ausnahmen

- `AbortError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn ein Fehler oder Problem keiner der hier aufgeführten anderen Ausnahmen entspricht.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Aufruf von `getDisplayMedia()` nicht aus Code erfolgte, der aufgrund einer {{glossary("transient activation")}}, wie einem Event-Handler ausgeführt wurde. Oder wenn der Browser-Kontext nicht vollständig aktiv oder nicht fokussiert ist. Oder, wenn die `controller`-Option bereits zur Erstellung eines anderen {{domxref("MediaStream")}} verwendet wurde.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Erlaubnis zum Zugriff auf einen Bildschirmbereich vom Benutzer verweigert wurde oder die aktuelle Browsing-Instanz keinen Zugriff auf die Bildschirmfreigabe hat (zum Beispiel durch eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)).
- `NotFoundError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn keine Quellen für Bildschirmvideo zur Erfassung verfügbar sind.
- `NotReadableError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Benutzer einen Bildschirm, ein Fenster, einen Tab oder eine andere Bildschirmquelle ausgewählt hat, aber ein Hardware- oder Betriebssystemfehler oder eine Sperrung auftrat, die die Freigabe der ausgewählten Quelle verhindert hat.
- `OverconstrainedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn nach dem Erstellen des Streams das Anwenden einer angegebenen Einschränkung fehlschlägt, weil kein kompatibler Stream generiert werden konnte.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die angegebenen `options` Werte enthalten, die bei einem Aufruf von `getDisplayMedia()` nicht zulässig sind, beispielsweise eine `video`-Eigenschaft, die auf false gesetzt ist, oder wenn angegebene {{domxref("MediaTrackConstraints")}} nicht zulässig sind. `min`- und `exact`-Werte sind in den beim Aufruf von `getDisplayMedia()` verwendeten Einschränkungen nicht erlaubt.

## Sicherheit

Da `getDisplayMedia()` auf böswillige Weise verwendet werden könnte, stellt es eine Quelle erheblicher Datenschutz- und Sicherheitsbedenken dar. Aus diesem Grund werden in der Spezifikation Maßnahmen beschrieben, die Browser ergreifen müssen, um `getDisplayMedia()` vollständig zu unterstützen.

- Die angegebenen Optionen können nicht verwendet werden, um die dem Benutzer zur Verfügung stehenden Auswahlmöglichkeiten einzuschränken. Stattdessen müssen sie angewendet werden, nachdem der Benutzer eine Quelle gewählt hat, um eine Ausgabe zu erzeugen, die den Optionen entspricht.
- Die Freigabe, `getDisplayMedia()` zu verwenden, kann nicht für die Wiederverwendung gespeichert werden. Der Benutzer muss jedes Mal um Erlaubnis gefragt werden.
- Eine [transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.
- Browser werden ermutigt, den Benutzern eine Warnung über die Freigabe von Displays oder Fenstern, die Browser enthalten, zu geben und genau darauf zu achten, welche Inhalte möglicherweise erfasst und anderen Benutzern gezeigt werden.

## Beispiele

Im folgenden Beispiel wird eine `startCapture()`-Methode erstellt, die die Bildschirmaufnahme mit einer Reihe von Optionen beginnt, die durch den `displayMediaOptions`-Parameter spezifiziert werden.

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

Dies verwendet {{jsxref("Operators/await", "await")}}, um asynchron auf die Auflösung von `getDisplayMedia()` mit einem {{domxref("MediaStream")}} zu warten, das die angeforderten Anzeigeflächeninhalte gemäß den angegebenen Optionen enthält. Der Stream wird dann an den Aufrufer zur Verwendung zurückgegeben, möglicherweise zur Hinzufügung zu einem WebRTC-Anruf unter Verwendung von {{domxref("RTCPeerConnection.addTrack()")}}, um den Videotrack aus dem Stream hinzuzufügen.

> [!NOTE]
> Die [Bildschirmfreigabesteuerungen](https://screen-sharing-controls.glitch.me/) Demo bietet eine vollständige Implementierung, die es Ihnen ermöglicht, eine Bildschirmaufnahme mit Ihrer Wahl an `getDisplayMedia()`-Beschränkungen und Optionen zu erstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}: Erfassen von Medien von einer
  Kamera und/oder einem Mikrofon
