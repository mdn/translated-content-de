---
title: Grundlagen von WAI-ARIA
short-title: WAI-ARIA
slug: Learn_web_development/Core/Accessibility/WAI-ARIA_basics
l10n:
  sourceCommit: de5b264fa7bf6bb49811bf79f8f28f10835bfb79
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA", "Learn_web_development/Core/Accessibility")}}

Fortführend aus dem vorherigen Artikel kann es manchmal schwierig sein, komplexe Benutzeroberflächen zu erstellen, die unsemantisches HTML und dynamisch durch JavaScript aktualisierte Inhalte beinhalten. WAI-ARIA ist eine Technologie, die bei solchen Problemen helfen kann, indem sie zusätzliche Semantik hinzufügt, die Browser und unterstützende Technologien erkennen und verwenden können, um Benutzer darüber zu informieren, was passiert. Hier zeigen wir, wie Sie es auf grundlegender Ebene verwenden können, um die Barrierefreiheit zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und den besten Praktiken zur Barrierefreiheit, wie sie in vorherigen Lektionen des Moduls gelehrt wurden</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von WAI-ARIA — Semantik zu ansonsten unsemantischem HTML hinzuzufügen, damit Benutzer von unterstützenden Technologien die Schnittstellen verstehen, die ihnen präsentiert werden.</li>
          <li>Die grundlegende Syntax — Rollen, Eigenschaften und Zustände.</li>
          <li>Orientierungspunkte und Wegweiser.</li>
          <li>Verbesserung der Tastaturzugänglichkeit.</li>
          <li>Ankündigung dynamischer Inhaltsaktualisierungen mit Live-Bereichen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist WAI-ARIA?

Beginnen wir damit, zu betrachten, was WAI-ARIA ist und was es für uns tun kann.

### Eine ganz neue Reihe von Problemen

Als Web-Apps komplexer und dynamischer wurden, traten eine neue Reihe von Barrierefreiheitsfunktionen und -problemen auf.

Zum Beispiel führte HTML eine Reihe von semantischen Elementen ein, um allgemeine Seitenfunktionen zu definieren ({{htmlelement("nav")}}, {{htmlelement("footer")}} usw.). Bevor diese verfügbar waren, verwendeten Entwickler {{htmlelement("div")}}s mit IDs oder Klassen, z. B. `<div class="nav">`, aber diese waren problematisch, da es keine einfache Möglichkeit gab, eine bestimmte Seitenfunktion wie die Hauptnavigation programmgesteuert leicht zu finden.

Die anfängliche Lösung bestand darin, einen oder mehrere versteckte Links oben auf der Seite hinzuzufügen, um zur Navigation (oder was auch immer) zu verlinken, z. B.:

```html
<a href="#hidden" class="hidden">Skip to navigation</a>
```

Aber das ist immer noch nicht sehr präzise und kann nur verwendet werden, wenn der Bildschirmleser von oben auf der Seite liest.

Ein weiteres Beispiel sind Apps, die begannen, komplexe Steuerelemente wie Datumsauswähler zum Auswählen von Daten, Schieberegler zum Auswählen von Werten usw. zu verwenden. HTML bietet spezielle Eingabetypen, um solche Steuerelemente zu rendern:

```html
<input type="date" /> <input type="range" />
```

Diese wurden ursprünglich nicht gut unterstützt und es war, und ist immer noch in geringerem Maße, schwierig, sie zu gestalten, was Designer und Entwickler dazu veranlasste, sich für benutzerdefinierte Lösungen zu entscheiden. Anstatt diese nativen Funktionen zu verwenden, verlassen sich einige Entwickler auf JavaScript-Bibliotheken, die solche Steuerelemente als eine Reihe von verschachtelten {{htmlelement("div")}}s generieren, die dann mit CSS gestaltet und mit JavaScript gesteuert werden.

Das Problem hierbei ist, dass sie visuell funktionieren, aber Bildschirmleser sie überhaupt nicht verstehen können, und ihre Benutzer nur mitgeteilt bekommen, dass sie ein Durcheinander von Elementen ohne Semantik sehen können, um zu beschreiben, was sie bedeuten.

### Einführung von WAI-ARIA

[WAI-ARIA](https://w3c.github.io/aria/) (Web Accessibility Initiative - Accessible Rich Internet Applications) ist eine von der W3C verfasste Spezifikation, die eine Reihe von zusätzlichen HTML-Attributen definiert, die auf Elemente angewendet werden können, um zusätzliche Semantik bereitzustellen und die Barrierefreiheit dort zu verbessern, wo sie fehlt. In der Spezifikation sind drei Hauptfunktionen definiert:

- [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Diese definieren, was ein Element ist oder tut. Viele dieser Rollen sind sogenannte Landmark-Rollen, die weitgehend den semantischen Wert von Strukturelementen duplizieren, wie `role="navigation"` ({{htmlelement("nav")}}), `role="banner"` (Dokument {{htmlelement("header")}}), `role="complementary"` ({{htmlelement("aside")}}) oder, `role="search"` ({{htmlelement("search")}}). Einige andere Rollen beschreiben verschiedene Seitenstrukturen, für die es keine Elemente mit entsprechenden Rollen gibt, wie `role="tablist"` und `role="tabpanel"`, die häufig in Benutzeroberflächen zu finden sind.
- Eigenschaften
  - : Diese definieren Eigenschaften von Elementen, die verwendet werden können, um ihnen zusätzliche Bedeutung oder Semantik zu verleihen. Zum Beispiel gibt `aria-required="true"` an, dass eine Formulareingabe ausgefüllt werden muss, um gültig zu sein, während `aria-labelledby="label"` Ihnen ermöglicht, eine ID auf ein Element zu setzen und es dann als Beschriftung für irgendetwas anderes auf der Seite zu referenzieren, einschließlich mehrerer Elemente, was mit `<label for="input">` nicht möglich ist. Als Beispiel könnten Sie `aria-labelledby` verwenden, um anzugeben, dass eine Schlüsselbeschreibung, die in einem {{htmlelement("div")}} enthalten ist, die Beschriftung für mehrere Tabellenzellen ist, oder Sie könnten es als Alternative zu Bild-alt-Text verwenden — vorhandene Informationen auf der Seite als Bild-alt-Text angeben, anstatt sie im `alt`-Attribut wiederholen zu müssen. Sie können ein Beispiel dafür bei [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) sehen.
- Zustände
  - : Spezielle Eigenschaften, die die aktuellen Bedingungen von Elementen definieren, wie `aria-disabled="true"`, was einem Bildschirmleser angibt, dass eine Formulareingabe derzeit deaktiviert ist. Zustände unterscheiden sich von Eigenschaften darin, dass sich Eigenschaften nicht im Verlauf des Lebenszyklus einer App ändern, während Zustände sich ändern können, in der Regel programmgesteuert über JavaScript.

Ein wichtiger Punkt zu WAI-ARIA-Attributen ist, dass sie nichts an der Webseite beeinflussen, außer den Informationen, die über die Barrierefreiheits-APIs des Browsers verfügbar sind (woher Bildschirmleser ihre Informationen beziehen). WAI-ARIA beeinflusst die Webseitenstruktur, den DOM usw. nicht, obwohl die Attribute nützlich sein können, um Elemente mit CSS auszuwählen.

> [!NOTE]
> Sie finden eine nützliche Liste aller ARIA-Rollen und deren Verwendung, mit Links zu weiteren Informationen, in der WAI-ARIA-Spezifikation — siehe [Definition of Roles](https://w3c.github.io/aria/#role_definitions) — auf dieser Seite — siehe [ARIA roles](/de/docs/Web/Accessibility/ARIA/Reference/Roles).
>
> Die Spezifikation enthält auch eine Liste aller Eigenschaften und Zustände, mit Links zu weiteren Informationen — siehe [Definitions of States and Properties (all `aria-*` attributes)](https://w3c.github.io/aria/#state_prop_def).

## Wo wird WAI-ARIA unterstützt?

Dies ist keine einfache Frage zu beantworten. Es ist schwierig, eine schlüssige Ressource zu finden, die angibt, welche Funktionen von WAI-ARIA unterstützt werden und wo, weil:

1. Es gibt viele Funktionen in der WAI-ARIA-Spezifikation.
2. Es gibt viele Kombinationen von Betriebssystemen, Browsern und Bildschirmlesern zu beachten.

Dieser letzte Punkt ist entscheidend — Um überhaupt einen Bildschirmleser zu verwenden, muss Ihr Betriebssystem Browser ausführen, die die notwendigen Barrierefreiheits-APIs implementiert haben, um die Informationen bereitzustellen, die Bildschirmleser benötigen, um ihre Arbeit zu erledigen. Die meisten beliebten Betriebssysteme haben ein oder zwei Browser, mit denen Bildschirmleser arbeiten können.

Als nächstes müssen Sie sich darum kümmern, ob die betreffenden Browser ARIA-Funktionen unterstützen und sie über ihre APIs verfügbar machen, aber auch, ob Bildschirmleser diese Informationen erkennen und ihren Benutzern auf nützliche Weise präsentieren.

1. Die Browserunterstützung ist fast universell.
2. Die Unterstützung von ARIA-Funktionen durch Bildschirmleser ist noch nicht ganz auf diesem Niveau, aber die populärsten Bildschirmleser nähern sich immer mehr. Sie können sich ein Bild von den Unterstützungsniveaus machen, indem Sie sich den Artikel [WAI-ARIA Screen reader compatibility](https://www.powermapper.com/tests/screen-readers/aria/) von Powermapper ansehen.

In diesem Artikel werden wir nicht versuchen, jede WAI-ARIA-Funktion und deren genauen Unterstützungsdetails abzudecken. Stattdessen werden wir die wichtigsten WAI-ARIA-Funktionen behandeln, die Sie kennen sollten; wenn wir keine Unterstützungsdetails erwähnen, können Sie davon ausgehen, dass die Funktion gut unterstützt wird. Wir werden ausdrücklich auf Ausnahmen hinweisen.

> [!NOTE]
> Einige JavaScript-Bibliotheken unterstützen WAI-ARIA, was bedeutet, dass sie beim Generieren von UI-Funktionen wie komplexen Formularelementen ARIA-Attribute hinzufügen, um die Barrierefreiheit dieser Funktionen zu verbessern. Wenn Sie nach einer Drittanbieter-JavaScript-Lösung für die schnelle UI-Entwicklung suchen, sollten Sie die Barrierefreiheit ihrer UI-Widgets als wichtigen Faktor bei Ihrer Entscheidung berücksichtigen. Gute Beispiele sind jQuery UI (siehe [About jQuery UI: Deep accessibility support](https://jqueryui.com/about/#deep-accessibility-support)), [ExtJS](https://www.sencha.com/products/extjs/) und [Dojo/Dijit](https://dojotoolkit.org/reference-guide/1.10/dijit/a11y/statement.html).

## Wann sollten Sie WAI-ARIA verwenden?

Wir sprachen zuvor über einige der Probleme, die zur Entstehung von WAI-ARIA führten, im Wesentlichen gibt es jedoch vier Hauptbereiche, in denen WAI-ARIA nützlich ist:

- Wegweiser/Landmarks
  - : Die [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)-Attributwerte von ARIA können als Wegweiser fungieren, die entweder die Semantik von HTML-Elementen replizieren (z. B. {{htmlelement("nav")}}) oder über die HTML-Semantik hinausgehen, um Wegweiser zu verschiedenen Funktionsbereichen bereitzustellen, z. B. `search`, `tablist`, `tab`, `listbox` usw.
- Dynamische Inhaltsaktualisierungen
  - : Bildschirmleser haben oft Schwierigkeiten, ständig wechselnde Inhalte zu melden; mit ARIA können wir `aria-live` verwenden, um Bildschirmlesernutzern mitzuteilen, wenn ein Inhaltsbereich dynamisch aktualisiert wird: etwa durch JavaScript auf der Seite, das neue Inhalte vom Server abruft und den DOM aktualisiert.
- Verbesserung der Tastaturzugänglichkeit
  - : Es gibt eingebaute HTML-Elemente, die native Tastaturzugänglichkeit haben; wenn andere Elemente zusammen mit JavaScript verwendet werden, um ähnliche Interaktionen zu simulieren, leidet die Tastaturzugänglichkeit und die Meldung des Bildschirmlesers. Wo dies unvermeidlich ist, bietet WAI-ARIA eine Möglichkeit, anderen Elementen mithilfe von `tabindex` den Fokus zu geben.
- Barrierefreiheit von unsemantischen Steuerelementen
  - : Wenn eine Reihe verschachtelter `<div>`s zusammen mit CSS/JavaScript verwendet wird, um ein komplexes UI-Feature zu erstellen, oder ein natives Steuerelement stark verbessert/verändert wird, kann die Barrierefreiheit leiden — Bildschirmlesernutzer werden Schwierigkeiten haben, herauszufinden, was die Funktion tut, wenn keine Semantik oder andere Hinweise vorhanden sind. In diesen Situationen kann ARIA helfen, indem es mit einer Kombination aus Rollen wie `button`, `listbox` oder `tablist` und Eigenschaften wie `aria-required` oder `aria-posinset` bereitstellt, um weitere Hinweise auf die Funktionalität zu geben.

Im nächsten Abschnitt werden wir die vier zuvor beschriebenen Hauptbereiche genauer betrachten, zusammen mit Beispielen. Bevor Sie fortfahren, sollten Sie eine Bildschirmlesertestumgebung einrichten, damit Sie einige der Beispiele testen können, während Sie sie durchgehen. Siehe unseren Abschnitt über [Bildschirmleser testen](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers) für weitere Informationen.

> [!CALLOUT]
>
> **Sie sollten WAI-ARIA nur verwenden, wenn Sie es brauchen!**
>
> Die Verwendung der korrekten HTML-Elemente gibt Ihnen implizit die benötigten Rollen, und Sie sollten _immer_ [native HTML-Funktionen](/de/docs/Learn_web_development/Core/Accessibility/HTML) verwenden, um die benötigte Semantik bereitzustellen, die Bildschirmleser ihren Benutzern mitteilen können, was vor sich geht. Manchmal ist dies nicht möglich, entweder weil Sie nur begrenzte Kontrolle über den Code haben oder weil Sie etwas Komplexes erstellen, das kein einfaches HTML-Element zur Implementierung hat. In solchen Fällen kann WAI-ARIA ein wertvolles Tool zur Verbesserung der Barrierefreiheit sein.
>
> Aber noch einmal, verwenden Sie es nur, wenn es notwendig ist!
>
> Außerdem sollten Sie versuchen, Ihre Seite mit einer Vielzahl von _echten_ Benutzern zu testen — nicht behinderte Personen, Personen, die Bildschirmleser verwenden, Personen, die Tastaturnavigation verwenden usw. Diese werden bessere Einblicke als Sie haben, wie gut es funktioniert.

## Wegweiser/Landmarks

WAI-ARIA fügt den Browsern das [`role`-Attribut](https://w3c.github.io/aria/#role_definitions) hinzu, das es Ihnen ermöglicht, den Elementen auf Ihrer Seite überall dort zusätzliche semantische Werte hinzuzufügen, wo sie benötigt werden. Der erste große Bereich, in dem dies nützlich ist, ist die Bereitstellung von Informationen für Bildschirmleser, damit ihre Benutzer allgemeine Seitenelemente finden können. Dieses Beispiel hat die folgende Struktur:

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

Wenn Sie das Beispiel mit einem Bildschirmleser in einem modernen Browser testen, erhalten Sie bereits einige nützliche Informationen. Zum Beispiel gibt Ihnen VoiceOver Folgendes:

- Beim `<header>`-Element — "banner, 2 items" (es enthält eine Überschrift und das `<nav>`).
- Beim `<nav>`-Element — "navigation 2 items" (es enthält eine Liste und ein Formular).
- Beim `<main>`-Element — "main 2 items" (es enthält einen Artikel und ein Aside).
- Beim `<aside>`-Element — "complementary 2 items" (es enthält eine Überschrift und eine Liste).
- Beim Suchformulareingabefeld — "Search query, insertion at beginning of text".
- Beim `<footer>`-Element — "footer 1 item".

Wenn Sie das Landmarks-Menü von VoiceOver aufrufen (zugänglich über VoiceOver-Taste + U und dann mit den Cursortasten durch die Menüauswahl scrollen), werden Sie sehen, dass die meisten Elemente schön aufgelistet sind, damit sie schnell zugänglich sind.

![Mac's VoiceOver-Menü für schnelle Barrierefreiheit. Landmarks-Kopfzeile und Landmarks-Liste, einschließlich banner, navigation, main und complementary.](landmarks-list.png)

Wir könnten dies jedoch hier verbessern. Das Suchformular ist ein wirklich wichtiger Wegweiser, den Benutzer finden möchten, aber es wird im Landmarks-Menü nicht aufgelistet und wird nicht als bemerkenswerter Wegweiser behandelt, abgesehen davon, dass das eigentliche Eingabefeld als Sucheingabe (`<input type="search">`) ausgerufen wird.

Um das Formular als Wegweiser zu kennzeichnen, können Sie es entweder mit dem {{htmlelement("search")}}-Element umschließen oder ihm die ARIA `role="search"` zuweisen. Als allgemeine Regel sollten Sie HTML-Semantik verwenden, wo immer möglich, und nur ARIA verwenden, wenn es kein HTML-Äquivalent gibt.

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

Am wichtigsten ist, dass wir semantisches HTML verwendet haben, das der Seitenstruktur Bedeutung und Rollen verleiht, ohne unnötige [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)-Attribute zu unserer HTML-Struktur hinzuzufügen, die eine Struktur wie folgt hat:

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

Wir haben Ihnen in diesem Beispiel auch eine Bonusfunktion gegeben — das {{htmlelement("input")}}-Element wurde mit dem Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) versehen, das ihm eine beschreibende Bezeichnung gibt, die von einem Bildschirmleser vorgelesen wird, obwohl wir kein {{htmlelement("label")}}-Element hinzugefügt haben. In solchen Fällen ist dies sehr nützlich — ein Suchformular wie dieses ist ein sehr allgemeines, leicht erkennbares Merkmal, und das Hinzufügen eines visuellen Labels würde das Seitendesign verderben.

```html
<input
  type="search"
  name="q"
  placeholder="Search query"
  aria-label="Search through site content" />
```

Wenn wir nun VoiceOver für dieses Beispiel verwenden, erhalten wir einige Verbesserungen:

- Das Suchformular wird sowohl beim Durchsuchen der Seite als auch im Landmarks-Menü als separates Element ausgerufen.
- Der im `aria-label`-Attribut enthaltene Beschriftungstext wird vorgelesen, wenn das Formulareingabefeld hervorgehoben wird.

Wenn Sie ältere Browser wie den IE8 unterstützen müssen, lohnt es sich, ARIA-Rollen zu diesem Zweck einzubeziehen. Und wenn aus irgendeinem Grund Ihre Seite nur aus `<div>`s besteht, sollten Sie unbedingt die ARIA-Rollen hinzufügen, um diese dringend benötigte Semantik bereitzustellen!

Sie werden viel mehr über diese Semantik und die Leistungsfähigkeit von ARIA-Eigenschaften/-Attributen unten sehen, insbesondere im Abschnitt [Barrierefreiheit von unsemantischen Steuerelementen](#barrierefreiheit_von_unsemantischen_steuerelementen). Schauen wir uns jedoch zunächst an, wie ARIA bei dynamischen Inhaltsaktualisierungen helfen kann.

## Dynamische Inhaltsaktualisierungen

In den DOM geladene Inhalte können leicht mit einem Bildschirmleser aufgerufen werden, von Textinhalten bis hin zu alternativen Texten, die an Bilder angehängt sind. Traditionelle statische Websites mit überwiegend Textinhalten sind daher leicht zugänglich für Menschen mit Sehbehinderungen.

Das Problem ist, dass moderne Web-Apps oft nicht nur statischer Text sind — sie aktualisieren oft Teile der Seite, indem sie neue Inhalte vom Server abrufen (in diesem Beispiel verwenden wir ein statisches Array von Zitaten) und den DOM aktualisieren. Diese werden manchmal als **Live-Bereiche** bezeichnet.

Schauen wir uns ein Beispiel an — einen Zufallszitatgenerator:

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

Das funktioniert ganz gut, aber es ist nicht gut für die Barrierefreiheit — die Inhaltsaktualisierung wird von Bildschirmlesern nicht erkannt, sodass ihre Benutzer nicht wissen würden, was vor sich geht. Dies ist ein ziemlich triviales Beispiel, aber stellen Sie sich nur vor, dass Sie eine komplexe Benutzeroberfläche mit vielen ständig aktualisierten Inhalten erstellen würden, wie ein Chatraum, eine Strategie-Spieloberfläche oder eine sich live aktualisierende Einkaufswagenanzeige — es wäre unmöglich, die App effektiv ohne eine Möglichkeit zu verwenden, den Benutzer auf die Aktualisierungen aufmerksam zu machen.

WAI-ARIA bietet glücklicherweise einen nützlichen Mechanismus, um diese Warnungen zu geben — die [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)-Eigenschaft. Die Anwendung dieser Eigenschaft auf ein Element führt dazu, dass Bildschirmleser den aktualisierten Inhalt vorlesen. Wie dringend der Inhalt vorgelesen wird, hängt vom Attributwert ab:

- `off`
  - : Der Standardwert. Updates sollten nicht angekündigt werden.
- `polite`
  - : Updates sollten nur angesagt werden, wenn der Benutzer untätig ist.
- `assertive`
  - : Updates sollten dem Benutzer so schnell wie möglich mitgeteilt werden.

Hier aktualisieren wir das `<blockquote>`-Öffnungstag wie folgt:

```html
<blockquote aria-live="assertive">…</blockquote>
```

Dies führt dazu, dass ein Bildschirmleser den Inhalt beim Aktualisieren vorliest: Testen Sie die aktualisierte Live-Version:

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
> Es gibt einige andere ARIA-Eigenschaften im Zusammenhang mit `aria-live`, die ebenfalls wissenswert sind:
>
> - Die [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)-Eigenschaft, wenn sie auf `true` gesetzt ist, teilt den Bildschirmlesern mit, den gesamten Inhalt des Elements als eine atomare Einheit zu lesen und nicht nur die aktualisierten Teile. Dies ist nützlich, wenn nur die Inhalte eines Abschnitts aktualisiert werden, Sie aber auch möchten, dass die Überschrift jedes Mal vorgelesen wird, wenn sich etwas ändert, um den Benutzer an ihren Inhalt zu erinnern.
> - Die [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)-Eigenschaft ist nützlich, um zu steuern, was vorgelesen wird, wenn ein Live-Bereich aktualisiert wird. Sie können zum Beispiel nur Inhaltsergänzungen oder -entfernungen vorlesen lassen.

## Verbesserung der Tastaturzugänglichkeit

Wie an einigen anderen Stellen im Modul besprochen, ist eine der großen Stärken von HTML in Bezug auf Barrierefreiheit die eingebaute Tastaturzugänglichkeit von Funktionen wie Schaltflächen, Formularelementen und Links. Im Allgemeinen können Sie die Tabulatortaste verwenden, um zwischen den Steuerelementen zu wechseln, die Eingabe-/Return-Taste, um Steuerelemente auszuwählen oder zu aktivieren, und gelegentlich andere Steuerelemente, wie erforderlich (zum Beispiel die Auf- und Abwärtspfeiltasten, um zwischen Optionen in einem `<select>`-Feld zu wechseln).

Manchmal müssen Sie jedoch Code schreiben, der entweder unsemantische Elemente als Knöpfe (oder andere Steuerungstypen) verwendet oder ausgerichtete Steuerelemente für nicht ganz den richtigen Zweck verwendet. Sie könnten versuchen, einen fehlerhaften Code zu beheben, den Sie geerbt haben, oder ein komplexes Widget erstellen, das dies erfordert.

In Bezug auf nicht fokusierbaren Code fokusierbar machen, erweitert WAI-ARIA das `tabindex`-Attribut mit einigen neuen Werten:

- `tabindex="0"` — wie oben beschrieben, ermöglicht dieser Wert, dass normalerweise nicht fokussierbare Elemente fokussierbar werden. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — dies ermöglicht normalerweise nicht fokussierbaren Elementen, programmgesteuert den Fokus zu erhalten, z. B. über JavaScript oder als Ziel von Links.

Wir haben dies im HTML Barrierefreiheit Artikel ausführlicher behandelt und eine typische Implementierung gezeigt — siehe [Building keyboard accessibility back in](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in).

## Barrierefreiheit von unsemantischen Steuerelementen

Dies folgt auf den vorherigen Abschnitt — wenn eine Reihe von verschachtelten `<div>`s zusammen mit CSS/JavaScript verwendet wird, um ein komplexes Benutzeroberflächenmerkmal zu erstellen, oder ein natives Steuerelement stark verbessert/geändert wird, kann nicht nur die Tastaturzugänglichkeit leiden, sondern Bildschirmleser-Benutzer werden Schwierigkeiten haben, herauszufinden, was das Merkmal tut, wenn keine Semantik oder andere Hinweise vorhanden sind. In solchen Situationen kann ARIA helfen, um diese fehlende Semantik bereitzustellen.

### Formularvalidierung und Fehlerwarnungen

Lassen Sie uns zunächst das Formularbeispiel aus unserem CSS- und JavaScript-Barrierefreiheit Artikel (lesen Sie [Keeping it unobtrusive](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#keeping_it_unobtrusive) für eine vollständige Wiederholung) erneut betrachten. Am Ende dieses Abschnitts haben wir gezeigt, dass wir einige ARIA-Attribute auf das Fehlermeldungsfeld angewendet haben, das beim Versuch, das Formular abzuschicken, alle Validierungsfehler anzeigt:

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

- [`role="alert"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) verwandelt das Element, auf das es angewendet wird, automatisch in einen Live-Bereich, sodass Änderungen daran vorgelesen werden; es identifiziert es auch semantisch als eine Warnmeldung (wichtige zeit-/kontextsensitive Informationen) und stellt eine bessere, zugänglichere Methode dar, um eine Warnung an einen Benutzer zu übermitteln (modale Dialoge wie [`alert()`](/de/docs/Web/API/Window/alert)-Aufrufe haben eine Reihe von Barrierefreiheit-Problemen; siehe [Popup-Fenster](https://webaim.org/techniques/javascript/other#popups) von WebAIM).
- Ein [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)-Wert von `all` gibt dem Bildschirmleser die Anweisung, die Inhalte der Fehlerliste vorzulesen, wenn Änderungen daran vorgenommen werden — d.h. wenn Fehler hinzugefügt oder entfernt werden. Dies ist nützlich, da der Benutzer wissen möchte, welche Fehler noch vorhanden sind, nicht nur, was der Liste hinzugefügt oder entfernt wurde.

Wir könnten weiter gehen mit unserer ARIA-Nutzung und einige weitere Validierungshilfen bereitstellen. Wie wäre es, wenn wir angeben, ob Felder überhaupt erforderlich sind und welchen Bereich das Alter haben sollte?

1. An diesem Punkt machen Sie eine Kopie unserer [`form-validation.html`](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html) und [`validation.js`](https://github.com/mdn/learning-area/blob/main/accessibility/css/validation.js)-Dateien und speichern Sie sie in einem lokalen Verzeichnis.
2. Öffnen Sie beide in einem Texteditor und sehen Sie sich an, wie der Code funktioniert.
3. Fügen Sie zunächst einen Absatz direkt über dem öffnenden `<form>`-Tag hinzu, wie den unten stehenden, und markieren Sie beide Formular-`<label>`s mit einem Sternchen. Dies ist normalerweise, wie wir erforderliche Felder für sehende Benutzer markieren.

   ```html
   <p>Fields marked with an asterisk (*) are required.</p>
   ```

4. Dies ergibt visuell Sinn, ist aber für Bildschirmlesernutzer nicht so leicht verständlich. Glücklicherweise bietet WAI-ARIA das [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)-Attribut, um Bildschirmlesern Hinweise zu geben, dass sie Benutzern mitteilen sollen, dass Formulareingaben ausgefüllt werden müssen. Aktualisieren Sie die `<input>`-Elemente wie folgt:

   ```html
   <input type="text" name="name" id="name" aria-required="true" />

   <input type="number" name="age" id="age" aria-required="true" />
   ```

5. Wenn Sie das Beispiel jetzt speichern und es mit einem Bildschirmleser testen, sollten Sie etwas hören wie "Geben Sie Ihren Name ein Sternchen, erforderlich, bearbeiten Text".
6. Es könnte auch nützlich sein, wenn wir sowohl sehenden als auch Bildschirmlesernutzern eine Vorstellung davon geben, welchen Wert das Alter haben sollte. Dies wird häufig als Tooltip oder Platzhalter innerhalb des Formularfeldes dargestellt. WAI-ARIA enthält die [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)-Eigenschaften, um min- und max-Werte zu spezifizieren, und Bildschirmleser unterstützen die nativen `min`- und `max`-Attribute. Eine andere gut unterstützte Funktion ist das HTML-`placeholder`-Attribut, das eine Nachricht enthalten kann, die im Eingabefeld angezeigt wird, wenn kein Wert eingegeben ist und von einigen Bildschirmlesern vorgelesen wird. Aktualisieren Sie Ihre Zahleneingabe so:

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

Schließen Sie immer ein {{HTMLelement('label')}} für jede Eingabe ein. Während einige Bildschirmleser den Platzhaltertext ansagen, tun dies die meisten nicht. Akzeptable Ersetzungen, um Formularsteuerelementen einen barrierefreien Namen zu geben, sind [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) und [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby). Aber das `<label>`-Element mit einem `for`-Attribut ist die bevorzugte Methode, da es für alle Benutzer, einschließlich Mausnutzern, Benutzbarkeit bietet.

> [!NOTE]
> Sie können das fertige Beispiel live unter [`form-validation-updated.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-updated.html) sehen.

WAI-ARIA ermöglicht auch einige erweiterte Formularbeschriftungstechniken, die über das klassische {{htmlelement("label")}}-Element hinausgehen. Wir haben bereits darüber gesprochen, wie Sie die [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Eigenschaft verwenden können, um eine Beschriftung bereitzustellen, wenn wir nicht möchten, dass die Beschriftung für sehende Benutzer sichtbar ist (siehe den Abschnitt [Wegweiser/Landmarks](#signpostslandmarks), oben). Einige andere Beschriftungstechniken verwenden andere Eigenschaften wie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn Sie ein nicht-`<label>`-Element als Beschriftung bezeichnen oder mehrere Formulareingaben mit derselben Beschriftung beschriften möchten, und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby), wenn Sie andere Informationen mit einer Formulareingabe verknüpfen möchten, die ebenfalls vorgelesen werden sollen. Siehe [WebAIM's Advanced Form Labeling article](https://webaim.org/techniques/forms/advanced) für weitere Details.

Es gibt viele andere nützliche Eigenschaften und Zustände, um den Status von Formularelementen anzugeben. Zum Beispiel kann `aria-disabled="true"` verwendet werden, um anzuzeigen, dass ein Formularfeld deaktiviert ist. Viele Browser überspringen deaktivierte Formularelemente, was dazu führt, dass sie von Bildschirmlesern nicht vorgelesen werden. In einigen Fällen wird ein deaktiviertes Element wahrgenommen, daher ist es eine gute Idee, dieses Attribut einzufügen, um den Bildschirmleser wissen zu lassen, dass ein deaktiviertes Formularsteuerelement in der Tat deaktiviert ist.

Wenn sich der deaktivierte Status einer Eingabe wahrscheinlich ändert, ist es auch eine gute Idee, anzugeben, wann dies passiert und was das Ergebnis ist. Zum Beispiel gibt es in unserem [`form-validation-checkbox-disabled.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-checkbox-disabled.html)-Demo ein Kontrollkästchen, das, wenn es aktiviert ist, ein weiteres Formulareingabefeld aktiviert, um weitere Informationen einzugeben. Wir haben einen versteckten Live-Bereich eingerichtet:

```html
<p class="hidden-alert" aria-live="assertive"></p>
```

der mithilfe der absoluten Positionierung aus der Sicht verborgen ist. Wenn dies aktiviert/deaktiviert wird, aktualisieren wir den Text innerhalb des verborgenen Live-Bereichs, um Bildschirmlesernutzer zu informieren, welches Ergebnis das Aktivieren dieses Kontrollkästchens hat, und aktualisieren auch den `aria-disabled`-Status sowie einige visuelle Indikatoren:

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

### Unsemantische Schaltflächen als Schaltflächen beschreiben

Ein paar Mal in diesem Kurs haben wir bereits die native Zugänglichkeit von (und die Barrierefreiheitsprobleme bei der Verwendung anderer Elemente zum Simulieren von) Schaltflächen, Links oder Formularelementen erwähnt (siehe [Use semantic UI controls where possible](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible) im HTML-Barrierefreiheitsartikel und [Enhancing keyboard accessibility](#verbesserung_der_tastaturzugänglichkeit), oben). Grundsätzlich können Sie die Tastaturzugänglichkeit in vielen Fällen ohne allzu große Schwierigkeiten wiederherstellen, indem Sie `tabindex` und ein bisschen JavaScript verwenden.

Aber was ist mit Bildschirmlesern? Sie sehen die Elemente immer noch nicht als Schaltflächen. Wenn wir unser [`fake-div-buttons.html`](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)-Beispiel mit einem Bildschirmleser testen, werden unsere gefälschten Schaltflächen mit Ausdrücken wie "Click me!, group" gemeldet, was offensichtlich verwirrend ist.

Wir können dies durch die Verwendung einer WAI-ARIA-Rolle beheben. Erstellen Sie eine lokale Kopie von [`fake-div-buttons.html`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) und fügen Sie [`role="button"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) zu jedem Schaltflächen-`<div>` hinzu, zum Beispiel:

```html
<div data-message="This is from the first button" tabindex="0" role="button">
  Click me!
</div>
```

Wenn Sie dies nun mit einem Bildschirmleser ausprobieren, werden Schaltflächen mit Ausdrücken wie "Click me!, button" gemeldet. Obwohl dies viel besser ist, müssen Sie immer noch alle nativen Schaltflächenfunktionen, die Benutzer erwarten, hinzufügen, wie die Bearbeitung von <kbd>Enter</kbd>- und Klickereignissen, wie im [`button` role documentation](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) erklärt.

> [!NOTE]
> Vergessen Sie jedoch nicht, dass die Verwendung des korrekten semantischen Elements, wo möglich, immer besser ist. Wenn Sie eine Schaltfläche erstellen möchten und ein {{htmlelement("button")}}-Element verwenden können, sollten Sie ein {{htmlelement("button")}}-Element verwenden!

### Benutzer durch komplexe Widgets führen

Es gibt eine ganze Reihe anderer [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles), die nicht-semantische Elementstrukturen als gängige Benutzeroberflächenmerkmale identifizieren können, die über das hinausgehen, was in standardmäßigem HTML verfügbar ist, z. B. [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role), [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role). Sie können mehrere nützliche Beispiele in der [Deque university code library](https://dequeuniversity.com/library/) sehen, um Ihnen eine Vorstellung davon zu geben, wie solche Steuerelemente barrierefrei gemacht werden können.

Sie können auch mehrere Live-Beispiele in unserer [WAI-ARIA roles](/de/docs/Web/Accessibility/ARIA/Reference/Roles)-Dokumentation finden. Sehen Sie sich zum Beispiel unser [ARIA: tab role example](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role#example) an, das erklärt, wie Sie eine zugängliche Registerkarteninterface implementieren können.

## Zusammenfassung

Dieser Artikel hat keineswegs alle in WAI-ARIA verfügbaren Funktionen abgedeckt, aber er sollte Ihnen genügend Informationen gegeben haben, um zu verstehen, wie Sie es verwenden und einige der häufigsten Muster zu erkennen, bei denen es erforderlich ist.

Im nächsten Artikel geben wir Ihnen einige Tests, die Sie verwenden können, um zu überprüfen, wie gut Sie all diese Informationen verstanden und behalten haben.

## Siehe auch

- [Aria-Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes): Alle `aria-*` Attribute
- [WAI-ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles): Kategorien von ARIA-Rollen und die auf MDN behandelten Rollen
- [ARIA in HTML](https://w3c.github.io/html-aria/) auf W3C: Eine Spezifikation, die für jedes HTML-Merkmal die Barrierefreiheitssemantik (ARIA) definiert, die vom Browser implizit darauf angewendet wird, und die WAI-ARIA-Funktionen, die Sie darauf setzen können, wenn zusätzliche Semantik erforderlich ist
- [Deque university code library](https://dequeuniversity.com/library/): Eine Bibliothek wirklich nützlicher und praktischer Beispiele, die komplexe UI-Steuerelemente zeigen, die mithilfe von WAI-ARIA-Funktionen barrierefrei gemacht werden
- [WAI-ARIA authoring practices](https://www.w3.org/WAI/ARIA/apg/) auf W3C: Ein sehr detailliertes Entwurfsmuster von der W3C, das erklärt, wie verschiedene Arten von komplexen Benutzeroberflächensteuerungen implementiert werden können, während sie mithilfe von WAI-ARIA-Funktionen barrierefrei gemacht werden

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA", "Learn_web_development/Core/Accessibility")}}
