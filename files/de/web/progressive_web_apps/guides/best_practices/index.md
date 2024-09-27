---
title: Beste Praktiken für PWAs
slug: Web/Progressive_web_apps/Guides/Best_practices
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{PWASidebar}}

[Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs) können auf Geräten installiert werden und wie herkömmliche Websites in Webbrowsern verwendet werden. Dies bedeutet, dass PWAs in der Lage sein müssen, sich an unterschiedliche Umgebungen und Benutzenerwartungen anzupassen.

Dieser Artikel bietet eine Liste von Best Practices, um sicherzustellen, dass Ihre PWA so gut wie möglich ist.

## An alle Browser anpassen

Ihre PWA basiert auf Webtechnologien. Das bedeutet, dass PWAs nicht nur auf Geräten installierbar sind, sondern auch in Webbrowsern laufen können. Um die Kompatibilität sicherzustellen, ist es wichtig, Ihre App über verschiedene Browser und Betriebssysteme hinweg zu [testen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing).

Berücksichtigen Sie die Vielzahl von Browsern, die Ihre Benutzer verwenden können, und bedienen Sie ein breites Spektrum von potenziellen Benutzern. Durch den Einsatz von [Feature-Erkennung](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection) können Sie ein nutzbares Erlebnis für die breiteste Zielgruppe liefern.

Die Feature-Erkennung hilft auch bei der [Progressive Enhancement](/de/docs/Glossary/Progressive_Enhancement), einer Designphilosophie, die es ermöglicht, das bestmögliche Erlebnis für so viele Benutzer wie möglich zu bieten.

Mit Progressive Enhancement konzentrieren Sie sich darauf, die Kernfunktionen Ihrer App universell zu machen, indem Sie einfachste Technologien verwenden und dann das Erlebnis auf unterstützenden Geräten verbessern.

Zum Beispiel bedeutet das Bearbeiten von Formularübermittlungen mit dem HTML-Element {{htmlelement("form")}}, dass das Formular in allen Browsern funktioniert, auch in denen, die kein JavaScript unterstützen. Sie können das Formular dann schrittweise verbessern, indem Sie clientseitige Validierung und JavaScript-basierte Übermittlungssteuerung für ein besseres Erlebnis auf kompatiblen Geräten hinzufügen.

## An alle Geräte anpassen

Ähnlich wie das Testen Ihrer App über verschiedene Browser hinweg wichtig ist, gewährleistet das Testen über verschiedene Geräte, dass Ihre App für das breiteste Publikum zugänglich ist.

[Responsive Design](/de/docs/Learn/CSS/CSS_layout/Responsive_Design) ist entscheidend für PWAs, um sicherzustellen, dass die Inhalte auf jeder Bildschirmgröße zugänglich sind. Benutzer sollten alle Funktionen und Inhalte unabhängig von der Bildschirmgröße ihres Geräts nutzen können. Durch das Umorganisieren von Inhalten bei unterschiedlichen Ansichtsgrößen können Sie wichtige Daten und Aktionen priorisieren.

Stellen Sie sicher, dass Benutzer mit Ihrer Anwendung interagieren können, egal wie sie auf Ihre Inhalte zugreifen. Unterstützen Sie Tastatur und Maus sowie Touch- oder Stifteingabemethoden. Stellen Sie sicher, dass alle Funktionen Ihrer Anwendung über jede Eingabemethode zugänglich sind.

Verwenden Sie abschließend [semantische HTML-Elemente](/de/docs/Glossary/Semantics#semantics_in_html) anstelle eigener benutzerdefinierter Schaltflächen oder Formularelemente, da semantische HTML-Elemente alle Benutzereingabemethoden von vornherein unterstützen.

## Biete ein Offline-Erlebnis

Benutzer installierter Apps erwarten, dass sie immer funktionieren, selbst wenn sie mit einem langsamen oder unzuverlässigen Netzwerk verbunden sind oder wenn ihr Gerät vollständig offline ist.

### Individuelle Offline-Seite

Mindestens sollte Ihre PWA eine individuelle Offline-Seite bereitstellen, die den Benutzer informiert, dass er offline ist, anstatt die generische Fehlerseite des Browsers anzuzeigen. Eine individuelle Offline-Seite bietet ein konsistenteres Erlebnis über Browser und Geräte hinweg und hält den Benutzer mit Ihrer App beschäftigt.

Sie können eine individuelle Offline-Seite bereitstellen, indem Sie einen [Service Worker](/de/docs/Web/API/Service_Worker_API) verwenden, um Netzwerkanfragen abzufangen und mit der individuellen Offline-Seite zu antworten, wenn der Benutzer offline ist.

### Offline-Betrieb

Um weiterzugehen und ein anwendungsähnliches Erlebnis zu bieten, sollte Ihre PWA auch offline funktionieren. Das bedeutet, dass der Benutzer einige, und vorzugsweise alle, Funktionen Ihrer App nutzen kann, auch wenn er offline ist.

Betrachten Sie folgendes Szenario: Der Benutzer verfasst eine lange E-Mail und drückt auf "Senden", ohne zu bemerken, dass er keine Netzverbindung mehr hat. Da Ihre App offline funktioniert, wird die E-Mail lokal gespeichert und automatisch gesendet, wenn das Gerät wieder online ist.

Erfahren Sie mehr über [Offline- und Hintergrundoperationen](/de/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation).

## Unterstützung von Deep Links

Deep Links sind Hyperlinks, die auf bestimmte Seiten innerhalb der Domain Ihrer App verweisen. Zum Beispiel könnte die Startseite Ihrer App unter `https://example.com/` verfügbar sein, aber Sie können auch auf eine spezifische Produktseite unter `https://example.com/products/123` verlinken.

Die Fähigkeit, auf jede Ressource mittels einer eindeutigen URL zu verweisen, ist eine der leistungsstärksten Funktionen des Webs. Da PWAs auf Webtechnologien basieren, können und sollten sie diese Funktion nutzen.

Indem Sie verschiedene Bereiche Ihrer App über eindeutige URLs verfügbar machen, ermöglichen Sie Benutzern, bestimmte Inhalte innerhalb Ihrer App zu speichern, direkt darauf zuzugreifen und zu teilen. Außerdem können Suchmaschinen den Inhalt Ihrer App indexieren und über Websuchen auffindbar machen.

## Schnelligkeit

Benutzer haben unterschiedliche Erwartungen an installierte Apps als an Websites. Sie erwarten, dass Websites Zeit zum Laden und Navigieren benötigen, besonders bei schlechten Netzwerkverbindungen. Installierte Apps hingegen sollen stets schnell und reaktionsschnell sein.

Die Geschwindigkeit, mit der Ihre App lädt und ihre Kernfunktionen ausführt, spielt eine entscheidende Rolle für die Benutzerbindung und Nutzerzufriedenheit. Je länger es dauert, bis Ihre App reagiert, desto mehr Benutzer werden sie verlassen.

Es gibt Tools, APIs und Best Practices, die helfen, die Leistung zu messen und zu verbessern. Erfahren Sie mehr auf [Web-Performance](/de/docs/Web/Performance).

## Barrierefreiheit

Barrierefreiheit ist entscheidend, um sicherzustellen, dass jeder Ihre App nutzen kann, unabhängig von den individuellen Fähigkeiten oder den Geräten, die die Nutzer verwenden, um auf Ihre App zuzugreifen. Barrierefreiheit stellt sicher, dass so viele Menschen wie möglich Ihre App nutzen können. Barrierefreiheit ist auch gesetzlich vorgeschrieben. Darüber hinaus führt Barrierefreiheit häufig zu einer besseren Benutzererfahrung für alle, nicht nur für Menschen mit dauerhaften oder temporären Behinderungen.

Erfahren Sie, wie Sie Ihre App barrierefrei gestalten können, auf [Barrierefreiheit](/de/docs/Web/Accessibility).

## Anwendungsähnliches Erlebnis bieten

### Integration mit dem Betriebssystem

Benutzer erwarten, dass installierte PWAs sich wie jede andere plattformspezifische installierte App verhalten. Um das anwendungsähnliche Erlebnis zu bieten, das Benutzer erwarten, integrieren Sie Ihre App in irgendeiner Weise in das Betriebssystem. Zum Beispiel:

- Verwenden Sie die [Benachrichtigungs-API](/de/docs/Web/API/Notifications_API), um Benachrichtigungen an das Gerät des Benutzers zu senden.
- Verarbeiten Sie Dateien mit dem Web App Manifest Element [`file_handlers`](/de/docs/Web/Manifest/file_handlers).
- [Zeigen Sie Abzeichen](/de/docs/Web/Progressive_web_apps/How_to/Display_badge_on_app_icon) auf dem App-Icon an.
- Ermöglichen Sie den [Datenaustausch zwischen Apps](/de/docs/Web/Progressive_web_apps/How_to/Share_data_between_apps).

Viele der [Web App Manifest Elemente](/de/docs/Web/Manifest#members) können verwendet werden, um die Darstellung Ihrer App auf dem Gerät des Benutzers anzupassen und tiefer in das Betriebssystem zu integrieren.

### Aussehen und Gefühl der App

Benutzer installieren Apps, um ein fokussierteres Erlebnis zu erhalten, als sie es von Websites erwarten, und um Aufgaben effizienter zu erledigen. Sie erwarten, dass Apps schlanker sind, mit weniger Unordnung, und den Fokus auf die wichtigsten Aufgaben legen.

Stellen Sie sicher, dass Ihre PWA ein anwendungsähnliches Erlebnis bietet, indem Sie die folgenden Richtlinien beachten:

- Verwenden Sie einen [Stand-alone-Anzeigemodus](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app), um Ihrer App ein eigenes Fenster zu geben.
- [Definieren Sie Ihr App-Icon](/de/docs/Web/Progressive_web_apps/How_to/Define_app_icons).
- Erkennen Sie das bevorzugte Thema des Benutzers mit dem {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} Media-Feature und passen Sie das Thema Ihrer App entsprechend an.
- [Passen Sie die Farben Ihres App-Themas und des Hintergrunds an](/de/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors), um ein besseres Erlebnis zu bieten, das sich mehr wie eine plattformspezifische App anfühlt.
- Entwirren Sie die Inhalte und konzentrieren Sie sich auf die wichtigsten Aufgaben, die Ihre App den Benutzern ermöglicht. Dies kann bedeuten, große Kopf- und Fußzeilen, die traditionell auf Websites zu finden sind, zu entfernen und stattdessen ein Menü-Metapher zu verwenden.
- Verwenden Sie die `system-ui` {{cssxref("font-family")}}, um Ihre Inhalte mehr plattformnatürlich erscheinen zu lassen und schneller zu laden, ohne dass Benutzer eine benutzerdefinierte Schrift herunterladen müssen.

## Siehe auch

- [Was macht eine gute Progressive Web App aus](https://web.dev/articles/pwa-checklist) auf web.dev (2022).
- [Best Practices für PWAs](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/best-practices) auf learn.microsoft.com (2023).
