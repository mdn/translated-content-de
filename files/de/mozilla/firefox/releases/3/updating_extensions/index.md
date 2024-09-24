---
title: Aktualisieren von Erweiterungen für Firefox 3
slug: Mozilla/Firefox/Releases/3/Updating_extensions
l10n:
  sourceCommit: d681d0262045649aefa02efb937ff5f22b6e3b2a
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen, die für Entwickler nützlich sein werden, die ihre Erweiterungen aktualisieren möchten, damit sie ordnungsgemäß unter Firefox 3 funktionieren.

Bevor wir fortfahren, gibt es einen hilfreichen Hinweis: Wenn die einzige Änderung, die Ihre Erweiterung benötigt, eine Erhöhung des `maxVersion`-Feldes im Installationsmanifest ist, und Sie Ihre Erweiterung bei [addons.mozilla.org](https://addons.mozilla.org) hosten, müssen Sie keine neue Version Ihrer Erweiterung hochladen! Verwenden Sie das Entwicklerkontrollpanel bei AMO, um die `maxVersion` anzupassen. Auf diese Weise können Sie vermeiden, dass Ihre Erweiterung erneut überprüft werden muss.

## Schritt 1: Aktualisieren Sie das Installationsmanifest

Der erste Schritt – und für die meisten Erweiterungen der einzige notwendige – besteht darin, die [Installationsmanifest](/de/docs/Install_Manifests)-Datei, [`install.rdf`](/de/docs/Creating_a_Skin_for_Firefox/install.rdf), zu aktualisieren, um die Kompatibilität mit Firefox 3 anzuzeigen.

Suchen Sie die Zeile, die die maximal kompatible Version von Firefox angibt (die für Firefox 2 beispielsweise so aussehen könnte):

```xml
<em:maxVersion>2.0.*</em:maxVersion>
```

Ändern Sie sie, um die Kompatibilität mit Firefox 3 anzuzeigen:

```xml
<em:maxVersion>3.0.*</em:maxVersion>
```

Installieren Sie dann Ihre Erweiterung erneut.

Beachten Sie, dass Firefox 3 auf die zusätzliche ".0" in der Versionsnummer verzichtet, sodass Sie statt `3.0.0.*` nur `3.0.*` verwenden müssen.

Es gab (und wird weiterhin geben) eine Reihe von API-Änderungen, die wahrscheinlich einige Erweiterungen beeinflussen werden. Wir arbeiten noch daran, eine vollständige Liste dieser Änderungen zu erstellen.

> [!NOTE]
> Wenn Ihre Erweiterung noch ein [`Install.js`](/de/docs/Install.js)-Skript anstelle eines [Installationsmanifestes](/de/docs/Install_Manifests) verwendet, müssen Sie jetzt auf ein Installationsmanifest umsteigen. Firefox 3 unterstützt keine `install.js`-Skripte in XPI-Dateien mehr.

### Lokalisierungen zum Installationsmanifest hinzufügen

Firefox 3 unterstützt neue Eigenschaften im Installationsmanifest, um lokalisierte Beschreibungen anzugeben. Die alten Methoden funktionieren immer noch, jedoch ermöglichen die neuen Methoden, dass Firefox die Lokalisierungen auch dann erkennt, wenn das Add-on deaktiviert ist und auf die Installation wartet. Weitere Details finden Sie unter [Lokalisierung von Erweiterungsbeschreibungen](/de/docs/Localizing_extension_descriptions).

## Schritt 2: Stellen Sie sicher, dass Sie sichere Updates bereitstellen

Wenn Sie Add-ons selbst hosten und nicht bei einem sicheren Add-on-Hosting-Anbieter wie [addons.mozilla.org](https://addons.mozilla.org), müssen Sie eine sichere Methode zur Aktualisierung Ihres Add-ons bereitstellen. Dies beinhaltet entweder das Hosting Ihrer Updates auf einer SSL-Website oder die Verwendung kryptografischer Schlüssel zur Signierung der Update-Informationen. Lesen Sie [Sichern von Updates](/de/docs/Extension_Versioning,_Update_and_Compatibility#securing_updates) für weitere Informationen.

## Schritt 3: Umgang mit geänderten APIs

Mehrere APIs wurden in bedeutender Weise geändert. Die bedeutendsten Änderungen, die wahrscheinlich viele Erweiterungen betreffen werden, sind:

### DOM

Knoten von externen Dokumenten sollten mit [`document.importNode()`](/de/docs/Web/API/Document/importNode) (oder mit [`document.adoptNode()`](/de/docs/Web/API/Document/adoptNode) übernommen) geklont werden, bevor sie in das aktuelle Dokument eingefügt werden können. Weitere Informationen zu den [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument)-Themen finden Sie in den [W3C DOM FAQ](https://www.w3.org/DOM/faq.html#ownerdoc).

Firefox erzwingt derzeit diese Regel nicht (es tat dies eine Weile während der Entwicklung von Firefox 3, aber zu viele Webseiten brechen, wenn diese Regel durchgesetzt wird). Wir ermutigen Webentwickler, ihren Code zu korrigieren, um die zukünftige Kompatibilität zu verbessern.

### Lesezeichen & Verlauf

Wenn Ihre Erweiterung in irgendeiner Weise auf Lesezeichen oder Verlaufsdaten zugreift, benötigt sie erhebliche Änderungen, um mit Firefox 3 kompatibel zu sein. Die alten APIs für den Zugriff auf diese Informationen wurden durch die neue [Places](/de/docs/Places)-Architektur ersetzt. Siehe den [Places-Migrationsleitfaden](/de/docs/Places_Developer_Guide) für Details zur Aktualisierung Ihrer bestehenden Erweiterung, um die Places API zu verwenden.

### Download-Manager

Die API des Download-Managers hat sich aufgrund des Wechsels von einer RDF-Datenbank zum [Storage](/de/docs/Storage)-API leicht geändert. Dieser Übergang sollte recht einfach sein. Darüber hinaus wurde die API zur Überwachung des Download-Fortschritts geändert, um mehrere Download-Manager-Listener zu unterstützen. Weitere Informationen finden Sie unter `nsIDownloadManager`, `nsIDownloadProgressListener` und [Überwachung von Downloads](/de/docs/Monitoring_downloads).

### Passwortmanager

Wenn Ihre Erweiterung auf Benutzeranmeldedaten mit dem Passwortmanager zugreift, muss sie aktualisiert werden, um die neue Login-Manager-API zu verwenden.

- Der Artikel [Verwendung von nsILoginManager](/de/docs/XPCOM_Interface_Reference/Using_nsILoginManager) enthält Beispiele, einschließlich einer Demonstration, wie Sie Ihre Erweiterung so schreiben, dass sie sowohl mit dem Passwortmanager als auch mit dem Login-Manager funktioniert, damit sie sowohl mit Firefox 3 als auch früheren Versionen funktioniert.
- `nsILoginInfo`
- `nsILoginManager`

Sie können auch den eingebauten Passwortspeicher überschreiben, wenn Sie Ihre eigene Passwortspeicherimplementierung in Ihre Erweiterungen integrieren möchten. Siehe [Erstellung eines Login-Manager-Speichermoduls](/de/docs/Creating_a_Login_Manager_storage_module) für Details.

### Popups (Menüs, Kontextmenüs, Tooltips und Panels)

Das XUL-Popup-System wurde in Firefox 3 stark modifiziert. Das Popup-System umfasst Hauptmenüs, Kontextmenüs und Popup-Panels. Ein Leitfaden zu [Verwendung von Popups](/de/docs/XUL/PopupGuide) wurde erstellt, der detailliert beschreibt, wie das System funktioniert. Es ist zu beachten, dass `popup.showPopup` zugunsten neuer `popup.openPopup` und `popup.openPopupAtScreen` veraltet ist.

### Autovervollständigung

Die Methode `handleEnter()` der `nsIAutoCompleteController`-Schnittstelle wurde geändert, um ein Argument zu akzeptieren, das angibt, ob der Text aus dem Autovervollständigungs-Popup ausgewählt oder vom Benutzer durch Drücken der Eingabetaste nach dem Eingeben von Text ausgewählt wurde.

### DOMParser

- Wenn ein `DOMParser` instanziiert wird, erbt er die Berechtigung des aufrufenden Codes sowie die `documentURI` und `baseURI` des Fensters, aus dem der Konstruktor stammt.
- Wenn der Aufrufer UniversalXPConnect-Berechtigungen hat, kann er Parameter an `new DOMParser()` übergeben. Wenn weniger als drei Parameter übergeben werden, werden die verbleibenden Parameter standardmäßig auf `null` gesetzt.

  - Der erste Parameter ist das zu verwendende Prinzipal; dies überschreibt das normalerweise geerbte Standard-Prinzipal.
  - Der zweite Parameter ist die zu verwendende `documentURI`.
  - Der dritte Parameter ist die zu verwendende `baseURI`.

- Wenn Sie einen `DOMParser` mit einem Vertrag initialisieren, z.B. durch Aufruf von `createInstance()`, und nicht die `init()`-Methode des `DOMParser` aufrufen, wird bei dem Versuch, einen Parser zu initiieren, der `DOMParser` automatisch mit einem null-Prinzipal und `null`-Zeigern für `documentURI` und `baseURI` erstellt und initialisiert.

### Verwendung der internen String-API einstellen

Die interne String-API wird nicht mehr exportiert; Sie müssen zur externen String-API migrieren. Siehe diese Artikel für nützliche Informationen:

- [Mozilla externe String-Anleitung](/de/docs/Mozilla_external_string_guide)
- [XPCOM Glue](/de/docs/XPCOM_Glue)
- [Migration von interner zu gefrorener Verknüpfung](/de/docs/Migrating_from_Internal_Linkage_to_Frozen_Linkage)

### Entfernte Schnittstellen

Die folgenden Schnittstellen wurden aus Gecko 1.9, dem Kern von Firefox 3, entfernt. Wenn Ihre Erweiterung eine dieser Schnittstellen verwendet, müssen Sie Ihren Code aktualisieren:

- `nsIDOMPaintListener`
- `nsIDOMScrollListener`
- `nsIDOMMutationListener`
- `nsIDOMPageTransitionListener`
- `nsICloseAllWindows` (siehe [Firefox Bug 386200](https://bugzil.la/386200))

## Schritt 4: Überprüfen Sie auf relevante Chrome-Änderungen

Es gab einige Änderungen im Chrome-Layout, die einige Erweiterungen beeinflussen könnten.

### Neue Boxen

Es gab eine kleine Änderung im Chrome, die Änderungen in Ihrem Code erfordern könnte. Es wurde ein neues `vbox` hinzugefügt, genannt "browser-bottombox", das die Suchleiste und die Statusleiste am unteren Rand des Browserfensters einschließt. Obwohl dies das Aussehen der Anzeige nicht beeinträchtigt, kann es Ihre Erweiterung betreffen, wenn sie Chrome im Verhältnis zu diesen Elementen überlagert.

Zum Beispiel, wenn Sie zuvor Chrome vor der Statusleiste überlagert haben, wie folgt:

```xml
<window id="main-window">
  <something insertbefore="status-bar" />
</window>
```

Sollten Sie es jetzt wie folgt überlagern:

```xml
<vbox id="browser-bottombox">
  <something insertbefore="status-bar" />
</vbox>
```

Oder verwenden Sie die folgende Technik, um Ihre Überlappung sowohl in Firefox 2 als auch in Firefox 3 zu ermöglichen:

```xml
<window id="main-window">
  <vbox id="browser-bottombox" insertbefore="status-bar">
    <something insertbefore="status-bar" />
  </vbox>
</window>
```

### Geänderte Boxen

Erweiterungen, die versuchen, auf das "appcontent"-Feld zu überlagern, um Chrome über Dokumentinhalte zu schweben, werden dieses Material nicht mehr anzeigen. Sie sollten Ihre Erweiterung aktualisieren, um das neue XUL-Element [`<xul:panel>`](/de/docs/Mozilla/Tech/XUL/panel) zu verwenden. Wenn Sie möchten, dass das Panel nach einer Verzögerung nicht automatisch verschwindet, können Sie das Attribut `noautohide` auf `true` setzen.

## Weitere Änderungen

_Fügen Sie hier einfache Änderungen hinzu, die Sie beim Aktualisieren Ihrer Erweiterung zur Arbeit mit Firefox 3 vornehmen mussten._

- `chrome://browser/base/utilityOverlay.js` wird aus Sicherheitsgründen nicht mehr unterstützt. Wenn Sie dies zuvor verwendet haben, sollten Sie auf `chrome://browser/content/utilityOverlay.js` umsteigen.
- Implementierungen von `nsIAboutModule` müssen jetzt die Methode `getURIFlags` unterstützen. Siehe [nsIAboutModule.idl](https://searchfox.org/mozilla-central/source/netwerk/protocol/about/nsIAboutModule.idl) für Dokumentation. Dies betrifft Erweiterungen, die neue `about:`-URIs bereitstellen. ([Firefox Bug 337746](https://bugzil.la/337746))
- Das [`<xul:tabbrowser>`](/de/docs/Mozilla/Tech/XUL/tabbrowser)-Element ist nicht länger Teil des "toolkits" ([Firefox Bug 339964](https://bugzil.la/339964)). Das bedeutet, dass dieses Element in XUL-Anwendungen und Erweiterungen nicht mehr verfügbar ist. Es wird weiterhin im Hauptfenster von Firefox (browser.xul) verwendet.
- Änderungen an `nsISupports_proxies` und möglicherweise an threading-bezogenen Schnittstellen müssen dokumentiert werden.
- Wenn Sie XML-Verarbeitungsanweisungen verwenden, wie `<?xml-stylesheet ?>` in Ihren XUL-Dateien, beachten Sie die Änderungen in [Firefox Bug 319654](https://bugzil.la/319654):

  1. XML-PIs werden jetzt in das DOM eines XUL-Dokuments aufgenommen. Das bedeutet, dass {{ Domxref("Node.firstChild", "document.firstChild") }} nicht mehr garantiert das Wurzelelement ist. Verwenden Sie in Ihrem Skript stattdessen {{ Domxref("document.documentElement") }}, um das Wurzeldokument zu erhalten.
  2. `<?xml-stylesheet ?>` und `<?xul-overlay ?>`-Verarbeitungsanweisungen haben außerhalb des Dokumentprologs keine Auswirkungen mehr.

- `window.addEventListener("load", myFunc, true)` wird nicht ausgelöst, wenn Webinhalte geladen werden (Browserseiteneinsätze). Dies liegt an [Firefox Bug 296639](https://bugzil.la/296639), der die Kommunikation zwischen inneren und äußeren Fenstern ändert. Die einfache Lösung besteht darin, `gBrowser.addEventListener("load", myFunc, true)` zu verwenden, wie [hier](/de/docs/Code_snippets/Tabbed_browser#detecting_page_load) beschrieben, was auch in Firefox 2 funktioniert.
- `content.window.getSelection()` gibt ein Objekt zurück (das mit `toString()` in einen String konvertiert werden kann), im Gegensatz zu dem nun veralteten `content.document.getSelection()`, das einen String zurückgibt.
- `event.preventBubble()` wurde in Firefox 2 veraltet und in Firefox 3 entfernt. Verwenden Sie [`event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation), das auch in Firefox 2 funktioniert.
- Timer, die mit `setTimeout()` initiiert werden, werden jetzt durch modale Fenster blockiert, aufgrund der Korrektur von [Firefox Bug 52209](https://bugzil.la/52209). Sie können stattdessen `nsITimer` verwenden.
- Wenn Ihre Erweiterung eine untrusted Quelle (z.B. eine Webseite) zulassen muss, um auf das Chrome der Erweiterung zuzugreifen, müssen Sie das neue [`contentaccessible`-Flag](/de/docs/Chrome_Registration#contentaccessible) verwenden.
