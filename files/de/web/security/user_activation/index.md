---
title: Funktionen, die von der Nutzeraktivierung abhängig sind
slug: Web/Security/User_activation
l10n:
  sourceCommit: 225431159da2ef74dca5984e6f07bd8c5cae4df8
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Um sicherzustellen, dass Anwendungen keine APIs missbrauchen können, die bei unerwünschtem Verhalten eine schlechte Benutzererfahrung schaffen, können einige APIs nur verwendet werden, wenn sich der Benutzer in einem "aktiven Interaktionszustand" befindet. Das bedeutet, dass der Benutzer derzeit mit der Webseite interagiert oder mindestens einmal mit der Seite interagiert hat. Browser beschränken den Zugriff auf sensible APIs wie Pop-ups, Vollbildmodus oder Vibrations-APIs auf aktive Benutzerinteraktionen, um zu verhindern, dass bösartige Skripte diese Funktionen missbrauchen. Diese Seite listet Funktionen der Webplattform auf, die nur nach Nutzeraktivierung verfügbar sind.

Eine Nutzeraktivierung impliziert entweder, dass der Benutzer gerade mit der Seite interagiert, oder dass seit dem Laden der Seite eine Interaktion erfolgt ist. Typischerweise ist dies ein Klick auf einen Button oder eine andere Benutzerinteraktion mit der Benutzeroberfläche.

Genauer gesagt ist ein _Aktivierungsauslösendes Eingabeereignis_ ein Ereignis, das:

- das Attribut [`isTrusted`](/de/docs/Web/API/Event/isTrusted) auf `true` gesetzt hat, und
- ein Ereignis der folgenden Typen ist:
  - [`keydown`](/de/docs/Web/API/Element/keydown_event) (ausgenommen die <kbd>Esc</kbd>-Taste oder eine vom User-Agent reservierte Tastenkombination)
  - [`mousedown`](/de/docs/Web/API/Element/mousedown_event)
  - [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event) (wenn `pointerType` "mouse" ist)
  - [`pointerup`](/de/docs/Web/API/Element/pointerup_event) (wenn `pointerType` nicht "mouse" ist)
  - [`touchend`](/de/docs/Web/API/Element/touchend_event)

Wenn eine Aktivierung ausgelöst wurde, unterscheidet der User-Agent zwischen zwei Arten von Fensterzuständen der Nutzeraktivierung: Sticky und Transient.

## Transiente Aktivierung

{{Glossary("Transient_activation", "Transiente Aktivierung")}} ist ein Fensterzustand, der anzeigt, dass ein Benutzer kürzlich einen Button gedrückt, eine Maus bewegt, ein Menü verwendet oder eine andere Nutzerinteraktion durchgeführt hat. Transiente Aktivierung erlischt nach einem Timeout (falls sie nicht durch weitere Interaktion erneuert wird) und kann auch von einigen APIs verbraucht werden (wie [`Window.open()`](/de/docs/Web/API/Window/open)).

APIs, die eine transiente Aktivierung erfordern (Liste ist nicht abschließend):

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

{{Glossary("Sticky_activation", "Sticky Aktivierung")}} ist ein Fensterzustand, der anzeigt, dass ein Benutzer einen Button gedrückt, eine Maus bewegt, ein Menü verwendet oder eine andere Nutzerinteraktion durchgeführt hat. Sie wird nach ihrer erstmaligen Einstellung nicht zurückgesetzt (im Gegensatz zur transienten Aktivierung).

APIs, die eine sticky Aktivierung erfordern (nicht abschließend):

- [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) Ereignis
- [`Navigator.vibrate()`](/de/docs/Web/API/Navigator/vibrate)
- [`VirtualKeyboard.show()`](/de/docs/Web/API/VirtualKeyboard/show)
- Autoplay von [Media und Web Audio APIs](/de/docs/Web/Media/Autoplay_guide) (insbesondere für [`AudioContexts`](/de/docs/Web/API/AudioContext)).

## UserActivation API

Um programmatisch zu bestimmen, ob ein Fenster entweder sticky oder transiente Nutzeraktivierung hat, bietet die [`UserActivation`](/de/docs/Web/API/UserActivation) API zwei Eigenschaften, die über [`navigator.userActivation`](/de/docs/Web/API/Navigator/userActivation) verfügbar sind:

- [`UserActivation.hasBeenActive`](/de/docs/Web/API/UserActivation/hasBeenActive) zeigt an, ob das Fenster eine sticky Nutzeraktivierung hat.
- [`UserActivation.isActive`](/de/docs/Web/API/UserActivation/isActive) zeigt an, ob das Fenster eine transiente Nutzeraktivierung hat.

## Siehe auch

- {{Glossary("Transient_activation", "Transiente Aktivierung")}}
- {{Glossary("Sticky_activation", "Sticky Aktivierung")}}
- [`UserActivation`](/de/docs/Web/API/UserActivation) API
- [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts)
