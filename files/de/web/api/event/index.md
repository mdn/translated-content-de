---
title: Event
slug: Web/API/Event
l10n:
  sourceCommit: 86e3ffcd1cd43ac312f8a72c23e1d80304fee724
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`Event`**-Schnittstelle repräsentiert ein Ereignis, das auf einem [`EventTarget`](/de/docs/Web/API/EventTarget) stattfindet.

Ein Ereignis kann durch Benutzeraktionen ausgelöst werden, z.B. das Klicken auf die Maustaste oder das Drücken einer Taste auf der Tastatur, oder durch APIs generiert werden, um den Fortschritt einer asynchronen Aufgabe darzustellen. Es kann auch programmgesteuert ausgelöst werden, z.B. durch Aufruf der [`HTMLElement.click()`](/de/docs/Web/API/HTMLElement/click)-Methode eines Elements oder durch Definition des Ereignisses und anschließendes Senden an ein bestimmtes Ziel mit [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent).

Es gibt viele Arten von Ereignissen, von denen einige andere Schnittstellen verwenden, die auf der Hauptschnittstelle `Event` basieren. `Event` selbst enthält die Eigenschaften und Methoden, die allen Ereignissen gemeinsam sind.

Viele DOM-Elemente können so eingerichtet werden, dass sie diese Ereignisse akzeptieren (oder "lauschen") und Code ausführen, um sie zu verarbeiten (oder "handhaben"). Ereignis-Handler werden üblicherweise mit verschiedenen [HTML-Elementen](/de/docs/Web/HTML/Element) (wie `<button>`, `<div>`, `<span>`, etc.) verbunden (oder "angeschlossen") unter Verwendung von [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) und ersetzen in der Regel die Verwendung der alten HTML-[Ereignis-Handler-Attribute](/de/docs/Web/HTML/Global_attributes). Wenn sie richtig hinzugefügt werden, können solche Handler bei Bedarf auch wieder getrennt werden, wobei [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) verwendet wird.

> [!NOTE]
> Ein Element kann mehrere solcher Handler haben, sogar für dasselbe Ereignis — insbesondere, wenn separate, unabhängige Code-Module sie anschließen, jedes für seine eigenen unabhängigen Zwecke. (Zum Beispiel eine Webseite mit einem Werbemodul und einem Statistikmodul, die beide das Ansehen von Videos überwachen.)

Wenn es viele verschachtelte Elemente gibt, jedes mit seinen eigenen Handler(n), kann die Ereignisverarbeitung sehr kompliziert werden — besonders, wenn ein übergeordnetes Element dasselbe Ereignis wie seine untergeordneten Elemente erhält, weil sie sich "räumlich" überlappen, sodass das Ereignis technisch gesehen in beiden auftritt, und die Reihenfolge der Ereignisverarbeitung von den [Event-Bubbling](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling)-Einstellungen jedes ausgelösten Handlers abhängt.

## Schnittstellen basierend auf Event

Nachfolgend finden Sie eine Liste der Schnittstellen, die auf der Hauptschnittstelle `Event` basieren, mit Links zu deren jeweiliger Dokumentation im MDN-API-Referenz.

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

## Instanzeigenschaften

- [`Event.bubbles`](/de/docs/Web/API/Event/bubbles) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob das Ereignis durch das DOM "aufsteigt".
- [`Event.cancelable`](/de/docs/Web/API/Event/cancelable) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob das Ereignis abbrechbar ist.
- [`Event.composed`](/de/docs/Web/API/Event/composed) {{ReadOnlyInline}}
  - : Ein Boolescher Wert, der angibt, ob das Ereignis den Schatten-DOM-Grenzen und den regulären DOM überschreiten kann.
- [`Event.currentTarget`](/de/docs/Web/API/Event/currentTarget) {{ReadOnlyInline}}
  - : Eine Referenz auf das aktuell registrierte Ziel für das Ereignis. Dies ist das Objekt, an das das Ereignis derzeit gesendet werden soll. Es ist möglich, dass dies unterwegs durch _Retargeting_ geändert wurde.
- [`Event.defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented) {{ReadOnlyInline}}
  - : Gibt an, ob der Aufruf von [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) das Ereignis abgebrochen hat.
- [`Event.eventPhase`](/de/docs/Web/API/Event/eventPhase) {{ReadOnlyInline}}
  - : Gibt an, welche Phase des Ereignisflusses derzeit verarbeitet wird. Es handelt sich um eine der folgenden Zahlen: `NONE`, `CAPTURING_PHASE`, `AT_TARGET`, `BUBBLING_PHASE`.
- [`Event.isTrusted`](/de/docs/Web/API/Event/isTrusted) {{ReadOnlyInline}}
  - : Gibt an, ob das Ereignis vom Browser (nach einem Benutzer-Klick, z.B.) oder durch ein Skript (unter Verwendung einer Ereigniserstellungsmethode) initiiert wurde.
- [`Event.srcElement`](/de/docs/Web/API/Event/srcElement) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Ein Alias für die Eigenschaft [`Event.target`](/de/docs/Web/API/Event/target). Verwenden Sie stattdessen [`Event.target`](/de/docs/Web/API/Event/target).
- [`Event.target`](/de/docs/Web/API/Event/target) {{ReadOnlyInline}}
  - : Eine Referenz auf das Objekt, an das das Ereignis ursprünglich gesendet wurde.
- [`Event.timeStamp`](/de/docs/Web/API/Event/timeStamp) {{ReadOnlyInline}}
  - : Die Zeit, zu der das Ereignis erstellt wurde (in Millisekunden). Laut Spezifikation sollte dieser Wert die Zeit seit dem Epoch sein – in der Realität variieren jedoch die Definitionen der Browser. Zudem wird daran gearbeitet, dies stattdessen in einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zu ändern.
- [`Event.type`](/de/docs/Web/API/Event/type) {{ReadOnlyInline}}
  - : Der Name, der den Typ des Ereignisses identifiziert.

### Veraltete und nicht standardisierte Eigenschaften

- [`Event.cancelBubble`](/de/docs/Web/API/Event/cancelBubble) {{deprecated_inline}}
  - : Ein historischer Alias zu [`Event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation), der stattdessen verwendet werden sollte. Wenn der Wert auf `true` gesetzt wird, bevor ein Ereignishandler zurückkehrt, verhindert dies die Weitergabe des Ereignisses.
- [`Event.explicitOriginalTarget`](/de/docs/Web/API/Event/explicitOriginalTarget) {{non-standard_inline}} {{ReadOnlyInline}}
  - : Das explizite ursprüngliche Ziel des Ereignisses.
- [`Event.originalTarget`](/de/docs/Web/API/Event/originalTarget) {{non-standard_inline}} {{ReadOnlyInline}}
  - : Das ursprüngliche Ziel des Ereignisses, bevor jegliches Retargeting stattgefunden hat.
- [`Event.returnValue`](/de/docs/Web/API/Event/returnValue) {{deprecated_inline}}
  - : Eine historische Eigenschaft, die immer noch unterstützt wird, um sicherzustellen, dass bestehende Websites weiterhin funktionieren. Verwenden Sie stattdessen [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) und [`Event.defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented).
- [`Event.scoped`](/de/docs/Web/API/Event/composed) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Ein boolescher Wert, der angibt, ob ein gegebenes Ereignis durch den Schatten-Stamm in den Standard-DOM "aufsteigt". Verwenden Sie stattdessen [`composed`](/de/docs/Web/API/Event/composed).

## Instanzmethoden

- [`Event.composedPath()`](/de/docs/Web/API/Event/composedPath)
  - : Gibt den Pfad des Ereignisses zurück (ein Array von Objekten, an denen Listener aufgerufen werden). Dies schließt keine Knoten in Shadow Trees ein, wenn die Shadow Root mit ihrem [`ShadowRoot.mode`](/de/docs/Web/API/ShadowRoot/mode) geschlossen erstellt wurde.
- [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault)
  - : Bricht das Ereignis ab (sofern es abbrechbar ist).
- [`Event.stopImmediatePropagation()`](/de/docs/Web/API/Event/stopImmediatePropagation)
  - : Verhindert für dieses bestimmte Ereignis, dass alle anderen Listener aufgerufen werden. Dies schließt Listener ein, die am selben Element angebracht sind sowie diejenigen, die an später durchlaufenen Elementen angebracht werden (z.B. während der Capture-Phase).
- [`Event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation)
  - : Stoppt die Weitergabe von Ereignissen im DOM.

### Veraltete Methoden

- [`Event.initEvent()`](/de/docs/Web/API/Event/initEvent) {{deprecated_inline}}
  - : Initialisiert den Wert eines erstellten Events. Wenn das Ereignis bereits versendet wurde, tut diese Methode nichts. Verwenden Sie stattdessen den Konstruktor ([`Event()`](/de/docs/Web/API/Event/Event)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verfügbare Ereignistypen: [Ereignisreferenz](/de/docs/Web/Events)
- [Lernen: Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events)
- [Lernen: Event-Bubbling](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling)
- [Erstellen und Auslösen benutzerdefinierter Ereignisse](/de/docs/Web/Events/Creating_and_triggering_events)
