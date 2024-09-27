---
title: Aktualisieren von Erweiterungen für Firefox 3.5
slug: Mozilla/Firefox/Releases/3.5/Updating_extensions
l10n:
  sourceCommit: f0f30c318c2a318552a753759fa0a09f6690f2a5
---

{{FirefoxSidebar}}

Dieser Artikel bietet hilfreiche Informationen für Erweiterungsentwickler, die versuchen, ihre Erweiterungen so zu aktualisieren, dass sie ordnungsgemäß in Firefox 3.5 funktionieren.

## Update-Grundlagen

Dieser Abschnitt behandelt die Grundlagen, die Sie beachten müssen, wenn Sie eine Erweiterung für eine neue Version von Firefox aktualisieren.

### Testen Sie Ihre Erweiterung

Beginnen Sie mit dem Bearbeiten der `install.rdf`-Datei Ihrer Erweiterung, aktualisieren Sie `maxVersion` auf 3.5b4 (wenn Sie mit Firefox 3.5 Beta 4 testen) und erhöhen Sie die `version` Ihrer Erweiterung.

Erstellen Sie dann ein neues Firefox-Profil, damit Ihr normales Profil beim Testen nicht gefährdet wird. Navigieren Sie zu dem Verzeichnis, in dem sich Firefox befindet, und führen Sie den Befehl aus:

```bash
firefox -createProfile testBeta4
```

Auf dem Mac müssen Sie bis in das Firefox-Anwendungspaket navigieren:

```bash
cd /Applications/Firefox.app/Contents/MacOS/
firefox -createProfile testBeta4
```

Starten Sie Firefox mit dem neuen Profil, indem Sie diesen Befehl in der Befehlszeile ausführen:

```bash
firefox -P testBeta4
```

Testen Sie Ihre Erweiterung gründlich. Wir empfehlen Ihnen, die folgenden Einstellungen auf `true` zu setzen, um auf JavaScript-Warnungen oder Ausnahmen hingewiesen zu werden:

- `javascript.options.strict`
- `javascript.options.showInConsole`

### Aktualisieren Sie Ihre Erweiterung

Sollten Sie beim Testen auf Probleme stoßen, aktualisieren Sie Ihren Code, um die Probleme zu beheben. Dieser Artikel enthält nützliche Informationen zu Dingen, die möglicherweise bearbeitet werden müssen.

Sobald Sie dies getan haben, versuchen Sie, Ihre Erweiterung erneut zu verwenden, dieses Mal mit Ihrem regulären Profil. Dies hilft, die Kompatibilität mit bereits gespeicherten Daten sicherzustellen.

### Aktualisieren Sie Ihre Erweiterung auf addons.mozilla.org

Schließlich ist es Zeit, Ihre aktualisierte Erweiterung freizugeben. Wenn Ihre Erweiterung keine Codeänderungen benötigte, können Sie sich beim AMO-Dashboard anmelden und die Kompatibilitätsversion dort aktualisieren. Andernfalls müssen Sie eine neue Version auf AMO hochladen.

Siehe [Einreichen eines Add-ons bei AMO](/de/docs/Submitting_an_add-on_to_AMO) für weitere Informationen.

## Zugriff auf die Places-Datenbank

Vor Firefox 3.5 erforderte der direkte Zugriff auf die Places-Datenbank mit der [Storage-API](/de/docs/Storage) ein wenig Trickserei:

```js
var places = Components.classes["@mozilla.org/file/directory_service;1"]
  .getService(Components.interfaces.nsIProperties)
  .get("ProfD", Components.interfaces.nsIFile);
places.append("places.sqlite");
var db = Components.classes["@mozilla.org/storage/service;1"]
  .getService(Components.interfaces.mozIStorageService)
  .openDatabase(places);
```

Dies baut manuell einen Pfad zur `places.sqlite`-Datenbankdatei auf und öffnet dann die Datei für den Storage-Zugriff.

Firefox 3.5 fügt einen speziellen Dienst hinzu, der einen bequemen Zugriff auf die Places-Datenbank bietet; die obige Technik funktioniert in Firefox 3.5 oder später nicht mehr.

```js
var db = Components.classes[
  "@mozilla.org/browser/nav-history-service;1"
].getService(Components.interfaces.nsPIPlacesDatabase).DBConnection;
```

## Such-Textfelder

Der `textbox`-Typ `timed` ist veraltet; stattdessen sollten Sie `search` verwenden.

In Firefox 3 haben Sie möglicherweise verwendet:

```xml
<textbox type="timed" timeout="1000" oncommand="alert(this.value);"/>
```

In Firefox 3.5 sollten Sie dies ändern zu:

```xml
<textbox type="search" timeout="1000" oncommand="alert(this.value);"/>
```

## JSON

Das JSON.jsm-JavaScript-Modul wurde in Firefox 3.5 zugunsten der nativen JSON-Objektunterstützung entfernt. Für Details siehe [Verwendung von JSON in Firefox](/en-US/Using_native_JSON) und den Artikel über [JSON](/de/docs/Glossary/JSON) für einen allgemeineren Überblick über JSON und wie es in verschiedenen Firefox-Versionen verwendet werden kann.

Um die Kompatibilität mit sowohl Firefox 3 als auch Firefox 3.5 zu gewährleisten, können Sie Folgendes tun:

```js
if (typeof JSON === "undefined") {
  Components.utils.import("resource://gre/modules/JSON.jsm");
  JSON.parse = JSON.fromString;
  JSON.stringify = JSON.toString;
}
```

Dies funktioniert, indem das JSON.jsm-JavaScript-Modul importiert wird, wenn JSON nicht nativ unterstützt wird, und dann die von diesem Modul bereitgestellten Methoden mit denen des nativen JSON verknüpft werden, sodass die gleichen Aufrufe funktionieren.

Sie können dieses Problem auch umgehen, indem Sie direkt das `nsIJSON`-Interface verwenden.

## Änderungen an Kontextmenüs

Um die neuen Audio- und Video-Funktionen zu unterstützen, die in Gecko 1.9.1 hinzugefügt wurden, hat die `nsContextMenu`-Klasse den Getter `imageURL` in `mediaURL` umbenannt; jedoch wurde `imageURL` am 9. Juni 2009 wieder hinzugefügt.

## Änderungen an der Chrome-Registrierung

Firefox 3.5 schließt eine Sicherheitslücke, die es möglich machte, remote Chrome zu verwenden. Dies betrifft jedes Add-on, das in seiner `chrome.manifest`-Datei eine Ressource enthält, die auf eine Website, Daten oder Ressourcen-URLs verweist. Siehe [Sicherheitsänderungen in Firefox 3.5](/en-US/Security_changes_in_Firefox_3.5) für Details.

## Abrufen eines Load-Kontexts aus einer Anfrage

Früher war es möglich, einen Load-Kontext aus einer Anfrage abzurufen, indem man verschiedene docShell-APIs abfragte. Insbesondere war es gängige Praxis, `notificationCallbacks.getInterface(nsIDOMWindow)` zu verwenden, um das Fensterobjekt zu erhalten, das mit dem Ladevorgang verbunden ist. Obwohl der ältere Ansatz in einigen Umständen funktionieren mag, wird nicht empfohlen, ihn weiterhin zu verwenden ([Details](https://bugzil.la/457153#c16)).

Die korrekte und verlässliche Methode ist die Verwendung eines `nsILoadContext` (siehe die [Schnittstellendefinition](https://searchfox.org/mozilla-central/source/docshell/base/nsILoadContext.idl)).

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

Ein weiteres JavaScript-Beispiel, falls das obige nicht funktioniert:

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

## Anpassbare Werkzeugleisten

In Firefox 3.5 hat sich das Verhalten anpassbarer Werkzeugleisten so geändert, dass das `<xul:toolbar/>`-Binding nun Werkzeugleistenelemente aus seiner zugehörigen `<xul:toolbarpalette/>` entfernt und sie in die Werkzeugleiste einfügt, anstatt sie zu klonen und in die Werkzeugleiste zu kopieren. Dies bedeutet, dass die Palette nun nur noch Elemente enthält, die nicht auf der Werkzeugleiste vorhanden sind, im Gegensatz zum vorherigen Verhalten, bei dem alle anpassbaren Elemente enthalten waren, unabhängig davon, ob sie auf der Werkzeugleiste angezeigt wurden oder nicht. Dies könnte für Add-ons problematisch sein, die davon abhängen, alle anpassbaren Werkzeugleistenelemente aus der `<xul:toolbarpalette/>` abrufen zu können, oder die versuchen, Elemente dynamisch in die Palette einzufügen, um sie während der Werkzeugleistenanpassung verfügbar zu machen. Weitere Informationen sind in [Firefox-Bug 407725](https://bugzil.la/407725) und [Webkit-Bug 467045](https://bugzil.la/467045) verfügbar.

## XPCNativeWrapper

Ab Firefox 3.5 können Sie keine `data:`-Bindings in Chrome-Paketen mehr verwenden, die `XPCNativeWrapper`-Automatisierung erhalten. Dies löst ein potenzielles Sicherheitsproblem.

XUL-Dokumente erhalten nun eine `XPCNativeWrapper`-Behandlung, sodass Sie nun die `getAttribute()`-Methode verwenden müssen, um Attributwerte abzurufen, anstatt sie direkt zu lesen.

Wenn Ihre Erweiterung `xpcnativewrappers=no` verwendet (was sie eigentlich nicht tun sollte, da es nicht sicher ist), wird XBL von dieser Erweiterung nicht auf Dokumente angewendet, die ab Firefox 3.5 die `XPCNativeWrapper`-Automatisierung verwenden.

## Neue interessante Fähigkeiten

### Ereignisse auf allen Tabs abhören

Firefox 3.5 führt die Unterstützung für das Hinzufügen und Entfernen von Fortschritts-Listenern ein, die auf alle Tabs hören. Siehe [Ereignisse auf allen Tabs abhören](/en-US/Listening_to_events_on_all_tabs) für Details.

## Für Theme-Entwickler

- Überprüfen Sie [Theme-Änderungen in Firefox 3.1](/en-US/Theme_changes_in_Firefox_3.1).
- Besuchen Sie das Mozillazine-Forum [Theme-Änderungen für FF3.1](https://forums.mozillazine.org/viewtopic.php?f=18&t=665138), um einen Überblick / eine Liste aller Änderungen zwischen 3.0 und 3.1 zu erhalten, die Theme-Entwickler betreffen. Dies betrifft neue CSS-Funktionen (wie nth-child, -moz-box-shadow usw.), Änderungen an bestehenden Widgets, allgemeine UI-Verbesserungen und neue FF3.1-Funktionen (Audio-/Video-Unterstützung, privates Surfen, erweiterte Sitzungswiederherstellung, Kasten-/Fenster-/Text-Schatten).
