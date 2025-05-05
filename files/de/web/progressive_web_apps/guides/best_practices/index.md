---
title: Beste Praktiken für PWAs
slug: Web/Progressive_web_apps/Guides/Best_practices
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

[Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs) können auf Geräten installiert und wie traditionelle Websites in Webbrowsern genutzt werden. Das bedeutet, dass PWAs in der Lage sein müssen, sich an unterschiedliche Umgebungen und Benutzererwartungen anzupassen.

Dieser Artikel bietet eine Liste von bewährten Praktiken, um sicherzustellen, dass Ihre PWA so gut wie möglich ist.

## An alle Browser anpassen

Ihre PWA basiert auf Webtechnologien. Das bedeutet, dass sie neben der Installierbarkeit auf Geräten auch in Webbrowsern laufen können. Um die Kompatibilität sicherzustellen, ist es wichtig, Ihre App [in verschiedenen Browsern und Betriebssystemen zu testen](/de/docs/Learn_web_development/Extensions/Testing).

Berücksichtigen Sie die Vielzahl von Browsern, die Ihre Benutzer möglicherweise verwenden, und richten Sie sich an ein breites Spektrum potenzieller Benutzer. Durch die Verwendung von [Feature-Erkennung](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection) können Sie ein nutzbares Erlebnis für die breiteste Zielgruppe bieten.

Die Feature-Erkennung unterstützt auch das {{Glossary("Progressive_Enhancement", "Progressive Enhancement")}}, eine Designphilosophie, die es ermöglicht, ein großartiges Erlebnis für möglichst viele Benutzer bereitzustellen.

Mit Progressive Enhancement konzentriert man sich darauf, die Kernfunktionen Ihrer App zunächst mit der einfachsten Technologie universell funktional zu machen und dann das Erlebnis für unterstützende Geräte zu verbessern.

Zum Beispiel bedeutet die Behandlung von Formularübermittlungen mit dem HTML-{{htmlelement("form")}}-Element, dass das Formular in allen Browsern funktioniert, einschließlich solcher, die JavaScript nicht unterstützen. Sie können das Formular dann schrittweise verbessern, indem Sie Client-seitige Validierung und JavaScript-basierte Übermittlungsmöglichkeiten hinzufügen, um das Erlebnis auf kompatiblen Geräten zu verbessern.

## An alle Geräte anpassen

Ähnlich wie das Testen Ihrer App in verschiedenen Browsern wichtig ist, gewährleistet das Testen auf verschiedenen Geräten, dass Ihre App für die größtmögliche Zielgruppe zugänglich ist.

[Responsives Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) ist entscheidend für PWAs, um sicherzustellen, dass der Inhalt auf jeder Bildschirmgröße zugänglich ist. Benutzer sollten alle Funktionen und Inhalte unabhängig von der Bildschirmgröße ihres Geräts erreichen können. Durch die Umstrukturierung des Inhalts bei unterschiedlichen Ansichtsgrößen können wichtige Daten und Aktionen priorisiert werden.

Stellen Sie sicher, dass Benutzer mit Ihrer Anwendung interagieren können, egal wie sie auf Ihre Inhalte zugreifen. Unterstützen Sie Tastatur und Maus sowie Touch- oder Stifteingabemethoden. Stellen Sie sicher, dass alle Funktionen Ihrer Anwendung mit jeder Eingabemethode zugänglich sind.

Verwenden Sie schließlich {{Glossary("Semantics#semantics_in_html", "semantische HTML-Elemente")}} anstelle der Neuentwicklung eigener Schaltflächen oder Formularelemente, da semantische HTML-Elemente alle Benutzereingabemethoden direkt unterstützen.

## Eine Offline-Erfahrung bieten

Benutzer installierter Apps erwarten, dass sie immer funktionieren, auch bei einer langsamen oder unzuverlässigen Netzverbindung oder wenn ihr Gerät komplett offline ist.

### Individuelle Offline-Seite

Mindestens sollte Ihre PWA eine individuelle Offline-Seite bieten, die den Benutzer darüber informiert, dass er offline ist, anstatt die generische Fehlerseite des Browsers anzuzeigen. Eine individuelle Offline-Seite bietet über verschiedene Browser und Geräte hinweg ein konsistenteres Erlebnis und hält den Benutzer mit Ihrer App beschäftigt.

Sie können eine individuelle Offline-Seite bereitstellen, indem Sie einen [Service Worker](/de/docs/Web/API/Service_Worker_API) verwenden, um Netzwerk-Anfragen abzufangen und mit der benutzerdefinierten Offline-Seite zu antworten, wenn der Benutzer offline ist.

### Offline-Betrieb

Um weiterzugehen und ein App-ähnliches Erlebnis zu bieten, sollte Ihre PWA funktionieren, wenn der Benutzer offline ist. Das bedeutet, dass der Benutzer einige, und vorzugsweise alle, Funktionen Ihrer App weiterhin nutzen kann, selbst wenn er offline ist.

Berücksichtigen Sie das folgende Szenario: Der Benutzer schreibt eine lange E-Mail und drückt auf "Senden", ohne zu bemerken, dass er die Netzwerkverbindung verloren hat. Weil Ihre App offline funktioniert, wird die E-Mail lokal gespeichert und automatisch gesendet, wenn das Gerät wieder online ist.

Erfahren Sie mehr über [Offline- und Hintergrundoperationen](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation).

## Unterstützung für tiefe Links

Tiefe Links sind Hyperlinks, die auf bestimmte Seiten innerhalb der Domäne Ihrer App verweisen. Zum Beispiel könnte die Startseite Ihrer App unter `https://example.com/` verfügbar sein, aber Sie können auch auf eine spezifische Produktseite unter `https://example.com/products/123` verweisen.

Die Fähigkeit, auf jede Ressource mit einer eindeutigen URL zu verweisen, ist eine der mächtigsten Funktionen des Webs. Da PWAs auf Webtechnologien basieren, können und sollten sie diese Funktion nutzen.

Indem Sie verschiedene Abschnitte Ihrer App über eindeutige URLs zugänglich machen, können Benutzer spezifische Inhalte innerhalb Ihrer App bookmarken, direkt darauf zugreifen und sie teilen. Dies ermöglicht auch Suchmaschinen, den Inhalt Ihrer App zu indexieren und über Web-Suchen auffindbar zu machen.

## Schnell machen

Benutzer haben unterschiedliche Erwartungen an installierte Apps im Vergleich zu Webseiten. Benutzer erwarten, dass Webseiten Ladezeit und Navigation benötigen, insbesondere bei schlechten Netzwerkverbindungen. Sie erwarten jedoch, dass installierte Apps immer schnell und reaktionsschnell sind.

Die Geschwindigkeit, mit der Ihre App lädt und ihre Kernfunktionen ausführt, spielt eine Schlüsselrolle bei der Benutzerbindung und -bindung. Je länger es dauert, bis Ihre App reagiert, desto mehr Benutzer werden sie aufgeben.

Es gibt Tools, APIs und bewährte Praktiken, die helfen, die Leistung zu messen und zu verbessern. Um mehr zu erfahren, siehe [Web-Performance](/de/docs/Web/Performance).

## Barrierefreiheit gewährleisten

Barrierefreiheit ist entscheidend, um sicherzustellen, dass jeder Ihre App nutzen kann, unabhängig von individuellen Fähigkeiten oder dem Gerät, das sie verwenden, um auf Ihre App zuzugreifen. Barrierefreiheit stellt sicher, dass so viele Menschen wie möglich Ihre App nutzen können. Barrierefreiheit ist auch gesetzlich vorgeschrieben. Außerdem führt Barrierefreiheit oft zu einer besseren Benutzererfahrung für alle, nicht nur für Personen mit dauerhaften oder vorübergehenden Behinderungen.

Erfahren Sie, wie Sie Ihre App barrierefrei machen können, in [Barrierefreiheit](/de/docs/Web/Accessibility).

## Ein App-ähnliches Erlebnis bieten

### Integration mit dem Betriebssystem

Benutzer erwarten, dass installierte PWAs sich wie jede andere plattform-spezifische App verhalten. Um das App-ähnliche Erlebnis zu bieten, das Benutzer erwarten, integrieren Sie Ihre App irgendwie mit dem Betriebssystem. Zum Beispiel:

- Verwenden Sie die [Notifications API](/de/docs/Web/API/Notifications_API), um Benachrichtigungen an das Gerät des Benutzers zu senden.
- Bearbeiten Sie Dateien mit dem [`file_handlers`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/file_handlers)-Mitglied im Web-App-Manifest.
- [Anzeigen von Abzeichen](/de/docs/Web/Progressive_web_apps/How_to/Display_badge_on_app_icon) auf dem App-Symbol.
- Aktivieren Sie [Datenaustausch zwischen Apps](/de/docs/Web/Progressive_web_apps/How_to/Share_data_between_apps).

Viele der [Mitglieder im Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Manifest#members) können verwendet werden, um die Darstellung Ihrer App auf dem Gerät des Benutzers anzupassen und tiefer in das Betriebssystem zu integrieren.

### App-Look und -Gefühl

Benutzer installieren Apps, um ein fokussierteres Erlebnis als von Websites zu erhalten und Aufgaben effizienter zu erledigen. Sie erwarten, dass Apps schlanker sind, weniger überladen und sich auf die wichtigsten Aufgaben konzentrieren.

Stellen Sie sicher, dass Ihre PWA ein App-ähnliches Erlebnis bietet, indem Sie die folgenden Richtlinien berücksichtigen:

- Verwenden Sie einen [eigenständigen Anzeigemodus](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app), um Ihrer App ein eigenes dediziertes Fenster zu geben.
- [Definieren Sie Ihr App-Symbol](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons).
- Erkennen Sie das bevorzugte Thema des Benutzers mit der {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}-Medienfunktion und passen Sie das Thema Ihrer App entsprechend an.
- [Passen Sie das Thema und die Hintergrundfarben Ihrer App an](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors), um ein verfeinertes Erlebnis zu bieten, das sich mehr wie eine plattform-spezifische App anfühlt.
- Reduzieren Sie die Unordnung im Inhalt und konzentrieren Sie sich auf die wichtigsten Aufgaben, die Ihre App den Benutzern ermöglicht. Dies kann bedeuten, dass große Header und Footer, die traditionell auf Websites zu finden sind, entfernt und stattdessen durch ein Menümetapher ersetzt werden.
- Verwenden Sie die `system-ui`-{{cssxref("font-family")}}, um Ihren Inhalt plattform-nativer zu gestalten und schneller zu laden, ohne dass Benutzer einen benutzerdefinierten Schriftart herunterladen müssen.

## Siehe auch

- [Welche Eigenschaften hat eine gute Progressive Web App?](https://web.dev/articles/pwa-checklist) auf web.dev (2022).
- [Beste Praktiken für PWAs](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/best-practices) auf learn.microsoft.com (2023).
