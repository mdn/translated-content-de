---
title: Aufbau von Angular-Anwendungen und weitere Ressourcen
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{PreviousMenu("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Dieser letzte Angular-Artikel behandelt, wie eine App für die Produktion erstellt wird und bietet weitere Ressourcen, um Ihre Lernreise fortzusetzen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a>,
        sowie Kenntnisse über das
        <a
          href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
          >Terminal/Command Line</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Wie Sie Ihre Angular-App bauen.</td>
    </tr>
  </tbody>
</table>

## Ihre fertige Anwendung bauen

Jetzt, da Sie Ihre Anwendung fertig entwickelt haben, können Sie den Angular CLI `build`-Befehl ausführen.
Wenn Sie den `build`-Befehl in Ihrem `todo`-Verzeichnis ausführen, wird Ihre Anwendung in ein Ausgabeverzeichnis namens `dist/` kompiliert.

Führen Sie im `todo`-Verzeichnis den folgenden Befehl in der Kommandozeile aus:

```bash
ng build -c production
```

Die CLI kompiliert die Anwendung und legt die Ausgabe in einem neuen `dist`-Verzeichnis ab.
Das Flag `--configuration production`/`-c production` mit `ng build` entfernt Dinge, die Sie für die Produktion nicht benötigen.

## Ihre Anwendung bereitstellen

Um Ihre Anwendung bereitzustellen, können Sie den Inhalt des Ordners `dist/my-project-name` auf Ihren Webserver kopieren.
Da diese Dateien statisch sind, können Sie sie auf jedem Webserver hosten, der Dateien bereitstellen kann, wie zum Beispiel:

- Node.js
- Java
- .NET

Sie können jeden beliebigen Backend-Dienst verwenden, wie [Firebase](https://firebase.google.com/docs/hosting), [Google Cloud](https://cloud.google.com/solutions/web-hosting) oder [App Engine](https://cloud.google.com/appengine/docs/standard/hosting-a-static-website).

### Lokal hosten

Zum Spaß können Sie die erstellte App auf Ihrem Rechner mit dem [`http-server`](https://www.npmjs.com/package/http-server) Paket hosten, indem Sie nach dem Build den folgenden Befehl ausführen:

```bash
npx http-server ./dist/todo/browser/ -o
```

Dieser Befehl stellt das Verzeichnis `dist/todo/browser` auf Port `8080` bereit, sodass Sie `http://127.0.0.1:8080` in Ihrem Browser öffnen können, um die App zu sehen.
Der HTTP-Server ermöglicht es Ihnen auch, die App über die IP-Adresse Ihres Computers von jedem anderen Gerät in Ihrem lokalen Netzwerk aus zu erreichen; diese Adresse wird in der Konsole unter der `127.0.0.1`-Adresse angezeigt.

## Was kommt als Nächstes

An diesem Punkt haben Sie eine grundlegende Anwendung erstellt, aber Ihre Angular-Reise beginnt gerade erst.
Sie können mehr lernen, indem Sie die Angular-Dokumentation erkunden, wie zum Beispiel:

- [Tour of Heroes](https://angular.io/tutorial): Ein umfassendes Tutorial, das Angular-Funktionen hervorhebt, wie die Verwendung von Diensten, Navigation und das Abrufen von Daten von einem Server.
- Die Angular [Components](https://angular.io/guide/component-overview) Leitfäden: Eine Reihe von Artikeln, die Themen wie Lebenszyklus, Komponenteninteraktion und View-Kapselung behandeln.
- Die [Forms](https://angular.io/guide/forms-overview) Leitfäden: Artikel, die Sie durch den Aufbau reaktiver Formulare in Angular führen, Eingaben validieren und dynamische Formulare erstellen.

## Zusammenfassung

Das war's für jetzt. Wir hoffen, Sie hatten Spaß mit Angular!

{{PreviousMenu("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
