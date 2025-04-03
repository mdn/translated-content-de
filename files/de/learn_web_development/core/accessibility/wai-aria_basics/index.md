---
title: WAI-ARIA Grundlagen
short-title: WAI-ARIA
slug: Learn_web_development/Core/Accessibility/WAI-ARIA_basics
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility")}}

Anknüpfend an den vorherigen Artikel, kann es manchmal schwierig sein, komplexe UI-Steuerelemente zu erstellen, die unsemantisches HTML und dynamische, mit JavaScript aktualisierte Inhalte beinhalten. WAI-ARIA ist eine Technologie, die solche Probleme lösen kann, indem sie zusätzliche Semantik hinzufügt, die von Browsern und unterstützenden Technologien erkannt und genutzt werden kann, um Benutzern mitzuteilen, was vor sich geht. Hier zeigen wir, wie man WAI-ARIA auf einfache Weise nutzt, um die Zugänglichkeit zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und den besten Praktiken für Zugänglichkeit, wie sie in den vorherigen Lektionen des Moduls gelehrt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von WAI-ARIA — Bereitstellung von Semantik für ansonsten nicht-semantisches HTML, damit Benutzer von unterstützendem Technologie (AT) die ihnen präsentierten Schnittstellen verstehen können.</li>
          <li>Die grundlegende Syntax — Rollen, Eigenschaften und Zustände.</li>
          <li>Kennzeichnungspunkte und Wegweiser.</li>
          <li>Verbesserung der Tastaturzugänglichkeit.</li>
          <li>Verkünden dynamischer Inhaltsaktualisierungen mit Live-Bereichen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist WAI-ARIA?

Beginnen wir mit einem Blick darauf, was WAI-ARIA ist und was es für uns tun kann.

### Eine ganz neue Reihe von Problemen

Mit der zunehmenden Komplexität und Dynamik von Webanwendungen traten neue Zugänglichkeitsfunktionen und Probleme auf.

Zum Beispiel führte HTML mehrere semantische Elemente ein, um gängige Seitenfunktionen zu definieren ({{htmlelement("nav")}}, {{htmlelement("footer")}} usw.). Bevor diese verfügbar waren, verwendeten Entwickler {{htmlelement("div")}}s mit IDs oder Klassen, z. B. `<div class="nav">`, aber diese waren problematisch, da es keine einfache Möglichkeit gab, ein bestimmtes Seitenmerkmal wie die Hauptnavigation programmatisch zu finden.

Die anfängliche Lösung bestand darin, einen oder mehrere versteckte Links zu Beginn der Seite hinzuzufügen, um zur Navigation (oder zu anderen Inhalten) zu verlinken, zum Beispiel:

```html
<a href="#hidden" class="hidden">Skip to navigation</a>
```

Dies ist jedoch noch nicht sehr präzise und kann nur verwendet werden, wenn der Screenreader von oben auf der Seite liest.

Ein weiteres Beispiel sind Anwendungen, die komplexe Steuerelemente wie Datumsauswähler zur Auswahl von Daten, Schieberegler zur Auswahl von Werten usw. einführen. HTML bietet spezielle Eingabefelder, um solche Steuerelemente zu rendern:

```html
<input type="date" /> <input type="range" />
```

Diese waren ursprünglich nicht gut unterstützt, und es war, und ist immer noch in einem geringeren Maße, schwierig, sie zu stylen, was Designer und Entwickler dazu veranlasste, sich für benutzerdefinierte Lösungen zu entscheiden. Anstatt diese nativen Funktionen zu verwenden, verlassen sich einige Entwickler auf JavaScript-Bibliotheken, die solche Steuerelemente als eine Reihe verschachtelter {{htmlelement("div")}}s generieren, die dann mit CSS gestaltet und mit JavaScript gesteuert werden.

Das Problem hierbei ist, dass diese Elemente visuell funktionieren, aber Screenreader nicht erkennen können, was sie überhaupt bedeuten, und ihre Benutzer nur darüber informiert werden, dass sie ein Gewirr von Elementen ohne Semantik sehen können, die beschreiben, was sie bedeuten.

### Einführung von WAI-ARIA

[WAI-ARIA](https://www.w3.org/TR/wai-aria/) (Web Accessibility Initiative - Accessible Rich Internet Applications) ist eine vom W3C erstellte Spezifikation, die eine Reihe zusätzlicher HTML-Attribute definiert, die auf Elemente angewendet werden können, um zusätzliche Semantik bereitzustellen und die Zugänglichkeit dort zu verbessern, wo sie fehlt. Die Spezifikation definiert drei Hauptfunktionen:

- [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Diese definieren, was ein Element ist oder tut. Viele davon sind sogenannte Landmark-Räume, die weitgehend den semantischen Wert von Strukturelementen wie `role="navigation"` ({{htmlelement("nav")}}), `role="banner"` (Dokument {{htmlelement("header")}}), `role="complementary"` ({{htmlelement("aside")}}) oder `role="search"` ({{htmlelement("search")}}). Einige andere Rollen beschreiben verschiedene Seitenstrukturen, die keine entsprechenden Elemente haben, wie `role="tablist"` und `role="tabpanel"`, die häufig in Benutzeroberflächen zu finden sind.
- Eigenschaften
  - : Diese definieren Eigenschaften von Elementen, die verwendet werden können, um ihnen zusätzliche Bedeutung oder Semantik zu verleihen. Ein Beispiel ist `aria-required="true"`, das angibt, dass ein Formulareingabefeld ausgefüllt werden muss, um gültig zu sein, während `aria-labelledby="label"` es Ihnen ermöglicht, eine ID auf ein Element zu setzen und es als das Label für alles andere auf der Seite zu referenzieren, einschließlich mehrerer Elemente, was mit einem `<label for="input">` nicht möglich ist. Beispielsweise könnten Sie `aria-labelledby` verwenden, um anzugeben, dass eine Beschreibung in einem {{htmlelement("div")}} das Label für mehrere Tabellenspalten ist, oder es als Alternative zu Bildtext verwenden — bestehende Informationen auf der Seite als Alt-Text für ein Bild angeben, anstatt sie im `alt`-Attribut zu wiederholen. Sie können ein Beispiel dafür unter [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) sehen.
- Zustände
  - : Besondere Eigenschaften, die den aktuellen Zustand von Elementen definieren, wie `aria-disabled="true"`, was einem Screenreader angibt, dass ein Formulareingabefeld derzeit deaktiviert ist. Zustände unterscheiden sich von Eigenschaften darin, dass Eigenschaften sich nicht im Lebenszyklus einer Anwendung ändern, während sich Zustände ändern können, normalerweise programmgesteuert über JavaScript.

Ein wichtiger Punkt bei WAI-ARIA-Attributen ist, dass sie nichts am Webauftritt selbst ändern, außer den Informationen, die über die Zugänglichkeits-APIs des Browsers offengelegt werden (von denen Screenreader ihre Informationen erhalten). WAI-ARIA beeinflusst weder die Seitenstruktur noch den DOM, jedoch können die Attribute nützlich sein, um Elemente mit CSS auszuwählen.

> [!NOTE]
> Sie können eine hilfreiche Liste aller ARIA-Rollen und deren Verwendung mit Links zu weiteren Informationen in der WAI-ARIA-Spezifikation finden — siehe [Definition of Roles](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) — auf dieser Seite — siehe [ARIA roles](/de/docs/Web/Accessibility/ARIA/Reference/Roles).
>
> Die Spezifikation enthält auch eine Liste aller Eigenschaften und Zustände mit Links zu weiteren Informationen — siehe [Definitions of States and Properties (all `aria-*` attributes)](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def).

### Wo wird WAI-ARIA unterstützt?

Das ist keine einfache Frage zu beantworten. Es ist schwierig, eine schlüssige Ressource zu finden, die angibt, welche Funktionen von WAI-ARIA unterstützt werden und wo, weil:

1. Es gibt viele Funktionen in der WAI-ARIA-Spezifikation.
2. Es gibt viele Kombinationen von Betriebssystemen, Browsern und Screenreadern zu berücksichtigen.

Dieser letzte Punkt ist entscheidend — Um einen Screenreader überhaupt verwenden zu können, muss Ihr Betriebssystem in der Lage sein, Browser auszuführen, die die notwendigen Zugänglichkeits-APIs bereitstellen, um die Informationen offenzulegen, die Screenreader benötigen, um ihre Arbeit zu tun. Die meisten gängigen Betriebssysteme haben einen oder zwei Browser, mit denen Screenreader arbeiten können. Die Paciello Group hat einen recht aktuellen Beitrag, der Daten dazu bereitstellt — siehe [Rough Guide: browsers, operating systems and screen reader support updated](https://www.tpgi.com/rough-guide-browsers-operating-systems-and-screen-reader-support-updated/).

Als nächstes müssen Sie sich darüber Gedanken machen, ob die betreffenden Browser ARIA-Funktionen unterstützen und sie über ihre APIs zugänglich machen, aber auch, ob Screenreader diese Informationen erkennen und ihren Nutzern auf nützliche Weise präsentieren.

1. Die Browser-Unterstützung ist nahezu universell.
2. Die Unterstützung von Screenreadern für ARIA-Funktionen ist nicht ganz auf diesem Niveau, aber die meisten gängigen Screenreader kommen dem nahe. Sie können sich ein Bild über den Stand der Unterstützung machen, indem Sie sich den Powermapper-Artikel zur [WAI-ARIA Screen reader compatibility](https://www.powermapper.com/tests/screen-readers/aria/) ansehen.

In diesem Artikel werden wir nicht versuchen, jede WAI-ARIA-Funktion und ihre genauen Unterstützungsdetails abzudecken. Stattdessen behandeln wir die wichtigsten WAI-ARIA-Funktionen, die Sie kennen sollten; wenn wir keine Unterstützungsdetails erwähnen, können Sie davon ausgehen, dass die Funktion gut unterstützt wird. Wir werden klar auf etwaige Ausnahmen hinweisen.

> [!NOTE]
> Einige JavaScript-Bibliotheken unterstützen WAI-ARIA, was bedeutet, dass sie bei der Generierung von UI-Funktionen wie komplexen Formularsteuerelementen ARIA-Attribute hinzufügen, um die Zugänglichkeit dieser Funktionen zu verbessern. Wenn Sie nach einer dritten Partei JavaScript-Lösung für die schnelle UI-Entwicklung suchen, sollten Sie die Zugänglichkeit ihrer UI-Widgets als wichtigen Faktor bei Ihrer Wahl berücksichtigen. Gute Beispiele sind jQuery UI (siehe [Über jQuery UI: Tiefgreifende Unterstützung für Zugänglichkeit](https://jqueryui.com/about/#deep-accessibility-support)), [ExtJS](https://www.sencha.com/products/extjs/) und [Dojo/Dijit](https://dojotoolkit.org/reference-guide/1.10/dijit/a11y/statement.html).

### Wann sollten Sie WAI-ARIA verwenden?

Wir haben früher über einige der Probleme gesprochen, die zur Schaffung von WAI-ARIA geführt haben, aber im Wesentlichen gibt es vier Hauptbereiche, in denen WAI-ARIA nützlich ist:

- Wegweiser/Landmarks
  - : Die Attributwerte von ARIA's [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) können als Landmarken fungieren, die entweder die Semantik von HTML-Elementen replizieren (z. B. {{htmlelement("nav")}}) oder über die Semantik von HTML hinausgehen, um Wegweiser zu unterschiedlichen funktionalen Bereichen bereitzustellen, zum Beispiel `search`, `tablist`, `tab`, `listbox` usw.
- Dynamische Inhaltsaktualisierungen
  - : Screenreader haben oft Schwierigkeiten, ständig wechselnde Inhalte zu melden; mit ARIA können wir `aria-live` verwenden, um Screenreader-Benutzer darüber zu informieren, wenn ein Inhaltsbereich dynamisch aktualisiert wird: zum Beispiel, indem JavaScript auf der Seite neue Inhalte vom Server abruft und den DOM aktualisiert. [fetching new content from the server and updating the DOM](/de/docs/Learn_web_development/Core/Scripting/Network_requests).
- Verbesserung der Tastaturzugänglichkeit
  - : Es gibt eingebaute HTML-Elemente, die über native Tastaturzugänglichkeit verfügen; wenn andere Elemente zusammen mit JavaScript verwendet werden, um ähnliche Interaktionen zu simulieren, leidet die Tastaturzugänglichkeit und das Berichten von Screenreadern darunter. Wo dies unvermeidbar ist, bietet WAI-ARIA eine Möglichkeit, anderen Elementen das Fokussieren zu ermöglichen (durch `tabindex`).
- Zugänglichkeit nicht-semantischer Steuerelemente
  - : Wenn eine Reihe verschachtelter `<div>`s zusammen mit CSS/JavaScript verwendet wird, um eine komplexe UI-Funktion zu erstellen, oder ein natives Steuerelement erheblich verbessert/über JS)modifiziert wird, kann die Zugänglichkeit leiden — Nutzer von Screenreadern werden Schwierigkeiten haben, zu verstehen, was die Funktion macht, wenn keine Semantik oder andere Hinweise vorhanden sind. In solchen Situationen kann ARIA helfen, das Fehlende mit einer Kombination aus Rollen wie `button`, `listbox` oder `tablist` und Eigenschaften wie `aria-required` oder `aria-posinset` bereitzustellen, um zusätzliche Hinweise auf die Funktionalität zu geben.

#### Sie sollten WAI-ARIA nur dann verwenden, wenn es notwendig ist!

Die Verwendung der richtigen HTML-Elemente gibt Ihnen implizit die benötigten Rollen, und Sie sollten _immer_ [native HTML-Funktionen](/de/docs/Learn_web_development/Core/Accessibility/HTML) verwenden, um die von Screenreadern benötigte Semantik bereitzustellen, um ihren Benutzern mitzuteilen, was passiert. Manchmal ist dies nicht möglich, entweder weil Sie nur begrenzt Kontrolle über den Code haben oder weil Sie etwas Komplexes erstellen, für das es keinen einfachen HTML-Element gibt. In solchen Fällen kann WAI-ARIA ein wertvolles Werkzeug zur Verbesserung der Zugänglichkeit sein.

Aber nochmals, verwenden Sie es nur, wenn es notwendig ist!

> [!NOTE]
> Versuchen Sie auch sicherzustellen, dass Sie Ihre Website mit einer Vielzahl von _echten_ Nutzern testen — nicht-behinderte Menschen, Menschen, die Screenreader verwenden, Menschen, die Tastaturnavigation verwenden usw. Sie werden bessere Einblicke haben, wie gut es funktioniert.

## Praktische WAI-ARIA-Implementierungen

Im nächsten Abschnitt werden wir die vier Bereiche detaillierter betrachten, zusammen mit praktischen Beispielen. Bevor Sie fortfahren, sollten Sie eine Screenreader-Testumgebung einrichten, so dass Sie einige der Beispiele testen können, während Sie diese durchlaufen.

Sehen Sie sich unseren Abschnitt zu [Testing Screen Readers](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers) für weitere Informationen an.

### Wegweiser/Landmarks

WAI-ARIA fügt den Browsern das [`role`-Attribut](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) hinzu, mit dem Sie zusätzlichen semantischen Wert zu Elementen auf Ihrer Seite hinzufügen können, wo immer sie benötigt werden. Der erste wichtige Bereich, in dem dies nützlich ist, ist die Bereitstellung von Informationen für Screenreader, damit deren Benutzer gängige Seitenelemente finden können. Dieses Beispiel hat die folgende Struktur:

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

Wenn Sie das Beispiel mit einem Screenreader in einem modernen Browser testen, erhalten Sie bereits einige nützliche Informationen. Zum Beispiel gibt VoiceOver Folgendes aus:

- Auf dem `<header>`-Element — "banner, 2 items" (es enthält eine Überschrift und die `<nav>`).
- Auf dem `<nav>`-Element — "navigation 2 items" (es enthält eine Liste und ein Formular).
- Auf dem `<main>`-Element — "main 2 items" (es enthält einen Artikel und ein aside).
- Auf dem `<aside>`-Element — "complementary 2 items" (es enthält eine Überschrift und eine Liste).
- Auf dem Suchformulareingabefeld — "Search query, insertion at beginning of text".
- Auf dem `<footer>`-Element — "footer 1 item".

Wenn Sie das Landmark-Menü von VoiceOver öffnen (zugänglich mit VoiceOver-Taste + U und dann mit den Cursortasten, um durch die Menüoptionen zu blättern), werden die meisten Elemente aufgelistet, so dass sie schnell zugänglich sind.

![Mac-VoiceOver-Menü für schnelle Zugänglichkeit. Landmarks-Überschrift und Landmarks-Liste einschließlich Banner, Navigation, Main und Complementary.](landmarks-list.png)

Wir könnten hier jedoch noch besser werden. Das Suchformular ist ein wirklich wichtiger Wegweiser, den die Benutzer finden wollen, aber es wird nicht im Landmarks-Menü aufgelistet oder als bemerkenswerter Wegweiser behandelt, abgesehen davon, dass das tatsächliche Eingabefeld als Sucheingabe hervorgehoben wird (`<input type="search">`).

Wir könnten es mit der Verwendung von ARIA `role="search"` verbessern, aber die Verwendung des {{htmlelement("search")}}-Elements gibt dieser Rolle implizit an das Formular.

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

Am wichtigsten ist, dass wir semantisches HTML verwendet haben, das die Struktur der Seite ohne das Hinzufügen unnötiger [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)-Attribute zu unserer HTML-Struktur gibt, die folgendermaßen aussieht:

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

Wir haben Ihnen auch eine Bonusfunktion in diesem Beispiel gegeben — das {{htmlelement("input")}}-Element wurde mit dem Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) versehen, das ihm ein beschreibendes Label gibt, das von einem Screenreader vorgelesen wird, auch wenn wir kein {{htmlelement("label")}}-Element hinzugefügt haben. In solchen Fällen ist dies sehr nützlich — ein Suchformular wie dieses ist ein sehr gebräuchliches, leicht erkennbares Feature, und das Hinzufügen eines visuellen Labels würde das Seitendesign verderben.

```html
<input
  type="search"
  name="q"
  placeholder="Search query"
  aria-label="Search through site content" />
```

Wenn wir nun VoiceOver verwenden, um dieses Beispiel zu betrachten, sehen wir einige Verbesserungen:

- Das Suchformular wird sowohl beim Durchblättern der Seite als auch im Landmarks-Menü als separates Element hervorgerufen.
- Der in dem `aria-label`-Attribut enthaltene Labeltext wird vorgelesen, wenn das Formulareingabefeld markiert ist.

Wenn Sie ältere Browser wie IE8 unterstützen müssen, lohnt es sich, ARIA-Rollen zu diesem Zweck einzuschließen. Und wenn Ihre Seite aus irgendeinem Grund nur aus `<div>`s besteht, sollten Sie definitiv die ARIA-Rollen hinzufügen, um diese dringend benötigte Semantik zu bieten!

Sie werden im Folgenden noch viel mehr über diese Semantik und die Macht von ARIA-Eigenschaften/-Attributen sehen, insbesondere im Abschnitt [Zugänglichkeit nicht-semantischer Steuerelemente](#zugänglichkeit_nicht-semantischer_steuerelemente). Vorerst aber schauen wir uns an, wie ARIA bei dynamischen Inhaltsaktualisierungen helfen kann.

### Dynamische Inhaltsaktualisierungen

In den DOM geladene Inhalte können leicht mit einem Screenreader abgerufen werden, von Textinhalten bis zu Alternativtexten bei Bildern. Traditionelle statische Websites mit überwiegend Textinhalt sind daher leicht zugänglich für Menschen mit Sehbehinderungen zu machen.

Das Problem ist, dass moderne Web-Apps oft nicht nur statischer Text sind — sie aktualisieren oft Teile der Seite, indem sie neue Inhalte vom Server abrufen (in diesem Beispiel verwenden wir ein statisches Zitat-Array) und den DOM aktualisieren. Diese werden manchmal als **Live-Bereiche** bezeichnet.

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

Dies funktioniert einigermaßen, aber es ist nicht gut für die Zugänglichkeit — die Inhaltsaktualisierung wird von Screenreadern nicht erkannt, sodass deren Benutzer nicht wissen würden, was vor sich geht. Dies ist ein ziemlich triviales Beispiel, aber stellen Sie sich nur vor, Sie würden eine komplexe Benutzeroberfläche mit vielen ständig aktualisierten Inhalten erstellen, wie einen Chatraum, ein Strategiespiel-UI oder eine live aktualisierte Einkaufskorb-Anzeige — es wäre unmöglich, die App auf irgendeine effektive Weise zu verwenden, ohne eine Art Möglichkeit, den Benutzer auf die Aktualisierungen hinzuweisen.

Glücklicherweise bietet WAI-ARIA einen nützlichen Mechanismus, um diese Benachrichtigungen bereitzustellen — die [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)-Eigenschaft. Wenn Sie diese auf ein Element anwenden, lassen Sie Screenreader den aktualisierten Inhalt vorlesen. Wie schnell der Inhalt vorgelesen wird, hängt vom Attributwert ab:

- `off`
  - : Der Standardwert. Updates sollten nicht angekündigt werden.
- `polite`
  - : Updates sollten nur angekündigt werden, wenn der Benutzer inaktiv ist.
- `assertive`
  - : Updates sollten Benutzern so schnell wie möglich mitgeteilt werden.

Hier aktualisieren wir das `<section>`-Öffnungs-Tag wie folgt:

```html
<section aria-live="assertive">…</section>
```

Dies wird dazu führen, dass ein Screenreader den Inhalt vorliest, wenn er aktualisiert wird.

Es gibt eine zusätzliche Überlegung — nur das Stück Text, das aktualisiert wird, wird vorgelesen. Es könnte schön sein, wenn wir immer auch die Überschrift vorlesen lassen, damit sich der Benutzer daran erinnern kann, was vorgelesen wird. Dazu können wir die [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)-Eigenschaft zur Sektion hinzufügen. Aktualisieren Sie Ihr `<section>`-Öffnungs-Tag erneut, wie folgt:

```html
<section aria-live="assertive" aria-atomic="true">…</section>
```

Das `aria-atomic="true"`-Attribut sagt den Screenreadern, dass sie den gesamten Inhalt des Elements als eine atomare Einheit vorlesen, nicht nur die aktualisierten Teile.

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
> Die [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)-Eigenschaft ist auch sehr nützlich, um zu steuern, was vorgelesen wird, wenn ein Live-Bereich aktualisiert wird. Beispielsweise kann sie nur Inhaltszugaben oder -entfernungen vorlesen lassen.

### Verbesserung der Tastaturzugänglichkeit

Wie an einigen anderen Stellen im Modul erläutert, ist eine der Stärken von HTML in Bezug auf Zugänglichkeit die eingebaute Tastaturzugänglichkeit von Features wie Schaltflächen, Formularelementen und Links. Im Allgemeinen können Sie die Tabulatortaste verwenden, um zwischen Steuerelementen zu wechseln, die Eingabetaste zur Auswahl oder Aktivierung von Steuerelementen und gelegentlich andere Steuerungen bei Bedarf (zum Beispiel die Auf- und Abwärtskurve, um zwischen Optionen in einer `<select>`-Box zu wechseln).

Manchmal müssen Sie jedoch Code schreiben, der entweder nicht-semantische Elemente als Schaltflächen (oder andere Steuerungstypen) verwendet oder Fokus steuernde Steuerelemente für nicht ganz den richtigen Zweck verwendet. Vielleicht versuchen Sie, einigen schlechten Code, den Sie geerbt haben, zu korrigieren, oder Sie erstellen ein komplexes Widget, das dies erfordert.

In Bezug darauf, nicht fokussierbaren Code fokussierbar zu machen, erweitert WAI-ARIA das `tabindex`-Attribut mit einigen neuen Werten:

- `tabindex="0"` — wie oben angegeben, ermöglicht dieser Wert, dass Elemente, die normalerweise nicht mit der Tabulatortaste erreichbar sind, mit der Tabulatortaste erreichbar werden. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — dies ermöglicht es nicht normalerweise fokussierbaren Elementen, fokussiert zu werden, z. B. durch JavaScript oder als Ziel von Links.

Wir haben dies ausführlicher besprochen und eine typische Implementierung in unserem HTML-Zugänglichkeitsartikel gezeigt — siehe [Wiederaufbau der Tastaturzugänglichkeit](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in).

### Zugänglichkeit nicht-semantischer Steuerelemente

Dies folgt dem vorherigen Abschnitt — Wenn eine Reihe verschachtelter `<div>`s mit CSS/JavaScript verwendet wird, um ein komplexes UI-Feature zu erstellen, oder ein natives Steuerelement erheblich verbessert/geändert wird, kann nicht nur die Tastaturzugänglichkeit leiden, sondern Benutzer von Screenreadern werden Schwierigkeiten haben, zu verstehen, was die Funktion macht, wenn keine Semantik oder andere Hinweise vorhanden sind. In solchen Situationen kann ARIA helfen, die fehlende Semantik bereitzustellen.

#### Formularvalidierung und Fehlerbenachrichtigungen

Lassen Sie uns zunächst das Formularbeispiel, das wir zuerst in unserem CSS- und JavaScript-Zugänglichkeitsartikel betrachtet haben, noch einmal durchgehen (lesen Sie [Halten Sie es unaufdringlich](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#keeping_it_unobtrusive) für eine vollständige Auffrischung). Am Ende dieses Abschnitts haben wir gezeigt, dass wir einige ARIA-Attribute auf das Fehlermeldungsfeld hinzugefügt haben, das alle Validierungsfehler anzeigt, wenn Sie versuchen, das Formular einzureichen:

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

- [`role="alert"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) verwandelt das Element, auf das es angewendet wird, automatisch in einen Live-Bereich, sodass Änderungen an ihm vorgelesen werden; es identifiziert es auch semantisch als eine Fehlermeldung (wichtige zeit- oder kontextabhängige Informationen) und stellt eine bessere, zugänglichere Möglichkeit dar, eine Benachrichtigung an einen Benutzer zu übermitteln (modale Dialoge wie [`alert()`](/de/docs/Web/API/Window/alert)-Aufrufe haben eine Reihe von Zugänglichkeitsproblemen; siehe [Popup-Fenster](https://webaim.org/techniques/javascript/other#popups) von WebAIM).
- Ein [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)-Wert von `all` weist den Screenreader an, den Inhalt der Fehlerliste vorzulesen, wenn Änderungen daran vorgenommen werden — d.h. wenn Fehler hinzugefügt oder entfernt werden. Dies ist nützlich, da der Benutzer wissen möchte, welche Fehler noch vorhanden sind, nicht nur, was hinzugefügt oder aus der Liste entfernt wurde.

Wir könnten unsere ARIA-Nutzung weiter ausbauen und mehr Validierungshilfe bereitstellen. Wie wäre es, wenn wir angeben würden, ob die Felder überhaupt erforderlich sind und welchen Bereich das Alter haben sollte?

1. Kopieren Sie an diesem Punkt unsere [`form-validation.html`](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html)- und [`validation.js`](https://github.com/mdn/learning-area/blob/main/accessibility/css/validation.js)-Dateien und speichern Sie sie in einem lokalen Verzeichnis.
2. Öffnen Sie beide in einem Texteditor und sehen Sie sich an, wie der Code funktioniert.
3. Fügen Sie zunächst einen Absatz direkt über dem `<form>`-Öffnungs-Tag hinzu, ähnlich dem folgenden, und markieren Sie beide Formular-`<label>`s mit einem Sternchen. Dies ist normalerweise die Art und Weise, wie wir erforderliche Felder für sehende Benutzer markieren.

   ```html
   <p>Fields marked with an asterisk (*) are required.</p>
   ```

4. Das macht visuell Sinn, aber es ist für Screenreader-Benutzer nicht so einfach zu verstehen. Glücklicherweise bietet WAI-ARIA das Attribut [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required), um Screenreadern Hinweise zu geben, dass sie den Benutzern mitteilen sollen, dass Formulareingaben ausgefüllt werden müssen. Aktualisieren Sie die `<input>`-Elemente wie folgt:

   ```html
   <input type="text" name="name" id="name" aria-required="true" />

   <input type="number" name="age" id="age" aria-required="true" />
   ```

5. Wenn Sie das Beispiel jetzt speichern und mit einem Screenreader testen, sollten Sie etwas wie "Geben Sie Ihren Namen ein Sternchen, erforderlich, Bearbeitung des Textes" hören.
6. Es könnte auch nützlich sein, wenn wir den Screenreader-Benutzern und den sehenden Benutzern eine Vorstellung davon geben, welchen Wert das Alter haben sollte. Dies wird oft als Tooltip oder Platzhalter im Formulareingabefeld angezeigt. WAI-ARIA enthält die [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) Eigenschaften, um die minimalen und maximalen Werte anzugeben, und Screenreader unterstützen die nativen `min`- und `max`-Attribute. Eine andere gut unterstützte Funktion ist das HTML-`placeholder`-Attribut, das eine Nachricht enthalten kann, die im Eingabefeld angezeigt wird, wenn kein Wert eingegeben wird und von einigen Screenreadern vorgelesen wird. Aktualisieren Sie Ihre Zahleneingabefeld so:

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

Fügen Sie immer ein {{HTMLelement('label')}} für jede Eingabe hinzu. Während einige Screenreader den Platzhaltertext ankündigen, tun dies die meisten nicht. Akzeptable Ersatzmethoden für die Bereitstellung eines zugänglichen Namens für Formularelemente umfassen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) und [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby). Aber das `<label>`-Element mit einem `for`-Attribut ist die bevorzugte Methode, da sie für alle Benutzer, einschließlich Mausbenutzer, die Benutzerfreundlichkeit bietet.

> [!NOTE]
> Sie können das abgeschlossene Beispiel live unter [`form-validation-updated.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-updated.html) sehen.

WAI-ARIA ermöglicht auch einige fortgeschrittene Methoden zur Formularbeschriftung, die über das klassische {{htmlelement("label")}}-Element hinausgehen. Wir haben bereits über die Verwendung der [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Eigenschaft gesprochen, um ein Label bereitzustellen, wo wir nicht möchten, dass das Label für sehende Benutzer sichtbar ist (siehe den Abschnitt [Wegweiser/Landmarks](#signpostslandmarks) oben). Einige andere Beschriftungsmethoden verwenden andere Eigenschaften wie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn Sie ein anderes Element als ein `<label>`-Element als Label oder mehrere Formulareingaben mit demselben Label versehen möchten, und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby), wenn Sie andere Informationen mit einer Formulareingabe verknüpfen und diese auch vorlesen lassen möchten. Sehen Sie sich den [WebAIM Advanced Form Labeling-Artikel](https://webaim.org/techniques/forms/advanced) für weitere Details an.

Es gibt auch viele andere nützliche Eigenschaften und Zustände zum Anzeigen des Status von Formularelementen. Zum Beispiel kann `aria-disabled="true"` verwendet werden, um anzugeben, dass ein Formularelement deaktiviert ist. Viele Browser überspringen deaktivierte Formularelemente, was dazu führt, dass sie von Screenreadern nicht vorgelesen werden. In einigen Fällen wird ein deaktiviertes Element wahrgenommen, daher ist es eine gute Idee, dieses Attribut hinzuzufügen, um den Screenreader darüber zu informieren, dass ein deaktiviertes Formularelement tatsächlich deaktiviert ist.

Wenn sich der deaktivierte Zustand einer Eingabe wahrscheinlich ändert, ist es auch eine gute Idee, anzugeben, wann dies passiert und was das Ergebnis ist. Zum Beispiel gibt es in unserem [`form-validation-checkbox-disabled.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-checkbox-disabled.html) Demo ein Kontrollkästchen, das, wenn es aktiviert ist, ein anderes Formularelement aktiviert, um weitere Informationen einzugeben. Wir haben einen versteckten Live-Bereich eingerichtet:

```html
<p class="hidden-alert" aria-live="assertive"></p>
```

der durch absolute Positionierung aus der Ansicht verborgen ist. Wenn dies aktiviert/deaktiviert wird, aktualisieren wir den Text im versteckten Live-Bereich, um den Screenreader-Benutzern mitzuteilen, was das Ergebnis des Aktivierens dieses Kontrollkästchens ist, sowie den `aria-disabled`-Status und einige visuelle Indikatoren.

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

Einige Male in diesem Kurs haben wir bereits die native Zugänglichkeit (und die Zugänglichkeitsprobleme bei der Verwendung anderer Elemente zum Simulieren) von Schaltflächen, Links oder Formularelemente erwähnt (siehe [UI-Steuerelemente](/de/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls) im HTML-Zugänglichkeitsartikel und [Verbesserung der Tastaturzugänglichkeit](#verbesserung_der_tastaturzugänglichkeit) oben). Im Grunde können Sie die Tastaturzugänglichkeit ohne zu viele Probleme in vielen Fällen wiederherstellen, indem Sie `tabindex` und ein wenig JavaScript verwenden.

Aber was ist mit Screenreadern? Sie werden die Elemente immer noch nicht als Schaltflächen sehen. Wenn wir unser [`fake-div-buttons.html`](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) Beispiel in einem Screenreader testen, werden unsere unechten Schaltflächen mit Ausdrücken wie "Klicken Sie auf mich!, Gruppe" gemeldet, was offensichtlich verwirrend ist.

Wir können dies mit einer WAI-ARIA Rolle beheben. Machen Sie eine lokale Kopie von [`fake-div-buttons.html`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) und fügen Sie [`role="button"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) zu jedem `<div>` mit Schaltfläche hinzu, zum Beispiel:

```html
<div data-message="This is from the first button" tabindex="0" role="button">
  Click me!
</div>
```

Jetzt, wenn Sie dies mit einem Screenreader versuchen, werden die Schaltflächen mit Ausdrücken wie "Klicken Sie auf mich!, Schaltfläche" gemeldet. Dies ist zwar viel besser, aber Sie müssen immer noch alle nativen Schaltflächenfunktionen hinzufügen, die die Benutzer erwarten, wie z. B. das Verarbeiten von <kbd>enter</kbd> und Klickereignissen, wie im [`button` role documentation](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) erklärt.

> [!NOTE]
> Vergessen Sie jedoch nicht, dass es immer besser ist, das richtige semantische Element zu verwenden, wo möglich. Wenn Sie eine Schaltfläche erstellen möchten und ein {{htmlelement("button")}}-Element verwenden können, sollten Sie ein {{htmlelement("button")}}-Element verwenden!

#### Benutzer durch komplexe Widgets führen

Es gibt eine ganze Reihe anderer [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles), die nicht-semantische Elementstrukturen als gängige UI-Features identifizieren können, die über das hinausgehen, was in standardmäßigem HTML verfügbar ist, zum Beispiel [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role), [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role). Sie können sich mehrere nützliche Beispiele in der [Deque university code library](https://dequeuniversity.com/library/) ansehen, um eine Vorstellung davon zu bekommen, wie solche Steuerelemente zugänglich gemacht werden können.

Gehen wir ein Beispiel durch. Wir kehren zu unserem einfachen absolut positionierten Registerkartensystem zurück (siehe [Verstecken von Dingen](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#hiding_things) in unserem CSS- und JavaScript-Zugänglichkeitsartikel), das Sie im [Registerkarten-Info-Box Beispiel](/de/docs/Learn_web_development/Core/CSS_layout/Practical_positioning_examples#a_tabbed_info-box) finden können.

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

      if (!this.firstTab) {
        this.firstTab = tab;
      }
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

In diesem Beispiel haben wir eine Kombination aus semantischen Elementen, Aria-Rollen und Aria-Attributen verwendet. Das erste davon ist, dass wir ein {{htmlelement("button")}}-Element als _Tab_ verwendet haben, was bedeutet, dass der Tab durch einen Mausklick oder über die Tastatur durch Drücken der Space- oder Enter-Taste ausgewählt werden kann.

ARIA-Funktionen, die verwendet wurden, umfassen:

- Neue Rollen — [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role), [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role)
  - : Diese identifizieren die wichtigen Bereiche der Registerkartenschnittstelle — den Container für die Registerkarten, die Registerkarten selbst und die entsprechenden Registerkartentafeln.
- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
  - : Definiert, welche Registerkarte derzeit ausgewählt ist. Wenn verschiedene Registerkarten von den Benutzern ausgewählt werden, wird der Wert dieses Attributs auf den unterschiedlichen Registerkarten durch JavaScript aktualisiert.
- `tabindex="-1"`
  - : `tabindex="-1"` nimmt das Element aus der Tab-Reihenfolge heraus. Da wir JavaScript verwenden, um dem Benutzer zu ermöglichen, die Registerkarten mit Tastatur oder Maus zu steuern, möchten wir nicht, dass der Benutzer die Tabulatortaste verwenden kann, um zu den Schaltflächen zu navigieren.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Dieses Attribut identifiziert ein Element (durch seine `id`), das das Element beschriftet, in diesem Beispiel wird der `<article>` durch die entsprechende Registerkarte oder `<button>` beschriftet.
- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
  - : Dieses Attribut identifiziert ein Element (durch seine `id`), das durch das Element gesteuert wird, in diesem Beispiel wird der `<article>` durch die entsprechende Registerkarte oder `<button>` gesteuert.

Wir hätten `aria-hidden` verwenden können, um den Inhalt der Registerkartentafeln vor unterstützenden Technologien zu verbergen, aber wenn dieser Inhalt fokussierbare Inhalte enthält, wie z. B. Links, könnte der Benutzer dennoch zu diesem Inhalt gelangen, auch wenn `aria-hidden=true` für die nicht aktiven Tafeln gesetzt ist. In diesem Beispiel haben wir `class="is-hidden"` auf die Registerkartentafeln angewendet, die den Registerkarten mit `aria-selected="false"` entsprechen, und verwenden CSS, um `display: none;` anzuwenden, was verhindert, dass der versteckte Inhalt angesteuert werden kann.

In unseren Tests hat diese neue Struktur die Dinge insgesamt verbessert. Die `<button>`s werden nun als Registerkarten erkannt (zum Beispiel wird "Registerkarte" vom Screenreader angesagt), die ausgewählte Registerkarte wird durch "ausgewählt" neben dem Namen der Registerkarte angezeigt und auf Inhalte, die nicht angezeigt werden, kann nicht zugegriffen werden. Der Benutzer kann auch die Registerkarten mit Tastatur oder Maus navigieren.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitergehen — siehe [Testen Sie Ihre Fähigkeiten: WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics/Test_your_skills:_WAI-ARIA).

## Zusammenfassung

Dieser Artikel hat bei weitem nicht alles behandelt, was in WAI-ARIA verfügbar ist, sollte Ihnen jedoch genügend Informationen gegeben haben, um zu verstehen, wie Sie es verwenden und einige der häufigsten Muster kennen, auf die Sie stoßen werden, die es erfordern.

## Siehe auch

- [Aria-Zustände und -Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes): Alle `aria-*`-Attribute
- [WAI-ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles): Kategorien von ARIA-Rollen und die auf MDN behandelten Rollen
- [ARIA in HTML](https://www.w3.org/TR/html-aria/) auf W3C: Eine Spezifikation, die für jede HTML-Funktion die von der Zugänglichkeit (ARIA) implizit angewendeten Semantiken definiert, sowie die WAI-ARIA-Funktionen, die Sie darauf einstellen können, wenn zusätzliche Semantiken erforderlich sind
- [Deque university code library](https://dequeuniversity.com/library/): eine Bibliothek mit wirklich nützlichen und praktischen Beispielen, die komplexe UI-Steuerelemente zeigen, die mit WAI-ARIA-Funktionen zugänglich gemacht wurden
- [WAI-ARIA-Autorierungspraktiken](https://www.w3.org/WAI/ARIA/apg/) bei W3C: Ein sehr detailliertes Design-Pattern vom W3C, das erklärt, wie man verschiedene Arten komplexer UI-Steuerelemente implementiert und dabei mithilfe von WAI-ARIA-Funktionen zugänglich macht

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility")}}
