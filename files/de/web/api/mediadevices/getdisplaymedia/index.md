---
title: "MediaDevices: getDisplayMedia() Methode"
short-title: getDisplayMedia()
slug: Web/API/MediaDevices/getDisplayMedia
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Screen Capture API")}}{{SecureContext_Header}}

Die **`getDisplayMedia()`** Methode der [`MediaDevices`](/de/docs/Web/API/MediaDevices) Schnittstelle fordert den Benutzer auf, eine Auswahl zu treffen und die Erlaubnis zu erteilen, die Inhalte eines Bildschirms oder eines Teils davon (z.B. ein Fenster) als einen [`MediaStream`](/de/docs/Web/API/MediaStream) zu erfassen.

Der resultierende Stream kann dann mit der [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) aufgezeichnet oder als Teil einer [WebRTC](/de/docs/Web/API/WebRTC_API)-Sitzung übertragen werden.

Weitere Details und ein Beispiel finden Sie unter [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture).

## Syntax

```js-nolint
getDisplayMedia()
getDisplayMedia(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein optionales Objekt, das Anforderungen für den zurückgegebenen [`MediaStream`](/de/docs/Web/API/MediaStream) angibt. Die Optionen für `getDisplayMedia()` funktionieren ähnlich wie die [Einschränkungen](/de/docs/Web/API/MediaDevices/getUserMedia#parameters) für die Methode [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), obwohl in diesem Fall nur `audio` und `video` angegeben werden können. Die Liste der möglichen Options-Eigenschaften für `getDisplayMedia()` lautet wie folgt:

    - `video` {{optional_inline}}
      - : Ein Boolean oder eine Instanz von [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints); der Standardwert ist `true`. Wenn diese Option weggelassen oder auf `true` gesetzt wird, enthält der Stream einen Videotrack. Ein Wert von `true` zeigt an, dass der zurückgegebene [`MediaStream`](/de/docs/Web/API/MediaStream) einen Videotrack enthalten wird. Da `getDisplayMedia()` einen Videotrack erfordert, schlägt die Promise fehl, wenn diese Option auf `false` gesetzt ist, und löst einen `TypeError` aus.
    - `audio` {{optional_inline}}
      - : Ein Boolean oder eine Instanz von [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints); der Standardwert ist `false`. Ein Wert von `true` zeigt an, dass der zurückgegebene [`MediaStream`](/de/docs/Web/API/MediaStream) einen Audiotrack enthalten wird, wenn Audio unterstützt und für die vom Benutzer gewählte Bildschirmoberfläche verfügbar ist.
    - `controller` {{Experimental_Inline}} {{optional_inline}}
      - : Eine Instanz eines [`CaptureController`](/de/docs/Web/API/CaptureController)-Objekts, das Methoden enthält, die zur weiteren Manipulation der Erfassungssitzung verwendet werden können, wenn sie enthalten ist.
    - `monitorTypeSurfaces` {{optional_inline}}

      - : Ein enumerierter Wert, der angibt, ob der Browser in den dem Benutzer präsentierten Bildschirmaufnahmeoptionen vollständige Bildschirme zusammen mit Registerkarten- und Fensteroptionen anbieten sollte. Diese Option soll Unternehmen davor schützen, dass durch einen Mitarbeiterfehler in Videokonferenz-Apps private Informationen durchsickern. Mögliche Werte sind `include`, was darauf hindeutet, dass der Browser Bildschirmoptionen einschließen sollte, und `exclude`, was darauf hindeutet, dass sie ausgeschlossen werden sollten. Ein Standardwert ist in der Spezifikation nicht vorgeschrieben; siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browser-spezifische Standardeinstellungen.

        > [!NOTE]
        > Sie können nicht `monitorTypeSurfaces: "exclude"` gleichzeitig mit [`displaySurface: "monitor"`](/de/docs/Web/API/MediaTrackConstraints/displaySurface) setzen, da die beiden Einstellungen widersprüchlich sind. Ein solcher Versuch führt dazu, dass der `getDisplayMedia()`-Aufruf mit einem `TypeError` fehlschlägt.

    - `preferCurrentTab` {{non-standard_inline}} {{Experimental_Inline}} {{optional_inline}}
      - : Ein Boolean; ein Wert von `true` weist den Browser an, die aktuelle Registerkarte als die hervorstechendste Erfassen-Quelle anzubieten, d.h. als separate "Diese Registerkarte"-Option in den "Wählen Sie aus, was Sie teilen möchten"-Optionen, die dem Benutzer präsentiert werden. Dies ist nützlich, da viele App-Typen normalerweise nur die aktuelle Registerkarte teilen möchten. Beispielsweise kann eine Folienpräsentation-App dem Benutzer erlauben, die aktuelle Registerkarte, die die Präsentation enthält, zu einem virtuellen Konferenz-Stream hinzuzufügen. Ein Standardwert ist in der Spezifikation nicht vorgeschrieben; siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browser-spezifische Standardeinstellungen.
    - `selfBrowserSurface` {{Experimental_Inline}} {{optional_inline}}
      - : Ein enumerierter Wert, der angibt, ob der Browser dem Benutzer erlauben sollte, die aktuelle Registerkarte zur Erfassung auszuwählen. Dies hilft, den Effekt des "endlosen Spiegelkorridors" zu vermeiden, der auftritt, wenn eine Videokonferenz-App versehentlich ihre eigene Anzeige teilt. Mögliche Werte sind `include`, was darauf hindeutet, dass der Browser die aktuelle Registerkarte in den Auswahlmöglichkeiten für die Erfassung einschließen sollte, und `exclude`, was darauf hindeutet, dass sie ausgeschlossen werden sollte. Ein Standardwert ist in der Spezifikation nicht vorgeschrieben; siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browser-spezifische Standardeinstellungen.
    - `surfaceSwitching` {{Experimental_Inline}} {{optional_inline}}
      - : Ein enumerierter Wert, der angibt, ob der Browser eine Steuerung anzeigen sollte, um dem Benutzer zu ermöglichen, während der Bildschirmfreigabe dynamisch die geteilte Registerkarte zu wechseln. Dies ist viel bequemer, als jedes Mal den gesamten Freigabeprozess erneut durchlaufen zu müssen, wenn ein Benutzer die geteilte Registerkarte wechseln möchte. Mögliche Werte sind `include`, was darauf hindeutet, dass der Browser die Steuerung einschließen sollte, und `exclude`, was darauf hindeutet, dass sie nicht angezeigt werden sollte. Ein Standardwert ist in der Spezifikation nicht vorgeschrieben; siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browser-spezifische Standardeinstellungen.
    - `systemAudio` {{Experimental_Inline}} {{optional_inline}}
      - : Ein enumerierter Wert, der angibt, ob der Browser das Systemaudio zu den dem Benutzer angebotenen möglichen Audioquellen hinzufügen sollte. Mögliche Werte sind `include`, was darauf hindeutet, dass der Browser das Systemaudio in die Liste der Auswahlmöglichkeiten aufnehmen sollte, und `exclude`, was darauf hindeutet, dass es ausgeschlossen werden sollte. Ein Standardwert ist in der Spezifikation nicht vorgeschrieben; siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browser-spezifische Standardeinstellungen.
    - `monitorTypeSurfaces` {{Experimental_Inline}} {{optional_inline}}
      - : Ein enumerierter Wert, der angibt, ob die Anwendung dem Benutzeragenten anbieten möchte, die Option für die Auswahl von Anzeigeflächen, deren Typ Monitor ist, zu präsentieren. Mögliche Werte sind `include`, was darauf hindeutet, dass der Browser die Anzeigeflächen, deren Typ Monitor ist, einbeziehen sollte, und `exclude`, was darauf hindeutet, dass es ausgeschlossen werden sollte. Ein Standardwert ist in der Spezifikation nicht vorgeschrieben; siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browser-spezifische Standardeinstellungen.

> [!NOTE]
> Siehe den Artikel [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) für viel mehr Details darüber, wie diese Optionen funktionieren.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich zu einem [`MediaStream`](/de/docs/Web/API/MediaStream) auflöst, der eine
Videospur enthält, deren Inhalte aus einem vom Benutzer ausgewählten Bildschirmbereich stammen, sowie eventuell eine
Audiospur.

> [!NOTE]
> Die Browserunterstützung für Audiospuren variiert, sowohl dahingehend, ob sie vom Medienrekorder überhaupt unterstützt werden, als auch, welche Audioquellen unterstützt werden. Überprüfen Sie die [Kompatibilitätstabelle](#browser-kompatibilität) für Details zu jedem Browser.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Fehler oder Fehlschlag keinem der hier aufgelisteten anderen Ausnahmen entspricht.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf von `getDisplayMedia()` nicht von Code ausgeführt wurde, der aufgrund eines
    {{Glossary("transient_activation", "flüchtigen Aktivierung")}}, wie einem Ereignis-Handler, ausgeführt wurde. Oder wenn der Browserkontext
    nicht vollständig aktiv oder nicht fokussiert ist. Oder wenn die `controller`-Option bereits zur Erstellung
    eines anderen [`MediaStream`](/de/docs/Web/API/MediaStream) verwendet wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Erlaubnis zum Zugriff auf einen Bildschirmbereich vom Benutzer verweigert wurde oder die aktuelle Browsersitzung nicht die Berechtigung zum Zugriff auf Bildschirmfreigabe hat (zum Beispiel durch eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy)).
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn keine Quellen von Bildschirmvideo zur Erfassung verfügbar sind.
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzer einen Bildschirm, ein Fenster, eine Registerkarte oder eine andere Quelle von Bildschirmdaten ausgewählt hat, jedoch ein
    Hardware- oder Betriebssystemebenenfehler oder -aussperrung aufgetreten ist, der das Teilen
    der ausgewählten Quelle verhindert.
- `OverconstrainedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn nach Erstellung des Streams das Anwenden der angegebenen Einschränkungen fehlschlägt,
    weil kein kompatibler Stream erzeugt werden konnte.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die angegebenen `options` Werte enthalten, die nicht zulässig sind,
    wenn `getDisplayMedia()` aufgerufen wird, zum Beispiel eine `video`-Eigenschaft, die auf false gesetzt ist, oder wenn angegebene [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) nicht erlaubt sind. `min`- und `exact`-Werte sind in Constraints, die bei `getDisplayMedia()`-Aufrufen verwendet werden, nicht zulässig.

## Sicherheit

Da `getDisplayMedia()` auf bösartige Weise eingesetzt werden könnte, kann es eine
Quelle erheblich beeinträchtigender Privatsphäre- und Sicherheitsbedenken sein. Aus diesem Grund beschreibt die Spezifikation
Maßnahmen, die Browser ergreifen müssen, um die volle Unterstützung von
`getDisplayMedia()` sicherzustellen.

- Die angegebenen Optionen können nicht verwendet werden, um die dem Benutzer verfügbaren Auswahlmöglichkeiten einzuschränken. Stattdessen müssen sie nach der Quellenauswahl durch den Benutzer angewendet werden, um eine Ausgabe zu erzeugen, die den Optionen entspricht.
- Die Genehmigung zur Nutzung von `getDisplayMedia()` kann nicht gespeichert werden. Der Benutzer muss jedes Mal um Erlaubnis gefragt werden.
- Eine [flüchtige Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.
- Browser werden dazu angehalten, den Benutzern eine Warnung auszugeben, wenn sie Displays oder Fenster teilen, die Browser enthalten, und genau darauf zu achten, welche anderen Inhalte möglicherweise erfasst und anderen Benutzern gezeigt werden könnten.

## Beispiele

Im folgenden Beispiel wird eine `startCapture()`-Methode erstellt, die mit einem Satz von Spezifikationen durch den Parameter `displayMediaOptions` die Bildschirmerfassung initiiert.

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
mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) zu warten, der die Anzeigesergebnisse enthält, wie
durch die angegebenen Optionen angefordert. Der Stream wird dann dem Aufrufer zur Nutzung zurückgegeben,
vielleicht um ihn zu einem WebRTC-Anruf mit [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) hinzuzufügen, um
den Videotrack aus dem Stream hinzuzufügen.

> [!NOTE]
> Die [Bildschirmfreigabe-Steuerungen](https://screen-sharing-controls.glitch.me/) Demo bietet eine vollständige Implementierung, die es Ihnen ermöglicht, eine Bildschirmaufnahme mit Ihrer Wahl an `getDisplayMedia()`-Einschränkungen und Optionen zu erstellen.

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
