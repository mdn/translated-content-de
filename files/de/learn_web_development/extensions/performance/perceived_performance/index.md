---
title: Wahrgenommene Leistung
slug: Learn_web_development/Extensions/Performance/Perceived_performance
l10n:
  sourceCommit: 8db892b3e7ca294621898441e7db2481e0e6d939
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/What_is_web_performance", "Learn_web_development/Extensions/Performance/Measuring_performance", "Learn_web_development/Extensions/Performance")}}

**{{Glossary("Perceived_performance", "Wahrgenommene Leistung")}}** ist ein subjektives Maß für die Leistung, Reaktionsfähigkeit und Zuverlässigkeit einer Website. Mit anderen Worten, wie schnell eine Website dem Benutzer erscheint. Es ist schwerer zu quantifizieren und zu messen als die tatsächliche Ausführungsgeschwindigkeit, aber möglicherweise noch wichtiger.

Dieser Artikel gibt eine kurze Einführung in die Faktoren, die die wahrgenommene Leistung beeinflussen, zusammen mit einer Reihe von Tools zur Beurteilung und Verbesserung der Wahrnehmung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        >, und Grundkenntnisse über
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >client-seitige Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Ein grundlegendes Verständnis der Benutzerwahrnehmung der Webleistung erlangen.</td>
    </tr>
  </tbody>
</table>

## Überblick

Die Wahrnehmung, wie schnell (und reibungslos) Seiten laden und auf Benutzerinteraktionen reagieren, ist noch wichtiger als die tatsächliche Zeit, die für das Abrufen der Ressourcen benötigt wird. Während Sie möglicherweise nicht in der Lage sind, Ihre Website physisch schneller laufen zu lassen, können Sie dennoch verbessern, wie schnell sie sich für Ihre Benutzer _anfühlt_.

Eine gute allgemeine Regel zur Verbesserung der wahrgenommenen Leistung ist, dass es normalerweise besser ist, eine schnelle Antwort und regelmäßig Statusaktualisierungen bereitzustellen, als den Benutzer warten zu lassen, bis eine Operation vollständig abgeschlossen ist (bevor Informationen bereitgestellt werden). Zum Beispiel ist es besser, beim Laden einer Seite den Text anzuzeigen, wenn er ankommt, anstatt auf alle Bilder und andere Ressourcen zu warten. Auch wenn der Inhalt nicht vollständig heruntergeladen wurde, kann der Benutzer sehen, dass etwas passiert und beginnen, mit dem Inhalt zu interagieren.

> [!NOTE]
> Die Zeit scheint für Benutzer, die aktiv beschäftigt, abgelenkt oder unterhalten sind, schneller zu vergehen als für diejenigen, die passiv auf etwas warten. Wo möglich, sollten Sie aktiv die Benutzer einbinden und informieren, die auf die Fertigstellung einer Aufgabe warten.

Ähnlich ist es besser, eine "Ladeanimation" anzuzeigen, sobald ein Benutzer auf einen Link klickt, um eine lang andauernde Operation durchzuführen. Während sich dadurch die Zeit zur Fertigstellung der Operation nicht ändert, fühlt sich die Website reaktionsfähiger an und der Benutzer weiß, dass sie an etwas Nützlichem arbeitet.

## Leistungsmetriken

Es gibt keine einzelne Metrik oder Test, der auf einer Website durchgeführt werden kann, um auszuwerten, wie ein Benutzer "fühlt". Es gibt jedoch eine Reihe von Metriken, die als "hilfreiche Indikatoren" dienen können:

- {{Glossary("First_paint", "First Paint")}}
  - : Die Zeit bis zum Beginn der ersten Maloperation. Beachten Sie, dass diese Änderung möglicherweise nicht sichtbar ist; es kann sich um ein einfaches Hintergrundfarbenupdate oder etwas noch Unauffälligeres handeln.
- {{Glossary("First_contentful_paint", "First Contentful Paint")}} (FCP)
  - : Die Zeit bis zum ersten signifikanten Rendering (z.B. von Text, Vorder- oder Hintergrundbild, Canvas oder SVG, etc.). Beachten Sie, dass dieser Inhalt nicht unbedingt nützlich oder bedeutungsvoll ist.
- {{Glossary("First_meaningful_paint", "First Meaningful Paint")}} (FMP)
  - : Der Zeitpunkt, zu dem nützlicher Inhalt auf dem Bildschirm gerendert wird.
- [Largest Contentful Paint](https://wicg.github.io/largest-contentful-paint/) (LCP)
  - : Die Renderzeit des größten Inhaltselements, das im sichtbaren Bereich sichtbar ist.
- {{Glossary("Speed_index", "Speed index")}}
  - : Misst die durchschnittliche Zeit, bis die Pixel auf dem sichtbaren Bildschirm gemalt sind.
- {{Glossary("Time_to_interactive", "Time to interactive")}}
  - : Zeit bis die Benutzeroberfläche zur Benutzerinteraktion verfügbar ist (d.h. die letzte {{Glossary("Long_task", "lang andauernde Aufgabe")}} des Ladeprozesses abgeschlossen ist).

## Verbesserung der Leistung

Hier sind einige Tipps und Tricks, um die wahrgenommene Leistung zu verbessern:

### Minimieren Sie die anfängliche Ladezeit

Um die wahrgenommene Leistung zu verbessern, minimieren Sie die ursprüngliche Seitenladezeit. Mit anderen Worten, laden Sie zuerst den Inhalt herunter, mit dem der Benutzer sofort interagieren wird, und laden Sie den Rest "im Hintergrund" herunter. Die Gesamtmenge der heruntergeladenen Inhalte kann tatsächlich zunehmen, aber der Benutzer "wartet" nur auf eine sehr kleine Menge, sodass sich der Download schneller anfühlt.

Trennen Sie interaktive Funktionalität vom Inhalt und laden Sie Text, Stile und Bilder, die beim ersten Laden sichtbar sind. Verzögern oder laden Sie Bilder, iFrames, Medien oder Skripte, die beim anfänglichen Laden der Seite nicht verwendet oder sichtbar sind, später oder lazy. Zusätzlich sollten Sie die Assets optimieren, die Sie laden. Bilder und Videos sollten im optimalsten Format, komprimiert und in der richtigen Größe bereitgestellt werden.

### Verhindern Sie springende Inhalte und andere Umflüsse

Bilder oder andere Assets, die dazu führen, dass Inhalte nach unten gedrückt oder an eine andere Stelle verschoben werden, wie das Laden von Anzeigen Dritter, können den Eindruck erwecken, dass die Seite noch geladen wird, und sind schlecht für die wahrgenommene Leistung. Inhaltliche Umströmung ist besonders schlecht für die Benutzererfahrung, wenn sie nicht durch Benutzerinteraktion initiiert wird. Wenn einige Assets langsamer laden als andere, und Elemente geladen werden, nachdem anderer Inhalt bereits auf dem Bildschirm gemalt wurde, planen Sie im Voraus und lassen Sie im Layout Platz für sie, damit Inhalt nicht springt oder seine Größe ändert, insbesondere nachdem die Website interaktiv geworden ist.

### Vermeiden Sie Verzögerungen beim Laden von Schriftarten

Die Schriftartwahl ist wichtig. Die Auswahl einer geeigneten Schriftart kann die Benutzererfahrung erheblich verbessern. Aus der Sicht der wahrgenommenen Leistung können "nicht optimale Schriftarteinbindungen" zu Flackern führen, wenn Text formatiert wird oder auf andere Schriftarten zurückgreift.

Machen Sie Fallback-Schriftarten in der gleichen Größe und dem gleichen Gewicht, sodass bei Ladezeiten die Seitenänderung weniger auffällt.

### Interaktive Elemente sind interaktiv

Stellen Sie sicher, dass sichtbare interaktive Elemente immer interaktiv und reaktionsfähig sind. Wenn Eingabeelemente sichtbar sind, sollte der Benutzer in der Lage sein, ohne Verzögerung mit ihnen zu interagieren. Benutzer empfinden etwas als träge, wenn sie mehr als 50ms zum Reagieren brauchen. Sie empfinden, dass eine Seite schlecht funktioniert, wenn Inhalte langsamer als 16,67ms (oder 60 Bilder pro Sekunde) neu gezeichnet werden oder in unregelmäßigen Intervallen.

Machen Sie Dinge wie Autovervollständigungen zu einer progressiven Verbesserung: Verwenden Sie CSS, um ein Eingabemodul anzuzeigen, JS, um Autovervollständigungen hinzuzufügen, sobald sie verfügbar sind.

### Lassen Sie Initiatoren von Aufgaben interaktiver erscheinen

Eine Inhaltsanfrage bei `keydown` anstelle des Wartens auf `keyup` kann die wahrgenommene Ladezeit des Inhalts um 200ms reduzieren. Eine interessante, aber unaufdringliche 200ms-Animation für dieses `keyup`-Ereignis hinzuzufügen, kann weitere 200ms der wahrgenommenen Ladezeit reduzieren. Sie sparen zwar keine 400ms Zeit, aber der Benutzer hat nicht das Gefühl, auf Inhalte zu warten, bis, nun ja, bis er auf Inhalte wartet.

## Fazit

Indem Sie die Zeit reduzieren, die ein Benutzer auf _nützliche_ Inhalte warten muss, und die Website reaktionsschnell und ansprechend halten, wird der Benutzer das Gefühl haben, dass die Website besser funktioniert — auch wenn die tatsächliche Zeit zum Laden von Ressourcen gleich bleibt.

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/What_is_web_performance", "Learn_web_development/Extensions/Performance/Measuring_performance", "Learn_web_development/Extensions/Performance")}}
