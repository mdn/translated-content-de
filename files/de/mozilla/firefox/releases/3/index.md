---
title: Firefox 3 für Entwickler
slug: Mozilla/Firefox/Releases/3
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{FirefoxSidebar}}

Wenn Sie ein Entwickler sind und sich mit all den neuen Funktionen in Firefox 3 vertraut machen möchten, sind Sie hier genau richtig. Dieser Artikel bietet eine Übersicht über die neuen Artikel zu den in Firefox 3 hinzugefügten Funktionen. Auch wenn nicht unbedingt jede kleine Änderung behandelt wird, hilft er Ihnen, sich über die wichtigsten Verbesserungen zu informieren.

## Neue Entwicklerfunktionen in Firefox 3

### Für Website- und Anwendungsentwickler

- [Aktualisieren von Webanwendungen für Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/Updating_web_applications)
  - : Bietet Informationen zu Änderungen, die Sie an Ihrer Website oder Webanwendung vornehmen müssen, um die neuen Funktionen von Firefox 3 nutzen zu können.
- [Online- und Offline-Ereignisse](/de/docs/Web/API/Navigator/onLine)
  - : Firefox 3 unterstützt WHATWG Online- und Offline-Ereignisse, die es Anwendungen und Erweiterungen ermöglichen, zu erkennen, ob eine aktive Internetverbindung besteht, sowie den Statuswechsel der Verbindung zu erfassen.
- [Webbasierte Protokollhandler](/de/docs/Web/API/Navigator/registerProtocolHandler)
  - : Sie können nun Webanwendungen als Protokoll-Handler registrieren, indem Sie die Methode `navigator.registerProtocolHandler()` verwenden.
- [Textzeichnen mit einem Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
  - : Sie können jetzt Text in einem Canvas zeichnen, indem Sie eine nicht standardisierte API verwenden, die von Firefox 3 unterstützt wird.
- [Transformationunterstützung für Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Transformations#transforms)
  - : Firefox unterstützt nun die Methoden `transform()` und `setTransform()` auf Canvases.
- [Verwendung von Mikroformaten](/de/docs/Web/HTML/microformats)
  - : Firefox bietet jetzt APIs zur Arbeit mit Mikroformaten.
- [Drag-and-Drop-Ereignisse](/de/docs/Web/API/HTML_Drag_and_Drop_API)
  - : Firefox 3 unterstützt neue Ereignisse, die an den Quellknoten einer Drag-Operation gesendet werden, wenn das Ziehen beginnt und endet.
- [Fokusmanagement in HTML](/de/docs/Web/API/Document/hasFocus)
  - : Die neuen HTML 5-Attribute `activeElement` und `hasFocus` werden unterstützt.
- Ressourcen offline in Firefox
  - : Firefox ermöglicht es Webanwendungen nun, um das Zwischenspeichern von Ressourcen zu bitten, um die Anwendung offline verwenden zu können.
- [CSS-Verbesserungen in Firefox 3](/de/docs/CSS_improvements_in_Firefox_3)
  - : Firefox 3 bietet eine Reihe von Verbesserungen in der CSS-Unterstützung.
- [DOM-Verbesserungen in Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/DOM_improvements)
  - : Firefox 3 bietet eine Reihe neuer Funktionen in der DOM-Implementierung von Firefox 3, einschließlich der Unterstützung mehrerer Erweiterungen des Internet Explorer für das DOM.
- [JavaScript 1.8-Unterstützung](/de/docs/New_in_JavaScript_1.8)
  - : Firefox 3 bietet JavaScript 1.8.
- [EXSLT-Unterstützung](/de/docs/Web/EXSLT)
  - : Firefox 3 bietet Unterstützung für einen wesentlichen Teil der [EXSLT](/de/docs/Web/EXSLT)-Erweiterungen zu [XSLT](/de/docs/Web/XSLT).
- [SVG-Verbesserungen in Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/SVG_improvements)
  - : Die SVG-Unterstützung in Firefox 3 wurde erheblich verbessert, mit Unterstützung für über zwei Dutzend neuer Filter, mehrerer neuer Elemente und Attribute sowie anderer Verbesserungen.
- [Animierte PNG-Grafiken](/de/docs/Web/Media/Formats/Image_types#apng_animated_portable_network_graphics)
  - : Firefox 3 unterstützt das animierte PNG-(APNG)-Bildformat.

### Für XUL- und Erweiterungsentwickler

#### Wichtige Änderungen und Verbesserungen

- [Aktualisieren von Erweiterungen für Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/Updating_extensions)
  - : Bietet einen Leitfaden zu den Dingen, die Sie tun müssen, um Ihre Erweiterung für die Arbeit mit Firefox 3 zu aktualisieren.
- [XUL-Verbesserungen in Firefox 3](/de/docs/XUL_improvements_in_Firefox_3)
  - : Firefox 3 bietet eine Reihe neuer XUL-Elemente, darunter neue Schieberegler, Datums- und Zeitauswahlen und Spin-Buttons.
- [Vorlagen in Firefox 3](/de/docs/Templates_in_Firefox_3)
  - : Vorlagen wurden in Firefox 3 erheblich verbessert. Die wesentliche Verbesserung ist die Möglichkeit, benutzerdefinierte Abfrageprozessoren zu verwenden, um andere Datenquellen als RDF zu verwenden.
- [Sichern von Updates](/de/docs/Extension_Versioning,_Update_and_Compatibility#securing_updates)
  - : Um einen sicheren Add-on-Upgradepfad für Benutzer bereitzustellen, müssen Add-ons nun einen sicheren Weg zur Beschaffung von Updates bieten, bevor sie installiert werden können. Bei [AMO](https://addons.mozilla.org) gehostete Add-ons bieten dies automatisch an. Alle Add-ons, die keinen sicheren Update-Weg bieten, werden automatisch deaktiviert, wenn der Benutzer auf Firefox 3 aktualisiert. Firefox wird jedoch weiterhin nach Updates für die Erweiterung über den unsicheren Weg suchen und versuchen, jedes angebotene Update zu installieren (die Installation schlägt fehl, wenn das Update auch keinen sicheren Update-Weg bietet).
- [Leitfaden zur Places-Migration](/de/docs/Places_Developer_Guide)
  - : Ein Artikel darüber, wie eine bestehende Erweiterung aktualisiert werden kann, um die Places-API zu verwenden.
- [Verbesserungen des Download-Managers in Firefox 3](/de/docs/Download_Manager_improvements_in_Firefox_3)
  - : Der Download-Manager von Firefox 3 bietet neue und verbesserte APIs, einschließlich Unterstützung für mehrere Fortschrittsanzeiger.
- Verwendung des nsILoginManager
  - : Der Passwort-Manager wurde durch den neuen Login-Manager ersetzt.
- [Einbetten von XBL-Bindungen](/de/docs/XBL/XBL_1.0_Reference/Elements#binding)
  - : Sie können nun das `data:` URL-Schema aus Chrome-Code verwenden, um XBL-Bindungen direkt einzubetten, anstatt sie in separaten XML-Dateien zu haben.
- [Lokalisierung von Erweiterungsbeschreibungen](/de/docs/Localizing_extension_descriptions)
  - : Firefox 3 bietet eine neue Methode zur Lokalisierung von Add-on-Metadaten. Dadurch sind die lokalisierten Details verfügbar, sobald das Add-on heruntergeladen wurde, und auch wenn das Add-on deaktiviert ist.
- [Lokalisierung und Pluralformen](/de/docs/Localization_and_Plurals)
  - : Firefox 3 fügt das neue PluralForm-Modul hinzu, das Werkzeuge bereitstellt, um Wörter in mehreren Lokalisierungen korrekt zu pluralisieren.
- [Designänderungen in Firefox 3](/de/docs/Theme_changes_in_Firefox_3)
  - : Hinweise und Informationen für Personen, die Designs für Firefox 3 erstellen möchten.

#### Neue Komponenten und Funktionalitäten

- [FUEL-Bibliothek](/de/docs/Toolkit_API/FUEL)
  - : FUEL zielt darauf ab, es Erweiterungsentwicklern zu erleichtern, produktiv zu sein, indem einige der Formalitäten von XPCOM minimiert und einige "moderne" JavaScript-Ideen hinzugefügt werden.
- [Places](/de/docs/Places)
  - : Die Verlauf- und Lesezeichen-APIs wurden vollständig durch die neue [Places](/de/docs/Places)-API ersetzt.
- [Idle-Service](/de/docs/nsIIdleService)
  - : Firefox 3 bietet die neue `nsIIdleService`-Schnittstelle, die es Erweiterungen ermöglicht, zu bestimmen, wie lange es her ist, dass der Benutzer zuletzt eine Taste gedrückt oder die Maus bewegt hat.
- [ZIP-Writer](/de/docs/nsIZipWriter)
  - : Die neue `nsIZipWriter`-Schnittstelle ermöglicht es Erweiterungen, ZIP-Archive zu erstellen.
- [Vollseitenzoom](/de/docs/Mozilla/Firefox/Releases/3/Full_page_zoom)
  - : Firefox 3 verbessert das Benutzererlebnis, indem er Vollseitenzoom zusätzlich zum Nur-Text-Zoom anbietet.
- [Schnittstelle mit dem XPCOM-Zyklus-Sammler](/de/docs/Interfacing_with_the_XPCOM_cycle_collector)
  - : XPCOM-Code kann nun vom Zyklus-Sammler profitieren, der dazu beiträgt, dass ungenutzter Speicher freigegeben wird, anstatt auszulaufen.
- [Der Thread-Manager](/de/docs/The_Thread_Manager)
  - : Firefox 3 bietet die neue `nsIThreadManager`-Schnittstelle, zusammen mit neuen Schnittstellen für Threads und Thread-Ereignisse, die eine bequeme Möglichkeit bieten, Threads in Ihrem Code zu erstellen und zu verwalten.
- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules)
  - : Firefox 3 bietet jetzt einen neuen gemeinsam genutzten Code-Modul-Mechanismus, der es Ihnen ermöglicht, leicht Module in JavaScript zu erstellen, die von Erweiterungen und Anwendungen verwendet werden können, ähnlich wie gemeinsam genutzte Bibliotheken.
- [Die `nsIJSON`-Schnittstelle](/de/docs/nsIJSON)
  - : Firefox 3 bietet die neue `nsIJSON`-Schnittstelle, die eine leistungsstarke Kodierung und Dekodierung von {{Glossary("JSON", "JSON")}}-Strings bietet.
- Die `nsIParentalControlsService`-Schnittstelle
  - : Firefox 3 unterstützt nun das Microsoft Windows Vista Feature für elterliche Kontrolle, das es Codes ermöglicht, damit zu interagieren.
- [Verwendung von Inhaltspräferenzen](/de/docs/Using_content_preferences)
  - : Firefox 3 beinhaltet einen neuen Service, um beliebige site-spezifische Präferenzen zu bekommen und zu setzen, den sowohl Erweiterungen als auch Kerncode verwenden können, um die Präferenzen ihrer Benutzer für einzelne Sites im Auge zu behalten.
- [Überwachung von Plug-ins](/de/docs/Monitoring_plugins)
  - : Eine neue Komponente des Pluginsystems ist jetzt verfügbar, um zu messen, wie lange Plugins (z. B. Macromedia Flash) für die Ausführung ihrer Aufrufe benötigen.

#### Behobene Fehler

- [Bemerkenswerte in Firefox 3 behobene Fehler](/de/docs/Mozilla/Firefox/Releases/3/Notable_bugs_fixed)
  - : Dieser Artikel bietet Informationen zu Fehlern, die in Firefox 3 behoben wurden.

## Neue Funktionen für Endnutzer

### Benutzererfahrung

- **Einfachere Passwortverwaltung.** Eine Informationsleiste oben im Browserfenster erscheint jetzt, um Ihnen das Speichern von Passwörtern nach einem erfolgreichen Login zu ermöglichen.
- **Vereinfachte Add-on-Installation.** Sie können nun Erweiterungen von Drittanbieter-Downloadseiten mit weniger Klicks installieren, dank der Entfernung der Whitelist der Add-on-Downloadseiten.
- **Neuer Download-Manager.** Der Download-Manager erleichtert das Auffinden Ihrer heruntergeladenen Dateien.
- **Fortsetzbare Downloads.** Sie können nun Downloads wieder aufnehmen, nachdem Sie den Browser neu gestartet oder Ihre Netzwerkverbindung zurückgesetzt haben.
- **Vollseitenzoom.** Über das Anzeigemenü und Tastaturkürzel können Sie jetzt den Inhalt ganzer Seiten vergrößern oder verkleinern – dadurch werden nicht nur der Text, sondern auch das Layout und die Bilder skaliert.
- **Tab-Scrolling und Schnellmenü.** Tabs sind einfacher zu finden mit den neuen Tab-Scrolling- und Tab-Schnellmenüfunktionen.
- **Speichern, was Sie getan haben.** Firefox 3 fragt Sie, ob Sie beim Beenden von Firefox Ihre aktuellen Tabs speichern möchten.
- **Optimiertes Verhalten beim Öffnen in Tabs.** Beim Öffnen eines Ordners von Lesezeichen in Tabs werden die neuen Tabs jetzt angehängt, anstatt die bestehenden zu ersetzen.
- **Einfacheres Ändern der Größe der Adressen- und Suchleiste.** Sie können nun einfach die Größe der Adressen- und Suchleiste mit einem einfachen Größenänderungsgriff dazwischen ändern.
- **Verbesserungen bei der Textauswahl.** Sie können nun mehrere Textbereiche auswählen, indem Sie die Steuerungstaste (Befehlstaste auf Macintosh) verwenden. Durch Doppelklicken und Ziehen wird jetzt im "wortweise"-Modus ausgewählt. Dreifachklicken wählt einen ganzen Absatz aus.
- **Suchleiste.** Die Suchleiste öffnet sich jetzt mit der aktuellen Auswahl.
- **Plugin-Management.** Benutzer können nun einzelne Plugins im Add-on-Manager deaktivieren.
- **Integration mit Windows Vista.** Die Menüs von Firefox werden nun mit dem nativen Thema von Vista angezeigt.
- **Integration mit Mac OS X.** Firefox unterstützt nun [Growl](https://growl.github.io/growl/) für Benachrichtigungen über abgeschlossene Downloads und verfügbare Updates.
- **Stern-Schaltfläche.** Die neue Stern-Schaltfläche in der Adressleiste ermöglicht es Ihnen, mit einem Klick ein neues Lesezeichen hinzuzufügen. Ein zweiter Klick ermöglicht es Ihnen, Ihr neues Lesezeichen zu organisieren und zu taggen.
- **Tags.** Sie können nun Schlüsselwörter mit Ihren Lesezeichen verknüpfen, um sie einfach nach Themen zu sortieren.
- **Adressleiste und Auto-Vervollständigung.** Geben Sie den Titel oder den Tag einer Seite in der Adressleiste ein, um die von Ihnen gesuchte Website schnell in Ihrem Verlauf und Ihren Lesezeichen zu finden. Favicons, Lesezeichen- und Tag-Indikatoren helfen Ihnen zu sehen, woher die Ergebnisse stammen.
- **Intelligenter Lesezeichen-Ordner.** Der neue intelligente Lesezeichen-Ordner von Firefox bietet schnellen Zugriff auf Ihre kürzlich hinzugefügten und getaggten Orte sowie auf Seiten, die Sie häufig besuchen.
- **Organizer für Lesezeichen und Verlauf.** Der neue, einheitliche Organizer für Lesezeichen und Verlauf ermöglicht es Ihnen, Ihren Verlauf und Ihre Lesezeichen einfach mit mehreren Ansichten und intelligenten Ordnern zu durchsuchen, in denen Sie Ihre häufigen Suchanfragen speichern können.
- **Webbasierte Protokollhandler.** Webanwendungen, z. B. Ihr bevorzugter Webmail-Anbieter, können nun anstelle von Desktopanwendungen verwendet werden, um `mailto:`-Links von anderen Websites zu verarbeiten. Ähnliche Unterstützung wird für andere Protokolle bereitgestellt. (Beachten Sie, dass sich Webanwendungen bei Firefox registrieren müssen, bevor dies funktioniert.)
- **Einfach zu verwendende Download-Aktionen.** Ein neues Einstellungsfeld für Anwendungen bietet eine verbesserte Benutzeroberfläche zum Konfigurieren von Handlern für verschiedene Dateitypen und Protokollschemata.
- **Verbessertes Aussehen und Gefühl.** Grafiken und Schriftartenverarbeitung wurden verbessert, um Websites auf Ihrem Bildschirm besser aussehen zu lassen, einschließlich schärferer Textdarstellung und besserer Unterstützung für Schriften mit Ligaturen und komplexen Schriftbildern. Mac- und Linux-(GNOME)-Benutzer werden feststellen, dass sich Firefox mehr wie eine native Anwendung für ihre Plattform anfühlt als je zuvor, mit einem neuen, nativen, Aussehen und Gefühl.
- **Unterstützung für Farbmanagement.** Durch das Setzen der Präferenz `gfx.color_management.enabled` in `about:config` können Sie Firefox bitten, die in den Bildern eingebetteten Farbprofile zu verwenden, um die Farben anzupassen, damit sie mit Ihrem Computermonitor übereinstimmen.
- **Offline-Unterstützung.** Webanwendungen können von neuen Funktionen profitieren, um die Nutzung auch ohne Internetverbindung zu unterstützen.

### Sicherheit und Datenschutz

- **Ein-Klick-Site-Informationen.** Möchten Sie mehr über die Seite erfahren, die Sie besuchen? Klicken Sie auf das Symbol der Site in der Adressleiste, um zu sehen, wem sie gehört. Die Identitätsinformationen sind deutlich angezeigt und leichter zu verstehen als je zuvor.
- **Malware-Schutz.** Firefox 3 warnt Sie, wenn Sie eine Website besuchen, die bekannt dafür ist, Viren, Spyware, Trojaner oder andere gefährliche Software (bekannt als Malware) zu installieren.
- **Verbesserter Schutz vor Webfälschungen.** Wenn Sie nun eine Seite besuchen, die als Fälschung verdächtigt wird, wird Ihnen eine spezielle Seite angezeigt, anstelle des Inhalts der Seite mit einer Warnung.
- **Leichter verständliche SSL-Fehler.** Die Fehler, die bei einem ungültigen SSL-Zertifikat angezeigt werden, wurden geklärt, um das Verständnis des Problems zu erleichtern.
- **Schutz vor veralteten Add-ons.** Firefox 3 überprüft nun automatisch Add-on- und Plugin-Versionen und deaktiviert ältere, unsichere Versionen.
- **Sichere Add-on-Updates.** Die Sicherheit von Add-on-Updates wurde verbessert, indem Add-ons, die einen unsicheren Update-Mechanismus verwenden, nicht mehr zugelassen werden.
- **Antivirenintegration.** Firefox 3 informiert Antivirensoftware, wenn ausführbare Dateien heruntergeladen werden.
- **Unterstützung für die elterliche Kontrolle von Windows Vista.** Firefox 3 unterstützt die systemweite Vista-Einstellung zur elterlichen Kontrolle zum Deaktivieren von Dateidownloads.

### Leistung

- **Zuverlässigkeit.** Firefox 3 speichert nun Lesezeichen, Verlauf, Cookies und Einstellungen in einem transaktional sicheren Datenbankformat. Das bedeutet, dass Ihre Daten sogar vor Verlust geschützt sind, wenn Ihr System abstürzt.
- **Geschwindigkeit.** Firefox 3 hat einen Leistungsschub erhalten, indem der Teil der Software, der das Zeichnen auf Ihrem Bildschirm behandelt, sowie die Art und Weise, wie Seitenlayout-Arbeiten behandelt werden, vollständig ersetzt wurden.
- **Speichernutzung reduziert.** Firefox 3 ist speichereffizienter als je zuvor, mit über 300 behobenen Speicher-"Leak"-Fehlern und neuen Funktionen, die helfen, geleakte Speicherblöcke automatisch zu lokalisieren und zu entfernen.

## Siehe auch

{{Firefox_for_developers}}
