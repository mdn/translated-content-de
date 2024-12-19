---
title: Firefox 9 für Entwickler
slug: Mozilla/Firefox/Releases/9
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{FirefoxSidebar}}

Firefox 9 wurde am 20. Dezember 2011 für Windows veröffentlicht. Die Mac- und Linux-Version 9.0.1, welche einen kurz vor Veröffentlichung entdeckten Absturzfehler behebt, wurden am 21. Dezember 2011 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das `value` Attribut von {{ HTMLElement("li") }} kann nun negativ sein. Vorher wurden negative Werte zu 0 konvertiert.
- Sie können nun [die Start- und Endzeit von Medien angeben](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio#specifying_playback_range), indem Sie die URI des Mediums verwenden, wenn Sie die {{ HTMLElement("audio") }} und {{ HTMLElement("video") }} Elemente nutzen.
- {{ HTMLElement("input") }} und {{ HTMLElement("textarea") }} Elemente [respektieren jetzt den Wert des `lang` Attributs](/de/docs/Web/HTML/Global_attributes/spellcheck#controlling_the_spellchecker_language), wenn der Rechtschreibprüfer aufgerufen wird.
- Firefox auf Android ermöglicht es Benutzern jetzt, Fotos mit der Kamera ihres Handys aufzunehmen, ohne den Browser zu verlassen, wenn das {{ HTMLElement("input") }} Element mit `type="file"` und `accept="image/*"` verwendet wird.
- Windows Vista Stil PNG ICO Bilder werden jetzt unterstützt.
- Bilder, die das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin) Attribut verwenden, um CORS-Zugriff anzufordern, verursachen beim Gewähren von CORS nicht mehr fälschlicherweise [eine Verunreinigung der Leinwand](/de/docs/Web/HTML/CORS_enabled_image#what_is_a_.22tainted.22_canvas.3f).
- Der Wert des [`rowspan`](/de/docs/Web/HTML/Element/td#rowspan) Attributs kann jetzt so groß wie 65.534 sein, im Vergleich zu vorher 8190.

### CSS

- Die {{ cssxref("font-stretch") }} Eigenschaft wird jetzt unterstützt.
- Die {{ cssxref("columns") }} Eigenschaft wird jetzt unterstützt, mit dem `-moz` Präfix. Dies ist eine Kurzform für die folgenden Eigenschaften: {{ cssxref("column-width") }} und {{ cssxref("column-count") }}.
- Wenn ein Stylesheet, das mit dem {{ HTMLElement("link") }} Element eingebunden ist, vollständig geladen und geparst wurde (aber noch nicht auf das Dokument angewendet), wird nun ein [`load` Ereignis](/de/docs/Web/HTML/Element/link#stylesheet_load_events) ausgelöst. Auch, wenn ein Fehler beim Verarbeiten eines Stylesheets auftritt, wird ein `error` Ereignis ausgelöst.
- Sie können nun Überlauf-Einstellungen für beide Ränder von Inhalten mittels einer neuen Syntax mit zwei Werten für {{ cssxref("text-overflow") }} spezifizieren.

### JavaScript

_Keine Änderung._

### DOM

- [Verwendung des Vollbildmodus](/de/docs/Web/API/Fullscreen_API)
  - : Die neue Vollbild-API bietet eine Möglichkeit, Inhalte im gesamten Bildschirm darzustellen, ohne Benutzeroberfläche des Browsers. Dies ist ideal für Video und Spiele. Diese API ist derzeit experimentell und mit Präfix versehen.

<!---->

- Die Methode [`Node.contains()`](/de/docs/Web/API/Node/contains) ist jetzt implementiert; sie lässt Sie feststellen, ob ein gegebenes Knoten ein Nachkomme eines anderen Knotens ist.
- Das Attribut [`Node.parentElement`](/de/docs/Web/API/Node/parentElement) wurde implementiert; es gibt das übergeordnete [`Element`](/de/docs/Web/API/Element) eines DOM Knotens zurück oder `null`, wenn das übergeordnete kein Element ist.
- DOM Level 3 [Kompositionsereignisse](/de/docs/Web/API/CompositionEvent) werden jetzt unterstützt.
- Das Attribut [`Document.scripts`](/de/docs/Web/API/Document/scripts) wurde implementiert; es gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) von allen {{ HTMLElement("script") }} Elementen im Dokument zurück.
- Die Methode [`Document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported) wurde implementiert.
- Die Anzahl der Ereignisse, die auf {{ HTMLElement("body") }} Elemente gehört werden können, wurde überarbeitet, um dem neuesten Entwurf der HTML5 Spezifikation zu entsprechen. Die Liste der Ereignisse in der [DOM-Ereignis-Referenz](/de/docs/Web/Events) zeigt, welche Ereignisse auf {{ HTMLElement("body") }} gehört werden können.
- Das `readystatechange` Ereignis wird jetzt nur auf dem [`Document`](/de/docs/Web/API/Document) ausgelöst, wie vorgesehen.
- Ereignishandler sind jetzt als Standard-IDL-Schnittstellen implementiert. In den meisten Fällen wird dies keine Auswirkungen auf Inhalte haben, es gibt jedoch Ausnahmen.
- Ein neuer Antworttyp, "`moz-json`", wurde zu `XMLHttpRequest` hinzugefügt, der es `XMLHttpRequest` ermöglicht, {{Glossary("JSON", "JSON")}} Zeichenfolgen automatisch zu parsen; wenn Sie diesen Typ anfordern, wird eine zurückgegebene JSON-Zeichenfolge geparst, sodass der Wert der `response` Eigenschaft das resultierende JavaScript-Objekt ist.
- [`XMLHttpRequest` "progress" Ereignisse](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress) werden jetzt zuverlässig für jedes empfangene Datenstück gesendet; in der Vergangenheit war es möglich, dass das letzte empfangene Datenstück kein "progress" Ereignis auslöste. Jetzt können Sie den Fortschritt verfolgen, indem Sie nur den "progress" Ereignissen folgen, anstatt auch "load" Ereignisse überwachen zu müssen, um den Empfang des letzten Datenstücks zu erkennen.
- In der Vergangenheit führte das Aufrufen von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) mit einem `null` Listener zu einer Ausnahme. Jetzt gibt es ohne Fehler zurück und hat keine Wirkung.
- Die neue [`navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack) Eigenschaft ermöglicht es Ihren Inhalten einfach festzustellen, ob der Benutzer seine Anti-Tracking-Präferenz aktiviert hat; wenn dieser Wert "yes" ist, sollten Sie den Benutzer nicht verfolgen.
- [`Range`](/de/docs/Web/API/Range) und [`Selection`](/de/docs/Web/API/Selection) Objekte verhalten sich jetzt gemäß ihrer Spezifikationen, wenn [`splitText()`](/de/docs/Web/API/Text/splitText) und [`normalize()`](/de/docs/Web/API/Node/normalize) aufgerufen werden.
- Der Wert von [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument) für Doctype-Knoten ist jetzt das Dokument, auf dem [`createDocumentType()`](/de/docs/Web/API/DOMImplementation/createDocumentType) aufgerufen wurde, um den Knoten zu erstellen, anstatt `null`.
- `window.navigator.taintEnabled` wurde entfernt; es wurde seit vielen Jahren nicht mehr unterstützt.

### Arbeiter

- Arbeiter, die in Blob-URLs implementiert wurden, waren in Firefox 8 fehlerhaft und funktionieren ab Firefox 9 wieder.

### WebGL

- Die Attribute des [WebGL](/de/docs/Web/API/WebGL_API) Kontexts `drawingBufferWidth` und `drawingBufferHeight` werden jetzt unterstützt.

### MathML

- Der nicht-standardisierte `restyle` Wert für das `actiontype` Attribut auf {{ MathMLElement("maction") }} Elementen wurde entfernt.
- Obwohl noch nicht unterstützt, bricht die Verwendung des `mlabeledtr` Elements nicht mehr das gesamte Rendering. Siehe [Firefox Bug 689641](https://bugzil.la/689641) für Fortschritte zur tatsächlichen Unterstützung dieses Elements.

### Netzwerk

- Sie können jetzt den Inhalt von [JavaScript typisierten Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) (d.h. den Inhalt eines [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) Objekts) [mit XMLHttpRequest senden](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#sending_typed_arrays_as_binary_data).
- WebSocket-Verbindungen erlauben jetzt, dass Nicht-Zeichen in ansonsten gültigen UTF-8-Datenrahmen empfangen werden, anstatt zu scheitern.
- Der HTTP `Accept` Header für XSLT-Anfragen wurde aus Gründen der Einfachheit auf `*/*` geändert. Da der Abruf von XSLT ohnehin immer auf `*/*` zurückgefallen ist, ergab es Sinn, die anfängliche Anfrage zu vereinfachen.
- Versuche eines Servers, die Antwortcodes `301 Moved Permanently` oder `307 Temporary Redirect` zu verwenden, um den Benutzer zu einem `javascript:` URI umzuleiten, führen jetzt [zu einem "bad connection" Fehler](/de/docs/Web/HTTP#more_on_redirection_responses), anstatt tatsächlich umzuleiten. Dies verhindert bestimmte Arten von Cross-Site-Scripting-Angriffen.
- Inhalte, die mit einem leeren {{ HTTPHeader("Content-Disposition") }} bereitgestellt werden, wurden zuvor so behandelt, als ob die {{ HTTPHeader("Content-Disposition") }} "attachment" wäre; dies funktionierte nicht immer wie erwartet. Diese werden jetzt so gehandhabt, als ob die {{ HTTPHeader("Content-Disposition") }} "inline" wäre.
- Die standardmäßige maximale Größe eines Elements im Festplatten-Cache wurde auf 50 MB erhöht; vorher wurden nur Elemente bis zu 5 MB zwischengespeichert.

### Entwickler-Tools

- Die Webkonsole unterstützt jetzt grundlegende [Zeichenfolgen-Ersetzungen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#string-substitutions) in ihren Logging-Methoden.
- Sie können jetzt [visuell geschachtelte Blöcke von Ausgaben erstellen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#using-groups-in-the-console) in der Webkonsole, um das Lesen zu erleichtern.

## Änderungen für Mozilla- und Add-on-Entwickler

Siehe [Aktualisierung von Add-ons für Firefox 9](/de/docs/Mozilla/Firefox/Releases/9/Updating_add-ons) für einen Überblick über die Änderungen, die Sie vornehmen müssen, um Ihre Add-ons in Firefox 9 zum Laufen zu bringen.

### XUL

- Das `<xul:tab>` Element hat jetzt ein `pending` Attribut, dessen Wert `true` ist, wenn die Registerkarte durch den Sitzungswiederherstellungsdienst wiederhergestellt wird. Dies kann zum Stylen der Registerkarte in Themen verwendet werden. Das Attribut ist bei Registerkarten, die nicht ausstehend sind, nicht vorhanden.
- Das `<xul:tab>` Element hat jetzt ein `unread` Attribut, dessen Wert `true` ist, wenn sich die Registerkarte seit ihrer letzten Aktivierung geändert hat oder wenn sie nach Beginn der aktuellen Sitzung nicht ausgewählt wurde. Das Attribut ist bei Registerkarten, die nicht ungelesen sind, nicht vorhanden.
- Es kann jetzt ein `<xul:panel>` als Ziehbild für Drag & Drop-Operationen im DOM verwendet werden. Dies ermöglicht es, die standardmäßige Drag & Drop-API für [Drag & Drop von XUL-Inhalten](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#using_xul_panels_as_drag_images) zu verwenden.
- Die `appendNotification` Methode des `<xul:notificationbox>` Elements ermöglicht es nun, eine Rückruf-Funktion zu spezifizieren, die bei interessanten Ereignissen im Zusammenhang mit der Benachrichtigungsbox aufgerufen wird. Derzeit ist das einzige Ereignis "removed", das Ihnen mitteilt, dass die Box aus ihrem Fenster entfernt wurde.

### JavaScript Code-Modul-Änderungen

- `FileUtils.jsm` hat jetzt einen `File` Konstruktor, der ein `nsIFile` Objekt zurückgibt, das eine durch ihren Dateipfad angegebene Datei repräsentiert.

### Dienständerungen

- Der Präferenzdienst für Inhalte behandelt jetzt den privaten Modus beim Durchsuchen (siehe [Firefox Bug 679784](https://bugzil.la/679784)).

### NSPR

- NSPR hat jetzt ein "Anhänge"-Modul, das es ermöglicht, neue Daten an das Ende eines vorhandenen Protokolls anzuhängen.

### Schnittstellenänderungen

#### Entfernte Schnittstellen

- `nsIGlobalHistory3` wurde während der Straffung des Places und DocShell Codes entfernt.

#### Verschiedene Schnittstellenänderungen

- Die `nsISound` Schnittstelle hat eine neue Konstante, `EVENT_EDITOR_MAX_LEN`. Dies ermöglicht die Wiedergabe des Systemklangs, wenn mehr Zeichen als erlaubt in ein Textfeld eingegeben werden. Derzeit wird dies nur unter Windows verwendet.
- Die `nsIScriptError2` Schnittstelle hat neue `timeStamp` und `innerWindowID` Eigenschaften; außerdem nimmt die `initWithWindowID()` Methode jetzt eine innere Fenster-ID anstelle einer äußeren Fenster-ID entgegen.
- Das Attribut `nsIBidiKeyboard.haveBidiKeyboards` wurde hinzugefügt; damit können Sie feststellen, ob das System mindestens eine Tastatur für jede Richtung installiert hat: von links nach rechts und von rechts nach links.
- Das neue Attribut `nsIEditor.isSelectionEditable` ermöglicht es Ihnen festzustellen, ob der aktuelle Auswahlanker bearbeitbar ist. Dies hilft, Fälle zu unterstützen, in denen nur Teile des Dokuments bearbeitbar sind, indem Sie erkennen können, ob die aktuelle Auswahl in einem bearbeitbaren Abschnitt liegt.
- Die Methoden `nsIBrowserHistory.registerOpenPage()` und `nsIBrowserHistory.unregisterOpenPage()` wurden im Rahmen einer Leistungsüberholung des Places-Systems entfernt. Stattdessen können Sie die entsprechenden Methoden in `mozIPlacesAutoComplete` verwenden.
- Die Methode `nsIDOMWindowUtils.wrapDOMFile()` wurde hinzugefügt; diese gibt ein DOM [`File`](/de/docs/Web/API/File) Objekt für ein gegebenes `nsIFile` zurück.
- Die Methode `nsIChromeFrameMessageManager.removeDelayedFrameScript()` wurde hinzugefügt, um das Entfernen verzögerter Ladeskripte zu unterstützen. Bootstrapping-Add-ons sollten dies beim Herunterfahren verwenden, um alle Skripte zu entfernen, die es mit `nsIChromeFrameMessageManager.loadFrameScript()` mit dem verzögerten Ladeflag geladen hat. Dies ist für Add-ons als `browser.messageManager.removeDelayedFrameScript()` zugänglich.
- Die `nsIAppStartup` Schnittstelle hat ein neues `interrupted` Attribut, das Ihnen mitteilt, ob der Startvorgang irgendwann durch eine interaktive Eingabeaufforderung unterbrochen wurde. Dies kann beispielsweise hilfreich sein, wenn Sie Starts während der Leistungsbewertung zeitlich erfassen, um Zahlen von unterbrochenen Sitzungen herauszufiltern.
- Die `nsIEditorSpellCheck` Schnittstelle wurde überarbeitet, um die Auswahl von Rechtschreibprüfungswörterbüchern pro Seite zu unterstützen.

### IDL Parser

Der IDL Parser enthält keine Unterstützung mehr für das nie vollständig implementierte Konzept von eindeutigen Zeigern.

### Buildsystemänderungen

- Die Option `--enable-application=standalone` zum Bauen von standalone XPConnect wurde entfernt; es hat seit 2007 sowieso nicht mehr funktioniert.
- Die Unterstützung für den unabhängigen Bau von Necko und Transformiix XSLT wurde entfernt; Sie können nicht länger `--enable-application=network` oder `--enable-application=content/xslt` verwenden.
- Das Buildsystem sucht jetzt nach `.mozconfig` in `$topsrcdir/.mozconfig` oder `$topsrcdir/mozconfig` und nirgendwo sonst, es sei denn, Sie überschreiben den `.mozconfig` Pfad mit der `MOZCONFIG` Umgebungsvariablen.
- Das `xpidl` Dienstprogramm wurde im SDK durch `pyxpidl` ersetzt.

### Andere Änderungen

- Der Rechtschreibprüfer hat kein willkürliches Limit von 130 Zeichen mehr für die Wortlänge, die er versucht zu überprüfen. Dieses Limit war zuvor vorhanden, um Abstürze zu verhindern, die im Rechtschreibprüfer auftraten, aber die zugrunde liegenden Fehler wurden inzwischen behoben.
- Sie können jetzt Komponenten registrieren, um Funktionen zu dem [`window.navigator`](/de/docs/Web/API/Window/navigator) Objekt hinzuzufügen, indem Sie die Kategorie "JavaScript-navigator-property" verwenden.

## Siehe auch

{{Firefox_for_developers}}
