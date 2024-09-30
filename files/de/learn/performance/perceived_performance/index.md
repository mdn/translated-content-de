---
title: Wahrgenommene Leistung
slug: Learn/Performance/Perceived_performance
l10n:
  sourceCommit: 865acb22b74a49927b98267566369d4677414f53
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Performance/what_is_web_performance", "Learn/Performance/Measuring_performance", "Learn/Performance")}}

**[Wahrgenommene Leistung](/de/docs/Glossary/Perceived_performance)** ist ein subjektives Maß für die Leistung, Reaktionsfähigkeit und Zuverlässigkeit einer Website. Mit anderen Worten, wie schnell eine Website dem Benutzer erscheint. Es ist schwieriger zu quantifizieren und zu messen als die tatsächliche Geschwindigkeit des Betriebs, aber vielleicht sogar noch wichtiger.

Dieser Artikel bietet eine kurze Einführung in die Faktoren, die die wahrgenommene Leistung beeinflussen, sowie eine Reihe von Werkzeugen zur Beurteilung und Verbesserung der Wahrnehmung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software">Grundlegende Software installiert</a> und grundlegende Kenntnisse der <a href="/de/docs/Learn/Getting_started_with_the_web">clientseitigen Webtechnologien</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Grundlegende Vertrautheit mit der Benutzerwahrnehmung der Web-Performance zu erlangen.</td>
    </tr>
  </tbody>
</table>

## Überblick

Die Wahrnehmung, wie schnell (und reibungslos) Seiten geladen werden und auf Benutzerinteraktionen reagieren, ist noch wichtiger als die tatsächliche Zeit, die benötigt wird, um die Ressourcen abzurufen. Auch wenn Sie Ihre Website möglicherweise nicht physisch schneller machen können, können Sie möglicherweise verbessern, wie schnell sie sich _anfühlt_ für Ihre Benutzer.

Eine gute allgemeine Regel zur Verbesserung der wahrgenommenen Leistung ist, dass es in der Regel besser ist, eine schnelle Antwort und regelmäßige Statusaktualisierungen zu geben, als den Benutzer warten zu lassen, bis ein Vorgang vollständig abgeschlossen ist (bevor Informationen bereitgestellt werden). Wenn Sie beispielsweise eine Seite laden, ist es besser, den Text anzuzeigen, wenn er eintrifft, anstatt zu warten, bis alle Bilder und anderen Ressourcen geladen sind. Obwohl der Inhalt nicht vollständig heruntergeladen wurde, sieht der Benutzer, dass etwas passiert, und kann beginnen, mit dem Inhalt zu interagieren.

> [!NOTE]
> Zeit scheint schneller zu vergehen für Benutzer, die aktiv engagiert, abgelenkt oder unterhalten sind, als für diejenigen, die passiv warten, dass etwas passiert. Wo möglich, sollten Sie aktiv mit den Benutzern interagieren und sie informieren, die auf den Abschluss einer Aufgabe warten.

Ähnlich ist es besser, eine "Ladeanimation" anzuzeigen, sobald ein Benutzer auf einen Link klickt, um einen langwierigen Vorgang auszuführen. Obwohl dies die Zeit zur Beendigung des Vorgangs nicht ändert, fühlt sich die Seite reaktionsschneller an, und der Benutzer weiß, dass an etwas Nützlichem gearbeitet wird.

## Leistungskennzahlen

Es gibt keine einzelne Metrik oder einen Test, der auf einer Seite durchgeführt werden kann, um zu bewerten, wie sich ein Benutzer "fühlt". Es gibt jedoch eine Reihe von Metriken, die als "hilfreiche Indikatoren" dienen können:

- [First paint](/de/docs/Glossary/First_paint)
  - : Die Zeit bis zum Beginn des ersten Malvorgangs. Beachten Sie, dass diese Änderung möglicherweise nicht sichtbar ist; es kann sich um ein einfaches Update der Hintergrundfarbe oder etwas noch Unauffälligeres handeln.
- [First Contentful Paint](/de/docs/Glossary/First_contentful_paint) (FCP)
  - : Die Zeit bis zur ersten signifikanten Darstellung (z. B. von Text, Vorder- oder Hintergrundbild, Canvas oder SVG usw.). Beachten Sie, dass dieser Inhalt nicht unbedingt nützlich oder bedeutungsvoll ist.
- [First Meaningful Paint](/de/docs/Glossary/First_meaningful_paint) (FMP)
  - : Die Zeit, zu der nützlicher Inhalt auf dem Bildschirm dargestellt wird.
- [Largest Contentful Paint](https://wicg.github.io/largest-contentful-paint/) (LCP)
  - : Die Renderzeit des größten Inhaltselements, das im Ansichtsfenster sichtbar ist.
- [Speed index](/de/docs/Glossary/Speed_index)
  - : Misst die durchschnittliche Zeit, die benötigt wird, um die Pixel auf dem sichtbaren Bildschirm zu zeichnen.
- [Time to interactive](/de/docs/Glossary/Time_to_interactive)
  - : Die Zeit, bis die Benutzeroberfläche für Benutzerinteraktionen verfügbar ist (d. h. der letzte [lange Task](/de/docs/Glossary/Long_task) des Ladevorgangs abgeschlossen ist).

## Leistung verbessern

Hier sind einige Tipps und Tricks, um die wahrgenommene Leistung zu verbessern:

### Minimieren Sie die erste Ladezeit

Um die wahrgenommene Leistung zu verbessern, minimieren Sie die ursprüngliche Seitenladezeit. Mit anderen Worten, laden Sie zuerst die Inhalte herunter, mit denen der Benutzer sofort interagieren wird, und laden Sie den Rest nachträglich "im Hintergrund". Die Gesamtmenge des heruntergeladenen Inhalts kann tatsächlich zunehmen, aber der Benutzer _wartet_ nur auf eine sehr kleine Menge, sodass der Download schneller erscheint.

Trennen Sie interaktive Funktionalitäten vom Inhalt und laden Sie Text, Styles und Bilder, die beim ersten Laden sichtbar sind. Verzögern Sie oder laden Sie Bilder oder Skripte erst, die beim ersten Laden nicht genutzt oder sichtbar sind. Zusätzlich sollten Sie die Ressourcen optimieren, die Sie laden. Bilder und Videos sollten im optimalsten Format, komprimiert und in der richtigen Größe bereitgestellt werden.

### Vermeiden Sie springenden Inhalt und andere Umbrüche

Bilder oder andere Ressourcen, die dazu führen, dass Inhalt nach unten gedrängt wird oder an eine andere Stelle springt, wie das Laden von Werbungen Dritter, können die Seite so wirken lassen, als ob sie noch geladen wird, und ist schlecht für die wahrgenommene Leistung. Inhalt, der sich verschiebt, ist besonders schlecht für die Benutzererfahrung, wenn er nicht durch Benutzerinteraktionen initiiert wird. Wenn einige Ressourcen langsamer als andere geladen werden, sollten Sie im Voraus planen und Platz im Layout lassen, damit der Inhalt nicht springt oder seine Größe ändert, insbesondere nachdem die Seite interaktiv geworden ist.

### Vermeiden Sie Verzögerungen bei Schriftdateien

Die Wahl der Schriftart ist wichtig. Die Auswahl einer geeigneten Schriftart kann das Benutzererlebnis erheblich verbessern. Aus Sicht der wahrgenommenen Leistung kann "nicht optimale Schriftarten-Importierung" zu Flackern führen, wenn Text gestaltet wird oder auf andere Schriftarten zurückgegriffen wird.

Verwenden Sie Ersatzschriftarten in derselben Größe und Gewicht, sodass der Seitenwechsel beim Laden der Schriftarten weniger auffällig ist.

### Interaktive Elemente sind interaktiv

Stellen Sie sicher, dass sichtbare interaktive Elemente immer interaktiv und reaktionsschnell sind. Wenn Eingabeelemente sichtbar sind, sollte der Benutzer ohne Verzögerung mit ihnen interagieren können. Benutzer empfinden etwas als träge, wenn es länger als 50 ms dauert, um zu reagieren. Sie empfinden, dass eine Seite schlecht funktioniert, wenn Inhalte langsamer als 16,67 ms umgezeichnet werden (oder weniger als 60 Bilder pro Sekunde) oder bei ungleichmäßigen Intervallen neu gezeichnet wird.

Machen Sie Dinge wie "type-ahead" zu einer progressiven Verbesserung: Verwenden Sie CSS, um ein Eingabemodal anzuzeigen, JS, um automatisch auszufüllen, sobald es verfügbar ist.

### Machen Sie Aufgabeninitiatoren interaktiver

Eine Inhaltsanforderung bei `keydown` anstatt bei `keyup` zu stellen, kann die wahrgenommene Ladezeit des Inhalts um 200 ms reduzieren. Das Hinzufügen einer interessanten, aber unauffälligen 200-ms-Animation zu diesem `keyup`-Ereignis kann weitere 200 ms der wahrgenommenen Ladezeit einsparen. Sie sparen nicht 400 ms an Zeit, aber der Benutzer hat nicht das Gefühl, auf Inhalte zu warten, bis er tatsächlich auf Inhalte wartet.

## Fazit

Indem Sie die Zeit verringern, die ein Benutzer auf _nützliche_ Inhalte warten muss, und die Website reaktionsschnell und ansprechend halten, wird es den Benutzern so vorkommen, als ob die Website besser funktioniert – auch wenn die tatsächliche Zeit zum Laden der Ressourcen gleich bleibt.

{{PreviousMenuNext("Learn/Performance/what_is_web_performance", "Learn/Performance/Measuring_performance", "Learn/Performance")}}
