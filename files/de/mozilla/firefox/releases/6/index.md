---
title: Firefox 6 für Entwickler
slug: Mozilla/Firefox/Releases/6
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{FirefoxSidebar}}

Firefox 6, basierend auf Gecko 6.0, wurde am 16. August 2011 veröffentlicht. Dieser Artikel bietet Links zu Informationen über die Änderungen, die Entwickler in dieser Version betreffen.

## Änderungen für Webentwickler

### HTML

- Das HTML5-Element {{ HTMLElement("progress") }}, mit dem Sie eine Fortschrittsanzeige erstellen können, wird jetzt unterstützt.
- Das Parsen des HTML5-Elements {{ HTMLElement("track") }}, das Textspuren für Medienelemente angibt, wird jetzt unterstützt. Dieses Element sollte jetzt im DOM erscheinen, obwohl sein Verhalten noch nicht implementiert ist.
- Das {{ HTMLElement("iframe") }}-Element wird jetzt korrekt von seinem Container abgeschnitten, wenn die Ecken des Containers mithilfe der Eigenschaft {{ cssxref("border-radius") }} abgerundet wurden.
- Textfelder für {{ HTMLElement("input") }} in einem {{ HTMLElement("form") }}-Element unterstützen nicht länger die XUL-Eigenschaft [`maxwidth`](/de/docs/XUL/Property/maxwidth); dies war nie beabsichtigt und widerspricht der HTML-Spezifikation. Verwenden Sie stattdessen das Attribut [`size`](/de/docs/Web/HTML/Element/input#size), um die maximale Breite von Eingabefeldern festzulegen.
- Die Eigenschaften [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D#fillStyle) und [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D#strokeStyle) des {{ HTMLElement("canvas") }} [`CanvasRenderingContext2d`] ignorierten bislang fehlerhafte Zeichen nach einer gültigen Farbdefinition; jetzt wird dies korrekt als Fehler behandelt. Zum Beispiel wurde "red blue" früher als "red" interpretiert, obwohl es eigentlich ignoriert werden sollte.
- Die Breite und Höhe von {{ HTMLElement("canvas") }}-Elementen kann jetzt korrekt auf 0px gesetzt werden; früher wurden sie willkürlich auf 300px gesetzt.
- Unterstützung für die HTML [benutzerdefinierten Datenattribute](/de/docs/Web/HTML/Global_attributes/data-*) (`data-*`) wurde hinzugefügt. Die DOM-Eigenschaft [`dataset`](/de/docs/Web/API/HTMLElement/dataset) erlaubt den Zugriff auf diese Attribute.
- Wenn ein {{ HTMLElement("textarea") }}-Element den Fokus erhält, wird der Texteingabe-Punkt standardmäßig an den Beginn des Textes gesetzt, anstatt ans Ende. Dies macht das Verhalten von Firefox konsistent mit anderen Browsern.

### CSS

- {{ cssxref("text-decoration-color", "-moz-text-decoration-color") }}
  - : Diese neue Eigenschaft ermöglicht es, die Farbe für Textdekorationen wie Unterstreichungen, Überstreichungen und Durchstreichungen festzulegen.
- {{ cssxref("text-decoration-line", "-moz-text-decoration-line") }}
  - : Diese neue Eigenschaft ermöglicht es, die Art der Textdekorationen hinzuzufügen, die zu einem Element hinzugefügt werden.
- {{ cssxref("text-decoration-style", "-moz-text-decoration-style") }}
  - : Diese neue Eigenschaft ermöglicht es, den Stil der Textdekorationen wie Unterstreichungen, Überstreichungen und Durchstreichungen festzulegen. Stiloptionen umfassen einfache Linien, doppelte Linien, wellige Linien, gepunktete Linien und so weiter.
- {{ cssxref("hyphens", "-moz-hyphens") }}
  - : Diese neue Eigenschaft ermöglicht es, zu steuern, wie die Trennung von Wörtern beim Zeilenumbruch gehandhabt wird.
- {{ cssxref("-moz-orient", "-moz-orient") }}
  - : Eine neue (derzeit Mozilla-spezifische) Eigenschaft, die die vertikale oder horizontale Ausrichtung bestimmter Elemente (insbesondere {{ HTMLElement("progress") }}) steuert.
- {{ cssxref("::-moz-progress-bar") }}
  - : Ein Mozilla-spezifisches Pseudo-Element, das es ermöglicht, den Bereich eines {{ HTMLElement("progress") }}-Elements zu gestalten, der den abgeschlossenen Teil einer Aufgabe darstellt.

#### Weitere Änderungen

- Die Eigenschaft `@-moz-document` hat eine neue Funktion `regexp()`, mit der Sie die URL des Dokuments mit einem [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) abgleichen können.
- Die CSS-Eigenschaft `azimuth` wird nicht mehr unterstützt, da der Code für die `aural`-Mediendefinition entfernt wurde. Es war nie vollständig implementiert, und es machte mehr Sinn, die fehlerhafte Implementierung vorübergehend zu entfernen, anstatt sie zu überarbeiten.
- In der Vergangenheit wurde die Pseudoklasse {{ cssxref(":hover") }} bei Klassenselektoren im Quirks-Modus nicht angewendet; beispielsweise funktionierte `.some-class:hover` nicht. Diese Unstimmigkeit wurde entfernt.
- Die Pseudoklasse {{ cssxref(":indeterminate") }} kann auf {{ HTMLElement("progress") }}-Elemente angewendet werden. Dies ist nicht standardisiert, aber es wird gehofft, dass es von anderen Browsern übernommen wird, da es nützlich ist.
- Der Wert `-moz-win-exclude-glass` wurde zur CSS-Eigenschaft `-moz-appearance` hinzugefügt, um undurchsichtige Bereiche in Aero-Glass-Effekten unter Windows-Systemen auszuschließen.
- [Firefox-Bug 658949](https://bugzil.la/658949) hat geändert, wie das Symbol `#` in Daten-URLs behandelt wird, was möglicherweise CSS-Stylesheets beeinträchtigt, die dieses Symbol enthalten, wenn es nicht escape-geschützt ist.

### DOM

- [Medienabfragen mithilfe von Code verwenden](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
  - : Sie können jetzt das Ergebnis eines Medienabfrage-Strings programmatisch mit der Methode [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) und der Schnittstelle [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) testen.
- [Touch-Events](/de/docs/Web/API/Touch_events)
  - : Firefox 6 fügt Unterstützung für standardisierte Touch-Events gemäß W3C hinzu; damit können Sie leicht eine oder mehrere Berührungen auf berührungsempfindlichen Oberflächen wie Touchscreens und Trackpads interpretieren.
- [Server-gesendete Ereignisse](/de/docs/Web/API/Server-sent_events)
  - : Server-sent Events ermöglichen es einer Webanwendung, den Server dazu zu bringen, Ereignisse genau wie lokal erstellte DOM-Ereignisse zu senden.

<!---->

- `navigator.securityPolicy`, das lange Zeit einen leeren String zurückgab, wurde vollständig entfernt.
- `BlobBuilder` ist jetzt implementiert, obwohl es derzeit noch ein Präfix (`MozBlobBuilder`) benötigt.
- `Document.height` und `Document.width` wurden entfernt. [Firefox-Bug 585877](https://bugzil.la/585877).
- Die Eigenschaften `entities` und `notations` des [`DocumentType`](/de/docs/Web/API/DocumentType)-Objekts wurden entfernt, da sie nie implementiert und immer `null` zurückgegeben haben. Sie wurden ohnehin aus der Spezifikation entfernt.
- Die Schnittstelle `DOMConfiguration` und die zugehörige Eigenschaft `document.domConfig` wurden beide entfernt, da sie nie unterstützt wurden und aus der DOM-Spezifikation entfernt wurden.
- Das `hashchange`-Ereignis enthält jetzt korrekt [die Felder `newURL` und `oldURL`](/de/docs/Web/API/Window/hashchange_event).
- Die Methode [`abort()`](/de/docs/Web/API/FileReader/abort) der Schnittstelle [`FileReader`](/de/docs/Web/API/FileReader) löst jetzt eine Ausnahme aus, wenn sie verwendet wird, ohne dass eine Datei gelesen wird.
- Die Methode [`window.postMessage()`](/de/docs/Web/API/Window/postMessage) verwendet jetzt den [strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), um JavaScript-Objekte anstelle nur von Strings zwischen verschiedenen Fenstern zu übertragen.
- Auch die API [`window.history`](/de/docs/Web/API/Window/history) verwendet nun den [strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), um die Objekte zu serialisieren, die an die Methoden `pushState()` und `replaceState()` übergeben werden; dadurch können Sie komplexere Objekte nutzen (einschließlich solcher, die zyklische Referenzgraphen enthalten).
- Sie können jetzt [erkennen, wenn ein Druckvorgang gestartet und abgeschlossen wurde](/de/docs/Web/CSS/CSS_media_queries/Printing#detecting_print_requests), indem Sie die neuen Ereignisse `beforeprint` und `afterprint` abonnieren.
- Die Eigenschaft `document.strictErrorChecking` wurde entfernt, da sie nie implementiert wurde und aus der DOM-Spezifikation entfernt wurde.
- Die standardmäßige Eigenschaft [`event.defaultPrevented`](/de/docs/Web/API/Event/defaultPrevented) wird jetzt unterstützt; verwenden Sie diese anstelle der nicht standardisierten Methode `getPreventDefault()`, um zu erkennen, ob [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) für das Ereignis aufgerufen wurde.
- Die Eigenschaft [`window.top`](/de/docs/Web/API/Window/top) ist jetzt korrekt nur-lesbar.
- DOM-Ansichten, die nie dokumentiert wurden, wurden entfernt. Dies war ein Implementierungsdetail, das unnötigerweise die Komplexität erhöhte, also wurde es entfernt. Wenn Ihnen diese Änderung auffällt, verwenden Sie möglicherweise die DOM-Schnittstelle falsch.
- Das `useCapture`-Parameter der Funktion [`addEventListener()`](/de/docs/XPCOM_Interface_Reference/nsIDOMEventTarget) ist jetzt optional, wie in WebKit (und entsprechend der neuesten Version der Spezifikation).
- Die Eigenschaft `mozResponseArrayBuffer` des Objekts [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) wurde durch die Eigenschaften `responseType` und `response` ersetzt.
- Die Eigenschaft [`dataset`](/de/docs/Web/API/HTMLElement/dataset) wurde zur Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement) hinzugefügt und ermöglicht den Zugriff auf die [`data-*` globalen Attribute](/de/docs/Web/HTML/Global_attributes/data-*) eines Elements.
- Die Schnittstelle [`CustomEvent`](/de/docs/Web/API/CustomEvent) wurde implementiert (siehe [Firefox-Bug 427537](https://bugzil.la/427537)).
- Aus Sicherheitsgründen übernehmen `data:`- und `javascript:`-URLs, die der Benutzer in die Adressleiste eingibt, nicht länger den Sicherheitskontext der aktuellen Seite; stattdessen wird ein neuer leerer Sicherheitskontext erstellt. Dies bedeutet, dass von Scripts geladene `javascript:`-URLs weiterhin wie bisher funktionieren, jedoch keine DOM-Methoden und dergleichen ausführen können, wenn sie direkt in die Adressleiste eingegeben werden.

### JavaScript

- In der Vergangenheit war es möglich, den Operator `new` mit verschiedenen eingebauten Funktionen wie `eval()`, `parseInt()` und `Date.parse()` zu verwenden, was gegen die Spezifikation verstößt. Dieses Verhalten wird nun nicht mehr unterstützt. Die Nutzung des Operators `new` in dieser Weise war nie offiziell unterstützt und es ist unwahrscheinlich, dass diese Änderung Auswirkungen auf bestehende Programmierungen hat.
- ECMAScript 2015 [WeakMaps](/de/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) wurden als Prototyp-Implementierung hinzugefügt.

### SVG

- Das Attribut {{ SVGAttr("pathLength") }} wird jetzt unterstützt.
- SVG-Muster, Gradienten und Filter funktionieren jetzt korrekt, wenn sie von [`data:`-URLs](/de/docs/Web/URI/Reference/Schemes/data) geladen werden.

### MathML

- Die Implementierung von {{ MathMLElement("mstyle") }} wurde korrigiert.

### Barrierefreiheit (ARIA)

- Ein Zustandsänderungsereignis wird jetzt korrekt gesendet, wenn sich der Wert von `aria-busy` ändert.
- Ein Attributänderungsereignis wird jetzt korrekt gesendet, wenn `aria-sort` auftritt.

### Netzwerk

- [WebSockets](/de/docs/Web/API/WebSockets_API)
  - : WebSockets wurde auf Protokollversion 07 aktualisiert. Darüber hinaus wurde das globale Objekt `WebSocket` in `MozWebSocket` umbenannt, um fälschlichen Gebrauch zu vermeiden.

<!---->

- Die Interpretation des Headers `Content-Disposition` wurde korrigiert, sodass Backslash-escaped ASCII-Zeichen nun wie vorgesehen interpretiert statt durch Unterstriche ersetzt werden.
- Der `path`-Wert in `Set-Cookie`-Headers wird nun korrekt interpretiert, wenn Anführungszeichen enthalten sind. Dies kann die Kompatibilität mit einigen Websites beeinflussen, daher sollten Entwickler ihren Code überprüfen.
- Der [`Upgrade`](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.42)-Header wird nun unterstützt; er erlaubt die Anforderung zur Aktualisierung eines HTTP-Kanals auf ein anderes Protokoll durch Aufruf von `nsIHttpChannelInternal.HTTPUpgrade()`.

### Sonstige Änderungen

- Unterstützung für Microsummaries wurde entfernt, da sie wenig genutzt wurden und ihre Unterstützung Weiterentwicklungen der „Places“-Architektur (Lesezeichen und Verlauf) erschwerte.
- WebGL unterstützt jetzt die Erweiterung [`OES_texture_float`](https://registry.khronos.org/OpenGL/extensions/OES/OES_texture_float.txt).
- Das neue _Scratchpad_-Tool bietet einen bequemen Ort, um JavaScript-Code auszuprobieren.
- Die Methode `console.trace()` wurde zur [Console API](/de/docs/Web/API/Console_API) hinzugefügt ([Firefox-Bug 585956](https://bugzil.la/585956)).

## Änderungen für Mozilla- und Add-on-Entwickler

Einen Überblick über notwendige Änderungen, um Ihr Add-on mit Firefox 6 kompatibel zu machen, finden Sie unter [Add-ons für Firefox 6 aktualisieren](/de/docs/Mozilla/Firefox/Updating_add-ons_for_Firefox_6).

> [!NOTE]
> Firefox 6 erfordert die Neukompilierung von Binärkomponenten, wie dies bei allen Hauptversionen der Fall ist. Weitere Informationen finden Sie unter [Binary Interfaces](/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces).

### JavaScript-Code-Module

#### FileUtils.jsm

- Die Methode `openSafeFileOutputStream()` öffnet Dateien jetzt mit der [Verhaltenskonstante](/de/docs/XPCOM_Interface_Reference/nsIFileOutputStream#behavior_flag_constants) `DEFER_OPEN`, statt sie sofort zu öffnen.

#### XPCOMUtils.jsm

- Die neue Methode `importRelative()` ermöglicht das Laden eines JavaScript-Code-Moduls von einem Pfad relativ zum Pfad eines anderen JavaScript-Code-Moduls. Dies erleichtert die Erstellung von Modulen, die voneinander abhängen.

### XPCOM

- [`nsCOMArray<T>`](/de/docs/XPCOM_array_guide#nsCOMArray.3cT.3e) hat nun eine Methode [`RemoveObjectsAt()`](/de/docs/XPCOM_array_guide#deleting_objects), um mehrere Objekte auf einmal aus dem Array zu entfernen.

### Verwendung des DOM aus Chrome

- [Verwendung der DOM File API im Chrome-Code](/de/docs/Extensions/Using_the_DOM_File_API_in_chrome_code)
  - : Obwohl Sie die DOM File API schon immer aus dem Chrome-Code nutzen konnten, unterstützt der Konstruktor [`File`](/de/docs/Web/API/File) jetzt die Angabe eines lokalen Dateipfadestrings bei Verwendung aus Chrome. Zusätzlich können Sie die Datei mit einem `nsIFile`-Objekt spezifizieren.

### Schnittstellenänderungen

- `nsINavHistoryQueryOptions` unterstützt jetzt die Sortierung nach Häufigkeit mit den neuen Konstanten `SORT_BY_FREQUENCY_ASCENDING` und `SORT_BY_FREQUENCY_DESCENDING`.
- `nsIFilePicker` hat ein neues Attribut `nsIFilePicker.addToRecentDocs`, das angibt, dass die ausgewählte Datei zur "zuletzt verwendeten Dokumente"-Liste des Benutzers hinzugefügt werden soll, falls vorhanden. Dieses Attribut hat keinen Effekt im privaten Modus.
- Methoden des `nsINavBookmarkObserver`, die Item-ID-Parameter enthalten, benötigen jetzt ebenfalls eine GUID.
- `nsIPrefBranch.clearUserPref()` wirft keine Ausnahme mehr, wenn die angegebene Einstellung nicht existiert oder keinen benutzerspezifischen Wert hat. Stattdessen tut sie nichts.
- Die Schnittstelle `nsIMemoryReporter` bietet jetzt Unterstützung zur Kennzeichnung der Art des beschriebenen Speichers (z. B. gemappter Speicher, Heap oder Sonstiges).
- Das Attribut `stateData` von `nsISHEntry` gibt jetzt einen `nsIStructuredCloneContainer` zurück.
- `nsIURI` hat ein neues Attribut `nsIURI.ref`, das den Referenzteil (den Teil nach dem "#") der URI zurückgibt. Auch neue Methoden wie `nsIURI.cloneIgnoringRef()` und `nsIURI.equalsExceptRef()`, um Referenzteile zu ignorieren und zu vergleichen, sind verfügbar.

#### Neue Schnittstellen

- `mozIAsyncFavicons`
  - : Ein neuer Dienst, der den asynchronen Zugriff auf Favicons ermöglicht.
- `nsIEventSource`
  - : _Details folgen._
- `nsIGSettingsCollection`
  - : _Details folgen._
- `nsIGSettingsService`
  - : _Details folgen._
- `nsIHttpUpgradeListener`
  - : Die Callback-Schnittstelle zur Bearbeitung von HTTP-Upgrade-Anforderungen über die Methode `nsIHttpChannelInternal.HTTPUpgrade()`.
- `nsIStructuredCloneContainer`
  - : Ein Container für Objekte, die mit dem [strukturierten Klonalgorithmus](/de/docs/HTML/Structured_clones) serialisiert wurden.
- `nsITelemetry`
  - : Implementiert Telemetrie-Unterstützung, um die Aufzeichnung von Telemetriedaten zu ermöglichen, die für die Darstellung von Histograms für Leistungsüberwachung verwendet werden. Siehe [Firefox-Bug 649502](https://bugzil.la/649502) und [Firefox-Bug 585196](https://bugzil.la/585196).
- `nsITimedChannel`
  - : Siehe [Firefox-Bug 576006](https://bugzil.la/576006).
- `nsIWebSocketListener`
  - : Siehe [Firefox-Bug 640003](https://bugzil.la/640003).
- `nsIWebSocketProtocol`
  - : Siehe [Firefox-Bug 640003](https://bugzil.la/640003).

#### Entfernte Schnittstellen

Die folgenden Schnittstellen waren Implementierungsdetails, die nicht mehr benötigt werden:

- `nsIDOMDocumentEvent` (siehe [Firefox-Bug 655517](https://bugzil.la/655517))
- `nsIDOMDocumentTraversal` (siehe [Firefox-Bug 655514](https://bugzil.la/655514))
- `nsIDOMDocumentRange` (siehe [Firefox-Bug 655513](https://bugzil.la/655513))
- `IWeaveCrypto` (siehe [Firefox-Bug 651596](https://bugzil.la/651596))
- `nsIDOM3DocumentEvent` (siehe [Firefox-Bug 481863](https://bugzil.la/481863))
- `nsIDOMAbstractView`
- `nsILiveTitleNotificationSubject`
- `nsIPlugin` (siehe [Firefox-Bug 637253](https://bugzil.la/637253))
- `nsIPluginInstance` (siehe [Firefox-Bug 637253](https://bugzil.la/637253))
- `nsIHTMLEditRules` (siehe [Firefox-Bug 633750](https://bugzil.la/633750))
- `nsIXSLTProcessorObsolete` (siehe [Firefox-Bug 649534](https://bugzil.la/649534))

### Weitere Änderungen

- [Verwendung von Einstellungen im Anwendungscode](/de/docs/Mozilla/Preferences/Using_preferences_from_application_code)
  - : Eine neue statische API ist verfügbar, um bequem auf Einstellungen zuzugreifen; diese ist jedoch nur für Anwendungscode verfügbar und kann nicht von Add-ons verwendet werden.

## Siehe auch

{{Firefox_for_developers}}
