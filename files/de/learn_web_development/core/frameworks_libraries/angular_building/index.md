---
title: Erstellen von Angular-Anwendungen und weitere Ressourcen
slug: Learn_web_development/Core/Frameworks_libraries/Angular_building
l10n:
  sourceCommit: 995f8bcede5aa8ca40921b030deef7524ce9e1a3
---

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Angular_filtering", "Learn_web_development/Core/Frameworks_libraries")}}

Dieser letzte Angular-Artikel behandelt, wie man eine App erstellt, die bereit für die Produktion ist, und bietet weitere Ressourcen, damit Sie Ihre Lernreise fortsetzen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>,
        Kenntnisse über das
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
          >Terminal/Befehlszeile</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Lernen, wie Sie Ihre Angular-App erstellen.</td>
    </tr>
  </tbody>
</table>

## Erstellen Ihrer fertigen Anwendung

Nun, da Sie die Entwicklung Ihrer Anwendung abgeschlossen haben, können Sie den `build`-Befehl der Angular CLI ausführen.
Wenn Sie den `build`-Befehl in Ihrem `todo`-Verzeichnis ausführen, wird Ihre Anwendung in ein Ausgabeverzeichnis namens `dist/` kompiliert.

Führen Sie im `todo`-Verzeichnis den folgenden Befehl in der Befehlszeile aus:

```bash
ng build -c production
```

Die CLI kompiliert die Anwendung und legt die Ausgabe in einem neuen `dist`-Verzeichnis ab.
Das Flag `--configuration production`/`-c production` bei `ng build` entfernt Dinge, die Sie für die Produktion nicht benötigen.

## Bereitstellen Ihrer Anwendung

Um Ihre Anwendung bereitzustellen, können Sie den Inhalt des `dist/my-project-name`-Ordners auf Ihren Webserver kopieren.
Da diese Dateien statisch sind, können Sie sie auf jedem Webserver hosten, der Dateien bereitstellen kann, wie zum Beispiel:

- Node.js
- Java
- .NET

Sie können jedes Backend verwenden, wie [Firebase](https://firebase.google.com/docs/hosting), [Google Cloud](https://cloud.google.com/solutions/web-hosting) oder [App Engine](https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website).

### Lokal hosten

Zum Spaß können Sie die erstellte App auf Ihrem Rechner mit dem [`http-server`](https://www.npmjs.com/package/http-server)-Paket hosten, indem Sie nach dem Erstellen folgenden Befehl ausführen:

```bash
npx http-server ./dist/todo/browser/ -o
```

Dieser Befehl bedient das Verzeichnis `dist/todo/browser` auf Port `8080`, sodass Sie `http://127.0.0.1:8080` in Ihrem Browser öffnen können, um die App auszuführen.
Der HTTP-Server ermöglicht es Ihnen außerdem, von jedem anderen Gerät in Ihrem lokalen Netzwerk auf die App über die IP-Adresse Ihres Computers zuzugreifen, wobei diese Adresse in der Konsole unter der Adresse `127.0.0.1` angezeigt wird.

## Wie geht es weiter?

An diesem Punkt haben Sie eine grundlegende Anwendung erstellt, aber Ihre Angular-Reise beginnt gerade erst.
Sie können mehr erfahren, indem Sie die Angular-Dokumentation erkunden, wie zum Beispiel:

- [Tutorials](https://angular.dev/tutorials): Ein ausführliches Tutorial, das Angular-Funktionen hervorhebt, wie die Verwendung von Diensten, Navigation und das Abrufen von Daten von einem Server.
- Die Angular-[Komponenten](https://angular.dev/guide/components)-Leitfäden: Eine Reihe von Artikeln, die Themen wie Lebenszyklus, Komponenteninteraktion und Sichtenkapselung behandeln.
- Die [Formulare](https://angular.dev/guide/forms)-Leitfäden: Artikel, die Sie durch den Aufbau reaktiver Formulare in Angular führen, Eingaben validieren und dynamische Formulare erstellen.

## Zusammenfassung

Das war's für den Moment. Wir hoffen, Sie hatten Spaß mit Angular!

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Angular_filtering", "Learn_web_development/Core/Frameworks_libraries")}}
