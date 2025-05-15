---
title: Browser-Erweiterungen
slug: Mozilla/Add-ons/WebExtensions
l10n:
  sourceCommit: d9e11f88996e97a259d2ec47f47a660062c12c4f
---

{{AddonSidebar}}

Erweiterungen, oder Add-ons, können die Fähigkeiten eines Browsers modifizieren und erweitern. Erweiterungen für Firefox werden mithilfe der WebExtensions-API, einer plattformübergreifenden Technologie, erstellt.

Die Technologie für Erweiterungen in Firefox ist weitgehend kompatibel mit der von Chromium-basierten Browsern (wie Google Chrome, Microsoft Edge, Opera, Vivaldi) unterstützten [Erweiterungs-API](https://developer.chrome.com/docs/extensions/reference/). In den meisten Fällen laufen Erweiterungen, die für Chromium-basierte Browser geschrieben wurden, mit [nur wenigen Änderungen](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/) in Firefox.

## Wichtige Ressourcen

- Leitfäden
  - : Egal, ob Sie gerade erst anfangen oder nach fortgeschritteneren Ratschlägen suchen, erfahren Sie mehr darüber, wie Erweiterungen funktionieren, und nutzen Sie die WebExtensions-API aus unserem umfangreichen Angebot an [Tutorials und Leitfäden](/de/docs/Mozilla/Add-ons/WebExtensions/What_are_WebExtensions).
- Referenzen
  - : Erhalten Sie umfassende Details zu den Methoden, Eigenschaften, Typen und Ereignissen der [WebExtensions-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) und vollständige Details zu den [Manifest-Schlüsseln](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json).
- Firefox-Workflow
  - : Entdecken Sie, wie Sie Erweiterungen für Firefox erstellen und veröffentlichen können: Alles über Entwickler-Tools, Veröffentlichung und Distribution sowie das Portieren finden Sie im [Extension Workshop](https://extensionworkshop.com/).

> [!NOTE]
> Wenn Sie Ideen oder Fragen haben oder Hilfe benötigen, können Sie uns im [Community-Forum](https://discourse.mozilla.org/c/add-ons/35) oder im [Add-ons Room](https://matrix.to/#/!CuzZVoCbeoDHsxMCVJ:mozilla.org?via=mozilla.org&via=matrix.org&via=humanoids.be) auf [Matrix](https://wiki.mozilla.org/Matrix) erreichen.

## Erste Schritte

Entdecken Sie [was Erweiterungen tun können](/de/docs/Mozilla/Add-ons/WebExtensions/What_are_WebExtensions), bevor Sie [Ihre erste Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension) und [Ihre zweite Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension) erstellen. Lernen Sie die [Anatomie einer Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension) kennen und bekommen Sie einen Überblick über den [Entwicklungs- und Veröffentlichungsworkflow für Erweiterungen, Firefox-Stil](https://extensionworkshop.com/documentation/develop/firefox-workflow-overview/). Erkunden Sie tiefer mit einer umfassenden Auswahl an [Beispielerweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Examples), die Sie direkt in Firefox ausführen können. Setzen Sie Ihr Lernen fort, indem Sie eine [Liste von Ressourcen entdecken](/de/docs/Mozilla/Add-ons/WebExtensions/What_next) die Sie verfolgen können.

## Konzepte

Erhalten Sie detaillierte Informationen über die Konzepte, die Erweiterungen zugrunde liegen.

- [Überblick über die JavaScript-API](/de/docs/Mozilla/Add-ons/WebExtensions/API)
- [Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)
- [Hintergrund-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts)
- [Übereinstimmungsmuster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)
- [Arbeiten mit Dateien](/de/docs/Mozilla/Add-ons/WebExtensions/Working_with_files)
- [Internationalisierung](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization)
- [Content-Sicherheitsrichtlinie](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Native Messaging](/de/docs/Mozilla/Add-ons/WebExtensions/Native_messaging)
- [Native Manifeste](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests)
- [Benutzeraktionen](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions)
- [Unterschiede zwischen API-Implementierungen](/de/docs/Mozilla/Add-ons/WebExtensions/Differences_between_API_implementations)
- [Chrome-Inkompatibilitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities)

## Benutzeroberfläche

Entdecken Sie alle [Benutzeroberflächen](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface) -Komponenten, die Sie in Ihren Erweiterungen verwenden können, mit Codierungsbeispielen und Tipps.

## Anleitung

Eine Reihe von Tutorials, um Ihnen den Einstieg in spezielle Aspekte der Erweiterungsentwicklung zu erleichtern.

- [HTTP-Anfragen abfangen](/de/docs/Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests)
- [Eine Webseite modifizieren](/de/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page)
- [Sicheres Einfügen externer Inhalte in eine Seite](/de/docs/Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page)
- [Objekte mit Seitenskripten teilen](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts)
- [Einen Button zur Toolbar hinzufügen](/de/docs/Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar)
- [Eine Einstellungsseite implementieren](/de/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page)
- [Mit der Tabs-API arbeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API)
- [Mit der Lesezeichen-API arbeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_the_Bookmarks_API)
- [Mit der Cookies-API arbeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_the_Cookies_API)
- [Mit kontextuellen Identitäten arbeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities)
- [Mit der Zwischenablage interagieren](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard)
- [Die Entwicklerwerkzeuge erweitern](/de/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools)
- [Eine plattformübergreifende Erweiterung erstellen](/de/docs/Mozilla/Add-ons/WebExtensions/Build_a_cross_browser_extension)

## Firefox-Workflow

Wenn Sie bereit sind, Ihre Erweiterung für Firefox zu erstellen oder Ihre Chrome-Erweiterung zu portieren, gehen Sie zum [Extension Workshop](https://extensionworkshop.com/). Er enthält Details zu:

- Dem Firefox-Workflow, wie zum Beispiel [temporäres Installieren von Erweiterungen während der Entwicklung](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/), [Debugging](https://extensionworkshop.com/documentation/develop/debugging/), [die richtigen Berechtigungen anfordern](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/) und mehr.
- Dem Entwicklerwerkzeug [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/).
- [Portieren einer Google Chrome-Erweiterung](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/), [Unterschiede zwischen Desktop und Android](https://extensionworkshop.com/documentation/develop/differences-between-desktop-and-android-extensions/) und mehr.
- [Veröffentlichungs- und Distributionsübersicht](https://extensionworkshop.com/documentation/publish/), [Bewerbung Ihrer Erweiterung](https://extensionworkshop.com/documentation/publish/promoting-your-extension/), die [Best Practices für den Lebenszyklus von Erweiterungen](https://extensionworkshop.com/documentation/manage/) und mehr.

## Referenz

### JavaScript-APIs

Erhalten Sie umfassende Details zu den Methoden, Eigenschaften, Typen und Ereignissen für alle [JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API). Es gibt auch detaillierte Informationen zur Kompatibilität jeder API mit den wichtigsten Browsern. Die meisten Referenzseiten enthalten auch Codierungsbeispiele und Links zu den Erweiterungsbeispielen, die die API verwenden.

### Manifest-Schlüssel

Erhalten Sie vollständige Details zu den [Manifest-Schlüsseln](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json), einschließlich aller ihrer Eigenschaften und Einstellungen.
