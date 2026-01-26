---
title: Benutzeraktivierung
slug: Web/Security/Defenses/User_activation
l10n:
  sourceCommit: 0521262f24b89d6eec3199af0389147bec63d563
---

Um sicherzustellen, dass Anwendungen nicht in der Lage sind, APIs zu missbrauchen, die eine schlechte Benutzererfahrung schaffen können, wenn das Verhalten nicht gewünscht wird, können einige APIs nur verwendet werden, wenn der Benutzer sich in einem "aktiven Interaktionszustand" befindet. Dies bedeutet, dass der Benutzer derzeit mit der Webseite interagiert oder mindestens einmal mit der Seite interagiert hat.
Browser beschränken den Zugriff auf sensible APIs wie Popups, Vollbild oder Vibrations-APIs auf aktive Benutzerinteraktionen, um bösartige Skripte daran zu hindern, diese Funktionen zu missbrauchen.
Diese Seite listet Webplattform-Funktionen auf, die nur nach Benutzeraktivierung verfügbar sind.

Eine Benutzeraktivierung impliziert entweder, dass der Benutzer derzeit mit der Seite interagiert oder seit dem Laden der Seite eine Interaktion abgeschlossen hat.
Typischerweise handelt es sich dabei um einen Klick auf einen Button oder eine andere Interaktion mit der Benutzeroberfläche.

Genauer gesagt ist ein _Aktivierungsauslösendes Eingabeereignis_ ein Ereignis, das:

- das Attribut [`isTrusted`](/de/docs/Web/API/Event/isTrusted) auf `true` gesetzt hat und
- einer der folgenden Typen ist:
  - [`keydown`](/de/docs/Web/API/Element/keydown_event) (außer der <kbd>Esc</kbd>-Taste, browserreservierten Tastenkombinationen und bestimmten Tasten, die keine Benutzeraktivierung erzeugen, was je nach Tastatur variiert, wie z.B. <kbd>Caps Lock</kbd>, <kbd>Num Lock</kbd> und <kbd>Druck</kbd>). Das Verhalten kann je nach Browser variieren.

  - [`mousedown`](/de/docs/Web/API/Element/mousedown_event)
  - [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event) (wenn `pointerType` "mouse" ist)
  - [`pointerup`](/de/docs/Web/API/Element/pointerup_event) (wenn `pointerType` nicht "mouse" ist)
  - [`touchend`](/de/docs/Web/API/Element/touchend_event)

Wenn eine Aktivierung ausgelöst wurde, unterscheidet der User Agent zwischen zwei Arten von Benutzeraktivierungsfensterzuständen: sticky und transient.

## Vergleich zwischen transienter und sticky Aktivierung

Der Unterschied zwischen transienter und sticky Aktivierung besteht darin, dass die transiente Aktivierung nur für kurze Zeit anhält und in einigen Fällen verbraucht werden kann (deaktiviert wird), wenn eine geschützte Funktion verwendet wird, während die sticky Aktivierung bis zum Ende der Sitzung bestehen bleibt.

Das Sperren von Funktionen auf transiente Aktivierung stellt sicher, dass sie nur verfügbar sind, wenn sie direkt von einem Benutzer ausgelöst werden.
Sticky Aktivierung hingegen wird hauptsächlich verwendet, um Funktionen einzuschränken, die nicht automatisch beim Laden der Seite ausgelöst werden sollten, wie z.B. Popups.

## Transiente Aktivierung

{{Glossary("Transient_activation", "Transiente Aktivierung")}} ist ein Fensterzustand, der anzeigt, dass ein Benutzer kürzlich einen Knopf gedrückt oder eine andere Benutzerinteraktion durchgeführt hat.
Die transiente Aktivierung läuft nach einer Zeitüberschreitung ab (wenn sie nicht durch weitere Interaktion erneuert wird) und kann auch von einigen APIs verbraucht werden (wie [`Window.open()`](/de/docs/Web/API/Window/open)).

APIs, die transiente Aktivierung erfordern (Liste ist nicht erschöpfend):

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

{{Glossary("Sticky_activation", "Sticky Aktivierung")}} ist ein Fensterzustand, der anzeigt, dass ein Benutzer irgendwann in der Sitzung einen Knopf gedrückt, ein Menü verwendet oder eine andere Benutzerinteraktion durchgeführt hat.
Er wird nicht zurückgesetzt, nachdem er einmal gesetzt wurde (im Gegensatz zur transienten Aktivierung).

APIs, die sticky Aktivierung erfordern (nicht erschöpfend):

- [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) Ereignis
- [`Navigator.vibrate()`](/de/docs/Web/API/Navigator/vibrate)
- [`VirtualKeyboard.show()`](/de/docs/Web/API/VirtualKeyboard/show)
- Automatische Wiedergabe von [Media und Web Audio APIs](/de/docs/Web/Media/Guides/Autoplay) (insbesondere für [`AudioContexts`](/de/docs/Web/API/AudioContext)).

## UserActivation API

Um programmgesteuert zu bestimmen, ob ein Fenster entweder sticky oder transiente Benutzeraktivierung hat, stellt die [`UserActivation`](/de/docs/Web/API/UserActivation) API zwei Eigenschaften zur Verfügung, die über [`navigator.userActivation`](/de/docs/Web/API/Navigator/userActivation) verfügbar sind:

- [`UserActivation.hasBeenActive`](/de/docs/Web/API/UserActivation/hasBeenActive) zeigt an, ob das Fenster sticky Benutzeraktivierung hat.
- [`UserActivation.isActive`](/de/docs/Web/API/UserActivation/isActive) zeigt an, ob das Fenster transiente Benutzeraktivierung hat.

## Siehe auch

- {{Glossary("Transient_activation", "Transiente Aktivierung")}}
- {{Glossary("Sticky_activation", "Sticky Aktivierung")}}
- [`UserActivation`](/de/docs/Web/API/UserActivation) API
- [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts)
