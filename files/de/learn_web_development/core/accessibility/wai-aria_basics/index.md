---
title: WAI-ARIA-Grundlagen
short-title: WAI-ARIA
slug: Learn_web_development/Core/Accessibility/WAI-ARIA_basics
l10n:
  sourceCommit: d93983dfe60b65633f67fffe04676c241ff92960
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA", "Learn_web_development/Core/Accessibility")}}

Anknüpfend an den vorherigen Artikel kann es manchmal schwierig sein, komplexe UI-Steuerelemente zu erstellen, die nicht-semantisches HTML und dynamische, durch JavaScript aktualisierte Inhalte beinhalten. WAI-ARIA ist eine Technologie, die bei solchen Problemen helfen kann, indem sie zusätzliche Semantik hinzufügt, die Browser und assistive Technologien erkennen und verwenden können, um Benutzer darüber zu informieren, was geschieht. Hier zeigen wir, wie Sie sie auf grundlegender Ebene zur Verbesserung der Barrierefreiheit verwenden können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und den in vorherigen Lektionen des Moduls vermittelten Best Practices für Barrierefreiheit</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Der Zweck von WAI-ARIA — Semantik für ansonsten nicht-semantisches HTML bereitzustellen, damit Benutzer assistiver Technologien die ihnen präsentierten Schnittstellen verstehen können.</li>
          <li>Die grundlegende Syntax — Rollen, Eigenschaften und Zustände.</li>
          <li>Orientierungspunkte und Wegweiser.</li>
          <li>Verbesserung der Tastaturzugänglichkeit.</li>
          <li>Ankündigung dynamischer Inhaltsaktualisierungen mit Live-Regionen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist WAI-ARIA?

Beginnen wir damit, uns anzusehen, was WAI-ARIA ist und was es für uns leisten kann.

### Eine ganz neue Reihe von Problemen

Als Web-Apps komplexer und dynamischer wurden, entstand eine neue Reihe von Funktionen und Problemen im Bereich Barrierefreiheit.

Beispielsweise führte HTML eine Reihe semantischer Elemente ein, um häufige Seitenmerkmale zu definieren ({{htmlelement("nav")}}, {{htmlelement("footer")}} usw.). Bevor diese verfügbar waren, verwendeten Entwickler {{htmlelement("div")}}s mit IDs oder Klassen, z. B. `<div class="nav">`, aber dies war problematisch, da es keine einfache Möglichkeit gab, ein bestimmtes Seitenmerkmal wie die Hauptnavigation programmgesteuert zu finden.

Die ursprüngliche Lösung bestand darin, oben auf der Seite einen oder mehrere ausgeblendete Links hinzuzufügen, die auf die Navigation (oder etwas anderes) verweisen, zum Beispiel:

```html
<a href="#hidden" class="hidden">Skip to navigation</a>
```

Dies ist jedoch noch immer nicht besonders präzise und kann nur verwendet werden, wenn der Screenreader vom Anfang der Seite an liest.

Als weiteres Beispiel enthielten Apps zunehmend komplexe Steuerelemente wie Datumsauswahlen zur Auswahl von Daten, Schieberegler zur Auswahl von Werten usw. HTML bietet spezielle Eingabetypen, um solche Steuerelemente darzustellen:

```html
<input type="date" /> <input type="range" />
```

Diese wurden ursprünglich nicht gut unterstützt, und es war — und ist in geringerem Maße immer noch — schwierig, sie zu gestalten. Das führte dazu, dass Designer und Entwickler benutzerdefinierte Lösungen bevorzugten. Statt dieser nativen Funktionen verwenden einige Entwickler JavaScript-Bibliotheken, die solche Steuerelemente als Reihe verschachtelter {{htmlelement("div")}}s erzeugen, welche anschließend mit CSS gestaltet und mit JavaScript gesteuert werden.

Das Problem dabei ist, dass sie visuell funktionieren, Screenreader jedoch überhaupt nicht verstehen können, was sie sind. Ihre Benutzer erfahren lediglich, dass sie ein Durcheinander von Elementen ohne Semantik vor sich haben, die deren Bedeutung beschreibt.

### WAI-ARIA kommt ins Spiel

[WAI-ARIA](https://w3c.github.io/aria/) (Web Accessibility Initiative - Accessible Rich Internet Applications) ist eine vom W3C verfasste Spezifikation, die eine Reihe zusätzlicher HTML-Attribute definiert. Diese können auf Elemente angewendet werden, um zusätzliche Semantik bereitzustellen und die Barrierefreiheit überall dort zu verbessern, wo sie unzureichend ist. Die Spezifikation definiert drei Hauptfunktionen:

- [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Diese definieren, was ein Element ist oder tut. Viele davon sind sogenannte Landmark-Rollen, die größtenteils den semantischen Wert struktureller Elemente duplizieren, etwa `role="navigation"` ({{htmlelement("nav")}}), `role="banner"` (Dokument-{{htmlelement("header")}}), `role="complementary"` ({{htmlelement("aside")}}) oder `role="search"` ({{htmlelement("search")}}). Einige andere Rollen beschreiben verschiedene Seitenstrukturen, für die keine Elemente existieren, die diesen Rollen entsprechen, etwa `role="tablist"` und `role="tabpanel"`, die häufig in Benutzeroberflächen vorkommen.
- Eigenschaften
  - : Diese definieren Eigenschaften von Elementen, die verwendet werden können, um ihnen zusätzliche Bedeutung oder Semantik zu geben. Beispielsweise legt `aria-required="true"` fest, dass eine Formulareingabe ausgefüllt werden muss, um gültig zu sein, während Sie mit `aria-labelledby="label"` eine ID auf ein Element setzen und dann darauf verweisen können, dass es als Beschriftung für etwas anderes auf der Seite dient — einschließlich mehrerer Elemente, was mit `<label for="input">` nicht möglich ist. Sie könnten `aria-labelledby` beispielsweise verwenden, um festzulegen, dass eine in einem {{htmlelement("div")}} enthaltene Tastenbeschreibung die Beschriftung für mehrere Tabellenzellen ist. Oder Sie könnten es als Alternative zu Alternativtext für Bilder verwenden — vorhandene Informationen auf der Seite als Alternativtext eines Bildes festlegen, anstatt sie im `alt`-Attribut wiederholen zu müssen. Ein Beispiel dafür finden Sie unter [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives).
- Zustände
  - : Spezielle Eigenschaften, die den aktuellen Zustand von Elementen definieren, etwa `aria-disabled="true"`, wodurch einem Screenreader mitgeteilt wird, dass eine Formulareingabe derzeit deaktiviert ist. Zustände unterscheiden sich von Eigenschaften darin, dass sich Eigenschaften während des Lebenszyklus einer App nicht ändern, während sich Zustände ändern können, im Allgemeinen programmgesteuert über JavaScript.

Ein wichtiger Punkt bei WAI-ARIA-Attributen ist, dass sie außer den Informationen, die über die Barrierefreiheits-APIs des Browsers verfügbar gemacht werden (von denen Screenreader ihre Informationen beziehen), nichts an der Webseite beeinflussen. WAI-ARIA beeinflusst weder die Webseitenstruktur noch das DOM usw., obwohl die Attribute zur Auswahl von Elementen per CSS nützlich sein können.

> [!NOTE]
> Eine nützliche Liste aller ARIA-Rollen und ihrer Verwendungen mit Links zu weiterführenden Informationen finden Sie in der WAI-ARIA-Spezifikation — siehe [Definition of Roles](https://w3c.github.io/aria/#role_definitions) — sowie auf dieser Website — siehe [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles).
>
> Die Spezifikation enthält außerdem eine Liste aller Eigenschaften und Zustände mit Links zu weiterführenden Informationen — siehe [Definitions of States and Properties (all `aria-*` attributes)](https://w3c.github.io/aria/#state_prop_def).

## Wo wird WAI-ARIA unterstützt?

Dies ist keine leicht zu beantwortende Frage. Es ist schwierig, eine abschließende Ressource zu finden, die angibt, welche WAI-ARIA-Funktionen wo unterstützt werden, denn:

1. Die WAI-ARIA-Spezifikation enthält viele Funktionen.
2. Es gibt viele Kombinationen aus Betriebssystemen, Browsern und Screenreadern, die berücksichtigt werden müssen.

Dieser letzte Punkt ist entscheidend — um überhaupt einen Screenreader verwenden zu können, muss Ihr Betriebssystem Browser ausführen, die über die erforderlichen Barrierefreiheits-APIs verfügen, um die Informationen bereitzustellen, die Screenreader für ihre Arbeit benötigen. Die meisten beliebten Betriebssysteme verfügen über einen oder zwei Browser, mit denen Screenreader funktionieren können.

Als Nächstes müssen Sie berücksichtigen, ob die betreffenden Browser ARIA-Funktionen unterstützen und sie über ihre APIs verfügbar machen, aber auch, ob Screenreader diese Informationen erkennen und ihren Benutzern auf hilfreiche Weise präsentieren.

1. Die Browser-Unterstützung ist fast universell.
2. Die Screenreader-Unterstützung für ARIA-Funktionen ist noch nicht ganz auf diesem Niveau, aber die beliebtesten Screenreader nähern sich diesem an. Einen Eindruck von den Unterstützungsgraden erhalten Sie in Powermappers Artikel [WAI-ARIA Screen reader compatibility](https://www.powermapper.com/tests/screen-readers/aria/).

In diesem Artikel werden wir nicht versuchen, jede WAI-ARIA-Funktion und deren exakte Unterstützungsdetails abzudecken. Stattdessen behandeln wir die wichtigsten WAI-ARIA-Funktionen, die Sie kennen sollten. Wenn wir keine Unterstützungsdetails erwähnen, können Sie davon ausgehen, dass die Funktion gut unterstützt wird. Ausnahmen werden wir deutlich erwähnen.

> [!NOTE]
> Einige JavaScript-Bibliotheken unterstützen WAI-ARIA. Das bedeutet, dass sie beim Erzeugen von UI-Funktionen wie komplexen Formularsteuerelementen ARIA-Attribute hinzufügen, um deren Barrierefreiheit zu verbessern. Wenn Sie nach einer JavaScript-Lösung eines Drittanbieters für eine schnelle UI-Entwicklung suchen, sollten Sie die Barrierefreiheit ihrer UI-Widgets unbedingt als wichtigen Faktor bei Ihrer Auswahl berücksichtigen. Gute Beispiele sind jQuery UI (siehe [About jQuery UI: Deep accessibility support](https://jqueryui.com/about/#deep-accessibility-support)), [ExtJS](https://www.sencha.com/products/extjs/) und [Dojo/Dijit](https://dojotoolkit.org/reference-guide/1.10/dijit/a11y/statement.html).

## Wann sollten Sie WAI-ARIA verwenden?

Wir haben zuvor über einige Probleme gesprochen, die zur Entwicklung von WAI-ARIA führten. Im Wesentlichen gibt es jedoch vier Hauptbereiche, in denen WAI-ARIA nützlich ist:

- Wegweiser/Landmarks
  - : Die Werte des ARIA-Attributs [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) können als Landmarken dienen, die entweder die Semantik von HTML-Elementen replizieren (z. B. {{htmlelement("nav")}}) oder über die HTML-Semantik hinausgehen, um Wegweiser zu verschiedenen Funktionsbereichen bereitzustellen, beispielsweise `search`, `tablist`, `tab`, `listbox` usw.
- Dynamische Inhaltsaktualisierungen
  - : Screenreader haben häufig Schwierigkeiten, sich ständig ändernde Inhalte zu melden. Mit ARIA können wir `aria-live` verwenden, um Screenreader-Benutzer zu informieren, wenn ein Inhaltsbereich dynamisch aktualisiert wird, etwa wenn JavaScript auf der Seite [neue Inhalte vom Server abruft und das DOM aktualisiert](/de/docs/Learn_web_development/Core/Scripting/Network_requests).
- Verbesserung der Tastaturzugänglichkeit
  - : Es gibt integrierte HTML-Elemente mit nativer Tastaturzugänglichkeit. Wenn stattdessen andere Elemente zusammen mit JavaScript verwendet werden, um ähnliche Interaktionen zu simulieren, leiden die Tastaturzugänglichkeit und die Screenreader-Ausgabe darunter. Wo dies unvermeidlich ist, bietet WAI-ARIA eine Möglichkeit, anderen Elementen das Empfangen des Fokus zu ermöglichen (mittels `tabindex`).
- Barrierefreiheit nicht-semantischer Steuerelemente
  - : Wenn eine Reihe verschachtelter `<div>`s zusammen mit CSS/JavaScript verwendet wird, um eine komplexe UI-Funktion zu erstellen, oder ein natives Steuerelement mit JavaScript stark erweitert bzw. verändert wird, kann die Barrierefreiheit beeinträchtigt werden. Screenreader-Benutzer werden Schwierigkeiten haben, die Funktion zu verstehen, wenn keine Semantik oder andere Hinweise vorhanden sind. In diesen Situationen kann ARIA helfen, das Fehlende durch eine Kombination aus Rollen wie `button`, `listbox` oder `tablist` und Eigenschaften wie `aria-required` oder `aria-posinset` bereitzustellen, die weitere Hinweise zur Funktionalität geben.

Im nächsten Abschnitt betrachten wir die vier zuvor beschriebenen Hauptbereiche zusammen mit Beispielen ausführlicher. Bevor Sie fortfahren, sollten Sie eine Testumgebung für Screenreader einrichten, damit Sie einige der Beispiele während der Lektüre testen können. Weitere Informationen finden Sie in unserem Abschnitt über [das Testen mit Screenreadern](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers).

> [!CALLOUT]
>
> **Sie sollten WAI-ARIA nur verwenden, wenn Sie es benötigen!**
>
> Die Verwendung der richtigen HTML-Elemente gibt Ihnen implizit die erforderlichen Rollen. Sie sollten _immer_ [native HTML-Funktionen](/de/docs/Learn_web_development/Core/Accessibility/HTML) verwenden, um die Semantik bereitzustellen, die Screenreader benötigen, damit sie ihren Benutzern mitteilen können, was geschieht. Manchmal ist dies nicht möglich, entweder weil Sie nur begrenzte Kontrolle über den Code haben oder weil Sie etwas Komplexes erstellen, für das es kein einfach zu implementierendes HTML-Element gibt. In solchen Fällen kann WAI-ARIA ein wertvolles Werkzeug zur Verbesserung der Barrierefreiheit sein.
>
> Aber nochmals: Verwenden Sie es nur, wenn es notwendig ist!
>
> Stellen Sie außerdem sicher, dass Sie Ihre Website mit einer Vielzahl _echter_ Benutzer testen — Menschen ohne Behinderung, Menschen, die Screenreader verwenden, Menschen, die mit der Tastatur navigieren usw. Sie verfügen über bessere Einblicke als Sie, wie gut sie funktioniert.

## Wegweiser/Landmarks

WAI-ARIA fügt Browsern das [Attribut `role`](https://w3c.github.io/aria/#role_definitions) hinzu, mit dem Sie Elementen auf Ihrer Website überall dort zusätzlichen semantischen Wert verleihen können, wo dies benötigt wird. Der erste große Bereich, in dem dies nützlich ist, besteht darin, Screenreadern Informationen bereitzustellen, damit deren Benutzer häufige Seitenelemente finden können. Dieses Beispiel weist die folgende Struktur auf:

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

Wenn Sie versuchen, das Beispiel mit einem Screenreader in einem modernen Browser zu testen, erhalten Sie bereits einige nützliche Informationen. VoiceOver liefert beispielsweise Folgendes:

- Beim `<header>`-Element — „Banner, 2 Elemente“ (es enthält eine Überschrift und das `<nav>`).
- Beim `<nav>`-Element — „Navigation, 2 Elemente“ (es enthält eine Liste und ein Formular).
- Beim `<main>`-Element — „Hauptinhalt, 2 Elemente“ (es enthält einen Artikel und einen aside-Bereich).
- Beim `<aside>`-Element — „Ergänzend, 2 Elemente“ (es enthält eine Überschrift und eine Liste).
- Bei der Sucheingabe des Formulars — „Suchanfrage, Einfügemarke am Textanfang“.
- Beim `<footer>`-Element — „Fußzeile, 1 Element“.

Wenn Sie das Landmark-Menü von VoiceOver aufrufen (über die VoiceOver-Taste + U und anschließend mit den Pfeiltasten zum Durchlaufen der Menüoptionen), sehen Sie, dass die meisten Elemente übersichtlich aufgeführt sind und schnell aufgerufen werden können.

![VoiceOver-Menü des Mac für schnellen Zugriff auf Barrierefreiheitsfunktionen. Überschrift „Landmarks“ und eine Landmark-Liste mit banner, navigation, main und complementary.](landmarks-list.png)

Hier könnten wir jedoch noch besser sein. Das Suchformular ist eine sehr wichtige Landmarke, die Benutzer finden möchten, aber es wird weder im Landmark-Menü aufgeführt noch als bemerkenswerte Landmarke behandelt; lediglich die Eingabe selbst wird als Sucheingabe hervorgehoben (`<input type="search">`).

Um das Formular als Landmarke zu kennzeichnen, können Sie es entweder mit dem Element {{htmlelement("search")}} umschließen oder ihm ARIA `role="search"` geben. Als allgemeine Regel gilt: Verwenden Sie nach Möglichkeit HTML-Semantik und ARIA nur dort, wo es kein HTML-Äquivalent gibt.

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

Am wichtigsten ist, dass wir semantisches HTML verwendet haben, das der Seitenstruktur Bedeutung und Rollen gibt, ohne unserer HTML-Struktur unnötige [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)-Attribute hinzuzufügen. Sie hat eine Struktur wie diese:

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

Wir haben Ihnen in diesem Beispiel außerdem eine zusätzliche Funktion bereitgestellt — dem Element {{htmlelement("input")}} wurde das Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) zugewiesen, das ihm eine beschreibende Beschriftung gibt, die von einem Screenreader vorgelesen wird, obwohl wir kein {{htmlelement("label")}}-Element eingefügt haben. In solchen Fällen ist dies sehr nützlich — ein Suchformular wie dieses ist eine sehr häufige, leicht erkennbare Funktion, und das Hinzufügen einer sichtbaren Beschriftung würde das Seitendesign beeinträchtigen.

```html
<input
  type="search"
  name="q"
  placeholder="Search query"
  aria-label="Search through site content" />
```

Wenn wir nun VoiceOver verwenden, um dieses Beispiel anzusehen, erhalten wir einige Verbesserungen:

- Das Suchformular wird sowohl beim Durchsuchen der Seite als auch im Landmark-Menü als separates Element genannt.
- Der im Attribut `aria-label` enthaltene Beschriftungstext wird vorgelesen, wenn die Formulareingabe hervorgehoben wird.

Wenn Sie ältere Browser wie IE8 unterstützen müssen, lohnt es sich, zu diesem Zweck ARIA-Rollen einzuschließen. Und wenn Ihre Website aus irgendeinem Grund nur mit `<div>`s erstellt ist, sollten Sie unbedingt ARIA-Rollen einbinden, um diese dringend benötigte Semantik bereitzustellen!

Weiter unten erfahren Sie mehr über diese Semantik und die Leistungsfähigkeit von ARIA-Eigenschaften/-Attributen, insbesondere im Abschnitt [Barrierefreiheit nicht-semantischer Steuerelemente](#barrierefreiheit_nicht-semantischer_steuerelemente). Sehen wir uns zunächst an, wie ARIA bei dynamischen Inhaltsaktualisierungen helfen kann.

## Dynamische Inhaltsaktualisierungen

In das DOM geladene Inhalte können mit einem Screenreader problemlos aufgerufen werden, von Textinhalten bis zu Alternativtexten, die Bildern zugeordnet sind. Herkömmliche statische Websites mit überwiegend Textinhalten lassen sich daher für Menschen mit Sehbeeinträchtigungen leicht barrierefrei gestalten.

Das Problem ist, dass moderne Web-Apps oft nicht nur aus statischem Text bestehen — sie aktualisieren häufig Teile der Seite, indem sie neue Inhalte vom Server abrufen (in diesem Beispiel verwenden wir ein statisches Array von Zitaten) und das DOM aktualisieren. Diese werden manchmal als **Live-Regionen** bezeichnet.

Schauen wir uns ein Beispiel an — einen Zufallszitat-Generator:

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

Dies funktioniert zwar, ist aber nicht gut für die Barrierefreiheit — die Inhaltsaktualisierung wird von Screenreadern nicht erkannt, sodass deren Benutzer nicht wissen, was geschieht. Dies ist ein recht triviales Beispiel, aber stellen Sie sich vor, Sie würden eine komplexe Benutzeroberfläche mit vielen sich ständig aktualisierenden Inhalten erstellen, etwa einen Chatraum, die Benutzeroberfläche eines Strategiespiels oder eine sich live aktualisierende Warenkorbanzeige — es wäre unmöglich, die App effektiv zu verwenden, ohne die Benutzer in irgendeiner Form auf die Aktualisierungen hinzuweisen.

WAI-ARIA bietet glücklicherweise einen nützlichen Mechanismus für diese Hinweise — die Eigenschaft [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live). Wenn sie auf ein Element angewendet wird, führt sie dazu, dass Screenreader aktualisierte Inhalte vorlesen. Wie dringend die Inhalte vorgelesen werden, hängt vom Attributwert ab:

- `off`
  - : Der Standardwert. Aktualisierungen sollten nicht angekündigt werden.
- `polite`
  - : Aktualisierungen sollten nur angekündigt werden, wenn der Benutzer inaktiv ist.
- `assertive`
  - : Aktualisierungen sollten dem Benutzer so schnell wie möglich angekündigt werden.

Hier aktualisieren wir das öffnende `<blockquote>`-Tag wie folgt:

```html
<blockquote aria-live="assertive">…</blockquote>
```

Dies bewirkt, dass ein Screenreader den Inhalt beim Aktualisieren vorliest: Versuchen Sie, die aktualisierte Live-Version zu testen:

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
> Es gibt einige weitere ARIA-Eigenschaften im Zusammenhang mit `aria-live`, die ebenfalls wissenswert sind:
>
> - Die Eigenschaft [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic) weist Screenreader bei einem Wert von `true` an, den gesamten Elementinhalt als eine atomare Einheit vorzulesen, nicht nur die aktualisierten Teile. Dies ist nützlich, wenn nur der Inhalt eines Abschnitts aktualisiert wird, Sie jedoch möchten, dass die Überschrift bei jeder Änderung ebenfalls vorgelesen wird, um den Benutzer an den Inhalt zu erinnern.
> - Die Eigenschaft [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant) ist nützlich, um zu steuern, was beim Aktualisieren einer Live-Region vorgelesen wird. Sie können beispielsweise nur hinzugefügte oder entfernte Inhalte vorlesen lassen.

## Verbesserung der Tastaturzugänglichkeit

Wie an einigen anderen Stellen des Moduls erläutert, ist eine der wichtigsten Stärken von HTML hinsichtlich Barrierefreiheit die integrierte Tastaturzugänglichkeit von Funktionen wie Schaltflächen, Formularsteuerelementen und Links. Im Allgemeinen können Sie die Tabulatortaste verwenden, um zwischen Steuerelementen zu wechseln, die Eingabe-/Return-Taste, um Steuerelemente auszuwählen oder zu aktivieren, und gelegentlich bei Bedarf weitere Tasten (beispielsweise die Pfeiltasten nach oben und unten, um zwischen Optionen in einem `<select>`-Feld zu wechseln).

Manchmal werden Sie jedoch Code schreiben müssen, der entweder nicht-semantische Elemente als Schaltflächen (oder andere Arten von Steuerelementen) verwendet oder fokussierbare Steuerelemente für einen nicht ganz passenden Zweck einsetzt. Möglicherweise versuchen Sie, schlechten übernommenen Code zu korrigieren, oder Sie erstellen eine Art komplexes Widget, das dies erfordert.

Um nicht fokussierbaren Code fokussierbar zu machen, erweitert WAI-ARIA das Attribut `tabindex` um einige neue Werte:

- `tabindex="0"` — wie oben angegeben, ermöglicht dieser Wert Elementen, die normalerweise nicht per Tabulator erreichbar sind, per Tabulator erreichbar zu werden. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — dies ermöglicht normalerweise nicht per Tabulator erreichbaren Elementen, den Fokus programmgesteuert zu erhalten, z. B. über JavaScript oder als Ziel von Links.

Wir haben dies ausführlicher besprochen und eine typische Implementierung bereits in unserem Artikel zur HTML-Barrierefreiheit gezeigt — siehe [Tastaturzugänglichkeit wiederherstellen](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in).

## Barrierefreiheit nicht-semantischer Steuerelemente

Dies knüpft an den vorherigen Abschnitt an — wenn eine Reihe verschachtelter `<div>`s zusammen mit CSS/JavaScript verwendet wird, um eine komplexe UI-Funktion zu erstellen, oder ein natives Steuerelement mit JavaScript stark erweitert bzw. verändert wird, kann nicht nur die Tastaturzugänglichkeit beeinträchtigt sein, sondern Screenreader-Benutzer werden auch Schwierigkeiten haben, die Funktion zu verstehen, wenn keine Semantik oder andere Hinweise vorhanden sind. In solchen Situationen kann ARIA helfen, diese fehlende Semantik bereitzustellen.

### Formularvalidierung und Fehlerwarnungen

Zunächst betrachten wir erneut das Formularbeispiel, das wir erstmals in unserem Artikel zur CSS- und JavaScript-Barrierefreiheit angesehen haben (lesen Sie [Unaufdringlich bleiben](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#keeping_it_unobtrusive) für eine vollständige Wiederholung). Am Ende dieses Abschnitts zeigten wir, dass wir dem Feld für Fehlermeldungen, das bei einem Versuch zum Absenden des Formulars Validierungsfehler anzeigt, einige ARIA-Attribute hinzugefügt haben:

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

- [`role="alert"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) verwandelt das Element, auf das es angewendet wird, automatisch in eine Live-Region, sodass Änderungen daran vorgelesen werden. Außerdem kennzeichnet es dieses semantisch als Warnmeldung (wichtige zeit- bzw. kontextsensitive Information) und stellt eine bessere, barrierefreiere Methode dar, eine Warnung an Benutzer zu übermitteln (modale Dialoge wie Aufrufe von [`alert()`](/de/docs/Web/API/Window/alert) haben eine Reihe von Barrierefreiheitsproblemen; siehe [Popup Windows](https://webaim.org/techniques/javascript/other#popups) von WebAIM).
- Ein [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)-Wert von `all` weist den Screenreader an, den Inhalt der Fehlerliste vorzulesen, wenn Änderungen daran vorgenommen werden — also wenn Fehler hinzugefügt oder entfernt werden. Das ist nützlich, weil der Benutzer wissen möchte, welche Fehler noch vorhanden sind, und nicht nur, was der Liste hinzugefügt oder daraus entfernt wurde.

Wir könnten mit unserer ARIA-Verwendung noch weiter gehen und weitere Hilfe bei der Validierung bereitstellen. Wie wäre es damit, anzugeben, ob Felder überhaupt erforderlich sind und welchen Bereich das Alter haben sollte?

1. Erstellen Sie an dieser Stelle eine Kopie unserer Dateien [`form-validation.html`](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html) und [`validation.js`](https://github.com/mdn/learning-area/blob/main/accessibility/css/validation.js) und speichern Sie sie in einem lokalen Verzeichnis.
2. Öffnen Sie beide in einem Texteditor und sehen Sie sich an, wie der Code funktioniert.
3. Fügen Sie zunächst direkt über dem öffnenden `<form>`-Tag einen Absatz wie den folgenden hinzu und kennzeichnen Sie beide Formular-`<label>`s mit einem Sternchen. So kennzeichnen wir normalerweise Pflichtfelder für sehende Benutzer.

   ```html
   <p>Fields marked with an asterisk (*) are required.</p>
   ```

4. Dies ist visuell verständlich, für Screenreader-Benutzer jedoch nicht so leicht zu verstehen. Glücklicherweise bietet WAI-ARIA das Attribut [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required), um Screenreadern Hinweise zu geben, dass sie Benutzern mitteilen sollen, dass Formulareingaben ausgefüllt werden müssen. Aktualisieren Sie die `<input>`-Elemente wie folgt:

   ```html
   <input type="text" name="name" id="name" aria-required="true" />

   <input type="number" name="age" id="age" aria-required="true" />
   ```

5. Wenn Sie das Beispiel jetzt speichern und mit einem Screenreader testen, sollten Sie etwas wie „Geben Sie Ihren Namen ein Sternchen, erforderlich, Text bearbeiten“ hören.
6. Es könnte auch nützlich sein, wenn wir Screenreader-Benutzern und sehenden Benutzern eine Vorstellung davon geben, welchen Wert das Alter haben sollte. Dies wird oft als Tooltip oder Platzhalter innerhalb des Formularfeldes angezeigt. WAI-ARIA enthält die Eigenschaften [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax), um Mindest- und Höchstwerte anzugeben, und Screenreader unterstützen die nativen Attribute `min` und `max`. Eine weitere gut unterstützte Funktion ist das HTML-Attribut `placeholder`, das eine Nachricht enthalten kann, die in der Eingabe angezeigt wird, wenn kein Wert eingegeben wurde, und von einigen Screenreadern vorgelesen wird. Aktualisieren Sie Ihre Zahleneingabe wie folgt:

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

Fügen Sie immer für jede Eingabe ein {{HTMLelement('label')}} ein. Während einige Screenreader den Platzhaltertext ankündigen, tun dies die meisten nicht. Akzeptable Alternativen, um Formularsteuerelementen einen zugänglichen Namen bereitzustellen, umfassen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) und [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby). Das `<label>`-Element mit einem `for`-Attribut ist jedoch die bevorzugte Methode, da es die Nutzbarkeit für alle Benutzer bereitstellt, einschließlich Mausbenutzern.

> [!NOTE]
> Sie können das fertige Beispiel unter [`form-validation-updated.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-updated.html) live ansehen.

WAI-ARIA ermöglicht außerdem einige fortgeschrittene Techniken zur Beschriftung von Formularen, die über das klassische Element {{htmlelement("label")}} hinausgehen. Wir haben bereits über die Verwendung der Eigenschaft [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) gesprochen, um eine Beschriftung bereitzustellen, wenn diese für sehende Benutzer nicht sichtbar sein soll (siehe Abschnitt [Wegweiser/Landmarks](#signpostslandmarks) oben). Weitere Beschriftungstechniken verwenden andere Eigenschaften, etwa [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn Sie ein Nicht-`<label>`-Element als Beschriftung festlegen oder mehrere Formulareingaben mit derselben Beschriftung versehen möchten, und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby), wenn Sie einer Formulareingabe weitere Informationen zuordnen und diese ebenfalls vorlesen lassen möchten. Weitere Details finden Sie in [WebAIMs Artikel Advanced Form Labeling](https://webaim.org/techniques/forms/advanced).

Es gibt außerdem viele weitere nützliche Eigenschaften und Zustände, um den Status von Formularelementen anzugeben. Beispielsweise kann `aria-disabled="true"` verwendet werden, um anzuzeigen, dass ein Formularfeld deaktiviert ist. Viele Browser überspringen deaktivierte Formularfelder, wodurch sie von Screenreadern nicht vorgelesen werden. In einigen Fällen wird ein deaktiviertes Element wahrgenommen; daher ist es eine gute Idee, dieses Attribut einzuschließen, um den Screenreader wissen zu lassen, dass ein deaktiviertes Formularsteuerelement tatsächlich deaktiviert ist.

Wenn sich der deaktivierte Zustand einer Eingabe wahrscheinlich ändern wird, ist es außerdem sinnvoll anzugeben, wann dies geschieht und was das Ergebnis ist. In unserer Demo [`form-validation-checkbox-disabled.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-checkbox-disabled.html) gibt es beispielsweise ein Kontrollkästchen, das beim Aktivieren eine weitere Formulareingabe freischaltet, damit zusätzliche Informationen eingegeben werden können. Außerdem haben wir eine ausgeblendete Live-Region eingerichtet, die mittels absoluter Positionierung aus der Ansicht ausgeblendet ist:

```html
<p class="hidden-alert" aria-live="assertive"></p>
```

Wenn das Kontrollkästchen aktiviert/deaktiviert wird, aktualisieren wir den Text innerhalb der ausgeblendeten Live-Region, um Screenreader-Benutzern mitzuteilen, was das Aktivieren dieses Kontrollkästchens bewirkt. Zusätzlich aktualisieren wir den Zustand `aria-disabled` sowie einige visuelle Indikatoren:

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

### Nicht-semantische Schaltflächen als Schaltflächen beschreiben

In diesem Kurs haben wir bereits mehrfach die native Barrierefreiheit von Schaltflächen, Links oder Formularelementen erwähnt — und die Probleme bei der Verwendung anderer Elemente, um diese nachzuahmen (siehe [Verwenden Sie nach Möglichkeit semantische UI-Steuerelemente](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible) im Artikel zur HTML-Barrierefreiheit und [Verbesserung der Tastaturzugänglichkeit](#verbesserung_der_tastaturzugänglichkeit) oben). Grundsätzlich können Sie die Tastaturzugänglichkeit in vielen Fällen mit `tabindex` und etwas JavaScript ohne allzu großen Aufwand wiederherstellen.

Aber was ist mit Screenreadern? Sie erkennen die Elemente noch immer nicht als Schaltflächen. Wenn wir unser Beispiel [`fake-div-buttons.html`](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) mit einem Screenreader testen, werden unsere falschen Schaltflächen mit Formulierungen wie „Click me!, Gruppe“ gemeldet, was offensichtlich verwirrend ist.

Wir können dies mit einer WAI-ARIA-Rolle beheben. Erstellen Sie eine lokale Kopie von [`fake-div-buttons.html`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) und fügen Sie jedem Schaltflächen-`<div>` [`role="button"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) hinzu, zum Beispiel:

```html
<div data-message="This is from the first button" tabindex="0" role="button">
  Click me!
</div>
```

Wenn Sie dies nun mit einem Screenreader ausprobieren, werden Schaltflächen mit Formulierungen wie „Click me!, Schaltfläche“ gemeldet. Das ist zwar deutlich besser, Sie müssen jedoch weiterhin alle nativen Schaltflächenfunktionen hinzufügen, die Benutzer erwarten, etwa die Behandlung von <kbd>Enter</kbd>- und Klick-Ereignissen, wie in der [Dokumentation zur Rolle `button`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) erläutert.

> [!NOTE]
> Vergessen Sie jedoch nicht, dass die Verwendung des korrekten semantischen Elements nach Möglichkeit immer besser ist. Wenn Sie eine Schaltfläche erstellen möchten und ein {{htmlelement("button")}}-Element verwenden können, sollten Sie ein {{htmlelement("button")}}-Element verwenden!

### Benutzer durch komplexe Widgets führen

Es gibt eine Vielzahl weiterer [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles), die nicht-semantische Elementstrukturen als häufige UI-Funktionen identifizieren können, die über die Möglichkeiten von Standard-HTML hinausgehen, beispielsweise [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role), [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role). In der [Deque university code library](https://dequeuniversity.com/library/) finden Sie mehrere nützliche Beispiele, die Ihnen eine Vorstellung davon vermitteln, wie solche Steuerelemente barrierefrei gestaltet werden können.

In unserer Dokumentation zu [WAI-ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles) finden Sie ebenfalls mehrere Live-Beispiele. Siehe beispielsweise unser [Beispiel für die ARIA-Rolle `tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role#example), das erklärt, wie eine barrierefreie Registerkartenoberfläche implementiert wird.

## Zusammenfassung

Dieser Artikel hat keineswegs alles behandelt, was WAI-ARIA bietet, aber er sollte Ihnen genügend Informationen vermittelt haben, um zu verstehen, wie Sie es verwenden und welche der häufigsten Muster Ihnen begegnen werden, die es erfordern.

Im nächsten Artikel stellen wir Ihnen einige Tests bereit, mit denen Sie überprüfen können, wie gut Sie all diese Informationen verstanden und behalten haben.

## Siehe auch

- [Aria-Zustände und -Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes): Alle `aria-*`-Attribute
- [WAI-ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles): Kategorien von ARIA-Rollen und die auf MDN behandelten Rollen
- [ARIA in HTML](https://w3c.github.io/html-aria/) beim W3C: Eine Spezifikation, die für jede HTML-Funktion die vom Browser implizit darauf angewendete Barrierefreiheitssemantik (ARIA) und die WAI-ARIA-Funktionen definiert, die Sie darauf setzen können, wenn zusätzliche Semantik erforderlich ist
- [Deque university code library](https://dequeuniversity.com/library/): Eine Bibliothek mit sehr nützlichen und praktischen Beispielen, die komplexe UI-Steuerelemente zeigen, welche mithilfe von WAI-ARIA-Funktionen barrierefrei gestaltet wurden
- [WAI-ARIA authoring practices](https://www.w3.org/WAI/ARIA/apg/) beim W3C: Ein sehr detailliertes Entwurfsmuster des W3C, das erklärt, wie verschiedene Arten komplexer UI-Steuerelemente implementiert und dabei mithilfe von WAI-ARIA-Funktionen barrierefrei gestaltet werden

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA", "Learn_web_development/Core/Accessibility")}}
