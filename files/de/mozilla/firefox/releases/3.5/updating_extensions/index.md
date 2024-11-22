---
title: Aktualisierung von Erweiterungen für Firefox 3.5
slug: Mozilla/Firefox/Releases/3.5/Updating_extensions
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{FirefoxSidebar}}

Dieser Artikel bietet hilfreiche Informationen für Entwickler von Erweiterungen, die versuchen, ihre Erweiterungen so zu aktualisieren, dass sie ordnungsgemäß in Firefox 3.5 funktionieren.

## Grundlagen der Aktualisierung

Dieser Abschnitt behandelt die Grundlagen dessen, was Sie tun müssen, wenn Sie eine Erweiterung für eine neue Version von Firefox aktualisieren.

### Testen Sie Ihre Erweiterung

Beginnen Sie mit der Bearbeitung der Datei `install.rdf` Ihrer Erweiterung, indem Sie `maxVersion` auf 3.5b4 aktualisieren (wenn Sie die Beta-Version 4 von Firefox 3.5 testen) und die `version` Ihrer Erweiterung erhöhen.

Erstellen Sie dann ein neues Firefox-Profil, damit Ihr Testen nicht Ihr übliches Profil gefährdet. Navigieren Sie zum Verzeichnis, das Firefox enthält, und geben Sie den folgenden Befehl ein:

```bash
firefox -createProfile testBeta4
```

Auf dem Mac müssen Sie bis in das Firefox-Anwendungsbundle navigieren:

```bash
cd /Applications/Firefox.app/Contents/MacOS/
firefox -createProfile testBeta4
```

Starten Sie Firefox mit dem neuen Profil, indem Sie diesen Befehl in der Befehlszeile eingeben:

```bash
firefox -P testBeta4
```

Testen Sie Ihre Erweiterung gründlich. Es wird empfohlen, die folgenden Einstellungen auf `true` zu setzen, um auf JavaScript-Warnungen oder -Ausnahmen hingewiesen zu werden:

- `javascript.options.strict`
- `javascript.options.showInConsole`

### Aktualisieren Sie Ihre Erweiterung

Wenn Sie beim Testen auf Probleme stoßen, aktualisieren Sie Ihren Code, um die Probleme zu beheben. Dieser Artikel enthält nützliche Informationen über Dinge, die möglicherweise Arbeit erfordern.

Sobald Sie dies getan haben, versuchen Sie, Ihre Erweiterung erneut zu verwenden, diesmal mit Ihrem regulären Profil. Dies hilft sicherzustellen, dass die Kompatibilität mit allen vorhandenen gespeicherten Daten gegeben ist.

### Aktualisieren Sie Ihre Erweiterung auf addons.mozilla.org

Schließlich ist es an der Zeit, Ihre aktualisierte Erweiterung zu veröffentlichen. Wenn Ihre Erweiterung keine Codeänderungen benötigte, können Sie sich in das AMO-Dashboard einloggen und die Kompatibilitätsversion dort aktualisieren. Andernfalls müssen Sie eine neue Version bei AMO hochladen.

Siehe [Einreichen eines Add-ons bei AMO](/de/docs/Submitting_an_add-on_to_AMO) für weitere Informationen.

## Zugriff auf die Places-Datenbank

Vor Firefox 3.5 erforderte der direkte Zugriff auf die Places-Datenbank über die [Storage API](/de/docs/Storage) ein wenig Trickserei:

```js
var places = Components.classes["@mozilla.org/file/directory_service;1"]
  .getService(Components.interfaces.nsIProperties)
  .get("ProfD", Components.interfaces.nsIFile);
places.append("places.sqlite");
var db = Components.classes["@mozilla.org/storage/service;1"]
  .getService(Components.interfaces.mozIStorageService)
  .openDatabase(places);
```

Dies erstellt manuell einen Pfad zur `places.sqlite`-Datenbankdatei und öffnet dann die Datei für den Speicherzugriff.

Firefox 3.5 bietet einen speziellen Dienst, der einen bequemen Zugriff auf die Places-Datenbank ermöglicht; die obige Technik funktioniert in Firefox 3.5 oder später nicht.

```js
var db = Components.classes[
  "@mozilla.org/browser/nav-history-service;1"
].getService(Components.interfaces.nsPIPlacesDatabase).DBConnection;
```

## Suchtextfelder

Der [`textbox`](/de/docs/XUL/textbox)-Typ `timed` ist veraltet; stattdessen sollten Sie `search` verwenden.

In Firefox 3 haben Sie möglicherweise verwendet:

```xml
<textbox type="timed" timeout="1000" oncommand="alert(this.value);"/>
```

In Firefox 3.5 sollten Sie dies ändern zu:

```xml
<textbox type="search" timeout="1000" oncommand="alert(this.value);"/>
```

## JSON

Das JSON.jsm JavaScript-Modul wurde in Firefox 3.5 zugunsten der nativen JSON-Objektunterstützung entfernt. Für Details siehe [Verwendung von JSON in Firefox](/en-US/Using_native_JSON) und den Artikel über {{Glossary("JSON", "JSON")}} für einen allgemeineren Überblick über JSON und seine Verwendung in verschiedenen Firefox-Versionen.

Um die Kompatibilität mit sowohl Firefox 3 als auch Firefox 3.5 sicherzustellen, können Sie Folgendes tun:

```js
if (typeof JSON === "undefined") {
  Components.utils.import("resource://gre/modules/JSON.jsm");
  JSON.parse = JSON.fromString;
  JSON.stringify = JSON.toString;
}
```

Dies funktioniert, indem das JSON.jsm JavaScript-Modul importiert wird, falls JSON nicht nativ unterstützt wird, und dann die von diesem Modul bereitgestellten Methoden zu denjenigen des nativen JSON-Objekts zugeordnet werden, so dass sie unabhängig von der Unterstützung funktionieren.

Sie können dieses Problem auch umgehen, indem Sie direkt das `nsIJSON`-Interface verwenden.

## Änderungen an Kontextmenüs

Um die neuen Audio- und Videofunktionen, die in Gecko 1.9.1 hinzugefügt wurden, zu unterstützen, wurde der Getter `imageURL` der `nsContextMenu`-Klasse in `mediaURL` umbenannt; jedoch wurde `imageURL` am 9. Juni 2009 wieder hinzugefügt.

## Änderungen an der Chrome-Registrierung

Firefox 3.5 schließt ein Sicherheitsproblem, das die Verwendung von Remote-Chrome ermöglichte. Dies wird sich auf jedes Add-on auswirken, das in seiner `chrome.manifest`-Datei eine Ressource enthält, die auf eine Website, Daten- oder Ressourcen-URLs verweist. Details finden Sie unter [Sicherheitsänderungen in Firefox 3.5](/en-US/Security_changes_in_Firefox_3.5).

## Abrufen eines Ladekontextes von einer Anfrage

Früher war es möglich, einen Ladekontext aus einer Anfrage zu erhalten, indem verschiedene docShell-APIs abgefragt wurden. Insbesondere war es gängige Praxis, `notificationCallbacks.getInterface(nsIDOMWindow)` zu verwenden, um das mit dem Ladevorgang verbundene Fensterobjekt zu erhalten. Während der ältere Ansatz unter bestimmten Umständen noch funktionieren mag, wird seine Verwendung nicht mehr empfohlen ([Details](https://bugzil.la/457153#c16)).

Der korrekte und zuverlässige Weg, dies zu tun, ist die Verwendung eines `nsILoadContext` (siehe die [Schnittstellendefinition](https://searchfox.org/mozilla-central/source/docshell/base/nsILoadContext.idl)).

In JavaScript machen Sie es so:

```js
var loadContext;
try {
  loadContext = aRequest
    .QueryInterface(Components.interfaces.nsIChannel) // aRequest is equivalent to aSubject from observe
    .notificationCallbacks.getInterface(Components.interfaces.nsILoadContext);
} catch (ex) {
  try {
    loadContext = aRequest.loadGroup.notificationCallbacks.getInterface(
      Components.interfaces.nsILoadContext,
    );
  } catch (ex) {
    loadContext = null;
  }
}
// you can now use |loadContext.associatedWindow| to get the Window object
```

Ein weiteres JavaScript-Beispiel, falls das oben genannte nicht funktioniert:

```js
// SOURCE: http://stackoverflow.com/questions/10719606/is-it-possible-to-know-the-target-domwindow-for-an-httprequest

function getWindowForRequest(request) {
  if (request instanceof Components.interfaces.nsIRequest) {
    try {
      if (request.notificationCallbacks) {
        return request.notificationCallbacks.getInterface(
          Components.interfaces.nsILoadContext,
        ).associatedWindow;
      }
    } catch (e) {}
    try {
      if (request.loadGroup && request.loadGroup.notificationCallbacks) {
        return request.loadGroup.notificationCallbacks.getInterface(
          Components.interfaces.nsILoadContext,
        ).associatedWindow;
      }
    } catch (e) {}
  }
  return null;
}
```

In C++ können Sie es so machen:

```cpp
nsCOMPtr<nsILoadContext> loadContext;
nsCOMPtr<nsIChannel> channel = do_QueryInterface(aRequest);
NS_QueryNotificationCallbacks(channel, loadContext);
```

## Anpassbare Symbolleisten

In Firefox 3.5 hat sich das Verhalten anpassbarer Symbolleisten geändert, so dass die `<xul:toolbar/>`-Bindung nun Symbolleistenelemente aus ihrer zugehörigen `<xul:toolbarpalette/>` entfernt und sie zur Symbolleiste hinzufügt, anstatt sie zu klonen und zur Symbolleiste zu kopieren. Dies bedeutet, dass die Palette nun nur noch die Elemente enthält, die nicht in der Symbolleiste vorhanden sind, im Gegensatz zum vorherigen Verhalten, bei dem alle anpassbaren Elemente enthalten waren, unabhängig davon, ob sie in der Symbolleiste angezeigt wurden oder nicht. Dies könnte Probleme für Add-ons verursachen, die darauf angewiesen sind, alle anpassbaren Symbolleistenelemente aus der `<xul:toolbarpalette/>` abzurufen, oder die versuchen, Elemente dynamisch in die Palette einzufügen, um sie während der Symbolleistenanpassung verfügbar zu machen. Weitere Informationen finden Sie in [Firefox Bug 407725](https://bugzil.la/407725) und [WebKit Bug 467045](https://bugzil.la/467045).

## XPCNativeWrapper

Ab Firefox 3.5 können Sie keine `data:`-Bindings mehr in Chrome-Paketen verwenden, die `XPCNativeWrapper`-Automatisierung erhalten. Dies löst ein potenzielles Sicherheitsproblem.

XUL-Dokumente erhalten nun die `XPCNativeWrapper`-Behandlung, so dass Sie nun die Methode `getAttribute()` verwenden müssen, um Attributwerte abzurufen, anstatt sie direkt zu lesen.

Wenn Ihre Erweiterung `xpcnativewrappers=no` verwendet (was sie ohnehin nicht tun sollte, da es nicht sicher ist), wird XBL von dieser Erweiterung nicht auf Dokumente angewendet, die `XPCNativeWrapper`-Automatisierung ab Firefox 3.5 verwenden.

## Interessante neue Fähigkeiten

### Abhören von Ereignissen in allen Tabs

Firefox 3.5 führt die Unterstützung für das Hinzufügen und Entfernen von Fortschrittsbeobachtern ein, die in allen Tabs lauschen. Siehe [Ereignisse in allen Tabs abhören](/en-US/Listening_to_events_on_all_tabs) für Details.

## Für Theme-Entwickler

- Prüfen Sie [Theme-Änderungen in Firefox 3.1](/en-US/Theme_changes_in_Firefox_3.1).
- Besuchen Sie das MozillaZine-Forum [Themeänderungen für FF3.1](https://forums.mozillazine.org/viewtopic.php?f=18&t=665138), um einen Überblick / eine Liste aller Änderungen zwischen 3.0 und 3.1 zu erhalten, die Theme-Entwickler betreffen. Dies betrifft neue CSS-Features (wie nth-child, -moz-box-shadow, etc.), Änderungen an bestehenden Widgets, allgemeine UI-Verbesserungen und neue FF3.1-Features (Audio/Video-Unterstützung, privates Surfen, erweiterte Sitzungswiederherstellung, Box-/Fenster-/Text-Schatten).
