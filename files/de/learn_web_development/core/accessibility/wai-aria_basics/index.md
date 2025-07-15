---
title: Grundlagen von WAI-ARIA
short-title: WAI-ARIA
slug: Learn_web_development/Core/Accessibility/WAI-ARIA_basics
l10n:
  sourceCommit: 0c486f69de815c2882a21badb6a7772e124d1a7a
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility")}}

Aufbauend auf dem vorherigen Artikel kann es manchmal schwierig sein, komplexe UI-Steuerelemente zu erstellen, die unspezifisches HTML und dynamisch mit JavaScript aktualisierte Inhalte beinhalten. WAI-ARIA ist eine Technologie, die bei solchen Problemen helfen kann, indem sie zusätzliche Semantiken hinzufügt, die Browser und unterstützende Technologien erkennen und nutzen können, um Nutzern mitzuteilen, was passiert. Hier zeigen wir, wie man es auf eine grundlegende Weise verwenden kann, um die Barrierefreiheit zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und den besten Praktiken zur Barrierefreiheit, wie sie in den vorherigen Lektionen des Moduls gelehrt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von WAI-ARIA — Semantik für ansonsten nicht-semantisches HTML bereitzustellen, damit AT-Anwender die präsentierten Schnittstellen verstehen können.</li>
          <li>Die grundlegende Syntax — Rollen, Eigenschaften und Zustände.</li>
          <li>Wegweiser und Orientierungspunkte.</li>
          <li>Verbesserung der Tastaturzugänglichkeit.</li>
          <li>Ankündigung von dynamischen Inhaltsaktualisierungen mit Live-Regionen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist WAI-ARIA?

Schauen wir uns zunächst an, was WAI-ARIA ist und was es für uns tun kann.

### Ein komplett neues Set von Problemen

Als Webanwendungen komplexer und dynamischer wurden, tauchten neue Barrierefreiheitsmerkmale und -probleme auf.

HTML führte beispielsweise eine Anzahl von semantischen Elementen ein, um gängige Seiteneigenschaften zu definieren ({{htmlelement("nav")}}, {{htmlelement("footer")}}, etc.). Bevor diese verfügbar waren, nutzten Entwickler {{htmlelement("div")}}s mit IDs oder Klassen, z.B. `<div class="nav">`, was problematisch war, da es keine einfache Möglichkeit gab, programmgesteuert ein spezifisches Seitenelement wie die Hauptnavigation zu finden.

Die anfängliche Lösung bestand darin, ein oder mehrere versteckte Links am oberen Ende der Seite hinzuzufügen, um zur Navigation (oder was auch immer) zu verlinken, beispielsweise:

```html
<a href="#hidden" class="hidden">Skip to navigation</a>
```

Aber das ist immer noch nicht sehr präzise und kann nur verwendet werden, wenn der Screenreader von der Spitze der Seite liest.

Ein weiteres Beispiel: Apps begannen, komplexe Steuerelemente wie Datumsauswahlfelder zur Auswahl von Daten, Slider zur Auswahl von Werten etc. zu verwenden. HTML bietet spezielle Eingabetypen, um solche Steuerelemente darzustellen:

```html
<input type="date" /> <input type="range" />
```

Diese waren ursprünglich nicht gut unterstützt, und es war, und ist zu einem gewissen Grad immer noch, schwierig, sie zu gestalten. Daher entschieden sich Designer und Entwickler oft für individuelle Lösungen. Anstatt diese nativen Features zu verwenden, verlassen sich einige Entwickler auf JavaScript-Bibliotheken, die solche Steuerelemente als eine Reihe von verschachtelten {{htmlelement("div")}}s generieren, die dann mit CSS gestaltet und mit JavaScript gesteuert werden.

Das Problem dabei ist, dass sie visuell funktionieren, Screenreader aber überhaupt nicht verstehen können, was sie sind, und ihre Nutzer hören nur ein Durcheinander von Elementen ohne Semantik, die beschreiben, was sie bedeuten.

### Einführung von WAI-ARIA

[WAI-ARIA](https://w3c.github.io/aria/) (Web Accessibility Initiative - Accessible Rich Internet Applications) ist eine von der W3C erstellte Spezifikation, die eine Reihe zusätzlicher HTML-Attribute definiert, die auf Elemente angewendet werden können, um zusätzliche Semantiken bereitzustellen und die Barrierefreiheit zu verbessern, wo immer sie fehlt. In der Spezifikation sind drei Hauptmerkmale definiert:

- [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Diese definieren, was ein Element ist oder tut. Viele dieser Rollen sind sogenannte Landmark-Rollen, die weitgehend den semantischen Wert von Strukturelementen, wie `role="navigation"` ({{htmlelement("nav")}}), `role="banner"` (Dokument {{htmlelement("header")}}), `role="complementary"` ({{htmlelement("aside")}}) oder `role="search"` ({{htmlelement("search")}}), duplizieren. Einige andere Rollen beschreiben verschiedene Seitenstrukturen, die keine Elemente haben, die mit diesen Rollen übereinstimmen, wie `role="tablist"` und `role="tabpanel"`, die häufig in Benutzerschnittstellen zu finden sind.
- Eigenschaften
  - : Diese definieren Eigenschaften von Elementen, die verwendet werden können, um ihnen zusätzliche Bedeutungen oder Semantiken zu verleihen. Ein Beispiel: `aria-required="true"` gibt an, dass ein Formulareingabefeld ausgefüllt sein muss, um gültig zu sein, während `aria-labelledby="label"` es ermöglicht, eine ID auf ein Element zu setzen und es dann als Label für alles andere auf der Seite zu referenzieren, einschließlich mehrerer Elemente, was mit `<label for="input">` nicht möglich ist. Sie könnten beispielsweise `aria-labelledby` verwenden, um festzulegen, dass eine Schlüsselbeschreibung, die in einem {{htmlelement("div")}} enthalten ist, das Label für mehrere Tabellenzellen ist, oder es als Alternative zum alt-Text eines Bildes verwenden — existierende Informationen auf der Seite als alt-Text für ein Bild angeben, anstatt sie im `alt`-Attribut wiederholen zu müssen. Ein Beispiel dafür finden Sie unter [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives).
- Zustände
  - : Besondere Eigenschaften, die die aktuellen Bedingungen von Elementen definieren, wie `aria-disabled="true"`, das einem Screenreader angibt, dass ein Formulareingabefeld derzeit deaktiviert ist. Zustände unterscheiden sich von Eigenschaften dadurch, dass Eigenschaften während des gesamten Lebenszyklus einer App nicht geändert werden, während sich Zustände ändern können, im Allgemeinen programmgesteuert über JavaScript.

Ein wichtiger Punkt zu den WAI-ARIA-Attributen ist, dass sie nichts über die Webseite selbst beeinflussen, außer den Informationen, die durch die Barrierefreiheits-APIs des Browsers verfügbar gemacht werden (woher Screenreader ihre Informationen beziehen). WAI-ARIA beeinflusst nicht die Seitenstruktur, das DOM, etc., obwohl die Attribute nützlich sein können, um Elemente mittels CSS auszuwählen.

> [!NOTE]
> Eine nützliche Liste aller ARIA-Rollen und deren Verwendungen, mit Links zu weiteren Informationen, finden Sie in der WAI-ARIA-Spezifikation — siehe [Definitionen von Rollen](https://w3c.github.io/aria/#role_definitions) — auf dieser Website — siehe [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles).
>
> Die Spezifikation enthält auch eine Liste aller Eigenschaften und Zustände mit Links zu weiteren Informationen — siehe [Definitionen von Zuständen und Eigenschaften (alle `aria-*` Attribute)](https://w3c.github.io/aria/#state_prop_def).

## Wo wird WAI-ARIA unterstützt?

Diese Frage ist nicht einfach zu beantworten. Es ist schwierig, eine endgültige Ressource zu finden, die angibt, welche Funktionen von WAI-ARIA unterstützt werden und wo, weil:

1. Es gibt viele Funktionen in der WAI-ARIA-Spezifikation.
2. Es gibt viele Kombinationen von Betriebssystemen, Browsern und Screenreadern zu berücksichtigen.

Dieser letzte Punkt ist entscheidend — Um überhaupt einen Screenreader zu nutzen, muss Ihr Betriebssystem Browser ausführen, die die notwendigen Barrierefreiheits-APIs bereitstellen, um die Informationen bereitzustellen, die Screenreader benötigen, um ihre Arbeit zu erledigen. Die meisten beliebten Betriebssysteme haben ein oder zwei Browser, mit denen Screenreader arbeiten können. Die Paciello Group hat einen ziemlich aktuellen Beitrag, der Daten hierfür bereitstellt — siehe [Ungefähre Anleitung: Browser, Betriebssysteme und Screenreader-Unterstützung aktualisiert](https://www.tpgi.com/rough-guide-browsers-operating-systems-and-screen-reader-support-updated/).

Als nächstes müssen Sie sich darum kümmern, ob die in Frage kommenden Browser die ARIA-Funktionen unterstützen und über ihre APIs bereitstellen, aber auch, ob Screenreader diese Informationen erkennen und sie ihren Nutzern auf nützliche Weise darstellen.

1. Die Browserunterstützung ist nahezu universell.
2. Die Unterstützung von ARIA-Funktionen durch Screenreader ist noch nicht ganz auf diesem Niveau, aber die beliebtesten Screenreader nähern sich an. Sie können eine Vorstellung von den Unterstützungsniveaus bekommen, indem Sie den Artikel von Powermapper über [WAI-ARIA Screenreader-Kompatibilität](https://www.powermapper.com/tests/screen-readers/aria/) lesen.

In diesem Artikel werden wir nicht versuchen, jede WAI-ARIA-Funktion und deren genaue Unterstützungsdetails zu behandeln. Stattdessen werden wir die wichtigsten WAI-ARIA-Funktionen für Sie behandeln, die Sie kennen sollten; wenn wir keine Unterstützungsdetails erwähnen, können Sie davon ausgehen, dass die Funktion gut unterstützt wird. Ausnahmen werden wir deutlich erwähnen.

> [!NOTE]
> Einige JavaScript-Bibliotheken unterstützen WAI-ARIA, was bedeutet, dass, wenn sie UI-Features wie komplexe Formularelemente generieren, sie ARIA-Attribute hinzufügen, um die Zugänglichkeit dieser Features zu verbessern. Wenn Sie nach einer Drittanbieter-JavaScript-Lösung für schnelles UI-Development suchen, sollten Sie die Barrierefreiheit ihrer UI-Widgets als wichtigen Faktor bei Ihrer Entscheidung in Betracht ziehen. Gute Beispiele sind jQuery UI (siehe [Über jQuery UI: Tiefgehende Barrierefreiheits-Unterstützung](https://jqueryui.com/about/#deep-accessibility-support)), [ExtJS](https://www.sencha.com/products/extjs/) und [Dojo/Dijit](https://dojotoolkit.org/reference-guide/1.10/dijit/a11y/statement.html).

## Wann sollten Sie WAI-ARIA verwenden?

Wir haben einige der Probleme besprochen, die zur Schaffung von WAI-ARIA führten, aber im Wesentlichen gibt es vier Hauptbereiche, in denen WAI-ARIA nützlich ist:

- Wegweiser/Landmarks
  - : ARIAs [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) Attributwerte können als Landmarks fungieren, die entweder die Semantiken von HTML-Elementen replizieren (z.B. {{htmlelement("nav")}}), oder über die Semantiken von HTML hinausgehen, um Wegweiser zu verschiedenen Funktionsbereichen bereitzustellen, z.B. `search`, `tablist`, `tab`, `listbox`, etc.
- Dynamische Inhaltsaktualisierungen
  - : Screenreader haben oft Schwierigkeiten, ständig wechselnde Inhalte zu melden; mit ARIA können wir `aria-live` verwenden, um Screenreader-Benutzer zu informieren, wenn ein Inhaltsbereich dynamisch aktualisiert wird: Zum Beispiel durch JavaScript auf der Seite, das neue Inhalte vom Server abruft und das DOM aktualisiert [fetching new content from the server and updating the DOM](/de/docs/Learn_web_development/Core/Scripting/Network_requests).
- Verbesserung der Tastaturzugänglichkeit
  - : Es gibt eingebaute HTML-Elemente, die über native Tastaturzugänglichkeit verfügen; wenn andere Elemente zusammen mit JavaScript verwendet werden, um ähnliche Interaktionen zu simulieren, leidet die Tastaturzugänglichkeit und Screenreader-Meldung als Folge. Wo dies unvermeidbar ist, bietet WAI-ARIA einen Weg, um anderen Elementen den Fokus zu erlauben (unter Verwendung von `tabindex`).
- Barrierefreiheit von nicht-semantischen Steuerelementen
  - : Wenn eine Reihe von verschachtelten `<div>`s zusammen mit CSS/JavaScript verwendet wird, um ein komplexes UI-Feature zu erstellen, oder ein natives Steuerelement stark über JavaScript verbessert/geändert wird, kann die Barrierefreiheit leiden — Screenreader-Benutzer werden es schwer haben herauszufinden, was das Feature macht, wenn keine Semantiken oder andere Hinweise vorhanden sind. In diesen Situationen kann ARIA helfen, mit einer Kombination von Rollen wie `button`, `listbox` oder `tablist` und Eigenschaften wie `aria-required` oder `aria-posinset` das Fehlende bereitzustellen, um weitere Hinweise zur Funktionalität zu geben.

Im nächsten Abschnitt werden wir auf die vier zuvor beschriebenen Hauptbereiche näher eingehen und Beispiele dazu geben. Bevor Sie fortfahren, sollten Sie eine Testumgebung für Screenreader einrichten, damit Sie einige der Beispiele beim Durchgehen testen können. Weitere Informationen finden Sie in unserem Abschnitt über [Screenreader-Tests](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers).

> [!CALLOUT]
>
> **Sie sollten WAI-ARIA nur verwenden, wenn Sie es benötigen!**
>
> Die Verwendung der richtigen HTML-Elemente gibt Ihnen implizit die benötigten Rollen, und Sie sollten _immer_ [native HTML-Funktionen](/de/docs/Learn_web_development/Core/Accessibility/HTML) verwenden, um die von Screenreadern benötigten Semantiken bereitzustellen, um ihren Nutzern mitzuteilen, was passiert. Manchmal ist das nicht möglich, entweder weil Sie nur eingeschränkten Zugriff auf den Code haben oder weil Sie etwas Komplexes erstellen, für das es kein einfaches HTML-Element gibt, um es zu implementieren. In solchen Fällen kann WAI-ARIA ein wertvolles Werkzeug zur Barrierefreiheit sein.
>
> Aber noch einmal, verwenden Sie es nur, wenn es notwendig ist!
>
> Versuchen Sie auch sicherzustellen, dass Sie Ihre Website mit einer Vielzahl von _echten_ Nutzern testen — nicht-behinderte Menschen, Menschen, die Screenreader verwenden, Menschen, die Tastaturnavigation verwenden, etc. Sie werden bessere Einblicke haben, wie gut es funktioniert.

## Wegweiser/Landmarks

WAI-ARIA fügt den Browsern das [`role` Attribut](https://w3c.github.io/aria/#role_definitions) hinzu, das es Ihnen ermöglicht, überall auf Ihrer Website, wo nötig, zusätzlichen semantischen Wert zu Elementen hinzuzufügen. Der erste wichtige Bereich, in dem dies nützlich ist, besteht darin, Screenreader-Informationen bereitzustellen, damit ihre Nutzer gängige Seitenelemente finden können. Dieses Beispiel hat die folgende Struktur:

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

Wenn Sie versuchen, das Beispiel mit einem Screenreader in einem modernen Browser zu testen, erhalten Sie bereits einige nützliche Informationen. Beispielsweise gibt VoiceOver Folgendes aus:

- Auf dem `<header>`-Element — "banner, 2 items" (es enthält eine Überschrift und das `<nav>`).
- Auf dem `<nav>`-Element — "navigation 2 items" (es enthält eine Liste und ein Formular).
- Auf dem `<main>`-Element — "main 2 items" (es enthält einen Artikel und ein aside).
- Auf dem `<aside>`-Element — "complementary 2 items" (es enthält eine Überschrift und eine Liste).
- Auf dem Suchformular-Eingabefeld — "Search query, insertion at beginning of text".
- Auf dem `<footer>`-Element — "footer 1 item".

Wenn Sie ins VoiceOver-Landmarks-Menü gehen (zugänglich mit der VoiceOver-Taste + U und dann mit den Cursor-Tasten durch die Menüoptionen navigieren), sehen Sie, dass die meisten Elemente schön aufgelistet sind, damit sie schnell aufgerufen werden können.

![Macs VoiceOver-Menü für schnelle Barrierefreiheit. Landmarks-Header und Landmarks-Liste inklusive Banner, Navigation, Main und Complementary.](landmarks-list.png)

Wir könnten hier jedoch besser werden. Das Suchformular ist ein wirklich wichtiger Orientierungspunkt, den die Leute finden wollen, aber es wird im Landmarks-Menü nicht gelistet oder als nennenswerter Orientierungspunkt behandelt, abgesehen von der Tatsache, dass das tatsächliche Eingabefeld als Sucheingabe genannt wird (`<input type="search">`).

Wir könnten es durch die Verwendung der ARIA `role="search"` verbessern, aber die Verwendung des {{htmlelement("search")}}-Elements gibt diesem Formular implizit diese Rolle.

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

Am wichtigsten ist, dass wir semantisches HTML verwendet haben, das Bedeutung und Rollen für die Struktur der Seite verleiht, ohne unnötige [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) Attribute zu unserer HTML-Struktur hinzuzufügen, die eine Struktur wie diese hat:

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

Wir haben Ihnen auch ein zusätzliches Feature in diesem Beispiel gegeben — das {{htmlelement("input")}} Element wurde mit dem Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) versehen, das ihm ein beschreibendes Label gibt, das von einem Screenreader vorgelesen werden kann, selbst wenn wir kein {{htmlelement("label")}}-Element eingefügt haben. In solchen Fällen ist dies sehr nützlich — ein Suchformular wie dieses ist eine sehr häufige, leicht erkennbare Funktion, und ein visuelles Label würde das Seitendesign stören.

```html
<input
  type="search"
  name="q"
  placeholder="Search query"
  aria-label="Search through site content" />
```

Wenn Sie nun mit VoiceOver dieses Beispiel betrachten, erhalten Sie einige Verbesserungen:

- Das Suchformular wird als separates Element aufgerufen, sowohl beim Durchsuchen der Seite als auch im Landmarks-Menü.
- Der im `aria-label`-Attribut enthaltene Label-Text wird vorgelesen, wenn das Formulareingabefeld hervorgehoben wird.

Wenn Sie ältere Browser wie den IE8 unterstützen müssen, ist es sinnvoll, ARIA-Rollen zu diesem Zweck einzuschließen. Und wenn aus irgendeinem Grund Ihre Seite nur aus `<div>`s besteht, sollten Sie definitiv die ARIA-Rollen einfügen, um diese dringend benötigte Semantik bereitzustellen!

Sie werden unten viel mehr über diese Semantik und die Kraft von ARIA-Eigenschaften/Attributen sehen, insbesondere im Abschnitt [Barrierefreiheit von nicht-semantischen Steuerelementen](#barrierefreiheit_von_nicht-semantischen_steuerelementen). Schauen wir uns jedoch jetzt an, wie ARIA bei dynamischen Inhaltsaktualisierungen helfen kann.

## Dynamische Inhaltsaktualisierungen

Inhalte, die in das DOM geladen werden, können mit einem Screenreader leicht zugänglich sein, von Textinhalten bis hin zu alternativen Texten, die an Bildern angehängt sind. Traditionelle statische Websites mit vornehmlich Textinhalten sind daher leicht zugänglich für Menschen mit Sehbehinderungen.

Das Problem ist, dass moderne Webanwendungen oft nicht nur statischer Text sind — sie aktualisieren oft Teile der Seite, indem sie neue Inhalte vom Server abrufen (in diesem Beispiel verwenden wir ein statisches Array von Zitaten) und das DOM aktualisieren. Diese werden manchmal als **Live-Regionen** bezeichnet.

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
  background: #666;
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

Das funktioniert gut, aber es ist nicht gut für die Barrierefreiheit — die Inhaltsaktualisierung wird von Screenreadern nicht erfasst, sodass ihre Nutzer nicht wissen würden, was passiert. Dies ist ein ziemlich triviales Beispiel, aber stellen Sie sich vor, Sie würden eine komplexe Benutzeroberfläche mit vielen ständig aktualisierten Inhalten erstellen, wie ein Chatroom, eine Strategie-Spiel-Oberfläche oder eine Live-aktualisierende Einkaufskorbanzeige — es wäre unmöglich, die App in irgendeiner effektiven Weise zu nutzen, ohne irgendeinen Weg zu haben, um den Nutzer über die Aktualisierungen zu informieren.

WAI-ARIA bietet glücklicherweise einen nützlichen Mechanismus, um diese Benachrichtigungen bereitzustellen — die [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) Eigenschaft. Wenn Sie dies auf ein Element anwenden, veranlasst es Screenreader, den aktualisierten Inhalt vorzulesen. Wie dringend der Inhalt vorgelesen wird, hängt vom Attributwert ab:

- `off`
  - : Der Standardwert. Updates sollten nicht angekündigt werden.
- `polite`
  - : Updates sollten nur angekündigt werden, wenn der Nutzer inaktiv ist.
- `assertive`
  - : Updates sollten dem Nutzer möglichst sofort mitgeteilt werden.

Hier aktualisieren wir das öffnende `<blockquote>` Tag wie folgt:

```html
<blockquote aria-live="assertive">…</blockquote>
```

Dies wird einen Screenreader dazu bringen, den Inhalt vorzulesen, während er aktualisiert wird: Versuchen Sie, die aktualisierte Live-Version zu testen:

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
> - Die [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic) Eigenschaft, wenn auf `true` gesetzt, weist Screenreader an, den gesamten Elementinhalt als eine atomare Einheit vorzulesen, nicht nur die Teile, die aktualisiert wurden. Dies ist nützlich, wenn nur der Inhalt eines Abschnitts aktualisiert wird, Sie aber möchten, dass die Überschrift jedes Mal vorgelesen wird, um den Nutzer an ihren Inhalt zu erinnern.
> - Die [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant) Eigenschaft ist nützlich, um zu steuern, was vorgelesen wird, wenn eine Live-Region aktualisiert wird. Sie können zum Beispiel nur Inhaltsergänzungen oder -entfernungen vorlesen lassen.

## Verbesserung der Tastaturzugänglichkeit

Wie in mehreren anderen Bereichen des Moduls besprochen, ist eine der größten Stärken von HTML im Hinblick auf die Barrierefreiheit die eingebaute Tastaturzugänglichkeit von Features wie Buttons, Formularelementen und Links. Sie können im Allgemeinen die Tabulatortaste verwenden, um zwischen Steuerelementen zu wechseln, die Eingabetaste, um Steuerelemente auszuwählen oder zu aktivieren, und gelegentlich andere Bedienelemente nach Bedarf (zum Beispiel die Aufwärts- und Abwärtstaste, um zwischen Optionen in einer `<select>`-Box zu wechseln).

Manchmal müssen Sie jedoch Code schreiben, der entweder nicht-semantische Elemente als Schaltflächen (oder andere Arten von Steuerelementen) verwendet oder fokussierbare Steuerelemente für nicht ganz den richtigen Zweck verwendet. Vielleicht versuchen Sie, schlechten Code zu reparieren, den Sie geerbt haben, oder Sie bauen eine Art komplexes Widget, das es erfordert.

In Bezug darauf, nicht-fokussierbaren Code fokussierbar zu machen, erweitert WAI-ARIA das `tabindex` Attribut mit einigen neuen Werten:

- `tabindex="0"` — wie oben angegeben, erlaubt dieser Wert Elementen, die normalerweise nicht fokussierbar sind, fokussierbar zu werden. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — dies erlaubt normalerweise nicht fokussierbaren Elementen, dass sie programmgesteuert fokussiert werden können, z.B. via JavaScript oder als Ziel von Links.

Wir haben dies in unserem HTML-Artikel zur Barrierefreiheit im Detail behandelt und eine typische Implementierung gezeigt — siehe [Die Tastaturbarrierefreiheit wieder einbauen](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in).

## Barrierefreiheit von nicht-semantischen Steuerelementen

Dies baut auf dem vorherigen Abschnitt auf — Wenn eine Reihe von verschachtelten `<div>`s zusammen mit CSS/JavaScript verwendet wird, um ein komplexes Benutzeroberflächen-Feature zu erstellen, oder ein natives Steuerelement stark verbessert/geändert wird durch JavaScript, kann nicht nur die Tastaturzugänglichkeit leiden, sondern Screenreader-Benutzer werden es schwer haben, herauszufinden, was das Feature tut, wenn es keine Semantiken oder andere Hinweise gibt. In solchen Situationen kann ARIA helfen, um die fehlende Semantik bereitzustellen.

### Formularvalidierung und Fehlerbenachrichtigungen

Zuerst schauen wir uns das Formularbeispiel noch einmal an, das wir zuerst in unserem Artikel über CSS und JavaScript-Barrierefreiheit behandelt haben (lesen Sie [Es dezent halten](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#keeping_it_unobtrusive) für eine vollständige Wiederholung). Am Ende dieses Abschnitts haben wir gezeigt, dass wir einige ARIA-Attribute in die Fehlermeldungsbox aufgenommen haben, die bei einem Versuch, das Formular abzusenden, etwaige Validierungsfehler anzeigt:

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

- [`role="alert"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) wandelt das Element, auf das es angewendet wird, automatisch in eine Live-Region um, sodass Änderungen daran vorgelesen werden; es identifiziert es auch semantisch als eine Warnmeldung (wichtige zeit- oder kontextabhängige Informationen) und stellt eine bessere, barrierefreiere Möglichkeit dar, eine Warnung an einen Benutzer zu übermitteln (modale Dialoge wie [`alert()`](/de/docs/Web/API/Window/alert)-Anrufe weisen eine Reihe von Barrierefreiheitsproblemen auf; siehe [Popupfenster](https://webaim.org/techniques/javascript/other#popups) von WebAIM).
- Ein [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)-Wert von `all` weist den Screenreader an, den Inhalt der Fehlerliste vorzulesen, wenn Änderungen daran vorgenommen werden — d.h. wenn Fehler hinzugefügt oder entfernt werden. Dies ist nützlich, da der Benutzer wissen möchte, welche Fehler noch übrig sind, nicht nur, was zur Liste hinzugefügt oder aus ihr entfernt wurde.

Wir könnten unsere ARIA-Nutzung noch weiter ausbauen und mehr Validierungshilfen bereitstellen. Wie wäre es damit, anzugeben, ob Felder überhaupt erforderlich sind und welchen Bereich das Alter haben sollte?

1. Zu diesem Zeitpunkt kopieren Sie unsere [`form-validation.html`](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html) und [`validation.js`](https://github.com/mdn/learning-area/blob/main/accessibility/css/validation.js) Dateien und speichern Sie sie in einem lokalen Verzeichnis.
2. Öffnen Sie sie beide in einem Texteditor und schauen Sie sich an, wie der Code funktioniert.
3. Fügen Sie zuerst einen Absatz direkt über das öffnende `<form>`-Tag hinzu, wie im folgenden Beispiel, und markieren Sie beide Formular-`<Label>`-Tags mit einem Sternchen. So markieren wir normalerweise erforderliche Felder für sehende Nutzer.

   ```html
   <p>Fields marked with an asterisk (*) are required.</p>
   ```

4. Dies ergibt visuell Sinn, ist aber für Screenreader-Benutzer nicht so leicht nachvollziehbar. Glücklicherweise bietet WAI-ARIA das [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required) Attribut, um Screenreader Hinweise zu geben, dass sie den Benutzern mitteilen sollten, dass Formularfelder ausgefüllt werden müssen. Aktualisieren Sie die `<input>`-Elemente wie folgt:

   ```html
   <input type="text" name="name" id="name" aria-required="true" />

   <input type="number" name="age" id="age" aria-required="true" />
   ```

5. Wenn Sie das Beispiel jetzt speichern und mit einem Screenreader testen, sollten Sie etwas wie "Geben Sie Ihren Namen ein, Stern, erforderlich, Bearbeitungstext" hören.
6. Es könnte auch nützlich sein, wenn wir Screenreader-Benutzern und sehenden Benutzern eine Vorstellung davon geben, wie der Alterswert sein sollte. Dies wird oft als Tooltip oder Platzhalter im Formularfeld präsentiert. WAI-ARIA beinhaltet auch [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) Eigenschaften, um minimale und maximale Werte anzugeben, und Screenreader unterstützen die nativen `min`- und `max`-Attribute. Eine weitere gut unterstützte Funktion ist das HTML `placeholder` Attribut, dass eine Nachricht enthalten kann, die im Eingabefeld angezeigt wird, wenn kein Wert eingegeben wurde, und von einigen Screenreadern vorgelesen wird. Aktualisieren Sie Ihre Zahleneingabe wie folgt:

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

Fügen Sie immer ein {{HTMLelement('label')}} für jede Eingabe ein. Während einige Screenreader den Platzhaltertext ansagen, tun dies die meisten nicht. Akzeptable Ersetzungen, um Formularsteuerelementen einen zugänglichen Namen zu geben, umfassen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) und [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby). Aber das `<label>`-Element mit einem `for`-Attribut ist die bevorzugte Methode, da es die Benutzerfreundlichkeit für alle Benutzer, einschließlich Mausklicker, bietet.

> [!NOTE]
> Sie können das fertige Beispiel live ansehen unter [`form-validation-updated.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-updated.html).

WAI-ARIA ermöglicht auch einige erweiterte Form-Labeling-Techniken, über das klassische {{htmlelement("label")}}-Element hinaus. Wir haben bereits darüber gesprochen, die [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) Eigenschaft zu verwenden, um dort ein Label bereitzustellen, wo wir nicht möchten, dass das Label für sehende Nutzer sichtbar ist (siehe den Abschnitt [Wegweiser/Landmarks](#signpostslandmarks) oben). Einige andere Labeling-Techniken verwenden andere Eigenschaften wie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn Sie ein Nicht-`<label>`-Element als Label bezeichnen oder mehrere Formulareingaben mit demselben Label versehen möchten, und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby), wenn Sie andere Informationen mit einer Formulareingabe assoziieren und diese ebenfalls vorgelesen haben möchten. Weitere Details finden Sie im [Advanced Form Labeling Artikel von WebAIM](https://webaim.org/techniques/forms/advanced).

Es gibt auch viele andere nützliche Eigenschaften und Zustände, um den Status von Formularelementen anzugeben. Zum Beispiel kann `aria-disabled="true"` verwendet werden, um anzugeben, dass ein Formularfeld deaktiviert ist. Viele Browser überspringen deaktivierte Formularelemente, was dazu führt, dass sie nicht von Screenreadern vorgelesen werden. In einigen Fällen wird ein deaktiviertes Element wahrgenommen, daher ist es eine gute Idee, dieses Attribut hinzuzufügen, um den Screenreader wissen zu lassen, dass ein deaktiviertes Formsteuerelement tatsächlich deaktiviert ist.

Wenn der deaktivierte Zustand einer Eingabe wahrscheinlich ändert, ist es auch eine gute Idee, anzugeben, wann es passiert und was das Ergebnis sein wird. Zum Beispiel, in unserem [`form-validation-checkbox-disabled.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-checkbox-disabled.html) Demo gibt es ein Kontrollkästchen, das, wenn aktiviert, ein weiteres Formulareingabefeld ermöglicht, um weitere Informationen eingeben zu können. Wir haben eine versteckte Live-Region eingerichtet:

```html
<p class="hidden-alert" aria-live="assertive"></p>
```

die aus der Anzeige mit absoluter Positionierung ausgeblendet wird. Wenn dies aktiviert/deaktiviert wird, aktualisieren wir den Text innerhalb der versteckten Live-Region, um Screenreader-Benutzer darüber zu informieren, was das Ergebnis des Aktivierens dieses Kontrollkästchens ist, sowie den `aria-disabled`-Zustand und einige optische Indikatoren:

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

### Nicht-semantische Schaltflächen als Schaltflächen beschreiben

Ein paar Mal in diesem Kurs haben wir bereits über die native Barrierefreiheit von (und die Barrierefreiheitsprobleme bei der Verwendung anderer Elemente, um sie zu fälschen) Schaltflächen, Links oder Formularelementen (siehe [Verwenden Sie, wo möglich, semantische UX-Kontrollen](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic UI_controls_where_possible) im Abschnitt HTML zur Barrierefreiheit, und [Verbesserung der Tastaturzugänglichkeit](#verbesserung_der_tastaturzugänglichkeit) oben). Im Grunde können Sie die Tastaturzugänglichkeit in vielen Fällen ohne großen Aufwand wieder einbauen, indem Sie `tabindex` und ein wenig JavaScript verwenden.

Aber was ist mit den Screenreadern? Sie werden die Elemente immer noch nicht als Schaltflächen ansehen. Wenn wir unser [`fake-div-buttons.html`](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) Beispiel in einem Screenreader testen, werden unsere gefälschten Schaltflächen mit Ausdrücken wie "Click me!, group" gemeldet, was offensichtlich verwirrend ist.

Wir können dies mit einer WAI-ARIA-Rolle korrigieren. Machen Sie eine lokale Kopie von [`fake-div-buttons.html`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html), und fügen Sie [`role="button"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) zu jedem Schaltflächen-`<div>` hinzu, zum Beispiel:

```html
<div data-message="This is from the first button" tabindex="0" role="button">
  Click me!
</div>
```

Nun, wenn Sie dies mit einem Screenreader ausprobieren, werden Schaltflächen mit Ausdrücken wie "Click me!, button" gemeldet. Während dies viel besser ist, müssen Sie trotzdem alle nativen Schaltflächen-Funktionen, die die Benutzer erwarten, wie die Handhabung von <kbd>Enter</kbd>- und Klickereignissen ergänzen, wie im [`button` role documentation](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) erklärt.

> [!NOTE]
> Vergessen Sie jedoch nicht, dass die Verwendung des richtigen semantischen Elements, wo immer möglich, immer besser ist. Wenn Sie eine Schaltfläche erstellen möchten und ein {{htmlelement("button")}}-Element verwenden können, sollten Sie ein {{htmlelement("button")}}-Element verwenden!

### Nutzer durch komplexe Widgets leiten

Es gibt eine ganze Reihe weiterer [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles), die nicht-semantische Elementstrukturen als gängige UX-Features identifizieren können, die über die in Standard-HTML verfügbaren hinausgehen, z.B. [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role), [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role). Sie können mehrere nützliche Beispiele in der [Deque university code library](https://dequeuniversity.com/library/) finden, um Ihnen eine Vorstellung davon zu geben, wie solche Steuerelemente barrierefrei gestaltet werden können.

Sie können auch mehrere Live-Beispiele in unserer [WAI-ARIA Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles) Dokumentation finden. Sehen Sie sich zum Beispiel unser [ARIA: tab role Beispiel](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role#example) an, das erklärt, wie eine zugängliche Registerschnittstelle implementiert werden kann.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA).

## Zusammenfassung

Dieser Artikel hat bei Weitem nicht alles behandelt, was in WAI-ARIA verfügbar ist, aber er sollte Ihnen genug Informationen gegeben haben, um zu verstehen, wie es verwendet wird, und einige der häufigsten Muster zu kennen, die es erfordern.

## Weitere Informationen

- [Aria-Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes): Alle `aria-*` Attribute
- [WAI-ARIA Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles): Kategorien von ARIA-Rollen und die auf MDN behandelten Rollen
- [ARIA in HTML](https://w3c.github.io/html-aria/) auf W3C: Eine Spezifikation, die für jedes HTML-Feature die Barrierefreiheitssemantiken (ARIA) definiert, die implizit darauf angewendet werden und welche WAI-ARIA Features darauf gesetzt werden können, wenn zusätzliche Semantiken erforderlich sind
- [Deque university code library](https://dequeuniversity.com/library/): Eine Bibliothek mit wirklich nützlichen und praktischen Beispielen, die komplexe UX-Steuerelemente zeigen, die mit WAI-ARIA Features barrierefrei gemacht wurden
- [WAI-ARIA-Authoring-Praktiken](https://www.w3.org/WAI/ARIA/apg/) auf W3C: Ein sehr detailliertes Designmuster von der W3C, das erklärt, wie verschiedene Arten komplexer UX-Steuerelemente unter Verwendung von WAI-ARIA Features zugänglich gemacht werden können

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility")}}
