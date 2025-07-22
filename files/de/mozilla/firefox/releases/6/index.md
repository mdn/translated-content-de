---
title: Firefox 6 für Entwickler
short-title: Firefox 6
slug: Mozilla/Firefox/Releases/6
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

Firefox 6, basierend auf Gecko 6.0, wurde am 16. August 2011 veröffentlicht. Dieser Artikel bietet Links zu Informationen über die Änderungen, die Entwickler in dieser Version betreffen.

## Änderungen für Webentwickler

### HTML

- Das HTML5-Element {{ HTMLElement("progress") }}, mit dem Sie eine Fortschrittsleiste erstellen können, wird jetzt unterstützt.
- Das Parsen des HTML5-Elements {{ HTMLElement("track") }}, das Textspuren für Medienelemente spezifiziert, wird jetzt unterstützt. Dieses Element sollte jetzt im DOM erscheinen, obwohl sein Verhalten noch nicht implementiert ist.
- Das {{ HTMLElement("iframe") }}-Element wird nun korrekt von seinem Container abgeschnitten, wenn die Ecken des Containers mit der Eigenschaft {{ cssxref("border-radius") }} abgerundet wurden.
- Textfeld-{{ HTMLElement("input") }}e in {{ HTMLElement("form") }}-Elementen unterstützen nicht mehr die XUL-Eigenschaft [`maxwidth`](https://web.archive.org/web/20190117013205/https://developer.mozilla.org/de/docs/Mozilla/Tech/XUL/Property/maxWidth); dies war nie beabsichtigt und verstößt gegen die HTML-Spezifikation. Sie sollten stattdessen das Attribut [`size`](/de/docs/Web/HTML/Reference/Elements/input#size) verwenden, um die maximale Breite von Eingabefeldern festzulegen.
- Die Eigenschaften `fillStyle` und `strokeStyle` des {{ HTMLElement("canvas") }}-[`CanvasRenderingContext2d`](/de/docs/Web/API/CanvasRenderingContext2D) ignorierten früher unnötige Angaben nach einer gültigen Farbangabe; jetzt wird dies korrekt als Fehler behandelt. Zum Beispiel wurde "red blue" als Farbe früher als "red" interpretiert, obwohl es ignoriert werden sollte.
- Die Breite und Höhe von {{ HTMLElement("canvas") }}-Elementen kann jetzt korrekt auf 0px eingestellt werden; zuvor wurden diese willkürlich auf 300px gesetzt, wenn Sie dies versucht haben.
- Unterstützung für die HTML [benutzerdefinierten Datenattribute](/de/docs/Web/HTML/Reference/Global_attributes/data-*) (`data-*`) wurde hinzugefügt. Die DOM-Eigenschaft [`dataset`](/de/docs/Web/API/HTMLElement/dataset) ermöglicht den Zugriff darauf.
- Wenn ein {{ HTMLElement("textarea") }}-Element den Fokus erhält, befindet sich der Texteinschubspunkt jetzt standardmäßig am Anfang des Textes anstatt am Ende. Dadurch wird das Verhalten von Firefox mit anderen Browsern konsistent.

### CSS

- {{ cssxref("text-decoration-color", "-moz-text-decoration-color") }}
  - : Diese neue Eigenschaft ermöglicht es Ihnen, die Farbe von Textdekorationen wie Unterstreichungen, Überstrichen und Durchstreichungen festzulegen.
- {{ cssxref("text-decoration-line", "-moz-text-decoration-line") }}
  - : Diese neue Eigenschaft ermöglicht es Ihnen, die Art der Textdekorationen festzulegen, die einem Element hinzugefügt werden.
- {{ cssxref("text-decoration-style", "-moz-text-decoration-style") }}
  - : Diese neue Eigenschaft ermöglicht es Ihnen, den Stil von Textdekorationen wie Unterstreichungen, Überstrichen und Durchstreichungen festzulegen. Stile umfassen einfache Striche, doppelte Striche, wellige Linien, gepunktete Linien und dergleichen.
- {{ cssxref("hyphens", "-moz-hyphens") }}
  - : Diese neue Eigenschaft ermöglicht es Ihnen, zu steuern, wie die Trennung von Wörtern beim Zeilenumbruch gehandhabt wird.
- {{ cssxref("-moz-orient", "-moz-orient") }}
  - : Eine neue (derzeit Mozilla-spezifische) Eigenschaft, die es Ihnen ermöglicht, die vertikale oder horizontale Ausrichtung bestimmter Elemente (insbesondere {{ HTMLElement("progress") }}) zu steuern.
- {{ cssxref("::-moz-progress-bar") }}
  - : Ein Mozilla-spezifisches Pseudoelement, das es Ihnen ermöglicht, den Bereich eines {{ HTMLElement("progress") }}-Elements zu gestalten, der den abgeschlossenen Teil einer Aufgabe darstellt.

#### Andere Änderungen

- Die `@-moz-document` Eigenschaft hat nun eine neue `regexp()` Funktion, die es Ihnen ermöglicht, die URL des Dokuments mit einem [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) abzugleichen.
- Die `azimuth` CSS-Eigenschaft wird nicht mehr unterstützt, da wir den geringen Code, den wir für die `aural` Medienspezifikationsgruppe hatten, entfernt haben. Sie war nie signifikant implementiert, daher machte es mehr Sinn, die veraltete Implementierung vorläufig zu entfernen, anstatt sie zu reparieren.
- In der Vergangenheit wurde die {{ cssxref(":hover") }} Pseudoklasse nicht auf Klassenselektoren im Quirks-Modus angewendet; zum Beispiel funktionierte `.some-class:hover` nicht. Dieses Problem wurde behoben.
- Die {{ cssxref(":indeterminate") }} Pseudoklasse kann auf {{ HTMLElement("progress") }} Elemente angewendet werden. Dies ist nicht standardisiert, aber wir hoffen, dass es von anderen Browsern übernommen wird, da es nützlich sein wird.
- Der `-moz-win-exclude-glass` Wert wurde zur `-moz-appearance` CSS-Eigenschaft hinzugefügt, um opake Regionen in Aero-Glass-Glasur-Effekten auf Windows-Systemen auszuschließen.
- [Firefox Bug 658949](https://bugzil.la/658949) änderte die Behandlung des Hash (#) Symbols in Data-URLs, was CSS-Stile beeinflussen kann, die dieses Symbol enthalten, wenn es nicht entwertet ist.

### DOM

- [Verwenden von Media-Queries aus dem Code](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
  - : Sie können jetzt das Ergebnis einer Media-Query-Zeichenfolge programmgesteuert mit der Methode [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) und der Schnittstelle [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) testen.
- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
  - : Firefox 6 fügt Unterstützung für W3C-Standard-Touch-Ereignisse hinzu; diese machen es einfach, eine oder mehrere Berührungen gleichzeitig auf berührungsempfindlichen Oberflächen wie Touchscreens und Trackpads zu interpretieren.
- [Server-gesendete Ereignisse](/de/docs/Web/API/Server-sent_events)
  - : Server-gesendete Ereignisse ermöglichen es einer Webanwendung, einen Server zu bitten, Ereignisse zu senden, ähnlich wie ein lokal erstelltes DOM-Ereignis.

<!---->

- `navigator.securityPolicy`, das lange Zeit einen leeren String zurückgegeben hat, wurde vollständig entfernt.
- `BlobBuilder` ist nun implementiert, obwohl es vorerst mit einem Präfix versehen ist (Sie müssen also `MozBlobBuilder` verwenden).
- Das `Document.height` und `Document.width` wurden entfernt. [Firefox Bug 585877](https://bugzil.la/585877)
- Die Eigenschaften `entities` und `notations` des [`DocumentType`](/de/docs/Web/API/DocumentType)-Objekts, die nie implementiert und immer `null` zurückgegeben wurden, wurden entfernt, da sie sowieso aus der Spezifikation entfernt wurden.
- Die Schnittstelle `DOMConfiguration` und die Eigenschaft `document.domConfig`, die sie verwendete, wurden beide entfernt; sie wurden nie unterstützt und sind seitdem aus der DOM-Spezifikation entfernt worden.
- Das `hashchange`-Ereignis enthält nun korrekt [die `newURL`- und `oldURL`-Felder](/de/docs/Web/API/Window/hashchange_event).
- Die `abort()`-Methode der [`FileReader`](/de/docs/Web/API/FileReader)-Schnittstelle wirft jetzt eine Ausnahme, wenn sie verwendet wird, wenn kein Dateilesen im Gange ist.
- Die Methode [`window.postMessage()`](/de/docs/Web/API/Window/postMessage) verwendet nun [den strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), um Ihnen das Übergeben von JavaScript-Objekten anstelle von nur Strings von einem Fenster zum anderen zu ermöglichen.
- Die API [`window.history`](/de/docs/Web/API/Window/history) verwendet nun [den strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), um die Objekte zu serialisieren, die Sie an die Methoden `pushState()` und `replaceState()` übergeben; dies ermöglicht die Verwendung komplexerer Objekte (einschließlich solcher, die zyklische Referenzgraphen enthalten).
- Sie können jetzt [erkennen, wann ein Druckvorgang initiiert und abgeschlossen wurde](/de/docs/Web/CSS/CSS_media_queries/Printing#detecting_print_requests), indem Sie auf die neuen `beforeprint` und `afterprint` Ereignisse lauschen.
- Die Eigenschaft `document.strictErrorChecking` wurde entfernt, da sie nie implementiert wurde und aus der DOM-Spezifikation entfernt wurde.
- Die standardisierte [`event.defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented) Eigenschaft wird nun unterstützt; Sie sollten diese anstelle der nicht standardisierten `getPreventDefault()` Methode verwenden, um festzustellen, ob [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf das Ereignis angewendet wurde.
- Die Eigenschaft [`window.top`](/de/docs/Web/API/Window/top) ist nun ordnungsgemäß schreibgeschützt.
- DOM-Views, die wir nie dokumentiert hatten, wurden entfernt. Dies war ein Implementierungsdetail, das unnötigerweise die Dinge verkomplizierte, daher haben wir es entfernt. Wenn Ihnen diese Änderung auffällt, machen Sie wahrscheinlich etwas falsch.
- Der `useCapture` Parameter der `addEventListener()` Funktion für `EventTarget` ist jetzt optional, wie es in WebKit der Fall ist (und gemäß der neuesten Version der Spezifikation).
- Die Eigenschaft `mozResponseArrayBuffer` des [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekts wurde durch die Eigenschaften `responseType` und `response` ersetzt.
- Die Eigenschaft [`dataset`](/de/docs/Web/API/HTMLElement/dataset) wurde zur Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement) hinzugefügt, die den Zugriff auf die [`data-*` globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes/data-*) eines Elements ermöglicht.
- Die Schnittstelle [`CustomEvent`](/de/docs/Web/API/CustomEvent) wurde implementiert. (siehe [Firefox Bug 427537](https://bugzil.la/427537))
- Aus Sicherheitsgründen erben `data:`- und `javascript:`-URLs nicht mehr den Sicherheitskontext der aktuellen Seite, wenn der Benutzer sie in die Adressleiste eingibt; stattdessen wird ein neuer, leerer Sicherheitskontext erstellt. Dies bedeutet, dass Skripte, die durch die Eingabe von `javascript:`-URLs in die Adressleiste geladen werden, keinen Zugriff mehr auf DOM-Methoden und dergleichen haben. Diese URLs funktionieren jedoch weiterhin wie gewohnt, wenn sie durch Skripte verwendet werden.

### JavaScript

- In der Vergangenheit war es möglich, den `new` Operator auf mehrere integrierte Funktionen anzuwenden (`eval()`, `parseInt()`, `Date.parse()`, …), die dies laut Spezifikation nicht erlauben sollten. Dieses Verhalten wird nicht mehr unterstützt. Die Verwendung des `new` Operands auf diese Weise wurde nie offiziell unterstützt und war nicht weit verbreitet, daher ist es unwahrscheinlich, dass diese Änderung Sie betrifft.
- ECMAScript 2015 [WeakMaps](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) wurden als Prototyp-Implementierung hinzugefügt.

### SVG

- Das Attribut {{ SVGAttr("pathLength") }} wird nun unterstützt.
- SVG-Muster, -Verläufe und -Filter funktionieren nun korrekt, wenn sie aus [`data:` URLs](/de/docs/Web/URI/Reference/Schemes/data) geladen werden.

### MathML

- Die Implementierung von {{ MathMLElement("mstyle") }} wurde korrigiert.

### Barrierefreiheit (ARIA)

- Ein Zustandsänderungsereignis wird nun korrekt gesendet, wenn der Wert von `aria-busy` sich ändert.
- Ein Attributänderungsereignis wird nun korrekt gesendet, wenn `aria-sort` auftritt.

### Netzwerk

- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : WebSockets wurde in Firefox 6 auf Protokollversion 07 aktualisiert. Zusätzlich wurde das globale `WebSocket` Objekt in `MozWebSocket` umbenannt, um eine inkorrekte Verwendung zur Erkennung der Verfügbarkeit von nicht-prefixierten WebSockets zu verhindern.

<!---->

- Das Parsen des `Content-Disposition` Headers wurde korrigiert, um Backslash-escaped ASCII-Zeichen korrekt als das Zeichen selbst zu interpretieren. Zuvor wurde es fälschlicherweise durch ein Unterstrich ("\_") ersetzt.
- Der Wert des Pfadfelds in `Set-Cookie` Headers wird nun korrekt interpretiert, wenn Anführungszeichen verwendet werden; zuvor wurden sie als Teil des Pfads betrachtet und nicht als Trennzeichen. **Diese Änderung kann die Kompatibilität mit einigen Websites beeinträchtigen**, daher sollten Autoren ihren Code überprüfen.
- Der [`Upgrade`](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.42) Anfrage-Header wird nun unterstützt; Sie können ein Upgrade eines HTTP-Kanals auf ein anderes Protokoll anfordern, indem Sie `nsIHttpChannelInternal.HTTPUpgrade()` aufrufen.

### Andere Änderungen

- Die Unterstützung für Mikrosummaries wurde entfernt; diese wurden nie weit verbreitet genutzt, waren nicht sehr bemerkbar und die fortlaufende Unterstützung erschwerte Verbesserungen der Places-Architektur (Lesezeichen und Verlauf).
- WebGL unterstützt jetzt die [`OES_texture_float`](https://registry.khronos.org/OpenGL/extensions/OES/OES_texture_float.txt) Erweiterung.
- Das neue _Scratchpad_ Werkzeug bietet einen praktischen Ort, um mit JavaScript-Code zu experimentieren.
- Die Methode `console.trace()` wurde zur [Console API](/de/docs/Web/API/Console_API) ([Firefox Bug 585956](https://bugzil.la/585956)) hinzugefügt.

## Änderungen für Mozilla- und Add-on-Entwickler

Für einen Überblick über die Änderungen, die Sie eventuell vornehmen müssen, um Ihr Add-on mit Firefox 6 kompatibel zu machen, siehe [Aktualisieren von Add-ons für Firefox 6](/de/docs/Mozilla/Firefox/Releases/6/Updating_add-ons).

> [!NOTE]
> Firefox 6 erfordert, dass binäre Komponenten neu kompiliert werden, wie es bei allen Hauptversionen von Firefox der Fall ist. Details hierzu finden Sie unter [Binary Interfaces](https://web.archive.org/web/20210119071646/https://developer.mozilla.org/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces).

### JavaScript-Code-Module

#### FileUtils.jsm

- Die Methode `openSafeFileOutputStream()` öffnet nun Dateien mit dem `DEFER_OPEN` [Verhaltensflag](https://web.archive.org/web/20210506072901/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIFileOutputStream#behavior_flag_constants) anstatt zu versuchen, sie sofort zu öffnen.

#### XPCOMUtils.jsm

- Die neue Methode `importRelative()` ermöglicht das Laden eines JavaScript-Code-Moduls von einem Pfad relativ zum Pfad eines anderen JavaScript-Code-Moduls. Dies erleichtert es, Module zu erstellen, die voneinander abhängen.

### XPCOM

- [`nsCOMArray<T>`](https://web.archive.org/web/20210413085248/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Guide/Arrays#nsCOMArray.3cT.3e) hat nun eine Methode [`RemoveObjectsAt()`](https://web.archive.org/web/20210413085248/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Guide/Arrays#deleting_objects) zum Entfernen mehrerer Objekte aus dem Array auf einmal.

### Verwendung des DOM aus Chrome

- [Verwendung der DOM File API in Chrome-Code](https://web.archive.org/web/20210618235235/https://developer.mozilla.org/de/docs/Extensions/Using_the_DOM_File_API_in_chrome_code)
  - : Obwohl Sie die DOM File API schon immer aus Chrome-Code verwenden konnten, unterstützt der `File`-Konstruktor jetzt die Angabe eines lokalen Pfadnamens als String, wenn er aus Chrome verwendet wird. Darüber hinaus können Sie auch die Datei, auf die zugegriffen werden soll, mit der DOM File API unter Verwendung eines `nsIFile`-Objekts angeben.

### Schnittstellenänderungen

- `nsINavHistoryQueryOptions` unterstützt nun das Sortieren nach Häufigkeit in aufsteigender Reihenfolge mit den neuen Konstanten `SORT_BY_FREQUENCY_ASCENDING` und `SORT_BY_FREQUENCY_DESCENDING`.
- `nsIFilePicker` hat ein neues Attribut `nsIFilePicker.addToRecentDocs`, das es Ihnen ermöglicht, anzugeben, dass die ausgewählte Datei zur "zuletzt verwendeten Dokumenten"-Liste des Benutzers hinzugefügt werden sollte, falls eine solche existiert. Dieses Attribut hat keinen Effekt, wenn Sie im privaten Browsing-Modus sind.
- `nsINavBookmarkObserver`-Methoden mit Item-ID-Parametern erfordern nun auch eine GUID.
- `nsIPrefBranch.clearUserPref()` wirft keine Ausnahme mehr, wenn die angegebene Voreinstellung nicht existiert oder keinen benutzerdefinierten Wert hat. Stattdessen tut es nichts.
- Die Schnittstelle `nsIMemoryReporter` bietet jetzt Unterstützung für die Angabe der Art des beschriebenen Speichers (gemappt, Heap oder anderes).
- Das Attribut `stateData` von `nsISHEntry` gibt jetzt ein `nsIStructuredCloneContainer` zurück.
- `nsIURI` hat ein neues Attribut `nsIURI.ref`, das den Referenzteil (den Teil nach dem "#") der URI zurückgibt. Es hat auch neue Methoden `nsIURI.cloneIgnoringRef()`, die die `nsIURI` ohne das ref-Mitglied klonen, und `nsIURI.equalsExceptRef()`, die mit einem anderen `nsIURI` ohne Berücksichtigung des ref-Mitglieds vergleicht.

#### Neue Schnittstellen

- `mozIAsyncFavicons`
  - : Ein neuer Dienst, der Ihnen ermöglicht, asynchron auf den Favicon-Dienst zuzugreifen.
- `nsIEventSource`
  - : _Details folgen._
- `nsIGSettingsCollection`
  - : _Details folgen._
- `nsIGSettingsService`
  - : _Details folgen._
- `nsIHttpUpgradeListener`
  - : Die Rückrufschnittstelle zur Behandlung von HTTP-Upgrade-Anfragen über die Methode `nsIHttpChannelInternal.HTTPUpgrade()`.
- `nsIStructuredCloneContainer`
  - : Ein Container für Objekte, die unter Verwendung des [strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) serialisiert wurden.
- `nsITelemetry`
  - : Implementiert Telemetrieunterstützung, um die Aufzeichnung von Telemetriedaten zu ermöglichen, die zur Darstellung von Histogrammen zur Leistungsüberwachung verwendet werden können. Siehe [Firefox Bug 649502](https://bugzil.la/649502) und [Firefox Bug 585196](https://bugzil.la/585196).
- `nsITimedChannel`
  - : Siehe [Firefox Bug 576006](https://bugzil.la/576006).
- `nsIWebSocketListener`
  - : Siehe [Firefox Bug 640003](https://bugzil.la/640003).
- `nsIWebSocketProtocol`
  - : Siehe [Firefox Bug 640003](https://bugzil.la/640003).

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsIDOMDocumentEvent` (siehe [Firefox Bug 655517](https://bugzil.la/655517))
- `nsIDOMDocumentTraversal` (siehe [Firefox Bug 655514](https://bugzil.la/655514))
- `nsIDOMDocumentRange` (siehe [Firefox Bug 655513](https://bugzil.la/655513))
- `IWeaveCrypto` (siehe [Firefox Bug 651596](https://bugzil.la/651596))
- `nsIDOM3DocumentEvent` (siehe [Firefox Bug 481863](https://bugzil.la/481863))
- `nsIDOMAbstractView`
- `nsILiveTitleNotificationSubject`
- `nsIPlugin` (siehe [Firefox Bug 637253](https://bugzil.la/637253))
- `nsIPluginInstance` (siehe [Firefox Bug 637253](https://bugzil.la/637253))
- `nsIHTMLEditRules` (siehe [Firefox Bug 633750](https://bugzil.la/633750))
- `nsIXSLTProcessorObsolete` (siehe [Firefox Bug 649534](https://bugzil.la/649534))

### Andere Änderungen

- [Verwendung von Voreinstellungen aus Anwendungscode](https://web.archive.org/web/20210419233418/https://developer.mozilla.org/de/docs/Mozilla/Preferences/Using_preferences_from_application_code)
  - : Eine neue statische API ist verfügbar, um leicht auf Voreinstellungen zuzugreifen; diese ist nur für Anwendungscode verfügbar und kann nicht von Add-ons verwendet werden.
