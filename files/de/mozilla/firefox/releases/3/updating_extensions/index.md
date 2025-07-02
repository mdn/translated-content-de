---
title: Aktualisierung von Erweiterungen für Firefox 3
slug: Mozilla/Firefox/Releases/3/Updating_extensions
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen, die für Entwickler nützlich sind, die ihre Erweiterungen aktualisieren möchten, damit sie unter Firefox 3 ordnungsgemäß funktionieren.

Bevor wir fortfahren, können wir Ihnen einen hilfreichen Hinweis geben: Wenn die einzige Änderung, die Ihre Erweiterung benötigt, eine Anpassung des `maxVersion` Feldes in ihrem Installationsmanifest ist, und Sie Ihre Erweiterung auf [addons.mozilla.org](https://addons.mozilla.org/) hosten, müssen Sie keine neue Version Ihrer Erweiterung hochladen! Verwenden Sie das Entwickler-Kontrollzentrum auf AMO, um die `maxVersion` anzupassen. Auf diese Weise können Sie vermeiden, dass Ihre Erweiterung erneut überprüft werden muss.

## Schritt 1: Aktualisieren Sie das Installationsmanifest

Der erste Schritt — und für die meisten Erweiterungen der einzige notwendige Schritt — ist die Aktualisierung der Datei [Installationsmanifest](/de/docs/Install_Manifests), [`install.rdf`](/de/docs/Creating_a_Skin_for_Firefox/install.rdf), um die Kompatibilität mit Firefox 3 anzuzeigen.

Suchen Sie die Zeile, die die maximale kompatible Version von Firefox angibt (die für Firefox 2 möglicherweise so aussieht):

```xml
<em:maxVersion>2.0.*</em:maxVersion>
```

Ändern Sie sie, um die Kompatibilität mit Firefox 3 anzuzeigen:

```xml
<em:maxVersion>3.0.*</em:maxVersion>
```

Installieren Sie dann Ihre Erweiterung neu.

Beachten Sie, dass Firefox 3 das zusätzliche ".0" in der Versionsnummer weglässt. Statt `3.0.0.*` zu verwenden, müssen Sie nur `3.0.*` verwenden.

Es gab (und wird weiterhin geben) eine Reihe von API-Änderungen, die wahrscheinlich einige Erweiterungen beeinträchtigen werden. Wir arbeiten noch daran, eine vollständige Liste dieser Änderungen zusammenzustellen.

> [!NOTE]
> Wenn Ihre Erweiterung immer noch ein [`Install.js`](/de/docs/Install.js)-Skript anstelle eines [Installationsmanifests](/de/docs/Install_Manifests) verwendet, müssen Sie jetzt auf ein Installationsmanifest umstellen. Firefox 3 unterstützt `install.js` Skripte in XPI-Dateien nicht mehr.

### Lokalisierungen zum Installationsmanifest hinzufügen

Firefox 3 unterstützt neue Eigenschaften im Installationsmanifest, um lokalisierte Beschreibungen anzugeben. Die alten Methoden funktionieren weiterhin, jedoch ermöglichen es die neuen Methoden, dass Firefox die Lokalisierungen selbst dann erkennt, wenn das Add-on deaktiviert und zur Installation ausstehend ist. Weitere Details finden Sie unter [Lokalisieren von Erweiterungsbeschreibungen](/de/docs/Localizing_extension_descriptions).

## Schritt 2: Stellen Sie sicher, dass Sie sichere Updates bereitstellen

Wenn Sie selbst Add-ons hosten und nicht auf einem sicheren Add-on Hosting-Provider wie [addons.mozilla.org](https://addons.mozilla.org/), dann müssen Sie eine sichere Methode zur Aktualisierung Ihres Add-ons bereitstellen. Dies beinhaltet entweder das Hosten Ihrer Updates auf einer SSL-Website oder die Verwendung kryptographischer Schlüssel zur Signierung der Update-Informationen. Weitere Informationen finden Sie unter [Sicherung von Updates](/de/docs/Extension_Versioning,_Update_and_Compatibility#securing_updates).

## Schritt 3: Umgang mit geänderten APIs

Mehrere APIs wurden in bedeutenden Weisen verändert. Die bedeutendsten davon, die wahrscheinlich eine große Anzahl von Erweiterungen betreffen, sind:

### DOM

Knoten aus externen Dokumenten sollten mit [`document.importNode()`](/de/docs/Web/API/Document/importNode) geklont (oder mit [`document.adoptNode()`](/de/docs/Web/API/Document/adoptNode) übernommen) werden, bevor sie in das aktuelle Dokument eingefügt werden können. Weitere Informationen zu den Problemen mit [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument) finden Sie in der [W3C DOM FAQ](https://www.w3.org/DOM/faq.html#ownerdoc).

Firefox erzwingt diese Regel derzeit nicht (es tat dies während der Entwicklung von Firefox 3 für eine Weile, aber zu viele Seiten brachen, wenn diese Regel durchgesetzt wurde). Wir ermutigen Webentwickler, ihren Code zu reparieren, um dieser Regel für eine verbesserte zukünftige Kompatibilität zu folgen.

### Lesezeichen & Verlauf

Wenn Ihre Erweiterung auf Lesezeichen- oder Verlaufsdaten zugreift, benötigt sie umfangreiche Arbeiten, um mit Firefox 3 kompatibel zu sein. Die alten APIs zum Zugriff auf diese Informationen wurden durch die neue [Places](/de/docs/Places) Architektur ersetzt. Siehe den [Places-Migrationsleitfaden](/de/docs/Places_Developer_Guide) für Einzelheiten zur Aktualisierung Ihrer bestehenden Erweiterung zur Verwendung der Places-API.

### Download-Manager

Die Download-Manager-API hat sich aufgrund des Übergangs von einem RDF-Datenspeicher zur Verwendung der [Storage](/de/docs/Storage) API leicht geändert. Dies sollte eine recht einfache Umstellung sein. Darüber hinaus hat sich die API zum Überwachen des Download-Fortschritts geändert, um mehrere Download-Manager-Listener zu unterstützen. Weitere Informationen finden Sie unter `nsIDownloadManager`, `nsIDownloadProgressListener` und [Downloads überwachen](/de/docs/Monitoring_downloads).

### Passwort-Manager

Wenn Ihre Erweiterung Benutzeranmeldedaten mithilfe des Passwort-Managers abruft, muss sie aktualisiert werden, um die neue Login-Manager-API zu verwenden.

- Der Artikel [Verwendung von nsILoginManager](/de/docs/XPCOM_Interface_Reference/Using_nsILoginManager) enthält Beispiele, darunter eine Demonstration, wie Sie Ihre Erweiterung so schreiben können, dass sie sowohl mit dem Passwort-Manager als auch dem Login-Manager funktioniert, damit sie sowohl mit Firefox 3 als auch mit früheren Versionen funktioniert.
- `nsILoginInfo`
- `nsILoginManager`

Sie können auch den integrierten Passwortspeicher überschreiben, wenn Sie in Ihren Erweiterungen eine eigene Passwortspeicher-Implementierung bereitstellen möchten. Siehe [Erstellen eines Login-Manager-Speichermoduls](/de/docs/Creating_a_Login_Manager_storage_module) für Details.

### Popups (Menüs, Kontextmenüs, Tooltips und Panels)

Das XUL-Popup-System wurde in Firefox 3 stark modifiziert. Das Popup-System umfasst Hauptmenüs, Kontextmenüs und Pop-up-Panels. Ein Leitfaden zur [Verwendung von Popups](/de/docs/XUL/PopupGuide) wurde erstellt und beschreibt, wie das System funktioniert. Beachten Sie, dass `popup.showPopup` zugunsten der neuen `popup.openPopup` und `popup.openPopupAtScreen` veraltet ist.

### Autocomplete

Die Methode `handleEnter()` des `nsIAutoCompleteController`-Interfaces wurde geändert, um ein Argument zu akzeptieren, das anzeigt, ob der Text aus dem Autocomplete-Popup ausgewählt wurde oder durch Drücken der Eingabetaste nach der Texteingabe.

### DOMParser

- Wenn ein `DOMParser` instanziiert wird, erbt er die Prinzipalien des aufrufenden Codes sowie die `documentURI` und `baseURI` des Fensters, aus dem der Konstruktor stammt.
- Wenn der Aufrufer UniversalXPConnect-Rechte hat, kann er Parameter an `new DOMParser()` übergeben. Werden weniger als drei Parameter übergeben, nehmen die verbleibenden Parameter `null` als Standardwert an.
  - Der erste Parameter ist das zu verwendende Prinzipal, das das normalerweise ererbte Standardprinzipal überschreibt.
  - Der zweite Parameter ist die zu verwendende `documentURI`.
  - Der dritte Parameter ist die zu verwendende `baseURI`.

- Wenn Sie einen `DOMParser` mit einem Vertrag initialisieren, z. B. durch Aufrufen von `createInstance()`, und nicht die `init()` Methode des `DOMParser` aufrufen, wird der `DOMParser` beim Versuch, einen Parsing-Vorgang zu starten, automatisch mit einem Null-Prinzipal und `null`-Zeigern für `documentURI` und `baseURI` erstellt und initialisiert.

### Verwenden Sie nicht mehr die interne String-API

Die interne String-API wird nicht mehr exportiert; Sie müssen auf die externe String-API migrieren. Siehe diese Artikel für hilfreiche Informationen:

- [Mozilla externe String-Leitfaden](/de/docs/Mozilla_external_string_guide)
- [XPCOM Glue](/de/docs/XPCOM_Glue)
- [Migration von interner Verknüpfung zu gefrorener Verknüpfung](/de/docs/Migrating_from_Internal_Linkage_to_Frozen_Linkage)

### Entfernte Schnittstellen

Die folgenden Schnittstellen wurden aus Gecko 1.9, das Firefox 3 antreibt, entfernt. Wenn Ihre Erweiterung eine dieser Schnittstellen verwendet, müssen Sie Ihren Code aktualisieren:

- `nsIDOMPaintListener`
- `nsIDOMScrollListener`
- `nsIDOMMutationListener`
- `nsIDOMPageTransitionListener`
- `nsICloseAllWindows` (siehe [Firefox Bug 386200](https://bugzil.la/386200))

## Schritt 4: Überprüfen Sie relevante Chrome-Änderungen

Es gab einige Änderungen am Chrome-Layout, die einige Erweiterungen betreffen können.

### Neue Boxen

Es gab eine kleine Änderung am Chrome, die Anpassungen in Ihrem Code erfordern kann. Ein neuer `vbox` wurde hinzugefügt, genannt "browser-bottombox", die die Suchleiste und Statusleiste am unteren Rand des Browserfensters umschließt. Obwohl dies das Aussehen der Anzeige nicht beeinflusst, kann es Ihre Erweiterung betreffen, wenn sie Chrome relativ zu diesen Elementen überlagert.

Beispielsweise, wenn Sie zuvor Chrome vor der Statusleiste überlagert haben, wie folgt:

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

Oder verwenden Sie die folgende Technik, um Ihre Überlagerung sowohl auf Firefox 2 als auch auf Firefox 3 arbeiten zu lassen:

```xml
<window id="main-window">
  <vbox id="browser-bottombox" insertbefore="status-bar">
    <something insertbefore="status-bar" />
  </vbox>
</window>
```

### Geänderte Boxen

Erweiterungen, die versuchen, "appcontent" Boxen zu überlagern, um Chrome über Dokumentinhalt zu schweben, werden dieses Material nicht mehr anzeigen. Sie sollten Ihre Erweiterung aktualisieren, um das neue [`<xul:panel>`](/de/docs/Mozilla/Tech/XUL/panel) XUL-Element zu verwenden. Wenn Sie möchten, dass das Panel nicht automatisch nach einer Verzögerung verschwindet, können Sie das `noautohide` Attribut auf `true` setzen.

## Andere Änderungen

_Fügen Sie einfache Änderungen hinzu, die Sie beim Aktualisieren Ihrer Erweiterung auf Firefox 3 vorgenommen haben._

- `chrome://browser/base/utilityOverlay.js` wird aus Sicherheitsgründen nicht mehr unterstützt. Wenn Sie dies zuvor verwendet haben, sollten Sie zu `chrome://browser/content/utilityOverlay.js` wechseln.
- `nsIAboutModule` Implementierungen sind nun verpflichtet, die Methode `getURIFlags` zu unterstützen. Siehe [nsIAboutModule.idl](https://searchfox.org/mozilla-central/source/netwerk/protocol/about/nsIAboutModule.idl) für Dokumentation. Dies betrifft Erweiterungen, die neue `about:` URIs bereitstellen. ([Firefox Bug 337746](https://bugzil.la/337746))
- Das [`<xul:tabbrowser>`](/de/docs/Mozilla/Tech/XUL/tabbrowser) Element ist kein Teil von "toolkit" mehr ([Firefox Bug 339964](https://bugzil.la/339964)). Das bedeutet, dieses Element ist nicht mehr in XUL-Anwendungen und Erweiterungen verfügbar. Es wird weiterhin im Hauptfenster von Firefox (browser.xul) verwendet.
- Änderungen an `nsISupports_proxies` und möglicherweise an threading-bezogenen Schnittstellen müssen dokumentiert werden.
- Wenn Sie XML-Verarbeitungsanweisungen wie `<?xml-stylesheet ?>` in Ihren XUL-Dateien verwenden, beachten Sie die in [Firefox Bug 319654](https://bugzil.la/319654) vorgenommenen Änderungen:
  1. XML-PIs werden nun dem DOM eines XUL-Dokuments hinzugefügt. Dies bedeutet, [`document.firstChild`](/de/docs/Web/API/Node/firstChild) ist nicht mehr garantiert das Root-Element. Wenn Sie in Ihrem Skript das Root-Dokument abrufen müssen, verwenden Sie stattdessen [`document.documentElement`](/de/docs/Web/API/Document/documentElement).
  2. `<?xml-stylesheet ?>` und `<?xul-overlay ?>` Verarbeitungsanweisungen haben nun außerhalb des Dokumentprologs keine Wirkung mehr.

- `window.addEventListener("load", myFunc, true)` wird nicht ausgelöst, wenn Webinhalte geladen werden (Browserseiten-Ladevorgänge). Dies liegt an [Firefox Bug 296639](https://bugzil.la/296639), der die Art und Weise ändert, wie innere und äußere Fenster kommunizieren. Die einfache Lösung besteht darin, `gBrowser.addEventListener("load", myFunc, true)` zu verwenden, was auch in Firefox 2 funktioniert.
- `content.window.getSelection()` gibt ein Objekt zurück (das mit `toString()` in eine Zeichenfolge umgewandelt werden kann), im Gegensatz zu dem nun veralteten `content.document.getSelection()`, das eine Zeichenfolge zurückgibt.
- `event.preventBubble()` wurde in Firefox 2 veraltet und in Firefox 3 entfernt. Verwenden Sie [`event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation), das auch in Firefox 2 funktioniert.
- Timer, die mithilfe von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) und [`setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) initiiert werden, werden nun durch modale Fenster blockiert, aufgrund der für [Firefox Bug 52209](https://bugzil.la/52209) vorgenommenen Korrektur. Sie können stattdessen `nsITimer` verwenden.
- Wenn Ihre Erweiterung eine unzuverlässige Quelle (z. B. eine Website) zulassen muss, auf das Chrome der Erweiterung zuzugreifen, dann müssen Sie das neue [`contentaccessible` Flag](/de/docs/Chrome_Registration#contentaccessible) verwenden.
