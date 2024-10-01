---
title: Verwendung von JavaScript innerhalb einer Webseite
slug: Learn/HTML/Howto/Use_JavaScript_within_a_webpage
l10n:
  sourceCommit: 76c1e86a6bf1fd58aa6b0e627842a3c1161add28
---

{{QuickLinksWithSubpages("/de/docs/Learn/HTML/Howto")}}

Erweitern Sie Ihre Webseiten mit JavaScript. Lernen Sie in diesem Artikel, wie Sie JavaScript direkt in Ihren HTML-Dokumenten auslösen können.

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
        Lernen Sie, wie man JavaScript in Ihrer HTML-Datei auslöst, und lernen Sie
        die wichtigsten Best Practices, um JavaScript zugänglich zu halten.
      </td>
    </tr>
  </tbody>
</table>

## Über JavaScript

{{Glossary("JavaScript", "JavaScript")}} ist eine Programmiersprache, die hauptsächlich clientseitig verwendet wird, um Webseiten interaktiv zu machen. Es ist _möglich_, beeindruckende Webseiten ohne JavaScript zu erstellen, aber JavaScript eröffnet eine ganz neue Ebene an Möglichkeiten.

> [!NOTE]
> In diesem Artikel besprechen wir den HTML-Code, den Sie benötigen, um JavaScript zur Wirkung zu bringen. Wenn Sie JavaScript selbst lernen möchten, können Sie mit unserem Artikel [JavaScript-Grundlagen](/de/docs/Learn/Getting_started_with_the_web/JavaScript_basics) beginnen. Wenn Sie bereits etwas über JavaScript wissen oder Erfahrung mit anderen Programmiersprachen haben, empfehlen wir Ihnen, direkt in unseren [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide) einzusteigen.

## Anleitung zur Auslösung von JavaScript aus HTML

In einem Browser tut JavaScript allein nichts. Sie führen JavaScript von innerhalb Ihrer HTML-Webseiten aus. Um JavaScript-Code aus HTML heraus aufzurufen, benötigen Sie das {{htmlelement("script")}}-Element. Es gibt zwei Möglichkeiten, `script` zu verwenden, abhängig davon, ob Sie auf ein externes Skript verlinken oder ein Skript direkt in Ihre Webseite einbetten.

### Verlinkung eines externen Skripts

Normalerweise schreiben Sie Skripte in ihren eigenen .js-Dateien. Wenn Sie ein .js-Skript von Ihrer Webseite ausführen möchten, verwenden Sie einfach {{HTMLElement ('script')}} mit einem `src`-Attribut, das auf die Skriptdatei verweist, unter Verwendung ihres [URL](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL):

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

Das ist praktisch, wenn Sie nur eine kleine Menge JavaScript benötigen, aber wenn Sie JavaScript in separaten Dateien halten, wird es Ihnen leichter fallen,

- sich auf Ihre Arbeit zu konzentrieren
- selbstständiges HTML zu schreiben
- strukturierte JavaScript-Anwendungen zu schreiben

## Verwenden Sie Skripting zugänglich

Zugänglichkeit ist ein zentrales Thema in jeder Softwareentwicklung. JavaScript kann Ihre Website zugänglicher machen, wenn Sie es klug verwenden, oder es kann zum Desaster werden, wenn Sie Skripting ohne Vorsicht einsetzen. Um JavaScript zu Ihrem Vorteil zu nutzen, sollten Sie bestimmte Best Practices für die Einbindung von JavaScript kennen:

- **Stellen Sie alle Inhalte als (strukturierten) Text bereit.** Setzen Sie, soweit möglich, auf HTML für Ihre Inhalte. Wenn Sie beispielsweise eine schöne JavaScript-Fortschrittsleiste implementiert haben, ergänzen Sie diese mit passenden Textprozenten innerhalb des HTML. Ebenso sollten Ihre Dropdown-Menüs als [unsortierte Listen](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#lists) von [Links](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks) strukturiert sein.
- **Stellen Sie sicher, dass alle Funktionen über die Tastatur zugänglich sind.**

  - Lassen Sie Benutzer durch alle Bedienelemente (z.B. Links und Formulareingaben) in einer logischen Reihenfolge tabben.
  - Wenn Sie Zeigegeräteereignisse (wie Mausereignisse oder Touchereignisse) verwenden, duplizieren Sie die Funktionalität mit Tastaturereignissen.
  - Testen Sie Ihre Seite ausschließlich mit der Tastatur.

- **Stellen Sie keine Zeitlimits ein und raten Sie auch nicht.** Es braucht zusätzliche Zeit, um mit der Tastatur zu navigieren oder vorgelesene Inhalte zu hören. Sie können kaum vorhersagen, wie lange Benutzer oder Browser benötigen, um einen Prozess abzuschließen (insbesondere asynchrone Aktionen wie das Laden von Ressourcen).
- **Halten Sie Animationen dezent und kurz und vermeiden Sie Blinken.** Blinken ist störend und kann [Anfälle verursachen](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html). Wenn eine Animation länger als ein paar Sekunden dauert, geben Sie den Benutzern eine Möglichkeit, sie abzubrechen.
- **Lassen Sie Benutzer Interaktionen initiieren.** Das bedeutet, aktualisieren Sie Inhalte nicht automatisch und führen Sie keine automatischen Umleitungen oder Aktualisierungen durch. Verwenden Sie keine Karussells oder Pop-ups ohne Vorwarnung.
- **Haben Sie einen Plan B für Benutzer ohne JavaScript.** Menschen können JavaScript deaktiviert haben, um Geschwindigkeit und Sicherheit zu verbessern, und Benutzer erleben oft Netzprobleme, die das Laden von Skripten verhindern. Darüber hinaus können Drittanbieter-Skripte (Werbungen, Tracking-Skripte, Browser-Erweiterungen) Ihre Skripte stören.

  - Lassen Sie mindestens eine kurze Nachricht mit {{HTMLElement("noscript")}} wie diese: `<noscript>Um diese Seite zu verwenden, aktivieren Sie bitte JavaScript.</noscript>`
  - Idealerweise replizieren Sie die JavaScript-Funktionalität mit HTML und serverseitigem Skripting, wenn möglich.
  - Wenn Sie nur einfache visuelle Effekte wünschen, kann CSS oft die Aufgabe sogar noch intuitiver erledigen.
  - _Da fast jeder JavaScript aktiviert hat, ist `<noscript>` keine Entschuldigung für das Schreiben unzugänglicher Skripte._

## Erfahren Sie mehr

- {{htmlelement("script")}}
- {{htmlelement("noscript")}}
- [Einführung in die zugängliche Nutzung von JavaScript von James Edwards](https://www.sitepoint.com/javascript-accessibility-101/)
- [Zugänglichkeitsrichtlinien der W3C](https://www.w3.org/TR/WCAG20/)
