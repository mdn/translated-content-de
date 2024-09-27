---
title: MediaQueryList
slug: Web/API/MediaQueryList
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("CSSOM")}}

Ein **`MediaQueryList`**-Objekt speichert Informationen zu einer [Media Query](/de/docs/Web/CSS/CSS_media_queries), die auf ein Dokument angewendet wird, und unterstützt sowohl die unmittelbare als auch die ereignisgesteuerte Übereinstimmung mit dem Zustand des Dokuments.

Sie können ein `MediaQueryList`-Objekt erstellen, indem Sie [`matchMedia()`](/de/docs/Web/API/Window/matchMedia) auf dem [`window`](/de/docs/Web/API/Window)-Objekt aufrufen. Das resultierende Objekt verwaltet das Senden von Benachrichtigungen an Listener, wenn sich der Media Query-Zustand ändert (d. h. wenn der Media Query-Test beginnt oder aufhört, zu `true` zu evaluieren).

Dies ist sehr nützlich für adaptives Design, da es möglich macht, ein Dokument zu beobachten, um zu erkennen, wenn sich seine Media Queries ändern, anstatt die Werte periodisch abzufragen. Es erlaubt Ihnen, programmatisch Änderungen an einem Dokument basierend auf dem Media Query-Status vorzunehmen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Das `MediaQueryList`-Interface erbt Eigenschaften von seinem Eltern-Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`matches`](/de/docs/Web/API/MediaQueryList/matches) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` zurückgibt, wenn das [`document`](/de/docs/Web/API/Document) derzeit der Media Query-Liste entspricht, oder `false`, wenn nicht.
- [`media`](/de/docs/Web/API/MediaQueryList/media) {{ReadOnlyInline}}
  - : Ein String, der eine serialisierte Media Query darstellt.

## Instanz-Methoden

_Das `MediaQueryList`-Interface erbt Methoden von seinem Eltern-Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`addListener()`](/de/docs/Web/API/MediaQueryList/addListener) {{deprecated_inline}}
  - : Fügt der `MediaQueryList` einen Callback hinzu, der aufgerufen wird, wann immer sich der Media Query-Status ändert—ob das Dokument den Media Queries in der Liste entspricht oder nicht. Diese Methode existiert hauptsächlich aus Gründen der Abwärtskompatibilität; nach Möglichkeit sollten Sie stattdessen [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um auf das [`change`](/de/docs/Web/API/MediaQueryList/change_event)-Ereignis zu achten.
- [`removeListener()`](/de/docs/Web/API/MediaQueryList/removeListener) {{deprecated_inline}}
  - : Entfernt den angegebenen Listener-Callback aus den Rückrufen, die bei einer Statusänderung der Media Query in der `MediaQueryList` aufgerufen werden sollen. Diese Methode wurde zur Abwärtskompatibilität beibehalten; nach Möglichkeit sollten Sie im Allgemeinen [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) verwenden, um Änderungsbenachrichtigungs-Callbacks zu entfernen (die zuvor mit `addEventListener()` hinzugefügt worden sein sollten).

## Ereignisse

_Die folgenden Ereignisse werden an `MediaQueryList`-Objekte gesendet:_

- [`change`](/de/docs/Web/API/MediaQueryList/change_event)
  - : An die `MediaQueryList` gesendet, wenn sich das Ergebnis der Ausführung der Media Query gegen das Dokument ändert. Zum Beispiel, wenn die Media Query `(min-width: 400px)` lautet, wird das `change`-Ereignis jedes Mal ausgelöst, wenn sich die Breite des [Viewports](/de/docs/Glossary/viewport) des Dokuments der 400px-Grenze in eine der beiden Richtungen annähert.

## Beispiele

Dieses einfache Beispiel erstellt eine `MediaQueryList` und richtet dann einen Listener ein, um zu erkennen, wann sich der Media Query-Status ändert. Es führt eine benutzerdefinierte Funktion aus, um das Erscheinungsbild der Seite zu ändern.

```js
const para = document.querySelector("p");
const mql = window.matchMedia("(max-width: 600px)");

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
> Sie finden dieses Beispiel auf GitHub (siehe den [Quellcode](https://github.com/mdn/dom-examples/blob/main/mediaquerylist/index.html) und auch den [live laufenden Code](https://mdn.github.io/dom-examples/mediaquerylist/index.html)).

Sie finden weitere Beispiele auf den einzelnen Eigenschafts- und Methodenseiten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Verwendung von Media Queries im Code](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
- [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)
- Der Artikel [`Window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio) enthält ebenfalls ein nützliches Beispiel
