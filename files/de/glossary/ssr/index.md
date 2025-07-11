---
title: Server-seitiges Rendering (SSR)
slug: Glossary/SSR
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Server-seitiges Rendering** (SSR) bezieht sich auf die Praxis, HTML-Inhalte auf dem Server zu generieren und an den Client zu senden. SSR steht im Gegensatz zum {{Glossary("CSR", "Client-seitigen Rendering")}}, bei dem der Client die HTML-Inhalte mit JavaScript generiert. Beide Techniken schließen sich nicht gegenseitig aus und können in derselben Anwendung zusammen verwendet werden.

Eine {{Glossary("SSG", "statische Website")}} kann als SSR betrachtet werden (und kann mit SSR-Infrastruktur generiert werden), jedoch gibt es feine Unterschiede. Der Inhalt einer statischen Website wird zur Build-Zeit generiert, nicht zur Anforderungszeit. Statische Websites müssen oft überhaupt nicht auf einem Server bereitgestellt werden und können von einem {{Glossary("CDN", "CDN")}} ausgeliefert werden.

Die Unterscheidung zwischen SSR/CSR ist bedeutungsvoller für Websites mit dynamischen Inhalten, beispielsweise sich live aktualisierenden oder benutzerspezifischen Inhalten. In diesen Fällen generiert der Server für jede Anfrage die HTML-Inhalte dynamisch, da es unrealistisch ist, jede mögliche Seite im Voraus zu generieren. Die HTML-Datei enthält nahezu vollständige Seiteninhalte, und alle JavaScript-Dateien sind nur dazu da, um Interaktivität zu ermöglichen.

Vorteile des SSR umfassen:

- Barrierefreiheit: Die Seite ist (etwas) ohne JavaScript nutzbar, zum Beispiel wenn das Internet langsam ist, der Benutzer JavaScript deaktiviert hat oder der Browser alt ist und JavaScript nicht ausführen kann. Allerdings funktionieren dann keine interaktiven Elemente oder clientseitige Logik.
- Crawler-Freundlichkeit: Suchmaschinen, soziale Mediencrawler und andere Bots können die Inhalte leicht lesen, ohne JavaScript ausführen zu müssen. Beachten Sie, dass große Suchmaschinen in der Lage sind, JavaScript auszuführen, sodass rein CSR-basierte Websites dennoch indexiert werden können, aber soziale Mediencrawler können das gewöhnlich nicht.
- Leistung: Der Server kann im Voraus wissen, welche Inhalte benötigt werden, und kann alle erforderlichen Daten auf einmal abrufen, im Gegensatz zu CSR, wo der Client oft nur bei der Initialseite weitere Abhängigkeiten erkennt, was einen Wasserfall von Anfragen verursacht.

Sowohl SSR als auch CSR haben ihre Leistungsabstriche, und eine Mischung aus SSR und CSR kann verwendet werden, um die Vorteile beider Techniken zu kombinieren. Zum Beispiel kann der Server ein Seiten-Skelett mit leeren Platzhaltern generieren, und der Client kann zusätzliche Daten abrufen und die Seite bei Bedarf aktualisieren.

## Siehe auch

- [Einführung in clientseitige Frameworks > server-seitiges Rendering](/de/docs/Learn_web_development/Core/Frameworks_libraries/Introduction#server-side_rendering)
- [Server-seitiges Scripting](https://en.wikipedia.org/wiki/Server-side_scripting) auf Wikipedia
- {{Glossary("CSR", "Client-seitiges Rendering")}}
- {{Glossary("SSG", "Statische Site-Generator")}}
- {{Glossary("SPA", "Single-Page-Anwendung")}}
