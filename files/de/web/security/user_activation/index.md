---
title: Funktionen, die durch Benutzeraktivierung gesichert sind
slug: Web/Security/User_activation
l10n:
  sourceCommit: f568a3d3b0d6be07e8e6386364a9a53b05fe7512
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Um sicherzustellen, dass Anwendungen keine APIs missbrauchen können, die ein schlechtes Benutzererlebnis schaffen können, wenn das Verhalten nicht gewünscht ist, können einige APIs nur verwendet werden, wenn der Benutzer sich in einem "aktiven Interaktionszustand" befindet. Dies bedeutet, dass der Benutzer derzeit mit der Webseite interagiert oder die Seite mindestens einmal bedient hat. Browser beschränken den Zugriff auf sensible APIs wie Pop-ups, Vollbild- oder Vibrations-APIs auf aktive Benutzerinteraktionen, um bösartige Skripte daran zu hindern, diese Funktionen zu missbrauchen. Diese Seite listet die Webplattform-Funktionen auf, die nur nach Benutzeraktivierung verfügbar sind.

Eine Benutzeraktivierung bedeutet entweder, dass der Benutzer derzeit mit der Seite interagiert oder seit dem Laden der Seite eine Interaktion durchgeführt hat. Typischerweise handelt es sich um einen Klick auf einen Button oder eine andere Benutzerinteraktion mit der Benutzeroberfläche.

Genauer gesagt ist ein _Aktivierung-auslösendes Eingabeevent_ ein Ereignis, das:

- das Attribut [`isTrusted`](/de/docs/Web/API/Event/isTrusted) auf `true` gesetzt hat, und
- ein Ereignis der folgenden Typen ist:
  - [`keydown`](/de/docs/Web/API/Element/keydown_event) (außer für die <kbd>Esc</kbd>-Taste oder eine vom Benutzeragenten reservierte Tastenkombination)
  - [`mousedown`](/de/docs/Web/API/Element/mousedown_event)
  - [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event) (wenn `pointerType` "mouse" ist)
  - [`pointerup`](/de/docs/Web/API/Element/pointerup_event) (wenn `pointerType` nicht "mouse" ist)
  - [`touchend`](/de/docs/Web/API/Element/touchend_event)

Wenn eine Aktivierung ausgelöst wurde, unterscheidet der Benutzeragent zwischen zwei Arten von Benutzeraktivierungsfensterzuständen: sticky und transient.

## Transiente Aktivierung

{{Glossary("Transient activation")}} ist ein Fensterzustand, der anzeigt, dass ein Benutzer kürzlich eine Taste gedrückt, die Maus bewegt, ein Menü verwendet oder eine andere Benutzerinteraktion durchgeführt hat. Transiente Aktivierung läuft nach einem Timeout ab (wenn sie nicht durch weitere Interaktionen erneuert wird) und kann auch von einigen APIs genutzt werden (wie {{domxref("Window.open()")}}).

APIs, die transiente Aktivierung erfordern (Liste ist nicht erschöpfend):

- {{domxref("Clients.openWindow()")}}
- {{domxref("Clipboard.read()")}}
- {{domxref("Clipboard.readText()")}}
- {{domxref("Clipboard.write()")}}
- {{domxref("Clipboard.writeText()")}}
- {{domxref("ContactsManager.select()")}}
- {{domxref("Document.requestStorageAccess()")}}
- {{domxref("DocumentPictureInPicture.requestWindow()")}}
- {{domxref("Element.requestFullScreen()")}}
- {{domxref("Element.requestPointerLock()")}}
- {{domxref("EyeDropper.open()")}}
- {{domxref("GPUAdapter.requestAdapterInfo()")}}
- {{domxref("HID.requestDevice()")}}
- {{domxref("HTMLInputElement.showPicker()")}}
- {{domxref("HTMLSelectElement.showPicker()")}}
- {{domxref("HTMLVideoElement.requestPictureInPicture()")}}
- {{domxref("IdleDetector/requestPermission_static", "IdleDetector.requestPermission()")}}
- {{domxref("Keyboard.lock()")}}
- {{domxref("MediaDevices.getDisplayMedia()")}}
- `MediaDevices.getViewportMedia()`
- {{domxref("MediaDevices.selectAudioOutput()")}}
- `MediaStreamTrack.sendCaptureAction()`
- {{domxref("Navigator.share()")}}
- {{domxref("PaymentRequest.show()")}}
- {{domxref("PresentationRequest.start()")}}
- {{domxref("RemotePlayback.prompt()")}}
- {{domxref("Serial.requestPort()")}}
- {{domxref("USB.requestDevice()")}}
- {{domxref("Keyboard.lock()")}}
- {{domxref("Window.getScreenDetails()")}}
- {{domxref("Window.open()")}}
- {{domxref("Window.queryLocalFonts()")}}
- {{domxref("Window.showOpenFilePicker()")}}
- {{domxref("Window.showSaveFilePicker()")}}
- {{domxref("Window.showDirectoryPicker()")}}
- {{domxref("WindowClient.focus()")}}
- {{domxref("XRSystem.requestSession()")}}

## Sticky Aktivierung

{{Glossary("Sticky activation")}} ist ein Fensterzustand, der anzeigt, dass ein Benutzer eine Taste gedrückt, die Maus bewegt, ein Menü verwendet oder eine andere Benutzerinteraktion durchgeführt hat. Es wird nach dem ersten Setzen nicht zurückgesetzt (im Gegensatz zur transienten Aktivierung).

APIs, die eine sticky Aktivierung erfordern (nicht erschöpfend):

- {{domxref("Window/beforeunload_event", "beforeunload")}} Ereignis
- {{domxref("Navigator.vibrate()")}}
- {{domxref("VirtualKeyboard.show()")}}
- Automatische Wiedergabe von [Media und Web Audio APIs](/de/docs/Web/Media/Autoplay_guide) (insbesondere für [`AudioContexts`](/de/docs/Web/API/AudioContext)).

## UserActivation API

Um programmatisch zu bestimmen, ob ein Fenster entweder eine sticky oder transiente Benutzeraktivierung hat, bietet die {{domxref("UserActivation")}} API zwei Eigenschaften, die mit {{domxref("navigator.userActivation")}} verfügbar sind:

- {{domxref("UserActivation.hasBeenActive")}} zeigt an, ob das Fenster eine sticky Benutzeraktivierung hat.
- {{domxref("UserActivation.isActive")}} zeigt an, ob das Fenster eine transiente Benutzeraktivierung hat.

## Siehe auch

- {{Glossary("Transient activation")}}
- {{Glossary("Sticky activation")}}
- {{domxref("UserActivation")}} API
- [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts)
