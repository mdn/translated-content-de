---
title: Best Practices für PWAs
slug: Web/Progressive_web_apps/Guides/Best_practices
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{PWASidebar}}

[Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs) können auf Geräten installiert und wie herkömmliche Webseiten in Webbrowsern genutzt werden. Das bedeutet, dass PWAs in der Lage sein müssen, sich an unterschiedliche Umgebungen und Benutzererwartungen anzupassen.

Dieser Artikel bietet eine Liste von Best Practices, um sicherzustellen, dass Ihre PWA so gut wie möglich ist.

## Anpassung an alle Browser

Ihre PWA basiert auf Webtechnologien. Das bedeutet, dass PWAs neben der Installierbarkeit auf Geräten auch in Webbrowsern ausgeführt werden können. Um die Kompatibilität sicherzustellen, ist es wichtig, Ihre App über verschiedene Browser und Betriebssysteme hinweg zu [testen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing).

Berücksichtigen Sie die vielfältige Palette von Browsern, die Ihre Benutzer verwenden könnten, und bedienen Sie ein breites Spektrum potenzieller Benutzer. Durch [Feature-Erkennung](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection) können Sie ein nutzbares Erlebnis für das breiteste Publikum bereitstellen.

Die Feature-Erkennung hilft auch bei der {{Glossary("Progressive_Enhancement", "Progressiven Verbesserung")}}, einer Designphilosophie, die es ermöglicht, möglichst vielen Benutzern ein großartiges Erlebnis zu bieten.

Bei der Progressiven Verbesserung konzentrieren Sie sich zunächst darauf, die Kernfunktionen Ihrer App mit der einfachsten Technologie universell funktionsfähig zu machen, um das Erlebnis dann für unterstützende Geräte zu verbessern.

Beispielsweise bedeutet das Bearbeiten von Formularübermittlungen mit dem HTML-Element `<form>`, dass das Formular in allen Browsern funktioniert, auch in denen, die JavaScript nicht unterstützen. Danach können Sie das Formular durch clientseitige Validierung und JavaScript-basierte Übermittlungsverarbeitung schrittweise verbessern, um auf kompatiblen Geräten ein besseres Erlebnis zu bieten.

## Anpassung an alle Geräte

Ähnlich wie das Testen Ihrer App in verschiedenen Browsern wichtig ist, stellt das Testen auf verschiedenen Geräten sicher, dass Ihre App für das breiteste Publikum zugänglich ist.

[Responsives Design](/de/docs/Learn/CSS/CSS_layout/Responsive_Design) ist entscheidend für PWAs, damit der Inhalt auf jeder Bildschirmgröße zugänglich ist. Benutzer sollten alle Funktionen und Inhalte unabhängig von der Bildschirmgröße ihres Geräts erreichen können. Durch das Anordnen von Inhalten in unterschiedlichen Ansichtsbereichgrößen können Sie wichtige Daten und Aktionen priorisieren.

Stellen Sie sicher, dass Benutzer unabhängig von der Art und Weise, wie sie auf Ihre Inhalte zugreifen, mit Ihrer Anwendung interagieren können. Unterstützen Sie Tastatur und Maus sowie Eingabemethoden wie Touch oder Eingabestift. Achten Sie darauf, dass alle Funktionen Ihrer Anwendung mit jeder Eingabemethode zugänglich sind.

Verwenden Sie abschließend {{Glossary("Semantics#semantics_in_html", "semantische HTML-Elemente")}} anstelle eigener Schaltflächen oder Formularelemente, da semantische HTML-Elemente alle Benutzereingabemethoden direkt unterstützen.

## Offline-Erlebnis bieten

Benutzer von installierten Apps erwarten, dass diese immer funktionieren; auch bei Verbindung zu einem langsamen oder unzuverlässigen Netzwerk oder wenn ihr Gerät völlig offline ist.

### Benutzerdefinierte Offline-Seite

Mindestens sollte Ihre PWA eine benutzerdefinierte Offline-Seite bereitstellen, die den Benutzer darüber informiert, dass er offline ist, anstatt die generische Browser-Fehlerseite zu zeigen. Eine benutzerdefinierte Offline-Seite bietet ein konsistenteres Erlebnis über Browser und Geräte hinweg und hält den Benutzer mit Ihrer App in Kontakt.

Sie können eine benutzerdefinierte Offline-Seite bereitstellen, indem Sie einen [Service Worker](/de/docs/Web/API/Service_Worker_API) verwenden, um Netzwerkanforderungen abzufangen und bei Offline-Zustand mit der benutzerdefinierten Offline-Seite zu antworten.

### Offline-Betrieb

Um noch weiterzugehen und ein app-ähnliches Erlebnis zu bieten, sollte Ihre PWA auch dann funktionieren, wenn der Benutzer offline ist. Das bedeutet, dass der Benutzer einige, vorzugsweise alle, Funktionen Ihrer App nutzen kann, auch wenn er offline ist.

Betrachten Sie folgendes Szenario: Der Benutzer schreibt eine lange E-Mail und drückt auf "Senden", ohne zu bemerken, dass er die Netzwerkverbindung verloren hat. Da Ihre App offline funktioniert, wird die E-Mail lokal gespeichert und automatisch gesendet, wenn das Gerät wieder online ist.

Erfahren Sie mehr über [Offline- und Hintergrundoperationen](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation).

## Unterstützung von Deep Links

Deep Links sind Hyperlinks, die auf bestimmte Seiten innerhalb der Domain Ihrer App verweisen. Zum Beispiel könnte die Startseite Ihrer App unter `https://example.com/` erreichbar sein, aber Sie können auch zu einer bestimmten Produktseite unter `https://example.com/products/123` verlinken.

Die Möglichkeit, auf jede Ressource unter einer eindeutigen URL zu verweisen, ist eine der mächtigsten Funktionen des Webs. Da sie auf Webtechnologien basieren, können und sollten PWAs diese Funktion nutzen.

Durch das Bereitstellen verschiedener Abschnitte Ihrer App über eindeutige URLs können Benutzer Inhalte innerhalb Ihrer App speichern, direkt darauf zugreifen und teilen. Es ermöglicht auch Suchmaschinen, die Inhalte Ihrer App zu indexieren und durch Websuchen auffindbar zu machen.

## Schnell machen

Benutzer haben andere Erwartungen an installierte Apps als an Webseiten. Sie erwarten, dass Webseiten Zeit zum Laden und Navigieren benötigen, besonders bei schlechten Netzwerkverbindungen. Installierte Apps hingegen sollen stets schnell und reaktionsschnell sein.

Die Geschwindigkeit, mit der Ihre App lädt und ihre Kernfunktionen ausführt, spielt eine Schlüsselrolle bei der Benutzerbindung und -bindung. Je länger Ihre App braucht, um zu reagieren, desto mehr Benutzer werden sie verlassen.

Es gibt Tools, APIs und Best Practices, die helfen, die Leistung zu messen und zu verbessern. Weitere Informationen finden Sie unter [Web-Performance](/de/docs/Web/Performance).

## Barrierefreiheit sicherstellen

Barrierefreiheit ist entscheidend, um sicherzustellen, dass jeder Ihre App nutzen kann, unabhängig von den Fähigkeiten des Einzelnen oder dem Gerät, das er verwendet, um auf Ihre App zuzugreifen. Barrierefreiheit stellt sicher, dass so viele Menschen wie möglich Ihre App nutzen können. Barrierefreiheit ist auch gesetzlich vorgeschrieben. Darüber hinaus führt Barrierefreiheit oft zu einem besseren Benutzererlebnis für alle Menschen, nicht nur für diejenigen mit dauerhaften oder vorübergehenden Behinderungen.

Erfahren Sie, wie Sie Ihre App barrierefrei gestalten, unter [Barrierefreiheit](/de/docs/Web/Accessibility).

## Ein app-ähnliches Erlebnis bieten

### Integration mit dem Betriebssystem

Benutzer erwarten, dass installierte PWAs wie jede installierte plattformspezifische App agieren. Um das app-ähnliche Erlebnis zu bieten, das Benutzer erwarten, integrieren Sie Ihre App auf irgendeine Weise in das Betriebssystem. Zum Beispiel:

- Verwenden Sie die [Notifications API](/de/docs/Web/API/Notifications_API), um Benachrichtigungen an das Gerät des Benutzers zu senden.
- Bearbeiten Sie Dateien mit dem Web-App-Manifest-Element [`file_handlers`](/de/docs/Web/Manifest/file_handlers).
- Zeigen Sie [Abzeichen](/de/docs/Web/Progressive_web_apps/How_to/Display_badge_on_app_icon) auf dem App-Symbol an.
- Ermöglichen Sie das [Teilen von Daten zwischen Apps](/de/docs/Web/Progressive_web_apps/How_to/Share_data_between_apps).

Viele der [Web-App-Manifest-Mitglieder](/de/docs/Web/Manifest#members) können verwendet werden, um die Art und Weise anzupassen, wie Ihre App auf dem Gerät des Benutzers angezeigt wird und sich tiefer in das Betriebssystem einfügt.

### App-Look und -Feel

Benutzer installieren Apps, um ein fokussierteres Erlebnis zu erhalten als das, was sie von Webseiten bekommen, und um Aufgaben effizienter zu erledigen. Sie erwarten, dass Apps aufgeräumter sind, mit weniger Unordnung, und sich auf die wichtigsten Aufgaben konzentrieren.

Stellen Sie sicher, dass Ihre PWA ein app-ähnliches Erlebnis bietet, indem Sie die folgenden Richtlinien beachten:

- Verwenden Sie einen [Standalone-Displaymodus](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app), um Ihrer App ein eigenes Fenster zu geben.
- [Definieren Sie Ihr App-Symbol](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons).
- Erkennen Sie das bevorzugte Thema des Benutzers mit der Medieneigenschaft {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} und passen Sie das Thema Ihrer App entsprechend an.
- [Passen Sie die Themen- und Hintergrundfarben Ihrer App an](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors), um ein polierteres Erlebnis zu bieten, das sich mehr wie eine plattformspezifische App anfühlt.
- Entwirren Sie Inhalte und konzentrieren Sie sich auf die wichtigsten Aufgaben, die Ihre App den Benutzern ermöglicht. Dies kann bedeuten, große Header und Footer zu entfernen, die traditionell auf Webseiten zu finden sind, und diese durch ein Menü-Metapher zu ersetzen.
- Verwenden Sie die `system-ui` {{cssxref("font-family")}}, um Ihre Inhalte plattform-nativer zu gestalten und schneller zu laden, ohne dass Benutzer eine benutzerdefinierte Schriftart herunterladen müssen.

## Siehe auch

- [Was macht eine gute Progressive Web App aus](https://web.dev/articles/pwa-checklist) auf web.dev (2022).
- [Best Practices für PWAs](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/best-practices) auf learn.microsoft.com (2023).
