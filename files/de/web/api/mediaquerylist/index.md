---
title: MediaQueryList
slug: Web/API/MediaQueryList
l10n:
  sourceCommit: 896a41d7d9832367a1e24af567fb419e9d4182f8
---

{{APIRef("CSSOM view API")}}

Ein **`MediaQueryList`** Objekt speichert Informationen über eine auf ein Dokument angewendete [Media-Abfrage](/de/docs/Web/CSS/CSS_media_queries) und unterstützt sowohl das sofortige als auch das ereignisgesteuerte Abgleichen mit dem Zustand des Dokuments.

Sie können ein `MediaQueryList` Objekt erstellen, indem Sie [`matchMedia()`](/de/docs/Web/API/Window/matchMedia) auf dem [`window`](/de/docs/Web/API/Window) Objekt aufrufen. Das resultierende Objekt sendet Benachrichtigungen an Listener, wenn sich der Status der Media Query ändert (d.h. wenn der Test der Media Query beginnt oder aufhört, `true` zu ergeben).

Dies ist sehr nützlich für adaptives Design, da es möglich macht, ein Dokument zu beobachten, um zu erkennen, wann sich seine Media Queries ändern, anstatt die Werte regelmäßig abzufragen. Dadurch können Sie programmatisch Änderungen an einem Dokument basierend auf dem Status der Media Queries vornehmen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Das `MediaQueryList` Interface erbt Eigenschaften von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`matches`](/de/docs/Web/API/MediaQueryList/matches) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` zurückgibt, wenn das [`document`](/de/docs/Web/API/Document) derzeit die Media Query List erfüllt, oder `false` wenn nicht.
- [`media`](/de/docs/Web/API/MediaQueryList/media) {{ReadOnlyInline}}
  - : Ein String, der eine serialisierte Media Query darstellt.

## Instanzmethoden

_Das `MediaQueryList` Interface erbt Methoden von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`addListener()`](/de/docs/Web/API/MediaQueryList/addListener) {{deprecated_inline}}
  - : Fügt der `MediaQueryList` einen Callback hinzu, der aufgerufen wird, wann immer sich der Status der Media Query ändert—ob das Dokument die Media Queries in der Liste erfüllt oder nicht. Diese Methode existiert hauptsächlich für die Rückwärtskompatibilität; wenn möglich sollten Sie stattdessen [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) nutzen, um auf das [`change`](/de/docs/Web/API/MediaQueryList/change_event) Ereignis zu achten.
- [`removeListener()`](/de/docs/Web/API/MediaQueryList/removeListener) {{deprecated_inline}}
  - : Entfernt den angegebenen Listener-Callback von den Aufrufen, die erfolgen, wenn die `MediaQueryList` ihren Status der Media Query ändert. Dies passiert jedes Mal, wenn das Dokument zwischen dem Erfüllen und Nicht-Erfüllen der Media Queries in der `MediaQueryList` wechselt. Diese Methode wurde aus Gründen der Rückwärtskompatibilität beibehalten; wenn möglich sollten Sie in der Regel [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) verwenden, um Änderungsbenachrichtigungscallbacks zu entfernen (die zuvor mit `addEventListener()` hinzugefügt worden sein sollten).

## Ereignisse

_Die folgenden Ereignisse werden an `MediaQueryList` Objekte gesendet:_

- [`change`](/de/docs/Web/API/MediaQueryList/change_event)
  - : Wird an die `MediaQueryList` gesendet, wenn sich das Ergebnis der Ausführung der Media Query gegen das Dokument ändert. Wenn die Media Query beispielsweise `(width >= 400px)` lautet, wird das `change`-Ereignis jedes Mal ausgelöst, wenn sich die Breite des {{Glossary("viewport", "Ansichtsfensters")}} des Dokuments so ändert, dass die Breite die Grenze von 400px in eine Richtung überschreitet.

## Beispiele

Dieses Beispiel erstellt ein `MediaQueryList` und richtet dann einen Listener ein, um zu erkennen, wann sich der Status der Media Query ändert. Dabei wird eine benutzerdefinierte Funktion aufgerufen, um das Erscheinungsbild der Seite zu ändern.

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
> Sie finden dieses Beispiel auf GitHub (siehe den [Quellcode](https://github.com/mdn/dom-examples/blob/main/mediaquerylist/index.html) und es läuft auch [live](https://mdn.github.io/dom-examples/mediaquerylist/index.html)).

Weitere Beispiele finden Sie auf den einzelnen Eigenschafts- und Methodenseiten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Verwendung von Media Queries im Code](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
- [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)
- Der Artikel [`Window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio) enthält ebenfalls ein nützliches Beispiel
