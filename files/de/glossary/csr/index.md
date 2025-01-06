---
title: Client-side Rendering (CSR)
slug: Glossary/CSR
l10n:
  sourceCommit: d864c4fa589174ddd906bb679576d2265a20fad1
---

{{GlossarySidebar}}

**Client-side Rendering** (CSR) bezeichnet die Praxis, HTML-Inhalte mit JavaScript im Browser zu erzeugen. CSR steht im Gegensatz zum {{Glossary("SSR", "Server-side Rendering")}}, bei dem der Server die HTML-Inhalte generiert. Beide Techniken schließen sich nicht aus und können in derselben Anwendung gemeinsam verwendet werden.

Eine reine CSR-Anwendung könnte die folgenden HTML-Inhalte zurückgeben:

```html
<!doctype html>
<html>
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

Danach wird der tatsächliche Seiteninhalt von JavaScript in `bundle.js` mithilfe von [DOM-Manipulation](/de/docs/Web/API/Document_Object_Model) erzeugt.

Vorteile von CSR umfassen:

- Interaktivität: Jede Seitenaktualisierung, einschließlich Routenübergängen, erfordert kein vollständiges Neuladen der Seite. Dies lässt die App schneller und reaktionsfreudiger erscheinen.
- Leistung: Der Server muss nur die anfänglichen HTML-Inhalte und JavaScript-Ressourcen senden. Nachfolgende Seitenaktualisierungen können über eine API abgerufen werden, was schneller sein kann als das Abrufen einer vollständigen HTML-Seite und weniger Last auf dem Server verursacht.

Sowohl SSR als auch CSR haben ihre Leistungskompromisse, und eine Mischung aus SSR und CSR kann verwendet werden, um die Vorteile beider Techniken zu kombinieren. Beispielsweise kann der Server ein Seitenskelett mit leeren Platzhaltern generieren, und der Client kann zusätzliche Daten abrufen und die Seite bei Bedarf aktualisieren.

Beachten Sie, dass {{Glossary("SPA", "Single-Page-Anwendungen")}} nicht erfordern, dass die Website auf CSR basiert. Moderne Frameworks wie [React](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started), [Vue](/de/docs/Learn_web_development/Core/Frameworks_libraries/Vue_getting_started) und [Svelte](/de/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_getting_started) können verwendet werden, um SPAs mit SSR-Fähigkeiten zu erstellen.

## Siehe auch

- [Einführung in clientseitige Frameworks > Server-side Rendering](/de/docs/Learn_web_development/Core/Frameworks_libraries/Introduction#server-side_rendering)
- [Client-side Rendering](https://en.wikipedia.org/wiki/Client-side_rendering) auf Wikipedia
- {{Glossary("SSR", "Server-side Rendering")}}
- {{Glossary("SSG", "Static Site Generator")}}
- {{Glossary("SPA", "Single-Page Application")}}
