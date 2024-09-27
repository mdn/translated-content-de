---
title: Firefox 15 für Entwickler
slug: Mozilla/Firefox/Releases/15
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Firefox 15 wurde am 28. August 2012 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### HTML

- Das `size` Attribut des {{HTMLElement("font")}} Elements wird nun gemäß der HTML5-Spezifikation behandelt. Das bedeutet, dass alle Ganzzahlen, die größer als 10 oder kleiner als -10 sind, nun als gleichwertig zu 10 bzw. -10 betrachtet werden.
- Die Unterstützung für die `font-weight` und `point-size` Attribute auf dem `<font>` Element wurde entfernt; diese waren nicht standardisiert und Gecko war die einzige Engine, die sie unterstützt hat.
- Der [Opus-Codec](https://www.opus-codec.org/) wird nun für Audio in Ogg-Containern in den HTML {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elementen unterstützt.
- Das {{HTMLElement("source")}} Element unterstützt nun das `media` Attribut.
- Die {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elemente unterstützen nun das played Attribut, welches ein [`TimeRanges`](/de/docs/Web/API/TimeRanges) Objekt bereitstellt, das die Zeitbereiche der Medien auflistet, die bisher wiedergegeben wurden.

### CSS

- Die {{cssxref("font-feature-settings")}} Eigenschaft wurde auf die neueste Syntax aktualisiert: `font-feature-settings: "lnum" 1;`
- Die CSS {{cssxref("text-transform")}} Eigenschaft wurde erweitert, um Unicode-Ligaturzeichen (wie `ﬁ`) korrekt zu behandeln.
- Die CSS {{cssxref("word-break")}} Eigenschaft wurde implementiert.
- Die {{cssxref("border-image")}} Eigenschaft wurde aktualisiert, um der neuesten Spezifikation zu entsprechen, und die Eigenschaften wurden ohne Präfixe versehen. ([bug 713643](https://bugzil.la/713643))
- Die `skew()` {{cssxref("transform")}} Funktion, die in Firefox 14 entfernt wurde, wurde wegen bestehender Kompatibilität wiederhergestellt. Autoren wird jedoch empfohlen, stattdessen die Funktionen `skewX()` und `skewY()` zu verwenden.
- Der Wert `plaintext` der CSS {{cssxref("unicode-bidi")}} Eigenschaft gilt nun auch für Inline-Elemente. ([Firefox bug 746987](https://bugzil.la/746987)).

### DOM

- Die DOM Events Level 3 Methoden [`KeyboardEvent.getModifierState()`](/de/docs/Web/API/KeyboardEvent#getmodifierstate%28%29) und [`MouseEvent.getModifierState()`](/de/docs/Web/API/MouseEvent#getmodifierstate%28%29), die es ermöglichen, den Zustand von Modifier-Tasten wie `Ctrl` oder `Shift` abzufragen, wurden implementiert (Bugs [630811](https://bugzil.la/630811) und [731878](https://bugzil.la/731878)). Das Verhalten entspricht jedoch dem neuesten D3E Entwurf. Daher unterscheiden sich einige Modifier-Tastennamen von denen in IE ([Firefox bug 769190](https://bugzil.la/769190)).
- Bei Mausevents wurde die Unterstützung für die Abfrage des Zustands der Maustasten mit dem [`MouseEvent.buttons`](/de/docs/Web/API/MouseEvent) Attribut implementiert.
- Bei Tastaturevents wurde die Unterstützung für die Abfrage der Tastenposition (standardmäßig, links oder rechts der Modifikatortaste, im Numpad) mit dem [KeyboardEvent.location](/de/docs/Web/API/KeyboardEvent#attributes_location) Attribut implementiert ([Firefox bug 166240](https://bugzil.la/166240)).
- Das Ergebnis von KeyboardEvent.keycode wurde aus besseren Regeln berechnet, die auf Windows/Linux/Mac fast gleich waren. Jetzt sind sie auch auf einigen Tastaturlayouts verfügbar, die keine ASCII-fähigen Layouts auf Linux und Mac sind, wie Arabisch, Kyrillisch, Thailändisch und so weiter. Siehe [das Dokument für virtuelle Tastencodes](/de/docs/Web/API/KeyboardEvent#virtual_key_codes).
- Die [`range.detach()`](/de/docs/Web/API/Range/detach) Methode wurde in eine No-Op verwandelt und wird möglicherweise in Zukunft entfernt.
- Die Methode `HTMLVideoElement.mozHasAudio()` wurde implementiert. Sie zeigt an, ob es einen Audiotrack gibt, der mit einem bestimmten Videoelement verknüpft ist. ([bug 480376](https://bugzil.la/480376))
- Die `Performance` API hat eine neue Methode, [`now()`](/de/docs/Web/API/Performance/now), die hochauflösende Timer vom Typ `DOMHighResTimeStamp` unterstützt. ([bug 539095](https://bugzil.la/539095)).
- Die [WebSMS API](https://web.archive.org/web/20210620092659/https://developer.mozilla.org/de/docs/Archive/B2G_OS/API/Mobile_Messaging_API) wurde aktualisiert und unterstützt nun ein `read` Attribut, das anzeigt, ob eine SMS-Nachricht gelesen oder ungelesen ist.
- Die [FileHandle API](https://wiki.mozilla.org/WebAPI/FileHandleAPI) wurde implementiert.
- Der [`Blob`](/de/docs/Web/API/Blob) Konstruktor akzeptiert nun `ArrayBufferView` als Mitglied des `blobParts` Parameters zusätzlich zu `ArrayBuffer`. ([bug 752402](https://bugzil.la/752402))
- Das `DeviceLightEvent`, das im [Ambient Light Events Working Draft](https://www.w3.org/TR/ambient-light/) spezifiziert ist, wurde implementiert.
- Die `DeviceProximityEvent` und `UserProximityEvent` [Proximity Events](https://www.w3.org/TR/proximity/) wurden implementiert.
- Die [`File`](/de/docs/Web/API/File) `lastModifiedDate` Eigenschaft wurde implementiert. ([Firefox bug 673586](https://bugzil.la/673586))

### JavaScript

- Unterstützung für das [`DataView`](/de/docs/Web/JavaScript/Reference/Global_Objects/DataView) Interface aus der Typed Arrays Spezifikation wurde hinzugefügt. Dies bietet einen Low-Level-Zugriff auf die Daten, die in einem [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) enthalten sind.
- Unterstützung für neue ECMAScript 2015 Built-ins: [`Number.isNaN()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN), [`Number.toInteger()`](https://web.archive.org/web/20200204124547/https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toInteger), [`Number.isInteger()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger), [`Number.isFinite()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite) wurde hinzugefügt. ([bug 749818](https://bugzil.la/749818), [bug 761495](https://bugzil.la/761495), [bug 761480](https://bugzil.la/749818)).
- Unterstützung für ECMAScript 2015 [Standard-Parameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) wurde hinzugefügt. ([bug 757676](https://bugzil.la/757676)).
- Unterstützung für ECMAScript 2015 [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) wurde hinzugefügt. ([bug 574132](https://bugzil.la/574132)).

### WebGL

- Unterstützung für die [`WEBGL_compressed_texture_s3tc`](/de/docs/Web/API/WebGL_API/Using_Extensions#webgl_compressed_texture_s3tc) Erweiterung wurde hinzugefügt. Komprimierte Texturen reduzieren den Speicherbedarf für die Speicherung einer Textur auf der GPU, was die Verwendung höher aufgelöster Texturen oder mehr Texturen derselben Auflösung ermöglicht.

### MathML

- Mathematische Operatoren können nun herunterladbare Schriftarten verwenden, die mit {{cssxref("@font-face")}} spezifiziert sind. Dies ermöglicht, dass das [MathML-fonts Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/) auch mit dehnbaren Operatoren funktioniert.
- Das `selection` Attribut des {{MathMLElement("maction")}} wird nun nur mit dem `toggle` Aktions-Typ berücksichtigt.
- [Veraltete namedspace-Bindung](https://www.w3.org/TR/MathML3/chapter3.html#id.3.3.4.2.1) wurde entfernt ([Firefox bug 673759](https://bugzil.la/673759)).
- Unterstützte Syntax für [Länge](/de/docs/Web/MathML/Values) und {{MathMLElement("mpadded")}} Werte wurde näher an die in der MathML3-Spezifikation angegebene Syntax gebracht.
- Neue MathML-spiegelbare Operatoren für arabische Mathematik wurden zum Operator-Wörterbuch hinzugefügt ([Firefox bug 757125](https://bugzil.la/757125)).

### SVG

- Unterstützung für das {{SVGElement("view")}} Element wurde hinzugefügt ([Firefox bug 512525](https://bugzil.la/512525)).

### Netzwerk

- Unterstützung für das SPDY v3 Protokoll wurde hinzugefügt. Es ist standardmäßig deaktiviert und kann aktiviert werden, indem die Präferenz `network.http.spdy.enabled.v3` auf true gesetzt wird. ([bug 737470](https://bugzil.la/737470))

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellenänderungen

- `nsIDOMWindowUtils`
  - : `aModifiers` von `sendMouseEvent()`, `sendTouchEvent()`, `sendMouseEventToWindow()`, `sendMouseScrollEvent()` und `sendKeyEvent()` unterstützt alle Modifier-Tasten, die von [`KeyboardEvent.getModifierState()`](/de/docs/Web/API/KeyboardEvent#getmodifierstate%28%29) unterstützt werden. Verwenden Sie `MODIFIER_*` Werte. Und nun wurde der 5. Parameter von `sendKeyEvent()` von `boolean` zu `unsigned long` geändert. Zur Rückwärtskompatibilität ändert sich das Verhalten nicht, wenn der Aufrufer `true` oder `false` übergibt. Diese Änderung ermöglicht es den Aufrufern, die Lage der Taste anzugeben.
- `nsIBrowserHistory`
  - : Die `hidePage()` Methode wurde nie implementiert und in dieser Version vollständig entfernt. Die `addPageWithDetails()` Methode wurde ebenfalls entfernt, im Rahmen der laufenden Arbeiten, alle 'Places APIs' asynchron zu machen; verwenden Sie stattdessen `mozIAsyncHistory.updatePlaces()`. Auch das `count` Attribut wurde entfernt; es hatte seit einiger Zeit keine tatsächliche Anzahl zurückgegeben (stattdessen wurde angezeigt, ob Einträge vorhanden sind oder nicht). Sie können stattdessen `nsINavHistoryService.hasHistoryEntries` verwenden.
- `inIDOMUtils`
  - : Die `inlDOMUtils.parseStyleSheet()` Methode wurde hinzugefügt und ermöglicht das (erneute) Parsen von Cascading Style Sheets.
- `nsIINIParserWriter`
  - : Die `nsIINIParserWriter.writeFile()` Methode akzeptiert nun eine `flags` Eigenschaft. Dies bietet derzeit nur eine Option: Sie können nun angeben, dass die Datei im UTF-16 Format statt im UTF-8 Format geschrieben werden soll, um die Kompatibilität mit Windows und bestimmten Installationsprogrammen zu verbessern.

#### Neue Schnittstellen

- `nsISpeculativeConnect`
  - : Bietet eine Möglichkeit, dem Netzwerk-Stack anzuzeigen, dass Sie wahrscheinlich in naher Zukunft eine Verbindung zu einer bestimmten URI herstellen möchten. Dies ermöglicht dem Netzwerk-Stack, den manchmal latenzreichen Prozess der Eröffnung einer neuen Netzwerkverbindung im Voraus zu beginnen.

#### Entfernte Schnittstellen

Die folgenden Schnittstellen wurden entfernt.

- `nsIGlobalHistory`

## Siehe auch

{{Firefox_for_developers}}
