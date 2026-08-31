---
title: "MediaDevices: getDisplayMedia() Methode"
short-title: getDisplayMedia()
slug: Web/API/MediaDevices/getDisplayMedia
l10n:
  sourceCommit: 0e9bb8e8adaf7924ba918c28293092d65467a7ff
---

{{APIRef("Screen Capture API")}}{{SecureContext_Header}}

Die **`getDisplayMedia()`**-Methode der [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Schnittstelle fordert den Benutzer auf, die Erlaubnis zu erteilen, die Inhalte eines Bildschirms oder eines Teils davon (z. B. eines Fensters) als [`MediaStream`](/de/docs/Web/API/MediaStream) aufzunehmen.

Der resultierende Stream kann dann mit der [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) aufgezeichnet oder als Teil einer [WebRTC](/de/docs/Web/API/WebRTC_API)-Sitzung übertragen werden.

Weitere Details und ein Beispiel finden Sie unter [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture).

## Syntax

```js-nolint
getDisplayMedia()
getDisplayMedia(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das Anforderungen für den zurückgegebenen [`MediaStream`](/de/docs/Web/API/MediaStream) spezifiziert.
    Die Optionen für `getDisplayMedia()` funktionieren ähnlich wie die [Einschränkungen](/de/docs/Web/API/MediaDevices/getUserMedia#parameters) für die Methode [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), obwohl dort nur `audio` und `video` spezifiziert werden können.
    Die Liste der möglichen Options-Eigenschaften für `getDisplayMedia()` ist wie folgt:
    - `video` {{optional_inline}}
      - : Ein Boolean oder eine Instanz von [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints); der Standardwert ist `true`.
        Wenn diese Option weggelassen oder auf `true` gesetzt wird, enthält der zurückgegebene [`MediaStream`](/de/docs/Web/API/MediaStream) einen Videotrack.
        Da `getDisplayMedia()` einen Videotrack erfordert, wird das Versprechen mit einem `TypeError` abgelehnt, wenn diese Option auf `false` gesetzt wird.
    - `audio` {{optional_inline}}
      - : Ein Boolean oder eine Instanz von [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints); der Standardwert ist `false`.
        Ein Wert von `true` zeigt an, dass der zurückgegebene [`MediaStream`](/de/docs/Web/API/MediaStream) einen Audiotrack enthält, wenn Audio unterstützt wird und für die vom Benutzer gewählte Bildschirmoberfläche verfügbar ist.
    - `controller` {{Experimental_Inline}} {{optional_inline}}
      - : Ein [`CaptureController`](/de/docs/Web/API/CaptureController)-Objekt, das Methoden enthält, die zur weiteren Manipulation der Aufnahmesitzung verwendet werden können, falls enthalten.
    - `monitorTypeSurfaces` {{Experimental_Inline}} {{optional_inline}}
      - : Ein aufgezählter Wert, der angibt, ob der Browser ganze Bildschirme in den dem Benutzer angezeigten Bildschirmaufnahmeoptionen neben Registerkarten- und Fensteroptionen anbieten soll.
        Diese Option soll Unternehmen vor dem Verlust privater Informationen durch Mitarbeiterfehler bei der Verwendung von Videokonferenzanwendungen schützen.
        Mögliche Werte sind:
        - `include`: Weist darauf hin, dass der Browser Bildschirmoptionen einschließen sollte.
        - `exclude`: Weist darauf hin, dass Bildschirmoptionen ausgeschlossen werden sollten.

        > [!NOTE]
        > Sie können `monitorTypeSurfaces: "exclude"` nicht gleichzeitig mit [`displaySurface: "monitor"`](/de/docs/Web/API/MediaTrackConstraints/displaySurface) festlegen, da die beiden Einstellungen widersprüchlich sind.
        > Der Versuch, dies zu tun, führt dazu, dass der `getDisplayMedia()`-Aufruf mit einem `TypeError` fehlschlägt.

    - `preferCurrentTab` {{non-standard_inline}} {{Experimental_Inline}} {{optional_inline}}
      - : Ein Boolean; ein Wert von `true` weist den Browser an, die aktuelle Registerkarte als die am prominentesten dargestellte Aufnahmequelle anzubieten, also als separate Option "Diese Registerkarte" in den dem Benutzer angezeigten "Teilen Sie, was Sie möchten"-Optionen.
        Dies ist hilfreich, da viele Anwendungsarten im Allgemeinen nur die aktuelle Registerkarte freigeben möchten.
        Beispielsweise möchte eine Präsentations-App dem Benutzer möglicherweise erlauben, die aktuelle Registerkarte mit der Präsentation in eine virtuelle Konferenz zu streamen.
    - `selfBrowserSurface` {{Experimental_Inline}} {{optional_inline}}
      - : Ein aufgezählter Wert, der angibt, ob der Browser dem Benutzer erlauben soll, die aktuelle Registerkarte zur Aufnahme auszuwählen.
        Dies hilft, den "unendlichen Spiegelhalleffekt" zu vermeiden, der auftritt, wenn eine Videokonferenz-App versehentlich ihren eigenen Bildschirm freigibt.
        Mögliche Werte sind:
        - `include`: Weist darauf hin, dass der Browser die aktuelle Registerkarte in die zur Aufnahme angebotenen Optionen aufnehmen soll.
        - `exclude`: Weist darauf hin, dass die aktuelle Registerkarte aus den Optionen ausgeschlossen werden sollte.
    - `surfaceSwitching` {{Experimental_Inline}} {{optional_inline}}
      - : Ein aufgezählter Wert, der angibt, ob der Browser eine Steuerung anzeigen soll, die es dem Benutzer ermöglicht, während der Bildschirmfreigabe dynamisch zwischen den geteilten Registerkarten zu wechseln.
        Dies ist bequemer, als bei jedem Wechsel einer geteilten Registerkarte den gesamten Freigabeprozess erneut durchlaufen zu müssen.
        Mögliche Werte sind:
        - `include`: Weist darauf hin, dass der Browser die Steuerung einschließen soll.
        - `exclude`: Weist darauf hin, dass die Steuerung nicht angezeigt werden soll.
    - `systemAudio` {{Experimental_Inline}} {{optional_inline}}
      - : Ein aufgezählter Wert, der dem Browser andeutet, ob Systemaudio zu den möglichen Audioquellen zählen soll, die dem Benutzer angeboten werden, wenn ein Monitor freigegeben wird.
        Mögliche Werte sind:
        - `include`: Weist darauf hin, dass der Browser das Systemaudio in die Liste der Optionen aufnehmen soll.
        - `exclude`: Weist darauf hin, dass das Systemaudio von den dem Benutzer gezeigten Optionen ausgeschlossen werden sollte.

        Browser können diesen Hinweis ignorieren und selbst bestimmen, welche Audioquellen angeboten werden, manchmal basierend auf Betriebssystemeinschränkungen.
        Aus diesem Grund könnte der zurückgegebene Stream keinen Audiotrack enthalten, selbst wenn `audio` auf `true` gesetzt und `systemAudio` auf `include` gesetzt ist.
        In Chrome ([Dokumentation](https://developer.chrome.com/docs/web-platform/screen-sharing-controls#systemAudio)) garantiert `systemAudio: "include"` nicht, dass Systemaudio verfügbar sein wird, aber `systemAudio: "exclude"` verhindert, dass Systemaudio beim Teilen eines Bildschirms angeboten wird (Audio aus einer geteilten Browser-Registerkarte oder einem Fenster kann immer noch verfügbar sein).
    - `windowAudio` {{Experimental_Inline}} {{optional_inline}}
      - : Ein aufgezählter Wert, der dem Browser andeutet, welche Audiofreigabeoption dem Benutzer zusammen mit Fensterfreigabeoptionen angezeigt werden sollte. Mögliche Werte sind:
        - `exclude`: Weist darauf hin, dass Audio nicht gemeinsam genutzt werden sollte, wenn eine Fensterfreigabeoption gewählt wird.
        - `window`: Weist darauf hin, dass bei Auswahl einer Fensterfreigabeoption nur das Audio aus diesem Fenster geteilt werden sollte.
        - `system`: Weist darauf hin, dass bei Auswahl einer Fensterfreigabeoption das gesamte Systemaudio geteilt werden sollte.

> [!NOTE]
> Für die meisten dieser Optionen ist ein Standardwert in der Spezifikation nicht vorgeschrieben. Bei eigenständigen Optionen, bei denen kein Standardwert erwähnt wird, siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für browser-spezifische Standardeinstellungen.

> [!NOTE]
> Siehe den Artikel [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) für viel mehr Details darüber, wie diese Optionen funktionieren.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf einen [`MediaStream`](/de/docs/Web/API/MediaStream) mit einem Videotrack aufgelöst wird, dessen Inhalt aus einem vom Benutzer ausgewählten Bildschirmbereich stammt, sowie ein optionaler Audiotrack.

> [!NOTE]
> Die Unterstützung von Audiotracks durch den Browser variiert sowohl hinsichtlich der Frage, ob sie überhaupt vom Media-Recorder unterstützt werden, als auch hinsichtlich der unterstützten Audioquellen.
> Überprüfen Sie die [Kompatibilitätstabelle](#browser-kompatibilität) für Details zu jedem Browser.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Fehler oder ein Problem auftritt, das keiner der hier aufgeführten Ausnahmen entspricht.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf von `getDisplayMedia()` nicht von Code ausgeführt wurde, der durch eine {{Glossary("transient_activation", "vorübergehende Aktivierung")}} wie einen Ereignishandler gesteuert wurde.
    Oder wenn der Browser-Kontext nicht vollständig aktiv oder nicht fokussiert ist.
    Oder wenn die `controller`-Option bereits zur Erstellung eines anderen [`MediaStream`](/de/docs/Web/API/MediaStream) verwendet wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Berechtigung zum Zugriff auf einen Bildschirmbereich vom Benutzer verweigert wurde oder die aktuelle Browsing-Instanz keinen Zugriff auf die Bildschirmfreigabe hat (zum Beispiel durch eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)).
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn keine Quellen für Bildschirmvideos zur Aufnahme verfügbar sind.
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzer einen Bildschirm, ein Fenster, eine Registerkarte oder eine andere Quelle von Bildschirmdaten ausgewählt hat, aber ein Hardware- oder Betriebssystemproblem oder eine Sperre auftritt, die die Freigabe der ausgewählten Quelle verhindert.
- `OverconstrainedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn nach der Erstellung des Streams die Anwendung der angegebenen Einschränkungen fehlschlägt, weil kein kompatibler Stream generiert werden konnte.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die angegebenen `options` Werte enthalten, die bei einem Aufruf von `getDisplayMedia()` nicht zulässig sind, beispielsweise eine `video`-Eigenschaft, die auf false gesetzt ist, oder wenn angegebene [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) nicht zulässig sind.
    `min`- und `exact`-Werte sind in Einschränkungen, die in `getDisplayMedia()`-Aufrufen verwendet werden, nicht erlaubt.

## Sicherheit

Da `getDisplayMedia()` auf bösartige Weise verwendet werden könnte, kann es eine Quelle für erhebliche Datenschutz- und Sicherheitsbedenken sein.
Aus diesem Grund spezifiziert die Spezifikation Maßnahmen, die Browser ergreifen müssen, um `getDisplayMedia()` vollständig zu unterstützen.

- Die angegebenen Optionen können nicht verwendet werden, um die dem Benutzer zur Verfügung stehenden Auswahlmöglichkeiten einzuschränken.
  Stattdessen müssen sie nach der Auswahl einer Quelle durch den Benutzer angewendet werden, um eine Ausgabe zu erzeugen, die den Optionen entspricht.
- Die Erlaubnis, `getDisplayMedia()` zu verwenden, kann nicht für eine erneute Verwendung gespeichert werden.
  Der Benutzer muss jedes Mal um Erlaubnis gebeten werden.
- [Vorübergehende Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich.
  Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.
- Browser werden ermutigt, Benutzer vor dem Teilen von Displays oder Fenstern zu warnen, die Browser enthalten, und genau darauf zu achten, welche anderen Inhalte möglicherweise erfasst und anderen Benutzern angezeigt werden.

## Beispiele

Im folgenden Beispiel wird eine `startCapture()`-Methode erstellt, die die Bildschirmaufnahme basierend auf einem durch den Parameter `displayMediaOptions` spezifizierten Optionssatz initiiert.

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

Dies verwendet {{jsxref("Operators/await", "await")}}, um asynchron auf das Auflösen von `getDisplayMedia()` mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) zu warten, das die angeforderten Display-Inhalte, wie durch die angegebenen Optionen spezifiziert, enthält.
Der Stream wird dann an den Aufrufer zur Verwendung zurückgegeben, möglicherweise zum Hinzufügen zu einem WebRTC-Aufruf mit [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack), um den Videotrack aus dem Stream hinzuzufügen.

> [!NOTE]
> Die [Screen-Sharing-Steuerelemente](https://chrome.dev/screen-sharing-controls/)-Demo bietet eine vollständige Implementierung, die es Ihnen ermöglicht, eine Bildschirmaufnahme mit Ihren Wahl von `getDisplayMedia()`-Einschränkungen und -Optionen zu erstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia): Aufnehmen von Medien von einer Kamera und/oder einem Mikrofon
