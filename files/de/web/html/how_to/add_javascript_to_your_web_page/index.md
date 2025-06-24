---
title: JavaScript zu Ihrer Webseite hinzufügen
short-title: JavaScript hinzufügen
slug: Web/HTML/How_to/Add_JavaScript_to_your_web_page
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTMLSidebar}}

Heben Sie Ihre Webseiten auf die nächste Stufe, indem Sie JavaScript nutzen. Lernen Sie in diesem Artikel, wie Sie JavaScript direkt aus Ihren HTML-Dokumenten auslösen können.

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
        Lernen Sie, wie Sie JavaScript in Ihrer HTML-Datei auslösen und die wichtigsten Best Practices, um JavaScript barrierefrei zu halten.
      </td>
    </tr>
  </tbody>
</table>

## Über JavaScript

{{Glossary("JavaScript", "JavaScript")}} ist eine Programmiersprache, die hauptsächlich clientseitig genutzt wird, um Webseiten interaktiv zu machen. Sie _können_ erstaunliche Webseiten ohne JavaScript erstellen, aber JavaScript eröffnet eine ganz neue Ebene von Möglichkeiten.

> [!NOTE]
> In diesem Artikel besprechen wir den HTML-Code, den Sie benötigen, um JavaScript wirksam zu machen. Wenn Sie JavaScript selbst erlernen möchten, können Sie mit unserem Artikel [JavaScript-Grundlagen](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) beginnen. Wenn Sie bereits etwas über JavaScript wissen oder einen Hintergrund in anderen Programmiersprachen haben, empfehlen wir Ihnen, direkt in unseren [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide) einzusteigen.

## Anleitung, um JavaScript aus HTML auszulösen

Innerhalb eines Browsers tut JavaScript nichts von selbst. Sie führen JavaScript innerhalb Ihrer HTML-Webseiten aus. Um JavaScript-Code innerhalb von HTML auszuführen, benötigen Sie das {{htmlelement("script")}}-Element. Es gibt zwei Möglichkeiten, `script` zu verwenden, abhängig davon, ob Sie auf ein externes Skript verlinken oder ein Skript direkt in Ihre Webseite einbetten.

### Ein externes Skript verlinken

In der Regel schreiben Sie Skripte in ihren eigenen .js-Dateien. Wenn Sie ein .js-Skript von Ihrer Webseite ausführen möchten, verwenden Sie einfach {{HTMLElement ('script')}} mit einem `src`-Attribut, das auf die Skriptdatei verweist, unter Verwendung ihrer [URL](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL):

```html
<script src="path/to/my/script.js"></script>
```

### JavaScript innerhalb von HTML schreiben

Sie können auch JavaScript-Code zwischen `<script>`-Tags hinzufügen statt ein `src`-Attribut bereitzustellen.

```html
<script>
  window.addEventListener("load", () => {
    console.log("This function is executed once the page is fully loaded");
  });
</script>
```

Das ist praktisch, wenn Sie nur ein kleines JavaScript-Stück benötigen, aber wenn Sie JavaScript in separaten Dateien behalten, finden Sie es einfacher,

- sich auf Ihre Arbeit zu konzentrieren
- selbstständige HTML-Dateien zu schreiben
- strukturierte JavaScript-Anwendungen zu schreiben

## Scripting zugänglich verwenden

Barrierefreiheit ist ein wichtiges Thema in jeder Softwareentwicklung. JavaScript kann Ihre Webseite barrierefreier machen, wenn Sie es klug einsetzen, oder es kann ein Desaster werden, wenn Sie Scripting gedankenlos verwenden. Um JavaScript zu Ihrem Vorteil zu nutzen, lohnt es sich, bestimmte Best Practices für die Hinzufügung von JavaScript zu kennen:

- **Machen Sie alle Inhalte als (strukturierten) Text verfügbar.** Verlassen Sie sich so viel wie möglich auf HTML für Ihre Inhalte. Wenn Sie beispielsweise eine schöne JavaScript-Fortschrittsanzeige implementiert haben, stellen Sie sicher, dass sie mit passenden prozentualen Texten innerhalb von HTML ergänzt wird. Ebenso sollten Ihre Dropdown-Menüs als [ungeordnete Listen](/de/docs/Learn_web_development/Core/Structuring_content/Lists#unordered_lists) von [Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) strukturiert sein.
- **Machen Sie alle Funktionen über die Tastatur zugänglich.**

  - Lassen Sie Benutzer alle Steuerelemente (z. B. Links und Formulareingaben) in einer logischen Reihenfolge durch Tab-Taste durchlaufen.
  - Wenn Sie Zeigegeräte-Ereignisse (wie Maus- oder Touch-Ereignisse) verwenden, duplizieren Sie die Funktionen mit Tastaturereignissen.
  - Testen Sie Ihre Seite nur mit einer Tastatur.

- **Setzen Sie keine Zeitlimits und schätzen Sie sie auch nicht.** Es kostet zusätzliche Zeit, mit der Tastatur zu navigieren oder Inhalte vorzulesen. Sie können kaum vorhersagen, wie lange es für Benutzer oder Browser dauern wird, einen Vorgang abzuschließen (insbesondere asynchrone Aktionen wie das Laden von Ressourcen).
- **Halten Sie Animationen dezent und kurz, ohne Blitzlicht.** Blitzlicht ist störend und kann [Anfälle verursachen](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html). Wenn eine Animation länger als ein paar Sekunden dauert, geben Sie dem Benutzer die Möglichkeit, sie abzubrechen.
- **Lassen Sie Benutzer Interaktionen initiieren.** Das bedeutet, aktualisieren Sie Inhalte nicht automatisch, leiten Sie nicht weiter und aktualisieren Sie nicht. Verwenden Sie keine Karussells oder Popups ohne Vorwarnung.
- **Haben Sie einen Plan B für Benutzer ohne JavaScript.** Menschen können JavaScript deaktiviert haben, um Geschwindigkeit und Sicherheit zu verbessern, und Benutzer haben oft Netzwerkprobleme, die das Laden von Skripten verhindern. Darüber hinaus könnten Drittanbieter-Skripte (Werbung, Tracking-Skripte, Browser-Erweiterungen) Ihre Skripte stören.
  - Lassen Sie mindestens eine kurze Nachricht mit {{HTMLElement("noscript")}} wie diese: `<noscript>Um diese Seite zu nutzen, aktivieren Sie bitte JavaScript.</noscript>`
  - Ideal wäre es, die JavaScript-Funktionalität mit HTML und serverseitigem Skripting zu replizieren, wann immer möglich.
  - Wenn Sie nur einfache visuelle Effekte suchen, kann CSS oft die Aufgabe sogar noch intuitiver erledigen.
  - _Da fast jeder **JavaScript** aktiviert hat, ist `<noscript>` keine Ausrede, um nicht zugängliche Skripte zu schreiben._

## Mehr erfahren

- {{htmlelement("script")}}
- {{htmlelement("noscript")}}
- [JavaScript mit Barrierefreiheit im Kopf schreiben](https://www.sitepoint.com/writing-javascript-with-accessibility-in-mind/) von Manuel Matuzovic (2017)
- [Barrierefreiheitsrichtlinien des W3C](https://w3c.github.io/wcag/guidelines/22/)
