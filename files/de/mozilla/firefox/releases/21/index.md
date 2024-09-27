---
title: Firefox 21 für Entwickler
slug: Mozilla/Firefox/Releases/21
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{FirefoxSidebar}}

Firefox 21 wurde am 14. Mai 2013 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### HTML

- Das [`scoped`](/de/docs/Web/HTML/Element/style#scoped)-Attribut wurde dem {{HTMLElement("style")}}-Element hinzugefügt. Es ermöglicht die Einbindung von Stilen, die vom Rest des Dokuments isoliert sind. Solche Stile können mit dem in Firefox 20 eingeführten CSS-Pseudo-Element {{cssxref(":scope")}} ausgewählt werden. ([Firefox Bug 508725](https://bugzil.la/508725)).
- Das neue HTML-Element {{HTMLElement("main")}} wurde implementiert ([Firefox Bug 820508](https://bugzil.la/820508)).

### JavaScript

- EcmaScript for XML (E4X), eine alte JavaScript-Erweiterung, wurde entfernt. Sie wurde nur in Gecko implementiert und fand nie große Verbreitung ([Firefox Bug 788293](https://bugzil.la/788293)).
- [parseInt](/de/docs/Web/JavaScript/Reference/Global_Objects/parseInt) behandelt Zeichenfolgen, die mit "0" beginnen, nicht mehr als oktal ([Firefox Bug 786135](https://bugzil.la/786135)).

### CSS

- Der Wert `none` von {{cssxref("user-select", "-moz-user-select")}} verhält sich jetzt wie der Wert `-moz-none`, wodurch Gecko mit WebKit (Chrome, Safari), Presto (Opera) und Trident (Internet Explorer) auf eine Linie gebracht wird ([Firefox Bug 816298](https://bugzil.la/816298)).
- Bei XHTML-Inhalten wurden die Trennungsregeln bei Verwendung des Wertes `auto` von {{cssxref("hyphens", "-moz-hyphens")}} fälschlicherweise angewendet, wenn die Sprache nicht explizit angegeben war. Dies wurde behoben ([Firefox Bug 702121](https://bugzil.la/702121)).
- Ein `auto`-Wert wurde zur CSS-Eigenschaft {{cssxref("-moz-orient")}} hinzugefügt. Der Wert `auto` entspricht `horizontal`, wenn er auf {{HTMLElement("meter")}} und {{HTMLElement("progress")}} angewendet wird ([Firefox Bug 835883](https://bugzil.la/835883)).
- Die Medienabfrage [`-moz-windows-glass`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#-moz-windows-glass) wurde für Windows 7 und frühere Windows-Systeme hinzugefügt ([Firefox Bug 816803](https://bugzil.la/816803)).

### DOM

- Die Unterstützung für [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) (als `MozRTCPeerConnection`) ist jetzt standardmäßig aktiviert ([Firefox Bug 796463](https://bugzil.la/796463)). Sie kann bei Bedarf durch Setzen von `media.peerconnection.enabled` auf false wieder deaktiviert werden.
- Die Eigenschaft `origin` wurde zum [`window.location`](/de/docs/Web/API/Window/location) hinzugefügt ([Firefox Bug 828261](https://bugzil.la/828261)).
- Die Methoden `valueAsDate` und `valueAsNumber` wurden für `<input type="time">` hinzugefügt ([Firefox Bug 781570](https://bugzil.la/781570)).
- Die Attribute `min` und `max` gelten jetzt auch für `<input type="time">` ([Firefox Bug 781572](https://bugzil.la/781572)).
- Einige neue keyCodes für Lautstärkeregelung werden unterstützt ([Firefox Bug 674739](https://bugzil.la/674739)).
- Einige neue keyCodes für alte Tastaturlayouts wie AS/400 werden jetzt auf Windows und Linux unterstützt ([Firefox Bug 833719](https://bugzil.la/833719)).
- Verschiedene keyCode-Werte für OEM-spezifische Tasten auf Windows werden jetzt wieder unterstützt ([Firefox Bug 833719](https://bugzil.la/833719)).
- Die Funktion [`window.crypto.getRandomValues`](/de/docs/Web/API/Crypto/getRandomValues) wurde implementiert ([Firefox Bug 440046](https://bugzil.la/440046)).
- Die nicht standardmäßigen Methoden `NodeIterator.expandEntityReferences()` und `TreeWalker.expandEntityReferences()` wurden entfernt ([Firefox Bug 672190](https://bugzil.la/672190)).
- CSSOM: Die Methode [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule)`.insertRule` wurde zu [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule)`.appendRule` geändert, um eine Änderung der Spezifikation zu berücksichtigen ([Firefox Bug 841896](https://bugzil.la/841896)).
- CSSOM: Wenn der gegebene Parameter von [`CSSStyleSheet.insertRule`](/de/docs/Web/API/CSSStyleSheet/insertRule) mehr als eine Regel enthält, wird jetzt eine [`DOMException`](/de/docs/Web/API/DOMException) mit einem `SYNTAX_ERR` ausgelöst ([Firefox Bug 765599](https://bugzil.la/765599)).
- Bisher wurde, wenn dieselben Header wiederholt mit [`XMLHttpRequest.setRequestHeader`](/de/docs/Web/API/XMLHttpRequest#setrequestheader) gesetzt wurden, der zuletzt angegebene Wert verwendet. Dieses Verhalten wurde geändert, um die Spezifikationen einzuhalten, sodass diese Werte jetzt ordnungsgemäß kombiniert werden ([Firefox Bug 819051](https://bugzil.la/819051)).

### SVG

- Das Attribut [paint-order](/de/docs/Web/SVG/Attribute/paint-order) wurde implementiert ([Firefox Bug 828805](https://bugzil.la/828805)).
- Die Einstellung `svg.smil.enabled` wurde entfernt. SMIL ist immer aktiviert. ([Firefox Bug 835030](https://bugzil.la/835030))

### Netzwerk

- Wir aktualisieren weiterhin unsere CSP-Implementierung, um der CSP 1.0-Spezifikation zu entsprechen, die den Status der Kandidatenempfehlung erreicht hat:

  - Unterstützung für den spezifikationskonformen `Content-Security-Policy` HTTP-Header (zusätzlich zum experimentellen `X-Content-Security-Policy`) wurde hinzugefügt ([Firefox Bug 783049](https://bugzil.la/783049)).
    > [!NOTE]
    > Der Patch für diesen neuen Header wurde in Firefox 21 eingeführt, ist jedoch in den Builds deaktiviert ([Firefox Bug 842657](https://bugzil.la/842657)).

### Worker

- Die Funktionen [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) sind jetzt in der Gruppe der [Funktionen verfügbar für Worker](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) enthalten.

## Änderungen für Add-on- und Mozilla-Entwickler

- FUEL-Anwendungen können den Livemarks-Dienst nicht mehr verwenden ([Firefox Bug 834492](https://bugzil.la/834492)). Der Livemarks-Dienst wird zugunsten des neuen asynchronen Interfaces ausgemustert.
- `resource:///modules/` und `resource://gre/modules/` sind nicht mehr identisch ([Firefox Bug 755724](https://bugzil.la/755724)). Diese Änderung wurde aufgrund der Arbeiten an der Metro-Version von Firefox vorgenommen. Wenn Sie Module mit `resource:///modules/` laden, sollten Sie prüfen, ob Sie jetzt `resource://gre/modules/` verwenden möchten. Beachten Sie, dass einige Module auch von Firefox zu Toolkit verschoben wurden ([Firefox Bug 840287](https://bugzil.la/840287) und [Firefox Bug 811548](https://bugzil.la/811548) haben `NewTabUtils.jsm` bzw. die Thumbnail-Module verschoben).
- Das Add-on SDK ist jetzt in Firefox enthalten ([Firefox Bug 731779](https://bugzil.la/731779))
- In der History-API wurden zahlreiche veraltete APIs entfernt:

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

  - Dritter Parameter entfernt:

    - `PlacesUIUtils.showBookmarkDialog`

  - Nicht mehr von Places implementiert, verwenden Sie stattdessen `mozIAsyncHistory`:

    - `nsIGlobalHistory2::addURI`
    - `nsIGlobalHistory2::isVisited`
    - `nsIGlobalHistory2::setPageTitle`

  - Nicht mehr benötigt, verwenden Sie `onDeleteURI` oder `onItemRemoved`:

    - `nsINavHistoryObserver::OnBeforeDeleteURI`
    - `nsINavBookmarkObserver::OnBeforeItemRemoved`

  - Nie ordnungsgemäß implementiert:

    - `nsINavHistoryFullVisitResultNode`

  - Veraltet, verwenden Sie stattdessen `mozIAsyncHistory::updatePlaces`:

    - `nsINavHistoryService::AddVisit`

- `nsIHttpChannel.redirectTo` wurde hinzugefügt, um HTTP-Kanäle ohne fragile Hacks umzuleiten.

## Siehe auch

- [Firefox 21 Release Notes](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/21.0/releasenotes/)
- [Add-on-Kompatibilität für Firefox 21](https://blog.mozilla.org/addons/2013/04/26/compatibility-for-firefox-21/)

### Ältere Versionen

{{Firefox_for_developers}}
