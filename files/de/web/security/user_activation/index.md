---
title: Funktionen, die durch Benutzeraktivierung gesichert sind
slug: Web/Security/User_activation
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Um sicherzustellen, dass Anwendungen keine APIs missbrauchen können, die ein schlechtes Benutzererlebnis schaffen können, wenn das Verhalten unerwünscht ist, können einige APIs nur verwendet werden, wenn sich der Benutzer in einem "aktiven Interaktions"-Zustand befindet. Das bedeutet, dass der Benutzer derzeit mit der Webseite interagiert oder zumindest einmal mit der Seite interagiert hat. Browser beschränken den Zugriff auf sensible APIs wie Popups, Vollbildmodus oder Vibrations-APIs auf aktive Benutzerinteraktionen, um zu verhindern, dass bösartige Skripte diese Funktionen missbrauchen. Diese Seite listet Webplattformfunktionen auf, die nur nach einer Benutzeraktivierung verfügbar sind.

Eine Benutzeraktivierung impliziert entweder, dass der Benutzer derzeit mit der Seite interagiert oder seit dem Laden der Seite eine Interaktion abgeschlossen hat. Typischerweise ist dies ein Klick auf einen Button oder eine andere Benutzerinteraktion mit der Benutzeroberfläche.

Genauer gesagt, ist ein _auslösender Eingabeereignis für die Aktivierung_ ein Ereignis, das:

- das Attribut [`isTrusted`](/de/docs/Web/API/Event/isTrusted) auf `true` gesetzt hat, und
- ein Ereignis der folgenden Typen ist:
  - [`keydown`](/de/docs/Web/API/Element/keydown_event) (außer für die <kbd>Esc</kbd>-Taste oder eine vom Benutzeragenten reservierte Tastenkombination)
  - [`mousedown`](/de/docs/Web/API/Element/mousedown_event)
  - [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event) (wenn `pointerType` "mouse" ist)
  - [`pointerup`](/de/docs/Web/API/Element/pointerup_event) (wenn `pointerType` nicht "mouse" ist)
  - [`touchend`](/de/docs/Web/API/Element/touchend_event)

Wenn eine Aktivierung ausgelöst wurde, unterscheidet der Benutzeragent zwischen zwei Arten von Benutzeraktivierungsfensterzuständen: sticky und transient.

## Transiente Aktivierung

{{Glossary("Transient_activation", "Transiente Aktivierung")}} ist ein Fensterzustand, der anzeigt, dass ein Benutzer kürzlich eine Taste gedrückt, die Maus bewegt, ein Menü verwendet oder eine andere Benutzerinteraktion durchgeführt hat. Transiente Aktivierung läuft nach einem Timeout ab (wenn sie nicht durch weitere Interaktion erneuert wird) und kann auch von einigen APIs verbraucht werden (wie [`Window.open()`](/de/docs/Web/API/Window/open)).

APIs, die transiente Aktivierung erfordern (nicht abschließend):

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
- [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails)
- [`Window.open()`](/de/docs/Web/API/Window/open)
- [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts)
- [`Window.showDirectoryPicker()`](/de/docs/Web/API/Window/showDirectoryPicker)
- [`Window.showOpenFilePicker()`](/de/docs/Web/API/Window/showOpenFilePicker)
- [`Window.showSaveFilePicker()`](/de/docs/Web/API/Window/showSaveFilePicker)
- [`WindowClient.focus()`](/de/docs/Web/API/WindowClient/focus)
- [`XRSystem.requestSession()`](/de/docs/Web/API/XRSystem/requestSession)

## Sticky Aktivierung

{{Glossary("Sticky_activation", "Sticky Aktivierung")}} ist ein Fensterzustand, der anzeigt, dass ein Benutzer eine Taste gedrückt, die Maus bewegt, ein Menü verwendet oder eine andere Benutzerinteraktion durchgeführt hat. Sie wird, im Gegensatz zur transienten Aktivierung, nicht zurückgesetzt, nachdem sie initial gesetzt wurde.

APIs, die sticky Aktivierung erfordern (nicht abschließend):

- [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) Ereignis
- [`Navigator.vibrate()`](/de/docs/Web/API/Navigator/vibrate)
- [`VirtualKeyboard.show()`](/de/docs/Web/API/VirtualKeyboard/show)
- Autoplay von [Medien- und Web-Audio-APIs](/de/docs/Web/Media/Guides/Autoplay) (insbesondere für [`AudioContexts`](/de/docs/Web/API/AudioContext)).

## UserActivation API

Um programmatisch festzustellen, ob ein Fenster entweder eine sticky oder transiente Benutzeraktivierung hat, bietet die [`UserActivation`](/de/docs/Web/API/UserActivation) API zwei Eigenschaften, die über [`navigator.userActivation`](/de/docs/Web/API/Navigator/userActivation) abgerufen werden können:

- [`UserActivation.hasBeenActive`](/de/docs/Web/API/UserActivation/hasBeenActive) zeigt an, ob das Fenster eine sticky Benutzeraktivierung hat.
- [`UserActivation.isActive`](/de/docs/Web/API/UserActivation/isActive) zeigt an, ob das Fenster eine transiente Benutzeraktivierung hat.

## Siehe auch

- {{Glossary("Transient_activation", "Transiente Aktivierung")}}
- {{Glossary("Sticky_activation", "Sticky Aktivierung")}}
- [`UserActivation`](/de/docs/Web/API/UserActivation) API
- [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts)
