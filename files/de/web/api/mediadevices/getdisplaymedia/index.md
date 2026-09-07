---
title: "MediaDevices: getDisplayMedia() Methode"
short-title: getDisplayMedia()
slug: Web/API/MediaDevices/getDisplayMedia
l10n:
  sourceCommit: 8a13259a44523cd17b4fe347088b62c6d7a35265
---

{{APIRef("Screen Capture API")}}{{SecureContext_Header}}

Die **`getDisplayMedia()`**-Methode des [`MediaDevices`](/de/docs/Web/API/MediaDevices) Interfaces fordert den Benutzer auf, auszuwählen und die Erlaubnis zu erteilen, die Inhalte eines Bildschirms oder eines Teils davon (wie ein Fenster) als [`MediaStream`](/de/docs/Web/API/MediaStream) zu erfassen.

Der resultierende Stream kann dann mithilfe der [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) aufgezeichnet oder als Teil einer [WebRTC](/de/docs/Web/API/WebRTC_API) Sitzung übertragen werden.

Weitere Details und ein Beispiel finden Sie unter [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture).

## Syntax

```js-nolint
getDisplayMedia()
getDisplayMedia(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das Anforderungen für den zurückgegebenen [`MediaStream`](/de/docs/Web/API/MediaStream) spezifiziert.
    Die Optionen für `getDisplayMedia()` funktionieren genauso wie die [constraints](/de/docs/Web/API/MediaDevices/getUserMedia#parameters) für die [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)-Methode, obwohl in diesem Fall nur `audio` und `video` angegeben werden können.
    Die Liste der möglichen Options-Eigenschaften für `getDisplayMedia()` lautet wie folgt:
    - `video` {{optional_inline}}
      - : Ein boolean oder eine [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) Instanz; der Standardwert ist `true`.
        Wenn diese Option weggelassen oder auf `true` gesetzt wird, enthält der zurückgegebene [`MediaStream`](/de/docs/Web/API/MediaStream) einen Videotrack.
        Da `getDisplayMedia()` einen Videotrack erfordert, wird die Promise abgelehnt, wenn diese Option auf `false` gesetzt wird, und zwar mit einem `TypeError`.
    - `audio` {{optional_inline}}
      - : Ein boolean oder eine [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) Instanz; der Standardwert ist `false`.
        Ein Wert von `true` gibt an, dass der zurückgegebene [`MediaStream`](/de/docs/Web/API/MediaStream) einen Audiotrack enthalten wird, wenn Audio für die vom Benutzer gewählte Display-Fläche unterstützt und verfügbar ist.
    - `controller` {{Experimental_Inline}} {{optional_inline}}
      - : Ein [`CaptureController`](/de/docs/Web/API/CaptureController)-Objekt, das Methoden enthält, die verwendet werden können, um die Aufnahmesitzung weiter zu manipulieren, falls enthalten.
    - `monitorTypeSurfaces` {{Experimental_Inline}} {{optional_inline}}
      - : Ein enumerierter Wert, der spezifiziert, ob der Browser gesamte Bildschirme in den für den Benutzer präsentierten Bildschirmerfassungsoptionen anbieten sollte, neben Tab- und Fensteroptionen.
        Diese Option soll Unternehmen davor schützen, dass private Informationen durch Benutzerfehler in Videokonferenz-Apps durchgesickert werden.
        Mögliche Werte sind:
        - `include`: Weißt darauf hin, dass der Browser Bildschirmoptionen einschließen sollte.
        - `exclude`: Weißt darauf hin, dass Bildschirmoptionen ausgeschlossen werden sollten.

        > [!NOTE]
        > Sie können `monitorTypeSurfaces: "exclude"` nicht gleichzeitig mit [`displaySurface: "monitor"`](/de/docs/Web/API/MediaTrackConstraints/displaySurface) setzen, da die beiden Einstellungen widersprüchlich sind.
        > Der Versuch, dies zu tun, führt dazu, dass der `getDisplayMedia()`-Aufruf mit einem `TypeError` fehlschlägt.

    - `preferCurrentTab` {{non-standard_inline}} {{Experimental_Inline}} {{optional_inline}}
      - : Ein boolean; ein Wert von `true` weist den Browser an, den aktuellen Tab als die hervorstechendste Aufzeichnungsquelle anzubieten, das heißt als separate "Dieser Tab"-Option in den dem Benutzer präsentierten "Wählen Sie, was Sie teilen möchten"-Optionen.
        Dies ist nützlich, da viele App-Typen im Allgemeinen nur den aktuellen Tab teilen möchten.
        Zum Beispiel könnte eine Präsentations-App dem Benutzer die Möglichkeit geben, den aktuellen Tab, der die Präsentation enthält, zu einem virtuellen Konferenz zu streamen.
    - `selfBrowserSurface` {{Experimental_Inline}} {{optional_inline}}
      - : Ein enumerierter Wert, der spezifiziert, ob der Browser dem Benutzer erlauben sollte, den aktuellen Tab zur Erfassung auszuwählen.
        Dies hilft, den "endlosen Spiegel"-Effekt zu vermeiden, der auftritt, wenn eine Videokonferenz-App versehentlich ihr eigenes Display teilt.
        Mögliche Werte sind:
        - `include`: Weißt darauf hin, dass der Browser den aktuellen Tab in den Auswahlmöglichkeiten für die Aufnahme einschließen sollte.
        - `exclude`: Weißt darauf hin, dass der aktuelle Tab von den Auswahlmöglichkeiten ausgeschlossen werden sollte.
    - `surfaceSwitching` {{Experimental_Inline}} {{optional_inline}}
      - : Ein enumerierter Wert, der spezifiziert, ob der Browser eine Kontrolle anzeigen sollte, um dem Benutzer zu ermöglichen, während der Bildschirmfreigabe dynamisch den freigegebenen Tab zu wechseln.
        Dies ist bequemer, als jedes Mal den gesamten Freigabeprozess erneut durchlaufen zu müssen, wenn ein Benutzer den freigegebenen Tab wechseln möchte.
        Mögliche Werte sind:
        - `include`: Weißt darauf hin, dass der Browser die Kontrolle einschließen sollte.
        - `exclude`: Weißt darauf hin, dass die Kontrolle nicht angezeigt werden sollte.
    - `systemAudio` {{Experimental_Inline}} {{optional_inline}}
      - : Ein enumerierter Wert, der darauf hinweist, ob der Browser Audio des Systems unter den möglichen, dem Benutzer angebotenen Audioquellen einschließen sollte, wenn ein Monitor geteilt wird.
        Mögliche Werte sind:
        - `include`: Weißt darauf hin, dass der Browser das Systemaudio in die Liste der Auswahlmöglichkeiten einschließen sollte.
        - `exclude`: Weißt darauf hin, dass das Systemaudio aus den angezeigten Auswahlmöglichkeiten ausgeschlossen werden sollte.

        Browser können diesen Hinweis ignorieren und bestimmen, welche Audioquellen angeboten werden, manchmal basierend auf Betriebssystembeschränkungen.
        Aus diesem Grund könnte der zurückgegebene Stream keinen Audiotrack enthalten, selbst wenn `audio` `true` ist und `systemAudio` `include`.
        In Chrome ([Dokumentation](https://developer.chrome.com/docs/web-platform/screen-sharing-controls#systemAudio)) garantiert `systemAudio: "include"` nicht, dass Systemaudio verfügbar sein wird, aber `systemAudio: "exclude"` verhindert, dass Systemaudio angeboten wird, wenn ein Bildschirm geteilt wird (Audio aus einem geteilten Browsertab oder Fenster kann jedoch weiterhin verfügbar sein).
    - `windowAudio` {{Experimental_Inline}} {{optional_inline}}
      - : Ein enumerierter Wert, der den Browser darauf hinweist, welche Audiofreigabeoption dem Benutzer zusammen mit Fensterfreigabeoptionen präsentiert werden sollte. Mögliche Werte sind:
        - `exclude`: Weißt darauf hin, dass Audio nicht teilbar sein sollte, wenn eine Fensterfreigabeoption gewählt wird.
        - `window`: Weißt darauf hin, dass, wenn eine Fensterfreigabeoption gewählt wird, nur Audio aus diesem Fenster geteilt werden sollte.
        - `system`: Weißt darauf hin, dass, wenn eine Fensterfreigabeoption gewählt wird, das gesamte Systemaudio geteilt werden sollte.

> [!NOTE]
> Für die meisten dieser Optionen ist ein Standardwert nicht durch die Spezifikation vorgeschrieben. Für eigenständige Optionen, bei denen kein Standard erwähnt wird, siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browserspezifische Standards.

> [!NOTE]
> Siehe den Artikel [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) für wesentlich mehr Details darüber, wie diese Optionen funktionieren.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf einen [`MediaStream`](/de/docs/Web/API/MediaStream) aufgelöst wird, der einen Videotrack enthält, dessen Inhalte aus einem vom Benutzer ausgewählten Bildschirmbereich stammen, sowie einen optionalen Audiotrack.

> [!NOTE]
> Die Browserunterstützung für Audiotracks variiert, sowohl in Bezug darauf, ob sie überhaupt vom Medienrekorder unterstützt werden, als auch in Bezug auf die unterstützten Audioquellen.
> Überprüfen Sie die [Kompatibilitätstabelle](#browser-kompatibilität) für Details zu jedem Browser.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Fehler oder Fehler keinem der hier aufgeführten anderen Ausnahmen entspricht.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf von `getDisplayMedia()` nicht aus Code vorgenommen wurde, der aufgrund einer {{Glossary("transient_activation", "vorübergehenden Aktivierung")}} ausgeführt wird, wie einem Ereignishandler.
    Oder wenn der Browserkontext nicht vollständig aktiv ist oder nicht fokussiert ist.
    Oder wenn die `controller`-Option bereits zur Erstellung eines anderen [`MediaStream`](/de/docs/Web/API/MediaStream) verwendet wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Erlaubnis zum Zugriff auf einen Bildschirmbereich vom Benutzer verweigert wurde oder die aktuelle Browserinstanz keinen Zugriff auf Bildschirmfreigabe hat (zum Beispiel durch eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)).
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn keine Quellen für Bildschirmvideo zur Erfassung verfügbar sind.
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzer einen Bildschirm, ein Fenster, einen Tab oder eine andere Quelle von Bildschirmdaten ausgewählt hat, aber ein Hardware- oder Betriebssystemfehler oder -ausschluss aufgetreten ist, der das Teilen der ausgewählten Quelle verhindert.
- `OverconstrainedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn nach dem Erstellen des Streams die Anwendung der angegebenen Einschränkungen fehlschlägt, da kein kompatibler Stream erstellt werden konnte.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die angegebenen `options` Werte enthalten, die bei einem Aufruf von `getDisplayMedia()` nicht erlaubt sind, zum Beispiel eine auf false gesetzte `video`-Eigenschaft oder wenn angegebene [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) nicht erlaubt sind.
    `min` und `exact` Werte sind in Einschränkungen, die in `getDisplayMedia()`-Aufrufen verwendet werden, nicht erlaubt.

## Sicherheit

Da `getDisplayMedia()` auf bösartige Weise verwendet werden könnte, kann es eine Quelle für erhebliche Datenschutz- und Sicherheitsbedenken sein.
Aus diesem Grund beschreibt die Spezifikation Maßnahmen, die Browser ergreifen müssen, um `getDisplayMedia()` vollständig zu unterstützen.

- Die angegebenen Optionen können nicht verwendet werden, um die dem Benutzer zur Verfügung stehenden Auswahlmöglichkeiten einzuschränken.
  Stattdessen müssen sie angewendet werden, nachdem der Benutzer eine Quelle ausgewählt hat, um eine Ausgabe zu erzeugen, die den Optionen entspricht.
- Die Erlaubnis, `getDisplayMedia()` zu verwenden, kann nicht zur Wiederverwendung beibehalten werden.
  Der Benutzer muss jedes Mal um Erlaubnis gebeten werden.
- [Vorübergehende Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich.
  Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.
- Browser werden ermutigt, Benutzer über das Teilen von Displays oder Fenstern, die Browser enthalten, zu warnen, und ein wachsames Auge darauf zu haben, welche anderen Inhalte möglicherweise erfasst und anderen Benutzern gezeigt werden.

## Beispiele

Im folgenden Beispiel wird eine `startCapture()`-Methode erstellt, die die Bildschirmerfassung mit einer Reihe von Optionen startet, die durch den Parameter `displayMediaOptions` spezifiziert werden.

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

Dies verwendet {{jsxref("Operators/await", "await")}}, um asynchron auf die Auflösung von `getDisplayMedia()` mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) zu warten, das die angeforderten Display-Inhalte gemäß den angegebenen Optionen enthält.
Der Stream wird dann an den Aufrufer zurückgegeben, um möglicherweise zu einem WebRTC-Anruf hinzugefügt zu werden, indem [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) verwendet wird, um den Videotrack aus dem Stream hinzuzufügen.

> [!NOTE]
> Das [Screen Sharing Controls](https://chrome.dev/screen-sharing-controls/) Demo bietet eine vollständige Implementierung, die es Ihnen ermöglicht, eine Bildschirmerfassung mit Ihrer Auswahl an `getDisplayMedia()`-Einschränkungen und -Optionen zu erstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia): Aufzeichnung von Medien von einer
  Kamera und/oder Mikrofon
