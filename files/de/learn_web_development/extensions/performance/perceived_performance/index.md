---
title: Wahrgenommene Leistung
slug: Learn_web_development/Extensions/Performance/Perceived_performance
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Performance/what_is_web_performance", "Learn_web_development/Extensions/Performance/Measuring_performance", "Learn_web_development/Extensions/Performance")}}

**{{Glossary("Perceived_performance", "Wahrgenommene Leistung")}}** ist ein subjektives Maß für die Leistung, Reaktionsfähigkeit und Zuverlässigkeit einer Website. Anders ausgedrückt: Wie schnell eine Website dem Benutzer erscheint. Es ist schwerer zu quantifizieren und zu messen als die tatsächliche Betriebsgeschwindigkeit, aber vielleicht sogar noch wichtiger.

Dieser Artikel bietet eine kurze Einführung in die Faktoren, die die wahrgenommene Leistung beeinflussen, sowie eine Reihe von Werkzeugen zur Bewertung und Verbesserung der Wahrnehmung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        > und Grundkenntnisse der
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >clientseitigen Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Grundlegende Vertrautheit mit der Benutzerwahrnehmung der Web-Performance gewinnen.</td>
    </tr>
  </tbody>
</table>

## Übersicht

Die Wahrnehmung, wie schnell (und reibungslos) Seiten laden und auf Benutzerinteraktionen reagieren, ist noch wichtiger als die tatsächliche Zeit, die benötigt wird, um die Ressourcen abzurufen. Auch wenn Sie möglicherweise physisch nicht in der Lage sind, Ihre Website schneller laufen zu lassen, können Sie durchaus verbessern, wie schnell sie sich für Ihre Benutzer _anfühlt_.

Eine gute allgemeine Regel zur Verbesserung der wahrgenommenen Leistung ist es, besser eine schnelle Antwort und regelmäßige Statusaktualisierungen zu liefern, als den Benutzer warten zu lassen, bis ein Vorgang vollständig abgeschlossen ist (bevor Informationen bereitgestellt werden). Wenn Sie zum Beispiel eine Seite laden, ist es besser, den Text anzuzeigen, wenn er ankommt, anstatt zu warten, bis alle Bilder und anderen Ressourcen geladen sind. Auch wenn der Inhalt nicht vollständig heruntergeladen wurde, kann der Benutzer sehen, dass etwas passiert und beginnen, mit dem Inhalt zu interagieren.

> [!NOTE]
> Zeit scheint schneller zu vergehen für Benutzer, die aktiv beschäftigt, abgelenkt oder unterhalten sind, als für diejenigen, die passiv auf etwas warten. Wenn möglich, sollten Sie Benutzer, die auf das Abschluss einer Aufgabe warten, aktiv einbeziehen und informieren.

In ähnlicher Weise ist es besser, eine "Ladeanimation" anzuzeigen, sobald ein Benutzer auf einen Link klickt, um einen lang andauernden Vorgang auszuführen. Auch wenn dies die Zeit bis zum Abschluss des Vorgangs nicht verkürzt, fühlt sich die Website reaktionsschneller an, und der Benutzer weiß, dass sie an etwas Nützlichem arbeitet.

## Leistungsmetriken

Es gibt keine einzelne Metrik oder keinen einzelnen Test, der an einer Website durchgeführt werden kann, um zu bewerten, wie ein Benutzer sie "fühlt". Es gibt jedoch eine Reihe von Metriken, die als "nützliche Indikatoren" dienen können:

- {{Glossary("First_paint", "First Paint")}}
  - : Die Zeit bis zum Beginn der ersten Paint-Operation. Beachten Sie, dass diese Änderung möglicherweise nicht sichtbar ist; es kann sich um ein einfaches Hintergrundfarbupdate oder etwas noch weniger Auffälliges handeln.
- {{Glossary("First_contentful_paint", "First Contentful Paint")}} (FCP)
  - : Die Zeit bis zur ersten signifikanten Darstellung (z. B. von Text, Vorder- oder Hintergrundbild, Canvas oder SVG usw.). Beachten Sie, dass dieser Inhalt nicht unbedingt nützlich oder sinnvoll ist.
- {{Glossary("First_meaningful_paint", "First Meaningful Paint")}} (FMP)
  - : Die Zeit, zu der nützlicher Inhalt auf dem Bildschirm dargestellt wird.
- [Largest Contentful Paint](https://wicg.github.io/largest-contentful-paint/) (LCP)
  - : Die Renderzeit des größten sichtbaren Inhaltselements im Sichtfenster.
- {{Glossary("Speed_index", "Speed index")}}
  - : Misst die durchschnittliche Zeit, die benötigt wird, um Pixel auf dem sichtbaren Bildschirm zu malen.
- {{Glossary("Time_to_interactive", "Time to interactive")}}
  - : Zeit, bis die Benutzeroberfläche für Benutzerinteraktionen verfügbar ist (d.h. der letzte {{Glossary("Long_task", "Long Task")}} des Ladeprozesses abgeschlossen ist).

## Verbesserung der Leistung

Hier sind einige Tipps und Tricks zur Verbesserung der wahrgenommenen Leistung:

### Minimieren Sie das anfängliche Laden

Um die wahrgenommene Leistung zu verbessern, minimieren Sie das ursprüngliche Laden der Seite. Das heißt, laden Sie zunächst den Inhalt herunter, mit dem der Benutzer sofort interagieren wird, und laden Sie den Rest später "im Hintergrund" herunter. Die Gesamtmenge des heruntergeladenen Inhalts kann tatsächlich zunehmen, aber der Benutzer _wartet_ nur auf eine sehr kleine Menge, daher fühlt sich der Download schneller an.

Trennen Sie interaktive Funktionalitäten vom Inhalt und laden Sie Texte, Stile und Bilder, die beim initialen Ladevorgang sichtbar sind. Verzögern Sie das Laden von Bildern oder Skripten, die nicht verwendet oder beim initialen Laden sichtbar sind, oder laden Sie diese lazy. Außerdem sollten Sie die Assets, die Sie laden, optimieren. Bilder und Videos sollten im optimalsten Format, komprimiert und in der richtigen Größe bereitgestellt werden.

### Verhindern Sie springende Inhalte und andere Reflows

Bilder oder andere Assets, die dazu führen, dass Inhalte nach unten gedrückt oder an einen anderen Ort verschoben werden, wie das Laden von Anzeigen von Drittanbietern, können den Eindruck erwecken, dass die Seite noch lädt, und sind schlecht für die wahrgenommene Leistung. Content-Reflow ist besonders schlecht für die Benutzererfahrung, wenn er nicht durch Benutzerinteraktionen ausgelöst wird. Wenn einige Assets langsamer laden als andere, planen Sie voraus und lassen Sie Platz im Layout für sie, damit Inhalte nicht springen oder sich neu anordnen, besonders nachdem die Seite interaktiv geworden ist.

### Vermeiden Sie Verzögerungen von Schriftdateien

Die Schriftwahl ist wichtig. Die Auswahl einer geeigneten Schriftart kann das Benutzererlebnis erheblich verbessern. Aus Sicht der wahrgenommenen Leistung können "suboptimale Schriftenimporte" zu einem Flackern führen, wenn Text formatiert wird oder auf andere Schriftarten zurückgegriffen wird.

Stellen Sie sicher, dass Ersatzschriften die gleiche Größe und das gleiche Gewicht haben, damit die Seitenänderung weniger auffällig ist, wenn Schriftarten geladen werden.

### Interaktive Elemente sind interaktiv

Stellen Sie sicher, dass sichtbare interaktive Elemente immer interaktiv und reaktionsschnell sind. Wenn Eingabeelemente sichtbar sind, sollten Benutzer ohne Verzögerung mit ihnen interagieren können. Benutzer empfinden etwas als langsam, wenn es mehr als 50 ms benötigt, um zu reagieren. Sie empfinden, dass eine Seite schlecht funktioniert, wenn Inhalte langsamer als alle 16,67 ms (oder 60 Bilder pro Sekunde) neu gezeichnet werden oder in ungleichen Intervallen.

Machen Sie Dinge wie das Vorausvervollständigen zu einer progressiven Verbesserung: Verwenden Sie CSS, um das Eingabemodal anzuzeigen, und JS, um die Autovervollständigung hinzuzufügen, wenn sie verfügbar ist.

### Lassen Sie Task-Initiatoren interaktiver erscheinen

Wenn eine Inhaltsanfrage bei `keydown` statt bei `keyup` gemacht wird, kann die wahrgenommene Ladezeit des Inhalts um 200 ms reduziert werden. Eine interessante, aber unaufdringliche 200 ms Animation zu diesem `keyup`-Ereignis hinzuzufügen, kann die wahrgenommene Ladezeit um weitere 200 ms verringern. Sie sparen zwar keine 400 ms Zeit, aber der Benutzer hat nicht das Gefühl, auf Inhalte zu warten, bis er tatsächlich darauf wartet.

## Fazit

Indem die Zeit reduziert wird, die ein Benutzer auf _nützliche_ Inhalte warten muss, und die Seite reaktionsfreudig und ansprechend gehalten wird, wird es den Benutzern so vorkommen, als würde die Seite besser funktionieren – selbst wenn die tatsächliche Zeit zum Laden von Ressourcen gleich bleibt.

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/what_is_web_performance", "Learn_web_development/Extensions/Performance/Measuring_performance", "Learn_web_development/Extensions/Performance")}}
