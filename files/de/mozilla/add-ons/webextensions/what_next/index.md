---
title: Was kommt als Nächstes?
slug: Mozilla/Add-ons/WebExtensions/What_next
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Sie sind jetzt bereit, Ihre Idee für eine Browser-Erweiterung in die Realität umzusetzen. Bevor Sie diese Reise beginnen, sollten Sie sich über einige Dinge im Klaren sein, die helfen, diesen Prozess reibungslos zu gestalten.

Weitere Informationen zu vielen der auf dieser Seite besprochenen Themen finden Sie im [Extension Workshop](https://extensionworkshop.com/), einer Website, die Ihnen beim Schreiben, Testen, Veröffentlichen und Verteilen von Erweiterungen für Firefox hilft.

## Ihre Entwicklungsumgebung

Sie benötigen keine speziellen Entwicklungs- oder Build-Umgebungstools, um Browser-Erweiterungen zu erstellen: Es ist durchaus möglich, großartige Browser-Erweiterungen nur mit einem Texteditor zu erstellen. Wenn Sie jedoch bereits für das Web entwickelt haben und über eine Reihe von Tools und eine Umgebung verfügen, die Sie wiederverwenden möchten, sollten Sie einige Dinge beachten.

Wenn Sie Minifizierungs- oder Verschleierungstools verwenden, um Ihren finalen Code zu liefern, müssen Sie Ihren Quellcode dem [AMO-Überprüfungsprozess](#der_prüfprozess) bereitstellen. Ebenso müssen die von Ihnen verwendeten Tools - also solche für Minifizierung, Verschleierung und Build-Prozesse - Open Source sein (oder unbegrenzte kostenlose Nutzung bieten) und auf dem Computer des Prüfers (Windows, Mac oder Linux) ausführbar sein. Leider können unsere Prüfer nicht mit kommerziellen oder webbasierten Tools arbeiten.

[Erfahren Sie mehr über Entwicklungstools im Extension Workshop](https://extensionworkshop.com/documentation/develop/browser-extension-development-tools/)

## Drittanbieter-Bibliotheken

Drittanbieter-Bibliotheken sind eine großartige Möglichkeit, um schnell komplexe Funktionen oder Features zu Ihren Browser-Erweiterungen hinzuzufügen. Wenn Sie eine Erweiterung zum [AMO-Überprüfungsprozess](#der_prüfprozess) einreichen, berücksichtigt der Prozess auch alle verwendeten Drittanbieter-Bibliotheken. Um die Überprüfung zu vereinfachen, stellen Sie sicher, dass Sie Drittanbieter-Bibliotheken immer von deren offizieller Website oder Repository herunterladen und bei minifizierten Bibliotheken einen Link zum Quellcode bereitstellen. Bitte beachten Sie, dass Drittanbieter-Bibliotheken in keiner Weise modifiziert werden dürfen.

[Erfahren Sie mehr über die Einreichung von Quellcode im Extension Workshop](https://extensionworkshop.com/documentation/publish/source-code-submission/)

## Die Firefox Add-on-Distributionsvereinbarung

Browser-Erweiterungen müssen signiert werden, um in den Release- oder Beta-Versionen von Firefox installiert zu werden. Die Signierung erfolgt auf addons.mozilla.org (AMO) und unterliegt den Bedingungen der Firefox Add-on-Distributionsvereinbarung. Ziel der Vereinbarung ist es, sicherzustellen, dass Firefox-Nutzer Zugang zu gut unterstützten, qualitativ hochwertigen Add-ons erhalten, die das Firefox-Erlebnis verbessern.

[Lesen Sie die Vereinbarung im Extension Workshop](https://extensionworkshop.com/documentation/publish/firefox-add-on-distribution-agreement/)

[Erfahren Sie mehr über das Signieren im Extension Workshop](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/)

## Der Prüfprozess

Wenn eine Browser-Erweiterung zur Signierung eingereicht wird, unterliegt sie einer automatischen Überprüfung. Es kann auch zu einer manuellen Überprüfung kommen, wenn die automatische Überprüfung feststellt, dass eine manuelle Überprüfung erforderlich ist. Ihre Browser-Erweiterung wird nicht signiert, bis sie die automatische Überprüfung bestanden hat und ihre Signierung kann widerrufen werden, wenn sie die manuelle Überprüfung nicht besteht. Der Überprüfungsprozess befolgt eine strenge Richtlinie, sodass es einfach ist, mögliche Probleme im Überprüfungsprozess zu erkennen und zu vermeiden.

[Überprüfen Sie die Richtlinien und Leitlinien im Extension Workshop](https://extensionworkshop.com/documentation/publish/add-on-policies/)

## AMO-empfohlene Browser-Erweiterungen

Wenn Sie sich entscheiden, Ihre Browser-Erweiterung auf AMO aufzulisten, könnte Ihre Erweiterung auf der AMO-Website, im Add-on-Manager des Firefox-Browsers oder an anderer Stelle auf einer Mozilla-Website vorgestellt werden. Wir haben eine Liste von Richtlinien zusammengestellt, wie Erweiterungen für die Empfehlung ausgewählt werden. Wenn Sie diesen Richtlinien folgen, geben Sie Ihrer Erweiterung die beste Chance, vorgestellt zu werden.

[Erfahren Sie mehr darüber, wie Sie Ihre Add-ons im Extension Workshop empfohlen bekommen](https://extensionworkshop.com/documentation/publish/recommended-extensions/)

## Setzen Sie Ihr Lernerlebnis fort

Nun, da Sie wissen, was auf Sie zukommt, ist es an der Zeit, sich eingehender mit der Entwicklung von Browser-Erweiterungen zu beschäftigen. In den folgenden Abschnitten werden Sie entdecken:

- Mehr über die grundlegenden Konzepte hinter Browser-Erweiterungen, beginnend mit Details zur Nutzung der [JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API).
- Einen Leitfaden zu den [Benutzeroberflächenkomponenten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface), die Ihren Browser-Erweiterungen zur Verfügung stehen.
- Eine Sammlung von Anleitungen zum Erreichen wichtiger Aufgaben in Ihren Erweiterungen oder zur Nutzung der JavaScript-APIs.
- Einen vollständigen Referenzleitfaden zu den [JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs).
- Einen vollständigen Referenzleitfaden zu den [Manifest-Schlüsseln](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json).

Sie sollten auch den Extension Workshop besuchen, wo Sie alles finden, was Sie wissen müssen, um Erweiterungen für Firefox zu erstellen, einschließlich:

- [einen Überblick über die Firefox-Erweiterungsfunktionen](https://extensionworkshop.com/#about)
- [Einzelheiten zu den Tools und Prozessen für die Entwicklung und das Testen](https://extensionworkshop.com/documentation/develop/)
- [wie Sie Ihre Erweiterung auf addons.mozilla.org veröffentlichen oder selbst verteilen](https://extensionworkshop.com/documentation/publish/)
- [wie Sie Ihre veröffentlichte Erweiterung verwalten](https://extensionworkshop.com/documentation/manage/)
- [einen Unternehmensleitfaden für die Entwicklung und Nutzung von Erweiterungen](https://extensionworkshop.com/documentation/enterprise/)
- [wie Sie Themes für Firefox entwickeln](https://extensionworkshop.com/documentation/themes/)
- [Einzelheiten über die Firefox-Entwickler-Communities](https://extensionworkshop.com/community/)
