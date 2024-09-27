---
title: Wahrgenommene Leistung
slug: Learn/Performance/Perceived_performance
l10n:
  sourceCommit: 865acb22b74a49927b98267566369d4677414f53
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Performance/what_is_web_performance", "Learn/Performance/Measuring_performance", "Learn/Performance")}}

**[Wahrgenommene Leistung](/de/docs/Glossary/Perceived_performance)** ist ein subjektives Maß für die Leistung, Reaktionsfähigkeit und Zuverlässigkeit einer Website. Anders ausgedrückt: wie schnell eine Website dem Nutzer erscheint. Es ist schwieriger zu quantifizieren und zu messen als die tatsächliche Geschwindigkeit, aber möglicherweise sogar noch wichtiger.

Dieser Artikel bietet eine kurze Einführung in die Faktoren, die die wahrgenommene Leistung beeinflussen, sowie eine Reihe von Tools zur Beurteilung und Verbesserung der Wahrnehmung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        > und grundlegende Kenntnisse der
        <a href="/de/docs/Learn/Getting_started_with_the_web"
          >client-seitigen Web-Technologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Grundlegendes Verständnis der Nutzerwahrnehmung von Web-Performance erlangen.</td>
    </tr>
  </tbody>
</table>

## Überblick

Die Wahrnehmung, wie schnell (und reibungslos) Seiten laden und auf Benutzerinteraktionen reagieren, ist noch wichtiger als die tatsächliche Zeit, die benötigt wird, um die Ressourcen abzurufen. Auch wenn Sie Ihre Seite möglicherweise nicht physisch schneller machen können, können Sie durchaus verbessern, wie schnell sie sich für Ihre Benutzer _anfühlt_.

Eine gute allgemeine Regel zur Verbesserung der wahrgenommenen Leistung ist, dass es in der Regel besser ist, eine schnelle Reaktion und regelmäßige Statusaktualisierungen zu bieten, als den Benutzer warten zu lassen, bis ein Vorgang vollständig abgeschlossen ist (bevor Informationen bereitgestellt werden). Beispielsweise ist es beim Laden einer Seite besser, den Text anzuzeigen, sobald er eintrifft, anstatt auf alle Bilder und anderen Ressourcen zu warten. Auch wenn der Inhalt noch nicht vollständig heruntergeladen ist, kann der Benutzer sehen, dass etwas passiert, und er kann beginnen, mit dem Inhalt zu interagieren.

> [!NOTE]
> Die Zeit scheint für Benutzer, die aktiv beschäftigt, abgelenkt oder unterhalten werden, schneller zu vergehen als für diejenigen, die passiv darauf warten, dass etwas passiert. Wenn möglich, sollten Sie Benutzer, die auf den Abschluss einer Aufgabe warten, aktiv einbinden und informieren.

Ähnlich ist es besser, eine "Ladeanimation" anzuzeigen, sobald ein Benutzer auf einen Link klickt, um eine langlaufende Operation auszuführen. Dies ändert zwar nicht die für den Abschluss der Operation benötigte Zeit, aber die Seite fühlt sich reaktionsschneller an und der Benutzer weiß, dass an etwas Nützlichem gearbeitet wird.

## Leistungsmetriken

Es gibt keine einzelne Metrik oder einen Test, der auf einer Seite ausgeführt werden kann, um zu bewerten, wie sich ein Benutzer "fühlt". Es gibt jedoch eine Reihe von Metriken, die "nützliche Indikatoren" sein können:

- [First paint](/de/docs/Glossary/First_paint)
  - : Die Zeit bis zum Beginn der ersten Maloperation. Beachten Sie, dass diese Änderung möglicherweise nicht sichtbar ist; Sie kann eine einfache Hintergrundfarbaktualisierung oder etwas noch weniger Auffälliges sein.
- [First Contentful Paint](/de/docs/Glossary/First_contentful_paint) (FCP)
  - : Die Zeit bis zur ersten signifikanten Darstellung (z.B. von Text, Vorder- oder Hintergrundbildern, Leinwand oder SVG, etc.). Beachten Sie, dass dieser Inhalt nicht unbedingt nützlich oder sinnvoll ist.
- [First Meaningful Paint](/de/docs/Glossary/First_meaningful_paint) (FMP)
  - : Die Zeit, zu der nützlicher Inhalt auf dem Bildschirm angezeigt wird.
- [Largest Contentful Paint](https://wicg.github.io/largest-contentful-paint/) (LCP)
  - : Die Renderzeit des größten sichtbaren Inhaltselements im Ansichtsfenster.
- [Speed index](/de/docs/Glossary/Speed_index)
  - : Misst die durchschnittliche Zeit, bis Pixel auf dem sichtbaren Bildschirm gemalt werden.
- [Time to interactive](/de/docs/Glossary/Time_to_interactive)
  - : Die Zeit, bis die Benutzeroberfläche für Benutzerinteraktionen verfügbar ist (d.h. die letzte [lange Aufgabe](/de/docs/Glossary/Long_task) des Ladevorgangs abgeschlossen ist).

## Leistung verbessern

Hier sind ein paar Tipps und Tricks, um die wahrgenommene Leistung zu verbessern:

### Minimieren der anfänglichen Ladung

Um die wahrgenommene Leistung zu verbessern, minimieren Sie die ursprüngliche Seitenladung. Mit anderen Worten, laden Sie zuerst den Inhalt herunter, mit dem der Benutzer sofort interagieren wird, und laden Sie den Rest im Hintergrund nach. Die insgesamt heruntergeladene Datenmenge kann tatsächlich zunehmen, aber der Benutzer _wartet_ nur auf eine sehr kleine Menge, sodass sich der Download schneller anfühlt.

Trennen Sie interaktive Funktionen vom Inhalt und laden Sie Text, Styles und Bilder, die beim ersten Laden sichtbar sind. Verzögern Sie oder laden Sie Bilder oder Skripte später nach, die beim ersten Laden der Seite nicht verwendet oder sichtbar sind. Außerdem sollten Sie die Assets, die Sie laden, optimieren. Bilder und Videos sollten im optimalsten Format, komprimiert und in der richtigen Größe bereitgestellt werden.

### Verhindern Sie springende Inhalte und andere Umbrüche

Bilder oder andere Assets, die dazu führen, dass Inhalte nach unten verschoben oder an einen anderen Ort springen, wie das Laden von Drittanbieterwerbung, können dazu führen, dass sich die Seite noch lädt und schlecht für die wahrgenommene Leistung ist. Das Umfließen von Inhalten ist besonders schlecht für die Benutzererfahrung, wenn es nicht durch Benutzerinteraktion initiiert wird. Wenn einige Assets langsamer geladen werden als andere und Elemente geladen werden, nachdem anderer Inhalt bereits auf den Bildschirm gemalt wurde, planen Sie im Voraus und reservieren Sie Platz im Layout, damit Inhalte nicht springen oder die Größe ändern, besonders nachdem die Seite interaktiv geworden ist.

### Vermeiden Sie Verzögerungen bei Schriftdateien

Die Wahl der Schriftart ist wichtig. Die Auswahl einer geeigneten Schriftart kann das Benutzererlebnis erheblich verbessern. Aus Sicht der wahrgenommenen Leistung kann "suboptimales Schriften-Importieren" zu Flackern führen, wenn Text gestylt wird oder auf andere Schriftarten zurückfällt.

Machen Sie Ersatzschriften in derselben Größe und Gewicht, sodass die Seitenänderung beim Laden der Schriften weniger auffällig ist.

### Interaktive Elemente sind interaktiv

Stellen Sie sicher, dass sichtbare interaktive Elemente immer interaktiv und ansprechbar sind. Wenn Eingabeelemente sichtbar sind, sollte der Benutzer ohne Verzögerung mit ihnen interagieren können. Benutzer haben das Gefühl, dass etwas träge ist, wenn es mehr als 50 ms dauert, um zu reagieren. Sie haben das Gefühl, dass eine Seite schlecht funktioniert, wenn Inhalte langsamer als 16,67 ms (oder 60 Bilder pro Sekunde) neu gemalt werden oder in unregelmäßigen Abständen neu gemalt werden.

Machen Sie Dinge wie Autovervollständigung zu einer progressiven Verbesserung: Verwenden Sie CSS, um ein Eingabemodal anzuzeigen, JS, um Autovervollständigung hinzuzufügen, sobald es verfügbar ist.

### Lassen Sie Aufgabenstarter interaktiver wirken

Eine Inhaltsanforderung beim `keydown`-Ereignis zu machen, anstatt auf `keyup` zu warten, kann die wahrgenommene Ladezeit des Inhalts um 200 ms reduzieren. Eine interessante, aber unaufdringliche 200 ms Animation zu diesem `keyup`-Ereignis hinzuzufügen, kann weitere 200 ms der wahrgenommenen Ladezeit reduzieren. Sie sparen keine 400 ms Zeit, aber der Benutzer fühlt sich nicht so, als würde er auf den Inhalt warten, bis, nun ja, bis er wirklich auf den Inhalt wartet.

## Fazit

Indem Sie die Zeit reduzieren, die ein Benutzer auf _nützlichen_ Inhalt warten muss, und die Seite reaktionsschnell und ansprechend halten, wird der Nutzer das Gefühl haben, dass die Seite besser läuft – auch wenn die tatsächliche Ladezeit für Ressourcen gleich bleibt.

{{PreviousMenuNext("Learn/Performance/what_is_web_performance", "Learn/Performance/Measuring_performance", "Learn/Performance")}}
