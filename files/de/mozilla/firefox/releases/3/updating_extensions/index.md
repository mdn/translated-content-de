---
title: Aktualisieren von Erweiterungen für Firefox 3
slug: Mozilla/Firefox/Releases/3/Updating_extensions
l10n:
  sourceCommit: d681d0262045649aefa02efb937ff5f22b6e3b2a
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen, die für Entwickler nützlich sind, die ihre Erweiterungen aktualisieren möchten, damit sie unter Firefox 3 ordnungsgemäß funktionieren.

Bevor wir fortfahren, gibt es einen hilfreichen Hinweis: Wenn die einzige Änderung, die Ihre Erweiterung benötigt, eine Anpassung des `maxVersion`-Feldes im Installationsmanifest ist und Sie Ihre Erweiterung auf [addons.mozilla.org](https://addons.mozilla.org) hosten, müssen Sie nicht tatsächlich eine neue Version Ihrer Erweiterung hochladen! Verwenden Sie das Entwickler-Kontrollpanel auf AMO, um die `maxVersion` anzupassen. Auf diese Weise können Sie vermeiden, dass Ihre Erweiterung erneut überprüft werden muss.

## Schritt 1: Aktualisieren Sie das Installationsmanifest

Der erste Schritt – und für die meisten Erweiterungen der einzige notwendige – besteht darin, die [Installationsmanifest](/de/docs/Install_Manifests) Datei, [`install.rdf`](/de/docs/Creating_a_Skin_for_Firefox/install.rdf), zu aktualisieren, um die Kompatibilität mit Firefox 3 anzuzeigen.

Suchen Sie die Zeile, die die maximal kompatible Version von Firefox angibt (was für Firefox 2 so aussehen könnte):

```xml
<em:maxVersion>2.0.*</em:maxVersion>
```

Ändern Sie es, um die Kompatibilität mit Firefox 3 anzuzeigen:

```xml
<em:maxVersion>3.0.*</em:maxVersion>
```

Installieren Sie dann Ihre Erweiterung neu.

Bitte beachten Sie, dass Firefox 3 auf die zusätzliche „.0“ in der Versionsnummer verzichtet, daher müssen Sie anstelle von `3.0.0.*` nur `3.0.*` verwenden.

Es gab (und wird weiterhin) eine Reihe von API-Änderungen geben, die wahrscheinlich einige Erweiterungen beeinträchtigen werden. Wir arbeiten noch daran, eine vollständige Liste dieser Änderungen zusammenzustellen.

> [!NOTE]
> Wenn Ihre Erweiterung immer noch ein [`Install.js`](/de/docs/Install.js) Skript anstelle eines [install manifest](/de/docs/Install_Manifests) verwendet, müssen Sie jetzt auf ein Installationsmanifest umstellen. Firefox 3 unterstützt keine `install.js` Skripte in XPI-Dateien mehr.

### Fügen Sie Lokalisierungen zum Installationsmanifest hinzu

Firefox 3 unterstützt neue Eigenschaften im Installationsmanifest, um lokalisierte Beschreibungen anzugeben. Die alten Methoden funktionieren jedoch weiterhin, die neuen ermöglichen es Firefox jedoch, die Lokalisierungen auch dann zu übernehmen, wenn das Add-on deaktiviert und die Installation ausstehend ist. Weitere Details finden Sie unter [Lokalisieren von Erweiterungsbeschreibungen](/de/docs/Localizing_extension_descriptions).

## Schritt 2: Stellen Sie sicher, dass Sie sichere Updates bereitstellen

Wenn Sie Add-ons selbst hosten und nicht auf einem sicheren Add-on-Hosting-Anbieter wie [addons.mozilla.org](https://addons.mozilla.org), dann müssen Sie eine sichere Methode zum Aktualisieren Ihres Add-ons bereitstellen. Dies umfasst entweder das Hosting Ihrer Updates auf einer SSL-Website oder die Verwendung kryptografischer Schlüssel zur Signierung der Update-Informationen. Lesen Sie [Sichern von Updates](/de/docs/Extension_Versioning,_Update_and_Compatibility#securing_updates) für weitere Informationen.

## Schritt 3: Umgang mit geänderten APIs

Mehrere APIs wurden in bedeutender Weise geändert. Die bedeutendsten davon, die wahrscheinlich viele Erweiterungen betreffen, sind:

### DOM

Knoten aus externen Dokumenten sollten mit [`document.importNode()`](/de/docs/Web/API/Document/importNode) (oder durch Verwendung von [`document.adoptNode()`](/de/docs/Web/API/Document/adoptNode)) geklont werden, bevor sie in das aktuelle Dokument eingefügt werden können. Weitere Informationen zu den [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument) Problemen finden Sie in den [W3C DOM FAQ](https://www.w3.org/DOM/faq.html#ownerdoc).

Firefox erzwingt derzeit nicht diese Regel (es tat dies eine Zeit lang während der Entwicklung von Firefox 3, aber zu viele Websites brechen, wenn diese Regel durchgesetzt wird). Wir empfehlen Webentwicklern, ihren Code zu überarbeiten, um diese Regel für eine verbesserte zukünftige Kompatibilität zu berücksichtigen.

### Lesezeichen & Verlauf

Falls Ihre Erweiterung auf Lesezeichen- oder Verlaufsdaten in irgendeiner Weise zugreift, ist erhebliche Arbeit erforderlich, um die Kompatibilität mit Firefox 3 zu gewährleisten. Die alten APIs für den Zugriff auf diese Informationen wurden durch die neue [Places](/de/docs/Places) Architektur ersetzt. Siehe den [Places Migrationsleitfaden](/de/docs/Places_Developer_Guide) für Details zur Aktualisierung Ihrer vorhandenen Erweiterung zur Verwendung der Places-API.

### Download-Manager

Die Download-Manager-API hat sich leicht verändert aufgrund des Übergangs von einem RDF-Datenspeicher zur Nutzung der [Storage](/de/docs/Storage) API. Dies sollte ein ziemlich einfacher Übergang sein. Zusätzlich hat sich die API zur Überwachung des Downloadfortschritts geändert, um mehrere Download-Manager-Listener zu unterstützen. Weitere Informationen finden Sie unter `nsIDownloadManager`, `nsIDownloadProgressListener` und [Downloads überwachen](/de/docs/Monitoring_downloads).

### Passwort-Manager

Wenn Ihre Erweiterung auf Benutzereingabeinformationen mittels Passwort-Manager zugreift, muss sie aktualisiert werden, um die neue Login-Manager-API zu verwenden.

- Der Artikel [Verwendung von nsILoginManager](/de/docs/XPCOM_Interface_Reference/Using_nsILoginManager) enthält Beispiele, einschließlich einer Demonstration, wie Sie Ihre Erweiterung sowohl mit dem Passwort-Manager als auch mit dem Login-Manager arbeiten lassen können, sodass sie sowohl mit Firefox 3 als auch mit älteren Versionen funktioniert.
- `nsILoginInfo`
- `nsILoginManager`

Sie können auch den integrierten Passwort-Manager-Speicher überschreiben, wenn Sie Ihre eigene Passwort-Speicherimplementierung in Ihren Erweiterungen bereitstellen möchten. Siehe [Erstellen eines Login-Manager-Speichermoduls](/de/docs/Creating_a_Login_Manager_storage_module) für Details.

### Popups (Menüs, Kontextmenüs, Tooltips und Panels)

Das XUL Popup-System wurde in Firefox 3 stark modifiziert. Das Popup-System umfasst Hauptmenüs, Kontextmenüs und Popup-Panels. Ein Leitfaden zur [Verwendung von Popups](/de/docs/XUL/PopupGuide) wurde erstellt, der detailliert beschreibt, wie das System funktioniert. Ein Punkt, den Sie beachten sollten, ist, dass `popup.showPopup` zugunsten der neuen `popup.openPopup` und `popup.openPopupAtScreen` abgelehnt wurde.

### Autovervollständigung

Die `nsIAutoCompleteController`-Schnittstelle hat sich geändert, damit die `handleEnter()`-Methode ein Argument akzeptiert, das angibt, ob der Text aus dem Autovervollständigungspopup oder durch Drücken der Eingabetaste nach Eingabe des Textes ausgewählt wurde.

### DOMParser

- Wenn ein `DOMParser` instanziiert wird, erbt er den Principal des aufrufenden Codes sowie das `documentURI` und `baseURI` des Fensters, aus dem der Konstruktor stammt.
- Wenn der Aufrufer UniversalXPConnect-Berechtigungen hat, kann er Parameter an `new DOMParser()` übergeben. Wenn weniger als drei Parameter übergeben werden, werden die verbleibenden Parameter auf `null` gesetzt.

  - Der erste Parameter ist der Principal, der verwendet werden soll; dies überschreibt den normalerweise geerbten Standard-Principal.
  - Der zweite Parameter ist das zu verwendende `documentURI`.
  - Der dritte Parameter ist das zu verwendende `baseURI`.

- Wenn Sie einen `DOMParser` mit einem Vertrag initialisieren, beispielsweise durch Aufrufen von `createInstance()`, und nicht die `init()`-Methode des `DOMParser` aufrufen, wird beim Versuch, eine Parsing-Operation zu initiieren, automatisch der `DOMParser` mit einem null Principal und `null` Zeigern für `documentURI` und `baseURI` erstellt und initialisiert.

### Verwenden Sie die interne Zeichenfolgen-API nicht mehr

Die interne Zeichenfolgen-API wird nicht mehr exportiert; Sie müssen auf die externe Zeichenfolgen-API umsteigen. Siehe diese Artikel für hilfreiche Informationen:

- [Mozilla externe Zeichenfolgen-Leitfaden](/de/docs/Mozilla_external_string_guide)
- [XPCOM Glue](/de/docs/XPCOM_Glue)
- [Migration von interner Verknüpfung zu gefrorener Verknüpfung](/de/docs/Migrating_from_Internal_Linkage_to_Frozen_Linkage)

### Entfernte Schnittstellen

Die folgenden Schnittstellen wurden aus Gecko 1.9 entfernt, das Firefox 3 antreibt. Wenn Ihre Erweiterung eine dieser Schnittstellen verwendet, müssen Sie Ihren Code aktualisieren:

- `nsIDOMPaintListener`
- `nsIDOMScrollListener`
- `nsIDOMMutationListener`
- `nsIDOMPageTransitionListener`
- `nsICloseAllWindows` (siehe [Firefox Bug 386200](https://bugzil.la/386200))

## Schritt 4: Überprüfen Sie wichtige Chrome-Änderungen

Es gab einige Änderungen an der Chrome-Anordnung, die einige Erweiterungen betreffen könnten.

### Neue Boxen

Es gab eine geringfügige Änderung an der Chrome, die Änderungen in Ihrem Code erforderlich machen könnte. Ein neues `vbox` wurde hinzugefügt, genannt "browser-bottombox", das die Suchleiste und die Statusleiste am unteren Rand des Browserfensters umschließt. Obwohl dies das Erscheinungsbild der Anzeige nicht verändert, könnte es Ihre Erweiterung betreffen, wenn sie Chrome relativ zu diesen Elementen überlagert.

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

Oder verwenden Sie die folgende Technik, um Ihre Überlagerung sowohl unter Firefox 2 als auch unter Firefox 3 funktionsfähig zu machen:

```xml
<window id="main-window">
  <vbox id="browser-bottombox" insertbefore="status-bar">
    <something insertbefore="status-bar" />
  </vbox>
</window>
```

### Geänderte Boxen

Erweiterungen, die versuchen, über das "appcontent"-Feld Chrome über Dokumentinhalte zu schweben, werden dieses Material nicht mehr anzeigen. Sie sollten Ihre Erweiterung aktualisieren, um das neue [`<xul:panel>`](/de/docs/Mozilla/Tech/XUL/panel) XUL-Element zu verwenden. Wenn Sie verhindern möchten, dass das Panel nach einer Verzögerung automatisch verschwindet, können Sie das `noautohide`-Attribut auf `true` setzen.

## Weitere Änderungen

_Fügen Sie hier einfache Änderungen hinzu, die Sie beim Aktualisieren Ihrer Erweiterung für die Arbeit mit Firefox 3 vornehmen mussten._

- `chrome://browser/base/utilityOverlay.js` wird aus Sicherheitsgründen nicht mehr unterstützt. Wenn Sie dies bisher verwendet haben, sollten Sie zu `chrome://browser/content/utilityOverlay.js` wechseln.
- `nsIAboutModule` Implementierungen sind jetzt verpflichtet, die `getURIFlags` Methode zu unterstützen. Siehe [nsIAboutModule.idl](https://searchfox.org/mozilla-central/source/netwerk/protocol/about/nsIAboutModule.idl) für Dokumentation. Dies betrifft Erweiterungen, die neue `about:` URIs bereitstellen. ([Firefox Bug 337746](https://bugzil.la/337746))
- Der [`<xul:tabbrowser>`](/de/docs/Mozilla/Tech/XUL/tabbrowser) Element ist nicht mehr Teil des "toolkit" ([Firefox Bug 339964](https://bugzil.la/339964)). Das bedeutet, dass dieses Element nicht mehr für XUL-Anwendungen und Erweiterungen verfügbar ist. Es wird weiterhin im Hauptfenster von Firefox (browser.xul) verwendet.
- Änderungen an `nsISupports_proxies` und möglicherweise an Thread-bezogenen Schnittstellen müssen dokumentiert werden.
- Wenn Sie XML-Verarbeitungshinweise wie `<?xml-stylesheet ?>` in Ihren XUL-Dateien verwenden, beachten Sie die Änderungen in [Firefox Bug 319654](https://bugzil.la/319654):

  1. XML-PIs werden jetzt zum DOM eines XUL-Dokuments hinzugefügt. Das bedeutet, [`document.firstChild`](/de/docs/Web/API/Node/firstChild) ist nicht mehr garantiert das Wurzelelement. Wenn Sie das Wurzeldokument in Ihrem Skript erhalten müssen, verwenden Sie [`document.documentElement`](/de/docs/Web/API/Document/documentElement) stattdessen.
  2. `<?xml-stylesheet ?>` und `<?xul-overlay ?>` Verarbeitungsanweisungen haben jetzt keine Wirkung mehr außerhalb des Dokumentprologs.

- `window.addEventListener("load", myFunc, true)` wird nicht beim Laden von Webinhalten (Browser-Seitenladevorgänge) ausgelöst. Dies ist auf [Firefox Bug 296639](https://bugzil.la/296639) zurückzuführen, der die Kommunikation zwischen inneren und äußeren Fenstern ändert. Die einfache Lösung hier besteht darin, `gBrowser.addEventListener("load", myFunc, true)` wie hier beschrieben zu verwenden und funktioniert auch unter Firefox 2.
- `content.window.getSelection()` gibt ein Objekt zurück (das durch `toString()` in einen String umgewandelt werden kann), im Gegensatz zu dem jetzt veralteten `content.document.getSelection()`, das einen String zurückgibt.
- `event.preventBubble()` wurde in Firefox 2 veraltet und in Firefox 3 entfernt. Verwenden Sie [`event.stopPropagation()`](/de/docs/Web/API/Event/stopPropagation), das auch in Firefox 2 funktioniert.
- Timer, die mit `setTimeout()` initiiert werden, werden jetzt durch Modalfenster blockiert aufgrund der Behebung in [Firefox Bug 52209](https://bugzil.la/52209). Sie können stattdessen `nsITimer` verwenden.
- Wenn Ihre Erweiterung es erforderlich macht, dass eine nicht vertrauenswürdige Quelle (z. B. eine Website) auf das Chrome der Erweiterung zugreifen kann, müssen Sie das neue [`contentaccessible`-Flag](/de/docs/Chrome_Registration#contentaccessible) verwenden.
