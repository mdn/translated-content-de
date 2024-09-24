---
title: WAI-ARIA-Grundlagen
slug: Learn/Accessibility/WAI-ARIA_basics
l10n:
  sourceCommit: 7ab2f95b22919d8b897754e8a66981d0b9a4e2c4
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Accessibility/CSS_and_JavaScript","Learn/Accessibility/Multimedia", "Learn/Accessibility")}}

Anknüpfend an den vorherigen Artikel kann es manchmal schwierig sein, komplexe UI-Steuerelemente zu erstellen, die unsemantisches HTML und dynamisch mit JavaScript aktualisierte Inhalte beinhalten. WAI-ARIA ist eine Technologie, die bei solchen Problemen helfen kann, indem sie zusätzliche Semantik hinzufügt, die von Browsern und unterstützenden Technologien erkannt und verwendet werden kann, um Nutzern mitzuteilen, was vor sich geht. Hier zeigen wir, wie man es auf einer grundlegenden Ebene verwendet, um die Zugänglichkeit zu verbessern.

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
        Vertrautheit mit WAI-ARIA zu erlangen und zu verstehen, wie es verwendet werden kann, um nützliche zusätzliche Semantik bereitzustellen und die Zugänglichkeit dort zu verbessern, wo es erforderlich ist.
      </td>
    </tr>
  </tbody>
</table>

## Was ist WAI-ARIA?

Beginnen wir mit der Betrachtung, was WAI-ARIA ist und was es für uns tun kann.

### Ein ganz neues Set von Problemen

Als Web-Apps immer komplexer und dynamischer wurden, tauchten eine neue Reihe von Barrierefreiheitsfunktionen und -problemen auf.

Zum Beispiel führte HTML eine Reihe von semantischen Elementen ein, um häufige Seitenfunktionen zu definieren ({{htmlelement("nav")}}, {{htmlelement("footer")}}, etc.). Bevor diese verfügbar waren, verwendeten Entwickler {{htmlelement("div")}}s mit IDs oder Klassen, z.B. `<div class="nav">`, aber diese waren problematisch, da es keine einfache Möglichkeit gab, ein bestimmtes Seitenmerkmal wie die Hauptnavigation programmatisch leicht zu finden.

Die anfängliche Lösung bestand darin, einen oder mehrere versteckte Links am Seitenanfang hinzuzufügen, um zur Navigation (oder was auch immer) zu verlinken, zum Beispiel:

```html
<a href="#hidden" class="hidden">Zum Navigationsbereich springen</a>
```

Aber das ist immer noch nicht sehr präzise und kann nur verwendet werden, wenn der Bildschirmleser von oben nach unten liest.

Ein weiteres Beispiel sind Apps, die anfingen, komplexe Steuerelemente wie Datumsauswähler für die Datumauswahl, Schieberegler für die Wertauswahl usw. zu verwenden. HTML stellt spezielle Eingabetypen bereit, um solche Steuerelemente darzustellen:

```html
<input type="date" /> <input type="range" />
```

Diese wurden ursprünglich nicht gut unterstützt, und es war, und ist immer noch, schwierig, sie zu stylen, was Designer und Entwickler dazu veranlasste, sich für benutzerdefinierte Lösungen zu entscheiden. Anstatt diese nativen Funktionen zu verwenden, verlassen sich einige Entwickler auf JavaScript-Bibliotheken, die solche Steuerelemente als eine Reihe von verschachtelten {{htmlelement("div")}}s generieren, die dann mit CSS gestylt und mit JavaScript kontrolliert werden.

Das Problem hierbei ist, dass sie visuell funktionieren, aber Bildschirmleser nicht verstehen können, was sie überhaupt sind, und deren Benutzer nur mitgeteilt bekommen, dass sie eine Ansammlung von Elementen ohne Semantik sehen können, die erklärt, was sie bedeuten.

### WAI-ARIA kommt ins Spiel

[WAI-ARIA](https://www.w3.org/TR/wai-aria/) (Web Accessibility Initiative - Accessible Rich Internet Applications) ist eine von der W3C verfasste Spezifikation, die einen Satz zusätzlicher HTML-Attribute definiert, die auf Elemente angewendet werden können, um zusätzliche Semantik bereitzustellen und die Barrierefreiheit dort zu verbessern, wo sie fehlt. Es gibt drei Hauptmerkmale, die in der Spezifikation definiert sind:

- [Rollen](/de/docs/Web/Accessibility/ARIA/Roles)
  - : Diese definieren, was ein Element ist oder tut. Viele davon sind sogenannte Landmarkenrollen, die weitgehend den semantischen Wert von Strukturelementen wie `role="navigation"` ({{htmlelement("nav")}}) oder `role="complementary"` ({{htmlelement("aside")}}) duplizieren. Einige andere Rollen beschreiben unterschiedliche Seitenstrukturen, wie `role="banner"`, `role="search"`, `role="tablist"` und `role="tabpanel"`, die häufig in Benutzeroberflächen vorkommen.
- Eigenschaften
  - : Diese definieren Eigenschaften von Elementen, die verwendet werden können, um ihnen zusätzliche Bedeutung oder Semantik zu geben. Zum Beispiel spezifiziert `aria-required="true"`, dass ein Formulareingabefeld ausgefüllt werden muss, um gültig zu sein, während `aria-labelledby="label"` es Ihnen ermöglicht, eine ID auf ein Element zu setzen und dann als Beschriftung für etwas anderes auf der Seite zu verweisen, einschließlich mehrerer Elemente, was mit `<label for="input">` nicht möglich ist. Sie könnten `aria-labelledby` verwenden, um anzugeben, dass eine Schlüsselerklärung in einem {{htmlelement("div")}} die Beschriftung für mehrere Tabellenspalten ist, oder es als Alternative zu Bild-Alt-Text verwenden — bestehende Informationen auf der Seite als Alt-Text des Bildes angeben, anstatt sie im `alt`-Attribut zu wiederholen. Ein Beispiel dafür finden Sie bei [Textalternativen](/de/docs/Learn/Accessibility/HTML#text_alternatives).
- Zustände
  - : Besondere Eigenschaften, die die aktuellen Bedingungen von Elementen definieren, wie `aria-disabled="true"`, das einem Bildschirmleser mitteilt, dass ein Formulareingabefeld derzeit deaktiviert ist. Zustände unterscheiden sich von Eigenschaften dahingehend, dass Eigenschaften während der Laufzeit einer App unverändert bleiben, während sich Zustände ändern können, in der Regel programmatisch über JavaScript.

Ein wichtiger Punkt bei WAI-ARIA-Attributen ist, dass sie nichts an der Webseite ändern, außer den Informationen, die von den Zugänglichkeits-APIs des Browsers bereitgestellt werden (wo Bildschirmleser ihre Informationen beziehen). WAI-ARIA beeinflusst weder die Struktur der Webseite noch das DOM, obwohl die Attribute nützlich sein können, um Elemente mittels CSS auszuwählen.

> [!NOTE]
> Sie finden eine nützliche Liste aller ARIA-Rollen und ihrer Verwendungszwecke mit Links zu weiteren Informationen in der WAI-ARIA-Spezifikation — siehe [Definition of Roles](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) — und auf dieser Seite — siehe [ARIA roles](/de/docs/Web/Accessibility/ARIA/Roles).
>
> Die Spezifikation enthält auch eine Liste aller Eigenschaften und Zustände mit Links zu weiteren Informationen — siehe [Definitions of States and Properties (all `aria-*` attributes)](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def).

### Wo wird WAI-ARIA unterstützt?

Das ist keine einfache Frage zu beantworten. Es ist schwierig, eine schlüssige Ressource zu finden, die angibt, welche Funktionen von WAI-ARIA unterstützt werden und wo, weil:

1. Es gibt viele Funktionen in der WAI-ARIA-Spezifikation.
2. Es gibt viele Kombinationen von Betriebssystemen, Browsern und Bildschirmlesern, die berücksichtigt werden müssen.

Dieser letzte Punkt ist entscheidend — Um überhaupt einen Bildschirmleser zu verwenden, muss Ihr Betriebssystem Browser ausführen, die die notwendigen Zugänglichkeits-APIs haben, um die Informationen bereitzustellen, die Bildschirmleser benötigen, um ihre Arbeit zu verrichten. Die meisten beliebten Betriebssysteme haben einen oder zwei Browser, mit denen Bildschirmleser arbeiten können. Die Paciello Group hat einen relativ aktuellen Beitrag, der dafür Daten bereitstellt — siehe [Rough Guide: browsers, operating systems and screen reader support updated](https://www.tpgi.com/rough-guide-browsers-operating-systems-and-screen-reader-support-updated/).

Als nächstes müssen Sie sich darum kümmern, ob die betreffenden Browser ARIA-Funktionen unterstützen und sie über ihre APIs bereitstellen, aber auch, ob Bildschirmleser diese Informationen erkennen und ihren Benutzern auf eine nützliche Weise präsentieren.

1. Die Unterstützung durch Browser ist fast universell.
2. Die Unterstützung von ARIA-Funktionen durch Bildschirmleser ist noch nicht ganz auf diesem Niveau, aber die beliebtesten Bildschirmleser nähern sich dem. Sie können sich ein Bild von den Unterstützungsstufen machen, indem Sie sich den Artikel von Powermapper über [WAI-ARIA Screen reader compatibility](https://www.powermapper.com/tests/screen-readers/aria/) ansehen.

In diesem Artikel werden wir nicht den Versuch unternehmen, jede WAI-ARIA-Funktion und ihre genauen Unterstützungsdetails abzudecken. Stattdessen werden wir die kritischen WAI-ARIA-Funktionen behandeln, die Sie kennen sollten; wenn wir keine Unterstützungsdetails erwähnen, können Sie davon ausgehen, dass die Funktion gut unterstützt wird. Ausnahmen werden wir deutlich anmerken.

> [!NOTE]
> Einige JavaScript-Bibliotheken unterstützen WAI-ARIA, d.h. wenn sie UI-Funktionen wie komplexe Formularsteuerelemente generieren, fügen sie ARIA-Attribute hinzu, um die Zugänglichkeit dieser Funktionen zu verbessern. Wenn Sie nach einer Drittanbieter-JavaScript-Lösung für eine schnelle UI-Entwicklung suchen, sollten Sie die Zugänglichkeit ihrer UI-Widgets bei Ihrer Auswahl als wichtigen Faktor berücksichtigen. Gute Beispiele sind jQuery UI (siehe [About jQuery UI: Deep accessibility support](https://jqueryui.com/about/#deep-accessibility-support)), [ExtJS](https://www.sencha.com/products/extjs/) und [Dojo/Dijit](https://dojotoolkit.org/reference-guide/1.10/dijit/a11y/statement.html).

### Wann sollten Sie WAI-ARIA verwenden?

Wir haben einige der Probleme besprochen, die zur Entstehung von WAI-ARIA geführt haben, aber im Wesentlichen gibt es vier Hauptbereiche, in denen WAI-ARIA nützlich ist:

- Wegweiser/Landmarken
  - : ARIAs [`role`](/de/docs/Web/Accessibility/ARIA/Roles)-Attributwerte können als Landmarken fungieren, die entweder die Semantik von HTML-Elementen replizieren (z.B. {{htmlelement("nav")}}) oder über die HTML-Semantik hinausgehen, um Wegweiser zu verschiedenen funktionalen Bereichen bereitzustellen, z.B. `search`, `tablist`, `tab`, `listbox` etc.
- Dynamische Inhaltsaktualisierungen
  - : Bildschirmleser haben Schwierigkeiten, ständig wechselnde Inhalte zu melden; mit ARIA können wir `aria-live` verwenden, um Bildschirmleserendnutzern mitzuteilen, wenn ein Inhaltsbereich dynamisch aktualisiert wird: zum Beispiel durch JavaScript, das auf der Seite neue Inhalte vom Server abruft und das DOM aktualisiert.
- Verbesserung der Tastaturzugänglichkeit
  - : Es gibt eingebaute HTML-Elemente, die über native Tastaturzugänglichkeit verfügen; wenn andere Elemente zusammen mit JavaScript verwendet werden, um ähnliche Interaktionen zu simulieren, leidet die Tastaturzugänglichkeit und die Bildschirmleser-Meldung darunter. Wo dies unvermeidlich ist, bietet WAI-ARIA eine Möglichkeit, anderen Elementen den Fokus zu ermöglichen (mit `tabindex`).
- Zugänglichkeit nicht-semantischer Steuerelemente
  - : Wenn eine Reihe von verschachtelten `<div>`s zusammen mit CSS/JavaScript verwendet wird, um eine komplexe UI-Funktion zu erstellen, oder ein nativer Steuereinschalter durch JavaScript stark verbessert oder geändert wird, kann die Zugänglichkeit leiden — Benutzer von Bildschirmlesern werden es schwierig finden herauszufinden, was die Funktion tut, wenn es keine Semantik oder andere Hinweise gibt. In diesen Situationen kann ARIA helfen, das Fehlende mit einer Kombination aus Rollen wie `button`, `listbox` oder `tablist` und Eigenschaften wie `aria-required` oder `aria-posinset` bereitzustellen, um weitere Hinweise zur Funktionalität zu geben.

Ein Punkt zum Merken jedoch — **Sie sollten WAI-ARIA nur verwenden, wenn Sie es brauchen!** Idealerweise sollten Sie _immer_ [nativen HTML-Funktionen](/de/docs/Learn/Accessibility/HTML) verwenden, um die Semantik bereitzustellen, die Bildschirmleser benötigen, um ihren Benutzern zu sagen, was vor sich geht. Manchmal ist das nicht möglich, entweder weil Sie begrenzte Kontrolle über den Code haben oder weil Sie etwas Komplexes erstellen, das kein einfaches HTML-Element hat, das es implementiert. In solchen Fällen kann WAI-ARIA ein wertvolles Werkzeug zur Verbesserung der Zugänglichkeit sein.

Aber nochmal, verwenden Sie es nur, wenn es notwendig ist!

> [!NOTE]
> Versuchen Sie auch sicherzustellen, dass Sie Ihre Seite mit einer Vielzahl von _echten_ Nutzern testen — Menschen ohne Behinderung, Menschen mit Bildschirmlesern, Menschen, die Tastaturnavigation verwenden, etc. Sie werden bessere Einblicke haben als Sie, ob es gut funktioniert.

## Praktische WAI-ARIA-Implementierungen

Im folgenden Abschnitt werden wir die vier Bereiche detaillierter betrachten, zusammen mit praktischen Beispielen. Bevor Sie fortfahren, sollten Sie eine Bildschirmleser-Testeinrichtung erstellen, damit Sie einige der Beispiele testen können, während Sie sie durchgehen.

Siehe unseren Abschnitt über [Testen von Bildschirmlesern](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#screen_readers) für weitere Informationen.

### Wegweiser/Landmarken

WAI-ARIA fügt den Browsern das [`role`-Attribut](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) hinzu, das Ihnen erlaubt, Ihren Seitelementen überall, wo sie benötigt werden, zusätzlichen semantischen Wert hinzuzufügen. Der erste große Bereich, in dem dies nützlich ist, besteht darin, Informationen für Bildschirmleser bereitzustellen, sodass ihre Benutzer gemeinsame Seitenelemente finden können. Schauen wir uns ein Beispiel an — unser [website-no-roles](https://github.com/mdn/learning-area/tree/main/accessibility/aria/website-no-roles) Beispiel ([Live-Demo ansehen](https://mdn.github.io/learning-area/accessibility/aria/website-no-roles/)) hat die folgende Struktur:

```html
<header>
  <h1>…</h1>
  <nav>
    <ul>
      …
    </ul>
    <form>
      <!-- Suchformular -->
    </form>
  </nav>
</header>

<main>
  <article>…</article>
  <aside>…</aside>
</main>

<footer>…</footer>
```

Wenn Sie das Beispiel in einem modernen Browser mit einem Bildschirmleser testen, erhalten Sie bereits einige nützliche Informationen. Zum Beispiel meldet VoiceOver Ihnen Folgendes:

- Auf dem `<header>`-Element — "banner, 2 items" (es enthält eine Überschrift und das `<nav>`).
- Auf dem `<nav>`-Element — "navigation 2 items" (es enthält eine Liste und ein Formular).
- Auf dem `<main>`-Element — "main 2 items" (es enthält einen Artikel und ein Aside).
- Auf dem `<aside>`-Element — "complementary 2 items" (es enthält eine Überschrift und eine Liste).
- Auf dem Suchformulareingabefeld — "Search query, insertion at beginning of text".
- Auf dem `<footer>`-Element — "footer 1 item".

Wenn Sie das VoiceOver-Landmarks-Menü öffnen (zugänglich durch Drücken der VoiceOver-Taste + U und dann Verwenden der Cursortasten, um durch die Menüoptionen zu navigieren), sehen Sie, dass die meisten Elemente schön aufgelistet sind, sodass sie schnell erreicht werden können.

![Mac's VoiceOver Menü für schnelle Zugänglichkeit. Landmarks Kopfzeile und Landmarkenliste einschließlich Banner, Navigation, Hauptinhalt und Ergänzung.](landmarks-list.png)

Wir könnten es jedoch hier besser machen. Das Suchformular ist ein wirklich wichtiges Landmark, das Menschen finden möchten, aber es wird nicht im Landmarks-Menü aufgelistet oder als bemerkenswertes Landmark über das eigentliche Eingabefeld hinaus behandelt, das als Sucheingabe gerufen wird (`<input type="search">`).

Verbessern wir es durch die Verwendung einiger ARIA-Funktionen. Zuerst fügen wir unserem HTML-Layout einige [`role`](/de/docs/Web/Accessibility/ARIA/Roles)-Attribute hinzu. Sie können gerne eine Kopie unserer Originaldateien entgegennehmen (siehe [`index.html`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/website-no-roles/index.html) und [`style.css`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/website-no-roles/style.css)), oder navigieren Sie zu unserem [website-aria-roles](https://github.com/mdn/learning-area/tree/main/accessibility/aria/website-aria-roles) Beispiel ([Live-Demo ansehen](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)), das eine Struktur wie diese hat:

```html
<header>
  <h1>…</h1>
  <nav role="navigation">
    <ul>
      …
    </ul>
    <form role="search">
      <!-- Suchformular -->
    </form>
  </nav>
</header>

<main>
  <article role="article">…</article>
  <aside role="complementary">…</aside>
</main>

<footer>…</footer>
```

Wir haben auch ein Bonusfeature in diesem Beispiel für Sie hinzugefügt — das {{htmlelement("input")}}-Element hat das Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) erhalten, das ihm eine beschreibende Bezeichnung gibt, die von einem Bildschirmleser vorgelesen wird, auch wenn wir kein {{htmlelement("label")}}-Element aufgenommen haben. In solchen Fällen ist das sehr nützlich — ein Suchformular wie dieses ist ein sehr häufiges, leicht erkennbares Feature und das Hinzufügen eines visuellen Labels würde das Seitendesign beeinträchtigen.

```html
<input
  type="search"
  name="q"
  placeholder="Suchanfrage"
  aria-label="Durchsuchen der Seiteninhalte" />
```

Wenn wir jetzt VoiceOver verwenden, um dieses Beispiel zu betrachten, erhalten wir einige Verbesserungen:

- Das Suchformular wird sowohl beim Durchsuchen der Seite als auch im Landmarks-Menü als separates Element hervorgehoben.
- Der Labeltext, der im `aria-label`-Attribut enthalten ist, wird vorgelesen, wenn das Formulareingabeelement hervorgehoben ist.

Darüber hinaus ist die Site eher für Benutzer älterer Browser wie IE8 zugänglich; es ist hilfreich, ARIA-Rollen zu diesem Zweck einzubeziehen. Und wenn Ihre Site aus irgendeinem Grund nur mit `<div>`s gebaut wurde, sollten Sie auf jeden Fall die ARIA-Rollen einfügen, um diese dringend benötigten Semantiken bereitzustellen!

Die verbesserten Semantiken des Suchformulars haben gezeigt, was möglich wird, wenn ARIA über die in HTML verfügbaren Semantiken hinausgeht. Sie werden viel mehr über diese Semantiken und die Macht von ARIA-Eigenschaften/-Attributen unten sehen, insbesondere im Abschnitt [Zugänglichkeit nicht-semantischer Steuerelemente](#zugänglichkeit_nicht-semantischer_steuerelemente). Lassen Sie uns aber zunächst sehen, wie ARIA bei dynamischen Inhaltsaktualisierungen helfen kann.

### Dynamische Inhaltsaktualisierungen

Inhalte, die in das DOM geladen werden, können mit einem Bildschirmleser leicht zugänglich gemacht werden, von Textinhalten bis zu alternativen Texten, die an Bilder angehängt sind. Traditionelle statische Websites mit hauptsächlich Textinhalten sind daher leicht für Menschen mit Sehbehinderungen zugänglich zu machen.

Das Problem ist, dass moderne Web-Apps oft nicht nur statischer Text sind — sie aktualisieren häufig Teile der Seite, indem sie Inhalte vom Server abrufen und das DOM aktualisieren. Diese werden manchmal als **Live-Bereiche** bezeichnet.

Schauen wir uns ein kurzes Beispiel an — siehe [`aria-no-live.html`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/aria-no-live.html) (auch [Live-Demo anzeigen](https://mdn.github.io/learning-area/accessibility/aria/aria-no-live.html)). In diesem Beispiel haben wir einen einfachen Zufallszitatkasten:

```html
<section>
  <h1>Zufallszitat</h1>
  <blockquote>
    <p></p>
  </blockquote>
</section>
```

Unser JavaScript verwendet die {{domxref("Window/fetch", "fetch()")}}-API, um eine JSON-Datei mit einer Reihe von Zufallszitaten und ihren Autoren abzurufen. Sobald das abgeschlossen ist, starten wir eine [`setInterval()`](/de/docs/Web/API/setInterval)-Schleife, die alle 10 Sekunden ein neues zufälliges Zitat in den Zitatkasten lädt:

```js
const intervalID = setInterval(showQuote, 10000);
```

Dies funktioniert gut, ist aber nicht gut für die Zugänglichkeit — die Inhaltsaktualisierung wird von Bildschirmlesern nicht erkannt, sodass deren Benutzer nicht wissen, was vor sich geht. Dies ist ein relativ triviales Beispiel, aber stellen Sie sich vor, Sie erstellen eine komplexe Benutzeroberfläche mit vielen ständig aktualisierten Inhalten, wie einem Chat-Raum, einer Strategie-Spiel-Benutzeroberfläche oder einem Live-aktualisierten Einkaufswagen — es wäre unmöglich, die App effektiv zu nutzen, ohne irgendeine Möglichkeit, den Benutzer auf die Updates hinzuweisen.

WAI-ARIA bietet glücklicherweise einen nützlichen Mechanismus, um diese Benachrichtigungen bereitzustellen — die [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live)-Eigenschaft. Wenn Sie dies auf ein Element anwenden, lesen Bildschirmleser den Inhalt vor, der aktualisiert wird. Wie dringend der Inhalt vorgelesen wird, hängt vom Attributwert ab:

- `off`
  - : Der Standardwert. Aktualisierungen sollten nicht angekündigt werden.
- `polite`
  - : Aktualisierungen sollten nur angekündigt werden, wenn der Benutzer inaktiv ist.
- `assertive`
  - : Aktualisierungen sollten dem Benutzer so schnell wie möglich angekündigt werden.

Wir würden Ihnen empfehlen, eine Kopie von [`aria-no-live.html`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/aria-no-live.html) und [`quotes.json`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/quotes.json) zu nehmen und Ihr `<section>`-Öffnungstag wie folgt zu aktualisieren:

```html
<section aria-live="assertive">…</section>
```

Dies wird dazu führen, dass ein Bildschirmleser den Inhalt vorliest, wenn er aktualisiert wird.

> [!NOTE]
> Die meisten Browser werfen eine Sicherheitsausnahme, wenn Sie versuchen, eine HTTP-Anfrage von einer `file://`-URL aus zu machen, z.B. wenn Sie die Datei einfach direkt im Browser laden (durch Doppelklicken, etc.). Siehe [wie man einen lokalen Testserver einrichtet](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server).

Es gibt hier eine zusätzliche Überlegung — nur das aktualisierte Textsegment wird vorgelesen. Es könnte schön sein, wenn wir immer auch die Überschrift vorlesen, damit sich der Benutzer daran erinnern kann, was vorgelesen wird. Dazu können wir die [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)-Eigenschaft zur Sektion hinzufügen. Aktualisieren Sie Ihr `<section>`-Öffnungstag erneut, wie folgt:

```html
<section aria-live="assertive" aria-atomic="true">…</section>
```

Das `aria-atomic="true"`-Attribut sagt Bildschirmlesern, dass sie den gesamten Inhalt des Elements als eine atomare Einheit vorlesen sollen, nicht nur die aktualisierten Teile.

> [!NOTE]
> Sie können das fertige Beispiel unter [`aria-live.html`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/aria-live.html) ([Live-Demo ansehen](https://mdn.github.io/learning-area/accessibility/aria/aria-live.html)) sehen.

> [!NOTE]
> Die [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)-Eigenschaft ist auch ziemlich nützlich, um zu kontrollieren, was vorgelesen wird, wenn ein Live-Bereich aktualisiert wird. Sie können beispielsweise nur Inhaltszusätze oder -entfernungen vorlesen lassen.

### Verbesserung der Tastaturzugänglichkeit

Wie an einigen anderen Stellen im Modul besprochen, ist einer der wichtigsten Stärken von HTML in Bezug auf Barrierefreiheit die eingebaute Tastaturzugänglichkeit von Funktionen wie Schaltflächen, Formularelementen und Links. Im Allgemeinen können Sie die Tab-Taste verwenden, um zwischen Steuerelementen zu wechseln, die Enter-/Return-Taste, um Steuerelemente auszuwählen oder zu aktivieren, und gelegentlich andere Steuerungen nach Bedarf (zum Beispiel die Auf- und Abwärtspfeiltasten, um Optionen in einer `<select>`-Box zu wechseln).

Manchmal müssen Sie jedoch Code schreiben, der entweder nicht-semantische Elemente als Schaltflächen (oder andere Arten von Steuerelementen) verwendet oder fokusierbare Steuerelemente für nicht ganz den richtigen Zweck verwendet. Vielleicht versuchen Sie, schlechten Code zu reparieren, den Sie geerbt haben, oder Sie bauen eine Art komplexes Widget, das es erfordert.

In Bezug auf das Fokusieren von nicht-fokussierbarem Code erweitert WAI-ARIA das `tabindex`-Attribut mit einigen neuen Werten:

- `tabindex="0"` — Wie oben angedeutet, erlaubt dieser Wert es nicht normalerweise tabulierbaren Elementen, tabulierbar zu werden. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — Dies erlaubt nicht normalerweise tabulerbaren Elementen, programmatisch den Fokus zu erhalten, z.B. über JavaScript oder als Ziel von Links.

Wir haben dies ausführlicher besprochen und in unserem Artikel über HTML-Zugänglichkeit eine typische Implementierung gezeigt — siehe [Aufbau von Tastaturzugänglichkeit](/de/docs/Learn/Accessibility/HTML#building_keyboard_accessibility_back_in).

### Zugänglichkeit nicht-semantischer Steuerelemente

Dies knüpft an den vorherigen Abschnitt an — wenn eine Reihe von verschachtelten `<div>`s zusammen mit CSS/JavaScript verwendet wird, um eine komplexe Benutzeroberflächenfunktion zu erstellen, oder ein nativer Steuerungsknopf durch JavaScript stark verbessert oder geändert wird, kann nicht nur die Tastaturzugänglichkeit leiden, sondern Benutzer von Bildschirmlesern werden es auch schwierig finden, herauszufinden, was die Funktion tut, wenn es keine Semantik oder andere Hinweise gibt. In solchen Situationen kann ARIA helfen, diese fehlenden Semantiken bereitzustellen.

#### Formularvalidierung und Fehlermeldungen

Lassen Sie uns zunächst das Formularbeispiel erneut aufgreifen, das wir zuerst in unserem Artikel über CSS- und JavaScript-Zugänglichkeit besprochen haben (lesen Sie [Unauffälligkeit bewahren](/de/docs/Learn/Accessibility/CSS_and_JavaScript#keeping_it_unobtrusive) für eine vollständige Wiederholung). Am Ende dieses Abschnitts zeigten wir, dass wir einige ARIA-Attribute in das Fehlermeldungsfeld aufgenommen haben, das beim Versuch, das Formular einzureichen, die Validierungsfehler anzeigt:

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

- [`role="alert"`](/de/docs/Web/Accessibility/ARIA/Roles/alert_role) macht das Element, auf das es angewendet wird, automatisch zu einem Livebereich, sodass Änderungen daran vorgelesen werden; es identifiziert es auch semantisch als eine Warnmeldung (wichtige zeit-/kontextsensitive Informationen) und stellt eine bessere, zugänglichere Möglichkeit dar, einem Benutzer eine Warnung zu übermitteln (Modal-Dialoge wie [`alert()`](/de/docs/Web/API/Window/alert)-Aufrufe haben eine Reihe von Barrierefreiheitsproblemen; siehe [Popup Windows](https://webaim.org/techniques/javascript/other#popups) von WebAIM).
- Ein [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)-Wert von `all` weist den Bildschirmleser an, den Inhalt der Fehlerliste vorzulesen, wenn Änderungen vorgenommen werden — d.h. wenn Fehler hinzugefügt oder entfernt werden. Dies ist nützlich, weil der Benutzer wissen möchte, welche Fehler übrig sind, nicht nur, welche zur Liste hinzugefügt oder entfernt wurden.

Wir könnten unsere ARIA-Verwendung noch weiter ausbauen und weitere Validierungshilfen bereitstellen. Wie wäre es, wenn wir angeben, ob Felder überhaupt erforderlich sind, und welchen Wertebereich das Alter haben sollte?

1. Erstellen Sie eine Kopie unserer [`form-validation.html`](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html) und [`validation.js`](https://github.com/mdn/learning-area/blob/main/accessibility/css/validation.js) Dateien und speichern Sie sie in einem lokalen Verzeichnis.
2. Öffnen Sie beide in einem Texteditor und sehen Sie sich an, wie der Code funktioniert.
3. Zuerst fügen Sie einen Absatz direkt über dem öffnenden `<form>`-Tag hinzu, wie der untenstehende, und markieren beide Formular`<label>`s mit einem Sternchen. Dies ist normalerweise, wie wir erforderliche Felder für sehende Benutzer markieren.

  ```html
  <p>Felder, die mit einem Sternchen (*) markiert sind, sind erforderlich.</p>
  ```

4. Dies macht visuellen Sinn, aber es ist nicht so leicht für Bildschirmleser-Benutzer zu verstehen. Glücklicherweise bietet WAI-ARIA das [`aria-required`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required)-Attribut an, um Bildschirmlesern Hinweise zu geben, dass Formular-Eingaben ausgefüllt werden müssen. Aktualisieren Sie die `<input>`-Elemente wie folgt:

  ```html
  <input type="text" name="name" id="name" aria-required="true" />

  <input type="number" name="age" id="age" aria-required="true" />
  ```

5. Wenn Sie das Beispiel jetzt speichern und mit einem Bildschirmleser testen, sollten Sie etwas hören wie "Geben Sie Ihren Namen ein Stern, erforderlich, bearbeitbarer Text".
6. Es könnte auch nützlich sein, wenn wir den Bildschirmleser-Benutzern und Sehenden eine Vorstellung davon geben, wie der Alterswert aussehen sollte. Dies wird oft als Tooltip oder Platzhaltertext im Eingabefeld präsentiert. WAI-ARIA enthält die [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)-Eigenschaften, um Mindest- und Höchstwerte anzugeben, und Bildschirmleser unterstützen die nativen `min` und `max` Attribute. Eine weitere gut unterstützte Funktion ist das HTML `placeholder`-Attribut, das eine Nachricht enthalten kann, die im Eingabefeld angezeigt wird, wenn kein Wert eingegeben ist und die von einigen Bildschirmlesern vorgelesen wird. Aktualisieren Sie Ihr Zahlenfeld wie folgt:

  ```html
  <label for="age">Ihr Alter:</label>
  <input
    type="number"
    name="age"
    id="age"
    placeholder="1 bis 150 eingeben"
    required
    aria-required="true" />
  ```

Schließen Sie immer ein {{HTMLelement('label')}}-Element für jede Eingabe ein. Während einige Bildschirmleser den Platzhaltertext ankündigen, tun dies die meisten nicht. Akzeptable Alternativen, um Formularelementen einen zugänglichen Namen zu geben, schließen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) und [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) ein. Aber das `<label>`-Element mit einem `for`-Attribut ist die bevorzugte Methode, da es die Benutzerfreundlichkeit für alle Benutzer, einschließlich Mausanwender, bietet.

> [!NOTE]
> Sie können das fertige Beispiel live unter [`form-validation-updated.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-updated.html) sehen.

WAI-ARIA ermöglicht auch einige fortschrittliche Formularbeschriftungstechniken, die über das klassische {{htmlelement("label")}}-Element hinausgehen. Wir haben bereits darüber gesprochen, die [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Eigenschaft zu verwenden, um eine Bezeichnung zu geben, wo wir nicht wollen, dass die Bezeichnung für sehende Benutzer sichtbar ist (siehe den Abschnitt [Wegweiser/Landmarken](#signpostslandmarks)). Einige andere Beschriftungstechniken verwenden andere Eigenschaften wie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), wenn man ein Nicht-`<label>`-Element als Beschriftung designieren will oder mehrere Formulareingaben mit derselben Beschriftung versehen will, und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby), um andere Informationen mit einem Formulareingabefeld zu verknüpfen und zusammen vorgelesen zu lassen. Weitere Einzelheiten finden Sie im Artikel ["Advanced Form Labeling"](https://webaim.org/techniques/forms/advanced) von WebAIM.

Es gibt auch viele andere nützliche Eigenschaften und Zustände, um den Status von Formularelementen anzuzeigen. Zum Beispiel kann `aria-disabled="true"` verwendet werden, um anzuzeigen, dass ein Formulareingabefeld deaktiviert ist. Viele Browser werden deaktivierte Formularelemente überspringen, was dazu führt, dass sie von Bildschirmlesern nicht gelesen werden. In einigen Fällen wird ein deaktiviertes Element wahrgenommen, daher ist es eine gute Idee, dieses Attribut einzuschließen, um den Bildschirmleser darauf hinzuweisen, dass ein deaktiviertes Formularelement in der Tat deaktiviert ist.

Wenn sich der deaktivierte Zustand einer Eingabe wahrscheinlich ändert, ist es auch eine gute Idee, anzugeben, wann es passiert und was das Ergebnis ist. Zum Beispiel gibt es in unserem [`form-validation-checkbox-disabled.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-checkbox-disabled.html) Demo ein Kontrollkästchen, das beim Aktivieren ein weiteres Formulareingabefeld aktiviert, um weitere Informationen einzugeben. Wir haben einen versteckten Live-Bereich eingerichtet:

```html
<p class="hidden-alert" aria-live="assertive"></p>
```

der aus der Sicht durch absolute Positionierung ausgeblendet ist. Wenn dieses Kästchen aktiviert/deaktiviert wird, aktualisieren wir den Text im versteckten Live-Bereich, um den Benutzern von Bildschirmlesern mitzuteilen, was das Ergebnis der Auswahl dieses Kontrollkästchens ist, sowie den `aria-disabled`-Zustand und einige visuelle Indikatoren:

```js
function toggleMusician(bool) {
  const instruItem = formItems[formItems.length - 1];
  if (bool) {
    instruItem.input.disabled = false;
    instruItem.label.style.color = "#000";
    instruItem.input.setAttribute("aria-disabled", "false");
    hiddenAlert.textContent =
      "Feld für gespielte Instrumente jetzt aktiviert; verwenden Sie es, um uns mitzuteilen, was Sie spielen.";
  } else {
    instruItem.input.disabled = true;
    instruItem.label.style.color = "#999";
    instruItem.input.setAttribute("aria-disabled", "true");
    instruItem.input.removeAttribute("aria-label");
    hiddenAlert.textContent = "Feld für gespielte Instrumente jetzt deaktiviert.";
  }
}
```

#### Nicht-semantische Schaltflächen als Schaltflächen beschreiben

Ein paar Mal in diesem Kurs haben wir bereits die native Zugänglichkeit (und die Zugänglichkeitsprobleme bei der Verwendung anderer Elemente zum Nachahmen) von Schaltflächen, Links oder Formularelementen erwähnt (siehe [UI-Steuerelemente](/de/docs/Learn/Accessibility/HTML#ui_controls) im HTML-Zugänglichkeitsartikel und [Verbesserung der Tastaturzugänglichkeit](#verbesserung_der_tastaturzugänglichkeit) oben). Grundsätzlich können Sie in vielen Fällen die Tastenzugänglichkeit mit `tabindex` und etwas JavaScript ohne allzu große Schwierigkeiten wiederherstellen.

Und wie sieht es mit den Bildschirmlesern aus? Sie werden die Elemente immer noch nicht als Schaltflächen erkennen. Wenn wir unser [`fake-div-buttons.html`](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) Beispiel in einem Bildschirmleser testen, werden unsere gefälschten Schaltflächen mit Phrasen wie "Klicken Sie hier!, Gruppe" gemeldet, was natürlich verwirrend ist.

Das können wir mit einer WAI-ARIA-Rolle korrigieren. Erstellen Sie eine lokale Kopie von [`fake-div-buttons.html`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) und fügen Sie [`role="button"`](/de/docs/Web/Accessibility/ARIA/Roles/button_role) zu jeder Schaltfläche `<div>` hinzu, zum Beispiel:

```html
<div data-message="Das ist von der ersten Schaltfläche" tabindex="0" role="button">
  Klicken Sie hier!
</div>
```

Wenn Sie dies nun mit einem Bildschirmleser verwenden, werden Ihre Schaltflächen mit Phrasen wie "Klicken Sie hier!, Schaltfläche" gemeldet. Während dies viel besser ist, müssen Sie dennoch alle nativen Schaltflächenfunktionen hinzufügen, die Benutzer erwarten, wie das Handling von <kbd>Enter</kbd>- und Klickereignissen, wie im [`button` role documentation](/de/docs/Web/Accessibility/ARIA/Roles/button_role) erklärt.

> [!NOTE]
> Vergessen Sie jedoch nicht, dass die Verwendung des korrekten semantischen Elements, wo immer möglich, immer besser ist. Wenn Sie eine Schaltfläche erstellen möchten und ein {{htmlelement("button")}}-Element verwenden können, sollten Sie ein {{htmlelement("button")}}-Element verwenden!

#### Benutzer durch komplexe Widgets führen

Es gibt eine ganze Reihe von [Rollen](/de/docs/Web/Accessibility/ARIA/Roles), die nicht-semantische Elementstrukturen als häufige UI-Funktionen identifizieren können, die über das, was in Standard-HTML verfügbar ist, hinausgehen, zum Beispiel [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Roles/slider_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role), [`tree`](/de/docs/Web/Accessibility/ARIA/Roles/tree_role). Sie können sich mehrere nützliche Beispiele in der [Deque university code library](https://dequeuniversity.com/library/) ansehen, um Ihnen eine Vorstellung davon zu geben, wie solche Steuerelemente zugänglich gemacht werden können.

Lassen Sie uns ein eigenes Beispiel durchgehen. Wir kehren zu unserer einfachen absolut positionierten Registerkartenoberfläche zurück (siehe [Verstecken von Elementen](/de/docs/Learn/Accessibility/CSS_and_JavaScript#hiding_things) im Artikel über CSS- und JavaScript-Zugänglichkeit), die Sie unter [Tabbed info box example](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/tabbed-info-box.html) finden (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html)).

Dieses Beispiel funktioniert in Bezug auf die Tastaturzugänglichkeit gut — Sie können problemlos zwischen den verschiedenen Tabs wechseln und sie auswählen, um die Tab-Inhalte anzuzeigen. Es ist auch ziemlich zugänglich — Sie können durch den Inhalt scrollen und die Überschriften zur Navigation verwenden, auch wenn Sie nicht sehen können, was auf dem Bildschirm passiert. Allerdings ist nicht offensichtlich, was der Inhalt ist — ein Bildschirmleser meldet den Inhalt derzeit als Liste von Links und einige Inhalte mit drei Überschriften. Es gibt Ihnen keine Ahnung von der Beziehung zwischen dem Inhalt. Dem Benutzer mehr Hinweise zur Struktur des Inhalts zu geben, ist immer gut.

Um die Dinge zu verbessern, haben wir ein neues Beispiel namens [`aria-tabbed-info-box.html`](https://github.com/mdn/learning-area/blob/main/accessibility/aria/aria-tabbed-info-box.html) erstellt ([Live-Demo ansehen](https://mdn.github.io/learning-area/accessibility/aria/aria-tabbed-info-box.html)). Wir haben die Struktur der Registerkartenoberfläche wie folgt aktualisiert:

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
> Die auffälligste Änderung hier ist, dass wir die ursprünglich im Beispiel vorhandenen Links entfernt haben und einfach die Listenelemente als Tabs verwendet haben — das wurde getan, weil es Bildschirmleser-Benutzer weniger verwirrt (die Links führen Sie nicht wirklich irgendwohin; sie ändern einfach die Ansicht), und es ermöglicht den setsize/position-in-set-Funktionen, besser zu funktionieren — wenn diese auf den Links gesetzt wurden, hat der Browser ständig "1 von 1" gemeldet, nicht "1 von 3", "2 von 3", etc.

Verwendete ARIA-Funktionen umfassen:

- Neue Rollen — [`tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role), [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role)
  - : Diese identifizieren die wichtigen Bereiche der Registerkartenoberfläche — den Container für die Tabs, die Tabs selbst und die entsprechenden Tabpanels.
- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)
  - : Definiert, welches Tab derzeit ausgewählt ist. Wenn verschiedene Tabs von Benutzern ausgewählt werden, wird der Wert dieses Attributs auf den verschiedenen Tabs über JavaScript aktualisiert.
- [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)
  - : Verbirgt ein Element davor, von einem Bildschirmleser vorgelesen zu werden. Wenn verschiedene Tabs von Benutzern ausgewählt werden, wird der Wert dieses Attributs auf den verschiedenen Tabs über JavaScript aktualisiert.
- `tabindex="0"`
  - : Da wir die Links entfernt haben, müssen wir den Listenelementen dieses Attribut geben, um es mit der Tastatur fokussierbar zu machen.
- [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize)
  - : Diese Eigenschaft ermöglicht es Ihnen, Bildschirmlesern anzugeben, dass ein Element Teil einer Serie ist und wie viele Elemente die Serie hat.
- [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset)
  - : Diese Eigenschaft ermöglicht es Ihnen, anzugeben, welche Position in einer Serie ein Element hat. Zusammen mit `aria-setsize` bietet es einem Bildschirmleser genügend Informationen, um Ihnen mitzuteilen, dass Sie sich derzeit auf Element "1 von 3" befinden, etc. In vielen Fällen sollten Browser diese Informationen aus der Elementhierarchie ableiten können, aber es hilft sicherlich, zusätzliche Hinweise bereitzustellen.

In unseren Tests verbesserte diese neue Struktur die Gesamtsituation erheblich. Die Tabs werden jetzt als Tabs erkannt (zum Beispiel wird "tab" vom Bildschirmleser vorgelesen), das ausgewählte Tab wird durch "ausgewählt" mit dem Tab-Namen angezeigt, und der Bildschirmleser teilt Ihnen auch mit, auf welchem Tab Sie sich befinden. Zudem, aufgrund der `aria-hidden`-Einstellungen (nur das nicht-verborgene Tab hat jemals `aria-hidden="false"` festgelegt), können Sie nur zum nicht-verborgenen Inhalt navigieren, was den ausgewählten Inhalt leichter auffindbar macht.

> [!NOTE]
> Wenn es irgendetwas gibt, das Sie explizit nicht von Bildschirmlesern vorlesen lassen möchten, können Sie ihnen das `aria-hidden="true"`-Attribut geben.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um sicherzustellen, dass Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Test your skills: WAI-ARIA](/de/docs/Learn/Accessibility/WAI-ARIA_basics/Test_your_skills:_WAI-ARIA).

## Zusammenfassung

Dieser Artikel hat bei Weitem nicht alles abgedeckt, was in WAI-ARIA verfügbar ist, aber er sollte Ihnen genug Informationen gegeben haben, um zu verstehen, wie man es benutzt und einige der häufigsten Muster zu kennen, die es erfordern.

## Siehe auch

- [Aria Status und Eigenschaften](/de/docs/Web/Accessibility/ARIA/Attributes): Alle `aria-*` Attribute
- [WAI-ARIA Rollen](/de/docs/Web/Accessibility/ARIA/Roles): Kategorien von ARIA-Rollen und die auf MDN behandelten Rollen
- [ARIA in HTML](https://www.w3.org/TR/html-aria/) auf W3C: Eine Spezifikation, die für jedes HTML-Feature definiert, welche Zugänglichkeits-(ARIA)-Semantiken browserseitig darauf angewendet werden und welche WAI-ARIA-Features Sie darauf setzen können, falls zusätzliche Semantiken erforderlich sind
- [Deque university code library](https://dequeuniversity.com/library/): Eine Bibliothek wirklich nützlicher und praxisnaher Beispiele, die zeigen, wie komplexe UI-Steuerelemente mithilfe von WAI-ARIA-Features zugänglich gemacht werden können
- [WAI-ARIA authoring practices](https://www.w3.org/WAI/ARIA/apg/) auf W3C: Ein sehr detailliertes Entwurfsmuster des W3C, das erklärt, wie man verschiedene Arten von komplexe UI-Kontrollen implementiert, während man sie mithilfe von WAI-ARIA-Features zugänglich macht

{{PreviousMenuNext("Learn/Accessibility/CSS_and_JavaScript","Learn/Accessibility/Multimedia", "Learn/Accessibility")}}
