---
title: Was nun?
slug: Mozilla/Add-ons/WebExtensions/What_next
l10n:
  sourceCommit: 8e318f66a4433d20190f167f3da108d4b27e93f2
---

{{AddonSidebar}}

Sie sind nun bereit, Ihre Idee für eine Browser-Erweiterung in die Realität umzusetzen. Bevor Sie diese Reise beginnen, sollten Sie sich einiger Dinge bewusst sein, die Ihnen helfen werden, sie reibungslos zu gestalten.

Mehr über viele der auf dieser Seite besprochenen Themen finden Sie im [Extension Workshop](https://extensionworkshop.com), einer Website, die Ihnen hilft, Erweiterungen für Firefox zu schreiben, zu testen, zu veröffentlichen und zu vertreiben.

## Ihre Entwicklungsumgebung

Sie benötigen keine speziellen Entwicklungs- oder Build-Umgebungstools, um Browser-Erweiterungen zu erstellen: Es ist völlig möglich, großartige Browser-Erweiterungen mit nichts weiter als einem Texteditor zu erstellen. Wenn Sie jedoch bereits für das Web entwickeln und ein Set von Tools und eine Umgebung haben, die Sie wiederverwenden möchten, sollten Sie sich über ein paar Dinge im Klaren sein.

Wenn Sie Minifizierungs- oder Verschleierungstools verwenden, um Ihren endgültigen Code zu liefern, müssen Sie Ihren Quellcode dem [AMO-Prüfprozess](#der_prüfprozess) bereitstellen. Auch die von Ihnen verwendeten Tools—sei es für Minifizierung, Verschleierung oder Build-Prozesse—müssen Open Source sein (oder uneingeschränkte kostenlose Nutzung bieten) und auf dem Computer des Prüfers (Windows, Mac oder Linux) verfügbar sein. Leider können unsere Prüfer nicht mit kommerziellen oder webbasierten Tools arbeiten.

[Erfahren Sie mehr über Entwicklungstools im Extension Workshop](https://extensionworkshop.com/documentation/develop/browser-extension-development-tools/)

## Drittanbieter-Bibliotheken

Drittanbieter-Bibliotheken sind eine großartige Möglichkeit, komplexe Funktionen oder Features schnell zu Ihren Browser-Erweiterungen hinzuzufügen. Wenn Sie eine Erweiterung dem [AMO-Prüfprozess](#der_prüfprozess) einreichen, wird auch die Verwendung von Drittanbieter-Bibliotheken betrachtet. Um die Prüfung zu erleichtern, stellen Sie sicher, dass Sie Drittanbieter-Bibliotheken immer von deren offizieller Website oder Repository herunterladen und, falls die Bibliothek minifiziert ist, einen Link zum Quellcode angeben. Bitte beachten Sie, dass Drittanbieter-Bibliotheken in keiner Weise modifiziert werden dürfen.

[Erfahren Sie mehr über die Einreichung von Quellcode im Extension Workshop](https://extensionworkshop.com/documentation/publish/source-code-submission/)

## Die Firefox-Add-on-Vertriebsvereinbarung

Browser-Erweiterungen müssen signiert werden, um in den Release- oder Betaversionen von Firefox installiert zu werden. Die Signierung erfolgt auf addons.mozilla.org (AMO) und unterliegt den Bedingungen der Firefox-Add-on-Vertriebsvereinbarung. Das Ziel der Vereinbarung ist es, sicherzustellen, dass Firefox-Nutzer Zugriff auf gut unterstützte, qualitativ hochwertige Add-ons haben, die das Firefox-Erlebnis verbessern.

[Lesen Sie die Vereinbarung im Extension Workshop](https://extensionworkshop.com/documentation/publish/firefox-add-on-distribution-agreement/)

[Erfahren Sie mehr über die Signierung im Extension Workshop](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/)

## Der Prüfprozess

Wenn eine Browser-Erweiterung zur Signierung eingereicht wird, unterliegt sie einer automatisierten Prüfung. Sie kann auch einer manuellen Prüfung unterzogen werden, wenn die automatisierte Prüfung feststellt, dass eine manuelle Prüfung erforderlich ist. Ihre Browser-Erweiterung wird erst signiert, wenn sie die automatisierte Prüfung bestanden hat, und die Signierung kann widerrufen werden, wenn sie die manuelle Prüfung nicht besteht. Der Prüfprozess folgt einem strengen Satz von Richtlinien, sodass es einfach ist, mögliche Prüfprobleme zu überprüfen und zu vermeiden.

[Überprüfen Sie die Prüfungsrichtlinien und -richtlinien im Extension Workshop](https://extensionworkshop.com/documentation/publish/add-on-policies/)

## Auf AMO hervorgehobene Browser-Erweiterungen

Wenn Sie sich entscheiden, Ihre Browser-Erweiterung auf AMO zu listen, könnte Ihre Erweiterung auf der AMO-Website, im Add-on-Manager des Firefox-Browsers oder an anderer Stelle auf einer Mozilla-Website hervorgehoben werden. Wir haben eine Liste von Richtlinien zusammengestellt, wie Erweiterungen für die Hervorhebung ausgewählt werden. Indem Sie diesen Richtlinien folgen, geben Sie Ihrer Erweiterung die beste Chance, hervorgehoben zu werden.

[Erfahren Sie mehr darüber, wie Sie Ihre Add-ons im Extension Workshop hervorheben lassen können](https://extensionworkshop.com/documentation/publish/recommended-extensions/)

## Setzen Sie Ihre Lernerfahrung fort

Nun, da Sie wissen, was auf Sie zukommt, ist es an der Zeit, tiefer in die Details der Browser-Erweiterungsentwicklung einzutauchen. In den folgenden Abschnitten erfahren Sie:

- Mehr über die grundlegenden Konzepte hinter Browser-Erweiterungen, beginnend mit Details, wie Sie die [JavaScript-APIs nutzen](/de/docs/Mozilla/Add-ons/WebExtensions/API) können.
- Ein Leitfaden zu den [Benutzeroberflächenkomponenten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface), die Ihren Browser-Erweiterungen zur Verfügung stehen.
- Eine Sammlung von Anleitungen, um wichtige Aufgaben in Ihren Erweiterungen zu erreichen oder die JavaScript-APIs zu nutzen.
- Ein vollständiger Referenzleitfaden zu den [JavaScript-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs).
- Ein vollständiger Referenzleitfaden zu den [Manifest-Schlüsseln](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json).

Sie sollten auch den Extension Workshop besuchen, wo Sie alles finden, was Sie über die Erstellung von Erweiterungen für Firefox wissen müssen, einschließlich:

- [einer Übersicht über die Features der Firefox-Erweiterungen](https://extensionworkshop.com/#about)
- [Details zu den Tools und Prozessen für die Entwicklung und das Testen](https://extensionworkshop.com/documentation/develop/)
- [wie Sie Ihre Erweiterung auf addons.mozilla.org veröffentlichen oder selbst verteilen](https://extensionworkshop.com/documentation/publish/)
- [wie Sie Ihre veröffentlichte Erweiterung verwalten](https://extensionworkshop.com/documentation/manage/)
- [einem Unternehmensleitfaden zur Entwicklung und Nutzung von Erweiterungen](https://extensionworkshop.com/documentation/enterprise/)
- [wie Sie Themes für Firefox entwickeln](https://extensionworkshop.com/documentation/themes/)
- [Details über die Firefox-Entwicklergemeinschaften](https://extensionworkshop.com/community/)
