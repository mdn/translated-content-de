---
title: Firefox 6 für Entwickler
slug: Mozilla/Firefox/Releases/6
l10n:
  sourceCommit: acc6ec7d08ede0727a68cbc696e983c572940f62
---

{{FirefoxSidebar}}

Firefox 6, basierend auf Gecko 6.0, wurde am 16. August 2011 veröffentlicht. Dieser Artikel bietet Links zu Informationen über Änderungen, die in dieser Version Entwickler betreffen.

## Änderungen für Webentwickler

### HTML

- Das HTML5-Element {{ HTMLElement("progress") }}, mit dem Sie eine Fortschrittsanzeige erstellen können, wird jetzt unterstützt.
- Die Verarbeitung des HTML5-Elements {{ HTMLElement("track") }}, das Textspuren für Medienelemente spezifiziert, wird jetzt unterstützt. Dieses Element sollte jetzt im DOM erscheinen, obwohl das Verhalten noch nicht implementiert ist.
- Das {{ HTMLElement("iframe") }}-Element wird jetzt korrekt von seinem Container abgeschnitten, wenn die Ecken des Containers mithilfe der {{ cssxref("border-radius") }}-Eigenschaft abgerundet wurden.
- Textfelder des {{ HTMLElement("form") }}-Elements unterstützen nicht mehr die XUL-Eigenschaft [`maxwidth`](/de/docs/XUL/Property/maxwidth); dies war nie beabsichtigt und verstößt gegen die HTML-Spezifikation. Stattdessen sollten Sie das Attribut [`size`](/de/docs/Web/HTML/Element/input#size) verwenden, um die maximale Breite von Eingabefeldern festzulegen.
- Die Eigenschaften `fillStyle` und `strokeStyle` des {{ HTMLElement("canvas") }} [`CanvasRenderingContext2d`](/de/docs/Web/API/CanvasRenderingContext2d) ignorierten bisher Müll, der nach einer gültigen Farbangabe enthalten war; jetzt wird dies korrekt als Fehler behandelt. Zum Beispiel wurde "red blue" als Farbe als "red" behandelt, obwohl es hätte ignoriert werden sollen.
- Die Breite und Höhe von {{ HTMLElement("canvas") }}-Elementen kann jetzt ordnungsgemäß auf 0px gesetzt werden; zuvor wurden diese willkürlich auf 300px gesetzt, wenn Sie dies versucht haben.
- Unterstützung für die HTML [benutzerdefinierten Datenattribute](/de/docs/Web/HTML/Global_attributes/data-*) (`data-*`) wurde hinzugefügt. Die DOM-Eigenschaft [`element.dataset`](/de/docs/Web/API/Element/dataset) ermöglicht den Zugriff auf diese.
- Wenn ein {{ HTMLElement("textarea") }}-Element den Fokus erhält, wird der Texteinfügepunkt jetzt standardmäßig am Anfang des Textes statt am Ende platziert. Dies macht das Verhalten von Firefox konsistent mit anderen Browsern.

### CSS

- {{ cssxref("text-decoration-color", "-moz-text-decoration-color") }}
  - : Diese neue Eigenschaft ermöglicht es Ihnen, die Farbe von Textdekorationen wie Unterstreichungen, Überstreichungen und Durchstreichungen festzulegen.
- {{ cssxref("text-decoration-line", "-moz-text-decoration-line") }}
  - : Diese neue Eigenschaft ermöglicht es Ihnen, die Art der hinzugefügten Textdekorationen zu einem Element festzulegen.
- {{ cssxref("text-decoration-style", "-moz-text-decoration-style") }}
  - : Diese neue Eigenschaft ermöglicht es Ihnen, den Stil von Textdekorationen festzulegen, wie z.B. Unterstreichungen, Überstreichungen und Durchstreichungen. Stile beinhalten einfache Striche, doppelte Striche, Wellenlinien, gepunktete Linien und so weiter.
- {{ cssxref("hyphens", "-moz-hyphens") }}
  - : Diese neue Eigenschaft ermöglicht es Ihnen, zu kontrollieren, wie die Silbentrennung von Wörtern während des Zeilenumbruchs gehandhabt wird.
- {{ cssxref("-moz-orient", "-moz-orient") }}
  - : Eine neue (derzeit Mozilla-spezifische) Eigenschaft, die es Ihnen ermöglicht, die vertikale oder horizontale Ausrichtung bestimmter Elemente zu steuern (insbesondere {{ HTMLElement("progress") }}).
- {{ cssxref("::-moz-progress-bar") }}
  - : Ein Mozilla-spezifisches Pseudoelement, das es Ihnen ermöglicht, den Bereich eines {{ HTMLElement("progress") }}-Elements zu gestalten, der den abgeschlossenen Teil einer Aufgabe darstellt.

#### Weitere Änderungen

- Die `@-moz-document`-Eigenschaft hat eine neue `regexp()`-Funktion, die es Ihnen ermöglicht, die URL des Dokuments mit einem [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) abzugleichen.
- Die {{ cssxref("azimuth") }}-CSS-Eigenschaft wird nicht mehr unterstützt, da wir das wenige vorhandene Code für die `aural` Mediengruppe entfernt haben. Es war nie signifikant implementiert, daher ergab es mehr Sinn, die altbackene Implementierung vorerst zu entfernen, anstatt zu versuchen, sie zu reparieren.
- In der Vergangenheit wurde die {{ cssxref(":hover") }}-Pseudoklasse nicht auf Klassenselektoren im Quirks-Modus angewendet; zum Beispiel funktionierte `.some-class:hover` nicht. Diese Eigenart wurde entfernt.
- Die {{ cssxref(":indeterminate") }}-Pseudoklasse kann auf {{ HTMLElement("progress") }}-Elemente angewendet werden. Dies ist nicht standardisiert, aber wir hoffen, dass es von anderen Browsern übernommen wird, weil es nützlich sein wird.
- Der Wert `-moz-win-exclude-glass` wurde zur `-moz-appearance`-CSS-Eigenschaft hinzugefügt, um opake Bereiche in Aero Glass-Effekten auf Windows-Systemen auszuschließen.
- [Firefox Bug 658949](https://bugzil.la/658949) hat die Behandlung des Rautenzeichens (#) in Daten-URLs verändert, was CSS-Stylesheets, die ein solches Symbol enthalten, beschädigen könnte, wenn es nicht entkommen ist.

### DOM

- [Verwendung von Media Queries aus dem Code](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
  - : Sie können nun das Ergebnis einer Media Query-Zeichenkette programmatisch mit der [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)-Methode und dem [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Interface testen.
- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
  - : Firefox 6 fügt Unterstützung für die Touch-Ereignisse nach W3C-Standard hinzu; diese erleichtern das Interpretieren eines oder mehrerer Berührungen gleichzeitig auf berührungsempfindlichen Oberflächen wie Touchscreens und Trackpads.
- [Server-gesendete Ereignisse](/de/docs/Web/API/Server-sent_events)
  - : Server-gesendete Ereignisse ermöglichen es einer Webanwendung, einen Server anzuweisen, Ereignisse zu senden, ähnlich wie lokal erstellte DOM-Ereignisse.

<!---->

- `navigator.securityPolicy`, das lange Zeit einen leeren String zurückgegeben hat, wurde ersatzlos entfernt.
- `BlobBuilder` ist nun implementiert, obwohl es vorerst noch ein Präfix hat (daher müssen Sie `MozBlobBuilder` verwenden).
- Das `Document.height` und `Document.width` wurden entfernt. [Firefox Bug 585877](https://bugzil.la/585877)
- Die Eigenschaften `entities` und `notations` des [`DocumentType`](/de/docs/Web/API/DocumentType)-Objekts, die nie implementiert waren und immer `null` zurückgaben, wurden entfernt, da sie ohnehin aus der Spezifikation entfernt worden sind.
- Das `DOMConfiguration`-Interface und die `document.domConfig`-Eigenschaft, die es verwendete, wurden beide entfernt; sie wurden nie unterstützt und seitdem aus der DOM-Spezifikation entfernt.
- Das `hashchange`-Ereignis enthält jetzt korrekt [die Felder `newURL` und `oldURL`](/de/docs/Web/API/Window/hashchange_event).
- Die `abort()`-Methode des [`FileReader`](/de/docs/Web/API/FileReader)-Interfaces wirft jetzt eine Ausnahme, wenn sie verwendet wird, obwohl kein Datei-Lesevorgang im Gange ist.
- Die [`window.postMessage()`](/de/docs/Web/API/Window/postMessage)-Methode verwendet jetzt [den strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), um Ihnen zu ermöglichen, JavaScript-Objekte anstelle nur von Strings von einem Fenster zu einem anderen zu übergeben.
- Die [`window.history`](/de/docs/Web/API/Window/history)-API verwendet jetzt [den strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), um die Objekte zu serialisieren, die Sie an die `pushState()`- und `replaceState()`-Methoden übergeben; dies ermöglicht es Ihnen, komplexere Objekte zu verwenden (einschließlich solcher, die zyklische Referenzgrafiken enthalten).
- Sie können jetzt [erkennen, wann ein Druckvorgang gestartet und abgeschlossen wurde](/de/docs/Web/CSS/CSS_media_queries/Printing#detecting_print_requests), indem Sie auf die neuen Ereignisse `beforeprint` und `afterprint` hören.
- Die Eigenschaft `document.strictErrorChecking` wurde entfernt, da sie nie implementiert wurde und aus der DOM-Spezifikation entfernt wurde.
- Die Standard-Eigenschaft [`event.defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented) wird jetzt unterstützt; Sie sollten diese verwenden, anstatt der nicht standardisierten Methode `getPreventDefault()`, um festzustellen, ob auf dem Ereignis [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufgerufen wurde.
- Die [`window.top`](/de/docs/Web/API/Window/top)-Eigenschaft ist jetzt ordnungsgemäß schreibgeschützt.
- DOM-Ansichten, die wir nie dokumentiert haben, wurden entfernt. Dies war ein kleines Implementierungsdetail, das die Dinge unnötig verkomplizierte, daher haben wir es entfernt. Wenn Sie diese Änderung bemerken, machen Sie wahrscheinlich etwas falsch.
- Die Funktion [`addEventListener()`](/de/docs/XPCOM_Interface_Reference/nsIDOMEventTarget) des `EventTarget` nimmt den `useCapture`-Parameter jetzt optional an, wie es in WebKit der Fall ist (und entsprechend der neuesten Version der Spezifikation).
- Die Eigenschaft `mozResponseArrayBuffer` des [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekts wurde durch die Eigenschaften `responseType` und `response` ersetzt.
- Die Eigenschaft [`element.dataset`](/de/docs/Web/API/Element/dataset) wurde zum [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interface hinzugefügt, wodurch der Zugriff auf die [`data-*` globalen Attribute](/de/docs/Web/HTML/Global_attributes/data-*) eines Elements möglich ist.
- Das [`CustomEvent`](/de/docs/Web/API/CustomEvent)-Interface wurde implementiert. (siehe [Firefox Bug 427537](https://bugzil.la/427537))
- Aus Sicherheitsgründen erben `data:`- und `javascript:`-URLs nicht mehr den Sicherheitskontext der aktuellen Seite, wenn der Benutzer sie in die Adressleiste eingibt; stattdessen wird ein neuer, leerer Sicherheitskontext erstellt. Das bedeutet, dass Skripte, die durch Eingabe von `javascript:`-URLs in die Adressleiste geladen werden, keinen Zugriff mehr auf DOM-Methoden usw. haben. Diese URLs funktionieren jedoch weiterhin wie zuvor, wenn sie durch Skripte verwendet werden.

### JavaScript

- In der Vergangenheit war es möglich, den `new`-Operator bei mehreren eingebauten Funktionen (`eval()`, `parseInt()`, `Date.parse()`, …) zu verwenden, die dies laut Spezifikation nicht erlauben sollten. Dieses Verhalten wird nicht mehr unterstützt. Die Verwendung des `new`-Operators auf diese Weise wurde nie offiziell unterstützt und war nicht weit verbreitet, daher ist es unwahrscheinlich, dass diese Änderung Sie betrifft.
- ECMAScript 2015 [WeakMaps](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) wurden als Prototyp-Implementierung hinzugefügt.

### SVG

- Das Attribut {{ SVGAttr("pathLength") }} wird nun unterstützt.
- SVG-Muster, -Verläufe und -Filter funktionieren nun korrekt, wenn sie von [`data:`-URLs](/de/docs/Web/URI/Schemes/data) geladen werden.

### MathML

- Die Implementierung von {{ MathMLElement("mstyle") }} wurde korrigiert.

### Barrierefreiheit (ARIA)

- Ein Statusänderungsereignis wird jetzt korrekt gesendet, wenn sich der Wert von `aria-busy` ändert.
- Ein Attributänderungsereignis wird jetzt korrekt gesendet, wenn `aria-sort` auftritt.

### Netzwerke

- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : WebSockets wurde auf Protokollversion 07 für Firefox 6 aktualisiert. Zusätzlich wurde das globale `WebSocket`-Objekt in `MozWebSocket` umbenannt, um eine falsche Verwendung bei der Erkennung der Verfügbarkeit von nicht-präfixierten WebSockets zu verhindern.

<!---->

- Die Analyse des `Content-Disposition`-Headers wurde korrigiert, um backslash-escapete ASCII-Zeichen ordnungsgemäß als nur das Zeichen selbst zu interpretieren. Zuvor wurde dieses Zeichen fälschlicherweise durch einen Unterstrich ("\_") ersetzt.
- Der Wert des Pfadfeldes in `Set-Cookie`-Headers wird jetzt korrekt interpretiert, wenn Anführungszeichen verwendet werden; zuvor wurden sie als Teil des Pfadstrings behandelt, anstatt als Trenner. **Diese Änderung kann die Kompatibilität mit einigen Websites beeinflussen**, daher sollten Autoren ihren Code überprüfen.
- Der [`Upgrade`](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.42)-Anforderungsheader wird jetzt unterstützt; Sie können ein Upgrade eines HTTP-Kanals zu einem anderen Protokoll anfordern, indem Sie `nsIHttpChannelInternal.HTTPUpgrade()` aufrufen.

### Weitere Änderungen

- Unterstützung für Mikrosummaries wurde entfernt; sie wurden nie weit verbreitet genutzt, waren nicht sehr auffindbar und ihre Unterstützung machte Verbesserungen an der Places (Lesezeichen und Verlauf) Architektur schwierig.
- WebGL unterstützt jetzt die [`OES_texture_float`](https://registry.khronos.org/OpenGL/extensions/OES/OES_texture_float.txt)-Erweiterung.
- Das neue _Scratchpad_-Tool bietet einen praktischen Ort, um JavaScript-Code auszuprobieren.
- Die `console.trace()`-Methode wurde zur [Konsole-API](/de/docs/Web/API/Console_API) hinzugefügt ([Firefox Bug 585956](https://bugzil.la/585956)).

## Änderungen für Mozilla- und Add-on-Entwickler

Eine Übersicht über Änderungen, die Sie möglicherweise vornehmen müssen, um Ihr Add-on mit Firefox 6 kompatibel zu machen, finden Sie unter [Aktualisieren von Add-ons für Firefox 6](/de/docs/Mozilla/Firefox/Updating_add-ons_for_Firefox_6).

> [!NOTE]
> Firefox 6 erfordert, dass binäre Komponenten neu kompiliert werden, wie alle Hauptversionen von Firefox. Siehe [Binäre Schnittstellen](/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces) für Details.

### JavaScript-Code-Module

#### FileUtils.jsm

- Die Methode `openSafeFileOutputStream()` öffnet jetzt Dateien mit dem Verhaltensflag `DEFER_OPEN` [verhaltenflag](/de/docs/XPCOM_Interface_Reference/nsIFileOutputStream#behavior_flag_constants), anstatt zu versuchen, sie sofort zu öffnen.

#### XPCOMUtils.jsm

- Die neue Methode `importRelative()` ermöglicht es Ihnen, ein JavaScript-Code-Modul von einem Pfad zu laden, der relativ zum Pfad eines anderen JavaScript-Code-Moduls ist. Dies erleichtert das Erstellen von Modulen, die voneinander abhängen.

### XPCOM

- [`nsCOMArray<T>`](/de/docs/XPCOM_array_guide#nsCOMArray.3cT.3e) hat jetzt eine [`RemoveObjectsAt()`](/de/docs/XPCOM_array_guide#deleting_objects)-Methode, um mehrere Objekte gleichzeitig aus dem Array zu entfernen.

### Verwendung des DOM aus Chrome

- [Verwendung der DOM-File-API im Chrome-Code](/de/docs/Extensions/Using_the_DOM_File_API_in_chrome_code)
  - : Obwohl Sie immer in der Lage waren, die DOM-File-API aus dem Chrome-Code zu verwenden, unterstützt der [`File`](/de/docs/Web/API/File)-Konstruktor jetzt die Angabe eines lokalen Pfadnamens, wenn er aus dem Chrome verwendet wird. Zusätzlich können Sie auch die Datei, die Sie über die DOM-File-API zugreifen möchten, mit einem `nsIFile`-Objekt angeben.

### Schnittstellenänderungen

- `nsINavHistoryQueryOptions` unterstützt jetzt das Sortieren in Frequenzreihenfolge mit den neuen `SORT_BY_FREQUENCY_ASCENDING` und `SORT_BY_FREQUENCY_DESCENDING` Konstanten.
- `nsIFilePicker` hat ein neues `nsIFilePicker.addToRecentDocs` Attribut, das es Ihnen ermöglicht, anzugeben, dass die ausgewählte Datei zur "zuletzt geöffneten Dokumente"-Liste des Benutzers hinzugefügt werden soll, wenn es eines gibt. Dieses Attribut hat keine Auswirkungen im privaten Browsing-Modus.
- `nsINavBookmarkObserver`-Methoden, die Parameter mit der Item-ID enthalten, erfordern jetzt auch eine GUID.
- `nsIPrefBranch.clearUserPref()` wirft keine Ausnahme mehr, wenn die angegebene Präferenz nicht existiert oder keinen benutzerdefinierten Wert hat. Stattdessen macht sie nichts.
- Das `nsIMemoryReporter`-Interface bietet jetzt Unterstützung zur Angabe der Art des beschriebenen Speichers (gemappt, heap oder anderweitig).
- Das `stateData`-Attribut von `nsISHEntry` gibt jetzt ein `nsIStructuredCloneContainer` zurück.
- `nsIURI` hat ein neues `nsIURI.ref`-Attribut, das den Referenzanteil (den Teil nach dem "#") der URI zurückgibt. Außerdem gibt es neue Methoden `nsIURI.cloneIgnoringRef()`, die die `nsIURI` ohne das ref-Mitglied klonen, und `nsIURI.equalsExceptRef()`, die einen Vergleich mit einer anderen `nsIURI` vornimmt, bei dem das ref-Mitglied ignoriert wird.

#### Neue Schnittstellen

- `mozIAsyncFavicons`
  - : Ein neuer Dienst, der es Ihnen ermöglicht, auf den Favicon-Dienst asynchron zuzugreifen.
- `nsIEventSource`
  - : _Details ausstehend._
- `nsIGSettingsCollection`
  - : _Details ausstehend._
- `nsIGSettingsService`
  - : _Details ausstehend._
- `nsIHttpUpgradeListener`
  - : Das Callback-Interface zur Verarbeitung von HTTP-Upgrade-Anfragen über die `nsIHttpChannelInternal.HTTPUpgrade()`-Methode.
- `nsIStructuredCloneContainer`
  - : Ein Container für Objekte, die unter Verwendung des [strukturierten Klon-Algorithmus](/de/docs/HTML/Structured_clones) serialisiert wurden.
- `nsITelemetry`
  - : Implementiert die Unterstützung für Telemetrie, um die Aufzeichnung von Telemetriedaten zum Zwecke der Leistungstrenddarstellung zu ermöglichen. Siehe [Firefox Bug 649502](https://bugzil.la/649502) und [Firefox Bug 585196](https://bugzil.la/585196).
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

### Weitere Änderungen

- [Verwendung von Präferenzen aus Anwendungscode](/de/docs/Mozilla/Preferences/Using_preferences_from_application_code)
  - : Eine neue statische API ist verfügbar, um einfachen Zugriff auf Präferenzen zu ermöglichen; dies ist nur für Anwendungscode verfügbar und kann nicht von Add-ons verwendet werden.

## Siehe auch

{{Firefox_for_developers}}
