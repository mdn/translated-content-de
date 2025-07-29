---
title: Event
slug: Web/API/Event
l10n:
  sourceCommit: f4c0e822eb6a1ea438c7342f43a3e4809adbd56a
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Das **`Event`**-Interface repräsentiert ein Ereignis, das auf einem [`EventTarget`](/de/docs/Web/API/EventTarget) stattfindet.

Ein Ereignis kann durch eine Benutzeraktion ausgelöst werden, z.B. durch Klicken der Maustaste oder Drücken der Tastatur, oder von APIs generiert werden, um den Fortschritt einer asynchronen Aufgabe darzustellen. Es kann auch programmatisch ausgelöst werden, z.B. durch Aufrufen der Methode [`HTMLElement.click()`](/de/docs/Web/API/HTMLElement/click) eines Elements oder durch Definieren des Ereignisses, das dann mit [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) an ein bestimmtes Ziel gesendet wird.

Es gibt viele Arten von Ereignissen, einige davon verwenden basierend auf dem Haupt-`Event`-Interface andere Schnittstellen. `Event` selbst enthält die Eigenschaften und Methoden, die allen Ereignissen gemeinsam sind.

Viele DOM-Elemente können so eingerichtet werden, dass sie diese Ereignisse akzeptieren (oder "darauf hören") und Code ausführen, um sie zu verarbeiten (oder "zu behandeln"). Ereignis-Handler werden in der Regel mit verschiedenen [HTML-Elementen](/de/docs/Web/HTML/Reference/Elements) (wie `<button>`, `<div>`, `<span>`, usw.) über [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verbunden (oder "angehängt"), und dies ersetzt im Allgemeinen die Verwendung der alten HTML-[Ereignis-Handler-Attribute](/de/docs/Web/HTML/Reference/Global_attributes). Wenn sie richtig hinzugefügt werden, können solche Handler bei Bedarf auch mit [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) wieder getrennt werden.

> [!NOTE]
> Ein Element kann mehrere solcher Handler haben, sogar für dasselbe Ereignis—besonders wenn separate, unabhängige Code-Module sie jeweils zu ihren eigenen unabhängigen Zwecken anhängen. (Zum Beispiel eine Webseite mit einem Werbemodul und einem Statistikmodul, die beide Videoanschauungen überwachen.)

Wenn es viele verschachtelte Elemente gibt, die jeweils ihre eigenen Handler haben, kann die Ereignisverarbeitung sehr kompliziert werden—insbesondere wenn ein übergeordnetes Element dasselbe Ereignis wie seine Kindelemente empfängt, weil sie "räumlich" überlappen, sodass das Ereignis technisch in beiden auftritt, und die Verarbeitungsreihenfolge solcher Ereignisse hängt von den [Event-Bubbling](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling)-Einstellungen jedes ausgelösten Handlers ab.

## Schnittstellen basierend auf Event

Unten ist eine Liste von Schnittstellen, die auf dem Haupt-`Event`-Interface basieren, mit Links zu den jeweiligen Dokumentationen in der MDN API-Referenz.

Beachten Sie, dass alle Event-Schnittstellen Namen haben, die mit "Event" enden.

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
  - : Ein boolescher Wert, der angibt, ob das Ereignis durch das DOM nach oben steigt.
- [`Event.cancelable`](/de/docs/Web/API/Event/cancelable) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob das Ereignis abgebrochen werden kann.
- [`Event.composed`](/de/docs/Web/API/Event/composed) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob das Ereignis über die Grenze zwischen dem Shadow DOM und dem regulären DOM steigen kann.
- [`Event.currentTarget`](/de/docs/Web/API/Event/currentTarget) {{ReadOnlyInline}}
  - : Eine Referenz auf das aktuell registrierte Ziel für das Ereignis. Dies ist das Objekt, an das das Ereignis derzeit gesendet werden soll. Es ist möglich, dass dies im Laufe der Retargeting geändert wurde.
- [`Event.defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented) {{ReadOnlyInline}}
  - : Gibt an, ob der Aufruf von [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) das Ereignis abgebrochen hat.
- [`Event.eventPhase`](/de/docs/Web/API/Event/eventPhase) {{ReadOnlyInline}}
  - : Gibt an, welche Phase des Ereignisverlaufs gerade verarbeitet wird. Es ist eine der folgenden Zahlen: `NONE`, `CAPTURING_PHASE`, `AT_TARGET`, `BUBBLING_PHASE`.
- [`Event.isTrusted`](/de/docs/Web/API/Event/isTrusted) {{ReadOnlyInline}}
  - : Gibt an, ob das Ereignis vom Browser initiiert wurde (nach einem Benutzerklick, zum Beispiel) oder durch ein Skript (z.B. unter Verwendung einer Ereignis-Erstellungsmethode).
- [`Event.srcElement`](/de/docs/Web/API/Event/srcElement) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Ein Alias für die [`Event.target`](/de/docs/Web/API/Event/target)-Eigenschaft. Verwenden Sie stattdessen [`Event.target`](/de/docs/Web/API/Event/target).
- [`Event.target`](/de/docs/Web/API/Event/target) {{ReadOnlyInline}}
  - : Eine Referenz auf das Objekt, an das das Ereignis ursprünglich gesendet wurde.
- [`Event.timeStamp`](/de/docs/Web/API/Event/timeStamp) {{ReadOnlyInline}}
  - : Die Zeit, zu der das Ereignis erstellt wurde (in Millisekunden). Laut Spezifikation ist dieser Wert seit dem Epochenbeginn—aber in Wirklichkeit variieren die Definitionen der Browser. Darüber hinaus wird daran gearbeitet, dies stattdessen in einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zu ändern.
- [`Event.type`](/de/docs/Web/API/Event/type) {{ReadOnlyInline}}
  - : Der Name, der den Typ des Ereignisses identifiziert.

### Legacy- und nicht-standardisierte Eigenschaften

- [`Event.cancelBubble`](/de/docs/Web/API/Event/cancelBubble) {{deprecated_inline}}
  - : Ein historischer Alias zu [`Event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation), der stattdessen verwendet werden sollte. Wenn sein Wert auf `true` gesetzt wird, bevor von einem Ereignis-Handler zurückgekehrt wird, wird die Ausbreitung des Ereignisses verhindert.
- [`Event.explicitOriginalTarget`](/de/docs/Web/API/Event/explicitOriginalTarget) {{non-standard_inline}} {{ReadOnlyInline}}
  - : Das explizite ursprüngliche Ziel des Ereignisses.
- [`Event.originalTarget`](/de/docs/Web/API/Event/originalTarget) {{non-standard_inline}} {{ReadOnlyInline}}
  - : Das ursprüngliche Ziel des Ereignisses, bevor irgendwelche Retargetings stattfanden.
- [`Event.returnValue`](/de/docs/Web/API/Event/returnValue) {{deprecated_inline}}
  - : Eine historische Eigenschaft, die weiterhin unterstützt wird, um sicherzustellen, dass bestehende Websites weiterhin funktionieren. Verwenden Sie [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) und [`Event.defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented) stattdessen.
- [`Event.scoped`](/de/docs/Web/API/Event/composed) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Ein boolescher Wert, der angibt, ob das gegebene Ereignis über die Shadow-Root hinaus bis zum standardmäßigen DOM ansteigen wird. Verwenden Sie [`composed`](/de/docs/Web/API/Event/composed) stattdessen.

## Instanz-Methoden

- [`Event.composedPath()`](/de/docs/Web/API/Event/composedPath)
  - : Gibt den Ereignispfad zurück (ein Array von Objekten, auf denen Listener aufgerufen werden). Dies schließt keine Knoten in Shadow-Bäumen ein, wenn die Shadow-Root mit ihrem [`ShadowRoot.mode`](/de/docs/Web/API/ShadowRoot/mode) geschlossen erstellt wurde.
- [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault)
  - : Hebt das Ereignis auf (wenn es abgebrochen werden kann).
- [`Event.stopImmediatePropagation()`](/de/docs/Web/API/Event/stopImmediatePropagation)
  - : Verhindert für dieses bestimmte Ereignis, dass andere Listener aufgerufen werden. Dies schließt Listener ein, die an dasselbe Element sowie an Elemente angehängt sind, die später (zum Beispiel während der Capture-Phase) durchlaufen werden.
- [`Event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation)
  - : Stoppt die weitere Ausbreitung von Ereignissen im DOM.

### Veraltete Methoden

- [`Event.initEvent()`](/de/docs/Web/API/Event/initEvent) {{deprecated_inline}}
  - : Initialisiert den Wert eines erstellten Events. Wenn das Ereignis bereits gesendet wurde, bewirkt diese Methode nichts. Verwenden Sie stattdessen den Konstruktor ([`Event()`](/de/docs/Web/API/Event/Event)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ereignisindex](/de/docs/Web/API/Document_Object_Model/Events#event_index)
- [Lernen: Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events)
- [Lernen: Event-Bubbling](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling)
- [Erstellen und Auslösen benutzerdefinierter Ereignisse](/de/docs/Web/API/Document_Object_Model/Events#creating_and_dispatching_events)
