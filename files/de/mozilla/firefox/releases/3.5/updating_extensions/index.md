---
title: Aktualisierung von Erweiterungen für Firefox 3.5
slug: Mozilla/Firefox/Releases/3.5/Updating_extensions
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

Dieser Artikel bietet hilfreiche Informationen für Erweiterungsentwickler, die versuchen, ihre Erweiterungen so zu aktualisieren, dass sie in Firefox 3.5 ordnungsgemäß funktionieren.

## Grundlagen der Aktualisierung

Dieser Abschnitt beschreibt die grundlegenden Schritte, die Sie bei der Aktualisierung einer Erweiterung für eine neue Firefox-Version unternehmen müssen.

### Testen Sie Ihre Erweiterung

Beginnen Sie mit dem Bearbeiten der `install.rdf`-Datei Ihrer Erweiterung, indem Sie `maxVersion` auf 3.5b4 aktualisieren (wenn Sie Firefox 3.5 Beta 4 testen) und die `version` Ihrer Erweiterung erhöhen.

Erstellen Sie dann ein neues Firefox-Profil, um sicherzustellen, dass Ihr Test nicht Ihr übliches Profil gefährdet. Navigieren Sie zum Verzeichnis, das Firefox enthält, und geben Sie den folgenden Befehl ein:

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

Testen Sie Ihre Erweiterung gründlich. Wir empfehlen, die folgenden Einstellungen auf `true` zu setzen, um auf JavaScript-Warnungen oder -Ausnahmen aufmerksam gemacht zu werden:

- `javascript.options.strict`
- `javascript.options.showInConsole`

### Aktualisieren Sie Ihre Erweiterung

Wenn Sie während des Testens auf Probleme stoßen, aktualisieren Sie Ihren Code, um die Probleme zu beheben. Dieser Artikel enthält nützliche Informationen zu Dingen, die möglicherweise Arbeit erfordern.

Sobald Sie das getan haben, testen Sie Ihre Erweiterung erneut, diesmal mit Ihrem regulären Profil. Dies hilft, die Kompatibilität mit vorhandenen gespeicherten Daten zu gewährleisten.

### Aktualisieren Sie Ihre Erweiterung auf addons.mozilla.org

Schließlich ist es Zeit, Ihre aktualisierte Erweiterung zu veröffentlichen. Wenn für Ihre Erweiterung keine Codeänderungen erforderlich waren, können Sie sich in das AMO-Dashboard einloggen und die Kompatibilitätsversion dort aktualisieren. Andernfalls müssen Sie eine neue Version bei AMO hochladen.

Siehe [Einreichung eines Add-ons bei AMO](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#distributing-your-addon) für weitere Informationen.

## Zugriff auf die Places-Datenbank

Vor Firefox 3.5 erforderte der direkte Zugriff auf die Places-Datenbank mit der [Storage API](https://web.archive.org/web/20210401045303/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Storage) ein wenig Tricksen:

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

Firefox 3.5 fügt einen dedizierten Dienst hinzu, der eine bequeme Möglichkeit bietet, auf die Places-Datenbank zuzugreifen; die obige Technik funktioniert in Firefox 3.5 oder später nicht.

```js
var db = Components.classes[
  "@mozilla.org/browser/nav-history-service;1"
].getService(Components.interfaces.nsPIPlacesDatabase).DBConnection;
```

## Such-Textboxen

Der [`textbox`](https://web.archive.org/web/20201205234810/https://developer.mozilla.org/de/docs/Archive/Mozilla/XUL/textbox)-Typ `timed` ist veraltet; stattdessen sollten Sie `search` verwenden.

In Firefox 3 haben Sie möglicherweise verwendet:

```xml
<textbox type="timed" timeout="1000" oncommand="alert(this.value);"/>
```

In Firefox 3.5 sollten Sie dies ändern auf:

```xml
<textbox type="search" timeout="1000" oncommand="alert(this.value);"/>
```

## JSON

Das Modul JSON.jsm wurde in Firefox 3.5 zugunsten der nativen Unterstützung für das JSON-Objekt fallen gelassen. Einzelheiten finden Sie im Artikel über [JSON](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON) für einen allgemeinen Überblick über JSON und dessen Verwendung in verschiedenen Firefox-Versionen.

Um die Kompatibilität sowohl mit Firefox 3 als auch mit Firefox 3.5 zu gewährleisten, können Sie Folgendes tun:

```js
if (typeof JSON === "undefined") {
  Components.utils.import("resource://gre/modules/JSON.jsm");
  JSON.parse = JSON.fromString;
  JSON.stringify = JSON.toString;
}
```

Dies funktioniert, indem das JavaScript-Modul JSON.jsm importiert wird, falls JSON nicht nativ unterstützt wird, und dann die Methoden des Moduls den nativen JSON-Methoden zugeordnet werden, damit dieselben Aufrufe funktionieren.

Sie können dieses Problem auch umgehen, indem Sie das `nsIJSON`-Interface direkt verwenden.

## Änderungen an den Kontextmenüs

Um die neuen Audio- und Videofunktionen zu unterstützen, die in Gecko 1.9.1 hinzugefügt wurden, hat die `nsContextMenu`-Klasse den Abrufer `imageURL` in `mediaURL` umbenannt; allerdings wurde `imageURL` am 9. Juni 2009 wieder hinzugefügt.

## Änderungen an der Chrome-Registrierung

Firefox 3.5 schließt eine Sicherheitslücke, die es möglich machte, remote Chrome zu verwenden. Dies wirkt sich auf jedes Add-on aus, das eine Ressource in seiner `chrome.manifest`-Datei enthält, die auf eine Website, Daten oder Ressourcen-URLs verweist. Einzelheiten finden Sie unter [Sicherheitsänderungen in Firefox 3.5](/de/docs/Mozilla/Firefox/Releases/3.5/Security_changes).

## Lade-Kontext aus einer Anfrage erhalten

Früher war es möglich, einen Lade-Kontext aus einer Anfrage zu erhalten, indem verschiedene docShell-APIs abgefragt wurden. Insbesondere war es eine gängige Praxis, `notificationCallbacks.getInterface(nsIDOMWindow)` zu verwenden, um das mit dem Laden verbundene Fensterobjekt zu erhalten. Obwohl der ältere Ansatz in einigen Fällen funktionieren könnte, wird seine Verwendung nicht mehr empfohlen ([Einzelheiten](https://bugzil.la/457153#c16)).

Die korrekte und zuverlässigere Methode hierfür ist die Verwendung eines `nsILoadContext` (siehe die [Schnittstellendefinition](https://searchfox.org/mozilla-central/source/docshell/base/nsILoadContext.idl)).

In JavaScript machen Sie dies folgendermaßen:

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

In C++ können Sie dies folgendermaßen tun:

```cpp
nsCOMPtr<nsILoadContext> loadContext;
nsCOMPtr<nsIChannel> channel = do_QueryInterface(aRequest);
NS_QueryNotificationCallbacks(channel, loadContext);
```

## Anpassbare Symbolleisten

In Firefox 3.5 hat sich das Verhalten anpassbarer Symbolleisten geändert, sodass die Bindung `<xul:toolbar/>` nun Symbolleistenobjekte aus der zugehörigen `<xul:toolbarpalette/>` entfernt und sie in die Symbolleiste einfügt, anstatt sie zu duplizieren und in die Symbolleiste zu kopieren. Dies bedeutet, dass die Palette nun nur noch Elemente enthält, die nicht auf der Symbolleiste vorhanden sind, im Gegensatz zu dem vorherigen Verhalten, alle anpassbaren Elemente zu enthalten, unabhängig davon, ob sie auf der Symbolleiste angezeigt wurden oder nicht. Dies könnte Probleme für Add-ons verursachen, die darauf angewiesen sind, alle anpassbaren Symbolleistenobjekte aus der `<xul:toolbarpalette/>` abzurufen, oder die versuchen, während der Symbolleiste-Anpassung dynamisch Elemente in die Palette einzufügen, um sie verfügbar zu machen. Weitere Informationen finden Sie in [Firefox-Bug 407725](https://bugzil.la/407725) und [WebKit-Bug 467045](https://bugzil.la/467045).

## XPCNativeWrapper

Ab Firefox 3.5 können Sie keine `data:`-Bindings mehr in Chrome-Paketen verwenden, die die `XPCNativeWrapper`-Automatisierung erhalten. Dies löst ein potenzielles Sicherheitsproblem.

XUL-Dokumente erhalten jetzt die `XPCNativeWrapper`-Behandlung, sodass Sie jetzt die Methode `getAttribute()` verwenden müssen, um Attributwerte abzurufen, anstatt sie direkt zu lesen.

Wenn Ihre Erweiterung `xpcnativewrappers=no` verwendet (was sie grundsätzlich nicht tun sollte, da es nicht sicher ist), wird das XBL dieser Erweiterung nicht mehr auf Dokumente angewendet, die die `XPCNativeWrapper`-Automatisierung verwenden, beginnend mit Firefox 3.5.

## Neue, interessante Fähigkeiten

### Lauschen von Ereignissen auf allen Tabs

Firefox 3.5 führt Unterstützung für das Hinzufügen und Entfernen von Fortschritts-Listenern ein, die auf alle Tabs lauschen. Weitere Informationen finden Sie unter [Lauschen von Ereignissen auf allen Tabs](https://web.archive.org/web/20210412023656/https://developer.mozilla.org/de/docs/Mozilla/Developer_guide/Listening_to_events_on_all_tabs).

## Für Theme-Entwickler

- Überprüfen Sie die [Theme-Änderungen in Firefox 3.5](https://web.archive.org/web/20191004004454/https://developer.mozilla.org/de/docs/Archive/Themes/Theme_changes_in_Firefox_3.5).
- Gehen Sie zum MozillaZine-Forum [Theme-Änderungen für FF3.1](https://forums.mozillazine.org/viewtopic.php?f=18&t=665138), um einen Überblick / eine Auflistung aller Änderungen zwischen 3.0 und 3.1 zu erhalten, die Theme-Entwickler betreffen. Dies betrifft neue CSS-Features (wie nth-child, -moz-box-shadow, etc.), Änderungen an bestehenden Widgets, allgemeine UI-Verbesserungen und neue FF3.1-Features (Audio-/Videosupport, privates Surfen, erweitertes Sitzungswiederherstellen, Box-/Fenster-/Textschatten).
