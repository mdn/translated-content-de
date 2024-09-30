---
title: WAI-ARIA Grundlagen
slug: Learn/Accessibility/WAI-ARIA_basics
l10n:
  sourceCommit: 7ab2f95b22919d8b897754e8a66981d0b9a4e2c4
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Accessibility/CSS_and_JavaScript","Learn/Accessibility/Multimedia", "Learn/Accessibility")}}

Anknüpfend an den vorherigen Artikel, kann es manchmal schwierig sein, komplexe UI-Steuerelemente zu erstellen, die unsemantisches HTML und dynamisch aktualisierte JavaScript-Inhalte beinhalten. WAI-ARIA ist eine Technologie, die bei solchen Problemen helfen kann, indem sie zusätzliche Semantik hinzufügt, die von Browsern und unterstützenden Technologien erkannt und genutzt werden kann, um den Nutzern mitzuteilen, was vor sich geht. Hier zeigen wir, wie Sie es auf grundlegender Ebene verwenden können, um die Zugänglichkeit zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von HTML, CSS und
        JavaScript. Ein Verständnis der
        <a href="/de/docs/Learn/Accessibility"
          >vorherigen Artikel im Kurs</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit WAI-ARIA zu erlangen und zu lernen, wie es verwendet werden kann, um zusätzliche nützliche Semantik bereitzustellen, die die Zugänglichkeit bei Bedarf verbessert.
      </td>
    </tr>
  </tbody>
</table>

## Was ist WAI-ARIA?

Lassen Sie uns zunächst ansehen, was WAI-ARIA ist und was es für uns tun kann.

### Eine ganz neue Reihe von Problemen

Als Web-Apps komplexer und dynamischer wurden, begannen neue Funktionen und Probleme in Bezug auf die Zugänglichkeit zu entstehen.

Zum Beispiel führte HTML eine Reihe von semantischen Elementen ein, um häufige Seitenfunktionen zu definieren ({{htmlelement("nav")}}, {{htmlelement("footer")}} usw.). Bevor diese verfügbar waren, verwendeten Entwickler {{htmlelement("div")}}s mit IDs oder Klassen, z.B. `<div class="nav">`, aber diese waren problematisch, da es keine einfache Möglichkeit gab, ein bestimmtes Seitenmerkmal wie die Hauptnavigation programmatisch zu finden.

Die anfängliche Lösung bestand darin, einen oder mehrere versteckte Links am oberen Rand der Seite hinzuzufügen, die zur Navigation verlinken (oder was auch immer), beispielsweise:

```html
<a href="#hidden" class="hidden">Skip to navigation</a>
```

Aber dies ist immer noch nicht sehr präzise und kann nur verwendet werden, wenn der Screenreader vom oberen Rand der Seite liest.

Ein weiteres Beispiel ist, dass Apps begannen, komplexe Steuerelemente wie Datumsauswähler zur Auswahl von Daten, Schieberegler zur Auswahl von Werten usw. einzuführen. HTML bietet spezielle Eingabetypen, um solche Steuerelemente zu rendern:

```html
<input type="date" /> <input type="range" />
```

Diese waren ursprünglich nicht gut unterstützt, und es war, und ist immer noch bis zu einem gewissen Grad, schwierig, sie zu gestalten, was dazu führte, dass Designer und Entwickler benutzerdefinierte Lösungen bevorzugten. Anstatt diese nativen Funktionen zu verwenden, verlassen sich einige Entwickler auf JavaScript-Bibliotheken, die solche Steuerelemente als eine Reihe verschachtelter {{htmlelement("div")}}s generieren, die dann mit CSS gestaltet und mit JavaScript gesteuert werden.

Das Problem hier ist, dass sie visuell funktionieren, aber Screenreader keinen Sinn darin sehen, was sie überhaupt sind, und ihre Benutzer bekommen einfach nur gesagt, dass sie ein Durcheinander von Elementen ohne Semantik sehen.

### Eintreten von WAI-ARIA

[WAI-ARIA](https://www.w3.org/TR/wai-aria/) (Web Accessibility Initiative - Accessible Rich Internet Applications) ist eine von der W3C verfasste Spezifikation, die eine Reihe zusätzlicher HTML-Attribute definiert, die auf Elemente angewendet werden können, um zusätzliche Semantik bereitzustellen und die Zugänglichkeit überall dort zu verbessern, wo sie fehlt. In der Spezifikation sind drei Hauptfunktionen definiert:

- [Rollen](/de/docs/Web/Accessibility/ARIA/Roles)
  - : Diese definieren, was ein Element ist oder tut. Viele davon sind sogenannte Landmark-Rollen, die weitgehend den semantischen Wert von Strukturelementen duplizieren, wie z.B. `role="navigation"` ({{htmlelement("nav")}}) oder `role="complementary"` ({{htmlelement("aside")}}). Einige andere Rollen beschreiben verschiedene Seitenstrukturen, wie `role="banner"`, `role="search"`, `role="tablist"` und `role="tabpanel"`, die häufig in Benutzeroberflächen vorkommen.
- Eigenschaften
  - : Diese definieren Eigenschaften von Elementen, die verwendet werden können, um ihnen zusätzliche Bedeutung oder Semantik zu geben. Zum Beispiel spezifiziert `aria-required="true"`, dass ein Formulareingang ausgefüllt werden muss, um gültig zu sein, während `aria-labelledby="label"` es Ihnen ermöglicht, eine ID auf einem Element festzulegen und es als Label für alles andere auf der Seite zu referenzieren, einschließlich mehrerer Elemente, was mit `<label for="input">` nicht möglich ist. Beispielsweise könnten Sie `aria-labelledby` verwenden, um anzugeben, dass eine Schlüsselbeschreibung in einem {{htmlelement("div")}} das Label für mehrere Tabellenspalten ist, oder Sie könnten es als Alternative zu Bild-Alt-Text verwenden — existierende Informationen auf der Seite als Alt-Text eines Bildes spezifizieren, anstatt sie im `alt`-Attribut wiederholen zu müssen. Sie können ein Beispiel dafür unter [Textalternativen](/de/docs/Learn/Accessibility/HTML#text_alternatives) sehen.
- Zustände
  - : Spezielle Eigenschaften, die die aktuellen Bedingungen von Elementen definieren, wie `aria-disabled="true"`, welches einem Screenreader angibt, dass ein Formulareingabefeld aktuell deaktiviert ist. Zustände unterscheiden sich von Eigenschaften darin, dass Eigenschaften sich nicht während der Lebensdauer einer App ändern, während sich Zustände ändern können, im Allgemeinen programmatisch über JavaScript.

Ein wichtiger Punkt zu WAI-ARIA-Attributen ist, dass sie nichts an der Webseite ändern, außer den Informationen, die durch die Barrierefreiheits-APIs des Browsers offengelegt werden (woher Screenreader ihre Informationen beziehen). WAI-ARIA hat keinen Einfluss auf die Struktur der Webseite, das DOM usw., obwohl die Attribute nützlich sein können, um Elemente durch CSS auszuwählen.

> [!NOTE]
> Sie finden eine nützliche Liste aller ARIA-Rollen und ihrer Anwendungen mit Links zu weiteren Informationen in der WAI-ARIA-Spezifikation — siehe [Definition von Rollen](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) — auf dieser Seite — siehe [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Roles).
>
> Die Spezifikation enthält auch eine Liste aller Eigenschaften und Zustände mit Links zu weiteren Informationen — siehe [Definitionen von Zuständen und Eigenschaften (alle `aria-*` Attribute)](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def).

### Wo wird WAI-ARIA unterstützt?

Diese Frage ist nicht leicht zu beantworten. Es ist schwierig, eine abschließende Ressource zu finden, die angibt, welche Funktionen von WAI-ARIA unterstützt werden und wo, denn:

1. Es gibt viele Funktionen in der WAI-ARIA-Spezifikation.
2. Es gibt viele Kombinationen von Betriebssystemen, Browsern und Screenreadern, die zu berücksichtigen sind.

Dieser letzte Punkt ist entscheidend — Um einen Screenreader überhaupt verwenden zu können, muss Ihr Betriebssystem Browser ausführen, die die notwendigen Barrierefreiheits-APIs installiert haben, um die Informationen offenzulegen, die Screenreader benötigen, um ihre Arbeit zu erledigen. Die meisten populären Betriebssysteme haben ein oder zwei Browser installiert, mit denen Screenreader arbeiten können. Die Paciello Group bietet einen ziemlich aktuellen Beitrag, der Daten dazu bereitstellt — siehe [Grobe Anleitung: Unterstützung von Browsern, Betriebssystemen und Screenreadern aktualisiert](https://www.tpgi.com/rough-guide-browsers-operating-systems-and-screen-reader-support-updated/).

Als Nächstes müssen Sie sich darüber Gedanken machen, ob die in Frage kommenden Browser ARIA-Funktionen unterstützen und sie über ihre APIs offenlegen, aber auch, ob Screenreader diese Informationen erkennen und ihren Nutzern auf nützliche Weise präsentieren.

1. Die Browserunterstützung ist nahezu universell.
2. Die Unterstützung von ARIA-Funktionen durch Screenreader ist noch nicht ganz so breit aufgestellt, aber die populärsten Screenreader kommen dem nahe. Sie können sich einen Überblick über die Unterstützungslevel verschaffen, indem Sie sich Powermappers Artikel über [WAI-ARIA Screenreader-Kompatibilität](https://www.powermapper.com/tests/screen-readers/aria/) ansehen.

In diesem Artikel werden wir nicht versuchen, jede einzelne WAI-ARIA-Funktion und ihre genauen Unterstützungsdetails zu behandeln. Stattdessen werden wir die wichtigsten WAI-ARIA-Funktionen behandeln, die Sie kennen sollten; wenn wir keine Unterstützungsdetails erwähnen, können Sie davon ausgehen, dass die Funktion gut unterstützt wird. Wir werden klar auf Ausnahmen hinweisen.

> [!NOTE]
> Einige JavaScript-Bibliotheken unterstützen WAI-ARIA, was bedeutet, dass wenn sie Benutzeroberflächenmerkmale wie komplexe Formularsteuerelemente generieren, sie ARIA-Attribute hinzufügen, um die Zugänglichkeit dieser Funktionen zu verbessern. Wenn Sie nach einer Drittanbieter-JavaScript-Lösung für die schnelle UI-Entwicklung suchen, sollten Sie die Zugänglichkeit seiner UI-Widgets definitiv in Betracht ziehen, wenn Sie Ihre Wahl treffen. Gute Beispiele sind jQuery UI ([siehe Über jQuery UI: Umfangreiche Unterstützung für Barrierefreiheit](https://jqueryui.com/about/#deep-accessibility-support)), [ExtJS](https://www.sencha.com/products/extjs/), und [Dojo/Dijit](https://dojotoolkit.org/reference-guide/1.10/dijit/a11y/statement.html).

### Wann sollten Sie WAI-ARIA verwenden?

Wir haben zuvor einige der Probleme angesprochen, die zur Erstellung von WAI-ARIA führten, aber im Wesentlichen gibt es vier Hauptbereiche, in denen WAI-ARIA nützlich ist:

- Wegweiser/Landmarken
  - : ARIAs [`role`](/de/docs/Web/Accessibility/ARIA/Roles)-Attributwerte können als Wegweiser fungieren, die entweder die Semantik von HTML-Elementen replizieren (z.B. {{htmlelement("nav")}}) oder über die HTML-Semantik hinausgehen, um auf verschiedene Funktionsbereiche hinzuweisen, z.B. `search`, `tablist`, `tab`, `listbox` usw.
- Dynamische Inhaltsaktualisierungen
  - : Screenreader haben oft Schwierigkeiten damit, ständig ändernde Inhalte wiederzugeben; mit ARIA können wir `aria-live` verwenden, um Screenreader-Benutzer zu informieren, wenn ein Inhaltsbereich dynamisch aktualisiert wird: z.B. durch JavaScript auf der Seite [neue Inhalte vom Server abrufen und das DOM aktualisieren](/de/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data).
- Verbesserung der Tastaturzugänglichkeit
  - : Es gibt eingebaute HTML-Elemente mit nativer Tastaturzugänglichkeit; wenn andere Elemente zusammen mit JavaScript verwendet werden, um ähnliche Interaktionen zu simulieren, leiden Tastaturzugänglichkeit und Screenreader-Wiedergabe als Folge. Wo dies unvermeidbar ist, bietet WAI-ARIA eine Möglichkeit, anderen Elementen einen Fokus zu gewähren (mithilfe von `tabindex`).
- Zugänglichkeit von nicht-semantischen Steuerelementen
  - : Wenn eine Reihe verschachtelter `<div>`s zusammen mit CSS/JavaScript verwendet wird, um ein komplexes UI-Merkmal zu erstellen, oder ein natives Steuerelement stark verbessert/verändert wird, kann die Zugänglichkeit leiden — Screenreader-Benutzer werden Schwierigkeiten haben, herauszufinden, was das Merkmal tut, wenn es keine Semantik oder andere Hinweise gibt. In diesen Situationen kann ARIA helfen, das Fehlende durch eine Kombination von Rollen wie `button`, `listbox` oder `tablist` und Eigenschaften wie `aria-required` oder `aria-posinset` bereitzustellen, um weitere Hinweise zur Funktionalität zu geben.

Aber denken Sie daran — **Sie sollten WAI-ARIA nur verwenden, wenn es notwendig ist!** Idealerweise sollten Sie _immer_ [native HTML-Funktionen](/de/docs/Learn/Accessibility/HTML) verwenden, um die von Screenreadern benötigte Semantik bereitzustellen, um ihren Nutzern mitzuteilen, was vor sich geht. Manchmal ist dies nicht möglich, entweder weil Sie nur begrenzte Kontrolle über den Code haben oder weil Sie etwas Komplexes erstellen, das kein einfaches HTML-Element zur Implementierung hat. In solchen Fällen kann WAI-ARIA ein wertvolles Werkzeug zur Verbesserung der Zugänglichkeit sein.

Aber benutzen Sie es nur, wenn nötig!

> [!NOTE]
> Versuchen Sie auch sicherzustellen, dass Sie Ihre Seite mit einer Vielzahl von _echten_ Benutzern testen — nicht-behinderten Personen, Personen, die Screenreader verwenden, Personen, die Tastaturnavigation verwenden usw. Diese werden bessere Einblicke haben, wie gut es funktioniert.

## Praktische WAI-ARIA-Implementierungen

Im nächsten Abschnitt werden wir die vier Bereiche näher betrachten, zusammen mit praktischen Beispielen. Bevor Sie fortfahren, sollten Sie ein Screenreader-Test-Setup einrichten, damit Sie einige der Beispiele testen können, während Sie sie durchgehen.

Siehe unseren Abschnitt zum [Testen von Screenreadern](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#screen_readers) für weitere Informationen.

### Wegweiser/Landmarken

WAI-ARIA fügt den Browsern das [`role`-Attribut](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) hinzu, das es Ihnen ermöglicht, den Elementen auf Ihrer Website dort, wo sie benötigt werden, zusätzlichen semantischen Wert hinzuzufügen. Der erste wichtige Bereich, in dem dies nützlich ist, besteht darin, Screenreadern Informationen zu liefern, damit ihre Nutzer häufige Seitenelemente finden können. Schauen wir uns ein Beispiel an — unser [Website-no-roles](https://github.com/mdn/learning-area/tree/main/accessibility/aria/website-no-roles) Beispiel ([sehen Sie es live](https://mdn.github.io/learning-area/accessibility/aria/website-no-roles/)) hat die folgende Struktur:

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

Wenn Sie das Beispiel mit einem Screenreader in einem modernen Browser testen, erhalten Sie bereits einige nützliche Informationen. Zum Beispiel gibt Ihnen VoiceOver Folgendes:

- Beim `<header>`-Element — "Banner, 2 Elemente" (es enthält eine Überschrift und das `<nav>`).
- Beim `<nav>`-Element — "Navigation, 2 Elemente" (es enthält eine Liste und ein Formular).
- Beim `<main>`-Element — "Hauptinhalt, 2 Elemente" (es enthält einen Artikel und einen Seitenbalken).
- Beim `<aside>`-Element — "Ergänzung, 2 Elemente" (es enthält eine Überschrift und eine Liste).
- Beim Suchformulareingabefeld — "Suchabfrage, Einfügen am Anfang des Textes".
- Beim `<footer>`-Element — "Fußzeile, 1 Element".

Wenn Sie ins VoiceOver-Landmarkenmenü gehen (zugänglich mit VoiceOver-Taste + U und dann mit den Pfeiltasten durch die Menüoptionen navigieren), sehen Sie, dass die meisten der Elemente schön aufgelistet sind, damit sie schnell aufgerufen werden können.

![Macs VoiceOver-Menü für schnelle Zugänglichkeit. Kopfzeile mit Wegweisern und Liste der Wegweiser, darunter Banner, Navigation, Hauptinhalt und Ergänzung.](landmarks-list.png)

Wir könnten hier jedoch noch besser werden. Das Suchformular ist ein wirklich wichtiger Wegweiser, den die Leute finden möchten, aber es ist im Landmarkenmenü nicht aufgelistet oder wird nicht als bemerkenswerter Wegweiser behandelt, abgesehen davon, dass das tatsächliche Eingabefeld als Sucheingabe bezeichnet wird (`<input type="search">`).

Lassen Sie uns das durch die Verwendung einiger ARIA-Funktionen verbessern. Zuerst fügen wir einige [`role`](/de/docs/Web/Accessibility/ARIA/Roles) Attribute zu unserer HTML-Struktur hinzu. Sie können entweder eine Kopie unserer Originaldateien nehmen (siehe [`index.html`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/website-no-roles/index.html) und [`style.css`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/website-no-roles/style.css)), oder unser [Website-aria-roles](https://github.com/mdn/learning-area/tree/main/accessibility/aria/website-aria-roles) Beispiel aufrufen ([sehen Sie es live](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)), das eine Struktur wie folgt hat:

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

Wir haben Ihnen in diesem Beispiel auch ein Bonusmerkmal gegeben — das {{htmlelement("input")}}-Element hat das Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) erhalten, das ihm ein beschreibendes Label gibt, das von einem Screenreader vorgelesen wird, obwohl wir kein {{htmlelement("label")}}-Element hinzugefügt haben. In Fällen wie diesen ist das sehr nützlich — ein Suchformular wie dieses ist ein sehr häufiges, leicht erkennbares Merkmal, und das Hinzufügen eines visuellen Labels würde das Seitendesign verderben.

```html
<input
  type="search"
  name="q"
  placeholder="Search query"
  aria-label="Search through site content" />
```

Wenn wir uns dieses Beispiel jetzt mit VoiceOver ansehen, gibt es einige Verbesserungen:

- Das Suchformular wird beim Durchblättern der Seite und im Landmarkenmenü als separates Element hervorgehoben.
- Der im Attribut `aria-label` enthaltene Labeltext wird vorgelesen, wenn das Formulareingabefeld hervorgehoben wird.

Darüber hinaus ist die Seite eher für Benutzer älterer Browser wie IE8 zugänglich; es lohnt sich also, die ARIA-Rollen aus diesem Grund einzuschließen. Und falls Ihre Seite aus irgendeinem Grund nur mit `<div>`s gebaut wurde, sollten Sie auf jeden Fall die ARIA-Rollen aufnehmen, um dieser dringend benötigten Semantik Rechnung zu tragen!

Die verbesserte Semantik des Suchformulars hat gezeigt, was möglich ist, wenn ARIA über die in HTML verfügbare Semantik hinausgeht. Sie werden weiter unten, besonders im Abschnitt zur [Zugänglichkeit von nicht-semantischen Steuerelementen](#zugänglichkeit_von_nicht-semantischen_steuerelementen), mehr über diese Semantik und die Leistungsfähigkeit von ARIA-Eigenschaften/-Attributen sehen. Lassen Sie uns jedoch an dieser Stelle ansehen, wie ARIA bei dynamischen Inhaltsaktualisierungen helfen kann.

### Dynamische Inhaltsaktualisierungen

Inhalte, die ins DOM geladen werden, können mit einem Screenreader einfach abgerufen werden, vom Textinhalt bis zu Alternativtexten, die an Bilder angehängt sind. Traditionelle statische Websites mit überwiegend Textinhalten sind daher einfach barrierefrei für visuell eingeschränkte Personen nutzbar.

Das Problem ist, dass moderne Web-Apps oft nicht nur statischer Text sind — sie aktualisieren oft Teile der Seite, indem sie neue Inhalte vom Server abrufen und das DOM aktualisieren. Diese werden manchmal als **Live-Regionen** bezeichnet.

Lassen Sie uns ein schnelles Beispiel ansehen — sehen Sie [`aria-no-live.html`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/aria-no-live.html) (auch [sehen Sie es live laufend](https://mdn.github.io/learning-area/accessibility/aria/aria-no-live.html)). In diesem Beispiel haben wir ein einfaches, zufälliges Zitatfeld:

```html
<section>
  <h1>Random quote</h1>
  <blockquote>
    <p></p>
  </blockquote>
</section>
```

Unser JavaScript verwendet die [`fetch()`](/de/docs/Web/API/Window/fetch) API, um eine JSON-Datei mit einer Reihe zufälliger Zitate und deren Autoren zu laden. Sobald dies geschehen ist, starten wir eine [`setInterval()`](/de/docs/Web/API/setInterval)-Schleife, die alle 10 Sekunden ein neues zufälliges Zitat in das Zitatfeld lädt:

```js
const intervalID = setInterval(showQuote, 10000);
```

Dies funktioniert zwar, ist aber nicht gut für die Barrierefreiheit — die Inhaltsaktualisierung wird von Screenreadern nicht erkannt, sodass ihre Benutzer nicht wissen, was vor sich geht. Dies ist ein ziemlich trivial Beispiel, aber stellen Sie sich vor, Sie würden eine komplexe Benutzeroberfläche mit vielen ständig aktualisierenden Inhalten erstellen, wie einen Chatroom, ein Strategie-Spiel-UI oder eine ständig aktualisierende Einkaufskorbanzeige — es wäre unmöglich, die App auf irgendeine effektive Weise ohne eine Art von Benachrichtigung an den Benutzer zu verwenden, die auf die Aktualisierungen hinweist.

WAI-ARIA bietet glücklicherweise einen nützlichen Mechanismus, um diese Benachrichtigungen bereitzustellen — die [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live)-Eigenschaft. Diese auf ein Element anzuwenden, führt dazu, dass Screenreader den aktualisierten Inhalt vorlesen. Wie dringend der Inhalt vorgelesen wird, hängt vom Attributwert ab:

- `off`
  - : Der Standardwert. Aktualisierungen sollten nicht angekündigt werden.
- `polite`
  - : Aktualisierungen sollten nur angekündigt werden, wenn der Benutzer inaktiv ist.
- `assertive`
  - : Aktualisierungen sollten dem Benutzer so schnell wie möglich angekündigt werden.

Wir möchten, dass Sie eine Kopie von [`aria-no-live.html`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/aria-no-live.html) und [`quotes.json`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/quotes.json) nehmen und Ihr `<section>`-Öffnungstag wie folgt aktualisieren:

```html
<section aria-live="assertive">…</section>
```

Dies bewirkt, dass ein Screenreader den Inhalt vorgelesen wird, während er aktualisiert wird.

> [!NOTE]
> Die meisten Browser werden eine Sicherheitsexception auslösen, wenn Sie versuchen, eine HTTP-Anfrage von einer `file://`-URL zu stellen, z.B. wenn Sie die Datei einfach direkt in den Browser laden (durch Doppelklicken usw.). Siehe [wie man einen lokalen Testserver einrichtet](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server).

Eine zusätzliche Überlegung ist hierbei — nur der Textabschnitt, der aktualisiert wird, wird vorgelesen. Es könnte nett sein, wenn wir immer auch die Überschrift vorlesen lassen könnten, damit der Benutzer sich merkt, was vorgelesen wird. Dazu können wir die [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)-Eigenschaft zur Abschnittsöffnung hinzufügen. Aktualisieren Sie Ihr `<section>`-Öffnungs-Tag erneut, wie folgt:

```html
<section aria-live="assertive" aria-atomic="true">…</section>
```

Das `aria-atomic="true"` Attribut sagt Screenreadern, die gesamten Inhalte eines Elements als eine atomare Einheit vorzulesen, nicht nur die Abschnitte, die aktualisiert wurden.

> [!NOTE]
> Sie können das fertige Beispiel unter [`aria-live.html`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/aria-live.html) ([sehen Sie es live ausführen](https://mdn.github.io/learning-area/accessibility/aria/aria-live.html)) sehen.

> [!NOTE]
> Die [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)-Eigenschaft ist auch ziemlich nützlich, um zu kontrollieren, was vorgelesen wird, wenn eine Live-Region aktualisiert wird. Sie können beispielsweise nur Inhaltsergänzungen oder -entfernungen vorlesen lassen.

### Verbesserung der Tastaturzugänglichkeit

Wie an einigen anderen Stellen im Modul besprochen, ist eine der Stärken von HTML in Bezug auf die Barrierefreiheit die eingebaute Tastaturzugänglichkeit von Funktionen wie Buttons, Formularelementen und Links. Normalerweise können Sie die Tabulator-Taste verwenden, um zwischen Steuerelementen zu wechseln, die Eingabe-/Return-Taste, um Steuerelemente auszuwählen oder zu aktivieren, und gelegentlich andere Steuerelemente, die benötigt werden (zum Beispiel die Auf-/Abwärts-Cursor, um zwischen Optionen in einem `<select>`-Kästchen zu wechseln).

Manchmal kommt es jedoch vor, dass Sie Code schreiben müssen, der entweder nicht-semantische Elemente als Buttons verwendet (oder andere Arten von Steuerelementen) oder fokussierbare Steuerelemente für nicht ganz passende Zwecke nutzt. Sie könnten versuchen, schlechten Code zu reparieren, den Sie geerbt haben, oder Sie bauen eine Art komplexes Widget, das es erfordert.

In Bezug darauf, nicht-fokussierbaren Code fokussierbar zu machen, erweitert WAI-ARIA das `tabindex`-Attribut mit einigen neuen Werten:

- `tabindex="0"` — wie oben angegeben, erlaubt dieser Wert es, dass normalerweise nicht-tabulatorfähige Elemente tabulatorfähig werden. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — erlaubt es normalerweise nicht umzublätternden Elementen, programmatisch fokussiert zu werden, z.B. über JavaScript oder als Ziel von Links.

Wir haben dies ausführlicher besprochen und eine typische Implementierung in unserem HTML-Zugänglichkeitsartikel gezeigt — siehe [Erneute Tastaturzugänglichkeit einbauen](/de/docs/Learn/Accessibility/HTML#building_keyboard_accessibility_back_in).

### Zugänglichkeit von nicht-semantischen Steuerelementen

Dies schließt sich dem vorherigen Abschnitt an — wenn eine Reihe verschachtelter `<div>`s zusammen mit CSS/JavaScript verwendet wird, um eine komplexe Benutzeroberfläche zu erstellen, oder ein natives Steuerelement stark verbessert/verändert wird, kann nicht nur die Tastaturzugänglichkeit leiden, sondern auch Screenreader-Benutzer haben Schwierigkeiten, herauszufinden, was das Merkmal tut, wenn keine Semantik oder andere Hinweise vorhanden sind. In solchen Situationen kann ARIA helfen, die fehlende Semantik bereitzustellen.

#### Formularvalidierung und Fehlerbenachrichtigungen

Zuerst lassen Sie uns das Formularbeispiel, das wir erstmals in unserem CSS- und JavaScript-Zugänglichkeitsartikel betrachtet haben (lesen Sie [Unauffälligkeit bewahren](/de/docs/Learn/Accessibility/CSS_and_JavaScript#keeping_it_unobtrusive) für eine vollständige Wiederholung), erneut ansehen. Am Ende dieses Abschnitts haben wir gezeigt, dass wir einige ARIA-Attribute auf die Fehlermeldungsbox hinzugefügt haben, die alle Validierungsfehler anzeigt, wenn Sie versuchen, das Formular abzusenden:

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

- [`role="alert"`](/de/docs/Web/Accessibility/ARIA/Roles/alert_role) verwandelt automatisch das Element, auf das es angewendet wird, in eine Live-Region, sodass Änderungen daran vorgelesen werden; es identifiziert es auch semantisch als eine Alarmnachricht (wichtige zeit-/kontextsensitive Informationen) und stellt eine bessere, zugänglichere Art und Weise dar, einem Benutzer eine Benachrichtigung zu senden (modale Dialoge wie [`alert()`](/de/docs/Web/API/Window/alert)-Aufrufe haben eine Reihe von Barrierefreiheitsproblemen; siehe [Popup-Fenster](https://webaim.org/techniques/javascript/other#popups) von WebAIM).
- Ein [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)-Wert von `all` weist den Screenreader an, den Inhalt der Fehlerliste vorzulesen, wenn irgendwelche Änderungen daran vorgenommen werden — d.h. wenn Fehler hinzugefügt oder entfernt werden. Dies ist nützlich, weil der Benutzer wissen möchte, welche Fehler übrigbleiben, nicht nur, was zur Liste hinzugefügt oder aus ihr entfernt wurde.

Wir könnten mit unserer ARIA-Nutzung weitergehen und noch mehr Validierungshilfe bereitstellen. Wie wäre es, wenn wir darauf hinweisen, ob Felder von Anfang an erforderlich sind und welches Alter gelten sollte?

1. Nehmen Sie zu diesem Zeitpunkt eine Kopie unserer [`form-validation.html`](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html) und [`validation.js`](https://github.com/mdn/learning-area/blob/main/accessibility/css/validation.js) Dateien und speichern Sie sie in einem lokalen Verzeichnis.
2. Öffnen Sie sie beide in einem Texteditor und sehen Sie sich an, wie der Code funktioniert.
3. Zuerst fügen Sie über dem `<form>`-Öffnungstag einen Absatz ein, wie den unten, und markieren Sie beide Formular `<label>`s mit einem Stern. Dies ist normalerweise, wie wir erforderliche Felder für sehende Benutzer markieren. 

   ```html
   <p>Fields marked with an asterisk (*) are required.</p>
   ```

4. Das ergibt visuell Sinn, aber es ist nicht so leicht für Screenreader-Benutzer zu verstehen. Glücklicherweise bietet WAI-ARIA das `aria-required`-Attribut, um Screenreader daran zu erinnern, dass Formulareingaben ausgefüllt werden müssen. Aktualisieren Sie die `<input>`-Elemente wie folgt:

   ```html
   <input type="text" name="name" id="name" aria-required="true" />

   <input type="number" name="age" id="age" aria-required="true" />
   ```

5. Wenn Sie das Beispiel jetzt speichern und mit einem Screenreader testen, sollten Sie etwas wie "Geben Sie Ihren Namen ein Stern, erforderlich, Text bearbeiten" hören.
6. Es wäre auch nützlich, wenn wir Screenreader-Benutzern und sehenden Benutzern einen Eindruck davon geben, was der Alterswert sein sollte. Dies wird oft als Tooltip oder Platzhalter im Formulareingabefeld dargestellt. WAI-ARIA enthält `aria-valuemin` und `aria-valuemax`-Eigenschaften, um min und max-Werte zu spezifizieren, und Screenreader unterstützen die nativen `min` und `max`-Attribute. Eine andere gut unterstützte Funktion ist das HTML `placeholder`-Attribut, das eine Nachricht enthalten kann, die im Eingabefeld angezeigt wird, wenn kein Wert eingegeben wurde und von einigen Screenreadern vorgelesen wird. Aktualisieren Sie Ihre nummerische Eingabe wie folgt:

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

Immer ein {{HTMLelement("label")}} für jede Eingabe einschließen. Während einige Screenreader den Platzhaltertext ankündigen, tun dies die meisten nicht. Akzeptable Ersetzungen für das Bereitstellen von Formularsteuerelementen mit einem zugänglichen Namen umfassen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) und [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby). Aber das <label>-Element mit einem `for`-Attribut ist die bevorzugte Methode, da es die Benutzerfreundlichkeit für alle Benutzer, einschließlich Mausbenutzer, bietet.

> [!NOTE]
> Sie können das fertige Beispiel live unter [`form-validation-updated.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-updated.html) sehen.

WAI-ARIA ermöglicht auch einige fortschrittliche Methoden zur Beschriftung von Formularen, die über das klassische {{htmlelement("label")}}-Element hinausgehen. Wir haben bereits darüber gesprochen, die [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Eigenschaft zu verwenden, um ein Label bereitzustellen, wenn wir das Label nicht für sehende Benutzer sichtbar machen wollen (siehe den Abschnitt [Wegweiser/Landmarken](#signpostslandmarks), oben). Einige andere Beschriftungstechniken verwenden weitere Eigenschaften wie `aria-labelledby`, wenn Sie ein nicht-`<label>`-Element als Label bezeichnen möchten oder mehrere Formulareingaben mit demselben Label kennzeichnen möchten, und `aria-describedby`, wenn Sie weitere Informationen mit einer Formulareingabe verknüpfen und ebenfalls vorgelesen haben möchten. Siehe [WebAIMs Artikel zu fortgeschrittener Formularbeschriftung](https://webaim.org/techniques/forms/advanced) für weitere Details.

Es gibt auch viele andere nützliche Eigenschaften und Zustände, z.Bsg. `aria-disabled="true"` kann verwendet werden, um anzugeben, dass ein Formularelement deaktiviert ist. Viele Browser springen über deaktivierte Formularelemente hinweg, was dazu führt, dass sie von Screenreadern nicht vorgelesen werden. In einigen Fällen wird ein deaktiviertes Element wahrgenommen, also ist es eine gute Idee, dieses Attribut hinzuzufügen, um dem Screenreader mitzuteilen, dass ein deaktiviertes Formularelement tatsächlich deaktiviert ist.

Wenn der deaktivierte Zustand einer Eingabe sich wahrscheinlich ändern wird, dann ist es auch eine gute Idee, anzugeben, wann es passiert und was das Ergebnis ist. Zum Beispiel haben wir in unserem [`form-validation-checkbox-disabled.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-checkbox-disabled.html) Demo eine Checkbox, die ein weiteres Formularelement aktiviert, wenn sie angehakt ist, um die Eingabe weiterer Informationen zu ermöglichen. Wir haben eine versteckte Live-Region eingerichtet:

```html
<p class="hidden-alert" aria-live="assertive"></p>
```

die durch absolute Positionierung aus der Ansicht verborgen ist. Wenn dies angekreuzt/abgehakt wird, aktualisieren wir den Text innerhalb der versteckten Live-Region, um den Screenreader-Benutzern mitzuteilen, was das Ergebnis des Ankreuzens dieser Checkbox ist, sowie den `aria-disabled`-Zustand zu aktualisieren und einige visuelle Hinweise ebenfalls:

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

#### Nicht-semantische Buttons als Buttons beschreiben

Einige Male in diesem Kurs haben wir bereits die native Zugänglichkeit (und die Zugänglichkeitsprobleme hinter der Verwendung anderer Elemente zur Nachbildung) von Buttons, Links, oder Formularelementen erwähnt (siehe [UI-Steuerelemente](/de/docs/Learn/Accessibility/HTML#ui_controls) im HTML-Zugänglichkeitsartikel, und [Verbesserung der Tastaturzugänglichkeit](#verbesserung_der_tastaturzugänglichkeit), oben). Im Wesentlichen können Sie die Tastaturzugänglichkeit in vielen Fällen mit kaum Aufwand wieder einbauen, indem Sie `tabindex` und etwas JavaScript verwenden.

Aber was ist mit Screenreadern? Sie werden die Elemente immer noch nicht als Buttons sehen. Wenn wir unser [`fake-div-buttons.html`](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) Beispiel in einem Screenreader testen, werden unsere fakten Buttons mit Ausdrücken wie "Drück mich!, Gruppe" gemeldet, was natürlich verwirrend ist.

Wir können dies mit einer WAI-ARIA-Rolle beheben. Machen Sie eine lokale Kopie von [`fake-div-buttons.html`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) und fügen Sie [`role="button"`](/de/docs/Web/Accessibility/ARIA/Roles/button_role) zu jedem Button-`<div>` hinzu, zum Beispiel:

```html
<div data-message="This is from the first button" tabindex="0" role="button">
  Click me!
</div>
```

Testen Sie dies jetzt mit einem Screenreader, und Sie werden feststellen, dass die Buttons mit Ausdrücken wie "Drück mich!, Button" gemeldet werden. Während dies viel besser ist, müssen Sie dennoch alle nativen Button-Funktionen hinzufügen, die Benutzer erwarten, wie das Verarbeiten von <kbd>Enter</kbd> und Click-Events, wie in der [`button`-Rollen-Dokumentation](/de/docs/Web/Accessibility/ARIA/Roles/button_role) erklärt.

> [!NOTE]
> Vergessen Sie jedoch nicht, dass die Verwendung des richtigen semantischen Elements, wo möglich, immer besser ist. Wenn Sie einen Button erstellen möchten und ein {{htmlelement("button")}}-Element verwenden können, sollten Sie ein {{htmlelement("button")}}-Element verwenden!

#### Benutzer durch komplexe Widgets führen

Es gibt eine ganze Reihe weiterer [Rollen](/de/docs/Web/Accessibility/ARIA/Roles), die Strukturen aus nicht-semantischen Elementen als gängige UI-Funktionen identifizieren können, die über das hinausgehen, was in Standard-HTML verfügbar ist, z.B. [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Roles/slider_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role), [`tree`](/de/docs/Web/Accessibility/ARIA/Roles/tree_role). Sie können sich mehrere nützliche Beispiele in der [Deque University Codebibliothek](https://dequeuniversity.com/library/) ansehen, um eine Vorstellung davon zu bekommen, wie solche Steuerelemente zugänglich gemacht werden können.

Lassen Sie uns ein eigenes Beispiel durchgehen. Wir kehren zu unserem einfachen absolut-positionierten Registerkarteninterface (siehe [Verstecken von Dingen](/de/docs/Learn/Accessibility/CSS_and_JavaScript#hiding_things) in unserem CSS- und JavaScript-Zugänglichkeitsartikel), das Sie bei [Tabbed-Info-Box-Beispiel](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/tabbed-info-box.html) finden können (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html)).

Dieses Beispiel funktioniert im aktuellen Zustand gut in Bezug auf die Tastaturzugänglichkeit — Sie können problemlos zwischen den verschiedenen Tabs wechseln und sie auswählen, um die Tabinhalte anzuzeigen. Es ist auch ziemlich zugänglich — Sie können durch den Inhalt scrollen und die Überschriften zur Navigation verwenden, selbst wenn Sie nicht sehen können, was auf dem Bildschirm passiert. Es ist jedoch nicht wirklich offensichtlich, was der Inhalt ist — ein Screenreader berichtet derzeit den Inhalt als eine Liste von Links und einige Inhalte mit drei Überschriften. Er gibt Ihnen keine Ahnung, wie der Zusammenhang zwischen den Inhalten ist. Den Nutzern mehr Hinweise auf die Struktur der Inhalte zu geben, ist immer gut.

Um die Dinge zu verbessern, haben wir eine neue Version des Beispiels mit dem Namen [`aria-tabbed-info-box.html`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/aria-tabbed-info-box.html) erstellt ([sehen Sie es live ausführen](https://mdn.github.io/learning-area/accessibility/aria/aria-tabbed-info-box.html)). Wir haben die Struktur des Registerkarten-Interfaces wie folgt aktualisiert:

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
> Die auffälligste Änderung hier ist, dass wir die Links, die ursprünglich im Beispiel vorhanden waren, entfernt haben und einfach die Listenelemente als Tabs verwendet haben — dies wurde gemacht, weil es weniger verwirrend für Screenreader-Nutzer macht (die Links führen Sie nicht wirklich irgendwohin, sie ändern nur die Ansicht), und es ermöglicht, dass die Setgröße/Position besser funktioniert — wenn diese auf den Links platziert wurden, meldete der Browser immer "1 von 1", nicht "1 von 3", "2 von 3", etc.

Verwendete ARIA-Funktionen umfassen:

- Neue Rollen — [`tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role), [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role)
  - : Diese identifizieren die wichtigen Bereiche des Registerkarten-Interfaces — der Container für die Tabs, die Tabs selbst und die entsprechenden Tabpanels.
- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)
  - : Definiert, welcher Tab derzeit ausgewählt ist. Während unterschiedliche Tabs vom Benutzer ausgewählt werden, wird der Wert dieses Attributs an den unterschiedlichen Tabs über JavaScript aktualisiert.
- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)
  - : Verbirgt ein Element davor, von einem Screenreader vorgelesen zu werden. Während unterschiedliche Tabs vom Benutzer ausgewählt werden, wird der Wert dieses Attributs an den unterschiedlichen Tabs über JavaScript aktualisiert.
- `tabindex="0"`
  - : Da wir die Links entfernt haben, müssen wir den Listenelementen dieses Attribut geben, um ihnen den Tastaturfokus zu ermöglichen.
- [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize)
  - : Diese Eigenschaft erlaubt es Ihnen, Screenreadern anzugeben, dass ein Element Teil einer Serie ist und wie viele Elemente die Serie hat.
- [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset)
  - : Diese Eigenschaft erlaubt es Ihnen anzugeben, welchen Platz in einer Serie ein Element hat. Zusammen mit `aria-setsize` bietet es einem Screenreader genügend Informationen, um Ihnen mitzuteilen, dass Sie sich derzeit auf Element "1 von 3" befinden, usw. In vielen Fällen sollten Browser in der Lage sein, diese Informationen aus der Elementhierarchie zu inferieren, aber es hilft sicherlich, mehr Hinweise zu geben.

In unseren Tests verbesserte diese neue Struktur die Dinge insgesamt. Die Tabs werden nun als Tabs erkannt (z.B. "Tab" wird vom Screenreader gesprochen), der ausgewählte Tab wird durch "ausgewählt" mit dem Tabnamen ausgewiesen, und der Screenreader sagt Ihnen auch, welcher Tabnummer Sie sich derzeit befinden. Darüber hinaus ist durch die `aria-hidden`-Einstellungen (nur der nicht versteckte Tab hat immer `aria-hidden="false"` eingestellt), der nicht versteckte Inhalt der einzige, den Sie erreichen können, was bedeutet, dass der ausgewählte Inhalt leichter zu finden ist.

> [!NOTE]
> Wenn es etwas gibt, das Sie explizit nicht von Screenreadern vorgelesen haben möchten, können Sie das mit dem `aria-hidden="true"` Attribut versehen.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: WAI-ARIA](/de/docs/Learn/Accessibility/WAI-ARIA_basics/Test_your_skills:_WAI-ARIA).

## Zusammenfassung

Dieser Artikel hat keineswegs alles behandelt, was in WAI-ARIA verfügbar ist, sollte Ihnen jedoch genügend Informationen gegeben haben, um zu verstehen, wie man es verwendet, und einige der häufigsten Muster, die es erfordert, zu kennen.

## Siehe auch

- [Aria-Zustände und -Eigenschaften](/de/docs/Web/Accessibility/ARIA/Attributes): Alle `aria-*` Attribute
- [WAI-ARIA Rollen](/de/docs/Web/Accessibility/ARIA/Roles): Kategorien von ARIA-Rollen und die auf MDN behandelten Rollen
- [ARIA in HTML](https://www.w3.org/TR/html-aria/) auf W3C: Eine Spezifikation, die festlegt, für jedes HTML-Feature, die ausdrücklich angewendete Barrierefreiheits- (ARIA-) Semantik und die WAI-ARIA-Features, die Sie auf dieses setzen können, falls zusätzliche Semantik erforderlich ist
- [Deque University Codebibliothek](https://dequeuniversity.com/library/): Eine Bibliothek mit wirklich nützlichen und praktischen Beispielen, die komplexe UI-Steuerelemente zeigen, die mit WAI-ARIA-Funktionen zugänglich gemacht wurden
- [WAI-ARIA Autor-Praktiken](https://www.w3.org/WAI/ARIA/apg/) auf W3C: Ein sehr detailliertes Designmuster von der W3C, das erklärt, wie man verschiedene Arten von komplexen UI-Steuerelementen implementiert und sie mithilfe von WAI-ARIA-Funktionen zugänglich macht

{{PreviousMenuNext("Learn/Accessibility/CSS_and_JavaScript","Learn/Accessibility/Multimedia", "Learn/Accessibility")}}
