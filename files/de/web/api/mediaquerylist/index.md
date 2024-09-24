---
title: MediaQueryList
slug: Web/API/MediaQueryList
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("CSSOM")}}

Ein **`MediaQueryList`**-Objekt speichert Informationen zu einer [Media Queries](/de/docs/Web/CSS/CSS_media_queries), die auf ein Dokument angewendet wird, mit Unterstützung sowohl für sofortige als auch ereignisgesteuerte Übereinstimmung mit dem Zustand des Dokuments.

Sie können eine `MediaQueryList` erstellen, indem Sie {{DOMxRef("Window.matchMedia", "matchMedia()")}} auf dem {{DOMxRef("window")}}-Objekt aufrufen. Das resultierende Objekt sendet Benachrichtigungen an Listener, wenn sich der Status der Media Queries ändert (d. h., wenn der Media Queries Test beginnt oder aufhört, `true` zu ergeben).

Dies ist sehr nützlich für adaptives Design, da es möglich wird, ein Dokument zu beobachten, um festzustellen, wann sich seine Media Queries ändern, anstatt die Werte periodisch abzufragen, und ermöglicht es Ihnen, programmgesteuert Änderungen an einem Dokument basierend auf dem Status der Media Queries vorzunehmen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Die `MediaQueryList`-Schnittstelle erbt Eigenschaften von ihrer übergeordneten Schnittstelle, {{DOMxRef("EventTarget")}}._

- {{DOMxRef("MediaQueryList.matches", "matches")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` zurückgibt, wenn das {{DOMxRef("document")}} derzeit mit der Media Queries-Liste übereinstimmt, oder `false`, wenn nicht.
- {{DOMxRef("MediaQueryList.media", "media")}} {{ReadOnlyInline}}
  - : Ein String, der eine serialisierte Media Queries darstellt.

## Instanz-Methoden

_Die `MediaQueryList`-Schnittstelle erbt Methoden von ihrer übergeordneten Schnittstelle, {{DOMxRef("EventTarget")}}._

- {{DOMxRef("MediaQueryList.addListener", "addListener()")}} {{deprecated_inline}}
  - : Fügt der `MediaQueryList` einen Callback hinzu, der jedes Mal aufgerufen wird, wenn sich der Medienabfragestatus ändert — unabhängig davon, ob das Dokument den Media Queries in der Liste entspricht oder nicht. Diese Methode existiert hauptsächlich aus Gründen der Abwärtskompatibilität; wenn möglich, sollten Sie stattdessen {{domxref("EventTarget.addEventListener", "addEventListener()")}} verwenden, um das {{domxref("MediaQueryList.change_event", "change")}}-Ereignis zu beobachten.
- {{DOMxRef("MediaQueryList.removeListener", "removeListener()")}} {{deprecated_inline}}
  - : Entfernt den angegebenen Listener-Callback aus den Callbacks, die aufgerufen werden sollen, wenn die `MediaQueryList` den Medienabfragestatus ändert, was jedes Mal geschieht, wenn das Dokument zwischen Übereinstimmung und Nicht-Übereinstimmung mit den in der `MediaQueryList` aufgeführten Media Queries wechselt. Diese Methode wurde aus Gründen der Abwärtskompatibilität beibehalten; wenn möglich, sollten Sie im Allgemeinen {{domxref("EventTarget.removeEventListener", "removeEventListener()")}} verwenden, um Änderungsbenachrichtigungscallbacks zu entfernen (die zuvor mit `addEventListener()` hinzugefügt worden sein sollten).

## Ereignisse

_Folgende Ereignisse werden an `MediaQueryList`-Objekte übermittelt:_

- {{DOMxRef("MediaQueryList.change_event", "change")}}
  - : Wird an die `MediaQueryList` gesendet, wenn sich das Ergebnis einer Medienabfrage gegen das Dokument ändert. Zum Beispiel, wenn die Medienabfrage `(min-width: 400px)` lautet, wird das `change`-Ereignis jedes Mal ausgelöst, wenn sich die Breite des Dokument-{{Glossary("viewport")}} so ändert, dass sie die 400px-Grenze in beide Richtungen überquert.

## Beispiele

Dieses einfache Beispiel erstellt eine `MediaQueryList` und richtet dann einen Listener ein, um zu erkennen, wann sich der Status der Media Queries ändert. Es wird eine benutzerdefinierte Funktion ausgeführt, um das Aussehen der Seite zu ändern.

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

Sie können andere Beispiele auf den einzelnen Eigenschafts- und Methodenseiten finden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Verwendung von Media Queries aus Code](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- {{DOMxRef("window.matchMedia()")}}
- {{DOMxRef("MediaQueryListEvent")}}
- Der Artikel {{DOMxRef("Window.devicePixelRatio")}} enthält ebenfalls ein nützliches Beispiel
