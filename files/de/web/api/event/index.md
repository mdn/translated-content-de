---
title: Event
slug: Web/API/Event
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Das **`Event`**-Interface repräsentiert ein Ereignis, das auf einem [`EventTarget`](/de/docs/Web/API/EventTarget) stattfindet.

Ein Ereignis kann durch eine Benutzeraktion ausgelöst werden, z. B. durch Klicken mit der Maus oder Tippen auf die Tastatur, oder es wird von APIs generiert, um den Fortschritt einer asynchronen Aufgabe darzustellen. Es kann auch programmatisch ausgelöst werden, etwa durch Aufrufen der [`HTMLElement.click()`](/de/docs/Web/API/HTMLElement/click)-Methode eines Elements oder durch Definieren des Ereignisses und anschließendes Senden an ein bestimmtes Ziel mittels [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent).

Es gibt viele Arten von Ereignissen, von denen einige andere Schnittstellen basierend auf dem Haupt-`Event`-Interface verwenden. `Event` selbst enthält die Eigenschaften und Methoden, die allen Ereignissen gemeinsam sind.

Viele DOM-Elemente können eingerichtet werden, um diese Ereignisse zu akzeptieren (oder "zu überwachen") und Code auszuführen, um sie zu verarbeiten (oder "zu behandeln"). Ereignis-Handler werden in der Regel mit verschiedenen [HTML-Elementen](/de/docs/Web/HTML/Reference/Elements) (wie `<button>`, `<div>`, `<span>`, usw.) verbunden (oder "angehängt"), indem [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwendet wird, und dies ersetzt im Allgemeinen die Verwendung der alten HTML-[Ereignis-Handler-Attribute](/de/docs/Web/HTML/Reference/Global_attributes). Darüber hinaus können solche Handler, wenn sie ordnungsgemäß hinzugefügt wurden, auch bei Bedarf mit [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) getrennt werden.

> [!NOTE]
> Ein Element kann mehrere solcher Handler haben, sogar für genau dasselbe Ereignis—insbesondere, wenn separate, unabhängige Code-Module sie anhängen, jedes für seinen eigenen unabhängigen Zweck. (Zum Beispiel eine Webseite mit einem Werbemodul und einem Statistikmodul, die beide das Ansehen von Videos überwachen.)

Wenn es viele verschachtelte Elemente gibt, von denen jedes seine eigenen Handler hat, kann die Ereignisverarbeitung sehr kompliziert werden—insbesondere dort, wo ein übergeordnetes Element dasselbe Ereignis wie seine Kindelemente erhält, da sie sich "räumlich" überlappen, sodass das Ereignis technisch in beiden auftritt, und die Verarbeitungsreihenfolge solcher Ereignisse hängt von den [Ereignis-Bubbling](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling)-Einstellungen der jeweiligen ausgelösten Handler ab.

## Schnittstellen basierend auf Event

Unten finden Sie eine Liste von Schnittstellen, die auf dem Haupt-`Event`-Interface basieren, mit Links zu ihrer jeweiligen Dokumentation im MDN API-Referenz.

Beachten Sie, dass alle Ereignis-Schnittstellen mit "Event" enden.

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
  - : Ein boolescher Wert, der angibt, ob das Ereignis durch das DOM nach oben blubbert.
- [`Event.cancelable`](/de/docs/Web/API/Event/cancelable) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob das Ereignis abgebrochen werden kann.
- [`Event.composed`](/de/docs/Web/API/Event/composed) {{ReadOnlyInline}}
  - : Ein Boolescher Wert, der angibt, ob das Ereignis über die Grenze zwischen dem Schatten-DOM und dem regulären DOM blubbern kann.
- [`Event.currentTarget`](/de/docs/Web/API/Event/currentTarget) {{ReadOnlyInline}}
  - : Eine Referenz auf das derzeit registrierte Ziel für das Ereignis. Dies ist das Objekt, an das das Ereignis aktuell gesendet werden soll. Es ist möglich, dass sich dies entlang des Weges durch _Retargeting_ geändert hat.
- [`Event.defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented) {{ReadOnlyInline}}
  - : Gibt an, ob der Aufruf von [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) das Ereignis abgebrochen hat.
- [`Event.eventPhase`](/de/docs/Web/API/Event/eventPhase) {{ReadOnlyInline}}
  - : Gibt an, welche Phase des Ereignisflusses gerade verarbeitet wird. Es ist eine der folgenden Zahlen: `NONE`, `CAPTURING_PHASE`, `AT_TARGET`, `BUBBLING_PHASE`.
- [`Event.isTrusted`](/de/docs/Web/API/Event/isTrusted) {{ReadOnlyInline}}
  - : Gibt an, ob das Ereignis vom Browser initiiert wurde (nach einem Benutzerklick, beispielsweise) oder durch ein Skript (mittels einer Ereigniserstellungsmethode, zum Beispiel).
- [`Event.srcElement`](/de/docs/Web/API/Event/srcElement) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Ein Alias für die [`Event.target`](/de/docs/Web/API/Event/target)-Eigenschaft. Verwenden Sie stattdessen [`Event.target`](/de/docs/Web/API/Event/target).
- [`Event.target`](/de/docs/Web/API/Event/target) {{ReadOnlyInline}}
  - : Ein Verweis auf das Objekt, an das das Ereignis ursprünglich gesendet wurde.
- [`Event.timeStamp`](/de/docs/Web/API/Event/timeStamp) {{ReadOnlyInline}}
  - : Die Zeit, zu der das Ereignis erstellt wurde (in Millisekunden). Laut Spezifikation ist dieser Wert die Zeit seit der Epoche—aber in Wirklichkeit variieren die Definitionen der Browser. Darüber hinaus wird daran gearbeitet, dies stattdessen in einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zu ändern.
- [`Event.type`](/de/docs/Web/API/Event/type) {{ReadOnlyInline}}
  - : Der Name, der den Typ des Ereignisses identifiziert.

### Veraltete und nicht-standardisierte Eigenschaften

- [`Event.cancelBubble`](/de/docs/Web/API/Event/cancelBubble) {{deprecated_inline}}
  - : Ein historischer Alias zu [`Event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation), der stattdessen verwendet werden sollte. Wenn sein Wert vor der Rückgabe von einem Ereignishandler auf `true` gesetzt wird, wird die Weitergabe des Ereignisses verhindert.
- [`Event.explicitOriginalTarget`](/de/docs/Web/API/Event/explicitOriginalTarget) {{non-standard_inline}} {{ReadOnlyInline}}
  - : Das explizite ursprüngliche Ziel des Ereignisses.
- [`Event.originalTarget`](/de/docs/Web/API/Event/originalTarget) {{non-standard_inline}} {{ReadOnlyInline}}
  - : Das ursprüngliche Ziel des Ereignisses, bevor es umgeleitet wurde.
- [`Event.returnValue`](/de/docs/Web/API/Event/returnValue) {{deprecated_inline}}
  - : Eine historische Eigenschaft, die weiterhin unterstützt wird, um sicherzustellen, dass bestehende Webseiten weiterhin funktionieren. Verwenden Sie stattdessen [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) und [`Event.defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented).
- [`Event.scoped`](/de/docs/Web/API/Event/composed) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Ein boolescher Wert, der angibt, ob das gegebene Ereignis über die Schattenwurzel in den Standard-DOM blubbern wird. Verwenden Sie stattdessen [`composed`](/de/docs/Web/API/Event/composed).

## Instanz-Methoden

- [`Event.composedPath()`](/de/docs/Web/API/Event/composedPath)
  - : Gibt den Pfad des Ereignisses zurück (ein Array von Objekten, auf denen Listener aufgerufen werden). Dies schließt keine Knoten in Schattenbäumen ein, wenn die Schattenwurzel mit ihrem [`ShadowRoot.mode`](/de/docs/Web/API/ShadowRoot/mode) geschlossen erstellt wurde.
- [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault)
  - : Bricht das Ereignis ab (falls es abbrechbar ist).
- [`Event.stopImmediatePropagation()`](/de/docs/Web/API/Event/stopImmediatePropagation)
  - : Verhindert für dieses spezielle Ereignis, dass alle anderen Listener aufgerufen werden. Dies schließt Listener ein, die an demselben Element angehängt sind, sowie solche, die an Elementen angehängt sind, die später durchlaufen werden (beispielsweise während der Erfassungsphase).
- [`Event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation)
  - : Stoppt die Weitergabe von Ereignissen im DOM.

### Veraltete Methoden

- [`Event.initEvent()`](/de/docs/Web/API/Event/initEvent) {{deprecated_inline}}
  - : Initialisiert den Wert eines erstellten Ereignisses. Wenn das Ereignis bereits gesendet wurde, tut diese Methode nichts. Verwenden Sie den Konstruktor ([`Event()`](/de/docs/Web/API/Event/Event) stattdessen).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verfügbare Arten von Ereignissen: [Ereignis-Referenz](/de/docs/Web/Events)
- [Einführung in Ereignisse lernen](/de/docs/Learn_web_development/Core/Scripting/Events)
- [Ereignis-Bubbling lernen](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling)
- [Erstellen und Auslösen von benutzerdefinierten Ereignissen](/de/docs/Web/Events/Creating_and_triggering_events)
