---
title: Client-seitiges Rendering (CSR)
slug: Glossary/CSR
l10n:
  sourceCommit: 238b07dfeb8c347c590bd02a63140867525d511c
---

**Client-seitiges Rendering** (CSR) bezieht sich auf die Praxis, HTML-Inhalte mithilfe von JavaScript im Browser zu generieren. CSR steht im Gegensatz zum {{Glossary("SSR", "Server-seitigen Rendering")}}, bei dem der Server die HTML-Inhalte generiert. Beide Techniken schließen sich nicht gegenseitig aus und können in derselben Anwendung zusammen eingesetzt werden.

Eine reine CSR-Anwendung kann den folgenden HTML-Inhalt zurückgeben:

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

Der eigentliche Seiteninhalt wird dann von JavaScript in `bundle.js` unter Verwendung von [DOM-Manipulation](/de/docs/Web/API/Document_Object_Model) generiert.

Vorteile des CSR umfassen:

- Interaktivität: Jede Seitenaktualisierung, einschließlich Routenübergängen, erfordert keinen kompletten Seitenneuladevorgang. Dies lässt die App schneller und reaktionsschneller erscheinen.
- Leistung: Der Server muss nur die initialen HTML-Inhalte und JavaScript-Assets senden. Nachfolgende Seitenaktualisierungen können von einer API abgerufen werden, was schneller sein kann als das Abrufen einer vollständigen HTML-Seite und die Serverlast verringert.

Sowohl SSR als auch CSR haben ihre Leistungskompromisse, und eine Mischung aus SSR und CSR kann verwendet werden, um die Vorteile beider Techniken zu kombinieren. Zum Beispiel kann der Server ein Seiten-Skelett mit leeren Platzhaltern generieren, und der Client kann zusätzliche Daten abrufen und die Seite nach Bedarf aktualisieren.

Beachten Sie, dass {{Glossary("SPA", "Single-Page-Anwendungen")}} nicht erfordern, dass die Seite CSR ist. Moderne Frameworks, wie [React](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started), [Vue](https://vuejs.org/svelte), und [Svelte](https://svelte.dev/), können verwendet werden, um SPAs mit SSR-Fähigkeiten zu erstellen.

## Siehe auch

- [Einführung in Client-seitige Frameworks > Server-seitiges Rendering](/de/docs/Learn_web_development/Core/Frameworks_libraries/Introduction#server-side_rendering)
- [Client-seitiges Rendering](https://en.wikipedia.org/wiki/Client-side_rendering) auf Wikipedia
- {{Glossary("SSR", "Server-seitiges Rendering")}}
- {{Glossary("SSG", "Static Site Generator")}}
- {{Glossary("SPA", "Single-Page-Anwendung")}}
