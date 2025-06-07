---
title: WAI-ARIA Grundlagen
short-title: WAI-ARIA
slug: Learn_web_development/Core/Accessibility/WAI-ARIA_basics
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility")}}

Im Anschluss an den vorherigen Artikel ist es manchmal schwierig, komplexe UI-Steuerelemente zu erstellen, die nicht-semantisches HTML und dynamisch aktualisierten JavaScript-Inhalt beinhalten. WAI-ARIA ist eine Technologie, die bei solchen Problemen helfen kann, indem sie zusätzliche Semantik hinzufügt, die von Browsern und unterstützenden Technologien erkannt und genutzt werden kann, um den Nutzern zu vermitteln, was vor sich geht. Hier zeigen wir, wie man es auf grundlegender Ebene einsetzt, um die Barrierefreiheit zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und den in den vorherigen Lektionen des Moduls vermittelten Barrierefreiheit-Praktiken.</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Der Zweck von WAI-ARIA — Bereitstellung von Semantik für ansonsten nicht-semantisches HTML, damit Nutzer von unterstützenden Technologien die bereitgestellten Schnittstellen verstehen können.</li>
          <li>Die grundlegende Syntax — Rollen, Eigenschaften und Zustände.</li>
          <li>Markierungen und Wegweiser.</li>
          <li>Verbesserung der Tastatur-Zugänglichkeit.</li>
          <li>Ansage dynamischer Inhaltsaktualisierungen mit Live-Regionen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist WAI-ARIA?

Lassen Sie uns damit beginnen, was WAI-ARIA ist und was es für uns leisten kann.

### Eine ganz neue Reihe von Problemen

Mit zunehmender Komplexität und Dynamik von Web-Apps tauchten neue Zugänglichkeitsmerkmale und -probleme auf.

Zum Beispiel führte HTML mehrere semantische Elemente zur Definition von gewöhnlichen Seiteneigenschaften ein ({{htmlelement("nav")}}, {{htmlelement("footer")}}, usw.). Bevor diese verfügbar waren, verwendeten Entwickler {{htmlelement("div")}}s mit IDs oder Klassen, z.B. `<div class="nav">`, was problematisch war, da es keine einfache Möglichkeit gab, programmgesteuert ein bestimmtes Seitenelement wie die Hauptnavigation zu finden.

Die ursprüngliche Lösung bestand darin, ein oder mehrere versteckte Links am oberen Ende der Seite hinzuzufügen, die zur Navigation (oder was auch immer) führen, zum Beispiel:

```html
<a href="#hidden" class="hidden">Skip to navigation</a>
```

Doch das ist immer noch nicht sehr präzise und kann nur verwendet werden, wenn der Screenreader von der oberen Seite aus liest.

Ein weiteres Beispiel sind Apps, die komplexe Steuerelemente wie Datumsauswahlen zum Wählen von Daten oder Schieberegler zum Wählen von Werten bieten. HTML stellt spezielle Eingabetypen bereit, um solche Steuerelemente darzustellen:

```html
<input type="date" /> <input type="range" />
```

Diese waren ursprünglich nicht gut unterstützt und es war immer noch in gewissem Umfang schwierig, sie zu gestalten, was dazu führte, dass Designer und Entwickler sich für kundenspezifische Lösungen entschieden. Anstatt diese nativen Funktionen zu verwenden, verlassen sich einige Entwickler auf JavaScript-Bibliotheken, die solche Steuerelemente als eine Reihe von verschachtelten {{htmlelement("div")}}s generieren, die dann mit CSS gestaltet und mit JavaScript gesteuert werden.

Das Problem hierbei ist, dass sie visuell funktionieren, aber Screenreader keinen Sinn daraus machen können und ihre Nutzer hören nur, dass sie ein Durcheinander von Elementen ohne Semantik sehen, um zu beschreiben, was sie bedeuten.

### WAI-ARIA kommt ins Spiel

[WAI-ARIA](https://w3c.github.io/aria/) (Web Accessibility Initiative - Accessible Rich Internet Applications) ist eine Spezifikation, die vom W3C geschrieben wurde und einen Satz zusätzlicher HTML-Attribute definiert, die auf Elemente angewendet werden können, um zusätzliche Semantik bereitzustellen und die Zugänglichkeit dort zu verbessern, wo sie fehlt. In der Spezifikation sind drei Hauptmerkmale definiert:

- [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Diese definieren, was ein Element ist oder tut. Viele davon sind sogenannte Landmark-Rollen, die weitgehend den semantischen Wert von Strukturelementen duplizieren, wie `role="navigation"` ({{htmlelement("nav")}}), `role="banner"` (Dokument {{htmlelement("header")}}), `role="complementary"` ({{htmlelement("aside")}}) oder `role="search"` ({{htmlelement("search")}}). Einige andere Rollen beschreiben verschiedene Seitenstrukturen, die keine Elemente mit passenden Rollen haben, wie `role="tablist"` und `role="tabpanel"`, die häufig in Benutzeroberflächen vorkommen.
- Eigenschaften
  - : Diese definieren Eigenschaften von Elementen, die ihnen zusätzliche Bedeutung oder Semantik verleihen können. Zum Beispiel gibt `aria-required="true"` an, dass ein Formulareingabefeld ausgefüllt werden muss, um gültig zu sein, während `aria-labelledby="label"` es ermöglicht, eine ID auf ein Element zu setzen und es dann als Beschriftung für alles auf der Seite zu referenzieren, einschließlich mehrerer Elemente, was mit `<label for="input">` nicht möglich ist. Zum Beispiel könnten Sie `aria-labelledby` verwenden, um anzugeben, dass eine Schlüsselbeschreibung in einem {{htmlelement("div")}} die Beschriftung für mehrere Tabellenzellen ist, oder Sie könnten es als Alternative zu Bild-Alt-Text verwenden — vorhandene Informationen auf der Seite als Bild-Alt-Text angeben, anstatt sie im `alt`-Attribut zu wiederholen. Ein Beispiel hierzu finden Sie unter [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives).
- Zustände
  - : Spezielle Eigenschaften, die die aktuellen Bedingungen von Elementen definieren, wie `aria-disabled="true"`, das einem Screenreader anzeigt, dass ein Formulareingabefeld derzeit deaktiviert ist. Zustände unterscheiden sich von Eigenschaften darin, dass Eigenschaften während des gesamten Lebenszyklus einer App nicht geändert werden, während sich Zustände ändern können, in der Regel programmgesteuert über JavaScript.

Ein wichtiger Punkt zu WAI-ARIA-Attributen ist, dass sie nichts an der Webseite beeinflussen, außer den Informationen, die über die Zugänglichkeits-APIs des Browsers offengelegt werden (woher Screenreader ihre Informationen beziehen). WAI-ARIA beeinflusst nicht die Webseiten-Struktur, das DOM usw., obwohl die Attribute nützlich sein können, um Elemente per CSS auszuwählen.

> [!NOTE]
> Eine nützliche Liste aller ARIA-Rollen und deren Verwendung, mit Links zu weiteren Informationen, finden Sie in der WAI-ARIA-Spezifikation — siehe [Definition of Roles](https://w3c.github.io/aria/#role_definitions) — auf dieser Seite — siehe [ARIA roles](/de/docs/Web/Accessibility/ARIA/Reference/Roles).
>
> Die Spezifikation enthält auch eine Liste aller Eigenschaften und Zustände, mit Links zu weiteren Informationen — siehe [Definitions of States and Properties (alle `aria-*` attributes)](https://w3c.github.io/aria/#state_prop_def).

### Wo wird WAI-ARIA unterstützt?

Dies ist keine einfache Frage zu beantworten. Es ist schwierig, eine umfassende Ressource zu finden, die angibt, welche WAI-ARIA-Funktionen unterstützt werden und wo, weil:

1. Es gibt viele Funktionen in der WAI-ARIA-Spezifikation.
2. Es gibt viele Kombinationen von Betriebssystemen, Browsern und Screenreadern zu berücksichtigen.

Dieser letzte Punkt ist entscheidend — Um einen Screenreader überhaupt zu verwenden, muss Ihr Betriebssystem Browser ausführen, die die erforderlichen Zugänglichkeits-APIs bereitstellen, um die Informationen bereitzustellen, die Screenreader für ihre Arbeit benötigen. Die meisten gängigen Betriebssysteme haben ein oder zwei Browser, mit denen Screenreader arbeiten können. Die Paciello Group hat einen ziemlich aktuellen Beitrag, der Daten dazu bereitstellt — siehe [Rough Guide: browsers, operating systems and screen reader support updated](https://www.tpgi.com/rough-guide-browsers-operating-systems-and-screen-reader-support-updated/).

Als nächstes müssen Sie sich darum kümmern, ob die betreffenden Browser ARIA-Funktionen unterstützen und sie über ihre APIs offenlegen und ob Screenreader diese Informationen erkennen und ihren Nutzern nützlich präsentieren.

1. Die Unterstützung von Browsern ist fast universell.
2. Die Screenreader-Unterstützung für ARIA-Funktionen ist noch nicht ganz auf diesem Niveau, aber die gängigsten Screenreader nähern sich dem an. Sie können sich einen Eindruck über die Unterstützungsniveaus verschaffen, indem Sie sich den Artikel [WAI-ARIA Screen reader compatibility](https://www.powermapper.com/tests/screen-readers/aria/) von Powermapper ansehen.

In diesem Artikel werden wir nicht versuchen, jede WAI-ARIA-Funktion und ihre genauen Unterstützung detailliert abzudecken. Stattdessen werden wir die kritischsten WAI-ARIA-Funktionen behandeln, die Sie kennen sollten; wenn wir keine Unterstützung erwähnen, können Sie davon ausgehen, dass die Funktion gut unterstützt wird. Ausnahmen werden wir klar benennen.

> [!NOTE]
> Einige JavaScript-Bibliotheken unterstützen WAI-ARIA, indem sie ARIA-Attribute hinzufügen, um die Zugänglichkeit von UI-Elementen wie komplexen Formularelementen zu verbessern. Wenn Sie nach einer Drittanbieter-JavaScript-Lösung für die schnelle UI-Entwicklung suchen, sollten Sie die Zugänglichkeit ihrer UI-Widgets als wichtigen Wachstumsfaktor bei Ihrer Entscheidung betrachten. Gute Beispiele sind jQuery UI (siehe [About jQuery UI: Deep accessibility support](https://jqueryui.com/about/#deep-accessibility-support)), [ExtJS](https://www.sencha.com/products/extjs/) und [Dojo/Dijit](https://dojotoolkit.org/reference-guide/1.10/dijit/a11y/statement.html).

### Wann sollten Sie WAI-ARIA verwenden?

Wir haben einige der Probleme angesprochen, die zur Schaffung von WAI-ARIA geführt haben, aber im Wesentlichen gibt es vier Hauptbereiche, in denen WAI-ARIA nützlich ist:

- Wegweiser/Markierungen
  - : ARIA's [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) Attributwerte können als Wegweiser fungieren, die entweder die Semantik von HTML-Elementen replizieren (z.B. {{htmlelement("nav")}}) oder über die HTML-Semantik hinausgehen, um Wegweiser zu verschiedenen funktionalen Bereichen zu bieten, zum Beispiel `search`, `tablist`, `tab`, `listbox`, usw.
- Dynamische Inhaltsaktualisierungen
  - : Screenreader haben tendenziell Schwierigkeiten mit der Berichterstattung über ständig sich ändernden Inhalt; mit ARIA können wir `aria-live` verwenden, um Benutzer von Screenreadern zu informieren, wenn ein Bereich mit Inhalten dynamisch aktualisiert wird: zum Beispiel, indem JavaScript auf der Seite [neuen Inhalt vom Server abruft und das DOM aktualisiert](/de/docs/Learn_web_development/Core/Scripting/Network_requests).
- Verbesserung der Tastatur-Zugänglichkeit
  - : Es gibt eingebaute HTML-Elemente, die über eine native Tastaturzugänglichkeit verfügen; wenn andere Elemente zusammen mit JavaScript verwendet werden, um ähnliche Interaktionen zu simulieren, leiden die Tastaturzugänglichkeit und die Berichterstattung durch Screenreader. Wo dies unausweichlich ist, bietet WAI-ARIA eine Möglichkeit, anderen Elementen den Erhalt von Fokus zu erlauben (`tabindex` zu verwenden).
- Zugänglichkeit von nicht-semantischen Steuerelementen
  - : Wenn eine Reihe von verschachtelten `<div>`s zusammen mit CSS/JavaScript verwendet wird, um eine komplexe UI-Funktion zu erstellen, oder ein nativer Steuerelement erheblich verbessert/geändert wird, kann die Zugänglichkeit leiden. Benutzer von Screenreadern werden Schwierigkeiten haben, herauszufinden, was die Funktion tut, wenn es keine Semantik oder andere Hinweise gibt. In diesen Situationen kann ARIA helfen, durch eine Kombination von Rollen wie `button`, `listbox` oder `tablist` und Eigenschaften wie `aria-required` oder `aria-posinset` weitere Hinweise zur Funktionalität bereitzustellen.

#### Sie sollten WAI-ARIA nur verwenden, wenn Sie es brauchen!

Die Verwendung der richtigen HTML-Elemente gibt Ihnen implizit die benötigten Rollen und Sie sollten _immer_ [native HTML-Funktionen](/de/docs/Learn_web_development/Core/Accessibility/HTML) verwenden, um die Semantik bereitzustellen, die benötigt wird, damit Screenreader ihren Nutzern mitteilen, was vor sich geht. Manchmal ist dies nicht möglich, entweder weil Sie nur begrenzte Kontrolle über den Code haben oder weil Sie etwas Komplexes erstellen, das kein einfaches HTML-Element zur Implementierung hat. In solchen Fällen kann WAI-ARIA ein wertvolles Werkzeug zur Verbesserung der Zugänglichkeit sein.

Aber nochmal, verwenden Sie es nur, wenn es notwendig ist!

> [!NOTE]
> Versuchen Sie auch, Ihre Seite mit verschiedenen _echten_ Nutzern zu testen — nicht-behinderten Menschen, Menschen, die Screenreader verwenden, Menschen, die Tastatur-Navigation verwenden, etc. Diese werden bessere Einblicke darin haben, wie gut es funktioniert.

## Praktische WAI-ARIA-Implementierungen

Im nächsten Abschnitt werden wir die vier Bereiche genauer betrachten, zusammen mit praktischen Beispielen. Bevor Sie weitermachen, sollten Sie eine Screenreader-Testkonfiguration einrichten, damit Sie einige der Beispiele beim Durchgehen testen können.

Sehen Sie sich unseren Abschnitt über [Testen von Screenreadern](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers) für weitere Informationen an.

### Wegweiser/Markierungen

WAI-ARIA fügt den Browsern das [`role` Attribut](https://w3c.github.io/aria/#role_definitions) hinzu, mit dem Sie überall auf Ihrer Seite zusätzliche semantische Werte zu Elementen hinzufügen können, wo sie benötigt werden. Der erste wichtige Bereich, in dem dies nützlich ist, ist die Bereitstellung von Informationen für Screenreader, damit ihre Benutzer allgemeine Seitenelemente finden können. Dieses Beispiel hat die folgende Struktur:

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

Wenn Sie das Beispiel mit einem Screenreader in einem modernen Browser testen, erhalten Sie bereits einige nützliche Informationen. Zum Beispiel gibt VoiceOver Ihnen folgende Informationen:

- Auf dem `<header>`-Element — "banner, 2 items" (enthält eine Überschrift und das `<nav>`).
- Auf dem `<nav>`-Element — "navigation 2 items" (enthält eine Liste und ein Formular).
- Auf dem `<main>`-Element — "main 2 items" (enthält einen Artikel und ein Aside).
- Auf dem `<aside>`-Element — "complementary 2 items" (enthält eine Überschrift und eine Liste).
- Auf dem Suchformulareingang — "Search query, insertion at beginning of text".
- Auf dem `<footer>`-Element — "footer 1 item".

Wenn Sie das Landmarks-Menü von VoiceOver öffnen (zugänglich über die VoiceOver-Taste + U und dann die Pfeiltasten zum Durchblättern der Menüauswahlen verwenden), werden die meisten Elemente ordentlich aufgelistet, sodass sie schnell erreicht werden können.

![Mac's VoiceOver-Menü für schnelle Zugänglichkeit. Überschrift Landmarks und Liste der Landmarks einschließlich banner, navigation, main und complementary.](landmarks-list.png)

Wir könnten dies jedoch verbessern. Das Suchformular ist ein wirklich wichtiger Markierungspunkt, den die Leute finden möchten, aber es wird im Landmarks-Menü nicht aufgelistet oder wie ein bemerkenswerter Markierungspunkt behandelt, abgesehen davon, dass der tatsächliche Eingang als Sucheingang aufgerufen wird (`<input type="search">`).

Wir könnten es durch die Verwendung der ARIA `role="search"` verbessern, aber die Verwendung des {{htmlelement("search")}}-Elements gibt implizit diese Rolle dem Formular.

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

Am wichtigsten ist, dass wir semantisches HTML verwendet haben, das der Struktur der Seite Bedeutung und Rollen gibt, ohne unnötige [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)-Attribute zu unserer HTML-Struktur hinzuzufügen, die eine Struktur wie diese hat:

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

Wir haben Ihnen auch ein Bonus-Feature in diesem Beispiel gegeben — das {{htmlelement("input")}}-Element hat das Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) erhalten, das ihm eine beschreibende Beschriftung gibt, die von einem Screenreader gelesen werden kann, auch wenn wir kein {{htmlelement("label")}}-Element eingefügt haben. In solchen Fällen ist dies sehr nützlich — ein solches Suchformular ist eine sehr häufige, leicht erkennbare Funktion, und das Hinzufügen einer visuellen Beschriftung würde das Seitendesign ruinieren.

```html
<input
  type="search"
  name="q"
  placeholder="Search query"
  aria-label="Search through site content" />
```

Wenn wir jetzt VoiceOver verwenden, um dieses Beispiel zu betrachten, erhalten wir einige Verbesserungen:

- Das Suchformular wird sowohl beim Durchsuchen der Seite als auch im Landmarks-Menü als separates Element aufgerufen.
- Der Text, der im `aria-label`-Attribut enthalten ist, wird vorgelesen, wenn das Formulareingabefeld hervorgehoben wird.

Wenn Sie ältere Browser wie IE8 unterstützen müssen, lohnt es sich, ARIA-Rollen aus diesem Grund einzufügen. Und wenn aus irgendeinem Grund Ihre Seite aus `<div>`s besteht, sollten Sie auf jeden Fall die ARIA-Rollen hinzufügen, um diese dringend benötigte Semantik bereitzustellen!

Sie werden viel mehr über diese Semantik und die Leistungsfähigkeit von ARIA-Eigenschaften/Attributen unten sehen, insbesondere im Abschnitt [Zugänglichkeit von nicht-semantischen Steuerelementen](#zugänglichkeit_von_nicht-semantic_controls). Schauen wir uns zunächst an, wie ARIA bei dynamischen Inhaltsaktualisierungen helfen kann.

### Dynamische Inhaltsaktualisierungen

Inhalt, der in das DOM geladen wird, kann problemlos mit einem Screenreader zugegriffen werden, von textlichem Inhalt bis zu alternativen Texten, die an Bilder angehängt sind. Traditionelle statische Websites mit überwiegend Textinhalt sind daher leicht zugänglich für Menschen mit Sehbehinderungen.

Das Problem ist, dass moderne Web-Apps oft nicht nur aus statischem Text bestehen - sie aktualisieren oft Teile der Seite, indem sie neuen Inhalt vom Server laden (in diesem Beispiel verwenden wir ein statisches Array von Zitaten) und das DOM aktualisieren. Diese werden manchmal als **Live-Regionen** bezeichnet.

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

Dies funktioniert in Ordnung, ist jedoch nicht förderlich für Barrierefreiheit — die Inhaltsaktualisierung wird von Screenreadern nicht erkannt, sodass ihre Benutzer nicht wissen, was los ist. Dies ist ein eher triviales Beispiel, aber stellen Sie sich nur einmal vor, Sie würden eine komplexe Benutzeroberfläche mit vielen ständig aktualisierten Inhalten erstellen, wie einen Chatroom, eine Strategie-Spiel-Oberfläche oder eine Live-aktualisierte Einkaufswagenanzeige — es wäre unmöglich, die App in irgendeiner effektiven Weise zu verwenden, ohne irgendeine Art von Möglichkeit, den Benutzer auf die Updates aufmerksam zu machen.

WAI-ARIA bietet glücklicherweise einen nützlichen Mechanismus, um diese Benachrichtigungen bereitzustellen — die [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) Eigenschaft. Das Anwenden dieses Attributs auf ein Element führt dazu, dass Screenreader den Inhalt vorlesen, der aktualisiert wird. Wie dringend der Inhalt vorgelesen wird, hängt vom Attributwert ab:

- `off`
  - : Der Standardwert. Aktualisierungen sollten nicht bekannt gegeben werden.
- `polite`
  - : Aktualisierungen sollten nur bekannt gegeben werden, wenn der Benutzer gerade nicht beschäftigt ist.
- `assertive`
  - : Aktualisierungen sollten dem Benutzer so schnell wie möglich bekannt gegeben werden.

Hier aktualisieren wir das `<section>`-Öffnungstags wie folgt:

```html
<section aria-live="assertive">…</section>
```

Dies wird dazu führen, dass ein Screenreader den Inhalt beim Aktualisieren vorliest.

Es gibt hier eine zusätzliche Überlegung — nur das Teil des Textes, das aktualisiert wird, wird vorgelesen. Es wäre schön, wenn wir immer auch die Überschrift vorlesen würden, damit der Benutzer sich erinnern kann, was vorgelesen wird. Um dies zu tun, können wir das [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic) Attribut zur Sektion hinzufügen. Aktualisieren Sie das `<section>`-Öffnungstags erneut, wie folgt:

```html
<section aria-live="assertive" aria-atomic="true">…</section>
```

Das `aria-atomic="true"` Attribut weist Screenreader an, den gesamten Elementinhalt als eine atomare Einheit vorzulesen, nicht nur die aktualisierten Teile.

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
> Das [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant) Attribut ist auch nützlich, um zu steuern, was vorgelesen wird, wenn eine Live-Region aktualisiert wird. Man kann z.B. nur Inhaltserweiterungen oder -entfernungen vorlesen lassen.

### Verbesserung der Tastatur-Zugänglichkeit

Wie in einigen anderen Bereichen des Moduls besprochen, ist eine der Schlüsselstärken von HTML hinsichtlich Zugänglichkeit die eingebaute Tastaturzugänglichkeit von Funktionen wie Schaltflächen, Formularelementen und Links. Normalerweise kann man die Tab-Taste verwenden, um zwischen Steuerelementen zu wechseln, die Enter/Return-Taste, um Steuerelemente auszuwählen oder zu aktivieren, und gelegentlich andere Steuerungen, wie die Pfeil-nach-oben und Pfeil-nach-unten-Tasten, um zwischen Optionen in einem `<select>`-Feld zu wechseln.

Es kann jedoch vorkommen, dass Sie Code schreiben müssen, der entweder nicht-semantische Elemente als Schaltflächen (oder andere Steuerelementtypen) verwendet oder fokusfähige Steuerelemente nicht ganz richtig verwendet. Möglicherweise versuchen Sie, schlechten Code, den Sie geerbt haben, zu korrigieren, oder Sie erstellen eine Art komplexes Widget, das dies erfordert.

Um nicht-fokussierbaren Code fokussierbar zu machen, erweitert WAI-ARIA das `tabindex` Attribut um einige neue Werte:

- `tabindex="0"` — wie oben angegeben, ermöglicht dieser Wert, dass normalerweise nicht standardmäßig tabbable Elemente tabbable werden. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — dies ermöglicht normalerweise nicht tabbable Elemente, programmgesteuert den Fokus zu erhalten, z.B. über JavaScript oder als Ziel von Links.

Wir haben dies in unserem HTML-Barrierefreiheitsartikel ausführlicher besprochen und eine typische Implementierung gezeigt — siehe [Building keyboard accessibility back in](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in).

### Zugänglichkeit von nicht-semantischen Steuerelementen

Dies folgt auf den vorherigen Abschnitt — wenn eine Reihe von verschachtelten `<div>`s zusammen mit CSS/JavaScript verwendet wird, um eine komplexe UI-Funktion zu erstellen, oder ein nativer Steuerelement erheblich verbessert/geändert wird, leiden nicht nur die Tastaturzugänglichkeit, sondern Benutzer von Screenreadern werden Schwierigkeiten haben, herauszufinden, was die Funktion tut, wenn es keine Semantik oder andere Hinweise gibt. In solchen Situationen kann ARIA helfen, diese fehlenden Semantiken bereitzustellen.

#### Formularvalidierung und Fehlerbenachrichtigungen

Lassen Sie uns zunächst das Formularbeispiel erneut besuchen, das wir zunächst in unserem CSS- und JavaScript-Barrierefreiheitsartikel betrachtet haben (lesen Sie [Keeping it unobtrusive](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#keeping_it_unobtrusive) für eine vollständige Wiederholung). Am Ende dieses Abschnitts haben wir gezeigt, dass wir einige ARIA-Attribute auf dem Fehlermeldungsfeld eingefügt haben, das alle Validierungsfehler anzeigt, wenn Sie versuchen, das Formular einzureichen:

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

- [`role="alert"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) verwandelt das Element, auf das es angewendet wird, automatisch in eine Live-Region, sodass Änderungen daran gelesen werden; es identifiziert es auch semantisch als eine Warnmeldung (wichtige zeit-/kontextsensitiv Informationen) und stellt eine bessere, zugänglichere Möglichkeit dar, eine Warnung an einen Benutzer zu übermitteln (modale Dialoge wie [`alert()`](/de/docs/Web/API/Window/alert)-Aufrufe haben eine Reihe von Zugänglichkeitsproblemen; siehe [Popup Windows](https://webaim.org/techniques/javascript/other#popups) von WebAIM).
- Ein [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant) Wert von `all` weist den Screenreader an, den Inhalt der Fehlerliste beim Auftreten von Änderungen daran vorzulesen - d.h. wenn Fehler hinzugefügt oder entfernt werden. Dies ist nützlich, da der Benutzer wissen möchte, welche Fehler übrig sind, nicht nur, welche hinzugefügt oder aus der Liste entfernt wurden.

Wir könnten unsere ARIA-Verwendung weiter vorantreiben und einige weitere Validierungshilfen bereitstellen. Wie wäre es z.B. damit, anzugeben, ob Felder überhaupt erforderlich sind und welches Alter den Wert des Alters sein sollte?

1. Nehmen Sie an dieser Stelle eine Kopie unserer [`form-validation.html`](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html)- und [`validation.js`](https://github.com/mdn/learning-area/blob/main/accessibility/css/validation.js)-Dateien und speichern Sie sie in einem lokalen Verzeichnis.
2. Öffnen Sie sie beide in einem Texteditor und sehen Sie sich an, wie der Code funktioniert.
3. Fügen Sie zunächst einen Absatz direkt über dem `<form>`-Öffnungstag ein, wie den untenstehenden, und kennzeichnen Sie die beiden `<label>`-Formulare mit einem Sternchen. Normalerweise markieren wir damit erforderliche Felder für sehende Benutzer.

   ```html
   <p>Fields marked with an asterisk (*) are required.</p>
   ```

4. Dies macht visuell Sinn, aber für Benutzer von Screenreadern ist es nicht so einfach verständlich. Glücklicherweise bietet WAI-ARIA das [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required) Attribut, um Screenreader benutzen zu informieren, dass Formulareingabefelder ausgefüllt werden müssen. Aktualisieren Sie die `<input>`-Elemente wie folgt:

   ```html
   <input type="text" name="name" id="name" aria-required="true" />

   <input type="number" name="age" id="age" aria-required="true" />
   ```

5. Wenn Sie das Beispiel jetzt speichern und mit einem Screenreader testen, hören Sie vielleicht etwas wie "Geben Sie Ihren Namen ein Stern, erforderlich, bearbeiten Text".
6. Es könnte auch nützlich sein, Bildschirmleser-Benutzern und sehenden Benutzern eine Vorstellung zu geben, welchen Alterswert sie verwenden sollten. Oft stellt man dies als Tooltip oder Platzhalter im Formulareingabefeld dar. WAI-ARIA enthält [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) Eigenschaften, um Mindest- und Höchstwerte anzugeben, und Screenreader unterstützen die nativen `min` und `max` Attribute. Eine weitere gut unterstützte Funktion ist das HTML `placeholder` Attribut, das eine Nachricht enthalten kann, die beim Eingeben eines Werts im Eingabefeld angezeigt wird und von einigen Screenreadern vorgelesen wird. Aktualisieren Sie Ihre Eingabe wie folgt:

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

Fügen Sie immer ein {{HTMLelement('label')}} für jede Eingabe hinzu. Während einige Screenreader den Platzhaltertext ankündigen, tun dies die meisten nicht. Akzeptable Alternativen zum Bereitstellen von Formularsteuerelementen mit einem zugänglichen Namen beinhalten [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) und [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby). Aber das `<label>`-Element mit einem `for` Attribut ist die bevorzugte Methode, da es die Benutzerfreundlichkeit für alle Benutzer bietet, einschließlich Mausbenutzer.

> [!NOTE]
> Sie können das fertige Beispiel live unter [`form-validation-updated.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-updated.html) sehen.

WAI-ARIA ermöglicht auch einige fortgeschrittene Formularbeschriftungsverfahren, die über das klassische {{htmlelement("label")}}-Element hinausgehen. Wir haben bereits darüber gesprochen, das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) Attribut zu verwenden, um eine Beschriftung bereitzustellen, wenn wir nicht möchten, dass die Beschriftung für sehende Benutzer sichtbar ist (siehe den Abschnitt [Wegweiser/Markierungen](#wegweiser_markierungen) oben). Einige andere Beschriftungstechniken verwenden andere Attribute wie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) wenn Sie ein nicht-`<label>` Element als Beschriftung kennzeichnen oder mehrere Formulareingaben mit demselben Label beschriften möchten, und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby), wenn Sie andere Informationen mit einem Formulareingabefeld in Verbindung bringen und dies ebenfalls vorgelesen lassen möchten. Siehe [WebAIM's Advanced Form Labeling article](https://webaim.org/techniques/forms/advanced) für weitere Details.

Es gibt auch viele andere nützliche Eigenschaften und Zustände, um den Status von Formularelementen anzuzeigen. Zum Beispiel kann `aria-disabled="true"` verwendet werden, um anzugeben, dass ein Formulareingabefeld deaktiviert ist. Viele Browser überspringen deaktivierte Formulareingabefelder, wodurch sie nicht von Screenreadern vorgelesen werden. In einigen Fällen wird ein deaktiviertes Element wahrgenommen, daher ist es eine gute Idee, dieses Attribut einzuschließen, um dem Screenreader mitzuteilen, dass ein deaktiviertes Formularelement tatsächlich deaktiviert ist.

Wenn sich der deaktivierte Zustand einer Eingabe voraussichtlich ändern wird, ist es auch eine gute Idee, anzuzeigen, wann dies geschieht und was das Ergebnis ist. Zum Beispiel in unserem [`form-validation-checkbox-disabled.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-checkbox-disabled.html) Demo gibt es ein Kontrollkästchen, das bei Aktivierung eine weitere Formulareingabe aktiviert, um weitere Informationen einzugeben. Wir haben eine versteckte Live-Region eingerichtet:

```html
<p class="hidden-alert" aria-live="assertive"></p>
```

die aus der Sicht verborgen wird, indem sie absolut positioniert wird. Wenn dieses Kontrollkästchen aktiviert/deaktiviert wird, aktualisieren wir den Text innerhalb der versteckten Live-Region, um Benutzer von Screenreadern darüber zu informieren, was das Ergebnis des Markierens dieses Kontrollkästchens ist, sowie den `aria-disabled` Zustand und einige visuelle Indikatoren ebenfalls:

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

Ein paar Mal in diesem Kurs haben wir bereits die native Zugänglichkeit von (und die Zugänglichkeitsprobleme bei der Verwendung anderer Elemente zur Nachahmung von) Schaltflächen, Links oder Formularelementen erwähnt (siehe [Use semantic UI controls where possible](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible) im HTML-Barrierefreiheitsartikel und [Enhancing keyboard accessibility](#verbesserung_der_tastatur-zugänglichkeit) oben). Grundsätzlich können Sie die Tastaturzugänglichkeit ohne großen Aufwand in vielen Fällen wiederherstellen, indem Sie `tabindex` und ein wenig JavaScript verwenden.

Aber was ist mit Screenreadern? Sie werden die Elemente immer noch nicht als Schaltflächen sehen. Wenn wir unser Beispiel [`fake-div-buttons.html`](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) mit einem Screenreader testen, werden unsere gefälschten Schaltflächen mit Aussagen wie "Click me!, group" gemeldet, was offensichtlich verwirrend ist.

Wir können dies mit einer WAI-ARIA-Rolle beheben. Erstellen Sie eine lokale Kopie von [`fake-div-buttons.html`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) und fügen Sie [`role="button"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) zu jedem `<div>` der Schaltfläche hinzu, zum Beispiel:

```html
<div data-message="This is from the first button" tabindex="0" role="button">
  Click me!
</div>
```

Jetzt, wenn Sie dies mit einem Screenreader versuchen, werden die Schaltflächen mit Phrasen wie "Click me!, button" gemeldet. Dies ist zwar viel besser, aber Sie müssen immer noch alle nativen Schaltflächenfunktionen hinzufügen, die Benutzer erwarten, wie die Behandlung von <kbd>enter</kbd> und Klickereignissen, wie in der [`button` Rolle Dokumentation](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) erklärt.

> [!NOTE]
> Vergessen Sie jedoch nicht, dass die Verwendung des richtigen semantischen Elements, wo möglich, immer besser ist. Wenn Sie eine Schaltfläche erstellen möchten und ein {{htmlelement("button")}}-Element verwenden können, sollten Sie ein {{htmlelement("button")}}-Element verwenden!

#### Nutzerführung durch komplexe Widgets

Es gibt eine ganze Reihe von [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles), die nicht-semantische Elementstrukturen als häufige UI-Funktionen identifizieren können, die über das hinausgehen, was in standardmäßigem HTML verfügbar ist, zum Beispiel [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role), [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role). Sie können mehrere nützliche Beispiele in der [Deque university code library](https://dequeuniversity.com/library/) sehen, die Ihnen eine Vorstellung davon geben, wie solche Steuerungen zugänglich gemacht werden können.

Gehen wir durch ein Beispiel von unserem eigenen. Wir kehren zu unserer einfachen absolut positionierten Registerkarten-Oberfläche zurück (siehe [Hiding things](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#hiding_things) in unserem CSS- und JavaScript-Barrierefreiheitsartikel), das Sie in der [Tabbed info box example](/de/docs/Learn_web_development/Core/CSS_layout/Practical_positioning_examples#a_tabbed_info-box) finden können.

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

    for (const tab of this.tabs) {
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
    for (const tab of this.tabs.length) {
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

window.addEventListener("load", () => {
  const tablists = document.querySelectorAll("[role=tablist].manual");
  for (const tablist of tablists) {
    new TabsManual(tablist);
  }
});
```

{{EmbedLiveSample("aria-tabbed-info-box", "100", "270")}}

In diesem Beispiel haben wir eine Kombination aus semantischen Elementen, ARIA-Rollen und ARIA-Attributen verwendet. Zuerst haben wir ein {{htmlelement("button")}}-Element als Registerkarte verwendet, dies bedeutet, dass die Registerkarte über einen Mausklick oder über die Tastatur mit den Tasten Leerzeichen oder Eingabe ausgewählt werden kann.

Genutzte ARIA-Funktionen umfassen:

- Neue Rollen — [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role), [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role)
  - : Diese identifizieren die wichtigen Bereiche der Registerkarten-Oberfläche — den Container für die Registerkarten, die Registerkarten selbst und die entsprechenden Tabpanels.
- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
  - : Definiert, welche Registerkarte derzeit ausgewählt ist. Wenn unterschiedliche Registerkarten vom Benutzer ausgewählt werden, wird der Wert dieses Attributs auf den verschiedenen Registerkarten über JavaScript aktualisiert.
- `tabindex="-1"`
  - : `tabindex="-1"` nimmt das Element aus der Tab-Reihenfolge heraus. Da wir JavaScript verwenden, um dem Benutzer zu ermöglichen, die Registerkarten über die Tastatur oder die Maus zu steuern, möchten wir nicht, dass der Benutzer die Tab-Taste verwenden kann, um zu den Schaltflächen zu navigieren.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Dieses Attribut identifiziert ein Element (durch seine `id`), das das Element beschriftet, in diesem Beispiel wird der `<article>` durch die entsprechende Registerkarte oder `<button>` beschriftet.
- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
  - : Dieses Attribut identifiziert ein Element (durch seine `id`), das vom Element gesteuert wird, in diesem Beispiel wird der `<article>` von der entsprechenden Registerkarte oder `<button>` gesteuert.

Wir hätten `aria-hidden` verwenden können, um den Inhalt der Tabpanels von unterstützenden Technologien zu verbergen, aber wenn dieser Inhalt fokussierbaren Code enthielt, wie Links, könnte der Benutzer weiterhin zu diesem Inhalt springen, selbst wenn aria-hidden=true für nicht-aktive Panels festgelegt ist. In diesem Beispiel haben wir `class="is-hidden"` an Tabpanels angewendet, die den Tabs mit `aria-selected="false"` entsprechen, und verwenden CSS, um `display: none;` anzuwenden, wodurch verhindert wird, dass versteckter Inhalt angesprungen wird.

In unseren Tests hat diese neue Struktur insgesamt verbessert. Die `<button>`s werden jetzt als Registerkarten erkannt (z.B. wird "tab" vom Screenreader ausgesprochen), die ausgewählte Registerkarte wird angezeigt, indem "selected" zusammen mit dem Registerkartennamen vorgelesen wird und jeder Inhalt, der nicht gezeigt wird, nicht angesprungen werden kann. Der Benutzer kann auch mit der Tastatur oder der Maus durch die Registerkarten navigieren.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Test your skills: WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA).

## Zusammenfassung

Dieser Artikel hat nicht annähernd alles abgedeckt, was in WAI-ARIA verfügbar ist, aber er sollte Ihnen genügend Informationen gegeben haben, um zu verstehen, wie man es verwendet und einige der häufigsten Muster, auf die man stößt, die es erfordern.

## Siehe auch

- [Aria states and properties](/de/docs/Web/Accessibility/ARIA/Reference/Attributes): Alle `aria-*` Attribute
- [WAI-ARIA roles](/de/docs/Web/Accessibility/ARIA/Reference/Roles): Kategorien von ARIA-Rollen und die auf MDN abgedeckten Rollen
- [ARIA in HTML](https://w3c.github.io/html-aria/) auf W3C: Eine Spezifikation, die für jedes HTML-Feature definiert, die zugänglichen (ARIA) Semantiken, die implizit darauf von dem Browser angewendet werden und die WAI-ARIA-Funktionen, die Sie darauf setzen können, falls zusätzliche Semantik erforderlich ist
- [Deque university code library](https://dequeuniversity.com/library/): Eine Bibliothek mit wirklich nützlichen und praktischen Beispielen, die komplexe UI-Steuerelemente zeigen, die unter Verwendung von WAI-ARIA-Funktionen zugänglich gemacht wurden
- [WAI-ARIA authoring practices](https://www.w3.org/WAI/ARIA/apg/) auf W3C: Ein sehr detailliertes Designmuster des W3C, das erklärt, wie man verschiedene Arten von komplexen UI-Steuerungen implementiert, während sie mit WAI-ARIA-Funktionen zugänglich gemacht werden

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility")}}
