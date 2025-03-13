---
title: "MediaDevices: getDisplayMedia()-Methode"
short-title: getDisplayMedia()
slug: Web/API/MediaDevices/getDisplayMedia
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Screen Capture API")}}{{SecureContext_Header}}

Die **`getDisplayMedia()`**-Methode der [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Schnittstelle fordert den Benutzer auf, die Erlaubnis zu erteilen, um den Inhalt eines Bildschirms oder eines Teils davon (wie z. B. ein Fenster) als [`MediaStream`](/de/docs/Web/API/MediaStream) zu erfassen.

Der resultierende Stream kann dann mit der [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) aufgenommen oder als Teil einer [WebRTC](/de/docs/Web/API/WebRTC_API)-Sitzung übertragen werden.

Für weitere Details und ein Beispiel siehe [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture).

## Syntax

```js-nolint
getDisplayMedia()
getDisplayMedia(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein optionales Objekt, das Anforderungen für den zurückgegebenen [`MediaStream`](/de/docs/Web/API/MediaStream) angibt. Die Optionen für `getDisplayMedia()` funktionieren auf die gleiche Weise wie die [Einschränkungen](/de/docs/Web/API/MediaDevices/getUserMedia#parameters) für die [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)-Methode, obwohl in diesem Fall nur `audio` und `video` angegeben werden können. Die Liste der möglichen Optionseigenschaften für `getDisplayMedia()` lautet wie folgt:

    - `video` {{optional_inline}}
      - : Ein Boolean oder eine [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Instanz; der Standardwert ist `true`. Wenn diese Option weggelassen oder auf `true` gesetzt wird, enthält der Stream einen Videotrack. Ein Wert von `true` gibt an, dass der zurückgegebene [`MediaStream`](/de/docs/Web/API/MediaStream) einen Videotrack enthalten wird. Da `getDisplayMedia()` einen Videotrack erfordert, wird das Versprechen abgelehnt, wenn diese Option auf `false` gesetzt ist, mit einem `TypeError`.
    - `audio` {{optional_inline}}
      - : Ein Boolean oder eine [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Instanz; der Standardwert ist `false`. Ein Wert von `true` gibt an, dass der zurückgegebene [`MediaStream`](/de/docs/Web/API/MediaStream) einen Audiotrack enthalten wird, wenn Audio für die vom Benutzer gewählte Anzeigefläche unterstützt und verfügbar ist.
    - `controller` {{Experimental_Inline}} {{optional_inline}}
      - : Eine [`CaptureController`](/de/docs/Web/API/CaptureController)-Objektinstanz, die Methoden enthält, die verwendet werden können, um die Aufnahmesitzung weiter zu manipulieren, wenn sie enthalten ist.
    - `monitorTypeSurfaces` {{Experimental_Inline}} {{optional_inline}}

      - : Ein Aufzählungswert, der angibt, ob der Browser ganze Bildschirme in den dem Benutzer präsentierten Bildschirmaufnahmeoptionen neben den Tab- und Fensteroptionen anbieten soll. Diese Option soll Unternehmen davor schützen, dass private Informationen durch Mitarbeiterfehler bei der Verwendung von Videoanwendungen durchsickern. Mögliche Werte sind `include`, was darauf hinweist, dass der Browser Bildschirmoptionen einschließen soll, und `exclude`, was darauf hinweist, dass sie ausgeschlossen werden sollen. Ein Standardwert ist in der Spezifikation nicht festgelegt; siehe den Abschnitt [Browser-Kompatibilität](#browser_kompatibilität) für browser-spezifische Standards.

        > [!NOTE]
        > Sie können nicht gleichzeitig `monitorTypeSurfaces: "exclude"` und [`displaySurface: "monitor"`](/de/docs/Web/API/MediaTrackConstraints/displaySurface) festlegen, da die beiden Einstellungen widersprüchlich sind. Wenn Sie dies versuchen, schlägt der Aufruf von `getDisplayMedia()` mit einem `TypeError` fehl.

    - `preferCurrentTab` {{non-standard_inline}} {{Experimental_Inline}} {{optional_inline}}
      - : Ein Boolean; ein Wert von `true` weist den Browser an, den aktuellen Tab als die am prominentesten zu erfassende Quelle anzubieten, d. h. als eine separate Option "Dieser Tab" in den dem Benutzer präsentierten Optionen "Was möchten Sie teilen". Dies ist nützlich, da viele Anwendungstypen im Allgemeinen nur den aktuellen Tab teilen möchten. Ein Folienpräsentations-App könnte beispielsweise dem Benutzer ermöglichen, den aktuellen Tab mit der Präsentation in eine virtuelle Konferenz zu streamen. Ein Standardwert ist in der Spezifikation nicht festgelegt; siehe den Abschnitt [Browser-Kompatibilität](#browser_kompatibilität) für browser-spezifische Standards.
    - `selfBrowserSurface` {{Experimental_Inline}} {{optional_inline}}
      - : Ein Aufzählungswert, der angibt, ob der Browser dem Benutzer erlauben soll, den aktuellen Tab für die Erfassung auszuwählen. Dies hilft, den Effekt des "unendlichen Spiegelsaals" zu vermeiden, der auftritt, wenn eine Videokonferenz-App unbeabsichtigt ihre eigene Anzeige teilt. Mögliche Werte sind `include`, was darauf hinweist, dass der Browser den aktuellen Tab in den zur Erfassung angebotenen Auswahlmöglichkeiten einschließen soll, und `exclude`, was darauf hinweist, dass er ausgeschlossen werden soll. Ein Standardwert ist in der Spezifikation nicht festgelegt; siehe den Abschnitt [Browser-Kompatibilität](#browser_kompatibilität) für browser-spezifische Standards.
    - `surfaceSwitching` {{Experimental_Inline}} {{optional_inline}}
      - : Ein Aufzählungswert, der angibt, ob der Browser eine Steuerung anzeigen soll, die es dem Benutzer ermöglicht, den geteilten Tab während des Screen-Sharings dynamisch zu wechseln. Dies ist viel praktischer, als den gesamten Freigabeprozess jedes Mal erneut durchgehen zu müssen, wenn ein Benutzer den geteilten Tab wechseln möchte. Mögliche Werte sind `include`, was darauf hinweist, dass der Browser die Steuerung einschließen soll, und `exclude`, was darauf hinweist, dass sie nicht gezeigt werden soll. Ein Standardwert ist in der Spezifikation nicht festgelegt; siehe den Abschnitt [Browser-Kompatibilität](#browser_kompatibilität) für browser-spezifische Standards.
    - `systemAudio` {{Experimental_Inline}} {{optional_inline}}
      - : Ein Aufzählungswert, der angibt, ob der Browser das Systemaudio zu den dem Benutzer angebotenen möglichen Audioquellen hinzufügen soll. Mögliche Werte sind `include`, was darauf hinweist, dass der Browser das Systemaudio in die Liste der Auswahlmöglichkeiten aufnehmen soll, und `exclude`, was darauf hinweist, dass es ausgeschlossen werden soll. Ein Standardwert ist in der Spezifikation nicht festgelegt; siehe den Abschnitt [Browser-Kompatibilität](#browser_kompatibilität) für browser-spezifische Standards.

> [!NOTE]
> Lesen Sie den Artikel [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) für weitere Details darüber, wie diese Optionen funktionieren.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf einen [`MediaStream`](/de/docs/Web/API/MediaStream) auflöst, der einen
Video-Track enthält, dessen Inhalt aus einem vom Benutzer ausgewählten Bildschirmbereich stammt, sowie einen optionalen
Audio-Track.

> [!NOTE]
> Die Unterstützung von Audio-Tracks durch Browser variiert, sowohl in Bezug darauf, ob sie überhaupt vom Media Recorder unterstützt werden, als auch was die unterstützten Audioquellen betrifft. Überprüfen Sie die [Kompatibilitätstabelle](#browser_kompatibilität) für Details für jeden Browser.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Fehler oder Fehlversagen keiner der anderen hier aufgeführten Ausnahmen entspricht.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf von `getDisplayMedia()` nicht durch Code ausgelöst wurde, der aufgrund einer {{Glossary("transient_activation", "vorübergehenden Aktivierung")}} ausgeführt wird, wie z. B. ein Event-Handler. Oder wenn der Browser-Kontext nicht vollständig aktiv oder nicht fokussiert ist. Oder wenn die `controller`-Option bereits zur Erstellung eines anderen [`MediaStream`](/de/docs/Web/API/MediaStream) verwendet wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Erlaubnis zum Zugriff auf einen Bildschirmbereich vom Benutzer verweigert wurde oder die aktuelle Browsing-Instanz keinen Zugriff auf Bildschirmfreigabe hat (zum Beispiel durch eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)).
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn keine Quellen für Bildschirmvideo zur Erfassung verfügbar sind.
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzer einen Bildschirm, ein Fenster, einen Tab oder eine andere Quelle von Bildschirmdaten ausgewählt hat, aber ein Hardware- oder Betriebssystemfehler oder eine Sperre auftrat, die das Teilen der ausgewählten Quelle verhindert.
- `OverconstrainedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn nach der Erstellung des Streams das Anwenden festgelegter Einschränkungen fehlschlägt, weil kein kompatibler Stream generiert werden konnte.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die angegebenen `options` Werte enthalten, die bei der Aufrufung von `getDisplayMedia()` nicht zulässig sind, beispielsweise eine `video`-Eigenschaft, die auf false gesetzt ist, oder wenn angegebene [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) nicht erlaubt sind. `min` und `exact` Werte sind in Einschränkungen, die in `getDisplayMedia()`-Aufrufen verwendet werden, nicht erlaubt.

## Sicherheit

Da `getDisplayMedia()` auf böswillige Weise verwendet werden könnte, kann es eine
Quelle erheblicher Datenschutz- und Sicherheitsbedenken sein. Aus diesem Grund legt die Spezifikation
Maßnahmen fest, die Browser ergreifen müssen, um `getDisplayMedia()` vollständig zu unterstützen.

- Die angegebenen Optionen können nicht verwendet werden, um die dem Benutzer
  vorhandenen Auswahlmöglichkeiten zu begrenzen. Stattdessen müssen sie angewendet werden, nachdem der Benutzer eine Quelle gewählt hat, um
  Ausgaben zu erzeugen, die zu den Optionen passen.
- Die Erlaubnis zur Nutzung von `getDisplayMedia()` kann nicht für eine zukünftige Verwendung gespeichert
  werden. Der Benutzer muss jedes Mal um Erlaubnis gefragt werden.
- [Vorübergehende Benutzerinteraktion](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.
- Browser werden ermutigt, dem Benutzer eine Warnung über das Teilen von Bildschirmen oder
  Fenstern, die Browser enthalten, anzuzeigen, und genau darauf zu achten, welche anderen Inhalte eventuell
  erfasst und an andere Benutzer gezeigt werden.

## Beispiele

Im untenstehenden Beispiel wird eine `startCapture()`-Methode erstellt, die die
Bildschirmaufnahme mit einem Satz von Optionen startet, die durch den `displayMediaOptions`-
Parameter angegeben sind.

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

Dies verwendet {{jsxref("Operators/await", "await")}}, um asynchron auf die Auflösung von `getDisplayMedia()`
mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) zu warten, der den angeforderten Anzeigebereichsinhalt entsprechend den angegebenen Optionen enthält. Der Stream wird dann zum Anrufer zurückgegeben
zur Verwendung, beispielsweise zum Hinzufügen zu einem WebRTC-Anruf mithilfe von [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack), um den Videotrack aus dem Stream hinzuzufügen.

> [!NOTE]
> Die [Bildschirmfreigabesteuerungen](https://screen-sharing-controls.glitch.me/)-Demo bietet eine vollständige Implementierung, die es Ihnen ermöglicht, eine Bildschirmaufnahme mit Ihrer Wahl von `getDisplayMedia()`-Einschränkungen und -Optionen zu erstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia): Erfassen von Medien von einer
  Kamera und/oder einem Mikrofon
