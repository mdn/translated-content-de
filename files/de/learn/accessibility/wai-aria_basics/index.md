---
title: WAI-ARIA Grundlagen
slug: Learn/Accessibility/WAI-ARIA_basics
l10n:
  sourceCommit: 7ab2f95b22919d8b897754e8a66981d0b9a4e2c4
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Accessibility/CSS_and_JavaScript","Learn/Accessibility/Multimedia", "Learn/Accessibility")}}

Im Anschluss an den vorhergehenden Artikel kann es manchmal schwierig sein, komplexe UI-Steuerelemente zu erstellen, die nicht-semantisches HTML und dynamisch per JavaScript aktualisierte Inhalte umfassen. WAI-ARIA ist eine Technologie, die bei solchen Problemen helfen kann, indem sie zusätzliche Semantik hinzufügt, die von Browsern und unterstützenden Technologien erkannt und verwendet werden kann, um den Benutzern mitzuteilen, was vor sich geht. Hier zeigen wir, wie Sie es auf einer grundlegenden Ebene verwenden können, um die Zugänglichkeit zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis von HTML, CSS und
        JavaScript. Ein Verständnis der
        <a href="/de/docs/Learn/Accessibility"
          >vorherigen Artikel im Kurs</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit WAI-ARIA erlangen und wie es verwendet werden kann, um nützliche zusätzliche Semantik bereitzustellen, um die Zugänglichkeit zu verbessern, wo nötig.
      </td>
    </tr>
  </tbody>
</table>

## Was ist WAI-ARIA?

Beginnen wir damit, was WAI-ARIA ist und was es für uns tun kann.

### Eine ganz neue Reihe von Problemen

Als Web-Apps komplexer und dynamischer wurden, tauchte eine neue Reihe von Zugänglichkeitsfunktionen und -problemen auf.

Zum Beispiel führte HTML eine Reihe von semantischen Elementen ein, um gemeinsame Seitenelemente zu definieren ({{htmlelement("nav")}}, {{htmlelement("footer")}}, etc.). Bevor diese verfügbar waren, nutzten Entwickler {{htmlelement("div")}}s mit IDs oder Klassen, z.B. `<div class="nav">`, aber das war problematisch, da es keine einfache Möglichkeit gab, programmgesteuert ein spezifisches Seitenelement wie die Hauptnavigation leicht zu finden.

Die anfängliche Lösung war, am oberen Rand der Seite ein oder mehrere versteckte Links zur Navigation (oder was auch immer) hinzuzufügen, beispielsweise:

```html
<a href="#hidden" class="hidden">Skip to navigation</a>
```

Aber das ist immer noch nicht sehr präzise und kann nur verwendet werden, wenn der Screenreader von der Oberseite der Seite liest.

Ein weiteres Beispiel sind Apps, die begannen, komplexe Steuerelemente wie Datumsauswahlprogramme für die Auswahl von Daten, Schieberegler für die Auswahl von Werten, etc. zu bieten. HTML bietet spezielle Eingabetypen, um solche Steuerelemente darzustellen:

```html
<input type="date" /> <input type="range" />
```

Diese wurden ursprünglich nicht gut unterstützt und es war, und ist immer noch in gewissem Maße, schwierig, sie zu stylen, was dazu führt, dass Designer und Entwickler sich für benutzerdefinierte Lösungen entscheiden. Anstatt diese nativen Funktionen zu verwenden, verlassen sich einige Entwickler auf JavaScript-Bibliotheken, die solche Steuerelemente als eine Reihe verschachtelter {{htmlelement("div")}}s generieren, die dann mit CSS gestylt und mit JavaScript gesteuert werden.

Das Problem hier ist, dass sie visuell funktionieren, aber Screenreader sie überhaupt nicht verstehen können, und ihre Benutzer erfahren lediglich, dass sie eine Ansammlung von Elementen ohne Semantik sehen, die ihren Sinn beschreiben.

### Einführung in WAI-ARIA

[WAI-ARIA](https://www.w3.org/TR/wai-aria/) (Web Accessibility Initiative - Accessible Rich Internet Applications) ist eine Spezifikation, die vom W3C verfasst wurde und eine Reihe zusätzlicher HTML-Attribute definiert, die auf Elemente angewendet werden können, um zusätzliche Semantik bereitzustellen und die Zugänglichkeit zu verbessern, wo sie fehlt. In der Spezifikation sind drei Hauptmerkmale definiert:

- [Rollen](/de/docs/Web/Accessibility/ARIA/Roles)
  - : Diese definieren, was ein Element ist oder tut. Viele davon sind sogenannte Landmark-Rollen, die weitgehend den semantischen Wert von Strukturelementen duplizieren, wie `role="navigation"` ({{htmlelement("nav")}}) oder `role="complementary"` ({{htmlelement("aside")}}). Andere Rollen beschreiben verschiedene Seitenstrukturen, wie `role="banner"`, `role="search"`, `role="tablist"` und `role="tabpanel"`, die häufig in UIs zu finden sind.
- Eigenschaften
  - : Diese definieren Eigenschaften von Elementen, die verwendet werden können, um ihnen zusätzliche Bedeutung oder Semantik zu geben. Ein Beispiel ist `aria-required="true"`, das angibt, dass eine Formulareingabe ausgefüllt werden muss, um gültig zu sein, während `aria-labelledby="label"` es ermöglicht, eine ID auf ein Element zu setzen und es als Kennzeichnung für alles andere auf der Seite zu referenzieren, einschließlich mehrerer Elemente, was mit `<label for="input">` nicht möglich ist. Ein Beispiel hierfür ist, dass Sie `aria-labelledby` verwenden könnten, um anzugeben, dass eine Schlüsselinformation, die in einem {{htmlelement("div")}} enthalten ist, die Bezeichnung für mehrere Tabellenzellen ist, oder Sie könnten es als alternative Bildbeschreibung verwenden — bestehende Informationen auf der Seite als Alt-Text eines Bildes angeben, anstatt sie im `alt`-Attribut zu wiederholen. Ein Beispiel hierfür finden Sie unter [Textalternativen](/de/docs/Learn/Accessibility/HTML#text_alternatives).
- Zustände
  - : Spezielle Eigenschaften, die den aktuellen Zustand von Elementen definieren, wie `aria-disabled="true"`, das einem Screenreader angibt, dass eine Formulareingabe derzeit deaktiviert ist. Zustände unterscheiden sich von Eigenschaften darin, dass diese sich im Lebenszyklus einer App nicht ändern, während Zustände sich ändern können, in der Regel programmgesteuert per JavaScript.

Ein wichtiger Punkt bei WAI-ARIA-Attributen ist, dass sie nichts an der Webseite beeinflussen, außer den Informationen, die von den Barrierefreiheits-APIs des Browsers bereitgestellt werden (woher Screenreader ihre Informationen beziehen). WAI-ARIA beeinflusst nicht die Seitenstruktur, das DOM, etc., obwohl die Attribute nützlich sein können, um Elemente durch CSS auszuwählen.

> [!NOTE]
> Eine nützliche Liste aller ARIA-Rollen und ihrer Verwendungszwecke finden Sie mit Links zu weiteren Informationen in der WAI-ARIA-Spezifikation — siehe [Definition of Roles](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) — auf dieser Seite — siehe [ARIA roles](/de/docs/Web/Accessibility/ARIA/Roles).
>
> Die Spezifikation enthält auch eine Liste aller Eigenschaften und Zustände, mit Links zu weiteren Informationen — siehe [Definitions of States and Properties (alle `aria-*` Attribute)](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def).

### Wo wird WAI-ARIA unterstützt?

Diese Frage ist nicht leicht zu beantworten. Es ist schwierig, eine endgültige Quelle zu finden, die angibt, welche Funktionen von WAI-ARIA wo unterstützt werden, weil:

1. Es gibt viele Funktionen in der WAI-ARIA-Spezifikation.
2. Es gibt viele Kombinationen von Betriebssystemen, Browsern und Screenreadern, die berücksichtigt werden müssen.

Dieser letzte Punkt ist entscheidend – Um einen Screenreader überhaupt nutzen zu können, muss Ihr Betriebssystem Browser ausführen, die die notwendigen Barrierefreiheits-APIs implementieren, um die Informationen zu liefern, die Screenreader benötigen, um ihre Arbeit zu erledigen. Die meisten beliebten Betriebssysteme haben ein oder zwei Browser, mit denen Screenreader arbeiten können. Die Paciello Group hat einen ziemlich aktuellen Beitrag, der Daten dazu bereitstellt — siehe [Rough Guide: browsers, operating systems and screen reader support updated](https://www.tpgi.com/rough-guide-browsers-operating-systems-and-screen-reader-support-updated/).

Als nächstes müssen Sie beachten, ob die betreffenden Browser ARIA-Funktionen unterstützen und diese über ihre APIs bereitstellen, aber auch, ob Screenreader diese Informationen erkennen und nützlich an ihre Benutzer weitergeben.

1. Die Unterstützung durch Browser ist nahezu universell.
2. Die Unterstützung durch Screenreader ist noch nicht ganz auf diesem Niveau, aber die beliebtesten Screenreader nähern sich an. Sie können sich ein Bild von den Unterstützungsstufen verschaffen, indem Sie sich den Artikel [WAI-ARIA Screen reader compatibility](https://www.powermapper.com/tests/screen-readers/aria/) von Powermapper ansehen.

In diesem Artikel werden wir nicht versuchen, jede WAI-ARIA-Funktion und ihre genauen Unterstützungsdetails abzudecken. Stattdessen werden wir die kritischsten WAI-ARIA-Funktionen behandeln, die Sie kennen sollten; wenn wir keine Unterstützungsdetails erwähnen, können Sie davon ausgehen, dass die Funktion gut unterstützt wird. Wir werden etwaige Ausnahmen klar benennen.

> [!NOTE]
> Einige JavaScript-Bibliotheken unterstützen WAI-ARIA, was bedeutet, dass sie beim Generieren von UI-Features wie komplexen Formularelementen ARIA-Attribute hinzufügen, um die Zugänglichkeit dieser Features zu verbessern. Wenn Sie eine 3rd-Party-JavaScript-Lösung für eine schnelle UI-Entwicklung suchen, sollten Sie definitiv die Barrierefreiheit der UI-Komponenten als wichtigen Faktor bei Ihrer Wahl berücksichtigen. Gute Beispiele sind jQuery UI (siehe [About jQuery UI: Deep accessibility support](https://jqueryui.com/about/#deep-accessibility-support)), [ExtJS](https://www.sencha.com/products/extjs/), und [Dojo/Dijit](https://dojotoolkit.org/reference-guide/1.10/dijit/a11y/statement.html).

### Wann sollten Sie WAI-ARIA verwenden?

Wir haben bereits einige der Probleme besprochen, die zur Schaffung von WAI-ARIA führten, aber im Wesentlichen gibt es vier Hauptbereiche, in denen WAI-ARIA nützlich sein kann:

- Wegweiser/Landmarks
  - : ARIA's [`role`](/de/docs/Web/Accessibility/ARIA/Roles) Attributwerte können als Landmarken fungieren, die entweder die Semantik von HTML-Elementen replizieren (z.B. {{htmlelement("nav")}}) oder über die HTML-Semantik hinausgehen, um Wegweiser zu verschiedenen Funktionsbereichen bereitzustellen, zum Beispiel `search`, `tablist`, `tab`, `listbox`, etc.
- Dynamische Inhaltsaktualisierungen
  - : Screenreader haben oft Schwierigkeiten, sich kontinuierlich ändernde Inhalte zu melden; mit ARIA können wir `aria-live` verwenden, um Screenreader-Nutzern mitzuteilen, wenn ein Inhaltsbereich dynamisch aktualisiert wird: zum Beispiel durch JavaScript auf der Seite, das neue Inhalte vom Server abruft und das DOM aktualisiert.
- Verbesserung der Tastaturzugänglichkeit
  - : Es gibt eingebaute HTML-Elemente, die über native Tastaturzugänglichkeit verfügen; wenn andere Elemente zusammen mit JavaScript verwendet werden, um ähnliche Interaktionen zu simulieren, leidet die Tastaturzugänglichkeit und die Screenreader-Berichterstattung darunter. Wo dies unvermeidlich ist, bietet WAI-ARIA eine Möglichkeit, dass andere Elemente den Fokus erhalten können (durch Verwendung von `tabindex`).
- Barrierefreiheit von nicht-semantischen Steuerelementen
  - : Wenn eine Serie verschachtelter `<div>`s zusammen mit CSS/JavaScript zur Erstellung einer komplexen UI-Funktion verwendet wird, oder wenn ein natives Steuerelement durch JavaScript stark verbessert/verändert wird, kann die Barrierefreiheit leiden — Screenreader-Nutzer werden es schwer haben, herauszufinden, was das Feature tut, wenn keine Semantik oder andere Hinweise vorhanden sind. In solchen Situationen kann ARIA dabei helfen, das Fehlende mit einer Kombination aus Rollen wie `button`, `listbox` oder `tablist` und Eigenschaften wie `aria-required` oder `aria-posinset` bereitzustellen, um weitere Hinweise auf die Funktionalität zu geben.

Eines sollten Sie jedoch beachten — **Sie sollten WAI-ARIA nur verwenden, wenn es notwendig ist!** Idealerweise sollten Sie _immer_ [native HTML-Funktionen](/de/docs/Learn/Accessibility/HTML) verwenden, um die von Screenreadern benötigte Semantik bereitzustellen, um den Benutzern zu erklären, was vor sich geht. Manchmal ist das nicht möglich, entweder weil Sie nur begrenzte Kontrolle über den Code haben, oder weil Sie etwas Komplexes erstellen, für das es kein einfaches HTML-Element gibt, um es zu implementieren. In solchen Fällen kann WAI-ARIA ein wertvolles Werkzeug zur Verbesserung der Barrierefreiheit sein.

Aber verwenden Sie es dennoch nur, wenn es notwendig ist!

> [!NOTE]
> Versuchen Sie auch, Ihre Website mit einer Vielzahl von _echten_ Benutzern zu testen — nicht-behinderten Menschen, Menschen, die Screenreader verwenden, Menschen, die Tastaturnavigation verwenden, etc. Sie werden bessere Einblicke darüber haben, wie gut es funktioniert.

## Praktische WAI-ARIA Implementierungen

Im nächsten Abschnitt werden wir uns die vier Bereiche im Detail ansehen, zusammen mit praktischen Beispielen. Bevor Sie weitermachen, sollten Sie für einen Screenreader-Testaufbau sorgen, damit Sie einige der Beispiele testen können, während Sie fortfahren.

Siehe unseren Abschnitt über [Screenreader testen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#screen_readers) für weitere Informationen.

### Wegweiser/Landmarks

WAI-ARIA fügt dem Browser das [`role` Attribut](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) hinzu, das Ihnen erlaubt, Elementen auf Ihrer Seite dort, wo sie benötigt werden, zusätzlichen semantischen Wert zu verleihen. Der erste große Bereich, in dem dies nützlich ist, ist die Bereitstellung von Informationen für Screenreader, damit deren Benutzer gemeinsame Seitenelemente finden können. Schauen wir uns ein Beispiel an — unser [website-no-roles](https://github.com/mdn/learning-area/tree/main/accessibility/aria/website-no-roles) Beispiel ([Live-Demo anzeigen](https://mdn.github.io/learning-area/accessibility/aria/website-no-roles/)) hat die folgende Struktur:

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

- Auf dem `<header>`-Element — "Banner, 2 Elemente" (enthält eine Heading und die `<nav>`).
- Auf dem `<nav>`-Element — "Navigation, 2 Elemente" (enthält eine Liste und ein Formular).
- Auf dem `<main>`-Element — "Hauptinhalt, 2 Elemente" (enthält einen Artikel und eine Randnotiz).
- Auf dem `<aside>`-Element — "ergänzend, 2 Elemente" (enthält eine Heading und eine Liste).
- Auf der Sucheingabe des Formulars — "Suchanfrage, Einfügen am Anfang des Texts".
- Auf dem `<footer>`-Element — "Fußzeile, 1 Element".

Wenn Sie zum Landmarks-Menü von VoiceOver gehen (zugänglich mit VoiceOver-Taste + U und dann mit den Cursortasten zur Auswahl im Menü), sehen Sie, dass die meisten Elemente schön aufgelistet sind, sodass sie schnell zugänglich sind.

![VoiceOver-Menü auf dem Mac für schnelle Zugänglichkeit. Header der Wegweiser und Liste der Wegweiser inklusive Banner, Navigation, Hauptinhalt und ergänzend.](landmarks-list.png)

Wir könnten hier jedoch noch besser werden. Das Suchformular ist ein wirklich wichtiger Wegweiser, den die Menschen finden wollen, aber es ist nicht im Landmarks-Menü aufgelistet oder wird als markanter Wegweiser behandelt abgesehen davon, dass die tatsächliche Eingabe als Sucheingabe bezeichnet wird (`<input type="search">`).

Lassen Sie uns dies durch die Benutzung einiger ARIA-Funktionen verbessern. Zuerst fügen wir einige [`role`](/de/docs/Web/Accessibility/ARIA/Roles) Attribute zu unserer HTML-Struktur hinzu. Sie können versuchen, eine Kopie unserer Originaldateien (siehe [`index.html`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/website-no-roles/index.html) und [`style.css`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/website-no-roles/style.css)) zu erstellen oder zu unserem [website-aria-roles](https://github.com/mdn/learning-area/tree/main/accessibility/aria/website-aria-roles) Beispiel ([Live-Demo anzeigen](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)) zu navigieren, das diese Struktur hat:

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

Wir haben Ihnen in diesem Beispiel auch ein Bonusfeature mitgegeben — das {{htmlelement("input")}}-Element hat das Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) erhalten, das ihm ein beschreibendes Label verleiht, das von einem Screenreader vorgelesen wird, obwohl wir kein {{htmlelement("label")}}-Element hinzugefügt haben. In solchen Fällen ist dies sehr nützlich — ein solches Suchformular ist ein sehr häufiges, leicht erkennbares Merkmal, und das Hinzufügen eines visuellen Labels würde das Seitendesign verderben.

```html
<input
  type="search"
  name="q"
  placeholder="Search query"
  aria-label="Search through site content" />
```

Nun, wenn wir VoiceOver verwenden, um dieses Beispiel zu betrachten, erhalten wir einige Verbesserungen:

- Das Suchformular wird sowohl beim Durchsuchen der Seite als auch im Landmarks-Menü als separates Element ausgewiesen.
- Der im `aria-label` Attribut enthaltene Text wird vorgelesen, wenn das Formulareingabefeld hervorgehoben wird.

Darüber hinaus ist die Website eher für Benutzer älterer Browser wie IE8 zugänglich; es lohnt sich, ARIA-Rollen für diesen Zweck einzubeziehen. Und wenn Ihre Website aus irgendeinem Grund nur aus `<div>`s besteht, sollten Sie auf jeden Fall die ARIA-Rollen einschließen, um diese dringend benötigte Semantik bereitzustellen!

Die verbesserten Semantiken des Suchformulars haben gezeigt, was möglich ist, wenn ARIA über die in HTML verfügbaren Semantiken hinausgeht. Sie werden weiter unten viel mehr über diese Semantiken und die Leistungsfähigkeit von ARIA-Eigenschaften/-Attributen erfahren, insbesondere im Abschnitt [Barrierefreiheit von nicht-semantischen Steuerelementen](#barrierefreiheit_von_nicht-semantischen_steuerelementen). Lassen Sie uns jedoch vorerst sehen, wie ARIA bei dynamischen Inhaltsaktualisierungen helfen kann.

### Dynamische Inhaltsaktualisierungen

In den DOM geladene Inhalte können mit einem Screenreader leicht zugänglich gemacht werden, von Textinhalten bis hin zu alternativen Texten, die an Bilder angehängt sind. Traditionelle statische Websites mit hauptsächlich Textinhalten sind daher für Menschen mit Sehbehinderungen leicht zugänglich zu machen.

Das Problem ist, dass moderne Web-Apps oft nicht nur statischen Text enthalten — sie aktualisieren oft Teile der Seite, indem sie neue Inhalte vom Server abrufen und das DOM aktualisieren. Diese werden manchmal als **Live-Regionen** bezeichnet.

Schauen wir uns ein schnelles Beispiel an — siehe [`aria-no-live.html`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/aria-no-live.html) (siehe auch [Live-Demo anzeigen](https://mdn.github.io/learning-area/accessibility/aria/aria-no-live.html)). In diesem Beispiel haben wir ein einfaches Zitatfeld mit zufälligen Zitaten:

```html
<section>
  <h1>Random quote</h1>
  <blockquote>
    <p></p>
  </blockquote>
</section>
```

Unser JavaScript verwendet die [`fetch()`](/de/docs/Web/API/Window/fetch) API, um eine JSON-Datei abzurufen, die eine Reihe zufälliger Zitate und deren Autoren enthält. Sobald dies erledigt ist, starten wir eine [`setInterval()`](/de/docs/Web/API/setInterval) Schleife, die alle 10 Sekunden ein neues zufälliges Zitat in das Zitatfeld lädt:

```js
const intervalID = setInterval(showQuote, 10000);
```

Das funktioniert gut, ist aber nicht optimal für die Barrierefreiheit — die Inhaltsaktualisierung wird von Screenreadern nicht erkannt, sodass ihre Benutzer nicht wissen würden, was vor sich geht. Dies ist ein ziemlich triviales Beispiel, aber stellen Sie sich vor, dass Sie eine komplexe UI mit vielen ständig aktualisierenden Inhalten erstellen, wie ein Chatroom, eine Strategie-Spiele-UI oder eine ständig aktualisierende Warenkorbanzeige — es wäre unmöglich, die App effektiv zu nutzen, ohne eine Möglichkeit, den Benutzer auf die Aktualisierungen aufmerksam zu machen.

WAI-ARIA bietet glücklicherweise einen nützlichen Mechanismus, um diese Alarme zu geben — die [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live) Eigenschaft. Wenn Sie dies auf ein Element anwenden, liest der Screenreader den aktualisierten Inhalt vor. Wie dringend der Inhalt vorgelesen wird, hängt vom Attributwert ab:

- `off`
  - : Der Standardwert. Aktualisierungen sollten nicht angekündigt werden.
- `polite`
  - : Aktualisierungen sollten nur angekündigt werden, wenn der Benutzer untätig ist.
- `assertive`
  - : Aktualisierungen sollten dem Benutzer so schnell wie möglich angekündigt werden.

Wir möchten, dass Sie eine Kopie von [`aria-no-live.html`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/aria-no-live.html) und [`quotes.json`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/quotes.json) erstellen und Ihr `<section>` öffnendes Tag wie folgt aktualisieren:

```html
<section aria-live="assertive">…</section>
```

Dies veranlasst einen Screenreader, den Inhalt vorzulesen, sobald er aktualisiert wird.

> [!NOTE]
> Die meisten Browser werfen eine Sicherheitsausnahme, wenn Sie versuchen, eine HTTP-Anfrage von einer `file://` URL zu machen, z.B. wenn Sie die Datei laden, indem Sie sie direkt in den Browser laden (durch Doppelklick, etc.). Siehe [wie ein lokaler Testserver eingerichtet wird](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server).

Es gibt eine zusätzliche Überlegung hier — nur der aktualisierte Text wird vorgelesen. Es könnte schön sein, wenn wir immer auch die Überschrift vorlesen, damit der Benutzer sich erinnern kann, was vorgelesen wird. Dazu können wir die [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic) Eigenschaft zu dem Abschnitt hinzufügen. Aktualisieren Sie Ihr `<section>` öffnende Tag erneut wie folgt:

```html
<section aria-live="assertive" aria-atomic="true">…</section>
```

Das `aria-atomic="true"` Attribut sagt Screenreadern, dass der gesamte Elementinhalt als einheitliche Einheit vorgelesen werden soll, nicht nur die aktualisierten Teile.

> [!NOTE]
> Sie können das fertige Beispiel unter [`aria-live.html`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/aria-live.html) ([Live-Demo anzeigen](https://mdn.github.io/learning-area/accessibility/aria/aria-live.html)) sehen.

> [!NOTE]
> Die [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant) Eigenschaft ist auch ganz nützlich, um zu steuern, was vorgelesen wird, wenn eine Live-Region aktualisiert wird. Sie können zum Beispiel nur Ergänzungen oder Entfernungen des Inhalts vorlesen lassen.

### Verbesserung der Tastaturzugänglichkeit

Wie schon an einigen anderen Stellen in diesem Modul besprochen, zählt die eingebaute Tastaturzugänglichkeit von Funktionen wie Schaltflächen, Formularelementen und Links zu den wichtigsten Stärken von HTML in Bezug auf die Zugänglichkeit. Generell können Sie die Tabulatortaste verwenden, um zwischen Steuerelementen zu wechseln, die Eingabetaste/Return-Taste, um Steuerelemente auszuwählen oder zu aktivieren, und gelegentlich andere Steuerelemente nach Bedarf (zum Beispiel die Aufwärts- und Abwärtspfeile, um zwischen Optionen in einem `<select>` Feld zu wechseln).

Manchmal müssen Sie jedoch Code schreiben, der entweder nicht-semantische Elemente als Schaltflächen (oder andere Arten von Steuerelementen) verwendet oder Fokussteuerungen für nicht ganz den richtigen Zweck nutzt. Sie könnten versuchen, schlechten Code zu reparieren, den Sie geerbt haben, oder eine Art komplexes Widget bauen, das dies erfordert.

In Bezug auf die Fokussierung von nicht fokussierbarem Code, erweitert WAI-ARIA das `tabindex` Attribut mit einigen neuen Werten:

- `tabindex="0"` — wie oben angegeben, ermöglicht dieser Wert, dass Elemente, die normalerweise nicht fokussierbar sind, fokussierbar werden. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — ermöglicht es, dass normalerweise nicht fokussierbare Elemente programmgesteuert den Fokus erhalten können, z.B. per JavaScript oder als Ziel von Links.

Wir haben dies in unserem HTML-Zugänglichkeitsartikel detaillierter besprochen und eine typische Implementierung gezeigt — siehe [Building keyboard accessibility back in](/de/docs/Learn/Accessibility/HTML#building_keyboard_accessibility_back_in).

### Barrierefreiheit von nicht-semantischen Steuerelementen

Dies folgt auf den vorherigen Abschnitt — wenn eine Serie verschachtelter `<div>`s zusammen mit CSS/JavaScript zur Erstellung einer komplexen UI-Funktion verwendet wird, oder ein natives Steuerelement durch JavaScript stark verbessert/verändert wird, kann nicht nur die Tastaturzugänglichkeit leiden, sondern Screenreader-Nutzer werden es schwer haben, herauszufinden, was das Feature tut, wenn keine Semantik oder andere Hinweise vorhanden sind. In solchen Situationen kann ARIA helfen, diese fehlende Semantik bereitzustellen.

#### Formularvalidierung und Fehlerbenachrichtigungen

Zuerst sollten wir uns das Formularbeispiel erneut ansehen, das wir in unserem CSS- und JavaScript-Zugänglichkeitsartikel behandelt haben (lesen Sie [Keeping it unobtrusive](/de/docs/Learn/Accessibility/CSS_and_JavaScript#keeping_it_unobtrusive) für eine vollständige Zusammenfassung). Am Ende dieses Abschnitts zeigten wir, dass wir einige ARIA-Attribute auf dem Fehlermeldungsfeld eingefügt haben, das etwaige Validierungsfehler anzeigt, wenn Sie versuchen, das Formular abzusenden:

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

- [`role="alert"`](/de/docs/Web/Accessibility/ARIA/Roles/alert_role) verwandelt das Element, auf das es angewendet wird, automatisch in eine Live-Region, damit Änderungen daran vorgelesen werden; es identifiziert es auch semantisch als Warnmeldung (wichtige zeit-/kontextbezogene Informationen) und stellt eine bessere, zugänglichere Art der Alarmierung eines Benutzers dar (Modal-Dialoge wie [`alert()`](/de/docs/Web/API/Window/alert)-Aufrufe haben eine Reihe von Barrierefreiheitsproblemen; siehe [Popup Windows](https://webaim.org/techniques/javascript/other#popups) von WebAIM).
- Ein [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant) Wert von `all` weist den Screenreader an, den Inhalt der Fehlerliste vorzulesen, wenn Änderungen daran vorgenommen werden — d.h. wenn Fehler hinzugefügt oder entfernt werden. Dies ist nützlich, weil der Benutzer wissen möchte, welche Fehler noch vorhanden sind, nicht nur, was der Liste hinzugefügt oder daraus entfernt wurde.

Wir könnten unsere ARIA-Nutzung weiter ausbauen und noch mehr Validierungshilfe bereitstellen. Wie wäre es, wenn wir angeben, ob Felder überhaupt erforderlich sind und welchen Bereich das Alter haben sollte?

1. Nehmen Sie nun eine Kopie unserer [`form-validation.html`](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html) und [`validation.js`](https://github.com/mdn/learning-area/blob/main/accessibility/css/validation.js) Dateien und speichern Sie sie in einem lokalen Verzeichnis.
2. Öffnen Sie sie beide in einem Texteditor und sehen Sie sich an, wie der Code funktioniert.
3. Fügen Sie zunächst einen Absatz direkt über dem öffnenden `<form>` Tag hinzu, wie im folgenden Beispiel, und markieren Sie die beiden Formular-`<label>`s mit einem Sternchen. Dies ist normalerweise, wie wir Pflichtfelder für sehende Benutzer kennzeichnen.

   ```html
   <p>Fields marked with an asterisk (*) are required.</p>
   ```

4. Dies macht visuellen Sinn, ist aber für Screenreader-Benutzer nicht so einfach zu verstehen. Glücklicherweise bietet WAI-ARIA das [`aria-required`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required) Attribut, um Screenreadern Hinweise zu geben, dass sie den Nutzern mitteilen sollten, dass Formulareingaben ausgefüllt werden müssen. Aktualisieren Sie die `<input>` Elemente wie folgt:

   ```html
   <input type="text" name="name" id="name" aria-required="true" />

   <input type="number" name="age" id="age" aria-required="true" />
   ```

5. Wenn Sie das Beispiel jetzt speichern und mit einem Screenreader testen, sollten Sie etwas hören wie "Geben Sie Ihren Namen ein Sternchen, erforderlich, Texteingabe".
6. Es könnte auch nützlich sein, wenn wir Screenreader-Nutzern und sehenden Benutzern eine Vorstellung davon geben, welchen Wert das Alter haben sollte. Dies wird oft als Tooltip oder Platzhalter innerhalb des Formularfelds präsentiert. WAI-ARIA enthält `aria-valuemin` und `aria-valuemax` Eigenschaften, um Min- und Max-Werte anzugeben, und Screenreader unterstützen die nativen `min` und `max` Attribute. Ein weiteres gut unterstütztes Feature ist das HTML-`placeholder` Attribut, das eine Nachricht enthält, die im Eingabefeld angezeigt wird, wenn kein Wert eingegeben wurde und von einigen Screenreadern vorgelesen wird. Update your number input like this:

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

Schließen Sie immer ein {{HTMLelement('label')}} für jede Eingabe ein. Während einige Screenreader den Platzhaltertext ankündigen, tun dies die meisten nicht. Akzeptable Ersatzlösungen, um Formularelementen einen zugänglichen Namen zu geben, umfassen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) und [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby). Aber das `<label>` Element mit einem `for` Attribut ist die bevorzugte Methode, da es die Benutzererfahrung für alle Nutzer erhöht, einschließlich Mausbenutzern.

> [!NOTE]
> Sie können das fertige Beispiel live unter [`form-validation-updated.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-updated.html) ansehen.

WAI-ARIA ermöglicht auch fortgeschrittene Formularelementbezeichnungs-Techniken, jenseits des klassischen {{htmlelement("label")}} Elements. Wir haben bereits darüber gesprochen, die [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) Eigenschaft zu verwenden, um eine Bezeichnung bereitzustellen, wo wir das Label nicht für sehende Benutzer sichtbar haben wollen (siehe den Abschnitt [Wegweiser/Landmarks](#wegweiserlandmarks) oben). Einige andere Bezeichnungstechniken verwenden andere Eigenschaften wie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), wenn Sie ein nicht-`<label>` Element als Label verwenden möchten oder mehrere Formulareingaben mit demselben Label benennen möchten, und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby), wenn Sie andere Informationen mit einer Formulareingabe verbinden und diese auch vorlesen lassen möchten. Siehe [WebAIM's Advanced Form Labeling article](https://webaim.org/techniques/forms/advanced) für mehr Details.

Es gibt auch viele andere nützliche Eigenschaften und Zustände, die den Status von Formularelementen angeben. Zum Beispiel kann `aria-disabled="true"` verwendet werden, um anzugeben, dass ein Formularfeld deaktiviert ist. Viele Browser werden deaktivierte Formularfelder überspringen, was dazu führt, dass sie nicht von Screenreadern vorgelesen werden. In einigen Fällen wird ein deaktiviertes Element wahrgenommen, daher ist es eine gute Idee, dieses Attribut einzuschließen, um dem Screenreader mitzuteilen, dass ein deaktiviertes Kontrollkästenelement tatsächlich deaktiviert ist.

Wenn der deaktivierte Zustand einer Eingabe wahrscheinlich geändert wird, ist es auch eine gute Idee, anzugeben, wenn dies geschieht, und was das Ergebnis ist. Zum Beispiel akt ein Kontrollkästchen in der Demo [`form-validation-checkbox-disabled.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-checkbox-disabled.html), das beim Aktivieren ein weiteres Formularelement aktiviert, um weitere Informationen eingeben zu können. Wir haben eine verborgene Live-Region eingerichtet:

```html
<p class="hidden-alert" aria-live="assertive"></p>
```

welche per absoluter Positionierung aus der Ansicht verborgen wurde. Wenn dieses Kontrollkästchen aktiviert/deaktiviert wird, aktualisieren wir den Text innerhalb der verborgenen Live-Region, um Screenreader-Nutzer darüber zu informieren, was das Ergebnis dieser Checkbox ist, sowie die `aria-disabled`-Eigenschaft und einige visuelle Indikatoren:

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

#### Beschreiben von nicht-semantischen Schaltflächen als Schaltflächen

Ein paar Mal in diesem Kurs haben wir bereits die native Zugänglichkeit von (und die Zugänglichkeitsprobleme beim Verwenden anderer Elemente, um) Schaltflächen, Links oder Formularelemente zu simulieren, erwähnt ([UI controls](/de/docs/Learn/Accessibility/HTML#ui_controls) im HTML Accessibility-Artikel und [Enhancing keyboard accessibility](#verbesserung_der_tastaturzugänglichkeit) weiter oben). Grundsätzlich können Sie die Tastaturzugänglichkeit in vielen Fällen recht einfach mit `tabindex` und etwas JavaScript wiederherstellen.

Aber was ist mit Screenreadern? Sie werden die Elemente weiterhin nicht als Schaltflächen erkennen. Wenn wir unser Beispiel [`fake-div-buttons.html`](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) in einem Screenreader testen, werden unsere gefälschten Schaltflächen mit verwirrenden Phrasen wie "Click me!, group" gemeldet.

Wir können dies mit einer WAI-ARIA-Rolle beheben. Erstellen Sie eine lokale Kopie von [`fake-div-buttons.html`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) und fügen Sie [`role="button"`](/de/docs/Web/Accessibility/ARIA/Roles/button_role) zu jedem Schaltflächen `<div>` hinzu, zum Beispiel:

```html
<div data-message="This is from the first button" tabindex="0" role="button">
  Click me!
</div>
```

Nun, wenn Sie dies mit einem Screenreader testen, werden Ihnen Schaltflächen mit Phrasen wie "Click me!, button" gemeldet. Auch wenn dies viel besser ist, müssen Sie dennoch alle native Funktionen hinzufügen, die Benutzer von Schaltflächen erwarten, wie das Handling von <kbd>enter</kbd> und Klick-Ereignissen, wie in der Dokumentation zur [`button` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/button_role) erklärt.

> [!NOTE]
> Vergessen Sie jedoch nicht, dass die Verwendung des richtigen semantischen Elements immer besser ist, wenn möglich. Wenn Sie eine Schaltfläche erstellen möchten und ein {{htmlelement("button")}}-Element verwenden können, sollten Sie auch ein {{htmlelement("button")}}-Element verwenden!

#### Benutzerführung durch komplexe Widgets

Es gibt eine ganze Reihe weiterer [Rollen](/de/docs/Web/Accessibility/ARIA/Roles), die nicht-semantische Elementstrukturen als gebräuchliche UI-Features identifizieren können, die über das hinausgehen, was in HTML verfügbar ist, zum Beispiel [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Roles/slider_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role), [`tree`](/de/docs/Web/Accessibility/ARIA/Roles/tree_role). Sie können sich einige nützliche Beispiele in der [Deque university code library](https://dequeuniversity.com/library/) ansehen, um eine Vorstellung davon zu bekommen, wie solche Steuerelemente zugänglich gemacht werden können.

Lassen Sie uns ein eigenes Beispiel durchgehen. Wir kehren zu unserer einfach absolut positionierten Registerkarten-Schnittstelle zurück (siehe [Hiding things](/de/docs/Learn/Accessibility/CSS_and_JavaScript#hiding_things) in unserem CSS- und JavaScript-Zugänglichkeitsartikel), die Sie im [Tabbed info box example](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/tabbed-info-box.html) finden können (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html)).

Dieses Beispiel funktioniert, wie es ist, gut in Bezug auf die Tastaturzugänglichkeit — Sie können problemlos zwischen den verschiedenen Registerkarten wechseln und sie auswählen, um den Inhalt der Registerkarte anzuzeigen. Es ist auch relativ zugänglich — Sie können durch den Inhalt scrollen und die Überschriften zur Navigation verwenden, auch wenn Sie nicht sehen können, was auf dem Bildschirm passiert. Es ist jedoch nicht sofort ersichtlich, was der Inhalt ist — ein Screenreader meldet den Inhalt derzeit als eine Liste von Links und einige Inhalte mit drei Überschriften. Es gibt Ihnen keinen Hinweis darauf, was die Beziehung zwischen den Inhalten ist. Benutzern mehr Hinweise auf die Struktur der Inhalte zu geben, ist immer gut.

Um die Dinge zu verbessern, haben wir eine neue Version des Beispiels mit dem Namen [`aria-tabbed-info-box.html`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/aria-tabbed-info-box.html) erstellt ([Live-Demo anzeigen](https://mdn.github.io/learning-area/accessibility/aria/aria-tabbed-info-box.html)). Wir haben die Struktur der Registerkarten-Schnittstelle wie folgt aktualisiert:

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
> Die auffälligste Änderung besteht darin, dass wir die Links, die ursprünglich im Beispiel vorhanden waren, entfernt und nur die Listenelemente als die Registerkarten verwendet haben — dies wurde getan, weil es die Dinge für Screenreader-Benutzer weniger verwirrend macht (die Links bringen einen nicht wirklich irgendwo hin; sie ändern nur die Ansicht) und es ermöglicht den Setgröße/Position in Set-Funktionen, besser zu funktionieren — als diese auf die Links gesetzt wurden, meldete der Browser immer "1 von 1" und nicht "1 von 3", "2 von 3" etc.

Verwendete ARIA-Funktionen umfassen:

- Neue Rollen — [`tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role), [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role)
  - : Diese identifizieren die wichtigen Bereiche der Registerkarten-Schnittstelle — den Container für die Registerkarten, die Registerkarten selbst und die entsprechenden Registerkartenbereiche.
- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)
  - : Definiert, welche Registerkarte derzeit ausgewählt ist. Wenn der Benutzer verschiedene Registerkarten auswählt, wird der Wert dieses Attributs bei den verschiedenen Registerkarten per JavaScript aktualisiert.
- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)
  - : Verbirgt ein Element davor, von einem Screenreader vorgelesen zu werden. Wenn der Benutzer verschiedene Registerkarten auswählt, wird der Wert dieses Attributs bei den verschiedenen Registerkarten per JavaScript aktualisiert.
- `tabindex="0"`
  - : Da wir die Links entfernt haben, müssen wir den Listenelementen dieses Attribut geben, damit sie den Tastaturfokus erhalten können.
- [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize)
  - : Dieses Attribut ermöglicht es Ihnen, Screenreader wissen zu lassen, dass ein Element Teil einer Reihe ist und wie viele Elemente die Reihe hat.
- [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset)
  - : Dieses Attribut ermöglicht es Ihnen anzugeben, welchen Platz in einer Reihe ein Element einnimmt. Zusammen mit `aria-setsize` bietet es einem Screenreader genügend Informationen, um Ihnen zu sagen, dass Sie sich derzeit auf Element "1 von 3" befinden, etc. In vielen Fällen sollten Browser in der Lage sein, diese Informationen aus der Elementhierarchie zu beziehen, aber es hilft sicherlich, mehr Hinweise zu geben.

In unseren Tests verbesserte diese neue Struktur die Dinge insgesamt. Die Registerkarten werden jetzt als Registerkarten erkannt (z.B. wird "Tab" vom Screenreader vorgelesen), die ausgewählte Registerkarte wird als "ausgewählt" zusammen mit dem Registerkartennamen angesagt, und der Screenreader teilt Ihnen auch mit, auf welcher Registerkartennummer Sie sich gerade befinden. Darüber hinaus, aufgrund der `aria-hidden` Einstellungen (nur der nicht verborgene Tab hat jemals `aria-hidden="false"` gesetzt), ist der nicht verborgene Inhalt der einzige, zu dem Sie herunter navigieren können, so dass der ausgewählte Inhalt leichter zu finden ist.

> [!NOTE]
> Wenn es etwas gibt, was Sie explizit nicht von Screenreadern vorlesen lassen wollen, können Sie diesen das `aria-hidden="true"`-Attribut geben.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, dass Sie diese Informationen behalten haben, bevor Sie weitergehen — siehe [Test your skills: WAI-ARIA](/de/docs/Learn/Accessibility/WAI-ARIA_basics/Test_your_skills:_WAI-ARIA).

## Zusammenfassung

Dieser Artikel hat bei weitem nicht alles abgedeckt, was in WAI-ARIA verfügbar ist, sollte Ihnen jedoch genug Informationen gegeben haben, um zu verstehen, wie man es verwendet, und einige der häufigsten Muster zu kennen, die es erfordert.

## Siehe auch

- [Aria states and properties](/de/docs/Web/Accessibility/ARIA/Attributes): Alle `aria-*` Attribute
- [WAI-ARIA roles](/de/docs/Web/Accessibility/ARIA/Roles): Kategorien von ARIA-Rollen und die auf MDN behandelten Rollen
- [ARIA in HTML](https://www.w3.org/TR/html-aria/) auf W3C: Eine Spezifikation, die definiert, welche Zugänglichkeitssemantik (ARIA) auf jedes HTML-Feature implizit angewendet werden, und die WAI-ARIA-Funktionen, die Sie bei Bedarf darauf anpassen können, um zusätzliche Semantik bereitzustellen
- [Deque university code library](https://dequeuniversity.com/library/): Eine Bibliothek mit wirklich nützlichen und praxisnahen Beispielen zum Nachweis, wie komplexe UI-Steuerelemente unter Verwendung von WAI-ARIA-Funktionen zugänglich gemacht werden können
- [WAI-ARIA authoring practices](https://www.w3.org/WAI/ARIA/apg/) auf W3C: Ein sehr detailliertes Designmuster des W3C, das erklärt, wie verschiedene Arten von komplexen UI-Steuerelementen implementiert werden können, während sie unter Verwendung von WAI-ARIA-Funktionen zugänglich gemacht werden

{{PreviousMenuNext("Learn/Accessibility/CSS_and_JavaScript","Learn/Accessibility/Multimedia", "Learn/Accessibility")}}
