---
title: Features, die durch Benutzeraktivierung gesteuert werden
slug: Web/Security/User_activation
l10n:
  sourceCommit: f568a3d3b0d6be07e8e6386364a9a53b05fe7512
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Um sicherzustellen, dass Anwendungen keine APIs missbrauchen können, die ein schlechtes Benutzererlebnis schaffen, wenn das Verhalten nicht gewünscht ist, können einige APIs nur genutzt werden, wenn der Benutzer sich in einem "aktiven Interaktionszustand" befindet. Das bedeutet, der Benutzer interagiert gerade mit der Webseite oder hat mindestens einmal mit der Seite interagiert. Browser beschränken den Zugriff auf sensible APIs wie Pop-ups, Vollbild oder Vibrations-APIs auf aktive Benutzerinteraktionen, um zu verhindern, dass bösartige Skripte diese Funktionen missbrauchen. Diese Seite listet Web-Plattformfunktionen auf, die nur nach Benutzeraktivierung verfügbar sind.

Eine Benutzeraktivierung impliziert entweder, dass der Nutzer derzeit mit der Seite interagiert, oder eine Interaktion seit dem Laden der Seite abgeschlossen hat. Typischerweise ist dies ein Klick auf einen Button oder eine andere Benutzerinteraktion mit der Benutzeroberfläche.

Genauer gesagt ist ein _Aktivierungsauslösendes Eingabeereignis_ ein Ereignis, das folgende Eigenschaften hat:

- das Attribut [`isTrusted`](/de/docs/Web/API/Event/isTrusted) ist auf `true` gesetzt, und
- es handelt sich um ein Ereignis folgender Typen:
  - [`keydown`](/de/docs/Web/API/Element/keydown_event) (außer für die <kbd>Esc</kbd>-Taste oder eine vom Benutzeragenten reservierte Tastenkombination)
  - [`mousedown`](/de/docs/Web/API/Element/mousedown_event)
  - [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event) (wenn `pointerType` "mouse" ist)
  - [`pointerup`](/de/docs/Web/API/Element/pointerup_event) (wenn `pointerType` nicht "mouse" ist)
  - [`touchend`](/de/docs/Web/API/Element/touchend_event)

Wenn eine Aktivierung ausgelöst wurde, unterscheidet der Benutzeragent zwischen zwei Arten von Fensterzuständen der Benutzeraktivierung: sticky und transient.

## Transiente Aktivierung

[Transiente Aktivierung](/de/docs/Glossary/Transient_activation) ist ein Fensterzustand, der anzeigt, dass ein Benutzer kürzlich eine Taste gedrückt, die Maus bewegt, ein Menü verwendet oder eine andere Benutzerinteraktion durchgeführt hat. Transiente Aktivierung läuft nach einer Zeitüberschreitung ab (wenn sie nicht durch weitere Interaktion erneuert wird) und kann auch von einigen APIs konsumiert werden (wie [`Window.open()`](/de/docs/Web/API/Window/open)).

APIs, die transiente Aktivierung erfordern (Liste ist nicht erschöpfend):

- [`Clients.openWindow()`](/de/docs/Web/API/Clients/openWindow)
- [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read)
- [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText)
- [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write)
- [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText)
- [`ContactsManager.select()`](/de/docs/Web/API/ContactsManager/select)
- [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)
- [`DocumentPictureInPicture.requestWindow()`](/de/docs/Web/API/DocumentPictureInPicture/requestWindow)
- [`Element.requestFullScreen()`](/de/docs/Web/API/Element/requestFullScreen)
- [`Element.requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock)
- [`EyeDropper.open()`](/de/docs/Web/API/EyeDropper/open)
- [`GPUAdapter.requestAdapterInfo()`](/de/docs/Web/API/GPUAdapter/requestAdapterInfo)
- [`HID.requestDevice()`](/de/docs/Web/API/HID/requestDevice)
- [`HTMLInputElement.showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
- [`HTMLSelectElement.showPicker()`](/de/docs/Web/API/HTMLSelectElement/showPicker)
- [`HTMLVideoElement.requestPictureInPicture()`](/de/docs/Web/API/HTMLVideoElement/requestPictureInPicture)
- [`IdleDetector.requestPermission()`](/de/docs/Web/API/IdleDetector/requestPermission_static)
- [`Keyboard.lock()`](/de/docs/Web/API/Keyboard/lock)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
- `MediaDevices.getViewportMedia()`
- [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput)
- `MediaStreamTrack.sendCaptureAction()`
- [`Navigator.share()`](/de/docs/Web/API/Navigator/share)
- [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show)
- [`PresentationRequest.start()`](/de/docs/Web/API/PresentationRequest/start)
- [`RemotePlayback.prompt()`](/de/docs/Web/API/RemotePlayback/prompt)
- [`Serial.requestPort()`](/de/docs/Web/API/Serial/requestPort)
- [`USB.requestDevice()`](/de/docs/Web/API/USB/requestDevice)
- [`Keyboard.lock()`](/de/docs/Web/API/Keyboard/lock)
- [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails)
- [`Window.open()`](/de/docs/Web/API/Window/open)
- [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts)
- [`Window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker)
- [`Window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker)
- [`Window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker)
- [`WindowClient.focus()`](/de/docs/Web/API/WindowClient/focus)
- [`XRSystem.requestSession()`](/de/docs/Web/API/XRSystem/requestSession)

## Sticky Aktivierung

[Sticky Aktivierung](/de/docs/Glossary/Sticky_activation) ist ein Fensterzustand, der anzeigt, dass ein Benutzer eine Taste gedrückt, die Maus bewegt, ein Menü verwendet oder eine andere Benutzerinteraktion durchgeführt hat. Sie wird nicht zurückgesetzt, nachdem sie einmal initialisiert wurde (anders als bei transienten Aktivierungen).

APIs, die eine sticky Aktivierung erfordern (nicht erschöpfend):

- [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) Ereignis
- [`Navigator.vibrate()`](/de/docs/Web/API/Navigator/vibrate)
- [`VirtualKeyboard.show()`](/de/docs/Web/API/VirtualKeyboard/show)
- Autoplay von [Media- und Web-Audio-APIs](/de/docs/Web/Media/Autoplay_guide) (insbesondere für [`AudioContexts`](/de/docs/Web/API/AudioContext)).

## UserActivation API

Um programmatisch zu bestimmen, ob ein Fenster eine sticky oder transiente Benutzeraktivierung hat, bietet die [`UserActivation`](/de/docs/Web/API/UserActivation) API zwei Eigenschaften, die über [`navigator.userActivation`](/de/docs/Web/API/Navigator/userActivation) verfügbar sind:

- [`UserActivation.hasBeenActive`](/de/docs/Web/API/UserActivation/hasBeenActive) zeigt an, ob das Fenster eine sticky Benutzeraktivierung hat.
- [`UserActivation.isActive`](/de/docs/Web/API/UserActivation/isActive) zeigt an, ob das Fenster eine transiente Benutzeraktivierung hat.

## Siehe auch

- [Transiente Aktivierung](/de/docs/Glossary/Transient_activation)
- [Sticky Aktivierung](/de/docs/Glossary/Sticky_activation)
- [`UserActivation`](/de/docs/Web/API/UserActivation) API
- [Features eingeschränkt auf sichere Kontexte](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts)
