---
title: Add-ons
slug: Mozilla/Add-ons
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Add-ons ermöglichen es Entwicklern, die Funktionalität von Firefox zu erweitern und zu modifizieren. Sie werden unter Verwendung der standardmäßigen Webtechnologien JavaScript, HTML und CSS sowie einiger spezieller JavaScript-APIs geschrieben.

Ein Add-on könnte unter anderem:

- Das Erscheinungsbild oder den Inhalt bestimmter Websites ändern
- Die Benutzeroberfläche von Firefox modifizieren
- Neue Funktionen zu Firefox hinzufügen

Es gibt verschiedene Arten von Add-ons, aber die gängigste Art sind Erweiterungen.

## Entwicklung von Erweiterungen

Früher gab es mehrere Toolsets für die Entwicklung von Firefox-Erweiterungen, aber ab November 2017 müssen Erweiterungen mit [WebExtensions-APIs](/de/docs/Mozilla/Add-ons/WebExtensions) erstellt werden. Andere Toolsets wie Overlay-Add-ons, bootstrapped Add-ons und das Add-on SDK werden nicht mehr unterstützt.

Erweiterungen, die mithilfe der WebExtensions-APIs für Firefox geschrieben wurden, sind so konzipiert, dass sie browserübergreifend kompatibel sind. In den meisten Fällen laufen sie mit wenigen, wenn überhaupt, Änderungen in Chrome, Edge und Opera. Sie sind auch vollständig kompatibel mit multiprocess Firefox. Sie können [die derzeit in Firefox und anderen Browsern unterstützten APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) einsehen.

### Extension Workshop

Der [Firefox Extension Workshop](https://extensionworkshop.com/) kann Ihnen dabei helfen, Erweiterungen für Firefox zu entwickeln und ihren Nutzern einfache, aber leistungsstarke Möglichkeiten zur Anpassung ihres Surferlebnisses zu bieten. Sie finden:

- [Übersicht der Firefox-Erweiterungsfunktionen](https://extensionworkshop.com/#about)
- [Werkzeuge und Prozesse für Entwicklung und Test](https://extensionworkshop.com/documentation/develop/)
- [Anleitung zur Veröffentlichung Ihrer Erweiterung auf addons.mozilla.org oder zur eigenständigen Verteilung](https://extensionworkshop.com/documentation/publish/)
- [Anleitung zur Verwaltung Ihrer veröffentlichten Erweiterung](https://extensionworkshop.com/documentation/manage/)
- [Ein Unternehmensleitfaden zur Entwicklung und Nutzung von Erweiterungen](https://extensionworkshop.com/documentation/enterprise/)
- [Anleitung zur Entwicklung von Themes für Firefox](https://extensionworkshop.com/documentation/themes/)
- [Firefox-Entwicklergemeinschaften](https://extensionworkshop.com/community/)

### Erweiterungen für Firefox für Android

Im Jahr 2020 wird Mozilla eine neue Firefox-Erfahrung für Android herausbringen. Dieser neue, leistungsstarke Browser für Android wurde von Grund auf neu mithilfe von GeckoView, Mozillas Mobil-Browser-Engine, entwickelt. Wir arbeiten derzeit an der Unterstützung der WebExtensions-API auf GeckoView.

## Veröffentlichen von Add-ons

[Addons.mozilla.org](https://addons.mozilla.org/), allgemein als "AMO" bekannt, ist Mozillas offizielle Seite für Entwickler, um Add-ons zu listen und Nutzern, um sie zu entdecken. Durch das Hochladen Ihres Add-ons auf AMO können Sie an unserer Gemeinschaft von Nutzern und Erstellern teilnehmen und ein Publikum für Ihr Add-on finden.

Es ist nicht erforderlich, Ihr Add-on auf AMO zu listen, jedoch muss Ihr Add-on von Mozilla signiert sein, da Benutzer es sonst nicht installieren können.

Für einen Überblick über den Veröffentlichungsprozess Ihres Add-ons siehe [Signing and distributing your add-on](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/).

## Andere Arten von Add-ons

Neben Erweiterungen gibt es noch einige andere Arten von Add-ons, die Benutzern die Anpassung von Firefox ermöglichen. Diese Add-ons umfassen:

- [Benutzerwörterbücher](https://support.mozilla.org/en-US/kb/how-do-i-use-firefox-spell-checker) ermöglichen es Ihnen, die Rechtschreibprüfung in verschiedenen Sprachen zu verwenden.
- [Sprachpakete](https://support.mozilla.org/en-US/kb/use-firefox-another-language) ermöglichen es Ihnen, weitere Sprachen für die Benutzeroberfläche von Firefox verfügbar zu machen.

## Kontakt

Besuchen Sie die [Kontaktseite](/de/docs/Mozilla/Add-ons/Contact_us), um Details darüber zu erfahren, wie Sie Hilfe erhalten, über Add-ons-News auf dem Laufenden bleiben und uns Feedback geben können.
