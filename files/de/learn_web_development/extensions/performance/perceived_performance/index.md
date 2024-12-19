---
title: Wahrgenommene Leistung
slug: Learn_web_development/Extensions/Performance/Perceived_performance
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Performance/what_is_web_performance", "Learn_web_development/Extensions/Performance/Measuring_performance", "Learn_web_development/Extensions/Performance")}}

**{{Glossary("Perceived_performance", "Wahrgenommene Leistung")}}** ist ein subjektives Maß für die Leistung, Reaktionsfähigkeit und Zuverlässigkeit einer Website. Anders ausgedrückt: Wie schnell eine Website vom Benutzer wahrgenommen wird. Es ist schwieriger zu quantifizieren und zu messen als die tatsächliche Geschwindigkeit des Betriebs, aber vielleicht sogar noch wichtiger.

Dieser Artikel bietet eine kurze Einführung in die Faktoren, die die wahrgenommene Leistung beeinflussen, sowie eine Reihe von Werkzeugen zur Beurteilung und Verbesserung der Wahrnehmung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        >, und grundlegende Kenntnisse in
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >Client-seitigen Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Grundkenntnisse über die Benutzerwahrnehmung der Web-Performance zu erlangen.</td>
    </tr>
  </tbody>
</table>

## Überblick

Die Wahrnehmung, wie schnell (und reibungslos) Seiten laden und auf Benutzerinteraktionen reagieren, ist sogar noch wichtiger als die tatsächliche Zeit, die benötigt wird, um die Ressourcen abzurufen. Auch wenn Sie möglicherweise nicht in der Lage sind, Ihre Website physisch schneller laufen zu lassen, können Sie möglicherweise verbessern, wie schnell sie sich für Ihre Benutzer anfühlt.

Eine gute allgemeine Regel zur Verbesserung der wahrgenommenen Leistung ist, dass es in der Regel besser ist, eine schnelle Antwort und regelmäßige Statusaktualisierungen bereitzustellen, als den Benutzer warten zu lassen, bis ein Vorgang vollständig abgeschlossen ist (bevor irgendwelche Informationen bereitgestellt werden). Beispielsweise ist es besser, den Text anzuzeigen, sobald er eintrifft, anstatt auf alle Bilder und anderen Ressourcen zu warten. Auch wenn der Inhalt nicht vollständig heruntergeladen ist, kann der Benutzer sehen, dass etwas passiert, und er kann beginnen, mit dem Inhalt zu interagieren.

> [!NOTE]
> Die Zeit scheint für Benutzer schneller zu vergehen, die aktiv engagiert, abgelenkt oder unterhalten werden, als für diejenigen, die passiv auf etwas warten. Wo möglich, aktivieren und informieren Sie Benutzer, die darauf warten, dass eine Aufgabe abgeschlossen wird.

Ebenso ist es besser, eine "Ladeanimation" anzuzeigen, sobald ein Benutzer auf einen Link klickt, um einen langwierigen Vorgang auszuführen. Auch wenn sich die Zeit zur Durchführung des Vorgangs dadurch nicht verändert, fühlt sich die Website reaktionsfähiger an, und der Benutzer weiß, dass etwas Nützliches bearbeitet wird.

## Leistungsmetriken

Es gibt keine einzelne Metrik oder Test, der auf einer Website durchgeführt werden kann, um zu bewerten, wie sich ein Benutzer "fühlt". Es gibt jedoch eine Reihe von Metriken, die als "hilfreiche Indikatoren" dienen können:

- {{Glossary("First_paint", "First Paint")}}
  - : Die Zeit bis zum Start der ersten Maloperation. Beachten Sie, dass diese Änderung möglicherweise nicht sichtbar ist; es kann eine einfache Aktualisierung der Hintergrundfarbe oder etwas noch Unauffälligeres sein.
- {{Glossary("First_contentful_paint", "First Contentful Paint")}} (FCP)
  - : Die Zeit bis zur ersten bedeutenden Darstellung (z.B. von Text, Vordergrund- oder Hintergrundbild, Canvas oder SVG usw.). Beachten Sie, dass dieser Inhalt nicht unbedingt nützlich oder bedeutungsvoll ist.
- {{Glossary("First_meaningful_paint", "First Meaningful Paint")}} (FMP)
  - : Die Zeit, zu der nützlicher Inhalt auf dem Bildschirm gerendert wird.
- [Largest Contentful Paint](https://wicg.github.io/largest-contentful-paint/) (LCP)
  - : Die Renderzeit des größten sichtbaren Inhaltselements im Ansichtsfenster.
- {{Glossary("Speed_index", "Speed index")}}
  - : Misst die durchschnittliche Zeit, die benötigt wird, um die Pixel auf dem sichtbaren Bildschirm zu zeichnen.
- {{Glossary("Time_to_interactive", "Time to interactive")}}
  - : Die Zeit bis die Benutzeroberfläche für Benutzerinteraktionen verfügbar ist (d.h. die letzte {{Glossary("Long_task", "Long Task")}} des Ladeprozesses abgeschlossen ist).

## Verbesserung der Leistung

Hier sind einige Tipps und Tricks, um die wahrgenommene Leistung zu verbessern:

### Minimieren Sie die anfängliche Ladung

Um die wahrgenommene Leistung zu verbessern, minimieren Sie die ursprüngliche Seitenladung. Mit anderen Worten, laden Sie zuerst die Inhalte herunter, mit denen der Benutzer sofort interagieren wird, und laden Sie den Rest danach "im Hintergrund" herunter. Die Gesamtmenge der heruntergeladenen Inhalte kann tatsächlich zunehmen, aber der Benutzer _wartet_ nur auf eine sehr kleine Menge, sodass der Download schneller wirkt.

Trennen Sie interaktive Funktionalitäten von Inhalten, und laden Sie Text, Stile und Bilder, die beim ersten Laden sichtbar sind. Verzögern Sie das Laden (Lazy Load) von Bildern oder Skripten, die beim ersten Laden der Seite nicht verwendet oder sichtbar sind. Darüber hinaus sollten Sie die Assets, die Sie laden, optimieren. Bilder und Videos sollten im optimalsten Format, komprimiert und in der richtigen Größe bereitgestellt werden.

### Verhindern Sie springende Inhalte und andere Neuanordnungen

Bilder oder andere Assets, die dazu führen, dass Inhalte verschoben oder an einen anderen Ort springen, wie das Laden von Drittanbieter-Anzeigen, können die Seite weiterhin als ladend erscheinen lassen und sind schlecht für die wahrgenommene Leistung. Inhaltliches Neuanordnen ist besonders schlecht für die Benutzererfahrung, wenn es nicht durch Benutzerinteraktion initiiert wird. Wenn bestimmte Assets langsamer geladen werden als andere und Elemente nach dem Laden anderer Inhalte auf dem Bildschirm erscheinen, planen Sie voraus und lassen Sie im Layout Platz für sie, damit Inhalte nicht springen oder die Größe ändern, insbesondere nachdem die Seite interaktiv geworden ist.

### Verzögerungen bei Schriftarten vermeiden

Die Wahl der Schriftart ist wichtig. Die Auswahl einer geeigneten Schriftart kann das Benutzererlebnis erheblich verbessern. Aus Sicht der wahrgenommenen Leistung kann das "suboptimale Laden von Schriftarten" zu Flackern führen, wenn Text gestylt wird oder auf andere Schriftarten zurückgegriffen wird.

Stellen Sie sicher, dass Ersatzschriftarten die gleiche Größe und das gleiche Gewicht haben, damit die Änderung der Seite beim Laden der Schriftarten weniger auffällig ist.

### Interaktive Elemente sind interaktiv

Stellen Sie sicher, dass sichtbare interaktive Elemente immer interaktiv und reaktionsschnell sind. Wenn Eingabeelemente sichtbar sind, sollte der Benutzer ohne Verzögerung mit ihnen interagieren können. Benutzer empfinden etwas als träge, wenn Reaktionen länger als 50ms dauern. Sie finden, dass eine Seite schlecht funktioniert, wenn Inhalte langsamer als 16,67ms (oder 60 Bilder pro Sekunde) neu gezeichnet werden oder in ungleichmäßigen Abständen.

Machen Sie Dinge wie das intelligente Vervollständigen zu einem fortschrittlichen Enhancement: Verwenden Sie CSS, um das Eingabemodell anzuzeigen, JS, um die Autovervollständigung bei Verfügbarkeit hinzuzufügen.

### Gestalten Sie Aufgabeninitiatoren interaktiver

Eine Inhaltsanforderung bei `keydown` anstatt `keyup` kann die wahrgenommene Ladezeit des Inhalts um 200ms reduzieren. Eine interessante, aber unaufdringliche 200ms-Animation für dieses `keyup`-Ereignis hinzuzufügen, kann weitere 200ms der wahrgenommenen Ladezeit verringern. Sie sparen zwar nicht 400ms Zeit, aber der Benutzer hat nicht das Gefühl, dass er auf Inhalte wartet, bis er wirklich darauf wartet.

## Fazit

Indem Sie die Zeit reduzieren, die ein Benutzer auf _nützliche_ Inhalte warten muss, und die Website reaktionsschnell und fesselnd halten, wird der Benutzer das Gefühl haben, dass die Seite besser performt – selbst wenn die tatsächliche Zeit zum Laden der Ressourcen gleich bleibt.

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/what_is_web_performance", "Learn_web_development/Extensions/Performance/Measuring_performance", "Learn_web_development/Extensions/Performance")}}
