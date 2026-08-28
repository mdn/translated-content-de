---
title: WAI-ARIA Grundlagen
short-title: WAI-ARIA
slug: Learn_web_development/Core/Accessibility/WAI-ARIA_basics
l10n:
  sourceCommit: 65692fd4d256d5647749b7c7005dcf53d425a533
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA", "Learn_web_development/Core/Accessibility")}}

Weiterführend vom vorherigen Artikel, kann es manchmal schwierig sein, komplexe UI-Steuerelemente zu erstellen, die unschematisches HTML und dynamisch mit JavaScript aktualisierte Inhalte beinhalten. WAI-ARIA ist eine Technologie, die bei solchen Problemen helfen kann, indem sie zusätzliche Semantik hinzufügt, die von Browsern und unterstützenden Technologien erkannt und verwendet werden können, um den Nutzern mitzuteilen, was vor sich geht. Hier zeigen wir, wie man es auf einem grundlegenden Niveau verwendet, um die Zugänglichkeit zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und den in vorherigen Lektionen des Moduls behandelten Best Practices zur Barrierefreiheit.</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von WAI-ARIA — Bereitstellung von Semantik für ansonsten nicht-semantisches HTML, sodass AT-Nutzer die ihnen präsentierte Schnittstelle verstehen können.</li>
          <li>Die grundlegende Syntax — Rollen, Eigenschaften und Zustände.</li>
          <li>Landmarken und Wegmarkierungen.</li>
          <li>Verbesserung der Tastaturzugänglichkeit.</li>
          <li>Ankündigung dynamischer Inhaltsaktualisierungen mit Live-Regionen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist WAI-ARIA?

Lassen Sie uns beginnen, indem wir uns ansehen, was WAI-ARIA ist und was es für uns tun kann.

### Ein ganz neues Set von Problemen

Als Web-Apps anfingen, komplexer und dynamischer zu werden, tauchten neue Funktionen und Probleme in Bezug auf die Zugänglichkeit auf.

Zum Beispiel führte HTML eine Reihe von semantischen Elementen ein, um gängige Seitenfunktionen zu definieren ({{htmlelement("nav")}}, {{htmlelement("footer")}} usw.). Bevor diese verfügbar waren, verwendeten Entwickler {{htmlelement("div")}}-Elemente mit IDs oder Klassen, z.B. `<div class="nav">`, aber diese waren problematisch, da es keine einfache Möglichkeit gab, ein spezifisches Seitenmerkmal wie die Hauptnavigation programmatisch leicht zu finden.

Die ursprüngliche Lösung bestand darin, am oberen Ende der Seite einen oder mehrere versteckte Links hinzuzufügen, um zur Navigation (oder was auch immer) zu verlinken, beispielsweise:

```html
<a href="#hidden" class="hidden">Skip to navigation</a>
```

Aber dies ist immer noch nicht sehr präzise und kann nur verwendet werden, wenn der Screenreader vom oberen Ende der Seite liest.

Ein weiteres Beispiel zeigt, dass Apps begannen, komplexe Steuerelemente wie Datumsauswähler zur Datumswahl oder Schieberegler zur Wertauswahl zu bieten. HTML bietet spezielle Eingabetypen zur Darstellung solcher Steuerelemente:

```html
<input type="date" /> <input type="range" />
```

Diese wurden ursprünglich nicht gut unterstützt, und es war, und ist immer noch bis zu einem gewissen Grad, schwierig, sie zu gestalten. Dies führte dazu, dass Designer und Entwickler benutzerdefinierte Lösungen bevorzugten. Anstatt diese nativen Funktionen zu nutzen, verlassen sich einige Entwickler auf JavaScript-Bibliotheken, die solche Steuerelemente als eine Reihe verschachtelter {{htmlelement("div")}}-Elemente generieren, die dann mit CSS gestaltet und mit JavaScript gesteuert werden.

Das Problem dabei ist, dass sie visuell funktionieren, aber Screenreader nicht verstehen können, was sie überhaupt sind, und ihre Nutzer bekommen nur mitgeteilt, dass sie ein Durcheinander von Elementen ohne Semantik sehen, die beschreibt, was sie bedeuten.

### WAI-ARIA tritt ins Spiel

[WAI-ARIA](https://w3c.github.io/aria/) (Web Accessibility Initiative - Accessible Rich Internet Applications) ist eine von der W3C verfasste Spezifikation, die eine Reihe von zusätzlichen HTML-Attributen definiert, die auf Elemente angewendet werden können, um zusätzliche Semantik und verbesserte Zugänglichkeit bereitzustellen, wo sie fehlt. Es gibt drei Hauptfunktionen, die in der Spezifikation definiert sind:

- [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Diese definieren, was ein Element ist oder tut. Viele von ihnen sind sogenannte Landmarken-Rollen, die weitgehend den semantischen Wert von Strukturelementen duplizieren, wie `role="navigation"` ({{htmlelement("nav")}}), `role="banner"` (Dokument {{htmlelement("header")}}), `role="complementary"` ({{htmlelement("aside")}}) oder `role="search"` ({{htmlelement("search")}}). Einige andere Rollen beschreiben verschiedene Seitenstrukturen, die keine Elemente mit diesen übereinstimmenden Rollen haben, wie `role="tablist"` und `role="tabpanel"`, die häufig in UIs zu finden sind.
- Eigenschaften
  - : Diese definieren Eigenschaften von Elementen, die verwendet werden können, um ihnen zusätzliche Bedeutung oder Semantik zu verleihen. Ein Beispiel, `aria-required="true"` gibt an, dass ein Formulareingabefeld ausgefüllt werden muss, um gültig zu sein, während `aria-labelledby="label"` es ermöglicht, eine ID einem Element zuzuweisen und dann als Beschriftung für alles andere auf der Seite zu referenzieren, einschließlich mehrerer Elemente, was mit `<label for="input">` nicht möglich ist. Man könnte `aria-labelledby` verwenden, um anzugeben, dass eine Schlüsselbeschreibung in einem {{htmlelement("div")}} die Beschriftung für mehrere Tabellenzellen ist, oder man könnte es als Alternative zum Bild-Alt-Text verwenden — vorhandene Informationen auf der Seite als Alt-Text eines Bildes angeben, anstatt sie im `alt`-Attribut erneut eingeben zu müssen. Ein Beispiel hierfür finden Sie unter [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives).
- Zustände
  - : Besondere Eigenschaften, die die aktuellen Bedingungen von Elementen definieren, wie `aria-disabled="true"`, das einem Screenreader angibt, dass ein Formulareingabefeld derzeit deaktiviert ist. Zustände unterscheiden sich von Eigenschaften insofern, als dass sich Eigenschaften nicht während des Lebenszyklus einer App ändern, während Zustände sich ändern können, im Allgemeinen programmatisch über JavaScript.

Ein wichtiger Punkt zu den WAI-ARIA-Attributen ist, dass sie nichts an der Webseite selbst verändern, außer den Informationen, die über die Barrierefreiheits-APIs des Browsers bereitgestellt werden (woher Screenreader ihre Informationen beziehen). WAI-ARIA beeinflusst nicht die Struktur der Webseite, das DOM usw. — obwohl die Attribute nützlich sein können, um Elemente mit CSS auszuwählen.

> [!NOTE]
> Sie können eine nützliche Liste aller ARIA-Rollen und ihrer Verwendung mit Links zu weiteren Informationen in der WAI-ARIA-Spezifikation finden — siehe [Definition der Rollen](https://w3c.github.io/aria/#role_definitions) — auf dieser Seite — siehe [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles).
>
> Die Spezifikation enthält auch eine Liste aller Eigenschaften und Zustände mit Links zu weiteren Informationen — siehe [Definitionen der Zustände und Eigenschaften (alle `aria-*` Attribute)](https://w3c.github.io/aria/#state_prop_def).

## Wo wird WAI-ARIA unterstützt?

Diese Frage ist nicht leicht zu beantworten. Es ist schwierig, eine schlüssige Ressource zu finden, die angibt, welche Funktionen von WAI-ARIA wo unterstützt werden, weil:

1. Es gibt viele Funktionen in der WAI-ARIA-Spezifikation.
2. Es gibt viele Kombinationen von Betriebssystemen, Browsern und Screenreadern, die berücksichtigt werden müssen.

Dieser letzte Punkt ist entscheidend — Um einen Screenreader überhaupt nutzen zu können, muss Ihr Betriebssystem Browser haben, die die notwendigen Barrierefreiheits-APIs implementiert haben, um die Informationen bereitzustellen, die Screenreader benötigen, um ihre Aufgabe zu erfüllen. Die meisten gängigen Betriebssysteme haben ein oder zwei Browser, mit denen Screenreader arbeiten können.

Als nächstes müssen Sie sich darum kümmern, ob die betreffenden Browser ARIA-Funktionen unterstützen und sie über ihre APIs bereitstellen, und ob Screenreader diese Informationen erkennen und ihren Nutzern auf sinnvolle Weise präsentieren.

1. Die Unterstützung der Browser ist fast universell.
2. Die Unterstützung für ARIA-Funktionen durch Screenreader erreicht zwar nicht ganz dieses Niveau, aber die beliebtesten Screenreader kommen dem nahe. Sie können sich einen Eindruck von den Support-Leveln verschaffen, indem Sie sich den Powermapper-Artikel [WAI-ARIA Screen reader compatibility](https://www.powermapper.com/tests/screen-readers/aria/) ansehen.

In diesem Artikel werden wir nicht versuchen, jedes Detail jeder WAI-ARIA-Funktion und ihrer genauen Unterstützung abzudecken. Stattdessen werden wir die kritischsten WAI-ARIA-Funktionen behandeln, die Sie kennen sollten; wenn wir keine Supportdetails erwähnen, können Sie davon ausgehen, dass die Funktion gut unterstützt wird. Wir werden alle Ausnahmen klar erwähnen.

> [!NOTE]
> Einige JavaScript-Bibliotheken unterstützen WAI-ARIA, was bedeutet, dass sie, wenn sie UI-Funktionen wie komplexe Formularsteuerelemente generieren, ARIA-Attribute hinzufügen, um die Zugänglichkeit dieser Funktionen zu verbessern. Wenn Sie nach einer Drittanbieter-JavaScript-Lösung für die schnelle UI-Entwicklung suchen, sollten Sie die Barrierefreiheit ihrer UI-Widgets als wichtigen Faktor bei Ihrer Wahl in Betracht ziehen. Gute Beispiele sind jQuery UI (siehe [Über jQuery UI: Tiefgehende Unterstützung zur Barrierefreiheit](https://jqueryui.com/about/#deep-accessibility-support)), [ExtJS](https://www.sencha.com/products/extjs/) und [Dojo/Dijit](https://dojotoolkit.org/reference-guide/1.10/dijit/a11y/statement.html).

## Wann sollten Sie WAI-ARIA verwenden?

Wir haben bereits einige der Probleme angesprochen, die zur Entwicklung von WAI-ARIA geführt haben, im Wesentlichen ist WAI-ARIA in vier Hauptbereichen nützlich:

- Wegweiser/Landmarken
  - : Die Attributwerte [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) von ARIA können als Landmarken fungieren, die entweder die Semantik von HTML-Elementen replizieren (z.B. {{htmlelement("nav")}}), oder über die HTML-Semantik hinausgehend Wegweiser zu verschiedenen Funktionsbereichen bieten, wie zum Beispiel `search`, `tablist`, `tab`, `listbox` usw.
- Dynamische Inhaltsaktualisierungen
  - : Screenreader haben oft Schwierigkeiten, ständig wechselnde Inhalte zu melden; mit ARIA können wir `aria-live` verwenden, um Screenreader-Nutzern mitzuteilen, wann ein Inhaltsbereich dynamisch aktualisiert wird, zum Beispiel durch JavaScript auf der Seite, welches neue Inhalte vom Server lädt und das DOM aktualisiert. [siehe Netzwerkanfragen](/de/docs/Learn_web_development/Core/Scripting/Network_requests).
- Verbesserung der Tastaturzugänglichkeit
  - : Es gibt eingebaute HTML-Elemente, die eine native Tastaturzugänglichkeit besitzen; wenn andere Elemente zusammen mit JavaScript verwendet werden, um ähnliche Interaktionen zu simulieren, leiden Tastaturzugänglichkeit und die Meldung des Screenreaders darunter. Wo dies unvermeidlich ist, bietet WAI-ARIA eine Möglichkeit, anderen Elementen den Fokus zu ermöglichen (mit `tabindex`).
- Zugänglichkeit von nicht-semantischen Steuerelementen
  - : Wenn eine Serie von verschachtelten `<div>`-Elementen zusammen mit CSS/JavaScript verwendet wird, um eine komplexe UI-Funktion zu erstellen, oder ein natives Steuerelement stark erweitert/verändert wird, kann die Zugänglichkeit leiden — für Screenreader-Benutzer ist es schwierig herauszufinden, was die Funktion tut, wenn es keine Semantik oder andere Hinweise gibt. In diesen Situationen kann ARIA helfen, das Fehlende mit einer Kombination von Rollen wie `button`, `listbox` oder `tablist`, und Eigenschaften wie `aria-required` oder `aria-posinset` bereitzustellen, um weitere Hinweise zur Funktionalität zu geben.

Im nächsten Abschnitt werden wir die vier oben beschriebenen Hauptbereiche eingehender betrachten, zusammen mit Beispielen. Bevor Sie fortfahren, sollten Sie eine Testumgebung für Screenreader einrichten, damit Sie einige der Beispiele testen können, während Sie fortfahren. Siehe unseren Abschnitt über [Testen von Screenreadern](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers) für weitere Informationen.

> [!CALLOUT]
>
> **Sie sollten WAI-ARIA nur verwenden, wenn Sie es benötigen!**
>
> Die korrekten HTML-Elemente geben Ihnen implizit die benötigten Rollen, und Sie sollten _immer_ [native HTML-Funktionen](/de/docs/Learn_web_development/Core/Accessibility/HTML) verwenden, um die von Screenreadern benötigte Semantik bereitzustellen, um ihren Nutzern mitzuteilen, was vor sich geht. Manchmal ist dies nicht möglich, entweder weil Sie nur eingeschränkten Zugriff auf den Code haben oder weil Sie etwas Komplexes erstellen, das kein einfaches HTML-Element zur Implementierung bietet. In solchen Fällen kann WAI-ARIA ein wertvolles Werkzeug zur Verbesserung der Zugänglichkeit sein.
>
> Aber nochmals, verwenden Sie es nur dann, wenn es notwendig ist!
>
> Versuchen Sie auch sicherzustellen, dass Sie Ihre Seite mit einer Vielzahl von _echten_ Nutzern testen — nichtbehinderten Menschen, Personen, die Screenreader verwenden, Personen, die Tastaturnavigation verwenden, usw. Sie werden bessere Einsichten haben, als Sie es darstellen können.

## Wegweiser/Landmarken

WAI-ARIA fügt den Browsern das [`role`-Attribut](https://w3c.github.io/aria/#role_definitions) hinzu, das es ermöglicht, Elemente auf Ihrer Seite überall, wo es benötigt wird, mit zusätzlichem semantischen Wert zu versehen. Das erste große Anwendungsgebiet, in dem dies nützlich ist, ist die Bereitstellung von Informationen für Screenreader, damit deren Nutzer gängige Seitenelemente finden können. Diese Beispielstruktur enthält Folgendes:

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

Wenn Sie das Beispiel mit einem Screenreader in einem modernen Browser testen, erhalten Sie bereits einige nützliche Informationen. Beispielsweise gibt VoiceOver folgendes aus:

- Beim `<header>`-Element — "Banner, 2 Einträge" (es enthält eine Überschrift und das `<nav>`).
- Beim `<nav>`-Element — "Navigation 2 Einträge" (es enthält eine Liste und ein Formular).
- Beim `<main>`-Element — "Hauptinhalt 2 Einträge" (es enthält einen Artikel und ein `aside`).
- Beim `<aside>`-Element — "ergänzend 2 Einträge" (es enthält eine Überschrift und eine Liste).
- Beim Suchformulareingabefeld — "Suchanfrage, Einfügen am Anfang des Textes".
- Beim `<footer>`-Element — "Fußzeile 1 Eintrag".

Wenn Sie das VoiceOver-Landmarks-Menü öffnen (zugänglich über VoiceOver-Taste + U und dann die Pfeiltasten zur Auswahl der Menüpunkte verwenden), sehen Sie, dass die meisten Elemente schön aufgelistet sind, sodass sie schnell zugänglich sind.

![Macs VoiceOver-Menü für schnelle Barrierefreiheit. Landmarks-Kopfzeile und Landmarksliste einschließlich Banner, Navigation, Hauptinhalt und ergänzend.](landmarks-list.png)

Wir könnten dies jedoch verbessern. Das Suchformular ist ein wirklich wichtiger Wegweiser, den die Leute finden möchten, wird aber nicht im Landmarks-Menü aufgelistet oder wie eine bemerkenswerte Markierung behandelt, abgesehen davon, dass das eigentliche Eingabefeld als Sucheingabe bezeichnet wird (`<input type="search">`).

Um das Formular als Landmarke zu markieren, können Sie es entweder mit dem {{htmlelement("search")}}-Element umwickeln oder ihm die ARIA-Rolle `role="search"` zuweisen. Als allgemeine Regel verwenden Sie HTML-Semantik, wo immer möglich und verwenden Sie ARIA nur, wenn es kein HTML-Äquivalent gibt.

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

Wichtig ist, dass wir semantisches HTML verwendet haben, das Bedeutung und Rollen für die Struktur der Seite bereitstellt, ohne unnötige [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)-Attribute unserer HTML-Struktur hinzuzufügen, die eine Struktur wie diese hat:

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

Wir haben Ihnen auch ein Bonusfeature in diesem Beispiel gegeben — das {{htmlelement("input")}}-Element hat das Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) erhalten, das ihm eine beschreibende Beschriftung gibt, die von einem Screenreader vorgelesen wird, auch wenn wir kein {{htmlelement("label")}}-Element eingefügt haben. In solchen Fällen ist das sehr nützlich — ein solches Suchformular ist eine sehr häufige, leicht erkennbare Funktion, und das Hinzufügen einer visuellen Beschriftung würde das Seitendesign verderben.

```html
<input
  type="search"
  name="q"
  placeholder="Search query"
  aria-label="Search through site content" />
```

Wenn wir uns dieses Beispiel jetzt mit VoiceOver ansehen, erhalten wir einige Verbesserungen:

- Das Suchformular wird sowohl beim Durchsuchen der Seite als auch im Landmarks-Menü als separates Element hervorgehoben.
- Der im `aria-label`-Attribut enthaltene Beschriftungstext wird vorgelesen, wenn das Formulareingabefeld hervorgehoben ist.

Wenn Sie ältere Browser wie IE8 unterstützen müssen; es lohnt sich, ARIA-Rollen zu diesem Zweck einzuschließen. Und wenn Ihre Seite aus irgendeinem Grund nur aus `<div>`s besteht, sollten Sie definitiv die ARIA-Rollen einbinden, um diese dringend benötigte Semantik bereitzustellen!

Sie werden noch viel mehr über diese Semantik und die Macht der ARIA-Eigenschaften/Attribute weiter unten sehen, insbesondere im Abschnitt [Zugänglichkeit von nicht-semantischen Steuerelementen](#zugänglichkeit_von_nicht-semantischen_steuerelementen). Lassen Sie uns zunächst jedoch ansehen, wie ARIA bei dynamischen Inhaltsaktualisierungen helfen kann.

## Dynamische Inhaltsaktualisierungen

Von JavaScript-Inhalten, die in das DOM geladen werden, kann einfach mit einem Screenreader auf Textinhalte zugegriffen werden, sowie auf alternative Beschreibungen, die an Bilder angehängt sind. Traditionelle statische Websites mit hauptsächlich Textinhalten sind daher leicht zugänglich für Menschen, die visuelle Beeinträchtigungen haben.

Das Problem ist, dass moderne Web-Apps oft nicht nur statischer Text sind — sie aktualisieren Abschnitte der Seite durch das Laden neuer Inhalte vom Server (in diesem Beispiel verwenden wir ein statisches Array von Zitaten) und aktualisieren das DOM. Diese werden manchmal als **Live-Regionen** bezeichnet.

Lassen Sie uns ein Beispiel betrachten — einen Zufallszitat-Generator:

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

Dies funktioniert gut, jedoch ist es nicht gut für die Zugänglichkeit — die Inhaltsaktualisierung wird von Screenreadern nicht erkannt, somit wissen deren Nutzer nicht, was vor sich geht. Dies ist ein relativ triviales Beispiel, aber stellen Sie sich vor, Sie erstellen eine komplexe Benutzeroberfläche mit vielen ständig aktualisierten Inhalten, wie ein Chat-Raum, eine Strategie-Spieloberfläche oder eine live aktualisierte Warenkorbanzeige — es wäre unmöglich, die App in irgendeiner effektiven Weise zu nutzen, ohne irgendeine Art von Anzeige, die den Benutzer auf die Updates hinweist.

WAI-ARIA bietet glücklicherweise einen nützlichen Mechanismus zur Bereitstellung dieser Benachrichtigungen — die [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)-Eigenschaft. Indem Sie dies auf ein Element anwenden, werden Screenreader dazu gebracht, den aktualisierten Inhalt vorzulesen. Wie dringend der Inhalt vorgelesen wird, hängt vom Attributwert ab:

- `off`
  - : Der Standardwert. Updates sollten nicht angekündigt werden.
- `polite`
  - : Updates sollten nur dann angekündigt werden, wenn der Benutzer nicht aktiv ist.
- `assertive`
  - : Updates sollten dem Benutzer so schnell wie möglich angekündigt werden.

Hier aktualisieren wir das `<blockquote>`-Öffnungstag wie folgt:

```html
<blockquote aria-live="assertive">…</blockquote>
```

Dies wird dazu führen, dass ein Screenreader den Inhalt beim Aktualisieren vorliest: Probieren Sie die aktualisierte Live-Version aus:

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
> Es gibt einige andere ARIA-Eigenschaften, die mit `aria-live` in Zusammenhang stehen und auch wissenswert sind:
>
> - Die [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)-Eigenschaft teilt dem Screenreader mit, dass der gesamte Inhalt des Elements als eine atomare Einheit gelesen werden soll, nicht nur die Teile, die aktualisiert wurden. Dies ist nützlich, wenn nur der Inhalt eines Abschnitts aktualisiert wird, Sie aber möchten, dass die Überschrift jedes Mal vorgelesen wird, wenn sich etwas ändert, um den Benutzer an dessen Inhalt zu erinnern.
> - Die [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)-Eigenschaft ist nützlich, um zu steuern, was vorgelesen werden soll, wenn eine Live-Region aktualisiert wird. Sie können beispielsweise nur neue Inhalte oder gelöschte Inhalte vorlesen lassen.

## Verbesserung der Tastaturzugänglichkeit

Wie in mehreren anderen Bereichen des Moduls besprochen, ist einer der Schlüsselstärken von HTML in Bezug auf Barrierefreiheit die eingebaute Tastaturzugänglichkeit von Funktionen wie Schaltflächen, Formularsteuerelementen und Links. Im Allgemeinen können Sie die Tabulatortaste verwenden, um zwischen Steuerelementen zu wechseln, die Eingabetaste, um Steuerelemente auszuwählen oder zu aktivieren, und gelegentlich andere Tasten nach Bedarf (zum Beispiel die Pfeiltasten, um zwischen Optionen in einem `<select>`-Feld zu wechseln).

Es gibt jedoch Zeiten, in denen Sie Code schreiben müssen, der entweder nicht-semantische Elemente als Schaltflächen (oder andere Arten von Steuerelementen) verwendet oder fokussierbare Steuerelemente für den nicht ganz richtigen Zweck verwendet. Sie könnten versuchen, schlechten Code zu reparieren, den Sie geerbt haben, oder Sie bauen ein komplexes Widget, welches dies erfordert.

In Bezug darauf, nicht-fokussierbare Elemente fokussierbar zu machen, erweitert WAI-ARIA das `tabindex`-Attribut mit einigen neuen Werten:

- `tabindex="0"` — wie oben angedeutet, erlaubt dieser Wert Elementen, die normalerweise nicht fokussierbar sind, fokussierbar zu werden. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — dies ermöglicht es, normalerweise nicht fokussierbaren Elementen, programmatisch den Fokus zu erhalten, z.B. über JavaScript oder als Ziel von Links.

Wir haben dies ausführlicher besprochen und eine typische Implementierung in unserem HTML-Accessibility-Artikel gezeigt — siehe [Wiederherstellung der Tastaturzugänglichkeit](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in).

## Zugänglichkeit von nicht-semantischen Steuerelementen

Dies knüpft an den vorherigen Abschnitt an — wenn eine Serie von verschachtelten `<div>`-Elementen zusammen mit CSS/JavaScript verwendet wird, um eine komplexe UI-Funktion zu erstellen, oder ein nativer Steuerelement stark erweitert/verändert wird, leiden nicht nur die Tastaturzugänglichkeit, sondern auch Screenreader-Nutzer haben Schwierigkeiten herauszufinden, was die Funktion erbringt, wenn es keine Semantik oder andere Hinweise gibt. In solchen Situationen kann ARIA helfen, die fehlende Semantik bereitzustellen.

### Formularvalidierung und Fehlerwarnungen

Lassen Sie uns zuerst das Formularbeispiel wieder betrachten, das wir zum ersten Mal in unserem CSS-und-JavaScript-Zugänglichkeitsartikel angeschaut haben (lesen Sie [keeping it unobtrusive](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#keeping_it_unobtrusive) für eine vollständige Zusammenfassung). Am Ende dieses Abschnitts zeigten wir, dass wir einige ARIA-Attribute auf das Fehlermeldungsfeld angewendet haben, das Validierungsfehler anzeigt, wenn Sie versuchen, das Formular zu senden:

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

- [`role="alert"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) macht das Element, auf das es angewendet wird, automatisch zu einer Live-Region, sodass Änderungen daran vorgelesen werden; es identifiziert es auch semantisch als eine Warnmeldung (wichtige zeit-/kontextabhängige Informationen) und stellt eine bessere, zugänglichere Art und Weise dar, eine Warnung an einen Benutzer zu übermitteln (modale Dialoge wie [`alert()`](/de/docs/Web/API/Window/alert)-Aufrufe haben eine Anzahl von Zugänglichkeitsproblemen; siehe [Popup Windows](https://webaim.org/techniques/javascript/other#popups) von WebAIM).
- Ein [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)-Wert von `all` weist den Screenreader an, den Inhalt der Fehlerliste vorzulesen, wenn daran Änderungen vorgenommen werden — d.h. wenn Fehler hinzugefügt oder entfernt werden. Dies ist nützlich, weil der Benutzer wissen möchte, welche Fehler noch übrig sind, nicht nur, was hinzugefügt oder von der Liste entfernt wurde.

Wir könnten unsere ARIA-Nutzung noch weiter ausbauen und mehr Validierungshilfen bereitstellen. Wie wäre es, wenn wir darauf hinweisen, ob Felder überhaupt ausgefüllt werden müssen und welche Reichweite das Alter haben soll?

1. An dieser Stelle nehmen Sie eine Kopie unserer [`form-validation.html`](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html)- und [`validation.js`](https://github.com/mdn/learning-area/blob/main/accessibility/css/validation.js)-Dateien und speichern Sie sie in einem lokalen Verzeichnis.
2. Öffnen Sie sie beide in einem Texteditor und schauen Sie sich den Code an, wie er funktioniert.
3. Fügen Sie zuerst einen Absatz über dem öffnenden `<form>`-Tag hinzu, wie z.B. den untenstehenden, und markieren Sie beide Formular-<`label`>-Elemente mit einem Sternchen. Dies ist normalerweise, wie wir Pflichtfelder für sehende Nutzer markieren.

   ```html
   <p>Fields marked with an asterisk (*) are required.</p>
   ```

4. Das macht visuell Sinn, aber es ist nicht so einfach zu verstehen für Screenreader-Nutzer. Zum Glück bietet WAI-ARIA das [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)-Attribut, um Screenreader-Nutzern Hinweise zu geben, dass Formulareingaben ausgefüllt werden müssen. Aktualisieren Sie die `<input>`-Elemente wie folgt:

   ```html
   <input type="text" name="name" id="name" aria-required="true" />

   <input type="number" name="age" id="age" aria-required="true" />
   ```

5. Wenn Sie das Beispiel nun speichern und mit einem Screenreader testen, sollten Sie etwas hören wie "Geben Sie Ihren Namen mit Sternchen ein, erforderlich, Eingabefeld".
6. Es könnte auch nützlich sein, wenn wir Screenreader-Nutzern und sehenden Nutzern eine Idee geben, welchen Wert das Alter haben sollte. Dies wird häufig als Tooltip oder Plathalter innerhalb des Formularfeldes dargestellt. WAI-ARIA enthält zwar `aria-valuemin` und `aria-valuemax`-Eigenschaften, um Mindest- und Höchstwerte anzugeben und Screenreader unterstützen die nativen `min`- und `max`-Attribute. Ein weiteres gut unterstütztes Feature ist das HTML-Attribut `placeholder`, welches eine Nachricht enthalten kann, die im Eingabefeld anzezeigt wird, wenn kein Wert eingegeben wurde, und von einigen Screenreadern vorgelesen wird. Aktualisieren Sie Ihre Nummerneingabe wie folgt:

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

Schließen Sie immer ein `<label>`-Element für jeden Input ein. Während einige Screenreader den Platzhaltertext ankündigen, tun dies die meisten nicht. Akzeptable Ersatzmethoden, um Formularsteuerelemente mit einem zugänglichen Namen zu versehen, sind [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) und [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby). Aber das `<label>`-Element mit einem `for`-Attribut ist die bevorzugte Methode, da es die Benutzerfreundlichkeit für alle Nutzer bietet, einschließlich Mausbenutzer.

> [!NOTE]
> Sie können das fertige Beispiel live bei [`form-validation-updated.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-updated.html) sehen.

WAI-ARIA ermöglicht auch einige fortgeschrittene Methoden zur Formularetikettierung, über die klassischen {{htmlelement("label")}}-Elemente hinaus. Wir sprachen bereits über die Verwendung der [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Eigenschaft, um eine Beschriftung bereitzustellen, wenn wir nicht möchten, dass die Beschriftung für sehende Nutzer sichtbar ist (siehe Abschnitt [Wegweiser/Landmarken](#signpostslandmarks) oben). Einige andere Beschriftungstechniken verwenden andere Eigenschaften wie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn Sie ein nicht-`<label>`-Element als Beschriftung zuordnen oder mehrere Formulareingaben mit derselben Beschriftung versehen möchten, und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby), wenn Sie andere Informationen mit einer Formulareingabe verknüpfen und diese ebenfalls vorgelesen haben möchten. Siehe [WebAIMs Fortgeschrittene Formularetikettierung Artikel](https://webaim.org/techniques/forms/advanced) für weitere detaillierte Informationen.

Es gibt auch viele andere nützliche Eigenschaften und Zustände, um den Status von Formularelementen anzuzeigen. Zum Beispiel kann `aria-disabled="true"` verwendet werden, um anzugeben, dass ein Formulareingabefeld deaktiviert ist. Viele Browser überspringen deaktivierte Formulareingabefelder, was dazu führt, dass sie nicht von Screenreadern vorgelesen werden. In einigen Fällen wird ein deaktiviertes Element jedoch wahrgenommen. Daher ist es eine gute Idee, dieses Attribut hinzuzufügen, um dem Screenreader mitzuteilen, dass ein deaktiviertes Formulareingabefeld tatsächlich deaktiviert ist.

Wenn der deaktivierte Zustand einer Eingabeänderungen wahrscheinlich ist, ist es auch eine gute Idee, anzugeben, wann dies geschieht und was das Ergebnis ist. Zum Beispiel haben wir in unserem [`form-validation-checkbox-disabled.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-checkbox-disabled.html)-Beispiel ein Kontrollkästchen, das, wenn es markiert wird, eine weitere Eingabe aktiviert, um zusätzliche Informationen einzutragen. Wir haben auch eine versteckte Live-Region eingerichtet, die durch absolute Positionierung aus der Sicht ausgeblendet wird:

```html
<p class="hidden-alert" aria-live="assertive"></p>
```

Wenn das Kontrollkästchen markiert/entmarkiert wird, aktualisieren wir den Text innerhalb der versteckten Live-Region, um Screenreader-Nutzern mitzuteilen, was das Ergebnis davon ist, dieses Kontrollkästchen zu markieren, sowie um den `aria-disabled`-Zustand und einige visuelle Indikatoren ebenfalls zu aktualisieren:

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

Bereits einige Male in diesem Kurs haben wir die native Zugänglichkeit (und die Zugänglichkeitsprobleme, die auftreten, wenn sie andere Elemente verwenden, um Schaltflächen, Links oder Formularelemente zu fälschen) erwähnt (siehe [Verwenden Sie, wo möglich, semantische UI-Steuerelemente](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible) im HTML-Zugänglichkeitsartikel und [Verbesserung der Tastaturzugänglichkeit](#verbesserung_der_tastaturzugänglichkeit), oben). Grundsätzlich können Sie in vielen Fällen die Tastaturzugänglichkeit ohne allzu große Mühe wiederherstellen, indem Sie `tabindex` und ein wenig JavaScript verwenden.

Aber was ist mit Screenreadern? Sie sehen die Elemente immer noch nicht als Schaltflächen. Wenn wir unser [`fake-div-buttons.html`](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)-Beispiel in einem Screenreader testen, werden unsere gefälschten Schaltflächen mit Ausdrücken wie "Click me!, Gruppe" gemeldet, was offensichtlich verwirrend ist.

Wir können dies mit einer WAI-ARIA-Rolle beheben. Machen Sie eine lokale Kopie von [`fake-div-buttons.html`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) und fügen Sie [`role="button"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) zu jedem Schaltflächen-`<div>` hinzu, zum Beispiel:

```html
<div data-message="This is from the first button" tabindex="0" role="button">
  Click me!
</div>
```

Jetzt werden Sie mit einem Screenreader ein besseres Ergebnis haben, indem Phrasen wie "Click me!, button" gemeldet werden. Dies ist zwar viel besser, aber Sie müssen immer noch alle anderen nativen Schaltflächenfunktionen hinzufügen, die Benutzer erwarten, wie das Behandeln von `<Enter>`- und Klick-Ereignissen, wie im [`button`-Rollendokumentation](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) erklärt.

> [!NOTE]
> Vergessen Sie jedoch nicht, dass die Verwendung des korrekten semantischen Elements, wo immer möglich, immer besser ist. Wenn Sie eine Schaltfläche erstellen möchten und ein {{htmlelement("button")}}-Element verwenden können, sollten Sie ein {{htmlelement("button")}}-Element verwenden!

### Benutzer durch komplexe Widgets führen

Es gibt eine Vielzahl anderer [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles), die nicht-semantische Elementstrukturen als gängige UI-Funktionen identifizieren können, die über das hinausgehen, was in Standard-HTML verfügbar ist, zum Beispiel [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role), [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role). Sie können sich mehrere nützliche Beispiele in der [Deque University Code Library](https://dequeuniversity.com/library/) ansehen, um eine Vorstellung davon zu bekommen, wie solche Steuerelemente zugänglich gemacht werden können.

Sie finden auch mehrere Live-Beispiele in unserem [WAI-ARIA Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles)-Dokumentation. Siehe zum Beispiel unser [ARIA: tab role Beispiel](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role#example), welches beschreibt, wie man eine zugängliche Tabbed-Oberfläche implementiert.

## Zusammenfassung

Dieser Artikel hat bei weitem nicht alles abgedeckt, was in WAI-ARIA verfügbar ist, aber er sollte Ihnen ausreichend Informationen gegeben haben, um zu verstehen, wie man es benutzt, und einige der häufigsten Muster, die es erfordert, zu erkennen.

Im nächsten Artikel werden wir Ihnen einige Tests bereitstellen, die Sie verwenden können, um zu überprüfen, wie gut Sie alle diese Informationen verstanden und behalten haben.

## Siehe auch

- [Aria-Zustände und -Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes): Alle `aria-*` Attribute
- [WAI-ARIA Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles): Kategorien von ARIA-Rollen und die auf MDN behandelten Rollen
- [ARIA in HTML](https://w3c.github.io/html-aria/) auf W3C: Eine Spezifikation, die definiert, welche Barrierefreiheit (ARIA)-Semantik implizit auf jedes HTML-Feature vom Browser angewandt wird und die WAI-ARIA-Features, die Sie darauf einstellen können, wenn zusätzliche Semantik erforderlich ist.
- [Deque University Code Library](https://dequeuniversity.com/library/): Eine Bibliothek mit wirklich nützlichen und praktischen Beispielen, die komplexe UI-Steuerelemente zeigen, die mithilfe der WAI-ARIA-Features zugänglich gemacht wurden.
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/) auf W3C: Ein sehr detailliertes Designmuster von der W3C, das erklärt, wie verschiedene Typen von komplexen UI-Steuerelementen implementiert werden, während sie mit WAI-ARIA-Features zugänglich gemacht werden.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA", "Learn_web_development/Core/Accessibility")}}
