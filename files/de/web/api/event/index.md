---
title: Ereignis
slug: Web/API/Event
l10n:
  sourceCommit: c640274a19227cd5790912ea76841732baa6731f
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`Event`**-Schnittstelle repräsentiert ein Ereignis, das auf einem [`EventTarget`](/de/docs/Web/API/EventTarget) stattfindet.

Ein Ereignis kann durch eine Benutzeraktion ausgelöst werden, z. B. durch Klicken auf die Maustaste oder Tippen auf die Tastatur, oder von APIs generiert werden, um den Fortschritt einer asynchronen Aufgabe darzustellen. Es kann auch programmgesteuert ausgelöst werden, z. B. durch Aufrufen der [`HTMLElement.click()`](/de/docs/Web/API/HTMLElement/click)-Methode eines Elements oder durch Definieren des Ereignisses und anschließendes Senden an ein bestimmtes Ziel mit [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent).

Es gibt viele Arten von Ereignissen, von denen einige andere Schnittstellen auf Basis der Hauptschnittstelle `Event` verwenden. `Event` selbst enthält die Eigenschaften und Methoden, die allen Ereignissen gemeinsam sind.

Viele DOM-Elemente können so eingerichtet werden, dass sie diese Ereignisse akzeptieren (oder "auf sie hören") und Code ausführen, um sie zu verarbeiten (oder zu "handhaben"). Ereignis-Handler sind in der Regel an verschiedene [HTML-Elemente](/de/docs/Web/HTML/Element) (wie `<button>`, `<div>`, `<span>`, etc.) mit [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) angeschlossen, was normalerweise die Verwendung der alten HTML-[Ereignishandler-Attribute](/de/docs/Web/HTML/Global_attributes) ersetzt. Darüber hinaus können solche Handler, wenn sie richtig hinzugefügt wurden, bei Bedarf auch mit [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) getrennt werden.

> [!NOTE]
> Ein Element kann mehrere solcher Handler haben, sogar für dasselbe Ereignis – insbesondere, wenn separate, unabhängige Code-Module sie anhängen, jeweils für eigene unabhängige Zwecke. (Zum Beispiel eine Webseite mit einem Werbe- und einem Statistikmodul, die beide das Videoanschauen überwachen.)

Wenn es viele verschachtelte Elemente gibt, die jeweils eigene Handler haben, kann die Ereignisverarbeitung sehr kompliziert werden – besonders wenn ein Elternelement dasselbe Ereignis wie seine Kindelemente empfängt, da sie sich "räumlich" überlappen und das Ereignis technisch in beiden auftritt. Die Verarbeitungsreihenfolge solcher Ereignisse hängt von den [Event-Bubbling](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling)-Einstellungen jedes ausgelösten Handlers ab.

## Schnittstellen basierend auf Event

Im Folgenden finden Sie eine Liste von Schnittstellen, die auf der Hauptschnittstelle `Event` basieren, mit Links zu ihrer jeweiligen Dokumentation in der MDN-API-Referenz.

Beachten Sie, dass alle Ereignisschnittstellen Namen haben, die auf "Event" enden.

- {{domxref("AnimationEvent")}}
- {{domxref("AudioProcessingEvent")}} {{Deprecated_Inline}}
- {{domxref("BeforeUnloadEvent")}}
- {{domxref("BlobEvent")}}
- {{domxref("ClipboardEvent")}}
- {{domxref("CloseEvent")}}
- {{domxref("CompositionEvent")}}
- {{domxref("CustomEvent")}}
- {{domxref("DeviceMotionEvent")}}
- {{domxref("DeviceOrientationEvent")}}
- {{domxref("DragEvent")}}
- {{domxref("ErrorEvent")}}
- {{domxref("FetchEvent")}}
- {{domxref("FocusEvent")}}
- {{domxref("FontFaceSetLoadEvent")}}
- {{domxref("FormDataEvent")}}
- {{domxref("GamepadEvent")}}
- {{domxref("HashChangeEvent")}}
- {{domxref("HIDInputReportEvent")}}
- {{domxref("IDBVersionChangeEvent")}}
- {{domxref("InputEvent")}}
- {{domxref("KeyboardEvent")}}
- {{domxref("MediaStreamEvent")}} {{Deprecated_Inline}}
- {{domxref("MessageEvent")}}
- {{domxref("MouseEvent")}}
- {{domxref("MutationEvent")}} {{Deprecated_Inline}}
- {{domxref("OfflineAudioCompletionEvent")}}
- {{domxref("PageTransitionEvent")}}
- {{domxref("PaymentRequestUpdateEvent")}}
- {{domxref("PointerEvent")}}
- {{domxref("PopStateEvent")}}
- {{domxref("ProgressEvent")}}
- {{domxref("RTCDataChannelEvent")}}
- {{domxref("RTCPeerConnectionIceEvent")}}
- {{domxref("StorageEvent")}}
- {{domxref("SubmitEvent")}}
- {{domxref("SVGEvent")}} {{Deprecated_Inline}}
- {{domxref("TimeEvent")}}
- {{domxref("TouchEvent")}}
- {{domxref("TrackEvent")}}
- {{domxref("TransitionEvent")}}
- {{domxref("UIEvent")}}
- {{domxref("WebGLContextEvent")}}
- {{domxref("WheelEvent")}}

## Konstruktor

- {{domxref("Event.Event", "Event()")}}
  - : Erstellt ein `Event`-Objekt und gibt es an den Aufrufer zurück.

## Instanz-Eigenschaften

- {{domxref("Event.bubbles")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob das Ereignis im DOM hochtreibt ("bubbles").
- {{domxref("Event.cancelable")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob das Ereignis abgebrochen werden kann.
- {{domxref("Event.composed")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob das Ereignis über die Grenze zwischen Shadow DOM und regulärem DOM hinweg hochtreibt ("bubbles").
- {{domxref("Event.currentTarget")}} {{ReadOnlyInline}}
  - : Eine Referenz auf das aktuell registrierte Ziel für das Ereignis. Dies ist das Objekt, an das das Ereignis derzeit gesendet werden soll. Es ist möglich, dass dies im Laufe des Prozesses durch _Retargeting_ geändert wurde.
- {{domxref("Event.defaultPrevented")}} {{ReadOnlyInline}}
  - : Gibt an, ob der Aufruf von {{domxref("event.preventDefault()")}} das Ereignis abgebrochen hat.
- {{domxref("Event.eventPhase")}} {{ReadOnlyInline}}
  - : Gibt an, welche Phase des Ereignisablaufs gerade verarbeitet wird. Es ist eine der folgenden Zahlen: `NONE`, `CAPTURING_PHASE`, `AT_TARGET`, `BUBBLING_PHASE`.
- {{domxref("Event.isTrusted")}} {{ReadOnlyInline}}
  - : Gibt an, ob das Ereignis vom Browser (nach einem Benutzer-Klick zum Beispiel) oder durch ein Skript (unter Verwendung einer Ereignis-Erstellungsmethode) initiiert wurde.
- {{domxref("Event.srcElement")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Ein Alias für die Eigenschaft {{domxref("Event.target")}}. Verwenden Sie stattdessen {{domxref("Event.target")}}.
- {{domxref("Event.target")}} {{ReadOnlyInline}}
  - : Eine Referenz auf das Objekt, an das das Ereignis ursprünglich gesendet wurde.
- {{domxref("Event.timeStamp")}} {{ReadOnlyInline}}
  - : Die Zeit, zu der das Ereignis erstellt wurde (in Millisekunden). Laut Spezifikation ist dieser Wert die Zeit seit dem Epoch-Anfang, aber in Wirklichkeit variieren die Definitionen der Browser. Außerdem wird daran gearbeitet, dies zu {{domxref("DOMHighResTimeStamp")}} zu ändern.
- {{domxref("Event.type")}} {{ReadOnlyInline}}
  - : Der Name, der den Typ des Ereignisses identifiziert.

### Veraltete und nicht standardisierte Eigenschaften

- {{domxref("Event.cancelBubble")}} {{deprecated_inline}}
  - : Ein historischer Alias zu {{domxref("Event.stopPropagation()")}}, der stattdessen verwendet werden sollte. Das Setzen seines Wertes auf `true` verhindert vor dem Zurückkehren von einem Ereignis-Handler die weitere Ausbreitung des Ereignisses.
- {{domxref("Event.explicitOriginalTarget")}} {{non-standard_inline}} {{ReadOnlyInline}}
  - : Das explizit ursprüngliche Ziel des Ereignisses.
- {{domxref("Event.originalTarget")}} {{non-standard_inline}} {{ReadOnlyInline}}
  - : Das ursprüngliche Ziel des Ereignisses vor jeglichem Retargeting.
- {{domxref("Event.returnValue")}} {{deprecated_inline}}
  - : Eine historische Eigenschaft, die weiterhin unterstützt wird, um sicherzustellen, dass bestehende Websites weiter funktionieren. Verwenden Sie {{domxref("Event.preventDefault()")}} und {{domxref("Event.defaultPrevented")}} stattdessen.
- {{domxref("Event.composed", "Event.scoped")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Ein boolescher Wert, der anzeigt, ob das gegebene Ereignis über die Shadow-Root hinweg in das Standard-DOM hochtreibt. Verwenden Sie stattdessen {{domxref("Event.composed", "composed")}}.

## Instanz-Methoden

- {{domxref("Event.composedPath()")}}
  - : Gibt den Pfad des Ereignisses (ein Array von Objekten, auf denen Listener aufgerufen werden) zurück. Dies schließt keine Knoten in Shadow-Bäumen ein, wenn die Shadow-Root mit {{domxref("ShadowRoot.mode")}} geschlossen erstellt wurde.
- {{domxref("Event.preventDefault()")}}
  - : Bricht das Ereignis ab (falls es abgebrochen werden kann).
- {{domxref("Event.stopImmediatePropagation()")}}
  - : Verhindert für dieses bestimmte Ereignis, dass alle anderen Listener aufgerufen werden. Dies schließt Listener ein, die an dasselbe Element angehängt sind, sowie jene an Elementen, die später durchlaufen werden (zum Beispiel während der Capture-Phase).
- {{domxref("Event.stopPropagation()")}}
  - : Stoppt die Weitergabe von Ereignissen im DOM.

### Veraltete Methoden

- {{domxref("Event.initEvent()")}} {{deprecated_inline}}
  - : Initialisiert den Wert eines erstellten Ereignisses. Wenn das Ereignis bereits gesendet wurde, tut diese Methode nichts. Verwenden Sie stattdessen den Konstruktor ({{domxref("Event.Event", "Event()")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verfügbare Ereignistypen: [Ereignisreferenz](/de/docs/Web/Events)
- [Einführung in Ereignisse](/de/docs/Learn/JavaScript/Building_blocks/Events)
- [Event-Bubbling](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling)
- [Erstellen und Auslösen von benutzerdefinierten Ereignissen](/de/docs/Web/Events/Creating_and_triggering_events)
