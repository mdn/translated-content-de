---
title: Firefox 19 für Entwickler
slug: Mozilla/Firefox/Releases/19
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Firefox 19 wurde am 19. Februar 2013 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### JavaScript

- [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekte haben sich von einer `size()` Methode zu einer `size` Eigenschaft geändert ([Firefox Bug 807001](https://bugzil.la/807001))
- [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekte haben jetzt auch eine `clear()` Methode ([Firefox Bug 805003](https://bugzil.la/805003)).

### CSS

- Die Unterstützung für die Viewport-relativen {{cssxref("&lt;length&gt;")}} Einheiten `vh`, `vw`, `vmin` und `vmax` wurde implementiert ([Firefox Bug 503720](https://bugzil.la/503720)).
- CSS-Flexbox wurde ohne Präfix versehen, bleibt jedoch standardmäßig deaktiviert ([Firefox Bug 801098](https://bugzil.la/801098)).
- Der `-moz-initial` Wert wurde ohne Präfix versehen ([Firefox Bug 806068](https://bugzil.la/806068)). `-moz-initial` wird für eine Weile als Alias beibehalten; jedoch wird den Autoren dringend empfohlen, auf `initial` umzusteigen.
- Die `text-transform` CSS-Eigenschaft unterstützt jetzt das `full-width` Schlüsselwort, das eine nahtlosere Einbindung von lateinischen Zeichen in Text mit ideografischen Zeichen fester Breite, wie Chinesisch oder Japanisch, ermöglicht ([Firefox Bug 774560](https://bugzil.la/774560)).
- Die CSS-Eigenschaft `page-break-inside` wurde implementiert ([Firefox Bug 685012](https://bugzil.la/685012)).
- Die `calc()` CSS-Funktion kann nun auf `<color-stop>` (bei {{cssxref("&lt;gradient&gt;")}}) angewendet werden.
- Die CSS-At-Regel `@page` wird nun unterstützt ([Firefox Bug 115199](https://bugzil.la/115199)). Beachten Sie, dass die Pseudoklassen `:first`, `:right` und `:left` noch nicht implementiert sind.
- Die Pseudoklasse `:-moz-placeholder` wird durch das Pseudo-_element_ `::-moz-placeholder` ersetzt ([Firefox Bug 737786](https://bugzil.la/737786)).
- Deklarationen, die mit `!important` qualifiziert sind und in `@keyframes` erscheinen, werden nun gemäß der Spezifikation ignoriert ([Firefox Bug 784466](https://bugzil.la/784466)).

### DOM/APIs

- Die Methoden [`Element.getElementsByTagName`](/de/docs/Web/API/Element/getElementsByTagName), [`Element.getElementsByTagNameNS`](/de/docs/Web/API/Element/getElementsByTagNameNS) und [`Element.getElementsByClassName`](/de/docs/Web/API/Element/getElementsByClassName) geben jetzt eine Live-`HTMLCollection` zurück ([Firefox Bug 799464](https://bugzil.la/799464)).
- Die Eigenschaft `mozLastModifiedDate` des [`File`](/de/docs/Web/API/File) wurde implementiert ([Firefox Bug 793955](https://bugzil.la/793955)).
- Die Eigenschaft `lastModifiedDate` des [`File`](/de/docs/Web/API/File) gibt das aktuelle Datum zurück, wenn das Datum der letzten Änderung unbekannt ist ([Firefox Bug 793459](https://bugzil.la/793459)).
- Die Methode `isPointInStroke` des [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) wurde implementiert ([Firefox Bug 803124](https://bugzil.la/803124)).
- Die Methode `toBlob` des [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) wurde implementiert ([Firefox Bug 648610](https://bugzil.la/648610)).
- Die Methoden `Node.isSupported` und [`document.implementation.hasFeature()`](/de/docs/Web/API/Document/implementation) wurden geändert, um immer `true` zurückzugeben ([Firefox Bug 801425](https://bugzil.la/801425)).
- Wenn `document.createElement(null)` aufgerufen wird, wird `null` nun als Zeichenkette behandelt und funktioniert wie `document.createElement("null")`.
- Die Schnittstellen [`TextDecoder`](/de/docs/Web/API/TextDecoder) und [`TextEncoder`](/de/docs/Web/API/TextEncoder) wurden aktualisiert, um der neuesten Spezifikation zu entsprechen ([Firefox Bug 801487](https://bugzil.la/801487)).

### XForms

Die Unterstützung für XForms wurde in Firefox 19 [**entfernt**](https://www.philipp-wagner.com/blog/2011/07/the-future-of-mozilla-xforms).

## Änderungen für Add-on- und Mozilla-Entwickler

> [!NOTE]
> Eine wichtige Änderung in Firefox 19 ist, dass `nsresult` nun stark typisiert ist. Dies wird helfen, Fehler zu erkennen, die durch unsachgemäße Handhabung von Rückgabewerten verursacht werden, kann jedoch dazu führen, dass bestehender Code nicht mehr funktioniert, wenn diesbezüglich falsche Annahmen getroffen wurden.

- `getBrowserSelection()` gibt jetzt den ausgewählten Text in einem Texteingabefeld zurück. Dadurch ist `gContextMenu.isTextSelected` `true`, wenn der Benutzer Text in einem Texteingabefeld auswählt, das kein Passwortfeld ist. ([Firefox Bug 565717](https://bugzil.la/565717))
- Dict.jsm: `Dict()` nimmt jetzt eine JSON-Zeichenkette an. `Dict.toJSON()` wurde hinzugefügt und gibt eine JSON-Zeichenkette zurück ([Firefox Bug 727967](https://bugzil.la/727967)).

### Schnittstellenänderungen

- `nsIImgLoadingContent`
  - : Der Parameter (aObserver) der Methode `addObserver()` ändert sich von `imgIDecoderObserver` in `imgINotificationObserver`. Die Methode `notify()` von `imgINotificationObserver` ist nicht skriptfähig, daher müssen Sie `createScriptedObserver()` von `imgITools` verwenden.
- `nsIChannel`
  - : Die Eigenschaft `contentLength` änderte sich von `long` zu `int64_t`.

## Siehe auch

- [Firefox 19 Beta Versionshinweise](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/19.0beta/releasenotes/)
- [Add-on-Kompatibilität für Firefox 19](https://blog.mozilla.org/addons/2013/02/07/compatibility-for-firefox-19/)

### Ältere Versionen

{{Firefox_for_developers}}
