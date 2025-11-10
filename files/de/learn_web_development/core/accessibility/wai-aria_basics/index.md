---
title: WAI-ARIA Grundlagen
short-title: WAI-ARIA
slug: Learn_web_development/Core/Accessibility/WAI-ARIA_basics
l10n:
  sourceCommit: 6193c69cb71e80e45e7dff97188253ed15d58321
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA", "Learn_web_development/Core/Accessibility")}}

Fortsetzend vom vorherigen Artikel kann es manchmal schwierig sein, komplexe UI-Steuerelemente zu erstellen, die unsemantisches HTML und dynamisch aktualisierte JavaScript-Inhalte beinhalten. WAI-ARIA ist eine Technologie, die bei solchen Problemen helfen kann, indem sie zusätzliche Semantiken hinzufügt, die von Browsern und unterstützenden Technologien erkannt und genutzt werden können, um Benutzer darüber zu informieren, was vor sich geht. Hier zeigen wir, wie man es auf einer grundlegenden Ebene verwenden kann, um die Barrierefreiheit zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und Best Practices für Barrierefreiheit, wie sie in den vorherigen Lektionen des Moduls vermittelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von WAI-ARIA — um Semantiken für ansonsten nicht-semantisches HTML bereitzustellen, damit Nutzer von unterstützenden Technologien die Schnittstellen verstehen können, die ihnen präsentiert werden.</li>
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

Lassen Sie uns zunächst betrachten, was WAI-ARIA ist und was es für uns tun kann.

### Eine ganz neue Reihe von Problemen

Als Web-Apps komplexer und dynamischer wurden, tauchten neue Funktionen und Probleme bezüglich der Barrierefreiheit auf.

Beispielsweise führte HTML eine Reihe von semantischen Elementen ein, um allgemeine Seiteneigenschaften zu definieren ({{htmlelement("nav")}}, {{htmlelement("footer")}} usw.). Bevor diese verfügbar waren, nutzten Entwickler {{htmlelement("div")}}s mit IDs oder Klassen, z. B. `<div class="nav">`, aber diese waren problematisch, da es keine einfache Möglichkeit gab, eine spezifische Seiteneigenschaft wie die Hauptnavigation programmatisch leicht zu finden.

Die anfängliche Lösung bestand darin, ein oder mehrere versteckte Links am oberen Rand der Seite hinzuzufügen, um zur Navigation (oder was auch immer) zu verlinken, z. B.:

```html
<a href="#hidden" class="hidden">Skip to navigation</a>
```

Aber das ist immer noch nicht sehr präzise und kann nur verwendet werden, wenn der Bildschirmleser vom oberen Rand der Seite liest.

Ein weiteres Beispiel sind Apps, die begannen, komplexe Steuerelemente wie Datumsauswahlen zur Auswahl von Terminen oder Schieberegler zur Auswahl von Werten zu enthalten. HTML bietet spezielle Eingabetypen, um solche Steuerelemente darzustellen:

```html
<input type="date" /> <input type="range" />
```

Diese wurden ursprünglich nicht gut unterstützt und es war, und ist immer noch bis zu einem gewissen Grad, schwierig, sie zu stylen, was Designer und Entwickler dazu veranlasst, sich für benutzerdefinierte Lösungen zu entscheiden. Anstatt diese nativen Funktionen zu verwenden, verlassen sich einige Entwickler auf JavaScript-Bibliotheken, die solche Steuerelemente als eine Reihe verschachtelter {{htmlelement("div")}}s generieren, die dann mit CSS gestylt und mit JavaScript gesteuert werden.

Das Problem hierbei ist, dass sie zwar visuell funktionieren, Bildschirmleser jedoch überhaupt keinen Sinn daraus machen können und deren Benutzer nur darüber informiert werden, dass sie ein Durcheinander von Elementen ohne jegliche Semantik sehen, die beschreibt, was sie bedeuten.

### Einführung von WAI-ARIA

[WAI-ARIA](https://w3c.github.io/aria/) (Web Accessibility Initiative - Accessible Rich Internet Applications) ist eine Spezifikation, die von der W3C verfasst wurde und eine Reihe zusätzlicher HTML-Attribute definiert, die auf Elemente angewendet werden können, um zusätzliche Semantiken bereitzustellen und die Barrierefreiheit zu verbessern, wenn diese unzureichend ist. Es gibt drei Hauptmerkmale, die in der Spezifikation definiert sind:

- [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Diese definieren, was ein Element ist oder tut. Viele davon sind sogenannte Landmarken-Rollen, die weitgehend den semantischen Wert von Strukturelementen duplizieren, wie `role="navigation"` ({{htmlelement("nav")}}), `role="banner"` (Dokument {{htmlelement("header")}}), `role="complementary"` ({{htmlelement("aside")}}) oder `role="search"` ({{htmlelement("search")}}). Einige andere Rollen beschreiben unterschiedliche Seitenstrukturen, die keine Elemente mit diesen Rollen haben, wie `role="tablist"` und `role="tabpanel"`, die häufig in UIs zu finden sind.
- Eigenschaften
  - : Diese definieren Eigenschaften von Elementen, die verwendet werden können, um ihnen zusätzliche Bedeutung oder Semantik zu geben. Ein Beispiel: `aria-required="true"` gibt an, dass ein Formulareingabefeld ausgefüllt werden muss, um gültig zu sein, während `aria-labelledby="label"` es ermöglicht, eine ID auf ein Element zu setzen und dann als Beschriftung für alles andere auf der Seite zu referenzieren, einschließlich mehrerer Elemente, was mit `<label for="input">` nicht möglich ist. Ein Beispiel könnte die Verwendung von `aria-labelledby` sein, um anzugeben, dass eine SchlüsSelbeschreibung in einem {{htmlelement("div")}} als Beschriftung für mehrere Tabellenzellen dient, oder als Alternative zu Bild-Alttext — vorhandene Informationen auf der Seite als Bild-Alttext anzugeben, anstatt sie im `alt`-Attribut zu wiederholen. Ein Beispiel hierfür finden Sie in [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives).
- Zustände
  - : Besondere Eigenschaften, die den aktuellen Zustand von Elementen definieren, wie `aria-disabled="true"`, das einem Bildschirmleser angibt, dass ein Formulareingabefeld derzeit deaktiviert ist. Zustände unterscheiden sich von Eigenschaften darin, dass sich Eigenschaften während des Lebenszyklus einer App nicht ändern, während Zustände sich ändern können, in der Regel programmatisch über JavaScript.

Ein wichtiger Punkt bei WAI-ARIA-Attributen ist, dass sie nichts an der Webseite ändern, außer den Informationen, die durch die Barrierefreiheits-APIs des Browsers freigegeben werden (wo Bildschirmleser ihre Informationen herbekommen). WAI-ARIA beeinflusst weder die Struktur der Webseite noch das DOM usw., obwohl die Attribute zum Auswählen von Elementen durch CSS nützlich sein können.

> [!NOTE]
> Eine nützliche Liste aller ARIA-Rollen und ihrer Verwendungszwecke, mit Links zu weiteren Informationen, finden Sie in der WAI-ARIA-Spezifikation — siehe [Definition der Rollen](https://w3c.github.io/aria/#role_definitions) — auf dieser Seite — siehe [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles).
>
> Die Spezifikation enthält auch eine Liste aller Eigenschaften und Zustände, mit Links zu weiteren Informationen — siehe [Definitionen von Zuständen und Eigenschaften (alle `aria-*` Attribute)](https://w3c.github.io/aria/#state_prop_def).

## Wo wird WAI-ARIA unterstützt?

Dies ist keine leicht zu beantwortende Frage. Es ist schwierig, eine schlüssige Ressource zu finden, die angibt, welche Merkmale von WAI-ARIA unterstützt werden und wo, weil:

1. Es gibt viele Merkmale in der WAI-ARIA-Spezifikation.
2. Es gibt viele Kombinationen von Betriebssystemen, Browsern und Bildschirmlesern zu beachten.

Dieser letzte Punkt ist entscheidend — Um einen Bildschirmleser überhaupt verwenden zu können, muss Ihr Betriebssystem Browser ausführen, die die notwendigen Barrierefreiheits-APIs implementiert haben, um die Informationen bereitzustellen, die Bildschirmleser benötigen, um ihre Arbeit zu erledigen. Die meisten beliebten Betriebssysteme haben ein oder zwei Browser parat, mit denen Bildschirmleser arbeiten können. Die Paciello Group hat einen ziemlich aktuellen Beitrag, der Daten dazu bereitstellt — siehe [Rough Guide: browsers, operating systems and screen reader support updated](https://www.tpgi.com/rough-guide-browsers-operating-systems-and-screen-reader-support-updated/).

Als nächstes müssen Sie sich darum kümmern, ob die betreffenden Browser ARIA-Funktionen unterstützen und über ihre APIs freigeben, aber auch, ob Bildschirmleser diese Informationen erkennen und ihren Benutzern auf sinnvolle Weise präsentieren.

1. Die Browserunterstützung ist fast universell.
2. Die Unterstützung von Bildschirmlesern für ARIA-Funktionen ist noch nicht auf diesem Niveau, aber die beliebtesten Bildschirmleser nähern sich. Sie können einen Eindruck von den Unterstützungsniveaus gewinnen, indem sie sich den Powermapper-Artikel [WAI-ARIA Screen reader compatibility](https://www.powermapper.com/tests/screen-readers/aria/) ansehen.

In diesem Artikel werden wir nicht alle WAI-ARIA-Funktionen und deren genaue Unterstützungsdetails besprechen. Stattdessen behandeln wir die wichtigsten WAI-ARIA-Funktionen, die Sie kennen sollten; wenn wir keine Unterstützungsdetails erwähnen, können Sie davon ausgehen, dass die Funktion gut unterstützt wird. Wir werden alle Ausnahmen davon klar kennzeichnen.

> [!NOTE]
> Einige JavaScript-Bibliotheken unterstützen WAI-ARIA, was bedeutet, dass sie beim Generieren von UI-Funktionen wie komplexen Formularsteuerelementen ARIA-Attribute hinzufügen, um die Barrierefreiheit dieser Funktionen zu verbessern. Wenn Sie nach einer Drittanbieter-JavaScript-Lösung für die schnelle UI-Entwicklung suchen, sollten Sie definitiv die Barrierefreiheit ihrer UI-Widgets als einen wichtigen Faktor bei Ihrer Auswahl in Betracht ziehen. Gute Beispiele sind jQuery UI (siehe [About jQuery UI: Deep accessibility support](https://jqueryui.com/about/#deep-accessibility-support)), [ExtJS](https://www.sencha.com/products/extjs/) und [Dojo/Dijit](https://dojotoolkit.org/reference-guide/1.10/dijit/a11y/statement.html).

## Wann sollten Sie WAI-ARIA verwenden?

Wir haben bereits einige der Probleme erörtert, die zur Erstellung von WAI-ARIA geführt haben, aber im Wesentlichen gibt es vier Hauptbereiche, in denen WAI-ARIA nützlich ist:

- Wegweiser/Landmarken
  - : ARIAs [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) Attributwerte können als Landmarken fungieren, die entweder die Semantik von HTML-Elementen replizieren (z. B. {{htmlelement("nav")}}) oder über die HTML-Semantik hinausgehen, um auf verschiedene Funktionsbereiche hinzuweisen, z. B. `search`, `tablist`, `tab`, `listbox` usw.
- Dynamische Inhaltsaktualisierungen
  - : Bildschirmleser haben oft Schwierigkeiten, ständig wechselnde Inhalte zu melden; mit ARIA können wir `aria-live` verwenden, um Nutzern von Bildschirmlesern mitzuteilen, wenn ein Inhaltsbereich dynamisch aktualisiert wird: zum Beispiel durch JavaScript auf der Seite, wenn neue Inhalte vom Server abgerufen und das DOM aktualisiert werden. [fetching new content from the server and updating the DOM](/de/docs/Learn_web_development/Core/Scripting/Network_requests).
- Verbesserung der Tastaturzugänglichkeit
  - : Es gibt eingebaute HTML-Elemente, die über native Tastaturzugänglichkeit verfügen; wenn andere Elemente zusammen mit JavaScript verwendet werden, um ähnliche Interaktionen zu simulieren, leidet die Tastaturzugänglichkeit und die Berichterstattung von Bildschirmlesern darunter. Wo dies unvermeidlich ist, bietet WAI-ARIA eine Möglichkeit, anderen Elementen zu ermöglichen, den Fokus zu empfangen (unter Verwendung von `tabindex`).
- Barrierefreiheit von nicht-semantischen Steuerelementen
  - : Wenn eine Reihe verschachtelter `<div>`s zusammen mit CSS/JavaScript verwendet wird, um ein komplexes UI-Feature zu erstellen oder ein nativer Steuerelement stark über JavaScript verbessert/verändert wird, kann die Barrierefreiheit darunter leiden — Nutzer von Bildschirmlesern werden es schwer haben, zu erkennen, was das Feature tut, wenn es keine Semantiken oder andere Hinweise gibt. In solchen Situationen kann ARIA helfen, mit einer Kombination aus Rollen wie `button`, `listbox` oder `tablist` und Eigenschaften wie `aria-required` oder `aria-posinset` weiterführende Hinweise zur Funktionalität zu geben.

Im nächsten Abschnitt betrachten wir die oben beschriebenen vier Hauptbereiche im Detail, zusammen mit Beispielen. Bevor Sie fortfahren, sollten Sie eine Bildschirmleser-Testumgebung einrichten, damit Sie einige der Beispiele währenddessen testen können. Weitere Informationen finden Sie in unserem Abschnitt über [Testen von Bildschirmlesern](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers).

> [!CALLOUT]
>
> **Sie sollten WAI-ARIA nur verwenden, wenn Sie es benötigen!**
>
> Die Verwendung der richtigen HTML-Elemente gibt Ihnen implizit die benötigten Rollen und Sie sollten _immer_ [native HTML-Funktionen](/de/docs/Learn_web_development/Core/Accessibility/HTML) verwenden, um die Semantiken bereitzustellen, die Bildschirmleser benötigen, um ihren Nutzern mitzuteilen, was vor sich geht. Manchmal ist dies nicht möglich, entweder weil Sie keine Kontrolle über den Code haben oder weil Sie etwas Komplexes erstellen, das kein einfach umsetzbares HTML-Element hat. In solchen Fällen kann WAI-ARIA als wertvolles Werkzeug zur Verbesserung der Barrierefreiheit dienen.
>
> Aber nochmal, verwenden Sie es nur, wenn es notwendig ist!
>
> Versuchen Sie auch sicherzustellen, dass Sie Ihre Website mit einer Vielzahl von _echten_ Benutzern testen — nicht-behinderte Menschen, Menschen, die Bildschirmleser verwenden, Menschen, die Tastaturnavigation verwenden usw. Sie werden bessere Einblicke haben, wie gut es funktioniert.

## Wegweiser/Landmarken

WAI-ARIA fügt den Browsern das [`role` Attribut](https://w3c.github.io/aria/#role_definitions) hinzu, das es ermöglicht, zusätzliches semantisches Wissen zu Elementen auf Ihrer Website hinzuzufügen, wo immer es benötigt wird. Der erste große Bereich, in dem dies nützlich ist, ist die Bereitstellung von Informationen für Bildschirmleser, damit deren Nutzer häufige Seitenelemente finden können. Dieses Beispiel hat die folgende Struktur:

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

Wenn Sie versuchen, das Beispiel mit einem Bildschirmleser in einem modernen Browser zu testen, erhalten Sie bereits einige nützliche Informationen. Zum Beispiel gibt VoiceOver Ihnen Folgendes:

- Auf dem `<header>`-Element — "Banner, 2 Elemente" (es enthält eine Überschrift und das `<nav>`).
- Auf dem `<nav>`-Element — "Navigation, 2 Elemente" (es enthält eine Liste und ein Formular).
- Auf dem `<main>`-Element — "Haupt 2 Elemente" (es enthält einen Artikel und ein Aside).
- Auf dem `<aside>`-Element — "Ergänzend, 2 Elemente" (es enthält eine Überschrift und eine Liste).
- Auf dem Suche-Formulareingabefeld — "Suchanfrage, Einfügen am Beginn des Textes".
- Auf dem `<footer>`-Element — "Fußzeile, 1 Element".

Wenn Sie zum VoiceOver-Landmarkenmenü gehen (zugänglich mit der VoiceOver-Taste + U und dann mit den Cursortasten, um die Menüoptionen zu durchlaufen), werden Sie feststellen, dass die meisten Elemente schön aufgelistet sind, sodass sie schnell zugänglich sind.

![Mac's VoiceOver-Menü für schnelle Barrierefreiheit. Überschrift der Landmarken und Landmarkenliste inklusive Banner, Navigation, Hauptteil und ergänzend.](landmarks-list.png)

Allerdings könnten wir hier noch besser werden. Das Suchformular ist eine wirklich wichtige Anhaltspunkte, die Menschen finden wollen, wird aber im Landmarkenmenü nicht als separate Landmarke behandelt. Es wird über das eigentliche Eingabefeld hinaus nicht als bemerkenswerte Landmarke behandelt (`<input type="search">`).

Um das Formular als eine Landmarke zu kennzeichnen, können Sie es entweder mit dem {{htmlelement("search")}}-Element umwickeln oder ihm die ARIA `role="search"` geben. Als allgemeine Regel sollten Sie HTML-Semantiken verwenden, wo immer möglich und nur ARIA verwenden, wo es kein HTML-Äquivalent gibt.

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

Am wichtigsten ist, dass wir HTML-Semantiken verwendet haben, die Bedeutung und Rollen der Seitenstruktur geben, ohne unnötige [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) Attribute zu unserer HTML-Struktur hinzuzufügen, die eine Struktur wie diese hat:

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

Wir haben Ihnen auch eine Bonusfunktion in diesem Beispiel gegeben — dem {{htmlelement("input")}}-Element wurde das Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) gegeben, das ihm eine beschreibende Beschriftung gibt, die von einem Bildschirmleser vorgelesen wird, obwohl wir kein {{htmlelement("label")}}-Element eingeschlossen haben. In solchen Fällen ist dies sehr nützlich — ein Suchformular wie dieses ist ein sehr häufiges, leicht erkennbares Feature und das Hinzufügen einer visuellen Beschriftung würde das Seitendesign verderben.

```html
<input
  type="search"
  name="q"
  placeholder="Search query"
  aria-label="Search through site content" />
```

Wenn wir nun VoiceOver verwenden, um dieses Beispiel zu betrachten, erhalten wir einige Verbesserungen:

- Das Suchformular wird beim Durchsuchen der Seite sowohl als separates Element als auch im Landmarkenmenü hervorgehoben.
- Der in dem `aria-label`-Attribut enthaltene Beschriftungstext wird vorgelesen, wenn das Formulareingabefeld hervorgehoben wird.

Wenn Sie ältere Browser wie IE8 unterstützen müssen, ist es sinnvoll, dafür ARIA-Rollen hinzuzufügen. Und wenn aus irgendeinem Grund Ihre Seite nur mit `<div>`s erstellt wurde, sollten Sie unbedingt die ARIA-Rollen einschließen, um diese dringend benötigten Semantiken bereitzustellen!

Sie werden viel mehr über diese Semantiken und die Kraft von ARIA-Eigenschaften/Attributen unten sehen, insbesondere im Abschnitt zur [Barrierefreiheit nicht-semantischer Steuerelemente](#barrierefreiheit_von_nicht-semantischen_steuerelementen). Schauen wir uns jetzt aber an, wie ARIA bei dynamischen Inhaltsaktualisierungen helfen kann.

## Dynamische Inhaltsaktualisierungen

Inhalte, die in das DOM geladen werden, können leicht mit einem Bildschirmleser abgerufen werden, von Textinhalten bis hin zu alternativem Text, der Bildern zugewiesen ist. Traditionelle statische Websites mit überwiegend Textinhalten sind daher leicht zugänglich für Menschen mit Sehbehinderungen.

Das Problem ist, dass moderne Web-Apps oft nicht nur aus statischem Text bestehen — sie aktualisieren oft Teile der Seite, indem sie neue Inhalte vom Server abrufen (in diesem Beispiel verwenden wir ein statisches Array von Zitaten) und das DOM aktualisieren. Diese werden manchmal als **Live-Bereiche** bezeichnet.

Schauen wir uns ein Beispiel an — einen Zufallszitatsgenerator:

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

Das funktioniert einigermaßen gut, ist jedoch nicht für die Barrierefreiheit ideal — die Inhaltsaktualisierung wird von Bildschirmlesern nicht erkannt, sodass ihre Nutzer nicht wissen, was geschieht. Dies ist ein ziemlich triviales Beispiel, aber stellen Sie sich nur vor, Sie würden eine komplexe Benutzeroberfläche mit ständig aktualisierten Inhalten erstellen, wie ein Chatroom, eine Strategiespiel-Benutzeroberfläche oder eine live aktualisierte Warenkorb-Anzeige — es wäre unmöglich, die App auf effektive Weise zu verwenden, ohne irgendeine Möglichkeit, den Nutzer auf die Updates hinzuweisen.

Glücklicherweise bietet WAI-ARIA einen nützlichen Mechanismus, um diese Warnungen bereitzustellen — die [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) Eigenschaft. Wenn Sie diese auf ein Element anwenden, bewirkt sie, dass Bildschirmleser den Inhalt vorlesen, der aktualisiert wird. Wie dringend der Inhalt vorgelesen wird, hängt vom Attributwert ab:

- `off`
  - : Der Standardwert. Updates sollten nicht angekündigt werden.
- `polite`
  - : Updates sollten nur angekündigt werden, wenn der Nutzer inaktiv ist.
- `assertive`
  - : Updates sollten dem Nutzer so schnell wie möglich angekündigt werden.

Hier aktualisieren wir das `<blockquote>`-Eröffnungstag wie folgt:

```html
<blockquote aria-live="assertive">…</blockquote>
```

Dies wird bewirken, dass ein Bildschirmleser den Inhalt vorgelesen wird, während er aktualisiert wird: versuchen Sie, die aktualisierte Live-Version zu testen:

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
> - Das [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic) Attribut, wenn es auf `true` gesetzt ist, weist Bildschirmleser an, den gesamten Inhalt des Elements als eine atomare Einheit vorzulesen, und nicht nur die aktualisierten Abschnitte. Dies ist nützlich, wenn nur die Inhalte eines Abschnitts aktualisiert werden, Sie jedoch auch die Überschrift vorgelesen haben möchten, um den Nutzer an ihren Inhalt zu erinnern.
> - Das [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant) Attribut ist nützlich, um zu steuern, was vorgelesen wird, wenn eine Live-Region aktualisiert wird. Sie können zum Beispiel nur hinzufügen, dass Inhaltszugaben oder -entfernungen vorgelesen werden sollen.

## Verbesserung der Tastaturzugänglichkeit

Wie in mehreren anderen Abschnitten des Moduls besprochen, ist eine der Stärken von HTML in Bezug auf Barrierefreiheit die eingebaute Tastaturzugänglichkeit von Funktionen wie Schaltflächen, Formularelementen und Links. Sie können im Allgemeinen die Tab-Taste verwenden, um zwischen Steuerelementen zu wechseln, die Enter/Return-Taste, um Steuerelemente auszuwählen oder zu aktivieren, und gelegentlich andere Steuerungen nach Bedarf (zum Beispiel den Auf- und Ab-Pfeil, um zwischen Optionen in einem `<select>`-Feld zu wechseln).

Manchmal jedoch müssen Sie möglicherweise Code schreiben, der entweder nicht-semantische Elemente als Schaltflächen (oder andere Steuerungstypen) verwendet oder fokusfähige Steuerelemente für nicht ganz die richtige Absicht verwendet. Sie könnten versuchen, schlechten Code, den Sie geerbt haben, zu reparieren, oder Sie könnten ein komplexes Widget erstellen, das dies erfordert.

Um nicht-fokusfähigen Code fokusfähig zu machen, erweitert WAI-ARIA das `tabindex`-Attribut mit einigen neuen Werten:

- `tabindex="0"` — wie oben angegeben, ermöglicht dieser Wert Elementen, die normalerweise nicht fokussierbar sind, fokussierbar zu werden. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — dies ermöglicht es normal nicht-fokussierbaren Elementen, programmatisch den Fokus zu erhalten, z. B. über JavaScript oder als Ziel von Links.

Wir haben dies ausführlicher diskutiert und in unserem Artikel zur HTML-Barrierefreiheit eine typische Implementierung gezeigt — siehe [Tastaturzugänglichkeit wiederherstellen](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in).

## Barrierefreiheit von nicht-semantischen Steuerelementen

Dies folgt auf den vorherigen Abschnitt — wenn eine Reihe verschachtelter `<div>`s zusammen mit CSS/JavaScript verwendet wird, um ein komplexes UI-Feature zu erstellen oder ein nativer Steuerelement stark verbessert/verändert wird, kann nicht nur die Tastaturzugänglichkeit leiden, sondern Nutzer von Bildschirmlesern werden es schwer haben, zu erkennen, was das Feature tut, wenn es keine Semantiken oder andere Hinweise gibt. In solchen Situationen kann ARIA helfen, die fehlenden Semantiken bereitzustellen.

### Formularüberprüfung und Fehlermeldungen

Schauen wir uns zunächst das Formularbeispiel noch einmal an, das wir zuerst in unserem Artikel zur CSS- und JavaScript-Barrierefreiheit behandelt haben (lesen Sie [Es unaufdringlich halten](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#keeping_it_unobtrusive), um das vollständige Recap zu erhalten). Am Ende dieses Abschnitts haben wir gezeigt, dass wir einige ARIA-Attribute auf dem Fehlermeldungsfenster hinzugefügt haben, das alle Überprüfungsfehler anzeigt, wenn Sie versuchen, das Formular abzuschicken:

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

- [`role="alert"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) verwandelt automatisch das Element, auf das es angewendet wird, in eine Live-Region, sodass Änderungen daran vorgelesen werden; es identifiziert es auch semantisch als eine Alarmnachricht (wichtige zeit-/kontextabhängige Informationen) und stellt eine bessere, barrierefreiere Möglichkeit dar, einem Benutzer einen Alarm zu senden (Modaldialoge wie [`alert()`](/de/docs/Web/API/Window/alert) Anrufe haben eine Reihe von Zugänglichkeitsproblemen; siehe [Popup-Fenster](https://webaim.org/techniques/javascript/other#popups) von WebAIM).
- Ein [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant) Wert von `all` weist den Bildschirmleser an, die Inhalte der Fehlermeldungsliste vorzulesen, wenn irgendeine Änderung daran vorgenommen wird — das heißt, wenn Fehler hinzugefügt oder entfernt werden. Dies ist nützlich, weil der Benutzer wissen möchte, welche Fehler übrig bleiben, nicht nur, was zur Liste hinzugefügt oder daraus entfernt wurde.

Wenn Sie ein Beispiel hören wollen, wie sich unsere ARIA-Anwendung weiterentwickeln könnte, wie wäre es, Benutzern zu helfen? Wie wäre es mit der Angabe, ob Felder erforderlich sind, oder welchen Bereich das Alter haben sollte?

1. An dieser Stelle nehmen Sie eine Kopie unserer Dateien [`form-validation.html`](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html) und [`validation.js`](https://github.com/mdn/learning-area/blob/main/accessibility/css/validation.js) und speichern Sie sie in einem lokalen Verzeichnis.
2. Öffnen Sie beide in einem Texteditor und sehen Sie sich an, wie der Code funktioniert.
3. Fügen Sie zunächst einen Absatz direkt über das öffnende `<form>`-Tag ein, wie den untenstehenden, und markieren Sie beide Formulare `<label>`s mit einem Sternchen. Dies ist normalerweise die Art und Weise, wie wir visuell erforderliche Felder für sehende Benutzer kennzeichnen.

   ```html
   <p>Fields marked with an asterisk (*) are required.</p>
   ```

4. Dies macht visuell Sinn, ist jedoch nicht so leicht verständlich für Benutzer von Bildschirmlesern. Glücklicherweise bietet WAI-ARIA das [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required) Attribut, um Bildschirmlesern Hinweise zu geben, dass Formulareingaben ausgefüllt werden müssen. Aktualisieren Sie die `<input>`-Elemente wie folgt:

   ```html
   <input type="text" name="name" id="name" aria-required="true" />

   <input type="number" name="age" id="age" aria-required="true" />
   ```

5. Wenn Sie das Beispiel jetzt speichern und mit einem Bildschirmleser testen, sollten Sie etwas hören, das in etwa "Geben Sie Ihren Namen ein Stern, erforderlich, Text bearbeiten" klingt.
6. Es könnte auch nützlich sein, wenn wir Bildschirmlesernutzern und sehenden Nutzern eine Vorstellung davon geben, welche der Alterswert sein sollte. Dies wird oft als Tooltip oder Platzhalter innerhalb des Formulareingabefelds präsentiert. WAI-ARIA ergänzt dazu Verwenden Sie die HTML `placeholder`-Eigenschaft, die eine Nachricht enthalten kann, die im Eingabefeld gezeigt wird, wenn kein Wert eingetragen ist, und von einigen Bildschirmlesern vorgelesen wird. Aktualisieren Sie Ihr Number-Input-Element folgendermaßen:

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

Schließen Sie immer ein {{HTMLelement('label')}} für jede Eingabe ein. Während einige Bildschirmleser den Platzhaltertext ansagen, tun es die meisten nicht. Akzeptable Ersetzungen zur Bereitstellung eines zugänglichen Namens für Formularelemente sind [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) und [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby). Aber das `<label>`-Element mit einem `for`-Attribut ist die bevorzugte Methode, da es für alle Benutzer, einschließlich Mausanwendern, die Gebrauchstauglichkeit erhöht.

> [!NOTE]
> Sie können das fertige Beispiel live ansehen unter [`form-validation-updated.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-updated.html).

WAI-ARIA ermöglicht auch einige fortschrittliche Formularbeschriftungstechniken, über das klassische {{htmlelement("label")}}-Element hinaus. Wir haben bereits darüber gesprochen, das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) Attribut zu verwenden, um eine Beschriftung bereitzustellen, wenn wir nicht möchten, dass die Beschriftung für sehende Benutzer sichtbar ist (siehe den Abschnitt [Wegweiser/Landmarken](#signpostslandmarks), oben). Einige andere Beschriftungstechniken verwenden andere Eigenschaften wie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn Sie ein nicht-`<label>`-Element als Beschriftung definieren oder mehrere Formulareingaben mit derselben Beschriftung versehen möchten, und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby), wenn Sie andere Informationen mit einer Formulareingabe verknüpfen und ebenfalls vorgelesen haben möchten. Weitere Einzelheiten finden Sie im [Artikel zur fortgeschrittenen Formularbeschriftung von WebAIM](https://webaim.org/techniques/forms/advanced).

Es gibt viele andere nützliche Eigenschaften und Zustände, um den Status von Formularelementen anzuzeigen. Zum Beispiel kann `aria-disabled="true"` verwendet werden, um anzugeben, dass ein Formularelement deaktiviert ist. Viele Browser überspringen deaktivierte Formularelemente, was dazu führt, dass sie nicht von Bildschirmlesern vorgelesen werden. In einigen Fällen wird ein deaktiviertes Element wahrgenommen, daher ist es eine gute Idee, dieses Attribut einzuschließen, um dem Bildschirmleser mitzuteilen, dass ein deaktiviertes Formularelement tatsächlich deaktiviert ist.

Wenn sich der deaktivierte Zustand eines Eingabefelds voraussichtlich ändert, ist es auch eine gute Idee, den Zeitpunkt und das Ergebnis anzugeben. Im Beispiel [`form-validation-checkbox-disabled.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-checkbox-disabled.html) haben wir ein Kontrollkästchen, das bei Aktivierung ein weiteres Formulareingabefeld aktiviert, um zusätzliche Informationen einzugeben. Wir haben eine versteckte Live-Region eingerichtet:

```html
<p class="hidden-alert" aria-live="assertive"></p>
```

die aus der Anzeige über absolute Positionierung entfernt wurde. Wenn dies aktiviert oder deaktiviert ist, aktualisieren wir den Text in der versteckten Live-Region, um den Benutzern von Bildschirmlesern mitzuteilen, was das Ergebnis der Aktivierung dieser Checkbox ist, sowie den `aria-disabled`-Zustand und einige visuelle Indikatoren:

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

Einige Male in diesem Kurs haben wir bereits die native Zugänglichkeit von (und die Barrierefreiheitsprobleme hinter der Verwendung anderer Elemente, um) Schaltflächen, Links oder Formularelemente zu fälschen, erwähnt (sehen Sie [Verwenden Sie semantische UI-Steuerelemente, wo möglich](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible) im HTML-Barrialitätsartikel und [Verbessern der Tastaturzugänglichkeit](#verbesserung_der_tastaturzugänglichkeit), oben). Im Wesentlichen können Sie die Tastaturzugänglichkeit in vielen Fällen ohne allzu große Schwierigkeiten wieder hinzufügen, indem Sie `tabindex` und ein wenig JavaScript verwenden.

Was ist jedoch mit Bildschirmlesern? Sie würden die Elemente noch nicht als Schaltflächen sehen. Wenn wir unser Beispiel [`fake-div-buttons.html`](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) in einem Bildschirmleser testen, werden unsere gefälschten Schaltflächen mit Phrasen wie "Klick mich!, Gruppe" gemeldet, was offensichtlich verwirrend ist.

Wir können dies mit einer WAI-ARIA-Rolle beheben. Machen Sie eine lokale Kopie von [`fake-div-buttons.html`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html), und fügen Sie jedem Schaltflächen-`<div>` [`role="button"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) hinzu, zum Beispiel:

```html
<div data-message="This is from the first button" tabindex="0" role="button">
  Click me!
</div>
```

Jetzt werden Sie, wenn Sie dies in einem Bildschirmleser testen, die Schaltflächen mit Phrasen wie "Klick mich!, Schaltfläche" als Schaltflächen registrieren. Während dies viel besser ist, müssen Sie weiterhin alle nativen Schaltflächenfunktionen hinzufügen, die Benutzer erwarten, wie die Verarbeitung von <kbd>Enter</kbd> und Klickereignissen, wie im [`button`-Rollendokument](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) erklärt.

> [!NOTE]
> Vergessen Sie jedoch nicht, dass es immer besser ist, das richtige semantische Element zu verwenden, wo möglich. Wenn Sie eine Schaltfläche erstellen wollen und ein {{htmlelement("button")}}-Element verwenden können, sollten Sie ein {{htmlelement("button")}}-Element verwenden!

### Benutzer durch komplexe Widgets führen

Es gibt eine ganze Reihe anderer [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles), die nicht-semantische Elementstrukturen als häufige UI-Funktionen identifizieren können, die über das hinausgehen, was in Standard-HTML verfügbar ist, zum Beispiel [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role), [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role). Mehrere nützliche Beispiele finden Sie in der [Deque University Code-Bibliothek](https://dequeuniversity.com/library/), die Ihnen eine Vorstellung davon vermitteln, wie solche Steuerungen barrierefrei gemacht werden können.

In unserer Dokumentation über [WAI-ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles) finden Sie auch mehrere Live-Beispiele. Siehe zum Beispiel unser [ARIA: Tab-Rollen-Beispiel](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role#example), das erklärt, wie man eine zugängliche Registerkartenoberfläche implementiert.

## Zusammenfassung

Dieser Artikel hat bei weitem nicht alles abgedeckt, was in WAI-ARIA verfügbar ist, sollte Ihnen jedoch genug Informationen gegeben haben, um zu verstehen, wie Sie es verwenden, und einige der häufigsten Muster kennen, bei denen Sie darauf stoßen könnten.

Im nächsten Artikel geben wir Ihnen einige Tests, die Sie verwenden können, um zu überprüfen, wie gut Sie all diese Informationen verstanden und behalten haben.

## Siehe auch

- [Aria-Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes): Alle `aria-*` Attribute
- [WAI-ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles): Kategorien von ARIA-Rollen und die auf MDN behandelten Rollen
- [ARIA in HTML](https://w3c.github.io/html-aria/) auf W3C: Eine Spezifikation, die für jedes HTML-Merkmal die Barrierefreiheitssemantik (ARIA) definiert, die vom Browser implizit darauf angewendet wird, und die WAI-ARIA-Merkmale, die Sie darauf setzen können, wenn zusätzliche Semantiken erforderlich sind
- [Deque University Code Library](https://dequeuniversity.com/library/): Eine Bibliothek wirklich nützlicher und praktischer Beispiele, die komplexe UI-Steuerelemente zeigen, die mithilfe von WAI-ARIA-Funktionen barrierefrei gemacht wurden
- [WAI-ARIA Autorenrichtlinien](https://www.w3.org/WAI/ARIA/apg/) auf W3C: Ein sehr detailliertes Designmuster der W3C, das erklärt, wie man verschiedene Arten von komplexen UI-Steuerelementen implementiert, während man sie mit WAI-ARIA-Funktionen barrierefrei macht

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA", "Learn_web_development/Core/Accessibility")}}
