---
title: Firefox 9 für Entwickler
slug: Mozilla/Firefox/Releases/9
l10n:
  sourceCommit: d681d0262045649aefa02efb937ff5f22b6e3b2a
---

{{FirefoxSidebar}}

Firefox 9 wurde am 20. Dezember 2011 für Windows veröffentlicht. Die Version 9.0.1 für Mac und Linux, die einen in letzter Minute entdeckten Absturzfehler behebt, wurde am 21. Dezember 2011 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das `value`-Attribut von {{ HTMLElement("li") }} kann jetzt negativ sein. Zuvor wurden negative Werte in 0 umgewandelt.
- Sie können jetzt [Anfangs- und Endzeit eines Mediums in der URI festlegen](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content#specifying_playback_range), wenn Sie die {{ HTMLElement("audio") }} und {{ HTMLElement("video") }} Elemente verwenden.
- {{ HTMLElement("input") }} und {{ HTMLElement("textarea") }} Elemente [beachten jetzt den Wert des `lang`-Attributs](/de/docs/Web/HTML/Global_attributes/spellcheck#controlling_the_spellchecker_language), wenn die Rechtschreibprüfung aufgerufen wird.
- Firefox auf Android ermöglicht es Benutzern jetzt, Fotos mit der Kamera ihres Telefons aufzunehmen, ohne den Browser zu verlassen, wenn das {{ HTMLElement("input") }} Element mit `type="file"` und `accept="image/*"` verwendet wird.
- Windows Vista-Style PNG ICO-Bilder werden jetzt unterstützt.
- Das Zeichnen von Bildern, die das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Attribut verwenden, um CORS-Zugriff anzufordern, führt nicht mehr fälschlicherweise dazu, [das Canvas zu beschädigen](/de/docs/Web/HTML/CORS_enabled_image#what_is_a_.22tainted.22_canvas.3f), wenn CORS gewährt wird.
- Der Wert des [`rowspan`](/de/docs/Web/HTML/Element/td#rowspan)-Attributs kann nun bis zu 65.534 groß sein, gegenüber vorher 8190.

### CSS

- Die {{ cssxref("font-stretch") }} Eigenschaft wird nun unterstützt.
- Die {{ cssxref("columns") }} Eigenschaft wird nun unterstützt, mit dem `-moz`-Präfix. Dies ist eine Abkürzung für die folgenden Eigenschaften: {{ cssxref("column-width") }} und {{ cssxref("column-count") }}.
- Wenn ein Stylesheet, das mit dem {{ HTMLElement("link") }} Element eingebunden wurde, vollständig geladen und geparst (aber noch nicht auf das Dokument angewendet) ist, wird jetzt ein [`load`-Ereignis](/de/docs/Web/HTML/Element/link#stylesheet_load_events) ausgelöst. Wenn beim Verarbeiten eines Stylesheets ein Fehler auftritt, wird auch ein `error`-Ereignis ausgelöst.
- Sie können jetzt Überlaufeinstellungen für sowohl die linke als auch die rechte Kante von Inhalten mit einer neuen Syntax mit zwei Werten für {{ cssxref("text-overflow") }} festlegen.

### JavaScript

_Keine Änderung._

### DOM

- [Verwendung des Vollbildmodus](/de/docs/Web/API/Fullscreen_API)
  - : Die neue Vollbild-API bietet eine Möglichkeit, Inhalte auf dem gesamten Bildschirm darzustellen, ohne Browser-Oberfläche. Dies ist ideal für Video und Spiele. Diese API ist derzeit experimentell und mit Präfix.

<!---->

- Die Methode [`Node.contains()`](/de/docs/Web/API/Node/contains) ist nun implementiert; sie ermöglicht es Ihnen, zu bestimmen, ob ein bestimmter Knoten ein Nachfolger eines anderen Knotens ist.
- Das Attribut [`Node.parentElement`](/de/docs/Web/API/Node/parentElement) wurde implementiert; es gibt das übergeordnete [`Element`](/de/docs/Web/API/Element) eines DOM-Knotens oder `null` zurück, wenn das übergeordnete Element kein Element ist.
- DOM Level 3 [Kompositionsevents](/de/docs/Web/API/CompositionEvent) werden jetzt unterstützt.
- Das Attribut [`Document.scripts`](/de/docs/Web/API/Document/scripts) wurde implementiert; es liefert eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) aller {{ HTMLElement("script") }} Elemente im Dokument.
- Die Methode [`Document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported) wurde implementiert.
- Das Set von Events, die für {{ HTMLElement("body") }} Elemente abgehört werden können, wurde überarbeitet, um mit dem neuesten Entwurf der HTML5-Spezifikation übereinzustimmen. Die Liste der Ereignisse in der [DOM-Event-Referenz](/de/docs/Web/Events) spiegelt wider, welche Ereignisse auf {{ HTMLElement("body") }} gehört werden können.
- Das `readystatechange`-Ereignis wird jetzt nur noch auf dem [`Document`](/de/docs/Web/API/Document) ausgelöst, wie vorgesehen.
- Event-Handler werden jetzt als standardisierte IDL-Schnittstellen implementiert. In den meisten Fällen wird dies keinen Einfluss auf den Inhalt haben, es gibt jedoch Ausnahmen.
- Ein neuer Antworttyp, "`moz-json`", wurde zu `XMLHttpRequest` hinzugefügt, wodurch `XMLHttpRequest` automatisch [JSON](/de/docs/Glossary/JSON)-Strings für Sie parsen kann; wenn Sie diesen Typ anfordern, wird ein zurückgegebener JSON-String geparst, sodass der Wert der `response` Eigenschaft das resultierende JavaScript-Objekt ist.
- [`XMLHttpRequest` "progress" Events](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress) werden jetzt zuverlässig für jedes empfangene Datenchunk gesendet; in der Vergangenheit war es möglich, dass das letzte empfangene Datenchunk kein "progress" Event ausgelöst hat. Jetzt können Sie den Fortschritt nur durch Verfolgen von "progress"-Ereignissen verfolgen, anstatt auch "load"-Ereignisse überwachen zu müssen, um den Empfang des letzten Datenchunks zu erkennen.
- In der Vergangenheit warf das Aufrufen von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) mit einem `null`-Listener eine Ausnahme. Jetzt wird es ohne Fehler und ohne Effekt zurückgegeben.
- Die neue [`navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack) Eigenschaft ermöglicht es Ihrem Inhalt, einfach festzustellen, ob der Benutzer seine Do-Not-Track-Einstellung aktiviert hat; wenn dieser Wert "yes" ist, sollten Sie den Benutzer nicht verfolgen.
- [`Range`](/de/docs/Web/API/Range) und [`Selection`](/de/docs/Web/API/Selection) Objekte verhalten sich jetzt entsprechend ihrer Spezifikationen, wenn [`splitText()`](/de/docs/Web/API/Text/splitText) und [`normalize()`](/de/docs/Web/API/Node/normalize) aufgerufen werden.
- Der Wert von [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument) für DTD-Knoten ist jetzt das Dokument, auf dem [`createDocumentType()`](/de/docs/Web/API/DOMImplementation/createDocumentType) aufgerufen wurde, um den Knoten zu erstellen, anstatt `null`.
- `window.navigator.taintEnabled` wurde entfernt; es wurde seit vielen Jahren nicht mehr unterstützt.

### Workers

- In Blob-URLs implementierte Workers, die in Firefox 8 kaputt waren, funktionieren ab Firefox 9 wieder.

### WebGL

- Die Attribute `drawingBufferWidth` und `drawingBufferHeight` im [WebGL](/de/docs/Web/API/WebGL_API) Kontext werden jetzt unterstützt.

### MathML

- Der nicht standardisierte `restyle` Wert für das `actiontype` Attribut auf {{ MathMLElement("maction") }} Elementen wurde entfernt.
- Während immer noch nicht unterstützt, verursacht die Verwendung des `mlabeledtr` Elements kein völliges Rendern-Fehler mehr. Siehe [Firefox Bug 689641](https://bugzil.la/689641) für den Fortschritt der tatsächlichen Unterstützung dieses Elements.

### Netzwerk

- Sie können jetzt den Inhalt von [JavaScript typisierten Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) (also den Inhalt eines [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) Objekts) [mit XMLHttpRequest senden](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#sending_typed_arrays_as_binary_data).
- WebSocket-Verbindungen erlauben jetzt das Empfang nicht-zeichenhafte Daten in ansonsten gültigen UTF-8-Datenrahmen, anstatt zu scheitern.
- Der HTTP `Accept` Header für XSLT-Anfragen wurde auf `*/*` geändert, um die Einfachheit zu erhöhen. Da das Abrufen von XSLT ohnehin immer auf `*/*` zurückgefallen ist, ergab es Sinn, die Anfangsanfrage zu vereinfachen.
- Versuche eines Servers, die `301 Moved Permanently` oder `307 Temporary Redirect` Antwortcodes zu verwenden, um den Benutzer zu einer `javascript:` URI umzuleiten, [führen jetzt zu einem "bad connection" Fehler](/de/docs/Web/HTTP#more_on_redirection_responses), anstatt tatsächlich umzuleiten. Dies verhindert bestimmte Arten von Cross-Site-Scripting-Angriffen.
- Inhalte, die mit einem leeren {{ HTTPHeader("Content-Disposition") }} bereitgestellt wurden, wurden bisher so behandelt, als wäre der {{ HTTPHeader("Content-Disposition") }} "attachment"; dies funktionierte nicht immer wie erwartet. Diese werden jetzt so gehandhabt, als wäre der {{ HTTPHeader("Content-Disposition") }} "inline".
- Die standardmäßig maximale Größe eines Elements im Festplattencache wurde auf 50 MB erhöht; zuvor wurden nur Elemente bis zu 5 MB gecacht.

### Entwickler-Tools

- Die Web-Konsole unterstützt jetzt grundlegende [Zeichenfolgenersetzungen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#string-substitutions) in ihren Protokollierungsmethoden.
- Sie können jetzt [visuell verschachtelte Ausgabeblöcke](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#using-groups-in-the-console) in der Web-Konsole erstellen, um die Lesbarkeit zu erleichtern.

## Änderungen für Mozilla- und Add-on-Entwickler

Siehe [Aktualisieren von Add-ons für Firefox 9](/de/docs/Mozilla/Firefox/Releases/9/Updating_add-ons) für einen Überblick über die Änderungen, die Sie möglicherweise vornehmen müssen, um Ihre Add-ons in Firefox 9 zum Laufen zu bringen.

### XUL

- Das `<xul:tab>` Element hat jetzt ein `pending` Attribut, dessen Wert `true` ist, wenn der Tab vom Sitzungs- Restore-Dienst wiederhergestellt wird. Dies kann für das Styling des Tabs in Themes verwendet werden. Das Attribut ist bei Tabs, die nicht ausstehend sind, nicht vorhanden.
- Das `<xul:tab>` Element hat jetzt ein `unread` Attribut, dessen Wert `true` ist, wenn sich der Tab seit dem letzten Mal, als er der aktive Tab war, geändert hat oder wenn er seit Beginn der aktuellen Sitzung nicht ausgewählt wurde. Das Attribut ist bei nicht ungelesenen Tabs nicht vorhanden.
- Sie können jetzt ein `<xul:panel>` als Drag-Bild für DOM Drag-and-Drop-Operationen verwenden. Dadurch können Sie die Standard-D&D-API für [Drag and Drop von XUL-Inhalten](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#using_xul_panels_as_drag_images) verwenden.
- Die Methode `appendNotification` des `<xul:notificationbox>` Elements erlaubt es Ihnen nun, eine Rückruffunktion zu spezifizieren, die für interessante Ereignisse in Bezug auf das Benachrichtigungsfeld aufgerufen wird. Derzeit ist das einzige Ereignis "entfernt", das Ihnen mitteilt, dass das Feld aus seinem Fenster entfernt wurde.

### Änderungen in JavaScript-Code-Modulen

- `FileUtils.jsm` hat jetzt einen `File` Konstruktor, der ein `nsIFile` Objekt zurückgibt, das eine Datei darstellt, die durch ihren Pfadnamen bestimmt ist.

### Dienständerungen

- Der Dienst für Inhaltspräferenzen behandelt jetzt das private Browsing (siehe [Firefox Bug 679784](https://bugzil.la/679784)).

### NSPR

- NSPR hat jetzt ein "append" Modul, das es Ihnen ermöglicht, neue Daten an das Ende eines bestehenden Protokolls anzuhängen.

### Schnittstellenänderungen

#### Entfernte Schnittstellen

- `nsIGlobalHistory3` wurde während der Verschlankung des Places und DocShell Codes entfernt.

#### Verschiedene Schnittstellenänderungen

- Die `nsISound` Schnittstelle hat eine neue Konstante, `EVENT_EDITOR_MAX_LEN`. Damit kann der Systemton abgespielt werden, wenn mehr Zeichen als erlaubt in ein Textfeld eingegeben werden. Derzeit wird dies nur unter Windows verwendet.
- Die `nsIScriptError2` Schnittstelle hat neue `timeStamp` und `innerWindowID` Eigenschaften; zusätzlich nimmt die `initWithWindowID()` Methode jetzt eine innere Fenster-ID anstelle einer äußeren Fenster-ID entgegen.
- Das `nsIBidiKeyboard.haveBidiKeyboards` Attribut wurde hinzugefügt; damit können Sie feststellen, ob das System mindestens eine Tastatur für jede Richtung hat: von links nach rechts und von rechts nach links.
- Das neue `nsIEditor.isSelectionEditable` Attribut erlaubt es Ihnen zu bestimmen, ob der aktuelle Auswahlanker bearbeitbar ist. Dies unterstützt Fälle, in denen nur Teile des Dokuments bearbeitbar sind, indem Sie sehen können, ob die aktuelle Auswahl in einem bearbeitbaren Abschnitt ist.
- Die `nsIBrowserHistory.registerOpenPage()` und `nsIBrowserHistory.unregisterOpenPage()` Methoden wurden im Zuge einer Leistungsüberholung im Places-System entfernt. Sie können stattdessen die entsprechenden Methoden in `mozIPlacesAutoComplete` verwenden.
- Die `nsIDOMWindowUtils.wrapDOMFile()` Methode wurde hinzugefügt; diese gibt ein DOM [`File`](/de/docs/Web/API/File) Objekt für eine gegebene `nsIFile` zurück.
- Die `nsIChromeFrameMessageManager.removeDelayedFrameScript()` Methode wurde hinzugefügt, um das Entfernen verzögerter Ladeskripte zu unterstützen. Bootstrapped Add-ons sollten dies beim Herunterfahren verwenden, um alle Scripte zu entfernen, die es mit `nsIChromeFrameMessageManager.loadFrameScript()` mit gesetztem delayed load flag geladen hat. Dies wird Add-ons als `browser.messageManager.removeDelayedFrameScript()` zur Verfügung gestellt.
- Die `nsIAppStartup` Schnittstelle hat ein neues `interrupted` Attribut, das Ihnen mitteilt, ob der Startprozess zu irgendeinem Zeitpunkt durch eine interaktive Eingabeaufforderung unterbrochen wurde. Dies kann hilfreich sein, zum Beispiel beim Timing von Starts während der Leistungsevaluation, um Ergebnisse von Sitzungen, die unterbrochen wurden, ausschließen zu können.
- Die `nsIEditorSpellCheck` Schnittstelle wurde überarbeitet, um die Auswahl von Wörterbüchern pro Website zu unterstützen.

### IDL-Parser

Der IDL-Parser unterstützt nicht mehr das nie vollständig implementierte Konzept von einzigartigen Zeigern.

### Änderungen im Build-System

- Die Option `--enable-application=standalone` zum Erstellen von standalone XPConnect wurde entfernt; sie hat seit 2007 ohnehin nicht mehr funktioniert.
- Der Support, Necko und Transformiix XSLT standalone zu bauen, wurde entfernt; Sie können `--enable-application=network` oder `--enable-application=content/xslt` nicht mehr verwenden.
- Das Build-System sucht jetzt nach `.mozconfig` unter `$topsrcdir/.mozconfig` oder `$topsrcdir/mozconfig` und nirgendwo sonst, es sei denn, Sie überschreiben den `.mozconfig` Pfad mit der `MOZCONFIG` Umgebungsvariable.
- Das `xpidl` Dienstprogramm wurde im SDK durch `pyxpidl` ersetzt.

### Weitere Änderungen

- Der Rechtschreibprüfung hat keine willkürliche 130-Zeichen-Wortlängenbeschränkung mehr für die Länge von Wörtern, die sie versuchen wird, zu überprüfen. Dieses Limit war zuvor vorhanden, um Abstürze zu verhindern, die in der Rechtschreibprüfung auftraten, aber die zugrunde liegenden Fehler wurden inzwischen behoben.
- Sie können jetzt Komponenten registrieren, um Funktionen zum [`window.navigator`](/de/docs/Web/API/Window/navigator) Objekt hinzuzufügen, indem Sie die Kategorie "JavaScript-navigator-property" verwenden.

## Siehe auch

{{Firefox_for_developers}}
