---
title: Erstellen von Angular-Anwendungen und weitere Ressourcen
slug: Learn_web_development/Core/Frameworks_libraries/Angular_building
l10n:
  sourceCommit: c86c36ca478c7da904c22531e91fdcc2d2a6c690
---

{{LearnSidebar}}

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Angular_filtering", "Learn_web_development/Core/Frameworks_libraries")}}

Dieser abschließende Angular-Artikel behandelt, wie Sie eine App bereit für die Produktion erstellen und bietet weitere Ressourcen, um Ihre Lernreise fortzusetzen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden Sprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
        sowie Kenntnisse über den Umgang mit der
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
          >Terminal-/Befehlszeile</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erlernen, wie Sie Ihre Angular-App erstellen können.</td>
    </tr>
  </tbody>
</table>

## Erstellen Ihrer fertigen Anwendung

Da Sie nun mit der Entwicklung Ihrer Anwendung fertig sind, können Sie den Befehl `build` der Angular CLI ausführen.
Wenn Sie den Befehl `build` in Ihrem `todo`-Verzeichnis ausführen, kompiliert Ihre Anwendung in ein Ausgabeverzeichnis namens `dist/`.

Führen Sie im `todo`-Verzeichnis den folgenden Befehl in der Befehlszeile aus:

```bash
ng build -c production
```

Die CLI kompiliert die Anwendung und legt die Ausgabe in einem neuen `dist`-Verzeichnis ab.
Das Flag `--configuration production`/`-c production` bei `ng build` entfernt alles, was Sie für die Produktion nicht benötigen.

## Bereitstellen Ihrer Anwendung

Um Ihre Anwendung bereitzustellen, können Sie den Inhalt des `dist/my-project-name`-Ordners auf Ihren Webserver kopieren.
Da diese Dateien statisch sind, können Sie sie auf jedem Webserver hosten, der Dateien bereitstellen kann, wie zum Beispiel:

- Node.js
- Java
- .NET

Sie können jedes Backend verwenden, wie [Firebase](https://firebase.google.com/docs/hosting), [Google Cloud](https://cloud.google.com/solutions/web-hosting) oder [App Engine](https://cloud.google.com/appengine/docs/standard/hosting-a-static-website).

### Lokal hosten

Zum Spaß können Sie die erstellte App auf Ihrem Rechner mit dem [`http-server`](https://www.npmjs.com/package/http-server) Paket hosten, indem Sie nach einem Build den folgenden Befehl ausführen:

```bash
npx http-server ./dist/todo/browser/ -o
```

Dieser Befehl bedient das `dist/todo/browser`-Verzeichnis auf Port `8080`, sodass Sie `http://127.0.0.1:8080` in Ihrem Browser öffnen können, um die laufende App zu sehen.
Der HTTP-Server ermöglicht es Ihnen auch, auf die App über die IP-Adresse Ihres Computers von jedem anderen Gerät in Ihrem lokalen Netzwerk zuzugreifen, und diese Adresse wird in der Konsole unter der Adresse `127.0.0.1` aufgelistet.

## Was kommt als Nächstes

Zu diesem Zeitpunkt haben Sie eine grundlegende Anwendung erstellt, aber Ihre Angular-Reise hat gerade erst begonnen.
Sie können mehr erfahren, indem Sie die Angular-Dokumentation erkunden, wie zum Beispiel:

- [Tutorials](https://angular.dev/tutorials): Ein ausführliches Tutorial, das Angular-Funktionen hervorhebt, wie die Verwendung von Diensten, Navigation und das Abrufen von Daten von einem Server.
- Die Angular [Komponenten](https://angular.dev/guide/components) Leitfäden: Eine Artikelserie, die Themen wie Lebenszyklus, Komponenten-Interaktion und View-Kapselung behandelt.
- Die [Formulare](https://angular.dev/guide/forms) Leitfäden: Artikel, die Ihnen beim Erstellen reaktiver Formulare in Angular, der Validierung von Eingaben und dem Erstellen dynamischer Formulare helfen.

## Zusammenfassung

Das war's für jetzt. Wir hoffen, Sie hatten Spaß mit Angular!

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Angular_filtering", "Learn_web_development/Core/Frameworks_libraries")}}
