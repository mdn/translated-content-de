---
title: Wahrgenommene Leistung
slug: Learn_web_development/Extensions/Performance/Perceived_performance
l10n:
  sourceCommit: d64e1ee3cdbe602324fce3f7320d026f58186715
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/What_is_web_performance", "Learn_web_development/Extensions/Performance/Measuring_performance", "Learn_web_development/Extensions/Performance")}}

**{{Glossary("Perceived_performance", "Wahrgenommene Leistung")}}** ist ein subjektives Maß für die Leistung, Reaktionsfähigkeit und Zuverlässigkeit einer Website. Mit anderen Worten, wie schnell eine Website erscheint aus Sicht des Benutzers. Es ist schwieriger zu quantifizieren und zu messen als die tatsächliche Geschwindigkeit der Operation, aber vielleicht sogar noch wichtiger.

Dieser Artikel bietet eine kurze Einführung in die Faktoren, die die wahrgenommene Leistung beeinflussen, zusammen mit einer Reihe von Werkzeugen zur Bewertung und Verbesserung der Wahrnehmung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        > und Grundkenntnisse in
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >clientseitigen Web-Technologien</a
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

Die Wahrnehmung, wie schnell (und reibungslos) Seiten laden und auf Benutzerinteraktionen reagieren, ist noch wichtiger als die tatsächliche Zeit, die benötigt wird, um die Ressourcen abzurufen. Während Sie möglicherweise nicht in der Lage sind, Ihre Site physisch schneller zu machen, können Sie möglicherweise verbessern, wie schnell sie sich für Ihre Benutzer _anfühlt_.

Eine gute allgemeine Regel zur Verbesserung der wahrgenommenen Leistung ist, dass es in der Regel besser ist, eine schnelle Antwort und regelmäßige Statusaktualisierungen bereitzustellen, als den Benutzer warten zu lassen, bis eine Operation vollständig abgeschlossen ist (bevor Informationen bereitgestellt werden). Zum Beispiel ist es beim Laden einer Seite besser, den Text anzuzeigen, sobald er ankommt, anstatt auf alle Bilder und andere Ressourcen zu warten. Auch wenn der Inhalt nicht vollständig heruntergeladen wurde, kann der Benutzer sehen, dass etwas passiert, und er kann beginnen, mit dem Inhalt zu interagieren.

> [!NOTE]
> Die Zeit scheint für Benutzer schneller zu vergehen, die aktiv beschäftigt, abgelenkt oder unterhalten sind, als für diejenigen, die passiv darauf warten, dass etwas passiert. Wo möglich, sollten Sie Benutzer, die auf den Abschluss einer Aufgabe warten, aktiv einbeziehen und informieren.

Ähnlich ist es besser, eine "Ladeanimation" anzuzeigen, sobald ein Benutzer auf einen Link klickt, um eine lang laufende Operation auszuführen. Auch wenn dies die Zeit, die zur Durchführung der Operation benötigt wird, nicht ändert, fühlt sich die Site reaktionsfähiger an, und der Benutzer weiß, dass etwas Nützliches bearbeitet wird.

## Leistungskennzahlen

Es gibt keine einzelne Kennzahl oder keinen einzelnen Test, der auf einer Site ausgeführt werden kann, um zu bewerten, wie sich ein Benutzer "fühlt". Es gibt jedoch eine Reihe von Kennzahlen, die als "hilfreiche Indikatoren" dienen können:

- {{Glossary("First_paint", "First Paint")}}
  - : Die Zeit bis zum Beginn der ersten Maloperation. Beachten Sie, dass diese Änderung möglicherweise nicht sichtbar ist; es kann sich um ein einfaches Hintergrundfarben-Update oder etwas noch Unauffälligeres handeln.
- {{Glossary("First_contentful_paint", "First Contentful Paint")}} (FCP)
  - : Die Zeit bis zur ersten signifikanten Darstellung (z. B. von Text, Vorder- oder Hintergrundbild, Leinwand oder SVG usw.). Beachten Sie, dass dieser Inhalt nicht unbedingt nützlich oder sinnvoll ist.
- {{Glossary("First_meaningful_paint", "First Meaningful Paint")}} (FMP)
  - : Die Zeit, zu der nützliche Inhalte auf dem Bildschirm dargestellt werden.
- [Largest Contentful Paint](https://wicg.github.io/largest-contentful-paint/) (LCP)
  - : Die Renderzeit des größten sichtbaren Inhaltselements im Ansichtsfenster.
- {{Glossary("Speed_index", "Speed index")}}
  - : Misst die durchschnittliche Zeit, bis die Pixel auf dem sichtbaren Bildschirm gezeichnet sind.
- {{Glossary("Time_to_interactive", "Time to interactive")}}
  - : Zeit bis zur Verfügbarkeit der Benutzeroberfläche für Benutzerinteraktionen (d.h. der letzte {{Glossary("Long_task", "long task")}} des Ladeprozesses ist abgeschlossen).

## Leistung verbessern

Hier sind einige Tipps und Tricks, um die wahrgenommene Leistung zu verbessern:

### Minimieren Sie die Anfangsladung

Um die wahrgenommene Leistung zu verbessern, minimieren Sie die ursprüngliche Seitenladung. Laden Sie mit anderen Worten zuerst die Inhalte herunter, mit denen der Benutzer sofort interagieren wird, und laden Sie den Rest "im Hintergrund" herunter. Die Gesamtmenge des heruntergeladenen Inhalts kann tatsächlich zunehmen, aber der Benutzer muss nur auf eine sehr kleine Menge _warten_, sodass der Download schneller erscheint.

Trennen Sie interaktive Funktionen von Inhalten und laden Sie Texte, Stile und Bilder, die bei der anfänglichen Ladung sichtbar sind. Verzögern oder laden Sie Bilder oder Skripte, die bei der anfänglichen Seitenladung nicht verwendet oder sichtbar sind, nachträglich. Zusätzlich sollten Sie die geladenen Assets optimieren. Bilder und Videos sollten im optimalsten Format, komprimiert und in der richtigen Größe bereitgestellt werden.

### Verhindern Sie springende Inhalte und andere Neuanordnungen

Bilder oder andere Assets, die dazu führen, dass Inhalte nach unten geschoben oder an einen anderen Ort verschoben werden, wie das Laden von Werbeanzeigen von Drittanbietern, können die Seite so erscheinen lassen, als würde sie noch geladen, und sind schlecht für die wahrgenommene Leistung. Neuanordnen von Inhalten ist besonders schlecht für die Benutzererfahrung, wenn es nicht durch Benutzerinteraktion initiiert wird. Wenn einige Assets langsamer geladen werden als andere und Elemente nach dem bereits auf dem Bildschirm dargestellten Inhalt geladen werden, planen Sie voraus und lassen Sie Platz im Layout für sie, damit der Inhalt nicht springt oder in der Größe verändert wird, insbesondere nachdem die Site interaktiv geworden ist.

### Vermeiden Sie Verzögerungen bei Schriftdateien

Die Schriftartenwahl ist wichtig. Die Auswahl einer passenden Schriftart kann die Benutzererfahrung erheblich verbessern. Aus der Sicht der wahrgenommenen Leistung kann "suboptimales Schriftimportieren" zu Flackern führen, wenn Text gestylt wird oder wenn auf andere Schriftarten zurückgegriffen wird.

Stellen Sie sicher, dass die Ersatzschriftarten dieselbe Größe und Gewicht haben, damit, wenn die Schriftarten geladen werden, die Seitenänderung weniger auffällig ist.

### Interaktive Elemente sind interaktiv

Stellen Sie sicher, dass sichtbare interaktive Elemente immer interaktiv und reaktionsfähig sind. Wenn Eingabeelemente sichtbar sind, sollte der Benutzer in der Lage sein, ohne Verzögerung mit ihnen zu interagieren. Benutzer empfinden etwas als träge, wenn es mehr als 50 ms dauert, zu reagieren. Sie empfinden, dass eine Seite schlecht funktioniert, wenn der Inhalt langsamer als 16,67 ms (oder 60 Bilder pro Sekunde) neu gezeichnet wird oder in ungleichmäßigen Intervallen neu gezeichnet wird.

Machen Sie Dinge wie Autovervollständigung zu einer progressiven Verbesserung: Verwenden Sie CSS, um das Eingabemodell anzuzeigen, JS, um die Autovervollständigung hinzuzufügen, sobald diese verfügbar ist.

### Task-Initiatoren erscheinen interaktiver

Eine Inhaltsanforderung beim `keydown` statt beim Warten auf `keyup` auszulösen, kann die wahrgenommene Ladezeit des Inhalts um 200 ms reduzieren. Das Hinzufügen einer interessanten, aber unaufdringlichen 200-ms-Animation zu diesem `keyup` Ereignis kann weitere 200 ms der wahrgenommenen Ladezeit reduzieren. Sie sparen keine 400 ms Zeit, aber der Benutzer hat nicht das Gefühl, auf Inhalte zu warten, bis er, na ja, bis er auf Inhalte wartet.

## Fazit

Indem Sie die Zeit reduzieren, die ein Benutzer auf _nützliche_ Inhalte warten muss, und die Website reaktionsfähig und ansprechend halten, werden die Benutzer das Gefühl haben, dass die Website besser funktioniert — selbst wenn sich die tatsächliche Ladezeit der Ressourcen nicht ändert.

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/What_is_web_performance", "Learn_web_development/Extensions/Performance/Measuring_performance", "Learn_web_development/Extensions/Performance")}}
