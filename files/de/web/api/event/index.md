---
title: Event
slug: Web/API/Event
l10n:
  sourceCommit: c640274a19227cd5790912ea76841732baa6731f
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Das **`Event`**-Interface repräsentiert ein Ereignis, das auf einem [`EventTarget`](/de/docs/Web/API/EventTarget) stattfindet.

Ein Ereignis kann durch eine Benutzeraktion ausgelöst werden, z.B. Klicken mit der Maustaste oder Tippen auf die Tastatur, oder durch APIs generiert werden, um den Fortschritt einer asynchronen Aufgabe darzustellen. Es kann auch programmgesteuert ausgelöst werden, z.B. durch Aufrufen der [`HTMLElement.click()`](/de/docs/Web/API/HTMLElement/click)-Methode eines Elements oder durch Definieren des Ereignisses und anschließendes Senden an ein bestimmtes Ziel mithilfe von [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent).

Es gibt viele Arten von Ereignissen, von denen einige andere Schnittstellen basierend auf der Hauptschnittstelle `Event` verwenden. `Event` selbst enthält die Eigenschaften und Methoden, die allen Ereignissen gemeinsam sind.

Viele DOM-Elemente können eingerichtet werden, um diese Ereignisse zu akzeptieren (oder "zu hören") und Code als Reaktion auf ihre Verarbeitung (oder "Behandlung") auszuführen. Ereignis-Handler werden normalerweise mit verschiedenen [HTML-Elementen](/de/docs/Web/HTML/Element) (wie `<button>`, `<div>`, `<span>`, etc.) über [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verbunden (oder "angebunden"), und dies ersetzt in der Regel die Verwendung der alten [Ereignis-Handler-Attribute](/de/docs/Web/HTML/Global_attributes). Wenn richtig hinzugefügt, können solche Handler auch bei Bedarf mit [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) wieder getrennt werden.

> [!NOTE]
> Ein Element kann mehrere solcher Handler haben, sogar für exakt dasselbe Ereignis – insbesondere, wenn separate, unabhängige Code-Module sie für jeweils eigene unabhängige Zwecke anbringen. (Beispielsweise eine Webseite mit einem Werbungsmodul und einem Statistikmodul, die beide das Ansehen von Videos überwachen.)

Wenn es viele verschachtelte Elemente gibt, die jeweils ihre eigenen Handler haben, kann die Ereignisverarbeitung sehr kompliziert werden – vor allem, wenn ein übergeordnetes Element dasselbe Ereignis wie seine Kindelemente erhält, da sie "räumlich" überlappen, sodass das Ereignis technisch in beiden auftritt, und die Verarbeitungsreihenfolge solcher Ereignisse hängt von den Einstellungen für das [Event-Bubbling](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling) der ausgelösten Handler ab.

## Schnittstellen basierend auf Event

Im Folgenden finden Sie eine Liste von Schnittstellen, die auf der Hauptschnittstelle `Event` basieren, mit Links zu ihrer jeweiligen Dokumentation im MDN-API-Referenz.

Beachten Sie, dass alle Ereignis-Schnittstellen Namen haben, die mit "Event" enden.

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

## Instanzeigenschaften

- [`Event.bubbles`](/de/docs/Web/API/Event/bubbles) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob das Ereignis durch das DOM blubbert oder nicht.
- [`Event.cancelable`](/de/docs/Web/API/Event/cancelable) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob das Ereignis abgebrochen werden kann.
- [`Event.composed`](/de/docs/Web/API/Event/composed) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob das Ereignis über die Grenze zwischen Shadow DOM und regulärem DOM blubbern kann.
- [`Event.currentTarget`](/de/docs/Web/API/Event/currentTarget) {{ReadOnlyInline}}
  - : Ein Verweis auf das derzeit registrierte Ziel des Ereignisses. Dies ist das Objekt, an das das Ereignis derzeit gesendet werden soll. Es ist möglich, dass dies auf dem Weg über das _Retargeting_ geändert wurde.
- [`Event.defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented) {{ReadOnlyInline}}
  - : Gibt an, ob der Aufruf von [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) das Ereignis abgebrochen hat.
- [`Event.eventPhase`](/de/docs/Web/API/Event/eventPhase) {{ReadOnlyInline}}
  - : Gibt an, welche Phase des Ereignisflusses verarbeitet wird. Es ist eine der folgenden Zahlen: `NONE`, `CAPTURING_PHASE`, `AT_TARGET`, `BUBBLING_PHASE`.
- [`Event.isTrusted`](/de/docs/Web/API/Event/isTrusted) {{ReadOnlyInline}}
  - : Gibt an, ob das Ereignis vom Browser initiiert wurde (nach einem Benutzerklick beispielsweise) oder durch ein Script (zum Beispiel mithilfe einer Ereigniserstellungsmethode).
- [`Event.srcElement`](/de/docs/Web/API/Event/srcElement) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Ein Alias für die [`Event.target`](/de/docs/Web/API/Event/target)-Eigenschaft. Verwenden Sie stattdessen [`Event.target`](/de/docs/Web/API/Event/target).
- [`Event.target`](/de/docs/Web/API/Event/target) {{ReadOnlyInline}}
  - : Ein Verweis auf das Objekt, an das das Ereignis ursprünglich gesendet wurde.
- [`Event.timeStamp`](/de/docs/Web/API/Event/timeStamp) {{ReadOnlyInline}}
  - : Die Zeit, zu der das Ereignis erstellt wurde (in Millisekunden). Laut Spezifikation ist dieser Wert die Zeit seit dem Beginn der Epoche – aber in Wirklichkeit variieren die Definitionen der Browser. Darüber hinaus wird daran gearbeitet, dies stattdessen zu einem [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zu ändern.
- [`Event.type`](/de/docs/Web/API/Event/type) {{ReadOnlyInline}}
  - : Der Name, der den Typ des Ereignisses identifiziert.

### Legacy- und nicht standardisierte Eigenschaften

- [`Event.cancelBubble`](/de/docs/Web/API/Event/cancelBubble) {{deprecated_inline}}
  - : Ein historischer Alias zu [`Event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation), der stattdessen verwendet werden sollte. Wenn sein Wert vor dem Zurückkehren aus einem Ereignis-Handler auf `true` gesetzt wird, verhindert dies die weitere Verbreitung des Ereignisses.
- [`Event.explicitOriginalTarget`](/de/docs/Web/API/Event/explicitOriginalTarget) {{non-standard_inline}} {{ReadOnlyInline}}
  - : Das explizite ursprüngliche Ziel des Ereignisses.
- [`Event.originalTarget`](/de/docs/Web/API/Event/originalTarget) {{non-standard_inline}} {{ReadOnlyInline}}
  - : Das ursprüngliche Ziel des Ereignisses, vor jeglichen Retargetings.
- [`Event.returnValue`](/de/docs/Web/API/Event/returnValue) {{deprecated_inline}}
  - : Eine historische Eigenschaft, die noch zur Unterstützung bestehender Webseiten unterstützt wird. Verwenden Sie stattdessen [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) und [`Event.defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented).
- [`Event.scoped`](/de/docs/Web/API/Event/composed) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Ein boolescher Wert, der angibt, ob das gegebene Ereignis durch das Shadow-Root in das Standard-DOM hinwegblubbern wird. Verwenden Sie stattdessen [`composed`](/de/docs/Web/API/Event/composed).

## Instanzmethoden

- [`Event.composedPath()`](/de/docs/Web/API/Event/composedPath)
  - : Gibt den Pfad des Ereignisses zurück (ein Array von Objekten, an denen Listener aufgerufen werden). Dies schließt keine Knoten in Shadow-Trees ein, wenn die Shadow-Root mit ihrem geschlossenen [`ShadowRoot.mode`](/de/docs/Web/API/ShadowRoot/mode) erstellt wurde.
- [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault)
  - : Bricht das Ereignis ab (wenn es abgebrochen werden kann).
- [`Event.stopImmediatePropagation()`](/de/docs/Web/API/Event/stopImmediatePropagation)
  - : Verhindert für dieses bestimmte Ereignis, dass alle anderen Listener aufgerufen werden. Dies schließt Listener ein, die an dasselbe Element sowie an Elemente gebunden sind, die später durchlaufen werden (während der Capture-Phase zum Beispiel).
- [`Event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation)
  - : Stoppt die Weiterverbreitung von Ereignissen im DOM.

### Veraltete Methoden

- [`Event.initEvent()`](/de/docs/Web/API/Event/initEvent) {{deprecated_inline}}
  - : Initialisiert den Wert eines erstellten Ereignisses. Wenn das Ereignis bereits verteilt wurde, tut diese Methode nichts. Verwenden Sie stattdessen den Konstruktor ([`Event()`](/de/docs/Web/API/Event/Event)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verfügbare Arten von Ereignissen: [Ereignisreferenz](/de/docs/Web/Events)
- [Einführung in Ereignisse](/de/docs/Learn/JavaScript/Building_blocks/Events)
- [Event-Bubbling](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling)
- [Erstellen und Auslösen von benutzerdefinierten Ereignissen](/de/docs/Web/Events/Creating_and_triggering_events)
