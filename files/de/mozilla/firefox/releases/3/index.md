---
title: Firefox 3 für Entwickler
short-title: Firefox 3
slug: Mozilla/Firefox/Releases/3
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Wenn Sie als Entwickler versuchen, alle neuen Funktionen von Firefox 3 zu verstehen, ist dies der perfekte Ausgangspunkt. Dieser Artikel bietet eine Liste neuer Artikel, die die in Firefox 3 hinzugefügten Funktionen abdecken. Obwohl nicht unbedingt jede kleinere Änderung behandelt wird, können Sie hier etwas über die wichtigsten Verbesserungen lernen.

## Neue Entwicklerfunktionen in Firefox 3

### Für Website- und Anwendungsentwickler

- [Aktualisieren von Webanwendungen für Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/Updating_web_applications)
  - : Bietet Informationen über Änderungen, die Sie an Ihrer Website oder Webanwendung vornehmen müssen, um die neuen Funktionen in Firefox 3 nutzen zu können.
- [Online- und Offline-Ereignisse](/de/docs/Web/API/Navigator/onLine)
  - : Firefox 3 unterstützt WHATWG-Online- und Offline-Ereignisse, die es Anwendungen und Erweiterungen ermöglichen, zu erkennen, ob eine aktive Internetverbindung besteht, sowie zu erkennen, wann die Verbindung auf- und abgebaut wird.
- [Webbasierte Protokollhandler](/de/docs/Web/API/Navigator/registerProtocolHandler)
  - : Sie können jetzt Webanwendungen als Protokollhandler registrieren, indem Sie die Methode `navigator.registerProtocolHandler()` verwenden.
- [Text auf einem Canvas zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
  - : Sie können jetzt Text auf einem Canvas mithilfe einer nicht standardisierten API zeichnen, die von Firefox 3 unterstützt wird.
- [Transformationen für Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Transformations#transforms)
  - : Firefox unterstützt jetzt die Methoden `transform()` und `setTransform()` auf Canvas.
- [Verwendung von Mikroformaten](/de/docs/Web/HTML/Guides/Microformats)
  - : Firefox verfügt jetzt über APIs zur Arbeit mit Mikroformaten.
- [Drag-and-Drop-Ereignisse](/de/docs/Web/API/HTML_Drag_and_Drop_API)
  - : Firefox 3 unterstützt neue Ereignisse, die an den Ausgangsknoten einer Ziehoperation gesendet werden, wenn das Ziehen beginnt und endet.
- [Fokusverwaltung in HTML](/de/docs/Web/API/Document/hasFocus)
  - : Die neuen HTML 5-Attribute `activeElement` und `hasFocus` werden unterstützt.
- Offline-Ressourcen in Firefox
  - : Firefox ermöglicht es Webanwendungen jetzt, Ressourcen im Cache zu speichern, damit die Anwendung offline genutzt werden kann.
- [CSS-Verbesserungen in Firefox 3](/de/docs/CSS_improvements_in_Firefox_3)
  - : Firefox 3 verfügt über eine Reihe von Verbesserungen in der CSS-Unterstützung.
- [DOM-Verbesserungen in Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/DOM_improvements)
  - : Firefox 3 bietet eine Reihe neuer Funktionen in der DOM-Implementierung von Firefox 3, einschließlich der Unterstützung mehrerer Internet Explorer-Erweiterungen des DOM.
- [JavaScript 1.8-Unterstützung](/de/docs/New_in_JavaScript_1.8)
  - : Firefox 3 unterstützt JavaScript 1.8.
- [EXSLT-Unterstützung](/de/docs/Web/XML/EXSLT)
  - : Firefox 3 bietet Unterstützung für einen erheblichen Teil der [EXSLT](/de/docs/Web/XML/EXSLT)-Erweiterungen zu [XSLT](/de/docs/Web/XML/XSLT).
- [SVG-Verbesserungen in Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/SVG_improvements)
  - : Die SVG-Unterstützung in Firefox 3 wurde erheblich erweitert, mit Unterstützung für über zwei Dutzend neue Filter, mehrere neue Elemente und Attribute sowie weitere Verbesserungen.
- [Animierte PNG-Grafiken](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics)
  - : Firefox 3 unterstützt das APNG-Bildformat (animiertes PNG).

### Für XUL- und Erweiterungsentwickler

#### Bemerkenswerte Änderungen und Verbesserungen

- [Aktualisieren von Erweiterungen für Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/Updating_extensions)
  - : Bietet einen Leitfaden zu den notwendigen Schritten, um Ihre Erweiterung für die Arbeit mit Firefox 3 zu aktualisieren.
- [XUL-Verbesserungen in Firefox 3](/de/docs/XUL_improvements_in_Firefox_3)
  - : Firefox 3 bietet eine Reihe neuer XUL-Elemente, einschließlich neuer Schieberegler, Datums- und Zeitauswähler und Spin-Schaltflächen.
- [Vorlagen in Firefox 3](/de/docs/Templates_in_Firefox_3)
  - : Vorlagen wurden in Firefox 3 erheblich verbessert. Die wichtigste Verbesserung ermöglicht die Verwendung benutzerdefinierter Abfrageprozessoren, um Datenquellen außer RDF zu verwenden.
- [Sichere Aktualisierungen](/de/docs/Extension_Versioning,_Update_and_Compatibility#securing_updates)
  - : Um einen sichereren Upgradeweg für Add-ons zu bieten, müssen Add-ons jetzt eine sichere Methode zur Aktualisierungsbeschaffung bereitstellen, bevor sie installiert werden können. Add-ons, die bei [AMO](https://addons.mozilla.org/) gehostet werden, bieten dies automatisch an. Add-ons, die beim Upgrade auf Firefox 3 keine sichere Update-Methode bereitstellen, werden automatisch deaktiviert. Firefox überprüft jedoch weiterhin unsichere Pfade auf Updates der Erweiterung und versucht, angebotene Updates zu installieren (die Installation schlägt fehl, wenn das Update keine sichere Update-Methode bereitstellt).
- [Leitfaden zur Places-Migration](/de/docs/Places_Developer_Guide)
  - : Ein Artikel darüber, wie eine bestehende Erweiterung auf die Verwendung der Places-API aktualisiert wird.
- [Verbesserungen im Download-Manager in Firefox 3](/de/docs/Download_Manager_improvements_in_Firefox_3)
  - : Der Download-Manager in Firefox 3 bietet neue und verbesserte APIs, einschließlich der Unterstützung mehrerer Fortschrittsanzeiger.
- Verwenden von nsILoginManager
  - : Der Passwort-Manager wurde durch den neuen Login-Manager ersetzt.
- [Einbetten von XBL-Bindungen](/de/docs/XBL/XBL_1.0_Reference/Elements#binding)
  - : Sie können jetzt das `data:`-URL-Schema vom Chrome-Code verwenden, um XBL-Bindungen direkt einzubetten, anstatt sie in separaten XML-Dateien zu haben.
- [Lokalisierung von Erweiterungsbeschreibungen](/de/docs/Localizing_extension_descriptions)
  - : Firefox 3 bietet eine neue Methode zur Lokalisierung von Add-on-Metadaten. Damit sind die lokalisierten Details verfügbar, sobald das Add-on heruntergeladen wurde, sowie wenn das Add-on deaktiviert ist.
- [Lokalisierung und Plurale](/de/docs/Localization_and_Plurals)
  - : Firefox 3 fügt das neue PluralForm-Modul hinzu, das Werkzeuge zur korrekten Pluralisierung von Wörtern in mehreren Lokalisierungen bereitstellt.
- [Theme-Änderungen in Firefox 3](/de/docs/Theme_changes_in_Firefox_3)
  - : Hinweise und Informationen für Personen, die Themes für Firefox 3 erstellen möchten.

#### Neue Komponenten und Funktionalitäten

- [FUEL Library](/de/docs/Toolkit_API/FUEL)
  - : FUEL soll es Erweiterungsentwicklern erleichtern, produktiv zu sein, indem es einige der Formalitäten von XPCOM minimiert und einige "moderne" JavaScript-Ideen hinzufügt.
- [Places](/de/docs/Places)
  - : Die APIs für Chronik und Lesezeichen wurden vollständig durch die neue [Places](/de/docs/Places) API ersetzt.
- [Idle Service](/de/docs/nsIIdleService)
  - : Firefox 3 bietet die neue `nsIIdleService`-Schnittstelle, die es Erweiterungen ermöglicht, zu bestimmen, wie lange es her ist, seit der Benutzer zuletzt eine Taste gedrückt oder die Maus bewegt hat.
- [ZIP Writer](/de/docs/nsIZipWriter)
  - : Die neue `nsIZipWriter`-Schnittstelle ermöglicht Erweiterungen das Erstellen von ZIP-Archiven.
- [Vollseitenzoom](/de/docs/Mozilla/Firefox/Releases/3/Full_page_zoom)
  - : Firefox 3 verbessert die Benutzererfahrung, indem es zusätzlich zum Textzoom auch einen Vollseitenzoom bietet.
- [Schnittstelle zum XPCOM-Zyklus-Sammler](/de/docs/Interfacing_with_the_XPCOM_cycle_collector)
  - : XPCOM-Code kann jetzt den Zyklus-Sammler verwenden, der dazu beiträgt, dass ungenutzter Speicher freigegeben wird, anstatt zu lecken.
- [Der Thread Manager](/de/docs/The_Thread_Manager)
  - : Firefox 3 bietet die neue `nsIThreadManager`-Schnittstelle sowie neue Schnittstellen für Threads und Thread-Ereignisse, die eine bequeme Möglichkeit bieten, Threads in Ihrem Code zu erstellen und zu verwalten.
- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules)
  - : Firefox 3 bietet jetzt einen neuen Mechanismus für gemeinsam genutzte Code-Module, mit dem Sie leicht Module in JavaScript erstellen können, die von Erweiterungen und Anwendungen geladen werden können, ähnlich wie gemeinsam genutzte Bibliotheken.
- [Die `nsIJSON`-Schnittstelle](/de/docs/nsIJSON)
  - : Firefox 3 bietet die neue `nsIJSON`-Schnittstelle, die eine leistungsstarke Codierung und Decodierung von {{Glossary("JSON", "JSON")}}-Zeichenfolgen bietet.
- Die `nsIParentalControlsService`-Schnittstelle
  - : Firefox 3 unterstützt jetzt die Kindersicherung von Microsoft Windows Vista und ermöglicht es Code, mit ihr zu interagieren.
- [Verwendung von Inhaltspräferenzen](/de/docs/Using_content_preferences)
  - : Firefox 3 enthält einen neuen Dienst zum Abrufen und Festlegen beliebiger, sitespezifischer Präferenzen, die sowohl von Erweiterungen als auch von Basiskomponenten verwendet werden können, um die Präferenzen ihrer Benutzer für einzelne Websites zu verfolgen.
- [Plugin-Überwachung](/de/docs/Monitoring_plugins)
  - : Eine neue Komponente des Pluginsystems steht jetzt zur Verfügung, um zu messen, wie lange Plugins (z. B. Macromedia Flash) brauchen, um ihre Aufrufe auszuführen.

#### Behobene Fehler

- [Bemerkenswerte in Firefox 3 behobene Fehler](/de/docs/Mozilla/Firefox/Releases/3/Notable_bugs_fixed)
  - : Dieser Artikel bietet Informationen über Fehler, die in Firefox 3 behoben wurden.

## Neue Funktionen für Endbenutzer

### Benutzererfahrung

- **Einfachere Passwortverwaltung.** Eine Informationsleiste am oberen Rand des Browserfensters erscheint jetzt, um Ihnen zu ermöglichen, Passwörter nach einem erfolgreichen Login zu speichern.
- **Vereinfachte Add-on-Installation.** Dank der Entfernung der Whitelist für Add-on-Downloadseiten können Sie jetzt Erweiterungen von Drittanbieter-Downloadseiten mit weniger Klicks installieren.
- **Neuer Download-Manager.** Der Download-Manager erleichtert das Auffinden Ihrer heruntergeladenen Dateien.
- **Wiederaufnehmbare Downloads.** Sie können jetzt Downloads nach dem Neustart des Browsers oder der Rücksetzung Ihrer Netzwerkverbindung fortsetzen.
- **Vollseitenzoom.** Über das Ansicht-Menü und Tastenkombinationen können Sie jetzt den Inhalt ganzer Seiten vergrößern und verkleinern – dies skaliert nicht nur den Text, sondern auch das Layout und die Bilder.
- **Tab-Scrollen und Schnellmenü.** Tabs sind mit den neuen Funktionen zum Tab-Scrollen und Tab-Schnellmenü leichter zu finden.
- **Speichern, was Sie gerade tun.** Firefox 3 fragt Sie, ob Sie Ihre aktuellen Tabs speichern möchten, wenn Sie Firefox beenden.
- **Optimiertes Öffnen von Tabs.** Das Öffnen eines Lesezeichenordners in Tabs fügt jetzt die neuen Tabs hinzu, anstatt die bestehenden zu ersetzen.
- **Einfachere Größenänderung der Adress- und Suchleiste.** Sie können jetzt die Adress- und Suchleiste einfach über einen Ziehgriff zwischen ihnen in der Größe ändern.
- **Verbesserte Textauswahl.** Sie können jetzt mehrere Textbereiche auswählen, indem Sie die Strg-Taste (Befehlstaste auf Macintosh) verwenden. Doppelklicken und Ziehen wählt jetzt im "Wort-zu-Wort"-Modus. Dreifachklicken wählt einen gesamten Absatz aus.
- **Suchleiste.** Die Suchleiste öffnet sich jetzt mit der aktuellen Auswahl.
- **Plugin-Verwaltung.** Benutzer können jetzt einzelne Plugins im Add-On-Manager deaktivieren.
- **Integration mit Windows Vista.** Die Menüs von Firefox werden jetzt mit Vistas nativen Design angezeigt.
- **Integration mit Mac OS X.** Firefox unterstützt jetzt [Growl](https://growl.github.io/growl/) für Benachrichtigungen über abgeschlossene Downloads und verfügbare Updates.
- **Sternschaltfläche.** Die neue Sternschaltfläche in der Adressleiste ermöglicht es Ihnen, schnell ein neues Lesezeichen mit einem Klick hinzuzufügen. Ein zweiter Klick ermöglicht es Ihnen, Ihr neues Lesezeichen zu archivieren und zu taggen.
- **Tags.** Sie können jetzt Schlüsselwörter mit Ihren Lesezeichen verknüpfen, um sie leicht nach Thema zu sortieren.
- **Adressleiste und Auto-Vervollständigung.** Geben Sie den Titel oder das Tag einer Seite in die Adressleiste ein, um schnell die gesuchte Seite in Ihrer Chronik und Ihren Lesezeichen zu finden. Favicons, Lesezeichen- und Tag-Indikatoren helfen Ihnen zu sehen, woher die Ergebnisse stammen.
- **Intelligenter Lesezeichenordner.** Der neue intelligente Lesezeichenordner von Firefox bietet schnellen Zugriff auf Ihre kürzlich gespeicherten und getaggten Orte sowie Seiten, die Sie häufig besuchen.
- **Organizer für Lesezeichen und Chronik.** Der neue, einheitliche Organizer für Lesezeichen und Chronik ermöglicht es Ihnen, Ihre Chronik und Lesezeichen einfach mit mehreren Ansichten zu durchsuchen und intelligente Ordner für das Speichern Ihrer häufigen Suchanfragen zu verwenden.
- **Web-basierte Protokollhandler.** Web-Anwendungen, wie Ihr bevorzugter Webmail-Anbieter, können jetzt anstelle von Desktop-Anwendungen zum Umgang mit `mailto:`-Links von anderen Websites verwendet werden. Eine ähnliche Unterstützung ist auch für andere Protokolle vorhanden. (Beachten Sie, dass sich Webanwendungen bei Firefox registriert haben müssen, damit dies funktioniert.)
- **Einfache Download-Aktionen.** Ein neuer Anwendungseinstellungsbereich bietet eine verbesserte Benutzeroberfläche zum Konfigurieren von Handlern für verschiedene Dateitypen und Protokollschemata.
- **Verbessertes Aussehen und Gefühl.** Die Grafik- und Schriftartenverarbeitung wurde verbessert, um Websites besser auf Ihrem Bildschirm aussehen zu lassen, einschließlich schärferer Textrendering und besserer Unterstützung für Schriften mit Ligaturen und komplexen Skripten. Außerdem werden Mac- und Linux (GNOME)-Benutzer feststellen, dass sich Firefox mehr wie eine native Anwendung auf ihrer Plattform anfühlt als je zuvor, mit einem neuen, nativen, Look-and-Feel.
- **Farbmanagement-Unterstützung.** Durch das Einstellen der Präferenz `gfx.color_management.enabled` in `about:config` können Sie Firefox bitten, die in Bildern eingebetteten Farbprofile zu verwenden, um die Farben an das Display Ihres Computers anzupassen.
- **Offline-Unterstützung.** Webanwendungen können neue Funktionen nutzen, um die Nutzung auch dann zu unterstützen, wenn keine Internetverbindung besteht.

### Sicherheit und Datenschutz

- **Ein-Klick-Seiteninformationen.** Möchten Sie mehr über die Website wissen, die Sie gerade besuchen? Klicken Sie auf das Symbol der Website in der Adressleiste, um zu sehen, wem sie gehört. Die Identitätsinformationen werden deutlich angezeigt und sind einfacher denn je zu verstehen.
- **Malware-Schutz.** Firefox 3 warnt Sie, wenn Sie auf einer Website landen, die dafür bekannt ist, Viren, Spyware, Trojaner oder andere gefährliche Software (sogenannte Malware) zu installieren.
- **Verbesserter Schutz vor Webfälschungen.** Wenn Sie jetzt eine Seite besuchen, von der vermutet wird, dass sie eine Fälschung ist, sehen Sie eine spezielle Seite statt der Inhalt der Seite mit einer Warnung.
- **Leichter verständliche SSL-Fehler.** Die bei einem ungültigen SSL-Zertifikat präsentierten Fehler wurden geklärt, um das Verständnis des Problems zu erleichtern.
- **Veralteter Add-on-Schutz.** Firefox 3 überprüft jetzt automatisch die Add-on- und Plugin-Versionen und deaktiviert ältere, unsichere Versionen.
- **Sichere Add-on-Updates.** Die Add-on-Aktualisierungssicherheit wurde verbessert, indem Add-ons, die einen unsicheren Aktualisierungsmechanismus verwenden, nicht mehr erlaubt werden.
- **Anti-Virus-Integration.** Firefox 3 informiert jetzt Anti-Virus-Software, wenn ausführbare Dateien heruntergeladen werden.
- **Unterstützung der Elternkontrollen von Windows Vista.** Firefox 3 unterstützt die systemweiten Elternkontroll-Einstellungen von Vista zum Deaktivieren von Dateidownloads.

### Leistung

- **Zuverlässigkeit.** Firefox 3 speichert Lesezeichen, Chronik, Cookies und Präferenzen jetzt in einem transaktionell sicheren Datenbankformat. Das bedeutet, dass Ihre Daten vor Verlust geschützt sind, selbst wenn Ihr System abstürzt.
- **Geschwindigkeit.** Firefox 3 hat durch den kompletten Austausch des Teils der Software, der das Zeichnen auf Ihrem Bildschirm und die Handhabung der Seitenlayoutarbeiten übernimmt, einen Leistungsschub erhalten.
- **Speichernutzung reduziert.** Firefox 3 ist speichereffizienter denn je, mit über 300 behobenen Speicherleckfehlern und neuen Funktionen zur automatischen Lokalisierung und Entsorgung von Speicherlecks.
