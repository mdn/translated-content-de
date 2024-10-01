---
title: Firefox 6 für Entwickler
slug: Mozilla/Firefox/Releases/6
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{FirefoxSidebar}}

Firefox 6, basierend auf Gecko 6.0, wurde am 16. August 2011 veröffentlicht. Dieser Artikel bietet Links zu Informationen über die Änderungen, die Entwickler in dieser Version betreffen.

## Änderungen für Webentwickler

### HTML

- Das HTML5-Element {{ HTMLElement("progress") }}, mit dem Sie eine Fortschrittsleiste erstellen können, wird jetzt unterstützt.
- Das Parsen des HTML5-Elements {{ HTMLElement("track") }}, das Textspuren für Medien-Elemente spezifiziert, wird jetzt unterstützt. Dieses Element sollte nun im DOM erscheinen, obwohl sein Verhalten noch nicht implementiert ist.
- Das {{ HTMLElement("iframe") }}-Element wird nun korrekt von seinem Container abgeschnitten, wenn die Ecken des Containers mit der Eigenschaft {{ cssxref("border-radius") }} abgerundet wurden.
- Text {{ HTMLElement("input") }} Felder von {{ HTMLElement("form") }}-Elementen unterstützen nicht mehr die XUL [`maxwidth`](/de/docs/XUL/Property/maxwidth) Eigenschaft; dies war nie beabsichtigt und verstößt gegen die HTML-Spezifikation. Sie sollten stattdessen das Attribut [`size`](/de/docs/Web/HTML/Element/input#size) verwenden, um die maximale Breite von Eingabefeldern festzulegen.
- Die `fillStyle` und `strokeStyle` Eigenschaften des {{ HTMLElement("canvas") }} [`CanvasRenderingContext2d`](/de/docs/Web/API/CanvasRenderingContext2d) ignorierten zuvor Müll, der nach einer gültigen Farbdefinition enthalten war; jetzt wird dies korrekt als Fehler behandelt. Zum Beispiel wurde "red blue" als Farbe früher als "red" behandelt, obwohl es ignoriert werden sollte.
- Die Breite und Höhe von {{ HTMLElement("canvas") }}-Elementen kann nun korrekt auf 0px gesetzt werden; zuvor wurden diese willkürlich auf 300px gesetzt, wenn Sie versucht haben, dies zu tun.
- Unterstützung für die HTML [benutzerdefinierten Datenattribute](/de/docs/Web/HTML/Global_attributes#data-) (`data-*`) wurde hinzugefügt. Die DOM [`element.dataset`](/de/docs/Web/API/Element/dataset) Eigenschaft ermöglicht den Zugriff darauf.
- Wenn ein {{ HTMLElement("textarea") }}-Element den Fokus erhält, wird der Texteinfügepunkt jetzt standardmäßig am Anfang des Textes platziert, anstatt am Ende. Dies macht das Verhalten von Firefox mit anderen Browsern konsistent.

### CSS

- {{ cssxref("text-decoration-color", "-moz-text-decoration-color") }}
  - : Diese neue Eigenschaft ermöglicht Ihnen, die Farbe der Textdekorationen wie Unterstreichungen, Überstreichen und Durchstreichen festzulegen.
- {{ cssxref("text-decoration-line", "-moz-text-decoration-line") }}
  - : Diese neue Eigenschaft erlaubt Ihnen, die Art der Textdekorationen festzulegen, die einem Element hinzugefügt werden.
- {{ cssxref("text-decoration-style", "-moz-text-decoration-style") }}
  - : Diese neue Eigenschaft erlaubt Ihnen, den Stil der Textdekorationen wie Unterstreichungen, Überstreichen und Durchstreichen festzulegen. Stile umfassen Einfachstriche, Doppelstriche, wellige Linien, gepunktete Linien und so weiter.
- {{ cssxref("hyphens", "-moz-hyphens") }}
  - : Diese neue Eigenschaft erlaubt Ihnen zu steuern, wie die Silbentrennung von Wörtern beim Zeilenumbruch gehandhabt wird.
- {{ cssxref("-moz-orient", "-moz-orient") }}
  - : Eine neue (derzeit Mozilla-spezifische) Eigenschaft, die es Ihnen ermöglicht, die vertikale oder horizontale Ausrichtung bestimmter Elemente (insbesondere {{ HTMLElement("progress") }}) zu steuern.
- {{ cssxref("::-moz-progress-bar") }}
  - : Ein Mozilla-spezifisches Pseudo-Element, das Ihnen erlaubt, den Bereich eines {{ HTMLElement("progress") }}-Elements zu gestalten, der den abgeschlossenen Teil einer Aufgabe darstellt.

#### Weitere Änderungen

- Die `@-moz-document`-Eigenschaft hat eine neue `regexp()`-Funktion, die es Ihnen ermöglicht, die URL des Dokuments mit einem [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) zu vergleichen.
- Die CSS-Eigenschaft {{ cssxref("azimuth") }} wird nicht mehr unterstützt, da wir den wenigen Code entfernt haben, den wir für die `aural` Mediengruppe hatten. Es war nie signifikant implementiert, daher ergab es mehr Sinn, die veraltete Implementierung vorerst zu entfernen, anstatt sie zu reparieren.
- In der Vergangenheit wurde die Pseudoklasse {{ cssxref(":hover") }} nicht auf Klassenselektoren angewendet, wenn der Browser im Kompatibilitätsmodus (`quirks mode`) war; zum Beispiel funktionierte `.someclass:hover` nicht. Diese Besonderheit wurde entfernt.
- Die Pseudoklasse {{ cssxref(":indeterminate") }} kann auf {{ HTMLElement("progress") }}-Elemente angewendet werden. Dies ist nicht standardisiert, aber wir hoffen, dass es von anderen Browsern übernommen wird, da es nützlich sein wird.
- Der `-moz-win-exclude-glass`-Wert wurde der `-moz-appearance` CSS-Eigenschaft hinzugefügt, um opake Regionen in Aero-Glas-Effekten auf Windows-Systemen auszuschließen.
- [Firefox bug 658949](https://bugzil.la/658949) hat die Behandlung des Hash (#) Symbols in Daten-URLs geändert, was CSS-Stylesheets, die ein solches Symbol enthalten, brechen kann, wenn es nicht ausgeblendet ist.

### DOM

- [Media Queries im Code verwenden](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
  - : Sie können nun das Ergebnis eines Media Query Strings programmatisch mit der Methode [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) und der Schnittstelle [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) testen.
- [Touch Events](/de/docs/Web/API/Touch_events)
  - : Firefox 6 unterstützt nun die W3C-Standard-Touch-Events; diese erleichtern das Interpretieren von einem oder mehreren Berührungen auf Touch-Oberflächen wie Touchscreens und Trackpads.
- [Server-gesendete Ereignisse](/de/docs/Web/API/Server-sent_events)
  - : Server-gesendete Ereignisse ermöglichen es einer Webanwendung, einen Server zu bitten, Ereignisse zu senden, genau wie lokal erstellte DOM-Ereignisse.

<!---->

- `navigator.securityPolicy`, das lange Zeit einen leeren String zurückgegeben hat, wurde komplett entfernt.
- `BlobBuilder` ist nun implementiert, ist jedoch vorerst noch mit einem Präfix (sodass Sie `MozBlobBuilder` verwenden müssen).
- `Document.height` und `Document.width` wurden entfernt. [Firefox bug 585877](https://bugzil.la/585877)
- Die `entities` und `notations` Eigenschaften des [`DocumentType`](/de/docs/Web/API/DocumentType)-Objekts, die niemals implementiert wurden und immer `null` zurückgaben, wurden entfernt, da sie ohnehin aus der Spezifikation entfernt wurden.
- Die `DOMConfiguration`-Schnittstelle und die `document.domConfig` Eigenschaft, die sie verwendete, wurden beide entfernt; sie wurden nie unterstützt und seitdem aus der DOM-Spezifikation entfernt.
- Das `hashchange`-Ereignis enthält jetzt korrekt die [Felder `newURL` und `oldURL`](/de/docs/Web/API/Window/hashchange_event).
- Die Methode `abort()` der [`FileReader`](/de/docs/Web/API/FileReader) Schnittstelle wirft nun eine Ausnahme, wenn sie verwendet wird, ohne dass ein Datei-Lesevorgang im Gang ist.
- Die Methode [`window.postMessage()`](/de/docs/Web/API/Window/postMessage) verwendet nun [den Structured-Clone-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), um JavaScript-Objekte anstelle von nur Zeichenketten von einem Fenster zu einem anderen zu übergeben.
- Die API [`window.history`](/de/docs/Web/API/Window/history) verwendet jetzt [den Structured-Clone-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), um die Objekte zu serialisieren, die Sie an die Methoden `pushState()` und `replaceState()` übergeben; dies ermöglicht es Ihnen, komplexere Objekte (einschließlich solcher, die zykliche Referenzgrafen enthalten) zu verwenden.
- Sie können nun [erkennen, wann ein Druckvorgang initiiert und abgeschlossen wurde](/de/docs/Web/CSS/CSS_media_queries/Printing#detecting_print_requests), indem Sie die neuen Ereignisse `beforeprint` und `afterprint` anhören.
- Die Eigenschaft `document.strictErrorChecking` wurde entfernt, da sie nie implementiert wurde und aus der DOM-Spezifikation entfernt wurde.
- Die standardmäßige [`event.defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented) Eigenschaft wird jetzt unterstützt; Sie sollten diese statt der nicht standardisierten Methode `getPreventDefault()` verwenden, um zu erkennen, ob [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) für das Ereignis aufgerufen wurde.
- Die Eigenschaft [`window.top`](/de/docs/Web/API/Window/top) ist jetzt korrekt schreibgeschützt.
- DOM-Views, die wir nie dokumentiert haben, wurden entfernt. Dies war ein bisschen Implementierungsdetail, das die Dinge unnötig verkomplizierte, also haben wir es entfernt. Wenn Sie diese Änderung bemerken, machen Sie wahrscheinlich etwas falsch.
- Die Funktion `addEventListener()` des `EventTarget` [`addEventListener()`](/de/docs/XPCOM_Interface_Reference/nsIDOMEventTarget)'s `useCapture`-Parameter ist jetzt optional, wie es in WebKit ist (und gemäß der neuesten Version der Spezifikation).
- Die Eigenschaft `mozResponseArrayBuffer` des [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekts wurde durch die Eigenschaften `responseType` und `response` ersetzt.
- Die Eigenschaft [`element.dataset`](/de/docs/Web/API/Element/dataset) wurde der Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement) hinzugefügt, um den Zugriff auf die [globalen `data-*` Attribute](/de/docs/Web/HTML/Global_attributes#data-) eines Elements zu ermöglichen.
- Die Schnittstelle [`CustomEvent`](/de/docs/Web/API/CustomEvent) wurde implementiert. (siehe [Firefox bug 427537](https://bugzil.la/427537))
- Aus Sicherheitsgründen erben `data:` und `javascript:` URLs nicht mehr den Sicherheitskontext der aktuellen Seite, wenn der Benutzer sie in die Adressleiste eingibt; stattdessen wird ein neuer, leerer Sicherheitskontext erstellt. Das bedeutet, dass Skripte, die durch die Eingabe von `javascript:` URLs in die Adressleiste geladen werden, zum Beispiel keinen Zugriff mehr auf DOM-Methoden und dergleichen haben. Diese URLs funktionieren jedoch weiterhin wie bisher, wenn sie durch ein Skript verwendet werden.

### JavaScript

- In der Vergangenheit war es möglich, den `new`-Operator bei mehreren eingebauten Funktionen (`eval()`, `parseInt()`, `Date.parse()`, …) zu verwenden, die dies laut Spezifikation nicht erlaubt hätten. Dieses Verhalten wird nicht mehr unterstützt. Den `new`-Operator auf diese Weise zu verwenden, wurde nie offiziell unterstützt und war nicht weit verbreitet, daher ist es unwahrscheinlich, dass diese Änderung Auswirkungen auf Sie hat.
- ECMAScript 2015 [WeakMaps](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) wurden als Prototyp-Implementierung hinzugefügt.

### SVG

- Das Attribut {{ SVGAttr("pathLength") }} wird jetzt unterstützt.
- SVG-Muster, -Verläufe und -Filter funktionieren nun korrekt, wenn sie von [`data:` URLs](/de/docs/Web/URI/Schemes/data) geladen werden.

### MathML

- Die Implementierung von {{ MathMLElement("mstyle") }} wurde korrigiert.

### Barrierefreiheit (ARIA)

- Ein Zustandsänderungsereignis wird nun korrekt gesendet, wenn sich der Wert von `aria-busy` ändert.
- Ein Attributänderungsereignis wird nun korrekt gesendet, wenn `aria-sort` auftritt.

### Netzwerk

- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : WebSockets wurde für Firefox 6 auf Protokollversion 07 aktualisiert. Darüber hinaus wurde das globale `WebSocket`-Objekt in `MozWebSocket` umbenannt, um zu verhindern, dass es fälschlicherweise zur Erkennung der Verfügbarkeit von unpräfixierten WebSockets verwendet wird.

<!---->

- Das Parsen des `Content-Disposition` Headers wurde behoben, um ASCII-Zeichen, die mit einem Backslash escaped sind, korrekt als genau dieses Zeichen zu interpretieren. Zuvor wurde dieses Zeichen fälschlicherweise durch einen Unterstrich ("\_") ersetzt.
- Der Wert des Pfadfeldes in `Set-Cookie`-Headers wird jetzt korrekt interpretiert, wenn Anführungszeichen verwendet werden; vorher wurden sie als Teil der Pfadzeichenkette und nicht als Trennzeichen behandelt. **Diese Änderung kann die Kompatibilität mit einigen Websites beeinflussen**, daher sollten Autoren ihren Code überprüfen.
- Der [`Upgrade`](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.42) Request-Header wird jetzt unterstützt; Sie können eine Aktualisierung eines HTTP-Channels auf ein anderes Protokoll anfordern, indem Sie `nsIHttpChannelInternal.HTTPUpgrade()` aufrufen.

### Weitere Änderungen

- Die Unterstützung für Microsummaries wurde entfernt; diese wurden nie weit verbreitet verwendet, waren nicht sehr leicht zu entdecken, und deren Unterstützung erschwerte Verbesserungen an der Places (Lesezeichen- und Verlaufsarchitektur).
- WebGL unterstützt jetzt die [`OES_texture_float`](https://registry.khronos.org/OpenGL/extensions/OES/OES_texture_float.txt) Erweiterung.
- Das neue Werkzeug _Scratchpad_ bietet einen praktischen Ort, um mit JavaScript-Code zu experimentieren.
- Die Methode `console.trace()` wurde der [Console API](/de/docs/Web/API/Console_API) hinzugefügt ([Firefox bug 585956](https://bugzil.la/585956)).

## Änderungen für Mozilla- und Add-on-Entwickler

Für einen Überblick über die Änderungen, die Sie möglicherweise vornehmen müssen, um Ihr Add-on mit Firefox 6 kompatibel zu machen, siehe [Add-ons aktualisieren für Firefox 6](/de/docs/Mozilla/Firefox/Updating_add-ons_for_Firefox_6).

> [!NOTE]
> Firefox 6 erfordert, dass Binärkomponenten neu kompiliert werden, wie es bei allen größeren Releases von Firefox der Fall ist. Siehe [Binary Interfaces](/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces) für Details.

### JavaScript-Code-Module

#### FileUtils.jsm

- Die Methode `openSafeFileOutputStream()` öffnet Dateien nun mit dem `DEFER_OPEN` [Verhalten-Flag](/de/docs/XPCOM_Interface_Reference/nsIFileOutputStream#behavior_flag_constants) anstelle des sofortigen Öffnens.

#### XPCOMUtils.jsm

- Die neue Methode `importRelative()` erlaubt Ihnen, ein JavaScript-Code-Modul von einem Pfad relativ zum Pfad eines anderen JavaScript-Code-Moduls zu laden. Dies erleichtert das Erstellen von Modulen, die voneinander abhängig sind.

### XPCOM

- [`nsCOMArray<T>`](/de/docs/XPCOM_array_guide#nsCOMArray.3cT.3e) besitzt jetzt eine [`RemoveObjectsAt()`](/de/docs/XPCOM_array_guide#deleting_objects) Methode, um mehrere Objekte gleichzeitig aus dem Array zu entfernen.

### Verwendung des DOM aus dem Chrome

- [Verwenden der DOM-File-API in Chrome-Code](/de/docs/Extensions/Using_the_DOM_File_API_in_chrome_code)
  - : Obwohl Sie die DOM-File-API schon immer aus dem Chrome-Code verwenden konnten, unterstützt der [`File`](/de/docs/Web/API/File)-Konstruktor jetzt die Angabe eines lokalen Pfadzeichenfolgestrings, wenn er aus dem Chrome verwendet wird. Darüber hinaus können Sie die Datei, auf die zugegriffen werden soll, unter Verwendung eines `nsIFile`-Objekts mit der DOM-File-API angeben.

### Schnittstellenänderungen

- `nsINavHistoryQueryOptions` unterstützt jetzt Sortierung in Häufigkeitsreihenfolge mit den neuen Konstanten `SORT_BY_FREQUENCY_ASCENDING` und `SORT_BY_FREQUENCY_DESCENDING`.
- `nsIFilePicker` hat ein neues `nsIFilePicker.addToRecentDocs` Attribut, mit dem Sie angeben können, dass die ausgewählte Datei zur "Zuletzt verwendete Dokumente"-Liste des Benutzers hinzugefügt werden sollte, wenn es eine gibt. Dieses Attribut hat keine Wirkung im privaten Browsing-Modus.
- `nsINavBookmarkObserver`-Methoden mit Item-ID-Parametern erfordern jetzt auch eine GUID.
- `nsIPrefBranch.clearUserPref()` wirft keine Ausnahme mehr, wenn die angegebene Präferenz nicht existiert oder keinen benutzerdefinierten Wert hat. Stattdessen tut es nichts.
- Die Schnittstelle `nsIMemoryReporter` bietet jetzt Unterstützung zur Angabe der Art des beschriebenen Speichers (gemappt, Heap oder anderes).
- Das Attribut `stateData` von `nsISHEntry` gibt jetzt ein `nsIStructuredCloneContainer` zurück.
- `nsIURI` hat ein neues `nsIURI.ref` Attribut, das den Referenzteil (den Teil nach dem "#") der URI zurückgibt. Es hat auch neue Methoden `nsIURI.cloneIgnoringRef()`, die die `nsIURI` ohne das `ref`-Mitglied klont, und `nsIURI.equalsExceptRef()`, die mit einer anderen `nsIURI` vergleicht, wobei das `ref`-Mitglied ignoriert wird.

#### Neue Schnittstellen

- `mozIAsyncFavicons`
  - : Ein neuer Service, der es ermöglicht, auf den Favicons-Service asynchron zuzugreifen.
- `nsIEventSource`
  - : _Details folgen._
- `nsIGSettingsCollection`
  - : _Details folgen._
- `nsIGSettingsService`
  - : _Details folgen._
- `nsIHttpUpgradeListener`
  - : Die Rückrufschnittstelle zur Verwaltung von HTTP-Upgrade-Anfragen über die Methode `nsIHttpChannelInternal.HTTPUpgrade()`.
- `nsIStructuredCloneContainer`
  - : Ein Container für Objekte, die mit dem [Structured-Clone-Algorithmus](/de/docs/HTML/Structured_clones) serialisiert wurden.
- `nsITelemetry`
  - : Implementiert Telemetrie-Unterstützung, um die Aufzeichnung von Telemetriedaten zu ermöglichen, die verwendet werden, um Histogramme für Leistungsverfolgungszwecke zu präsentieren. Siehe [Firefox bug 649502](https://bugzil.la/649502) und [Firefox bug 585196](https://bugzil.la/585196).
- `nsITimedChannel`
  - : Siehe [Firefox bug 576006](https://bugzil.la/576006).
- `nsIWebSocketListener`
  - : Siehe [Firefox bug 640003](https://bugzil.la/640003).
- `nsIWebSocketProtocol`
  - : Siehe [Firefox bug 640003](https://bugzil.la/640003).

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsIDOMDocumentEvent` (siehe [Firefox bug 655517](https://bugzil.la/655517))
- `nsIDOMDocumentTraversal` (siehe [Firefox bug 655514](https://bugzil.la/655514))
- `nsIDOMDocumentRange` (siehe [Firefox bug 655513](https://bugzil.la/655513))
- `IWeaveCrypto` (siehe [Firefox bug 651596](https://bugzil.la/651596))
- `nsIDOM3DocumentEvent` (siehe [Firefox bug 481863](https://bugzil.la/481863))
- `nsIDOMAbstractView`
- `nsILiveTitleNotificationSubject`
- `nsIPlugin` (siehe [Firefox bug 637253](https://bugzil.la/637253))
- `nsIPluginInstance` (siehe [Firefox bug 637253](https://bugzil.la/637253))
- `nsIHTMLEditRules` (siehe [Firefox bug 633750](https://bugzil.la/633750))
- `nsIXSLTProcessorObsolete` (siehe [Firefox bug 649534](https://bugzil.la/649534))

### Andere Änderungen

- [Verwenden von Präferenzen aus Anwendungscode](/de/docs/Mozilla/Preferences/Using_preferences_from_application_code)
  - : Eine neue statische API ist verfügbar, um Präferenzen leicht zugänglich zu machen; dies ist nur für Anwendungscode verfügbar und kann nicht von Add-ons verwendet werden.

## Siehe auch

{{Firefox_for_developers}}
