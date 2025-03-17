---
title: MediaQueryList
slug: Web/API/MediaQueryList
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{APIRef("CSSOM")}}

Ein **`MediaQueryList`** Objekt speichert Informationen zu einer [Media Query](/de/docs/Web/CSS/CSS_media_queries), die auf ein Dokument angewendet wird, mit Unterstützung sowohl für unmittelbare als auch ereignisgesteuerte Übereinstimmungen mit dem Status des Dokuments.

Sie können eine `MediaQueryList` erstellen, indem Sie [`matchMedia()`](/de/docs/Web/API/Window/matchMedia) auf dem [`window`](/de/docs/Web/API/Window) Objekt aufrufen. Das resultierende Objekt übernimmt das Senden von Benachrichtigungen an Listener, wenn sich der Status der Media Query ändert (d.h. wenn der Test der Media Query beginnt oder aufhört, `true` zu ergeben).

Dies ist sehr nützlich für adaptives Design, da es möglich macht, ein Dokument zu beobachten, um zu erkennen, wann sich seine Media Queries ändern, anstatt die Werte periodisch abzufragen, und es erlaubt Ihnen, programmatisch Änderungen an einem Dokument basierend auf dem Status der Media Query vorzunehmen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Das `MediaQueryList`-Interface erbt Eigenschaften von seinem Eltern-Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`matches`](/de/docs/Web/API/MediaQueryList/matches) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` zurückgibt, wenn das [`document`](/de/docs/Web/API/Document) derzeit mit der Media Query-Liste übereinstimmt, andernfalls `false`.
- [`media`](/de/docs/Web/API/MediaQueryList/media) {{ReadOnlyInline}}
  - : Ein String, der eine serialisierte Media Query darstellt.

## Instanz-Methoden

_Das `MediaQueryList`-Interface erbt Methoden von seinem Eltern-Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`addListener()`](/de/docs/Web/API/MediaQueryList/addListener) {{deprecated_inline}}
  - : Fügt der `MediaQueryList` einen Callback hinzu, der aufgerufen wird, wann immer sich der Media Query-Status ändert—ob das Dokument mit den Media Queries in der Liste übereinstimmt oder nicht. Diese Methode existiert hauptsächlich aus Gründen der Abwärtskompatibilität; wenn möglich, sollten Sie stattdessen [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um das [`change`](/de/docs/Web/API/MediaQueryList/change_event) Ereignis zu überwachen.
- [`removeListener()`](/de/docs/Web/API/MediaQueryList/removeListener) {{deprecated_inline}}
  - : Entfernt den angegebenen Listener-Callback aus den Callbacks, die aufgerufen werden sollen, wenn sich der `MediaQueryList`-Status der Media Query ändert, was passiert, wenn das Dokument zwischen Übereinstimmen und Nicht-Übereinstimmen der Media Queries in der `MediaQueryList` wechselt. Diese Methode wurde aus Gründen der Abwärtskompatibilität beibehalten; wenn möglich, sollten Sie im Allgemeinen [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) verwenden, um Änderungsbenachrichtigungs-Callbacks zu entfernen (die zuvor mit `addEventListener()` hinzugefügt worden sein sollten).

## Ereignisse

_Die folgenden Ereignisse werden an `MediaQueryList`-Objekte gesendet:_

- [`change`](/de/docs/Web/API/MediaQueryList/change_event)
  - : Wird an die `MediaQueryList` gesendet, wenn sich das Ergebnis des Ausführens der Media Query gegen das Dokument ändert. Zum Beispiel, wenn die Media Query `(min-width: 400px)` ist, wird das `change`-Ereignis jedes Mal ausgelöst, wenn sich die Breite des {{Glossary("viewport", "Viewport")}} des Dokuments so ändert, dass seine Breite die 400px-Grenze in jede Richtung überschreitet.

## Beispiele

Dieses Beispiel erstellt eine `MediaQueryList` und richtet dann einen Listener ein, um zu erkennen, wann sich der Media Query-Status ändert, und führt eine benutzerdefinierte Funktion aus, um das Erscheinungsbild der Seite zu ändern.

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
> Sie finden dieses Beispiel auf GitHub (siehe den [Quellcode](https://github.com/mdn/dom-examples/blob/main/mediaquerylist/index.html), und sehen Sie es auch [live in Aktion](https://mdn.github.io/dom-examples/mediaquerylist/index.html)).

Sie finden weitere Beispiele auf den einzelnen Eigenschafts- und Methodenseiten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Media Queries im Code verwenden](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
- [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)
- Der Artikel [`Window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio) enthält ebenfalls ein nützliches Beispiel
