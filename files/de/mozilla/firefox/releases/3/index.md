---
title: Firefox 3 Versionshinweise für Entwickler
short-title: Firefox 3
slug: Mozilla/Firefox/Releases/3
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Wenn Sie ein Entwickler sind, der versucht, sich mit all den neuen Funktionen in Firefox 3 vertraut zu machen, ist dies der perfekte Ausgangspunkt. Dieser Artikel bietet eine Liste neuer Artikel, die Funktionen abdecken, die zu Firefox 3 hinzugefügt wurden. Obwohl nicht jede kleine Änderung abgedeckt wird, hilft es Ihnen, sich über die wichtigsten Verbesserungen zu informieren.

## Neue Entwicklerfunktionen in Firefox 3

### Für Website- und Anwendungsentwickler

- [Aktualisierung von Web-Anwendungen für Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/Updating_web_applications)
  - : Bietet Informationen über Änderungen, die Sie möglicherweise an Ihrer Website oder Web-Anwendung vornehmen müssen, um die neuen Funktionen in Firefox 3 nutzen zu können.
- [Online- und Offline-Ereignisse](/de/docs/Web/API/Navigator/onLine)
  - : Firefox 3 unterstützt WHATWG Online- und Offline-Ereignisse, mit denen Anwendungen und Erweiterungen erkennen können, ob eine aktive Internetverbindung besteht, sowie wann die Verbindung hergestellt oder unterbrochen wird.
- [Webbasierte Protokoll-Handler](/de/docs/Web/API/Navigator/registerProtocolHandler)
  - : Sie können nun Web-Anwendungen als Protokoll-Handler registrieren, indem Sie die Methode `navigator.registerProtocolHandler()` verwenden.
- [Text mit einem Canvas zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
  - : Sie können nun Text in einem Canvas mit einer nicht standardisierten API, die von Firefox 3 unterstützt wird, zeichnen.
- [Transform-Unterstützung für Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Transformations#transforms)
  - : Firefox unterstützt jetzt die Methoden `transform()` und `setTransform()` auf Canvasses.
- [Verwendung von Mikroformaten](/de/docs/Web/HTML/Guides/Microformats)
  - : Firefox verfügt jetzt über APIs zur Arbeit mit Mikroformaten.
- [Drag-and-Drop-Ereignisse](/de/docs/Web/API/HTML_Drag_and_Drop_API)
  - : Firefox 3 unterstützt neue Ereignisse, die an den Ursprungsknoten für einen Ziehvorgang gesendet werden, wenn das Ziehen beginnt und endet.
- [Fokusmanagement in HTML](/de/docs/Web/API/Document/hasFocus)
  - : Die neuen HTML 5-Attribute `activeElement` und `hasFocus` werden unterstützt.
- Offline-Ressourcen in Firefox
  - : Firefox ermöglicht es Web-Anwendungen jetzt, Ressourcen zu zwischenspeichern, um die Anwendung auch offline verwenden zu können.
- [CSS-Verbesserungen in Firefox 3](https://web.archive.org/web/20210224062716/https://developer.mozilla.org/de/docs/Mozilla/Firefox/releases/3/CSS_improvements)
  - : Firefox 3 bietet eine Reihe von Verbesserungen in seiner CSS-Unterstützung.
- [DOM-Verbesserungen in Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/DOM_improvements)
  - : Firefox 3 bietet eine Reihe neuer Funktionen in der DOM-Implementierung von Firefox 3, einschließlich Unterstützung für mehrere Internet Explorer-Erweiterungen des DOM.
- [JavaScript 1.8-Unterstützung](https://web.archive.org/web/20210224081539/https://developer.mozilla.org/de/docs/Archive/Web/JavaScript/New_in_JavaScript/1.8)
  - : Firefox 3 bietet JavaScript 1.8.
- [EXSLT-Unterstützung](/de/docs/Web/XML/EXSLT)
  - : Firefox 3 bietet Unterstützung für einen wesentlichen Teil der [EXSLT](/de/docs/Web/XML/EXSLT)-Erweiterungen zu [XSLT](/de/docs/Web/XML/XSLT).
- [SVG-Verbesserungen in Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/SVG_improvements)
  - : Die SVG-Unterstützung in Firefox 3 wurde erheblich verbessert, mit Unterstützung für über zwei Dutzend neuer Filter, mehrere neue Elemente und Attribute und weitere Verbesserungen.
- [Animierte PNG-Grafiken](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics)
  - : Firefox 3 unterstützt das animierte PNG (APNG)-Bildformat.

### Für XUL- und Erweiterungsentwickler

#### Bemerkenswerte Änderungen und Verbesserungen

- [Erweiterungen für Firefox 3 aktualisieren](/de/docs/Mozilla/Firefox/Releases/3/Updating_extensions)
  - : Bietet einen Leitfaden zu den Dingen, die Sie tun müssen, um Ihre Erweiterung zu aktualisieren, damit sie mit Firefox 3 funktioniert.
- [XUL-Verbesserungen in Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/XUL_improvements_in_Firefox_3)
  - : Firefox 3 bietet eine Reihe neuer XUL-Elemente, einschließlich neuer Schieberegler, Datums- und Zeitauswähler und Drehknöpfe.
- [Vorlagen in Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/Templates)
  - : Vorlagen wurden in Firefox 3 erheblich verbessert. Die wichtigste Verbesserung ermöglicht die Verwendung benutzerdefinierter Abfrageprozessoren, um andere Datenquellen als RDF zu verwenden.
- [Sichern von Updates](https://web.archive.org/web/20201031093738/https://developer.mozilla.org/de/docs/Archive/Add-ons/Extension_Versioning,_Update_and_Compatibility#securing_updates)
  - : Um einen sichereren Upgrade-Pfad für Add-ons für Benutzer bereitzustellen, müssen Add-ons jetzt eine sichere Methode zur Aktualisierung anbieten, bevor sie installiert werden können. Auf [AMO](https://addons.mozilla.org/) gehostete Add-ons bieten dies automatisch an. Alle Add-ons, die installiert sind und keine sichere Aktualisierungsmethode anbieten, werden automatisch deaktiviert, wenn der Benutzer auf Firefox 3 aktualisiert. Firefox wird dennoch weiterhin nach Updates für die Erweiterung über den unsicheren Pfad suchen und versuchen, alle angebotenen Updates zu installieren (die Installation schlägt fehl, wenn das Update ebenfalls keine sichere Aktualisierungsmethode bietet).
- [Places-Migrationsleitfaden](https://web.archive.org/web/20200621121524/https://developer.mozilla.org/de/docs/Mozilla/Tech/Places/Places_Developer_Guide)
  - : Ein Artikel darüber, wie eine bestehende Erweiterung aktualisiert wird, um die Places-API zu nutzen.
- [Verbesserungen im Download-Manager in Firefox 3](https://web.archive.org/web/20191009203342/https://developer.mozilla.org/de/docs/Archive/Mozilla/Download_Manager_improvements_in_Firefox_3)
  - : Der Download-Manager von Firefox 3 bietet neue und verbesserte APIs, einschließlich Unterstützung für mehrere Fortschrittsanzeigen.
- Verwendung von nsILoginManager
  - : Der Passwort-Manager wurde durch den neuen Login-Manager ersetzt.
- [Einbetten von XBL-Bindungen](https://web.archive.org/web/20190710111835/https://developer.mozilla.org/de/docs/Mozilla/Tech/XBL/XBL_1.0_Reference/Elements#binding)
  - : Sie können jetzt das `data:` URL-Schema aus dem Chrome-Code verwenden, um XBL-Bindungen direkt einzubetten, anstatt sie in separaten XML-Dateien zu haben.
- [Lokalisieren von Erweiterungsbeschreibungen](https://web.archive.org/web/20210126131244/https://developer.mozilla.org/de/docs/Mozilla/Localization/Localizing_extension_descriptions)
  - : Firefox 3 bietet eine neue Methode zur Lokalisierung von Add-on-Metadaten. Dadurch sind die lokalisierten Details verfügbar, sobald das Add-on heruntergeladen wurde, sowie wenn das Add-on deaktiviert ist.
- [Lokalisierung und Plurale](https://web.archive.org/web/20210619213040/https://developer.mozilla.org/de/docs/Mozilla/Localization/Localization_and_Plurals)
  - : Firefox 3 fügt das neue PluralForm-Modul hinzu, das Werkzeuge bietet, um bei der korrekten Pluralisierung von Wörtern in mehreren Lokalisierungen zu unterstützen.
- [Änderungen von Themes in Firefox 3](https://web.archive.org/web/20210518052656/https://developer.mozilla.org/de/docs/Archive/Themes/Theme_changes_in_Firefox_3)
  - : Hinweise und Informationen für Personen, die Themes für Firefox 3 erstellen möchten.

#### Neue Komponenten und Funktionalitäten

- [FUEL-Bibliothek](https://web.archive.org/web/20210516092241/https://developer.mozilla.org/de/docs/Mozilla/Tech/Toolkit_API/FUEL)
  - : FUEL soll es Entwicklern von Erweiterungen leichter machen, produktiv zu sein, indem es einige Formalitäten von XPCOM minimiert und einige "moderne" JavaScript-Ideen hinzufügt.
- [Places](https://web.archive.org/web/20210620103113/https://developer.mozilla.org/de/docs/Mozilla/Tech/Places)
  - : Die APIs für Verlauf und Lesezeichen wurden vollständig durch die neue Places-API ersetzt.
- [Idle-Service](https://web.archive.org/web/20210511041145/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIIdleService)
  - : Firefox 3 bietet die neue `nsIIdleService`-Schnittstelle, die es Erweiterungen ermöglicht festzustellen, wie lange es her ist, seit der Benutzer zuletzt eine Taste gedrückt hat oder seine Maus bewegt hat.
- [ZIP-Schreiber](https://web.archive.org/web/20210619003034/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIZipWriter)
  - : Die neue `nsIZipWriter`-Schnittstelle ermöglicht es Erweiterungen, ZIP-Archive zu erstellen.
- [Vollständiger Seitenzoom](/de/docs/Mozilla/Firefox/Releases/3/Full_page_zoom)
  - : Firefox 3 verbessert das Benutzererlebnis, indem es einen vollständigen Seitenzoom zusätzlich zum Text-Only-Zoom bietet.
- [Schnittstelle zum XPCOM-Zyklus-Sammler](https://web.archive.org/web/20210620195127/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Interfacing_with_the_XPCOM_cycle_collector)
  - : XPCOM-Code kann jetzt den Zyklus-Sammler nutzen, der hilft sicherzustellen, dass ungenutzter Speicher freigegeben wird, anstatt verloren zu gehen.
- [Der Thread-Manager](https://web.archive.org/web/20210419232321/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/The_Thread_Manager)
  - : Firefox 3 bietet die neue `nsIThreadManager`-Schnittstelle, zusammen mit neuen Schnittstellen für Threads und Thread-Ereignisse, die eine bequeme Möglichkeit bieten, Threads in Ihrem Code zu erstellen und zu verwalten.
- [JavaScript-Module](https://web.archive.org/web/20210531090101/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules)
  - : Firefox 3 bietet jetzt einen neuen Mechanismus für gemeinsam nutzbare Code-Module, mit dem Sie einfach Module in JavaScript erstellen können, die von Erweiterungen und Anwendungen verwendet werden können, ähnlich wie gemeinsam nutzbare Bibliotheken.
- [Die `nsIJSON`-Schnittstelle](https://web.archive.org/web/20210514110540/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIJSON)
  - : Firefox 3 bietet die neue `nsIJSON`-Schnittstelle, die eine leistungsstarke Codierung und Decodierung von {{Glossary("JSON", "JSON")}}-Zeichenketten ermöglicht.
- Die `nsIParentalControlsService`-Schnittstelle
  - : Firefox 3 unterstützt nun die Kindersicherung von Microsoft Windows Vista und ermöglicht es dem Code, damit zu interagieren.
- [Verwendung von Inhaltspräferenzen](https://web.archive.org/web/20210314182749/https://developer.mozilla.org/de/docs/Archive/Misc_top_level/Using_content_preferences)
  - : Firefox 3 enthält einen neuen Dienst für das Abrufen und Setzen von beliebigen site-spezifischen Präferenzen, die sowohl von Erweiterungen als auch von Kerncode genutzt werden können, um die Präferenzen ihrer Benutzer für einzelne Sites zu verfolgen.
- [Plug-in-Überwachung](https://web.archive.org/web/20160617124200/https://developer.mozilla.org/en-US/Add-ons/Plugins/Monitoring_plugins)
  - : Ein neues Systemkomponente des Plug-in-Systems ist jetzt verfügbar, um zu messen, wie lange Plug-ins (z. B. Macromedia Flash) für die Ausführung ihrer Aufrufe benötigen.

#### Behobene Fehler

- [Bemerkenswerte Fehler, die in Firefox 3 behoben wurden](/de/docs/Mozilla/Firefox/Releases/3/Notable_bugs_fixed)
  - : Dieser Artikel bietet Informationen über Fehler, die in Firefox 3 behoben wurden.

## Neue Funktionen für Endbenutzer

### Benutzererfahrung

- **Einfachere Passwortverwaltung.** Eine Informationsleiste oben im Browserfenster erscheint jetzt, um Ihnen das Speichern von Passwörtern nach einer erfolgreichen Anmeldung zu ermöglichen.
- **Vereinfachte Add-on-Installation.** Sie können jetzt Erweiterungen von Drittanbieter-Download-Seiten mit weniger Klicks installieren, dank der Entfernung der Add-on-Download-Site-Whitelist.
- **Neuer Download-Manager.** Der Download-Manager erleichtert das Auffinden Ihrer heruntergeladenen Dateien.
- **Wiederaufnehmbare Downloads.** Sie können Downloads nun nach einem Neustart des Browsers oder einer Netzwerkverbindung neu starten.
- **Vollständiger Seitenzoom.** Über das Ansichtsmenü und über Tastenkürzel können Sie jetzt die Inhalte ganzer Seiten vergrößern und verkleinern - dies skaliert nicht nur den Text, sondern auch das Layout und die Bilder.
- **Tab-Blättern und Schnellmenü.** Tabs sind mit den neuen Funktionen zum Scrollen von Tabs und dem Tab-Schnellmenü leichter zu finden.
- **Speichern, was Sie machen.** Firefox 3 fragt Sie, ob Sie Ihre aktuellen Tabs speichern möchten, wenn Sie Firefox beenden.
- **Optimiertes Verhalten von in Tabs öffnen.** Das Öffnen eines Lesezeichen-Ordners in Tabs fügt die neuen Tabs jetzt hinzu, anstatt die bestehenden zu ersetzen.
- **Einfachere Größenänderung von Standort- und Suchleisten.** Sie können jetzt einfach die Standort- und Suchleisten mit einem einfachen Größenänderungsgriff zwischen ihnen ändern.
- **Textauswahlverbesserungen.** Sie können jetzt mehrere Textbereiche auswählen, indem Sie die Steuerungstaste (Befehlstaste auf dem Macintosh) verwenden. Doppelklicken und ziehen selektiert nun im "wortweise" Modus. Dreifachklicken selektiert einen ganzen Absatz.
- **Suchwerkzeugleiste.** Die Suchwerkzeugleiste öffnet sich jetzt mit der aktuellen Auswahl.
- **Plug-in-Management.** Nutzer können nun einzelne Plug-ins im Add-on-Manager deaktivieren.
- **Integration mit Windows Vista.** Die Firefox-Menüs werden jetzt mit dem nativen Vista-Theme angezeigt.
- **Integration mit Mac OS X.** Firefox unterstützt nun [Growl](https://growl.github.io/growl/) für Benachrichtigungen über abgeschlossene Downloads und verfügbare Updates.
- **Stern-Schaltfläche.** Die neue Stern-Schaltfläche in der Standortleiste ermöglicht es Ihnen, schnell ein neues Lesezeichen mit einem einzigen Klick hinzuzufügen. Ein zweiter Klick ermöglicht es Ihnen, Ihr neues Lesezeichen zu speichern und zu taggen.
- **Tags.** Sie können nun Schlüsselwörter mit Ihren Lesezeichen verknüpfen, um sie einfach nach Kategorien zu sortieren.
- **Standortleiste und Auto-Vervollständigung.** Geben Sie den Titel oder das Tag einer Seite in der Standortleiste ein, um schnell die gesuchte Seite in Ihrem Verlauf und Ihren Lesezeichen zu finden. Favicons, Lesezeichen- und Tag-Indikatoren helfen Ihnen zu sehen, woher die Ergebnisse stammen.
- **Intelligente Lesezeichen-Ordner.** Der neue Intelligente Lesezeichen-Ordner von Firefox bietet schnellen Zugriff auf Ihre zuletzt gespeicherten und getaggten Orte sowie auf häufig besuchte Seiten.
- **Verwaltung von Lesezeichen und Verlauf.** Der neue einheitliche Organizer für Lesezeichen und Verlauf ermöglicht es Ihnen, Ihren Verlauf und Ihre Lesezeichen leicht mit mehreren Ansichten und intelligenten Ordnern zu durchsuchen, um Ihre häufigen Suchen zu speichern.
- **Webbasierte Protokoll-Handler.** Web-Anwendungen, wie Ihr bevorzugter Web-Mail-Anbieter, können jetzt anstelle von Desktop-Anwendungen zum Umgang mit `mailto:`-Links von anderen Sites verwendet werden. Ähnliche Unterstützung wird auch für andere Protokolle bereitgestellt. (Beachten Sie, dass sich Web-Anwendungen bei Firefox registrieren müssen, bevor dies funktioniert.)
- **Einfache Verwendung von Download-Aktionen.** Ein neues Anwendungs-Einstellungsfenster bietet eine verbesserte Benutzeroberfläche zur Konfiguration von Handlern für verschiedene Dateitypen und Protokollschemata.
- **Verbesserte Optik und Haptik.** Die Grafik- und Schriftverarbeitung wurden verbessert, um Websites auf Ihrem Bildschirm besser aussehen zu lassen, einschließlich schärferer Textdarstellung und besserer Unterstützung von Schriften mit Ligaturen und komplexen Skripten. Darüber hinaus werden Mac- und Linux (GNOME)-Nutzer feststellen, dass sich Firefox mehr denn je wie eine native Anwendung für ihre Plattform anfühlt, mit einem neuen, nativen Aussehen und Anfühlen.
- **Farbmanagement-Unterstützung.** Indem Sie die Einstellung `gfx.color_management.enabled` in `about:config` setzen, können Sie Firefox bitten, die in Bildern eingebetteten Farbprofile zu verwenden, um die Farben anzupassen, damit sie mit dem Display Ihres Computers übereinstimmen.
- **Offline-Unterstützung.** Web-Anwendungen können neue Funktionen nutzen, um auch dann verwendet zu werden, wenn Sie keine Internetverbindung haben.

### Sicherheit und Datenschutz

- **Ein-Klick-Website-Information.** Möchten Sie mehr über die Website erfahren, die Sie besuchen? Klicken Sie auf das Symbol der Website in der Standortleiste, um zu erfahren, wem sie gehört. Informationen zur Identifizierung werden prominent dargestellt und sind einfacher denn je zu verstehen.
- **Malware-Schutz.** Firefox 3 warnt Sie, wenn Sie eine Website besuchen, von der bekannt ist, dass sie Viren, Spyware, Trojanische Pferde oder andere gefährliche Software (als Malware bekannt) installiert.
- **Verbesserter Schutz vor Webfälschungen.** Wenn Sie jetzt eine Seite besuchen, die verdächtig als Fälschung gilt, wird Ihnen eine spezielle Seite anstelle der Inhalte der Seite mit einer Warnung angezeigt.
- **Einfacher zu verstehende SSL-Fehler.** Die bei einem ungültigen SSL-Zertifikat angezeigten Fehler wurden klarer formuliert, um das Problem leichter nachvollziehbar zu machen.
- **Schutz vor veralteten Add-ons.** Firefox 3 überprüft jetzt automatisch die Versionen von Add-ons und Plug-ins und deaktiviert ältere, unsichere Versionen.
- **Sichere Add-on-Updates.** Die Sicherheit von Add-on-Updates wurde verbessert, indem Add-ons, die einen unsicheren Aktualisierungsmechanismus verwenden, nicht zulässig sind.
- **Anti-Virus-Integration.** Firefox 3 informiert nun die Anti-Virus-Software, wenn ausführbare Dateien heruntergeladen werden.
- **Unterstützung für die Kindersicherung von Windows Vista.** Firefox 3 unterstützt die systemweite Vista-Kindersicherungseinstellung zum Deaktivieren von Dateidownloads.

### Leistung

- **Zuverlässigkeit.** Firefox 3 speichert jetzt Lesezeichen, Verlauf, Cookies und Präferenzen in einem transaktionssicheren Datenbankformat. Dies bedeutet, dass Ihre Daten vor Verlust geschützt sind, selbst wenn Ihr System abstürzt.
- **Geschwindigkeit.** Firefox 3 hat einen Leistungsschub erhalten, indem der Teil der Software, der das Zeichnen auf Ihrem Bildschirm handhabt, sowie die Handhabung der Seitenlayoutarbeit vollständig ersetzt wurde.
- **Verringerter Speicherverbrauch.** Firefox 3 ist speichereffizienter denn je, mit über 300 behobenen Speicher-"Leck"-Fehlern und neuen Funktionen, die dabei helfen, automatisch Speicherblöcke zu finden und zu löschen, die nicht mehr verwendet werden.
