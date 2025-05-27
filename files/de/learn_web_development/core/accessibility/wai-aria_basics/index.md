---
title: Grundlagen von WAI-ARIA
short-title: WAI-ARIA
slug: Learn_web_development/Core/Accessibility/WAI-ARIA_basics
l10n:
  sourceCommit: edb16c0a662d7e719efe67561389a7a087c1ace9
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility")}}

Anknüpfend an den vorherigen Artikel kann es manchmal schwierig sein, komplexe UI-Steuerelemente zu erstellen, die aus unsemantischem HTML und dynamischen, durch JavaScript aktualisierten Inhalten bestehen. WAI-ARIA ist eine Technologie, die bei solchen Problemen helfen kann, indem sie zusätzliche Semantiken hinzufügt, die von Browsern und assistiven Technologien erkannt und genutzt werden können, um Benutzer darüber zu informieren, was vor sich geht. Hier zeigen wir, wie man sie auf grundlegender Ebene nutzt, um die Zugänglichkeit zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und den Best Practices zur Barrierefreiheit, wie sie in den vorherigen Lektionen im Modul vermittelt wurden.</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von WAI-ARIA — Semantiken in ansonsten nicht-semantisches HTML einzubetten, damit Benutzer von assistiven Technologien die präsentierten Schnittstellen verstehen können.</li>
          <li>Die grundlegende Syntax — Rollen, Eigenschaften und Zustände.</li>
          <li>Orientierungspunkte und Wegweiser.</li>
          <li>Verbesserung der Tastaturzugänglichkeit.</li>
          <li>Wie man dynamische Inhaltsänderungen mit Live-Regionen ankündigt.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist WAI-ARIA?

Lassen Sie uns beginnen, indem wir betrachten, was WAI-ARIA ist und was es für uns tun kann.

### Eine ganz neue Reihe von Problemen

Mit der zunehmenden Komplexität und Dynamik von Webanwendungen tauchten neue Funktionen und Probleme in der Barrierefreiheit auf.

Beispielsweise führte HTML eine Reihe semantischer Elemente ein, um übliche Seitenmerkmale zu definieren ({{htmlelement("nav")}}, {{htmlelement("footer")}}, usw.). Bevor diese verfügbar waren, verwendeten Entwickler {{htmlelement("div")}}s mit IDs oder Klassen, z.B. `<div class="nav">`, was problematisch war, da es keine einfache Möglichkeit gab, ein bestimmtes Seitenmerkmal wie die Hauptnavigation programmatisch leicht zu finden.

Die anfängliche Lösung bestand darin, einen oder mehrere versteckte Links am Seitenanfang hinzuzufügen, um auf die Navigation (oder was auch immer) zu verlinken, zum Beispiel:

```html
<a href="#hidden" class="hidden">Skip to navigation</a>
```

Aber das ist immer noch nicht sehr präzise und kann nur verwendet werden, wenn der Bildschirmleser von oben auf der Seite liest.

Ein weiteres Beispiel: Apps begannen komplexe Steuerelemente wie Datumsauswahlen zum Wählen von Daten oder Schieberegler zum Wählen von Werten zu verwenden. HTML bietet spezielle Eingabetypen, um solche Steuerelemente zu rendern:

```html
<input type="date" /> <input type="range" />
```

Diese wurden ursprünglich nicht gut unterstützt, und es war, und ist in gewissem Maße immer noch, schwierig, sie zu stylen. Daher neigten Designer und Entwickler zu benutzerdefinierten Lösungen. Anstelle dieser nativen Funktionen verlassen sich einige Entwickler auf JavaScript-Bibliotheken, die solche Steuerelemente als eine Reihe verschachtelter {{htmlelement("div")}}s generieren, die dann mit CSS gestylt und mit JavaScript gesteuert werden.

Das Problem dabei ist, dass sie visuell zwar funktionieren, aber Bildschirmleser keinen Sinn daraus machen können, und deren Benutzer einfach hörten, dass sie ein Durcheinander von Elementen ohne Semantik sehen, die erklärt, was sie bedeuten.

### Einführung von WAI-ARIA

[WAI-ARIA](https://www.w3.org/TR/wai-aria/) (Web Accessibility Initiative - Accessible Rich Internet Applications) ist eine vom W3C verfasste Spezifikation, die eine Reihe zusätzlicher HTML-Attribute definiert. Diese können auf Elemente angewendet werden, um zusätzliche Semantiken bereitzustellen und die Zugänglichkeit dort zu verbessern, wo sie fehlt. In der Spezifikation sind drei Hauptmerkmale definiert:

- [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Diese definieren, was ein Element ist oder tut. Viele dieser Rollen sind sogenannte Landmark-Rollen, die im Wesentlichen den semantischen Wert von Strukturelementen duplizieren, wie `role="navigation"` ({{htmlelement("nav")}}), `role="banner"` (Dokument {{htmlelement("header")}}), `role="complementary"` ({{htmlelement("aside")}}) oder `role="search"` ({{htmlelement("search")}}). Einige andere Rollen beschreiben verschiedene Seitenstrukturen, die keine Elemente haben, die diesen Rollen entsprechen, wie `role="tablist"` und `role="tabpanel"`, die häufig in UIs zu finden sind.
- Eigenschaften
  - : Diese definieren Eigenschaften von Elementen, die verwendet werden können, um ihnen zusätzliche Bedeutung oder Semantik zu verleihen. Beispielsweise gibt `aria-required="true"` an, dass ein Formulareingabefeld ausgefüllt werden muss, um gültig zu sein, während `aria-labelledby="label"` Ihnen ermöglicht, eine ID auf ein Element zu setzen, es dann als Bezeichnung für alles andere auf der Seite zu referenzieren, einschließlich mehrerer Elemente, was mit `<label for="input">` nicht möglich ist. Zum Beispiel könnten Sie `aria-labelledby` verwenden, um anzugeben, dass eine Tastenerklärung in einem {{htmlelement("div")}} die Beschriftung für mehrere Tabellenspalten ist, oder Sie könnten es als Alternative zu Bild-Alt-Text verwenden — bestehende Informationen auf der Seite als Alt-Text eines Bildes angeben, anstatt sie im `alt`-Attribut zu wiederholen. Ein Beispiel dafür finden Sie unter [Textalternativen](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives).
- Zustände
  - : Spezielle Eigenschaften, die den aktuellen Zustand von Elementen definieren, wie `aria-disabled="true"`, das einem Bildschirmleser angibt, dass ein Formulareingabeelement derzeit deaktiviert ist. Zustände unterscheiden sich von Eigenschaften darin, dass sich Eigenschaften im Lebenszyklus einer App nicht ändern, während Zustände sich ändern können, in der Regel programmatisch über JavaScript.

Ein wichtiger Punkt zu WAI-ARIA-Attributen ist, dass sie nichts an der Webseite beeinflussen, außer den Informationen, die über die Barrierefreiheits-APIs der Browser freigegeben werden (von denen Bildschirmleser ihre Informationen beziehen). WAI-ARIA beeinflusst weder die Struktur der Webseite noch das DOM, obwohl die Attribute nützlich für die Auswahl von Elementen über CSS sein können.

> [!NOTE]
> Sie finden eine nützliche Liste aller ARIA-Rollen und deren Nutzung mit Links zu weiteren Informationen in der WAI-ARIA-Spezifikation — siehe [Definition der Rollen](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) — auf dieser Seite — siehe [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles).
>
> Die Spezifikation enthält auch eine Liste aller Eigenschaften und Zustände mit Links zu weiteren Informationen — siehe [Definitionen von Zuständen und Eigenschaften (alle `aria-*` Attribute)](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def).

### Wo wird WAI-ARIA unterstützt?

Diese Frage ist nicht leicht zu beantworten. Es ist schwierig, eine abschließende Ressource zu finden, die angibt, welche Merkmale von WAI-ARIA unterstützt werden und wo, weil:

1. Es gibt eine Vielzahl von Funktionen in der WAI-ARIA-Spezifikation.
2. Es gibt viele Kombinationen von Betriebssystemen, Browsern und Bildschirmlesern zu berücksichtigen.

Dieser letzte Punkt ist entscheidend — Um einen Bildschirmleser überhaupt nutzen zu können, benötigt Ihr Betriebssystem Browser, die die notwendigen Barrierefreiheits-APIs implementiert haben, um die Informationen bereitzustellen, die Bildschirmleser benötigen, um ihre Arbeit zu erledigen. Die meisten populären Betriebssysteme haben ein oder zwei Browser, mit denen Bildschirmleser arbeiten können. Die Paciello Group bietet einen recht aktuellen Beitrag, der Daten dafür bereitstellt — siehe [Rough Guide: browsers, operating systems and screen reader support updated](https://www.tpgi.com/rough-guide-browsers-operating-systems-and-screen-reader-support-updated/).

Als nächstes müssen Sie sicherstellen, dass die betreffenden Browser ARIA-Funktionen unterstützen und sie über ihre APIs bereitstellen, und auch, ob Bildschirmleser diese Informationen erkennen und sie ihren Benutzern auf nützliche Weise präsentieren.

1. Die Browserunterstützung ist fast universell.
2. Die Unterstützung der Bildschirmleser für ARIA-Funktionen erreicht nahezu dieses Niveau, aber die beliebtesten Bildschirmleser kommen dem nahe. Sie können sich einen Eindruck über die Unterstützungsniveaus machen, indem Sie sich den Artikel [WAI-ARIA Screen reader compatibility](https://www.powermapper.com/tests/screen-readers/aria/) auf Powermapper ansehen.

In diesem Artikel versuchen wir nicht, jede WAI-ARIA-Funktion und ihre genauen Unterstützungsdetails abzudecken. Stattdessen behandeln wir die wichtigsten WAI-ARIA-Funktionen, die Sie kennen sollten; wenn wir keine Unterstützungsdetails erwähnen, können Sie davon ausgehen, dass die Funktion gut unterstützt wird. Wir werden alle Ausnahmen deutlich erwähnen.

> [!NOTE]
> Einige JavaScript-Bibliotheken unterstützen WAI-ARIA, was bedeutet, dass sie bei der Erzeugung von UI-Funktionen wie komplexen Formularsteuerelementen ARIA-Attribute hinzufügen, um die Zugänglichkeit dieser Funktionen zu verbessern. Wenn Sie nach einer Drittanbieter-JavaScript-Lösung für die schnelle UI-Entwicklung suchen, sollten Sie die Barrierefreiheit der UI-Widgets als wichtigen Faktor bei der Entscheidung berücksichtigen. Gute Beispiele sind jQuery UI (siehe [About jQuery UI: Deep accessibility support](https://jqueryui.com/about/#deep-accessibility-support)), [ExtJS](https://www.sencha.com/products/extjs/), und [Dojo/Dijit](https://dojotoolkit.org/reference-guide/1.10/dijit/a11y/statement.html).

### Wann sollten Sie WAI-ARIA verwenden?

Wir haben bereits einige der Probleme besprochen, die zur Schaffung von WAI-ARIA geführt haben, aber im Wesentlichen gibt es vier Hauptbereiche, in denen WAI-ARIA nützlich ist:

- Wegweiser/Landmarken
  - : Mit dem [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)-Attribut von ARIA können Werte als Landmarken fungieren, die entweder die Semantik von HTML-Elementen replizieren (z.B. {{htmlelement("nav")}}) oder über die HTML-Semantik hinausgehen, um zu verschiedenen funktionalen Bereichen zu führen, beispielsweise `search`, `tablist`, `tab`, `listbox`, usw.
- Dynamische Inhaltsaktualisierungen
  - : Bildschirmleser haben Schwierigkeiten damit, ständig aktualisierte Inhalte zu berichten; mit ARIA können wir `aria-live` verwenden, um Benutzer von Bildschirmlesern zu informieren, wenn ein Inhaltsbereich dynamisch aktualisiert wird: zum Beispiel durch JavaScript auf der Seite, das neue Inhalte vom Server abruft und das DOM aktualisiert [Inhaltsaktualisierungen mit Live-Regionen ankündigen](https://www.tpgi.com/rough-guide-browsers-operating-systems-and-screen-reader-support-updated/).
- Verbesserung der Tastaturzugänglichkeit
  - : Es gibt eingebaute HTML-Elemente mit nativer Tastaturzugänglichkeit; wenn andere Elemente zusammen mit JavaScript genutzt werden, um ähnliche Interaktionen zu simulieren, leidet die Tastaturzugänglichkeit und die Berichterstattung durch Bildschirmleser darunter. Wo dies unvermeidlich ist, bietet WAI-ARIA eine Möglichkeit, anderen Elementen den Fokus zu ermöglichen (mithilfe von `tabindex`).
- Zugänglichkeit nicht-semantischer Steuerelemente
  - : Wenn eine Reihe verschachtelter `<div>`s zusammen mit CSS/JavaScript verwendet wird, um ein komplexes UI-Feature zu erstellen, oder ein natives Steuerelement stark erweitert/verändert wird, leidet die Zugänglichkeit — Benutzer von Bildschirmlesern finden es schwierig zu verstehen, was das Feature tut, wenn keine Semantiken oder sonstigen Hinweise gegeben sind. In solchen Situationen kann ARIA helfen, das Fehlende mit einer Kombination aus Rollen wie `button`, `listbox` oder `tablist` bereitzustellen, und Eigenschaften wie `aria-required` oder `aria-posinset`, um weitere Hinweise auf die Funktionalität zu geben.

#### Sie sollten WAI-ARIA nur verwenden, wenn Sie es benötigen!

Das Verwenden der korrekten HTML-Elemente gibt Ihnen die benötigten Rollen implizit vor, und Sie sollten _immer_ [native HTML-Funktionen](/de/docs/Learn_web_development/Core/Accessibility/HTML) nutzen, um die Semantik bereitzustellen, die Bildschirmleser brauchen, um ihren Benutzern mitzuteilen, was vor sich geht. Manchmal ist das nicht möglich, entweder weil Sie nur begrenzte Kontrolle über den Code haben, oder weil Sie etwas Komplexes erstellen, das kein einfaches HTML-Element dafür gibt.

Aber nochmals, verwenden Sie es nur, wenn nötig!

> [!NOTE]
> Versuchen Sie außerdem sicherzustellen, dass Sie Ihre Seite mit einer Vielzahl von _echten_ Benutzern testen — Nichtbehinderten, Menschen mit Bildschirmlesern, Menschen, die die Tastaturnavigation verwenden usw. Sie werden mehr Einblicke darüber haben, wie gut es funktioniert.

## Praktische WAI-ARIA-Implementierungen

Im nächsten Abschnitt werden wir die vier Bereiche näher betrachten, zusammen mit praktischen Beispielen. Bevor Sie fortfahren, sollten Sie eine Testumgebung für Bildschirmleser einrichten, damit Sie einige der Beispiele testen können, während Sie sie durchlaufen.

Siehe unseren Abschnitt über [Testen von Bildschirmlesern](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers) für weitere Informationen.

### Wegweiser/Landmarken

WAI-ARIA fügt den Browsern das [`role` Attribut](https://www.w3.org/TR/wai-aria-1.1/#role_definitions) hinzu, das es Ihnen erlaubt, Elementen auf Ihrer Seite dort, wo sie benötigt werden, zusätzlichen semantischen Wert zu verleihen. Das erste große Gebiet, in dem dies nützlich ist, besteht darin, Informationen für Bildschirmleser bereitzustellen, damit ihre Benutzer häufige Seitenelemente finden können. Dieses Beispiel hat die folgende Struktur:

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

Wenn Sie das Beispiel mit einem modernen Browser und einem Bildschirmleser testen, erhalten Sie bereits einige nützliche Informationen. Zum Beispiel gibt Ihnen VoiceOver Folgendes:

- Auf dem `<header>`-Element — "Banner, 2 Elemente" (es enthält eine Überschrift und das `<nav>`).
- Auf dem `<nav>`-Element — "Navigation 2 Elemente" (es enthält eine Liste und ein Formular).
- Auf dem `<main>`-Element — "Hauptinhalt 2 Elemente" (es enthält einen Artikel und ein Oversized).
- Auf dem `<aside>`-Element — "Ergänzend 2 Elemente" (es enthält eine Überschrift und eine Liste).
- Beim Suchformulareingabefeld — "Suchanfrage, Einfügemodus am Anfang des Textes".
- Auf dem `<footer>`-Element — "Fußzeile 1 Element".

Wenn Sie das VoiceOver's Landmarks-Menü aufrufen (zugänglich über VoiceOver-Taste + U und dann mit den Pfeiltasten durch die Menüoptionen blättern), sehen Sie, dass die meisten Elemente schön aufgelistet sind, sodass sie schnell aufgerufen werden können.

![Mac's VoiceOver-Menü für schnelle Zugänglichkeit. Landmarks-Header und Landmarkenliste einschließlich Banner, Navigation, Hauptteil und ergänzend.](landmarks-list.png)

Allerdings könnten wir hier besser sein. Das Suchformular ist eine wirklich wichtige Landmarke, die Menschen finden wollen, aber es ist nicht im Landmarks-Menü aufgeführt oder wird über den tatsächlichen Input hinaus nicht als bemerkenswerte Landmarke behandelt (`<input type="search">`).

Wir könnten es durch die Verwendung der ARIA `role="search"` verbessern, aber die Verwendung des {{htmlelement("search")}}-Elements gibt dem Formular diese Rolle implizit.

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

Am Wichtigsten haben wir semantisches HTML verwendet, das Bedeutung und Rollen in die Struktur der Seite ohne das Hinzufügen von unnötigen [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)-Attributen zu unserer HTML-Struktur einbringt, die eine Struktur wie folgt hat:

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

Wir haben Ihnen in diesem Beispiel auch eine Bonusfunktion gegeben — das {{htmlelement("input")}}-Element hat das Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) erhalten, das ihm eine beschreibende Bezeichnung gibt, um von einem Bildschirmleser vorgelesen zu werden, selbst wenn wir kein {{htmlelement("label")}}-Element enthalten haben. In Fällen wie diesen ist das sehr nützlich — ein Suchformular wie dieses ist ein sehr häufiges, einfach zu erkennendes Merkmal, und das Hinzufügen eines sichtbaren Etiketts würde das Seitendesign verderben.

```html
<input
  type="search"
  name="q"
  placeholder="Search query"
  aria-label="Search through site content" />
```

Wenn wir jetzt VoiceOver verwenden, um dieses Beispiel anzusehen, erhalten wir einige Verbesserungen:

- Das Suchformular wird als eigenes Element genannt, sowohl beim Durchsuchen der Seite als auch im Landmarks-Menü.
- Der im `aria-label`-Attribut enthaltene Beschriftungstext wird vorgelesen, wenn das Formularfeld hervorgehoben ist.

Wenn Sie ältere Browser wie IE8 unterstützen müssen, ist es sinnvoll, ARIA-Rollen für diesen Zweck einzufügen. Und wenn aus irgendeinem Grund Ihre Seite nur mit `<div>`s erstellt wird, sollten Sie auf jeden Fall die ARIA-Rollen einfügen, um diese dringend benötigten Semantiken bereitzustellen!

Sie werden unten viel mehr über diese Semantiken und die Kraft von ARIA-Eigenschaften/Attributen sehen, insbesondere im Abschnitt [Zugänglichkeit nicht-semantischer Steuerelemente](#zugänglichkeit_nict-semantischer_steuerlemente). Jetzt schauen wir uns an, wie ARIA bei dynamischen Inhaltsaktualisierungen helfen kann.

### Dynamische Inhaltsaktualisierungen

Inhalte, die in das DOM geladen werden, können leicht mit einem Bildschirmleser aufgerufen werden, von Textinhalten bis hin zu alternativen Texten, die mit Bildern verbunden sind. Traditionelle statische Websites mit größtenteils Textinhalten sind daher einfach für Menschen mit visuellen Beeinträchtigungen zugänglich zu machen.

Das Problem ist, dass moderne Webanwendungen oft nicht nur statischer Text sind — sie aktualisieren oft Teile der Seite, indem sie neue Inhalte vom Server abrufen (in diesem Beispiel verwenden wir ein statisches Array von Zitaten) und das DOM aktualisieren. Diese werden manchmal als **Live-Regionen** bezeichnet.

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

Dies funktioniert soweit gut, aber es ist nicht gut für die Zugänglichkeit — die Inhaltsaktualisierung wird von Bildschirmlesern nicht erkannt, sodass ihre Benutzer nicht wissen würden, was vor sich geht. Dies ist ein ziemlich triviales Beispiel, aber stellen Sie sich einfach vor, Sie würden eine komplexe Benutzeroberfläche mit vielen ständig aktualisierten Inhalten erstellen, wie einen Chatroom, eine Strategie-Spieloberfläche, oder eine sich live aktualisierende Warenkorb-Anzeige — es wäre unmöglich, die App in irgendeiner effektiven Weise zu verwenden, ohne eine Art Möglichkeit zu haben, den Benutzer über die Aktualisierungen zu informieren.

WAI-ARIA bietet glücklicherweise einen nützlichen Mechanismus, um diese Alarme bereitzustellen — die [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)-Eigenschaft. Wenn dies auf ein Element angewendet wird, lesen Bildschirmleser den Inhalt aus, der aktualisiert wird. Wie dringend der Inhalt vorgelesen wird, hängt vom Attributwert ab:

- `off`
  - : Standardwert. Änderungen sollten nicht angekündigt werden.
- `polite`
  - : Änderungen sollten nur angekündigt werden, wenn der Benutzer inaktiv ist.
- `assertive`
  - : Änderungen sollten so schnell wie möglich dem Benutzer angekündigt werden.

Hier aktualisieren wir den `<section>`-Eingangstag wie folgt:

```html
<section aria-live="assertive">…</section>
```

Dies wird dazu führen, dass ein Bildschirmleser den Inhalt liest, wenn er aktualisiert wird.

Es gibt eine zusätzliche Überlegung hier — nur das aktualisierte Textbit wird vorgelesen. Es wäre schön, wenn wir jede Aktualisierung auch die Überschrift vorgelesen hätten, damit der Benutzer sich erinnern kann, was vorgelesen wird. Dazu können wir die [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)-Eigenschaft zur Sektion hinzufügen. Aktualisieren Sie Ihr `<section>`-Eingangstag erneut, wie folgt:

```html
<section aria-live="assertive" aria-atomic="true">…</section>
```

Das `aria-atomic="true"`-Attribut sagt den Bildschirmlesern, dass sie den gesamten Inhalt des Elements als eine atomare Einheit vorlesen sollen und nicht nur die geänderten Teile.

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
> Die [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)-Eigenschaft ist ebenfalls recht nützlich, um zu steuern, was vorgelesen wird, wenn eine Live-Region aktualisiert wird. Sie können beispielsweise nur Inhalte bei Hinzufügungen oder Entfernen vorlesen lassen.

### Verbesserung der Tastaturzugänglichkeit

Wie an einigen anderen Stellen im Modul besprochen, ist eine der Hauptstärken von HTML in Bezug auf die Zugänglichkeit die eingebaute Tastaturzugänglichkeit von Funktionen wie Buttons, Formularsteuerelementen und Links. Im Allgemeinen können Sie mit der Tabulatortaste zwischen Steuerelementen wechseln, mit der Enter/Return-Taste Steuerelemente auswählen oder aktivieren und gelegentlich andere Steuerelemente nach Bedarf (z.B. den Auf- und Ab-Cursor, um zwischen Optionen in einer `<select>`-Box zu wechseln).

Allerdings werden Sie manchmal dazu kommen, Code schreiben zu müssen, der entweder nicht-semantische Elemente als Buttons (oder andere Arten von Steuerelementen) verwendet oder fokussierbare Steuerelemente für einen nicht ganz richtigen Zweck verwendet. Sie könnten versuchen, fehlerhaften Code, den Sie geerbt haben, zu reparieren, oder eine Art komplexes Widget zu erstellen, das es erforderlich macht.

In Bezug darauf, nicht fokussierbaren Code fokussierbar zu machen, erweitert WAI-ARIA das `tabindex`-Attribut mit einigen neuen Werten:

- `tabindex="0"` — wie oben erwähnt, ermöglicht dieser Wert das Tabben durch normalerweise nicht tabbbare Elemente. Dies ist der nützlichste Wert von `tabindex`.
- `tabindex="-1"` — ermöglicht es normalerweise nicht tabbbaren Elementen, sich programmatisch über JavaScript oder als Ziel von Links fokussieren zu lassen.

Wir haben dies ausführlicher besprochen und in unserem HTML-Zugänglichkeitsartikel eine typische Implementierung gezeigt — siehe [Tastaturzugänglichkeit wieder einbauen](/de/docs/Learn_web_development/Core/Accessibility/HTML#building_keyboard_accessibility_back_in).

### Zugänglichkeit nicht-semantischer Steuerelemente

Dies folgt auf den vorherigen Abschnitt — wenn eine Reihe verschachtelter `<div>`s zusammen mit CSS/JavaScript verwendet wird, um ein komplexes UI-Feature zu erstellen, oder ein natives Steuerelement stark erweitert/verändert wird, leidet nicht nur die Tastaturzugänglichkeit, sondern Benutzer von Bildschirmlesern werden es schwierig finden, zu verstehen, was das Feature tut, wenn keine Semantiken oder andere Hinweise gegeben sind. In solchen Situationen kann ARIA helfen, diese fehlenden Semantiken bereitzustellen.

#### Formularvalidierung und Fehlerbenachrichtigungen

Erstens, lassen Sie uns das Formularbeispiel, das wir zuerst in unserem Artikel über CSS und JavaScript-Barrierefreiheit angesehen haben, nochmal überprüfen (lesen Sie [Es unauffällig halten](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#keeping_it_unobtrusive) für einen vollständigen Rückblick). Am Ende dieses Abschnitts zeigten wir, dass wir einige ARIA-Attribute auf das Fehlernachrichtenfeld eingefügt haben, das Validierungsfehler anzeigt, wenn Sie versuchen, das Formular abzusenden:

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

- [`role="alert"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) wandelt das Element automatisch in eine Live-Region um, sodass Änderungen daran vorgelesen werden; es identifiziert es auch semantisch als eine Warnmeldung (wichtige zeit-/kontext-sensible Informationen) und stellt eine bessere, zugänglichere Möglichkeit dar, dem Benutzer eine Warnung zu liefern (modale Dialoge wie [`alert()`](/de/docs/Web/API/Window/alert)-Aufrufe haben eine Reihe von Zugänglichkeitsproblemen; siehe [Popup-Fenster](https://webaim.org/techniques/javascript/other#popups) von WebAIM).
- Ein [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)-Wert von `all` weist den Bildschirmleser an, den Inhalt der Fehlerliste vorzulesen, wenn Änderungen daran vorgenommen werden — d.h. wenn Fehler hinzugefügt oder entfernt werden. Dies ist nützlich, weil der Benutzer wissen möchte, welche Fehler übrig sind, nicht nur, was zur Liste hinzugefügt oder davon entfernt wurde.

Wir könnten unsere Verwendung von ARIA noch weiter vorantreiben und etwas mehr Validierungshilfe bereitstellen. Wie wäre es, anzugeben, ob Felder überhaupt erforderlich sind und welchen Bereich das Alter haben sollte?

1. Erstellen Sie zu diesem Zeitpunkt eine Kopie unserer [`form-validation.html`](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html) und [`validation.js`](https://github.com/mdn/learning-area/blob/main/accessibility/css/validation.js)-Dateien und speichern Sie sie in einem lokalen Verzeichnis.
2. Öffnen Sie sie beide in einem Texteditor und schauen Sie sich an, wie der Code funktioniert.
3. Fügen Sie zunächst einen Absatz direkt über dem öffnenden `<form>`-Tag hinzu, wie den unten, und markieren Sie beide Formular `<label>`s mit einem Sternchen. So kennzeichnen wir normalerweise erforderliche Felder für sehende Benutzer.

   ```html
   <p>Fields marked with an asterisk (*) are required.</p>
   ```

4. Das macht visuell Sinn, aber es ist nicht so leicht für Bildschirmleser-Benutzer zu verstehen. Glücklicherweise bietet WAI-ARIA das [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)-Attribut, um Bildschirmlesern Hinweise zu geben, dass sie Benutzern mitteilen sollen, dass Formulareingaben ausgefüllt werden müssen. Aktualisieren Sie die `<input>`-Elemente folgendermaßen:

   ```html
   <input type="text" name="name" id="name" aria-required="true" />

   <input type="number" name="age" id="age" aria-required="true" />
   ```

5. Wenn Sie das Beispiel jetzt speichern und mit einem Bildschirmleser testen, sollten Sie so etwas hören wie "Geben Sie Ihren Namen ein, Stern, erforderlich, Editierfeld".
6. Es könnte auch nützlich sein, wenn wir Bildschirmleser-Benutzern und sehenden Benutzern eine Vorstellung davon geben, welcher Wert das Alter haben sollte. Dies wird häufig als Tooltip oder Platzhalter innerhalb des Formularfeldes präsentiert. WAI-ARIA umfasst die [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)-Eigenschaften, um Min- und Maxwerte anzugeben, und Bildschirmleser unterstützen die nativen `min`- und `max`-Attribute. Ein weiteres gut unterstütztes Feature ist das HTML-`placeholder`-Attribut, das eine Nachricht enthalten kann, die im Eingabefeld angezeigt wird, wenn kein Wert eingegeben wurde und von einigen Bildschirmlesern vorgelesen wird. Aktualisieren Sie Ihr Zahleninput so:

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

Fügen Sie immer ein {{HTMLelement('label')}} für jede Eingabe hinzu. Während einige Bildschirmleser den Platzhaltertext ankündigen, tun dies die meisten nicht. Akzeptable Ersatzmethoden, um Formularelementen einen zugänglichen Namen zu geben, schließen [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) und [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) ein. Das `<label>`-Element mit einem `for`-Attribut bleibt jedoch die bevorzugte Methode, da es die Bedienbarkeit für alle Benutzer, einschließlich der Mausbenutzer, gewährleistet.

> [!NOTE]
> Sie sehen das fertige Beispiel live auf [`form-validation-updated.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-updated.html).

WAI-ARIA ermöglicht auch einige erweiterte Beschriftungstechniken, die über das klassische {{htmlelement("label")}}-Element hinausgehen. Wir haben bereits die Verwendung des [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attributes erörtert, um eine Beschriftung bereitzustellen, wenn wir nicht möchten, dass die Beschriftung für sehende Benutzer sichtbar ist (siehe den Abschnitt [Wegweiser/Landmarken](#signpostslandmarks) oberhalb). Einige andere Kennzeichnungstechniken verwenden andere Eigenschaften wie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn Sie ein nicht-`<label>`-Element als Beschriftung benennen oder mehrere Formulareingänge mit derselben Beschriftung versehen möchten, und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby), wenn Sie weitere Informationen mit einem Formulareingang verknüpfen und ebenfalls vorlesen lassen möchten. Siehe [WebAIM's Advanced Form Labeling article](https://webaim.org/techniques/forms/advanced) für mehr Details.

Es gibt noch viele weitere nützliche Eigenschaften und Zustände, um den Status von Formularelementen anzugeben. Zum Beispiel kann `aria-disabled="true"` verwendet werden, um anzuzeigen, dass ein Formularfeld deaktiviert ist. Viele Browser überspringen deaktivierte Formularelemente, was dazu führt, dass sie von Bildschirmlesern nicht vorgelesen werden. In einigen Fällen wird ein deaktiviertes Element wahrgenommen, sodass es eine gute Idee ist, dieses Attribut hinzuzufügen, um dem Bildschirmleser mitzuteilen, dass ein deaktiviertes Formulareingabeelement tatsächlich deaktiviert ist.

Wenn sich der deaktivierte Zustand eines Eingabefeldes wahrscheinlich ändern wird, ist es auch eine gute Idee, anzuzeigen, wann dies geschieht und was das Ergebnis ist. Zum Beispiel in unserem [`form-validation-checkbox-disabled.html`](https://mdn.github.io/learning-area/accessibility/aria/form-validation-checkbox-disabled.html)-Demo gibt es ein Kontrollkästchen, das, wenn es aktiviert wird, eine weitere Formulareingabe ermöglicht, um weitere Informationen einzugeben. Wir haben eine versteckte Live-Region eingerichtet:

```html
<p class="hidden-alert" aria-live="assertive"></p>
```

welche durch absolute Positionierung aus der Sicht verborgen ist. Wenn dies angekreuzt/enaktiviert wird, aktualisieren wir den Text innerhalb der versteckten Live-Region, um Bildschirmleser-Benutzern mitzuteilen, was das Ergebnis des Ankreuzen ist, sowie den `aria-disabled`-Zustand und einige visuelle Indikatoren ebenfalls:

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

Ein paar Mal bereits in diesem Kurs haben wir über die native Zugänglichkeit (und die Zugänglichkeitsprobleme bei der Verwendung anderer Elemente zum Nachahmen von) Buttons, Links oder Formularelementen gesprochen (siehe [Verwenden Sie semantische UI-Elemente, wo möglich](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible) im HTML-Zugänglichkeitsartikel, und [Verbesserung der Tastaturzugänglichkeit](#verbesserung_der_tastaturzugänglichkeit) oben). Grundsätzlich können Sie die Tastaturzugänglichkeit in vielen Fällen ohne größere Schwierigkeiten zurückgewinnen, indem Sie `tabindex` und etwas JavaScript verwenden.

Aber was ist mit Bildschirmlesern? Sie sehen die Elemente immer noch nicht als Buttons. Wenn wir unser Beispiel [`fake-div-buttons.html`](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) in einem Bildschirmleser testen, werden unsere gefälschten Buttons mit Phrasen wie "Klicke mich!, Gruppe" berichtet, was offensichtlich verwirrend ist.

Wir können dies mit einer WAI-ARIA-Rolle beheben. Machen Sie eine lokale Kopie von [`fake-div-buttons.html`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html), und fügen Sie jedem Button-<div> ein [`role="button"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) hinzu, zum Beispiel:

```html
<div data-message="This is from the first button" tabindex="0" role="button">
  Click me!
</div>
```

Wenn Sie dies nun mit einem Bildschirmleser ausprobieren, werden die Buttons mit Phrasen wie "Klicke mich!, Button" berichtet. Obwohl dies viel besser ist, müssen Sie dennoch alle nativen Button-Merkmale, die Benutzer erwarten, wie das Behandeln von <kbd>Enter</kbd>- und Klickevents hinzufügen, wie im [`button`-Rolle-Dokumentation](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) erklärt.

> [!NOTE]
> Vergessen Sie jedoch nicht, dass es immer besser ist, das richtige semantische Element zu verwenden, wo dies möglich ist. Wenn Sie einen Button erstellen möchten und ein {{htmlelement("button")}}-Element verwenden können, sollten Sie ein {{htmlelement("button")}}-Element verwenden!

#### Benutzer durch komplexe Widgets führen

Es gibt eine ganze Reihe anderer [Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles), die nicht-semantische Elementstrukturen als gängige UI-Features identifizieren können, die über das hinausgehen, was in standardmäßigem HTML verfügbar ist, beispielsweise [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role), [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role). Sie können mehrere nützliche Beispiele in der [Deque university code library](https://dequeuniversity.com/library/) sehen, um eine Vorstellung davon zu bekommen, wie solche Steuerelemente zugänglich gemacht werden können.

Lassen Sie uns ein eigenes Beispiel durchgehen. Wir kehren zu unserer einfachen absolut positionierten Registerkartenschnittstelle zurück (siehe [Verstecken von Dingen](/de/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#hiding_things) in unserem Artikel über CSS und JavaScript-Barrierefreiheit), das Sie unter [Tabbed info box example](/de/docs/Learn_web_development/Core/CSS_layout/Practical_positioning_examples#a_tabbed_info-box) finden können.

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

    for (const tab of this.tabs) {
      const tabpanel = document.getElementById(
        tab.getAttribute("aria-controls"),
      );

      tab.tabIndex = -1;
      tab.setAttribute("aria-selected", "false");
      this.tabpanels.push(tabpanel);

      tab.addEventListener("keydown", this.onKeydown.bind(this));
      tab.addEventListener("click", this.onClick.bind(this));

      this.firstTab ??= tab;
      this.lastTab = tab;
    }

    this.setSelectedTab(this.firstTab);
  }

  setSelectedTab(currentTab) {
    for (const tab of this.tabs.length) {
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

window.addEventListener("load", () => {
  const tablists = document.querySelectorAll("[role=tablist].manual");
  for (const tablist of tablists) {
    new TabsManual(tablist);
  }
});
```

{{EmbedLiveSample("aria-tabbed-info-box", "100", "270")}}

In diesem Beispiel haben wir eine Kombination aus semantischen Elementen, aria-Rollen und aria-Attributen verwendet. Das erste dieser Elemente ist, dass wir ein {{htmlelement("button")}}-Element als _Tab_ verwendet haben. Dies bedeutet, dass das Tab entweder durch einen Mausklick oder über die Tastatur mit Space oder Enter ausgewählt werden kann.

Verwendete ARIA-Funktionen umfassen:

- Neue Rollen — [`tablist`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role), [`tab`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role), [`tabpanel`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role)
  - : Diese identifizieren die wichtigen Bereiche der Registerkartenschnittstelle — den Container für die Registerkarten, die Registerkarten selbst und die entsprechenden Registerkartenbereiche.
- [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
  - : Definiert, welche Registerkarte derzeit ausgewählt ist. Während verschiedene Registerkarten vom Benutzer ausgewählt werden, wird der Wert dieses Attributs auf den verschiedenen Registerkarten mithilfe von JavaScript aktualisiert.
- `tabindex="-1"`
  - : `tabindex="-1"` entfernt das Element aus der Tabulator-Reihenfolge. Da wir JavaScript verwenden, um dem Benutzer die Steuerung der Registerkarten über die Tastatur oder die Maus zu ermöglichen, wollen wir nicht, dass der Benutzer in der Lage ist, mit der Tabulatortaste zu den Buttons zu navigieren.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Dieses Attribut identifiziert ein Element (durch seine ID), das das Element beschriftet, in diesem Beispiel ist der `<article>` durch die entsprechende Registerkarte oder `<button>` beschriftet.
- [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
  - : Dieses Attribut identifiziert ein Element (durch seine ID), das durch das Element gesteuert wird, in diesem Beispiel wird der `<article>` durch die entsprechende Registerkarte oder `<button>` gesteuert.

Wir hätten `aria-hidden` verwenden können, um den Inhalt der Registerkarten von assistiven Technologien auszublenden, aber wenn dieser Inhalt fokussierbare Inhalte, wie Links enthält, könnte der Benutzer diese Inhalte dennoch in den Fokus rücken, selbst wenn `aria-hidden=true` für die nicht-aktiven Panels gesetzt ist. In diesem Beispiel haben wir `class="is-hidden"` auf die Registerkartenanwendungsbereiche angewendet, die den nicht ausgewählten Tabs entsprechen, und verwenden CSS, um `display: none;` anzuwenden, was das in den Focus setzen für die verborgenen Inhalte verhindert.

In unseren Tests hat diese neue Struktur dazu beigetragen, die Dinge insgesamt zu verbessern. Die `<button>`s werden nun als Registerkarten erkannt (z.B. "Registerkarte" wird vom Bildschirmleser gesprochen), die ausgewählte Registerkarte wird angezeigt, indem "ausgewählt" mit dem Tabnamen vorgelesen wird, und Inhalte, die nicht gezeigt werden, können nicht fokussiert werden. Der Benutzer kann außerdem die Registerkarten mit Tastatur oder Maus navigieren.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, dass Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA).

## Zusammenfassung

Dieser Artikel hat keineswegs alles abgedeckt, was in WAI-ARIA verfügbar ist, aber er sollte Ihnen genügend Informationen gegeben haben, um zu verstehen, wie Sie es verwenden können, und einige der häufigsten Muster zu kennen, die es erfordern.

## Siehe auch

- [Aria-Zustände und Eigenschaften](/de/docs/Web/Accessibility/ARIA/Reference/Attributes): Alle `aria-*` Attribute
- [WAI-ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles): Kategorien von ARIA-Rollen und die Rollen, die auf MDN behandelt werden
- [ARIA in HTML](https://www.w3.org/TR/html-aria/) auf W3C: Eine Spezifikation, die für jedes HTML-Merkmal definiert, welche Barrierefreiheits-(ARIA-)Semantiken implizit darauf angewendet werden durch den Browser und welche WAI-ARIA-Merkmale Sie darauf setzen können, wenn zusätzliche Semantiken benötigt werden
- [Deque university code library](https://dequeuniversity.com/library/): Eine Bibliothek mit wirklich nützlichen und praktischen Beispielen, die komplexe UI-Steuerelemente zeigen, die mit WAI-ARIA-Funktionen zugänglich gemacht werden
- [WAI-ARIA-Authoring-Praktiken](https://www.w3.org/WAI/ARIA/apg/) auf W3C: Ein sehr detailliertes Designmuster des W3C, das erklärt, wie verschiedene Arten komplexer UI-Steuerelemente implementiert werden sollen, während sie mit WAI-ARIA-Funktionen zugänglich gemacht werden

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility")}}
