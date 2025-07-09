---
title: JavaScript zu Ihrer Webseite hinzufügen
short-title: JavaScript hinzufügen
slug: Web/HTML/How_to/Add_JavaScript_to_your_web_page
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Bringen Sie Ihre Webseiten auf die nächste Stufe, indem Sie JavaScript nutzen. In diesem Artikel erfahren Sie, wie Sie JavaScript direkt aus Ihren HTML-Dokumenten auslösen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten mit der Erstellung eines
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >einfachen HTML-Dokuments</a
        >vertraut sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erfahren Sie, wie Sie JavaScript in Ihrer HTML-Datei auslösen können und lernen Sie die wichtigsten Best Practices, um JavaScript zugänglich zu halten.
      </td>
    </tr>
  </tbody>
</table>

## Über JavaScript

{{Glossary("JavaScript", "JavaScript")}} ist eine Programmiersprache, die hauptsächlich clientseitig genutzt wird, um Webseiten interaktiv zu machen. Sie _können_ beeindruckende Webseiten ohne JavaScript erstellen, aber JavaScript eröffnet eine ganze neue Ebene von Möglichkeiten.

> [!NOTE]
> In diesem Artikel besprechen wir den notwendigen HTML-Code, um JavaScript wirksam werden zu lassen. Wenn Sie JavaScript selbst lernen möchten, können Sie mit unserem Artikel [JavaScript-Grundlagen](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) beginnen. Wenn Sie bereits etwas über JavaScript wissen oder schon Erfahrung mit anderen Programmiersprachen haben, empfehlen wir, direkt in unseren [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide) einzusteigen.

## Wie man JavaScript aus HTML auslöst

Innerhalb eines Browsers tut JavaScript von alleine nichts. Sie führen JavaScript aus Ihren HTML-Webseiten aus. Um JavaScript-Code aus HTML aufzurufen, benötigen Sie das {{htmlelement("script")}}-Element. Es gibt zwei Möglichkeiten, `script` zu verwenden, je nachdem, ob Sie auf ein externes Skript verlinken oder ein Skript direkt in Ihre Webseite einbetten.

### Ein externes Skript verlinken

Normalerweise schreiben Sie Skripte in eigenen .js-Dateien. Wenn Sie ein .js-Skript aus Ihrer Webseite ausführen möchten, verwenden Sie einfach {{HTMLElement('script')}} mit einem `src`-Attribut, das auf die Skriptdatei verweist, unter Verwendung ihrer [URL](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL):

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

Das ist praktisch, wenn Sie nur ein kleines bisschen JavaScript benötigen, aber wenn Sie JavaScript in separaten Dateien halten, wird es Ihnen leichter fallen,

- sich auf Ihre Arbeit zu konzentrieren
- autarke HTML zu schreiben
- strukturierte JavaScript-Anwendungen zu schreiben

## Skripting zugänglich verwenden

Zugänglichkeit ist ein großes Thema in jeder Softwareentwicklung. JavaScript kann Ihre Webseite zugänglicher machen, wenn Sie es klug einsetzen, oder zu einem Desaster führen, wenn Sie Skripting unüberlegt einsetzen. Um JavaScript zu Ihrem Vorteil zu nutzen, lohnt es sich, einige Best Practices beim Hinzufügen von JavaScript zu kennen:

- **Machen Sie alle Inhalte als (strukturierter) Text verfügbar.** Verlassen Sie sich so weit wie möglich auf HTML für Ihre Inhalte. Wenn Sie zum Beispiel eine schöne JavaScript-Fortschrittsanzeige implementiert haben, stellen Sie sicher, dass diese durch entsprechende Prozentangaben im HTML ergänzt wird. Ebenso sollten Ihre Dropdown-Menüs als [ungeordnete Listen](/de/docs/Learn_web_development/Core/Structuring_content/Lists#unordered_lists) von [Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) aufgebaut sein.
- **Machen Sie alle Funktionen über die Tastatur zugänglich.**
  - Lassen Sie Benutzer durch alle Steuerungselemente (z. B. Links und Formulareingaben) in einer logischen Reihenfolge mit der Tabulatortaste navigieren.
  - Wenn Sie Zeigerereignisse (wie Mausereignisse oder Berührungsereignisse) verwenden, duplizieren Sie die Funktionalität mit Tastaturereignissen.
  - Testen Sie Ihre Seite nur mit der Tastatur.

- **Setzen Sie keine Zeitlimits und raten Sie diese auch nicht.** Es braucht zusätzliche Zeit, um mit der Tastatur zu navigieren oder Inhalte vorgelesen zu bekommen. Sie können kaum vorhersagen, wie lange es dauert, bis Benutzer oder Browser einen Vorgang abschließen (insbesondere asynchrone Aktionen wie das Laden von Ressourcen).
- **Halten Sie Animationen subtil und kurz ohne Flackern.** Flackern ist störend und kann [Anfälle verursachen](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html). Wenn eine Animation länger als ein paar Sekunden dauert, geben Sie dem Nutzer die Möglichkeit, sie abzubrechen.
- **Lassen Sie Nutzer Interaktionen initiieren.** Das bedeutet, aktualisieren Sie Inhalte nicht automatisch, leiten Sie nicht um und aktualisieren Sie nicht automatisch. Verwenden Sie keine Karussells oder Popups ohne Vorwarnung.
- **Haben Sie einen Plan B für Nutzer ohne JavaScript.** Menschen können JavaScript deaktiviert haben, um Geschwindigkeit und Sicherheit zu verbessern, und Nutzer haben oft Netzprobleme, die das Laden von Skripten verhindern. Außerdem können Drittanbieter-Skripte (Anzeigen, Tracking-Skripte, Browser-Erweiterungen) Ihre Skripte stören.
  - Hinterlassen Sie mindestens eine kurze Nachricht mit {{HTMLElement("noscript")}} wie: `<noscript>Um diese Seite zu nutzen, aktivieren Sie bitte JavaScript.</noscript>`
  - Idealerweise replizieren Sie die JavaScript-Funktionalität mit HTML und serverseitigem Skripting, wenn möglich.
  - Wenn Sie nur einfache visuelle Effekte anstreben, können diese oft durch CSS noch intuitiver erreicht werden.
  - _Da fast jeder **JavaScript** aktiviert hat, ist `<noscript>` keine Entschuldigung dafür, unzugängliche Skripte zu schreiben._

## Weitere Informationen

- {{htmlelement("script")}}
- {{htmlelement("noscript")}}
- [JavaScript mit Blick auf Zugänglichkeit schreiben](https://www.sitepoint.com/writing-javascript-with-accessibility-in-mind/) von Manuel Matuzovic (2017)
- [Zugänglichkeitsrichtlinien von W3C](https://w3c.github.io/wcag/guidelines/22/)
