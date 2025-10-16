---
title: Firefox 9 Versionshinweise für Entwickler
short-title: Firefox 9
slug: Mozilla/Firefox/Releases/9
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Firefox 9 wurde für Windows am 20. Dezember 2011 veröffentlicht. Die Mac- und Linux-Version 9.0.1, die einen in letzter Minute entdeckten Absturzfehler behebt, wurden am 21. Dezember 2011 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das `value`-Attribut von {{ HTMLElement("li") }} kann jetzt negativ sein. Bisher wurden negative Werte in 0 umgewandelt.
- Sie können jetzt [die Start- und Stop-Zeit von Medien](/de/docs/Web/Media/Guides/Audio_and_video_delivery#specifying_playback_range) in der URI der Medien festlegen, wenn Sie {{ HTMLElement("audio") }} und {{ HTMLElement("video") }}-Elemente verwenden.
- {{ HTMLElement("input") }}- und {{ HTMLElement("textarea") }}-Elemente berücksichtigen jetzt den Wert des `lang`-Attributs, wenn sie den Rechtschreibprüfer aufrufen.
- Firefox auf Android ermöglicht es Nutzern jetzt, Fotos mit der Kamera ihres Telefons aufzunehmen, ohne den Browser zu verlassen, wenn das {{ HTMLElement("input") }}-Element mit `type="file"` und `accept="image/*"` verwendet wird.
- PNG-ICO-Bilder im Windows Vista-Stil werden jetzt unterstützt.
- Das Zeichnen von Bildern, die das [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)-Attribut verwenden, um CORS-Zugriff anzufordern, verfälscht die Leinwand nicht mehr fälschlicherweise [wenn CORS gewährt wird](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases).
- Der Wert des [`rowspan`](/de/docs/Web/HTML/Reference/Elements/td#rowspan)-Attributs kann jetzt bis zu 65.534 betragen, anstelle von 8.190.

### CSS

- Die {{ cssxref("font-stretch") }}-Eigenschaft wird jetzt unterstützt.
- Die {{ cssxref("columns") }}-Eigenschaft wird jetzt mit dem `-moz`-Präfix unterstützt. Dies ist eine Kurzform für die folgenden Eigenschaften: {{ cssxref("column-width") }} und {{ cssxref("column-count") }}.
- Wenn ein Stylesheet, das mithilfe des {{ HTMLElement("link") }}-Elements eingefügt wurde, vollständig geladen und analysiert wurde (aber noch nicht auf das Dokument angewendet wurde), wird jetzt ein [`load` event](/de/docs/Web/HTML/Reference/Elements/link#stylesheet_load_events) ausgelöst. Tritt ein Fehler beim Verarbeiten eines Stylesheets auf, wird ein `error`-Ereignis ausgelöst.
- Sie können jetzt Überlaufseinstellungen für die linken und rechten Kanten von Inhalten mit einer neuen Zwei-Werte-Syntax für {{ cssxref("text-overflow") }} angeben.

### JavaScript

_Keine Änderung._

### DOM

- [Vollbildmodus verwenden](/de/docs/Web/API/Fullscreen_API)
  - : Die neue Vollbild-API bietet die Möglichkeit, Inhalte im Vollbildmodus ohne Browseroberfläche zu präsentieren. Dies ist ideal für Videos und Spiele. Diese API ist derzeit experimentell und mit einem Präfix versehen.

<!---->

- Die Methode [`Node.contains()`](/de/docs/Web/API/Node/contains) ist jetzt implementiert; Sie können damit feststellen, ob ein bestimmter Knoten ein Nachkomme eines anderen Knotens ist.
- Das Attribut [`Node.parentElement`](/de/docs/Web/API/Node/parentElement) wurde implementiert; dies gibt das übergeordnete [`Element`](/de/docs/Web/API/Element) eines DOM-Knotens zurück oder `null`, wenn das übergeordnete Element kein Element ist.
- DOM Level 3 [Kompensationsereignisse](/de/docs/Web/API/CompositionEvent) werden jetzt unterstützt.
- Das Attribut [`Document.scripts`](/de/docs/Web/API/Document/scripts) wurde implementiert; es gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) aller {{ HTMLElement("script") }}-Elemente im Dokument zurück.
- Die Methode [`Document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported) wurde implementiert.
- Die Menge an Ereignissen, die für {{ HTMLElement("body") }}-Elemente überwacht werden können, wurde überarbeitet, um dem neuesten Entwurf der HTML5-Spezifikation zu entsprechen. Die Liste der Ereignisse im [DOM-Ereignisleitfaden](/de/docs/Web/API/Document_Object_Model/Events#event_index) spiegelt wider, welche Ereignisse für {{ HTMLElement("body") }}-Elemente überwacht werden können.
- Das Ereignis `readystatechange` wird jetzt nur noch auf dem [`Document`](/de/docs/Web/API/Document) ausgelöst, wie beabsichtigt.
- Ereignis-Handler werden jetzt als standardmäßige IDL-Schnittstellen implementiert. In den meisten Fällen wirkt sich dies nicht auf den Inhalt aus, aber es gibt Ausnahmen.
- Ein neuer Antworttyp, `"moz-json"`, wurde zu `XMLHttpRequest` hinzugefügt, der `XMLHttpRequest` die automatische Analyse von {{Glossary("JSON", "JSON")}}-Strings ermöglicht; wenn Sie diesen Typ anfordern, wird ein zurückgegebener JSON-String analysiert, sodass der Wert der `response`-Eigenschaft das resultierende JavaScript-Objekt ist.
- [`XMLHttpRequest` "progress"-Ereignisse](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress) werden nun zuverlässig für jeden empfangenen Datenblock gesendet; in der Vergangenheit war es möglich, dass der letzte empfangene Datenblock kein "progress"-Ereignis auslöste. Jetzt können Sie den Fortschritt verfolgen, indem Sie nur noch "progress"-Ereignisse beobachten, anstatt auch "load"-Ereignisse überwachen zu müssen, um den Empfang des letzten Datenblocks zu erkennen.
- Früher löste das Aufrufen von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) mit einem `null`-Listener eine Ausnahme aus. Jetzt wird es ohne Fehler und ohne Wirkung zurückgegeben.
- Die neue Eigenschaft [`navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack) ermöglicht es Ihrem Inhalt, leicht festzustellen, ob der Benutzer seine Nicht-Verfolgen-Präferenz aktiviert hat; wenn dieser Wert "yes" lautet, sollten Sie den Benutzer nicht verfolgen.
- [`Range`](/de/docs/Web/API/Range) und [`Selection`](/de/docs/Web/API/Selection)-Objekte verhalten sich jetzt gemäß ihren Spezifikationen, wenn [`splitText()`](/de/docs/Web/API/Text/splitText) und [`normalize()`](/de/docs/Web/API/Node/normalize) aufgerufen werden.
- Der Wert von [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument) für Doctype-Knoten ist jetzt das Dokument, für das [`createDocumentType()`](/de/docs/Web/API/DOMImplementation/createDocumentType) aufgerufen wurde, um den Knoten zu erstellen, anstatt `null`.
- `window.navigator.taintEnabled` wurde entfernt; es wird seit vielen Jahren nicht mehr unterstützt.

### Workers

- In Firefox 8 waren Workers, die in Blob-URLs implementiert waren, fehlerhaft, und funktionieren ab Firefox 9 wieder.

### WebGL

- Die [WebGL](/de/docs/Web/API/WebGL_API)-Kontextattribute `drawingBufferWidth` und `drawingBufferHeight` werden jetzt unterstützt.

### MathML

- Der nicht standardmäßige `restyle`-Wert für das `actiontype`-Attribut bei {{ MathMLElement("maction") }}-Elementen wurde entfernt.
- Obwohl noch nicht unterstützt, bricht die Verwendung des `mlabeledtr`-Elements nicht mehr das gesamte Rendering. Siehe [Firefox Bug 689641](https://bugzil.la/689641) für Fortschritte bei der tatsächlichen Unterstützung dieses Elements.

### Netzwerk

- Sie können jetzt den Inhalt von [JavaScript-typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) (d.h. den Inhalt eines [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)-Objekts) [mithilfe von XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Sending_and_Receiving_Binary_Data) senden.
- WebSocket-Verbindungen erlauben jetzt Nicht-Zeichen in ansonsten gültigen UTF-8-Datenrahmen statt zu scheitern.
- Der HTTP `Accept`-Header für XSLT-Anfragen wurde aus Gründen der Einfachheit auf `*/*` geändert. Da das Abrufen von XSLT ohnehin immer auf `*/*` zurückgefallen ist, war es sinnvoll, die anfängliche Anfrage zu vereinfachen.
- Versuche eines Servers, den Benutzer mit den Antwortcodes `301 Moved Permanently` oder `307 Temporary Redirect` auf eine `javascript:`-URI umzuleiten, führen jetzt zu einem "bad connection"-Fehler, anstatt tatsächlich weiterzuleiten. Dies verhindert bestimmte Arten von Cross-Site-Scripting-Angriffen.
- Inhalt, der mit einem leeren {{ HTTPHeader("Content-Disposition") }} bereitgestellt wurde, wurde bisher so behandelt, als wäre das {{ HTTPHeader("Content-Disposition") }} "attachment"; dies funktionierte nicht immer wie erwartet. Diese werden jetzt so behandelt, als wäre das {{ HTTPHeader("Content-Disposition") }} "inline".
- Die standardmäßige maximale Größe eines Elements im Festplattencache wurde auf 50 MB erhöht; zuvor wurden nur bis zu 5 MB große Elemente zwischengespeichert.

### Entwicklertools

- Die Webkonsole unterstützt jetzt grundlegende [String-Ersetzungen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#string-substitutions) in ihren Protokollierungsmethoden.
- Sie können jetzt [visuell verschachtelte Blöcke von Ausgaben erzeugen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#using-groups-in-the-console) in der Webkonsole, um die Lesbarkeit zu erhöhen.

## Änderungen für Mozilla- und Add-on-Entwickler

Siehe [Aktualisierung von Add-ons für Firefox 9](/de/docs/Mozilla/Firefox/Releases/9/Updating_add-ons) für einen Überblick über die Änderungen, die Sie möglicherweise vornehmen müssen, um Ihre Add-ons in Firefox 9 zum Laufen zu bringen.

### XUL

- Das `<xul:tab>`-Element besitzt jetzt ein `pending`-Attribut, dessen Wert `true` ist, wenn der Tab gerade vom Sitzungsmanager wiederhergestellt wird. Dies kann zum Stylen des Tabs in Themes verwendet werden. Das Attribut ist bei Tabs, die nicht ausstehen, nicht vorhanden.
- Das `<xul:tab>`-Element hat jetzt ein `unread`-Attribut, dessen Wert `true` ist, wenn sich der Tab seit dem letzten Mal, als er der aktive Tab war, geändert hat oder wenn er seit Beginn der aktuellen Sitzung nicht ausgewählt wurde. Das Attribut ist bei Tabs, die nicht ungelesen sind, nicht vorhanden.
- Sie können jetzt ein `<xul:panel>` als Ziehbild für DOM-Drag-and-Drop-Operationen verwenden. Dies ermöglicht die Nutzung der [Standard-Drag-&-Drop-API](/de/docs/Web/API/HTML_Drag_and_Drop_API) für das Ziehen und Ablegen von XUL-Inhalten.
- Die `appendNotification`-Methode des `<xul:notificationbox>`-Elements ermöglicht es jetzt, einen Rückruf anzugeben, der für interessante Ereignisse im Zusammenhang mit der Benachrichtigungsbox aufgerufen wird. Derzeit ist das einzige Ereignis "removed", das Ihnen mitteilt, dass die Box aus ihrem Fenster entfernt wurde.

### Änderungen an JavaScript-Code-Modulen

- `FileUtils.jsm` hat jetzt einen `File`-Konstruktor, der ein `nsIFile`-Objekt zurückgibt, das eine Datei darstellt, die durch ihren Pfad angegeben wird.

### Dienständerungen

- Der Inhaltspräferenzdienst verarbeitet jetzt das private Browsing (siehe [Firefox Bug 679784](https://bugzil.la/679784)).

### NSPR

- NSPR hat jetzt ein "Anhänge"-Modul, das es Ihnen ermöglicht, neue Daten an das Ende eines vorhandenen Protokolls anzuhängen.

### Schnittstellenänderungen

#### Entfernte Schnittstellen

- `nsIGlobalHistory3` wurde während der Rationalisierung des Places- und DocShell-Codes entfernt.

#### Verschiedene Schnittstellenänderungen

- Die `nsISound`-Schnittstelle hat eine neue Konstante, `EVENT_EDITOR_MAX_LEN`. Diese ermöglicht das Abspielen des Systemklangs, wenn mehr als die maximal erlaubte Anzahl von Zeichen in ein Textfeld eingegeben wird. Derzeit wird dies nur unter Windows verwendet.
- Die `nsIScriptError2`-Schnittstelle hat neue `timeStamp`- und `innerWindowID`-Eigenschaften; außerdem nimmt die Methode `initWithWindowID()` jetzt eine innere Fenster-ID statt einer äußeren Fenster-ID.
- Das `nsIBidiKeyboard.haveBidiKeyboards`-Attribut wurde hinzugefügt; dies ermöglicht es Ihnen festzustellen, ob das System mindestens eine Tastatur für jede Richtung installiert hat: von links nach rechts und von rechts nach links.
- Das neue `nsIEditor.isSelectionEditable`-Attribut ermöglicht es Ihnen festzustellen, ob der aktuelle Auswahlanker bearbeitbar ist. Dies hilft, Fälle zu unterstützen, in denen nur Teile des Dokuments bearbeitbar sind, indem Sie sehen können, ob sich die aktuelle Auswahl in einem bearbeitbaren Abschnitt befindet.
- Die Methoden `nsIBrowserHistory.registerOpenPage()` und `nsIBrowserHistory.unregisterOpenPage()` wurden im Zuge einer Leistungsüberholung im Places-System entfernt. Sie können stattdessen die entsprechenden Methoden in `mozIPlacesAutoComplete` verwenden.
- Die Methode `nsIDOMWindowUtils.wrapDOMFile()` wurde hinzugefügt; diese gibt ein DOM- [`File`](/de/docs/Web/API/File)-Objekt für eine bestimmte `nsIFile` zurück.
- Die Methode `nsIChromeFrameMessageManager.removeDelayedFrameScript()` wurde hinzugefügt, um das Entfernen von verzögert geladenen Skripten zu unterstützen. Bootstrapped-Add-ons sollten dies beim Herunterfahren verwenden, um alle Skripte zu entfernen, die sie mit dem verzögerten Ladeflag gesetzt unter Verwendung von `nsIChromeFrameMessageManager.loadFrameScript()` geladen haben. Dies wird Add-ons als `browser.messageManager.removeDelayedFrameScript()` zur Verfügung gestellt.
- Die `nsIAppStartup`-Schnittstelle hat ein neues `interrupted`-Attribut, das angibt, ob der Startprozess zu irgendeinem Zeitpunkt durch eine interaktive Eingabeaufforderung unterbrochen wurde. Dies kann nützlich sein, um beispielsweise beim Timing der Starts während der Leistungsevaluierung Sitzungen auszuschließen, die unterbrochen wurden.
- Die `nsIEditorSpellCheck`-Schnittstelle wurde überarbeitet, um die Auswahl der Rechtschreibprüfer-Wörterbücher pro Site zu unterstützen.

### IDL-Parser

Der IDL-Parser unterstützt nicht mehr das nie vollständig implementierte Konzept von einzigartigen Pointern.

### Änderungen im Build-System

- Die `--enable-application=standalone`-Option für den Standalone-Build von XPConnect wurde entfernt; sie funktioniert ohnehin seit 2007 nicht mehr.
- Die Unterstützung für den Standalone-Build von Necko und Transformiix XSLT wurde entfernt; Sie können `--enable-application=network` oder `--enable-application=content/xslt` nicht mehr verwenden.
- Das Build-System sucht jetzt nach `.mozconfig` unter `$topsrcdir/.mozconfig` oder `$topsrcdir/mozconfig` und nirgendwo anders, es sei denn, Sie überschreiben den `.mozconfig`-Pfad mit der `MOZCONFIG`-Umgebungsvariable.
- Das `xpidl`-Dienstprogramm wurde im SDK durch `pyxpidl` ersetzt.

### Sonstige Änderungen

- Der Rechtschreibprüfer hat jetzt kein willkürliches 130-Zeichen-Wortlängenlimit mehr für die Länge von Wörtern, die er zu prüfen versucht. Dieses Limit war zuvor vorhanden, um Abstürze im Rechtschreibprüfer zu verhindern, aber die zugrunde liegenden Fehler wurden mittlerweile behoben.
- Sie können jetzt Komponenten registrieren, um dem [`window.navigator`](/de/docs/Web/API/Window/navigator)-Objekt Eigenschaften hinzuzufügen, indem Sie die Kategorie "JavaScript-navigator-property" verwenden.
