---
title: JavaScript innerhalb einer Webseite verwenden
slug: Learn/HTML/Howto/Use_JavaScript_within_a_webpage
l10n:
  sourceCommit: 76c1e86a6bf1fd58aa6b0e627842a3c1161add28
---

{{QuickLinksWithSubpages("/de/docs/Learn/HTML/Howto")}}

Bringen Sie Ihre Webseiten auf die nächste Stufe, indem Sie JavaScript nutzen. Lernen Sie in diesem Artikel, wie Sie JavaScript direkt aus Ihren HTML-Dokumenten auslösen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten mit der Erstellung eines
        <a href="/de/docs/Learn/Getting_started_with_the_web"
          >einfachen HTML-Dokuments</a
        >
        vertraut sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen Sie, wie Sie JavaScript in Ihrer HTML-Datei auslösen und die
        wichtigsten Best Practices, um JavaScript zugänglich zu halten.
      </td>
    </tr>
  </tbody>
</table>

## Über JavaScript

[JavaScript](/de/docs/Glossary/JavaScript) ist eine Programmiersprache, die hauptsächlich clientseitig verwendet wird, um Webseiten interaktiv zu gestalten. Sie _können_ großartige Webseiten ohne JavaScript erstellen, aber JavaScript eröffnet eine ganz neue Ebene von Möglichkeiten.

> [!NOTE]
> In diesem Artikel gehen wir den HTML-Code durch, den Sie benötigen, damit JavaScript wirksam wird. Wenn Sie JavaScript selbst lernen möchten, können Sie mit unserem Artikel [JavaScript-Grundlagen](/de/docs/Learn/Getting_started_with_the_web/JavaScript_basics) beginnen. Wenn Sie bereits etwas über JavaScript wissen oder Erfahrung mit anderen Programmiersprachen haben, empfehlen wir Ihnen, direkt in unseren [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide) einzusteigen.

## Anleitung zum Auslösen von JavaScript aus HTML

Innerhalb eines Browsers tut JavaScript von selbst nichts. Sie führen JavaScript von innerhalb Ihrer HTML-Webseiten aus. Um JavaScript-Code aus HTML auszuführen, benötigen Sie das {{htmlelement("script")}}-Element. Es gibt zwei Möglichkeiten, `script` zu verwenden, je nachdem, ob Sie auf ein externes Skript verlinken oder ein Skript direkt in Ihre Webseite einbetten.

### Verlinken eines externen Skripts

In der Regel schreiben Sie Skripte in eigenen .js-Dateien. Wenn Sie ein .js-Skript von Ihrer Webseite ausführen möchten, verwenden Sie einfach {{HTMLElement ('script')}} mit einem `src`-Attribut, das auf die Skriptdatei verweist, indem Sie ihre [URL](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL) verwenden:

```html
<script src="path/to/my/script.js"></script>
```

### JavaScript innerhalb von HTML schreiben

Sie können auch JavaScript-Code zwischen `<script>`-Tags hinzufügen, anstatt ein `src`-Attribut bereitzustellen.

```html
<script>
  window.addEventListener("load", () => {
    console.log("This function is executed once the page is fully loaded");
  });
</script>
```

Das ist praktisch, wenn Sie nur eine kleine Menge JavaScript benötigen, aber wenn Sie JavaScript in separaten Dateien aufbewahren, wird es Ihnen leichter fallen,

- sich auf Ihre Arbeit zu konzentrieren
- eigenständiges HTML zu schreiben
- strukturierte JavaScript-Anwendungen zu schreiben

## Scripting zugänglich verwenden

Barrierefreiheit ist ein großes Problem in jeder Softwareentwicklung. JavaScript kann Ihre Website zugänglicher machen, wenn Sie es klug einsetzen, oder es kann zu einem Desaster werden, wenn Sie Skripte ohne Sorgfalt verwenden. Damit JavaScript zu Ihrem Vorteil arbeitet, lohnt es sich, bestimmte Best Practices für die Hinzufügung von JavaScript zu kennen:

- **Machen Sie alle Inhalte als (strukturierter) Text verfügbar.** Verlassen Sie sich so weit wie möglich auf HTML für Ihre Inhalte. Wenn Sie beispielsweise eine schöne JavaScript-Fortschrittsanzeige implementiert haben, stellen Sie sicher, dass Sie sie mit passenden Textprozentangaben im HTML ergänzen. Ebenso sollten Ihre Dropdown-Menüs als [ungeordnete Listen](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#lists) von [Links](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks) strukturiert sein.
- **Machen Sie alle Funktionalitäten über die Tastatur zugänglich.**

  - Lassen Sie Benutzer durch alle Bedienelemente (z. B. Links und Formulareingaben) in logischer Reihenfolge mit der Tabulatortaste navigieren.
  - Wenn Sie Zeigereignisse (wie Mausevents oder Touch-Events) verwenden, duplizieren Sie die Funktionalität mit Tastaturevents.
  - Testen Sie Ihre Website nur mit einer Tastatur.

- **Setzen Sie keine Zeitlimits und raten Sie auch keine.** Es dauert länger, mit der Tastatur zu navigieren oder Inhalte vorgelesen zu bekommen. Sie können kaum vorhersagen, wie lange es für Benutzer oder Browser dauert, einen Prozess abzuschließen (insbesondere asynchrone Aktionen wie das Laden von Ressourcen).
- **Halten Sie Animationen dezent und kurz ohne Blinken.** Blinken ist störend und kann [Krämpfe auslösen](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html). Wenn eine Animation mehr als ein paar Sekunden dauert, geben Sie dem Benutzer die Möglichkeit, sie abzubrechen.
- **Lassen Sie Benutzer Interaktionen einleiten.** Das bedeutet, aktualisieren, leiten Sie nicht automatisch weiter oder aktualisieren Sie die Seite nicht automatisch. Verwenden Sie keine Karussells oder Popups ohne Vorwarnung.
- **Haben Sie einen Plan B für Benutzer ohne JavaScript.** Menschen können JavaScript deaktiviert haben, um Geschwindigkeit und Sicherheit zu verbessern, und Benutzer haben oft Netzwerkprobleme, die das Laden von Skripten verhindern. Darüber hinaus können Drittanbieter-Skripte (Werbung, Tracking-Skripte, Browser-Erweiterungen) Ihre Skripte beeinträchtigen.

  - Mindestens hinterlassen Sie eine kurze Nachricht mit {{HTMLElement("noscript")}} wie diese: `<noscript>Um diese Seite zu nutzen, aktivieren Sie bitte JavaScript.</noscript>`
  - Idealerweise replizieren Sie die JavaScript-Funktionalität mit HTML und serverseitigem Scripting, wann immer möglich.
  - Wenn Sie nur nach einfachen visuellen Effekten suchen, kann CSS oft die Aufgabe sogar intuitiver erledigen.
  - _Da fast jeder **JavaScript** aktiviert hat, ist `<noscript>` keine Entschuldigung für das Schreiben unzugänglicher Skripte._

## Mehr erfahren

- {{htmlelement("script")}}
- {{htmlelement("noscript")}}
- [James Edwards' Einführung in die zugängliche Verwendung von JavaScript](https://www.sitepoint.com/javascript-accessibility-101/)
- [Barrierefreiheitsrichtlinien vom W3C](https://www.w3.org/TR/WCAG20/)
