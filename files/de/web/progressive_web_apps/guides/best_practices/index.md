---
title: Best Practices für PWAs
slug: Web/Progressive_web_apps/Guides/Best_practices
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{PWASidebar}}

[Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs) können auf Geräten installiert werden und als traditionelle Websites in Webbrowsern verwendet werden. Das bedeutet, dass PWAs in der Lage sein müssen, sich an unterschiedliche Umgebungen und Erwartungen der Benutzer anzupassen.

Dieser Artikel bietet eine Liste von Best Practices, um sicherzustellen, dass Ihre PWA so gut ist, wie sie sein kann.

## An alle Browser anpassen

Ihre PWA basiert auf Webtechnologien. Das bedeutet, dass PWAs zusätzlich zur Installierbarkeit auf Geräten auch in Webbrowsern laufen können. Um die Kompatibilität sicherzustellen, ist es wichtig, Ihre App in verschiedenen Browsern und Betriebssystemen zu [testen](/de/docs/Learn_web_development/Extensions/Testing).

Berücksichtigen Sie die vielfältige Auswahl an Browsern, die Ihre Nutzer verwenden könnten, und richten Sie sich an ein breites Spektrum potenzieller Nutzer. Die Verwendung von [Feature Detection](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection) ermöglicht es Ihnen, ein nutzerfreundliches Erlebnis für die breiteste Zielgruppe zu bieten.

Feature Detection unterstützt auch die {{Glossary("Progressive_Enhancement", "Progressive Enhancement")}}, eine Designphilosophie, die es ermöglicht, möglichst vielen Nutzern ein großartiges Erlebnis zu bieten.

Mit Progressive Enhancement konzentrieren Sie sich darauf, die Kernfunktionen Ihrer App universell einsetzbar zu machen, indem Sie die einfachste Technologie verwenden, und dann das Erlebnis für unterstützende Geräte verbessern.

Beispielsweise bedeutet die Formularverarbeitung mit dem HTML-Element {{htmlelement("form")}}, dass das Formular in allen Browsern funktioniert, auch in solchen, die JavaScript nicht unterstützen. Anschließend können Sie das Formular durch die Hinzufügung von clientseitiger Validierung und JavaScript-basierter Formularverarbeitung für ein besseres Erlebnis auf kompatiblen Geräten schrittweise verbessern.

## An alle Geräte anpassen

Ähnlich wie das Testen Ihrer App in verschiedenen Browsern wichtig ist, ist das Testen auf verschiedenen Geräten entscheidend, um sicherzustellen, dass Ihre App für die breiteste Zielgruppe zugänglich ist.

[Responsives Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) ist entscheidend für PWAs, um sicherzustellen, dass der Inhalt auf jeder Bildschirmgröße zugänglich ist. Benutzer sollten in der Lage sein, alle Funktionen und Inhalte unabhängig von der Bildschirmgröße ihres Geräts zu nutzen. Durch die Neuordnung von Inhalten bei unterschiedlichen Viewport-Größen können Sie wichtige Daten und Aktionen priorisieren.

Stellen Sie sicher, dass Benutzer mit Ihrer Anwendung interagieren können, egal wie sie auf Ihre Inhalte zugreifen. Unterstützen Sie Tastatur und Maus sowie Touch- oder Stifteingabemethoden. Stellen Sie sicher, dass alle Funktionen Ihrer Anwendung über jede Eingabemethode zugänglich sind.

Verwenden Sie schließlich {{Glossary("Semantics#semantics_in_html", "semantische HTML-Elemente")}} anstelle eigener Schaltflächen oder Formularelementen, da semantische HTML-Elemente alle Benutzereingabemethoden direkt unterstützen.

## Eine Offline-Erfahrung bieten

Benutzer von installierten Apps erwarten, dass sie immer funktionieren, auch bei langsamen oder unzuverlässigen Netzwerken oder wenn ihr Gerät vollständig offline ist.

### Benutzerdefinierte Offline-Seite

Zumindest sollte Ihre PWA eine benutzerdefinierte Offline-Seite bereitstellen, die den Benutzer darüber informiert, dass er offline ist, anstatt die generische Fehlermeldung des Browsers anzuzeigen. Eine benutzerdefinierte Offline-Seite bietet ein konsistenteres Erlebnis über Browser und Geräte hinweg und hält den Benutzer mit Ihrer App verbunden.

Sie können eine benutzerdefinierte Offline-Seite bereitstellen, indem Sie einen [Service Worker](/de/docs/Web/API/Service_Worker_API) verwenden, um Netzwerkanforderungen abzufangen und die benutzerdefinierte Offline-Seite bereitzustellen, wenn der Benutzer offline ist.

### Offline-Betrieb

Um weiterzugehen und ein app-ähnliches Erlebnis zu bieten, sollte Ihre PWA auch dann funktionieren, wenn der Benutzer offline ist. Das bedeutet, dass der Benutzer weiterhin einige, vorzugsweise alle, Funktionen Ihrer App nutzen kann, selbst wenn er offline ist.

Betrachten Sie das folgende Szenario: Der Benutzer schreibt eine lange E-Mail und drückt auf „Senden“, ohne zu merken, dass er die Netzwerkverbindung verloren hat. Da Ihre App offline funktioniert, wird die E-Mail lokal gespeichert und automatisch gesendet, wenn das Gerät wieder online ist.

Erfahren Sie mehr über [Offline- und Hintergrundoperationen](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation).

## Unterstützung für Deep Links

Deep Links sind Hyperlinks, die auf bestimmte Seiten innerhalb der Domain Ihrer App verweisen. Zum Beispiel könnte die Startseite Ihrer App unter `https://example.com/` verfügbar sein, aber Sie können auch zu einer bestimmten Produktseite unter `https://example.com/products/123` verlinken.

Die Fähigkeit, auf jede Ressource durch eine eindeutige URL zu verweisen, ist eine der mächtigsten Eigenschaften des Webs. Da sie auf Webtechnologien basieren, können und sollten PWAs diese Funktion nutzen.

Indem Sie verschiedene Abschnitte Ihrer App über eindeutige URLs zugänglich machen, ermöglichen Sie es Benutzern, Inhalte innerhalb Ihrer App zu speichern, direkt zu navigieren und zu teilen. Es ermöglicht auch Suchmaschinen, den Inhalt Ihrer App zu indexieren und über Websuchen auffindbar zu machen.

## Schnell machen

Benutzer haben unterschiedliche Erwartungen an installierte Apps im Vergleich zu Websites. Benutzer erwarten, dass Websites Zeit zum Laden und Navigieren benötigen, insbesondere bei schlechten Netzwerkverbindungen. Sie erwarten jedoch, dass installierte Apps immer schnell und reaktionsschnell sind.

Die Geschwindigkeit, mit der Ihre App lädt und ihre Kernfunktionen ausführt, spielt eine Schlüsselrolle bei der Benutzerbindung und -erhaltung. Je länger es dauert, bis Ihre App reagiert, desto mehr Benutzer werden sie verlassen.

Es gibt Tools, APIs und Best Practices, die helfen, die Leistung zu messen und zu verbessern. Um mehr zu erfahren, siehe [Web-Performance](/de/docs/Web/Performance).

## Zugänglich machen

Zugänglichkeit ist entscheidend, um sicherzustellen, dass jeder Ihre App nutzen kann, unabhängig von den Fähigkeiten des Einzelnen oder dem Gerät, mit dem sie auf Ihre App zugreifen. Zugänglichkeit stellt sicher, dass so viele Menschen wie möglich Ihre App nutzen können. Zugänglichkeit ist auch gesetzlich vorgeschrieben. Darüber hinaus führt Zugänglichkeit oft zu einer besseren Benutzererfahrung für alle, nicht nur für diejenigen mit dauerhaften oder vorübergehenden Behinderungen.

Erfahren Sie, wie Sie Ihre App zugänglich machen können in [Zugänglichkeit](/de/docs/Web/Accessibility).

## Ein app-ähnliches Erlebnis bieten

### In das Betriebssystem integrieren

Benutzer erwarten, dass installierte PWAs sich wie jede plattformspezifisch installierte App verhalten. Um das app-ähnliche Erlebnis zu bieten, das Benutzer erwarten, integrieren Sie Ihre App in irgendeiner Weise in das Betriebssystem. Zum Beispiel:

- Verwenden Sie die [Notifications API](/de/docs/Web/API/Notifications_API), um Benachrichtigungen an das Gerät des Benutzers zu senden.
- Verarbeiten Sie Dateien mit dem [`file_handlers`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/file_handlers) web app manifest member.
- [Zeigen Sie Abzeichen an](/de/docs/Web/Progressive_web_apps/How_to/Display_badge_on_app_icon) auf dem App-Symbol.
- Ermöglichen Sie [Datenaustausch zwischen Apps](/de/docs/Web/Progressive_web_apps/How_to/Share_data_between_apps).

Viele der [web app manifest members](/de/docs/Web/Progressive_web_apps/Manifest#members) können verwendet werden, um anzupassen, wie Ihre App auf dem Gerät des Benutzers angezeigt wird und um tiefer in das Betriebssystem zu integrieren.

### App-Optik und -Gefühl

Benutzer installieren Apps, um ein fokussierteres Erlebnis zu erhalten als das, was sie von Websites bekommen, und um Aufgaben effizienter zu erledigen. Sie erwarten, dass Apps schlanker sind, mit weniger Unordnung, und sich auf die wichtigsten Aufgaben konzentrieren.

Stellen Sie sicher, dass Ihre PWA ein app-artiges Erlebnis bietet, indem Sie die folgenden Richtlinien berücksichtigen:

- Verwenden Sie einen [Standalone-Anzeigemodus](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app), um Ihrer App ein eigenes Fenster zu geben.
- [Definieren Sie Ihr App-Symbol](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons).
- Erkennen Sie das bevorzugte Thema des Benutzers mit dem {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} Media Feature und passen Sie das Thema Ihrer App entsprechend an.
- [Passen Sie die Farben Ihrer App an](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors), um ein polierteres Erlebnis zu bieten, das sich mehr wie eine plattformspezifische App anfühlt.
- Entschlacken Sie die Inhalte und konzentrieren Sie sich auf die wichtigsten Aufgaben, die Ihre App den Benutzern ermöglicht. Dies kann bedeuten, große Kopf- und Fußzeilen zu entfernen, die traditionell auf Websites zu finden sind, und sie stattdessen durch eine Menümetapher zu ersetzen.
- Verwenden Sie `system-ui` für die {{cssxref("font-family")}}, um Ihre Inhalte plattformspezifischer wirken zu lassen und schneller zu laden, ohne dass Benutzer eine benutzerdefinierte Schriftart herunterladen müssen.

## Siehe auch

- [What makes a good Progressive Web App](https://web.dev/articles/pwa-checklist) auf web.dev (2022).
- [Best practices for PWAs](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/best-practices) auf learn.microsoft.com (2023).
