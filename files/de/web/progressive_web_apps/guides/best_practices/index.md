---
title: Best Practices für PWAs
slug: Web/Progressive_web_apps/Guides/Best_practices
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{PWASidebar}}

[Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs) können auf Geräten installiert und als traditionelle Websites in Webbrowsern genutzt werden. Das bedeutet, dass PWAs in der Lage sein müssen, sich an unterschiedliche Umgebungen und an unterschiedliche Benutzererwartungen anzupassen.

Dieser Artikel bietet eine Liste von Best Practices, um Ihnen zu helfen, sicherzustellen, dass Ihre PWA so gut wie möglich ist.

## An alle Browser anpassen

Ihre PWA basiert auf Webtechnologien. Das bedeutet, dass PWAs neben der Installierbarkeit auf Geräten auch in Webbrowsern ausgeführt werden können. Um die Kompatibilität sicherzustellen, ist es essenziell, Ihre App [über verschiedene Browser und Betriebssysteme hinweg zu testen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing).

Berücksichtigen Sie die Vielzahl verschiedener Browser, die Ihre Benutzer verwenden könnten, und richten Sie sich an ein breites Spektrum potenzieller Nutzer. Mithilfe von [Feature Detection](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection) können Sie ein nutzbares Erlebnis für das größte Publikum bieten.

Feature Detection hilft auch bei {{Glossary("Progressive Enhancement")}}, einer Designphilosophie, die es ermöglicht, ein großartiges Erlebnis für möglichst viele Benutzer zu bieten.

Mit Progressive Enhancement konzentrieren Sie sich darauf, die Kernfunktionen Ihrer App zunächst universell mit der einfachsten Technologie zum Laufen zu bringen und dann das Erlebnis für unterstützende Geräte zu verbessern.

Ein Beispiel ist die Bearbeitung von Formularübermittlungen mit dem HTML-{{htmlelement("form")}}-Element, das dafür sorgt, dass das Formular in allen Browsern, einschließlich derjenigen, die kein JavaScript unterstützen, funktioniert. Anschließend können Sie das Formular schrittweise verbessern, indem Sie clientseitige Validierungen und JavaScript-basierte Übermittlungshandhabung hinzufügen, um ein besseres Erlebnis auf kompatiblen Geräten zu bieten.

## An alle Geräte anpassen

Ebenso wichtig wie das Testen Ihrer App über verschiedene Browser hinweg ist das Testen auf verschiedenen Geräten, um sicherzustellen, dass Ihre App für ein breites Publikum zugänglich ist.

[Responsive Design](/de/docs/Learn/CSS/CSS_layout/Responsive_Design) ist entscheidend für PWAs, um sicherzustellen, dass der Inhalt auf jeder Bildschirmgröße zugänglich ist. Benutzer sollten in der Lage sein, alle Funktionen und Inhalte unabhängig von der Bildschirmgröße ihres Geräts zu nutzen. Durch die Anordnung der Inhalte bei unterschiedlichen Viewport-Größen können Sie wichtige Daten und Aktionen priorisieren.

Stellen Sie sicher, dass Benutzer mit Ihrer Anwendung interagieren können, unabhängig davon, wie sie auf Ihre Inhalte zugreifen. Unterstützen Sie Tastatur und Maus sowie Eingabemethoden wie Touch oder Stylus. Stellen Sie sicher, dass alle Funktionen Ihrer Anwendung über jede Eingabemethode zugänglich sind.

Verwenden Sie abschließend [semantische HTML-Elemente](/de/docs/Glossary/Semantics#semantics_in_html) anstelle von eigenen Schaltflächen oder Formularelementen, da semantische HTML-Elemente von Haus aus alle Benutzereingabemethoden unterstützen.

## Offline-Erfahrung bieten

Benutzer von installierten Apps erwarten, dass sie immer funktionieren, selbst wenn sie mit einem langsamen oder unzuverlässigen Netzwerk verbunden sind oder wenn ihr Gerät vollständig offline ist.

### Benutzerdefinierte Offline-Seite

Ihre PWA sollte mindestens eine benutzerdefinierte Offline-Seite bereitstellen, die den Benutzer darüber informiert, dass er offline ist, anstatt die generische Browser-Fehlerseite anzuzeigen. Eine benutzerdefinierte Offline-Seite bietet ein konsistenteres Erlebnis über Browser und Geräte hinweg und hält den Benutzer mit Ihrer App engagiert.

Sie können eine benutzerdefinierte Offline-Seite bereitstellen, indem Sie einen [Service Worker](/de/docs/Web/API/Service_Worker_API) verwenden, um Netzwerk-Anfragen abzufangen und die benutzerdefinierte Offline-Seite zu antworten, wenn der Benutzer offline ist.

### Offline-Betrieb

Um noch weiter zu gehen und ein App-ähnliches Erlebnis zu bieten, sollte Ihre PWA funktionsfähig sein, wenn der Benutzer offline ist. Das bedeutet, dass der Benutzer in der Lage sein sollte, einige, vorzugsweise alle, Funktionen Ihrer App weiterhin zu nutzen, auch wenn er offline ist.

Betrachten Sie folgendes Szenario: Der Benutzer verfasst eine lange E-Mail und drückt "Senden", ohne zu bemerken, dass die Netzwerkverbindung verloren gegangen ist. Da Ihre App offline arbeitet, wird die E-Mail lokal gespeichert und automatisch gesendet, wenn das Gerät wieder online ist.

Erfahren Sie mehr über [Offline- und Hintergrundoperationen](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation).

## Unterstützung von Deep Links

Deep Links sind Hyperlinks, die auf bestimmte Seiten innerhalb der Domain Ihrer App verweisen. Beispielsweise könnte die Startseite Ihrer App unter `https://example.com/` verfügbar sein, aber Sie können auch auf eine spezifische Produktseite unter `https://example.com/products/123` verlinken.

Die Möglichkeit, auf jede Ressource mit einer eindeutigen URL zu verweisen, ist eine der mächtigsten Funktionen des Webs. Da sie auf Webtechnologien basieren, können und sollten PWAs diese Funktion nutzen.

Indem Sie unterschiedliche Abschnitte Ihrer App über eindeutige URLs verfügbar machen, können Benutzer Lesezeichen setzen, direkt darauf navigieren und spezifische Inhalte innerhalb Ihrer App teilen. Dies ermöglicht auch Suchmaschinen, die Inhalte Ihrer App zu indexieren und sie durch Websuchen auffindbar zu machen.

## Schnelligkeit sicherstellen

Benutzer haben unterschiedliche Erwartungen an installierte Apps im Vergleich zu Websites. Sie erwarten, dass Websites Zeit zum Laden und Navigieren benötigen, insbesondere bei schlechten Netzwerkverbindungen. Installierte Apps hingegen sollten immer schnell und reaktionsschnell sein.

Die Geschwindigkeit, mit der Ihre App lädt und ihre Kernfunktionen ausführt, spielt eine Schlüsselrolle bei der Benutzerbindung und -treue. Je länger Ihre App braucht, um zu reagieren, desto mehr Benutzer werden sie verlassen.

Es gibt Tools, APIs und Best Practices, die helfen, die Leistung zu messen und zu verbessern. Um mehr zu erfahren, siehe [Web-Performance](/de/docs/Web/Performance).

## Benutzerfreundlichkeit sicherstellen

Barrierefreiheit ist entscheidend, um sicherzustellen, dass jeder Ihre App nutzen kann, unabhängig von individuellen Fähigkeiten oder dem Gerät, das sie zur Nutzung Ihrer App verwenden. Barrierefreiheit sorgt dafür, dass so viele Menschen wie möglich Ihre App nutzen können. Sie ist auch gesetzlich vorgeschrieben. Darüber hinaus führt Barrierefreiheit oft zu einem besseren Benutzererlebnis für alle, nicht nur für diejenigen mit dauerhaften oder vorübergehenden Behinderungen.

Erfahren Sie, wie Sie Ihre App barrierefrei gestalten können, in [Barrierefreiheit](/de/docs/Web/Accessibility).

## App-ähnliches Erlebnis bieten

### In das Betriebssystem integrieren

Benutzer erwarten, dass installierte PWAs wie jede spezifische Plattform-App verhalten. Um das App-ähnliche Erlebnis zu bieten, das Benutzer erwarten, integrieren Sie Ihre App in das Betriebssystem. Zum Beispiel:

- Verwenden Sie die [Notifications API](/de/docs/Web/API/Notifications_API), um Benachrichtigungen an das Gerät des Benutzers zu senden.
- Handhaben Sie Dateien mit dem [`file_handlers`](/de/docs/Web/Manifest/file_handlers)-Mitglied des Web-App-Manifests.
- [Zeigen Sie Abzeichen](/de/docs/Web/Progressive_web_apps/How_to/Display_badge_on_app_icon) auf dem App-Icon an.
- Ermöglichen Sie [Datenaustausch zwischen Apps](/de/docs/Web/Progressive_web_apps/How_to/Share_data_between_apps).

Viele der [Mitglieder des Web-App-Manifests](/de/docs/Web/Manifest#members) können genutzt werden, um die Anzeige Ihrer App auf dem Gerät des Nutzers zu personalisieren und sich tiefer in das Betriebssystem zu integrieren.

### Look and Feel der App

Benutzer installieren Apps, um ein fokussierteres Erlebnis zu bekommen als bei Websites und um Aufgaben effizienter zu erledigen. Sie erwarten, dass Apps klarer sind, weniger Unordnung enthalten und sich auf die wichtigsten Aufgaben konzentrieren.

Stellen Sie sicher, dass Ihre PWA ein App-ähnliches Erlebnis bietet, indem Sie folgende Richtlinien beachten:

- Verwenden Sie einen [Standalone-Anzeigemodus](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app), um Ihrer App ein eigenes Fenster zu geben.
- [Definieren Sie Ihr App-Icon](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons).
- Erkennen Sie das bevorzugte Thema des Nutzers mit der {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} Media-Feature und passen Sie das Thema Ihrer App entsprechend an.
- [Passen Sie die Themen- und Hintergrundfarben Ihrer App an](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors), um ein polierteres Erlebnis zu bieten, das sich mehr wie eine plattformspezifische App anfühlt.
- Reduzieren Sie Unordnung und konzentrieren Sie sich auf die wichtigsten Aufgaben, die Ihre App den Nutzern ermöglicht. Dies könnte bedeuten, große Kopf- und Fußzeilen zu entfernen, die traditionell auf Websites zu finden sind, und stattdessen ein Menüsymbol zu verwenden.
- Nutzen Sie die `system-ui` {{cssxref("font-family")}}, um Ihre Inhalte plattformnäher wirken zu lassen und schneller zu laden, ohne dass Benutzer eine benutzerdefinierte Schriftart herunterladen müssen.

## Siehe auch

- [Was macht eine gute Progressive Web App aus](https://web.dev/articles/pwa-checklist) auf web.dev (2022).
- [Best Practices für PWAs](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/best-practices) auf learn.microsoft.com (2023).
