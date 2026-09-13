---
title: Event
slug: Web/API/Event
l10n:
  sourceCommit: 91b5a448a517239876a4bc92640bbbf29e30b106
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Das **`Event`**-Interface repräsentiert ein Ereignis, das auf einem [`EventTarget`](/de/docs/Web/API/EventTarget) stattfindet.

Ein Ereignis kann durch eine Benutzeraktion ausgelöst werden, z. B. durch Klicken der Maustaste oder Tippen auf die Tastatur, oder durch APIs generiert werden, um den Fortschritt einer asynchronen Aufgabe darzustellen. Es kann auch programmgesteuert ausgelöst werden, z. B. durch Aufruf der [`HTMLElement.click()`](/de/docs/Web/API/HTMLElement/click)-Methode eines Elements oder durch Definition des Ereignisses, gefolgt vom Senden an ein bestimmtes Ziel mit [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent).

Es gibt viele Arten von Ereignissen, von denen einige andere Schnittstellen nutzen, die auf der Hauptschnittstelle `Event` basieren. `Event` selbst enthält die Eigenschaften und Methoden, die allen Ereignissen gemeinsam sind.

Viele DOM-Elemente können so eingerichtet werden, dass sie diese Ereignisse akzeptieren (oder "darauf lauschen") und Code als Antwort ausführen, um sie zu verarbeiten (oder "zu handhaben"). Ereignishandler werden normalerweise an verschiedene [HTML-Elemente](/de/docs/Web/HTML/Reference/Elements) (wie `<button>`, `<div>`, `<span>` usw.) mit [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verbunden (oder "angefügt"), und dies ersetzt im Allgemeinen die Verwendung der alten [HTML-Ereignishandler-Attribute](/de/docs/Web/HTML/Reference/Global_attributes). Zudem können diese Handler, wenn sie ordnungsgemäß hinzugefügt wurden, bei Bedarf auch mit [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) getrennt werden.

> [!NOTE]
> Ein Element kann mehrere solche Handler haben, selbst für dasselbe Ereignis – insbesondere, wenn unabhängige Codemodule sie anfügen, jedes für eigene unabhängige Zwecke. (Zum Beispiel eine Webseite mit einem Werbemodul und einem Statistikmodul, die beide das Ansehen von Videos überwachen.)

Wenn es viele verschachtelte Elemente gibt, die jeweils eigene Handler haben, kann die Ereignisverarbeitung sehr kompliziert werden – insbesondere, wenn ein Elternelement dasselbe Ereignis wie seine Kindelemente erhält, weil sie sich "räumlich" überlappen und das Ereignis technisch gesehen in beiden auftritt, und die Verarbeitungsreihenfolge solcher Ereignisse von den [Ereignis-Bubbling](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling)-Einstellungen jedes ausgelösten Handlers abhängt.

## Schnittstellen basierend auf Event

Unten ist eine Liste von Schnittstellen, die auf der Hauptschnittstelle `Event` basieren, mit Links zu ihrer jeweiligen Dokumentation im MDN API-Referenz.

Beachten Sie, dass alle Ereignisschnittstellen Namen haben, die mit "Event" enden.

- [`AnimationEvent`](/de/docs/Web/API/AnimationEvent)
- [`AudioProcessingEvent`](/de/docs/Web/API/AudioProcessingEvent) {{Deprecated_Inline}}
- [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent)
- [`BlobEvent`](/de/docs/Web/API/BlobEvent)
- [`ClipboardChangeEvent`](/de/docs/Web/API/ClipboardChangeEvent)
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
  - : Ein boolescher Wert, der angibt, ob das Ereignis durch das DOM blubbert oder nicht.
- [`Event.cancelable`](/de/docs/Web/API/Event/cancelable) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob das Ereignis abgebrochen werden kann.
- [`Event.composed`](/de/docs/Web/API/Event/composed) {{ReadOnlyInline}}
  - : Ein Boolescher, der angibt, ob das Ereignis über die Grenze zwischen dem Shadow DOM und dem regulären DOM blubbern kann.
- [`Event.currentTarget`](/de/docs/Web/API/Event/currentTarget) {{ReadOnlyInline}}
  - : Ein Verweis auf das derzeit registrierte Ziel für das Ereignis. Dies ist das Objekt, an das das Ereignis aktuell gesendet werden soll. Es ist möglich, dass dies durch _Retargeting_ geändert wurde.
- [`Event.defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented) {{ReadOnlyInline}}
  - : Gibt an, ob der Aufruf von [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) das Ereignis abgebrochen hat.
- [`Event.eventPhase`](/de/docs/Web/API/Event/eventPhase) {{ReadOnlyInline}}
  - : Gibt an, welche Phase des Ereignisflusses gerade verarbeitet wird. Es ist eine der folgenden Nummern: `NONE`, `CAPTURING_PHASE`, `AT_TARGET`, `BUBBLING_PHASE`.
- [`Event.isTrusted`](/de/docs/Web/API/Event/isTrusted) {{ReadOnlyInline}}
  - : Gibt an, ob das Ereignis vom Browser initiiert wurde (zum Beispiel nach einem Benutzerklick) oder durch ein Skript (zum Beispiel durch eine Ereigniserstellungs-Methode).
- [`Event.srcElement`](/de/docs/Web/API/Event/srcElement) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Ein Alias für die [`Event.target`](/de/docs/Web/API/Event/target)-Eigenschaft. Verwenden Sie stattdessen [`Event.target`](/de/docs/Web/API/Event/target).
- [`Event.target`](/de/docs/Web/API/Event/target) {{ReadOnlyInline}}
  - : Ein Verweis auf das Objekt, an das das Ereignis ursprünglich gesendet wurde.
- [`Event.timeStamp`](/de/docs/Web/API/Event/timeStamp) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit, zu der das Ereignis erstellt wurde, darstellt, gemessen in Millisekunden relativ zur Zeitursprung des entsprechenden globalen Objekts.
- [`Event.type`](/de/docs/Web/API/Event/type) {{ReadOnlyInline}}
  - : Der Name, der den Typ des Ereignisses identifiziert.

### Veraltete und nicht standardisierte Eigenschaften

- [`Event.cancelBubble`](/de/docs/Web/API/Event/cancelBubble) {{deprecated_inline}}
  - : Ein historischer Alias für [`Event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation), der stattdessen verwendet werden sollte. Wenn der Wert dieses Properties auf `true` gesetzt wird, bevor ein Ereignishandler verlassen wird, verhindert dies die Weitergabe des Ereignisses.
- [`Event.explicitOriginalTarget`](/de/docs/Web/API/Event/explicitOriginalTarget) {{non-standard_inline}} {{ReadOnlyInline}}
  - : Das explizite ursprüngliche Ziel des Ereignisses.
- [`Event.originalTarget`](/de/docs/Web/API/Event/originalTarget) {{non-standard_inline}} {{ReadOnlyInline}}
  - : Das ursprüngliche Ziel des Ereignisses, vor irgendwelchen Retargetings.
- [`Event.returnValue`](/de/docs/Web/API/Event/returnValue) {{deprecated_inline}}
  - : Ein historisches Property, das immer noch unterstützt wird, um sicherzustellen, dass bestehende Websites weiterhin funktionieren. Verwenden Sie stattdessen [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) und [`Event.defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented).
- [`Event.scoped`](/de/docs/Web/API/Event/composed) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Ein boolescher Wert, der angibt, ob das gegebene Ereignis über das Shadow Root in den Standard-DOM blubbern wird. Verwenden Sie stattdessen [`composed`](/de/docs/Web/API/Event/composed).

## Instanz-Methoden

- [`Event.composedPath()`](/de/docs/Web/API/Event/composedPath)
  - : Gibt den Pfad des Ereignisses zurück (ein Array von Objekten, auf denen Listener aufgerufen werden). Dies schließt keine Knoten in Schattenbäumen ein, wenn das Schatten-Root mit seinem [`ShadowRoot.mode`](/de/docs/Web/API/ShadowRoot/mode) geschlossen erstellt wurde.
- [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault)
  - : Bricht das Ereignis ab (wenn es abbrechbar ist).
- [`Event.stopImmediatePropagation()`](/de/docs/Web/API/Event/stopImmediatePropagation)
  - : Verhindert, dass für dieses bestimmte Ereignis andere Listener aufgerufen werden. Dies schließt Listener ein, die am gleichen Element angehängt sind, sowie solche, die an Elementen angehängt sind, die später durchlaufen werden (während der Capture-Phase zum Beispiel).
- [`Event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation)
  - : Stoppt die Weitergabe von Ereignissen im DOM.

### Veraltete Methoden

- [`Event.initEvent()`](/de/docs/Web/API/Event/initEvent) {{deprecated_inline}}
  - : Initialisiert den Wert eines erstellten Ereignisses. Wenn das Ereignis bereits gesendet wurde, macht diese Methode nichts. Verwenden Sie stattdessen den Konstruktor ([`Event()`](/de/docs/Web/API/Event/Event)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ereignisindex](/de/docs/Web/API/Document_Object_Model/Events#event_index)
- [Lernen: Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events)
- [Lernen: Ereignis-Bubbling](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling)
- [Erstellen und Auslösen benutzerdefinierter Ereignisse](/de/docs/Web/API/Document_Object_Model/Events#creating_and_dispatching_events)
