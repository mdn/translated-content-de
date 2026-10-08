---
title: Browser-Erweiterungen
slug: Mozilla/Add-ons/WebExtensions
l10n:
  sourceCommit: 674fbb492c76a45adf433810f0f5737a0405bd9c
---

Erweiterungen, auch Add-ons genannt, können die Funktionen eines Browsers verändern und erweitern. Erweiterungen für Firefox werden mit der browserübergreifenden WebExtensions API entwickelt.

Die Erweiterungstechnologie von Firefox ist weitgehend mit der [Extension API](https://developer.chrome.com/docs/extensions/reference/) kompatibel, die von Chromium-basierten Browsern wie Google Chrome, Microsoft Edge, Opera und Vivaldi unterstützt wird. In den meisten Fällen laufen Erweiterungen, die für Chromium-basierte Browser geschrieben wurden, mit [nur wenigen Änderungen](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/) auch in Firefox.

## Wichtige Ressourcen

- Leitfäden
  - : Ob Sie gerade erst anfangen oder weiterführende Tipps suchen: In unseren umfangreichen [Tutorials und Leitfäden](/de/docs/Mozilla/Add-ons/WebExtensions/What_are_WebExtensions) erfahren Sie, wie Erweiterungen funktionieren und wie Sie die WebExtensions API verwenden.
- Referenzen
  - : Hier finden Sie ausführliche Informationen zu Methoden, Eigenschaften, Typen und Ereignissen der [WebExtensions APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) sowie zu den [Manifest-Schlüsseln](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json).
- Firefox-Workflow
  - : Erfahren Sie im [Extension Workshop](https://extensionworkshop.com/), wie Sie Erweiterungen für Firefox entwickeln und veröffentlichen. Dort finden Sie Informationen zu Entwicklerwerkzeugen, Veröffentlichung und Verbreitung sowie zur Portierung.

> [!NOTE]
> Wenn Sie Ideen oder Fragen haben oder Hilfe benötigen, erreichen Sie uns im [Community-Forum](https://discourse.mozilla.org/c/add-ons/35) oder im [Add-ons-Raum](https://matrix.to/#/#addons:mozilla.org) auf [Matrix](https://wiki.mozilla.org/Matrix).

## Erste Schritte

Entdecken Sie, [was Erweiterungen leisten können](/de/docs/Mozilla/Add-ons/WebExtensions/What_are_WebExtensions), bevor Sie [Ihre erste Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension) und [Ihre zweite Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension) entwickeln. Lernen Sie den [Aufbau einer Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension) kennen und verschaffen Sie sich einen Überblick über den [Entwicklungs- und Veröffentlichungs-Workflow für Firefox-Erweiterungen](https://extensionworkshop.com/documentation/develop/firefox-workflow-overview/). Vertiefen Sie Ihr Wissen anhand einer umfangreichen Auswahl an [Beispielerweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Examples), die Sie direkt in Firefox ausführen können. Anschließend finden Sie [weitere Ressourcen](/de/docs/Mozilla/Add-ons/WebExtensions/What_next), mit denen Sie weiterlernen können.

## Konzepte

Informieren Sie sich ausführlich über die Konzepte, auf denen Erweiterungen beruhen.

- [Überblick über die JavaScript API](/de/docs/Mozilla/Add-ons/WebExtensions/API)
- [Content scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)
- [Background scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Background_scripts)
- [`activeTab`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/activeTab_permission)
- [Match patterns](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)
- [Arbeiten mit Dateien](/de/docs/Mozilla/Add-ons/WebExtensions/Working_with_files)
- [Internationalisierung](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization)
- [Content Security Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Native messaging](/de/docs/Mozilla/Add-ons/WebExtensions/Native_messaging)
- [Native manifests](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests)
- [Benutzeraktionen](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions)
- [Unterschiede zwischen API-Implementierungen](/de/docs/Mozilla/Add-ons/WebExtensions/Differences_between_API_implementations)
- [Inkompatibilitäten mit Chrome](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities)

## Benutzeroberfläche

Entdecken Sie alle [Komponenten der Benutzeroberfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface), die Sie in Ihren Erweiterungen verwenden können, einschließlich Codebeispielen und Tipps.

## Anleitungen

Eine Reihe von Tutorials, die Ihnen den Einstieg in bestimmte Aspekte der Erweiterungsentwicklung erleichtern.

- [HTTP-Anfragen abfangen](/de/docs/Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests)
- [Eine Webseite verändern](/de/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page)
- [Externe Inhalte sicher in eine Seite einfügen](/de/docs/Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page)
- [Objekte mit Seitenskripten teilen](/de/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts)
- [Eine Schaltfläche zur Symbolleiste hinzufügen](/de/docs/Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar)
- [Eine Einstellungsseite implementieren](/de/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page)
- [Mit der Tabs API arbeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API)
- [Mit der Bookmarks API arbeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_the_Bookmarks_API)
- [Mit der Cookies API arbeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_the_Cookies_API)
- [Mit kontextuellen Identitäten arbeiten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities)
- [Mit der Zwischenablage interagieren](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard)
- [Die Entwicklerwerkzeuge erweitern](/de/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools)
- [Eine browserübergreifende Erweiterung entwickeln](/de/docs/Mozilla/Add-ons/WebExtensions/Build_a_cross_browser_extension)

## Firefox-Workflow

Wenn Sie Ihre Erweiterung für Firefox entwickeln oder Ihre Chrome-Erweiterung portieren möchten, besuchen Sie den [Extension Workshop](https://extensionworkshop.com/). Dort finden Sie Informationen zu:

- dem Firefox-Workflow, etwa zum [temporären Installieren von Erweiterungen während der Entwicklung](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/), zum [Debugging](https://extensionworkshop.com/documentation/develop/debugging/) und zum [Anfordern der richtigen Berechtigungen](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/);
- dem Entwicklerwerkzeug [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/);
- der [Portierung einer Google-Chrome-Erweiterung](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/) und den [Unterschieden zwischen Desktop- und Android-Erweiterungen](https://extensionworkshop.com/documentation/develop/differences-between-desktop-and-android-extensions/);
- der [Veröffentlichung und Verbreitung](https://extensionworkshop.com/documentation/publish/), der [Bewerbung Ihrer Erweiterung](https://extensionworkshop.com/documentation/publish/promoting-your-extension/) und den [Best Practices für den Lebenszyklus von Erweiterungen](https://extensionworkshop.com/documentation/manage/).

## Referenz

### JavaScript APIs

Hier finden Sie ausführliche Informationen zu Methoden, Eigenschaften, Typen und Ereignissen aller [JavaScript APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API). Außerdem gibt es detaillierte Informationen zur Kompatibilität der einzelnen APIs mit den wichtigsten Browsern. Die meisten Referenzseiten enthalten auch Codebeispiele und Links zu Beispielerweiterungen, die die jeweilige API verwenden.

### Manifest-Schlüssel

Hier finden Sie ausführliche Informationen zu den [Manifest-Schlüsseln](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json), einschließlich aller ihrer Eigenschaften und Einstellungen.
