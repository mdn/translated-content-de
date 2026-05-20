---
title: Erstellen von Angular-Anwendungen und weitere Ressourcen
slug: Learn_web_development/Core/Frameworks_libraries/Angular_building
l10n:
  sourceCommit: f5be60d013af8bfa3ff9db9a12c3c72fc7eb3988
---

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Angular_filtering", "Learn_web_development/Core/Frameworks_libraries")}}

> [!NOTE]
> Die MDN-Artikel zu Angular werden nicht mehr gepflegt und werden in 3 Monaten (bis zum 20. August 2026) von der Website entfernt. Der Inhalt wird im [MDN Museum](https://github.com/mdn/museum) archiviert. Weitere Informationen finden Sie in [dieser Diskussion](https://github.com/orgs/mdn/discussions/827).

Dieser letzte Angular-Artikel behandelt, wie Sie eine für die Produktion bereite App erstellen, und bietet weitere Ressourcen, um Ihre Lernreise fortzusetzen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> sowie Kenntnisse über die
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
          >Eingabeaufforderung/Terminal</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erlernen, wie man Ihre Angular-App erstellt.</td>
    </tr>
  </tbody>
</table>

## Erstellen Ihrer fertigen Anwendung

Nachdem Sie nun Ihre Anwendung entwickelt haben, können Sie den Angular CLI-Befehl `build` ausführen.
Wenn Sie den `build`-Befehl in Ihrem `todo`-Verzeichnis ausführen, wird Ihre Anwendung in ein Ausgabeverzeichnis namens `dist/` kompiliert.

Führen Sie im `todo`-Verzeichnis den folgenden Befehl in der Eingabeaufforderung aus:

```bash
ng build -c production
```

Die CLI kompiliert die Anwendung und legt die Ausgabe in einem neuen `dist`-Verzeichnis ab.
Das `--configuration production`/`-c production` Flag mit `ng build` entfernt Dinge, die Sie für die Produktion nicht benötigen.

## Bereitstellen Ihrer Anwendung

Um Ihre Anwendung bereitzustellen, können Sie den Inhalt des `dist/my-project-name`-Ordners auf Ihren Webserver kopieren.
Da diese Dateien statisch sind, können Sie sie auf jedem Webserver hosten, der in der Lage ist, Dateien zu servieren, wie zum Beispiel:

- Node.js
- Java
- .NET

Sie können jeden Backend-Dienst wie [Firebase](https://firebase.google.com/docs/hosting), [Google Cloud](https://cloud.google.com/solutions/web-hosting) oder [App Engine](https://docs.cloud.google.com/appengine/docs/standard/hosting-a-static-website) verwenden.

### Lokal hosten

Zum Spaß können Sie die erstellte App auf Ihrem Rechner mit dem [`http-server`](https://www.npmjs.com/package/http-server)-Paket hosten, indem Sie folgenden Befehl ausführen, nachdem Sie einen Build ausgeführt haben:

```bash
npx http-server ./dist/todo/browser/ -o
```

Dieser Befehl serviert das Verzeichnis `dist/todo/browser` auf Port `8080`, sodass Sie `http://127.0.0.1:8080` in Ihrem Browser öffnen können, um die App laufen zu sehen.
Der HTTP-Server ermöglicht es Ihnen auch, von jedem anderen Gerät in Ihrem lokalen Netzwerk auf die App zuzugreifen, und diese Adresse wird in der Konsole unter der Adresse `127.0.0.1` aufgelistet.

## Was kommt als Nächstes

An diesem Punkt haben Sie eine grundlegende Anwendung erstellt, aber Ihre Angular-Reise hat gerade erst begonnen.
Sie können mehr lernen, indem Sie die Angular-Dokumentation erkunden, wie zum Beispiel:

- [Tutorials](https://angular.dev/tutorials): Ein ausführliches Tutorial, das Angular-Features wie die Verwendung von Diensten, die Navigation und das Abrufen von Daten von einem Server hervorhebt.
- Die Angular [Components](https://angular.dev/guide/components) Leitfäden: Eine Serie von Artikeln, die Themen wie Lebenszyklus, Komponenteninteraktion und View-Kapselung abdecken.
- Die [Forms](https://angular.dev/guide/forms) Leitfäden: Artikel, die Sie durch den Aufbau von reaktiven Formularen in Angular führen, die Eingabe validieren und dynamische Formulare erstellen.

## Zusammenfassung

Das ist es für den Moment. Wir hoffen, dass Sie Spaß mit Angular hatten!

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Angular_filtering", "Learn_web_development/Core/Frameworks_libraries")}}
