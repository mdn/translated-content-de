---
title: WAI-ARIA-Grundlagen
slug: Learn/Accessibility/WAI-ARIA_basics
l10n:
  sourceCommit: b795bc99fc5c5d8a96c1b202a12750404085c28a
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Accessibility/CSS_and_JavaScript","Learn/Accessibility/Multimedia", "Learn/Accessibility")}}

Anknüpfend an den vorherigen Artikel, kann es manchmal schwierig sein, komplexe UI-Steuerelemente zu erstellen, die unsemantisches HTML und dynamisch aktualisierte JavaScript-Inhalte beinhalten. WAI-ARIA ist eine Technologie, die bei solchen Problemen helfen kann, indem sie zusätzliche Semantik hinzufügt, die Browser und Hilfstechnologien erkennen und verwenden können, um den Nutzern mitzuteilen, was vor sich geht. Hier zeigen wir, wie man es auf grundlegender Ebene nutzt, um die Zugänglichkeit zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, CSS und
        JavaScript. Ein Verständnis der
        <a href="/de/docs/Learn/Accessibility"
          >vorherigen Artikel im Kurs</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein vertrauter Umgang mit WAI-ARIA und dessen Einsatzmöglichkeiten zur Bereitstellung nützlicher zusätzlicher Semantik zur Verbesserung der Zugänglichkeit.
      </td>
    </tr>
  </tbody>
</table>

## Was ist WAI-ARIA?

Starten wir mit einem Blick darauf, was WAI-ARIA ist und was es für uns tun kann.

### Eine ganz neue Reihe von Problemen

Als Webanwendungen immer komplexer und dynamischer wurden, traten neue barrierefreie Funktionen und Probleme auf.

Zum Beispiel führte HTML eine Reihe semantischer Elemente ein, um gängige Seitenelemente zu definieren ({{htmlelement("nav")}}, {{htmlelement("footer")}}, etc.). Bevor diese verfügbar waren, nutzten Entwickler {{htmlelement("div")}}s mit IDs oder Klassen, z. B. `<div class="nav">`, was problematisch war, da es keine einfache Möglichkeit gab, ein spezifisches Seitenelement wie die Hauptnavigation programmatisch zu finden.

Die anfängliche Lösung war, am Anfang der Seite einen oder mehrere versteckte Links hinzuzufügen, die zur Navigation (oder zu etwas anderem) führen, zum Beispiel:

```html
<a href="#hidden" class="hidden">Skip to navigation</a>
```

Aber dies war immer noch nicht sehr präzise und konnte nur verwendet werden, wenn der Screenreader vom Anfang der Seite liest.

Ein weiteres Beispiel sind Apps, die begannen, komplexe Steuerelemente wie Datumsauswähler für die Datumswahl, Schieberegler für die Wertauswahl etc. anzubieten. HTML stellt spezielle Eingabetypen bereit, um solche Steuerelemente darzustellen:

```html
<input type="date" /> <input type="range" />
```

Diese wurden ursprünglich nicht gut unterstützt und es war und ist nach wie vor schwierig, sie zu stylen, was Designer und Entwickler dazu veranlasste, sich für benutzerdefinierte Lösungen zu entscheiden. Anstatt diese nativen Funktionen zu nutzen, verlassen sich einige Entwickler auf JavaScript-Bibliotheken, die solche Steuerelemente als eine Serie von verschachtelten {{htmlelement("div")}}s generieren, die dann mit CSS gestylt und mit JavaScript gesteuert werden.

Das Problem hierbei ist, dass sie visuell funktionieren, aber Screenreader können nicht erkennen, was sie eigentlich sind, und ihre Nutzer erfahren nur, dass sie ein Durcheinander von Elementen ohne Semantik sehen.

### Einführung von WAI-ARIA

[WAI-ARIA](https://www.w3.org/TR/wai-aria/) (Web Accessibility Initiative - Accessible Rich Internet Applications) ist eine Spezifikation, die von W3C erstellt wurde und eine Reihe zusätzlicher HTML-Attribute definiert, die auf Elemente angewendet werden können, um zusätzliche Semantik bereitzustellen und die Zugänglichkeit an den Stellen zu verbessern, wo sie fehlt. In der Spezifikation werden drei Hauptmerkmale definiert:

- [Rollen](/de/docs/Web/Accessibility/ARIA/Roles)
  - : Diese definieren, was ein Element ist oder tut. Viele davon sind sogenannte Landmark-Rollen, die den semantischen Wert struktureller Elemente wie `role="navigation"` ({{htmlelement("nav")}}) oder `role="complementary"` ({{htmlelement("aside")}}) weitgehend duplizieren. Andere Rollen beschreiben verschiedene Seitenstrukturen, wie `role="banner"`, `role="search"`, `role="tablist"`, und `role="tabpanel"`, die häufig in Benutzeroberflächen zu finden sind.
- Eigenschaften
  - : Diese definieren Eigenschaften von Elementen, die ihnen zusätzliche Bedeutung oder Semantik verleihen können. Beispielsweise gibt `aria-required="true"` an, dass ein Formulareingabefeld ausgefüllt werden muss, um gültig zu sein, während `aria-labelledby="label"` Ihnen ermöglicht, eine ID auf ein Element zu setzen und es dann als Label für etwas anderes auf der Seite, einschließlich mehrerer Elemente, zu referenzieren, was mit `<label for="input">` nicht möglich ist. Beispielsweise könnten Sie `aria-labelledby` verwenden, um anzugeben, dass eine in einem {{htmlelement("div")}} enthaltene Schlüsselbeschreibung das Label für mehrere Tabellenspalten ist, oder als Alternative zum Alt-Text eines Bildes — vorhandene Informationen auf der Seite als Alt-Text eines Bildes anzugeben, anstatt sie im `alt`-Attribut zu wiederholen. Ein Beispiel können Sie bei [Textalternativen](/de/docs/Learn/Accessibility/HTML#textalternativen) sehen.
- Zustände
  - : Spezielle Eigenschaften, die die aktuellen Bedingungen von Elementen definieren, z. B. `aria-disabled="true"`, was einem Screenreader angibt, dass ein Formulareingabefeld derzeit deaktiviert ist. Zustände unterscheiden sich von Eigenschaften insofern, als Eigenschaften sich während der Lebensdauer einer App nicht ändern, während Zustände sich ändern können, in der Regel programmatisch über JavaScript.

Ein wichtiger Punkt zu WAI-ARIA Attributen ist, dass sie nichts an der Webseite verändern, außer den Informationen, die von den Zugänglichkeits-APIs des Browsers bereitgestellt werden (woher Screenreader ihre Informationen beziehen). WAI-ARIA beeinflusst weder die Webseitenstruktur noch das DOM, obwohl die Attribute nützlich sein können, um Elemente mit CSS auszuwählen.

> [!NOTE]
> Sie finden eine nützliche Liste aller ARIA-Rollen und deren Verwendungen, mit Links zu weiteren Informationen, in der WAI-ARIA-Spezifikation — siehe [Definition of Roles](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) — auf dieser Seite — siehe [ARIA roles](/de/docs/Web/Accessibility/ARIA/Roles).
>
> Die Spezifikation enthält auch eine Liste aller Eigenschaften und Zustände mit Links zu weiteren Informationen — siehe [Definitions of States and Properties (all `aria-*` attributes)](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def).

### Wo wird WAI-ARIA unterstützt?

Das ist keine leichte Frage zu beantworten. Es ist schwierig, eine abschließende Ressource zu finden, die besagt, welche Funktionen von WAI-ARIA unterstützt werden und wo, weil:

1. Es gibt viele Funktionen in der WAI-ARIA-Spezifikation.
2. Es gibt viele Kombinationen von Betriebssystemen, Browsern und Screenreadern, die zu berücksichtigen sind.

Dieser letzte Punkt ist entscheidend — Um überhaupt einen Screenreader zu verwenden, muss Ihr Betriebssystem Browser ausführen, die über die notwendigen Zugänglichkeits-APIs verfügen, um die Informationen bereitzustellen, die Screenreader zur Erfüllung ihrer Aufgabe benötigen. Die meisten beliebten Betriebssysteme haben ein oder zwei Browser, mit denen Screenreader arbeiten können. Die Paciello Group hat einen relativ aktuellen Beitrag, der Daten dazu liefert — siehe [Rough Guide: browsers, operating systems and screen reader support updated](https://www.tpgi.com/rough-guide-browsers-operating-systems-and-screen-reader-support-updated/).

Als nächstes müssen Sie sich Sorgen darüber machen, ob die betroffenen Browser ARIA-Funktionen unterstützen und sie über ihre APIs bereitstellen, aber auch, ob Screenreader diese Informationen erkennen und ihren Nutzern auf nützliche Weise präsentieren.

1. Die Unterstützung durch Browser ist nahezu universell.
2. Die Unterstützung durch Screenreader für ARIA-Funktionen ist noch nicht ganz auf diesem Niveau, aber die beliebtesten Screenreader nähern sich an. Sie können sich einen Eindruck von den Unterstützungsniveaus verschaffen, indem Sie sich den Artikel von Powermapper über [WAI-ARIA Screen reader compatibility](https://www.powermapper.com/tests/screen-readers/aria/) ansehen.

In diesem Artikel werden wir nicht den Versuch unternehmen, jede WAI-ARIA-Funktion und ihre genauen Unterstützungsdetails abzudecken. Stattdessen werden wir die wichtigsten WAI-ARIA-Funktionen behandeln, die Sie kennen sollten; wenn wir keine Unterstützungsdetails erwähnen, können Sie davon ausgehen, dass die Funktion gut unterstützt wird. Wir werden eindeutig auf alle Ausnahmen hinweisen.

> [!NOTE]
> Einige JavaScript-Bibliotheken unterstützen WAI-ARIA, was bedeutet, dass sie beim Erstellen von UI-Funktionen wie komplexen Formularsteuerelementen ARIA-Attribute hinzufügen, um die Zugänglichkeit dieser Funktionen zu verbessern. Wenn Sie nach einer Drittanbieter-JavaScript-Lösung für die schnelle UI-Entwicklung suchen, sollten Sie die Zugänglichkeit ihrer UI-Widgets definitiv als wichtigen Faktor bei Ihrer Entscheidung berücksichtigen. Gute Beispiele sind jQuery UI (siehe [Über jQuery UI: Tiefgreifende Unterstützung der Barrierefreiheit](https://jqueryui.com/about/#deep-accessibility-support)), [ExtJS](https://www.sencha.com/products/extjs/) und [Dojo/Dijit](https://dojotoolkit.org/reference-guide/1.10/dijit/a11y/statement.html).

### Wann sollten Sie WAI-ARIA verwenden?

Wir haben einige der Probleme, die zur Schaffung von WAI-ARIA geführt haben, bereits angesprochen, aber im Wesentlichen gibt es vier Hauptbereiche, in denen WAI-ARIA nützlich ist:

- Wegweiser/Landmarks
  - : Die Werte des [`role`](/de/docs/Web/Accessibility/ARIA/Roles)-Attributs von ARIA können als Wegweiser fungieren, die entweder die Semantik von HTML-Elementen replizieren (z.B. {{htmlelement("nav")}}) oder über die Semantik von HTML hinausgehen, um Wegweiser zu verschiedenen funktionalen Bereichen bereitzustellen, beispielsweise `search`, `tablist`, `tab`, `listbox` etc.
- Dynamische Inhaltsaktualisierungen
  - : Screenreader haben oft Schwierigkeiten damit, ständig aktualisierte Inhalte zu melden; mit ARIA können wir `aria-live` verwenden, um den Screenreader-Nutzern mitzuteilen, wenn ein Inhaltsbereich dynamisch aktualisiert wird: zum Beispiel, wenn durch JavaScript auf der Seite [neue Inhalte vom Server geladen und das DOM aktualisiert wird](/de/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data).
- Verbesserung der Tastaturzugänglichkeit
  - : Es gibt integrierte HTML-Elemente, die eine native Tastaturzugänglichkeit haben; wenn andere Elemente zusammen mit JavaScript verwendet werden, um ähnliche Interaktionen zu simulieren, leidet die Tastaturzugänglichkeit und die Berichterstattung durch den Screenreader darunter. Wo dies unvermeidlich ist, bietet WAI-ARIA eine Möglichkeit, anderen Elementen den Fokus zu geben (mit `tabindex`).
- Zugänglichkeit von unsemantischen Steuerelementen
  - : Wenn eine Serie von verschachtelten `<div>`s zusammen mit CSS/JavaScript verwendet wird, um eine komplexe UI-Funktion zu erstellen, oder ein natives Steuerelement stark verbessert/verändert wird durch JavaScript, kann die Zugänglichkeit leiden — Screenreader-Nutzern fällt es schwer herauszufinden, was die Funktion tut, wenn es keine Semantik oder andere Hinweise gibt. In solchen Situationen kann ARIA helfen, das Fehlende bereitzustellen, mit einer Kombination von Rollen wie `button`, `listbox` oder `tablist` und Eigenschaften wie `aria-required` oder `aria-posinset`, um weitere Hinweise zur Funktionalität zu geben.

Eine Sache ist jedoch zu beachten — **Sie sollten WAI-ARIA nur verwenden, wenn es notwendig ist!** Idealerweise sollten Sie _immer_ [native HTML-Funktionen](/de/docs/Learn/Accessibility/HTML) verwenden, um die Semantik bereitzustellen, die Screenreader benötigen, um ihren Nutzern zu sagen, was vor sich geht. Manchmal ist das nicht möglich, entweder weil Sie nur begrenzte Kontrolle über den Code haben oder weil Sie etwas Komplexes erstellen, das kein einfaches HTML-Element zur Implementierung hat. In solchen Fällen kann WAI-ARIA ein wertvolles Werkzeug zur Verbesserung der Zugänglichkeit sein.

Aber verwenden Sie es nur, wenn es notwendig ist!

> [!NOTE]
> Versuchen Sie außerdem, sicherzustellen, dass Sie Ihre Seite mit einer Vielzahl von _echten_ Nutzern testen — Nicht-behinderten Menschen, Menschen, die Screenreader verwenden, Menschen, die die Tastaturnavigation nutzen, etc. Sie werden bessere Einblicke haben als Sie, wie gut es funktioniert.

## Praktische WAI-ARIA-Implementierungen

Im nächsten Abschnitt werden wir die vier Bereiche detaillierter betrachten, zusammen mit praktischen Beispielen. Bevor Sie weitermachen, sollten Sie eine Screenreader-Testumgebung einrichten, damit Sie einige der Beispiele testen können, während Sie sie durchgehen.

Siehe unseren Abschnitt über [Screenreader-Tests](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#screen_readers) für weitere Informationen.

### Wegweiser/Landmarks

WAI-ARIA fügt den Browsern das [`role`-Attribut](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) hinzu, mit dem Sie jedem Element auf Ihrer Seite bei Bedarf zusätzlichen semantischen Wert verleihen können. Der erste Hauptbereich, in dem dies nützlich ist, ist das Bereitstellen von Informationen für Screenreader, damit ihre Nutzer gängige Seitenelemente finden können. Schauen wir uns ein Beispiel an — unser [Beispiel für Website ohne Rollen](https://github.com/mdn/learning-area/tree/main/accessibility/aria/website-no-roles) (siehe [live](https://mdn.github.io/learning-area/accessibility/aria/website-no-roles/)) hat die folgende Struktur:

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

Wenn Sie das Beispiel mit einem Screenreader in einem modernen Browser testen, erhalten Sie bereits einige nützliche Informationen. Zum Beispiel gibt Ihnen VoiceOver die folgenden Informationen:

- Auf dem `<header>`-Element — "banner, 2 items" (es enthält eine Überschrift und die `<nav>`).
- Auf dem `<nav>`-Element — "navigation 2 items" (es enthält eine Liste und ein Formular).
- Auf dem `<main>`-Element — "main 2 items" (es enthält einen Artikel und eine Seitenleiste).
- Auf dem `<aside>`-Element — "complementary 2 items" (es enthält eine Überschrift und eine Liste).
- Auf dem Suchformulareingabefeld — "Search query, insertion at beginning of text".
- Auf dem `<footer>`-Element — "footer 1 item".

Wenn Sie das Wegweismenü von VoiceOver öffnen (Zugriff über VoiceOver-Taste + U und dann mit den Pfeiltasten durchs Menü navigieren), werden die meisten Elemente ordentlich aufgelistet, sodass sie schnell aufgerufen werden können.

![Das VoiceOver-Menü von Mac für schnelle Zugänglichkeit. Kopfleiste und Landmarks-Liste, einschließlich Banner, Navigation, Hauptinhalt und Ergänzungen.](landmarks-list.png)

Wir könnten hier jedoch noch besser werden. Das Suchformular ist eine wirklich wichtige Landmarke, die die Leute finden möchten, es wird jedoch weder im Landmarks-Menü aufgeführt noch über seinen Input hinaus als wichtige Landmarke behandelt (`<input type="search">`).

Lassen Sie uns dies durch den Einsatz einiger ARIA-Funktionen verbessern. Zunächst fügen wir einige [`role`](/de/docs/Web/Accessibility/ARIA/Roles)-Attribute zu unserer HTML-Struktur hinzu. Sie können eine Kopie unserer Originaldateien nehmen (siehe [`index.html`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/website-no-roles/index.html) und [`style.css`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/website-no-roles/style.css)), oder unser Beispiel für [Website mit ARIA-Rollen](https://github.com/mdn/learning-area/tree/main/accessibility/aria/website-aria-roles) besuchen ([siehe live](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)), das eine Struktur hat wie diese:

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

Wir haben Ihnen in diesem Beispiel auch ein Bonusfeature gegeben — das {{htmlelement("input")}}-Element hat das Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) erhalten, das ihm ein beschreibendes Label gibt, das von einem Screenreader vorgelesen wird, obwohl wir kein {{htmlelement("label")}}-Element eingefügt haben. In solchen Fällen ist dies sehr nützlich — ein solches Suchformular ist eine sehr allgemeine, leicht erkennbare Funktion, und das Hinzufügen eines visuellen Labels würde das Seitendesign beeinträchtigen.

```html
<input
  type="search"
  name="q"
  placeholder="Search query"
  aria-label="Search through site content" />
```

Nun, wenn wir VoiceOver verwenden, um dieses Beispiel anzusehen, erhalten wir einige Verbesserungen:

- Das Suchformular wird als separates Element aufgerufen, sowohl beim Durchsuchen der Seite als auch im Landmarks-Menü.
- Der im Attribut `aria-label` enthaltene Labeltext wird vorgelesen, wenn das Formulareingabefeld hervorgehoben wird.

Darüber hinaus ist die Seite eher zugänglich für Nutzer älterer Browser wie IE8; es lohnt sich, ARIA-Rollen aus diesem Grund einzuschließen. Und wenn Ihre Website aus irgendeinem Grund nur aus `<div>`s aufgebaut ist, sollten Sie unbedingt die ARIA-Rollen einfügen, um diese dringend benötigte Semantik bereitzustellen!

Die verbesserte Semantik des Suchformulars hat gezeigt, was möglich ist, wenn ARIA über die in HTML verfügbaren Semantik hinausgeht. Sie werden weiter unten viel mehr über diese Semantik und die Leistungsfähigkeit von ARIA-Eigenschaften/Attributen erfahren, insbesondere im Abschnitt [Zugänglichkeit von unsemantischen Steuerelementen](#zugänglichkeit_von_unsemantischen_steuerelementen). Für den Moment werfen wir einen Blick darauf, wie ARIA bei dynamischen Inhaltsaktualisierungen helfen kann.

### Dynamische Inhaltsaktualisierungen

In den DOM geladene Inhalte können mit einem Screenreader problemlos aufgerufen werden, von Textinhalten bis hin zu Alternativtexten, die Bildern angehängt sind. Traditionelle statische Websites mit hauptsächlich textbasierten Inhalten sind daher einfach zugänglich für Menschen mit Sehbehinderungen.

Das Problem ist, dass moderne Web-Apps oft nicht nur aus statischem Text bestehen — sie aktualisieren oft Teile der Seite, indem sie neue Inhalte vom Server laden und das DOM aktualisieren. Diese werden manchmal als **Live-Regionen** bezeichnet.

Schauen wir uns ein kurzes Beispiel an — siehe [`aria-no-live.html`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/aria-no-live.html) (siehe auch [live](https://mdn.github.io/learning-area/accessibility/aria/aria-no-live.html)). In diesem Beispiel haben wir eine einfache Zufallszitatbox:

```html
<section>
  <h1>Random quote</h1>
  <blockquote>
    <p></p>
  </blockquote>
</section>
```

Unser JavaScript verwendet die [`fetch()`](/de/docs/Web/API/Window/fetch)-API, um eine JSON-Datei zu laden, die eine Reihe zufälliger Zitate und ihrer Autoren enthält. Sobald das erledigt ist, starten wir eine [`setInterval()`](/de/docs/Web/API/Window/setInterval)-Schleife, die alle 10 Sekunden ein neues zufälliges Zitat in die Zitatbox lädt:

```js
const intervalID = setInterval(showQuote, 10000);
```

Das funktioniert soweit gut, ist aber nicht gut für die Barrierefreiheit — die Inhaltsaktualisierung wird von Screenreadern nicht erkannt, sodass ihre Nutzer nicht wissen, was los ist. Dies ist ein ziemlich triviales Beispiel, aber stellen Sie sich vor, Sie würden eine komplexe Benutzeroberfläche mit vielen ständig aktualisierten Inhalten erstellen, z. B. einen Chatraum, eine Strategie-Spieloberfläche oder eine live aktualisierende Einkaufswagenanzeige — es wäre unmöglich, die App auf sinnvolle Weise zu verwenden, ohne eine Möglichkeit zu haben, den Nutzer über die Updates zu informieren.

WAI-ARIA bietet glücklicherweise einen nützlichen Mechanismus, um diese Benachrichtigungen bereitzustellen — die [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live)-Eigenschaft. Wenn Sie dieses Attribut auf ein Element anwenden, sorgen Sie dafür, dass Screenreader die aktualisierten Inhalte vorlesen. Wie dringend der Inhalt vorgelesen wird, hängt vom Wert des Attributs ab:

- `off`
  - : Standard. Aktualisierungen sollten nicht angekündigt werden.
- `polite`
  - : Aktualisierungen sollten nur angekündigt werden, wenn der Nutzer inaktiv ist.
- `assertive`
  - : Aktualisierungen sollten dem Nutzer so schnell wie möglich angekündigt werden.

Wir möchten, dass Sie eine Kopie von [`aria-no-live.html`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/aria-no-live.html) und [`quotes.json`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/quotes.json) nehmen und Ihr `<section>`-Öffnungstag wie folgt aktualisieren:

```html
<section aria-live="assertive">…</section>
```

Dies wird dafür sorgen, dass ein Screenreader den Inhalt vorliest, sobald er aktualisiert wird.

> [!NOTE]
> Die meisten Browser werden eine Sicherheitsausnahme werfen, wenn Sie versuchen, eine HTTP-Anfrage von einer `file://` URL zu stellen, z.B. wenn Sie die Datei direkt im Browser laden (durch Doppelklicken etc.). Siehe [wie man einen lokalen Testserver einrichtet](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server).

Es gibt hier eine weitere Überlegung — nur der Teil des Textes, der aktualisiert wird, wird vorgelesen. Es wäre schön, wenn wir immer auch die Überschrift vorlesen würden, damit sich der Nutzer erinnern kann, was vorgelesen wird. Dazu können wir die [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)-Eigenschaft auf den Abschnitt anwenden. Aktualisieren Sie Ihr `<section>`-Öffnungstag wie folgt:

```html
<section aria-live="assertive" aria-atomic="true">…</section>
```

Das Attribut `aria-atomic="true"` teilt dem Screenreader mit, dass der gesamte Inhalt des Elements als eine atomare Einheit vorgelesen werden soll, nicht nur die Teile, die aktualisiert wurden.

> [!NOTE]
> Sie können das fertige Beispiel unter [`aria-live.html`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/aria-live.html) sehen ([live](https://mdn.github.io/learning-area/accessibility/aria/aria-live.html)).

> [!NOTE]
> Die [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)-Eigenschaft ist ebenfalls ziemlich nützlich, um zu steuern, was vorgelesen wird, wenn eine Live-Region aktualisiert wird. Sie können beispielsweise nur Inhaltszugänge oder -entnahmen vorlesen lassen.

### Verbesserung der Tastaturzugänglichkeit

Wie an einigen anderen Stellen im Modul diskutiert, ist eine der Stärken von HTML in Bezug auf Barrierefreiheit die eingebaute Tastaturzugänglichkeit von Funktionen wie Schaltflächen, Formularelementen und Links. Im Allgemeinen können Sie die Tabulator-Taste verwenden, um zwischen den Steuerelementen zu wechseln, die Eingabetaste/Return-Taste, um Steuerelemente auszuwählen oder zu aktivieren, und gelegentlich andere Steuerelemente nach Bedarf (zum Beispiel die Aufwärts- und Abwärtspfeiltasten, um zwischen Optionen in einer `<select>`-Box zu wechseln).

Manchmal müssen Sie jedoch Code schreiben, der entweder unsemantische Elemente als Schaltflächen (oder andere Arten von Steuerelementen) verwendet oder fokussierbare Steuerelemente für nicht ganz den richtigen Zweck nutzt. Vielleicht versuchen Sie, schlechten Code zu reparieren, den Sie geerbt haben, oder Sie bauen eine Art komplexes Widget, das es erfordert.

Um nicht-fokussierbaren Code fokussierbar zu machen, erweitert WAI-ARIA das `tabindex`-Attribut mit einigen neuen Werten:

- `tabindex="0"` — wie oben angegeben, erlaubt dieser Wert, dass Elemente, die normalerweise nicht fokussierbar sind, fokussierbar werden. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — ermöglicht, dass normalerweise nicht fokussierbare Elemente programmatisch den Fokus erhalten, z.B. über JavaScript oder als Ziel von Links.

Wir haben dies ausführlicher besprochen und eine typische Implementierung in unserem HTML-Zugänglichkeitsartikel gezeigt — siehe [Keyboard-Zugänglichkeit wiederherstellen](/de/docs/Learn/Accessibility/HTML#keyboard-zugänglichkeit_wiederherstellen).

### Zugänglichkeit von unsemantischen Steuerelementen

Dies schließt an den vorherigen Abschnitt an — wenn eine Serie von verschachtelten `<div>`s zusammen mit CSS/JavaScript verwendet wird, um eine komplexe UI-Funktion zu erstellen, oder ein natives Steuerelement stark verbessert/verändert wird durch JavaScript, kann nicht nur die Tastaturzugänglichkeit leiden, sondern es kann für Screenreader-Nutzer schwierig sein, herauszufinden, was die Funktion tut, wenn es keine Semantik oder andere Hinweise gibt. In solchen Situationen kann ARIA helfen, diese fehlende Semantik bereitzustellen.

#### Formularvalidierung und Fehlermeldungen

Lassen Sie uns zunächst das Formularbeispiel noch einmal betrachten, das wir erstmals in unserem CSS- und JavaScript-Zugänglichkeitsartikel untersucht haben (lesen Sie [Unauffällig bleiben](/de/docs/Learn/Accessibility/CSS_and_JavaScript#unaufällig_bleiben) für eine vollständige Zusammenfassung). Am Ende dieses Abschnitts haben wir gezeigt, dass wir einige ARIA-Attribute in das Fehlermeldungsfeld eingefügt haben, das alle Validierungsfehler anzeigt, wenn Sie versuchen, das Formular abzuschicken:

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

- [`role="alert"`](/de/docs/Web/Accessibility/ARIA/Roles/alert_role) macht das Element, auf das es angewendet wird, automatisch zu einer Live-Region, sodass Änderungen daran vorgelesen werden; es identifiziert es auch semantisch als eine Alarmnachricht (wichtige zeit-/kontextabhängige Informationen) und stellt eine bessere, zugänglichere Möglichkeit dar, einen Alarm an einen Nutzer zu senden (modale Dialoge wie [`alert()`](/de/docs/Web/API/Window/alert)-Aufrufe haben einige Zugänglichkeitsprobleme; siehe [Popup-Fenster](https://webaim.org/techniques/javascript/other#popups) von WebAIM).
- Ein [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)-Wert von `all` weist den Screenreader an, den Inhalt der Fehlerliste vorzulesen, wenn Änderungen daran vorgenommen werden — das heißt, wenn Fehler hinzugefügt oder entfernt werden. Das ist nützlich, da der Nutzer wissen möchte, welche Fehler noch vorhanden sind, nicht nur, was hinzugefügt oder entfernt wurde.

Wir könnten unsere ARIA-Nutzung weiter ausbauen und eine weitere Validierungshilfe bereitstellen. Wie wäre es, wenn wir angeben, ob Felder überhaupt erforderlich sind und welchen Bereich das Alter haben sollte?

1. Zu diesem Zeitpunkt machen Sie eine Kopie unserer [`form-validation.html`](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html) und [`validation.js`](https://github.com/mdn/learning-area/blob/main/accessibility/css/validation.js)-Dateien und speichern sie in einem lokalen Verzeichnis.
2. Öffnen Sie sie beide in einem Texteditor und schauen Sie, wie der Code funktioniert.
3. Fügen Sie zuerst einen Absatz direkt über dem öffnenden `<form>`-Tag hinzu, wie den folgenden, und markieren Sie beide `<label>`-Formulare mit einem Sternchen. Normalerweise markieren wir Pflichtfelder für sehende Nutzer auf diese Weise.

   ```html
   <p>Fields marked with an asterisk (*) are required.</p>
   ```

4. Dies ergibt visuell Sinn, ist aber nicht so einfach zu verstehen für Screenreader-Nutzer. Glücklicherweise stellt WAI-ARIA das [`aria-required`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required)-Attribut zur Verfügung, um Screenreadern Hinweise zu geben, dass ihre Nutzer darüber informiert werden sollten, dass Formulareingabefelder ausgefüllt werden müssen. Aktualisieren Sie die `<input>`-Elemente wie folgt:

   ```html
   <input type="text" name="name" id="name" aria-required="true" />

   <input type="number" name="age" id="age" aria-required="true" />
   ```

5. Wenn Sie das Beispiel jetzt speichern und mit einem Screenreader testen, sollten Sie etwas hören wie "Enter your name star, required, edit text".
6. Es könnte auch nützlich sein, wenn wir den Screenreader-Nutzern und sehendem Nutzer eine Vorstellung davon geben, welchen Wert das Alter haben sollte. Dies wird oft als Tooltip oder Placeholder im Formularfeld angezeigt. WAI-ARIA enthält [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)-Eigenschaften zur Angabe von Mindest- und Höchstwerten, und Screenreader unterstützen die nativen `min`- und `max`-Attribute. Eine weitere gut unterstützte Funktion ist das HTML-`placeholder`-Attribut, das eine Nachricht enthalten kann, die im Eingabefeld angezeigt wird, wenn kein Wert eingegeben ist, und von einigen Screenreadern vorgelesen wird. Aktualisieren Sie Ihre Zahleneingabe folgendermaßen:

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

Geben Sie immer ein {{HTMLelement('label')}} für jeden Eingabewert an. Während einige Screenreader den Platzhaltertext vorlesen, tun es die meisten nicht. Akzeptable Ersatz für die Bereitstellung von Formularsteuerelementen mit einem zugänglichen Namen sind [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) und [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby). Das `<label>`-Element mit einem `for`-Attribut wird jedoch als bevorzugte Methode verwendet, da es die Benutzerfreundlichkeit für alle Nutzer einschließlich Mausbenutzer gewährleistet.

> [!NOTE]
> Sie können das fertige Beispiel live unter [`form-validation-updated.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-updated.html) sehen.

WAI-ARIA ermöglicht auch einige fortgeschrittene Techniken zur Formularbeschriftung, über das klassische {{htmlelement("label")}}-Element hinaus. Wir haben bereits darüber gesprochen, die [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Eigenschaft zur Bereitstellung eines Labels zu verwenden, wenn wir nicht möchten, dass das Label für sehende Nutzer sichtbar ist (siehe den Abschnitt [Wegweiser/Landmarks](#wegweiserlandmarks) oben). Einige andere Beschriftungstechniken verwenden andere Eigenschaften wie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), wenn Sie ein nicht-`<label>`-Element als Label bestimmen oder mehrere Formulareingaben mit demselben Label beschriften möchten, und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby), wenn Sie andere Informationen mit einer Formulareingabe verknüpfen und diese ebenfalls vorlesen lassen möchten. Weitere Details finden Sie im Artikel [WebAIM's Advanced Form Labeling](https://webaim.org/techniques/forms/advanced).

Es gibt viele andere nützliche Eigenschaften und Zustände, um den Status von Formularelementen anzuzeigen. Zum Beispiel kann `aria-disabled="true"` verwendet werden, um anzuzeigen, dass ein Eingabefeld deaktiviert ist. Viele Browser überspringen deaktivierte Formulareingabefelder, was dazu führt, dass sie nicht von Screenreadern vorgelesen werden. In einigen Fällen wird ein deaktiviertes Element wahrgenommen, daher ist es eine gute Idee, dieses Attribut einzuschließen, um den Screenreader wissen zu lassen, dass ein deaktiviertes Formularelement tatsächlich deaktiviert ist.

Wenn sich der deaktivierte Zustand einer Eingabe wahrscheinlich ändern wird, dann ist es auch eine gute Idee, anzugeben, wann dies passiert und was das Ergebnis ist. In unserem [`form-validation-checkbox-disabled.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-checkbox-disabled.html) Beispiel gibt es ein Kontrollkästchen, das, wenn es angekreuzt ist, eine andere Formulareingabe aktiviert, um weitere Informationen einzugeben. Wir haben eine versteckte Live-Region eingerichtet:

```html
<p class="hidden-alert" aria-live="assertive"></p>
```

die durch absolute Positionierung aus Sicht verborgen wird. Wenn dieses angekreuzt/abgehakt ist, aktualisieren wir den Text innerhalb der versteckten Live-Region, um den Screenreader-Nutzern mitzuteilen, was das Ergebnis ist, wenn dieses Kontrollkästchen angekreuzt wird, und wir aktualisieren auch den `aria-disabled`-Zustand und einige visuelle Indikatoren:

```js
function toggleMusician(bool) {
  const instruItem = formItems[formItems.length - 1];
  if (bool) {
    instruItem.input.disabled = false;
    instruItem.label.style.color = "#000";
    instruItem.input.setAttribute("aria-disabled", "false");
    hiddenAlert.textContent =
      "Instruments played field now enabled; use it to tell us what you play.";
  } else {
    instruItem.input.disabled = true;
    instruItem.label.style.color = "#999";
    instruItem.input.setAttribute("aria-disabled", "true");
    instruItem.input.removeAttribute("aria-label");
    hiddenAlert.textContent = "Instruments played field now disabled.";
  }
}
```

#### Nichtsemantische Schaltflächen als Schaltflächen beschreiben

Einige Male in diesem Kurs haben wir bereits die native Zugänglichkeit (und die Zugänglichkeitsprobleme beim Einsatz anderer Elemente, um Schaltflächen, Links oder Formularelemente vorzutäuschen) erwähnt (siehe [UI-Steuerelemente](/de/docs/Learn/Accessibility/HTML#ui_steuerelemente) im Artikel zur HTML-Zugänglichkeit und [Verbesserung der Tastaturzugänglichkeit](#verbesserung_der_tastaturzugänglichkeit) oben). Grundsätzlich können Sie in vielen Fällen die Tastaturzugänglichkeit ohne allzu große Probleme wiederherstellen, indem Sie `tabindex` und ein wenig JavaScript verwenden.

Aber was ist mit Screenreader? Sie werden die Elemente immer noch nicht als Schaltflächen erkennen. Wenn wir unser Beispiel [`fake-div-buttons.html`](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) in einem Screenreader testen, werden unsere gefälschten Schaltflächen mit Phrasen wie "Click me!, group" gemeldet, was offensichtlich verwirrend ist.

Dies können wir mit einer WAI-ARIA-Rolle beheben. Erstellen Sie eine lokale Kopie von [`fake-div-buttons.html`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) und fügen Sie [`role="button"`](/de/docs/Web/Accessibility/ARIA/Roles/button_role) zu jeder Button-`<div>` hinzu, beispielsweise:

```html
<div data-message="This is from the first button" tabindex="0" role="button">
  Click me!
</div>
```

Wenn Sie dies nun mit einem Screenreader testen, werden die Schaltflächen mit Phrasen wie "Click me!, button" gemeldet. Dies ist viel besser, aber Sie müssen immer noch alle native Schaltflächenfunktionen hinzufügen, die Nutzer erwarten, wie die Behandlung von <kbd>enter</kbd> und Klick-Ereignissen, wie im [`button` Rollen-Dokumentation](/de/docs/Web/Accessibility/ARIA/Roles/button_role) erklärt.

> [!NOTE]
> Vergessen Sie jedoch nicht, dass die Verwendung des richtigen semantischen Elements, wo möglich, immer besser ist. Wenn Sie eine Schaltfläche erstellen möchten und ein {{htmlelement("button")}}-Element verwenden können, sollten Sie ein {{htmlelement("button")}}-Element verwenden!

#### Benutzer durch komplexe Widgets führen

Es gibt eine ganze Reihe anderer [Rollen](/de/docs/Web/Accessibility/ARIA/Roles), die nichtsemantische Elementstrukturen als gängige UI-Funktionen identifizieren können, die über das hinausgehen, was in standardmäßigem HTML verfügbar ist, zum Beispiel [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Roles/slider_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role), [`tree`](/de/docs/Web/Accessibility/ARIA/Roles/tree_role). Sie können sich mehrere nützliche Beispiele in der [Deque University Code Library](https://dequeuniversity.com/library/) ansehen, um eine Vorstellung davon zu bekommen, wie solche Steuerelemente zugänglich gemacht werden können.

Lassen Sie uns ein eigenes Beispiel durchgehen. Wir kehren zu unserer einfachen auf Absolutpositionierung basierten Registerkartenoberfläche zurück (siehe [Verstecken von Dingen](/de/docs/Learn/Accessibility/CSS_and_JavaScript#verstecken_von_dingen) in unserem CSS- und JavaScript-Zugänglichkeitsartikel), das Sie unter [Tabbed info box example](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/tabbed-info-box.html) finden können (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html)).

Dieses Beispiel funktioniert in Bezug auf die Tastaturzugänglichkeit gut — Sie können problemlos zwischen den verschiedenen Registerkarten wechseln und diese auswählen, um den Inhalt der Registerkarte anzuzeigen. Es ist auch recht zugänglich — Sie können durch den Inhalt scrollen und die Überschriften zur Navigation verwenden, selbst wenn Sie nicht sehen können, was auf dem Bildschirm passiert. Es ist jedoch nicht so offensichtlich, was der Inhalt ist — ein Screenreader meldet den Inhalt derzeit als eine Liste von Links und einige Inhalte mit drei Überschriften. Es gibt Ihnen keine Vorstellung davon, welche Beziehung zwischen dem Inhalt besteht. Den Nutzer mit mehr Hinweisen auf die Struktur des Inhalts zu unterstützen, ist immer gut.

Um Dinge zu verbessern, haben wir eine neue Version des Beispiels namens [`aria-tabbed-info-box.html`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/aria-tabbed-info-box.html) erstellt ([siehe live](https://mdn.github.io/learning-area/accessibility/aria/aria-tabbed-info-box.html)). Wir haben die Struktur der Registerkartenoberfläche folgendermaßen aktualisiert:

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
> Die auffälligste Änderung hier ist, dass wir die ursprünglich im Beispiel vorhandenen Links entfernt haben und nur die Listenelemente als Registerkarten verwendet haben — dies wurde getan, weil es für Screenreader-Nutzer weniger verwirrend ist (die Links bringen einen nirgendwohin; sie ändern nur die Ansicht) und es ermöglicht den setsize/position in set Features besser zu arbeiten — wenn diese auf den Links gesetzt sind, meldete der Browser ständig "1 von 1" und nicht "1 von 3", "2 von 3" etc.

Die genutzten ARIA-Funktionen umfassen:

- Neue Rollen — [`tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role), [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role)
  - : Diese identifizieren die wichtigen Bereiche der registerkartenbasierten Oberfläche — der Container für die Registerkarten, die Registerkarten selbst und die zugehörigen Registerkartenschaltflächen.
- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)
  - : Definiert, welche Registerkarte derzeit ausgewählt ist. Wenn vom Nutzer andere Registerkarten ausgewählt werden, wird der Wert dieses Attributs für die verschiedenen Registerkarten über JavaScript aktualisiert.
- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)
  - : Verbirgt ein Element davor, von einem Screenreader vorgelesen zu werden. Wenn vom Nutzer andere Registerkarten ausgewählt werden, wird der Wert dieses Attributs für die verschiedenen Registerkarten über JavaScript aktualisiert.
- `tabindex="0"`
  - : Da wir die Links entfernt haben, müssen wir den Listenelementen dieses Attribut geben, um ihnen den Tastaturfokus zu verleihen.
- [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize)
  - : Diese Eigenschaft ermöglicht es Ihnen, Screenreadern mitzuteilen, dass ein Element Teil einer Serie ist und wie viele Elemente die Serie umfasst.
- [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset)
  - : Diese Eigenschaft ermöglicht es Ihnen, anzugeben, an welcher Position in einer Serie sich ein Element befindet. Zusammen mit `aria-setsize` liefert es einem Screenreader genügend Informationen, um Ihnen zu sagen, dass Sie sich derzeit auf Element "1 von 3" etc. befinden. In vielen Fällen sollten Browser in der Lage sein, diese Informationen aus der Elementhierarchie abzuleiten, aber es hilft sicherlich, weitere Hinweise bereitzustellen.

In unseren Tests hat die überarbeitete Struktur insgesamt Verbesserungen gebracht. Die Registerkarten werden jetzt als Registerkarten erkannt (z.B. "tab" wird vom Screenreader vorgelesen), die ausgewählte Registerkarte wird durch "selected" zusammen mit dem Registerkartennamen angezeigt und der Screenreader teilt Ihnen auch mit, auf welcher Registerkartennummer Sie sich derzeit befinden. Darüber hinaus ist durch die voreingestellten `aria-hidden`-Einstellungen (nur die nicht verborgene Registerkarte hat jemals `aria-hidden="false"` gesetzt) der nicht verborgene Inhalt der einzige, in den Sie navigieren können, was bedeutet, dass der ausgewählte Inhalt leichter zu finden ist.

> [!NOTE]
> Wenn es etwas gibt, das Sie explizit nicht möchten, dass Screenreader es vorlesen, können Sie ihnen das Attribut `aria-hidden="true"` geben.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie die Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: WAI-ARIA](/de/docs/Learn/Accessibility/WAI-ARIA_basics/Test_your_skills:_WAI-ARIA).

## Zusammenfassung

Dieser Artikel hat bei weitem nicht alles abgedeckt, was in WAI-ARIA verfügbar ist, aber er sollte Ihnen genügend Informationen gegeben haben, um zu verstehen, wie man es verwendet und einige der häufigsten Muster, die es erfordert, zu kennen.

## Siehe auch

- [Aria-Zustände und -Eigenschaften](/de/docs/Web/Accessibility/ARIA/Attributes): Alle `aria-*` Attribute
- [WAI-ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Roles): Kategorien von ARIA-Rollen und die auf MDN behandelten Rollen
- [ARIA in HTML](https://www.w3.org/TR/html-aria/) auf W3C: Eine Spezifikation, die festlegt, für jede HTML-Funktion, die Zugänglichkeits- (ARIA-)Semantik, die implizit darauf angewendet wird durch den Browser und die WAI-ARIA-Funktionen, die Sie darauf setzen können, wenn zusätzliche Semantik erforderlich ist
- [Deque University Code Library](https://dequeuniversity.com/library/): Eine Bibliothek von wirklich nützlichen und praktischen Beispielen, die komplexe UI-Steuerelemente mit WAI-ARIA-Funktionen zugänglich machen
- [WAI-ARIA-Autorisierungspraxis](https://www.w3.org/WAI/ARIA/apg/) auf W3C: Ein sehr detailliertes Designmuster von W3C, das erklärt, wie man verschiedene Arten von komplexen UI-Steuerelementen implementiert, während sie zugänglich gemacht werden mit WAI-ARIA-Funktionen

{{PreviousMenuNext("Learn/Accessibility/CSS_and_JavaScript","Learn/Accessibility/Multimedia", "Learn/Accessibility")}}
