---
title: WAI-ARIA Grundlagen
slug: Learn_web_development/Core/Accessibility/WAI-ARIA_basics
l10n:
  sourceCommit: 05919da058e602fdc67f14bf82154819837a6789
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility")}}

Im Anschluss an den vorherigen Artikel ist es manchmal schwierig, komplexe UI-Steuerelemente zu erstellen, die unsemantisches HTML und dynamisch aktualisierte JavaScript-Inhalte beinhalten. WAI-ARIA ist eine Technologie, die bei solchen Problemen helfen kann, indem sie zusätzliche Semantik hinzufügt, die Browser und unterstützende Technologien erkennen und nutzen können, um Benutzer über die Vorgänge zu informieren. Hier zeigen wir, wie man es auf einfachem Niveau verwendet, um die Zugänglichkeit zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und Best Practices zur Barrierefreiheit, wie sie in den vorherigen Lektionen des Moduls vermittelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von WAI-ARIA — Bereitstellung von Semantik für ansonsten nicht-semantisches HTML, damit Nutzer von assistiven Technologien die bereitgestellten Schnittstellen verstehen können.</li>
          <li>Die grundlegende Syntax — Rollen, Attribute und Zustände.</li>
          <li>Landmarks und Orientierungshilfen.</li>
          <li>Verbesserung der Tastaturzugänglichkeit.</li>
          <li>Bekanntgabe dynamischer Inhaltsaktualisierungen mit Live-Regionen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist WAI-ARIA?

Beginnen wir damit, uns anzusehen, was WAI-ARIA ist und was es für uns tun kann.

### Ein völlig neues Set von Problemen

Als Web-Apps komplexer und dynamischer wurden, traten neue Barrierefreiheitsfunktionen und -probleme auf.

Zum Beispiel führte HTML eine Reihe von semantischen Elementen ein, um allgemeine Seitenmerkmale zu definieren ({{htmlelement("nav")}}, {{htmlelement("footer")}}, etc.). Bevor diese verfügbar waren, verwendeten Entwickler {{htmlelement("div")}}s mit IDs oder Klassen, z.B. `<div class="nav">`, aber diese waren problematisch, da es keine einfache Möglichkeit gab, ein spezifisches Seitenmerkmal wie die Hauptnavigation programmgesteuert zu finden.

Die anfängliche Lösung bestand darin, einen oder mehrere versteckte Links oben auf der Seite hinzuzufügen, um zur Navigation (oder was auch immer) zu verlinken, z.B.:

```html
<a href="#hidden" class="hidden">Skip to navigation</a>
```

Aber das ist immer noch nicht sehr präzise und kann nur verwendet werden, wenn der Screenreader vom Anfang der Seite liest.

Ein weiteres Beispiel: Apps begannen, komplexe Steuerelemente wie Datumswähler für die Auswahl von Daten, Schieberegler für die Werteauswahl usw. zu nutzen. HTML bietet spezielle Eingabetypen, um solche Steuerelemente darzustellen:

```html
<input type="date" /> <input type="range" />
```

Diese wurden ursprünglich nicht gut unterstützt, und es war und ist immer noch schwierig, sie zu stylen, was Designer und Entwickler dazu veranlasste, maßgeschneiderte Lösungen zu bevorzugen. Anstatt diese nativen Funktionen zu nutzen, verlassen sich einige Entwickler auf JavaScript-Bibliotheken, die solche Steuerelemente als eine Reihe von verschachtelten {{htmlelement("div")}}s generieren, die dann mit CSS gestylt und mit JavaScript gesteuert werden.

Das Problem hier ist, dass sie visuell funktionieren, aber Screenreader überhaupt nicht verstehen können, was sie sind, und ihre Benutzer bekommen nur mitgeteilt, dass sie ein Durcheinander von Elementen sehen können, ohne dass Semantik erklärt, was sie bedeuten.

### Eintritt von WAI-ARIA

[WAI-ARIA](https://www.w3.org/TR/wai-aria/) (Web Accessibility Initiative - Accessible Rich Internet Applications) ist eine Spezifikation, die vom W3C erstellt wurde und ein Set zusätzlicher HTML-Attribute definiert, die auf Elemente angewendet werden können, um zusätzliche Semantik bereitzustellen und die Barrierefreiheit dort zu verbessern, wo sie fehlt. Die Spezifikation definiert drei Hauptmerkmale:

- [Rollen](/de/docs/Web/Accessibility/ARIA/Roles)
  - : Diese definieren, was ein Element ist oder tut. Viele davon sind sogenannte Landmark-Rollen, die weitgehend den semantischen Wert von Strukturelementen duplizieren, wie `role="navigation"` ({{htmlelement("nav")}}), `role="banner"` (Dokument-{{htmlelement("header")}}), `role="complementary"` ({{htmlelement("aside")}}) oder `role="search"` ({{htmlelement("search")}}). Einige andere Rollen beschreiben verschiedene Seitenstrukturen, die keine Elemente haben, die diesen Rollen entsprechen, wie `role="tablist"` und `role="tabpanel"`, die häufig in Benutzeroberflächen zu finden sind.
- Attribute
  - : Diese definieren Eigenschaften von Elementen, die verwendet werden können, um ihnen zusätzliche Bedeutung oder Semantik zu geben. Ein Beispiel: `aria-required="true"` gibt an, dass eine Formulareingabe ausgefüllt werden muss, um gültig zu sein, während `aria-labelledby="label"` es ermöglicht, eine ID auf einem Element zu platzieren und sie dann als Beschriftung für alles andere auf der Seite zu referenzieren, einschließlich mehrerer Elemente, was mit `<label for="input">` nicht möglich ist. Ein Beispiel hierfür könnte die Verwendung von `aria-labelledby` sein, um anzugeben, dass eine Schlüsselbedeutung, die in einem {{htmlelement("div")}} enthalten ist, die Beschriftung für mehrere Tabellenzellen ist, oder es könnte als Alternative zum Bild-Alt-Text verwendet werden — vorhandene Informationen auf der Seite als Alt-Text eines Bildes anzugeben, anstatt sie innerhalb des `alt`-Attributs zu wiederholen. Ein Beispiel hierfür finden Sie unter [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives).
- Zustände
  - : Spezielle Eigenschaften, die die aktuellen Bedingungen eines Elements definieren, wie `aria-disabled="true"`, das einem Screenreader anzeigt, dass eine Formulareingabe derzeit deaktiviert ist. Zustände unterscheiden sich von Eigenschaften insofern, als Eigenschaften während des Lebenszyklus einer App unverändert bleiben, während Zustände sich ändern können, in der Regel programmgesteuert über JavaScript.

Ein wichtiger Punkt zu WAI-ARIA-Attributen ist, dass sie nichts an der Webseite ändern, außer der Information, die durch die Barrierefreiheits-APIs des Browsers bereitgestellt wird (woher Screenreader ihre Informationen beziehen). WAI-ARIA beeinflusst nicht die Webseitenstruktur, das DOM etc., obwohl die Attribute nützlich sein können, um Elemente mit CSS auszuwählen.

> [!NOTE]
> Eine nützliche Liste aller ARIA-Rollen und ihrer Verwendung, mit Links zu weiteren Informationen, finden Sie in der WAI-ARIA-Spezifikation — siehe [Definition der Rollen](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) — auf dieser Seite — siehe [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Roles).
>
> Die Spezifikation enthält auch eine Liste aller Attribute und Zustände, mit Links zu weiteren Informationen — siehe [Definitionen von Zuständen und Eigenschaften (alle `aria-*` Attribute)](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def).

### Wo wird WAI-ARIA unterstützt?

Dies ist keine einfache Frage zu beantworten. Es ist schwierig, eine schlüssige Ressource zu finden, die aufzeigt, welche Funktionen von WAI-ARIA unterstützt werden und wo, weil:

1. Es gibt eine Menge Funktionen in der WAI-ARIA-Spezifikation.
2. Es gibt viele Kombinationen aus Betriebssystemen, Browsern und Screenreadern.

Dieser letzte Punkt ist entscheidend — Um einen Screenreader überhaupt verwenden zu können, muss Ihr Betriebssystem Browser ausführen, die über die erforderlichen Barrierefreiheits-APIs verfügen, um die Informationen bereitzustellen, die Screenreader benötigen, um ihre Arbeit zu erledigen. Die meisten populären Betriebssysteme haben einen oder zwei Browser, mit denen Screenreader arbeiten können. Die Paciello Group hat einen recht aktuellen Beitrag, der Daten dazu bereitstellt — siehe [Grobe Anleitung: Browser, Betriebssysteme und Unterstützung von Screenreadern aktualisiert](https://www.tpgi.com/rough-guide-browsers-operating-systems-and-screen-reader-support-updated/).

Zusätzlich müssen Sie sich darum kümmern, ob die betreffenden Browser die ARIA-Funktionen unterstützen und sie über ihre APIs bereitstellen, aber auch, ob Screenreader diese Informationen erkennen und ihren Nutzern in sinnvoller Weise präsentieren.

1. Die Browserunterstützung ist nahezu universell.
2. Die Unterstützung von ARIA-Funktionen durch Screenreader ist noch nicht ganz auf diesem Niveau, aber die populärsten Screenreader nähern sich diesem Ziel an. Sie können sich ein Bild von den Unterstützungsstufen machen, indem Sie sich den Artikel Powermapper's [WAI-ARIA Screen reader compatibility](https://www.powermapper.com/tests/screen-readers/aria/) ansehen.

In diesem Artikel werden wir nicht den Versuch unternehmen, alle WAI-ARIA-Funktionen und deren genaue Unterstützungsdetails zu behandeln. Stattdessen werden wir die wichtigsten WAI-ARIA-Funktionen behandeln, die Sie kennen sollten; wenn wir keine Unterstützungsdetails erwähnen, können Sie davon ausgehen, dass die Funktion gut unterstützt wird. Jede Ausnahme davon werden wir deutlich erwähnen.

> [!NOTE]
> Einige JavaScript-Bibliotheken unterstützen WAI-ARIA, was bedeutet, dass, wenn sie UI-Funktionen wie komplexe Formularsteuerungen generieren, sie ARIA-Attribute hinzufügen, um die Barrierefreiheit dieser Funktionen zu verbessern. Wenn Sie nach einer 3rd-Party-JavaScript-Lösung für die schnelle UI-Entwicklung suchen, sollten Sie sicherlich die Barrierefreiheit ihrer UI-Widgets als wichtigen Faktor bei Ihrer Auswahl berücksichtigen. Gute Beispiele sind jQuery UI (siehe [About jQuery UI: Deep accessibility support](https://jqueryui.com/about/#deep-accessibility-support)), [ExtJS](https://www.sencha.com/products/extjs/), und [Dojo/Dijit](https://dojotoolkit.org/reference-guide/1.10/dijit/a11y/statement.html).

### Wann sollten Sie WAI-ARIA verwenden?

Wir haben über einige der Probleme gesprochen, die zur Schaffung von WAI-ARIA geführt haben, aber im Wesentlichen gibt es vier Hauptbereiche, in denen WAI-ARIA nützlich ist:

- Wegweiser/Landmarks
  - : ARIAs [`role`](/de/docs/Web/Accessibility/ARIA/Roles) Attributwerte können als Wegweiser fungieren, die entweder die Semantik von HTML-Elementen (z. B. {{htmlelement("nav")}}) replizieren oder über die HTML-Semantik hinausgehen, um funktionale Bereiche zu kennzeichnen, z.B. `search`, `tablist`, `tab`, `listbox`, etc.
- Dynamische Inhaltsaktualisierungen
  - : Screenreader haben Schwierigkeiten mit den Berichten von ständig wechselnden Inhalten; mit ARIA können wir `aria-live` verwenden, um Screenreader-Nutzer zu informieren, wenn ein Inhaltsbereich dynamisch aktualisiert wird: zum Beispiel, wenn JavaScript auf der Seite [neuen Inhalt vom Server abruft und das DOM aktualisiert](/de/docs/Learn_web_development/Core/Scripting/Network_requests).
- Verbesserung der Tastaturzugänglichkeit
  - : Es gibt eingebaute HTML-Elemente, die native Tastaturzugänglichkeit haben; wenn andere Elemente zusammen mit JavaScript verwendet werden, um ähnliche Interaktionen zu simulieren, leidet die Tastaturzugänglichkeit und die Berichterstattung durch den Screenreader darunter. Wo dies unvermeidlich ist, bietet WAI-ARIA eine Möglichkeit, anderen Elementen den Fokus zu ermöglichen (unter Verwendung von `tabindex`).
- Barrierefreiheit von unsemantischen Steuerelementen
  - : Wenn eine Reihe von verschachtelten `<div>`s zusammen mit CSS/JavaScript verwendet wird, um eine komplexe UI-Funktion zu erstellen, oder ein natives Steuerelement stark verbessert/geändert wird, kann die Barrierefreiheit leiden — Screenreader-Benutzer werden Schwierigkeiten haben zu verstehen, was die Funktion tut, wenn es keine Semantik oder andere Hinweise gibt. In diesen Situationen kann ARIA helfen, das Fehlende mit einer Kombination aus Rollen wie `button`, `listbox` oder `tablist` und Attributen wie `aria-required` oder `aria-posinset` bereitzustellen, um weitere Hinweise zur Funktionalität zu geben.

#### Sie sollten WAI-ARIA nur verwenden, wenn Sie es benötigen!

Die Verwendung der richtigen HTML-Elemente gibt Ihnen implizit die benötigten Rollen, und Sie sollten _immer_ [native HTML-Funktionen](/de/docs/Learn_web_development/Core/Accessibility/HTML) verwenden, um die Semantik bereitzustellen, die von Screenreader benötigt wird, um ihren Nutzern mitzuteilen, was vor sich geht. Manchmal ist dies nicht möglich, entweder weil Sie begrenzte Kontrolle über den Code haben oder weil Sie etwas Komplexes erstellen, das kein einfaches HTML-Element zur Implementierung hat. In solchen Fällen kann WAI-ARIA ein wertvolles Werkzeug zur Verbesserung der Barrierefreiheit sein.

Aber nochmals: Verwenden Sie es nur, wenn es notwendig ist!

> [!NOTE]
> Stellen Sie auch sicher, dass Sie Ihre Seite mit einer Vielzahl von _echten_ Benutzern testen — Menschen ohne Einschränkungen, Menschen, die Screenreader verwenden, Menschen, die Tastaturnavigation verwenden, etc. Sie werden bessere Einblicke darüber haben, wie gut es funktioniert.

## Praktische Implementierungen von WAI-ARIA

Im nächsten Abschnitt werden wir die vier Bereiche detaillierter betrachten, zusammen mit praktischen Beispielen. Bevor Sie fortfahren, sollten Sie eine Testumgebung für Screenreader einrichten, damit Sie einige der Beispiele testen können, während Sie durchgehen.

Lesen Sie unseren Abschnitt über das [Testen von Screenreadern](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers) für weitere Informationen.

### Wegweiser/Landmarks

WAI-ARIA fügt Browsern das [`role` Attribut](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) hinzu, das es Ihnen ermöglicht, Elementen auf Ihrer Seite überall dort, wo sie benötigt werden, zusätzlichen semantischen Wert zu verleihen. Der erste große Bereich, in dem dies nützlich ist, ist die Bereitstellung von Informationen für Screenreader, damit deren Benutzer gemeinsame Seitenelemente finden können. Dieses Beispiel hat die folgende Struktur:

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

Wenn Sie das Beispiel mit einem Screenreader in einem modernen Browser testen, erhalten Sie bereits einige nützliche Informationen. VoiceOver gibt Ihnen zum Beispiel Folgendes:

- Auf dem `<header>` Element — "banner, 2 items" (es enthält eine Überschrift und das `<nav>`).
- Auf dem `<nav>` Element — "navigation 2 items" (es enthält eine Liste und ein Formular).
- Auf dem `<main>` Element — "main 2 items" (es enthält einen Artikel und ein Aside).
- Auf dem `<aside>` Element — "complementary 2 items" (es enthält eine Überschrift und eine Liste).
- Auf der Sucheingabe des Formulars — "Search query, insertion at beginning of text".
- Auf dem `<footer>` Element — "footer 1 item".

Wenn Sie zum Landmarks-Menü von VoiceOver gehen (zugänglich mit VoiceOver-Taste + U und den Pfeiltasten, um durch die Menüauswahl zu navigieren), sehen Sie, dass die meisten Elemente schön aufgelistet sind, sodass sie schnell aufgerufen werden können.

![Menü für schnelle Zugänglichkeit von Mac VoiceOver. Überschriftenleiste und Liste der Wegweiser einschließlich Banner, Navigation, Hauptteil und Zusatzfunktionen.](landmarks-list.png)

Wir könnten hier jedoch besser sein. Das Suchformular ist ein wirklich wichtiger Anhaltspunkt, den die Leute finden wollen, aber es wird im Landmarks-Menü nicht aufgeführt oder über die Tatsache hinaus, dass das tatsächliche Eingabeelement als Sucheingabe (`<input type="search">`) identifiziert wird, nicht als bemerkenswerter Anhaltspunkt behandelt.

Wir könnten es durch die Verwendung von ARIA `role="search"` verbessern, aber die Verwendung des {{htmlelement("search")}} Elements gibt dem Formular implizit diese Rolle.

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

Am wichtigsten ist, dass wir semantisches HTML verwendet haben, das Bedeutung und Rollen für die Struktur der Seite liefert, ohne unnötige [`role`](/de/docs/Web/Accessibility/ARIA/Roles) Attribute zu unserer HTML-Struktur hinzuzufügen, die eine Struktur wie diese hat:

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

Wir haben Ihnen auch ein Bonusfeature in diesem Beispiel gegeben — das {{htmlelement("input")}}-Element wurde mit dem Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) versehen, das ihm eine beschreibende Bezeichnung gibt, die von einem Screenreader vorgelesen wird, auch wenn wir kein {{htmlelement("label")}} Element eingefügt haben. In solchen Fällen ist das sehr nützlich — ein solches Suchformular ist ein sehr häufiges, leicht erkennbares Merkmal und das Hinzufügen einer visuellen Bezeichnung würde das Seitendesign stören.

```html
<input
  type="search"
  name="q"
  placeholder="Search query"
  aria-label="Search through site content" />
```

Jetzt, wenn wir VoiceOver verwenden, um uns dieses Beispiel anzusehen, sehen wir einige Verbesserungen:

- Das Suchformular wird sowohl beim Durchblättern der Seite als auch im Landmarks-Menü als separates Element genannt.
- Der in dem `aria-label` Attribut enthaltene Beschriftungstext wird vorgelesen, wenn die Formulareingabe hervorgehoben wird.

Wenn Sie ältere Browser wie IE8 unterstützen müssen, empfiehlt es sich, ARIA-Rollen hierfür einzubeziehen. Und wenn Ihre Seite aus irgendeinem Grund nur mit `<div>`s aufgebaut ist, sollten Sie auf jeden Fall die ARIA-Rollen einfügen, um diese dringend benötigte Semantik bereitzustellen!

Sie werden mehr über diese Semantik und die Leistungsfähigkeit von ARIA-Attributen/-Eigenschaften im Folgenden erfahren, insbesondere im Abschnitt [Barrierefreiheit von unsemantischen Steuerelementen](#barrierefreiheit_von_unsemantischen_steuerelementen). Lassen Sie uns zunächst jedoch betrachten, wie ARIA bei dynamischen Inhaltsupdates helfen kann.

### Dynamische Inhaltsupdates

In den DOM geladene Inhalte können leicht mit einem Screenreader abgerufen werden, von Textinhalten bis hin zu alternativen Texten, die an Bilder angehängt sind. Traditionelle statische Websites mit hauptsächlich Textinhalten sind daher leicht für Menschen mit Sehbehinderungen zugänglich zu machen.

Das Problem ist, dass moderne Web-Apps oft nicht nur statischer Text sind — sie aktualisieren häufig Teile der Seite, indem sie neuen Inhalt vom Server abfragen (in diesem Beispiel verwenden wir ein statisches Array von Zitaten) und das DOM aktualisieren. Diese werden manchmal als **Live-Regionen** bezeichnet.

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

Das funktioniert zwar, ist jedoch nicht gut für die Barrierefreiheit — das Inhalts-Update wird von Screenreadern nicht erkannt, sodass deren Nutzer nicht wissen, was vor sich geht. Dies ist ein ziemlich triviales Beispiel, aber stellen Sie sich nur vor, Sie würden eine komplexe Benutzeroberfläche mit vielen ständig aktualisierenden Inhalten erstellen, wie etwa einem Chatroom, einer Strategie-Spieloberfläche oder einer Live-aktualisierten Einkaufswagenansicht — es wäre unmöglich, die App auf effektive Weise zu nutzen, ohne irgendeine Art von Möglichkeit, den Benutzern die Updates mitzuteilen.

WAI-ARIA stellt glücklicherweise einen nützlichen Mechanismus zur Verfügung, um diese Benachrichtigungen zu geben — die [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live) Eigenschaft. Wenn dieses auf ein Element angewendet wird, lesen Screenreader den aktualisierten Inhalt vor. Wie dringend der Inhalt vorgelesen wird, hängt vom Attributwert ab:

- `off`
  - : Der Standardwert. Updates sollten nicht angekündigt werden.
- `polite`
  - : Updates sollten nur angekündigt werden, wenn der Benutzer untätig ist.
- `assertive`
  - : Updates sollten dem Benutzer so schnell wie möglich angekündigt werden.

Hier aktualisieren wir das `<section>` öffnende Tag wie folgt:

```html
<section aria-live="assertive">…</section>
```

Dies wird einen Screenreader veranlassen, den Inhalt zu lesen, während er aktualisiert wird.

Es gibt eine zusätzliche Überlegung hier — nur das Stück Text, das aktualisiert wird, wird vorgelesen. Es wäre schön, wenn wir immer auch die Überschrift vorlesen könnten, damit sich der Benutzer daran erinnern kann, was vorgelesen wird. Dazu können wir die [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic) Eigenschaft dem Abschnitt hinzufügen. Aktualisieren Sie Ihr `<section>` öffnendes Tag nochmal, wie folgt:

```html
<section aria-live="assertive" aria-atomic="true">…</section>
```

Das `aria-atomic="true"`-Attribut veranlasst Screenreader, den gesamten Inhalt des Elements als eine atomare Einheit vorzulesen, nicht nur die Teile, die aktualisiert wurden.

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
> Die [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)-Eigenschaft ist ebenfalls recht nützlich, um zu steuern, was vorgelesen wird, wenn eine Live-Region aktualisiert wird. Sie können etwa nur Inhaltszugaben oder -entfernungen vorlesen lassen.

### Verbesserung der Tastaturzugänglichkeit

Wie in einigen anderen Bereichen des Moduls besprochen, ist einer der Hauptstärken von HTML in Bezug auf die Barrierefreiheit die eingebaute Tastaturzugänglichkeit von Funktionen wie Tasten, Formularelementen und Links. Generell können Sie die Tabulatortaste verwenden, um zwischen den Bedienelementen zu wechseln, die Eingabetaste verwenden, um Steuerelemente auszuwählen oder zu aktivieren, und gelegentlich andere Steuerelemente nach Bedarf (zum Beispiel die Auf- und Abwärtspfeile, um zwischen Optionen in einer `<select>` Box zu navigieren).

Manchmal müssen Sie jedoch Code schreiben, der entweder notorisch nicht-semantische Elemente als Tasten (oder andere Arten von Steuerelementen) verwendet oder fokusfähige Steuerelemente für nicht ganz den richtigen Zweck verwendet. Möglicherweise versuchen Sie, einen schlechten Code, den Sie geerbt haben, zu korrigieren, oder Sie erstellen eine Art komplexes Widget, das dies erfordert.

In Bezug darauf, nicht-fokusfähigen Code fokusfähig zu machen, erweitert WAI-ARIA das `tabindex`-Attribut mit einigen neuen Werten:

- `tabindex="0"` — wie oben angegeben, ermöglicht dieser Wert nicht normalerweise fokussierbaren Elementen, fokussierbar zu werden. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — Dies ermöglicht es nicht normalerweise fokussierbaren Elementen, beispielsweise über JavaScript oder als Ziel von Links, den Fokus zu erhalten.

Wir haben dies ausführlicher besprochen und eine typische Implementierung in unserem HTML-Barrierefreheitsartikel gezeigt — siehe [Wiederherstellung der Tastaturzugänglichkeit](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in).

### Barrierefreiheit von unsemantischen Steuerelementen

Dies folgt auf den vorherigen Abschnitt — wenn eine Reihe von verschachtelten `<div>`s zusammen mit CSS/JavaScript verwendet wird, um ein komplexes UI-Feature zu erstellen, oder ein natives Steuerelement stark verbessert/geändert wird, kann nicht nur die Tastaturzugänglichkeit darunter leiden, sondern für Nutzer von Screenreadern wird es schwierig festzustellen, was die Funktion tut, wenn es keine Semantik oder andere Hinweise gibt. In solchen Situationen kann ARIA helfen, diese fehlende Semantik bereitzustellen.

#### Formularvalidierung und Fehlermeldungen

Lassen Sie uns zuerst das Formularbeispiel erneut besuchen, das wir uns in unserem Artikel über CSS- und JavaScript-Barrierefreiheit angesehen haben (lesen Sie [Unauffälligkeit wahren](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#keeping_it_unobtrusive) für eine vollständige Zusammenfassung). Am Ende dieses Abschnitts haben wir gezeigt, dass wir einige ARIA-Attribute auf das Fehlermeldungsfeld angewendet haben, das alle Fehler beim Versuch, das Formular zu senden, anzeigt:

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

- [`role="alert"`](/de/docs/Web/Accessibility/ARIA/Roles/alert_role) verwandelt das angewendete Element automatisch in eine Live-Region, sodass Änderungen daran vorgelesen werden; es identifiziert es auch semantisch als eine Warnmeldung (wichtige zeit- oder kontextbezogene Informationen) und repräsentiert eine bessere, barrierefreiere Möglichkeit, einem Nutzer eine Warnung zu melden (modale Dialoge wie [`alert()`](/de/docs/Web/API/Window/alert) Anrufe haben eine Reihe von Barrierefreiheitsproblemen; siehe [Popup-Fenster](https://webaim.org/techniques/javascript/other#popups) von WebAIM).
- Ein [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)-Wert von `all` weist den Screenreader an, den Inhalt der Fehlerliste vorzulesen, wenn Änderungen daran vorgenommen werden — d.h. wenn Fehler hinzugefügt oder entfernt werden. Dies ist nützlich, weil der Benutzer wissen möchte, welche Fehler noch übrig sind, nicht nur, was hinzugefügt oder aus der Liste entfernt wurde.

Wir könnten weiter mit unserer ARIA-Nutzung gehen und mehr Validierungshilfe bereitstellen. Wie wäre es damit, anzugeben, ob Felder von Anfang an erforderlich sind und welchen Bereich das Alter haben sollte?

1. An diesem Punkt sollten Sie ein Exemplar unserer [`form-validation.html`](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html)- und [`validation.js`](https://github.com/mdn/learning-area/blob/main/accessibility/css/validation.js)-Dateien machen und in einem lokalen Verzeichnis speichern.
2. Öffnen Sie beide in einem Texteditor und sehen Sie sich an, wie der Code funktioniert.
3. Fügen Sie zunächst ein Absatz-Tag direkt über dem öffnenden `<form>`-Tag hinzu, wie das untenstehende, und kennzeichnen Sie die beiden Formular-`<label>`s mit einem Sternchen. Dies ist normalerweise, wie wir erforderliche Felder für sehende Benutzer markieren.

   ```html
   <p>Fields marked with an asterisk (*) are required.</p>
   ```

4. Dies macht visuellen Sinn, aber es ist nicht so einfach für Screenreader-Nutzer zu verstehen. Glücklicherweise bietet WAI-ARIA das Attribut [`aria-required`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required), um Screenreadern Hinweise zu geben, dass sie den Nutzern mitteilen sollten, dass Formulareingaben ausgefüllt sein müssen. Aktualisieren Sie die `<input>`-Elemente wie folgt:

   ```html
   <input type="text" name="name" id="name" aria-required="true" />

   <input type="number" name="age" id="age" aria-required="true" />
   ```

5. Wenn Sie das Beispiel jetzt speichern und es mit einem Screenreader testen, sollten Sie etwas wie "Geben Sie Ihren Namen Stern ein, erforderlich, Bearbeitungstext" hören.
6. Es könnte auch nützlich sein, wenn wir Screenreader-Nutzern und sehenden Nutzern eine Vorstellung davon geben, welcher Alterswert erwartet wird. Dies wird oft als Tooltip oder Platzhalter innerhalb des Formulareingabefelds präsentiert. WAI-ARIA umfasst die [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)- und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)-Eigenschaften, um Mindest- und Höchstwerte anzugeben, und Screenreader unterstützen die nativen Attribute `min` und `max`. Eine weitere gut unterstützte Funktion ist das HTML-`placeholder`-Attribut, das eine Nachricht enthalten kann, die angezeigt wird, wenn kein Wert eingegeben wurde und von einigen Screenreadern vorgelesen wird. Aktualisieren Sie Ihre Zahleneingabe wie folgt:

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

Fügen Sie immer ein {{HTMLelement('label')}} für jede Eingabe hinzu. Während einige Screenreader den Platzhaltertext ansagen, tun die meisten es nicht. Akzeptable Alternativen zum Bereitstellen von Beschriftungen für Formularelemente umfassen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) und [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby). Aber das `<label>`-Element mit einem `for`-Attribut ist die bevorzugte Methode, da es die Benutzerfreundlichkeit für alle Benutzer, einschließlich Mausklick-Nutzer, bietet.

> [!NOTE]
> Sie können das fertige Beispiel live unter [`form-validation-updated.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-updated.html) sehen.

WAI-ARIA ermöglicht auch einige fortgeschrittene Techniken zur Formularbeschriftung über das klassische {{htmlelement("label")}}-Element hinaus. Wir haben bereits darüber gesprochen, die [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)-Eigenschaft zu verwenden, um eine Bezeichnung bereitzustellen, wenn wir nicht möchten, dass die Bezeichnung für sehende Benutzer sichtbar ist (siehe den Abschnitt [Wegweiser/Landmarks](#signpostslandmarks), oben). Einige andere Techniken zur Beschriftung verwenden andere Eigenschaften, wie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), wenn Sie eine Nicht-`<label>`-Element als Beschriftung designieren oder mehrere Formulareingaben mit derselben Beschriftung versehen möchten, und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby), wenn Sie weitere Informationen mit einer Formulareingabe verknüpfen und sie auch vorlesen lassen möchten. Weitere Einzelheiten finden Sie im [Advanced Form Labeling-Artikel von WebAIM](https://webaim.org/techniques/forms/advanced).

Es gibt auch viele andere nützliche Eigenschaften und Zustände, um den Status von Formularelementen anzugeben. Zum Beispiel kann `aria-disabled="true"` verwendet werden, um anzugeben, dass ein Formularfeld deaktiviert ist. Viele Browser überspringen deaktivierte Formularelemente, was dazu führt, dass sie von Screenreadern nicht vorgelesen werden. In manchen Fällen wird ein deaktiviertes Element wahrgenommen, daher ist es eine gute Idee, dieses Attribut aufzunehmen, um dem Screenreader mitzuteilen, dass ein deaktiviertes Formularelement tatsächlich deaktiviert ist.

Wenn der deaktivierte Zustand einer Eingabe voraussichtlich wechselt, ist es auch eine gute idee, anzugeben, wann es passiert und was das Ergebnis ist. Im Beispiel [`form-validation-checkbox-disabled.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-checkbox-disabled.html) gibt es ein Kontrollkästchen, das bei Aktivierung ein weiteres Formularelement aktiviert, das weitere Informationen enthält. Wir haben eine versteckte Live-Region eingerichtet:

```html
<p class="hidden-alert" aria-live="assertive"></p>
```

Die mit absoluter Positionierung verborgen ist. Wenn dieses Kontrollkästchen aktiviert/deaktiviert wird, aktualisieren wir den Text in der versteckten Live-Region, um den Nutzern des Screenreaders mitzuteilen, was das Ergebnis des Aktivierens dieses Kontrollkästchens ist, sowie den `aria-disabled`-Zustand und einige visuelle Indikatoren aktualisieren:

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

#### Unsemantische Buttons als Buttons beschreiben

Wir haben schon einige Male in diesem Kurs erwähnt, die native Barrierefreiheit (und die Barrierefreiheitsthemen bei der Verwendung anderer Elemente zu Fake-) von Buttons, Links oder Formularelementen (siehe [UI-Steuerelemente](/de/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls) im HTML-Barrierefreiheitsartikel, und [Verbesserung der Tastaturzugänglichkeit](#verbesserung_der_tastaturzugänglichkeit), oben). Grundsätzlich können Sie in vielen Fällen die Tastaturzugänglichkeit ohne große Mühe wiederherstellen, indem Sie `tabindex` und ein wenig JavaScript verwenden.

Aber was ist mit Screenreadern? Sie werden die Elemente weiterhin nicht als Buttons sehen. Wenn wir unser [`fake-div-buttons.html`](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)-Beispiel in einem Screenreader ausprobieren, werden unsere gefälschten Buttons mit Sätzen wie "Klicken Sie hier!, Gruppe" gemeldet, was offensichtlich verwirrend ist.

Wir können dies mit einer WAI-ARIA-Rolle beheben. Machen Sie eine lokale Kopie von [`fake-div-buttons.html`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) und fügen Sie jedem Button-`<div>` das Attribut [`role="button"`](/de/docs/Web/Accessibility/ARIA/Roles/button_role) hinzu, zum Beispiel:

```html
<div data-message="This is from the first button" tabindex="0" role="button">
  Click me!
</div>
```

Jetzt, wenn Sie dies mit einem Screenreader versuchen, werden Sie Buttons mit Sätzen wie "Klicken Sie hier!, Button" gemeldet bekommen. Dies ist viel besser, aber Sie müssen immer noch alle nativen Button-Funktionen, die Benutzer erwarten, wie die Behandlung von <kbd>enter</kbd>- und Klickereignissen, wie im [`button` Role Documentation](/de/docs/Web/Accessibility/ARIA/Roles/button_role) erklärt, hinzufügen.

> [!NOTE]
> Vergessen Sie jedoch nicht, dass die Verwendung des richtigen semantischen Elements, wo möglich, immer besser ist. Wenn Sie einen Button erstellen möchten und ein {{htmlelement("button")}}-Element verwenden können, sollten Sie ein {{htmlelement("button")}}-Element verwenden!

#### Benutzern durch komplexe Widgets führen

Es gibt eine ganze Reihe weiterer [Rollen](/de/docs/Web/Accessibility/ARIA/Roles), die nicht-semantische Elementstrukturen als häufige UI-Funktionen identifizieren können, die über das hinausgehen, was in standardmäßigem HTML verfügbar ist, zum Beispiel [`combobox`](/de/docs/Web/Accessibility/ARIA/Roles/combobox_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Roles/slider_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role), [`tree`](/de/docs/Web/Accessibility/ARIA/Roles/tree_role). Sie können mehrere nützliche Beispiele in der [Deque university code library](https://dequeuniversity.com/library/) sehen, um Ihnen eine Vorstellung davon zu geben, wie solche Steuerelemente barrierefrei gestaltet werden können.

Lassen Sie uns ein Beispiel für uns durchführen. Wir kehren zu unserer einfachen absolut positionierten Registerkartenoberfläche zurück (siehe [Verbergen von Elementen](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#hiding_things) in unserem Artikel über CSS- und JavaScript-Barrierefreiheit), die Sie unter [Tabbed info box example](/de/docs/Learn_web_development/Core/CSS_layout/Practical_positioning_examples#a_tabbed_info-box) finden.

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

In diesem Beispiel benutzen wir eine Kombination aus semantischen Elementen, aria Rollen und aria Attributen. Das erste ist, dass wir ein {{htmlelement("button")}} Element als _Tab_ verwendet haben, das über einen Mausklick oder mit der Tastatur über die Leertaste oder Enter ausgewählt werden kann.

Angesetzte ARIA Funktionen beinhalten:

- Neue Rollen — [`tablist`](/de/docs/Web/Accessibility/ARIA/Roles/tablist_role), [`tab`](/de/docs/Web/Accessibility/ARIA/Roles/tab_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Roles/tabpanel_role)
  - : Diese identifizieren die wichtigen Bereiche der Registerkartenoberfläche — den Container für die Registerkarten, die Registerkarten selbst und die entsprechenden Registerkartenfelder.
- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)
  - : Definiert, welche Registerkarte derzeit ausgewählt ist. Während die Benutzer verschiedene Registerkarten auswählen, wird der Wert dieses Attributs auf den unterschiedlichen Registerkarten über JavaScript aktualisiert.
- `tabindex="-1"`
  - : `tabindex="-1"` nimmt das Element aus der Registerkartenreihenfolge. Da wir JavaScript verwenden, um es dem Benutzer zu ermöglichen, die Tabs über die Tastatur oder die Maus zu steuern, möchten wir nicht, dass der Benutzer die Tab-Taste verwenden kann, um zu den Buttons zu navigieren.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Dieses Attribut identifiziert ein Element (durch seine `id`), dass das Element beschriftet, in diesem Beispiel wird der `<article>` durch den entsprechenden Tab oder `<button>` beschriftet.
- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-controls)
  - : Dieses Attribut identifiziert ein Element (durch seine `id`), das von diesem Element kontrolliert wird, in diesem Beispiel wird der `<article>` durch den entsprechenden Tab oder `<button>` kontrolliert.

Wir hätten `aria-hidden` verwenden können, um den Inhalt der Tabpanels vor assistierenden Technologien zu verbergen, aber wenn dieser Inhalt fokussierbare Inhalte wie Links enthält, könnte der Benutzer immer noch zu diesem Inhalt gelangen, auch wenn aria-hidden=true für die nicht aktiven Panels eingestellt ist. In diesem Beispiel haben wir `class="is-hidden"` auf die Tabpanels angewendet, die den Tabs mit `aria-selected="false"` entsprechen, und verwenden CSS, um `display: none;` zu verhindern, was verhindert, dass der versteckte Inhalt vorgesehen wird.

In unseren Tests hat diese neue Struktur insgesamt Verbesserungen gebracht. Die `<button>`s werden jetzt als Tabs erkannt (z.B. wird "tab" vom Screenreader ausgesprochen), die ausgewählte Tab wird durch "selected" angezeigt, die mit dem Tabnamen vorgelesen wird und jeder Inhalt, der nicht gezeigt wird, kann nicht anvisiert werden. Der Benutzer kann die Tabs auch mit der Tastatur oder der Maus navigieren.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihr Wissen: WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics/Test_your_skills:_WAI-ARIA).

## Zusammenfassung

Dieser Artikel hat keineswegs alles abgedeckt, was in WAI-ARIA verfügbar ist, aber er sollte Ihnen genug Informationen gegeben haben, um zu verstehen, wie man es verwendet und einige der häufigsten Muster zu kennen, auf die Sie stoßen werden, die es erfordern.

## Siehe auch

- [Aria-Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/Attributes): Alle `aria-*` Attribute
- [WAI-ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Roles): Kategorien von ARIA-Rollen und die auf MDN behandelten Rollen
- [ARIA in HTML](https://www.w3.org/TR/html-aria/) auf W3C: Eine Spezifikation, die definiert, welche Barrierefreiheits-(ARIA-)Semantik jedem HTML-Feature implizit durch den Browser angewendet wird und welche WAI-ARIA-Features Sie darauf anwenden können, wenn zusätzliche Semantik erforderlich ist
- [Deque university code library](https://dequeuniversity.com/library/): Eine Bibliothek mit wirklich nützlichen und praktischen Beispielen, die zeigen, wie komplexe UI-Steuerelemente mit WAI-ARIA-Features barrierefrei gemacht werden können
- [WAI-ARIA-Autorierungspraktiken](https://www.w3.org/WAI/ARIA/apg/) auf W3C: Ein sehr detailliertes Designmuster des W3C, das erklärt, wie verschiedene Arten von komplexen UI-Steuerelementen implementiert werden können und gleichzeitig mit WAI-ARIA-Features barrierefrei sind

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility")}}
