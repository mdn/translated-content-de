---
title: WAI-ARIA Grundlagen
short-title: WAI-ARIA
slug: Learn_web_development/Core/Accessibility/WAI-ARIA_basics
l10n:
  sourceCommit: a1ac64fa4da965d2a152f08221b1a9aed638fd16
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility")}}

Aufbauend auf dem vorherigen Artikel kann es manchmal schwierig sein, komplexe UI-Steuerelemente zu erstellen, die unsemantisches HTML und dynamisch mit JavaScript aktualisierte Inhalte enthalten. WAI-ARIA ist eine Technologie, die bei solchen Problemen helfen kann, indem sie zusätzliche Semantiken hinzufügt, die Browser und unterstützende Technologien erkennen und nutzen können, um den Benutzern mitzuteilen, was vor sich geht. Hier zeigen wir, wie Sie es auf einer grundlegenden Ebene verwenden können, um die Barrierefreiheit zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und den bewährten Methoden zur Barrierefreiheit, wie sie in den vorherigen Lektionen des Moduls gelehrt werden.</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von WAI-ARIA — um Semantik zu nicht-semantischem HTML hinzuzufügen, damit Benutzer von unterstützenden Technologien die Schnittstellen, die ihnen präsentiert werden, verstehen können.</li>
          <li>Die grundlegende Syntax — Rollen, Eigenschaften und Zustände.</li>
          <li>Markierungen und Wegweiser.</li>
          <li>Verbesserung der Tastaturzugänglichkeit.</li>
          <li>Ankündigung dynamischer Inhaltsaktualisierungen mit Live-Regionen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist WAI-ARIA?

Lassen Sie uns beginnen, indem wir uns ansehen, was WAI-ARIA ist und was es für uns tun kann.

### Ein ganz neues Set von Problemen

Als Web-Apps komplexer und dynamischer wurden, tauchten eine Reihe neuer Barrierefreiheitsmerkmale und Probleme auf.

Zum Beispiel führte HTML eine Reihe von semantischen Elementen ein, um übliche Seitenmerkmale zu definieren ({{htmlelement("nav")}}, {{htmlelement("footer")}}, usw.). Bevor diese verfügbar waren, verwendeten Entwickler {{htmlelement("div")}}s mit IDs oder Klassen, z.B. `<div class="nav">`, aber diese waren problematisch, da es keine einfache Möglichkeit gab, ein bestimmtes Seitenmerkmal wie die Hauptnavigation programmgesteuert zu finden.

Die anfängliche Lösung bestand darin, einen oder mehrere versteckte Links oben auf der Seite hinzuzufügen, um zur Navigation (oder was auch immer) zu verlinken, zum Beispiel:

```html
<a href="#hidden" class="hidden">Skip to navigation</a>
```

Aber das ist immer noch nicht sehr präzise und kann nur verwendet werden, wenn der Screenreader vom Anfang der Seite liest.

Ein weiteres Beispiel: Apps begannen, komplexe Steuerelemente wie Datumsauswahlen zum Auswählen von Daten oder Schieberegler für Werte zu bieten. HTML bietet spezielle Eingabetypen, um solche Steuerelemente darzustellen:

```html
<input type="date" /> <input type="range" />
```

Diese wurden ursprünglich nicht gut unterstützt und es war (und ist teilweise immer noch) schwierig, sie zu stylen, wodurch Designer und Entwickler dazu neigten, benutzerdefinierte Lösungen zu verwenden. Anstatt diese nativen Funktionen zu verwenden, verlassen sich einige Entwickler auf JavaScript-Bibliotheken, die solche Steuerelemente als eine Reihe verschachtelter {{htmlelement("div")}}s erzeugen, die dann mit CSS gestylt und mit JavaScript gesteuert werden.

Das Problem hierbei ist, dass sie visuell funktionieren, aber Screenreader keinen Sinn darin sehen, was sie sind, und ihre Benutzer erfahren nur, dass sie ein Durcheinander von Elementen ohne Semantik sehen, die beschreibt, was sie bedeuten.

### Einführung von WAI-ARIA

[WAI-ARIA](https://www.w3.org/TR/wai-aria/) (Web Accessibility Initiative - Accessible Rich Internet Applications) ist eine Spezifikation, die vom W3C geschrieben wurde. Sie definiert eine Reihe zusätzlicher HTML-Attribute, die auf Elemente angewendet werden können, um zusätzliche Semantiken bereitzustellen und die Barrierefreiheit dort zu verbessern, wo sie fehlt. Drei Hauptmerkmale sind in der Spezifikation definiert:

- [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Diese definieren, was ein Element ist oder tut. Viele davon sind sogenannte Landmark-Rollen, die weitgehend den semantischen Wert von Strukturelementen duplizieren, wie `role="navigation"` ({{htmlelement("nav")}}), `role="banner"` (Dokument-{{htmlelement("header")}}), `role="complementary"` ({{htmlelement("aside")}}) oder `role="search"` ({{htmlelement("search")}}). Einige andere Rollen beschreiben unterschiedliche Seitenstrukturen, die keine passenden Elemente dazu haben, wie `role="tablist"`, und `role="tabpanel"`, die in UIs häufig vorkommen.
- Eigenschaften
  - : Diese definieren Eigenschaften von Elementen, die verwendet werden können, um ihnen zusätzliche Bedeutungen oder Semantiken zu geben. Ein Beispiel ist `aria-required="true"`, was angibt, dass ein Formulareingabefeld ausgefüllt werden muss, um gültig zu sein, während `aria-labelledby="label"` es ermöglicht, eine ID auf ein Element zu setzen und es dann als das Label für alles andere auf der Seite zu beziehen, inklusive mehrfacher Elemente, was mit `<label for="input">` nicht möglich ist. Zum Beispiel könnten Sie `aria-labelledby` verwenden, um anzugeben, dass eine Schlüsselbeschreibung in einem {{htmlelement("div")}} das Label für mehrere Tabellenzellen ist, oder es als Alternative zu Alt-Text für Bilder verwenden – d.h. bestehende Informationen auf der Seite als Alt-Text eines Bildes angeben, anstatt sie im `alt`-Attribut zu wiederholen. Sie können ein Beispiel hierfür unter [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) sehen.
- Zustände
  - : Spezielle Eigenschaften, die die aktuellen Bedingungen von Elementen definieren, wie `aria-disabled="true"`, was einem Screenreader mitteilt, dass ein Formulareingabefeld momentan deaktiviert ist. Zustände unterscheiden sich von Eigenschaften darin, dass Eigenschaften sich während des Lebenszyklus einer App nicht ändern, während Zustände sich ändern können, normalerweise programmatisch über JavaScript.

Ein wichtiger Punkt zu WAI-ARIA-Attributen ist, dass sie nichts an der Webseite beeinflussen, außer den Informationen, die durch die Accessibility-APIs des Browsers offengelegt werden (wo Screenreader ihre Informationen herbeziehen). WAI-ARIA beeinflusst die Webseitenstruktur nicht, das DOM, etc., obwohl die Attribute nützlich sein können, um Elemente mit CSS auszuwählen.

> [!NOTE]
> Sie können eine nützliche Liste aller ARIA-Rollen und deren Verwendungen mit Links zu weiteren Informationen in der WAI-ARIA-Spezifikation finden – siehe [Definition of Roles](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) – auf dieser Seite – siehe [ARIA roles](/de/docs/Web/Accessibility/ARIA/Reference/Roles).
>
> Die Spezifikation enthält auch eine Liste all der Eigenschaften und Zustände mit Links zu weiteren Informationen – siehe [Definitions of States and Properties (all `aria-*` attributes)](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def).

### Wo wird WAI-ARIA unterstützt?

Dies ist keine einfache Frage zu beantworten. Es ist schwierig, eine eindeutige Ressource zu finden, die besagt, welche Funktionen von WAI-ARIA unterstützt werden und wo, weil:

1. Es gibt viele Funktionen in der WAI-ARIA-Spezifikation.
2. Es gibt viele Kombinationen von Betriebssystemen, Browsern und Screenreadern, die berücksichtigt werden müssen.

Dieser letzte Punkt ist entscheidend – Um einen Screenreader überhaupt verwenden zu können, muss Ihr Betriebssystem Browser ausführen, die die erforderlichen Accessibility-APIs implementiert haben, um die Informationen offenzulegen, die Screenreader benötigen, um ihre Aufgabe zu erledigen. Die meisten beliebten Betriebssysteme haben ein oder zwei Browser im Einsatz, mit denen Screenreader arbeiten können. Die Paciello Group hat einen ziemlich aktuellen Beitrag, der Daten zu diesem Thema liefert – siehe [Rough Guide: browsers, operating systems and screen reader support updated](https://www.tpgi.com/rough-guide-browsers-operating-systems-and-screen-reader-support-updated/).

Anschließend müssen Sie sich Sorgen darüber machen, ob die betreffenden Browser ARIA-Funktionen unterstützen und sie über ihre APIs offenlegen, aber auch, ob Screenreader diese Informationen erkennen und sie ihren Benutzern auf sinnvolle Weise präsentieren.

1. Die Unterstützung durch Browser ist nahezu universell.
2. Die Unterstützung durch Screenreader für ARIA-Funktionen ist noch nicht ganz auf diesem Niveau, aber die beliebtesten Screenreader nähern sich an. Sie können sich einen Eindruck über den Unterstützungsgrad verschaffen, indem Sie den Artikel zu [WAI-ARIA Screen reader compatibility](https://www.powermapper.com/tests/screen-readers/aria/) von Powermapper ansehen.

In diesem Artikel werden wir nicht versuchen, jede WAI-ARIA-Funktion und deren genaue Unterstützungsdetails zu behandeln. Stattdessen werden wir die kritischsten WAI-ARIA-Funktionen behandeln, die Sie kennen sollten; wenn wir keine Unterstützungsdetails erwähnen, können Sie davon ausgehen, dass die Funktion gut unterstützt wird. Wir werden Ausnahmen von dieser Regel klar darlegen.

> [!NOTE]
> Einige JavaScript-Bibliotheken unterstützen WAI-ARIA, was bedeutet, dass sie beim Generieren von UI-Funktionen wie komplexen Form-Steuerelementen ARIA-Attribute hinzufügen, um die Barrierefreiheit dieser Funktionen zu verbessern. Wenn Sie eine Drittanbieter-JavaScript-Lösung für die schnelle UI-Entwicklung suchen, sollten Sie definitiv die Barrierefreiheit ihrer UI-Widgets als einen wichtigen Faktor bei Ihrer Entscheidung betrachten. Gute Beispiele sind jQuery UI (siehe [About jQuery UI: Deep accessibility support](https://jqueryui.com/about/#deep-accessibility-support)), [ExtJS](https://www.sencha.com/products/extjs/), und [Dojo/Dijit](https://dojotoolkit.org/reference-guide/1.10/dijit/a11y/statement.html).

### Wann sollten Sie WAI-ARIA verwenden?

Wir haben zuvor über einige der Probleme gesprochen, die zur Schaffung von WAI-ARIA geführt haben, aber im Wesentlichen gibt es vier Hauptbereiche, in denen WAI-ARIA nützlich ist:

- Wegweiser/Landmarks
  - : Die [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)-Attributwerte von ARIA können als Wegweiser fungieren, die entweder die Semantik von HTML-Elementen replizieren (z.B. {{htmlelement("nav")}}) oder über die HTML-Semantik hinausgehen, um Wegweiser zu verschiedenen Funktionsbereichen bereitzustellen, z.B. `search`, `tablist`, `tab`, `listbox`, usw.
- Dynamische Inhaltsaktualisierungen
  - : Screenreader haben oft Schwierigkeiten damit, ständig wechselnde Inhalte zu melden; mit ARIA können wir `aria-live` verwenden, um Screenreader-Benutzer zu informieren, wenn ein Inhaltsbereich dynamisch aktualisiert wird: z.B. durch JavaScript auf der Seite [neue Inhalte vom Server abrufen und das DOM aktualisieren](/de/docs/Learn_web_development/Core/Scripting/Network_requests).
- Verbesserung der Tastaturzugänglichkeit
  - : Es gibt eingebaute HTML-Elemente, die über native Tastaturzugänglichkeit verfügen; wenn andere Elemente zusammen mit JavaScript verwendet werden, um ähnliche Interaktionen zu simulieren, leidet die Tastaturzugänglichkeit und die Screenreader-Meldung darunter. Wo dies unvermeidlich ist, bietet WAI-ARIA eine Möglichkeit, anderen Elementen Fokussierungsfähigkeit zu verleihen (mit `tabindex`).
- Barrierefreiheit von nicht-semantischen Steuerelementen
  - : Wenn eine Reihe von verschachtelten `<div>`s zusammen mit CSS/JavaScript verwendet wird, um ein komplexes UI-Feature zu erstellen, oder ein natives Steuerelement stark durch JavaScript verbessert/verändert wird, leidet die Barrierefreiheit – Screenreader-Benutzer finden es schwierig, herauszufinden, was die Funktion tut, wenn keine Semantik oder andere Hinweise vorhanden sind. In solchen Situationen kann ARIA das Fehlende mit einer Kombination aus Rollen wie `button`, `listbox` oder `tablist`, und Eigenschaften wie `aria-required` oder `aria-posinset` bereitstellen, um weitere Hinweise auf die Funktionalität zu geben.

#### Sie sollten WAI-ARIA nur verwenden, wenn Sie es benötigen!

Das Verwenden der korrekten HTML-Elemente gibt Ihnen implizit die benötigten Rollen und Sie sollten _immer_ [native HTML-Funktionen](/de/docs/Learn_web_development/Core/Accessibility/HTML) verwenden, um die Semantik bereitzustellen, die Screenreader benötigen, um ihren Benutzern zu sagen, was vor sich geht. Manchmal ist dies nicht möglich, entweder weil Sie nur begrenzte Kontrolle über den Code haben oder weil Sie etwas Komplexes erstellen, das kein einfaches HTML-Element zur Implementierung besitzt. In solchen Fällen kann WAI-ARIA ein wertvolles Werkzeug zur Verbesserung der Barrierefreiheit sein.

Aber nochmals, verwenden Sie es nur, wenn nötig!

> [!NOTE]
> Versuchen Sie auch, sicherzustellen, dass Sie Ihre Website mit einer Vielzahl von _echten_ Benutzern testen – nicht-behinderte Personen, Personen, die Screenreader verwenden, Personen, die Tastaturnavigation verwenden, usw. Sie werden bessere Einblicke haben als Sie, wie gut es funktioniert.

## Praktische WAI-ARIA-Implementierungen

Im nächsten Abschnitt werden wir uns die vier Bereiche im Detail ansehen, zusammen mit praktischen Beispielen. Bevor Sie weiterlesen, sollten Sie ein Screenreader-Testsetup einrichten, damit Sie einige der Beispiele testen können, während Sie sie durchgehen.

Informieren Sie sich in unserem Abschnitt [Testen von Screenreadern](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers) für weitere Informationen.

### Wegweiser/Landmarks

WAI-ARIA fügt den Browsern das [`role`-Attribut](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) hinzu, mit dem Sie den Elementen auf Ihrer Website überall dort zusätzlichen semantischen Wert hinzufügen können, wo er benötigt wird. Der erste große Bereich, in dem dies nützlich ist, besteht darin, Informationen für Screenreader bereitzustellen, damit deren Benutzer gängige Seitenelemente finden können. Dieses Beispiel hat die folgende Struktur:

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

Wenn Sie versuchen, das Beispiel mit einem Screenreader in einem modernen Browser zu testen, erhalten Sie bereits einige nützliche Informationen. Zum Beispiel gibt VoiceOver Ihnen Folgendes:

- Beim `<header>`-Element — "banner, 2 items" (es enthält eine Überschrift und das `<nav>`).
- Beim `<nav>`-Element — "navigation 2 items" (es enthält eine Liste und ein Formular).
- Beim `<main>`-Element — "main 2 items" (es enthält einen Artikel und ein `aside`).
- Beim `<aside>`-Element — "complementary 2 items" (es enthält eine Überschrift und eine Liste).
- Beim Suchformulareingabefeld — "Search query, insertion at beginning of text".
- Beim `<footer>`-Element — "footer 1 item".

Wenn Sie das Landmark-Menü von VoiceOver öffnen (zugänglich über die VoiceOver-Taste + U und dann mit den Cursortasten durch die Menüoptionen blättern), sehen Sie, dass die meisten der Elemente schön aufgelistet sind, sodass Sie schnell darauf zugreifen können.

![Macs VoiceOver-Menü für schnelle Barrierefreiheit. Kopfzeile für Landmarks und Landmark-Liste einschließlich Banner, Navigation, Hauptbereich und Ergänzung.](landmarks-list.png)

Wir könnten es jedoch besser machen. Das Suchformular ist ein wirklich wichtiger Ankerpunkt, den die Leute finden werden möchten, aber es wird nicht im Landmark-Menü aufgelistet oder über das tatsächliche Eingabefeld hinaus als bemerkenswerter Bestandteil behandelt (`<input type="search">` wird aufgerufen).

Wir könnten es mit der Verwendung des ARIA `role="search"` verbessern, aber die Verwendung des {{htmlelement("search")}}-Elements gibt implizit diese Rolle an das Formular weiter.

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

Am wichtigsten ist, dass wir semantisches HTML verwendet haben, das den Aufbau der Seite ohne unnötige [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)-Attribute in unserer HTML-Struktur sinnvoll macht. Diese Struktur sieht so aus:

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

Wir haben Ihnen auch ein Bonus-Feature in diesem Beispiel gegeben – das {{htmlelement("input")}}-Element wurde mit dem Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) versehen, das ihm ein beschreibendes Label gibt, das von einem Screenreader vorgelesen wird, auch wenn wir kein {{htmlelement("label")}}-Element enthalten haben. In solchen Fällen ist dies sehr nützlich – ein Suchformular wie dieses ist ein sehr häufiges, leicht erkennbares Merkmal, und das Hinzufügen eines visuellen Labels würde das Seitendesign ruinieren.

```html
<input
  type="search"
  name="q"
  placeholder="Search query"
  aria-label="Search through site content" />
```

Wenn wir nun VoiceOver verwenden, um dieses Beispiel zu betrachten, erhalten wir einige Verbesserungen:

- Das Suchformular wird als separates Element aufgerufen, sowohl beim Durchblättern der Seite als auch im Landmark-Menü.
- Der im `aria-label`-Attribut enthaltene Label-Text wird vorgelesen, wenn das Formulareingabefeld hervorgehoben wird.

Wenn Sie ältere Browser wie IE8 unterstützen müssen; es lohnt sich, ARIA-Rollen für diesen Zweck aufzunehmen. Und wenn aus irgendeinem Grund Ihre Site nur mit `<div>`s aufgebaut ist, sollten Sie auf jeden Fall die ARIA-Rollen verwenden, um diese dringend benötigte Semantik zu ermöglichen!

Sie werden mehr über diese Semantiken und die Macht der ARIA-Eigenschaften/Attribute weiter unten sehen, besonders im Abschnitt [Barrierefreiheit von nicht-semantischen Steuerelementen](#barrierefreiheit_von_nicht-semantischen_steuerelementen). Für jetzt schauen wir uns an, wie ARIA bei dynamischen Inhaltsaktualisierungen helfen kann.

### Dynamische Inhaltsaktualisierungen

Inhalte, die in das DOM geladen werden, können leicht über einen Screenreader zugänglich gemacht werden, von textuellen Inhalten bis hin zu alternativen Texten, die an Bilder angefügt sind. Traditionelle statische Websites mit größtenteils Textinhalten sind daher leicht für Menschen mit visuellen Einschränkungen zugänglicher zu machen.

Das Problem ist, dass moderne Web-Apps oft nicht nur statischer Text sind – oft aktualisieren sie Teile der Seite, indem sie neue Inhalte vom Server abrufen (in diesem Beispiel verwenden wir ein statisches Array von Zitaten) und das DOM aktualisieren. Diese werden manchmal als **Live-Regionen** bezeichnet.

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

Dies funktioniert soweit gut, ist aber nicht gut für die Barrierefreiheit – die Inhaltsaktualisierung wird von Screenreadern nicht erkannt, sodass ihre Benutzer nicht wissen würden, was vor sich geht. Dies ist ein ziemlich triviales Beispiel, aber stellen Sie sich vor, Sie würden eine komplexe Benutzeroberfläche mit vielen ständig aktualisierenden Inhalten erstellen, wie ein Chatroom, eine Strategie-Spiele-UI oder eine Live-aktualisierte Warenkorbanzeige – es wäre unmöglich, die App effektiv zu verwenden, ohne irgendeine Möglichkeit, dem Benutzer die Updates mitzuteilen.

WAI-ARIA bietet glücklicherweise einen nützlichen Mechanismus, um diese Benachrichtigungen bereitzustellen — die [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)-Eigenschaft. Wenn Sie diese auf ein Element anwenden, veranlasst dies Screenreader, den aktualisierten Inhalt vorzulesen. Wie dringend der Inhalt vorgelesen wird, hängt vom Attributwert ab:

- `off`
  - : Der Standardwert. Aktualisierungen sollten nicht angekündigt werden.
- `polite`
  - : Aktualisierungen sollten nur angekündigt werden, wenn der Benutzer inaktiv ist.
- `assertive`
  - : Aktualisierungen sollten dem Benutzer so schnell wie möglich angekündigt werden.

Hier aktualisieren wir das `<section>`-Starttag wie folgt:

```html
<section aria-live="assertive">…</section>
```

Dies veranlasst Screenreader, den Inhalt vorzulesen, sobald er aktualisiert wird.

Es gibt hier eine zusätzliche Überlegung – nur der Teil des Textes, der aktualisiert wird, wird vorgelesen. Es wäre schön, wenn wir immer die Überschrift mitlesen lassen würden, damit der Benutzer sich daran erinnern kann, was vorgelesen wird. Dazu können wir die [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)-Eigenschaft hinzufügen. Aktualisieren Sie Ihr `<section>`-Starttag erneut, wie folgt:

```html
<section aria-live="assertive" aria-atomic="true">…</section>
```

Das `aria-atomic="true"`-Attribut gibt Screenreadern an, den gesamten Inhalt des Elements als eine atomare Einheit vorzulesen, nicht nur die aktualisierten Teile.

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
> Die [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)-Eigenschaft ist ebenfalls recht nützlich, um zu kontrollieren, was vorgelesen wird, wenn eine Live-Region aktualisiert wird. Sie können beispielsweise nur Hinzufügungen oder Entfernungen von Inhalten vorlesen lassen.

### Verbesserung der Tastaturzugänglichkeit

Wie in einigen anderen Stellen im Modul besprochen, ist eine der Hauptstärken von HTML in Bezug auf die Barrierefreiheit die eingebaute Tastaturzugänglichkeit von Funktionen wie Buttons, Formularelementen und Links. Im Allgemeinen können Sie die Tabulatortaste verwenden, um zwischen Steuerelementen zu wechseln, die Eingabe-/Return-Taste, um Steuerelemente auszuwählen oder zu aktivieren, und gelegentlich andere Steuerelemente, wenn nötig (zum Beispiel die Pfeiltasten nach oben und unten, um zwischen Optionen in einer `<select>`-Box zu wechseln).

Es kann jedoch vorkommen, dass Sie Code schreiben müssen, der entweder nicht-semantische Elemente als Buttons (oder andere Arten von Steuerelementen) verwendet oder fokussierbare Steuerelemente für nicht ganz den richtigen Zweck verwendet. Sie könnten versuchen, einige schlechten Code, den Sie geerbt haben, zu reparieren, oder Sie könnten ein komplexes Widget erstellen, das dies erfordert.

In Bezug darauf, nicht fokussierbaren Code fokussierbar zu machen, erweitert WAI-ARIA das `tabindex`-Attribut um einige neue Werte:

- `tabindex="0"` — Wie oben angezeigt, ermöglicht dieser Wert, dass nicht normal tabulierbare Elemente tabulierbar werden. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — Dies ermöglicht es, dass normalerweise nicht tabulierbare Elemente programmatisch fokussiert werden können, z.B. über JavaScript oder als Ziel von Links.

Wir haben dies bereits ausführlicher besprochen und eine typische Implementierung in unserem HTML-Barrierefähigkeitsartikel gezeigt – siehe [Building keyboard accessibility back in](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in).

### Barrierefreiheit von nicht-semantischen Steuerelementen

Dies ist eine Fortsetzung des vorherigen Abschnitts – wenn eine Reihe von verschachtelten `<div>`s zusammen mit CSS/JavaScript verwendet wird, um ein komplexes UI-Feature zu erstellen, oder wenn ein natives Steuerlement erheblich durch JavaScript verbessert/verändert wird, kann nicht nur die Tastaturzugäng`lichkeit leiden, sondern auch Screenreader-Benutzer werden Schwierigkeiten haben, herauszufinden, was die Funktion tut, wenn keine Semantik oder andere Hinweise vorhanden sind. In solchen Situationen kann ARIA helfen, diese fehlende Semantik bereitzustellen.

#### Formularvalidierung und Fehlermeldungen

Lassen Sie uns zuerst das Formularbeispiel wieder aufgreifen, das wir zuerst in unserem Artikel zur Zugänglichkeit von CSS und JavaScript gesehen haben (lesen Sie [Keeping it unobtrusive](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#keeping_it_unobtrusive) für eine vollständige Wiederholung). Am Ende dieses Abschnitts zeigten wir, dass wir einige ARIA-Attribute in die Fehlermeldungsbox eingefügt hatten, die alle Validierungsfehler anzeigt, wenn Sie versuchen, das Formular zu senden:

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

- [`role="alert"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) verwandelt automatisch das Element, auf welches es angewendet wird, in eine Live-Region, so dass Änderungen daran vorgelesen werden; es identifiziert es auch semantisch als eine Fehlermeldung (wichtige zeit- bzw. kontextabhängige Informationen) und stellt eine bessere, barrierefreiere Art der Bereitstellung einer Benachrichtigung für einen Benutzer dar (Modal-Dialoge wie [`alert()`](/de/docs/Web/API/Window/alert) Aufrufe haben eine Anzahl von Barrierefreiheitsproblemen; siehe [Popup Windows](https://webaim.org/techniques/javascript/other#popups) von WebAIM).
- Ein [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant) Wert von `all` weist den Screenreader an, den Inhalt der Fehlerliste vorzulesen, wenn irgendwelche Änderungen daran vorgenommen werden – d.h. wenn Fehler hinzugefügt oder entfernt werden. Dies ist nützlich, da der Benutzer wissen möchte, welche Fehler noch vorhanden sind, und nicht nur, was zur Liste hinzugefügt oder entfernt wurde.

Wir könnten mit unserer ARIA-Nutzung noch weiter gehen und etwas mehr Unterstützung bei der Validierung bieten. Wie wäre es, anzugeben, ob Felder überhaupt erforderlich sind, und welcher Bereich das Alter sein sollte?

1. Kopieren Sie an diesem Punkt unsere [`form-validation.html`](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html) und [`validation.js`](https://github.com/mdn/learning-area/blob/main/accessibility/css/validation.js) Dateien und speichern Sie sie in einem lokalen Verzeichnis.
2. Öffnen Sie sie beide in einem Texteditor und sehen Sie sich an, wie der Code funktioniert.
3. Fügen Sie zuerst einmal einen Absatz direkt über dem öffnenden `<form>`-Tag hinzu, wie unten gezeigt, und markieren Sie beide Formular-`<label>`s mit einem Sternchen. Dies ist normalerweise die Art und Weise, wie wir Pflichtfelder für sehende Benutzer kennzeichnen.

   ```html
   <p>Fields marked with an asterisk (*) are required.</p>
   ```

4. Dies macht visuell Sinn, aber es ist nicht so leicht für Screenreader-Benutzer zu verstehen. Glücklicherweise bietet WAI-ARIA das [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)-Attribut, um Screenreader-Benutzern Hinweise zu geben, dass Formulareingaben ausgefüllt werden müssen. Aktualisieren Sie die `<input>`-Elemente wie folgt:

   ```html
   <input type="text" name="name" id="name" aria-required="true" />

   <input type="number" name="age" id="age" aria-required="true" />
   ```

5. Wenn Sie das Beispiel jetzt speichern und mit einem Screenreader testen, sollten Sie etwas hören wie "Enter your name star, required, edit text".
6. Es könnte auch nützlich sein, Screenreader-Benutzern und sehenden Benutzern eine Vorstellung davon zu geben, wie der Alterswert sein sollte. Dies wird oft als Tooltip oder Platzhalter im Eingabefeld angezeigt. WAI-ARIA enthält [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) Eigenschaften, um Mindest- und Höchstwerte zu spezifizieren, und Screenreader unterstützen die nativen `min`- und `max`-Attribute. Eine weitere gut unterstützte Funktion ist das HTML-`placeholder`-Attribut, das eine Nachricht enthalten kann, die in der Eingabe angezeigt wird, wenn kein Wert eingegeben wurde, und von einigen wenigen Screenreadern vorgelesen wird. Aktualisieren Sie Ihre Zahleneingabe so:

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

Einschließen Sie immer einen {{HTMLelement('label')}} für jede Eingabe. Während einige Screenreader den Platzhaltertext bekannt geben, tun dies die meisten anderen nicht. Akzeptable Substitutionen für die Bereitstellung von Formularelementen mit einem zugänglichen Namen umfassen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) und [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby). Aber das `<label>`-Element mit einem `for`-Attribut ist die bevorzugte Methode, da es die Benutzbarkeit für alle Benutzer, einschließlich der Mausbenutzer, bietet.

> [!NOTE]
> Sie können das fertige Beispiel live unter [`form-validation-updated.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-updated.html) sehen.

WAI-ARIA ermöglicht auch einige fortgeschrittene Techniken zur Formularbeschriftung, außerhalb des klassischen {{htmlelement("label")}}-Elements. Wir haben bereits über die Verwendung der [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Eigenschaft gesprochen, um ein Label zu geben, wenn wir nicht möchten, dass das Label für sehende Benutzer sichtbar ist (siehe den Abschnitt [Wegweiser/Landmarks](#signpostslandmarks) oben). Einige andere Beschriftungstechniken verwenden andere Eigenschaften wie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn Sie ein nicht-`<label>`-Element als Label angeben oder mehrere Formulareingaben mit demselben Label beschriften möchten, und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby), wenn Sie zusätzliche Informationen mit einem Formulareingabefeld verknüpfen und auch vorlesen lassen möchten. Sehen Sie sich [WebAIM's Advanced Form Labeling article](https://webaim.org/techniques/forms/advanced) für mehr Details an.

Es gibt auch viele andere nützliche Eigenschaften und Zustände, um den Status von Formularelementen anzugeben. Zum Beispiel kann `aria-disabled="true"` verwendet werden, um anzuzeigen, dass ein Formularelement deaktiviert ist. Viele Browser springen über deaktivierte Formularelemente hinweg, was dazu führt, dass sie von Screenreadern nicht vorgelesen werden. In einigen Fällen wird ein deaktiviertes Element wahrgenommen, daher ist es eine gute Idee, dieses Attribut einzuschließen, um dem Screenreader mitzuteilen, dass ein deaktiviertes Formularelement tatsächlich deaktiviert ist.

Wenn sich der deaktivierte Zustand einer Eingabe wahrscheinlich ändert, ist es auch eine gute Idee, anzuzeigen, wann es passiert und was das Ergebnis ist. Zum Beispiel gibt es in unserem [`form-validation-checkbox-disabled.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-checkbox-disabled.html)-Demo ein Kontrollkästchen, das, wenn es aktiviert ist, ein weiteres Formularelement aktiviert, um weitere Informationen einzugeben. Wir haben eine versteckte Live-Region eingerichtet:

```html
<p class="hidden-alert" aria-live="assertive"></p>
```

Diese ist mit absoluter Positionierung vom Bildschirm ausgeblendet. Wenn diese aktiviert/deaktiviert wird, aktualisieren wir den Text in der versteckten Live-Region, um Screenreader-Benutzern mitzuteilen, was das Ergebnis des Aktivierens dieses Kontrollkästchens ist, sowie den `aria-disabled`-Zustand und einige visuelle Indikatoren:

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

Einige Male in diesem Kurs haben wir bereits die native Barrierefreiheit (und die Barrierefreiheitsprobleme bei der Verwendung anderer Elemente zur Imitation) von Buttons, Links oder Formularelementen erwähnt (siehe [Use semantic UI controls where possible](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible) im HTML-Accessibility-Artikel und [Enhancing keyboard accessibility](#verbesserung_der_tastaturzugänglichkeit) oben). Im Grunde können Sie die Tastaturzugänglichkeit in vielen Fällen ohne allzu große Schwierigkeiten mit `tabindex` und ein bisschen JavaScript zurückbringen.

Aber was ist mit Screenreadern? Sie werden die Elemente immer noch nicht als Buttons wahrnehmen. Wenn wir unser Beispiel [`fake-div-buttons.html`](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) in einem Screenreader testen, werden unsere falschen Schaltflächen mit Phrasen wie "Click me!, group" gemeldet, was offensichtlich verwirrend ist.

Wir können dies mit einer WAI-ARIA-Rolle beheben. Machen Sie eine lokale Kopie von [`fake-div-buttons.html`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) und fügen Sie [`role="button"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) zu jedem Button-`<div>` hinzu, zum Beispiel:

```html
<div data-message="This is from the first button" tabindex="0" role="button">
  Click me!
</div>
```

Jetzt, wenn Sie dies mit einem Screenreader testen, werden Buttons mit Phrasen wie "Click me!, button" gemeldet. Während dies viel besser ist, müssen Sie immer noch alle nativen Button-Funktionen hinzufügen, die die Benutzer erwarten, wie die Behandlung von <kbd>eingeben</kbd>- und Klickereignissen, wie im [`button`-Rolle-Dokument](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) erklärt.

> [!NOTE]
> Vergessen Sie jedoch nicht, dass es immer besser ist, das korrekte semantische Element zu verwenden, wenn möglich. Wenn Sie einen Button erstellen wollen und ein {{htmlelement("button")}}-Element verwenden können, sollten Sie ein {{htmlelement("button")}}-Element verwenden!

#### Benutzer durch komplexe Widgets führen

Es gibt eine ganze Reihe anderer [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles), die nicht-semantische Elementstrukturen als häufige UI-Funktionen identifizieren können, die über das hinausgehen, was im Standard-HTML verfügbar ist, z.B. [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role), [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role). Sie können mehrere nützliche Beispiele in der [Deque University Code-Bibliothek](https://dequeuniversity.com/library/) sehen, um Ihnen eine Vorstellung davon zu geben, wie solche Steuerelemente zugänglich gemacht werden können.

Lassen Sie uns unser eigenes Beispiel durchgehen. Wir kehren zu unserer einfachen, absolut positionierten Registerkartenoberfläche zurück (siehe [Hiding things](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#hiding_things) in unserem CSS- und JavaScript-Zugänglichkeitsartikel), das Sie im Beispiel [Tabbed info box example](/de/docs/Learn_web_development/Core/CSS_layout/Practical_positioning_examples#a_tabbed_info-box) finden.

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

In diesem Beispiel haben wir eine Kombination aus semantischen Elementen, ARIA-Rollen und ARIA-Attributen verwendet. Das erste davon ist, dass wir ein {{htmlelement("button")}}-Element als _Tab_ verwendet haben. Dies bedeutet, dass das Tabulatorfeld durch einen Mausklick oder über die Tastatur mit der Leertaste oder Enter ausgewählt werden kann.

Verwendete ARIA-Funktionen umfassen:

- Neue Rollen — [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role), [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role)
  - : Diese identifizieren die wichtigen Bereiche der Registerkartenoberfläche – den Container für die Tabs, die Tabs selbst und die entsprechenden Tabpanels.
- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
  - : Bestimmt, welches Tab gerade ausgewählt ist. Wenn der Benutzer verschiedene Tabs auswählt, wird der Wert dieses Attributs auf den verschiedenen Tabs via JavaScript aktualisiert.
- `tabindex="-1"`
  - : `tabindex="-1"` entfernt das Element aus der Tab-Reihenfolge. Da wir JavaScript verwenden, um es dem Benutzer zu ermöglichen, die Tabs über die Tastatur oder die Maus zu steuern, wollen wir nicht, dass der Benutzer mit der Tabulatortaste zu den Buttons navigieren kann.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Dieses Attribut identifiziert ein Element (durch seine `id`), das das Element beschriftet, in diesem Beispiel wird der `<article>` durch das entsprechende Tab oder `<button>` beschriftet.
- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
  - : Dieses Attribut identifiziert ein Element (durch seine `id`), das durch das Element gesteuert wird, in diesem Beispiel wird der `<article>` durch das entsprechende Tab oder `<button>` gesteuert.

Wir hätten `aria-hidden` verwenden können, um die Inhalte der Tabpanels vor unterstützenden Technologien zu verbergen, aber wenn dieser Inhalt fokussierbare Inhalte, wie Links enthielte, könnte der Benutzer immer noch zu diesem Inhalt wechseln, auch wenn `aria-hidden=true` für die nicht-aktiven Panels gesetzt ist. In diesem Beispiel haben wir `class="is-hidden"` auf die Tabpanels angewendet, die den Tabs mit `aria-selected="false"` entsprechen, und verwenden CSS, um `display: none;` zu verhindern, dass der verborgene Inhalt durchschritten werden kann.

In unseren Tests hat diese neue Struktur dazu beigetragen, die Dinge insgesamt zu verbessern. Die `<button>`s werden jetzt als Tabs erkannt (z.B. wird "tab" vom Screenreader gesprochen), das ausgewählte Tab wird durch die Ansage "selected" mit dem Tab-Namen angezeigt und alles, was nicht angezeigt wird, kann nicht durchschritten werden. Der Benutzer kann auch die Tabs mit der Tastatur oder Maus navigieren.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen – siehe [Testen Sie Ihre Fähigkeiten: WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA).

## Zusammenfassung

Dieser Artikel hat keineswegs alles behandelt, was in WAI-ARIA verfügbar ist, sollte Ihnen aber genug Informationen gegeben haben, um zu verstehen, wie es verwendet wird, und einige der häufigsten Muster zu kennen, denen Sie begegnen werden und die es erfordern.

## Siehe auch

- [Aria-Zustände und -Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes): Alle `aria-*`-Attribute
- [WAI-ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles): Kategorien von ARIA-Rollen und die auf MDN behandelten Rollen
- [ARIA in HTML](https://www.w3.org/TR/html-aria/) beim W3C: Eine Spezifikation, die für jede HTML-Funktion die Barrierefreiheits- (ARIA-)Semantiken definiert, die implizit von den Browsern angewendet werden und die WAI-ARIA-Funktionen, die Sie darauf setzen können, wenn zusätzliche Semantiken benötigt werden
- [Deque University Code-Bibliothek](https://dequeuniversity.com/library/): Eine Bibliothek mit wirklich nützlichen und praktischen Beispielen, die komplexe UI-Steuerelemente zeigen, die mit WAI-ARIA-Funktionen zugänglich gemacht wurden
- [WAI-ARIA-Autorenerfahrungen](https://www.w3.org/WAI/ARIA/apg/) beim W3C: Ein sehr detailliertes Designmusteruswilling des W3C, das erklärt, wie man verschiedene Arten von komplexen UI-Steuerelementen implementiert, während man sie mit WAI-ARIA-Funktionen barrierefrei macht

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility")}}
