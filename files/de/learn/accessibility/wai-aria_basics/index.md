---
title: WAI-ARIA Grundlagen
slug: Learn/Accessibility/WAI-ARIA_basics
l10n:
  sourceCommit: 7ab2f95b22919d8b897754e8a66981d0b9a4e2c4
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Accessibility/CSS_and_JavaScript","Learn/Accessibility/Multimedia", "Learn/Accessibility")}}

Im Anschluss an den vorhergehenden Artikel kann es manchmal schwierig sein, komplexe UI-Steuerelemente zu erstellen, die unsemantisches HTML und dynamische JavaScript-aktualisierte Inhalte beinhalten. WAI-ARIA ist eine Technologie, die bei solchen Problemen helfen kann, indem sie zusätzliche Semantiken hinzufügt, die Browser und unterstützende Technologien erkennen und nutzen können, um den Benutzern mitzuteilen, was vor sich geht. Hier zeigen wir Ihnen, wie Sie es auf eine grundlegende Weise nutzen können, um die Zugänglichkeit zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, CSS und
        JavaScript. Vertrautheit mit den
        <a href="/de/docs/Learn/Accessibility"
          >vorherigen Artikeln im Kurs</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit WAI-ARIA gewinnen und verstehen, wie es genutzt werden kann, um nützliche zusätzliche Semantiken bereitzustellen, die die Barrierefreiheit dort verbessern, wo es erforderlich ist.
      </td>
    </tr>
  </tbody>
</table>

## Was ist WAI-ARIA?

Beginnen wir damit, was WAI-ARIA ist und was es für uns tun kann.

### Ein ganz neues Problemset

Als Web-Apps komplexer und dynamischer wurden, tauchte ein neues Set von Barrierefreiheitsfunktionen und Problemen auf.

Zum Beispiel führte HTML eine Reihe von semantischen Elementen ein, um gängige Seitenfunktionen zu definieren (z. B. {{htmlelement("nav")}}, {{htmlelement("footer")}}). Bevor diese verfügbar waren, nutzten Entwickler {{htmlelement("div")}}s mit IDs oder Klassen, z.B. `<div class="nav">`, aber diese waren problematisch, da es keine einfache Möglichkeit gab, programmgesteuert ein spezifisches Seitenelement wie die Hauptnavigation zu finden.

Die anfängliche Lösung bestand darin, einen oder mehrere versteckte Links oben auf der Seite hinzuzufügen, um zu Navigation (oder was auch immer) zu verknüpfen, zum Beispiel:

```html
<a href="#hidden" class="hidden">Skip to navigation</a>
```

Aber das ist immer noch nicht sehr präzise und kann nur verwendet werden, wenn der Screenreader von oben auf der Seite liest.

Als ein weiteres Beispiel begannen Apps, komplexe Steuerelemente wie Datumsauswähler für das Auswählen von Daten, Schieberegler für das Auswählen von Werten, usw. bereitzustellen. HTML bietet spezielle Eingabetypen, um solche Steuerelemente darzustellen:

```html
<input type="date" /> <input type="range" />
```

Diese wurden ursprünglich nicht gut unterstützt und es war, und ist in geringerem Maße immer noch, schwierig, sie zu gestalten, was Designer und Entwickler dazu veranlasste, sich für benutzerdefinierte Lösungen zu entscheiden. Anstatt diese nativen Funktionen zu verwenden, verlassen sich einige Entwickler auf JavaScript-Bibliotheken, die solche Steuerelemente als eine Reihe von verschachtelten {{htmlelement("div")}}s generieren, die dann mit CSS gestaltet und mit JavaScript gesteuert werden.

Das Problem hier ist, dass sie optisch funktionieren, aber Screenreader nicht verstehen können, was sie überhaupt sind, und ihre Benutzer bekommen nur gesagt, dass sie ein Durcheinander von Elementen sehen, ohne Semantik, die erklärt, was sie bedeuten.

### Einführung von WAI-ARIA

[WAI-ARIA](https://www.w3.org/TR/wai-aria/) (Web Accessibility Initiative - Accessible Rich Internet Applications) ist eine Spezifikation des W3C, die eine Reihe zusätzlicher HTML-Attribute definiert, die auf Elemente angewendet werden können, um zusätzliche Semantiken bereitzustellen und die Barrierefreiheit dort zu verbessern, wo sie fehlt. In der Spezifikation sind drei Hauptfunktionen definiert:

- [Rollen](/de/docs/Web/Accessibility/ARIA/Roles)
  - : Diese definieren, was ein Element ist oder tut. Viele davon sind sogenannte Landmark-Rollen, die weitgehend den semantischen Wert von Strukturelementen duplizieren, wie `role="navigation"` ({{htmlelement("nav")}}) oder `role="complementary"` ({{htmlelement("aside")}}). Einige andere Rollen beschreiben unterschiedliche Seitenstrukturen, wie `role="banner"`, `role="search"`, `role="tablist"` und `role="tabpanel"`, die häufig in Benutzeroberflächen vorkommen.
- Eigenschaften
  - : Diese definieren Eigenschaften von Elementen, die genutzt werden können, um ihnen zusätzliche Bedeutung oder Semantiken zu geben. Zum Beispiel spezifiziert `aria-required="true"`, dass eine Formulareingabe ausgefüllt werden muss, um gültig zu sein, während `aria-labelledby="label"` Ihnen ermöglicht, eine ID auf ein Element zu setzen und es als Bezeichnung für alles andere auf der Seite zu referenzieren, einschließlich mehrerer Elemente, was mit `<label for="input">` nicht möglich ist. Zum Beispiel könnten Sie `aria-labelledby` verwenden, um anzugeben, dass eine Schlüsselerklärung, die in einem {{htmlelement("div")}} enthalten ist, die Bezeichnung für mehrere Tabellenzellen ist, oder Sie könnten es als Alternative zu Bild-Alt-Text verwenden – vorhandene Informationen auf der Seite als Alt-Text eines Bildes angeben, anstatt sie im `alt`-Attribut zu wiederholen. Ein Beispiel dafür finden Sie unter [Textalternativen](/de/docs/Learn/Accessibility/HTML#text_alternatives).
- Zustände
  - : Spezielle Eigenschaften, die die aktuellen Bedingungen von Elementen definieren, wie `aria-disabled="true"`, das einem Screenreader anzeigt, dass eine Formulareingabe derzeit deaktiviert ist. Zustände unterscheiden sich von Eigenschaften dadurch, dass Eigenschaften sich im Lebenszyklus einer App nicht ändern, während Zustände sich in der Regel programmatisch über JavaScript ändern können.

Ein wichtiger Punkt über WAI-ARIA-Attribute ist, dass sie nichts an der Webseite beeinflussen, außer den Informationen, die von den Barrierefreiheits-APIs des Browsers exponiert werden (woher Screenreader ihre Informationen beziehen). WAI-ARIA beeinflusst nicht die Webseitenstruktur, das DOM usw., obwohl die Attribute nützlich sein können, um Elemente über CSS auszuwählen.

> [!NOTE]
> Eine nützliche Liste aller ARIA-Rollen und ihrer Verwendungen, mit Links zu weiteren Informationen, finden Sie in der WAI-ARIA-Spezifikation — siehe [Definition of Roles](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) — auf dieser Seite — siehe [ARIA roles](/de/docs/Web/Accessibility/ARIA/Roles).
>
> Die Spezifikation enthält auch eine Liste aller Eigenschaften und Zustände, mit Links zu weiteren Informationen — siehe [Definitions of States and Properties (all `aria-*` attributes)](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def).

### Wo wird WAI-ARIA unterstützt?

Dies ist keine einfache Frage zu beantworten. Es ist schwierig, eine abschließende Ressource zu finden, die angibt, welche Funktionen von WAI-ARIA unterstützt werden und wo, weil:

1. Es gibt eine Menge von Funktionen in der WAI-ARIA-Spezifikation.
2. Es gibt viele Kombinationen von Betriebssystemen, Browsern und Screenreadern, die berücksichtigt werden müssen.

Dieser letzte Punkt ist entscheidend — Um einen Screenreader überhaupt zu verwenden, muss Ihr Betriebssystem Browser ausführen können, die die notwendigen Barrierefreiheits-APIs haben, um die Informationen zu exponieren, die Screenreader benötigen, um ihre Arbeit zu tun. Die meisten beliebten Betriebssysteme haben einen oder zwei Browser im Angebot, mit denen Screenreader arbeiten können. Die Paciello Group hat einen ziemlich aktuellen Beitrag, der Daten dazu liefert — siehe [Rough Guide: browsers, operating systems and screen reader support updated](https://www.tpgi.com/rough-guide-browsers-operating-systems-and-screen-reader-support-updated/).

Als nächstes müssen Sie sich darum kümmern, ob die betreffenden Browser ARIA-Funktionen unterstützen und über ihre APIs exponieren, aber auch, ob Screenreader diese Informationen erkennen und ihren Benutzern auf nützliche Weise präsentieren.

1. Die Unterstützung durch Browser ist fast universell.
2. Die Unterstützung durch Screenreader für ARIA-Funktionen ist nicht ganz auf diesem Stand, aber die beliebtesten Screenreader kommen diesem nahe. Sie können sich ein Bild von den Unterstützungsstufen machen, indem Sie sich Powermappers Artikel zur [WAI-ARIA Screen reader compatibility](https://www.powermapper.com/tests/screen-readers/aria/) ansehen.

In diesem Artikel werden wir nicht versuchen, jede WAI-ARIA-Funktion und ihre genauen Unterstützungsdetails abzudecken. Stattdessen werden wir die wichtigsten WAI-ARIA-Funktionen behandeln, von denen Sie wissen sollten; falls wir keine Unterstützungsdetails erwähnen, können Sie davon ausgehen, dass die Funktion gut unterstützt wird. Wir werden alle Ausnahmen davon deutlich erwähnen.

> [!NOTE]
> Einige JavaScript-Bibliotheken unterstützen WAI-ARIA, was bedeutet, dass sie beim Generieren von UI-Funktionen wie komplexen Formularelementen ARIA-Attribute hinzufügen, um die Barrierefreiheit dieser Funktionen zu verbessern. Wenn Sie nach einer Drittanbieter-JavaScript-Lösung für eine schnellere UI-Entwicklung suchen, sollten Sie definitiv die Barrierefreiheit ihrer UI-Widgets als wichtigen Faktor bei Ihrer Wahl berücksichtigen. Gute Beispiele sind jQuery UI (siehe [About jQuery UI: Deep accessibility support](https://jqueryui.com/about/#deep-accessibility-support)), [ExtJS](https://www.sencha.com/products/extjs/) und [Dojo/Dijit](https://dojotoolkit.org/reference-guide/1.10/dijit/a11y/statement.html).

### Wann sollten Sie WAI-ARIA verwenden?

Wir haben bereits einige der Probleme beschrieben, die zur Entwicklung von WAI-ARIA geführt haben, aber grundsätzlich gibt es vier Hauptbereiche, in denen WAI-ARIA nützlich ist:

- Wegweiser-/Landmarken
  - : Die Attributwerte des [`role`](/de/docs/Web/Accessibility/ARIA/Roles)-Attributs von ARIA können als Landmarken fungieren, die entweder die Semantik von HTML-Elementen replizieren (z.B. {{htmlelement("nav")}}) oder über die HTML-Semantik hinausgehen, um Wegweiser zu verschiedenen Funktionsbereichen bereitzustellen, z.B. `search`, `tablist`, `tab`, `listbox`, etc.
- Dynamische Inhaltsaktualisierungen
  - : Screenreader haben oft Schwierigkeiten, ständig wechselnde Inhalte zu melden; mit ARIA können wir `aria-live` verwenden, um Screenreader-Benutzer darüber zu informieren, wann ein Inhaltsbereich dynamisch aktualisiert wird: beispielsweise, indem auf der Seite JavaScript verwendet wird, um neuen Inhalt vom Server abzurufen und das DOM zu aktualisieren [fetching new content from the server and updating the DOM](/de/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data).
- Verbesserung der Tastaturzugänglichkeit
  - : Es gibt eingebaute HTML-Elemente, die über native Tastaturzugänglichkeit verfügen; wenn andere Elemente zusammen mit JavaScript verwendet werden, um ähnliche Interaktionen zu simulieren, leidet die Tastaturzugänglichkeit und die Berichtsfunktion von Screenreadern darunter. Wo dies unvermeidbar ist, bietet WAI-ARIA eine Möglichkeit, andere Elemente in den Fokus zu rücken (mit `tabindex`).
- Barrierefreiheit von nicht-semantischen Steuerelementen
  - : Wenn eine Reihe von verschachtelten `<div>`s zusammen mit CSS/JavaScript verwendet wird, um eine komplexe UI-Funktion zu erstellen, oder ein natives Steuerelement stark über JavaScript erweitert/verändert wird, kann die Barrierefreiheit leiden — Screenreader-Benutzer werden es schwer haben, herauszufinden, was die Funktion macht, wenn es keine Semantiken oder andere Hinweise gibt. In diesen Situationen kann ARIA helfen, das Fehlende mit einer Kombination von Rollen wie `button`, `listbox` oder `tablist` und Eigenschaften wie `aria-required` oder `aria-posinset` bereitzustellen, um weitere Hinweise zur Funktionalität zu geben.

Allerdings ist eines zu beachten — **Sie sollten WAI-ARIA nur dann verwenden, wenn es wirklich nötig ist!** Idealerweise sollten Sie _immer_ [native HTML-Funktionen](/de/docs/Learn/Accessibility/HTML) verwenden, um die Semantiken bereitzustellen, die Screenreader benötigen, um ihren Benutzern mitzuteilen, was vor sich geht. Manchmal ist dies nicht möglich, entweder weil Sie nur begrenzte Kontrolle über den Code haben oder weil Sie etwas Komplexes erstellen, für das es kein einfaches HTML-Element gibt, um es zu implementieren. In solchen Fällen kann WAI-ARIA ein wertvolles Werkzeug zur Verbesserung der Zugänglichkeit sein.

Aber nochmals, verwenden Sie es nur, wenn es nötig ist!

> [!NOTE]
> Versuchen Sie außerdem, Ihre Website mit einer Vielzahl von _echten_ Benutzern zu testen — nicht-behinderte Personen, Personen, die Screenreader nutzen, Personen, die Tastatur-Navigation verwenden, usw. Diese werden bessere Einblicke als Sie darüber haben, wie gut es funktioniert.

## Praktische Implementierungen von WAI-ARIA

Im nächsten Abschnitt werden wir uns die vier Bereiche im Detail ansehen, zusammen mit praktischen Beispielen. Bevor Sie fortfahren, sollten Sie ein Screenreader-Test-Setup einrichten, damit Sie einige der Beispiele beim Durchgehen testen können.

Siehe unseren Abschnitt über [Screenreader-Tests](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#screen_readers) für weitere Informationen.

### Wegweiser/Landmarken

WAI-ARIA fügt den [`role`-Attribut](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) zu Browsern hinzu, womit Sie dem Site-Inhalt zusätzliche semantische Werte hinzufügen können, wo immer sie erforderlich sind. Das erste große Gebiet, in dem dies nützlich ist, ist die Bereitstellung von Informationen für Screenreader, damit deren Benutzer gängige Seitenelemente finden können. Schauen wir uns ein Beispiel an — unser [website-no-roles](https://github.com/mdn/learning-area/tree/main/accessibility/aria/website-no-roles) Beispiel ([siehe live](https://mdn.github.io/learning-area/accessibility/aria/website-no-roles/)) hat die folgende Struktur:

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

Wenn Sie das Beispiel mit einem Screenreader in einem modernen Browser testen, erhalten Sie bereits einige nützliche Informationen. Beispielsweise gibt Ihnen VoiceOver Folgendes an:

- Auf dem `<header>`-Element — "banner, 2 items" (es enthält eine Überschrift und das `<nav>`).
- Auf dem `<nav>`-Element — "navigation 2 items" (es enthält eine Liste und ein Formular).
- Auf dem `<main>`-Element — "main 2 items" (es enthält einen Artikel und einen `aside`).
- Auf dem `<aside>`-Element — "complementary 2 items" (es enthält eine Überschrift und eine Liste).
- Auf der Sucheingabe — "Suchanfrage, Einfügen zu Beginn des Textes".
- Auf dem `<footer>`-Element — "footer 1 item".

Wenn Sie sich das Landmarkenmenü von VoiceOver ansehen (zugänglich mit der VoiceOver-Taste + U und dann mit den Pfeiltasten durch die Menüoptionen navigieren), werden die meisten der Elemente ordentlich aufgelistet, damit sie schnell erreichbar sind.

![Mac's VoiceOver-Menu für schnelle Zugänglichkeit. Landmarks Header und Landmarksliste, inklusive banner, navigation, main und complementary.](landmarks-list.png)

Wir könnten es hier jedoch besser machen. Das Suchformular ist eine wirklich wichtige Landmarke, die die Leute finden möchten, aber es wird im Landmarks-Menü nicht gelistet oder über das eigentliche Eingabefeld hinaus als hervorzuhebende Landmarke behandelt (`<input type="search">`).

Verbessern wir es durch den Einsatz einiger ARIA-Funktionen. Zuerst fügen wir einige [`role`-Attribute](/de/docs/Web/Accessibility/ARIA/Roles) zu unserer HTML-Struktur hinzu. Sie können versuchen, eine Kopie unserer ursprünglichen Dateien zu nehmen (siehe [`index.html`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/website-no-roles/index.html) und [`style.css`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/website-no-roles/style.css)), oder navigieren Sie zu unserem [website-aria-roles](https://github.com/mdn/learning-area/tree/main/accessibility/aria/website-aria-roles) Beispiel ([live ansehen](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)), das eine Struktur wie diese hat:

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

Wir haben Ihnen in diesem Beispiel auch ein zusätzliches Feature mit dabei gegeben — das {{htmlelement("input")}}-Element wurde mit dem Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) versehen, das ihm eine beschreibende Bezeichnung gibt, die von einem Screenreader vorgelesen wird, auch wenn wir kein {{htmlelement("label")}}-Element hinzugefügt haben. In Fällen wie diesen ist dies sehr nützlich — ein solches Suchformular ist ein sehr häufiges, leicht erkennbares Feature, und ein visueller Bezeichner würde das Seitendesign ruinieren.

```html
<input
  type="search"
  name="q"
  placeholder="Search query"
  aria-label="Search through site content" />
```

Wenn wir nun VoiceOver verwenden, um uns dieses Beispiel anzusehen, erhalten wir einige Verbesserungen:

- Das Suchformular wird als separates Element aufgerufen, sowohl beim Durchsuchen der Seite als auch im Landmarkenmenü.
- Der Bezeichnungstext, der im `aria-label`-Attribut enthalten ist, wird vorgelesen, wenn die Formulareingabe hervorgehoben wird.

Abgesehen davon ist die Website eher für Benutzer älterer Browser wie IE8 zugänglich; es lohnt sich, ARIA-Rollen zu diesem Zweck hinzuzufügen. Und wenn aus irgendeinem Grund Ihre Seite nur aus `<div>`s besteht, sollten Sie definitiv die ARIA-Rollen hinzufügen, um diese dringend benötigten Semantiken bereitzustellen!

Die verbesserten Semantiken des Suchformulars haben gezeigt, was möglich ist, wenn ARIA über die in HTML vorhandenen Semantiken hinausgeht. Sie werden weiter unten mehr über diese Semantiken und die Möglichkeiten der ARIA-Eigenschaften/-Attribute sehen, besonders im Abschnitt [Barrierefreiheit von nicht-semantischen Steuerelementen](#barrierefreiheit_von_nicht-semantischen_steuerelementen). Schauen wir uns vorerst an, wie ARIA bei dynamischen Inhaltsaktualisierungen helfen kann.

### Dynamische Inhaltsaktualisierungen

In den DOM geladene Inhalte können leicht über einen Screenreader zugänglich gemacht werden, von Textinhalten bis hin zu alternativem Text, der an Bildern angehängt ist. Traditionelle statische Websites mit überwiegend Textinhalt sind daher leicht zugänglich zu machen für Menschen mit Sehbehinderungen.

Das Problem ist, dass moderne Web-Apps oft nicht nur aus statischen Texten bestehen — sie aktualisieren oft Teile der Webseite, indem sie neue Inhalte vom Server abrufen und das DOM aktualisieren. Diese werden manchmal als **Live-Regionen** bezeichnet.

Schauen wir uns ein schnelles Beispiel an — siehe [`aria-no-live.html`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/aria-no-live.html) (auch [siehe es live laufen](https://mdn.github.io/learning-area/accessibility/aria/aria-no-live.html)). In diesem Beispiel haben wir einen einfachen Kasten mit zufälligen Zitaten:

```html
<section>
  <h1>Random quote</h1>
  <blockquote>
    <p></p>
  </blockquote>
</section>
```

Unser JavaScript verwendet die [`fetch()`](/de/docs/Web/API/Window/fetch)-API, um eine JSON-Datei mit einer Reihe von zufälligen Zitaten und ihren Autoren zu laden. Sobald das erledigt ist, starten wir eine [`setInterval()`](/de/docs/Web/API/setInterval)-Schleife, die alle 10 Sekunden ein neues zufälliges Zitat in den Kasten lädt:

```js
const intervalID = setInterval(showQuote, 10000);
```

Das funktioniert zwar OK, ist aber nicht gut für die Zugänglichkeit — die Inhaltsaktualisierung wird von Screenreadern nicht erkannt, sodass ihre Benutzer nicht wissen würden, was vor sich geht. Dies ist ein ziemlich triviales Beispiel, aber stellen Sie sich vor, Sie würden eine komplexe Benutzeroberfläche mit ständig aktualisierten Inhalten erstellen, wie einen Chatraum, eine Strategie-Spiel-Benutzeroberfläche oder eine Live-aktualisierte Shopping-Kart-Anzeige — es wäre unmöglich, die App auf irgendeine sinnvolle Weise ohne eine Art von Möglichkeit zu verwenden, den Benutzer auf die Aktualisierungen aufmerksam zu machen.

Glücklicherweise stellt WAI-ARIA einen nützlichen Mechanismus zur Verfügung, um diese Benachrichtigungen zu liefern — die [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live)-Eigenschaft. Wenn diese auf ein Element angewendet wird, veranlasst sie, dass Screenreader den aktualisierten Inhalt vorzulesen. Wie dringend der Inhalt gelesen wird, hängt vom Attributwert ab:

- `off`
  - : Der Standard. Aktualisierungen sollten nicht bekanntgegeben werden.
- `polite`
  - : Aktualisierungen sollten nur bekanntgegeben werden, wenn der Benutzer nicht abgelenkt ist.
- `assertive`
  - : Aktualisierungen sollten dem Benutzer so bald wie möglich bekanntgegeben werden.

Wir würden Sie bitten, eine Kopie von [`aria-no-live.html`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/aria-no-live.html) und [`quotes.json`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/quotes.json) zu erstellen und Ihr `<section>`-Öffnungstag wie folgt zu aktualisieren:

```html
<section aria-live="assertive">…</section>
```

Dies wird dazu führen, dass ein Screenreader den Inhalt wie er aktualisiert wird, vorliest.

> [!NOTE]
> Die meisten Browser werfen eine Sicherheitsausnahme, wenn Sie versuchen, eine HTTP-Anfrage von einer `file://`-URL zu machen, z.B. wenn Sie die Datei einfach direkt in den Browser laden (durch Doppelklicken usw.). Siehe [wie man einen lokalen Testserver einrichtet](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server).

Es gibt hier eine zusätzliche Überlegung — nur der aktualisierte Text wird vorgelesen. Es könnte schön sein, wenn wir immer auch die Überschrift vorlesen, damit der Benutzer sich daran erinnern kann, was gerade vorgelesen wird. Um dies zu bewerkstelligen, können wir die [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)-Eigenschaft auf die Sektion anwenden. Aktualisieren Sie erneut Ihr `<section>`-Öffnungstag wie folgt:

```html
<section aria-live="assertive" aria-atomic="true">…</section>
```

Das Attribut `aria-atomic="true"` weist Screenreader an, den gesamten Inhalt des Elements als eine atomare Einheit zu lesen, nicht nur die aktualisierten Teile.

> [!NOTE]
> Sie können das fertige Beispiel unter [`aria-live.html`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/aria-live.html) ([siehe es live laufen](https://mdn.github.io/learning-area/accessibility/aria/aria-live.html)) sehen.

> [!NOTE]
> Die [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)-Eigenschaft ist auch sehr nützlich, um zu kontrollieren, was vorgelesen wird, wenn eine Live-Region aktualisiert wird. Sie können beispielsweise nur Einfügungen oder Entfernungen von Inhalten vorlesen lassen.

### Verbesserung der Tastaturzugänglichkeit

Wie an mehreren Stellen im Modul besprochen, ist eine der Schlüsselstärken von HTML hinsichtlich der Barrierefreiheit die eingebaute Tastaturzugänglichkeit von Funktionen wie Tasten, Formularsteuerelementen und Links. Im Allgemeinen können Sie die Tabulatortaste verwenden, um zwischen Steuerelementen zu wechseln, die Eingabe- oder Return-Taste, um Steuerelemente auszuwählen oder zu aktivieren, und gelegentlich andere Steuerelemente wie benötigt (zum Beispiel die Pfeil nach oben und unten zur Bewegung zwischen Optionen in einem `<select>`-Feld).

Manchmal jedoch müssen Sie Code schreiben, der entweder nicht-semantische Elemente als Tasten (oder andere Steuerelemente) verwendet oder fokussierbare Steuerelemente für nicht ganz richtige Zwecke verwendet. Sie könnten versuchen, schlechten Code zu reparieren, den Sie geerbt haben, oder Sie könnten ein komplexes Widget bauen, das dies erfordert.

Im Hinblick auf die Fokussierung von nicht-fokussierbarem Code erweitert WAI-ARIA das `tabindex`-Attribut mit einigen neuen Werten:

- `tabindex="0"` — Wie oben angegeben, erlaubt dieser Wert, dass Elemente, die normalerweise nicht fokussierbar sind, fokussierbar werden. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — Dies erlaubt, dass Elemente, die normalerweise nicht fokussierbar sind, programmgesteuert fokussiert werden, z.B. über JavaScript oder als Ziel von Links.

Wir haben dies im Detail diskutiert und eine typische Implementierung in unserem HTML-Zugänglichkeitsartikel gezeigt — siehe [Wiederaufbau der Tastaturzugänglichkeit](/de/docs/Learn/Accessibility/HTML#building_keyboard_accessibility_back_in).

### Barrierefreiheit von nicht-semantischen Steuerelementen

Das folgt auf den vorherigen Abschnitt — wenn eine Reihe von verschachtelten `<div>`s zusammen mit CSS/JavaScript verwendet werden, um eine komplexe UI-Funktion zu erstellen, oder ein natives Steuerelement stark über JavaScript erweitert/verändert wird, kann nicht nur die Tastaturzugänglichkeit leiden, sondern auch Screenreader-Benutzer werden es schwer haben, zu verstehen, was die Funktion macht, wenn es keine Semantiken oder andere Hinweise gibt. In solchen Situationen kann ARIA helfen, diese fehlenden Semantiken bereitzustellen.

#### Formularvalidierung und Fehlerwarnungen

Zunächst einmal wollen wir das Formularbeispiel erneut aufgreifen, das wir zuerst in unserem CSS- und JavaScript-Zugänglichkeitsartikel behandelt haben (lesen Sie [Es unauffällig halten](/de/docs/Learn/Accessibility/CSS_and_JavaScript#keeping_it_unobtrusive) für eine vollständige Zusammenfassung). Am Ende dieses Abschnitts zeigten wir, dass wir einige ARIA-Attribute in das Fehlermeldungsfeld eingefügt haben, das alle Validierungsfehler anzeigt, wenn Sie versuchen, das Formular einzureichen:

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

- [`role="alert"`](/de/docs/Web/Accessibility/ARIA/Roles/alert_role) verwandelt das angewandte Element automatisch in eine Live-Region, sodass Änderungen daran vorgelesen werden; es identifiziert es auch semantisch als eine Warnmeldung (wichtige zeit- oder kontextbezogene Information) und stellt eine bessere, zugänglichere Möglichkeit dar, eine Warnung an den Benutzer zu übermitteln (Modal-Dialoge wie [`alert()`](/de/docs/Web/API/Window/alert)-Aufrufe haben eine Reihe von Barrierefreiheitsproblemen; siehe [Popup Windows](https://webaim.org/techniques/javascript/other#popups) von WebAIM).
- Ein [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)-Wert von `all` weist den Screenreader an, den Inhalt der Fehlerliste vorzulesen, wenn Änderungen daran vorgenommen werden — d.h. wenn Fehler hinzugefügt oder entfernt werden. Dies ist nützlich, weil der Benutzer wissen möchte, welche Fehler noch vorhanden sind, nicht nur, was zur Liste hinzugefügt oder daraus entfernt wurde.

Wir könnten unsere ARIA-Nutzung weiter verbessern und weitere Validierungshilfen bereitstellen. Wie wäre es damit, anzugeben, ob Felder überhaupt erforderlich sind und welchen Bereich das Alter haben sollte?

1. Nehmen Sie an dieser Stelle eine Kopie unserer [`form-validation.html`](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html) und [`validation.js`](https://github.com/mdn/learning-area/blob/main/accessibility/css/validation.js)-Dateien und speichern Sie sie in einem lokalen Verzeichnis.
2. Öffnen Sie beide in einem Texteditor und sehen Sie sich an, wie der Code funktioniert.
3. Fügen Sie zunächst einen Absatz direkt oberhalb des öffnenden `<form>`-Tags hinzu, wie im folgenden Beispiel, und markieren Sie beide Formular-`<label>`s mit einem Stern. Dies ist normalerweise, wie wir erforderliche Felder für sehende Benutzer kennzeichnen.

   ```html
   <p>Fields marked with an asterisk (*) are required.</p>
   ```

4. Das ergibt visuell Sinn, ist aber für Screenreader-Benutzer nicht so einfach zu verstehen. Glücklicherweise bietet WAI-ARIA das Attribut [`aria-required`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required), um Screenreader-Nutzern Hinweise zu geben, dass Formulareingaben ausgefüllt sein müssen. Aktualisieren Sie die `<input>`-Elemente wie folgt:

   ```html
   <input type="text" name="name" id="name" aria-required="true" />

   <input type="number" name="age" id="age" aria-required="true" />
   ```

5. Wenn Sie das Beispiel jetzt speichern und mit einem Screenreader testen, sollten Sie etwas hören wie "Geben Sie Ihr Name Sterne, erforderlich, bearbeiten Text".
6. Es könnte auch nützlich sein, Screenreader-Benutzern und sehenden Benutzern eine Vorstellung zu geben, welche Werte das Alter haben sollte. Dies wird oft als Tooltip oder Platzhalter im Formularfeld angezeigt. WAI-ARIA enthält [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)-Eigenschaften, um Mindest- und Höchstwerte anzugeben, und Screenreader unterstützen die nativen `min` und `max`-Attribute. Eine weitere gut unterstützte Funktion ist das HTML-`placeholder`-Attribut, das eine Nachricht enthalten kann, die im Eingabefeld angezeigt wird, wenn kein Wert eingegeben wird und von einigen Screenreadern vorgelesen wird. Aktualisieren Sie Ihre Zahlen-Eingabe wie folgt:

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

Bieten Sie immer ein {{HTMLelement('label')}} für jede Eingabe an. Während einige Screenreader den Platzhaltertext ansagen, tun dies die meisten nicht. Akzeptable Ersatzlösungen, um Formularsteuerelemente mit einem zugänglichen Namen zu versehen, umfassen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) und [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby). Aber das `<label>`-Element mit einem `for`-Attribut ist die bevorzugte Methode, da es die Bedienbarkeit für alle Benutzer, einschließlich Mausanwendern, bietet.

> [!NOTE]
> Sie können das fertige Beispiel live unter [`form-validation-updated.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-updated.html) sehen.

WAI-ARIA ermöglicht auch einige fortgeschrittene Beschriftungstechniken für Formulare, jenseits des klassischen {{htmlelement("label")}}-Elements. Wir haben bereits über die Verwendung der [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Eigenschaft gesprochen, um dort eine Etikettierung bereitzustellen, wo wir nicht möchten, dass das Etikett für sehende Benutzer sichtbar ist (siehe den Abschnitt [Wegweiser/Landmarken](#signpostslandmarks), oben). Einige andere Beschriftungstechniken verwenden andere Eigenschaften wie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), wenn Sie ein nicht-`<label>`-Element als Bezeichner einsetzen oder mehrere Formulareingaben mit demselben Bezeichner bezeichnen wollen, und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby), wenn Sie andere Informationen mit einer Formulareingabe verknüpfen und ebenfalls vorgelesen haben möchten. Siehe [WebAIMs Artikel zu fortgeschrittenem Formular-Labeling](https://webaim.org/techniques/forms/advanced) für weitere Details.

Es gibt auch viele weitere nützliche Eigenschaften und Zustände, um den Status von Formularelementen anzugeben. Zum Beispiel kann `aria-disabled="true"` verwendet werden, um darauf hinzuweisen, dass ein Formulareingabefeld deaktiviert ist. Viele Browser überspringen deaktivierte Formulareingaben, weswegen sie von Screenreader nicht vorgelesen werden. In einigen Fällen wird ein deaktiviertes Element wahrgenommen, weshalb es eine gute Idee ist, dieses Attribut hinzuzufügen, um dem Screenreader mitzuteilen, dass ein deaktiviertes Formularelement tatsächlich deaktiviert ist.

Wenn sich der deaktivierte Zustand eines Eingabefelds voraussichtlich ändert, dann ist es auch eine gute Idee anzuzeigen, wenn dies passiert und was das Ergebnis ist. In unserem Fall [form-validation-checkbox-disabled.html](https://mdn.github.io/learning-area/accessibility/aria/form-validation-checkbox-disabled.html)-Demo gibt es ein Kontrollkästchen, das bei Aktivierung eine weitere Formulareingabe erlaubt, um zusätzliche Informationen einzugeben. Wir haben eine verborgene Live-Region eingerichtet:

```html
<p class="hidden-alert" aria-live="assertive"></p>
```

die mithilfe von absolutem Positionieren aus dem Blickfeld verborgen wird. Wenn dieses aktiviert/deaktiviert wird, aktualisieren wir den Text innerhalb der versteckten Live-Region, um Screenreader-Benutzern mitzuteilen, was das Ergebnis der Aktivierung dieses Kontrollkästchens ist, ebenso wie die `aria-disabled`-Einstellung und einige visuelle Indikatoren ebenfalls:

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

#### Beschreibung von nicht-semantischen Tasten als Tasten

Einige Male in diesem Kurs haben wir bereits die native Zugänglichkeit von Tasten, Links oder Formularelementen erwähnt (siehe [UI-Steuerungen](/de/docs/Learn/Accessibility/HTML#ui_controls) im HTML-Zugänglichkeitsartikel, und [Verbesserung der Tastaturzugänglichkeit](#verbesserung_der_tastaturzugänglichkeit), oben). Grundsätzlich können Sie die Tastaturzugänglichkeit in vielen Fällen ohne zu viel Aufwand wiederherstellen, indem Sie `tabindex` und ein wenig JavaScript verwenden.

Aber was ist mit Screenreadern? Sie werden die Elemente immer noch nicht als Tasten erkennen. Wenn wir unser [`fake-div-buttons.html`](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)-Beispiel in einem Screenreader testen, werden unsere Schein-Buttons mit Phrasen wie "Click me!, Gruppe" gemeldet, was offensichtlich verwirrend ist.

Wir können dies mit einer WAI-ARIA-Rolle beheben. Erstellen Sie eine lokale Kopie von [`fake-div-buttons.html`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) und fügen Sie [`role="button"`](/de/docs/Web/Accessibility/ARIA/Roles/button_role) zu jedem Schaltflächen-`<div>` hinzu, zum Beispiel:

```html
<div data-message="This is from the first button" tabindex="0" role="button">
  Click me!
</div>
```

Wenn Sie dies nun mit einem Screenreader ausprobieren, hören Sie, wie die Buttons mit Phrasen wie "Click me!, Button" gemeldet werden. Obwohl dies viel besser ist, müssen Sie dennoch alle nativen Button-Funktionen hinzufügen, die Benutzer erwarten, wie die Behandlung von <kbd>enter</kbd>- und Click-Ereignissen, wie im [Dokumentation zur `button`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/button_role) erklärt.

> [!NOTE]
> Vergessen Sie jedoch nicht, dass die Verwendung des korrekten semantischen Elements, wo dies möglich ist, immer besser ist. Wenn Sie eine Schaltfläche erstellen möchten, und ein {{htmlelement("button")}}-Element verwenden können, sollten Sie ein {{htmlelement("button")}}-Element verwenden!

#### Anwender durch komplexe Widgets leiten

Es gibt eine ganze Reihe von anderen [Rollen](/de/docs/Web/Accessibility/ARIA/Roles), die nicht-semantische Elementstrukturen als gängige Benutzeroberflächenfunktionen identifizieren können, die über das hinausgehen, was in standardmäßigem HTML verfügbar ist, zum Beispiel [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Roles/slider_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role), [`tree`](/de/docs/Web/Accessibility/ARIA/Roles/tree_role). Sie können sich eine Reihe nützlicher Beispiele in der [Deque University Code-Bibliothek](https://dequeuniversity.com/library/) ansehen, um eine Vorstellung davon zu bekommen, wie solche Steuerungen zugänglich gemacht werden können.

Lassen Sie uns ein Beispiel von uns selbst durchgehen. Wir kehren zu unserer einfachen absolut positionierten Registerkarte Oberfläche zurück (siehe [Dinge verstecken](/de/docs/Learn/Accessibility/CSS_and_JavaScript#hiding_things) in unserem CSS- und JavaScript-Zugänglichkeitsartikel), die Sie unter [Tabbed Info Box Example](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/tabbed-info-box.html) (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html)) finden können.

Dieses Beispiel funktioniert, wie es ist, im Hinblick auf die Tastaturzugänglichkeit einwandfrei — man kann problemlos zwischen den verschiedenen Registerkarten wechseln und sie auswählen, um den Registerkarteninhalt anzuzeigen. Es ist auch einigermaßen zugänglich — Sie können durch den Inhalt scrollen und die Überschriften zur Navigation nutzen, auch wenn Sie nicht sehen, was auf dem Bildschirm passiert. Es ist jedoch nicht ganz offensichtlich, was der Inhalt ist — ein Screenreader berichtet den Inhalt derzeit als eine Liste von Links und einige Inhalte mit drei Überschriften. Er gibt Ihnen keine Vorstellung davon, was die Beziehung zwischen den Inhalten ist. Mehr Hinweise zur Struktur des Inhalts zu geben, ist immer eine gute Idee.

Um die Dinge zu verbessern, haben wir eine neue Version des Beispiels erstellt, das wir [`aria-tabbed-info-box.html`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/aria-tabbed-info-box.html) ([live sehen](https://mdn.github.io/learning-area/accessibility/aria/aria-tabbed-info-box.html)) genannt haben. Wir haben die Struktur der Registerkarten-Schnittstelle so aktualisiert:

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
> Die auffälligste Änderung hier ist, dass wir die Links, die ursprünglich im Beispiel vorhanden waren, entfernt und nur die Listenelemente als Registerkarten verwendet haben — dies wurde getan, weil es die Dinge für Screenreader-Benutzer weniger verwirrend macht (die Links leiten Sie nirgendwo hin; sie ändern nur die Ansicht), und es ermöglicht die Funktionen für Satzgröße/Position im Satz besser zu arbeiten — als diese auf den Links waren, wurde im Browser ständig "1 von 1" gemeldet, nicht "1 von 3", "2 von 3", usw.

Verwendete ARIA-Features umfassen:

- Neue Rollen — [`tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role), [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role)
  - : Diese identifizieren die wichtigen Bereiche der Registerkartenoberfläche — den Container für die Registerkarten, die Registerkarten selbst und die entsprechenden Registerkartenpanels.
- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)
  - : Definiert, welche Registerkarte derzeit ausgewählt ist. Wenn verschiedene Registerkarten vom Benutzer ausgewählt werden, wird der Wert dieses Attributs bei den verschiedenen Registerkarten über JavaScript aktualisiert.
- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)
  - : Versteckt ein Element davor, von einem Screenreader vorgelesen zu werden. Wenn verschiedene Registerkarten vom Benutzer ausgewählt werden, wird der Wert dieses Attributs für die verschiedenen Registerkarten über JavaScript aktualisiert.
- `tabindex="0"`
  - : Da wir die Links entfernt haben, müssen wir den Listenelementen dieses Attribut zuweisen, um es mit Tastaturfokus zu versehen.
- [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize)
  - : Diese Eigenschaft erlaubt es Ihnen, Screenreadern zu spezifizieren, dass ein Element Teil einer Serie ist und wie viele Elemente die Serie hat.
- [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset)
  - : Diese Eigenschaft erlaubt es Ihnen, zu spezifizieren, an welcher Position in einer Serie sich ein Element befindet. Zusammen mit `aria-setsize` liefert sie einem Screenreader genügend Information, um Ihnen mitzuteilen, dass Sie sich zur Zeit auf Element "1 von 3" befinden, etc. In vielen Fällen sollten Browser in der Lage sein, diese Informationen aus der Elementhierarchie abzuleiten, aber es hilft sicherlich, mehr Hinweise zu geben.

In unseren Tests hat diese neue Struktur insgesamt die Dinge verbessert. Die Registerkarten werden jetzt als Registerkarten erkannt (z.B. wird "Registerkarte" vom Screenreader gesprochen), die ausgewählte Registerkarte wird durch "ausgewählt" zusammen mit dem Registerkartennamen angezeigt, und der Screenreader sagt Ihnen auch, auf welcher Registerkartennummer Sie sich derzeit befinden. Zusätzlich, aufgrund der `aria-hidden`-Einstellungen (nur der nicht-versteckte Inhalt hat jemals `aria-hidden="false"` gesetzt), ist der nicht-versteckte Inhalt der einzige, den Sie navigierend erreichen können, was bedeutet, dass der ausgewählte Inhalt leichter zu finden ist.

> [!NOTE]
> Wenn Sie etwas haben, dass Sie ausdrücklich nicht von Screenreadern vorgelesen bekommen möchten, können Sie ihm das Attribut `aria-hidden="true"` geben.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, dass Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihr Wissen: WAI-ARIA](/de/docs/Learn/Accessibility/WAI-ARIA_basics/Test_your_skills:_WAI-ARIA).

## Zusammenfassung

Dieser Artikel hat keineswegs alles abgedeckt, was in WAI-ARIA verfügbar ist, aber es sollte Ihnen genug Informationen geben, um zu verstehen, wie Sie es verwenden können, und einige der häufigsten Muster zu kennen, denen Sie begegnen werden und die es benötigen.

## Siehe auch

- [Aria-Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/Attributes): Alle `aria-*` Attribute
- [WAI-ARIA Rollen](/de/docs/Web/Accessibility/ARIA/Roles): Kategorien von ARIA-Rollen und die Rollen, die bei MDN behandelt werden
- [ARIA in HTML](https://www.w3.org/TR/html-aria/) auf W3C: Eine Spezifikation, die für jedes HTML-Feature die Barrierefreiheit (ARIA)-Semantik definiert, die implizit auf es durch den Browser angewendet wird, und die WAI-ARIA-Features, die Sie auf es setzen können, falls zusätzliche Semantiken erforderlich sind
- [Deque University Code-Bibliothek](https://dequeuniversity.com/library/): Eine Bibliothek wirklich nützlicher und praktischer Beispiele, die komplexe UI-Steuerelemente zeigen, die mit WAI-ARIA-Funktionen zugänglich gemacht werden
- [WAI-ARIA Autor Praktiken](https://www.w3.org/WAI/ARIA/apg/) auf W3C: Ein sehr ausführliches Designmuster vom W3C, das erklärt, wie man verschiedene Arten von komplexen UI-Steuerungen implementiert, während man sie mit WAI-ARIA-Funktionen zugänglich macht

{{PreviousMenuNext("Learn/Accessibility/CSS_and_JavaScript","Learn/Accessibility/Multimedia", "Learn/Accessibility")}}
