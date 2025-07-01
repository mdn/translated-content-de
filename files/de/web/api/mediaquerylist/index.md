---
title: MediaQueryList
slug: Web/API/MediaQueryList
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{APIRef("CSSOM")}}

Ein **`MediaQueryList`**-Objekt speichert Informationen zu einer [Media Query](/de/docs/Web/CSS/CSS_media_queries), die auf ein Dokument angewendet wird, mit Unterstützung sowohl für sofortige als auch ereignisgesteuerte Übereinstimmung mit dem Status des Dokuments.

Sie können eine `MediaQueryList` erstellen, indem Sie [`matchMedia()`](/de/docs/Web/API/Window/matchMedia) auf dem [`window`](/de/docs/Web/API/Window)-Objekt aufrufen. Das resultierende Objekt verwaltet das Senden von Benachrichtigungen an Listener, wenn sich der Status der Media Query ändert (d.h. wenn der Test der Media Query beginnt oder aufhört, `true` zu evaluieren).

Dies ist sehr nützlich für adaptives Design, da es ermöglicht, ein Dokument zu beobachten, um zu erkennen, wann sich seine Media Queries ändern, anstatt die Werte periodisch abzufragen, und ermöglicht es Ihnen, programmatisch Änderungen an einem Dokument basierend auf dem Media Query-Status vorzunehmen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Die `MediaQueryList`-Schnittstelle erbt Eigenschaften von ihrer Eltern-Schnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`matches`](/de/docs/Web/API/MediaQueryList/matches) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` zurückgibt, wenn das [`document`](/de/docs/Web/API/Document) derzeit den Media Query-Listen entspricht, oder `false`, wenn nicht.
- [`media`](/de/docs/Web/API/MediaQueryList/media) {{ReadOnlyInline}}
  - : Ein String, der eine serialisierte Media Query darstellt.

## Instanz-Methoden

_Die `MediaQueryList`-Schnittstelle erbt Methoden von ihrer Eltern-Schnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`addListener()`](/de/docs/Web/API/MediaQueryList/addListener) {{deprecated_inline}}
  - : Fügt der `MediaQueryList` eine Callback-Funktion hinzu, die aufgerufen wird, wann immer sich der Status der Media Query ändert — ob das Dokument den Media Queries in der Liste entspricht oder nicht. Diese Methode existiert hauptsächlich aus Kompatibilitätsgründen; nach Möglichkeit sollten Sie stattdessen [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um das [`change`](/de/docs/Web/API/MediaQueryList/change_event) Ereignis zu überwachen.
- [`removeListener()`](/de/docs/Web/API/MediaQueryList/removeListener) {{deprecated_inline}}
  - : Entfernt den angegebenen Listener-Callback aus den Rückrufen, die aufgerufen werden, wenn sich der Media Query-Status der `MediaQueryList` ändert, was passiert, wenn das Dokument zwischen der Übereinstimmung und der Nicht-Übereinstimmung mit den in der `MediaQueryList` aufgeführten Media Queries wechselt. Diese Methode wurde aus Gründen der Rückwärtskompatibilität beibehalten; nach Möglichkeit sollten Sie im Allgemeinen [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) verwenden, um Änderungsbenachrichtigungs-Callbacks zu entfernen (die zuvor mit `addEventListener()` hinzugefügt worden sein sollten).

## Ereignisse

_Die folgenden Ereignisse werden an `MediaQueryList`-Objekte übermittelt:_

- [`change`](/de/docs/Web/API/MediaQueryList/change_event)
  - : Wird an die `MediaQueryList` gesendet, wenn sich das Ergebnis der Ausführung der Media Query gegen das Dokument ändert. Wenn zum Beispiel die Media Query `(width >= 400px)` lautet, wird das `change`-Ereignis jedes Mal ausgelöst, wenn sich die Breite des {{Glossary("viewport", "Ansichtsfensters")}} des Dokuments ändert, sodass seine Breite über die 400px-Grenze in beide Richtungen überschreitet.

## Beispiele

Dieses Beispiel erstellt eine `MediaQueryList` und richtet dann einen Listener ein, um zu erkennen, wann sich der Status der Media Query ändert, und führt bei Änderung eine benutzerdefinierte Funktion aus, um das Erscheinungsbild der Seite zu ändern.

```js
const para = document.querySelector("p");
const mql = window.matchMedia("(width <= 600px)");

function screenTest(e) {
  if (e.matches) {
    /* the viewport is 600 pixels wide or less */
    para.textContent = "This is a narrow screen — less than 600px wide.";
    document.body.style.backgroundColor = "red";
  } else {
    /* the viewport is more than 600 pixels wide */
    para.textContent = "This is a wide screen — more than 600px wide.";
    document.body.style.backgroundColor = "blue";
  }
}

mql.addEventListener("change", screenTest);
```

> [!NOTE]
> Sie können dieses Beispiel auf GitHub finden (siehe den [Quellcode](https://github.com/mdn/dom-examples/blob/main/mediaquerylist/index.html), und sehen Sie es auch [live laufen](https://mdn.github.io/dom-examples/mediaquerylist/index.html)).

Sie können weitere Beispiele auf den einzelnen Seiten zu Eigenschaften und Methoden finden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Media Queries aus Code heraus verwenden](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
- [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)
- Der Artikel [`Window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio) enthält ebenfalls ein hilfreiches Beispiel
