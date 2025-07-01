---
title: Client-seitiges Rendering (CSR)
slug: Glossary/CSR
l10n:
  sourceCommit: 693106d7bc9aa28f22a3f234455f5496efd728c4
---

{{GlossarySidebar}}

**Client-seitiges Rendering** (CSR) bezieht sich auf die Praxis, HTML-Inhalte mithilfe von JavaScript im Browser zu generieren. CSR steht im Gegensatz zum {{Glossary("SSR", "Server-seitigen Rendering")}}, bei dem der Server die HTML-Inhalte generiert. Beide Techniken schließen sich nicht gegenseitig aus und können in derselben Anwendung zusammen verwendet werden.

Eine reine CSR-Anwendung könnte die folgenden HTML-Inhalte zurückgeben:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <title>My App</title>
    <script src="bundle.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <noscript>
      <p>This app requires JavaScript to run.</p>
    </noscript>
  </body>
</html>
```

Dann werden die tatsächlichen Seiteninhalte durch JavaScript in `bundle.js` mithilfe von [DOM-Manipulation](/de/docs/Web/API/Document_Object_Model) generiert.

Vorteile von CSR umfassen:

- Interaktivität: Jede Aktualisierung der Seite, einschließlich Routenübergang, erfordert keine vollständige Seite Neuladung. Dies lässt die Anwendung schneller und reaktionsfähiger erscheinen.
- Leistung: Der Server muss nur die anfänglichen HTML-Inhalte und JavaScript-Ressourcen senden. Nachfolgende Seitenaktualisierungen können von einer API abgerufen werden, was schneller sein kann als das Abrufen einer vollständigen HTML-Seite und die Serverlast reduziert.

Sowohl SSR als auch CSR haben ihre Leistungsvor- und -nachteile, und eine Mischung aus SSR und CSR kann verwendet werden, um die Vorteile beider Techniken zu kombinieren. Zum Beispiel kann der Server ein Seitenskelett mit leeren Platzhaltern generieren, und der Client kann zusätzliche Daten abrufen und die Seite bei Bedarf aktualisieren.

Beachten Sie, dass {{Glossary("SPA", "Single-Page-Anwendungen")}} nicht zwingend CSR sein müssen. Moderne Frameworks wie [React](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started), [Vue](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_getting_started) und [Svelte](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_getting_started) können verwendet werden, um SPAs mit SSR-Fähigkeiten zu erstellen.

## Siehe auch

- [Einführung in Client-seitige Frameworks > Server-seitiges Rendering](/de/docs/Learn_web_development/Core/Frameworks_libraries/Introduction#server-side_rendering)
- [Client-seitiges Rendering](https://en.wikipedia.org/wiki/Client-side_rendering) auf Wikipedia
- {{Glossary("SSR", "Server-seitiges Rendering")}}
- {{Glossary("SSG", "Statischer Site-Generator")}}
- {{Glossary("SPA", "Single-Page-Anwendung")}}
