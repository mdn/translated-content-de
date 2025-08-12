---
title: WAI-ARIA Grundlagen
short-title: WAI-ARIA
slug: Learn_web_development/Core/Accessibility/WAI-ARIA_basics
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility")}}

Wie im vorherigen Artikel beschrieben, kann es manchmal schwierig sein, komplexe UI-Steuerelemente zu erstellen, die nicht-semantisches HTML und dynamisch aktualisierte JavaScript-Inhalte beinhalten. WAI-ARIA ist eine Technologie, die bei solchen Problemen helfen kann, indem sie zusätzliche Semantik hinzufügt, die von Browsern und unterstützenden Technologien erkannt werden kann, um den Benutzern mitzuteilen, was vor sich geht. Hier zeigen wir Ihnen, wie Sie es auf einer grundlegenden Ebene verwenden können, um die Barrierefreiheit zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und den in den vorherigen Lektionen des Moduls gelehrten Best Practices für Barrierefreiheit.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von WAI-ARIA — Semantik bereitzustellen für ansonsten nicht-semantisches HTML, damit Nutzer von unterstützenden Technologien die dargestellten Oberflächen verstehen können.</li>
          <li>Die grundlegende Syntax — Rollen, Eigenschaften und Zustände.</li>
          <li>Landmarken und Wegweiser.</li>
          <li>Verbesserung der Tastaturzugänglichkeit.</li>
          <li>Ankündigung dynamischer Inhaltsaktualisierungen mit Live-Regionen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist WAI-ARIA?

Beginnen wir mit einem Blick darauf, was WAI-ARIA ist und was es für uns tun kann.

### Ein ganz neues Problemset

Als Webanwendungen komplexer und dynamischer wurden, tauchte ein neues Set von Barrierefreiheitsfunktionen und -problemen auf.

Beispielsweise führte HTML mehrere semantische Elemente ein, um gängige Seitenmerkmale zu definieren ({{htmlelement("nav")}}, {{htmlelement("footer")}}, etc.). Bevor diese verfügbar waren, nutzten Entwickler `<div>`s mit IDs oder Klassen, z.B. `<div class="nav">`, was problematisch war, da es keine einfache Möglichkeit gab, programmatisch ein bestimmtes Seitenmerkmal wie die Hauptnavigation zu finden.

Die erste Lösung bestand darin, einen oder mehrere versteckte Links oben auf der Seite hinzuzufügen, um sich zur Navigation (oder was auch immer) zu verlinken, zum Beispiel:

```html
<a href="#hidden" class="hidden">Skip to navigation</a>
```

Aber dies ist immer noch nicht sehr präzise und kann nur genutzt werden, wenn der Screenreader von oben auf der Seite liest.

Ein weiteres Beispiel: Apps begannen, komplexe Steuerungen wie Datumsauswahler zur Datumsauswahl oder Schieberegler zur Wertauswahl zu bieten. HTML stellt spezielle Eingabetypen bereit, um solche Steuerungen darzustellen:

```html
<input type="date" /> <input type="range" />
```

Diese wurden ursprünglich nicht gut unterstützt und es war, und ist immer noch, zu einem gewissen Grad schwierig, sie zu stylen, was dazu führte, dass Designer und Entwickler sich für maßgeschneiderte Lösungen entschieden. Anstatt diese nativen Funktionen zu verwenden, verlassen sich manche Entwickler auf JavaScript-Bibliotheken, die solche Steuerungen als Reihe von verschachtelten {{htmlelement("div")}}s generieren, die dann mithilfe von CSS gestylt und mit JavaScript gesteuert werden.

Das Problem hier ist, dass sie visuell funktionieren, aber Screenreader können überhaupt keinen Sinn darin sehen, was sie sind, und ihre Nutzer erhalten nur eine verworrene Menge an Elementen ohne Semantik, die beschreibt, was sie bedeuten.

### Einführung von WAI-ARIA

[WAI-ARIA](https://w3c.github.io/aria/) (Web Accessibility Initiative - Accessible Rich Internet Applications) ist eine von der W3C verfasste Spezifikation, die eine Reihe zusätzlicher HTML-Attribute definiert, die auf Elemente angewendet werden können, um zusätzliche Semantik bereitzustellen und die Barrierefreiheit dort zu verbessern, wo sie fehlt. Die Spezifikation definiert drei Hauptfunktionen:

- [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Diese definieren, was ein Element ist oder tut. Viele davon sind sogenannte Landmark-Rollen, die größtenteils den semantischen Wert von Strukturelementen duplizieren, wie `role="navigation"` ({{htmlelement("nav")}}), `role="banner"` (Dokument-{{htmlelement("header")}}), `role="complementary"` ({{htmlelement("aside")}}) oder `role="search"` ({{htmlelement("search")}}). Einige andere Rollen beschreiben verschiedene Seitenstrukturen, die keine Elemente mit diesen Rollen haben, wie `role="tablist"` und `role="tabpanel"`, die häufig in UIs zu finden sind.
- Eigenschaften
  - : Diese definieren Eigenschaften von Elementen, die verwendet werden können, um ihnen zusätzliche Bedeutung oder Semantik zu geben. Ein Beispiel ist `aria-required="true"`, welches angibt, dass ein Formularelement ausgefüllt werden muss, um gültig zu sein, während `aria-labelledby="label"` es Ihnen ermöglicht, eine ID einem Element zuzuweisen und es als Label für etwas anderes auf der Seite zu referenzieren, einschließlich mehrerer Elemente, was mit `<label for="input">` nicht möglich ist. Als Beispiel könnte man `aria-labelledby` verwenden, um anzugeben, dass eine in einem {{htmlelement("div")}} enthaltene Schlüsselinformation das Label für mehrere Tabellenzellen ist, oder als Alternative zu Bild-Alt-Text — vorhandene Informationen auf der Seite als Alt-Text eines Bildes verwenden, anstatt sie im `alt`-Attribut zu wiederholen. Ein Beispiel hierfür finden Sie unter [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives).
- Zustände
  - : Besondere Eigenschaften, die den aktuellen Zustand von Elementen definieren, z.B. `aria-disabled="true"`, das einem Screenreader angibt, dass ein Formularelement derzeit deaktiviert ist. Zustände unterscheiden sich von Eigenschaften dadurch, dass Eigenschaften sich nicht über den Lebenszyklus einer App ändern, während sich Zustände ändern können, üblicherweise programmatisch mit JavaScript.

Ein wichtiger Punkt zu WAI-ARIA-Attributen ist, dass sie nichts an der Webseite verändern, außer den Informationen, die durch die Accessibility-APIs des Browsers bereitgestellt werden (woher Screenreader ihre Informationen beziehen). WAI-ARIA beeinflusst weder die Webseitenstruktur, noch das DOM usw., obwohl die Attribute nützlich sein können, um Elemente mithilfe von CSS auszuwählen.

> [!NOTE]
> Eine nützliche Liste aller ARIA-Rollen und ihrer Verwendungen, mit Links zu weiteren Informationen, finden Sie in der WAI-ARIA-Spezifikation — siehe [Definition of Roles](https://w3c.github.io/aria/#role_definitions) — auf dieser Seite — siehe [ARIA roles](/de/docs/Web/Accessibility/ARIA/Reference/Roles).
>
> Die Spezifikation enthält auch eine Liste aller Eigenschaften und Zustände, mit Links zu weiteren Informationen — siehe [Definitions of States and Properties (all `aria-*` attributes)](https://w3c.github.io/aria/#state_prop_def).

## Wo wird WAI-ARIA unterstützt?

Dies ist keine einfach zu beantwortende Frage. Es ist schwierig, eine abschließende Ressource zu finden, die aussagt, welche Funktionen von WAI-ARIA wo unterstützt werden, weil:

1. Es viele Funktionen in der WAI-ARIA-Spezifikation gibt.
2. Es viele Kombinationen von Betriebssystemen, Browsern und Screenreadern gibt, die berücksichtigt werden müssen.

Dieser letzte Punkt ist entscheidend — Um überhaupt einen Screenreader zu verwenden, muss Ihr Betriebssystem Browser ausführen, die die erforderlichen Accessibility-APIs bereitstellen, um die Informationen für Screenreader zugänglich zu machen. Die meisten weit verbreiteten Betriebssysteme haben ein oder zwei Browser, mit denen Screenreader zusammenarbeiten können. Die Paciello Group hat einen recht aktuellen Beitrag, der Daten hierzu liefert — siehe [Rough Guide: browsers, operating systems and screen reader support updated](https://www.tpgi.com/rough-guide-browsers-operating-systems-and-screen-reader-support-updated/).

Als nächstes müssen Sie sich darum kümmern, ob die betreffenden Browser ARIA-Funktionen unterstützen und über ihre APIs zugänglich machen, aber auch, ob die Screenreader diese Informationen erkennen und ihren Nutzern auf nützliche Weise präsentieren.

1. Die Browserunterstützung ist nahezu universell.
2. Die Screenreader-Unterstützung für ARIA-Funktionen ist noch nicht ganz auf diesem Niveau, aber die beliebtesten Screenreader nähern sich diesem. Sie können eine Vorstellung von den Unterstützungsstufen erhalten, indem Sie PowerMapper's Artikel [WAI-ARIA Screen reader compatibility](https://www.powermapper.com/tests/screen-readers/aria/) lesen.

In diesem Artikel werden wir nicht versuchen, jede WAI-ARIA-Funktion und deren genauen Unterstützungsdetails abzudecken. Stattdessen werden wir die kritischsten WAI-ARIA-Funktionen behandeln, über die Sie Bescheid wissen sollten; wenn wir keine Unterstützungsdetails erwähnen, können Sie davon ausgehen, dass die Funktion gut unterstützt wird. Wir werden eindeutig auf etwaige Ausnahmen hinweisen.

> [!NOTE]
> Einige JavaScript-Bibliotheken unterstützen WAI-ARIA, was bedeutet, dass sie beim Generieren von UI-Funktionen wie komplexen Formularsteuerelementen ARIA-Attribute hinzufügen, um die Zugänglichkeit dieser Funktionen zu verbessern. Wenn Sie nach einer Drittanbieter-JavaScript-Lösung für die schnelle UI-Entwicklung suchen, sollten Sie die Barrierefreiheit seiner UI-Widgets als wichtigen Faktor bei Ihrer Wahl berücksichtigen. Gute Beispiele dafür sind jQuery UI (siehe [About jQuery UI: Deep accessibility support](https://jqueryui.com/about/#deep-accessibility-support)), [ExtJS](https://www.sencha.com/products/extjs/) und [Dojo/Dijit](https://dojotoolkit.org/reference-guide/1.10/dijit/a11y/statement.html).

## Wann sollten Sie WAI-ARIA verwenden?

Wir haben bereits einige der Probleme besprochen, die zur Entwicklung von WAI-ARIA geführt haben, aber im Wesentlichen gibt es vier Hauptbereiche, in denen WAI-ARIA nützlich ist:

- Wegweiser/Landmarken
  - : ARIA's [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)-Attributwerte können als Landmarken dienen, die entweder die Semantik von HTML-Elementen replizieren (z.B. {{htmlelement("nav")}}) oder über die HTML-Semantik hinausgehen, um Wegweiser zu verschiedenen Funktionsbereichen bereitzustellen, z.B. `search`, `tablist`, `tab`, `listbox` usw.
- Dynamische Inhaltsaktualisierungen
  - : Screenreader haben oft Schwierigkeiten mit der Meldung von sich ständig ändernden Inhalten; mit ARIA können wir `aria-live` verwenden, um Screenreader-Nutzern mitzuteilen, wenn ein Inhaltsbereich dynamisch aktualisiert wird: zum Beispiel, indem JavaScript auf der Seite neue Inhalte vom Server abruft und das DOM aktualisiert (siehe [Erstellen von Netzwerkanforderungen](/de/docs/Learn_web_development/Core/Scripting/Network_requests)).
- Verbesserung der Tastaturzugänglichkeit
  - : Es gibt integrierte HTML-Elemente mit nativer Tastaturzugänglichkeit; wenn andere Elemente zusammen mit JavaScript verwendet werden, um ähnliche Interaktionen zu simulieren, leidet die Tastaturzugänglichkeit und die Screenreader-Berichterstattung. Wo dies unvermeidlich ist, bietet WAI-ARIA eine Möglichkeit, andere Elemente in den Fokus zu nehmen (mithilfe von `tabindex`).
- Zugänglichkeit von nicht-semantischen Steuerelementen
  - : Wenn eine Reihe von verschachtelten `<div>`s zusammen mit CSS/JavaScript verwendet wird, um eine komplexe UI-Funktion zu erstellen, oder ein nativer Steuerung durch JavaScript stark verbessert/verändert wird, leidet die Zugänglichkeit — Screenreader-Nutzer werden es schwierig finden herauszufinden, was die Funktion tut, wenn es keine Semantik oder andere Hinweise gibt. In diesen Situationen kann ARIA dabei helfen, das Fehlende mit einer Kombination von Rollen wie `button`, `listbox` oder `tablist` sowie Eigenschaften wie `aria-required` oder `aria-posinset` bereitzustellen, um weitere Hinweise auf die Funktionalität zu geben.

Im nächsten Abschnitt schauen wir uns die vier Hauptbereiche, die zuvor beschrieben wurden, ausführlicher an und geben Beispiele. Bevor Sie fortfahren, sollten Sie eine Testeinrichtung für Screenreader einrichten, damit Sie einige der Beispiele währenddessen testen können. Siehe unseren Abschnitt über [Testen von Screenreadern](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers) für mehr Informationen.

> [!CALLOUT]
>
> **Sie sollten WAI-ARIA nur verwenden, wenn Sie es brauchen!**
>
> Die Verwendung der richtigen HTML-Elemente gibt Ihnen implizit die erforderlichen Rollen, und Sie sollten _immer_ versuchen, [native HTML-Funktionen](/de/docs/Learn_web_development/Core/Accessibility/HTML) zu verwenden, um die Semantik zu liefern, die Screenreader benötigen, um ihren Nutzern zu erläutern, was vor sich geht. Manchmal ist dies jedoch nicht möglich, entweder weil Sie begrenzte Kontrolle über den Code haben oder weil Sie etwas Komplexes erstellen, für das es kein einfaches HTML-Element gibt, um es zu implementieren. In solchen Fällen kann WAI-ARIA ein wertvolles Werkzeug zur Verbesserung der Zugänglichkeit sein.
>
> Aber nochmals, verwenden Sie es nur, wenn es nötig ist!
>
> Versuchen Sie auch, Ihre Website mit einer Vielzahl von _echten_ Benutzern zu testen — nicht behinderte Menschen, Menschen, die Screenreader verwenden, Menschen, die Tastaturnavigation verwenden usw. Sie werden bessere Einblicke haben, wie gut sie funktioniert.

## Wegweiser/Landmarken

WAI-ARIA fügt den Browsern das [`role`-Attribut](https://w3c.github.io/aria/#role_definitions) hinzu, das es Ihnen ermöglicht, an den benötigten Stellen auf Ihrer Website zusätzliche semantische Werte zu Elementen hinzuzufügen. Der erste Hauptbereich, in dem dies nützlich ist, ist die Bereitstellung von Informationen für Screenreader, damit deren Nutzer gemeinsame Seitenelemente finden können. Dieses Beispiel hat die folgende Struktur:

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

Wenn Sie das Beispiel mit einem Screenreader in einem modernen Browser testen, erhalten Sie bereits einige nützliche Informationen. Zum Beispiel gibt VoiceOver Ihnen Folgendes:

- Auf dem `<header>`-Element — "Banner, 2 Elemente" (es enthält eine Überschrift und das `<nav>`).
- Auf dem `<nav>`-Element — "Navigation 2 Elemente" (es enthält eine Liste und ein Formular).
- Auf dem `<main>`-Element — "Main 2 Elemente" (es enthält einen Artikel und eine Beiseite).
- Auf dem `<aside>`-Element — "ergänzend 2 Elemente" (es enthält eine Überschrift und eine Liste).
- Auf dem Suchformulareingabefeld — "Suchanfrage, Einfügemarkierung am Anfang des Textes".
- Auf dem `<footer>`-Element — "Fußzeile 1 Element".

Wenn Sie das Landmarks-Menü von VoiceOver aufrufen (mit der VoiceOver-Taste + U und dann mit den Pfeiltasten durch die Menüauswahl gehen), sehen Sie, dass die meisten Elemente schön aufgelistet sind, sodass sie schnell zugänglich sind.

![Macs VoiceOver-Menü für schnelle Zugänglichkeit. Überschrift Wegweiser und Wegweiserliste einschließlich Banner, Navigation, Hauptbereich und ergänzend.](landmarks-list.png)

Allerdings könnten wir hier noch besser abschneiden. Das Suchformular ist ein wirklich wichtiger Anhaltspunkt, den die Leute finden wollen, wird aber im Wegweiser-Menü nicht aufgelistet oder über das eigentliche Eingabeformular hinaus als bemerkenswerter Anhaltspunkt behandelt (`<input type="search">`).

Wir könnten es verbessern, indem wir die ARIA `role="search"` nutzen, aber die Verwendung des {{htmlelement("search")}}-Elements gibt dieses Rolle dem Formular implizit.

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

Am wichtigsten ist, dass wir semantisches HTML verwendet haben, das Bedeutung und Rollen für die Struktur der Seite liefert, ohne unnötige [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)-Attribute zu unserer HTML-Struktur hinzuzufügen, die eine Struktur wie diese hat:

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

Wir haben Ihnen in diesem Beispiel auch ein Bonus-Feature gegeben — das {{htmlelement("input")}}-Element wurde mit dem Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) versehen, das ihm ein beschreibendes Label gibt, das von einem Screenreader vorgelesen wird, auch wenn wir kein {{htmlelement("label")}}-Element eingefügt haben. In solchen Fällen ist dies sehr nützlich — ein Suchformular wie dieses ist ein sehr weit verbreitetes, leicht erkennbares Merkmal, und die Hinzufügung eines visuellen Labels würde das Seitendesign beeinträchtigen.

```html
<input
  type="search"
  name="q"
  placeholder="Search query"
  aria-label="Search through site content" />
```

Nun, wenn wir VoiceOver verwenden, um dieses Beispiel zu betrachten, erhalten wir einige Verbesserungen:

- Das Suchformular wird sowohl beim Durchsuchen der Seite als auch im Wegweiser-Menü als separates Element hervorgehoben.
- Der Text im `aria-label`-Attribut wird vorgelesen, wenn das Formulareingabefeld hervorgehoben wird.

Wenn Sie ältere Browser wie IE8 unterstützen müssen, lohnt es sich, ARIA-Rollen aus diesem Grund einzuschließen. Und wenn aus irgendeinem Grund Ihre Website nur aus `<div>`s besteht, sollten Sie auf jeden Fall die ARIA-Rollen hinzufügen, um diese dringend benötigte Semantik bereitzustellen!

Sie werden noch mehr über diese Semantik und die Kraft von ARIA-Eigenschaften/Attributen unten erfahren, insbesondere im Abschnitt [Zugänglichkeit von nicht-semantischen Steuerelementen](#zugänglichkeit_von_nicht-semantischen_steuerelementen). Vorerst werfen wir jedoch einen Blick darauf, wie ARIA bei dynamischen Inhaltsaktualisierungen helfen kann.

## Dynamische Inhaltsaktualisierungen

Inhalt, der in das DOM geladen wird, ist leicht mit einem Screenreader zugänglich, von Textinhalt bis zu Alternative Texten, die Bildern zugeordnet sind. Traditionelle statische Websites mit weitgehend Textinhalt sind daher einfach barrierefrei für Menschen mit Sehbehinderungen.

Das Problem ist, dass moderne Webanwendungen oft nicht nur statischer Text sind — sie aktualisieren oft Teile der Seite, indem sie neue Inhalte vom Server abrufen (in diesem Beispiel verwenden wir ein statisches Array von Zitaten) und das DOM aktualisieren. Diese werden manchmal als **live region** bezeichnet.

Schauen wir uns ein Beispiel an — ein Zufalls-Zitatgenerator:

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

Das funktioniert ganz gut, ist aber aus der Sicht der Barrierefreiheit nicht optimal — die Inhaltsaktualisierung wird von Screenreadern nicht erkannt, sodass deren Nutzer nicht wissen würden, was vor sich geht. Dies ist ein recht triviales Beispiel, aber stellen Sie sich nur vor, wie es wäre, wenn Sie eine komplexe Benutzeroberfläche mit vielen ständig aktualisierten Inhalten erstellen würden, wie ein Chatraum, eine Strategie-Spiel-Oberfläche oder eine Live-aktualisierte Warenkorb-Anzeige — es wäre unmöglich, die App in irgendeiner effektiven Weise ohne irgendeine Art von Benachrichtigung für den Nutzer über die Updates zu verwenden.

WAI-ARIA bietet glücklicherweise einen nützlichen Mechanismus, um diese Benachrichtigungen bereitzustellen — die [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) Eigenschaft. Die Anwendung dieser auf ein Element bewirkt, dass Screenreader den aktualisierten Inhalt vorlesen. Wie dringend der Inhalt vorgelesen wird, hängt vom Attributwert ab:

- `off`
  - : Der Standardwert. Updates sollen nicht angekündigt werden.
- `polite`
  - : Updates sollen nur angekündigt werden, wenn der Nutzer gerade nichts tut.
- `assertive`
  - : Updates sollen dem Nutzer so schnell wie möglich angekündigt werden.

Hier aktualisieren wir den Öffnungstag von `<blockquote>` wie folgt:

```html
<blockquote aria-live="assertive">…</blockquote>
```

Dies führt dazu, dass ein Screenreader den Inhalt liest, sobald er aktualisiert wird: Versuchen Sie, die aktualisierte Live-Version zu testen:

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
> - Die [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)-Eigenschaft, wenn auf `true` gesetzt, weist Screenreader an, den gesamten Elementinhalt als eine atomare Einheit vorzulesen und nicht nur die Teile, die aktualisiert wurden. Dies ist nützlich, wenn nur ein Abschnittsinhalt aktualisiert wird, aber Sie möchten, dass die Überschrift bei jeder Änderung mitvorgelesen wird, um den Nutzer an deren Inhalt zu erinnern.
> - Die [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)-Eigenschaft ist nützlich, um zu steuern, was vorgelesen wird, wenn eine Live-Region aktualisiert wird. Sie können beispielsweise nur in Betracht gezogene Inhalte oder Entfernungen vorlesen lassen.

## Verbesserung der Tastaturzugänglichkeit

Wie in einigen anderen Bereichen des Moduls besprochen, ist einer der Hauptvorteile von HTML im Hinblick auf Barrierefreiheit die eingebaute Tastaturzugänglichkeit von Funktionen wie Schaltflächen, Formulareingaben und Links. Im Allgemeinen können Sie die Tabulatortaste verwenden, um zwischen Steuerungen zu wechseln, die Eingabetaste, um Steuerungen auszuwählen oder zu aktivieren, und gelegentlich andere Steuerungen nach Bedarf (zum Beispiel die Auf-/Ab-Pfeiltasten, um zwischen den Optionen in einem `<select>` Feld zu wechseln).

Es wird jedoch Zeiten geben, in denen Sie Code schreiben müssen, der entweder nicht-semantische Elemente als Schaltflächen (oder andere Arten von Steuerungen) verwendet, oder bei dem fokussierbare Steuerungen für nicht ganz den richtigen Zweck verwendet werden. Möglicherweise versuchen Sie, schlechten Code, den Sie geerbt haben, zu beheben, oder Sie erstellen eine Art komplexes Widget, das dies erfordert.

In Bezug auf die Fokussierung von nicht-fokussierbarem Code erweitert WAI-ARIA das `tabindex` Attribut um einige neue Werte:

- `tabindex="0"` — wie oben angegeben, ermöglicht dieser Wert, dass Elemente, die normalerweise nicht tabulierbar sind, tabulierbar werden. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — ermöglicht es nicht normaler nicht-tabulierbarer Elemente, programmatisch fokussiert zu werden, z.B. durch JavaScript oder als Ziel von Links.

Wir haben dies ausführlicher besprochen und eine typische Implementierung in unserem HTML-Zugänglichkeitsartikel gezeigt — siehe [Erneute Herstellung der Tastaturzugänglichkeit](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in).

## Zugänglichkeit von nicht-semantischen Steuerelementen

Dies knüpft an den vorherigen Abschnitt an — wenn eine Reihe von verschachtelten `<div>`s zusammen mit CSS/JavaScript verwendet wird, um eine komplexe UI-Funktion zu erstellen, oder eine native Steuerung stark verbessert/verändert wird durch JavaScript, leidet nicht nur die Tastaturzugänglichkeit, sondern auch Screenreader-Nutzer werden Schwierigkeiten haben, herauszufinden, was die Funktion tut, wenn es keine Semantik oder andere Hinweise gibt. In solchen Situationen kann ARIA helfen, diese fehlende Semantik bereitzustellen.

### Formularvalidierung und Fehlerwarnungen

Lassen Sie uns zuerst das Formularbeispiel wiederholen, das wir zuerst in unserem CSS- und JavaScript-Zugänglichkeitsartikel betrachtet haben (lesen Sie [Unauffällig bleiben](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#keeping_it_unobtrusive) für eine vollständige Zusammenfassung). Am Ende dieses Abschnitts zeigten wir, dass wir einige ARIA-Attribute in das Fehlernachrichtenfeld eingefügt haben, das alle Validierungsfehler anzeigt, wenn Sie versuchen, das Formular abzusenden:

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

- [`role="alert"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) verwandelt das angewendete Element automatisch in eine Live-Region, sodass Änderungen daran vorgelesen werden; es identifiziert es auch semantisch als Warnmeldung (wichtige zeit-/kontextbezogene Informationen) und stellt eine bessere, zugänglichere Möglichkeit dar, eine Warnung an einen Benutzer zu liefern (Modale Dialoge wie [`alert()`](/de/docs/Web/API/Window/alert)-Aufrufe haben einige Barrierefreiheitsprobleme; siehe [Popup-Fenster](https://webaim.org/techniques/javascript/other#popups) von WebAIM).
- Ein [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)-Wert von `all` weist den Screenreader an, den Inhalt der Fehlerliste vorzulesen, wenn Änderungen daran vorgenommen werden — d.h. wenn Fehler hinzugefügt oder entfernt werden. Dies ist nützlich, da der Nutzer wissen möchte, welche Fehler noch übrig sind, nicht nur, was der Liste hinzugefügt oder daraus entfernt wurde.

Wir könnten die Nutzung von ARIA weiter ausbauen und weiterführende Validierungshilfen bereitstellen. Wie wäre es, wenn angezeigt wird, ob Felder überhaupt notwendig sind und welchen Bereich das Alter haben sollte?

1. Erstellen Sie an dieser Stelle eine Kopie unserer [`form-validation.html`](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html)- und [`validation.js`](https://github.com/mdn/learning-area/blob/main/accessibility/css/validation.js)-Dateien und speichern Sie sie in einem lokalen Verzeichnis.
2. Öffnen Sie beide in einem Texteditor und werfen Sie einen Blick darauf, wie der Code funktioniert.
3. Fügen Sie zuerst einen Absatz direkt über dem Öffnungstag des `<form>`-Tags hinzu, wie den untenstehenden, und markieren Sie beide Formular-`<label>`s mit einem Sternchen. So markieren wir normalerweise erforderliche Felder für sehende Benutzer.

   ```html
   <p>Fields marked with an asterisk (*) are required.</p>
   ```

4. Dies ist visuell sinnvoll, aber es ist nicht so einfach zu verstehen für Screenreader-Nutzer. Zum Glück bietet WAI-ARIA das Attribut [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required) an, um Screenreader Hinweise zu geben, dass Formulareingaben ausgefüllt werden müssen. Aktualisieren Sie die `<input>`-Elemente folgendermaßen:

   ```html
   <input type="text" name="name" id="name" aria-required="true" />

   <input type="number" name="age" id="age" aria-required="true" />
   ```

5. Wenn Sie das Beispiel nun speichern und mit einem Screenreader testen, sollten Sie etwas wie "Geben Sie Ihren Namen ein Stern, erforderlich, bearbeiten Sie den Text" hören.
6. Es wäre auch nützlich, wenn wir Screenreader-Nutzern und sehenden Nutzern eine Vorstellung davon vermitteln, welcher Alterswert angemessen ist. Dies wird oft als Tooltip oder Platzhalter im Formularfeld angezeigt. WAI-ARIA beinhaltet die Eigenschaften [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax), um Mindest- und Höchstwerte anzugeben, und Screenreader unterstützen die nativen `min`- und `max`-Attribute. Eine weitere gut unterstützte Funktion ist das HTML-Attribut `placeholder`, das eine Nachricht enthalten kann, die angezeigt wird, wenn kein Wert eingegeben wird, und von einigen Screenreadern vorgelesen wird. Aktualisieren Sie Ihr Numbers Input so:

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

Inkludieren Sie immer ein {{HTMLelement('label')}} für jede Eingabe. Während einige Screenreader den Placeholder-Text ankündigen, tun dies die meisten nicht. Akzeptable Ersatzmethoden für die Bereitstellung von Formularsteuerelementen mit einem zugänglichen Namen beinhalten [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) und [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby). Aber das `<label>`-Element mit einem `for`-Attribut ist die bevorzugte Methode, da es die Benutzerfreundlichkeit für alle Nutzer, inklusive Mausbenutzer, gewährleistet.

> [!NOTE]
> Sie können das fertige Beispiel live sehen unter [`form-validation-updated.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-updated.html).

WAI-ARIA ermöglicht auch einige fortgeschrittene Formularbeschriftungstechniken, jenseits des klassischen {{htmlelement("label")}}-Elements. Wir haben bereits darüber gesprochen, die [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) Eigenschaft zu verwenden, um dort eine Beschriftung bereitzustellen, wo wir nicht möchten, dass die Beschriftung für sehende Nutzer sichtbar ist (sehen Sie den Abschnitt [Wegweiser/Landmarken](#signpostslandmarks) oben). Einige andere Beschriftungstechniken verwenden andere Eigenschaften wie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn Sie ein nicht-`<label>`-Element als Beschriftung oder ein Beschriftung für mehrere Formulareingaben mit demselben Label festlegen möchten, und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby), wenn Sie andere Informationen mit einer Formulareingabe verknüpfen und ebenfalls vorgelesen haben möchten. Weitere Details finden Sie im [Advanced Form Labeling article](https://webaim.org/techniques/forms/advanced) von WebAIM.

Es gibt auch viele andere nützliche Eigenschaften und Zustände, um den Status von Formularelementen anzuzeigen. Zum Beispiel kann `aria-disabled="true"` verwendet werden, um anzugeben, dass ein Formularfeld deaktiviert ist. Viele Browser überspringen deaktivierte Formularfelder, was dazu führt, dass sie nicht von Screenreadern vorgelesen werden. In einigen Fällen wird ein deaktiviertes Element wahrgenommen, daher ist es eine gute Idee, dieses Attribut einzuschließen, um den Screenreader wissen zu lassen, dass ein deaktiviertes Formularelement tatsächlich deaktiviert ist.

Wenn sich der deaktivierte Zustand einer Eingabe wahrscheinlich ändert, ist es auch eine gute Idee, anzugeben, wenn dies geschieht, und was das Ergebnis ist. Zum Beispiel gibt es in unserem [`form-validation-checkbox-disabled.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-checkbox-disabled.html) Demo ein Kontrollkästchen, das, wenn aktiviert, ein weiteres Formulareingabe zur Eingabe weiterer Informationen freigibt. Wir haben eine versteckte Live-Region eingerichtet:

```html
<p class="hidden-alert" aria-live="assertive"></p>
```

die durch absolute Positionierung vor der Ansicht verborgen ist. Wenn dies aktiviert/deaktiviert wird, aktualisieren wir den Text in der versteckten Live-Region, um Screenreader-Nutzer darüber zu informieren, was das Ergebnis des Anhakens dieses Kontrollkästchens ist, sowie den `aria-disabled`-Zustand und einige visuelle Indikatoren auch:

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

Einige Male in diesem Kurs haben wir bereits die native Zugänglichkeit (und die Zugänglichkeitsprobleme beim Verwenden anderer Elemente zur Nachahmung) von Schaltflächen, Links oder Formularelementen erwähnt (siehe [Verwenden Sie, wenn möglich, semantische UI-Steuerelemente](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible) im HTML-Zugänglichkeitsartikel und [Verbesserung der Tastaturzugänglichkeit](#verbesserung_der_tastaturzugänglichkeit) oben). Grundsätzlich können Sie die Tastaturzugänglichkeit in vielen Fällen ohne großen Aufwand wiederherstellen, indem Sie `tabindex` und ein wenig JavaScript verwenden.

Aber was ist mit Screenreadern? Sie erkennen die Elemente immer noch nicht als Schaltflächen. Wenn wir unser [`fake-div-buttons.html`](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) Beispiel in einem Screenreader testen, werden unsere gefälschten Schaltflächen mit Phrasen wie "Klick mich, Gruppe" gemeldet, was offensichtlich verwirrend ist.

Dies können wir mit einer WAI-ARIA-Rolle beheben. Machen Sie eine lokale Kopie von [`fake-div-buttons.html`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) und fügen Sie [`role="button"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) zu jedem Schaltflächen-`<div>` hinzu, zum Beispiel:

```html
<div data-message="This is from the first button" tabindex="0" role="button">
  Click me!
</div>
```

Nun, wenn Sie dies mit einem Screenreader versuchen, werden Ihre Schaltflächen mit Phrasen wie "Klick mich, Schaltfläche" gemeldet. Während dies viel besser ist, müssen Sie dennoch alle native Schaltfläche erwartet Funktionen hinzufügen, wie die Behandlung von <kbd>enter</kbd> und Klick-Ereignissen, wie im [`button` role documentation](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) erklärt.

> [!NOTE]
> Vergessen Sie jedoch nicht, dass die Verwendung des richtigen semantischen Elements, wo möglich, immer besser ist. Wenn Sie eine Schaltfläche erstellen möchten und ein {{htmlelement("button")}}-Element verwenden können, sollten Sie ein {{htmlelement("button")}}-Element verwenden!

### Benutzer bei komplexen Widgets leiten

Es gibt eine Vielzahl von anderen [rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles), die nicht-semantische Elementstrukturen als gängige UI-Funktionen identifizieren können, die über die in Standard-HTML verfügbaren hinausgehen, zum Beispiel [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role), [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role). Sie können einige nützliche Beispiele in der [Deque university code library](https://dequeuniversity.com/library/) finden, um Ihnen eine Vorstellung davon zu geben, wie solche Steuerelemente zugänglich gemacht werden können.

Sie können auch mehrere Live-Beispiele in unserer [WAI-ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles) Dokumentation finden. Siehe zum Beispiel unser [ARIA: tab role example](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role#example), das erklärt, wie man eine zugängliche Registerkartenschnittstelle implementiert.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA).

## Zusammenfassung

Dieser Artikel hat bei weitem nicht alles abgedeckt, was in WAI-ARIA verfügbar ist, aber er sollte Ihnen genug Informationen gegeben haben, um zu verstehen, wie Sie es verwenden und einige der häufigsten Muster, die es erfordern, kennenlernen können.

## Siehe auch

- [ARIA-Zustände und -Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes): Alle `aria-*` Attribute
- [WAI-ARIA Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles): Kategorien von ARIA-Rollen und die auf MDN behandelten Rollen
- [ARIA in HTML](https://w3c.github.io/html-aria/) auf W3C: Eine Spezifikation, die für jede HTML-Funktion die Barrierefreiheit (ARIA)-Semantik definiert, die ihr durch den Browser implizit zugewiesen wird und die WAI-ARIA-Funktionen, die Sie festlegen können, wenn zusätzliche Semantik erforderlich ist
- [Deque university code library](https://dequeuniversity.com/library/): Eine Bibliothek von wirklich nützlichen und praktischen Beispielen, die zeigen, wie komplexe UI-Steuerelemente mit WAI-ARIA-Funktionen zugänglich gemacht werden
- [WAI-ARIA Autorentpraktiken](https://www.w3.org/WAI/ARIA/apg/) auf W3C: Ein sehr detailliertes Designmuster von der W3C, das erklärt, wie man verschiedene Arten von komplexen UI-Steuerelementen implementiert, während sie mit WAI-ARIA-Funktionen zugänglich gemacht werden

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility")}}
