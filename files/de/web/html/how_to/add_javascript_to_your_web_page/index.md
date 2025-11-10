---
title: Fügen Sie Ihrer Webseite JavaScript hinzu
short-title: JavaScript hinzufügen
slug: Web/HTML/How_to/Add_JavaScript_to_your_web_page
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

Bringen Sie Ihre Webseiten mit JavaScript auf die nächste Stufe. Lernen Sie in diesem Artikel, wie Sie JavaScript direkt aus Ihren HTML-Dokumenten aufrufen können.

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
        Lernen Sie, wie Sie JavaScript in Ihrer HTML-Datei auslösen können, und lernen Sie die wichtigsten bewährten Praktiken, um JavaScript zugänglich zu halten.
      </td>
    </tr>
  </tbody>
</table>

## Über JavaScript

{{Glossary("JavaScript", "JavaScript")}} ist eine Programmiersprache, die hauptsächlich clientseitig verwendet wird, um Webseiten interaktiv zu machen. Sie _können_ erstaunliche Webseiten ohne JavaScript erstellen, aber JavaScript eröffnet eine ganz neue Ebene von Möglichkeiten.

> [!NOTE]
> In diesem Artikel gehen wir über den HTML-Code, den Sie benötigen, um JavaScript wirksam zu machen. Wenn Sie JavaScript selbst lernen möchten, können Sie mit unserem Artikel [JavaScript-Grundlagen](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) beginnen. Wenn Sie bereits etwas über JavaScript wissen oder einen Hintergrund in anderen Programmiersprachen haben, empfehlen wir, direkt in unseren [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide) einzusteigen.

## Wie man JavaScript aus HTML auslöst

Innerhalb eines Browsers tut JavaScript allein nichts. Sie führen JavaScript aus Ihren HTML-Webseiten heraus aus. Um JavaScript-Code aus HTML aufzurufen, benötigen Sie das {{htmlelement("script")}}-Element. Es gibt zwei Möglichkeiten, `script` zu verwenden: abhängig davon, ob Sie auf ein externes Skript verlinken oder ein Skript direkt auf Ihrer Webseite einbetten.

### Verlinkung eines externen Skripts

Normalerweise werden Sie Skripte in eigenen .js-Dateien schreiben. Wenn Sie ein .js-Skript von Ihrer Webseite ausführen möchten, verwenden Sie einfach {{HTMLElement ('script')}} mit einem `src`-Attribut, das auf die Skriptdatei zeigt, mithilfe ihrer [URL](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL):

```html
<script src="path/to/my/script.js"></script>
```

### JavaScript innerhalb von HTML schreiben

Sie können auch JavaScript-Code zwischen `<script>`-Tags hinzufügen, anstatt ein `src`-Attribut bereitzustellen.

```html
<script>
  console.log("Some code");
</script>
```

Das ist praktisch, wenn Sie nur ein kleines Stück JavaScript benötigen, aber wenn Sie JavaScript in separaten Dateien halten, wird es Ihnen leichter fallen:

- sich auf Ihre Arbeit zu konzentrieren
- eigenständiges HTML zu schreiben
- strukturierte JavaScript-Anwendungen zu schreiben

> [!NOTE]
> Bei sowohl eingebetteten Skripten als auch externen Skripten ohne die Attribute [`defer`](/de/docs/Web/HTML/Reference/Elements/script#defer) oder [`async`](/de/docs/Web/HTML/Reference/Elements/script#async) wird das Skript sofort ausgeführt, wenn der Browser das `<script>`-Element beim Parsen des HTMLs entdeckt. Das bedeutet, dass das Skript auf keine HTML-Elemente zugreifen kann, die später im Dokument erscheinen. Um auf solche Elemente zuzugreifen, sollten Sie das Skript an das Ende des Dokumentenkörpers verschieben (direkt vor das schließende `</body>`-Tag) oder das `defer`-Attribut für externe Skripte verwenden.

## Verwendung des Skriptings auf zugängliche Weise

Barrierefreiheit ist ein wichtiges Thema in jeder Softwareentwicklung. JavaScript kann Ihre Website zugänglicher machen, wenn Sie es mit Bedacht einsetzen, oder es kann ein Desaster werden, wenn Sie Skripting unüberlegt verwenden. Um JavaScript zu Ihrem Vorteil arbeiten zu lassen, ist es sinnvoll, bestimmte bewährte Praktiken für das Hinzufügen von JavaScript zu kennen:

- **Stellen Sie sicher, dass alle Inhalte als (strukturierter) Text verfügbar sind.** Setzen Sie so viel wie möglich auf HTML für Ihre Inhalte. Wenn Sie zum Beispiel eine schöne JavaScript-Fortschrittsleiste implementiert haben, stellen Sie sicher, dass Sie diese mit passenden Textprozentsätzen im HTML ergänzen. Ebenso sollten Ihre Dropdown-Menüs als [ungeordnete Listen](/de/docs/Learn_web_development/Core/Structuring_content/Lists#unordered_lists) von [Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) strukturiert sein.
- **Machen Sie alle Funktionen über die Tastatur zugänglich.**
  - Lassen Sie Benutzer durch alle Bedienelemente (z.B. Links und Formulareingaben) in einer logischen Reihenfolge mit Tabulatoren navigieren.
  - Wenn Sie Pointer-Events (wie Maus- oder Touch-Events) verwenden, duplizieren Sie die Funktionalität mit Tastaturereignissen.
  - Testen Sie Ihre Seite nur mit einer Tastatur.
- **Setzen Sie keine Zeitlimits fest, noch raten Sie welche.** Es dauert länger, mit der Tastatur zu navigieren oder Inhalte vorgelesen zu bekommen. Sie können kaum vorhersagen, wie lange es für Benutzer oder Browser braucht, einen Prozess abzuschließen (besonders bei asynchronen Aktionen wie dem Laden von Ressourcen).
- **Halten Sie Animationen subtil und kurz ohne Blinken.** Blinken ist störend und kann [Krämpfe verursachen](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html). Zudem, wenn eine Animation länger als ein paar Sekunden dauert, geben Sie dem Benutzer eine Möglichkeit, sie abzubrechen.
- **Lassen Sie Benutzer Interaktionen initiieren.** Das bedeutet, aktualisieren Sie Inhalte nicht automatisch, leiten Sie nicht weiter oder aktualisieren Sie nicht automatisch. Verwenden Sie keine Karussells oder zeigen Sie keine Popups ohne Warnung an.
- **Haben Sie einen Plan B für Benutzer ohne JavaScript.** Leute haben möglicherweise JavaScript ausgeschaltet, um Geschwindigkeit und Sicherheit zu verbessern, und Benutzer haben oft Netzwerkprobleme, die das Laden von Skripten verhindern. Darüber hinaus können Drittanbieter-Skripte (Anzeigen, Tracking-Skripte, Browser-Erweiterungen) Ihre Skripte stören.
  - Mindestens sollten Sie eine kurze Nachricht mit {{HTMLElement("noscript")}} hinterlassen, wie diese: `<noscript>Um diese Seite zu nutzen, bitte aktivieren Sie JavaScript.</noscript>`
  - Im Idealfall replizieren Sie die JavaScript-Funktionalität mit HTML und serverseitigem Skripting, wann immer möglich.
  - Wenn Sie nur nach einfachen visuellen Effekten suchen, kann CSS oft die Aufgabe noch intuitiver erledigen.
  - _Da fast jeder **JavaScript aktiviert** hat, ist `<noscript>` keine Entschuldigung, unzugängliche Skripte zu schreiben._

## Erfahren Sie mehr

- {{htmlelement("script")}}
- {{htmlelement("noscript")}}
- [JavaScript mit Blick auf Barrierefreiheit schreiben](https://www.sitepoint.com/writing-javascript-with-accessibility-in-mind/) von Manuel Matuzovic (2017)
- [Barrierefreiheitsrichtlinien der W3C](https://w3c.github.io/wcag/guidelines/22/)
