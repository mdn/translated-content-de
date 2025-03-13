---
title: Firefox 15 für Entwickler
slug: Mozilla/Firefox/Releases/15
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

{{FirefoxSidebar}}

Firefox 15 wurde am 28. August 2012 veröffentlicht. Dieser Artikel listet die wesentlichen Änderungen auf, die nicht nur für Webentwickler, sondern auch für Entwickler, die mit Firefox und Gecko arbeiten, sowie für Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### HTML

- Das `size` Attribut des {{HTMLElement("font")}} Elements wird nun gemäß der HTML5-Spezifikation behandelt. Das bedeutet, dass alle ganzzahligen Werte größer als 10 oder kleiner als -10 nun als gleichwertig mit 10 bzw. -10 angesehen werden.
- Unterstützung für die `font-weight` und `point-size` Attribute auf dem `<font>` Element wurde entfernt; diese waren nicht standardisiert und Gecko war die einzige Engine, die sie unterstützte.
- Der [Opus Codec](https://www.opus-codec.org/) wird jetzt für Audio in Ogg-Containern für die HTML {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elemente unterstützt.
- Das {{HTMLElement("source")}} Element unterstützt jetzt das `media` Attribut.
- Die {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elemente unterstützen jetzt das played Attribut, welches ein [`TimeRanges`](/de/docs/Web/API/TimeRanges) Objekt bereitstellt, das die Zeitbereiche der bereits abgespielten Inhalte auflistet.

### CSS

- Die {{cssxref("font-feature-settings")}} Eigenschaft wurde auf die neueste Syntax aktualisiert: `font-feature-settings: "lnum" 1;`
- Die CSS {{cssxref("text-transform")}} Eigenschaft wurde erweitert, um Unicode-Ligaturzeichen (wie `ﬁ`) korrekt zu behandeln.
- Die CSS {{cssxref("word-break")}} Eigenschaft wurde implementiert.
- Die {{cssxref("border-image")}} Eigenschaft wurde aktualisiert, um der neuesten Spezifikation zu entsprechen, und die Präfixe wurden entfernt. ([bug 713643](https://bugzil.la/713643))
- Die `skew()` {{cssxref("transform")}} Funktion, die in Firefox 14 entfernt wurde, wurde aufgrund von Kompatibilitätsanforderungen für existierende Websites wiederhergestellt. Autoren wird jedoch empfohlen, die Funktionen `skewX()` und `skewY()` zu verwenden.
- Der Wert `plaintext` der CSS {{cssxref("unicode-bidi")}} Eigenschaft gilt jetzt auch für Inline-Elemente. ([Firefox bug 746987](https://bugzil.la/746987)).

### DOM

- Die DOM-Events Level 3 Methoden [`KeyboardEvent.getModifierState()`](/de/docs/Web/API/KeyboardEvent#getmodifierstate%28%29) und [`MouseEvent.getModifierState()`](/de/docs/Web/API/MouseEvent#getmodifierstate%28%29), die es ermöglichen, den Zustand von Modifikatortasten wie `Ctrl` oder `Shift` abzufragen, wurden implementiert (Bugs [630811](https://bugzil.la/630811) und [731878](https://bugzil.la/731878)). Das Verhalten entspricht jedoch dem neuesten D3E-Entwurf. Daher weichen einige Modifikatortastennamen von IE ab ([Firefox bug 769190](https://bugzil.la/769190)).
- Bei Mausereignissen wurde die Unterstützung zur Abfrage des Zustands der Maustasten mit dem [`MouseEvent.buttons`](/de/docs/Web/API/MouseEvent) Attribut implementiert.
- Bei Tastaturereignissen wurde die Unterstützung zur Abfrage der Tastenposition (Standard, links oder rechts von der Modifikatortaste, im Numpad) mit dem [KeyboardEvent.location](/de/docs/Web/API/KeyboardEvent#attributes_location) Attribut implementiert ([Firefox bug 166240](https://bugzil.la/166240)).
- Das Ergebnis von KeyboardEvent.keycode wird nun aus besseren Regeln berechnet, die fast identisch auf Windows/Linux/Mac sind. Und jetzt sind sie auf einigen Tastaturlayouts, die keine ASCII-tauglichen Layouts auf Linux und Mac sind, wie Arabisch, Kyrillisch, Thai usw., verfügbar. Siehe [das Dokument für virtuelle Tastencodes](/de/docs/Web/API/KeyboardEvent#virtual_key_codes).
- Die [`range.detach()`](/de/docs/Web/API/Range/detach) Methode wurde in eine No-Op umgewandelt und wird wahrscheinlich in Zukunft entfernt.
- Die Methode `HTMLVideoElement.mozHasAudio()` wurde implementiert. Sie zeigt an, ob es einen Audiotrack gibt, der mit einem bestimmten Videoelement verknüpft ist. ([bug 480376](https://bugzil.la/480376))
- Die `Performance` API hat eine neue Methode, [`now()`](/de/docs/Web/API/Performance/now), die hochauflösende Timer des Typs `DOMHighResTimeStamp` unterstützt. ([bug 539095](https://bugzil.la/539095)).
- Die [WebSMS API](https://web.archive.org/web/20210620092659/https://developer.mozilla.org/de/docs/Archive/B2G_OS/API/Mobile_Messaging_API) wurde aktualisiert und unterstützt jetzt ein `read` Attribut, das angibt, ob eine SMS-Nachricht gelesen oder ungelesen ist.
- Die [FileHandle API](https://wiki.mozilla.org/WebAPI/FileHandleAPI) wurde implementiert.
- Der [`Blob`](/de/docs/Web/API/Blob) Konstruktor akzeptiert jetzt `ArrayBufferView` als ein Mitglied des `blobParts` Parameters zusätzlich zu `ArrayBuffer`. ([bug 752402](https://bugzil.la/752402))
- Der `DeviceLightEvent` wird gemäß dem [Ambient Light Events Working Draft](https://www.w3.org/TR/ambient-light/) unterstützt.
- Die `DeviceProximityEvent` und `UserProximityEvent` [Proximity Events](https://www.w3.org/TR/proximity/) wurden implementiert.
- Die [`File`](/de/docs/Web/API/File) Eigenschaft `lastModifiedDate` wurde implementiert. ([Firefox bug 673586](https://bugzil.la/673586))

### JavaScript

- Unterstützung für das [`DataView`](/de/docs/Web/JavaScript/Reference/Global_Objects/DataView) Interface aus der Typed Arrays Spezifikation wurde hinzugefügt. Dies bietet einen Low-Level-Zugriff auf die Daten, die in einem [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) enthalten sind.
- Unterstützung für neue ECMAScript 2015 Built-ins: [`Number.isNaN()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN), [`Number.toInteger()`](https://web.archive.org/web/20200204124547/https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toInteger), [`Number.isInteger()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger), [`Number.isFinite()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite) wurde hinzugefügt. ([bug 749818](https://bugzil.la/749818), [bug 761495](https://bugzil.la/761495), [bug 761480](https://bugzil.la/749818)).
- Unterstützung für ECMAScript 2015 [Default-Parameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) wurde hinzugefügt. ([bug 757676](https://bugzil.la/757676)).
- Unterstützung für ECMAScript 2015 [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) wurde hinzugefügt. ([bug 574132](https://bugzil.la/574132)).

### WebGL

- Unterstützung für die [`WEBGL_compressed_texture_s3tc`](/de/docs/Web/API/WebGL_API/Using_Extensions#webgl_compressed_texture_s3tc) Erweiterung wurde hinzugefügt. Komprimierte Texturen verringern die Menge an Speicher, die benötigt wird, um eine Textur auf der GPU zu speichern, und ermöglichen höhere Auflösungen oder mehr Texturen der gleichen Auflösung.

### MathML

- Mathematische Operatoren können jetzt herunterladbare Schriftarten verwenden, die mit {{cssxref("@font-face")}} angegeben sind. Dadurch funktioniert das [MathML-fonts Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/) auch mit dehnbaren Operatoren.
- Das `selection` Attribut des {{MathMLElement("maction")}} wird jetzt nur noch mit dem Aktionstyp `toggle` berücksichtigt.
- [Veraltete namedspace-Bindung](https://www.w3.org/TR/MathML3/chapter3.html#id.3.3.4.2.1) wurde entfernt ([Firefox bug 673759](https://bugzil.la/673759)).
- Unterstützte Syntax für [Längenangaben](/de/docs/Web/MathML/Reference/Values) und {{MathMLElement("mpadded")}} Werte wurde der in der MathML3-Spezifikation angegebenen Syntax angenähert.
- Neue spiegelbare MathML-Operatoren für Arabische Mathematik wurden dem Operator-Wörterbuch hinzugefügt ([Firefox bug 757125](https://bugzil.la/757125)).

### SVG

- Unterstützung für das {{SVGElement("view")}} Element hinzugefügt ([Firefox bug 512525](https://bugzil.la/512525)).

### Netzwerk

- Unterstützung für das SPDY v3 Protokoll wurde hinzugefügt. Es ist standardmäßig deaktiviert und kann durch Setzen der Einstellung `network.http.spdy.enabled.v3` auf true aktiviert werden. ([bug 737470](https://bugzil.la/737470))

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellenänderungen

- `nsIDOMWindowUtils`
  - : `aModifiers` von `sendMouseEvent()`, `sendTouchEvent()`, `sendMouseEventToWindow()`, `sendMouseScrollEvent()` und `sendKeyEvent()` unterstützen alle Modifikatortasten, die von [`KeyboardEvent.getModifierState()`](/de/docs/Web/API/KeyboardEvent#getmodifierstate%28%29) unterstützt werden. Verwenden Sie `MODIFIER_*` Werte. Und jetzt wurde der 5. Parameter von `sendKeyEvent()` von `boolean` zu `unsigned long` geändert. Zur Rückwärtskompatibilität ändert sich das Verhalten nicht, wenn der Aufrufer `true` oder `false` übergibt. Diese Änderung ermöglicht es den Aufrufern, die Position der Taste anzugeben.
- `nsIBrowserHistory`
  - : Die Methode `hidePage()` wurde nie implementiert und in dieser Version komplett entfernt. Die Methode `addPageWithDetails()` wurde ebenfalls entfernt, im Rahmen laufender Arbeiten, um alle 'Places APIs' asynchron zu gestalten; verwenden Sie stattdessen `mozIAsyncHistory.updatePlaces()`. Außerdem wurde das `count` Attribut entfernt; es gab schon seit einiger Zeit keine tatsächliche Anzahl mehr zurück (es zeigte lediglich an, ob Einträge existierten oder nicht). Sie können `nsINavHistoryService.hasHistoryEntries` verwenden.
- `nsIDOMUtils`
  - : Die Methode `nsIDOMUtils.parseStyleSheet()` wurde hinzugefügt und ermöglicht das (Neu-)Parsen von Cascading Style Sheets.
- `nsIINIParserWriter`
  - : Die `nsIINIParserWriter.writeFile()` Methode akzeptiert jetzt eine `flags` Eigenschaft. Derzeit bietet diese nur eine Option: Sie können nun angeben, dass die Datei im UTF-16 Format anstelle von UTF-8 geschrieben werden soll, für eine bessere Kompatibilität mit Windows und bestimmten Installationsprogrammen.

#### Neue Schnittstellen

- `nsISpeculativeConnect`
  - : Bietet eine Möglichkeit, dem Netzwerk-Layer zu signalisieren, dass Sie wahrscheinlich in naher Zukunft eine Verbindung zu einer bestimmten URI öffnen möchten. Dies ermöglicht es dem Netzwerk-Layer, den manchmal hochgradig latenten Prozess des Öffnens einer neuen Netzwerkverbindung vorab zu beginnen.

#### Entfernte Schnittstellen

Die folgenden Schnittstellen wurden entfernt.

- `nsIGlobalHistory`

## Siehe auch

{{Firefox_for_developers}}
