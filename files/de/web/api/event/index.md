---
title: Event
slug: Web/API/Event
l10n:
  sourceCommit: a1b98defe244f3bd4aa5087a4a20eb862b0663d9
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Das **`Event`**-Interface repräsentiert ein Ereignis, das auf einem [`EventTarget`](/de/docs/Web/API/EventTarget) stattfindet.

Ein Ereignis kann durch eine Benutzeraktion ausgelöst werden, z.B. durch Klicken der Maustaste oder Drücken der Tastatur, oder durch APIs generiert werden, um den Fortschritt einer asynchronen Aufgabe darzustellen. Es kann auch programmgesteuert ausgelöst werden, etwa durch den Aufruf der Methode [`HTMLElement.click()`](/de/docs/Web/API/HTMLElement/click) eines Elements oder durch die Definition des Ereignisses und dessen Versand an ein spezifiziertes Ziel mittels [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent).

Es gibt viele Arten von Ereignissen, von denen einige andere Schnittstellen basierend auf der Hauptschnittstelle `Event` verwenden. `Event` selbst enthält die Eigenschaften und Methoden, die allen Ereignissen gemeinsam sind.

Viele DOM-Elemente können so eingerichtet werden, dass sie diese Ereignisse akzeptieren (oder "beobachten") und Code ausführen, um sie zu verarbeiten (oder "handhaben"). Ereignis-Handler werden normalerweise mit verschiedenen [HTML-Elementen](/de/docs/Web/HTML/Reference/Elements) (wie `<button>`, `<div>`, `<span>`, usw.) verbunden (oder "angehängt"), indem [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwendet wird, was im Allgemeinen die alten HTML-[Ereignis-Handler-Attribute](/de/docs/Web/HTML/Reference/Global_attributes) ersetzt. Solche Handler können, wenn sie richtig hinzugefügt wurden, bei Bedarf auch über [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) getrennt werden.

> [!NOTE]
> Ein Element kann mehrere derartige Handler haben, selbst für genau dasselbe Ereignis—insbesondere, wenn separate, unabhängige Code-Module sie jeweils für eigene Zwecke anhängen. (Zum Beispiel eine Webseite, die ein Werbemodul und ein Statistikmodul enthält, die beide das Ansehen von Videos überwachen.)

Wenn es viele verschachtelte Elemente gibt, die jeweils einen eigenen Handler haben, kann die Ereignisverarbeitung sehr kompliziert werden—insbesondere, wenn ein übergeordnetes Element dasselbe Ereignis wie seine Kindelemente empfängt, weil sie "räumlich" überlappen und das Ereignis technisch in beiden auftritt. Die Verarbeitungsreihenfolge solcher Ereignisse hängt von den [Event bubbling](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling) Einstellungen jedes ausgelösten Handlers ab.

## Schnittstellen basierend auf Event

Im Folgenden finden Sie eine Liste der Schnittstellen, die auf der Hauptschnittstelle `Event` basieren, mit Links zu deren jeweiliger Dokumentation im MDN API Referenz.

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
  - : Ein Boolean-Wert, der angibt, ob das Ereignis durch das DOM nach oben "steigt".
- [`Event.cancelable`](/de/docs/Web/API/Event/cancelable) {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der angibt, ob das Ereignis abgebrochen werden kann.
- [`Event.composed`](/de/docs/Web/API/Event/composed) {{ReadOnlyInline}}
  - : Ein Boolean, der angibt, ob das Ereignis über die Grenze zwischen dem Shadow DOM und dem regulären DOM steigen kann.
- [`Event.currentTarget`](/de/docs/Web/API/Event/currentTarget) {{ReadOnlyInline}}
  - : Eine Referenz auf das aktuell registrierte Ziel für das Ereignis. Dies ist das Objekt, an das das Ereignis aktuell gesendet werden soll. Es ist möglich, dass dies im Laufe der Zeit durch _Retargeting_ geändert wurde.
- [`Event.defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented) {{ReadOnlyInline}}
  - : Gibt an, ob der Aufruf von [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) das Ereignis abgebrochen hat.
- [`Event.eventPhase`](/de/docs/Web/API/Event/eventPhase) {{ReadOnlyInline}}
  - : Gibt an, welche Phase des Ereignisflusses gerade verarbeitet wird. Es ist eine der folgenden Zahlen: `NONE`, `CAPTURING_PHASE`, `AT_TARGET`, `BUBBLING_PHASE`.
- [`Event.isTrusted`](/de/docs/Web/API/Event/isTrusted) {{ReadOnlyInline}}
  - : Gibt an, ob das Ereignis vom Browser (z.B. nach einem Benutzer-Klick) oder durch ein Skript (z.B. unter Verwendung einer Ereigniserstellungsmethode) initiiert wurde.
- [`Event.srcElement`](/de/docs/Web/API/Event/srcElement) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Ein Alias für die [`Event.target`](/de/docs/Web/API/Event/target)-Eigenschaft. Verwenden Sie stattdessen [`Event.target`](/de/docs/Web/API/Event/target).
- [`Event.target`](/de/docs/Web/API/Event/target) {{ReadOnlyInline}}
  - : Eine Referenz auf das Objekt, an das das Ereignis ursprünglich gesendet wurde.
- [`Event.timeStamp`](/de/docs/Web/API/Event/timeStamp) {{ReadOnlyInline}}
  - : Der Zeitpunkt, zu dem das Ereignis erstellt wurde (in Millisekunden). Laut Spezifikation ist dieser Wert die Zeit seit Epoch—aber in der Realität variieren die Definitionen der Browser. Darüber hinaus wird daran gearbeitet, dies stattdessen in einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zu ändern.
- [`Event.type`](/de/docs/Web/API/Event/type) {{ReadOnlyInline}}
  - : Der Name, der den Typ des Ereignisses identifiziert.

### Veraltete und nicht standardisierte Eigenschaften

- [`Event.cancelBubble`](/de/docs/Web/API/Event/cancelBubble) {{deprecated_inline}}
  - : Ein historisches Alias zu [`Event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation), das stattdessen verwendet werden sollte. Wenn sein Wert vor der Rückgabe von einem Ereignis-Handler auf `true` gesetzt wird, wird die Verbreitung des Ereignisses verhindert.
- [`Event.explicitOriginalTarget`](/de/docs/Web/API/Event/explicitOriginalTarget) {{non-standard_inline}} {{ReadOnlyInline}}
  - : Das explizite ursprüngliche Ziel des Ereignisses.
- [`Event.originalTarget`](/de/docs/Web/API/Event/originalTarget) {{non-standard_inline}} {{ReadOnlyInline}}
  - : Das ursprüngliche Ziel des Ereignisses, bevor irgendein Retargeting stattfand.
- [`Event.returnValue`](/de/docs/Web/API/Event/returnValue) {{deprecated_inline}}
  - : Eine historische Eigenschaft, die immer noch unterstützt wird, um sicherzustellen, dass bestehende Seiten weiterhin funktionieren. Verwenden Sie stattdessen [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) und [`Event.defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented).
- [`Event.scoped`](/de/docs/Web/API/Event/composed) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Ein Boolean-Wert, der angibt, ob das gegebene Ereignis durch den Shadow-Root in das Standard-DOM "steigen" wird. Verwenden Sie stattdessen [`composed`](/de/docs/Web/API/Event/composed).

## Instanz-Methoden

- [`Event.composedPath()`](/de/docs/Web/API/Event/composedPath)
  - : Gibt den Pfad des Ereignisses zurück (ein Array von Objekten, auf denen Listener aufgerufen werden). Dies schließt keine Knoten in Schattenbäumen ein, wenn der Schatten-Root mit seinem [`ShadowRoot.mode`](/de/docs/Web/API/ShadowRoot/mode) im geschlossenen Modus erstellt wurde.
- [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault)
  - : Hebt das Ereignis (wenn es abbrechbar ist) auf.
- [`Event.stopImmediatePropagation()`](/de/docs/Web/API/Event/stopImmediatePropagation)
  - : Verhindert speziell für dieses Ereignis, dass alle anderen Listener aufgerufen werden. Dies schließt Listener ein, die an dasselbe Element angehängt sind, sowie solche, die an Elemente angehängt sind, die später durchlaufen werden (z.B. während der Erfassungsphase).
- [`Event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation)
  - : Stoppt die Weiterverbreitung von Ereignissen im DOM.

### Veraltete Methoden

- [`Event.initEvent()`](/de/docs/Web/API/Event/initEvent) {{deprecated_inline}}
  - : Initialisiert den Wert eines erstellten Ereignisses. Wenn das Ereignis bereits gesendet wurde, tut diese Methode nichts. Verwenden Sie stattdessen den Konstruktor ([`Event()`](/de/docs/Web/API/Event/Event)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ereignisindex](/de/docs/Web/API/Document_Object_Model/Events#event_index)
- [Lernen: Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events)
- [Lernen: Ereignis-Bubbling](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling)
- [Erstellen und Auslösen benutzerdefinierter Ereignisse](/de/docs/Web/API/Document_Object_Model/Events#creating_and_dispatching_events)
