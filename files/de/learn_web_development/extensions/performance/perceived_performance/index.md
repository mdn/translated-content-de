---
title: Wahrgenommene Leistung
slug: Learn_web_development/Extensions/Performance/Perceived_performance
l10n:
  sourceCommit: f4c14731a1a157fc8d8f7357ac4d74d14a7d7fb5
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/What_is_web_performance", "Learn_web_development/Extensions/Performance/Measuring_performance", "Learn_web_development/Extensions/Performance")}}

**{{Glossary("Perceived_performance", "Wahrgenommene Leistung")}}** ist ein subjektives Maß für die Leistung, Reaktionsfähigkeit und Zuverlässigkeit einer Website. Anders ausgedrückt, wie schnell eine Website dem Nutzer erscheint. Es ist schwieriger zu quantifizieren und zu messen als die tatsächliche Geschwindigkeit des Betriebs, aber möglicherweise noch wichtiger.

Dieser Artikel bietet eine kurze Einführung in die Faktoren, die die wahrgenommene Leistung beeinflussen, zusammen mit einer Reihe von Tools zur Bewertung und Verbesserung der Wahrnehmung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende installierte Software</a
        > und grundlegende Kenntnisse der
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >clientseitigen Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Grundlegendes Verständnis der Nutzerwahrnehmung der Web-Performance zu gewinnen.</td>
    </tr>
  </tbody>
</table>

## Überblick

Die Wahrnehmung, wie schnell (und reibungslos) Seiten laden und auf Benutzerinteraktionen reagieren, ist noch wichtiger als die tatsächliche Zeit, die zum Abrufen der Ressourcen benötigt wird. Obwohl Sie Ihre Website möglicherweise nicht physisch schneller machen können, können Sie dennoch verbessern, wie schnell sie sich für Ihre Benutzer _anfühlt_.

Eine gute allgemeine Regel zur Verbesserung der wahrgenommenen Leistung ist, dass es in der Regel besser ist, eine schnelle Antwort und regelmäßige Statusaktualisierungen zu bieten, als den Benutzer warten zu lassen, bis eine Operation vollständig abgeschlossen ist (bevor irgendwelche Informationen bereitgestellt werden). Zum Beispiel ist es beim Laden einer Seite besser, den Text anzuzeigen, sobald er ankommt, anstatt auf alle Bilder und andere Ressourcen zu warten. Auch wenn der Inhalt nicht vollständig heruntergeladen ist, kann der Benutzer sehen, dass etwas passiert, und er kann beginnen, mit dem Inhalt zu interagieren.

> [!NOTE]
> Die Zeit scheint schneller zu vergehen für Benutzer, die aktiv beschäftigt, abgelenkt oder unterhalten sind, als für diejenigen, die passiv auf etwas warten. Wenn möglich, engagieren Sie sich aktiv und informieren Sie Benutzer, die darauf warten, dass eine Aufgabe abgeschlossen wird.

Ähnlich ist es besser, eine "Ladeanimation" anzuzeigen, sobald ein Benutzer auf einen Link klickt, um eine lang andauernde Operation auszuführen. Obwohl dies die Zeit zur Fertigstellung der Operation nicht ändert, fühlt sich die Seite reaktionsfähiger an, und der Benutzer weiß, dass daran gearbeitet wird, etwas Nützliches zu tun.

## Leistungskennzahlen

Es gibt keine einzige Kennzahl oder keinen Test, der auf einer Website ausgeführt werden kann, um zu bewerten, wie sich ein Benutzer "fühlt". Es gibt jedoch eine Reihe von Metriken, die als "hilfreiche Indikatoren" dienen können:

- {{Glossary("First_paint", "First Paint")}}
  - : Die Zeit bis zum Beginn der ersten Maloperation. Beachten Sie, dass diese Änderung möglicherweise nicht sichtbar ist; es kann ein einfaches Hintergrundfarben-Update oder etwas noch weniger Auffälliges sein.
- {{Glossary("First_contentful_paint", "First Contentful Paint")}} (FCP)
  - : Die Zeit bis zur ersten signifikanten Darstellung (z.B. von Text, Vordergrund- oder Hintergrundbild, Canvas oder SVG, etc.). Beachten Sie, dass dieser Inhalt nicht unbedingt nützlich oder bedeutsam ist.
- {{Glossary("First_meaningful_paint", "First Meaningful Paint")}} (FMP)
  - : Der Zeitpunkt, an dem nützlicher Inhalt auf den Bildschirm gerendert wird.
- [Largest Contentful Paint](https://wicg.github.io/largest-contentful-paint/) (LCP)
  - : Die Rendertime des größten sichtbaren Inhaltselements im Viewport.
- {{Glossary("Speed_index", "Speed index")}}
  - : Misst die durchschnittliche Zeit, bis Pixel auf dem sichtbaren Bildschirm gemalt werden.
- {{Glossary("Time_to_interactive", "Time to interactive")}}
  - : Zeit, bis die Benutzeroberfläche für Benutzerinteraktionen verfügbar ist (d.h. die letzte {{Glossary("Long_task", "lange Aufgabe")}} des Ladeprozesses abgeschlossen ist).

## Verbesserung der Leistung

Hier sind einige Tipps und Tricks, um die wahrgenommene Leistung zu verbessern:

### Minimieren der initialen Ladezeit

Um die wahrgenommene Leistung zu verbessern, minimieren Sie das ursprüngliche Laden der Seite. Mit anderen Worten, laden Sie zuerst den Inhalt herunter, mit dem der Benutzer sofort interagieren wird, und laden Sie den Rest später "im Hintergrund" herunter. Die gesamte Menge des heruntergeladenen Inhalts kann tatsächlich zunehmen, aber der Benutzer _wartet_ nur auf eine sehr kleine Menge, sodass der Download schneller zu sein scheint.

Trennen Sie interaktive Funktionalität von Inhalten und laden Sie Text, Styles und Bilder, die beim ersten Laden sichtbar sind. Verzögern oder laden Sie Bilder, Iframes, Medien oder Skripte, die beim ersten Seitenaufruf nicht verwendet oder sichtbar sind, später nach. Darüber hinaus sollten Sie die geladenen Ressourcen optimieren. Bilder und Videos sollten im optimalsten Format, komprimiert und in der richtigen Größe bereitgestellt werden.

### Verhindern von sich verschiebendem Inhalt und anderen Reflows

Bilder oder andere Assets, die dazu führen, dass Inhalte verschoben oder an einen anderen Ort gedrängt werden, wie das Laden von Drittanbieter-Anzeigen, können den Eindruck erwecken, dass die Seite immer noch lädt, und sind schlecht für die wahrgenommene Leistung. Content-Reflows sind besonders schlecht für die Benutzererfahrung, wenn sie nicht durch Benutzerinteraktion ausgelöst werden. Wenn einige Assets langsamer als andere geladen werden und Elemente erst laden, nachdem anderer Inhalt bereits auf den Bildschirm gemalt wurde, planen Sie im Voraus und lassen Sie Platz im Layout, damit sich Inhalte nicht verschieben oder die Größe ändern, insbesondere nachdem die Website interaktiv geworden ist.

### Vermeiden von Verzögerungen bei Schriftartdateien

Die Schriftartwahl ist wichtig. Die Auswahl einer geeigneten Schriftart kann das Benutzererlebnis stark verbessern. Aus Sicht der wahrgenommenen Leistung kann das "Importieren suboptimaler Schriftarten" zu Flackern führen, wenn Text gestylt wird oder auf andere Schriftarten zurückgegriffen wird.

Wählen Sie Ausweichschriftarten mit derselben Größe und demselben Gewicht, sodass die Seitenänderung weniger wahrnehmbar ist, wenn Schriftarten geladen werden.

### Interaktive Elemente sind interaktiv

Stellen Sie sicher, dass sichtbare interaktive Elemente immer interaktiv und reaktionsschnell sind. Wenn Eingabeelemente sichtbar sind, sollte der Benutzer ohne Verzögerung mit ihnen interagieren können. Benutzer empfinden etwas als verzögert, wenn es mehr als 50 ms dauert zu reagieren. Sie haben den Eindruck, dass eine Seite schlecht reagiert, wenn Inhalte langsamer als 16,67 ms (oder 60 Bilder pro Sekunde) neu gemalt werden oder in unregelmäßigen Abständen.

Machen Sie Funktionen wie Voraussage-Typing zu einer progressiven Verbesserung: Verwenden Sie CSS, um Eingabemodal anzuzeigen, JS, um Autovervollständigung hinzuzufügen, sobald verfügbar.

### Gestalten Sie Aufgabeninitiatoren interaktiver

Das Anfordern von Inhalten bei `keydown` anstelle von `keyup` kann die wahrgenommene Ladezeit des Inhalts um 200 ms reduzieren. Das Hinzufügen einer interessanten, aber unaufdringlichen 200-ms-Animation zu diesem `keyup`-Ereignis kann weitere 200 ms der wahrgenommenen Ladezeit reduzieren. Sie sparen nicht 400 ms an Zeit, aber der Benutzer hat nicht das Gefühl, dass er auf Inhalte wartet, bis, naja, bis er tatsächlich wartet.

## Fazit

Indem Sie die Zeit reduzieren, die ein Benutzer auf _nützlichen_ Inhalt warten muss, und die Website reaktionsfähig und ansprechend halten, wird sich der Benutzer fühlen, als ob die Website besser performt — auch wenn die tatsächliche Ladezeit der Ressourcen gleich bleibt.

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/What_is_web_performance", "Learn_web_development/Extensions/Performance/Measuring_performance", "Learn_web_development/Extensions/Performance")}}
