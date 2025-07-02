---
title: Firefox 19 für Entwickler
slug: Mozilla/Firefox/Releases/19
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Firefox 19 wurde am 19. Februar 2013 veröffentlicht. Dieser Artikel listet die wichtigen Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Entwickler von Firefox und Gecko sowie für Add-on-Entwickler.

## Änderungen für Webentwickler

### JavaScript

- [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set)-Objekte haben sich von einer `size()`-Methode zu einer `size`-Eigenschaft geändert ([Firefox Bug 807001](https://bugzil.la/807001)).
- [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set)-Objekte haben jetzt auch eine `clear()`-Methode. ([Firefox Bug 805003](https://bugzil.la/805003))

### CSS

- Unterstützung für die viewport-relativen {{cssxref("&lt;length&gt;")}} Einheiten `vh`, `vw`, `vmin` und `vmax` wurde hinzugefügt ([Firefox Bug 503720](https://bugzil.la/503720)).
- CSS Flexbox wurde ohne Präfix veröffentlicht, bleibt jedoch standardmäßig deaktiviert ([Firefox Bug 801098](https://bugzil.la/801098)).
- Der Wert `-moz-initial` wurde ohne Präfix veröffentlicht ([Firefox Bug 806068](https://bugzil.la/806068)). `-moz-initial` wird für eine Weile als Alias beibehalten; Autoren werden jedoch dringend ermutigt, auf `initial` umzustellen.
- Die CSS-Eigenschaft {{cssxref("text-transform")}} unterstützt jetzt das Schlüsselwort `full-width`, welches eine nahtlosere Einbeziehung lateinischer Zeichen in Texte mit ideografischen Festbreitenzeichen, wie Chinesisch oder Japanisch, ermöglicht ([Firefox Bug 774560](https://bugzil.la/774560)).
- Die CSS-Regel {{cssxref("page-break-inside")}} wurde implementiert ([Firefox Bug 685012](https://bugzil.la/685012)).
- Die CSS-Funktion {{cssxref("calc", "calc()")}} kann jetzt bei `<color-stop>` (in {{cssxref("&lt;gradient&gt;")}}) verwendet werden.
- Die CSS-Regel {{cssxref("@page")}} wird jetzt unterstützt ([Firefox Bug 115199](https://bugzil.la/115199)). Beachten Sie, dass die Pseudo-Klassen {{cssxref(":first")}}, {{cssxref(":right")}}, und {{cssxref(":left")}} noch nicht implementiert sind.
- Die `:-moz-placeholder` Pseudoklasse wurde durch das `::-moz-placeholder` Pseudo-Element ersetzt ([Firefox Bug 737786](https://bugzil.la/737786)).
- Mit `!important` qualifizierte Deklarationen, die in {{cssxref("@keyframes")}} erscheinen, werden nun gemäß Spezifikation ignoriert ([Firefox Bug 784466](https://bugzil.la/784466)).

### DOM/APIs

- Die Methoden [`Element.getElementsByTagName`](/de/docs/Web/API/Element/getElementsByTagName), [`Element.getElementsByTagNameNS`](/de/docs/Web/API/Element/getElementsByTagNameNS) und [`Element.getElementsByClassName`](/de/docs/Web/API/Element/getElementsByClassName) geben jetzt eine Live-`HTMLCollection` zurück ([Firefox Bug 799464](https://bugzil.la/799464)).
- Die [`File`](/de/docs/Web/API/File) `mozLastModifiedDate`-Eigenschaft wurde implementiert. ([Firefox Bug 793955](https://bugzil.la/793955))
- Die [`File`](/de/docs/Web/API/File) `lastModifiedDate`-Eigenschaft gibt das aktuelle Datum zurück, wenn das Datum der letzten Änderung unbekannt ist. ([Firefox Bug 793459](https://bugzil.la/793459))
- Die [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) `isPointInStroke`-Methode wurde implementiert ([Firefox Bug 803124](https://bugzil.la/803124)).
- Die [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) `toBlob`-Methode wurde implementiert ([Firefox Bug 648610](https://bugzil.la/648610)).
- Die Methoden `Node.isSupported` und [`document.implementation.hasFeature()`](/de/docs/Web/API/Document/implementation) wurden so geändert, dass sie immer `true` zurückgeben ([Firefox Bug 801425](https://bugzil.la/801425)).
- Beim Aufruf von `document.createElement(null)` wird `null` jetzt in einen String umgewandelt und funktioniert wie `document.createElement("null")`.
- Die Schnittstellen [`TextDecoder`](/de/docs/Web/API/TextDecoder) und [`TextEncoder`](/de/docs/Web/API/TextEncoder) wurden aktualisiert, um der neuesten Spezifikation zu entsprechen ([Firefox Bug 801487](https://bugzil.la/801487)).

### XForms

Unterstützung für XForms wurde in Firefox 19 [**entfernt**](https://www.philipp-wagner.com/blog/2011/07/the-future-of-mozilla-xforms).

## Änderungen für Add-on- und Mozilla-Entwickler

> [!NOTE]
> Eine wesentliche Änderung in Firefox 19 ist, dass `nsresult` jetzt stark typisiert ist. Dies wird helfen, Fehler, die durch fehlerhafte Handhabung von Rückgabewerten verursacht werden, leichter zu erkennen, kann jedoch dazu führen, dass bestehender Code kaputt geht, wenn er in dieser Hinsicht falsche Annahmen macht.

- `getBrowserSelection()` gibt jetzt den ausgewählten Text in einem Texteingabefeld zurück. Daher wird `gContextMenu.isTextSelected` `true` sein, wenn der Benutzer Text in einem Texteingabefeld auswählt, das kein Passwortfeld ist. ([Firefox Bug 565717](https://bugzil.la/565717))
- Dict.jsm: `Dict()` nimmt jetzt eine JSON-Zeichenfolge. `Dict.toJSON()` wurde hinzugefügt und gibt eine JSON-Zeichenfolge zurück. ([Firefox Bug 727967](https://bugzil.la/727967))

### Schnittstellenänderungen

- `nsIImgLoadingContent`
  - : Der Parameter (aObserver) der `addObserver()` Methode ändert sich von `imgIDecoderObserver` zu `imgINotificationObserver`. Die `notify()` Methode von `imgINotificationObserver` ist nicht skriptfähig, daher müssen Sie `createScriptedObserver()` von `imgITools` verwenden.
- `nsIChannel`
  - : Die Eigenschaft `contentLength` änderte sich von `long` zu `int64_t`.

## Siehe auch

- [Firefox 19 Beta Release Notes](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/19.0beta/releasenotes/)
- [Add-on-Kompatibilität für Firefox 19](https://blog.mozilla.org/addons/2013/02/07/compatibility-for-firefox-19/)

### Ältere Versionen

{{Firefox_for_developers}}
