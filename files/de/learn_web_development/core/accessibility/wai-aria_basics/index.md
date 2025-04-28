---
title: WAI-ARIA Grundlagen
short-title: WAI-ARIA
slug: Learn_web_development/Core/Accessibility/WAI-ARIA_basics
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility")}}

Im Anschluss an den vorherigen Artikel kann es manchmal schwierig sein, komplexe UI-Kontrollen zu erstellen, die unsemantisches HTML und dynamisch mittels JavaScript aktualisierte Inhalte beinhalten. WAI-ARIA ist eine Technologie, die bei solchen Problemen helfen kann, indem sie weitere Semantiken hinzufügt, die Browser und unterstützende Technologien erkennen und nutzen können, um den Nutzern mitzuteilen, was vor sich geht. Hier zeigen wir, wie man es auf einer grundlegenden Ebene verwendet, um die Barrierefreiheit zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und den besten Praktiken zur Barrierefreiheit, wie in den vorherigen Lektionen des Moduls vermittelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von WAI-ARIA – um Semantik zu ansonsten nicht-semantischem HTML hinzuzufügen, sodass Benutzer von assistiven Technologien die präsentierten Schnittstellen verstehen können.</li>
          <li>Die grundlegende Syntax – Rollen, Eigenschaften und Zustände.</li>
          <li>Landmarken und Leitsysteme.</li>
          <li>Verbesserung der Tastaturzugänglichkeit.</li>
          <li>Bekanntgabe dynamischer Inhaltsaktualisierungen mit Live-Regionen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist WAI-ARIA?

Lassen Sie uns zunächst betrachten, was WAI-ARIA ist und was es für uns tun kann.

### Ein ganz neues Set von Problemen

Als Web-Apps komplexer und dynamischer wurden, tauchten neue Barrierefreiheitsfunktionen und Probleme auf.

Zum Beispiel führte HTML eine Reihe von semantischen Elementen ein, um gängige Seitenmerkmale zu definieren ({{htmlelement("nav")}}, {{htmlelement("footer")}}, etc.). Bevor diese verfügbar waren, verwendeten Entwickler {{htmlelement("div")}}s mit IDs oder Klassen, z. B. `<div class="nav">`, aber diese waren problematisch, da es keine einfache Möglichkeit gab, ein spezifisches Seitenmerkmal wie die Hauptnavigation programmatisch zu finden.

Die anfängliche Lösung bestand darin, einen oder mehrere versteckte Links oben auf der Seite hinzuzufügen, um zur Navigation (oder was auch immer) zu verlinken, zum Beispiel:

```html
<a href="#hidden" class="hidden">Skip to navigation</a>
```

Aber dies ist immer noch nicht sehr präzise und kann nur verwendet werden, wenn der Screenreader von oben nach unten liest.

Ein weiteres Beispiel: Apps begannen, komplexe Kontrollen zu bieten, wie Datumsauswähler zum Auswählen von Daten, Schieberegler zum Auswählen von Werten etc. HTML bietet spezielle Eingabetypen, um solche Kontrollen darzustellen:

```html
<input type="date" /> <input type="range" />
```

Diese wurden ursprünglich nicht gut unterstützt; es war – und ist immer noch bis zu einem gewissen Grad – schwierig, sie zu stylen, was dazu führte, dass Designer und Entwickler sich für benutzerdefinierte Lösungen entschieden. Anstatt diese nativen Funktionen zu verwenden, setzen einige Entwickler auf JavaScript-Bibliotheken, die solche Kontrollen als eine Reihe von verschachtelten {{htmlelement("div")}}s generieren, die dann mit CSS gestylt und mit JavaScript gesteuert werden.

Das Problem hier ist, dass sie visuell funktionieren, aber Screenreader keinen Sinn darin sehen können, was sie überhaupt sind, und ihre Benutzer hören lediglich, dass sie ein Durcheinander von Elementen sehen, ohne Semantik, die beschreibt, was sie bedeuten.

### Einführung von WAI-ARIA

[WAI-ARIA](https://www.w3.org/TR/wai-aria/) (Web Accessibility Initiative - Accessible Rich Internet Applications) ist eine von der W3C geschriebene Spezifikation, die einen Satz zusätzlicher HTML-Attribute definiert, die auf Elemente angewendet werden können, um zusätzliche Semantik bereitzustellen und Barrierefreiheit dort zu verbessern, wo sie fehlt. Die Spezifikation definiert drei Hauptmerkmale:

- [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Diese definieren, was ein Element ist oder tut. Viele davon sind sogenannte Landmarkenrollen, die weitgehend den semantischen Wert von Strukturelementen duplizieren, wie `role="navigation"` ({{htmlelement("nav")}}), `role="banner"` (Dokument {{htmlelement("header")}}), `role="complementary"` ({{htmlelement("aside")}}) oder `role="search"` ({{htmlelement("search")}}). Einige andere Rollen beschreiben verschiedene Seitenstrukturen, die keine Elemente mit passenden Rollen haben, wie `role="tablist"` und `role="tabpanel"`, die häufig in Benutzeroberflächen vorkommen.
- Eigenschaften
  - : Diese definieren Eigenschaften von Elementen, die verwendet werden können, um ihnen zusätzliche Bedeutung oder Semantik zu verleihen. Als Beispiel gibt `aria-required="true"` an, dass ein Formulareingabefeld ausgefüllt werden muss, um gültig zu sein, während `aria-labelledby="label"` es ermöglicht, einer Beschriftung auf einem Element eine ID zu geben, dann auf sie als die Beschriftung für alles andere auf der Seite zu verweisen, einschließlich mehrerer Elemente, was mit `<label for="input">` nicht möglich ist. Als Beispiel könnten Sie `aria-labelledby` verwenden, um anzugeben, dass eine in einem {{htmlelement("div")}} enthaltene Schlüsselbeschreibung die Beschriftung für mehrere Tabellenzellen ist, oder Sie könnten es als Alternative zu Alt-Text für Bilder verwenden – vorhandene Informationen auf der Seite als Alt-Text für ein Bild angeben, anstatt sie im `alt`-Attribut wiederholen zu müssen. Sie können ein Beispiel hierfür bei [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) sehen.
- Zustände
  - : Besondere Eigenschaften, die die aktuellen Bedingungen von Elementen definieren, wie `aria-disabled="true"`, das einem Screenreader angibt, dass eine Formulareingabe derzeit deaktiviert ist. Zustände unterscheiden sich von Eigenschaften darin, dass sie sich während des Lebenszyklus einer App nicht ändern, während Zustände sich ändern können, im Allgemeinen programmgesteuert über JavaScript.

Ein wichtiger Punkt zu WAI-ARIA-Attributen ist, dass sie nichts an der Webseite außer den Informationen ändern, die durch die Barrierefreiheits-APIs des Browsers bereitgestellt werden (woher Screenreader ihre Informationen beziehen). WAI-ARIA beeinflusst nicht die Webseite-Struktur, den DOM etc., obwohl die Attribute nützlich für die Auswahl von Elementen durch CSS sein können.

> [!NOTE]
> Eine nützliche Liste aller ARIA-Rollen und ihrer Anwendungen mit Links zu weiterführenden Informationen finden Sie in der WAI-ARIA-Spezifikation – siehe [Definition von Rollen](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) – auf dieser Website – siehe [ARIA Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles).
>
> Die Spezifikation enthält auch eine Liste aller Eigenschaften und Zustände mit Links zu weiterführenden Informationen – siehe [Definitionen von Zuständen und Eigenschaften (alle `aria-*` Attribute)](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def).

### Wo wird WAI-ARIA unterstützt?

Diese Frage ist nicht einfach zu beantworten. Es ist schwierig, eine maßgebliche Ressource zu finden, die angibt, welche Funktionen von WAI-ARIA unterstützt werden und wo, weil:

1. Es viele Funktionen in der WAI-ARIA-Spezifikation gibt.
2. Es viele Kombinationen von Betriebssystemen, Browsern und Screenreadern zu berücksichtigen gibt.

Dieser letzte Punkt ist entscheidend – um überhaupt einen Screenreader verwenden zu können, muss Ihr Betriebssystem Browser ausführen, die die notwendigen Barrierefreiheits-APIs bereitstellen, um die Informationen verfügbar zu machen, die Screenreader benötigen, um ihre Arbeit zu erledigen. Die meisten beliebten Betriebssysteme haben einen oder zwei Browser, mit denen Screenreader arbeiten können. Die Paciello Group hat einen ziemlich aktuellen Beitrag, der Daten dazu bereitstellt – siehe [Grobe Anleitung: Unterstützung von Browsern, Betriebssystemen und Screenreadern aktualisiert](https://www.tpgi.com/rough-guide-browsers-operating-systems-and-screen-reader-support-updated/).

Danach müssen Sie auch berücksichtigen, ob die betreffenden Browser ARIA-Funktionen unterstützen und sie über ihre APIs bereitstellen, aber auch, ob Screenreader diese Informationen erkennen und ihren Benutzern auf sinnvolle Weise präsentieren.

1. Die Unterstützung durch Browser ist fast universell.
2. Die Unterstützung durch Screenreader für ARIA-Funktionen ist noch nicht ganz auf diesem Niveau, aber die beliebtesten Screenreader nähern sich an. Sie können sich eine Vorstellung von den Unterstützungsniveaus verschaffen, indem Sie sich den Artikel [WAI-ARIA Screenreader-Kompatibilität](https://www.powermapper.com/tests/screen-readers/aria/) von Powermapper ansehen.

In diesem Artikel werden wir nicht versuchen, jede WAI-ARIA-Funktion und ihre genauen Unterstützungsdetails abzudecken. Stattdessen werden wir die wichtigsten WAI-ARIA-Funktionen behandeln, die Sie kennen sollten; wenn wir keine Unterstützungsdetails erwähnen, können Sie davon ausgehen, dass die Funktion gut unterstützt wird. Wir werden alle Ausnahmen davon klar erwähnen.

> [!NOTE]
> Einige JavaScript-Bibliotheken unterstützen WAI-ARIA, indem sie beim Generieren von UI-Features wie komplexen Formularsteuerelementen ARIA-Attribute hinzufügen, um die Barrierefreiheit dieser Funktionen zu verbessern. Wenn Sie nach einer JavaScript-Lösung von Drittanbietern für die schnelle UI-Entwicklung suchen, sollten Sie die Barrierefreiheit der UI-Widgets als wichtigen Faktor in Ihre Wahl mit einbeziehen. Gute Beispiele sind jQuery UI (siehe [Über jQuery UI: Tiefgehende Barrierefreiheitsunterstützung](https://jqueryui.com/about/#deep-accessibility-support)), [ExtJS](https://www.sencha.com/products/extjs/) und [Dojo/Dijit](https://dojotoolkit.org/reference-guide/1.10/dijit/a11y/statement.html).

### Wann sollten Sie WAI-ARIA verwenden?

Wir haben bereits einige der Probleme besprochen, die zur Schaffung von WAI-ARIA geführt haben, aber im Wesentlichen gibt es vier Hauptbereiche, in denen WAI-ARIA nützlich ist:

- Wegweiser/Landmarken
  - : ARIAs [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)-Attributwerte können als Landmarken dienen, die entweder die Semantik von HTML-Elementen replizieren (z. B. {{htmlelement("nav")}}) oder über die HTML-Semantik hinausgehen, um Wegweiser zu verschiedenen Funktionsbereichen bereitzustellen, zum Beispiel `search`, `tablist`, `tab`, `listbox`, etc.
- Dynamische Inhaltsaktualisierungen
  - : Screenreader haben Schwierigkeiten, ständig wechselnde Inhalte zu melden; mit ARIA können wir `aria-live` verwenden, um Benutzern von Screenreadern mitzuteilen, wenn ein Inhaltsbereich dynamisch aktualisiert wird: zum Beispiel durch JavaScript auf der Seite [neue Inhalte vom Server abrufen und den DOM aktualisieren](/de/docs/Learn_web_development/Core/Scripting/Network_requests).
- Verbesserung der Tastaturzugänglichkeit
  - : Es gibt eingebettete HTML-Elemente, die über native Tastaturzugänglichkeit verfügen; wenn andere Elemente zusammen mit JavaScript verwendet werden, um ähnliche Interaktionen zu simulieren, leidet die Tastaturzugänglichkeit und die Rückmeldung von Screenreadern als Ergebnis. Wo dies unumgänglich ist, bietet WAI-ARIA die Möglichkeit, anderen Elementen den Fokus zu ermöglichen (mit `tabindex`).
- Zugänglichkeit von nicht-semantischen Steuerelementen
  - : Wenn eine Reihe von verschachtelten `<div>`s zusammen mit CSS/JavaScript verwendet wird, um ein komplexes UI-Feature zu erstellen, oder ein natives Steuerelement stark durch JavaScript erweitert/verändert wird, leidet die Zugänglichkeit – Benutzer von Screenreadern werden Schwierigkeiten haben herauszufinden, was die Funktion tut, wenn es keine Semantik oder andere Hinweise gibt. In solchen Situationen kann ARIA helfen, das Fehlende bereitzustellen, mit einer Kombination von Rollen wie `button`, `listbox` oder `tablist` und Eigenschaften wie `aria-required` oder `aria-posinset`, um zusätzliche Hinweise zur Funktionalität zu geben.

#### Sie sollten WAI-ARIA nur verwenden, wenn Sie es brauchen!

Die Verwendung der richtigen HTML-Elemente gibt Ihnen implizit die Rollen, die erforderlich sind, und Sie sollten _immer_ [native HTML-Features](/de/docs/Learn_web_development/Core/Accessibility/HTML) verwenden, um die erforderliche Semantik bereitzustellen, die Screenreader ihren Nutzern sagen, was vor sich geht. Manchmal ist dies nicht möglich, entweder weil Sie eingeschränkten Zugriff auf den Code haben, oder weil Sie etwas Komplexes erstellen, das kein einfaches HTML-Element zu seiner Implementierung hat. In solchen Fällen kann WAI-ARIA ein wertvolles Werkzeug zur Verbesserung der Barrierefreiheit sein.

Aber nochmals: verwenden Sie es nur, wenn es notwendig ist!

> [!NOTE]
> Stellen Sie auch sicher, dass Sie Ihre Seite mit einer Vielzahl von _echten_ Nutzern testen – nicht behinderte Personen, Personen, die Screenreader verwenden, Personen, die Tastaturnavigation verwenden, etc. Sie werden bessere Einblicke haben als Sie, wie gut es funktioniert.

## Praktische Implementierungen von WAI-ARIA

Im nächsten Abschnitt werden wir die vier Bereiche detaillierter betrachten, zusammen mit praktischen Beispielen. Bevor Sie weitermachen, sollten Sie ein Screenreader-Testsetup einrichten, damit Sie einige der Beispiele testen können, während Sie durchgehen.

Siehe unseren Abschnitt über [Screenreader-Tests](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers) für mehr Informationen.

### Wegweiser/Landmarken

WAI-ARIA fügt dem Browser das [`role`-Attribut](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) hinzu, das es ermöglicht, Elementen auf Ihrer Seite dort, wo sie benötigt werden, zusätzlichen semantischen Wert zu geben. Der erste Hauptbereich, in dem dies nützlich ist, ist das Bereitstellen von Informationen für Screenreader, damit deren Benutzer gängige Seitenelemente finden können. Dieses Beispiel hat die folgende Struktur:

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

Wenn Sie das Beispiel mit einem Screenreader in einem modernen Browser testen, erhalten Sie bereits einige nützliche Informationen. Zum Beispiel gibt Ihnen VoiceOver Folgendes:

- Beim `<header>`-Element – "banner, 2 items" (es enthält eine Überschrift und das `<nav>`).
- Beim `<nav>`-Element – "navigation 2 items" (es enthält eine Liste und ein Formular).
- Beim `<main>`-Element – "main 2 items" (es enthält einen Artikel und eine Seite).
- Beim `<aside>`-Element – "complementary 2 items" (es enthält eine Überschrift und eine Liste).
- Beim Suchformular-Eingabefeld – "Search query, insertion at beginning of text".
- Beim `<footer>`-Element – "footer 1 item".

Wenn Sie zum VoiceOver-Wegweiser-Menü gehen (zugänglich über VoiceOver-Taste + U und dann mit den Cursor-Tasten das Menü durchlaufen), werden Sie sehen, dass die meisten Elemente schön aufgelistet sind, sodass sie schnell zugänglich sind.

![Mac's VoiceOver Menü für schnelle Barrierefreiheit. Abschnitt Wegweiser und Liste der Wegweiser einschließlich Banner, Navigation, Main und Ergänzung.](landmarks-list.png)

Wir könnten hier jedoch noch besser werden. Das Suchformular ist ein wirklich wichtiger Wegweiser, den die Nutzer finden möchten, aber es wird im Wegweiser-Menü nicht aufgelistet oder als bemerkenswerter Wegweiser behandelt, abgesehen davon, dass der tatsächliche Eingabewert als Sucheingabe aufgerufen wird (`<input type="search">`).

Wir könnten es verbessern, indem wir die ARIA `role="search"` verwenden, aber die Verwendung des {{htmlelement("search")}}-Elements gibt der Form implizit diese Rolle.

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

Am wichtigsten ist, dass wir semantisches HTML verwendet haben, das der Seitenstruktur Bedeutung und Rollen verleiht, ohne unnötige [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)-Attribute zu unserer HTML-Struktur hinzuzufügen, die eine Struktur wie diese hat:

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

Wir haben Ihnen außerdem eine Bonusfunktion in diesem Beispiel gegeben – das {{htmlelement("input")}}-Element wurde mit dem Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) ausgestattet, das ihm ein beschreibendes Label gibt, das von einem Screenreader vorgelesen werden soll, obwohl wir kein {{htmlelement("label")}}-Element enthalten haben. In Fällen wie diesen ist dies sehr nützlich – ein solches Suchformular ist ein sehr häufiges, leicht erkennbares Feature, und die Hinzufügung eines visuellen Labels würde den Seitenentwurf stören.

```html
<input
  type="search"
  name="q"
  placeholder="Search query"
  aria-label="Search through site content" />
```

Wenn Sie dieses Beispiel jetzt mit VoiceOver betrachten, erhalten Sie einige Verbesserungen:

- Das Suchformular wird als separates Element aufgerufen, sowohl beim Durchsuchen der Seite als auch im Wegweiser-Menü.
- Der im Attribut `aria-label` enthaltene Text wird vorgelesen, wenn die Formulareingabe hervorgehoben ist.

Wenn Sie ältere Browser wie IE8 unterstützen müssen, lohnt es sich, ARIA-Rollen für diesen Zweck einzufügen. Und wenn aus irgendeinem Grund Ihre Seite nur mit `<div>`s erstellt wurde, sollten Sie definitiv die ARIA-Rollen hinzufügen, um diese dringend benötigte Semantik bereitzustellen!

Sie werden im Folgenden viel mehr über diese Semantik und die Stärke von ARIA-Eigenschaften/Attributen sehen, besonders im Abschnitt [Zugänglichkeit von nicht-semantischen Steuerelementen](#zugänglichkeit_von_nicht-semantischen_kontrollen). Schauen wir uns jetzt an, wie ARIA bei dynamischen Inhaltsaktualisierungen helfen kann.

### Dynamische Inhaltsaktualisierungen

In den DOM geladene Inhalte können mittels eines Screenreaders leicht zugänglich sein, von Textinhalten bis zum Alternativtext, der an Bilder angehängt ist. Traditionelle statische Websites mit weitgehend Textinhalten sind daher leicht zugänglich für Menschen mit Sehbehinderungen.

Das Problem ist, dass moderne Web-Apps oft nicht nur statischer Text sind – sie aktualisieren oft Teile der Seite, indem sie neue Inhalte vom Server abrufen (in diesem Beispiel verwenden wir ein statisches Array von Zitaten) und den DOM aktualisieren. Diese werden manchmal als **Live-Regionen** bezeichnet.

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

Dies funktioniert zwar, aber es ist nicht gut für die Barrierefreiheit – die Inhaltsaktualisierung wird von Screenreadern nicht erfasst, sodass ihre Benutzer nicht wissen, was vor sich geht. Dies ist ein eher triviales Beispiel, aber stellen Sie sich nur vor, Sie würden eine komplexe Benutzeroberfläche mit vielen ständig aktualisierten Inhalten erstellen, wie einen Chatraum, eine Strategie-Spieloberfläche oder eine live aktualisierende Einkaufswagenanzeige – es wäre unmöglich, die App auf eine effektive Weise zu nutzen, ohne irgendeine Art von Benachrichtigung über die Aktualisierungen zu haben.

WAI-ARIA bietet glücklicherweise einen nützlichen Mechanismus, um diese Benachrichtigungen bereitzustellen – die [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)-Eigenschaft. Wenn Sie dies auf ein Element anwenden, wird ein Screenreader den aktualisierten Inhalt vorlesen. Wie dringend der Inhalt vorgelesen wird, hängt vom Attributwert ab:

- `off`
  - : Standardwert. Aktualisierungen werden nicht angekündigt.
- `polite`
  - : Aktualisierungen sollten nur angekündigt werden, wenn der Benutzer untätig ist.
- `assertive`
  - : Aktualisierungen sollten dem Benutzer so schnell wie möglich angekündigt werden.

Hier aktualisieren wir das `<section>`-Öffnungstag wie folgt:

```html
<section aria-live="assertive">…</section>
```

Dadurch wird ein Screenreader den Inhalt lesen lassen, wenn er aktualisiert wird.

Eine weitere Überlegung ist hierbei – nur der aktualisierte Text wird vorgelesen. Es könnte schön sein, wenn wir auch immer die Überschrift vorlesen, damit sich der Benutzer daran erinnern kann, was vorgelesen wird. Hierfür können wir die [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)-Eigenschaft zur Sektion hinzufügen. Aktualisieren Sie Ihr `<section>`-Öffnungstag erneut, so:

```html
<section aria-live="assertive" aria-atomic="true">…</section>
```

Das Attribut `aria-atomic="true"` sagt Screenreadern, dass sie den gesamten Elementinhalt als eine atomare Einheit vorlesen sollen, nicht nur die aktualisierten Teile.

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
> Die [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)-Eigenschaft ist ebenfalls recht nützlich, um zu kontrollieren, was vorgelesen wird, wenn eine Live-Region aktualisiert wird. Sie können beispielsweise nur Inhaltszugaben oder -entfernungen vorlesen lassen.

### Verbesserung der Tastaturzugänglichkeit

Wie an einigen anderen Stellen im Modul besprochen, ist eine der großen Stärken von HTML hinsichtlich Barrierefreiheit die eingebaute Tastaturzugänglichkeit von Funktionen wie Buttons, Formularelementen und Links. In der Regel kann man mit der Tabulatortaste zwischen Steuerelementen wechseln, die Eingabe-/Returntaste zum Auswählen oder Aktivieren von Steuerelementen verwenden und gelegentlich andere Steuerungen bei Bedarf (z. B. die Auf- und Abwärtspfeile, um zwischen Optionen in einer `<select>`-Box zu wechseln).

Manchmal müssen Sie jedoch Code schreiben, der entweder unsemantische Elemente als Buttons (oder andere Arten von Steuerelementen) verwendet oder verwendbare Steuerelemente für nicht ganz den richtigen Zweck einsetzt. Sie könnten versuchen, einen schlechten Code zu reparieren, den Sie geerbt haben, oder Sie könnten eine Art komplexes Widget erstellen, das dies erfordert.

In Bezug auf nicht-fokussierbare Codes fokussierbar zu machen, erweitert WAI-ARIA das `tabindex`-Attribut mit einigen neuen Werten:

- `tabindex="0"` – wie oben angegeben, erlaubt dieser Wert Elementen, die normalerweise nicht tabbbar sind, tabbbar zu werden. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` – dies erlaubt nicht normal tabbbaren Elementen, programmgesteuert den Fokus zu erhalten, z. B. über JavaScript oder als Ziel von Links.

Wir haben dies ausführlicher besprochen und eine typische Implementierung in unserem HTML-Barrierefreiheit Artikel gezeigt – siehe [Rückbau der Tastaturzugänglichkeit](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in).

### Zugänglichkeit von nicht-semantischen Steuerelementen

Dies folgt auf den vorherigen Abschnitt – wenn eine Reihe von verschachtelten `<div>`s zusammen mit CSS/JavaScript verwendet wird, um ein komplexes UI-Feature zu erstellen, oder ein natives Steuerelement stark durch JavaScript erweitert/verändert wird, leidet nicht nur die Tastaturzugänglichkeit, sondern Benutzer von Screenreadern finden es schwierig, herauszufinden, was die Funktion tut, wenn es keine Semantik oder andere Hinweise gibt. In solchen Situationen kann ARIA helfen, diese fehlende Semantik bereitzustellen.

#### Formularvalidierung und Fehlermeldungen

Zuerst werfen wir einen Blick auf das Formularbeispiel, das wir zuerst in unserem CSS- und JavaScript-Barrierefreiheit Artikel behandelt haben (lesen Sie [Unaufdringlich bleiben](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#keeping_it_unobtrusive) für eine vollständige Wiederholung). Am Ende dieses Abschnitts zeigten wir, dass wir einige ARIA-Attribute auf dem Fehlermeldungskasten hinzugefügt haben, der alle Validierungsfehler anzeigt, wenn Sie versuchen, das Formular einzureichen:

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

- [`role="alert"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) macht das Element, auf das es angewendet wird, automatisch zu einer Live-Region, sodass Änderungen daran vorgelesen werden; es identifiziert es auch semantisch als eine Fehlermeldung (wichtige zeitlich/kontextuelle Informationen) und stellt eine bessere, barrierefreiere Möglichkeit dar, einem Benutzer eine Meldung zu übermitteln (modale Dialoge wie [`alert()`](/de/docs/Web/API/Window/alert)-Aufrufe haben mehrere Barrierefreiheitsprobleme; siehe [Popup-Fenster](https://webaim.org/techniques/javascript/other#popups) von WebAIM).
- Ein [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)-Wert von `all` weist den Screenreader an, den Inhalt der Fehlerliste vorzulesen, wenn Änderungen daran vorgenommen werden – d.h. wenn Fehler hinzugefügt oder entfernt werden. Dies ist nützlich, da der Benutzer wissen möchte, welche Fehler übrig sind, nicht nur, welche zur Liste hinzugefügt oder daraus entfernt wurden.

Wir könnten unsere ARIA-Nutzung weiter ausbauen und mehr Validierungshilfe bereitstellen. Was ist, wenn wir angeben, ob Felder überhaupt erforderlich sind und in welchem Bereich das Alter liegen sollte?

1. Nehmen Sie zu diesem Zeitpunkt eine Kopie unserer [`form-validation.html`](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html) und [`validation.js`](https://github.com/mdn/learning-area/blob/main/accessibility/css/validation.js) Dateien und speichern Sie sie in einem lokalen Verzeichnis.
2. Öffnen Sie beide in einem Texteditor und sehen Sie sich an, wie der Code funktioniert.
3. Zuerst fügen Sie einen Absatz direkt über dem öffnenden `<form>`-Tag wie den unten stehenden hinzu und markieren beide `<label>`s des Formulars mit einem Sternchen. Normalerweise markieren wir so erforderliche Felder für sehende Benutzer.

   ```html
   <p>Fields marked with an asterisk (*) are required.</p>
   ```

4. Dies ergibt visuell Sinn, aber es ist für Benutzer von Screenreadern nicht so leicht zu verstehen. Glücklicherweise bietet WAI-ARIA das [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)-Attribut, um den Screenreadern Hinweise zu geben, dass sie den Benutzern sagen sollen, dass Formulareingaben ausgefüllt werden müssen. Aktualisieren Sie die `<input>`-Elemente wie folgt:

   ```html
   <input type="text" name="name" id="name" aria-required="true" />

   <input type="number" name="age" id="age" aria-required="true" />
   ```

5. Wenn Sie das Beispiel jetzt speichern und es mit einem Screenreader testen, sollten Sie etwas hören wie "Geben Sie Ihren Namen ein Stern, erforderlich, Text bearbeiten".
6. Es wäre auch nützlich, wenn wir den Benutzern von Screenreadern und den sehenden Nutzern eine Vorstellung davon geben, wie der Alterswert aussehen soll. Dies wird oft als Tooltip oder als Platzhalter im Feld angezeigt. WAI-ARIA enthält zwar die Eigenschaften [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax), um Minimal- und Maximalwerte anzugeben, und Screenreader unterstützen die nativen `min`- und `max`-Attribute. Eine weitere gut unterstützte Funktion ist das HTML-`placeholder`-Attribut, das eine Nachricht enthalten kann, die im Eingabefeld angezeigt wird, wenn kein Wert eingegeben ist und von einigen Screenreadern vorgelesen wird. Aktualisieren Sie Ihr Zahlenfeld so:

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

Verwenden Sie immer ein {{HTMLelement('label')}} für jede Eingabe. Obwohl einige Screenreader den Platzhalter-Text ankündigen, tun das die meisten nicht. Akzeptable Substitutionen, um Formularsteuerelementen einen zugänglichen Namen zu geben, sind [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) und [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby). Aber das `<label>`-Element mit einem `for`-Attribut ist die bevorzugte Methode, da sie für alle Benutzer, einschließlich Mausbenutzer, Benutzerfreundlichkeit bietet.

> [!NOTE]
> Sie können das fertige Beispiel live sehen unter [`form-validation-updated.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-updated.html).

WAI-ARIA ermöglicht auch einige erweiterte Techniken zur Formularbeschriftung, über das klassische {{htmlelement("label")}}-Element hinaus. Wir haben bereits über die Verwendung der [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Eigenschaft gesprochen, um ein Label bereitzustellen, wenn wir nicht möchten, dass das Label für sehende Benutzer sichtbar ist (siehe den Abschnitt [Wegweiser/Landmarken](#wegweiserlandmarken) oben). Einige andere Beschriftungstechniken verwenden andere Eigenschaften wie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn Sie ein nicht-`<label>`-Element als Label bezeichnen möchten oder mehrere Formulareingaben mit demselben Label versehen möchten, und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby), wenn Sie zusätzliche Informationen mit einem Formulareingabefeld verknüpfen und ebenfalls vorlesen lassen möchten. Weitere Details finden Sie im Artikel [WebAIM's Advanced Form Labeling](https://webaim.org/techniques/forms/advanced).

Es gibt auch viele andere nützliche Eigenschaften und Zustände, um den Status von Formularelementen anzugeben. Zum Beispiel kann `aria-disabled="true"` verwendet werden, um anzuzeigen, dass ein Formularfeld deaktiviert ist. Viele Browser überspringen deaktivierte Felder, wodurch sie nicht von Screenreadern vorgelesen werden. In manchen Fällen wird ein deaktiviertes Element wahrgenommen, daher ist es eine gute Idee, dieses Attribut hinzuzufügen, um dem Screenreader mitzuteilen, dass ein deaktiviertes Formularfeld tatsächlich deaktiviert ist.

Wenn sich der deaktivierte Zustand eines Eingabefelds wahrscheinlich ändert, dann ist es ebenfalls eine gute Idee anzugeben, wann es passiert und was das Ergebnis ist. Zum Beispiel in unserem [`form-validation-checkbox-disabled.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-checkbox-disabled.html)-Demo gibt es ein Kontrollkästchen, das bei Aktivierung eine weitere Formulareingabe aktiviert, um zusätzliche Informationen einzugeben. Wir haben eine versteckte Live-Region eingerichtet:

```html
<p class="hidden-alert" aria-live="assertive"></p>
```

die durch absolute Positionierung aus der Sicht verborgen wird. Wenn dies angekreuzt/abgehakt wird, aktualisieren wir den Text in der versteckten Live-Region, um den Benutzern von Screenreadern mitzuteilen, was das Ergebnis des Ankreuzen dieses Kontrollkästchens ist, und auch den `aria-disabled`-Zustand und einige visuelle Indikatoren:

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

#### Nicht-semantische Buttons als Buttons beschreiben

Ein paar Mal in diesem Kurs haben wir bereits die native Zugänglichkeit von (und die Barrierefreiheitsprobleme bei der Verwendung anderer Elemente zur Vortäuschung) Buttons, Links oder Formularelemente erwähnt (siehe [Verwenden Sie semantische UI-Kontrollen, wo möglich](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible) im Artikel HTML-Barrierefreiheit und [Verbesserung der Tastaturzugänglichkeit](#verbesserung_der_tastaturzugänglichkeit) oben). Im Wesentlichen können Sie ohne allzu viel Mühe in vielen Fällen die Tastaturzugänglichkeit mit `tabindex` und etwas JavaScript wiederherstellen.

Aber was ist mit Screenreadern? Sie sehen die Elemente immer noch nicht als Buttons. Wenn wir unser [`fake-div-buttons.html`](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)-Beispiel in einem Screenreader testen, werden unsere gefälschten Buttons mit Sätzen wie "Click me!, Gruppe" gemeldet, was offensichtlich verwirrend ist.

Wir können dies mit einer WAI-ARIA-Rolle beheben. Machen Sie eine lokale Kopie von [`fake-div-buttons.html`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html), und fügen Sie [`role="button"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) zu jedem Button `<div>` hinzu, zum Beispiel:

```html
<div data-message="This is from the first button" tabindex="0" role="button">
  Click me!
</div>
```

Jetzt, wenn Sie dies mit einem Screenreader ausprobieren, werden Ihnen die Buttons mit Sätzen wie "Click me!, Button" gemeldet. Während dies viel besser ist, müssen Sie immer noch alle nativen Button-Funktionen hinzufügen, die Benutzer erwarten, wie z. B. die Behandlung von <kbd>Enter</kbd>- und Click-Events, wie im [`button`-Rolle-Dokument](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) erklärt.

> [!NOTE]
> Vergessen Sie jedoch nicht, dass die Verwendung des richtigen semantischen Elements, wo möglich, immer besser ist. Wenn Sie einen Button erstellen möchten und ein {{htmlelement("button")}}-Element verwenden können, sollten Sie ein {{htmlelement("button")}}-Element verwenden!

#### Benutzer durch komplexe Widgets führen

Es gibt eine ganze Reihe anderer [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles), die unsemantische Elementstrukturen als gängige UI-Features identifizieren können, die über das hinausgehen, was in HTML verfügbar ist, zum Beispiel [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role), [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role). Sie können mehrere nützliche Beispiele in der [Deque University Code Library](https://dequeuniversity.com/library/) sehen, um eine Vorstellung davon zu bekommen, wie solche Steuerelemente barrierefrei gemacht werden können.

Lassen Sie uns ein eigenes Beispiel durchgehen. Kehren wir zu unserer einfachen absolut positionierten Registerkartenoberfläche zurück (siehe [Verbergen von Dingen](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#hiding_things) in unserem CSS- und JavaScript-Barrierefreiheitsartikel), die Sie unter [Beispiel der Registerkarten-Infobox](/de/docs/Learn_web_development/Core/CSS_layout/Practical_positioning_examples#a_tabbed_info-box) finden.

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

In diesem Beispiel haben wir eine Kombination aus semantischen Elementen, aria Rollen und aria Attributen verwendet. Das erste davon ist, dass wir ein {{htmlelement("button")}}-Element als _Tab_ verwendet haben, was bedeutet, dass der Tab mittels Mausklick oder Tastatur mit den Tasten Leertaste oder Eingabe ausgewählt werden kann.

ARIA-Funktionen, die verwendet wurden, beinhalten:

- Neue Rollen — [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role), [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role)
  - : Diese identifizieren die wichtigen Bereiche der Registerkartenoberfläche – den Container für die Registerkarten, die Registerkarten selbst und die entsprechenden Bedientafeln.
- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
  - : Definiert, welcher Tab derzeit ausgewählt ist. Wenn unterschiedliche Registerkarten vom Benutzer ausgewählt werden, wird der Wert dieses Attributs auf den verschiedenen Registerkarten mittels JavaScript aktualisiert.
- `tabindex="-1"`
  - : `tabindex="-1"` nimmt das Element aus der Tab-Reihenfolge heraus. Da wir JavaScript verwenden, um dem Benutzer zu ermöglichen, die Registerkarten über die Tastatur oder Maus zu steuern, möchten wir nicht, dass der Benutzer die Tabulatortaste verwenden kann, um zu den Buttons zu navigieren.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Dieses Attribut identifiziert ein Element (durch seine `id`), das das Element bezeichnet, in diesem Beispiel wird der `<article>` durch den entsprechenden Tab oder `<button>` bezeichnet.
- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
  - : Dieses Attribut identifiziert ein Element (durch seine `id`), das durch das Element gesteuert wird, in diesem Beispiel wird der `<article>` durch den entsprechenden Tab oder `<button>` gesteuert.

Wir hätten `aria-hidden` verwenden können, um die Inhalte der Bedientafeln vor unterstützenden Technologien zu verbergen, aber wenn dieser Inhalt fokussierte Inhalte, wie Links, enthielt, wäre es dem Benutzer immer noch möglich, auf diesen Inhalt zuzugreifen, selbst wenn `aria-hidden=true` für die nicht-aktiven Tafeln gesetzt ist. In diesem Beispiel haben wir für die Tafeln, die den Tabs mit `aria-selected="false"` entsprechen, `class="is-hidden"` angewendet und verwenden CSS, um sie mit `display: none;` zu verbergen, was verhindert, dass der verborgene Inhalt tabbar wird.

In unseren Tests hat sich diese neue Struktur insgesamt verbessert. Die `<button>`s werden jetzt als Tabs erkannt (z. B. wird "tab" vom Screenreader gesprochen), der ausgewählte Tab wird durch "selected" angezeigt, das mit dem Tab-Namen vorgelesen wird und jedes nicht angezeigte von Tabs beachten kann nicht tabbar sein. Der Benutzer kann auch mittels Tastatur oder Maus durch die Tabs navigieren.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, dass Sie diese Informationen behalten haben, bevor Sie fortfahren – siehe [Testen Sie Ihre Fähigkeiten: WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA).

## Zusammenfassung

Dieser Artikel hat keineswegs alles abgedeckt, was in WAI-ARIA verfügbar ist, aber er sollte Ihnen genug Informationen gegeben haben, um zu verstehen, wie man es verwendet, und einige der häufigsten Muster zu erkennen, bei denen es erforderlich ist.

## Siehe auch

- [ARIA-Zustände und -Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes): Alle `aria-*` Attribute
- [WAI-ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles): Kategorien von ARIA-Rollen und die auf MDN behandelten Rollen
- [ARIA in HTML](https://www.w3.org/TR/html-aria/) auf W3C: Eine Spezifikation, die definiert, für welches HTML-Merkmal die Barrierefreiheit (ARIA)-Semantik implizit darauf angewendet wird, und die WAI-ARIA-Funktionen, die Sie darauf setzen können, wenn zusätzliche Semantik erforderlich ist
- [Deque University Code Library](https://dequeuniversity.com/library/): Eine Bibliothek mit wirklich nützlichen und praktischen Beispielen, die komplexe UI-Steuerelemente zeigen, die mit WAI-ARIA-Funktionen barrierefrei gemacht werden
- [WAI-ARIA-Autorierungspraxen](https://www.w3.org/WAI/ARIA/apg/) auf W3C: Ein sehr detailliertes Designmuster von der W3C, das erklärt, wie unterschiedliche Typen von komplexen UI-Steuerelementen implementiert werden können, während sie mit WAI-ARIA-Funktionen barrierefrei gemacht werden

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility")}}
