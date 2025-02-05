---
title: Firefox 3 für Entwickler
slug: Mozilla/Firefox/Releases/3
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

{{FirefoxSidebar}}

Wenn Sie ein Entwickler sind, der die neuen Funktionen in Firefox 3 kennenlernen möchte, sind Sie hier genau richtig. Dieser Artikel bietet eine Liste der neuen Artikel, die die in Firefox 3 hinzugefügten Funktionen behandeln. Auch wenn nicht jede kleine Änderung abgedeckt wird, hilft Ihnen dieser Leitfaden, die wichtigsten Verbesserungen zu verstehen.

## Neue Entwicklerfunktionen in Firefox 3

### Für Website- und Anwendungsentwickler

- [Aktualisierung von Webanwendungen für Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/Updating_web_applications)
  - : Bietet Informationen zu Änderungen, die Sie möglicherweise an Ihrer Website oder Webanwendung vornehmen müssen, um die neuen Funktionen von Firefox 3 zu nutzen.
- [Online- und Offline-Ereignisse](/de/docs/Web/API/Navigator/onLine)
  - : Firefox 3 unterstützt die WHATWG Online- und Offline-Ereignisse, mit denen Anwendungen und Erweiterungen erkennen können, ob eine aktive Internetverbindung besteht, sowie feststellen können, wann die Verbindung hergestellt oder getrennt wird.
- [Webbasierte Protokoll-Handler](/de/docs/Web/API/Navigator/registerProtocolHandler)
  - : Sie können jetzt Webanwendungen als Protokoll-Handler mithilfe der Methode `navigator.registerProtocolHandler()` registrieren.
- [Text zeichnen mit einem Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
  - : Sie können nun Text in einem Canvas mit einer nicht standardisierten API zeichnen, die von Firefox 3 unterstützt wird.
- [Transformationsunterstützung für Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Transformations#transforms)
  - : Firefox unterstützt nun die Methoden `transform()` und `setTransform()` in Canvas.
- [Verwendung von Microformats](/de/docs/Web/HTML/microformats)
  - : Firefox verfügt jetzt über APIs zur Arbeit mit Microformats.
- [Drag-and-Drop-Ereignisse](/de/docs/Web/API/HTML_Drag_and_Drop_API)
  - : Firefox 3 unterstützt neue Ereignisse, die an das Quellknoten für eine Drag-Operation gesendet werden, wenn das Ziehen beginnt und endet.
- [Fokusverwaltung in HTML](/de/docs/Web/API/Document/hasFocus)
  - : Die neuen HTML5-Attribute `activeElement` und `hasFocus` werden unterstützt.
- Offline Ressourcen in Firefox
  - : Firefox ermöglicht es Webanwendungen jetzt, Ressourcen für die Offline-Verwendung im Cache zu speichern.
- [CSS-Verbesserungen in Firefox 3](/de/docs/CSS_improvements_in_Firefox_3)
  - : Firefox 3 bietet zahlreiche Verbesserungen in der CSS-Unterstützung.
- [DOM-Verbesserungen in Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/DOM_improvements)
  - : Firefox 3 bringt zahlreiche neue Funktionen in der DOM-Implementierung, einschließlich Unterstützung für verschiedene Internet Explorer-Erweiterungen des DOM.
- [Unterstützung für JavaScript 1.8](/de/docs/New_in_JavaScript_1.8)
  - : Firefox 3 unterstützt JavaScript 1.8.
- [EXSLT-Unterstützung](/de/docs/Web/XML/EXSLT)
  - : Firefox 3 unterstützt einen erheblichen Teil der [EXSLT](/de/docs/Web/XML/EXSLT)-Erweiterungen für [XSLT](/de/docs/Web/XML/XSLT).
- [SVG-Verbesserungen in Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/SVG_improvements)
  - : Die SVG-Unterstützung in Firefox 3 wurde erheblich erweitert, einschließlich der Unterstützung von über zwei Dutzend neuen Filtern, mehreren neuen Elementen und Attributen sowie weiteren Verbesserungen.
- [Animierte PNG-Grafiken](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics)
  - : Firefox 3 unterstützt das animierte PNG (APNG)-Bildformat.

### Für XUL- und Erweiterungsentwickler

#### Bemerkenswerte Änderungen und Verbesserungen

- [Aktualisierung von Erweiterungen für Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/Updating_extensions)
  - : Bietet einen Leitfaden zu den erforderlichen Änderungen, damit Ihre Erweiterung mit Firefox 3 funktioniert.
- [XUL-Verbesserungen in Firefox 3](/de/docs/XUL_improvements_in_Firefox_3)
  - : Firefox 3 bietet eine Vielzahl neuer XUL-Elemente, darunter neue Schiebeskalen, Datums- und Zeitauswähler sowie Drehschalter.
- [Vorlagen in Firefox 3](/de/docs/Templates_in_Firefox_3)
  - : Vorlagen wurden in Firefox 3 erheblich verbessert. Die wichtigste Verbesserung ermöglicht die Verwendung von benutzerdefinierten Abfrageprozessoren, um andere Datenquellen als RDF zu verwenden.
- [Schutz von Updates](/de/docs/Extension_Versioning,_Update_and_Compatibility#securing_updates)
  - : Um einen sichereren Aktualisierungsweg für Add-ons zu bieten, müssen Add-ons nun eine sichere Methode zur Aktualisierung bereitstellen, bevor sie installiert werden können. Add-ons, die bei [AMO](https://addons.mozilla.org) gehostet werden, bieten diese automatisch. Add-ons, die keine sichere Update-Methode bereitstellen, werden nach dem Update auf Firefox 3 automatisch deaktiviert. Firefox wird jedoch weiterhin nach Updates für die Erweiterung suchen und versuchen, diese zu installieren (die Installation schlägt fehl, wenn das Update ebenfalls keine sichere Methode bietet).
- [Places-Migrationsleitfaden](/de/docs/Places_Developer_Guide)
  - : Ein Artikel darüber, wie eine vorhandene Erweiterung aktualisiert wird, um die Places-API zu verwenden.
- [Verbesserungen im Download-Manager in Firefox 3](/de/docs/Download_Manager_improvements_in_Firefox_3)
  - : Der Download-Manager in Firefox 3 verfügt über neue und verbesserte APIs, einschließlich Unterstützung für mehrere Fortschrittslistener.
- Verwendung von nsILoginManager
  - : Der Passwort-Manager wurde durch den neuen Login-Manager ersetzt.
- [Einbetten von XBL-Bindungen](/de/docs/XBL/XBL_1.0_Reference/Elements#binding)
  - : Sie können jetzt das `data:`-URL-Schema aus Chrome-Code verwenden, um XBL-Bindungen direkt einzubetten, anstatt diese in separaten XML-Dateien zu haben.
- [Lokalisierung von Erweiterungsbeschreibungen](/de/docs/Localizing_extension_descriptions)
  - : Firefox 3 bietet eine neue Methode zur Lokalisierung von Add-on-Metadaten. Diese ermöglicht es, dass lokalisierte Details sofort nach dem Herunterladen des Add-ons verfügbar sind, auch wenn das Add-on deaktiviert ist.
- [Lokalisierung und Plurale](/de/docs/Localization_and_Plurals)
  - : Firefox 3 fügt das neue PluralForm-Modul hinzu, das Hilfsmittel für eine korrekte Pluralisierung von Wörtern in mehreren Lokalisierungen bereitstellt.
- [Designänderungen in Firefox 3](/de/docs/Theme_changes_in_Firefox_3)
  - : Hinweise und Informationen für Personen, die Designs für Firefox 3 erstellen möchten.

#### Neue Komponenten und Funktionen

- [FUEL-Bibliothek](/de/docs/Toolkit_API/FUEL)
  - : FUEL wurde entwickelt, um Erweiterungsentwicklern die Arbeit zu erleichtern, indem es einige der Formalitäten von XPCOM minimiert und moderne JavaScript-Ideen hinzufügt.
- [Places](/de/docs/Places)
  - : Die APIs für Verlauf und Lesezeichen wurden durch die neue [Places](/de/docs/Places)-API vollständig ersetzt.
- [Idle-Dienst](/de/docs/nsIIdleService)
  - : Firefox 3 stellt das neue `nsIIdleService`-Interface bereit, mit dem Erweiterungen feststellen können, wie lange es her ist, dass der Benutzer zuletzt eine Taste gedrückt oder die Maus bewegt hat.
- [ZIP-Schreiber](/de/docs/nsIZipWriter)
  - : Das neue Interface `nsIZipWriter` ermöglicht es Erweiterungen, ZIP-Archive zu erstellen.
- [Vollständiges Seiten-Zoom](/de/docs/Mozilla/Firefox/Releases/3/Full_page_zoom)
  - : Verbesserte Benutzerfreundlichkeit durch die Möglichkeit, die gesamte Seite (nicht nur Text) zu vergrößern oder zu verkleinern.
- [Interaktion mit dem XPCOM-Zyklus-Sammler](/de/docs/Interfacing_with_the_XPCOM_cycle_collector)
  - : XPCOM-Code kann nun den Zyklus-Sammler nutzen, um sicherzustellen, dass ungenutzter Speicher freigegeben wird, statt verloren zu gehen.
- [Der Thread-Manager](/de/docs/The_Thread_Manager)
  - : Firefox 3 stellt das neue `nsIThreadManager`-Interface bereit, sowie neue Schnittstellen für Threads und Thread-Ereignisse, die eine bequeme Möglichkeit bieten, Threads in Ihrem Code zu erstellen und zu verwalten.
- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules)
  - : Firefox 3 bietet nun einen neuen Mechanismus für gemeinsam genutzte Code-Module, mit dem Sie einfach Module in JavaScript erstellen können, die von Erweiterungen und Anwendungen verwendet werden können, ähnlich wie gemeinsam genutzte Bibliotheken.
- [Das `nsIJSON`-Interface](/de/docs/nsIJSON)
  - : Firefox 3 bietet das neue `nsIJSON`-Interface, das leistungsstarkes Kodieren und Dekodieren von {{Glossary("JSON", "JSON")}}-Strings ermöglicht.
- Das Interface `nsIParentalControlsService`
  - : Firefox 3 unterstützt die Jugendschutzfunktion von Microsoft Windows Vista und ermöglicht Code, mit dieser zu interagieren.
- [Verwendung von Inhaltspräferenzen](/de/docs/Using_content_preferences)
  - : Firefox 3 enthält einen neuen Dienst zum Abrufen und Festlegen beliebiger website-spezifischer Präferenzen, die sowohl von Erweiterungen als auch von Kern-Code verwendet werden können, um die Präferenzen ihrer Benutzer für einzelne Websites zu verfolgen.
- [Plugin-Überwachung](/de/docs/Monitoring_plugins)
  - : Ein neues Systemkomponenten-Feature misst, wie lange Plugins (wie z. B. Macromedia Flash) zur Ausführung ihrer Aufrufe benötigen.

#### Behebte Fehler

- [Bemerkenswerte Fehlerbehebungen in Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/Notable_bugs_fixed)
  - : Dieser Artikel bietet Informationen zu Fehlern, die in Firefox 3 behoben wurden.

## Neue Funktionen für Endbenutzer

### Benutzererfahrung

- **Einfachere Passwortverwaltung.** Eine Informationsleiste oben im Browserfenster gibt Ihnen nun die Möglichkeit, Passwörter nach einem erfolgreichen Login zu speichern.
- **Vereinfachte Add-on-Installation.** Sie können nun Erweiterungen von Drittanbieter-Downloadseiten mit weniger Klicks installieren, dank der Entfernung der White-List für Downloadseiten.
- **Neuer Download-Manager.** Der Download-Manager erleichtert das Finden Ihrer heruntergeladenen Dateien.
- **Wiederaufnahme von Downloads.** Sie können Downloads jetzt nach einem Neustart des Browsers oder einer Wiederherstellung Ihrer Netzwerkverbindung fortsetzen.
- **Vollständiges Seiten-Zoom.** Über das Menü „Ansicht“ und Tastenkombinationen können Sie den gesamten Seiteninhalt (nicht nur den Text) vergrößern oder verkleinern — einschließlich Bilder und Layout.
- ...
