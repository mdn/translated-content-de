---
title: WAI-ARIA Grundlagen
short-title: WAI-ARIA
slug: Learn_web_development/Core/Accessibility/WAI-ARIA_basics
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility")}}

Anknüpfend an den vorherigen Artikel kann es manchmal schwierig sein, komplexe Benutzeroberflächen-Kontrollen zu erstellen, die unsemantisches HTML und dynamisch mit JavaScript aktualisierte Inhalte beinhalten. WAI-ARIA ist eine Technologie, die bei solchen Problemen helfen kann, indem sie zusätzliche Semantik hinzufügt, die Browser und unterstützende Technologien erkennen und nutzen können, um den Nutzern mitzuteilen, was geschieht. Hier zeigen wir, wie man sie auf einer grundlegenden Ebene verwendet, um die Zugänglichkeit zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und den als beste Praktiken anerkannten Zugänglichkeitsmethoden, wie sie in früheren Lektionen des Moduls gelehrt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von WAI-ARIA — Semantik für sonst nicht-semantisches HTML bereitzustellen, damit AT-Nutzer die ihnen präsentierten Schnittstellen verstehen können.</li>
          <li>Die grundlegende Syntax — Rollen, Eigenschaften und Zustände.</li>
          <li>Orientierungspunkte und Wegweiser.</li>
          <li>Verbesserung der Tastaturzugänglichkeit.</li>
          <li>Ankündigung von Updates dynamischer Inhalte mit Live-Bereichen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist WAI-ARIA?

Lassen Sie uns zunächst ansehen, was WAI-ARIA ist und was es für uns tun kann.

### Ein ganz neuer Satz Probleme

Als Web-Apps komplexer und dynamischer wurden, traten neue Zugänglichkeitsfunktionen und Probleme auf.

Zum Beispiel führte HTML eine Anzahl von semantischen Elementen ein, um allgemeine Seitenelemente zu definieren ({{htmlelement("nav")}}, {{htmlelement("footer")}} usw.). Bevor diese verfügbar waren, verwendeten Entwickler {{htmlelement("div")}}s mit IDs oder Klassen, z. B. `<div class="nav">`. Das war problematisch, da es keine einfache Möglichkeit gab, eine spezifische Seitenfunktion, wie z.B. die Hauptnavigation, programmgesteuert zu finden.

Die anfängliche Lösung bestand darin, am oberen Rand der Seite einen oder mehrere versteckte Links hinzuzufügen, die auf die Navigation (oder was auch immer) verweisen, zum Beispiel:

```html
<a href="#hidden" class="hidden">Skip to navigation</a>
```

Aber das ist immer noch nicht sehr präzise und kann nur verwendet werden, wenn der Screenreader von oben nach unten liest.

Ein weiteres Beispiel: Apps begannen, komplexe Steuerungen wie Datumsauswahlen für die Datumsauswahl, Schieberegler für die Wertauswahl usw. zu verwenden. HTML bietet spezielle Eingabetypen, um solche Steuerungen darzustellen:

```html
<input type="date" /> <input type="range" />
```

Diese wurden ursprünglich nicht gut unterstützt und es war, und ist immer noch in gewissem Umfang, schwierig, sie zu gestalten. Dies führte dazu, dass Designer und Entwickler sich für maßgeschneiderte Lösungen entschieden. Anstatt diese nativen Funktionen zu verwenden, verlassen sich einige Entwickler auf JavaScript-Bibliotheken, die solche Steuerungen als eine Reihe von verschachtelten {{htmlelement("div")}}s generieren, die dann mit CSS gestaltet und mit JavaScript gesteuert werden.

Das Problem hier ist, dass sie optisch funktionieren, Screenreader jedoch überhaupt nicht verstehen, was sie sind und ihren Nutzern einfach mitgeteilt wird, dass eine Ansammlung von Elementen ohne Semantik, die sie beschreibt, vorhanden ist.

### Einführung von WAI-ARIA

[WAI-ARIA](https://www.w3.org/TR/wai-aria/) (Web Accessibility Initiative - Accessible Rich Internet Applications) ist eine vom W3C verfasste Spezifikation, die ein Set zusätzlicher HTML-Attribute definiert, die auf Elemente angewendet werden können, um zusätzliche Semantik bereitzustellen und die Zugänglichkeit dort zu verbessern, wo sie fehlt. Die Spezifikation definiert drei Hauptmerkmale:

- [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Diese definieren, was ein Element ist oder tut. Viele davon sind sogenannte Landmarken-Rollen, die weitgehend den semantischen Wert von Strukturelementen duplizieren, wie z. B. `role="navigation"` ({{htmlelement("nav")}}), `role="banner"` (Dokument-{{htmlelement("header")}}), `role="complementary"` ({{htmlelement("aside")}}) oder `role="search"` ({{htmlelement("search")}}). Einige andere Rollen beschreiben verschiedene Seitenstrukturen, die keine Elemente haben, die zu diesen Rollen passen, wie z. B. `role="tablist"` und `role="tabpanel"`, die häufig in Benutzeroberflächen vorkommen.
- Eigenschaften
  - : Diese definieren Eigenschaften von Elementen, die verwendet werden können, um ihnen zusätzliche Bedeutung oder Semantik zu verleihen. Zum Beispiel gibt `aria-required="true"` an, dass eine Formular-Eingabe ausgefüllt werden muss, um gültig zu sein, während `aria-labelledby="label"` es Ihnen ermöglicht, eine ID auf ein Element zu setzen und es dann als Etikett für alles andere auf der Seite zu referenzieren, einschließlich mehrerer Elemente, was mit `<label for="input">` nicht möglich ist. Sie könnten `aria-labelledby` verwenden, um anzugeben, dass eine Schlüsselbeschreibung in einem {{htmlelement("div")}} das Etikett für mehrere Tabellenspalten ist, oder Sie könnten es als Alternative zu alt-Text für Bilder verwenden — vorhandene Informationen auf der Seite als alt-Text eines Bildes angeben, anstatt sie im `alt`-Attribut zu wiederholen. Ein Beispiel dazu finden Sie bei [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives).
- Zustände
  - : Spezielle Eigenschaften, die die aktuellen Bedingungen von Elementen definieren, wie `aria-disabled="true"`, was einem Screenreader angibt, dass eine Formulareingabe momentan deaktiviert ist. Zustände unterscheiden sich von Eigenschaften darin, dass sich Eigenschaften während des gesamten Lebenszyklus einer App nicht ändern, während Zustände sich ändern können, normalerweise programmgesteuert über JavaScript.

Ein wichtiger Punkt zu WAI-ARIA-Attributen ist, dass sie nichts an der Webseite selbst beeinflussen, außer der Information, die durch die Zugänglichkeits-APIs des Browsers offengelegt wird (von wo Screenreader ihre Informationen beziehen). WAI-ARIA beeinflusst nicht die Webseitenstruktur, den DOM usw., obwohl die Attribute für die Auswahl von Elementen durch CSS nützlich sein können.

> [!NOTE]
> Sie finden eine nützliche Liste aller ARIA-Rollen und deren Verwendungen, mit Links zu weiteren Informationen, in der WAI-ARIA-Spezifikation — siehe [Definition von Rollen](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) — auf dieser Seite — siehe [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles).
>
> Die Spezifikation enthält auch eine Liste aller Eigenschaften und Zustände, mit Links zu weiteren Informationen — siehe [Definitionen von Zuständen und Eigenschaften (alle `aria-*` Attribute)](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def).

### Wo wird WAI-ARIA unterstützt?

Dies ist keine einfache Frage zu beantworten. Es ist schwierig, eine schlüssige Ressource zu finden, die angibt, welche Funktionen von WAI-ARIA wo unterstützt werden, weil:

1. Es gibt viele Funktionen in der WAI-ARIA-Spezifikation.
2. Es gibt viele Kombinationen von Betriebssystemen, Browsern und Screenreadern zu berücksichtigen.

Dieser letzte Punkt ist entscheidend — Um einen Screenreader überhaupt zu benutzen, muss Ihr Betriebssystem in der Lage sein, Browser auszuführen, die die erforderlichen Zugänglichkeits-APIs implementieren, um die Informationen offenzulegen, die Screenreader benötigen, um ihre Arbeit zu erledigen. Die meisten gängigen Betriebssysteme haben einen oder zwei Browser, die mit Screenreadern zusammenarbeiten können. Die Paciello Group hat einen ziemlich aktuellen Beitrag, der Daten dazu bereitstellt — siehe [Rough Guide: browsers, operating systems and screen reader support updated](https://www.tpgi.com/rough-guide-browsers-operating-systems-and-screen-reader-support-updated/).

Als Nächstes müssen Sie sich um die Frage kümmern, ob die jeweiligen Browser ARIA-Funktionen unterstützen und über ihre APIs verfügbar machen, aber auch, ob Screenreader diese Informationen erkennen und ihrer Zielgruppe nützlich präsentieren.

1. Die Browserunterstützung ist nahezu universell.
2. Die Unterstützung von ARIA-Funktionen durch Screenreader ist noch nicht ganz auf dem gleichen Niveau, aber die beliebtesten Screenreader nähern sich an. Sie können eine Vorstellung von den Support-Leveln bekommen, indem Sie sich den Artikel von Powermapper zur [WAI-ARIA Screen reader compatibility](https://www.powermapper.com/tests/screen-readers/aria/) ansehen.

In diesem Artikel werden wir nicht versuchen, jede WAI-ARIA-Funktion und deren genaue Unterstützungsdetails abzudecken. Stattdessen werden wir die kritischsten WAI-ARIA-Funktionen behandeln, von denen Sie wissen sollten; wenn wir keine Unterstützungsdetails erwähnen, können Sie davon ausgehen, dass die Funktion gut unterstützt wird. Wir werden alle Ausnahmen klar erwähnen.

> [!NOTE]
> Einige JavaScript-Bibliotheken unterstützen WAI-ARIA, was bedeutet, dass sie bei der Generierung von UI-Funktionen wie komplexen Formularelementen ARIA-Attribute hinzufügen, um die Zugänglichkeit dieser Funktionen zu verbessern. Wenn Sie eine Drittanbieter-JavaScript-Lösung für die schnelle UI-Entwicklung suchen, sollten Sie die Zugänglichkeit seiner UI-Widgets auf jeden Fall als wichtigen Faktor bei Ihrer Entscheidungsfindung in Betracht ziehen. Gute Beispiele sind jQuery UI (siehe [About jQuery UI: Deep accessibility support](https://jqueryui.com/about/#deep-accessibility-support)), [ExtJS](https://www.sencha.com/products/extjs/) und [Dojo/Dijit](https://dojotoolkit.org/reference-guide/1.10/dijit/a11y/statement.html).

### Wann sollten Sie WAI-ARIA verwenden?

Wir haben zuvor einige der Probleme angesprochen, die zur Schaffung von WAI-ARIA führten, aber im Wesentlichen gibt es vier Hauptbereiche, in denen WAI-ARIA nützlich ist:

- Wegweiser/Landmarken
  - : ARIAs [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)-Attributwerte können als Wegweiser fungieren, die entweder die Semantik von HTML-Elementen replizieren (z.B. {{htmlelement("nav")}}), oder über die HTML-Semantik hinaus signalisieren, wo sich verschiedene Funktionsbereiche befinden, wie z. B. `search`, `tablist`, `tab`, `listbox` usw.
- Dynamische Inhaltsaktualisierungen
  - : Screenreader haben Schwierigkeiten, ständig wechselnde Inhalte zu melden; mit ARIA können wir `aria-live` verwenden, um Screenreader-Nutzer zu informieren, wenn ein Inhaltsbereich dynamisch aktualisiert wird: zum Beispiel durch JavaScript auf der Seite, das neuen Inhalt vom Server abruft und den DOM aktualisiert.</a>.
- Verbesserung der Tastaturzugänglichkeit
  - : Es gibt eingebaute HTML-Elemente mit nativer Tastaturzugänglichkeit; wenn andere Elemente zusammen mit JavaScript verwendet werden, um ähnliche Interaktionen zu simulieren, leidet die Tastaturzugänglichkeit und die Screenreader-Berichterstattung darunter. Wo dies unvermeidlich ist, bietet WAI-ARIA eine Möglichkeit, anderen Elementen den Fokus zu geben (mithilfe von `tabindex`).
- Zugänglichkeit von nicht-semantischen Steuerelementen
  - : Wenn eine Reihe von verschachtelten `<div>`s zusammen mit CSS/JavaScript verwendet wird, um eine komplexe UI-Funktion zu erstellen, oder wenn ein nativer Controller über JavaScript stark verbessert/verändert wird, kann die Zugänglichkeit leiden — Screenreader-Nutzer werden es schwierig finden, zu erkennen, was die Funktion tut, wenn es keine Semantik oder andere Hinweise gibt. In solchen Situationen kann ARIA helfen, das Fehlende durch eine Kombination von Rollen wie `button`, `listbox` oder `tablist` und Eigenschaften wie `aria-required` oder `aria-posinset` bereitzustellen, um weitere Hinweise auf die Funktionalität zu geben.

#### Sie sollten WAI-ARIA nur dann verwenden, wenn Sie es wirklich benötigen!

Die Verwendung der richtigen HTML-Elemente gibt Ihnen implizit die Rollen, die benötigt werden, und Sie sollten _immer_ [native HTML-Funktionen](/de/docs/Learn_web_development/Core/Accessibility/HTML) verwenden, um die Semantik bereitzustellen, die Screenreader benötigen, um ihren Nutzern zu sagen, was los ist. Manchmal ist das nicht möglich, entweder weil Sie begrenzte Kontrolle über den Code haben, oder weil Sie etwas Komplexes erschaffen, das kein einfaches HTML-Element zur Umsetzung hat. In solchen Fällen kann WAI-ARIA ein wertvolles Werkzeug zur Verbesserung der Zugänglichkeit sein.

Aber nochmals, verwenden Sie es nur, wenn es notwendig ist!

> [!NOTE]
> Versuchen Sie auch, sicherzustellen, dass Sie Ihre Website mit einer Vielzahl _realer_ Nutzer testen — nicht-behinderte Menschen, Menschen, die Screenreader nutzen, Menschen, die Tastaturnavigation nutzen etc. Sie werden bessere Einblicke darüber haben, wie gut es funktioniert.

## Praktische WAI-ARIA Implementierungen

Im nächsten Abschnitt werden wir die vier Bereiche im Detail betrachten, zusammen mit praktischen Beispielen. Bevor Sie weitermachen, sollten Sie eine Testumgebung für Screenreader einrichten, damit Sie einige der Beispiele während des Studiums testen können.

Siehe unseren Abschnitt über [Testing screen readers](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers) für weitere Informationen.

### Wegweiser/Landmarken

WAI-ARIA fügt das [`role`-Attribut](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) zu Browsern hinzu, das es Ihnen ermöglicht, überall dort, wo diese benötigt werden, zusätzliche semantische Werte zu Elementen auf Ihrer Website hinzuzufügen. Der erste große Bereich, in dem das nützlich ist, ist die Bereitstellung von Informationen für Screenreader, so dass ihre Nutzer gemeinsame Seitenelemente finden können. Dieses Beispiel hat die folgende Struktur:

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
  background-color: #a9a9a9;
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
  background-color: ff80ff;
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

Wenn Sie das Beispiel mit einem Screenreader in einem modernen Browser testen, erhalten Sie bereits einige nützliche Informationen. Zum Beispiel gibt VoiceOver Ihnen Folgendes:

- Auf dem `<header>`-Element — „Banner, 2 Elemente“ (es enthält eine Überschrift und das `<nav>`).
- Auf dem `<nav>`-Element — „Navigation 2 Elemente“ (es enthält eine Liste und ein Formular).
- Auf dem `<main>`-Element — „Hauptteil 2 Elemente“ (es enthält einen Artikel und einen Abschnitt).
- Auf dem `<aside>`-Element — „Ergänzend 2 Elemente“ (es enthält eine Überschrift und eine Liste).
- Auf der Suchformulareingabe — „Suchabfrage, Einfügen am Anfang des Textes“.
- Auf dem `<footer>`-Element — „Fußzeile 1 Element“.

Wenn Sie das VoiceOver-Landmarks-Menü aufrufen (zugänglich mit der VoiceOver-Taste + U und dann die Pfeiltasten verwenden, um durch die Menüauswahl zu wechseln), werden Sie feststellen, dass die meisten der Elemente schön aufgelistet sind, damit sie schnell zugänglich sind.

![Vielfalt von schnellen Zugängen. Landmarks Header und Landmarks Liste, inklusive Banner, Navigation, Hauptteil und Ergänzend.](landmarks-list.png)

Wir könnten hier jedoch besser abschneiden. Das Suchformular ist ein wirklich wichtiger Orientierungspunkt, den die Leute finden möchten, aber es ist nicht im Landmarks-Menü aufgelistet oder wird als bemerkenswerter Orientierungspunkt behandelt, abgesehen davon, dass der tatsächliche Input als Sucheingabe bezeichnet wird (`<input type="search">`).

Wir könnten es mit der Verwendung der ARIA-Rolle `role="search"` verbessern, aber die Verwendung des {{htmlelement("search")}}-Elements gibt implizit diese Rolle an das Formular.

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
  background-color: #a9a9a9;
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
  background-color: ff80ff;
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

Am wichtigsten ist, dass wir semantisches HTML verwendet haben, das die Bedeutung und Rollen für die Struktur der Seite liefert, ohne unnötige [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)-Attribute zu unserer HTML-Struktur hinzuzufügen, die eine Struktur hat wie:

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

Wir haben Ihnen auch ein Bonus-Feature in diesem Beispiel gegeben — das {{htmlelement("input")}}-Element hat das Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) erhalten, welches ihm ein beschreibendes Label gibt, das von einem Screenreader vorgelesen wird, obwohl wir kein {{htmlelement("label")}}-Element hinzugefügt haben. In solchen Fällen ist dies sehr nützlich — ein Suchformular wie dieses ist ein sehr häufiges, leicht erkennbares Merkmal, und das Hinzufügen eines visuellen Labels würde das Seitendesign stören.

```html
<input
  type="search"
  name="q"
  placeholder="Search query"
  aria-label="Search through site content" />
```

Wenn Sie nun VoiceOver verwenden, um sich dieses Beispiel anzusehen, sehen Sie einige Verbesserungen:

- Das Suchformular wird sowohl bei der Durchsicht der Seite aufgerufen als auch im Landmarks-Menü als separates Element herausgestellt.
- Der in `aria-label` enthaltene Text wird vorgelesen, wenn das Formularelement hervorgehoben wird.

Wenn Sie ältere Browser wie IE8 unterstützen müssen, ist es sinnvoll, ARIA-Rollen zu diesem Zweck hinzuzufügen. Und wenn Ihre Website aus irgendeinem Grund nur aus `<div>`s bestehen sollte, sollten Sie definitiv die ARIA-Rollen hinzufügen, um diese dringend benötigte Semantik zu liefern!

Im Folgenden sehen Sie mehr über diese Semantik und die Macht der ARIA-Eigenschaften/Attribute, insbesondere im Abschnitt [Zugänglichkeit von nicht-semantischen Steuerungen](#zugänglichkeit_von_nicht-semantischen_steuerungen). Schauen wir uns zunächst an, wie ARIA bei dynamischen Inhaltsaktualisierungen helfen kann.

### Dynamische Inhaltsaktualisierungen

In den DOM geladene Inhalte sind mit einem Screenreader leicht zugänglich, von textbasierten Inhalten bis hin zu alternativen Texten, die an Bilder angehängt sind. Traditionelle statische Websites mit überwiegend textbetonten Inhalten lassen sich daher leicht für Menschen mit Sehbehinderungen zugänglich machen.

Das Problem ist, dass moderne Web-Apps oft nicht einfach nur statischer Text sind – sie aktualisieren häufig Teile der Seite durch das Abrufen neuer Inhalte vom Server (in diesem Beispiel verwenden wir ein statisches Array von Zitaten) und das Aktualisieren des DOM. Diese werden manchmal als **Live-Bereiche** bezeichnet.

```html live-sample___aria-no-live
<section>
  <h1>Random quote</h1>
  <blockquote>
    <p></p>
  </blockquote>
</section>
```

```css live-sample___aria-no-live
html {
  font-family: sans-serif;
}

h1 {
  letter-spacing: 2px;
}

p {
  line-height: 1.6;
}

section {
  padding: 10px;
  width: calc(100% - 20px);
  background: #666;
  text-shadow: 1px 1px 1px black;
  color: white;
  min-height: 160px;
}
```

```js live-sample___aria-no-live
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

```js live-sample___aria-no-live
const quotePara = document.querySelector("section p");

window.setInterval(showQuote, 10000);

function showQuote() {
  let random = Math.floor(Math.random() * quotes.length);
  quotePara.textContent = `${quotes[random].quote} -- ${quotes[random].author}`;
}
```

{{EmbedLiveSample("aria-no-live", "100", "180")}}

Dies funktioniert in Ordnung, ist aber nicht gut für die Zugänglichkeit — das Inhaltsupdate wird von Screenreadern nicht erkannt, sodass deren Nutzer nicht wissen würden, was los ist. Dies ist ein relativ triviales Beispiel, aber stellen Sie sich nur vor, Sie würden eine komplexe Benutzeroberfläche mit vielen ständig aktualisierten Inhalten erstellen, wie etwa einen Chatraum, oder ein Strategie-Spiel-Interface, oder eine live aktualisierte Einkaufswagen-Anzeige — es wäre unmöglich, die App auf effektive Weise zu nutzen, ohne irgendeine Art von Möglichkeit, den Benutzer über die Updates zu informieren.

WAI-ARIA bietet glücklicherweise einen nützlichen Mechanismus, um diese Hinweise bereitzustellen — die Eigenschaft [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live). Die Anwendung dieser auf ein Element veranlasst Screenreader, den Inhalt zu lesen, sobald er aktualisiert wird. Wie dringend der Inhalt vorgelesen wird, hängt vom Attributwert ab:

- `off`
  - : Der Standardwert. Updates sollen nicht angekündigt werden.
- `polite`
  - : Updates sollen nur angekündigt werden, wenn der Benutzer nicht beschäftigt ist.
- `assertive`
  - : Updates sollen dem Nutzer so schnell wie möglich bekannt gegeben werden.

Hier aktualisieren wir das `<section>`-Opening-Tag wie folgt:

```html
<section aria-live="assertive">…</section>
```

Dies wird den Screenreader veranlassen, den Inhalt zu lesen, sobald er aktualisiert wird.

Es gibt ein zusätzliches Anliegen hier — nur der Teil des Textes, der aktualisiert wird, wird vorgelesen. Es könnte schön sein, wenn wir immer die Überschrift mitlesen lassen, damit der Benutzer weiß, was gelesen wird. Dazu können wir die [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)-Eigenschaft zur Sektion hinzufügen. Aktualisieren Sie das `<section>`-Opening-Tag erneut wie folgt:

```html
<section aria-live="assertive" aria-atomic="true">…</section>
```

Das Attribut `aria-atomic="true"` weist Screenreader an, den gesamten Elementinhalt als eine atomare Einheit zu lesen, nicht nur die Teile, die aktualisiert wurden.

```html live-sample___aria-live
<section aria-live="assertive" aria-atomic="true">
  <h1>Random quote</h1>
  <blockquote>
    <p></p>
  </blockquote>
</section>
```

```css live-sample___aria-live
html {
  font-family: sans-serif;
}

h1 {
  letter-spacing: 2px;
}

p {
  line-height: 1.6;
}

section {
  padding: 10px;
  width: calc(100% - 20px);
  background: #666;
  text-shadow: 1px 1px 1px black;
  color: white;
  min-height: 160px;
}
```

```js live-sample___aria-live
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

```js live-sample___aria-live
const quotePara = document.querySelector("section p");

window.setInterval(showQuote, 10000);

function showQuote() {
  let random = Math.floor(Math.random() * quotes.length);
  quotePara.textContent = `${quotes[random].quote} -- ${quotes[random].author}`;
}
```

{{EmbedLiveSample("aria-live", "100", "180")}}

> [!NOTE]
> Die Eigenschaft [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant) ist auch sehr nützlich, um zu steuern, was gelesen wird, wenn ein Live-Bereich aktualisiert wird. Sie können beispielsweise nur Inhaltsadditionen oder -entfernungen lesen lassen.

### Verbesserung der Tastaturzugänglichkeit

Wie in einigen anderen Teilen des Moduls besprochen, ist eine der großen Stärken von HTML im Hinblick auf die Zugänglichkeit die eingebaute Tastaturzugänglichkeit von Features wie Schaltflächen, Formularelementen und Links. In der Regel können Sie die Tabulatortaste verwenden, um zwischen Steuerelementen zu wechseln, die Eingabe- oder Rücktaste, um Steuerelemente auszuwählen oder zu aktivieren, und gelegentlich andere Steuerelemente nach Bedarf (beispielsweise die Pfeiltasten nach oben und unten, um zwischen Optionen in einem `<select>`-Feld zu wechseln).

Allerdings werden Sie hin und wieder Code schreiben müssen, der entweder nicht-semantische Elemente als Schaltflächen (oder andere Arten von Steuerung) verwendet oder fokussierbare Steuerelemente zu einem nicht ganz richtigen Zweck einsetzt. Vielleicht versuchen Sie, schlechten Code zu reparieren, den Sie geerbt haben, oder Sie bauen eine Art komplexes Widget, das dies erfordert.

In Bezug auf das Fokussieren nicht-fokussierbarer Codes erweitert WAI-ARIA das `tabindex`-Attribut mit einigen neuen Werten:

- `tabindex="0"` — wie oben erwähnt, ermöglicht dieser Wert es Elementen, die normalerweise nicht fokussierbar sind, fokussierbar zu werden. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — dieses ermöglicht es normalerweise nicht fokussierbaren Elementen, programmgesteuert den Fokus zu erhalten, z.B. über JavaScript oder als Ziel von Links.

Wir haben dies ausführlicher diskutiert und eine typische Implementierung in unserem HTML-Zugänglichkeitsartikel gezeigt — siehe [Tastaturzugänglichkeit wieder integrieren](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in).

### Zugänglichkeit von nicht-semantischen Steuerungen

Das knüpft an den vorigen Abschnitt an — wenn eine Reihe von verschachtelten `<div>`s zusammen mit CSS/JavaScript verwendet wird, um eine komplexe Benutzeroberflächenfunktion zu erstellen oder ein nativer Controller über JavaScript stark verbessert/verändert wird, kann nicht nur die Tastaturzugänglichkeit leiden, sondern auch Nutzer von Screenreadern werden Schwierigkeiten haben, herauszufinden, was die Funktion tut, wenn es keine Semantik oder andere Hinweise gibt. In solchen Situationen kann ARIA helfen, die fehlende Technik-Semantik bereitzustellen.

#### Formularvalidierung und Fehlerbenachrichtigungen

Lassen Sie uns zunächst das Formular-Beispiel erneut anschauen, das wir zuerst unser CSS- und JavaScript-Zugänglichkeitsartikel behandelt haben (lesen Sie [Einhaltung von Unauffälligkeit](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#keeping_it_unobtrusive) für eine vollständige Zusammenfassung). Am Ende dieses Abschnitts zeigten wir, dass wir einige ARIA-Attribute im Fehlermeldungsfeld enthalten haben, das alle Validierungsfehler beim Versuch, das Formular abzusenden, anzeigt:

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

- [`role="alert"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) wandelt das Element, auf das es angewendet wird, automatisch in einen Live-Bereich um, sodass Änderungen daran vorgelesen werden; es kennzeichnet es auch semantisch als eine Fehlermeldung (wichtige zeit-/kontextbezogene Informationen) und stellt eine bessere, zugänglichere Methode zur Bereitstellung einer Warnung für einen Benutzer dar (Modale Dialoge wie [`alert()`](/de/docs/Web/API/Window/alert)-Aufrufe haben eine Reihe von Zugänglichkeitsproblemen; siehe [Popup-Fenster](https://webaim.org/techniques/javascript/other#popups) von WebAIM).
- Der [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)-Wert `all` weist den Screenreader an, den Inhalt der Fehlerliste bei jeder Änderung vorzulesen – d.h. wenn Fehler hinzugefügt oder entfernt werden. Dies ist nützlich, da der Benutzer wissen möchte, welche Fehler noch vorhanden sind und nicht nur, was zur Liste hinzugefügt oder aus der Liste entfernt wurde.

Wir könnten weiter mit unserer ARIA-Nutzung gehen und mehr Validierungshilfe bieten. Was ist mit der Angabe, ob Felder überhaupt erforderlich sind und welchen Bereich das Alter abdecken sollte?

1. An diesem Punkt machen Sie eine Kopie von unserem [`form-validation.html`](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html) und [`validation.js`](https://github.com/mdn/learning-area/blob/main/accessibility/css/validation.js) Dateien und speichern diese in einem lokalen Verzeichnis.
2. Öffnen Sie beide in einem Texteditor und schauen Sie sich an, wie der Code funktioniert.
3. Fügen Sie zunächst einen Absatz direkt über dem öffnenden `<form>`-Tag ein, so wie der unten stehende, und kennzeichnen Sie beide Formular-`<label>`s mit einem Sternchen. So markieren wir normalerweise erforderliche Felder für sehende Nutzer.

   ```html
   <p>Fields marked with an asterisk (*) are required.</p>
   ```

4. Das ergibt visuell Sinn, aber es ist nicht so leicht zu verstehen für Screenreader-Nutzer. Glücklicherweise bietet WAI-ARIA das Attribut [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required), um Screenreader Hinweise darauf zu geben, dass Formulareingaben ausgefüllt werden müssen. Aktualisieren Sie die `<input>`-Elemente wie folgt:

   ```html
   <input type="text" name="name" id="name" aria-required="true" />

   <input type="number" name="age" id="age" aria-required="true" />
   ```

5. Wenn Sie das Beispiel jetzt speichern und mit einem Screenreader testen, sollten Sie etwas wie "Geben Sie Ihren Namen ein, Stern, erforderlich, Bearbeitungstext" hören.
6. Es könnte auch nützlich sein, wenn wir Screenreader-Nutzern und sehenden Nutzern einen Überblick darüber geben, welchen Wert das Alter haben sollte. Dies wird oft als Tooltip oder Platzhalter im Formularfeld angezeigt. WAI-ARIA enthält außerdem die Eigenschaften [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) zur Angabe von Mindest- und Höchstwerten, und Screenreader unterstützen die nativen `min` und `max`-Attribute. Ein weiteres gut unterstütztes Feature ist das HTML `placeholder`-Attribut, das eine Nachricht enthalten kann, die im Eingabefeld angezeigt wird, wenn kein Wert eingegeben wurde und von einigen Screenreadern vorgelesen wird. Aktualisieren Sie Ihre Zahleneingabe auf diese Weise:

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

Fügen Sie immer ein {{HTMLelement('label')}} für jede Eingabe hinzu. Während einige Screenreader den Platzhaltertext ankündigen, tun dies die meisten nicht. Akzeptable Ersatzmethoden zur Bereitstellung eines zugänglichen Namens für Formularelemente umfassen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) und [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby). Aber das `<label>`-Element mit einem `for`-Attribut ist die bevorzugte Methode, da es die Benutzerfreundlichkeit für alle Nutzer bietet, einschließlich der Maus-Nutzer.

> [!NOTE]
> Sie können das fertige Beispiel live unter [`form-validation-updated.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-updated.html) sehen.

WAI-ARIA ermöglicht auch einige fortgeschrittene Methoden zum Formulierungslabeling jenseits des klassischen {{htmlelement("label")}}-Elements. Wir haben bereits darüber gesprochen, die [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Eigenschaft zu verwenden, um ein Label bereitzustellen, wenn wir das Label nicht für sehende Nutzer sichtbar machen möchten (siehe den Abschnitt [Wegweiser/Landmarken](#signpostslandmarks), oben). Einige andere Beschildungsmethoden verwenden andere Eigenschaften wie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn Sie ein Nicht-`<label>`-Element als Etikett angeben oder mehrere Formulareingaben mit demselben Etikett kennzeichnen möchten, und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby), wenn Sie andere Informationen mit einer Formulareingabe verknüpfen und sie ebenfalls auslesen lassen möchten. Siehe [WebAIMs Artikel zu erweiterten Formularmarkierungen](https://webaim.org/techniques/forms/advanced) für weitere Details.

Es gibt viele andere nützliche Eigenschaften und Zustände, zum Beispiel zur Anzeige des Status von Formularelementen. Zum Beispiel kann `aria-disabled="true"` verwendet werden, um anzugeben, dass ein Formularfeld deaktiviert ist. Viele Browser überspringen deaktivierte Formularfelder, was dazu führt, dass sie nicht von Screenreadern ausgelesen werden. In einigen Fällen wird ein deaktiviertes Element jedoch erkannt, weshalb es eine gute Idee ist, dieses Attribut hinzuzufügen, um den Screenreader wissen zu lassen, dass ein deaktiviertes Formularelement tatsächlich deaktiviert ist.

Wenn der deaktivierte Status einer Eingabe sich ändern soll, ist es auch eine gute Idee, anzugeben, wann das passiert und was das Ergebnis ist. In unserem [‘form-validation-checkbox-disabled.html’](https://mdn.github.io/learning-area/accessibility/aria/form-validation-checkbox-disabled.html) Demo gibt es ein Kontrollkästchen, das, wenn es markiert ist, eine andere Formulareingabe aktiviert, um weitere Informationen einzugeben. Wir haben einen versteckten Live-Bereich eingerichtet:

```html
<p class="hidden-alert" aria-live="assertive"></p>
```

der mithilfe von absoluter Positionierung versteckt ist. Wenn dies markiert/entmarkiert ist, aktualisieren wir den Text im verborgenen Live-Bereich, um den Screenreader-Nutzern mitzuteilen, was das Ergebnis des Markierens dieses Kontrollkästchens ist, sowie um den `aria-disabled`-Zustand und einige visuelle Indikatoren zu aktualisieren:

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

#### Nicht-semantische Schaltflächen als Schaltflächen beschreiben

Einige Male in diesem Kurs haben wir bereits die native Zugänglichkeit von (und die Zugänglichkeitsprobleme hinter der Verwendung anderer Elemente zum Fälschen von) Schaltflächen, Links oder Formularelementen erwähnt (siehe [Verwendung semantischer UI-Steuerelemente, wo möglich](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible) im Artikel zur HTML-Zugänglichkeit, und [Erhöhung der Tastatur-Zugänglichkeit](#verbesserung_der_tastaturzugänglichkeit), oben). Grundsätzlich können Sie in vielen Fällen die Tastaturzugänglichkeit mit `tabindex` und ein wenig JavaScript ohne allzu große Probleme wieder hinzufügen.

Aber was ist mit den Screenreadern? Sie werden die Elemente immer noch nicht als Schaltflächen sehen. Wenn wir unser [`fake-div-buttons.html`](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)-Beispiel in einem Screenreader testen, werden unsere gefälschten Schaltflächen mit Ausdrücken wie „Klicke mich!, Gruppe“ gemeldet, was offensichtlich verwirrend ist.

Das können wir mit einer WAI-ARIA-Rolle beheben. Erstellen Sie eine lokale Kopie von [`fake-div-buttons.html`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) und fügen Sie [`role="button"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) zu jeder Schaltflächen-`<div>`-Element hinzu, zum Beispiel:

```html
<div data-message="This is from the first button" tabindex="0" role="button">
  Click me!
</div>
```

Wenn Sie nun versuchen, dies mit einem Screenreader zu testen, werden Ihnen Schaltflächen mit Ausdrücken wie „Klicke mich!, Schaltfläche“ gemeldet. Während dies viel besser ist, müssen Sie immer noch alle nativen Schaltflächenfunktionen hinzufügen, die Benutzer erwarten, wie die Behandlung von <kbd>Enter</kbd>- und Klick-Events, wie im [`button` Rollen-Dokumentation](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) erklärt.

> [!NOTE]
> Vergessen Sie jedoch nicht, dass die Verwendung des korrekten semantischen Elements, wo immer möglich, immer besser ist. Wenn Sie eine Schaltfläche erstellen möchten und ein {{htmlelement("button")}}-Element verwenden können, sollten Sie ein {{htmlelement("button")}}-Element verwenden!

#### Benutzer durch komplexe Widgets führen

Es gibt eine ganze Reihe anderer [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles), die nicht-semantische Elementstrukturen als gemeinsame UI-Funktionen kennzeichnen können, die über das hinausgehen, was im standardmäßigen HTML verfügbar ist, zum Beispiel [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role), [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role). Sie können sich mehrere nützliche Beispiele in der [Deque University Code-Bibliothek](https://dequeuniversity.com/library/) ansehen, um eine Vorstellung davon zu bekommen, wie solche Steuerungen zugänglich gemacht werden können.

Gehen wir ein eigenes Beispiel durch. Wir kehren zurück zu unserer einfachen absolut positionierten Registerkarten-Oberfläche (siehe [Verstecken von Dingen](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#hiding_things) im Artikel zur CSS- und JavaScript-Zugänglichkeit), das Sie im [Registerkarten-Infobox-Beispiel](/de/docs/Learn_web_development/Core/CSS_layout/Practical_positioning_examples#a_tabbed_info-box).

```html live-sample___aria-tabbed-info-box
<section class="info-box">
  <div role="tablist" class="manual">
    <button
      id="tab-1"
      type="button"
      role="tab"
      aria-selected="true"
      aria-controls="tabpanel-1">
      <span>Tab 1</span>
    </button>
    <button
      id="tab-2"
      type="button"
      role="tab"
      aria-selected="false"
      aria-controls="tabpanel-2"
      tabindex="-1">
      <span>Tab 2</span>
    </button>
    <button
      id="tab-3"
      type="button"
      role="tab"
      aria-selected="false"
      aria-controls="tabpanel-3"
      tabindex="-1">
      <span>Tab 3</span>
    </button>
  </div>
  <div class="panels">
    <article id="tabpanel-1" role="tabpanel" aria-labelledby="tab-1">
      <h2>The first tab</h2>
      <p>This is the content for tab one and is just a paragraph.</p>
    </article>
    <article
      id="tabpanel-2"
      role="tabpanel"
      aria-labelledby="tab-2"
      class="is-hidden">
      <h2>The second tab</h2>
      <p>This is the content for tab two and is just a paragraph.</p>
    </article>
    <article
      id="tabpanel-3"
      role="tabpanel"
      aria-labelledby="tab-3"
      class="is-hidden">
      <h2>The third tab</h2>
      <p>This is the content for tab three and is a paragraph and a list.</p>
      <ul>
        <li>Cat</li>
        <li>Dog</li>
        <li>Horse</li>
      </ul>
    </article>
  </div>
</section>
```

```css live-sample___aria-tabbed-info-box
/* General setup */

html {
  font-family: sans-serif;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

/* info-box setup */

.info-box {
  width: 452px;
  height: 250px;
  margin: 1.25rem auto 0;
}

/* styling info-box tabs */

.info-box [role="tablist"] {
  min-width: 100%;
  display: flex;
}

.info-box [role="tab"] {
  border: none;
  background: white;
  padding: 0 1rem 0 1rem;
  line-height: 3rem;
  color: #b60000;
  font-weight: bold;
  outline: none;
}

.info-box [role="tab"]:focus span,
.info-box [role="tab"]:hover span {
  outline: 1px solid blue;
  outline-offset: 6px;
  border-radius: 4px;
}

.info-box [role="tab"][aria-selected="true"] {
  background-color: #b60000;
  color: white;
}

/* styling info-box panels */

.info-box .panels {
  height: 200px;
  clear: both;
  position: relative;
}

.info-box [role="tabpanel"] {
  color: white;
  position: absolute;
  padding: 0.8rem 1.2rem;
  height: 200px;
  width: 100%;
  top: 0;
  background-color: #b60000;
  left: 0;
}

.info-box [role="tabpanel"].is-hidden {
  display: none;
}
```

```js live-sample___aria-tabbed-info-box
class TabsManual {
  constructor(groupNode) {
    this.tablistNode = groupNode;

    this.tabs = [];

    this.firstTab = null;
    this.lastTab = null;

    this.tabs = Array.from(this.tablistNode.querySelectorAll("[role=tab]"));
    this.tabpanels = [];

    for (let i = 0; i < this.tabs.length; i += 1) {
      const tab = this.tabs[i];
      const tabpanel = document.getElementById(
        tab.getAttribute("aria-controls"),
      );

      tab.tabIndex = -1;
      tab.setAttribute("aria-selected", "false");
      this.tabpanels.push(tabpanel);

      tab.addEventListener("keydown", this.onKeydown.bind(this));
      tab.addEventListener("click", this.onClick.bind(this));

      this.firstTab ??= tab;
      this.lastTab = tab;
    }

    this.setSelectedTab(this.firstTab);
  }

  setSelectedTab(currentTab) {
    for (let i = 0; i < this.tabs.length; i += 1) {
      const tab = this.tabs[i];
      if (currentTab === tab) {
        tab.setAttribute("aria-selected", "true");
        tab.removeAttribute("tabindex");
        this.tabpanels[i].classList.remove("is-hidden");
      } else {
        tab.setAttribute("aria-selected", "false");
        tab.tabIndex = -1;
        this.tabpanels[i].classList.add("is-hidden");
      }
    }
  }

  moveFocusToTab(currentTab) {
    currentTab.focus();
  }

  moveFocusToPreviousTab(currentTab) {
    let index;

    if (currentTab === this.firstTab) {
      this.moveFocusToTab(this.lastTab);
    } else {
      index = this.tabs.indexOf(currentTab);
      this.moveFocusToTab(this.tabs[index - 1]);
    }
  }

  moveFocusToNextTab(currentTab) {
    let index;

    if (currentTab === this.lastTab) {
      this.moveFocusToTab(this.firstTab);
    } else {
      index = this.tabs.indexOf(currentTab);
      this.moveFocusToTab(this.tabs[index + 1]);
    }
  }

  /* EVENT HANDLERS */

  onKeydown(event) {
    const tgt = event.currentTarget;
    let flag = false;

    switch (event.key) {
      case "ArrowLeft":
        this.moveFocusToPreviousTab(tgt);
        flag = true;
        break;

      case "ArrowRight":
        this.moveFocusToNextTab(tgt);
        flag = true;
        break;

      case "Home":
        this.moveFocusToTab(this.firstTab);
        flag = true;
        break;

      case "End":
        this.moveFocusToTab(this.lastTab);
        flag = true;
        break;

      default:
        break;
    }

    if (flag) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  // Since this example uses buttons for the tabs, the click onr also is activated
  // with the space and enter keys
  onClick(event) {
    this.setSelectedTab(event.currentTarget);
  }
}

// Initialize tablist

window.addEventListener("load", function () {
  const tablists = document.querySelectorAll("[role=tablist].manual");
  for (let i = 0; i < tablists.length; i++) {
    new TabsManual(tablists[i]);
  }
});
```

{{EmbedLiveSample("aria-tabbed-info-box", "100", "270")}}

In diesem Beispiel haben wir eine Kombination aus semantischen Elementen, aria-Rollen und aria-Attributen verwendet. Das erste davon ist, dass wir ein {{htmlelement("button")}} Element als _Tab_ verwendet haben, das bedeutet, dass das Tab sowohl über einen Mausklick ausgewählt werden kann als auch über die Tastatur mittels der Leer- oder Eingabetaste.

ARIA-Funktionen, die verwendet werden, umfassen:

- Neue Rollen — [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role), [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role)
  - : Diese identifizieren die wichtigen Bereiche der Registerkarten-Oberfläche — die Container für die Registerkarten, die Registerkarten selbst, und die entsprechenden Tabpanels.
- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
  - : Definiert, welcher Tab gerade ausgewählt ist. Wenn unterschiedliche Tabs vom Benutzer ausgewählt werden, wird der Wert dieses Attributs auf den verschiedenen Tabs via JavaScript aktualisiert.
- `tabindex="-1"`
  - : `tabindex="-1"` nimmt das Element aus der Tabulator-Reihenfolge. Da wir JavaScript verwenden, um den Tab-Nutzer zu ermöglichen, die Tabs über die Tastatur oder die Maus zu steuern, wollen wir nicht, dass der Nutzer die Tab-Taste verwenden kann, um auf die Schaltflächen zuzugreifen.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Dieses Attribut identifiziert ein Element (anhand seiner `id`), das das Element bezeichnet, in diesem Beispiel wird das `<article>` durch das entsprechende Tab oder `<button>` bezeichnet.
- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Properties/aria-controls)
  - : Dieses Attribut identifiziert ein Element (anhand seiner `id`), das von diesem Element gesteuert wird, in diesem Beispiel das `<article>`, das durch das entsprechende Tab oder `<button>` gesteuert wird.

Wir hätten `aria-hidden` verwenden können, um den Inhalt der Tab-Panels vor unterstützenden Technologien zu verstecken. Aber wenn dieser Inhalt fokussierbare Inhalte wie Links enthalten würde, könnte der Benutzer trotzdem zu diesem Inhalt tabben, selbst wenn `aria-hidden=true` für die nicht-aktiven Panels gesetzt ist. In diesem Beispiel haben wir `class="is-hidden"` zu den Panels angewendet, die den Tabs mit `aria-selected="false"` entsprechen, und CSS verwenden, um `display: none;` festzulegen, das verhindert, dass auf den versteckten Inhalt per Tab zugegriffen wird.

Unsere Tests haben gezeigt, dass diese neue Struktur die Dinge insgesamt verbessert hat. Die `<button>`s werden jetzt als Tabs (z.B. wird "Tab" vom Screenreader angesagt) erkannt, das ausgewählte Tab wird durch "ausgewählt" mit dem Tab-Namen angegeben und jeder Inhalt, der nicht angezeigt wird, kann nicht erfasst werden. Der Benutzer kann auch die Registerkarten mit der Tastatur oder der Maus navigieren.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, dass Sie diese Informationen behalten haben, bevor Sie weitermachen – siehe [Test your skills: WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA).

## Zusammenfassung

Dieser Artikel hat bei weitem nicht alles abgedeckt, was es in WAI-ARIA gibt, aber es sollte Ihnen genug Informationen gegeben haben, um zu verstehen, wie Sie es verwenden, und einige der häufigsten Muster zu kennen, die es erfordern.

## Siehe auch

- [Aria-Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes): Alle `aria-*` Attribute
- [WAI-ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles): Kategorien von ARIA-Rollen und die Rollen, die auf MDN behandelt werden
- [ARIA in HTML](https://www.w3.org/TR/html-aria/) auf W3C: Eine Spezifikation, die für jedes HTML-Feature die Zugänglichkeit (ARIA)-Semantik definiert, die Browser implizit darauf anwenden und die WAI-ARIA-Features enthält, die Sie darauf setzen können, wenn zusätzliche Semantiken erforderlich sind
- [Deque university code library](https://dequeuniversity.com/library/): Eine Bibliothek mit wirklich nützlichen und praktischen Beispielen, die komplexe Benutzeroberflächensteuerungen zugänglich machen mithilfe von WAI-ARIA-Features
- [WAI-ARIA-Beschreibungspraxen](https://www.w3.org/WAI/ARIA/apg/) auf W3C: Ein sehr detailliertes Designmuster vom W3C, das erklärt, wie verschiedene Arten von komplexen UI-Steuerungen implementiert werden können, während sie mit WAI-ARIA-Features zugänglich gemacht werden

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility")}}
