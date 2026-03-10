---
title: WAI-ARIA Grundlagen
short-title: WAI-ARIA
slug: Learn_web_development/Core/Accessibility/WAI-ARIA_basics
l10n:
  sourceCommit: 5e815d522e796fb2209fa8470616b37e31c572b4
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA", "Learn_web_development/Core/Accessibility")}}

Im Anschluss an den vorherigen Artikel kann es manchmal schwierig sein, komplexe Benutzeroberfläche-Kontrollen zu erstellen, die unsemantisches HTML und dynamisch aktualisierte JavaScript-Inhalte beinhalten. WAI-ARIA ist eine Technologie, die bei solchen Problemen helfen kann, indem sie zusätzliche Semantiken hinzufügt, die von Browsern und unterstützenden Technologien erkannt und verwendet werden können, um den Nutzern mitzuteilen, was vor sich geht. Hier zeigen wir, wie man WAI-ARIA auf einer grundlegenden Ebene verwendet, um die Zugänglichkeit zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und Best Practices für Barrierefreiheit, wie sie in den vorherigen Lektionen des Moduls gelehrt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von WAI-ARIA — Semantik zu ansonsten unsemantischem HTML hinzuzufügen, damit AT-Nutzer die dargestellten Oberflächen verstehen können.</li>
          <li>Die grundlegende Syntax — Rollen, Eigenschaften und Zustände.</li>
          <li>Meilensteine und Wegweiser.</li>
          <li>Verbesserung der Tastaturzugänglichkeit.</li>
          <li>Bekanntgabe dynamischer Inhaltsaktualisierungen mit Live-Regionen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist WAI-ARIA?

Beginnen wir damit, zu betrachten, was WAI-ARIA ist und was es für uns tun kann.

### Ein komplett neuer Satz von Problemen

Als Web-Apps komplexer und dynamischer wurden, tauchten neue Zugänglichkeitsmerkmale und Probleme auf.

HTML führte beispielsweise eine Reihe von semantischen Elementen ein, um gängige Seitenmerkmale zu definieren ({{htmlelement("nav")}}, {{htmlelement("footer")}} usw.). Bevor diese verfügbar waren, verwendeten Entwickler {{htmlelement("div")}}s mit IDs oder Klassen, z.B. `<div class="nav">`, aber diese waren problematisch, da es keinen einfachen Weg gab, ein bestimmtes Seitenmerkmal wie die Hauptnavigation programmgesteuert zu finden.

Die anfängliche Lösung bestand darin, ein oder mehrere versteckte Links oben auf der Seite hinzuzufügen, um zur Navigation (oder zu anderen Dingen) zu verlinken, z.B.:

```html
<a href="#hidden" class="hidden">Skip to navigation</a>
```

Aber das ist immer noch nicht sehr präzise und kann nur verwendet werden, wenn der Screenreader von oben nach unten liest.

Ein weiteres Beispiel: Apps begannen, komplexe Steuerelemente wie Datumsauswähler zum Wählen von Daten, Schieberegler zum Wählen von Werten usw. anzubieten. HTML bietet spezielle Eingabetypten, um solche Steuerelemente darzustellen:

```html
<input type="date" /> <input type="range" />
```

Diese wurden ursprünglich nicht gut unterstützt, und es war – und ist immer noch bis zu einem gewissen Grad – schwierig, sie zu stylen, was Designer und Entwickler dazu veranlasste, sich für benutzerdefinierte Lösungen zu entscheiden. Anstatt diese nativen Funktionen zu verwenden, verlassen sich einige Entwickler auf JavaScript-Bibliotheken, die solche Steuerelemente als eine Serie verschachtelter {{htmlelement("div")}}s generieren, die dann mit CSS gestylt und mit JavaScript gesteuert werden.

Das Problem dabei ist, dass sie visuell funktionieren, aber Screenreader keinen Sinn daraus machen können, was sie überhaupt sind, und ihre Nutzer nur hören, dass sie ein Durcheinander von Elementen ohne Semantik sehen, die beschreibt, was sie bedeuten.

### Einführung in WAI-ARIA

[WAI-ARIA](https://w3c.github.io/aria/) (Web Accessibility Initiative - Accessible Rich Internet Applications) ist eine von der W3C geschriebene Spezifikation, die ein Set zusätzlicher HTML-Attribute definiert, die auf Elemente angewendet werden können, um zusätzliche Semantik hinzuzufügen und die Zugänglichkeit überall dort zu verbessern, wo sie fehlt. Die Spezifikation definiert drei Hauptmerkmale:

- [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Diese definieren, was ein Element ist oder tut. Viele davon sind sogenannte Landmarkenrollen, die weitgehend den semantischen Wert von Strukturierungselementen duplizieren, wie `role="navigation"` ({{htmlelement("nav")}}), `role="banner"` (Dokument {{htmlelement("header")}}), `role="complementary"` ({{htmlelement("aside")}}) oder `role="search"` ({{htmlelement("search")}}). Andere Rollen beschreiben unterschiedliche Seitenelemente, die keine entsprechenden Elemente haben, wie `role="tablist"`, und `role="tabpanel"`, welche in Benutzerschnittstellen häufig vorkommen.
- Eigenschaften
  - : Diese definieren Eigenschaften von Elementen, die verwendet werden können, um ihnen zusätzliche Bedeutung oder Semantik zu verleihen. Ein Beispiel ist `aria-required="true"`, was angibt, dass ein Formulareingabefeld ausgefüllt werden muss, um gültig zu sein, während `aria-labelledby="label"` Ihnen ermöglicht, eine ID auf ein Element zu setzen und es als Label für alles andere auf der Seite zu referenzieren, einschließlich mehrerer Elemente, was mit `<label for="input">` nicht möglich ist. Sie könnten `aria-labelledby` verwenden, um anzugeben, dass eine Tastenbeschreibung, die in einem {{htmlelement("div")}} enthalten ist, das Label für mehrere Tabellenzellen ist, oder es als Alternative zu Image-Alt-Text verwenden — existierende Informationen auf der Seite als Alt-Text eines Bildes angeben, anstatt es im `alt`-Attribut wiederholen zu müssen. Ein Beispiel hierzu finden Sie bei [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives).
- Zustände
  - : Spezielle Eigenschaften, die den aktuellen Status von Elementen definieren, wie `aria-disabled="true"`, das einem Screenreader mitteilt, dass ein Formulareingabefeld momentan deaktiviert ist. Zustände unterscheiden sich von Eigenschaften dadurch, dass Eigenschaften während des gesamten Lebenszyklus einer App unveränderlich sind, während Zustände sich ändern können, in der Regel programmiert über JavaScript.

Ein wichtiger Punkt zu WAI-ARIA-Attributen ist, dass sie nichts an der Webseite ändern, außer den Informationen, die über die Barrierefreiheits-APIs des Browsers verfügbar gemacht werden (woher Screenreader ihre Informationen beziehen). WAI-ARIA beeinflusst die Struktur der Webseite, das DOM usw. nicht, obwohl die Attribute nützlich sein können, um Elemente mit CSS zu selektieren.

> [!NOTE]
> Sie finden eine nützliche Liste aller ARIA-Rollen und deren Verwendungen mit Links zu weiterführenden Informationen in der WAI-ARIA-Spezifikation — siehe [Definition von Rollen](https://w3c.github.io/aria/#role_definitions) — auf dieser Website — siehe [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles).
>
> Die Spezifikation enthält auch eine Liste aller Eigenschaften und Zustände mit Links zu weiterführenden Informationen — siehe [Definitionen von Zuständen und Eigenschaften (alle `aria-*` Attribute)](https://w3c.github.io/aria/#state_prop_def).

## Wo wird WAI-ARIA unterstützt?

Diese Frage ist nicht einfach zu beantworten. Es ist schwierig, eine abschließende Ressource zu finden, die angibt, welche Funktionen von WAI-ARIA wo unterstützt werden, weil:

1. Es gibt viele Funktionen in der WAI-ARIA-Spezifikation.
2. Es gibt viele Kombinationen von Betriebssystemen, Browsern und Screenreadern zu berücksichtigen.

Dieser letzte Punkt ist entscheidend — Um einen Screenreader zu verwenden, muss Ihr Betriebssystem Browser ausführen, die über die notwendigen Barrierefreiheits-APIs verfügen, um die Informationen bereitzustellen, die Screenreader benötigen, um ihre Arbeit zu erledigen. Die meisten populären Betriebssysteme haben einen oder zwei Browser, mit denen Screenreader funktionieren können.

Als nächstes müssen Sie sich darum kümmern, ob die in Frage kommenden Browser ARIA-Funktionen unterstützen und sie über ihre APIs bereitstellen, aber auch, ob Screenreader diese Informationen erkennen und sie ihren Nutzern auf nützliche Weise präsentieren.

1. Die Unterstützung durch Browser ist nahezu universell.
2. Die Screenreader-Unterstützung für ARIA-Funktionen erreicht dieses Niveau noch nicht ganz, aber die meisten beliebten Screenreader kommen dahin. Sie können sich ein Bild über die Unterstützungsgrade machen, indem Sie den Artikel von Powermapper über [WAI-ARIA Screenreader-Kompatibilität](https://www.powermapper.com/tests/screen-readers/aria/) anschauen.

In diesem Artikel werden wir nicht versuchen, jede WAI-ARIA-Funktion und ihre genauen Unterstützungsdetails abzudecken. Stattdessen werden wir die wichtigsten WAI-ARIA-Funktionen behandeln, die Sie kennen sollten. Wenn wir keine Unterstützungsdetails erwähnen, können Sie davon ausgehen, dass die Funktion gut unterstützt wird. Wir werden alle Ausnahmen davon deutlich erwähnen.

> [!NOTE]
> Einige JavaScript-Bibliotheken unterstützen WAI-ARIA, was bedeutet, dass sie, wenn sie UI-Funktionen wie komplexe Formularelemente generieren, ARIA-Attribute hinzufügen, um die Zugänglichkeit dieser Funktionen zu verbessern. Wenn Sie nach einer Drittanbieter-JavaScript-Lösung für die schnelle UI-Entwicklung suchen, sollten Sie definitiv die Zugänglichkeit der UI-Widgets als wichtigen Faktor bei Ihrer Auswahl in Betracht ziehen. Gute Beispiele sind jQuery UI (siehe [About jQuery UI: Deep accessibility support](https://jqueryui.com/about/#deep-accessibility-support)), [ExtJS](https://www.sencha.com/products/extjs/) und [Dojo/Dijit](https://dojotoolkit.org/reference-guide/1.10/dijit/a11y/statement.html).

## Wann sollten Sie WAI-ARIA verwenden?

Wir haben einige der Probleme besprochen, die zur Erstellung von WAI-ARIA führten, aber im Wesentlichen gibt es vier Hauptbereiche, in denen WAI-ARIA nützlich ist:

- Wegweiser/Meilensteine
  - : ARIAs [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)-Attributwerte können Meilensteine darstellen, die entweder die Semantik von HTML-Elementen replizieren (z.B. {{htmlelement("nav")}}) oder über die HTML-Semantik hinausgehen, um auf verschiedene funktionale Bereiche hinzuweisen, z.B. `search`, `tablist`, `tab`, `listbox` usw.
- Dynamische Inhaltsaktualisierungen
  - : Screenreader haben oft Schwierigkeiten, ständig sich ändernde Inhalte zu melden; mit ARIA können wir `aria-live` verwenden, um Screenreader-Nutzern mitzuteilen, wenn ein Inhaltsbereich dynamisch aktualisiert wird: zum Beispiel, indem JavaScript neue Inhalte vom Server abruft und das DOM aktualisiert [s. Abschnitt zum Abrufen von Netzwerkanfragen](/de/docs/Learn_web_development/Core/Scripting/Network_requests).
- Verbesserung der Tastaturzugänglichkeit
  - : Es gibt eingebaute HTML-Elemente, die native Tastaturzugänglichkeit haben; wenn andere Elemente verwendet werden, zusammen mit JavaScript, um ähnliche Interaktionen zu simulieren, leidet die Tastaturzugänglichkeit und das Screenreader-Reporting infolgedessen. Wo dies unvermeidlich ist, bietet WAI-ARIA eine Möglichkeit, anderen Elementen den Fokus zu geben (mittels `tabindex`).
- Barrierefreiheit von nicht-sematischen Steuerelementen
  - : Wenn eine Reihe verschachtelter `<div>`s zusammen mit CSS/JavaScript verwendet wird, um ein komplexes UI-Feature zu erstellen, oder ein natives Steuerelement stark durch JavaScript erweitert/geändert wird, leidet die Barrierefreiheit — Screenreader-Nutzer werden es schwer haben herauszufinden, was das Feature macht, wenn keine Semantiken oder anderweitige Hinweise vorhanden sind. In solchen Situationen kann ARIA helfen, das Fehlende mit einer Kombination aus Rollen wie `button`, `listbox` oder `tablist` und Eigenschaften wie `aria-required` oder `aria-posinset` bereitzustellen, um weitere Hinweise auf die Funktionalität zu geben.

Im nächsten Abschnitt werden wir die vier oben beschriebenen Hauptbereiche zusammen mit Beispielen detaillierter betrachten. Bevor Sie fortfahren, sollten Sie eine Screenreader-Testumgebung einrichten, damit Sie einige der Beispiele während des Durchlesens testen können. Siehe unseren Abschnitt über das [Testen von Screenreadern](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers) für mehr Informationen.

> [!CALLOUT]
>
> **Sie sollten WAI-ARIA nur verwenden, wenn Sie es brauchen!**
>
> Durch die Verwendung der richtigen HTML-Elemente erhalten Sie implizit die benötigten Rollen und Sie sollten _immer_ [native HTML-Funktionen](/de/docs/Learn_web_development/Core/Accessibility/HTML) verwenden, um die Semantik bereitzustellen, die von Screenreadern benötigt wird, um ihren Nutzern zu sagen, was geschieht. Manchmal ist dies nicht möglich, entweder weil Sie nur begrenzte Kontrolle über den Code haben oder weil Sie etwas Komplexes erstellen, das kein einfaches HTML-Element zur Implementierung hat. In solchen Fällen kann WAI-ARIA ein wertvolles Werkzeug zur Verbesserung der Zugänglichkeit sein.
>
> Aber nochmals, verwenden Sie es nur, wenn nötig!
>
> Versuchen Sie auch, sicherzustellen, dass Sie Ihre Website mit einer Vielzahl von _echten_ Nutzern testen — nicht-behinderte Personen, Personen, die Screenreader verwenden, Personen, die Tastaturnavigation verwenden etc. Sie werden bessere Einblicke als Sie darüber haben, wie gut sie funktioniert.

## Wegweiser/Meilensteine

WAI-ARIA fügt dem Browser das [`role`-Attribut](https://w3c.github.io/aria/#role_definitions) hinzu, das es Ihnen ermöglicht, zusätzlichen semantischen Wert zu den Elementen Ihrer Website hinzuzufügen, wo immer sie benötigt werden. Der erste große Bereich, in dem dies nützlich ist, ist das Bereitstellen von Informationen für Screenreader, damit deren Nutzer gängige Seitenelemente finden können. Diese Beispielseite hat die folgende Struktur:

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

Wenn Sie das Beispiel mit einem Screenreader in einem modernen Browser testen, erhalten Sie bereits einige nützliche Informationen. VoiceOver gibt Ihnen zum Beispiel Folgendes an:

- Auf dem `<header>`-Element — "Banner, 2 Elemente" (es enthält eine Überschrift und das `<nav>`).
- Auf dem `<nav>`-Element — "Navigation 2 Elemente" (es enthält eine Liste und ein Formular).
- Auf dem `<main>`-Element — "Haupt 2 Elemente" (es enthält einen Artikel und ein beiseite).
- Auf dem `<aside>`-Element — "ergänzend 2 Elemente" (es enthält eine Überschrift und eine Liste).
- Auf dem Suchformulareingabefeld — "Suchanfrage, Einfügen am Anfang des Textes".
- Auf dem `<footer>`-Element — "Fußzeile 1 Element".

Wenn Sie in VoiceOver das Sehenswürdigkeiten-Menü aufrufen (mit der VoiceOver-Taste + U und dann mit den Pfeiltasten durch die Menüauswahlen navigieren), werden Sie feststellen, dass die meisten Elemente gut aufgelistet sind, sodass sie schnell zugänglich sind.

![Mac's VoiceOver-Menü für schnelle Barrierefreiheit. Landmarks Header und Landmarks Liste einschließlich Banner, Navigation, Haupt und ergänzend.](landmarks-list.png)

Allerdings könnten wir hier besser sein. Das Suchformular ist ein wirklich wichtiger Meilenstein, den die Leute finden möchten, aber es wird im Sehenswürdigkeiten-Menü nicht aufgelistet oder wie ein bemerkenswerter Meilenstein behandelt, abgesehen davon, dass das eigentliche Eingabefeld als Sucheingabe (`<input type="search">`) bezeichnet wird.

Um das Formular als Meilenstein zu kennzeichnen, können Sie es entweder mit dem {{htmlelement("search")}}-Element umschließen oder ihm die ARIA-Rolle `role="search"` zuweisen. Eine allgemeine Regel ist es, HTML-Semantik zu verwenden, wo immer möglich, und ARIA nur dort einzusetzen, wo kein HTML-Äquivalent existiert.

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

Vor allem haben wir semantisches HTML verwendet, das der Struktur der Seite Bedeutung und Rollen verleiht, ohne unnötige [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)-Attribute zu unserer HTML-Struktur hinzuzufügen, die eine Struktur wie diese hat:

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

Wir haben Ihnen auch ein Bonusmerkmal in diesem Beispiel gegeben — das {{htmlelement("input")}}-Element hat das Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) erhalten, das ihm ein beschreibendes Label bietet, das von einem Screenreader vorgelesen wird, obwohl wir kein {{htmlelement("label")}}-Element eingefügt haben. In solchen Fällen ist dies sehr nützlich — ein Suchformular wie dieses ist ein sehr häufiges, leicht zu erkennendes Merkmal, und das Hinzufügen eines visuellen Labels würde das Seitendesign stören.

```html
<input
  type="search"
  name="q"
  placeholder="Search query"
  aria-label="Search through site content" />
```

Wenn wir nun VoiceOver nutzen, um uns dieses Beispiel anzusehen, erhalten wir einige Verbesserungen:

- Das Suchformular wird als separates Element sowohl beim Durchblättern der Seite als auch im Sehenswürdigkeiten-Menü aufgerufen.
- Der im `aria-label`-Attribut enthaltene Labeltext wird vorgelesen, wenn das Formulareingabefeld hervorgehoben wird.

Wenn Sie alte Browser wie IE8 unterstützen müssen; lohnt es sich, ARIA-Rollen für diesen Zweck einzuschließen. Und wenn Ihre Seite aus irgendeinem Grund nur mit `<div>`s erstellt wird, sollten Sie definitiv die ARIA-Rollen einschließen, um diese dringend benötigten Semantiken bereitzustellen!

Sie werden viel mehr über diese Semantiken und die Leistungsfähigkeit von ARIA-Eigenschaften/Attributen weiter unten sehen, insbesondere im Abschnitt [Barrierefreiheit von nicht-sematischen Steuerelementen](#barrierefreiheit_von_nicht-semantic_controls). Betrachten wir nun, wie ARIA bei dynamischen Inhaltsaktualisierungen helfen kann.

## Dynamische Inhaltsaktualisierungen

In den DOM geladene Inhalte können von einem Screenreader leicht zugänglich gemacht werden, von textuellen Inhalten bis hin zu alternativen Texten, die an Bilder angehängt sind. Traditionelle statische Websites mit hauptsächlich Textinhalten sind daher einfach barrierefrei zu machen für Menschen mit Sehstörungen.

Das Problem besteht darin, dass moderne Web-Apps oft nicht nur aus statischem Text bestehen – sie aktualisieren häufig Teile der Seite, indem sie neue Inhalte vom Server abrufen (in diesem Beispiel verwenden wir ein statisches Array von Zitaten) und das DOM aktualisieren. Dies wird manchmal als **Live-Regionen** bezeichnet.

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

Das funktioniert gut, aber es ist nicht gut für die Barrierefreiheit — die Inhaltsaktualisierung wird von Screenreadern nicht erkannt, sodass ihre Nutzer nicht wissen, was vor sich geht. Dies ist ein ziemlich triviales Beispiel, aber stellen Sie sich einmal vor, Sie würden eine komplexe Benutzeroberfläche mit vielen ständig aktualisierten Inhalten erstellen, wie ein Chatroom oder eine Strategispiel-Benutzeroberfläche oder eine live aktualisierte Warenkorb-Anzeige — es wäre unmöglich, die App in effektiver Weise ohne eine Art von Möglichkeit zu verwenden, den Nutzer auf die Aktualisierungen aufmerksam zu machen.

WAI-ARIA bietet glücklicherweise einen nützlichen Mechanismus, um diese Alerts bereitzustellen — die [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)-Eigenschaft. Wenn dieses auf ein Element angewendet wird, veranlasst es Screenreader, den Inhalt vorzulesen, der aktualisiert wird. Wie dringlich der Inhalt vorgelesen wird, hängt vom Attributwert ab:

- `off`
  - : Der Standardwert. Aktualisierungen sollten nicht bekanntgegeben werden.
- `polite`
  - : Aktualisierungen sollten nur bekanntgegeben werden, wenn der Nutzer inaktiv ist.
- `assertive`
  - : Aktualisierungen sollten dem Nutzer so schnell wie möglich bekanntgegeben werden.

Hier aktualisieren wir das `<blockquote>`-öffnende Tag wie folgt:

```html
<blockquote aria-live="assertive">…</blockquote>
```

Dies wird dazu führen, dass ein Screenreader den Inhalt vorliest, während er aktualisiert wird: versuchen Sie, die aktualisierte Liveversion zu testen:

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
> Es gibt einige andere ARIA-Eigenschaften, die mit `aria-live` verwandt sind und auch wissenswert sind:
>
> - Die [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)-Eigenschaft, die auf `true` gesetzt wird, teilt Screenreadern mit, dass sie den gesamten Elementinhalt als eine atomare Einheit vorlesen sollen, nicht nur die Bits, die aktualisiert wurden. Dies ist nützlich, wenn nur die Inhalte eines Abschnitts aktualisiert werden, Sie aber auch möchten, dass die Überschrift jedes Mal vorgelesen wird, um den Nutzer an ihren Inhalt zu erinnern.
> - Die [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)-Eigenschaft ist nützlich, um zu steuern, was vorgelesen wird, wenn eine Live-Region aktualisiert wird. Sie können beispielsweise nur Inhaltszusätze oder -entfernungen vorlesen lassen.

## Verbesserung der Tastaturzugänglichkeit

Wie bereits an einigen anderen Stellen im Modul diskutiert, ist einer der Hauptvorteile von HTML in Bezug auf Barrierefreiheit die eingebaute Tastaturzugänglichkeit von Funktionen wie Buttons, Formularelementen und Links. Im Allgemeinen können Sie die Tabulatortaste verwenden, um zwischen Steuerelementen zu wechseln, die Eingabetaste, um Steuerelemente auszuwählen oder zu aktivieren, und gelegentlich andere Steuerungen nach Bedarf (z.B. die Auf- und Abwärtspfeiltasten, um zwischen Optionen in einer `<select>`-Box zu wechseln).

Es kann jedoch vorkommen, dass Sie Code schreiben müssen, der entweder nicht-semantische Elemente als Buttons (oder andere Arten von Steuerelementen) verwendet oder verwendbare Steuerelemente für nicht ganz den richtigen Zweck verwendet. Sie könnten versuchen, schlechten Code zu reparieren, den Sie geerbt haben, oder Sie könnten ein komplexes Widget erstellen, das es erfordert.

Was das Fokussieren von nicht fokussierbarem Code betrifft, erweitert WAI-ARIA das `tabindex`-Attribut um neue Werte:

- `tabindex="0"` — wie oben angegeben, erlaubt dieser Wert Elementen, die normalerweise nicht tabulatorfähig sind, tabulatorfähig zu werden. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — erlaubt es nicht normalerweise tabulatorfähigen Elementen, programmatisch fokussiert zu werden, z.B. über JavaScript oder als Ziel von Links.

Wir haben dies ausführlicher beschrieben und eine typische Implementierung in unserem HTML-Barrierefreiheit-Artikel gezeigt — siehe [Wiederherstellung der Tastaturzugänglichkeit im Detail](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in).

## Barrierefreiheit von nicht-semantic controls

Dies ist eine Fortführung des vorherigen Abschnitts — wenn eine Serie verschachtelter `<div>`s zusammen mit CSS/JavaScript verwendet wird, um ein komplexes UI-Feature zu erstellen, oder ein natives Steuerelement stark durch JavaScript erweitert/geändert wird, kann nicht nur die Tastaturzugänglichkeit leiden, sondern Screenreader-Nutzer werden es ebenfalls schwer haben, herauszufinden, was das Feature macht, wenn keine Semantiken oder andere Hinweise vorhanden sind. In solchen Situationen kann ARIA helfen, die fehlenden Semantiken bereitzustellen.

### Formularvalidierung und Fehlerbenachrichtigungen

Zuerst sehen wir uns nochmal das Formularbeispiel an, das wir in unserem CSS- und JavaScript-Barrierefreiheit-Artikel behandelt haben (lesen Sie [Es unaufdringlich halten](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#keeping_it_unobtrusive) für einen vollständigen Rückblick). Am Ende dieses Abschnitts haben wir gezeigt, dass wir einige ARIA-Attribute auf die Fehlermeldungsbox angewendet haben, die bei Versuchen, das Formular abzusenden, eventuelle Validierungsfehler anzeigt:

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

- [`role="alert"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) macht das angewendete Element automatisch zu einer Live-Region, sodass Änderungen an ihr vorgelesen werden; es identifiziert sie auch semantisch als eine Benachrichtigung (wichtige zeit-/kontextbezogene Informationen) und stellt eine bessere, barrierefreiere Methode dar, um einen Hinweis an einen Nutzer zu senden (Modal-Dialoge wie [`alert()`](/de/docs/Web/API/Window/alert)-Aufrufe haben eine Reihe von Barrierefreiheitsproblemen; siehe [Popup-Fenster](https://webaim.org/techniques/javascript/other#popups) von WebAIM).
- Ein [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)-Wert von `all` weist den Screenreader an, den Inhalt der Fehlerliste bei jeder Änderung vorzulesen — d.h. wenn Fehler hinzugefügt oder entfernt werden. Dies ist nützlich, weil der Nutzer wissen möchte, welche Fehler noch übrig sind, nicht nur, was in die Liste hinzugefügt oder aus ihr entfernt wurde.

Wir könnten unsere ARIA-Nutzung noch weiter ausbauen und ein wenig mehr Validierungshilfe bieten. Was wäre, wenn wir angeben würden, ob Felder überhaupt erforderlich sind und welchen Bereich das Alter haben sollte?

1. Zu diesem Zeitpunkt eine Kopie unserer [`form-validation.html`](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html) und [`validation.js`](https://github.com/mdn/learning-area/blob/main/accessibility/css/validation.js) Dateien nehmen und sie in einem lokalen Verzeichnis speichern.
2. Öffnen Sie sie beide in einem Texteditor und schauen Sie sich an, wie der Code funktioniert.
3. Fügen Sie zuerst einen Absatz direkt über dem öffnenden `<form>`-Tag hinzu, wie unten gezeigt, und markieren Sie beide Formular-`<label>`s mit einem Sternchen. So markieren wir für sehende Benutzer normalerweise die erforderlichen Felder.

   ```html
   <p>Fields marked with an asterisk (*) are required.</p>
   ```

4. Das macht visuell Sinn, aber es ist nicht so leicht für Screenreader-Benutzer verständlich. Glücklicherweise gibt WAI-ARIA das [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)-Attribut an, um Screenreadern Hinweise zu geben, dass Formulareingaben ausgefüllt werden müssen. Aktualisieren Sie die `<input>`-Elemente folgendermaßen:

   ```html
   <input type="text" name="name" id="name" aria-required="true" />

   <input type="number" name="age" id="age" aria-required="true" />
   ```

5. Wenn Sie das Beispiel jetzt speichern und mit einem Screenreader testen, sollten Sie etwas wie "Geben Sie Ihren Namen ein Stern, erforderlich, Bearbeitungstext" hören.
6. Es könnte auch nützlich sein, wenn wir Screenreader-Benutzern und sehenden Nutzern eine Vorstellung geben, welchen Alterswert das Alter haben soll. Dies wird oft als Tooltip oder Platzhalter innerhalb des Formularfelds dargestellt. WAI-ARIA enthält [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) Eigenschaften, um minimale und maximale Werte anzugeben, und Screenreader unterstützen die nativen `min` und `max` Attribute. Eine weitere gut unterstützte Funktion ist das HTML `placeholder`-Attribut, welches eine Nachricht enthalten kann, die im Eingabefeld angezeigt wird, wenn kein Wert eingegeben ist und von einigen Screenreadern vorgelesen wird. Aktualisieren Sie Ihr Nummerneingabefeld wie folgt:

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

Fügen Sie immer ein {{HTMLelement('label')}} für jede Eingabe hinzu. Während einige Screenreader den Platzhaltertext ankündigen, tun dies die meisten nicht. Akzeptable Ersatzlösungen, um Formularelemente mit einem zugänglichen Namen zu versehen, beinhalten [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) und [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby). Aber das `<label>`-Element mit einem `for`-Attribut ist die bevorzugte Methode, da es für alle Nutzer, einschließlich Mausnutzer, die Benutzerfreundlichkeit bietet.

> [!NOTE]
> Sie können das fertige Beispiel live bei [`form-validation-updated.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-updated.html) sehen.

WAI-ARIA ermöglicht auch einige erweiterte Formularbeschriftungstechniken jenseits des klassischen {{htmlelement("label")}}-Elements. Wir haben bereits darüber gesprochen, die [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Eigenschaft zu verwenden, um ein Label bereitzustellen, wenn wir nicht möchten, dass das Label für sehende Benutzer sichtbar ist (siehe den Abschnitt [Wegweiser/Meilensteine](#signpostslandmarks) oben). Einige andere Beschriftungstechniken verwenden andere Eigenschaften wie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn Sie ein anderes als ein `<label>`-Element als Label oder mehrere Formulareingaben mit demselben Label kennzeichnen möchten, und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby), wenn Sie andere Informationen mit einer Formulareingabe verknüpfen und ebenfalls vorgelesen haben möchten. Weitere Einzelheiten finden Sie in [WebAIMs Advanced Form Labeling Artikel](https://webaim.org/techniques/forms/advanced).

Es gibt auch viele andere nützliche Eigenschaften und Zustände, um den Status von Formularelementen anzugeben. Zum Beispiel kann `aria-disabled="true"` verwendet werden, um anzugeben, dass ein Formularfeld deaktiviert ist. Viele Browser überspringen deaktivierte Formularfelder, was dazu führt, dass sie von Screenreadern nicht vorgelesen werden. In einigen Fällen wird ein deaktiviertes Element wahrgenommen, daher ist es eine gute Idee, dieses Attribut einzuschließen, um dem Screenreader mitzuteilen, dass ein deaktiviertes Formularsteuerelement tatsächlich deaktiviert ist.

Wenn sich der deaktivierte Zustand einer Eingabe wahrscheinlich ändert, ist es auch eine gute Idee anzuzeigen, wann dies geschieht und was das Ergebnis ist. In unserem [`form-validation-checkbox-disabled.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-checkbox-disabled.html)-Demo gibt es ein Kontrollkästchen, das, wenn es aktiviert wird, eine andere Formulareingabe aktiviert, um zusätzliche Informationen einzugeben. Wir haben eine versteckte Live-Region eingerichtet:

```html
<p class="hidden-alert" aria-live="assertive"></p>
```

die durch absolute Positionierung aus dem Sichtfeld ausgeblendet wird. Wenn diese aktiviert/deaktiviert wird, aktualisieren wir den Text in der versteckten Live-Region, um Screenreader-Benutzern mitzuteilen, was das Ergebnis der Aktivierung dieses Kontrollkästchens ist, sowie den `aria-disabled`-Status, und einige visuelle Indikatoren ebenfalls:

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

### Beschreibung nicht-semantischer Buttons als Buttons

Bereits einige Male in diesem Kurs haben wir die native Barrierefreiheit (und die Barrierefreiheitsprobleme bei der Verwendung anderer Elemente zum Simulieren) von Buttons, Links oder Formularelementen angesprochen (siehe [Verwenden Sie, wo möglich, semantische UI-Steuerelemente](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible) im HTML-Zugänglichkeitsartikel und [Verbesserung der Tastaturzugänglichkeit](#verbesserung_der_tastaturzugänglichkeit) oben). Grundsätzlich können Sie die Tastaturzugänglichkeit ohne allzu große Probleme in vielen Fällen wiederherstellen, indem Sie `tabindex` und ein wenig JavaScript verwenden.

Aber was ist mit Screenreadern? Sie werden die Elemente immer noch nicht als Buttons sehen. Wenn wir unser [`fake-div-buttons.html`](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)-Beispiel in einem Screenreader testen, werden unsere Fake-Buttons mit Phrasen wie "Klicken Sie auf mich!, Gruppe" gemeldet, was offensichtlich verwirrend ist.

Wir können dies mit einer WAI-ARIA-Rolle beheben. Machen Sie eine lokale Kopie von [`fake-div-buttons.html`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) und fügen Sie jedem Button-`<div>` das Attribut [`role="button"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) hinzu, zum Beispiel:

```html
<div data-message="This is from the first button" tabindex="0" role="button">
  Click me!
</div>
```

Wenn Sie dies nun mit einem Screenreader ausprobieren, werden die Buttons mit Phrasen wie "Klicken Sie auf mich!, Button" gemeldet. Während dies viel besser ist, müssen Sie dennoch alle nativen Button-Merkmale implementieren, die Benutzer erwarten, wie das Behandeln von <kbd>enter</kbd> und Klickereignissen, wie im [`Button` Rollen-Dokumentation](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) beschrieben wird.

> [!NOTE]
> Vergessen Sie jedoch nicht, dass die Verwendung des richtigen semantischen Elements, wo immer möglich, immer besser ist. Wenn Sie einen Button erstellen möchten und ein {{htmlelement("button")}}-Element verwenden können, sollten Sie ein {{htmlelement("button")}}-Element verwenden!

### Benutzer durch komplexe Widgets führen

Es gibt eine ganze Reihe anderer [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles), die nicht-semantische Elementstrukturen als gängige UI-Funktionen identifizieren können, die über das hinausgehen, was in standardmäßigem HTML verfügbar ist, zum Beispiel [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role), [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role). Sie können mehrere nützliche Beispiele in der [Deque University Code-Bibliothek](https://dequeuniversity.com/library/) sehen, um eine Vorstellung zu bekommen, wie solche Steuerelemente barrierefrei gemacht werden können.

Sie können auch mehrere Live-Beispiele in unserer [WAI-ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles) Dokumentation finden. Sehen Sie sich zum Beispiel unser [ARIA: tab role example](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role#example) an, das erklärt, wie man eine barrierefreie Registerkartenoberfläche implementiert.

## Zusammenfassung

Dieser Artikel hat keineswegs alles behandelt, was in WAI-ARIA verfügbar ist, sollte Ihnen jedoch genügend Informationen gegeben haben, um zu verstehen, wie man es verwendet, und Ihnen einen Überblick über einige der gängigsten Muster geben, die es erfordern.

Im nächsten Artikel werden wir Ihnen einige Tests geben, die Sie verwenden können, um zu überprüfen, wie gut Sie all diese Informationen verstanden und sich gemerkt haben.

## Siehe auch

- [Aria Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes): Alle `aria-*` Attribute
- [WAI-ARIA Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles): Kategorien von ARIA-Rollen und die auf MDN behandelten Rollen
- [ARIA in HTML](https://w3c.github.io/html-aria/) auf W3C: Eine Spezifikation, die für jede HTML-Funktion die Barrierefreiheits-Semantik (ARIA) definiert, die von den Browsern implizit angewendet wird und die WAI-ARIA-Funktionen, die Sie setzen dürfen, wenn zusätzliche Semantiken erforderlich sind.
- [Deque University Code-Bibliothek](https://dequeuniversity.com/library/): Eine Bibliothek wirklich nützlicher und praktischer Beispiele, die zeigt, wie komplexe UI-Steuerelemente barrierefrei mit Hilfe von WAI-ARIA-Funktionen gemacht werden können.
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/) auf W3C: Ein sehr detailliertes Designmuster von der W3C, das erklärt, wie man verschiedene Arten von komplexen UI-Kontrollen implementiert und sie mit Hilfe von WAI-ARIA-Funktionen barrierefrei macht.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA", "Learn_web_development/Core/Accessibility")}}
