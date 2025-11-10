---
title: Beste Praktiken für PWAs
slug: Web/Progressive_web_apps/Guides/Best_practices
l10n:
  sourceCommit: 26f9fbee05fb92b584d44fba4359e86796484aa6
---

[Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs) können auf Geräten installiert und als traditionelle Webseiten in Webbrowsern genutzt werden. Das bedeutet, dass PWAs in der Lage sein müssen, sich an verschiedene Umgebungen und unterschiedliche Benutzererwartungen anzupassen.

Dieser Artikel bietet eine Liste von Best Practices, um sicherzustellen, dass Ihre PWA so gut wie möglich ist.

## An alle Browser anpassen

Ihre PWA basiert auf Webtechnologien. Das bedeutet, dass PWAs neben der Installierbarkeit auf Geräten auch in Webbrowsern ausgeführt werden können. Um die Kompatibilität sicherzustellen, ist es wichtig, Ihre App auf verschiedenen Browsern und Betriebssystemen zu [testen](/de/docs/Learn_web_development/Extensions/Testing).

Kalkulieren Sie das breite Spektrum an Browsern, die Ihre Benutzer verwenden könnten, und richten Sie sich an ein möglichst breites Publikum. Die Nutzung von [Feature-Detection](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection) ermöglicht es Ihnen, ein benutzerfreundliches Erlebnis für das breiteste Publikum zu liefern.

Feature-Detection unterstützt auch die {{Glossary("Progressive_Enhancement", "Progressive Enhancement")}}, eine Designphilosophie, die es ermöglicht, ein großartiges Erlebnis für möglichst viele Benutzer zu bieten.

Mit Progressive Enhancement konzentrieren Sie sich zunächst darauf, die Kernfunktionen Ihrer App universell zu gestalten, indem Sie die einfachste Technologie verwenden, und dann das Erlebnis für unterstützende Geräte verbessern.

Zum Beispiel bedeutet das Abwickeln von Formularübermittlungen mit dem HTML-{{htmlelement("form")}}-Element, dass das Formular in allen Browsern funktioniert, einschließlich derjenigen, die kein JavaScript unterstützen. Sie können dann das Formular schrittweise verbessern, indem Sie clientseitige Validierung und JavaScript-basierte Übermittlung für ein besseres Erlebnis auf kompatiblen Geräten hinzufügen.

## An alle Geräte anpassen

Ähnlich wie die Wichtigkeit, Ihre App in verschiedenen Browsern zu testen, ist das Testen auf verschiedenen Geräten entscheidend, um Ihre App für das breiteste Publikum zugänglich zu machen.

[Responsive Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) ist entscheidend für PWAs, um sicherzustellen, dass der Inhalt auf jeder Bildschirmgröße zugänglich ist. Benutzer sollten alle Funktionen und Inhalte unabhängig von der Bildschirmgröße ihres Geräts aufrufen können. Durch die Umstrukturierung von Inhalten bei verschiedenen Viewport-Größen können Sie wichtige Daten und Aktionen priorisieren.

Stellen Sie sicher, dass Benutzer mit Ihrer Anwendung interagieren können, unabhängig davon, wie sie auf Ihre Inhalte zugreifen. Unterstützen Sie Tastatur und Maus sowie Touch- oder Stift-Eingabemethoden. Stellen Sie sicher, dass alle Funktionen Ihrer Anwendung über jede Eingabemethode zugänglich sind.

Verwenden Sie schließlich {{Glossary("Semantics#semantics_in_html", "semantische HTML-Elemente")}} anstelle selbst erstellter Schaltflächen oder Formularelemente, da semantische HTML-Elemente alle Benutzereingabemethoden direkt unterstützen.

## Eine Offline-Erfahrung bieten

Benutzer erwarten, dass installierte Apps immer funktionieren; selbst bei einer langsamen oder unzuverlässigen Netzwerkverbindung oder wenn das Gerät völlig offline ist.

### Benutzerdefinierte Offline-Seite

Zumindest sollte Ihre PWA eine benutzerdefinierte Offline-Seite bereitstellen, die den Benutzer darüber informiert, dass er offline ist, anstatt die generische Browserfehlermeldung anzuzeigen. Eine benutzerdefinierte Offline-Seite bietet ein konsistenteres Erlebnis über Browser und Geräte hinweg und hält den Benutzer mit Ihrer App verbunden.

Sie können eine benutzerdefinierte Offline-Seite bereitstellen, indem Sie einen [Service Worker](/de/docs/Web/API/Service_Worker_API) verwenden, um Netzwerk-Anfragen abzufangen und die benutzerdefinierte Offline-Seite bereitzustellen, wenn der Benutzer offline ist.

### Offline-Betrieb

Um weiter zu gehen und ein App-ähnliches Erlebnis zu bieten, sollte Ihre PWA funktionieren, wenn der Benutzer offline ist. Dies bedeutet, dass der Benutzer weiterhin einige, vorzugsweise alle, Funktionen Ihrer App nutzen kann, selbst wenn er offline ist.

Betrachten Sie folgendes Szenario: Der Benutzer verfasst eine lange E-Mail und drückt auf „Senden“, ohne zu bemerken, dass er die Netzwerkverbindung verloren hat. Da Ihre App offline funktioniert, wird die E-Mail lokal gespeichert und automatisch gesendet, wenn das Gerät wieder online ist.

Erfahren Sie mehr über [Offline- und Hintergrundoperationen](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation).

## Deep Links unterstützen

Deep Links sind Hyperlinks, die auf spezielle Seiten innerhalb Ihrer App-Domain verweisen. Zum Beispiel könnte die Startseite Ihrer App unter `https://example.com/` verfügbar sein, aber Sie können auch auf eine spezifische Produktseite unter `https://example.com/products/123` verlinken.

Die Möglichkeit, auf jede Ressource durch eine eindeutige URL zu verweisen, ist eine der leistungsstärksten Funktionen des Webs. Da sie auf Webtechnologien basieren, können und sollten PWAs diese Funktion nutzen.

Indem Sie verschiedene Abschnitte Ihrer App über eindeutige URLs zugänglich machen, ermöglichen Sie es Benutzern, Inhalte innerhalb Ihrer App zu speichern, direkt darauf zu navigieren und weiterzugeben. Es ermöglicht auch Suchmaschinen, die Inhalte Ihrer App zu indexieren und über Websuchen auffindbar zu machen.

## Schnell machen

Benutzer haben unterschiedliche Erwartungen an installierte Apps im Vergleich zu Webseiten. Benutzer erwarten, dass Webseiten Zeit zum Laden und zur Navigation benötigen, insbesondere bei einer schlechten Netzwerkverbindung. Sie erwarten jedoch, dass installierte Apps immer schnell und reaktionsfähig sind.

Die Geschwindigkeit, mit der Ihre App ladezeitkritische Funktionen ausführt, spielt eine entscheidende Rolle bei der Benutzerbindung und -erhaltung. Je länger Ihre App zum Reagieren braucht, desto mehr Benutzer werden sie verlassen.

Es gibt Tools, APIs und Best Practices, die helfen, die Leistung zu messen und zu verbessern. Um mehr zu erfahren, siehe [Web-Performance](/de/docs/Web/Performance).

## Barrierefreiheit gewährleisten

Barrierefreiheit ist entscheidend, um sicherzustellen, dass jeder Ihre App nutzen kann, unabhängig von den Fähigkeiten des Einzelnen oder dem verwendeten Zugang zum Gerät. Barrierefreiheit stellt sicher, dass so viele Menschen wie möglich Ihre App nutzen können. Außerdem ist Barrierefreiheit gesetzlich vorgeschrieben. Darüber hinaus führt Barrierefreiheit oft zu einem besseren Benutzererlebnis für alle, nicht nur für Menschen mit dauerhaften oder vorübergehenden Behinderungen.

Erfahren Sie, wie Sie Ihre App barrierefrei machen können, in [Barrierefreiheit](/de/docs/Web/Accessibility).

## Ein App-ähnliches Erlebnis bieten

### In das Betriebssystem integrieren

Benutzer erwarten, dass installierte PWAs sich wie jede installierte plattformspezifische App verhalten. Um das App-ähnliche Erlebnis zu bieten, das Benutzer erwarten, integrieren Sie Ihre App in irgendeiner Weise in das Betriebssystem. Zum Beispiel:

- Verwenden Sie die [Notifications API](/de/docs/Web/API/Notifications_API), um Benachrichtigungen an das Gerät des Benutzers zu senden.
- Verarbeiten Sie Dateien mit dem [`file_handlers`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/file_handlers) Web-App-Manifestmitglied.
- [Zeigen Sie Abzeichen](/de/docs/Web/Progressive_web_apps/How_to/Display_badge_on_app_icon) auf dem App-Symbol an.
- Ermöglichen Sie [Datenaustausch zwischen Apps](/de/docs/Web/Progressive_web_apps/How_to/Share_data_between_apps).

Viele der [Mitglieder des Web-App-Manifests](/de/docs/Web/Progressive_web_apps/Manifest#members) können verwendet werden, um die Anzeige Ihrer App auf dem Gerät des Benutzers anzupassen und tiefer im Betriebssystem zu integrieren.

### App-Aussehen und -Gefühl

Benutzer installieren Apps, um ein fokussierteres Erlebnis zu erhalten als das, was sie von Webseiten erwarten, und um Aufgaben effizienter zu erledigen. Sie erwarten, dass Apps übersichtlicher sind, weniger Unordnung haben und sich auf die wichtigsten Aufgaben konzentrieren.

Stellen Sie sicher, dass Ihre PWA ein App-ähnliches Erlebnis bietet, indem Sie die folgenden Richtlinien beachten:

- Verwenden Sie einen [Standalone-Anzeigemodus](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app), um Ihrer App ein eigenes dediziertes Fenster zu geben.
- [Definieren Sie Ihr App-Symbol](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons).
- Erkennen Sie das bevorzugte Design des Benutzers mit dem {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} Media-Feature und passen Sie das Design Ihrer App entsprechend an.
- [Passen Sie das Design und die Hintergrundfarben Ihrer App an](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors), um eine anspruchsvollere Erfahrung zu bieten, die sich mehr wie eine plattformspezifische App anfühlt.
- Räumen Sie den Inhalt auf und konzentrieren Sie sich auf die wichtigsten Aufgaben, die Ihre App den Benutzern ermöglichen. Dies könnte bedeuten, große Kopf- und Fußzeilen zu entfernen, die traditionell auf Webseiten vorhanden sind, und sie stattdessen durch ein Menü-Metapher zu ersetzen.
- Verwenden Sie die `system-ui` {{cssxref("font-family")}}, um Ihre Inhalte plattformnaher wirken zu lassen und schneller zu laden, ohne dass die Benutzer eine benutzerdefinierte Schriftart herunterladen müssen.

## Siehe auch

- [What makes a good Progressive Web App](https://web.dev/articles/pwa-checklist) auf web.dev (2022).
- [Best practices for PWAs](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/best-practices) auf learn.microsoft.com (2023).
