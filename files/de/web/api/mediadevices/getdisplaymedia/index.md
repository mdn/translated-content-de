---
title: "MediaDevices: getDisplayMedia()-Methode"
short-title: getDisplayMedia()
slug: Web/API/MediaDevices/getDisplayMedia
l10n:
  sourceCommit: 83a92f1eaf27dabf71beec6c548afb03171aa194
---

{{APIRef("Screen Capture API")}}{{SecureContext_Header}}

Die **`getDisplayMedia()`**-Methode der [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Schnittstelle fordert den Benutzer auf, eine Auswahl zu treffen und die Erlaubnis zu erteilen, die Inhalte eines Bildschirms oder eines Teils davon (wie z.B. ein Fenster) als [`MediaStream`](/de/docs/Web/API/MediaStream) aufzunehmen.

Der resultierende Stream kann dann mit der [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) aufgenommen oder im Rahmen einer [WebRTC](/de/docs/Web/API/WebRTC_API)-Sitzung übertragen werden.

Weitere Details und ein Beispiel finden Sie unter [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture).

## Syntax

```js-nolint
getDisplayMedia()
getDisplayMedia(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein optionales Objekt, das Anforderungen an den zurückgegebenen [`MediaStream`](/de/docs/Web/API/MediaStream) spezifiziert. Die Optionen für `getDisplayMedia()` funktionieren ähnlich wie die [constraints](/de/docs/Web/API/MediaDevices/getUserMedia#parameters) für die Methode [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), obwohl dort nur `audio` und `video` angegeben werden können. Die Liste möglicher Options-Eigenschaften für `getDisplayMedia()` ist wie folgt:
    - `video` {{optional_inline}}
      - : Ein Boolean oder eine Instanz von [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints); der Standardwert ist `true`. Wenn diese Option weggelassen oder auf `true` gesetzt wird, enthält der zurückgegebene [`MediaStream`](/de/docs/Web/API/MediaStream) eine Videospur. Da `getDisplayMedia()` eine Videospur erfordert, wird das Versprechen abgelehnt, wenn diese Option auf `false` gesetzt ist, mit einem `TypeError`.
    - `audio` {{optional_inline}}
      - : Ein Boolean oder eine Instanz von [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints); der Standardwert ist `false`. Ein Wert von `true` gibt an, dass der zurückgegebene [`MediaStream`](/de/docs/Web/API/MediaStream) eine Audiospur enthalten wird, sofern Audio unterstützt und für die vom Nutzer gewählte Bildschirmfläche verfügbar ist.
    - `controller` {{Experimental_Inline}} {{optional_inline}}
      - : Ein [`CaptureController`](/de/docs/Web/API/CaptureController)-Objektinstanz mit Methoden, die zur weiteren Manipulation der Aufnahmesitzung verwendet werden können, wenn enthalten.
    - `monitorTypeSurfaces` {{Experimental_Inline}} {{optional_inline}}
      - : Ein enumerierter Wert, der angibt, ob der Browser im Bildschirmerfassungsdialog neben Tab- und Fensteroptionen auch ganze Bildschirme anbieten soll. Diese Option soll Unternehmen davor schützen, private Informationen durch Benutzerfehler bei der Verwendung von Videokonferenz-Apps preiszugeben. Mögliche Werte sind `include`, was bedeutet, dass der Browser Bildschirmoptionen einschließen soll, und `exclude`, was bedeutet, dass sie ausgeschlossen werden sollen. Ein Standardwert wird von der Spezifikation nicht vorgeschrieben; siehe den Abschnitt zur [Browser-Kompatibilität](#browser-kompatibilität) für browserspezifische Standardeinstellungen.

        > [!NOTE]
        > Sie können nicht gleichzeitig `monitorTypeSurfaces: "exclude"` und [`displaySurface: "monitor"`](/de/docs/Web/API/MediaTrackConstraints/displaySurface) setzen, da diese Einstellungen in Widerspruch zueinander stehen. Der Versuch, beide gleichzeitig zu setzen, führt dazu, dass der Aufruf von `getDisplayMedia()` mit einem `TypeError` fehlschlägt.

    - `preferCurrentTab` {{non-standard_inline}} {{Experimental_Inline}} {{optional_inline}}
      - : Ein Boolean; ein Wert von `true` weist den Browser an, den aktuellen Tab als die prominenteste Aufnahmequelle anzubieten, d.h. als eigene "Dieser Tab"-Option in den dem Benutzer präsentierten "choose what to share"-Optionen. Dies ist nützlich, da viele Apps in der Regel einfach nur den aktuellen Tab teilen möchten. Beispielsweise möchte eine Präsentations-App dem Benutzer die Möglichkeit geben, den aktuellen Tab mit der Präsentation in einer virtuellen Konferenz zu streamen. Ein Standardwert wird von der Spezifikation nicht vorgeschrieben; siehe den Abschnitt zur [Browser-Kompatibilität](#browser-kompatibilität) für browserspezifische Standardeinstellungen.
    - `selfBrowserSurface` {{Experimental_Inline}} {{optional_inline}}
      - : Ein enumerierter Wert, der angibt, ob der Browser dem Benutzer die Auswahl des aktuellen Tabs zur Aufnahme erlauben soll. Dies hilft, den Effekt des "endlosen Spiegels" zu vermeiden, wenn eine Videokonferenz-App versehentlich ihr eigenes Display teilt. Mögliche Werte sind `include`, was bedeutet, dass der Browser den aktuellen Tab in die Wahlmöglichkeiten einschließen soll, und `exclude`, was bedeutet, dass er ausgeschlossen werden soll. Ein Standardwert wird von der Spezifikation nicht vorgeschrieben; siehe den Abschnitt zur [Browser-Kompatibilität](#browser-kompatibilität) für browserspezifische Standardeinstellungen.
    - `surfaceSwitching` {{Experimental_Inline}} {{optional_inline}}
      - : Ein enumerierter Wert, der angibt, ob der Browser ein Steuerungselement anzeigen soll, das es dem Benutzer ermöglicht, während des Bildschirmteilens den freigegebenen Tab dynamisch zu wechseln. Dies ist weitaus bequemer, als jedes Mal den gesamten Freigabeprozess erneut durchlaufen zu müssen, wenn ein Benutzer den freigegebenen Tab wechseln möchte. Mögliche Werte sind `include`, was bedeutet, dass der Browser das Steuerungselement einschließen soll, und `exclude`, was bedeutet, dass es nicht angezeigt werden soll. Ein Standardwert wird von der Spezifikation nicht vorgeschrieben; siehe den Abschnitt zur [Browser-Kompatibilität](#browser-kompatibilität) für browserspezifische Standardeinstellungen.
    - `systemAudio` {{Experimental_Inline}} {{optional_inline}}
      - : Ein enumerierter Wert, der angibt, ob der Browser das Systemaudio zu den dem Benutzer angebotenen möglichen Audioquellen einschließen soll. Mögliche Werte sind `include`, was bedeutet, dass der Browser das Systemaudio in die Auswahlmöglichkeiten einschließen soll, und `exclude`, was bedeutet, dass es ausgeschlossen werden soll. Ein Standardwert wird von der Spezifikation nicht vorgeschrieben; siehe den Abschnitt zur [Browser-Kompatibilität](#browser-kompatibilität) für browserspezifische Standardeinstellungen.

> [!NOTE]
> Siehe den Artikel [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints), um mehr Details darüber zu erfahren, wie diese Optionen funktionieren.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auflöst sich in einen [`MediaStream`](/de/docs/Web/API/MediaStream), der eine
Videospur enthält, deren Inhalt aus einem vom Benutzer ausgewählten Bildschirmbereich stammt, sowie eine optionale
Audiospur.

> [!NOTE]
> Die Unterstützung von Audiospuren variiert je nach Browser, sowohl ob sie von der Medienaufzeichnung überhaupt unterstützt werden, als auch welche Audioquellen unterstützt werden. Überprüfen Sie die [Kompatibilitätstabelle](#browser-kompatibilität) für Details zu jedem Browser.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Fehler oder Versagen nicht mit einer der anderen hier aufgeführten Ausnahmen übereinstimmt.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Aufruf von `getDisplayMedia()` nicht von einem Code erfolgte, der aufgrund einer
    {{Glossary("transient_activation", "flüchtigen Aktivierung")}} ausgeführt wird, wie z.B. ein Ereignishandler. Oder wenn der Browser-Kontext nicht vollständig aktiv ist oder nicht fokussiert ist. Oder wenn die `controller`-Option bereits zur Erstellung eines anderen [`MediaStream`](/de/docs/Web/API/MediaStream) verwendet wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Erlaubnis, auf einen Bildschirmbereich zuzugreifen, vom Benutzer verweigert wurde, oder wenn die aktuelle Browsing-Instanz keinen Zugriff auf Bildschirmfreigabe hat (zum Beispiel durch eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)).
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn keine Bildschirmvideoquellen zur Aufnahme verfügbar sind.
- `NotReadableError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzer einen Bildschirm, ein Fenster, einen Tab oder eine andere Bildschirmdatenquelle ausgewählt hat, aber ein
    Hardware- oder Betriebssystemfehler oder eine Sperrung auftritt, die die Freigabe der ausgewählten Quelle verhindert.
- `OverconstrainedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn nach der Erstellung des Streams die Anwendung der angegebenen Einschränkungen fehlschlägt,
    da kein kompatibler Stream generiert werden konnte.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die angegebenen `options` Werte enthalten, die nicht erlaubt sind,
    wenn `getDisplayMedia()` aufgerufen wird, beispielsweise eine `video`-Eigenschaft, die auf false gesetzt ist, oder wenn angegebene [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) nicht erlaubt sind. `min` und `exact` Werte sind nicht in Einschränkungen erlaubt, die in `getDisplayMedia()`-Aufrufen verwendet werden.

## Sicherheit

Da `getDisplayMedia()` auf bösartige Weise verwendet werden könnte, kann es eine
Quelle erheblicher Datenschutz- und Sicherheitsbedenken sein. Aus diesem Grund legt die Spezifikation
Maßnahmen fest, die Browser ergreifen müssen, um
`getDisplayMedia()` vollständig zu unterstützen.

- Die angegebenen Optionen können nicht verwendet werden, um die dem Benutzer zur Verfügung stehenden Auswahlmöglichkeiten einzuschränken. Stattdessen müssen sie angewendet werden, nachdem der Benutzer eine Quelle ausgewählt hat, um ein Ausgabe zu erzeugen, die den Optionen entspricht.
- Die Erlaubnis, `getDisplayMedia()` zu nutzen, kann nicht für eine spätere Verwendung gespeichert werden. Der Benutzer muss jedes Mal um Erlaubnis gebeten werden.
- Eine [flüchtige Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.
- Browser werden aufgefordert, den Benutzern eine Warnung zu geben, wenn sie Bildschirme oder
  Fenster teilen, die Browser enthalten, und genau darauf zu achten, welche anderen Inhalte möglicherweise
  erfasst und anderen Benutzern gezeigt werden.

## Beispiele

Im folgenden Beispiel wird eine `startCapture()`-Methode erstellt, die eine
Bildschirmaufnahme mit einer durch den `displayMediaOptions`-Parameter angegebenen Optionsmenge initiiert.

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

Dies verwendet {{jsxref("Operators/await", "await")}}, um asynchron darauf zu warten, dass `getDisplayMedia()`
mit einem [`MediaStream`](/de/docs/Web/API/MediaStream) aufgelöst wird, das die angeforderten Bildschirm-Inhalte enthält,
wie sie durch die angegebenen Optionen angefordert wurden. Der Stream wird dann an den Aufrufer zurückgegeben, zur Verwendung,
vielleicht zum Hinzufügen zu einem WebRTC-Anruf mit [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack), um die
die Videospur des Streams hinzuzufügen.

> [!NOTE]
> Die [Screen sharing controls](https://chrome.dev/screen-sharing-controls/)-Demo bietet eine vollständige Implementierung, die es Ihnen ermöglicht, eine Bildschirmaufnahme mit Ihrer Auswahl an `getDisplayMedia()`-Einschränkungen und -Optionen zu erstellen.

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
  Kamera und/oder einem Mikrofon
