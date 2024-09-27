---
title: Firefox 19 für Entwickler
slug: Mozilla/Firefox/Releases/19
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Firefox 19 wurde am 19. Februar 2013 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### JavaScript

- Bei den [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekten wurde die Methode `size()` zu einer Eigenschaft `size` geändert ([Firefox Bug 807001](https://bugzil.la/807001)).
- Die Objekte [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) haben jetzt auch eine `clear()` Methode ([Firefox Bug 805003](https://bugzil.la/805003)).

### CSS

- Unterstützung für die viewport-relativen {{cssxref("&lt;length&gt;")}} Einheiten `vh`, `vw`, `vmin` und `vmax` wurde hinzugefügt ([Firefox Bug 503720](https://bugzil.la/503720)).
- CSS Flexbox wurde ohne Präfix veröffentlicht, bleibt jedoch standardmäßig deaktiviert ([Firefox Bug 801098](https://bugzil.la/801098)).
- Der Wert `-moz-initial` wurde ohne Präfix veröffentlicht ([Firefox Bug 806068](https://bugzil.la/806068)). `-moz-initial` wird vorerst als Alias beibehalten; Autoren wird jedoch dringend empfohlen, auf `initial` umzusteigen.
- Die CSS-Eigenschaft {{cssxref("text-transform")}} unterstützt nun das Schlüsselwort `full-width`, das eine nahtlosere Einbeziehung lateinischer Zeichen in Texte mit ideografischen Zeichen fester Breite, wie Chinesisch oder Japanisch, ermöglicht ([Firefox Bug 774560](https://bugzil.la/774560)).
- Die CSS-Eigenschaft {{cssxref("page-break-inside")}} wurde implementiert ([Firefox Bug 685012](https://bugzil.la/685012)).
- Die CSS-Funktion {{cssxref("calc", "calc()")}} kann jetzt auf `<color-stop>` (in {{cssxref("&lt;gradient&gt;")}}) verwendet werden.
- Die CSS-Regel {{cssxref("@page")}} wird jetzt unterstützt ([Firefox Bug 115199](https://bugzil.la/115199)). Beachten Sie, dass die Pseudoklassen {{cssxref(":first")}}, {{cssxref(":right")}}, und {{cssxref(":left")}} noch nicht implementiert sind.
- Die Pseudoklasse `:-moz-placeholder` wurde durch das Pseudo-_Element_ `::-moz-placeholder` ersetzt ([Firefox Bug 737786](https://bugzil.la/737786)).
- Erklärungen mit `!important`, die in {{cssxref("@keyframes")}} erscheinen, werden jetzt gemäß Spezifikation ignoriert ([Firefox Bug 784466](https://bugzil.la/784466)).

### DOM/APIs

- Die Methoden [`Element.getElementsByTagName`](/de/docs/Web/API/Element/getElementsByTagName), [`Element.getElementsByTagNameNS`](/de/docs/Web/API/Element/getElementsByTagNameNS) und [`Element.getElementsByClassName`](/de/docs/Web/API/Element/getElementsByClassName) geben jetzt eine Live-[`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück ([Firefox Bug 799464](https://bugzil.la/799464)).
- Die Eigenschaft `mozLastModifiedDate` des [`File`](/de/docs/Web/API/File) wurde implementiert. ([Firefox Bug 793955](https://bugzil.la/793955))
- Die Eigenschaft lastModifiedDate des [`File`](/de/docs/Web/API/File) gibt das aktuelle Datum zurück, wenn das Datum der letzten Änderung unbekannt ist. ([Firefox Bug 793459](https://bugzil.la/793459))
- Die Methode `isPointInStroke` von [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) wurde implementiert ([Firefox Bug 803124](https://bugzil.la/803124)).
- Die Methode `toBlob` des [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) wurde implementiert ([Firefox Bug 648610](https://bugzil.la/648610)).
- Die Methoden `Node.isSupported` und [`document.implementation.hasFeature()`](/de/docs/Web/API/Document/implementation) wurden geändert, um immer `true` zurückzugeben ([Firefox Bug 801425](https://bugzil.la/801425)).
- Beim Aufruf von `document.createElement(null)` wird `null` jetzt zu einem String umgewandelt und funktioniert wie `document.createElement("null")`.
- Die Schnittstellen [`TextDecoder`](/de/docs/Web/API/TextDecoder) und [`TextEncoder`](/de/docs/Web/API/TextEncoder) wurden auf die neueste Spezifikation aktualisiert ([Firefox Bug 801487](https://bugzil.la/801487)).

### XForms

Die Unterstützung für XForms wurde in Firefox 19 [**entfernt**](https://www.philipp-wagner.com/blog/2011/07/the-future-of-mozilla-xforms).

## Änderungen für Add-on- und Mozilla-Entwickler

> [!NOTE]
> Eine wichtige Änderung in Firefox 19 ist, dass `nsresult` jetzt stark typisiert ist. Dies wird helfen, Fehler leichter zu erkennen, die durch falsche Handhabung von Rückgabewerten verursacht werden, kann jedoch dazu führen, dass bestehender Code bricht, wenn er in dieser Hinsicht falsche Annahmen trifft.

- `getBrowserSelection()` gibt jetzt den ausgewählten Text in einem Texteingabefeld zurück. Infolgedessen wird `gContextMenu.isTextSelected` `true` sein, wenn der Benutzer Text in einem Texteingabefeld auswählt, das kein Passwortfeld ist ([Firefox Bug 565717](https://bugzil.la/565717)).
- Dict.jsm: `Dict()` nimmt jetzt einen JSON-String an. `Dict.toJSON()` wurde hinzugefügt und gibt einen JSON-String zurück ([Firefox Bug 727967](https://bugzil.la/727967)).

### Schnittstellenänderungen

- `nsIImgLoadingContent`
  - : Der Parameter (aObserver) der Methode `addObserver()` ändert sich von `imgIDecoderObserver` zu `imgINotificationObserver`. Die Methode `notify()` von `imgINotificationObserver` ist nicht scripttauglich, daher müssen Sie `createScriptedObserver()` aus `imgITools` verwenden.
- `nsIChannel`
  - : Die Eigenschaft `contentLength` änderte sich von `long` zu `int64_t`.

## Siehe auch

- [Firefox 19 Beta Release Notes](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/19.0beta/releasenotes/)
- [Add-on-Kompatibilität für Firefox 19](https://blog.mozilla.org/addons/2013/02/07/compatibility-for-firefox-19/)

### Ältere Versionen

{{Firefox_for_developers}}
