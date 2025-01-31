---
title: Beste Praktiken für PWAs
slug: Web/Progressive_web_apps/Guides/Best_practices
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{PWASidebar}}

[Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs) können auf Geräten installiert und wie traditionelle Websites in Webbrowsern genutzt werden. Das bedeutet, dass sich PWAs an unterschiedliche Umgebungen und verschiedene Benutzererwartungen anpassen müssen.

Dieser Artikel bietet eine Liste von besten Praktiken, um sicherzustellen, dass Ihre PWA so gut wie möglich ist.

## Anpassen an alle Browser

Ihre PWA basiert auf Webtechnologien. Das bedeutet, dass PWAs neben der Installierbarkeit auf Geräten auch in Webbrowsern laufen können. Um die Kompatibilität sicherzustellen, ist es unerlässlich, [Ihre App](/de/docs/Learn_web_development/Extensions/Testing) über verschiedene Browser und Betriebssysteme hinweg zu testen.

Berücksichtigen Sie die Vielzahl der Browser, die Ihre Benutzer verwenden könnten, und bedienen Sie ein breites Spektrum potenzieller Benutzer. Die Verwendung von [Feature-Erkennung](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection) ermöglicht es Ihnen, ein nutzbares Erlebnis für das breiteste Publikum zu bieten.

Feature-Erkennung hilft auch bei der {{Glossary("Progressive_Enhancement", "Progressiven Verbesserung")}}, einer Designphilosophie, die es ermöglicht, ein großartiges Erlebnis für möglichst viele Benutzer zu bieten.

Mit der Progressiven Verbesserung konzentrieren Sie sich zuerst darauf, dass die Kernfunktionen Ihrer App universell mit der einfachsten Technologie funktionieren, und verbessern dann das Erlebnis für unterstützende Geräte.

Zum Beispiel bedeutet das Verarbeiten von Formularübermittlungen mit dem HTML-{{htmlelement("form")}}-Element, dass das Formular in allen Browsern funktioniert, einschließlich derjenigen, die kein JavaScript unterstützen. Sie können das Formular dann schrittweise verbessern, indem Sie clientseitige Validierung und JavaScript-basierte Einreichungsbearbeitung für ein besseres Erlebnis auf kompatiblen Geräten hinzufügen.

## Anpassen an alle Geräte

Ähnlich wie das Testen Ihrer App über verschiedene Browser hinweg wichtig ist, stellt das Testen auf verschiedenen Geräten sicher, dass Ihre App für das breiteste Publikum zugänglich ist.

[Responsives Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) ist entscheidend für PWAs, um sicherzustellen, dass der Inhalt auf jede Bildschirmgröße zugänglich ist. Benutzer sollten in der Lage sein, auf alle Funktionen und Inhalte zuzugreifen, unabhängig von der Bildschirmgröße ihres Geräts. Durch das Umordnen von Inhalten bei unterschiedlichen Ansichtsgrößen können Sie wichtige Daten und Aktionen priorisieren.

Stellen Sie sicher, dass Benutzer mit Ihrer Anwendung interagieren können, egal wie sie auf Ihre Inhalte zugreifen. Unterstützen Sie Tastatur und Maus sowie Touch- oder Stifteingabemethoden. Stellen Sie sicher, dass alle Funktionen Ihrer Anwendung über jede Eingabemethode zugänglich sind.

Verwenden Sie schließlich {{Glossary("Semantics#semantics_in_html", "semantische HTML-Elemente")}}, anstatt eigene Schaltflächen oder Formularelemente zu erstellen, da semantische HTML-Elemente alle Benutzereingabemethoden direkt unterstützen.

## Bieten Sie eine Offline-Erfahrung

Benutzer von installierten Apps erwarten, dass diese immer funktionieren, selbst bei einer langsamen oder unsicheren Netzwerkverbindung oder wenn ihr Gerät komplett offline ist.

### Benutzerdefinierte Offline-Seite

Zumindest sollte Ihre PWA eine benutzerdefinierte Offline-Seite bereitstellen, die den Benutzer darüber informiert, dass er offline ist, anstatt die generische Browserfehlerseite anzuzeigen. Eine benutzerdefinierte Offline-Seite bietet ein konsistenteres Erlebnis über Browser und Geräte hinweg und hält den Benutzer mit Ihrer App verbunden.

Sie können eine benutzerdefinierte Offline-Seite bereitstellen, indem Sie einen [Service Worker](/de/docs/Web/API/Service_Worker_API) verwenden, um Netzwerkabfragen abzufangen und mit der benutzerdefinierten Offline-Seite zu antworten, wenn der Benutzer offline ist.

### Offline-Betrieb

Um noch weiter zu gehen und ein app-ähnliches Erlebnis zu bieten, sollte Ihre PWA funktionieren, wenn der Benutzer offline ist. Das bedeutet, dass der Benutzer einige, und vorzugsweise alle, Funktionen Ihrer App weiter nutzen kann, auch wenn er offline ist.

Betrachten Sie folgendes Szenario: Der Benutzer verfasst eine lange E-Mail und drückt auf "Senden", ohne zu merken, dass er die Netzwerkanbindung verloren hat. Da Ihre App offline funktioniert, wird die E-Mail lokal gespeichert und automatisch gesendet, wenn das Gerät wieder online ist.

Erfahren Sie mehr über [Offline- und Hintergrundoperationen](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation).

## Unterstützen Sie Deep Links

Deep Links sind Hyperlinks, die auf bestimmte Seiten innerhalb der Domain Ihrer App verweisen. Zum Beispiel kann die Startseite Ihrer App unter `https://example.com/` verfügbar sein, aber Sie können auch auf eine bestimmte Produktseite unter `https://example.com/products/123` verlinken.

Die Möglichkeit, auf jede Ressource über eine eindeutige URL zu verweisen, ist eine der mächtigsten Funktionen des Webs. Da sie auf Webtechnologien basieren, können und sollten PWAs diese Funktion nutzen.

Wenn Sie verschiedene Bereiche Ihrer App über eindeutige URLs verfügbar machen, können Benutzer Inhalte in Ihrer App als Lesezeichen speichern, direkt darauf zugreifen und teilen. Außerdem können Suchmaschinen den Inhalt Ihrer App indizieren und durch Websuchen auffindbar machen.

## Machen Sie es schnell

Benutzer haben unterschiedliche Erwartungen an installierte Apps im Vergleich zu Websites. Sie erwarten, dass Websites Zeit zum Laden und Navigieren benötigen, insbesondere bei schlechten Netzwerkverbindungen. Sie erwarten jedoch, dass installierte Apps immer schnell und reaktionsschnell sind.

Die Geschwindigkeit, mit der Ihre App geladen wird und ihre Kernfunktionen ausführt, spielt eine Schlüsselrolle bei der Benutzerbindung und -treue. Je länger Ihre App für die Reaktion benötigt, desto mehr Benutzer werden sie aufgeben.

Es gibt Tools, APIs und bewährte Verfahren, die helfen, die Leistung zu messen und zu verbessern. Um mehr zu erfahren, siehe [Web-Performance](/de/docs/Web/Performance).

## Machen Sie es barrierefrei

Barrierefreiheit ist entscheidend, um sicherzustellen, dass jeder Ihre App nutzen kann, unabhängig von den individuellen Fähigkeiten oder dem Gerät, das sie verwenden, um auf Ihre App zuzugreifen. Barrierefreiheit stellt sicher, dass so viele Menschen wie möglich Ihre App nutzen können. Barrierefreiheit ist auch gesetzlich vorgeschrieben. Darüber hinaus führt Barrierefreiheit oft zu einer besseren Benutzererfahrung für alle, nicht nur für diejenigen mit dauerhaften oder vorübergehenden Behinderungen.

Erfahren Sie, wie Sie Ihre App zugänglich machen können, unter [Barrierefreiheit](/de/docs/Web/Accessibility).

## Bieten Sie ein app-ähnliches Erlebnis

### Integration mit dem Betriebssystem

Benutzer erwarten, dass installierte PWAs sich wie jede installierte plattformspezifische App verhalten. Um das von den Benutzern erwartete app-ähnliche Erlebnis zu bieten, integrieren Sie Ihre App auf irgendeine Weise mit dem Betriebssystem. Zum Beispiel:

- Verwenden Sie die [Benachrichtigungs-API](/de/docs/Web/API/Notifications_API), um Benachrichtigungen an das Gerät des Benutzers zu senden.
- Verarbeiten Sie Dateien mit dem `file_handlers`-Element im Web-App-Manifest.
- [Zeigen Sie Badges](/de/docs/Web/Progressive_web_apps/How_to/Display_badge_on_app_icon) auf dem App-Symbol an.
- Ermöglichen Sie das [Teilen von Daten zwischen Apps](/de/docs/Web/Progressive_web_apps/How_to/Share_data_between_apps).

Viele der [Web-App-Manifest-Elemente](/de/docs/Web/Manifest#members) können verwendet werden, um die Darstellung Ihrer App auf dem Gerät des Benutzers anzupassen und tiefer in das Betriebssystem zu integrieren.

### App-Look-and-Feel

Benutzer installieren Apps, um eine fokussiertere Erfahrung zu bekommen als das, was sie von Websites erhalten, und um Aufgaben effizienter zu erledigen. Sie erwarten, dass Apps schlanker sind, mit weniger Unordnung und sich auf die wichtigsten Aufgaben konzentrieren.

Stellen Sie sicher, dass Ihre PWA ein app-ähnliches Erlebnis bietet, indem Sie die folgenden Richtlinien berücksichtigen:

- Verwenden Sie einen [Standalone-Anzeigemodus](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app), um Ihrer App ein eigenes dediziertes Fenster zu geben.
- [Definieren Sie Ihr App-Symbol](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons).
- Erkennen Sie das bevorzugte Thema des Benutzers mit dem {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}-Media-Feature und passen Sie das Thema Ihrer App entsprechend an.
- [Passen Sie die Theme- und Hintergrundfarben Ihrer App an](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors), um ein besser poliertes Erlebnis zu bieten, das sich mehr wie eine plattformspezifische App anfühlt.
- Entrümpeln Sie den Inhalt und konzentrieren Sie sich auf die wichtigsten Aufgaben, die Ihre App die Benutzer erreichen lässt. Dies kann bedeuten, große Kopf- und Fußzeilen zu entfernen, die traditionell auf Websites zu finden sind, und stattdessen ein Menümetapher zu verwenden.
- Verwenden Sie `system-ui` als {{cssxref("font-family")}}, um Ihren Inhalt plattformnativer wirken zu lassen und schneller zu laden, ohne dass Benutzer eine benutzerdefinierte Schriftart herunterladen müssen.

## Siehe auch

- [What makes a good Progressive Web App](https://web.dev/articles/pwa-checklist) auf web.dev (2022).
- [Beste Praktiken für PWAs](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/best-practices) auf learn.microsoft.com (2023).
