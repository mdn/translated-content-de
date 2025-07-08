---
title: Firefox 15 für Entwickler
slug: Mozilla/Firefox/Releases/15
l10n:
  sourceCommit: 2d5b20a5eabb48bc5472ebe94b11afe2aa84f585
---

Firefox 15 wurde am 28. August 2012 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Das `size`-Attribut des {{HTMLElement("font")}}-Elements wird jetzt gemäß der HTML5-Spezifikation behandelt. Das bedeutet, dass alle ganzzahligen Werte größer als 10 oder kleiner als -10 nun als äquivalent zu 10 bzw. -10 betrachtet werden.
- Die Unterstützung für die `font-weight`- und `point-size`-Attribute auf dem `<font>`-Element wurde entfernt; diese waren nicht standardisiert und Gecko war die einzige Engine, die sie unterstützte.
- Der [Opus-Codec](https://www.opus-codec.org/) wird jetzt für Audio in Ogg-Containern für die HTML-{{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente unterstützt.
- Das {{HTMLElement("source")}}-Element unterstützt nun das `media`-Attribut.
- Die {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente unterstützen jetzt das `played`-Attribut, das ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt bereitstellt, das die Zeitbereiche der bisher zurückgespielten Medien auflistet.

### CSS

- Die {{cssxref("font-feature-settings")}}-Eigenschaft wurde auf das neueste Syntaxformat aktualisiert: `font-feature-settings: "lnum" 1;`
- Die CSS-{{cssxref("text-transform")}}-Eigenschaft wurde erweitert, um Unicode-Ligatur-Zeichen (wie `ﬁ`) korrekt zu verarbeiten.
- Die CSS-{{cssxref("word-break")}}-Eigenschaft wurde implementiert.
- Die {{cssxref("border-image")}}-Eigenschaft wurde aktualisiert, um der neuesten Spezifikation zu entsprechen, und Präfixe wurden entfernt. ([bug 713643](https://bugzil.la/713643))
- Die `skew()`-{{cssxref("transform")}}-Funktion, die in Firefox 14 entfernt wurde, wurde aufgrund von Kompatibilitätsproblemen mit bestehenden Seiten wiederhergestellt. Autoren wird jedoch empfohlen, die `skewX()`- und `skewY(`)-Funktionen stattdessen zu verwenden.
- Der `plaintext`-Wert der CSS-{{cssxref("unicode-bidi")}}-Eigenschaft gilt jetzt auch für Inline-Elemente. ([Firefox bug 746987](https://bugzil.la/746987)).

### DOM

- Die Methoden des DOM Events Level 3, [`KeyboardEvent.getModifierState()`](/de/docs/Web/API/KeyboardEvent/getModifierState) und [`MouseEvent.getModifierState()`](/de/docs/Web/API/MouseEvent/getModifierState), die es Ihnen ermöglichen, den Status von Modifikatortasten wie `Ctrl` oder `Shift` abzufragen, wurden implementiert (bugs [630811](https://bugzil.la/630811) und [731878](https://bugzil.la/731878)). Das Verhalten entspricht jedoch dem neuesten D3E-Entwurf. Daher unterscheiden sich einige Namen von Modifikatortasten von denen in IE ([Firefox bug 769190](https://bugzil.la/769190)).
- Bei Mausereignissen wurde die Unterstützung zur Abfrage des Zustands der Maustasten mittels des [`MouseEvent.buttons`](/de/docs/Web/API/MouseEvent)-Attributs implementiert.
- Bei Tastaturereignissen wurde die Unterstützung zur Abfrage der Tastenposition (standardmäßig, links oder rechts von der Modifikatortaste, im Numpad) mit dem [KeyboardEvent.location](/de/docs/Web/API/KeyboardEvent/location)-Attribut implementiert ([Firefox bug 166240](https://bugzil.la/166240)).
- Das Resultat von `KeyboardEvent.keycode` wurde aus besseren Regeln berechnet, die auf Windows/Linux/Mac fast gleich waren. Und jetzt sind sie auf einigen Tastaturlayouts verfügbar, die keine ASCII-fähigen Layouts auf Linux und Mac sind, wie Arabisch, Kyrillisch, Thai usw. Siehe [das Dokument für virtuelle Tastencodes](/de/docs/Web/API/UI_Events/Keyboard_event_key_values).
- Die Methode [`range.detach()`](/de/docs/Web/API/Range/detach) wurde in eine No-Op verwandelt und wird wahrscheinlich in Zukunft entfernt.
- Die Methode `HTMLVideoElement.mozHasAudio()` wurde implementiert. Sie zeigt an, ob ein Audiotrack mit einem bestimmten Videoelement verknüpft ist. ([bug 480376](https://bugzil.la/480376))
- Das `Performance`-API verfügt über eine neue Methode, [`now()`](/de/docs/Web/API/Performance/now), die hochauflösende Timer vom Typ `DOMHighResTimeStamp` unterstützt. ([bug 539095](https://bugzil.la/539095)).
- Die [WebSMS-API](https://web.archive.org/web/20210620092659/https://developer.mozilla.org/de/docs/Archive/B2G_OS/API/Mobile_Messaging_API) wurde aktualisiert und unterstützt jetzt ein `read`-Attribut, das anzeigt, ob eine SMS-Nachricht gelesen oder ungelesen ist.
- Die [FileHandle-API](https://wiki.mozilla.org/WebAPI/FileHandleAPI) wurde implementiert.
- Der [`Blob`](/de/docs/Web/API/Blob)-Konstruktor akzeptiert nun `ArrayBufferView` als Mitglied des `blobParts`-Parameters zusätzlich zu `ArrayBuffer`. ([bug 752402](https://bugzil.la/752402))
- Das `DeviceLightEvent`, wie es im [Working Draft zu Ambient Light Events](https://w3c.github.io/ambient-light/) spezifiziert ist, wurde implementiert.
- Die `DeviceProximityEvent` und `UserProximityEvent` [Proximity Events](https://w3c.github.io/proximity/) wurden implementiert.
- Die [`File`](/de/docs/Web/API/File) `lastModifiedDate`-Eigenschaft wurde implementiert. ([Firefox bug 673586](https://bugzil.la/673586))

### JavaScript

- Die Unterstützung für das [`DataView`](/de/docs/Web/JavaScript/Reference/Global_Objects/DataView)-Interface aus der Typed Arrays-Spezifikation wurde hinzugefügt. Dies ermöglicht einen niedrigstufigen Zugriff auf die im [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) enthaltenen Daten.
- Unterstützung für neue ECMAScript 2015 Built-ins: [`Number.isNaN()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN), [`Number.toInteger()`](https://web.archive.org/web/20200204124547/https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toInteger), [`Number.isInteger()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger), [`Number.isFinite()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite) wurde hinzugefügt. ([bug 749818](https://bugzil.la/749818), [bug 761495](https://bugzil.la/761495), [bug 761480](https://bugzil.la/749818)).
- Unterstützung für ECMAScript 2015 [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) wurde hinzugefügt. ([bug 757676](https://bugzil.la/757676)).
- Unterstützung für ECMAScript 2015 [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) wurde hinzugefügt. ([bug 574132](https://bugzil.la/574132)).

### WebGL

- Unterstützung für die [`WEBGL_compressed_texture_s3tc`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc)-Erweiterung wurde hinzugefügt. Komprimierte Texturen verringern den benötigten Speicherplatz für eine Textur auf der GPU, was höhere Auflösungen oder mehr Texturen in derselben Auflösung ermöglicht.

### MathML

- Mathematische Operatoren können jetzt herunterladbare Schriftarten nutzen, die mit {{cssxref("@font-face")}} angegeben sind. Dies lässt das [MathML-fonts Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/) auch mit dehnbaren Operatoren arbeiten.
- Das `selection`-Attribut des {{MathMLElement("maction")}} wird nun nur noch in Verbindung mit dem `toggle`-Aktionstyp berücksichtigt.
- [Veraltete Namensraumbindung](https://www.w3.org/TR/MathML3/chapter3.html#id.3.3.4.2.1) wurde entfernt ([Firefox bug 673759](https://bugzil.la/673759)).
- Die unterstützte Syntax für [Längen](/de/docs/Web/MathML/Reference/Values) und {{MathMLElement("mpadded")}}-Werte wurde näher an die in der MathML3-Spezifikation angegebene Syntax angepasst.
- Neue MathML-spiegelbare Operatoren für arabische Mathematik wurden dem Operator-Wörterbuch hinzugefügt ([Firefox bug 757125](https://bugzil.la/757125)).

### SVG

- Unterstützung für das {{SVGElement("view")}}-Element wurde hinzugefügt ([Firefox bug 512525](https://bugzil.la/512525)).

### Netzwerk

- Unterstützung für das SPDY v3 Protokoll wurde hinzugefügt. Es ist standardmäßig deaktiviert und kann durch Setzen der Präferenz `network.http.spdy.enabled.v3` auf true aktiviert werden. ([bug 737470](https://bugzil.la/737470))

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellenänderungen

- `nsIDOMWindowUtils`
  - : `aModifiers` von `sendMouseEvent()`, `sendTouchEvent()`, `sendMouseEventToWindow()`, `sendMouseScrollEvent()` und `sendKeyEvent()` unterstützt alle Modifikatortasten, die von [`KeyboardEvent.getModifierState()`](/de/docs/Web/API/KeyboardEvent/getModifierState) unterstützt werden. Verwenden Sie die `MODIFIER_*`-Werte. Und jetzt wurde der 5. Parameter von `sendKeyEvent()` von `boolean` auf `unsigned long` geändert. Aus Gründen der Abwärtskompatibilität, wenn der Anrufer `true` oder `false` übergibt, ändert sich das Verhalten nicht. Diese Änderung ermöglicht es den Anrufern, die Position der Taste anzugeben.
- `nsIBrowserHistory`
  - : Die `hidePage()`-Methode wurde nie implementiert und in dieser Version vollständig entfernt. Die `addPageWithDetails()`-Methode wurde ebenfalls entfernt im Rahmen der laufenden Arbeiten, um alle 'Places APIs' asynchron zu machen; verwenden Sie stattdessen `mozIAsyncHistory.updatePlaces()`. Auch das `count`-Attribut wurde entfernt; es hatte seit einiger Zeit keine tatsächliche Anzahl mehr zurückgegeben (stattdessen wies es darauf hin, ob Einträge existierten oder nicht). Sie können `nsINavHistoryService.hasHistoryEntries` anstelle dessen verwenden.
- `nsIDOMUtils`
  - : Die `nsIDOMUtils.parseStyleSheet()`-Methode wurde hinzugefügt und ermöglicht das (erneute) Parsen von Cascading Style Sheets.
- `nsIINIParserWriter`
  - : Die `nsIINIParserWriter.writeFile()`-Methode akzeptiert jetzt eine `flags`-Eigenschaft. Derzeit wird nur eine Option angeboten: Sie können jetzt angeben, die Datei im UTF-16-Format statt im UTF-8-Format zu schreiben, um die Kompatibilität mit Windows und bestimmten Installern zu verbessern.

#### Neue Schnittstellen

- `nsISpeculativeConnect`
  - : Bietet eine Möglichkeit, der Netzwerkschicht zu signalisieren, dass Sie wahrscheinlich in naher Zukunft eine Verbindung zu einer bestimmten URI öffnen möchten. Dadurch kann die Netzwerkschicht den manchmal zeitintensiven Prozess des Öffnens einer neuen Netzwerkverbindung im Voraus beginnen.

#### Entfernte Schnittstellen

Die folgenden Schnittstellen wurden entfernt.

- `nsIGlobalHistory`

## Siehe auch

{{Firefox_for_developers}}
