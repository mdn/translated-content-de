---
title: Erstellen von Angular-Anwendungen und weitere Ressourcen
slug: Learn_web_development/Core/Frameworks_libraries/Angular_building
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Angular_filtering", "Learn_web_development/Core/Frameworks_libraries")}}

Dieser letzte Angular-Artikel behandelt, wie Sie eine App für die Produktion bereitstellen und bietet weitere Ressourcen, um Ihre Lernreise fortzusetzen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
        Kenntnisse im Umgang mit dem
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
          >Terminal/Befehlszeile</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Zu lernen, wie Sie Ihre Angular-App erstellen.</td>
    </tr>
  </tbody>
</table>

## Erstellen Ihrer fertigen Anwendung

Nachdem Sie die Entwicklung Ihrer Anwendung abgeschlossen haben, können Sie den `build`-Befehl der Angular CLI ausführen.
Wenn Sie den `build`-Befehl in Ihrem `todo`-Verzeichnis ausführen, wird Ihre Anwendung in ein Ausgabeverzeichnis mit dem Namen `dist/` kompiliert.

Führen Sie im `todo`-Verzeichnis den folgenden Befehl in der Befehlszeile aus:

```bash
ng build -c production
```

Die CLI kompiliert die Anwendung und platziert die Ausgabe in einem neuen `dist`-Verzeichnis.
Der Flag `--configuration production`/`-c production` mit `ng build` beseitigt Dinge, die Sie für die Produktion nicht benötigen.

## Bereitstellen Ihrer Anwendung

Um Ihre Anwendung bereitzustellen, können Sie den Inhalt des Ordners `dist/my-project-name` auf Ihren Webserver kopieren.
Da diese Dateien statisch sind, können Sie sie auf jedem Webserver hosten, der Dateien bereitstellen kann, wie zum Beispiel:

- Node.js
- Java
- .NET

Sie können jedes Backend verwenden, wie [Firebase](https://firebase.google.com/docs/hosting), [Google Cloud](https://cloud.google.com/solutions/web-hosting) oder [App Engine](https://cloud.google.com/appengine/docs/standard/hosting-a-static-website).

### Lokal hosten

Zum Spaß können Sie die erstellte App auf Ihrem Rechner hosten, indem Sie das Paket [`http-server`](https://www.npmjs.com/package/http-server) verwenden und nach dem Ausführen eines Builds folgenden Befehl ausführen:

```bash
npx http-server ./dist/todo/browser/ -o
```

Dieser Befehl dient dem `dist/todo/browser`-Verzeichnis auf Port `8080`, sodass Sie `http://127.0.0.1:8080` in Ihrem Browser öffnen können, um die App in Betrieb zu sehen.
Der HTTP-Server ermöglicht es Ihnen auch, von jedem anderen Gerät in Ihrem lokalen Netzwerk aus auf die App zuzugreifen, indem die IP-Adresse Ihres Computers verwendet wird. Diese Adresse wird unter der Adresse `127.0.0.1` in der Konsole aufgeführt.

## Was kommt als Nächstes

An diesem Punkt haben Sie eine grundlegende Anwendung erstellt, aber Ihre Angular-Reise hat gerade erst begonnen.
Sie können mehr lernen, indem Sie die Angular-Dokumentation erkunden, wie zum Beispiel:

- [Tutorials](https://angular.dev/tutorials): Ein ausführliches Tutorial, das die Funktionen von Angular hervorhebt, wie z.B. die Verwendung von Services, Navigation und das Abrufen von Daten von einem Server.
- Die Angular [Components](https://angular.dev/guide/components) Leitfäden: Eine Reihe von Artikeln, die Themen wie Lebenszyklus, Komponenteninteraktion und View-Kapselung behandeln.
- Die [Forms](https://angular.dev/guide/forms) Leitfäden: Artikel, die Sie durch die Erstellung reaktiver Formulare, die Validierung von Eingaben und den Aufbau dynamischer Formulare in Angular führen.

## Zusammenfassung

Das war's für den Moment. Wir hoffen, Sie hatten Spaß mit Angular!

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Angular_filtering", "Learn_web_development/Core/Frameworks_libraries")}}
