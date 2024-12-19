---
title: Erstellen von Angular-Anwendungen und weitere Ressourcen
slug: Learn_web_development/Core/Frameworks_libraries/Angular_building
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Angular_filtering", "Learn_web_development/Core/Frameworks_libraries")}}

Dieser letzte Angular-Artikel behandelt, wie Sie eine für die Produktion bereite Anwendung erstellen und bietet weitere Ressourcen, um Ihre Lernreise fortzusetzen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
        Kenntnisse der
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
          >Terminal/Kommandozeile</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erlernen, wie Sie Ihre Angular-App erstellen.</td>
    </tr>
  </tbody>
</table>

## Erstellen Ihrer fertigen Anwendung

Nun, da Sie mit der Entwicklung Ihrer Anwendung fertig sind, können Sie den `build`-Befehl der Angular CLI ausführen.
Wenn Sie den `build`-Befehl in Ihrem `todo`-Verzeichnis ausführen, wird Ihre Anwendung in ein Ausgabeverzeichnis namens `dist/` kompiliert.

Führen Sie im `todo`-Verzeichnis den folgenden Befehl in der Kommandozeile aus:

```bash
ng build -c production
```

Die CLI kompiliert die Anwendung und legt das Ergebnis in einem neuen `dist`-Verzeichnis ab.
Das `--configuration production`/`-c production`-Flag mit `ng build` entfernt Dinge, die Sie für die Produktion nicht benötigen.

## Bereitstellen Ihrer Anwendung

Um Ihre Anwendung bereitzustellen, können Sie den Inhalt des Ordners `dist/my-project-name` auf Ihren Webserver kopieren.
Da diese Dateien statisch sind, können Sie sie auf jedem Webserver hosten, der Dateien bedienen kann, wie zum Beispiel:

- Node.js
- Java
- .NET

Sie können jedes Backend verwenden, wie [Firebase](https://firebase.google.com/docs/hosting), [Google Cloud](https://cloud.google.com/solutions/web-hosting) oder [App Engine](https://cloud.google.com/appengine/docs/standard/hosting-a-static-website).

### Lokal hosten

Zum Spaß können Sie die gebaute App auf Ihrem Rechner hosten, indem Sie das [`http-server`](https://www.npmjs.com/package/http-server) Paket verwenden und nach einem Build folgenden Befehl ausführen:

```bash
npx http-server ./dist/todo/browser/ -o
```

Dieser Befehl bedient das Verzeichnis `dist/todo/browser` auf Port `8080`, sodass Sie `http://127.0.0.1:8080` in Ihrem Browser öffnen können, um die App laufen zu sehen.
Der HTTP-Server ermöglicht Ihnen auch den Zugriff auf die App über die IP-Adresse Ihres Computers von jedem anderen Gerät in Ihrem lokalen Netzwerk, und diese Adresse wird in der Konsole unter der Adresse `127.0.0.1` angegeben.

## Wie geht es weiter

An diesem Punkt haben Sie eine einfache Anwendung erstellt, aber Ihre Angular-Reise hat gerade erst begonnen.
Sie können mehr erfahren, indem Sie die Angular-Dokumentation erkunden, wie zum Beispiel:

- [Tour of Heroes](https://angular.io/tutorial): Ein ausführliches Tutorial, das Angular-Funktionen hervorhebt, wie die Verwendung von Diensten, Navigation und Datenabruf von einem Server.
- Die Angular [Komponenten](https://angular.io/guide/component-overview) Leitfäden: Eine Reihe von Artikeln, die Themen wie Lebenszyklus, Komponenteninteraktion und View-Kapselung behandeln.
- Die [Formulare](https://angular.io/guide/forms-overview) Leitfäden: Artikel, die Sie durch das Erstellen reaktiver Formulare in Angular führen, Eingaben validieren und dynamische Formulare erstellen.

## Zusammenfassung

Das war's vorerst. Wir hoffen, Sie hatten Spaß mit Angular!

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Angular_filtering", "Learn_web_development/Core/Frameworks_libraries")}}
