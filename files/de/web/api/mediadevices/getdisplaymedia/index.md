---
title: "MediaDevices: getDisplayMedia()-Methode"
short-title: getDisplayMedia()
slug: Web/API/MediaDevices/getDisplayMedia
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Screen Capture API")}}{{SecureContext_Header}}

Die **`getDisplayMedia()`**-Methode der [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Schnittstelle fordert den Nutzer auf, eine Auswahl zu treffen und die Erlaubnis zu erteilen, die Inhalte eines Displays oder eines Teils davon (wie ein Fenster) als [`MediaStream`](/de/docs/Web/API/MediaStream) zu erfassen.

Der resultierende Stream kann dann mithilfe der [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) aufgezeichnet oder als Teil einer [WebRTC](/de/docs/Web/API/WebRTC_API)-Sitzung übertragen werden.

Siehe [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture) für weitere Details und ein Beispiel.

## Syntax

```js-nolint
getDisplayMedia()
getDisplayMedia(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein optionales Objekt, das Anforderungen für den zurückgegebenen [`MediaStream`](/de/docs/Web/API/MediaStream) spezifiziert. Die Optionen für `getDisplayMedia()` funktionieren genauso wie die [Einschränkungen](/de/docs/Web/API/MediaDevices/getUserMedia#parameters) für die [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)-Methode, obwohl in diesem Fall nur `audio` und `video` angegeben werden können. Die Liste der möglichen Optionseigenschaften für `getDisplayMedia()` lautet wie folgt:

    - `video` {{optional_inline}}
      - : Ein Boolean oder eine Instanz von [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints); der Standardwert ist `true`. Wenn diese Option weggelassen oder auf `true` gesetzt wird, enthält der Stream einen Videotrack. Ein Wert von `true` gibt an, dass der zurückgegebene [`MediaStream`](/de/docs/Web/API/MediaStream) einen Videotrack enthält. Da `getDisplayMedia()` einen Videotrack erfordert, wird das Versprechen abgelehnt, wenn diese Option auf `false` gesetzt ist, mit einem `TypeError`.
    - `audio` {{optional_inline}}
      - : Ein Boolean oder eine Instanz von [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints); der Standardwert ist `false`. Ein Wert von `true` gibt an, dass der zurückgegebene [`MediaStream`](/de/docs/Web/API/MediaStream) einen Audiotrack enthält, wenn Audio unterstützt und für die vom Nutzer gewählte Anzeigeoberfläche verfügbar ist.
    - `controller` {{Experimental_Inline}} {{optional_inline}}
      - : Eine [`CaptureController`](/de/docs/Web/API/CaptureController)-Objektinstanz, die Methoden enthält, mit denen die Aufnahmesitzung weiter manipuliert werden kann, wenn sie enthalten ist.
    - `monitorTypeSurfaces` {{optional_inline}}

      - : Ein enumerierter Wert, der angibt, ob der Browser ganze Bildschirme in den dem Nutzer präsentierten Bildschirmaufnahmeoptionen neben Tab- und Fensteroptionen anbieten sollte. Diese Option soll Unternehmen davor schützen, dass private Informationen durch einen Bedienfehler beim Einsatz von Videokonferenz-Apps preisgegeben werden. Mögliche Werte sind `include`, was darauf hinweist, dass der Browser Bildschirmoptionen einschließen soll, und `exclude`, was darauf hinweist, dass sie ausgeschlossen werden sollen. Ein Standardwert wird von der Spezifikation nicht vorgegeben; siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browserspezifische Standardwerte.

        > [!NOTE]
        > Sie können `monitorTypeSurfaces: "exclude"` nicht gleichzeitig mit [`displaySurface: "monitor"`](/de/docs/Web/API/MediaTrackConstraints/displaySurface) einstellen, da die beiden Einstellungen widersprüchlich sind. Der Versuch, dies zu tun, führt dazu, dass der `getDisplayMedia()`-Aufruf mit einem `TypeError` fehlschlägt.

    - `preferCurrentTab` {{non-standard_inline}} {{Experimental_Inline}} {{optional_inline}}
      - : Ein Boolean; ein Wert von `true` weist den Browser an, den aktuellen Tab als die hervorstechendste Aufnahmequelle anzubieten, d. h. als separate "Dieser Tab"-Option in den "Teilen, was Sie möchten"-Optionen, die dem Benutzer präsentiert werden. Dies ist nützlich, da viele Anwendungstypen im Allgemeinen nur den aktuellen Tab teilen möchten. Zum Beispiel könnte eine Präsentations-App es dem Benutzer ermöglichen, den aktuellen Tab mit der Präsentation zu einem virtuellen Meeting zu streamen. Ein Standardwert wird von der Spezifikation nicht vorgegeben; siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browserspezifische Standardwerte.
    - `selfBrowserSurface` {{Experimental_Inline}} {{optional_inline}}
      - : Ein enumerierter Wert, der angibt, ob der Browser dem Benutzer erlauben sollte, den aktuellen Tab für die Aufnahme auszuwählen. Dies hilft, den "unendlichen Spiegeleffekte"-Effekt zu vermeiden, der auftritt, wenn eine Videokonferenz-App versehentlich ihr eigenes Display teilt. Mögliche Werte sind `include`, was darauf hinweist, dass der Browser den aktuellen Tab in die Auswahlmöglichkeiten für die Aufnahme einbeziehen soll, und `exclude`, was darauf hinweist, dass er ausgeschlossen werden soll. Ein Standardwert wird von der Spezifikation nicht vorgegeben; siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browserspezifische Standardwerte.
    - `surfaceSwitching` {{Experimental_Inline}} {{optional_inline}}
      - : Ein enumerierter Wert, der angibt, ob der Browser während der Bildschirmfreigabe ein Steuerelement anzeigen soll, das es dem Benutzer ermöglicht, den geteilten Tab dynamisch zu wechseln. Dies ist viel bequemer, als jedes Mal den gesamten Teilen-Prozess durchlaufen zu müssen, wenn ein Benutzer den geteilten Tab wechseln möchte. Mögliche Werte sind `include`, was darauf hinweist, dass der Browser das Steuerelement einschließen soll, und `exclude`, was darauf hinweist, dass es nicht angezeigt werden soll. Ein Standardwert wird von der Spezifikation nicht vorgegeben; siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browserspezifische Standardwerte.
    - `systemAudio` {{Experimental_Inline}} {{optional_inline}}
      - : Ein enumerierter Wert, der angibt, ob der Browser das Systemaudio unter den dem Benutzer angebotenen möglichen Audioquellen einschließen soll. Mögliche Werte sind `include`, was darauf hinweist, dass der Browser das Systemaudio in die Liste der Auswahlmöglichkeiten einbeziehen soll, und `exclude`, was darauf hinweist, dass es ausgeschlossen werden soll. Ein Standardwert wird von der Spezifikation nicht vorgegeben; siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browserspezifische Standardwerte.
    - `monitorTypeSurfaces` {{Experimental_Inline}} {{optional_inline}}
      - : Ein enumerierter Wert, der angibt, ob die Anwendung den Benutzeragenten dazu bringen möchte, dem Benutzer die Option zu bieten, Display-Oberflächen auszuwählen, deren Typ "Monitor" ist. Mögliche Werte sind `include`, was darauf hinweist, dass der Browser die Display-Oberflächen, deren Typ "Monitor" ist, einbeziehen soll, und `exclude`, was darauf hinweist, dass sie ausgeschlossen werden sollen. Ein Standardwert wird von der Spezifikation nicht vorgegeben; siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browserspezifische Standardwerte.

> [!NOTE]
> Im Artikel [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) finden Sie viel mehr Details darüber, wie diese Optionen funktionieren.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem [`MediaStream`](/de/docs/Web/API/MediaStream) aufgelöst wird, der einen Videotrack enthält, dessen Inhalte aus einem vom Benutzer ausgewählten Bildschirmbereich stammen, sowie optional einen Audiotrack.

> [!NOTE]
> Die Unterstützung für Audiotracks variiert pro Browser, sowohl darin, ob sie überhaupt unterstützt werden, als auch in Bezug auf die unterstützten Audioquellen. Bitte überprüfen Sie die [Kompatibilitätstabelle](#browser-kompatibilität), um Details für jeden Browser zu erhalten.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Fehler oder Problem nicht zu einem der anderen hier aufgeführten Ausnahmen passt.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf von `getDisplayMedia()` nicht von einem Code gemacht wurde, der aufgrund einer [flüchtigen Aktivierung](/de/docs/Glossary/transient_activation), wie einem Event-Handler, ausgeführt wird. Oder wenn der Browser-Kontext nicht vollständig aktiv ist oder der Fokus nicht darauf liegt. Oder wenn die `controller`-Option bereits für die Erstellung eines anderen [`MediaStream`](/de/docs/Web/API/MediaStream) verwendet wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Erlaubnis zum Zugriff auf einen Bildschirmbereich vom Benutzer verweigert wurde, oder wenn die aktuelle Browserinstanz keinen Zugriff auf die Bildschirmfreigabe hat (zum Beispiel durch eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy)).
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn keine Quellen für Bildschirmvideo zur Erfassung verfügbar sind.
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzer einen Bildschirm, ein Fenster, einen Tab oder eine andere Quelle von Bildschirmdaten auswählt, aber ein Hardware- oder Betriebssystemsperre oder -Fehler auftritt, der die Freigabe der ausgewählten Quelle verhindert.
- `OverconstrainedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn nach der Erstellung des Streams das Anwenden der angegebenen Einschränkungen fehlschlägt, weil kein kompatibler Stream generiert werden konnte.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die angegebenen `options` Werte enthalten, die bei einem Aufruf von `getDisplayMedia()` nicht erlaubt sind, zum Beispiel eine `video`-Eigenschaft, die auf false gesetzt ist, oder wenn angegebene [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) nicht zulässig sind. `min` und `exact`-Werte sind in den Einschränkungen bei `getDisplayMedia()`-Anrufen nicht erlaubt.

## Sicherheit

Da `getDisplayMedia()` auf böswillige Weise verwendet werden könnte, kann es eine Quelle erheblicher Datenschutz- und Sicherheitsbedenken sein. Aus diesem Grund spezifiziert die Spezifikation Maßnahmen, die Browser ergreifen müssen, um `getDisplayMedia()` vollständig zu unterstützen.

- Die angegebenen Optionen können nicht dazu verwendet werden, die dem Benutzer zur Verfügung stehenden Auswahlmöglichkeiten zu beschränken. Stattdessen müssen sie nach der Auswahl einer Quelle durch den Benutzer angewandt werden, um eine Ausgabe zu erzeugen, die den Optionen entspricht.
- Die Erlaubnis zur Verwendung von `getDisplayMedia()` kann nicht für wiederholte Nutzung gespeichert werden. Der Benutzer muss jedes Mal um Erlaubnis gefragt werden.
- Eine [flüchtige Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.
- Browser werden ermutigt, Benutzern eine Warnung darüber zu geben, Displays oder Fenster zu teilen, die Browser enthalten, und genau darauf zu achten, welche anderen Inhalte möglicherweise erfasst und anderen Benutzern angezeigt werden.

## Beispiele

Im folgenden Beispiel wird eine `startCapture()`-Methode erstellt, die eine Bildschirmaufnahme mit einem Satz von Optionen startet, die durch den `displayMediaOptions`-Parameter spezifiziert werden.

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

Dies verwendet {{jsxref("Operators/await", "await")}}, um asynchron darauf zu warten, dass `getDisplayMedia()` mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) aufgelöst wird, der die angeforderten Display-Inhalte gemäß den angegebenen Optionen enthält. Der Stream wird dann an den Aufrufer zur Verwendung zurückgegeben, beispielsweise zum Hinzufügen zu einem WebRTC-Anruf mit [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack), um den Videotrack aus dem Stream hinzuzufügen.

> [!NOTE]
> Die [Bildschirmfreigabesteuerung](https://screen-sharing-controls.glitch.me/) Demo bietet eine vollständige Implementierung, die es Ihnen erlaubt, eine Bildschirmaufnahme mit Ihrer Wahl von `getDisplayMedia()`-Einschränkungen und Optionen zu erstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia): Erfassung von Medien von
  einer Kamera und/oder Mikrofon
