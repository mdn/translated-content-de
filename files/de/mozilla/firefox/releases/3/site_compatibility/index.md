---
title: Kompatibilität der Website für Firefox 3
slug: Mozilla/Firefox/Releases/3/Site_compatibility
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

{{FirefoxSidebar}}

Diese Seite versucht, einen Überblick über die Änderungen zwischen [Gecko](/en-US/Gecko) 1.8 und Gecko 1.9 zu geben, die möglicherweise Websites in ihrem Verhalten oder ihrer Darstellung beeinflussen könnten.

Siehe auch [Firefox 3 für Entwickler](/en-US/Firefox_3_for_developers).

## Ereignisse

### Erfassen von Load-Event-Listenern

In Gecko 1.8 war es nicht möglich, Load-Event-Listener beim Erfassen auf Bilder zu setzen. In Gecko 1.9 wurde dies durch [Firefox-Bug 234455](https://bugzil.la/234455) behoben. Dies kann jedoch Probleme auf Websites verursachen, die ihre Event Listener fälschlicherweise so eingestellt haben, dass sie das Load-Event erfassen. Siehe die Diskussion im [WebKit-Bug 335251](https://bugzil.la/335251). Um dieses Problem zu beheben, sollte die betroffene Seite ihren Load-Event-Listener nicht im Erfassungsmodus setzen.

Zum Beispiel sollte dies:

```js
window.addEventListener("load", yourFunction, true);
```

in dies geändert werden:

```js
window.addEventListener("load", yourFunction, false);
```

Für eine Erklärung, wie Eventerfassung funktioniert, siehe [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener).

### `preventBubble` wurde entfernt

In Gecko 1.8 existierte die Methode `preventBubble` bei Ereignissen, um zu verhindern, dass Ereignisse nach oben blubbern. In Gecko 1.9 wurde diese Methode entfernt. Stattdessen sollten Sie den Standard [stopPropagation()](/de/docs/Web/API/Event/stopPropagation) verwenden, der auch in Gecko 1.8 gut funktioniert. Der Patch im [Firefox-Bug 330494](https://bugzil.la/330494) hat dies bewirkt. Siehe auch [WebKit-Bug 105280](https://bugzil.la/105280).

### Einige andere alte Event-APIs werden nicht mehr unterstützt

[`window.captureEvents`](/de/docs/Web/API/Window/captureEvents), [`window.releaseEvents`](/de/docs/Web/API/Window/releaseEvents), und [`window.routeEvent`](/de/docs/Web/API/Window/routeEvent) gelten seit Gecko 1.9 als veraltet.

## DOM

### `WRONG_DOCUMENT_ERR`

Knoten aus externen Dokumenten sollten mit [`document.importNode()`](/de/docs/Web/API/Document/importNode) geklont (oder mit [`document.adoptNode()`](/de/docs/Web/API/Document/adoptNode) übernommen) werden, bevor sie in das aktuelle Dokument eingefügt werden. Für mehr Informationen zu den [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument) Problemen, siehe die [W3C-DOM-FAQ](https://www.w3.org/DOM/faq.html#ownerdoc).

Firefox erzwingt derzeit diese Regel nicht (es tat dies für eine Weile während der Entwicklung von Firefox 3, aber zu viele Seiten brechen, wenn diese Regel erzwungen wird). Wir ermutigen Webentwickler, ihren Code zu korrigieren, um diese Regel für eine verbesserte zukünftige Kompatibilität zu befolgen.

## Bereiche

### `intersectsNode` wurde entfernt

In Gecko 1.8 konnte die Funktion `intersectsNode` verwendet werden, um zu testen, ob ein Knoten einen Bereich schneidet. Die Rückgabewerte dieser Funktion waren jedoch verwirrend und selten nützlich, weshalb sie in Gecko 1.9 entfernt wurde. Stattdessen verwenden Sie die genauere und standardmäßige Funktion [compareBoundaryPoints](/de/docs/Web/API/Range/compareBoundaryPoints). Der Patch im [Firefox-Bug 358073](https://bugzil.la/358073) hat diese Funktion entfernt.

Siehe die Dokumentation für [intersectsNode](/de/docs/Web/API/Range/intersectsNode) für die Verwendung von `compareBoundaryPoints`.

### `compareNode` wurde entfernt

In Gecko 1.8 konnte die Funktion `compareNode` verwendet werden, um zu testen, wie ein Knoten einen Bereich schneidet. Die Rückgabewerte dieser Funktion waren jedoch verwirrend und selten nützlich, weshalb sie in Gecko 1.9 entfernt wurde. Stattdessen verwenden Sie die genauere und standardmäßige Funktion [compareBoundaryPoints](/de/docs/Web/API/Range/compareBoundaryPoints). Der Patch im [Firefox-Bug 358073](https://bugzil.la/358073) hat diese Funktion entfernt.

Siehe die Dokumentation für [compareNode](/de/docs/Web/API/Range/compareNode) für die Verwendung von `compareBoundaryPoints`.

## HTML

### Viele Fehler im `<object>` wurden behoben

`object`- und `embed`-Elemente benötigen keinen `type`-Attribut mehr, um dargestellt zu werden. Das Ändern des `src`-Attributs (von `<embed>`) oder des `data`-Attributs (von `<object>`) über JavaScript funktioniert jetzt korrekt. Der vom Server gesendete Content-Type-Header (falls vorhanden) hat nun Vorrang vor dem `type`-Attribut eines `<object>`-Elements gemäß der HTML-Spezifikation (dies ist nicht der Fall für `embed`).
