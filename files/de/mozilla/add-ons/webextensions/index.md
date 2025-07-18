---
title: Browser-Erweiterungen
slug: Mozilla/Add-ons/WebExtensions
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Erweiterungen, oder Add-ons, können die Fähigkeiten eines Browsers modifizieren und erweitern. Erweiterungen für Firefox werden mithilfe der WebExtensions API technologieübergreifend entwickelt.

Die Technologie für Erweiterungen in Firefox ist weitgehend kompatibel mit der [Erweiterungs-API](https://developer.chrome.com/docs/extensions/reference/), die von Chromium-basierten Browsern unterstützt wird (wie Google Chrome, Microsoft Edge, Opera, Vivaldi). In den meisten Fällen laufen Erweiterungen, die für Chromium-basierte Browser geschrieben wurden, mit [nur wenigen Änderungen](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/) in Firefox.

## Wichtige Ressourcen

- Leitfäden
  - : Egal, ob Sie gerade erst anfangen oder nach fortgeschritteneren Ratschlägen suchen, erfahren Sie mehr darüber, wie Erweiterungen funktionieren, und nutzen Sie die WebExtensions API aus unserer umfangreichen Auswahl an [Anleitungen und Leitfäden](/de/docs/Mozilla/Add-ons/WebExtensions/What_are_WebExtensions).
- Referenzen
  - : Erhalten Sie umfassende Details über die Methoden, Eigenschaften, Typen und Ereignisse der [WebExtensions APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) sowie vollständige Details über die [manifest keys](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json).
- Firefox-Workflow
  - : Entdecken Sie, wie Sie Erweiterungen für Firefox erstellen und veröffentlichen: Erhalten Sie Informationen über Entwicklerwerkzeuge, Veröffentlichung und Vertrieb sowie Portierung auf [Extension Workshop](https://extensionworkshop.com/).

> [!NOTE]
> Wenn Sie Ideen oder Fragen haben oder Hilfe benötigen, können Sie uns im [Community-Forum](https://discourse.mozilla.org/c/add-ons/35) oder im [Add-ons Raum](https://matrix.to/#/#addons:mozilla.org) auf [Matrix](https://wiki.mozilla.org/Matrix) erreichen.

## Erste Schritte

Entdecken Sie, [was Erweiterungen tun können](/de/docs/Mozilla/Add-ons/WebExtensions/What_are_WebExtensions), bevor Sie [Ihre erste Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension) und [Ihre zweite Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension) erstellen. Erfahren Sie mehr über die [Anatomie einer Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension) und erhalten Sie einen Überblick über den [Entwicklungs- und Veröffentlichungs-Workflow für Erweiterungen im Firefox-Stil](https://extensionworkshop.com/documentation/develop/firefox-workflow-overview/). Vertiefen Sie sich mit einer umfassenden Auswahl an [Beispiel-Erweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Examples), die Sie direkt in Firefox ausführen können. Setzen Sie Ihr Lernen fort, indem Sie [eine Liste von Ressourcen entdecken](/de/docs/Mozilla/Add-ons/WebExtensions/What_next), denen Sie folgen können.

## Konzepte

Erhalten Sie detaillierte Informationen zu den Konzepten, die Erweiterungen zugrunde liegen.

- [Übersicht über die JavaScript-API](/de/docs/Mozilla/Add-ons/WebExtensions/API)
- [Content-Scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)
- [Hintergrund-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts)
- [Übereinstimmungsmuster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)
- [Arbeiten mit Dateien](/de/docs/Mozilla/Add-ons/WebExtensions/Working_with_files)
- [Internationalisierung](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization)
- [Content-Security-Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Natives Messaging](/de/docs/Mozilla/Add-ons/WebExtensions/Native_messaging)
- [Native Manifeste](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests)
- [Benutzeraktionen](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions)
- [Unterschiede zwischen API-Implementierungen](/de/docs/Mozilla/Add-ons/WebExtensions/Differences_between_API_implementations)
- [Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities)

## Benutzeroberfläche

Entdecken Sie alle [Benutzeroberfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface)-Komponenten, die Sie in Ihren Erweiterungen verwenden können, mit Codebeispielen und Tipps.

## Anleitung

Eine Reihe von Tutorials, um Sie bei spezifischen Aspekten der Erweiterungsentwicklung zu unterstützen.

- [Abfangen von HTTP-Anfragen](/de/docs/Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests)
- [Ändern einer Webseite](/de/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page)
- [Sicheres Einfügen externer Inhalte in eine Seite](/de/docs/Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page)
- [Teilen von Objekten mit Seitenskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts)
- [Hinzufügen eines Buttons zur Toolbar](/de/docs/Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar)
- [Implementierung einer Einstellungsseite](/de/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page)
- [Arbeiten mit der Tabs-API](/de/docs/Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API)
- [Arbeiten mit der Lesezeichen-API](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_the_Bookmarks_API)
- [Arbeiten mit der Cookies-API](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_the_Cookies_API)
- [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities)
- [Interagieren mit der Zwischenablage](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard)
- [Erweitern der Entwicklerwerkzeuge](/de/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools)
- [Erstellung einer browserübergreifenden Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Build_a_cross_browser_extension)

## Firefox-Workflow

Wenn Sie bereit sind, Ihre Erweiterung für Firefox zu erstellen oder Ihre Chrome-Erweiterung zu portieren, besuchen Sie [Extension Workshop](https://extensionworkshop.com/). Es enthält Details zu:

- Dem Firefox-Workflow, wie [vorübergehende Installation von Erweiterungen während der Entwicklung](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/), [Debugging](https://extensionworkshop.com/documentation/develop/debugging/), [Anfordern der richtigen Berechtigungen](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/) und mehr.
- Das Entwicklerwerkzeug [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/).
- [Portierung einer Google Chrome-Erweiterung](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/), [Unterschiede zwischen Desktop und Android](https://extensionworkshop.com/documentation/develop/differences-between-desktop-and-android-extensions/) und mehr.
- [Überblick über Veröffentlichung und Verteilung](https://extensionworkshop.com/documentation/publish/), [Förderung Ihrer Erweiterung](https://extensionworkshop.com/documentation/publish/promoting-your-extension/), die [Best Practices für den Lebenszyklus von Erweiterungen](https://extensionworkshop.com/documentation/manage/) und mehr.

## Referenz

### JavaScript-APIs

Erhalten Sie umfassende Details zu den Methoden, Eigenschaften, Typen und Ereignissen für alle [JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API). Es gibt auch detaillierte Informationen über die Kompatibilität jeder API mit den wichtigsten Browsern. Die meisten Referenzseiten enthalten auch Codebeispiele und Links zu den Erweiterungsbeispielen, die die API verwenden.

### Manifest-Schlüssel

Erhalten Sie vollständige Details zu den [Manifest-Schlüsseln](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json), einschließlich aller ihrer Eigenschaften und Einstellungen.
