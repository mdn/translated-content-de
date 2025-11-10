---
title: Merkmale, die durch Benutzeraktivierung gesteuert werden
slug: Web/Security/User_activation
l10n:
  sourceCommit: 2baf3fbe98ef76049f9eb78700ab5a7d71cea05b
---

Um sicherzustellen, dass Anwendungen nicht in der Lage sind, APIs zu missbrauchen, die eine schlechte Benutzererfahrung schaffen können, wenn das Verhalten nicht erwünscht ist, können einige APIs nur verwendet werden, wenn der Benutzer in einem Zustand der "aktiven Interaktion" ist. Dies bedeutet, dass der Benutzer derzeit mit der Webseite interagiert oder mindestens einmal mit der Seite interagiert hat. Browser beschränken den Zugriff auf sensible APIs wie Popups, Vollbild- oder Vibrations-APIs auf aktive Benutzerinteraktionen, um zu verhindern, dass bösartige Skripte diese Funktionen missbrauchen. Diese Seite listet Webplattform-Funktionen auf, die nur nach Benutzeraktivierung verfügbar sind.

Eine Benutzeraktivierung bedeutet entweder, dass der Benutzer derzeit mit der Seite interagiert oder seit dem Laden der Seite eine Interaktion abgeschlossen hat. Typischerweise handelt es sich dabei um einen Klick auf einen Button oder eine andere Interaktion mit der Benutzeroberfläche.

Genauer gesagt ist ein _Aktivierung-auslösendes Eingabeereignis_ ein Ereignis, das:

- das [`isTrusted`](/de/docs/Web/API/Event/isTrusted) Attribut auf `true` gesetzt hat, und
- eines der folgenden Typen ist:
  - [`keydown`](/de/docs/Web/API/Element/keydown_event) (außer der <kbd>Esc</kbd>-Taste oder einer vom Benutzeragenten reservierten Tastenkombination)
  - [`mousedown`](/de/docs/Web/API/Element/mousedown_event)
  - [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event) (wenn `pointerType` "mouse" ist)
  - [`pointerup`](/de/docs/Web/API/Element/pointerup_event) (wenn `pointerType` nicht "mouse" ist)
  - [`touchend`](/de/docs/Web/API/Element/touchend_event)

Wurde eine Aktivierung ausgelöst, unterscheidet der Benutzeragent zwischen zwei Arten von Fensterzuständen der Benutzeraktivierung: sticky und transient.

## Vergleich zwischen transienter und sticky Aktivierung

Der Unterschied zwischen transienter und sticky Aktivierung besteht darin, dass transiente Aktivierung nur für kurze Zeit anhält und in einigen Fällen verbraucht (deaktiviert) werden kann, wenn eine geschützte Funktion genutzt wird, während sticky Aktivierung bis zum Ende der Sitzung bestehen bleibt.

Das Sperren von Funktionen bei transienten Aktivierungen stellt sicher, dass sie nur verfügbar sind, wenn sie direkt von einem Benutzer ausgelöst werden. Sticky Aktivierung hingegen wird hauptsächlich verwendet, um Funktionen zu beschränken, die nicht automatisch beim Laden der Seite ausgelöst werden sollten, wie z.B. Popups.

## Transiente Aktivierung

{{Glossary("Transient_activation", "Transiente Aktivierung")}} ist ein Fensterzustand, der darauf hinweist, dass ein Benutzer kürzlich einen Button gedrückt oder eine andere Benutzerinteraktion durchgeführt hat. Transiente Aktivierung läuft nach einem Timeout ab (wenn sie nicht durch weitere Interaktion erneuert wird) und kann auch durch einige APIs verbraucht werden (wie [`Window.open()`](/de/docs/Web/API/Window/open)).

APIs, die transiente Aktivierung erfordern (Liste ist nicht vollständig):

- [`Clients.openWindow()`](/de/docs/Web/API/Clients/openWindow)
- [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read)
- [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText)
- [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write)
- [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText)
- [`ContactsManager.select()`](/de/docs/Web/API/ContactsManager/select)
- [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)
- [`DocumentPictureInPicture.requestWindow()`](/de/docs/Web/API/DocumentPictureInPicture/requestWindow)
- [`Element.requestFullScreen()`](/de/docs/Web/API/Element/requestFullscreen)
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

{{Glossary("Sticky_activation", "Sticky Aktivierung")}} ist ein Fensterzustand, der darauf hinweist, dass ein Benutzer irgendwann in der Sitzung einen Button gedrückt, ein Menü verwendet oder eine andere Benutzerinteraktion durchgeführt hat. Sie wird nach der erstmaligen Einstellung nicht zurückgesetzt (im Gegensatz zur transienten Aktivierung).

APIs, die sticky Aktivierung erfordern (nicht vollständig):

- [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) Ereignis
- [`Navigator.vibrate()`](/de/docs/Web/API/Navigator/vibrate)
- [`VirtualKeyboard.show()`](/de/docs/Web/API/VirtualKeyboard/show)
- Autoplay von [Media und Web Audio APIs](/de/docs/Web/Media/Guides/Autoplay) (insbesondere für [`AudioContexts`](/de/docs/Web/API/AudioContext)).

## UserActivation API

Um programmatisch zu bestimmen, ob ein Fenster entweder sticky oder transiente Benutzeraktivierung hat, bietet die [`UserActivation`](/de/docs/Web/API/UserActivation) API zwei Eigenschaften, die über [`navigator.userActivation`](/de/docs/Web/API/Navigator/userActivation) verfügbar sind:

- [`UserActivation.hasBeenActive`](/de/docs/Web/API/UserActivation/hasBeenActive) zeigt an, ob das Fenster sticky Benutzeraktivierung hat.
- [`UserActivation.isActive`](/de/docs/Web/API/UserActivation/isActive) zeigt an, ob das Fenster transiente Benutzeraktivierung hat.

## Siehe auch

- {{Glossary("Transient_activation", "Transiente Aktivierung")}}
- {{Glossary("Sticky_activation", "Sticky Aktivierung")}}
- [`UserActivation`](/de/docs/Web/API/UserActivation) API
- [Merkmale, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts)
