---
title: Firefox 6 für Entwickler
slug: Mozilla/Firefox/Releases/6
l10n:
  sourceCommit: 58cc81b21f777d745877ec1430df8ba2852ff411
---

{{FirefoxSidebar}}

Firefox 6, basierend auf Gecko 6.0, wurde am 16. August 2011 veröffentlicht. Dieser Artikel bietet Links zu Informationen über die Änderungen, die Entwickler in dieser Version betreffen.

## Änderungen für Webentwickler

### HTML

- Das HTML5-Element {{ HTMLElement("progress") }}, mit dem Sie eine Fortschrittsanzeige erstellen können, wird jetzt unterstützt.
- Das Parsen des HTML5-Elements {{ HTMLElement("track") }}, das Textspuren für Medienelemente spezifiziert, wird jetzt unterstützt. Dieses Element sollte jetzt im DOM erscheinen, obwohl sein Verhalten noch nicht implementiert ist.
- Das Element {{ HTMLElement("iframe") }} wird jetzt korrekt von seinem Container abgeschnitten, wenn die Ecken des Containers mit der Eigenschaft {{ cssxref("border-radius") }} abgerundet wurden.
- Textfelder von {{ HTMLElement("form") }}-Elementen unterstützen nicht mehr die XUL [`maxwidth`](/de/docs/XUL/Property/maxwidth)-Eigenschaft; dies war nie beabsichtigt und verstößt gegen die HTML-Spezifikation. Stattdessen sollten Sie das Attribut [`size`](/de/docs/Web/HTML/Reference/Elements/input#size) verwenden, um die maximale Breite von Eingabefeldern festzulegen.
- Die Eigenschaften `fillStyle` und `strokeStyle` des {{ HTMLElement("canvas") }} [`CanvasRenderingContext2d`](/de/docs/Web/API/CanvasRenderingContext2D) ignorierten früher Abfälle nach einer gültigen Farbdefinition; jetzt wird dies korrekt als Fehler behandelt. Zum Beispiel wurde "red blue" als Farbe früher als "red" behandelt, obwohl es ignoriert werden sollte.
- Die Breite und Höhe von {{ HTMLElement("canvas") }}-Elementen kann nun korrekt auf 0px gesetzt werden; zuvor wurden diese willkürlich auf 300px gesetzt, wenn Sie das versuchten.
- Unterstützung für die HTML [benutzerdefinierten Datenattribute](/de/docs/Web/HTML/Reference/Global_attributes/data-*) (`data-*`) wurde hinzugefügt. Die DOM-Eigenschaft [`dataset`](/de/docs/Web/API/HTMLElement/dataset) ermöglicht es, auf sie zuzugreifen.
- Wenn ein {{ HTMLElement("textarea") }}-Element den Fokus erhält, wird der Texteingabepunkt jetzt standardmäßig am Anfang des Textes platziert, anstatt am Ende. Dies macht das Verhalten von Firefox konsistent mit anderen Browsern.

### CSS

- {{ cssxref("text-decoration-color", "-moz-text-decoration-color") }}
  - : Diese neue Eigenschaft ermöglicht es Ihnen, die Farbe von Textdekorationen wie Unterstreichungen, Überstrichen und Durchstreichungen festzulegen.
- {{ cssxref("text-decoration-line", "-moz-text-decoration-line") }}
  - : Diese neue Eigenschaft ermöglicht es Ihnen, die Art der Textdekorationen festzulegen, die einem Element hinzugefügt werden.
- {{ cssxref("text-decoration-style", "-moz-text-decoration-style") }}
  - : Diese neue Eigenschaft ermöglicht es Ihnen, den Stil der Textdekorationen festzulegen, wie Unterstreichungen, Überstriche und Durchstreichungen. Zu den Stilen gehören einfache Striche, Doppellinien, gewellte Linien, gepunktete Linien usw.
- {{ cssxref("hyphens", "-moz-hyphens") }}
  - : Diese neue Eigenschaft ermöglicht es Ihnen, zu kontrollieren, wie die Trennung von Wörtern beim Zeilenumbruch behandelt wird.
- {{ cssxref("-moz-orient", "-moz-orient") }}
  - : Eine neue (derzeit Mozilla-spezifische) Eigenschaft, mit der Sie die vertikale oder horizontale Ausrichtung bestimmter Elemente (insbesondere {{ HTMLElement("progress") }}) steuern können.
- {{ cssxref("::-moz-progress-bar") }}
  - : Ein Mozilla-spezifisches Pseudoelement, mit dem Sie den Bereich eines {{ HTMLElement("progress") }}-Elements gestalten können, der den abgeschlossenen Teil einer Aufgabe darstellt.

#### Andere Änderungen

- Die `@-moz-document`-Eigenschaft hat eine neue `regexp()`-Funktion, mit der Sie die URL des Dokuments mit einem [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) abgleichen können.
- Die CSS-Eigenschaft `azimuth` wird nicht mehr unterstützt, da wir den wenigen Code entfernt haben, den wir für die `aural`-Mediengruppe hatten. Sie war nie signifikant implementiert, daher machte es mehr Sinn, die veraltete Implementierung vorerst zu entfernen, anstatt zu versuchen, sie zu reparieren.
- In der Vergangenheit wurde die Pseudoklasse {{ cssxref(":hover") }} in der Quirks-Modus nicht auf Klassen-Selektoren angewendet; zum Beispiel funktionierte `.some-class:hover` nicht. Diese Eigenheit wurde entfernt.
- Die Pseudoklasse {{ cssxref(":indeterminate") }} kann auf {{ HTMLElement("progress") }}-Elemente angewendet werden. Dies ist nicht standardisiert, aber wir hoffen, dass es von anderen Browsern übernommen wird, da es nützlich sein wird.
- Der Wert `-moz-win-exclude-glass` wurde der CSS-Eigenschaft `-moz-appearance` hinzugefügt, um undurchsichtige Bereiche in Aero Glass-Effekten unter Windows-Systemen auszuschließen.
- [Firefox Bug 658949](https://bugzil.la/658949) änderte, wie das Hash-Symbol (#) in Daten-URLs behandelt wird, was CSS-Stylesheets, die ein solches Symbol enthalten, beeinträchtigen kann, wenn es nicht entkommen ist.

### DOM

- [Verwendung von Media Queries im Code](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
  - : Sie können jetzt das Ergebnis einer Media Query-Zeichenkette programmatisch mit der Methode [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) und der Schnittstelle [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) testen.
- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
  - : Firefox 6 unterstützt die W3C-Standard-Touch-Ereignisse; diese erleichtern die Interpretation eines oder mehrerer gleichzeitig auf touch-sensitiven Oberflächen ausgeführter Berührungen wie Touchscreens und Trackpads.
- [Server-gesendete Ereignisse](/de/docs/Web/API/Server-sent_events)
  - : Server-gesendete Ereignisse ermöglichen es einer Webanwendung, einen Server zu bitten, Ereignisse ähnlich wie bei lokal erstellten DOM-Ereignissen zu senden.

<!---->

- `navigator.securityPolicy`, das seit langem einen leeren String zurückgegeben hat, wurde vollständig entfernt.
- `BlobBuilder` ist nun implementiert, obwohl es vorerst mit Präfix (sodass Sie `MozBlobBuilder` verwenden müssen).
- Die `Document.height` und `Document.width` wurden entfernt. [Firefox Bug 585877](https://bugzil.la/585877)
- Die Eigenschaften `entities` und `notations` des[`DocumentType`](/de/docs/Web/API/DocumentType)-Objekts, die nie implementiert wurden und immer `null` zurückgaben, wurden entfernt, da sie ohnehin aus der Spezifikation entfernt wurden.
- Das `DOMConfiguration`-Interface und die `document.domConfig`-Eigenschaft, die es nutzte, wurden beide entfernt; sie wurden nie unterstützt und sind seitdem aus der DOM-Spezifikation gestrichen worden.
- Das `hashchange`-Ereignis enthält jetzt korrekt [die `newURL`- und `oldURL`-Felder](/de/docs/Web/API/Window/hashchange_event).
- Die `abort()`-Methode der [`FileReader`](/de/docs/Web/API/FileReader)-Schnittstelle wirft nun eine Ausnahme, wenn sie verwendet wird, ohne dass ein Dateilesen im Gange ist.
- Die [`window.postMessage()`](/de/docs/Web/API/Window/postMessage)-Methode verwendet jetzt [den strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), um JavaScript-Objekte anstatt nur Strings von einem Fenster zu einem anderen zu übertragen.
- Die [`window.history`](/de/docs/Web/API/Window/history)-API verwendet jetzt [den strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), um die Objekte zu serialisieren, die Sie an die Methoden `pushState()` und `replaceState()` übergeben; dies ermöglicht die Verwendung komplexerer Objekte (einschließlich solcher, die zyklische Referenzgraphen enthalten).
- Sie können jetzt [erkennen, wann ein Druckvorgang begonnen und abgeschlossen wurde](/de/docs/Web/CSS/CSS_media_queries/Printing#detecting_print_requests), indem Sie auf die neuen Ereignisse `beforeprint` und `afterprint` hören.
- Die Eigenschaft `document.strictErrorChecking` wurde entfernt, da sie nie implementiert wurde und aus der DOM-Spezifikation entfernt wurde.
- Die standardisierte Eigenschaft [`event.defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented) wird jetzt unterstützt; Sie sollten diese anstelle der nicht standardisierten Methode `getPreventDefault()` verwenden, um zu prüfen, ob [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) für das Ereignis aufgerufen wurde.
- Die Eigenschaft [`window.top`](/de/docs/Web/API/Window/top) ist jetzt richtig schreibgeschützt.
- DOM-Ansichten, die wir nie dokumentiert haben, wurden entfernt. Dies war ein Implementierungsdetail, das unnötig Komplikationen hervorrief, also haben wir es entfernt. Wenn Sie diese Änderung bemerken, machen Sie wahrscheinlich etwas falsch.
- Die `useCapture`-Parameterfunktion [`addEventListener()`](/de/docs/XPCOM_Interface_Reference/nsIDOMEventTarget) des `EventTarget` ist jetzt optional, wie es auch in WebKit der Fall ist (und gemäß der neuesten Version der Spezifikation).
- Die `mozResponseArrayBuffer`-Eigenschaft des [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekts wurde durch die Eigenschaften `responseType` und `response` ersetzt.
- Die Eigenschaft [`dataset`](/de/docs/Web/API/HTMLElement/dataset) wurde der Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement) hinzugefügt und ermöglicht den Zugriff auf die [globalen Datenattribute `data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*) eines Elements.
- Die Schnittstelle [`CustomEvent`](/de/docs/Web/API/CustomEvent) wurde implementiert. (siehe [Firefox Bug 427537](https://bugzil.la/427537))
- Aus Sicherheitsgründen erben `data:`- und `javascript:`-URLs beim Eingeben in der Adressleiste nicht mehr den Sicherheitskontext der aktuellen Seite; stattdessen wird ein neuer, leerer Sicherheitskontext erstellt. Das bedeutet, dass Skripte, die durch das Eingeben von `javascript:`-URLs in der Adressleiste geladen werden, keinen Zugriff mehr auf DOM-Methoden und dergleichen haben. Diese URLs funktionieren jedoch weiterhin wie zuvor, wenn sie von Skripten verwendet werden.

### JavaScript

- In der Vergangenheit war es möglich, den `new`-Operator auf mehrere eingebaute Funktionen (`eval()`, `parseInt()`, `Date.parse()`, …) anzuwenden, die dies nicht erlauben sollten, gemäß der Spezifikation. Dieses Verhalten wird nicht mehr unterstützt. Diese Art der Verwendung des `new`-Operators war nie offiziell unterstützt und wurde nicht weit verbreitet genutzt, daher ist es unwahrscheinlich, dass diese Änderung Sie betrifft.
- ECMAScript 2015 [WeakMaps](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) wurden als Prototype-Implementierung hinzugefügt.

### SVG

- Das Attribut {{ SVGAttr("pathLength") }} wird jetzt unterstützt.
- SVG-Muster, -Verläufe und -Filter funktionieren jetzt korrekt, wenn sie von [`data:`-URLs](/de/docs/Web/URI/Reference/Schemes/data) geladen werden.

### MathML

- Die Implementierung von {{ MathMLElement("mstyle") }} wurde korrigiert.

### Barrierefreiheit (ARIA)

- Ein Zustandsänderungsereignis wird jetzt korrekt gesendet, wenn sich der Wert von `aria-busy` ändert.
- Ein Attributänderungsereignis wird jetzt korrekt gesendet, wenn `aria-sort` eintritt.

### Netzwerk

- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : WebSockets wurde für Firefox 6 auf Protokollversion 07 aktualisiert. Darüber hinaus wurde das globale `WebSocket`-Objekt in `MozWebSocket` umbenannt, um zu verhindern, dass es fälschlicherweise zur Erkennung der Verfügbarkeit von unpräfixierten WebSockets verwendet wird.

<!---->

- Das Parsen des Headers `Content-Disposition` wurde korrigiert, um ordnungsgemäß Backslash-escapete ASCII-Zeichen als genau dieses Zeichen selbst zu interpretieren. Zuvor wurde dieses Zeichen fälschlicherweise durch einen Unterstrich ("\_") ersetzt.
- Der Wert des Pfadfelds in `Set-Cookie`-Headers wird jetzt korrekt interpretiert, wenn Anführungszeichen verwendet werden; zuvor wurden sie als Teil des Pfadnamens behandelt, anstatt als Abgrenzungszeichen. **Diese Änderung kann die Kompatibilität mit einigen Websites beeinträchtigen**, daher sollten Autoren ihren Code überprüfen.
- Der [`Upgrade`](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.42)-Request-Header wird jetzt unterstützt; Sie können ein Upgrade eines HTTP-Kanals auf ein anderes Protokoll anfordern, indem Sie `nsIHttpChannelInternal.HTTPUpgrade()` aufrufen.

### Andere Änderungen

- Die Unterstützung für Mikrosummaries wurde entfernt; diese wurden nie weit verbreitet genutzt, waren nicht sehr auffindbar und deren Unterstützung erschwerte Verbesserungen der Places-Architektur (Lesezeichen und Verlauf).
- WebGL unterstützt jetzt die [`OES_texture_float`](https://registry.khronos.org/OpenGL/extensions/OES/OES_texture_float.txt)-Erweiterung.
- Das neue _Scratchpad_-Tool bietet einen praktischen Ort, um mit JavaScript-Code zu experimentieren.
- Die Methode `console.trace()` wurde zur [Console API](/de/docs/Web/API/Console_API) hinzugefügt ([Firefox Bug 585956](https://bugzil.la/585956)).

## Änderungen für Mozilla- und Add-on-Entwickler

Für einen Überblick über die Änderungen, die Sie möglicherweise vornehmen müssen, um Ihr Add-on mit Firefox 6 kompatibel zu machen, siehe [Aktualisieren von Add-ons für Firefox 6](/de/docs/Mozilla/Firefox/Updating_add-ons_for_Firefox_6).

> [!NOTE]
> Firefox 6 erfordert, dass binäre Komponenten neu kompiliert werden, genauso wie alle Hauptversionen von Firefox. Siehe [Binäre Schnittstellen](/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces) für Details.

### JavaScript-Code-Module

#### FileUtils.jsm

- Die Methode `openSafeFileOutputStream()` öffnet jetzt Dateien mit dem `DEFER_OPEN` [Verhaltensflag](/de/docs/XPCOM_Interface_Reference/nsIFileOutputStream#behavior_flag_constants), anstatt zu versuchen, sie sofort zu öffnen.

#### XPCOMUtils.jsm

- Die neue Methode `importRelative()` ermöglicht das Laden eines JavaScript-Code-Moduls aus einem Pfad, der relativ zum Pfad eines anderen JavaScript-Code-Moduls ist. Dies erleichtert den Aufbau von Modulen, die voneinander abhängen.

### XPCOM

- [`nsCOMArray<T>`](/de/docs/XPCOM_array_guide#nsCOMArray.3cT.3e) hat jetzt eine [`RemoveObjectsAt()`](/de/docs/XPCOM_array_guide#deleting_objects)-Methode, um mehrere Objekte gleichzeitig aus dem Array zu entfernen.

### Verwendung des DOM im Chrome

- [Verwendung der DOM File-API in Chrome-Code](/de/docs/Extensions/Using_the_DOM_File_API_in_chrome_code)
  - : Obwohl Sie die DOM File-API schon immer im Chrome-Code verwenden konnten, unterstützt der [`File`](/de/docs/Web/API/File)-Konstruktor jetzt die Angabe eines lokalen Pfadnamensstrings, wenn er aus dem Chrome verwendet wird. Außerdem können Sie die Datei, auf die Sie zugreifen möchten, mithilfe der DOM File-API mit einem `nsIFile`-Objekt angeben.

### Schnittstellenänderungen

- `nsINavHistoryQueryOptions` unterstützt jetzt das Sortieren in Frequenzreihenfolge mithilfe der neuen `SORT_BY_FREQUENCY_ASCENDING`- und `SORT_BY_FREQUENCY_DESCENDING`-Konstanten.
- `nsIFilePicker` hat ein neues `nsIFilePicker.addToRecentDocs`-Attribut, mit dem Sie angeben können, dass die ausgewählte Datei zur "recent documents"-Liste des Benutzers hinzugefügt werden soll, falls vorhanden. Dieses Attribut hat im privaten Modus keine Auswirkungen.
- `nsINavBookmarkObserver`-Methoden mit Element-ID-Parametern erfordern jetzt auch eine GUID.
- `nsIPrefBranch.clearUserPref()` wirft keine Ausnahme mehr, wenn die angegebene Präferenz nicht existiert oder keinen benutzerdefinierten Wert hat. Stattdessen tut sie einfach nichts.
- Die `nsIMemoryReporter`-Schnittstelle bietet jetzt Unterstützung zur Angabe der Art des beschriebenen Speichers (gemappt, Heap oder andere).
- Das `stateData`-Attribut von `nsISHEntry` gibt jetzt einen `nsIStructuredCloneContainer` zurück.
- `nsIURI` hat ein neues `nsIURI.ref`-Attribut, das den Referenzteil (den Teil nach dem "#") der URI zurückgibt. Es hat auch neue Methoden `nsIURI.cloneIgnoringRef()`, die das `nsIURI` ohne das Ref-Mitglied klont, und `nsIURI.equalsExceptRef()`, die mit einem anderen `nsIURI` vergleicht und das Ref-Mitglied ignoriert.

#### Neue Schnittstellen

- `mozIAsyncFavicons`
  - : Ein neuer Dienst, der es Ihnen ermöglicht, asynchron auf den Favicon-Dienst zuzugreifen.
- `nsIEventSource`
  - : _Details stehen aus._
- `nsIGSettingsCollection`
  - : _Details stehen aus._
- `nsIGSettingsService`
  - : _Details stehen aus._
- `nsIHttpUpgradeListener`
  - : Die Callback-Schnittstelle zur Bearbeitung von HTTP-Upgrade-Anfragen über die Methode `nsIHttpChannelInternal.HTTPUpgrade()`.
- `nsIStructuredCloneContainer`
  - : Ein Container für Objekte, die mit dem [strukturierten Klon-Algorithmus](/de/docs/HTML/Structured_clones) serialisiert wurden.
- `nsITelemetry`
  - : Implementiert Telemetrieunterstützung, um die Aufzeichnung von Telemetriedaten zu ermöglichen, die verwendet werden, um Histogramme zur Leistungserfassung zu präsentieren. Siehe [Firefox Bug 649502](https://bugzil.la/649502) und [Firefox Bug 585196](https://bugzil.la/585196).
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

- [Verwendung von Einstellungen aus dem Anwendungscode](/de/docs/Mozilla/Preferences/Using_preferences_from_application_code)
  - : Eine neue statische API ist verfügbar, um einfach auf Einstellungen zuzugreifen; dies ist nur für Anwendungscode verfügbar und kann nicht von Add-ons verwendet werden.

## Siehe auch

{{Firefox_for_developers}}
