---
title: MediaQueryList
slug: Web/API/MediaQueryList
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSSOM view API")}}

Ein **`MediaQueryList`**-Objekt speichert Informationen über eine [Media Query](/de/docs/Web/CSS/Guides/Media_queries), die auf ein Dokument angewendet wird, mit Unterstützung für sowohl sofortige als auch ereignisgesteuerte Abgleiche mit dem Zustand des Dokuments.

Sie können eine `MediaQueryList` erstellen, indem Sie [`matchMedia()`](/de/docs/Web/API/Window/matchMedia) auf dem [`window`](/de/docs/Web/API/Window)-Objekt aufrufen. Das resultierende Objekt kümmert sich darum, Benachrichtigungen an Listener zu senden, wenn sich der Status der Media Query ändert (d.h. wenn die Media Query beginnt oder aufhört, zu `true` zu evaluieren).

Dies ist sehr nützlich für adaptives Design, da es möglich macht, ein Dokument zu beobachten, um zu erkennen, wann sich seine Media Queries ändern, anstatt die Werte periodisch abzufragen, und ermöglicht es Ihnen, programmatisch Änderungen an einem Dokument basierend auf dem Status der Media Query vorzunehmen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Die `MediaQueryList`-Schnittstelle erbt Eigenschaften von ihrer Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`matches`](/de/docs/Web/API/MediaQueryList/matches) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` zurückgibt, wenn das [`document`](/de/docs/Web/API/Document) derzeit der Media Query-Liste entspricht, oder `false`, wenn nicht.
- [`media`](/de/docs/Web/API/MediaQueryList/media) {{ReadOnlyInline}}
  - : Ein String, der eine serialisierte Media Query darstellt.

## Instanz-Methoden

_Die `MediaQueryList`-Schnittstelle erbt Methoden von ihrer Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`addListener()`](/de/docs/Web/API/MediaQueryList/addListener) {{deprecated_inline}}
  - : Fügt der `MediaQueryList` einen Rückruf hinzu, der immer dann aufgerufen wird, wenn sich der Status der Media Query ändert – ob das Dokument den Media Queries in der Liste entspricht oder nicht. Diese Methode existiert hauptsächlich für die Rückwärtskompatibilität; wenn möglich, sollten Sie stattdessen [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um das [`change`](/de/docs/Web/API/MediaQueryList/change_event)-Ereignis zu überwachen.
- [`removeListener()`](/de/docs/Web/API/MediaQueryList/removeListener) {{deprecated_inline}}
  - : Entfernt den angegebenen Listener-Rückruf aus den Rückrufen, die aufgerufen werden sollen, wenn sich der Status der Media Query in der `MediaQueryList` ändert, was jedes Mal passiert, wenn das Dokument zwischen einem passenden und nicht passenden Status der Media Queries in der `MediaQueryList` wechselt. Diese Methode wurde aus Gründen der Rückwärtskompatibilität beibehalten; wenn möglich, sollten Sie im Allgemeinen [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) verwenden, um Änderungsbenachrichtigungs-Rückrufe zu entfernen (die zuvor mit `addEventListener()` hinzugefügt worden sein sollten).

## Ereignisse

_Die folgenden Ereignisse werden an `MediaQueryList`-Objekte gesendet:_

- [`change`](/de/docs/Web/API/MediaQueryList/change_event)
  - : Wird an die `MediaQueryList` gesendet, wenn sich das Ergebnis der Ausführung der Media Query gegen das Dokument ändert. Wenn die Media Query beispielsweise `(width >= 400px)` lautet, wird das `change`-Ereignis jedes Mal ausgelöst, wenn sich die Breite des {{Glossary("viewport", "Viewports")}} des Dokuments so ändert, dass seine Breite die 400px-Grenze in jede Richtung überschreitet.

## Beispiele

Dieses Beispiel erstellt eine `MediaQueryList` und richtet dann einen Listener ein, um zu erkennen, wann sich der Status der Media Query ändert, und eine benutzerdefinierte Funktion auszuführen, um das Aussehen der Seite zu ändern.

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
> Sie können dieses Beispiel auf GitHub finden (siehe den [Quellcode](https://github.com/mdn/dom-examples/blob/main/mediaquerylist/index.html), und auch [live laufen](https://mdn.github.io/dom-examples/mediaquerylist/index.html) sehen).

Weitere Beispiele finden Sie auf den einzelnen Eigenschafts- und Methodenseiten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [Media Queries im Code verwenden](/de/docs/Web/CSS/Guides/Media_queries/Testing)
- [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
- [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)
- Der Artikel [`Window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio) enthält ebenfalls ein nützliches Beispiel
