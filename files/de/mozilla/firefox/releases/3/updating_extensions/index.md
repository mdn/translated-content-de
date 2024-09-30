---
title: Aktualisierung von Erweiterungen für Firefox 3
slug: Mozilla/Firefox/Releases/3/Updating_extensions
l10n:
  sourceCommit: d681d0262045649aefa02efb937ff5f22b6e3b2a
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen, die für Entwickler nützlich sind, die ihre Erweiterungen so aktualisieren möchten, dass sie unter Firefox 3 ordnungsgemäß funktionieren.

Bevor Sie fortfahren, gibt es einen hilfreichen Hinweis, den wir Ihnen anbieten können: Wenn die einzige Änderung, die Ihre Erweiterung benötigt, eine Aktualisierung des `maxVersion`-Feldes in ihrem Installationsmanifest ist und Sie Ihre Erweiterung auf [addons.mozilla.org](https://addons.mozilla.org) hosten, müssen Sie tatsächlich keine neue Version Ihrer Erweiterung hochladen! Verwenden Sie das Entwickler-Kontrollpanel auf AMO, um die `maxVersion` anzupassen. Auf diese Weise können Sie vermeiden, dass Ihre Erweiterung erneut überprüft werden muss.

## Schritt 1: Aktualisieren Sie das Installationsmanifest

Der erste Schritt – und für die meisten Erweiterungen der einzige notwendige – ist die Aktualisierung der [Installationsmanifest](/de/docs/Install_Manifests)-Datei, [`install.rdf`](/de/docs/Creating_a_Skin_for_Firefox/install.rdf), um die Kompatibilität mit Firefox 3 anzuzeigen.

Suchen Sie die Zeile, die die maximale kompatible Version von Firefox angibt (die für Firefox 2 möglicherweise so aussieht):

```xml
<em:maxVersion>2.0.*</em:maxVersion>
```

Ändern Sie sie, um die Kompatibilität mit Firefox 3 anzuzeigen:

```xml
<em:maxVersion>3.0.*</em:maxVersion>
```

Installieren Sie dann Ihre Erweiterung neu.

Beachten Sie, dass Firefox 3 auf das zusätzliche ".0" in der Versionsnummer verzichtet, sodass Sie statt `3.0.0.*` einfach `3.0.*` verwenden müssen.

Es gab (und wird weiterhin geben) eine Reihe von API-Änderungen, die wahrscheinlich einige Erweiterungen beeinträchtigen werden. Wir arbeiten noch daran, eine vollständige Liste dieser Änderungen zu erstellen.

> [!NOTE]
> Wenn Ihre Erweiterung noch immer ein [`Install.js`](/de/docs/Install.js)-Skript anstelle eines [Installationsmanifests](/de/docs/Install_Manifests) verwendet, müssen Sie jetzt zum Installationsmanifest wechseln. Firefox 3 unterstützt `install.js`-Skripte in XPI-Dateien nicht mehr.

### Lokalisierungen zum Installationsmanifest hinzufügen

Firefox 3 unterstützt neue Eigenschaften im Installationsmanifest, um lokalisierte Beschreibungen anzugeben. Die alten Methoden funktionieren immer noch, jedoch erlauben die neuen, dass Firefox die Lokalisierungen auch dann erfasst, wenn das Add-on deaktiviert und zur Installation ausstehend ist. Weitere Details finden Sie unter [Lokalisierung von Erweiterungsbeschreibungen](/de/docs/Localizing_extension_descriptions).

## Schritt 2: Sicherstellen, dass Sie sichere Updates bereitstellen

Wenn Sie Add-ons selbst hosten und nicht bei einem sicheren Add-on-Hosting-Anbieter wie [addons.mozilla.org](https://addons.mozilla.org), müssen Sie eine sichere Methode zum Aktualisieren Ihres Add-ons bereitstellen. Dies erfordert entweder das Hosten Ihrer Updates auf einer SSL-Website oder die Verwendung kryptografischer Schlüssel, um die Update-Informationen zu signieren. Lesen Sie [Sichern von Updates](/de/docs/Extension_Versioning,_Update_and_Compatibility#securing_updates) für weitere Informationen.

## Schritt 3: Umgang mit geänderten APIs

Mehrere APIs wurden erheblich verändert. Die bedeutendsten davon, die wahrscheinlich eine große Anzahl von Erweiterungen betreffen, sind:

### DOM

Knoten aus externen Dokumenten sollten mit [`document.importNode()`](/de/docs/Web/API/Document/importNode) (oder adoptiert mit [`document.adoptNode()`](/de/docs/Web/API/Document/adoptNode)) geklont werden, bevor sie in das aktuelle Dokument eingefügt werden können. Weitere Informationen zu den [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument)-Problemen finden Sie in den [W3C DOM FAQ](https://www.w3.org/DOM/faq.html#ownerdoc).

Firefox erzwingt diese Regel derzeit nicht (es wurde eine Zeit lang während der Entwicklung von Firefox 3 durchgesetzt, aber zu viele Seiten brechen, wenn diese Regel erzwungen wird). Wir ermutigen Webentwickler, ihren Code zu reparieren, um die Regel für eine verbesserte zukünftige Kompatibilität zu befolgen.

### Lesezeichen & Verlauf

Wenn Ihre Erweiterung auf Lesezeichen oder Verlaufsdaten in irgendeiner Weise zugreift, muss sie erheblich überarbeitet werden, um mit Firefox 3 kompatibel zu sein. Die alten APIs für den Zugriff auf diese Informationen wurden durch die neue [Places](/de/docs/Places)-Architektur ersetzt. Siehe den [Places-Migrationsleitfaden](/de/docs/Places_Developer_Guide) für Details zur Aktualisierung Ihrer bestehenden Erweiterung zur Nutzung der Places-API.

### Download-Manager

Die Download-Manager-API hat sich aufgrund des Übergangs von einem RDF-Datenspeicher zur Verwendung der [Storage](/de/docs/Storage)-API leicht geändert. Dies sollte ein relativ leichter Übergang sein. Zudem hat sich die API zur Überwachung des Download-Fortschritts geändert, um mehrere Download-Manager-Listener zu unterstützen. Weitere Informationen finden Sie unter `nsIDownloadManager`, `nsIDownloadProgressListener` und [Monitoring downloads](/de/docs/Monitoring_downloads).

### Passwort-Manager

Wenn Ihre Erweiterung auf Benutzeranmeldeinformationen zugreift und den Passwort-Manager verwendet, muss sie auf die neue Login-Manager-API aktualisiert werden.

- Der Artikel [Using nsILoginManager](/de/docs/XPCOM_Interface_Reference/Using_nsILoginManager) enthält Beispiele, einschließlich einer Demonstration, wie Sie Ihre Erweiterung erstellen können, um sowohl mit dem Passwort-Manager als auch dem Login-Manager zu arbeiten, sodass sie mit Firefox 3 und älteren Versionen funktioniert.
- `nsILoginInfo`
- `nsILoginManager`

Sie können auch den integrierten Passwort-Manager-Speicher überschreiben, wenn Sie in Ihren Erweiterungen eine eigene Passwortspeicherimplementierung bereitstellen möchten. Details finden Sie unter [Erstellen eines Login-Manager-Speichermoduls](/de/docs/Creating_a_Login_Manager_storage_module).

### Popups (Menüs, Kontextmenüs, Tooltips und Panels)

Das XUL-Popup-System wurde in Firefox 3 stark modifiziert. Das Popup-System umfasst Hauptmenüs, Kontextmenüs und Popup-Panels. Ein Leitfaden zur [Verwendung von Popups](/de/docs/XUL/PopupGuide) wurde erstellt, der detailliert beschreibt, wie das System funktioniert. Eine Sache, die zu beachten ist, ist, dass `popup.showPopup` zugunsten des neuen `popup.openPopup` und `popup.openPopupAtScreen` abgelehnt wurde.

### Autovervollständigung

Die `nsIAutoCompleteController`-Schnittstelle hat die `handleEnter()`-Methode geändert, um ein Argument zu akzeptieren, das angibt, ob der Text aus dem Autovervollständigungspopup ausgewählt wurde oder indem der Benutzer die Eingabetaste nach dem Tippen des Textes gedrückt hat.

### DOMParser

- Wenn ein `DOMParser` instanziiert wird, erbt er das Prinzip des aufrufenden Codes sowie die `documentURI` und `baseURI` des Fensters, aus dem der Konstruktor stammt.
- Wenn der Aufrufer UniversalXPConnect-Berechtigungen hat, kann er Parameter an `new DOMParser()` übergeben. Wenn weniger als drei Parameter übergeben werden, werden die verbleibenden Parameter auf `null` standardisiert.

  - Der erste Parameter ist das zu verwendende Prinzip; dies überschreibt das normalerweise geerbte Standardprinzip.
  - Der zweite Parameter ist die zu verwendende `documentURI`.
  - Der dritte Parameter ist die zu verwendende `baseURI`.

- Wenn Sie einen `DOMParser` unter Verwendung eines Vertrags initialisieren, z. B. durch Aufrufen von `createInstance()`, und die `init()`-Methode des `DOMParser` nicht aufrufen, wird beim Versuch, einen Parsing-Vorgang zu starten, der `DOMParser` automatisch mit einem null-Prinzip und `null`-Zeigern für `documentURI` und `baseURI` erstellt und initialisiert.

### Verwenden Sie nicht mehr die interne Zeichenfolgen-API

Die interne Zeichenfolgen-API wird nicht mehr exportiert; Sie müssen zur externen Zeichenfolgen-API wechseln. Siehe diese Artikel für hilfreiche Informationen:

- [Mozilla external string guide](/de/docs/Mozilla_external_string_guide)
- [XPCOM Glue](/de/docs/XPCOM_Glue)
- [Migrating from Internal Linkage to Frozen Linkage](/de/docs/Migrating_from_Internal_Linkage_to_Frozen_Linkage)

### Entfernte Schnittstellen

Folgende Schnittstellen wurden aus Gecko 1.9, das Firefox 3 antreibt, entfernt. Wenn Ihre Erweiterung eine dieser Schnittstellen verwendet, müssen Sie Ihren Code aktualisieren:

- `nsIDOMPaintListener`
- `nsIDOMScrollListener`
- `nsIDOMMutationListener`
- `nsIDOMPageTransitionListener`
- `nsICloseAllWindows` (siehe [Firefox Bug 386200](https://bugzil.la/386200))

## Schritt 4: Überprüfen Sie relevante Chrome-Änderungen

Es gab einige Änderungen am Chrome-Layout, die einige Erweiterungen betreffen könnten.

### Neue Boxen

Es gab eine geringe Änderung am Chrome, die möglicherweise Änderungen in Ihrem Code erfordert. Eine neue `vbox` wurde hinzugefügt, die "browser-bottombox" genannt wird und die Suchleiste und die Statusleiste am unteren Rand des Browserfensters umfasst. Obwohl dies das Erscheinungsbild nicht beeinflusst, könnte es Ihre Erweiterung betreffen, wenn sie Chrome relativ zu diesen Elementen überlagert.

Zum Beispiel, wenn Sie zuvor Chrome vor der Statusleiste überlagert haben, so:

```xml
<window id="main-window">
  <something insertbefore="status-bar" />
</window>
```

Sollten Sie es jetzt so überlagern:

```xml
<vbox id="browser-bottombox">
  <something insertbefore="status-bar" />
</vbox>
```

Oder verwenden Sie die folgende Technik, um Ihr Overlay sowohl in Firefox 2 als auch in Firefox 3 funktionieren zu lassen:

```xml
<window id="main-window">
  <vbox id="browser-bottombox" insertbefore="status-bar">
    <something insertbefore="status-bar" />
  </vbox>
</window>
```

### Geänderte Boxen

Erweiterungen, die versuchen, über das "appcontent"-Feld zu überlagern, um Chrome über Dokumentinhalte schweben zu lassen, zeigen dieses Material nicht mehr an. Sie sollten Ihre Erweiterung aktualisieren, um das neue [`<xul:panel>`](/de/docs/Mozilla/Tech/XUL/panel)-XUL-Element verwenden. Wenn Sie möchten, dass das Panel nicht automatisch nach einer Verzögerung verschwindet, können Sie das Attribut `noautohide` auf `true` setzen.

## Weitere Änderungen

_Fügen Sie hier einfache Änderungen hinzu, die Sie während der Aktualisierung Ihrer Erweiterung vorgenommen haben, um mit Firefox 3 zu arbeiten._

- `chrome://browser/base/utilityOverlay.js` wird aus Sicherheitsgründen nicht mehr unterstützt. Wenn Sie dies zuvor verwendet haben, sollten Sie zu `chrome://browser/content/utilityOverlay.js` wechseln.
- `nsIAboutModule`-Implementierungen müssen jetzt die Methode `getURIFlags` unterstützen. Siehe [nsIAboutModule.idl](https://searchfox.org/mozilla-central/source/netwerk/protocol/about/nsIAboutModule.idl) für Dokumentation. Dies betrifft Erweiterungen, die neue `about:`-URIs bereitstellen. ([Firefox Bug 337746](https://bugzil.la/337746))
- Das [`<xul:tabbrowser>`](/de/docs/Mozilla/Tech/XUL/tabbrowser)-Element ist nicht mehr Teil des "Toolkits" ([Firefox Bug 339964](https://bugzil.la/339964)). Dies bedeutet, dass dieses Element in XUL-Anwendungen und Erweiterungen nicht mehr verfügbar ist. Es wird weiterhin im Hauptfenster von Firefox (browser.xul) verwendet.
- Änderungen an `nsISupports_proxies` und möglicherweise an threadspezifischen Schnittstellen müssen dokumentiert werden.
- Wenn Sie XML-Verarbeitungsanweisungen wie `<?xml-stylesheet ?>` in Ihren XUL-Dateien verwenden, beachten Sie die in [Firefox Bug 319654](https://bugzil.la/319654) vorgenommenen Änderungen:

  1. XML PI werden jetzt zum DOM eines XUL-Dokuments hinzugefügt. Das bedeutet, [`document.firstChild`](/de/docs/Web/API/Node/firstChild) ist nicht mehr garantiert das Wurzelelement. Wenn Sie in Ihrem Skript das Wurzeldokument erhalten müssen, verwenden Sie stattdessen [`document.documentElement`](/de/docs/Web/API/Document/documentElement).
  2. `<?xml-stylesheet ?>` und `<?xul-overlay ?>`-Verarbeitungsanweisungen haben jetzt außerhalb des Dokumentprologs keine Wirkung mehr.

- `window.addEventListener("load", myFunc, true)` wird nicht mehr ausgelöst, wenn Web-Inhalte geladen werden (Laden von Browserseiten). Dies liegt an [Firefox Bug 296639](https://bugzil.la/296639), der die Art und Weise ändert, wie innere und äußere Fenster kommunizieren. Die einfache Lösung besteht darin, `gBrowser.addEventListener("load", myFunc, true)` wie [hier](/de/docs/Code_snippets/Tabbed_browser#detecting_page_load) beschrieben zu verwenden, was auch in Firefox 2 funktioniert.
- `content.window.getSelection()` gibt ein Objekt zurück (das durch `toString()` in eine Zeichenkette umgewandelt werden kann), anders als das nun veraltete `content.document.getSelection()`, das eine Zeichenkette zurückgibt.
- `event.preventBubble()` wurde in Firefox 2 außer Gebrauch genommen und in Firefox 3 entfernt. Verwenden Sie [`event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation), was auch in Firefox 2 funktioniert.
- Timer, die mit `setTimeout()` initiiert werden, werden jetzt durch Modalfenster blockiert aufgrund der Korrektur für [Firefox Bug 52209](https://bugzil.la/52209). Sie können stattdessen `nsITimer` verwenden.
- Wenn Ihre Erweiterung einer nicht vertrauenswürdigen Quelle (z. B. einer Website) den Zugriff auf die Chrome der Erweiterung erlauben muss, müssen Sie das neue [`contentaccessible`-Flag](/de/docs/Chrome_Registration#contentaccessible) verwenden.
