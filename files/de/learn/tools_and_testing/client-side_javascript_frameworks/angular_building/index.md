---
title: Building Angular applications and further resources
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{PreviousMenu("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Dieser abschließende Angular-Artikel behandelt, wie Sie eine für die Produktion bereite App erstellen und bietet Ihnen zusätzliche Ressourcen, um Ihre Lernreise fortzusetzen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a> Sprachen,
        Kenntnisse des
        <a
          href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
          >Terminals/Befehlszeile</a
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

Nachdem Sie die Entwicklung Ihrer Anwendung abgeschlossen haben, können Sie den Angular CLI-Befehl `build` ausführen.
Wenn Sie den Befehl `build` in Ihrem `todo`-Verzeichnis ausführen, wird Ihre Anwendung in ein Ausgabeverzeichnis namens `dist/` kompiliert.

Im `todo`-Verzeichnis führen Sie den folgenden Befehl in der Befehlszeile aus:

```bash
ng build -c production
```

Die CLI kompiliert die Anwendung und legt die Ausgabe in ein neues `dist` Verzeichnis.
Das `--configuration production`/`-c production` Flag mit `ng build` entfernt Elemente, die Sie für die Produktion nicht benötigen.

## Bereitstellung Ihrer Anwendung

Um Ihre Anwendung bereitzustellen, können Sie den Inhalt des Ordners `dist/my-project-name` auf Ihren Webserver kopieren.
Da diese Dateien statisch sind, können Sie sie auf jedem Webserver hosten, der Dateien bereitstellen kann, wie zum Beispiel:

- Node.js
- Java
- .NET

Sie können jedes Backend verwenden, wie [Firebase](https://firebase.google.com/docs/hosting), [Google Cloud](https://cloud.google.com/solutions/web-hosting) oder [App Engine](https://cloud.google.com/appengine/docs/standard/hosting-a-static-website).

### Lokal hosten

Zum Spaß können Sie die erstellte App auf Ihrem Computer mit dem [`http-server`](https://www.npmjs.com/package/http-server) Paket hosten, indem Sie den folgenden Befehl nach einem Build ausführen:

```bash
npx http-server ./dist/todo/browser/ -o
```

Dieser Befehl stellt das `dist/todo/browser` Verzeichnis auf Port `8080` bereit, sodass Sie `http://127.0.0.1:8080` in Ihrem Browser öffnen können, um die laufende App zu sehen.
Der HTTP-Server ermöglicht es Ihnen auch, von jedem anderen Gerät in Ihrem lokalen Netzwerk auf die App zuzugreifen, und diese Adresse wird im Konsolenfenster unter der Adresse `127.0.0.1` aufgelistet.

## Was kommt als nächstes

An diesem Punkt haben Sie eine grundlegende Anwendung erstellt, aber Ihre Angular-Reise hat gerade erst begonnen.
Sie können mehr lernen, indem Sie die Angular-Dokumentation erkunden, wie zum Beispiel:

- [Tour of Heroes](https://angular.io/tutorial): Ein umfassendes Tutorial, das Angular-Funktionen hervorhebt, wie die Verwendung von Diensten, Navigation und das Abrufen von Daten von einem Server.
- Die Angular [Komponenten](https://angular.io/guide/component-overview) Leitfäden: Eine Reihe von Artikeln, die Themen wie Lebenszyklus, Komponenteninteraktion und Ansichtskapselung behandeln.
- Die [Formulare](https://angular.io/guide/forms-overview) Leitfäden: Artikel, die Sie durch den Aufbau reaktiver Formulare in Angular führen, Eingaben validieren und dynamische Formulare erstellen.

## Zusammenfassung

Das war's fürs Erste. Wir hoffen, Sie hatten Spaß mit Angular!

{{PreviousMenu("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
