---
title: Verwenden Sie JavaScript innerhalb einer Webseite
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
        Sie sollten wissen, wie man
        <a href="/de/docs/Learn/Getting_started_with_the_web"
          >ein einfaches HTML-Dokument erstellt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, wie Sie JavaScript in Ihrer HTML-Datei auslösen, und erfahren Sie die wichtigsten Best Practices, um JavaScript zugänglich zu halten.
      </td>
    </tr>
  </tbody>
</table>

## Über JavaScript

{{Glossary("JavaScript")}} ist eine Programmiersprache, die meist clientseitig eingesetzt wird, um Webseiten interaktiv zu gestalten. Sie _können_ beeindruckende Webseiten ohne JavaScript erstellen, aber JavaScript eröffnet eine ganz neue Ebene von Möglichkeiten.

> [!NOTE]
> In diesem Artikel behandeln wir den HTML-Code, den Sie benötigen, um JavaScript wirksam zu machen. Wenn Sie JavaScript selbst lernen möchten, können Sie mit unserem Artikel [JavaScript-Grundlagen](/de/docs/Learn/Getting_started_with_the_web/JavaScript_basics) beginnen. Wenn Sie bereits etwas über JavaScript wissen oder über Erfahrungen mit anderen Programmiersprachen verfügen, empfehlen wir Ihnen, direkt in unseren [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide) einzusteigen.

## Wie man JavaScript aus HTML auslöst

Innerhalb eines Browsers tut JavaScript von selbst nichts. Sie führen JavaScript von Ihren HTML-Webseiten aus aus. Um JavaScript-Code aus HTML heraus aufzurufen, benötigen Sie das {{htmlelement("script")}}-Element. Es gibt zwei Möglichkeiten, `script` zu verwenden, je nachdem, ob Sie auf ein externes Skript verlinken oder ein Skript direkt in Ihre Webseite einbetten.

### Ein externes Skript verlinken

Normalerweise schreiben Sie Skripte in eigenen .js-Dateien. Wenn Sie ein .js-Skript von Ihrer Webseite ausführen möchten, verwenden Sie einfach {{HTMLElement ('script')}} mit einem `src`-Attribut, das auf die Skriptdatei verweist, indem Sie deren [URL](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL) nutzen:

```html
<script src="path/to/my/script.js"></script>
```

### JavaScript innerhalb von HTML schreiben

Sie können auch JavaScript-Code zwischen `<script>`-Tags hinzufügen, anstatt ein `src`-Attribut anzugeben.

```html
<script>
  window.addEventListener("load", () => {
    console.log("This function is executed once the page is fully loaded");
  });
</script>
```

Das ist praktisch, wenn Sie nur eine kleine Menge JavaScript benötigen, aber wenn Sie JavaScript in separaten Dateien halten, werden Sie feststellen, dass es einfacher ist,

- sich auf Ihre Arbeit zu konzentrieren,
- eigenständiges HTML zu schreiben,
- strukturierte JavaScript-Anwendungen zu erstellen.

## Skripting zugänglich verwenden

Barrierefreiheit ist ein wichtiges Thema in jeder Softwareentwicklung. JavaScript kann Ihre Website zugänglicher machen, wenn Sie es klug einsetzen, oder es kann zu einer Katastrophe werden, wenn Sie Skripting ohne Sorgfalt einsetzen. Damit JavaScript zu Ihrem Vorteil wirkt, lohnt es sich, einige bewährte Verfahren für die Hinzufügung von JavaScript zu kennen:

- **Machen Sie alle Inhalte als (strukturierten) Text verfügbar.** Verlassen Sie sich so weit wie möglich auf HTML für Ihre Inhalte. Wenn Sie zum Beispiel eine schöne JavaScript-Fortschrittsanzeige implementiert haben, stellen Sie sicher, dass Sie sie mit passenden Textprozenten im HTML ergänzen. Ebenso sollten Ihre Dropdown-Menüs als [ungeordnete Listen](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#lists) von [Links](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks) strukturiert sein.
- **Machen Sie alle Funktionen über die Tastatur zugänglich.**

  - Ermöglichen Sie es Nutzern, mit der Tabulatortaste durch alle Steuerungen (z. B. Links und Formulareingaben) in einer logischen Reihenfolge zu navigieren.
  - Wenn Sie Zeigegeräte-Ereignisse (wie Mausereignisse oder Berührungsereignisse) verwenden, duplizieren Sie die Funktionalität mit Tastaturereignissen.
  - Testen Sie Ihre Website nur mit Tastatureingaben.

- **Setzen Sie keine Zeitlimits und raten Sie sie nicht einmal.** Es braucht zusätzliche Zeit, um mit der Tastatur zu navigieren oder vorgelesene Inhalte zu hören. Sie können kaum vorhersagen, wie lange es dauert, bis Benutzer oder Browser einen Prozess abschließen (insbesondere asynchrone Aktionen wie das Laden von Ressourcen).
- **Halten Sie Animationen dezent und kurz ohne Flackern.** Flackern ist lästig und kann [Anfälle auslösen](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html). Wenn eine Animation länger als ein paar Sekunden dauert, geben Sie dem Benutzer die Möglichkeit, sie abzubrechen.
- **Lassen Sie die Benutzer Interaktionen initiieren.** Das bedeutet, aktualisieren Sie Inhalte nicht automatisch, leiten Sie nicht weiter und aktualisieren Sie nicht ohne Vorwarnung. Vermeiden Sie Karussells oder Popups ohne Warnung.
- **Haben Sie einen Plan B für Benutzer ohne JavaScript.** Personen können JavaScript ausgeschaltet haben, um Geschwindigkeit und Sicherheit zu verbessern. Oftmals treten Netzwerkprobleme auf, die das Laden von Skripten verhindern. Darüber hinaus können Drittanbieter-Skripte (Werbung, Tracking-Skripte, Browser-Erweiterungen) Ihre Skripte stören.

  - Mindestens hinterlassen Sie eine kurze Nachricht mit {{HTMLElement("noscript")}} wie: `<noscript>Um diese Seite zu nutzen, aktivieren Sie bitte JavaScript.</noscript>`
  - Ideal wäre es, die JavaScript-Funktionalität mit HTML und serverseitigem Skripting zu replizieren, wann immer möglich.
  - Wenn Sie nur einfache visuelle Effekte suchen, kann CSS oft noch intuitiver zum Einsatz kommen.
  - _Da fast jeder **JavaScript** aktiviert hat, ist `<noscript>` keine Entschuldigung für das Schreiben unzugänglicher Skripte._

## Mehr erfahren

- {{htmlelement("script")}}
- {{htmlelement("noscript")}}
- [James Edwards' Einführung in die Verwendung von JavaScript zugänglich](https://www.sitepoint.com/javascript-accessibility-101/)
- [Richtlinien zur Barrierefreiheit von der W3C](https://www.w3.org/TR/WCAG20/)
