---
title: WAI-ARIA Grundlagen
short-title: WAI-ARIA
slug: Learn_web_development/Core/Accessibility/WAI-ARIA_basics
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility")}}

Im Anschluss an den vorherigen Artikel kann es manchmal schwierig sein, komplexe UI-Steuerelemente zu erstellen, die unsemantisches HTML und dynamisch aktualisierte JavaScript-Inhalte enthalten. WAI-ARIA ist eine Technologie, die bei solchen Problemen helfen kann, indem sie zusätzliche Semantik hinzufügt, die von Browsern und unterstützenden Technologien erkannt und genutzt werden kann, um Benutzern mitzuteilen, was vor sich geht. Hier zeigen wir, wie Sie es auf einer grundlegenden Ebene verwenden können, um die Zugänglichkeit zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, und bewährten Praktiken in Bezug auf Barrierefreiheit, wie sie in früheren Lektionen dieses Moduls gelehrt wurden.</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von WAI-ARIA — Bereitstellung von Semantik für ansonsten nicht-semantisches HTML, sodass AT-Benutzer die ihnen präsentierten Schnittstellen verstehen können.</li>
          <li>Die grundlegende Syntax — Rollen, Eigenschaften und Zustände.</li>
          <li>Landmarken und Signalisierung.</li>
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

Als Web-Apps komplexer und dynamischer wurden, tauchten neue Funktionalitäten und Probleme in Bezug auf Barrierefreiheit auf.

HTML führte beispielsweise eine Reihe von semantischen Elementen ein, um allgemeine Seitenfunktionen zu definieren ({{htmlelement("nav")}}, {{htmlelement("footer")}} usw.). Bevor diese verfügbar waren, benutzten Entwickler {{htmlelement("div")}}s mit IDs oder Klassen, z. B. `<div class="nav">`, aber diese waren problematisch, da es keine einfache Möglichkeit gab, eine bestimmte Seitenfunktion wie die Hauptnavigation programmatisch leicht zu finden.

Die anfängliche Lösung bestand darin, einen oder mehrere versteckte Links oben auf der Seite hinzuzufügen, um zur Navigation (oder etwas anderem) zu verlinken, zum Beispiel:

```html
<a href="#hidden" class="hidden">Skip to navigation</a>
```

Aber das ist immer noch nicht sehr präzise und kann nur verwendet werden, wenn der Screenreader von oben auf der Seite liest.

Ein weiteres Beispiel: Apps begannen, komplexe Steuerelemente wie Datumsauswähler zur Auswahl von Daten, Schieberegler zur Auswahl von Werten usw. zu verwenden. HTML bietet spezielle Eingabetypen, um solche Steuerelemente darzustellen:

```html
<input type="date" /> <input type="range" />
```

Diese wurden ursprünglich schlecht unterstützt und es war und ist immer noch schwierig, sie zu gestalten, was Designer und Entwickler dazu veranlasste, sich für benutzerdefinierte Lösungen zu entscheiden. Anstelle dieser nativen Funktionen verwenden einige Entwickler auf JavaScript basierende Bibliotheken, die solche Steuerelemente als eine Reihe von verschachtelten {{htmlelement("div")}}s generieren, die dann mit CSS gestylt und mit JavaScript gesteuert werden.

Das Problem dabei ist, dass sie visuell funktionieren, aber Screenreader überhaupt keinen Sinn darin sehen können, was sie sind, und deren Benutzer erhalten lediglich mitgeteilt, dass sie eine Ansammlung von Elementen ohne Semantik sehen, die beschreibt, was sie bedeuten.

### WAI-ARIA tritt in Erscheinung

[WAI-ARIA](https://www.w3.org/TR/wai-aria/) (Web Accessibility Initiative - Accessible Rich Internet Applications) ist eine Spezifikation, die von der W3C geschrieben wurde und eine Reihe zusätzlicher HTML-Attribute definiert, die auf Elemente angewendet werden können, um zusätzliche Semantik bereitzustellen und die Barrierefreiheit dort zu verbessern, wo sie fehlt. In der Spezifikation werden drei Hauptmerkmale definiert:

- [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Diese definieren, was ein Element ist oder macht. Viele davon sind sogenannte Landmarkenrollen, die weitgehend den semantischen Wert von Strukturelementen duplizieren, wie `role="navigation"` ({{htmlelement("nav")}}), `role="banner"` (Dokument {{htmlelement("header")}}), `role="complementary"` ({{htmlelement("aside")}}) oder `role="search"` ({{htmlelement("search")}}). Einige andere Rollen beschreiben unterschiedliche Seitenstrukturen, die keine Elemente haben, die diesen Rollen entsprechen, wie `role="tablist"` und `role="tabpanel"`, die häufig in Benutzeroberflächen vorkommen.
- Eigenschaften
  - : Diese definieren Eigenschaften von Elementen, die verwendet werden können, um diesen zusätzliche Bedeutung oder Semantik zu verleihen. Zum Beispiel gibt `aria-required="true"` an, dass ein Formulareingabefeld ausgefüllt werden muss, um gültig zu sein, während `aria-labelledby="label"` es Ihnen ermöglicht, einem Element eine ID zuzuweisen und es dann als Beschriftung für alles andere auf der Seite, einschließlich mehrerer Elemente, zu referenzieren, was mit `<label for="input">` nicht möglich ist. Zum Beispiel könnten Sie `aria-labelledby` verwenden, um anzugeben, dass eine in einem {{htmlelement("div")}} enthaltene Schlüsselbeschreibung die Beschriftung für mehrere Tabellenzellen ist, oder Sie könnten es als Alternative zu Bild-alt-Text verwenden, indem Sie vorhandene Informationen auf der Seite als Bild-alt-Text angeben, anstatt sie innerhalb des `alt`-Attributs zu wiederholen. Ein Beispiel hierfür finden Sie unter [Textalternative](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives).
- Zustände
  - : Besondere Eigenschaften, die die aktuellen Bedingungen von Elementen definieren, wie `aria-disabled="true"`, was einem Screenreader anzeigt, dass ein Formulareingabefeld derzeit deaktiviert ist. Zustände unterscheiden sich von Eigenschaften darin, dass Eigenschaften während des gesamten Lebenszyklus einer App nicht geändert werden, während sich Zustände ändern können, meist programmatisch über JavaScript.

Ein wichtiger Punkt bei WAI-ARIA-Attributen ist, dass sie nichts über die Webseite hinaus beeinflussen, außer den Informationen, die über die Barrierefreiheits-APIs des Browsers bereitgestellt werden (woher Screenreader ihre Informationen erhalten). WAI-ARIA beeinflusst nicht die Seitenstruktur, den DOM usw., obwohl die Attribute nützlich zum Auswählen von Elementen durch CSS sein können.

> [!NOTE]
> Eine nützliche Liste aller ARIA-Rollen und deren Verwendung, mit Links zu weiteren Informationen, finden Sie in der WAI-ARIA-Spezifikation — siehe [Definition der Rollen](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) — auf dieser Seite — siehe [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles).
>
> Die Spezifikation enthält auch eine Liste aller Eigenschaften und Zustände, mit Links zu weiteren Informationen — siehe [Definitionen von Zuständen und Eigenschaften (alle `aria-*`-Attribute)](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def).

### Wo wird WAI-ARIA unterstützt?

Diese Frage lässt sich nicht einfach beantworten. Es ist schwierig, eine abschließende Ressource zu finden, die angibt, welche Funktionen von WAI-ARIA unterstützt werden und wo, weil:

1. Es gibt viele Funktionen in der WAI-ARIA-Spezifikation.
2. Es gibt viele Kombinationen von Betriebssystemen, Browsern und Screenreadern zu berücksichtigen.

Dieser letzte Punkt ist entscheidend — Um überhaupt einen Screenreader verwenden zu können, muss Ihr Betriebssystem Browser unterstützen, die die notwendigen Barrierefreiheits-APIs haben, um die Informationen zugänglich zu machen, die Screenreader benötigen, um ihre Arbeit zu erledigen. Die meisten beliebten Betriebssysteme haben ein oder zwei Browser, mit denen Screenreader arbeiten können. Die Paciello Group hat einen recht aktuellen Artikel, der Daten dazu liefert — siehe [Rough Guide: browsers, operating systems and screen reader support updated](https://www.tpgi.com/rough-guide-browsers-operating-systems-and-screen-reader-support-updated/).

Anschließend müssen Sie berücksichtigen, ob die in Frage kommenden Browser ARIA-Funktionen unterstützen und über ihre APIs zugänglich machen, aber auch, ob Screenreader diese Informationen erkennen und sie ihren Benutzern auf eine nützliche Weise präsentieren.

1. Browserunterstützung ist nahezu universell.
2. Screenreader-Unterstützung für ARIA-Funktionen ist noch nicht ganz auf diesem Niveau, aber die beliebtesten Screenreader nähern sich an. Sie können eine Vorstellung von den Unterstützungsstufen bekommen, indem Sie sich den Artikel [WAI-ARIA Screen reader compatibility](https://www.powermapper.com/tests/screen-readers/aria/) von Powermapper ansehen.

In diesem Artikel werden wir nicht versuchen, jede WAI-ARIA-Funktion und ihre genauen Unterstützungsdetails abzudecken. Stattdessen werden wir die kritischsten WAI-ARIA-Funktionen behandeln, die Sie kennen sollten; wenn wir keine Unterstützungsdetails erwähnen, können Sie davon ausgehen, dass die Funktion gut unterstützt wird. Wir werden deutlich Ausnahmen davon erwähnen.

> [!NOTE]
> Einige JavaScript-Bibliotheken unterstützen WAI-ARIA, was bedeutet, dass sie beim Generieren von Benutzeroberflächenfunktionen wie komplexen Formularsteuerelementen ARIA-Attribute hinzufügen, um die Zugänglichkeit dieser Funktionen zu verbessern. Wenn Sie eine Drittanbieter-JavaScript-Lösung für die schnelle UI-Entwicklung in Betracht ziehen, sollten Sie die Zugänglichkeit ihrer UI-Widgets als wichtigen Faktor bei Ihrer Wahl berücksichtigen. Gute Beispiele sind jQuery UI (siehe [Über jQuery UI: Tiefgreifende Barrierefreiheitunterstützung](https://jqueryui.com/about/#deep-accessibility-support)), [ExtJS](https://www.sencha.com/products/extjs/) und [Dojo/Dijit](https://dojotoolkit.org/reference-guide/1.10/dijit/a11y/statement.html).

### Wann sollten Sie WAI-ARIA verwenden?

Wir haben einige der Probleme behandelt, die die Schaffung von WAI-ARIA angeregt haben, aber im Wesentlichen gibt es vier Hauptbereiche, in denen WAI-ARIA nützlich ist:

- Wegweiser/Landmarken
  - : Die [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)-Attributwerte von ARIA können als Landmarken fungieren, die entweder die Semantik von HTML-Elementen replizieren (z.B. {{htmlelement("nav")}}), oder über HTML-Semantik hinausgehen, um Wegweiser zu verschiedenen funktionalen Bereichen bereitzustellen, zum Beispiel `search`, `tablist`, `tab`, `listbox` usw.
- Dynamische Inhaltsaktualisierungen
  - : Screenreader haben oft Schwierigkeiten, ständig wechselnde Inhalte zu melden; mit ARIA können wir `aria-live` verwenden, um Screenreader-Benutzern zu informieren, wenn ein Inhaltsbereich dynamisch aktualisiert wird: zum Beispiel durch JavaScript auf der Seite [das neue Inhalte vom Server abruft und den DOM aktualisiert](/de/docs/Learn_web_development/Core/Scripting/Network_requests).
- Verbesserung der Tastaturzugänglichkeit
  - : Es gibt eingebaute HTML-Elemente mit nativer Tastaturzugänglichkeit; wenn andere Elemente zusammen mit JavaScript verwendet werden, um ähnliche Interaktionen zu simulieren, leidet die Tastaturzugänglichkeit und das Screenreader-Reporting. Wo dies unvermeidlich ist, bietet WAI-ARIA eine Möglichkeit, anderen Elementen den Erhalt des Fokus zu ermöglichen (Verwendung von `tabindex`).
- Zugänglichkeit von unsemantischen Steuerelementen
  - : Wenn eine Reihe von verschachtelten `<div>`s zusammen mit CSS/JavaScript verwendet wird, um eine komplexe UI-Funktion zu erstellen, oder ein nativer Steuerelement erheblich verbessert/verändert wird über JavaScript, kann die Zugänglichkeit leiden — Screenreader-Benutzer werden Schwierigkeiten haben zu ermitteln, was die Funktion tut, wenn keine Semantik oder andere Hinweise vorliegen. In diesen Situationen kann ARIA helfen, das Fehlende zu liefern, mit einer Kombination von Rollen wie `button`, `listbox` oder `tablist` und Eigenschaften wie `aria-required` oder `aria-posinset`, um weitere Hinweise auf die Funktionalität zu geben.

#### Sie sollten WAI-ARIA nur dann verwenden, wenn Sie es brauchen!

Die Verwendung der richtigen HTML-Elemente gibt Ihnen implizit die Rollen, die benötigt werden, und Sie sollten _immer_ [native HTML-Funktionen](/de/docs/Learn_web_development/Core/Accessibility/HTML) verwenden, um die Semantik bereitzustellen, die von Screenreadern benötigt wird, um den Benutzern mitzuteilen, was vor sich geht. Manchmal ist dies nicht möglich, entweder weil Sie wenig Kontrolle über den Code haben oder weil Sie etwas Komplexes erstellen, das nicht einfach mit einem HTML-Element umzusetzen ist. In solchen Fällen kann WAI-ARIA ein wertvolles Werkzeug zur Verbesserung der Barrierefreiheit sein.

Aber nochmals, verwenden Sie es nur, wenn es nötig ist!

> [!NOTE]
> Versuchen Sie auch sicherzustellen, dass Sie Ihre Website mit einer Vielzahl von _echten_ Benutzern testen — nicht behinderte Personen, Personen, die Screenreader verwenden, Personen, die Tastaturnavigation verwenden usw. Sie werden bessere Einblicke haben als Sie, wie gut es funktioniert.

## Praktische WAI-ARIA-Implementierungen

Im nächsten Abschnitt betrachten wir die vier Bereiche genauer, zusammen mit praktischen Beispielen. Bevor Sie fortfahren, sollten Sie sich eine Bildschirmlesegeräte-Testumgebung einrichten, sodass Sie einige der Beispiele testen können, während Sie diese durchgehen.

Siehe unseren Abschnitt über [Testen von Screenreadern](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers) für weitere Informationen.

### Wegweiser/Landmarken

WAI-ARIA fügt den Browsern das [`role`-Attribut](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) hinzu, was es Ihnen ermöglicht, Elementen auf Ihrer Seite überall dort, wo sie benötigt werden, zusätzlichen semantischen Wert zu verleihen. Der erste wichtige Bereich, in dem dies nützlich ist, ist das Bereitstellen von Informationen für Screenreader, damit ihre Benutzer gängige Seitenelemente finden können. Dieses Beispiel hat die folgende Struktur:

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

Wenn Sie das Beispiel mit einem Screenreader in einem modernen Browser testen, erhalten Sie bereits einige nützliche Informationen. Beispielsweise gibt Ihnen VoiceOver Folgendes:

- Beim `<header>`-Element — "Banner, 2 Elemente" (es enthält eine Überschrift und die `<nav>`).
- Beim `<nav>`-Element — "Navigation 2 Elemente" (es enthält eine Liste und ein Formular).
- Beim `<main>`-Element — "Hauptteil 2 Elemente" (es enthält einen Artikel und einen Zusatz).
- Beim `<aside>`-Element — "Ergänzend 2 Elemente" (es enthält eine Überschrift und eine Liste).
- Beim Suchformulareingabefeld — "Suchabfrage, Einfügemodus am Anfang des Textes".
- Beim `<footer>`-Element — "Fußzeile 1 Element".

Wenn Sie zu VoiceOvers Landmarken-Menü gehen (zugänglich über VoiceOver-Taste + U und dann die Cursor-Tasten verwenden, um die Menüoptionen zu durchlaufen), werden die meisten der Elemente schön aufgelistet, sodass sie schnell aufgerufen werden können.

![Mac's VoiceOver menu for quick accessibility. Landmarks header and landmarks list including banner, navigation, main, and complementary.](landmarks-list.png)

Wir könnten hier jedoch noch etwas verbessern. Das Suchformular ist eine wirklich wichtige Landmarke, die die Leute finden möchten, aber es wird im Landmarken-Menü nicht aufgelistet oder wie eine bedeutende Landmarke behandelt, abgesehen davon, dass das tatsächliche Eingabefeld als Sucheingabe bezeichnet wird (`<input type="search">`).

Wir könnten es verbessern, indem wir die ARIA `role="search"` verwenden, aber die Verwendung des {{htmlelement("search")}}-Elements gibt diesem Formular implizit diese Rolle.

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

Am wichtigsten ist, dass wir semantisches HTML verwendet haben, das Bedeutung und Rollen für die Struktur der Seite gibt, ohne unnötige [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)-Attribute zu unserer HTML-Struktur hinzuzufügen, die eine Struktur wie diese hat:

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

Wir haben Ihnen in diesem Beispiel auch ein Bonus-Feature gegeben — das {{htmlelement("input")}}-Element hat das Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) erhalten, welches ihm ein beschreibendes Label gibt, das von einem Screenreader vorgelesen wird, obwohl wir kein {{htmlelement("label")}}-Element eingefügt haben. In solchen Fällen ist dies sehr nützlich — ein Suchformular wie dieses ist eine sehr häufige, leicht erkennbare Funktion, und das Hinzufügen eines visuellen Labels würde das Seitenlayout stören.

```html
<input
  type="search"
  name="q"
  placeholder="Search query"
  aria-label="Search through site content" />
```

Wenn wir nun VoiceOver verwenden, um dieses Beispiel zu betrachten, erhalten wir einige Verbesserungen:

- Das Suchformular wird als separates Element aufgerufen, sowohl beim Durchsuchen der Seite als auch im Landmarken-Menü.
- Der im `aria-label`-Attribut enthaltene Labeltext wird vorgelesen, wenn das Formulareingabefeld hervorgehoben ist.

Wenn Sie ältere Browser wie IE8 unterstützen müssen, lohnt es sich, WAI-ARIA-Rollen aus diesem Grund hinzuzufügen. Und wenn Ihre Seite aus irgendeinem Grund ausschließlich aus `<div>`s besteht, sollten Sie auf jeden Fall die WAI-ARIA-Rollen hinzufügen, um diese dringend benötigte Semantik bereitzustellen!

Sie werden im Folgenden viel mehr über diese Semantik und die Macht von ARIA-Eigenschaften/Attributen sehen, insbesondere im Abschnitt [Zugänglichkeit von unsemantischen Steuerelementen](#zugänglichkeit_von_unsemantischen_steuerelementen). Aber lassen Sie uns jetzt ansehen, wie ARIA bei dynamischen Inhaltsaktualisierungen helfen kann.

### Dynamische Inhaltsaktualisierungen

Inhalte, die in den DOM geladen werden, können leicht mit einem Screenreader abgerufen werden, von Textinhalten bis zu alternativem Text, der an Bilder angehängt ist. Traditionelle statische Websites mit größtenteils Textinhalten sind daher einfach zugänglich für Menschen mit Sehbehinderungen.

Das Problem ist, dass moderne Web-Apps oft nicht nur statischer Text sind — sie aktualisieren oft Teile der Seite, indem sie neue Inhalte vom Server abrufen (in diesem Beispiel verwenden wir ein statisches Array von Zitaten) und den DOM aktualisieren. Diese werden manchmal als **Live-Bereiche** bezeichnet.

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

Das funktioniert soweit gut, aber es ist nicht gut für die Barrierefreiheit — die Inhaltsaktualisierung wird von Screenreadern nicht erkannt, sodass deren Benutzer nicht wissen, was vor sich geht. Dies ist ein ziemlich triviales Beispiel, aber stellen Sie sich nur vor, Sie würden eine komplexe Benutzeroberfläche mit vielen ständig aktualisierten Inhalten erstellen, wie ein Chatraum, oder eine Strategie-Spieloberfläche oder eine live aktualisierte Anzeige eines Einkaufswagens — die App wäre unmöglich effektiv zu verwenden, ohne eine Art von Möglichkeit zur Benachrichtigung der Benutzer über die Aktualisierungen.

Glücklicherweise bietet WAI-ARIA einen nützlichen Mechanismus, um diese Benachrichtigungen bereitzustellen — die [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)-Eigenschaft. Durch Anwenden dieser auf ein Element werden die aktualisierten Inhalte vom Screenreader vorgelesen. Wie dringend der Inhalt vorgelesen wird, hängt vom Attributwert ab:

- `off`
  - : Der Standardwert. Aktualisierungen sollten nicht angekündigt werden.
- `polite`
  - : Aktualisierungen sollten nur angekündigt werden, wenn der Benutzer inaktiv ist.
- `assertive`
  - : Aktualisierungen sollten den Benutzern so schnell wie möglich angekündigt werden.

Hier aktualisieren wir den `<section>`-Eröffnungstag wie folgt:

```html
<section aria-live="assertive">…</section>
```

Dadurch wird ein Screenreader den Inhalt vorlesen, sobald er aktualisiert wird.

Eine zusätzliche Überlegung hierbei ist — nur der aktualisierte Text wird vorgelesen. Es wäre vielleicht schön, wenn wir die Überschrift immer mitlesen lassen würden, damit sich der Benutzer daran erinnern kann, was vorgelesen wird. Dazu können wir die [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)-Eigenschaft auf die Sektion anwenden. Aktualisieren Sie Ihr `<section>`-Eröffnungstag wieder, wie folgt:

```html
<section aria-live="assertive" aria-atomic="true">…</section>
```

Das `aria-atomic="true"`-Attribut weist Screenreader an, die gesamten Inhalte des Elements als eine atomare Einheit vorzulesen, nicht nur die Teile, die aktualisiert wurden.

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
> Die [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)-Eigenschaft ist auch sehr nützlich, um zu steuern, was vorgelesen wird, wenn ein Live-Bereich aktualisiert wird. Sie können beispielsweise nur Inhaltsergänzungen oder -entfernungen vorlesen lassen.

### Verbesserung der Tastaturzugänglichkeit

Wie in einigen anderen Teilen des Moduls besprochen, ist eine der Stärken von HTML in Bezug auf die Barrierefreiheit die eingebaute Tastaturzugänglichkeit von Funktionen wie Tasten, Formularelementen und Links. Normalerweise können Sie die Tabulatortaste verwenden, um zwischen den Steuerelementen zu wechseln, die Eingabetaste, um Steuerelemente auszuwählen oder zu aktivieren, und gelegentlich andere Steuerungen nach Bedarf (etwa die Auf- und Abwärtspfeiltasten, um zwischen Optionen in einem `<select>`-Feld zu wechseln).

Manchmal müssen Sie jedoch möglicherweise Code schreiben, der entweder nicht-semantische Elemente als Tasten (oder andere Steuerelementtypen) verwendet oder fokusfähige Steuerelemente für einen nicht ganz richtigen Zweck einsetzt. Sie könnten versuchen, schlechten geerbten Code zu reparieren, oder Sie könnten ein komplexes Widget erstellen, das es erfordert.

In Bezug auf nicht-fokusfähigen Code, der fokussierbar gemacht wird, erweitert WAI-ARIA das `tabindex`-Attribut mit einigen neuen Werten:

- `tabindex="0"` — wie oben angegeben, ermöglicht dieser Wert Elementen, die normalerweise nicht fokussierbar sind, fokussierbar zu werden. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — dies ermöglicht nicht-fokusfähigen Elementen, programmatisch Fokus zu erhalten, z. B. über JavaScript oder als Ziel von Links.

Wir haben dies im Detail diskutiert und eine typische Implementierung in unserem HTML-Barrierefreiheitsartikel gezeigt — siehe [Eingebettete Tastaturzugänglichkeit wiederherstellen](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in).

### Zugänglichkeit von unsemantischen Steuerelementen

Dies knüpft an den vorherigen Abschnitt an — wenn eine Reihe von verschachtelten `<div>`s zusammen mit CSS/JavaScript verwendet wird, um ein komplexes UI-Feature zu erstellen, oder ein nativer Steuerelement erheblich verbessert/verändert wird über JavaScript, leidet nicht nur die Tastaturzugänglichkeit, sondern auch Screenreader-Benutzer werden Schwierigkeiten haben zu ermitteln, was die Funktion tut, wenn keine Semantik oder andere Hinweise vorliegen. In solchen Situationen kann ARIA helfen, die fehlende Semantik bereitzustellen.

#### Formularvalidierung und Fehlermeldungen

Erstens, lassen Sie uns das Formularbeispiel erneut anschauen, das wir zuerst in unserem CSS- und JavaScript-Barrierefreiheitsartikel betrachtet haben (lesen Sie [Es unauffällig halten](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#keeping_it_unobtrusive) für eine vollständige Wiederholung). Am Ende dieses Abschnitts haben wir gezeigt, dass wir einige ARIA-Attribute in das Fehlermeldungsfeld aufgenommen haben, das Validierungsfehler anzeigt, wenn Sie versuchen, das Formular zu übermitteln:

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

- [`role="alert"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) verwandelt das Element, auf das es angewendet wird, automatisch in einen Live-Bereich, sodass Änderungen daran vorgelesen werden; es identifiziert es auch semantisch als Warnnachricht (wichtige zeit-/kontextsensitive Information) und stellt eine bessere, zugänglichere Möglichkeit dar, einem Benutzer eine Warnung zu liefern (Modal-Dialoge wie [`alert()`](/de/docs/Web/API/Window/alert)-Aufrufe haben eine Reihe von Barrierefreiheitsproblemen; siehe [Popup-Fenster](https://webaim.org/techniques/javascript/other#popups) von WebAIM).
- Ein [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)-Wert von `all` weist den Screenreader an, den Inhalt der Fehlerliste vorzulesen, wenn Änderungen daran vorgenommen werden — d.h. wenn Fehler hinzugefügt oder entfernt werden. Dies ist nützlich, da der Benutzer wissen möchte, welche Fehler noch vorhanden sind, nicht nur, was zur Liste hinzugefügt oder daraus entfernt wurde.

Wir könnten unser ARIA verwenden sogar weiter ausbauen und zusätzliche Validierungshilfen bieten. Wie wäre es, bereits im Vorfeld anzugeben, ob Felder erforderlich sind und welchen Bereich das Alter haben sollte?

1. Nehmen Sie an dieser Stelle eine Kopie unserer [`form-validation.html`](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html) und [`validation.js`](https://github.com/mdn/learning-area/blob/main/accessibility/css/validation.js)-Dateien und speichern Sie sie in einem lokalen Verzeichnis.
2. Öffnen Sie sie beide in einem Texteditor und sehen Sie sich an, wie der Code funktioniert.
3. Fügen Sie zunächst einen Absatz direkt über dem `<form>`-Starttag hinzu, wie der untenstehende, und markieren Sie beide Formular-`<label>`s mit einem Sternchen. In der Regel kennzeichnen wir auf diese Weise erforderliche Felder für sehende Benutzer.

   ```html
   <p>Fields marked with an asterisk (*) are required.</p>
   ```

4. Dies ergibt visuell Sinn, ist aber nicht so leicht für Screenreader-Benutzer zu verstehen. Glücklicherweise bietet WAI-ARIA das [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)-Attribut, um Screenreader aufzufordern, Benutzern mitzuteilen, dass Formulareingaben ausgefüllt werden müssen. Aktualisieren Sie die `<input>`-Elemente wie folgt:

   ```html
   <input type="text" name="name" id="name" aria-required="true" />

   <input type="number" name="age" id="age" aria-required="true" />
   ```

5. Wenn Sie das Beispiel jetzt speichern und mit einem Screenreader testen, sollten Sie so etwas wie "Geben Sie Ihren Namen ein Sternchen, erforderlich, Text bearbeiten" hören.
6. Es könnte auch nützlich sein, wenn wir Screenreader-Benutzern und sehenden Benutzern eine Vorstellung davon geben, welchen Wert das Alter haben sollte. Dies wird oft als Tooltip oder Platzhalter im Formularfeld angezeigt. WAI-ARIA enthält [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)- und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)-Eigenschaften, um Minimal- und Maximalwerte anzugeben, und Screenreader unterstützen die nativen Attribute `min` und `max`. Ein weiteres gut unterstütztes Feature ist das HTML-`placeholder`-Attribut, das eine Nachricht enthalten kann, die in der Eingabe angezeigt wird, wenn kein Wert eingegeben wurde und von einigen Screenreadern vorgelesen wird. Aktualisieren Sie Ihr Zahleneingabefeld wie folgt:

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

Fügen Sie immer ein {{HTMLelement('label')}} für jede Eingabe hinzu. Während einige Screenreader den Platzhaltertext ankündigen, tun die meisten dies nicht. Akzeptable Ersetzungen, um Formularelemente mit einem zugänglichen Namen zu versehen, umfassen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) und [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby). Aber das `<label>`-Element mit einem `for`-Attribut ist die bevorzugte Methode, da es die Benutzerfreundlichkeit für alle Benutzer, einschließlich Mausbenutzern, bietet.

> [!NOTE]
> Sie können das fertige Beispiel live unter [`form-validation-updated.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-updated.html) sehen.

WAI-ARIA ermöglicht auch einige fortgeschrittene Techniken zur Formbeschriftung, über das klassische {{htmlelement("label")}}-Element hinaus. Wir haben bereits darüber gesprochen, wie Sie mit der [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Eigenschaft eine Beschriftung bereitstellen, wenn wir möchten, dass die Bezeichnung für sehende Benutzer nicht sichtbar ist (siehe den Abschnitt [Wegweiser/Landmarken](#signpostslandmarks), oben). Einige andere Beschriftungstechniken verwenden andere Eigenschaften wie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn Sie ein nicht-`<label>`-Element als Beschriftung festlegen oder mehrere Formulareingaben mit derselben Beschriftung versehen möchten, und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby), wenn Sie andere Informationen mit einer Formulareingabe verknüpfen möchten und auch vorgelesen werden sollen. Siehe [WebAIMs Artikel über fortgeschrittenes Form-Labeling](https://webaim.org/techniques/forms/advanced) für mehr Details.

Es gibt auch viele andere nützliche Eigenschaften und Zustände, etwa zur Angabe des Status von Formelementen. Zum Beispiel kann `aria-disabled="true"` verwendet werden, um anzugeben, dass ein Formularelement deaktiviert ist. Viele Browser überspringen deaktivierte Formularelemente, was dazu führt, dass sie von Screenreadern nicht vorgelesen werden. In einigen Fällen wird ein deaktiviertes Element wahrgenommen, es ist also eine gute Idee, dieses Attribut einzuschließen, um dem Screenreader mitzuteilen, dass ein deaktiviertes Formularsteuerelement tatsächlich deaktiviert ist.

Wenn der deaktivierte Zustand einer Eingabe sich wahrscheinlich ändert, ist es auch eine gute Idee, darauf hinzuweisen, wenn dies geschieht und was das Ergebnis ist. Zum Beispiel gibt es in unserer [Beispieldemo `form-validation-checkbox-disabled.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-checkbox-disabled.html), ein Kontrollkästchen, das beim Aktivieren ein weiteres Formulareingabefeld aktiviert, um weitere Informationen einzugeben. Wir haben einen versteckten Live-Bereich eingerichtet:

```html
<p class="hidden-alert" aria-live="assertive"></p>
```

welcher durch absolute Positionierung ausgeblendet ist. Wenn dies aktiviert/deaktiviert wird, aktualisieren wir den Text im versteckten Live-Bereich, um Screenreader-Benutzern mitzuteilen, was das Ergebnis des Aktivierens dieses Kontrollkästchens ist, sowie den `aria-disabled`-Zustand und einige visuelle Indikatoren aktualisieren:

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

#### Beschreibung nicht-semantischer Tasten als Tasten

Mehrmals in diesem Kurs haben wir bereits die native Barrierefreiheit (und die Barrierefreiheitsprobleme bei der Verwendung anderer Elemente zum Fälschen) von Tasten, Links oder Formelementen erwähnt (siehe [UI-Steuerelemente](/de/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls) im HTML-Kompatibilitätsartikel und [Verbesserung der Tastaturzugänglichkeit](#verbesserung_der_tastaturzugänglichkeit), oben). Grundsätzlich können Sie die Tastaturzugänglichkeit in vielen Fällen ohne allzu viele Probleme wiederherstellen, indem Sie `tabindex` und ein bisschen JavaScript verwenden.

Aber was ist mit Screenreadern? Sie erkennen die Elemente immer noch nicht als Tasten. Wenn wir unser [Beispiel für `fake-div-buttons.html`](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) in einem Screenreader testen, werden unsere Fake-Buttons mit Phrasen wie "Klick mich!, Gruppe" gemeldet, was natürlich verwirrend ist.

Wir können dies mit einer WAI-ARIA-Rolle beheben. Erstellen Sie eine lokale Kopie von [`fake-div-buttons.html`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html), und fügen Sie [`role="button"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) zu jedem Tasten-`<div>` hinzu, zum Beispiel:

```html
<div data-message="This is from the first button" tabindex="0" role="button">
  Click me!
</div>
```

Wenn Sie das nun mit einem Screenreader ausprobieren, wird die Schaltflächen mit Phrasen wie "Klick mich!, Taste" gemeldet. Während dies viel besser ist, müssen Sie immer noch alle nativen Tastenfunktionen hinzufügen, die Benutzer erwarten, wie z. B. die Behandlung von <kbd>enter</kbd> und Klick-Ereignissen, wie im [`button`-Rolen-Dokumentation](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) erklärt.

> [!NOTE]
> Vergessen Sie jedoch nicht, dass die Verwendung des richtigen semantischen Elements, wo immer möglich, immer besser ist. Wenn Sie eine Taste erstellen möchten und ein {{htmlelement("button")}}-Element verwenden können, sollten Sie ein {{htmlelement("button")}}-Element verwenden!

#### Anwender durch komplexe Widgets führen

Es gibt eine ganze Reihe anderer [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles), die nicht-semantische Elementstrukturen als gängige UI-Funktionen identifizieren können, welche über das hinausgehen, was in Standard-HTML verfügbar ist, wie zum Beispiel [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role), [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role). Sie können mehrere nützliche Beispiele in der [Deque university code library](https://dequeuniversity.com/library/) sehen, um Ihnen eine Vorstellung davon zu geben, wie solche Steuerungen barrierefrei gemacht werden können.

Lassen Sie uns ein eigenes Beispiel durchgehen. Wir kehren zu unserem einfachen absolut positionierten Registerkarteninterface zurück (siehe [Dinge verstecken](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#hiding_things) in unserem CSS- und JavaScript-Barrierefreiheitsartikel), das Sie bei unserem [tabbed info box example](/de/docs/Learn_web_development/Core/CSS_layout/Practical_positioning_examples#a_tabbed_info-box) finden können.

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

In diesem Beispiel haben wir eine Kombination aus semantischen Elementen, Aria-Rollen und Aria-Attributen verwendet. Das erste davon ist, dass wir ein {{htmlelement("button")}}-Element als _Tab_ verwendet haben, das bedeutet, dass die Registerkarte über einen Mausklick oder über die Tastatur mit Leertaste oder Eingabetaste ausgewählt werden kann.

Verwendete ARIA-Funktionen beinhalten:

- Neue Rollen — [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role), [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role)
  - : Diese identifizieren die wichtigen Bereiche des Registerkarten-Interfaces — den Container für die Registerkarten, die Registerkarten selbst und die entsprechenden Registerkartenbereiche.
- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
  - : Definiert, welche Registerkarte derzeit ausgewählt ist. Wenn Benutzer verschiedene Registerkarten auswählen, wird der Wert dieses Attributs auf den verschiedenen Registerkarten über JavaScript aktualisiert.
- `tabindex="-1"`
  - : `tabindex="-1"` nimmt das Element aus der Tabulatorreihenfolge heraus. Da wir JavaScript verwenden, um es dem Benutzer zu ermöglichen, die Registerkarten mit der Tastatur oder der Maus zu steuern, möchten wir nicht, dass der Benutzer in der Lage ist, die Tabulatortaste zu verwenden, um zu den Tasten zu navigieren.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Dieses Attribut identifiziert ein Element (durch seine `id`), das das Element beschriftet, in diesem Beispiel ist das `<article>` durch die entsprechende Registerkarte oder `<button>`beschriftet.
- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
  - : Dieses Attribut identifiziert ein Element (durch seine `id`), das von dem Element gesteuert wird, in diesem Beispiel wird das `<article>` durch die entsprechende Registerkarte oder `<button>` gesteuert.

Wir hätten `aria-hidden` verwenden können, um den Inhalt der Registerkartenbereiche vor Hilfstechnologien zu verbergen, aber wenn dieser Inhalt fokussierbaren Inhalt, wie Links, enthielte, könnte der Benutzer immer noch zu diesem Inhalt gelangen, selbst wenn `aria-hidden=true` für die nicht-aktiven Bereiche gesetzt ist. In diesem Beispiel haben wir auf die Registerkartenbereiche, die den Registerkarten mit `aria-selected="false"` entsprechen, `class="is-hidden"` angewendet und verwenden CSS, um `display: none;` zu verhindern, dass der versteckte Inhalt erreicht wird.

In unseren Tests hat diese neue Struktur dazu gedient, die Dinge insgesamt zu verbessern. Die `<button>`s werden jetzt als Registerkarten erkannt (z. B. wird "Registerkarte" vom Screenreader gesprochen), die ausgewählte Registerkarte wird dadurch angezeigt, dass „ausgewählt“ zusammen mit dem Registerkartennamen vorgelesen wird und jeglicher Inhalt, der nicht angezeigt wird, nicht fokussiert werden kann. Der Benutzer kann die Registerkarten auch mit der Tastatur oder der Maus steuern.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics/Test_your_skills:_WAI-ARIA).

## Zusammenfassung

Dieser Artikel hat keineswegs alles abgedeckt, was in WAI-ARIA verfügbar ist, aber er sollte Ihnen genügend Informationen gegeben haben, um zu verstehen, wie man es verwendet, und einige der am häufigsten auftretenden Muster zu kennen, die es erfordern.

## Siehe auch

- [Aria-Zustände und -Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes): Alle `aria-*`-Attribute
- [WAI-ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles): Kategorien von ARIA-Rollen und die auf MDN abgedeckten Rollen
- [ARIA in HTML](https://www.w3.org/TR/html-aria/) auf W3C: Eine Spezifikation, die für jede HTML-Funktion die Barrierefreiheitssemantik (ARIA) definiert, die implizit darauf angewendet wird vom Browser und die WAI-ARIA-Funktionen, die Sie darauf einstellen können, wenn zusätzliche Semantik erforderlich ist
- [Deque university code library](https://dequeuniversity.com/library/): Eine Bibliothek mit wirklich nützlichen und praktischen Beispielen, die komplexe UI-Steuerelemente zeigen, die mittels WAI-ARIA-Funktionen barrierefrei gemacht werden
- [WAI-ARIA-Autorenpraktiken](https://www.w3.org/WAI/ARIA/apg/) auf W3C: Ein sehr detailliertes Designmuster der W3C, das erklärt, wie man verschiedene Arten von komplexen UI-Steuerelementen implementiert, während man sie mit WAI-ARIA-Funktionen barrierefrei macht

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility")}}
