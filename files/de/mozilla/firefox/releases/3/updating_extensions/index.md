---
title: Aktualisierung von Erweiterungen für Firefox 3
slug: Mozilla/Firefox/Releases/3/Updating_extensions
l10n:
  sourceCommit: 30bf998d2d87c97c2865d713ad5afc9c476264a0
---

{{FirefoxSidebar}}

Dieser Artikel bietet nützliche Informationen für Entwickler, die ihre Erweiterungen aktualisieren möchten, damit sie ordnungsgemäß unter Firefox 3 funktionieren.

Bevor wir fortfahren, gibt es einen hilfreichen Hinweis: Wenn die einzige Änderung, die Ihre Erweiterung benötigt, eine Anpassung des `maxVersion`-Feldes in ihrer Installationsdatei ist und Sie Ihre Erweiterung auf [addons.mozilla.org](https://addons.mozilla.org/) hosten, müssen Sie nicht tatsächlich eine neue Version Ihrer Erweiterung hochladen! Verwenden Sie das Entwickler-Kontrollpanel auf AMO, um die `maxVersion` anzupassen. Auf diese Weise können Sie vermeiden, dass Ihre Erweiterung neu überprüft werden muss.

## Schritt 1: Aktualisierung des Installationsmanifests

Der erste Schritt — und für die meisten Erweiterungen auch der einzige notwendige — besteht darin, die [Installationsdatei](/de/docs/Install_Manifests), [`install.rdf`](/de/docs/Creating_a_Skin_for_Firefox/install.rdf), zu aktualisieren, um die Kompatibilität mit Firefox 3 anzugeben.

Finden Sie die Zeile, die die maximal kompatible Version von Firefox angibt (für Firefox 2 könnte diese so aussehen):

```xml
<em:maxVersion>2.0.*</em:maxVersion>
```

Ändern Sie diese, um die Kompatibilität mit Firefox 3 anzugeben:

```xml
<em:maxVersion>3.0.*</em:maxVersion>
```

Installieren Sie dann Ihre Erweiterung erneut.

Beachten Sie, dass Firefox 3 die zusätzliche ".0" in der Versionsnummer weglässt. Anstelle von `3.0.0.*` brauchen Sie also nur `3.0.*` zu verwenden.

Es gab (und wird weiterhin geben) eine Reihe von API-Änderungen, die einige Erweiterungen vermutlich beeinträchtigen werden. Wir arbeiten noch daran, eine vollständige Liste dieser Änderungen zusammenzustellen.

> [!NOTE]
> Falls Ihre Erweiterung noch ein [`Install.js`](/de/docs/Install.js)-Skript anstelle eines [Installationsmanifests](/de/docs/Install_Manifests) verwendet, müssen Sie jetzt auf ein Installationsmanifest umsteigen. Firefox 3 unterstützt keine `install.js`-Skripte in XPI-Dateien mehr.

### Hinzufügen von Lokalisierungen zum Installationsmanifest

Firefox 3 unterstützt neue Eigenschaften im Installationsmanifest zur Angabe lokalisierter Beschreibungen. Die alten Methoden funktionieren weiterhin, jedoch ermöglichen es die neuen, dass Firefox die Lokalisierungen auch dann übernimmt, wenn das Add-on deaktiviert und die Installation noch aussteht. Weitere Details finden Sie unter [Lokalisierung von Erweiterungsbeschreibungen](/de/docs/Localizing_extension_descriptions).

## Schritt 2: Stellen Sie sicher, dass Sie sichere Updates bereitstellen

Wenn Sie Add-ons selbst hosten und nicht auf einem sicheren Add-on-Hosting-Anbieter wie [addons.mozilla.org](https://addons.mozilla.org/) sind, dann müssen Sie eine sichere Methode zum Aktualisieren Ihres Add-ons bereitstellen. Dies beinhaltet entweder das Hosting Ihrer Updates auf einer SSL-Website oder die Verwendung kryptografischer Schlüssel zur Signierung der Aktualisierungsinformationen. Lesen Sie [Sicherung von Updates](/de/docs/Extension_Versioning,_Update_and_Compatibility#securing_updates) für weitere Informationen.

## Schritt 3: Umgang mit geänderten APIs

Mehrere APIs wurden signifikant geändert. Die wichtigsten davon, die wahrscheinlich eine große Anzahl von Erweiterungen betreffen, sind:

### DOM

Knoten aus externen Dokumenten sollten mithilfe von [`document.importNode()`](/de/docs/Web/API/Document/importNode) (oder adoptiert mithilfe von [`document.adoptNode()`](/de/docs/Web/API/Document/adoptNode)) geklont werden, bevor sie in das aktuelle Dokument eingefügt werden. Weitere Informationen zu den [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument)-Problemen finden Sie in den [W3C DOM FAQ](https://www.w3.org/DOM/faq.html#ownerdoc).

Derzeit erzwingt Firefox diese Regel nicht (das war eine Zeit lang während der Entwicklung von Firefox 3 der Fall, aber zu viele Seiten brechen, wenn diese Regel durchgesetzt wird). Wir ermutigen Webentwickler, ihren Code zu verbessern, um diese Regel für eine verbesserte zukünftige Kompatibilität einzuhalten.

### Lesezeichen und Verlauf

Wenn Ihre Erweiterung Lesezeichen- oder Verlaufsdaten auf irgendeine Weise abruft, wird sie umfangreiche Änderungen benötigen, um mit Firefox 3 kompatibel zu sein. Die alten APIs für den Zugriff auf diese Informationen wurden durch die neue [Places](/de/docs/Places)-Architektur ersetzt. Sehen Sie den [Places-Migrationsleitfaden](/de/docs/Places_Developer_Guide) für Details zur Aktualisierung Ihrer bestehenden Erweiterung, um die Places-API zu nutzen.

### Download-Manager

Die Download-Manager-API hat sich leicht geändert aufgrund des Übergangs von einem RDF-Daten-Repository zur Verwendung der [Storage](/de/docs/Storage)-API. Dies sollte eine recht einfache Umstellung sein. Zusätzlich hat sich die API zum Überwachen des Download-Fortschritts geändert, um mehrere Download-Manager-Listener zu unterstützen. Weitere Informationen finden Sie in `nsIDownloadManager`, `nsIDownloadProgressListener` und [Überwachen von Downloads](/de/docs/Monitoring_downloads).

### Passwort-Manager

Falls Ihre Erweiterung Benutzeranmeldeinformationen über den Passwort-Manager abruft, muss sie aktualisiert werden, um die neue Login-Manager-API zu nutzen.

- Der Artikel [Verwendung von nsILoginManager](/de/docs/XPCOM_Interface_Reference/Using_nsILoginManager) enthält Beispiele, einschließlich einer Demonstration, wie man seine Erweiterung so schreiben kann, dass sie sowohl mit dem Passwort-Manager als auch mit dem Login-Manager funktioniert und somit sowohl mit Firefox 3 als auch mit früheren Versionen kompatibel ist.
- `nsILoginInfo`
- `nsILoginManager`

Sie können auch den integrierten Passwortmanager-Speicher überschreiben, wenn Sie in Ihren Erweiterungen eine eigene Passwortspeicher-Implementierung bereitstellen möchten. Weitere Informationen finden Sie unter [Erstellen eines Login-Manager-Speichermoduls](/de/docs/Creating_a_Login_Manager_storage_module).

### Popups (Menüs, Kontextmenüs, Tooltips und Panels)

Das XUL-Popup-System wurde in Firefox 3 stark modifiziert. Das Popup-System umfasst Hauptmenüs, Kontextmenüs und Popup-Panels. Ein Leitfaden zur [Verwendung von Popups](/de/docs/XUL/PopupGuide) wurde erstellt, der detailliert beschreibt, wie das System funktioniert. Eine zu beachtende Änderung ist, dass `popup.showPopup` zugunsten der neuen Methoden `popup.openPopup` und `popup.openPopupAtScreen` veraltet ist.

### Autovervollständigen

Die Methode `handleEnter()` des Interfaces `nsIAutoCompleteController` wurde geändert, sodass sie jetzt ein Argument akzeptiert, welches angibt, ob der Text aus dem Autovervollständigungs-Popup ausgewählt wurde oder durch das Drücken der Eingabetaste nach einer Texteingabe.

### DOMParser

- Wenn ein `DOMParser` instanziiert wird, erbt er die Berechtigung des aufrufenden Codes sowie die `documentURI` und `baseURI` des Fensters, aus dem der Konstruktor stammt.
- Falls der Anrufer UniversalXPConnect-Berechtigungen hat, kann er Parameter an `new DOMParser()` übergeben. Wenn weniger als drei Parameter übergeben werden, setzen sich die übrigen Parameter auf `null`.

  - Der erste Parameter ist das zu verwendende Berechtigungsdokument; dies überschreibt das normalerweise geerbte Standarddokument.
  - Der zweite Parameter ist die zu verwendende `documentURI`.
  - Der dritte Parameter ist die zu verwendende `baseURI`.

- Wenn Sie einen `DOMParser` mit Hilfe eines Vertrags initialisieren, etwa durch den Aufruf von `createInstance()`, und nicht die `init()`-Methode des `DOMParser` aufrufen, wird beim Versuch, eine Parsing-Operation zu initialisieren, der `DOMParser` automatisch mit einem Null-Dokument und Null-Zeigern für `documentURI` und `baseURI` erstellt und initialisiert.

### Verwendung der internen String-API einstellen

Die interne String-API wird nicht mehr exportiert; Sie müssen auf die externe String-API umsteigen. Diese Artikel bieten hilfreiche Informationen:

- [Mozilla externe String-Leitfaden](/de/docs/Mozilla_external_string_guide)
- [XPCOM Glue](/de/docs/XPCOM_Glue)
- [Migration von interner zu gefrorener Verknüpfung](/de/docs/Migrating_from_Internal_Linkage_to_Frozen_Linkage)

### Entfernte Schnittstellen

Die folgenden Schnittstellen wurden aus Gecko 1.9 entfernt, das Firefox 3 antreibt. Falls Ihre Erweiterung eine dieser Schnittstellen verwendet, müssen Sie Ihren Code aktualisieren:

- `nsIDOMPaintListener`
- `nsIDOMScrollListener`
- `nsIDOMMutationListener`
- `nsIDOMPageTransitionListener`
- `nsICloseAllWindows` (siehe [Firefox-Bug 386200](https://bugzil.la/386200))

## Schritt 4: Überprüfen Sie auf relevante Chrome-Änderungen

Es gab einige Änderungen im Chrome-Layout, die einige Erweiterungen betreffen könnten.

### Neue Boxen

Es gab eine geringfügige Änderung am Chrome, die Änderungen in Ihrem Code erforderlich machen könnte. Eine neue `vbox` wurde hinzugefügt, genannt "browser-bottombox", die die Suchleiste und die Statusleiste am unteren Rand des Browserfensters umschließt. Obwohl dies das Erscheinungsbild der Anzeige nicht beeinflusst, könnte es Ihre Erweiterung betreffen, wenn sie Chrome in Bezug auf diese Elemente überlagert.

Beispielsweise, falls Sie zuvor Chrome vor der Statusleiste überlagert haben, wie folgt:

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

Oder verwenden Sie die folgende Technik, um Ihre Überlagerung sowohl in Firefox 2 als auch in Firefox 3 funktionieren zu lassen:

```xml
<window id="main-window">
  <vbox id="browser-bottombox" insertbefore="status-bar">
    <something insertbefore="status-bar" />
  </vbox>
</window>
```

### Geänderte Boxen

Erweiterungen, die versuchen, auf die „appcontent“-Box zu überlagern, um Chrome über Dokumenteninhalte zu schweben, zeigen dieses Material nicht mehr an. Sie sollten Ihre Erweiterung aktualisieren, um das neue [`<xul:panel>`](/de/docs/Mozilla/Tech/XUL/panel) XUL-Element zu verwenden. Wenn Sie möchten, dass das Panel nicht automatisch nach einer Verzögerung verschwindet, können Sie das Attribut `noautohide` auf `true` setzen.

## Weitere Änderungen

_Fügen Sie hier einfache Änderungen hinzu, die Sie vornehmen mussten, während Sie Ihre Erweiterung aktualisierten, damit sie mit Firefox 3 funktioniert._

- `chrome://browser/base/utilityOverlay.js` wird aus Sicherheitsgründen nicht mehr unterstützt. Falls Sie dies zuvor verwendet haben, sollten Sie auf `chrome://browser/content/utilityOverlay.js` umstellen.
- `nsIAboutModule`-Implementierungen müssen jetzt die Methode `getURIFlags` unterstützen. Siehe [nsIAboutModule.idl](https://searchfox.org/mozilla-central/source/netwerk/protocol/about/nsIAboutModule.idl) für Dokumentation. Dies betrifft Erweiterungen, die neue `about:`-URIs bereitstellen. ([Firefox-Bug 337746](https://bugzil.la/337746))
- Das [`<xul:tabbrowser>`](/de/docs/Mozilla/Tech/XUL/tabbrowser)-Element ist nicht länger Teil des "toolkit" ([Firefox-Bug 339964](https://bugzil.la/339964)). Dies bedeutet, dass dieses Element nicht mehr für XUL-Anwendungen und Erweiterungen verfügbar ist. Es wird weiterhin im Hauptfenster von Firefox (browser.xul) verwendet.
- Änderungen an `nsISupports_proxies` und möglicherweise an threading-bezogenen Schnittstellen müssen dokumentiert werden.
- Falls Sie XML-Verarbeitungsanweisungen wie `<?xml-stylesheet ?>` in Ihren XUL-Dateien verwenden, beachten Sie die Änderungen, die in [Firefox-Bug 319654](https://bugzil.la/319654) gemacht wurden:

  1. XML PIs werden jetzt dem DOM eines XUL-Dokuments hinzugefügt. Das bedeutet, [`document.firstChild`](/de/docs/Web/API/Node/firstChild) ist nicht mehr garantiert das Wurzelelement. Falls Sie in Ihrem Skript das Wurzeldokument abrufen müssen, verwenden Sie [`document.documentElement`](/de/docs/Web/API/Document/documentElement) stattdessen.
  2. `<?xml-stylesheet ?>` und `<?xul-overlay ?>`-Verarbeitungsanweisungen haben jetzt keine Wirkung außerhalb des Dokumentprologs.

- `window.addEventListener("load", myFunc, true)` wird nicht ausgelöst, wenn Webinhalte geladen werden (Browser-Seitenläufe). Dies liegt an [Firefox-Bug 296639](https://bugzil.la/296639), der den Weg verändert hat, wie innere und äußere Fenster kommunizieren. Die einfache Lösung hier ist, `gBrowser.addEventListener("load", myFunc, true)` wie [hier](/de/docs/Code_snippets/Tabbed_browser#detecting_page_load) beschrieben zu verwenden, und dies funktioniert auch in Firefox 2.
- `content.window.getSelection()` gibt ein Objekt zurück (das mit `toString()` in einen String umgewandelt werden kann), im Gegensatz zu dem nun veralteten `content.document.getSelection()`, das einen String zurückgibt.
- `event.preventBubble()` wurde in Firefox 2 veraltet und in Firefox 3 entfernt. Verwenden Sie [`event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation), was auch in Firefox 2 funktioniert.
- Timer, die mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) initiiert werden, werden jetzt durch modale Fenster blockiert, aufgrund der Korrektur des [Firefox-Bugs 52209](https://bugzil.la/52209). Sie können stattdessen `nsITimer` verwenden.
- Falls Ihre Erweiterung zulassen muss, dass eine unzuverlässige Quelle (z.B. eine Webseite) auf das Chrome der Erweiterung zugreift, müssen Sie das neue [`contentaccessible`-Flag](/de/docs/Chrome_Registration#contentaccessible) verwenden.
