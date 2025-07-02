---
title: Firefox 15 für Entwickler
slug: Mozilla/Firefox/Releases/15
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Firefox 15 wurde am 28. August 2012 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Erweiterungsentwickler nützlich sind.

## Änderungen für Webentwickler

### HTML

- Das `size`-Attribut des {{HTMLElement("font")}}-Elements wird nun gemäß der HTML5-Spezifikation gehandhabt. Das bedeutet, dass alle ganzzahligen Werte größer als 10 oder kleiner als -10 nun als äquivalent zu 10 bzw. -10 betrachtet werden.
- Die Unterstützung für die `font-weight`- und `point-size`-Attribute auf dem `<font>`-Element wurde entfernt; diese waren nicht standardisiert und Gecko war die einzige Engine, die sie unterstützte.
- Der [Opus Codec](https://www.opus-codec.org/) wird nun für Audio in Ogg-Containern für die HTML {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elemente unterstützt.
- Das {{HTMLElement("source")}}-Element unterstützt nun das `media`-Attribut.
- Die {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elemente unterstützen nun das `played`-Attribut, das ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt bereitstellt, welches die Zeitspannen der bisher abgespielten Medien auflistet.

### CSS

- Die {{cssxref("font-feature-settings")}}-Eigenschaft wurde auf die neueste Syntax aktualisiert: `font-feature-settings: "lnum" 1;`
- Die CSS-{{cssxref("text-transform")}}-Eigenschaft wurde erweitert, um Unicode-Ligaturzeichen (wie `ﬁ`) korrekt zu behandeln.
- Die CSS-{{cssxref("word-break")}}-Eigenschaft wurde implementiert.
- Die {{cssxref("border-image")}}-Eigenschaft wurde aktualisiert, um der neuesten Spezifikation zu entsprechen, und wurde nicht mehr präfixiert. ([bug 713643](https://bugzil.la/713643))
- Die `skew()`-{{cssxref("transform")}}-Funktion wurde in Firefox 14 entfernt und aufgrund der Kompatibilität mit bestehenden Websites wiederhergestellt. Autoren wird jedoch geraten, stattdessen die Funktionen `skewX()` und `skewY()` zu verwenden.
- Der Wert `plaintext` der CSS-{{cssxref("unicode-bidi")}}-Eigenschaft gilt jetzt auch für Inline-Elemente. ([Firefox bug 746987](https://bugzil.la/746987))

### DOM

- Die DOM Events Level 3-Methoden [`KeyboardEvent.getModifierState()`](/de/docs/Web/API/KeyboardEvent#getmodifierstate%28%29) und [`MouseEvent.getModifierState()`](/de/docs/Web/API/MouseEvent#getmodifierstate%28%29), die es Ihnen ermöglichen, den Zustand von Modifier-Tasten wie `Ctrl` oder `Shift` abzufragen, wurden implementiert (Fehler [630811](https://bugzil.la/630811) und [731878](https://bugzil.la/731878)). Das Verhalten entspricht jedoch dem neuesten D3E-Entwurf. Daher sind einige Modifier-Tastennamen anders als bei IE ([Firefox bug 769190](https://bugzil.la/769190)).
- Bei Mausereignissen wurde die Unterstützung für das Abfragen des Zustands der Maustasten mithilfe des [`MouseEvent.buttons`](/de/docs/Web/API/MouseEvent)-Attributs implementiert.
- Bei Tastaturereignissen wurde die Unterstützung für das Abfragen des Tastenstandorts (standardmäßig, links oder rechts von Modifier-Tasten, im Numpad) mithilfe des [KeyboardEvent.location](/de/docs/Web/API/KeyboardEvent#attributes_location)-Attributs implementiert ([Firefox bug 166240](https://bugzil.la/166240)).
- Das Ergebnis von `KeyboardEvent.keycode` wurde nach besseren Regeln berechnet, die auf Windows/Linux/Mac fast gleich waren. Jetzt sind sie auf einigen Tastaturlayouts verfügbar, die nicht ASCII-fähig sind, wie etwa Arabisch, Kyrillisch, Thailändisch usw. Siehe [das Dokument für virtuelle Tastencodes](/de/docs/Web/API/KeyboardEvent#virtual_key_codes).
- Die [`range.detach()`](/de/docs/Web/API/Range/detach)-Methode wurde in eine No-Op umgewandelt und wird wahrscheinlich in Zukunft entfernt.
- Die Methode `HTMLVideoElement.mozHasAudio()` wurde implementiert. Sie zeigt an, ob ein Audiotrack mit einem bestimmten Videoelement verknüpft ist. ([bug 480376](https://bugzil.la/480376))
- Das `Performance`-API hat eine neue Methode, [`now()`](/de/docs/Web/API/Performance/now), die hochauflösende Timer vom Typ `DOMHighResTimeStamp` unterstützt. ([bug 539095](https://bugzil.la/539095)).
- Das [WebSMS API](https://web.archive.org/web/20210620092659/https://developer.mozilla.org/de/docs/Archive/B2G_OS/API/Mobile_Messaging_API) wurde aktualisiert und unterstützt nun ein `read`-Attribut, das anzeigt, ob eine SMS-Nachricht gelesen oder ungelesen ist.
- Das [FileHandle API](https://wiki.mozilla.org/WebAPI/FileHandleAPI) wurde implementiert.
- Der [`Blob`](/de/docs/Web/API/Blob)-Konstruktor nimmt nun `ArrayBufferView` als Mitglied des `blobParts`-Parameters zusätzlich zu `ArrayBuffer`. ([bug 752402](https://bugzil.la/752402))
- Das `DeviceLightEvent`, das im [Ambient Light Events Working Draft](https://w3c.github.io/ambient-light/) spezifiziert ist, wurde implementiert.
- Die `DeviceProximityEvent` und `UserProximityEvent` [Proximity Events](https://w3c.github.io/proximity/) wurden implementiert.
- Die [`File`](/de/docs/Web/API/File) `lastModifiedDate`-Eigenschaft wurde implementiert. ([Firefox bug 673586](https://bugzil.la/673586))

### JavaScript

- Unterstützung für das [`DataView`](/de/docs/Web/JavaScript/Reference/Global_Objects/DataView)-Interface aus der Typed Arrays-Spezifikation wurde hinzugefügt. Dies bietet einen direkten Zugriff auf die Daten, die in einem [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) enthalten sind.
- Unterstützung für neue ECMAScript 2015 Built-ins: [`Number.isNaN()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN), [`Number.toInteger()`](https://web.archive.org/web/20200204124547/https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toInteger), [`Number.isInteger()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger), [`Number.isFinite()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite) wurde hinzugefügt. ([bug 749818](https://bugzil.la/749818), [bug 761495](https://bugzil.la/761495), [bug 761480](https://bugzil.la/749818)).
- Unterstützung für ECMAScript 2015 [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) wurde hinzugefügt. ([bug 757676](https://bugzil.la/757676)).
- Unterstützung für ECMAScript 2015 [rest parameters](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) wurde hinzugefügt. ([bug 574132](https://bugzil.la/574132)).

### WebGL

- Unterstützung für die [`WEBGL_compressed_texture_s3tc`](/de/docs/Web/API/WebGL_API/Using_Extensions#webgl_compressed_texture_s3tc)-Erweiterung wurde hinzugefügt. Komprimierte Texturen reduzieren den Speicherbedarf, der erforderlich ist, um eine Textur auf der GPU zu speichern, und ermöglichen so höhere Auflösungen oder mehr Texturen derselben Auflösung.

### MathML

- Mathematische Operatoren können jetzt herunterladbare Schriftarten verwenden, die mit {{cssxref("@font-face")}} spezifiziert wurden. Dadurch funktioniert das [MathML-fonts Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/) auch mit dehnbaren Operatoren.
- Das `selection`-Attribut des {{MathMLElement("maction")}} wird jetzt nur noch beim `toggle`-Actiontype berücksichtigt.
- [Veraltete Namedspace-Bindung](https://www.w3.org/TR/MathML3/chapter3.html#id.3.3.4.2.1) wurde entfernt ([Firefox bug 673759](https://bugzil.la/673759)).
- Unterstützte Syntax für [Längen](/de/docs/Web/MathML/Reference/Values) und {{MathMLElement("mpadded")}}-Werte wurde näher an die in der MathML3-Spezifikation angegebene Syntax angepasst.
- Neue MathML-spiegelbare Operatoren für die arabische Mathematik wurden dem Operator-Wörterbuch hinzugefügt ([Firefox bug 757125](https://bugzil.la/757125)).

### SVG

- Unterstützung für das {{SVGElement("view")}}-Element wurde hinzugefügt ([Firefox bug 512525](https://bugzil.la/512525)).

### Netzwerk

- Unterstützung für das SPDY v3-Protokoll wurde hinzugefügt. Es ist standardmäßig deaktiviert und kann aktiviert werden, indem die Einstellung `network.http.spdy.enabled.v3` auf true gesetzt wird. ([bug 737470](https://bugzil.la/737470))

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellenänderungen

- `nsIDOMWindowUtils`
  - : `aModifiers` von `sendMouseEvent()`, `sendTouchEvent()`, `sendMouseEventToWindow()`, `sendMouseScrollEvent()` und `sendKeyEvent()` unterstützt alle Modifikatortasten, die von [`KeyboardEvent.getModifierState()`](/de/docs/Web/API/KeyboardEvent#getmodifierstate%28%29) unterstützt werden. Verwenden Sie `MODIFIER_*`-Werte. Und jetzt wurde der 5. Parameter von `sendKeyEvent()` von `boolean` in `unsigned long` geändert. Aus Gründen der Abwärtskompatibilität, wenn der Aufrufer `true` oder `false` übergibt, ändert sich das Verhalten nicht. Diese Änderung ermöglicht es den Aufrufern, den Ort der Taste anzugeben.
- `nsIBrowserHistory`
  - : Die `hidePage()`-Methode wurde nie implementiert und in dieser Version vollständig entfernt. Auch die `addPageWithDetails()`-Methode wurde im Rahmen der laufenden Arbeit zur Asynchronisierung aller 'Places-APIs' entfernt; stattdessen verwenden Sie `mozIAsyncHistory.updatePlaces()`. Außerdem wurde das `count`-Attribut entfernt; es hatte seit einiger Zeit keine tatsächliche Zählung zurückgegeben (es zeigte stattdessen an, ob Einträge vorhanden waren oder nicht). Sie können `nsINavHistoryService.hasHistoryEntries` stattdessen verwenden.
- `nsIDOMUtils`
  - : Die `nsIDOMUtils.parseStyleSheet()`-Methode wurde hinzugefügt und ermöglicht das (erneute) Parsen von Cascading Style Sheets.
- `nsIINIParserWriter`
  - : Die `nsIINIParserWriter.writeFile()`-Methode akzeptiert jetzt eine `flags`-Eigenschaft. Derzeit bietet dies nur eine Option: Sie können festlegen, dass die Datei im UTF-16-Format statt im UTF-8-Format geschrieben wird, um die Kompatibilität mit Windows und bestimmten Installern zu verbessern.

#### Neue Schnittstellen

- `nsISpeculativeConnect`
  - : Bietet eine Möglichkeit, der Netzwerkschicht zu signalisieren, dass Sie wahrscheinlich in naher Zukunft eine Verbindung zu einer angegebenen URI herstellen möchten. Dadurch kann die Netzwerkschicht den manchmal latenzreichen Prozess des Öffnens einer neuen Netzwerkverbindung im Voraus beginnen.

#### Entfernte Schnittstellen

Die folgenden Schnittstellen wurden entfernt.

- `nsIGlobalHistory`

## Siehe auch

{{Firefox_for_developers}}
