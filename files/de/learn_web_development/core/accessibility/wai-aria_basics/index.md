---
title: WAI-ARIA Grundlagen
short-title: WAI-ARIA
slug: Learn_web_development/Core/Accessibility/WAI-ARIA_basics
l10n:
  sourceCommit: 9da2567689c0a4397b0d70efbbb878dec3115754
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility")}}

Aufbauend auf dem vorherigen Artikel kann es manchmal schwierig sein, komplexe UI-Steuerelemente zu erstellen, die unsemantisches HTML und dynamisch durch JavaScript aktualisierte Inhalte beinhalten. WAI-ARIA ist eine Technologie, die bei solchen Problemen helfen kann, indem zusätzliche Semantiken hinzugefügt werden, die von Browsern und unterstützenden Technologien erkannt und genutzt werden können, um Benutzern mitzuteilen, was vor sich geht. Hier werden wir zeigen, wie Sie es auf einem grundlegenden Niveau verwenden können, um die Zugänglichkeit zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und Barrierefreiheitsrichtlinien, wie sie in den vorherigen Lektionen des Moduls gelehrt wurden.</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von WAI-ARIA — zur Bereitstellung von Semantiken für ansonsten unsemantisches HTML, damit Benutzer von unterstützenden Technologien die präsentierten Schnittstellen verstehen können.</li>
          <li>Die grundlegende Syntax — Rollen, Eigenschaften und Zustände.</li>
          <li>Landmarken und Wegweiser.</li>
          <li>Verbesserung der Tastaturzugänglichkeit.</li>
          <li>Ankündigung dynami scher Inhaltsaktualisierungen mit Live-Regionen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist WAI-ARIA?

Beginnen wir damit, uns anzuschauen, was WAI-ARIA ist und was es für uns tun kann.

### Ein ganz neues Set an Problemen

Als Web-Apps komplexer und dynamischer wurden, tauchten neue Barrierefreiheitsfunktionen und Probleme auf.

Zum Beispiel führte HTML eine Reihe von semantischen Elementen ein, um allgemeine Seitenmerkmale zu definieren ({{htmlelement("nav")}}, {{htmlelement("footer")}}, usw.). Bevor diese verfügbar waren, verwendeten Entwickler {{htmlelement("div")}}s mit IDs oder Klassen, z. B. `<div class="nav">`, aber diese waren problematisch, da es keine einfache Möglichkeit gab, programmgesteuert ein bestimmtes Seitenmerkmal wie die Hauptnavigation zu finden.

Die anfängliche Lösung bestand darin, ein oder mehrere versteckte Links oben auf der Seite hinzuzufügen, um zur Navigation (oder was auch immer) zu verlinken, zum Beispiel:

```html
<a href="#hidden" class="hidden">Skip to navigation</a>
```

Aber das ist immer noch nicht sehr präzise und kann nur verwendet werden, wenn der Screenreader von oben auf der Seite liest.

Ein weiteres Beispiel: Apps begannen, komplexe Steuerelemente wie Datumsauswahlboxen zum Auswählen von Daten oder Schieberegler zum Auswählen von Werten zu enthalten. HTML bietet spezielle Eingabetypen, um solche Steuerelemente darzustellen:

```html
<input type="date" /> <input type="range" />
```

Diese wurden ursprünglich nicht gut unterstützt und es war, und ist immer noch in gewissem Maße, schwierig, sie zu stylen, was Designer und Entwickler dazu brachte, sich für benutzerdefinierte Lösungen zu entscheiden. Anstatt diese nativen Funktionen zu verwenden, verlassen sich manche Entwickler auf JavaScript-Bibliotheken, die solche Steuerelemente als eine Reihe verschachtelter {{htmlelement("div")}}s generieren, die dann mit CSS gestaltet und mit JavaScript kontrolliert werden.

Das Problem hier ist, dass sie visuell funktionieren, aber Screenreader nicht verstehen können, worum es sich handelt, und ihre Benutzer werden nur darüber informiert, dass sie ein Wirrwarr von Elementen sehen können, ohne Semantiken, die deren Bedeutung beschreiben.

### Einführung von WAI-ARIA

[WAI-ARIA](https://www.w3.org/TR/wai-aria/) (Web Accessibility Initiative - Accessible Rich Internet Applications) ist eine Spezifikation, die von der W3C geschrieben wurde und eine Reihe zusätzlicher HTML-Attribute definiert, die auf Elemente angewendet werden können, um zusätzliche Semantiken bereitzustellen und die Zugänglichkeit zu verbessern, wo immer sie fehlt. In der Spezifikation sind drei Hauptfunktionen definiert:

- [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Diese definieren, was ein Element ist oder tut. Viele davon sind sogenannte Landmark-Rollen, die weitgehend den semantischen Wert struktureller Elemente duplizieren, wie z.B. `role="navigation"` ({{htmlelement("nav")}}), `role="banner"` (Dokument {{htmlelement("header")}}), `role="complementary"` ({{htmlelement("aside")}}) oder `role="search"` ({{htmlelement("search")}}). Einige andere Rollen beschreiben unterschiedliche Seitenstrukturen, die keine Elemente haben, die zu diesen Rollen passen, wie `role="tablist"` und `role="tabpanel"`, die häufig in Benutzeroberflächen (UIs) zu finden sind.
- Eigenschaften
  - : Diese definieren die Eigenschaften von Elementen, die verwendet werden können, um ihnen zusätzliche Bedeutung oder Semantiken zu geben. Ein Beispiel ist `aria-required="true"`, das angibt, dass ein Formulareingabefeld ausgefüllt werden muss, um gültig zu sein, während `aria-labelledby="label"` es ermöglicht, eine ID auf ein Element zu setzen und es dann als Bezeichnung für etwas anderes auf der Seite zu referenzieren, einschließlich mehrerer Elemente, was mit `<label for="input">` nicht möglich ist. Beispielsweise könnten Sie `aria-labelledby` verwenden, um anzugeben, dass eine Schlüsselbeschreibung, die sich in einem {{htmlelement("div")}} befindet, die Bezeichnung für mehrere Tabellenzellen ist, oder es alternativ zu Image-Alt-Text verwenden, indem Sie vorhandene Informationen auf der Seite als Bild-Alt-Text angeben, anstatt sie innerhalb des `alt`-Attributs zu wiederholen. Ein Beispiel hierfür sehen Sie in den [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives).
- Zustände
  - : Spezielle Eigenschaften, die die aktuellen Bedingungen von Elementen definieren, wie `aria-disabled="true"`, was einem Screenreader angibt, dass ein Formulareingabefeld derzeit deaktiviert ist. Zustände unterscheiden sich von Eigenschaften dadurch, dass sich Eigenschaften im Lebenszyklus einer App nicht ändern, während sich Zustände ändern können, in der Regel programmgesteuert über JavaScript.

Ein wichtiger Punkt zu WAI-ARIA-Attributen ist, dass sie nichts an der Webseite ändern, abgesehen von den Informationen, die über die Barrierefreiheits-APIs des Browsers bereitgestellt werden (wo Screenreader ihre Informationen herbekommen). WAI-ARIA beeinflusst nicht die Webseitenstruktur, das DOM usw., obwohl die Attribute nützlich sein können, um Elemente mittels CSS auszuwählen.

> [!NOTE]
> Eine nützliche Liste aller ARIA-Rollen und deren Verwendungen, mit Links zu weiteren Informationen, können Sie in der WAI-ARIA-Spezifikation finden — siehe [Definition of Roles](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) — auf dieser Seite — siehe [ARIA roles](/de/docs/Web/Accessibility/ARIA/Reference/Roles).
>
> Die Spezifikation enthält ebenfalls eine Liste aller Eigenschaften und Zustände, mit Links zu weiteren Informationen — siehe [Definitions of States and Properties (all `aria-*` attributes)](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def).

### Wo wird WAI-ARIA unterstützt?

Das ist keine einfache Frage zu beantworten. Es ist schwierig, eine schlüssige Ressource zu finden, die angibt, welche Funktionen von WAI-ARIA unterstützt werden und wo dies der Fall ist, weil:

1. Es in der WAI-ARIA-Spezifikation viele Funktionen gibt.
2. Es viele Kombinationen aus Betriebssystemen, Browsern und Screenreadern zu berücksichtigen gibt.

Dieser letzte Punkt ist entscheidend — um einen Screenreader überhaupt nutzen zu können, muss Ihr Betriebssystem Browser ausführen, die die notwendigen Barrierefreieheits-APIs implementiert haben, um die Informationen bereitstellen zu können, die Screenreader benötigen. Die meisten populären Betriebssysteme haben ein oder zwei Browser, mit denen Screenreader arbeiten können. Die Paciello Group hat einen ziemlich aktuellen Post, der Daten dazu liefert — siehe [Rough Guide: browsers, operating systems and screen reader support updated](https://www.tpgi.com/rough-guide-browsers-operating-systems-and-screen-reader-support-updated/).

Als Nächstes müssen Sie sich darüber Gedanken machen, ob die betreffenden Browser ARIA-Funktionen unterstützen und über ihre APIs bereitstellen, aber auch, ob Screenreader diese Informationen erkennen und ihren Benutzern auf nützliche Weise präsentieren können.

1. Die Unterstützung durch Browser ist fast universell.
2. Die Unterstützung für ARIA-Funktionen durch Screenreader ist nicht ganz so weit, aber die beliebtesten Screenreader sind auf einem guten Weg. Sie können einen Eindruck von den Unterstützungsniveaus bekommen, indem Sie den Artikel [WAI-ARIA Screen reader compatibility](https://www.powermapper.com/tests/screen-readers/aria/) von Powermapper lesen.

In diesem Artikel werden wir nicht versuchen, jede WAI-ARIA-Funktion und deren genaue Unterstützungsdetails abzudecken. Stattdessen werden wir die kritischsten WAI-ARIA-Funktionen behandeln, von denen Sie wissen sollten; wenn wir keine Unterstützungsdetails erwähnen, können Sie davon ausgehen, dass die Funktion gut unterstützt wird. Wir werden Ausnahmen dazu klar anmerken.

> [!NOTE]
> Einige JavaScript-Bibliotheken unterstützen WAI-ARIA, was bedeutet, dass sie beim Generieren von UI-Funktionen wie komplexen Formularelementen ARIA-Attribute hinzufügen, um die Accessibility dieser Funktionen zu verbessern. Wenn Sie eine externe JavaScript-Lösung für die schnelle UI-Entwicklung suchen, sollten Sie die Barrierefreiheit ihrer UI-Widgets als wichtigen Faktor bei Ihrer Wahl in Betracht ziehen. Gute Beispiele sind jQuery UI (siehe [About jQuery UI: Deep accessibility support](https://jqueryui.com/about/#deep-accessibility-support)), [ExtJS](https://www.sencha.com/products/extjs/) und [Dojo/Dijit](https://dojotoolkit.org/reference-guide/1.10/dijit/a11y/statement.html).

### Wann sollten Sie WAI-ARIA verwenden?

Wir haben bereits einige der Probleme besprochen, die zur Entwicklung von WAI-ARIA führten, aber im Wesentlichen gibt es vier Hauptbereiche, in denen WAI-ARIA nützlich ist:

- Wegweiser/Landmarken
  - : Die Attributwerte [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) von ARIA können als Landmarken fungieren, die entweder die Semantik von HTML-Elementen replizieren (z.B. {{htmlelement("nav")}}) oder über die HTML-Semantik hinausgehen, um Wegweiser für verschiedene funktionale Bereiche bereitzustellen, z.B. `search`, `tablist`, `tab`, `listbox` usw.
- Dynamische Inhaltsaktualisierungen
  - : Screenreader haben oft Schwierigkeiten, ständig wechselnde Inhalte zu melden; mit ARIA können wir `aria-live` verwenden, um Benutzern von Screenreadern mitzuteilen, wenn ein Inhaltsbereich dynamisch aktualisiert wird: z.B. indem JavaScript auf der Seite neue Inhalte vom Server abruft und das DOM aktualisiert [entspricht](/de/docs/Learn_web_development/Core/Scripting/Network_requests).
- Verbesserung der Tastaturzugänglichkeit
  - : Es gibt eingebaute HTML-Elemente, die über native Tastaturzugänglichkeit verfügen; wenn andere Elemente zusammen mit JavaScript verwendet werden, um ähnliche Interaktionen zu simulieren, leidet die Tastaturzugänglichkeit und die Berichterstattung durch den Screenreader darunter. Wo dies unvermeidlich ist, bietet WAI-ARIA eine Möglichkeit, anderen Elementen das Aufnehmen des Fokus zu ermöglichen (durch Verwendung von `tabindex`).
- Zugänglichkeit von nicht-semantischen Steuerelementen
  - : Wenn eine Reihe verschachtelter `<div>`s zusammen mit CSS/JavaScript verwendet wird, um ein komplexes UI-Feature zu erstellen, oder ein nativer Controller durch JavaScript stark verbessert/verändert wird, kann die Zugänglichkeit leiden — Benutzer von Screenreadern werden es schwer haben, herauszufinden, was das Feature tut, wenn keine Semantiken oder andere Hinweise vorliegen. In diesen Situationen kann ARIA helfen, das Fehlende mit einer Kombination aus Rollen wie `button`, `listbox` oder `tablist` und Eigenschaften wie `aria-required` oder `aria-posinset` zu bereitstellen, um weitere Hinweise auf die Funktionalität zu geben.

#### Sie sollten WAI-ARIA nur verwenden, wenn Sie es wirklich müssen!

Die korrekten HTML-Elemente zu verwenden, gibt Ihnen implizit die Rollen, die benötigt werden, und Sie sollten _immer_ [native HTML-Funktionen](/de/docs/Learn_web_development/Core/Accessibility/HTML) verwenden, um die Semantik bereitzustellen, die benötigt wird, damit Screenreader ihren Benutzern mitteilen können, was vor sich geht. Manchmal ist dies nicht möglich, entweder weil Sie über den Code nur eingeschränkte Kontrolle haben oder weil Sie etwas Komplexes erstellen, das kein einfach zu implementierendes HTML-Element hat. In solchen Fällen kann WAI-ARIA ein wertvolles Werkzeug zur Verbesserung der Barrierefreiheit sein.

Aber nochmals, nutzen Sie es nur, wenn es nötig ist!

> [!NOTE]
> Versuchen Sie auch sicherzustellen, dass Sie Ihre Website mit einer Vielzahl von _echten_ Benutzern testen — Menschen ohne Behinderung, Menschen, die Screenreader nutzen, Menschen, die die Tastaturnavigation verwenden, usw. Sie werden bessere Einblicke darüber haben, wie gut sie funktioniert.

## Praktische WAI-ARIA-Implementierungen

Im nächsten Abschnitt werden wir uns die vier Bereiche genauer ansehen, zusammen mit praktischen Beispielen. Bevor Sie fortfahren, sollten Sie ein Testsetup für Screenreader einrichten, damit Sie einige der Beispiele testen können, während Sie durchgehen.

Sehen Sie sich unseren Abschnitt über [Screenreader-Tests](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers) für weitere Informationen an.

### Wegweiser/Landmarken

WAI-ARIA fügt den Browsern das [`role`-Attribut](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) hinzu, mit dem Sie den Elementen auf Ihrer Seite zusätzliche semantische Werte hinzufügen können, wo immer sie benötigt werden. Der erste wichtige Bereich, in dem diese nützlich sind, ist die Bereitstellung von Informationen für Screenreader, damit ihre Benutzer gemeinsame Seitenelemente finden können. Dieses Beispiel hat die folgende Struktur:

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

Wenn Sie das Beispiel mit einem modernen Browser und einem Screenreader testen, erhalten Sie bereits einige nützliche Informationen. Zum Beispiel gibt Ihnen VoiceOver die folgenden Informationen:

- Auf dem `<header>`-Element — "Banner, 2 Elemente" (es enthält eine Überschrift und das `<nav>`).
- Auf dem `<nav>`-Element — "Navigation 2 Elemente" (es enthält eine Liste und ein Formular).
- Auf dem `<main>`-Element — "Hauptteil, 2 Elemente" (es enthält einen Artikel und ein Aside).
- Auf dem `<aside>`-Element — "Ergänzung, 2 Elemente" (es enthält eine Überschrift und eine Liste).
- Auf dem Suchformulareingabefeld — "Suchanfrage, Einsatz am Anfang des Textes".
- Auf dem `<footer>`-Element — "Fußzeile, 1 Element".

Wenn Sie zum Markierungsmenü von VoiceOver gehen (Zugriff über die VoiceOver-Taste + U und dann die Pfeiltasten verwenden, um durch die Menüoptionen zu blättern), werden die meisten Elemente schön aufgelistet, sodass sie schnell zugänglich sind.

![Macs VoiceOver-Menü für schnelle Zugänglichkeit. Markierungen Kopfzeile und Landmarkenliste, einschließlich Banner, Navigation, Hauptbereich, und Komplementär.](landmarks-list.png)

Wir könnten hier jedoch besser abschneiden. Das Suchformular ist eine wirklich wichtige Markierung, die Benutzer finden möchten, aber es wird nicht im Markierungsmenü aufgeführt oder wie eine bemerkenswerte Markierung behandelt, jenseits davon, dass das eigentliche Eingabefeld als Sucheingabefeld genannt wird (`<input type="search">`).

Wir könnten es durch die Verwendung der ARIA `role="search"` verbessern, aber die Verwendung des {{htmlelement("search")}}-Elements gibt dem Formular implizit diese Rolle.

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

Am wichtigsten ist, dass wir semantisches HTML verwendet haben, das der Struktur der Seite Bedeutung und Rollen verleiht, ohne unnötige [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)-Attribute zu unserer HTML-Struktur hinzuzufügen, die eine Struktur wie diese hat:

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

Wir haben Ihnen auch ein zusätzliches Feature in diesem Beispiel gegeben — das {{htmlelement("input")}}-Element hat das Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) erhalten, das ihm ein beschreibendes Label verleiht, das von einem Screenreader vorgelesen wird, auch wenn wir kein {{htmlelement("label")}}-Element eingefügt haben. In Fällen wie diesem ist dies sehr nützlich — ein Suchformular wie dieses ist ein sehr häufiges, leicht erkennbares Feature, und das Hinzufügen eines visuellen Labels würde das Seitendesign beeinträchtigen.

```html
<input
  type="search"
  name="q"
  placeholder="Search query"
  aria-label="Search through site content" />
```

Wenn wir nun VoiceOver verwenden, um uns dieses Beispiel anzusehen, bekommen wir einige Verbesserungen:

- Das Suchformular wird als separates Element genannt, sowohl beim Durchsuchen der Seite als auch im Landmarkenmenü.
- Der im `aria-label`-Attribut enthaltene Labeltext wird vorgelesen, wenn das Formulareingabefeld hervorgehoben wird.

Falls Sie ältere Browser wie IE8 unterstützen müssen, lohnt es sich, für diesen Zweck ARIA-Rollen hinzuzufügen. Und wenn Ihre Seite aus irgendeinem Grund nur mit `<div>`s aufgebaut ist, sollten Sie die ARIA-Rollen definitiv einschließen, um diese dringend benötigten Semantiken bereitzustellen!

Sie werden viel mehr über diese Semantiken und die Leistungsfähigkeit von ARIA-Eigenschaften/-Attributen unten sehen, insbesondere im Abschnitt [Zugänglichkeit von nicht-semantischen Steuerungen](#zugänglichkeit_von_nicht-semantischen_steuerungen). Für den Moment schauen wir uns an, wie ARIA bei dynamischen Inhaltsaktualisierungen helfen kann.

### Dynamische Inhaltsaktualisierungen

Inhalte, die in das DOM geladen werden, können leicht mit einem Screenreader zugänglich gemacht werden, von Textinhalten bis hin zu alternativen Texten, die an Bilder angehängt sind. Traditionelle statische Websites mit überwiegend Textinhalten sind daher leicht für Menschen mit Sehbehinderungen zugänglich zu machen.

Das Problem ist, dass moderne Web-Apps oft nicht nur statischer Text sind — sie aktualisieren oft Teile der Seite, indem sie neue Inhalte vom Server abrufen (in diesem Beispiel verwenden wir ein statisches Array von Zitaten) und das DOM aktualisieren. Diese werden manchmal als **Live-Regionen** bezeichnet.

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

Dies funktioniert in Ordnung, ist jedoch nicht gut für die Barrierefreiheit — die Inhaltsaktualisierung wird nicht von Screenreadern erkannt, sodass deren Benutzer nicht wissen, was vor sich geht. Dies ist ein recht triviales Beispiel, aber stellen Sie sich nur vor, Sie würden eine komplexe Benutzeroberfläche mit vielen ständig aktualisierten Inhalten erstellen, wie z.B. einen Chatroom, eine Strategie-Game-Benutzeroberfläche oder eine live aktualisierte Warenkorb-Anzeige — es wäre unmöglich, die App auf effektive Weise zu nutzen, ohne eine Art von Möglichkeit, den Benutzer über die Aktualisierungen zu informieren.

WAI-ARIA bietet glücklicherweise einen nützlichen Mechanismus, um diese Benachrichtigungen bereitzustellen — die [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)-Eigenschaft. Indem wir dies auf ein Element anwenden, kann ein Screenreader den aktualisierten Inhalt vorlesen. Wie dringend der Inhalt vorgelesen wird, hängt vom Attributwert ab:

- `off`
  - : Der Standardwert. Aktualisierungen sollten nicht angekündigt werden.
- `polite`
  - : Aktualisierungen sollten nur angekündigt werden, wenn der Benutzer inaktiv ist.
- `assertive`
  - : Aktualisierungen sollten dem Benutzer so schnell wie möglich angekündigt werden.

Hier aktualisieren wir das `<section>`-Start-Tag wie folgt:

```html
<section aria-live="assertive">…</section>
```

Dies führt dazu, dass ein Screenreader den Inhalt vorliest, wenn er aktualisiert wird.

Es gibt eine zusätzliche Überlegung — nur der Teil des Textes, der aktualisiert wird, wird vorgelesen. Es könnte nett sein, wenn wir immer auch die Überschrift vorlesen lassen, damit sich der Benutzer erinnern kann, was vorgelesen wird. Um dies zu erreichen, können wir die [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)-Eigenschaft zur Sektion hinzufügen. Aktualisieren Sie Ihr `<section>`-Start-Tag erneut, wie folgt:

```html
<section aria-live="assertive" aria-atomic="true">…</section>
```

Das Attribut `aria-atomic="true"` weist Screenreader an, den gesamten Inhalt eines Elements als eine atomare Einheit zu lesen, nicht nur die Teile, die aktualisiert wurden.

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
> Die [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)-Eigenschaft ist ebenfalls sehr nützlich, um zu steuern, was vorgelesen wird, wenn eine Live-Region aktualisiert wird. Sie können beispielsweise nur Inhalte hinzufügen oder entfernen, die vorgelesen werden.

### Verbesserung der Tastaturzugänglichkeit

Wie an einigen anderen Stellen im Modul besprochen, ist eine der Hauptstärken von HTML in Bezug auf Barrierefreiheit die eingebaute Tastaturzugänglichkeit von Funktionen wie Schaltflächen, Formularelementen und Links. Im Allgemeinen können Sie die Tab-Taste verwenden, um zwischen Steuerungen zu wechseln, die Eingabe-/Return-Taste, um Steuerungen auszuwählen oder zu aktivieren, und gelegentlich auch andere Steuerelemente, wenn erforderlich (z. B. der Auf- und Ab-Scrollbalken, um zwischen Optionen in einem `<select>`-Feld zu wechseln).

Manchmal müssen Sie jedoch möglicherweise Code schreiben, der entweder nicht-semantische Elemente als Schaltflächen (oder andere Arten von Steuerung) verwendet oder fokussierbare Steuerungen für nicht ganz das richtige Ziel verwendet. Möglicherweise versuchen Sie, einen schlechten Code zu beheben, den Sie übernommen haben, oder Sie bauen eine komplexe Benutzeroberfläche auf, die dies erfordert.

In Bezug auf die Fokussierung von Code erweitert WAI-ARIA das `tabindex`-Attribut mit einigen neuen Werten:

- `tabindex="0"` — wie oben erwähnt, ermöglicht dieser Wert, dass Elemente, die normalerweise nicht fokussierbar sind, fokussierbar werden. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — dies erlaubt normalerweise nicht fokussierbare Elemente, programmgesteuert fokussiert zu werden, z.B. über JavaScript oder als Ziel von Links.

Wir haben dies in unserem HTML-Zugänglichkeitsartikel ausführlicher besprochen und eine typische Implementierung gezeigt — siehe [Tastaturzugänglichkeit zurückbauen](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in).

### Zugänglichkeit von nicht-semantischen Steuerungen

Dies ist eine Fortsetzung des vorherigen Abschnitts — wenn eine Reihe von verschachtelten `<div>`s zusammen mit CSS/JavaScript verwendet wird, um eine komplexe UI-Funktion zu erstellen, oder wenn ein nativer Controller durch JavaScript stark verändert/verbessert wird, kann nicht nur die Tastaturzugänglichkeit leiden, sondern Benutzer von Screenreadern haben es schwer, herauszufinden, was die Funktion tut, wenn keine Semantiken oder andere Hinweise vorhanden sind. In solchen Situationen kann ARIA helfen, fehlende Semantiken bereitzustellen.

#### Formularvalidierung und Fehlermeldungen

Zuerst werfen wir einen Blick auf das Formularbeispiel, das wir in unserem CSS- und JavaScript-Zugänglichkeitsartikel (lesen Sie [Unaufdringlich halten](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#keeping_it_unobtrusive) für eine vollständige Zusammenfassung) behandelt haben. Am Ende dieses Abschnitts zeigten wir, dass wir einige ARIA-Attribute im Fehlermeldungsfeld enthalten haben, das alle Validierungsfehler anzeigt, wenn Sie versuchen, das Formular zu senden:

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

- [`role="alert"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) verwandelt automatisch das Element, das darauf angewendet wird, in eine Live-Region, damit Änderungen daran vorgelesen werden; es identifiziert es auch semantisch als eine Alarmmeldung (wichtige zeit-/kontextabhängige Informationen) und stellt eine bessere, zugänglichere Möglichkeit dar, einem Benutzer einen Alarm zu liefern (modale Dialoge wie [`alert()`](/de/docs/Web/API/Window/alert)-Aufrufe haben eine Reihe von Barrierefreiheitsproblemen; siehe [Popup-Fenster](https://webaim.org/techniques/javascript/other#popups) von WebAIM).
- Ein [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)-Wert von `all` weist den Screenreader an, den Inhalt der Fehlerliste vorzulesen, wenn Änderungen daran vorgenommen werden — d.h. wenn Fehler hinzugefügt oder entfernt werden. Dies ist nützlich, da der Benutzer wissen möchte, welche Fehler noch vorhanden sind, nicht nur, welche der Liste hinzugefügt oder entfernt wurden.

Wir könnten mit der Verwendung von ARIA weitergehen und mehr Validierungshilfe bereitstellen. Wie wäre es, wenn wir von Anfang an anzeigen, ob Felder ausgefüllt werden müssen, und in welchem Bereich das Alter liegen sollte?

1. Zu diesem Zeitpunkt nehmen Sie eine Kopie unserer [`form-validation.html`](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html) und [`validation.js`](https://github.com/mdn/learning-area/blob/main/accessibility/css/validation.js)-Dateien und speichern diese in einem lokalen Verzeichnis.
2. Öffnen Sie beide in einem Texteditor und schauen Sie sich an, wie der Code funktioniert.
3. Fügen Sie zuerst einen Absatz direkt oberhalb des öffnenden `<form>`-Tags ein, wie unten gezeigt, und kennzeichnen Sie beide Formular-`<label>`s mit einem Sternchen. So kennzeichnen wir normalerweise für sehende Benutzer erforderliche Felder.

   ```html
   <p>Fields marked with an asterisk (*) are required.</p>
   ```

4. Dies macht auf visuelle Weise Sinn, ist jedoch für Screenreader-Benutzer nicht so leicht verständlich. Glücklicherweise bietet WAI-ARIA das [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)-Attribut, um Screenreader-Benutzern Hinweise zu geben, dass diese Mitteilung besagt, dass Formulareingabefelder erforderlich sind. Aktualisieren Sie die `<input>`-Elemente entsprechend:

   ```html
   <input type="text" name="name" id="name" aria-required="true" />

   <input type="number" name="age" id="age" aria-required="true" />
   ```

5. Wenn Sie das Beispiel jetzt speichern und mit einem Screenreader testen, sollten Sie so etwas hören wie "Geben Sie Ihren Namen stern, erforderlich, bearbeiten Text".
6. Es könnte ebenfalls nützlich sein, wenn wir den Screenreader-Benutzern und den sichtbaren Benutzern einen Hinweis darauf geben, welchem Altersbereich das Alter sein sollte. Dies wird häufig als Tooltip oder Placeholder (Platzhalter) innerhalb des Formularelements präsentiert. WAI-ARIA enthält die [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)-Eigenschaften, um Minimal- und Maximalwerte anzugeben, und Screenreader unterstützen die nativen `min` und `max`-Attribute. Eine andere gut unterstützte Funktion ist das HTML `placeholder`-Attribut, das eine Nachricht enthalten kann, die im Eingabefeld angezeigt wird, wenn kein Wert eingegeben ist, und von einigen Screenreadern vorgelesen wird. Aktualisieren Sie Ihr Zahlen-Eingabefeld wie folgt:

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

Legen Sie immer ein {{HTMLelement('label')}} für jede Eingabe fest. Während einige Screenreader den Placeholder-Text ankündigen, tun dies die meisten nicht. Akzeptable Ersetzungen für die Bereitstellung von Formularsteuerungen mit einem zugänglichen Namen umfassen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) und [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby). Aber das `<label>`-Element mit einem `for`-Attribut ist die bevorzugte Methode, da es die Usability für alle Benutzer, einschließlich Mausbenutzer, bietet.

> [!NOTE]
> Sie können das fertige Beispiel live unter [`form-validation-updated.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-updated.html) ansehen.

WAI-ARIA ermöglicht auch einige fortgeschrittene Techniken zur Formularbeschriftung, jenseits des klassischen {{htmlelement("label")}}-Elements. Wir haben bereits über die Verwendung der [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Eigenschaft gesprochen, um eine Bezeichnung bereitzustellen, wenn wir nicht möchten, dass die Bezeichnung für Benutzer sichtbar ist (siehe den Abschnitt [Wegweiser/Landmarken](#signpostslandmarks), oben). Einige andere Beschriftungstechniken verwenden andere Eigenschaften wie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn Sie ein nicht `label`-Element als Beschriftung oder mehrere Formulareinträge mit derselben Bezeichnung kennzeichnen möchten, und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby), wenn Sie andere Informationen mit einem Formularelement verknüpfen und ebenfalls vorgelesen haben möchten. Weitere Details hierzu finden Sie im [WebAIM-Artikel über Fortgeschrittene Formularbeschriftungstechnik](https://webaim.org/techniques/forms/advanced).

Es gibt viele andere nützliche Eigenschaften und Zustände, um den Status von Formularelementen anzuzeigen. Zum Beispiel kann `aria-disabled="true"` verwendet werden, um anzuzeigen, dass ein Formularelement deaktiviert ist. Viele Browser überspringen deaktivierte Formularelemente, was dazu führt, dass sie nicht von Screenreadern vorgelesen werden. In einigen Fällen wird ein deaktiviertes Element wahrgenommen, sodass es eine gute Idee ist, dieses Attribut hinzuzufügen, um dem Screenreader mitzuteilen, dass ein deaktiviertes Formularelement tatsächlich deaktiviert ist.

Wenn der deaktivierte Zustand eines Eingabefeldes sich wahrscheinlich ändern wird, dann ist es ebenfalls eine gute Idee, darauf hinzuweisen, wann dies geschieht, und was das Ergebnis ist. Beispielsweise gibt es in unserem [`form-validation-checkbox-disabled.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-checkbox-disabled.html)-Demo ein Kontrollkästchen, das, wenn es ausgewählt wird, ein weiteres Formularelement aktiviert, um weitere Informationen eingegeben zu können. Wir haben eine versteckte Live-Region eingerichtet:

```html
<p class="hidden-alert" aria-live="assertive"></p>
```

die durch absolute Positionierung aus dem Blickfeld verborgen ist. Wenn dies markiert/entmarkiert wird, aktualisieren wir den Text innerhalb der versteckten Live-Region, um den Benutzern von Screenreadern mitzuteilen, was das Ergebnis der Markierung dieses Kontrollkästchens ist, sowie den `aria-disabled`-Status und einige visuelle Indikatoren:

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

Einige Male in diesem Kurs haben wir bereits die native Zugänglichkeit von (und die Zugänglichkeitsprobleme bei der Verwendung anderer Elemente zur Nachahmung von) Buttons, Links oder Formulareingen vorgestellt (siehe [Verwenden Sie nach Möglichkeit semantische UI-Steuerungen](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible) im HTML-Zugänglichkeitsartikel und [Verbesserung der Tastaturzugänglichkeit](#verbesserung_der_tastaturzugänglichkeit), oben). Im Wesentlichen können Sie mittels `tabindex` und ein bisschen JavaScript in vielen Fällen die Tastaturzugänglichkeit wiederherstellen.

Aber was ist mit Screenreadern? Sie erkennen die Elemente immer noch nicht als Buttons. Wenn wir unser [`fake-div-buttons.html`](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)-Beispiel in einem Screenreader testen, werden unsere gefälschten Buttons mit Phrasen wie „Click me!, grupieren“ berichtet, was offensichtlich verwirrend ist.

Wir können dies mithilfe einer WAI-ARIA-Rolle korrigieren. Machen Sie eine lokale Kopie von [`fake-div-buttons.html`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) und fügen Sie [`role="button"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) zu jedem `div`-Button hinzu, zum Beispiel:

```html
<div data-message="This is from the first button" tabindex="0" role="button">
  Click me!
</div>
```

Wenn Sie dies nun mit einem Screenreader ausprobieren, werden Ihre Buttons mit Phrasen wie „Klicken Sie hier!, Button“ gemeldet. Während dies viel besser ist, müssen Sie dennoch alle nativen Button-Funktionen hinzufügen, die Benutzer erwarten, wie die Handhabung von <kbd>enter</kbd>- und Klickevents, wie im [`button`-Rollen-Dokumentation](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) erklärt.

> [!NOTE]
> Vergessen Sie jedoch nicht, dass die Verwendung des richtigen semantischen Elements immer besser ist, wenn möglich. Wenn Sie einen Button erstellen möchten und ein {{htmlelement("button")}}-Element verwenden können, sollten Sie ein {{htmlelement("button")}}-Element verwenden!

#### Benutzer durch komplexe Widgets führen

Es gibt eine ganze Reihe von [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles), die nicht-semantische Elementstrukturen als gemeinsame UI-Features identifizieren können, die über das hinausgehen, was in Standard-HTML verfügbar ist, z. B. [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role), [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role). Sie können mehrere nützliche Beispiele im [Deque university code library](https://dequeuniversity.com/library/) sehen, um eine Vorstellung davon zu bekommen, wie solche Steuerungen zugänglich gemacht werden können.

Lassen Sie uns ein eigenes Beispiel durchgehen. Wir kehren zu unserer einfachen absolut positionierten Tab-Oberfläche (siehe [Sachen verstecken](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#hiding_things) in unserem CSS- und JavaScript-Zugänglichkeitsartikel) zurück, die Sie unter [Tabbed info box example](/de/docs/Learn_web_development/Core/CSS_layout/Practical_positioning_examples#a_tabbed_info-box) finden können.

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

In diesem Beispiel haben wir eine Kombination aus semantischen Elementen, ARIA-Rollen und ARIA-Attributen verwendet. Das erste davon ist, dass wir ein {{htmlelement("button")}}-Element als _Tab_ verwendet haben. Dies bedeutet, dass das Tab über einen Mausklick oder über die Tastatur mit der Leertaste oder der Eingabetaste ausgewählt werden kann.

Verwendete ARIA-Features sind:

- Neue Rollen — [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role), [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role)
  - : Diese identifizieren die wichtigen Bereiche der Tab-Oberfläche — den Container für die Tabs, die Tabs selbst und die entsprechenden Tabpanels.
- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
  - : Definiert, welches Tab derzeit ausgewählt ist. Wenn verschiedene Tabs vom Benutzer ausgewählt werden, wird der Wert dieses Attributs für die verschiedenen Tabs via JavaScript aktualisiert.
- `tabindex="-1"`
  - : `tabindex="-1"` nimmt das Element aus der Tab-Reihenfolge heraus. Da wir JavaScript verwenden, um dem Benutzer zu ermöglichen, die Tabs mit der Tastatur oder der Maus zu steuern, möchten wir nicht, dass der Benutzer die Tab-Taste verwenden kann, um zu den Buttons zu navigieren.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Dieses Attribut identifiziert ein Element (durch seine `id`), das das Element beschriftet, in diesem Beispiel das `<article>` wird durch das entsprechende Tab oder `<button>` beschriftet.
- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
  - : Dieses Attribut identifiziert ein Element (durch seine `id`), das vom Element kontrolliert wird, in diesem Beispiel ist das `<article>` wird durch das entsprechende Tab oder `<button>` kontrolliert.

Wir hätten `aria-hidden` verwenden können, um die Inhalte der Tabpanels vor unterstützenden Technologien zu verbergen, doch wenn dieser Inhalt fokussierbaren Inhalt enthält, wie z.B. Links, könnte der Benutzer immer noch zu diesem Inhalt gehen, selbst wenn `aria-hidden=true` für die nicht-aktiven Panels festgelegt ist. In diesem Beispiel haben wir `class="is-hidden"` auf die Tabpanels angewendet, die den Tabs mit `aria-selected="false"` entsprechen, und verwenden CSS, um `display: none;` festzulegen, was verhindert, dass der versteckte Inhalt fokußiert wird.

In unseren Tests hat diese neue Struktur die Dinge insgesamt verbessert. Die `<button>`s werden jetzt als Tabs erkannt (z.B. wird "Tab" vom Screenreader gesprochen), der ausgewählte Tab wird durch "ausgewählt" angezeigt, das mit dem Tabnamen vorgelesen wird, und jeder Inhalt, der nicht angezeigt wird, kann nicht fokussiert werden. Der Benutzer kann die Tabs nun auch mit der Tastatur oder der Maus navigieren.

## Testen Sie Ihre Fertigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um sicherzustellen, dass Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fertigkeiten: WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics/Test_your_skills:_WAI-ARIA).

## Zusammenfassung

Dieser Artikel hat bei weitem nicht alles, was in WAI-ARIA verfügbar ist, abgedeckt, sollte Ihnen jedoch genug Informationen gegeben haben, um zu verstehen, wie es verwendet wird und einige der gebräuchlichsten Muster, auf die Sie stoßen werden, die es erfordern, zu kennen.

## Siehe auch

- [Aria-Zustände und -Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes): Alle `aria-*` Attribute
- [WAI-ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles): Kategorien von ARIA-Rollen und die auf MDN behandelten Rollen
- [ARIA in HTML](https://www.w3.org/TR/html-aria/) auf W3C: Eine Spezifikation, die für jedes HTML-Feature die Barrierefreiheits (ARIA)-Semantik, die implizit darauf vom Browser angewendet wird, und die WAI-ARIA-Features, die Sie darauf festlegen können, wenn zusätzliche Semantiken erforderlich sind, definiert
- [Deque university code library](https://dequeuniversity.com/library/): Eine Bibliothek mit wirklich nützlichen und praktischen Beispielen, die zeigen, wie komplexe UI-Steuerungen mit WAI-ARIA-Features zugänglich gemacht werden
- [WAI-ARIA-Autorpraktiken](https://www.w3.org/WAI/ARIA/apg/) auf W3C: Ein sehr detailliertes Design-Muster von der W3C, das erklärt, wie man verschiedene Arten von komplexen UI-Steuerungen implementiert, während sie mit WAI-ARIA-Features zugänglich gemacht werden

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility")}}
