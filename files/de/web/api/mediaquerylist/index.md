---
title: MediaQueryList
slug: Web/API/MediaQueryList
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("CSSOM")}}

Ein **`MediaQueryList`**-Objekt speichert Informationen über eine [Media Query](/de/docs/Web/CSS/CSS_media_queries), die auf ein Dokument angewendet wird, und unterstützt sowohl sofortige als auch ereignisgesteuerte Übereinstimmungen mit dem Zustand des Dokuments.

Sie können eine `MediaQueryList` erstellen, indem Sie [`matchMedia()`](/de/docs/Web/API/Window/matchMedia) auf dem [`window`](/de/docs/Web/API/Window)-Objekt aufrufen. Das resultierende Objekt sendet Benachrichtigungen an die Zuhörer, wenn sich der Zustand der Media Query ändert (d.h. wenn der Test der Media Query beginnt oder aufhört, `true` zu sein).

Dies ist sehr nützlich für adaptives Design, da es möglich macht, ein Dokument zu beobachten, um zu erkennen, wann sich seine Media Queries ändern, anstatt die Werte regelmäßig abzufragen. Es ermöglicht Ihnen, programmgesteuert Änderungen an einem Dokument basierend auf dem Status der Media Query vorzunehmen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Das `MediaQueryList`-Interface erbt Eigenschaften von seinem Elterninterface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`matches`](/de/docs/Web/API/MediaQueryList/matches) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` zurückgibt, wenn das [`document`](/de/docs/Web/API/Document) derzeit der Media Query-Liste entspricht, oder `false`, wenn nicht.
- [`media`](/de/docs/Web/API/MediaQueryList/media) {{ReadOnlyInline}}
  - : Ein String, der eine serialisierte Media Query darstellt.

## Instanzmethoden

_Das `MediaQueryList`-Interface erbt Methoden von seinem Elterninterface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`addListener()`](/de/docs/Web/API/MediaQueryList/addListener) {{deprecated_inline}}
  - : Fügt eine Rückruffunktion zur `MediaQueryList` hinzu, die jedes Mal aufgerufen wird, wenn sich der Status der Media Query ändert—ob das Dokument nun den Media Queries in der Liste entspricht oder nicht. Diese Methode existiert hauptsächlich aus Gründen der Abwärtskompatibilität; wenn möglich, sollten Sie stattdessen [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um auf das [`change`](/de/docs/Web/API/MediaQueryList/change_event) Ereignis zu achten.
- [`removeListener()`](/de/docs/Web/API/MediaQueryList/removeListener) {{deprecated_inline}}
  - : Entfernt den angegebenen Rückruf-Zuhörer aus den Rückrufen, die aufgerufen werden, wenn sich der Medienabfragestatus der `MediaQueryList` ändert, was jedes Mal passiert, wenn das Dokument zwischen Übereinstimmung und Nicht-Übereinstimmung mit den in der `MediaQueryList` aufgeführten Media Queries wechselt. Diese Methode wurde aus Gründen der Abwärtskompatibilität beibehalten; wenn möglich, sollten Sie normalerweise [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) verwenden, um Änderungsbenachrichtigungs-Rückrufe zu entfernen (die zuvor mit `addEventListener()` hinzugefügt worden sein sollten).

## Ereignisse

_Die folgenden Ereignisse werden an `MediaQueryList`-Objekte gesendet:_

- [`change`](/de/docs/Web/API/MediaQueryList/change_event)
  - : Wird an die `MediaQueryList` gesendet, wenn das Ergebnis des Ausführens der Media Query gegen das Dokument sich ändert. Zum Beispiel, wenn die Media Query `(min-width: 400px)` ist, wird das `change`-Ereignis jedes Mal ausgelöst, wenn sich die Breite des {{Glossary("viewport", "Viewports")}} des Dokuments so ändert, dass seine Breite die 400px-Grenze in beide Richtungen überschreitet.

## Beispiele

Dieses Beispiel erstellt eine `MediaQueryList` und richtet anschließend einen Zuhörer ein, um zu erkennen, wann sich der Status der Media Query ändert. Wenn dies geschieht, wird eine benutzerdefinierte Funktion ausgeführt, die das Erscheinungsbild der Seite ändert.

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
> Sie können dieses Beispiel auf GitHub finden (siehe den [Quellcode](https://github.com/mdn/dom-examples/blob/main/mediaquerylist/index.html), und sehen Sie es sich auch [live an](https://mdn.github.io/dom-examples/mediaquerylist/index.html)).

Sie können andere Beispiele auf den einzelnen Eigenschafts- und Methodenseiten finden.

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
