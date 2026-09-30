---
title: "EventTarget: when()-Methode"
short-title: when()
slug: Web/API/EventTarget/when
l10n:
  sourceCommit: bacd00c353f643d8f5be0ce769015b1a66b4251a
---

{{APIRef("DOM")}}{{SeeCompatTable}}

Die **`when()`**-Methode der [`EventTarget`](/de/docs/Web/API/EventTarget)-Schnittstelle gibt ein [`Observable`](/de/docs/Web/API/Observable)-Objekt zurück, das einen Strom von Ereignissen repräsentiert, die auf dem EventTarget ausgelöst werden, auf dem die Methode aufgerufen wird.

Sie können auf dem zurückgegebenen Observable [`subscribe()`](/de/docs/Web/API/Observable/subscribe) aufrufen, um den Ereignisstrom zu abonnieren.

Das zurückgegebene Observable verwendet im Hintergrund einen Event Listener, wie er auch durch [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) erstellt wird. Die Erstellung dieses Listeners, seine gemeinsame Nutzung durch Observer und seine Entfernung folgen demselben Lebenszyklus wie das [`Subscriber`](/de/docs/Web/API/Subscriber)-Objekt eines benutzerdefinierten Observables.

> [!NOTE]
> Dieses Verhalten bei gemeinsam genutzten Abonnements kann sich ändern. Ein [Vorschlag, jedem Observer einen eigenen `Subscriber` zu geben](https://github.com/WICG/observable/issues/217), würde dazu führen, dass jedes Abonnement eine separate Ausführung startet, statt ein aktives Abonnement wiederzuverwenden.

## Syntax

```js-nolint
when(type)
when(type, options)
```

### Parameter

- `type`
  - : Eine Zeichenfolge, bei der die Groß- und Kleinschreibung beachtet wird und die den [Ereignistyp](/de/docs/Web/API/Document_Object_Model/Events) angibt, auf den gewartet werden soll.
- `options` {{optional_inline}}
  - : Ein Objekt, das Eigenschaften des Event Listeners festlegt. Folgende Optionen sind verfügbar:
    - `capture` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, dass Ereignisse des angegebenen Typs an den im Hintergrund registrierten Listener weitergeleitet werden, bevor sie an ein darunterliegendes `EventTarget` im DOM-Baum weitergeleitet werden. Wenn die Option nicht angegeben wird, ist der Standardwert `false`.
    - `passive` {{optional_inline}}
      - : Ein boolescher Wert, der bei `true` angibt, dass Callbacks, die die Ereignisse verarbeiten, niemals [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen. Ruft ein passiver Listener `preventDefault()` auf, hat dies keine Wirkung und es kann eine Warnung in der Konsole ausgegeben werden.

        Wenn diese Option nicht angegeben wird, gilt derselbe Standardwert wie bei `addEventListener()`. Weitere Informationen finden Sie unter [Passive Listener verwenden](/de/docs/Web/API/EventTarget/addEventListener#using_passive_listeners).

### Rückgabewert

Ein [`Observable`](/de/docs/Web/API/Observable).

## Beispiele

### when() verwenden

Dieses Beispiel ist eine einfache Anwendung zum Zählen von Klicks.

#### HTML

Das Markup enthält ein {{htmlelement("button")}}-Element zum Anklicken und ein {{htmlelement("p")}}-Element zur Anzeige der Anzahl der Klicks.

```html live-sample___basic-when
<button>Click me</button>
<p>Click count: 0</p>
```

#### JavaScript

Wir rufen `when("click")` auf `btn` auf und erhalten so ein Observable für den `click`-Ereignisstrom. Anschließend rufen wir `subscribe()` auf dem Observable auf, um die Funktion `increment()` zu abonnieren. Sie wird dadurch bei jedem Klick auf den Button aufgerufen.

```js live-sample___basic-when
const btn = document.querySelector("button");
const para = document.querySelector("p");

let countValue = 0;

function increment() {
  countValue++;
  para.textContent = `Click count: ${countValue}`;
}

btn.when("click").subscribe(increment);
```

> [!NOTE]
> In diesem Beispiel sind `.when("click").subscribe(increment)` und `.addEventListener("click", increment)` nahezu gleichwertig. Mit `when()` können Sie jedoch Ereignisströme mithilfe von Observables kombinieren. Der Leitfaden [Observables verwenden](/de/docs/Web/API/Observable_API/Using_observables) enthält weitere Beispiele.

#### Ergebnis

Das gerenderte Ergebnis sieht wie folgt aus:

{{EmbedLiveSample("basic-when", "", 80)}}

Klicken Sie auf den Button, um zu sehen, wie sich der Klickzähler erhöht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Observables verwenden](/de/docs/Web/API/Observable_API/Using_observables)
- [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)
- [Erläuterung zu Observables](https://github.com/WICG/observable/blob/master/README.md)
