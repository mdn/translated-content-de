---
title: WAI-ARIA Grundlagen
short-title: WAI-ARIA
slug: Learn_web_development/Core/Accessibility/WAI-ARIA_basics
l10n:
  sourceCommit: 451c6b58988664128473a881871707c5ec9737f2
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility")}}

Im Anschluss an den vorherigen Artikel: Manchmal kann es schwierig sein, komplexe UI-Steuerelemente zu erstellen, die unsemantisches HTML und dynamisch aktualisierten JavaScript-Inhalt beinhalten. WAI-ARIA ist eine Technologie, die helfen kann, solche Probleme zu lösen, indem sie weitere Semantik hinzufügt, die Browser und unterstützende Technologien erkennen und verwenden können, um den Benutzern Informationen zur Verfügung zu stellen. Hier zeigen wir, wie man es auf einer grundlegenden Ebene verwenden kann, um die Barrierefreiheit zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und den Best Practices zur Barrierefreiheit, wie sie in den vorherigen Lektionen des Moduls vermittelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von WAI-ARIA — um nicht-semantischem HTML Semantik zu verleihen, sodass Anwender von unterstützenden Technologien die bereitgestellten Schnittstellen verstehen können.</li>
          <li>Die grundlegende Syntax — Rollen, Eigenschaften und Zustände.</li>
          <li>Landmarken und Navigation.</li>
          <li>Verbesserung der Tastaturzugänglichkeit.</li>
          <li>Ankündigung von dynamischen Inhaltsaktualisierungen mit Live-Regionen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist WAI-ARIA?

Lassen Sie uns damit beginnen, zu betrachten, was WAI-ARIA ist und was es für uns tun kann.

### Ein ganz neues Set von Problemen

Als Webanwendungen komplexer und dynamischer wurden, traten neue Funktionen und Probleme der Barrierefreiheit auf.

Zum Beispiel führte HTML eine Anzahl von semantischen Elementen ein, um allgemeine Seitenmerkmale zu definieren ({{htmlelement("nav")}}, {{htmlelement("footer")}} usw.). Bevor diese verfügbar waren, verwendeten Entwickler {{htmlelement("div")}}s mit IDs oder Klassen, z.B. `<div class="nav">`, was problematisch war, da es keinen einfachen Weg gab, programmatisch ein spezifisches Seitenmerkmal wie die Hauptnavigation zu finden.

Die anfängliche Lösung bestand darin, einen oder mehrere versteckte Links oben auf der Seite hinzuzufügen, um zur Navigation zu verlinken (oder was auch immer), zum Beispiel:

```html
<a href="#hidden" class="hidden">Skip to navigation</a>
```

Aber das ist immer noch nicht sehr präzise und kann nur verwendet werden, wenn der Screenreader von oben auf der Seite liest.

Ein weiteres Beispiel sind Anwendungen, die komplexe Steuerungselemente wie Datumsauswahlfelder für die Auswahl von Daten, Slider für die Wahl von Werten beinhalten. HTML bietet spezielle Eingabetypen, um solche Steuerelemente darzustellen:

```html
<input type="date" /> <input type="range" />
```

Diese wurden ursprünglich nicht gut unterstützt, und es war, und ist immer noch teilweise, schwierig, sie zu stylen, was dazu führte, dass Designer und Entwickler sich für benutzerdefinierte Lösungen entschieden. Anstatt diese nativen Funktionen zu verwenden, verlassen sich einige Entwickler auf JavaScript-Bibliotheken, die solche Steuerelemente als eine Reihe von verschachtelten {{htmlelement("div")}}s generieren, die dann mit CSS gestylt und mit JavaScript gesteuert werden.

Das Problem ist hier, dass sie visuell funktionieren, aber Screenreader können sie überhaupt nicht verstehen, und ihre Benutzer bekommen nur mitgeteilt, dass sie ein Durcheinander von Elementen sehen, ohne Semantik, die beschreibt, was sie bedeuten.

### WAI-ARIA tritt in Erscheinung

[WAI-ARIA](https://w3c.github.io/aria/) (Web Accessibility Initiative - Accessible Rich Internet Applications) ist eine von der W3C verfasste Spezifikation, die eine Sammlung zusätzlicher HTML-Attribute definiert, die auf Elemente angewendet werden können, um zusätzliche Semantik bereitzustellen und Barrierefreiheit dort zu verbessern, wo sie fehlt. In der Spezifikation sind drei Hauptfunktionen definiert:

- [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Diese definieren, was ein Element ist oder tut. Viele dieser Rollen sind sogenannte Landmark-Rollen, die weitgehend den semantischen Wert von Strukturelementen wie `role="navigation"` ({{htmlelement("nav")}}), `role="banner"` (Dokument-{{htmlelement("header")}}), `role="complementary"` ({{htmlelement("aside")}}) oder `role="search"` ({{htmlelement("search")}}) nachbilden. Einige andere Rollen beschreiben unterschiedliche Seitenstrukturen, die keine Elemente haben, die mit diesen Rollen übereinstimmen, wie `role="tablist"` und `role="tabpanel"`, die häufig in Benutzeroberflächen zu finden sind.
- Eigenschaften
  - : Diese definieren Eigenschaften von Elementen, die ihnen eine zusätzliche Bedeutung oder Semantik verleihen können. Ein Beispiel ist `aria-required="true"`, welches angibt, dass ein Formulareingabefeld ausgefüllt werden muss, um gültig zu sein, während `aria-labelledby="label"` es ermöglicht, eine ID auf ein Element zu setzen und dann als das Label für etwas anderes auf der Seite zu referenzieren, einschließlich mehrerer Elemente, was mit `<label for="input">` nicht möglich ist. Zum Beispiel könnte man `aria-labelledby` verwenden, um anzugeben, dass eine Schlüsselbeschreibung, die in einem {{htmlelement("div")}} enthalten ist, das Label für mehrere Tabellenzellen ist, oder um es als Alternative zum Bild-alt-Text zu verwenden - um bestehende Informationen auf der Seite als Bild-alt-Text anzugeben, anstatt sie im `alt`-Attribut wiederholen zu müssen. Sie können ein Beispiel dafür bei [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) sehen.
- Zustände
  - : Spezielle Eigenschaften, die die aktuellen Bedingungen von Elementen definieren, wie `aria-disabled="true"`, welches einem Screenreader angibt, dass eine Formulareingabe derzeit deaktiviert ist. Zustände unterscheiden sich von Eigenschaften darin, dass Eigenschaften während des Lebenszyklus einer App nicht verändert werden, während Zustände sich ändern können, im Allgemeinen programmatisch über JavaScript.

Ein wichtiger Punkt über WAI-ARIA-Attribute ist, dass sie nichts über die Webseite verändern, außer den Informationen, die durch die Barrierefreiheit-APIs des Browsers freigelegt werden (woher Screenreader ihre Informationen beziehen). WAI-ARIA beeinflusst nicht die Seitenstruktur, das DOM usw., obwohl die Attribute nützlich sein können, um Elemente per CSS auszuwählen.

> [!NOTE]
> Sie finden eine nützliche Liste aller ARIA-Rollen und deren Anwendungen, mit Links zu weiteren Informationen, in der WAI-ARIA-Spezifikation — siehe [Definition der Rollen](https://w3c.github.io/aria/#role_definitions) — auf dieser Seite — siehe [ARIA Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles).
>
> Die Spezifikation enthält auch eine Liste aller Eigenschaften und Zustände, mit Links zu weiteren Informationen — siehe [Definitionen der Zustände und Eigenschaften (alle `aria-*` Attribute)](https://w3c.github.io/aria/#state_prop_def).

## Wo wird WAI-ARIA unterstützt?

Diese Frage ist nicht leicht zu beantworten. Es ist schwierig, eine entscheidende Ressource zu finden, die darstellt, welche Funktionen von WAI-ARIA unterstützt werden und wo, weil:

1. Es gibt viele Funktionen in der WAI-ARIA-Spezifikation.
2. Es gibt viele Kombinationen von Betriebssystemen, Browsern und Screenreadern, die berücksichtigt werden müssen.

Dieser letzte Punkt ist entscheidend — um überhaupt einen Screenreader verwenden zu können, muss Ihr Betriebssystem Browser ausführen, die die notwendigen Barrierefreiheit-APIs haben, um die Informationen bereitzustellen, die Screenreader benötigen, um ihre Arbeit zu erledigen. Die meisten populären Betriebssysteme haben ein oder zwei Browser, mit denen Screenreader funktionieren können. Die Paciello Group hat einen ziemlich aktuellen Beitrag, der Daten dafür bereitstellt — siehe [Grober Leitfaden: Browser, Betriebssysteme und Unterstützung für Screenreader aktualisiert](https://www.tpgi.com/rough-guide-browsers-operating-systems-and-screen-reader-support-updated/).

Als nächstes müssen Sie sich Gedanken darüber machen, ob die betreffenden Browser ARIA-Funktionen unterstützen und sie über ihre APIs zugänglich machen, aber auch, ob Screenreader diese Informationen erkennen und ihren Nutzern auf nützliche Weise präsentieren.

1. Die Browser-Unterstützung ist fast universell.
2. Die Unterstützung von Screenreadern für ARIA-Funktionen ist noch nicht ganz auf diesem Niveau, aber die meisten populären Screenreader sind auf dem Weg dorthin. Sie können sich ein Bild von den Unterstützungsniveaus machen, indem Sie sich den Artikel [WAI-ARIA Screenreader-Kompatibilität](https://www.powermapper.com/tests/screen-readers/aria/) von Powermapper ansehen.

In diesem Artikel werden wir nicht versuchen, jede WAI-ARIA-Funktion und deren genaue Unterstützungsdetails abzudecken. Stattdessen werden wir die wichtigsten WAI-ARIA-Funktionen behandeln, die Sie kennen sollten; wenn wir keine Unterstützungsdetails erwähnen, können Sie davon ausgehen, dass die Funktion gut unterstützt wird. Wir werden alle Ausnahmen davon eindeutig erwähnen.

> [!NOTE]
> Einige JavaScript-Bibliotheken unterstützen WAI-ARIA, was bedeutet, dass sie, wenn sie UI-Funktionen wie komplexe Formularelemente generieren, ARIA-Attribute hinzufügen, um die Zugänglichkeit dieser Funktionen zu verbessern. Wenn Sie nach einer Drittanbieter-JavaScript-Lösung für schnelle UI-Entwicklung suchen, sollten Sie die Barrierefreiheit ihrer UI-Widgets als wichtigen Faktor bei Ihrer Wahl in Betracht ziehen. Gute Beispiele sind jQuery UI (siehe [Über jQuery UI: Tiefgehende Barrierefreiheitsunterstützung](https://jqueryui.com/about/#deep-accessibility-support)), [ExtJS](https://www.sencha.com/products/extjs/) und [Dojo/Dijit](https://dojotoolkit.org/reference-guide/1.10/dijit/a11y/statement.html).

## Wann sollten Sie WAI-ARIA verwenden?

Wir haben bereits einige der Probleme besprochen, die zur Erstellung von WAI-ARIA geführt haben, aber im Wesentlichen gibt es vier Hauptgebiete, in denen WAI-ARIA nützlich ist:

- Wegweiser/Landmarken
  - : ARIAs [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) Attributwerte können als Wegweiser fungieren, die entweder die Semantik von HTML-Elementen nachbilden (z.B. {{htmlelement("nav")}}) oder über die Semantik von HTML hinausgehen, um Wegweiser zu verschiedenen Funktionsbereichen bereitzustellen, zum Beispiel `search`, `tablist`, `tab`, `listbox` usw.
- Dynamische Inhaltsaktualisierungen
  - : Screenreader haben normalerweise Schwierigkeiten, ständig wechselnden Inhalt zu melden; mit ARIA können wir `aria-live` verwenden, um Screenreader-Benutzern mitzuteilen, wenn ein Inhaltsbereich dynamisch aktualisiert wird: zum Beispiel, indem JavaScript auf der Seite neue Inhalte vom Server abruft und das DOM aktualisiert.
- Verbesserung der Tastaturzugänglichkeit
  - : Es gibt eingebaute HTML-Elemente mit nativer Tastaturzugänglichkeit; wenn andere Elemente zusammen mit JavaScript verwendet werden, um ähnliche Interaktionen zu simulieren, leidet die Tastaturzugänglichkeit und die Berichterstattung der Screenreader als Folge davon. Wo dies unvermeidlich ist, bietet WAI-ARIA eine Möglichkeit, anderen Elementen den Fokus zu ermöglichen (mit `tabindex`).
- Zugänglichkeit nicht-semantischer Elemente
  - : Wenn eine Reihe von verschachtelten `<div>`s zusammen mit CSS/JavaScript verwendet wird, um ein komplexes UI-Feature zu erstellen, oder ein natives Steuerungselement stark verbessert/verändert durch JavaScript wird, kann die Zugänglichkeit leiden — Screenreader-Benutzer werden es schwer finden zu verstehen, was das Feature tut, wenn es keine Semantik oder andere Hinweise gibt. In solchen Situationen kann ARIA helfen, das Fehlende mit einer Kombination von Rollen wie `button`, `listbox` oder `tablist` zu liefern, und Eigenschaften wie `aria-required` oder `aria-posinset`, um weitere Hinweise zur Funktionalität zu geben.

Im nächsten Abschnitt werden wir die vier Hauptbereiche, die zuvor beschrieben wurden, genauer betrachten, zusammen mit Beispielen. Bevor Sie fortfahren, sollten Sie ein Setup zum Testen von Screenreadern einrichten, damit Sie einige der Beispiele testen können, während Sie weiterlesen. Weitere Informationen finden Sie in unserem Abschnitt zum [Testen von Screenreadern](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers).

> [!CALLOUT]
>
> **Sie sollten WAI-ARIA nur dann verwenden, wenn Sie es benötigen!**
>
> Die Verwendung der korrekten HTML-Elemente vermittelt implizit die benötigten Rollen und Sie sollten _immer_ [native HTML-Funktionen](/de/docs/Learn_web_development/Core/Accessibility/HTML) verwenden, um die Semantik bereitzustellen, die von Screenreadern benötigt werden, um ihren Benutzern zu sagen, was vor sich geht. Manchmal ist dies nicht möglich, entweder weil Sie nur begrenzte Kontrolle über den Code haben, oder weil Sie etwas Komplexes erstellen, das kein einfach zu implementierendes HTML-Element hat. In solchen Fällen kann WAI-ARIA ein wertvolles Werkzeug zur Verbesserung der Barrierefreiheit sein.
>
> Aber nochmals, verwenden Sie es nur, wenn nötig!
>
> Versuchen Sie außerdem, sicherzustellen, dass Sie Ihre Website mit einer Vielzahl von _echten_ Benutzern testen — nicht-behinderte Menschen, Menschen, die Screenreader verwenden, Menschen, die Tastaturnavigation verwenden, usw. Sie werden bessere Einblicke darüber haben, wie gut es funktioniert.

## Wegweiser/Landmarken

WAI-ARIA fügt den Browsern das [`role` Attribut](https://w3c.github.io/aria/#role_definitions) hinzu, das es Ihnen ermöglicht, überall dort, wo sie benötigt werden, zusätzlichen semantischen Wert zu den Elementen Ihrer Website hinzuzufügen. Der erste große Bereich, in dem dies nützlich ist, ist das Bereitstellen von Informationen für Screenreader, damit deren Benutzer gemeinsame Seitenelemente finden können. Dieses Beispiel hat folgende Struktur:

```html live-sample___aria-website-no-roles
<header>
  <h1>Header</h1>

  <!-- Even is it's not mandatory, it's common practice to put the main navigation menu within the main header -->

  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Team</a></li>
      <li><a href="#">Projects</a></li>
      <li><a href="#">Contact</a></li>
    </ul>

    <!-- A Search form is another common non-linear way to navigate through a website. -->

    <form>
      <input type="search" name="q" placeholder="Search query" />
      <input type="submit" value="Go!" />
    </form>
  </nav>
</header>

<!-- Here is our page's main content -->
<main>
  <!-- It contains an article -->
  <article>
    <h2>Article heading</h2>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a diam
      lectus. Set sit amet ipsum mauris. Maecenas congue ligula as quam viverra
      nec consectetur ant hendrerit. Donec et mollis dolor. Praesent et diam
      eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue
      enim, ut porta lorem lacinia consectetur.
    </p>

    <h3>subsection</h3>

    <p>
      Donec ut librero sed accu vehicula ultricies a non tortor. Lorem ipsum
      dolor sit amet, consectetur adipisicing elit. Aenean ut gravida lorem. Ut
      turpis felis, pulvinar a semper sed, adipiscing id dolor.
    </p>
  </article>

  <!-- the aside content can also be nested within the main content -->
  <aside>
    <h2>Related</h2>

    <ul>
      <li><a href="#">Oh I do like to be beside the seaside</a></li>
      <li><a href="#">Oh I do like to be beside the sea</a></li>
      <li><a href="#">Although in the North of England</a></li>
      <li><a href="#">It never stops raining</a></li>
      <li><a href="#">Oh well...</a></li>
    </ul>
  </aside>
</main>

<!-- And here is our main footer that is used across all the pages of our website -->

<footer>
  <p>©Copyright 2050 by nobody. All rights reversed.</p>
</footer>
```

```css hidden live-sample___aria-website-no-roles
/* || General setup */

html,
body {
  margin: 0;
  padding: 0;
}

html {
  font-size: 10px;
  background-color: darkgrey;
}

body {
  width: max(70vw, 90%);
  margin: 0 auto;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
}

/* || typography */

h1,
h2,
h3 {
  font-family: "Sonsie One", cursive;
  color: #2a2a2a;
}

p,
input,
li {
  font-family: "Open Sans Condensed", sans-serif;
  color: #2a2a2a;
}

h1 {
  font-size: 4rem;
  text-align: center;
  color: white;
  text-shadow: 2px 2px 10px black;
}

h2 {
  font-size: 3rem;
  text-align: center;
}

h3 {
  font-size: 2.2rem;
}

p,
li {
  font-size: 1.6rem;
  line-height: 1.5;
}

/* || header layout */

header {
  margin-bottom: 10px;
}

nav,
article,
aside,
footer {
  background-color: white;
  padding: 1%;
}

nav {
  background-color: #ff80ff;
  display: flex;
  gap: 2vw;
  @media (width <= 650px) {
    flex-direction: column;
  }
}

nav ul {
  padding: 0;
  list-style-type: none;
  flex: 2;
  display: flex;
  gap: 2vw;
}

nav li {
  display: inline;
  text-align: center;
}

nav a {
  display: inline-block;
  font-size: 2rem;
  text-transform: uppercase;
  text-decoration: none;
  color: black;
}

nav form {
  flex: 1;
  display: flex;
  align-items: center;
  height: 100%;
}

input {
  font-size: 1.6rem;
  height: 32px;
}

input[type="search"] {
  flex: 3;
}

input[type="submit"] {
  flex: 1;
  margin-left: 1rem;
  background: #333;
  border: 0;
  color: white;
}

/* || main layout */

main {
  display: flex;
  gap: 2vw;
  @media (width <= 650px) {
    flex-direction: column;
  }
}

article {
  flex: 4;
}

aside {
  flex: 1;
  background-color: #ff80ff;
}

aside li {
  padding-bottom: 10px;
}

footer {
  margin-top: 10px;
}
```

{{EmbedLiveSample("aria-website-no-roles", "100", "850")}}

Wenn Sie das Beispiel mit einem Screenreader in einem modernen Browser testen, erhalten Sie bereits einige nützliche Informationen. Zum Beispiel bietet VoiceOver Folgendes:

- Auf dem `<header>` Element — "Banner, 2 Elemente" (es enthält eine Überschrift und das `<nav>`).
- Auf dem `<nav>` Element — "Navigation 2 Elemente" (es enthält eine Liste und ein Formular).
- Auf dem `<main>` Element — "Hauptteil 2 Elemente" (es enthält einen Artikel und ein Seitenfeld).
- Auf dem `<aside>` Element — "Ergänzend 2 Elemente" (es enthält eine Überschrift und eine Liste).
- Auf dem Suchformulareingabe — "Suchanfrage, Einfügen am Anfang des Textes".
- Auf dem `<footer>` Element — "Fußzeile 1 Element".

Wenn Sie zu VoiceOver's Landmarks-Menü gehen (zugänglich mit VoiceOver-Taste + U und dann mit den Cursor-Tasten durch die Menüauswahl blättern), werden Sie sehen, dass die meisten der Elemente schön aufgelistet sind, damit sie schnell erreicht werden können.

![Macs VoiceOver-Menü für schnelle Barrierefreiheit. Landmarks-Kopfzeile und Landmarks-Liste einschließlich Banner, Navigation, Haupt, und ergänzend.](landmarks-list.png)

Wir könnten jedoch noch besser sein. Das Suchformular ist ein wirklich wichtiger Wegweiser, den Menschen finden wollen, aber es wird nicht im Landmarks-Menü aufgeführt oder als bemerkenswerter Wegweiser behandelt, jenseits davon, dass das eigentliche Eingabefeld als Sucheingabe bezeichnet wird (`<input type="search">`).

Wir könnten es verbessern, indem wir die ARIA `role="search"` verwenden, aber die Verwendung des {{htmlelement("search")}} Elements gibt der Form implizit diese Rolle.

```html live-sample___aria-website-roles
<header>
  <h1>Header</h1>

  <!-- Even is it's not mandatory, it's common practice to put the main navigation menu within the main header -->

  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Our team</a></li>
      <li><a href="#">Projects</a></li>
      <li><a href="#">Contact</a></li>
    </ul>

    <!-- A Search form is another common non-linear way to navigate through a website. -->

    <search>
      <form>
        <input
          type="search"
          name="q"
          placeholder="Search query"
          aria-label="Search through site content" />
        <input type="submit" value="Go!" />
      </form>
    </search>
  </nav>
</header>

<!-- Here is our page's main content -->
<main>
  <!-- It contains an article -->
  <article>
    <h2>Article heading</h2>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a diam
      lectus. Set sit amet ipsum mauris. Maecenas congue ligula as quam viverra
      nec consectetur ant hendrerit. Donec et mollis dolor. Praesent et diam
      eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue
      enim, ut porta lorem lacinia consectetur.
    </p>

    <h3>subsection</h3>

    <p>
      Donec ut librero sed accu vehicula ultricies a non tortor. Lorem ipsum
      dolor sit amet, consectetur adipisicing elit. Aenean ut gravida lorem. Ut
      turpis felis, pulvinar a semper sed, adipiscing id dolor.
    </p>

    <p>
      Pelientesque auctor nisi id magna consequat sagittis. Curabitur dapibus,
      enim sit amet elit pharetra tincidunt feugiat nist imperdiet. Ut convallis
      libero in urna ultrices accumsan. Donec sed odio eros.
    </p>
  </article>

  <!-- the aside content can also be nested within the main content -->
  <aside>
    <h2>Related</h2>
    <ul>
      <li><a href="#">Oh I do like to be beside the seaside</a></li>
      <li><a href="#">Oh I do like to be beside the sea</a></li>
      <li><a href="#">Although in the North of England</a></li>
      <li><a href="#">It never stops raining</a></li>
      <li><a href="#">Oh well...</a></li>
    </ul>
  </aside>
</main>

<!-- And here is our main footer that is used across all the pages of our website -->

<footer>
  <p>©Copyright 2050 by nobody. All rights reversed.</p>
</footer>
```

```css hidden live-sample___aria-website-roles
/* || General setup */

html,
body {
  margin: 0;
  padding: 0;
}

html {
  font-size: 10px;
  background-color: darkgrey;
}

body {
  width: max(70vw, 90%);
  margin: 0 auto;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
}

/* || typography */

h1,
h2,
h3 {
  font-family: "Sonsie One", cursive;
  color: #2a2a2a;
}

p,
input,
li {
  font-family: "Open Sans Condensed", sans-serif;
  color: #2a2a2a;
}

h1 {
  font-size: 4rem;
  text-align: center;
  color: white;
  text-shadow: 2px 2px 10px black;
}

h2 {
  font-size: 3rem;
  text-align: center;
}

h3 {
  font-size: 2.2rem;
}

p,
li {
  font-size: 1.6rem;
  line-height: 1.5;
}

/* || header layout */

header {
  margin-bottom: 10px;
}

nav,
article,
aside,
footer {
  background-color: white;
  padding: 1%;
}

nav {
  background-color: #ff80ff;
  display: flex;
  gap: 2vw;
  @media (width <= 650px) {
    flex-direction: column;
  }
}

nav ul {
  padding: 0;
  list-style-type: none;
  flex: 2;
  display: flex;
  gap: 2vw;
}

nav li {
  display: inline;
  text-align: center;
}

nav a {
  display: inline-block;
  font-size: 2rem;
  text-transform: uppercase;
  text-decoration: none;
  color: black;
}

nav form {
  flex: 1;
  display: flex;
  align-items: center;
  height: 100%;
}

input {
  font-size: 1.6rem;
  height: 32px;
}

input[type="search"] {
  flex: 3;
}

input[type="submit"] {
  flex: 1;
  margin-left: 1rem;
  background: #333;
  border: 0;
  color: white;
}

/* || main layout */

main {
  display: flex;
  gap: 2vw;
  @media (width <= 650px) {
    flex-direction: column;
  }
}

article {
  flex: 4;
}

aside {
  flex: 1;
  background-color: #ff80ff;
}

aside li {
  padding-bottom: 10px;
}

footer {
  margin-top: 10px;
}
```

{{EmbedLiveSample("aria-website-roles", "100", "850")}}

Am wichtigsten ist, dass wir semantisches HTML verwendet haben, das Bedeutung und Rollen zur Struktur der Seite ohne unnötige [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) Attribute zu unserer HTML-Struktur hinzufügt, was eine Struktur hat, wie diese:

```html
<header>
  <h1>…</h1>
  <nav>
    <ul>
      …
    </ul>
    <search>
      <form>
        <!-- search form -->
      </form>
    </search>
  </nav>
</header>

<main>
  <article>…</article>
  <aside>…</aside>
</main>

<footer>…</footer>
```

Wir haben Ihnen in diesem Beispiel auch ein zusätzliches Feature gegeben — das {{htmlelement("input")}} Element wurde mit dem Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) versehen, das ihm ein beschreibendes Label gibt, das von einem Screenreader vorgelesen wird, obwohl wir kein {{htmlelement("label")}} Element hinzugefügt haben. In solchen Fällen ist dies sehr nützlich — ein Suchformular wie dieses ist eine sehr häufige, leicht erkennbare Funktion, und das Hinzufügen eines visuellen Labels würde das Seitendesign beeinträchtigen.

```html
<input
  type="search"
  name="q"
  placeholder="Search query"
  aria-label="Search through site content" />
```

Nun, wenn wir VoiceOver verwenden, um dieses Beispiel zu betrachten, erhalten wir einige Verbesserungen:

- Das Suchformular wird als separates Element behandelt, sowohl beim Durchsuchen der Seite als auch im Menüs der Landmarks.
- Der im `aria-label` Attribut enthaltene Label-Text wird vorgelesen, wenn das Formulareingabefeld hervorgehoben wird.

Wenn Sie ältere Browser wie IE8 unterstützen müssen; es ist sinnvoll, ARIA-Rollen zu diesem Zweck hinzuzufügen. Und wenn aus irgendeinem Grund Ihre Website nur mit `<div>`s erstellt ist, sollten Sie die ARIA-Rollen auf jeden Fall hinzufügen, um diese dringend benötigte Semantik bereitzustellen!

Sie werden noch viel mehr über diese Semantik und die Macht der ARIA-Eigenschaften/Attribute im Folgenden sehen, besonders im Abschnitt [Zugänglichkeit nicht-semantischer Steuerelemente](#zugänglichkeit_nicht-semantischer_steuerelemente). Schauen wir uns jedoch vorerst an, wie ARIA bei dynamischen Inhaltsaktualisierungen helfen kann.

## Dynamische Inhaltsaktualisierungen

Inhalt, der in das DOM geladen wurde, kann einfach über einen Screenreader zugänglich gemacht werden, von textuellem Inhalt bis hin zu alternativem Text, der Bildern beigefügt ist. Traditionelle statische Webseiten mit überwiegend Textinhalt sind daher leicht zugänglich für Menschen mit Sehbehinderungen.

Das Problem ist, dass moderne Webanwendungen oft nicht nur statischer Text sind — sie aktualisieren häufig Teile der Seite, indem sie neuen Inhalt vom Server abrufen (in diesem Beispiel verwenden wir ein statisches Array von Zitaten) und das DOM aktualisieren. Dies wird manchmal als **Live-Regionen** bezeichnet.

Lassen Sie uns ein Beispiel betrachten — ein Zufallszitat-Generator:

```html live-sample___aria-no-live
<section>
  <h1>Random quote generator</h1>
  <button>Start giving me quotes</button>
  <blockquote>
    <p></p>
  </blockquote>
</section>
```

```css hidden live-sample___aria-no-live live-sample___aria-live
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

html,
body {
  height: 100%;
}

h1 {
  letter-spacing: 2px;
}

p {
  line-height: 1.6;
}

section {
  height: 100%;
  padding: 10px;
  background: #666;
  text-shadow: 1px 1px 1px black;
  color: white;
}
```

```js live-sample___aria-no-live live-sample___aria-live
let quotes = [
  {
    quote:
      "Every child is an artist. The problem is how to remain an artist once he grows up.",
    author: "Pablo Picasso",
  },
  {
    quote:
      "You can never cross the ocean until you have the courage to lose sight of the shore.",
    author: "Christopher Columbus",
  },
  {
    quote:
      "I love deadlines. I love the whooshing noise they make as they go by.",
    author: "Douglas Adams",
  },
];
```

```js live-sample___aria-no-live live-sample___aria-live
const quotePara = document.querySelector("section p");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  function showQuote() {
    let random = Math.floor(Math.random() * quotes.length);
    quotePara.textContent = `${quotes[random].quote} -- ${quotes[random].author}`;
  }

  showQuote();
  btn.disabled = true;
  window.setInterval(showQuote, 5000);
});
```

{{EmbedLiveSample("aria-no-live", "100", "220")}}

Das funktioniert soweit, ist aber nicht gut für die Barrierefreiheit — die Inhaltsaktualisierung wird von Screenreadern nicht erkannt, sodass ihre Benutzer nicht wissen, was los ist. Dies ist ein ziemlich triviales Beispiel, aber stellen Sie sich vor, Sie erstellen eine komplexe Benutzeroberfläche mit vielen ständig aktualisierten Inhalten, wie ein Chatroom, oder eine Strategiespiel-Benutzeroberfläche, oder ein live aktualisiertes Warenkorbanzeige — es wäre unmöglich, die App effektiv zu nutzen, ohne irgendeine Art von Möglichkeit, den Benutzer über die Updates zu informieren.

WAI-ARIA bietet glücklicherweise einen nützlichen Mechanismus zur Bereitstellung dieser Benachrichtigungen — die [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) Eigenschaft. Die Anwendung auf ein Element führt dazu, dass Screenreader den aktualisierten Inhalt vorlesen. Wie dringend der Inhalt vorgelesen wird, hängt vom Attributwert ab:

- `off`
  - : Der Standard. Aktualisierungen sollten nicht angekündigt werden.
- `polite`
  - : Aktualisierungen sollten nur angekündigt werden, wenn der Benutzer inaktiv ist.
- `assertive`
  - : Aktualisierungen sollten dem Benutzer so schnell wie möglich angekündigt werden.

Hier aktualisieren wir das `<blockquote>` Eröffnungstag wie folgt:

```html
<blockquote aria-live="assertive">…</blockquote>
```

Dies wird dazu führen, dass ein Screenreader den Inhalt vorliest, wie er aktualisiert wird: Probieren Sie die aktualisierte Live-Version aus:

```html hidden live-sample___aria-live
<section>
  <h1>Random quote generator</h1>
  <button>Start giving me quotes</button>
  <blockquote aria-live="assertive">
    <p></p>
  </blockquote>
</section>
```

{{EmbedLiveSample("aria-live", "100", "220")}}

> [!NOTE]
> Es gibt einige andere ARIA-Eigenschaften, die mit `aria-live` in Verbindung stehen und ebenfalls wissenswert sind:
>
> - Die [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic) Eigenschaft weist Screenreader an, den gesamten Inhalt eines Elements als eine atomare Einheit vorzulesen, nicht nur die Teile, die aktualisiert wurden. Dies ist nützlich, wenn nur Inhalte eines Bereiches aktualisiert werden und Sie auch die Überschrift bei jedem Wechsel vorgelesen haben möchten, um den Benutzer an ihren Inhalt zu erinnern.
> - Die [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant) Eigenschaft ist nützlich, um zu steuern, was vorgelesen wird, wenn eine Live-Region aktualisiert wird. Sie können beispielsweise nur die hinzugefügten oder entfernten Inhalte vorlesen lassen.

## Verbesserung der Tastaturzugänglichkeit

Wie an einigen anderen Stellen im Modul besprochen, ist eine der Schlüsselstärken von HTML in Bezug auf Barrierefreiheit die eingebaute Tastaturerreichbarkeit von Funktionen wie Schaltflächen, Formularelementen und Links. Im Allgemeinen können Sie die Tabulatortaste verwenden, um zwischen Steuerelementen zu navigieren, die Eingabetaste verwenden, um Steuerelemente auszuwählen oder zu aktivieren, und gelegentlich andere Steuerelemente, wie erforderlich (beispielsweise die Auf- und Abwärtstasten, um zwischen Optionen in einem `<select>`-Feld zu wechseln).

Manchmal müssen Sie jedoch Code schreiben, der entweder nicht-semantische Elemente als Schaltflächen (oder andere Arten von Steuerelementen) verwendet, oder fokussierbare Steuerelemente für nicht ganz den richtigen Zweck verwendet. Sie versuchen möglicherweise, schlechten Code zu beheben, den Sie übernommen haben, oder Sie bauen eine Art komplexes Widget, das dies erfordert.

In Bezug auf das Fokussierbar-Machen von nicht fokussierbarem Code erweitert WAI-ARIA das `tabindex` Attribut mit einigen neuen Werten:

- `tabindex="0"` — wie oben angezeigt, erlaubt dieser Wert, dass normalerweise nicht mit der Tabulatortaste ansteuerbare Elemente fokussierbar werden. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — erlaubt normalerweise nicht mit der Tabulatortaste ansteuerbaren Elementen, den Fokus programmatisch zu erhalten, z.B. über JavaScript oder als Ziel von Links.

Wir haben dies ausführlicher besprochen und eine typische Implementierung in unserem HTML-Barrierefreiheitsartikel gezeigt — siehe [Tastaturzugänglichkeit wiederherstellen](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in).

## Zugänglichkeit nicht-semantischer Steuerelemente

Dies folgt auf den vorherigen Abschnitt — wenn eine Reihe von verschachtelten `<div>`s zusammen mit CSS/JavaScript verwendet wird, um ein komplexes UI-Feature zu erstellen, oder ein natives Steuerungselement stark verbessert/verändert wird, kann nicht nur die Tastaturzugänglichkeit leid, sondern auch Screenreader-Benutzern wird es schwerfallen, herauszufinden, was das Feature tut, wenn es keine Semantik oder andere Hinweise gibt. In solchen Situationen kann ARIA helfen, die fehlende Semantik bereitzustellen.

### Formularvalidierung und Fehlerbenachrichtigungen

Zuerst möchten wir auf das Formular-Beispiel zurückkommen, das wir in unserem CSS- und JavaScript-Barrierefreiheitsartikel betrachtet haben (lesen Sie [Halten Sie es unaufdringlich](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#keeping_it_unobtrusive) für ein vollständiges Nachlesen). Am Ende dieses Abschnitts haben wir gezeigt, dass wir einige ARIA-Attribute auf die Fehlermeldungsbox angewendet haben, die Validierungsfehler anzeigt, wenn Sie versuchen, das Formular abzusenden:

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

- [`role="alert"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) verwandelt das Element, auf das es angewendet wird, automatisch in eine Live-Region, sodass Änderungen daran vorgelesen werden; es identifiziert es auch semantisch als eine Alarmnachricht (wichtige zeit-/kontextabhängige Informationen) und stellt eine bessere, zugänglichere Möglichkeit dar, einem Benutzer einen Alarm zu liefern (modale Dialoge wie [`alert()`](/de/docs/Web/API/Window/alert) Aufrufe haben eine Reihe von Barrierefreiheitsproblemen; siehe [Popup Windows](https://webaim.org/techniques/javascript/other#popups) durch WebAIM).
- Ein [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant) Wert von `all` weist den Screenreader an, den Inhalt der Fehlerliste vorzulesen, wenn irgendwelche Änderungen daran vorgenommen werden — d.h. wenn Fehler hinzugefügt oder entfernt werden. Dies ist nützlich, da der Benutzer darüber informiert werden möchte, welche Fehler noch vorhanden sind, nicht nur, was zur Liste hinzugefügt oder daraus entfernt wurde.

Wir könnten unsere ARIA-Nutzung noch weiter ausbauen und mehr Validierungshilfe bereitstellen. Was ist damit angezeigt zu werden, ob Felder überhaupt erforderlich sind und welcher Bereich das Alter haben sollte?

1. An dieser Stelle nehmen Sie eine Kopie von unserem [`form-validation.html`](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html) und [`validation.js`](https://github.com/mdn/learning-area/blob/main/accessibility/css/validation.js) Dateien und speichern Sie sie in einem lokalen Verzeichnis.
2. Öffnen Sie sie beide in einem Texteditor und schauen Sie sich an, wie der Code funktioniert.
3. Fügen Sie zunächst einen Absatz direkt über dem öffnenden `<form>` Tag hinzu, wie unten gezeigt, und kennzeichnen Sie beide Formular-`<label>`s mit einem Sternchen. Normalerweise zeigen wir so erforderliche Felder für sehende Benutzer an.

   ```html
   <p>Fields marked with an asterisk (*) are required.</p>
   ```

4. Dies ergibt visuell Sinn, ist aber für Nutzer von Screenreadern nicht so einfach zu verstehen. Glücklicherweise bietet WAI-ARIA das [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required) Attribut, um Screenreader aufzufordern, den Benutzern Hinweise zu geben, dass Formulareingaben gefüllt werden müssen. Aktualisieren Sie die `<input>` Elemente wie folgt:

   ```html
   <input type="text" name="name" id="name" aria-required="true" />

   <input type="number" name="age" id="age" aria-required="true" />
   ```

5. Wenn Sie das Beispiel jetzt speichern und es mit einem Screenreader testen, sollten Sie etwas hören wie "Geben Sie Ihren Namen ein, Sternchen, erforderlich, Bearbeitungstext".
6. Es könnte auch nützlich sein, wenn wir sehende und Screenreader-Nutzer über den erwarteten Alterswert informieren. Dies wird oft als Tooltip oder Platzhalter innerhalb des Formulareingabefeldes präsentiert. WAI-ARIA beinhaltet auch die Eigenschaften [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax), um Min- und Maxwerte anzugeben, und Screenreader unterstützen die nativen `min` und `max` Attribute. Ein weiteres gut unterstütztes Feature ist das HTML `placeholder` Attribut, das eine Nachricht enthalten kann, die in der Eingabe angezeigt wird, wenn kein Wert eingegeben wird, und von einigen Screenreadern vorgelesen wird. Aktualisieren Sie Ihre Zahleneingabe wie folgt:

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

Verwenden Sie immer ein {{HTMLelement('label')}} für jede Eingabe. Während einige Screenreader den Platzhaltertext ankündigen, tun dies die meisten nicht. Akzeptable Ersetzungen zur Bereitstellung von Formularelementen mit einem zugänglichen Namen umfassen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) und [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby). Aber das Element `<label>` mit einem `for` Attribut ist die bevorzugte Methode, da es die Benutzerfreundlichkeit für alle Benutzer, einschließlich Mausbenutzer, bietet.

> [!NOTE]
> Sie können das fertige Beispiel live bei [`form-validation-updated.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-updated.html) sehen.

WAI-ARIA ermöglicht auch einige fortgeschrittene Formular-Labeling-Techniken, jenseits des klassischen {{htmlelement("label")}} Elements. Wir haben bereits darüber gesprochen, dass die [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) Eigenschaft verwendet wird, um ein Label bereitzustellen, wo wir das Label nicht für sehende Benutzer sichtbar haben möchten (siehe den Abschnitt [Wegweiser/Landmarken](#signpostslandmarks), oben). Einige andere Techniken zum Labeling nutzen andere Eigenschaften wie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn Sie ein nicht-`<label>`-Element als Label bezeichnen oder mehrere Formulareingaben mit demselben Label kennzeichnen möchten, und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby), wenn Sie zusätzliche Informationen mit einer Formulareingabe verknüpfen und vorgelesen haben möchten. Siehe [WebAIMs Artikel zu fortschrittlichem Labeling von Formularen](https://webaim.org/techniques/forms/advanced) für mehr Details.

Es gibt viele andere nützliche Eigenschaften und Zustände, um den Status von Formularelementen anzugeben. Zum Beispiel kann `aria-disabled="true"` verwendet werden, um anzuzeigen, dass ein Formularfeld deaktiviert ist. Viele Browser überspringen deaktivierte Formularelemente, was dazu führt, dass sie von Screenreadern nicht vorgelesen werden. In einigen Fällen wird ein deaktiviertes Element wahrgenommen, daher ist es eine gute Idee, dieses Attribut hinzuzufügen, um dem Screenreader mitteilen, dass ein deaktiviertes Formularelement tatsächlich deaktiviert ist.

Wenn sich der deaktivierte Zustand einer Eingabe voraussichtlich ändert, ist es auch eine gute Idee anzugeben, wann dies geschieht und was das Ergebnis ist. Zum Beispiel gibt es in unserem [`form-validation-checkbox-disabled.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-checkbox-disabled.html) Demo eine Checkbox, die beim Aktivieren ein weiteres Formulareingabefeld ermöglicht, um weitere Informationen einzugeben. Wir haben eine versteckte Live-Region eingerichtet:

```html
<p class="hidden-alert" aria-live="assertive"></p>
```

die mithilfe unter absoluter Platzierung versteckt wird. Wenn dies aktiviert/deaktiviert wird, aktualisieren wir den Text innerhalb der versteckten Live-Region, um Screenreader-Benutzern mitzuteilen, was das Ergebnis des Anwählens/Abwählen dieser Checkbox ist, sowie den Zustand von `aria-disabled` und einige visuelle Indikatoren:

```js
function toggleMusician(bool) {
  const instrument = formItems[formItems.length - 1];
  if (bool) {
    instrument.input.disabled = false;
    instrument.label.style.color = "black";
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

### Nicht-semantische Schaltflächen als Schaltflächen beschreiben

Einige Male in diesem Kurs haben wir bereits auf die native Zugänglichkeit (und die Zugänglichkeitsprobleme bei der Verwendung anderer Elemente, um Schaltflächen, Links oder Formularelemente nachzuahmen) von Schaltflächen hingewiesen (siehe [Verwenden Sie semantische UI-Steuerungen, wo möglich](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible) im HTML-Zugänglichkeitsartikel und [Verbesserung der Tastaturzugänglichkeit](#verbesserung_der_tastaturzugänglichkeit) hier oben). Im Grunde können Sie in vielen Fällen die Tastaturzugänglichkeit ohne allzu große Schwierigkeiten mit `tabindex` und ein wenig JavaScript wiederherstellen.

Aber was ist mit Screenreadern? Sie werden die Elemente trotzdem nicht als Schaltflächen sehen. Wenn wir unser [`fake-div-buttons.html`](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) Beispiel in einem Screenreader testen, werden unsere gefälschten Schaltflächen mit Formulierungen wie "Click me!, Gruppe" gemeldet, was offensichtlich verwirrend ist.

Wir können dies mithilfe einer WAI-ARIA-Rolle beheben. Machen Sie eine lokale Kopie von [`fake-div-buttons.html`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) und fügen jedem Schaltflächen-`<div>` ein [`role="button"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) hinzu, zum Beispiel:

```html
<div data-message="This is from the first button" tabindex="0" role="button">
  Click me!
</div>
```

Jetzt, wenn Sie dies mit einem Screenreader testen, werden Schaltflächen mit Formulierungen wie "Click me!, Button" gemeldet. Dies ist viel besser, jedoch müssen Sie dennoch alle nativen Schaltflächenfunktionen hinzufügen, die von Benutzern erwartet werden, wie die Behandlung von <kbd>Enter</kbd> und Klickereignissen, wie im [`button` Rollen-Dokumentation](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) erklärt.

> [!NOTE]
> Vergessen Sie jedoch nicht, dass die Verwendung des korrekten semantischen Elements, wo immer möglich, immer besser ist. Wenn Sie eine Schaltfläche erstellen möchten und ein {{htmlelement("button")}} Element verwenden können, sollten Sie ein {{htmlelement("button")}} Element verwenden!

### Benutzer durch komplexe Widgets führen

Es gibt eine ganze Reihe von [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles), mit denen nicht-semantische Elementstrukturen als gemeinsame UI-Funktionen identifiziert werden können, die über das Standard-HTML-Feature hinausgehen, zum Beispiel [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role), [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role). Sie können sich mehrere nützliche Beispiele in der [Deque university code library](https://dequeuniversity.com/library/) ansehen, um eine Vorstellung davon zu bekommen, wie solche Steuerelemente barrierefrei gemacht werden können.

Sie können auch mehrere Live-Beispiele in unserer [WAI-ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles) Dokumentation finden. Sehen Sie sich zum Beispiel unser [ARIA: tab role example](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role#example) an, das erklärt, wie eine zugängliche Registerkartenoberfläche implementiert wird.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, dass Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA).

## Zusammenfassung

Dieser Artikel hat bei weitem nicht alles abgedeckt, was in WAI-ARIA verfügbar ist, aber es sollte Ihnen genug Informationen gegeben haben, um zu verstehen, wie man es verwendet und um einige der häufigsten Muster zu kennen, bei denen es erforderlich ist.

## Siehe auch

- [Aria-Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes): Alle `aria-*` Attribute
- [WAI-ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles): Kategorien von ARIA-Rollen und die auf MDN beschriebenen Rollen
- [ARIA in HTML](https://w3c.github.io/html-aria/) auf W3C: Eine Spezifikation, die für jedes HTML-Feature die Barrierefreiheits-(ARIA-)Semantik definiert, die vom Browser darauf implizit angewendet werden, und die WAI-ARIA-Features, die Sie darauf setzen können, wenn zusätzliche Semantik benötigt wird
- [Deque university code library](https://dequeuniversity.com/library/): Eine Bibliothek mit wirklich nützlichen und praktischen Beispielen, die komplexe UI-Steuerungen zeigen, die mit WAI-ARIA-Features barrierefrei gemacht werden
- [WAI-ARIA-Autorierungspraktiken](https://www.w3.org/WAI/ARIA/apg/) auf W3C: Ein sehr detailliertes Designmuster von der W3C, das erklärt, wie verschiedene Arten von komplexen UI-Steuerungen implementiert werden können und dabei barrierefrei gemacht werden mit WAI-ARIA-Funktionen

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility")}}
