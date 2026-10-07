---
title: Grundlagen von WAI-ARIA
short-title: WAI-ARIA
slug: Learn_web_development/Core/Accessibility/WAI-ARIA_basics
l10n:
  sourceCommit: 306f0d17c10c4bfa8179b81fe676102ea0b0b6fa
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA", "Learn_web_development/Core/Accessibility")}}

Wie im vorherigen Artikel beschrieben, kann es schwierig sein, komplexe Bedienelemente mit nicht-semantischem HTML und dynamisch durch JavaScript aktualisierten Inhalten zugänglich zu gestalten. WAI-ARIA kann dabei helfen: Es ergänzt Semantik, die Browser und assistive Technologien erkennen und nutzen können, um Nutzern zu vermitteln, was geschieht. Hier zeigen wir, wie Sie WAI-ARIA auf grundlegender Ebene einsetzen, um die Barrierefreiheit zu verbessern.

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
          <li>Der Zweck von WAI-ARIA: nicht-semantischem HTML Semantik zu verleihen, damit Nutzer assistiver Technologien die dargestellten Benutzeroberflächen verstehen können.</li>
          <li>Die grundlegende Syntax: Rollen, Eigenschaften und Zustände.</li>
          <li>Landmarks und Orientierungspunkte.</li>
          <li>Verbesserung der Tastaturzugänglichkeit.</li>
          <li>Ankündigung dynamischer Inhaltsaktualisierungen mit Live-Regionen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist WAI-ARIA?

Sehen wir uns zunächst an, was WAI-ARIA ist und was es für uns leisten kann.

### Eine ganze Reihe neuer Probleme

Als Webanwendungen komplexer und dynamischer wurden, entstanden neue Anforderungen und Probleme im Bereich der Barrierefreiheit.

HTML führte beispielsweise eine Reihe semantischer Elemente ein, mit denen sich übliche Seitenbereiche kennzeichnen lassen ({{htmlelement("nav")}}, {{htmlelement("footer")}} usw.). Bevor diese verfügbar waren, verwendeten Entwickler {{htmlelement("div")}}-Elemente mit IDs oder Klassen, etwa `<div class="nav">`. Das war jedoch problematisch, da sich ein bestimmter Seitenbereich wie die Hauptnavigation nicht ohne Weiteres programmatisch finden ließ.

Ein erster Lösungsansatz bestand darin, am Anfang der Seite einen oder mehrere versteckte Links zur Navigation oder zu anderen Bereichen einzufügen, zum Beispiel:

```html
<a href="#hidden" class="hidden">Skip to navigation</a>
```

Das ist jedoch immer noch nicht besonders präzise und funktioniert nur, wenn der Screenreader die Seite von Anfang an liest.

Ein weiteres Beispiel sind komplexe Bedienelemente, die in Anwendungen aufkamen: Date Picker zur Datumsauswahl, Slider zur Auswahl von Werten und Ähnliches. HTML stellt spezielle Eingabetypen bereit, um solche Bedienelemente darzustellen:

```html
<input type="date" /> <input type="range" />
```

Diese wurden anfangs nicht gut unterstützt und ließen sich nur schwer gestalten – was in geringerem Maße auch heute noch gilt. Deshalb entschieden sich Designer und Entwickler häufig für eigene Lösungen. Statt dieser nativen Funktionen verwenden manche Entwickler JavaScript-Bibliotheken, die solche Bedienelemente als verschachtelte {{htmlelement("div")}}-Elemente erzeugen, mit CSS gestalten und mit JavaScript steuern.

Das Problem: Visuell funktionieren diese Bedienelemente, Screenreader können jedoch nicht erkennen, worum es sich handelt. Ihren Nutzern wird lediglich eine Ansammlung von Elementen ohne Semantik vermittelt, die deren Bedeutung erklären würde.

### Hier kommt WAI-ARIA ins Spiel

[WAI-ARIA](https://w3c.github.io/aria/) (Web Accessibility Initiative – Accessible Rich Internet Applications) ist eine vom W3C verfasste Spezifikation. Sie definiert zusätzliche HTML-Attribute, die Elementen mehr Semantik verleihen und dort die Barrierefreiheit verbessern können, wo sie fehlt. Die Spezifikation beschreibt drei Hauptfunktionen:

- [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Sie definieren, was ein Element ist oder tut. Viele davon sind sogenannte Landmark-Rollen, die weitgehend die semantische Bedeutung struktureller Elemente wiedergeben, etwa `role="navigation"` ({{htmlelement("nav")}}), `role="banner"` ({{htmlelement("header")}} des Dokuments), `role="complementary"` ({{htmlelement("aside")}}) oder `role="search"` ({{htmlelement("search")}}). Andere Rollen beschreiben Seitenstrukturen, für die es kein entsprechendes HTML-Element gibt, beispielsweise `role="tablist"` und `role="tabpanel"`, die häufig in Benutzeroberflächen vorkommen.
- Eigenschaften
  - : Sie beschreiben Merkmale von Elementen und können ihnen zusätzliche Bedeutung oder Semantik verleihen. Beispielsweise legt `aria-required="true"` fest, dass eine Formulareingabe ausgefüllt werden muss, damit sie gültig ist. Mit `aria-labelledby="label"` können Sie dagegen über eine ID ein anderes Element als Beschriftung referenzieren – auch für mehrere Elemente, was mit `<label for="input">` nicht möglich ist. So könnten Sie mit `aria-labelledby` eine wichtige Beschreibung in einem {{htmlelement("div")}} als Beschriftung für mehrere Tabellenzellen festlegen. Sie können damit auch vorhandene Informationen auf der Seite als Alternativtext eines Bildes verwenden, statt sie im `alt`-Attribut zu wiederholen. Ein Beispiel finden Sie unter [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives).
- Zustände
  - : Das sind spezielle Eigenschaften, die den aktuellen Zustand von Elementen beschreiben. So teilt `aria-disabled="true"` einem Screenreader mit, dass eine Formulareingabe derzeit deaktiviert ist. Zustände unterscheiden sich von Eigenschaften dadurch, dass Eigenschaften während der Lebensdauer einer Anwendung unverändert bleiben, während sich Zustände ändern können – üblicherweise programmatisch über JavaScript.

Ein wichtiger Punkt bei WAI-ARIA-Attributen ist, dass sie nichts an der Webseite verändern, abgesehen von den Informationen, die über die Accessibility-APIs des Browsers bereitgestellt werden. Von dort beziehen Screenreader ihre Informationen. WAI-ARIA beeinflusst weder die Seitenstruktur noch das DOM usw. Die Attribute können allerdings nützlich sein, um Elemente mit CSS auszuwählen.

> [!NOTE]
> Eine hilfreiche Liste aller ARIA-Rollen und ihrer Verwendung mit Links zu weiteren Informationen finden Sie in der WAI-ARIA-Spezifikation unter [Definition of Roles](https://w3c.github.io/aria/#role_definitions) und auf dieser Website unter [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles).
>
> Die Spezifikation enthält außerdem eine Liste aller Eigenschaften und Zustände mit Links zu weiteren Informationen: [Definitions of States and Properties (alle `aria-*`-Attribute)](https://w3c.github.io/aria/#state_prop_def).

## Wo wird WAI-ARIA unterstützt?

Diese Frage lässt sich nicht einfach beantworten. Es ist schwierig, eine verlässliche Quelle dafür zu finden, welche WAI-ARIA-Funktionen wo unterstützt werden, denn:

1. Die WAI-ARIA-Spezifikation umfasst sehr viele Funktionen.
2. Es gibt zahlreiche Kombinationen von Betriebssystemen, Browsern und Screenreadern zu berücksichtigen.

Der zweite Punkt ist entscheidend: Damit ein Screenreader überhaupt genutzt werden kann, muss das Betriebssystem Browser ausführen können, die über die nötigen Accessibility-APIs verfügen und die benötigten Informationen bereitstellen. Für die meisten verbreiteten Betriebssysteme gibt es einen oder zwei Browser, mit denen Screenreader zusammenarbeiten können.

Darüber hinaus müssen die betreffenden Browser ARIA-Funktionen unterstützen und über ihre APIs bereitstellen. Ebenso müssen Screenreader diese Informationen erkennen und ihren Nutzern sinnvoll vermitteln.

1. Die Browser-Unterstützung ist nahezu flächendeckend.
2. Die Unterstützung von ARIA-Funktionen durch Screenreader ist noch nicht ganz so weit, die verbreitetsten Screenreader holen jedoch auf. Einen Eindruck vom Unterstützungsgrad vermittelt der Artikel [WAI-ARIA Screen reader compatibility](https://www.powermapper.com/tests/screen-readers/aria/) von Powermapper.

In diesem Artikel werden wir nicht versuchen, jede WAI-ARIA-Funktion und ihre genaue Unterstützung abzudecken. Stattdessen behandeln wir die wichtigsten Funktionen, die Sie kennen sollten. Wenn wir keine Einschränkungen bei der Unterstützung erwähnen, können Sie davon ausgehen, dass die Funktion gut unterstützt wird. Auf Ausnahmen weisen wir ausdrücklich hin.

> [!NOTE]
> Einige JavaScript-Bibliotheken unterstützen WAI-ARIA. Wenn sie beispielsweise komplexe Formularbedienelemente erzeugen, fügen sie ARIA-Attribute hinzu, um deren Barrierefreiheit zu verbessern. Wenn Sie für die schnelle Entwicklung einer Benutzeroberfläche eine JavaScript-Lösung eines Drittanbieters suchen, sollten Sie die Barrierefreiheit ihrer UI-Widgets unbedingt als wichtiges Auswahlkriterium berücksichtigen. Gute Beispiele sind jQuery UI (siehe [About jQuery UI: Deep accessibility support](https://jqueryui.com/about/#deep-accessibility-support)), [ExtJS](https://www.sencha.com/products/extjs/) und [Dojo/Dijit](https://dojotoolkit.org/reference-guide/1.10/dijit/a11y/statement.html).

## Wann sollten Sie WAI-ARIA verwenden?

Wir haben bereits einige Probleme besprochen, die zur Entwicklung von WAI-ARIA geführt haben. Im Wesentlichen ist WAI-ARIA in vier Bereichen hilfreich:

- Orientierungspunkte/Landmarks
  - : Die Werte des ARIA-Attributs [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) können als Landmarks dienen. Sie können die Semantik von HTML-Elementen wie {{htmlelement("nav")}} wiedergeben oder über die HTML-Semantik hinaus Orientierung in verschiedenen Funktionsbereichen bieten, beispielsweise mit `search`, `tablist`, `tab` oder `listbox`.
- Dynamische Inhaltsaktualisierungen
  - : Screenreader haben oft Schwierigkeiten, sich ständig ändernde Inhalte mitzuteilen. Mit `aria-live` können wir Screenreader-Nutzer informieren, wenn ein Inhaltsbereich dynamisch aktualisiert wird – etwa wenn JavaScript auf der Seite [neue Inhalte vom Server abruft und das DOM aktualisiert](/de/docs/Learn_web_development/Core/Scripting/Network_requests).
- Verbesserung der Tastaturzugänglichkeit
  - : Manche HTML-Elemente sind von Haus aus per Tastatur zugänglich. Werden stattdessen andere Elemente zusammen mit JavaScript verwendet, um ähnliche Interaktionen nachzubilden, leiden darunter die Tastaturzugänglichkeit und die Ausgabe durch Screenreader. Wo dies unvermeidbar ist, bietet WAI-ARIA eine Möglichkeit, andere Elemente fokussierbar zu machen (mithilfe von `tabindex`).
- Barrierefreiheit nicht-semantischer Bedienelemente
  - : Wenn ein komplexes UI-Element aus verschachtelten `<div>`-Elementen sowie CSS und JavaScript aufgebaut oder ein natives Bedienelement durch JavaScript stark erweitert oder verändert wird, kann die Barrierefreiheit leiden. Ohne Semantik oder andere Hinweise können Screenreader-Nutzer nur schwer erkennen, was das Element tut. In solchen Fällen kann ARIA die fehlenden Informationen ergänzen: Rollen wie `button`, `listbox` oder `tablist` und Eigenschaften wie `aria-required` oder `aria-posinset` geben Hinweise auf die Funktion.

Im nächsten Abschnitt sehen wir uns diese vier Bereiche anhand von Beispielen genauer an. Bevor Sie weiterlesen, sollten Sie eine Testumgebung mit einem Screenreader einrichten, damit Sie die Beispiele selbst ausprobieren können. Weitere Informationen finden Sie in unserem Abschnitt über das [Testen mit Screenreadern](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers).

> [!CALLOUT]
>
> **Verwenden Sie WAI-ARIA nur, wenn es nötig ist!**
>
> Die richtigen HTML-Elemente bringen die benötigten Rollen bereits mit. Sie sollten _immer_ [native HTML-Funktionen](/de/docs/Learn_web_development/Core/Accessibility/HTML) verwenden, um Screenreadern die erforderliche Semantik bereitzustellen. Manchmal ist das nicht möglich, weil Sie nur begrenzt Einfluss auf den Code haben oder etwas Komplexes entwickeln, für das es kein passendes HTML-Element gibt. In solchen Fällen kann WAI-ARIA ein wertvolles Werkzeug zur Verbesserung der Barrierefreiheit sein.
>
> Aber noch einmal: Verwenden Sie es nur, wenn es nötig ist!
>
> Versuchen Sie außerdem, Ihre Website mit verschiedenen _echten_ Nutzern zu testen: Menschen ohne Behinderung, Menschen, die Screenreader verwenden, Menschen, die per Tastatur navigieren, usw. Sie können besser beurteilen, wie gut die Website für sie funktioniert.

## Orientierungspunkte/Landmarks

WAI-ARIA stellt das [Attribut `role`](https://w3c.github.io/aria/#role_definitions) bereit. Damit können Sie Elementen Ihrer Website bei Bedarf zusätzliche semantische Bedeutung geben. Ein wichtiger Anwendungsfall ist, Screenreadern Informationen bereitzustellen, mit denen ihre Nutzer häufige Seitenbereiche finden können. Das folgende Beispiel hat diese Struktur:

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

Wenn Sie das Beispiel mit einem Screenreader in einem modernen Browser testen, erhalten Sie bereits einige hilfreiche Informationen. VoiceOver gibt beispielsweise Folgendes aus:

- Beim Element `<header>`: „banner, 2 items“ (es enthält eine Überschrift und das `<nav>`-Element).
- Beim Element `<nav>`: „navigation 2 items“ (es enthält eine Liste und Suchbedienelemente).
- Beim Element `<main>`: „main 2 items“ (es enthält einen Artikel und ein `<aside>`-Element).
- Beim Element `<aside>`: „complementary 2 items“ (es enthält eine Überschrift und eine Liste).
- Beim Sucheingabefeld: „Search query, insertion at beginning of text“.
- Beim Element `<footer>`: „footer 1 item“.

Wenn Sie das Landmarks-Menü von VoiceOver öffnen (mit der VoiceOver-Taste + U und anschließend den Pfeiltasten, um durch die Menüoptionen zu navigieren), sehen Sie, dass die meisten Elemente übersichtlich aufgelistet sind und sich schnell aufrufen lassen.

![VoiceOver-Menü auf einem Mac für den schnellen Zugriff auf barrierefreie Seitenbereiche. Es zeigt eine Landmarks-Überschrift und eine Liste mit banner, navigation, main und complementary.](landmarks-list.png)

Wir können das aber noch verbessern. Der Suchbereich ist ein wichtiger Orientierungspunkt, den Nutzer finden möchten. Er erscheint jedoch nicht im Landmarks-Menü und wird auch sonst nicht als eigener Orientierungspunkt behandelt. Lediglich das Eingabefeld selbst wird als Sucheingabe erkannt (`<input type="search">`).

Um den Suchbereich als Landmark zu kennzeichnen, können Sie ihn entweder mit dem Element {{htmlelement("search")}} umschließen oder ihm die ARIA-Rolle `role="search"` geben. Grundsätzlich sollten Sie nach Möglichkeit HTML-Semantik verwenden und nur dann auf ARIA zurückgreifen, wenn es keine HTML-Entsprechung gibt.

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

Entscheidend ist, dass wir semantisches HTML verwendet haben, das der Seitenstruktur Bedeutung und Rollen verleiht, ohne unnötige [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)-Attribute hinzuzufügen. Die Struktur sieht ungefähr so aus:

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

Dieses Beispiel enthält noch eine zusätzliche Funktion: Das Element {{htmlelement("input")}} hat das Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) erhalten. Dadurch bekommt es eine beschreibende Beschriftung, die ein Screenreader vorliest, obwohl kein {{htmlelement("label")}}-Element vorhanden ist. In Fällen wie diesem ist das sehr nützlich: Ein solches Suchformular ist verbreitet und leicht zu erkennen; eine sichtbare Beschriftung würde das Seitendesign beeinträchtigen.

```html
<input
  type="search"
  name="q"
  placeholder="Search query"
  aria-label="Search through site content" />
```

Wenn wir dieses Beispiel nun mit VoiceOver untersuchen, stellen wir Verbesserungen fest:

- Der Suchbereich wird sowohl beim Navigieren durch die Seite als auch im Landmarks-Menü als eigener Eintrag angekündigt.
- Der Text im Attribut `aria-label` wird vorgelesen, wenn das Eingabefeld fokussiert wird.

Wenn Sie ältere Browser wie IE8 unterstützen müssen, lohnt es sich, dafür ARIA-Rollen einzufügen. Und wenn Ihre Website aus irgendeinem Grund ausschließlich mit `<div>`-Elementen aufgebaut ist, sollten Sie unbedingt ARIA-Rollen hinzufügen, um die dringend benötigte Semantik bereitzustellen.

Weiter unten erfahren Sie mehr über diese Semantik und die Möglichkeiten von ARIA-Eigenschaften und -Attributen, insbesondere im Abschnitt [Barrierefreiheit nicht-semantischer Bedienelemente](#barrierefreiheit_nicht-semantischer_bedienelemente). Sehen wir uns zunächst an, wie ARIA bei dynamischen Inhaltsaktualisierungen hilft.

## Dynamische Inhaltsaktualisierungen

Screenreader können auf Inhalte zugreifen, die ins DOM geladen wurden – von Text bis hin zu Alternativtexten für Bilder. Herkömmliche statische Websites, die überwiegend Text enthalten, lassen sich daher relativ leicht für Menschen mit Sehbehinderungen zugänglich machen.

Moderne Webanwendungen bestehen jedoch häufig nicht nur aus statischem Text. Sie aktualisieren oft Teile der Seite, indem sie neue Inhalte vom Server abrufen (in diesem Beispiel verwenden wir ein statisches Array mit Zitaten) und das DOM aktualisieren. Solche Bereiche werden manchmal als **Live-Regionen** bezeichnet.

Betrachten wir als Beispiel einen Generator für zufällige Zitate:

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

Das funktioniert zwar, ist aber nicht gut zugänglich: Screenreader erkennen die Inhaltsaktualisierung nicht, sodass ihre Nutzer nicht erfahren, was passiert. Dieses Beispiel ist recht einfach. Stellen Sie sich aber eine komplexe Benutzeroberfläche mit vielen ständig aktualisierten Inhalten vor, etwa einen Chatraum, die Oberfläche eines Strategiespiels oder eine Live-Anzeige des Warenkorbs. Ohne eine Möglichkeit, Nutzer auf Aktualisierungen hinzuweisen, ließe sich die Anwendung kaum sinnvoll bedienen.

Zum Glück bietet WAI-ARIA dafür einen Mechanismus: die Eigenschaft [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live). Wird sie auf ein Element angewendet, lesen Screenreader dessen aktualisierte Inhalte vor. Wie dringend dies geschieht, hängt vom Attributwert ab:

- `off`
  - : Der Standardwert. Aktualisierungen sollen nicht angekündigt werden.
- `polite`
  - : Aktualisierungen sollen nur angekündigt werden, wenn der Nutzer gerade nicht beschäftigt ist.
- `assertive`
  - : Aktualisierungen sollen dem Nutzer so schnell wie möglich angekündigt werden.

Hier ändern wir den öffnenden `<blockquote>`-Tag wie folgt:

```html
<blockquote aria-live="assertive">…</blockquote>
```

Dadurch liest ein Screenreader den Inhalt vor, sobald er aktualisiert wird. Testen Sie die aktualisierte Live-Version:

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
> - Die Eigenschaft [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic) weist Screenreader bei einem Wert von `true` an, den gesamten Inhalt eines Elements als Einheit vorzulesen, nicht nur die aktualisierten Teile. Das ist nützlich, wenn nur ein Teil eines Bereichs aktualisiert wird, Sie aber bei jeder Änderung auch dessen Überschrift vorlesen lassen möchten, um den Nutzer an den Kontext zu erinnern.
> - Mit der Eigenschaft [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant) steuern Sie, was bei einer Aktualisierung der Live-Region vorgelesen wird. Sie können beispielsweise festlegen, dass nur hinzugefügte oder entfernte Inhalte angekündigt werden.

## Verbesserung der Tastaturzugänglichkeit

Wie an anderen Stellen dieses Moduls erläutert, ist eine der größten Stärken von HTML in Bezug auf Barrierefreiheit die integrierte Tastaturbedienbarkeit von Buttons, Formularbedienelementen und Links. In der Regel können Sie mit der Tabulatortaste zwischen Bedienelementen wechseln und sie mit der Eingabe- oder Return-Taste auswählen beziehungsweise aktivieren. Bei Bedarf kommen weitere Tasten hinzu, etwa die Pfeiltasten nach oben und unten, um zwischen Optionen eines `<select>`-Felds zu wechseln.

Manchmal müssen Sie jedoch Code schreiben, der nicht-semantische Elemente als Buttons oder andere Bedienelemente verwendet oder fokussierbare Bedienelemente für einen anderen als ihren eigentlichen Zweck einsetzt. Vielleicht korrigieren Sie übernommenen, ungünstig aufgebauten Code, oder Sie entwickeln ein komplexes Widget, das dies erfordert.

Um normalerweise nicht fokussierbare Elemente fokussierbar zu machen, erweitert WAI-ARIA das Attribut `tabindex` um neue Werte:

- `tabindex="0"` – mit diesem Wert werden Elemente, die normalerweise nicht per Tabulatortaste erreichbar sind, in die Tab-Reihenfolge aufgenommen. Das ist der nützlichste Wert für `tabindex`.
- `tabindex="-1"` – damit können Elemente, die normalerweise nicht per Tabulatortaste erreichbar sind, programmatisch fokussiert werden, etwa über JavaScript oder als Ziel eines Links.

Wir haben dies bereits im Artikel über HTML-Barrierefreiheit ausführlicher besprochen und eine typische Implementierung gezeigt: [Tastaturzugänglichkeit wiederherstellen](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in).

## Barrierefreiheit nicht-semantischer Bedienelemente

Dieser Abschnitt knüpft an den vorherigen an: Wenn ein komplexes UI-Element aus verschachtelten `<div>`-Elementen sowie CSS und JavaScript erstellt oder ein natives Bedienelement durch JavaScript stark erweitert oder verändert wird, kann nicht nur die Tastaturzugänglichkeit leiden. Ohne Semantik oder andere Hinweise fällt es Screenreader-Nutzern auch schwer zu erkennen, was das Element tut. In solchen Situationen kann ARIA die fehlende Semantik ergänzen.

### Formularvalidierung und Fehlermeldungen

Kehren wir zunächst zu dem Formularbeispiel zurück, das wir im Artikel über CSS- und JavaScript-Barrierefreiheit betrachtet haben. Eine ausführliche Wiederholung finden Sie unter [Unaufdringlich bleiben](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#keeping_it_unobtrusive). Am Ende dieses Abschnitts haben wir gezeigt, dass das Feld für Fehlermeldungen einige ARIA-Attribute enthält. Es zeigt Validierungsfehler an, wenn Sie versuchen, das Formular abzusenden:

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

- [`role="alert"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) macht das betreffende Element automatisch zu einer Live-Region, sodass Änderungen vorgelesen werden. Außerdem kennzeichnet es das Element semantisch als Warnmeldung mit wichtigen zeit- oder kontextabhängigen Informationen. Das ist eine bessere und zugänglichere Möglichkeit, Nutzer zu benachrichtigen, als ein modaler Dialog wie ein Aufruf von [`alert()`](/de/docs/Web/API/Window/alert). Solche Dialoge bringen verschiedene Probleme für die Barrierefreiheit mit sich; siehe [Popup Windows](https://webaim.org/techniques/javascript/other#popups) von WebAIM.
- Der Wert `all` für [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant) weist den Screenreader an, den Inhalt der Fehlerliste bei jeder Änderung vorzulesen – also wenn Fehler hinzugefügt oder entfernt werden. Das ist hilfreich, weil Nutzer wissen möchten, welche Fehler noch vorhanden sind, nicht nur, welche hinzugefügt oder entfernt wurden.

Wir können ARIA noch weiter nutzen, um zusätzliche Hilfe bei der Validierung bereitzustellen. Wie wäre es, anzugeben, welche Felder erforderlich sind und in welchem Bereich das Alter liegen soll?

1. Erstellen Sie nun lokale Kopien der Dateien [`form-validation.html`](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html) und [`validation.js`](https://github.com/mdn/learning-area/blob/main/accessibility/css/validation.js).
2. Öffnen Sie beide Dateien in einem Texteditor und sehen Sie sich an, wie der Code funktioniert.
3. Fügen Sie zunächst direkt vor dem öffnenden `<form>`-Tag einen Absatz wie den folgenden ein und versehen Sie beide `<label>`-Elemente des Formulars mit einem Sternchen. So werden Pflichtfelder üblicherweise für sehende Nutzer gekennzeichnet.

   ```html
   <p>Fields marked with an asterisk (*) are required.</p>
   ```

4. Visuell ist das verständlich, für Screenreader-Nutzer jedoch weniger leicht zu erfassen. Glücklicherweise bietet WAI-ARIA das Attribut [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required). Es gibt Screenreadern den Hinweis, Nutzer darüber zu informieren, dass die Formulareingaben ausgefüllt werden müssen. Aktualisieren Sie die `<input>`-Elemente wie folgt:

   ```html
   <input type="text" name="name" id="name" aria-required="true" />

   <input type="number" name="age" id="age" aria-required="true" />
   ```

5. Wenn Sie das Beispiel jetzt speichern und mit einem Screenreader testen, sollten Sie etwas hören wie „Enter your name star, required, edit text“.
6. Es kann außerdem hilfreich sein, Screenreader-Nutzern und sehenden Nutzern einen Hinweis auf den erwarteten Alterswert zu geben. Häufig wird dieser als Tooltip oder Platzhalter im Formularfeld angezeigt. WAI-ARIA enthält zwar die Eigenschaften [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) zur Angabe von Minimal- und Maximalwerten; Screenreader unterstützen aber auch die nativen Attribute `min` und `max`. Eine weitere gut unterstützte Funktion ist das HTML-Attribut `placeholder`. Es kann einen Hinweis enthalten, der im Eingabefeld erscheint, solange kein Wert eingegeben wurde, und von einigen Screenreadern vorgelesen wird. Aktualisieren Sie Ihr Zahlenfeld wie folgt:

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

Fügen Sie für jedes Eingabefeld immer ein {{HTMLelement('label')}} hinzu. Manche Screenreader kündigen Platzhaltertext an, die meisten jedoch nicht. Zulässige Alternativen, um Formularbedienelementen einen zugänglichen Namen zu geben, sind [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) und [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby). Ein `<label>`-Element mit einem `for`-Attribut ist jedoch vorzuziehen, da es die Bedienbarkeit für alle Nutzer verbessert – auch für Nutzer einer Maus.

> [!NOTE]
> Das fertige Beispiel können Sie unter [`form-validation-updated.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-updated.html) ausprobieren.

WAI-ARIA ermöglicht außerdem fortgeschrittene Techniken zur Beschriftung von Formularen, die über das klassische Element {{htmlelement("label")}} hinausgehen. Wir haben bereits besprochen, wie Sie mit der Eigenschaft [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) eine Beschriftung bereitstellen, die für sehende Nutzer nicht sichtbar sein soll (siehe oben den Abschnitt [Orientierungspunkte/Landmarks](#signpostslandmarks)). Andere Techniken nutzen Eigenschaften wie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn Sie ein anderes Element als `<label>` als Beschriftung festlegen oder mehrere Formulareingaben mit derselben Beschriftung versehen möchten. Mit [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) können Sie zusätzliche Informationen mit einer Formulareingabe verknüpfen und ebenfalls vorlesen lassen. Weitere Einzelheiten finden Sie im Artikel [Advanced Form Labeling](https://webaim.org/techniques/forms/advanced) von WebAIM.

Es gibt noch viele weitere nützliche Eigenschaften und Zustände, um den Status von Formularelementen anzugeben. Beispielsweise können Sie mit `aria-disabled="true"` kennzeichnen, dass ein Formularfeld deaktiviert ist. Viele Browser überspringen deaktivierte Formularfelder, sodass Screenreader sie nicht vorlesen. In manchen Fällen wird ein deaktiviertes Element dennoch wahrgenommen. Deshalb ist es sinnvoll, dieses Attribut hinzuzufügen und dem Screenreader mitzuteilen, dass das Bedienelement tatsächlich deaktiviert ist.

Wenn sich der deaktivierte Zustand einer Eingabe ändern kann, sollten Sie außerdem mitteilen, wann dies geschieht und welche Auswirkung es hat. In unserer Demo [`form-validation-checkbox-disabled.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-checkbox-disabled.html) gibt es beispielsweise eine Checkbox, deren Aktivierung ein weiteres Eingabefeld für zusätzliche Informationen freischaltet. Wir haben außerdem eine Live-Region eingerichtet, die durch absolute Positionierung visuell verborgen ist:

```html
<p class="hidden-alert" aria-live="assertive"></p>
```

Wenn die Checkbox aktiviert oder deaktiviert wird, aktualisieren wir den Text in der verborgenen Live-Region. So erfahren Screenreader-Nutzer, was die Änderung bewirkt. Gleichzeitig aktualisieren wir den Zustand `aria-disabled` und einige visuelle Hinweise:

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

### Nicht-semantische Buttons als Buttons kennzeichnen

Wir haben in diesem Kurs bereits mehrfach die native Barrierefreiheit von Buttons, Links und Formularelementen erwähnt – und die Probleme, die entstehen, wenn andere Elemente sie nachbilden. Siehe [Nach Möglichkeit semantische UI-Bedienelemente verwenden](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible) im Artikel über HTML-Barrierefreiheit sowie den Abschnitt [Verbesserung der Tastaturzugänglichkeit](#verbesserung_der_tastaturzugänglichkeit) weiter oben. Grundsätzlich lässt sich die Tastaturzugänglichkeit in vielen Fällen mit `tabindex` und etwas JavaScript ohne allzu großen Aufwand wiederherstellen.

Was ist aber mit Screenreadern? Sie erkennen diese Elemente weiterhin nicht als Buttons. Wenn wir unser Beispiel [`fake-div-buttons.html`](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) mit einem Screenreader testen, werden die nachgebildeten Buttons etwa als „Click me!, group“ ausgegeben – was offensichtlich verwirrend ist.

Das lässt sich mit einer WAI-ARIA-Rolle beheben. Erstellen Sie eine lokale Kopie von [`fake-div-buttons.html`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) und fügen Sie jedem als Button verwendeten `<div>` das Attribut [`role="button"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) hinzu, zum Beispiel:

```html
<div data-message="This is from the first button" tabindex="0" role="button">
  Click me!
</div>
```

Wenn Sie das nun mit einem Screenreader testen, werden die Elemente etwa als „Click me!, button“ ausgegeben. Das ist deutlich besser. Allerdings müssen Sie weiterhin alle Funktionen ergänzen, die Nutzer von einem nativen Button erwarten, etwa die Verarbeitung von <kbd>enter</kbd>- und Klickereignissen. Das wird in der [Dokumentation zur Rolle `button`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) erläutert.

> [!NOTE]
> Vergessen Sie nicht: Wenn möglich, ist das richtige semantische Element immer die bessere Wahl. Wenn Sie einen Button erstellen möchten und dafür ein {{htmlelement("button")}}-Element verwenden können, sollten Sie ein {{htmlelement("button")}}-Element verwenden!

### Nutzer durch komplexe Widgets führen

Es gibt viele weitere [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles), mit denen sich nicht-semantische Elementstrukturen als gängige UI-Funktionen kennzeichnen lassen, die über die Möglichkeiten von Standard-HTML hinausgehen. Beispiele sind [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role) und [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role). In der [Codebibliothek der Deque University](https://dequeuniversity.com/library/) finden Sie mehrere hilfreiche Beispiele dafür, wie sich solche Bedienelemente barrierefrei gestalten lassen.

Weitere interaktive Beispiele finden Sie in unserer Dokumentation zu [WAI-ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles). Sehen Sie sich beispielsweise das [Beispiel zur ARIA-Rolle `tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role#example) an. Es erklärt, wie Sie eine barrierefreie Oberfläche mit Tabs implementieren.

## Zusammenfassung

Dieser Artikel hat keineswegs alle Möglichkeiten von WAI-ARIA behandelt. Er sollte Ihnen aber genügend Informationen vermittelt haben, um zu verstehen, wie Sie WAI-ARIA einsetzen und einige der häufigsten Anwendungsfälle erkennen können.

Im nächsten Artikel finden Sie Tests, mit denen Sie überprüfen können, wie gut Sie diese Informationen verstanden und behalten haben.

## Siehe auch

- [ARIA-Zustände und -Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes): Alle `aria-*`-Attribute
- [WAI-ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles): Kategorien von ARIA-Rollen und die auf MDN behandelten Rollen
- [ARIA in HTML](https://w3c.github.io/html-aria/) beim W3C: Eine Spezifikation, die für jede HTML-Funktion festlegt, welche Accessibility-Semantik (ARIA) der Browser ihr implizit zuweist und welche WAI-ARIA-Funktionen Sie bei Bedarf für zusätzliche Semantik verwenden können
- [Codebibliothek der Deque University](https://dequeuniversity.com/library/): Eine Sammlung hilfreicher, praxisnaher Beispiele, die zeigen, wie komplexe UI-Bedienelemente mit WAI-ARIA-Funktionen barrierefrei gestaltet werden
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/) beim W3C: Ausführliche Entwurfsmuster des W3C, die erklären, wie sich verschiedene Arten komplexer UI-Bedienelemente mithilfe von WAI-ARIA-Funktionen barrierefrei implementieren lassen

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA", "Learn_web_development/Core/Accessibility")}}
