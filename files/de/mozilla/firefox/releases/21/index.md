---
title: Firefox 21 Release-Hinweise für Entwickler
short-title: Firefox 21
slug: Mozilla/Firefox/Releases/21
l10n:
  sourceCommit: f99d00a1c3697e26a679925954e26564e7e79b98
---

Firefox 21 wurde am 14. Mai 2013 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox und Gecko-Entwickler sowie Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Das `scoped`-Attribut wurde dem {{HTMLElement("style")}}-Element hinzugefügt. Es ermöglicht das Einfügen von Stilen, die vom Rest des Dokuments isoliert sind. Solche Stile können mit der in Firefox 20 eingeführten CSS-Pseudoklasse {{cssxref(":scope")}} ausgewählt werden. ([Firefox Bug 508725](https://bugzil.la/508725)).
- Das neue HTML-Element {{HTMLElement("main")}} wurde implementiert ([Firefox Bug 820508](https://bugzil.la/820508)).

### JavaScript

- ECMAScript for XML (E4X), eine alte JavaScript-Erweiterung, wurde entfernt. Es wurde nur in Gecko implementiert und hat nie signifikante Verbreitung erfahren ([Firefox Bug 788293](https://bugzil.la/788293)).
- [parseInt](/de/docs/Web/JavaScript/Reference/Global_Objects/parseInt) behandelt keine Zeichenfolgen mit führendem "0" mehr als oktal ([Firefox Bug 786135](https://bugzil.la/786135)).

### CSS

- Der `none`-Wert von {{cssxref("user-select", "-moz-user-select")}} hat nun das gleiche Verhalten wie der `-moz-none`-Wert, was Gecko mit WebKit (Chrome, Safari), Presto (Opera) und Trident (Internet Explorer) in Einklang bringt ([Firefox Bug 816298](https://bugzil.la/816298)).
- Bei XHTML-Inhalten hat der `auto`-Wert von {{cssxref("hyphens", "-moz-hyphens")}} fälschlicherweise Trennungsregeln angewendet, wenn die Sprache nicht explizit deklariert wurde. Dies wurde behoben ([Firefox Bug 702121](https://bugzil.la/702121)).
- Ein `auto`-Wert wurde der CSS-Eigenschaft {{cssxref("-moz-orient")}} hinzugefügt. Der `auto`-Wert entspricht `horizontal`, wenn er auf {{HTMLElement("meter")}} und {{HTMLElement("progress")}} angewendet wird ([Firefox Bug 835883](https://bugzil.la/835883)).
- Die Medienabfrage `-moz-windows-glass` wurde unter Windows 7 und früheren Windows-Systemen hinzugefügt ([Firefox Bug 816803](https://bugzil.la/816803)).

### DOM

- Unterstützung für [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) (als `MozRTCPeerConnection`) ist jetzt standardmäßig aktiviert ([Firefox Bug 796463](https://bugzil.la/796463)). Sie kann bei Bedarf wieder deaktiviert werden, indem `media.peerconnection.enabled` auf false gesetzt wird.
- Die `origin`-Eigenschaft wurde zu [`window.location`](/de/docs/Web/API/Window/location) hinzugefügt ([Firefox Bug 828261](https://bugzil.la/828261)).
- Die Methoden `valueAsDate` und `valueAsNumber` wurden für `<input type="time">` hinzugefügt ([Firefox Bug 781570](https://bugzil.la/781570)).
- Die Attribute `min` und `max` gelten jetzt auch für `<input type="time">` ([Firefox Bug 781572](https://bugzil.la/781572)).
- Einige neue `keyCode`-Werte für Lautstärkeregelung werden unterstützt ([Firefox Bug 674739](https://bugzil.la/674739)).
- Einige neue `keyCode`-Werte für alte Tastaturlayouts wie AS/400 werden jetzt unter Windows und Linux unterstützt ([Firefox Bug 833719](https://bugzil.la/833719)).
- Verschiedene `keyCode`-Werte für OEM-spezifische Tasten unter Windows werden jetzt wieder unterstützt ([Firefox Bug 833719](https://bugzil.la/833719)).
- Die Funktion [`window.crypto.getRandomValues`](/de/docs/Web/API/Crypto/getRandomValues) wurde implementiert ([Firefox Bug 440046](https://bugzil.la/440046)).
- Die nicht standardisierten Methoden `NodeIterator.expandEntityReferences()` und `TreeWalker.expandEntityReferences()` wurden entfernt ([Firefox Bug 672190](https://bugzil.la/672190)).
- CSSOM: Die Methode `CSSKeyframesRule.insertRule()` wurde entfernt und durch [`CSSKeyframesRule.appendRule()`](/de/docs/Web/API/CSSKeyframesRule/appendRule) ersetzt, um einer Spezifikationsänderung Rechnung zu tragen ([Firefox Bug 841896](https://bugzil.la/841896)).
- CSSOM: Wenn der übergebene Parameter an [`CSSStyleSheet.insertRule`](/de/docs/Web/API/CSSStyleSheet/insertRule) mehr als eine Regel enthält, wird jetzt ein [`DOMException`](/de/docs/Web/API/DOMException) mit einem `SYNTAX_ERR` ausgelöst ([Firefox Bug 765599](https://bugzil.la/765599)).
- Bis jetzt wurde, wenn dieselben Header wiederholt mit [`XMLHttpRequest.setRequestHeader`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader) gesetzt wurden, der letztgenannte Wert verwendet. Dieses Verhalten wurde geändert, um der Spezifikation zu entsprechen, sodass diese Werte korrekt kombiniert werden ([Firefox Bug 819051](https://bugzil.la/819051)).

### SVG

- Das Attribut [paint-order](/de/docs/Web/SVG/Reference/Attribute/paint-order) wurde implementiert ([Firefox Bug 828805](https://bugzil.la/828805)).
- Die Option `svg.smil.enabled` wurde entfernt. SMIL ist immer aktiviert. ([Firefox Bug 835030](https://bugzil.la/835030))

### Netzwerk

- Wir aktualisieren weiterhin unsere CSP-Implementierung, um der CSP 1.0-Spezifikation zu entsprechen, die den Status "Candidate Recommendation" erreicht hat:
  - Unterstützung für den spezifikationskonformen `Content-Security-Policy` HTTP-Header (zusätzlich zum experimentellen `X-Content-Security-Policy`) wurde hinzugefügt ([Firefox Bug 783049](https://bugzil.la/783049)).
    > [!NOTE]
    > Der Patch für diesen neuen Header wurde in Firefox 21 integriert, er ist jedoch in den Builds deaktiviert ([Firefox Bug 842657](https://bugzil.la/842657)).

### Worker

- Die Funktionen [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) sind jetzt in der Menge der [für Worker verfügbaren Funktionen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) enthalten.

## Änderungen für Add-on- und Mozilla-Entwickler

- FUEL-Anwendungen können den Livemarks-Dienst nicht mehr nutzen ([Firefox Bug 834492](https://bugzil.la/834492)). Der Livemarks-Dienst wird eingestellt und durch die neue asynchrone Schnittstelle ersetzt.
- `resource:///modules/` und `resource://gre/modules/` sind nicht mehr identisch ([Firefox Bug 755724](https://bugzil.la/755724)). Diese Änderung wurde aufgrund der Arbeit an der Metro-Version von Firefox vorgenommen. Wenn Sie Module mithilfe von `resource:///modules/` laden, sollten Sie prüfen, ob Sie jetzt `resource://gre/modules/` verwenden möchten. Beachten Sie, dass einige Module auch von Firefox zu Toolkit verschoben wurden ([Firefox Bug 840287](https://bugzil.la/840287) und [Firefox Bug 811548](https://bugzil.la/811548) verschoben `NewTabUtils.jsm` und die Thumbnail-Module entsprechend).
- Das Add-on SDK ist jetzt in Firefox enthalten ([Firefox Bug 731779](https://bugzil.la/731779))
- Die History-API hat zahlreiche veraltete APIs entfernt:
  - Ersetzt durch `mozIAsyncFavicons`:
    - `nsIFaviconService::setFaviconUrlForPage`
    - `nsIFaviconService::setFaviconData`
    - `nsIFaviconService::getFaviconData`
    - `nsIFaviconService::getFaviconForPage`
    - `nsIFaviconService::setAndLoadFaviconForPage`
    - `nsIFaviconService::getFaviconImageForPage`
    - `nsIFaviconService::getFaviconDataAsDataURL`

  - Ersetzt durch `mozIAsyncLivemarks`:
    - `nsILivemarkService::*`
    - `PlacesUtils.itemIsLivemark`
    - `PlacesUtils.nodeIsLivemarkContainer`
    - `PlacesUtils.nodeIsLivemarkItem`

  - Nur drittes Argument entfernt:
    - `PlacesUIUtils.showBookmarkDialog`

  - Nicht mehr von Places implementiert, verwenden Sie stattdessen `mozIAsyncHistory`:
    - `nsIGlobalHistory2::addURI`
    - `nsIGlobalHistory2::isVisited`
    - `nsIGlobalHistory2::setPageTitle`

  - Nicht mehr benötigt, verwenden Sie `onDeleteURI` oder `onItemRemoved`:
    - `nsINavHistoryObserver::OnBeforeDeleteURI`
    - `nsINavBookmarkObserver::OnBeforeItemRemoved`

  - Wurde nie richtig implementiert:
    - `nsINavHistoryFullVisitResultNode`

  - Veraltet, verwenden Sie stattdessen `mozIAsyncHistory::updatePlaces`:
    - `nsINavHistoryService::AddVisit`

- `nsIHttpChannel.redirectTo` wurde hinzugefügt, um das Umleiten von HTTP-Kanälen ohne fragile Hacks zu ermöglichen.

## Siehe auch

- [Firefox 21 Release-Hinweise](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/21.0/releasenotes/)
- [Add-on-Kompatibilität für Firefox 21](https://blog.mozilla.org/addons/2013/04/26/compatibility-for-firefox-21/)
