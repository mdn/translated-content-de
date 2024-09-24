---
title: Firefox 9 für Entwickler
slug: Mozilla/Firefox/Releases/9
l10n:
  sourceCommit: d681d0262045649aefa02efb937ff5f22b6e3b2a
---

{{FirefoxSidebar}}

Firefox 9 wurde am 20. Dezember 2011 für Windows veröffentlicht. Die Versionen 9.0.1 für Mac und Linux, die einen in letzter Minute entdeckten Absturzfehler beheben, wurden am 21. Dezember 2011 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das `value`-Attribut von {{ HTMLElement("li") }} kann jetzt negativ sein. Vorher wurden negative Werte in 0 umgewandelt.
- Sie können jetzt [die Start- und Stoppzeit von Medien angeben](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content#specifying_playback_range) in der URI des Mediums, wenn {{ HTMLElement("audio") }}- und {{ HTMLElement("video") }}-Elemente verwendet werden.
- {{ HTMLElement("input") }}- und {{ HTMLElement("textarea") }}-Elemente [respektieren jetzt den Wert des `lang`-Attributs](/de/docs/Web/HTML/Global_attributes/spellcheck#controlling_the_spellchecker_language) beim Aufruf der Rechtschreibprüfung.
- Firefox auf Android ermöglicht es Benutzern nun, Fotos mit der Kamera ihres Telefons aufzunehmen, ohne den Browser zu verlassen, wenn das {{ HTMLElement("input") }}-Element mit `type="file"` und `accept="image/*"` verwendet wird.
- Windows Vista-Stil PNG ICO-Bilder werden jetzt unterstützt.
- Das Zeichnen von Bildern, die das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Attribut zur Anforderung von CORS-Zugriff verwenden, verfälscht nicht mehr fälschlicherweise [den Canvas](/de/docs/Web/HTML/CORS_enabled_image#what_is_a_.22tainted.22_canvas.3f), wenn CORS gewährt wird.
- Der Wert des [`rowspan`](/de/docs/Web/HTML/Element/td#rowspan)-Attributs kann jetzt bis zu 65.534 betragen, im Vergleich zu 8190 zuvor.

### CSS

- Die {{ cssxref("font-stretch") }}-Eigenschaft wird jetzt unterstützt.
- Die {{ cssxref("columns") }}-Eigenschaft wird jetzt unterstützt, mit dem `-moz`-Präfix. Dies ist eine Kurzform für die folgenden Eigenschaften: {{ cssxref("column-width") }} und {{ cssxref("column-count") }}.
- Wenn ein Stylesheet, das mit dem {{ HTMLElement("link") }}-Element eingebunden ist, vollständig geladen und geparst wurde (aber noch nicht auf das Dokument angewendet), wird jetzt ein [`load`-Ereignis](/de/docs/Web/HTML/Element/link#stylesheet_load_events) ausgelöst. Tritt ein Fehler beim Verarbeiten eines Stylesheets auf, wird ein `error`-Ereignis ausgelöst.
- Sie können jetzt Überlaufeinstellungen für beide Ränder von Inhalten mit einer neuen Zwei-Wert-Syntax für {{ cssxref("text-overflow") }} angeben.

### JavaScript

_Keine Änderung._

### DOM

- [Verwendung des Vollbildmodus](/de/docs/Web/API/Fullscreen_API)
  - : Die neue Vollbild-API bietet eine Möglichkeit, Inhalte bildschirmfüllend darzustellen, ohne Browseroberfläche. Dies ist ideal für Videos und Spiele. Diese API ist derzeit experimentell und mit Präfix versehen.

<!---->

- Die Methode {{ domxref("Node.contains()") }} ist jetzt implementiert; sie ermöglicht es Ihnen zu bestimmen, ob ein bestimmter Knoten ein Nachkomme eines anderen Knotens ist.
- Das Attribut {{ domxref("Node.parentElement") }} wurde implementiert; es gibt das übergeordnete {{ domxref("Element") }} eines DOM-Knotens zurück oder `null`, wenn das übergeordnete Element kein Element ist.
- DOM Level 3 [Zusammensetzungsereignisse](/de/docs/Web/API/CompositionEvent) werden jetzt unterstützt.
- Das Attribut {{ domxref("Document.scripts") }} wurde implementiert; es gibt eine {{ domxref("HTMLCollection") }} aller {{ HTMLElement("script") }}-Elemente im Dokument zurück.
- Die Methode {{ domxref("Document.queryCommandSupported()") }} wurde implementiert.
- Der Satz von Ereignissen, die an {{ HTMLElement("body") }}-Elementen lauschen können, wurde überarbeitet, um dem neuesten Entwurf der HTML5-Spezifikation zu entsprechen. Die Liste der Ereignisse in der [DOM-Ereignisreferenz](/de/docs/Web/Events) zeigt, welche Ereignisse an {{ HTMLElement("body") }} gehört werden können.
- Das `readystatechange`-Ereignis wird jetzt nur noch auf dem {{ domxref("Document") }} ausgelöst, wie vorgesehen.
- Ereignishandler sind jetzt als Standard-IDL-Schnittstellen implementiert. In den meisten Fällen wird sich dies nicht auf den Inhalt auswirken, es gibt jedoch Ausnahmen.
- Ein neuer Rückgabetyp, "`moz-json`", wurde zu `XMLHttpRequest` hinzugefügt, sodass `XMLHttpRequest` automatisch [JSON](/de/docs/Glossary/JSON)-Strings für Sie analysieren kann; wenn Sie diesen Typ anfordern, wird ein zurückgegebener JSON-String analysiert, sodass der Wert der `response`-Eigenschaft das resultierende JavaScript-Objekt ist.
- [`XMLHttpRequest` "progress"-Ereignisse](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress) werden jetzt zuverlässig für jedes empfangene Datenpaket gesendet; in der Vergangenheit war es möglich, dass das letzte empfangene Datenpaket kein "progress"-Ereignis auslöste. Jetzt können Sie den Fortschritt nur durch Verfolgen von "progress"-Ereignissen nachverfolgen, anstatt auch "load"-Ereignisse überwachen zu müssen, um den Empfang des letzten Datenpakets zu erkennen.
- In der Vergangenheit führte das Aufrufen von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) mit einem `null`-Listener zu einer Ausnahme. Jetzt wird ohne Fehler und ohne Wirkung zurückgegeben.
- Die neue Eigenschaft {{ domxref("navigator.doNotTrack") }} ermöglicht es Ihren Inhalten, leicht zu bestimmen, ob der Benutzer seine Do-Not-Track-Präferenz aktiviert hat; wenn dieser Wert "yes" ist, sollten Sie den Benutzer nicht verfolgen.
- {{ domxref("Range") }}- und {{ domxref("Selection") }}-Objekte verhalten sich nun gemäß ihren Spezifikationen, wenn {{ domxref("Text.splitText()", "splitText()") }} und {{ domxref("Node.normalize", "normalize()") }} aufgerufen werden.
- Der Wert von {{ domxref("Node.ownerDocument") }} für Dokumenttypknoten ist jetzt das Dokument, auf dem [`createDocumentType()`](/de/docs/Web/API/DOMImplementation/createDocumentType) aufgerufen wurde, um den Knoten zu erstellen, anstatt `null`.
- `window.navigator.taintEnabled` wurde entfernt; es wurde seit vielen Jahren nicht mehr unterstützt.

### Workers

- In Blobs implementierte Workers, die in Firefox 8 nicht funktionierten, arbeiten ab Firefox 9 wieder.

### WebGL

- Die Attribute `drawingBufferWidth` und `drawingBufferHeight` des [WebGL](/de/docs/Web/API/WebGL_API)-Kontexts werden jetzt unterstützt.

### MathML

- Der nicht standardisierte `restyle`-Wert für das `actiontype`-Attribut auf {{ MathMLElement("maction") }}-Elementen wurde entfernt.
- Obwohl weiterhin nicht unterstützt, führt die Verwendung des `mlabeledtr`-Elements nicht mehr völlig zum Abbruch der Wiedergabe. Fortschritte zur tatsächlichen Unterstützung dieses Elements finden Sie unter [Firefox Bug 689641](https://bugzil.la/689641).

### Netzwerk

- Sie können jetzt die Inhalte von [JavaScript getypten Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) (das heißt die Inhalte eines [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)-Objekts) [mit XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#sending_typed_arrays_as_binary_data) senden.
- WebSocket-Verbindungen erlauben jetzt das Empfangen von Nicht-Zeichen in ansonsten gültigen UTF-8-Datenrahmen, anstatt zu scheitern.
- Der HTTP `Accept`-Header für XSLT-Anfragen wurde der Einfachheit halber auf `*/*` geändert. Da das Abrufen von XSLT ohnehin immer auf `*/*` zurückgefallen ist, ergab es Sinn, die ursprüngliche Anfrage zu vereinfachen.
- Versuche eines Servers, die Antwortcodes `301 Moved Permanently` oder `307 Temporary Redirect` zu verwenden, um den Benutzer zu einer `javascript:` URI umzuleiten, [führen jetzt zu einem "bad connection"-Fehler](/de/docs/Web/HTTP#more_on_redirection_responses) anstatt tatsächlich umzuleiten. Dies verhindert bestimmte Arten von Cross-Site-Scripting-Angriffen.
- Inhalt, der mit einem leeren {{ HTTPHeader("Content-Disposition") }} bereitgestellt wurde, wurde zuvor so behandelt, als ob das {{ HTTPHeader("Content-Disposition") }} "attachment" wäre; dies funktionierte nicht immer wie erwartet. Diese werden jetzt so behandelt, als ob das {{ HTTPHeader("Content-Disposition") }} "inline" wäre.
- Die maximale Standardgröße eines Elements im Plattencache wurde auf 50 MB erhöht; zuvor wurden nur Elemente bis zu 5 MB zwischengespeichert.

### Entwicklertools

- Die Web-Konsole unterstützt jetzt grundlegende [Zeichenfolgenersetzungen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#string-substitutions) in ihren Protokollierungsmethoden.
- Sie können jetzt [visuell verschachtelte Blockausgaben erstellen](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#using-groups-in-the-console) in der Web-Konsole, um die Lesbarkeit zu erleichtern.

## Änderungen für Entwickler von Mozilla und Add-ons

Einen Überblick über die Änderungen, die Sie vornehmen müssen, um Ihre Add-ons in Firefox 9 funktionsfähig zu machen, finden Sie unter [Aktualisierung von Add-ons für Firefox 9](/de/docs/Mozilla/Firefox/Releases/9/Updating_add-ons).

### XUL

- Das `<xul:tab>`-Element hat jetzt ein `pending`-Attribut, dessen Wert `true` ist, wenn der Tab vom Sitzungspeicherdienst wiederhergestellt wird. Dies kann zum Stylen des Tabs in Designs verwendet werden. Das Attribut ist nicht bei Tabs vorhanden, die nicht ausstehend sind.
- Das `<xul:tab>`-Element hat jetzt ein `unread`-Attribut, dessen Wert `true` ist, wenn sich der Tab seit dem letzten Mal geändert hat, als er der aktive Tab war, oder wenn er seit Beginn der aktuellen Sitzung nicht ausgewählt wurde. Das Attribut ist nicht bei Tabs vorhanden, die nicht ungelesen sind.
- Sie können jetzt ein `<xul:panel>` als Drag-Bild für DOM-Drag-and-Drop-Operationen verwenden. Dies ermöglicht Ihnen die Verwendung der Standard-Drag & Drop-API für [Drag and Drop von XUL-Inhalten](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#using_xul_panels_as_drag_images).
- Die `appendNotification`-Methode des `<xul:notificationbox>`-Elements ermöglicht es Ihnen nun, einen Callback anzugeben, der bei interessanten Ereignissen im Zusammenhang mit der Benachrichtigungsbox aufgerufen wird. Aktuell gibt es nur das Ereignis "entfernt", das Ihnen mitteilt, dass die Box aus ihrem Fenster entfernt wurde.

### Änderungen der JavaScript-Code-Module

- `FileUtils.jsm` hat jetzt einen `File`-Konstruktor, der ein `nsIFile`-Objekt zurückgibt, das eine Datei repräsentiert, die durch ihren Pfadnamen angegeben ist.

### Dienständerungen

- Der Dienst für Inhaltspräferenzen behandelt jetzt das private Browsen (siehe [Firefox Bug 679784](https://bugzil.la/679784)).

### NSPR

- NSPR hat jetzt ein "append"-Modul, das es Ihnen ermöglicht, neue Daten an das Ende eines bestehenden Logs anzuhängen.

### Schnittstellenänderungen

#### Entfernte Schnittstellen

- `nsIGlobalHistory3` wurde im Zuge der Vereinfachung des Places- und DocShell-Codes entfernt.

#### Verschiedene Schnittstellenänderungen

- Die `nsISound`-Schnittstelle hat eine neue Konstante, `EVENT_EDITOR_MAX_LEN`. Dies ermöglicht es, den Systemsound abzuspielen, wenn mehr Zeichen als die maximal erlaubten in ein Textfeld eingegeben werden. Derzeit wird dies nur unter Windows verwendet.
- Die `nsIScriptError2`-Schnittstelle hat neue `timeStamp`- und `innerWindowID`-Eigenschaften; zusätzlich nimmt die Methode `initWithWindowID()` jetzt eine innere Fenster-ID anstelle einer äußeren Fenster-ID an.
- Das Attribut `nsIBidiKeyboard.haveBidiKeyboards` wurde hinzugefügt; dies ermöglicht es Ihnen zu bestimmen, ob das System mindestens eine installierte Tastatur für jede Richtung hat: von links nach rechts und von rechts nach links.
- Das neue Attribut `nsIEditor.isSelectionEditable` ermöglicht es Ihnen zu bestimmen, ob der aktuelle Auswahlanker bearbeitbar ist. Dies hilft, Fälle zu unterstützen, in denen nur Teile des Dokuments bearbeitbar sind, indem Sie sehen, ob die aktuelle Auswahl sich in einem bearbeitbaren Abschnitt befindet.
- Die Methoden `nsIBrowserHistory.registerOpenPage()` und `nsIBrowserHistory.unregisterOpenPage()` wurden im Zuge einer Leistungsüberholung des Places-Systems entfernt. Sie können stattdessen die entsprechenden Methoden in `mozIPlacesAutoComplete` verwenden.
- Die Methode `nsIDOMWindowUtils.wrapDOMFile()` wurde hinzugefügt; sie gibt ein DOM {{ domxref("File") }}-Objekt für eine gegebene `nsIFile` zurück.
- Die Methode `nsIChromeFrameMessageManager.removeDelayedFrameScript()` wurde hinzugefügt, um das Entfernen von verzögert geladenen Skripten zu unterstützen. Add-ons mit Bootstrap sollten dies beim Herunterfahren verwenden, um alle Skripte zu entfernen, die mit dem verzögerten Ladeflag über `nsIChromeFrameMessageManager.loadFrameScript()` geladen wurden. Dies wird Add-ons als `browser.messageManager.removeDelayedFrameScript()` zugänglich gemacht.
- Die `nsIAppStartup`-Schnittstelle hat ein neues `interrupted`-Attribut, das anzeigt, ob der Startvorgang zu einem beliebigen Zeitpunkt durch eine interaktive Eingabeaufforderung unterbrochen wurde. Dies kann hilfreich sein, wenn zum Beispiel Startzeiten bei der Leistungsbewertung gemessen werden, um Zahlen aus Sitzungen, die unterbrochen wurden, ausschließen zu können.
- Die `nsIEditorSpellCheck`-Schnittstelle wurde überarbeitet, um die Auswahl von Rechtschreibprüfungswörterbüchern pro Site zu unterstützen.

### IDL-Parser

Der IDL-Parser unterstützt nicht mehr die nie vollständig implementierte Idee von eindeutigen Zeigern.

### Änderungen am Build-System

- Die Option `--enable-application=standalone` zum Bauen von eigenständigem XPConnect wurde entfernt; sie hat seit 2007 ohnehin nicht mehr funktioniert.
- Die Unterstützung für das Bauen von Necko und Transformiix XSLT als eigenständige Komponenten wurde entfernt; Sie können nicht mehr `--enable-application=network` oder `--enable-application=content/xslt` verwenden.
- Das Build-System sucht nun nach `.mozconfig` unter `$topsrcdir/.mozconfig` oder `$topsrcdir/mozconfig`, und nirgendwo sonst, es sei denn, Sie überschreiben den `.mozconfig`-Pfad mit der Umgebungskonstante `MOZCONFIG`.
- Das `xpidl`-Utility wurde im SDK durch `pyxpidl` ersetzt.

### Weitere Änderungen

- Die Rechtschreibprüfung hat keine willkürliche Begrenzung der Wortlänge auf 130 Zeichen mehr, die sie zu überprüfen versucht. Diese Begrenzung war zuvor vorhanden, um Abstürze zu verhindern, die in der Rechtschreibprüfung auftraten, aber die zugrunde liegenden Fehler wurden inzwischen behoben.
- Sie können jetzt Komponenten registrieren, um Funktionen zum {{ domxref("window.navigator") }}-Objekt hinzuzufügen, indem Sie die Kategorie "JavaScript-navigator-property" verwenden.

## Siehe auch

{{Firefox_for_developers}}
