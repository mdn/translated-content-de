---
title: Benutzeraktivierung
slug: Web/Security/Defenses/User_activation
l10n:
  sourceCommit: bce3c7c8ee532a9f4026ace7be8ac20deb71834a
---

Damit Anwendungen APIs, die bei unerwünschter Verwendung das Nutzungserlebnis beeinträchtigen können, nicht missbrauchen, lassen sich manche APIs nur verwenden, wenn eine Benutzeraktivierung vorliegt. Das bedeutet, dass eine Person gerade mit der Webseite interagiert oder seit dem Laden der Seite mindestens einmal mit ihr interagiert hat.
Browser beschränken den Zugriff auf sensible APIs, etwa für Pop-ups, den Vollbildmodus oder Vibrationen, auf solche Benutzerinteraktionen. So verhindern sie, dass schädliche Skripte diese Funktionen missbrauchen.
Diese Seite listet Funktionen der Webplattform auf, die erst nach einer Benutzeraktivierung verfügbar sind.

Eine Benutzeraktivierung bedeutet entweder, dass eine Person gerade mit der Seite interagiert oder seit dem Laden der Seite eine Interaktion abgeschlossen hat.
Typischerweise ist das ein Klick auf eine Schaltfläche oder eine andere Interaktion mit der Benutzeroberfläche.

Genauer gesagt ist ein _aktivierungsauslösendes Eingabeereignis_ ein Ereignis, das:

- dessen Attribut [`isTrusted`](/de/docs/Web/API/Event/isTrusted) auf `true` gesetzt ist und
- einem der folgenden Typen entspricht:
  - [`keydown`](/de/docs/Web/API/Element/keydown_event) (ausgenommen die Taste <kbd>Esc</kbd>, vom Browser reservierte Tastenkombinationen und bestimmte Tasten, die keine Benutzeraktivierung auslösen und je nach Tastatur variieren, etwa <kbd>Caps Lock</kbd>, <kbd>Num Lock</kbd> und <kbd>Print Screen</kbd>. Das Verhalten kann je nach Browser unterschiedlich sein.)

  - [`mousedown`](/de/docs/Web/API/Element/mousedown_event)
  - [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event) (wenn `pointerType` „mouse“ ist)
  - [`pointerup`](/de/docs/Web/API/Element/pointerup_event) (wenn `pointerType` nicht „mouse“ ist)
  - [`touchend`](/de/docs/Web/API/Element/touchend_event)

Wenn eine Aktivierung ausgelöst wurde, unterscheidet der User Agent zwischen zwei Zuständen der Benutzeraktivierung für ein Fenster: dauerhafte und vorübergehende Aktivierung.

## Vergleich zwischen vorübergehender und dauerhafter Aktivierung

Der Unterschied besteht darin, dass eine vorübergehende Aktivierung nur kurze Zeit anhält und in manchen Fällen durch die Nutzung einer geschützten Funktion aufgebraucht (deaktiviert) werden kann. Eine dauerhafte Aktivierung bleibt dagegen bis zum Ende der Sitzung bestehen.

Wenn Funktionen eine vorübergehende Aktivierung voraussetzen, sind sie nur verfügbar, wenn sie unmittelbar durch eine Benutzerinteraktion ausgelöst werden.
Eine dauerhafte Aktivierung dient hingegen vor allem dazu, Funktionen einzuschränken, die nicht automatisch beim Laden der Seite ausgelöst werden sollten, etwa Pop-ups.

## Vorübergehende Aktivierung

Eine {{Glossary("Transient_activation", "vorübergehende Aktivierung")}} ist ein Fensterzustand, der anzeigt, dass eine Person kürzlich eine Schaltfläche gedrückt oder eine andere Benutzerinteraktion ausgeführt hat.
Sie läuft nach einer bestimmten Zeit ab, sofern sie nicht durch eine weitere Interaktion erneuert wird, und kann auch von manchen APIs (wie [`Window.open()`](/de/docs/Web/API/Window/open)) aufgebraucht werden.

APIs, die eine vorübergehende Aktivierung erfordern (Liste nicht vollständig):

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
- [`LanguageModel.create()`](/de/docs/Web/API/LanguageModel/create_static)
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

## Dauerhafte Aktivierung

Eine {{Glossary("Sticky_activation", "dauerhafte Aktivierung")}} ist ein Fensterzustand, der anzeigt, dass eine Person irgendwann während der Sitzung eine Schaltfläche gedrückt, ein Menü verwendet oder eine andere Benutzerinteraktion ausgeführt hat.
Anders als eine vorübergehende Aktivierung wird sie nach ihrer erstmaligen Auslösung nicht zurückgesetzt.

APIs und Funktionen, die eine dauerhafte Aktivierung erfordern (Liste nicht vollständig):

- [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)-Ereignis
- [`Navigator.vibrate()`](/de/docs/Web/API/Navigator/vibrate)
- [`VirtualKeyboard.show()`](/de/docs/Web/API/VirtualKeyboard/show)
- Automatische Wiedergabe der [Media- und Web-Audio-APIs](/de/docs/Web/Media/Guides/Autoplay) (insbesondere für [`AudioContexts`](/de/docs/Web/API/AudioContext)).
- [`clipboardchange`](/de/docs/Web/API/Clipboard/clipboardchange_event)-Ereignisse (diese können auch aktiviert werden, wenn die Person die Berechtigung `clipboard-read` erteilt).

## UserActivation API

Um programmatisch festzustellen, ob für ein Fenster eine dauerhafte oder vorübergehende Benutzeraktivierung vorliegt, stellt die [`UserActivation`](/de/docs/Web/API/UserActivation) API zwei Eigenschaften bereit, die über [`navigator.userActivation`](/de/docs/Web/API/Navigator/userActivation) zugänglich sind:

- [`UserActivation.hasBeenActive`](/de/docs/Web/API/UserActivation/hasBeenActive) gibt an, ob für das Fenster eine dauerhafte Benutzeraktivierung vorliegt.
- [`UserActivation.isActive`](/de/docs/Web/API/UserActivation/isActive) gibt an, ob für das Fenster eine vorübergehende Benutzeraktivierung vorliegt.

## Siehe auch

- {{Glossary("Transient_activation", "Vorübergehende Aktivierung")}}
- {{Glossary("Sticky_activation", "Dauerhafte Aktivierung")}}
- [`UserActivation`](/de/docs/Web/API/UserActivation) API
- [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts)
