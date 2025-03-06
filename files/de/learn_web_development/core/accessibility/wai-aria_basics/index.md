---
title: Grundlagen von WAI-ARIA
slug: Learn_web_development/Core/Accessibility/WAI-ARIA_basics
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility")}}

In Fortsetzung des vorherigen Artikels kann es manchmal schwierig sein, komplexe UI-Steuerelemente zu erstellen, die unsemantisches HTML beinhalten und deren Inhalte dynamisch mit JavaScript aktualisiert werden. WAI-ARIA ist eine Technologie, die bei solchen Problemen helfen kann, indem sie zusätzliche Semantiken hinzufügt, die von Browsern und Unterstützungstechnologien erkannt und genutzt werden können, um Benutzer über den aktuellen Zustand zu informieren. Hier zeigen wir, wie man es auf grundlegender Ebene verwendet, um die Barrierefreiheit zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und den in den vorherigen Lektionen des Moduls vermittelten Best Practices zur Barrierefreiheit.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von WAI-ARIA — um semantische Informationen zu ansonsten nicht semantischem HTML hinzuzufügen, sodass AT-Benutzer die ihnen präsentierten Schnittstellen verstehen können.</li>
          <li>Die grundlegende Syntax — Rollen, Eigenschaften und Zustände.</li>
          <li>Markierungen und Wegweiser.</li>
          <li>Verbesserung der Tastaturzugänglichkeit.</li>
          <li>Bekanntgabe dynamischer Inhaltsaktualisierungen mit Live-Bereichen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist WAI-ARIA?

Beginnen wir mit einem Blick darauf, was WAI-ARIA ist und was es für uns tun kann.

### Eine ganz neue Reihe von Problemen

Als Web-Apps komplexer und dynamischer wurden, tauchten neue Funktionen und Probleme in Bezug auf Barrierefreiheit auf.

HTML führte zum Beispiel eine Reihe von semantischen Elementen ein, um gängige Seitenfunktionen zu definieren ({{htmlelement("nav")}}, {{htmlelement("footer")}}, usw.). Bevor diese verfügbar wurden, verwendeten Entwickler {{htmlelement("div")}}s mit IDs oder Klassen, z. B. `<div class="nav">`, aber diese waren problematisch, da es keine einfache Möglichkeit gab, ein bestimmtes Seitenmerkmal wie die Hauptnavigation programmgesteuert einfach zu finden.

Die anfängliche Lösung bestand darin, ein oder mehrere versteckte Links oben auf der Seite hinzuzufügen, um zur Navigation (oder etwas anderem) zu verweisen, zum Beispiel:

```html
<a href="#hidden" class="hidden">Skip to navigation</a>
```

Aber das ist immer noch nicht sehr präzise und kann nur verwendet werden, wenn der Screenreader von oben auf der Seite liest.

Ein weiteres Beispiel: Apps begannen mit komplexen Bedienelementen wie Datumsauswahlern zur Auswahl von Daten, Schiebereglern zur Auswahl von Werten usw. HTML bietet spezielle Eingabetypen, um solche Bedienelemente darzustellen:

```html
<input type="date" /> <input type="range" />
```

Diese wurden ursprünglich nicht gut unterstützt und es war, und ist immer noch, schwierig, sie zu stylen, was dazu führte, dass Designer und Entwickler sich für benutzerdefinierte Lösungen entschieden. Anstatt diese nativen Funktionen zu verwenden, verlassen sich einige Entwickler auf JavaScript-Bibliotheken, die solche Bedienelemente als eine Reihe von verschachtelten {{htmlelement("div")}}-Elementen generieren, die dann mit CSS gestylt und mit JavaScript gesteuert werden.

Das Problem dabei ist, dass sie visuell funktionieren, aber Screenreader können überhaupt nicht verstehen, was sie sind, und ihre Benutzer erfahren nur, dass sie ein Durcheinander von Elementen ohne Semantik sehen, die beschreiben, was sie bedeuten.

### Einführung von WAI-ARIA

[WAI-ARIA](https://www.w3.org/TR/wai-aria/) (Web Accessibility Initiative - Accessible Rich Internet Applications) ist eine Spezifikation, die vom W3C erstellt wurde. Sie definiert eine Reihe zusätzlicher HTML-Attribute, die auf Elemente angewendet werden können, um zusätzliche Semantiken bereitzustellen und die Barrierefreiheit dort zu verbessern, wo sie fehlt. In der Spezifikation sind drei Hauptfeatures definiert:

- [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Diese definieren, was ein Element ist oder tut. Viele davon sind sogenannte Landmark-Rollen, die weitgehend den semantischen Wert von Strukturelementen duplizieren, wie `role="navigation"` ({{htmlelement("nav")}}), `role="banner"` (Dokumentheader {{htmlelement("header")}}), `role="complementary"` ({{htmlelement("aside")}}) oder `role="search"` ({{htmlelement("search")}}). Einige andere Rollen beschreiben verschiedene Seitenstrukturen, die keine Elemente haben, die diesen Rollen entsprechen, wie `role="tablist"` und `role="tabpanel"`, die häufig in UIs zu finden sind.
- Eigenschaften
  - : Diese definieren Eigenschaften von Elementen, durch die ihnen zusätzliche Bedeutung oder Semantiken verliehen werden können. So spezifiziert `aria-required="true"` beispielsweise, dass eine Formulareingabe ausgefüllt sein muss, um gültig zu sein, während `aria-labelledby="label"` es Ihnen ermöglicht, eine ID auf ein Element zu setzen, um dann als Beschriftung für alles andere auf der Seite, einschließlich mehrerer Elemente, darauf zu verweisen, was mit `<label for="input">` nicht möglich ist. Sie könnten zum Beispiel `aria-labelledby` verwenden, um anzugeben, dass eine Schlüsselbeschreibung in einem {{htmlelement("div")}} die Beschriftung für mehrere Tabellenzellen ist, oder es als Alternative zum `alt`-Text eines Bildes verwenden — vorhandene Informationen auf der Seite als `alt`-Text eines Bildes angeben, anstatt dies innerhalb des `alt`-Attributs zu wiederholen. Sie können ein Beispiel dafür unter [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) sehen.
- Zustände
  - : Spezielle Eigenschaften, die die aktuellen Bedingungen von Elementen definieren, wie `aria-disabled="true"`, was einem Screenreader mitteilt, dass eine Formulareingabe derzeit deaktiviert ist. Zustände unterscheiden sich von Eigenschaften darin, dass sich Eigenschaften nicht während des Lebenszyklus einer App ändern, während Zustände sich ändern können, im Allgemeinen programmatisch über JavaScript.

Ein wichtiger Punkt zu WAI-ARIA-Attributen ist, dass sie nichts an der Webseite ändern, außer die Informationen zu beeinflussen, die von den Zugänglichkeits-APIs des Browsers bereitgestellt werden (woher Screenreader ihre Informationen beziehen). WAI-ARIA beeinflusst nicht die Struktur der Webseite, das DOM usw., obwohl die Attribute nützlich sein können, um Elemente mit CSS auszuwählen.

> [!NOTE]
> Sie finden eine nützliche Liste aller ARIA-Rollen und ihrer Verwendungen mit Links zu weiteren Informationen in der WAI-ARIA-Spezifikation — siehe [Definition of Roles](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) — auf dieser Seite — siehe [ARIA roles](/de/docs/Web/Accessibility/ARIA/Reference/Roles).
>
> Die Spezifikation enthält auch eine Liste aller Eigenschaften und Zustände mit Links zu weiteren Informationen — siehe [Definitions of States and Properties (alle `aria-*` Attribute)](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def).

### Wo wird WAI-ARIA unterstützt?

Das ist keine einfache Frage zu beantworten. Es ist schwierig, eine abschließende Ressource zu finden, die angibt, welche Funktionen von WAI-ARIA unterstützt werden und wo, weil:

1. Es gibt viele Funktionen in der WAI-ARIA-Spezifikation.
2. Es gibt viele Kombinationen von Betriebssystemen, Browsern und Screenreadern, die berücksichtigt werden müssen.

Dieser letzte Punkt ist entscheidend — um einen Screenreader überhaupt verwenden zu können, muss Ihr Betriebssystem Browser ausführen, die die erforderlichen Zugänglichkeits-APIs bereitstellen, um die Informationen preiszugeben, die Screenreader benötigen, um ihre Arbeit zu erledigen. Die meisten gängigen Betriebssysteme haben ein oder zwei Browser, mit denen Screenreader arbeiten können. Die Paciello Group hat einen ziemlich aktuellen Beitrag, der Daten dazu liefert — siehe [Rough Guide: browsers, operating systems and screen reader support updated](https://www.tpgi.com/rough-guide-browsers-operating-systems-and-screen-reader-support-updated/).

Als nächstes müssen Sie sich Sorgen machen, ob die betreffenden Browser ARIA-Funktionen unterstützen und diese über ihre APIs preisgeben, aber auch ob Screenreader diese Informationen erkennen und ihren Benutzern auf nützliche Weise präsentieren.

1. Die Unterstützung von Browsern ist nahezu universell.
2. Die Unterstützung von ARIA-Funktionen durch Screenreader ist noch nicht ganz auf diesem Niveau, aber die beliebtesten Screenreader nähern sich an. Sie können sich ein Bild von den Unterstützungsstufen machen, indem Sie sich den Artikel [WAI-ARIA Screen reader compatibility](https://www.powermapper.com/tests/screen-readers/aria/) von Powermapper anschauen.

In diesem Artikel werden wir nicht versuchen, jede WAI-ARIA-Funktion und ihre genauen Unterstützungsdetails zu behandeln. Stattdessen werden wir die kritischsten WAI-ARIA-Funktionen behandeln, über die Sie Bescheid wissen sollten. Wenn wir keine Unterstützungsdetails erwähnen, können Sie davon ausgehen, dass die Funktion gut unterstützt wird. Wir werden deutlich auf alle Ausnahmen hinweisen.

> [!NOTE]
> Einige JavaScript-Bibliotheken unterstützen WAI-ARIA, was bedeutet, dass sie beim Generieren von UI-Features wie komplexen Formularelementen ARIA-Attribute hinzufügen, um die Zugänglichkeit dieser Features zu verbessern. Wenn Sie nach einer JavaScript-Lösung eines Drittanbieters für die schnelle UI-Entwicklung suchen, sollten Sie die Zugänglichkeit seiner UI-Widgets als wichtigen Faktor bei Ihrer Wahl berücksichtigen. Gute Beispiele sind jQuery UI (siehe [About jQuery UI: Deep accessibility support](https://jqueryui.com/about/#deep-accessibility-support)), [ExtJS](https://www.sencha.com/products/extjs/) und [Dojo/Dijit](https://dojotoolkit.org/reference-guide/1.10/dijit/a11y/statement.html).

### Wann sollten Sie WAI-ARIA verwenden?

Wir haben einige der Probleme angesprochen, die zur Schaffung von WAI-ARIA geführt haben, aber im Wesentlichen gibt es vier Hauptbereiche, in denen WAI-ARIA nützlich ist:

- Wegweiser/Landmarken
  - : ARIAs [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) Attributwerte können als Landmarken fungieren, die entweder die Semantik von HTML-Elementen (z. B. {{htmlelement("nav")}}) replizieren oder über die HTML-Semantik hinausgehen, um auf verschiedene funktionale Bereiche hinzuweisen, wie `search`, `tablist`, `tab`, `listbox` usw.
- Dynamische Inhaltsaktualisierungen
  - : Screenreader haben Schwierigkeiten damit, ständig wechselnde Inhalte zu melden; mit ARIA können wir `aria-live` verwenden, um den Screenreader-Benutzern mitzuteilen, wann ein Inhaltsbereich dynamisch aktualisiert wird: zum Beispiel durch JavaScript auf der Seite, das neue Inhalte vom Server abruft und das DOM aktualisiert [fetching new content from the server and updating the DOM](/de/docs/Learn_web_development/Core/Scripting/Network_requests).
- Verbesserung der Tastaturzugänglichkeit
  - : Es gibt eingebaute HTML-Elemente mit natürlicher Tastaturzugänglichkeit; wenn andere Elemente zusammen mit JavaScript verwendet werden, um ähnliche Interaktionen zu simulieren, leiden Tastaturzugänglichkeit und Screenreader-Berichterstattung darunter. Wo dies unvermeidbar ist, bietet WAI-ARIA eine Möglichkeit, anderen Elementen den Fokus zu geben (durch die Verwendung von `tabindex`).
- Zugänglichkeit von nicht-semantischen Steuerelementen
  - : Wenn eine Reihe von verschachtelten `<div>`s zusammen mit CSS/JavaScript verwendet wird, um ein komplexes UI-Feature zu erstellen, oder ein natives Element stark verbessert/über JavaScript geändert wird, kann die Zugänglichkeit leiden — Screenreader-Benutzer werden Schwierigkeiten haben zu erkennen, was das Feature macht, wenn keine Semantiken oder andere Hinweise vorhanden sind. In solchen Situationen kann ARIA helfen, das Fehlende mit einer Kombination aus Rollen wie `button`, `listbox` oder `tablist` und Eigenschaften wie `aria-required` oder `aria-posinset` bereitzustellen, um weitere Hinweise auf die Funktionalität zu geben.

#### Sie sollten WAI-ARIA nur verwenden, wenn Sie es benötigen!

Die Verwendung der richtigen HTML-Elemente gibt Ihnen implizit die benötigten Rollen, und Sie sollten _immer_ [native HTML Features](/de/docs/Learn_web_development/Core/Accessibility/HTML) verwenden, um die Semantik bereitzustellen, die Screenreader benötigen, um ihren Benutzern mitzuteilen, was los ist. Manchmal ist dies nicht möglich, entweder weil Sie nur begrenzte Kontrolle über den Code haben oder weil Sie etwas Komplexes erstellen, das kein einfaches HTML-Element zur Implementierung hat. In solchen Fällen kann WAI-ARIA ein wertvolles Werkzeug zur Verbesserung der Barrierefreiheit sein.

Aber nochmals, verwenden Sie es nur wenn nötig!

> [!NOTE]
> Versuchen Sie außerdem, sicherzustellen, dass Sie Ihre Website mit einer Vielzahl von _echten_ Benutzern testen — nicht-behinderte Personen, Personen, die Screenreader verwenden, Personen, die die Tastatur zur Navigation nutzen usw. Sie werden bessere Einblicke darüber haben, wie gut es funktioniert.

## Praktische Implementierungen von WAI-ARIA

Im nächsten Abschnitt werden wir uns die vier Bereiche im Detail ansehen, zusammen mit praktischen Beispielen. Bevor Sie fortfahren, sollten Sie ein Screenreader-Testsystem einrichten, damit Sie während der Durcharbeitung einige der Beispiele testen können.

Weitere Informationen finden Sie in unserem Abschnitt über [Testing von Screenreadern](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers).

### Wegweiser/Landmarken

WAI-ARIA fügt den Browsern das [`role`-Attribut](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) hinzu, mit dem Sie überall dort, wo es notwendig ist, zusätzlichen semantischen Wert zu Elementen auf Ihrer Website hinzufügen können. Der erste wichtige Bereich, in dem dies nützlich ist, ist es, Screenreadern Informationen bereitzustellen, damit ihre Benutzer gängige Seitenelemente finden können. Dieses Beispiel hat die folgende Struktur:

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

Wenn Sie das Beispiel mit einem Screenreader in einem modernen Browser testen, erhalten Sie bereits einige nützliche Informationen. Zum Beispiel bietet Ihnen VoiceOver die folgenden Informationen:

- Beim `<header>`-Element — "banner, 2 Gegenstände" (es enthält eine Überschrift und das `<nav>`).
- Beim `<nav>`-Element — "navigation 2 Gegenstände" (es enthält eine Liste und ein Formular).
- Beim `<main>`-Element — "hauptbereich 2 Gegenstände" (es enthält einen Artikel und ein Aside).
- Beim `<aside>`-Element — "ergänzend 2 Gegenstände" (es enthält eine Überschrift und eine Liste).
- Beim Suchformulareingabefeld — "Suchanfrage, Einfügemarke am Anfang des Textes".
- Beim `<footer>`-Element — "footer 1 Gegenstand".

Wenn Sie zum Landmarks-Menü von VoiceOver wechseln (erreichbar mit VoiceOver Taste + U und dann mit den Cursortasten durch die Menüauswahl navigieren), sehen Sie, dass die meisten der Elemente schön aufgelistet sind, sodass sie schnell zugänglich sind.

![Macs VoiceOver-Menü für schnelle Zugänglichkeit. Kopfzeile der Wegpunkte und Wegpunktliste einschließlich Banner, Navigation, Hauptteil und Ergänzung.](landmarks-list.png)

Wir könnten hier jedoch besser werden. Das Suchformular ist eine wirklich wichtige Landmarke, die Menschen finden möchten, aber es ist weder im Landmarks-Menü aufgeführt noch als bemerkenswerte Landmarke behandelt, über das tatsächliche Eingabefeld hinaus, das als Sucheingabe aufgerufen wird (`<input type="search">`).

Wir könnten es durch die Verwendung der ARIA-`role="search"` verbessern, aber die Verwendung des {{HTMLelement("search")}}-Elements gibt dem Formular implizit diese Rolle.

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

Am wichtigsten ist, dass wir semantisches HTML verwendet haben, das Bedeutung und Rollen ohne das Hinzufügen unnötiger [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)-Attribute zu unserer HTML-Struktur verleiht, die eine Struktur wie diese aufweist:

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

Wir haben Ihnen in diesem Beispiel auch ein Bonus-Feature gegeben — dem {{htmlelement("input")}}-Element wurde das Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) hinzugefügt, das ihm eine beschreibende Beschriftung gibt, die von einem Screenreader vorgelesen wird, auch wenn wir kein {{htmlelement("label")}}-Element hinzugefügt haben. In solch einem Fall ist dies sehr nützlich — ein Suchformular wie dieses ist ein sehr häufiges, leicht erkennbares Merkmal, und das Hinzufügen eines visuellen Labels würde das Seitendesign stören.

```html
<input
  type="search"
  name="q"
  placeholder="Search query"
  aria-label="Search through site content" />
```

Wenn wir jetzt VoiceOver verwenden, um sich dieses Beispiel anzusehen, erhalten wir einige Verbesserungen:

- Das Suchformular wird sowohl beim Durchsuchen der Seite als auch im Landmarks-Menü als separates Element aufgerufen.
- Der in dem `aria-label`-Attribut enthaltene Beschriftungstext wird vorgelesen, wenn die Formulareingabe hervorgehoben wird.

Wenn Sie ältere Browser wie IE8 unterstützen müssen, ist es lohnenswert, ARIA-Rollen zu diesem Zweck einzuschließen. Und wenn Ihre Seite aus irgendeinem Grund nur aus `<div>`s besteht, sollten Sie auf jeden Fall die ARIA-Rollen einbeziehen, um diese dringend benötigten Semantiken bereitzustellen!

Sie werden weiter unten noch viel mehr über diese Semantiken und die Macht der ARIA-Eigenschaften/Attribute sehen, insbesondere im Abschnitt [Zugänglichkeit von nicht-semantischen Steuerelementen](#zugänglichkeit_von_nicht-semantischen_steuerelementen). Für den Moment schauen wir uns aber erst einmal an, wie ARIA bei dynamischen Inhaltsaktualisierungen helfen kann.

### Dynamische Inhaltsaktualisierungen

Mit dem DOM geladene Inhalte können mit einem Screenreader leicht zugänglich gemacht werden, von Textinhalten bis zu Alternativtexten für Bilder. Traditionelle statische Webseiten mit überwiegend textuellen Inhalten sind daher für Personen mit Sehbehinderungen leicht zugänglich zu machen.

Das Problem ist, dass moderne Web-Apps oft nicht nur aus statischem Text bestehen – sie aktualisieren oft Teile der Seite, indem sie neue Inhalte vom Server abrufen (in diesem Beispiel verwenden wir ein statisches Array von Zitaten) und das DOM aktualisieren. Diese werden manchmal als **Live-Bereiche** bezeichnet.

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

Dies funktioniert recht gut, ist aber nicht gut für die Barrierefreiheit — die Inhaltsaktualisierung wird von Screenreadern nicht erkannt, sodass ihre Benutzer nicht wissen würden, was passiert. Dies ist ein ziemlich triviales Beispiel, aber stellen Sie sich vor, Sie würden eine komplexe UI mit vielen ständig aktualisierten Inhalten erstellen, wie einen Chatraum, ein Strategie-Spiel-UI oder eine Live-aktualisierte Warenkorbanzeige — es wäre unmöglich, die App in irgendeiner effektiven Weise zu nutzen, ohne irgendeine Art von Möglichkeit, den Benutzer zu den Updates zu benachrichtigen.

WAI-ARIA bietet zum Glück einen nützlichen Mechanismus, um diese Benachrichtigungen bereitzustellen — die [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) Eigenschaft. Sie auf ein Element anzuwenden, veranlasst Screenreader, den aktualisierten Inhalt vorzulesen. Wie dringend der Inhalt vorgelesen wird, hängt vom Attributwert ab:

- `off`
  - : Der Standardwert. Updates sollten nicht angesagt werden.
- `polite`
  - : Updates sollten nur angesagt werden, wenn der Benutzer untätig ist.
- `assertive`
  - : Updates sollten dem Benutzer so schnell wie möglich angekündigt werden.

Hier aktualisieren wir das `<section>`-Eröffnungs-Tag wie folgt:

```html
<section aria-live="assertive">…</section>
```

Dies wird einen Screenreader veranlassen, den Inhalt vorzulesen, während er aktualisiert wird.

Hier ist eine zusätzliche Überlegung — nur das Textstück, das aktualisiert wird, wird vorgelesen. Es könnte schön sein, wenn wir immer auch die Überschrift vorlesen, damit der Benutzer sich daran erinnern kann, was vorgelesen wird. Um dies zu tun, können wir die [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)-Eigenschaft auf die Sektion anwenden. Aktualisieren Sie Ihr `<section>`-Eröffnungs-Tag erneut, wie folgt:

```html
<section aria-live="assertive" aria-atomic="true">…</section>
```

Das `aria-atomic="true"`-Attribut weist Screenreader an, den gesamten Inhalt des Elements als eine atomare Einheit vorzulesen, nicht nur die aktualisierten Teile.

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
> Die [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)-Eigenschaft ist auch ziemlich nützlich, um zu steuern, was vorgelesen wird, wenn eine Live-Region aktualisiert wird. Sie können beispielsweise nur neue oder entfernte Inhalte vorgelesen bekommen.

### Verbesserung der Tastaturzugänglichkeit

Wie an einigen anderen Stellen im Modul besprochen, ist eine der wichtigsten Stärken von HTML in Bezug auf die Barrierefreiheit die eingebaute Tastaturzugänglichkeit von Funktionen wie Tasten, Formularelementen und Links. Im Allgemeinen können Sie die Tab-Taste verwenden, um zwischen den Steuerelementen zu wechseln, die Eingabe-/Eingabetaste, um Steuerelemente auszuwählen oder zu aktivieren, und gelegentlich andere Steuerelemente nach Bedarf (zum Beispiel die Auf- und Abwärtspfeiltasten, um zwischen den Optionen in einem `<select>`-Kasten zu wechseln).

Manchmal müssen Sie jedoch Code schreiben, der nicht-semantische Elemente als Schaltflächen (oder andere Arten von Steuerelementen) verwendet oder fokussierbare Steuerelemente für nicht ganz den richtigen Zweck. Möglicherweise versuchen Sie, schlechten Code zu reparieren, den Sie geerbt haben, oder Sie erstellen einen komplexen Widget, das dies erfordert.

In Bezug auf das Fokussieren von nicht-fokussierbarem Code erweitert WAI-ARIA das `tabindex`-Attribut mit einigen neuen Werten:

- `tabindex="0"` — wie oben angegeben, ermöglicht dieser Wert Elementen, die normalerweise nicht fokussierbar sind, fokussierbar zu werden. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — dies ermöglicht Elementen, die normalerweise nicht fokussierbar sind, den Fokus programmatisch zu erhalten, z. B. über JavaScript oder als Ziel von Links.

Wir haben dies ausführlicher besprochen und eine typische Implementierung in unserem Artikel zur Barrierefreiheit von HTML gezeigt — siehe [Wiederherstellung der Tastaturzugänglichkeit](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in).

### Zugänglichkeit von nicht-semantischen Steuerelementen

Dies knüpft an den vorherigen Abschnitt an — wenn eine Reihe von verschachtelten `<div>`s zusammen mit CSS/JavaScript verwendet wird, um ein komplexes UI-Feature zu erstellen, oder ein nativer Steuerelement über JavaScript stark verbessert/geändert wird, kann nicht nur die Tastaturzugänglichkeit leiden, sondern auch Screenreader-Benutzer werden Schwierigkeiten haben herauszufinden, was das Feature tut, wenn keine Semantiken oder andere Hinweise vorliegen. In solchen Situationen kann ARIA helfen, diese fehlenden Semantiken bereitzustellen.

#### Formularvalidierung und Fehlerhinweise

Zuerst schauen wir uns das Formularbeispiel erneut an, das wir in unserem Artikel zur Barrierefreiheit von CSS und JavaScript behandelt haben (lesen Sie [Halte es unaufdringlich](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#keeping_it_unobtrusive) für eine vollständige Wiederholung). Am Ende dieses Abschnitts haben wir gezeigt, dass wir einige ARIA-Attribute auf der Fehlernachricht-Box verwendet haben, die bei der Überprüfung des Formulars ausgegebene Fehler anzeigt:

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

- [`role="alert"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) macht das Element, auf das es angewendet wird, automatisch zu einer Live-Region, sodass Änderungen daran vorgelesen werden; es identifiziert es auch semantisch als eine Warnmeldung (wichtige zeit-/kontextabhängige Informationen) und stellt eine bessere, zugänglichere Möglichkeit dar, einem Benutzer einen Hinweis zu gebenD (modale Dialoge wie [`alert()`](/de/docs/Web/API/Window/alert) Aufrufe haben eine Reihe von Zugänglichkeitsproblemen; siehe [Popup Windows](https://webaim.org/techniques/javascript/other#popups) von WebAIM).
- Ein [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)-Wert von `all` weist den Screenreader an, den Inhalt der Fehlerliste vorzulesen, wenn Änderungen daran vorgenommen werden — d. h., wenn Fehler hinzugefügt oder entfernt werden. Dies ist nützlich, da der Benutzer wissen möchte, welche Fehler noch vorhanden sind, und nicht nur, was der Liste hinzugefügt oder entfernt wurde.

Wir könnten mit unserer ARIA-Nutzung noch weiter gehen und mehr Hilfe bei der Validierung bieten. Wie wäre es, wenn wir anzeigen, ob Felder von vornherein erforderlich sind und welchen Bereich das Alter haben sollte?

1. Nehmen Sie sich an diesem Punkt eine Kopie unserer [`form-validation.html`](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html)- und [`validation.js`](https://github.com/mdn/learning-area/blob/main/accessibility/css/validation.js)-Dateien, und speichern Sie sie in einem lokalen Verzeichnis.
2. Öffnen Sie beide in einem Texteditor und schauen Sie, wie der Code funktioniert.
3. Fügen Sie zunächst einen Absatz direkt über dem öffnenden `<form>`-Tag hinzu, wie den unten stehenden, und markieren Sie beide Formular-`<label>`s mit einem Sternchen. So markieren wir normalerweise erforderliche Felder für sehende Benutzer.

   ```html
   <p>Fields marked with an asterisk (*) are required.</p>
   ```

4. Dies macht visuell Sinn, ist aber für Screenreader-Benutzer nicht so einfach zu verstehen. Zum Glück bietet WAI-ARIA das [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)-Attribut, um Screenreadern Hinweise zu geben, dass sie den Benutzern sagen sollen, dass Formulareingaben ausgefüllt werden müssen. Aktualisieren Sie die `<input>`-Elemente wie folgt:

   ```html
   <input type="text" name="name" id="name" aria-required="true" />

   <input type="number" name="age" id="age" aria-required="true" />
   ```

5. Wenn Sie das Beispiel jetzt speichern und mit einem Screenreader testen, sollten Sie etwas hören wie "Geben Sie Ihren Namen ein Stern, erforderlich, bearbeitbarer Text".
6. Es könnte auch nützlich sein, wenn wir Screenreader-Benutzern und sichtbaren Benutzern eine Vorstellung davon geben, welchen Wert das Alter haben sollte. Dies wird oft als Tooltipp oder Platzhalter innerhalb des Formularfeldes präsentiert. WAI-ARIA umfasst die Eigenschaften [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax), um Minimal- und Maximalwerte zu spezifizieren, und Screenreader unterstützen die nativen `min`- und `max`-Attribute. Ein weiteres gut unterstütztes Feature ist das HTML-`placeholder`-Attribut, das eine Nachricht enthalten kann, die im Eingabefeld angezeigt wird, wenn kein Wert eingegeben wird und von einigen Screenreadern vorgelesen wird. Aktualisieren Sie Ihren Zahleneingabe folgendermaßen:

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

Verwenden Sie immer ein {{HTMLelement('label')}} für jede Eingabe. Während einige Screenreader den Platzhaltertext ankündigen, tun dies die meisten nicht. Akzeptable Alternativen, um Formularelemente mit einem zugänglichen Namen zu versehen, sind [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) und [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby). Aber das `<label>`-Element mit einem `for`-Attribut ist die bevorzugte Methode, da es die Benutzerfreundlichkeit für alle Benutzer, einschließlich Mausanwender, verbessert.

> [!NOTE]
> Sie können das fertige Beispiel live unter [`form-validation-updated.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-updated.html) sehen.

WAI-ARIA ermöglicht auch einige erweiterte Techniken zur Formularkennzeichnung, jenseits der klassischen {{htmlelement("label")}}-Elemente. Wir haben bereits das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut behandelt, um eine Beschriftung bereitzustellen, wo wir die Beschriftung nicht für sehende Benutzer sichtbar machen möchten (siehe den Abschnitt [Wegweiser/Landmarken](#signpostslandmarks) oben). Einige andere Kennzeichnungstechniken verwenden andere Eigenschaften wie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn Sie ein nicht-`<label>`-Element als Beschriftung festlegen oder mehrere Formulareingaben mit derselben Beschriftung versehen möchten, und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby), wenn Sie andere Informationen mit einer Formulareingabe verknüpfen und diese ebenfalls vorlesen lassen möchten. Weitere Einzelheiten finden Sie im Artikel [Advanced Form Labeling](https://webaim.org/techniques/forms/advanced) von WebAIM.

Es gibt auch viele andere nützliche Eigenschaften und Zustände, um den Status von Formularelementen anzuzeigen. Zum Beispiel kann `aria-disabled="true"` verwendet werden, um anzuzeigen, dass ein Formularelement deaktiviert ist. Viele Browser überspringen deaktivierte Formularelemente, was dazu führt, dass sie von Screenreadern nicht vorgelesen werden. In einigen Fällen wird ein deaktiviertes Element wahrgenommen, daher ist es eine gute Idee, dieses Attribut hinzuzufügen, um dem Screenreader mitzuteilen, dass ein deaktiviertes Formularelement tatsächlich deaktiviert ist.

Wenn der deaktivierte Zustand einer Eingabe wahrscheinlich geändert wird, ist es ebenfalls eine gute Idee, darauf hinzuweisen, wann dies geschieht und was das Ergebnis ist. Zum Beispiel gibt es in unserem [`form-validation-checkbox-disabled.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-checkbox-disabled.html)-Demo ein Kontrollkästchen, das beim Aktivieren eine weitere Formulareingabe ermöglicht, um weitere Informationen einzugeben. Wir haben einen versteckten Live-Bereich eingerichtet:

```html
<p class="hidden-alert" aria-live="assertive"></p>
```

Der gebräuchlichste Weg, um ein solches Element in HTML zu verstecken, besteht darin, es mittels absoluter Positionierung aus dem Blickfeld zu entfernen. Wenn darauf geklickt wird, aktualisieren wir den Text im versteckten Live-Bereich, um Screenreader-Benutzer darüber zu informieren, was das Ergebnis der Aktivierung dieses Kontrollkästchens ist, sowie den `aria-disabled`-Zustand und einige visuelle Indikatoren:

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

Bereits einige Male in diesem Kurs erwähnten wir die native Zugänglichkeit von (und die Zugänglichkeitsprobleme beim Verwenden anderer Elemente zur Fälschung) von Schaltflächen, Links oder Formularelementen (siehe [UI-Steuerelemente](/de/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls) im HTML-Zugänglichkeitsartikel und [Verbesserung der Tastaturzugänglichkeit](#verbesserung_der_tastaturzugänglichkeit) weiter oben). Im Grunde genommen können Sie die Tastaturzugänglichkeit in vielen Fällen ohne allzu großen Aufwand mit `tabindex` und ein bisschen JavaScript wiederherstellen.

Aber was ist mit Screenreadern? Sie werden die Elemente immer noch nicht als Schaltflächen sehen. Wenn wir unser Beispiel [`fake-div-buttons.html`](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) in einem Screenreader testen, werden unsere gefälschten Schaltflächen mit Phrasen wie "Klicken Sie hier!, Gruppe" gemeldet, was offensichtlich verwirrend ist.

Wir können dies mit einer WAI-ARIA-Rolle beheben. Machen Sie eine lokale Kopie von [`fake-div-buttons.html`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) und fügen Sie [`role="button"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) zu jeder Schaltflächen-`<div>` hinzu, z.B.:

```html
<div data-message="This is from the first button" tabindex="0" role="button">
  Click me!
</div>
```

Wenn Sie es jetzt mit einem Screenreader versuchen, werden Sie Phrasen wie "Klicken Sie hier!, Schaltfläche" hören. Während dies viel besser ist, müssen Sie dennoch alle nativen Schaltflächenfunktionen hinzufügen, die Benutzer erwarten, wie das Verwalten von <kbd>Eingabe</kbd> und Klick-Ereignissen, wie im [`button`-Rollen-Dokumentation](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) erklärt.

> [!NOTE]
> Vergessen Sie jedoch nicht, dass die Verwendung des richtigen semantischen Elements, wo möglich, immer besser ist. Wenn Sie eine Schaltfläche erstellen möchten und ein {{htmlelement("button")}}-Element verwenden können, sollten Sie ein {{htmlelement("button")}}-Element verwenden!

#### Benutzer durch komplexe Widgets führen

Es gibt eine ganze Reihe anderer [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles), die nicht-semantische Elementstrukturen als gängige UI-Features identifizieren können, die über das hinausgehen, was in standardmäßigen HTML verfügbar ist, z.B. [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role), [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role). Sie können mehrere nützliche Beispiele in der [Deque university code library](https://dequeuniversity.com/library/) sehen, um Ihnen eine Vorstellung davon zu geben, wie solche Steuerelemente zugänglich gemacht werden können.

Gehen wir ein Beispiel durch. Wir kehren zu unserem einfachen absolut positionierten Tab-Interface zurück (siehe [Verbergen von Inhalten](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#hiding_things) in unserem Artikel zur Barrierefreiheit von CSS und JavaScript), das Sie im [Beispiel für Tab-Infobox](/de/docs/Learn_web_development/Core/CSS_layout/Practical_positioning_examples#a_tabbed_info-box) finden.

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

In diesem Beispiel haben wir eine Kombination aus semantischen Elementen, ARIA-Rollen und ARIA-Attributen verwendet. Das erste davon ist, dass wir ein {{htmlelement("button")}}-Element als _Tab_ verwendet haben, was bedeutet, dass das Tab über einen Mausklick oder per Tastatur mit Leertaste oder Eingabe ausgewählt werden kann.

Verwendete ARIA-Features umfassen:

- Neue Rollen — [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role), [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role)
  - : Diese identifizieren die wichtigen Bereiche der Tabbed-Interface — den Container für die Tabs, die Tabs selbst und die entsprechenden Tabpanels.
- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
  - : Definiert, welcher Tab derzeit ausgewählt ist. Da verschiedene Tabs vom Benutzer ausgewählt werden, wird der Wert dieses Attributs auf den verschiedenen Tabs über JavaScript aktualisiert.
- `tabindex="-1"`
  - : `tabindex="-1"` nimmt das Element aus der Tab-Reihenfolge heraus. Da wir JavaScript verwenden, um dem Benutzer die Steuerung der Tabs über die Tastatur oder Maus zu ermöglichen, wollen wir nicht, dass der Benutzer die Tab-Taste verwenden kann, um zu den Tasten zu navigieren.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Dieses Attribut identifiziert ein Element (durch seine `id`), das das Element beschriftet. In diesem Beispiel wird das `<article>` durch das entsprechende Tab oder `<button>` beschriftet.
- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
  - : Dieses Attribut identifiziert ein Element (durch seine `id`), das durch das Element gesteuert wird. In diesem Beispiel wird das `<article>` durch das entsprechende Tab oder `<button>` gesteuert.

Wir hätten `aria-hidden` verwenden können, um den Inhalt der Tabpanels vor Unterstützungstechnologien zu verbergen, aber wenn dieser Inhalt fokussierbare Inhalte enthielt, wie Links, könnte der Benutzer dennoch zu diesem Inhalt navigieren, obwohl aria-hidden=true für die nicht aktiven Panels gesetzt ist. In diesem Beispiel haben wir `class="is-hidden"` auf Tabpanels angewendet, die den Tabs mit `aria-selected="false"` entsprechen, und verwenden CSS, um `display: none;` anzuwenden, was verhindert, dass der verborgene Inhalt fokussiert werden kann.

In unseren Tests diente diese neue Struktur dazu, die Situation insgesamt zu verbessern. Die `<button>`s werden jetzt als Tabs erkannt (z. B. wird "tab" vom Screenreader ausgesprochen), das ausgewählte Tab wird durch das Aussprechen von "selected" mit dem Tab-Namen angezeigt und alles, was nicht angezeigt wird, kann nicht fokussiert werden. Der Benutzer kann die Tabs auch mit Tastatur oder Maus navigieren.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, dass Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics/Test_your_skills:_WAI-ARIA).

## Zusammenfassung

Dieser Artikel hat keineswegs alles behandelt, was in WAI-ARIA verfügbar ist, aber er sollte Ihnen genug Informationen gegeben haben, um zu verstehen, wie es verwendet wird, und einige der gängigsten Muster zu kennen, die es erfordern.

## Siehe auch

- [Aria-Zustände und -Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes): Alle `aria-*`-Attribute
- [WAI-ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles): Kategorien von ARIA-Rollen und die auf MDN behandelten Rollen
- [ARIA in HTML](https://www.w3.org/TR/html-aria/) auf W3C: Eine Spezifikation, die für jede HTML-Funktion die vom Browser auf sie angewendeten Zugänglichkeitssemantiken (ARIA) definiert und die WAI-ARIA-Funktionen, die Sie auf sie anwenden können, wenn zusätzliche Semantiken erforderlich sind
- [Deque university code library](https://dequeuniversity.com/library/): Eine Bibliothek wirklich nützlicher und praktischer Beispiele, die komplexe UI-Steuerelemente zeigen, die durch WAI-ARIA-Features zugänglich gemacht wurden
- [WAI-ARIA authoring practices](https://www.w3.org/WAI/ARIA/apg/) auf W3C: Ein sehr detailliertes Designmuster vom W3C, das erklärt, wie man verschiedene Arten von komplexen UI-Steuerelementen implementiert, während man sie mit WAI-ARIA-Features zugänglich macht

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility")}}
