---
title: MediaQueryList
slug: Web/API/MediaQueryList
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("CSSOM")}}

Ein **`MediaQueryList`**-Objekt speichert Informationen über eine [Media Query](/de/docs/Web/CSS/CSS_media_queries), die auf ein Dokument angewendet wird, mit Unterstützung für sowohl unmittelbare als auch ereignisgesteuerte Übereinstimmung mit dem Zustand des Dokuments.

Sie können ein `MediaQueryList`-Objekt erstellen, indem Sie [`matchMedia()`](/de/docs/Web/API/Window/matchMedia) am [`window`](/de/docs/Web/API/Window)-Objekt aufrufen. Das resultierende Objekt kümmert sich um das Senden von Benachrichtigungen an Listener, wenn sich der Status der Media Query ändert (d.h. wenn der Test der Media Query zu `true` beginnt oder aufhört zu evaluieren).

Dies ist sehr nützlich für adaptives Design, da es möglich macht, ein Dokument zu beobachten, um zu erkennen, wann sich seine Media Queries ändern, anstatt die Werte periodisch abzufragen, und da es Ihnen ermöglicht, programmgesteuert Änderungen an einem Dokument basierend auf dem Status der Media Query vorzunehmen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Die `MediaQueryList`-Schnittstelle erbt Eigenschaften von ihrer übergeordneten Schnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`matches`](/de/docs/Web/API/MediaQueryList/matches) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` zurückgibt, wenn das [`document`](/de/docs/Web/API/Document) aktuell der Media Query Liste entspricht, oder `false` wenn nicht.
- [`media`](/de/docs/Web/API/MediaQueryList/media) {{ReadOnlyInline}}
  - : Ein String, der eine serialisierte Media Query darstellt.

## Instanz-Methoden

_Die `MediaQueryList`-Schnittstelle erbt Methoden von ihrer übergeordneten Schnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`addListener()`](/de/docs/Web/API/MediaQueryList/addListener) {{deprecated_inline}}
  - : Fügt der `MediaQueryList` einen Rückruf hinzu, der aufgerufen wird, wann immer sich der Media Query Status—ob das Dokument den Media Queries in der Liste entspricht oder nicht—ändert. Diese Methode existiert hauptsächlich für die Abwärtskompatibilität; wenn möglich, sollten Sie stattdessen [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, um auf das [`change`](/de/docs/Web/API/MediaQueryList/change_event)-Ereignis zu reagieren.
- [`removeListener()`](/de/docs/Web/API/MediaQueryList/removeListener) {{deprecated_inline}}
  - : Entfernt den angegebenen Listener-Rückruf aus den Rückrufen, die aufgerufen werden, wenn die `MediaQueryList` den Media Query Status ändert, was passiert, sobald das Dokument zwischen dem Entsprechen und Nicht-Entsprechen der in der `MediaQueryList` aufgeführten Media Queries wechselt. Diese Methode wurde für die Abwärtskompatibilität beibehalten; wo möglich, sollten Sie im Allgemeinen [`removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) verwenden, um Änderungs-Benachrichtigungsrückrufe zu entfernen (die zuvor mit `addEventListener()` hinzugefügt wurden).

## Ereignisse

_Die folgenden Ereignisse werden an `MediaQueryList`-Objekte gesendet:_

- [`change`](/de/docs/Web/API/MediaQueryList/change_event)
  - : Wird an die `MediaQueryList` gesendet, wenn sich das Ergebnis der Überprüfung der Media Query gegen das Dokument ändert. Wenn beispielsweise die Media Query `(min-width: 400px)` ist, wird das `change`-Ereignis jede Mal ausgelöst, wenn sich die Breite des [Viewports](/de/docs/Glossary/viewport) des Dokuments so ändert, dass sich seine Breite über die 400px-Grenze in beide Richtungen bewegt.

## Beispiele

Dieses einfache Beispiel erstellt eine `MediaQueryList` und richtet dann einen Listener ein, um zu erkennen, wenn sich der Media Query Status ändert, und führt eine benutzerdefinierte Funktion aus, um das Erscheinungsbild der Seite zu ändern.

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
> Sie können dieses Beispiel auf GitHub finden (siehe den [Quellcode](https://github.com/mdn/dom-examples/blob/main/mediaquerylist/index.html), und auch live [ausführen](https://mdn.github.io/dom-examples/mediaquerylist/index.html)).

Weitere Beispiele finden Sie auf den einzelnen Seiten der Eigenschaften und Methoden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Verwendung von Media Queries aus Code](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
- [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)
- Der Artikel [`Window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio) enthält ebenfalls ein nützliches Beispiel.
