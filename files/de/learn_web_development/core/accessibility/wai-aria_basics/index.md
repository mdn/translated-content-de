---
title: WAI-ARIA-Grundlagen
short-title: WAI-ARIA
slug: Learn_web_development/Core/Accessibility/WAI-ARIA_basics
l10n:
  sourceCommit: bfead5c281d92a213f0191746fd98a6bdc4dc457
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA", "Learn_web_development/Core/Accessibility")}}

Wie im vorherigen Artikel angesprochen, kann es schwierig sein, komplexe UI-Steuerelemente zu erstellen, die nicht semantisches HTML und dynamische, durch JavaScript aktualisierte Inhalte verwenden. WAI-ARIA kann bei solchen Problemen helfen: Es ergänzt semantische Informationen, die Browser und assistive Technologien erkennen und nutzen können, um Nutzern zu vermitteln, was geschieht. Hier zeigen wir, wie Sie WAI-ARIA auf grundlegender Ebene einsetzen, um die Barrierefreiheit zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und bewährten Verfahren für Barrierefreiheit, wie sie in den vorherigen Lektionen dieses Moduls vermittelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von WAI-ARIA: nicht semantischem HTML eine Semantik zu geben, damit Nutzer assistiver Technologien die ihnen präsentierten Oberflächen verstehen können.</li>
          <li>Die grundlegende Syntax: Rollen, Eigenschaften und Zustände.</li>
          <li>Landmarks und Orientierungspunkte.</li>
          <li>Die Verbesserung der Tastaturzugänglichkeit.</li>
          <li>Das Ankündigen dynamischer Inhaltsaktualisierungen mit Live-Regionen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist WAI-ARIA?

Sehen wir uns zunächst an, was WAI-ARIA ist und was es leisten kann.

### Eine ganze Reihe neuer Probleme

Als Web-Apps komplexer und dynamischer wurden, entstanden neue Anforderungen und Probleme im Bereich der Barrierefreiheit.

HTML führte beispielsweise mehrere semantische Elemente ein, um häufige Bereiche einer Seite zu kennzeichnen ({{htmlelement("nav")}}, {{htmlelement("footer")}} usw.). Bevor diese verfügbar waren, verwendeten Entwickler {{htmlelement("div")}}-Elemente mit IDs oder Klassen, etwa `<div class="nav">`. Das war problematisch, weil sich ein bestimmter Seitenbereich wie die Hauptnavigation nicht ohne Weiteres programmatisch finden ließ.

Eine erste Lösung bestand darin, am Anfang der Seite einen oder mehrere versteckte Links einzufügen, die zur Navigation oder zu anderen Bereichen führten, zum Beispiel:

```html
<a href="#hidden" class="hidden">Skip to navigation</a>
```

Das ist jedoch immer noch nicht besonders präzise und funktioniert nur, wenn der Screenreader die Seite von Anfang an liest.

Ein weiteres Beispiel sind komplexe Steuerelemente in Apps, etwa Datumsauswahlfelder oder Schieberegler zur Auswahl von Werten. HTML bietet spezielle Eingabetypen, um solche Steuerelemente darzustellen:

```html
<input type="date" /> <input type="range" />
```

Diese wurden ursprünglich nicht gut unterstützt. Außerdem war und ist es, wenn auch inzwischen in geringerem Maße, schwierig, ihr Erscheinungsbild anzupassen. Deshalb entschieden sich Designer und Entwickler häufig für eigene Lösungen. Statt diese nativen Funktionen zu verwenden, setzen manche Entwickler auf JavaScript-Bibliotheken, die solche Steuerelemente als Reihe verschachtelter {{htmlelement("div")}}-Elemente erzeugen. Diese werden anschließend mit CSS gestaltet und mit JavaScript gesteuert.

Das Problem dabei: Visuell funktionieren sie, aber Screenreader können nicht erkennen, worum es sich handelt. Ihren Nutzern wird lediglich eine Ansammlung von Elementen ohne Semantik präsentiert, die deren Bedeutung erklärt.

### Hier kommt WAI-ARIA ins Spiel

[WAI-ARIA](https://w3c.github.io/aria/) (Web Accessibility Initiative – Accessible Rich Internet Applications) ist eine vom W3C verfasste Spezifikation. Sie definiert zusätzliche HTML-Attribute, die Elementen weitere Semantik verleihen und die Barrierefreiheit dort verbessern können, wo sie fehlt. Die Spezifikation definiert drei Hauptbestandteile:

- [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Sie legen fest, was ein Element ist oder tut. Viele davon sind sogenannte Landmark-Rollen. Sie entsprechen weitgehend der Semantik struktureller Elemente, etwa `role="navigation"` ({{htmlelement("nav")}}), `role="banner"` ({{htmlelement("header")}} des Dokuments), `role="complementary"` ({{htmlelement("aside")}}) oder `role="search"` ({{htmlelement("search")}}). Andere Rollen beschreiben Seitenstrukturen, für die es kein entsprechendes HTML-Element gibt, beispielsweise `role="tablist"` und `role="tabpanel"`, die häufig in Benutzeroberflächen vorkommen.
- Eigenschaften
  - : Sie beschreiben Merkmale von Elementen und können ihnen zusätzliche Bedeutung oder Semantik verleihen. Beispielsweise gibt `aria-required="true"` an, dass eine Formulareingabe ausgefüllt werden muss, damit sie gültig ist. Mit `aria-labelledby="label"` können Sie einem Element eine ID zuweisen und dieses Element dann als Beschriftung für andere Elemente auf der Seite referenzieren – auch für mehrere zugleich. Das ist mit `<label for="input">` nicht möglich. Sie könnten `aria-labelledby` beispielsweise verwenden, um eine wichtige Beschreibung in einem {{htmlelement("div")}} als Beschriftung für mehrere Tabellenzellen festzulegen. Ebenso lässt sich damit vorhandener Text auf der Seite als Alternativtext für ein Bild verwenden, statt ihn im `alt`-Attribut zu wiederholen. Ein Beispiel finden Sie unter [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives).
- Zustände
  - : Das sind spezielle Eigenschaften, die den aktuellen Zustand eines Elements beschreiben. Beispielsweise teilt `aria-disabled="true"` einem Screenreader mit, dass eine Formulareingabe derzeit deaktiviert ist. Anders als Eigenschaften, die sich während der Laufzeit einer App nicht ändern, können sich Zustände ändern – normalerweise programmatisch über JavaScript.

Wichtig ist: WAI-ARIA-Attribute ändern an der Webseite nichts außer den Informationen, die über die Accessibility-APIs des Browsers bereitgestellt werden. Aus diesen APIs beziehen Screenreader ihre Informationen. WAI-ARIA verändert weder die Seitenstruktur noch das DOM. Die Attribute können allerdings nützlich sein, um Elemente mit CSS auszuwählen.

> [!NOTE]
> Eine hilfreiche Liste aller ARIA-Rollen und ihrer Verwendungszwecke mit Links zu weiterführenden Informationen finden Sie in der WAI-ARIA-Spezifikation unter [Definition of Roles](https://w3c.github.io/aria/#role_definitions) sowie auf dieser Website unter [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles).
>
> Die Spezifikation enthält außerdem eine Liste aller Eigenschaften und Zustände mit Links zu weiterführenden Informationen: [Definitions of States and Properties (alle `aria-*`-Attribute)](https://w3c.github.io/aria/#state_prop_def).

## Wo wird WAI-ARIA unterstützt?

Diese Frage ist nicht einfach zu beantworten. Es ist schwierig, eine abschließende Quelle dafür zu finden, welche WAI-ARIA-Funktionen wo unterstützt werden, denn:

1. Die WAI-ARIA-Spezifikation umfasst viele Funktionen.
2. Es gibt zahlreiche Kombinationen aus Betriebssystemen, Browsern und Screenreadern zu berücksichtigen.

Der zweite Punkt ist entscheidend: Damit ein Screenreader überhaupt verwendet werden kann, muss das Betriebssystem Browser unterstützen, die über die erforderlichen Accessibility-APIs verfügen und die benötigten Informationen bereitstellen. Für die meisten verbreiteten Betriebssysteme gibt es ein oder zwei Browser, mit denen Screenreader zusammenarbeiten können.

Darüber hinaus müssen die betreffenden Browser ARIA-Funktionen unterstützen und über ihre APIs bereitstellen. Ebenso müssen Screenreader diese Informationen erkennen und ihren Nutzern sinnvoll vermitteln.

1. Die Browser-Unterstützung ist nahezu universell.
2. Die Unterstützung von ARIA-Funktionen durch Screenreader ist noch nicht ganz so umfassend, aber die verbreitetsten Screenreader kommen diesem Stand näher. Einen Eindruck vom Unterstützungsgrad vermittelt der Powermapper-Artikel [WAI-ARIA Screen reader compatibility](https://www.powermapper.com/tests/screen-readers/aria/).

In diesem Artikel versuchen wir nicht, jede WAI-ARIA-Funktion und ihre genaue Unterstützung abzudecken. Stattdessen behandeln wir die wichtigsten Funktionen, die Sie kennen sollten. Wenn wir keine Einschränkungen bei der Unterstützung erwähnen, können Sie davon ausgehen, dass die Funktion gut unterstützt wird. Ausnahmen weisen wir ausdrücklich aus.

> [!NOTE]
> Einige JavaScript-Bibliotheken unterstützen WAI-ARIA. Wenn sie UI-Funktionen wie komplexe Formularsteuerelemente erzeugen, fügen sie also ARIA-Attribute hinzu, um deren Barrierefreiheit zu verbessern. Wenn Sie eine JavaScript-Lösung eines Drittanbieters für die schnelle Entwicklung einer Benutzeroberfläche suchen, sollten Sie die Barrierefreiheit ihrer UI-Widgets unbedingt als wichtiges Auswahlkriterium berücksichtigen. Gute Beispiele sind jQuery UI (siehe [About jQuery UI: Deep accessibility support](https://jqueryui.com/about/#deep-accessibility-support)), [ExtJS](https://www.sencha.com/products/extjs/) und [Dojo/Dijit](https://dojotoolkit.org/reference-guide/1.10/dijit/a11y/statement.html).

## Wann sollten Sie WAI-ARIA verwenden?

Einige der Probleme, die zur Entwicklung von WAI-ARIA geführt haben, haben wir bereits angesprochen. Im Wesentlichen ist WAI-ARIA in vier Bereichen nützlich:

- Orientierungspunkte/Landmarks
  - : Die Werte des ARIA-Attributs [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) können als Landmarks dienen. Sie können die Semantik von HTML-Elementen wie {{htmlelement("nav")}} nachbilden oder über die HTML-Semantik hinaus Orientierung für verschiedene Funktionsbereiche bieten, etwa mit `search`, `tablist`, `tab` oder `listbox`.
- Dynamische Inhaltsaktualisierungen
  - : Screenreader haben oft Schwierigkeiten, sich ständig ändernde Inhalte zu melden. Mit `aria-live` können wir Screenreader-Nutzer darüber informieren, wenn ein Inhaltsbereich dynamisch aktualisiert wird – beispielsweise wenn JavaScript auf der Seite [neue Inhalte vom Server abruft und das DOM aktualisiert](/de/docs/Learn_web_development/Core/Scripting/Network_requests).
- Verbesserung der Tastaturzugänglichkeit
  - : Einige HTML-Elemente sind von Haus aus per Tastatur zugänglich. Werden andere Elemente zusammen mit JavaScript verwendet, um ähnliche Interaktionen nachzubilden, leiden darunter die Tastaturzugänglichkeit und die Ausgabe durch Screenreader. Wo sich das nicht vermeiden lässt, bietet WAI-ARIA eine Möglichkeit, andere Elemente fokussierbar zu machen (mit `tabindex`).
- Barrierefreiheit nicht semantischer Steuerelemente
  - : Werden verschachtelte `<div>`-Elemente zusammen mit CSS und JavaScript verwendet, um eine komplexe UI-Funktion zu erstellen, oder wird ein natives Steuerelement durch JavaScript stark erweitert oder verändert, kann die Barrierefreiheit leiden. Ohne Semantik oder andere Hinweise fällt es Screenreader-Nutzern schwer zu erkennen, was die Funktion bewirkt. In solchen Fällen kann ARIA die fehlenden Informationen ergänzen: Rollen wie `button`, `listbox` oder `tablist` und Eigenschaften wie `aria-required` oder `aria-posinset` geben weitere Hinweise auf die Funktionalität.

Im nächsten Abschnitt sehen wir uns diese vier Bereiche anhand von Beispielen genauer an. Bevor Sie weiterlesen, sollten Sie eine Testumgebung mit einem Screenreader einrichten, damit Sie die Beispiele ausprobieren können. Weitere Informationen finden Sie in unserem Abschnitt zum [Testen mit Screenreadern](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers).

> [!CALLOUT]
>
> **Verwenden Sie WAI-ARIA nur, wenn Sie es brauchen!**
>
> Durch die Verwendung der richtigen HTML-Elemente erhalten Sie die benötigten Rollen automatisch. Sie sollten _immer_ [native HTML-Funktionen](/de/docs/Learn_web_development/Core/Accessibility/HTML) verwenden, um Screenreadern die erforderliche Semantik bereitzustellen. Nur so können sie ihren Nutzern vermitteln, was geschieht. Manchmal ist das nicht möglich – etwa weil Sie nur begrenzte Kontrolle über den Code haben oder weil Sie etwas Komplexes erstellen, für das es kein passendes HTML-Element gibt. In solchen Fällen kann WAI-ARIA ein wertvolles Werkzeug zur Verbesserung der Barrierefreiheit sein.
>
> Aber noch einmal: Verwenden Sie es nur, wenn es nötig ist!
>
> Testen Sie Ihre Website möglichst auch mit unterschiedlichen _echten_ Nutzern – mit Menschen ohne Behinderung, mit Screenreader-Nutzern, mit Menschen, die per Tastatur navigieren, und so weiter. Sie können besser beurteilen, wie gut die Website für sie funktioniert.

## Orientierungspunkte/Landmarks

WAI-ARIA ergänzt das [`role`-Attribut](https://w3c.github.io/aria/#role_definitions), mit dem Sie Elementen Ihrer Website bei Bedarf zusätzliche semantische Bedeutung geben können. Ein wichtiger Einsatzbereich ist die Bereitstellung von Informationen für Screenreader, damit ihre Nutzer häufige Seitenbereiche finden können. Dieses Beispiel hat die folgende Struktur:

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

    <!-- A search box is another common non-linear way to navigate through a website. -->

    <div class="search-controls">
      <input type="search" name="q" placeholder="Search query" />
      <input type="button" value="Go!" />
    </div>
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

nav .search-controls,
nav search {
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

input[type="button"] {
  flex: 1;
  margin-left: 1rem;
  background: #333333;
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

Wenn Sie das Beispiel mit einem Screenreader in einem modernen Browser testen, erhalten Sie bereits einige nützliche Informationen. VoiceOver gibt beispielsweise Folgendes aus:

- Für das `<header>`-Element: „banner, 2 items“ (es enthält eine Überschrift und das `<nav>`-Element).
- Für das `<nav>`-Element: „navigation 2 items“ (es enthält eine Liste und Suchsteuerelemente).
- Für das `<main>`-Element: „main 2 items“ (es enthält einen Artikel und ein Aside).
- Für das `<aside>`-Element: „complementary 2 items“ (es enthält eine Überschrift und eine Liste).
- Für das Sucheingabefeld: „Search query, insertion at beginning of text“.
- Für das `<footer>`-Element: „footer 1 item“.

Wenn Sie das Landmarks-Menü von VoiceOver öffnen (mit der VoiceOver-Taste + U und anschließend den Pfeiltasten, um durch die Menüoptionen zu navigieren), sehen Sie, dass die meisten Elemente übersichtlich aufgeführt sind und schnell angesteuert werden können.

![Das VoiceOver-Menü auf einem Mac für den schnellen Zugriff auf barrierefreie Bereiche. Es zeigt die Landmarks-Überschrift und eine Liste mit Banner, Navigation, Hauptbereich und ergänzendem Bereich.](landmarks-list.png)

Hier können wir allerdings noch etwas verbessern. Der Suchbereich ist eine wichtige Landmark, die Nutzer finden möchten. Er erscheint jedoch nicht im Landmarks-Menü und wird nicht als eigenständiger Orientierungspunkt behandelt. Lediglich das Eingabefeld selbst wird als Sucheingabe angekündigt (`<input type="search">`).

Um den Suchbereich als Landmark zu kennzeichnen, können Sie ihn entweder mit dem Element {{htmlelement("search")}} umschließen oder ihm die ARIA-Rolle `role="search"` geben. Verwenden Sie grundsätzlich nach Möglichkeit HTML-Semantik und greifen Sie nur dann auf ARIA zurück, wenn es kein entsprechendes HTML-Element gibt.

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

    <!-- A search box is another common non-linear way to navigate through a website. -->

    <search>
      <input
        type="search"
        name="q"
        placeholder="Search query"
        aria-label="Search through site content" />
      <input type="button" value="Go!" />
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

nav .search-controls,
nav search {
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

input[type="button"] {
  flex: 1;
  margin-left: 1rem;
  background: #333333;
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

Entscheidend ist, dass wir semantisches HTML verwendet haben. Es verleiht der Seitenstruktur Bedeutung und Rollen, ohne unserer HTML-Struktur unnötige [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)-Attribute hinzuzufügen. Die Struktur sieht etwa so aus:

```html
<header>
  <h1>…</h1>
  <nav>
    <ul>
      …
    </ul>
    <search>
      <!-- search controls -->
    </search>
  </nav>
</header>

<main>
  <article>…</article>
  <aside>…</aside>
</main>

<footer>…</footer>
```

Dieses Beispiel enthält noch eine zusätzliche Funktion: Das {{htmlelement("input")}}-Element hat das Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) erhalten. Es stellt eine beschreibende Beschriftung bereit, die ein Screenreader vorliest, obwohl wir kein {{htmlelement("label")}}-Element eingefügt haben. In solchen Fällen ist das sehr nützlich: Ein Suchformular wie dieses ist weitverbreitet und leicht zu erkennen; eine sichtbare Beschriftung würde das Seitendesign beeinträchtigen.

```html
<input
  type="search"
  name="q"
  placeholder="Search query"
  aria-label="Search through site content" />
```

Wenn wir dieses Beispiel nun mit VoiceOver untersuchen, zeigen sich einige Verbesserungen:

- Der Suchbereich wird sowohl beim Navigieren durch die Seite als auch im Landmarks-Menü als eigener Eintrag angekündigt.
- Der Text im Attribut `aria-label` wird vorgelesen, wenn das Formulareingabefeld den Fokus erhält.

Wenn Sie ältere Browser wie IE8 unterstützen müssen, lohnt es sich, dafür ARIA-Rollen anzugeben. Und falls Ihre Website aus irgendeinem Grund ausschließlich mit `<div>`-Elementen aufgebaut ist, sollten Sie unbedingt ARIA-Rollen ergänzen, um die dringend benötigte Semantik bereitzustellen!

Im Folgenden erfahren Sie mehr über diese Semantik und die Möglichkeiten von ARIA-Eigenschaften und -Attributen, insbesondere im Abschnitt [Barrierefreiheit nicht semantischer Steuerelemente](#barrierefreiheit_nicht_semantischer_steuerelemente). Sehen wir uns zunächst an, wie ARIA bei dynamischen Inhaltsaktualisierungen hilft.

## Dynamische Inhaltsaktualisierungen

Auf Inhalte, die in das DOM geladen wurden, können Screenreader leicht zugreifen – von Text bis hin zu Alternativtext für Bilder. Traditionelle statische Websites, die überwiegend aus Text bestehen, lassen sich daher für Menschen mit Sehbeeinträchtigungen vergleichsweise leicht zugänglich gestalten.

Moderne Web-Apps bestehen jedoch häufig nicht nur aus statischem Text. Sie aktualisieren Teile der Seite, indem sie neue Inhalte vom Server abrufen (in diesem Beispiel verwenden wir ein statisches Array mit Zitaten) und das DOM ändern. Solche Bereiche werden manchmal als **Live-Regionen** bezeichnet.

Sehen wir uns ein Beispiel an: einen Generator für zufällige Zitate.

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
  background: #666666;
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

Das funktioniert zwar, ist aber nicht gut für die Barrierefreiheit: Screenreader erkennen die Inhaltsänderung nicht, sodass ihre Nutzer nicht erfahren, was geschieht. Dieses Beispiel ist recht einfach. Stellen Sie sich jedoch eine komplexe Benutzeroberfläche mit vielen sich ständig aktualisierenden Inhalten vor – etwa einen Chatraum, die Oberfläche eines Strategiespiels oder eine laufend aktualisierte Warenkorbanzeige. Ohne eine Möglichkeit, Nutzer auf Änderungen aufmerksam zu machen, wäre die App kaum sinnvoll nutzbar.

Zum Glück bietet WAI-ARIA dafür einen Mechanismus: die Eigenschaft [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live). Wird sie auf ein Element angewendet, lesen Screenreader aktualisierte Inhalte vor. Wie dringend die Aktualisierung angekündigt wird, hängt vom Attributwert ab:

- `off`
  - : Der Standardwert. Aktualisierungen sollen nicht angekündigt werden.
- `polite`
  - : Aktualisierungen sollen nur angekündigt werden, wenn der Nutzer gerade nicht aktiv ist.
- `assertive`
  - : Aktualisierungen sollen dem Nutzer so schnell wie möglich angekündigt werden.

Hier ändern wir das öffnende `<blockquote>`-Tag wie folgt:

```html
<blockquote aria-live="assertive">…</blockquote>
```

Dadurch liest ein Screenreader den Inhalt vor, wenn er aktualisiert wird. Testen Sie die aktualisierte Live-Version:

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
> Es gibt weitere ARIA-Eigenschaften im Zusammenhang mit `aria-live`, die Sie kennen sollten:
>
> - Wenn die Eigenschaft [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic) auf `true` gesetzt ist, weist sie Screenreader an, den gesamten Inhalt eines Elements als Einheit vorzulesen – nicht nur die aktualisierten Teile. Das ist nützlich, wenn sich nur der Inhalt eines Abschnitts ändert, Sie aber bei jeder Änderung auch dessen Überschrift vorlesen lassen möchten, um den Nutzer an den Kontext zu erinnern.
> - Mit der Eigenschaft [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant) können Sie steuern, was bei der Aktualisierung einer Live-Region vorgelesen wird. Beispielsweise können Sie festlegen, dass nur hinzugefügte oder entfernte Inhalte angekündigt werden.

## Verbesserung der Tastaturzugänglichkeit

Wie bereits an anderen Stellen dieses Moduls besprochen, ist eine der Stärken von HTML im Hinblick auf die Barrierefreiheit die integrierte Tastaturzugänglichkeit von Buttons, Formularsteuerelementen und Links. In der Regel können Sie mit der Tabulatortaste zwischen Steuerelementen wechseln und sie mit der Eingabetaste auswählen oder aktivieren. Gelegentlich werden weitere Tasten benötigt, beispielsweise die Pfeiltasten nach oben und unten, um zwischen Optionen in einem `<select>`-Feld zu wechseln.

Manchmal müssen Sie jedoch Code schreiben, der nicht semantische Elemente als Buttons oder andere Steuerelemente verwendet. In anderen Fällen werden fokussierbare Steuerelemente für einen Zweck eingesetzt, für den sie nicht ganz geeignet sind. Vielleicht müssen Sie übernommenen Code korrigieren oder ein komplexes Widget erstellen, das dies erfordert.

Um normalerweise nicht fokussierbare Elemente fokussierbar zu machen, erweitert WAI-ARIA die Nutzung des Attributs `tabindex` um folgende Werte:

- `tabindex="0"` — wie oben erwähnt, können damit Elemente per Tabulatortaste angesteuert werden, bei denen das normalerweise nicht möglich ist. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — damit können normalerweise nicht per Tabulatortaste ansteuerbare Elemente programmatisch den Fokus erhalten, beispielsweise über JavaScript oder als Ziel eines Links.

In unserem Artikel zur Barrierefreiheit von HTML haben wir dies ausführlicher besprochen und eine typische Umsetzung gezeigt: [Tastaturzugänglichkeit wiederherstellen](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in).

## Barrierefreiheit nicht semantischer Steuerelemente

Dieser Abschnitt knüpft an den vorherigen an: Wenn verschachtelte `<div>`-Elemente zusammen mit CSS und JavaScript eine komplexe UI-Funktion bilden oder ein natives Steuerelement durch JavaScript stark erweitert oder verändert wird, kann nicht nur die Tastaturzugänglichkeit leiden. Auch Screenreader-Nutzern fällt es ohne Semantik oder andere Hinweise schwer zu erkennen, was die Funktion bewirkt. In solchen Situationen kann ARIA die fehlende Semantik bereitstellen.

### Formularvalidierung und Fehlermeldungen

Kehren wir zunächst zu dem Formularbeispiel aus unserem Artikel zur Barrierefreiheit von CSS und JavaScript zurück (eine ausführliche Wiederholung finden Sie unter [Unaufdringlich bleiben](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#keeping_it_unobtrusive)). Am Ende dieses Abschnitts haben wir einige ARIA-Attribute zum Bereich für Fehlermeldungen hinzugefügt, der beim Absenden des Formulars Validierungsfehler anzeigt:

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

- [`role="alert"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) macht das Element automatisch zu einer Live-Region, sodass Änderungen vorgelesen werden. Zugleich kennzeichnet die Rolle das Element semantisch als Warnmeldung mit wichtigen zeit- oder kontextabhängigen Informationen. So lassen sich Warnungen zugänglicher vermitteln als mit modalen Dialogen wie Aufrufen von [`alert()`](/de/docs/Web/API/Window/alert), die verschiedene Probleme bei der Barrierefreiheit verursachen. Siehe dazu [Popup Windows](https://webaim.org/techniques/javascript/other#popups) von WebAIM.
- Der Wert `all` für [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant) weist den Screenreader an, den Inhalt der Fehlerliste vorzulesen, sobald sich etwas daran ändert – also wenn Fehler hinzugefügt oder entfernt werden. Das ist hilfreich, weil der Nutzer wissen möchte, welche Fehler noch vorhanden sind, und nicht nur, was zur Liste hinzugefügt oder daraus entfernt wurde.

Wir könnten ARIA noch weiter einsetzen und zusätzliche Hilfen für die Validierung anbieten. Wie wäre es, Pflichtfelder zu kennzeichnen und den zulässigen Altersbereich anzugeben?

1. Erstellen Sie zunächst lokale Kopien der Dateien [`form-validation.html`](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html) und [`validation.js`](https://github.com/mdn/learning-area/blob/main/accessibility/css/validation.js).
2. Öffnen Sie beide Dateien in einem Texteditor und sehen Sie sich an, wie der Code funktioniert.
3. Fügen Sie direkt vor dem öffnenden `<form>`-Tag einen Absatz wie den folgenden ein und kennzeichnen Sie beide `<label>`-Elemente des Formulars mit einem Sternchen. So werden Pflichtfelder üblicherweise für sehende Nutzer markiert.

   ```html
   <p>Fields marked with an asterisk (*) are required.</p>
   ```

4. Visuell ist das verständlich, für Screenreader-Nutzer jedoch nicht so leicht zu erkennen. Zum Glück bietet WAI-ARIA das Attribut [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required). Damit erhalten Screenreader den Hinweis, Nutzern mitzuteilen, dass Formulareingaben ausgefüllt werden müssen. Aktualisieren Sie die `<input>`-Elemente wie folgt:

   ```html
   <input type="text" name="name" id="name" aria-required="true" />

   <input type="number" name="age" id="age" aria-required="true" />
   ```

5. Wenn Sie das Beispiel jetzt speichern und mit einem Screenreader testen, sollten Sie etwas hören wie „Enter your name star, required, edit text“.
6. Es wäre außerdem hilfreich, Screenreader-Nutzern und sehenden Nutzern einen Hinweis auf den erwarteten Alterswert zu geben. Solche Hinweise erscheinen häufig als Tooltip oder Platzhalter im Formularfeld. WAI-ARIA bietet die Eigenschaften [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax), um Mindest- und Höchstwerte anzugeben. Screenreader unterstützen außerdem die nativen Attribute `min` und `max`. Eine weitere gut unterstützte Funktion ist das HTML-Attribut `placeholder`. Es kann eine Nachricht enthalten, die im Eingabefeld erscheint, solange kein Wert eingegeben wurde, und von einigen Screenreadern vorgelesen wird. Aktualisieren Sie Ihr Zahlenfeld wie folgt:

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

Fügen Sie für jede Eingabe immer ein {{HTMLelement('label')}} hinzu. Einige Screenreader kündigen Platzhaltertext zwar an, die meisten jedoch nicht. Als Alternativen für einen zugänglichen Namen eines Formularsteuerelements eignen sich [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) und [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby). Bevorzugt werden sollte jedoch ein `<label>`-Element mit einem `for`-Attribut, da es die Bedienbarkeit für alle Nutzer verbessert – auch für diejenigen, die eine Maus verwenden.

> [!NOTE]
> Das fertige Beispiel können Sie unter [`form-validation-updated.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-updated.html) ausprobieren.

WAI-ARIA ermöglicht außerdem fortgeschrittene Techniken zur Beschriftung von Formularen, die über das klassische {{htmlelement("label")}}-Element hinausgehen. Wir haben bereits besprochen, wie sich mit der Eigenschaft [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) eine Beschriftung bereitstellen lässt, die für sehende Nutzer nicht sichtbar sein soll (siehe oben den Abschnitt [Orientierungspunkte/Landmarks](#signpostslandmarks)). Andere Techniken verwenden Eigenschaften wie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn ein anderes Element als `<label>` als Beschriftung dienen oder dieselbe Beschriftung für mehrere Formulareingaben verwendet werden soll. Mit [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) lassen sich zusätzliche Informationen mit einer Formulareingabe verknüpfen und vorlesen. Weitere Einzelheiten finden Sie im WebAIM-Artikel [Advanced Form Labeling](https://webaim.org/techniques/forms/advanced).

Es gibt noch viele weitere nützliche Eigenschaften und Zustände, um den Status von Formularelementen anzugeben. Beispielsweise kann `aria-disabled="true"` kennzeichnen, dass ein Formularfeld deaktiviert ist. Viele Browser überspringen deaktivierte Formularfelder, sodass Screenreader sie nicht vorlesen. In manchen Fällen wird ein deaktiviertes Element dennoch wahrgenommen. Deshalb ist es sinnvoll, dieses Attribut anzugeben, damit der Screenreader dessen deaktivierten Zustand erkennt.

Wenn sich der deaktivierte Zustand einer Eingabe voraussichtlich ändert, sollten Sie auch mitteilen, wann dies geschieht und was die Änderung bewirkt. In unserer Demo [`form-validation-checkbox-disabled.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-checkbox-disabled.html) gibt es beispielsweise eine Checkbox, die beim Aktivieren eine weitere Formulareingabe für zusätzliche Informationen freischaltet. Außerdem haben wir eine Live-Region eingerichtet, die durch absolute Positionierung visuell verborgen ist:

```html
<p class="hidden-alert" aria-live="assertive"></p>
```

Wenn die Checkbox aktiviert oder deaktiviert wird, aktualisieren wir den Text in der verborgenen Live-Region. So erfahren Screenreader-Nutzer, welche Auswirkung die Aktion hat. Gleichzeitig aktualisieren wir den Zustand `aria-disabled` und einige visuelle Hinweise:

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
    instrument.label.style.color = "#999999";
    instrument.input.setAttribute("aria-disabled", "true");
    instrument.input.removeAttribute("aria-label");
    hiddenAlert.textContent = "Instruments played field now disabled.";
  }
}
```

### Nicht semantische Buttons als Buttons kennzeichnen

In diesem Kurs haben wir bereits mehrfach die native Barrierefreiheit von Buttons, Links und Formularelementen sowie die Probleme angesprochen, die entstehen, wenn andere Elemente diese nachahmen. Siehe [Nach Möglichkeit semantische UI-Steuerelemente verwenden](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible) im Artikel zur Barrierefreiheit von HTML und oben [Verbesserung der Tastaturzugänglichkeit](#verbesserung_der_tastaturzugänglichkeit). In vielen Fällen lässt sich die Tastaturzugänglichkeit mit `tabindex` und etwas JavaScript ohne allzu großen Aufwand wiederherstellen.

Aber was ist mit Screenreadern? Sie erkennen die Elemente weiterhin nicht als Buttons. Wenn wir unser Beispiel [`fake-div-buttons.html`](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) mit einem Screenreader testen, werden die nachgebildeten Buttons etwa als „Click me!, group“ angekündigt. Das ist verständlicherweise verwirrend.

Mit einer WAI-ARIA-Rolle können wir das beheben. Erstellen Sie eine lokale Kopie von [`fake-div-buttons.html`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) und fügen Sie jedem als Button verwendeten `<div>` die Rolle [`role="button"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) hinzu, zum Beispiel:

```html
<div data-message="This is from the first button" tabindex="0" role="button">
  Click me!
</div>
```

Wenn Sie das Beispiel nun mit einem Screenreader testen, werden die Buttons etwa als „Click me!, button“ angekündigt. Das ist deutlich besser. Sie müssen allerdings weiterhin alle nativen Button-Funktionen ergänzen, die Nutzer erwarten – etwa die Verarbeitung der <kbd>Eingabetaste</kbd> und von Klickereignissen. Dies wird in der [Dokumentation zur Rolle `button`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) erläutert.

> [!NOTE]
> Vergessen Sie nicht: Nach Möglichkeit ist es immer besser, das passende semantische Element zu verwenden. Wenn Sie einen Button erstellen möchten und dafür ein {{htmlelement("button")}}-Element verwenden können, sollten Sie ein {{htmlelement("button")}}-Element verwenden!

### Nutzer durch komplexe Widgets führen

Es gibt zahlreiche weitere [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles), die nicht semantische Elementstrukturen als gängige UI-Funktionen kennzeichnen können, für die Standard-HTML keine Entsprechung bietet. Beispiele sind [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role) und [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role). Die [Codebibliothek der Deque University](https://dequeuniversity.com/library/) enthält mehrere hilfreiche Beispiele dafür, wie sich solche Steuerelemente barrierefrei gestalten lassen.

Weitere interaktive Beispiele finden Sie in unserer Dokumentation zu [WAI-ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles). Sehen Sie sich beispielsweise unser [Beispiel zur ARIA-Rolle `tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role#example) an. Es erklärt, wie Sie eine barrierefreie Oberfläche mit Tabs umsetzen.

## Zusammenfassung

Dieser Artikel behandelt längst nicht alle Möglichkeiten von WAI-ARIA. Er sollte Ihnen jedoch genügend Informationen vermittelt haben, um WAI-ARIA einzusetzen und einige der häufigsten Muster zu erkennen, bei denen es benötigt wird.

Im nächsten Artikel finden Sie Tests, mit denen Sie überprüfen können, wie gut Sie diese Informationen verstanden und behalten haben.

## Siehe auch

- [ARIA-Zustände und -Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes): Alle `aria-*`-Attribute
- [WAI-ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles): Kategorien von ARIA-Rollen und die auf MDN beschriebenen Rollen
- [ARIA in HTML](https://w3c.github.io/html-aria/) des W3C: Eine Spezifikation, die für jede HTML-Funktion die vom Browser implizit zugewiesene Barrierefreiheitssemantik (ARIA) und die bei Bedarf zusätzlich verwendbaren WAI-ARIA-Funktionen definiert
- [Codebibliothek der Deque University](https://dequeuniversity.com/library/): Eine Sammlung nützlicher und praxisnaher Beispiele, die zeigen, wie komplexe UI-Steuerelemente mithilfe von WAI-ARIA-Funktionen zugänglich gemacht werden
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/) des W3C: Ausführliche Entwurfsmuster des W3C, die erklären, wie sich verschiedene Arten komplexer UI-Steuerelemente mithilfe von WAI-ARIA-Funktionen barrierefrei umsetzen lassen

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA", "Learn_web_development/Core/Accessibility")}}
