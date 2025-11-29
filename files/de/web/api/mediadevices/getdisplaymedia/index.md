---
title: "MediaDevices: getDisplayMedia() Methode"
short-title: getDisplayMedia()
slug: Web/API/MediaDevices/getDisplayMedia
l10n:
  sourceCommit: 6e7d87ba6900d51c348756a8d027ae920fa152c5
---

{{APIRef("Screen Capture API")}}{{SecureContext_Header}}

Die **`getDisplayMedia()`** Methode des [`MediaDevices`](/de/docs/Web/API/MediaDevices) Interfaces fordert den Benutzer auf, die Erlaubnis zu erteilen, den Inhalt eines Bildschirms oder eines Teils davon (wie ein Fenster) als [`MediaStream`](/de/docs/Web/API/MediaStream) zu erfassen.

Der daraus resultierende Stream kann dann mit der [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) aufgezeichnet oder als Teil einer [WebRTC](/de/docs/Web/API/WebRTC_API) Sitzung übertragen werden.

Siehe [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture) für weitere Details und ein Beispiel.

## Syntax

```js-nolint
getDisplayMedia()
getDisplayMedia(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das Anforderungen für den zurückgegebenen [`MediaStream`](/de/docs/Web/API/MediaStream) spezifiziert. Die Optionen für `getDisplayMedia()` funktionieren ähnlich wie die [Einschränkungen](/de/docs/Web/API/MediaDevices/getUserMedia#parameters) für die [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) Methode, obwohl in diesem Fall nur `audio` und `video` angegeben werden können. Die Liste der möglichen Optionseigenschaften für `getDisplayMedia()` ist wie folgt:
    - `video` {{optional_inline}}
      - : Ein boolescher Wert oder eine [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) Instanz; der Standardwert ist `true`. Wenn diese Option weggelassen oder auf `true` gesetzt wird, enthält der zurückgegebene [`MediaStream`](/de/docs/Web/API/MediaStream) einen Video-Track. Da `getDisplayMedia()` einen Video-Track erfordert, wird das Versprechen abgelehnt, wenn diese Option auf `false` gesetzt ist, mit einem `TypeError`.
    - `audio` {{optional_inline}}
      - : Ein boolescher Wert oder eine [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) Instanz; der Standardwert ist `false`. Ein Wert von `true` gibt an, dass der zurückgegebene [`MediaStream`](/de/docs/Web/API/MediaStream) einen Audio-Track enthält, falls Audio unterstützt und für die vom Benutzer ausgewählte Anzeigeoberfläche verfügbar ist.
    - `controller` {{Experimental_Inline}} {{optional_inline}}
      - : Eine [`CaptureController`](/de/docs/Web/API/CaptureController) Objektinstanz, die Methoden enthält, die zur weiteren Manipulation der Aufnahmesitzung verwendet werden können, falls eingeschlossen.
    - `monitorTypeSurfaces` {{Experimental_Inline}} {{optional_inline}}
      - : Ein aufgezählter Wert, der angibt, ob der Browser gesamte Bildschirme in den dem Benutzer angebotenen Bildschirmaufnahmeoptionen zusammen mit Tab- und Fensteroptionen anbieten sollte. Diese Option soll Unternehmen davor schützen, dass private Informationen durch Benutzerfehler bei der Verwendung von Videokonferenz-Apps durchsickern. Mögliche Werte sind:
        - `include`: Hinweis, dass der Browser Bildschirmoptionen einschließen sollte.
        - `exclude`: Hinweis, dass Bildschirmoptionen ausgeschlossen werden sollten.

        > [!NOTE]
        > Sie können `monitorTypeSurfaces: "exclude"` nicht gleichzeitig mit [`displaySurface: "monitor"`](/de/docs/Web/API/MediaTrackConstraints/displaySurface) festlegen, da die beiden Einstellungen widersprüchlich sind. Der Versuch, dies zu tun, führt dazu, dass der `getDisplayMedia()` Aufruf mit einem `TypeError` fehlschlägt.

    - `preferCurrentTab` {{non-standard_inline}} {{Experimental_Inline}} {{optional_inline}}
      - : Ein boolescher Wert; ein Wert von `true` weist den Browser an, den aktuellen Tab als die hervorgehobene Aufnahmequelle anzubieten, das heißt, als separate "Dieser Tab" Option in den dem Benutzer angebotenen "Teilen, was Sie teilen möchten" Optionen. Dies ist nützlich, da viele App-Typen im Allgemeinen nur den aktuellen Tab teilen möchten. Beispielsweise könnte eine Präsentations-App dem Benutzer erlauben, den aktuellen Tab mit der Präsentation zu einem virtuellen Konferenz zu streamen.
    - `selfBrowserSurface` {{Experimental_Inline}} {{optional_inline}}
      - : Ein aufgezählter Wert, der angibt, ob der Browser dem Benutzer erlauben sollte, den aktuellen Tab zur Aufnahme auszuwählen. Dies hilft, den "unendlichen Spiegelkabinett"-Effekt zu vermeiden, der auftritt, wenn eine Videokonferenz-App versehentlich ihr eigenes Display teilt. Mögliche Werte sind:
        - `include`: Hinweis, dass der Browser den aktuellen Tab in die angebotenen Auswahlmöglichkeiten für die Aufnahme einschließen sollte.
        - `exclude`: Hinweis, dass der aktuelle Tab von den Auswahlmöglichkeiten ausgeschlossen werden sollte.
    - `surfaceSwitching` {{Experimental_Inline}} {{optional_inline}}
      - : Ein aufgezählter Wert, der angibt, ob der Browser eine Steuerung anzeigen sollte, um dem Benutzer zu ermöglichen, während der Bildschirmübertragung dynamisch den geteilten Tab zu wechseln. Dies ist bequemer, als jedes Mal, wenn ein Benutzer den geteilten Tab wechseln will, den gesamten Freigabeprozess erneut durchlaufen zu müssen. Mögliche Werte sind:
        - `include`: Hinweis, dass der Browser die Steuerung einschließen sollte.
        - `exclude`: Hinweis, dass die Steuerung nicht angezeigt werden sollte.
    - `systemAudio` {{Experimental_Inline}} {{optional_inline}}
      - : Ein aufgezählter Wert, der angibt, ob der Browser das Systemaudio unter den dem Benutzer angebotenen möglichen Audioquellen einschließen sollte. Mögliche Werte sind:
        - `include`: Hinweis, dass der Browser das Systemaudio in die Auswahlmöglichkeiten einschließen sollte.
        - `exclude`: Hinweis, dass das Systemaudio von den angezeigten Auswahlmöglichkeiten ausgeschlossen werden sollte.
    - `windowAudio` {{Experimental_Inline}} {{optional_inline}}
      - : Ein aufgezählter Wert, der dem Browser Hinweise gibt, welche Audiofreigabeoption der Benutzer neben Fensterfreigabeoptionen präsentiert werden sollte. Mögliche Werte sind:
        - `exclude`: Hinweis, dass Audio nicht freigegeben werden sollte, wenn eine Fensterfreigabeoption gewählt wird.
        - `window`: Hinweis, dass beim Auswählen einer Fensterfreigabeoption nur Audio, das von diesem Fenster stammt, freigegeben werden sollte.
        - `system`: Hinweis, dass beim Auswählen einer Fensterfreigabeoption das gesamte Systemaudio freigegeben werden sollte.

> [!NOTE]
> Für die meisten dieser Optionen ist kein Standardwert durch die Spezifikation vorgeschrieben. Für alleinstehende Optionen ohne erwähnten Standardwert, siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browserspezifische Standardwerte.

> [!NOTE]
> Siehe den Artikel [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) für viel mehr Details darüber, wie diese Optionen arbeiten.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem [`MediaStream`](/de/docs/Web/API/MediaStream) auflöst, der einen Videotrack enthält, dessen Inhalte aus einem vom Benutzer ausgewählten Bildschirmbereich stammen, sowie ein optionaler Audiotrack.

> [!NOTE]
> Die Unterstützung von Audiotracks in Browsern variiert, sowohl hinsichtlich der Frage, ob sie überhaupt vom Media Recorder unterstützt werden, als auch hinsichtlich der unterstützten Audioquellen. Überprüfen Sie die [Kompatibilitätstabelle](#browser-kompatibilität) für Details zu jedem Browser.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Fehler oder Ausfall auftritt, der keiner der hier aufgeführten Ausnahmen entspricht.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf von `getDisplayMedia()` nicht von Code ausgeführt wird, der aufgrund einer {{Glossary("transient_activation", "flüchtigen Aktivierung")}}, z. B. einem Ereignishandler, ausgeführt wird. Oder wenn der Browserkontext nicht vollständig aktiv oder nicht fokussiert ist. Oder wenn die `controller` Optionen bereits bei der Erstellung eines anderen [`MediaStream`](/de/docs/Web/API/MediaStream) verwendet wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Erlaubnis zum Zugreifen auf einen Bildschirmbereich vom Benutzer verweigert wurde oder die aktuelle Browsing-Instanz nicht für den Zugriff auf Bildschirmfreigabe berechtigt ist (zum Beispiel durch eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)).
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn keine Quellen für Bildschirmvideo zur Aufnahme verfügbar sind.
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzer einen Bildschirm, ein Fenster, einen Tab oder eine andere Quelle für Bildschirmdaten ausgewählt hat, aber ein Hardware- oder Betriebssystem-Ebene-Fehler oder eine Sperrung aufgetreten ist, die das Teilen der ausgewählten Quelle verhindert.
- `OverconstrainedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn nach der Erstellung des Streams das Anwenden von angegebenen Einschränkungen fehlschlägt, da kein kompatibler Stream generiert werden konnte.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die angegebenen `options` Werte enthalten, die beim Aufruf von `getDisplayMedia()` nicht erlaubt sind, z. B. eine `video` Eigenschaft, die auf false gesetzt ist, oder wenn angegebene [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) nicht erlaubt sind. `min`- und `exact`-Werte sind in Einschränkungen, die in `getDisplayMedia()`-Aufrufen verwendet werden, nicht erlaubt.

## Sicherheit

Da `getDisplayMedia()` auf bösartige Weise verwendet werden könnte, kann es eine Quelle signifikanter Datenschutz- und Sicherheitsbedenken sein. Aus diesem Grund legt die Spezifikation Maßnahmen fest, die Browser ergreifen müssen, um `getDisplayMedia()` vollständig zu unterstützen.

- Die angegebenen Optionen können nicht verwendet werden, um die dem Benutzer zur Verfügung stehenden Auswahlmöglichkeiten einzuschränken. Stattdessen müssen sie angewandt werden, nachdem der Benutzer eine Quelle gewählt hat, um eine Ausgabe zu generieren, die den Optionen entspricht.
- Die Erlaubnis, `getDisplayMedia()` zu verwenden, kann nicht für eine spätere Verwendung gespeichert werden. Der Benutzer muss jedes Mal um Erlaubnis gebeten werden.
- [Flüchtige Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.
- Browser werden dazu ermutigt, Benutzer zu warnen, wenn Sie Bildschirme oder Fenster teilen, die Browser enthalten, und genau darauf zu achten, welche anderen Inhalte möglicherweise erfasst und anderen Benutzern angezeigt werden könnten.

## Beispiele

Im folgenden Beispiel wird eine Methode `startCapture()` erstellt, die eine Bildschirmaufnahme mit einer Reihe von durch den Parameter `displayMediaOptions` spezifizierten Optionen startet.

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

Dies verwendet {{jsxref("Operators/await", "await")}}, um asynchron auf die Auflösung von `getDisplayMedia()` mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) zu warten, der die angeforderten Display-Inhalte gemäß den angegebenen Optionen enthält. Der Stream wird dann an den Aufrufer zur Verwendung zurückgegeben, möglicherweise um ihn zu einem WebRTC-Anruf hinzuzufügen, indem [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) verwendet wird, um den Videotrack aus dem Stream hinzuzufügen.

> [!NOTE]
> Die [Bildschirmfreigabe-Steuerelemente](https://chrome.dev/screen-sharing-controls/) Demo bietet eine vollständige Implementierung, die es Ihnen erlaubt, eine Bildschirmaufnahme mit Ihrer Wahl von `getDisplayMedia()`-Einschränkungen und Optionen zu erstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia): Erfassen von Medien von einer Kamera und/oder einem Mikrofon
