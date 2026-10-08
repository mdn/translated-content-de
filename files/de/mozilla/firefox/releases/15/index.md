---
title: Firefox 15 – Versionshinweise für Entwickler
short-title: Firefox 15
slug: Mozilla/Firefox/Releases/15
l10n:
  sourceCommit: c61fd478259d34aa4fd6ac4cbf9b7d64a78aff43
---

Firefox 15 wurde am 28. August 2012 veröffentlicht. Dieser Artikel beschreibt wichtige Änderungen für Webentwickler, Firefox- und Gecko-Entwickler sowie Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Das `size`-Attribut des {{HTMLElement("font")}}-Elements wird jetzt gemäß der HTML5-Spezifikation behandelt. Das bedeutet, dass alle ganzzahligen Werte größer als 10 beziehungsweise kleiner als -10 nun als gleichbedeutend mit 10 beziehungsweise -10 gelten.
- Die Unterstützung für die Attribute `font-weight` und `point-size` des `<font>`-Elements wurde entfernt. Diese Attribute waren nicht standardisiert, und Gecko war die einzige Engine, die sie unterstützte.
- Der [Opus-Codec](https://www.opus-codec.org/) wird jetzt für Audio in Ogg-Containern bei den HTML-Elementen {{HTMLElement("audio")}} und {{HTMLElement("video")}} unterstützt.
- Das {{HTMLElement("source")}}-Element unterstützt jetzt das `media`-Attribut.
- Die Elemente {{HTMLElement("audio")}} und {{HTMLElement("video")}} unterstützen jetzt das Attribut `played`. Es liefert ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt, das die Zeitbereiche der bisher wiedergegebenen Medieninhalte auflistet.

### CSS

- Die Eigenschaft {{cssxref("font-feature-settings")}} wurde auf die aktuelle Syntax aktualisiert: `font-feature-settings: "lnum" 1;`
- Die CSS-Eigenschaft {{cssxref("text-transform")}} wurde erweitert, sodass Unicode-Ligaturzeichen (wie `ﬁ`) korrekt verarbeitet werden.
- Die CSS-Eigenschaft {{cssxref("word-break")}} wurde implementiert.
- Die Eigenschaft {{cssxref("border-image")}} wurde an die aktuelle Spezifikation angepasst; die Präfixe ihrer Eigenschaften wurden entfernt. ([Bug 713643](https://bugzil.la/713643))
- Die in Firefox 14 entfernte {{cssxref("transform")}}-Funktion `skew()` wurde aus Gründen der Kompatibilität mit bestehenden Websites wiederhergestellt. Autoren wird jedoch empfohlen, stattdessen die Funktionen `skewX()` und `skewY()` zu verwenden.
- Der Wert `plaintext` der CSS-Eigenschaft {{cssxref("unicode-bidi")}} gilt jetzt auch für Inline-Elemente. ([Firefox-Bug 746987](https://bugzil.la/746987))

### DOM

- Die Methoden [`KeyboardEvent.getModifierState()`](/de/docs/Web/API/KeyboardEvent/getModifierState) und [`MouseEvent.getModifierState()`](/de/docs/Web/API/MouseEvent/getModifierState) aus DOM Events Level 3 wurden implementiert. Mit ihnen lässt sich der Zustand von Modifikatortasten wie `Ctrl` oder `Shift` abfragen (Bugs [630811](https://bugzil.la/630811) und [731878](https://bugzil.la/731878)). Das Verhalten entspricht jedoch dem aktuellen D3E-Entwurf. Daher unterscheiden sich einige Namen von Modifikatortasten von denen in IE ([Firefox-Bug 769190](https://bugzil.la/769190)).
- Für Mausereignisse wurde die Abfrage des Zustands der Maustasten über das Attribut [`MouseEvent.buttons`](/de/docs/Web/API/MouseEvent) implementiert.
- Für Tastaturereignisse wurde die Abfrage der Tastenposition (Standardposition, linke oder rechte Modifikatortaste oder Ziffernblock) über das Attribut [KeyboardEvent.location](/de/docs/Web/API/KeyboardEvent/location) implementiert ([Firefox-Bug 166240](https://bugzil.la/166240)).
- Der Wert von KeyboardEvent.keycode wird nach verbesserten Regeln berechnet, die unter Windows, Linux und Mac nahezu identisch sind. Die Werte stehen jetzt auch für einige Tastaturlayouts unter Linux und Mac zur Verfügung, die nicht ASCII-fähig sind, etwa arabische, kyrillische und thailändische Layouts. Weitere Informationen finden Sie im [Dokument über virtuelle Tastencodes](/de/docs/Web/API/UI_Events/Keyboard_event_key_values).
- Die Methode [`range.detach()`](/de/docs/Web/API/Range/detach) wurde in eine wirkungslose Operation umgewandelt und wird voraussichtlich künftig entfernt.
- Die Methode `HTMLVideoElement.mozHasAudio()` wurde implementiert. Sie gibt an, ob einem bestimmten Videoelement eine Audiospur zugeordnet ist. ([Bug 480376](https://bugzil.la/480376))
- Die `Performance`-API verfügt über die neue Methode [`now()`](/de/docs/Web/API/Performance/now), die hochauflösende Zeitmessungen vom Typ `DOMHighResTimeStamp` unterstützt. ([Bug 539095](https://bugzil.la/539095))
- Die [WebSMS-API](https://web.archive.org/web/20210620092659/https://developer.mozilla.org/de/docs/Archive/B2G_OS/API/Mobile_Messaging_API) wurde aktualisiert und unterstützt jetzt ein `read`-Attribut, das angibt, ob eine SMS-Nachricht gelesen wurde oder ungelesen ist.
- Die [FileHandle-API](https://wiki.mozilla.org/WebAPI/FileHandleAPI) wurde implementiert.
- Der Konstruktor [`Blob`](/de/docs/Web/API/Blob) akzeptiert für den Parameter `blobParts` jetzt neben `ArrayBuffer` auch `ArrayBufferView`. ([Bug 752402](https://bugzil.la/752402))
- Das im [Ambient Light Events Working Draft](https://w3c.github.io/ambient-light/) spezifizierte `DeviceLightEvent` wurde implementiert.
- Die [Proximity Events](https://w3c.github.io/proximity/) `DeviceProximityEvent` und `UserProximityEvent` wurden implementiert.
- Die Eigenschaft `lastModifiedDate` von [`File`](/de/docs/Web/API/File) wurde implementiert. ([Firefox-Bug 673586](https://bugzil.la/673586))

### JavaScript

- Die Unterstützung für die Schnittstelle [`DataView`](/de/docs/Web/JavaScript/Reference/Global_Objects/DataView) aus der Typed-Arrays-Spezifikation wurde hinzugefügt. Sie ermöglicht den Zugriff auf die in einem [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) enthaltenen Daten auf niedriger Ebene.
- Die Unterstützung für neue integrierte Funktionen aus ECMAScript 2015 wurde hinzugefügt: [`Number.isNaN()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN), [`Number.toInteger()`](https://web.archive.org/web/20200204124547/https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toInteger), [`Number.isInteger()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger) und [`Number.isFinite()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite). ([Bug 749818](https://bugzil.la/749818), [Bug 761495](https://bugzil.la/761495), [Bug 761480](https://bugzil.la/749818))
- Die Unterstützung für [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) aus ECMAScript 2015 wurde hinzugefügt. ([Bug 757676](https://bugzil.la/757676))
- Die Unterstützung für [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) aus ECMAScript 2015 wurde hinzugefügt. ([Bug 574132](https://bugzil.la/574132))

### WebGL

- Die Unterstützung für die Erweiterung [`WEBGL_compressed_texture_s3tc`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc) wurde hinzugefügt. Komprimierte Texturen verringern den Speicherbedarf einer Textur auf der GPU. Dadurch können Texturen mit höherer Auflösung oder mehr Texturen mit derselben Auflösung verwendet werden.

### MathML

- Mathematische Operatoren können jetzt herunterladbare Schriftarten verwenden, die mit {{cssxref("@font-face")}} angegeben werden. Dadurch funktioniert das [Add-on MathML-fonts](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/) auch mit dehnbaren Operatoren.
- Das Attribut `selection` von {{MathMLElement("maction")}} wird jetzt nur noch beim actiontype `toggle` berücksichtigt.
- Die [veraltete Namedspace-Bindung](https://www.w3.org/TR/MathML3/chapter3.html#id.3.3.4.2.1) wurde entfernt ([Firefox-Bug 673759](https://bugzil.la/673759)).
- Die unterstützte Syntax für [Length](/de/docs/Web/MathML/Reference/Values)- und {{MathMLElement("mpadded")}}-Werte wurde stärker an die MathML3-Spezifikation angeglichen.
- Dem Operatorverzeichnis wurden neue spiegelbare MathML-Operatoren für die arabische Mathematik hinzugefügt ([Firefox-Bug 757125](https://bugzil.la/757125)).

### SVG

- Die Unterstützung für das {{SVGElement("view")}}-Element wurde hinzugefügt ([Firefox-Bug 512525](https://bugzil.la/512525)).

### Netzwerk

- Die Unterstützung für das Protokoll SPDY v3 wurde hinzugefügt. Sie ist standardmäßig deaktiviert und kann aktiviert werden, indem die Einstellung `network.http.spdy.enabled.v3` auf true gesetzt wird. ([Bug 737470](https://bugzil.la/737470))

## Änderungen für Add-on- und Mozilla-Entwickler

### Änderungen an Schnittstellen

- `nsIDOMWindowUtils`
  - : `aModifiers` von `sendMouseEvent()`, `sendTouchEvent()`, `sendMouseEventToWindow()`, `sendMouseScrollEvent()` und `sendKeyEvent()` unterstützt alle Modifikatortasten, die auch [`KeyboardEvent.getModifierState()`](/de/docs/Web/API/KeyboardEvent/getModifierState) unterstützt. Verwenden Sie die Werte `MODIFIER_*`. Außerdem wurde der Typ des fünften Parameters von `sendKeyEvent()` von `boolean` in `unsigned long` geändert. Aus Gründen der Abwärtskompatibilität bleibt das Verhalten unverändert, wenn der Aufrufer `true` oder `false` übergibt. Durch diese Änderung können Aufrufer die Position der Taste angeben.
- `nsIBrowserHistory`
  - : Die Methode `hidePage()` wurde nie implementiert und in dieser Version vollständig entfernt. Auch die Methode `addPageWithDetails()` wurde im Zuge der laufenden Umstellung aller „Places APIs“ auf asynchrone Verarbeitung entfernt. Verwenden Sie stattdessen `mozIAsyncHistory.updatePlaces()`. Außerdem wurde das Attribut `count` entfernt: Es gab seit einiger Zeit keine tatsächliche Anzahl mehr zurück, sondern zeigte lediglich an, ob Einträge vorhanden waren. Stattdessen können Sie `nsINavHistoryService.hasHistoryEntries` verwenden.
- `nsIDOMUtils`
  - : Die Methode `nsIDOMUtils.parseStyleSheet()` wurde hinzugefügt. Sie ermöglicht das Parsen und erneute Parsen von Cascading Style Sheets.
- `nsIINIParserWriter`
  - : Die Methode `nsIINIParserWriter.writeFile()` akzeptiert jetzt eine Eigenschaft `flags`. Derzeit bietet sie nur eine Option: Sie können festlegen, dass die Datei für eine bessere Kompatibilität mit Windows und bestimmten Installationsprogrammen im UTF-16- statt im UTF-8-Format geschrieben wird.

#### Neue Schnittstellen

- `nsISpeculativeConnect`
  - : Bietet die Möglichkeit, der Netzwerkschicht mitzuteilen, dass Sie voraussichtlich in naher Zukunft eine Verbindung zu einem bestimmten URI anfordern werden. So kann die Netzwerkschicht frühzeitig mit dem Öffnen einer neuen Netzwerkverbindung beginnen, was mitunter viel Zeit in Anspruch nimmt.

#### Entfernte Schnittstellen

Die folgenden Schnittstellen wurden entfernt:

- `nsIGlobalHistory`
