---
title: Browser-Erweiterungen
slug: Mozilla/Add-ons/WebExtensions
l10n:
  sourceCommit: 4f197acb904fe25772ddcd928ca1e397fd7680b4
---

{{AddonSidebar}}

Erweiterungen oder Add-ons können die Fähigkeiten eines Browsers modifizieren und erweitern. Erweiterungen für Firefox werden mit der technologieübergreifenden WebExtensions-API entwickelt.

Die Technologie für Erweiterungen in Firefox ist weitgehend kompatibel mit der [Erweiterungs-API](https://developer.chrome.com/docs/extensions/reference/), die von auf Chromium basierenden Browsern (wie Google Chrome, Microsoft Edge, Opera, Vivaldi) unterstützt wird. In den meisten Fällen laufen Erweiterungen, die für auf Chromium basierende Browser geschrieben wurden, mit [nur wenigen Änderungen](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/) in Firefox.

## Wichtige Ressourcen

- Leitfäden
  - : Egal, ob Sie gerade erst anfangen oder fortgeschrittene Ratschläge suchen, lernen Sie, wie Erweiterungen funktionieren und nutzen Sie die WebExtensions-API mit unserem umfangreichen Angebot an [Tutorials und Leitfäden](/de/docs/Mozilla/Add-ons/WebExtensions/What_are_WebExtensions).
- Referenzen
  - : Erhalten Sie umfassende Details zu den Methoden, Eigenschaften, Typen und Ereignissen der [WebExtensions-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) und vollständige Details zu den [Manifest-Schlüsseln](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json).
- Firefox-Workflow
  - : Entdecken Sie, wie man Erweiterungen für Firefox entwickelt und veröffentlicht: alle Informationen zu Entwickler-Tools, Veröffentlichung und Verbreitung sowie zum Portieren finden Sie im [Extension Workshop](https://extensionworkshop.com/).

> [!NOTE]
> Wenn Sie Ideen oder Fragen haben oder Hilfe benötigen, können Sie uns im [Community-Forum](https://discourse.mozilla.org/c/add-ons/35) oder im [Add-ons Room](https://matrix.to/#/!CuzZVoCbeoDHsxMCVJ:mozilla.org?via=mozilla.org&via=matrix.org&via=humanoids.be) auf [Matrix](https://wiki.mozilla.org/Matrix) erreichen.

## Erste Schritte

Entdecken Sie [was Erweiterungen leisten können](/de/docs/Mozilla/Add-ons/WebExtensions/What_are_WebExtensions), bevor Sie [Ihre erste Erweiterung entwickeln](/de/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension). Lernen Sie die [Anatomie einer Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension) kennen und erhalten Sie einen Überblick über den [Entwicklungs- und Veröffentlichungs-Workflow, Firefox-Stil](https://extensionworkshop.com/documentation/develop/firefox-workflow-overview/). Erkunden Sie tiefer mit einer umfassenden Auswahl an [Beispiel-Erweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Examples), die Sie direkt in Firefox ausführen können.

## Konzepte

Erhalten Sie detaillierte Informationen zu den Konzepten, die Erweiterungen zugrunde liegen, von einem [Überblick über die JavaScript-API](/de/docs/Mozilla/Add-ons/WebExtensions/API), über [Content Scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts), [Match Patterns](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns), [Arbeiten mit Dateien](/de/docs/Mozilla/Add-ons/WebExtensions/Working_with_files), [Internationalisierung](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization) und [Content Security Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy), bis hin zu fortgeschritteneren Themen wie [native Messaging](/de/docs/Mozilla/Add-ons/WebExtensions/Native_messaging), [Verwendung der Devtools-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools) und [native Manifeste](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests).

## Benutzeroberfläche

Entdecken Sie alle Komponenten der [Benutzeroberflächen-](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface), die Sie in Ihren Erweiterungen verwenden können, mit Codierungsbeispielen und Tipps.

## Anleitung

Von Mustern, die Sie regelmäßig verwenden werden, wie zum Beispiel [Arbeiten mit der Tabs-API](/de/docs/Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API) und [Hinzufügen eines Buttons zur Symbolleiste](/de/docs/Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar) bis hin zu fortgeschrittenen Themen wie [Abfangen von HTTP-Anfragen](/de/docs/Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests) und [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) finden Sie eine Vielzahl von Tutorials, um loszulegen.

## Firefox-Workflow

Wenn Sie bereit sind, Ihre Erweiterung für Firefox zu erstellen oder Ihre Chrome-Erweiterung zu portieren, besuchen Sie den [Extension Workshop](https://extensionworkshop.com/). Dort finden Sie Details zu:

- Dem Firefox-Workflow, wie zum Beispiel [temporäres Installieren von Erweiterungen während der Entwicklung](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/), [Debugging](https://extensionworkshop.com/documentation/develop/debugging/), [Anfordern der richtigen Berechtigungen](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/) und mehr.
- Dem [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) Entwickler-Tool.
- [Portieren einer Google Chrome-Erweiterung](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/), [Unterschiede zwischen Desktop- und Android-Erweiterungen](https://extensionworkshop.com/documentation/develop/differences-between-desktop-and-android-extensions/) und mehr.
- [Überblick über Veröffentlichung und Verbreitung](https://extensionworkshop.com/documentation/publish/), [Bewerbung Ihrer Erweiterung](https://extensionworkshop.com/documentation/publish/promoting-your-extension/), die [Best Practices für den Lebenszyklus von Erweiterungen](https://extensionworkshop.com/documentation/manage/) und mehr.

## Referenz

### JavaScript-APIs

Erhalten Sie umfassende Details zu den Methoden, Eigenschaften, Typen und Ereignissen für alle [JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API). Es gibt auch detaillierte Informationen über die Kompatibilität jeder API mit den gängigen Browsern. Die meisten Referenzseiten enthalten auch Codierungsbeispiele und Links zu den Erweiterungsbeispielen, die die API verwenden.

### Manifest-Schlüssel

Erhalten Sie vollständige Details zu den [Manifest-Schlüsseln](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json), einschließlich aller ihrer Eigenschaften und Einstellungen.
