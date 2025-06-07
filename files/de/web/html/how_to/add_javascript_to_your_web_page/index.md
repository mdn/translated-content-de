---
title: Fügen Sie JavaScript zu Ihrer Webseite hinzu
short-title: JavaScript hinzufügen
slug: Web/HTML/How_to/Add_JavaScript_to_your_web_page
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{HTMLSidebar}}

Bringen Sie Ihre Webseiten auf die nächste Stufe, indem Sie JavaScript nutzen. In diesem Artikel erfahren Sie, wie Sie JavaScript direkt aus Ihren HTML-Dokumenten auslösen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten mit der Erstellung eines
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >einfachen HTML-Dokuments</a
        >
        vertraut sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, wie Sie JavaScript in Ihrer HTML-Datei auslösen und die wichtigsten Best Practices, um JavaScript zugänglich zu halten.
      </td>
    </tr>
  </tbody>
</table>

## Über JavaScript

{{Glossary("JavaScript", "JavaScript")}} ist eine Programmiersprache, die meistens clientseitig verwendet wird, um Webseiten interaktiv zu gestalten. Sie _können_ beeindruckende Webseiten ohne JavaScript erstellen, aber JavaScript eröffnet eine ganz neue Ebene von Möglichkeiten.

> [!NOTE]
> In diesem Artikel gehen wir über den HTML-Code, den Sie benötigen, um JavaScript zur Wirkung zu bringen. Wenn Sie JavaScript selbst erlernen möchten, können Sie mit unserem Artikel [JavaScript-Einführung](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) beginnen. Wenn Sie bereits Vorkenntnisse in JavaScript oder mit anderen Programmiersprachen haben, empfehlen wir Ihnen, direkt in unseren [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide) einzusteigen.

## Wie man JavaScript aus HTML auslöst

Innerhalb eines Browsers tut JavaScript von sich aus nichts. Sie führen JavaScript aus innerhalb Ihrer HTML-Webseiten. Um JavaScript-Code innerhalb von HTML aufzurufen, benötigen Sie das {{htmlelement("script")}}-Element. Es gibt zwei Möglichkeiten, `script` zu verwenden, je nachdem, ob Sie ein externes Skript verlinken oder ein Skript direkt in Ihre Webseite einbetten.

### Ein externes Skript verlinken

In der Regel schreiben Sie Skripte in eigenen .js-Dateien. Wenn Sie ein .js-Skript von Ihrer Webseite ausführen möchten, verwenden Sie einfach {{HTMLElement("script")}} mit einem `src`-Attribut, das auf die Skriptdatei zeigt, unter Verwendung ihrer [URL](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL):

```html
<script src="path/to/my/script.js"></script>
```

### JavaScript direkt in HTML schreiben

Sie können auch JavaScript-Code zwischen `<script>`-Tags hinzufügen, anstatt ein `src`-Attribut anzugeben.

```html
<script>
  window.addEventListener("load", () => {
    console.log("This function is executed once the page is fully loaded");
  });
</script>
```

Das ist praktisch, wenn Sie nur ein kleines bisschen JavaScript benötigen. Wenn Sie jedoch JavaScript in separaten Dateien halten, finden Sie es einfacher,

- sich auf Ihre Arbeit zu konzentrieren
- eigenständiges HTML zu schreiben
- strukturierte JavaScript-Anwendungen zu schreiben

## Scripting zugänglich nutzen

Barrierefreiheit ist ein großes Thema in der Softwareentwicklung. JavaScript kann Ihre Webseite zugänglicher machen, wenn Sie es mit Bedacht einsetzen, oder es kann zu einer Katastrophe werden, wenn Sie Scripting ohne Sorgfalt verwenden. Damit JavaScript zu Ihrem Vorteil arbeitet, ist es sinnvoll, bestimmte Best Practices für das Hinzufügen von JavaScript zu kennen:

- **Machen Sie alle Inhalte als (strukturierter) Text verfügbar.** Verwenden Sie HTML so weit wie möglich für Ihre Inhalte. Wenn Sie zum Beispiel einen schönen JavaScript-Fortschrittsbalken implementiert haben, stellen Sie sicher, dass Sie ihn mit passenden Textprozentsätzen in HTML ergänzen. Ebenso sollten Ihre Dropdown-Menüs als [ungeordnete Listen](/de/docs/Learn_web_development/Core/Structuring_content/Lists#unordered_lists) von [Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) strukturiert sein.
- **Machen Sie alle Funktionen über die Tastatur zugänglich.**

  - Lassen Sie Benutzer mit der Tabulatortaste durch alle Steuerelemente (z. B. Links und Formulareingaben) in einer logischen Reihenfolge navigieren.
  - Wenn Sie Zeigereignisse (wie Mausevents oder Touch-Ereignisse) verwenden, duplizieren Sie die Funktionalität mit Tastaturevents.
  - Testen Sie Ihre Seite nur mit einer Tastatur.

- **Setzen Sie keine Zeitlimits und raten Sie diese auch nicht.** Es dauert länger, mit der Tastatur zu navigieren oder Inhalte vorlesen zu lassen. Sie können kaum jemals genau vorhersagen, wie lange es dauert, bis Benutzer oder Browser einen Prozess abschließen (besonders asynchrone Aktionen wie das Laden von Ressourcen).
- **Halten Sie Animationen dezent und kurz, ohne Flackern.** Flackern ist störend und kann [Anfälle verursachen](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html). Darüber hinaus, wenn eine Animation mehr als ein paar Sekunden dauert, geben Sie dem Benutzer die Möglichkeit, sie abzubrechen.
- **Lassen Sie Benutzer Interaktionen initiieren.** Das bedeutet, aktualisieren oder leiten Sie Inhalte nicht automatisch weiter oder erneuern sie diese nicht. Verwenden Sie keine Karusselle oder Pop-ups ohne Vorwarnung.
- **Haben Sie einen Plan B für Benutzer ohne JavaScript.** Personen könnten JavaScript deaktiviert haben, um Geschwindigkeit und Sicherheit zu verbessern, und Benutzer haben oft Netzwerkprobleme, die das Laden von Skripten verhindern. Zudem können Drittanbieter-Skripte (Werbung, Tracking-Skripte, Browsererweiterungen) Ihre Skripte stören.

  - Mindestens sollten Sie eine kurze Nachricht mit {{HTMLElement("noscript")}} hinterlassen, wie diese: `<noscript>To use this site, please enable JavaScript.</noscript>`
  - Idealerweise replizieren Sie die JavaScript-Funktionalität mit HTML und serverseitigem Scripting, wenn möglich.
  - Wenn Sie nur nach einfachen visuellen Effekten suchen, kann CSS oft noch intuitiver das Gewünschte erreichen.
  - _Da fast jeder **JavaScript** aktiviert hat, ist `<noscript>` keine Entschuldigung für das Schreiben unzugänglicher Skripte._

## Erfahren Sie mehr

- {{htmlelement("script")}}
- {{htmlelement("noscript")}}
- [Writing JavaScript with Accessibility in Mind](https://www.sitepoint.com/writing-javascript-with-accessibility-in-mind/) von Manuel Matuzovic (2017)
- [Barrierefreiheitsrichtlinien des W3C](https://w3c.github.io/wcag/guidelines/22/)
