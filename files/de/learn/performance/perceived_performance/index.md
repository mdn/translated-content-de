---
title: Wahrgenommene Leistung
slug: Learn/Performance/Perceived_performance
l10n:
  sourceCommit: 0598721ab3f672c66a8357d9e6b27ec8644a2b21
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Performance/what_is_web_performance", "Learn/Performance/Measuring_performance", "Learn/Performance")}}

**{{Glossary("Perceived_performance", "Wahrgenommene Leistung")}}** ist ein subjektives Maß für die Leistung, Reaktionsfähigkeit und Zuverlässigkeit einer Website. Mit anderen Worten, wie schnell eine Website dem Benutzer erscheint. Es ist schwieriger zu quantifizieren und zu messen als die tatsächliche Geschwindigkeit des Betriebs, aber möglicherweise sogar noch wichtiger.

Dieser Artikel bietet eine kurze Einführung in die Faktoren, die die wahrgenommene Leistung beeinflussen, sowie eine Reihe von Werkzeugen zur Beurteilung und Verbesserung der Wahrnehmung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, und grundlegendes Wissen über
        <a href="/de/docs/Learn/Getting_started_with_the_web"
          >client-seitige Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Grundlegendes Verständnis der Benutzerwahrnehmung der Web-Performance zu erlangen.</td>
    </tr>
  </tbody>
</table>

## Überblick

Die Wahrnehmung, wie schnell (und reibungslos) Seiten geladen werden und auf Benutzerinteraktionen reagieren, ist sogar noch wichtiger als die tatsächliche Zeit, die benötigt wird, um die Ressourcen abzurufen. Während Sie möglicherweise nicht in der Lage sind, Ihre Website physisch schneller laufen zu lassen, könnten Sie durchaus verbessern, wie schnell sie _fühlt_ sich für Ihre Benutzer an.

Eine gute allgemeine Regel zur Verbesserung der wahrgenommenen Leistung ist, dass es in der Regel besser ist, eine schnelle Antwort und regelmäßige Statusaktualisierungen zu liefern, als den Benutzer warten zu lassen, bis ein Vorgang vollständig abgeschlossen ist (bevor er irgendwelche Informationen erhält). Beispielsweise ist es beim Laden einer Seite besser, den Text anzuzeigen, sobald er eintrifft, als darauf zu warten, dass alle Bilder und anderen Ressourcen geladen sind. Auch wenn der Inhalt noch nicht vollständig heruntergeladen ist, kann der Benutzer sehen, dass etwas passiert und er kann damit beginnen, mit dem Inhalt zu interagieren.

> [!NOTE]
> Die Zeit scheint schneller zu vergehen für Benutzer, die aktiv beschäftigt, abgelenkt oder unterhalten sind, als für diejenigen, die passiv darauf warten, dass etwas passiert. Wenn möglich, sollten Sie Benutzer, die auf die Fertigstellung einer Aufgabe warten, aktiv einbeziehen und informieren.

Ähnlich ist es besser, eine "Ladeanimation" anzuzeigen, sobald ein Benutzer auf einen Link klickt, um einen lang laufenden Vorgang auszuführen. Obwohl dies die Zeit zur Fertigstellung des Vorgangs nicht ändert, fühlt sich die Website reaktionsschneller an und der Benutzer weiß, dass an etwas Nützlichem gearbeitet wird.

## Leistungskennzahlen

Es gibt keine einzelne Kennzahl oder Test, der auf einer Website durchgeführt werden kann, um zu bewerten, wie sich ein Benutzer "fühlt". Es gibt jedoch eine Reihe von Kennzahlen, die als "hilfreiche Indikatoren" dienen können:

- {{Glossary("First_paint", "First Paint")}}
  - : Die Zeit bis zum Beginn der ersten Zeichenoperation. Beachten Sie, dass diese Änderung möglicherweise nicht sichtbar ist; es kann sich um ein einfaches Hintergrundfarbenupdate oder etwas noch Unauffälligeres handeln.
- {{Glossary("First_contentful_paint", "First Contentful Paint")}} (FCP)
  - : Die Zeit bis zum ersten signifikanten Rendering (z.B. von Text, Vordergrund- oder Hintergrundbild, Canvas oder SVG, usw.). Beachten Sie, dass dieser Inhalt nicht unbedingt nützlich oder bedeutsam ist.
- {{Glossary("First_meaningful_paint", "First Meaningful Paint")}} (FMP)
  - : Der Zeitpunkt, zu dem nützlicher Inhalt auf dem Bildschirm angezeigt wird.
- [Largest Contentful Paint](https://wicg.github.io/largest-contentful-paint/) (LCP)
  - : Die Renderzeit des größten Inhaltselements, das im Viewport sichtbar ist.
- {{Glossary("Speed_index", "Speed index")}}
  - : Misst die durchschnittliche Zeit, die die Pixel auf dem sichtbaren Bildschirm benötigen, um gezeichnet zu werden.
- {{Glossary("Time_to_interactive", "Time to interactive")}}
  - : Zeit bis zur Verfügbarkeit der Benutzeroberfläche für Benutzerinteraktion (d.h. der letzte {{Glossary("Long_task", "lang andauernde Prozess")}} des Ladeprozesses ist abgeschlossen).

## Verbesserung der Leistung

Hier sind einige Tipps und Tricks, um die wahrgenommene Leistung zu verbessern:

### Minimieren der anfänglichen Ladezeit

Um die wahrgenommene Leistung zu verbessern, minimieren Sie die ursprüngliche Seitenladezeit. Mit anderen Worten, laden Sie zuerst die Inhalte herunter, mit denen der Benutzer sofort interagieren wird, und laden Sie den Rest danach "im Hintergrund" herunter. Die Gesamtheit der heruntergeladenen Inhalte kann tatsächlich zunehmen, aber der Benutzer wartet nur auf eine sehr kleine Menge, sodass der Download schneller erscheint.

Trennen Sie interaktive Funktionalität vom Inhalt und laden Sie Texte, Styles und Bilder, die beim ersten Laden sichtbar sind. Verzögern oder laden Sie Bilder oder Skripte, die beim ersten Laden der Seite nicht verwendet oder sichtbar sind, nach Bedarf. Außerdem sollten Sie die Assets, die Sie laden, optimieren. Bilder und Videos sollten im optimalsten Format, komprimiert und in der passenden Größe bereitgestellt werden.

### Verhindern von springenden Inhalten und anderen Umbrüchen

Bilder oder andere Assets, die Inhalte nach unten drücken oder an eine andere Stelle springen lassen, wie das Laden von Werbung von Drittanbietern, können die Seite so wirken lassen, als ob sie noch lädt und schaden der wahrgenommenen Leistung. Content-Umbrüche sind besonders schlecht für die Benutzererfahrung, wenn sie nicht durch Benutzerinteraktion initiiert werden. Wenn einige Assets langsamer geladen werden als andere, während andere Elemente bereits auf den Bildschirm gezeichnet wurden, planen Sie voraus und lassen Sie Platz im Layout, damit Inhalte nicht springen oder die Größen ändern, besonders nachdem die Seite interaktiv geworden ist.

### Vermeiden von Schriftdateiverzögerungen

Die Wahl der Schriftarten ist wichtig. Die Auswahl einer geeigneten Schriftart kann das Benutzererlebnis erheblich verbessern. Aus Sicht der wahrgenommenen Leistung können "suboptimale Schriftimporte" zu Flackern führen, wenn Text gestylt wird oder wenn auf andere Schriften zurückgegriffen wird.

Stellen Sie sicher, dass Ersatzschriften die gleiche Größe und das gleiche Gewicht haben, damit sich die Seitenänderung beim Laden der Schriften weniger bemerkbar macht.

### Interaktive Elemente sind interaktiv

Stellen Sie sicher, dass sichtbare interaktive Elemente immer interaktiv und reaktionsfähig sind. Wenn Eingabeelemente sichtbar sind, sollte der Benutzer in der Lage sein, ohne Verzögerung mit ihnen zu interagieren. Benutzer empfinden etwas als langsam, wenn es mehr als 50 ms dauert, bis es reagiert. Sie empfinden, dass eine Seite schlecht funktioniert, wenn Inhalte langsamer als 16,67 ms (oder 60 Bilder pro Sekunde) neu gezeichnet werden oder in ungleichmäßigen Abständen.

Gestalten Sie Dinge wie Vorschläge als progressive Verbesserung: Verwenden Sie CSS, um ein Eingabemodal anzuzeigen, und JavaScript, um die Autovervollständigung hinzuzufügen, sobald sie verfügbar ist.

### Lassen Sie Aufgabeninitiatoren interaktiver erscheinen

Eine Inhaltsanforderung bei `keydown` und nicht erst bei `keyup` zu machen, kann die wahrgenommene Ladezeit des Inhalts um 200 ms reduzieren. Eine interessante, aber unauffällige 200-ms-Animation zu diesem `keyup`-Ereignis hinzuzufügen, kann weitere 200 ms der wahrgenommenen Ladezeit reduzieren. Sie sparen dabei keine 400 ms Zeit, aber der Benutzer hat nicht das Gefühl, auf Inhalte zu warten, bis, na ja, bis er tatsächlich auf Inhalte wartet.

## Fazit

Indem Sie die Zeit reduzieren, die ein Benutzer auf _nützliche_ Inhalte warten muss, und die Seite reaktionsschnell und ansprechend halten, wird der Benutzer das Gefühl haben, dass die Seite besser funktioniert — auch wenn die tatsächliche Ladezeit der Ressourcen gleich bleibt.

{{PreviousMenuNext("Learn/Performance/what_is_web_performance", "Learn/Performance/Measuring_performance", "Learn/Performance")}}
