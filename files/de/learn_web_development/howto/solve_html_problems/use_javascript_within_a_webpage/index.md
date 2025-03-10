---
title: Verwenden von JavaScript innerhalb einer Webseite
slug: Learn_web_development/Howto/Solve_HTML_problems/Use_JavaScript_within_a_webpage
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{QuickLinksWithSubpages("/de/docs/Learn_web_development/Howto/Solve_HTML_problems")}}

Bringen Sie Ihre Webseiten auf die nächste Stufe, indem Sie JavaScript nutzen. Lernen Sie in diesem Artikel, wie Sie JavaScript direkt aus Ihren HTML-Dokumenten auslösen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten damit vertraut sein,
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >ein grundlegendes HTML-Dokument zu erstellen</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, wie Sie JavaScript in Ihrer HTML-Datei auslösen und die
        wichtigsten Best Practices für die barrierefreie Nutzung von JavaScript.
      </td>
    </tr>
  </tbody>
</table>

## Über JavaScript

{{Glossary("JavaScript", "JavaScript")}} ist eine Programmiersprache, die meist clientseitig verwendet wird, um Webseiten interaktiv zu machen. Sie _können_ beeindruckende Webseiten ohne JavaScript erstellen, aber JavaScript eröffnet eine völlig neue Ebene von Möglichkeiten.

> [!NOTE]
> In diesem Artikel besprechen wir den HTML-Code, den Sie benötigen, um JavaScript wirksam zu machen. Wenn Sie JavaScript selbst lernen möchten, können Sie mit unserem Artikel [JavaScript Grundlagen](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) beginnen. Wenn Sie bereits etwas über JavaScript wissen oder Erfahrung mit anderen Programmiersprachen haben, empfehlen wir Ihnen, direkt in unseren [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide) einzusteigen.

## Wie Sie JavaScript aus HTML auslösen

Innerhalb eines Browsers tut JavaScript von selbst nichts. Sie führen JavaScript aus Ihren HTML-Webseiten heraus aus. Um JavaScript-Code innerhalb von HTML aufzurufen, benötigen Sie das {{htmlelement("script")}}-Element. Es gibt zwei Möglichkeiten, `script` zu verwenden, je nachdem, ob Sie auf ein externes Script verlinken oder ein Script direkt in Ihrer Webseite einbetten.

### Verlinkung eines externen Scripts

In der Regel werden Sie Scripts in eigenen .js-Dateien schreiben. Wenn Sie ein .js-Script von Ihrer Webseite ausführen möchten, verwenden Sie einfach {{HTMLElement ('script')}} mit einem `src`-Attribut, das auf die Script-Datei zeigt, unter Verwendung ihrer [URL](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL):

```html
<script src="path/to/my/script.js"></script>
```

### Schreiben von JavaScript innerhalb von HTML

Sie können JavaScript-Code auch zwischen `<script>`-Tags hinzufügen, anstatt ein `src`-Attribut bereitzustellen.

```html
<script>
  window.addEventListener("load", () => {
    console.log("This function is executed once the page is fully loaded");
  });
</script>
```

Das ist praktisch, wenn Sie nur ein kleines bisschen JavaScript benötigen, aber wenn Sie JavaScript in separaten Dateien halten, wird es Ihnen leichter fallen,

- sich auf Ihre Arbeit zu konzentrieren
- eigenständiges HTML zu schreiben
- strukturierte JavaScript-Anwendungen zu schreiben

## Verwenden Sie Scripting barrierefrei

Barrierefreiheit ist ein wichtiges Thema in jeder Softwareentwicklung. JavaScript kann Ihre Website zugänglicher machen, wenn Sie es klug einsetzen, oder es kann zu einer Katastrophe werden, wenn Sie Scripting ohne Sorgfalt einsetzen. Um JavaScript zu Ihrem Vorteil zu nutzen, ist es hilfreich, bestimmte Best Practices beim Hinzufügen von JavaScript zu kennen:

- **Machen Sie alle Inhalte als (strukturierter) Text verfügbar.** Setzen Sie so viel wie möglich auf HTML für Ihre Inhalte. Wenn Sie beispielsweise eine schöne JavaScript-Fortschrittsanzeige implementiert haben, stellen Sie sicher, dass Sie sie mit passenden Textprozenten innerhalb des HTML ergänzen. Ebenso sollten Ihre Dropdown-Menüs als [ungeordnete Listen](/de/docs/Learn_web_development/Core/Structuring_content/Lists#unordered_lists) von [Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) strukturiert sein.
- **Machen Sie alle Funktionen über die Tastatur zugänglich.**

  - Lassen Sie Benutzer durch alle Steuerungen (z. B. Links und Formulareingaben) in logischer Reihenfolge Tabben.
  - Wenn Sie Zeigerereignisse (wie Maus- oder Touch-Ereignisse) verwenden, duplizieren Sie die Funktionalität mit Tastaturereignissen.
  - Testen Sie Ihre Seite nur mit der Tastatur.

- **Setzen Sie keine Zeitlimits fest und raten Sie auch keine.** Die Navigation mit der Tastatur oder das Vorlesen von Inhalten dauert länger. Sie können kaum vorhersagen, wie lange es für Benutzer oder Browser dauern wird, einen Prozess abzuschließen (besonders asynchrone Aktionen wie das Laden von Ressourcen).
- **Halten Sie Animationen subtil und kurz ohne Blinken.** Blinken ist störend und kann [Anfälle verursachen](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html). Zudem, wenn eine Animation länger als ein paar Sekunden dauert, geben Sie dem Benutzer eine Möglichkeit, sie abzubrechen.
- **Lassen Sie Benutzer Interaktionen initiieren.** Das bedeutet, aktualisieren Sie keine Inhalte automatisch, richten Sie keine Weiterleitungen oder Aktualisierungen ein. Verwenden Sie keine Karussells oder zeigen Sie Popups ohne Vorwarnung an.
- **Haben Sie einen Plan B für Benutzer ohne JavaScript.** Menschen könnten JavaScript deaktiviert haben, um Geschwindigkeit und Sicherheit zu verbessern, und Benutzer stehen häufig Netzproblemen gegenüber, die das Laden von Scripts verhindern. Zudem könnten Drittanbieter-Scripte (Werbung, Tracking-Scripts, Browser-Erweiterungen) Ihre Scripte unterbrechen.

  - Mindestens hinterlassen Sie eine kurze Nachricht mit {{HTMLElement("noscript")}} wie diese: `<noscript>Um diese Seite zu verwenden, aktivieren Sie bitte JavaScript.</noscript>`
  - Im Idealfall replizieren Sie die JavaScript-Funktionalität mit HTML und serverseitigem Scripting, wenn möglich.
  - Wenn Sie nur einfache visuelle Effekte anstreben, kann CSS oft auf noch intuitivere Weise die Aufgabe erledigen.
  - _Da fast jeder **JavaScript** aktiviert hat, ist `<noscript>` keine Entschuldigung für das Schreiben unzugänglicher Scripte._

## Erfahren Sie mehr

- {{htmlelement("script")}}
- {{htmlelement("noscript")}}
- [Javascript barrierefrei schreiben](https://www.sitepoint.com/writing-javascript-with-accessibility-in-mind/) von Manuel Matuzovic (2017)
- [Barrierefreiheitsrichtlinien des W3C](https://www.w3.org/TR/WCAG20/)
