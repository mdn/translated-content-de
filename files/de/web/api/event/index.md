---
title: Event
slug: Web/API/Event
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`Event`**-Schnittstelle repräsentiert ein Ereignis, das auf einem [`EventTarget`](/de/docs/Web/API/EventTarget) stattfindet.

Ein Ereignis kann durch Benutzeraktionen ausgelöst werden, z. B. durch Klicken der Maustaste oder Drücken einer Taste auf der Tastatur, oder durch APIs generiert werden, um den Fortschritt einer asynchronen Aufgabe darzustellen. Es kann auch programmatisch ausgelöst werden, etwa durch Aufrufen der [`HTMLElement.click()`](/de/docs/Web/API/HTMLElement/click)-Methode eines Elements oder durch Definieren des Ereignisses und anschließendes Senden an ein bestimmtes Ziel mit [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent).

Es gibt viele Arten von Ereignissen, von denen einige andere Schnittstellen basierend auf der Hauptschnittstelle `Event` verwenden. `Event` selbst enthält die Eigenschaften und Methoden, die für alle Ereignisse üblich sind.

Viele DOM-Elemente können so konfiguriert werden, dass sie diese Ereignisse akzeptieren (oder "lauschen") und Code ausführen, um sie zu verarbeiten (oder "behandeln"). Ereignis-Handler werden üblicherweise (oder "angebracht") an verschiedene [HTML-Elemente](/de/docs/Web/HTML/Element) (wie `<button>`, `<div>`, `<span>`, etc.) angeschlossen mittels [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), was in der Regel die Nutzung der alten HTML-[Ereignishandler-Attribute](/de/docs/Web/HTML/Global_attributes) ersetzt. Wenn sie richtig hinzugefügt wurden, können solche Handler bei Bedarf auch über [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) entfernt werden.

> [!NOTE]
> Ein Element kann mehrere solche Handler haben, sogar für dasselbe Ereignis—insbesondere, wenn separate, unabhängige Code-Module sie anbringen, jedes für seinen eigenen Zweck. (Zum Beispiel eine Webseite mit einem Werbemodul und einem Statistikmodul, die beide das Anschauen von Videos überwachen.)

Wenn es viele verschachtelte Elemente gibt, die jeweils eigene Handler haben, kann die Ereignisverarbeitung sehr kompliziert werden—besonders wenn ein Elternelement dasselbe Ereignis erhält wie seine Kindelemente, weil sie "räumlich" überlappen und das Ereignis technisch in beiden auftritt. Die Reihenfolge der Verarbeitung solcher Ereignisse hängt von den [Event Bubbling](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling)-Einstellungen jedes ausgelösten Handlers ab.

## Schnittstellen basierend auf Event

Unten befindet sich eine Liste von Schnittstellen, die auf der Hauptschnittstelle `Event` basieren, mit Links zu deren jeweiliger Dokumentation im MDN API-Referenz.

Beachten Sie, dass alle Ereignisschnittstellen Namen haben, die mit "Event" enden.

- [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
- [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent) {{Deprecated_Inline}}
- [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent)
- [`BlobEvent`](/de/docs/Web/API/BlobEvent)
- [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent)
- [`CloseEvent`](/de/docs/Web/API/CloseEvent)
- [`CompositionEvent`](/de/docs/Web/API/CompositionEvent)
- [`CustomEvent`](/de/docs/Web/API/CustomEvent)
- [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent)
- [`DeviceOrientationEvent`](/de/docs/Web/API/DeviceOrientationEvent)
- [`DragEvent`](/de/docs/Web/API/DragEvent)
- [`ErrorEvent`](/de/docs/Web/API/ErrorEvent)
- [`FetchEvent`](/de/docs/Web/API/FetchEvent)
- [`FocusEvent`](/de/docs/Web/API/FocusEvent)
- [`FontFaceSetLoadEvent`](/de/docs/Web/API/FontFaceSetLoadEvent)
- [`FormDataEvent`](/de/docs/Web/API/FormDataEvent)
- [`GamepadEvent`](/de/docs/Web/API/GamepadEvent)
- [`HashChangeEvent`](/de/docs/Web/API/HashChangeEvent)
- [`HIDInputReportEvent`](/de/docs/Web/API/HIDInputReportEvent)
- [`IDBVersionChangeEvent`](/de/docs/Web/API/IDBVersionChangeEvent)
- [`InputEvent`](/de/docs/Web/API/InputEvent)
- [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent)
- [`MediaStreamEvent`](/de/docs/Web/API/MediaStreamEvent) {{Deprecated_Inline}}
- [`MessageEvent`](/de/docs/Web/API/MessageEvent)
- [`MouseEvent`](/de/docs/Web/API/MouseEvent)
- [`MutationEvent`](/de/docs/Web/API/MutationEvent) {{Deprecated_Inline}}
- [`OfflineAudioCompletionEvent`](/de/docs/Web/API/OfflineAudioCompletionEvent)
- [`PageTransitionEvent`](/de/docs/Web/API/PageTransitionEvent)
- [`PaymentRequestUpdateEvent`](/de/docs/Web/API/PaymentRequestUpdateEvent)
- [`PointerEvent`](/de/docs/Web/API/PointerEvent)
- [`PopStateEvent`](/de/docs/Web/API/PopStateEvent)
- [`ProgressEvent`](/de/docs/Web/API/ProgressEvent)
- [`RTCDataChannelEvent`](/de/docs/Web/API/RTCDataChannelEvent)
- [`RTCPeerConnectionIceEvent`](/de/docs/Web/API/RTCPeerConnectionIceEvent)
- [`StorageEvent`](/de/docs/Web/API/StorageEvent)
- [`SubmitEvent`](/de/docs/Web/API/SubmitEvent)
- [`SVGEvent`](/de/docs/Web/API/SVGEvent) {{Deprecated_Inline}}
- [`TimeEvent`](/de/docs/Web/API/TimeEvent)
- [`TouchEvent`](/de/docs/Web/API/TouchEvent)
- [`TrackEvent`](/de/docs/Web/API/TrackEvent)
- [`TransitionEvent`](/de/docs/Web/API/TransitionEvent)
- [`UIEvent`](/de/docs/Web/API/UIEvent)
- [`WebGLContextEvent`](/de/docs/Web/API/WebGLContextEvent)
- [`WheelEvent`](/de/docs/Web/API/WheelEvent)

## Konstruktor

- [`Event()`](/de/docs/Web/API/Event/Event)
  - : Erstellt ein `Event`-Objekt und gibt es an den Aufrufer zurück.

## Instanz-Eigenschaften

- [`Event.bubbles`](/de/docs/Web/API/Event/bubbles) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob das Ereignis durch das DOM aufsteigt.
- [`Event.cancelable`](/de/docs/Web/API/Event/cancelable) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob das Ereignis abgebrochen werden kann.
- [`Event.composed`](/de/docs/Web/API/Event/composed) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der anzeigt, ob das Ereignis die Grenze zwischen dem Shadow DOM und dem regulären DOM überschreiten kann.
- [`Event.currentTarget`](/de/docs/Web/API/Event/currentTarget) {{ReadOnlyInline}}
  - : Eine Referenz auf das aktuell registrierte Ziel des Ereignisses. Dies ist das Objekt, an das das Ereignis derzeit gesendet werden soll. Es ist möglich, dass dies während des _Retargeting_ geändert wurde.
- [`Event.defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented) {{ReadOnlyInline}}
  - : Gibt an, ob der Aufruf von [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) das Ereignis abgebrochen hat.
- [`Event.eventPhase`](/de/docs/Web/API/Event/eventPhase) {{ReadOnlyInline}}
  - : Gibt an, welche Phase des Ereignisflusses verarbeitet wird. Es ist eine der folgenden Nummern: `NONE`, `CAPTURING_PHASE`, `AT_TARGET`, `BUBBLING_PHASE`.
- [`Event.isTrusted`](/de/docs/Web/API/Event/isTrusted) {{ReadOnlyInline}}
  - : Gibt an, ob das Ereignis vom Browser initiiert wurde (zum Beispiel nach einem Benutzerklick) oder von einem Skript (zum Beispiel durch eine Ereigniserstellungsmethode).
- [`Event.srcElement`](/de/docs/Web/API/Event/srcElement) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Ein Alias für die Eigenschaft [`Event.target`](/de/docs/Web/API/Event/target). Verwenden Sie stattdessen [`Event.target`](/de/docs/Web/API/Event/target).
- [`Event.target`](/de/docs/Web/API/Event/target) {{ReadOnlyInline}}
  - : Eine Referenz auf das Objekt, an das das Ereignis ursprünglich gesendet wurde.
- [`Event.timeStamp`](/de/docs/Web/API/Event/timeStamp) {{ReadOnlyInline}}
  - : Der Zeitpunkt, zu dem das Ereignis erzeugt wurde (in Millisekunden). Laut Spezifikation ist dieser Wert die Zeit seit dem Epochenbeginn – in der Realität variiert die Definition zwischen den Browsern. Darüber hinaus wird daran gearbeitet, dies stattdessen zu einem [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zu ändern.
- [`Event.type`](/de/docs/Web/API/Event/type) {{ReadOnlyInline}}
  - : Der Name, der den Typ des Ereignisses identifiziert.

### Veraltete und nicht standardisierte Eigenschaften

- [`Event.cancelBubble`](/de/docs/Web/API/Event/cancelBubble) {{deprecated_inline}}
  - : Ein historischer Alias für [`Event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation), der stattdessen verwendet werden sollte. Wenn sein Wert auf `true` gesetzt wird, bevor er von einem Ereignishandler zurückgegeben wird, verhindert dies die Ausbreitung des Ereignisses.
- [`Event.explicitOriginalTarget`](/de/docs/Web/API/Event/explicitOriginalTarget) {{non-standard_inline}} {{ReadOnlyInline}}
  - : Das explizit originale Ziel des Ereignisses.
- [`Event.originalTarget`](/de/docs/Web/API/Event/originalTarget) {{non-standard_inline}} {{ReadOnlyInline}}
  - : Das originale Ziel des Ereignisses, bevor es umgeleitet wurde.
- [`Event.returnValue`](/de/docs/Web/API/Event/returnValue) {{deprecated_inline}}
  - : Eine historische Eigenschaft, die immer noch unterstützt wird, um sicherzustellen, dass bestehende Websites weiterhin funktionieren. Verwenden Sie stattdessen [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) und [`Event.defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented).
- [`Event.scoped`](/de/docs/Web/API/Event/composed) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Ein boolescher Wert, der angibt, ob das gegebene Ereignis durch die Schattenwurzel in das Standard-DOM aufsteigen wird. Verwenden Sie stattdessen [`composed`](/de/docs/Web/API/Event/composed).

## Instanz-Methoden

- [`Event.composedPath()`](/de/docs/Web/API/Event/composedPath)
  - : Gibt den Pfad des Ereignisses zurück (ein Array von Objekten, auf denen Listener aufgerufen werden). Dies schließt keine Knoten in Schattenbäumen ein, wenn die Schattenwurzel mit ihrem [`ShadowRoot.mode`](/de/docs/Web/API/ShadowRoot/mode) geschlossen erstellt wurde.
- [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault)
  - : Bricht das Ereignis ab (wenn es abbrechbar ist).
- [`Event.stopImmediatePropagation()`](/de/docs/Web/API/Event/stopImmediatePropagation)
  - : Verhindert für dieses spezielle Ereignis das Aufrufen aller anderen Listener. Dies schließt sowohl Listener ein, die dem gleichen Element wie auch solche, die in später zu durchlaufenden (während der Erfassungsphase, zum Beispiel) Elementen angefügt sind.
- [`Event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation)
  - : Stoppt die Ausbreitung von Ereignissen weiter entlang im DOM.

### Veraltete Methoden

- [`Event.initEvent()`](/de/docs/Web/API/Event/initEvent) {{deprecated_inline}}
  - : Initialisiert den Wert eines erstellten Ereignisses. Wenn das Ereignis bereits versendet wurde, macht diese Methode nichts. Verwenden Sie stattdessen den Konstruktor ([`Event()`](/de/docs/Web/API/Event/Event)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verfügbare Ereignistypen: [Ereignisreferenz](/de/docs/Web/Events)
- [Lernen: Einführung zu Ereignissen](/de/docs/Learn_web_development/Core/Scripting/Events)
- [Lernen: Event Bubbling](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling)
- [Erstellen und Auslösen benutzerdefinierter Ereignisse](/de/docs/Web/Events/Creating_and_triggering_events)
