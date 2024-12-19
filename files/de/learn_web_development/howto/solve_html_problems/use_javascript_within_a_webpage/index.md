---
title: Verwenden Sie JavaScript innerhalb einer Webseite
slug: Learn_web_development/Howto/Solve_HTML_problems/Use_JavaScript_within_a_webpage
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{QuickLinksWithSubpages("/de/docs/Learn_web_development/Howto/Solve_HTML_problems")}}

Bringen Sie Ihre Webseiten mit JavaScript auf die nächste Ebene. Lernen Sie in diesem Artikel, wie Sie JavaScript direkt aus Ihren HTML-Dokumenten auslösen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten wissen, wie man
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >ein einfaches HTML-Dokument erstellt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, wie Sie JavaScript in Ihrer HTML-Datei auslösen können, und erfahren Sie die wichtigsten Best Practices, um JavaScript zugänglich zu halten.
      </td>
    </tr>
  </tbody>
</table>

## Über JavaScript

{{Glossary("JavaScript", "JavaScript")}} ist eine Programmiersprache, die hauptsächlich clientseitig verwendet wird, um Webseiten interaktiv zu machen. Sie _können_ beeindruckende Webseiten ohne JavaScript erstellen, aber JavaScript öffnet eine ganz neue Ebene von Möglichkeiten.

> [!NOTE]
> In diesem Artikel gehen wir auf den HTML-Code ein, den Sie benötigen, um JavaScript zur Wirkung zu bringen. Wenn Sie JavaScript selbst lernen möchten, können Sie mit unserem Artikel [JavaScript-Grundlagen](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) beginnen. Wenn Sie bereits etwas über JavaScript wissen oder einen Hintergrund in anderen Programmiersprachen haben, empfehlen wir Ihnen, direkt in unseren [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide) einzutauchen.

## Anleitung: JavaScript von HTML auslösen

Innerhalb eines Browsers tut JavaScript von sich aus nichts. Sie führen JavaScript aus Ihren HTML-Webseiten aus. Um JavaScript-Code innerhalb von HTML aufzurufen, benötigen Sie das {{htmlelement("script")}}-Element. Es gibt zwei Möglichkeiten, `script` zu verwenden, abhängig davon, ob Sie auf ein externes Skript verlinken oder ein Skript direkt in Ihre Webseite einbetten.

### Ein externes Skript verlinken

Normalerweise werden Sie Skripte in eigenen .js-Dateien schreiben. Wenn Sie ein .js-Skript von Ihrer Webseite ausführen möchten, verwenden Sie einfach {{HTMLElement ('script')}} mit einem `src`-Attribut, das auf die Skriptdatei verweist, unter Verwendung ihrer [URL](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL):

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

Das ist praktisch, wenn Sie nur ein kleines bisschen JavaScript benötigen, aber wenn Sie JavaScript in separaten Dateien halten, werden Sie feststellen, dass es einfacher ist,

- sich auf Ihre Arbeit zu konzentrieren,
- unabhängiges HTML zu schreiben,
- strukturierte JavaScript-Anwendungen zu schreiben.

## Scripting zugänglich machen

Zugänglichkeit ist ein zentrales Thema in jeder Softwareentwicklung. JavaScript kann Ihre Website zugänglicher machen, wenn Sie es umsichtig verwenden, oder es kann ein Desaster werden, wenn Sie Scripting ohne Sorgfalt verwenden. Um JavaScript zu Ihrem Vorteil zu machen, lohnt es sich, bestimmte Best Practices zu kennen, um JavaScript hinzuzufügen:

- **Stellen Sie alle Inhalte als (strukturierten) Text zur Verfügung.** Verlassen Sie sich so weit wie möglich auf HTML für Ihre Inhalte. Wenn Sie zum Beispiel eine schöne JavaScript-Fortschrittsleiste implementiert haben, sorgen Sie dafür, dass Sie sie mit passenden Textprozenten im HTML ergänzen. Ebenso sollten Ihre Drop-Down-Menüs als [ungeordnete Listen](/de/docs/Learn_web_development/Core/Structuring_content/Lists#unordered_lists) von [Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) strukturiert sein.
- **Machen Sie alle Funktionen über die Tastatur zugänglich.**

  - Lassen Sie die Benutzer durch alle Steuerelemente (z.B. Links und Formulareingaben) in logischer Reihenfolge tabben.
  - Wenn Sie Zeigereignisse (wie Maus- oder Touchereignisse) verwenden, duplizieren Sie die Funktionalität mit Tastaturereignissen.
  - Testen Sie Ihre Seite nur mit einer Tastatur.

- **Setzen Sie keine Zeitlimits fest und raten Sie auch nicht darauf.** Es dauert zusätzliche Zeit, um mit der Tastatur zu navigieren oder Inhalte vorzulesen. Sie können kaum vorhersagen, wie lange es für Benutzer oder Browser dauert, einen Prozess abzuschließen (insbesondere asynchrone Aktionen wie das Laden von Ressourcen).
- **Halten Sie Animationen dezent und kurz ohne Blinken.** Blinken ist störend und kann [Anfälle verursachen](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html). Wenn eine Animation länger als ein paar Sekunden dauert, geben Sie dem Benutzer eine Möglichkeit, sie zu stoppen.
- **Lassen Sie Benutzer Interaktionen initiieren.** Das bedeutet, aktualisieren Sie keine Inhalte, leiten Sie nicht weiter und aktualisieren Sie nicht automatisch. Verwenden Sie keine Karussells oder zeigen Sie Popups ohne Vorwarnung an.
- **Haben Sie einen Plan B für Benutzer ohne JavaScript.** Leute könnten JavaScript deaktiviert haben, um Geschwindigkeit und Sicherheit zu verbessern, und Benutzer stoßen oft auf Netzwerkprobleme, die das Laden von Skripten verhindern. Zudem können Drittanbieterskripte (Werbung, Tracking-Skripte, Browser-Erweiterungen) Ihre Skripte stören.

  - Hinterlassen Sie mindestens eine kurze Nachricht mit {{HTMLElement("noscript")}} wie folgt: `<noscript>Um diese Seite zu verwenden, aktivieren Sie bitte JavaScript.</noscript>`
  - Idealerweise replizieren Sie die JavaScript-Funktionalität mit HTML und Serverseitigem Scripting, wann immer möglich.
  - Wenn Sie nur nach einfachen visuellen Effekten suchen, kann CSS oft die Arbeit sogar noch intuitiver erledigen.
  - _Da fast jeder **JavaScript** aktiviert hat, ist `<noscript>` keine Entschuldigung, um unzugängliche Skripte zu schreiben._

## Weitere Informationen

- {{htmlelement("script")}}
- {{htmlelement("noscript")}}
- [James Edwards Einführung in die zugängliche Nutzung von JavaScript](https://www.sitepoint.com/javascript-accessibility-101/)
- [Zugänglichkeitsrichtlinien von W3C](https://www.w3.org/TR/WCAG20/)
