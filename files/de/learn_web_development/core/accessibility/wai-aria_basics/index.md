---
title: WAI-ARIA Grundlagen
short-title: WAI-ARIA
slug: Learn_web_development/Core/Accessibility/WAI-ARIA_basics
l10n:
  sourceCommit: 89e8e67d44039717f685a98d8b161f3d1ed1b233
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA", "Learn_web_development/Core/Accessibility")}}

Im Anschluss an den vorherigen Artikel kann die Erstellung komplexer UI-Steuerelemente, die unsemantisches HTML und dynamische JavaScript-aktualisierte Inhalte beinhalten, manchmal schwierig sein. WAI-ARIA ist eine Technologie, die bei solchen Problemen helfen kann, indem sie zusätzliche Semantik hinzufügt, die von Browsern und unterstützenden Technologien erkannt und verwendet werden können, um den Nutzern mitzuteilen, was vor sich geht. Hier zeigen wir, wie Sie es auf einer grundlegenden Ebene verwenden können, um die Zugänglichkeit zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und den besten Praktiken zur Barrierefreiheit, wie in den vorherigen Lektionen im Modul gelehrt.</a></td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von WAI-ARIA — um Semantik für ansonsten semantisches HTML bereitzustellen, damit AT-Benutzer die angebotenen Schnittstellen verstehen können.</li>
          <li>Die grundlegende Syntax — Rollen, Eigenschaften und Zustände.</li>
          <li>Landmarks und Wegweiser.</li>
          <li>Verbesserung der Tastaturzugänglichkeit.</li>
          <li>Ankündigung dynamischer Inhaltsaktualisierungen mit Live-Regionen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist WAI-ARIA?

Lassen Sie uns zunächst betrachten, was WAI-ARIA ist und was es für uns tun kann.

### Ein ganz neues Set an Problemen

Als Web-Apps komplexer und dynamischer wurden, tauchten neue Zugänglichkeitsmerkmale und Probleme auf.

HTML führte beispielsweise eine Reihe semantischer Elemente ein, um übliche Seitenmerkmale zu definieren ({{htmlelement("nav")}}, {{htmlelement("footer")}}, usw.). Bevor diese verfügbar waren, verwendeten Entwickler {{htmlelement("div")}}s mit IDs oder Klassen, z. B. `<div class="nav">`, aber diese waren problematisch, da es keine einfache Möglichkeit gab, ein spezifisches Seitenmerkmal wie die Hauptnavigation programmgesteuert zu finden.

Die anfängliche Lösung bestand darin, ein oder mehrere versteckte Links am Anfang der Seite hinzuzufügen, z. B.:

```html
<a href="#hidden" class="hidden">Skip to navigation</a>
```

Aber dies ist immer noch nicht sehr präzise und kann nur verwendet werden, wenn der Screenreader vom Anfang der Seite liest.

Ein weiteres Beispiel: Apps begannen, komplexe Steuerelemente wie Datumswähler oder Schieberegler zu enthalten. HTML bietet spezielle Eingabetypen, um solche Steuerelemente darzustellen:

```html
<input type="date" /> <input type="range" />
```

Diese wurden ursprünglich nicht gut unterstützt und es war, und ist zu einem geringeren Grad immer noch, schwierig, sie zu stylen, was dazu führte, dass Designer und Entwickler maßgeschneiderte Lösungen bevorzugten. Anstatt diese nativen Funktionen zu verwenden, vertrauen einige Entwickler auf JavaScript-Bibliotheken, die solche Steuerelemente als eine Serie verschachtelter {{htmlelement("div")}}s generieren, die dann mit CSS gestylt und mit JavaScript gesteuert werden.

Das Problem hier ist, dass sie visuell funktionieren, aber Screenreader nicht erkennen können, was sie überhaupt sind, und ihre Benutzer einfach eine Unmenge von Elementen ohne Semantik hören, die erklären würden, was sie bedeuten.

### Einführung in WAI-ARIA

[WAI-ARIA](https://w3c.github.io/aria/) (Web Accessibility Initiative - Accessible Rich Internet Applications) ist eine Spezifikation, die vom W3C verfasst wurde und eine Reihe von zusätzlichen HTML-Attributen definiert, die auf Elemente angewendet werden können, um zusätzliche Semantik bereitzustellen und die Zugänglichkeit überall dort zu verbessern, wo sie fehlt. In der Spezifikation sind drei Hauptmerkmale definiert:

- [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Diese definieren, was ein Element ist oder tut. Viele davon sind sogenannte Landmark-Rollen, die weitgehend den semantischen Wert von Strukturelementen duplizieren, wie z. B. `role="navigation"` ({{htmlelement("nav")}}), `role="banner"` (Dokument {{htmlelement("header")}}), `role="complementary"` ({{htmlelement("aside")}}) oder `role="search"` ({{htmlelement("search")}}). Andere Rollen beschreiben unterschiedliche Seitenstrukturen, die keine passenden Elemente für diese Rollen haben, wie `role="tablist"`, und `role="tabpanel"`, die häufig in Benutzeroberflächen zu finden sind.
- Eigenschaften
  - : Diese definieren Eigenschaften von Elementen, die verwendet werden können, um ihnen zusätzliche Bedeutungen oder Semantik zu geben. Ein Beispiel ist `aria-required="true"`, das angibt, dass ein Formulareingabefeld ausgefüllt werden muss, um gültig zu sein, während `aria-labelledby="label"` es ermöglicht, eine ID auf ein Element zu setzen und es als Beschriftung für alles andere auf der Seite zu referenzieren, einschließlich mehrerer Elemente, was mit `<label for="input">` nicht möglich ist. Als Beispiel könnte `aria-labelledby` verwendet werden, um anzugeben, dass eine im {{htmlelement("div")}} enthaltene Schlüsselbeschreibung die Beschriftung für mehrere Tabellenzellen ist, oder es könnte als Alternative zum Alternativtext für Bilder verwendet werden — vorhandene Informationen auf der Seite als den Alt-Text eines Bildes anzugeben, anstatt ihn innerhalb des `alt`-Attributs wiederholen zu müssen. Ein Beispiel dafür finden Sie unter [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives).
- Zustände
  - : Spezielle Eigenschaften, die die aktuellen Bedingungen von Elementen definieren, wie `aria-disabled="true"`, das einem Screenreader anzeigt, dass ein Formulareingabefeld derzeit deaktiviert ist. Zustände unterscheiden sich von Eigenschaften darin, dass Eigenschaften sich nicht während des Lebenszyklus einer App ändern, während sich Zustände ändern können, meist programmatisch über JavaScript.

Ein wichtiger Punkt über WAI-ARIA-Attribute ist, dass sie nichts am Webseitenaussehen ändern, außer die Informationen, die über die Barrierefreiheits-APIs des Browsers offengelegt werden (woher die Screenreader ihre Informationen beziehen). WAI-ARIA beeinflusst nicht die Seitenstruktur, das DOM, usw., obwohl die Attribute nützlich sein können, um Elemente per CSS auszuwählen.

> [!NOTE]
> Sie können eine nützliche Liste aller ARIA-Rollen und ihrer Anwendungen, mit Links zu weiteren Informationen in der WAI-ARIA-Spezifikation finden — siehe [Definition of Roles](https://w3c.github.io/aria/#role_definitions) — auf dieser Seite — siehe [ARIA Roles](/de/docs/Web/Accessibility/ARIA/Reference/Roles).
>
> Die Spezifikation enthält auch eine Liste aller Eigenschaften und Zustände, mit Links zu weiteren Informationen — siehe [Definitions of States and Properties (all `aria-*` attributes)](https://w3c.github.io/aria/#state_prop_def).

## Wo wird WAI-ARIA unterstützt?

Das ist keine einfache Frage zu beantworten. Es ist schwierig, eine endgültige Quelle zu finden, die angibt, welche Funktionen von WAI-ARIA unterstützt werden, und wo, weil:

1. Es gibt viele Funktionen in der WAI-ARIA-Spezifikation.
2. Es gibt viele Kombinationen von Betriebssystemen, Browsern und Screenreadern zu berücksichtigen.

Dieser letzte Punkt ist entscheidend — Um einen Screenreader überhaupt verwenden zu können, muss Ihr Betriebssystem Browser ausführen, die die notwendigen Barrierefreiheits-APIs bereitstellen, um die Informationen offenzulegen, die Screenreader benötigen. Die meisten bekannten Betriebssysteme haben einen oder zwei Browser, mit denen Screenreader arbeiten können. Die Paciello Group hat einen ziemlich aktuellen Beitrag, der Daten dazu bereitstellt — siehe [Rough Guide: browsers, operating systems and screen reader support updated](https://www.tpgi.com/rough-guide-browsers-operating-systems-and-screen-reader-support-updated/).

Danach müssen Sie sich überlegen, ob die betreffenden Browser ARIA-Funktionen unterstützen und diese über ihre APIs bereitstellen, aber auch, ob die Screenreader diese Informationen erkennen und sie ihren Nutzern sinnvoll präsentieren.

1. Browsersupport ist nahezu universell.
2. Screenreader-Support für ARIA-Funktionen ist noch nicht ganz auf diesem Niveau, aber die beliebtesten Screenreader kommen dorthin. Sie können sich einen Überblick über die Supportlevel verschaffen, indem Sie sich den Artikel von Powermapper über [WAI-ARIA Screen reader compatibility](https://www.powermapper.com/tests/screen-readers/aria/) ansehen.

In diesem Artikel werden wir keine Versuche unternehmen, jede WAI-ARIA-Funktion und deren genaue Unterstützungsdetails abzudecken. Stattdessen behandeln wir die kritischsten WAI-ARIA-Funktionen, die Sie kennen sollten; wenn wir keine Unterstützungsdetails erwähnen, können Sie davon ausgehen, dass die Funktion gut unterstützt wird. Wir werden ausdrücklich Ausnahmen davon erwähnen.

> [!NOTE]
> Einige JavaScript-Bibliotheken unterstützen WAI-ARIA, was bedeutet, dass sie bei der Generierung von UI-Funktionen wie komplexen Formularelementen ARIA-Attribute hinzufügen, um die Zugänglichkeit dieser Funktionen zu verbessern. Wenn Sie nach einer dritten Partei JavaScript-Lösung für die schnelle UI-Entwicklung suchen, sollten Sie die Zugänglichkeit ihrer UI-Widgets als wichtigen Faktor bei der Wahl berücksichtigen. Gute Beispiele sind jQuery UI (siehe [About jQuery UI: Deep accessibility support](https://jqueryui.com/about/#deep-accessibility-support)), [ExtJS](https://www.sencha.com/products/extjs/), und [Dojo/Dijit](https://dojotoolkit.org/reference-guide/1.10/dijit/a11y/statement.html).

## Wann sollten Sie WAI-ARIA verwenden?

Wir haben einige der Probleme besprochen, die zur Schaffung von WAI-ARIA führten, aber im Wesentlichen gibt es vier Hauptbereiche, in denen WAI-ARIA nützlich ist:

- Wegweiser/Landmarks
  - : ARIA's [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) Attributwerte können als Landmarks fungieren, die entweder die Semantik von HTML-Elementen replizieren (z. B. {{htmlelement("nav")}}), oder über die HTML-Semantik hinausgehen, um Wegweiser zu verschiedenen Funktionsbereichen bereitzustellen, z. B. `search`, `tablist`, `tab`, `listbox`, usw.
- Dynamische Inhaltsaktualisierungen
  - : Screenreader haben typischerweise Schwierigkeiten, ständig wechselnde Inhalte zu melden; mit ARIA können wir `aria-live` verwenden, um Screenreader-Nutzern zu informieren, wenn ein Inhaltsbereich dynamisch aktualisiert wird: zum Beispiel, indem JavaScript auf der Seite neue Inhalte vom Server abruft und das DOM aktualisiert wird [fetching new content from the server and updating the DOM](/de/docs/Learn_web_development/Core/Scripting/Network_requests).
- Verbesserte Tastaturzugänglichkeit
  - : Es gibt eingebaute HTML-Elemente, die native Tastaturzugänglichkeit haben; wenn andere Elemente zusammen mit JavaScript verwendet werden, um ähnliche Interaktionen zu simulieren, leidet die Tastaturzugänglichkeit und die Berichterstattung der Screenreader darunter. Wenn dies unvermeidlich ist, bietet WAI-ARIA eine Möglichkeit, anderen Elementen den Fokus zu geben (unter Verwendung von `tabindex`).
- Zugänglichkeit von nicht-semantischen Steuerelementen
  - : Wenn eine Serie geschachtelter `<div>`s zusammen mit CSS/JavaScript verwendet wird, um eine komplexe UI-Funktion zu erstellen, oder ein nativer Kontrolle stark verbessert/verändert wird, kann die Zugänglichkeit leiden — Benutzer von Screenreadern werden Schwierigkeiten haben, zu verstehen, was die Funktion tut, wenn es keine Semantik oder andere Hinweise gibt. In diesen Situationen kann ARIA helfen, das Fehlende mit einer Kombination aus Rollen wie `button`, `listbox` oder `tablist` bereitzustellen, sowie Eigenschaften wie `aria-required` oder `aria-posinset`, um weitere Hinweise zur Funktionalität bereitzustellen.

Im nächsten Abschnitt werden wir die vier oben beschriebenen Hauptbereiche genauer betrachten, zusammen mit Beispielen. Bevor Sie weitermachen, sollten Sie ein Screenreader-Test-Setup erstellen, damit Sie einige der Beispiele beim Durchgehen testen können. Weitere Informationen finden Sie in unserem Abschnitt über [testing screen readers](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers).

> [!CALLOUT]
>
> **Sie sollten WAI-ARIA nur verwenden, wenn Sie es benötigen!**
>
> Die Verwendung der korrekten HTML-Elemente gibt Ihnen implizit die benötigten Rollen, und Sie sollten _immer_ [native HTML-Funktionen](/de/docs/Learn_web_development/Core/Accessibility/HTML) verwenden, um die Semantik bereitzustellen, die Screenreader benötigen, um ihren Nutzern mitzuteilen, was passiert. Manchmal ist dies nicht möglich, entweder weil Sie begrenzte Kontrolle über den Code haben, oder weil Sie etwas Komplexes erstellen, das kein einfaches HTML-Element hat, um es zu implementieren. In solchen Fällen kann WAI-ARIA ein wertvolles Werkzeug zur Verbesserung der Zugänglichkeit sein.
>
> Aber nochmals, verwenden Sie es nur, wenn nötig!
>
> Versuchen Sie auch sicherzustellen, dass Sie Ihre Website mit einer Vielzahl von _echten_ Benutzern testen — nicht-behinderten Menschen, Menschen, die Screenreader verwenden, Menschen, die Tastaturnavigation verwenden usw. Sie werden bessere Einsichten haben, als Sie, wie gut es funktioniert.

## Wegweiser/Landmarks

WAI-ARIA fügt den Browsern das [`role` Attribut](https://w3c.github.io/aria/#role_definitions) hinzu, das es Ihnen ermöglicht, Elementen auf Ihrer Site überall dort, wo sie benötigt werden, zusätzlichen semantischen Wert zu geben. Der erste große Bereich, in dem dies nützlich ist, ist das Bereitstellen von Informationen für Screenreader, damit deren Benutzer gängige Seitenelemente finden können. Dieses Beispiel hat folgende Struktur:

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

Wenn Sie das Beispiel mit einem Screenreader in einem modernen Browser testen, erhalten Sie bereits einige nützliche Informationen. Beispielsweise gibt Ihnen VoiceOver Folgendes:

- Auf dem `<header>`-Element — "Banner, 2 Elemente" (es enthält eine Überschrift und das `<nav>`).
- Auf dem `<nav>`-Element — "Navigation, 2 Elemente" (es enthält eine Liste und ein Formular).
- Auf dem `<main>`-Element — "Main, 2 Elemente" (es enthält einen Artikel und einen Abschnitt).
- Auf dem `<aside>`-Element — "Komplementär, 2 Elemente" (es enthält eine Überschrift und eine Liste).
- Auf dem Suchformulareingabefeld — "Suchanfrage, Einfügen an der Anfang des Textes".
- Auf dem `<footer>`-Element — "Fußzeile, 1 Element".

Wenn Sie zum Landmarks-Menü von VoiceOver gehen (mit der VoiceOver-Taste + U und dann mit den Pfeiltasten durch die Menüpunkte navigieren), werden die meisten Elemente schön aufgelistet, sodass sie schnell zugänglich sind.

![Mac's VoiceOver menu for quick accessibility. Landmarks header and landmarks list including banner, navigation, main, and complementary.](landmarks-list.png)

Wir könnten dies jedoch verbessern. Das Suchformular ist ein wirklich wichtiger Anhaltspunkt, den Leute finden möchten, aber er wird nicht im Landmark-Menü aufgeführt oder als ein bedeutender Landmark behandelt, über den hinaus das eigentliche Eingabefeld als Suchfeld (`<input type="search">`) aufgerufen wird.

Wir könnten es durch die Verwendung der ARIA `role="search"` verbessern, aber die Verwendung des {{htmlelement("search")}}-Elements verleiht diesem Formular implizit diesen Rolle.

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

Wichtig ist, dass wir semantisches HTML verwendet haben, das Bedeutung und Rollen zur Struktur der Seite hinzufügt, ohne unnötige [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) Attribute zu unserer HTML-Struktur hinzuzufügen, die eine Struktur wie diese hat:

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

Wir haben Ihnen auch eine Bonusfunktion in diesem Beispiel gegeben — das {{htmlelement("input")}}-Element hat das Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) erhalten, das ihm eine beschreibende Beschriftung gibt, die von einem Screenreader ausgegeben wird, obwohl wir kein {{htmlelement("label")}}-Element hinzugefügt haben. In solchen Fällen ist dies sehr nützlich — ein solches Suchformular ist eine sehr häufige, leicht erkennbare Funktion, und das Hinzufügen einer visuellen Beschriftung würde das Seitendesign verderben.

```html
<input
  type="search"
  name="q"
  placeholder="Search query"
  aria-label="Search through site content" />
```

Nun, wenn wir VoiceOver verwenden, um sich dieses Beispiel anzusehen, bekommen wir einige Verbesserungen:

- Das Suchformular wird sowohl beim Durchsuchen der Seite als auch im Landmarks-Menü als separates Element behandelt.
- Der Text, der im `aria-label`-Attribut enthalten ist, wird vorgelesen, wenn das Formulareingabefeld hervorgehoben wird.

Wenn Sie ältere Browser wie IE8 unterstützen müssen; ist es sinnvoll, ARIA-Rollen für diesen Zweck einzuschließen. Und wenn Ihre Seite aus irgendeinem Grund nur aus `<div>`-Elementen besteht, sollten Sie auf jeden Fall die ARIA-Rollen hinzufügen, um diese dringend benötigte Semantik bereitzustellen!

Sie werden viel mehr über diese Semantik und die Kraft von ARIA-Eigenschaften/Attributen im Folgenden sehen, besonders im Abschnitt zur [Zugänglichkeit von nicht-semantischen Steuerelementen](#zugänglichkeit_nicht-semantischer_steuerungen). Für jetzt, lassen Sie uns betrachten, wie ARIA bei dynamischen Inhaltsaktualisierungen helfen kann.

## Dynamische Inhaltsaktualisierungen

Inhalt, der in das DOM geladen wird, kann leicht mit einem Screenreader erreicht werden, von textlichen Inhalten bis zu alternativen Texten, die an Bilder angehängt sind. Traditionelle statische Websites mit überwiegend Textinhalten sind daher leicht zugänglich für Menschen mit Sehbehinderungen.

Das Problem ist, dass moderne Web-Apps oft nicht nur statischer Text sind — sie aktualisieren häufig Teile der Seite, indem sie neue Inhalte vom Server abrufen (in diesem Beispiel verwenden wir ein statisches Array von Zitaten) und das DOM aktualisieren. Diese werden manchmal als **Live-Regionen** bezeichnet.

Schauen wir uns ein Beispiel an — einen zufälligen Zitatgenerator:

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

Dies funktioniert gut, ist aber nicht gut für die Barrierefreiheit — die Inhaltsaktualisierung wird von Screenreadern nicht erkannt, sodass ihre Benutzer nicht wissen, was los ist. Dies ist ein recht triviales Beispiel, aber stellen Sie sich vor, Sie würden eine komplexe UI mit vielen ständig aktualisierten Inhalten erstellen, wie ein Chatroom, eine Strategiespiel-Benutzeroberfläche oder ein Live-aktualisiertes Warenkorbanzeige — es wäre unmöglich, die App auf eine effektive Weise zu verwenden, ohne irgendeine Art von Benachrichtigung über die Updates.

WAI-ARIA bietet glücklicherweise einen nützlichen Mechanismus, um diese Benachrichtigungen bereitzustellen — die [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) Eigenschaft. Wenn diese auf ein Element angewendet wird, lesen Screenreader den aktualisierten Inhalt vor. Wie dringend der Inhalt vorgelesen wird, hängt vom Attributwert ab:

- `off`
  - : Der Standardwert. Aktualisierungen sollten nicht angekündigt werden.
- `polite`
  - : Aktualisierungen sollten nur angekündigt werden, wenn der Benutzer inaktiv ist.
- `assertive`
  - : Aktualisierungen sollten dem Benutzer so schnell wie möglich angekündigt werden.

Hier aktualisieren wir den `<blockquote>`-Öffnungstag wie folgt:

```html
<blockquote aria-live="assertive">…</blockquote>
```

Dies wird dazu führen, dass ein Screenreader den Inhalt liest, während er aktualisiert wird: Versuchen Sie, die aktualisierte Live-Version zu testen:

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
> Es gibt einige andere ARIA-Eigenschaften, die im Zusammenhang mit `aria-live` ebenfalls wissenswert sind:
>
> - Die [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic) Eigenschaft, wenn auf `true` gesetzt, weist Screenreader an, den gesamten Inhalt des Elements als eine atomare Einheit vorzulesen, nicht nur die aktualisierten Teile. Dies ist nützlich, wenn nur die Inhalte eines Abschnitts aktualisiert werden, Sie aber auch möchten, dass die Überschrift jedes Mal vorgelesen wird, wenn sich etwas ändert, um den Benutzer an deren Inhalt zu erinnern.
> - Die [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant) Eigenschaft ist nützlich zur Steuerung dessen, was vorgelesen wird, wenn eine Live-Region aktualisiert wird. Sie können zum Beispiel nur den Hinzugefügten oder entfernten Inhalt vorlesen lassen.

## Verbesserung der Tastaturzugänglichkeit

Wie an einigen anderen Stellen im Modul besprochen, ist eine der großen Stärken von HTML in Bezug auf Barrierefreiheit die eingebaute Tastaturzugänglichkeit von Funktionen wie Schaltflächen, Formularelementen und Links. Im Allgemeinen können Sie die Tabulatortaste verwenden, um zwischen den Bedienelementen zu navigieren, die Eingabetaste, um ein Bedienelement auszuwählen oder zu aktivieren, und gelegentlich andere Steuerungselemente, wie beispielsweise die Pfeiltasten, um zwischen Optionen in einem `<select>`-Feld zu navigieren.

Manchmal jedoch müssen Sie Code schreiben, der entweder nicht-semantische Elemente als Schaltflächen (oder andere Arten von Bedienelementen) verwendet oder fokussierbare Bedienelemente für nicht ganz den richtigen Zweck verwendet. Sie könnten versuchen, einige schlechte Codes zu reparieren, die Sie geerbt haben, oder Sie könnten ein komplexes Widget erstellen, das es erfordert.

In Bezug auf nicht-fokussierbaren Code fokussierbar zu machen, erweitert WAI-ARIA das `tabindex` Attribut mit einigen neuen Werten:

- `tabindex="0"` — wie oben erwähnt, erlaubt dieser Wert Elementen, die normalerweise nicht fokussierbar sind, dass sie fokussierbar werden. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — erlaubt Elementen, die normalerweise nicht fokussierbar sind, programmatisch, z. B. über JavaScript oder als Ziel von Links den Fokus zu erhalten.

Wir haben dies im Detail besprochen und eine typische Umsetzung in unserem HTML-Bearbeitungsartikel zurück gezeigt — siehe [Building keyboard accessibility back in](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in).

## Zugänglichkeit nicht-semantischer Steuerungen

Dies schließt an den vorherigen Abschnitt an — wenn eine Serie geschachtelter `<div>`s zusammen mit CSS/JavaScript verwendet wird, um eine komplexe UI-Funktion zu erstellen, oder eine native Kontrolle stark verbessert/verändert wird, kann nicht nur die Tastaturzugänglichkeit leiden, sondern Benutzer von Screenreadern werden Schwierigkeiten haben zu wissen, was die Funktion tut, wenn es keine Semantik oder andere Hinweise gibt. In solchen Situationen kann ARIA helfen, die fehlende Semantik bereitzustellen.

### Formularvalidierung und Fehlerwarnungen

Lassen Sie uns zunächst das Formular-Beispiel erneut besuchen, das wir zum ersten Mal in unserem Artikel zur CSS- und JavaScript-Barrierefreiheit betrachtet haben (lesen Sie [Keeping it unobtrusive](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#keeping_it_unobtrusive) für eine vollständige Wiederholung). Am Ende dieses Abschnitts zeigten wir, dass wir einige ARIA-Attribute in die Fehlermeldung-Box aufgenommen haben, die Validierungsfehler anzeigt, wenn Sie versuchen, das Formular zu übermitteln:

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

- [`role="alert"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) verwandelt das Element, auf das es angewendet wird, automatisch in eine Live-Region, sodass Änderungen daran vorgelesen werden; es identifiziert es auch semantisch als Warnmeldung (wichtige zeit-/kontextabhängige Informationen) und stellt eine bessere, zugänglichere Möglichkeit dar, um eine Warnung an einen Benutzer zu übermitteln (modale Dialoge wie [`alert()`](/de/docs/Web/API/Window/alert)-Aufrufe haben eine Reihe von Barrierefreiheit-Problemen; siehe [Popup Windows](https://webaim.org/techniques/javascript/other#popups) von WebAIM).
- Ein [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant) Wert von `all` weist den Screenreader an, den Inhalt der Fehlerliste vorzulesen, wenn Änderungen daran vorgenommen werden — d.h. wenn Fehler hinzugefügt oder entfernt werden. Dies ist nützlich, weil der Benutzer wissen möchte, welche Fehler übrig sind, nicht nur, was der Liste hinzugefügt oder entfernt wurde.

Wir könnten unsere ARIA-Verwendung weiter ausbauen und einige weitere Validierungshilfen bereitstellen. Wie wäre es, wenn wir zunächst darauf hinweisen, ob Felder erforderlich sind und welche Altersbereich eingehalten werden soll?

1. An diesem Punkt nehmen Sie eine Kopie unserer [`form-validation.html`](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html) und [`validation.js`](https://github.com/mdn/learning-area/blob/main/accessibility/css/validation.js) Dateien, und speichern sie in einem lokalen Verzeichnis.
2. Öffnen Sie beide in einem Texteditor und sehen Sie sich den Code an, wie er funktioniert.
3. Fügen Sie zuerst einen Absatz direkt über dem öffnenden `<form>`-Tag ein, ähnlich wie unten, und markieren Sie beide Formular `<label>`s mit einem Sternchen. Dies ist normalerweise, wie wir erforderliche Felder für sehende Benutzer markieren.

   ```html
   <p>Fields marked with an asterisk (*) are required.</p>
   ```

4. Dies macht visuell Sinn, ist aber nicht so leicht für Benutzer von Screenreadern zu verstehen. Glücklicherweise bietet WAI-ARIA das [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required) Attribut, um Screenreadern Hinweise zu geben, dass Formularfelder ausgefüllt werden müssen. Aktualisieren Sie die `<input>`-Elemente wie folgt:

   ```html
   <input type="text" name="name" id="name" aria-required="true" />

   <input type="number" name="age" id="age" aria-required="true" />
   ```

5. Wenn Sie das Beispiel jetzt speichern und es mit einem Screenreader testen, sollten Sie etwas wie "Geben Sie Ihren Namen ein, Sternchen, erforderlich, Text bearbeiten" hören.
6. Es könnte auch nützlich sein, wenn wir Benutzern von Screenreadern und sehenden Benutzern eine Vorstellung davon geben, was der Alterswert sein sollte. Dies wird häufig als Tooltip oder Platzhalter innerhalb des Formularfelds präsentiert. WAI-ARIA enthält die [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) Eigenschaften, um Mindest- und Höchstwerte anzugeben, und Screenreader unterstützen die nativen `min` und `max` Attribute. Ein weiteres gut unterstütztes Merkmal ist das HTML-Attribut `placeholder`, das eine Nachricht enthält, die im Eingabefeld angezeigt wird, wenn kein Wert eingegeben wird und von einigen Screenreadern vorgelesen wird. Aktualisieren Sie Ihr Nummern-Eingabefeld so:

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

Immer eine {{HTMLelement('label')}} für jede Eingabe einschließen. Während einige Screenreader den Platzhaltertext ankündigen, tun dies die meisten nicht. Akzeptable Ersatzlösungen, um Formularelemente mit einem zugänglichen Namen bereitzustellen, beinhalten [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) und [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby). Aber das `<label>`-Element mit einem `for` Attribut ist die bevorzugte Methode, da es Nutzbarkeit für alle Benutzer bietet, einschließlich Mauskontrollbenutzern.

> [!NOTE]
> Sie können das fertige Beispiel live unter [`form-validation-updated.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-updated.html) sehen.

WAI-ARIA ermöglicht auch einige fortgeschrittene Technik für die Beschriftung von Formularen, jenseits des klassischen {{htmlelement("label")}}-Elements. Wir haben bereits über die Verwendung der [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) Eigenschaft gesprochen, um eine Beschriftung bereitzustellen, wo wir nicht möchten, dass die Beschriftung für sehende Benutzer sichtbar ist (siehe den Abschnitt [Wegweiser/Landmarks](#signpostslandmarks), oben). Einige andere Techniken zur Beschriftung verwenden andere Eigenschaften wie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn Sie ein nicht- `<label>`-Element als Beschriftung bezeichnen möchten oder mehrere Formularelemente mit derselben Beschriftung versehen, und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby), wenn Sie andere Informationen mit einem Formulareingabefeld verknüpfen möchten und dass diese auch vorgelesen werden. Siehe [WebAIM's Advanced Form Labeling article](https://webaim.org/techniques/forms/advanced) für mehr Details.

Es gibt auch viele andere nützliche Eigenschaften und Zustände, um den Status von Formularelementen anzuzeigen. Beispielsweise kann `aria-disabled="true"` verwendet werden, um anzuzeigen, dass ein Formularelement deaktiviert ist. Viele Browser überspringen deaktivierte Formularelemente, was dazu führt, dass diese nicht von Screenreadern vorgelesen werden. In einigen Fällen wird ein deaktiviertes Element wahrgenommen, daher ist es eine gute Idee, dieses Attribut hinzuzufügen, um den Screenreader darüber zu informieren, dass das deaktivierte Formularelement tatsächlich deaktiviert ist.

Wenn sich der deaktivierte Zustand eines Eingabefelds wahrscheinlich ändert, dann ist es auch eine gute Idee, anzugeben, wann dies geschieht, und was das Ergebnis ist. In unserem [`form-validation-checkbox-disabled.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-checkbox-disabled.html) Demo gibt es ein Kontrollkästchen, das, wenn es aktiviert ist, ein weiteres Formularelement aktiviert, um weitere Informationen einzugeben. Wir haben eine versteckte Live-Region eingerichtet:

```html
<p class="hidden-alert" aria-live="assertive"></p>
```

die durch absolute Positionierung versteckt ist. Wenn dies aktiviert/deaktiviert wird, aktualisieren wir den Text innerhalb der versteckten Live-Region, um den Benutzern von Screenreadern mitzuteilen, was das Ergebnis der Überprüfung dieses Kontrollkästchens ist, sowie die `aria-disabled`-Zustand und einige visuelle Indikatoren ebenfalls:

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

### Beschreibung von Nicht-semantischen Buttons als Schaltflächen

Einige Male in diesem Kurs haben wir bereits die native Zugänglichkeit von (und die Zugänglichkeitsprobleme bei der Verwendung anderer Elemente zur Nachahmung von) Schaltflächen, Links oder Formularelementen erwähnt (siehe [Verwendung semantischer UI-Steuerelemente wo möglich](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible) im HTML-Bearbeitungsartikel und [Verbesserung der Tastaturzugänglichkeit](#verbesserung_der_tastaturzugänglichkeit), oben). Im Grunde können Sie in vielen Fällen die Tastaturzugänglichkeit relativ einfach wieder einbauen, indem Sie `tabindex` und ein bisschen JavaScript verwenden.

Aber wie sieht es mit Screenreadern aus? Sie werden die Elemente immer noch nicht als Schaltflächen sehen. Wenn wir unser [`fake-div-buttons.html`](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) Beispiel in einem Screenreader testen, werden unsere gefälschten Schaltflächen mit Ausdrücken wie "Klicke mich an!, Gruppe" angekündigt, was offensichtlich verwirrend ist.

Wir können dies mit einer WAI-ARIA-Rolle beheben. Erstellen Sie eine lokale Kopie von [`fake-div-buttons.html`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) und fügen Sie [`role="button"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) zu jeder Schaltfläche `<div>` hinzu, zum Beispiel:

```html
<div data-message="This is from the first button" tabindex="0" role="button">
  Click me!
</div>
```

Jetzt, wenn Sie dies mit einem Screenreader ausprobieren, werden die Schaltflächen mit Ausdrücken wie "Klicke mich an!, Schaltfläche" angekündigt. Dies ist zwar viel besser, erfordert aber weiterhin, dass alle nativen Schaltflächenfunktionen bereitgestellt werden, die Benutzer erwarten, wie die Handhabung von <kbd>Eingabe</kbd> und Klickereignissen, wie im [`button` Rollendokumentation](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) erklärt.

> [!NOTE]
> Vergessen Sie jedoch nicht, dass die Verwendung des korrekten semantischen Elements dort, wo dies möglich ist, immer besser ist. Wenn Sie eine Schaltfläche erstellen möchten und ein {{htmlelement("button")}}-Element verwenden können, sollten Sie ein {{htmlelement("button")}}-Element verwenden!

### Benutzer durch komplexe Widgets führen

Es gibt eine ganze Reihe anderer [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles), die nicht-semantische Elementstrukturen als gängige UI-Funktionen identifizieren können, die über das hinausgehen, was in standard HTML verfügbar ist, zum Beispiel [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role), [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role). Sie können mehrere nützliche Beispiele in der [Deque university code library](https://dequeuniversity.com/library/) sehen, um Ihnen eine Vorstellung davon zu geben, wie solche Steuerelemente über WAI-ARIA Funktionen zugänglich gemacht werden können.

Sie finden auch mehrere Live-Beispiele in unserer [WAI-ARIA Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles) Dokumentation. Sehen Sie beispielsweise unser [ARIA: Tab Role Beispiel](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role#example) an, das erklärt, wie man eine zugängliche Registerkartenoberfläche implementiert.

## Zusammenfassung

Dieser Artikel hat bei weitem nicht alles abgedeckt, was in WAI-ARIA verfügbar ist, aber er sollte Ihnen genug Informationen gegeben haben, um zu verstehen, wie man es benutzt, und einige der häufigsten Muster kennenzulernen, die es erfordern.

Im nächsten Artikel werden wir Ihnen einige Tests bereitstellen, die Sie verwenden können, um zu überprüfen, wie gut Sie alle diese Informationen verstanden und behalten haben.

## Siehe auch

- [Aria States and Properties](/de/docs/Web/Accessibility/ARIA/Reference/Attributes): Alle `aria-*` Attribute
- [WAI-ARIA Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles): Kategorien von ARIA-Rollen und die auf MDN behandelten Rollen
- [ARIA in HTML](https://w3c.github.io/html-aria/) beim W3C: Eine Spezifikation, die für jedes HTML-Merkmal die Barrierefreiheit (ARIA) Semantik definiert, die vom Browser implizit auf es angewendet wird, und die WAI-ARIA Funktionen, die Sie darauf setzen können, wenn zusätzliche Semantik erforderlich ist
- [Deque university code library](https://dequeuniversity.com/library/): Eine Bibliothek mit wirklich nützlichen und praktischen Beispielen, die komplexe UI-Steuerelemente zeigen, die unter Verwendung von WAI-ARIA Funktionen zugänglich gemacht wurden
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/) beim W3C: Ein sehr detailliertes Designmuster vom W3C, das erklärt, wie man verschiedene Arten von komplexen UI-Steuerelementen implementiert, während man sie mit WAI-ARIA Funktionen zugänglich macht

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA", "Learn_web_development/Core/Accessibility")}}
