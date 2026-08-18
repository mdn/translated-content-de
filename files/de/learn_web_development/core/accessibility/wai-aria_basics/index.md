---
title: Grundlagen von WAI-ARIA
short-title: WAI-ARIA
slug: Learn_web_development/Core/Accessibility/WAI-ARIA_basics
l10n:
  sourceCommit: 1b7c3c1e03f14c3878e4d8518b0f1a89bedfdc9c
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA", "Learn_web_development/Core/Accessibility")}}

Im Anschluss an den vorherigen Artikel kann es manchmal schwierig sein, komplexe UI-Steuerelemente zu erstellen, die unsemantisches HTML und dynamisch mit JavaScript aktualisierte Inhalte enthalten. WAI-ARIA ist eine Technologie, die bei solchen Problemen helfen kann, indem sie zusätzliche Semantiken hinzufügt, die Browser und unterstützende Technologien erkennen und verwenden können, um den Benutzern mitzuteilen, was vor sich geht. Hier zeigen wir, wie sie auf grundlegender Ebene verwendet wird, um die Barrierefreiheit zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und Best Practices zur Barrierefreiheit, wie in früheren Lektionen in diesem Modul gelehrt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von WAI-ARIA — Semantiken zu ansonsten unsemantischem HTML bereitzustellen, damit AT-Benutzer die ihnen präsentierten Schnittstellen verstehen können.</li>
          <li>Die grundlegende Syntax — Rollen, Eigenschaften und Zustände.</li>
          <li>Landmarken und Wegweiser.</li>
          <li>Verbesserung der Tastaturzugänglichkeit.</li>
          <li>Ankündigung dynamischer Inhaltsaktualisierungen mit Live-Bereichen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist WAI-ARIA?

Beginnen wir damit, was WAI-ARIA ist und was es für uns tun kann.

### Ein ganz neues Set von Problemen

Als Web-Apps komplexer und dynamischer wurden, traten neue Barrierefreiheitsfunktionen und -probleme auf.

HTML führte beispielsweise eine Reihe semantischer Elemente ein, um allgemeine Seiteneigenschaften zu definieren ({{htmlelement("nav")}}, {{htmlelement("footer")}} usw.). Bevor diese verfügbar waren, verwendeten Entwickler {{htmlelement("div")}}s mit IDs oder Klassen, z.B. `<div class="nav">`, aber diese waren problematisch, da es keinen einfachen Weg gab, eine spezifische Seiteneigenschaft wie die Hauptnavigation programmatisch zu finden.

Die anfängliche Lösung bestand darin, einen oder mehrere versteckte Links oben auf der Seite einzufügen, um zur Navigation (oder was auch immer) zu verlinken, beispielsweise:

```html
<a href="#hidden" class="hidden">Skip to navigation</a>
```

Aber das ist immer noch nicht sehr präzise und kann nur verwendet werden, wenn der Screenreader vom Anfang der Seite liest.

Als weiteres Beispiel begannen Apps, komplexe Steuerelemente wie Datumsauswähler für die Auswahl von Daten, Schieberegler zur Wertauswahl usw. zu enthalten. HTML stellt spezielle Eingabetypen bereit, um solche Steuerungen darzustellen:

```html
<input type="date" /> <input type="range" />
```

Diese wurden ursprünglich nicht gut unterstützt und es war, und ist immer noch zu einem geringeren Maße, schwierig, sie zu stylen, was dazu führte, dass Designer und Entwickler sich für benutzerdefinierte Lösungen entschieden haben. Anstatt diese nativen Funktionen zu nutzen, verlassen sich einige Entwickler auf JavaScript-Bibliotheken, die solche Steuerungen als eine Reihe von verschachtelten {{htmlelement("div")}}s generieren, die dann mit CSS gestylt und mit JavaScript gesteuert werden.

Das Problem hier ist, dass sie visuell funktionieren, aber Screenreader können überhaupt keinen Sinn daraus machen, und ihre Benutzer erfahren nur, dass sie eine Ansammlung von Elementen ohne Semantik sehen, um zu beschreiben, was sie bedeuten.

### Einführung in WAI-ARIA

[WAI-ARIA](https://w3c.github.io/aria/) (Web Accessibility Initiative - Accessible Rich Internet Applications) ist eine Spezifikation des W3C, die einen Satz zusätzlicher HTML-Attribute definiert, die auf Elemente angewendet werden können, um zusätzliche Semantiken bereitzustellen und die Zugänglichkeit zu verbessern, wo immer sie fehlt. Es gibt drei Hauptmerkmale, die in der Spezifikation definiert sind:

- [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Diese definieren, was ein Element ist oder tut. Viele davon sind sogenannte Landmarkenrollen, die weitgehend den semantischen Wert von Strukturelementen duplizieren, wie `role="navigation"` ({{htmlelement("nav")}}), `role="banner"` (Dokument {{htmlelement("header")}}), `role="complementary"` ({{htmlelement("aside")}}) oder `role="search"` ({{htmlelement("search")}}). Einige andere Rollen beschreiben verschiedene Seitenstrukturen, die keine Elemente haben, die diesen Rollen entsprechen, wie `role="tablist"` und `role="tabpanel"`, die häufig in UI's zu finden sind.
- Eigenschaften
  - : Diese definieren Eigenschaften von Elementen, die verwendet werden können, um ihnen zusätzliche Bedeutung oder Semantiken zu geben. Ein Beispiel ist `aria-required="true"`, das angibt, dass ein Formulareingabe-Feld ausgefüllt werden muss, um gültig zu sein, während `aria-labelledby="label"` es Ihnen ermöglicht, eine ID an ein Element zu setzen und es dann als die Bezeichnung für alles andere auf der Seite, einschließlich mehrerer Elemente, zu referenzieren, was mit `<label for="input">` nicht möglich ist. Als Beispiel könnten Sie `aria-labelledby` verwenden, um anzugeben, dass eine Schlüsselerläuterung, die in einem {{htmlelement("div")}} enthalten ist, die Bezeichnung für mehrere Tabellenzellen ist, oder Sie könnten es als alternative Bildalt-Text verwenden — bestehende Informationen auf der Seite als Alt-Text eines Bildes angeben, anstatt sie im `alt`-Attribut wiederholen zu müssen. Ein Beispiel hierfür finden Sie unter [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives).
- Zustände
  - : Spezielle Eigenschaften, die die aktuellen Bedingungen von Elementen definieren, wie `aria-disabled="true"`, das einem Screenreader mitteilt, dass ein Formulareingabe-Feld derzeit deaktiviert ist. Zustände unterscheiden sich von Eigenschaften darin, dass sich Eigenschaften während des Lebenszyklus einer App nicht ändern, während sich Zustände ändern können, normalerweise programmatisch über JavaScript.

Ein wichtiger Punkt zu WAI-ARIA-Attributen ist, dass sie nichts an der Webseite ändern, außer den Informationen, die über die Zugänglichkeits-APIs des Browsers verfügbar sind (wo Screenreader ihre Informationen herholen). WAI-ARIA beeinflusst weder die Webseitenstruktur noch das DOM usw., obwohl die Attribute nützlich sein können, um Elemente mit CSS auszuwählen.

> [!NOTE]
> Eine nützliche Liste aller ARIA-Rollen und ihrer Verwendungen, mit Links zu weiteren Informationen, finden Sie in der WAI-ARIA-Spezifikation — siehe [Definition of Roles](https://w3c.github.io/aria/#role_definitions) — auf dieser Seite — siehe [ARIA roles](/de/docs/Web/Accessibility/ARIA/Reference/Roles).
>
> Die Spezifikation enthält auch eine Liste aller Eigenschaften und Zustände, mit Links zu weiteren Informationen — siehe [Definitions of States and Properties (alle `aria-*` Attribute)](https://w3c.github.io/aria/#state_prop_def).

## Wo wird WAI-ARIA unterstützt?

Dies ist keine einfache Frage zu beantworten. Es ist schwierig, eine abschließende Quelle zu finden, die angibt, welche WAI-ARIA-Funktionen wo unterstützt werden, weil:

1. Die WAI-ARIA-Spezifikation viele Funktionen enthält.
2. Es viele Kombinationen von Betriebssystemen, Browsern und Screenreadern zu berücksichtigen gibt.

Dieser letzte Punkt ist entscheidend — Um überhaupt einen Screenreader zu verwenden, muss Ihr Betriebssystem Browser ausführen, die die notwendigen Zugänglichkeits-APIs haben, um die Informationen bereitzustellen, die Screenreader benötigen, um ihre Arbeit zu erledigen. Die meisten beliebten Betriebssysteme haben einen oder zwei Browser, mit denen Screenreader arbeiten können.

Als Nächstes müssen Sie sicherstellen, dass die betreffenden Browser ARIA-Funktionen unterstützen und diese über ihre APIs bereitstellen, und ob Screenreader diese Informationen erkennen und nützlich an ihre Benutzer weitergeben.

1. Die Browserunterstützung ist nahezu universell.
2. Die Screenreader-Unterstützung für ARIA-Funktionen ist noch nicht auf diesem Niveau, aber die beliebtesten Screenreader kommen dem näher. Sie können sich von Powermappers Artikel [WAI-ARIA Screen reader compatibility](https://www.powermapper.com/tests/screen-readers/aria/) eine Idee von den Unterstützungsebenen verschaffen.

In diesem Artikel werden wir nicht versuchen, jede WAI-ARIA-Funktion und ihre genauen Unterstützungsdetails abzudecken. Stattdessen beschäftigen wir uns mit den wichtigsten WAI-ARIA-Funktionen, die Sie kennen sollten; wenn wir keine Unterstützungsdetails erwähnen, können Sie davon ausgehen, dass die Funktion gut unterstützt wird. Wir werden klare Ausnahmen davon deutlich markieren.

> [!NOTE]
> Einige JavaScript-Bibliotheken unterstützen WAI-ARIA, was bedeutet, dass sie bei der Generierung von UI-Funktionen wie komplexen Formularelementen ARIA-Attribute hinzufügen, um die Zugänglichkeit dieser Funktionen zu verbessern. Wenn Sie nach einer Drittanbieter-JavaScript-Lösung für die schnelle UI-Entwicklung suchen, sollten Sie die Zugänglichkeit ihrer UI-Widgets als wichtigen Faktor bei Ihrer Entscheidungsfindung berücksichtigen. Gute Beispiele sind jQuery UI (siehe [About jQuery UI: Deep accessibility support](https://jqueryui.com/about/#deep-accessibility-support)), [ExtJS](https://www.sencha.com/products/extjs/) und [Dojo/Dijit](https://dojotoolkit.org/reference-guide/1.10/dijit/a11y/statement.html).

## Wann sollten Sie WAI-ARIA verwenden?

Wir haben bereits einige der Probleme besprochen, die zur Entstehung von WAI-ARIA führten, aber im Wesentlichen gibt es vier Hauptbereiche, in denen WAI-ARIA nützlich ist:

- Wegweiser/Landmarken
  - : ARIAs [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) Attributwerte können als Landmarken fungieren, die entweder die Semantik von HTML-Elementen replizieren (z.B. {{htmlelement("nav")}}) oder über die HTML-Semantik hinausgehen, um Wegweiser zu verschiedenen Funktionsbereichen bereitzustellen, z.B. `search`, `tablist`, `tab`, `listbox` usw.
- Dynamische Inhaltsaktualisierungen
  - : Screenreader haben oft Schwierigkeiten damit, ständig wechselnde Inhalte korrekt wiederzugeben; mit ARIA können wir `aria-live` verwenden, um Screenreader-Benutzer zu informieren, wenn sich ein Inhaltsbereich dynamisch aktualisiert, z.B. durch das Abrufen neuer Inhalte vom Server und das Aktualisieren des DOM durch JavaScript.
- Verbesserung der Tastaturzugänglichkeit
  - : Es gibt eingebaute HTML-Elemente, die über native Tastaturzugänglichkeit verfügen; wenn andere Elemente zusammen mit JavaScript verwendet werden, um ähnliche Interaktionen zu simulieren, leidet die Tastaturzugänglichkeit und die Screenreader-Berichterstattung darunter. Wo dies unvermeidlich ist, bietet WAI-ARIA eine Möglichkeit, anderen Elementen den Fokus zu ermöglichen (mit `tabindex`).
- Zugänglichkeit von nicht-semantischen Steuerelementen
  - : Wenn eine Reihe von verschachtelten `<div>`s zusammen mit CSS/JavaScript verwendet wird, um eine komplexe UI-Funktion zu erstellen, oder wenn ein natives Steuerelement stark durch JavaScript aufgewertet/verändert wird, kann die Zugänglichkeit leiden — Screenreader-Benutzer haben Schwierigkeiten zu verstehen, was die Funktion macht, wenn keine Semantiken oder andere Hinweise vorhanden sind. In diesen Situationen kann ARIA helfen, das Fehlen zu beseitigen, indem es eine Kombination von Rollen wie `button`, `listbox` oder `tablist` und Eigenschaften wie `aria-required` oder `aria-posinset` bereitstellt, um weitere Hinweise zur Funktionalität zu geben.

Im nächsten Abschnitt schauen wir uns die vier Hauptbereiche, die oben beschrieben wurden, genauer an und geben Beispiele. Bevor Sie fortfahren, sollten Sie eine Testumgebung für den Screenreader einrichten, sodass Sie einige der Beispiele testen können, während Sie fortfahren. Weitere Informationen finden Sie in unserem Abschnitt über [Testen von Screenreadern](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers).

> [!CALLOUT]
>
> **Sie sollten WAI-ARIA nur verwenden, wenn Sie es benötigen!**
>
> Durch die Verwendung der richtigen HTML-Elemente erhalten Sie automatisch die erforderlichen Rollen, und Sie sollten _immer_ [native HTML-Funktionen](/de/docs/Learn_web_development/Core/Accessibility/HTML) verwenden, um die Semantiken bereitzustellen, die Screenreader benötigen, um ihren Benutzern mitzuteilen, was vor sich geht. Manchmal ist dies nicht möglich, entweder weil Sie eingeschränkte Kontrolle über den Code haben oder weil Sie etwas Komplexes erstellen, das kein einfaches HTML-Element zur Implementierung hat. In solchen Fällen kann WAI-ARIA ein wertvolles Werkzeug zur Verbesserung der Zugänglichkeit sein.
>
> Aber nochmals, verwenden Sie es nur, wenn es notwendig ist!
>
> Testen Sie Ihre Seite auch mit einer Vielzahl von _echten_ Benutzern — nichtbehinderte Menschen, Menschen, die Screenreader verwenden, Menschen, die die Tastaturnavigation verwenden usw. Sie haben bessere Einblicke, wie gut es funktioniert.

## Wegweiser/Landmarken

WAI-ARIA fügt den Browsern das [`role` Attribut](https://w3c.github.io/aria/#role_definitions) hinzu, mit dem Sie Elementen auf Ihrer Website überall, wo es nötig ist, zusätzlichen semantischen Wert hinzufügen können. Der erste große Bereich, in dem dies nützlich ist, besteht darin, Screenreader-Benutzern Informationen zu liefern, damit sie häufige Seitenelemente finden können. Dieses Beispiel hat folgende Struktur:

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

Wenn Sie das Beispiel in einem modernen Browser mit einem Screenreader testen, erhalten Sie bereits einige nützliche Informationen. VoiceOver gibt Ihnen beispielsweise Folgendes:

- Auf dem `<header>` Element — "Banner, 2 Elemente" (es enthält eine Überschrift und das `<nav>`).
- Auf dem `<nav>` Element — "Navigation, 2 Elemente" (es enthält eine Liste und ein Formular).
- Auf dem `<main>` Element — "Haupt, 2 Elemente" (es enthält einen Artikel und einen Artikel).
- Auf dem `<aside>` Element — "ergänzend, 2 Elemente" (es enthält eine Überschrift und eine Liste).
- Beim Suchformulareingabefeld — "Suchabfrage, Einfügemodus am Anfang des Textes".
- Auf dem `<footer>` Element — "Fußzeile, 1 Element".

Wenn Sie zum VoiceOver-Landmarken-Menü gehen (zugänglich über die VoiceOver-Taste + U und dann mit den Cursortasten durch die Menüoptionen navigieren), sehen Sie, dass die meisten Elemente übersichtlich aufgelistet sind, sodass sie schnell zugänglich sind.

![VoiceOver-Menü auf einem Mac für schnelle Barrierefreiheit. Header "Landmarks" und Listeneinträge wie Banner, Navigation, Main und Komplementär sind enthalten.](landmarks-list.png)

Wir könnten hier jedoch noch besser werden. Das Suchformular ist ein wirklich wichtiges Merkmal, das die Menschen finden möchten, jedoch wird es im Landmarken-Menü nicht aufgelistet oder als bemerkenswerte Landmarke über das eigentliche Eingabefeld hinaus, das als Sucheingabe bezeichnet wird (`<input type="search">`).

Um das Formular als Landmarke zu kennzeichnen, können Sie es entweder mit dem {{htmlelement("search")}}-Element umschließen oder ihm die ARIA-Eigenschaft `role="search"` geben. Als allgemeine Regel sollten Sie HTML-Semantiken dort verwenden, wo möglich, und nur ARIA, wenn es kein HTML-Äquivalent gibt.

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

Am wichtigsten ist, dass wir semantisches HTML verwendet haben, das der Struktur der Seite Bedeutung und Rollen gibt, ohne unnötige [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) Attribute zu unserem HTML-Struktur hinzugefügt zu haben, die eine Struktur wie diese hat:

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

Wir haben Ihnen in diesem Beispiel auch ein Bonusmerkmal gegeben — das {{htmlelement("input")}}-Element wurde mit dem Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) versehen, das ihm ein beschreibendes Etikett gibt, das von einem Screenreader vorgelesen wird, obwohl wir kein {{htmlelement("label")}}-Element hinzugefügt haben. In solchen Fällen ist dies sehr nützlich — ein Suchformular wie dieses ist eine sehr häufige, leicht erkennbare Funktion, und das Hinzufügen eines visuellen Etiketts würde das Seitendesign stören.

```html
<input
  type="search"
  name="q"
  placeholder="Search query"
  aria-label="Search through site content" />
```

Wenn Sie jetzt VoiceOver verwenden, um dieses Beispiel zu betrachten, erhalten Sie einige Verbesserungen:

- Das Suchformular wird sowohl beim Durchsuchen der Seite als auch im Landmarken-Menü als separater Punkt bezeichnet.
- Der Etikettentext, der im `aria-label` Attribut enthalten ist, wird vorgelesen, wenn die Formulareingabe hervorgehoben ist.

Wenn Sie ältere Browser wie den IE8 unterstützen müssen, lohnt es sich, ARIA-Rollen für diesen Zweck einzuschließen. Und wenn Ihre Site aus irgendeinem Grund nur aus `<div>`s aufgebaut ist, sollten Sie unbedingt die ARIA-Rollen einschließen, um diese dringend benötigten Semantiken bereitzustellen!

Sie werden noch viel mehr über diese Semantiken und die Leistungsfähigkeit von ARIA-Eigenschaften/Attributen unten sehen, insbesondere im Abschnitt [Zugänglichkeit von nicht-semantischen Steuerungen](#zugänglichkeit_von_nicht-semantischen_steuerungen). Schauen wir uns für den Moment an, wie ARIA bei dynamischen Inhaltsaktualisierungen helfen kann.

## Dynamische Inhaltsaktualisierungen

In den DOM geladene Inhalte können mit einem Screenreader leicht abgerufen werden, von textlichen Inhalten bis hin zu alternativen Texten, die an Bilder angehängt sind. Traditionelle statische Webseiten mit überwiegend Textinhalt sind daher leicht für Menschen mit Sehbehinderungen zugänglich zu machen.

Das Problem ist, dass moderne Web-Apps oft nicht nur statischer Text sind — oft aktualisieren sie Teile der Seite, indem sie neue Inhalte vom Server abrufen (in diesem Beispiel verwenden wir ein statisches Zitat-Array) und das DOM aktualisieren. Diese werden manchmal als **Live-Bereiche** bezeichnet.

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

Dies funktioniert gut, ist aber nicht gut für die Barrierefreiheit — die Inhaltsaktualisierung wird von Screenreadern nicht erkannt, sodass ihre Benutzer nicht wissen, was vor sich geht. Dies ist ein ziemlich triviales Beispiel, aber stellen Sie sich nur vor, Sie würden eine komplexe UI mit vielen ständig aktualisierenden Inhalten erstellen, wie ein Chatroom, eine Strategie-Spiel-UI oder eine live aktualisierende Warenkorbanzeige — es wäre unmöglich, die App effektiv zu verwenden, ohne eine Möglichkeit, den Benutzer über die Aktualisierungen zu informieren.

WAI-ARIA bietet zum Glück einen nützlichen Mechanismus zur Bereitstellung dieser Alarme — die [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) Eigenschaft. Wenn diese auf ein Element angewendet wird, liest der Screenreader den aktualisierten Inhalt. Wie dringend der Inhalt vorgelesen wird, hängt vom Attributwert ab:

- `off`
  - : Der Standardwert. Updates sollten nicht angekündigt werden.
- `polite`
  - : Updates sollten angekündigt werden, nur wenn der Benutzer untätig ist.
- `assertive`
  - : Updates sollten dem Benutzer so schnell wie möglich angekündigt werden.

Hier aktualisieren wir das `<blockquote>` öffnende Tag wie folgt:

```html
<blockquote aria-live="assertive">…</blockquote>
```

Dies führt dazu, dass ein Screenreader den Inhalt bei der Aktualisierung vorliest: Versuchen Sie, die aktualisierte Live-Version zu testen:

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
> Es gibt einige weitere ARIA-Eigenschaften, die `aria-live`-bezogen sind und die ebenfalls wissenswert sind:
>
> - Die [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic) Eigenschaft, wenn auf `true` gesetzt, weist Screenreader an, den gesamten Elementinhalt als eine atomare Einheit zu lesen, nicht nur die aktualisierten Teile. Dies ist nützlich, wenn nur Inhalte eines Abschnitts aktualisiert werden, aber Sie möchten, dass die Überschrift bei jeder Änderung mitgelesen wird, um den Benutzer an ihren Inhalt zu erinnern.
> - Die [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant) Eigenschaft ist nützlich, wenn man steuern möchte, was gelesen wird, wenn ein Live-Bereich aktualisiert wird. Man kann z.B. nur Inhaltszugänge oder -entfernungen auslesen lassen.

## Verbesserung der Tastaturzugänglichkeit

Wie in einigen anderen Teilen des Moduls besprochen, ist eine der Hauptstärken von HTML in Bezug auf die Barrierefreiheit die eingebaute Tastaturzugänglichkeit von Merkmalen wie Tasten, Formelemente und Links. Im Allgemeinen können Sie die Tabulatortaste verwenden, um zwischen Steuerungen zu wechseln, die Eingabetaste verwenden, um Steuerungen auszuwählen oder zu aktivieren, und gelegentlich andere Steuerungen wie z.B. die Auf- und Abwärtstaste, um zwischen Optionen in einer `<select>` Box zu wechseln.

In manchen Fällen werden Sie jedoch Code schreiben müssen, der entweder nicht-semantische Elemente als Schaltflächen (oder andere Arten von Steuerungen) verwendet oder fokussierbare Steuerungen für nicht ganz den richtigen Zweck verwendet. Vielleicht versuchen Sie, schlechten geerbten Code zu reparieren, oder Sie erstellen eine komplexe Benutzeroberfläche, die dies erfordert.

In Bezug auf nicht-fokussierbaren Code macht WAI-ARIA das `tabindex` Attribut mit einigen neuen Werten nützlicher:

- `tabindex="0"` — wie oben beschrieben, ermöglicht dieser Wert Elementen, die normalerweise nicht fokussierbar sind, fokussierbar zu werden. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — erlaubt es Elementen, die normalerweise nicht fokussierbar sind, den Fokus programmgesteuert zu erhalten, z.B. über JavaScript oder als Ziel von Links.

Wir haben dies detaillierter besprochen und eine typische Implementierung in unserem HTML-Barrierefreiheitsartikel gezeigt — siehe [Tastaturzugänglichkeit wieder einbauen](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in).

## Zugänglichkeit von nicht-semantischen Steuerungen

Dies folgt direkt auf den vorherigen Abschnitt — wenn eine Reihe von verschachtelten `<div>`s zusammen mit CSS/JavaScript verwendet wird, um eine komplexe UI-Funktion zu erstellen, oder wenn eine native Steuerung stark durch JavaScript verbessert/verändert wird, kann nicht nur die Tastaturzugänglichkeit leiden, sondern Screenreader-Benutzer haben Schwierigkeiten, herauszufinden, was die Funktion macht, wenn keine Semantiken oder andere Hinweise vorhanden sind. In solchen Situationen kann ARIA helfen, die fehlenden Semantiken bereitzustellen.

### Formularvalidierung und Fehlerwarnungen

Lassen Sie uns zunächst das Formularbeispiel, das wir zuerst in unserem Artikel zur CSS- und JavaScript-Barrierefreiheit besprochen haben, nochmals betrachten (lesen Sie [Barrierefreiheit unaufdringlich halten](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#keeping_it_unobtrusive) für eine vollständige Auffrischung). Am Ende dieses Abschnitts haben wir einige ARIA-Attribute in das Fehlernachrichtenelement, das bei einer Validierungsfehlermeldung angezeigt wird, eingefügt:

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

- [`role="alert"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) macht das angewandte Element automatisch zu einem Live-Bereich, sodass Änderungen daran vorgelesen werden; es identifiziert es auch semantisch als Warnmeldung (wichtige zeit-/kontextsensitive Informationen) und stellt eine bessere, barrierefreiere Möglichkeit dar, eine Warnung an den Benutzer zu liefern (modale Dialoge wie [`alert()`](/de/docs/Web/API/Window/alert) Aufrufe haben eine Reihe von Barrierefreiheitsproblemen; siehe [Popup Fenster](https://webaim.org/techniques/javascript/other#popups) von WebAIM).
- Ein [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant) Wert von `all` gibt dem Screenreader die Anweisung, die Inhalte der Fehlerliste bei jedem Änderungsereignis — d.h. wenn Fehler hinzugefügt oder entfernt werden — vorzulesen. Dies ist nützlich, weil der Benutzer wissen möchte, welche Fehler übrig sind, nicht nur, was zur Liste hinzugefügt oder entfernt wurde.

Wir könnten mit unserer ARIA-Nutzung noch weiter gehen und mehr Validierungshilfe bereitstellen. Wie wäre es damit, anzugeben, ob Felder überhaupt erforderlich sind und welchen Bereich das Alter haben sollte?

1. Machen Sie an dieser Stelle eine Kopie unserer Dateien [`form-validation.html`](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html) und [`validation.js`](https://github.com/mdn/learning-area/blob/main/accessibility/css/validation.js) und speichern Sie sie in einem lokalen Verzeichnis.
2. Öffnen Sie beide in einem Texteditor und sehen Sie sich an, wie der Code funktioniert.
3. Fügen Sie zunächst ein Absatz unmittelbar vor dem öffnenden `<form>` Tag, wie den untenstehenden, hinzu und kennzeichnen Sie die `<label>`s des Formulars mit einem Sternchen. Dies ist normalerweise, wie wir erforderliche Felder für sehende Benutzer kennzeichnen.

   ```html
   <p>Fields marked with an asterisk (*) are required.</p>
   ```

4. Das ergibt visuell Sinn, aber es ist für Screenreader-Benutzer nicht so einfach zu verstehen. Zum Glück stellt WAI-ARIA das [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required) Attribut zur Verfügung, um Screenreader-Hinweise darauf zu geben, dass Formulareingaben ausgefüllt werden müssen. Aktualisieren Sie die `<input>` Elemente folgendermaßen:

   ```html
   <input type="text" name="name" id="name" aria-required="true" />

   <input type="number" name="age" id="age" aria-required="true" />
   ```

5. Wenn Sie das Beispiel jetzt speichern und es mit einem Screenreader testen, sollten Sie etwas wie "Geben Sie Ihren Namen ein Sternchen, erforderlich, Text bearbeiten" hören.
6. Es wäre auch nützlich, wenn wir sehbehinderten und sehenden Benutzern eine Vorstellung davon geben, welchen Wert das Alter haben sollte. Dies wird häufig als Tooltip oder Platzhaltertext im Formularfeld angezeigt. WAI-ARIA umfasst [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) Eigenschaften, um min- und max-Werte anzugeben, und Screenreader unterstützen die nativen `min` und `max` Attribute. Eine weitere gut unterstützte Funktion ist das HTML `placeholder` Attribut, das eine Nachricht enthalten kann, die im Eingabefeld angezeigt wird, wenn kein Wert eingegeben ist und von einigen Screenreadern vorgelesen wird. Aktualisieren Sie Ihr Zahleninput folgendermaßen:

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

Fügen Sie immer ein {{HTMLelement('label')}} für jede Eingabe hinzu. Während einige Screenreader den Platzhaltertext ankündigen, tun dies die meisten nicht. Akzeptable Ersetzungen, um Formularelementen einen zugänglichen Namen zu geben, umfassen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) und [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby). Das `<label>`-Element mit einem `for`-Attribut ist jedoch die bevorzugte Methode, da es für alle Benutzer, einschließlich Maubenutzer, Benutzerfreundlichkeit bietet.

> [!NOTE]
> Sie können das abgeschlossene Beispiel live unter [`form-validation-updated.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-updated.html) sehen.

WAI-ARIA ermöglicht auch einige erweiterte Methoden zur Formularetikettierung, jenseits des klassischen {{htmlelement("label")}}-Elements. Wir haben bereits darüber gesprochen, die [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Eigenschaft zu verwenden, um ein Etikett bereitzustellen, wenn wir nicht möchten, dass das Etikett für sehende Benutzer sichtbar ist (siehe den Abschnitt [Wegweiser/Landmarken](#signpostslandmarks) oben). Einige andere Kennzeichnungstechniken verwenden andere Eigenschaften wie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn Sie ein nicht-`<label>`-Element als Bezeichnung festlegen oder mehrere Formulareingaben mit dem gleichen Label versehen möchten und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby), wenn Sie zusätzliche Informationen einem Formulareingabefeld zuordnen und es ebenfalls vorgelesen haben möchten. Weitere Informationen finden Sie im [Advanced Form Labeling-Artikel von WebAIM](https://webaim.org/techniques/forms/advanced).

Es gibt auch viele andere nützliche Eigenschaften und Zustände, um den Status von Formularelementen anzugeben. Beispielsweise kann `aria-disabled="true"` verwendet werden, um anzuzeigen, dass ein Formularfeld deaktiviert ist. Viele Browser überspringen deaktivierte Formularelemente, was dazu führt, dass sie von Screenreadern nicht vorgelesen werden. In einigen Fällen wird ein deaktiviertes Element wahrgenommen, daher ist es eine gute Idee, dieses Attribut einzuschließen, damit der Screenreader weiß, dass ein deaktiviertes Formularelement tatsächlich deaktiviert ist.

Wenn sich der deaktivierte Zustand einer Eingabe wahrscheinlich ändert, dann ist es auch eine gute Idee anzugeben, wann dies geschieht und was das Ergebnis ist. Beispielsweise gibt es in unserem [`form-validation-checkbox-disabled.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-checkbox-disabled.html) Demo eine Checkbox, die beim Aktivieren ein weiteres Formulareingabefeld aktiviert, um weitere Informationen einzugeben. Wir haben auch einen versteckten Live-Bereich eingerichtet, der mit absoluter Positionierung aus der Ansicht versteckt ist:

```html
<p class="hidden-alert" aria-live="assertive"></p>
```

Wenn die Checkbox aktiviert/deaktiviert wird, aktualisieren wir den Text im versteckten Live-Bereich, um Screenreader-Benutzer darüber zu informieren, was das Ergebnis des Anhakens dieser Checkbox ist, sowie den `aria-disabled` Zustand und einige visuelle Indikatoren ebenfalls:

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

### Beschreibung nicht-semantischer Schaltflächen als Schaltflächen

Wir haben in diesem Kurs bereits mehrmals die native Barrierefreiheit (und die Problematik, andere Elemente zu verwenden, um Schaltflächen, Links oder Formularelemente nachzuahmen) erwähnt (siehe [Verwenden Sie nach Möglichkeit semantische UI-Steuerungen](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible) im HTML-Barrierefreiheitsartikel und [Verbesserung der Tastaturzugänglichkeit](#verbesserung_der_tastaturzugänglichkeit) oben). Grundsätzlich können Sie in vielen Fällen mit `tabindex` und etwas JavaScript die Tastaturzugänglichkeit relativ einfach wiederherstellen.

Aber was ist mit Screenreadern? Sie sehen die Elemente immer noch nicht als Schaltflächen. Wenn wir unser Beispiel [`fake-div-buttons.html`](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) mit einem Screenreader testen, werden unsere gefälschten Schaltflächen mit Ausdrücken wie "Klicken Sie auf mich!, Gruppe" zurückgegeben, was offensichtlich verwirrend ist.

Wir können dies mit einer WAI-ARIA-Rolle reparieren. Erstellen Sie eine lokale Kopie von [`fake-div-buttons.html`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) und fügen Sie jedem Schaltflächen-`<div>` [`role="button"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) hinzu, zum Beispiel:

```html
<div data-message="This is from the first button" tabindex="0" role="button">
  Click me!
</div>
```

Jetzt, wenn Sie dies mit einem Screenreader ausprobieren, wird Ihnen gesagt, dass es sich um Schaltflächen handelt, indem Ausdrücke wie "Klicken Sie auf mich!, Schaltfläche" verwendet werden. Während dies viel besser ist, müssen Sie immer noch alle nativen Schaltflächenfunktionen hinzufügen, die Benutzer erwarten, wie das Behandeln von <kbd>enter</kbd> und Klickereignissen, wie im [`button` roles Dokumentation](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) erklärt.

> [!NOTE]
> Vergessen Sie jedoch nicht, dass die Verwendung des richtigen semantischen Elements, wo immer möglich, immer besser ist. Wenn Sie eine Schaltfläche erstellen möchten und ein {{htmlelement("button")}}-Element verwenden können, sollten Sie ein {{htmlelement("button")}}-Element verwenden!

### Benutzer durch komplexe Widgets führen

Es gibt eine ganze Reihe anderer [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles), die nicht-semantische Elementstrukturen als gängige UI-Merkmale identifizieren können, die über das hinausgehen, was im Standard-HTML verfügbar ist, zum Beispiel [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role), [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role). Sie können mehrere praktische Beispiele in der [Deque university code library](https://dequeuniversity.com/library/) sehen, um Ihnen eine Vorstellung davon zu geben, wie solche Steuerungen barrierefrei gemacht werden können.

Sie finden auch mehrere Live-Beispiele in unserer [WAI-ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles) Dokumentation. Sehen Sie sich zum Beispiel unser [ARIA: tab role example](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role#example) an, das erklärt, wie eine barrierefreie Registerkartenoberfläche implementiert wird.

## Zusammenfassung

Dieser Artikel hat bei weitem nicht alles behandelt, was in WAI-ARIA verfügbar ist, aber er sollte Ihnen genügend Informationen gegeben haben, um zu verstehen, wie sie zu verwenden ist und einige der häufigsten Muster zu kennen, die sie erfordert.

Im nächsten Artikel geben wir Ihnen einige Tests, die Sie verwenden können, um zu überprüfen, wie gut Sie alle diese Informationen verstanden und behalten haben.

## Siehe auch

- [Aria-Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes): Alle `aria-*` Attribute
- [WAI-ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles): Kategorien von ARIA-Rollen und die auf MDN behandelten Rollen
- [ARIA in HTML](https://w3c.github.io/html-aria/) auf W3C: Eine Spezifikation, die für jedes HTML-Merkmal die durch den Browser implizit angewendeten Zugänglichkeits-(ARIA)-Semantiken definiert und die WAI-ARIA-Funktionen, die Sie festlegen können, wenn zusätzliche Semantiken erforderlich sind
- [Deque university code library](https://dequeuniversity.com/library/): Eine Bibliothek mit wirklich nützlichen und praxisnahen Beispielen, die komplexe UI-Steuerungen zeigt, die unter Verwendung von WAI-ARIA-Funktionen zugänglich gemacht werden
- [WAI-ARIA authoring practices](https://www.w3.org/WAI/ARIA/apg/) auf W3C: Ein sehr detailliertes Designmuster vom W3C, das erklärt, wie verschiedene Arten von komplexen UI-Steuerungen implementiert werden und dabei unter Verwendung von WAI-ARIA-Funktionen zugänglich sind

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA", "Learn_web_development/Core/Accessibility")}}
