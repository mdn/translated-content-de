---
title: Grundlagen von WAI-ARIA
slug: Learn/Accessibility/WAI-ARIA_basics
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Accessibility/CSS_and_JavaScript","Learn/Accessibility/Multimedia", "Learn/Accessibility")}}

In Fortsetzung des vorherigen Artikels kann es schwierig sein, komplexe UI-Steuerelemente zu erstellen, die unsemantisches HTML und dynamisch mit JavaScript aktualisierte Inhalte beinhalten. WAI-ARIA ist eine Technologie, die bei solchen Problemen helfen kann, indem sie zusätzliche Semantiken hinzufügt, die Browser und Hilfstechnologien erkennen und verwenden können, um Benutzer darüber zu informieren, was vor sich geht. Hier zeigen wir, wie Sie es auf grundlegender Ebene verwenden, um die Barrierefreiheit zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, CSS und
        JavaScript. Verständnis der
        <a href="/de/docs/Learn/Accessibility"
          >vorherigen Artikel im Kurs</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit WAI-ARIA gewinnen und lernen, wie es verwendet werden kann, um nützliche zusätzliche Semantiken bereitzustellen, um die Barrierefreiheit dort zu verbessern, wo es erforderlich ist.
      </td>
    </tr>
  </tbody>
</table>

## Was ist WAI-ARIA?

Beginnen wir mit einem Blick darauf, was WAI-ARIA ist und was es für uns tun kann.

### Eine ganz neue Reihe von Problemen

Als Web-Apps komplexer und dynamischer wurden, tauchten neue Barrierefreiheitsfunktionen und -probleme auf.

Zum Beispiel führte HTML eine Reihe von semantischen Elementen ein, um allgemeine Seitenfunktionen zu definieren ({{htmlelement("nav")}}, {{htmlelement("footer")}}, etc.). Bevor diese verfügbar waren, verwendeten Entwickler {{htmlelement("div")}}s mit IDs oder Klassen, z.B. `<div class="nav">`, aber diese waren problematisch, da es keinen einfachen Weg gab, um bestimmte Seitenfunktionen wie die Hauptnavigation programmatisch leicht zu finden.

Die anfängliche Lösung war, ein oder mehrere versteckte Links am Seitenanfang hinzuzufügen, um zur Navigation (oder etwas anderem) zu verlinken, zum Beispiel:

```html
<a href="#hidden" class="hidden">Skip to navigation</a>
```

Aber das ist immer noch nicht sehr präzise und kann nur verwendet werden, wenn der Screenreader von oben auf der Seite liest.

Ein weiteres Beispiel ist, dass Apps begannen, komplexe Steuerelemente wie Datumsauswahl-Tools zum Auswählen von Daten, Slider zum Auswählen von Werten usw. zu bieten. HTML bietet spezielle Eingabetypen, um solche Steuerelemente darzustellen:

```html
<input type="date" /> <input type="range" />
```

Diese wurden ursprünglich nicht gut unterstützt und es war und ist es immer noch in geringerem Maße schwierig, sie zu stylen, was dazu führte, dass Designer und Entwickler sich für benutzerdefinierte Lösungen entschieden. Anstatt diese nativen Funktionen zu verwenden, verlassen sich einige Entwickler auf JavaScript-Bibliotheken, die solche Steuerelemente als Reihe von verschachtelten {{htmlelement("div")}}s generieren, die dann mit CSS gestaltet und mit JavaScript gesteuert werden.

Das Problem hier ist, dass sie visuell funktionieren, aber Screenreader können überhaupt keinen Sinn daraus machen, was sie sind, und ihre Benutzer bekommen nur gesagt, dass sie ein Durcheinander von Elementen sehen, ohne Semantik, die beschreibt, was sie bedeuten.

### Einführung von WAI-ARIA

[WAI-ARIA](https://www.w3.org/TR/wai-aria/) (Web Accessibility Initiative - Accessible Rich Internet Applications) ist eine vom W3C geschriebene Spezifikation, die eine Reihe zusätzlicher HTML-Attribute definiert, die auf Elemente angewendet werden können, um zusätzliche Semantiken bereitzustellen und die Barrierefreiheit dort zu verbessern, wo sie fehlt. In der Spezifikation werden drei Hauptmerkmale definiert:

- [Rollen](/de/docs/Web/Accessibility/ARIA/Roles)
  - : Diese definieren, was ein Element ist oder tut. Viele dieser Rollen sind sogenannte Landmarkenrollen, die weitgehend den semantischen Wert von Strukturelementen wie `role="navigation"` ({{htmlelement("nav")}}) oder `role="complementary"` ({{htmlelement("aside")}}) duplizieren. Einige andere Rollen beschreiben verschiedene Seitenstrukturen wie `role="banner"`, `role="search"`, `role="tablist"` und `role="tabpanel`, die häufig in UIs zu finden sind.
- Eigenschaften
  - : Diese definieren Eigenschaften von Elementen, die ihnen zusätzliche Bedeutung oder Semantiken geben können. Beispielsweise gibt `aria-required="true"` an, dass ein Formulareingabefeld ausgefüllt werden muss, um gültig zu sein, während `aria-labelledby="label"` es Ihnen ermöglicht, eine ID auf ein Element zu setzen, um es als Beschriftung für alles andere auf der Seite zu referenzieren, einschließend mehrerer Elemente, was mit `<label for="input">` nicht möglich ist. Beispielsweise könnten Sie `aria-labelledby` verwenden, um anzugeben, dass eine Tastenbeschreibung, die in {{htmlelement("div")}} enthalten ist, die Beschriftung für mehrere Tabellenzellen ist, oder Sie könnten es als Alternative zu Alt-Text für Bilder verwenden — vorhandene Informationen auf der Seite als Alt-Text eines Bildes angeben, anstatt es innerhalb des `alt`-Attributs zu wiederholen. Sie können ein Beispiel dafür unter [Textalternativen](/de/docs/Learn/Accessibility/HTML#text_alternatives) sehen.
- Zustände
  - : Besondere Eigenschaften, die die aktuellen Bedingungen von Elementen definieren, wie `aria-disabled="true"`, welches einem Screenreader anzeigt, dass ein Formulareingabefeld derzeit deaktiviert ist. Zustände unterscheiden sich von Eigenschaften dadurch, dass Eigenschaften sich während des Lebenszyklus einer App nicht ändern, während sich Zustände ändern können, im Allgemeinen programmatisch über JavaScript.

Ein wichtiger Punkt über WAI-ARIA-Attribute ist, dass sie nichts an der Webseite ändern, außer den Informationen, die von den Barrierefreiheits-APIs des Browsers bereitgestellt werden (wo Screenreader ihre Informationen herbekommen). WAI-ARIA beeinflusst die Seitenstruktur, den DOM usw. nicht, obwohl die Attribute nützlich sein können, um Elemente mit CSS auszuwählen.

> [!NOTE]
> Sie finden eine nützliche Liste aller ARIA-Rollen und deren Verwendungen mit Links zu weiteren Informationen in der WAI-ARIA-Spezifikation — siehe [Definition von Rollen](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) — auf dieser Seite — siehe [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Roles).
>
> Die Spezifikation enthält auch eine Liste aller Eigenschaften und Zustände mit Links zu weiteren Informationen — siehe [Definition von Zuständen und Eigenschaften (alle `aria-*` Attribute)](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def).

### Wo wird WAI-ARIA unterstützt?

Diese Frage ist nicht einfach zu beantworten. Es ist schwierig, eine schlüssige Ressource zu finden, die angibt, welche Funktionen von WAI-ARIA unterstützt werden und wo, weil:

1. Es gibt viele Funktionen in der WAI-ARIA-Spezifikation.
2. Es gibt viele Kombinationen von Betriebssystemen, Browsern und Screenreadern zu berücksichtigen.

Dieser letzte Punkt ist entscheidend — Um einen Screenreader überhaupt zu verwenden, müssen Ihr Betriebssystem Browser ausführen, die die erforderlichen Barrierefreiheits-APIs implementiert haben, um die Informationen bereitzustellen, die Screenreader benötigen, um ihre Arbeit zu machen. Die meisten beliebten Betriebssysteme haben einen oder zwei Browser, mit denen Screenreader arbeiten können. Die Paciello Group hat einen ziemlich aktuellen Beitrag, der Daten dafür bereitstellt — siehe [Rough Guide: browsers, operating systems and screen reader support updated](https://www.tpgi.com/rough-guide-browsers-operating-systems-and-screen-reader-support-updated/).

Als Nächstes müssen Sie sich darum kümmern, ob die entsprechenden Browser ARIA-Funktionen unterstützen und sie über ihre APIs bereitstellen, aber auch, ob Screenreader diese Informationen erkennen und ihren Benutzern auf nützliche Weise präsentieren.

1. Die Browser-Unterstützung ist fast universell.
2. Die Screenreader-Unterstützung für ARIA-Funktionen erreicht nicht ganz dieses Niveau, aber die beliebtesten Screenreader kommen dorthin. Sie können einen Eindruck von den Unterstützungsstufen erhalten, indem Sie sich den Artikel [WAI-ARIA Screen reader compatibility](https://www.powermapper.com/tests/screen-readers/aria/) von Powermapper ansehen.

In diesem Artikel werden wir nicht versuchen, jede einzelne WAI-ARIA-Funktion und ihre genauen Unterstützungsdetails abzudecken. Stattdessen werden wir die kritischsten WAI-ARIA-Funktionen behandeln, die Sie kennen sollten; wenn wir keine Unterstützungsdetails erwähnen, können Sie davon ausgehen, dass die Funktion gut unterstützt wird. Wir werden jede Ausnahme klar ansprechen.

> [!NOTE]
> Einige JavaScript-Bibliotheken unterstützen WAI-ARIA, was bedeutet, dass sie beim Generieren von UI-Funktionen wie komplexen Formularelementen ARIA-Attribute hinzufügen, um die Barrierefreiheit dieser Funktionen zu verbessern. Wenn Sie eine JavaScript-Lösung eines Drittanbieters für eine schnelle UI-Entwicklung in Betracht ziehen, sollten Sie definitiv die Barrierefreiheit seiner UI-Komponenten als wichtigen Faktor bei Ihrer Entscheidung berücksichtigen. Gute Beispiele sind jQuery UI (siehe [About jQuery UI: Deep accessibility support](https://jqueryui.com/about/#deep-accessibility-support)), [ExtJS](https://www.sencha.com/products/extjs/) und [Dojo/Dijit](https://dojotoolkit.org/reference-guide/1.10/dijit/a11y/statement.html).

### Wann sollten Sie WAI-ARIA verwenden?

Wir haben bereits einige der Probleme angesprochen, die zur Erstellung von WAI-ARIA geführt haben. Im Wesentlichen gibt es vier Hauptbereiche, in denen WAI-ARIA nützlich ist:

- Hinweiszeichen/Landmarken
  - : Die Werte des ARIA-Attributs [`role`](/de/docs/Web/Accessibility/ARIA/Roles) können als Landmarken fungieren, die entweder die Semantiken von HTML-Elementen replizieren (z.B. {{htmlelement("nav")}}) oder über die HTML-Semantiken hinaus Informationen zu verschiedenen Funktionsbereichen liefern, z.B. `search`, `tablist`, `tab`, `listbox`, etc.
- Dynamische Inhaltsupdates
  - : Screenreader haben Schwierigkeiten damit, ständig sich ändernde Inhalte zu melden; mit ARIA können wir `aria-live` verwenden, um Screenreader-Benutzer zu informieren, wenn ein Inhaltsbereich dynamisch aktualisiert wird: zum Beispiel durch JavaScript auf der Seite, das neue Inhalte vom Server abruft und den DOM aktualisiert [fetching new content from the server and updating the DOM](/de/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data).
- Verbesserung der Tastaturzugänglichkeit
  - : Es gibt eingebaute HTML-Elemente, die über native Tastaturzugänglichkeit verfügen; wenn andere Elemente zusammen mit JavaScript verwendet werden, um ähnliche Interaktionen zu simulieren, leidet die Tastaturzugänglichkeit und die Berichterstattung von Screenreadern darunter. Wo dies unvermeidbar ist, bietet WAI-ARIA eine Möglichkeit, anderen Elementen den Fokus zu ermöglichen (mittels `tabindex`).
- Barrierefreiheit von unsemantischen Steuerelementen
  - : Wenn eine Reihe von verschachtelten `<div>`s zusammen mit CSS/JavaScript verwendet wird, um eine komplexe UI-Funktion zu erstellen, oder ein natives Steuerelement stark überarbeitet/verändert wird mittels JavaScript, kann die Barrierefreiheit leiden — Screenreader-Benutzer werden es schwer haben herauszufinden, was die Funktion macht, wenn keine Semantiken oder andere Hinweise vorhanden sind. In solchen Situationen kann ARIA helfen, das Fehlende mit einer Kombination aus Rollen wie `button`, `listbox` oder `tablist` und Eigenschaften wie `aria-required` oder `aria-posinset` zu liefern, um weitere Hinweise auf die Funktionalität zu geben.

Eine Sache, die Sie jedoch beachten sollten — **Sie sollten WAI-ARIA nur dann verwenden, wenn Sie es benötigen!** Idealerweise sollten Sie _immer_ [native HTML-Funktionen](/de/docs/Learn/Accessibility/HTML) verwenden, um die von Screenreadern benötigten Semantiken bereitzustellen, um ihren Benutzern zu sagen, was vor sich geht. Manchmal ist dies nicht möglich, entweder weil Sie nur begrenzte Kontrolle über den Code haben, oder weil Sie etwas Komplexes erstellen, das kein einfaches HTML-Element zur Implementierung hat. In solchen Fällen kann WAI-ARIA ein wertvolles Werkzeug zur Verbesserung der Barrierefreiheit sein.

Aber nochmals, verwenden Sie es nur, wenn es notwendig ist!

> [!NOTE]
> Versuchen Sie auch, sicherzustellen, dass Sie Ihre Website mit einer Vielzahl von _echten_ Benutzern testen — nicht behinderte Personen, Personen, die Screenreader verwenden, Personen, die die Tastatur zur Navigation verwenden, etc. Sie werden bessere Erkenntnisse darüber haben, wie gut es funktioniert.

## Praktische WAI-ARIA Implementierungen

Im nächsten Abschnitt werden wir auf die vier Bereiche im Detail eingehen, zusammen mit praktischen Beispielen. Bevor Sie fortfahren, sollten Sie ein Test-Setup für Screenreader einrichten, damit Sie einige der Beispiele während des Durchgehens testen können.

Siehe unseren Abschnitt über [Testen von Screenreadern](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#screen_readers) für weitere Informationen.

### Hinweiszeichen/Landmarken

WAI-ARIA fügt dem Browser das [`role` Attribut](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) hinzu, das Ihnen erlaubt, Elementen auf Ihrer Website zusätzliche semantische Werte hinzuzufügen, wo immer sie benötigt werden. Der erste große Bereich, in dem dies nützlich ist, besteht darin, Informationen für Screenreader bereitzustellen, damit deren Benutzer gemeinsame Seitenelemente finden können. Lassen Sie uns ein Beispiel betrachten — unser [website-ohne-rollen](https://github.com/mdn/learning-area/tree/main/accessibility/aria/website-no-roles) Beispiel ([Live-Demo ansehen](https://mdn.github.io/learning-area/accessibility/aria/website-no-roles/)) hat die folgende Struktur:

```html
<header>
  <h1>…</h1>
  <nav>
    <ul>
      …
    </ul>
    <form>
      <!-- search form -->
    </form>
  </nav>
</header>

<main>
  <article>…</article>
  <aside>…</aside>
</main>

<footer>…</footer>
```

Wenn Sie das Beispiel mit einem Screenreader in einem modernen Browser testen, erhalten Sie bereits einige nützliche Informationen. Zum Beispiel gibt VoiceOver Ihnen Folgendes:

- Auf dem `<header>` Element — "Banner, 2 Elemente" (es enthält eine Überschrift und die `<nav>`).
- Auf dem `<nav>` Element — "Navigation 2 Elemente" (es enthält eine Liste und ein Formular).
- Auf dem `<main>` Element — "Hauptteil 2 Elemente" (es enthält einen Artikel und eine Randspalte).
- Auf dem `<aside>` Element — "Ergänzend 2 Elemente" (es enthält eine Überschrift und eine Liste).
- Auf dem Suchformulareingabefeld — "Suchabfrage, Eingabeposition am Anfang des Textes".
- Auf dem `<footer>` Element — "Fußzeile 1 Element".

Wenn Sie zum VoiceOver-Landmarkenmenü gehen (zugänglich mit VoiceOver-Taste + U und dann mit den Cursortasten durch die Menüwahlen navigieren), sehen Sie, dass die meisten der Elemente schön aufgelistet sind, sodass sie schnell zugänglich sind.

![VoiceOver-Menü von Mac für schnelle Barrierefreiheit. Landmarks-Kopfzeile und Landmarkenliste einschließlich Banner, Navigation, Hauptteil und Ergänzend.](landmarks-list.png)

Wir könnten jedoch hier noch besser werden. Das Suchformular ist eine wirklich wichtige Landmarke, die die Leute finden möchten, aber es wird im Landmarkenmenü nicht aufgelistet oder wie eine bemerkenswerte Landmarke behandelt, abgesehen davon, dass der eigentliche Input als Sucheingabe aufgerufen wird (`<input type="search">`).

Lassen Sie uns das mithilfe einiger ARIA-Funktionen verbessern. Zuerst fügen wir einige [`role`](/de/docs/Web/Accessibility/ARIA/Roles) Attribute zu unserer HTML-Struktur hinzu. Sie können eine Kopie unserer Originaldateien nehmen (siehe [`index.html`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/website-no-roles/index.html) und [`style.css`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/website-no-roles/style.css)), oder unser Beispiel [website-aria-roles](https://github.com/mdn/learning-area/tree/main/accessibility/aria/website-aria-roles) anschauen ([Live-Demo ansehen](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)), welches eine Struktur wie folgt aufweist:

```html
<header>
  <h1>…</h1>
  <nav role="navigation">
    <ul>
      …
    </ul>
    <form role="search">
      <!-- search form -->
    </form>
  </nav>
</header>

<main>
  <article role="article">…</article>
  <aside role="complementary">…</aside>
</main>

<footer>…</footer>
```

Wir haben Ihnen auch ein Bonusfeature in diesem Beispiel gegeben — das {{htmlelement("input")}} Element wurde mit dem Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) versehen, das ihm eine beschreibende Beschriftung gibt, die von einem Screenreader vorgelesen wird, auch wenn wir kein {{htmlelement("label")}} Element eingefügt haben. In Fällen wie diesen ist dies sehr nützlich — ein Suchformular wie dieses ist ein sehr häufiges, leicht erkennbares Feature, und das Hinzufügen einer visuellen Beschriftung würde das Seitendesign stören.

```html
<input
  type="search"
  name="q"
  placeholder="Search query"
  aria-label="Search through site content" />
```

Wenn wir nun VoiceOver verwenden, um dieses Beispiel zu betrachten, erhalten wir einige Verbesserungen:

- Das Suchformular wird als separates Element, sowohl beim Browsen durch die Seite als auch im Landmarkenmenü, angesprochen.
- Der in `aria-label` enthaltene Beschriftungstext wird vorgelesen, wenn das Formulareingabefeld hervorgehoben ist.

Darüber hinaus ist die Seite eher barrierefrei für Benutzer älterer Browser wie IE8; es lohnt sich daher, ARIA-Rollen dafür bereitzustellen. Und wenn aus irgendeinem Grund Ihre Seite nur aus `<div>`s aufgebaut ist, sollten Sie die ARIA-Rollen bereitstellen, um diese dringend benötigten Semantiken zu bieten!

Die verbesserten Semantiken des Suchformulars haben gezeigt, was möglich ist, wenn ARIA über die in HTML verfügbaren Semantiken hinausgeht. Sie werden weiter unten mehr über diese Semantiken und die Leistungsfähigkeit von ARIA-Eigenschaften/-Attributen sehen, insbesondere im Abschnitt [Barrierefreiheit von unsemantischen Steuerelementen](#barrierefreiheit_von_unsemantischen_steuerleelementen). Für den Moment lassen Sie uns sehen, wie ARIA bei dynamischen Inhaltsupdates helfen kann.

### Dynamische Inhaltsupdates

In den DOM geladene Inhalte können einfach mit einem Screenreader angesprochen werden, von textbasierten Inhalten bis hin zu alternativen Texten, die an Bildern angehängt sind. Traditionelle statische Webseiten mit weitgehend Textinhalten sind daher für Menschen mit Sehbehinderungen leicht barrierefrei zu gestalten.

Das Problem ist, dass moderne Web-Apps oft nicht nur statischer Text sind — sie aktualisieren oft Teile der Seite, indem sie neue Inhalte vom Server abrufen und den DOM aktualisieren. Diese werden manchmal als **lebende Regionen** bezeichnet.

Lassen Sie uns ein kurzes Beispiel ansehen — siehe [`aria-no-live.html`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/aria-no-live.html) (auch [Live-Demo ansehen](https://mdn.github.io/learning-area/accessibility/aria/aria-no-live.html)). In diesem Beispiel haben wir ein einfaches Zufallszitatfeld:

```html
<section>
  <h1>Random quote</h1>
  <blockquote>
    <p></p>
  </blockquote>
</section>
```

Unser JavaScript verwendet das [`fetch()`](/de/docs/Web/API/Window/fetch) API, um eine JSON-Datei zu laden, die eine Reihe von Zufallszitaten und deren Autoren enthält. Sobald dies geschehen ist, starten wir eine [`setInterval()`](/de/docs/Web/API/Window/setInterval) Schleife, die alle 10 Sekunden ein neues Zufallszitat in das Zitatfeld lädt:

```js
const intervalID = setInterval(showQuote, 10000);
```

Dies funktioniert gut, ist aber nicht ideal für die Barrierefreiheit — die Inhaltsaktualisierung wird von Screenreadern nicht erkannt, sodass deren Benutzer nicht wissen würden, was vor sich geht. Dies ist ein ziemlich triviales Beispiel, aber stellen Sie sich vor, Sie würden ein komplexes UI mit vielen ständig aktualisierten Inhalten erstellen, wie einen Chatroom, ein Strategiespiel-UI oder eine live aktualisierte Warenkorbanzeige — es wäre unmöglich, die App auf effektive Weise zu nutzen, ohne eine Art von Möglichkeit, den Benutzer auf die Aktualisierungen hinzuweisen.

WAI-ARIA bietet zum Glück einen nützlichen Mechanismus, um diese Benachrichtigungen bereitzustellen — die [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live) Eigenschaft. Wenn Sie dies auf ein Element anwenden, werden in einem Screenreader die aktualisierten Inhalte vorgelesen. Wie dringend der Inhalt vorgelesen wird, hängt vom Attributwert ab:

- `off`
  - : Der Standardwert. Aktualisierungen sollten nicht angesagt werden.
- `polite`
  - : Aktualisierungen sollten nur dann angesagt werden, wenn der Benutzer untätig ist.
- `assertive`
  - : Aktualisierungen sollten dem Benutzer so schnell wie möglich angesagt werden.

Wir möchten, dass Sie eine Kopie von [`aria-no-live.html`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/aria-no-live.html) und [`quotes.json`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/quotes.json) nehmen und Ihr `<section>` Eröffnungstag folgendermaßen aktualisieren:

```html
<section aria-live="assertive">…</section>
```

Dadurch wird der Inhalt von einem Screenreader vorgelesen, während er aktualisiert wird.

> [!NOTE]
> Die meisten Browser werden eine Sicherheitsexception auslösen, wenn Sie versuchen, eine HTTP-Anfrage von einer `file://` URL zu machen, z.B. wenn Sie die Datei einfach öffnen, indem Sie sie direkt in den Browser laden (durch Doppelklicken, etc.). Siehe [how to set up a local testing server](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server).

Hier gibt es noch einen weiteren Punkt zu bedenken — nur der Textteil, der aktualisiert wird, wird vorgelesen. Es könnte schön sein, wenn wir immer die Überschrift auch vorlesen lassen, damit der Benutzer sich erinnern kann, was vorgelesen wird. Zu diesem Zweck können wir das [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic) Attribut dem Abschnitt hinzufügen. Aktualisieren Sie Ihr `<section>` Eröffnungstag noch einmal, wie folgt:

```html
<section aria-live="assertive" aria-atomic="true">…</section>
```

Das `aria-atomic="true"` Attribut teilt Screenreadern mit, dass der gesamte Inhalt des Elements als eine einzige atomare Einheit vorgelesen werden sollte, nicht nur die Teile, die aktualisiert wurden.

> [!NOTE]
> Sie können das fertige Beispiel unter [`aria-live.html`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/aria-live.html) ([Live-Demo ansehen](https://mdn.github.io/learning-area/accessibility/aria/aria-live.html)) sehen.

> [!NOTE]
> Das [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant) Attribut ist auch recht nützlich, um zu steuern, was vorgelesen wird, wenn eine lebende Region aktualisiert wird. Sie können zum Beispiel nur Inhaltszugänge oder -entfernungen ankündigen lassen.

### Verbesserung der Tastaturzugänglichkeit

Wie an einigen anderen Stellen im Modul besprochen, ist eine der großen Stärken von HTML in Bezug auf Barrierefreiheit die eingebaute Tastaturzugänglichkeit von Funktionen wie Schaltflächen, Formularelementen und Links. Im Allgemeinen können Sie die Tabulatortaste verwenden, um zwischen Steuerelementen zu navigieren, die Eingabetaste, um Steuerelemente auszuwählen oder zu aktivieren, und gelegentlich andere Steuertasten je nach Bedarf (zum Beispiel die Auf- und Abwärtspfeile, um zwischen Optionen in einer `<select>` Box zu wechseln).

Manchmal werden Sie jedoch dazu kommen, Code zu schreiben, der nicht-semantische Elemente als Schaltflächen (oder andere Steuerungstypen) verwendet oder fokussierbare Steuerelemente für nicht ganz den richtigen Zweck einsetzt. Sie können versuchen, einen schlechten Code zu verbessern, den Sie geerbt haben, oder Sie können ein komplexes Widget erstellen, das dies erfordert.

In Bezug auf das Fokussierbar-Machen von nicht-fokussierbarem Code erweitert WAI-ARIA das `tabindex` Attribut mit einigen neuen Werten:

- `tabindex="0"` — wie oben angegeben, ermöglicht dieser Wert es nicht normalerweise tab-fähigen Elementen, tab-fähig zu werden. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — ermöglicht es nicht normalerweise tab-fähigen Elementen, fokussiert zu werden, programmatisch, z.B. über JavaScript oder als Ziel von Links.

Wir haben dies detaillierter besprochen und eine typische Implementierung in unserem HTML-Zugänglichkeitsartikel gezeigt — siehe [Tastaturzugänglichkeit wieder einbauen](/de/docs/Learn/Accessibility/HTML#building_keyboard_accessibility_back_in).

### Barrierefreiheit von unsemantischen Steuerelementen

Dies folgt aus dem vorherigen Abschnitt — wenn eine Reihe von verschachtelten `<div>`s zusammen mit CSS/JavaScript verwendet wird, um eine komplexe UI-Funktion zu erstellen, oder ein natives Steuerelement stark überarbeitet/verändert wird mittels JavaScript, kann nicht nur die Tastaturzugänglichkeit leiden, sondern Screenreader-Benutzer werden es schwer haben herauszufinden, was die Funktion macht, wenn keine Semantiken oder andere Hinweise vorhanden sind. In solchen Situationen kann ARIA helfen, diese fehlenden Semantiken bereitzustellen.

#### Formularvalidierung und Fehlerbenachrichtigungen

Lassen Sie uns zunächst das Formularbeispiel erneut betrachten, das wir in unserem CSS und JavaScript Zugänglichkeitsartikel (siehe [Keep it unobtrusive](/de/docs/Learn/Accessibility/CSS_and_JavaScript#keeping_it_unobtrusive) für eine vollständige Wiederholung) untersucht haben. Am Ende dieses Abschnitts haben wir gezeigt, dass wir einige ARIA-Attribute für das Fehlermeldungsfeld, das irgendwelche Validierungsfehler anzeigt, wenn Sie versuchen, das Formular abzusenden, hinzugefügt haben:

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

- [`role="alert"`](/de/docs/Web/Accessibility/ARIA/Roles/alert_role) verwandelt das angewendete Element automatisch in eine lebendige Region, sodass Änderungen daran vorgelesen werden; es identifiziert es auch semantisch als eine Warnungsmeldung (wichtige zeit-/kontextsensitive Informationen) und stellt eine bessere, barrierefreiere Art der Benachrichtigung eines Benutzers dar (Modale Dialoge wie [`alert()`](/de/docs/Web/API/Window/alert) Aufrufe haben eine Zahl von Zugänglichkeitsproblemen; siehe [Popup Windows](https://webaim.org/techniques/javascript/other#popups) von WebAIM).
- Ein [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant) Wert von `all` instruiert den Screenreader, die Inhaltsliste der Fehler immer dann vorzulesen, wenn Änderungen daran vorgenommen werden — d.h. wenn Fehler hinzugefügt oder entfernt werden. Dies ist nützlich, weil der Benutzer wissen möchte, welche Fehler noch vorhanden sind, nicht nur, was hinzugefügt oder entfernt wurde.

Wir könnten unsere ARIA-Nutzung weiter betreiben und noch mehr Validierungshilfe bereitstellen. Wie wäre es, wenn wir angeben, ob Felder überhaupt erforderlich sind und welchen Bereich das Alter haben sollte?

1. Nehmen Sie in diesem Punkt eine Kopie unserer Dateien [`form-validation.html`](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html) und [`validation.js`](https://github.com/mdn/learning-area/blob/main/accessibility/css/validation.js) und speichern Sie sie in einem lokalen Verzeichnis.
2. Öffnen Sie beide in einem Texteditor und sehen Sie sich an, wie der Code funktioniert.
3. Fügen Sie zunächst ein Paragraphen direkt über das öffnende `<form>` Tag ein, wie das untenstehende, und markieren Sie beide Formular-`<label>`s mit einem Asterisk. Auf diese Weise markieren wir üblicherweise erforderliche Felder für sehende Benutzer.

   ```html
   <p>Fields marked with an asterisk (*) are required.</p>
   ```

4. Dies macht visuell Sinn, ist aber für Screenreader-Benutzer nicht so leicht verständlich. Zum Glück bietet WAI-ARIA das [`aria-required`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required) Attribut an, das Screenreadern Hinweise gibt, dass sie Benutzern mitteilen sollten, dass Formulareingabefelder ausgefüllt werden müssen. Aktualisieren Sie die `<input>` Elemente wie folgt:

   ```html
   <input type="text" name="name" id="name" aria-required="true" />

   <input type="number" name="age" id="age" aria-required="true" />
   ```

5. Wenn Sie das Beispiel jetzt speichern und mit einem Screenreader testen, sollten Sie etwas hören wie "Geben Sie Ihren Namen ein, Stern, erforderlich, Text bearbeitet".
6. Es könnte auch nützlich sein, wenn wir Screenreader-Benutzern und sehenden Benutzern eine Vorstellung davon geben, was der Wert des Alters sein sollte. Dies wird oft als Tooltip oder Platzhalter innerhalb des Formularfeldes dargestellt. WAI-ARIA enthält zwar die Eigenschaften [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax), um Min- und Max-Werte anzugeben, und Screenreader unterstützen die nativen `min` und `max` Attribute. Eine weitere gut unterstützte Funktion ist das HTML `placeholder` Attribut, das eine Nachricht enthalten kann, die im Eingabefeld angezeigt wird, wenn kein Wert eingegeben ist und von einigen wenige Screenreadern vorgelesen wird. Aktualisieren Sie Ihre Nummerneingabe wie folgt:

   ```html
   <label for="age">Your age:</label>
   <input
     type="number"
     name="age"
     id="age"
     placeholder="Enter 1 to 150"
     required
     aria-required="true" />
   ```

Immer ein {{HTMLelement('label')}} für jede Eingabe einbeziehen. Während einige Screenreader den Platzhaltertext ankündigen, tun dies die meisten nicht. Zulässige Alternativen, um Formulareingaben mit einem zugänglichen Namen zu versehen, umfassen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) und [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby). Aber das `<label>` Element mit einem `for` Attribut ist die bevorzugte Methode, da es die Benutzerfreundlichkeit für alle Benutzer erhöht, einschließlich Mausanwendern.

> [!NOTE]
> Sie können das fertige Beispiel live unter [`form-validation-updated.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-updated.html) finden.

WAI-ARIA ermöglicht auch einige fortgeschrittene Formularbeschriftungstechniken, die über das klassische {{htmlelement("label")}} Element hinausgehen. Wir haben bereits über die Verwendung der [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) Eigenschaft gesprochen, um dort eine Beschriftung anzugeben, wo wir nicht möchten, dass die Beschriftung für sehende Benutzer sichtbar ist (siehe den Abschnitt [Hinweiszeichen/Landmarken](#signpostslandmarks) oben). Einige andere Beschriftungstechniken verwenden andere Eigenschaften wie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), wenn Sie ein nicht-`<label>` Element als Beschriftung bezeichnen oder mehrere Formularfelder mit derselben Beschriftung beschriften möchten, und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby), wenn Sie andere Informationen mit einer Formulareingabe verbinden möchten und diese ebenfalls vorgelesen werden sollen. Weitere Einzelheiten finden Sie im Artikel [Advanced Form Labeling von WebAIM](https://webaim.org/techniques/forms/advanced).

Es gibt auch viele andere nützliche Eigenschaften und Zustände, um den Status von Formularelementen anzugeben. Zum Beispiel kann `aria-disabled="true"` verwendet werden, um anzuzeigen, dass ein Formularelement deaktiviert ist. Viele Browser überspringen deaktivierte Formularelemente, was dazu führt, dass sie von Screenreadern nicht vorgelesen werden. In einigen Fällen wird ein deaktiviertes Element wahrgenommen, daher ist es eine gute Idee, dieses Attribut einzufügen, um den Screenreader wissen zu lassen, dass ein deaktiviertes Formularelement in der Tat deaktiviert ist.

Wenn sich der deaktivierte Zustand eines Eingabefeldes wahrscheinlich ändert, ist es auch eine gute Idee, anzugeben, wann dies geschieht und wie das Ergebnis aussieht. Zum Beispiel gibt es in unserem Demo [form-validation-checkbox-disabled.html](https://mdn.github.io/learning-area/accessibility/aria/form-validation-checkbox-disabled.html) ein Checkbox, die, wenn sie ausgewählt ist, ein weiteres Formularelement aktiviert, um weitere Informationen einzugeben. Wir haben eine versteckte lebendige Region eingerichtet:

```html
<p class="hidden-alert" aria-live="assertive"></p>
```

die von der Ansicht verborgen wird, indem absolute Positionierung verwendet wird. Wenn dies aktiviert/deaktiviert ist, aktualisieren wir den Text in der versteckten lebenden Region, um Benutzern von Screenreadern mitzuteilen, was das Ergebnis des Aus- und Abwählens dieser Checkbox ist, sowie den `aria-disabled` Zustand und einige visuelle Indikatoren ebenfalls zu aktualisieren:

```js
function toggleMusician(bool) {
  const instrument = formItems[formItems.length - 1];
  if (bool) {
    instrument.input.disabled = false;
    instrument.label.style.color = "#000";
    instrument.input.setAttribute("aria-disabled", "false");
    hiddenAlert.textContent =
      "Instruments played field now enabled; use it to tell us what you play.";
  } else {
    instrument.input.disabled = true;
    instrument.label.style.color = "#999";
    instrument.input.setAttribute("aria-disabled", "true");
    instrument.input.removeAttribute("aria-label");
    hiddenAlert.textContent = "Instruments played field now disabled.";
  }
}
```

#### Beschreiben von nicht-semantischen Schaltflächen als Schaltflächen

Einige Male in diesem Kurs haben wir bereits die native Zugänglichkeit (und die Zugänglichkeitsprobleme bei der Verwendung anderer Elemente zum Vortäuschen) von Schaltflächen, Links oder Formularelementen erwähnt (siehe [UI-Steuerelemente](/de/docs/Learn/Accessibility/HTML#ui_controls) im HTML-Zugänglichkeitsartikel und [Verbesserung der Tastaturzugänglichkeit](#verbesserung_der_tastaturzugänglichkeit) oben). Grundsätzlich können Sie in vielen Fällen die Tastaturzugänglichkeit mit `tabindex` und ein wenig JavaScript zurückbringen, ohne zu viel Mühe zu haben.

Aber was ist mit den Screenreadern? Sie werden die Elemente immer noch nicht als Schaltflächen erkennen. Wenn wir unser Beispiel [`fake-div-buttons.html`](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) in einem Screenreader testen, werden unsere gefälschten Schaltflächen mit Ausdrücken wie „Klick mich!, Gruppe“ gemeldet, was offensichtlich verwirrend ist.

Wir können dies mit einer WAI-ARIA-Rolle beheben. Machen Sie eine lokale Kopie von [`fake-div-buttons.html`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) und fügen Sie jedem Schaltflächen-`<div>` das Attribut [`role="button"`](/de/docs/Web/Accessibility/ARIA/Roles/button_role) hinzu, zum Beispiel:

```html
<div data-message="This is from the first button" tabindex="0" role="button">
  Click me!
</div>
```

Wenn Sie dies nun mit einem Screenreader ausprobieren, werden Sie Schaltflächen mit Phrasen wie „Klick mich!, Schaltfläche“ gemeldet bekommen. Wenn dies auch viel besser ist, müssen Sie trotzdem alle nativen Schaltflächenfunktionen, die die Benutzer erwarten, wie die Verarbeitung von <kbd>enter</kbd> und Klickereignissen zurückbringen, wie im [`button` Rollen-Dokumentation](/de/docs/Web/Accessibility/ARIA/Roles/button_role) erklärt.

> [!NOTE]
> Vergessen Sie nicht, dass es immer besser ist, das richtige semantische Element zu verwenden, wo immer möglich. Wenn Sie eine Schaltfläche erstellen möchten und ein {{htmlelement("button")}} Element verwenden können, sollten Sie ein {{htmlelement("button")}} Element verwenden!

#### Benutzer durch komplexe Widgets führen

Es gibt eine ganze Reihe anderer [Rollen](/de/docs/Web/Accessibility/ARIA/Roles), die nicht-semantische Elementstrukturen als gängige UI-Features identifizieren können, die über das hinausgehen, was in standardmäßigem HTML verfügbar ist, z.B. [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Roles/slider_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role), [`tree`](/de/docs/Web/Accessibility/ARIA/Roles/tree_role). Sie können sich verschiedene nützliche Beispiele in der [Deque University Code Library](https://dequeuniversity.com/library/) ansehen, um eine Idee zu bekommen, wie solche Steuerelemente barrierefrei gemacht werden können.

Lassen Sie uns ein Beispiel durchgehen. Wir kehren zu unserer einfachen absolut positionierten Registerkartenoberfläche zurück (siehe [Verstecken von Dingen](/de/docs/Learn/Accessibility/CSS_and_JavaScript#hiding_things) in unserem CSS- und JavaScript-Zugänglichkeitsartikel), das Sie bei [Tabbed info box example](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/tabbed-info-box.html) (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html)) finden können.

Dieses Beispiel funktioniert so wie es ist gut in Bezug auf die Tastaturzugänglichkeit — Sie können problemlos zwischen den verschiedenen Registerkarten navigieren und diese auswählen, um den Registerkarteninhalt anzuzeigen. Es ist auch ziemlich zugänglich — Sie können durch den Inhalt scrollen und die Überschriften verwenden, um zu navigieren, auch wenn Sie nicht sehen können, was auf dem Bildschirm passiert. Es ist jedoch nicht offensichtlich, was der Inhalt ist — ein Screenreader meldet derzeit den Inhalt als Liste von Links und einigen Inhalten mit drei Überschriften. Es gibt Ihnen keine Vorstellung vom Verhältnis der Inhalte zueinander. Dem Benutzer mehr Hinweise auf die Struktur der Inhalte zu geben, ist immer gut.

Um die Dinge zu verbessern, haben wir eine neue Version des Beispiels namens [`aria-tabbed-info-box.html`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/aria-tabbed-info-box.html) erstellt ([Live-Demo ansehen](https://mdn.github.io/learning-area/accessibility/aria/aria-tabbed-info-box.html)). Wir haben die Struktur der Registerkartenoberfläche wie folgt aktualisiert:

```html
<ul role="tablist">
  <li
    class="active"
    role="tab"
    aria-selected="true"
    aria-setsize="3"
    aria-posinset="1"
    tabindex="0">
    Tab 1
  </li>
  <li
    role="tab"
    aria-selected="false"
    aria-setsize="3"
    aria-posinset="2"
    tabindex="0">
    Tab 2
  </li>
  <li
    role="tab"
    aria-selected="false"
    aria-setsize="3"
    aria-posinset="3"
    tabindex="0">
    Tab 3
  </li>
</ul>
<div class="panels">
  <article class="active-panel" role="tabpanel" aria-hidden="false">…</article>
  <article role="tabpanel" aria-hidden="true">…</article>
  <article role="tabpanel" aria-hidden="true">…</article>
</div>
```

> [!NOTE]
> Die auffälligste Änderung hier ist, dass wir die Links, die ursprünglich im Beispiel vorhanden waren, entfernt und einfach die Listenelemente als Registerkarten verwendet haben — dies wurde getan, weil es für Screenreader-Benutzer weniger verwirrend ist (die Links bringen Sie wirklich nirgendwo hin; sie ändern einfach die Ansicht) und es ermöglicht, dass die Seitsize/Position in Set-Funktionen besser funktionieren — wenn diese auf den Links gesetzt wurden, meldet der Browser immer „1 von 1“ anstelle von „1 von 3“, „2 von 3“ usw.

In den verwendeten ARIA-Funktionen sind enthalten:

- Neue Rollen — [`tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role), [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role)
  - : Diese identifizieren die wichtigen Bereiche der Registerkartenoberfläche – den Container für die Registerkarten, die Registerkarten selbst und die entsprechenden Registerkarten-Schaltflächen.
- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)
  - : Definiert, welche Registerkarte gerade ausgewählt ist. Wenn verschiedene Registerkarten vom Benutzer ausgewählt werden, wird der Wert dieses Attributs auf den verschiedenen Registerkarten über JavaScript aktualisiert.
- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)
  - : Verbirgt ein Element davor, von einem Screenreader vorgelesen zu werden. Wenn verschiedene Registerkarten vom Benutzer ausgewählt werden, wird der Wert dieses Attributs auf den verschiedenen Registerkarten über JavaScript aktualisiert.
- `tabindex="0"`
  - : Da wir die Links entfernt haben, müssen wir den Listenelementen dieses Attribut geben, damit sie über die Tastatur den Fokus haben.
- [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize)
  - : Diese Eigenschaft ermöglicht es Ihnen, Screenreadern anzugeben, dass ein Element Teil einer Serie ist und wie viele Elemente die Serie hat.
- [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset)
  - : Diese Eigenschaft ermöglicht es Ihnen, anzugeben, an welcher Position in einer Serie sich ein Element befindet. Zusammen mit `aria-setsize` bietet es einem Screenreader genügend Informationen, um Ihnen mitzuteilen, dass Sie sich gerade auf „Element 1 von 3“ befinden, etc. In vielen Fällen sollten Browser in der Lage sein, diese Informationen aus der Elementhierarchie abzuleiten, aber es hilft sicherlich, mehr Hinweise bereitzustellen.

In unseren Tests hat diese neue Struktur die Dinge insgesamt verbessert. Die Registerkarten werden nun als Registerkarten erkannt (z.B. wird „Registerkarte“ vom Screenreader ausgesprochen), die ausgewählte Registerkarte wird durch das Vorlesen von „ausgewählt“ mit dem Registerkartennamen angezeigt, und der Screenreader teilt Ihnen auch mit, auf welcher Registerkartennummer Sie sich momentan befinden. Darüber hinaus, aufgrund der `aria-hidden` Einstellungen (nur der nicht versteckte enthält je `aria-hidden="false"`) ist der nicht versteckte Inhalt der einzige, den Sie herunter navigieren können, was bedeutet, dass der ausgewählte Inhalt leichter zu finden ist.

> [!NOTE]
> Wenn es irgendetwas gibt, das Sie ausdrücklich nicht von Screenreadern vorgelesen lassen möchten, können Sie diesem das Attribut `aria-hidden="true"` geben.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen beherrschen, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: WAI-ARIA](/de/docs/Learn/Accessibility/WAI-ARIA_basics/Test_your_skills:_WAI-ARIA).

## Zusammenfassung

Dieser Artikel hat bei weitem nicht alles abgedeckt, was in WAI-ARIA verfügbar ist, aber er sollte Ihnen genügend Informationen gegeben haben, um zu verstehen, wie es verwendet wird, und einige der häufigsten Muster zu erkennen, die es erfordern.

## Siehe auch

- [Aria-Zustände und -Eigenschaften](/de/docs/Web/Accessibility/ARIA/Attributes): Alle `aria-*` Attribute
- [WAI-ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Roles): Kategorien von ARIA-Rollen und die auf MDN behandelten Rollen
- [ARIA in HTML](https://www.w3.org/TR/html-aria/) auf W3C: Eine Spezifikation, die für jede HTML-Funktion definiert, welche Barrierefreiheits-(ARIA-)Semantiken implizit von dem Browser darauf angewendet werden und welche WAI-ARIA-Funktionen Sie darauf einstellen können, wenn zusätzliche Semantiken erforderlich sind
- [Deque University Code Library](https://dequeuniversity.com/library/): Eine Bibliothek wirklich nützlicher und praktischer Beispiele, die komplexe UI-Steuerelemente zeigen, die mit WAI-ARIA Features zugänglich gemacht werden
- [WAI-ARIA Autorengebräuche](https://www.w3.org/WAI/ARIA/apg/) auf W3C: Ein sehr detailliertes Designmuster des W3C, das erklärt, wie man verschiedene Arten von komplexen UI-Steuerelementen implementiert und sie dabei mit WAI-ARIA Features zugänglich macht

{{PreviousMenuNext("Learn/Accessibility/CSS_and_JavaScript","Learn/Accessibility/Multimedia", "Learn/Accessibility")}}
