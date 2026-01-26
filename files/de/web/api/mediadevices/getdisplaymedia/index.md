---
title: "MediaDevices: getDisplayMedia() Methode"
short-title: getDisplayMedia()
slug: Web/API/MediaDevices/getDisplayMedia
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Screen Capture API")}}{{SecureContext_Header}}

Die **`getDisplayMedia()`** Methode der [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Schnittstelle fordert den Benutzer auf, die Erlaubnis zu erteilen, den Inhalt eines Displays oder eines Teils davon (z. B. ein Fenster) als [`MediaStream`](/de/docs/Web/API/MediaStream) aufzunehmen.

Der resultierende Stream kann dann mit der [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) aufgezeichnet oder als Teil einer [WebRTC](/de/docs/Web/API/WebRTC_API)-Sitzung übertragen werden.

Siehe [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture) für weitere Details und ein Beispiel.

## Syntax

```js-nolint
getDisplayMedia()
getDisplayMedia(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das Anforderungen für den zurückgegebenen [`MediaStream`](/de/docs/Web/API/MediaStream) spezifiziert.
    Die Optionen für `getDisplayMedia()` funktionieren ähnlich wie die [Einschränkungen](/de/docs/Web/API/MediaDevices/getUserMedia#parameters) für die Methode [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), obwohl dort nur `audio` und `video` spezifiziert werden können.
    Die Liste der möglichen Optionen für `getDisplayMedia()` umfasst:
    - `video` {{optional_inline}}
      - : Ein boolescher Wert oder eine Instanz von [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints); der Standardwert ist `true`.
        Wenn diese Option weggelassen oder auf `true` gesetzt wird, enthält der zurückgegebene [`MediaStream`](/de/docs/Web/API/MediaStream) eine Videospur.
        Da `getDisplayMedia()` eine Videospur erfordert, wird der Promise abgelehnt mit einem `TypeError`, wenn diese Option auf `false` gesetzt ist.
    - `audio` {{optional_inline}}
      - : Ein boolescher Wert oder eine Instanz von [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints); der Standardwert ist `false`.
        Ein Wert von `true` bedeutet, dass der zurückgegebene [`MediaStream`](/de/docs/Web/API/MediaStream) eine Audiospur enthält, wenn Audio unterstützt und für die vom Benutzer gewählte Anzeige verfügbar ist.
    - `controller` {{Experimental_Inline}} {{optional_inline}}
      - : Ein [`CaptureController`](/de/docs/Web/API/CaptureController) Objekt, das Methoden enthält, die verwendet werden können, um die Erfassungssitzung weiter zu manipulieren, falls enthalten.
    - `monitorTypeSurfaces` {{Experimental_Inline}} {{optional_inline}}
      - : Ein enumerierter Wert, der spezifiziert, ob der Browser ganze Bildschirme neben Tab- und Fensteroptionen in den Bildschirmfreigabeoptionen anzeigen soll.
        Diese Option soll Unternehmen vor dem Verlust privater Informationen durch Bedienfehler bei der Nutzung von Videokonferenz-Apps schützen.
        Mögliche Werte sind:
        - `include`: Der Browser sollte Bildschirmoptionen einschließen.
        - `exclude`: Bildschirmoptionen sollten ausgeschlossen werden.

        > [!NOTE]
        > Sie können nicht `monitorTypeSurfaces: "exclude"` und gleichzeitig [`displaySurface: "monitor"`](/de/docs/Web/API/MediaTrackConstraints/displaySurface) setzen, da diese Einstellungen widersprüchlich sind. Der Versuch, dies zu tun, führt dazu, dass der `getDisplayMedia()` Aufruf mit einem `TypeError` fehlschlägt.

    - `preferCurrentTab` {{non-standard_inline}} {{Experimental_Inline}} {{optional_inline}}
      - : Ein boolescher Wert; ein Wert von `true` weist den Browser an, den aktuellen Tab als prominenteste Quelle für die Aufzeichnung anzubieten, also als Option "Dieser Tab" in den "Wählen Sie, was Sie teilen möchten"-Optionen, die dem Benutzer präsentiert werden.
        Dies ist nützlich, da viele App-Typen meist nur den aktuellen Tab teilen möchten.
        Zum Beispiel möchte eine Präsentations-App möglicherweise den aktuellen Tab, der die Präsentation enthält, zu einer virtuellen Konferenz streamen.
    - `selfBrowserSurface` {{Experimental_Inline}} {{optional_inline}}
      - : Ein enumerierter Wert, der spezifiziert, ob der Browser dem Benutzer erlauben soll, den aktuellen Tab für die Aufzeichnung auszuwählen.
        Dies hilft, den "endlosen Spiegel" Effekt zu vermeiden, wenn eine Videokonferenz-App versehentlich ihr eigenes Display teilt.
        Mögliche Werte sind:
        - `include`: Der Browser sollte den aktuellen Tab in den Auswahlen einschließen.
        - `exclude`: Der aktuelle Tab sollte von den Auswahlen ausgeschlossen werden.
    - `surfaceSwitching` {{Experimental_Inline}} {{optional_inline}}
      - : Ein enumerierter Wert, der spezifiziert, ob der Browser eine Steuerung anzeigen soll, die es dem Benutzer ermöglicht, während der Bildschirmfreigabe dynamisch den geteilten Tab zu wechseln.
        Dies ist praktischer, als jedes Mal den gesamten Freigabeprozess erneut durchzuführen, wenn ein Benutzer den geteilten Tab wechseln möchte.
        Mögliche Werte sind:
        - `include`: Der Browser sollte die Steuerung einschließen.
        - `exclude`: Die Steuerung sollte nicht angezeigt werden.
    - `systemAudio` {{Experimental_Inline}} {{optional_inline}}
      - : Ein enumerierter Wert, der spezifiziert, ob der Browser das Systemaudio in den möglichen Audioquellen, die dem Benutzer angeboten werden, einschließen soll.
        Mögliche Werte sind:
        - `include`: Der Browser sollte das Systemaudio in der Auswahlliste einschließen.
        - `exclude`: Systemaudio sollte von den gezeigten Auswahlen ausgeschlossen werden.
    - `windowAudio` {{Experimental_Inline}} {{optional_inline}}
      - : Ein enumerierter Wert, der dem Browser einen Hinweis darauf gibt, welche Audiofreigabeoption dem Benutzer zusammen mit Fensterfreigabeoptionen angezeigt werden soll. Mögliche Werte sind:
        - `exclude`: Hinweis, dass Audio nicht freigegeben werden soll, wenn eine Fensterfreigabeoption ausgewählt wird.
        - `window`: Hinweis, dass, wenn eine Fensterfreigabeoption ausgewählt wird, nur Audio, das aus diesem Fenster stammt, freigegeben werden soll.
        - `system`: Hinweis, dass, wenn eine Fensterfreigabeoption ausgewählt wird, das gesamte Systemaudio freigegeben werden soll.

> [!NOTE]
> Für die meisten dieser Optionen ist ein Standardwert nicht durch die Spezifikation vorgegeben. Für einzelne Optionen, bei denen kein Standardwert erwähnt wird, siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browserspezifische Vorgaben.

> [!NOTE]
> Siehe den Artikel [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) für eine detaillierte Erklärung, wie diese Optionen funktionieren.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem [`MediaStream`](/de/docs/Web/API/MediaStream) auflöst, der eine Videospur enthält, deren Inhalt aus einem vom Benutzer ausgewählten Bildschirmbereich stammt, sowie optional eine Audiospur.

> [!NOTE]
> Die Unterstützung für Audiospuren variiert zwischen Browsern, sowohl in Bezug auf die Medienrecorder-Funktionalität als auch auf die unterstützten Audioquellen.
> Überprüfen Sie die [Kompatibilitätstabelle](#browser-kompatibilität) für Einzelheiten zu jedem Browser.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn ein Fehler oder ein Problem auftritt, das nicht mit einer der anderen hier aufgeführten Ausnahmen übereinstimmt.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn der Aufruf von `getDisplayMedia()` nicht aus Code gemacht wurde, der auf eine {{Glossary("transient_activation", "flüchtige Aktivierung")}} zurückgeht, wie z. B. ein Ereignishandler. Oder wenn der Browserkontext nicht vollständig aktiv ist oder nicht im Fokus steht. Oder wenn die `controller` Option bereits zur Erstellung eines anderen [`MediaStream`](/de/docs/Web/API/MediaStream) verwendet wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn die Berechtigung zum Zugriff auf einen Bildschirmbereich vom Benutzer verweigert wurde oder die aktuelle Browsersitzung keinen Zugriff auf Bildschirmfreigabe hat (zum Beispiel durch eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)).
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn keine Quellen für Bildschirmvideo zur Aufnahme verfügbar sind.
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn der Benutzer einen Bildschirm, ein Fenster, einen Tab oder eine andere Quelle für Bildschirmdaten ausgewählt hat und eine Hardware- oder Betriebssystemebene einen Fehler oder eine Sperrung aufgetreten ist, die die Freigabe der ausgewählten Quelle verhindert.
- `OverconstrainedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn das Anwenden der angegebenen Einschränkungen nach der Erstellung des Streams fehlschlägt, weil kein kompatibler Stream generiert werden konnte.
- {{jsxref("TypeError")}}
  - : Wird geworfen, wenn die angegebenen `options` Werte enthalten, die bei der Aufruf von `getDisplayMedia()` nicht erlaubt sind, zum Beispiel eine `video`-Eigenschaft, die auf false gesetzt ist, oder wenn angegebene [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) nicht erlaubt sind.
    `min` und `exact` Werte sind in den in `getDisplayMedia()`-Aufrufen verwendeten Einschränkungen nicht erlaubt.

## Sicherheit

Da `getDisplayMedia()` in böswilliger Weise genutzt werden könnte, kann sie eine Quelle erheblicher Datenschutz- und Sicherheitsbedenken sein.
Aus diesem Grund beschreibt die Spezifikation Maßnahmen, die Browser befolgen müssen, um `getDisplayMedia()` vollständig zu unterstützen.

- Die angegebenen Optionen können nicht verwendet werden, um die dem Benutzer verfügbaren Auswahlen einzuschränken.
  Stattdessen müssen sie angewendet werden, nachdem der Benutzer eine Quelle ausgewählt hat, um eine Ausgabe zu erzeugen, die den Optionen entspricht.
- Die Erlaubnis zur Nutzung von `getDisplayMedia()` kann nicht für die Wiederverwendung beibehalten werden.
  Der Benutzer muss bei jedem Aufruf um Erlaubnis gebeten werden.
- [Flüchtige Nutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich.
  Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.
- Browser werden ermutigt, den Nutzern eine Warnung über die Freigabe von Anzeigen- oder Fensterinhalten zu geben, in denen Browser enthalten sind, und darauf zu achten, welche anderen Inhalte möglicherweise erfasst und anderen Nutzern angezeigt werden.

## Beispiele

Im folgenden Beispiel wird eine `startCapture()` Methode erstellt, die die Bildschirmaufnahme mit einem Satz von in den `displayMediaOptions` Parametern spezifizierten Optionen einleitet.

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

Dies verwendet {{jsxref("Operators/await", "await")}}, um asynchron darauf zu warten, dass `getDisplayMedia()` mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) auflöst, der das angeforderte Display-Inhalte gemäß den spezifizierten Optionen enthält.
Der Stream wird dann dem Aufrufer zur Verwendung zurückgegeben, möglicherweise zur Hinzufügung zu einem WebRTC-Anruf mithilfe von [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack), um die Videospur des Streams hinzuzufügen.

> [!NOTE]
> Die [Screen sharing controls](https://chrome.dev/screen-sharing-controls/) Demo bietet eine vollständige Implementierung, die Ihnen ermöglicht, eine Bildschirmaufnahme mit Ihrer Wahl von `getDisplayMedia()`-Einschränkungen und -Optionen zu erstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia): Medienaufnahme von
  Kamera und/oder Mikrofon
