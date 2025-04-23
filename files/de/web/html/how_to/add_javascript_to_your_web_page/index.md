---
title: Fügen Sie JavaScript zu Ihrer Webseite hinzu
short-title: JavaScript hinzufügen
slug: Web/HTML/How_to/Add_JavaScript_to_your_web_page
l10n:
  sourceCommit: cd701f10306c8b0b9690532ff808df826818a04f
---

{{HTMLSidebar}}

Bringen Sie Ihre Webseiten auf ein neues Level, indem Sie JavaScript nutzen. Lernen Sie in diesem Artikel, wie Sie JavaScript direkt aus Ihren HTML-Dokumenten auslösen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten mit der Erstellung eines
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >einfachen HTML-Dokuments</a>
        vertraut sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, wie Sie JavaScript in Ihrer HTML-Datei auslösen können, und lernen Sie die wichtigsten Best Practices, um JavaScript zugänglich zu halten.
      </td>
    </tr>
  </tbody>
</table>

## Über JavaScript

{{Glossary("JavaScript", "JavaScript")}} ist eine Programmiersprache, die hauptsächlich clientseitig genutzt wird, um Webseiten interaktiv zu machen. Sie _können_ erstaunliche Webseiten ohne JavaScript erstellen, aber JavaScript eröffnet Ihnen eine ganz neue Ebene von Möglichkeiten.

> [!NOTE]
> In diesem Artikel behandeln wir den HTML-Code, den Sie benötigen, um JavaScript wirksam zu machen. Wenn Sie JavaScript selbst lernen möchten, können Sie mit unserem Artikel [JavaScript-Grundlagen](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) beginnen. Wenn Sie bereits etwas über JavaScript wissen oder Erfahrung mit anderen Programmiersprachen haben, empfehlen wir Ihnen, direkt in unseren [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide) einzutauchen.

## Anleitung, um JavaScript in HTML auszulösen

Innerhalb eines Browsers tut JavaScript alleine nichts. Sie führen JavaScript von Ihren HTML-Webseiten aus. Um JavaScript-Code aus HTML heraus aufzurufen, benötigen Sie das {{htmlelement("script")}}-Element. Es gibt zwei Möglichkeiten, `script` zu verwenden, je nachdem, ob Sie ein externes Skript verlinken oder ein Skript direkt in Ihre Webseite einbetten.

### Verlinkung eines externen Skripts

Normalerweise schreiben Sie Skripte in eigenen .js-Dateien. Wenn Sie ein .js-Skript von Ihrer Webseite ausführen möchten, verwenden Sie einfach {{HTMLElement ('script')}} mit einem `src`-Attribut, das auf die Skriptdatei zeigt, indem Sie dessen [URL](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) verwenden:

```html
<script src="path/to/my/script.js"></script>
```

### Schreiben von JavaScript innerhalb von HTML

Sie können auch JavaScript-Code zwischen `<script>`-Tags hinzufügen, anstatt ein `src`-Attribut bereitzustellen.

```html
<script>
  window.addEventListener("load", () => {
    console.log("This function is executed once the page is fully loaded");
  });
</script>
```

Das ist praktisch, wenn Sie nur ein kleines bisschen JavaScript benötigen, aber wenn Sie JavaScript in separaten Dateien halten, finden Sie es einfacher,

- sich auf Ihre Arbeit zu konzentrieren
- selbstständiges HTML zu schreiben
- strukturierte JavaScript-Anwendungen zu schreiben

## Skripten zugänglich verwenden

Zugänglichkeit ist ein großes Thema in jeder Softwareentwicklung. JavaScript kann Ihre Website zugänglicher machen, wenn Sie es sinnvoll verwenden, oder es kann zu einem Desaster werden, wenn Sie unachtsam skripten. Um JavaScript zu Ihrem Vorteil arbeiten zu lassen, sollten Sie sich über bestimmte Best Practices beim Hinzufügen von JavaScript informieren:

- **Machen Sie alle Inhalte als (strukturierter) Text zugänglich.** Verlassen Sie sich so viel wie möglich auf HTML für Ihre Inhalte. Wenn Sie beispielsweise eine schöne JavaScript-Fortschrittsanzeige implementiert haben, stellen Sie sicher, dass Sie sie mit passenden Textprozentwerten im HTML ergänzen. Ebenso sollten Ihre Dropdown-Menüs als [ungeordnete Listen](/de/docs/Learn_web_development/Core/Structuring_content/Lists#unordered_lists) von [Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) strukturiert werden.
- **Machen Sie alle Funktionen über die Tastatur zugänglich.**

  - Lassen Sie Benutzer durch alle Steuerungen (z. B. Links und Formulareingaben) in einer logischen Reihenfolge navigieren.
  - Wenn Sie Zeigegeräteereignisse (wie Mausereignisse oder Berührungsereignisse) verwenden, verdoppeln Sie die Funktionalität mit Tastaturereignissen.
  - Testen Sie Ihre Seite nur mit einer Tastatur.

- **Setzen Sie keine Zeitlimits fest, noch raten Sie diese.** Es dauert extra Zeit, um mit der Tastatur zu navigieren oder um Inhalte vorgelesen zu bekommen. Sie können kaum jemals vorhersagen, wie lange Benutzer oder Browser benötigen, um einen Prozess abzuschließen (insbesondere asynchrone Aktionen wie das Laden von Ressourcen).
- **Halten Sie Animationen subtil und kurz ohne Blinken.** Blinken ist störend und kann [Anfälle verursachen](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html). Wenn eine Animation länger als ein paar Sekunden dauert, geben Sie dem Benutzer eine Möglichkeit, sie abzubrechen.
- **Lassen Sie Benutzer Interaktionen initiieren.** Das bedeutet, aktualisieren Sie Inhalte nicht automatisch, leiten Sie nicht weiter und laden Sie nicht automatisch neu. Verwenden Sie keine Karussells oder zeigen Sie Popups ohne Vorwarnung an.
- **Haben Sie einen Plan B für Benutzer ohne JavaScript.** Menschen können JavaScript ausschalten, um Geschwindigkeit und Sicherheit zu verbessern, und oft stehen Benutzer vor Netzwerkproblemen, die das Laden von Skripten verhindern. Außerdem könnten Drittanbieter-Skripte (Werbung, Tracking-Skripte, Browsererweiterungen) Ihre Skripte brechen.

  - Hinterlassen Sie mindestens eine kurze Nachricht mit {{HTMLElement("noscript")}} wie diese: `<noscript>Bitte aktivieren Sie JavaScript, um diese Seite zu nutzen.</noscript>`
  - Idealerweise duplizieren Sie die JavaScript-Funktionalität mit HTML und serverseitigem Skripten, wann immer möglich.
  - Wenn Sie nur einfache visuelle Effekte suchen, kann CSS oft noch intuitiver die Arbeit erledigen.
  - _Da fast jeder **JavaScript** aktiviert hat, ist `<noscript>` keine Entschuldigung dafür, unzugängliche Skripte zu schreiben._

## Erfahren Sie mehr

- {{htmlelement("script")}}
- {{htmlelement("noscript")}}
- [Writing JavaScript with Accessibility in Mind](https://www.sitepoint.com/writing-javascript-with-accessibility-in-mind/) von Manuel Matuzovic (2017)
- [Zugänglichkeitsrichtlinien von W3C](https://www.w3.org/TR/WCAG20/)
