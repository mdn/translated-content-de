---
title: Funktionen, die durch Benutzeraktivierung gesteuert werden
slug: Web/Security/User_activation
l10n:
  sourceCommit: f568a3d3b0d6be07e8e6386364a9a53b05fe7512
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Um sicherzustellen, dass Anwendungen APIs, die ein schlechtes Nutzererlebnis schaffen können, nicht missbrauchen, wenn das Verhalten nicht erwünscht ist, können einige APIs nur verwendet werden, wenn der Benutzer in einem Zustand der "aktiven Interaktion" ist. Das bedeutet, der Benutzer interagiert derzeit mit der Webseite oder hat mindestens einmal mit der Seite interagiert. Browser beschränken den Zugriff auf sensible APIs wie Pop-ups, Vollbild- oder Vibrations-APIs auf aktive Benutzerinteraktionen, um zu verhindern, dass bösartige Skripte diese Funktionen missbrauchen. Diese Seite listet die Web-Plattformfunktionen auf, die nur nach Benutzeraktivierung verfügbar sind.

Eine Benutzeraktivierung bedeutet entweder, dass der Benutzer derzeit mit der Seite interagiert, oder dass er seit dem Laden der Seite eine Interaktion abgeschlossen hat. Typischerweise handelt es sich dabei um einen Klick auf einen Button oder eine andere Benutzerinteraktion mit der Benutzeroberfläche.

Genauer gesagt ist ein _Ereignis, das die Aktivierung auslöst_, ein Ereignis, das:

- das Attribut [`isTrusted`](/de/docs/Web/API/Event/isTrusted) auf `true` gesetzt hat, und
- ein Ereignis der folgenden Typen ist:
  - [`keydown`](/de/docs/Web/API/Element/keydown_event) (außer für die <kbd>Esc</kbd>-Taste oder eine vom Benutzeragenten reservierte Schlüsselkombination)
  - [`mousedown`](/de/docs/Web/API/Element/mousedown_event)
  - [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event) (wenn `pointerType` "mouse" ist)
  - [`pointerup`](/de/docs/Web/API/Element/pointerup_event) (wenn `pointerType` nicht "mouse" ist)
  - [`touchend`](/de/docs/Web/API/Element/touchend_event)

Wenn eine Aktivierung ausgelöst wurde, unterscheidet der Benutzeragent zwischen zwei Arten von Fensterstatus der Benutzeraktivierung: sticky und transient.

## Transiente Aktivierung

[Transiente Aktivierung](/de/docs/Glossary/Transient_activation) ist ein Fensterstatus, der anzeigt, dass ein Benutzer kürzlich eine Taste gedrückt, die Maus bewegt, ein Menü verwendet oder eine andere Benutzerinteraktion durchgeführt hat. Eine transiente Aktivierung erlischt nach einem Timeout (wenn sie nicht durch weitere Interaktion erneuert wird) und kann auch von einigen APIs konsumiert werden (wie [`Window.open()`](/de/docs/Web/API/Window/open)).

APIs, die transiente Aktivierung erfordern (die Liste ist nicht erschöpfend):

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

[Sticky Aktivierung](/de/docs/Glossary/Sticky_activation) ist ein Fensterstatus, der anzeigt, dass ein Benutzer eine Taste gedrückt, die Maus bewegt, ein Menü verwendet oder eine andere Benutzerinteraktion durchgeführt hat. Sie wird nicht zurückgesetzt, nachdem sie einmalig gesetzt wurde (im Gegensatz zur transienten Aktivierung).

APIs, die eine sticky Aktivierung erfordern (nicht erschöpfend):

- [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) Ereignis
- [`Navigator.vibrate()`](/de/docs/Web/API/Navigator/vibrate)
- [`VirtualKeyboard.show()`](/de/docs/Web/API/VirtualKeyboard/show)
- Autoplay von [Media und Web Audio APIs](/de/docs/Web/Media/Autoplay_guide) (insbesondere für [`AudioContexts`](/de/docs/Web/API/AudioContext)).

## UserActivation API

Um programmatisch festzustellen, ob ein Fenster entweder eine sticky oder eine transiente Benutzeraktivierung hat, bietet die [`UserActivation`](/de/docs/Web/API/UserActivation) API zwei Eigenschaften, die über [`navigator.userActivation`](/de/docs/Web/API/Navigator/userActivation) verfügbar sind:

- [`UserActivation.hasBeenActive`](/de/docs/Web/API/UserActivation/hasBeenActive) gibt an, ob das Fenster eine sticky Benutzeraktivierung hat.
- [`UserActivation.isActive`](/de/docs/Web/API/UserActivation/isActive) gibt an, ob das Fenster eine transiente Benutzeraktivierung hat.

## Siehe auch

- [Transiente Aktivierung](/de/docs/Glossary/Transient_activation)
- [Sticky Aktivierung](/de/docs/Glossary/Sticky_activation)
- [`UserActivation`](/de/docs/Web/API/UserActivation) API
- [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts)
