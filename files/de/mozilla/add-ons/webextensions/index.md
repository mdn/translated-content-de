---
title: Browsererweiterungen
slug: Mozilla/Add-ons/WebExtensions
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

Erweiterungen, oder Add-ons, können die Fähigkeiten eines Browsers modifizieren und erweitern. Erweiterungen für Firefox werden mit der Browser-übergreifenden Technologie der `WebExtensions API` erstellt.

Die Technologie für Erweiterungen in Firefox ist weitgehend kompatibel mit der [Erweiterungs-API](https://developer.chrome.com/docs/extensions/reference/), die von auf Chromium basierenden Browsern (wie Google Chrome, Microsoft Edge, Opera, Vivaldi) unterstützt wird. In den meisten Fällen laufen Erweiterungen, die für auf Chromium basierende Browser geschrieben wurden, mit [nur wenigen Anpassungen](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/) in Firefox.

## Wichtige Ressourcen

- Leitfäden
  - : Egal, ob Sie gerade erst anfangen oder auf der Suche nach fortgeschrittenen Ratschlägen sind, erfahren Sie, wie Erweiterungen funktionieren und verwenden Sie die `WebExtensions API` in unserer umfangreichen Auswahl an [Tutorials und Leitfäden](/de/docs/Mozilla/Add-ons/WebExtensions/What_are_WebExtensions).
- Referenzen
  - : Erhalten Sie umfassende Details zu den Methoden, Eigenschaften, Typen und Ereignissen der [WebExtensions APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) und vollständige Details zu den [Manifest-Schlüsseln](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json).
- Firefox-Arbeitsablauf
  - : Erfahren Sie, wie Sie Erweiterungen für Firefox erstellen und veröffentlichen: Erhalten Sie Einblick in Entwicklerwerkzeuge, Veröffentlichung und Verteilung sowie Portierung auf [Extension Workshop](https://extensionworkshop.com/).

> [!NOTE]
> Wenn Sie Ideen oder Fragen haben oder Hilfe benötigen, können Sie uns im [Community-Forum](https://discourse.mozilla.org/c/add-ons/35) oder im [Add-ons Room](https://matrix.to/#/!CuzZVoCbeoDHsxMCVJ:mozilla.org?via=mozilla.org&via=matrix.org&via=humanoids.be) auf [Matrix](https://wiki.mozilla.org/Matrix) erreichen.

## Erste Schritte

Entdecken Sie [was Erweiterungen tun können](/de/docs/Mozilla/Add-ons/WebExtensions/What_are_WebExtensions), bevor Sie [Ihre erste Erweiterung bauen.](/de/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension) Lernen Sie den [Aufbau einer Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension) und erhalten Sie einen Überblick über den [Entwicklungs- und Veröffentlichungsprozess für Erweiterungen, im Firefox-Stil](https://extensionworkshop.com/documentation/develop/firefox-workflow-overview/). Erkunden Sie etwas tiefer mit einer umfassenden Auswahl an [Beispiel-Erweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Examples), die Sie direkt in Firefox ausführen können.

## Konzepte

Erhalten Sie detaillierte Informationen über die Konzepte, die Erweiterungen zugrunde liegen, [von einem Überblick über die JavaScript-API](/de/docs/Mozilla/Add-ons/WebExtensions/API), über [Inhaltsskripte,](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) [Muster für Übereinstimmungen](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns), [Arbeiten mit Dateien](/de/docs/Mozilla/Add-ons/WebExtensions/Working_with_files), [Internationalisierung](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization) und [Content-Security-Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy), bis hin zu fortgeschrittenen Themen wie [native Nachrichtenübermittlung](/de/docs/Mozilla/Add-ons/WebExtensions/Native_messaging), [Verwendung der devtools APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools) und [native Manifeste](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests).

## Benutzeroberfläche

Entdecken Sie alle [Benutzeroberflächen-](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface) Komponenten, die Sie in Ihren Erweiterungen nutzen können, mit Codebeispielen und Tipps.

## Anleitung

Von Mustern, die Sie regelmäßig verwenden, wie [Arbeiten mit der Tabs API](/de/docs/Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API) und [Hinzufügen einer Schaltfläche zur Symbolleiste](/de/docs/Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar), bis hin zu fortgeschrittenen Themen wie [Abfangen von HTTP-Anfragen](/de/docs/Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests) und [Arbeiten mit kontextbezogenen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities), finden Sie eine Reihe von Tutorials, um Ihnen den Einstieg zu erleichtern.

## Firefox-Arbeitsablauf

Wenn Sie bereit sind, Ihre Erweiterung für Firefox zu erstellen oder Ihre Chrome-Erweiterung zu portieren, besuchen Sie den [Extension Workshop](https://extensionworkshop.com/). Dort finden Sie Details zu:

- Dem Firefox-Arbeitsablauf, wie [temporäres Installieren von Erweiterungen während der Entwicklung](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/), [Debuggen](https://extensionworkshop.com/documentation/develop/debugging/), [Anforderung der richtigen Berechtigungen](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/) und mehr.
- Dem Entwicklerwerkzeug [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/).
- [Portierung einer Google Chrome-Erweiterung](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/), [Unterschiede zwischen Desktop und Android](https://extensionworkshop.com/documentation/develop/differences-between-desktop-and-android-extensions/) und mehr.
- [Überblick über Veröffentlichung und Verteilung](https://extensionworkshop.com/documentation/publish/), [Förderung Ihrer Erweiterung](https://extensionworkshop.com/documentation/publish/promoting-your-extension/), die [Best Practices für den Erweiterungslebenszyklus](https://extensionworkshop.com/documentation/manage/) und mehr.

## Referenz

### JavaScript-APIs

Erhalten Sie umfassende Details zu den Methoden, Eigenschaften, Typen und Ereignissen für alle [JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API). Es gibt auch detaillierte Informationen über die Kompatibilität jeder API mit den wichtigsten Browsern. Die meisten Referenzseiten enthalten auch Codebeispiele und Links zu den Erweiterungsbeispielen, die die API verwenden.

### Manifest-Schlüssel

Erhalten Sie vollständige Details zu den [Manifest-Schlüsseln](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json), einschließlich aller ihrer Eigenschaften und Einstellungen. Es gibt auch detaillierte Informationen zur [Kompatibilität](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json) jedes Schlüssels mit den wichtigsten Browsern.
