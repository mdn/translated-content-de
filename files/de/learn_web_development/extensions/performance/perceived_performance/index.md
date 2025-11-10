---
title: Wahrgenommene Performance
slug: Learn_web_development/Extensions/Performance/Perceived_performance
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/what_is_web_performance", "Learn_web_development/Extensions/Performance/Measuring_performance", "Learn_web_development/Extensions/Performance")}}

**{{Glossary("Perceived_performance", "Wahrgenommene Performance")}}** ist ein subjektives Maß für die Leistung, Reaktionsfähigkeit und Zuverlässigkeit einer Website. Anders ausgedrückt, wie schnell eine Website dem Benutzer erscheint. Es ist schwieriger zu quantifizieren und zu messen als die tatsächliche Betriebsgeschwindigkeit, aber möglicherweise noch wichtiger.

Dieser Artikel bietet eine kurze Einführung in die Faktoren, die die wahrgenommene Leistung beeinflussen, sowie in eine Reihe von Tools zur Bewertung und Verbesserung der Wahrnehmung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Basissoftware installiert</a
        > und grundlegende Kenntnisse in
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >client-seitigen Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Grundlegendes Verständnis der Benutzerwahrnehmung von Web-Performance gewinnen.</td>
    </tr>
  </tbody>
</table>

## Überblick

Die Wahrnehmung, wie schnell (und flüssig) Seiten laden und auf Benutzerinteraktionen reagieren, ist noch wichtiger als die tatsächliche Zeit, die zum Abrufen der Ressourcen benötigt wird. Auch wenn Sie Ihre Website möglicherweise nicht physisch schneller machen können, können Sie doch verbessern, wie schnell sie sich für Ihre Benutzer _anfühlt_.

Eine gute allgemeine Regel zur Verbesserung der wahrgenommenen Performance ist, dass es normalerweise besser ist, eine schnelle Reaktion und regelmäßige Statusupdates zu bieten, als den Benutzer warten zu lassen, bis ein Vorgang vollständig abgeschlossen ist (bevor irgendwelche Informationen bereitgestellt werden). Zum Beispiel ist es beim Laden einer Seite besser, den Text anzuzeigen, wenn er eintrifft, anstatt auf alle Bilder und andere Ressourcen zu warten. Auch wenn der Inhalt noch nicht vollständig heruntergeladen ist, kann der Benutzer sehen, dass etwas passiert, und er kann beginnen, mit dem Inhalt zu interagieren.

> [!NOTE]
> Die Zeit scheint schneller zu vergehen für Benutzer, die aktiv involviert, abgelenkt oder unterhalten sind, als für diejenigen, die passiv darauf warten, dass etwas passiert. Wo möglich, sollten Benutzer, die auf den Abschluss einer Aufgabe warten, aktiv eingebunden und informiert werden.

Ähnlich ist es besser, eine "Ladeanimation" anzuzeigen, sobald ein Benutzer auf einen Link klickt, um einen lang andauernden Vorgang auszuführen. Auch wenn sich die Dauer des Vorgangs dadurch nicht ändert, fühlt sich die Seite reaktionsfreudiger an, und der Benutzer weiß, dass etwas Sinnvolles bearbeitet wird.

## Performance-Metriken

Es gibt keine einzelne Metrik oder keinen einzelnen Test, der auf einer Website ausgeführt werden kann, um zu bewerten, wie ein Benutzer "fühlt". Es gibt jedoch eine Reihe von Metriken, die als "hilfreiche Indikatoren" dienen können:

- {{Glossary("First_paint", "First Paint")}}
  - : Die Zeit bis zum Beginn des ersten Malvorgangs. Beachten Sie, dass diese Änderung möglicherweise nicht sichtbar ist; es kann sich um ein einfaches Hintergrundfarb-Update oder etwas noch Unauffälligeres handeln.
- {{Glossary("First_contentful_paint", "First Contentful Paint")}} (FCP)
  - : Die Zeit bis zur ersten signifikanten Darstellung (z.B. von Text, Vordergrund- oder Hintergrundbild, Leinwand oder SVG, etc.). Beachten Sie, dass dieser Inhalt nicht unbedingt nützlich oder bedeutungsvoll ist.
- {{Glossary("First_meaningful_paint", "First Meaningful Paint")}} (FMP)
  - : Die Zeit, zu der nützlicher Inhalt auf dem Bildschirm gerendert wird.
- [Largest Contentful Paint](https://wicg.github.io/largest-contentful-paint/) (LCP)
  - : Die Renderzeit des größten Inhaltselements, das im Sichtbereich sichtbar ist.
- {{Glossary("Speed_index", "Speed index")}}
  - : Misst die durchschnittliche Zeit, die benötigt wird, um die Pixel auf dem sichtbaren Bildschirm zu bemalen.
- {{Glossary("Time_to_interactive", "Time to interactive")}}
  - : Zeit bis die Benutzeroberfläche für Benutzerinteraktionen verfügbar ist (d.h. der letzte {{Glossary("Long_task", "long task")}} des Ladeprozesses abgeschlossen ist).

## Verbesserung der Performance

Hier sind einige Tipps und Tricks, um die wahrgenommene Performance zu verbessern:

### Minimieren Sie das initiale Laden

Um die wahrgenommene Performance zu verbessern, minimieren Sie das ursprüngliche Laden der Seite. Laden Sie mit anderen Worten zuerst den Inhalt herunter, mit dem der Benutzer sofort interagieren wird, und laden Sie den Rest danach "im Hintergrund" herunter. Die insgesamt heruntergeladene Inhaltsmenge kann tatsächlich zunehmen, aber der Benutzer muss nur auf eine sehr kleine Menge \_warten\_\_, sodass der Download schneller erscheint.

Trennen Sie interaktive Funktionalitäten vom Inhalt und laden Sie Text, Styles und Bilder, die beim ersten Laden sichtbar sind. Verzögern oder laden Sie Bilder oder Skripte nach Bedarf, die beim ersten Seitenaufruf nicht verwendet oder sichtbar sind. Darüber hinaus sollten Sie die Ressourcen, die Sie laden, optimieren. Bilder und Videos sollten im optimalsten Format, komprimiert und in der richtigen Größe bereitgestellt werden.

### Verhindern Sie springende Inhalte und andere Neuanordnungen

Bilder oder andere Assets, die Inhalte nach unten verschieben oder an einen anderen Ort springen lassen, wie das Laden von Drittanbieter-Anzeigen, können den Eindruck erwecken, dass die Seite noch lädt und sind schlecht für die wahrgenommene Performance. Inhalte, die neugeordnet werden, sind besonders schlecht für die Benutzererfahrung, wenn sie nicht durch Benutzerinteraktionen initiiert werden. Wenn einige Assets langsamer geladen werden sollen als andere und Elemente nach anderen Inhalten auf dem Bildschirm erscheinen, planen Sie im Voraus und lassen Sie Platz im Layout für sie, sodass der Inhalt nicht springt oder seine Größe ändert, insbesondere nachdem die Seite interaktiv geworden ist.

### Verzögerungen bei Schriftdateien vermeiden

Die Schriftwahl ist wichtig. Die Auswahl einer geeigneten Schriftart kann das Benutzererlebnis erheblich verbessern. Aus Sicht der wahrgenommenen Performance können "suboptimale Schriftimporte" dazu führen, dass beim Stilwechsel von Texten flackert oder es zu Schriftart-Rückfällen kommt.

Machen Sie Ersatzschriftarten in derselben Größe und Gewichtung, sodass die Seitenänderung weniger auffällig ist, wenn Schriftarten geladen werden.

### Interaktive Elemente sind interaktiv

Stellen Sie sicher, dass sichtbare interaktive Elemente immer interaktiv und reaktionsfähig sind. Wenn Eingabeelemente sichtbar sind, sollte der Benutzer ohne Verzögerung mit ihnen interagieren können. Benutzer haben das Gefühl, dass etwas langsam ist, wenn sie mehr als 50ms brauchen, um zu reagieren. Sie haben das Gefühl, dass eine Seite schlecht funktioniert, wenn Inhalte langsamer als 16,67ms (oder 60 Frames pro Sekunde) neu gezeichnet werden oder in ungleichmäßigen Intervallen neu gezeichnet werden.

Machen Sie Dinge wie Vorauseinträge zu einer progressiven Verbesserung: Verwenden Sie CSS, um ein Eingabe-Modul anzuzeigen, JS, um Autovervollständigungen hinzuzufügen, sobald sie verfügbar sind.

### Lassen Sie Aufgabeninitiatoren interaktiver erscheinen

Einen Inhaltsantrag bei `keydown` anstatt bei `keyup` zu stellen, kann die wahrgenommene Ladezeit des Inhalts um 200ms verkürzen. Eine interessante, aber unaufdringliche 200ms-Animation zu diesem `keyup`-Ereignis hinzuzufügen, kann weitere 200ms der wahrgenommenen Ladezeit reduzieren. Sie sparen keine 400ms Zeit, aber der Benutzer hat nicht das Gefühl, auf Inhalt zu warten, bis, nun ja, bis sie auf Inhalt warten.

## Fazit

Indem Sie die Zeit verringern, die ein Benutzer auf _nützlichen_ Inhalt warten muss, und die Seite reaktionsfähig und spannend halten, wird der Benutzer das Gefühl haben, dass die Seite besser performt – auch wenn die tatsächliche Ladezeit der Ressourcen gleich bleibt.

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/what_is_web_performance", "Learn_web_development/Extensions/Performance/Measuring_performance", "Learn_web_development/Extensions/Performance")}}
