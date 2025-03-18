---
title: Firefox 21 für Entwickler
slug: Mozilla/Firefox/Releases/21
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{FirefoxSidebar}}

Firefox 21 wurde am 14. Mai 2013 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-On-Entwickler nützlich sind.

## Änderungen für Webentwickler

### HTML

- Das [`scoped`](/de/docs/Web/HTML/Element/style#scoped)-Attribut wurde zum {{HTMLElement("style")}}-Element hinzugefügt. Es ermöglicht das Einfügen von Stilen, die vom Rest des Dokuments isoliert sind. Solche Stile können mit dem in Firefox 20 eingeführten CSS-Pseudoelement {{cssxref(":scope")}} ausgewählt werden. ([Firefox Fehler 508725](https://bugzil.la/508725)).
- Das neue HTML-Element {{HTMLElement("main")}} wurde implementiert ([Firefox Fehler 820508](https://bugzil.la/820508)).

### JavaScript

- ECMAScript for XML (E4X), eine alte JavaScript-Erweiterung, wurde entfernt. Es war nur in Gecko implementiert und hat nie signifikante Verbreitung erlangt ([Firefox Fehler 788293](https://bugzil.la/788293)).
- [parseInt](/de/docs/Web/JavaScript/Reference/Global_Objects/parseInt) behandelt keine Zeichenfolgen mit führender "0" mehr als oktal ([Firefox Fehler 786135](https://bugzil.la/786135)).

### CSS

- Der `none`-Wert von {{cssxref("user-select", "-moz-user-select")}} hat nun dasselbe Verhalten wie der `-moz-none`-Wert, wodurch Gecko an WebKit (Chrome, Safari), Presto (Opera) und Trident (Internet Explorer) angeglichen wird ([Firefox Fehler 816298](https://bugzil.la/816298)).
- Bei XHTML-Inhalten wurden die Silbentrennungsregeln mit dem `auto`-Wert von {{cssxref("hyphens", "-moz-hyphens")}} fälschlicherweise angewendet, wenn die Sprache nicht explizit deklariert war. Dies wurde durch ([Firefox Fehler 702121](https://bugzil.la/702121)) behoben.
- Ein `auto`-Wert wurde zur CSS-Eigenschaft {{cssxref("-moz-orient")}} hinzugefügt. Der `auto`-Wert entspricht `horizontal`, wenn er auf {{HTMLElement("meter")}} und {{HTMLElement("progress")}} angewendet wird ([Firefox Fehler 835883](https://bugzil.la/835883)).
- Die Media Query [`-moz-windows-glass`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#-moz-windows-glass) wurde unter Windows 7 und früheren Windows-Systemen hinzugefügt ([Firefox Fehler 816803](https://bugzil.la/816803)).

### DOM

- Die Unterstützung für [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) (als `MozRTCPeerConnection`) ist jetzt standardmäßig aktiviert ([Firefox Fehler 796463](https://bugzil.la/796463)). Sie kann bei Bedarf deaktiviert werden, indem `media.peerconnection.enabled` auf false gesetzt wird.
- Die `origin`-Eigenschaft wurde zu [`window.location`](/de/docs/Web/API/Window/location) hinzugefügt ([Firefox Fehler 828261](https://bugzil.la/828261)).
- Die Methoden `valueAsDate` und `valueAsNumber` wurden für `<input type="time">` hinzugefügt ([Firefox Fehler 781570](https://bugzil.la/781570)).
- Die Attribute `min` und `max` gelten jetzt auch für `<input type="time">` ([Firefox Fehler 781572](https://bugzil.la/781572)).
- Einige neue keyCodes für die Lautstärkenregelung werden unterstützt ([Firefox Fehler 674739](https://bugzil.la/674739)).
- Einige neue keyCodes für alte Tastaturlayouts wie AS/400 werden jetzt unter Windows und Linux unterstützt ([Firefox Fehler 833719](https://bugzil.la/833719)).
- Verschiedene keyCode-Werte für OEM-spezifische Tasten unter Windows werden jetzt wieder unterstützt ([Firefox Fehler 833719](https://bugzil.la/833719)).
- Die Funktion [`window.crypto.getRandomValues`](/de/docs/Web/API/Crypto/getRandomValues) wurde implementiert ([Firefox Fehler 440046](https://bugzil.la/440046)).
- Die nicht standardisierten Methoden `NodeIterator.expandEntityReferences()` und `TreeWalker.expandEntityReferences()` wurden entfernt ([Firefox Fehler 672190](https://bugzil.la/672190)).
- CSSOM: die Methode `CSSKeyframesRule.insertRule()` wurde in [`CSSKeyframesRule.appendRule()`](/de/docs/Web/API/CSSKeyframesRule/appendRule) geändert, um einer Spezifikationsänderung zu entsprechen ([Firefox Fehler 841896](https://bugzil.la/841896)).
- CSSOM: Wenn der Parameter, der an [`CSSStyleSheet.insertRule`](/de/docs/Web/API/CSSStyleSheet/insertRule) übergeben wird, mehr als eine Regel enthält, wird jetzt ein [`DOMException`](/de/docs/Web/API/DOMException) mit einem `SYNTAX_ERR` ausgelöst ([Firefox Fehler 765599](https://bugzil.la/765599)).
- Bis jetzt wurde der zuletzt angegebene Wert verwendet, wenn dieselben Header wiederholt mit [`XMLHttpRequest.setRequestHeader`](/de/docs/Web/API/XMLHttpRequest#setrequestheader) gesetzt wurden. Dieses Verhalten wurde geändert, um der Spezifikation zu entsprechen, so dass diese Werte richtig kombiniert werden ([Firefox Fehler 819051](https://bugzil.la/819051)).

### SVG

- Das Attribut [paint-order](/de/docs/Web/SVG/Reference/Attribute/paint-order) wurde implementiert ([Firefox Fehler 828805](https://bugzil.la/828805)).
- Die `svg.smil.enabled`-Einstellung wurde entfernt. SMIL ist immer aktiviert. ([Firefox Fehler 835030](https://bugzil.la/835030))

### Netzwerk

- Wir aktualisieren unsere CSP-Implementierung, um der CSP 1.0-Spezifikation zu entsprechen, die den Status eines Kandidatenempfehlung erreicht hat:

  - Unterstützung für den spezifikationskonformen `Content-Security-Policy`-HTTP-Header (zusätzlich zum experimentellen `X-Content-Security-Policy`) wurde hinzugefügt ([Firefox Fehler 783049](https://bugzil.la/783049)).
    > [!NOTE]
    > Der Patch für diesen neuen Header wurde in Firefox 21 eingespielt, aber auf Builds deaktiviert ([Firefox Fehler 842657](https://bugzil.la/842657)).

### Worker

- Die Funktionen [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) sind nun im Satz der [Funktionen verfügbar für Worker](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) enthalten.

## Änderungen für Add-On- und Mozilla-Entwickler

- FUEL-Anwendungen können den Livemarks-Dienst nicht mehr verwenden ([Firefox Fehler 834492](https://bugzil.la/834492)). Der Livemarks-Dienst ist veraltet und wird zugunsten der neuen asynchronen Schnittstelle eingestellt.
- `resource:///modules/` und `resource://gre/modules/` sind nicht mehr identisch ([Firefox Fehler 755724](https://bugzil.la/755724)). Diese Änderung wurde aufgrund der Arbeiten an der Metro-Version von Firefox vorgenommen. Wenn Sie Module mit `resource:///modules/` laden, sollten Sie prüfen, ob Sie jetzt `resource://gre/modules/` stattdessen verwenden möchten. Beachten Sie, dass einige Module auch von Firefox zu Toolkit verschoben wurden ([Firefox Fehler 840287](https://bugzil.la/840287) und [Firefox Fehler 811548](https://bugzil.la/811548) haben `NewTabUtils.jsm` und die Thumbnail-Module verschoben).
- Das Add-On SDK ist nun in Firefox enthalten ([Firefox Fehler 731779](https://bugzil.la/731779))
- Die History API hat zahlreiche veraltete APIs entfernt:

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

  - Nicht mehr von Places implementiert, verwenden Sie `mozIAsyncHistory` stattdessen:

    - `nsIGlobalHistory2::addURI`
    - `nsIGlobalHistory2::isVisited`
    - `nsIGlobalHistory2::setPageTitle`

  - Nicht mehr benötigt, verwenden Sie `onDeleteURI` oder `onItemRemoved`:

    - `nsINavHistoryObserver::OnBeforeDeleteURI`
    - `nsINavBookmarkObserver::OnBeforeItemRemoved`

  - Nie richtig implementiert:

    - `nsINavHistoryFullVisitResultNode`

  - Veraltet, verwenden Sie `mozIAsyncHistory::updatePlaces` stattdessen:

    - `nsINavHistoryService::AddVisit`

- Hinzugefügt `nsIHttpChannel.redirectTo`, um das Umleiten von HTTP-Kanälen ohne fragile Hacks zu ermöglichen.

## Siehe auch

- [Firefox 21 Versionshinweise](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/21.0/releasenotes/)
- [Add-on-Kompatibilität für Firefox 21](https://blog.mozilla.org/addons/2013/04/26/compatibility-for-firefox-21/)

### Ältere Versionen

{{Firefox_for_developers}}
