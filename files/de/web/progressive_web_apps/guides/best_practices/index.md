---
title: Best Practices für PWAs
slug: Web/Progressive_web_apps/Guides/Best_practices
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{PWASidebar}}

[Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs) können auf Geräten installiert und wie traditionelle Websites in Webbrowsern genutzt werden. Das bedeutet, dass PWAs in der Lage sein müssen, sich an unterschiedliche Umgebungen und Nutzererwartungen anzupassen.

Dieser Artikel bietet eine Liste von Best Practices, um sicherzustellen, dass Ihre PWA so gut wie möglich ist.

## Für alle Browser anpassen

Ihre PWA basiert auf Webtechnologien. Das bedeutet, dass PWAs nicht nur auf Geräten installierbar sind, sondern auch in Webbrowsern ausgeführt werden können. Um die Kompatibilität sicherzustellen, ist es wichtig, Ihre App über verschiedene Browser und Betriebssysteme hinweg zu [testen](/de/docs/Learn_web_development/Extensions/Testing).

Berücksichtigen Sie die vielfältige Bandbreite an Browsern, die Ihre Nutzer verwenden könnten, und richten Sie sich an ein breites Spektrum potenzieller Nutzer. Mithilfe von [Feature-Erkennung](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection) können Sie ein nutzbares Erlebnis für das breiteste Publikum bieten.

Die Feature-Erkennung hilft auch bei der {{Glossary("Progressive_Enhancement", "Progressiven Verbesserung")}}, einer Designphilosophie, die es ermöglicht, für möglichst viele Nutzer ein großartiges Erlebnis zu bieten.

Mit der Progressiven Verbesserung konzentrieren Sie sich zunächst darauf, die Kernfunktionen Ihrer App universell mit einfachster Technologie zum Laufen zu bringen, und verbessern dann das Erlebnis für unterstützende Geräte.

Beispielsweise bedeutet das Behandeln von Formularübertragungen mit dem HTML-{{htmlelement("form")}}-Element, dass das Formular in allen Browsern funktioniert, inklusive derer, die JavaScript nicht unterstützen. Sie können das Formular dann durch Hinzufügen von Client-seitiger Validierung und JavaScript-basierter Übertragungsbehandlung für ein besseres Erlebnis auf kompatiblen Geräten schrittweise verbessern.

## Für alle Geräte anpassen

Ähnlich wie das Testen Ihrer App über verschiedene Browser hinweg wichtig ist, stellt das Testen über verschiedene Geräte sicher, dass Ihre App für das breiteste Publikum zugänglich ist.

[Responsives Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) ist entscheidend für PWAs, um sicherzustellen, dass Inhalte auf jeder Bildschirmgröße zugänglich sind. Nutzer sollten in der Lage sein, auf alle Funktionen und Inhalte zuzugreifen, unabhängig von der Bildschirmgröße ihres Geräts. Durch das Anpassen von Inhalten an verschiedene Bildschirmgrößen können Sie wichtige Daten und Aktionen priorisieren.

Stellen Sie sicher, dass Nutzer mit Ihrer Anwendung interagieren können, egal wie sie auf Ihre Inhalte zugreifen. Unterstützen Sie Tastatur und Maus sowie Touch- oder Stiftein- gabemethoden. Stellen Sie sicher, dass alle Funktionen Ihrer Anwendung über jede Eingabemethode zugänglich sind.

Verwenden Sie schließlich {{Glossary("Semantics#semantics_in_html", "semantische HTML-Elemente")}} anstelle von selbst erstellten Schaltflächen oder Formularelementen, da semantische HTML-Elemente alle Nutzereingabemethoden von Haus aus unterstützen.

## Bieten Sie eine Offline-Erfahrung

Nutzer von installierten Apps erwarten, dass sie immer funktionieren; selbst bei einer langsamen oder unzuverlässigen Netzwerkverbindung oder wenn ihr Gerät vollständig offline ist.

### Individuelle Offline-Seite

Mindestens sollte Ihre PWA eine individuelle Offline-Seite bereitstellen, die den Nutzer darüber informiert, dass er offline ist, anstatt die generische Browser-Fehlerseite anzuzeigen. Eine individuelle Offline-Seite bietet ein konsistenteres Erlebnis über verschiedene Browser und Geräte hinweg und hält den Nutzer in Ihrer App beschäftigt.

Sie können eine individuelle Offline-Seite bereitstellen, indem Sie einen [Service Worker](/de/docs/Web/API/Service_Worker_API) verwenden, um Netzwerk-Anfragen abzufangen und mit der individuellen Offline-Seite zu antworten, wenn der Nutzer offline ist.

### Offline-Betrieb

Um weiterzugehen und ein app-ähnliches Erlebnis zu bieten, sollte Ihre PWA funktionieren, wenn der Nutzer offline ist. Das bedeutet, dass der Nutzer weiterhin einige, und idealerweise alle, Funktionen Ihrer App nutzen kann, selbst wenn er offline ist.

Stellen Sie sich folgendes Szenario vor: Der Nutzer schreibt eine lange E-Mail und drückt "Senden", ohne zu bemerken, dass die Netzwerkverbindung verloren gegangen ist. Da Ihre App offline arbeitet, wird die E-Mail lokal gespeichert und automatisch gesendet, wenn das Gerät wieder online ist.

Erfahren Sie mehr über [Offline- und Hintergrundoperationen](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation).

## Deep-Links unterstützen

Deep-Links sind Hyperlinks, die auf spezifische Seiten innerhalb der Domain Ihrer App zeigen. Beispielsweise könnte die Startseite Ihrer App unter `https://example.com/` sein, aber Sie können auch auf eine spezifische Produktseite unter `https://example.com/products/123` verlinken.

Die Fähigkeit, auf jede Ressource über eine einzigartige URL zu verweisen, ist eine der mächtigsten Funktionen des Webs. Da sie auf Webtechnologien aufgebaut sind, können und sollten PWAs diese Funktion nutzen.

Das Bereitstellen verschiedener Abschnitte Ihrer App über einzigartige URLs ermöglicht es Nutzern, Inhalte innerhalb Ihrer App zu markieren, direkt zu navigieren und zu teilen. Außerdem erlaubt es Suchmaschinen, die Inhalte Ihrer App zu indexieren und über Web-Suchanfragen auffindbar zu machen.

## Schnelligkeit sicherstellen

Nutzer haben unterschiedliche Erwartungen an installierte Apps im Vergleich zu Websites. Benutzer erwarten, dass Websites Zeit zum Laden und Navigieren benötigen, insbesondere bei schlechten Netzwerkverbindungen. Hingegen erwarten sie, dass installierte Apps immer schnell und reaktionsschnell sind.

Die Geschwindigkeit, mit der Ihre App lädt und ihre Kernfunktionen ausführt, spielt eine entscheidende Rolle für die Benutzerbindung und -erhaltung. Je länger es dauert, bis Ihre App reagiert, desto mehr Nutzer werden sie verlassen.

Es gibt Tools, APIs und Best Practices, die helfen, die Leistung zu messen und zu verbessern. Um mehr zu erfahren, siehe [Web-Performance](/de/docs/Web/Performance).

## Barrierefreiheit gewährleisten

Barrierefreiheit ist entscheidend, um sicherzustellen, dass jeder Ihre App nutzen kann, unabhängig von den Fähigkeiten einer Person oder dem Gerät, das sie zum Zugriff auf Ihre App verwenden. Barrierefreiheit stellt sicher, dass möglichst viele Menschen Ihre App nutzen können. Barrierefreiheit ist auch gesetzlich vorgeschrieben. Darüber hinaus führt Barrierefreiheit oft zu einer besseren Benutzererfahrung für alle, nicht nur für Menschen mit dauerhaften oder vorübergehenden Behinderungen.

Erfahren Sie, wie Sie Ihre App barrierefrei gestalten können, in [Barrierefreiheit](/de/docs/Web/Accessibility).

## Bieten Sie ein app-ähnliches Erlebnis

### Integration mit dem Betriebssystem

Nutzer erwarten, dass installierte PWAs wie jede installierte, plattform-spezifische App funktionieren. Um das app-ähnliche Erlebnis zu bieten, das Nutzer erwarten, integrieren Sie Ihre App in irgendeiner Form mit dem Betriebssystem. Beispielsweise:

- Verwenden Sie die [Notifications API](/de/docs/Web/API/Notifications_API), um Benachrichtigungen an das Gerät des Nutzers zu senden.
- Handhaben Sie Dateien mit dem [`file_handlers`](/de/docs/Web/Manifest/file_handlers) Mitglied des Web-App-Manifests.
- [Zeigen Sie Abzeichen](/de/docs/Web/Progressive_web_apps/How_to/Display_badge_on_app_icon) auf dem App-Symbol an.
- Ermöglichen Sie [Datenaustausch zwischen Apps](/de/docs/Web/Progressive_web_apps/How_to/Share_data_between_apps).

Viele der [Web-App-Manifest-Mitglieder](/de/docs/Web/Manifest#members) können verwendet werden, um die Art und Weise zu personalisieren, wie Ihre App auf dem Gerät des Nutzers angezeigt wird und sich tiefer in das Betriebssystem zu integrieren.

### App-Aussehen und -Feeling

Nutzer installieren Apps, um ein fokussierteres Erlebnis zu erhalten als das, was sie von Websites bekommen, und um Aufgaben effizienter zu erledigen. Sie erwarten, dass Apps stärker gestrafft sind, mit weniger Unordnung, und sich auf die wichtigsten Aufgaben konzentrieren.

Stellen Sie sicher, dass Ihre PWA ein app-ähnliches Erlebnis bietet, indem Sie die folgenden Richtlinien berücksichtigen:

- Verwenden Sie einen [eigenständigen Anzeigemodus](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app), um Ihrer App ihr eigenes dediziertes Fenster zu geben.
- [Definieren Sie Ihr App-Symbol](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons).
- Erkennen Sie das bevorzugte Thema des Nutzers mit dem {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} Medienfeature und passen Sie das Thema Ihrer App entsprechend an.
- [Passen Sie die Themen- und Hintergrundfarben Ihrer App an](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors), um ein besseres Erlebnis zu bieten, das sich mehr wie eine plattform-spezifische App anfühlt.
- Entwirren Sie den Inhalt und konzentrieren Sie sich auf die wichtigsten Aufgaben, die Ihre App den Nutzern ermöglicht zu erreichen. Dies kann bedeuten, große Kopf- und Fußzeilen zu entfernen, die traditionell auf Websites zu finden sind, und sie stattdessen durch ein Menümetapher zu ersetzen.
- Verwenden Sie die `system-ui` {{cssxref("font-family")}}, um Ihre Inhalte plattformnativer erscheinen zu lassen und schneller zu laden, ohne dass Nutzer einen benutzerdefinierten Schriftart herunterladen müssen.

## Siehe auch

- [What makes a good Progressive Web App](https://web.dev/articles/pwa-checklist) auf web.dev (2022).
- [Best practices for PWAs](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/best-practices) auf learn.microsoft.com (2023).
